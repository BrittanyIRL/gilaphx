webpackJsonp([0xdf49b16e737],{79:function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function o(e,t){return t={exports:{}},e(t,t.exports),t.exports}function a(e){return function(){return e}}function i(e,t,r,n,o,a,i,u){if(p(t),!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[r,n,o,a,i,u],c=0;s=new Error(t.replace(/%s/g,function(){return l[c++]})),s.name="Invariant Violation"}throw s.framesToPop=1,s}}function u(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function s(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}var l=n(r(1)),c=function(){};c.thatReturns=a,c.thatReturnsFalse=a(!1),c.thatReturnsTrue=a(!0),c.thatReturnsNull=a(null),c.thatReturnsThis=function(){return this},c.thatReturnsArgument=function(e){return e};var f=c,p=function(e){},d=i,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,v=(s()?Object.assign:function(e,t){for(var r,n,o=u(e),a=1;a<arguments.length;a++){r=Object(arguments[a]);for(var i in r)h.call(r,i)&&(o[i]=r[i]);if(m){n=m(r);for(var s=0;s<n.length;s++)y.call(r,n[s])&&(o[n[s]]=r[n[s]])}}return o},"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"),b=v,w=function(){function e(e,t,r,n,o,a){a!==b&&d(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return r.checkPropTypes=f,r.PropTypes=r,r},g=o(function(e){e.exports=w()}),O="production",E=function(e,t,r,n,o,a,i,u){if("production"!==O&&void 0===t)throw new Error("invariant requires an error message argument");if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[r,n,o,a,i,u],c=0;s=new Error(t.replace(/%s/g,function(){return l[c++]})),s.name="Invariant Violation"}throw s.framesToPop=1,s}},j=E,_=function(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}).toLowerCase()},T=_,M=function(e){var t=/[height|width]$/;return t.test(e)},C=function(e){var t="",r=Object.keys(e);return r.forEach(function(n,o){var a=e[n];n=T(n),M(n)&&"number"==typeof a&&(a+="px"),t+=a===!0?n:a===!1?"not "+n:"("+n+": "+a+")",o<r.length-1&&(t+=" and ")}),t},P=function(e){var t="";return"string"==typeof e?e:e instanceof Array?(e.forEach(function(r,n){t+=C(r),n<e.length-1&&(t+=", ")}),t):C(e)},S=P,R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},I=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},k=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},L=function(e){function t(){var r,n,o;x(this,t);for(var a=arguments.length,i=Array(a),u=0;u<a;u++)i[u]=arguments[u];return r=n=k(this,e.call.apply(e,[this].concat(i))),n.state={matches:n.props.defaultMatches},n.updateMatches=function(){return n.setState({matches:n.mediaQueryList.matches})},o=r,k(n,o)}return I(t,e),t.prototype.componentWillMount=function(){if("object"===("undefined"==typeof window?"undefined":R(window))){var e=this.props.targetWindow||window;j("function"==typeof e.matchMedia,"<Media targetWindow> does not support `matchMedia`.");var t=this.props.query;"string"!=typeof t&&(t=S(t)),this.mediaQueryList=e.matchMedia(t),this.mediaQueryList.addListener(this.updateMatches),this.updateMatches()}},t.prototype.componentWillUnmount=function(){this.mediaQueryList.removeListener(this.updateMatches)},t.prototype.render=function e(){var t=this.props,r=t.children,e=t.render,n=this.state.matches;return e?n?e():null:r?"function"==typeof r?r(n):(!Array.isArray(r)||r.length)&&n?l.Children.only(r):null:null},t}(l.Component);L.propTypes={defaultMatches:g.bool,query:g.oneOfType([g.string,g.object,g.arrayOf(g.object.isRequired)]).isRequired,render:g.func,children:g.oneOfType([g.node,g.func]),targetWindow:g.object},L.defaultProps={defaultMatches:!0},e.exports=L},224:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=r(1),a=n(o),i=r(329),u=n(i),s=r(12),l=n(s),c=r(79);n(c);t.default=function(e){var t=e.article,r=t.previewImage?a.default.createElement("img",{src:""+t.previewImage.file.url,alt:t.previewImage.title}):null,n=t.abstract?a.default.createElement("p",{dangerouslySetInnerHTML:{__html:t.abstract.childMarkdownRemark.html}}):null,o=[u.default.previewContainer];return e.even&&(o=[u.default.previewContainer,u.default.even]),a.default.createElement("div",{className:o.join(" ")},a.default.createElement("div",{className:u.default.previewImage},r),a.default.createElement("div",{className:u.default.previewContent},a.default.createElement("h2",null,t.title),a.default.createElement("h3",null,t.subtitle),a.default.createElement("p",{className:u.default.small},a.default.createElement("date",null,t.publishDate)," | ",a.default.createElement("author",null,t.authors)),n,a.default.createElement(l.default,{to:"/stories/"+t.slug},"Read More")))},e.exports=t.default},329:function(e,t){e.exports={previewContainer:"src-components-stories----story-preview-module---previewContainer---1o38B",even:"src-components-stories----story-preview-module---even---3uoHs",previewImage:"src-components-stories----story-preview-module---previewImage---1Hp3I",previewContent:"src-components-stories----story-preview-module---previewContent---znN3T",small:"src-components-stories----story-preview-module---small---2xdJ-"}},229:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var u=r(1),s=n(u),l=r(12),c=(n(l),r(73)),f=n(c),p=r(42),d=n(p),m=r(224),h=n(m),y=r(25),v=n(y),b=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=((0,f.default)(this,"props.data.site.siteMetadata.title"),(0,f.default)(this,"props.data.allContentfulBlogPost.edges"));return s.default.createElement("div",null,s.default.createElement(d.default,{title:"Gila Stories",description:"Stories from Gila"}),s.default.createElement("div",{className:v.default.fullPageWrapper},e.map(function(e,t){var r=e.node,n=t%2===0;return s.default.createElement(h.default,{key:t,article:r,even:n})})))},t}(s.default.Component);t.default=b;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-stories-js-ebe18daa2374def67e8b.js.map