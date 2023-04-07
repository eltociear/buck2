"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[851],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>s,MDXProvider:()=>d,mdx:()=>x,useMDXComponents:()=>p,withMDXComponents:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){return function(t){var n=p(t.components);return r.createElement(e,o({},t,{components:n}))}},p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(i,".").concat(d)]||u[d]||f[d]||o;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function x(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},52302:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},i="ctx",l={unversionedId:"generated/native/ctx",id:"generated/native/ctx",title:"ctx",description:"The starting type, usually bound as ctx",source:"@site/../docs/generated/native/ctx.md",sourceDirName:"generated/native",slug:"/generated/native/ctx",permalink:"/docs/generated/native/ctx",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"manualSidebar",previous:{title:"ctx.actions",permalink:"/docs/generated/native/ctx.actions"},next:{title:"function",permalink:"/docs/generated/native/extension/function"}},c={},s=[{value:"actions",id:"actions",level:2},{value:"attrs",id:"attrs",level:2},{value:"label",id:"label",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.mdx)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"ctx"},"ctx"),(0,a.mdx)("p",null,"The starting type, usually bound as ",(0,a.mdx)("inlineCode",{parentName:"p"},"ctx")),(0,a.mdx)("h2",{id:"actions"},"actions"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},'actions: "actions"\n')),(0,a.mdx)("p",null,"Returns ",(0,a.mdx)("inlineCode",{parentName:"p"},"actions")," allowing you to define actions"),(0,a.mdx)("hr",null),(0,a.mdx)("h2",{id:"attrs"},"attrs"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},'attrs: ""\n')),(0,a.mdx)("p",null,"Returns the attributes of the target as a Starlark struct with a field for each attribute, which varies per rule"),(0,a.mdx)("hr",null),(0,a.mdx)("h2",{id:"label"},"label"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},'label: ""\n')),(0,a.mdx)("p",null,"Returns a ",(0,a.mdx)("inlineCode",{parentName:"p"},"label")," representing the target"))}p.isMDXComponent=!0}}]);