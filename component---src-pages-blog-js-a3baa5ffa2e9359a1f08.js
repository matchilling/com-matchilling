webpackJsonp([0xc19374f83753],{37:function(e,t){e.exports={name:"Mathias Schilling",contact:{email:"m@matchilling.com",github:"https://github.com/matchilling",instagram:"https://www.instagram.com/matchilling/",lastfm:"https://www.last.fm/user/msatlastfm",linkedin:"https://www.linkedin.com/in/matchilling",reddit:"https://www.reddit.com/user/matchilling",twitter:"https://twitter.com/MatChilling"}}},44:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n(2),c=a(i),u=n(37),m=a(u),f=n(58),d=a(f),s=n(13),h=function(e){function t(){return r(this,t),l(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){return c.default.createElement("div",{style:{display:"flex"}},c.default.createElement("img",{alt:m.default.name,src:d.default,style:{height:(0,s.rhythm)(3),marginBottom:0,marginRight:(0,s.rhythm)(.5),width:(0,s.rhythm)(3)}}),c.default.createElement("p",null,"I create"," ",c.default.createElement("a",{href:"https://jugendstil.io/"},"business impact through code")," and help organisations become more effective in delivering solutions to their customer's problems. You can find me on"," ",c.default.createElement("a",{href:m.default.contact.twitter,target:"_blank"},"Twitter"),","," ",c.default.createElement("a",{href:m.default.contact.linkedin,target:"_blank"},"LinkedIn"),","," ",c.default.createElement("a",{href:m.default.contact.github,target:"_blank"},"GitHub"),","," ",c.default.createElement("a",{href:m.default.contact.reddit,target:"_blank"},"Reddit"),", and"," ",c.default.createElement("a",{href:m.default.contact.lastfm,target:"_blank"},"Last.fm"),"."))},t}(c.default.Component);t.default=h,e.exports=t.default},201:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var i=n(56),c=a(i),u=n(20),m=a(u),f=n(2),d=a(f),s=n(44),h=a(s),p=n(13),g=n(58),y=a(g),w=function(e){return d.default.createElement("a",{className:"article-preview standard",key:e.node.frontmatter.path,href:e.node.frontmatter.path},d.default.createElement("h2",{style:{fontSize:"1.4427rem",lineeHeight:"1.1",marginBottom:(0,p.rhythm)(.25),marginTop:(0,p.rhythm)(2)}},d.default.createElement(m.default,{style:{boxShadow:"none"},to:e.node.frontmatter.path},e.node.frontmatter.title)),d.default.createElement("small",null,e.node.frontmatter.date),d.default.createElement("p",{dangerouslySetInnerHTML:{__html:e.node.excerpt}}))},b=function(e,t){var n=/\"(\/static.*?)\"/g,a=e.node.html.match(n),r=a?"https://www.matchilling.com"+a[0].replace(/['"]+/g,""):void 0,l=function(e){return d.default.createElement("div",null,d.default.createElement("div",{style:{backgroundImage:"url("+e+")",height:"354px",width:"354px",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}))},o=function(e){return d.default.createElement("div",{style:{display:"flex",padding:"0 1rem 0 3rem",border:"1px solid rgba(208, 208, 208, 0.24)"}},d.default.createElement("div",{style:{margin:"auto 3rem"}},d.default.createElement("h2",{style:{fontSize:"1.2427rem",lineHeight:"1.9rem",marginBottom:(0,p.rhythm)(.25),marginTop:0}},d.default.createElement(m.default,{style:{boxShadow:"none"},to:e.node.frontmatter.path},e.node.frontmatter.title)),d.default.createElement("small",null,e.node.frontmatter.date),d.default.createElement("p",{style:{fontSize:"90%",padding:0,margin:0},dangerouslySetInnerHTML:{__html:e.node.excerpt}})))};return d.default.createElement("a",{className:"article-preview",key:e.node.frontmatter.path,href:e.node.frontmatter.path,style:{display:"block",margin:"0px -10rem 3rem"}},d.default.createElement("div",{style:{display:"flex"}},t&&l(r),t&&o(e),!t&&o(e),!t&&l(r)))},E=function(e){function t(){return r(this,t),l(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges,t="Blog",n="Blog about computer science and agile software engineering.",a=[{name:"description",content:n},{name:"og:image",content:y.default},{name:"og:title",content:"Blog"},{name:"og:description",description:n},{name:"twitter:site",content:"@matchilling"},{name:"twitter:creator",content:"@matchilling"},{name:"twitter:description",content:n},{name:"twitter:image",content:y.default}];return d.default.createElement("div",null,d.default.createElement(c.default,{title:t,meta:a}),d.default.createElement("h1",{style:{marginBottom:"3rem"}},"What’s new?"),e.map(function(e,t){if("/404/"!==e.node.frontmatter.path){var n=/\"(\/static.*?)\"/g,a=e.node.html.match(n);a?"https://www.matchilling.com"+a[0].replace(/['"]+/g,""):void 0;return t<2?d.default.createElement("div",null,d.default.createElement("span",{className:"visible-md"},b(e,t%2===0)),d.default.createElement("span",{className:"visible-xs"},w(e))):w(e)}}),d.default.createElement("hr",{style:{marginBottom:(0,p.rhythm)(1)}}),d.default.createElement("div",{style:{marginBottom:(0,p.rhythm)(2.5)}},d.default.createElement(h.default,null)))},t}(d.default.Component);t.default=E;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-blog-js-a3baa5ffa2e9359a1f08.js.map