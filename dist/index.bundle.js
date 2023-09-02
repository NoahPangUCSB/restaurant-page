(()=>{"use strict";var n,e,t,o,r,a,i,c,s,d,l,p,u,m,f,h={402:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]),i.push([n.id,"body {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    padding: 0;\n    margin: 0;\n    overflow: scroll;\n    font-family: Roboto, sans-serif;\n}\n\n.content {\n    \n}\n\n.header {\n    height: 80px;\n    display: flex;\n    justify-content: center;\n    background-color: #e2e8f0;\n}\n\n.tab-wrapper {\n    display: grid;\n    width: 30%;\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: 20px;\n}\n\n.tab-wrapper button {\n    font-size: x-large;\n    font-weight: bold;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n\n.home-content {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: center;\n}\n\n.restaurant-name {\n    font-size: 45px;\n    display: grid;\n\n    grid-template-columns: 1fr 2fr 1fr;\n    align-items: center;\n    justify-self: center;\n}\n\n.restaurant-name span {\n    grid-column: 2;\n    text-align: center;\n    margin: 20px;\n    line-height: 2.5;\n}\n.chef-icon {\n    /* margin-top: 20px; */\n}\n\n.home-main-img {\n   width: 100%;\n   align-self: center;\n}\n\n.footer {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    \n    margin-top: auto;\n    height: 40px;\n    background-color: #f9fafb;\n}",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=o.base?s[0]+o.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=r(m,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=o(n,r),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},180:(n,e,t)=>{t.d(e,{Z:()=>r});const o=t.p+"5919d2bf7e4aa98ea9f6.jpg";function r(){const n=document.createElement("div");n.classList.add("home-content");const e=document.createElement("div");e.classList.add("restaurant-name");const t=document.createElement("span");t.textContent="Noah's House of Good Eats",e.appendChild(t);const r=document.createElement("br");t.appendChild(r);const a=document.createElement("img");a.classList.add("chef-icon"),a.src="https://img.icons8.com/windows/96/cook-male.png",t.appendChild(a);const i=document.createElement("img");return i.classList.add("home-main-img"),i.src=o,n.appendChild(e),n.appendChild(i),n}}},g={};function v(n){var e=g[n];if(void 0!==e)return e.exports;var t=g[n]={id:n,exports:{}};return h[n](t,t.exports,v),t.exports}v.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return v.d(e,{a:e}),e},v.d=(n,e)=>{for(var t in e)v.o(e,t)&&!v.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},v.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),v.p="./",v.nc=void 0,n=v(180),e=v(379),t=v.n(e),o=v(795),r=v.n(o),a=v(569),i=v.n(a),c=v(565),s=v.n(c),d=v(216),l=v.n(d),p=v(589),u=v.n(p),m=v(402),(f={}).styleTagTransform=u(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals,document.body.appendChild(function(){const n=document.createElement("div");n.classList.add("header");const e=document.createElement("div");e.classList.add("tab-wrapper");const t=document.createElement("button");t.classList.add("home-btn"),t.textContent="Home";const o=document.createElement("button");o.classList.add("menu-btn"),o.textContent="Menu";const r=document.createElement("button");return r.classList.add("contact-btn"),r.textContent="Contact",e.appendChild(t),e.appendChild(o),e.appendChild(r),n.appendChild(e),n}()),document.body.appendChild(function(){const e=document.createElement("div");e.id="content";const t=(0,n.Z)();return console.log("h"),e.appendChild(t),e}()),document.body.appendChild(function(){const n=document.createElement("div");n.classList.add("footer");const e=document.createElement("span");return e.classList.add("rights-text"),e.textContent="All rights reserved. Noah P. 2023.",n.appendChild(e),n}())})();