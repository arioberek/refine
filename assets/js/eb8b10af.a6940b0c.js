"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[26225],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=o,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},36469:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});n(67294);var a=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={title:"Introduction to Next.js Link component with examples",description:"A guide for navigation between pages using Next.js Link",slug:"next-js-link-component",authors:"michael",tags:["nextjs"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-04-next-link/social.png",hide_table_of_contents:!1},p=void 0,s={permalink:"/blog/next-js-link-component",source:"@site/blog/2022-09-04-next-link.md",title:"Introduction to Next.js Link component with examples",description:"A guide for navigation between pages using Next.js Link",date:"2022-09-04T00:00:00.000Z",formattedDate:"September 4, 2022",tags:[{label:"nextjs",permalink:"/blog/tags/nextjs"}],readingTime:8.17,hasTruncateMarker:!0,authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],frontMatter:{title:"Introduction to Next.js Link component with examples",description:"A guide for navigation between pages using Next.js Link",slug:"next-js-link-component",authors:"michael",tags:["nextjs"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-04-next-link/social.png",hide_table_of_contents:!1},prevItem:{title:"Material UI button in React",permalink:"/blog/mui-button-in-react"},nextItem:{title:"How to create a CRUD app with SvelteKit",permalink:"/blog/sveltekit-crud-app-with-svelte-mui"},relatedPosts:[{title:"A Guide for Next.js with TypeScript",description:"We will explain the entire process of how to use Next.js in TypeScript",permalink:"/blog/next-js-with-typescript",formattedDate:"September 12, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:7.225,date:"2022-09-12T00:00:00.000Z"},{title:"Next.js vs React - A Beginner's Guide",description:"We will be looking at the core differences between React and Next.js, using rendering, routing, and configuration as our basis for comparison.",permalink:"/blog/next-js-vs-react",formattedDate:"October 10, 2023",authors:[{name:"Marvel Ken",title:"Software Developer",imageURL:"/img/generic-profile.png",key:"marvel_ken"}],readingTime:13.87,date:"2023-10-10T00:00:00.000Z"},{title:"Next.js environment variables",description:"We will take a closer look at environment variables in Next.js",permalink:"/blog/next-js-environment-variables",formattedDate:"September 7, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:6.465,date:"2022-09-07T00:00:00.000Z"}],authorPosts:[{title:"How Next.js Redirects Work",description:"We'll examine the concept of URL redirection in Next.js and how redirects work.",permalink:"/blog/next-js-redirect",formattedDate:"May 16, 2023",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:8.785,date:"2023-05-16T00:00:00.000Z"},{title:"How to Fetch Data in React with useSWR",description:"Introduction to SWR and useSwr for Client-Side Data Fetching",permalink:"/blog/data-fetching-next-js-useswr",formattedDate:"January 3, 2023",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:13.22,date:"2023-01-03T00:00:00.000Z"},{title:"A Guide for Next.js with TypeScript",description:"We will explain the entire process of how to use Next.js in TypeScript",permalink:"/blog/next-js-with-typescript",formattedDate:"September 12, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:7.225,date:"2022-09-12T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Introducing the <code>&lt;Link/&gt;</code> component",id:"introducing-the-link-component",level:2},{value:"The Link component props",id:"the-link-component-props",level:2},{value:"<strong>Required props</strong>",id:"required-props",level:3},{value:"<code>href</code>",id:"href",level:3},{value:"<strong>Optional props</strong>",id:"optional-props",level:3},{value:"<code>as</code>",id:"as",level:3},{value:"<code>passHref</code>",id:"passhref",level:3},{value:"<code>prefetch</code>",id:"prefetch",level:3},{value:"<code>replace</code>",id:"replace",level:3},{value:"<code>scroll</code>",id:"scroll",level:3},{value:"Disable scroll to top",id:"disable-scroll-to-top",level:4},{value:"Scroll to a specific section in a webpage using hash ids",id:"scroll-to-a-specific-section-in-a-webpage-using-hash-ids",level:4},{value:"<code>locale</code>",id:"locale",level:3},{value:"<code>shallow</code>",id:"shallow",level:3},{value:"Conclusion",id:"conclusion",level:3}],u={toc:d};function h(e){var{components:t}=e,n=r(e,["components"]);return(0,a.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"If you have built websites and applications on the web, then you're very likely to have used a common method for navigation. Traditionally, navigation is often achieved with the HTML anchor element (",(0,a.kt)("inlineCode",{parentName:"p"},"<a></a>"),"). The anchor element is primarily used for navigating within and outside websites and webpages, and it serves its purpose pretty well. "),(0,a.kt)("p",null,"In this article, we'll introduce you to Next.js ",(0,a.kt)("inlineCode",{parentName:"p"},"<Link/>")," component, a similar method of navigation to the native anchor element but with additional built-in features for optimization. The ",(0,a.kt)("strong",{parentName:"p"},"Next.js Link")," component has additional benefits, such as options to customize navigation behavior through props and improved performance and SEO metrics."),(0,a.kt)("p",null,"Steps we'll cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#introducing-the-link-component"},"Introducing the ",(0,a.kt)("inlineCode",{parentName:"a"},"<Link/>")," component")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#the-link-component-props"},"The Next.js Link component props"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#required-props"},(0,a.kt)("strong",{parentName:"a"},"Required props"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#href"},(0,a.kt)("inlineCode",{parentName:"a"},"href"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#optional-props"},(0,a.kt)("strong",{parentName:"a"},"Optional props"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#as"},(0,a.kt)("inlineCode",{parentName:"a"},"as"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#passhref"},(0,a.kt)("inlineCode",{parentName:"a"},"passHref"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#prefetch"},(0,a.kt)("inlineCode",{parentName:"a"},"prefetch"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#replace"},(0,a.kt)("inlineCode",{parentName:"a"},"replace"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#scroll"},(0,a.kt)("inlineCode",{parentName:"a"},"scroll"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#locale"},(0,a.kt)("inlineCode",{parentName:"a"},"locale"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#shallow"},(0,a.kt)("inlineCode",{parentName:"a"},"shallow")))))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"You'll need a good knowledge of writing and understanding code in JavaScript and React to grasp this article."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You'll also need a next.js project to get started. Visit ",(0,a.kt)("a",{parentName:"li",href:"https://nextjs.org/docs"},"here")," to see how to create a next.js app."),(0,a.kt)("li",{parentName:"ul"},"Next, run ",(0,a.kt)("inlineCode",{parentName:"li"},"npm install styled-components")," in the terminal to install styled-components. We'll use it for styling in this tutorial.")),(0,a.kt)("h2",{id:"introducing-the-link-component"},"Introducing the ",(0,a.kt)("inlineCode",{parentName:"h2"},"<Link/>")," component"),(0,a.kt)("p",null,"The Link component provides a method of client-side navigation ",(0,a.kt)("em",{parentName:"p"},"within")," Next.js applications. It's recommended over the native anchor tag because it has many built-in features that help improve application performance and SEO ranking. Some of these features include preloading page content and faster navigation since routing is handled with JavaScript. "),(0,a.kt)("p",null,"In addition, client-side navigation with the Link component does not involve full page reloads, which is very significant in application performance and user experience."),(0,a.kt)("p",null,"The Link component is exported from the ",(0,a.kt)("inlineCode",{parentName:"p"},"next/link")," core module. Here's a basic demo showing its usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import Link from 'next/link'\n\nfunction Home () {\n    return (\n        <>\n            <h1> Visit our About page</>\n            <Link href=\"/about\"> About Us </Link>\n        </>\n    )\n}\n\nexport default Home\n")),(0,a.kt)("h2",{id:"the-link-component-props"},"The Link component props"),(0,a.kt)("h3",{id:"required-props"},(0,a.kt)("strong",{parentName:"h3"},"Required props")),(0,a.kt)("h3",{id:"href"},(0,a.kt)("inlineCode",{parentName:"h3"},"href")),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Next.js Link")," component requires a single mandatory prop: ",(0,a.kt)("inlineCode",{parentName:"p"},"href"),". "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"href")," specifies the path or URL to navigate to. This could be an absolute URL, a relative URL, or a URL object."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Absolute URL")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'<Link href="https://nextjs.org/docs"> Read the Docs </Link>\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Relative URL")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'<Link href="/about"> About Us </Link>\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL objects")),(0,a.kt)("p",null,"With a URL object, we can resolve URLs using strings and parameters passed as an object to the ",(0,a.kt)("strong",{parentName:"p"},"Next.js Link")," component. Here's a demo showing how to use it in the Link component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"<Link\n    href={{\n      pathname: '/products',\n      query: { product: '1' },\n    }}\n>\n    <a>Search for product 1</a>\n</Link>\n\n")),(0,a.kt)("p",null,"The above example will resolve the ",(0,a.kt)("inlineCode",{parentName:"p"},"href")," value into: ",(0,a.kt)("inlineCode",{parentName:"p"},"/products/?product=1"),"."),(0,a.kt)("h3",{id:"optional-props"},(0,a.kt)("strong",{parentName:"h3"},"Optional props")),(0,a.kt)("h3",{id:"as"},(0,a.kt)("inlineCode",{parentName:"h3"},"as")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"as")," prop is used with ",(0,a.kt)("inlineCode",{parentName:"p"},"href")," when using dynamic routes. It specifies a link decorator, which provides additional information about a URL that can be used in analytics (such as ads and affiliate programs) and tracking webpage performance."),(0,a.kt)("p",null," The decorator usually appears after a ",(0,a.kt)("inlineCode",{parentName:"p"},"'?'")," in the URL of a webpage and does not change the destination of the URL. An example of a URL with link decoration is ",(0,a.kt)("inlineCode",{parentName:"p"},"'http://www.refine.com/blog/article?referrer_source=newsletter'"),". "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("p",null,"Create new folders and files in the ",(0,a.kt)("inlineCode",{parentName:"p"},"pages")," folder of your application to look like below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\ud83d\udce6pages\n \u2523 \ud83d\udcc2api\n \u2503 \u2517 \ud83d\udcdchello.js\n \u2523 \ud83d\udcc2products\n \u2503 \u2523 \ud83d\udcdcindex.js\n \u2503 \u2517 \ud83d\udcdc[product].js\n \u2523 \ud83d\udcdcindex.js\n \u2517 \ud83d\udcdc_app.\n")),(0,a.kt)("p",null," Next, add the following code to ",(0,a.kt)("inlineCode",{parentName:"p"},"pages/products/index.js"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/products/index.js"',title:'"pages/products/index.js"'},'import React from "react";\nimport Link from "next/link";\n\nconst ProductsList = () => {\n const productIDs = ["1", "2", "3"];\n return (\n   <>\n     <div>\n       <h1>Products List</h1>\n     </div>\n\n     {productIDs.map((product, key) => (\n       <Link\n         href="/products/[product]"\n         as={`products/${product}/?referrer_source=newsletter`}\n         key={key}\n       >\n         <a>\n           <h1>{product}</h1>\n           <p>Learn more about product {product}</p>\n         </a>\n       </Link>\n     ))}\n   </>\n );\n};\n\nexport default ProductsList;\n')),(0,a.kt)("p",null,"And in ",(0,a.kt)("inlineCode",{parentName:"p"},"pages/products/[product].js"),", add the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/products/[product].js"',title:'"pages/products/[product].js"'},"import React from 'react'\nimport Link from 'next/link'\nimport { useRouter } from 'next/router'\n\nconst Product = () => {\n    const router = useRouter();\n    const productID = router.query.product;\n    return (\n        <>\n            <h1>\n            <Link href='/products'><a>Go back to Products</a></Link>\n            </h1>\n            <div>\n                <h5>Product {productID} Details Page</h5>\n            </div>\n            </>\n  )\n}\n\nexport default Product\n")),(0,a.kt)("p",null,"If you navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:3000/products")," you should see the page rendered like so: "),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-04-next-link/product.png",alt:"product"}),(0,a.kt)("br",null),(0,a.kt)("p",null,"Now, if you click on any of the products, you'll be taken to the details page of each product which is a dynamic route."),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-04-next-link/demo.gif",alt:"demo"}),(0,a.kt)("br",null),(0,a.kt)("p",null,"In the above demo we can see the URL of every product contains a link decorator, ",(0,a.kt)("inlineCode",{parentName:"p"},"?referrer_source=newsletter"),", which does not affect the link's destination. "),(0,a.kt)("h3",{id:"passhref"},(0,a.kt)("inlineCode",{parentName:"h3"},"passHref")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"passHref")," prop forces the ",(0,a.kt)("strong",{parentName:"p"},"Next.js Link")," component to send the ",(0,a.kt)("inlineCode",{parentName:"p"},"href")," prop to its child. This is important when the child of ",(0,a.kt)("inlineCode",{parentName:"p"},"</Link>")," is a custom component that wraps an anchor tag (",(0,a.kt)("inlineCode",{parentName:"p"},"<a>"),")."),(0,a.kt)("p",null,"Not adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"passHref")," prop in this scenario will hurt SEO and accessibility because the ",(0,a.kt)("inlineCode",{parentName:"p"},"<a>")," tag will not have the ",(0,a.kt)("inlineCode",{parentName:"p"},"href")," property. It is disabled by default. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("p",null,"Edit the code in ",(0,a.kt)("inlineCode",{parentName:"p"},"pages/products/index.js")," to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="pages/products/index.js"',title:'"pages/products/index.js"'},'  import React from "react";\n  import Link from "next/link";\n+ import styled from \'styled-components\'\n\n\n+ const CustomLink = styled.a`\n+ color: red;\n+ font-size: 30px;\n+ `\n\nconst ProductsList = () => {\n  const productIDs = ["1", "2", "3"];\n  return (\n    <>\n      <div>\n+        <NavLink href=\'/\' name=\'Home\'/>\n        <h1>Products List</h1>\n      </div>\n\n      {productIDs.map((product, key) => (\n        <Link\n          href="/products/[product]"\n          as={`products/${product}/?referrer_source=newsletter`}\n          key={key}\n        >\n          <a>\n            <h1>{product}</h1>\n            <p>Learn more about product {product}</p>\n          </a>\n        </Link>\n      ))}\n    </>\n  );\n};\n\n+ const NavLink = ({ href, name }) => {\n+  return (\n+    <Link href={href} passHref>\n+      <CustomLink>{name}</CustomLink>\n+    </Link>\n+ )\n+ };\n\nexport default ProductsList;\n')),(0,a.kt)("p",null,"Now if you navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:8000")," a custom red link should be displayed like below: "),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-04-next-link/custom.png",alt:"custom"}),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"prefetch"},(0,a.kt)("inlineCode",{parentName:"h3"},"prefetch")),(0,a.kt)("p",null,"Preloading page content can drastically improve application performance. The ",(0,a.kt)("inlineCode",{parentName:"p"},"prefetch")," prop allows the preloading of pages in the background and is enabled by default in the Next.js Link component. It only works in production, and if you wish to disable preloading, you can configure it like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"<Link href='/products' prefetch={false}><a>Click me!</a></Link>\n")),(0,a.kt)("br",null),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://discord.gg/refine"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,a.kt)("h3",{id:"replace"},(0,a.kt)("inlineCode",{parentName:"h3"},"replace")),(0,a.kt)("p",null,"The replace prop changes how navigation works by replacing the current history state instead of adding a new URL into the stack. This can be demonstrated by clicking on the ",(0,a.kt)("inlineCode",{parentName:"p"},"back")," button in the navigation bar in the browser."),(0,a.kt)("p",null,"Edit the content in ",(0,a.kt)("inlineCode",{parentName:"p"},"pages/index.js")," to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/index.js"',title:'"pages/index.js"'},'import Head from "next/head";\nimport Image from "next/image";\nimport Link from "next/link";\nimport styles from "../styles/Home.module.css";\n\nexport default function Home() {\n  return (\n    <div className={styles.container}>\n      <Head>\n        <title>Create Next App</title>\n        <meta name="description" content="Generated by create next app" />\n        <link rel="icon" href="/favicon.ico" />\n      </Head>\n\n      <main className={styles.main}>\n        <h1 className={styles.title}>Introduction to next/link</h1>\n        <h1>\n          <Link href=\'/products\'>Go to products page</Link>\n        </h1>\n      </main>\n    </div>\n  );\n}\n')),(0,a.kt)("p",null,"The page should look like below:"),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-04-next-link/home.png",alt:"home"}),(0,a.kt)("br",null),(0,a.kt)("p",null,"If you click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Go to products page")," link, watch how the application navigation works when we click on the back navigation button without the ",(0,a.kt)("inlineCode",{parentName:"p"},"replace")," prop in the GIF below."),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-04-next-link/noreplace.gif",alt:"noreplace"}),(0,a.kt)("br",null),(0,a.kt)("p",null,"Next, find the part that contains the code below in ",(0,a.kt)("inlineCode",{parentName:"p"},"pages/products/index.js")," and add the ",(0,a.kt)("inlineCode",{parentName:"p"},"replace")," prop to it like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="pages/products/index.js"',title:'"pages/products/index.js"'},"... \n\n{productIDs.map((product, key) => (\n        <Link\n          href=\"/products/[product]\"\n          as={`products/${product}/?referrer_source=newsletter`}\n          key={key}\n+          replace={product === '3' ? true : false}\n        >\n          <a>\n            <h1>{product}</h1>\n            <p>Learn more about product {product}</p>\n          </a>\n        </Link>\n      ))}\n ...\n")),(0,a.kt)("p",null,"Now let's go back to the browser and see how the navigation works with ",(0,a.kt)("inlineCode",{parentName:"p"},"replace")," prop. "),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-04-next-link/withreplace.gif",alt:"withreplace"}),(0,a.kt)("br",null),(0,a.kt)("p",null,"As you can see in the GIF above, when we visited the product 3 details page and then clicked the back navigation button, instead of returning to the products page, we were taken to the home page instead. "),(0,a.kt)("h3",{id:"scroll"},(0,a.kt)("inlineCode",{parentName:"h3"},"scroll")),(0,a.kt)("p",null,"Clicking on a link using the Link component will scroll to the top of the destination page by default. It's also possible to scroll to a specific section of the new page by using hash ids (the part of a URL after a ",(0,a.kt)("inlineCode",{parentName:"p"},"#"),"). You can disable the default behavior or hash ids by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"scroll={false}")," on the Link component."),(0,a.kt)("h4",{id:"disable-scroll-to-top"},"Disable scroll to top"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'<Link href="/blog/intro" scroll={false}>\n  <a>Disables scrolling to the top</a>\n</Link>\n')),(0,a.kt)("h4",{id:"scroll-to-a-specific-section-in-a-webpage-using-hash-ids"},"Scroll to a specific section in a webpage using hash ids"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'<Link href="https://refine.dev/blog/mui-datagrid-refine/#material-ui-datagrid-component">\n  <a>Scroll to a specific section</a>\n</Link>\n')),(0,a.kt)("h3",{id:"locale"},(0,a.kt)("inlineCode",{parentName:"h3"},"locale")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"locale")," prop is used to navigate users to different versions of a webpage based on the user's preferred locale (language and region). For example, we may have a blog that is read by English and French users, and we need to render the blog content in English for English users and in French for French users."),(0,a.kt)("p",null,"We can serve English or French users different versions of our webpage in their preferred language by configuring the ",(0,a.kt)("inlineCode",{parentName:"p"},"i18n")," object in ",(0,a.kt)("inlineCode",{parentName:"p"},"next.config.js"),". Read more about configuring locales  ",(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/advanced-features/i18n-routing"},"here"),"."),(0,a.kt)("h3",{id:"shallow"},(0,a.kt)("inlineCode",{parentName:"h3"},"shallow")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"shallow")," props let us update the path of the current page without running any of Next.js data fetching methods (that is, ",(0,a.kt)("inlineCode",{parentName:"p"},"getStaticProps"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"getServerSideProps")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"getInitialProps"),"). The updated ",(0,a.kt)("inlineCode",{parentName:"p"},"pathname")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"query")," associated with the new URL can be accessed by the ",(0,a.kt)("inlineCode",{parentName:"p"},"router")," object provided by ",(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/api-reference/next/router#userouter"},"useRouter")," or ",(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/api-reference/next/router#withrouter"},"withRouter"),". "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vercel/next.js/blob/canary/examples/with-shallow-routing/pages/index.js"},"Here's")," a good example showing how to use shallow routing in your web pages."),(0,a.kt)("h3",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Next.js Link")," component simplifies client-side navigation, and we recommend using it over the native anchor element for routing in your next.js applications. In this article, you learned how to use ",(0,a.kt)("inlineCode",{parentName:"p"},"Link")," and configure its behavior using props to suit your use cases. You also learned how important concepts such as dynamic routes and URL objects work using the Link component."),(0,a.kt)("p",null,"We hope you found this article useful in getting started with next/link and client-side navigation in next.js. You can read the ",(0,a.kt)("strong",{parentName:"p"},"Next.js Link")," component docs ",(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/api-reference/next/link"},"here")," for references and additional information."))}h.isMDXComponent=!0}}]);