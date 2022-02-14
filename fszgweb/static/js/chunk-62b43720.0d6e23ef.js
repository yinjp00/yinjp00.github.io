/*!
 *  build: vue-admin-beautiful 
 *  vue-admin-beautiful author: chuzhixin 1204505056@qq.com 
 *  vue-admin-beautiful QQ Group(QQ群): 972435319、1139183756 
 *  time: 2022-1-21 16:12:28
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62b43720"],{"0e52":function(e,t,r){},"29e5":function(e,t,r){},"3a7d":function(e,t,r){},"3e50":function(e,t,r){"use strict";r("0e52")},"49bd":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-dialog",{attrs:{title:e.title,visible:e.dialogFormVisible,width:"500px",top:"15vh"},on:{"update:visible":function(t){e.dialogFormVisible=t},close:e.close}},[r("div",{staticClass:"dialogCus"},[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"120px"}},[r("el-form-item",{staticClass:"disFlex",attrs:{label:"督导名称:",prop:"employeesName"}},[r("el-input",{attrs:{autocomplete:"off",readonly:""},model:{value:e.form.employeesName,callback:function(t){e.$set(e.form,"employeesName",t)},expression:"form.employeesName"}}),r("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary"},on:{click:e.selEmployees}},[e._v(" 选择督导 ")])],1),r("el-form-item",{staticClass:"disFlex",attrs:{label:"门店名称:",prop:"storeName"}},[r("el-input",{attrs:{autocomplete:"off",readonly:""},model:{value:e.form.storeName,callback:function(t){e.$set(e.form,"storeName",t)},expression:"form.storeName"}}),r("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary"},on:{click:e.selStore}},[e._v(" 选择门店 ")])],1)],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.close}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确 定")])],1)]),r("employees",{ref:"employees",on:{employeesInfo:e.getEmployeesInfo}}),r("stores",{ref:"stores",on:{storeInfo:e.getStoreInfo}})],1)},o=[],n=r("1da1"),i=(r("96cf"),r("b0c0"),r("8b3a")),s=r("4b99"),l=r("ddb1"),c={name:"Edit",components:{Employees:s["default"],Stores:l["default"]},data:function(){return{form:{employeesId:"",employeesName:"",storeId:"",storeName:""},rules:{employeesName:[{required:!0,trigger:"blur",message:"请选择督导"}],storeName:[{required:!0,trigger:"blur",message:"请选择门店"}]},storeIdArr:[],title:"",dialogFormVisible:!1}},computed:{},created:function(){this.getEmployees(),this.getStoreList()},methods:{getStoreInfo:function(e){this.form.storeName=e.storeName,this.form.storeId=e.pid},getEmployeesInfo:function(e){this.form.employeesName=e.name,this.form.employeesId=e.pid},showEdit:function(e){e?(this.title="编辑",this.form=Object.assign({},e)):this.title="新增",this.dialogFormVisible=!0},close:function(){this.$refs["form"].resetFields(),this.form=this.$options.data().form,this.dialogFormVisible=!1},getEmployees:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.listLoading=!0;case 1:case"end":return t.stop()}}),t)})))()},getStoreList:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.listLoading=!0,r={code:200,message:null,data:[{storeNo:"FXM002",pid:0xfdfa09391c00000,storeName:"厦门思明老虎城店"},{storeNo:"FXM754",pid:0xfdfaa0fab400000,storeName:"厦门思明软件园店"},{storeNo:"FXM865",pid:0xfdfad0a9f000000,storeName:"厦门湖里前社店"},{storeNo:"FXM564",pid:0xfe0873307800000,storeName:"厦门湖里枋湖店（撤店）"},{storeNo:"FXM795",pid:0xfe088e6fa400000,storeName:"厦门思明前埔店"},{storeNo:"FXM648",pid:0xfe094be4f400000,storeName:"厦门思明岭兜店（撤店）"},{storeNo:"FXM146",pid:0xfe095cb8f000000,storeName:"厦门湖里SM店"},{storeNo:"FXM468",pid:0xfe0993df5000000,storeName:"厦门湖里SM二店"},{storeNo:"FXM714",pid:0xfe09b254e400000,storeName:"厦门湖里吕厝北店"},{storeNo:"FXM389",pid:0xfe60ff57cc00000,storeName:"厦门湖里安兜二店"}],totalRecords:3},a=r.code,o=r.data,200==a&&(e.storeIdArr=o,e.listLoading=!1);case 3:case"end":return t.stop()}}),t)})))()},selEmployees:function(e){this.$refs["employees"].showEdit()},selStore:function(e){this.$refs["stores"].showEdit()},save:function(){var e=this;this.$refs["form"].validate(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(r){var a,o,n,s,l,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=13;break}return a={},o=e.form,n=o.employeesId,s=o.storeId,n&&(a.employeesId=n),s&&(a.storeId=s),t.next=7,Object(i["employeeSave"])(a);case 7:l=t.sent,l.message,c=l.code,200===c&&(e.$emit("fetch-data"),e.close()),t.next=14;break;case 13:return t.abrupt("return",!1);case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}},u=c,m=(r("8557"),r("2877")),d=Object(m["a"])(u,a,o,!1,null,null,null);t["default"]=d.exports},"4b99":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"check-container"},[r("el-dialog",{attrs:{title:"督导列表",visible:e.dialogFormVisible,width:"500px",top:"15vh"},on:{"update:visible":function(t){e.dialogFormVisible=t},close:e.close}},[r("vab-query-form",[r("el-form",{ref:"form",attrs:{inline:!0,model:e.queryForm},nativeOn:{submit:function(e){e.preventDefault()}}},[r("el-form-item",{attrs:{label:"督导名称："}},[r("el-input",{attrs:{placeholder:"请输入督导名称",clearable:""},model:{value:e.queryForm.employeesName,callback:function(t){e.$set(e.queryForm,"employeesName","string"===typeof t?t.trim():t)},expression:"queryForm.employeesName"}})],1),r("el-form-item",[r("el-button",{attrs:{icon:"el-icon-search",type:"primary"},on:{click:e.queryData}},[e._v(" 查询 ")])],1)],1)],1),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":e.elementLoadingText,"header-cell-style":{background:"#EFF3F8"},"highlight-current-row":""},on:{"current-change":e.handleCurTr}},[r("el-table-column",{attrs:{type:"index",width:"50"}}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"name",label:"督导名称"}})],1),r("el-pagination",{attrs:{background:"","current-page":e.queryForm.pageIndex,"page-size":e.queryForm.pageSize,layout:e.layout,total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},o=[],n=r("1da1"),i=(r("96cf"),r("a9e3"),r("8b3a")),s={name:"Employees",components:{},data:function(){return{queryForm:{pageIndex:1,pageSize:10,employeesName:""},list:[],listLoading:!0,elementLoadingText:"正在加载...",layout:"total, sizes, prev, pager, next, jumper",total:0,dialogFormVisible:!1}},created:function(){},mounted:function(){this.fetchData()},methods:{showEdit:function(){this.dialogFormVisible=!0},close:function(){this.$refs["form"].resetFields(),this.form=this.$options.data().form,this.dialogFormVisible=!1},handleSizeChange:function(e){this.queryForm.pageSize=e,this.fetchData()},handleCurrentChange:function(e){this.queryForm.pageIndex=e,this.fetchData()},handleCurTr:function(e){this.dialogFormVisible=!1,this.$emit("employeesInfo",e)},queryData:function(){this.queryForm.pageIndex=1,this.fetchData()},fetchData:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,a,o,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.listLoading=!0,t.next=3,Object(i["getEmployees"])(e.queryForm);case 3:r=t.sent,a=r.code,o=r.data,n=r.totalRecords,200==a&&(e.list=o,e.total=Number(n||o.length),e.listLoading=!1);case 8:case"end":return t.stop()}}),t)})))()}}},l=s,c=(r("af4e"),r("2877")),u=Object(c["a"])(l,a,o,!1,null,"e39b4328",null);t["default"]=u.exports},"5c6cc":function(e,t,r){e.exports={"menu-color":"rgba(255,255,255,.95)","menu-color-active":"rgba(255,255,255,.95)","menu-background":"#282c34"}},8557:function(e,t,r){"use strict";r("5c6cc")},"8b3a":function(e,t,r){"use strict";r.r(t),r.d(t,"getEmployeesList",(function(){return o})),r.d(t,"employeeSave",(function(){return n})),r.d(t,"doDelete",(function(){return i})),r.d(t,"getEmployees",(function(){return s})),r.d(t,"getStoreList",(function(){return l}));var a=r("b775");function o(e){return Object(a["default"])({url:"/api/yxdpc/employeesStore/getList",method:"post",data:e})}function n(e){return Object(a["default"])({url:"/api/yxdpc/employeesStore/save",method:"post",data:e})}function i(e){return Object(a["default"])({url:"/api/yxdpc/employeesStore/delete",method:"post",data:e})}function s(e){return Object(a["default"])({url:"/api/yxdpc/common/getEmployees",method:"post",data:e})}function l(e){return Object(a["default"])({url:"/api/yxdpc/common/getStoreList",method:"post",data:e})}},"8dac":function(e,t,r){"use strict";r("29e5")},"94f7":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"check-container"},[r("vab-query-form",[r("el-form",{attrs:{inline:!0,model:e.queryForm},nativeOn:{submit:function(e){e.preventDefault()}}},[r("vab-query-form-left-panel",{attrs:{span:18}},[r("el-form-item",{attrs:{label:"督导名称："}},[r("el-input",{attrs:{placeholder:"请输入督导名称",clearable:""},model:{value:e.queryForm.employeesName,callback:function(t){e.$set(e.queryForm,"employeesName","string"===typeof t?t.trim():t)},expression:"queryForm.employeesName"}})],1),r("el-form-item",{attrs:{label:"门店名称："}},[r("el-input",{attrs:{placeholder:"请输入门店名称",clearable:""},model:{value:e.queryForm.storeName,callback:function(t){e.$set(e.queryForm,"storeName","string"===typeof t?t.trim():t)},expression:"queryForm.storeName"}})],1)],1),r("vab-query-form-right-panel",{attrs:{span:6}},[r("el-form-item",[r("el-button",{attrs:{icon:"el-icon-search",type:"primary"},on:{click:e.queryData}},[e._v(" 查询 ")]),r("el-button",{attrs:{icon:"el-icon-plus",type:"primary"},on:{click:e.handleEdit}},[e._v(" 新增 ")])],1)],1)],1)],1),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":e.elementLoadingText,"header-cell-style":{background:"#EFF3F8"}}},[r("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"employeesName",label:"督导名称"}}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"storeName",label:"门店名称"}}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"操作",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[r("el-button",{attrs:{type:"text"},on:{click:function(t){return e.handleDelete(a)}}},[e._v("删除")])]}}])})],1),r("el-pagination",{attrs:{background:"","current-page":e.queryForm.pageIndex,"page-size":e.queryForm.pageSize,layout:e.layout,total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),r("edit",{ref:"edit",on:{"fetch-data":e.fetchData}})],1)},o=[],n=r("1da1"),i=(r("a15b"),r("d81d"),r("a9e3"),r("96cf"),r("8b3a")),s=r("49bd"),l={name:"EmployeesStore",components:{Edit:s["default"]},data:function(){return{queryForm:{pageIndex:1,pageSize:10,employeesName:"",storeName:""},list:[],listLoading:!0,elementLoadingText:"正在加载...",layout:"total, sizes, prev, pager, next, jumper",total:0,selectRows:""}},created:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.fetchData();case 1:case"end":return t.stop()}}),t)})))()},methods:{handleEdit:function(e){e.pid?this.$refs["edit"].showEdit(e):this.$refs["edit"].showEdit()},handleDelete:function(e){var t=this;if(e.pid)this.$baseConfirm("确定删除该条信息吗？",null,Object(n["a"])(regeneratorRuntime.mark((function r(){var a,o,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(i["doDelete"])({uuid:e.pid});case 2:a=r.sent,o=a.message,n=a.code,200===n&&(t.$baseMessage(o||"删除成功！","success"),t.fetchData());case 6:case"end":return r.stop()}}),r)}))));else{if(!(this.selectRows.length>0))return this.$baseMessage("未选中任何行","error"),!1;var r=this.selectRows.map((function(e){return e.pid})).join();this.$baseConfirm("你确定要删除选中项吗？",null,Object(n["a"])(regeneratorRuntime.mark((function e(){var a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["doDelete"])({ids:r});case 2:a=e.sent,o=a.msg,t.$baseMessage(o||"删除成功！","success"),t.fetchData();case 6:case"end":return e.stop()}}),e)}))))}},handleSizeChange:function(e){this.queryForm.pageSize=e,this.fetchData()},handleCurrentChange:function(e){this.queryForm.pageIndex=e,this.fetchData()},queryData:function(){this.queryForm.pageIndex=1,this.fetchData()},fetchData:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,a,o,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.listLoading=!0,t.next=3,Object(i["getEmployeesList"])(e.queryForm);case 3:r=t.sent,a=r.code,o=r.data,n=r.totalRecords,200==a&&(e.list=o,e.total=Number(n||o.length),e.listLoading=!1);case 8:case"end":return t.stop()}}),t)})))()}}},c=l,u=(r("3e50"),r("2877")),m=Object(u["a"])(c,a,o,!1,null,"719c7390",null);t["default"]=m.exports},af4e:function(e,t,r){"use strict";r("3a7d")},ddb1:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"check-container"},[r("el-dialog",{attrs:{title:"门店列表",visible:e.dialogFormVisible,width:"500px",top:"15vh"},on:{"update:visible":function(t){e.dialogFormVisible=t},close:e.close}},[r("vab-query-form",[r("el-form",{ref:"form",attrs:{inline:!0,model:e.queryForm},nativeOn:{submit:function(e){e.preventDefault()}}},[r("el-form-item",{attrs:{label:"门店名称："}},[r("el-input",{attrs:{placeholder:"请输入门店名称",clearable:""},model:{value:e.queryForm.storeName,callback:function(t){e.$set(e.queryForm,"storeName","string"===typeof t?t.trim():t)},expression:"queryForm.storeName"}})],1),r("el-form-item",[r("el-button",{attrs:{icon:"el-icon-search",type:"primary"},on:{click:e.queryData}},[e._v(" 查询 ")])],1)],1)],1),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":e.elementLoadingText,"header-cell-style":{background:"#EFF3F8"},"highlight-current-row":""},on:{"current-change":e.handleCurTr}},[r("el-table-column",{attrs:{type:"index",width:"50"}}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"storeName",label:"门店名称"}})],1),r("el-pagination",{attrs:{background:"","current-page":e.queryForm.pageIndex,"page-size":e.queryForm.pageSize,layout:e.layout,total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},o=[],n=r("1da1"),i=(r("96cf"),r("a9e3"),r("8b3a")),s={name:"Stores",components:{},data:function(){return{queryForm:{pageIndex:1,pageSize:10,storeName:""},list:[],listLoading:!0,elementLoadingText:"正在加载...",layout:"total, sizes, prev, pager, next, jumper",total:0,dialogFormVisible:!1}},created:function(){},mounted:function(){this.fetchData()},methods:{showEdit:function(){this.dialogFormVisible=!0},close:function(){this.$refs["form"].resetFields(),this.form=this.$options.data().form,this.dialogFormVisible=!1},handleSizeChange:function(e){this.queryForm.pageSize=e,this.fetchData()},handleCurrentChange:function(e){this.queryForm.pageIndex=e,this.fetchData()},handleCurTr:function(e){this.dialogFormVisible=!1,this.$emit("storeInfo",e)},queryData:function(){this.queryForm.pageIndex=1,this.fetchData()},fetchData:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,a,o,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.listLoading=!0,t.next=3,Object(i["getStoreList"])(e.queryForm);case 3:r=t.sent,a=r.code,o=r.data,n=r.totalRecords,200==a&&(e.list=o,e.total=Number(n||o.length),e.listLoading=!1);case 8:case"end":return t.stop()}}),t)})))()}}},l=s,c=(r("8dac"),r("2877")),u=Object(c["a"])(l,a,o,!1,null,"373d30f5",null);t["default"]=u.exports}}]);