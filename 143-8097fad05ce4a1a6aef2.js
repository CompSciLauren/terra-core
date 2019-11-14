(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{2901:function(e,t,n){"use strict";n.r(t),t.default='# Test Component\nDisplays two strings of text separated by a comma\n\n## Usage\nUse with: `<TestComponent text="text" otherText="more text" />`'},2902:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),o=r(n(2903));function r(e){return e&&e.__esModule?e:{default:e}}var l=function(){return a.default.createElement(o.default,{text:"Hey",otherText:"Seeya"})};t.default=l},2903:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),o=r(n(2));function r(e){return e&&e.__esModule?e:{default:e}}var l={text:o.default.string,otherText:o.default.string},c=function(e){return a.default.createElement("p",null,e.text,","," ",e.otherText)};c.propTypes=l,c.defaultProps={text:"Hi!",otherText:"Bye."};var u=c;t.default=u},2904:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,o=(a=n(0))&&a.__esModule?a:{default:a};var r=function(){return o.default.createElement("table",null,o.default.createElement("thead",null,o.default.createElement("tr",null,o.default.createElement("th",null,"Prop Name"),o.default.createElement("th",null,"Type"),o.default.createElement("th",null,"Is Required"),o.default.createElement("th",null,"Default Value"),o.default.createElement("th",null,"Description"))),o.default.createElement("tbody",null,o.default.createElement("tr",null,o.default.createElement("td",null,"text"),o.default.createElement("td",null,"string"),o.default.createElement("td",null,"optional"),o.default.createElement("td",null,"null"),o.default.createElement("td",null,o.default.createElement("p",null,"A text string to be rendered in the component.")))))};t.default=r},2905:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport TestComponent from './TestComponent';\n\nconst TestComponentExample = () => (\n  <TestComponent text=\"Hey\" otherText=\"Seeya\" />\n);\n\nexport default TestComponentExample;\n"},2906:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\n\nconst propTypes = {\n  /**\n   * A string of text to be displayed first\n   */\n  text: PropTypes.string,\n  /**\n   * A string of text to be displayed second\n  */\n  otherText: PropTypes.string,\n};\n\nconst defaultProps = {\n  text: 'Hi!',\n  otherText: 'Bye.',\n};\n\nconst TestComponent = props => (\n  <p>\n    {props.text}\n,\n    {' '}\n    {props.otherText}\n  </p>\n);\n\nTestComponent.propTypes = propTypes;\nTestComponent.defaultProps = defaultProps;\n\nexport default TestComponent;\n"},3210:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),o=i(n(823)),r=i(n(2901)),l=n(958),c=i(n(2902)),u=i(n(2904)),s=i(n(2905)),d=i(n(2906));function i(e){return e&&e.__esModule?e:{default:e}}var p=function(){var e=[{componentSrc:d.default,componentName:"Test Component"},{componentSrc:d.default,componentName:"Test Component (Again)"}],t=a.default.createElement(c.default,null),n=[{title:"Test Example 1",description:"Describing the test",example:t,source:s.default},{title:"Test Example 2",description:"Describing the test mk. 2",example:t,source:s.default}];return a.default.createElement("div",{id:"DocTemplateContainer"},a.default.createElement(o.default,{packageName:l.name,packageVersion:l.version,readme:r.default,srcPath:"https://github.com/cerner/terra-core/tree/master/packages/terra-doc-template",propsTables:e,examples:n},a.default.createElement(u.default,null)))};t.default=p},821:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(0)),o=l(n(4)),r=l(n(822));function l(e){return e&&e.__esModule?e:{default:e}}var c=o.default.bind(r.default),u=function(e){var t=e.packageName,n=e.packageUrl,o=e.packageVersion;return o?a.default.createElement("div",{className:c("badge-container")},a.default.createElement("a",{className:c("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(o)},a.default.createElement("span",{className:c("badge-name")},n?"package":"npm"),a.default.createElement("span",{className:c("badge-version")},"v".concat(o)))):a.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(t)},a.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(t),alt:"NPM version"}))};t.default=u},822:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___1Cu7Z","badge-container":"NpmBadge-module__badge-container___2zgQi","badge-name":"NpmBadge-module__badge-name___17OzL","badge-version":"NpmBadge-module__badge-version___2Vkei"}},823:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),o=i(n(2)),r=i(n(829)),l=i(n(828)),c=i(n(4)),u=i(n(821)),s=i(n(824)),d=i(n(827));function i(e){return e&&e.__esModule?e:{default:e}}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=c.default.bind(d.default),g={children:o.default.node,packageName:o.default.string,packageUrl:o.default.string,packageVersion:o.default.string,readme:o.default.string,srcPath:o.default.string,examples:o.default.arrayOf(o.default.shape({title:o.default.string,description:o.default.node,example:o.default.element,source:o.default.string})),propsTables:o.default.arrayOf(o.default.shape({componentSrc:o.default.string,componentName:o.default.string,componentProps:o.default.string,propsResolution:o.default.string}))},b=function(e){var t,n=e.packageName,o=e.packageVersion,c=e.packageUrl,d=e.readme,i=e.srcPath,g=e.examples,b=e.propsTables,_=e.children,h=m(e,["packageName","packageVersion","packageUrl","readme","srcPath","examples","propsTables","children"]),y=g;b&&(t=b);for(var v=0,x=0;x<y.length;x+=1)y[x].id=v,v+=1;if(t)for(var E=0;E<t.length;E+=1)t[E].id=v,v+=1;var T,k=f(["doc-template",h.className]);if(y.length>0){var w=y.length>1?"Examples":"Example";T=a.default.createElement("h1",{className:f("examples-header")},w)}var j=a.default.createElement(u.default,{packageName:n,packageUrl:c,packageVersion:o});return a.default.createElement("div",p({},h,{className:k}),a.default.createElement("div",{className:f("doc-card")},n&&j,d&&a.default.createElement(l.default,{src:d}),i&&a.default.createElement("a",{href:i},"View component source code")),T,y.map((function(e){return a.default.createElement(s.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})})),a.default.createElement("div",{className:f("doc-card")},b[0]&&b[0].componentProps?t.map((function(e){return a.default.createElement("div",{className:f("props-table-markdown"),key:e.id},a.default.createElement("h2",null,e.componentName," Props"),a.default.createElement(l.default,{src:e.componentProps}))})):t.map((function(e){return a.default.createElement(r.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})}))),_&&a.default.createElement("div",{className:f("doc-card")},_))};b.propTypes=g,b.defaultProps={packageName:"",packageUrl:"",packageVersion:"",readme:"",srcPath:"",examples:[],propsTables:[]};var _=b;t.default=_},824:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(0)),r=i(n(2)),l=i(n(830)),c=i(n(831)),u=i(n(4)),s=i(n(825)),d=i(n(826));function i(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function g(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}l.default.registerLanguage("jsx",c.default);var y=u.default.bind(s.default),v={example:r.default.element,exampleSrc:r.default.string,title:r.default.string,description:r.default.node,children:r.default.element},x={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},E=function(e){function t(e){var n,a,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(o=b(t).call(this,e))||"object"!==p(o)&&"function"!=typeof o?_(a):o).state={isExpanded:!1,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(_(n)),n.handleCodeToggle=n.handleCodeToggle.bind(_(n)),n}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(a=[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.example,a=e.exampleSrc,r=e.children,c=e.description,u=f(e,["title","example","exampleSrc","children","description"]),s=this.state,i=s.isExpanded,p={};return s.isBackgroundTransparent&&(p={backgroundColor:"rgba(0, 0, 0, 0)"}),o.default.createElement("div",m({},u,{className:y("template",u.className)}),t&&o.default.createElement("div",{className:y("header")},o.default.createElement("h2",{className:y("title")},t)),o.default.createElement("div",{className:y("content"),style:p},c&&o.default.createElement("div",{className:y("description")},c),n,r),a&&o.default.createElement("div",{className:y("footer")},o.default.createElement("div",{className:y("button-container")},o.default.createElement("button",{type:"button",className:y("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),o.default.createElement("button",{type:"button",className:y("code-toggle"),onClick:this.handleCodeToggle},o.default.createElement("span",{className:y("chevron-left")}),o.default.createElement("span",null,"Code"),o.default.createElement("span",{className:y("chevron-right")}))),o.default.createElement("div",{className:y("code",{"is-expanded":i}),"aria-hidden":!i},i?o.default.createElement(l.default,{language:"jsx",style:d.default,customStyle:{margin:"0",borderRadius:"0"}},a):void 0)))}}])&&g(n.prototype,a),r&&g(n,r),t}(o.default.Component);E.propTypes=v,E.defaultProps=x;var T=E;t.default=T},825:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},826:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a="#D8DEE9",o="#B2B2B2",r="#c5a5c5",l="#5a9bcf",c="#8dc891",u="#d7deea",s="#FAC863",d={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:r},comment:{color:o},"block-comment":{color:o},prolog:{color:o},doctype:{color:o},cdata:{color:o},property:{color:l},number:{color:l},"function-name":{color:l},constant:{color:l},symbol:{color:l},deleted:{color:l},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:c},punctuation:{color:"#88C6BE"},selector:{color:a},char:{color:a},builtin:{color:a},inserted:{color:a},function:{color:"#79b6f2"},operator:{color:u},entity:{color:u,cursor:"help"},url:{color:u},".language-css .token.string":{color:u},".style .token.string":{color:u},variable:{color:u},"attr-value":{color:c},keyword:{color:r},"at-rule":{color:s},"class-name":{color:s},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};t.default=d},827:function(e,t,n){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe","props-table-markdown":"DocTemplate-module__props-table-markdown___1926W"}},958:function(e){e.exports=JSON.parse('{"name":"terra-doc-template","main":"lib/DocTemplate.js","version":"2.21.0","description":"Provides an adjustable template for documentation pages.","repository":{"type":"git","url":"git+https://github.com/cerner/terra-core.git"},"keywords":["Cerner","Terra","terra-doc-template","DocTemplate","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-core/issues"},"homepage":"https://github.com/cerner/terra-core#readme","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5"},"dependencies":{"classnames":"^2.2.5","prop-types":"^15.5.8","react-syntax-highlighter":"^11.0.0","terra-markdown":"^2.35.0","terra-props-table":"^2.42.0"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio":"cd ../.. && npx wdio ./packages/$npm_package_name/wdio.conf.js"}}')}}]);
//# sourceMappingURL=143-8097fad05ce4a1a6aef2.js.map