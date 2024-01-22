"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[17039],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),b=p(r),d=a,f=b["".concat(s,".").concat(d)]||b[d]||u[d]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},72530:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={id:"useEditableTable",title:"useEditableTable","example-title":"Ant Design useEditableTable Hook","example-tags":["table","antd","refine-hooks","react-router"]},s=void 0,p={unversionedId:"examples/table/antd/useEditableTable",id:"version-3.xx.xx/examples/table/antd/useEditableTable",title:"useEditableTable",description:"useEditableTable, includes all of the capabilities of useTable. It also enables you to edit your Table in addition to these advantages. It returns Ant Design Table and Form components props.",source:"@site/versioned_docs/version-3.xx.xx/examples/table/antd/useEditableTable.md",sourceDirName:"examples/table/antd",slug:"/examples/table/antd/useEditableTable",permalink:"/docs/3.xx.xx/examples/table/antd/useEditableTable",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/examples/table/antd/useEditableTable.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Jim Hildensperger",lastUpdatedAt:1705911288,formattedLastUpdatedAt:"Jan 22, 2024",frontMatter:{id:"useEditableTable",title:"useEditableTable","example-title":"Ant Design useEditableTable Hook","example-tags":["table","antd","refine-hooks","react-router"]},sidebar:"someSidebar",previous:{title:"useDeleteMany",permalink:"/docs/3.xx.xx/examples/table/antd/useDeleteMany"},next:{title:"useTable",permalink:"/docs/3.xx.xx/examples/table/antd/useTable"}},c={},u=[],b=(d="CodeSandboxExample",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var d;const f={toc:u};function m(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"useEditableTable"),", includes all of the capabilities of ",(0,n.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/antd/hooks/table/useTable/"},(0,n.kt)("inlineCode",{parentName:"a"},"useTable")),". It also enables you to edit your Table in addition to these advantages. It returns Ant Design ",(0,n.kt)("a",{parentName:"p",href:"https://ant.design/components/table/#API"},"Table")," and ",(0,n.kt)("a",{parentName:"p",href:"https://ant.design/components/form/#API"},"Form")," components props."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/antd/hooks/table/useEditableTable/"},"Refer to the ",(0,n.kt)("strong",{parentName:"a"},"refine")," useEditableTable hook documentation for more information. \u2192")),(0,n.kt)(b,{path:"table-antd-use-editable-table",mdxType:"CodeSandboxExample"}))}m.isMDXComponent=!0}}]);