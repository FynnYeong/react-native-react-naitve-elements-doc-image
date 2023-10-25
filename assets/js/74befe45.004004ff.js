"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[78534,6763],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(r),u=a,v=m["".concat(c,".").concat(u)]||m[u]||p[u]||i;return r?n.createElement(v,o(o({ref:t},s),{},{components:r})):n.createElement(v,o({ref:t},s))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},87689:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>k,frontMatter:()=>d,metadata:()=>p,toc:()=>u});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=r(44996),l=r(86450),c=["components"],d={id:"card",title:"Card"},s=void 0,p={unversionedId:"card",id:"version-3.4.2/card",title:"Card",description:"Cards are a great way to display information, usually containing content and",source:"@site/versioned_docs/version-3.4.2/card.md",sourceDirName:".",slug:"/card",permalink:"/react-naitve-elements-doc-image/docs/3.4.2/card",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-3.4.2/card.md",tags:[],version:"3.4.2",frontMatter:{id:"card",title:"Card"},sidebar:"version-3.4.2/docs",previous:{title:"ButtonGroup",permalink:"/react-naitve-elements-doc-image/docs/3.4.2/button_group"},next:{title:"CheckBox",permalink:"/react-naitve-elements-doc-image/docs/3.4.2/checkbox"}},m={},u=[{value:"Usage",id:"usage",level:2}],v={toc:u};function k(e){var t=e.components,r=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Cards are a great way to display information, usually containing content and\nactions about a single subject. Cards can contain images, buttons, text and\nmore."),(0,i.kt)("img",{alt:"Card Component",src:(0,o.Z)("img/card.png")}),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const users = [\n {\n    name: 'brynn',\n    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'\n },\n ... // more users here\n]\n\nimport { View, Text, Image } from 'react-native'\nimport { Card, ListItem, Button, Icon } from 'react-native-elements'\n\n// implemented without image with header\n<Card>\n  <Card.Title>CARD WITH DIVIDER</Card.Title>\n  <Card.Divider/>\n  {\n    users.map((u, i) => {\n      return (\n        <View key={i} style={styles.user}>\n          <Image\n            style={styles.image}\n            resizeMode=\"cover\"\n            source={{ uri: u.avatar }}\n          />\n          <Text style={styles.name}>{u.name}</Text>\n        </View>\n      );\n    })\n  }\n</Card>\n\n// implemented without image without header, using ListItem component\n <Card containerStyle={{padding: 0}} >\n  {\n    users.map((u, i) => <ListItem key={i} />)\n  }\n</Card>\n\n\n// implemented with Text and Button as children\n<Card>\n  <Card.Title>HELLO WORLD</Card.Title>\n  <Card.Divider/>\n  <Card.Image source={require('../images/pic2.jpg')}>\n    <Text style={{marginBottom: 10}}>\n      The idea with React Native Elements is more about component structure than actual design.\n    </Text>\n    <Button\n      icon={<Icon name='code' color='#ffffff' />}\n      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}\n      title='VIEW NOW' />\n  </Card.Image>\n</Card>\n")),(0,i.kt)("hr",null),(0,i.kt)(l.default,{mdxType:"Props"}),(0,i.kt)("hr",null))}k.isMDXComponent=!0},86450:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],l={},c=void 0,d={unversionedId:"props/card",id:"version-3.4.2/props/card",title:"card",description:"Props",source:"@site/versioned_docs/version-3.4.2/props/card.md",sourceDirName:"props",slug:"/props/card",permalink:"/react-naitve-elements-doc-image/docs/3.4.2/props/card",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-3.4.2/props/card.md",tags:[],version:"3.4.2",frontMatter:{}},s={},p=[{value:"Props",id:"props",level:2},{value:"Child Components",id:"child-components",level:2},{value:"Card.Divider",id:"carddivider",level:3},{value:"Card.Title",id:"cardtitle",level:3},{value:"Card.Image",id:"cardimage",level:3},{value:"Card.FeaturedTitle",id:"cardfeaturedtitle",level:3},{value:"Card.FeaturedSubtitle",id:"cardfeaturedsubtitle",level:3},{value:"Reference",id:"reference",level:2},{value:"<code>containerStyle</code>",id:"containerstyle",level:3},{value:"<code>wrapperStyle</code>",id:"wrapperstyle",level:3}],m={toc:p};function u(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"props"},"Props"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#containerstyle"},(0,i.kt)("inlineCode",{parentName:"a"},"containerStyle"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#wrapperstyle"},(0,i.kt)("inlineCode",{parentName:"a"},"wrapperStyle")))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"child-components"},"Child Components"),(0,i.kt)("h3",{id:"carddivider"},"Card.Divider"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Receives all ",(0,i.kt)("a",{parentName:"p",href:"/react-naitve-elements-doc-image/docs/3.4.2/divider#props"},"Divider")," props.")),(0,i.kt)("h3",{id:"cardtitle"},"Card.Title"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Receives all ",(0,i.kt)("a",{parentName:"p",href:"/react-naitve-elements-doc-image/docs/3.4.2/text#props"},"Text")," props.")),(0,i.kt)("h3",{id:"cardimage"},"Card.Image"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Receives all ",(0,i.kt)("a",{parentName:"p",href:"/react-naitve-elements-doc-image/docs/3.4.2/image#props"},"Image")," props.")),(0,i.kt)("h3",{id:"cardfeaturedtitle"},"Card.FeaturedTitle"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Receives all ",(0,i.kt)("a",{parentName:"p",href:"/react-naitve-elements-doc-image/docs/3.4.2/text#props"},"Text")," props.")),(0,i.kt)("h3",{id:"cardfeaturedsubtitle"},"Card.FeaturedSubtitle"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Receives all ",(0,i.kt)("a",{parentName:"p",href:"/react-naitve-elements-doc-image/docs/3.4.2/text#props"},"Text")," props.")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("h3",{id:"containerstyle"},(0,i.kt)("inlineCode",{parentName:"h3"},"containerStyle")),(0,i.kt)("p",null,"outer container style (optional)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"wrapperstyle"},(0,i.kt)("inlineCode",{parentName:"h3"},"wrapperStyle")),(0,i.kt)("p",null,"inner container style (optional)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"none")))))}u.isMDXComponent=!0}}]);