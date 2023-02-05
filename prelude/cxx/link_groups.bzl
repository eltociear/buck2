# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under both the MIT license found in the
# LICENSE-MIT file in the root directory of this source tree and the Apache
# License, Version 2.0 found in the LICENSE-APACHE file in the root directory
# of this source tree.

load(
    "@prelude//linking:link_groups.bzl",
    "LinkGroupLib",  # @unused Used as a type
    "LinkGroupLibInfo",
)
load(
    "@prelude//linking:link_info.bzl",
    "LinkArgs",
    "LinkInfo",  # @unused Used as a type
    "LinkInfos",  # @unused Used as a type
    "LinkStyle",
    "Linkage",
    "LinkedObject",  # @unused Used as a type
    "SharedLibLinkable",
    "get_actual_link_style",
    "set_linkable_link_whole",
    get_link_info_from_link_infos = "get_link_info",
)
load(
    "@prelude//linking:linkable_graph.bzl",
    "LinkableGraph",  # @unused Used as a type
    "LinkableNode",  # @unused Used as a type
    "create_linkable_graph",
    "get_deps_for_link",
    "get_link_info",
    "get_linkable_graph_node_map_func",
)
load(
    "@prelude//linking:linkables.bzl",
    "linkable",
)
load(
    "@prelude//utils:graph_utils.bzl",
    "breadth_first_traversal_by",
)
load(
    "@prelude//utils:set.bzl",
    "set",
    "set_record",
)
load(
    "@prelude//utils:utils.bzl",
    "expect",
)
load(":cxx_context.bzl", "get_cxx_toolchain_info")
load(
    ":groups.bzl",
    "Group",  # @unused Used as a type
    "MATCH_ALL_LABEL",
    "NO_MATCH_LABEL",
    "compute_mappings",
    "parse_groups_definitions",
)
load(
    ":link.bzl",
    "cxx_link_shared_library",
)
load(
    ":linker.bzl",
    "get_no_as_needed_shared_libs_flags",
)
load(
    ":symbols.bzl",
    "create_dynamic_list_version_script",
    "create_undefined_symbols_argsfile",
    "extract_global_syms",
    "extract_undefined_syms",
)

LINK_GROUP_MAP_DATABASE_SUB_TARGET = "link-group-map-database"
LINK_GROUP_MAP_FILE_NAME = "link_group_map.json"

LinkGroupInfo = provider(fields = [
    "groups",  # [Group.type]
    "groups_hash",  # str.type
    "mappings",  # {"label": str.type}
])

LinkGroupLinkInfo = record(
    link_info = field(LinkInfo.type),
    link_style = field(LinkStyle.type),
)

LinkGroupLibSpec = record(
    # The output name given to the linked shared object.
    name = field(str.type),
    # Used to differentiate normal native shared libs from e.g. Python native
    # extensions (which are techncially shared libs, but don't set a SONAME
    # and aren't managed by `SharedLibraryInfo`s).
    is_shared_lib = field(bool.type, True),
    # The link group to link.
    group = field(Group.type),
)

LinkedLinkGroup = record(
    artifact = field(LinkedObject.type),
    library = field([LinkGroupLib.type, None], None),
    symbol_ldflags = field([""], []),
)

def parse_link_group_definitions(mappings: list.type) -> [Group.type]:
    return parse_groups_definitions(mappings, linkable)

def get_link_group(ctx: "context") -> [str.type, None]:
    return ctx.attrs.link_group

def build_link_group_info(
        linkable_graph: LinkableGraph.type,
        link_groups: [Group.type]) -> LinkGroupInfo.type:
    linkable_graph_node_map = get_linkable_graph_node_map_func(linkable_graph)()
    mappings = compute_mappings(groups = link_groups, graph_map = linkable_graph_node_map)
    return LinkGroupInfo(
        groups = link_groups,
        groups_hash = hash(str(link_groups)),
        mappings = mappings,
    )

