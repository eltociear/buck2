"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[778],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>s,MDXProvider:()=>b,mdx:()=>m,useMDXComponents:()=>p,withMDXComponents:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){return function(t){var r=p(t.components);return n.createElement(e,o({},t,{components:r}))}},p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=p(r),b=a,d=c["".concat(l,".").concat(b)]||c[b]||g[b]||o;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},23674:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={id:"sub_target"},l="sub_target",i={unversionedId:"api/bxl/sub_target",id:"api/bxl/sub_target",title:"sub_target",description:"sub_target",source:"@site/../docs/api/bxl/sub_target.generated.md",sourceDirName:"api/bxl",slug:"/api/bxl/sub_target",permalink:"/docs/api/bxl/sub_target",draft:!1,tags:[],version:"current",frontMatter:{id:"sub_target"},sidebar:"manualSidebar",previous:{title:"lazy_resolved_attrs",permalink:"/docs/api/bxl/lazy_resolved_attrs"},next:{title:"target_node",permalink:"/docs/api/bxl/target_node"}},u={},s=[{value:"sub_target",id:"sub_target-1",level:2},{value:"Details",id:"details",level:4}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,a.mdx)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"sub_target"},"sub_target"),(0,a.mdx)("h2",{id:"sub_target-1"},"sub_target"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},'def sub_target(target: "target_label", subtarget_name: "" = []) -> "providers_label"\n')),(0,a.mdx)("p",null,"Converts a ",(0,a.mdx)("inlineCode",{parentName:"p"},"TargetLabel")," into its corresponding ",(0,a.mdx)("inlineCode",{parentName:"p"},"ProvidersLabel")," given the subtarget names, which is a list for each layer of subtarget"),(0,a.mdx)("h4",{id:"details"},"Details"),(0,a.mdx)("p",null,"Sample usage:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_sub_target(ctx):\n    owners = ctx.cquery().owner("bin/TARGETS.fixture")\n    for owner in owners:\n        configured_label = owner.label\n        unconfigured_label = configured_label.raw_target()\n        ctx.output.print(sub_target(unconfigured_label))\n        ctx.output.print(sub_target(unconfigured_label, "subtarget1"))\n        ctx.output.print(sub_target(unconfigured_label, ["subtarget1", "subtarget2"))\n')))}p.isMDXComponent=!0}}]);