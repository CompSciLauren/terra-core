(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{3331:function(e,t,o){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(o(0)),a=l(o(4)),i=l(o(834)),u=l(o(837));function l(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}function c(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=a.default.bind(u.default),d=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e=f(this,p(t).call(this)),navigator.maxTouchPoints&&0!==navigator.maxTouchPoints||(e.resetMaxTouchPoints=!0,e.previousMaxTouchPoints=navigator.maxTouchPoints,Object.defineProperty(navigator,"maxTouchPoints",{value:1,configurable:!0})),e}var o,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),o=t,(r=[{key:"componentDidUpdate",value:function(){navigator.maxTouchPoints&&0!==navigator.maxTouchPoints||(this.resetMaxTouchPoints=!0,this.previousMaxTouchPoints=navigator.maxTouchPoints,Object.defineProperty(navigator,"maxTouchPoints",{value:1,configurable:!0}))}},{key:"componentWillUnmount",value:function(){this.resetMaxTouchPoints&&Object.defineProperty(navigator,"maxTouchPoints",{value:this.previousMaxTouchPoints,configurable:!0})}},{key:"render",value:function(){return n.default.createElement("div",{className:h("content-wrapper")},n.default.createElement(i.default,{id:"auto-resizable",cols:"2",isAutoResizable:!0,defaultValue:"Default Value",ariaLabel:"label"}))}}])&&c(o.prototype,r),a&&c(o,a),t}(n.default.Component);t.default=d},834:function(e,t,o){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.TextareaSize=t.default=void 0;var n=l(o(0)),a=l(o(2)),i=l(o(4)),u=l(o(836));function l(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}function f(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function p(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function b(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function h(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=i.default.bind(u.default),g=function(){return window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)};t.TextareaSize={SMALL:"small",MEDIUM:"medium",LARGE:"large",FULL:"full"};var x={small:2,medium:5,large:10},w={ariaLabel:a.default.string,defaultValue:a.default.string,disabled:a.default.bool,isAutoResizable:a.default.bool,isIncomplete:a.default.bool,isInvalid:a.default.bool,name:a.default.string,onChange:a.default.func,onFocus:a.default.func,placeholder:a.default.string,required:a.default.bool,rows:a.default.number,size:a.default.oneOf(["small","medium","large","full"]),value:a.default.string,refCallback:a.default.func},O={defaultValue:void 0,disabled:!1,name:null,isAutoResizable:!1,isIncomplete:!1,isInvalid:!1,onChange:void 0,placeholder:void 0,required:!1,rows:null,size:"small",value:void 0,refCallback:void 0},_=function(e){function t(e){var o,r,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(o=!(n=d(t).call(this,e))||"object"!==s(n)&&"function"!=typeof n?y(r):n).isMobileDevice=g(),o.onChange=o.onChange.bind(y(o)),o.onFocus=o.onFocus.bind(y(o)),o}var o,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),o=t,(r=[{key:"componentDidMount",value:function(){var e=Math.ceil(parseInt(window.getComputedStyle(this.textarea).lineHeight,0));this.textarea.currentLineHeight=e,this.setBaseHeights(),this.props.isAutoResizable&&!this.isMobileDevice&&this.resizeTextarea()}},{key:"componentDidUpdate",value:function(e){this.props.size===e.size&&this.props.rows===e.rows||this.setBaseHeights()}},{key:"onFocus",value:function(e){if(this.props.isAutoResizable&&!this.isMobileDevice){var t=Math.ceil(parseInt(window.getComputedStyle(this.textarea).lineHeight,0));this.textarea.currentLineHeight!==t&&(this.textarea.currentLineHeight=t,this.setBaseHeights())}this.props.onFocus&&this.props.onFocus(e)}},{key:"onChange",value:function(e){this.props.isAutoResizable&&!this.isMobileDevice&&this.resizeTextarea(),this.props.onChange&&this.props.onChange(e)}},{key:"setBaseHeights",value:function(){var e=this.textarea.value;this.textarea.value="",this.textarea.baseScrollHeight=this.textarea.scrollHeight,this.textarea.style.minHeight="0px",this.textarea.style.minHeight="".concat(this.textarea.scrollHeight,"px"),this.textarea.value=e}},{key:"resizeTextarea",value:function(){var e=this.props.rows||x[this.props.size];this.textarea.rows=e;var t=Math.ceil((this.textarea.scrollHeight-this.textarea.baseScrollHeight)/this.textarea.currentLineHeight);this.textarea.rows=e+t}},{key:"render",value:function(){var e,t=this,o=this.props,r=o.name,a=o.required,i=(o.onChange,o.onFocus,o.placeholder),u=o.isAutoResizable,l=o.isIncomplete,s=o.isInvalid,h=o.value,d=o.defaultValue,y=o.rows,m=o.size,g=o.ariaLabel,w=o.refCallback,O=function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?f(o,!0).forEach((function(t){p(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):f(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},b(o,["name","required","onChange","onFocus","placeholder","isAutoResizable","isIncomplete","isInvalid","value","defaultValue","rows","size","ariaLabel","refCallback"])),_=v(["textarea",{"form-error":s},{"form-incomplete":l&&a&&!s},{"full-size":"full"===m},{resizable:u&&!this.isMobileDevice},O.className]);O&&Object.prototype.hasOwnProperty.call(O,"aria-label")?e=g||O["aria-label"]:g&&(e=g),O["aria-label"]=e,a&&(O["aria-required"]="true");var P=y||x[m];return void 0!==h?O.value=h:O.defaultValue=d,n.default.createElement("textarea",c({},O,{ref:function(e){t.textarea=e,w&&w(e)},name:r,onFocus:this.onFocus,onChange:this.onChange,placeholder:i,required:a,rows:P,className:_}))}}])&&h(o.prototype,r),a&&h(o,a),t}(n.default.Component);_.propTypes=w,_.defaultProps=O,_.isTextarea=!0;var P=_;t.default=P},836:function(e,t,o){e.exports={textarea:"Textarea-module__textarea___2LAQp","full-size":"Textarea-module__full-size___oV5Sf",resizable:"Textarea-module__resizable___MaiV4","form-error":"Textarea-module__form-error___3YkPI","form-incomplete":"Textarea-module__form-incomplete___30YTC"}},837:function(e,t,o){e.exports={"content-wrapper":"Textarea-test-module__content-wrapper___2IpaV"}}}]);
//# sourceMappingURL=268-12fc30991aa2e47618f3.js.map