"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5421],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>l,MDXProvider:()=>f,mdx:()=>v,useMDXComponents:()=>p,withMDXComponents:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){return function(t){var n=p(t.components);return r.createElement(e,a({},t,{components:n}))}},p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},f=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,d=u["".concat(i,".").concat(f)]||u[f]||m[f]||a;return n?r.createElement(d,s(s({ref:t},l),{},{components:n})):r.createElement(d,s({ref:t},l))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},91892:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={},i="ConfigurationInfo",s={unversionedId:"generated/native/providers/ConfigurationInfo",id:"generated/native/providers/ConfigurationInfo",title:"ConfigurationInfo",description:'Provider that signals that a rule contains configuration info. This is used both as part of defining configurations (platform(), constraintvalue()) and defining whether a target "matches" a configuration or not (configsetting(), constraint_value())',source:"@site/../docs/generated/native/providers/ConfigurationInfo.md",sourceDirName:"generated/native/providers",slug:"/generated/native/providers/ConfigurationInfo",permalink:"/docs/generated/native/providers/ConfigurationInfo",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"manualSidebar",previous:{title:"promise",permalink:"/docs/generated/native/promise"},next:{title:"ConstraintSettingInfo",permalink:"/docs/generated/native/providers/ConstraintSettingInfo"}},c={},l=[{value:"constraints : <code>{&quot;target_label&quot;: &quot;ConstraintValueInfo&quot;}</code>",id:"constraints--target_label-constraintvalueinfo",level:2},{value:"values : <code>{str.type: str.type}</code>",id:"values--strtype-strtype",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.mdx)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"configurationinfo"},"ConfigurationInfo"),(0,o.mdx)("p",null,"Provider that signals that a rule contains configuration info. This is used both as part of defining configurations (",(0,o.mdx)("inlineCode",{parentName:"p"},"platform()"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"constraint_value()"),') and defining whether a target "matches" a configuration or not (',(0,o.mdx)("inlineCode",{parentName:"p"},"config_setting()"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"constraint_value()"),")"),(0,o.mdx)("h2",{id:"constraints--target_label-constraintvalueinfo"},"constraints : ",(0,o.mdx)("inlineCode",{parentName:"h2"},'{"target_label": "ConstraintValueInfo"}')),(0,o.mdx)("hr",null),(0,o.mdx)("h2",{id:"values--strtype-strtype"},"values : ",(0,o.mdx)("inlineCode",{parentName:"h2"},"{str.type: str.type}")))}p.isMDXComponent=!0}}]);