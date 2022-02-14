/*!
 *  build: vue-admin-beautiful 
 *  vue-admin-beautiful author: chuzhixin 1204505056@qq.com 
 *  vue-admin-beautiful QQ Group(QQ群): 972435319、1139183756 
 *  time: 2022-1-21 16:12:28
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62a89d9e"],{"170f":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"check-container"},[a("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"每日重复",name:"1"}}),a("el-tab-pane",{attrs:{label:"每周重复",name:"2"}}),a("el-tab-pane",{attrs:{label:"每月重复",name:"3"}})],1),a("vab-query-form",[a("el-form",{ref:"queryForm",attrs:{inline:!0,model:e.queryForm},nativeOn:{submit:function(e){e.preventDefault()}}},[a("vab-query-form-left-panel",{attrs:{span:20}},[a("el-form-item",{attrs:{label:"自检任务："}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择自检任务"},on:{change:function(t){return e.ownTaskIdSelect(e.queryForm.ownTaskId)}},model:{value:e.queryForm.ownTaskId,callback:function(t){e.$set(e.queryForm,"ownTaskId",t)},expression:"queryForm.ownTaskId"}},e._l(e.ownTaskArr,(function(e){return a("el-option",{key:e.pid,attrs:{label:e.taskName+"("+e.startDate+"至"+e.endDate+")",value:e.pid}})})),1)],1),a("el-form-item",{attrs:{label:"门店类型："}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择门店类型"},on:{change:function(t){return e.storeTypeSelect(e.queryForm.storeType)}},model:{value:e.queryForm.storeType,callback:function(t){e.$set(e.queryForm,"storeType",t)},expression:"queryForm.storeType"}},e._l(e.storeTypeArr,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"任务时间："}},[a("el-date-picker",{staticStyle:{width:"300px"},attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions,"value-format":"yyyy-MM-dd HH:mm:ss"},on:{change:e.dateRangeChange},model:{value:e.dateRange,callback:function(t){e.dateRange=t},expression:"dateRange"}})],1),a("el-form-item",{attrs:{label:"门店ID："}},[a("el-input",{attrs:{placeholder:"请输入门店ID",clearable:""},model:{value:e.queryForm.storeId,callback:function(t){e.$set(e.queryForm,"storeId","string"===typeof t?t.trim():t)},expression:"queryForm.storeId"}})],1)],1),a("vab-query-form-right-panel",{attrs:{span:4}},[a("el-form-item",[a("el-button",{on:{click:function(t){return e.resetQuery("queryForm")}}},[e._v("重置")]),a("el-button",{attrs:{icon:"el-icon-search",type:"primary"},on:{click:function(t){return e.queryData("queryForm")}}},[e._v(" 查询 ")])],1)],1)],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":e.elementLoadingText,"header-cell-style":{background:"#EFF3F8"}},on:{"selection-change":e.setSelectRows}},[a("el-table-column",{attrs:{"show-overflow-tooltip":"",fixed:"",prop:"storeName",label:"门店名称","min-width":"180"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"storeNo",label:"门店编码",fixed:"","min-width":"120"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"xxxx",label:"加盟商",fixed:"","min-width":"120"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"createTime",label:"开店日期",fixed:"","min-width":"140"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"taskName",label:"任务","min-width":"140"}}),e._l(e.listkey,(function(t){return a("el-table-column",{key:t,attrs:{"show-overflow-tooltip":"",prop:t,label:t,"min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(r){var n=r.row;return[1==n[t]?a("div",[a("i",{staticClass:"checkboxIco clrno el-icon-warning"}),e._v(" 未点评 ")]):e._e(),2==n[t]?a("div",[a("i",{staticClass:"checkboxIco clrtrue el-icon-success"}),e._v(" 合格 ")]):e._e(),3==n[t]?a("div",[a("i",{staticClass:"checkboxIco clrerr el-icon-error"}),e._v(" 不合格 ")]):e._e()]}}],null,!0)})}))],2),a("el-pagination",{attrs:{background:"","current-page":e.queryForm.pageIndex,"page-size":e.queryForm.pageSize,layout:e.layout,total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},n=[],o=a("1da1"),i=(a("b0c0"),a("a9e3"),a("96cf"),a("53e7")),l={name:"BiSubSumTaskItem",data:function(){var e=this;return{activeName:"1",queryForm:{pageIndex:1,pageSize:10,scoreType:"1",ownTaskId:"",startDate:"",endDate:"",storeType:"",storeId:""},scoreTypeObj:{1:"每日重复",2:"每周重复",3:"每月重复"},ownTaskArr:[],storeTypeArr:[{value:"1",label:"加盟店"},{value:"2",label:"直营店"},{value:"3",label:"联营"}],subCommentArr:[{value:"1",label:"未点评"},{value:"2",label:"合格"},{value:"3",label:"不合格"}],dateRange:"",pickerMinDate:"",pickerMaxDate:"",pickerOptions:{onPick:function(t){var a=t.maxDate,r=t.minDate;e.pickerMinDate=r.getTime(),a&&(e.pickerMaxDate=a.getTime())},disabledDate:function(t){var a=2592e6;if(""!==e.pickerMinDate&&!e.pickerMaxDate){var r=e.pickerMinDate+a;return r>new Date&&(r=new Date),t.getTime()>r||t.getTime()>Date.now()}if(""!==e.pickerMaxDate&&""!==e.pickerMinDate){var n=e.pickerMaxDate-a,o=e.pickerMinDate+a;return o>new Date&&(o=new Date),t.getTime()<n||t.getTime()>o}return t.getTime()>Date.now()}},list:[],listkey:[],listLoading:!1,elementLoadingText:"正在加载...",layout:"total, sizes, prev, pager, next, jumper",total:0,selectRows:""}},created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.getScoreTypeList();case 1:case"end":return t.stop()}}),t)})))()},methods:{getScoreTypeList:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["getScoreTypeList"])({scoreType:e.activeName});case 2:a=t.sent,r=a.code,n=a.data,200===r&&(e.ownTaskArr=n);case 6:case"end":return t.stop()}}),t)})))()},ownTaskIdSelect:function(e){this.queryForm.ownTaskId=e},storeTypeSelect:function(e){this.queryForm.storeType=e},handleClick:function(e,t){var a=this;a.activeName=e.name,a.queryForm.scoreType=e.name,a.queryForm.ownTaskId="",a.list=[],a.queryForm.pageIndex=1,a.total=0,a.getScoreTypeList()},setSelectRows:function(e){this.selectRows=e},handleSizeChange:function(e){this.queryForm.pageSize=e,this.fetchData()},handleCurrentChange:function(e){this.queryForm.pageIndex=e,this.fetchData()},resetQuery:function(e){console.log(e),this.$refs[e].resetFields()},dateRangeChange:function(e){e&&(this.queryForm.startDate=e[0],this.queryForm.endDate=e[1])},queryData:function(e){var t=this.queryForm,a=t.startDate,r=t.endDate,n=t.ownTaskId;n?a?r?(this.queryForm.pageIndex=1,this.fetchData()):this.$baseMessage("请选择结束日期","warning"):this.$baseMessage("请选择开始日期","warning"):this.$baseMessage("请先选择任务","warning")},fetchData:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,r,n,o,l,s,c,u,m,p,d,f,b,h;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.listLoading=!0,t.next=3,Object(i["getBiSubSumTaskItemList"])(e.queryForm);case 3:if(a=t.sent,r=a.code,n=a.data,o=a.totalRecords,200==r){for(e.total=Number(o||n.length),e.listLoading=!1,l=[],s=0,c=n.length;s<c;s++){for(u={},m=0,p=n[s].itemList.length;m<p;m++)u[n[s].itemList[m].subDate]=n[s].itemList[m].subComment,d=n[s].itemList[m].subDate,n[s][d]=n[s].itemList[m].subComment;l.push(u)}for(e.list=n,f=0,b=l.length;f<b;f++)for(h in l[f])-1==e.listkey.indexOf(h)&&e.listkey.push(h)}case 8:case"end":return t.stop()}}),t)})))()}}},s=l,c=(a("bb23"),a("2877")),u=Object(c["a"])(s,r,n,!1,null,"e3a5a180",null);t["default"]=u.exports},"53e7":function(e,t,a){"use strict";a.r(t),a.d(t,"getBiSubSumTaskItemList",(function(){return n})),a.d(t,"getScoreTypeList",(function(){return o}));var r=a("b775");function n(e){return Object(r["default"])({url:"/api/yxdpc/biSubSumTaskItem/getList",method:"post",data:e})}function o(e){return Object(r["default"])({url:"/api/yxdpc/ownSub/getScoreTypeList",method:"post",data:e})}},"9d05":function(e,t,a){},bb23:function(e,t,a){"use strict";a("9d05")}}]);