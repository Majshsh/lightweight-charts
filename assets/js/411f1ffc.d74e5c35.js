"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[13],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),m=n,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return a?r.createElement(f,o(o({ref:t},c),{},{components:a})):r.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3370:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const i={id:"PaneRendererCustomData",title:"Interface: PaneRendererCustomData<HorzScaleItem, TData>",sidebar_label:"PaneRendererCustomData",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},o=void 0,l={unversionedId:"api/interfaces/PaneRendererCustomData",id:"api/interfaces/PaneRendererCustomData",title:"Interface: PaneRendererCustomData<HorzScaleItem, TData>",description:"Data provide to the custom series pane view which can be used within the renderer",source:"@site/docs/api/interfaces/PaneRendererCustomData.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/PaneRendererCustomData",permalink:"/lightweight-charts/docs/next/api/interfaces/PaneRendererCustomData",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"PaneRendererCustomData",title:"Interface: PaneRendererCustomData<HorzScaleItem, TData>",sidebar_label:"PaneRendererCustomData",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},s=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"bars",id:"bars",level:3},{value:"barSpacing",id:"barspacing",level:3},{value:"visibleRange",id:"visiblerange",level:3}],c={toc:s},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Data provide to the custom series pane view which can be used within the renderer\nfor drawing the series data."),(0,n.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"HorzScaleItem")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"HorzScaleItem"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"TData")),(0,n.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,n.kt)("a",{parentName:"td",href:"/lightweight-charts/docs/next/api/interfaces/CustomData"},(0,n.kt)("inlineCode",{parentName:"a"},"CustomData")),"<",(0,n.kt)("inlineCode",{parentName:"td"},"HorzScaleItem"),">")))),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"bars"},"bars"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"bars"),": readonly ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/CustomBarItemData"},(0,n.kt)("inlineCode",{parentName:"a"},"CustomBarItemData")),"<",(0,n.kt)("inlineCode",{parentName:"p"},"HorzScaleItem"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"TData"),">","[]"),(0,n.kt)("p",null,"List of all the series' items and their x coordinates."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"barspacing"},"barSpacing"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"barSpacing"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,"Spacing between consecutive bars."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"visiblerange"},"visibleRange"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"visibleRange"),": ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/Range"},(0,n.kt)("inlineCode",{parentName:"a"},"Range")),"<",(0,n.kt)("inlineCode",{parentName:"p"},"number"),">"),(0,n.kt)("p",null,"The current visible range of items on the chart."))}u.isMDXComponent=!0}}]);