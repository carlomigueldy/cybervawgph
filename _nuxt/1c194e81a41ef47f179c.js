(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{220:function(t,e,r){"use strict";var n=r(351);e.a=n.a},592:function(t,e,r){"use strict";r.r(e);r(16),r(11),r(12);var n=r(4),c=(r(9),r(6),r(42),r(46),r(7)),o=r(99);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var f={fetch:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,e.t0=Promise,e.next=4,r.dispatch("articles/fetchAll");case 4:return e.t1=e.sent,e.t2=[e.t1],e.next=8,e.t0.all.call(e.t0,e.t2);case 8:case"end":return e.stop()}}),e)})))()},data:function(){return{refreshing:!1}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({refresh:function(){var t=this,e=this.$store.dispatch;this.refreshing=!0,setTimeout((function(){t.fetchAllArticles().then((function(){t.refreshing=!1,e("notifications/success","The articles has been refreshed.",{root:!0})})).catch((function(){t.refreshing=!1,e("notifications/error","The articles could not be refreshed.",{root:!0})}))}),1500)}},Object(o.b)({fetchAllArticles:"articles/fetchAll"}))},v=r(41),h=r(72),d=r.n(h),m=r(351),O=r(521),j=r(586),w=r(534),_=r(143),y=r(587),V=r(367),P=r(588),A=r(600),T=r(40),k=r(150),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-card",{attrs:{flat:""}},[r("v-toolbar",{attrs:{color:"transparent",flat:""}},[r("v-toolbar-title",[r("h2",[t._v("\n          Articles\n        ")])]),t._v(" "),r("v-spacer")],1),t._v(" "),r("v-tabs",{attrs:{"background-color":"transparent"}},[r("v-tab",{attrs:{to:{name:"articles"}}},[t._v("All")]),t._v(" "),r("v-tab",{attrs:{to:{name:"articles-female"}}},[t._v("Female")]),t._v(" "),r("v-tab",{attrs:{to:{name:"articles-male"}}},[t._v("Male")]),t._v(" "),r("v-tab",{attrs:{to:{name:"articles-general"}}},[t._v("General")])],1),t._v(" "),r("v-divider"),t._v(" "),r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{lg:"11",md:"11",sm:"12",cols:"12"}},[r("keep-alive",[r("vue-page-transition",{attrs:{name:"fade-in-left"}},[r("nuxt-child")],1)],1)],1)],1)],1),t._v(" "),r("v-btn",{attrs:{fixed:"",fab:"",bottom:"",right:"",loading:t.refreshing},on:{click:function(e){return t.refresh()}}},[r("v-icon",[t._v("mdi-refresh")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:m.a,VCard:O.a,VCol:j.a,VDivider:w.a,VIcon:_.a,VRow:y.a,VSpacer:V.a,VTab:P.a,VTabs:A.a,VToolbar:T.a,VToolbarTitle:k.a})}}]);