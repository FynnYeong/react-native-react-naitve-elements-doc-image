"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[63811],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),k=p(n),u=l,m=k["".concat(d,".").concat(u)]||k[u]||s[u]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},31239:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>d,metadata:()=>c,toc:()=>k});var a=n(87462),l=n(63366),r=(n(67294),n(3905)),i=n(44996),o=["components"],d={id:"button_group",title:"ButtonGroup"},p=void 0,c={unversionedId:"button_group",id:"version-2.3.2/button_group",title:"ButtonGroup",description:"ButtonGroup is a linear set of segments, each of which function as a button that",source:"@site/versioned_docs/version-2.3.2/button_group.md",sourceDirName:".",slug:"/button_group",permalink:"/react-naitve-elements-doc-image/docs/2.3.2/button_group",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-2.3.2/button_group.md",tags:[],version:"2.3.2",frontMatter:{id:"button_group",title:"ButtonGroup"},sidebar:"version-2.3.2/docs",previous:{title:"Button",permalink:"/react-naitve-elements-doc-image/docs/2.3.2/button"},next:{title:"Card",permalink:"/react-naitve-elements-doc-image/docs/2.3.2/card"}},s={},k=[{value:"Usage",id:"usage",level:2},{value:"Using strings",id:"using-strings",level:3},{value:"Using components",id:"using-components",level:3},{value:"Props",id:"props",level:2},{value:"Reference",id:"reference",level:2},{value:"<code>buttonStyle</code>",id:"buttonstyle",level:3},{value:"<code>buttonContainerStyle</code>",id:"buttoncontainerstyle",level:3},{value:"<code>buttons</code>",id:"buttons",level:3},{value:"<code>Component</code>",id:"component",level:3},{value:"<code>containerStyle</code>",id:"containerstyle",level:3},{value:"<code>disabled</code>",id:"disabled",level:3},{value:"<code>disabledStyle</code>",id:"disabledstyle",level:3},{value:"<code>disabledTextStyle</code>",id:"disabledtextstyle",level:3},{value:"<code>disabledSelectedStyle</code>",id:"disabledselectedstyle",level:3},{value:"<code>disabledSelectedTextStyle</code>",id:"disabledselectedtextstyle",level:3},{value:"<code>innerBorderStyle</code>",id:"innerborderstyle",level:3},{value:"<code>onPress</code>",id:"onpress",level:3},{value:"<code>selectMultiple</code>",id:"selectmultiple",level:3},{value:"<code>selectedButtonStyle</code>",id:"selectedbuttonstyle",level:3},{value:"<code>selectedIndex</code>",id:"selectedindex",level:3},{value:"<code>selectedIndexes</code>",id:"selectedindexes",level:3},{value:"<code>selectedTextStyle</code>",id:"selectedtextstyle",level:3},{value:"<code>textStyle</code>",id:"textstyle",level:3},{value:"<code>underlayColor</code>",id:"underlaycolor",level:3},{value:"<code>vertical</code>",id:"vertical",level:3}],u={toc:k};function m(e){var t=e.components,n=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ButtonGroup is a linear set of segments, each of which function as a button that\ncan display a different view. Use a ButtonGroup to offer choices that are\nclosely related but mutually exclusive."),(0,r.kt)("img",{alt:"ButtonGroup",src:(0,i.Z)("img/button_group.png")}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"using-strings"},"Using strings"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"constructor () {\n  super()\n  this.state = {\n    selectedIndex: 2\n  }\n  this.updateIndex = this.updateIndex.bind(this)\n}\n\nupdateIndex (selectedIndex) {\n  this.setState({selectedIndex})\n}\n\nrender () {\n  const buttons = ['Hello', 'World', 'Buttons']\n  const { selectedIndex } = this.state\n\n  return (\n    <ButtonGroup\n      onPress={this.updateIndex}\n      selectedIndex={selectedIndex}\n      buttons={buttons}\n      containerStyle={{height: 100}}\n    />\n  )\n}\n")),(0,r.kt)("h3",{id:"using-components"},"Using components"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"constructor () {\n  super()\n  this.state = {\n    selectedIndex: 2\n  }\n  this.updateIndex = this.updateIndex.bind(this)\n}\nupdateIndex (selectedIndex) {\n  this.setState({selectedIndex})\n}\n\nconst component1 = () => <Text>Hello</Text>\nconst component2 = () => <Text>World</Text>\nconst component3 = () => <Text>ButtonGroup</Text>\n\nrender () {\n  const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }]\n  const { selectedIndex } = this.state\n  return (\n    <ButtonGroup\n      onPress={this.updateIndex}\n      selectedIndex={selectedIndex}\n      buttons={buttons}\n      containerStyle={{height: 100}} />\n  )\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This component inherits\n",(0,r.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/touchablehighlight.html"},"all native TouchableHighlight and TouchableOpacity props that come with React Native TouchableHighlight or TouchableOpacity elements"),",\nalong with the following:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#buttonstyle"},(0,r.kt)("inlineCode",{parentName:"a"},"buttonStyle"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#buttoncontainerstyle"},(0,r.kt)("inlineCode",{parentName:"a"},"buttonContainerStyle"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#buttons"},(0,r.kt)("inlineCode",{parentName:"a"},"buttons"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Component"},(0,r.kt)("inlineCode",{parentName:"a"},"Component"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#containerstyle"},(0,r.kt)("inlineCode",{parentName:"a"},"containerStyle"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#disabled"},(0,r.kt)("inlineCode",{parentName:"a"},"disabled"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#disabledstyle"},(0,r.kt)("inlineCode",{parentName:"a"},"disabledStyle"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#disabledtextstyle"},(0,r.kt)("inlineCode",{parentName:"a"},"disabledTextStyle"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#disabledselectedstyle"},(0,r.kt)("inlineCode",{parentName:"a"},"disabledSelectedStyle"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#disabledselectedtextstyle"},(0,r.kt)("inlineCode",{parentName:"a"},"disabledSelectedTextStyle"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#innerborderstyle"},(0,r.kt)("inlineCode",{parentName:"a"},"innerBorderStyle"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onpress"},(0,r.kt)("inlineCode",{parentName:"a"},"onPress"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#selectmultiple"},(0,r.kt)("inlineCode",{parentName:"a"},"selectMultiple"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#selectedbuttonstyle"},(0,r.kt)("inlineCode",{parentName:"a"},"selectedButtonStyle"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#selectedindex"},(0,r.kt)("inlineCode",{parentName:"a"},"selectedIndex"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#selectedindexes"},(0,r.kt)("inlineCode",{parentName:"a"},"selectedIndexes"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#selectedtextstyle"},(0,r.kt)("inlineCode",{parentName:"a"},"selectedTextStyle"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#textstyle"},(0,r.kt)("inlineCode",{parentName:"a"},"textStyle"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#underlaycolor"},(0,r.kt)("inlineCode",{parentName:"a"},"underlayColor"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#vertical"},(0,r.kt)("inlineCode",{parentName:"a"},"vertical")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("h3",{id:"buttonstyle"},(0,r.kt)("inlineCode",{parentName:"h3"},"buttonStyle")),(0,r.kt)("p",null,"specify styling for button (optional)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"inherited styling")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"buttoncontainerstyle"},(0,r.kt)("inlineCode",{parentName:"h3"},"buttonContainerStyle")),(0,r.kt)("p",null,"specify styling for button containers (optional)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"inherited styling")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"buttons"},(0,r.kt)("inlineCode",{parentName:"h3"},"buttons")),(0,r.kt)("p",null,"array of buttons for component (required), if returning a component, must be an\nobject with { element: componentName }"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"array"),(0,r.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"component"},(0,r.kt)("inlineCode",{parentName:"h3"},"Component")),(0,r.kt)("p",null,"Choose other button component such as TouchableOpacity (optional)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"React Native Component"),(0,r.kt)("td",{parentName:"tr",align:"center"},"TouchableHighlight")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"containerstyle"},(0,r.kt)("inlineCode",{parentName:"h3"},"containerStyle")),(0,r.kt)("p",null,"specify styling for main button container (optional)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"inherited styling")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"disabled"},(0,r.kt)("inlineCode",{parentName:"h3"},"disabled")),(0,r.kt)("p",null,"Controls if buttons are disabled. Setting ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," makes all of them disabled,\nwhile using an array only makes those indices disabled."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"boolean ",(0,r.kt)("strong",{parentName:"td"},"OR")," number[]"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"disabledstyle"},(0,r.kt)("inlineCode",{parentName:"h3"},"disabledStyle")),(0,r.kt)("p",null,"Styling for each button when disabled."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"View style (object)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Internal Style")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"disabledtextstyle"},(0,r.kt)("inlineCode",{parentName:"h3"},"disabledTextStyle")),(0,r.kt)("p",null,"Styling for the text of each button when disabled."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Text style (object)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Internal Style")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"disabledselectedstyle"},(0,r.kt)("inlineCode",{parentName:"h3"},"disabledSelectedStyle")),(0,r.kt)("p",null,"Styling for each selected button when disabled."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"View style (object)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Internal Style")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"disabledselectedtextstyle"},(0,r.kt)("inlineCode",{parentName:"h3"},"disabledSelectedTextStyle")),(0,r.kt)("p",null,"Styling for the text of each selected button when disabled."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Text style (object)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Internal Style")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"innerborderstyle"},(0,r.kt)("inlineCode",{parentName:"h3"},"innerBorderStyle")),(0,r.kt)("p",null,"update the styling of the interior border of the list of buttons (optional)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"object { width, color }"),(0,r.kt)("td",{parentName:"tr",align:"center"},"inherited styling")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"onpress"},(0,r.kt)("inlineCode",{parentName:"h3"},"onPress")),(0,r.kt)("p",null,"method to update Button Group Index (required)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"function"),(0,r.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"selectmultiple"},(0,r.kt)("inlineCode",{parentName:"h3"},"selectMultiple")),(0,r.kt)("p",null,"allows the user to select multiple buttons"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"selectedbuttonstyle"},(0,r.kt)("inlineCode",{parentName:"h3"},"selectedButtonStyle")),(0,r.kt)("p",null,"specify styling for selected button (optional)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"inherited styling")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"selectedindex"},(0,r.kt)("inlineCode",{parentName:"h3"},"selectedIndex")),(0,r.kt)("p",null,"current selected index of array of buttons (required)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"selectedindexes"},(0,r.kt)("inlineCode",{parentName:"h3"},"selectedIndexes")),(0,r.kt)("p",null,"current selected indexes from the array of buttons"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"array (number)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"[]")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"selectedtextstyle"},(0,r.kt)("inlineCode",{parentName:"h3"},"selectedTextStyle")),(0,r.kt)("p",null,"specify specific styling for text in the selected state (optional)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"inherited styling")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"textstyle"},(0,r.kt)("inlineCode",{parentName:"h3"},"textStyle")),(0,r.kt)("p",null,"specify specific styling for text (optional)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"inherited styling")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"underlaycolor"},(0,r.kt)("inlineCode",{parentName:"h3"},"underlayColor")),(0,r.kt)("p",null,"specify underlayColor for TouchableHighlight (optional)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"white")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"vertical"},(0,r.kt)("inlineCode",{parentName:"h3"},"vertical")),(0,r.kt)("p",null,"Display the ButtonGroup vertically"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")))))}m.isMDXComponent=!0}}]);