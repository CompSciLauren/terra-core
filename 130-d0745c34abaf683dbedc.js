(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{2519:function(e,t,n){"use strict";n.r(t),t.default='# List Subsection\n\nThe list subsection component creates a subsection header and layouts it out with the passed child list items. The subsection provides the ability to display and collapse a subsection within a logical group. The list subsection will render as a flat list.\n\n## Usage\n\n```jsx\nimport React from \'react\';\nimport List, { Item, Subsection } from \'terra-list/lib/List\';\n\n<Subsection\n  isCollapsible\n  isCollapsed={false}\n  title="test title"\n  metaData={{ key: \'section-1\' }}\n  onSelect={this.handleSelection}\n  key="section-1"\n>\n  <Item key="section-1-item-1">\n    <p>List item text</p>\n  </Item>\n  <Item key="section-1-item-2">\n    <p>List item text</p>\n  </Item>\n</Subsection>\n\n\n```\n'},2520:function(e,t){e.exports='<table style="display: table; margin-bottom: 1.25rem"><thead><tr style="line-height: 1.5"><th style="width: 10%">Prop Name</th><th style="width: 25%">Type</th><th style="width: 10%">Is Required</th><th style="width: 10%">Default Value</th><th style="width: 45%">Description</th></tr></thead><tbody><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">children</td><td style="padding-bottom: 1.8rem">node</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">[]</td><td style="padding-bottom: 1.8rem">The children list items passed to the component.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">isCollapsed</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether or not the subsection is collapsed.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">isCollapsible</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether or not the subsection can be collapsed.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">level</td><td style="padding-bottom: 1.8rem">enum</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">2</td><td style="padding-bottom: 1.8rem">Optionally sets the heading level. One of <code style="white-space: pre-wrap">2</code>, <code>3</code>, <code>4</code>, <code>5</code>, <code>6</code>.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">metaData</td><td style="padding-bottom: 1.8rem">object</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">The associated metaData to be provided in the onSelect callback.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">onSelect</td><td style="padding-bottom: 1.8rem">func</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">Function callback for when the appropriate click or key action is performed.\nCallback contains the javascript evnt and prop metadata, e.g. onSelect(event, metaData)</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">refCallback</td><td style="padding-bottom: 1.8rem">func</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">Function callback passthrough for the ref of the section li.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">title</td><td style="padding-bottom: 1.8rem">string</td><td style="color: #d53700; padding-bottom: 1.8rem">required</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">Title text to be placed within the subsection header.</td></tr></tbody></table>'},2521:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport SubsectionHeader from './ListSubsectionHeader';\n\nconst propTypes = {\n  /**\n   * The children list items passed to the component.\n   */\n  children: PropTypes.node,\n  /**\n   * Whether or not the subsection is collapsed.\n   */\n  isCollapsed: PropTypes.bool,\n  /**\n   * Whether or not the subsection can be collapsed.\n   */\n  isCollapsible: PropTypes.bool,\n  /**\n   * Optionally sets the heading level. One of `2`, `3`, `4`, `5`, `6`.\n   */\n  level: PropTypes.oneOf([2, 3, 4, 5, 6]),\n  /**\n   * The associated metaData to be provided in the onSelect callback.\n   */\n  // eslint-disable-next-line react/forbid-prop-types\n  metaData: PropTypes.object,\n  /**\n   * Function callback for when the appropriate click or key action is performed.\n   * Callback contains the javascript evnt and prop metadata, e.g. onSelect(event, metaData)\n   */\n  onSelect: PropTypes.func,\n  /**\n   * Function callback passthrough for the ref of the section li.\n   */\n  refCallback: PropTypes.func,\n  /**\n   * Title text to be placed within the subsection header.\n   */\n  title: PropTypes.string.isRequired,\n};\n\nconst defaultProps = {\n  children: [],\n  isCollapsed: false,\n  isCollapsible: false,\n  level: 2,\n};\n\nconst ListSubsection = ({\n  children,\n  isCollapsed,\n  isCollapsible,\n  ...customProps\n}) => {\n  let sectionItems;\n  if (!isCollapsible || !isCollapsed) {\n    sectionItems = children;\n  }\n\n  return (\n    <React.Fragment>\n      <SubsectionHeader {...customProps} isCollapsible={isCollapsible} isCollapsed={isCollapsed} />\n      {sectionItems}\n    </React.Fragment>\n  );\n};\n\nListSubsection.propTypes = propTypes;\nListSubsection.defaultProps = defaultProps;\n\nexport default ListSubsection;\n"},2522:function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){return(a="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=p(n(0)),r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){var r=o?Object.getOwnPropertyDescriptor(e,l):null;r&&(r.get||r.set)?Object.defineProperty(n,l,r):n[l]=e[l]}n.default=e,t&&t.set(e,n);return n}(n(78)),i=p(n(840)),c=p(n(4)),s=p(n(876));function d(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function p(e){return e&&e.__esModule?e:{default:e}}var m=c.default.bind(s.default),u=function(){return l.default.createElement(r.default,null,l.default.createElement(r.Subsection,{key:"static-subsection",title:"Static Subsection"},l.default.createElement(r.Item,{key:"123"},l.default.createElement(i.default,{title:"Item 0-0",className:m("placeholder")})),l.default.createElement(r.Item,{key:"124"},l.default.createElement(i.default,{title:"Item 0-1",className:m("placeholder")})),l.default.createElement(r.Item,{key:"125"},l.default.createElement(i.default,{title:"Item 0-2",className:m("placeholder")}))),l.default.createElement(r.Subsection,{key:"collapsible-subsection",isCollapsible:!0,title:"Collapsible Subsection"},l.default.createElement(r.Item,{key:"223"},l.default.createElement(i.default,{title:"Item 1-0",className:m("placeholder")})),l.default.createElement(r.Item,{key:"224"},l.default.createElement(i.default,{title:"Item 1-1",className:m("placeholder")})),l.default.createElement(r.Item,{key:"225"},l.default.createElement(i.default,{title:"Item 1-2",className:m("placeholder")}))),l.default.createElement(r.Subsection,{key:"collapsible-subsection",isCollapsed:!0,isCollapsible:!0,title:"Collapsed Subsection"},l.default.createElement(r.Item,{key:"323"},l.default.createElement(i.default,{title:"Item 2-0",className:m("placeholder")})),l.default.createElement(r.Item,{key:"324"},l.default.createElement(i.default,{title:"Item 2-1",className:m("placeholder")})),l.default.createElement(r.Item,{key:"325"},l.default.createElement(i.default,{title:"Item 2-2",className:m("placeholder")}))))};t.default=u},2523:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\nimport List, { Item, Subsection } from \'terra-list/lib/index\';\nimport Placeholder from \'terra-doc-template/lib/Placeholder\';\nimport classNames from \'classnames/bind\';\nimport styles from \'./ListDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst ListSubsectionExample = () => (\n  <List>\n    <Subsection\n      key="static-subsection"\n      title="Static Subsection"\n    >\n      <Item key="123">\n        <Placeholder title="Item 0-0" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="124">\n        <Placeholder title="Item 0-1" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="125">\n        <Placeholder title="Item 0-2" className={cx(\'placeholder\')} />\n      </Item>\n    </Subsection>\n    <Subsection\n      key="collapsible-subsection"\n      isCollapsible\n      title="Collapsible Subsection"\n    >\n      <Item key="223">\n        <Placeholder title="Item 1-0" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="224">\n        <Placeholder title="Item 1-1" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="225">\n        <Placeholder title="Item 1-2" className={cx(\'placeholder\')} />\n      </Item>\n    </Subsection>\n    <Subsection\n      key="collapsible-subsection"\n      isCollapsed\n      isCollapsible\n      title="Collapsed Subsection"\n    >\n      <Item key="323">\n        <Placeholder title="Item 2-0" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="324">\n        <Placeholder title="Item 2-1" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="325">\n        <Placeholder title="Item 2-2" className={cx(\'placeholder\')} />\n      </Item>\n    </Subsection>\n  </List>\n);\n\nexport default ListSubsectionExample;\n'},3037:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=p(n(0)),a=p(n(823)),l=p(n(2519)),r=n(871),i=p(n(2520)),c=p(n(2521)),s=p(n(2522)),d=p(n(2523));function p(e){return e&&e.__esModule?e:{default:e}}var m=function(){return o.default.createElement(a.default,{packageName:r.name,packageVersion:r.version,readme:l.default,srcPath:"https://github.com/cerner/terra-core/tree/master/packages/".concat(r.name),examples:[{example:o.default.createElement(s.default,null),source:d.default}],propsTables:[{componentName:"List Subsection",componentSrc:c.default,componentProps:i.default}]})};t.default=m},821:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(0)),a=r(n(4)),l=r(n(822));function r(e){return e&&e.__esModule?e:{default:e}}var i=a.default.bind(l.default),c=function(e){var t=e.packageName,n=e.packageUrl,a=e.packageVersion;return a?o.default.createElement("div",{className:i("badge-container")},o.default.createElement("a",{className:i("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(a)},o.default.createElement("span",{className:i("badge-name")},n?"package":"npm"),o.default.createElement("span",{className:i("badge-version")},"v".concat(a)))):o.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(t)},o.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(t),alt:"NPM version"}))};t.default=c},822:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___1Cu7Z","badge-container":"NpmBadge-module__badge-container___2zgQi","badge-name":"NpmBadge-module__badge-name___17OzL","badge-version":"NpmBadge-module__badge-version___2Vkei"}},823:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=p(n(0)),a=p(n(2)),l=p(n(829)),r=p(n(828)),i=p(n(4)),c=p(n(821)),s=p(n(824)),d=p(n(827));function p(e){return e&&e.__esModule?e:{default:e}}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=i.default.bind(d.default),b={children:a.default.node,packageName:a.default.string,packageUrl:a.default.string,packageVersion:a.default.string,readme:a.default.string,srcPath:a.default.string,examples:a.default.arrayOf(a.default.shape({title:a.default.string,description:a.default.node,example:a.default.element,source:a.default.string})),propsTables:a.default.arrayOf(a.default.shape({componentSrc:a.default.string,componentName:a.default.string,componentProps:a.default.string,propsResolution:a.default.string}))},g=function(e){var t,n=e.packageName,a=e.packageVersion,i=e.packageUrl,d=e.readme,p=e.srcPath,b=e.examples,g=e.propsTables,h=e.children,y=u(e,["packageName","packageVersion","packageUrl","readme","srcPath","examples","propsTables","children"]),_=b;g&&(t=g);for(var v=0,k=0;k<_.length;k+=1)_[k].id=v,v+=1;if(t)for(var E=0;E<t.length;E+=1)t[E].id=v,v+=1;var x,S=f(["doc-template",y.className]);if(_.length>0){var w=_.length>1?"Examples":"Example";x=o.default.createElement("h1",{className:f("examples-header")},w)}var P=o.default.createElement(c.default,{packageName:n,packageUrl:i,packageVersion:a});return o.default.createElement("div",m({},y,{className:S}),o.default.createElement("div",{className:f("doc-card")},n&&P,d&&o.default.createElement(r.default,{src:d}),p&&o.default.createElement("a",{href:p},"View component source code")),x,_.map((function(e){return o.default.createElement(s.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})})),o.default.createElement("div",{className:f("doc-card")},g[0]&&g[0].componentProps?t.map((function(e){return o.default.createElement("div",{className:f("props-table-markdown"),key:e.id},o.default.createElement("h2",null,e.componentName," Props"),o.default.createElement(r.default,{src:e.componentProps}))})):t.map((function(e){return o.default.createElement(l.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})}))),h&&o.default.createElement("div",{className:f("doc-card")},h))};g.propTypes=b,g.defaultProps={packageName:"",packageUrl:"",packageVersion:"",readme:"",srcPath:"",examples:[],propsTables:[]};var h=g;t.default=h},824:function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=p(n(0)),l=p(n(2)),r=p(n(830)),i=p(n(831)),c=p(n(4)),s=p(n(825)),d=p(n(826));function p(e){return e&&e.__esModule?e:{default:e}}function m(e){return(m="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}r.default.registerLanguage("jsx",i.default);var _=c.default.bind(s.default),v={example:l.default.element,exampleSrc:l.default.string,title:l.default.string,description:l.default.node,children:l.default.element},k={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},E=function(e){function t(e){var n,o,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(a=g(t).call(this,e))||"object"!==m(a)&&"function"!=typeof a?h(o):a).state={isExpanded:!1,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(h(n)),n.handleCodeToggle=n.handleCodeToggle.bind(h(n)),n}var n,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,(o=[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.example,o=e.exampleSrc,l=e.children,i=e.description,c=f(e,["title","example","exampleSrc","children","description"]),s=this.state,p=s.isExpanded,m={};return s.isBackgroundTransparent&&(m={backgroundColor:"rgba(0, 0, 0, 0)"}),a.default.createElement("div",u({},c,{className:_("template",c.className)}),t&&a.default.createElement("div",{className:_("header")},a.default.createElement("h2",{className:_("title")},t)),a.default.createElement("div",{className:_("content"),style:m},i&&a.default.createElement("div",{className:_("description")},i),n,l),o&&a.default.createElement("div",{className:_("footer")},a.default.createElement("div",{className:_("button-container")},a.default.createElement("button",{type:"button",className:_("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),a.default.createElement("button",{type:"button",className:_("code-toggle"),onClick:this.handleCodeToggle},a.default.createElement("span",{className:_("chevron-left")}),a.default.createElement("span",null,"Code"),a.default.createElement("span",{className:_("chevron-right")}))),a.default.createElement("div",{className:_("code",{"is-expanded":p}),"aria-hidden":!p},p?a.default.createElement(r.default,{language:"jsx",style:d.default,customStyle:{margin:"0",borderRadius:"0"}},o):void 0)))}}])&&b(n.prototype,o),l&&b(n,l),t}(a.default.Component);E.propTypes=v,E.defaultProps=k;var x=E;t.default=x},825:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},826:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o="#D8DEE9",a="#B2B2B2",l="#c5a5c5",r="#5a9bcf",i="#8dc891",c="#d7deea",s="#FAC863",d={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:l},comment:{color:a},"block-comment":{color:a},prolog:{color:a},doctype:{color:a},cdata:{color:a},property:{color:r},number:{color:r},"function-name":{color:r},constant:{color:r},symbol:{color:r},deleted:{color:r},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:i},punctuation:{color:"#88C6BE"},selector:{color:o},char:{color:o},builtin:{color:o},inserted:{color:o},function:{color:"#79b6f2"},operator:{color:c},entity:{color:c,cursor:"help"},url:{color:c},".language-css .token.string":{color:c},".style .token.string":{color:c},variable:{color:c},"attr-value":{color:i},keyword:{color:l},"at-rule":{color:s},"class-name":{color:s},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};t.default=d},827:function(e,t,n){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe","props-table-markdown":"DocTemplate-module__props-table-markdown___1926W"}},840:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(0)),a=i(n(2)),l=i(n(4)),r=i(n(850));function i(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=l.default.bind(r.default),p={variant:a.default.oneOf(["light","dark"]),title:a.default.string},m=function(e){var t=e.variant,n=e.title,a=s(e,["variant","title"]),l=d(["placeholder",a.className]),r=d(["inner","is-".concat(t)]);return o.default.createElement("div",c({},a,{className:l}),o.default.createElement("div",{className:r},o.default.createElement("h2",null,n)))};m.propTypes=p,m.defaultProps={variant:"dark",title:""};var u=m;t.default=u},850:function(e,t,n){e.exports={placeholder:"Placeholder-module__placeholder___tuGWe",inner:"Placeholder-module__inner___1irlA","is-light":"Placeholder-module__is-light___3LkLU","is-dark":"Placeholder-module__is-dark___5pLAg"}},871:function(e){e.exports=JSON.parse('{"name":"terra-list","main":"lib/index.js","version":"4.22.0","description":"The Terra List is a structural component to arrange content within list/listitems.","repository":{"type":"git","url":"git+https://github.com/cerner/terra-core.git"},"keywords":["Cerner","Terra","terra-list","List","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-core/issues"},"homepage":"https://github.com/cerner/terra-core#readme","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5"},"dependencies":{"classnames":"^2.2.5","keycode-js":"^2.0.1","prop-types":"^15.5.8","terra-doc-template":"^2.21.0","terra-icon":"^3.23.0","terra-mixins":"^1.33.0"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio":"cd ../.. && npx wdio ./packages/$npm_package_name/wdio.conf.js"}}')},876:function(e,t,n){e.exports={placeholder:"ListDocCommon-module__placeholder___cpXI4"}}}]);
//# sourceMappingURL=130-d0745c34abaf683dbedc.js.map