(()=>{var t={757:(t,e,n)=>{t.exports=n(666)},666:t=>{var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new A(r||[]);return i._invoke=function(t,e,n){var r=h;return function(o,i){if(r===f)throw new Error("Generator is already running");if(r===v){if("throw"===o)throw i;return q()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=S(a,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var s=l(t,e,n);if("normal"===s.type){if(r=n.done?v:d,s.arg===p)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=v,n.method="throw",n.arg=s.arg)}}}(t,n,a),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var h="suspendedStart",d="suspendedYield",f="executing",v="completed",p={};function m(){}function y(){}function g(){}var L={};s(L,i,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(O([])));w&&w!==n&&r.call(w,i)&&(L=w);var E=g.prototype=m.prototype=Object.create(L);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function n(o,i,a,c){var s=l(t[o],t,i);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(h).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function S(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,S(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,p;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function M(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(M,this),this.reset(!0)}function O(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:q}}function q(){return{value:e,done:!0}}return y.prototype=g,s(E,"constructor",g),s(g,"constructor",y),y.displayName=s(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},x(k.prototype),s(k.prototype,a,(function(){return this})),t.AsyncIterator=k,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new k(u(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(E),s(E,c,"Generator"),s(E,i,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=O,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;T(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:O(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}var o=function(){function e(n,r){t(this,e),this.linksInternos=document.querySelectorAll(n),this.options=void 0===r?{behavior:"smooth",block:"start"}:r,this.scrollToSection=this.scrollToSection.bind(this)}return r(e,[{key:"scrollToSection",value:function(t){t.preventDefault();var e=t.target.hash;document.querySelector(e).scrollIntoView(this.options)}},{key:"addLinkEvent",value:function(){var t=this;this.linksInternos.forEach((function(e){e.addEventListener("click",t.scrollToSection)}))}},{key:"init",value:function(){return this.linksInternos.length&&this.addLinkEvent(),this}}]),e}(),i=function(){function e(n){t(this,e),this.accordionList=document.querySelectorAll(n),this.activeClass="ativo"}return r(e,[{key:"toggleAccordion",value:function(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}},{key:"addAccordionEvent",value:function(){var t=this;this.accordionList.forEach((function(e){e.addEventListener("click",(function(){return t.toggleAccordion(e)}))}))}},{key:"init",value:function(){return this.accordionList.length&&(this.toggleAccordion(this.accordionList[0]),this.addAccordionEvent()),this}}]),e}(),a=function(){function e(n,r){t(this,e),this.tabMenu=document.querySelectorAll(n),this.tabConteudo=document.querySelectorAll(r)}return r(e,[{key:"activeTab",value:function(t){this.tabConteudo.forEach((function(t){t.classList.contains("ativo")&&t.classList.remove("ativo")})),this.tabConteudo[t].classList.add("ativo")}},{key:"addTabNavEvent",value:function(){var t=this;this.tabMenu.forEach((function(e,n){e.addEventListener("click",(function(){return t.activeTab(n)}))}))}},{key:"init",value:function(){return this.tabMenu.length&&this.tabConteudo.length&&(this.activeTab(0),this.addTabNavEvent()),this}}]),e}(),c=function(){function e(n,r,o){t(this,e),this.openButton=document.querySelector(n),this.closeButton=document.querySelector(r),this.containerModal=document.querySelector(o),this.toggleModalEvent=this.toggleModalEvent.bind(this),this.clickOutside=this.clickOutside.bind(this)}return r(e,[{key:"toggleModal",value:function(){this.containerModal.classList.toggle("ativo")}},{key:"toggleModalEvent",value:function(t){t.preventDefault(),this.toggleModal()}},{key:"clickOutside",value:function(t){t.target===this.containerModal&&this.toggleModal()}},{key:"addModalEvent",value:function(){this.closeButton.addEventListener("click",this.toggleModalEvent),this.openButton.addEventListener("click",this.toggleModalEvent),this.containerModal.addEventListener("click",this.clickOutside)}},{key:"init",value:function(){return this.openButton&&this.closeButton&&this.containerModal&&this.addModalEvent(),this}}]),e}();function s(t,e,n){var r=document.documentElement,o="data-outside";function i(a){t.contains(a.target)||(n(),e.forEach((function(t){r.removeEventListener(t,i)})),t.removeAttribute(o))}t.hasAttribute(o)||(e.forEach((function(t){setTimeout((function(){r.addEventListener(t,i)}))})),t.setAttribute(o,""))}function u(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}function l(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){u(i,r,o,a,c,"next",t)}function c(t){u(i,r,o,a,c,"throw",t)}a(void 0)}))}}var h=n(757),d=n.n(h);function f(){var t,e=document.querySelectorAll("[data-numero]"),n=document.querySelector(".numeros");(t=new MutationObserver((function(n){n[0].target.classList.contains("scroll-change")&&(t.disconnect(),e.forEach((function(t){var e=0,n=+t.innerText,r=Math.floor(n/100),o=setInterval((function(){e+=r,t.innerText=e,e>n&&(t.innerText=n,clearInterval(o))}),25*Math.random())})))}))).observe(n,{attributes:!0})}window.onload=function(){var t,e,n,r,u;new o("[data-anime='menu'] a[href^='#']").init(),new i("[data-faq='accordion'] dt").init(),new a("[data-tab='menu'] li","[data-tab='content'] section").init(),new c('[data-modal ="loging"]','[data-modal ="close"]','[data-modal ="container"]').init(),u=document.querySelectorAll('[data-anima^="show"]'),document.querySelectorAll('[data-tab="menu"] li').forEach((function(t,e){t.addEventListener("click",(function(){!function(t){u.forEach((function(t){t.classList.contains("show-right")?t.classList.remove("show-right"):t.classList.contains("show-down")&&t.classList.remove("show-down")})),u[t].classList.add(u[t].dataset.anima)}(e)}))})),(t=document.querySelectorAll("[data-anime ='scroll']")).length&&(t[0].classList.add("scroll-change"),window.addEventListener("scroll",(function(){var e=.6*window.innerHeight;t.forEach((function(t){t.getBoundingClientRect().top-e<0?t.classList.add("scroll-change"):t.classList.contains("scroll-change")&&t.classList.remove("scroll-change")}))}))),function(){var t=document.querySelectorAll("[data-tooltip]"),e={handleEvent:function(t){this.tooltipBox.style.top="".concat(t.pageY+25,"px"),this.tooltipBox.style.left="".concat(t.pageX+25,"px")}},n={handleEvent:function(){this.tooltipBox.remove(),this.element.removeEventListener("mouseleave",n),this.element.removeEventListener("mousemove",e)}};function r(){var t,r=((t=document.createElement("div")).classList.add("tooltip"),t.innerText=this.getAttribute("aria-label"),document.body.append(t),t);e.tooltipBox=r,this.addEventListener("mousemove",e),n.tooltipBox=r,n.element=this,this.addEventListener("mouseleave",n)}t.forEach((function(t){t.addEventListener("mouseover",r)}))}(),function(){function t(t){var e=this;t.preventDefault(),this.classList.add("visible"),s(this,["click","touchstart"],(function(){e.classList.remove("visible")}))}document.querySelectorAll("[data-dropdown]").forEach((function(e){["click","touchstrat"].forEach((function(n){e.addEventListener(n,t)}))}))}(),function(){var t=document.querySelector('[data-menu="button"]'),e=document.querySelector('[data-menu="list"]'),n=["touchstart","click"];function r(){e.classList.toggle("visible"),t.classList.toggle("visible"),s(e,n,(function(){e.classList.remove("visible"),t.classList.remove("visible")}))}window.innerWidth<=700&&n.forEach((function(e){return t.addEventListener(e,r)}))}(),e=document.querySelector("[data-semana]"),n=e.dataset.semana.split(",").map(Number),r=e.dataset.horario.split(",").map(Number),setInterval((function(){var t=new Date,o=t.getDay(),i=t.getHours(),a=n.includes(o),c=i>=r[0]&&i<r[1];a&&c?e.classList.add("aberto"):!e.classList.contains("aberto")||c||a||e.classList.remove("aberto")}),2e3),function(){var t=document.querySelector(".numeros-grid");function e(t){var e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML="<h3>".concat(t.especie,"</h3> <span data-numero>").concat(t.total,"</span>"),e}function n(){return(n=l(d().mark((function n(r){var o;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,o=fetch(r),n.next=4,o;case 4:return n.next=6,n.sent.json();case 6:n.sent.forEach((function(n){var r=e(n);t.append(r)})),f(),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})))).apply(this,arguments)}!function(t){n.apply(this,arguments)}("./animaisapi.json")}()}})()})();