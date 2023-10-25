(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[84220],{85489:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(67294),a=n(13925),o=n(54236),i=n(40318),s=n(62290);const l=function(){var e=(0,i.Z)({componentName:"LinearProgress",props:{value:{type:s.n.Number,value:0},variant:{type:s.n.Enum,options:{determinate:"determinate",indeterminate:"indeterminate"},value:"indeterminate"},style:{type:s.n.Object,value:'{width: "90%"}'},color:{type:s.n.String,value:"secondary"},trackColor:{type:s.n.String,value:""}},scope:{LinearProgress:a.LinearProgress},imports:{"@rneui/base":{named:["LinearProgress"]}}});return r.createElement(r.Fragment,null,r.createElement(o.Z,{params:e}))}},37047:(e,t,n)=>{"use strict";n.d(t,{w:()=>l});var r=n(67294),a=n(35742),o=n(14330),i=n(98576),s=n(61720),l=function(){return r.createElement(a.Z,null,r.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+i.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+s.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+o.Z+") format('truetype');\n          }\n        "))}},54236:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(87462),a=n(67294),o=n(91262),i=n(18421),s=n(77356),l=n(41652),d=n(24309),m=n(16042),c=n(20346),p=n(30650);const u=function(e){var t=e.params,n=e.containerStyle,u=void 0===n?{}:n;return a.createElement(o.Z,{fallback:a.createElement(a.Fragment,null,"Loading...")},(function(){return a.createElement(c.X9.Provider,null,a.createElement(c.PK,{initialMetrics:p.o},a.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},u)},a.createElement(i.Z,(0,r.Z)({},t.compilerProps,{minHeight:62,placeholder:s.Z}))),a.createElement(l.Z,{msg:t.errorProps.msg,isPopup:!0}),a.createElement(d.Z,t.knobProps),a.createElement(l.Z,t.errorProps),a.createElement(m.E,t.actions)))}))}},22365:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(63366),a=n(87462),o=n(67294),i=n(10407),s=n(86010),l=(n(95999),n(52263)),d=n(91262),m=n(66412);const c="playgroundContainer_TGbA",p="playgroundEditor_PvJ1",u="playgroundPreview_bb8I",g="toggleContainer_ZZiH",k="toggleIcon_OnrQ",v="showCode_O0Od";var f=n(72389),A=n(5434),D=["children","transformCode"];function N(){return o.createElement("div",null,"Loading...")}function y(e){var t=(0,f.Z)(),n=(0,o.useContext)(i.L2),r=n.code,s=n.language,l=n.theme,d=n.disabled,m=n.onChange;return o.createElement(i.uz,(0,a.Z)({key:String(t),code:r,language:s,theme:l,disabled:d,onChange:m},e,{className:p}))}function C(e){var t=e.showCode,n=e.preImports,r=void 0===n?"":n,a=(e.wrapper,o.useState(t)),l=a[0],m=a[1],c=function(){m((function(e){return!e}))};return o.createElement(o.Fragment,null,o.createElement("div",{className:u},o.createElement(d.Z,{fallback:o.createElement(N,null)},(function(){return o.createElement(o.Fragment,null,o.createElement(i.i5,null),o.createElement(i.IF,null),o.createElement("div",{className:g},o.createElement("div",{className:(0,s.Z)(k),onClick:c},o.createElement(A.xoN,null),o.createElement("span",{className:v},l?"Hide":"Show"," Code"))))}))),l&&o.createElement(y,{preImports:r,showCode:l}))}function h(e){var t=e.children,n=(e.transformCode,(0,r.Z)(e,D)),s=((0,l.Z)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,m.p)());return o.createElement("div",{className:c},o.createElement(i.nu,(0,a.Z)({code:t.replace(/\n$/,""),theme:s},n),o.createElement(C,{showCode:n.showCode})))}},56922:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(67294),a=n(32408),o=n(13925),i=n(53211),s=n(83279);const l=Object.assign({React:r,LinearGradient:s.Z},a,o,i,r)},51243:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>k,default:()=>N,frontMatter:()=>g,metadata:()=>v,toc:()=>A});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(37047),s=(n(74866),n(85162),n(96711)),l=n(47516),d=["components"],m={toc:[]};function c(e){var t=e.components,n=(0,a.Z)(e,d);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"snack-player","data-snack-name":"RNE Linear Progress","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20Text%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Button%2C%20LinearProgress%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Aconst%20LinearProgressAPI%3A%20React.FunctionComponent%20%3D%20()%20%3D%3E%20%7B%0Aconst%20%5Bprogress%2C%20setProgress%5D%20%3D%20React.useState(0)%3B%0A%0AReact.useEffect(()%20%3D%3E%20%7B%0A%20%20let%20subs%20%3D%20true%3B%0A%20%20if%20(progress%20%3C%201%20%26%26%20progress%20!%3D%3D%200)%20%7B%0A%20%20%20%20setTimeout(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20if%20(subs)%20%7B%0A%20%20%20%20%20%20%20%20setProgress(progress%20%2B%200.1)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%20100)%3B%0A%20%20%7D%0A%20%20return%20()%20%3D%3E%20%7B%0A%20%20%20%20subs%20%3D%20false%3B%0A%20%20%7D%3B%0A%7D%2C%20%5Bprogress%5D)%3B%0A%0Areturn%20(%0A%20%20%3CView%3E%0A%20%20%20%20%3CView%0A%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20margin%3A%2010%2C%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CText%3EIndeterminate%20Variant%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CLinearProgress%20style%3D%7B%7B%20marginVertical%3A%2010%20%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%3CText%3EIndeterminate%20Variant%20with%20color%3C%2FText%3E%0A%20%20%20%20%20%20%3CLinearProgress%20style%3D%7B%7B%20marginVertical%3A%2010%20%7D%7D%20color%3D%22red%22%20%2F%3E%0A%20%20%20%20%20%20%3CText%3EDeterminate%20Variant%3C%2FText%3E%0A%20%20%20%20%20%20%3CLinearProgress%0A%20%20%20%20%20%20%20%20style%3D%7B%7B%20marginVertical%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20value%3D%7Bprogress%7D%0A%20%20%20%20%20%20%20%20variant%3D%22determinate%22%0A%20%20%20%20%20%20%2F%3E%0A%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20disabled%3D%7Bprogress%20%3E%200%7D%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20setProgress(0.00001)%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20title%3D%7B'Start%20Progress'%7D%0A%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20margin%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20disabled%3D%7Bprogress%20%3D%3D%3D%200%7D%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20setProgress(0)%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20title%3D%7B'Restart'%7D%0A%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20margin%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%7D%3B%0A%0Aexport%20default%20LinearProgressAPI%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}c.isMDXComponent=!0;var p=n(85489),u=["components"],g={id:"linearprogress",title:"LinearProgress"},k=void 0,v={unversionedId:"components/linearprogress",id:"components/linearprogress",title:"LinearProgress",description:"Progress indicators inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates.",source:"@site/docs/components/LinearProgress.mdx",sourceDirName:"components",slug:"/components/linearprogress",permalink:"/react-naitve-elements-doc-image/docs/next/components/linearprogress",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/LinearProgress.mdx",tags:[],version:"current",frontMatter:{id:"linearprogress",title:"LinearProgress"},sidebar:"docs",previous:{title:"Input",permalink:"/react-naitve-elements-doc-image/docs/next/components/input"},next:{title:"ListItem",permalink:"/react-naitve-elements-doc-image/docs/next/components/listitem"}},f={},A=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],D={toc:A};function N(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},D,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.w,{mdxType:"IconsStyle"}),(0,o.kt)("p",null,"Progress indicators inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates.\nThey communicate an app\u2019s state and indicate available actions, such as whether users can navigate away from the current screen.\nAlso receives all ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("div",{class:"row inline-flex-center"},(0,o.kt)("div",{class:"col col--3"},(0,o.kt)("h4",null,"Import")),(0,o.kt)("div",{class:"col col--9"},(0,o.kt)(s.Z,{mdxType:"CodeBlock"},"import { LinearProgress } from '@rneui/themed';")),(0,o.kt)("div",{class:"col col--3"},(0,o.kt)("h4",null,"Theme Key"," ",(0,o.kt)("a",{href:"../customizing#using-themeprovider"},(0,o.kt)(l.Fs0,{mdxType:"BiInfoCircle"})))),(0,o.kt)("div",{class:"col col--9"},(0,o.kt)(s.Z,{mdxType:"CodeBlock"},"LinearProgress"))),(0,o.kt)(c,{mdxType:"Usage"}),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Includes all ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props.")),(0,o.kt)("div",{class:"table-responsive"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"animation")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},"{ duration?: number; }")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"{ duration: 2000 }")),(0,o.kt)("td",{parentName:"tr",align:null},"Animation duration")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"color")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"secondary")),(0,o.kt)("td",{parentName:"tr",align:null},"Color for linear progress.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"style")),(0,o.kt)("td",{parentName:"tr",align:null},"View Style"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Add additional styling for linear progress component.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"trackColor")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Track color for linear progress.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"value")),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"The value of the progress indicator for the determinate variant. Value between 0 and 1.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"variant")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"determinate")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},"indeterminate")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"value === undefined ? 'indeterminate' : 'determinate'")),(0,o.kt)("td",{parentName:"tr",align:null},"Type of button."))))),(0,o.kt)("h2",{id:"playground"},"Playground"),(0,o.kt)(p.Z,{mdxType:"Play"}))}N.isMDXComponent=!0},33770:()=>{},72950:()=>{},54882:()=>{}}]);