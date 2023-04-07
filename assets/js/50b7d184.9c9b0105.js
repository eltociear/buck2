"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1566],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>d,MDXProvider:()=>u,mdx:()=>h,useMDXComponents:()=>c,withMDXComponents:()=>p});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},i.apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),p=function(e){return function(t){var r=c(t.components);return a.createElement(e,i({},t,{components:r}))}},c=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},x=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(r),u=n,m=p["".concat(l,".").concat(u)]||p[u]||f[u]||i;return r?a.createElement(m,s(s({ref:t},d),{},{components:r})):a.createElement(m,s({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=x;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:n,l[1]=s;for(var d=2;d<i;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}x.displayName="MDXCreateElement"},45956:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const i={},l="fs",s={unversionedId:"generated/bxl/fs",id:"generated/bxl/fs",title:"fs",description:"Provides some basic tracked filesystem access for bxl functions so that they can meaningfully detect simple properties of artifacts, and source directories.",source:"@site/../docs/generated/bxl/fs.md",sourceDirName:"generated/bxl",slug:"/generated/bxl/fs",permalink:"/docs/generated/bxl/fs",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"manualSidebar",previous:{title:"ensured_artifact_group",permalink:"/docs/generated/bxl/ensured_artifact_group"},next:{title:"get_path_without_materialization",permalink:"/docs/generated/bxl/get_path_without_materialization"}},o={},d=[{value:"exists",id:"exists",level:2},{value:"Details",id:"details",level:4},{value:"is_dir",id:"is_dir",level:2},{value:"Details",id:"details-1",level:4},{value:"is_file",id:"is_file",level:2},{value:"Details",id:"details-2",level:4},{value:"list",id:"list",level:2},{value:"Details",id:"details-3",level:4}],p={toc:d};function c(e){let{components:t,...r}=e;return(0,n.mdx)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"fs"},"fs"),(0,n.mdx)("p",null,"Provides some basic tracked filesystem access for bxl functions so that they can meaningfully detect simple properties of artifacts, and source directories."),(0,n.mdx)("h2",{id:"exists"},"exists"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-python"},'def exists(expr: [str.type, "artifact"]) -> bool.type\n')),(0,n.mdx)("p",null,"Check if a path exists on disk, taking advantage of Buck's cached filesystem. Takes in a literal, a source artifact (via ",(0,n.mdx)("inlineCode",{parentName:"p"},"[StarlarkArtifact]"),"), or a ",(0,n.mdx)("inlineCode",{parentName:"p"},"[StarlarkFileNode]"),"."),(0,n.mdx)("h4",{id:"details"},"Details"),(0,n.mdx)("p",null,"Sample usage:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_exists(ctx):\n    ctx.output.print(ctx.fs.exists("bin"))\n')),(0,n.mdx)("hr",null),(0,n.mdx)("h2",{id:"is_dir"},"is_dir"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-python"},'def is_dir(expr: [str.type, "artifact"]) -> bool.type\n')),(0,n.mdx)("p",null,"Returns whether the provided path is a dir. Returns false is the dir does not exist. The input is a either a literal, a source artifact (via ",(0,n.mdx)("inlineCode",{parentName:"p"},"[StarlarkArtifact]"),"), or a ",(0,n.mdx)("inlineCode",{parentName:"p"},"[StarlarkFileNode]"),"."),(0,n.mdx)("h4",{id:"details-1"},"Details"),(0,n.mdx)("p",null,"Sample usage:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_is_dir(ctx):\n    ctx.output.print(ctx.fs.is_dir("bin"))\n')),(0,n.mdx)("hr",null),(0,n.mdx)("h2",{id:"is_file"},"is_file"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-python"},'def is_file(expr: [str.type, "artifact"]) -> bool.type\n')),(0,n.mdx)("p",null,"Returns whether the provided path is a file. Returns false is the file does not exist. The input is a either a literal, a source artifact (via ",(0,n.mdx)("inlineCode",{parentName:"p"},"[StarlarkArtifact]"),"), or a ",(0,n.mdx)("inlineCode",{parentName:"p"},"[StarlarkFileNode]"),"."),(0,n.mdx)("h4",{id:"details-2"},"Details"),(0,n.mdx)("p",null,"Sample usage:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_is_file(ctx):\n    ctx.output.print(ctx.fs.is_dir("bin"))\n')),(0,n.mdx)("hr",null),(0,n.mdx)("h2",{id:"list"},"list"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-python"},'def list(expr: [str.type, "artifact"], *, dirs_only: bool.type = None) -> "read_dir_set"\n')),(0,n.mdx)("p",null,"Returns all the contents of the given input that points to a directory. Errors if the given path is a file. Takes an optional boolean ",(0,n.mdx)("inlineCode",{parentName:"p"},"dirs_only")," to only return directories, defaults to false."),(0,n.mdx)("h4",{id:"details-3"},"Details"),(0,n.mdx)("p",null,"The input is a either a literal, a source artifact (via ",(0,n.mdx)("inlineCode",{parentName:"p"},"[StarlarkArtifact]"),"), or a ",(0,n.mdx)("inlineCode",{parentName:"p"},"[StarlarkFileNode]"),"."),(0,n.mdx)("p",null,"Sample usage:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_list(ctx):\n    list_results = ctx.fs.list("bin")\n    for result in list_results:\n        ctx.output.print(result)\n')))}c.isMDXComponent=!0}}]);