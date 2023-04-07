"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9557],{3905:(t,e,r)=>{r.r(e),r.d(e,{MDXContext:()=>u,MDXProvider:()=>d,mdx:()=>b,useMDXComponents:()=>c,withMDXComponents:()=>s});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},i.apply(this,arguments)}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var u=a.createContext({}),s=function(t){return function(e){var r=c(e.components);return a.createElement(t,i({},e,{components:r}))}},c=function(t){var e=a.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},d=function(t){var e=c(t.components);return a.createElement(u.Provider,{value:e},t.children)},h="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,o=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),s=c(r),d=n,h=s["".concat(o,".").concat(d)]||s[d]||f[d]||i;return r?a.createElement(h,l(l({ref:e},u),{},{components:r})):a.createElement(h,l({ref:e},u))}));function b(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[h]="string"==typeof t?t:n,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},78069:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const i={id:"ensured_artifact"},o="ensured_artifact",l={unversionedId:"api/bxl/ensured_artifact",id:"api/bxl/ensured_artifact",title:"ensured_artifact",description:"An artifact that will be materialized to buck-out at the end of the bxl invocation. These artifacts can be printed to bxl's results. Doing so will print the path of the artifact rather than the standard representation.",source:"@site/../docs/api/bxl/ensured_artifact.generated.md",sourceDirName:"api/bxl",slug:"/api/bxl/ensured_artifact",permalink:"/docs/api/bxl/ensured_artifact",draft:!1,tags:[],version:"current",frontMatter:{id:"ensured_artifact"},sidebar:"manualSidebar",previous:{title:"cqueryctx",permalink:"/docs/api/bxl/cqueryctx"},next:{title:"ensured_artifact_group",permalink:"/docs/api/bxl/ensured_artifact_group"}},p={},u=[{value:"abs_path",id:"abs_path",level:2},{value:"Details",id:"details",level:4},{value:"rel_path",id:"rel_path",level:2},{value:"Details",id:"details-1",level:4}],s={toc:u};function c(t){let{components:e,...r}=t;return(0,n.mdx)("wrapper",(0,a.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"ensured_artifact"},"ensured_artifact"),(0,n.mdx)("p",null,"An artifact that will be materialized to buck-out at the end of the bxl invocation. These artifacts can be printed to bxl's results. Doing so will print the path of the artifact rather than the standard representation."),(0,n.mdx)("p",null,"Ensured artifacts are serializable and hashable."),(0,n.mdx)("h2",{id:"abs_path"},"abs_path"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-python"},'def abs_path() -> ""\n')),(0,n.mdx)("p",null,"Converts this artifact to be printed by its absolute path. Note that this will only print out the absolute path via ",(0,n.mdx)("inlineCode",{parentName:"p"},"ctx.output.print()"),". Starlark's ",(0,n.mdx)("inlineCode",{parentName:"p"},"print()")," will print out the display info for an ensured artifact."),(0,n.mdx)("h4",{id:"details"},"Details"),(0,n.mdx)("p",null,"Sample usage:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_abs_path(ctx):\n    actions = ctx.bxl_actions.action_factory()\n    output = actions.write("my_output", "my_content")\n    ensured = ctx.output.ensure(output) # currently defaults to creating an EnsuredArtifact with a relative path\n\n    ensured_with_abs_path = ensured.abs_path() # create a new EnsuredArtifact with absolute path to reuse\n    print(ensured_with_abs_path) # should return something like <ensured artifact ... >\n    ctx.output.print(ensured_with_abs_path) # should return the absolute path of the artifact\n')),(0,n.mdx)("hr",null),(0,n.mdx)("h2",{id:"rel_path"},"rel_path"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-python"},'def rel_path() -> ""\n')),(0,n.mdx)("p",null,"Converts this artifact to be printed by its path relative to the project root. Note that this will only print out the relative path via ",(0,n.mdx)("inlineCode",{parentName:"p"},"ctx.output.print()"),". Starlark's ",(0,n.mdx)("inlineCode",{parentName:"p"},"print()")," will print out the display info for an ensured artifact."),(0,n.mdx)("h4",{id:"details-1"},"Details"),(0,n.mdx)("p",null,"Sample usage:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_rel_path(ctx):\n    actions = ctx.bxl_actions.action_factory()\n    output = actions.write("my_output", "my_content")\n    ensured = ctx.output.ensure(output) # currently defaults to creating an EnsuredArtifact with a relative path\n\n    ensured_with_rel_path = ensured.rel_path() # create a new EnsuredArtifact with relative path to reuse\n    print(ensured_with_rel_path) # should return something like <ensured artifact ... >\n    ctx.output.print(ensured_with_rel_path) # should return the relative path of the artifact\n')))}c.isMDXComponent=!0}}]);