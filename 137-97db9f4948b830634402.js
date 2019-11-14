(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{1429:function(e,t,a){e.exports=a.p+"87ec563ff16c288f58b0747d553762d6.jpg"},2592:function(e,t,a){"use strict";a.r(t),t.default="# Terra Profile Image\n\nThe terra-profile-image component displays an avatar image while the profile image is being loaded. If the profile image successfully loads, the avatar image is replaced with the profile image. Otherwise, the avatar image is left as is. All styling set on the profile image will be applied to the avatar image.\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-profile-image`\n  - `yarn add terra-profile-image`\n\n\x3c!-- AUTO-GENERATED-CONTENT:START Peer Dependencies --\x3e\n## Peer Dependencies\n\nThis component requires the following peer dependencies be installed in your app for the component to properly function.\n\n| Peer Dependency | Version |\n|-|-|\n| react | ^16.8.5 |\n| react-dom | ^16.8.5 |\n\n\n\n\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n## Usage\n\n```jsx\nimport React from 'react';\nimport ProfileImage from 'terra-profile-image';\n\n<ProfileImage\n  src='https://path/to/image.jpg' width=\"75\" height=\"75\" />}\n/>\n```\n"},2593:function(e){e.exports=JSON.parse('{"name":"terra-profile-image","main":"lib/ProfileImage.js","version":"3.21.0","description":"The terra-profile-image component displays an avatar image while the profile image is being loaded. If the profile image successfully loads, the avatar image is replaced with the profile image. Otherwise, the avatar image is left as is. All styling set on the profile image will be applied to the avatar image.","repository":{"type":"git","url":"git+https://github.com/cerner/terra-core.git"},"keywords":["Cerner","Terra","terra-profile-image","ProfileImage","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-core/issues"},"homepage":"https://github.com/cerner/terra-core#readme","scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio":"cd ../.. && npx wdio ./packages/$npm_package_name/wdio.conf.js"},"peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5"},"dependencies":{"classnames":"^2.2.5","prop-types":"^15.5.8","terra-doc-template":"^2.21.0","terra-image":"^3.20.0","terra-mixins":"^1.33.0"}}')},2594:function(e,t){e.exports='<table style="display: table; margin-bottom: 1.25rem"><thead><tr style="line-height: 1.5"><th style="width: 10%">Prop Name</th><th style="width: 25%">Type</th><th style="width: 10%">Is Required</th><th style="width: 10%">Default Value</th><th style="width: 45%">Description</th></tr></thead><tbody><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">src</td><td style="padding-bottom: 1.8rem">string</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">The source for the image which will be displayed.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">alt</td><td style="padding-bottom: 1.8rem">string</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">The text content that specifies an alternative text for an image.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">height</td><td style="padding-bottom: 1.8rem">string</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">Sets the height of the image.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">width</td><td style="padding-bottom: 1.8rem">string</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">Sets the width of the image.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">onLoad</td><td style="padding-bottom: 1.8rem">func</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">Function to be executed when the profile image load is successful.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">onError</td><td style="padding-bottom: 1.8rem">func</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">Function to be executed when the profile image load errors.</td></tr></tbody></table>'},2595:function(e,t,a){"use strict";a.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport TerraImage from 'terra-image';\nimport styles from './ProfileImage.module.scss';\n\nconst cx = classNames.bind(styles);\n\n/* eslint react/no-unused-prop-types: [0] */\nconst propTypes = {\n  /**\n   * The source for the image which will be displayed.\n   */\n  src: PropTypes.string,\n  /**\n   * The text content that specifies an alternative text for an image.\n   */\n  alt: PropTypes.string,\n  /**\n   * Sets the height of the image.\n   */\n  height: PropTypes.string,\n  /**\n   * Sets the width of the image.\n   */\n  width: PropTypes.string,\n  /**\n   * Function to be executed when the profile image load is successful.\n   */\n  onLoad: PropTypes.func,\n  /**\n   * Function to be executed when the profile image load errors.\n   */\n  onError: PropTypes.func,\n};\n\nconst isOnlyNumbers = toTest => !(/\\D/).test(toTest);\n\nconst ProfileImage = (props) => {\n  // img tags assume a height attribute of only numbers is in px but CSS does not\n  const fixedHeight = isOnlyNumbers(props.height) ? `${props.height}px` : props.height;\n  const fixedWidth = isOnlyNumbers(props.width) ? `${props.width}px` : props.width;\n\n  /* eslint-disable react/forbid-dom-props */\n  const placeholderImage = (\n    <span\n      className={cx('placeholder-images')}\n      title={props.alt}\n      style={{ height: fixedHeight, width: fixedWidth }}\n    />\n  );\n  /* eslint-enable react/forbid-dom-props */\n\n  if (props.src) {\n    return (<div><TerraImage placeholder={placeholderImage} fit=\"cover\" {...props} /></div>);\n  }\n  return placeholderImage;\n};\n\nProfileImage.propTypes = propTypes;\n\nexport default ProfileImage;\n"},2596:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),o=l(a(985)),r=l(a(1429));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(){return n.default.createElement("div",null,n.default.createElement("h2",null,"Successful Profile Image"),n.default.createElement(o.default,{alt:"profile image",src:r.default,width:"75",height:"75"}),n.default.createElement("br",null),n.default.createElement("h2",null,"Failed Profile Image"),n.default.createElement(o.default,{alt:"profile image",src:"invalid.jpg",width:"75",height:"75"}))};t.default=i},2597:function(e,t,a){"use strict";a.r(t),t.default='import React from \'react\';\nimport ProfileImage from \'terra-profile-image\';\nimport exampleProfileImage from \'terra-profile-image/lib/terra-dev-site/doc/example/150x150.jpg\';\n\nconst ProfileImageDefault = () => (\n  <div>\n    <h2>Successful Profile Image</h2>\n    <ProfileImage alt="profile image" src={exampleProfileImage} width="75" height="75" />\n    <br />\n    <h2>Failed Profile Image</h2>\n    <ProfileImage alt="profile image" src="invalid.jpg" width="75" height="75" />\n  </div>\n);\n\nexport default ProfileImageDefault;\n'},3056:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=p(a(0)),o=p(a(823)),r=p(a(2592)),l=a(2593),i=p(a(2594)),d=p(a(2595)),s=p(a(2596)),c=p(a(2597));function p(e){return e&&e.__esModule?e:{default:e}}var m=function(){return n.default.createElement(o.default,{packageName:l.name,packageVersion:l.version,readme:r.default,srcPath:"https://github.com/cerner/terra-core/tree/master/packages/".concat(l.name),examples:[{title:"Default Profile Image",example:n.default.createElement(s.default,null),source:c.default}],propsTables:[{componentName:"Profile Image",componentSrc:d.default,componentProps:i.default}]})};t.default=m},821:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),o=l(a(4)),r=l(a(822));function l(e){return e&&e.__esModule?e:{default:e}}var i=o.default.bind(r.default),d=function(e){var t=e.packageName,a=e.packageUrl,o=e.packageVersion;return o?n.default.createElement("div",{className:i("badge-container")},n.default.createElement("a",{className:i("badge"),href:a||"https://www.npmjs.org/package/".concat(t,"/v/").concat(o)},n.default.createElement("span",{className:i("badge-name")},a?"package":"npm"),n.default.createElement("span",{className:i("badge-version")},"v".concat(o)))):n.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(t)},n.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(t),alt:"NPM version"}))};t.default=d},822:function(e,t,a){e.exports={badge:"NpmBadge-module__badge___1Cu7Z","badge-container":"NpmBadge-module__badge-container___2zgQi","badge-name":"NpmBadge-module__badge-name___17OzL","badge-version":"NpmBadge-module__badge-version___2Vkei"}},823:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=p(a(0)),o=p(a(2)),r=p(a(829)),l=p(a(828)),i=p(a(4)),d=p(a(821)),s=p(a(824)),c=p(a(827));function p(e){return e&&e.__esModule?e:{default:e}}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var f=i.default.bind(c.default),g={children:o.default.node,packageName:o.default.string,packageUrl:o.default.string,packageVersion:o.default.string,readme:o.default.string,srcPath:o.default.string,examples:o.default.arrayOf(o.default.shape({title:o.default.string,description:o.default.node,example:o.default.element,source:o.default.string})),propsTables:o.default.arrayOf(o.default.shape({componentSrc:o.default.string,componentName:o.default.string,componentProps:o.default.string,propsResolution:o.default.string}))},h=function(e){var t,a=e.packageName,o=e.packageVersion,i=e.packageUrl,c=e.readme,p=e.srcPath,g=e.examples,h=e.propsTables,b=e.children,y=u(e,["packageName","packageVersion","packageUrl","readme","srcPath","examples","propsTables","children"]),_=g;h&&(t=h);for(var v=0,w=0;w<_.length;w+=1)_[w].id=v,v+=1;if(t)for(var x=0;x<t.length;x+=1)t[x].id=v,v+=1;var E,T=f(["doc-template",y.className]);if(_.length>0){var P=_.length>1?"Examples":"Example";E=n.default.createElement("h1",{className:f("examples-header")},P)}var k=n.default.createElement(d.default,{packageName:a,packageUrl:i,packageVersion:o});return n.default.createElement("div",m({},y,{className:T}),n.default.createElement("div",{className:f("doc-card")},a&&k,c&&n.default.createElement(l.default,{src:c}),p&&n.default.createElement("a",{href:p},"View component source code")),E,_.map((function(e){return n.default.createElement(s.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})})),n.default.createElement("div",{className:f("doc-card")},h[0]&&h[0].componentProps?t.map((function(e){return n.default.createElement("div",{className:f("props-table-markdown"),key:e.id},n.default.createElement("h2",null,e.componentName," Props"),n.default.createElement(l.default,{src:e.componentProps}))})):t.map((function(e){return n.default.createElement(r.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})}))),b&&n.default.createElement("div",{className:f("doc-card")},b))};h.propTypes=g,h.defaultProps={packageName:"",packageUrl:"",packageVersion:"",readme:"",srcPath:"",examples:[],propsTables:[]};var b=h;t.default=b},824:function(e,t,a){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=p(a(0)),r=p(a(2)),l=p(a(830)),i=p(a(831)),d=p(a(4)),s=p(a(825)),c=p(a(826));function p(e){return e&&e.__esModule?e:{default:e}}function m(e){return(m="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return n(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}function g(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}l.default.registerLanguage("jsx",i.default);var _=d.default.bind(s.default),v={example:r.default.element,exampleSrc:r.default.string,title:r.default.string,description:r.default.node,children:r.default.element},w={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},x=function(e){function t(e){var a,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(a=!(o=h(t).call(this,e))||"object"!==m(o)&&"function"!=typeof o?b(n):o).state={isExpanded:!1,isBackgroundTransparent:!1},a.handleBgToggle=a.handleBgToggle.bind(b(a)),a.handleCodeToggle=a.handleCodeToggle.bind(b(a)),a}var a,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),a=t,(n=[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,t=e.title,a=e.example,n=e.exampleSrc,r=e.children,i=e.description,d=f(e,["title","example","exampleSrc","children","description"]),s=this.state,p=s.isExpanded,m={};return s.isBackgroundTransparent&&(m={backgroundColor:"rgba(0, 0, 0, 0)"}),o.default.createElement("div",u({},d,{className:_("template",d.className)}),t&&o.default.createElement("div",{className:_("header")},o.default.createElement("h2",{className:_("title")},t)),o.default.createElement("div",{className:_("content"),style:m},i&&o.default.createElement("div",{className:_("description")},i),a,r),n&&o.default.createElement("div",{className:_("footer")},o.default.createElement("div",{className:_("button-container")},o.default.createElement("button",{type:"button",className:_("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),o.default.createElement("button",{type:"button",className:_("code-toggle"),onClick:this.handleCodeToggle},o.default.createElement("span",{className:_("chevron-left")}),o.default.createElement("span",null,"Code"),o.default.createElement("span",{className:_("chevron-right")}))),o.default.createElement("div",{className:_("code",{"is-expanded":p}),"aria-hidden":!p},p?o.default.createElement(l.default,{language:"jsx",style:c.default,customStyle:{margin:"0",borderRadius:"0"}},n):void 0)))}}])&&g(a.prototype,n),r&&g(a,r),t}(o.default.Component);x.propTypes=v,x.defaultProps=w;var E=x;t.default=E},825:function(e,t,a){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},826:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="#D8DEE9",o="#B2B2B2",r="#c5a5c5",l="#5a9bcf",i="#8dc891",d="#d7deea",s="#FAC863",c={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:r},comment:{color:o},"block-comment":{color:o},prolog:{color:o},doctype:{color:o},cdata:{color:o},property:{color:l},number:{color:l},"function-name":{color:l},constant:{color:l},symbol:{color:l},deleted:{color:l},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:i},punctuation:{color:"#88C6BE"},selector:{color:n},char:{color:n},builtin:{color:n},inserted:{color:n},function:{color:"#79b6f2"},operator:{color:d},entity:{color:d,cursor:"help"},url:{color:d},".language-css .token.string":{color:d},".style .token.string":{color:d},variable:{color:d},"attr-value":{color:i},keyword:{color:r},"at-rule":{color:s},"class-name":{color:s},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};t.default=c},827:function(e,t,a){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe","props-table-markdown":"DocTemplate-module__props-table-markdown___1926W"}},985:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(a(0)),o=d(a(2)),r=d(a(4)),l=d(a(171)),i=d(a(986));function d(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var c=r.default.bind(i.default),p={src:o.default.string,alt:o.default.string,height:o.default.string,width:o.default.string,onLoad:o.default.func,onError:o.default.func},m=function(e){return!/\D/.test(e)},u=function(e){var t=m(e.height)?"".concat(e.height,"px"):e.height,a=m(e.width)?"".concat(e.width,"px"):e.width,o=n.default.createElement("span",{className:c("placeholder-images"),title:e.alt,style:{height:t,width:a}});return e.src?n.default.createElement("div",null,n.default.createElement(l.default,s({placeholder:o,fit:"cover"},e))):o};u.propTypes=p;var f=u;t.default=f},986:function(e,t,a){e.exports={"placeholder-images":"ProfileImage-module__placeholder-images___DttyW"}}}]);
//# sourceMappingURL=137-97db9f4948b830634402.js.map