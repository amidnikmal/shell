(self["webpackChunkshell"]=self["webpackChunkshell"]||[]).push([[215],{8533:function(t,r,n){"use strict";var e=n(2092).forEach,o=n(9341),i=o("forEach");t.exports=i?[].forEach:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}},1194:function(t,r,n){var e=n(7293),o=n(5112),i=n(7392),u=o("species");t.exports=function(t){return i>=51||!e((function(){var r=[],n=r.constructor={};return n[u]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},9341:function(t,r,n){"use strict";var e=n(7293);t.exports=function(t,r){var n=[][t];return!!n&&e((function(){n.call(null,r||function(){return 1},1)}))}},1589:function(t,r,n){var e=n(7854),o=n(1400),i=n(6244),u=n(6135),c=e.Array,a=Math.max;t.exports=function(t,r,n){for(var e=i(t),f=o(r,e),s=o(void 0===n?e:n,e),l=c(a(s-f,0)),v=0;f<s;f++,v++)u(l,v,t[f]);return l.length=v,l}},6135:function(t,r,n){"use strict";var e=n(4948),o=n(3070),i=n(9114);t.exports=function(t,r,n){var u=e(r);u in t?o.f(t,u,i(0,n)):t[u]=n}},7235:function(t,r,n){var e=n(857),o=n(2597),i=n(6061),u=n(3070).f;t.exports=function(t){var r=e.Symbol||(e.Symbol={});o(r,t)||u(r,t,{value:i.f(t)})}},9587:function(t,r,n){var e=n(614),o=n(111),i=n(7674);t.exports=function(t,r,n){var u,c;return i&&e(u=r.constructor)&&u!==n&&o(c=u.prototype)&&c!==n.prototype&&i(t,c),t}},735:function(t,r,n){var e=n(133);t.exports=e&&!!Symbol["for"]&&!!Symbol.keyFor},1156:function(t,r,n){var e=n(4326),o=n(5656),i=n(8006).f,u=n(1589),c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return i(t)}catch(r){return u(c)}};t.exports.f=function(t){return c&&"Window"==e(t)?a(t):i(o(t))}},857:function(t,r,n){var e=n(7854);t.exports=e},2626:function(t,r,n){var e=n(3070).f;t.exports=function(t,r,n){n in t||e(t,n,{configurable:!0,get:function(){return r[n]},set:function(t){r[n]=t}})}},2261:function(t,r,n){"use strict";var e=n(6916),o=n(1702),i=n(1340),u=n(7066),c=n(2999),a=n(2309),f=n(30),s=n(9909).get,l=n(9441),v=n(7168),p=a("native-string-replace",String.prototype.replace),d=RegExp.prototype.exec,g=d,y=o("".charAt),h=o("".indexOf),x=o("".replace),b=o("".slice),m=function(){var t=/a/,r=/b*/g;return e(d,t,"a"),e(d,r,"a"),0!==t.lastIndex||0!==r.lastIndex}(),S=c.BROKEN_CARET,w=void 0!==/()??/.exec("")[1],E=m||w||S||l||v;E&&(g=function(t){var r,n,o,c,a,l,v,E=this,O=s(E),I=i(t),R=O.raw;if(R)return R.lastIndex=E.lastIndex,r=e(g,R,I),E.lastIndex=R.lastIndex,r;var A=O.groups,F=S&&E.sticky,k=e(u,E),C=E.source,P=0,j=I;if(F&&(k=x(k,"y",""),-1===h(k,"g")&&(k+="g"),j=b(I,E.lastIndex),E.lastIndex>0&&(!E.multiline||E.multiline&&"\n"!==y(I,E.lastIndex-1))&&(C="(?: "+C+")",j=" "+j,P++),n=new RegExp("^(?:"+C+")",k)),w&&(n=new RegExp("^"+C+"$(?!\\s)",k)),m&&(o=E.lastIndex),c=e(d,F?n:E,j),F?c?(c.input=b(c.input,P),c[0]=b(c[0],P),c.index=E.lastIndex,E.lastIndex+=c[0].length):E.lastIndex=0:m&&c&&(E.lastIndex=E.global?c.index+c[0].length:o),w&&c&&c.length>1&&e(p,c[0],n,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(c[a]=void 0)})),c&&A)for(c.groups=l=f(null),a=0;a<A.length;a++)v=A[a],l[v[0]]=c[v[1]];return c}),t.exports=g},7066:function(t,r,n){"use strict";var e=n(9670);t.exports=function(){var t=e(this),r="";return t.hasIndices&&(r+="d"),t.global&&(r+="g"),t.ignoreCase&&(r+="i"),t.multiline&&(r+="m"),t.dotAll&&(r+="s"),t.unicode&&(r+="u"),t.sticky&&(r+="y"),r}},2999:function(t,r,n){var e=n(7293),o=n(7854),i=o.RegExp,u=e((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),c=u||e((function(){return!i("a","y").sticky})),a=u||e((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}));t.exports={BROKEN_CARET:a,MISSED_STICKY:c,UNSUPPORTED_Y:u}},9441:function(t,r,n){var e=n(7293),o=n(7854),i=o.RegExp;t.exports=e((function(){var t=i(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},7168:function(t,r,n){var e=n(7293),o=n(7854),i=o.RegExp;t.exports=e((function(){var t=i("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},6532:function(t,r,n){var e=n(6916),o=n(5005),i=n(5112),u=n(8052);t.exports=function(){var t=o("Symbol"),r=t&&t.prototype,n=r&&r.valueOf,c=i("toPrimitive");r&&!r[c]&&u(r,c,(function(t){return e(n,this)}),{arity:1})}},6061:function(t,r,n){var e=n(5112);r.f=e},2222:function(t,r,n){"use strict";var e=n(2109),o=n(7854),i=n(7293),u=n(3157),c=n(111),a=n(7908),f=n(6244),s=n(6135),l=n(5417),v=n(1194),p=n(5112),d=n(7392),g=p("isConcatSpreadable"),y=9007199254740991,h="Maximum allowed index exceeded",x=o.TypeError,b=d>=51||!i((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),m=v("concat"),S=function(t){if(!c(t))return!1;var r=t[g];return void 0!==r?!!r:u(t)},w=!b||!m;e({target:"Array",proto:!0,arity:1,forced:w},{concat:function(t){var r,n,e,o,i,u=a(this),c=l(u,0),v=0;for(r=-1,e=arguments.length;r<e;r++)if(i=-1===r?u:arguments[r],S(i)){if(o=f(i),v+o>y)throw x(h);for(n=0;n<o;n++,v++)n in i&&s(c,v,i[n])}else{if(v>=y)throw x(h);s(c,v++,i)}return c.length=v,c}})},7042:function(t,r,n){"use strict";var e=n(2109),o=n(7854),i=n(3157),u=n(4411),c=n(111),a=n(1400),f=n(6244),s=n(5656),l=n(6135),v=n(5112),p=n(1194),d=n(206),g=p("slice"),y=v("species"),h=o.Array,x=Math.max;e({target:"Array",proto:!0,forced:!g},{slice:function(t,r){var n,e,o,v=s(this),p=f(v),g=a(t,p),b=a(void 0===r?p:r,p);if(i(v)&&(n=v.constructor,u(n)&&(n===h||i(n.prototype))?n=void 0:c(n)&&(n=n[y],null===n&&(n=void 0)),n===h||void 0===n))return d(v,g,b);for(e=new(void 0===n?h:n)(x(b-g,0)),o=0;g<b;g++,o++)g in v&&l(e,o,v[g]);return e.length=o,e}})},8862:function(t,r,n){var e=n(2109),o=n(5005),i=n(2104),u=n(6916),c=n(1702),a=n(7293),f=n(3157),s=n(614),l=n(111),v=n(2190),p=n(206),d=n(133),g=o("JSON","stringify"),y=c(/./.exec),h=c("".charAt),x=c("".charCodeAt),b=c("".replace),m=c(1..toString),S=/[\uD800-\uDFFF]/g,w=/^[\uD800-\uDBFF]$/,E=/^[\uDC00-\uDFFF]$/,O=!d||a((function(){var t=o("Symbol")();return"[null]"!=g([t])||"{}"!=g({a:t})||"{}"!=g(Object(t))})),I=a((function(){return'"\\udf06\\ud834"'!==g("\udf06\ud834")||'"\\udead"'!==g("\udead")})),R=function(t,r){var n=p(arguments),e=r;if((l(r)||void 0!==t)&&!v(t))return f(r)||(r=function(t,r){if(s(e)&&(r=u(e,this,t,r)),!v(r))return r}),n[1]=r,i(g,null,n)},A=function(t,r,n){var e=h(n,r-1),o=h(n,r+1);return y(w,t)&&!y(E,o)||y(E,t)&&!y(w,e)?"\\u"+m(x(t,0),16):t};g&&e({target:"JSON",stat:!0,arity:3,forced:O||I},{stringify:function(t,r,n){var e=p(arguments),o=i(O?R:g,null,e);return I&&"string"==typeof o?b(o,S,A):o}})},9660:function(t,r,n){var e=n(2109),o=n(133),i=n(7293),u=n(5181),c=n(7908),a=!o||i((function(){u.f(1)}));e({target:"Object",stat:!0,forced:a},{getOwnPropertySymbols:function(t){var r=u.f;return r?r(c(t)):[]}})},4916:function(t,r,n){"use strict";var e=n(2109),o=n(2261);e({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},4032:function(t,r,n){"use strict";var e=n(2109),o=n(7854),i=n(6916),u=n(1702),c=n(1913),a=n(9781),f=n(133),s=n(7293),l=n(2597),v=n(7976),p=n(9670),d=n(5656),g=n(4948),y=n(1340),h=n(9114),x=n(30),b=n(1956),m=n(8006),S=n(1156),w=n(5181),E=n(1236),O=n(3070),I=n(6048),R=n(5296),A=n(8052),F=n(2309),k=n(6200),C=n(3501),P=n(9711),j=n(5112),D=n(6061),N=n(7235),T=n(6532),$=n(8003),B=n(9909),M=n(2092).forEach,_=k("hidden"),K="Symbol",J="prototype",U=B.set,Y=B.getterFor(K),Q=Object[J],W=o.Symbol,q=W&&W[J],z=o.TypeError,G=o.QObject,H=E.f,L=O.f,V=S.f,X=R.f,Z=u([].push),tt=F("symbols"),rt=F("op-symbols"),nt=F("wks"),et=!G||!G[J]||!G[J].findChild,ot=a&&s((function(){return 7!=x(L({},"a",{get:function(){return L(this,"a",{value:7}).a}})).a}))?function(t,r,n){var e=H(Q,r);e&&delete Q[r],L(t,r,n),e&&t!==Q&&L(Q,r,e)}:L,it=function(t,r){var n=tt[t]=x(q);return U(n,{type:K,tag:t,description:r}),a||(n.description=r),n},ut=function(t,r,n){t===Q&&ut(rt,r,n),p(t);var e=g(r);return p(n),l(tt,e)?(n.enumerable?(l(t,_)&&t[_][e]&&(t[_][e]=!1),n=x(n,{enumerable:h(0,!1)})):(l(t,_)||L(t,_,h(1,{})),t[_][e]=!0),ot(t,e,n)):L(t,e,n)},ct=function(t,r){p(t);var n=d(r),e=b(n).concat(vt(n));return M(e,(function(r){a&&!i(ft,n,r)||ut(t,r,n[r])})),t},at=function(t,r){return void 0===r?x(t):ct(x(t),r)},ft=function(t){var r=g(t),n=i(X,this,r);return!(this===Q&&l(tt,r)&&!l(rt,r))&&(!(n||!l(this,r)||!l(tt,r)||l(this,_)&&this[_][r])||n)},st=function(t,r){var n=d(t),e=g(r);if(n!==Q||!l(tt,e)||l(rt,e)){var o=H(n,e);return!o||!l(tt,e)||l(n,_)&&n[_][e]||(o.enumerable=!0),o}},lt=function(t){var r=V(d(t)),n=[];return M(r,(function(t){l(tt,t)||l(C,t)||Z(n,t)})),n},vt=function(t){var r=t===Q,n=V(r?rt:d(t)),e=[];return M(n,(function(t){!l(tt,t)||r&&!l(Q,t)||Z(e,tt[t])})),e};f||(W=function(){if(v(q,this))throw z("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?y(arguments[0]):void 0,r=P(t),n=function(t){this===Q&&i(n,rt,t),l(this,_)&&l(this[_],r)&&(this[_][r]=!1),ot(this,r,h(1,t))};return a&&et&&ot(Q,r,{configurable:!0,set:n}),it(r,t)},q=W[J],A(q,"toString",(function(){return Y(this).tag})),A(W,"withoutSetter",(function(t){return it(P(t),t)})),R.f=ft,O.f=ut,I.f=ct,E.f=st,m.f=S.f=lt,w.f=vt,D.f=function(t){return it(j(t),t)},a&&(L(q,"description",{configurable:!0,get:function(){return Y(this).description}}),c||A(Q,"propertyIsEnumerable",ft,{unsafe:!0}))),e({global:!0,wrap:!0,forced:!f,sham:!f},{Symbol:W}),M(b(nt),(function(t){N(t)})),e({target:K,stat:!0,forced:!f},{useSetter:function(){et=!0},useSimple:function(){et=!1}}),e({target:"Object",stat:!0,forced:!f,sham:!a},{create:at,defineProperty:ut,defineProperties:ct,getOwnPropertyDescriptor:st}),e({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:lt}),T(),$(W,K),C[_]=!0},1817:function(t,r,n){"use strict";var e=n(2109),o=n(9781),i=n(7854),u=n(1702),c=n(2597),a=n(614),f=n(7976),s=n(1340),l=n(3070).f,v=n(9920),p=i.Symbol,d=p&&p.prototype;if(o&&a(p)&&(!("description"in d)||void 0!==p().description)){var g={},y=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:s(arguments[0]),r=f(d,this)?new p(t):void 0===t?p():p(t);return""===t&&(g[r]=!0),r};v(y,p),y.prototype=d,d.constructor=y;var h="Symbol(test)"==String(p("test")),x=u(d.toString),b=u(d.valueOf),m=/^Symbol\((.*)\)[^)]+$/,S=u("".replace),w=u("".slice);l(d,"description",{configurable:!0,get:function(){var t=b(this),r=x(t);if(c(g,t))return"";var n=h?w(r,7,-1):S(r,m,"$1");return""===n?void 0:n}}),e({global:!0,forced:!0},{Symbol:y})}},763:function(t,r,n){var e=n(2109),o=n(5005),i=n(2597),u=n(1340),c=n(2309),a=n(735),f=c("string-to-symbol-registry"),s=c("symbol-to-string-registry");e({target:"Symbol",stat:!0,forced:!a},{for:function(t){var r=u(t);if(i(f,r))return f[r];var n=o("Symbol")(r);return f[r]=n,s[n]=r,n}})},2165:function(t,r,n){var e=n(7235);e("iterator")},2526:function(t,r,n){n(4032),n(763),n(6620),n(8862),n(9660)},6620:function(t,r,n){var e=n(2109),o=n(2597),i=n(2190),u=n(6330),c=n(2309),a=n(735),f=c("symbol-to-string-registry");e({target:"Symbol",stat:!0,forced:!a},{keyFor:function(t){if(!i(t))throw TypeError(u(t)+" is not a symbol");if(o(f,t))return f[t]}})},4747:function(t,r,n){var e=n(7854),o=n(8324),i=n(8509),u=n(8533),c=n(8880),a=function(t){if(t&&t.forEach!==u)try{c(t,"forEach",u)}catch(r){t.forEach=u}};for(var f in o)o[f]&&a(e[f]&&e[f].prototype);a(i)}}]);
//# sourceMappingURL=215-legacy.e9211ecb.js.map