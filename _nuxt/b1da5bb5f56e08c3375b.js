(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{143:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",function(){return r})},144:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",function(){return r})},145:function(e,t,n){"use strict";var r=n(17);function o(e,t){return!t||"object"!==Object(r.a)(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}n.d(t,"a",function(){return o})},146:function(e,t,n){"use strict";function r(e,p){return(r=Object.setPrototypeOf||function(e,p){return e.__proto__=p,e})(e,p)}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",function(){return o})},147:function(e,t,n){"use strict";var r=n(1),o="undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys;function c(e,t,n){(n?Reflect.getOwnMetadataKeys(t,n):Reflect.getOwnMetadataKeys(t)).forEach(function(r){var o=n?Reflect.getOwnMetadata(r,t,n):Reflect.getOwnMetadata(r,t);n?Reflect.defineMetadata(r,o,e,n):Reflect.defineMetadata(r,o,e)})}var l={__proto__:[]}instanceof Array;var f=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function d(e,t){void 0===t&&(t={}),t.name=t.name||e._componentTag||e.name;var n=e.prototype;Object.getOwnPropertyNames(n).forEach(function(e){if("constructor"!==e)if(f.indexOf(e)>-1)t[e]=n[e];else{var r=Object.getOwnPropertyDescriptor(n,e);void 0!==r.value?"function"==typeof r.value?(t.methods||(t.methods={}))[e]=r.value:(t.mixins||(t.mixins=[])).push({data:function(){var t;return(t={})[e]=r.value,t}}):(r.get||r.set)&&((t.computed||(t.computed={}))[e]={get:r.get,set:r.set})}}),(t.mixins||(t.mixins=[])).push({data:function(){return function(e,t){var n=t.prototype._init;t.prototype._init=function(){var t=this,n=Object.getOwnPropertyNames(e);if(e.$options.props)for(var r in e.$options.props)e.hasOwnProperty(r)||n.push(r);n.forEach(function(n){"_"!==n.charAt(0)&&Object.defineProperty(t,n,{get:function(){return e[n]},set:function(t){e[n]=t},configurable:!0})})};var data=new t;t.prototype._init=n;var r={};return Object.keys(data).forEach(function(e){void 0!==data[e]&&(r[e]=data[e])}),r}(this,e)}});var d=e.__decorators__;d&&(d.forEach(function(e){return e(t)}),delete e.__decorators__);var h,v,x=Object.getPrototypeOf(e.prototype),y=x instanceof r.a?x.constructor:r.a,w=y.extend(t);return function(e,t,n){Object.getOwnPropertyNames(t).forEach(function(r){if(!m[r]){var o=Object.getOwnPropertyDescriptor(e,r);if(!o||o.configurable){var c,f,d=Object.getOwnPropertyDescriptor(t,r);if(!l){if("cid"===r)return;var h=Object.getOwnPropertyDescriptor(n,r);if(c=d.value,f=typeof c,null!=c&&("object"===f||"function"===f)&&h&&h.value===d.value)return}0,Object.defineProperty(e,r,d)}}})}(w,e,y),o&&(c(h=w,v=e),Object.getOwnPropertyNames(v.prototype).forEach(function(e){c(h.prototype,v.prototype,e)}),Object.getOwnPropertyNames(v).forEach(function(e){c(h,v,e)})),w}var m={prototype:!0,arguments:!0,callee:!0,caller:!0};function h(e){return"function"==typeof e?d(e):function(t){return d(t,e)}}h.registerHooks=function(e){f.push.apply(f,e)};var v=h;n.d(t,"a",function(){return v});"undefined"!=typeof Reflect&&Reflect.getMetadata},148:function(e,t,n){var content=n(152);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(65).default)("44826512",content,!0,{sourceMap:!1})},149:function(e,t,n){var content=n(154);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(65).default)("730e73d2",content,!0,{sourceMap:!1})},151:function(e,t,n){"use strict";var r=n(148);n.n(r).a},152:function(e,t,n){(e.exports=n(64)(!1)).push([e.i,".logo[data-v-0e40e6d0]{width:1.7rem;margin-top:-.2rem;margin-right:.2rem;vertical-align:middle}.ibm-research[data-v-0e40e6d0]{position:fixed;left:5%;z-index:101}.ibm-research a[data-v-0e40e6d0]{margin:0;padding-top:.2rem;display:inline-block;border-top:4px solid #000;font-size:1.7rem;color:#000}nav[data-v-0e40e6d0]{justify-content:center;width:100%;position:fixed;top:0;z-index:100;box-shadow:0 0 16px #2b2b2b;background-color:#fff;min-height:63px}nav[data-v-0e40e6d0],nav ul[data-v-0e40e6d0]{display:flex;flex-wrap:wrap}nav ul[data-v-0e40e6d0]{margin:0;justify-content:flex-end;align-items:center}nav li[data-v-0e40e6d0],nav ul[data-v-0e40e6d0]{height:100%;list-style:none}nav li[data-v-0e40e6d0]{font-weight:700;text-indent:0;margin:0 .8rem;line-height:3.5rem;cursor:pointer}nav li:hover a[data-v-0e40e6d0]{opacity:.6;border-bottom:2px solid #0a1d8f}nav li.active:hover a[data-v-0e40e6d0],nav li.active a[data-v-0e40e6d0]{opacity:.6;border:none}nav li a[data-v-0e40e6d0]{color:#000}.convertible-menu[data-v-0e40e6d0]{display:block;position:relative;align-self:center;width:100%;z-index:1}.convertible-menu .hamburger[data-v-0e40e6d0]{display:none;margin-left:calc(100% - 40px - 1rem)}.convertible-menu input[data-v-0e40e6d0]{display:block;width:40px;height:32px;position:absolute;top:-7px;left:-5px;cursor:pointer;opacity:0;z-index:2}.convertible-menu span[data-v-0e40e6d0]{display:block;width:33px;height:4px;margin-bottom:5px;border-radius:3px;position:relative;z-index:1;background-color:#cdcdcd;transform-origin:4px 0;transition:transform .5s cubic-bezier(.77,.2,.05,1),background .5s cubic-bezier(.77,.2,.05,1),opacity .55s ease}.convertible-menu input:checked~span[data-v-0e40e6d0]{opacity:1;transform:rotate(45deg) translateY(-1px);background:#232323}.convertible-menu input:checked~span[data-v-0e40e6d0]:nth-last-child(3){opacity:0;transform:rotate(0deg) scale(.2)}.convertible-menu input:checked~span[data-v-0e40e6d0]:nth-last-child(2){opacity:1;transform:rotate(-45deg) translate(-1px,-2px);background:#232323}@media (max-width:800px){.convertible-menu .hamburger[data-v-0e40e6d0]{display:block}.convertible-menu ul[data-v-0e40e6d0]{text-align:right;width:100vw;position:absolute;background-color:#fff;display:block;height:auto;border-bottom:1px solid #0a1d8f;transition:transform .5s cubic-bezier(.77,.2,.05,1);transform:translateX(100%)}.convertible-menu input:checked~ul[data-v-0e40e6d0]{transform:translateX(0)}.convertible-menu ul li[data-v-0e40e6d0]{padding-right:2.5%}.id-stub[data-v-0e40e6d0]{top:-380px}}",""])},153:function(e,t,n){"use strict";var r=n(149);n.n(r).a},154:function(e,t,n){(e.exports=n(64)(!1)).push([e.i,"footer[data-v-32122a48]{color:#fff;display:flex;flex-direction:column;justify-content:center;min-height:10rem;text-align:center;margin-top:4rem;background-color:var(--dark-color)}",""])},156:function(e,t,n){"use strict";n(151);var r=n(35),component=Object(r.a)({},function(){var e=this.$createElement,t=this._self._c||e;return t("nav",[this._m(0),this._v(" "),t("div",{staticClass:"convertible-menu"},[t("input",{staticClass:"hamburger",attrs:{type:"checkbox"}}),this._v(" "),t("span",{staticClass:"hamburger"}),this._v(" "),t("span",{staticClass:"hamburger"}),this._v(" "),t("span",{staticClass:"hamburger"}),this._v(" "),t("ul",[this._t("default")],2)])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"ibm-research"},[t("a",{staticClass:"text-logo",attrs:{href:"https://qiskit.org",target:"_blank",rel:"noopener"}},[t("img",{staticClass:"logo",attrs:{alt:"Qiskit logo",src:"https://qiskit.camp/img/qiskit-logo.png"}}),this._v(" Qiskit")])])}],!1,null,"0e40e6d0",null);t.a=component.exports},157:function(e,t,n){"use strict";n(153);var r=n(35),component=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this.$createElement,t=this._self._c||e;return t("footer",[t("p",[this._v("Copyright IBM Corp. 2018-2019")])])}],!1,null,"32122a48",null);t.a=component.exports},177:function(e,t,n){var content=n(203);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(65).default)("095870bb",content,!0,{sourceMap:!1})},201:function(e,t,n){var map={"./africa.md":[162,2],"./asia.md":[163,3],"./europe.md":[164,4],"./index/qiskit-camp-africa.md":[165,5],"./index/qiskit-camp-asia.md":[166,6],"./index/qiskit-camp-europe.md":[167,7],"./index/qiskit-camp.md":[168,8],"./index/qiskit-hackathon-haifa.md":[169,9],"./index/qiskit-hackathon-madrid.md":[170,10],"./index/toc.md":[155,0]};function r(e){if(!n.o(map,e))return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=map[e],r=t[0];return n.e(t[1]).then(function(){return n.t(r,7)})}r.keys=function(){return Object.keys(map)},r.id=201,e.exports=r},202:function(e,t,n){"use strict";var r=n(177);n.n(r).a},203:function(e,t,n){(e.exports=n(64)(!1)).push([e.i,'@font-face{font-family:IBM Plex Mono;font-style:normal;font-weight:400;src:local("IBM Plex Mono"),local("IBMPlexMono"),url(/fonts/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-Regular.woff) format("woff")}@font-face{font-family:IBM Plex Mono;font-style:italic;font-weight:400;src:local("IBM Plex Mono Italic"),local("IBMPlexMono-Italic"),url(/fonts/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-Italic.woff) format("woff")}@font-face{font-family:IBM Plex Sans;font-style:normal;font-weight:400;src:local("IBM Plex Sans"),local("IBMPlexSans"),url(/fonts/IBM-Plex-Sans/fonts/complete/woff/IBMPlexSans-Regular.woff) format("woff")}:root{--secondary-color:#8a3ffc;--dark-color:#21252b}*{margin:0;padding:0}ul{margin:1rem 0 1rem 3rem}a{text-decoration:none;color:#4a90e2}a:hover{opacity:.6}html{font-family:IBM Plex Sans,sans-serif;font-size:18px;background-image:url(/images/events/deco/dots.svg),url(/images/events/deco/dots.svg),url(/images/events/deco/dots.svg),url(/images/events/deco/lines.svg),url(/images/events/deco/lines.svg),url(/images/events/deco/lines.svg);background-repeat:repeat-x,repeat-x,repeat-x,repeat-y,repeat-y,repeat-y;background-position:top calc(100vh + 890px) left 0,top calc(100vh + 930px) left 0,top calc(100vh + 970px) left 0,top 0 right 100px,top 0 right 0,top 0 right -100px}h2{margin:2rem 0 2.5rem}header{position:relative;height:100vh;color:#fff;text-align:center;background-size:cover;background-position:50%;background-attachment:fixed;background-color:#673ab7;display:flex;flex-direction:column;justify-content:center;text-shadow:-1px 0 #000,0 1px #000,1px 0 #000,0 -1px #000}@media not all and (min-resolution:.001dpcm){@media{header{background-attachment:scroll}}}header p{margin:.8rem}header .headlines{margin-top:60px}.interest,.sign-up{margin-top:2rem}.sign-up{display:inline-block;font-family:IBM Plex Sans,sans-serif;font-weight:700;color:#fff;text-decoration:none;background-color:transparent;border:1px solid #fff;padding:.7rem 2rem}.scroll-down{margin-top:2rem;position:relative;font-style:italic}.icon-scroll{width:30px;height:53px;margin:0 auto;box-shadow:inset 0 0 0 3px #fff;border-radius:25px}.icon-scroll:before{position:absolute;content:"";width:8px;height:8px;background:#fff;margin-left:-4px;top:8px;border-radius:4px;-webkit-animation:scroll 1.5s infinite;animation:scroll 1.5s infinite}@-webkit-keyframes scroll{0%{opacity:1}to{opacity:0;transform:translateY(46px)}}@keyframes scroll{0%{opacity:1}to{opacity:0;transform:translateY(46px)}}main .cta{border-color:#000}main>:not(h2):not(iframe):not(table){margin-left:10%;margin-right:1.5rem;line-height:1.4rem;margin-bottom:1rem;max-width:30rem}main ul{list-style-type:square;padding-left:2rem;margin-bottom:2rem}main ul li{margin:.5rem 0}main .clarification{font-size:.7rem;line-height:1rem}h2{padding-top:4rem;margin:0 0 2rem;color:#0a1d8f}h2:before{content:"";float:left;width:5%;margin-top:.5rem;margin-right:5%;border-top:1px solid #0a1d8f}.agenda h2{margin-bottom:.5rem}.agenda .location{font-weight:700;padding-left:10%;margin-bottom:3rem}h3{font-weight:700;margin-top:2.5rem;margin-bottom:1rem}.agenda h3{margin-top:0}h3 strong{font-weight:700}table{margin-left:10%}table tr td.time{color:#0a1d8f}table td{text-align:center;padding:1.2rem 1.2rem 1rem 0;border-bottom:1px dotted #0a1d8f}table tr td:first-child{text-align:left}td.multislot{vertical-align:top}.session{margin-bottom:1rem}.author{font-style:italic}@media (max-height:500px){.headlines{font-size:.9em;margin-top:4.4rem;margin-bottom:-6rem}.headlines h1{margin-bottom:0}}@media (max-height:320px){.headlines{font-size:.9em;margin-top:6.5rem;margin-bottom:-7rem}.icon-scroll{display:none}}',""])},214:function(e,t,n){"use strict";n.r(t);var r=n(34),o=(n(50),n(7)),c=n(143),l=n(145),f=n(144),d=n(146),m=n(17),h=n(1),v=n(147),x=n(156),y=n(157),w=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c};var _,k=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),t}(h.a),O=k=w([Object(v.a)({layout:"event",components:{Menu:x.a,Footer:y.a},asyncData:(_=Object(o.a)(regeneratorRuntime.mark(function e(t){var o,c,l,f,d,m;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"!==(o=t.route.params.slug)){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,n(201)("./".concat(o,".md"));case 5:return c=e.sent,h=c.attributes.background,v=void 0,l=["".concat(v="/images/events/headers/").concat(h,"-low-res.jpg"),"".concat(v).concat(h,"-hi-res.jpg")],f=Object(r.a)(l,2),d=f[0],m=f[1],e.abrupt("return",{event:c,uri:{hBackground:m,lBackground:d}});case 8:case"end":return e.stop()}var h,v},e)})),function(e){return _.apply(this,arguments)})})],k),M=(n(202),n(35)),component=Object(M.a)(O,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Menu",e._l(e.event.attributes.nav,function(link){return n("li",{key:link.goTo},[n("nuxt-link",{attrs:{to:link.goTo}},[e._v("\n        "+e._s(link.text)+"\n      ")])],1)}),0),e._v(" "),n("header",{style:{backgroundImage:"url("+e.uri.hBackground+"), url("+e.uri.lBackground+")"}},[n("section",{staticClass:"headlines"},[n("h1",[e._v(e._s(e.event.attributes.title))]),e._v(" "),n("p",[e._v(e._s(e.event.attributes.tagline))]),e._v(" "),n("p",[e._v(e._s(e.event.attributes.dates)),n("br")])]),e._v(" "),e._m(0)]),e._v(" "),n("main",{domProps:{innerHTML:e._s(e.event.html)}}),e._v(" "),n("Footer")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"scroll-down"},[t("div",{staticClass:"icon-scroll"}),this._v(" "),t("p",[this._v("Scroll-down for further info")])])}],!1,null,null,null);t.default=component.exports}}]);