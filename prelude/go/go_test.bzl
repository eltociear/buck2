load(":compile.bzl", "GoTestInfo", "compile", "get_filtered_srcs")
load(":coverage.bzl", "GoCoverageMode", "cover")
load(":link.bzl", "link")
load(":packages.bzl", "go_attr_pkg_name")

def _gen_test_main(
        ctx: "context",
        pkg_name: str.type,
        coverage_mode: [GoCoverageMode.type, None],
        coverage_vars: {str.type: "artifact"},
        srcs: "cmd_args") -> "artifact":
    """
    Generate a `main.go` which calls tests from the given sources.
    """
    output = ctx.actions.declare_output("main.go")
    cmd = cmd_args()
    cmd.add(ctx.attrs._testmaingen[RunInfo])
    if ctx.attrs.coverage_mode:
        cmd.add(cmd_args(ctx.attrs.coverage_mode, format = "--cover-mode={}"))
    cmd.add(cmd_args(output.as_output(), format = "--output={}"))
    cmd.add(cmd_args(pkg_name, format = "--import-path={}"))
    if coverage_mode != None:
        cmd.add("--cover-mode", coverage_mode.value)
    if coverage_vars:
        pkg_vars = cmd_args(delimiter = ",")
        for var_name, src in coverage_vars.items():
            pkg_vars.add(cmd_args(var_name, src.short_path, delimiter = "="))
        cmd.add("--cover-pkgs", cmd_args(pkg_vars, format = pkg_name + ":{}"))
    cmd.add(srcs)
    ctx.actions.run(cmd, category = "go_test_main_gen")
    return output

def go_test_impl(ctx: "context") -> ["provider"]:
    deps = ctx.attrs.deps
    srcs = ctx.attrs.srcs
    pkg_name = go_attr_pkg_name(ctx) + "_test"

    # Copy the srcs, deps and pkg_name from the target library when set. The
    # library code gets compiled together with the tests.
    if ctx.attrs.library:
        lib = ctx.attrs.library[GoTestInfo]
        srcs += lib.srcs
        deps += lib.deps

        # TODO: should we assert that pkg_name != None here?
        pkg_name = lib.pkg_name

    # If coverage is enabled for this test, we need to preprocess the sources
    # with the Go cover tool.
    coverage_mode = None
    coverage_vars = {}
    if ctx.attrs.coverage_mode != None:
        coverage_mode = GoCoverageMode(ctx.attrs.coverage_mode)
        cov_res = cover(ctx, coverage_mode, srcs)
        srcs = cov_res.srcs
        coverage_vars = cov_res.variables

    srcs = get_filtered_srcs(ctx, srcs, tests = True)

    # Compile all tests into a package.
    tests = compile(ctx, pkg_name, srcs, deps = deps)

    # Generate a main function which runs the tests and build that into another
    # package.
    gen_main = _gen_test_main(ctx, pkg_name, coverage_mode, coverage_vars, srcs)
    main = compile(ctx, "main", cmd_args(gen_main), pkgs = {pkg_name: tests})

    # Link the above into a Go binary.
    (bin, runtime_files) = link(ctx, main, pkgs = {pkg_name: tests}, deps = deps)

    run_cmd = cmd_args(bin).hidden(runtime_files)

    # As per v1, copy in resources next to binary.
    for resource in ctx.attrs.resources:
        run_cmd.hidden(ctx.actions.copy_file(resource.short_path, resource))

    return [
        DefaultInfo(default_outputs = [bin], other_outputs = [gen_main] + runtime_files),
        RunInfo(args = run_cmd),
        ExternalRunnerTestInfo(
            type = "go",
            command = [run_cmd],
            env = ctx.attrs.env,
            labels = ctx.attrs.labels,
            contacts = ctx.attrs.contacts,
        ),
    ]
