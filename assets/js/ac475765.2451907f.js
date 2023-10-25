"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[78744,30903],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(r),k=a,u=m["".concat(d,".").concat(k)]||m[k]||c[k]||i;return r?n.createElement(u,l(l({ref:t},s),{},{components:r})):n.createElement(u,l({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},64837:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>d,metadata:()=>s,toc:()=>m});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),l=r(41211),o=["components"],d={id:"divider",title:"Divider"},p=void 0,s={unversionedId:"divider",id:"version-3.4.2/divider",title:"Divider",description:"Dividers are visual separators of content. Use Divider when you want to make a",source:"@site/versioned_docs/version-3.4.2/divider.md",sourceDirName:".",slug:"/divider",permalink:"/react-naitve-elements-doc-image/docs/3.4.2/divider",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-3.4.2/divider.md",tags:[],version:"3.4.2",frontMatter:{id:"divider",title:"Divider"},sidebar:"version-3.4.2/docs",previous:{title:"Chip",permalink:"/react-naitve-elements-doc-image/docs/3.4.2/chip"},next:{title:"Floating Action Button",permalink:"/react-naitve-elements-doc-image/docs/3.4.2/fab"}},c={},m=[{value:"Usage",id:"usage",level:2}],k={toc:m};function u(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Dividers are visual separators of content. Use Divider when you want to make a\ndistinction between sections of content."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { Divider } from \'react-native-elements\';\n\n<Divider orientation="horizontal" />;\n\n<Divider orientation="vertical" width={5} />;\n\n<Divider inset={true} insetType="middle" />;\n\n<Divider\n  orientation="horizontal"\n  subHeader="Test"\n  subHeaderStyle={{ color: \'blue\' }}\n/>;\n')),(0,i.kt)("hr",null),(0,i.kt)(l.default,{mdxType:"Props"}),(0,i.kt)("hr",null))}u.isMDXComponent=!0},41211:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),l=["components"],o={},d=void 0,p={unversionedId:"props/divider",id:"version-3.4.2/props/divider",title:"divider",description:"Props",source:"@site/versioned_docs/version-3.4.2/props/divider.md",sourceDirName:"props",slug:"/props/divider",permalink:"/react-naitve-elements-doc-image/docs/3.4.2/props/divider",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-3.4.2/props/divider.md",tags:[],version:"3.4.2",frontMatter:{}},s={},c=[{value:"Props",id:"props",level:2},{value:"Reference",id:"reference",level:2},{value:"<code>color</code>",id:"color",level:3},{value:"<code>inset</code>",id:"inset",level:3},{value:"<code>insetType</code>",id:"insettype",level:3},{value:"<code>style</code>",id:"style",level:3},{value:"<code>subHeader</code>",id:"subheader",level:3},{value:"<code>subHeaderStyle</code>",id:"subheaderstyle",level:3},{value:"<code>orientation</code>",id:"orientation",level:3},{value:"<code>width</code>",id:"width",level:3}],m={toc:c};function k(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"props"},"Props"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Also receives all\n",(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#color"},(0,i.kt)("inlineCode",{parentName:"a"},"color"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#inset"},(0,i.kt)("inlineCode",{parentName:"a"},"inset"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#insettype"},(0,i.kt)("inlineCode",{parentName:"a"},"insetType"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#style"},(0,i.kt)("inlineCode",{parentName:"a"},"style"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#subheader"},(0,i.kt)("inlineCode",{parentName:"a"},"subHeader"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#subheaderstyle"},(0,i.kt)("inlineCode",{parentName:"a"},"subHeaderStyle"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#orientation"},(0,i.kt)("inlineCode",{parentName:"a"},"orientation"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#width"},(0,i.kt)("inlineCode",{parentName:"a"},"width")))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("h3",{id:"color"},(0,i.kt)("inlineCode",{parentName:"h3"},"color")),(0,i.kt)("p",null,"Adds color to the divider"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},"StyleSheet.hairlineWidth < 1 ? '#bcbbc1' : 'rgba(0, 0, 0, 0.12)'")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"inset"},(0,i.kt)("inlineCode",{parentName:"h3"},"inset")),(0,i.kt)("p",null,"Adds inset to the divider"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"center"},"left")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"insettype"},(0,i.kt)("inlineCode",{parentName:"h3"},"insetType")),(0,i.kt)("p",null,"Allows inset to be applied to a specific direction. ",(0,i.kt)("inlineCode",{parentName:"p"},"middle")," applies inset in both directions. The ",(0,i.kt)("inlineCode",{parentName:"p"},"inset")," prop must be true for this to apply."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"left, right, middle"),(0,i.kt)("td",{parentName:"tr",align:"center"},"left")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"style"},(0,i.kt)("inlineCode",{parentName:"h3"},"style")),(0,i.kt)("p",null,"Style of the divider"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"View style (object)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"{borderBottomWidth: 1, borderBottomColor: #e1e8ee}")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"subheader"},(0,i.kt)("inlineCode",{parentName:"h3"},"subHeader")),(0,i.kt)("p",null,"Displays sub-header text with the divider. This applies only to Horizontal divider."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"subheaderstyle"},(0,i.kt)("inlineCode",{parentName:"h3"},"subHeaderStyle")),(0,i.kt)("p",null,"Adds styles to the subHeader text of the divider."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Text style (object)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"orientation"},(0,i.kt)("inlineCode",{parentName:"h3"},"orientation")),(0,i.kt)("p",null,"Allows changing the divider orientation. Values are ",(0,i.kt)("inlineCode",{parentName:"p"},"horizontal")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"vertical")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"horizontal or vertical"),(0,i.kt)("td",{parentName:"tr",align:"center"},"horizontal")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"width"},(0,i.kt)("inlineCode",{parentName:"h3"},"width")),(0,i.kt)("p",null,"Applies width to the divider. Width is supported to both ",(0,i.kt)("inlineCode",{parentName:"p"},"horizontal")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"vertical")," divider"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"number"),(0,i.kt)("td",{parentName:"tr",align:"center"},"StyleSheet.hairlineWidth")))))}k.isMDXComponent=!0}}]);