def get_link_group_info(
        ctx: "context",
        executable_deps: [[LinkableGraph.type], None] = None) -> [LinkGroupInfo.type, None]:
    """
    Parses the currently analyzed context for any link group definitions
    and returns a list of all link groups with their mappings.
    """
    link_group_map = ctx.attrs.link_group_map

    if not link_group_map:
        return None

    # If specified as a dep that provides the `LinkGroupInfo`, use that.
    if type(link_group_map) == "dependency":
        return link_group_map[LinkGroupInfo]

    # Otherwise build one from our graph.
    expect(executable_deps != None)
    link_groups = parse_link_group_definitions(link_group_map)
    linkable_graph = create_linkable_graph(
        ctx,
        children = executable_deps,
    )
    return build_link_group_info(linkable_graph, link_groups)

def get_auto_link_group_libs(ctx: "context") -> [{str.type: LinkGroupLib.type}, None]:
    """
    Return link group libs created by the link group map rule.
    """
    link_group_map = ctx.attrs.link_group_map

    if not link_group_map:
        return None

    if type(link_group_map) == "dependency":
        info = link_group_map.get(LinkGroupLibInfo)
        if info == None:
            return None
        return info.libs

    fail("Link group maps must be provided as a link_group_map rule dependency.")

def get_link_group_preferred_linkage(link_groups: [Group.type]) -> {"label": Linkage.type}:
    return {
        mapping.root.label: mapping.preferred_linkage
        for group in link_groups
        for mapping in group.mappings
        if mapping.root != None and mapping.preferred_linkage != None
    }

def transitively_update_shared_linkage(
        linkable_graph_node_map: {"label": LinkableNode.type},
        link_group: [str.type, None],
        link_style: LinkStyle.type,
        link_group_preferred_linkage: {"label": Linkage.type},
        link_group_roots: {"label": str.type}):
    # Identify targets whose shared linkage style may be propagated to
    # dependencies. Implicitly created root libraries are skipped.
    shared_lib_roots = []
    for target in link_group_preferred_linkage:
        # This preferred-linkage mapping may not actually be in the link graph.
        node = linkable_graph_node_map.get(target)
        if node == None:
            continue
        actual_link_style = get_actual_link_style(link_style, link_group_preferred_linkage.get(target, node.preferred_linkage))
        if actual_link_style == LinkStyle("shared"):
            target_link_group = link_group_roots.get(target)
            if target_link_group == None or target_link_group == link_group:
                shared_lib_roots.append(target)

    # buildifier: disable=uninitialized
    def process_dependency(node: "label") -> ["label"]:
        linkable_node = linkable_graph_node_map[node]
        if linkable_node.preferred_linkage == Linkage("any"):
            link_group_preferred_linkage[node] = Linkage("shared")
        return get_deps_for_link(linkable_node, link_style)

    breadth_first_traversal_by(
        linkable_graph_node_map,
        shared_lib_roots,
        process_dependency,
    )

