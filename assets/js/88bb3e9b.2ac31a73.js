"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[42746,10756,81520],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=m(a),u=o,h=d["".concat(s,".").concat(u)]||d[u]||c[u]||r;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var m=2;m<r;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},65612:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>m,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),l=a(16178),i=["components"],s={id:"bottomsheet",title:"BottomSheet",slug:"/bottomsheet"},m=void 0,p={unversionedId:"main/bottomsheet",id:"version-4.0.0-beta.0/main/bottomsheet",title:"BottomSheet",description:"Overlay Modal that displays content from the bottom of the screen.",source:"@site/versioned_docs/version-4.0.0-beta.0/main/BottomSheet.md",sourceDirName:"main",slug:"/bottomsheet",permalink:"/react-naitve-elements-doc-image/docs/4.0.0-beta.0/bottomsheet",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/BottomSheet.md",tags:[],version:"4.0.0-beta.0",frontMatter:{id:"bottomsheet",title:"BottomSheet",slug:"/bottomsheet"},sidebar:"version-4.0.0-beta.0/docs",previous:{title:"Badge",permalink:"/react-naitve-elements-doc-image/docs/4.0.0-beta.0/badge"},next:{title:"Button",permalink:"/react-naitve-elements-doc-image/docs/4.0.0-beta.0/button"}},c={},d=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"BottomSheet",id:"bottomsheet",level:3},{value:"Reference",id:"reference",level:2},{value:"BottomSheet",id:"bottomsheet-1",level:3},{value:"containerStyle",id:"containerstyle",level:4},{value:"isVisible",id:"isvisible",level:4},{value:"modalProps",id:"modalprops",level:4},{value:"scrollViewProps",id:"scrollviewprops",level:4}],u={toc:d};function h(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Overlay Modal that displays content from the bottom of the screen."),(0,r.kt)("p",null,"This opens from the bottom of the screen."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")),(0,r.kt)("p",null,"Make sure that you have completed ",(0,r.kt)("a",{parentName:"p",href:"/react-naitve-elements-doc-image/docs/4.0.0-beta.0/#step-3-setup-react-native-safe-area-context"},"Step 3")," in the setup guide before using ",(0,r.kt)("inlineCode",{parentName:"p"},"BottomSheet"),"."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(l.default,{mdxType:"Usage"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("h3",{id:"bottomsheet"},"BottomSheet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#containerstyle"},"containerStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#isvisible"},"isVisible")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#modalprops"},"modalProps")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#scrollviewprops"},"scrollViewProps"))),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("h3",{id:"bottomsheet-1"},"BottomSheet"),(0,r.kt)("h4",{id:"containerstyle"},"containerStyle"),(0,r.kt)("p",null,"Style of the bottom sheet's container. Use this to change the color of the underlay."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"isvisible"},"isVisible"),(0,r.kt)("p",null,"Is the modal component shown."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"modalprops"},"modalProps"),(0,r.kt)("p",null,"Additional props handed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Modal"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ModalProps"),(0,r.kt)("td",{parentName:"tr",align:null},"{}")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"scrollviewprops"},"scrollViewProps"),(0,r.kt)("p",null,"Used to add props to Scroll view."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ScrollViewProps"),(0,r.kt)("td",{parentName:"tr",align:null},"{}")))),(0,r.kt)("hr",null))}h.isMDXComponent=!0},16178:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>m,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),l=a(49334),i=["components"],s={},m=void 0,p={unversionedId:"main/usage/BottomSheet/BottomSheet",id:"version-4.0.0-beta.0/main/usage/BottomSheet/BottomSheet",title:"BottomSheet",description:"\x3c!-- To show the guide to configure the BottomSheet Component to a project.",source:"@site/versioned_docs/version-4.0.0-beta.0/main/usage/BottomSheet/BottomSheet.md",sourceDirName:"main/usage/BottomSheet",slug:"/main/usage/BottomSheet/",permalink:"/react-naitve-elements-doc-image/docs/4.0.0-beta.0/main/usage/BottomSheet/",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/usage/BottomSheet/BottomSheet.md",tags:[],version:"4.0.0-beta.0",frontMatter:{}},c={},d=[],u={toc:d};function h(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:"),"\nMake sure that you have completed ",(0,r.kt)("a",{parentName:"p",href:"/react-naitve-elements-doc-image/docs/4.0.0-beta.0/#step-3-setup-react-native-safe-area-context"},"Step 3")," in the setup guide before using ",(0,r.kt)("inlineCode",{parentName:"p"},"BottomSheet"),"."),(0,r.kt)("p",null,"Overlay Modal that displays content from the bottom of the screen."),(0,r.kt)(l.default,{mdxType:"Snack"}))}h.isMDXComponent=!0},49334:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>m,toc:()=>c});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),l=["components"],i={},s=void 0,m={unversionedId:"main/usage/BottomSheet/snack/index",id:"version-4.0.0-beta.0/main/usage/BottomSheet/snack/index",title:"index",description:"",source:"@site/versioned_docs/version-4.0.0-beta.0/main/usage/BottomSheet/snack/index.md",sourceDirName:"main/usage/BottomSheet/snack",slug:"/main/usage/BottomSheet/snack/",permalink:"/react-naitve-elements-doc-image/docs/4.0.0-beta.0/main/usage/BottomSheet/snack/",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/usage/BottomSheet/snack/index.md",tags:[],version:"4.0.0-beta.0",frontMatter:{}},p={},c=[],d={toc:c};function u(e){var t=e.components,a=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"snack-player","data-snack-name":"RNE BottomSheet","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20BottomSheet%2C%20Button%2C%20ListItem%20%7D%20from%20'react-native-elements'%3B%0Aimport%20%7B%20StyleSheet%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20SafeAreaProvider%20%7D%20from%20'react-native-safe-area-context'%3B%0A%0Atype%20BottomSheetComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20BottomSheetComponent%3A%20React.FunctionComponent%3CBottomSheetComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BisVisible%2C%20setIsVisible%5D%20%3D%20useState(false)%3B%0A%20%20const%20list%20%3D%20%5B%0A%20%20%20%20%7B%20title%3A%20'List%20Item%201'%20%7D%2C%0A%20%20%20%20%7B%20title%3A%20'List%20Item%202'%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Cancel'%2C%0A%20%20%20%20%20%20containerStyle%3A%20%7B%20backgroundColor%3A%20'red'%20%7D%2C%0A%20%20%20%20%20%20titleStyle%3A%20%7B%20color%3A%20'white'%20%7D%2C%0A%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20setIsVisible(false)%2C%0A%20%20%20%20%7D%2C%0A%20%20%5D%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CSafeAreaProvider%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20title%3D%22Open%20Bottom%20Sheet%22%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setIsVisible(true)%7D%0A%20%20%20%20%20%20%20%20buttonStyle%3D%7Bstyles.button%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CBottomSheet%20modalProps%3D%7B%7B%7D%7D%20isVisible%3D%7BisVisible%7D%3E%0A%20%20%20%20%20%20%20%20%7Blist.map((l%2C%20i)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%3CListItem%0A%20%20%20%20%20%20%20%20%20%20%20%20key%3D%7Bi%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7Bl.containerStyle%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bl.onPress%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Title%20style%3D%7Bl.titleStyle%7D%3E%7Bl.title%7D%3C%2FListItem.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FListItem%3E%0A%20%20%20%20%20%20%20%20))%7D%0A%20%20%20%20%20%20%3C%2FBottomSheet%3E%0A%20%20%20%20%3C%2FSafeAreaProvider%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20button%3A%20%7B%0A%20%20%20%20margin%3A%2010%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20BottomSheetComponent%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}u.isMDXComponent=!0}}]);