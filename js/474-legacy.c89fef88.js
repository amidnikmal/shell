(self["webpackChunkshell"]=self["webpackChunkshell"]||[]).push([[474,699,659],{8457:function(t,r,e){"use strict";var n=e(7854),o=e(9974),i=e(6916),a=e(7908),u=e(3411),c=e(7659),s=e(4411),f=e(6244),h=e(6135),l=e(8554),p=e(1246),v=n.Array;t.exports=function(t){var r=a(t),e=s(this),n=arguments.length,y=n>1?arguments[1]:void 0,d=void 0!==y;d&&(y=o(y,n>2?arguments[2]:void 0));var m,g,w,b,x,E,S=p(r),L=0;if(!S||this==v&&c(S))for(m=f(r),g=e?new this(m):v(m);m>L;L++)E=d?y(r[L],L):r[L],h(g,L,E);else for(b=l(r,S),x=b.next,g=e?new this:[];!(w=i(x,b)).done;L++)E=d?u(b,y,[w.value,L],!0):w.value,h(g,L,E);return g.length=L,g}},2092:function(t,r,e){var n=e(9974),o=e(1702),i=e(8361),a=e(7908),u=e(6244),c=e(5417),s=o([].push),f=function(t){var r=1==t,e=2==t,o=3==t,f=4==t,h=6==t,l=7==t,p=5==t||h;return function(v,y,d,m){for(var g,w,b=a(v),x=i(b),E=n(y,d),S=u(x),L=0,k=m||c,O=r?k(v,S):e||l?k(v,0):void 0;S>L;L++)if((p||L in x)&&(g=x[L],w=E(g,L,b),t))if(r)O[L]=w;else if(w)switch(t){case 3:return!0;case 5:return g;case 6:return L;case 2:s(O,g)}else switch(t){case 4:return!1;case 7:s(O,g)}return h?-1:o||f?f:O}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterReject:f(7)}},7475:function(t,r,e){var n=e(7854),o=e(3157),i=e(4411),a=e(111),u=e(5112),c=u("species"),s=n.Array;t.exports=function(t){var r;return o(t)&&(r=t.constructor,i(r)&&(r===s||o(r.prototype))?r=void 0:a(r)&&(r=r[c],null===r&&(r=void 0))),void 0===r?s:r}},5417:function(t,r,e){var n=e(7475);t.exports=function(t,r){return new(n(t))(0===r?0:r)}},3411:function(t,r,e){var n=e(9670),o=e(9212);t.exports=function(t,r,e,i){try{return i?r(n(e)[0],e[1]):r(e)}catch(a){o(t,"throw",a)}}},7072:function(t,r,e){var n=e(5112),o=n("iterator"),i=!1;try{var a=0,u={next:function(){return{done:!!a++}},return:function(){i=!0}};u[o]=function(){return this},Array.from(u,(function(){throw 2}))}catch(c){}t.exports=function(t,r){if(!r&&!i)return!1;var e=!1;try{var n={};n[o]=function(){return{next:function(){return{done:e=!0}}}},t(n)}catch(c){}return e}},7741:function(t,r,e){var n=e(1702),o=Error,i=n("".replace),a=function(t){return String(o(t).stack)}("zxcasd"),u=/\n\s*at [^:]*:[^\n]*/,c=u.test(a);t.exports=function(t,r){if(c&&"string"==typeof t&&!o.prepareStackTrace)while(r--)t=i(t,u,"");return t}},2914:function(t,r,e){var n=e(7293),o=e(9114);t.exports=!n((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",o(1,7)),7!==t.stack)}))},1246:function(t,r,e){var n=e(648),o=e(8173),i=e(7497),a=e(5112),u=a("iterator");t.exports=function(t){if(void 0!=t)return o(t,u)||o(t,"@@iterator")||i[n(t)]}},8554:function(t,r,e){var n=e(7854),o=e(6916),i=e(9662),a=e(9670),u=e(6330),c=e(1246),s=n.TypeError;t.exports=function(t,r){var e=arguments.length<2?c(t):r;if(i(e))return a(o(e,t));throw s(u(t)+" is not iterable")}},8340:function(t,r,e){var n=e(111),o=e(8880);t.exports=function(t,r){n(r)&&"cause"in r&&o(t,"cause",r.cause)}},7659:function(t,r,e){var n=e(5112),o=e(7497),i=n("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||a[i]===t)}},3157:function(t,r,e){var n=e(4326);t.exports=Array.isArray||function(t){return"Array"==n(t)}},9212:function(t,r,e){var n=e(6916),o=e(9670),i=e(8173);t.exports=function(t,r,e){var a,u;o(t);try{if(a=i(t,"return"),!a){if("throw"===r)throw e;return e}a=n(a,t)}catch(c){u=!0,a=c}if("throw"===r)throw e;if(u)throw a;return o(a),e}},6277:function(t,r,e){var n=e(1340);t.exports=function(t,r){return void 0===t?arguments.length<2?"":r:n(t)}},9191:function(t,r,e){"use strict";var n=e(5005),o=e(2597),i=e(8880),a=e(7976),u=e(7674),c=e(9920),s=e(2626),f=e(9587),h=e(6277),l=e(8340),p=e(7741),v=e(2914),y=e(9781),d=e(1913);t.exports=function(t,r,e,m){var g="stackTraceLimit",w=m?2:1,b=t.split("."),x=b[b.length-1],E=n.apply(null,b);if(E){var S=E.prototype;if(!d&&o(S,"cause")&&delete S.cause,!e)return E;var L=n("Error"),k=r((function(t,r){var e=h(m?r:t,void 0),n=m?new E(t):new E;return void 0!==e&&i(n,"message",e),v&&i(n,"stack",p(n.stack,2)),this&&a(S,this)&&f(n,this,k),arguments.length>w&&l(n,arguments[w]),n}));if(k.prototype=S,"Error"!==x?u?u(k,L):c(k,L,{name:!0}):y&&g in E&&(s(k,E,g),s(k,E,"prepareStackTrace")),c(k,E),!d)try{S.name!==x&&i(S,"name",x),S.constructor=k}catch(O){}return k}}},7327:function(t,r,e){"use strict";var n=e(2109),o=e(2092).filter,i=e(1194),a=i("filter");n({target:"Array",proto:!0,forced:!a},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},1038:function(t,r,e){var n=e(2109),o=e(8457),i=e(7072),a=!i((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:a},{from:o})},1703:function(t,r,e){var n=e(2109),o=e(7854),i=e(2104),a=e(9191),u="WebAssembly",c=o[u],s=7!==Error("e",{cause:7}).cause,f=function(t,r){var e={};e[t]=a(t,r,s),n({global:!0,arity:1,forced:s},e)},h=function(t,r){if(c&&c[t]){var e={};e[t]=a(u+"."+t,r,s),n({target:u,stat:!0,arity:1,forced:s},e)}};f("Error",(function(t){return function(r){return i(t,this,arguments)}})),f("EvalError",(function(t){return function(r){return i(t,this,arguments)}})),f("RangeError",(function(t){return function(r){return i(t,this,arguments)}})),f("ReferenceError",(function(t){return function(r){return i(t,this,arguments)}})),f("SyntaxError",(function(t){return function(r){return i(t,this,arguments)}})),f("TypeError",(function(t){return function(r){return i(t,this,arguments)}})),f("URIError",(function(t){return function(r){return i(t,this,arguments)}})),h("CompileError",(function(t){return function(r){return i(t,this,arguments)}})),h("LinkError",(function(t){return function(r){return i(t,this,arguments)}})),h("RuntimeError",(function(t){return function(r){return i(t,this,arguments)}}))},8309:function(t,r,e){var n=e(9781),o=e(6530).EXISTS,i=e(1702),a=e(3070).f,u=Function.prototype,c=i(u.toString),s=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,f=i(s.exec),h="name";n&&!o&&a(u,h,{configurable:!0,get:function(){try{return f(s,c(this))[1]}catch(t){return""}}})},5837:function(t,r,e){var n=e(2109),o=e(7854);n({global:!0},{globalThis:o})},3706:function(t,r,e){var n=e(7854),o=e(8003);o(n.JSON,"JSON",!0)},2703:function(t,r,e){var n=e(8003);n(Math,"Math",!0)},489:function(t,r,e){var n=e(2109),o=e(7293),i=e(7908),a=e(9518),u=e(8544),c=o((function(){a(1)}));n({target:"Object",stat:!0,forced:c,sham:!u},{getPrototypeOf:function(t){return a(i(t))}})},7601:function(t,r,e){"use strict";e(4916);var n=e(2109),o=e(7854),i=e(6916),a=e(1702),u=e(614),c=e(111),s=function(){var t=!1,r=/[ac]/;return r.exec=function(){return t=!0,/./.exec.apply(this,arguments)},!0===r.test("abc")&&t}(),f=o.Error,h=a(/./.test);n({target:"RegExp",proto:!0,forced:!s},{test:function(t){var r=this.exec;if(!u(r))return h(this,t);var e=i(r,this,t);if(null!==e&&!c(e))throw new f("RegExp exec method returned something other than an Object or null");return!!e}})},2443:function(t,r,e){var n=e(7235);n("asyncIterator")},3680:function(t,r,e){var n=e(5005),o=e(7235),i=e(8003);o("toStringTag"),i(n("Symbol"),"Symbol")},7964:function(t,r,e){function n(r){return t.exports=n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports["default"]=t.exports,n(r)}e(2526),e(1817),e(1539),e(2165),e(8783),e(3948),t.exports=n,t.exports.__esModule=!0,t.exports["default"]=t.exports},8975:function(t,r,e){t=e.nmd(t);var n=e(7964)["default"];e(2526),e(1817),e(1539),e(2165),e(8783),e(3948),e(2443),e(3680),e(3706),e(2703),e(489),e(8309),e(1703),e(4747),e(7042),e(5837);var o=function(t){"use strict";var r,e=Object.prototype,o=e.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(N){s=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var o=r&&r.prototype instanceof m?r:m,i=Object.create(o.prototype),a=new _(n||[]);return i._invoke=O(t,e,a),i}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(N){return{type:"throw",arg:N}}}t.wrap=f;var l="suspendedStart",p="suspendedYield",v="executing",y="completed",d={};function m(){}function g(){}function w(){}var b={};s(b,a,(function(){return this}));var x=Object.getPrototypeOf,E=x&&x(x(R([])));E&&E!==e&&o.call(E,a)&&(b=E);var S=w.prototype=m.prototype=Object.create(b);function L(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function k(t,r){function e(i,a,u,c){var s=h(t[i],t,a);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"===n(l)&&o.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,u,c)}),(function(t){e("throw",t,u,c)})):r.resolve(l).then((function(t){f.value=t,u(f)}),(function(t){return e("throw",t,u,c)}))}c(s.arg)}var i;function a(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}this._invoke=a}function O(t,r,e){var n=l;return function(o,i){if(n===v)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return B()}e.method=o,e.arg=i;while(1){var a=e.delegate;if(a){var u=T(a,e);if(u){if(u===d)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=v;var c=h(t,r,e);if("normal"===c.type){if(n=e.done?y:p,c.arg===d)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n=y,e.method="throw",e.arg=c.arg)}}}function T(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator["return"]&&(e.method="return",e.arg=r,T(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function j(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function A(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function R(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){while(++n<t.length)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:B}}function B(){return{value:r,done:!0}}return g.prototype=w,s(S,"constructor",w),s(w,"constructor",g),g.displayName=s(w,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"===typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,s(t,c,"GeneratorFunction")),t.prototype=Object.create(S),t},t.awrap=function(t){return{__await:t}},L(k.prototype),s(k.prototype,u,(function(){return this})),t.AsyncIterator=k,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new k(f(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(S),s(S,c,"Generator"),s(S,a,(function(){return this})),s(S,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){while(r.length){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=R,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(A),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],r=t.completion;if("throw"===r.type)throw r.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return u.type="throw",u.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),d},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),A(e),d}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;A(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:R(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),d}},t}("object"===n(t)?t.exports:{});try{regeneratorRuntime=o}catch(i){"object"===("undefined"===typeof globalThis?"undefined":n(globalThis))?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}},7474:function(t,r,e){"use strict";e.r(r),e.d(r,{Binance:function(){return v}});e(1539);function n(t,r,e,n,o,i,a){try{var u=t[i](a),c=u.value}catch(s){return void e(s)}u.done?r(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var r=this,e=arguments;return new Promise((function(o,i){var a=t.apply(r,e);function u(t){n(a,o,i,u,c,"next",t)}function c(t){n(a,o,i,u,c,"throw",t)}u(void 0)}))}}function i(t){if(Array.isArray(t))return t}e(2526),e(1817),e(2165),e(8783),e(3948);function a(t,r){var e=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,i=[],a=!0,u=!1;try{for(e=e.call(t);!(a=(n=e.next()).done);a=!0)if(i.push(n.value),r&&i.length===r)break}catch(c){u=!0,o=c}finally{try{a||null==e["return"]||e["return"]()}finally{if(u)throw o}}return i}}e(7042),e(8309),e(1038),e(4916),e(7601);function u(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function c(t,r){if(t){if("string"===typeof t)return u(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?u(t,r):void 0}}e(1703);function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(t,r){return i(t)||a(t,r)||c(t,r)||s()}e(8975),e(2222),e(7327),e(8862);var h=e(5564),l=e.n(h),p=e(9646),v={apiUrl:"https://www.binance.com/api/v3",apiKey:"",apiSecret:"",wssconnection:null,eventsBuffer:[],events:[],cb:null,symbol:"BNBBTC",changeSymbol:function(t){return this.symbol=t,this.eventsBuffer=[],this.events=[],this.startFetchData(this.symbol)},on:function(t,r){this.cb=r},getSymbols:function(){return Promise.resolve(p.BinanceSymbolsResponse)},getMarketDepth:function(t){var r=t.symbol,e=t.limit;return l().get("".concat(this.apiUrl,"/depth?symbol=").concat(this.symbol?this.symbol:r,"&limit=").concat(e))},wssConnect:function(){this.wssconnection=new WebSocket("wss://stream.binance.com/stream"),this.wssSubscribe()},wssSubscribe:function(){var t=this;this.wssconnection.addEventListener("open",(function(){t.wssconnection.onmessage=function(r){var e=JSON.parse(r.data);if(e.stream==t.symbol.toLowerCase()+"@depth"){if(t.eventsBuffer.push(e),t.depthSnapshot&&0===t.events.length){var n=t.depthSnapshot.lastUpdateId,o=t.eventsBuffer.filter((function(t){var r=t.data,e=r.U,o=r.u;return e<=n+1&&o>=n+1})),i=f(o,1),a=i[0];a&&(t.events.push(a),t.cb(a),t.eventsBuffer=[])}if(t.events.length>0){var u=t.events.length-1,c=t.events[u],s=c.data.u,h=t.eventsBuffer.filter((function(t){var r=t.data.U;return r===s+1})),l=f(h,1),p=l[0];p&&(t.events.push(p),t.cb(p),t.eventsBuffer=[])}}};var r={method:"SUBSCRIBE",params:["!miniTicker@arr@3000ms",t.symbol.toLowerCase()+"@aggTrade",t.symbol.toLowerCase()+"@kline_1d",t.symbol.toLowerCase()+"@depth"],id:1};t.wssconnection.send(JSON.stringify(r))}))},startFetchData:function(t){var r=this;return o(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r.wssConnect(),e.abrupt("return",new Promise((function(e){setTimeout(o(regeneratorRuntime.mark((function n(){var o,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,r.getMarketDepth({symbol:t,limit:500});case 2:o=n.sent,i=o.data,r.depthSnapshot=i,e(i);case 6:case"end":return n.stop()}}),n)}))),3e3)})));case 2:case"end":return e.stop()}}),e)})))()}}}}]);
//# sourceMappingURL=474-legacy.c89fef88.js.map