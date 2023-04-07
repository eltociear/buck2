"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6547],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>l,MDXProvider:()=>d,mdx:()=>b,useMDXComponents:()=>s,withMDXComponents:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){return function(t){var n=s(t.components);return r.createElement(e,o({},t,{components:n}))}},s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,u(u({ref:t},l),{},{components:n})):r.createElement(f,u({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[f]="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},79199:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={},i="audit_ctx",u={unversionedId:"generated/bxl/audit_ctx",id:"generated/bxl/audit_ctx",title:"audit_ctx",description:"The context for performing audit operations in bxl. The functions offered on this ctx are the same behaviour as the audit functions available within audit command.",source:"@site/../docs/generated/bxl/audit_ctx.md",sourceDirName:"generated/bxl",slug:"/generated/bxl/audit_ctx",permalink:"/docs/generated/bxl/audit_ctx",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"manualSidebar",previous:{title:"analysis_result",permalink:"/docs/generated/bxl/analysis_result"},next:{title:"bxl_actions",permalink:"/docs/generated/bxl/bxl_actions"}},c={},l=[{value:"output",id:"output",level:2},{value:"Details",id:"details",level:4}],p={toc:l};function s(e){let{components:t,...n}=e;return(0,a.mdx)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"audit_ctx"},"audit_ctx"),(0,a.mdx)("p",null,"The context for performing ",(0,a.mdx)("inlineCode",{parentName:"p"},"audit")," operations in bxl. The functions offered on this ctx are the same behaviour as the audit functions available within audit command."),(0,a.mdx)("h2",{id:"output"},"output"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},'def output(output_path: str.type, target_platform: "" = None) -> [None, ""]\n')),(0,a.mdx)("p",null,"Returns either: - The ",(0,a.mdx)("inlineCode",{parentName:"p"},"StarlarkAction")," which created the buck-out path, if exists. - The ",(0,a.mdx)("inlineCode",{parentName:"p"},"StarlarkTargetLabel")," (unconfigured target label) constructed from the buck-out path, if the configuration hashes do not match. - None, if the configuration hash of the buck-out path matches the one passed into this function, or the default target configuration, but no action could be found that generated the buck-out path."),(0,a.mdx)("h4",{id:"details"},"Details"),(0,a.mdx)("p",null,"Takes in an optional target platform, otherwise will use the default target platform."),(0,a.mdx)("p",null,"Sample usage:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_audit_output(ctx):\n    target_platform = "foo"\n    result = ctx.audit().output("buck-out/v2/gen/fbcode/some_cfg_hash/path/to/__target__/artifact", target_platform)\n    ctx.output.print(result)\n')))}s.isMDXComponent=!0}}]);