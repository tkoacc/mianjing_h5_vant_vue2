"use strict";(self["webpackChunkinter"]=self["webpackChunkinter"]||[]).push([[533],{6051:function(t,e,i){i.d(e,{DA:function(){return n},PQ:function(){return a},UA:function(){return c},a2:function(){return u},jY:function(){return s},xE:function(){return o}});var r=i(6303);const n=({current:t,pageSize:e,sorter:i})=>(0,r.Z)({url:"/h5/interview/query",method:"get",params:{current:t,pageSize:e,sorter:i}}),a=t=>(0,r.Z)({url:"/h5/interview/show",method:"get",params:{id:t}}),s=t=>(0,r.Z)({url:"/h5/interview/opt",method:"post",data:{id:t,optType:1}}),o=t=>(0,r.Z)({url:"/h5/interview/opt",method:"post",data:{id:t,optType:2}}),c=t=>(0,r.Z)({url:"/h5/interview/opt/list",method:"get",params:{optType:2,pageSize:10,page:t.page}}),u=t=>(0,r.Z)({url:"/h5/interview/opt/list",method:"get",params:{optType:1,pageSize:10,page:t.page}})},7533:function(t,e,i){i.r(e),i.d(e,{default:function(){return l}});var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"article-page"},[e("nav",{staticClass:"my-nav van-hairline--bottom"},[e("a",{class:{active:"weight_desc"===t.sorter},attrs:{href:"javascript:;"},on:{click:function(e){return t.hChange("weight_desc")}}},[t._v("推荐")]),e("a",{class:{active:null===t.sorter},attrs:{href:"javascript:;"},on:{click:function(e){return t.hChange(null)}}},[t._v("最新")]),t._m(0)]),e("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(t){return e("ArticleItem",{key:t.id,attrs:{item:t}})})),1)],1)},n=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"logo"},[e("img",{attrs:{src:i(6949),alt:""}})])}],a=(i(8409),i(6051)),s={name:"article-page",data(){return{current:1,pageSize:10,sorter:"weight_desc",list:[],loading:!1,finished:!1}},methods:{async onLoad(){const t=await(0,a.DA)({current:this.current,pageSize:this.pageSize,sorter:this.sorter});this.list.push(...t.data.rows),this.current++,this.loading=!1,0===t.data.rows.length&&(this.finished=!0)},hChange(t){this.sorter=t,this.current=1,this.list=[],this.finished=!1,this.loading=!0,this.onLoad()}}},o=s,c=i(5440),u=(0,c.Z)(o,r,n,!1,null,"72c92606",null),l=u.exports},6949:function(t,e,i){t.exports=i.p+"img/logo.dbd40807.png"}}]);
//# sourceMappingURL=533.0c720d5d.js.map