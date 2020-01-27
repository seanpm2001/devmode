/*!
 * @project        Example Project
 * @name           vuetyper.cc04e33659406f0d661e.js
 * @author         Andrew Welch
 * @build          Mon, Jan 27, 2020 5:21 AM ET
 * @copyright      Copyright (c) 2020 Example Company, Inc.
 *
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{92:function(t,e,n){
/*!
 * vue-typer v1.2.0
 * Copyright 2016-2017 Chris Nguyen
 * Released under the MIT license.
 */
t.exports=function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=13)}([function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){t.exports=!n(4)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(1),i=n(0),o=n(30),u=n(34),a=function(t,e,n){var s,c,f,l=t&a.F,p=t&a.G,d=t&a.S,h=t&a.P,v=t&a.B,y=t&a.W,x=p?i:i[e]||(i[e]={}),m=x.prototype,g=p?r:d?r[e]:(r[e]||{}).prototype;for(s in p&&(n=e),n)(c=!l&&g&&void 0!==g[s])&&s in x||(f=c?g[s]:n[s],x[s]=p&&"function"!=typeof g[s]?n[s]:v&&c?o(f,r):y&&g[s]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):h&&"function"==typeof f?o(Function.call,f):f,h&&((x.virtual||(x.virtual={}))[s]=f,t&a.R&&m&&!m[s]&&u(m,s,f)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var u=e[i];"number"==typeof u[0]&&r[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="("+u[2]+") and ("+n+")"),t.push(u))}},t}},function(t,e){t.exports=function(t,e,n,r){var i,o=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(i=t,o=t.default);var a="function"==typeof o?o.options:o;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),n&&(a._scopeId=n),r){var s=a.computed||(a.computed={});Object.keys(r).forEach((function(t){var e=r[t];s[t]=function(){return e}}))}return{esModule:i,exports:o,options:a}}},function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=f[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(o(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var u=[];for(i=0;i<n.parts.length;i++)u.push(o(n.parts[i]));f[n.id]={id:n.id,refs:1,parts:u}}}}function i(){var t=document.createElement("style");return t.type="text/css",l.appendChild(t),t}function o(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(h)return v;r.parentNode.removeChild(r)}if(y){var o=d++;r=p||(p=i()),e=u.bind(null,r,o,!1),n=u.bind(null,r,o,!0)}else r=i(),e=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function u(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,i);else{var o=document.createTextNode(i),u=t.childNodes;u[e]&&t.removeChild(u[e]),u.length?t.insertBefore(o,u[e]):t.appendChild(o)}}function a(t,e){var n=e.css,r=e.media,i=e.sourceMap;if(r&&t.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var s="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!s)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(64),f={},l=s&&(document.head||document.getElementsByTagName("head")[0]),p=null,d=0,h=!1,v=function(){},y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){h=n;var i=c(t,e);return r(i),function(e){for(var n=[],o=0;o<i.length;o++){var u=i[o];(a=f[u.id]).refs--,n.push(a)}for(e?r(i=c(t,e)):i=[],o=0;o<n.length;o++){var a;if(0===(a=n[o]).refs){for(var s=0;s<a.parts.length;s++)a.parts[s]();delete f[a.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(36),i=n(9);t.exports=function(t){return r(i(t))}},function(t,e,n){n(63);var r=n(7)(n(19),n(60),"data-v-c41bac74",null);t.exports=r.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.VueTyper=void 0;var r=function(t){return t&&t.__esModule?t:{default:t}}(n(12));e.VueTyper=r.default,e.default={install:function(t){t.component("vue-typer",r.default)}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t){return"number"==typeof t&&!(0,u.default)(t)&&(0,o.default)(t)}Object.defineProperty(e,"__esModule",{value:!0});var o=r(n(20)),u=r(n(21));e.default=function(t,e){return function(t,e){return i(t)&&i(e)&&t<=e}(t,e)?(t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t):-1}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(!Array.isArray(t)||!Array.isArray(e))return!1;if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}},function(t,e,n){"use strict";function r(t,e,n){if(e!==n){var r=t[e];t[e]=t[n],t[n]=r}}Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){return t&&t.__esModule?t:{default:t}}(n(14));e.default=function(t){if(t instanceof Array)for(var e=t.length-1;e>0;e--)r(t,e,(0,i.default)(0,e))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{animation:{type:String,default:"blink",validator:function(t){return/^solid$|^blink$|^smooth$|^phase$|^expand$/.test(t)}}},computed:{animationClass:function(){return"vue-typer-caret-"+this.animation}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{val:{type:String,default:""}},computed:{classes:function(){return{newline:0===this.val.indexOf("\n")}}}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(n(22)),o=r(n(56)),u=r(n(57)),a=r(n(15)),s=r(n(16)),c=r(n(55)),f="idle",l="typing",p="erasing",d="complete",h={BACKSPACE:"backspace",SELECT_BACK:"select-back",SELECT_ALL:"select-all",CLEAR:"clear"};e.default={name:"VueTyper",components:{Caret:o.default,Char:u.default},props:{text:{type:[String,Array],required:!0,validator:function(t){return"string"==typeof t?t.length>0:t.every((function(t){return"string"==typeof t&&t.length>0}))}},repeat:{type:Number,default:1/0,validator:function(t){return t>=0}},shuffle:{type:Boolean,default:!1},initialAction:{type:String,default:l,validator:function(t){return!!t.match("^"+l+"|"+p+"$")}},preTypeDelay:{type:Number,default:70,validator:function(t){return t>=0}},typeDelay:{type:Number,default:70,validator:function(t){return t>=0}},preEraseDelay:{type:Number,default:2e3,validator:function(t){return t>=0}},eraseDelay:{type:Number,default:250,validator:function(t){return t>=0}},eraseStyle:{type:String,default:h.SELECT_ALL,validator:function(t){return(0,i.default)(h).some((function(e){return h[e]===t}))}},eraseOnComplete:{type:Boolean,default:!1},caretAnimation:String},data:function(){return{state:f,nextState:null,spool:[],spoolIndex:-1,previousTextIndex:-1,currentTextIndex:-1,repeatCounter:0,actionTimeout:0,actionInterval:0}},computed:{caretClasses:function(){var t=this.state===f;return{idle:t,"pre-type":t&&this.nextState===l,"pre-erase":t&&this.nextState===p,typing:this.state===l,selecting:this.state===p&&this.isSelectionBasedEraseStyle,erasing:this.state===p&&!this.isSelectionBasedEraseStyle,complete:this.state===d}},rightCharClasses:function(){return{selected:this.state===p&&this.isSelectionBasedEraseStyle,erased:this.state!==p||this.state===p&&!this.isSelectionBasedEraseStyle}},isSelectionBasedEraseStyle:function(){return!!this.eraseStyle.match("^"+h.SELECT_BACK+"|"+h.SELECT_ALL+"$")},isEraseAllStyle:function(){return!!this.eraseStyle.match("^"+h.CLEAR+"|"+h.SELECT_ALL+"$")},isDoneTyping:function(){return this.currentTextIndex>=this.currentTextLength},isDoneErasing:function(){return this.isSelectionBasedEraseStyle?this.currentTextIndex<=0&&this.previousTextIndex<=0:this.currentTextIndex<=0},onLastWord:function(){return this.spoolIndex===this.spool.length-1},shouldRepeat:function(){return this.repeatCounter<this.repeat},currentText:function(){return this.spoolIndex>=0&&this.spoolIndex<this.spool.length?this.spool[this.spoolIndex]:""},currentTextArray:function(){return(0,c.default)(this.currentText,"")},currentTextLength:function(){return this.currentTextArray.length},numLeftChars:function(){return this.currentTextIndex<0?0:this.currentTextIndex},numRightChars:function(){return this.currentTextLength-this.numLeftChars}},mounted:function(){this.init()},beforeDestroy:function(){this.cancelCurrentAction()},methods:{init:function(){if("string"==typeof this.text)this.spool=[this.text];else{var t=this.text.slice();t=t.filter((function(t){return t.length>0})),this.spool=t}this.repeatCounter=0,this.resetSpool(),this.initialAction===l?this.startTyping():this.initialAction===p&&(this.moveCaretToEnd(),this.onTyped())},reset:function(){this.cancelCurrentAction(),this.init()},resetSpool:function(){this.spoolIndex=0,this.shuffle&&this.spool.length>1&&(0,s.default)(this.spool)},cancelCurrentAction:function(){this.actionInterval&&(clearInterval(this.actionInterval),this.actionInterval=0),this.actionTimeout&&(clearTimeout(this.actionTimeout),this.actionTimeout=0)},shiftCaret:function(t){this.previousTextIndex=this.currentTextIndex;var e=this.currentTextIndex+t;this.currentTextIndex=Math.min(Math.max(e,0),this.currentTextLength)},moveCaretToStart:function(){this.previousTextIndex=this.currentTextIndex,this.currentTextIndex=0},moveCaretToEnd:function(){this.previousTextIndex=this.currentTextIndex,this.currentTextIndex=this.currentTextLength},typeStep:function(){if(!this.isDoneTyping){this.shiftCaret(1);var t=this.previousTextIndex,e=this.currentTextArray[t];this.$emit("typed-char",e,t)}this.isDoneTyping&&(this.cancelCurrentAction(),this.$nextTick(this.onTyped))},eraseStep:function(){this.isDoneErasing||(this.isEraseAllStyle?this.moveCaretToStart():this.shiftCaret(-1)),this.isDoneErasing&&(this.cancelCurrentAction(),this.$nextTick(this.onErased))},startTyping:function(){var t=this;this.actionTimeout||this.actionInterval||(this.moveCaretToStart(),this.state=f,this.nextState=l,this.actionTimeout=setTimeout((function(){t.state=l,t.typeStep(),t.isDoneTyping||(t.actionInterval=setInterval(t.typeStep,t.typeDelay))}),this.preTypeDelay))},startErasing:function(){var t=this;this.actionTimeout||this.actionInterval||(this.moveCaretToEnd(),this.state=f,this.nextState=p,this.actionTimeout=setTimeout((function(){t.state=p,t.eraseStep(),t.isDoneErasing||(t.actionInterval=setInterval(t.eraseStep,t.eraseDelay))}),this.preEraseDelay))},onTyped:function(){this.$emit("typed",this.currentText),this.onLastWord?this.eraseOnComplete||this.shouldRepeat?this.startErasing():this.onComplete():this.startErasing()},onErased:function(){this.$emit("erased",this.currentText),this.onLastWord?this.shouldRepeat?(this.repeatCounter++,this.resetSpool(),this.startTyping()):this.onComplete():(this.spoolIndex++,this.startTyping())},onComplete:function(){this.state=d,this.nextState=null,this.$emit("completed")}},watch:{text:function(t,e){t===e||(0,a.default)(t,e)||this.reset()},repeat:function(){this.reset()},shuffle:function(){this.reset()}}}},function(t,e,n){t.exports={default:n(23),__esModule:!0}},function(t,e,n){t.exports={default:n(24),__esModule:!0}},function(t,e,n){t.exports={default:n(25),__esModule:!0}},function(t,e,n){n(49),t.exports=n(0).Number.isFinite},function(t,e,n){n(50),t.exports=n(0).Number.isNaN},function(t,e,n){n(51),t.exports=n(0).Object.keys},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(5);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(11),i=n(45),o=n(44);t.exports=function(t){return function(e,n,u){var a,s=r(e),c=i(s.length),f=o(u,c);if(t&&n!=n){for(;c>f;)if((a=s[f++])!=a)return!0}else for(;c>f;f++)if((t||f in s)&&s[f]===n)return t||f||0;return!t&&-1}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(26);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(5),i=n(1).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(37),i=n(41);t.exports=n(2)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports=!n(2)&&!n(4)((function(){return 7!=Object.defineProperty(n(31)("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(29);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(27),i=n(35),o=n(47),u=Object.defineProperty;e.f=n(2)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(33),i=n(11),o=n(28)(!1),u=n(42)("IE_PROTO");t.exports=function(t,e){var n,a=i(t),s=0,c=[];for(n in a)n!=u&&r(a,n)&&c.push(n);for(;e.length>s;)r(a,n=e[s++])&&(~o(c,n)||c.push(n));return c}},function(t,e,n){var r=n(38),i=n(32);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e,n){var r=n(3),i=n(0),o=n(4);t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],u={};u[t]=e(n),r(r.S+r.F*o((function(){n(1)})),"Object",u)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(43)("keys"),i=n(48);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,e,n){var r=n(1),i=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e,n){var r=n(10),i=Math.max,o=Math.min;t.exports=function(t,e){return(t=r(t))<0?i(t+e,0):o(t,e)}},function(t,e,n){var r=n(10),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e,n){var r=n(9);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(5);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(3),i=n(1).isFinite;r(r.S,"Number",{isFinite:function(t){return"number"==typeof t&&i(t)}})},function(t,e,n){var r=n(3);r(r.S,"Number",{isNaN:function(t){return t!=t}})},function(t,e,n){var r=n(46),i=n(39);n(40)("keys",(function(){return function(t){return i(r(t))}}))},function(t,e,n){(t.exports=n(6)()).push([t.i,".char[data-v-302772ec]{display:inline-block;white-space:pre-wrap}.newline[data-v-302772ec]{display:inline}.typed[data-v-302772ec]{color:#000;background-color:transparent}.selected[data-v-302772ec]{color:#000;background-color:#accef7}.erased[data-v-302772ec]{display:none}",""])},function(t,e,n){(t.exports=n(6)()).push([t.i,'@keyframes vue-typer-caret-blink{50%{opacity:0}to{opacity:1}}@keyframes vue-typer-caret-smooth{0%,20%{opacity:1}60%,to{opacity:0}}@keyframes vue-typer-caret-phase{0%,20%{opacity:1}90%,to{opacity:0}}@keyframes vue-typer-caret-expand{0%,20%{transform:scaleY(1)}80%,to{transform:scaleY(0)}}.vue-typer-caret-blink[data-v-a16e0f02]{animation:vue-typer-caret-blink 1s step-start 0s infinite}.vue-typer-caret-smooth[data-v-a16e0f02]{animation:vue-typer-caret-smooth .5s ease-in-out 0s infinite alternate}.vue-typer-caret-phase[data-v-a16e0f02]{animation:vue-typer-caret-phase .5s ease-in-out 0s infinite alternate}.vue-typer-caret-expand[data-v-a16e0f02]{animation:vue-typer-caret-expand .5s ease-in-out 0s infinite alternate}span.caret[data-v-a16e0f02]:empty:before{content:"\\200B"}span[data-v-a16e0f02]{display:inline-block;width:1px}.idle[data-v-a16e0f02],.typing[data-v-a16e0f02]{background-color:#000}.selecting[data-v-a16e0f02]{display:none;background-color:#000}.erasing[data-v-a16e0f02]{background-color:#000}.complete[data-v-a16e0f02]{display:none;background-color:#000}',""])},function(t,e,n){(t.exports=n(6)()).push([t.i,"span.vue-typer[data-v-c41bac74]{cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}span.vue-typer span.left[data-v-c41bac74],span.vue-typer span.right[data-v-c41bac74]{display:inline}",""])},function(t,e,n){(function(t,n){function r(t){return E.test(t)}function i(t){return r(t)?function(t){return t.match(_)||[]}(t):function(t){return t.split("")}(t)}function o(t){if("string"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&P.call(t)==v}(t))return B?B.call(t):"";var e=t+"";return"0"==e&&1/t==-c?"-0":e}function u(t,e,n){var r=t.length;return n=void 0===n?r:n,!e&&n>=r?t:function(t,e,n){var r=-1,i=t.length;e<0&&(e=-e>i?0:i+e),(n=n>i?i:n)<0&&(n+=i),i=e>n?0:n-e>>>0,e>>>=0;for(var o=Array(i);++r<i;)o[r]=t[r+e];return o}(t,e,n)}function a(t,e,n){if(!s(n))return!1;var r=typeof e;return!!("number"==r?function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=f}(t.length)&&!function(t){var e=s(t)?P.call(t):"";return e==p||e==d}(t)}(n)&&function(t,e){return!!(e=null==e?f:e)&&("number"==typeof t||y.test(t))&&t>-1&&t%1==0&&t<e}(e,n.length):"string"==r&&e in n)&&function(t,e){return t===e||t!=t&&e!=e}(n[e],t)}function s(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}var c=1/0,f=9007199254740991,l=4294967295,p="[object Function]",d="[object GeneratorFunction]",h="[object RegExp]",v="[object Symbol]",y=/^(?:0|[1-9]\d*)$/,x="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",m="\\ud83c[\\udffb-\\udfff]",g="(?:\\ud83c[\\udde6-\\uddff]){2}",b="[\\ud800-\\udbff][\\udc00-\\udfff]",T="(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?",S="[\\ufe0e\\ufe0f]?"+T+"(?:\\u200d(?:"+["[^\\ud800-\\udfff]",g,b].join("|")+")[\\ufe0e\\ufe0f]?"+T+")*",C="(?:"+["[^\\ud800-\\udfff]"+x+"?",x,g,b,"[\\ud800-\\udfff]"].join("|")+")",_=RegExp(m+"(?="+m+")|"+C+S,"g"),E=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),j="object"==typeof t&&t&&t.Object===Object&&t,w="object"==typeof self&&self&&self.Object===Object&&self,I=j||w||Function("return this")(),O="object"==typeof e&&e&&!e.nodeType&&e,A=O&&"object"==typeof n&&n&&!n.nodeType&&n,M=A&&A.exports===O&&j.process,k=function(){try{return M&&M.binding("util")}catch(t){}}(),L=k&&k.isRegExp,P=Object.prototype.toString,N=I.Symbol,R=N?N.prototype:void 0,B=R?R.toString:void 0,D=L?function(t){return function(e){return t(e)}}(L):function(t){return s(t)&&P.call(t)==h};n.exports=function(t,e,n){return n&&"number"!=typeof n&&a(t,e,n)&&(e=n=void 0),(n=void 0===n?l:n>>>0)?(t=function(t){return null==t?"":o(t)}(t))&&("string"==typeof e||null!=e&&!D(e))&&!(e=o(e))&&r(t)?u(i(t),0,n):t.split(e,n):[]}}).call(e,n(65),n(66)(t))},function(t,e,n){n(62);var r=n(7)(n(17),n(59),"data-v-a16e0f02",null);t.exports=r.exports},function(t,e,n){n(61);var r=n(7)(n(18),n(58),"data-v-302772ec",null);t.exports=r.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"char",class:t.classes},[t._v(t._s(t.val))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"caret custom",class:t.animationClass})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"vue-typer"},[n("span",{staticClass:"left"},t._l(t.numLeftChars,(function(e){return n("char",{staticClass:"custom typed",attrs:{val:t.currentTextArray[e-1]}})}))),n("caret",{class:t.caretClasses,attrs:{animation:t.caretAnimation}}),n("span",{staticClass:"right"},t._l(t.numRightChars,(function(e){return n("char",{staticClass:"custom",class:t.rightCharClasses,attrs:{val:t.currentTextArray[t.numLeftChars+e-1]}})})))],1)},staticRenderFns:[]}},function(t,e,n){var r=n(52);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals),n(8)("3bfdc45b",r,!0)},function(t,e,n){var r=n(53);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals),n(8)("0dba035c",r,!0)},function(t,e,n){var r=n(54);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals),n(8)("0f4cea8e",r,!0)},function(t,e){t.exports=function(t,e){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],u=o[0],a={id:t+":"+i,css:o[1],media:o[2],sourceMap:o[3]};r[u]?r[u].parts.push(a):n.push(r[u]={id:u,parts:[a]})}return n}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}}])}}]);
//# sourceMappingURL=vuetyper.cc04e33659406f0d661e.js.map