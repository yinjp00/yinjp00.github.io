/*!
 *  build: vue-admin-beautiful 
 *  vue-admin-beautiful author: chuzhixin 1204505056@qq.com 
 *  vue-admin-beautiful QQ Group(QQ群): 972435319、1139183756 
 *  time: 2022-1-21 16:12:28
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-553ab9e1"],{"15e4":function(e,t,o){"use strict";o("7009")},"37f9":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"menu-container"},[o("el-row",{attrs:{gutter:30}},e._l(e.iconList,(function(t,n){return o("el-col",{key:n,attrs:{xs:12,sm:6,md:6,lg:6,xl:6}},[o("el-card",{staticClass:"icon-panel",attrs:{shadow:"never"},nativeOn:{click:function(o){return e.toURL(t)}}},[o("vab-icon",{style:{color:t.color},attrs:{icon:["fas",t.icon]}}),o("p",[e._v(e._s(t.moduleName))])],1)],1)})),1)],1)},c=[],r=o("1da1"),a=(o("96cf"),o("159b"),o("2033")),i=o("a18c"),u=o("4360"),s={name:"FunctionModule",data:function(){return{iconList:[],moduleObj:{USER:{icon:"table",color:"#5cdbd3"},XJ:{icon:"bullhorn",color:"#ff85c0"},STORE_GOODS:{icon:"book",color:"#69c0ff"},DATA:{icon:"balance-scale-left",color:"#ff9c6e"},STORE_MAGAGER:{icon:"laptop-code",color:"#ffc069"},PROMO_ACTIVETY:{icon:"coffee",color:"#ffd666"}}}},mounted:function(){this.getFunctionModule()},beforeDestroy:function(){},methods:{toURL:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function o(){var n,c;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return n=t.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(255, 255, 255, 0.7)"}),c=[],localStorage.setItem("moduleId",e.pid),o.next=5,u["default"].dispatch("routes/setAllRoutes",{moduleId:e.pid});case 5:c=o.sent,c.forEach((function(e){i["default"].addRoute(e)})),e.path?t.$router.push({path:e.path}):t.$baseMessage("无有效跳转路径","error"),n.close();case 9:case"end":return o.stop()}}),o)})))()},getFunctionModule:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var o,n,c,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=e,t.next=3,Object(a["getFunctionModule"])({moduleType:"web"});case 3:n=t.sent,c=n.code,r=n.data,200===c&&r&&r.length>0&&(o.iconList=[],r.forEach((function(e){if(e.moduleCode){var t=o.moduleObj[e.moduleCode];e.icon=t.icon,e.color=t.color}else e.icon="gift",e.color="#b37feb";o.iconList.push(e)})));case 7:case"end":return t.stop()}}),t)})))()},timeChange:function(){this.$router.push({path:"/"}),this.$store.dispatch("tabsBar/delOthersRoutes",{path:"/"})}}},l=s,d=(o("15e4"),o("2877")),f=Object(d["a"])(l,n,c,!1,null,"71bb4432",null);t["default"]=f.exports},7009:function(e,t,o){}}]);