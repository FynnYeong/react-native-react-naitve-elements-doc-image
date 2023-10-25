(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[69349],{86898:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(67294),o=n(13925),c=n(54236),l=n(40318),r=n(62290);const i=function(){var e=(0,l.Z)({componentName:"CheckBox",props:{center:{type:r.n.Boolean,value:!1,description:"Aligns checkbox to center (optional)"},right:{type:r.n.Boolean,value:!1,description:"Aligns checkbox to right (optional)"},checked:{type:r.n.Boolean,value:!1,stateful:!0,description:"Flag for checking the icon (required)"},checkedColor:{type:r.n.String,value:"#0F0",description:"Default checked color (optional)"},checkedIcon:{type:r.n.Object,value:"",description:"string OR React Native Component\t"},checkedTitle:{type:r.n.String,value:"Great!",description:"Specify a custom checked message (optional)"},Component:{type:r.n.ReactNode,value:null,description:"React Native Component"},containerStyle:{type:r.n.Object,value:'{width: "75%"}',description:"Style of main container (optional)"},fontFamily:{type:r.n.String,value:null,description:"Specify different font family"},iconRight:{type:r.n.Boolean,value:!1,description:"Moves icon to right of text (optional)"},iconType:{type:r.n.String,value:null,description:"type of icon set"},onIconPress:{type:r.n.Function,value:"() => setChecked(!checked)",propHook:{what:"!checked",into:"checked"},description:"onPress function for checkbox (required)"},onLongIconPress:{type:r.n.Function,value:'() => console.log("onLongIconPress()")',description:"onLongPress function for checkbox (optional)"},onLongPress:{type:r.n.Function,value:'() => console.log("onLongPress()")',description:"onLongPress function for checkbox (optional)"},onPress:{type:r.n.Function,value:'() => console.log("onPress()")',description:"onPress function for container (optional)"},size:{type:r.n.Number,value:30,description:"Size of the checkbox"},textStyle:{type:r.n.Object,value:"{}",description:"Style of text (optional)"},title:{type:r.n.Object,value:'"Check for Awesomeness"',description:"Title of checkbox"},titleProps:{type:r.n.Object,value:"{}",description:"Additional props for the title Text component (optional)"},uncheckedColor:{type:r.n.String,value:"#F00",description:"Default unchecked color (optional)"},uncheckedIcon:{type:r.n.Object,value:null,description:"string OR React Native Component"}},scope:{CheckBox:o.CheckBox},imports:{"@rneui/base":{named:["CheckBox"]}}});return a.createElement(a.Fragment,null,a.createElement(c.Z,{params:e}))}},37047:(e,t,n)=>{"use strict";n.d(t,{w:()=>i});var a=n(67294),o=n(35742),c=n(14330),l=n(98576),r=n(61720),i=function(){return a.createElement(o.Z,null,a.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+l.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+r.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+c.Z+") format('truetype');\n          }\n        "))}},54236:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var a=n(87462),o=n(67294),c=n(91262),l=n(18421),r=n(77356),i=n(41652),s=n(24309),d=n(16042),k=n(20346),p=n(30650);const m=function(e){var t=e.params,n=e.containerStyle,m=void 0===n?{}:n;return o.createElement(c.Z,{fallback:o.createElement(o.Fragment,null,"Loading...")},(function(){return o.createElement(k.X9.Provider,null,o.createElement(k.PK,{initialMetrics:p.o},o.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},m)},o.createElement(l.Z,(0,a.Z)({},t.compilerProps,{minHeight:62,placeholder:r.Z}))),o.createElement(i.Z,{msg:t.errorProps.msg,isPopup:!0}),o.createElement(s.Z,t.knobProps),o.createElement(i.Z,t.errorProps),o.createElement(d.E,t.actions)))}))}},22365:(e,t,n)=>{"use strict";n.d(t,{Z:()=>x});var a=n(63366),o=n(87462),c=n(67294),l=n(10407),r=n(86010),i=(n(95999),n(52263)),s=n(91262),d=n(66412);const k="playgroundContainer_TGbA",p="playgroundEditor_PvJ1",m="playgroundPreview_bb8I",u="toggleContainer_ZZiH",h="toggleIcon_OnrQ",g="showCode_O0Od";var C=n(72389),N=n(5434),f=["children","transformCode"];function v(){return c.createElement("div",null,"Loading...")}function y(e){var t=(0,C.Z)(),n=(0,c.useContext)(l.L2),a=n.code,r=n.language,i=n.theme,s=n.disabled,d=n.onChange;return c.createElement(l.uz,(0,o.Z)({key:String(t),code:a,language:r,theme:i,disabled:s,onChange:d},e,{className:p}))}function b(e){var t=e.showCode,n=e.preImports,a=void 0===n?"":n,o=(e.wrapper,c.useState(t)),i=o[0],d=o[1],k=function(){d((function(e){return!e}))};return c.createElement(c.Fragment,null,c.createElement("div",{className:m},c.createElement(s.Z,{fallback:c.createElement(v,null)},(function(){return c.createElement(c.Fragment,null,c.createElement(l.i5,null),c.createElement(l.IF,null),c.createElement("div",{className:u},c.createElement("div",{className:(0,r.Z)(h),onClick:k},c.createElement(N.xoN,null),c.createElement("span",{className:g},i?"Hide":"Show"," Code"))))}))),i&&c.createElement(y,{preImports:a,showCode:i}))}function x(e){var t=e.children,n=(e.transformCode,(0,a.Z)(e,f)),r=((0,i.Z)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,d.p)());return c.createElement("div",{className:k},c.createElement(l.nu,(0,o.Z)({code:t.replace(/\n$/,""),theme:r},n),c.createElement(b,{showCode:n.showCode})))}},56922:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(67294),o=n(32408),c=n(13925),l=n(53211),r=n(83279);const i=Object.assign({React:a,LinearGradient:r.Z},o,c,l,a)},90831:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>C,contentTitle:()=>h,default:()=>v,frontMatter:()=>u,metadata:()=>g,toc:()=>N});var a=n(87462),o=n(63366),c=(n(67294),n(3905)),l=n(37047),r=(n(74866),n(85162),n(96711)),i=n(47516),s=["components"],d={toc:[]};function k(e){var t=e.components,n=(0,o.Z)(e,s);return(0,c.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("div",{className:"snack-player","data-snack-name":"RNE CheckBox","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20CheckBox%2C%20Icon%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Atype%20CheckboxComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20CheckboxComponent%3A%20React.FunctionComponent%3CCheckboxComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Aconst%20%5Bcheck1%2C%20setCheck1%5D%20%3D%20useState(false)%3B%0Aconst%20%5Bcheck2%2C%20setCheck2%5D%20%3D%20useState(false)%3B%0Aconst%20%5Bcheck3%2C%20setCheck3%5D%20%3D%20useState(false)%3B%0Aconst%20%5Bcheck4%2C%20setCheck4%5D%20%3D%20useState(false)%3B%0A%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CCheckBox%0A%20%20%20%20%20%20center%0A%20%20%20%20%20%20title%3D%22Click%20Here%22%0A%20%20%20%20%20%20checked%3D%7Bcheck1%7D%0A%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setCheck1(!check1)%7D%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3CCheckBox%0A%20%20%20%20%20%20center%0A%20%20%20%20%20%20title%3D%22Click%20Here%22%0A%20%20%20%20%20%20checkedIcon%3D%22dot-circle-o%22%0A%20%20%20%20%20%20uncheckedIcon%3D%22circle-o%22%0A%20%20%20%20%20%20checked%3D%7Bcheck2%7D%0A%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setCheck2(!check2)%7D%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3CCheckBox%0A%20%20%20%20%20%20center%0A%20%20%20%20%20%20title%3D%7B%60Click%20Here%20to%20%24%7Bcheck3%20%3F%20'Remove'%20%3A%20'Add'%7D%20This%20Item%60%7D%0A%20%20%20%20%20%20iconRight%0A%20%20%20%20%20%20iconType%3D%22material%22%0A%20%20%20%20%20%20checkedIcon%3D%22clear%22%0A%20%20%20%20%20%20uncheckedIcon%3D%22add%22%0A%20%20%20%20%20%20checkedColor%3D%22red%22%0A%20%20%20%20%20%20checked%3D%7Bcheck3%7D%0A%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setCheck3(!check3)%7D%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3CCheckBox%0A%20%20%20%20%20%20center%0A%20%20%20%20%20%20checkedIcon%3D%7B%0A%20%20%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20%20%20name%3D%22radio-button-checked%22%0A%20%20%20%20%20%20%20%20%20%20type%3D%22material%22%0A%20%20%20%20%20%20%20%20%20%20color%3D%22green%22%0A%20%20%20%20%20%20%20%20%20%20size%3D%7B25%7D%0A%20%20%20%20%20%20%20%20%20%20iconStyle%3D%7B%7B%20marginRight%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20uncheckedIcon%3D%7B%0A%20%20%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20%20%20name%3D%22radio-button-unchecked%22%0A%20%20%20%20%20%20%20%20%20%20type%3D%22material%22%0A%20%20%20%20%20%20%20%20%20%20color%3D%22grey%22%0A%20%20%20%20%20%20%20%20%20%20size%3D%7B25%7D%0A%20%20%20%20%20%20%20%20%20%20iconStyle%3D%7B%7B%20marginRight%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20checked%3D%7Bcheck4%7D%0A%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setCheck4(!check4)%7D%0A%20%20%20%20%2F%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B%0A%0Aexport%20default%20CheckboxComponent%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}k.isMDXComponent=!0;var p=n(86898),m=["components"],u={id:"checkbox",title:"CheckBox"},h=void 0,g={unversionedId:"components/checkbox",id:"version-4.0.0-rc.8/components/checkbox",title:"CheckBox",description:"CheckBoxes allow users to complete tasks that involve making choices such as selecting options, or switching settings - On or Off. It provides a clear visual of either a true or false choice.",source:"@site/versioned_docs/version-4.0.0-rc.8/components/CheckBox.mdx",sourceDirName:"components",slug:"/components/checkbox",permalink:"/react-naitve-elements-doc-image/docs/components/checkbox",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.8/components/CheckBox.mdx",tags:[],version:"4.0.0-rc.8",frontMatter:{id:"checkbox",title:"CheckBox"},sidebar:"docs",previous:{title:"Card.Title",permalink:"/react-naitve-elements-doc-image/docs/components/card_title"},next:{title:"Chip",permalink:"/react-naitve-elements-doc-image/docs/components/chip"}},C={},N=[{value:"Usage",id:"usage",level:2},{value:"Simple",id:"simple",level:3},{value:"Label",id:"label",level:3},{value:"Radio",id:"radio",level:3},{value:"Size",id:"size",level:3},{value:"Custom icon",id:"custom-icon",level:3},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],f={toc:N};function v(e){var t=e.components,n=(0,o.Z)(e,m);return(0,c.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)(l.w,{mdxType:"IconsStyle"}),(0,c.kt)("p",null,"CheckBoxes allow users to complete tasks that involve making choices such as selecting options, or switching settings - On or Off. It provides a clear visual of either a true or false choice."),(0,c.kt)("h2",{id:"usage"},"Usage"),(0,c.kt)("div",{class:"row inline-flex-center"},(0,c.kt)("div",{class:"col col--3"},(0,c.kt)("h4",null,"Import")),(0,c.kt)("div",{class:"col col--9"},(0,c.kt)(r.Z,{mdxType:"CodeBlock"},"import { CheckBox } from '@rneui/themed';")),(0,c.kt)("div",{class:"col col--3"},(0,c.kt)("h4",null,"Theme Key"," ",(0,c.kt)("a",{href:"../customizing#using-themeprovider"},(0,c.kt)(i.Fs0,{mdxType:"BiInfoCircle"})))),(0,c.kt)("div",{class:"col col--9"},(0,c.kt)(r.Z,{mdxType:"CodeBlock"},"CheckBox"))),(0,c.kt)("h3",{id:"simple"},"Simple"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'function () {\n     const [checked, setChecked] = React.useState(true);\n     const toggleCheckbox = () => setChecked(!checked);\n     return (\n       <Stack row align="center" spacing={1}>\n         <CheckBox\n           checked={checked}\n           onPress={toggleCheckbox}\n           // Use ThemeProvider to make change for all checkbox\n           iconType="material-community"\n           checkedIcon="checkbox-marked"\n           uncheckedIcon="checkbox-blank-outline"\n           checkedColor="red"\n         />\n         <CheckBox\n           checked={checked}\n           onPress={toggleCheckbox}\n           iconType="material-community"\n           checkedIcon="checkbox-outline"\n           uncheckedIcon={\'checkbox-blank-outline\'}\n         />\n         <CheckBox\n           checked={false}\n           disabled\n           iconType="material-community"\n           checkedIcon="checkbox-outline"\n           uncheckedIcon={\'checkbox-blank-outline\'}\n         />\n       </Stack>\n     );\n   }\n')),(0,c.kt)("h3",{id:"label"},"Label"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'<Stack row align="center" spacing={4}>\n  <CheckBox checked title="Label" />\n  <CheckBox checked disabled title="Label" />\n</Stack>\n')),(0,c.kt)("h3",{id:"radio"},"Radio"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'function () {\n     const [selectedIndex, setIndex] = React.useState(0);\n\n     return (\n       <Stack row align="center" spacing={4}>\n         <CheckBox\n           checked={selectedIndex === 0}\n           onPress={() => setIndex(0)}\n           checkedIcon="dot-circle-o"\n           uncheckedIcon="circle-o"\n         />\n         <CheckBox\n           checked={selectedIndex === 1}\n           onPress={() => setIndex(1)}\n           checkedIcon="dot-circle-o"\n           uncheckedIcon="circle-o"\n         />\n       </Stack>\n     );\n   }\n')),(0,c.kt)("h3",{id:"size"},"Size"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'<Stack row align="center" spacing={4}>\n  <CheckBox checked size={18} />\n  <CheckBox checked size={24} />\n  <CheckBox checked size={32} />\n</Stack>\n')),(0,c.kt)("h3",{id:"custom-icon"},"Custom icon"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'function () {\n     const [checked, setState] = React.useState(true);\n     const toggleCheckbox = () => setState(!checked);\n     return (\n       <Stack row align="center">\n         <CheckBox\n           checked={checked}\n           checkedIcon="heart"\n           uncheckedIcon="heart-o"\n           checkedColor="red"\n           onPress={toggleCheckbox}\n         />\n         <CheckBox\n           checked={checked}\n           checkedIcon="bookmark"\n           uncheckedIcon="bookmark-o"\n           checkedColor="heart"\n           onPress={toggleCheckbox}\n         />\n       </Stack>\n     );\n   }\n')),(0,c.kt)(k,{mdxType:"Usage"}),(0,c.kt)("h2",{id:"props"},"Props"),(0,c.kt)("admonition",{type:"note"},(0,c.kt)("p",{parentName:"admonition"},"Includes all ",(0,c.kt)("a",{parentName:"p",href:"checkboxicon#props"},"CheckBoxIcon"),", ",(0,c.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props.")),(0,c.kt)("div",{class:"table-responsive"},(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:null},"Name"),(0,c.kt)("th",{parentName:"tr",align:null},"Type"),(0,c.kt)("th",{parentName:"tr",align:null},"Default"),(0,c.kt)("th",{parentName:"tr",align:null},"Description"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"Component")),(0,c.kt)("td",{parentName:"tr",align:null},"React Component"),(0,c.kt)("td",{parentName:"tr",align:null}),(0,c.kt)("td",{parentName:"tr",align:null},"Specify React Native component for main button.")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"center")),(0,c.kt)("td",{parentName:"tr",align:null},"boolean"),(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"false")),(0,c.kt)("td",{parentName:"tr",align:null},"Aligns checkbox to center.")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"checkedTitle")),(0,c.kt)("td",{parentName:"tr",align:null},"string"),(0,c.kt)("td",{parentName:"tr",align:null}),(0,c.kt)("td",{parentName:"tr",align:null},"Specify a custom checked message.")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"containerStyle")),(0,c.kt)("td",{parentName:"tr",align:null},"View Style"),(0,c.kt)("td",{parentName:"tr",align:null}),(0,c.kt)("td",{parentName:"tr",align:null},"Style of main container.")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"disabled")),(0,c.kt)("td",{parentName:"tr",align:null},"boolean"),(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"false")),(0,c.kt)("td",{parentName:"tr",align:null},"Disables user interaction.")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"disabledStyle")),(0,c.kt)("td",{parentName:"tr",align:null},"View Style"),(0,c.kt)("td",{parentName:"tr",align:null}),(0,c.kt)("td",{parentName:"tr",align:null},"Style of the checkbox container when disabled.")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"disabledTitleStyle")),(0,c.kt)("td",{parentName:"tr",align:null},"Text Style"),(0,c.kt)("td",{parentName:"tr",align:null}),(0,c.kt)("td",{parentName:"tr",align:null},"Style of the title when disabled.")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"fontFamily")),(0,c.kt)("td",{parentName:"tr",align:null},"string"),(0,c.kt)("td",{parentName:"tr",align:null}),(0,c.kt)("td",{parentName:"tr",align:null},"Specify different font family.")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"iconRight")),(0,c.kt)("td",{parentName:"tr",align:null},"boolean"),(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"false")),(0,c.kt)("td",{parentName:"tr",align:null},"Moves icon to right of text.")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"right")),(0,c.kt)("td",{parentName:"tr",align:null},"boolean"),(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"false")),(0,c.kt)("td",{parentName:"tr",align:null},"Aligns checkbox to right.")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"textStyle")),(0,c.kt)("td",{parentName:"tr",align:null},"Text Style"),(0,c.kt)("td",{parentName:"tr",align:null}),(0,c.kt)("td",{parentName:"tr",align:null},"Style of text.")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"title")),(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,c.kt)("inlineCode",{parentName:"td"},"ReactElement<{}, string")," ","|"," ",(0,c.kt)("inlineCode",{parentName:"td"},"JSXElementConstructor<any>>")),(0,c.kt)("td",{parentName:"tr",align:null}),(0,c.kt)("td",{parentName:"tr",align:null},"Title of checkbox.")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"titleProps")),(0,c.kt)("td",{parentName:"tr",align:null},"TextProps"),(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"{}")),(0,c.kt)("td",{parentName:"tr",align:null},"Additional props for the title Text component.")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"wrapperStyle")),(0,c.kt)("td",{parentName:"tr",align:null},"View Style"),(0,c.kt)("td",{parentName:"tr",align:null}),(0,c.kt)("td",{parentName:"tr",align:null},"Style for the wrapper of checkbox."))))),(0,c.kt)("h2",{id:"playground"},"Playground"),(0,c.kt)(p.Z,{mdxType:"Play"}))}v.isMDXComponent=!0},33770:()=>{},72950:()=>{},54882:()=>{}}]);