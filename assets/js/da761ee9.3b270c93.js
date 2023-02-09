"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4101],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>u,MDXProvider:()=>p,mdx:()=>f,useMDXComponents:()=>m,withMDXComponents:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),d=function(e){return function(t){var n=m(t.components);return a.createElement(e,r({},t,{components:n}))}},m=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",x={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=m(n),p=o,c=d["".concat(i,".").concat(p)]||d[p]||x[p]||r;return n?a.createElement(c,l(l({ref:t},u),{},{components:n})):a.createElement(c,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},20722:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const r={id:"test_execution",title:"Test Execution"},i=void 0,l={unversionedId:"rule_authors/test_execution",id:"rule_authors/test_execution",title:"Test Execution",description:"Test execution in Buck2 is a collaboration with Tpx, Meta's internal test runner.",source:"@site/../docs/rule_authors/test_execution.md",sourceDirName:"rule_authors",slug:"/rule_authors/test_execution",permalink:"/docs/rule_authors/test_execution",draft:!1,tags:[],version:"current",frontMatter:{id:"test_execution",title:"Test Execution"},sidebar:"manualSidebar",previous:{title:"Anonymous Targets",permalink:"/docs/rule_authors/anon_targets"},next:{title:"Optimization",permalink:"/docs/rule_authors/optimization"}},s={},u=[{value:"Anatomy of a test run",id:"anatomy-of-a-test-run",level:2},{value:"Information available on <code>ExternalRunnerTestInfo</code>",id:"information-available-on-externalrunnertestinfo",level:2},{value:"Fields exposed to Tpx",id:"fields-exposed-to-tpx",level:3},{value:"Fields pertinent for Remote Execution",id:"fields-pertinent-for-remote-execution",level:3},{value:"Verbatim arguments and handles",id:"verbatim-arguments-and-handles",level:2},{value:"Execution Configurations",id:"execution-configurations",level:2},{value:"Working Directory",id:"working-directory",level:2}],d={toc:u};function m(e){let{components:t,...n}=e;return(0,o.mdx)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Test execution in Buck2 is a collaboration with ",(0,o.mdx)("a",{parentName:"p",href:"https://www.internalfb.com/intern/wiki/TAE/tpx/"},"Tpx"),", Meta's internal test runner."),(0,o.mdx)("p",null,"Tpx has a large number of responsibilities when used with Buck2, which can be grouped as follows:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Translation"),":",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Understands the output formats of various supported test frameworks. This is used to identify test cases and collect test results."),(0,o.mdx)("li",{parentName:"ul"},"Understands, to an extent, the input formats. For example, given a test case, Tpx can identify what command needs to run to execute just that test."))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Orchestration"),":",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Interacts with Test Infra to discover what tests should run, under a number of configurations."),(0,o.mdx)("li",{parentName:"ul"},"Coordinates the execution of tests. For example, it may request retries, or choose to bundle multiple tests in a single execution (or not)."),(0,o.mdx)("li",{parentName:"ul"},"Reports test results to Test Infra as well.")))),(0,o.mdx)("p",null,"In Buck2, rules interact with Tpx via a provider called ",(0,o.mdx)("inlineCode",{parentName:"p"},"ExternalRunnerTestInfo"),"."),(0,o.mdx)("h2",{id:"anatomy-of-a-test-run"},"Anatomy of a test run"),(0,o.mdx)("p",null,"When a user runs ",(0,o.mdx)("inlineCode",{parentName:"p"},"buck2 test $targets"),":"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Buck2 identifies all matching targets that have an ",(0,o.mdx)("inlineCode",{parentName:"li"},"ExternalRunnerTestInfo"),"."),(0,o.mdx)("li",{parentName:"ul"},"Buck2 builds all the artifacts referenced by those targets (this will likely change eventually to build them only if they are used)."),(0,o.mdx)("li",{parentName:"ul"},"Buck2 then notifies Tpx that those tests exist. Currently, Tpx receives a subset of ",(0,o.mdx)("inlineCode",{parentName:"li"},"ExternalRunnerTestInfo"),"."),(0,o.mdx)("li",{parentName:"ul"},"Tpx requests command execution from Buck2 to list and execute tests."),(0,o.mdx)("li",{parentName:"ul"},"When it receives command results from Buck2, Tpx may fire off events that the end-user will see (such as test results), log to Test Infra, request further executions, and so on.")),(0,o.mdx)("admonition",{type:"note"},(0,o.mdx)("p",{parentName:"admonition"},"If more than one target is being built, test building and execution will proceed concurrently.")),(0,o.mdx)("h2",{id:"information-available-on-externalrunnertestinfo"},"Information available on ",(0,o.mdx)("inlineCode",{parentName:"h2"},"ExternalRunnerTestInfo")),(0,o.mdx)("p",null,"As noted, rules communicate their testing capabilities via ",(0,o.mdx)("inlineCode",{parentName:"p"},"ExternalRunnerTestInfo"),". There are a number of fields available on ",(0,o.mdx)("inlineCode",{parentName:"p"},"ExternalRunnerTestInfo")," to control how a given target is tested, as detailed in the following sub-sections."),(0,o.mdx)("h3",{id:"fields-exposed-to-tpx"},"Fields exposed to Tpx"),(0,o.mdx)("p",null,"The following list shows what is available in ",(0,o.mdx)("inlineCode",{parentName:"p"},"ExternalRunnerTestInfo"),", with which Tpx can interact:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"type")," - a string key that defines the type of test this is. Tpx uses this internally to choose a translator. Examples include ",(0,o.mdx)("inlineCode",{parentName:"li"},"gtest"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"apple_test"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"custom"),". Note that Tpx also allows labels to influence the orchestrator selection."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"command")," and ",(0,o.mdx)("inlineCode",{parentName:"li"},"env")," - respectively, a list and a key-value mapping of arguments. These are the inputs to translation in Tpx. They are not always visible to Tpx (for more details, see ",(0,o.mdx)("a",{parentName:"li",href:"#verbatim-arguments-and-handles"},"Verbatim arguments and handles"),", below)."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"labels")," - a set of string labels to pass to Tpx. They have no meaning to Buck2, but some labels have impact on translation in Tpx."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"contacts")," - a list of contacts for the tests; usually oncalls."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"executor_overrides")," - a key-value mapping of executor configurations that Tpx can use when requesting execution from Buck2.")),(0,o.mdx)("h3",{id:"fields-pertinent-for-remote-execution"},"Fields pertinent for Remote Execution"),(0,o.mdx)("p",null,"For compatibility with Remote Execution (RE), there are two fields that rules should set in their ",(0,o.mdx)("inlineCode",{parentName:"p"},"ExternalRunnerTestInfo")," if they should be run on RE:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"use_project_relative_paths")," - if ",(0,o.mdx)("inlineCode",{parentName:"li"},"true")," (the default is ",(0,o.mdx)("inlineCode",{parentName:"li"},"false"),"), Buck2 will produce relative paths. If not, it'll produce absolute paths."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"run_from_project_root")," - if ",(0,o.mdx)("inlineCode",{parentName:"li"},"true"),", tests will run from the project root (their ",(0,o.mdx)("inlineCode",{parentName:"li"},"cwd")," will be the project root, which is the same as all\nother build commands).  If ",(0,o.mdx)("inlineCode",{parentName:"li"},"false"),", it'll be the cell root.")),(0,o.mdx)("p",null,"Note that passing ",(0,o.mdx)("inlineCode",{parentName:"p"},"--unstable-force-tests-on-re")," to ",(0,o.mdx)("inlineCode",{parentName:"p"},"buck2 test")," will override those fields and set them to ",(0,o.mdx)("inlineCode",{parentName:"p"},"true"),", since they are a pre-requisite to run on RE. In contrast, passing ",(0,o.mdx)("inlineCode",{parentName:"p"},"--unstable-allow-tests-on-re")," will only allow tests that already set both those fields to ",(0,o.mdx)("inlineCode",{parentName:"p"},"true")," to execute on RE."),(0,o.mdx)("p",null,"Also note that when ",(0,o.mdx)("inlineCode",{parentName:"p"},"executor_overrides")," are set, if an executor override is used and results in execution on RE, it'll happen on RE unconditionally. Therefore, it's a good idea to set those fields if RE-only executor overrides are provided."),(0,o.mdx)("h2",{id:"verbatim-arguments-and-handles"},"Verbatim arguments and handles"),(0,o.mdx)("p",null,"As noted above, Tpx only interacts with a subset of arguments provided by rules in ",(0,o.mdx)("inlineCode",{parentName:"p"},"ExternalRunnerTestInfo"),". The reason for this is that Tpx doesn't get to access, for example, artifacts, that Buck2 knows about."),(0,o.mdx)("p",null,"Consider the following example:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},'binary = ctx.attrs.dep[RunInfo]\ntest_info = ExternalRunnerTestInfo(command = [binary, "run-tests"], ...)\n')),(0,o.mdx)("p",null,"When Buck2 actually runs this command, ",(0,o.mdx)("inlineCode",{parentName:"p"},"binary")," is expanded to a path (and possibly to more args). Buck2 would also account for any hidden arguments and make those available where the command is executed. It is important for Buck2 to retain this capability when running with Tpx."),(0,o.mdx)("p",null,"To that end, all non-trivial arguments present in ",(0,o.mdx)("inlineCode",{parentName:"p"},"command")," (and in the values of ",(0,o.mdx)("inlineCode",{parentName:"p"},"env"),"), such as ",(0,o.mdx)("inlineCode",{parentName:"p"},"cmd_args")," or ",(0,o.mdx)("inlineCode",{parentName:"p"},"RunInfo"),", are exposed to Tpx as opaque handles, and simple string arguments are passed as-is to Tpx."),(0,o.mdx)("p",null,"This means that Tpx would see the command described above as:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},'[ArgHandle(index = 0), Verbatim("foobar")]\n')),(0,o.mdx)("p",null,"When requesting execution from Buck2, Tpx can use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"ArgHandle")," and Buck2 will swap it back for the underlying value that was set on the provider."),(0,o.mdx)("p",null,"This allows Tpx to introspect and modify parts of the command lines it receives, as long as it doesn't need to access the actual text value of non-verbatim arguments. Usually, this works out to be sufficient (or can be made sufficient with a bit of refactoring in Tpx)."),(0,o.mdx)("h2",{id:"execution-configurations"},"Execution Configurations"),(0,o.mdx)("p",null,"By default, tests execute using the execution configuration of the associated target. This is the execution configuration that would be used for run actions (",(0,o.mdx)("inlineCode",{parentName:"p"},"ctx.actions.run"),") declared in the same target. This is a default that actually makes little sense but works out as long as cross-compiling is not the norm."),(0,o.mdx)("p",null,"That said, it's easy to see where this breaks down."),(0,o.mdx)("p",null,"For example:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"For iOS tests, the execution platform for builds needs to be XCode (local or RE Mac)."),(0,o.mdx)("li",{parentName:"ul"},"For test listing, XCode is not needed (it's preferable to do it on RE Linux where capacity is cheaper)."),(0,o.mdx)("li",{parentName:"ul"},"To run tests, a simulator is required.")),(0,o.mdx)("p",null,"To support this, ",(0,o.mdx)("inlineCode",{parentName:"p"},"ExternalRunnerTestInfo")," allows specifying override platforms, which are given a name. Tpx can request execution on them by passing their name when it sends execution requests to Buck2, as shown in the following code:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},'ExternalRunnerTestInfo(\n  executor_overrides = {\n      "ios-simulator": CommandExecutorConfig(\n          local_enabled = False,\n          remote_enabled = True,\n          remote_execution_properties = {\n              "platform": "ios-simulator-pure-re",\n              "subplatform": "iPhone 8.iOS 15.0",\n              "xcode-version": "xcodestable",\n          },\n          remote_execution_use_case = "tpx-default",\n      ),\n      "static-listing": CommandExecutorConfig(local_enabled = True, remote_enabled = False),\n  },\n  ...\n)\n')),(0,o.mdx)("p",null,"The default execution platform can also be overridden:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},'ExternalRunnerTestInfo(\n  default_executor = CommandExecutorConfig(\n    local_enabled = False,\n    remote_enabled = True,\n    remote_execution_properties = {\n        "platform": "ios-simulator-pure-re",\n        "subplatform": "iPhone 8.iOS 15.0",\n        "xcode-version": "xcodestable",\n    },\n    remote_execution_use_case = "tpx-default",\n  ),\n  ...\n)\n')),(0,o.mdx)("h2",{id:"working-directory"},"Working Directory"),(0,o.mdx)("p",null,"As noted above, tests run from the cell root unless ",(0,o.mdx)("inlineCode",{parentName:"p"},"run_from_project_root")," is set."),(0,o.mdx)("p",null,"To produce paths relative to the cell root for use by tests, use ",(0,o.mdx)("inlineCode",{parentName:"p"},"relative_to(ctx.label.cell_root)")," on ",(0,o.mdx)("inlineCode",{parentName:"p"},"cmd_args"),"."))}m.isMDXComponent=!0}}]);