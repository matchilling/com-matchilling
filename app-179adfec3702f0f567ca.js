webpackJsonp([0xd2a57dc1d883],{90:function(e,n,t){"use strict";function o(e,n,t){var o=a.map(function(t){if(t.plugin[e]){var o=t.plugin[e](n,t.options);return o}});return o=o.filter(function(e){return"undefined"!=typeof e}),o.length>0?o:t?[t]:[]}function r(e,n,t){return a.reduce(function(t,o){return o.plugin[e]?t.then(function(){return o.plugin[e](n,o.options)}):t},Promise.resolve())}n.__esModule=!0,n.apiRunner=o,n.apiRunnerAsync=r;var a=[{plugin:t(359),options:{plugins:[]}},{plugin:t(360),options:{plugins:[],trackingId:"UA-75319994-1"}},{plugin:t(362),options:{plugins:[]}},{plugin:t(364),options:{plugins:[],pathToConfigModule:"src/utils/typography"}}]},229:function(e,n,t){"use strict";var o;n.components={"component---node-modules-gatsby-plugin-offline-app-shell-js":t(343),"component---src-templates-article-js":t(349),"component---src-pages-blog-js":t(345),"component---src-pages-contact-js":t(346),"component---src-pages-index-js":t(347),"component---src-pages-project-js":t(348)},n.json=(o={"layout-index.json":t(27),"offline-plugin-app-shell-fallback.json":t(356)},o["layout-index.json"]=t(27),o["new-beginnings.json"]=t(355),o["layout-index.json"]=t(27),o["introduction-to-logic-programming-with-prolog.json"]=t(354),o["layout-index.json"]=t(27),o["brexit-call-for-collaboration.json"]=t(351),o["layout-index.json"]=t(27),o["blog.json"]=t(350),o["layout-index.json"]=t(27),o["contact.json"]=t(352),o["layout-index.json"]=t(27),o["index.json"]=t(353),o["layout-index.json"]=t(27),o["project.json"]=t(357),o),n.layouts={"layout---index":t(344)}},230:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function u(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}n.__esModule=!0;var i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},c=t(2),s=o(c),l=t(7),f=o(l),p=t(146),d=o(p),h=t(63),g=o(h),m=t(90),y=function(e){var n=e.children;return s.default.createElement("div",null,n())},v=function(e){function n(t){r(this,n);var o=a(this,e.call(this)),u=t.location;return d.default.getPage(u.pathname)||(u=i({},u,{pathname:"/404.html"})),o.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},o}return u(n,e),n.prototype.componentWillReceiveProps=function(e){var n=this;if(this.state.location.pathname!==e.location.pathname){var t=d.default.getResourcesForPathname(e.location.pathname);if(t)this.setState({location:e.location,pageResources:t});else{var o=e.location;d.default.getPage(o.pathname)||(o=i({},o,{pathname:"/404.html"})),d.default.getResourcesForPathname(o.pathname,function(e){n.setState({location:o,pageResources:e})})}}},n.prototype.componentDidMount=function(){var e=this;g.default.on("onPostLoadPageResources",function(n){d.default.getPage(e.state.location.pathname)&&n.page.path===d.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:n.pageResources})})},n.prototype.shouldComponentUpdate=function(e,n){return!n.pageResources||(!(this.state.pageResources||!n.pageResources)||(this.state.pageResources.component!==n.pageResources.component||(this.state.pageResources.json!==n.pageResources.json||!(this.state.location.key===n.location.key||!n.pageResources.page||!n.pageResources.page.matchPath&&!n.pageResources.page.path))))},n.prototype.render=function(){var e=(0,m.apiRunner)("replaceComponentRenderer",{props:i({},this.props,{pageResources:this.state.pageResources}),loader:p.publicLoader}),n=e[0];return this.props.page?this.state.pageResources?n||(0,c.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?n||(0,c.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:y,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},n}(s.default.Component);v.propTypes={page:f.default.bool,layout:f.default.bool,location:f.default.object},n.default=v,e.exports=n.default},63:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(495),a=o(r),u=(0,a.default)();e.exports=u},231:function(e,n,t){"use strict";var o=t(89),r={};e.exports=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var a=decodeURIComponent(t),u=a.slice(n.length);if(u.split("#").length>1&&(u=u.split("#").slice(0,-1).join("")),u.split("?").length>1&&(u=u.split("?").slice(0,-1).join("")),r[u])return r[u];var i=void 0;return e.some(function(e){if(e.matchPath){if((0,o.matchPath)(u,{path:e.path})||(0,o.matchPath)(u,{path:e.matchPath}))return i=e,r[u]=e,!0}else{if((0,o.matchPath)(u,{path:e.path,exact:!0}))return i=e,r[u]=e,!0;if((0,o.matchPath)(u,{path:e.path+"index.html"}))return i=e,r[u]=e,!0}return!1}),i}}},232:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(109),a=o(r),u=t(90),i=(0,u.apiRunner)("replaceHistory"),c=i[0],s=c||(0,a.default)();e.exports=s},350:function(e,n,t){t(8),e.exports=function(e){return t.e(49683490770531,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(372)})})}},351:function(e,n,t){t(8),e.exports=function(e){return t.e(70709803819698,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(373)})})}},352:function(e,n,t){t(8),e.exports=function(e){return t.e(0xa7f31e1aeaea,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(374)})})}},353:function(e,n,t){t(8),e.exports=function(e){return t.e(0x81b8806e4260,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(375)})})}},354:function(e,n,t){t(8),e.exports=function(e){return t.e(0x6e3a6da179fa,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(376)})})}},27:function(e,n,t){t(8),e.exports=function(e){return t.e(60335399758886,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(111)})})}},355:function(e,n,t){t(8),e.exports=function(e){return t.e(0xe995915ef19b,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(377)})})}},356:function(e,n,t){t(8),e.exports=function(e){return t.e(0xbf4c176e203a,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(378)})})}},357:function(e,n,t){t(8),e.exports=function(e){return t.e(82289178807862,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(379)})})}},344:function(e,n,t){t(8),e.exports=function(e){return t.e(0x67ef26645b2a,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(233)})})}},146:function(e,n,t){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0,n.publicLoader=void 0;var r=t(2),a=(o(r),t(231)),u=o(a),i=t(63),c=o(i),s=void 0,l={},f={},p={},d={},h={},g=[],m=[],y={},v=[],R={},w=function(e){return e&&e.default||e},j=void 0,x=!0;j=t(234)({getNextQueuedResources:function(){return v.slice(-1)[0]},createResourceDownload:function(e){P(e,function(){v=v.filter(function(n){return n!==e}),j.onResourcedFinished(e)})}}),c.default.on("onPreLoadPageResources",function(e){j.onPreLoadPageResources(e)}),c.default.on("onPostLoadPageResources",function(e){j.onPostLoadPageResources(e)});var b=function(e,n){return R[e]>R[n]?1:R[e]<R[n]?-1:0},_=function(e,n){return y[e]>y[n]?1:y[e]<y[n]?-1:0},P=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(d[n])e.nextTick(function(){t(null,d[n])});else{var o=void 0;o="component---"===n.slice(0,12)?f.components[n]:"layout---"===n.slice(0,9)?f.layouts[n]:f.json[n],o(function(e,o){d[n]=o,t(e,o)})}},C=function(n,t){h[n]?e.nextTick(function(){t(null,h[n])}):P(n,function(e,o){if(e)t(e);else{var r=w(o());h[n]=r,t(e,r)}})},N=1,k={empty:function(){m=[],y={},R={},v=[],g=[]},addPagesArray:function(e){g=e;var n="";n="",s=(0,u.default)(e,n)},addDevRequires:function(e){l=e},addProdRequires:function(e){f=e},dequeue:function(e){return m.pop()},enqueue:function(e){if(!g.some(function(n){return n.path===e}))return!1;var n=1/N;N+=1,y[e]?y[e]+=1:y[e]=1,k.has(e)||m.unshift(e),m.sort(_);var t=s(e);return t.jsonName&&(R[t.jsonName]?R[t.jsonName]+=1+n:R[t.jsonName]=1+n,v.indexOf(t.jsonName)!==-1||d[t.jsonName]||v.unshift(t.jsonName)),t.componentChunkName&&(R[t.componentChunkName]?R[t.componentChunkName]+=1+n:R[t.componentChunkName]=1+n,v.indexOf(t.componentChunkName)!==-1||d[t.jsonName]||v.unshift(t.componentChunkName)),v.sort(b),j.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:v,resourcesCount:R}},getPages:function(){return{pathArray:m,pathCount:y}},getPage:function(e){return s(e)},has:function(e){return m.some(function(n){return n===e})},getResourcesForPathname:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};x&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(s(n)||navigator.serviceWorker.getRegistrations().then(function(e){if(e.length){for(var n=e,t=Array.isArray(n),o=0,n=t?n:n[Symbol.iterator]();;){var r;if(t){if(o>=n.length)break;r=n[o++]}else{if(o=n.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()}})),x=!1;var o=s(n);if(!o)return console.log("A page wasn't found for \""+n+'"'),t();if(n=o.path,p[n])return e.nextTick(function(){t(p[n]),c.default.emit("onPostLoadPageResources",{page:o,pageResources:p[n]})}),p[n];c.default.emit("onPreLoadPageResources",{path:n});var r=void 0,a=void 0,u=void 0,i=function(){if(r&&a&&(!o.layoutComponentChunkName||u)){p[n]={component:r,json:a,layout:u,page:o};var e={component:r,json:a,layout:u,page:o};t(e),c.default.emit("onPostLoadPageResources",{page:o,pageResources:e})}};return C(o.componentChunkName,function(e,n){e&&console.log("Loading the component for "+o.path+" failed"),r=n,i()}),C(o.jsonName,function(e,n){e&&console.log("Loading the JSON for "+o.path+" failed"),a=n,i()}),void(o.layoutComponentChunkName&&C(o.layout,function(e,n){e&&console.log("Loading the Layout for "+o.path+" failed"),u=n,i()}))},peek:function(e){return m.slice(-1)[0]},length:function(){return m.length},indexOf:function(e){return m.length-m.indexOf(e)-1}};n.publicLoader={getResourcesForPathname:k.getResourcesForPathname};n.default=k}).call(n,t(83))},380:function(e,n){e.exports=[{componentChunkName:"component---node-modules-gatsby-plugin-offline-app-shell-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"offline-plugin-app-shell-fallback.json",path:"/offline-plugin-app-shell-fallback/"},{componentChunkName:"component---src-templates-article-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"new-beginnings.json",path:"/new-beginnings/"},{componentChunkName:"component---src-templates-article-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"introduction-to-logic-programming-with-prolog.json",path:"/introduction-to-logic-programming-with-prolog/"},{componentChunkName:"component---src-templates-article-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"brexit-call-for-collaboration.json",path:"/brexit-call-for-collaboration/"},{componentChunkName:"component---src-pages-blog-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog.json",path:"/blog/"},{componentChunkName:"component---src-pages-contact-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"contact.json",path:"/contact/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-project-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"project.json",path:"/project/"}]},234:function(e,n){"use strict";e.exports=function(e){var n=e.getNextQueuedResources,t=e.createResourceDownload,o=[],r=[],a=function(){var e=n();e&&(r.push(e),t(e))},u=function(e){switch(e.type){case"RESOURCE_FINISHED":r=r.filter(function(n){return n!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(n){return n!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(e){u({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a=t(90),u=t(2),i=o(u),c=t(125),s=o(c),l=t(89),f=t(368),p=t(326),d=o(p),h=t(232),g=o(h),m=t(63),y=o(m),v=t(380),R=o(v),w=t(381),j=o(w),x=t(230),b=o(x),_=t(229),P=o(_),C=t(146),N=o(C);t(315),window.___emitter=y.default,N.default.addPagesArray(R.default),N.default.addProdRequires(P.default),window.asyncRequires=P.default,window.___loader=N.default,window.matchPath=l.matchPath;var k=j.default.reduce(function(e,n){return e[n.fromPath]=n,e},{}),E=function(e){var n=k[e];return null!=n&&(g.default.replace(n.toPath),!0)};E(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history||(window.___history=e,e.listen(function(e,n){E(e.pathname)||(0,a.apiRunner)("onRouteUpdate",{location:e,action:n})}))}function n(e,n){var t=n.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:t});if(o.length>0)return o[0];if(e){var r=e.location.pathname;if(r===t)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&t(235);var o=function(e){function n(t){t.page.path===N.default.getPage(e).path&&(y.default.off("onPostLoadPageResources",n),clearTimeout(o),window.___history.push(e))}var t=k[e];if(t&&(e=t.toPath),window.location.pathname!==e){var o=setTimeout(function(){y.default.off("onPostLoadPageResources",n),y.default.emit("onDelayedLoadPageResources",{pathname:e}),window.___history.push(e)},1e3);N.default.getResourcesForPathname(e)?(clearTimeout(o),window.___history.push(e)):y.default.on("onPostLoadPageResources",n)}};window.___navigateTo=o,(0,a.apiRunner)("onRouteUpdate",{location:g.default.location,action:g.default.action});var c=(0,a.apiRunner)("replaceRouterComponent",{history:g.default})[0],p=function(e){var n=e.children;return i.default.createElement(l.Router,{history:g.default},n)},h=(0,l.withRouter)(b.default);N.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,u.createElement)(c?c:p,null,(0,u.createElement)(f.ScrollContext,{shouldUpdateScroll:n},(0,u.createElement)(h,{layout:!0,children:function(n){return(0,u.createElement)(l.Route,{render:function(t){e(t.history);var o=n?n:t;return N.default.getPage(o.location.pathname)?(0,u.createElement)(b.default,r({page:!0},o)):(0,u.createElement)(b.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:t},t)[0];(0,d.default)(function(){return s.default.render(i.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},381:function(e,n){e.exports=[]},235:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(63),a=o(r),u="/";u="/","serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var n=e.installing;console.log("installingWorker",n),n.addEventListener("statechange",function(){switch(n.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},326:function(e,n,t){!function(n,t){e.exports=t()}("domready",function(){var e,n=[],t=document,o=t.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return a||t.addEventListener(r,e=function(){for(t.removeEventListener(r,e),a=1;e=n.shift();)e()}),function(e){a?setTimeout(e,0):n.push(e)}})},8:function(e,n,t){"use strict";function o(){function e(e){var n=o.lastChild;return"SCRIPT"!==n.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",n)):void(n.onload=n.onerror=function(){n.onload=n.onerror=null,setTimeout(e,0)})}var n,o=document.querySelector("head"),r=t.e,a=t.s;t.e=function(o,u){var i=!1,c=!0,s=function(e){u&&(u(t,e),u=null)};return!a&&n&&n[o]?void s(!0):(r(o,function(){i||(i=!0,c?setTimeout(function(){s()}):s())}),void(i||(c=!1,e(function(){i||(i=!0,a?a[o]=void 0:(n||(n={}),n[o]=!0),s(!0))}))))}}o()},358:function(e,n){"use strict";e.exports=function(e,n){e.addEventListener("click",function(e){if(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||e.defaultPrevented)return!0;for(var t=null,o=e.target;o.parentNode;o=o.parentNode)if("A"===o.nodeName){t=o;break}if(!t)return!0;if(t.target&&"_self"!==t.target.toLowerCase())return!0;if(t.pathname===window.location.pathname&&""!==t.hash)return!0;if(""===t.pathname)return!0;if(t.pathname.search(/^.*\.((?!htm)[a-z0-9]{1,5})$/i)!==-1)return!0;var r=document.createElement("a");r.href=t.href;var a=document.createElement("a");return a.href=window.location.href,r.host!==a.host||(e.preventDefault(),n(t.getAttribute("href")),!1)})}},359:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(26),a=t(358),u=o(a);(0,u.default)(window,function(e){(0,r.navigateTo)(e)})},360:function(e,n,t){"use strict";n.onRouteUpdate=function(e){var n=e.location;"function"==typeof ga&&(window.ga("set","page",(n||{}).pathname),window.ga("send","pageview"))}},343:function(e,n,t){t(8),e.exports=function(e){return t.e(99219681209289,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(361)})})}},362:function(e,n){"use strict";n.registerServiceWorker=function(){return!0}},363:function(e,n,t){e.exports=t(14)},364:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(363);o(r)},495:function(e,n){function t(e){return e=e||Object.create(null),{on:function(n,t){(e[n]||(e[n]=[])).push(t)},off:function(n,t){e[n]&&e[n].splice(e[n].indexOf(t)>>>0,1)},emit:function(n,t){(e[n]||[]).map(function(e){e(t)}),(e["*"]||[]).map(function(e){e(n,t)})}}}e.exports=t},83:function(e,n){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(e){if(l===setTimeout)return setTimeout(e,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(n){try{return l.call(null,e,0)}catch(n){return l.call(this,e,0)}}}function a(e){if(f===clearTimeout)return clearTimeout(e);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(n){try{return f.call(null,e)}catch(n){return f.call(this,e)}}}function u(){g&&d&&(g=!1,d.length?h=d.concat(h):m=-1,h.length&&i())}function i(){if(!g){var e=r(u);g=!0;for(var n=h.length;n;){for(d=h,h=[];++m<n;)d&&d[m].run();m=-1,n=h.length}d=null,g=!1,a(e)}}function c(e,n){this.fun=e,this.array=n}function s(){}var l,f,p=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:t}catch(e){l=t}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(e){f=o}}();var d,h=[],g=!1,m=-1;p.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];h.push(new c(e,n)),1!==h.length||g||r(i)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=s,p.addListener=s,p.once=s,p.off=s,p.removeListener=s,p.removeAllListeners=s,p.emit=s,p.prependListener=s,p.prependOnceListener=s,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},345:function(e,n,t){t(8),e.exports=function(e){return t.e(0xc19374f83753,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(239)})})}},346:function(e,n,t){t(8),e.exports=function(e){return t.e(70144966829960,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(240)})})}},347:function(e,n,t){t(8),e.exports=function(e){return t.e(35783957827783,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(241)})})}},348:function(e,n,t){t(8),e.exports=function(e){return t.e(0x65ccee0e7054,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(242)})})}},349:function(e,n,t){t(8),e.exports=function(e){return t.e(0x77c411a55ba3,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(243)})})}}});
//# sourceMappingURL=app-179adfec3702f0f567ca.js.map