_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[28],{"+gNf":function(e,t){"trimStart"in String.prototype||(String.prototype.trimStart=String.prototype.trimLeft),"trimEnd"in String.prototype||(String.prototype.trimEnd=String.prototype.trimRight),"description"in Symbol.prototype||Object.defineProperty(Symbol.prototype,"description",{configurable:!0,get:function(){var e=/\((.*)\)/.exec(this.toString());return e?e[1]:void 0}}),Array.prototype.flat||(Array.prototype.flat=function(e,t){return t=this.concat.apply([],this),e>1&&t.some(Array.isArray)?t.flat(e-1):t},Array.prototype.flatMap=function(e,t){return this.map(e,t).flat()}),Promise.prototype.finally||(Promise.prototype.finally=function(e){if("function"!=typeof e)return this.then(e,e);var t=this.constructor||Promise;return this.then((function(r){return t.resolve(e()).then((function(){return r}))}),(function(r){return t.resolve(e()).then((function(){throw r}))}))})},"7t6h":function(e,t,r){"use strict";r.r(t),r.d(t,"getCLS",(function(){return h})),r.d(t,"getFCP",(function(){return v})),r.d(t,"getFID",(function(){return g})),r.d(t,"getLCP",(function(){return S})),r.d(t,"getTTFB",(function(){return _}));var n,a,o=function(){return"".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return{name:e,value:t,delta:0,entries:[],id:o(),isFinal:!1}},c=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return r.observe({type:e,buffered:!0}),r}}catch(e){}},u=!1,s=!1,l=function(e){u=!e.persisted},f=function(){addEventListener("pagehide",l),addEventListener("beforeunload",(function(){}))},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];s||(f(),s=!0),addEventListener("visibilitychange",(function(t){var r=t.timeStamp;"hidden"===document.visibilityState&&e({timeStamp:r,isUnloading:u})}),{capture:!0,once:t})},p=function(e,t,r,n){var a;return function(){r&&t.isFinal&&r.disconnect(),t.value>=0&&(n||t.isFinal||"hidden"===document.visibilityState)&&(t.delta=t.value-(a||0),(t.delta||t.isFinal||void 0===a)&&(e(t),a=t.value))}},h=function(e){var t,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=i("CLS",0),a=function(e){e.hadRecentInput||(n.value+=e.value,n.entries.push(e),t())},o=c("layout-shift",a);o&&(t=p(e,n,o,r),d((function(e){var r=e.isUnloading;o.takeRecords().map(a),r&&(n.isFinal=!0),t()})))},m=function(){return void 0===n&&(n="hidden"===document.visibilityState?0:1/0,d((function(e){var t=e.timeStamp;return n=t}),!0)),{get timeStamp(){return n}}},v=function(e){var t,r=i("FCP"),n=m(),a=c("paint",(function(e){"first-contentful-paint"===e.name&&e.startTime<n.timeStamp&&(r.value=e.startTime,r.isFinal=!0,r.entries.push(e),t())}));a&&(t=p(e,r,a))},g=function(e){var t=i("FID"),r=m(),n=function(e){e.startTime<r.timeStamp&&(t.value=e.processingStart-e.startTime,t.entries.push(e),t.isFinal=!0,o())},a=c("first-input",n),o=p(e,t,a);a?d((function(){a.takeRecords().map(n),a.disconnect()}),!0):window.perfMetrics&&window.perfMetrics.onFirstInputDelay&&window.perfMetrics.onFirstInputDelay((function(e,n){n.timeStamp<r.timeStamp&&(t.value=e,t.isFinal=!0,t.entries=[{entryType:"first-input",name:n.type,target:n.target,cancelable:n.cancelable,startTime:n.timeStamp,processingStart:n.timeStamp+e}],o())}))},y=function(){return a||(a=new Promise((function(e){return["scroll","keydown","pointerdown"].map((function(t){addEventListener(t,e,{once:!0,passive:!0,capture:!0})}))}))),a},S=function(e){var t,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=i("LCP"),a=m(),o=function(e){var r=e.startTime;r<a.timeStamp?(n.value=r,n.entries.push(e)):n.isFinal=!0,t()},u=c("largest-contentful-paint",o);if(u){t=p(e,n,u,r);var s=function(){n.isFinal||(u.takeRecords().map(o),n.isFinal=!0,t())};y().then(s),d(s,!0)}},_=function(e){var t,r=i("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var r in e)"navigationStart"!==r&&"toJSON"!==r&&(t[r]=Math.max(e[r]-e.navigationStart,0));return t}();r.value=r.delta=t.responseStart,r.entries=[t],r.isFinal=!0,e(r)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("pageshow",t)}},"9YZO":function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},r.apply(this,arguments)}e.exports=r},J6CG:function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r="/"===e?"/index":/^\/index(\/|$)/.test(e)?"/index".concat(e):"".concat(e);return r+t}},YtVx:function(e,t,r){"use strict";var n=r("pONU")(r("ioxi"));window.next=n,(0,n.default)().catch(console.error)},awAI:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,a=r("7t6h"),o=(location.href,!1);function i(e){n&&n(e)}t.default=function(e){n=e,o||(o=!0,(0,a.getCLS)(i),(0,a.getFID)(i),(0,a.getFCP)(i),(0,a.getLCP)(i),(0,a.getTTFB)(i))}},ioxi:function(e,t,r){"use strict";var n=r("IebI"),a=r("4mCN"),o=r("zQIG"),i=r("8mBC"),c=r("I/kN"),u=r("cMav"),s=r("pSQP"),l=r("x3oR");function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=s(e);if(t){var a=s(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return u(this,r)}}var d=r("pONU"),p=r("Y3ZS");t.__esModule=!0,t.render=oe,t.renderError=ce,t.default=t.emitter=t.router=t.version=void 0;var h=p(r("9YZO"));p(r("pONU"));r("+gNf");var m=p(r("ERkP")),v=p(r("7nmT")),g=r("op+c"),y=p(r("YBsB")),S=r("wsRY"),_=r("L9lV"),E=r("Lko9"),w=d(r("FrRs")),R=d(r("0D0S")),b=r("fvxO"),P=p(r("jRQF")),x=d(r("vOaH")),T=p(r("awAI")),C=r("7xIC"),A=JSON.parse(document.getElementById("__NEXT_DATA__").textContent);window.__NEXT_DATA__=A;t.version="10.0.1";var k=A.props,I=A.err,N=A.page,L=A.query,D=A.buildId,M=A.assetPrefix,F=A.runtimeConfig,B=A.dynamicIds,O=A.isFallback,j=A.head,q=A.locales,U=A.locale,H=A.defaultLocale,G=M||"";r.p="".concat(G,"/_next/"),R.setConfig({serverRuntimeConfig:{},publicRuntimeConfig:F||{}});var Y=(0,b.getURL)();(0,_.hasBasePath)(Y)&&(Y=(0,_.delBasePath)(Y));var X=new x.default(D,G,N),Q=function(e){var t=l(e,2),r=t[0],n=t[1];return X.registerPage(r,n)};window.__NEXT_P&&window.__NEXT_P.map((function(e){return setTimeout((function(){return Q(e)}),0)})),window.__NEXT_P=[],window.__NEXT_P.push=Q;var V,J,W,Z,z,$,K,ee=(0,P.default)(j),te=document.getElementById("__next");t.router=W;var re=function(e){c(r,e);var t=f(r);function r(){return o(this,r),t.apply(this,arguments)}return i(r,[{key:"componentDidCatch",value:function(e,t){this.props.fn(e,t)}},{key:"componentDidMount",value:function(){this.scrollToHash(),W.isSsr&&(O||A.nextExport&&((0,E.isDynamicRoute)(W.pathname)||location.search)||k&&k.__N_SSG&&location.search)&&W.replace(W.pathname+"?"+String(w.assign(w.urlQueryToSearchParams(W.query),new URLSearchParams(location.search))),Y,{_h:1,shallow:!O})}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=location.hash;if(e=e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout((function(){return t.scrollIntoView()}),0)}}},{key:"render",value:function(){return this.props.children}}]),r}(m.default.Component),ne=(0,y.default)();t.emitter=ne;var ae=function(){var e=a(n.mark((function e(){var r,a,o,i,c,u,s=arguments;return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.length>0&&void 0!==s[0]?s[0]:{},e.next=4,X.loadPage("/_app");case 4:return r=e.sent,a=r.page,o=r.mod,$=a,o&&o.reportWebVitals&&(K=function(e){var t,r=e.id,n=e.name,a=e.startTime,i=e.value,c=e.duration,u=e.entryType,s=e.entries,l="".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12);s&&s.length&&(t=s[0].startTime),o.reportWebVitals({id:r||l,name:n,startTime:a||t,value:null==i?c:i,label:"mark"===u||"measure"===u?"custom":"web-vital"})}),i=I,e.prev=10,e.next=14,X.loadPage(N);case 14:c=e.sent,Z=c.page,z=c.styleSheets,e.next=21;break;case 21:e.next=28;break;case 23:if(e.prev=23,e.t0=e.catch(10),!(x.INITIAL_CSS_LOAD_ERROR in e.t0)){e.next=27;break}throw e.t0;case 27:i=e.t0;case 28:if(!window.__NEXT_PRELOADREADY){e.next=32;break}return e.next=32,window.__NEXT_PRELOADREADY(B);case 32:return t.router=W=(0,C.createRouter)(N,L,Y,{initialProps:k,pageLoader:X,App:$,Component:Z,initialStyleSheets:z,wrapApp:pe,err:i,isFallback:Boolean(O),subscription:function(e,t){return oe({App:t,Component:e.Component,styleSheets:e.styleSheets,props:e.props,err:e.err})},locale:U,locales:q,defaultLocale:H}),oe(u={App:$,Component:Z,styleSheets:z,props:k,err:i}),e.abrupt("return",ne);case 40:return e.abrupt("return",{emitter:ne,render:oe,renderCtx:u});case 41:case"end":return e.stop()}}),e,null,[[10,23]])})));return function(){return e.apply(this,arguments)}}();function oe(e){return ie.apply(this,arguments)}function ie(){return(ie=a(n.mark((function e(t){return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.err){e.next=4;break}return e.next=3,ce(t);case 3:return e.abrupt("return");case 4:return e.prev=4,e.next=7,he(t);case 7:e.next=16;break;case 9:if(e.prev=9,e.t0=e.catch(4),!e.t0.cancelled){e.next=13;break}throw e.t0;case 13:return e.next=16,ce((0,h.default)({},t,{err:e.t0}));case 16:case"end":return e.stop()}}),e,null,[[4,9]])})))).apply(this,arguments)}function ce(e){var t=e.App,r=e.err;return console.error(r),X.loadPage("/_error").then((function(n){var a=n.page,o=n.styleSheets,i=pe(t),c={Component:a,AppTree:i,router:W,ctx:{err:r,pathname:N,query:L,asPath:Y,AppTree:i}};return Promise.resolve(e.props?e.props:(0,b.loadGetInitialProps)(t,c)).then((function(t){return he((0,h.default)({},e,{err:r,Component:a,styleSheets:o,props:t}))}))}))}t.default=ae;var ue="function"===typeof v.default.hydrate;function se(){b.ST&&(performance.mark("afterHydrate"),performance.measure("Next.js-before-hydration","navigationStart","beforeRender"),performance.measure("Next.js-hydration","beforeRender","afterHydrate"),K&&performance.getEntriesByName("Next.js-hydration").forEach(K),fe())}function le(){if(b.ST){performance.mark("afterRender");var e=performance.getEntriesByName("routeChange","mark");e.length&&(performance.measure("Next.js-route-change-to-render",e[0].name,"beforeRender"),performance.measure("Next.js-render","beforeRender","afterRender"),K&&(performance.getEntriesByName("Next.js-render").forEach(K),performance.getEntriesByName("Next.js-route-change-to-render").forEach(K)),fe(),["Next.js-route-change-to-render","Next.js-render"].forEach((function(e){return performance.clearMeasures(e)})))}}function fe(){["beforeRender","afterHydrate","afterRender","routeChange"].forEach((function(e){return performance.clearMarks(e)}))}function de(e){var t=e.children;return m.default.createElement(re,{fn:function(e){return ce({App:$,err:e}).catch((function(e){return console.error("Error rendering page: ",e)}))}},m.default.createElement(S.RouterContext.Provider,{value:(0,C.makePublicRouterInstance)(W)},m.default.createElement(g.HeadManagerContext.Provider,{value:ee},t)))}var pe=function(e){return function(t){var r=(0,h.default)({},t,{Component:Z,err:I,router:W});return m.default.createElement(de,null,m.default.createElement(e,r))}};function he(e){var t=e.App,r=e.Component,n=e.props,a=e.err,o=e.styleSheets;r=r||V.Component,n=n||V.props;var i=(0,h.default)({},n,{Component:r,err:a,router:W});V=i;var c,u=!1,s=new Promise((function(e,t){J&&J(),c=function(){J=null,e()},J=function(){u=!0,J=null;var e=new Error("Cancel rendering route");e.cancelled=!0,t(e)}}));var l,f,d=m.default.createElement(me,{callback:function(){if(!ue&&!u){for(var e=new Set(o.map((function(e){return e.href}))),t=(0,x.looseToArray)(document.querySelectorAll("style[data-n-href]")),r=t.map((function(e){return e.getAttribute("data-n-href")})),n=0;n<r.length;++n)e.has(r[n])?t[n].removeAttribute("media"):t[n].setAttribute("media","x");var a=document.querySelector("noscript[data-n-css]");a&&o.forEach((function(e){var t=e.href,r=document.querySelector('style[data-n-href="'.concat(t,'"]'));r&&(a.parentNode.insertBefore(r,a.nextSibling),a=r)})),(0,x.looseToArray)(document.querySelectorAll("link[data-n-p]")).forEach((function(e){e.parentNode.removeChild(e)})),getComputedStyle(document.body,"height")}c()}},m.default.createElement(de,null,m.default.createElement(t,i)));return function(){if(ue)return!1;var e=(0,x.looseToArray)(document.querySelectorAll("style[data-n-href]")),t=new Set(e.map((function(e){return e.getAttribute("data-n-href")})));o.forEach((function(e){var r=e.href,n=e.text;if(!t.has(r)){var a=document.createElement("style");a.setAttribute("data-n-href",r),a.setAttribute("media","x"),document.head.appendChild(a),a.appendChild(document.createTextNode(n))}}))}(),l=d,f=te,b.ST&&performance.mark("beforeRender"),ue?(v.default.hydrate(l,f,se),ue=!1):v.default.render(l,f,le),s}function me(e){var t=e.callback,r=e.children;return m.default.useLayoutEffect((function(){return t()}),[t]),m.default.useEffect((function(){(0,T.default)(K)}),[]),r}},jRQF:function(e,t,r){"use strict";var n=r("x3oR");t.__esModule=!0,t.default=function(e){var t=document.getElementsByTagName("head")[0],r=new Set(t.children);i(r,e.map((function(e){var t=n(e,2),r=t[0],o=t[1];return(0,a.createElement)(r,o)})),!1);var o=null;return{mountedInstances:new Set,updateHead:function(e){var t=o=Promise.resolve().then((function(){t===o&&(o=null,i(r,e,!0))}))}}};var a=r("ERkP"),o={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"};function i(e,t,r){var n=document.getElementsByTagName("head")[0],a=new Set(e);t.forEach((function(t){if("title"!==t.type){for(var r=function(e){var t=e.type,r=e.props,n=document.createElement(t);for(var a in r)if(r.hasOwnProperty(a)&&"children"!==a&&"dangerouslySetInnerHTML"!==a&&void 0!==r[a]){var i=o[a]||a.toLowerCase();n.setAttribute(i,r[a])}var c=r.children,u=r.dangerouslySetInnerHTML;return u?n.innerHTML=u.__html||"":c&&(n.textContent="string"===typeof c?c:Array.isArray(c)?c.join(""):""),n}(t),i=e.values();;){var c=i.next(),u=c.done,s=c.value;if(null==s?void 0:s.isEqualNode(r))return void a.delete(s);if(u)break}e.add(r),n.appendChild(r)}else{var l="";if(t){var f=t.props.children;l="string"===typeof f?f:Array.isArray(f)?f.join(""):""}l!==document.title&&(document.title=l)}})),a.forEach((function(t){r&&t.parentNode.removeChild(t),e.delete(t)}))}},vOaH:function(e,t,r){"use strict";var n=r("IebI"),a=r("4mCN"),o=r("zQIG"),i=r("8mBC"),c=r("Y3ZS");t.__esModule=!0,t.default=t.INITIAL_CSS_LOAD_ERROR=t.looseToArray=void 0;var u=c(r("YBsB")),s=r("L9lV"),l=c(r("J6CG")),f=r("Lko9"),d=r("3G4Q"),p=function(e){return[].slice.call(e)};function h(e,t){try{return document.createElement("link").relList.supports(e)}catch(r){}}function m(e){return(0,s.markLoadingError)(new Error("Error loading ".concat(e)))}t.looseToArray=p;var v=Symbol("INITIAL_CSS_LOAD_ERROR");t.INITIAL_CSS_LOAD_ERROR=v;var g=h("preload")&&!h("prefetch")?"preload":"prefetch",y=h("preload")?"preload":g;document.createElement("script");function S(e){if("/"!==e[0])throw new Error('Route name should start with a "/", got "'.concat(e,'"'));return"/"===e?e:e.replace(/\/$/,"")}function _(e,t,r,n){return new Promise((function(a,o){n=document.createElement("link"),r&&(n.as=r),n.rel=t,n.crossOrigin=void 0,n.onload=a,n.onerror=o,n.href=e,document.head.appendChild(n)}))}var E=function(){function e(t,r,n){o(this,e),this.initialPage=void 0,this.buildId=void 0,this.assetPrefix=void 0,this.pageCache=void 0,this.pageRegisterEvents=void 0,this.loadingRoutes=void 0,this.promisedBuildManifest=void 0,this.promisedSsgManifest=void 0,this.promisedDevPagesManifest=void 0,this.initialPage=n,this.buildId=t,this.assetPrefix=r,this.pageCache={},this.pageRegisterEvents=(0,u.default)(),this.loadingRoutes={"/_app":!0},"/_error"!==n&&(this.loadingRoutes[n]=!0),this.promisedBuildManifest=new Promise((function(e){window.__BUILD_MANIFEST?e(window.__BUILD_MANIFEST):window.__BUILD_MANIFEST_CB=function(){e(window.__BUILD_MANIFEST)}})),this.promisedSsgManifest=new Promise((function(e){window.__SSG_MANIFEST?e(window.__SSG_MANIFEST):window.__SSG_MANIFEST_CB=function(){e(window.__SSG_MANIFEST)}}))}return i(e,[{key:"getPageList",value:function(){return this.promisedBuildManifest.then((function(e){return e.sortedPages}))}},{key:"getDependencies",value:function(e){var t=this;return this.promisedBuildManifest.then((function(r){return r[e]?r[e].map((function(e){return"".concat(t.assetPrefix,"/_next/").concat(encodeURI(e))})):Promise.reject(m(e))}))}},{key:"getDataHref",value:function(e,t,r,n){var a=this,o=(0,d.parseRelativeUrl)(e),i=o.pathname,c=o.query,u=o.search,p=(0,d.parseRelativeUrl)(t).pathname,h=S(i),m=function(e){var t=(0,s.addLocale)((0,l.default)(e,".json"),n);return(0,s.addBasePath)("/_next/data/".concat(a.buildId).concat(t).concat(r?"":u))},v=(0,f.isDynamicRoute)(h),g=v?(0,s.interpolateAs)(i,p,c).result:"";return v?g&&m(g):m(h)}},{key:"prefetchData",value:function(e,t,r){var n=this,a=S((0,d.parseRelativeUrl)(e).pathname);return this.promisedSsgManifest.then((function(o,i){return o.has(a)&&(i=n.getDataHref(e,t,!0,r))&&!document.querySelector('link[rel="'.concat(g,'"][href^="').concat(i,'"]'))&&_(i,g,"fetch").catch((function(){}))}))}},{key:"loadPage",value:function(e){var t=this;return e=S(e),new Promise((function(r,n){var a=t.pageCache[e];if(a)"error"in a?n(a.error):r(a);else{var o=function a(o){t.pageRegisterEvents.off(e,a),delete t.loadingRoutes[e],"error"in o?n(o.error):r(o)};if(t.pageRegisterEvents.on(e,o),!t.loadingRoutes[e])t.loadingRoutes[e]=!0,t.getDependencies(e).then((function(e){var t=[];return e.forEach((function(e){e.endsWith(".js")&&!document.querySelector('script[src^="'.concat(e,'"]'))&&t.push(function(e){return new Promise((function(t,r){var n=document.createElement("script");n.crossOrigin=void 0,n.src=e,n.onload=t,n.onerror=function(){return r(m(e))},document.body.appendChild(n)}))}(e)),e.endsWith(".css")&&!document.querySelector('link[rel="'.concat(y,'"][href^="').concat(e,'"]'))&&_(e,y,"fetch").catch((function(){}))})),Promise.all(t)})).catch((function(r){t.pageCache[e]={error:r},o({error:r})}))}}))}},{key:"registerPage",value:function(e,t){var r=this,o=this,i=function(){var r=a(n.mark((function r(a){var i,c;return n.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t();case 3:i=r.sent,c={page:i.default||i,mod:i,styleSheets:a},o.pageCache[e]=c,o.pageRegisterEvents.emit(e,c),r.next=13;break;case 9:r.prev=9,r.t0=r.catch(0),o.pageCache[e]={error:r.t0},o.pageRegisterEvents.emit(e,{error:r.t0});case 13:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e){return r.apply(this,arguments)}}();var c=e===this.initialPage;("/_app"===e?Promise.resolve([]):(c?Promise.resolve(p(document.querySelectorAll("link[data-n-p]")).map((function(e){return e.getAttribute("href")}))):this.getDependencies(e).then((function(e){return e.filter((function(e){return e.endsWith(".css")}))}))).then((function(e){return Promise.all(e.map((function(e){return t=e,fetch(t).then((function(e){if(!e.ok)throw m(t);return e.text().then((function(e){return{href:t,text:e}}))}));var t}))).catch((function(e){throw c&&Object.defineProperty(e,v,{}),e}))}))).then((function(e){return i(e)}),(function(t){r.pageCache[e]={error:t},r.pageRegisterEvents.emit(e,{error:t})}))}},{key:"prefetch",value:function(e,t){var r,n,a=this;if((r=navigator.connection)&&(r.saveData||/2g/.test(r.effectiveType)))return Promise.resolve();if(t)n=e;else;return Promise.all(document.querySelector('link[rel="'.concat(g,'"][href^="').concat(n,'"]'))?[]:[n&&_(n,g,n.endsWith(".css")?"fetch":"script"),!t&&this.getDependencies(e).then((function(e){return Promise.all(e.map((function(e){return a.prefetch(e,!0)})))}))]).then((function(){}),(function(){}))}}]),e}();t.default=E}},[["YtVx",1,2,0]]]);