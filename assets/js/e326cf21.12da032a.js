"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[16627],{58860:(e,r,t)=>{t.d(r,{xA:()=>l,yg:()=>f});var n=t(37953);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return t?n.createElement(f,s(s({ref:r},l),{},{components:t})):n.createElement(f,s({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=m;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a[p]="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},64159:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>u,default:()=>g,frontMatter:()=>a,metadata:()=>c,toc:()=>p});t(37953);var n=t(58860);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const a={id:"usePermissions",title:"usePermissions",siderbar_label:"usePermissions",description:"usePermissions data hook from refine is a modified version of react-query's useQuery for retrieving user data"},u=void 0,c={unversionedId:"api-reference/core/hooks/auth/usePermissions",id:"version-3.xx.xx/api-reference/core/hooks/auth/usePermissions",title:"usePermissions",description:"usePermissions data hook from refine is a modified version of react-query's useQuery for retrieving user data",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/auth/usePermissions.md",sourceDirName:"api-reference/core/hooks/auth",slug:"/api-reference/core/hooks/auth/usePermissions",permalink:"/docs/3.xx.xx/api-reference/core/hooks/auth/usePermissions",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/auth/usePermissions.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1720195998,formattedLastUpdatedAt:"Jul 5, 2024",frontMatter:{id:"usePermissions",title:"usePermissions",siderbar_label:"usePermissions",description:"usePermissions data hook from refine is a modified version of react-query's useQuery for retrieving user data"},sidebar:"someSidebar",previous:{title:"useLogout",permalink:"/docs/3.xx.xx/api-reference/core/hooks/auth/useLogout"},next:{title:"useRegister",permalink:"/docs/3.xx.xx/api-reference/core/hooks/auth/useRegister"}},l={},p=[{value:"Usage",id:"usage",level:2}],d=(m="DocThumbsUpDownFeedbackWidget",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",e)});var m;const f={toc:p},y="wrapper";function g(e){var{components:r}=e,t=s(e,["components"]);return(0,n.yg)(y,i(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){o(e,r,t[r])}))}return e}({},f,t),{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"usePermissions")," calls the ",(0,n.yg)("inlineCode",{parentName:"p"},"getPermissions")," method from the ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/auth-provider"},(0,n.yg)("inlineCode",{parentName:"a"},"authProvider"))," under the hood."),(0,n.yg)("p",null,"It returns the result of ",(0,n.yg)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,n.yg)("inlineCode",{parentName:"p"},"useQuery")," which includes many properties, some of which being ",(0,n.yg)("inlineCode",{parentName:"p"},"isSuccess")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"isError"),". Data that is resolved from the ",(0,n.yg)("inlineCode",{parentName:"p"},"getPermissions")," will be returned as the ",(0,n.yg)("inlineCode",{parentName:"p"},"data")," in the query result."),(0,n.yg)("h2",{id:"usage"},"Usage"),(0,n.yg)(d,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"usePermissions")," can be useful when you want to get user's permission's anywhere in your code."),(0,n.yg)("p",null,"Imagine that you want to allow only users with the admin role to see the create button in a list page."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"We have a logic in ",(0,n.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/providers/auth-provider"},(0,n.yg)("inlineCode",{parentName:"a"},"authProvider")),"'s ",(0,n.yg)("inlineCode",{parentName:"li"},"getPermissions")," method like below.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'import { AuthProvider } from "@pankod/refine-core";\n\nconst authProvider: AuthProvider = {\n  ...\n    // highlight-start\n    getPermissions: () => {\n        return Promise.resolve(["admin"]);\n    },\n    // highlight-end\n  ...\n};\n')),(0,n.yg)("br",null),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Get permissions data in the list page with ",(0,n.yg)("inlineCode",{parentName:"li"},"usePermissions")," and check if the user has ",(0,n.yg)("inlineCode",{parentName:"li"},'"admin'),'" role.')),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/post/list"',title:'"pages/post/list"'},'// highlight-next-line\nimport { usePermissions } from "@pankod/refine-core";\nimport { List } from "@pankod/refine-antd";\n\nexport const PostList: React.FC = () => {\n    // highlight-next-line\n    const { data: permissionsData } = usePermissions();\n\n    return <List canCreate={permissionsData?.includes("admin")}>...</List>;\n};\n')),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/antd/components/basic-views/list"},"Refer to the ",(0,n.yg)("inlineCode",{parentName:"a"},"<List>")," documentation for detailed usage. ","\u2192"))),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"This hook can only be used if the ",(0,n.yg)("inlineCode",{parentName:"p"},"authProvider")," is provided."))))}g.isMDXComponent=!0}}]);