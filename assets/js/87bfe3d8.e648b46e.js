"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[92463],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),m=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=m(n),h=r,d=c["".concat(s,".").concat(h)]||c[h]||u[h]||a;return n?o.createElement(d,l(l({ref:t},p),{},{components:n})):o.createElement(d,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var m=2;m<a;m++)l[m]=n[m];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},48226:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>m,toc:()=>u});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),l=["components"],i={id:"customization",title:"Customization"},s=void 0,m={unversionedId:"customization",id:"version-1.2.0/customization",title:"Customization",description:"Congrats! You've installed React Native Elements and your immediate question",source:"@site/versioned_docs/version-1.2.0/customization.md",sourceDirName:".",slug:"/customization",permalink:"/react-naitve-elements-doc-image/docs/1.2.0/customization",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-1.2.0/customization.md",tags:[],version:"1.2.0",frontMatter:{id:"customization",title:"Customization"},sidebar:"version-1.2.0/docs",previous:{title:"Overview",permalink:"/react-naitve-elements-doc-image/docs/1.2.0/overview"},next:{title:"Usage on the Web",permalink:"/react-naitve-elements-doc-image/docs/1.2.0/web_usage"}},p={},u=[{value:"Component Styles",id:"component-styles",level:2},{value:"Theming",id:"theming",level:2},{value:"Using Composition",id:"using-composition",level:3},{value:"Using ThemeProvider",id:"using-themeprovider",level:3},{value:"Order of Styles",id:"order-of-styles",level:3},{value:"Internal",id:"internal",level:4},{value:"Theme",id:"theme",level:4},{value:"External",id:"external",level:4},{value:"The Theme Object",id:"the-theme-object",level:3},{value:"Using the theme in your own components",id:"using-the-theme-in-your-own-components",level:3},{value:"Using the respective platform&#39;s native colors",id:"using-the-respective-platforms-native-colors",level:3},{value:"Common Pitfalls",id:"common-pitfalls",level:3},{value:"My local styles aren&#39;t working with the theme",id:"my-local-styles-arent-working-with-the-theme",level:4},{value:"Example 1",id:"example-1",level:5},{value:"Example 2",id:"example-2",level:5},{value:"Example 3",id:"example-3",level:5}],c={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Congrats! You've installed React Native Elements and your immediate question\ngoes something like this:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"So umm, how I do change how it looks?")),(0,a.kt)("p",null,"Great question! A UI Kit wouldn't be that useful if the apps everyone built\nlooked the same right? For this case React Native Elements provide a number of\nprops on each component to enable you to style them how you want."),(0,a.kt)("h2",{id:"component-styles"},"Component Styles"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Every")," component from React Native Elements has a container around it. The\ncontainer is just a traditional ",(0,a.kt)("inlineCode",{parentName:"p"},"<View />")," from react native that has some\nstyling on it. This default styling prevents components from colliding with each\nother. If you want to change how two components react to each on the screen your\nfirst stop should be the ",(0,a.kt)("inlineCode",{parentName:"p"},"containerStyle")," prop."),(0,a.kt)("p",null,"Similar to ",(0,a.kt)("inlineCode",{parentName:"p"},"containerStyle"),", components may provide their custom style props\nlike ",(0,a.kt)("inlineCode",{parentName:"p"},"buttonStyle"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"titleStyle")," etc. Always refer to the documentation for the\ncomponent to find out which style props it provides."),(0,a.kt)("h2",{id:"theming"},"Theming"),(0,a.kt)("p",null,"While component styles are great for single use, you may want to have the same\nstyling for every instance of a component. For example, you may want all your\nbuttons to be blue or have the same font. Here are some ways to reuse styles\nwith React Native Elements."),(0,a.kt)("h3",{id:"using-composition"},"Using Composition"),(0,a.kt)("p",null,"With this approach, we create one component with the styles we want and use that\ninstead of the built-in component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { Button } from 'react-native-elements';\n\nconst RaisedButton = (props) => <Button raised {...props} />;\n\n// Your App\nconst App = () => {\n  return <RaisedButton title=\"Yea\" />;\n};\n")),(0,a.kt)("p",null,"If we want to use a button that's raised in our app, we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"RaisedButton"),"\ninstead of using ",(0,a.kt)("inlineCode",{parentName:"p"},"Button"),". This component still accepts all the props from the\nnormal ",(0,a.kt)("inlineCode",{parentName:"p"},"Button")," just that it has the ",(0,a.kt)("inlineCode",{parentName:"p"},"raised")," prop set by default."),(0,a.kt)("h3",{id:"using-themeprovider"},"Using ThemeProvider"),(0,a.kt)("p",null,"The previous solution works great for only one component, but imagine having to\ndo this for every component you want custom styles for. That could get a bit\ntedious to manage. Thankfully, there's a better way to do this. React Native\nElements ships with a 3 utilities for large-scale theming."),(0,a.kt)("p",null,"Firstly you'll want to set up your ",(0,a.kt)("inlineCode",{parentName:"p"},"ThemeProvider"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { ThemeProvider, Button } from \'react-native-elements\';\n\nconst theme = {\n  Button: {\n    raised: true,\n  },\n};\n\n// Your App\nconst App = () => {\n  return (\n    <ThemeProvider theme={theme}>\n      <Button title="My Button" />\n      <Button title="My 2nd Button" />\n    </ThemeProvider>\n  );\n};\n')),(0,a.kt)("p",null,"The example above achieves the same goals as the first example \u2014 apply the same\nstyles to multiple instances of ",(0,a.kt)("inlineCode",{parentName:"p"},"Button")," in the app. However this example\napplies the ",(0,a.kt)("inlineCode",{parentName:"p"},"raised")," prop to every instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"Button")," inside the component\ntree under ",(0,a.kt)("inlineCode",{parentName:"p"},"ThemeProvider"),". Both of these buttons will have the ",(0,a.kt)("inlineCode",{parentName:"p"},"raised")," prop\nset to true."),(0,a.kt)("p",null,"This is extremely convenient and is made possible through\n",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html"},"React's Context API"),"."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"order-of-styles"},"Order of Styles"),(0,a.kt)("p",null,"What happens now if we want a ",(0,a.kt)("inlineCode",{parentName:"p"},"Button")," that isn't raised? To do that we have to\nthe understand the order in which styles are applied."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Internal > Theme > External")),(0,a.kt)("h4",{id:"internal"},"Internal"),(0,a.kt)("p",null,"Internal components styles are the styles which are defined in the component\nfile. These are applied first."),(0,a.kt)("h4",{id:"theme"},"Theme"),(0,a.kt)("p",null,"Theme styles are the values that are set by the ThemeProvider If present, these\nare applied second."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { ThemeProvider, Button } from 'react-native-elements';\n\nconst theme = {\n  Button: {\n    titleStyle: {\n      color: 'red',\n    },\n  },\n};\n\nconst App = () => {\n  return (\n    <ThemeProvider theme={theme}>\n      <Button title=\"My Button\" />\n    </ThemeProvider>\n  );\n};\n")),(0,a.kt)("p",null,"This will override the white color for the title set in the component's style."),(0,a.kt)("h4",{id:"external"},"External"),(0,a.kt)("p",null,"External styles are the styles which are set through the component props. These\nare applied last and have the highest precedence."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { ThemeProvider, Button } from 'react-native-elements';\n\nconst theme = {\n  Button: {\n    titleStyle: {\n      color: 'red',\n    },\n  },\n};\n\nconst App = () => {\n  return (\n    <ThemeProvider theme={theme}>\n      <Button title=\"My Button\" titleStyle={{ color: 'pink' }} />\n    </ThemeProvider>\n  );\n};\n")),(0,a.kt)("p",null,"This will override both the white color for the title set in the component's\nstyle as well as the red color set in the theme."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Remember if you want to override the values set in the theme you can always\nuse component props.")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"the-theme-object"},"The Theme Object"),(0,a.kt)("p",null,"By default, the theme object looks like this. You can add whatever values you\nwant to the theme, and they will be merged with the default. By default the\nplatform colors aren't used anywhere. These native colors are added for\nyour convenience."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"interface theme {\n  colors: {\n    primary;\n    secondary;\n    grey0;\n    grey1;\n    grey2;\n    grey3;\n    grey4;\n    grey5;\n    greyOutline;\n    searchBg;\n    success;\n    error;\n    warning;\n    divider;\n    platform: {\n      ios: {\n        primary;\n        secondary;\n        success;\n        error;\n        warning;\n      };\n      android: {\n        // Same as ios\n      };\n    };\n  };\n}\n")),(0,a.kt)("p",null,"Setting styles in the theme is as simple as using the name of the component, as\na key and the props you want to change as the value."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { ThemeProvider } from 'react-native-elements';\n\nconst theme = {\n  Avatar: {\n    rounded: true,\n  },\n  Badge: {\n    textStyle: { fontSize: 30 },\n  },\n};\n\n...\n\n<ThemeProvider theme={theme}>\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"using-the-theme-in-your-own-components"},"Using the theme in your own components"),(0,a.kt)("p",null,"You may want to make use of the theming utilities in your own components. For\nthis you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"withTheme")," HOC exported from this library. It adds three\nprops to the component it wraps - ",(0,a.kt)("inlineCode",{parentName:"p"},"theme"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"updateTheme")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"replaceTheme"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { Text } from 'react-native';\nimport { withTheme } from 'react-native-elements';\n\nfunction MyComponent(props) {\n  const { theme, updateTheme, replaceTheme } = props;\n  return <Text style={{ color: theme.colors.primary }}>Yo!</Text>;\n}\n\nexport default withTheme(MyComponent);\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"updateTheme")," function merges the theme passed in with the current theme."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const theme = {\n  colors: {\n    primary: 'pink',\n  },\n};\n\n// We can update the primary color\nupdateTheme({ colors: { primary: 'red' } });\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"replaceTheme")," function merges the theme passed in with the default theme."),(0,a.kt)("p",null,"Don't want to wrap your components? You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"ThemeConsumer")," component\nwhich uses render props!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { Text } from 'react-native';\nimport { ThemeConsumer } from 'react-native-elements';\n\nconst MyComponent = () => (\n  <ThemeConsumer>\n    {({ theme }) => (\n      <Text style={{ color: theme.colors.primary }}>Yo!</Text>;\n    )}\n  </ThemeConsumer>\n)\n")),(0,a.kt)("p",null,"You can also use the ThemeContext directly if you use hooks."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, { useContext } from 'react';\nimport { Text } from 'react-native';\nimport { ThemeContext } from 'react-native-elements';\n\nconst MyComponent = () => {\n  const { theme } = useContext(ThemeContext);\n\n  return (\n    <View style={styles.container}>\n      <Text style={{ color: theme.colors.primary }}>Yo!</Text>\n    </View>\n  );\n};\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"using-the-respective-platforms-native-colors"},"Using the respective platform's native colors"),(0,a.kt)("p",null,"You may want to style your app using the native color palette. You can do this\nusing the ",(0,a.kt)("inlineCode",{parentName:"p"},"colors")," object and the ",(0,a.kt)("inlineCode",{parentName:"p"},"Platform")," API."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Platform } from 'react-native';\nimport { Button, colors, ThemeProvider } from 'react-native-elements';\n\nconst theme = {\n  colors: {\n    ...Platform.select({\n      default: colors.platform.android,\n      ios: colors.platform.ios,\n    }),\n  },\n};\n\nconst App = () => {\n  return (\n    <ThemeProvider theme={theme}>\n      // This button's color will now be the default iOS / Android blue.\n      <Button title=\"My Button\" />\n    </ThemeProvider>\n  );\n};\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"common-pitfalls"},"Common Pitfalls"),(0,a.kt)("p",null,"This section outlines some common pitfalls when using Theming."),(0,a.kt)("h4",{id:"my-local-styles-arent-working-with-the-theme"},"My local styles aren't working with the theme"),(0,a.kt)("p",null,"It's important to understand that the ",(0,a.kt)("inlineCode",{parentName:"p"},"ThemeProvider")," works by merging your local(external) styles with those set on the theme.\nThis means that in both cases ",(0,a.kt)("strong",{parentName:"p"},"the type of these styles must be the same"),"."),(0,a.kt)("h5",{id:"example-1"},"Example 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const theme = {\n  Button: {\n    containerStyle: {\n      marginTop: 10;\n    }\n  }\n}\n\n<Button\n  containerStyle={{ backgroundColor: 'blue' }}\n/>\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u2705 Works"),(0,a.kt)("p",{parentName:"blockquote"},"In both cases the style is an ",(0,a.kt)("inlineCode",{parentName:"p"},"object"))),(0,a.kt)("br",null),(0,a.kt)("h5",{id:"example-2"},"Example 2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const theme = {\n  Button: {\n    containerStyle: [\n      {\n        marginTop: 10;\n      }\n    ]\n  }\n}\n\n<Button containerStyle={[{ backgroundColor: 'blue' }]} />\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u2705 Works"),(0,a.kt)("p",{parentName:"blockquote"},"In both cases the style is an ",(0,a.kt)("inlineCode",{parentName:"p"},"array"))),(0,a.kt)("br",null),(0,a.kt)("h5",{id:"example-3"},"Example 3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const theme = {\n  Button: {\n    containerStyle: {\n      marginTop: 10;\n    }\n  }\n}\n\n<Button containerStyle={[{ backgroundColor: 'blue' }]} />\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ud83d\udeab Doesn't work"),(0,a.kt)("p",{parentName:"blockquote"},"In one case the style is an ",(0,a.kt)("inlineCode",{parentName:"p"},"object")," and another the style is an ",(0,a.kt)("inlineCode",{parentName:"p"},"array"))))}h.isMDXComponent=!0}}]);