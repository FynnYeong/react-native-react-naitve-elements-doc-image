"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[59789],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),d=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=d(n),c=r,k=p["".concat(u,".").concat(c)]||p[c]||s[c]||l;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>C});var a=n(87462),r=n(67294),l=n(86010),i=n(12466),o=n(16550),u=n(91980),d=n(67392),m=n(50012);function s(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:s(n);return function(e){var t=(0,d.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function c(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function k(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,l=(0,o.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,u._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(l.location.search);t.set(i,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[i,l])]}function g(e){var t,n,a,l,i=e.defaultValue,o=e.queryString,u=void 0!==o&&o,d=e.groupId,s=p(e),g=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!c({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:s})})),h=g[0],N=g[1],b=k({queryString:u,groupId:d}),f=b[0],v=b[1],A=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,m.Nk)(t),a=n[0],l=n[1],[a,(0,r.useCallback)((function(e){t&&l.set(e)}),[t,l])]),C=A[0],y=A[1],D=function(){var e=null!=f?f:C;return c({value:e,tabValues:s})?e:null}();return(0,r.useEffect)((function(){D&&N(D)}),[D]),{selectedValue:h,selectValue:(0,r.useCallback)((function(e){if(!c({value:e,tabValues:s}))throw new Error("Can't select invalid tab value="+e);N(e),v(e),y(e)}),[v,y,s]),tabValues:s}}var h=n(72389);const N="tabList__CuJ",b="tabItem_LNqP";function f(e){var t=e.className,n=e.block,o=e.selectedValue,u=e.selectValue,d=e.tabValues,m=[],s=(0,i.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,n=m.indexOf(t),a=d[n].value;a!==o&&(s(t),u(a))},c=function(e){var t,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var a,r=m.indexOf(e.currentTarget)+1;n=null!=(a=m[r])?a:m[0];break;case"ArrowLeft":var l,i=m.indexOf(e.currentTarget)-1;n=null!=(l=m[i])?l:m[m.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},d.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return m.push(e)},onKeyDown:c,onClick:p},i,{className:(0,l.Z)("tabs__item",b,null==i?void 0:i.className,{"tabs__item--active":o===t})}),null!=n?n:t)})))}function v(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(t){var l=n.find((function(e){return e.props.value===a}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function A(e){var t=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",N)},r.createElement(f,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function C(e){var t=(0,h.Z)();return r.createElement(A,(0,a.Z)({key:String(t)},e))}},35303:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>m,metadata:()=>p,toc:()=>k});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=(n(74866),n(85162),n(32408),["components"]),o={toc:[]};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"snack-player","data-snack-name":"RNE Slider","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Slider%2C%20Text%2C%20Icon%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Atype%20SlidersComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20Sliders%3A%20React.FunctionComponent%3CSlidersComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Aconst%20%5Bvalue%2C%20setValue%5D%20%3D%20useState(0)%3B%0Aconst%20%5BvertValue%2C%20setVertValue%5D%20%3D%20useState(0)%3B%0A%0Aconst%20interpolate%20%3D%20(start%3A%20number%2C%20end%3A%20number)%20%3D%3E%20%7B%0A%20%20let%20k%20%3D%20(value%20-%200)%20%2F%2010%3B%20%2F%2F%200%20%3D%3Emin%20%20%26%26%2010%20%3D%3E%20MAX%0A%20%20return%20Math.ceil((1%20-%20k)%20*%20start%20%2B%20k%20*%20end)%20%25%20256%3B%0A%7D%3B%0A%0Aconst%20color%20%3D%20()%20%3D%3E%20%7B%0A%20%20let%20r%20%3D%20interpolate(255%2C%200)%3B%0A%20%20let%20g%20%3D%20interpolate(0%2C%20255)%3B%0A%20%20let%20b%20%3D%20interpolate(0%2C%200)%3B%0A%20%20return%20%60rgb(%24%7Br%7D%2C%24%7Bg%7D%2C%24%7Bb%7D)%60%3B%0A%7D%3B%0A%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EHorizontal%20Slider%3C%2FText%3E%0A%0A%20%20%20%20%3CView%20style%3D%7B%5Bstyles.contentView%5D%7D%3E%0A%20%20%20%20%20%20%3CSlider%0A%20%20%20%20%20%20%20%20value%3D%7Bvalue%7D%0A%20%20%20%20%20%20%20%20onValueChange%3D%7BsetValue%7D%0A%20%20%20%20%20%20%20%20maximumValue%3D%7B10%7D%0A%20%20%20%20%20%20%20%20minimumValue%3D%7B0%7D%0A%20%20%20%20%20%20%20%20step%3D%7B1%7D%0A%20%20%20%20%20%20%20%20allowTouchTrack%0A%20%20%20%20%20%20%20%20trackStyle%3D%7B%7B%20height%3A%205%2C%20backgroundColor%3A%20'transparent'%20%7D%7D%0A%20%20%20%20%20%20%20%20thumbStyle%3D%7B%7B%20height%3A%2020%2C%20width%3A%2020%2C%20backgroundColor%3A%20'transparent'%20%7D%7D%0A%20%20%20%20%20%20%20%20thumbProps%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20children%3A%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3D%22heartbeat%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3D%22font-awesome%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3D%7B20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20reverse%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20bottom%3A%2020%2C%20right%3A%2020%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3D%7Bcolor()%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20)%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20paddingTop%3A%2020%20%7D%7D%3EValue%3A%20%7Bvalue%7D%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EVertical%20Slider%3C%2FText%3E%0A%20%20%20%20%3CView%20style%3D%7Bstyles.verticalContent%7D%3E%0A%20%20%20%20%20%20%3CSlider%0A%20%20%20%20%20%20%20%20value%3D%7BvertValue%7D%0A%20%20%20%20%20%20%20%20onValueChange%3D%7BsetVertValue%7D%0A%20%20%20%20%20%20%20%20maximumValue%3D%7B50%7D%0A%20%20%20%20%20%20%20%20minimumValue%3D%7B20%7D%0A%20%20%20%20%20%20%20%20step%3D%7B1%7D%0A%20%20%20%20%20%20%20%20orientation%3D%22vertical%22%0A%20%20%20%20%20%20%20%20thumbStyle%3D%7B%7B%20height%3A%2020%2C%20width%3A%2016%2C%20backgroundColor%3A%20'transparent'%20%7D%7D%0A%20%20%20%20%20%20%20%20thumbProps%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20children%3A%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3D%22heartbeat%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3D%22font-awesome%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3D%7B20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20reverse%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20bottom%3A%2020%2C%20right%3A%2020%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3D%22%23f50%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20)%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3CText%20style%3D%7B%7B%20paddingLeft%3A%2025%20%7D%7D%3EValue%3A%20%7BvertValue%7D%3C%2FText%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0AcontentView%3A%20%7B%0A%20%20padding%3A%2020%2C%0A%20%20width%3A%20'100%25'%2C%0A%20%20justifyContent%3A%20'center'%2C%0A%20%20alignItems%3A%20'stretch'%2C%0A%7D%2C%0AverticalContent%3A%20%7B%0A%20%20padding%3A%2020%2C%0A%20%20flex%3A%201%2C%0A%20%20flexDirection%3A%20'row'%2C%0A%20%20height%3A%20500%2C%0A%20%20justifyContent%3A%20'center'%2C%0A%20%20alignItems%3A%20'stretch'%2C%0A%7D%2C%0AsubHeader%3A%20%7B%0A%20%20backgroundColor%20%3A%20%22%232089dc%22%2C%0A%20%20color%20%3A%20%22white%22%2C%0A%20%20textAlign%20%3A%20%22center%22%2C%0A%20%20paddingVertical%20%3A%205%2C%0A%20%20marginBottom%20%3A%2010%0A%7D%0A%7D)%3B%0A%0Aexport%20default%20Sliders%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}u.isMDXComponent=!0;var d=["components"],m={id:"slider",title:"Slider"},s=void 0,p={unversionedId:"components/slider",id:"version-4.0.0-rc.2/components/slider",title:"Slider",description:"Sliders allow users to select a value from a fixed set of values using drag utility.",source:"@site/versioned_docs/version-4.0.0-rc.2/components/Slider.mdx",sourceDirName:"components",slug:"/components/slider",permalink:"/react-naitve-elements-doc-image/docs/4.0.0-rc.2/components/slider",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.2/components/Slider.mdx",tags:[],version:"4.0.0-rc.2",frontMatter:{id:"slider",title:"Slider"},sidebar:"docs",previous:{title:"SearchBar",permalink:"/react-naitve-elements-doc-image/docs/4.0.0-rc.2/components/searchbar"},next:{title:"Skeleton",permalink:"/react-naitve-elements-doc-image/docs/4.0.0-rc.2/components/skeleton"}},c={},k=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],g={toc:k};function h(e){var t=e.components,n=(0,r.Z)(e,d);return(0,l.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Sliders allow users to select a value from a fixed set of values using drag utility."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(u,{mdxType:"Usage"}),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("div",{class:"table-responsive"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"allowTouchTrack")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"If true, thumb will respond and jump to any touch along the track.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"animateTransitions")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Set to true if you want to use the default 'spring' animation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"animationConfig")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TimingAnimationConfig")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"SpringAnimationConfig")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Used to configure the animation parameters. These are the same parameters in the ",(0,l.kt)("a",{parentName:"td",href:"https://reactnative.dev/docs/animations.html"},"Animated library"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"animationType")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"spring")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"timing")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"timing")),(0,l.kt)("td",{parentName:"tr",align:null},"Set to 'spring' or 'timing' to use one of those two types of animations with the default ",(0,l.kt)("a",{parentName:"td",href:"https://reactnative.dev/docs/animations.html"},"animation properties"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"containerStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Apply style to the container of the slider.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"debugTouchArea")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"Set this to true to visually see the thumb touch rect in green.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"disabled")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"If true the user won't be able to move the slider.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"maximumTrackTintColor")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"#b3b3b3")),(0,l.kt)("td",{parentName:"tr",align:null},"The color used for the track to the right of the button.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"maximumValue")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1")),(0,l.kt)("td",{parentName:"tr",align:null},"Initial maximum value of the slider.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"minimumTrackTintColor")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"#3f3f3f")),(0,l.kt)("td",{parentName:"tr",align:null},"The color used for the track to the left of the button.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"minimumValue")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:null},"Initial minimum value of the slider.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onSlidingComplete")),(0,l.kt)("td",{parentName:"tr",align:null},"(value: number) => void"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Callback called when the user finishes changing the value (e.g. when the slider is released).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onSlidingStart")),(0,l.kt)("td",{parentName:"tr",align:null},"(value: number) => void"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Callback called when the user starts changing the value (e.g. when the slider is pressed).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onValueChange")),(0,l.kt)("td",{parentName:"tr",align:null},"(value: number) => void"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Callback continuously called while the user is dragging the slider.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"orientation")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"vertical")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"horizontal")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"horizontal")),(0,l.kt)("td",{parentName:"tr",align:null},"Set the orientation of the slider.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"step")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:null},"Step value of the slider. The value should be between 0 and maximumValue - minimumValue).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"style")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The style applied to the slider container.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"thumbProps")),(0,l.kt)("td",{parentName:"tr",align:null},"any"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The props applied to the thumb. Uses ",(0,l.kt)("inlineCode",{parentName:"td"},"Component")," prop which can accept ",(0,l.kt)("inlineCode",{parentName:"td"},"Animated")," components.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"thumbStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The style applied to the thumb.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"thumbTintColor")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"red")),(0,l.kt)("td",{parentName:"tr",align:null},"The color used for the thumb.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"thumbTouchSize")),(0,l.kt)("td",{parentName:"tr",align:null},"Sizable"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{ width: THUMB_SIZE, height: THUMB_SIZE }")),(0,l.kt)("td",{parentName:"tr",align:null},"The size of the touch area that allows moving the thumb. The touch area has the same center as the visible thumb. This allows to have a visually small thumb while still allowing the user to move it easily.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"trackStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The style applied to the track.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"value")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:null},"Initial value of the slider."))))))}h.isMDXComponent=!0}}]);