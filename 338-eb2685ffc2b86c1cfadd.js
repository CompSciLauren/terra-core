(window.webpackJsonp=window.webpackJsonp||[]).push([[338],{3159:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(0)),a=l(n(897));function l(e){return e&&e.__esModule?e:{default:e}}var d=function(){return r.default.createElement(a.default,{text:"Default",id:"default-badge"})};t.default=d},897:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BadgeSize=t.BadgeIntent=t.default=void 0;var r=u(n(0)),a=u(n(2)),l=u(n(4)),d=u(n(130)),i=u(n(918));function u(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=l.default.bind(i.default);t.BadgeIntent={DEFAULT:"default",PRIMARY:"primary",SECONDARY:"secondary",INFO:"info",WARNING:"warning",POSITIVE:"positive",NEGATIVE:"negative"};t.BadgeSize={TINY:"tiny",SMALL:"small",MEDIUM:"medium",LARGE:"large",HUGE:"huge"};var g={children:a.default.node,icon:a.default.element,intent:a.default.oneOf(["default","primary","secondary","info","warning","positive","negative"]),isReversed:a.default.bool,size:a.default.oneOf(["tiny","small","medium","large","huge"]),text:a.default.string,visuallyHiddenText:a.default.string},m={children:null,icon:null,intent:"default",isReversed:!1,size:"small",text:null,visuallyHiddenText:void 0},p=function(e){var t=e.size,n=e.intent,a=e.isReversed,l=e.text,u=e.icon,o=e.visuallyHiddenText,s=f(e,["size","intent","isReversed","text","icon","visuallyHiddenText"]),g=c("badge",{"has-icon":u},{"is-reversed":a},t,n,s.className),m=l?r.default.createElement("span",{className:i.default.text,"aria-hidden":"true"},l):null,p=o?r.default.createElement(d.default,{text:o}):null,y=a?[p,m,u,s.children]:[u,p,m,s.children];return r.default.createElement.apply(r.default,["span",_({},s,{className:g})].concat(y))};p.propTypes=g,p.defaultProps=m;var y=p;t.default=y},918:function(e,t,n){e.exports={badge:"Badge-module__badge___20KZ3","is-reversed":"Badge-module__is-reversed___2z3k1","has-icon":"Badge-module__has-icon___2R0fy",text:"Badge-module__text___2Y8yP",tiny:"Badge-module__tiny___1mem2",small:"Badge-module__small___ow-O5",medium:"Badge-module__medium___1w1TM",large:"Badge-module__large___2dMPP",huge:"Badge-module__huge___29Jcf",default:"Badge-module__default___3JkGW",primary:"Badge-module__primary___WLzak",secondary:"Badge-module__secondary___2Eyvs",positive:"Badge-module__positive___17Lg_",negative:"Badge-module__negative___3GJ0z",warning:"Badge-module__warning___Gqrsa",info:"Badge-module__info___1RQe6"}}}]);
//# sourceMappingURL=338-eb2685ffc2b86c1cfadd.js.map