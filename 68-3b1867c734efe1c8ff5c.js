(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{1926:function(e,t,n){"use strict";n.r(t),t.default="# Terra Card\n\nCard is a basic container with some base styling to help separate elements with different content\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-card`\n\n\x3c!-- AUTO-GENERATED-CONTENT:START Peer Dependencies --\x3e\n## Peer Dependencies\n\nThis component requires the following peer dependencies be installed in your app for the component to properly function.\n\n| Peer Dependency | Version |\n|-|-|\n| react | ^16.8.5 |\n| react-dom | ^16.8.5 |\n\n\n\n\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n## Usage\n\n```jsx\nimport React from 'react';\nimport Card from 'terra-card';\n\n// Just a Default Card\n<Card>\n\t...\n</Card>\n\n// A Raised Card variant\n<Card variant=\"raised\">\n\t...\n</Card>\n\n// Or we can selectively add padding to child elements\n<Card>\n\t<Card.Body>\n\t\t...\n\t</Card.Body>\n\t...\n\t<Card.Body>\n\t\t...\n\t</Card.Body>\n</Card>\n```\n\n## Expected Use\n\nThe expected use for a card would be to keep elements separated from each other with different content, for example one card could contain a graph while another could have text. Another use would be to help make some elements stand out on the screen with the use of the base styling.\n\n\n## Component Features\n\n\n * [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)\n * [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)\n * [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)\n"},1927:function(e){e.exports=JSON.parse('{"name":"terra-card","main":"lib/Card.js","version":"3.21.0","description":"Card is a basic container with some base styling to help seperate elements with different content","repository":{"type":"git","url":"git+https://github.com/cerner/terra-core.git"},"keywords":["Cerner","Terra","terra-card","Card","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-core/issues"},"homepage":"https://github.com/cerner/terra-core#readme","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5"},"dependencies":{"classnames":"^2.2.5","prop-types":"^15.5.8","terra-doc-template":"^2.21.0","terra-visually-hidden-text":"^2.20.0"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio":"cd ../.. && npx wdio ./packages/$npm_package_name/wdio.conf.js"}}')},1928:function(e,t){e.exports='<table style="display: table; margin-bottom: 1.25rem"><thead><tr style="line-height: 1.5"><th style="width: 10%">Prop Name</th><th style="width: 25%">Type</th><th style="width: 10%">Is Required</th><th style="width: 10%">Default Value</th><th style="width: 45%">Description</th></tr></thead><tbody><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">children</td><td style="padding-bottom: 1.8rem">node</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">Child Nodes</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">variant</td><td style="padding-bottom: 1.8rem">enum</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">\'default\'</td><td style="padding-bottom: 1.8rem">Sets the card variant to change the style for different use cases. One of <code style="white-space: pre-wrap">default</code>,  <code>raised</code>.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">visuallyHiddenText</td><td style="padding-bottom: 1.8rem">string</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">Text that describes the badge to a screen reader. Use this\nif more information is needed to accurately describe\nthis card to screen reader users.</td></tr></tbody></table>'},1929:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport VisuallyHiddenText from 'terra-visually-hidden-text';\nimport styles from './Card.module.scss';\nimport CardBody from './CardBody';\n\nconst cx = classNames.bind(styles);\n\nconst CardVariants = {\n  DEFAULT: 'default',\n  RAISED: 'raised',\n};\n\nconst propTypes = {\n  /**\n   * Child Nodes\n   */\n  children: PropTypes.node,\n  /**\n   * Sets the card variant to change the style for different use cases. One of `default`,  `raised`.\n   */\n  variant: PropTypes.oneOf([...Object.values(CardVariants)]),\n  /**\n   * Text that describes the badge to a screen reader. Use this\n   * if more information is needed to accurately describe\n   * this card to screen reader users.\n   */\n  visuallyHiddenText: PropTypes.string,\n};\n\nconst defaultProps = {\n  variant: CardVariants.DEFAULT,\n};\n\nconst Card = ({\n  children,\n  variant,\n  visuallyHiddenText,\n  ...customProps\n}) => {\n  const cardClassNames = cx([\n    'card',\n    variant,\n    customProps.className,\n  ]);\n\n  const visuallyHiddenTextContent = visuallyHiddenText ? <VisuallyHiddenText text={visuallyHiddenText} /> : null;\n\n  return (\n    <article {...customProps} className={cardClassNames}>\n      {visuallyHiddenTextContent}\n      {children}\n    </article>\n  );\n};\n\nCard.propTypes = propTypes;\nCard.defaultProps = defaultProps;\nCard.Body = CardBody;\nexport default Card;\n"},1930:function(e,t){e.exports='<table style="display: table; margin-bottom: 1.25rem"><thead><tr style="line-height: 1.5"><th style="width: 10%">Prop Name</th><th style="width: 25%">Type</th><th style="width: 10%">Is Required</th><th style="width: 10%">Default Value</th><th style="width: 45%">Description</th></tr></thead><tbody><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">children</td><td style="padding-bottom: 1.8rem">node</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">Child Nodes</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">hasPaddingVertical</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">true</td><td style="padding-bottom: 1.8rem">Provides themeable padding vertical</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">hasPaddingHorizontal</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">true</td><td style="padding-bottom: 1.8rem">Provides themeable padding horizontal</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">isContentCentered</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Sets the content of the card to be centered</td></tr></tbody></table>'},1931:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport styles from './CardBody.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst propTypes = {\n  /**\n   * Child Nodes\n   */\n  children: PropTypes.node,\n  /**\n   * Provides themeable padding vertical\n   */\n  hasPaddingVertical: PropTypes.bool,\n  /**\n   * Provides themeable padding horizontal\n   */\n  hasPaddingHorizontal: PropTypes.bool,\n  /**\n  * Sets the content of the card to be centered\n  */\n  isContentCentered: PropTypes.bool,\n};\n\nconst defaultProps = {\n  hasPaddingHorizontal: true,\n  hasPaddingVertical: true,\n  isContentCentered: false,\n};\n\nconst CardBody = ({\n  children,\n  hasPaddingVertical,\n  hasPaddingHorizontal,\n  isContentCentered,\n  ...customProps\n}) => {\n  const cardBodyClasses = cx([\n    { 'vertical-padding': hasPaddingVertical },\n    { 'horizontal-padding': hasPaddingHorizontal },\n    { 'center-content': isContentCentered },\n    customProps.className,\n  ]);\n  return <div {...customProps} className={cardBodyClasses}>{children}</div>;\n};\n\nCardBody.propTypes = propTypes;\nCardBody.defaultProps = defaultProps;\nexport default CardBody;\n"},1932:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),r=o(n(859));function o(e){return e&&e.__esModule?e:{default:e}}var d=function(){return a.default.createElement("div",null,a.default.createElement(r.default,null,"Hello World!!"))};t.default=d},1933:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport Card from 'terra-card/lib/Card';\n\nconst CardDefault = () => (\n  <div>\n    <Card>Hello World!!</Card>\n  </div>\n);\n\nexport default CardDefault;\n"},1934:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),r=o(n(859));function o(e){return e&&e.__esModule?e:{default:e}}var d=function(){return a.default.createElement("div",null,a.default.createElement(r.default,{variant:"raised"},"Hello World!!"))};t.default=d},1935:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport Card from 'terra-card/lib/Card';\n\nconst CardDefault = () => (\n  <div>\n    <Card variant=\"raised\">Hello World!!</Card>\n  </div>\n);\n\nexport default CardDefault;\n"},1936:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),r=o(n(859));function o(e){return e&&e.__esModule?e:{default:e}}var d=function(){return a.default.createElement("div",null,a.default.createElement(r.default,null,a.default.createElement(r.default.Body,null,"Hello World!!")))};t.default=d},1937:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport Card from 'terra-card/lib/Card';\n\nconst CardPadding = () => (\n  <div>\n    <Card>\n      <Card.Body>Hello World!!</Card.Body>\n    </Card>\n  </div>\n);\n\nexport default CardPadding;\n"},1938:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),r=o(n(859));function o(e){return e&&e.__esModule?e:{default:e}}var d=function(){return a.default.createElement("div",null,a.default.createElement(r.default,null,a.default.createElement(r.default.Body,{hasPaddingHorizontal:!1},"Hello World!!")))};t.default=d},1939:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport Card from 'terra-card/lib/Card';\n\nconst CardPaddingVertical = () => (\n  <div>\n    <Card>\n      <Card.Body hasPaddingHorizontal={false}>Hello World!!</Card.Body>\n    </Card>\n  </div>\n);\n\nexport default CardPaddingVertical;\n"},1940:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),r=o(n(859));function o(e){return e&&e.__esModule?e:{default:e}}var d=function(){return a.default.createElement("div",null,a.default.createElement(r.default,null,a.default.createElement(r.default.Body,{hasPaddingVertical:!1},"Hello World!!")))};t.default=d},1941:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport Card from 'terra-card/lib/Card';\n\nconst CardPaddingHorizontal = () => (\n  <div>\n    <Card>\n      <Card.Body hasPaddingVertical={false}>Hello World!!</Card.Body>\n    </Card>\n  </div>\n);\n\nexport default CardPaddingHorizontal;\n"},1942:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(0)),r=l(n(4)),o=l(n(859)),d=l(n(1943));function l(e){return e&&e.__esModule?e:{default:e}}var i=r.default.bind(d.default),s=function(){return a.default.createElement("div",null,a.default.createElement(o.default,null,a.default.createElement(o.default.Body,null,"Hello World Above The Line!!"),a.default.createElement("hr",{className:i("horizontal-rule")}),a.default.createElement(o.default.Body,null,"Hello World Below The Line!!")))};t.default=s},1943:function(e,t,n){e.exports={"horizontal-rule":"CardPaddingHR__horizontal-rule___1isjM"}},1944:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport classNames from 'classnames/bind';\nimport Card from 'terra-card/lib/Card';\nimport styles from './CardPaddingHR.scss';\n\nconst cx = classNames.bind(styles);\n\nconst CardPaddingHR = () => (\n  <div>\n    <Card>\n      <Card.Body>Hello World Above The Line!!</Card.Body>\n      <hr className={cx('horizontal-rule')} />\n      <Card.Body>Hello World Below The Line!!</Card.Body>\n    </Card>\n  </div>\n);\n\nexport default CardPaddingHR;\n"},1945:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),r=o(n(859));function o(e){return e&&e.__esModule?e:{default:e}}var d=function(){return a.default.createElement(r.default,null,a.default.createElement(r.default.Body,{isContentCentered:!0},"Content is centered"))};t.default=d},1946:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport Card from 'terra-card/lib/Card';\n\nconst CardContentCentered = () => (\n  <Card>\n    <Card.Body isContentCentered>\n       Content is centered\n    </Card.Body>\n  </Card>\n);\n\nexport default CardContentCentered;\n"},1947:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),r=o(n(859));function o(e){return e&&e.__esModule?e:{default:e}}var d=function(){return a.default.createElement("div",null,a.default.createElement(r.default,{visuallyHiddenText:"This is a Hello World Card Introduction"},"Hello World!!"))};t.default=d},1948:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport Card from 'terra-card/lib/Card';\n\nconst CardVisuallyHiddenText = () => (\n  <div>\n    <Card visuallyHiddenText=\"This is a Hello World Card Introduction\">Hello World!!</Card>\n  </div>\n);\n\nexport default CardVisuallyHiddenText;\n"},2961:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=O(n(0)),r=O(n(823)),o=O(n(1926)),d=n(1927),l=O(n(1928)),i=O(n(1929)),s=O(n(1930)),c=O(n(1931)),u=O(n(1932)),p=O(n(1933)),f=O(n(1934)),m=O(n(1935)),g=O(n(1936)),y=O(n(1937)),h=O(n(1938)),b=O(n(1939)),v=O(n(1940)),_=O(n(1941)),C=O(n(1942)),x=O(n(1944)),E=O(n(1945)),P=O(n(1946)),w=O(n(1947)),T=O(n(1948));function O(e){return e&&e.__esModule?e:{default:e}}var N=function(){return a.default.createElement(r.default,{packageName:d.name,packageVersion:d.version,readme:o.default,srcPath:"https://github.com/cerner/terra-core/tree/master/packages/".concat(d.name),examples:[{title:"Card basic example",example:a.default.createElement(u.default,null),source:p.default},{title:"Card basic raised example",example:a.default.createElement(f.default,null),source:m.default},{title:"Card plus Card Body with default padding",example:a.default.createElement(g.default,null),source:y.default},{title:"Card plus Card Body with only vertical padding",example:a.default.createElement(h.default,null),source:b.default},{title:"Card plus Card Body with only horizontal padding",example:a.default.createElement(v.default,null),source:_.default},{title:"Card plus padded and non-padded children",example:a.default.createElement(C.default,null),source:x.default},{title:"Centered content inside card",example:a.default.createElement(E.default,null),source:P.default},{title:"Card with Visually Hidden Text",example:a.default.createElement(w.default,null),source:T.default}],propsTables:[{componentName:"Card",componentSrc:i.default,componentProps:l.default},{componentName:"Card Body",componentSrc:c.default,componentProps:s.default}]})};t.default=N},821:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(0)),r=d(n(4)),o=d(n(822));function d(e){return e&&e.__esModule?e:{default:e}}var l=r.default.bind(o.default),i=function(e){var t=e.packageName,n=e.packageUrl,r=e.packageVersion;return r?a.default.createElement("div",{className:l("badge-container")},a.default.createElement("a",{className:l("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(r)},a.default.createElement("span",{className:l("badge-name")},n?"package":"npm"),a.default.createElement("span",{className:l("badge-version")},"v".concat(r)))):a.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(t)},a.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(t),alt:"NPM version"}))};t.default=i},822:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___1Cu7Z","badge-container":"NpmBadge-module__badge-container___2zgQi","badge-name":"NpmBadge-module__badge-name___17OzL","badge-version":"NpmBadge-module__badge-version___2Vkei"}},823:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(0)),r=u(n(2)),o=u(n(829)),d=u(n(828)),l=u(n(4)),i=u(n(821)),s=u(n(824)),c=u(n(827));function u(e){return e&&e.__esModule?e:{default:e}}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=l.default.bind(c.default),g={children:r.default.node,packageName:r.default.string,packageUrl:r.default.string,packageVersion:r.default.string,readme:r.default.string,srcPath:r.default.string,examples:r.default.arrayOf(r.default.shape({title:r.default.string,description:r.default.node,example:r.default.element,source:r.default.string})),propsTables:r.default.arrayOf(r.default.shape({componentSrc:r.default.string,componentName:r.default.string,componentProps:r.default.string,propsResolution:r.default.string}))},y=function(e){var t,n=e.packageName,r=e.packageVersion,l=e.packageUrl,c=e.readme,u=e.srcPath,g=e.examples,y=e.propsTables,h=e.children,b=f(e,["packageName","packageVersion","packageUrl","readme","srcPath","examples","propsTables","children"]),v=g;y&&(t=y);for(var _=0,C=0;C<v.length;C+=1)v[C].id=_,_+=1;if(t)for(var x=0;x<t.length;x+=1)t[x].id=_,_+=1;var E,P=m(["doc-template",b.className]);if(v.length>0){var w=v.length>1?"Examples":"Example";E=a.default.createElement("h1",{className:m("examples-header")},w)}var T=a.default.createElement(i.default,{packageName:n,packageUrl:l,packageVersion:r});return a.default.createElement("div",p({},b,{className:P}),a.default.createElement("div",{className:m("doc-card")},n&&T,c&&a.default.createElement(d.default,{src:c}),u&&a.default.createElement("a",{href:u},"View component source code")),E,v.map((function(e){return a.default.createElement(s.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})})),a.default.createElement("div",{className:m("doc-card")},y[0]&&y[0].componentProps?t.map((function(e){return a.default.createElement("div",{className:m("props-table-markdown"),key:e.id},a.default.createElement("h2",null,e.componentName," Props"),a.default.createElement(d.default,{src:e.componentProps}))})):t.map((function(e){return a.default.createElement(o.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})}))),h&&a.default.createElement("div",{className:m("doc-card")},h))};y.propTypes=g,y.defaultProps={packageName:"",packageUrl:"",packageVersion:"",readme:"",srcPath:"",examples:[],propsTables:[]};var h=y;t.default=h},824:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(0)),o=u(n(2)),d=u(n(830)),l=u(n(831)),i=u(n(4)),s=u(n(825)),c=u(n(826));function u(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function g(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}d.default.registerLanguage("jsx",l.default);var v=i.default.bind(s.default),_={example:o.default.element,exampleSrc:o.default.string,title:o.default.string,description:o.default.node,children:o.default.element},C={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},x=function(e){function t(e){var n,a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(r=y(t).call(this,e))||"object"!==p(r)&&"function"!=typeof r?h(a):r).state={isExpanded:!1,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(h(n)),n.handleCodeToggle=n.handleCodeToggle.bind(h(n)),n}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),n=t,(a=[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.example,a=e.exampleSrc,o=e.children,l=e.description,i=m(e,["title","example","exampleSrc","children","description"]),s=this.state,u=s.isExpanded,p={};return s.isBackgroundTransparent&&(p={backgroundColor:"rgba(0, 0, 0, 0)"}),r.default.createElement("div",f({},i,{className:v("template",i.className)}),t&&r.default.createElement("div",{className:v("header")},r.default.createElement("h2",{className:v("title")},t)),r.default.createElement("div",{className:v("content"),style:p},l&&r.default.createElement("div",{className:v("description")},l),n,o),a&&r.default.createElement("div",{className:v("footer")},r.default.createElement("div",{className:v("button-container")},r.default.createElement("button",{type:"button",className:v("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),r.default.createElement("button",{type:"button",className:v("code-toggle"),onClick:this.handleCodeToggle},r.default.createElement("span",{className:v("chevron-left")}),r.default.createElement("span",null,"Code"),r.default.createElement("span",{className:v("chevron-right")}))),r.default.createElement("div",{className:v("code",{"is-expanded":u}),"aria-hidden":!u},u?r.default.createElement(d.default,{language:"jsx",style:c.default,customStyle:{margin:"0",borderRadius:"0"}},a):void 0)))}}])&&g(n.prototype,a),o&&g(n,o),t}(r.default.Component);x.propTypes=_,x.defaultProps=C;var E=x;t.default=E},825:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},826:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a="#D8DEE9",r="#B2B2B2",o="#c5a5c5",d="#5a9bcf",l="#8dc891",i="#d7deea",s="#FAC863",c={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:o},comment:{color:r},"block-comment":{color:r},prolog:{color:r},doctype:{color:r},cdata:{color:r},property:{color:d},number:{color:d},"function-name":{color:d},constant:{color:d},symbol:{color:d},deleted:{color:d},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:l},punctuation:{color:"#88C6BE"},selector:{color:a},char:{color:a},builtin:{color:a},inserted:{color:a},function:{color:"#79b6f2"},operator:{color:i},entity:{color:i,cursor:"help"},url:{color:i},".language-css .token.string":{color:i},".style .token.string":{color:i},variable:{color:i},"attr-value":{color:l},keyword:{color:o},"at-rule":{color:s},"class-name":{color:s},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};t.default=c},827:function(e,t,n){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe","props-table-markdown":"DocTemplate-module__props-table-markdown___1926W"}},859:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n(0)),r=s(n(2)),o=s(n(4)),d=s(n(130)),l=s(n(889)),i=s(n(888));function s(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p,f=o.default.bind(l.default),m={DEFAULT:"default",RAISED:"raised"},g={children:r.default.node,variant:r.default.oneOf((p=Object.values(m),function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(p)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(p)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}())),visuallyHiddenText:r.default.string},y={variant:m.DEFAULT},h=function(e){var t=e.children,n=e.variant,r=e.visuallyHiddenText,o=u(e,["children","variant","visuallyHiddenText"]),l=f(["card",n,o.className]),i=r?a.default.createElement(d.default,{text:r}):null;return a.default.createElement("article",c({},o,{className:l}),i,t)};h.propTypes=g,h.defaultProps=y,h.Body=i.default;var b=h;t.default=b},888:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(0)),r=l(n(2)),o=l(n(4)),d=l(n(890));function l(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.default.bind(d.default),u={children:r.default.node,hasPaddingVertical:r.default.bool,hasPaddingHorizontal:r.default.bool,isContentCentered:r.default.bool},p=function(e){var t=e.children,n=e.hasPaddingVertical,r=e.hasPaddingHorizontal,o=e.isContentCentered,d=s(e,["children","hasPaddingVertical","hasPaddingHorizontal","isContentCentered"]),l=c([{"vertical-padding":n},{"horizontal-padding":r},{"center-content":o},d.className]);return a.default.createElement("div",i({},d,{className:l}),t)};p.propTypes=u,p.defaultProps={hasPaddingHorizontal:!0,hasPaddingVertical:!0,isContentCentered:!1};var f=p;t.default=f},889:function(e,t,n){e.exports={card:"Card-module__card___305sN",default:"Card-module__default___33BgI",raised:"Card-module__raised___10uGS"}},890:function(e,t,n){e.exports={"vertical-padding":"CardBody-module__vertical-padding___1KMz6","horizontal-padding":"CardBody-module__horizontal-padding___15gE8","center-content":"CardBody-module__center-content___mayp3"}}}]);
//# sourceMappingURL=68-3b1867c734efe1c8ff5c.js.map