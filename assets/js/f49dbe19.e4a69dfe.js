"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6193],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>s,MDXProvider:()=>m,mdx:()=>h,useMDXComponents:()=>u,withMDXComponents:()=>p});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){return function(t){var n=u(t.components);return a.createElement(e,r({},t,{components:n}))}},u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",x={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=u(n),m=l,c=p["".concat(i,".").concat(m)]||p[m]||x[m]||r;return n?a.createElement(c,o(o({ref:t},s),{},{components:n})):a.createElement(c,o({ref:t},s))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=g;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[c]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},57866:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(87462),l=(n(67294),n(3905));const r={},i="bxl_ctx",o={unversionedId:"generated/bxl/bxl_ctx",id:"generated/bxl/bxl_ctx",title:"bxl_ctx",description:"The bxl context that the top level bxl implementation receives as parameter. This context contains all the core bxl functions to query, build, create actions, etc.",source:"@site/../docs/generated/bxl/bxl_ctx.md",sourceDirName:"generated/bxl",slug:"/generated/bxl/bxl_ctx",permalink:"/docs/generated/bxl/bxl_ctx",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"manualSidebar",previous:{title:"bxl_build_result",permalink:"/docs/generated/bxl/bxl_build_result"},next:{title:"bxl_output_stream",permalink:"/docs/generated/bxl/bxl_output_stream"}},d={},s=[{value:"analysis",id:"analysis",level:2},{value:"Details",id:"details",level:4},{value:"audit",id:"audit",level:2},{value:"build",id:"build",level:2},{value:"Details",id:"details-1",level:4},{value:"bxl_actions",id:"bxl_actions",level:2},{value:"cli_args",id:"cli_args",level:2},{value:"configured_targets",id:"configured_targets",level:2},{value:"Details",id:"details-2",level:4},{value:"cquery",id:"cquery",level:2},{value:"Details",id:"details-3",level:4},{value:"fs",id:"fs",level:2},{value:"output",id:"output",level:2},{value:"resolve",id:"resolve",level:2},{value:"Details",id:"details-4",level:4},{value:"root",id:"root",level:2},{value:"unconfigured_targets",id:"unconfigured_targets",level:2},{value:"Details",id:"details-5",level:4},{value:"uquery",id:"uquery",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,l.mdx)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"bxl_ctx"},"bxl_ctx"),(0,l.mdx)("p",null,"The bxl context that the top level bxl implementation receives as parameter. This context contains all the core bxl functions to query, build, create actions, etc."),(0,l.mdx)("h2",{id:"analysis"},"analysis"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def analysis(labels: "", target_platform: "" = None, skip_incompatible: bool.type = None) -> ""\n')),(0,l.mdx)("p",null,"Runs analysis on the given ",(0,l.mdx)("inlineCode",{parentName:"p"},"labels"),", accepting an optional ",(0,l.mdx)("inlineCode",{parentName:"p"},"target_platform")," which is the target platform configuration used to resolve configurations of any unconfigured target nodes, and an optional ",(0,l.mdx)("inlineCode",{parentName:"p"},"skip_incompatible")," boolean that indicates whether to skip analysis of nodes that are incompatible with the target platform. The ",(0,l.mdx)("inlineCode",{parentName:"p"},"target_platform")," is either a string that can be parsed as a target label, or a target label."),(0,l.mdx)("h4",{id:"details"},"Details"),(0,l.mdx)("p",null,"The given ",(0,l.mdx)("inlineCode",{parentName:"p"},"labels")," is a providers expression, which is either:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"- a single string that is a `target pattern`.\n- a single target node or label, configured or unconfigured\n- a single sub target label, configured or unconfigured\n- a list of the two options above.\n")),(0,l.mdx)("p",null,"This returns either a single ","[",(0,l.mdx)("inlineCode",{parentName:"p"},"StarlarkAnalysisResult"),"]"," if the given ",(0,l.mdx)("inlineCode",{parentName:"p"},"labels"),' is "singular",\nor a dict keyed by sub target labels of ',"[",(0,l.mdx)("inlineCode",{parentName:"p"},"StarlarkAnalysisResult"),"]"," if the given ",(0,l.mdx)("inlineCode",{parentName:"p"},"labels"),"\nis list-like"),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"audit"},"audit"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def audit() -> "audit_ctx"\n')),(0,l.mdx)("p",null,"Returns the ","[",(0,l.mdx)("inlineCode",{parentName:"p"},"StarlarkAuditCtx"),"]"," that holds all the audit functions."),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"build"},"build"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def build(spec: "", target_platform: "" = None) -> ""\n')),(0,l.mdx)("p",null,"Runs a build on the given ",(0,l.mdx)("inlineCode",{parentName:"p"},"labels"),", accepting an optional ",(0,l.mdx)("inlineCode",{parentName:"p"},"target_platform")," which is the target platform configuration used to resolve configurations. Note that when ",(0,l.mdx)("inlineCode",{parentName:"p"},"build()")," is called, the artifacts are materialized without needing to additionally call ",(0,l.mdx)("inlineCode",{parentName:"p"},"ensure()")," on them."),(0,l.mdx)("h4",{id:"details-1"},"Details"),(0,l.mdx)("p",null,"The given ",(0,l.mdx)("inlineCode",{parentName:"p"},"labels")," is a providers expression, which is either:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"- a single string that is a `target pattern`.\n- a single target node or label, configured or unconfigured\n- a single provider label, configured or unconfigured\n- a list of the two options above.\n")),(0,l.mdx)("p",null,"This returns a dict keyed by sub target labels of ","[",(0,l.mdx)("inlineCode",{parentName:"p"},"StarlarkBuildResult"),"]"," if the\ngiven ",(0,l.mdx)("inlineCode",{parentName:"p"},"labels")," is list-like"),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"bxl_actions"},"bxl_actions"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'bxl_actions: "bxl_actions"\n')),(0,l.mdx)("p",null,"Returns the action context ","[",(0,l.mdx)("inlineCode",{parentName:"p"},"BxlActionsCtx"),"]"," for creating and running actions."),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"cli_args"},"cli_args"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'cli_args: ""\n')),(0,l.mdx)("p",null,"A struct of the command line args as declared using the ","[",(0,l.mdx)("inlineCode",{parentName:"p"},"cli_args"),"]"," module. These command lines are resolved per the users input on the cli when invoking the bxl script."),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"configured_targets"},"configured_targets"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def configured_targets(labels: "", target_platform: "" = None) -> ""\n')),(0,l.mdx)("p",null,"Gets the target nodes for the ",(0,l.mdx)("inlineCode",{parentName:"p"},"labels"),", accepting an optional ",(0,l.mdx)("inlineCode",{parentName:"p"},"target_platform")," which is the target platform configuration used to resolve configurations of any unconfigured target nodes. The ",(0,l.mdx)("inlineCode",{parentName:"p"},"target_platform")," is either a string that can be parsed as a target label, or a target label."),(0,l.mdx)("h4",{id:"details-2"},"Details"),(0,l.mdx)("p",null,"The given ",(0,l.mdx)("inlineCode",{parentName:"p"},"labels")," is a ","[",(0,l.mdx)("inlineCode",{parentName:"p"},"TargetExpr"),"]",", which is either:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"- a single string that is a `target pattern`.\n- a single target node or label, configured or unconfigured\n- a list of the two options above.\n")),(0,l.mdx)("p",null,"Note that this function does not accept ",(0,l.mdx)("inlineCode",{parentName:"p"},"Label")," (which is a configured provider label), since this\nis the label of a subtarget. You can get the underlying configured target label on the ",(0,l.mdx)("inlineCode",{parentName:"p"},"Label"),"\nusing ",(0,l.mdx)("inlineCode",{parentName:"p"},"configured_targets()")," (ex: ",(0,l.mdx)("inlineCode",{parentName:"p"},"my_label.configured_target()"),")."),(0,l.mdx)("p",null,"This returns either a single ","[",(0,l.mdx)("inlineCode",{parentName:"p"},"StarlarkConfiguredTargetNode"),"]"," if the given ",(0,l.mdx)("inlineCode",{parentName:"p"},"labels"),'\nis "singular", a dict keyed by target labels of ',"[",(0,l.mdx)("inlineCode",{parentName:"p"},"StarlarkConfiguredTargetNode"),"]"," if the\ngiven ",(0,l.mdx)("inlineCode",{parentName:"p"},"labels")," is list-like"),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"cquery"},"cquery"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def cquery(target_platform: "" = None) -> "cqueryctx"\n')),(0,l.mdx)("p",null,"Returns the ","[",(0,l.mdx)("inlineCode",{parentName:"p"},"StarlarkCQueryCtx"),"]"," that holds all the cquery functions. This function takes an optional parameter ",(0,l.mdx)("inlineCode",{parentName:"p"},"target_platform"),", which is the target platform configuration used to configured any unconfigured target nodes."),(0,l.mdx)("h4",{id:"details-3"},"Details"),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"target_platform")," is a target label, or a string that is a target label."),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"fs"},"fs"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'fs: "fs"\n')),(0,l.mdx)("p",null,"Returns the ","[",(0,l.mdx)("inlineCode",{parentName:"p"},"BxlFilesystem"),"]"," for performing a basic set of filesystem operations within bxl"),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"output"},"output"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'output: ""\n')),(0,l.mdx)("p",null,"Gets the output stream to the console via stdout. Items written to the output stream are considered to be the results of a bxl script, which will be displayed to stdout by buck2 even when the script is cached."),(0,l.mdx)("p",null,"Prints that are not result of the bxl should be printed via stderr via the stdlib ",(0,l.mdx)("inlineCode",{parentName:"p"},"print"),"\nand ",(0,l.mdx)("inlineCode",{parentName:"p"},"pprint"),"."),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"resolve"},"resolve"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def resolve(action_factory: "actions", promise: "promise") -> [None, ""]\n')),(0,l.mdx)("p",null,"Awaits a promise and returns an optional value of the promise."),(0,l.mdx)("h4",{id:"details-4"},"Details"),(0,l.mdx)("p",null,"Sample usage:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'load("//path/to/rules:rules.bzl", "my_anon_targets_rule", "my_map_function")\n\ndef _resolve_impl(ctx):\n    actions = ctx.bxl_actions.action_factory()\n    my_attrs = {\n        "false": False,\n        "int": 42,\n        "list_string": ["a", "b", "c"],\n        "string": "a-string",\n        "true": True,\n    }\n\n    promise = actions.anon_target(my_anon_targets_rule, attrs).map(my_map_function)\n    providers_result = ctx.resolve(promise) # result is `provider_callable` type, which is a collection of `provider`s\n    ctx.output.print(providers_result[0].my_field)\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"root"},"root"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"def root() -> str.type\n")),(0,l.mdx)("p",null,"Returns the absolute path to the root of the repository"),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"unconfigured_targets"},"unconfigured_targets"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def unconfigured_targets(labels: "") -> ""\n')),(0,l.mdx)("p",null,"Gets the unconfigured target nodes for the ",(0,l.mdx)("inlineCode",{parentName:"p"},"labels")),(0,l.mdx)("h4",{id:"details-5"},"Details"),(0,l.mdx)("p",null,"The given ",(0,l.mdx)("inlineCode",{parentName:"p"},"labels")," is either:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"- a single string that is a `target pattern`.\n- a single unconfigured  target node or label\n- a list of the two options above.\n")),(0,l.mdx)("p",null,"This returns either a single ","[",(0,l.mdx)("inlineCode",{parentName:"p"},"StarlarkTargetNode"),"]"," if the given ",(0,l.mdx)("inlineCode",{parentName:"p"},"labels"),'\nis "singular", a dict keyed by target labels of ',"[",(0,l.mdx)("inlineCode",{parentName:"p"},"StarlarkTargetNode"),"]"," if the\ngiven ",(0,l.mdx)("inlineCode",{parentName:"p"},"labels")," is list-like"),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"uquery"},"uquery"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def uquery() -> "uqueryctx"\n')),(0,l.mdx)("p",null,"Returns the ","[",(0,l.mdx)("inlineCode",{parentName:"p"},"StarlarkUQueryCtx"),"]"," that holds all uquery functions."))}u.isMDXComponent=!0}}]);