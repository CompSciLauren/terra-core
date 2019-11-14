(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{1039:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(0)),o=d(n(2)),a=d(n(4)),l=d(n(1040));function d(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.default.bind(l.default),u={children:o.default.node,help:o.default.node,legend:o.default.string,legendAttrs:o.default.object,required:o.default.bool,isLegendHidden:o.default.bool},p=function(e){var t=e.children,n=e.help,o=e.legend,a=e.legendAttrs,l=e.isLegendHidden,d=e.required,u=s(e,["children","help","legend","legendAttrs","isLegendHidden","required"]),p=c(["fieldset",{"fieldset-required":d},u.className]),m=c(["legend",a.className,{"legend-visually-hidden":l}]);return r.default.createElement("fieldset",i({},u,{className:p}),o&&r.default.createElement("legend",i({},a,{className:m}),o),n&&r.default.createElement("small",{className:c("help-text"),tabIndex:"-1"},n),r.default.createElement("div",{className:c("fieldset-children")},t))};p.propTypes=u,p.defaultProps={legendAttrs:{},required:!1,isLegendHidden:!1};var m=p;t.default=m},1040:function(e,t,n){e.exports={fieldset:"Fieldset-module__fieldset___QRtAv","fieldset-required":"Fieldset-module__fieldset-required___YM_28",legend:"Fieldset-module__legend___2fbSJ","legend-visually-hidden":"Fieldset-module__legend-visually-hidden___3tERW","help-text":"Fieldset-module__help-text___3_p45","fieldset-children":"Fieldset-module__fieldset-children___VKKPH"}},2098:function(e,t,n){"use strict";n.r(t),t.default="# Terra Form Fieldset\n\nGeneric form fieldset component which handles the layout of a standard form fieldset including help text, legend, value and widget placement.\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-form-fieldset`\n\n\x3c!-- AUTO-GENERATED-CONTENT:START Peer Dependencies --\x3e\n## Peer Dependencies\n\nThis component requires the following peer dependencies be installed in your app for the component to properly function.\n\n| Peer Dependency | Version |\n|-|-|\n| react | ^16.8.5 |\n| react-dom | ^16.8.5 |\n| react-intl | ^2.8.0 |\n\n\n\n\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n## Usage\n\n```jsx\nimport React from 'react';\nimport Fieldset from 'terra-form-fieldset/lib/Fieldset';\n\n<Fieldset\n  legend=\"Do you have any Children?\"\n  legendAttrs={{ className: 'healtheintent-application' }}\n  help=\"Families are eligible for family package plans\"\n  required\n  isInline\n >\n   {this.props.children}\n</Fieldset>\n```\n\n## Component Features\n\n * [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)\n * [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)\n * [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)\n * [Internationalization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)\n * [Localization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)\n * [LTR/RTL Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#ltr--rtl-support)\n"},2099:function(e){e.exports=JSON.parse('{"name":"terra-form-fieldset","main":"lib/Fieldset.js","version":"2.32.0","description":"Generic form fieldset component which handles the layout of a standard form fieldset including help text, legend, value and widget placement.","repository":{"type":"git","url":"git+https://github.com/cerner/terra-core.git"},"keywords":["Cerner","Terra","terra-form-fieldset","Fieldset","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-core/issues"},"homepage":"https://github.com/cerner/terra-core#readme","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5","react-intl":"^2.8.0"},"dependencies":{"classnames":"^2.2.5","prop-types":"^15.5.8","terra-doc-template":"^2.21.0","terra-form-field":"^3.29.0","terra-form-input":"^2.31.0"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio":"cd ../.. && npx wdio ./packages/$npm_package_name/wdio.conf.js"}}')},2100:function(e,t){e.exports='<table style="display: table; margin-bottom: 1.25rem"><thead><tr style="line-height: 1.5"><th style="width: 10%">Prop Name</th><th style="width: 25%">Type</th><th style="width: 10%">Is Required</th><th style="width: 10%">Default Value</th><th style="width: 45%">Description</th></tr></thead><tbody><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">children</td><td style="padding-bottom: 1.8rem">node</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">Children the Field contains.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">help</td><td style="padding-bottom: 1.8rem">node</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">Help element to display with other elements.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">legend</td><td style="padding-bottom: 1.8rem">string</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">Legend for the input group.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">legendAttrs</td><td style="padding-bottom: 1.8rem">object</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">{}</td><td style="padding-bottom: 1.8rem">Attributes to attach to the legend.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">required</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Determines whether the fieldset is required.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">isLegendHidden</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether or not the legend is visible. Use this prop to hide a legend while still creating it on the DOM for accessibility.</td></tr></tbody></table>'},2101:function(e,t,n){"use strict";n.r(t),t.default="/* eslint-disable react/jsx-boolean-value, jsx-a11y/label-has-for */\nimport React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport styles from './Fieldset.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst propTypes = {\n  /**\n   * Children the Field contains.\n   */\n  children: PropTypes.node,\n  /**\n   * Help element to display with other elements.\n   */\n  help: PropTypes.node,\n  /**\n   * Legend for the input group.\n   */\n  legend: PropTypes.string,\n  /**\n   * Attributes to attach to the legend.\n   */\n  // eslint-disable-next-line react/forbid-prop-types\n  legendAttrs: PropTypes.object,\n  /**\n   * Determines whether the fieldset is required.\n   */\n  required: PropTypes.bool,\n  /**\n   * Whether or not the legend is visible. Use this prop to hide a legend while still creating it on the DOM for accessibility.\n   */\n  isLegendHidden: PropTypes.bool,\n};\n\nconst defaultProps = {\n  legendAttrs: {},\n  required: false,\n  isLegendHidden: false,\n};\n\nconst Fieldset = ({\n  children, help, legend, legendAttrs, isLegendHidden, required, ...customProps\n}) => {\n  const fieldsetClasses = cx([\n    'fieldset',\n    { 'fieldset-required': required },\n    customProps.className,\n  ]);\n\n  const legendClasses = cx([\n    'legend',\n    legendAttrs.className,\n    { 'legend-visually-hidden': isLegendHidden },\n  ]);\n\n  return (\n    <fieldset {...customProps} className={fieldsetClasses}>\n      {legend && <legend {...legendAttrs} className={legendClasses}>{legend}</legend>}\n      {help && <small className={cx('help-text')} tabIndex=\"-1\">{help}</small>}\n      <div className={cx('fieldset-children')}>\n        {children}\n      </div>\n    </fieldset>\n  );\n};\n\nFieldset.propTypes = propTypes;\nFieldset.defaultProps = defaultProps;\n\nexport default Fieldset;\n"},2102:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(n(0)),a=c(n(267)),l=c(n(269)),d=c(n(1039)),i=c(n(4)),s=c(n(2103));function c(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=i.default.bind(s.default),b=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=m(t).call(this,e))||"object"!==u(o)&&"function"!=typeof o?f(r):o).state={first:"",middle:"",last:""},n.handleFirstChange=n.handleFirstChange.bind(f(n)),n.handleMiddleChange=n.handleMiddleChange.bind(f(n)),n.handleLastChange=n.handleLastChange.bind(f(n)),n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,e),n=t,(r=[{key:"handleFirstChange",value:function(e){this.setState({first:e.target.value})}},{key:"handleMiddleChange",value:function(e){this.setState({middle:e.target.value})}},{key:"handleLastChange",value:function(e){this.setState({last:e.target.value})}},{key:"render",value:function(){return o.default.createElement("div",null,o.default.createElement(d.default,{type:"checkbox",legend:"Give your full name here",name:"children_present",value:"children_present",error:"All fields must be filled out",help:"Families are eligible for family package plans",required:!0},o.default.createElement(a.default,{label:"First",isInline:!0,required:!0,htmlFor:"first"},o.default.createElement(l.default,{id:"first",type:"text",name:"first",defaultValue:"",onChange:this.handleFirstChange})),o.default.createElement(a.default,{label:"Middle",isInline:!0,required:!0,htmlFor:"middle"},o.default.createElement(l.default,{id:"middle",type:"text",name:"middle",defaultValue:"",onChange:this.handleMiddleChange})),o.default.createElement(a.default,{label:"Last",isInline:!0,required:!0,htmlFor:"last"},o.default.createElement(l.default,{id:"last",type:"text",name:"last",defaultValue:"",onChange:this.handleLastChange}))),o.default.createElement("hr",null),o.default.createElement("p",null,"Full Name Provided:",o.default.createElement("span",{className:h("fieldset-wrapper")},this.state.first," ",this.state.middle," ",this.state.last)),o.default.createElement("br",null))}}])&&p(n.prototype,r),i&&p(n,i),t}(o.default.Component);t.default=b},2103:function(e,t,n){e.exports={"fieldset-wrapper":"FieldsetExamples-module__fieldset-wrapper___3xp3J"}},2988:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),o=c(n(823)),a=c(n(2098)),l=n(2099),d=c(n(2100)),i=c(n(2101)),s=c(n(2102));function c(e){return e&&e.__esModule?e:{default:e}}var u=function(){return r.default.createElement(o.default,{packageName:l.name,packageVersion:l.version,readme:a.default,srcPath:"https://github.com/cerner/terra-core/tree/master/packages/".concat(l.name),examples:[{example:r.default.createElement(s.default,null)}],propsTables:[{componentName:"Form Fieldset",componentSrc:i.default,componentProps:d.default}]})};t.default=u},821:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(0)),o=l(n(4)),a=l(n(822));function l(e){return e&&e.__esModule?e:{default:e}}var d=o.default.bind(a.default),i=function(e){var t=e.packageName,n=e.packageUrl,o=e.packageVersion;return o?r.default.createElement("div",{className:d("badge-container")},r.default.createElement("a",{className:d("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(o)},r.default.createElement("span",{className:d("badge-name")},n?"package":"npm"),r.default.createElement("span",{className:d("badge-version")},"v".concat(o)))):r.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(t)},r.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(t),alt:"NPM version"}))};t.default=i},822:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___1Cu7Z","badge-container":"NpmBadge-module__badge-container___2zgQi","badge-name":"NpmBadge-module__badge-name___17OzL","badge-version":"NpmBadge-module__badge-version___2Vkei"}},823:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(0)),o=u(n(2)),a=u(n(829)),l=u(n(828)),d=u(n(4)),i=u(n(821)),s=u(n(824)),c=u(n(827));function u(e){return e&&e.__esModule?e:{default:e}}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=d.default.bind(c.default),g={children:o.default.node,packageName:o.default.string,packageUrl:o.default.string,packageVersion:o.default.string,readme:o.default.string,srcPath:o.default.string,examples:o.default.arrayOf(o.default.shape({title:o.default.string,description:o.default.node,example:o.default.element,source:o.default.string})),propsTables:o.default.arrayOf(o.default.shape({componentSrc:o.default.string,componentName:o.default.string,componentProps:o.default.string,propsResolution:o.default.string}))},h=function(e){var t,n=e.packageName,o=e.packageVersion,d=e.packageUrl,c=e.readme,u=e.srcPath,g=e.examples,h=e.propsTables,b=e.children,y=m(e,["packageName","packageVersion","packageUrl","readme","srcPath","examples","propsTables","children"]),_=g;h&&(t=h);for(var v=0,x=0;x<_.length;x+=1)_[x].id=v,v+=1;if(t)for(var E=0;E<t.length;E+=1)t[E].id=v,v+=1;var w,S=f(["doc-template",y.className]);if(_.length>0){var O=_.length>1?"Examples":"Example";w=r.default.createElement("h1",{className:f("examples-header")},O)}var T=r.default.createElement(i.default,{packageName:n,packageUrl:d,packageVersion:o});return r.default.createElement("div",p({},y,{className:S}),r.default.createElement("div",{className:f("doc-card")},n&&T,c&&r.default.createElement(l.default,{src:c}),u&&r.default.createElement("a",{href:u},"View component source code")),w,_.map((function(e){return r.default.createElement(s.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})})),r.default.createElement("div",{className:f("doc-card")},h[0]&&h[0].componentProps?t.map((function(e){return r.default.createElement("div",{className:f("props-table-markdown"),key:e.id},r.default.createElement("h2",null,e.componentName," Props"),r.default.createElement(l.default,{src:e.componentProps}))})):t.map((function(e){return r.default.createElement(a.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})}))),b&&r.default.createElement("div",{className:f("doc-card")},b))};h.propTypes=g,h.defaultProps={packageName:"",packageUrl:"",packageVersion:"",readme:"",srcPath:"",examples:[],propsTables:[]};var b=h;t.default=b},824:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(n(0)),a=u(n(2)),l=u(n(830)),d=u(n(831)),i=u(n(4)),s=u(n(825)),c=u(n(826));function u(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}l.default.registerLanguage("jsx",d.default);var _=i.default.bind(s.default),v={example:a.default.element,exampleSrc:a.default.string,title:a.default.string,description:a.default.node,children:a.default.element},x={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},E=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=h(t).call(this,e))||"object"!==p(o)&&"function"!=typeof o?b(r):o).state={isExpanded:!1,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(b(n)),n.handleCodeToggle=n.handleCodeToggle.bind(b(n)),n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,(r=[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.example,r=e.exampleSrc,a=e.children,d=e.description,i=f(e,["title","example","exampleSrc","children","description"]),s=this.state,u=s.isExpanded,p={};return s.isBackgroundTransparent&&(p={backgroundColor:"rgba(0, 0, 0, 0)"}),o.default.createElement("div",m({},i,{className:_("template",i.className)}),t&&o.default.createElement("div",{className:_("header")},o.default.createElement("h2",{className:_("title")},t)),o.default.createElement("div",{className:_("content"),style:p},d&&o.default.createElement("div",{className:_("description")},d),n,a),r&&o.default.createElement("div",{className:_("footer")},o.default.createElement("div",{className:_("button-container")},o.default.createElement("button",{type:"button",className:_("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),o.default.createElement("button",{type:"button",className:_("code-toggle"),onClick:this.handleCodeToggle},o.default.createElement("span",{className:_("chevron-left")}),o.default.createElement("span",null,"Code"),o.default.createElement("span",{className:_("chevron-right")}))),o.default.createElement("div",{className:_("code",{"is-expanded":u}),"aria-hidden":!u},u?o.default.createElement(l.default,{language:"jsx",style:c.default,customStyle:{margin:"0",borderRadius:"0"}},r):void 0)))}}])&&g(n.prototype,r),a&&g(n,a),t}(o.default.Component);E.propTypes=v,E.defaultProps=x;var w=E;t.default=w},825:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},826:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r="#D8DEE9",o="#B2B2B2",a="#c5a5c5",l="#5a9bcf",d="#8dc891",i="#d7deea",s="#FAC863",c={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:a},comment:{color:o},"block-comment":{color:o},prolog:{color:o},doctype:{color:o},cdata:{color:o},property:{color:l},number:{color:l},"function-name":{color:l},constant:{color:l},symbol:{color:l},deleted:{color:l},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:d},punctuation:{color:"#88C6BE"},selector:{color:r},char:{color:r},builtin:{color:r},inserted:{color:r},function:{color:"#79b6f2"},operator:{color:i},entity:{color:i,cursor:"help"},url:{color:i},".language-css .token.string":{color:i},".style .token.string":{color:i},variable:{color:i},"attr-value":{color:d},keyword:{color:a},"at-rule":{color:s},"class-name":{color:s},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};t.default=c},827:function(e,t,n){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe","props-table-markdown":"DocTemplate-module__props-table-markdown___1926W"}}}]);
//# sourceMappingURL=136-85380b75b2d989db2aae.js.map