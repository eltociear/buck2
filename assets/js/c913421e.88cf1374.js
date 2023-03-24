"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9170],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>u,MDXProvider:()=>s,mdx:()=>g,useMDXComponents:()=>m,withMDXComponents:()=>c});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=a.createContext({}),c=function(e){return function(n){var t=m(n.components);return a.createElement(e,r({},n,{components:t}))}},m=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=m(e.components);return a.createElement(u.Provider,{value:n},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},b=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=m(t),s=l,d=c["".concat(o,".").concat(s)]||c[s]||h[s]||r;return t?a.createElement(d,i(i({ref:n},u),{},{components:t})):a.createElement(d,i({ref:n},u))}));function g(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=b;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[d]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},39395:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=t(87462),l=(t(67294),t(3905));const r={id:"getting_started",title:"Getting Started"},o=void 0,i={unversionedId:"getting_started",id:"getting_started",title:"Getting Started",description:"Installing Buck2",source:"@site/../docs/getting_started.md",sourceDirName:".",slug:"/getting_started",permalink:"/docs/getting_started",draft:!1,tags:[],version:"current",frontMatter:{id:"getting_started",title:"Getting Started"},sidebar:"manualSidebar",previous:{title:"Why Buck2",permalink:"/docs/why"},next:{title:"Benefits When Compared to Buck1",permalink:"/docs/benefits"}},p={},u=[{value:"Installing Buck2",id:"installing-buck2",level:2},{value:"Compiling your first project",id:"compiling-your-first-project",level:2},{value:"Creating your first hello_world project",id:"creating-your-first-hello_world-project",level:2},{value:"Learning More",id:"learning-more",level:2},{value:"Communication channels",id:"communication-channels",level:2}],c=(m="FbInternalOnly",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",e)});var m;const s={toc:u};function d(e){let{components:n,...t}=e;return(0,l.mdx)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("h2",{id:"installing-buck2"},"Installing Buck2"),(0,l.mdx)("p",null,"To get started, first install the ",(0,l.mdx)("inlineCode",{parentName:"p"},"buck2")," executable:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-bash"},"rustup install nightly\ncargo +nightly install --git https://github.com/facebook/buck2.git cli\n")),(0,l.mdx)("p",null,"The above commands install ",(0,l.mdx)("inlineCode",{parentName:"p"},"buck2")," into a suitable directory, such as ",(0,l.mdx)("inlineCode",{parentName:"p"},"$HOME/.cargo/bin"),", which you should then add to your ",(0,l.mdx)("inlineCode",{parentName:"p"},"$PATH"),":"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-sh"},"export PATH=$HOME/.cargo/bin:$PATH\n")),(0,l.mdx)("p",null,"With Buck2 installed, you can build projects with ",(0,l.mdx)("inlineCode",{parentName:"p"},"buck2"),"!"),(0,l.mdx)("h2",{id:"compiling-your-first-project"},"Compiling your first project"),(0,l.mdx)("p",null,"This section covers the building of a ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/facebook/buck2/tree/main/examples/hello_world"},"'hello_world' example project")," that contains a simple C++ binary. If you are interested in seeing how other languages can be built, take a look at the ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/facebook/buck2/tree/main/examples/prelude"},"prelude example project"),", which contains Rust, C++, Python, and OCaml targets."),(0,l.mdx)("p",null,"First, clone the buck2 repository and cd into the 'hello_world' project:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/facebook/buck2.git\ncd examples/hello_world\n")),(0,l.mdx)("p",null," ",(0,l.mdx)("inlineCode",{parentName:"p"},"buck2 init")," is all the setup you need to start building. This will pull ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/facebook/buck2-prelude"},"buck2-prelude")," into your project:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-sh"},"buck2 init\n")),(0,l.mdx)("p",null,"To build the entire project, run:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-sh"},"buck2 build //...\n")),(0,l.mdx)("p",null,"Note that this uses a ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/facebook/buck2/blob/main/prelude/toolchains/cxx.bzl"},"simple C++ toolchain")," that requires a recent version of ",(0,l.mdx)("inlineCode",{parentName:"p"},"clang")," to be installed on your system. This can be installed with any package manager (ex. ",(0,l.mdx)("inlineCode",{parentName:"p"},"apt install clang"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"brew install llvm"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"choco install llvm"),").\nAfter installing any external tools or changing your ",(0,l.mdx)("inlineCode",{parentName:"p"},"PATH"),", run ",(0,l.mdx)("inlineCode",{parentName:"p"},"buck2 kill")," before running a build."),(0,l.mdx)("p",null,"To list all targets available in the project, run:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-sh"},"buck2 targets //...\n")),(0,l.mdx)("p",null,"To run the main C++ binary, run:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-sh"},"buck2 run //:main\n")),(0,l.mdx)("p",null,"The newly built binary can be found with the ",(0,l.mdx)("inlineCode",{parentName:"p"},"--show-output")," flag:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-sh"},"buck2 build //:main --show-output\n")),(0,l.mdx)("p",null,"Output:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-sh"},"Build ID: 0e890477-5b7f-4829-9ffe-662e572320a0\nJobs completed: 3. Time elapsed: 0.0s.\nBUILD SUCCEEDED\nroot//:main buck-out/v2/gen/root/9f4d83578bb24895/__main__/main\n")),(0,l.mdx)("h2",{id:"creating-your-first-hello_world-project"},"Creating your first hello_world project"),(0,l.mdx)("p",null,"This section demonstrates how to create a simple C++ 'hello_world' project."),(0,l.mdx)("p",null,"To get started, make a new folder for your project and cd into it."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-sh"},"mkdir hello_world\ncd hello_world\n")),(0,l.mdx)("p",null,"Next, run ",(0,l.mdx)("inlineCode",{parentName:"p"},"buck2 init")," to initialize the project. This command will set up your project with ",(0,l.mdx)("inlineCode",{parentName:"p"},"git")," and pull in ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/facebook/buck2-prelude"},"buck2-prelude")," as a submodule. Additionally, it will generate multiple files with default values."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-sh"},"buck2 init\n")),(0,l.mdx)("p",null,"Next, add the source code ",(0,l.mdx)("inlineCode",{parentName:"p"},"main.cpp")," ,"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-c++"},'#include <iostream>\nint main() {\n    std::cout << "Hello from a C++ Buck2 program!" << std::endl;\n}\n')),(0,l.mdx)("p",null,"Then, define a ",(0,l.mdx)("inlineCode",{parentName:"p"},"cxx_binary")," in the root ",(0,l.mdx)("inlineCode",{parentName:"p"},"BUCK")," file:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-Python"},'# BUCK\ncxx_binary(\n    name = "main",\n    srcs = ["main.cpp"],\n    link_style = "static",\n)\n')),(0,l.mdx)("p",null,"If you try to build ",(0,l.mdx)("inlineCode",{parentName:"p"},"//:main")," at this point, you'll see an error about ",(0,l.mdx)("inlineCode",{parentName:"p"},"buck2")," not being able to find ",(0,l.mdx)("inlineCode",{parentName:"p"},"toolchains//:cxx"),"."),(0,l.mdx)("p",null,"The final step is to define the necessary toolchain targets. For that project, you need ",(0,l.mdx)("inlineCode",{parentName:"p"},"system_cxx_toolchain")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"system_python_bootstrap_toolchain"),", which will pick up the necessary tools (clang++, python, and so on) from the system."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-Python"},'# toolchains/BUCK\nload("@prelude//toolchains:cxx.bzl", "system_cxx_toolchain")\nload("@prelude//toolchains:python.bzl", "system_python_bootstrap_toolchain")\n\nsystem_cxx_toolchain(\n    name = "cxx",\n    visibility = ["PUBLIC"],\n)\n\nsystem_python_bootstrap_toolchain(\n    name = "python_bootstrap",\n    visibility = ["PUBLIC"],\n)\n')),(0,l.mdx)("p",null,"At this point, your project should have the following files:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-bash"},'$ tree -a -I "buck-out|prelude|.git"\n|-- .buckconfig\n|-- .gitmodules\n|-- BUCK\n|-- main.cpp\n`-- toolchains\n    `-- BUCK\n')),(0,l.mdx)("p",null,"Now, you're ready to see the build in action."),(0,l.mdx)("p",null,"To build the main C++ target, run:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-sh"},"buck2 build //:main\n")),(0,l.mdx)("p",null,"To run the main C++ target, run:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-sh"},"buck2 run //:main\n")),(0,l.mdx)("p",null,"In summary, a ",(0,l.mdx)("inlineCode",{parentName:"p"},"buck2")," project requires:"),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},"A ",(0,l.mdx)("inlineCode",{parentName:"li"},".buckconfig")," file in the root which has a ",(0,l.mdx)("inlineCode",{parentName:"li"},"[repositories]")," section listing out ",(0,l.mdx)("a",{parentName:"li",href:"https://buck2.build/docs/concepts/glossary/#cell"},"cells")),(0,l.mdx)("li",{parentName:"ol"},"A ",(0,l.mdx)("inlineCode",{parentName:"li"},"prelude")," directory, which contains a collection of ",(0,l.mdx)("a",{parentName:"li",href:"https://buck2.build/docs/concepts/glossary/#rule"},"rules")," of your choice. ",(0,l.mdx)("inlineCode",{parentName:"li"},"buck2 init")," will pull in the ",(0,l.mdx)("a",{parentName:"li",href:"https://github.com/facebook/buck2-prelude.git"},"buck2-prelude")," as a git submodule by default"),(0,l.mdx)("li",{parentName:"ol"},"If using the ",(0,l.mdx)("a",{parentName:"li",href:"https://github.com/facebook/buck2-prelude.git"},"buck2-prelude"),", a ",(0,l.mdx)("inlineCode",{parentName:"li"},"toolchains")," directory that declares relevant toolchains. We provide some basic toolchains in ",(0,l.mdx)("a",{parentName:"li",href:"https://github.com/facebook/buck2/tree/main/prelude/toolchains"},"prelude/toolchains")),(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("inlineCode",{parentName:"li"},"BUCK")," files that specifiy targets for your project")),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"buck2 init")," will generate all of these with reasonable default values."),(0,l.mdx)("h2",{id:"learning-more"},"Learning More"),(0,l.mdx)("p",null,"You should now be ready to explore Buck2 for use in your own projects. You can explore the ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/facebook/buck2/tree/main/examples"},"examples")," folder.  Look out for more tutorials in the future."),(0,l.mdx)(c,{mdxType:"FbInternalOnly"},(0,l.mdx)("h2",{id:"communication-channels"},"Communication channels"),(0,l.mdx)("p",null,"The following channels provide an insight into Buck2:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://fb.workplace.com/groups/buck2prototyping"},"Buck2 Engineering")," - Workplace group for discussions about what features Buck2 should have, how it's going, status updates, and much more."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://fb.workplace.com/groups/buck2users"},"Buck2 Users")," - Workplace group featuring questions from users and reports of bugs."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://fb.workplace.com/groups/347532827186692"},"Buck2 Rule Authors")," - Workplace group for discussions about language-specific rules."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://www.internalfb.com/intern/monitor/oncall_profile?oncall=buck2"},"Buck2 Oncall Hub")," - urgent tasks and escalation."))))}d.isMDXComponent=!0}}]);