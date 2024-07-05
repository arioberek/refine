"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[71192],{58860:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(37953);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),l=c(n),d=o,y=l["".concat(u,".").concat(d)]||l[d]||m[d]||i;return n?r.createElement(y,s(s({ref:t},p),{},{components:n})):r.createElement(y,s({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[l]="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82597:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>l});n(37953);var r=n(58860);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={title:"usePermissions",description:"usePermissions data hook from Refine is a modified version of react-query's useQuery for retrieving user data",source:"/packages/core/src/hooks/auth/usePermissions/index.ts"},u=void 0,c={unversionedId:"authentication/hooks/use-permissions/index",id:"authentication/hooks/use-permissions/index",title:"usePermissions",description:"usePermissions data hook from Refine is a modified version of react-query's useQuery for retrieving user data",source:"@site/docs/authentication/hooks/use-permissions/index.md",sourceDirName:"authentication/hooks/use-permissions",slug:"/authentication/hooks/use-permissions/",permalink:"/docs/authentication/hooks/use-permissions/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/authentication/hooks/use-permissions/index.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1720190796,formattedLastUpdatedAt:"Jul 5, 2024",frontMatter:{title:"usePermissions",description:"usePermissions data hook from Refine is a modified version of react-query's useQuery for retrieving user data",source:"/packages/core/src/hooks/auth/usePermissions/index.ts"},sidebar:"mainSidebar",previous:{title:"useLogout",permalink:"/docs/authentication/hooks/use-logout/"},next:{title:"useRegister",permalink:"/docs/authentication/hooks/use-register/"}},p={},l=[{value:"Usage",id:"usage",level:2}],m=(d="DocThumbsUpDownFeedbackWidget",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",e)});var d;const y={toc:l},g="wrapper";function f(e){var{components:t}=e,n=s(e,["components"]);return(0,r.yg)(g,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},y,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"usePermissions")," calls the ",(0,r.yg)("inlineCode",{parentName:"p"},"getPermissions")," method from the ",(0,r.yg)("a",{parentName:"p",href:"/docs/authentication/auth-provider"},(0,r.yg)("inlineCode",{parentName:"a"},"authProvider"))," under the hood."),(0,r.yg)("p",null,"It returns the result of ",(0,r.yg)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,r.yg)("inlineCode",{parentName:"p"},"useQuery")," which includes many properties, some of which being ",(0,r.yg)("inlineCode",{parentName:"p"},"isSuccess")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"isError"),"."),(0,r.yg)("p",null,"Data that is resolved from the ",(0,r.yg)("inlineCode",{parentName:"p"},"getPermissions")," will be returned as the ",(0,r.yg)("inlineCode",{parentName:"p"},"data")," in the query result."),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)(m,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"usePermissions")," can be useful when you want to get user's permission's anywhere in your code."),(0,r.yg)("p",null,"For example, if you want only the users with the admin role to see the create button in a list page, we have a logic in ",(0,r.yg)("a",{parentName:"p",href:"/docs/authentication/auth-provider"},(0,r.yg)("inlineCode",{parentName:"a"},"authProvider")),"'s ",(0,r.yg)("inlineCode",{parentName:"p"},"getPermissions")," method like below:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import type { AuthProvider } from "@refinedev/core";\n\nconst authProvider: AuthProvider = {\n  // ...\n  // highlight-start\n  getPermissions: async (params) => {\n    if (params) {\n      // do some logic like for example you can get roles for specific tenant\n      return ["admin"];\n    }\n\n    return ["admin"];\n  },\n  // highlight-end\n  // ...\n};\n')),(0,r.yg)("p",null,"Get permissions data in the list page with ",(0,r.yg)("inlineCode",{parentName:"p"},"usePermissions")," and check if the user has ",(0,r.yg)("inlineCode",{parentName:"p"},'"admin'),'" role:'),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/post/list"',title:'"pages/post/list"'},'// highlight-next-line\nimport { usePermissions } from "@refinedev/core";\nimport { List } from "@refinedev/antd";\n\nexport const PostList: React.FC = () => {\n  // highlight-next-line\n  const { data: permissionsData } = usePermissions({\n    params: { tenantId: "id" }, // you can pass parameters to getPermissions\n  });\n\n  return <List canCreate={permissionsData?.includes("admin")}>...</List>;\n};\n')),(0,r.yg)("p",null,"To learn more about the ",(0,r.yg)("inlineCode",{parentName:"p"},"List")," component and CRUD views, refer to the ",(0,r.yg)("a",{parentName:"p",href:"/docs/guides-concepts/ui-libraries/#views"},"UI Libraries")," guide.")))}f.isMDXComponent=!0}}]);