def get_filtered_labels_to_links_map(
        linkable_graph_node_map: {"label": LinkableNode.type},
        link_group: [str.type, None],
        link_group_mappings: [{"label": str.type}, None],
        link_group_preferred_linkage: {"label": Linkage.type},
        link_style: LinkStyle.type,
        deps: ["label"],
        # Additional roots to search for nodes in the target link group (e.g.
        # dlopen-enabled libs or outlined native Python extensions).
        other_roots: ["label"] = [],
        link_group_libs: {str.type: (["label", None], LinkInfos.type)} = {},
        prefer_stripped: bool.type = False,
        is_executable_link: bool.type = False) -> {"label": LinkGroupLinkInfo.type}:
    """
    Given a linkable graph, link style and link group mappings, finds all links
    to consider for linking traversing the graph as necessary and then
    identifies which link infos and targets belong the in the provided link group.
    If no link group is provided, all unmatched link infos are returned.
    """

    def get_traversed_deps(node: "label") -> ["label"]:
        linkable_node = linkable_graph_node_map[node]  # buildifier: disable=uninitialized

        # Always link against exported deps
        node_linkables = list(linkable_node.exported_deps)

        # If the preferred linkage is `static` or `any` with a link style that is
        # not shared, we need to link against the deps too.
        should_traverse = False
        if linkable_node.preferred_linkage == Linkage("static"):
            should_traverse = True
        elif linkable_node.preferred_linkage == Linkage("any"):
            should_traverse = link_style != Linkage("shared")

        if should_traverse:
            node_linkables += linkable_node.deps

        return node_linkables

    # Walk through roots looking for the first node which maps to the current
    # link group.
    def collect_and_traverse_roots(roots, node_target):
        node_link_group = link_group_mappings.get(node_target)
        if node_link_group == MATCH_ALL_LABEL:
            roots.append(node_target)
            return []
        if node_link_group == link_group:
            roots.append(node_target)
            return []
        return get_traversed_deps(node_target)

    # Get all potential linkable targets
    other_deps = []
    breadth_first_traversal_by(
        linkable_graph_node_map,
        other_roots,
        partial(collect_and_traverse_roots, other_deps),
    )
    linkables = breadth_first_traversal_by(
        linkable_graph_node_map,
        deps + other_deps,
        get_traversed_deps,
    )

    # An index of target to link group names, for all link group library nodes.
    # Provides fast lookup of a link group root lib via it's label.
    link_group_roots = {
        label: name
        for name, (label, _) in link_group_libs.items()
        if label != None
    }

    # Transitively update preferred linkage to avoid runtime issues from
    # missing dependencies (e.g. for prebuilt shared libs).
    transitively_update_shared_linkage(
        linkable_graph_node_map,
        link_group,
        link_style,
        link_group_preferred_linkage,
        link_group_roots,
    )

    linkable_map = {}

    # Keep track of whether we've already added a link group to the link line
    # already.  This avoids use adding the same link group lib multiple times,
    # for each of the possible multiple nodes that maps to it.
    link_group_added = {}

    def add_link(target: "label", link_style: LinkStyle.type):
        linkable_map[target] = LinkGroupLinkInfo(
            link_info = get_link_info(linkable_graph_node_map[target], link_style, prefer_stripped),
            link_style = link_style,
        )  # buildifier: disable=uninitialized

    def add_link_group(target: "label", target_group: str.type):
        # If we've already added this link group to the link line, we're done.
        if target_group in link_group_added:
            return

        # In some flows, we may not have access to the actual link group lib
        # in our dep tree (e.g. https://fburl.com/code/pddmkptb), so just bail
        # in this case.
        # NOTE(agallagher): This case seems broken, as we're not going to set
        # DT_NEEDED tag correctly, or detect missing syms at link time.
        link_group_lib = link_group_libs.get(target_group)
        if link_group_lib == None:
            return
        _, shared_link_infos = link_group_lib

        expect(target_group != link_group)
        link_group_added[target_group] = None
        linkable_map[target] = LinkGroupLinkInfo(
            link_info = get_link_info_from_link_infos(shared_link_infos),
            link_style = LinkStyle("shared"),
        )  # buildifier: disable=uninitialized

    for target in linkables:
        node = linkable_graph_node_map[target]
        actual_link_style = get_actual_link_style(link_style, link_group_preferred_linkage.get(target, node.preferred_linkage))

        # Always link any shared dependencies
        if actual_link_style == LinkStyle("shared"):
            # If this target is a link group root library, we
            # 1) don't propagate shared linkage down the tree, and
            # 2) use the provided link info in lieu of what's in the grph.
            target_link_group = link_group_roots.get(target)
            if target_link_group != None and target_link_group != link_group:
                add_link_group(target, target_link_group)
            else:
                add_link(target, LinkStyle("shared"))
        else:  # static or static_pic
            target_link_group = link_group_mappings.get(target)

            if not target_link_group and not link_group:
                # Ungrouped linkable targets belong to the unlabeled executable
                add_link(target, actual_link_style)
            elif is_executable_link and target_link_group == NO_MATCH_LABEL:
                # Targets labeled NO_MATCH belong to the unlabeled executable
                add_link(target, actual_link_style)
            elif target_link_group == MATCH_ALL_LABEL or target_link_group == link_group:
                # If this belongs to the match all link group or the group currently being evaluated
                add_link(target, actual_link_style)
            elif target_link_group not in (None, NO_MATCH_LABEL, MATCH_ALL_LABEL):
                add_link_group(target, target_link_group)

    return linkable_map

