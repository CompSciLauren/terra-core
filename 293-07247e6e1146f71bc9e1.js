(window.webpackJsonp=window.webpackJsonp||[]).push([[293],{1433:function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(0)),s=a(n(2)),r=a(n(1434));function a(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function h(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v={EXTRA_FINE:1,FINE:2,MEDIUM:4,HEAVY:6},y=0,g={lineWidth:s.default.oneOf([v.EXTRA_FINE,v.FINE,v.MEDIUM,v.HEAVY]),lineSegments:s.default.array,onChange:s.default.func},b={lineWidth:v.FINE,lineSegments:[],onChange:void 0},S=function(e){function t(e){var n,o,i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(i=f(t).call(this,e))||"object"!==u(i)&&"function"!=typeof i?m(o):i).state={lineSegments:e.lineSegments},n.mouseInBounds=n.mouseInBounds.bind(m(n)),n.mouseDown=n.mouseDown.bind(m(n)),n.mouseUp=n.mouseUp.bind(m(n)),n.mouseXY=n.mouseXY.bind(m(n)),n.mouseLeave=n.mouseLeave.bind(m(n)),n.addLine=n.addLine.bind(m(n)),n.draw=n.draw.bind(m(n)),n.drawSignature=n.drawSignature.bind(m(n)),n.clearSignature=n.clearSignature.bind(m(n)),n.updateDimensions=n.updateDimensions.bind(m(n)),n}var n,o,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){"ontouchstart"in document.documentElement?(this.canvas.addEventListener("touchstart",this.mouseDown,!1),this.canvas.addEventListener("touchmove",this.mouseXY,!0),this.canvas.addEventListener("touchend",this.mouseUp,!1),document.body.addEventListener("touchleave",this.mouseLeave,!1),document.body.addEventListener("touchcancel",this.mouseUp,!1)):(this.canvas.addEventListener("mousedown",this.mouseDown),this.canvas.addEventListener("mousemove",this.mouseXY),document.body.addEventListener("mouseleave",this.mouseLeave,!1),document.body.addEventListener("mouseup",this.mouseUp)),this.canvas.getContext("2d").lineWidth=this.props.lineWidth,this.updateDimensions(),this.canvas.addEventListener("resize",this.updateDimensions)}},{key:"componentDidUpdate",value:function(e){this.props.lineSegments===e.lineSegments&&this.props.lineWidth===e.lineWidth||(this.setState({lineSegments:this.props.lineSegments}),this.drawSignature(this.props.lineSegments,this.props.lineWidth))}},{key:"componentWillUnmount",value:function(){"ontouchstart"in document.documentElement?(this.canvas.removeEventListener("touchstart",this.mouseDown),this.canvas.removeEventListener("touchmove",this.mouseXY),this.canvas.removeEventListener("touchend",this.mouseUp),document.body.removeEventListener("touchleave",this.mouseLeave),document.body.removeEventListener("touchcancel",this.mouseUp)):(this.canvas.removeEventListener("mousedown",this.mouseDown),this.canvas.removeEventListener("mousemove",this.mouseXY),document.body.removeEventListener("mouseleave",this.mouseLeave),document.body.removeEventListener("mouseup",this.mouseUp)),this.canvas.removeEventListener("resize",this.updateDimensions)}},{key:"mouseInBounds",value:function(e){var t=this.canvasRect;return t.top<e.pageY&&t.left<e.pageX&&t.bottom>e.pageY&&t.right>e.pageX}},{key:"mouseDown",value:function(e){"button"in e&&e.button!==y||(this.setState({lastLineSegments:[],painting:!0}),this.canvasRect=this.canvas.getBoundingClientRect(),this.addLine(e.pageX-this.canvasRect.left,e.pageY-this.canvasRect.top,!1),this.draw())}},{key:"mouseUp",value:function(e){this.setState({painting:!1}),this.props.onChange&&this.props.onChange(e,this.state.lineSegments,this.state.lastLineSegments)}},{key:"mouseXY",value:function(e){this.state.painting&&this.mouseInBounds(e)&&(this.addLine(e.pageX-this.canvasRect.left,e.pageY-this.canvasRect.top,!0),this.draw())}},{key:"mouseLeave",value:function(e){this.state.painting&&(this.setState({painting:!1}),this.props.onChange&&this.props.onChange(e,this.state.lineSegments,this.state.lastLineSegments))}},{key:"addLine",value:function(e,t,n){var o;if(n){var i=this.state.lineSegments[this.state.lineSegments.length-1];o={x1:i.x2,y1:i.y2,x2:e,y2:t}}else o={x1:e,y1:t,x2:e,y2:t};this.setState((function(e){return{lineSegments:[].concat(h(e.lineSegments),[o]),lastLineSegments:[].concat(h(e.lastLineSegments),[o])}}))}},{key:"draw",value:function(){var e=this.canvas.getContext("2d");if(this.state.lineSegments.length>0){var t=this.state.lineSegments[this.state.lineSegments.length-1],n=window.getComputedStyle(this.canvas).getPropertyValue("color");e.lineJoin="round",e.beginPath(),e.moveTo(t.x1,t.y1),e.lineTo(t.x2,t.y2),e.strokeStyle=n,e.stroke()}}},{key:"drawSignature",value:function(e,t){var n=this.canvas.getContext("2d"),o=window.getComputedStyle(this.canvas).getPropertyValue("color");n.lineJoin="round",n.lineWidth=t,n.clearRect(0,0,this.canvasRect.width,this.canvasRect.height);for(var i=e.length,s=0;s<i;s+=1)n.beginPath(),n.moveTo(e[s].x1,e[s].y1),n.lineTo(e[s].x2,e[s].y2),n.strokeStyle=o,n.stroke()}},{key:"clearSignature",value:function(){this.setState({lineSegments:[]}),this.canvas.getContext("2d").clearRect(0,0,this.canvasRect.width,this.canvasRect.height)}},{key:"updateDimensions",value:function(){var e=this;setTimeout((function(){e.canvasRect=e.canvas.getBoundingClientRect(),e.canvas.width=e.canvasRect.width,e.canvas.height=e.canvasRect.height,e.drawSignature(e.state.lineSegments)}),250)}},{key:"render",value:function(){var e=this,t=this.props,n=(t.lineSegments,t.lineWidth,t.onChange,l(t,["lineSegments","lineWidth","onChange"]));return i.default.createElement("canvas",c({},n,{className:r.default.signature,ref:function(t){e.canvas=t}}))}}])&&d(n.prototype,o),s&&d(n,s),t}(i.default.Component);S.propTypes=g,S.defaultProps=b,S.Opts={},S.Opts.Width=v;var w=S;t.default=w},1434:function(e,t,n){e.exports={signature:"Signature-module__signature___3eX5Q"}},2926:function(e,t,n){e.exports={"signature-wrapper":"SignatureDefaultTest-module__signature-wrapper___1o-Mk"}},3475:function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=u(n(0)),s=u(n(4)),r=u(n(1433)),a=u(n(2926));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=s.default.bind(a.default),p=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=h(this,d(t).call(this))).state={lineSegments:[],lineWidth:r.default.Opts.Width.FINE},e}var n,o,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){var e=this;return i.default.createElement("div",null,i.default.createElement("div",{id:"othersection"}),i.default.createElement("div",{className:m("signature-wrapper")},i.default.createElement(r.default,{id:"drawline",lineWidth:this.state.lineWidth,lineSegments:this.state.lineSegments,ref:function(t){e.signature=t}})))}}])&&l(n.prototype,o),s&&l(n,s),t}(i.default.Component);t.default=p}}]);
//# sourceMappingURL=293-07247e6e1146f71bc9e1.js.map