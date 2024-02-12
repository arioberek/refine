"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[39279],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),l=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=l(r),m=n,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||o;return r?a.createElement(f,i(i({ref:t},c),{},{components:r})):a.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=s;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},90595:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>b,frontMatter:()=>p,metadata:()=>l,toc:()=>d});r(67294);var a=r(3905);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const p={id:"useDataGrid",title:"useDataGrid","example-title":"Material UI's useDataGrid Hook","example-tags":["table","mui"]},u=void 0,l={unversionedId:"examples/table/mui/useDataGrid",id:"examples/table/mui/useDataGrid",title:"useDataGrid",description:"You may use the useDataGrid hook to process your data with features compatible with the MUI X DataGrid and DataGridPro component. You can be used as an out-of-the-box feature without needing to do extra operations for sorting, filtering, and pagination.",source:"@site/docs/examples/table/mui/useDataGrid.md",sourceDirName:"examples/table/mui",slug:"/examples/table/mui/useDataGrid",permalink:"/docs/examples/table/mui/useDataGrid",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/table/mui/useDataGrid.md",tags:[],version:"current",lastUpdatedBy:"Mohamed Khattab",lastUpdatedAt:1707744380,formattedLastUpdatedAt:"Feb 12, 2024",frontMatter:{id:"useDataGrid",title:"useDataGrid","example-title":"Material UI's useDataGrid Hook","example-tags":["table","mui"]},sidebar:"mainSidebar",previous:{title:"Authentication",permalink:"/docs/examples/authentication/mui"},next:{title:"Table Filters",permalink:"/docs/examples/table/mui/filter"}},c={},d=[{value:"With <code>DataGrid</code> Component",id:"with-datagrid-component",level:2},{value:"With <code>DataGridPro</code> Component",id:"with-datagridpro-component",level:2}],s=(m="CodeSandboxExample",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var m;const f={toc:d};function b(e){var{components:t}=e,r=i(e,["components"]);return(0,a.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){n(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You may use the ",(0,a.kt)("inlineCode",{parentName:"p"},"useDataGrid")," hook to process your data with features compatible with the MUI X ",(0,a.kt)("a",{parentName:"p",href:"https://mui.com/x/react-data-grid/"},"DataGrid")," and ",(0,a.kt)("a",{parentName:"p",href:"https://mui.com/x/react-data-grid/"},"DataGridPro")," component. You can be used as an out-of-the-box feature without needing to do extra operations for sorting, filtering, and pagination."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/ui-integrations/material-ui/hooks/use-data-grid"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"useDataGrid")," hook documentation for more information. \u2192")),(0,a.kt)("h2",{id:"with-datagrid-component"},"With ",(0,a.kt)("inlineCode",{parentName:"h2"},"DataGrid")," Component"),(0,a.kt)(s,{path:"table-material-ui-use-data-grid",mdxType:"CodeSandboxExample"}),(0,a.kt)("h2",{id:"with-datagridpro-component"},"With ",(0,a.kt)("inlineCode",{parentName:"h2"},"DataGridPro")," Component"),(0,a.kt)(s,{path:"table-material-ui-data-grid-pro",mdxType:"CodeSandboxExample"}))}b.isMDXComponent=!0}}]);