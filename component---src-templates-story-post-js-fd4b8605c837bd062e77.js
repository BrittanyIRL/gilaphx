webpackJsonp([0xdb438399c54c],{327:function(e,t){e.exports={leadBackgroundImage:"src-templates----blog-post-module---leadBackgroundImage---RxIr2",storyHeadline:"src-templates----blog-post-module---storyHeadline---1319e",introContainer:"src-templates----blog-post-module---introContainer---Fb3_9",storyContent:"src-templates----blog-post-module---storyContent---2hsVT"}},228:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var u=l(1),s=a(u),d=l(195),c=(a(d),l(14)),i=a(c),f=l(70),p=a(f),m=l(42),h=a(m),y=l(327),b=a(y),g=l(35),E=a(g),v=function(e){function t(){return n(this,t),r(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){var e=(0,p.default)(this.props,"data.contentfulBlogPost"),t=((0,p.default)(this.props,"data.site.siteMetadata.title")||"Gila PHX",e.description.childMarkdownRemark.html);t=t.replace(/<[^>]+>/g,""),t=decodeURIComponent(t);var l=e.photographer?s.default.createElement("p",null,"Photo by ",s.default.createElement("span",null,e.photographer)):null,a=e.illustrator?s.default.createElement("p",null,"Illustration by ",s.default.createElement("span",null,e.illustrator)):null;return s.default.createElement("div",null,s.default.createElement(h.default,{title:e.title,author:e.authors,description:t,keywords:e.tags}),s.default.createElement("div",{className:E.default.fullPageWrapper},s.default.createElement("div",{className:b.default.leadBackgroundImage,style:{backgroundImage:"url("+e.leadImage.file.url+")"}},s.default.createElement("h1",{className:b.default.storyHeadline},e.title)),s.default.createElement("div",{className:b.default.introContainer},s.default.createElement("h2",null,e.subtitle),s.default.createElement("div",null,s.default.createElement("p",null,"Published on ",s.default.createElement("date",null,e.publishDate)),s.default.createElement("p",null,"Written by ",s.default.createElement("author",null,e.authors)),l,a)),s.default.createElement("div",{className:E.default.sectionWrapper},s.default.createElement("div",{className:b.default.storyContent,dangerouslySetInnerHTML:{__html:e.body.childMarkdownRemark.html}}),s.default.createElement("span",{className:E.default.invertText},s.default.createElement(i.default,{to:"/stories"},"More Stories")))))},t}(s.default.Component);t.default=v;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-story-post-js-fd4b8605c837bd062e77.js.map