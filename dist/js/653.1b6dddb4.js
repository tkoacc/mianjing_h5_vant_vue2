"use strict";(self["webpackChunkinter"]=self["webpackChunkinter"]||[]).push([[653],{6051:function(t,e,i){i.d(e,{DA:function(){return a},PQ:function(){return r},UA:function(){return p},a2:function(){return u},jY:function(){return o},xE:function(){return s}});var n=i(6303);const a=({current:t,pageSize:e,sorter:i})=>(0,n.Z)({url:"/h5/interview/query",method:"get",params:{current:t,pageSize:e,sorter:i}}),r=t=>(0,n.Z)({url:"/h5/interview/show",method:"get",params:{id:t}}),o=t=>(0,n.Z)({url:"/h5/interview/opt",method:"post",data:{id:t,optType:1}}),s=t=>(0,n.Z)({url:"/h5/interview/opt",method:"post",data:{id:t,optType:2}}),p=t=>(0,n.Z)({url:"/h5/interview/opt/list",method:"get",params:{optType:2,pageSize:10,page:t.page}}),u=t=>(0,n.Z)({url:"/h5/interview/opt/list",method:"get",params:{optType:1,pageSize:10,page:t.page}})},2653:function(t,e,i){i.r(e),i.d(e,{default:function(){return l}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"like-page"},[e("van-nav-bar",{attrs:{fixed:"",title:"我的喜欢"}}),e("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(t){return e("ArticleItem",{key:t.id,attrs:{item:t}})})),1)],1)},a=[],r=(i(8409),i(6051)),o={name:"like-page",data(){return{list:[],loading:!1,finished:!1,page:1}},methods:{async onLoad(){const{data:t}=await(0,r.a2)({page:this.page});this.list.push(...t.rows),this.loading=!1,this.page===t.pageTotal||0===t.rows.length?this.finished=!0:this.page++}}},s=o,p=i(5440),u=(0,p.Z)(s,n,a,!1,null,"4406aca6",null),l=u.exports}}]);
//# sourceMappingURL=653.1b6dddb4.js.map