(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>d});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),u=new URL(t(302),t.b),p=i()(o()),l=s()(u);p.push([e.id,"* {\n    margin: 0;\n\tpadding: 0;\n\tborder: 0;\n}\n\nul {\n\tlist-style: none;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n    position: absolute;\n    width: 100%;\n}\n\n.background {\n    background-image: url("+l+");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    position: fixed;\n    height: 100vh;\n    width: 100vw;\n}\n\nheader {\n    display: flex;\n    flex-direction: column;\n}\n\nnav > ul {\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n    color: white;\n    background-color: rgba(0, 0, 0, 0.45);\n}\n\nnav li {\n    padding: 10px 20px;\n}\n\nnav li:hover {\n    cursor: pointer;\n    background-color: rgba(0, 0, 0, 0.7);\n}\n\n.home {\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.45);\n    padding-top: 120px;\n    text-align: center;\n}\n\n.home > p {\n    font-size: 3rem;\n    font-style: italic;\n    font-weight: 600;\n    color: white;\n}\n\n.home > button {\n    margin-top: 50px;\n    border: none;\n    border-radius: 5px;\n    padding: 20px 30px;\n    font-size: 1rem;\n    font-weight: 300;\n    cursor: pointer;\n}\n\n.menu {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n    gap: 10px;\n}\n\n.menu .item {\n    background-color: rgba(0, 0, 0, 0.4);\n    color: white;\n    padding: 10px 30px;\n    display: grid;\n    grid-template-rows: auto auto auto 1fr;\n    gap: 20px;\n}\n\n.item .name {\n    font-size: 1.7rem;\n}\n\n.item .picture {\n    width: 290px;\n}",""]);const d=p},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<e.length;u++){var p=[].concat(e[u]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),n.push(p))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],p=a[u]||0,l="".concat(u," ").concat(p);a[u]=p+1;var d=t(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)n[d].references++,n[d].updater(m);else{var h=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),u=0;u<a.length;u++){var p=t(a[u]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},302:(e,n,t)=>{e.exports=t.p+"83c847115468c467ee1c.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href;var r={};(()=>{t.d(r,{b:()=>T});var e=t(379),n=t.n(e),o=t(795),a=t.n(o),i=t(569),c=t.n(i),s=t(565),u=t.n(s),p=t(216),l=t.n(p),d=t(589),m=t.n(d),h=t(426),f={};f.styleTagTransform=m(),f.setAttributes=u(),f.insert=c().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),n()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;const g=[],v=(e,n,t)=>({name:e,weight:n,ingredients:t});function y(){x("#content","main"),k("main","menu"),function(e){for(let n=0;n<e.length;n++){const t=e[n].name,r=e[n].weight,o=e[n].ingredients;x(".menu","div").setAttribute("data-key",n+1),x(`[data-key='${n+1}']`,"p"),x(`[data-key='${n+1}']`,"p"),x(`[data-key='${n+1}']`,"p"),x(`[data-key='${n+1}']`,"img").src=`pizza_images/${t.toLowerCase()}.png`,k(`[data-key='${n+1}'] > p:nth-of-type(1)`,"name"),k(`[data-key='${n+1}'] > p:nth-of-type(2)`,"ingredients"),k(`[data-key='${n+1}'] > p:nth-of-type(3)`,"weight"),k(`[data-key='${n+1}'] > img`,"picture"),w(`[data-key='${n+1}'] > .name`,t),w(`[data-key='${n+1}'] > .ingredients`,o),w(`[data-key='${n+1}'] > .weight`,r),k(`[data-key='${n+1}']`,"item")}}(g)}function b(){x("#content","main"),k("main","home"),x(".home","p"),k(".home > p","para"),w(".para","The tastiest pizza \n    on the planet"),x(".home","button"),w("button","See Full Menu"),document.querySelector("button").addEventListener("click",(()=>{T(),y()}))}function x(e,n){const t=document.createElement(`${n}`);return document.querySelector(`${e}`).appendChild(t),t}function w(e,n){document.querySelector(`${e}`).innerText=`${n}`}function k(e,n){document.querySelector(`${e}`).classList.add(`${n}`)}function z(e){switch(T(),e){case"Home":b();break;case"Menu":y();break;case"Contact":loadContact()}}function T(){const e=document.querySelector("main");e.parentElement.removeChild(e)}x("#content","header"),x("header","h1"),x("header","nav"),x("nav","ul"),x("ul","li"),x("ul","li"),x("ul","li"),w("h1","Pizzeria"),w("li:nth-of-type(1)","Home"),w("li:nth-of-type(2)","Menu"),w("li:nth-of-type(3)","Contact"),b(),g.push(v("DIAVOLA","693g","Tomato sauce, mozzarella, pepperoni, black olives, tomatoes and chorizo.")),g.push(v("CAPRICCIOSA","695g","Tomato sauce, mozzarella, ham, mushrooms and tomatoes.")),g.push(v("QUATTRO STAGIONI","704g","Tomato sauce, mozzarella, ham, chorizo, mushrooms, green peppers.")),g.push(v("PEPPERONI","659g","Tomato sauce, mozzarella, pepperoni, extra pepperoni and extra mozzarella.")),g.push(v("VEGETARIAN","775g","Tomato sauce, mozzarella, onion, mushrooms, black olives and corn.")),g.push(v("QUATTRO FORMAGGI","652g","Creamy sauce, mozzarella 100% natural, cheddar, parmesan and cheese.")),function(){const e=document.querySelectorAll("li");for(let n=0;n<e.length;n++)e[n].addEventListener("click",(e=>{z(e.target.innerText)}))}()})()})();