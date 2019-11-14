(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{1124:function(e){e.exports=JSON.parse('{"name":"terra-form-checkbox","main":"lib/Checkbox.js","version":"3.29.0","description":"The Terra Form Checkbox is a responsive input component rendered as a box. When activated, a check mark shall appear. Focus can be activated through tabbing and the checked state can be toggled with the space bar.","repository":{"type":"git","url":"git+https://github.com/cerner/terra-core.git"},"keywords":["Cerner","Terra","terra-form-checkbox","Checkbox","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-core/issues"},"homepage":"https://github.com/cerner/terra-core#readme","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5","react-intl":"^2.8.0"},"dependencies":{"classnames":"^2.2.5","lodash.uniqueid":"^4.0.1","prop-types":"^15.5.8","terra-doc-template":"^2.21.0","terra-mixins":"^1.33.0","terra-visually-hidden-text":"^2.20.0"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio":"cd ../.. && npx wdio ./packages/$npm_package_name/wdio.conf.js"}}')},2061:function(e,t,n){"use strict";n.r(t),t.default="# Terra Form Checkbox\n\nThe Terra Form Checkbox is a responsive input component rendered as a box next to label text. When activated, a check mark shall appear. Focus can be activated through tabbing and the checked state can be toggled with the space bar.\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-form-checkbox`\n\n\x3c!-- AUTO-GENERATED-CONTENT:START Peer Dependencies --\x3e\n## Peer Dependencies\n\nThis component requires the following peer dependencies be installed in your app for the component to properly function.\n\n| Peer Dependency | Version |\n|-|-|\n| react | ^16.8.5 |\n| react-dom | ^16.8.5 |\n| react-intl | ^2.8.0 |\n\n\n\n\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n## Implementation Notes:\nThe Form-Checkbox component must be composed inside the [Base][1] component with a locale in order for it to load the correct translation strings.\n\n[1]: https://github.com/cerner/terra-core/tree/master/packages/terra-base/docs\n\n## Usage\n\n```jsx\nimport React from 'react';\nimport Checkbox from 'terra-form-checkbox';\n\n<Checkbox id=\"checkbox\" labelText=\"Default Checkbox\" />\n```\n\n## Jest Tests:\n* This component requires `window.matchMedia` to be mocked in Jest tests. To do so add the following to the top of your test file(s) that use this component:\n    ```\n    window.matchMedia = () => ({ matches: true });\n    ```\n\n\n## Component Features\n * [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)\n * [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)\n * [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)\n * [LTR/RTL Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#ltr--rtl-support)\n"},2062:function(e,t){e.exports='<table style="display: table; margin-bottom: 1.25rem"><thead><tr style="line-height: 1.5"><th style="width: 10%">Prop Name</th><th style="width: 25%">Type</th><th style="width: 10%">Is Required</th><th style="width: 10%">Default Value</th><th style="width: 45%">Description</th></tr></thead><tbody><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">checked</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">Whether or not the checkbox element is checked. Use this to generate a controlled Checkbox Element.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">defaultChecked</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">The checked property of the Input element. Use this to generate an uncontrolled Checkbox Element.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">id</td><td style="padding-bottom: 1.8rem">string</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">The id of the checkbox.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">inputAttrs</td><td style="padding-bottom: 1.8rem">object</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">{}</td><td style="padding-bottom: 1.8rem">Additional attributes for the input object.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">disabled</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether the checkbox element is disabled.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">isInline</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether the checkbox element is inline.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">isLabelHidden</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether the label is hidden.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">labelText</td><td style="padding-bottom: 1.8rem">node</td><td style="color: #d53700; padding-bottom: 1.8rem">required</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">Text of the label.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">labelTextAttrs</td><td style="padding-bottom: 1.8rem">object</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">{}</td><td style="padding-bottom: 1.8rem">Additional attributes for the text object.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">name</td><td style="padding-bottom: 1.8rem">string</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">null</td><td style="padding-bottom: 1.8rem">Name attribute of the input.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">onBlur</td><td style="padding-bottom: 1.8rem">func</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">Function to trigger when focus is lost from the checkbox.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">onChange</td><td style="padding-bottom: 1.8rem">func</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">Function to trigger when user clicks on the checkbox. Provide a function to create a controlled input.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">onFocus</td><td style="padding-bottom: 1.8rem">func</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">Function to trigger when user focuses on the checkbox.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">value</td><td style="padding-bottom: 1.8rem">string</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">The value of the input element.</td></tr></tbody></table>'},2063:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport styles from './Checkbox.module.scss';\nimport CheckboxUtil from './CheckboxUtil';\n\nconst cx = classNames.bind(styles);\n\nconst propTypes = {\n  /**\n    * Whether or not the checkbox element is checked. Use this to generate a controlled Checkbox Element.\n    */\n  checked: PropTypes.bool,\n  /**\n    * The checked property of the Input element. Use this to generate an uncontrolled Checkbox Element.\n    */\n  defaultChecked: PropTypes.bool,\n  /**\n    * The id of the checkbox.\n    */\n  id: PropTypes.string,\n  /**\n    * Additional attributes for the input object.\n    */\n  // eslint-disable-next-line react/forbid-prop-types\n  inputAttrs: PropTypes.object,\n  /**\n    * Whether the checkbox element is disabled.\n    */\n  disabled: PropTypes.bool,\n  /**\n    * Whether the checkbox element is inline.\n    */\n  isInline: PropTypes.bool,\n  /**\n    * Whether the label is hidden.\n    */\n  isLabelHidden: PropTypes.bool,\n  /**\n    * Text of the label.\n    */\n  labelText: PropTypes.node.isRequired,\n  /**\n    * Additional attributes for the text object.\n    */\n  // eslint-disable-next-line react/forbid-prop-types\n  labelTextAttrs: PropTypes.object,\n  /**\n    * Name attribute of the input.\n    */\n  name: PropTypes.string,\n  /**\n   * Function to trigger when focus is lost from the checkbox.\n   */\n  onBlur: PropTypes.func,\n  /**\n    * Function to trigger when user clicks on the checkbox. Provide a function to create a controlled input.\n    */\n  onChange: PropTypes.func,\n  /**\n   *  Function to trigger when user focuses on the checkbox.\n   */\n  onFocus: PropTypes.func,\n  /**\n    * The value of the input element.\n    */\n  value: PropTypes.string,\n};\n\nconst defaultProps = {\n  checked: undefined,\n  defaultChecked: undefined,\n  id: undefined,\n  inputAttrs: {},\n  disabled: false,\n  isInline: false,\n  isLabelHidden: false,\n  labelTextAttrs: {},\n  name: null,\n  onBlur: undefined,\n  onChange: undefined,\n  onFocus: undefined,\n  value: undefined,\n};\n\nconst Checkbox = ({\n  checked,\n  defaultChecked,\n  inputAttrs,\n  id,\n  disabled,\n  isInline,\n  isLabelHidden,\n  labelText,\n  labelTextAttrs,\n  name,\n  onBlur,\n  onChange,\n  onFocus,\n  value,\n  ...customProps\n}) => {\n  const controlInputAttrs = { ...inputAttrs };\n\n  if (checked !== undefined) {\n    controlInputAttrs.checked = checked;\n  } else {\n    controlInputAttrs.defaultChecked = defaultChecked;\n  }\n\n  const checkboxClasses = cx([\n    'checkbox',\n    { 'is-inline': isInline },\n    customProps.className,\n  ]);\n\n  const labelClasses = cx([\n    'label',\n    { 'is-disabled': disabled },\n    { 'is-mobile': CheckboxUtil.isConsideredMobileDevice() },\n    labelTextAttrs.className,\n  ]);\n\n  const inputClasses = cx([\n    'native-input',\n    inputAttrs.className,\n  ]);\n\n  const labelTextClasses = cx([\n    'label-text',\n    { 'is-hidden': isLabelHidden },\n    { 'is-mobile': CheckboxUtil.isConsideredMobileDevice() },\n  ]);\n\n  let labelTextContainer = null;\n  if (isLabelHidden) {\n    controlInputAttrs['aria-label'] = labelText;\n    labelTextContainer = <span {...labelTextAttrs} className={labelTextClasses} />;\n  } else {\n    labelTextContainer = <span {...labelTextAttrs} className={labelTextClasses}>{labelText}</span>;\n  }\n\n  return (\n    <div {...customProps} className={checkboxClasses}>\n      <label htmlFor={id} className={labelClasses}>\n        <input\n          {...controlInputAttrs}\n          type=\"checkbox\"\n          id={id}\n          disabled={disabled}\n          name={name}\n          value={value}\n          onChange={onChange}\n          onFocus={onFocus}\n          onBlur={onBlur}\n          className={inputClasses}\n        />\n        {labelTextContainer}\n      </label>\n    </div>\n  );\n};\n\nCheckbox.propTypes = propTypes;\nCheckbox.defaultProps = defaultProps;\nCheckbox.isCheckbox = true;\n\nexport default Checkbox;\n"},2064:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(0)),a=r(n(842));function r(e){return e&&e.__esModule?e:{default:e}}var l=function(){return o.default.createElement(a.default,{id:"defaultCheckbox",labelText:"Default Checkbox"})};t.default=l},2065:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport Checkbox from 'terra-form-checkbox';\n\nconst defaultCheckboxExample = () => (<Checkbox id=\"defaultCheckbox\" labelText=\"Default Checkbox\" />);\n\nexport default defaultCheckboxExample;\n"},2066:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(0)),a=r(n(842));function r(e){return e&&e.__esModule?e:{default:e}}var l=function(){return o.default.createElement("div",null,o.default.createElement(a.default,{id:"disabledCheckbox",labelText:"Disabled Checkbox",disabled:!0}),o.default.createElement(a.default,{id:"disabledcheckedCheckbox",labelText:"Disabled and Checked Checkbox",defaultChecked:!0,disabled:!0}))};t.default=l},2067:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\nimport Checkbox from \'terra-form-checkbox\';\n\nconst disabledCheckbox = () => (\n  <div>\n    <Checkbox id="disabledCheckbox" labelText="Disabled Checkbox" disabled />\n    <Checkbox id="disabledcheckedCheckbox" labelText="Disabled and Checked Checkbox" defaultChecked disabled />\n  </div>\n);\n\nexport default disabledCheckbox;\n'},2068:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(0)),a=r(n(842));function r(e){return e&&e.__esModule?e:{default:e}}var l=function(){return o.default.createElement("div",null,o.default.createElement(a.default,{labelText:"Can you see me?",isLabelHidden:!0}))};t.default=l},2069:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport Checkbox from 'terra-form-checkbox';\n\nconst hiddenLabelCheckboxExample = () => (\n  <div>\n    <Checkbox labelText=\"Can you see me?\" isLabelHidden />\n  </div>\n);\n\nexport default hiddenLabelCheckboxExample;\n"},2070:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(0)),a=r(n(842));function r(e){return e&&e.__esModule?e:{default:e}}var l=function(){return o.default.createElement(a.default,{id:"longTextCheckbox",labelText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"})};t.default=l},2071:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport Checkbox from 'terra-form-checkbox';\n\nconst longTextExample = () => (\n  <Checkbox\n    id=\"longTextCheckbox\"\n    labelText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua '\n              + 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}\n  />\n);\n\nexport default longTextExample;\n"},2072:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(0)),a=r(n(842));function r(e){return e&&e.__esModule?e:{default:e}}var l=function(){return o.default.createElement("div",null,o.default.createElement(a.default,{id:"firstInline",labelText:"First Checkbox",isInline:!0}),o.default.createElement(a.default,{id:"secondInline",labelText:"Second Checkbox",isInline:!0}),o.default.createElement(a.default,{id:"thirdInline",labelText:"Third Checkbox",isInline:!0}))};t.default=l},2073:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\nimport Checkbox from \'terra-form-checkbox\';\n\nconst inlineCheckboxesExample = () => (\n  <div>\n    <Checkbox id="firstInline" labelText="First Checkbox" isInline />\n    <Checkbox id="secondInline" labelText="Second Checkbox" isInline />\n    <Checkbox id="thirdInline" labelText="Third Checkbox" isInline />\n  </div>\n);\n\nexport default inlineCheckboxesExample;\n'},2074:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(0)),a=r(n(842));function r(e){return e&&e.__esModule?e:{default:e}}var l=function(){return o.default.createElement("div",null,o.default.createElement(a.default,{id:"first",labelText:"First Checkbox",defaultChecked:!0}),o.default.createElement(a.default,{id:"second",labelText:"Second Checkbox"}),o.default.createElement(a.default,{id:"third",labelText:"Third Checkbox"}))};t.default=l},2075:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\nimport Checkbox from \'terra-form-checkbox\';\n\nconst multipleCheckboxesExample = () => (\n  <div>\n    <Checkbox id="first" labelText="First Checkbox" defaultChecked />\n    <Checkbox id="second" labelText="Second Checkbox" />\n    <Checkbox id="third" labelText="Third Checkbox" />\n  </div>\n);\n\nexport default multipleCheckboxesExample;\n'},2076:function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),r=i(n(2)),l=i(n(842));function i(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m={onChange:r.default.func},f={onChange:void 0},b=function(e){function t(e){var n,o,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(a=s(t).call(this,e))||"object"!==d(a)&&"function"!=typeof a?u(o):a).onChange=n.onChange.bind(u(n)),n}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(o=[{key:"onChange",value:function(){this.props.onChange()}},{key:"render",value:function(){var e=this.props.onChange;return a.default.createElement(l.default,{id:"mobileCheckbox",labelText:"Toggle to trigger resize. Window size needs to be less than or equal to 1024px.",onChange:e})}}])&&c(n.prototype,o),r&&c(n,r),t}(a.default.Component);b.propTypes=m,b.defaultProps=f;var h=b;t.default=h},2982:function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=C(n(0)),r=C(n(823)),l=C(n(2061)),i=n(1124),d=C(n(2062)),c=C(n(2063)),s=C(n(2064)),u=C(n(2065)),p=C(n(2066)),m=C(n(2067)),f=C(n(2068)),b=C(n(2069)),h=C(n(2070)),g=C(n(2071)),y=C(n(2072)),x=C(n(2073)),k=C(n(2074)),v=C(n(2075)),_=C(n(2076));function C(e){return e&&e.__esModule?e:{default:e}}function T(e){return(T="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}function w(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var P=function(e){function t(){var e,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(e=!(o=E(t).call(this))||"object"!==T(o)&&"function"!=typeof o?O(n):o).state={isMobile:!1},e.onChange=e.onChange.bind(O(e)),e}var n,o,C;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,e),n=t,(o=[{key:"onChange",value:function(){window.ontouchstart?this.state.isMobile&&(delete window.ontouchstart,this.setState({isMobile:!1})):(this.setState({isMobile:!0}),window.ontouchstart="true")}},{key:"render",value:function(){return a.default.createElement(r.default,{packageName:i.name,packageVersion:i.version,readme:l.default,srcPath:"https://github.com/cerner/terra-core/tree/master/packages/".concat(i.name),examples:[{title:"Default Checkbox",example:a.default.createElement(s.default,null),source:u.default},{title:"Disabled Checkbox",example:a.default.createElement(p.default,null),source:m.default},{title:"Hidden Label Checkbox",example:a.default.createElement(f.default,null),source:b.default},{title:"Long Text Checkbox",example:a.default.createElement(h.default,null),source:g.default},{title:"Multiple Inline Checkboxes",example:a.default.createElement(y.default,null),source:x.default},{title:"Multiple Checkboxes - first defaults to checked",example:a.default.createElement(k.default,null),source:v.default},{title:"[Theme Specific] Resize checkboxes on non-desktop touch device",example:a.default.createElement(_.default,{onChange:this.onChange})}],propsTables:[{componentName:"Checkbox",componentSrc:c.default,componentProps:d.default}]})}}])&&w(n.prototype,o),C&&w(n,C),t}(a.default.Component);t.default=P},821:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(n(0)),a=l(n(4)),r=l(n(822));function l(e){return e&&e.__esModule?e:{default:e}}var i=a.default.bind(r.default),d=function(e){var t=e.packageName,n=e.packageUrl,a=e.packageVersion;return a?o.default.createElement("div",{className:i("badge-container")},o.default.createElement("a",{className:i("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(a)},o.default.createElement("span",{className:i("badge-name")},n?"package":"npm"),o.default.createElement("span",{className:i("badge-version")},"v".concat(a)))):o.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(t)},o.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(t),alt:"NPM version"}))};t.default=d},822:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___1Cu7Z","badge-container":"NpmBadge-module__badge-container___2zgQi","badge-name":"NpmBadge-module__badge-name___17OzL","badge-version":"NpmBadge-module__badge-version___2Vkei"}},823:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(n(0)),a=u(n(2)),r=u(n(829)),l=u(n(828)),i=u(n(4)),d=u(n(821)),c=u(n(824)),s=u(n(827));function u(e){return e&&e.__esModule?e:{default:e}}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=i.default.bind(s.default),b={children:a.default.node,packageName:a.default.string,packageUrl:a.default.string,packageVersion:a.default.string,readme:a.default.string,srcPath:a.default.string,examples:a.default.arrayOf(a.default.shape({title:a.default.string,description:a.default.node,example:a.default.element,source:a.default.string})),propsTables:a.default.arrayOf(a.default.shape({componentSrc:a.default.string,componentName:a.default.string,componentProps:a.default.string,propsResolution:a.default.string}))},h=function(e){var t,n=e.packageName,a=e.packageVersion,i=e.packageUrl,s=e.readme,u=e.srcPath,b=e.examples,h=e.propsTables,g=e.children,y=m(e,["packageName","packageVersion","packageUrl","readme","srcPath","examples","propsTables","children"]),x=b;h&&(t=h);for(var k=0,v=0;v<x.length;v+=1)x[v].id=k,k+=1;if(t)for(var _=0;_<t.length;_+=1)t[_].id=k,k+=1;var C,T=f(["doc-template",y.className]);if(x.length>0){var w=x.length>1?"Examples":"Example";C=o.default.createElement("h1",{className:f("examples-header")},w)}var E=o.default.createElement(d.default,{packageName:n,packageUrl:i,packageVersion:a});return o.default.createElement("div",p({},y,{className:T}),o.default.createElement("div",{className:f("doc-card")},n&&E,s&&o.default.createElement(l.default,{src:s}),u&&o.default.createElement("a",{href:u},"View component source code")),C,x.map((function(e){return o.default.createElement(c.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})})),o.default.createElement("div",{className:f("doc-card")},h[0]&&h[0].componentProps?t.map((function(e){return o.default.createElement("div",{className:f("props-table-markdown"),key:e.id},o.default.createElement("h2",null,e.componentName," Props"),o.default.createElement(l.default,{src:e.componentProps}))})):t.map((function(e){return o.default.createElement(r.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})}))),g&&o.default.createElement("div",{className:f("doc-card")},g))};h.propTypes=b,h.defaultProps={packageName:"",packageUrl:"",packageVersion:"",readme:"",srcPath:"",examples:[],propsTables:[]};var g=h;t.default=g},824:function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(0)),r=u(n(2)),l=u(n(830)),i=u(n(831)),d=u(n(4)),c=u(n(825)),s=u(n(826));function u(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}l.default.registerLanguage("jsx",i.default);var x=d.default.bind(c.default),k={example:r.default.element,exampleSrc:r.default.string,title:r.default.string,description:r.default.node,children:r.default.element},v={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},_=function(e){function t(e){var n,o,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(a=h(t).call(this,e))||"object"!==p(a)&&"function"!=typeof a?g(o):a).state={isExpanded:!1,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(g(n)),n.handleCodeToggle=n.handleCodeToggle.bind(g(n)),n}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,(o=[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.example,o=e.exampleSrc,r=e.children,i=e.description,d=f(e,["title","example","exampleSrc","children","description"]),c=this.state,u=c.isExpanded,p={};return c.isBackgroundTransparent&&(p={backgroundColor:"rgba(0, 0, 0, 0)"}),a.default.createElement("div",m({},d,{className:x("template",d.className)}),t&&a.default.createElement("div",{className:x("header")},a.default.createElement("h2",{className:x("title")},t)),a.default.createElement("div",{className:x("content"),style:p},i&&a.default.createElement("div",{className:x("description")},i),n,r),o&&a.default.createElement("div",{className:x("footer")},a.default.createElement("div",{className:x("button-container")},a.default.createElement("button",{type:"button",className:x("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),a.default.createElement("button",{type:"button",className:x("code-toggle"),onClick:this.handleCodeToggle},a.default.createElement("span",{className:x("chevron-left")}),a.default.createElement("span",null,"Code"),a.default.createElement("span",{className:x("chevron-right")}))),a.default.createElement("div",{className:x("code",{"is-expanded":u}),"aria-hidden":!u},u?a.default.createElement(l.default,{language:"jsx",style:s.default,customStyle:{margin:"0",borderRadius:"0"}},o):void 0)))}}])&&b(n.prototype,o),r&&b(n,r),t}(a.default.Component);_.propTypes=k,_.defaultProps=v;var C=_;t.default=C},825:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},826:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o="#D8DEE9",a="#B2B2B2",r="#c5a5c5",l="#5a9bcf",i="#8dc891",d="#d7deea",c="#FAC863",s={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:r},comment:{color:a},"block-comment":{color:a},prolog:{color:a},doctype:{color:a},cdata:{color:a},property:{color:l},number:{color:l},"function-name":{color:l},constant:{color:l},symbol:{color:l},deleted:{color:l},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:i},punctuation:{color:"#88C6BE"},selector:{color:o},char:{color:o},builtin:{color:o},inserted:{color:o},function:{color:"#79b6f2"},operator:{color:d},entity:{color:d,cursor:"help"},url:{color:d},".language-css .token.string":{color:d},".style .token.string":{color:d},variable:{color:d},"attr-value":{color:i},keyword:{color:r},"at-rule":{color:c},"class-name":{color:c},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};t.default=s},827:function(e,t,n){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe","props-table-markdown":"DocTemplate-module__props-table-markdown___1926W"}},842:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=d(n(0)),a=d(n(2)),r=d(n(4)),l=d(n(878)),i=d(n(879));function d(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.default.bind(l.default),f={checked:a.default.bool,defaultChecked:a.default.bool,id:a.default.string,inputAttrs:a.default.object,disabled:a.default.bool,isInline:a.default.bool,isLabelHidden:a.default.bool,labelText:a.default.node.isRequired,labelTextAttrs:a.default.object,name:a.default.string,onBlur:a.default.func,onChange:a.default.func,onFocus:a.default.func,value:a.default.string},b={checked:void 0,defaultChecked:void 0,id:void 0,inputAttrs:{},disabled:!1,isInline:!1,isLabelHidden:!1,labelTextAttrs:{},name:null,onBlur:void 0,onChange:void 0,onFocus:void 0,value:void 0},h=function(e){var t=e.checked,n=e.defaultChecked,a=e.inputAttrs,r=e.id,l=e.disabled,d=e.isInline,f=e.isLabelHidden,b=e.labelText,h=e.labelTextAttrs,g=e.name,y=e.onBlur,x=e.onChange,k=e.onFocus,v=e.value,_=p(e,["checked","defaultChecked","inputAttrs","id","disabled","isInline","isLabelHidden","labelText","labelTextAttrs","name","onBlur","onChange","onFocus","value"]),C=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},a);void 0!==t?C.checked=t:C.defaultChecked=n;var T=m(["checkbox",{"is-inline":d},_.className]),w=m(["label",{"is-disabled":l},{"is-mobile":i.default.isConsideredMobileDevice()},h.className]),E=m(["native-input",a.className]),O=m(["label-text",{"is-hidden":f},{"is-mobile":i.default.isConsideredMobileDevice()}]),j=null;return f?(C["aria-label"]=b,j=o.default.createElement("span",c({},h,{className:O}))):j=o.default.createElement("span",c({},h,{className:O}),b),o.default.createElement("div",c({},_,{className:T}),o.default.createElement("label",{htmlFor:r,className:w},o.default.createElement("input",c({},C,{type:"checkbox",id:r,disabled:l,name:g,value:v,onChange:x,onFocus:k,onBlur:y,className:E})),j))};h.propTypes=f,h.defaultProps=b,h.isCheckbox=!0;var g=h;t.default=g},878:function(e,t,n){e.exports={checkbox:"Checkbox-module__checkbox___1DzDw",label:"Checkbox-module__label___GWPVb","is-mobile":"Checkbox-module__is-mobile___13DUd","native-input":"Checkbox-module__native-input___1CCoe","label-text":"Checkbox-module__label-text___3q5Qm","is-hidden":"Checkbox-module__is-hidden___1VqYx","is-disabled":"Checkbox-module__is-disabled___3ERR9","is-inline":"Checkbox-module__is-inline___2HYdD"}},879:function(e,t,n){"use strict";var o={isConsideredMobileDevice:function(){return window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)}};e.exports=o}}]);
//# sourceMappingURL=89-769b4bf44bdcee2ce1a3.js.map