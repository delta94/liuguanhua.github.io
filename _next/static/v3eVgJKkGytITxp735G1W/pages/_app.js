(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{0:function(t,e,n){n("ho59"),t.exports=n("nOHt")},"8Bbg":function(t,e,n){t.exports=n("B5Ud")},B5Ud:function(t,e,n){"use strict";var r=n("/GRZ"),o=n("i2R6"),a=n("48fX"),c=n("tCBg"),u=n("T0f4"),i=n("vJKn");function p(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}var s=n("AroE");e.__esModule=!0,e.Container=function(t){0;return t.children},e.createUrl=v,e.default=void 0;var l=s(n("q1tI")),f=n("g/15");function h(t){var e,n,r;return i.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e=t.Component,n=t.ctx,o.next=3,i.awrap((0,f.loadGetInitialProps)(e,n));case 3:return r=o.sent,o.abrupt("return",{pageProps:r});case 5:case"end":return o.stop()}}),null,null,null,Promise)}e.AppInitialProps=f.AppInitialProps;var b=function(t){a(n,t);var e=p(n);function n(){return r(this,n),e.apply(this,arguments)}return o(n,[{key:"componentDidCatch",value:function(t,e){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,n=t.Component,r=t.pageProps,o=t.__N_SSG,a=t.__N_SSP;return l.default.createElement(n,Object.assign({},r,o||a?{}:{url:v(e)}))}}]),n}(l.default.Component);function v(t){var e=t.pathname,n=t.asPath,r=t.query;return{get query(){return r},get pathname(){return e},get asPath(){return n},back:function(){t.back()},push:function(e,n){return t.push(e,n)},pushTo:function(e,n){var r=n?e:"",o=n||e;return t.push(r,o)},replace:function(e,n){return t.replace(e,n)},replaceTo:function(e,n){var r=n?e:"",o=n||e;return t.replace(r,o)}}}e.default=b,b.origGetInitialProps=h,b.getInitialProps=h},H2AC:function(t,e,n){},emNn:function(t,e,n){},hUgY:function(t,e,n){"use strict";n.r(e);var r=n("o0o1"),o=n.n(r),a=n("Ff2n"),c=n("rePB"),u=n("q1tI"),i=n.n(u),p=n("7tlc"),s=n("8Bbg"),l=n.n(s),f=(n("emNn"),n("H2AC"),n("TlUl")),h=n("Ac47"),b=i.a.createElement;function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){Object(c.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var g={bodyStyle:{}};function y(t,e){var n=e.type;if(!Object(p.isString)(n))return{};switch(e.type){case"global":return P({},t,{},e.payload);default:console.warn("\u65b9\u6cd5".concat(e.type,"\u65e0\u6548"))}}var d=function(t){var e=t.Component,n=t.pageProps,r=(Object(a.a)(t,["Component","pageProps"]),Object(u.useReducer)(y,g)),o=r[0],c=r[1];return b(f.a.Provider,{value:{store:o,dispatch:c}},b(h.b,null,b(e,n)))};d.getInitialProps=function(t){var e,n,r,a;return o.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return e=t.Component,n=t.ctx,c.next=3,o.a.awrap(l.a.getInitialProps(t));case 3:if(r=c.sent,!e.getInitialProps){c.next=10;break}return c.next=7,o.a.awrap(e.getInitialProps(n));case 7:c.t0=c.sent,c.next=11;break;case 10:c.t0={};case 11:return a=c.t0,c.abrupt("return",P({},r,{},a));case 13:case"end":return c.stop()}}),null,null,null,Promise)},e.default=d},ho59:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("hUgY")}])},o0o1:function(t,e,n){t.exports=n("ls82")}},[[0,2,1,3,0,4]]]);