# Find all link group libraries that are first order deps or exported deps of
# the exectuble or another link group's libs
def get_public_link_group_nodes(
        linkable_graph_node_map: {"label": LinkableNode.type},
        link_group_mappings: [{"label": str.type}, None],
        executable_deps: ["label"],
        root_link_group: [str.type, None]) -> set_record.type:
    external_link_group_nodes = set()

    # TODO(@christylee): do we need to traverse root link group and NO_MATCH_LABEL exported deps?
    # buildifier: disable=uninitialized
    def crosses_link_group_boundary(current_group: [str.type, None], new_group: [str.type, None]):
        # belongs to root binary
        if new_group == root_link_group:
            return False

        if new_group == NO_MATCH_LABEL:
            # Using NO_MATCH with an explicitly defined root_link_group is undefined behavior
            expect(root_link_group == None or root_link_group == NO_MATCH_LABEL)
            return False

        # private node in link group
        if new_group == current_group:
            return False
        return True

    # Check the direct deps of the executable since the executable is not in linkable_graph_node_map
    for label in executable_deps:
        group = link_group_mappings.get(label)
        if crosses_link_group_boundary(root_link_group, group):
            external_link_group_nodes.add(label)

    # get all nodes that cross function boundaries
    # TODO(@christylee): dlopen-able libs that depend on the main executable does not have a
    # linkable internal edge to the main executable. Symbols that are not referenced during the
    # executable link might be dropped unless the dlopen-able libs are linked against the main
    # executable. We need to force export those symbols to avoid undefined symbls.
    for label, node in linkable_graph_node_map.items():
        current_group = link_group_mappings.get(label)

        for dep in node.deps + node.exported_deps:
            new_group = link_group_mappings.get(dep)
            if crosses_link_group_boundary(current_group, new_group):
                external_link_group_nodes.add(dep)

    SPECIAL_LINK_GROUPS = [MATCH_ALL_LABEL, NO_MATCH_LABEL]

    # buildifier: disable=uninitialized
    def get_traversed_deps(node: "label") -> ["label"]:
        exported_deps = []
        for exported_dep in linkable_graph_node_map[node].exported_deps:
            group = link_group_mappings.get(exported_dep)
            if group != root_link_group and group not in SPECIAL_LINK_GROUPS:
                exported_deps.append(exported_dep)
        return exported_deps

    external_link_group_nodes.update(
        # get transitive exported deps
        breadth_first_traversal_by(
            linkable_graph_node_map,
            external_link_group_nodes.list(),
            get_traversed_deps,
        ),
    )

    return external_link_group_nodes

def get_filtered_links(
        labels_to_links_map: {"label": LinkGroupLinkInfo.type},
        public_link_group_nodes: [set_record.type, None] = None):
    if public_link_group_nodes == None:
        return [link_group_info.link_info for link_group_info in labels_to_links_map.values()]
    infos = []
    for label, link_group_info in labels_to_links_map.items():
        info = link_group_info.link_info
        if public_link_group_nodes.contains(label):
            linkables = [set_linkable_link_whole(linkable) for linkable in info.linkables]
            infos.append(
                LinkInfo(
                    name = info.name,
                    pre_flags = info.pre_flags,
                    post_flags = info.post_flags,
                    linkables = linkables,
                    external_debug_info = info.external_debug_info,
                ),
            )
        else:
            infos.append(info)
    return infos

def get_filtered_targets(labels_to_links_map: {"label": LinkGroupLinkInfo.type}):
    return [label.raw_target() for label in labels_to_links_map.keys()]

def get_link_group_map_json(ctx: "context", targets: ["target_label"]) -> DefaultInfo.type:
    json_map = ctx.actions.write_json(LINK_GROUP_MAP_FILE_NAME, sorted(targets))
    return DefaultInfo(default_output = json_map)

def make_link_group_info(groups: [Group.type], mappings: {"label": str.type}) -> LinkGroupInfo.type:
    return LinkGroupInfo(
        groups = groups,
        groups_hash = hash(str(groups)),
        mappings = mappings,
    )

