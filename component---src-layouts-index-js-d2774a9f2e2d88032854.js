webpackJsonp([0x67ef26645b2a,60335399758886],{107:function(e,t){e.exports={layoutContext:{}}},195:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(2),a=r(o),s=n(200),l=r(s),u=n(107),c=r(u);t.default=function(e){return a.default.createElement(l.default,i({},e,c.default))},e.exports=t.default},222:function(e,t){function n(e){var t=e.target||e.srcElement;t.__resizeRAF__&&i(t.__resizeRAF__),t.__resizeRAF__=r(function(){var n=t.__resizeTrigger__;n.__resizeListeners__.forEach(function(t){t.call(n,e)})})}var r=function(){var e=this,t=e.requestAnimationFrame||e.mozRequestAnimationFrame||e.webkitRequestAnimationFrame||function(t){return e.setTimeout(t,20)};return function(e){return t(e)}}(),i=function(){var e=this,t=e.cancelAnimationFrame||e.mozCancelAnimationFrame||e.webkitCancelAnimationFrame||e.clearTimeout;return function(e){return t(e)}}(),t=function(e,t){function r(){this.contentDocument.defaultView.__resizeTrigger__=this.__resizeElement__,this.contentDocument.defaultView.addEventListener("resize",n)}var i,o=this,a=o.document,s=a.attachEvent;if("undefined"!=typeof navigator&&(i=navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/Edge/)),!e.__resizeListeners__)if(e.__resizeListeners__=[],s)e.__resizeTrigger__=e,e.attachEvent("onresize",n);else{"static"===getComputedStyle(e).position&&(e.style.position="relative");var l=e.__resizeTrigger__=a.createElement("object");l.setAttribute("style","display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1; opacity: 0;"),l.setAttribute("class","resize-sensor"),l.__resizeElement__=e,l.onload=r,l.type="text/html",i&&e.appendChild(l),l.data="about:blank",i||e.appendChild(l)}e.__resizeListeners__.push(t)};e.exports="undefined"==typeof window?t:t.bind(window),e.exports.unbind=function(e,t){var r=document.attachEvent;t?e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1):e.__resizeListeners__=[],e.__resizeListeners__.length||(r?e.detachEvent("onresize",n):(e.__resizeTrigger__.contentDocument.defaultView.removeEventListener("resize",n),delete e.__resizeTrigger__.contentDocument.defaultView.__resizeTrigger__,e.__resizeTrigger__=!e.removeChild(e.__resizeTrigger__)),delete e.__resizeListeners__)}},359:function(e,t,n){for(var r=n(360),i="undefined"==typeof window?{}:window,o=["moz","webkit"],a="AnimationFrame",s=i["request"+a],l=i["cancel"+a]||i["cancelRequest"+a],u=!0,c=0;c<o.length&&!s;c++)s=i[o[c]+"Request"+a],l=i[o[c]+"Cancel"+a]||i[o[c]+"CancelRequest"+a];if(!s||!l){u=!1;var p=0,d=0,h=[],f=1e3/60;s=function(e){if(0===h.length){var t=r(),n=Math.max(0,f-(t-p));p=n+t,setTimeout(function(){var e=h.slice(0);h.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(p)}catch(e){setTimeout(function(){throw e},0)}},Math.round(n))}return h.push({handle:++d,callback:e,cancelled:!1}),d},l=function(e){for(var t=0;t<h.length;t++)h[t].handle===e&&(h[t].cancelled=!0)}}e.exports=function(e){return u?s.call(i,function(){try{e.apply(this,arguments)}catch(e){setTimeout(function(){throw e},0)}}):s.call(i,e)},e.exports.cancel=function(){l.apply(i,arguments)}},360:function(e,t,n){(function(t){(function(){var n,r,i;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!=typeof t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-i)/1e6},r=t.hrtime,n=function(){var e;return e=r(),1e9*e[0]+e[1]},i=n()):Date.now?(e.exports=function(){return Date.now()-i},i=Date.now()):(e.exports=function(){return(new Date).getTime()-i},i=(new Date).getTime())}).call(this)}).call(t,n(72))},361:function(e,t,n){var r=n(108),i=n(222);e.exports={getInitialState:function(){return void 0!==this.props.initialComponentWidth&&null!==this.props.initialComponentWidth?{componentWidth:this.props.initialComponentWidth}:{}},componentDidMount:function(){this.setState({componentWidth:r.findDOMNode(this).getBoundingClientRect().width}),i(r.findDOMNode(this),this.onResize)},componentDidUpdate:function(){0===r.findDOMNode(this).getElementsByClassName("resize-sensor").length&&i(r.findDOMNode(this),this.onResize)},onResize:function(){this.setState({componentWidth:r.findDOMNode(this).getBoundingClientRect().width})}}},429:function(e,t,n){var r;r=n(430),e.exports={getInitialState:function(){return this.props.initialPageWidth?{pageWidth:this.props.initialPageWidth}:{}},componentDidMount:function(){return r.on(this.onResize)},componentWillUnmount:function(){return r.off(this.onResize)},onResize:function(e){return this.setState({pageWidth:e})}}},430:function(e,t,n){var r,i,o,a,s,l;o=n(359),r=void 0,a=[],s=!1,"undefined"!=typeof window&&null!==window&&(r=window.innerWidth),i=function(){if(!s)return s=!0,o(l)},l=function(){var e,t,n;for(r=window.innerWidth,e=0,t=a.length;e<t;e++)(n=a[e])(r);return s=!1},"undefined"!=typeof window&&null!==window&&window.addEventListener("resize",i),e.exports={on:function(e){return e(r),a.push(e)},off:function(e){return a.splice(a.indexOf(e),1)}}},431:function(e,t,n){var r,i,o,a,s,l;a=n(2),s=n(361),o=n(429),l=n(3),r=a.createClass({displayName:"Breakpoint",mixins:[s],propTypes:{minWidth:a.PropTypes.number,maxWidth:a.PropTypes.number},getDefaultProps:function(){return{minWidth:0,maxWidth:1e21}},renderChildren:function(){return a.Children.map(this.props.children,function(e){return function(t){var n;return"Span"===(null!=t&&null!=(n=t.type)?n.displayName:void 0)?a.cloneElement(t,{context:e.props.context}):t}}(this))},render:function(){var e,t;return e=l({},this.props),delete e.maxWidth,delete e.minWidth,delete e.widthMethod,this.state.componentWidth&&this.props.minWidth<=(t=this.state.componentWidth)&&t<this.props.maxWidth?a.createElement("div",Object.assign({},e),this.renderChildren()):a.createElement("div",null)}}),i=a.createClass({displayName:"Breakpoint",mixins:[o],propTypes:{minWidth:a.PropTypes.number,maxWidth:a.PropTypes.number},getDefaultProps:function(){return{minWidth:0,maxWidth:1e21}},renderChildren:function(){return a.Children.map(this.props.children,function(e){return function(t){var n;return"Span"===(null!=(n=t.type)?n.displayName:void 0)?a.cloneElement(t,{context:e.props.context}):t}}(this))},render:function(){var e,t;return e=l({},this.props),delete e.maxWidth,delete e.minWidth,delete e.widthMethod,this.state.pageWidth&&this.props.minWidth<=(t=this.state.pageWidth)&&t<this.props.maxWidth?a.createElement("div",Object.assign({},e),this.renderChildren()):a.createElement("div",null)}}),e.exports=a.createClass({displayName:"Breakpoint",propTypes:{widthMethod:a.PropTypes.string.isRequired,minWidth:a.PropTypes.number,maxWidth:a.PropTypes.number},getDefaultProps:function(){return{widthMethod:"pageWidth"}},render:function(){return"pageWidth"===this.props.widthMethod?a.createElement(i,Object.assign({},this.props)):"componentWidth"===this.props.widthMethod?a.createElement(r,Object.assign({},this.props)):void 0}})},432:function(e,t,n){var r,i;r=n(2),i=n(3),e.exports=r.createClass({displayName:"Container",render:function(){var e,t,n,o;return t={maxWidth:"960px",marginLeft:"auto",marginRight:"auto"},o=i(t,this.props.style),e=this.props.children,n=i({},this.props),delete n.children,delete n.style,r.createElement("div",Object.assign({},n,{style:o}),e,r.createElement("span",{style:{display:"block",clear:"both"}}," "))}})},433:function(e,t,n){var r,i;r=n(2),i=n(3),e.exports=r.createClass({displayName:"Grid",propTypes:{columns:r.PropTypes.number,gutterRatio:r.PropTypes.number},getDefaultProps:function(){return{columns:12,gutterRatio:.25}},renderChildren:function(){return r.Children.map(this.props.children,function(e){return function(t){var n,i;return"Breakpoint"===(n=null!=(i=t.type)?i.displayName:void 0)||"Span"===n?r.cloneElement(t,{context:{columns:e.props.columns,gutterRatio:e.props.gutterRatio}}):t}}(this))},render:function(){var e;return e=i({},this.props),delete e.gutterRatio,delete e.columns,r.createElement("div",Object.assign({},e),this.renderChildren(),r.createElement("span",{style:{display:"block",clear:"both"}}," "))}})},434:function(e,t,n){var r,i,o;r=n(2),i=n(3),o=n(436),e.exports=r.createClass({displayName:"Span",propTypes:{context:r.PropTypes.object,columns:r.PropTypes.number,at:r.PropTypes.number,pre:r.PropTypes.number,post:r.PropTypes.number,squish:r.PropTypes.number,last:r.PropTypes.bool,break:r.PropTypes.bool},getDefaultProps:function(){return{at:0,pre:0,post:0,squish:0,last:!1,first:!1,break:!1}},renderChildren:function(){return r.Children.map(this.props.children,function(e){return function(t){var n;return"Span"===(null!=t&&null!=(n=t.type)?n.displayName:void 0)?r.cloneElement(t,{context:{columns:e.props.columns,gutterRatio:e.props.context.gutterRatio}}):t}}(this))},render:function(){var e,t;return t=o({contextColumns:this.props.context.columns,gutterRatio:this.props.context.gutterRatio,columns:this.props.columns,at:this.props.at,pre:this.props.pre,post:this.props.post,squish:this.props.squish,last:this.props.last,break:this.props.break}),t=i(t,this.props.style),e=i({},this.props,{style:t}),delete e.at,delete e.break,delete e.columns,delete e.context,delete e.first,delete e.last,delete e.post,delete e.pre,delete e.squish,delete e.style,r.createElement("div",Object.assign({},e,{style:t}),this.renderChildren(),r.createElement("span",{style:{display:"block",clear:"both"}}," "))}})},435:function(e,t,n){t.Container=n(432),t.Grid=n(433),t.Breakpoint=n(431),t.Span=n(434)},436:function(e,t,n){var r;r=n(3),e.exports=function(e){var t,n,i,o,a,s,l,u,c,p;return i={columns:3,at:0,pre:0,post:0,squish:0,contextColumns:12,gutterRatio:.25,first:!1,last:!1},c=r(i,e),u=100/(c.contextColumns+(c.contextColumns-1)*c.gutterRatio),a=c.gutterRatio*u,n=function(e){return u*e+a*(e-1)},t=function(e){return 0===e?0:n(e)+a},p=n(c.columns),s=0===c.at&&0===c.pre&&0===c.squish?0:t(c.at)+t(c.pre)+t(c.squish),c.last&&0===c.post&&0===c.squish?l=0:0!==c.post||0!==c.squish?(l=t(c.post)+t(c.squish),c.last||(l+=a)):l=a,o=c.last?"right":"left",p+="%",s+="%",l+="%",{float:o,marginLeft:s,marginRight:l,width:p,clear:c.break?"both":"none"}}},223:function(e,t){},132:function(e,t){},478:function(e,t,n){e.exports=n.p+"static/background.038dd007.jpg"},198:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(2),l=r(s),u=n(13),c=n(478),p=r(c),d=n(479),h=r(d);n(132);var f=function(e){function t(n){i(this,t);var r=o(this,e.call(this,n));return r.state={logoSize:14,nav:[{path:"/project/",title:"Projects"},{path:"/blog/",title:"Blog"},{path:"/contact/",title:"Contact"}]},r}return a(t,e),t.prototype.render=function(){return l.default.createElement("div",{style:{backgroundImage:"url("+p.default+")",backgroundPosition:"center",backgroundSize:"cover",position:"fixed",height:"100%",width:"100%"}},l.default.createElement("canvas",{style:{display:"inline-block",width:"100%"}}),l.default.createElement("div",{style:{display:"inline-block",position:"absolute",width:"300px",textAlign:"center",marginTop:"-150px",marginLeft:"-150px",top:"50%",left:"50%"}},l.default.createElement("img",{src:h.default,style:{width:(0,u.rhythm)(this.state.logoSize)}}),l.default.createElement("nav",null,l.default.createElement("ul",null,this.state.nav.map(function(e){return l.default.createElement("li",{style:{display:"inline-block",marginRight:(0,u.rhythm)(.5)},key:e.path},l.default.createElement("a",{style:{color:"white",boxShadow:"none",fontFamily:"Montserrat, sans-serif",fontWeight:600,fontSize:(0,u.rhythm)(.5),textTransform:"uppercase"},href:e.path,title:e.title},e.title))})))))},t}(s.Component);t.default=f,e.exports=t.default},479:function(e,t,n){e.exports=n.p+"static/logo.9bf49f58.png"},200:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(2),l=r(s),u=n(435),c=n(198),p=r(c),d=n(13);n(132),n(223),n(224),n(225);var h=function(e){function t(){return i(this,t),o(this,e.apply(this,arguments))}return a(t,e),t.prototype.render=function(){var e=this.props,t=e.location,n=e.children,r="/";return l.default.createElement("div",null,t.pathname===r&&l.default.createElement("div",null,l.default.createElement(p.default,null),n()),t.pathname!==r&&l.default.createElement("div",null,l.default.createElement("div",{style:{borderWidth:""+(0,d.rhythm)(.3),borderTopStyle:"solid"}}),l.default.createElement(u.Container,{style:{maxWidth:(0,d.rhythm)(22),padding:(0,d.rhythm)(1.5)+" "+(0,d.rhythm)(.75)}},l.default.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:(0,d.rhythm)(-1)}},l.default.createElement("a",{style:{boxShadow:"none",color:"inherit",marginRight:(0,d.rhythm)(.2),textDecoration:"none"},href:"/"},"Home"),"/contact/"===t.pathname&&l.default.createElement("span",null,l.default.createElement("span",{style:{boxShadow:"none",color:"hsla(0,0%,0%,0.5)",marginRight:(0,d.rhythm)(.2),textDecoration:"none"}},"/"),"Contact"),"/project/"===t.pathname&&l.default.createElement("span",null,l.default.createElement("span",{style:{boxShadow:"none",color:"hsla(0,0%,0%,0.5)",marginRight:(0,d.rhythm)(.2),textDecoration:"none"}},"/"),"Project"),-1===["/contact/","/project/",r].indexOf(t.pathname)&&l.default.createElement("span",null,l.default.createElement("span",{style:{boxShadow:"none",color:"hsla(0,0%,0%,0.5)",marginRight:(0,d.rhythm)(.2),textDecoration:"none"}},"/"),l.default.createElement("a",{style:{boxShadow:"none",color:"inherit",textDecoration:"none"},href:"/blog/"},"Blog"))),n())))},t}(l.default.Component);t.default=h,e.exports=t.default},224:function(e,t){},225:function(e,t){}});
//# sourceMappingURL=component---src-layouts-index-js-d2774a9f2e2d88032854.js.map