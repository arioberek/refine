"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[42572],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,g=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},57770:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>N,frontMatter:()=>l,metadata:()=>s,toc:()=>d});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={title:"useRadioGroup"},p=void 0,s={unversionedId:"ui-integrations/ant-design/hooks/use-radio-group/index",id:"ui-integrations/ant-design/hooks/use-radio-group/index",title:"useRadioGroup",description:"useRadioGroup hook allows you to manage an Ant Design Radio.Group component when records in a resource needs to be used as radio options.",source:"@site/docs/ui-integrations/ant-design/hooks/use-radio-group/index.md",sourceDirName:"ui-integrations/ant-design/hooks/use-radio-group",slug:"/ui-integrations/ant-design/hooks/use-radio-group/",permalink:"/docs/ui-integrations/ant-design/hooks/use-radio-group/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/ui-integrations/ant-design/hooks/use-radio-group/index.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1708426059,formattedLastUpdatedAt:"Feb 20, 2024",frontMatter:{title:"useRadioGroup"},sidebar:"mainSidebar",previous:{title:"useCheckboxGroup",permalink:"/docs/ui-integrations/ant-design/hooks/use-checkbox-group/"},next:{title:"useImport",permalink:"/docs/ui-integrations/ant-design/hooks/use-import/"}},u={},d=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"resource",id:"resource",level:3},{value:"defaultValue",id:"defaultvalue",level:3},{value:"optionLabel and <code>optionValue</code>",id:"optionlabel-and-optionvalue",level:3},{value:"filters",id:"filters",level:3},{value:"sorters",id:"sorters",level:3},{value:"fetchSize",id:"fetchsize",level:3},{value:"queryOptions",id:"queryoptions",level:3},{value:"pagination",id:"pagination",level:3},{value:"<del>sort</del> <PropTag deprecated />",id:"sort-",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Return values",id:"return-values",level:3},{value:"Example",id:"example",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=c("Image"),g=c("PropTag"),k=c("PropsTable"),h=c("CodeSandboxExample"),f={toc:d};function N(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useRadioGroup")," hook allows you to manage an Ant Design ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/radio/#components-radio-demo-radiogroup-with-name"},"Radio.Group")," component when records in a resource needs to be used as radio options."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"We will demonstrate how to get data at ",(0,r.kt)("inlineCode",{parentName:"p"},"/languages")," endpoint from the ",(0,r.kt)("inlineCode",{parentName:"p"},"https://api.fake-rest.refine.dev")," REST API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="https://api.fake-rest.refine.dev/languages"',title:'"https://api.fake-rest.refine.dev/languages"'},'{\n  [\n    {\n      id: 1,\n      title: "Turkish",\n    },\n    {\n      id: 2,\n      title: "English",\n    },\n    {\n      id: 3,\n      title: "German",\n    },\n  ];\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/create.tsx"',title:'"pages/posts/create.tsx"'},'import { useRadioGroup } from "@refinedev/antd";\nimport { Form, Radio } from "antd";\n\nexport const PostCreate = () => {\n  // highlight-start\n  const { radioGroupProps } = useRadioGroup<ILanguage>({\n    resource: "languages",\n  });\n  // highlight-end\n\n  return (\n    <Form>\n      <Form.Item label="Languages" name="languages">\n        // highlight-next-line\n        <Radio.Group {...radioGroupProps} />\n      </Form.Item>\n    </Form>\n  );\n};\n\ninterface ILanguage {\n  id: number;\n  title: string;\n}\n')),(0,r.kt)(m,{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/hooks/useRadioGroup/basic-usage.png",alt:"Radio group",mdxType:"Image"}),(0,r.kt)("p",null,"All we have to do is pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"radioGroupProps")," it returns to the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Radio.Group>")," component."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useRadioGroup")," uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"useList")," hook for fetching data."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/data/hooks/use-list"},"Refine Core's ",(0,r.kt)("inlineCode",{parentName:"a"},"useList")," hook documentation ","\u2192"))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("h3",{id:"resource"},"resource"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { radioGroupProps } = useRadioGroup({\n  resource: "languages",\n});\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"resource")," property determines API resource endpoint to fetch records from ",(0,r.kt)("a",{parentName:"p",href:"/docs/data/data-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"dataProvider")),". It returns properly configured ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," values for radio buttons."),(0,r.kt)("p",null,"If you have multiple resources with the same name, you can pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"identifier")," instead of the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," of the resource. It will only be used as the main matching key for the resource, data provider methods will still work with the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," of the resource defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/refine-component#identifier"},(0,r.kt)("inlineCode",{parentName:"a"},"identifier")," section of the ",(0,r.kt)("inlineCode",{parentName:"a"},"<Refine/>")," component documentation ","\u2192"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/radio"},"Ant Design's ",(0,r.kt)("inlineCode",{parentName:"a"},"Radio.Group")," component documentation ","\u2192"))),(0,r.kt)("h3",{id:"defaultvalue"},"defaultValue"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { selectProps } = useRadioGroup({\n  resource: "languages",\n  // highlight-next-line\n  defaultValue: 1,\n});\n')),(0,r.kt)("p",null,"The easiest way to selecting a default value for an radio button field is by passing in ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultValue"),"."),(0,r.kt)("h3",{id:"optionlabel-and-optionvalue"},"optionLabel and ",(0,r.kt)("inlineCode",{parentName:"h3"},"optionValue")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { radioGroupProps } = useRadioGroup({\n  resource: "languages",\n  // highlight-start\n  optionLabel: "title",\n  optionValue: "id",\n  // highlight-end\n});\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"optionLabel")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"optionValue")," allows you to change the values and appearances of your options. Default values are ",(0,r.kt)("inlineCode",{parentName:"p"},'optionLabel = "title"')," and ",(0,r.kt)("inlineCode",{parentName:"p"},'optionValue = "id"'),"."),(0,r.kt)("p",null,"These properties also support nested property access with ",(0,r.kt)("a",{parentName:"p",href:"https://lodash.com/docs/4.17.15#get"},"Object path")," syntax."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { options } = useSelect({\n  resource: "categories",\n  // highlight-start\n  optionLabel: "nested.title",\n  optionValue: "nested.id",\n  // highlight-end\n});\n')),(0,r.kt)("h3",{id:"filters"},"filters"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"filters")," allows us to add filters while fetching the data. For example, if you want to list only the ",(0,r.kt)("inlineCode",{parentName:"p"},"titles"),' that are equal to "German":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { radioGroupProps } = useRadioGroup({\n  resource: "languages",\n  // highlight-start\n  filters: [\n    {\n      field: "title",\n      operator: "eq",\n      value: "German",\n    },\n  ],\n  // highlight-end\n});\n')),(0,r.kt)("h3",{id:"sorters"},"sorters"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sorters")," allows us to sort the ",(0,r.kt)("inlineCode",{parentName:"p"},"options"),". For example, if you want to sort your list according to ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," by ascending:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { radioGroupProps } = useRadioGroup({\n  resource: "languages",\n  // highlight-start\n  sorters: [\n    {\n      field: "title",\n      order: "asc",\n    },\n  ],\n  // highlight-end\n});\n')),(0,r.kt)("h3",{id:"fetchsize"},"fetchSize"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fetchSize")," is the amount of records to fetch in checkboxes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { selectProps } = useRadioGroup({\n  resource: "languages",\n  // highlight-next-line\n  fetchSize: 20,\n});\n')),(0,r.kt)("h3",{id:"queryoptions"},"queryOptions"),(0,r.kt)("p",null,"Passing the ",(0,r.kt)("inlineCode",{parentName:"p"},"queryOptions")," property allows us to set the ",(0,r.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useQuery"},"useQuery")," options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { radioGroupProps } = useRadioGroup({\n  resource: "languages",\n  // highlight-start\n  queryOptions: {\n    onError: () => {\n      console.log("triggers when on query return Error");\n    },\n  },\n  // highlight-end\n});\n')),(0,r.kt)("h3",{id:"pagination"},"pagination"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pagination")," allows us to set page and items per page values."),(0,r.kt)("p",null,"For example, lets say that we have 1000 post records:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const { selectProps } = useSelect({\n  resource: "categories",\n  // highlight-next-line\n  pagination: { current: 3, pageSize: 8 },\n});\n')),(0,r.kt)("p",null,"The listing will start from page 3, showing 8 records per page."),(0,r.kt)("h3",{id:"sort-"},(0,r.kt)("del",{parentName:"h3"},"sort")," ",(0,r.kt)(g,{deprecated:!0,mdxType:"PropTag"})),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"sorters")," instead."),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)(k,{module:"@refinedev/antd/useRadioGroup",mdxType:"PropsTable"}),(0,r.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TQueryFnData"),(0,r.kt)("td",{parentName:"tr",align:null},"Result data returned by the query function. Extends ",(0,r.kt)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TError"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,r.kt)("a",{parentName:"td",href:"/docs/core/interface-references#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/core/interface-references#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/core/interface-references#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TData"),(0,r.kt)("td",{parentName:"tr",align:null},"Result data returned by the ",(0,r.kt)("inlineCode",{parentName:"td"},"select")," function. Extends ",(0,r.kt)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord")),". If not specified, the value of ",(0,r.kt)("inlineCode",{parentName:"td"},"TQueryFnData")," will be used as the default value."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TQueryFnData"))))),(0,r.kt)("h3",{id:"return-values"},"Return values"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"radioGroupProps"),(0,r.kt)("td",{parentName:"tr",align:null},"Ant design radio group props"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://ant.design/components/radio/#RadioGroup"},(0,r.kt)("inlineCode",{parentName:"a"},"Radio Group")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"queryResult"),(0,r.kt)("td",{parentName:"tr",align:null},"Results of the query of a record"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},(0,r.kt)("inlineCode",{parentName:"a"},"QueryObserverResult<{ data: TData }>")))))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(h,{path:"field-antd-use-radio-group",mdxType:"CodeSandboxExample"}))}N.isMDXComponent=!0}}]);