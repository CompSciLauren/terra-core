(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{2687:function(e,t,r){"use strict";r.r(t),t.default="# Terra Section Header Upgrade Guide\n\n## Changes from version 1 to version 2\n\n### Changes to CSS Custom Properties\n\n#### Renamed\n| Previous | New |\n|-|-|\n| --terra-transparent-section-header-hover-background | --terra-section-header-transparent-hover-background |\n| --terra-transparent-section-header-hover-border-bottom | --terra-section-header-transparent-hover-border-bottom |\n| --terra-transparent-section-header-hover-border-left | --terra-section-header-transparent-hover-border-left |\n| --terra-transparent-section-header-hover-border-right | --terra-section-header-transparent-hover-border-right |\n| --terra-transparent-section-header-hover-border-top | --terra-section-header-transparent-hover-border-top |\n| --terra-transparent-section-header-hover-box-shadow | --terra-section-header-transparent-hover-box-shadow |\n| --terra-transparent-section-header-hover-color | --terra-section-header-transparent-hover-color |\n| --terra-transparent-section-header-focus-background | --terra-section-header-transparent-focus-background |\n| --terra-transparent-section-header-focus-border-bottom | --terra-section-header-transparent-focus-border-bottom |\n| --terra-transparent-section-header-focus-border-left | --terra-section-header-transparent-focus-border-left |\n| --terra-transparent-section-header-focus-border-right | --terra-section-header-transparent-focus-border-right |\n| --terra-transparent-section-header-focus-border-top | --terra-section-header-transparent-focus-border-top |\n| --terra-transparent-section-header-focus-box-shadow | --terra-section-header-transparent-focus-box-shadow |\n| --terra-transparent-section-header-focus-color | --terra-section-header-transparent-focus-color |\n| --terra-transparent-section-header-active-background | --terra-section-header-transparent-active-background |\n| --terra-transparent-section-header-active-border-bottom | --terra-section-header-transparent-active-border-bottom |\n| --terra-transparent-section-header-active-border-left | --terra-section-header-transparent-active-border-left |\n| --terra-transparent-section-header-active-border-right | --terra-section-header-transparent-active-border-right |\n| --terra-transparent-section-header-active-border-top | --terra-section-header-transparent-active-border-top |\n| --terra-transparent-section-header-active-box-shadow | --terra-section-header-transparent-active-box-shadow |\n| --terra-transparent-section-header-active-color | --terra-section-header-transparent-active-color |\n| --terra-section-header-accordion-icon | --terra-section-header-accordion-icon-background |\n\n#### Added\n* --terra-section-header-accordion-icon-height\n* --terra-section-header-accordion-icon-width\n"},3070:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(r(0)),n=l(r(823)),o=l(r(2687));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(){return a.default.createElement(n.default,{packageName:"terra-section-header",srcPath:"https://github.com/cerner/terra-core/tree/master/packages/terra-section-header",readme:o.default})};t.default=c},821:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(r(0)),n=l(r(4)),o=l(r(822));function l(e){return e&&e.__esModule?e:{default:e}}var c=n.default.bind(o.default),d=function(e){var t=e.packageName,r=e.packageUrl,n=e.packageVersion;return n?a.default.createElement("div",{className:c("badge-container")},a.default.createElement("a",{className:c("badge"),href:r||"https://www.npmjs.org/package/".concat(t,"/v/").concat(n)},a.default.createElement("span",{className:c("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:c("badge-version")},"v".concat(n)))):a.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(t)},a.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(t),alt:"NPM version"}))};t.default=d},822:function(e,t,r){e.exports={badge:"NpmBadge-module__badge___1Cu7Z","badge-container":"NpmBadge-module__badge-container___2zgQi","badge-name":"NpmBadge-module__badge-name___17OzL","badge-version":"NpmBadge-module__badge-version___2Vkei"}},823:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(r(0)),n=u(r(2)),o=u(r(829)),l=u(r(828)),c=u(r(4)),d=u(r(821)),s=u(r(824)),i=u(r(827));function u(e){return e&&e.__esModule?e:{default:e}}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=c.default.bind(i.default),h={children:n.default.node,packageName:n.default.string,packageUrl:n.default.string,packageVersion:n.default.string,readme:n.default.string,srcPath:n.default.string,examples:n.default.arrayOf(n.default.shape({title:n.default.string,description:n.default.node,example:n.default.element,source:n.default.string})),propsTables:n.default.arrayOf(n.default.shape({componentSrc:n.default.string,componentName:n.default.string,componentProps:n.default.string,propsResolution:n.default.string}))},g=function(e){var t,r=e.packageName,n=e.packageVersion,c=e.packageUrl,i=e.readme,u=e.srcPath,h=e.examples,g=e.propsTables,b=e.children,_=f(e,["packageName","packageVersion","packageUrl","readme","srcPath","examples","propsTables","children"]),v=h;g&&(t=g);for(var y=0,E=0;E<v.length;E+=1)v[E].id=y,y+=1;if(t)for(var x=0;x<t.length;x+=1)t[x].id=y,y+=1;var k,w=m(["doc-template",_.className]);if(v.length>0){var S=v.length>1?"Examples":"Example";k=a.default.createElement("h1",{className:m("examples-header")},S)}var T=a.default.createElement(d.default,{packageName:r,packageUrl:c,packageVersion:n});return a.default.createElement("div",p({},_,{className:w}),a.default.createElement("div",{className:m("doc-card")},r&&T,i&&a.default.createElement(l.default,{src:i}),u&&a.default.createElement("a",{href:u},"View component source code")),k,v.map((function(e){return a.default.createElement(s.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})})),a.default.createElement("div",{className:m("doc-card")},g[0]&&g[0].componentProps?t.map((function(e){return a.default.createElement("div",{className:m("props-table-markdown"),key:e.id},a.default.createElement("h2",null,e.componentName," Props"),a.default.createElement(l.default,{src:e.componentProps}))})):t.map((function(e){return a.default.createElement(o.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})}))),b&&a.default.createElement("div",{className:m("doc-card")},b))};g.propTypes=h,g.defaultProps={packageName:"",packageUrl:"",packageVersion:"",readme:"",srcPath:"",examples:[],propsTables:[]};var b=g;t.default=b},824:function(e,t,r){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r(0)),o=u(r(2)),l=u(r(830)),c=u(r(831)),d=u(r(4)),s=u(r(825)),i=u(r(826));function u(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function h(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}l.default.registerLanguage("jsx",c.default);var v=d.default.bind(s.default),y={example:o.default.element,exampleSrc:o.default.string,title:o.default.string,description:o.default.node,children:o.default.element},E={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},x=function(e){function t(e){var r,a,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(r=!(n=g(t).call(this,e))||"object"!==p(n)&&"function"!=typeof n?b(a):n).state={isExpanded:!1,isBackgroundTransparent:!1},r.handleBgToggle=r.handleBgToggle.bind(b(r)),r.handleCodeToggle=r.handleCodeToggle.bind(b(r)),r}var r,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,e),r=t,(a=[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,t=e.title,r=e.example,a=e.exampleSrc,o=e.children,c=e.description,d=m(e,["title","example","exampleSrc","children","description"]),s=this.state,u=s.isExpanded,p={};return s.isBackgroundTransparent&&(p={backgroundColor:"rgba(0, 0, 0, 0)"}),n.default.createElement("div",f({},d,{className:v("template",d.className)}),t&&n.default.createElement("div",{className:v("header")},n.default.createElement("h2",{className:v("title")},t)),n.default.createElement("div",{className:v("content"),style:p},c&&n.default.createElement("div",{className:v("description")},c),r,o),a&&n.default.createElement("div",{className:v("footer")},n.default.createElement("div",{className:v("button-container")},n.default.createElement("button",{type:"button",className:v("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),n.default.createElement("button",{type:"button",className:v("code-toggle"),onClick:this.handleCodeToggle},n.default.createElement("span",{className:v("chevron-left")}),n.default.createElement("span",null,"Code"),n.default.createElement("span",{className:v("chevron-right")}))),n.default.createElement("div",{className:v("code",{"is-expanded":u}),"aria-hidden":!u},u?n.default.createElement(l.default,{language:"jsx",style:i.default,customStyle:{margin:"0",borderRadius:"0"}},a):void 0)))}}])&&h(r.prototype,a),o&&h(r,o),t}(n.default.Component);x.propTypes=y,x.defaultProps=E;var k=x;t.default=k},825:function(e,t,r){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},826:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a="#D8DEE9",n="#B2B2B2",o="#c5a5c5",l="#5a9bcf",c="#8dc891",d="#d7deea",s="#FAC863",i={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:o},comment:{color:n},"block-comment":{color:n},prolog:{color:n},doctype:{color:n},cdata:{color:n},property:{color:l},number:{color:l},"function-name":{color:l},constant:{color:l},symbol:{color:l},deleted:{color:l},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:c},punctuation:{color:"#88C6BE"},selector:{color:a},char:{color:a},builtin:{color:a},inserted:{color:a},function:{color:"#79b6f2"},operator:{color:d},entity:{color:d,cursor:"help"},url:{color:d},".language-css .token.string":{color:d},".style .token.string":{color:d},variable:{color:d},"attr-value":{color:c},keyword:{color:o},"at-rule":{color:s},"class-name":{color:s},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};t.default=i},827:function(e,t,r){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe","props-table-markdown":"DocTemplate-module__props-table-markdown___1926W"}}}]);
//# sourceMappingURL=216-c9b3ec1037db8da7c6e1.js.map