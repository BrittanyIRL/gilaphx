webpackJsonp([0xdf49b16e737],{213:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(1),n=l(r),o=a(316),u=l(o),i=a(11),c=l(i);t.default=function(e){var t=e.article;return n.default.createElement("div",{className:u.default.preview},n.default.createElement("img",{src:t.heroImage.file.url+"?fit=scale&w=350&h=196",alt:""}),n.default.createElement("h3",{className:u.default.previewTitle},n.default.createElement(c.default,{to:"/blog/"+t.slug},t.title)),n.default.createElement("small",null,t.publishDate),n.default.createElement("p",{dangerouslySetInnerHTML:{__html:t.description.childMarkdownRemark.html}}))},e.exports=t.default},316:function(e,t){e.exports={previewTitle:"src-components----article-preview-module---previewTitle---16pYm",tag:"src-components----article-preview-module---tag---27JAs"}},225:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var u=a(1),i=l(u),c=a(11),s=(l(c),a(70)),f=l(s),d=a(76),p=l(d),m=a(323),h=l(m),g=a(213),w=l(g),v=function(e){function t(){return r(this,t),n(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){var e=(0,f.default)(this,"props.data.site.siteMetadata.title"),t=(0,f.default)(this,"props.data.allContentfulBlogPost.edges");return i.default.createElement("div",{style:{background:"#fff"}},i.default.createElement(p.default,{title:e}),i.default.createElement("div",{className:"wrapper"},i.default.createElement("div",{className:h.default.hero},"Blog"),i.default.createElement("h2",{className:"section-headline"},"Recent articles"),i.default.createElement("ul",{className:"article-list"},t.map(function(e){var t=e.node;return i.default.createElement("li",{key:t.slug},i.default.createElement(w.default,{article:t}))}))))},t}(i.default.Component);t.default=v;t.pageQuery="** extracted graphql fragment **"},323:function(e,t){e.exports={hero:"src-pages----stories-module---hero---QwTLO"}}});
//# sourceMappingURL=component---src-pages-stories-js-1249f3629c047aee019c.js.map