(()=>{"use strict";var e={402:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),s=t.n(a)()(r());s.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]),s.push([e.id,":root {\n    --header-background: #334155;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    padding: 0;\n    margin: 0;\n    overflow: scroll;\n    font-family: Roboto, sans-serif;\n}\n\n.content {\n    \n}\n\n.header {\n    height: 80px;\n    display: flex;\n    justify-content: center;\n    background-color: var(--header-background);\n    margin-bottom: 10px;\n    box-shadow: 3px 3px 3px #cbd5e1;\n}\n\n.tab-wrapper {\n    display: grid;\n    width: 30%;\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: 20px;\n}\n\n.tab-wrapper button {\n    font-size: x-large;\n    font-weight: bold;\n    color: white;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    background: none;\n    border-style: hidden hidden solid hidden;\n}\n\n.unselected-tab {\n    border-color: var(--header-background);\n}\n\n.selected-tab {\n    border-color: white;\n}\n\n.hovered-tab {\n    padding-bottom: 20px;\n}\n\n.home-content {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n.restaurant-name {\n    font-size: 45px;\n    display: grid;\n\n    grid-template-columns: 1fr 2fr 1fr;\n    align-items: center;\n    justify-self: center;\n}\n\n.restaurant-name span {\n    grid-column: 2;\n    text-align: center;\n    margin: 20px;\n    line-height: 2.5;\n}\n.chef-icon {\n    /* margin-top: 20px; */\n}\n\n.home-main-img {\n   width: 100%;\n   align-self: end;\n}\n\n.footer {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    \n    margin-top: auto;\n    height: 40px;\n    background-color: #f9fafb;\n}\n\n",""]);const c=s},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(s[d]=!0)}for(var i=0;i<e.length;i++){var l=[].concat(e[i]);o&&s[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},s=[],c=0;c<e.length;c++){var d=e[c],i=o.base?d[0]+o.base:d[0],l=a[i]||0,u="".concat(i," ").concat(l);a[i]=l+1;var p=t(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=r(m,o);o.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}s.push(u)}return s}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var c=t(a[s]);n[c].references--}for(var d=o(e,r),i=0;i<a.length;i++){var l=t(a[i]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=d}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},180:(e,n,t)=>{t.d(n,{Z:()=>r});const o=t.p+"5919d2bf7e4aa98ea9f6.jpg";function r(){const e=document.createElement("div");e.classList.add("home-content");const n=document.createElement("div");n.classList.add("restaurant-name");const t=document.createElement("span");t.textContent="Noah's House of Good Eats",n.appendChild(t);const r=document.createElement("br");t.appendChild(r);const a=document.createElement("img");a.classList.add("chef-icon"),a.src="https://img.icons8.com/windows/96/cook-male.png",t.appendChild(a);const s=document.createElement("img");return s.classList.add("home-main-img"),s.src=o,e.appendChild(n),e.appendChild(s),e}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.p="./",t.nc=void 0,(()=>{var e=t(180);const n=(()=>{let e=null;const n=()=>{e=document.querySelectorAll("button")},t=e=>{e.srcElement.classList.remove("hovered-tab")};return{displaySelectedTab:()=>{e||n(),e.forEach((n=>{n.addEventListener("click",(()=>{e.forEach((e=>{e.classList.remove("selected-tab"),e.classList.add("unselected-tab")})),n.classList.add("selected-tab")}))}))},displayHoveredTab:()=>{e||n(),e.forEach((e=>{e.addEventListener("mouseover",(()=>{e.classList.add("hovered-tab")}))})),e.forEach((e=>{e.addEventListener("mouseout",t)}))}}})();var o=t(379),r=t.n(o),a=t(795),s=t.n(a),c=t(569),d=t.n(c),i=t(565),l=t.n(i),u=t(216),p=t.n(u),m=t(589),f=t.n(m),h=t(402),v={};v.styleTagTransform=f(),v.setAttributes=l(),v.insert=d().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=p(),r()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals,document.body.appendChild(function(){const e=document.createElement("div");e.classList.add("header");const n=document.createElement("div");n.classList.add("tab-wrapper");const t=document.createElement("button");t.classList.add("home-btn"),t.classList.add("selected-tab"),t.textContent="Home";const o=document.createElement("button");o.classList.add("menu-btn"),o.classList.add("unselected-tab"),o.textContent="Menu";const r=document.createElement("button");return r.classList.add("contact-btn"),r.classList.add("unselected-tab"),r.textContent="Contact",n.appendChild(t),n.appendChild(o),n.appendChild(r),e.appendChild(n),e}()),document.body.appendChild(function(){const n=document.createElement("div");n.id="content";const t=(0,e.Z)();return console.log("h"),n.appendChild(t),n}()),document.body.appendChild(function(){const e=document.createElement("div");e.classList.add("footer");const n=document.createElement("span");return n.classList.add("rights-text"),n.textContent="All rights reserved. Noah P. 2023.",e.appendChild(n),e}()),n.displaySelectedTab(),n.displayHoveredTab()})()})();