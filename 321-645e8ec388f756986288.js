(window.webpackJsonp=window.webpackJsonp||[]).push([[321],{2915:function(e,t,r){"use strict";r.r(t),t.default="# Terra Markdown\n\nReact component to display the content of markdown files.\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-markdown`\n  - `yarn add terra-markdown`\n\n## Test\n> This is a quote.\n\n\n## Component Features\n* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)\n"},3398:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(r(0)),a=s(r(828)),o=s(r(2915));function s(e){return e&&e.__esModule?e:{default:e}}var l=function(){return n.default.createElement(a.default,{src:o.default})};t.default=l},828:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r(0)),a=u(r(2)),o=u(r(4)),s=u(r(913)),l=u(r(914));r(915),r(916),r(917);var c=u(r(861));function u(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(r,!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p=o.default.bind(c.default),b=Object.keys(l.default.languages).filter((function(e){return!["extend","insertBefore","DFS"].includes(e)}));s.default.setOptions({headerIds:!1,highlight:function(e,t){return b.includes(t)?l.default.highlight(e,l.default.languages[t],t):null},langPrefix:"codeblock language-"});var w=new s.default.Renderer;w.heading=function(e,t){var r=e.toLowerCase().replace(/[^\w]+/g,"-");return"<h".concat(t,">")+'<a name="'.concat(r,'" class="anchor" aria-hidden="true" href="#').concat(r,'">')+'<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="is-bidi octicon octicon-link"><path d="M10.5 26.3a16 16 0 0 1 .9-5.3L8 17.6a6.73 6.73 0 0 1-2-4.8A6.41 6.41 0 0 1 8 8a6.76 6.76 0 0 1 9.6 0l9 9a6.88 6.88 0 0 1 0 9.6 6.27 6.27 0 0 1-3.4 1.8 2.65 2.65 0 0 0 .5.6l4.1 4.1a11.36 11.36 0 0 0 3.1-2.3 12.8 12.8 0 0 0 0-18.1l-9-9a12.63 12.63 0 0 0-9-3.7 12.63 12.63 0 0 0-9 3.7A12.1 12.1 0 0 0 0 12.8a12.63 12.63 0 0 0 3.7 9l7 7a21.05 21.05 0 0 1-.2-2.5zm27-4.6a16 16 0 0 1-.9 5.3l3.4 3.4a6.79 6.79 0 1 1-9.6 9.6l-9-9a6.88 6.88 0 0 1 0-9.6 6.27 6.27 0 0 1 3.4-1.8 2.65 2.65 0 0 0-.5-.6l-4-4a11.36 11.36 0 0 0-3.1 2.3 12.8 12.8 0 0 0 0 18.1l9 9a12.73 12.73 0 0 0 18-18l-7-7a8 8 0 0 1 .3 2.3z"/></svg></a>'+"".concat(e)+"</h".concat(t,">")};var g={src:a.default.string,baseUrl:a.default.string,hasHeadingAnchors:a.default.bool},h=function(e){return n.default.createElement("div",{dir:"ltr",className:p(["markdown"]),dangerouslySetInnerHTML:{__html:(0,s.default)(e.src,d({},e.baseUrl&&{baseUrl:e.baseUrl},{},e.hasHeadingAnchors&&{renderer:w}))}})};h.propTypes=g,h.defaultProps={src:""};var m=h;t.default=m},861:function(e,t,r){e.exports={markdown:"Markdown__markdown___3KTyB"}}}]);
//# sourceMappingURL=321-645e8ec388f756986288.js.map