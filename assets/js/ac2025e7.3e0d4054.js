"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[89151],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(h,a(a({ref:t},u),{},{components:r})):n.createElement(h,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},32282:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>b,frontMatter:()=>l,metadata:()=>p,toc:()=>c});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={title:"usePublish",source:"packages/core/src/hooks/live/usePublish/index.ts"},s=void 0,p={unversionedId:"realtime/hooks/use-publish/index",id:"realtime/hooks/use-publish/index",title:"usePublish",description:"usePublish returns the publish method from liveProvider. It is useful when you want to publish a custom event.",source:"@site/docs/realtime/hooks/use-publish/index.md",sourceDirName:"realtime/hooks/use-publish",slug:"/realtime/hooks/use-publish/",permalink:"/docs/realtime/hooks/use-publish/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/realtime/hooks/use-publish/index.md",tags:[],version:"current",lastUpdatedBy:"Jim Hildensperger",lastUpdatedAt:1705911288,formattedLastUpdatedAt:"Jan 22, 2024",frontMatter:{title:"usePublish",source:"packages/core/src/hooks/live/usePublish/index.ts"},sidebar:"mainSidebar",previous:{title:"Live Provider",permalink:"/docs/realtime/live-provider/"},next:{title:"useSubscription",permalink:"/docs/realtime/hooks/use-subscription/"}},u={},c=[{value:"Usage",id:"usage",level:2},{value:"Publish Properties",id:"publish-properties",level:2},{value:"channel <PropTag required/>",id:"channel-",level:3},{value:"type <PropTag required/>",id:"type-",level:3},{value:"payload <PropTag required/>",id:"payload-",level:3},{value:"date <PropTag required/>",id:"date-",level:3}],d=(m="PropTag",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var m;const h={toc:c};function b(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},h,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"usePublish")," returns the ",(0,n.kt)("a",{parentName:"p",href:"/docs/realtime/live-provider#publish"},(0,n.kt)("inlineCode",{parentName:"a"},"publish"))," method from ",(0,n.kt)("a",{parentName:"p",href:"/docs/realtime/live-provider"},(0,n.kt)("inlineCode",{parentName:"a"},"liveProvider")),". It is useful when you want to publish a custom event."),(0,n.kt)("p",null,"Refine uses this hook internally in mutation hooks to ",(0,n.kt)("inlineCode",{parentName:"p"},"publish")," events after successful mutations. You can refer to the ",(0,n.kt)("inlineCode",{parentName:"p"},"liveProvider"),"'s ",(0,n.kt)("a",{parentName:"p",href:"/docs/realtime/live-provider#publish-events-from-hooks"},"Publish Events from Hooks")," section for more information."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { usePublish } from "@refinedev/core";\n\nconst publish = usePublish();\n\npublish({\n  channel: "custom-channel-name",\n  type: "custom-event-name",\n  payload: {\n    ids: [1, 2, 3],\n    "custom-property": "custom-property-value",\n  },\n  date: new Date(),\n});\n')),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This method is used to publish an event on the client side. Beware that publishing events on the client side is not recommended and the best practice is to publish events from the server side. You can refer ",(0,n.kt)("a",{parentName:"p",href:"/docs/realtime/live-provider#publish-events-from-api"},"Publish Events from API")," to see which events should be published from the server.")),(0,n.kt)("h2",{id:"publish-properties"},"Publish Properties"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"usePublish")," will be passed to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/realtime/live-provider#publish"},"publish")," method from the ",(0,n.kt)("a",{parentName:"p",href:"/docs/realtime/live-provider"},"liveProvider")," as a parameter. Following properties of this method can be used when publishing an event."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/core/interface-references#liveevent"},"LiveEvent interface","\u2192"))),(0,n.kt)("h3",{id:"channel-"},"channel ",(0,n.kt)(d,{required:!0,mdxType:"PropTag"})),(0,n.kt)("p",null,"The channel name to publish the event."),(0,n.kt)("h3",{id:"type-"},"type ",(0,n.kt)(d,{required:!0,mdxType:"PropTag"})),(0,n.kt)("p",null,"The event name to publish."),(0,n.kt)("h3",{id:"payload-"},"payload ",(0,n.kt)(d,{required:!0,mdxType:"PropTag"})),(0,n.kt)("p",null,"The payload to publish."),(0,n.kt)("h3",{id:"date-"},"date ",(0,n.kt)(d,{required:!0,mdxType:"PropTag"})),(0,n.kt)("p",null,"The date of the event."))}b.isMDXComponent=!0}}]);