def _create_link_group(
        ctx: "context",
        spec: LinkGroupLibSpec.type,
        # The deps of the top-level executable.
        executable_deps: ["label"] = [],
        # Additional roots involved in the link.
        other_roots: ["label"] = [],
        public_nodes: set_record.type = set(),
        linkable_graph_node_map: {"label": LinkableNode.type} = {},
        linker_flags: [""] = [],
        link_group_mappings: {"label": str.type} = {},
        link_group_preferred_linkage: {"label": Linkage.type} = {},
        link_style: LinkStyle.type = LinkStyle("static_pic"),
        link_group_libs: {str.type: (["label", None], LinkInfos.type)} = {},
        prefer_stripped_objects: bool.type = False,
        prefer_local: bool.type = False,
        category_suffix: [str.type, None] = None) -> LinkedObject.type:
    """
    Link a link group library, described by a `LinkGroupLibSpec`.  This is
    intended to handle regular shared libs and e.g. Python extensions.
    """

    inputs = []

    # Add extra linker flags.
    if linker_flags:
        inputs.append(LinkInfo(pre_flags = linker_flags))

    # Get roots to begin the linkable search.
    # TODO(agallagher): We should use the groups "public" nodes as the roots.
    roots = []
    has_empty_root = False
    for mapping in spec.group.mappings:
        # If there's no explicit root, this means we need to search the entire
        # graph to find candidate nodes.
        if mapping.root == None:
            has_empty_root = True
        else:
            roots.append(mapping.root.label)
    if has_empty_root:
        roots.extend(executable_deps)

    # Add roots...
    filtered_labels_to_links_map = get_filtered_labels_to_links_map(
        linkable_graph_node_map,
        spec.group.name,
        link_group_mappings,
        link_group_preferred_linkage,
        link_group_libs = link_group_libs,
        link_style = link_style,
        # If this link group has an empty mapping, we need to search everything
        # -- even the additional roots -- to find potential nodes in the link
        # group.
        other_roots = other_roots if has_empty_root else [],
        deps = roots,
        is_executable_link = False,
        prefer_stripped = prefer_stripped_objects,
    )
    inputs.extend(get_filtered_links(filtered_labels_to_links_map, public_nodes))

    # link the rule
    return cxx_link_shared_library(
        ctx,
        ctx.actions.declare_output(spec.name),
        name = spec.name if spec.is_shared_lib else None,
        links = [LinkArgs(infos = inputs)],
        category_suffix = category_suffix,
        identifier = spec.name,
        prefer_local = prefer_local,
    )

def _stub_library(ctx: "context", name: str.type, extra_ldflags: [""] = []) -> LinkInfos.type:
    output = ctx.actions.declare_output(name + ".stub")
    cxx_link_shared_library(
        ctx,
        output,
        name = name,
        links = [LinkArgs(flags = extra_ldflags)],
        identifier = name,
        category_suffix = "stub_library",
    )
    toolchain_info = get_cxx_toolchain_info(ctx)
    linker_info = toolchain_info.linker_info
    return LinkInfos(
        default = LinkInfo(
            # Since we link against empty stub libraries, `--as-needed`
            # will end up removing `DT_NEEDED` tags that we actually
            # need at runtime, so pass in `--no-as-needed` last to
            # make sure this is overridden.
            # TODO(agallagher): It'd be nice to at least support a
            # mode where we don't need to use empty stub libs.
            pre_flags = (
                ["-Wl,--push-state"] +
                get_no_as_needed_shared_libs_flags(linker_info.type)
            ),
            linkables = [SharedLibLinkable(lib = output)],
            post_flags = ["-Wl,--pop-state"],
        ),
    )

