(function(){var n={4720:function(n,e,t){Promise.all([t.e(714),t.e(34)]).then(t.bind(t,7034))},6125:function(n,e,t){"use strict";var r=new Error;n.exports=new Promise((function(n,e){if("undefined"!==typeof shell)return n();t.l("https://amidnikmal.github.io/shell/remoteEntry.js",(function(t){if("undefined"!==typeof shell)return n();var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;r.message="Loading script failed.\n("+o+": "+i+")",r.name="ScriptExternalLoadError",r.type=o,r.request=i,e(r)}),"shell")})).then((function(){return shell}))}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.c=e,function(){var n=[];t.O=function(e,r,o,i){if(!r){var u=1/0;for(s=0;s<n.length;s++){r=n[s][0],o=n[s][1],i=n[s][2];for(var f=!0,a=0;a<r.length;a++)(!1&i||u>=i)&&Object.keys(t.O).every((function(n){return t.O[n](r[a])}))?r.splice(a--,1):(f=!1,i<u&&(u=i));if(f){n.splice(s--,1);var c=o();void 0!==c&&(e=c)}}return e}i=i||0;for(var s=n.length;s>0&&n[s-1][2]>i;s--)n[s]=n[s-1];n[s]=[r,o,i]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}}(),function(){t.f={},t.e=function(n){return Promise.all(Object.keys(t.f).reduce((function(e,r){return t.f[r](n,e),e}),[]))}}(),function(){t.u=function(n){return"js/"+n+"."+{34:"7d23ceec",714:"b9e9e1fc",935:"46a26b0a"}[n]+".js"}}(),function(){t.miniCssF=function(n){return"css/"+n+".bfc1e014.css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={},e="02-change-pair:";t.l=function(r,o,i,u){if(n[r])n[r].push(o);else{var f,a;if(void 0!==i)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var l=c[s];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==e+i){f=l;break}}f||(a=!0,f=document.createElement("script"),f.charset="utf-8",f.timeout=120,t.nc&&f.setAttribute("nonce",t.nc),f.setAttribute("data-webpack",e+i),f.src=r),n[r]=[o];var h=function(e,t){f.onerror=f.onload=null,clearTimeout(d);var o=n[r];if(delete n[r],f.parentNode&&f.parentNode.removeChild(f),o&&o.forEach((function(n){return n(t)})),e)return e(t)},d=setTimeout(h.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=h.bind(null,f.onerror),f.onload=h.bind(null,f.onload),a&&document.head.appendChild(f)}}}(),function(){t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){var n={714:[3714]},e={3714:["default","./BinanceSymbolsResponse",6125]};t.f.remotes=function(r,o){t.o(n,r)&&n[r].forEach((function(n){var r=t.R;r||(r=[]);var i=e[n];if(!(r.indexOf(i)>=0)){if(r.push(i),i.p)return o.push(i.p);var u=function(e){e||(e=new Error("Container missing")),"string"===typeof e.message&&(e.message+='\nwhile loading "'+i[1]+'" from '+i[2]),t.m[n]=function(){throw e},i.p=0},f=function(n,e,t,r,f,a){try{var c=n(e,t);if(!c||!c.then)return f(c,r,a);var s=c.then((function(n){return f(n,r)}),u);if(!a)return s;o.push(i.p=s)}catch(l){u(l)}},a=function(n,e,r){return n?f(t.I,i[0],0,n,c,r):u()},c=function(n,e,t){return f(e.get,i[1],r,0,s,t)},s=function(e){i.p=1,t.m[n]=function(n){n.exports=e()}};f(t,i[2],0,0,a,1)}}))}}(),function(){t.S={};var n={},e={};t.I=function(r,o){o||(o=[]);var i=e[r];if(i||(i=e[r]={}),!(o.indexOf(i)>=0)){if(o.push(i),n[r])return n[r];t.o(t.S,r)||(t.S[r]={});var u=t.S[r],f=function(n){return"undefined"!==typeof console&&console.warn&&console.warn(n)},a="02-change-pair",c=function(n,e,t,r){var o=u[n]=u[n]||{},i=o[e];(!i||!i.loaded&&(!r!=!i.eager?r:a>i.from))&&(o[e]={get:t,from:a,eager:!!r})},s=function(n){var e=function(n){f("Initialization of sharing external failed: "+n)};try{var i=t(n);if(!i)return;var u=function(n){return n&&n.init&&n.init(t.S[r],o)};if(i.then)return l.push(i.then(u,e));var a=u(i);if(a&&a.then)return l.push(a["catch"](e))}catch(c){e(c)}},l=[];switch(r){case"default":c("vue","2.6.14",(function(){return t.e(935).then((function(){return function(){return t(8935)}}))})),s(6125);break}return l.length?n[r]=Promise.all(l).then((function(){return n[r]=1})):n[r]=1}}}(),function(){t.p="/shell/switch_symbol/"}(),function(){var n=function(n){var e=function(n){return n.split(".").map((function(n){return+n==n?+n:n}))},t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(n),r=t[1]?e(t[1]):[];return t[2]&&(r.length++,r.push.apply(r,e(t[2]))),t[3]&&(r.push([]),r.push.apply(r,e(t[3]))),r},e=function(e,t){e=n(e),t=n(t);for(var r=0;;){if(r>=e.length)return r<t.length&&"u"!=(typeof t[r])[0];var o=e[r],i=(typeof o)[0];if(r>=t.length)return"u"==i;var u=t[r],f=(typeof u)[0];if(i!=f)return"o"==i&&"n"==f||"s"==f||"u"==i;if("o"!=i&&"u"!=i&&o!=u)return o<u;r++}},r=function(e,t){if(0 in e){t=n(t);var o=e[0],i=o<0;i&&(o=-o-1);for(var u=0,f=1,a=!0;;f++,u++){var c,s,l=f<e.length?(typeof e[f])[0]:"";if(u>=t.length||"o"==(s=(typeof(c=t[u]))[0]))return!a||("u"==l?f>o&&!i:""==l!=i);if("u"==s){if(!a||"u"!=l)return!1}else if(a)if(l==s)if(f<=o){if(c!=e[f])return!1}else{if(i?c>e[f]:c<e[f])return!1;c!=e[f]&&(a=!1)}else if("s"!=l&&"n"!=l){if(i||f<=o)return!1;a=!1,f--}else{if(f<=o||s<l!=i)return!1;a=!1}else"s"!=l&&"n"!=l&&(a=!1,f--)}}var h=[],d=h.pop.bind(h);for(u=1;u<e.length;u++){var p=e[u];h.push(1==p?d()|d():2==p?d()&d():p?r(p,t):!d())}return!!d()},o=function(n,t,o){var i=n[t];t=Object.keys(i).reduce((function(n,t){return r(o,t)&&(!n||e(n,t))?t:n}),0);return t&&i[t]},i=function(n){return n.loaded=1,n.get()},u=function(n){return function(e,r,o,i){var u=t.I(e);return u&&u.then?u.then(n.bind(n,e,t.S[e],r,o,i)):n(e,t.S[e],r,o,i)}},f=u((function(n,e,r,u,f){var a=e&&t.o(e,r)&&o(e,r,u);return a?i(a):f()})),a={},c={6196:function(){return f("default","vue",[1,2,6,14],(function(){return t.e(935).then((function(){return function(){return t(8935)}}))}))}},s={34:[6196]};t.f.consumes=function(n,e){t.o(s,n)&&s[n].forEach((function(n){if(t.o(a,n))return e.push(a[n]);var r=function(e){a[n]=0,t.m[n]=function(r){delete t.c[n],r.exports=e()}},o=function(e){delete a[n],t.m[n]=function(r){throw delete t.c[n],e}};try{var i=c[n]();i.then?e.push(a[n]=i.then(r)["catch"](o)):r(i)}catch(u){o(u)}}))}}(),function(){var n=function(n,e,t,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)t();else{var u=i&&("load"===i.type?"missing":i.type),f=i&&i.target&&i.target.href||e,a=new Error("Loading CSS chunk "+n+" failed.\n("+f+")");a.code="CSS_CHUNK_LOAD_FAILED",a.type=u,a.request=f,o.parentNode.removeChild(o),r(a)}};return o.onerror=o.onload=i,o.href=e,document.head.appendChild(o),o},e=function(n,e){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===n||i===e))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===n||i===e)return o}},r=function(r){return new Promise((function(o,i){var u=t.miniCssF(r),f=t.p+u;if(e(u,f))return o();n(r,f,o,i)}))},o={143:0};t.f.miniCss=function(n,e){var t={34:1};o[n]?e.push(o[n]):0!==o[n]&&t[n]&&e.push(o[n]=r(n).then((function(){o[n]=0}),(function(e){throw delete o[n],e})))}}(),function(){var n={143:0,64:0};t.f.j=function(e,r){var o=t.o(n,e)?n[e]:void 0;if(0!==o)if(o)r.push(o[2]);else if(/^(6|71)4$/.test(e))n[e]=0;else{var i=new Promise((function(t,r){o=n[e]=[t,r]}));r.push(o[2]=i);var u=t.p+t.u(e),f=new Error,a=function(r){if(t.o(n,e)&&(o=n[e],0!==o&&(n[e]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;f.message="Loading chunk "+e+" failed.\n("+i+": "+u+")",f.name="ChunkLoadError",f.type=i,f.request=u,o[1](f)}};t.l(u,a,"chunk-"+e,e)}},t.O.j=function(e){return 0===n[e]};var e=function(e,r){var o,i,u=r[0],f=r[1],a=r[2],c=0;if(u.some((function(e){return 0!==n[e]}))){for(o in f)t.o(f,o)&&(t.m[o]=f[o]);if(a)var s=a(t)}for(e&&e(r);c<u.length;c++)i=u[c],t.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return t.O(s)},r=self["webpackChunk_02_change_pair"]=self["webpackChunk_02_change_pair"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t.O(void 0,[64],(function(){return t(4720)}));r=t.O(r)})();
//# sourceMappingURL=app.2be5adb8.js.map