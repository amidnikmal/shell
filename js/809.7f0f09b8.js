(self["webpackChunkshell"]=self["webpackChunkshell"]||[]).push([[809],{6077:function(t,e,r){var n=r(7854),o=r(614),i=n.String,a=n.TypeError;t.exports=function(t){if("object"==typeof t||o(t))return t;throw a("Can't set "+i(t)+" as a prototype")}},648:function(t,e,r){var n=r(7854),o=r(1694),i=r(614),a=r(4326),u=r(5112),c=u("toStringTag"),s=n.Object,f="Arguments"==a(function(){return arguments}()),p=function(t,e){try{return t[e]}catch(r){}};t.exports=o?a:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=p(e=s(t),c))?r:f?a(e):"Object"==(n=a(e))&&i(e.callee)?"Arguments":n}},7741:function(t,e,r){var n=r(1702),o=Error,i=n("".replace),a=function(t){return String(o(t).stack)}("zxcasd"),u=/\n\s*at [^:]*:[^\n]*/,c=u.test(a);t.exports=function(t,e){if(c&&"string"==typeof t&&!o.prepareStackTrace)while(e--)t=i(t,u,"");return t}},2914:function(t,e,r){var n=r(7293),o=r(9114);t.exports=!n((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",o(1,7)),7!==t.stack)}))},9587:function(t,e,r){var n=r(614),o=r(111),i=r(7674);t.exports=function(t,e,r){var a,u;return i&&n(a=e.constructor)&&a!==r&&o(u=a.prototype)&&u!==r.prototype&&i(t,u),t}},8340:function(t,e,r){var n=r(111),o=r(8880);t.exports=function(t,e){n(e)&&"cause"in e&&o(t,"cause",e.cause)}},6277:function(t,e,r){var n=r(1340);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:n(t)}},7674:function(t,e,r){var n=r(1702),o=r(9670),i=r(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{t=n(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(r,[]),e=r instanceof Array}catch(a){}return function(r,n){return o(r),i(n),e?t(r,n):r.__proto__=n,r}}():void 0)},2626:function(t,e,r){var n=r(3070).f;t.exports=function(t,e,r){r in t||n(t,r,{configurable:!0,get:function(){return e[r]},set:function(t){e[r]=t}})}},1694:function(t,e,r){var n=r(5112),o=n("toStringTag"),i={};i[o]="z",t.exports="[object z]"===String(i)},1340:function(t,e,r){var n=r(7854),o=r(648),i=n.String;t.exports=function(t){if("Symbol"===o(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},9191:function(t,e,r){"use strict";var n=r(5005),o=r(2597),i=r(8880),a=r(7976),u=r(7674),c=r(2128),s=r(2626),f=r(9587),p=r(6277),h=r(8340),l=r(7741),d=r(2914),v=r(9781),y=r(1913);t.exports=function(t,e,r,m){var g="stackTraceLimit",w=m?2:1,b=t.split("."),x=b[b.length-1],k=n.apply(null,b);if(k){var E=k.prototype;if(!y&&o(E,"cause")&&delete E.cause,!r)return k;var R=n("Error"),C=e((function(t,e){var r=p(m?e:t,void 0),n=m?new k(t):new k;return void 0!==r&&i(n,"message",r),d&&i(n,"stack",l(n.stack,2)),this&&a(E,this)&&f(n,this,C),arguments.length>w&&h(n,arguments[w]),n}));if(C.prototype=E,"Error"!==x?u?u(C,R):c(C,R,{name:!0}):v&&g in k&&(s(C,k,g),s(C,k,"prepareStackTrace")),c(C,k),!y)try{E.name!==x&&i(E,"name",x),E.constructor=C}catch(_){}return C}}},1703:function(t,e,r){var n=r(2109),o=r(7854),i=r(2104),a=r(9191),u="WebAssembly",c=o[u],s=7!==Error("e",{cause:7}).cause,f=function(t,e){var r={};r[t]=a(t,e,s),n({global:!0,arity:1,forced:s},r)},p=function(t,e){if(c&&c[t]){var r={};r[t]=a(u+"."+t,e,s),n({target:u,stat:!0,arity:1,forced:s},r)}};f("Error",(function(t){return function(e){return i(t,this,arguments)}})),f("EvalError",(function(t){return function(e){return i(t,this,arguments)}})),f("RangeError",(function(t){return function(e){return i(t,this,arguments)}})),f("ReferenceError",(function(t){return function(e){return i(t,this,arguments)}})),f("SyntaxError",(function(t){return function(e){return i(t,this,arguments)}})),f("TypeError",(function(t){return function(e){return i(t,this,arguments)}})),f("URIError",(function(t){return function(e){return i(t,this,arguments)}})),p("CompileError",(function(t){return function(e){return i(t,this,arguments)}})),p("LinkError",(function(t){return function(e){return i(t,this,arguments)}})),p("RuntimeError",(function(t){return function(e){return i(t,this,arguments)}}))},2809:function(t,e,r){"use strict";r.r(e);r(1703);function n(t,e){for(var r in e)t[r]=e[r];return t}var o=/[!'()*]/g,i=function(t){return"%"+t.charCodeAt(0).toString(16)},a=/%2C/g,u=function(t){return encodeURIComponent(t).replace(o,i).replace(a,",")};function c(t){try{return decodeURIComponent(t)}catch(e){0}return t}function s(t,e,r){void 0===e&&(e={});var n,o=r||p;try{n=o(t||"")}catch(u){n={}}for(var i in e){var a=e[i];n[i]=Array.isArray(a)?a.map(f):f(a)}return n}var f=function(t){return null==t||"object"===typeof t?t:String(t)};function p(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t?(t.split("&").forEach((function(t){var r=t.replace(/\+/g," ").split("="),n=c(r.shift()),o=r.length>0?c(r.join("=")):null;void 0===e[n]?e[n]=o:Array.isArray(e[n])?e[n].push(o):e[n]=[e[n],o]})),e):e}function h(t){var e=t?Object.keys(t).map((function(e){var r=t[e];if(void 0===r)return"";if(null===r)return u(e);if(Array.isArray(r)){var n=[];return r.forEach((function(t){void 0!==t&&(null===t?n.push(u(e)):n.push(u(e)+"="+u(t)))})),n.join("&")}return u(e)+"="+u(r)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var l=/\/?$/;function d(t,e,r,n){var o=n&&n.options.stringifyQuery,i=e.query||{};try{i=v(i)}catch(u){}var a={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:i,params:e.params||{},fullPath:g(e,o),matched:t?m(t):[]};return r&&(a.redirectedFrom=g(r,o)),Object.freeze(a)}function v(t){if(Array.isArray(t))return t.map(v);if(t&&"object"===typeof t){var e={};for(var r in t)e[r]=v(t[r]);return e}return t}var y=d(null,{path:"/"});function m(t){var e=[];while(t)e.unshift(t),t=t.parent;return e}function g(t,e){var r=t.path,n=t.query;void 0===n&&(n={});var o=t.hash;void 0===o&&(o="");var i=e||h;return(r||"/")+i(n)+o}function w(t,e,r){return e===y?t===e:!!e&&(t.path&&e.path?t.path.replace(l,"")===e.path.replace(l,"")&&(r||t.hash===e.hash&&b(t.query,e.query)):!(!t.name||!e.name)&&(t.name===e.name&&(r||t.hash===e.hash&&b(t.query,e.query)&&b(t.params,e.params))))}function b(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var r=Object.keys(t).sort(),n=Object.keys(e).sort();return r.length===n.length&&r.every((function(r,o){var i=t[r],a=n[o];if(a!==r)return!1;var u=e[r];return null==i||null==u?i===u:"object"===typeof i&&"object"===typeof u?b(i,u):String(i)===String(u)}))}function x(t,e){return 0===t.path.replace(l,"/").indexOf(e.path.replace(l,"/"))&&(!e.hash||t.hash===e.hash)&&k(t.query,e.query)}function k(t,e){for(var r in e)if(!(r in t))return!1;return!0}function E(t){for(var e=0;e<t.matched.length;e++){var r=t.matched[e];for(var n in r.instances){var o=r.instances[n],i=r.enteredCbs[n];if(o&&i){delete r.enteredCbs[n];for(var a=0;a<i.length;a++)o._isBeingDestroyed||i[a](o)}}}}var R={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var r=e.props,o=e.children,i=e.parent,a=e.data;a.routerView=!0;var u=i.$createElement,c=r.name,s=i.$route,f=i._routerViewCache||(i._routerViewCache={}),p=0,h=!1;while(i&&i._routerRoot!==i){var l=i.$vnode?i.$vnode.data:{};l.routerView&&p++,l.keepAlive&&i._directInactive&&i._inactive&&(h=!0),i=i.$parent}if(a.routerViewDepth=p,h){var d=f[c],v=d&&d.component;return v?(d.configProps&&C(v,a,d.route,d.configProps),u(v,a,o)):u()}var y=s.matched[p],m=y&&y.components[c];if(!y||!m)return f[c]=null,u();f[c]={component:m},a.registerRouteInstance=function(t,e){var r=y.instances[c];(e&&r!==t||!e&&r===t)&&(y.instances[c]=e)},(a.hook||(a.hook={})).prepatch=function(t,e){y.instances[c]=e.componentInstance},a.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==y.instances[c]&&(y.instances[c]=t.componentInstance),E(s)};var g=y.props&&y.props[c];return g&&(n(f[c],{route:s,configProps:g}),C(m,a,s,g)),u(m,a,o)}};function C(t,e,r,o){var i=e.props=_(r,o);if(i){i=e.props=n({},i);var a=e.attrs=e.attrs||{};for(var u in i)t.props&&u in t.props||(a[u]=i[u],delete i[u])}}function _(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}function O(t,e,r){var n=t.charAt(0);if("/"===n)return t;if("?"===n||"#"===n)return e+t;var o=e.split("/");r&&o[o.length-1]||o.pop();for(var i=t.replace(/^\//,"").split("/"),a=0;a<i.length;a++){var u=i[a];".."===u?o.pop():"."!==u&&o.push(u)}return""!==o[0]&&o.unshift(""),o.join("/")}function A(t){var e="",r="",n=t.indexOf("#");n>=0&&(e=t.slice(n),t=t.slice(0,n));var o=t.indexOf("?");return o>=0&&(r=t.slice(o+1),t=t.slice(0,o)),{path:t,query:r,hash:e}}function j(t){return t.replace(/\/+/g,"/")}var S=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},T=X,P=I,L=B,$=z,q=W,U=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function I(t,e){var r,n=[],o=0,i=0,a="",u=e&&e.delimiter||"/";while(null!=(r=U.exec(t))){var c=r[0],s=r[1],f=r.index;if(a+=t.slice(i,f),i=f+c.length,s)a+=s[1];else{var p=t[i],h=r[2],l=r[3],d=r[4],v=r[5],y=r[6],m=r[7];a&&(n.push(a),a="");var g=null!=h&&null!=p&&p!==h,w="+"===y||"*"===y,b="?"===y||"*"===y,x=r[2]||u,k=d||v;n.push({name:l||o++,prefix:h||"",delimiter:x,optional:b,repeat:w,partial:g,asterisk:!!m,pattern:k?H(k):m?".*":"[^"+N(x)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&n.push(a),n}function B(t,e){return z(I(t,e),e)}function M(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function V(t){return encodeURI(t).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function z(t,e){for(var r=new Array(t.length),n=0;n<t.length;n++)"object"===typeof t[n]&&(r[n]=new RegExp("^(?:"+t[n].pattern+")$",D(e)));return function(e,n){for(var o="",i=e||{},a=n||{},u=a.pretty?M:encodeURIComponent,c=0;c<t.length;c++){var s=t[c];if("string"!==typeof s){var f,p=i[s.name];if(null==p){if(s.optional){s.partial&&(o+=s.prefix);continue}throw new TypeError('Expected "'+s.name+'" to be defined')}if(S(p)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var h=0;h<p.length;h++){if(f=u(p[h]),!r[c].test(f))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'", but received `'+JSON.stringify(f)+"`");o+=(0===h?s.prefix:s.delimiter)+f}}else{if(f=s.asterisk?V(p):u(p),!r[c].test(f))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but received "'+f+'"');o+=s.prefix+f}}else o+=s}return o}}function N(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function H(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function F(t,e){return t.keys=e,t}function D(t){return t&&t.sensitive?"":"i"}function K(t,e){var r=t.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return F(t,e)}function J(t,e,r){for(var n=[],o=0;o<t.length;o++)n.push(X(t[o],e,r).source);var i=new RegExp("(?:"+n.join("|")+")",D(r));return F(i,e)}function Q(t,e,r){return W(I(t,r),e,r)}function W(t,e,r){S(e)||(r=e||r,e=[]),r=r||{};for(var n=r.strict,o=!1!==r.end,i="",a=0;a<t.length;a++){var u=t[a];if("string"===typeof u)i+=N(u);else{var c=N(u.prefix),s="(?:"+u.pattern+")";e.push(u),u.repeat&&(s+="(?:"+c+s+")*"),s=u.optional?u.partial?c+"("+s+")?":"(?:"+c+"("+s+"))?":c+"("+s+")",i+=s}}var f=N(r.delimiter||"/"),p=i.slice(-f.length)===f;return n||(i=(p?i.slice(0,-f.length):i)+"(?:"+f+"(?=$))?"),i+=o?"$":n&&p?"":"(?="+f+"|$)",F(new RegExp("^"+i,D(r)),e)}function X(t,e,r){return S(e)||(r=e||r,e=[]),r=r||{},t instanceof RegExp?K(t,e):S(t)?J(t,e,r):Q(t,e,r)}T.parse=P,T.compile=L,T.tokensToFunction=$,T.tokensToRegExp=q;var Y=Object.create(null);function G(t,e,r){e=e||{};try{var n=Y[t]||(Y[t]=T.compile(t));return"string"===typeof e.pathMatch&&(e[0]=e.pathMatch),n(e,{pretty:!0})}catch(o){return""}finally{delete e[0]}}function Z(t,e,r,o){var i="string"===typeof t?{path:t}:t;if(i._normalized)return i;if(i.name){i=n({},t);var a=i.params;return a&&"object"===typeof a&&(i.params=n({},a)),i}if(!i.path&&i.params&&e){i=n({},i),i._normalized=!0;var u=n(n({},e.params),i.params);if(e.name)i.name=e.name,i.params=u;else if(e.matched.length){var c=e.matched[e.matched.length-1].path;i.path=G(c,u,"path "+e.path)}else 0;return i}var f=A(i.path||""),p=e&&e.path||"/",h=f.path?O(f.path,p,r||i.append):p,l=s(f.query,i.query,o&&o.options.parseQuery),d=i.hash||f.hash;return d&&"#"!==d.charAt(0)&&(d="#"+d),{_normalized:!0,path:h,query:l,hash:d}}var tt,et=[String,Object],rt=[String,Array],nt=function(){},ot={name:"RouterLink",props:{to:{type:et,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:rt,default:"click"}},render:function(t){var e=this,r=this.$router,o=this.$route,i=r.resolve(this.to,o,this.append),a=i.location,u=i.route,c=i.href,s={},f=r.options.linkActiveClass,p=r.options.linkExactActiveClass,h=null==f?"router-link-active":f,l=null==p?"router-link-exact-active":p,v=null==this.activeClass?h:this.activeClass,y=null==this.exactActiveClass?l:this.exactActiveClass,m=u.redirectedFrom?d(null,Z(u.redirectedFrom),null,r):u;s[y]=w(o,m,this.exactPath),s[v]=this.exact||this.exactPath?s[y]:x(o,m);var g=s[y]?this.ariaCurrentValue:null,b=function(t){it(t)&&(e.replace?r.replace(a,nt):r.push(a,nt))},k={click:it};Array.isArray(this.event)?this.event.forEach((function(t){k[t]=b})):k[this.event]=b;var E={class:s},R=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:u,navigate:b,isActive:s[v],isExactActive:s[y]});if(R){if(1===R.length)return R[0];if(R.length>1||!R.length)return 0===R.length?t():t("span",{},R)}if("a"===this.tag)E.on=k,E.attrs={href:c,"aria-current":g};else{var C=at(this.$slots.default);if(C){C.isStatic=!1;var _=C.data=n({},C.data);for(var O in _.on=_.on||{},_.on){var A=_.on[O];O in k&&(_.on[O]=Array.isArray(A)?A:[A])}for(var j in k)j in _.on?_.on[j].push(k[j]):_.on[j]=b;var S=C.data.attrs=n({},C.data.attrs);S.href=c,S["aria-current"]=g}else E.on=k}return t(this.tag,E,this.$slots.default)}};function it(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function at(t){if(t)for(var e,r=0;r<t.length;r++){if(e=t[r],"a"===e.tag)return e;if(e.children&&(e=at(e.children)))return e}}function ut(t){if(!ut.installed||tt!==t){ut.installed=!0,tt=t;var e=function(t){return void 0!==t},r=function(t,r){var n=t.$options._parentVnode;e(n)&&e(n=n.data)&&e(n=n.registerRouteInstance)&&n(t,r)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,r(this,this)},destroyed:function(){r(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",R),t.component("RouterLink",ot);var n=t.config.optionMergeStrategies;n.beforeRouteEnter=n.beforeRouteLeave=n.beforeRouteUpdate=n.created}}var ct="undefined"!==typeof window;function st(t,e,r,n,o){var i=e||[],a=r||Object.create(null),u=n||Object.create(null);t.forEach((function(t){ft(i,a,u,t,o)}));for(var c=0,s=i.length;c<s;c++)"*"===i[c]&&(i.push(i.splice(c,1)[0]),s--,c--);return{pathList:i,pathMap:a,nameMap:u}}function ft(t,e,r,n,o,i){var a=n.path,u=n.name;var c=n.pathToRegexpOptions||{},s=ht(a,o,c.strict);"boolean"===typeof n.caseSensitive&&(c.sensitive=n.caseSensitive);var f={path:s,regex:pt(s,c),components:n.components||{default:n.component},alias:n.alias?"string"===typeof n.alias?[n.alias]:n.alias:[],instances:{},enteredCbs:{},name:u,parent:o,matchAs:i,redirect:n.redirect,beforeEnter:n.beforeEnter,meta:n.meta||{},props:null==n.props?{}:n.components?n.props:{default:n.props}};if(n.children&&n.children.forEach((function(n){var o=i?j(i+"/"+n.path):void 0;ft(t,e,r,n,f,o)})),e[f.path]||(t.push(f.path),e[f.path]=f),void 0!==n.alias)for(var p=Array.isArray(n.alias)?n.alias:[n.alias],h=0;h<p.length;++h){var l=p[h];0;var d={path:l,children:n.children};ft(t,e,r,d,o,f.path||"/")}u&&(r[u]||(r[u]=f))}function pt(t,e){var r=T(t,[],e);return r}function ht(t,e,r){return r||(t=t.replace(/\/$/,"")),"/"===t[0]||null==e?t:j(e.path+"/"+t)}function lt(t,e){var r=st(t),n=r.pathList,o=r.pathMap,i=r.nameMap;function a(t){st(t,n,o,i)}function u(t,e){var r="object"!==typeof t?i[t]:void 0;st([e||t],n,o,i,r),r&&r.alias.length&&st(r.alias.map((function(t){return{path:t,children:[e]}})),n,o,i,r)}function c(){return n.map((function(t){return o[t]}))}function s(t,r,a){var u=Z(t,r,!1,e),c=u.name;if(c){var s=i[c];if(!s)return h(null,u);var f=s.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!==typeof u.params&&(u.params={}),r&&"object"===typeof r.params)for(var p in r.params)!(p in u.params)&&f.indexOf(p)>-1&&(u.params[p]=r.params[p]);return u.path=G(s.path,u.params,'named route "'+c+'"'),h(s,u,a)}if(u.path){u.params={};for(var l=0;l<n.length;l++){var d=n[l],v=o[d];if(dt(v.regex,u.path,u.params))return h(v,u,a)}}return h(null,u)}function f(t,r){var n=t.redirect,o="function"===typeof n?n(d(t,r,null,e)):n;if("string"===typeof o&&(o={path:o}),!o||"object"!==typeof o)return h(null,r);var a=o,u=a.name,c=a.path,f=r.query,p=r.hash,l=r.params;if(f=a.hasOwnProperty("query")?a.query:f,p=a.hasOwnProperty("hash")?a.hash:p,l=a.hasOwnProperty("params")?a.params:l,u){i[u];return s({_normalized:!0,name:u,query:f,hash:p,params:l},void 0,r)}if(c){var v=vt(c,t),y=G(v,l,'redirect route with path "'+v+'"');return s({_normalized:!0,path:y,query:f,hash:p},void 0,r)}return h(null,r)}function p(t,e,r){var n=G(r,e.params,'aliased route with path "'+r+'"'),o=s({_normalized:!0,path:n});if(o){var i=o.matched,a=i[i.length-1];return e.params=o.params,h(a,e)}return h(null,e)}function h(t,r,n){return t&&t.redirect?f(t,n||r):t&&t.matchAs?p(t,r,t.matchAs):d(t,r,n,e)}return{match:s,addRoute:u,getRoutes:c,addRoutes:a}}function dt(t,e,r){var n=e.match(t);if(!n)return!1;if(!r)return!0;for(var o=1,i=n.length;o<i;++o){var a=t.keys[o-1];a&&(r[a.name||"pathMatch"]="string"===typeof n[o]?c(n[o]):n[o])}return!0}function vt(t,e){return O(t,e.parent?e.parent.path:"/",!0)}var yt=ct&&window.performance&&window.performance.now?window.performance:Date;function mt(){return yt.now().toFixed(3)}var gt=mt();function wt(){return gt}function bt(t){return gt=t}var xt=Object.create(null);function kt(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),r=n({},window.history.state);return r.key=wt(),window.history.replaceState(r,"",e),window.addEventListener("popstate",Ct),function(){window.removeEventListener("popstate",Ct)}}function Et(t,e,r,n){if(t.app){var o=t.options.scrollBehavior;o&&t.app.$nextTick((function(){var i=_t(),a=o.call(t,e,r,n?i:null);a&&("function"===typeof a.then?a.then((function(t){Lt(t,i)})).catch((function(t){0})):Lt(a,i))}))}}function Rt(){var t=wt();t&&(xt[t]={x:window.pageXOffset,y:window.pageYOffset})}function Ct(t){Rt(),t.state&&t.state.key&&bt(t.state.key)}function _t(){var t=wt();if(t)return xt[t]}function Ot(t,e){var r=document.documentElement,n=r.getBoundingClientRect(),o=t.getBoundingClientRect();return{x:o.left-n.left-e.x,y:o.top-n.top-e.y}}function At(t){return Tt(t.x)||Tt(t.y)}function jt(t){return{x:Tt(t.x)?t.x:window.pageXOffset,y:Tt(t.y)?t.y:window.pageYOffset}}function St(t){return{x:Tt(t.x)?t.x:0,y:Tt(t.y)?t.y:0}}function Tt(t){return"number"===typeof t}var Pt=/^#\d/;function Lt(t,e){var r="object"===typeof t;if(r&&"string"===typeof t.selector){var n=Pt.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(n){var o=t.offset&&"object"===typeof t.offset?t.offset:{};o=St(o),e=Ot(n,o)}else At(t)&&(e=jt(t))}else r&&At(t)&&(e=jt(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var $t=ct&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function qt(t,e){Rt();var r=window.history;try{if(e){var o=n({},r.state);o.key=wt(),r.replaceState(o,"",t)}else r.pushState({key:bt(mt())},"",t)}catch(i){window.location[e?"replace":"assign"](t)}}function Ut(t){qt(t,!0)}function It(t,e,r){var n=function(o){o>=t.length?r():t[o]?e(t[o],(function(){n(o+1)})):n(o+1)};n(0)}var Bt={redirected:2,aborted:4,cancelled:8,duplicated:16};function Mt(t,e){return Ht(t,e,Bt.redirected,'Redirected when going from "'+t.fullPath+'" to "'+Dt(e)+'" via a navigation guard.')}function Vt(t,e){var r=Ht(t,e,Bt.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return r.name="NavigationDuplicated",r}function zt(t,e){return Ht(t,e,Bt.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function Nt(t,e){return Ht(t,e,Bt.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function Ht(t,e,r,n){var o=new Error(n);return o._isRouter=!0,o.from=t,o.to=e,o.type=r,o}var Ft=["params","query","hash"];function Dt(t){if("string"===typeof t)return t;if("path"in t)return t.path;var e={};return Ft.forEach((function(r){r in t&&(e[r]=t[r])})),JSON.stringify(e,null,2)}function Kt(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function Jt(t,e){return Kt(t)&&t._isRouter&&(null==e||t.type===e)}function Qt(t){return function(e,r,n){var o=!1,i=0,a=null;Wt(t,(function(t,e,r,u){if("function"===typeof t&&void 0===t.cid){o=!0,i++;var c,s=Zt((function(e){Gt(e)&&(e=e.default),t.resolved="function"===typeof e?e:tt.extend(e),r.components[u]=e,i--,i<=0&&n()})),f=Zt((function(t){var e="Failed to resolve async component "+u+": "+t;a||(a=Kt(t)?t:new Error(e),n(a))}));try{c=t(s,f)}catch(h){f(h)}if(c)if("function"===typeof c.then)c.then(s,f);else{var p=c.component;p&&"function"===typeof p.then&&p.then(s,f)}}})),o||n()}}function Wt(t,e){return Xt(t.map((function(t){return Object.keys(t.components).map((function(r){return e(t.components[r],t.instances[r],t,r)}))})))}function Xt(t){return Array.prototype.concat.apply([],t)}var Yt="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Gt(t){return t.__esModule||Yt&&"Module"===t[Symbol.toStringTag]}function Zt(t){var e=!1;return function(){var r=[],n=arguments.length;while(n--)r[n]=arguments[n];if(!e)return e=!0,t.apply(this,r)}}var te=function(t,e){this.router=t,this.base=ee(e),this.current=y,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function ee(t){if(!t)if(ct){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function re(t,e){var r,n=Math.max(t.length,e.length);for(r=0;r<n;r++)if(t[r]!==e[r])break;return{updated:e.slice(0,r),activated:e.slice(r),deactivated:t.slice(r)}}function ne(t,e,r,n){var o=Wt(t,(function(t,n,o,i){var a=oe(t,e);if(a)return Array.isArray(a)?a.map((function(t){return r(t,n,o,i)})):r(a,n,o,i)}));return Xt(n?o.reverse():o)}function oe(t,e){return"function"!==typeof t&&(t=tt.extend(t)),t.options[e]}function ie(t){return ne(t,"beforeRouteLeave",ue,!0)}function ae(t){return ne(t,"beforeRouteUpdate",ue)}function ue(t,e){if(e)return function(){return t.apply(e,arguments)}}function ce(t){return ne(t,"beforeRouteEnter",(function(t,e,r,n){return se(t,r,n)}))}function se(t,e,r){return function(n,o,i){return t(n,o,(function(t){"function"===typeof t&&(e.enteredCbs[r]||(e.enteredCbs[r]=[]),e.enteredCbs[r].push(t)),i(t)}))}}te.prototype.listen=function(t){this.cb=t},te.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},te.prototype.onError=function(t){this.errorCbs.push(t)},te.prototype.transitionTo=function(t,e,r){var n,o=this;try{n=this.router.match(t,this.current)}catch(a){throw this.errorCbs.forEach((function(t){t(a)})),a}var i=this.current;this.confirmTransition(n,(function(){o.updateRoute(n),e&&e(n),o.ensureURL(),o.router.afterHooks.forEach((function(t){t&&t(n,i)})),o.ready||(o.ready=!0,o.readyCbs.forEach((function(t){t(n)})))}),(function(t){r&&r(t),t&&!o.ready&&(Jt(t,Bt.redirected)&&i===y||(o.ready=!0,o.readyErrorCbs.forEach((function(e){e(t)}))))}))},te.prototype.confirmTransition=function(t,e,r){var n=this,o=this.current;this.pending=t;var i=function(t){!Jt(t)&&Kt(t)&&(n.errorCbs.length?n.errorCbs.forEach((function(e){e(t)})):console.error(t)),r&&r(t)},a=t.matched.length-1,u=o.matched.length-1;if(w(t,o)&&a===u&&t.matched[a]===o.matched[u])return this.ensureURL(),t.hash&&Et(this.router,o,t,!1),i(Vt(o,t));var c=re(this.current.matched,t.matched),s=c.updated,f=c.deactivated,p=c.activated,h=[].concat(ie(f),this.router.beforeHooks,ae(s),p.map((function(t){return t.beforeEnter})),Qt(p)),l=function(e,r){if(n.pending!==t)return i(zt(o,t));try{e(t,o,(function(e){!1===e?(n.ensureURL(!0),i(Nt(o,t))):Kt(e)?(n.ensureURL(!0),i(e)):"string"===typeof e||"object"===typeof e&&("string"===typeof e.path||"string"===typeof e.name)?(i(Mt(o,t)),"object"===typeof e&&e.replace?n.replace(e):n.push(e)):r(e)}))}catch(a){i(a)}};It(h,l,(function(){var r=ce(p),a=r.concat(n.router.resolveHooks);It(a,l,(function(){if(n.pending!==t)return i(zt(o,t));n.pending=null,e(t),n.router.app&&n.router.app.$nextTick((function(){E(t)}))}))}))},te.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},te.prototype.setupListeners=function(){},te.prototype.teardown=function(){this.listeners.forEach((function(t){t()})),this.listeners=[],this.current=y,this.pending=null};var fe=function(t){function e(e,r){t.call(this,e,r),this._startLocation=pe(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,r=e.options.scrollBehavior,n=$t&&r;n&&this.listeners.push(kt());var o=function(){var r=t.current,o=pe(t.base);t.current===y&&o===t._startLocation||t.transitionTo(o,(function(t){n&&Et(e,t,r,!0)}))};window.addEventListener("popstate",o),this.listeners.push((function(){window.removeEventListener("popstate",o)}))}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,r){var n=this,o=this,i=o.current;this.transitionTo(t,(function(t){qt(j(n.base+t.fullPath)),Et(n.router,t,i,!1),e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this,o=this,i=o.current;this.transitionTo(t,(function(t){Ut(j(n.base+t.fullPath)),Et(n.router,t,i,!1),e&&e(t)}),r)},e.prototype.ensureURL=function(t){if(pe(this.base)!==this.current.fullPath){var e=j(this.base+this.current.fullPath);t?qt(e):Ut(e)}},e.prototype.getCurrentLocation=function(){return pe(this.base)},e}(te);function pe(t){var e=window.location.pathname,r=e.toLowerCase(),n=t.toLowerCase();return!t||r!==n&&0!==r.indexOf(j(n+"/"))||(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var he=function(t){function e(e,r,n){t.call(this,e,r),n&&le(this.base)||de()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,r=e.options.scrollBehavior,n=$t&&r;n&&this.listeners.push(kt());var o=function(){var e=t.current;de()&&t.transitionTo(ve(),(function(r){n&&Et(t.router,r,e,!0),$t||ge(r.fullPath)}))},i=$t?"popstate":"hashchange";window.addEventListener(i,o),this.listeners.push((function(){window.removeEventListener(i,o)}))}},e.prototype.push=function(t,e,r){var n=this,o=this,i=o.current;this.transitionTo(t,(function(t){me(t.fullPath),Et(n.router,t,i,!1),e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this,o=this,i=o.current;this.transitionTo(t,(function(t){ge(t.fullPath),Et(n.router,t,i,!1),e&&e(t)}),r)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;ve()!==e&&(t?me(e):ge(e))},e.prototype.getCurrentLocation=function(){return ve()},e}(te);function le(t){var e=pe(t);if(!/^\/#/.test(e))return window.location.replace(j(t+"/#"+e)),!0}function de(){var t=ve();return"/"===t.charAt(0)||(ge("/"+t),!1)}function ve(){var t=window.location.href,e=t.indexOf("#");return e<0?"":(t=t.slice(e+1),t)}function ye(t){var e=window.location.href,r=e.indexOf("#"),n=r>=0?e.slice(0,r):e;return n+"#"+t}function me(t){$t?qt(ye(t)):window.location.hash=t}function ge(t){$t?Ut(ye(t)):window.location.replace(ye(t))}var we=function(t){function e(e,r){t.call(this,e,r),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,r){var n=this;this.transitionTo(t,(function(t){n.stack=n.stack.slice(0,n.index+1).concat(t),n.index++,e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this;this.transitionTo(t,(function(t){n.stack=n.stack.slice(0,n.index).concat(t),e&&e(t)}),r)},e.prototype.go=function(t){var e=this,r=this.index+t;if(!(r<0||r>=this.stack.length)){var n=this.stack[r];this.confirmTransition(n,(function(){var t=e.current;e.index=r,e.updateRoute(n),e.router.afterHooks.forEach((function(e){e&&e(n,t)}))}),(function(t){Jt(t,Bt.duplicated)&&(e.index=r)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(te),be=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=lt(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!$t&&!1!==t.fallback,this.fallback&&(e="hash"),ct||(e="abstract"),this.mode=e,e){case"history":this.history=new fe(this,t.base);break;case"hash":this.history=new he(this,t.base,this.fallback);break;case"abstract":this.history=new we(this,t.base);break;default:0}},xe={currentRoute:{configurable:!0}};function ke(t,e){return t.push(e),function(){var r=t.indexOf(e);r>-1&&t.splice(r,1)}}function Ee(t,e,r){var n="hash"===r?"#"+e:e;return t?j(t+"/"+n):n}be.prototype.match=function(t,e,r){return this.matcher.match(t,e,r)},xe.currentRoute.get=function(){return this.history&&this.history.current},be.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var r=e.apps.indexOf(t);r>-1&&e.apps.splice(r,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardown()})),!this.app){this.app=t;var r=this.history;if(r instanceof fe||r instanceof he){var n=function(t){var n=r.current,o=e.options.scrollBehavior,i=$t&&o;i&&"fullPath"in t&&Et(e,t,n,!1)},o=function(t){r.setupListeners(),n(t)};r.transitionTo(r.getCurrentLocation(),o,o)}r.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},be.prototype.beforeEach=function(t){return ke(this.beforeHooks,t)},be.prototype.beforeResolve=function(t){return ke(this.resolveHooks,t)},be.prototype.afterEach=function(t){return ke(this.afterHooks,t)},be.prototype.onReady=function(t,e){this.history.onReady(t,e)},be.prototype.onError=function(t){this.history.onError(t)},be.prototype.push=function(t,e,r){var n=this;if(!e&&!r&&"undefined"!==typeof Promise)return new Promise((function(e,r){n.history.push(t,e,r)}));this.history.push(t,e,r)},be.prototype.replace=function(t,e,r){var n=this;if(!e&&!r&&"undefined"!==typeof Promise)return new Promise((function(e,r){n.history.replace(t,e,r)}));this.history.replace(t,e,r)},be.prototype.go=function(t){this.history.go(t)},be.prototype.back=function(){this.go(-1)},be.prototype.forward=function(){this.go(1)},be.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},be.prototype.resolve=function(t,e,r){e=e||this.history.current;var n=Z(t,e,r,this),o=this.match(n,e),i=o.redirectedFrom||o.fullPath,a=this.history.base,u=Ee(a,i,this.mode);return{location:n,route:o,href:u,normalizedTo:n,resolved:o}},be.prototype.getRoutes=function(){return this.matcher.getRoutes()},be.prototype.addRoute=function(t,e){this.matcher.addRoute(t,e),this.history.current!==y&&this.history.transitionTo(this.history.getCurrentLocation())},be.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==y&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(be.prototype,xe),be.install=ut,be.version="3.5.3",be.isNavigationFailure=Jt,be.NavigationFailureType=Bt,be.START_LOCATION=y,ct&&window.Vue&&window.Vue.use(be),e["default"]=be}}]);
//# sourceMappingURL=809.7f0f09b8.js.map