"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[31129],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=p(a),u=r,s=k["".concat(d,".").concat(u)]||k[u]||c[u]||l;return a?n.createElement(s,i(i({ref:t},m),{},{components:a})):n.createElement(s,i({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},36227:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={id:"badge",title:"Badge"},d=void 0,p={unversionedId:"badge",id:"version-1.2.0/badge",title:"Badge",description:"Badges are small components typically used to communicate a numerical value or",source:"@site/versioned_docs/version-1.2.0/badge.md",sourceDirName:".",slug:"/badge",permalink:"/react-naitve-elements-doc-image/docs/1.2.0/badge",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-1.2.0/badge.md",tags:[],version:"1.2.0",frontMatter:{id:"badge",title:"Badge"},sidebar:"version-1.2.0/docs",previous:{title:"Avatar",permalink:"/react-naitve-elements-doc-image/docs/1.2.0/avatar"},next:{title:"Button",permalink:"/react-naitve-elements-doc-image/docs/1.2.0/button"}},m={},c=[{value:"Mini Badge",id:"mini-badge",level:3},{value:"withBadge Higher-Order Component",id:"withbadge-higher-order-component",level:3},{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Reference",id:"reference",level:2},{value:"<code>badgeStyle</code>",id:"badgestyle",level:3},{value:"<code>containerStyle</code>",id:"containerstyle",level:3},{value:"<code>onPress</code>",id:"onpress",level:3},{value:"<code>status</code>",id:"status",level:3},{value:"<code>textStyle</code>",id:"textstyle",level:3},{value:"<code>value</code>",id:"value",level:3},{value:"<code>Component</code>",id:"component",level:3},{value:"Props for withBadge",id:"props-for-withbadge",level:2},{value:"Reference for withBadge",id:"reference-for-withbadge",level:2},{value:"<code>value</code>",id:"value-1",level:3},{value:"<code>options</code>",id:"options",level:3},{value:"<code>bottom</code>",id:"bottom",level:4},{value:"<code>left</code>",id:"left",level:4},{value:"<code>right</code>",id:"right",level:4},{value:"<code>top</code>",id:"top",level:4},{value:"<code>hidden</code>",id:"hidden",level:4},{value:"<code>containerStyle</code>",id:"containerstyle-1",level:4}],k={toc:c};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Badges are small components typically used to communicate a numerical value or\nindicate the status of an item to the user."),(0,l.kt)("div",{class:"component-preview"},(0,l.kt)("figure",null,(0,l.kt)("img",{src:"/img/badge/badge--standard.jpg",alt:"Standard"}),(0,l.kt)("figcaption",null,"Standard")),(0,l.kt)("figure",null,(0,l.kt)("img",{src:"/img/badge/badge--mini.jpg",alt:"Mini Badge"}),(0,l.kt)("figcaption",null,"Mini Badge")),(0,l.kt)("figure",null,(0,l.kt)("img",{src:"/img/badge/badge--indicator.jpg",alt:"Badge as Indicator"}),(0,l.kt)("figcaption",null,"Badge as Indicator"))),(0,l.kt)("h3",{id:"mini-badge"},"Mini Badge"),(0,l.kt)("p",null,"This type of badge shows when no ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," prop is provided. This form is\neffective for showing statuses."),(0,l.kt)("h3",{id:"withbadge-higher-order-component"},"withBadge Higher-Order Component"),(0,l.kt)("p",null,"The withBadge HOC allows you to easily add badges to icons and other components."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'import { Text, View } from \'react-native\'\nimport { Avatar, Badge, Icon, withBadge } from \'react-native-elements\'\n\n// Standard badge\n<Badge value="99+" status="error" />\n<Badge value={<Text>My Custom Badge</Text>} />\n\n// Mini badge\n<Badge status="success" />\n<Badge status="error" />\n<Badge status="primary" />\n<Badge status="warning" />\n\n// Avatar with mini badge\n<View>\n  <Avatar\n    rounded\n    source={{\n      uri: \'https://randomuser.me/api/portraits/men/41.jpg\',\n    }}\n    size="large"\n  />\n\n  <Badge\n    status="success"\n    containerStyle={{ position: \'absolute\', top: -4, right: -4 }}\n  />\n</View>\n\n// withBadge HOC\n\nconst BadgedIcon = withBadge(1)(Icon)\n<BadgedIcon type="ionicon" name="ios-chatbubbles" />\n\n// Using the decorator proposal\n@connect(state => ({\n  notifications: state.notifications,\n}))\n@withBadge(props => props.notifications.length)\nexport default class MyDecoratedIcon extends React.Component {\n  render() {\n    return (\n      <Icon type="ionicon" name="md-cart" />\n    );\n  }\n}\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#badgestyle"},(0,l.kt)("inlineCode",{parentName:"a"},"badgeStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#containerstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"containerStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onpress"},(0,l.kt)("inlineCode",{parentName:"a"},"onPress"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#status"},(0,l.kt)("inlineCode",{parentName:"a"},"status"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#textstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"textStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#value"},(0,l.kt)("inlineCode",{parentName:"a"},"value"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Component"},(0,l.kt)("inlineCode",{parentName:"a"},"Component")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("h3",{id:"badgestyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"badgeStyle")),(0,l.kt)("p",null,"Additional styling for badge (background) view component (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"View style (object)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Internal Style")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"containerstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"containerStyle")),(0,l.kt)("p",null,"Style for the container (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"View style (object)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Internal Style")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"onpress"},(0,l.kt)("inlineCode",{parentName:"h3"},"onPress")),(0,l.kt)("p",null,"Function called when pressed on the badge"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"function"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"status"},(0,l.kt)("inlineCode",{parentName:"h3"},"status")),(0,l.kt)("p",null,"Determines color of the indicator"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"primary"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"success"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"warning"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"error")),(0,l.kt)("td",{parentName:"tr",align:"center"},"primary")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"textstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"textStyle")),(0,l.kt)("p",null,"Extra styling for icon component (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Text style (object)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Internal Style")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"value"},(0,l.kt)("inlineCode",{parentName:"h3"},"value")),(0,l.kt)("p",null,"Text value to be displayed by badge, defaults to empty"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"String OR Number OR React Native Component"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"component"},(0,l.kt)("inlineCode",{parentName:"h3"},"Component")),(0,l.kt)("p",null,"Custom component to replace the badge outer component"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"React Native Component"),(0,l.kt)("td",{parentName:"tr",align:"center"},"View, if ",(0,l.kt)("inlineCode",{parentName:"td"},"onPress")," then ",(0,l.kt)("inlineCode",{parentName:"td"},"TouchableOpacity"))))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"props-for-withbadge"},"Props for withBadge"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#value"},(0,l.kt)("inlineCode",{parentName:"a"},"value"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#options"},(0,l.kt)("inlineCode",{parentName:"a"},"options")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"reference-for-withbadge"},"Reference for withBadge"),(0,l.kt)("h3",{id:"value-1"},(0,l.kt)("inlineCode",{parentName:"h3"},"value")),(0,l.kt)("p",null,"Text value to be displayed by badge, defaults to empty"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"String OR Number OR React Native Component OR Function, which returns one of the former"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"options"},(0,l.kt)("inlineCode",{parentName:"h3"},"options")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Also receives all\n",(0,l.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/badge#props"},"Badge")," props.")),(0,l.kt)("p",null,"Object with the following (optional) keys:"),(0,l.kt)("h4",{id:"bottom"},(0,l.kt)("inlineCode",{parentName:"h4"},"bottom")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"number (optional)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"undefined")))),(0,l.kt)("h4",{id:"left"},(0,l.kt)("inlineCode",{parentName:"h4"},"left")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"number (optional)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"undefined")))),(0,l.kt)("h4",{id:"right"},(0,l.kt)("inlineCode",{parentName:"h4"},"right")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"number (optional)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-16 (-3 with MiniBadge aka. without ",(0,l.kt)("inlineCode",{parentName:"td"},"value"),")")))),(0,l.kt)("h4",{id:"top"},(0,l.kt)("inlineCode",{parentName:"h4"},"top")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"number (optional)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-1 (3 with MiniBadge)")))),(0,l.kt)("h4",{id:"hidden"},(0,l.kt)("inlineCode",{parentName:"h4"},"hidden")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean (optional)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,l.kt)("h4",{id:"containerstyle-1"},(0,l.kt)("inlineCode",{parentName:"h4"},"containerStyle")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"View style (object)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Internal Style")))),(0,l.kt)("hr",null))}u.isMDXComponent=!0}}]);