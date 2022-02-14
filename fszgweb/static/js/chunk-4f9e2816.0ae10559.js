/*!
 *  build: vue-admin-beautiful 
 *  vue-admin-beautiful author: chuzhixin 1204505056@qq.com 
 *  vue-admin-beautiful QQ Group(QQ群): 972435319、1139183756 
 *  time: 2022-1-21 16:12:28
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f9e2816"],{"1a3a":function(e,t,a){"use strict";a.r(t),a.d(t,"getBiSubSumCheckList",(function(){return n})),a.d(t,"getScoreTypeList",(function(){return o}));var r=a("b775");function n(e){return Object(r["default"])({url:"/api/yxdpc/biSubSumCheck/getList",method:"post",data:e})}function o(e){return Object(r["default"])({url:"/api/yxdpc/ownSub/getScoreTypeList",method:"post",data:e})}},"514b":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"check-container"},[a("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"每日重复",name:"1"}}),a("el-tab-pane",{attrs:{label:"每周重复",name:"2"}}),a("el-tab-pane",{attrs:{label:"每月重复",name:"3"}})],1),a("vab-query-form",[a("el-form",{ref:"queryForm",attrs:{inline:!0,model:e.queryForm},nativeOn:{submit:function(e){e.preventDefault()}}},[a("vab-query-form-left-panel",{attrs:{span:20}},[a("el-form-item",{attrs:{label:"自检任务："}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择"},on:{change:function(t){return e.ownTaskIdSelect(e.queryForm.ownTaskId)}},model:{value:e.queryForm.ownTaskId,callback:function(t){e.$set(e.queryForm,"ownTaskId",t)},expression:"queryForm.ownTaskId"}},e._l(e.ownTaskArr,(function(e){return a("el-option",{key:e.pid,attrs:{label:e.taskName+"("+e.startDate+"至"+e.endDate+")",value:e.pid}})})),1)],1),a("el-form-item",{attrs:{label:"任务时间："}},[a("el-date-picker",{staticStyle:{width:"300px"},attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions,"value-format":"yyyy-MM-dd HH:mm:ss"},on:{change:e.dateRangeChange},model:{value:e.dateRange,callback:function(t){e.dateRange=t},expression:"dateRange"}})],1)],1),a("vab-query-form-right-panel",{attrs:{span:4}},[a("el-form-item",[a("el-button",{on:{click:function(t){return e.resetQuery("queryForm")}}},[e._v("重置")]),a("el-button",{attrs:{icon:"el-icon-search",type:"primary"},on:{click:function(t){return e.queryData("queryForm")}}},[e._v(" 查询 ")])],1)],1)],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":e.elementLoadingText,"header-cell-style":{background:"#EFF3F8"}},on:{"selection-change":e.setSelectRows}},[a("el-table-column",{attrs:{"show-overflow-tooltip":"",fixed:"",prop:"checkContent",label:"巡检项","min-width":"220"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"isDeduction",label:"报表统计属性","min-width":"140","render-header":e.renderHeader},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[1==r.isDeduction?a("span",{staticStyle:{color:"#67c23a"}},[e._v("是")]):a("span",{staticStyle:{color:"#e6a23c"}},[e._v("否")])]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"status",label:"状态","min-width":"120"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"subNum",label:"自检总次数","min-width":"140","render-header":e.renderHeader}}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"commentNum",label:"点评次数","min-width":"140","render-header":e.renderHeader}}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"qualifiedNoNum",label:"不合格总次数","min-width":"150","render-header":e.renderHeader}}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"次数不合格率",sortable:"","min-width":"150","render-header":e.renderHeader},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(e.get2Percent(r.qualifiedNoNum,r.subNum)))])]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"storeNum",label:"自检总门店数",sortable:"","min-width":"150","render-header":e.renderHeader}}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"qualifiedNoNumStore",label:"不合格门店数",sortable:"","min-width":"150","render-header":e.renderHeader}}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"门店不合格率",sortable:"","min-width":"150","render-header":e.renderHeader},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("span",[e._v(e._s(e.get2Percent(r.qualifiedNoNumStore,r.storeNum)))])]}}])})],1),a("el-pagination",{attrs:{background:"","current-page":e.queryForm.pageIndex,"page-size":e.queryForm.pageSize,layout:e.layout,total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},n=[],o=a("1da1"),i=(a("b0c0"),a("a9e3"),a("96cf"),a("1a3a")),s=a("61f7"),l=a("8a7f"),c=a("a026");c["default"].component("PromptMes",l["default"]);var u={name:"BiSubSumCheck",data:function(){var e=this;return{activeName:"1",queryForm:{pageIndex:1,pageSize:10,startDate:"",endDate:"",scoreType:"1",ownTaskId:""},scoreTypeObj:{1:"每日重复",2:"每周重复",3:"每月重复"},ownTaskArr:[],dateRange:"",pickerMinDate:"",pickerMaxDate:"",pickerOptions:{onPick:function(t){var a=t.maxDate,r=t.minDate;e.pickerMinDate=r.getTime(),a&&(e.pickerMaxDate=a.getTime())},disabledDate:function(t){var a=2592e6;if(""!==e.pickerMinDate&&!e.pickerMaxDate){var r=e.pickerMinDate+a;return r>new Date&&(r=new Date),t.getTime()>r||t.getTime()>Date.now()}if(""!==e.pickerMaxDate&&""!==e.pickerMinDate){var n=e.pickerMaxDate-a,o=e.pickerMinDate+a;return o>new Date&&(o=new Date),t.getTime()<n||t.getTime()>o}return t.getTime()>Date.now()}},list:[],listLoading:!1,elementLoadingText:"正在加载...",layout:"total, sizes, prev, pager, next, jumper",total:0,selectRows:""}},created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.getScoreTypeList();case 1:case"end":return t.stop()}}),t)})))()},methods:{getScoreTypeList:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["getScoreTypeList"])({scoreType:e.activeName});case 2:a=t.sent,r=a.code,n=a.data,200===r&&(e.ownTaskArr=n);case 6:case"end":return t.stop()}}),t)})))()},get2Percent:function(e,t){return Object(s["Percent2age"])(e,t)},renderHeader:function(e,t){var a=t.column,r="这里显示提示信息";return"属性"==a.label&&(r="此项巡检不合格是否扣款"),e("span",[e("span",a.label),e("prompt-mes",{props:{messages:[r]}})])},ownTaskIdSelect:function(e){this.queryForm.ownTaskId=e},handleClick:function(e,t){var a=this;a.activeName=e.name,a.queryForm.scoreType=e.name,a.queryForm.ownTaskId="",a.list=[],a.queryForm.pageIndex=1,a.total=0,a.getScoreTypeList()},setSelectRows:function(e){this.selectRows=e},handleSizeChange:function(e){this.queryForm.pageSize=e,this.fetchData()},handleCurrentChange:function(e){this.queryForm.pageIndex=e,this.fetchData()},resetQuery:function(e){console.log(e),this.$refs[e].resetFields()},dateRangeChange:function(e){e&&(this.queryForm.startDate=e[0],this.queryForm.endDate=e[1])},queryData:function(){var e=this.queryForm,t=e.startDate,a=e.endDate,r=e.ownTaskId;r?t?a?(this.queryForm.pageIndex=1,this.fetchData()):this.$baseMessage("请选择结束日期","warning"):this.$baseMessage("请选择开始日期","warning"):this.$baseMessage("请先选择任务","warning")},fetchData:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,r,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.listLoading=!0,t.next=3,Object(i["getBiSubSumCheckList"])(e.queryForm);case 3:a=t.sent,r=a.code,n=a.data,o=a.totalRecords,200==r&&(e.list=n,e.total=Number(o||n.length),e.listLoading=!1);case 8:case"end":return t.stop()}}),t)})))()}}},d=u,p=(a("9ab0"),a("2877")),m=Object(p["a"])(d,r,n,!1,null,"fee719cc",null);t["default"]=m.exports},"8a7f":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-tooltip",{attrs:{effect:"dark",placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},e._l(e.messages,(function(t){return a("span",{key:t},[e._v(" "+e._s(t)+" ")])})),0),a("i",{staticClass:"el-icon-question",staticStyle:{color:"#606266","margin-left":"3px"}})])},n=[],o={name:"PromptMes",props:["messages"]},i=o,s=a("2877"),l=Object(s["a"])(i,r,n,!1,null,"21d7b772",null);t["default"]=l.exports},"9ab0":function(e,t,a){"use strict";a("b782")},b782:function(e,t,a){}}]);