!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=(()=>{const e=document.querySelector(".content"),t=document.createElement("div");t.className="bgg",document.body.insertBefore(t,e);const n=document.createElement("div");n.className="tab-bar",document.body.insertBefore(n,t);const o=document.createElement("div");o.className="tab-color",document.body.insertBefore(o,n);const c=document.createElement("button");c.className="btnNav",c.textContent="Contact",n.appendChild(c);const a=document.createElement("button");a.className="btnNav",a.textContent="Menu",n.appendChild(a);const r=document.createElement("button");r.className="btnNav",r.textContent="Home",n.appendChild(r);const l=document.createElement("h1");l.textContent="0xtaf's Restaurant",l.className="header",e.appendChild(l);const s=document.createElement("p");s.textContent="Inspired JavaScript Cuisine",s.className="intro",e.appendChild(s);const d=document.createElement("div");d.className="color",document.body.appendChild(d);const u=document.createElement("div");u.className="menu",document.body.insertBefore(u,e),u.style.display="none";const m=document.createElement("div");m.className="contact",document.body.appendChild(m);const i=document.createElement("h1");i.textContent="DROP ME A MESSAGE",i.className="contact1",m.appendChild(i);const p=document.createElement("p");p.textContent="Let me know if you'd like to share any opinions or suggestions.",p.className="contact2",m.appendChild(p);const y=document.createElement("h1");y.textContent="EMAIL",y.className="contact3",m.appendChild(y);const b=document.createElement("p");b.textContent="tayfunsur@gmail.com",b.className="contact4",m.appendChild(b);const f=document.createElement("h1");f.textContent="GITHUB",f.className="contact5",m.appendChild(f);const C=document.createElement("a");C.href="http://github.com/0xtaf",C.textContent="http://github.com/0xtaf",C.className="contact6",m.appendChild(C);const h=document.createElement("h1");h.textContent="TWITTER",h.className="contact7",m.appendChild(h);const N=document.createElement("a");return N.href="https://twitter.com/OdbTayfun",N.textContent="https://twitter.com/OdbTayfun",N.className="contact8",m.appendChild(N),m.style.display="none",{btnHome:r,btnMenu:a,btnContact:c}})();var c=function(){let e,t,n,o,c,a;e=document.querySelector(".content"),t=document.querySelector("p"),t.className="intro",e.appendChild(t),t.textContent="Inspired JavaScript Cuisine",n=document.querySelector(".colorless"),n.className="color",o=document.querySelector(".blurred"),o.className="bgg",c=document.querySelector(".menu"),c.style.display="none",a=document.querySelector(".contact"),a.style.display="none"};var a=function(){let e,t,n,o,c;o=document.querySelector(".menu"),o.style.display="none",c=document.querySelector(".contact"),c.style.display="block",e=document.querySelector(".intro"),e.textContent="",t=document.querySelector(".color"),t.className="colorless",n=document.querySelector(".bgg"),n.className="blurred"};var r=function(){let e,t,n,o,c;c=document.querySelector(".contact"),c.style.display="none",o=document.querySelector(".menu"),o.style.display="block",e=document.querySelector(".intro"),e.textContent="",t=document.querySelector(".color"),t.className="colorless",n=document.querySelector(".bgg"),n.className="blurred"};o.btnHome.addEventListener("click",c),o.btnMenu.addEventListener("click",r),o.btnContact.addEventListener("click",a)}]);