(window.webpackJsonp=window.webpackJsonp||[]).push([[248],{2551:function(n,e,t){"use strict";t.r(e),e.default="# Terra Markdown\n\nReact component to display the content of markdown files.\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-markdown`\n  - `yarn add terra-markdown`\n\n\x3c!-- AUTO-GENERATED-CONTENT:START Peer Dependencies --\x3e\n## Peer Dependencies\n\nThis component requires the following peer dependencies be installed in your app for the component to properly function.\n\n| Peer Dependency | Version |\n|-|-|\n| react | ^16.8.5 |\n| react-dom | ^16.8.5 |\n\n\n\n\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n## Usage\n\n```jsx\nimport React from 'react';\nimport Markdown from 'terra-markdown';\nimport ReadMe from '{component}/docs/README.md';\n\n<Markdown id=\"readme\" src={ReadMe} />\n```\n\n## Code formatting\nTerra markdown uses prismjs to support code block highlighting.\n### Default languages\nBy default terra-markdown supports:\n* markup\n* xml\n* html\n* mathml\n* svg\n* css\n* clike\n* javascript\n* js\n* diff\n* jsx\n* scss\n\n### Additional languages\nTo add additional languages for code format blocks, simply inlcude the prismjs componet.\n\nIf using terra-dev-site add an additional side effect import.\n```javascript\nconst siteConfig = {\n  sideEffectImports: [\n      '../node_modules/prismjs/components/prism-bash',\n    ],\n}\n```\n\n## Code Formatblock Examples\n\n### jsx\n```jsx\nvar ExampleApplication = React.createClass({\n    render: function() {\n      var elapsed = Math.round(this.props.elapsed  / 100);\n      var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );\n      var message =\n        'React has been successfully running for ' + seconds + ' seconds.';\n\n      return <p>{message}</p>;\n    }\n  });\n  var start = new Date().getTime();\n  setInterval(function() {\n    React.render(\n      <ExampleApplication elapsed={new Date().getTime() - start} />,\n      document.getElementById('container')\n    );\n  }, 50);\n```\n### javascript\n```javascript\nfunction $initHighlight(block, cls) {\n  try {\n    if (cls.search(/\\bno\\-highlight\\b/) != -1)\n      return process(block, true, 0x0F) +\n             ` class=\"${cls}\"`;\n  } catch (e) {\n    /* handle exception */\n  }\n  for (var i = 0 / 2; i < classes.length; i++) {\n    if (checkCondition(classes[i]) === undefined)\n      console.log('undefined');\n  }\n}\n\nexport  $initHighlight;\n```\n### scss\n```scss\n@import \"compass/reset\";\n\n// variables\n$colorGreen: #008000;\n$colorGreenDark: darken($colorGreen, 10);\n\n@mixin container {\n    max-width: 980px;\n}\n\n// mixins with parameters\n@mixin button($color:green) {\n    @if ($color == green) {\n        background-color: #008000;\n    }\n    @else if ($color == red) {\n        background-color: #B22222;\n    }\n}\n\nbutton {\n    @include button(red);\n}\n\ndiv,\n.navbar,\n#header,\ninput[type=\"input\"] {\n    font-family: \"Helvetica Neue\", Arial, sans-serif;\n    width: auto;\n    margin: 0 auto;\n    display: block;\n}\n\n.row-12 > [class*=\"spans\"] {\n    border-left: 1px solid #B5C583;\n}\n\n// nested definitions\nul {\n    width: 100%;\n    padding: {\n        left: 5px; right: 5px;\n    }\n  li {\n      float: left; margin-right: 10px;\n      .home {\n          background: url('http://placehold.it/20') scroll no-repeat 0 0;\n    }\n  }\n}\n\n.banner {\n    @extend .container;\n}\n\na {\n  color: $colorGreen;\n  &:hover { color: $colorGreenDark; }\n  &:visited { color: #c458cb; }\n}\n\n@for $i from 1 through 5 {\n    .span#{$i} {\n        width: 20px*$i;\n    }\n}\n\n@mixin mobile {\n  @media screen and (max-width : 600px) {\n    @content;\n  }\n}\n```\n### css\n```css\n@font-face {\n  font-family: Chunkfive; src: url('Chunkfive.otf');\n}\n\nbody, .usertext {\n  color: #F0F0F0; background: #600;\n  font-family: Chunkfive, sans;\n}\n\n@import url(print.css);\n@media print {\n  a[href^=http]::after {\n    content: attr(href)\n  }\n}\n```\n### html\n```html\n<!DOCTYPE html>\n<title>Title</title>\n\n<style>body {width: 500px;}</style>\n\n<script type=\"application/javascript\">\n  function $init() {return true;}\n<\/script>\n\n<body>\n  <p checked class=\"title\" id='title'>Title</p>\n  \x3c!-- here goes the rest of the page --\x3e\n</body>\n```\n### diff\n```diff\nIndex: languages/ini.js\n===================================================================\n--- languages/ini.js    (revision 199)\n+++ languages/ini.js    (revision 200)\n@@ -1,8 +1,7 @@\n hljs.LANGUAGES.ini =\n {\n   case_insensitive: true,\n-  defaultMode:\n-  {\n+  defaultMode: {\n     contains: ['comment', 'title', 'setting'],\n     illegal: '[^\\\\s]'\n   },\n\n*** /path/to/original timestamp\n--- /path/to/new      timestamp\n***************\n*** 1,3 ****\n--- 1,9 ----\n+ This is an important\n+ notice! It should\n+ therefore be located at\n+ the beginning of this\n+ document!\n\n! compress the size of the\n! changes.\n\n  It is important to spell\n```\n### No Format\n```\nnoformat\n```\n\n## Props\n| Prop Name | Type | Is Required | Default Value | Description |\n| ------------- |-------------| -----| -----| -----|\n| src | string | optional | '' | Markdown content to parse. |\n| baseUrl | string | optional | undefined | A prefix url for any relative link. e.g. '/prefix/'|\n| hasHeadingAnchors | bool | optional | undefined | Adds anchor links to heading elements. Anchor elements will not work with the hash router on an SPA. The anchors use negative margins to position to the left of heading. You must have more that 24px of space around this component. |\n\n## Component Features\n* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)\n"},2552:function(n,e,t){n.exports={"markdown-wrapper":"Markdown-module__markdown-wrapper___1Lxu0"}},2553:function(n){n.exports=JSON.parse('{"name":"terra-markdown","main":"lib/Markdown.js","version":"2.35.0","description":"React component to display the content of markdown files.","repository":{"type":"git","url":"git+https://github.com/cerner/terra-core.git"},"keywords":["Cerner","Terra","terra-markdown","Markdown","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-core/issues"},"homepage":"https://github.com/cerner/terra-core#readme","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5"},"dependencies":{"classnames":"^2.2.5","marked":"0.7.x","prismjs":"~1.17.1","prop-types":"^15.5.8"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio":"cd ../.. && npx wdio ./packages/$npm_package_name/wdio.conf.js"}}')},3046:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=c(t(0)),o=c(t(828)),a=c(t(4)),i=c(t(2551)),s=c(t(2552));function c(n){return n&&n.__esModule?n:{default:n}}t(2553);var l=a.default.bind(s.default),d=function(){return r.default.createElement("div",{className:l("markdown-wrapper")},r.default.createElement(o.default,{src:i.default}))};e.default=d},828:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=l(t(0)),o=l(t(2)),a=l(t(4)),i=l(t(913)),s=l(t(914));t(915),t(916),t(917);var c=l(t(861));function l(n){return n&&n.__esModule?n:{default:n}}function d(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function p(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?d(t,!0).forEach((function(e){u(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):d(t).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var f=a.default.bind(c.default),m=Object.keys(s.default.languages).filter((function(n){return!["extend","insertBefore","DFS"].includes(n)}));i.default.setOptions({headerIds:!1,highlight:function(n,e){return m.includes(e)?s.default.highlight(n,s.default.languages[e],e):null},langPrefix:"codeblock language-"});var h=new i.default.Renderer;h.heading=function(n,e){var t=n.toLowerCase().replace(/[^\w]+/g,"-");return"<h".concat(e,">")+'<a name="'.concat(t,'" class="anchor" aria-hidden="true" href="#').concat(t,'">')+'<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="is-bidi octicon octicon-link"><path d="M10.5 26.3a16 16 0 0 1 .9-5.3L8 17.6a6.73 6.73 0 0 1-2-4.8A6.41 6.41 0 0 1 8 8a6.76 6.76 0 0 1 9.6 0l9 9a6.88 6.88 0 0 1 0 9.6 6.27 6.27 0 0 1-3.4 1.8 2.65 2.65 0 0 0 .5.6l4.1 4.1a11.36 11.36 0 0 0 3.1-2.3 12.8 12.8 0 0 0 0-18.1l-9-9a12.63 12.63 0 0 0-9-3.7 12.63 12.63 0 0 0-9 3.7A12.1 12.1 0 0 0 0 12.8a12.63 12.63 0 0 0 3.7 9l7 7a21.05 21.05 0 0 1-.2-2.5zm27-4.6a16 16 0 0 1-.9 5.3l3.4 3.4a6.79 6.79 0 1 1-9.6 9.6l-9-9a6.88 6.88 0 0 1 0-9.6 6.27 6.27 0 0 1 3.4-1.8 2.65 2.65 0 0 0-.5-.6l-4-4a11.36 11.36 0 0 0-3.1 2.3 12.8 12.8 0 0 0 0 18.1l9 9a12.73 12.73 0 0 0 18-18l-7-7a8 8 0 0 1 .3 2.3z"/></svg></a>'+"".concat(n)+"</h".concat(e,">")};var g={src:o.default.string,baseUrl:o.default.string,hasHeadingAnchors:o.default.bool},b=function(n){return r.default.createElement("div",{dir:"ltr",className:f(["markdown"]),dangerouslySetInnerHTML:{__html:(0,i.default)(n.src,p({},n.baseUrl&&{baseUrl:n.baseUrl},{},n.hasHeadingAnchors&&{renderer:h}))}})};b.propTypes=g,b.defaultProps={src:""};var w=b;e.default=w},861:function(n,e,t){n.exports={markdown:"Markdown__markdown___3KTyB"}}}]);
//# sourceMappingURL=248-97c8495e730e4f079cd1.js.map