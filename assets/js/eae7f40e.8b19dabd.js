"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[96306],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>d});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},A={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},C=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),C=p(o),d=n,m=C["".concat(l,".").concat(d)]||C[d]||A[d]||i;return o?r.createElement(m,a(a({ref:t},c),{},{components:o})):r.createElement(m,a({ref:t},c))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=C;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var p=2;p<i;p++)a[p]=o[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}C.displayName="MDXCreateElement"},30727:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>A});var r=o(87462),n=o(63366),i=(o(67294),o(3905)),a=["components"],s={},l=void 0,p={unversionedId:"main/usage/Tooltip/snack/index",id:"version-4.0.0-beta.0/main/usage/Tooltip/snack/index",title:"index",description:"",source:"@site/versioned_docs/version-4.0.0-beta.0/main/usage/Tooltip/snack/index.md",sourceDirName:"main/usage/Tooltip/snack",slug:"/main/usage/Tooltip/snack/",permalink:"/react-naitve-elements-doc-image/docs/4.0.0-beta.0/main/usage/Tooltip/snack/",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/usage/Tooltip/snack/index.md",tags:[],version:"4.0.0-beta.0",frontMatter:{}},c={},A=[],C={toc:A};function d(e){var t=e.components,o=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},C,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"snack-player","data-snack-name":"RNE Tooltip","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Tooltip%2C%20Text%2C%20colors%20%7D%20from%20'react-native-elements'%3B%0Aimport%20%7B%20View%2C%20StyleSheet%2C%20Dimensions%2C%20ScrollView%20%7D%20from%20'react-native'%3B%0A%0Aconst%20%7B%20height%20%7D%20%3D%20Dimensions.get('window')%3B%0A%0Atype%20ToolTipComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20TooltipComponent%3A%20React.FunctionComponent%3CToolTipComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20toolProps%20%3D%20%7B%7D%3B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CScrollView%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%7B%20marginVertical%3A%20height%20%2F%208%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.view%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CTooltip%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20popover%3D%7B%3CText%3Eno%20caret!%3C%2FText%3E%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20withPointer%3D%7Bfalse%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3Ewithout%20caret%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FTooltip%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CTooltip%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20popover%3D%7B%3CText%3ETooltip%20info%20goes%20here%3C%2FText%3E%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3D%7B200%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3D%7Bcolors.primary%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3EPress%20me%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FTooltip%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.view%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CTooltip%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3D%7Bcolors.secondary%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20popover%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3ETooltip%20info%20goes%20here%20too.%20Find%20tooltip%20everywhere%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20width%3A%20200%2C%20height%3A%2060%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3EPress%20me%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FTooltip%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CTooltip%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20width%3A%20145%2C%20height%3A%20130%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20popover%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'Some%20big%20text%20full%20of%20important%20stuff%20for%20the%20super%20duper%20user%20that%20our%20design%20has%20been%20created%20for'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3EHUGE%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FTooltip%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.view%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CTooltip%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3D%7B200%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3D%7Bcolors.primary1%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20popover%3D%7B%3CText%3ETooltip%20info%20goes%20here%3C%2FText%3E%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3EMore%20attention%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FTooltip%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.view%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CTooltip%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3D%7B200%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3D%7Bcolors.primary2%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20popover%3D%7B%3CText%3ETooltip%20info%20goes%20here%3C%2FText%3E%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3EI'm%20different%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FTooltip%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CTooltip%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3D%7B200%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20popover%3D%7B%3CText%3ETooltip%20info%20goes%20here%3C%2FText%3E%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3EPress%20me%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FTooltip%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3C%2FScrollView%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20view%3A%20%7B%0A%20%20%20%20display%3A%20'flex'%2C%0A%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20justifyContent%3A%20'space-evenly'%2C%0A%20%20%20%20marginVertical%3A%2050%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20TooltipComponent%3B","data-snack-dependencies":"@rneui/themed,@rneui/base,modal-react-native-web","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}d.isMDXComponent=!0}}]);