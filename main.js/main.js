(()=>{var t={757:(t,e,n)=>{t.exports=n(666)},666:t=>{var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new O(r||[]);return i._invoke=function(t,e,n){var r=h;return function(o,i){if(r===f)throw new Error("Generator is already running");if(r===v){if("throw"===o)throw i;return q()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=M(a,n);if(s){if(s===m)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=l(t,e,n);if("normal"===c.type){if(r=n.done?v:d,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=v,n.method="throw",n.arg=c.arg)}}}(t,n,a),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var h="suspendedStart",d="suspendedYield",f="executing",v="completed",m={};function p(){}function y(){}function g(){}var b={};c(b,i,(function(){return this}));var L=Object.getPrototypeOf,w=L&&L(L(A([])));w&&w!==n&&r.call(w,i)&&(b=w);var E=g.prototype=p.prototype=Object.create(b);function k(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function n(o,i,a,s){var c=l(t[o],t,i);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(h).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,s)}))}s(c.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function M(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,M(t,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,m;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,m):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function A(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:q}}function q(){return{value:e,done:!0}}return y.prototype=g,c(E,"constructor",g),c(g,"constructor",y),y.displayName=c(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,s,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},k(x.prototype),c(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new x(u(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(E),c(E,s,"Generator"),c(E,i,(function(){return this})),c(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=A,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return s.type="throw",s.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:A(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}var o=function(){function e(n,r){t(this,e),this.linksInternos=document.querySelectorAll(n),this.options=void 0===r?{behavior:"smooth",block:"start"}:r,this.scrollToSection=this.scrollToSection.bind(this)}return r(e,[{key:"scrollToSection",value:function(t){t.preventDefault();var e=t.target.hash;document.querySelector(e).scrollIntoView(this.options)}},{key:"addLinkEvent",value:function(){var t=this;this.linksInternos.forEach((function(e){e.addEventListener("click",t.scrollToSection)}))}},{key:"init",value:function(){return this.linksInternos.length&&this.addLinkEvent(),this}}]),e}(),i=function(){function e(n){t(this,e),this.accordionList=document.querySelectorAll(n),this.activeClass="ativo"}return r(e,[{key:"toggleAccordion",value:function(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}},{key:"addAccordionEvent",value:function(){var t=this;this.accordionList.forEach((function(e){e.addEventListener("click",(function(){return t.toggleAccordion(e)}))}))}},{key:"init",value:function(){return this.accordionList.length&&(this.toggleAccordion(this.accordionList[0]),this.addAccordionEvent()),this}}]),e}(),a=function(){function e(n,r){t(this,e),this.tabMenu=document.querySelectorAll(n),this.tabConteudo=document.querySelectorAll(r)}return r(e,[{key:"activeTab",value:function(t){this.tabConteudo.forEach((function(t){t.classList.contains("ativo")&&t.classList.remove("ativo")})),this.tabConteudo[t].classList.add("ativo")}},{key:"addTabNavEvent",value:function(){var t=this;this.tabMenu.forEach((function(e,n){e.addEventListener("click",(function(){return t.activeTab(n)}))}))}},{key:"init",value:function(){return this.tabMenu.length&&this.tabConteudo.length&&(this.activeTab(0),this.addTabNavEvent()),this}}]),e}(),s=function(){function e(n,r,o){t(this,e),this.openButton=document.querySelector(n),this.closeButton=document.querySelector(r),this.containerModal=document.querySelector(o),this.toggleModalEvent=this.toggleModalEvent.bind(this),this.clickOutside=this.clickOutside.bind(this)}return r(e,[{key:"toggleModal",value:function(){this.containerModal.classList.toggle("ativo")}},{key:"toggleModalEvent",value:function(t){t.preventDefault(),this.toggleModal()}},{key:"clickOutside",value:function(t){t.target===this.containerModal&&this.toggleModal()}},{key:"addModalEvent",value:function(){this.closeButton.addEventListener("click",this.toggleModalEvent),this.openButton.addEventListener("click",this.toggleModalEvent),this.containerModal.addEventListener("click",this.clickOutside)}},{key:"init",value:function(){return this.openButton&&this.closeButton&&this.containerModal&&this.addModalEvent(),this}}]),e}(),c=function(){function e(n){t(this,e),this.tooltips=document.querySelectorAll(n),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}return r(e,[{key:"creatElement",value:function(t){var e=document.createElement("div");e.classList.add("tooltip"),e.innerText=t.getAttribute("aria-label"),document.body.append(e),this.tooltipBox=e}},{key:"onMouseMove",value:function(t){this.tooltipBox.style.top="".concat(t.pageY+25,"px"),t.pageX+255>window.innerWidth?this.tooltipBox.style.left="".concat(t.pageX-189,"px"):this.tooltipBox.style.left="".concat(t.pageX+25,"px")}},{key:"onMouseLeave",value:function(){this.tooltipBox.remove(),this.element.removeEventListener("mouseleave",this.onMouseLeave),this.element.removeEventListener("mousemove",this.onMouseMove)}},{key:"onMouseOver",value:function(t){this.creatElement(t.currentTarget),t.currentTarget.addEventListener("mousemove",this.onMouseMove),this.element=t.currentTarget,t.currentTarget.addEventListener("mouseleave",this.onMouseLeave)}},{key:"addTooltipEvent",value:function(){var t=this;this.tooltips.forEach((function(e){e.addEventListener("mouseover",t.onMouseOver)}))}},{key:"init",value:function(){return this.tooltips.length&&this.addTooltipEvent(),this}}]),e}();function u(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}function l(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){u(i,r,o,a,s,"next",t)}function s(t){u(i,r,o,a,s,"throw",t)}a(void 0)}))}}var h=n(757),d=n.n(h),f=function(){function e(n,r,o){t(this,e),this.animalsNumber=document.querySelectorAll(n),this.observerClass=r,this.observeTarget=document.querySelector(o),this.animaNumber=this.animaNumber.bind(this)}return r(e,[{key:"animation",value:function(){var t=this;this.animalsNumber.forEach((function(e){t.constructor.numberIncrement(e)}))}},{key:"animaNumber",value:function(t){t[0].target.classList.contains(this.observerClass)&&(this.observer.disconnect(),this.animation())}},{key:"addObserverMutation",value:function(){this.observer=new MutationObserver(this.animaNumber),this.observer.observe(this.observeTarget,{attributes:!0})}},{key:"init",value:function(){return this.animalsNumber.length&&this.observeTarget&&this.observerClass&&this.addObserverMutation(),this}}],[{key:"numberIncrement",value:function(t){var e=0,n=+t.innerText,r=Math.floor(n/100),o=setInterval((function(){e+=r,t.innerText=e,e>n&&(t.innerText=n,clearInterval(o))}),25*Math.random())}}]),e}();function v(t,e,n){var r=document.documentElement,o="data-outside";function i(a){t.contains(a.target)||(n(),e.forEach((function(t){r.removeEventListener(t,i)})),t.removeAttribute(o))}t.hasAttribute(o)||(e.forEach((function(t){setTimeout((function(){r.addEventListener(t,i)}))})),t.setAttribute(o,""))}window.onload=function(){var t,e,n,r,u;new o("[data-anime='menu'] a[href^='#']").init(),new i("[data-faq='accordion'] dt").init(),new a("[data-tab='menu'] li","[data-tab='content'] section").init(),new s('[data-modal ="loging"]','[data-modal ="close"]','[data-modal ="container"]').init(),new c("[data-tooltip]").init(),function(t,e){var n=document.querySelector(".numeros-grid");function r(t){var r=function(t){var n=document.createElement("div");return n.classList.add(e),n.innerHTML="<h3>".concat(t.especie,"</h3> <span data-numero>").concat(t.total,"</span>"),n}(t);n.append(r)}function o(){new f("[data-numero]","scroll-change",".numeros").init()}function i(){return(i=l(d().mark((function e(){var n;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=fetch(t),e.next=4,n;case 4:return e.next=6,e.sent.json();case 6:e.sent.forEach((function(t){return r(t)})),o(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}(function(){i.apply(this,arguments)})()}("./animaisapi.json","numero-animal"),u=document.querySelectorAll('[data-anima^="show"]'),document.querySelectorAll('[data-tab="menu"] li').forEach((function(t,e){t.addEventListener("click",(function(){!function(t){u.forEach((function(t){t.classList.contains("show-right")?t.classList.remove("show-right"):t.classList.contains("show-down")&&t.classList.remove("show-down")})),u[t].classList.add(u[t].dataset.anima)}(e)}))})),(t=document.querySelectorAll("[data-anime ='scroll']")).length&&(t[0].classList.add("scroll-change"),window.addEventListener("scroll",(function(){var e=.6*window.innerHeight;t.forEach((function(t){t.getBoundingClientRect().top-e<0?t.classList.add("scroll-change"):t.classList.contains("scroll-change")&&t.classList.remove("scroll-change")}))}))),function(){function t(t){var e=this;t.preventDefault(),this.classList.add("visible"),v(this,["click","touchstart"],(function(){e.classList.remove("visible")}))}document.querySelectorAll("[data-dropdown]").forEach((function(e){["click","touchstrat"].forEach((function(n){e.addEventListener(n,t)}))}))}(),function(){var t=document.querySelector('[data-menu="button"]'),e=document.querySelector('[data-menu="list"]'),n=["touchstart","click"];function r(){e.classList.toggle("visible"),t.classList.toggle("visible"),v(e,n,(function(){e.classList.remove("visible"),t.classList.remove("visible")}))}window.innerWidth<=700&&n.forEach((function(e){return t.addEventListener(e,r)}))}(),e=document.querySelector("[data-semana]"),n=e.dataset.semana.split(",").map(Number),r=e.dataset.horario.split(",").map(Number),setInterval((function(){var t=new Date,o=t.getDay(),i=t.getHours(),a=n.includes(o),s=i>=r[0]&&i<r[1];a&&s?e.classList.add("aberto"):!e.classList.contains("aberto")||s||a||e.classList.remove("aberto")}),2e3)}})()})();