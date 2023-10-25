"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[4482],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18026:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>p,metadata:()=>l,toc:()=>m});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],p={sidebar_label:"With Typescript",title:"Typescript",sidebar_position:3},s=void 0,l={unversionedId:"customization/typescript",id:"version-4.0.0-rc.3/customization/typescript",title:"Typescript",description:"TypeScript definitions for your theme can be extended by using TypeScript's declaration merging feature. First you need to create a declaration file called themed.d.ts and then declare the module @rneui/themed and 're-export' the types that you want to extend. i.e. below we add a custom p1Style to the Text theme object and we add a bunch of colors to the colors object.",source:"@site/versioned_docs/version-4.0.0-rc.3/customization/3.typescript.mdx",sourceDirName:"customization",slug:"/customization/typescript",permalink:"/react-naitve-elements-doc-image/docs/4.0.0-rc.3/customization/typescript",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.3/customization/3.typescript.mdx",tags:[],version:"4.0.0-rc.3",sidebarPosition:3,frontMatter:{sidebar_label:"With Typescript",title:"Typescript",sidebar_position:3},sidebar:"docs",previous:{title:"Theme Object",permalink:"/react-naitve-elements-doc-image/docs/4.0.0-rc.3/customization/theme object"},next:{title:"Common Pitfalls",permalink:"/react-naitve-elements-doc-image/docs/4.0.0-rc.3/customization/pitfall"}},c={},m=[{value:"Adding custom colors",id:"adding-custom-colors",level:3},{value:"Adding custom &#39;other&#39; properties",id:"adding-custom-other-properties",level:3},{value:"Extending RNE default components",id:"extending-rne-default-components",level:3},{value:"Using the theme in your own components",id:"using-the-theme-in-your-own-components",level:3},{value:"Theming with no RNE components",id:"theming-with-no-rne-components",level:3}],d={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"TypeScript definitions for your theme can be extended by using TypeScript's ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/declaration-merging.html"},"declaration merging")," feature. First you need to create a declaration file called ",(0,a.kt)("inlineCode",{parentName:"p"},"themed.d.ts")," and then declare the module ",(0,a.kt)("inlineCode",{parentName:"p"},"@rneui/themed")," and 're-export' the types that you want to extend. i.e. below we add a custom ",(0,a.kt)("inlineCode",{parentName:"p"},"p1Style")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Text")," theme object and we add a bunch of colors to the ",(0,a.kt)("inlineCode",{parentName:"p"},"colors")," object."),(0,a.kt)("h3",{id:"adding-custom-colors"},"Adding custom colors"),(0,a.kt)("p",null,"TypeScript will only autocomplete RNE's default colors when accessing the theme. To add your custom colors to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Colors")," type, you can use TypeScript module declaration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import '@rneui/themed';\n\ndeclare module '@rneui/themed' {\n  export interface Colors {\n    primaryLight: string;\n    primaryDark: string;\n    secondaryLight: string;\n    secondaryDark: string;\n  }\n}\n")),(0,a.kt)("p",null,"Then when you create your ",(0,a.kt)("inlineCode",{parentName:"p"},"ThemeProvider")," instance,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const theme = createTheme({\n  lightColors: {\n    ...yourCustomColorShape\n  },\n  darkColors: {\n    ...yourCustomColorShape\n  },\n  mode: // your light or dark mode value\n})\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const App = () => {\n  const { theme } = useTheme();\n  return <Text style={{ color: theme.colors.primaryLight }} />;\n};\n")),(0,a.kt)("h3",{id:"adding-custom-other-properties"},"Adding custom 'other' properties"),(0,a.kt)("p",null,"Similar to how you can extend/set custom colors, you can add your own properties to the ",(0,a.kt)("inlineCode",{parentName:"p"},"theme")," type using TypeScript module declaration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import '@rneui/themed';\n\ndeclare module '@rneui/themed' {\n  export interface Theme {\n    myCustomProperty: string;\n    myCustomFunction: () => void;\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const App = () => {\n  const { theme } = useTheme();\n  return <Text>{theme.myCustomProperty}</Text>;\n};\n")),(0,a.kt)("h3",{id:"extending-rne-default-components"},"Extending RNE default components"),(0,a.kt)("p",null,"If you need to extend some props of RNE's default components, you can use TypeScript module declaration, Also remember to extend ",(0,a.kt)("inlineCode",{parentName:"p"},"ComponentTheme")," too."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import '@rneui/themed';\n\ndeclare module '@rneui/themed' {\n  export interface TextProps {\n    bold: boolean;\n  }\n\n  export interface ComponentTheme {\n    Text: Partial<TextProps>;\n  }\n}\n")),(0,a.kt)("p",null,"For eg. You can use the following code to extend the ",(0,a.kt)("inlineCode",{parentName:"p"},"Text")," component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const myTheme = createTheme({\n  Text: (props) => ({\n    style: {\n      fontWeight: props.bold ? 'bold' : 'normal',\n    },\n  }),\n});\n")),(0,a.kt)("p",null,"and use it like this"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const App = () => {\n  const { theme } = useTheme();\n  return (\n    <View>\n      <Text>Normal Text</Text>\n      <Text bold>Bold Text</Text>\n    </View>\n  );\n};\n")),(0,a.kt)("h3",{id:"using-the-theme-in-your-own-components"},"Using the theme in your own components"),(0,a.kt)("p",null,"You may want to make use of the theming utilities in your own components. For this you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"withTheme")," HOC exported from this library. It adds three props to the component it wraps - theme, updateTheme and replaceTheme."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { withTheme } from '@rneui/themed';\n\ntype MyCustomComponentProps = {\n  title: string;\n  titleStyle: StyleProps<TextStyle>;\n};\n\nexport const MyCustomComponent = withTheme<MyCustomComponentProps>((props) => {\n  // Access theme from props\n  const { theme, updateTheme, replaceTheme } = props;\n  // ...\n});\n\ndeclare module '@rneui/themed' {\n  export interface ComponentTheme {\n    MyCustomComponent: Partial<MyCustomComponentProps>;\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { ThemeProvider, createTheme } from '@rneui/themed';\n\nconst myTheme = createTheme({\n  MyCustomComponent: {\n    titleStyle: {\n      color: 'red',\n    },\n  },\n});\n\nconst App = () => {\n  return (\n    <ThemeProvider theme={myTheme}>\n      <MyCustomComponent title=\"My Component\" />\n    </ThemeProvider>\n  );\n};\n")),(0,a.kt)("h3",{id:"theming-with-no-rne-components"},"Theming with no RNE components"),(0,a.kt)("p",null,"You can install ",(0,a.kt)("inlineCode",{parentName:"p"},"@rneui/theming"),", refer it's ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rneui/theming"},"documentation")))}u.isMDXComponent=!0}}]);