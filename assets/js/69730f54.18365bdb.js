"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[97812],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,A=u["".concat(s,".").concat(d)]||u[d]||p[d]||o;return n?r.createElement(A,i(i({ref:t},m),{},{components:n})):r.createElement(A,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},557:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={},s=void 0,l={unversionedId:"main/usage/Image/snack/index",id:"version-4.0.0-beta.0/main/usage/Image/snack/index",title:"index",description:"",source:"@site/versioned_docs/version-4.0.0-beta.0/main/usage/Image/snack/index.md",sourceDirName:"main/usage/Image/snack",slug:"/main/usage/Image/snack/",permalink:"/react-naitve-elements-doc-image/docs/4.0.0-beta.0/main/usage/Image/snack/",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/usage/Image/snack/index.md",tags:[],version:"4.0.0-beta.0",frontMatter:{}},m={},p=[],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"snack-player","data-snack-name":"RNE Image","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20FlatList%2C%20SafeAreaView%2C%20StyleSheet%2C%20ActivityIndicator%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Image%20%7D%20from%20'react-native-elements'%3B%0A%0Aconst%20BASE_URI%20%3D%20'https%3A%2F%2Fsource.unsplash.com%2Frandom%3Fsig%3D'%3B%0A%0Aconst%20ImageAPI%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CSafeAreaView%3E%0A%20%20%20%20%20%20%20%20%3CFlatList%0A%20%20%20%20%20%20%20%20%20%20data%3D%7B%5B...new%20Array(10)%5D.map((_%2C%20i)%20%3D%3E%20i.toString())%7D%0A%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.list%7D%0A%20%20%20%20%20%20%20%20%20%20numColumns%3D%7B2%7D%0A%20%20%20%20%20%20%20%20%20%20keyExtractor%3D%7B(e)%20%3D%3E%20e%7D%0A%20%20%20%20%20%20%20%20%20%20renderItem%3D%7B(%7B%20item%20%7D)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CImage%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20source%3D%7B%7B%20uri%3A%20BASE_URI%20%2B%20item%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7Bstyles.item%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20PlaceholderContent%3D%7B%3CActivityIndicator%20%2F%3E%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FSafeAreaView%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20list%3A%20%7B%0A%20%20%20%20width%3A%20'100%25'%2C%0A%20%20%20%20backgroundColor%3A%20'%23000'%2C%0A%20%20%7D%2C%0A%20%20item%3A%20%7B%0A%20%20%20%20aspectRatio%3A%201%2C%0A%20%20%20%20width%3A%20'100%25'%2C%0A%20%20%20%20flex%3A%201%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20ImageAPI%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}d.isMDXComponent=!0}}]);