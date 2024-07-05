"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[53232],{58860:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var r=n(37953);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69848:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(37953),a=n(70195);const o=({hook:e,method:t,hasDefault:n=!0})=>{const o=`It will be passed to the [\`${null==t?void 0:t.name}\`](${null==t?void 0:t.URL}) method from the \`dataProvider\` as parameter via the [\`${null==e?void 0:e.name}\`](${null==e?void 0:e.URL}) hook. \n    The parameter is usually used as an API endpoint path.\n    It all depends on how to handle the \`resource\` in the [\`${null==t?void 0:t.name}\`](${null==t?void 0:t.URL}) method. \n    See the [creating a data provider](/docs/data/data-provider/#creating-a-data-provider) section for an example of how resources are handled.`;return r.createElement(r.Fragment,null,n&&r.createElement(a.$,null,"> Default: It reads the `resource` value from the current URL."),r.createElement(a.$,null,o))}},14337:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>y,default:()=>k,frontMatter:()=>g,metadata:()=>h,toc:()=>v});n(37953);var r=n(58860);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={toc:[]},s="wrapper";function d(e){var{components:t}=e,n=i(e,["components"]);return(0,r.yg)(s,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},l,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-css",metastring:"live shared",live:!0,shared:!0},"body {\n  padding: 4px;\n  background: white;\n}\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/products/show/1 previewHeight=300px",live:!0,url:"http://localhost:3000/products/show/1",previewHeight:"300px"},'setInitialRoutes(["/products/show/1"]);\n// visible-block-start\nimport { useShow } from "@refinedev/core";\n\ninterface IProduct {\n  id: number;\n  name: string;\n  material: string;\n}\n\nconst ProductShow: React.FC = () => {\n  const { queryResult } = useShow<IProduct>();\n\n  const { data, isLoading, isError } = queryResult;\n  const product = data?.data;\n\n  if (isLoading) {\n    return <div>Loading...</div>;\n  }\n\n  if (isError) {\n    return <div>Something went wrong!</div>;\n  }\n\n  return (\n    <div>\n      <h3>Product Details</h3>\n      <p>id: {product?.id}</p>\n      <p>name: {product?.name}</p>\n      <p>material: {product?.material}</p>\n    </div>\n  );\n};\n\n// visible-block-end\nsetRefineProps({\n  resources: [\n    {\n      name: "products",\n      show: ProductShow,\n    },\n  ],\n});\nrender(<RefineHeadlessDemo />);\n')))}d.isMDXComponent=!0;var p=n(69848);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const g={title:"useShow"},y=void 0,h={unversionedId:"data/hooks/use-show/index",id:"data/hooks/use-show/index",title:"useShow",description:"useShow is an extended version of useOne that supports all of its features and adds some more.",source:"@site/docs/data/hooks/use-show/index.md",sourceDirName:"data/hooks/use-show",slug:"/data/hooks/use-show/",permalink:"/docs/data/hooks/use-show/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/data/hooks/use-show/index.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1720195998,formattedLastUpdatedAt:"Jul 5, 2024",frontMatter:{title:"useShow"},sidebar:"mainSidebar",previous:{title:"Data Provider",permalink:"/docs/data/data-provider/"},next:{title:"useTable",permalink:"/docs/data/hooks/use-table/"}},f={},v=[{value:"Usage",id:"usage",level:2},{value:"Realtime Updates",id:"realtime-updates",level:2},{value:"Properties",id:"properties",level:2},{value:"resource",id:"resource",level:3},{value:"id",id:"id",level:3},{value:"meta",id:"meta",level:3},{value:"dataProviderName",id:"dataprovidername",level:3},{value:"queryOptions",id:"queryoptions",level:3},{value:"successNotification",id:"successnotification",level:3},{value:"errorNotification",id:"errornotification",level:3},{value:"liveMode",id:"livemode",level:3},{value:"onLiveEvent",id:"onliveevent",level:3},{value:"liveParams",id:"liveparams",level:3},{value:"overtimeOptions",id:"overtimeoptions",level:3},{value:"Return Values",id:"return-values",level:2},{value:"queryResult",id:"queryresult",level:3},{value:"showId",id:"showid",level:3},{value:"setShowId",id:"setshowid",level:3},{value:"Additional Values",id:"additional-values",level:3},{value:"overtime",id:"overtime",level:4},{value:"API Reference",id:"api-reference",level:2},{value:"Props",id:"props",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Return values",id:"return-values-1",level:3}],b=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",t)},N=b("DocThumbsUpDownFeedbackWidget"),w=b("PropsTable"),O={toc:v},C="wrapper";function k(e){var{components:t}=e,n=m(e,["components"]);return(0,r.yg)(C,c(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}({},O,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"useShow")," is an extended version of ",(0,r.yg)("a",{parentName:"p",href:"/docs/data/hooks/use-one"},(0,r.yg)("inlineCode",{parentName:"a"},"useOne"))," that supports all of its features and adds some more."),(0,r.yg)("p",null,"It is useful when you want to fetch a single record from the API. It will return the data and some functions to control the query."),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)(N,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"useShow")," hook does not expect any properties. By default, it will try to read the ",(0,r.yg)("inlineCode",{parentName:"p"},"resource")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"id")," values from the current URL. It will be passed to the ",(0,r.yg)("inlineCode",{parentName:"p"},"getOne")," method from the ",(0,r.yg)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter."),(0,r.yg)("p",null,"If you define ",(0,r.yg)("inlineCode",{parentName:"p"},"resource")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"id")," on the hook, when these properties are changed, the ",(0,r.yg)("inlineCode",{parentName:"p"},"useShow")," hook will trigger a new request."),(0,r.yg)(d,{mdxType:"BasicUsageLivePreview"})),(0,r.yg)("h2",{id:"realtime-updates"},"Realtime Updates"),(0,r.yg)(N,{id:"realtime-updates",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("a",{parentName:"p",href:"/docs/realtime/live-provider"},(0,r.yg)("inlineCode",{parentName:"a"},"LiveProvider"))," is required for this prop to work.")),(0,r.yg)("p",null,"When the ",(0,r.yg)("inlineCode",{parentName:"p"},"useShow")," hook is mounted, it will call the ",(0,r.yg)("inlineCode",{parentName:"p"},"subscribe")," method from the ",(0,r.yg)("inlineCode",{parentName:"p"},"liveProvider")," with some parameters such as ",(0,r.yg)("inlineCode",{parentName:"p"},"channel"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"resource")," etc. It is useful when you want to subscribe to live updates.")),(0,r.yg)("h2",{id:"properties"},"Properties"),(0,r.yg)("h3",{id:"resource"},"resource"),(0,r.yg)(N,{id:"resource",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)(p.A,{hook:{name:"useOne",URL:"/docs/core/hooks/data/use-one/"},method:{name:"getOne",URL:"/docs/core/providers/data-provider/#getone"},hasDefault:!1,mdxType:"PropResource"}),(0,r.yg)("p",null,"By default, it will try to read the ",(0,r.yg)("inlineCode",{parentName:"p"},"resource")," value from the current URL."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'useShow({\n  resource: "categories",\n});\n')),(0,r.yg)("p",null,"If the ",(0,r.yg)("inlineCode",{parentName:"p"},"resource")," is passed, the ",(0,r.yg)("inlineCode",{parentName:"p"},"id")," from the current URL will be ignored because it may belong to a different resource. To retrieve the ",(0,r.yg)("inlineCode",{parentName:"p"},"id")," value from the current URL, use the ",(0,r.yg)("inlineCode",{parentName:"p"},"useParsed")," hook and pass the ",(0,r.yg)("inlineCode",{parentName:"p"},"id")," value to the ",(0,r.yg)("inlineCode",{parentName:"p"},"useShow")," hook."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useShow, useParsed } from "@refinedev/core";\n\nconst { id } = useParsed();\n\nuseShow({\n  resource: "custom-resource",\n  id,\n});\n')),(0,r.yg)("p",null,"Or you can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"setId")," function to set the ",(0,r.yg)("inlineCode",{parentName:"p"},"id")," value."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useShow } from "@refinedev/core";\n\nconst { setShowId } = useShow({\n  resource: "custom-resource",\n});\n\nsetShowId("123");\n')),(0,r.yg)("p",null,"If you have multiple resources with the same name, you can pass the ",(0,r.yg)("inlineCode",{parentName:"p"},"identifier")," instead of the ",(0,r.yg)("inlineCode",{parentName:"p"},"name")," of the resource. It will only be used as the main matching key for the resource, data provider methods will still work with the ",(0,r.yg)("inlineCode",{parentName:"p"},"name")," of the resource defined in the ",(0,r.yg)("inlineCode",{parentName:"p"},"<Refine/>")," component."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.yg)("a",{parentName:"p",href:"/docs/core/refine-component#identifier"},(0,r.yg)("inlineCode",{parentName:"a"},"identifier")," of the ",(0,r.yg)("inlineCode",{parentName:"a"},"<Refine/>")," component documentation ","\u2192")))),(0,r.yg)("h3",{id:"id"},"id"),(0,r.yg)(N,{id:"id",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"It will be passed to the ",(0,r.yg)("inlineCode",{parentName:"p"},"getOne")," method from the ",(0,r.yg)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It is used to determine which record to fetch. By default, it will try to read the ",(0,r.yg)("inlineCode",{parentName:"p"},"id")," value from the current URL."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"useShow({\n  id: 123,\n});\n"))),(0,r.yg)("h3",{id:"meta"},"meta"),(0,r.yg)(N,{id:"meta",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"meta")," is a special property that can be used to pass additional information to data provider methods for the following purposes:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Customizing the data provider methods for specific use cases."),(0,r.yg)("li",{parentName:"ul"},"Generating GraphQL queries using plain JavaScript Objects (JSON).")),(0,r.yg)("p",null,"In the following example, we pass the ",(0,r.yg)("inlineCode",{parentName:"p"},"headers")," property in the ",(0,r.yg)("inlineCode",{parentName:"p"},"meta")," object to the ",(0,r.yg)("inlineCode",{parentName:"p"},"create")," method. With similar logic, you can pass any properties to specifically handle the data provider methods."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'useShow({\n  // highlight-start\n  meta: {\n    headers: { "x-meta-data": "true" },\n  },\n  // highlight-end\n});\n\nconst myDataProvider = {\n  //...\n  getOne: async ({\n    resource,\n    id,\n    // highlight-next-line\n    meta,\n  }) => {\n    // highlight-next-line\n    const headers = meta?.headers ?? {};\n    const url = `${apiUrl}/${resource}/${id}`;\n\n    //...\n    //...\n\n    // highlight-next-line\n    const { data } = await httpClient.get(`${url}`, { headers });\n\n    return {\n      data,\n    };\n  },\n  //...\n};\n')),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.yg)("a",{parentName:"p",href:"/docs/guides-concepts/general-concepts/#meta-concept"},(0,r.yg)("inlineCode",{parentName:"a"},"meta")," section of the General Concepts documentation ","\u2192")))),(0,r.yg)("h3",{id:"dataprovidername"},"dataProviderName"),(0,r.yg)(N,{id:"dataprovidername",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"If there is more than one ",(0,r.yg)("inlineCode",{parentName:"p"},"dataProvider"),", you can specify which one to use by passing the ",(0,r.yg)("inlineCode",{parentName:"p"},"dataProviderName")," prop. It is useful when you have a different data provider for different resources."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'useShow({\n  dataProviderName: "second-data-provider",\n});\n'))),(0,r.yg)("h3",{id:"queryoptions"},"queryOptions"),(0,r.yg)(N,{id:"queryoptions",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"queryOptions")," is used to pass additional options to the ",(0,r.yg)("inlineCode",{parentName:"p"},"useQuery")," hook. It is useful when you want to pass additional options to the ",(0,r.yg)("inlineCode",{parentName:"p"},"useQuery")," hook."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"useShow({\n  queryOptions: {\n    retry: 3,\n    enabled: false,\n  },\n});\n")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.yg)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useQuery"},(0,r.yg)("inlineCode",{parentName:"a"},"useQuery")," documentation","\u2192")))),(0,r.yg)("h3",{id:"successnotification"},"successNotification"),(0,r.yg)(N,{id:"successnotification",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("a",{parentName:"p",href:"/docs/notification/notification-provider"},(0,r.yg)("inlineCode",{parentName:"a"},"NotificationProvider"))," is required for this prop to work.")),(0,r.yg)("p",null,"After data is fetched successfully, ",(0,r.yg)("inlineCode",{parentName:"p"},"useShow")," can call ",(0,r.yg)("inlineCode",{parentName:"p"},"open")," function from ",(0,r.yg)("inlineCode",{parentName:"p"},"NotificationProvider")," to show a success notification. With this prop, you can customize the success notification."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'useShow({\n  successNotification: (data, values, resource) => {\n    return {\n      message: `${data.title} Successfully fetched.`,\n      description: "Success with no errors",\n      type: "success",\n    };\n  },\n});\n'))),(0,r.yg)("h3",{id:"errornotification"},"errorNotification"),(0,r.yg)(N,{id:"errornotification",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("a",{parentName:"p",href:"/docs/notification/notification-provider"},(0,r.yg)("inlineCode",{parentName:"a"},"NotificationProvider"))," is required for this prop to work.")),(0,r.yg)("p",null,"After data fetching is failed, ",(0,r.yg)("inlineCode",{parentName:"p"},"useShow")," will call the ",(0,r.yg)("inlineCode",{parentName:"p"},"open")," function from ",(0,r.yg)("inlineCode",{parentName:"p"},"NotificationProvider")," to show an error notification. With this prop, you can customize the error notification."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'useShow({\n  errorNotification: (data, values, resource) => {\n    return {\n      message: `Something went wrong when getting ${data.id}`,\n      description: "Error",\n      type: "error",\n    };\n  },\n});\n'))),(0,r.yg)("h3",{id:"livemode"},"liveMode"),(0,r.yg)(N,{id:"livemode",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("a",{parentName:"p",href:"/docs/realtime/live-provider"},(0,r.yg)("inlineCode",{parentName:"a"},"LiveProvider"))," is required for this prop to work.")),(0,r.yg)("p",null,'Determines whether to update data automatically ("auto") or not ("manual") if a related live event is received. It can be used to update and show data in Realtime throughout your app.'),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'useShow({\n  liveMode: "auto",\n});\n')),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.yg)("a",{parentName:"p",href:"/docs/realtime/live-provider#livemode"},"Live / Realtime page","\u2192")))),(0,r.yg)("h3",{id:"onliveevent"},"onLiveEvent"),(0,r.yg)(N,{id:"onliveevent",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("a",{parentName:"p",href:"/docs/realtime/live-provider"},(0,r.yg)("inlineCode",{parentName:"a"},"LiveProvider"))," is required for this prop to work.")),(0,r.yg)("p",null,"The callback function is executed when new events from a subscription have arrived."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"useShow({\n  onLiveEvent: (event) => {\n    console.log(event);\n  },\n});\n"))),(0,r.yg)("h3",{id:"liveparams"},"liveParams"),(0,r.yg)(N,{id:"liveparams",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("a",{parentName:"p",href:"/docs/realtime/live-provider"},(0,r.yg)("inlineCode",{parentName:"a"},"LiveProvider"))," is required for this prop to work.")),(0,r.yg)("p",null,"Params to pass to liveProvider's ",(0,r.yg)("a",{parentName:"p",href:"/docs/realtime/live-provider#subscribe"},"subscribe")," method.")),(0,r.yg)("h3",{id:"overtimeoptions"},"overtimeOptions"),(0,r.yg)(N,{id:"overtimeoptions",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"If you want loading overtime for the request, you can pass the ",(0,r.yg)("inlineCode",{parentName:"p"},"overtimeOptions")," prop to the this hook. It is useful when you want to show a loading indicator when the request takes too long.\n",(0,r.yg)("inlineCode",{parentName:"p"},"interval")," is the time interval in milliseconds. ",(0,r.yg)("inlineCode",{parentName:"p"},"onInterval")," is the function that will be called on each interval."),(0,r.yg)("p",null,"Return ",(0,r.yg)("inlineCode",{parentName:"p"},"overtime")," object from this hook. ",(0,r.yg)("inlineCode",{parentName:"p"},"elapsedTime")," is the elapsed time in milliseconds. It becomes ",(0,r.yg)("inlineCode",{parentName:"p"},"undefined")," when the request is completed."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"const { overtime } = useShow({\n  //...\n  overtimeOptions: {\n    interval: 1000,\n    onInterval(elapsedInterval) {\n      console.log(elapsedInterval);\n    },\n  },\n});\n\nconsole.log(overtime.elapsedTime); // undefined, 1000, 2000, 3000 4000, ...\n\n// You can use it like this:\n{\n  elapsedTime >= 4000 && <div>this takes a bit longer than expected</div>;\n}\n"))),(0,r.yg)("h2",{id:"return-values"},"Return Values"),(0,r.yg)("h3",{id:"queryresult"},"queryResult"),(0,r.yg)(N,{id:"queryresult",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"It is TanStack Query's ",(0,r.yg)("inlineCode",{parentName:"p"},"useQuery")," return values."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.yg)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useQuery"},(0,r.yg)("inlineCode",{parentName:"a"},"useQuery")," documentation","\u2192")))),(0,r.yg)("h3",{id:"showid"},"showId"),(0,r.yg)(N,{id:"showid",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"It is the ",(0,r.yg)("inlineCode",{parentName:"p"},"id")," value that is used on the ",(0,r.yg)("inlineCode",{parentName:"p"},"useShow")," hook.")),(0,r.yg)("h3",{id:"setshowid"},"setShowId"),(0,r.yg)(N,{id:"setshowid",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"When you want to change the ",(0,r.yg)("inlineCode",{parentName:"p"},"showId")," value, you can use this setter. It is useful when you want to change the ",(0,r.yg)("inlineCode",{parentName:"p"},"showId")," value based on the user's action."),(0,r.yg)("p",null,"It will trigger new request to fetch the data when the ",(0,r.yg)("inlineCode",{parentName:"p"},"showId")," value is changed.")),(0,r.yg)("h3",{id:"additional-values"},"Additional Values"),(0,r.yg)("h4",{id:"overtime"},"overtime"),(0,r.yg)(N,{id:"overtime",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"overtime")," object is returned from this hook. ",(0,r.yg)("inlineCode",{parentName:"p"},"elapsedTime")," is the elapsed time in milliseconds. It becomes ",(0,r.yg)("inlineCode",{parentName:"p"},"undefined")," when the request is completed."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"const { overtime } = useShow();\n\nconsole.log(overtime.elapsedTime); // undefined, 1000, 2000, 3000 4000, ...\n"))),(0,r.yg)("h2",{id:"api-reference"},"API Reference"),(0,r.yg)("h3",{id:"props"},"Props"),(0,r.yg)(N,{id:"props",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)(w,{module:"@refinedev/core/useShow","liveMode-default":'`"off"`',mdxType:"PropsTable"})),(0,r.yg)("h3",{id:"type-parameters"},"Type Parameters"),(0,r.yg)(N,{id:"type-parameters",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Property"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TQueryFnData"),(0,r.yg)("td",{parentName:"tr",align:null},"Result data returned by the query function. Extends ",(0,r.yg)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,r.yg)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,r.yg)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,r.yg)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TError"),(0,r.yg)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,r.yg)("a",{parentName:"td",href:"/docs/core/interface-references#httperror"},(0,r.yg)("inlineCode",{parentName:"a"},"HttpError"))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/core/interface-references#httperror"},(0,r.yg)("inlineCode",{parentName:"a"},"HttpError"))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/core/interface-references#httperror"},(0,r.yg)("inlineCode",{parentName:"a"},"HttpError")))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TData"),(0,r.yg)("td",{parentName:"tr",align:null},"Result data returned by the ",(0,r.yg)("inlineCode",{parentName:"td"},"select")," function. Extends ",(0,r.yg)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,r.yg)("inlineCode",{parentName:"a"},"BaseRecord")),". If not specified, the value of ",(0,r.yg)("inlineCode",{parentName:"td"},"TQueryFnData")," will be used as the default value."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,r.yg)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"TQueryFnData")))))),(0,r.yg)("h3",{id:"return-values-1"},"Return values"),(0,r.yg)(N,{id:"return-values-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Property"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"queryResult"),(0,r.yg)("td",{parentName:"tr",align:null},"Result of the query of a record"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},(0,r.yg)("inlineCode",{parentName:"a"},"QueryObserverResult<{ data: TData; error: TError }>")))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"showId"),(0,r.yg)("td",{parentName:"tr",align:null},"Record id"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"string"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"setShowId"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"showId")," setter"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Dispatch<SetStateAction< string")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"undefined>>"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"overtime"),(0,r.yg)("td",{parentName:"tr",align:null},"Overtime loading props"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"{ elapsedTime?: number }")))))))}k.isMDXComponent=!0}}]);