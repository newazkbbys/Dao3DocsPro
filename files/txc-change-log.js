var TxcChangeLog = (function () {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    var jquery_min = {exports: {}};

    /*! jQuery v3.3.1 -css,-css/addGetHookIf,-css/adjustCSS,-css/curCSS,-css/hiddenVisibleSelectors,-css/showHide,-effects,-effects/Tween,-effects/animatedSelector,-css/support,-css/var/cssExpand,-css/var/getStyles,-css/var/isHiddenWithinTree,-css/var/rboxStyle,-css/var/rnumnonpx,-css/var/swap,-dimensions,-offset,-deprecated,-event,-event/ajax,-event/alias,-event/focusin,-event/support,-event/trigger,-wrap | (c) JS Foundation and other contributors | jquery.org/license */

    (function (module) {
    	!function(e,t){module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)};}("undefined"!=typeof window?window:commonjsGlobal,function(e,t){var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,c=n.indexOf,u={},l=u.toString,f=u.hasOwnProperty,p=f.toString,d=p.call(Object),h={},y=function e(t){return "function"==typeof t&&"number"!=typeof t.nodeType},v=function e(t){return null!=t&&t===t.window},m={type:!0,src:!0,noModule:!0};function g(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in m)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o);}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?u[l.call(e)]||"object":typeof e}var T=function(e,t){return new T.fn.init(e,t)},w=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;T.fn=T.prototype={jquery:"3.3.1",constructor:T,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=T.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return T.each(this,e)},map:function(e){return this.pushStack(T.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},T.extend=T.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,c=arguments.length,u=!1;for("boolean"==typeof a&&(u=a,a=arguments[s]||{},s++),"object"==typeof a||y(a)||(a={}),s===c&&(a=this,s--);s<c;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(u&&r&&(T.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&T.isPlainObject(n)?n:{},a[t]=T.extend(u,o,r)):void 0!==r&&(a[t]=r));return a},T.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return !(!e||"[object Object]"!==l.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return !1;return !0},globalEval:function(e){g(e);},each:function(e,t){var n,r=0;if(j(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(w,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(j(Object(e))?T.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:c.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(j(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(T.fn[Symbol.iterator]=n[Symbol.iterator]),T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){u["[object "+t+"]"]=t.toLowerCase();});function j(e){var t=!!e&&"length"in e&&e.length,n=x(e);return !y(e)&&!v(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var C=r.documentElement,k,A,S=T.expando.split("").sort(N).join("")===T.expando,D=C.matches||C.webkitMatchesSelector||C.mozMatchesSelector||C.oMatchesSelector||C.msMatchesSelector,H=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,E=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e};function N(e,t){if(e===t)return k=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)?e===r||e.ownerDocument===r&&T.contains(r,e)?-1:t===r||t.ownerDocument===r&&T.contains(r,t)?1:A?c.call(A,e)-c.call(A,t):0:4&n?-1:1)}function L(e){var t,n=[],r=0,i=0;if(k=!1,A=!S&&e.slice(0),e.sort(N),k){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1);}return A=null,e}function q(e){return (e+"").replace(H,E)}T.extend({uniqueSort:L,unique:L,escapeSelector:q,find:function(e,t,n,i){var o,a,s=0;if(n=n||[],t=t||r,!e||"string"!=typeof e)return n;if(1!==(a=t.nodeType)&&9!==a)return [];if(i)while(o=i[s++])T.find.matchesSelector(o,e)&&n.push(o);else T.merge(n,t.querySelectorAll(e));return n},text:function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i)return e.textContent;if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=T.text(t);return n},contains:function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!n.contains(r))},isXMLDoc:function(e){var t=e&&(e.ownerDocument||e).documentElement;return !!t&&"HTML"!==t.nodeName},expr:{attrHandle:{},match:{bool:new RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$","i"),needsContext:/^[\x20\t\r\n\f]*[>+~]/}}}),T.extend(T.find,{matches:function(e,t){return T.find(e,null,null,t)},matchesSelector:function(e,t){return D.call(e,t)},attr:function(e,t){var n=T.expr.attrHandle[t.toLowerCase()],r=n&&f.call(T.expr.attrHandle,t.toLowerCase())?n(e,t,T.isXMLDoc(e)):void 0;return void 0!==r?r:e.getAttribute(t)}});var M=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&T(e).is(n))break;r.push(e);}return r},O=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},$=T.expr.match.needsContext;function F(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var R=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function W(e,t,n){return y(t)?T.grep(e,function(e,r){return !!t.call(e,r,e)!==n}):t.nodeType?T.grep(e,function(e){return e===t!==n}):"string"!=typeof t?T.grep(e,function(e){return c.call(t,e)>-1!==n}):T.filter(t,e,n)}T.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?T.find.matchesSelector(r,e)?[r]:[]:T.find.matches(e,T.grep(t,function(e){return 1===e.nodeType}))},T.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(T(e).filter(function(){for(t=0;t<r;t++)if(T.contains(i[t],this))return !0}));for(n=this.pushStack([]),t=0;t<r;t++)T.find(e,i[t],n);return r>1?T.uniqueSort(n):n},filter:function(e){return this.pushStack(W(this,e||[],!1))},not:function(e){return this.pushStack(W(this,e||[],!0))},is:function(e){return !!W(this,"string"==typeof e&&$.test(e)?T(e):e||[],!1).length}});var P,_=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(T.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||P,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:_.exec(e))||!i[1]&&t)return !t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof T?t[0]:t,T.merge(this,T.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),R.test(i[1])&&T.isPlainObject(t))for(i in t)y(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return (o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):y(e)?void 0!==n.ready?n.ready(e):e(T):T.makeArray(e,this)}).prototype=T.fn,P=T(r);var I=/^(?:parents|prev(?:Until|All))/,U={children:!0,contents:!0,next:!0,prev:!0};T.fn.extend({has:function(e){var t=T(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(T.contains(this,t[e]))return !0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&T(e);if(!$.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&T.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?T.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?c.call(T(e),this[0]):c.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(T.uniqueSort(T.merge(this.get(),T(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function X(e,t){while((e=e[t])&&1!==e.nodeType);return e}T.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return M(e,"parentNode")},parentsUntil:function(e,t,n){return M(e,"parentNode",n)},next:function(e){return X(e,"nextSibling")},prev:function(e){return X(e,"previousSibling")},nextAll:function(e){return M(e,"nextSibling")},prevAll:function(e){return M(e,"previousSibling")},nextUntil:function(e,t,n){return M(e,"nextSibling",n)},prevUntil:function(e,t,n){return M(e,"previousSibling",n)},siblings:function(e){return O((e.parentNode||{}).firstChild,e)},children:function(e){return O(e.firstChild)},contents:function(e){return F(e,"iframe")?e.contentDocument:(F(e,"template")&&(e=e.content||e),T.merge([],e.childNodes))}},function(e,t){T.fn[e]=function(n,r){var i=T.map(this,t,n);return "Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=T.filter(r,i)),this.length>1&&(U[e]||T.uniqueSort(i),I.test(e)&&i.reverse()),this.pushStack(i)};});var B=/[^\x20\t\r\n\f]+/g;function z(e){var t={};return T.each(e.match(B)||[],function(e,n){t[n]=!0;}),t}T.Callbacks=function(e){e="string"==typeof e?z(e):T.extend({},e);var t,n,r,i,o=[],a=[],s=-1,c=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1);}e.memory||(n=!1),t=!1,i&&(o=n?[]:"");},u={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){T.each(n,function(n,r){y(r)?e.unique&&u.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r);});}(arguments),n&&!t&&c()),this},remove:function(){return T.each(arguments,function(e,t){var n;while((n=T.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--;}),this},has:function(e){return e?T.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return !o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return !!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||c()),this},fire:function(){return u.fireWith(this,arguments),this},fired:function(){return !!r}};return u};function Q(e){return e}function V(e){throw e}function G(e,t,n,r){var i;try{e&&y(i=e.promise)?i.call(e).done(t).fail(n):e&&y(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r));}catch(e){n.apply(void 0,[e]);}}T.extend({Deferred:function(t){var n=[["notify","progress",T.Callbacks("memory"),T.Callbacks("memory"),2],["resolve","done",T.Callbacks("once memory"),T.Callbacks("once memory"),0,"resolved"],["reject","fail",T.Callbacks("once memory"),T.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return T.Deferred(function(t){T.each(n,function(n,r){var i=y(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&y(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments);});}),e=null;}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,c=arguments,u=function(){var e,u;if(!(t<o)){if((e=r.apply(s,c))===n.promise())throw new TypeError("Thenable self-resolution");u=e&&("object"==typeof e||"function"==typeof e)&&e.then,y(u)?i?u.call(e,a(o,n,Q,i),a(o,n,V,i)):(o++,u.call(e,a(o,n,Q,i),a(o,n,V,i),a(o,n,Q,n.notifyWith))):(r!==Q&&(s=void 0,c=[e]),(i||n.resolveWith)(s,c));}},l=i?u:function(){try{u();}catch(e){T.Deferred.exceptionHook&&T.Deferred.exceptionHook(e,l.stackTrace),t+1>=o&&(r!==V&&(s=void 0,c=[e]),n.rejectWith(s,c));}};t?l():(T.Deferred.getStackHook&&(l.stackTrace=T.Deferred.getStackHook()),e.setTimeout(l));}}return T.Deferred(function(e){n[0][3].add(a(0,e,y(i)?i:Q,e.notifyWith)),n[1][3].add(a(0,e,y(t)?t:Q)),n[2][3].add(a(0,e,y(r)?r:V));}).promise()},promise:function(e){return null!=e?T.extend(e,i):i}},o={};return T.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s;},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith;}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=T.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i);}};if(t<=1&&(G(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||y(i[n]&&i[n].then)))return a.then();while(n--)G(i[n],s(n),a.reject);return a.promise()}});var J=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;T.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&J.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n);},T.readyException=function(t){e.setTimeout(function(){throw t});};var Z=T.Deferred();T.fn.ready=function(e){return Z.then(e)["catch"](function(e){T.readyException(e);}),this},T.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--T.readyWait:T.isReady)||(T.isReady=!0,!0!==e&&--T.readyWait>0||Z.resolveWith(r,[T]));}}),T.ready.then=Z.then;function K(){r.removeEventListener("DOMContentLoaded",K),e.removeEventListener("load",K),T.ready();}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(T.ready):(r.addEventListener("DOMContentLoaded",K),e.addEventListener("load",K));var Y=function(e,t,n,r,i,o,a){var s=0,c=e.length,u=null==n;if("object"===x(n)){i=!0;for(s in n)Y(e,t,s,n[s],!0,o,a);}else if(void 0!==r&&(i=!0,y(r)||(a=!0),u&&(a?(t.call(e,r),t=null):(u=t,t=function(e,t,n){return u.call(T(e),n)})),t))for(;s<c;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:u?t.call(e):c?t(e[0],n):o},ee=/^-ms-/,te=/-([a-z])/g;function ne(e,t){return t.toUpperCase()}function re(e){return e.replace(ee,"ms-").replace(te,ne)}var ie=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function oe(){this.expando=T.expando+oe.uid++;}oe.uid=1,oe.prototype={cache:function(e){var t=e[this.expando];return t||(t={},ie(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[re(t)]=n;else for(r in t)i[re(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][re(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(re):(t=re(t))in r?[t]:t.match(B)||[]).length;while(n--)delete r[t[n]];}(void 0===t||T.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando]);}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!T.isEmptyObject(t)}};var ae=new oe,se=new oe,ce=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ue=/[A-Z]/g;function le(e){return "true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:ce.test(e)?JSON.parse(e):e)}function fe(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ue,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=le(n);}catch(e){}se.set(e,t,n);}else n=void 0;return n}T.extend({hasData:function(e){return se.hasData(e)||ae.hasData(e)},data:function(e,t,n){return se.access(e,t,n)},removeData:function(e,t){se.remove(e,t);},_data:function(e,t,n){return ae.access(e,t,n)},_removeData:function(e,t){ae.remove(e,t);}}),T.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=se.get(o),1===o.nodeType&&!ae.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=re(r.slice(5)),fe(o,r,i[r]));ae.set(o,"hasDataAttrs",!0);}return i}return "object"==typeof e?this.each(function(){se.set(this,e);}):Y(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=se.get(o,e)))return n;if(void 0!==(n=fe(o,e)))return n}else this.each(function(){se.set(this,e,t);});},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){se.remove(this,e);})}}),T.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=ae.get(e,t),n&&(!r||Array.isArray(n)?r=ae.access(e,t,T.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=T.queue(e,t),r=n.length,i=n.shift(),o=T._queueHooks(e,t),a=function(){T.dequeue(e,t);};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire();},_queueHooks:function(e,t){var n=t+"queueHooks";return ae.get(e,n)||ae.access(e,n,{empty:T.Callbacks("once memory").add(function(){ae.remove(e,[t+"queue",n]);})})}}),T.fn.extend({queue:function(e,t){var n=2;return "string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?T.queue(this[0],e):void 0===t?this:this.each(function(){var n=T.queue(this,e,t);T._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&T.dequeue(this,e);})},dequeue:function(e){return this.each(function(){T.dequeue(this,e);})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=T.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o]);};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=ae.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var he=/^(?:checkbox|radio)$/i,ye=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ve=/^$|^module$|\/(?:java|ecma)script/i,me={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};me.optgroup=me.option,me.tbody=me.tfoot=me.colgroup=me.caption=me.thead,me.th=me.td;function ge(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&F(e,t)?T.merge([e],n):n}function xe(e,t){for(var n=0,r=e.length;n<r;n++)ae.set(e[n],"globalEval",!t||ae.get(t[n],"globalEval"));}var be=/<|&#?\w+;/;function Te(e,t,n,r,i){for(var o,a,s,c,u,l,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))T.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(ye.exec(o)||["",""])[1].toLowerCase(),c=me[s]||me._default,a.innerHTML=c[1]+T.htmlPrefilter(o)+c[2],l=c[0];while(l--)a=a.lastChild;T.merge(p,a.childNodes),(a=f.firstChild).textContent="";}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&T.inArray(o,r)>-1)i&&i.push(o);else if(u=T.contains(o.ownerDocument,o),a=ge(f.appendChild(o),"script"),u&&xe(a),n){l=0;while(o=a[l++])ve.test(o.type||"")&&n.push(o);}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue;}();var we=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,je=/<script|<style|<link/i,Ce=/checked\s*(?:[^=]|=\s*.checked.)/i,ke=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ae(e,t){return F(e,"table")&&F(11!==t.nodeType?t:t.firstChild,"tr")?T(e).children("tbody")[0]||e:e}function Se(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function De(e){return "true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function He(e,t){var n,r,i,o,a,s,c,u;if(1===t.nodeType){if(ae.hasData(e)&&(o=ae.access(e),a=ae.set(t,o),u=o.events)){delete a.handle,a.events={};for(i in u)for(n=0,r=u[i].length;n<r;n++)T.event.add(t,i,u[i][n]);}se.hasData(e)&&(s=se.access(e),c=T.extend({},s),se.set(t,c));}}function Ee(e,t){var n=t.nodeName.toLowerCase();"input"===n&&he.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue);}function Ne(e,t,n,r){t=a.apply([],t);var i,o,s,c,u,l,f=0,p=e.length,d=p-1,v=t[0],m=y(v);if(m||p>1&&"string"==typeof v&&!h.checkClone&&Ce.test(v))return e.each(function(i){var o=e.eq(i);m&&(t[0]=v.call(this,i,o.html())),Ne(o,t,n,r);});if(p&&(i=Te(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(c=(s=T.map(ge(i,"script"),Se)).length;f<p;f++)u=i,f!==d&&(u=T.clone(u,!0,!0),c&&T.merge(s,ge(u,"script"))),n.call(e[f],u,f);if(c)for(l=s[s.length-1].ownerDocument,T.map(s,De),f=0;f<c;f++)u=s[f],ve.test(u.type||"")&&!ae.access(u,"globalEval")&&T.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?T._evalUrl&&T._evalUrl(u.src):g(u.textContent.replace(ke,""),l,u));}return e}function Le(e,t,n){for(var r,i=t?T.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||T.cleanData(ge(r)),r.parentNode&&(n&&T.contains(r.ownerDocument,r)&&xe(ge(r,"script")),r.parentNode.removeChild(r));return e}T.extend({htmlPrefilter:function(e){return e.replace(we,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),c=T.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||T.isXMLDoc(e)))for(a=ge(s),r=0,i=(o=ge(e)).length;r<i;r++)Ee(o[r],a[r]);if(t)if(n)for(o=o||ge(e),a=a||ge(s),r=0,i=o.length;r<i;r++)He(o[r],a[r]);else He(e,s);return (a=ge(s,"script")).length>0&&xe(a,!c&&ge(e,"script")),s},cleanData:function(e){for(var t,n,r,i=T.event.special,o=0;void 0!==(n=e[o]);o++)if(ie(n)){if(t=n[ae.expando]){if(t.events)for(r in t.events)i[r]?T.event.remove(n,r):T.removeEvent(n,r,t.handle);n[ae.expando]=void 0;}n[se.expando]&&(n[se.expando]=void 0);}}}),T.fn.extend({detach:function(e){return Le(this,e,!0)},remove:function(e){return Le(this,e)},text:function(e){return Y(this,function(e){return void 0===e?T.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e);})},null,e,arguments.length)},append:function(){return Ne(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Ae(this,e).appendChild(e);})},prepend:function(){return Ne(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Ae(this,e);t.insertBefore(e,t.firstChild);}})},before:function(){return Ne(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this);})},after:function(){return Ne(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling);})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(T.cleanData(ge(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return T.clone(this,e,t)})},html:function(e){return Y(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!je.test(e)&&!me[(ye.exec(e)||["",""])[1].toLowerCase()]){e=T.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(T.cleanData(ge(t,!1)),t.innerHTML=e);t=0;}catch(e){}}t&&this.empty().append(e);},null,e,arguments.length)},replaceWith:function(){var e=[];return Ne(this,arguments,function(t){var n=this.parentNode;T.inArray(this,e)<0&&(T.cleanData(ge(this)),n&&n.replaceChild(t,this));},e)}}),T.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){T.fn[e]=function(e){for(var n,r=[],i=T(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),T(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)};}),T.fn.delay=function(t,n){return t=T.fx?T.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i);};})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value;}();var qe,Me=T.expr.attrHandle;T.fn.extend({attr:function(e,t){return Y(this,T.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){T.removeAttr(this,e);})}}),T.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return "undefined"==typeof e.getAttribute?T.prop(e,t,n):(1===o&&T.isXMLDoc(e)||(i=T.attrHooks[t.toLowerCase()]||(T.expr.match.bool.test(t)?qe:void 0)),void 0!==n?null===n?void T.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=T.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&F(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(B);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n);}}),qe={set:function(e,t,n){return !1===t?T.removeAttr(e,n):e.setAttribute(n,n),n}},T.each(T.expr.match.bool.source.match(/\w+/g),function(e,t){var n=Me[t]||T.find.attr;Me[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=Me[a],Me[a]=i,i=null!=n(e,t,r)?a:null,Me[a]=o),i};});var Oe=/^(?:input|select|textarea|button)$/i,$e=/^(?:a|area)$/i;T.fn.extend({prop:function(e,t){return Y(this,T.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[T.propFix[e]||e];})}}),T.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&T.isXMLDoc(e)||(t=T.propFix[t]||t,i=T.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=T.find.attr(e,"tabindex");return t?parseInt(t,10):Oe.test(e.nodeName)||$e.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(T.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex);}}),T.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){T.propFix[this.toLowerCase()]=this;});function Fe(e){return (e.match(B)||[]).join(" ")}function Re(e){return e.getAttribute&&e.getAttribute("class")||""}function We(e){return Array.isArray(e)?e:"string"==typeof e?e.match(B)||[]:[]}T.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,c=0;if(y(e))return this.each(function(t){T(this).addClass(e.call(this,t,Re(this)));});if((t=We(e)).length)while(n=this[c++])if(i=Re(n),r=1===n.nodeType&&" "+Fe(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=Fe(r))&&n.setAttribute("class",s);}return this},removeClass:function(e){var t,n,r,i,o,a,s,c=0;if(y(e))return this.each(function(t){T(this).removeClass(e.call(this,t,Re(this)));});if(!arguments.length)return this.attr("class","");if((t=We(e)).length)while(n=this[c++])if(i=Re(n),r=1===n.nodeType&&" "+Fe(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=Fe(r))&&n.setAttribute("class",s);}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return "boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):y(e)?this.each(function(n){T(this).toggleClass(e.call(this,n,Re(this),t),t);}):this.each(function(){var t,i,o,a;if(r){i=0,o=T(this),a=We(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t);}else void 0!==e&&"boolean"!==n||((t=Re(this))&&ae.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":ae.get(this,"__className__")||""));})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+Fe(Re(n))+" ").indexOf(t)>-1)return !0;return !1}});var Pe=/\r/g;T.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=y(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,T(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=T.map(i,function(e){return null==e?"":e+""})),(t=T.valHooks[this.type]||T.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i));});if(i)return (t=T.valHooks[i.type]||T.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(Pe,""):null==n?"":n}}}),T.extend({valHooks:{option:{get:function(e){var t=T.find.attr(e,"value");return null!=t?t:Fe(T.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],c=a?o+1:i.length;for(r=o<0?c:a?o:0;r<c;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!F(n.parentNode,"optgroup"))){if(t=T(n).val(),a)return t;s.push(t);}return s},set:function(e,t){var n,r,i=e.options,o=T.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=T.inArray(T.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),T.each(["radio","checkbox"],function(){T.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=T.inArray(T(e).val(),t)>-1}},h.checkOn||(T.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value});});var _e=e.location,Ie=Date.now(),Ue=/\?/;T.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml");}catch(e){n=void 0;}return n&&!n.getElementsByTagName("parsererror").length||T.error("Invalid XML: "+t),n};var Xe=/\[\]$/,Be=/\r?\n/g,ze=/^(?:submit|button|image|reset|file)$/i,Qe=/^(?:input|select|textarea|keygen)/i;function Ve(e,t,n,r){var i;if(Array.isArray(t))T.each(t,function(t,i){n||Xe.test(e)?r(e,i):Ve(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r);});else if(n||"object"!==x(t))r(e,t);else for(i in t)Ve(e+"["+i+"]",t[i],n,r);}T.param=function(e,t){var n,r=[],i=function(e,t){var n=y(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n);};if(Array.isArray(e)||e.jquery&&!T.isPlainObject(e))T.each(e,function(){i(this.name,this.value);});else for(n in e)Ve(n,e[n],t,i);return r.join("&")},T.fn.extend({serialize:function(){return T.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=T.prop(this,"elements");return e?T.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!T(this).is(":disabled")&&Qe.test(this.nodeName)&&!ze.test(e)&&(this.checked||!he.test(e))}).map(function(e,t){var n=T(this).val();return null==n?null:Array.isArray(n)?T.map(n,function(e){return {name:t.name,value:e.replace(Be,"\r\n")}}):{name:t.name,value:n.replace(Be,"\r\n")}}).get()}});var Ge=/%20/g,Je=/#.*$/,Ze=/([?&])_=[^&]*/,Ke=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ye=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,et=/^(?:GET|HEAD)$/,tt=/^\/\//,nt={},rt={},it="*/".concat("*"),ot=r.createElement("a");ot.href=_e.href;function at(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(B)||[];if(y(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n);}}function st(e,t,n,r){var i={},o=e===rt;function a(s){var c;return i[s]=!0,T.each(e[s]||[],function(e,s){var u=s(t,n,r);return "string"!=typeof u||o||i[u]?o?!(c=u):void 0:(t.dataTypes.unshift(u),a(u),!1)}),c}return a(t.dataTypes[0])||!i["*"]&&a("*")}function ct(e,t){var n,r,i=T.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&T.extend(!0,e,r),e}function ut(e,t,n){var r,i,o,a,s=e.contents,c=e.dataTypes;while("*"===c[0])c.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){c.unshift(i);break}if(c[0]in n)o=c[0];else {for(i in n){if(!c[0]||e.converters[i+" "+c[0]]){o=i;break}a||(a=i);}o=o||a;}if(o)return o!==c[0]&&c.unshift(o),n[o]}function lt(e,t,n,r){var i,o,a,s,c,u={},l=e.dataTypes.slice();if(l[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=l.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!c&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),c=o,o=l.shift())if("*"===o)o=c;else if("*"!==c&&c!==o){if(!(a=u[c+" "+o]||u["* "+o]))for(i in u)if((s=i.split(" "))[1]===o&&(a=u[c+" "+s[0]]||u["* "+s[0]])){!0===a?a=u[i]:!0!==u[i]&&(o=s[0],l.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t);}catch(e){return {state:"parsererror",error:a?e:"No conversion from "+c+" to "+o}}}return {state:"success",data:t}}T.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:_e.href,type:"GET",isLocal:Ye.test(_e.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":it,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":T.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?ct(ct(e,T.ajaxSettings),t):ct(T.ajaxSettings,e)},ajaxPrefilter:at(nt),ajaxTransport:at(rt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,c,u,l,f,p,d,h=T.ajaxSetup({},n),y=h.context||h,v=h.context&&(y.nodeType||y.jquery)?T(y):T.event,m=T.Deferred(),g=T.Callbacks("once memory"),x=h.statusCode||{},b={},w={},j="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(l){if(!s){s={};while(t=Ke.exec(a))s[t[1].toLowerCase()]=t[2];}t=s[e.toLowerCase()];}return null==t?null:t},getAllResponseHeaders:function(){return l?a:null},setRequestHeader:function(e,t){return null==l&&(e=w[e.toLowerCase()]=w[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==l&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(l)C.always(e[C.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||j;return i&&i.abort(t),k(0,t),this}};if(m.promise(C),h.url=((t||h.url||_e.href)+"").replace(tt,_e.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(B)||[""],null==h.crossDomain){u=r.createElement("a");try{u.href=h.url,u.href=u.href,h.crossDomain=ot.protocol+"//"+ot.host!=u.protocol+"//"+u.host;}catch(e){h.crossDomain=!0;}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=T.param(h.data,h.traditional)),st(nt,h,n,C),l)return C;(f=T.event&&h.global)&&0==T.active++&&T.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!et.test(h.type),o=h.url.replace(Je,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(Ge,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(Ue.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ze,"$1"),d=(Ue.test(o)?"&":"?")+"_="+Ie+++d),h.url=o+d),h.ifModified&&(T.lastModified[o]&&C.setRequestHeader("If-Modified-Since",T.lastModified[o]),T.etag[o]&&C.setRequestHeader("If-None-Match",T.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&C.setRequestHeader("Content-Type",h.contentType),C.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+it+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)C.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(y,C,h)||l))return C.abort();if(j="abort",g.add(h.complete),C.done(h.success),C.fail(h.error),i=st(rt,h,n,C)){if(C.readyState=1,f&&v.trigger("ajaxSend",[C,h]),l)return C;h.async&&h.timeout>0&&(c=e.setTimeout(function(){C.abort("timeout");},h.timeout));try{l=!1,i.send(b,k);}catch(e){if(l)throw e;k(-1,e);}}else k(-1,"No Transport");function k(t,n,r,s){var u,p,d,b,w,j=n;l||(l=!0,c&&e.clearTimeout(c),i=void 0,a=s||"",C.readyState=t>0?4:0,u=t>=200&&t<300||304===t,r&&(b=ut(h,C,r)),b=lt(h,b,C,u),u?(h.ifModified&&((w=C.getResponseHeader("Last-Modified"))&&(T.lastModified[o]=w),(w=C.getResponseHeader("etag"))&&(T.etag[o]=w)),204===t||"HEAD"===h.type?j="nocontent":304===t?j="notmodified":(j=b.state,p=b.data,u=!(d=b.error))):(d=j,!t&&j||(j="error",t<0&&(t=0))),C.status=t,C.statusText=(n||j)+"",u?m.resolveWith(y,[p,j,C]):m.rejectWith(y,[C,j,d]),C.statusCode(x),x=void 0,f&&v.trigger(u?"ajaxSuccess":"ajaxError",[C,h,u?p:d]),g.fireWith(y,[C,j]),f&&(v.trigger("ajaxComplete",[C,h]),--T.active||T.event.trigger("ajaxStop")));}return C},getJSON:function(e,t,n){return T.get(e,t,n,"json")},getScript:function(e,t){return T.get(e,void 0,t,"script")}}),T.each(["get","post"],function(e,t){T[t]=function(e,n,r,i){return y(n)&&(i=i||r,r=n,n=void 0),T.ajax(T.extend({url:e,type:t,dataType:i,data:n,success:r},T.isPlainObject(e)&&e))};}),T._evalUrl=function(e){return T.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},T.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var ft={0:200,1223:204},pt=T.ajaxSettings.xhr();h.cors=!!pt&&"withCredentials"in pt,h.ajax=pt=!!pt,T.ajaxTransport(function(t){var n,r;if(h.cors||pt&&!t.crossDomain)return {send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(ft[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()));}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r();});},n=n("abort");try{s.send(t.hasContent&&t.data||null);}catch(e){if(n)throw e}},abort:function(){n&&n();}}}),T.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1);}),T.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return T.globalEval(e),e}}}),T.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET");}),T.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return {send:function(i,o){t=T("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type);}),r.head.appendChild(t[0]);},abort:function(){n&&n();}}}});var dt=[],ht=/(=)\?(?=&|$)|\?\?/;T.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=dt.pop()||T.expando+"_"+Ie++;return this[e]=!0,e}}),T.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(ht.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&ht.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=y(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(ht,"$1"+i):!1!==t.jsonp&&(t.url+=(Ue.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||T.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments;},r.always(function(){void 0===o?T(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,dt.push(i)),a&&y(o)&&o(a[0]),a=o=void 0;}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),T.parseHTML=function(e,t,n){if("string"!=typeof e)return [];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=R.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=Te([e],t,a),a&&a.length&&T(a).remove(),T.merge([],o.childNodes))},T.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=Fe(e.slice(s)),e=e.slice(0,s)),y(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&T.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?T("<div>").append(T.parseHTML(e)).find(r):e);}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e]);});}),this};var yt=e.jQuery,vt=e.$;return T.noConflict=function(t){return e.$===T&&(e.$=vt),t&&e.jQuery===T&&(e.jQuery=yt),T},t||(e.jQuery=e.$=T),T});
    	
    } (jquery_min));

    var $ = jquery_min.exports;

    /** infrastructure ajax */
    function request(opts) {
      const baseUrl = 'https://txc.qq.com';
      /**
         * ProgressEvent 补丁
         * @param xhr
         * @param cb
         */
      /**
         * oa.m.tencent.com 下会追加一级路径，需要特殊处理
         * @param url
         */
      const getUrl = (url) => {
        return `${baseUrl}${url}`;
      };

      Object.assign(opts, {
        xhr: () => {
          // 获取原始的 xhr 对象
          let originXHR = $.ajaxSettings.xhr();

          // 如果有进度监听的函数，补上对 progress 事件的监听
          if (opts.onProgress) {
            originXHR = PatchProgressEvent(originXHR, opts.onProgress);
          }

          return originXHR;
        },
        url: getUrl(opts.url),
      });

      return new Promise((resolve, reject) => {
        const ajax = $.ajax(opts);

        ajax.done((resp) => {
          if (resp.status !== 0) {
            const err = new Error(resp.message);
            err.response = resp;
            reject(err);
            return;
          }

          resolve(resp);
        });

        ajax.fail((jqXHR, textStatus, errorThrown) => {
          // 当用户主动 abort 的使用，也会触发 fail，但此时没有 errorThrown
          // 这种 abort 的行为，不触发 resolve 和 reject，保持 pending 状态即可
          // https://github.com/jquery/jquery/blob/cf84696fd1d7fe314a11492606529b5a658ee9e3/src/ajax/xhr.js#L96
          if (!errorThrown) {
            return;
          }

          reject(errorThrown);
        });
      });
    }

    /**
     * GET 数据
     * @param {object} opts params
     */
    function getJson(opts) {
      const defaultOpts = {
        type: 'get',
        dataType: 'json',
        cache: false,
      };
      return request(Object.assign({}, defaultOpts, opts));
    }

    /* eslint-disable camelcase */
    /**
     * 更新日志列表
     */
    var getApiV2PostLabelFeat = function (_a) {
        var productId = _a.productId, nextPageId = _a.nextPageId, perPage = _a.perPage, prevPageId = _a.prevPageId;
        return getJson({
            url: "/api/v2/".concat(productId, "/posts/label/feat"),
            data: { next_page_id: nextPageId, per_page: perPage, prev_page_id: prevPageId },
        });
    };

    var saveJsonParse = function (text, defaultValue) {
        if (defaultValue === void 0) { defaultValue = ''; }
        var v = defaultValue;
        try {
            v = JSON.parse(text);
        }
        catch (error) {
            // console.log(text);
            console.log('parse 失败');
        }
        return v;
    };
    /** 获取更新日志内容 */
    var getChangeLogContent = function (param) {
        var _a;
        var content = [];
        // 感谢功能投票列表
        var thankVoteIdList = [];
        // 感谢帖子列表git
        var thankPostIdList = [];
        // 是否弹窗
        var notification = true;
        // 版本
        var version = '';
        // 更新时间
        var versionDate = '';
        // NOTE：目前用来存用户的感谢帖子的历史数据用来回填
        var downloadLink = [];
        var res = saveJsonParse(param, {});
        thankVoteIdList = res.thank_vote_id_list;
        notification = res.SDK_notification;
        version = res.version;
        versionDate = res.version_date;
        thankPostIdList = (_a = res.thank_post_id_list) === null || _a === void 0 ? void 0 : _a.filter(function (str) { return !!str; }).map(function (str) { return saveJsonParse(str, ''); });
        content = saveJsonParse(res.content, []);
        downloadLink = saveJsonParse(res.download_link, []);
        return { content: content, thankVoteIdList: thankVoteIdList, thankPostIdList: thankPostIdList, notification: notification, version: version, versionDate: versionDate, downloadLink: downloadLink };
    };
    var getChangeLogInfo = function (productId) { return getApiV2PostLabelFeat({ productId: productId }); };
    var formatData = function (resp) { return Object.keys(resp.data)
        .map(function (key) { return (getChangeLogContent(resp.data[key].content)); })
        .sort(function (a, b) { return Number.parseInt(b.versionDate, 10) - Number.parseInt(a.versionDate, 10); }); };
    var getChangeLogKey = function (productId) { return "TXC_CHANGE_LOG_".concat(productId); };
    var getLastVersionDate = function (productId) { return window.localStorage.getItem(getChangeLogKey(productId)) || '0'; };
    // 更新最新一条弹窗的更新日志
    var updateLastVersionDate = function (productId, lastVersionDate) {
        window.localStorage.setItem(getChangeLogKey(productId), lastVersionDate);
    };
    // 是否有需要弹出的更新日志， 根据产品过滤规则过滤数据：日志时间在7天内， 且没被打开过的更新日志中 有
    var hasPopupContent = function (productId, contents, recentDay) { return contents
        .filter(function (content) {
        var now = Date.now() / 1000;
        return (now - Number.parseInt(content.versionDate, 10)) < recentDay * 24 * 60 * 60;
    })
        .filter(function (content) { return content.versionDate > getLastVersionDate(productId); })
        .some(function (content) { return content.notification === true; }); };

    var TxcChangeLog = /** @class */ (function () {
        function TxcChangeLog(_a) {
            var id = _a.id, modalIndex = _a.modalIndex, recentDay = _a.recentDay;
            var _this = this;
            this.shouldModalShow = function () { return __awaiter(_this, void 0, void 0, function () {
                var contents;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.productId)
                                return [2 /*return*/, false];
                            return [4 /*yield*/, getChangeLogInfo(this.productId).then(formatData)];
                        case 1:
                            contents = _a.sent();
                            this.contents = contents;
                            return [2 /*return*/, hasPopupContent(this.productId, contents, this.recentDay)];
                    }
                });
            }); };
            this.showModal = function () {
                if (_this.isModalShow)
                    return;
                _this.isModalShow = true;
                var root = document.createElement('div');
                _this.root = root;
                root.setAttribute('class', 'txc-change-log');
                root.setAttribute('id', 'txc-change-log');
                root.innerHTML = "\n      <div class=\"txc-change-log__mask\" style=\"position: fixed; top: 0px; bottom: 0px; inset-inline: 0px; z-index: ".concat(_this.modalIndex, "; height: 100%; background-color: rgba(0, 0, 0, 0.4);\"></div>\n      <div class=\"txc-change-log__wrap\" style=\"display: flex; align-items: center; justify-content: center; position: fixed; top: 0px; bottom: 0px; z-index: ").concat(_this.modalIndex, "; height: 100%; inset-inline: 0px;\">\n        <div class=\"txc-change-log__main\" style=\"position: relative; width: 900px; height: ").concat(_this.height, "px; border-radius: 6px; background: rgb(255, 255, 255); overflow: hidden;\">\n          <span role=\"img\" aria-label=\"close\" class=\"txc-change-log__close\" style=\"position: absolute; top: 17px; inset-inline-end: 17px; z-index: ").concat(_this.modalIndex + 10, "; cursor: pointer;\" id=\"txc-change-log__close\">\n            <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"\u00E7\u008A\u00B6\u00E6\u0080\u0081=normal \u00E9\u00BB\u0098\u00E8\u00AE\u00A4\"><path id=\"Union\" d=\"M12.0001 13.3784L16.6139 17.9923L17.9928 16.6134L13.3789 11.9996L17.9928 7.38573L16.6139 6.00688L12.0001 10.6207L7.38618 6.00684L6.00732 7.38569L10.6212 11.9996L6.00732 16.6135L7.38618 17.9923L12.0001 13.3784Z\" fill=\"black\" fill-opacity=\"0.6\"></path></g></svg>\n          </span>      \n          <div class=\"txc-change-log__header\" id=\"txc-change-log__header\" style=\"position: relative; padding: 16px 0px; text-align: center; font-size: 16px; line-height: 24px; border-bottom: 1px solid rgb(231, 231, 231); background: rgb(243, 243, 243);\">\n            \u66F4\u65B0\u65E5\u5FD7\n          </div>\n          <iframe title=\"\u66F4\u65B0\u65E5\u5FD7\" src=\"https://txc.qq.com/products/").concat(_this.productId, "/change-log-share\" width=\"100%\" height=\"").concat(_this.height - 60, "px\" sandbox=\"allow-same-origin allow-scripts allow-popups allow-modals allow-top-navigation\" style=\"border: 0px;\"></iframe>\n        </div>\n      </div>\n    ");
                document.body.appendChild(root);
                _this.afterLogModalShow();
            };
            this.closeModal = function () {
                if (!_this.root || !_this.isModalShow)
                    return;
                _this.isModalShow = false;
                document.body.removeChild(_this.root);
                _this.root.removeEventListener('click', _this.closeModal);
            };
            this.activateChangeLog = function () { return __awaiter(_this, void 0, void 0, function () {
                var isNeedPopup;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.shouldModalShow()];
                        case 1:
                            isNeedPopup = _a.sent();
                            if (isNeedPopup) {
                                this.showModal();
                            }
                            return [2 /*return*/];
                    }
                });
            }); };
            this.afterLogModalShow = function () {
                var _a;
                if (!_this.root)
                    return;
                _this.root.addEventListener('click', _this.closeModal);
                _this.root.addEventListener('scroll', function (event) {
                    event.stopPropagation();
                });
                _this.root.addEventListener('wheel', function (event) {
                    event.preventDefault();
                });
                var header = document.getElementById('txc-change-log__header');
                header === null || header === void 0 ? void 0 : header.addEventListener('click', function (e) {
                    e.stopPropagation();
                });
                if ((_a = _this.contents) === null || _a === void 0 ? void 0 : _a[0]) {
                    updateLastVersionDate(_this.productId, _this.contents[0].versionDate);
                }
            };
            // private adaptationIsHighly = () => {
            //   window.addEventListener('resize', debounce(() => {
            //     this.height = this.getHeight()
            //   }, 3000), false);
            // }
            this.getHeight = function () {
                var windowHeight = window.innerHeight;
                if (windowHeight > 850)
                    return 800;
                if (windowHeight > 700)
                    return 680;
                return 540;
            };
            var defaultRecentDay = 7;
            this.productId = id;
            this.modalIndex = modalIndex || 1000;
            this.contents = [];
            this.isModalShow = false;
            this.height = this.getHeight();
            this.recentDay = typeof recentDay === 'number' ? recentDay : defaultRecentDay;
            // this.adaptationIsHighly()
        }
        return TxcChangeLog;
    }());

    return TxcChangeLog;

})();
