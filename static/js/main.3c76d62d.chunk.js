(this["webpackJsonpexample-pwa-react"]=this["webpackJsonpexample-pwa-react"]||[]).push([[0],{11:function(e,n,o){"use strict";o.r(n);var t=o(1),i=o.n(t),r=o(3),a=o.n(r),c=(o(8),o(9),o(0));var s=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)("h1",{children:"Ejemplo de pwa"})})},l=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function d(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var o=e.installing;null!=o&&(o.onstatechange=function(){"installed"===o.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var u=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,12)).then((function(n){var o=n.getCLS,t=n.getFID,i=n.getFCP,r=n.getLCP,a=n.getTTFB;o(e),t(e),i(e),r(e),a(e)}))};a.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(s,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/example-pwa-react",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/example-pwa-react","/service-worker.js");l?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(o){var t=o.headers.get("content-type");404===o.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):d(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):d(n,e)}))}}(),u()},8:function(e,n,o){},9:function(e,n,o){}},[[11,1,2]]]);
//# sourceMappingURL=main.3c76d62d.chunk.js.map