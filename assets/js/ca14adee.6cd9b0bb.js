"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[80354],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(r),h=o,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},38208:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>u,metadata:()=>l,toc:()=>p});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const u={title:"useOnError",description:"useOnError data hook from Refine is a modified version of react-query's useMutation for create mutations",source:"/packages/core/src/hooks/auth/useOnError/index.ts"},s=void 0,l={unversionedId:"authentication/hooks/use-on-error/index",id:"authentication/hooks/use-on-error/index",title:"useOnError",description:"useOnError data hook from Refine is a modified version of react-query's useMutation for create mutations",source:"@site/docs/authentication/hooks/use-on-error/index.md",sourceDirName:"authentication/hooks/use-on-error",slug:"/authentication/hooks/use-on-error/",permalink:"/docs/authentication/hooks/use-on-error/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/authentication/hooks/use-on-error/index.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1707396961,formattedLastUpdatedAt:"Feb 8, 2024",frontMatter:{title:"useOnError",description:"useOnError data hook from Refine is a modified version of react-query's useMutation for create mutations",source:"/packages/core/src/hooks/auth/useOnError/index.ts"},sidebar:"mainSidebar",previous:{title:"useIsAuthenticated",permalink:"/docs/authentication/hooks/use-is-authenticated/"},next:{title:"useGetIdentity",permalink:"/docs/authentication/hooks/use-get-identity/"}},c={},p=[{value:"Internal Usage",id:"internal-usage",level:2},{value:"Usage",id:"usage",level:2}],d={toc:p};function h(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"useOnError")," calls the ",(0,n.kt)("a",{parentName:"p",href:"/docs/authentication/auth-provider#onerror-"},(0,n.kt)("inlineCode",{parentName:"a"},"onError"))," method from the ",(0,n.kt)("a",{parentName:"p",href:"/docs/authentication/auth-provider"},(0,n.kt)("inlineCode",{parentName:"a"},"authProvider"))," under the hood."),(0,n.kt)("p",null,"It returns the result of ",(0,n.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,n.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useMutation"},"useMutation"),", which includes many properties like ",(0,n.kt)("inlineCode",{parentName:"p"},"isSuccess")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"isError"),"."),(0,n.kt)("p",null,"Data that is resolved from the ",(0,n.kt)("a",{parentName:"p",href:"/docs/authentication/auth-provider#onerror-"},(0,n.kt)("inlineCode",{parentName:"a"},"onError"))," will be returned as the ",(0,n.kt)("inlineCode",{parentName:"p"},"data")," in the query result with the following type:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"type OnErrorResponse = {\n  redirectTo?: string;\n  logout?: boolean;\n  error?: Error;\n};\n")),(0,n.kt)("p",null,"According to the ",(0,n.kt)("inlineCode",{parentName:"p"},"onError")," method's returned values, the following process will be executed:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"redirectTo"),": If it has a value, the app will be redirected to the given URL."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"logout"),": If it is ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"useOnError")," calls the ",(0,n.kt)("inlineCode",{parentName:"li"},"logout")," method."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"error"),": An Error object representing any errors that may have occurred during the operation.")),(0,n.kt)("h2",{id:"internal-usage"},"Internal Usage"),(0,n.kt)("p",null,"Refine uses ",(0,n.kt)("inlineCode",{parentName:"p"},"useOnError")," internally in the data hooks to handle errors in a unified way."),(0,n.kt)("p",null,"When an error is thrown by any data hook, the ",(0,n.kt)("inlineCode",{parentName:"p"},"useOnError")," function is triggered with the error object. Afterward, the error object is passed to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/authentication/auth-provider#onerror-"},(0,n.kt)("inlineCode",{parentName:"a"},"onError"))," method of the ",(0,n.kt)("a",{parentName:"p",href:"/docs/authentication/auth-provider"},(0,n.kt)("inlineCode",{parentName:"a"},"authProvider")),", which can be utilized to redirect the user or to log them out."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import type { AuthProvider } from "@refinedev/core";\n\nconst authProvider: AuthProvider = {\n  // ...\n  // highlight-start\n  onError: (error) => {\n    const status = error.status;\n    if (status === 418) {\n      return {\n        logout: true,\n        redirectTo: "/login",\n        error: new Error(error),\n      };\n    }\n    return {};\n  },\n  // highlight-end\n  // ---\n};\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For more information about data hooks, refer to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/data/data-provider#supported-hooks"},"Data Provider documentation","\u2192"))),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Let's say that a payment request was declined by the API. If the error status code is ",(0,n.kt)("inlineCode",{parentName:"p"},"418"),", the user will be logged out for security reasons:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useOnError } from "@refinedev/core";\n\n// highlight-next-line\nconst { mutate: onError } = useOnError();\n\nfetch("http://example.com/payment")\n  .then(() => console.log("Success"))\n  // highlight-next-line\n  .catch((error) => onError(error));\n')),(0,n.kt)("p",null,"We have a logic in ",(0,n.kt)("a",{parentName:"p",href:"/docs/authentication/auth-provider"},(0,n.kt)("inlineCode",{parentName:"a"},"authProvider")),"'s ",(0,n.kt)("inlineCode",{parentName:"p"},"onError")," method like below."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import type { AuthProvider } from "@refinedev/core";\n\nconst authProvider: AuthProvider = {\n  // highlight-start\n  onError: (error) => {\n    const status = error.status;\n    if (status === 418) {\n      return {\n        logout: true,\n        redirectTo: "/login",\n        error: new Error(error),\n      };\n    }\n    return {};\n  },\n  // highlight-end\n  // ---\n};\n')))}h.isMDXComponent=!0}}]);