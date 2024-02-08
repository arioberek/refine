"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[87082],{3905:(n,e,t)=>{t.d(e,{Zo:()=>d,kt:()=>m});var o=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var l=o.createContext({}),c=function(n){var e=o.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},d=function(n){var e=c(n.components);return o.createElement(l.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,l=n.parentName,d=s(n,["components","mdxType","originalType","parentName"]),u=c(t),m=r,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return t?o.createElement(h,a(a({ref:e},d),{},{components:t})):o.createElement(h,a({ref:e},d))}));function m(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,a=new Array(i);a[0]=u;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s.mdxType="string"==typeof n?n:r,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},39121:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});t(67294);var o=t(3905);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):function(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))})),n}function a(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}const s={id:"sider",title:"Sider",swizzle:!0},l=void 0,c={unversionedId:"api-reference/mantine/customization/sider",id:"version-3.xx.xx/api-reference/mantine/customization/sider",title:"Sider",description:"There are 2 ways that will allow you to customize your `` component if you need it.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/mantine/customization/sider.md",sourceDirName:"api-reference/mantine/customization",slug:"/api-reference/mantine/customization/sider",permalink:"/docs/3.xx.xx/api-reference/mantine/customization/sider",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/mantine/customization/sider.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1707396961,formattedLastUpdatedAt:"Feb 8, 2024",frontMatter:{id:"sider",title:"Sider",swizzle:!0},sidebar:"someSidebar",previous:{title:"Layout",permalink:"/docs/3.xx.xx/api-reference/mantine/customization/layout"},next:{title:"Material UI API",permalink:"/docs/3.xx.xx/api-reference/mui"}},d={},p=[{value:"Customize Sider by Using <code>render</code> property",id:"customize-sider-by-using-render-property",level:2},{value:"Recreating the Default Sider Menu",id:"recreating-the-default-sider-menu",level:2}],u={toc:p};function m(n){var{components:e}=n,t=a(n,["components"]);return(0,o.kt)("wrapper",i(function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),o.forEach((function(e){r(n,e,t[e])}))}return n}({},u,t),{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are 2 ways that will allow you to customize your ",(0,o.kt)("inlineCode",{parentName:"p"},"<Sider />")," component if you need it."),(0,o.kt)("p",null,"You can access the ",(0,o.kt)("inlineCode",{parentName:"p"},"logout"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"dashboard"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"items")," elements and ",(0,o.kt)("inlineCode",{parentName:"p"},"collapsed")," state that we use in our default ",(0,o.kt)("inlineCode",{parentName:"p"},"Sider")," component by using ",(0,o.kt)("inlineCode",{parentName:"p"},"render")," properties. Customize it to your needs or you can create a custom ",(0,o.kt)("inlineCode",{parentName:"p"},"<Sider />")," component and use it either by passing it to ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config"},(0,o.kt)("inlineCode",{parentName:"a"},"<Refine />"))," or using a ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/mantine/customization/layout"},"Custom Layout"),"."),(0,o.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,o.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/packages/documentation/cli"},(0,o.kt)("strong",{parentName:"a"},"refine CLI")))),(0,o.kt)("h2",{id:"customize-sider-by-using-render-property"},"Customize Sider by Using ",(0,o.kt)("inlineCode",{parentName:"h2"},"render")," property"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=420px",live:!0,url:"http://localhost:3000",previewHeight:"420px"},'setInitialRoutes(["/posts"]);\nimport { Text, Code, Button, Box, Center } from "@pankod/refine-mantine";\n\nconst DummyListPage = () => {\n  const params = RefineCore.useRouterContext().useParams();\n\n  return (\n    <RefineMantine.List>\n      <Text italic color="dimmed" size="sm">\n        URL Parameters:\n      </Text>\n      <Code>{JSON.stringify(params)}</Code>\n    </RefineMantine.List>\n  );\n};\n\nconst CustomPage = () => {\n  const history = RefineCore.useRouterContext().useHistory();\n\n  return (\n    <>\n      <Text mt="sm" align="center" italic color="dimmed" size="sm">\n        Custom Page\n      </Text>\n      <Center>\n        <Button\n          mt="sm"\n          size="xs"\n          variant="outline"\n          onClick={() => history.goBack()}\n        >\n          Go back\n        </Button>\n      </Center>\n    </>\n  );\n};\n\nconst IconMoodSmile = () => (\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    className="icon icon-tabler icon-tabler-mood-smile"\n    width={18}\n    height={18}\n    viewBox="0 0 24 24"\n    stroke-width={2}\n    stroke="currentColor"\n    fill="none"\n    strokeLinecap="round"\n    strokeLinejoin="round"\n  >\n    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n    <circle cx={12} cy={12} r={9}></circle>\n    <line x1={9} y1={10} x2="9.01" y2={10}></line>\n    <line x1={15} y1={10} x2="15.01" y2={10}></line>\n    <path d="M9.5 15a3.5 3.5 0 0 0 5 0"></path>\n  </svg>\n);\n\nconst IconList = () => (\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    className="icon icon-tabler icon-tabler-list"\n    width={18}\n    height={18}\n    viewBox="0 0 24 24"\n    stroke-width={2}\n    stroke="currentColor"\n    fill="none"\n    strokeLinecap="round"\n    strokeLinejoin="round"\n  >\n    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n    <line x1={9} y1={6} x2={20} y2={6}></line>\n    <line x1={9} y1={12} x2={20} y2={12}></line>\n    <line x1={9} y1={18} x2={20} y2={18}></line>\n    <line x1={5} y1={6} x2={5} y2="6.01"></line>\n    <line x1={5} y1={12} x2={5} y2="12.01"></line>\n    <line x1={5} y1={18} x2={5} y2="18.01"></line>\n  </svg>\n);\n\nconst IconCategory = () => (\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    className="icon icon-tabler icon-tabler-category"\n    width={18}\n    height={18}\n    viewBox="0 0 24 24"\n    stroke-width={2}\n    stroke="currentColor"\n    fill="none"\n    strokeLinecap="round"\n    strokeLinejoin="round"\n  >\n    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n    <path d="M4 4h6v6h-6z"></path>\n    <path d="M14 4h6v6h-6z"></path>\n    <path d="M4 14h6v6h-6z"></path>\n    <circle cx={17} cy={17} r={3}></circle>\n  </svg>\n);\n\nconst IconUsers = () => (\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    className="icon icon-tabler icon-tabler-users"\n    width={18}\n    height={18}\n    viewBox="0 0 24 24"\n    stroke-width={2}\n    stroke="currentColor"\n    fill="none"\n    strokeLinecap="round"\n    strokeLinejoin="round"\n  >\n    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n    <circle cx={9} cy={7} r={4}></circle>\n    <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>\n    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>\n    <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>\n  </svg>\n);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\n//highlight-next-line\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n  MantineProvider,\n  Global,\n  NotificationsProvider,\n  useNotificationProvider,\n  LightTheme,\n  Layout,\n  // highlight-start\n  Sider,\n  NavLink,\n  // highlight-end\n} from "@pankod/refine-mantine";\nimport {\n  IconList,\n  IconCategory,\n  IconUsers,\n  // highlight-next-line\n  IconMoodSmile,\n} from "@tabler/icons";\n\n//highlight-next-line\nconst { Link } = routerProvider;\n\nconst App = () => {\n  return (\n    <MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>\n      <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n      <NotificationsProvider position="top-right">\n        <Refine\n          routerProvider={{\n            ...routerProvider,\n            routes: [{ path: "/custom-page", element: <CustomPage /> }],\n          }}\n          notificationProvider={useNotificationProvider}\n          dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n          Layout={Layout}\n          // highlight-start\n          Sider={() => (\n            <Sider\n              render={({ items }) => {\n                return (\n                  <>\n                    <NavLink\n                      component={Link}\n                      to="/custom-page"\n                      label="Custom Element"\n                      icon={<IconMoodSmile />}\n                      styles={{\n                        root: {\n                          display: "flex",\n                          color: "white",\n                          fontWeight: 500,\n                          "&:hover": {\n                            backgroundColor: "unset",\n                          },\n                        },\n                      }}\n                    />\n                    {items}\n                  </>\n                );\n              }}\n            />\n          )}\n          // highlight-end\n          resources={[\n            {\n              name: "posts",\n              list: DummyListPage,\n            },\n            {\n              name: "categories",\n              list: DummyListPage,\n              icon: <IconCategory />,\n            },\n            {\n              name: "users",\n              list: DummyListPage,\n              icon: <IconUsers />,\n            },\n          ]}\n        />\n      </NotificationsProvider>\n    </MantineProvider>\n  );\n};\n// visible-block-end\nrender(<App />);\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"NavLink")," component gives you an implemention ready component compatible with Sider menu items. If you want to add anything else to your ",(0,o.kt)("inlineCode",{parentName:"p"},"Sider")," component, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"collapsed")," state to manage your component.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/blob/v3/packages/mantine/src/components/layout/sider/index.tsx#L119-L132"},"Refer to how the ",(0,o.kt)("inlineCode",{parentName:"a"},"NavLink")," component is used in the default ",(0,o.kt)("inlineCode",{parentName:"a"},"Sider")," component. ","\u2192"))),(0,o.kt)("h2",{id:"recreating-the-default-sider-menu"},"Recreating the Default Sider Menu"),(0,o.kt)("p",null,"You can also customize your Sider component by creating the ",(0,o.kt)("inlineCode",{parentName:"p"},"CustomSider")," component."),(0,o.kt)("p",null,"When you examine the code of the example below, you will see the same code that we used for the ",(0,o.kt)("inlineCode",{parentName:"p"},"default sider")," component. You can create a customized ",(0,o.kt)("inlineCode",{parentName:"p"},"CustomSider")," component for yourself by following this code:"),(0,o.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,o.kt)("p",{parentName:"admonition"},"You can also run the ",(0,o.kt)("inlineCode",{parentName:"p"},"swizzle")," command to export the source code of the default sider component. Refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/packages/documentation/cli"},(0,o.kt)("strong",{parentName:"a"},"refine CLI"))," for more information.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="CustomSider.tsx"',title:'"CustomSider.tsx"'},'import React, { useState } from "react";\nimport {\n  CanAccess,\n  ITreeMenu,\n  useIsExistAuthentication,\n  useLogout,\n  useMenu,\n  useRefineContext,\n  useRouterContext,\n  useTitle,\n  useTranslate,\n} from "@pankod/refine-core";\nimport {\n  ActionIcon,\n  Box,\n  Drawer,\n  Navbar,\n  NavLink,\n  NavLinkStylesNames,\n  NavLinkStylesParams,\n  ScrollArea,\n  MediaQuery,\n  Button,\n  Tooltip,\n  TooltipProps,\n  Styles,\n  Title as DefaultTitle,\n} from "@pankod/refine-mantine";\nimport {\n  IconList,\n  IconMenu2,\n  IconChevronRight,\n  IconChevronLeft,\n  IconLogout,\n  IconDashboard,\n} from "@tabler/icons";\nimport { RefineLayoutSiderProps } from "@pankod/refine-ui-types";\n\nconst defaultNavIcon = <IconList size={18} />;\n\nconst CustomSider: React.FC<RefineLayoutSiderProps> = ({ render }) => {\n  const [collapsed, setCollapsed] = useState(false);\n  const [opened, setOpened] = useState(false);\n\n  const { Link } = useRouterContext();\n  const { defaultOpenKeys, menuItems, selectedKey } = useMenu();\n  const Title = useTitle();\n  const isExistAuthentication = useIsExistAuthentication();\n  const t = useTranslate();\n  const { hasDashboard } = useRefineContext();\n  const { mutate: mutateLogout } = useLogout();\n\n  const RenderToTitle = Title ?? DefaultTitle;\n\n  const drawerWidth = () => {\n    if (collapsed) return 80;\n    return 200;\n  };\n\n  const commonNavLinkStyles: Styles<NavLinkStylesNames, NavLinkStylesParams> = {\n    root: {\n      display: "flex",\n      color: "white",\n      fontWeight: 500,\n      "&:hover": {\n        backgroundColor: "unset",\n      },\n      "&[data-active]": {\n        backgroundColor: "#ffffff1a",\n        color: "white",\n        fontWeight: 700,\n        "&:hover": {\n          backgroundColor: "#ffffff1a",\n        },\n      },\n      justifyContent: collapsed && !opened ? "center" : "flex-start",\n    },\n    icon: {\n      marginRight: collapsed && !opened ? 0 : 12,\n    },\n    body: {\n      display: collapsed && !opened ? "none" : "flex",\n    },\n  };\n\n  const commonTooltipProps: Partial<TooltipProps> = {\n    disabled: !collapsed || opened,\n    position: "right",\n    withinPortal: true,\n    withArrow: true,\n    arrowSize: 8,\n    arrowOffset: 12,\n    offset: 4,\n  };\n\n  const renderTreeView = (tree: ITreeMenu[], selectedKey: string) => {\n    return tree.map((item) => {\n      const { icon, label, route, name, children } = item;\n\n      const isSelected = route === selectedKey;\n      const isParent = children.length > 0;\n\n      const additionalLinkProps = isParent\n        ? {}\n        : { component: Link, to: route };\n\n      return (\n        <CanAccess\n          key={route}\n          resource={name.toLowerCase()}\n          action="list"\n          params={{\n            resource: item,\n          }}\n        >\n          <Tooltip label={label} {...commonTooltipProps}>\n            <NavLink\n              key={route}\n              label={collapsed && !opened ? null : label}\n              icon={icon ?? defaultNavIcon}\n              active={isSelected}\n              childrenOffset={collapsed && !opened ? 0 : 12}\n              defaultOpened={defaultOpenKeys.includes(route || "")}\n              styles={commonNavLinkStyles}\n              {...additionalLinkProps}\n            >\n              {isParent && renderTreeView(children, selectedKey)}\n            </NavLink>\n          </Tooltip>\n        </CanAccess>\n      );\n    });\n  };\n\n  const items = renderTreeView(menuItems, selectedKey);\n\n  const dashboard = hasDashboard ? (\n    <CanAccess resource="dashboard" action="list">\n      <Tooltip\n        label={t("dashboard.title", "Dashboard")}\n        {...commonTooltipProps}\n      >\n        <NavLink\n          key="dashboard"\n          label={\n            collapsed && !opened ? null : t("dashboard.title", "Dashboard")\n          }\n          icon={<IconDashboard size={18} />}\n          component={Link}\n          to="/"\n          active={selectedKey === "/"}\n          styles={commonNavLinkStyles}\n        />\n      </Tooltip>\n    </CanAccess>\n  ) : null;\n\n  const logout = isExistAuthentication && (\n    <Tooltip label={t("buttons.logout", "Logout")} {...commonTooltipProps}>\n      <NavLink\n        key="logout"\n        label={collapsed && !opened ? null : t("buttons.logout", "Logout")}\n        icon={<IconLogout size={18} />}\n        onClick={() => mutateLogout()}\n        styles={commonNavLinkStyles}\n      />\n    </Tooltip>\n  );\n\n  const renderSider = () => {\n    if (render) {\n      return render({\n        dashboard,\n        logout,\n        items,\n        collapsed,\n      });\n    }\n    return (\n      <>\n        {dashboard}\n        {items}\n        {logout}\n      </>\n    );\n  };\n\n  return (\n    <>\n      <MediaQuery largerThan="md" styles={{ display: "none" }}>\n        <Box sx={{ position: "fixed", top: 64, left: 0, zIndex: 1199 }}>\n          <ActionIcon\n            color="white"\n            size={36}\n            sx={{\n              borderRadius: "0 6px 6px 0",\n              backgroundColor: "#2A132E",\n              color: "white",\n              "&:hover": {\n                backgroundColor: "#2A132E",\n              },\n            }}\n            onClick={() => setOpened((prev) => !prev)}\n          >\n            <IconMenu2 />\n          </ActionIcon>\n        </Box>\n      </MediaQuery>\n\n      <MediaQuery largerThan="md" styles={{ display: "none" }}>\n        <Drawer\n          opened={opened}\n          onClose={() => setOpened(false)}\n          size={200}\n          zIndex={1200}\n          withCloseButton={false}\n          styles={{\n            drawer: {\n              overflow: "hidden",\n              backgroundColor: "#2A132E",\n            },\n          }}\n        >\n          <Navbar.Section px="xs">\n            <RenderToTitle collapsed={false} />\n          </Navbar.Section>\n          <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">\n            {renderSider()}\n          </Navbar.Section>\n        </Drawer>\n      </MediaQuery>\n\n      <MediaQuery smallerThan="md" styles={{ display: "none" }}>\n        <Box\n          sx={{\n            width: drawerWidth(),\n            transition: "width 200ms ease, min-width 200ms ease",\n          }}\n        />\n      </MediaQuery>\n\n      <MediaQuery smallerThan="md" styles={{ display: "none" }}>\n        <Navbar\n          width={{ base: drawerWidth() }}\n          sx={{\n            overflow: "hidden",\n            transition: "width 200ms ease, min-width 200ms ease",\n            backgroundColor: "#2A132E",\n            position: "fixed",\n            top: 0,\n            height: "100vh",\n          }}\n        >\n          <Navbar.Section px="xs">\n            <RenderToTitle collapsed={collapsed} />\n          </Navbar.Section>\n          <Navbar.Section grow mt="sm" component={ScrollArea} mx="-xs" px="xs">\n            {renderSider()}\n          </Navbar.Section>\n          <Navbar.Section>\n            <Button\n              sx={{\n                background: "rgba(0,0,0,.5)",\n                borderRadius: 0,\n                borderTop: "1px solid #ffffff1a",\n              }}\n              size="md"\n              variant="gradient"\n              fullWidth\n              onClick={() => setCollapsed((prev) => !prev)}\n            >\n              {collapsed ? <IconChevronRight /> : <IconChevronLeft />}\n            </Button>\n          </Navbar.Section>\n        </Navbar>\n      </MediaQuery>\n    </>\n  );\n};\n')),(0,o.kt)("p",null,"We will override the default sider and show the custom menu we implemented in its place by passing a custom component to ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>"),"s ",(0,o.kt)("inlineCode",{parentName:"p"},"Sider")," prop:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=420px",live:!0,url:"http://localhost:3000",previewHeight:"420px"},'setInitialRoutes(["/posts"]);\nimport {\n  CanAccess,\n  ITreeMenu,\n  useIsExistAuthentication,\n  useLogout,\n  useMenu,\n  useRefineContext,\n  useRouterContext,\n  useTitle,\n  useTranslate,\n} from "@pankod/refine-core";\nimport {\n  Code,\n  Text,\n  ActionIcon,\n  Box,\n  Drawer,\n  Navbar,\n  NavLink,\n  NavLinkStylesNames,\n  NavLinkStylesParams,\n  ScrollArea,\n  MediaQuery,\n  Button,\n  Tooltip,\n  TooltipProps,\n  Styles,\n  RefineTitle as DefaultTitle,\n} from "@pankod/refine-mantine";\n\nconst DummyListPage = () => {\n  const params = RefineCore.useRouterContext().useParams();\n\n  return (\n    <RefineMantine.List>\n      <Text italic color="dimmed" size="sm">\n        URL Parameters:\n      </Text>\n      <Code>{JSON.stringify(params)}</Code>\n    </RefineMantine.List>\n  );\n};\n\nconst IconList = () => (\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    className="icon icon-tabler icon-tabler-list"\n    width={18}\n    height={18}\n    viewBox="0 0 24 24"\n    stroke-width={2}\n    stroke="currentColor"\n    fill="none"\n    strokeLinecap="round"\n    strokeLinejoin="round"\n  >\n    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n    <line x1={9} y1={6} x2={20} y2={6}></line>\n    <line x1={9} y1={12} x2={20} y2={12}></line>\n    <line x1={9} y1={18} x2={20} y2={18}></line>\n    <line x1={5} y1={6} x2={5} y2="6.01"></line>\n    <line x1={5} y1={12} x2={5} y2="12.01"></line>\n    <line x1={5} y1={18} x2={5} y2="18.01"></line>\n  </svg>\n);\n\nconst IconCategory = () => (\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    className="icon icon-tabler icon-tabler-category"\n    width={18}\n    height={18}\n    viewBox="0 0 24 24"\n    stroke-width={2}\n    stroke="currentColor"\n    fill="none"\n    strokeLinecap="round"\n    strokeLinejoin="round"\n  >\n    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n    <path d="M4 4h6v6h-6z"></path>\n    <path d="M14 4h6v6h-6z"></path>\n    <path d="M4 14h6v6h-6z"></path>\n    <circle cx={17} cy={17} r={3}></circle>\n  </svg>\n);\n\nconst IconUsers = () => (\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    className="icon icon-tabler icon-tabler-users"\n    width={18}\n    height={18}\n    viewBox="0 0 24 24"\n    stroke-width={2}\n    stroke="currentColor"\n    fill="none"\n    strokeLinecap="round"\n    strokeLinejoin="round"\n  >\n    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n    <circle cx={9} cy={7} r={4}></circle>\n    <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>\n    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>\n    <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>\n  </svg>\n);\n\nconst IconMenu2 = () => (\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    className="icon icon-tabler icon-tabler-menu-2"\n    width={18}\n    height={18}\n    viewBox="0 0 24 24"\n    stroke-width={2}\n    stroke="currentColor"\n    fill="none"\n    strokeLinecap="round"\n    strokeLinejoin="round"\n  >\n    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n    <line x1={4} y1={6} x2={20} y2={6}></line>\n    <line x1={4} y1={12} x2={20} y2={12}></line>\n    <line x1={4} y1={18} x2={20} y2={18}></line>\n  </svg>\n);\n\nconst IconChevronRight = () => (\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    className="icon icon-tabler icon-tabler-chevron-right"\n    width={18}\n    height={18}\n    viewBox="0 0 24 24"\n    stroke-width={2}\n    stroke="currentColor"\n    fill="none"\n    strokeLinecap="round"\n    strokeLinejoin="round"\n  >\n    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n    <polyline points="9 6 15 12 9 18"></polyline>\n  </svg>\n);\n\nconst IconChevronLeft = () => (\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    className="icon icon-tabler icon-tabler-chevron-left"\n    width={18}\n    height={18}\n    viewBox="0 0 24 24"\n    stroke-width={2}\n    stroke="currentColor"\n    fill="none"\n    strokeLinecap="round"\n    strokeLinejoin="round"\n  >\n    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n    <polyline points="15 6 9 12 15 18"></polyline>\n  </svg>\n);\n\nconst IconLogout = () => (\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    className="icon icon-tabler icon-tabler-logout"\n    width={18}\n    height={18}\n    viewBox="0 0 24 24"\n    stroke-width={2}\n    stroke="currentColor"\n    fill="none"\n    strokeLinecap="round"\n    strokeLinejoin="round"\n  >\n    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n    <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>\n    <path d="M7 12h14l-3 -3m0 6l3 -3"></path>\n  </svg>\n);\n\nconst IconDashboard = () => (\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    className="icon icon-tabler icon-tabler-dashboard"\n    width={18}\n    height={18}\n    viewBox="0 0 24 24"\n    stroke-width={2}\n    stroke="currentColor"\n    fill="none"\n    strokeLinecap="round"\n    strokeLinejoin="round"\n  >\n    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n    <circle cx={12} cy={13} r={2}></circle>\n    <line x1="13.45" y1="11.55" x2="15.5" y2="9.5"></line>\n    <path d="M6.4 20a9 9 0 1 1 11.2 0z"></path>\n  </svg>\n);\n\nconst defaultNavIcon = <IconList size={18} />;\n\nconst CustomSider: React.FC<RefineLayoutSiderProps> = ({ render }) => {\n  const [collapsed, setCollapsed] = useState(false);\n  const [opened, setOpened] = useState(false);\n\n  const { Link } = useRouterContext();\n  const { defaultOpenKeys, menuItems, selectedKey } = useMenu();\n  const Title = useTitle();\n  const isExistAuthentication = useIsExistAuthentication();\n  const t = useTranslate();\n  const { hasDashboard } = useRefineContext();\n  const { mutate: mutateLogout } = useLogout();\n\n  const RenderToTitle = Title ?? DefaultTitle;\n\n  const drawerWidth = () => {\n    if (collapsed) return 80;\n    return 200;\n  };\n\n  const commonNavLinkStyles: Styles<NavLinkStylesNames, NavLinkStylesParams> = {\n    root: {\n      display: "flex",\n      color: "white",\n      fontWeight: 500,\n      "&:hover": {\n        backgroundColor: "unset",\n      },\n      "&[data-active]": {\n        backgroundColor: "#ffffff1a",\n        color: "white",\n        fontWeight: 700,\n        "&:hover": {\n          backgroundColor: "#ffffff1a",\n        },\n      },\n      justifyContent: collapsed && !opened ? "center" : "flex-start",\n    },\n    icon: {\n      marginRight: collapsed && !opened ? 0 : 12,\n    },\n    body: {\n      display: collapsed && !opened ? "none" : "flex",\n    },\n  };\n\n  const commonTooltipProps: Partial<TooltipProps> = {\n    disabled: !collapsed || opened,\n    position: "right",\n    withinPortal: true,\n    withArrow: true,\n    arrowSize: 8,\n    arrowOffset: 12,\n    offset: 4,\n  };\n\n  const renderTreeView = (tree: ITreeMenu[], selectedKey: string) => {\n    return tree.map((item) => {\n      const { icon, label, route, name, children } = item;\n\n      const isSelected = route === selectedKey;\n      const isParent = children.length > 0;\n\n      const additionalLinkProps = isParent\n        ? {}\n        : { component: Link, to: route };\n\n      return (\n        <CanAccess\n          key={route}\n          resource={name.toLowerCase()}\n          action="list"\n          params={{\n            resource: item,\n          }}\n        >\n          <Tooltip label={label} {...commonTooltipProps}>\n            <NavLink\n              key={route}\n              label={collapsed && !opened ? null : label}\n              icon={icon ?? defaultNavIcon}\n              active={isSelected}\n              childrenOffset={collapsed && !opened ? 0 : 12}\n              defaultOpened={defaultOpenKeys.includes(route || "")}\n              styles={commonNavLinkStyles}\n              {...additionalLinkProps}\n            >\n              {isParent && renderTreeView(children, selectedKey)}\n            </NavLink>\n          </Tooltip>\n        </CanAccess>\n      );\n    });\n  };\n\n  const items = renderTreeView(menuItems, selectedKey);\n\n  const dashboard = hasDashboard ? (\n    <CanAccess resource="dashboard" action="list">\n      <Tooltip\n        label={t("dashboard.title", "Dashboard")}\n        {...commonTooltipProps}\n      >\n        <NavLink\n          key="dashboard"\n          label={\n            collapsed && !opened ? null : t("dashboard.title", "Dashboard")\n          }\n          icon={<IconDashboard size={18} />}\n          component={Link}\n          to="/"\n          active={selectedKey === "/"}\n          styles={commonNavLinkStyles}\n        />\n      </Tooltip>\n    </CanAccess>\n  ) : null;\n\n  const logout = isExistAuthentication && (\n    <Tooltip label={t("buttons.logout", "Logout")} {...commonTooltipProps}>\n      <NavLink\n        key="logout"\n        label={collapsed && !opened ? null : t("buttons.logout", "Logout")}\n        icon={<IconLogout size={18} />}\n        onClick={() => mutateLogout()}\n        styles={commonNavLinkStyles}\n      />\n    </Tooltip>\n  );\n\n  const renderSider = () => {\n    if (render) {\n      return render({\n        dashboard,\n        logout,\n        items,\n        collapsed,\n      });\n    }\n    return (\n      <>\n        {dashboard}\n        {items}\n        {logout}\n      </>\n    );\n  };\n\n  return (\n    <>\n      <MediaQuery largerThan="md" styles={{ display: "none" }}>\n        <Box sx={{ position: "fixed", top: 64, left: 0, zIndex: 1199 }}>\n          <ActionIcon\n            color="white"\n            size={36}\n            sx={{\n              borderRadius: "0 6px 6px 0",\n              backgroundColor: "#2A132E",\n              color: "white",\n              "&:hover": {\n                backgroundColor: "#2A132E",\n              },\n            }}\n            onClick={() => setOpened((prev) => !prev)}\n          >\n            <IconMenu2 />\n          </ActionIcon>\n        </Box>\n      </MediaQuery>\n\n      <MediaQuery largerThan="md" styles={{ display: "none" }}>\n        <Drawer\n          opened={opened}\n          onClose={() => setOpened(false)}\n          size={200}\n          zIndex={1200}\n          withCloseButton={false}\n          styles={{\n            drawer: {\n              overflow: "hidden",\n              backgroundColor: "#2A132E",\n            },\n          }}\n        >\n          <Navbar.Section px="xs">\n            <RenderToTitle collapsed={false} />\n          </Navbar.Section>\n          <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">\n            {renderSider()}\n          </Navbar.Section>\n        </Drawer>\n      </MediaQuery>\n\n      <MediaQuery smallerThan="md" styles={{ display: "none" }}>\n        <Box\n          sx={{\n            width: drawerWidth(),\n            transition: "width 200ms ease, min-width 200ms ease",\n          }}\n        />\n      </MediaQuery>\n\n      <MediaQuery smallerThan="md" styles={{ display: "none" }}>\n        <Navbar\n          width={{ base: drawerWidth() }}\n          sx={{\n            overflow: "hidden",\n            transition: "width 200ms ease, min-width 200ms ease",\n            backgroundColor: "#2A132E",\n            position: "fixed",\n            top: 0,\n            height: "100vh",\n          }}\n        >\n          <Navbar.Section px="xs">\n            <RenderToTitle collapsed={collapsed} />\n          </Navbar.Section>\n          <Navbar.Section grow mt="sm" component={ScrollArea} mx="-xs" px="xs">\n            {renderSider()}\n          </Navbar.Section>\n          <Navbar.Section>\n            <Button\n              sx={{\n                background: "rgba(0,0,0,.5)",\n                borderRadius: 0,\n                borderTop: "1px solid #ffffff1a",\n              }}\n              size="md"\n              variant="gradient"\n              fullWidth\n              onClick={() => setCollapsed((prev) => !prev)}\n            >\n              {collapsed ? <IconChevronRight /> : <IconChevronLeft />}\n            </Button>\n          </Navbar.Section>\n        </Navbar>\n      </MediaQuery>\n    </>\n  );\n};\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n  MantineProvider,\n  Global,\n  NotificationsProvider,\n  useNotificationProvider,\n  LightTheme,\n  Layout,\n} from "@pankod/refine-mantine";\nimport { IconCategory, IconUsers } from "@tabler/icons";\n\n//highlight-next-line\nimport { CustomSider } from "./components/customSider";\n\nconst App = () => {\n  return (\n    <MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>\n      <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n      <NotificationsProvider position="top-right">\n        <Refine\n          routerProvider={routerProvider}\n          dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n          notificationProvider={useNotificationProvider}\n          Layout={Layout}\n          // highlight-next-line\n          Sider={CustomSider}\n          resources={[\n            {\n              name: "posts",\n              list: DummyListPage,\n            },\n            {\n              name: "categories",\n              list: DummyListPage,\n              icon: <IconCategory />,\n            },\n            {\n              name: "users",\n              list: DummyListPage,\n              icon: <IconUsers />,\n            },\n          ]}\n        />\n      </NotificationsProvider>\n    </MantineProvider>\n  );\n};\n// visible-block-end\n\nrender(<App />);\n')),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useMenu")," hook is used to get style agnostic menu items. We render these items in the body of the sider. We create a recursive ",(0,o.kt)("inlineCode",{parentName:"p"},"renderTreeView")," function to create menu items from the list of resources passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>"),"."),(0,o.kt)("p",null,"We get the ",(0,o.kt)("inlineCode",{parentName:"p"},"Title")," component with the ",(0,o.kt)("inlineCode",{parentName:"p"},"useTitle")," hook."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you want to create a multi-level menu, you can take a look at this ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/examples/multi-level-menu"},(0,o.kt)("inlineCode",{parentName:"a"},"multi-level menu"))," example and also ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/advanced-tutorials/multi-level-menu"},(0,o.kt)("inlineCode",{parentName:"a"},"here"))," is the guide.")))}m.isMDXComponent=!0}}]);