def _symbol_flags_for_link_group(
        ctx: "context",
        lib: LinkedObject.type,
        prefer_local: bool.type = False) -> ["_arglike"]:
    """
    Analyze symbols in the given shared library and generate linker flags which,
    when applied to the main executable, make sure required symbols are included
    in the link *and* exported to the dynamic symbol table.
    """

    sym_linker_flags = []

    # Extract undefined symbols, format into an argsfile with `-u`s, and add to
    # linker flags.
    undefined_symfile = extract_undefined_syms(
        ctx = ctx,
        output = lib.output,
        prefer_local = prefer_local,
    )
    undefined_argsfile = create_undefined_symbols_argsfile(
        actions = ctx.actions,
        name = "{}.undefined_symbols.argsfile".format(lib.output.short_path),
        symbol_files = [undefined_symfile],
        category = "link_groups_undefined_syms",
        identifier = lib.output.short_path,
    )
    sym_linker_flags.append(cmd_args(undefined_argsfile, format = "@{}"))

    # Extract global symbols, format into a dynamic list version file, and add
    # to linker flags.
    global_symfile = extract_global_syms(
        ctx = ctx,
        output = lib.output,
        prefer_local = prefer_local,
    )
    dynamic_list_vers = create_dynamic_list_version_script(
        actions = ctx.actions,
        name = "{}.dynamic_list.vers".format(lib.output.short_path),
        symbol_files = [global_symfile],
        category = "link_groups_dynamic_list",
        identifier = lib.output.short_path,
    )
    sym_linker_flags.extend([
        "-Wl,--dynamic-list",
        dynamic_list_vers,
    ])

    return sym_linker_flags

def create_link_groups(
        ctx: "context",
        link_group_specs: [LinkGroupLibSpec.type] = [],
        executable_deps: ["label"] = [],
        other_roots: ["label"] = [],
        root_link_group = [str.type, None],
        linker_flags: [""] = [],
        prefer_stripped_objects: bool.type = False,
        linkable_graph_node_map: {"label": LinkableNode.type} = {},
        link_group_preferred_linkage: {"label": Linkage.type} = {},
        link_group_mappings: [{"label": str.type}, None] = None) -> {str.type: LinkedLinkGroup.type}:
    # Generate stubs first, so that subsequent links can link against them.
    link_group_shared_links = {}
    for link_group_spec in link_group_specs:
        if link_group_spec.is_shared_lib:
            link_group_shared_links[link_group_spec.group.name] = _stub_library(
                ctx = ctx,
                name = link_group_spec.name,
                extra_ldflags = linker_flags,
            )

    linked_link_groups = {}

    public_nodes = get_public_link_group_nodes(
        linkable_graph_node_map,
        link_group_mappings,
        executable_deps + other_roots,
        root_link_group,
    )

    for link_group_spec in link_group_specs:
        # NOTE(agallagher): It might make sense to move this down to be
        # done when we generated the links for the executable, so we can
        # handle the case when a link group can depend on the executable.
        link_group_lib = _create_link_group(
            ctx = ctx,
            spec = link_group_spec,
            executable_deps = executable_deps,
            other_roots = other_roots,
            linkable_graph_node_map = linkable_graph_node_map,
            public_nodes = public_nodes,
            linker_flags = linker_flags,
            link_group_mappings = link_group_mappings,
            link_group_preferred_linkage = link_group_preferred_linkage,
            # TODO(agallagher): Should we support alternate link strategies
            # (e.g. bottom-up with symbol errors)?
            link_group_libs = {
                name: (None, lib)
                for name, lib in link_group_shared_links.items()
            },
            prefer_stripped_objects = prefer_stripped_objects,
            category_suffix = "link_group",
        )

        linked_link_groups[link_group_spec.group.name] = LinkedLinkGroup(
            artifact = link_group_lib,
            # Add linker flags to make sure any symbols from the main
            # executable needed by these link groups are pulled in and
            # exported to the dynamic symbol table.
            symbol_ldflags = _symbol_flags_for_link_group(ctx, link_group_lib),
            library = None if not link_group_spec.is_shared_lib else LinkGroupLib(
                shared_libs = {link_group_spec.name: link_group_lib},
                shared_link_infos = LinkInfos(
                    default = LinkInfo(
                        linkables = [
                            SharedLibLinkable(lib = link_group_lib.output),
                        ],
                    ),
                ),
            ),
        )

    return linked_link_groups