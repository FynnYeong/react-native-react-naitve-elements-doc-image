"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[1966],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const l="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>C});var r=n(87462),a=n(67294),l=n(86010),i=n(12466),o=n(16550),u=n(91980),c=n(67392),s=n(50012);function p(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function g(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,l=(0,o.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,u._X)(i),(0,a.useCallback)((function(e){if(i){var t=new URLSearchParams(l.location.search);t.set(i,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[i,l])]}function f(e){var t,n,r,l,i=e.defaultValue,o=e.queryString,u=void 0!==o&&o,c=e.groupId,p=d(e),f=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:p})})),k=f[0],v=f[1],b=g({queryString:u,groupId:c}),y=b[0],N=b[1],h=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),n=(0,s.Nk)(t),r=n[0],l=n[1],[r,(0,a.useCallback)((function(e){t&&l.set(e)}),[t,l])]),C=h[0],D=h[1],A=function(){var e=null!=y?y:C;return m({value:e,tabValues:p})?e:null}();return(0,a.useEffect)((function(){A&&v(A)}),[A]),{selectedValue:k,selectValue:(0,a.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);v(e),N(e),D(e)}),[N,D,p]),tabValues:p}}var k=n(72389);const v="tabList__CuJ",b="tabItem_LNqP";function y(e){var t=e.className,n=e.block,o=e.selectedValue,u=e.selectValue,c=e.tabValues,s=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=s.indexOf(t),r=c[n].value;r!==o&&(p(t),u(r))},m=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=s.indexOf(e.currentTarget)+1;n=null!=(r=s[a])?r:s[0];break;case"ArrowLeft":var l,i=s.indexOf(e.currentTarget)-1;n=null!=(l=s[i])?l:s[s.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},c.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return s.push(e)},onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",b,null==i?void 0:i.className,{"tabs__item--active":o===t})}),null!=n?n:t)})))}function N(e){var t=e.lazy,n=e.children,r=e.selectedValue;if(t){var l=n.find((function(e){return e.props.value===r}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function h(e){var t=f(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",v)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(N,(0,r.Z)({},e,t)))}function C(e){var t=(0,k.Z)();return a.createElement(h,(0,r.Z)({key:String(t)},e))}},5530:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>k,frontMatter:()=>s,metadata:()=>d,toc:()=>g});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=(n(74866),n(85162),n(32408),["components"]),o={toc:[]};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"snack-player","data-snack-name":"RNE Pricing","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20ScrollView%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20PricingCard%2C%20colors%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Atype%20PricingCardComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20Pricing%3A%20React.FunctionComponent%3CPricingCardComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CScrollView%3E%0A%20%20%20%20%20%20%3CPricingCard%0A%20%20%20%20%20%20%20%20color%3D%7Bcolors.primary%7D%0A%20%20%20%20%20%20%20%20title%3D%22Free%22%0A%20%20%20%20%20%20%20%20price%3D%22%240%22%0A%20%20%20%20%20%20%20%20info%3D%7B%5B'1%20User'%2C%20'Basic%20Support'%2C%20'All%20Core%20Features'%5D%7D%0A%20%20%20%20%20%20%20%20button%3D%7B%7B%20title%3A%20'%20GET%20STARTED'%2C%20icon%3A%20'flight-takeoff'%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CPricingCard%0A%20%20%20%20%20%20%20%20color%3D%7Bcolors.secondary%7D%0A%20%20%20%20%20%20%20%20title%3D%22Starter%22%0A%20%20%20%20%20%20%20%20price%3D%22%2419%22%0A%20%20%20%20%20%20%20%20info%3D%7B%5B'10%20Users'%2C%20'Basic%20Support'%2C%20'All%20Core%20Features'%5D%7D%0A%20%20%20%20%20%20%20%20button%3D%7B%7B%20title%3A%20'%20GET%20STARTED'%2C%20icon%3A%20'flight-takeoff'%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CPricingCard%0A%20%20%20%20%20%20%20%20color%3D%7Bcolors.secondary2%7D%0A%20%20%20%20%20%20%20%20title%3D%22Enterprise%22%0A%20%20%20%20%20%20%20%20price%3D%22%2449%22%0A%20%20%20%20%20%20%20%20info%3D%7B%5B'100%20Users'%2C%20'One%20on%20One%20Support'%2C%20'All%20Core%20Features'%5D%7D%0A%20%20%20%20%20%20%20%20button%3D%7B%7B%20title%3A%20'%20GET%20STARTED'%2C%20icon%3A%20'flight-takeoff'%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FScrollView%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B%0A%0Aexport%20default%20Pricing%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}u.isMDXComponent=!0;var c=["components"],s={id:"pricingcard",title:"PricingCard"},p=void 0,d={unversionedId:"components/pricingcard",id:"version-4.0.0-rc.2/components/pricingcard",title:"PricingCard",description:"Pricing is a convenience component used to display features and pricing tables in a beautiful and engaging way.",source:"@site/versioned_docs/version-4.0.0-rc.2/components/PricingCard.mdx",sourceDirName:"components",slug:"/components/pricingcard",permalink:"/react-naitve-elements-doc-image/docs/4.0.0-rc.2/components/pricingcard",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.2/components/PricingCard.mdx",tags:[],version:"4.0.0-rc.2",frontMatter:{id:"pricingcard",title:"PricingCard"},sidebar:"docs",previous:{title:"Overlay",permalink:"/react-naitve-elements-doc-image/docs/4.0.0-rc.2/components/overlay"},next:{title:"SearchBar",permalink:"/react-naitve-elements-doc-image/docs/4.0.0-rc.2/components/searchbar"}},m={},g=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],f={toc:g};function k(e){var t=e.components,n=(0,a.Z)(e,c);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Pricing is a convenience component used to display features and pricing tables in a beautiful and engaging way."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(u,{mdxType:"Usage"}),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("div",{class:"table-responsive"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"button")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ButtonProps")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"ButtonInformation")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Button information.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"color")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Color [Primary]")),(0,l.kt)("td",{parentName:"tr",align:null},"Color scheme for button & title.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"containerStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Outer component styling.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"info")),(0,l.kt)("td",{parentName:"tr",align:null},"string[]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[]")),(0,l.kt)("td",{parentName:"tr",align:null},"Pricing information.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"infoStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"Text Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Specify pricing information style.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onButtonPress")),(0,l.kt)("td",{parentName:"tr",align:null},"Function"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Function to be run when button is pressed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"price")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Price mentioned in the pricing card.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pricingStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"Text Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Specify pricing text style.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"title")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Add title in the pricing card.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"titleStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"Text Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Specify title text style.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"wrapperStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Inner wrapper component styling."))))))}k.isMDXComponent=!0}}]);