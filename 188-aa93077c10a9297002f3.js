(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{2356:function(e,n,t){"use strict";t.r(n),n.default="ChangeLog\n=========\n\nUnreleased\n----------\n\n5.36.0 - (October 30, 2019)\n------------------\n### Fixed\n* Fixed IE issue that required two clicks to open the dropdown menu after initial selection.\n* Fixed lint warnings for multiple empty lines\n* Fixed re-renders of scroll after every componentDidUpdate call.\n\n### Changed\n* Duplicate ID in examples changed.\n\n5.35.0 - (October 18, 2019)\n------------------\n### Fixed\n* Fixed form-select placeholder color text to pass contrast test and added wdio test\n\n5.34.0 - (October 15, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n5.33.0 - (October 14, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n5.32.0 - (October 3, 2019)\n------------------\n### Added\n* Added `isTouchAccessible` prop for all variants that have an input (e.g. `combobox`, `multiple`, `search`, and `tag`) to improve mobile accessibility\n  * When used, the dropdown menu is no longer portaled: it is rendered in the normal DOM flow with `position: absolute` allowing easier navigation to the list options with the virtual cursor used in mobile screen readers\n* Added `isIncomplete` prop to show incomplete stylings.\n\n5.31.0 - (September 26, 2019)\n------------------\n### Fixed\n* Fixed keyboard navigation when interacting with clear option on single and combobox variants\n\n5.30.0 - (September 19, 2019)\n------------------\n### Changed\n* Removed `details` tag from doc-site.\n\n### Fixed\n* Restore passivity with prop-types for all variants\n\n### Added\n* Added en-CA translations.\n\n5.29.0 - (September 6, 2019)\n------------------\n### Fixed\n* MultiSelect placeholder is no longer permanently visible\n\n### Added\n* Added AT announcement for onClick and backspace in MultiSelect and TagSelect\n* Props table markdown file import added to doc site page\n\n### Removed\n* Removed `inherit` fallback for `--terra-form-select-hover-color` CSS custom property\n\n5.28.0 - (September 3, 2019)\n------------------\n### Changed\n* Updated the 'keycode-js' version from '^1.0.4' to '^2.0.1'.\n\n5.27.0 - (August 21, 2019)\n------------------\n### Changed\n* Import for package version from package.json added to doc page\n* Switch from Object.assign to Object spread syntax.\n* Cleaned up imports in examples and test files\n\n5.26.0 - (August 14, 2019)\n------------------\n### Removed\n* Removed explicit calls to set `caret-color` to `transparent` in WDIO tests\n\n### Added\n* Added Combobox and ComboboxField exports and doc site entries\n* Added SingleSelect and SingleSelectField exports and doc site entries\n* Added MultiSelect and MultiSelectField exports and doc site entries\n* Added SearchSelect and SearchSelectField exports and doc site entries\n* Added TagSelect and TagSelectField exports and doc site entries\n* Added aria-label to resolve accessibility violation with axe-core v3.3.0.\n* Updated translations.\n\n### Changed\n* Split select implementation into individual variants\n* Components updated to use `injectIntl` to interface with `react-intl's` `intl` context.\n* updated package.json test scripts\n* Update tests for dev-site v6\n\n5.25.0 - (July 30, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n5.24.0 - (July 24, 2019)\n------------------\n### Changed\n* Update Spanish translations\n\n5.23.0 - (July 17, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n5.22.0 - (July 17, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n5.21.0 - (July 16, 2019)\n------------------\n### Added\n* Added documentation on required peerDependencies\n\n### Fixed\n* Issue with invalid options (options with only spaces) being added to the dropdown menu in combobox variant.\n\n5.20.0  - (July 11, 2019)\n------------------\n### Changed\n* Components updated to use `injectIntl` to interface with `react-intl's` `intl` context.\n* Update tests to use `Terra.describeViewports` for setting viewports and use `Terra.it.validatesElement`\n* Updated Docs around the requirement of terra-base and aggregate-translations.\n\n5.19.0 - (July 9, 2019)\n------------------\n### Fixed\n* Issue where input would remain focused after clicking away from select menu after enter had been used to select an item in `multiselect` and `tag` variants.\n\n5.18.0 - (June 28, 2019)\n------------------\n### Changed\n* Removed all inline styles from Dev-site components and implemented the same styles using external css.\n\n5.17.0 - (June 18, 2019)\n------------------\n### Fixed\n* Additional null check added to private menu to prevent error from empty query\n\n### Changed\n* Added aria roles for optgroups\n* Added `required` prop\n* Added `isSelect` type on Select component to help with component identity\n\n5.16.0 - (June 11, 2019)\n------------------\n### Removed\n* Removed node_modules from .npmignore\n* Removed vendor style rule added to fade placeholder text. Since Autoprefixer V9 resolves vendor prefix issue.\n\n### Changed\n* Made required updates to consume terra-toolkit v5 and terra-dev-site v5\n\n5.15.0 - (May 1, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n* Added 'disabled' prop to FormSelectField component\n\n### Fixed\n* Add vendor style rule for IE11 to fade placeholder text.\n\n5.14.0 - (April 16, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n5.13.0 - (April 9, 2019)\n------------------\n### Fixed\n* Issue with input element wrapping to new line too soon in multiple and tag variants\n* Unintended height increase\n* Null checks added to private Menu to prevent errors from empty queries\n\n5.12.0 - (April 2, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n5.11.0 - (March 26, 2019)\n------------------\n### Changed\n* Update react/react-dom peer-dependency to latest stable minor release\n* Improved experience using the select component with JAWS, VoiceOver, and VoiceOver on iOS\n\n### Removed\n* Removed peer dependency on terra-base\n* Removed baseStyles import from terra-base\n\n5.10.0 - (March 21, 2019)\n------------------\n### Fixed\n* Checked for undefined and null for defaultValue\n* Fixed passed in onClick event not firing depending on click position on terra-form-select\n\n### Added\n* Added new translation strings\n* Added logic to enable accessible mapping of InputField and it's related error and help text messages\n* Added new EN translation strings\n\n### Changed\n* Replaced local keyCode values with keycode-js npm package\n* Update Jest tests to use terra-enzyme-intl\n\n5.9.0 - (March 6th, 2019)\n------------------\n### Added\n* Added option to limit the maximum number of selection count for multi-select variants.\n* Introduce an option to allow clearing the currently selected item\n\n5.8.0 - (March 5th, 2019)\n------------------\n### Fixed\n* Race condition where timeout would update after the component is not mounted\n* 'Unable to get property 'getInstance' of undefined or null reference' error in IE\n\n5.7.0 - (February 26, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n### Added\n* New CSS custom property: `--terra-form-select-disabled-placeholder-color`\n* New CSS custom property: `--terra-form-select-disabled-placeholder-font-style`\n\n### Fixed\n* Added en-AU translations\n* Fixed issue preventing the input from inheriting the base font family\n* Fixed a Select Menu jest test that was broken with the release of enzyme-3.9.0\n\n5.6.0 - (February 12, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n5.5.0 - (February 5, 2019)\n------------------\n### Added\n* Dropdown that announces no search results to screen reader\n\n### Changed\n* Made it easier for screen readers to read disabled state to users\n* Minor dependency version bump\n\n5.4.0 - (January 28, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n5.3.0 - (January 26, 2019)\n------------------\n### Fixed\n* Increased terra-form-select default text color contrast for accessibility\n\n5.2.0 - (January 22, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n5.1.0 - (January 22, 2019)\n------------------\n### Fixed\n* Fixed Dropdown closing issue on Hold and Scroll in IE\n* Updated Frame to remove isAbove styling when selecting item in single select list\n* Changed browser.execute functions in wdio spec to be strings for IE and FF driver compatibility\n\n### Changed\n* Updated Option prop documentation\n\n5.0.0 - (January 8, 2019)\n------------------\n### Changed\n* Updated theme variables\n\n4.26.0 - (January 2, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n### Added\n* Added missing ar translations\n* maxWidth prop added to pass through to terra-form-field\n\n4.25.1 - (November 20, 2018)\n------------------\n### Changed\n* Patch dependency version bump\n\n4.25.0 - (November 19, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n4.24.0 - (November 13, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n4.23.0 - (November 9, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n4.22.0 - (October 30, 2018)\n------------------\n### Changed\n* Update mixin import to be more explicit\n\n4.21.0 - (October 24, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n4.20.0 - (October 16, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n### Added\n* Theme variable for input height\n\n### Fixed\n* Normalized duplicate padding theme variable\n\n4.19.0 - (October 8, 2018)\n------------------\n### Added\n* First class prop support and documentation for onBlur, onFocus, and onClick\n\n4.18.0 - (September 25, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n4.17.1 - (September 6, 2018)\n------------------\n### Changed\n* Patch dependency version bump\n\n4.17.0 - (September 5, 2018)\n------------------\n### Changed\n* Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2\n* Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2\n\n4.16.0 - (September 4, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n4.15.0 - (August 29, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n4.14.0 - (August 8, 2018)\n------------------\n### Changed\n* Updated component internationalization error message\n\n4.13.0 - (August 1, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n4.12.0 - (July 25, 2018)\n------------------\n### Added\n* Add sv and sv-SE translations\n\n4.11.1 - (July 20, 2018)\n------------------\n### Changed\n* Clean up double .module extension on SCSS files\n\n4.11.0 - (July 19, 2018)\n------------------\n### Changed\n* Add .module extension to SCSS file(s)\n\n4.10.0 - (July 17, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n* Formatting changes per eslint v4 update\n* Added tabIndex=\"0\" to role=\"listbox\"\n* Reordered react methods to match preferred linter order\n\n4.9.0 - (July 10, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n### Added\n* A maxHeight prop for setting a custom max height of the dropdown\n\n4.8.0 - (July 3, 2018)\n------------------\n### Added\n* Added CSS style to display the select box-shadow over the toggle border\n* Added CSS custom property to enable theming of disabled state arrow icon\n\n### Fixed\n* Null check the active state before performing findByValue\n\n4.7.0 - (June 28, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n### Added\n* Added change log to the documentation on terra-dev-site\n\n4.6.0 - (June 22, 2018)\n------------------\n### Changed\n* Moved terra-base from dependency to peerDependency\n* Input text color to inherit base text color\n\n4.5.0 - (June 19, 2018)\n------------------\n### Added\n* CSS variable for placeholder font size\n* Upgrade Guide and Changelog to terra-dev-site\n* Non-breaking character for empty placeholders\n\n### Fixed\n* Renamed duplicate CSS variables\n\n4.4.0 - (June 13, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n4.3.0 - (June 12, 2018)\n------------------\n### Changed\n* Updated defaultPlaceholder typo\n* Updated field documentation to be more inline with other examples\n* Updated \"test:jest\" script to work on windows.\n* Updated to allow a custom onBlur\n\n4.2.0 - (May 30, 2018)\n------------------\n### Changed\n* Updated structure to match terra-dev-site 1.0 and moved doc examples internal.\n\n4.1.0 - (May 25, 2018)\n------------------\n### Added\n* SelectField - A convenience component that wraps a select within a field.\n\n4.0.0 - (May 23, 2018)\n------------------\n### Breaking Changes - [Upgrade Guide](https://github.com/cerner/terra-core/tree/master/packages/terra-form-select/docs/UPGRADEGUIDE.md)\n* Removed `boundingRef`\n* Removed `isPlaceholderHidden` - A placeholder option is no longer added by default.\n* Removed `name` - Terra recommends handling validations with [react-final-form](https://github.com/final-form/react-final-form).\n* Removed `required` - Terra recommends handling validations with [react-final-form](https://github.com/final-form/react-final-form).\n* Removed `releaseFocus` - Focus no longer needs to be managed.\n* Removed `requestFocus` - Focus no longer needs to be managed.\n* The `onChange` callback returns the value as the only parameter.\n  * `onChange(event, value, name)` -> `onChange(value)`\n\n\n### Added\n* `dropdownAttrs` - Spreads custom attributes onto the dropdown.\n* `noResultContent` - Displays when no search results are found.\n* `onDeselect` - Callback invoked when an option is deselected.\n* `onSelect` - Callback invoked when an option is selected.\n* `onSearch` - Callback invoked when the search has changed.\n* `optionFilter` - Custom callback filter invoked for each option during filtering.\n* `placeholder` - A text placeholder.\n* `variant` - Added new behavior variants. default, combobox, multiple, search, or tag.\n* `Select.OptGroup` - Groups options into sections.\n\n3.1.0 - (May 16, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n3.0.0 - (May 9, 2018)\n------------------\n### Major Change\n* Updated to use terra-popup v4.0.0\n\n2.8.0 - (May 2, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n### Changed\n* Updated dependency on terra-popup.\n\n2.7.0 - (April 20, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.6.0 - (April 15, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.5.0 - (April 5, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.4.0 - (March 30, 2018)\n------------------\n### Added\n* Add variable with default for background-color of select and border of select-menu\n\n2.3.0 - (March 14, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.2.0 - (March 6, 2018)\n------------------\n### Removed\n* Removed props-table script from package.json\n\n2.1.0 - (February 26, 2018)\n------------------\n### Added\n* Added functionality to hide placeholder\n\n2.0.1 - (February 13, 2018)\n------------------\n### Changed\n* Updated peerDependencies\n\n2.0.0 - (February 12, 2018)\n------------------\n### Changed\n* Updated to use React 16\n\n1.4.0 - (February 1, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.3.0 - (January 18, 2018)\n------------------\n### Added\n* Added name helper param to onChange callback\n\n1.2.0 - (January 5, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.1.0 - (December 5, 2017)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.0.0 - (November 28, 2017)\n------------------\nInitial stable release\n"},3012:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=d(t(0)),a=d(t(823)),r=d(t(2356));function d(e){return e&&e.__esModule?e:{default:e}}var l=function(){return o.default.createElement(a.default,{packageName:"terra-form-select",srcPath:"https://github.com/cerner/terra-core/tree/master/packages/terra-form-select",readme:r.default})};n.default=l},821:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=d(t(0)),a=d(t(4)),r=d(t(822));function d(e){return e&&e.__esModule?e:{default:e}}var l=a.default.bind(r.default),i=function(e){var n=e.packageName,t=e.packageUrl,a=e.packageVersion;return a?o.default.createElement("div",{className:l("badge-container")},o.default.createElement("a",{className:l("badge"),href:t||"https://www.npmjs.org/package/".concat(n,"/v/").concat(a)},o.default.createElement("span",{className:l("badge-name")},t?"package":"npm"),o.default.createElement("span",{className:l("badge-version")},"v".concat(a)))):o.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(n)},o.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(n),alt:"NPM version"}))};n.default=i},822:function(e,n,t){e.exports={badge:"NpmBadge-module__badge___1Cu7Z","badge-container":"NpmBadge-module__badge-container___2zgQi","badge-name":"NpmBadge-module__badge-name___17OzL","badge-version":"NpmBadge-module__badge-version___2Vkei"}},823:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=p(t(0)),a=p(t(2)),r=p(t(829)),d=p(t(828)),l=p(t(4)),i=p(t(821)),c=p(t(824)),s=p(t(827));function p(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function m(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var f=l.default.bind(s.default),g={children:a.default.node,packageName:a.default.string,packageUrl:a.default.string,packageVersion:a.default.string,readme:a.default.string,srcPath:a.default.string,examples:a.default.arrayOf(a.default.shape({title:a.default.string,description:a.default.node,example:a.default.element,source:a.default.string})),propsTables:a.default.arrayOf(a.default.shape({componentSrc:a.default.string,componentName:a.default.string,componentProps:a.default.string,propsResolution:a.default.string}))},h=function(e){var n,t=e.packageName,a=e.packageVersion,l=e.packageUrl,s=e.readme,p=e.srcPath,g=e.examples,h=e.propsTables,b=e.children,v=m(e,["packageName","packageVersion","packageUrl","readme","srcPath","examples","propsTables","children"]),y=g;h&&(n=h);for(var _=0,x=0;x<y.length;x+=1)y[x].id=_,_+=1;if(n)for(var C=0;C<n.length;C+=1)n[C].id=_,_+=1;var w,S=f(["doc-template",v.className]);if(y.length>0){var k=y.length>1?"Examples":"Example";w=o.default.createElement("h1",{className:f("examples-header")},k)}var A=o.default.createElement(i.default,{packageName:t,packageUrl:l,packageVersion:a});return o.default.createElement("div",u({},v,{className:S}),o.default.createElement("div",{className:f("doc-card")},t&&A,s&&o.default.createElement(d.default,{src:s}),p&&o.default.createElement("a",{href:p},"View component source code")),w,y.map((function(e){return o.default.createElement(c.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})})),o.default.createElement("div",{className:f("doc-card")},h[0]&&h[0].componentProps?n.map((function(e){return o.default.createElement("div",{className:f("props-table-markdown"),key:e.id},o.default.createElement("h2",null,e.componentName," Props"),o.default.createElement(d.default,{src:e.componentProps}))})):n.map((function(e){return o.default.createElement(r.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})}))),b&&o.default.createElement("div",{className:f("doc-card")},b))};h.propTypes=g,h.defaultProps={packageName:"",packageUrl:"",packageVersion:"",readme:"",srcPath:"",examples:[],propsTables:[]};var b=h;n.default=b},824:function(e,n,t){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=p(t(0)),r=p(t(2)),d=p(t(830)),l=p(t(831)),i=p(t(4)),c=p(t(825)),s=p(t(826));function p(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}function m(){return(m=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function f(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function g(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,n){return(v=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}d.default.registerLanguage("jsx",l.default);var y=i.default.bind(c.default),_={example:r.default.element,exampleSrc:r.default.string,title:r.default.string,description:r.default.node,children:r.default.element},x={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},C=function(e){function n(e){var t,o,a;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),o=this,(t=!(a=h(n).call(this,e))||"object"!==u(a)&&"function"!=typeof a?b(o):a).state={isExpanded:!1,isBackgroundTransparent:!1},t.handleBgToggle=t.handleBgToggle.bind(b(t)),t.handleCodeToggle=t.handleCodeToggle.bind(b(t)),t}var t,o,r;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&v(e,n)}(n,e),t=n,(o=[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,n=e.title,t=e.example,o=e.exampleSrc,r=e.children,l=e.description,i=f(e,["title","example","exampleSrc","children","description"]),c=this.state,p=c.isExpanded,u={};return c.isBackgroundTransparent&&(u={backgroundColor:"rgba(0, 0, 0, 0)"}),a.default.createElement("div",m({},i,{className:y("template",i.className)}),n&&a.default.createElement("div",{className:y("header")},a.default.createElement("h2",{className:y("title")},n)),a.default.createElement("div",{className:y("content"),style:u},l&&a.default.createElement("div",{className:y("description")},l),t,r),o&&a.default.createElement("div",{className:y("footer")},a.default.createElement("div",{className:y("button-container")},a.default.createElement("button",{type:"button",className:y("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),a.default.createElement("button",{type:"button",className:y("code-toggle"),onClick:this.handleCodeToggle},a.default.createElement("span",{className:y("chevron-left")}),a.default.createElement("span",null,"Code"),a.default.createElement("span",{className:y("chevron-right")}))),a.default.createElement("div",{className:y("code",{"is-expanded":p}),"aria-hidden":!p},p?a.default.createElement(d.default,{language:"jsx",style:s.default,customStyle:{margin:"0",borderRadius:"0"}},o):void 0)))}}])&&g(t.prototype,o),r&&g(t,r),n}(a.default.Component);C.propTypes=_,C.defaultProps=x;var w=C;n.default=w},825:function(e,n,t){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},826:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o="#D8DEE9",a="#B2B2B2",r="#c5a5c5",d="#5a9bcf",l="#8dc891",i="#d7deea",c="#FAC863",s={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:r},comment:{color:a},"block-comment":{color:a},prolog:{color:a},doctype:{color:a},cdata:{color:a},property:{color:d},number:{color:d},"function-name":{color:d},constant:{color:d},symbol:{color:d},deleted:{color:d},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:l},punctuation:{color:"#88C6BE"},selector:{color:o},char:{color:o},builtin:{color:o},inserted:{color:o},function:{color:"#79b6f2"},operator:{color:i},entity:{color:i,cursor:"help"},url:{color:i},".language-css .token.string":{color:i},".style .token.string":{color:i},variable:{color:i},"attr-value":{color:l},keyword:{color:r},"at-rule":{color:c},"class-name":{color:c},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};n.default=s},827:function(e,n,t){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe","props-table-markdown":"DocTemplate-module__props-table-markdown___1926W"}}}]);
//# sourceMappingURL=188-aa93077c10a9297002f3.js.map