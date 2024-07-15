(()=>{var n={249:(n,e,t)=>{"use strict";t.d(e,{A:()=>d});var o=t(601),r=t.n(o),i=t(314),a=t.n(i),c=t(417),s=t.n(c),m=new URL(t(935),t.b),l=a()(r()),p=s()(m);l.push([n.id,`/* section 1 */\n.home-section-1 {\n    background-color: var(--site-color);\n    padding-top: 3rem;\n    padding-bottom: 5rem;\n    color: white;\n}\n\n.home-section-1-text, .home-section-1-image{\n    /* border: 1px solid; */\n}\n\n.home-section-1 .container {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n    gap: 3rem;\n    /* border: 1px solid; */\n}\n\n.home-section-1 h1 {\n    font-size: var(--font-size-1);\n    line-height: 4.8rem; /*for pc size*/\n    line-height: 3.8rem;\n    margin-bottom: 1.4rem;\n    margin-top: 2.8rem;\n    /* text-align: left; */\n}\n\n.home-section-1 button, .home-section-5 button {\n    margin-top: 1rem;\n    background-color: white;\n    border: none;\n    padding: 1.3rem 2rem;\n    border-radius: 2rem;\n    color: var(--site-color);\n    font-family: 'courier_primeregular';\n    font-size: 1.2rem;\n}\n\n.home-section-1-image {\n    display: flex;\n    justify-content: center;\n    /* margin-top: 1.5rem; */\n}\n\n.home-section-1 img {\n    width: clamp(22rem, 29vw, 29vw);\n    width: clamp(22rem, 35vw + 32vh, 99%);\n    /* width: calc(20vw + 32vh);\n    width: calc(35vw + 32vh); */\n    /* width: 99%; */\n}\n\n\n\n\n/* section 2 */\n\n.home-section-2-image{\n    display: flex;\n    justify-content: center;\n    margin-top: 2rem;\n}\n\n.home-section-2-image img{\n    width: 4rem;\n}\n\n.home-section-2 {\n    margin-top: 9rem;\n    margin-bottom: 10rem;\n}\n\n.home-section-2 h1 {\n    font-size: calc(1.7vw + 1.5rem);\n    text-align: center;\n    margin: 2rem 0;\n}\n\n\n/* section 3 */\n.home-section-3 {\n    background-color: var(--home-section-3-color);\n    padding-top: 8rem;\n    padding-bottom: 7rem;\n}\n\n.section-3-grid {\n    /* background-color: blue; */\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n    gap: 2rem;\n    /* align-items: center; */\n}\n\n.home-section-3-grid-item {\n    display: flex;\n    align-items: center;\n}\n\n.home-section-3-grid-item-wrap\n{\n    /* border: 1px solid; */\n    height: min-content;\n}\n\n.home-section-3 h3 {\n    color: var(--site-color);\n    font-size: var(--font-size-3);\n    margin-bottom: calc(1.5vw + 1rem);\n}\n\n.home-section-3 h2 {\n    font-size: calc(1.9vw + 1.9rem);\n}\n\n.home-section-3 p {\n    margin: 1.5rem 0;\n}\n\n.home-section-3 button {\n    /* margin-top: 1rem; */\n    background-color: var(--home-section-3-color);\n    border: 2px solid var(--site-color);\n    padding: .7rem 1.3rem;\n    border-radius: 2rem;\n    color: var(--site-color);\n    font-family: 'courier_primeregular';\n    font-size: 1rem;\n}\n\n.home-section-3-image {\n    display: flex;\n    justify-content: center;\n}\n\n.home-section-3 img {\n    width: clamp(18rem, 35vw + 32vh, 80%);\n    border-radius: 2rem;\n}\n\n\n/* section 4 */\n\n.home-section-4 {\n\n}\n\n.home-section-4-grid {\n    /* background-color: blue; */\n    display: grid;\n    /* grid-template-areas: \n        "one three four"\n        "two three five"\n        ; */\n    grid-template-areas: \n        "one"\n        "two"\n        "three"\n        "four"\n        "five"\n        ;\n    /* row-gap: 1rem;\n    row-gap: 5rem;\n    column-gap: 1em;\n    grid-template-columns: 1fr 3fr 1fr ; */\n}\n\n.home-section-4-image {\n    display: flex;\n    justify-content: center;\n}\n\n.home-section-4-image img{\n    width: clamp(18rem, 35vw + 32vh, 90%);\n    /* height: clamp(18rem, 35vw + 32vh, 80%); */\n    /* width: 3rem; */\n\n    /* border: 1px solid; */\n    margin: 2rem 0;\n}\n\n.home-section-4-grid-text-item {\n    /* border: 1px solid; */\n\n}\n\n.home-section-4-grid-text-item h3 {\n    color: var(--site-color);\n    font-size: calc(1.5vw + 1.5rem);\n    margin-bottom: 1.5rem;\n}\n\n.home-section-4-grid-item-1 {\n    grid-area: one;\n    margin-top: 5rem;\n}\n.home-section-4-grid-item-2 {\n    grid-area: two;\n    margin-top: 5rem;\n}\n.home-section-4-grid-item-3 {\n    grid-area: three;\n}\n.home-section-4-grid-item-4 {\n    grid-area: four;\n    margin-bottom: 5rem;\n    /* margin-top: 5rem; */\n}\n.home-section-4-grid-item-5 {\n    grid-area: five;\n    margin-bottom: 5rem;\n}\n\n.home-section-5 {\n    background: url(${p});\n    background-repeat: no-repeat;\n    background-size: cover;\n    /* background-attachment:fixed; */\n    background-position: center;\n    /* background-color: #181313; */\n    color: white;\n}\n\n.home-section-5 .container {\n    padding: 13rem 0;\n    display: grid;\n}\n\n.home-section-5 h1 {\n    font-size: var(--font-size-1);\n    text-align: center;\n}\n\n.home-section-5 p {\n    font-size: var(--font-size-3);\n    text-align: center;\n}\n\n.home-section-5 button {\n    background: none;\n    border: 1px solid var(--site-color);\n    justify-self: center;\n    margin-top: 2rem;\n    color: white;\n}`,""]);const d=l},919:(n,e,t)=>{"use strict";t.d(e,{A:()=>f});var o=t(601),r=t.n(o),i=t(314),a=t.n(i),c=t(417),s=t.n(c),m=new URL(t(117),t.b),l=new URL(t(629),t.b),p=a()(r()),d=s()(m),u=s()(l);p.push([n.id,`@font-face {\n    font-family: 'soralight';\n    src: url(${d}) format('woff2'),\n         url(${u}) format('woff');\n    font-weight: normal;\n    font-style: normal;\n\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n\n:root {\n    font-size: 16px;\n    font-family: 'soralight';\n    --site-color: #dd4823;\n    --site-color: #e65728;\n    /* --home-section-3-color: antiquewhite; */\n    --home-section-3-color: #fff6f0;\n    --font-size-1: clamp(3.4rem, 4vw + 1.3vw, 4.5rem);\n    /* --font-size-1: max(2rem, 4.5rem); */\n    --font-size-3: calc(1.5vw + 1rem);\n}\n\n.container {\n    max-width: min(70rem, 90vw);\n    margin: 0 auto;\n}\n\n.highlight {\n    color: var(--site-color);\n}\n\nheader {\n    background-color: var(--site-color);\n}\n\nheader .container {\n    /* background-color: var(--site-color); */\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 30px 0;\n}\n\nnav {\n    display: none;\n}\n\n.logo img {\n    width: min(40vw, 200px);\n}\n\n.menu-button {\n    border: none;\n    background: none;\n}\n\n.header-menu {\n    font-size: 30px;\n    height: 40px;\n    stroke: #fea86a;\n}\n\n\n\n\n/* footer */\nfooter {\n    margin: 5rem 0 2rem;\n}\n\nfooter .container > * {\n    margin-bottom: 2rem;\n}\n\n.footer-image {\n    display: flex;\n   justify-content: center;\n}\n.footer-image img {\n    width: 10rem;\n}\n\nul.footer-nav li {\n    /* display: inline-block; */\n    /* display: inline; */\n    width: fit-content;\n    /* width: max-content; */\n    /* border: 1px solid; */\n}\n\nul.footer-nav {\n    list-style: none;\n    display: flex;\n    row-gap: 1rem;\n    column-gap: 2rem;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n.footer-contact {\n    display: flex;\n    justify-content: center;\n    column-gap: 1.5rem;\n    row-gap: 1rem;\n    flex-wrap: wrap;\n}\n\n.footer-contact > * {\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    gap: 1rem;\n}\n\n.footer-contact-opt a {\n    text-decoration: none;\n    color: black;\n}\n\n.footer-contact-opt a:hover, .my-info a:hover {\n    color: red;\n}\n\n.footer-contact-opt svg {\n    height: 1.5rem;\n    stroke: var(--site-color);\n}\n\n.footer-info {\n    text-align: center;\n}\n\n.my-info {\n    display: flex;\n    justify-content: center;\n    column-gap: .5rem;\n}\n\n.my-info a {\n    text-decoration: none;\n    color: black;\n}`,""]);const f=p},314:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var m=0;m<n.length;m++){var l=[].concat(n[m]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},417:n=>{"use strict";n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{"use strict";n.exports=function(n){return n[1]}},72:n=>{"use strict";var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],m=o.base?s[0]+o.base:s[0],l=i[m]||0,p="".concat(m," ").concat(l);i[m]=l+1;var d=t(p),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)e[d].references++,e[d].updater(u);else{var f=r(u,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=o(n,r),m=0;m<i.length;m++){var l=t(i[m]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},659:n=>{"use strict";var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},375:(n,e,t)=>{var o={"./hamburger.png":145,"./home-section-1.png":515,"./home-section-3.png":457,"./home-section-4.png":446,"./home-section-5.jpg":935,"./logo-orange.png":452,"./logo.png":971};function r(n){var e=i(n);return t(e)}function i(n){if(!t.o(o,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return o[n]}r.keys=function(){return Object.keys(o)},r.resolve=i,n.exports=r,r.id=375},629:(n,e,t)=>{"use strict";n.exports=t.p+"86efc2ea1c8d4b29bc66.woff"},117:(n,e,t)=>{"use strict";n.exports=t.p+"3568e9634bab0b33e35c.woff2"},145:(n,e,t)=>{"use strict";n.exports=t.p+"12c761c6f81e9a42ae06.png"},515:(n,e,t)=>{"use strict";n.exports=t.p+"d8c4ec5a1761436ee175.png"},457:(n,e,t)=>{"use strict";n.exports=t.p+"39890b2a1fa03b15850c.png"},446:(n,e,t)=>{"use strict";n.exports=t.p+"96e05e4b604a2fef16d0.png"},935:(n,e,t)=>{"use strict";n.exports=t.p+"89f638f37c0e7a7c0dc3.jpg"},452:(n,e,t)=>{"use strict";n.exports=t.p+"c7be9c2fb3a06931389e.png"},971:(n,e,t)=>{"use strict";n.exports=t.p+"bbf7d3943d3e1e84760e.png"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{"use strict";var n=t(72),e=t.n(n),o=t(825),r=t.n(o),i=t(659),a=t.n(i),c=t(56),s=t.n(c),m=t(540),l=t.n(m),p=t(113),d=t.n(p),u=t(919),f={};f.styleTagTransform=d(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),e()(u.A,f),u.A&&u.A.locals&&u.A.locals;var g=t(249),h={};h.styleTagTransform=d(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),e()(g.A,h),g.A&&g.A.locals&&g.A.locals;const v={"./logo.png":".logo","./home-section-1.png":".home-section-1-image","./hamburger.png":".home-section-2-image","./home-section-3.png":".home-section-3-image","./home-section-4.png":".home-section-4-image","./logo-orange.png":".footer-image"};!function(){const n=function(n){let e={};return n.keys().forEach((t=>e[t]=n(t))),e}(t(375));!function(n,e,t){for(const t in e)if(t in n){const o=document.querySelector(n[t]);if(o){const n=new Image;n.src=e[t],o.appendChild(n)}}}(v,n)}()})()})();