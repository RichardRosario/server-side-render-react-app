!function(e){var t={};function n(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)n.d(r,u,function(t){return e[t]}.bind(null,u));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=require("react")},function(e,t,n){"use strict";var r=o(n(2)),u=o(n(5));function o(e){return e&&e.__esModule?e:{default:e}}var i=(0,r.default)();i.use(r.default.static("public")),i.get("/",function(e,t){t.send((0,u.default)())}),i.listen(3e3,function(){console.log("Listening on port 3000")})},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("react-dom/server")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(0));t.default=function(){return r.default.createElement("div",null,r.default.createElement("div",null,"This is my  home component."),r.default.createElement("button",{onClick:function(){return console.log("Hi There!")}},"Press me"))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(0)),u=n(3),o=i(n(4));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return'\n    <html>\n    <head></head>\n      <body>\n      <div id="root">'+(0,u.renderToString)(r.default.createElement(o.default,null))+'</div>\n      <script src="bundle.js"><\/script>\n      </body>\n    </html>\n    '}}]);