/*!
 *  build: vue-admin-beautiful 
 *  vue-admin-beautiful author: chuzhixin 1204505056@qq.com 
 *  vue-admin-beautiful QQ Group(QQ群): 972435319、1139183756 
 *  time: 2022-1-21 16:12:28
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1135ee7e"],{4499:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-tooltip",{attrs:{effect:"dark",placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},e._l(e.messages,(function(t){return a("span",{key:t},[e._v(" "+e._s(t)+" ")])})),0),a("i",{staticClass:"el-icon-question",staticStyle:{color:"#606266","margin-left":"3px"}})])},n=[],o={name:"PromptMes",props:["messages"]},l=o,s=a("2877"),i=Object(s["a"])(l,r,n,!1,null,"01afaa10",null);t["default"]=i.exports},ac47:function(e,t,a){"use strict";a("bcee")},b32d:function(e,t,a){"use strict";a.r(t),a.d(t,"getBiSubSumTaskList",(function(){return n})),a.d(t,"getScoreTypeList",(function(){return o}));var r=a("b775");function n(e){return Object(r["default"])({url:"/api/yxdpc/biSubSumTask/getList",method:"post",data:e})}function o(e){return Object(r["default"])({url:"/api/yxdpc/ownSub/getScoreTypeList",method:"post",data:e})}},bcee:function(e,t,a){},caec:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"check-container"},[a("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"每日重复",name:"1"}}),a("el-tab-pane",{attrs:{label:"每周重复",name:"2"}}),a("el-tab-pane",{attrs:{label:"每月重复",name:"3"}})],1),a("vab-query-form",[a("el-form",{ref:"queryForm",attrs:{inline:!0,model:e.queryForm},nativeOn:{submit:function(e){e.preventDefault()}}},[a("vab-query-form-left-panel",{attrs:{span:20}},[a("el-form-item",{attrs:{label:"自检任务："}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择自检任务"},model:{value:e.queryForm.ownTaskId,callback:function(t){e.$set(e.queryForm,"ownTaskId",t)},expression:"queryForm.ownTaskId"}},e._l(e.ownTaskArr,(function(e){return a("el-option",{key:e.pid,attrs:{label:e.taskName+"("+e.startDate+"至"+e.endDate+")",value:e.pid}})})),1)],1),a("el-form-item",{attrs:{label:"任务时间："}},[a("el-date-picker",{staticStyle:{width:"300px"},attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd HH:mm:ss","picker-options":e.pickerOptions},on:{change:e.dateRangeChange},model:{value:e.dateRange,callback:function(t){e.dateRange=t},expression:"dateRange"}})],1),a("el-form-item",{attrs:{label:"门店："}},[a("el-input",{attrs:{placeholder:"请输入门店",clearable:""},model:{value:e.queryForm.taskName,callback:function(t){e.$set(e.queryForm,"taskName","string"===typeof t?t.trim():t)},expression:"queryForm.taskName"}})],1)],1),a("vab-query-form-right-panel",{attrs:{span:4}},[a("el-form-item",[a("el-button",{on:{click:function(t){return e.resetQuery("queryForm")}}},[e._v("重置")]),a("el-button",{attrs:{icon:"el-icon-search",type:"primary"},on:{click:function(t){return e.queryData("queryForm")}}},[e._v(" 查询 ")])],1)],1)],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":e.elementLoadingText,"header-cell-style":{background:"#EFF3F8"}},on:{"selection-change":e.setSelectRows}},[a("el-table-column",{attrs:{"show-overflow-tooltip":"",fixed:"",prop:"storeName",label:"门店名称","min-width":"180"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"createTime",label:"开店日期",sortable:"","min-width":"140"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"taskName",label:"任务名称","min-width":"150"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"dayNum",label:"应完成报告数",sortable:"","min-width":"150","render-header":e.renderHeader}}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"任务完成率",sortable:"","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(e.get2Percent(r.subNum,r.dayNum)))])]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"commentNum",label:"已点评报告数",sortable:"","min-width":"140"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"点评率",sortable:"","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(e.get2Percent(r.commentNum,r.subNum)))])]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"qualifiedNum",label:"合格报告数",sortable:"","min-width":"120"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"点评合格率",sortable:"","min-width":"140"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(e.get2Percent(r.qualifiedNum,r.commentNum)))])]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"avgSubRule",label:"点评平均分",sortable:"","min-width":"120"}})],1),a("el-pagination",{attrs:{background:"","current-page":e.queryForm.pageIndex,"page-size":e.queryForm.pageSize,layout:e.layout,total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},n=[],o=a("1da1"),l=(a("b0c0"),a("a9e3"),a("96cf"),a("b32d")),s=a("61f7"),i=a("4499"),c=a("a026");c["default"].component("PromptMes",i["default"]);var u={name:"BiSubSumTask",data:function(){var e=this;return{activeName:"1",queryForm:{pageIndex:1,pageSize:10,startDate:"",endDate:"",ownTaskId:"",scoreType:"1"},scoreTypeObj:{1:"每日重复",2:"每周重复",3:"每月重复"},ownTaskArr:[],status:[{value:"0",label:"结束"},{value:"1",label:"执行中"},{value:"2",label:"已停用"}],dateRange:"",pickerMinDate:"",pickerMaxDate:"",pickerOptions:{onPick:function(t){var a=t.maxDate,r=t.minDate;e.pickerMinDate=r.getTime(),a&&(e.pickerMaxDate=a.getTime())},disabledDate:function(t){var a=2592e6;if(""!==e.pickerMinDate&&!e.pickerMaxDate){var r=e.pickerMinDate+a;return r>new Date&&(r=new Date),t.getTime()>r||t.getTime()>Date.now()}if(""!==e.pickerMaxDate&&""!==e.pickerMinDate){var n=e.pickerMaxDate-a,o=e.pickerMinDate+a;return o>new Date&&(o=new Date),t.getTime()<n||t.getTime()>o}return t.getTime()>Date.now()}},statusValue:"",list:[],listLoading:!1,elementLoadingText:"正在加载...",layout:"total, sizes, prev, pager, next, jumper",total:0,selectRows:""}},created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.getScoreTypeList();case 1:case"end":return t.stop()}}),t)})))()},methods:{getScoreTypeList:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(l["getScoreTypeList"])({scoreType:e.activeName});case 2:a=t.sent,r=a.code,n=a.data,200===r&&(e.ownTaskArr=n);case 6:case"end":return t.stop()}}),t)})))()},get2Percent:function(e,t){return Object(s["Percent2age"])(e,t)},renderHeader:function(e,t){var a=t.column;return e("span",[e("span",a.label),e("prompt-mes",{props:{messages:["这里显示提示信息"]}})])},handleClick:function(e,t){var a=this;a.activeName=e.name,a.queryForm.scoreType=e.name,a.queryForm.ownTaskId="",a.list=[],a.queryForm.pageIndex=1,a.total=0,a.getScoreTypeList()},setSelectRows:function(e){this.selectRows=e},handleSizeChange:function(e){this.queryForm.pageSize=e,this.fetchData()},handleCurrentChange:function(e){this.queryForm.pageNo=e,this.fetchData()},resetQuery:function(e){console.log(e),this.$refs[e].resetFields()},dateRangeChange:function(e){e&&(this.queryForm.startDate=e[0],this.queryForm.endDate=e[1])},queryData:function(){var e=this.queryForm,t=e.startDate,a=e.endDate,r=e.ownTaskId;r?t?a?(this.queryForm.pageIndex=1,this.fetchData()):this.$baseMessage("请选择结束日期","warning"):this.$baseMessage("请选择开始日期","warning"):this.$baseMessage("请先选择任务","warning")},fetchData:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,r,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.listLoading=!0,t.next=3,Object(l["getBiSubSumTaskList"])(e.queryForm);case 3:a=t.sent,r=a.code,n=a.data,o=a.totalRecords,200===r&&(e.list=n,e.total=Number(o||n.length),e.listLoading=!1);case 8:case"end":return t.stop()}}),t)})))()}}},m=u,p=(a("ac47"),a("2877")),d=Object(p["a"])(m,r,n,!1,null,"b0eadfaa",null);t["default"]=d.exports}}]);