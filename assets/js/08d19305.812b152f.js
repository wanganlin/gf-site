"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["80147"],{403473:function(e,i,n){n.r(i),n.d(i,{metadata:()=>r,contentTitle:()=>s,default:()=>j,assets:()=>h,toc:()=>o,frontMatter:()=>d});var r=JSON.parse('{"id":"release/v2.1 2022-06-22","title":"v2.1 2022-06-22","description":"\u672C\u6B21GoFrame v2.1\u7248\u672C\u53D1\u5E03\u65B0\u589E\u4E86\u591A\u4E2A\u4E1A\u52A1\u5B9E\u7528\u7279\u6027\uFF0C\u5305\u62EC\u6570\u636E\u5E93\u7EC4\u4EF6\u548C\u7F51\u7EDC\u7EC4\u4EF6\u7684\u6539\u8FDB\uFF0C\u652F\u6301\u66F4\u7075\u6D3B\u7684SQL\u6761\u4EF6\u7EC4\u5408\u548C\u81EA\u5B9A\u4E49\u94A9\u5B50\u4E8B\u4EF6\u5904\u7406\u3002\u670D\u52A1\u6CE8\u518C\u3001\u8D1F\u8F7D\u5747\u8861\u548C\u7CFB\u7EDF\u7EC4\u4EF6\u529F\u80FD\u5F97\u5230\u589E\u5F3A\u3002\u540C\u65F6\u4F18\u5316\u5185\u5B58\u4F7F\u7528\u548C\u6539\u8FDB\u670D\u52A1\u53D1\u73B0\u903B\u8F91\u3002","source":"@site/versioned_docs/version-2.7.x/release/v2.1 2022-06-22.md","sourceDirName":"release","slug":"/release/v2.1","permalink":"/2.7.x/release/v2.1","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/release/v2.1 2022-06-22.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":6,"frontMatter":{"slug":"/release/v2.1","title":"v2.1 2022-06-22","sidebar_position":6,"hide_title":true,"keywords":["GoFrame","\u7248\u672C\u66F4\u65B0","\u7279\u6027\u6539\u8FDB","Bug\u4FEE\u590D","\u6570\u636E\u5E93\u7EC4\u4EF6","\u670D\u52A1\u6CE8\u518C","\u8D1F\u8F7D\u5747\u8861","\u7F51\u7EDC\u7EC4\u4EF6","\u7CFB\u7EDF\u7EC4\u4EF6","\u7F16\u89E3\u7801\u652F\u6301"],"description":"\u672C\u6B21GoFrame v2.1\u7248\u672C\u53D1\u5E03\u65B0\u589E\u4E86\u591A\u4E2A\u4E1A\u52A1\u5B9E\u7528\u7279\u6027\uFF0C\u5305\u62EC\u6570\u636E\u5E93\u7EC4\u4EF6\u548C\u7F51\u7EDC\u7EC4\u4EF6\u7684\u6539\u8FDB\uFF0C\u652F\u6301\u66F4\u7075\u6D3B\u7684SQL\u6761\u4EF6\u7EC4\u5408\u548C\u81EA\u5B9A\u4E49\u94A9\u5B50\u4E8B\u4EF6\u5904\u7406\u3002\u670D\u52A1\u6CE8\u518C\u3001\u8D1F\u8F7D\u5747\u8861\u548C\u7CFB\u7EDF\u7EC4\u4EF6\u529F\u80FD\u5F97\u5230\u589E\u5F3A\u3002\u540C\u65F6\u4F18\u5316\u5185\u5B58\u4F7F\u7528\u548C\u6539\u8FDB\u670D\u52A1\u53D1\u73B0\u903B\u8F91\u3002"},"sidebar":"releaseSidebar","previous":{"title":"v2.2 2022-10-11","permalink":"/2.7.x/release/v2.2"},"next":{"title":"v2.0 2022-03-09","permalink":"/2.7.x/release/v2.0"}}'),c=n("785893"),l=n("250065");let d={slug:"/release/v2.1",title:"v2.1 2022-06-22",sidebar_position:6,hide_title:!0,keywords:["GoFrame","\u7248\u672C\u66F4\u65B0","\u7279\u6027\u6539\u8FDB","Bug\u4FEE\u590D","\u6570\u636E\u5E93\u7EC4\u4EF6","\u670D\u52A1\u6CE8\u518C","\u8D1F\u8F7D\u5747\u8861","\u7F51\u7EDC\u7EC4\u4EF6","\u7CFB\u7EDF\u7EC4\u4EF6","\u7F16\u89E3\u7801\u652F\u6301"],description:"\u672C\u6B21GoFrame v2.1\u7248\u672C\u53D1\u5E03\u65B0\u589E\u4E86\u591A\u4E2A\u4E1A\u52A1\u5B9E\u7528\u7279\u6027\uFF0C\u5305\u62EC\u6570\u636E\u5E93\u7EC4\u4EF6\u548C\u7F51\u7EDC\u7EC4\u4EF6\u7684\u6539\u8FDB\uFF0C\u652F\u6301\u66F4\u7075\u6D3B\u7684SQL\u6761\u4EF6\u7EC4\u5408\u548C\u81EA\u5B9A\u4E49\u94A9\u5B50\u4E8B\u4EF6\u5904\u7406\u3002\u670D\u52A1\u6CE8\u518C\u3001\u8D1F\u8F7D\u5747\u8861\u548C\u7CFB\u7EDF\u7EC4\u4EF6\u529F\u80FD\u5F97\u5230\u589E\u5F3A\u3002\u540C\u65F6\u4F18\u5316\u5185\u5B58\u4F7F\u7528\u548C\u6539\u8FDB\u670D\u52A1\u53D1\u73B0\u903B\u8F91\u3002"},s=void 0,h={},o=[{value:"\u65B0\u7279\u6027",id:"\u65B0\u7279\u6027",level:2},{value:"\u4E3B\u8981\u6539\u8FDB",id:"\u4E3B\u8981\u6539\u8FDB",level:2},{value:"\u793E\u533A\u7EC4\u4EF6",id:"\u793E\u533A\u7EC4\u4EF6",level:3},{value:"\u6CE8\u518C\u53D1\u73B0",id:"\u6CE8\u518C\u53D1\u73B0",level:3},{value:"\u8D1F\u8F7D\u5747\u8861",id:"\u8D1F\u8F7D\u5747\u8861",level:3},{value:"\u7F51\u7EDC\u7EC4\u4EF6",id:"\u7F51\u7EDC\u7EC4\u4EF6",level:3},{value:"\u7CFB\u7EDF\u7EC4\u4EF6",id:"\u7CFB\u7EDF\u7EC4\u4EF6",level:3},{value:"\u5BB9\u5668\u7EC4\u4EF6",id:"\u5BB9\u5668\u7EC4\u4EF6",level:3},{value:"\u6570\u636E\u5E93\u7EC4\u4EF6",id:"\u6570\u636E\u5E93\u7EC4\u4EF6",level:3},{value:"\u7F16\u89E3\u7801\u7EC4\u4EF6",id:"\u7F16\u89E3\u7801\u7EC4\u4EF6",level:3},{value:"\u6587\u672C\u5904\u7406",id:"\u6587\u672C\u5904\u7406",level:3},{value:"\u9519\u8BEF\u5904\u7406",id:"\u9519\u8BEF\u5904\u7406",level:3},{value:"\u5DE5\u5177\u65B9\u6CD5",id:"\u5DE5\u5177\u65B9\u6CD5",level:3},{value:"\u5F00\u53D1\u5DE5\u5177",id:"\u5F00\u53D1\u5DE5\u5177",level:2},{value:"\u4E0D\u517C\u5BB9\u4E8B\u9879",id:"\u4E0D\u517C\u5BB9\u4E8B\u9879",level:2}];function x(e){let i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,l.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(i.p,{children:["\u5927\u5BB6\u597D\uFF0C\u672C\u6B21\u53D1\u5E03\u7684 ",(0,c.jsx)(i.code,{children:"v2.1"})," \u7248\u672C\u5305\u542B\u4E00\u4E9B\u4E0E\u4E1A\u52A1\u5B9E\u8DF5\u76F8\u5173\u7684\u529F\u80FD\u7279\u6027\u3001\u6539\u8FDB\u4EE5\u53CABug Fix\uFF0C\u5EFA\u8BAE\u5927\u5BB6\u5347\u7EA7\u3002"]}),"\n",(0,c.jsxs)(i.p,{children:["\u89C6\u9891\u4ECB\u7ECD\uFF1A ",(0,c.jsx)(i.a,{href:"/2.7.x/share/2022-06-22",children:"2022-06-22 GoFrame v2.1\u529F\u80FD\u7279\u6027&\u4F7F\u7528\u7B54\u7591"})]}),"\n",(0,c.jsx)(i.h2,{id:"\u65B0\u7279\u6027",children:"\u65B0\u7279\u6027"}),"\n",(0,c.jsxs)(i.ol,{children:["\n",(0,c.jsxs)(i.li,{children:["\u5F00\u53D1\u5DE5\u5177\u65B0\u589E ",(0,c.jsx)(i.code,{children:"gen service"})," \u547D\u4EE4\uFF0C\u652F\u6301\u81EA\u52A8\u5316\u5730\u6839\u636E ",(0,c.jsx)(i.code,{children:"logic"})," \u5C42\u7EA7\u4EE3\u7801\uFF0C\u751F\u6210 ",(0,c.jsx)(i.code,{children:"service"})," \u63A5\u53E3\u4EE3\u7801\u3001\u5B9E\u73B0\u6CE8\u5165\uFF1A ",(0,c.jsx)(i.a,{href:"/2.7.x/docs/cli/gen-service",children:"\u6A21\u5757\u89C4\u8303-gen service"})]}),"\n",(0,c.jsx)(i.li,{children:"\xa0\u6570\u636E\u5E93\u7EC4\u4EF6\u7279\u6027\uFF1A"}),"\n",(0,c.jsxs)(i.li,{children:["\u65B0\u589E ",(0,c.jsx)(i.code,{children:"WhereBuilder"})," \u7279\u6027\uFF0C\u7528\u4E8E\u66F4\u52A0\u7075\u6D3B\u7684 ",(0,c.jsx)(i.code,{children:"SQL"})," \u6761\u4EF6\u8BED\u53E5\u7EC4\u5408\uFF1A ",(0,c.jsx)(i.a,{href:"/2.7.x/docs/core/gdb-chaining-query-where",children:"ORM\u67E5\u8BE2-Where/WhereOr/WhereNot"})]}),"\n",(0,c.jsxs)(i.li,{children:["\u65B0\u589E ",(0,c.jsx)(i.code,{children:"Hook"})," \u7279\u6027\uFF0C\u7528\u4E8E\u81EA\u5B9A\u4E49\u94A9\u5B50\u4E8B\u4EF6\u5904\u7406\uFF1A ",(0,c.jsx)(i.a,{href:"/2.7.x/docs/core/gdb-chaining-hook",children:"ORM\u94FE\u5F0F\u64CD\u4F5C-Hook\u7279\u6027"})]}),"\n",(0,c.jsxs)(i.li,{children:["\u6846\u67B6\u65B0\u589E ",(0,c.jsx)(i.code,{children:"DeepCopy"})," \u7279\u6027\uFF0C\u7528\u4E8E\u7C7B\u578B\u7684\u6DF1\u5EA6\u62F7\u8D1D\uFF1A"]}),"\n",(0,c.jsxs)(i.li,{children:["\u65B0\u589E ",(0,c.jsx)(i.code,{children:"gutil.Copy"})," \u65B9\u6CD5\uFF0C\u7528\u4E8E\u6DF1\u5EA6\u62F7\u8D1D\u6307\u5B9A\u5185\u5BB9\u3002"]}),"\n",(0,c.jsxs)(i.li,{children:["\u6CDB\u578B\u7C7B\u578B\u65B0\u589E ",(0,c.jsx)(i.code,{children:"Copy"})," \u65B9\u6CD5\uFF0C\u7528\u4E8E\u6DF1\u5EA6\u62F7\u8D1D\u81EA\u8EAB\u5185\u5BB9\u3002"]}),"\n",(0,c.jsxs)(i.li,{children:["\u6846\u67B6\u90E8\u5206\u6570\u636E\u7C7B\u578B\u5DF2\u652F\u6301\u6DF1\u5EA6\u62F7\u8D1D\u7279\u6027\uFF0C\u4F8B\u5982\uFF1A ",(0,c.jsx)(i.code,{children:"gvar, garray, gmap"})," \u7B49\u57FA\u7840\u5BB9\u5668\u7C7B\u578B\u3002"]}),"\n"]}),"\n",(0,c.jsx)(i.h2,{id:"\u4E3B\u8981\u6539\u8FDB",children:"\u4E3B\u8981\u6539\u8FDB"}),"\n",(0,c.jsx)(i.h3,{id:"\u793E\u533A\u7EC4\u4EF6",children:"\u793E\u533A\u7EC4\u4EF6"}),"\n",(0,c.jsx)(i.p,{children:(0,c.jsx)(i.strong,{children:"ORM\u9A71\u52A8\u5B9E\u73B0"})}),"\n",(0,c.jsxs)(i.ol,{children:["\n",(0,c.jsxs)(i.li,{children:["\u65B0\u589E ",(0,c.jsx)(i.code,{children:"drivers/clickhouse"}),"\uFF0C\u7528\u4E8E\u5BF9\u63A5 ",(0,c.jsx)(i.code,{children:"clickhouse"})," \u5230 ",(0,c.jsx)(i.code,{children:"goframe ORM"})," \u7EC4\u4EF6\u3002"]}),"\n",(0,c.jsxs)(i.li,{children:["\u5B8C\u5584 ",(0,c.jsx)(i.code,{children:"clickhouse/mssql/pgsql/sqlite/oracle"})," \u7EC4\u4EF6\u5355\u5143\u6D4B\u8BD5\u3002"]}),"\n",(0,c.jsxs)(i.li,{children:["\u5C06 ",(0,c.jsx)(i.code,{children:"mysql"})," \u9A71\u52A8\u4ECE\u4E3B\u5E93\u8FC1\u79FB\u5230\u793E\u533A\u6A21\u5757\uFF0C\u4FBF\u4E8E\u5C06 ",(0,c.jsx)(i.code,{children:"mysql"})," \u4ECE\u4E3B\u5E93\u89E3\u8026\u3002\u56E0\u6B64\u4ECE\u540E\u7EED\u7248\u672C\u5F00\u59CB\uFF0C\u5F00\u53D1\u8005\u9700\u8981\u624B\u52A8\u5F15\u5165\u9A71\u52A8\u4F9D\u8D56\uFF1A ",(0,c.jsx)(i.a,{href:"https://github.com/gogf/gf/tree/master/contrib/drivers",children:"https://github.com/gogf/gf/tree/master/contrib/drivers"})]}),"\n"]}),"\n",(0,c.jsx)(i.p,{children:(0,c.jsx)(i.strong,{children:"\u6CE8\u518C\u53D1\u73B0\u5B9E\u73B0"})}),"\n",(0,c.jsxs)(i.ol,{children:["\n",(0,c.jsxs)(i.li,{children:["\u65B0\u589E ",(0,c.jsx)(i.code,{children:"polaris"})," \u5317\u6781\u661F\u670D\u52A1\u6CE8\u518C\u63A5\u53E3\u5B9E\u73B0\uFF1A ",(0,c.jsx)(i.a,{href:"https://github.com/gogf/gf/tree/master/contrib/registry/polaris",children:"https://github.com/gogf/gf/tree/master/contrib/registry/polaris"})]}),"\n",(0,c.jsxs)(i.li,{children:["\u6539\u8FDB ",(0,c.jsx)(i.code,{children:"etcd"})," \u670D\u52A1\u6CE8\u518C\u53D1\u73B0\u63A5\u53E3\u5B9E\u73B0\u7EC4\u4EF6\uFF1A ",(0,c.jsx)(i.a,{href:"https://github.com/gogf/gf/tree/master/contrib/registry/etcd",children:"https://github.com/gogf/gf/tree/master/contrib/registry/etcd"})]}),"\n"]}),"\n",(0,c.jsx)(i.h3,{id:"\u6CE8\u518C\u53D1\u73B0",children:"\u6CE8\u518C\u53D1\u73B0"}),"\n",(0,c.jsxs)(i.ol,{children:["\n",(0,c.jsxs)(i.li,{children:["\u5C06 ",(0,c.jsx)(i.code,{children:"Service"})," \u5B9E\u73B0\u5BF9\u8C61\u6539\u8FDB\u4E3A\u63A5\u53E3\u5B9A\u4E49\uFF0C\u5E76\u63D0\u4F9B\u9ED8\u8BA4\u7684 ",(0,c.jsx)(i.code,{children:"Service"})," \u5B9E\u73B0\uFF0C\u63D0\u9AD8\u6269\u5C55\u6027\u548C\u6613\u7528\u6027\u3002"]}),"\n",(0,c.jsxs)(i.li,{children:["\u6539\u8FDB ",(0,c.jsx)(i.code,{children:"HTTP/GRPC Client&Server"})," \u5BF9\u63A5\u5B9E\u73B0\u3002"]}),"\n"]}),"\n",(0,c.jsx)(i.h3,{id:"\u8D1F\u8F7D\u5747\u8861",children:"\u8D1F\u8F7D\u5747\u8861"}),"\n",(0,c.jsxs)(i.ol,{children:["\n",(0,c.jsxs)(i.li,{children:["\u6539\u8FDB ",(0,c.jsx)(i.code,{children:"Node"})," \u63A5\u53E3\u5B9A\u4E49\uFF0C\u65B0\u589E ",(0,c.jsx)(i.code,{children:"Nodes"})," \u63A5\u53E3\u5B9A\u4E49\u3002"]}),"\n",(0,c.jsxs)(i.li,{children:["\u4FEE\u590D ",(0,c.jsx)(i.code,{children:"HTTP Client"})," \u4E0B\u7684\u670D\u52A1\u53D1\u73B0\u8D1F\u8F7D\u5747\u8861\u95EE\u9898\u3002"]}),"\n"]}),"\n",(0,c.jsx)(i.h3,{id:"\u7F51\u7EDC\u7EC4\u4EF6",children:"\u7F51\u7EDC\u7EC4\u4EF6"}),"\n",(0,c.jsxs)(i.ol,{children:["\n",(0,c.jsx)(i.li,{children:(0,c.jsx)(i.code,{children:"gclient"})}),"\n",(0,c.jsx)(i.li,{children:"\u6539\u8FDB\u670D\u52A1\u53D1\u73B0\u5B9E\u73B0\u903B\u8F91\u3002"}),"\n",(0,c.jsx)(i.li,{children:"\u4FEE\u590D\u5BA2\u6237\u7AEF\u5173\u95ED\u9519\u8BEF\uFF0C\u5F15\u8D77\u7684\u8FDE\u63A5\u6C60\u65E0\u6CD5\u590D\u7528\u95EE\u9898\u3002"}),"\n",(0,c.jsx)(i.li,{children:(0,c.jsx)(i.code,{children:"ghttp"})}),"\n",(0,c.jsxs)(i.li,{children:["\u6539\u8FDB ",(0,c.jsx)(i.code,{children:"Request.GetUrl"})," \u65B9\u6CD5\u5BF9 ",(0,c.jsx)(i.code,{children:"URL Schema"})," \u83B7\u53D6\u7EC6\u8282\u3002"]}),"\n",(0,c.jsxs)(i.li,{children:["\u53C2\u6570\u63A5\u6536\u652F\u6301 ",(0,c.jsx)(i.code,{children:"UploadFile"})," \u5C5E\u6027\u81EA\u52A8\u63A5\u6536\u3002"]}),"\n",(0,c.jsxs)(i.li,{children:["\u65B0\u589E\u63A5\u53E3\u6587\u6863\u81EA\u5B9A\u4E49UI\u6307\u5BFC\u6587\u6863\uFF1A ",(0,c.jsx)(i.a,{href:"/2.7.x/docs/web/api-document-swagger-ui",children:"\u63A5\u53E3\u6587\u6863-\u81EA\u5B9A\u4E49UI"})]}),"\n",(0,c.jsxs)(i.li,{children:["\u63A5\u53E3\u6587\u6863\u9ED8\u8BA4\u4F9D\u8D56\u7684\u5916\u90E8 ",(0,c.jsx)(i.code,{children:"JS CDN"})," \u6539\u4E3A ",(0,c.jsx)(i.code,{children:"unpkg.com"}),"\u3002"]}),"\n",(0,c.jsx)(i.li,{children:"\u6539\u8FDB\u670D\u52A1\u6CE8\u518C\u5B9E\u73B0\u903B\u8F91\u3002"}),"\n",(0,c.jsx)(i.li,{children:"\u6539\u8FDB\u5185\u90E8\u7EC6\u8282\u5B9E\u73B0\u903B\u8F91\u3002"}),"\n",(0,c.jsx)(i.li,{children:"\u4FEE\u590D\u53C2\u6570\u4E3A\u7A7A\u5224\u65AD\u95EE\u9898\u3002"}),"\n",(0,c.jsx)(i.li,{children:(0,c.jsx)(i.code,{children:"goai"})}),"\n",(0,c.jsxs)(i.li,{children:["\u6539\u8FDB\u66F4\u89C4\u8303\u5316\u7B26\u5408 ",(0,c.jsx)(i.code,{children:"OpenAPIV3"})," \u534F\u8BAE\u5B9E\u73B0\u3002"]}),"\n",(0,c.jsxs)(i.li,{children:["\u652F\u6301\u6240\u6709 ",(0,c.jsx)(i.code,{children:"x-"})," \u5F00\u5934\u7684\u81EA\u5B9A\u4E49\u6807\u7B7E\uFF0C\u81EA\u52A8\u6DFB\u52A0 ",(0,c.jsx)(i.code,{children:"OpenAPIV3"})," \u7684\u7ED3\u679C\u4E2D\u3002"]}),"\n",(0,c.jsxs)(i.li,{children:["\u7EC4\u4EF6\u4ECE ",(0,c.jsx)(i.code,{children:"protocol"})," \u5206\u7C7B\u8FC1\u79FB\u5230\u4E86 ",(0,c.jsx)(i.code,{children:"net"})," \u5206\u7C7B\u4E0B\uFF0C ",(0,c.jsx)(i.code,{children:"import"})," \u8DEF\u5F84\u53D1\u751F\u6539\u53D8\u3002"]}),"\n"]}),"\n",(0,c.jsx)(i.h3,{id:"\u7CFB\u7EDF\u7EC4\u4EF6",children:"\u7CFB\u7EDF\u7EC4\u4EF6"}),"\n",(0,c.jsxs)(i.ol,{children:["\n",(0,c.jsx)(i.li,{children:(0,c.jsx)(i.code,{children:"gcfg"})}),"\n",(0,c.jsxs)(i.li,{children:["\u9ED8\u8BA4\u7684\u6587\u4EF6\u7CFB\u7EDF\u63A5\u53E3\u5B9E\u73B0\u65B0\u589E\u5BF9 ",(0,c.jsx)(i.code,{children:"property"})," \u6587\u4EF6\u683C\u5F0F\u7684\u652F\u6301\u3002"]}),"\n",(0,c.jsx)(i.li,{children:(0,c.jsx)(i.code,{children:"gcmd"})}),"\n",(0,c.jsxs)(i.li,{children:["\u53C2\u6570\u89E3\u6790\u65B0\u589E ",(0,c.jsx)(i.code,{children:"CaseSensitive"})," \u914D\u7F6E\uFF0C\u9ED8\u8BA4\u4E0D\u533A\u5206\u5927\u5C0F\u5199\u89E3\u6790\uFF0C\u7279\u522B\u9488\u5BF9\u7ED3\u6784\u5316\u53C2\u6570\u63A5\u6536\u5F71\u54CD\u8F83\u5927\uFF1A ",(0,c.jsx)(i.a,{href:"/2.7.x/docs/core/gcmd-struct",children:"\u547D\u4EE4\u7BA1\u7406-\u7ED3\u6784\u5316\u53C2\u6570"})]}),"\n",(0,c.jsxs)(i.li,{children:["\u65B0\u589E\u8DE8\u8FDB\u7A0B\u7684\u94FE\u8DEF\u8DDF\u8E2A\u7279\u6027\uFF1A ",(0,c.jsx)(i.a,{href:"/2.7.x/docs/core/gcmd-tracing",children:"\u547D\u4EE4\u7BA1\u7406-\u94FE\u8DEF\u8DDF\u8E2A"})]}),"\n",(0,c.jsx)(i.li,{children:(0,c.jsx)(i.code,{children:"glog"})}),"\n",(0,c.jsxs)(i.li,{children:["\u65B0\u589E\u5168\u5C40\u7684 ",(0,c.jsx)(i.code,{children:"Handler"})," \u8BBE\u7F6E\u529F\u80FD\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u5168\u5C40\u81EA\u5B9A\u4E49\u5904\u7406 ",(0,c.jsx)(i.code,{children:"glog"})," \u7EC4\u4EF6\u7684\u6240\u6709\u65E5\u5FD7\uFF0C\u4F8B\u5982\u5168\u5C40\u8F93\u51FA ",(0,c.jsx)(i.code,{children:"JSON"})," \u6587\u4EF6\u683C\u5F0F\uFF1A ",(0,c.jsx)(i.a,{href:"/2.7.x/docs/core/glog-handler",children:"\u65E5\u5FD7\u7EC4\u4EF6-Handler"})]}),"\n",(0,c.jsxs)(i.li,{children:["\u65B0\u589E\u9ED8\u8BA4\u7684 ",(0,c.jsx)(i.code,{children:"JSON"})," \u683C\u5F0F ",(0,c.jsx)(i.code,{children:"Handler"})," \u4F9B\u5F00\u53D1\u8005\u4F7F\u7528\uFF1A ",(0,c.jsx)(i.a,{href:"/2.7.x/docs/core/glog-handler",children:"\u65E5\u5FD7\u7EC4\u4EF6-Handler"})]}),"\n",(0,c.jsx)(i.li,{children:(0,c.jsx)(i.code,{children:"gsession"})}),"\n",(0,c.jsx)(i.li,{children:"\u89E3\u51B3\u5F53\u8BBF\u95EE\u7528\u6237\u8FC7\u591A\u9020\u6210\u7684\u5185\u5B58\u5360\u7528\u8FC7\u5927\u7684\u95EE\u9898\u3002"}),"\n",(0,c.jsx)(i.li,{children:(0,c.jsx)(i.code,{children:"gproc"})}),"\n",(0,c.jsxs)(i.li,{children:["\u65B0\u589E\u8DE8\u8FDB\u7A0B\u7684\u94FE\u8DEF\u8DDF\u8E2A\u7279\u6027\uFF1A ",(0,c.jsx)(i.a,{href:"/2.7.x/docs/components/os-gproc-tracing",children:"\u8FDB\u7A0B\u7BA1\u7406-\u94FE\u8DEF\u8DDF\u8E2A"})]}),"\n"]}),"\n",(0,c.jsx)(i.h3,{id:"\u5BB9\u5668\u7EC4\u4EF6",children:"\u5BB9\u5668\u7EC4\u4EF6"}),"\n",(0,c.jsxs)(i.ol,{children:["\n",(0,c.jsx)(i.li,{children:(0,c.jsx)(i.code,{children:"garray"})}),"\n",(0,c.jsxs)(i.li,{children:["\u6539\u8FDB ",(0,c.jsx)(i.code,{children:"Unique"})," \u65B9\u6CD5\u6027\u80FD\uFF0C\u589E\u52A0 ",(0,c.jsx)(i.code,{children:"DeepCopy"})," \u63A5\u53E3\u5B9E\u73B0\u3002"]}),"\n",(0,c.jsx)(i.li,{children:(0,c.jsx)(i.code,{children:"glist"})}),"\n",(0,c.jsxs)(i.li,{children:["\u589E\u52A0 ",(0,c.jsx)(i.code,{children:"DeepCopy"})," \u63A5\u53E3\u5B9E\u73B0\u3002"]}),"\n",(0,c.jsx)(i.li,{children:(0,c.jsx)(i.code,{children:"gmap"})}),"\n",(0,c.jsxs)(i.li,{children:["\u589E\u52A0 ",(0,c.jsx)(i.code,{children:"DeepCopy"})," \u63A5\u53E3\u5B9E\u73B0\u3002"]}),"\n",(0,c.jsx)(i.li,{children:(0,c.jsx)(i.code,{children:"gset"})}),"\n",(0,c.jsxs)(i.li,{children:["\u589E\u52A0 ",(0,c.jsx)(i.code,{children:"DeepCopy"})," \u63A5\u53E3\u5B9E\u73B0\u3002"]}),"\n",(0,c.jsx)(i.li,{children:(0,c.jsx)(i.code,{children:"gtype"})}),"\n",(0,c.jsxs)(i.li,{children:["\u589E\u52A0 ",(0,c.jsx)(i.code,{children:"DeepCopy"})," \u63A5\u53E3\u5B9E\u73B0\u3002"]}),"\n",(0,c.jsx)(i.li,{children:(0,c.jsx)(i.code,{children:"gvar"})}),"\n",(0,c.jsxs)(i.li,{children:["\u589E\u52A0 ",(0,c.jsx)(i.code,{children:"Copy"})," \u65B9\u6CD5\uFF0C\u7528\u4E8E\u6DF1\u5EA6\u62F7\u8D1D\u5F53\u524D\u6CDB\u578B\u5BF9\u8C61\u3002"]}),"\n",(0,c.jsxs)(i.li,{children:["\u589E\u52A0 ",(0,c.jsx)(i.code,{children:"DeepCopy"})," \u63A5\u53E3\u5B9E\u73B0\u3002"]}),"\n"]}),"\n",(0,c.jsx)(i.h3,{id:"\u6570\u636E\u5E93\u7EC4\u4EF6",children:"\u6570\u636E\u5E93\u7EC4\u4EF6"}),"\n",(0,c.jsxs)(i.ol,{children:["\n",(0,c.jsx)(i.li,{children:(0,c.jsx)(i.code,{children:"gdb"})}),"\n",(0,c.jsxs)(i.li,{children:["\u65B0\u589E ",(0,c.jsx)(i.code,{children:"WhereBuilder"})," \u7279\u6027\uFF0C\u7528\u4E8E\u66F4\u52A0\u7075\u6D3B\u7684 ",(0,c.jsx)(i.code,{children:"SQL"})," \u6761\u4EF6\u8BED\u53E5\u7EC4\u5408\uFF1A ",(0,c.jsx)(i.a,{href:"/2.7.x/docs/core/gdb-chaining-query-where",children:"ORM\u67E5\u8BE2-Where/WhereOr/WhereNot"})]}),"\n",(0,c.jsxs)(i.li,{children:["\u65B0\u589E ",(0,c.jsx)(i.code,{children:"HOOK"})," \u7279\u6027\uFF0C\u7528\u4E8E\u81EA\u5B9A\u4E49\u94A9\u5B50\u4E8B\u4EF6\u5904\u7406\uFF1A ",(0,c.jsx)(i.a,{href:"/2.7.x/docs/core/gdb-chaining-hook",children:"ORM\u94FE\u5F0F\u64CD\u4F5C-Hook\u7279\u6027"})]}),"\n",(0,c.jsxs)(i.li,{children:["\u6539\u8FDB\u6570\u636E\u63D0\u4EA4\u5230\u5E95\u5C42 ",(0,c.jsx)(i.code,{children:"driver"})," \u524D\u7684\u6570\u636E\u8F6C\u6362\u5904\u7406\u903B\u8F91\u3002"]}),"\n",(0,c.jsxs)(i.li,{children:["\u5C06 ",(0,c.jsx)(i.code,{children:"mysql"})," \u9A71\u52A8\u4ECE\u4E3B\u5E93\u8FC1\u79FB\u5230\u793E\u533A\u6A21\u5757\uFF0C\u4FBF\u4E8E\u5C06 ",(0,c.jsx)(i.code,{children:"mysql"})," \u4ECE\u4E3B\u5E93\u89E3\u8026\u3002\u56E0\u6B64\u4ECE\u540E\u7EED\u7248\u672C\u5F00\u59CB\uFF0C\u5F00\u53D1\u8005\u9700\u8981\u624B\u52A8\u5F15\u5165\u9A71\u52A8\u4F9D\u8D56\uFF1A ",(0,c.jsx)(i.a,{href:"https://github.com/gogf/gf/tree/master/contrib/drivers",children:"https://github.com/gogf/gf/tree/master/contrib/drivers"})]}),"\n"]}),"\n",(0,c.jsx)(i.h3,{id:"\u7F16\u89E3\u7801\u7EC4\u4EF6",children:"\u7F16\u89E3\u7801\u7EC4\u4EF6"}),"\n",(0,c.jsxs)(i.ol,{children:["\n",(0,c.jsx)(i.li,{children:(0,c.jsx)(i.code,{children:"gproperty"})}),"\n",(0,c.jsxs)(i.li,{children:["\u65B0\u589E ",(0,c.jsx)(i.code,{children:"gproperty"})," \u7EC4\u4EF6\uFF0C\u7528\u4E8E\u89E3\u6790 ",(0,c.jsx)(i.code,{children:"Java Property"})," \u683C\u5F0F\u6587\u4EF6\u3002"]}),"\n",(0,c.jsx)(i.li,{children:(0,c.jsx)(i.code,{children:"gjson"})}),"\n",(0,c.jsxs)(i.li,{children:["\u65B0\u589E\u5BF9 ",(0,c.jsx)(i.code,{children:"property"})," \u6587\u4EF6\u683C\u5F0F\u7684\u7F16\u89E3\u7801\u3001\u6570\u636E\u64CD\u4F5C\u652F\u6301\uFF1A ",(0,c.jsx)(i.a,{href:"/2.7.x/docs/components/encoding-gjson",children:"\u901A\u7528\u7F16\u89E3\u7801-gjson"})]}),"\n",(0,c.jsx)(i.li,{children:"\u4FEE\u590D\u5BF9\u5927\u6574\u5F62\u6570\u636E\u8BFB\u53D6\u7684\u7CBE\u5EA6\u4E22\u5931\u95EE\u9898\u3002"}),"\n"]}),"\n",(0,c.jsx)(i.h3,{id:"\u6587\u672C\u5904\u7406",children:"\u6587\u672C\u5904\u7406"}),"\n",(0,c.jsxs)(i.ol,{children:["\n",(0,c.jsx)(i.li,{children:(0,c.jsx)(i.code,{children:"gstr"})}),"\n",(0,c.jsxs)(i.li,{children:["\u6539\u8FDB ",(0,c.jsx)(i.code,{children:"WordWrap"})," \u65B9\u6CD5\uFF0C\u4F7F\u5F97\u5BF9 ",(0,c.jsx)(i.code,{children:"Unicode"})," \u7279\u522B\u662F\u4E2D\u6587\u6362\u884C\u66F4\u52A0\u53CB\u597D\u3002"]}),"\n",(0,c.jsxs)(i.li,{children:["\u4FEE\u590D ",(0,c.jsx)(i.code,{children:"RepliceI"})," \u5FFD\u7565\u5927\u5C0F\u5199\u5B57\u7B26\u4E32\u66FF\u6362\u5728\u7279\u5B9A\u573A\u666F\u4E0B\u7684\u95EE\u9898\u3002"]}),"\n"]}),"\n",(0,c.jsx)(i.h3,{id:"\u9519\u8BEF\u5904\u7406",children:"\u9519\u8BEF\u5904\u7406"}),"\n",(0,c.jsxs)(i.ol,{children:["\n",(0,c.jsx)(i.li,{children:(0,c.jsx)(i.code,{children:"gerror"})}),"\n",(0,c.jsxs)(i.li,{children:["\u65B0\u589E ",(0,c.jsx)(i.code,{children:"Unwrap"})," \u65B9\u6CD5\uFF08\u540C ",(0,c.jsx)(i.code,{children:"Next"})," \u65B9\u6CD5\uFF09\uFF0C\u7528\u4EE5\u652F\u6301 ",(0,c.jsx)(i.code,{children:"Golang"})," \u65B0\u7248\u672C\u7684 ",(0,c.jsx)(i.code,{children:"Unwrap"})," \u9519\u8BEF\u63A5\u53E3\u3002"]}),"\n",(0,c.jsxs)(i.li,{children:["\u65B0\u589E ",(0,c.jsx)(i.code,{children:"Equal"})," \u65B9\u6CD5\uFF0C\u7528\u4E8E\u5224\u65AD\u4E24\u4E2A\u9519\u8BEF\u662F\u5426\u76F8\u7B49\uFF1A ",(0,c.jsx)(i.a,{href:"/2.7.x/docs/core/gerror-comparison",children:"\u9519\u8BEF\u5904\u7406-\u9519\u8BEF\u6BD4\u8F83"})]}),"\n",(0,c.jsxs)(i.li,{children:["\u65B0\u589E ",(0,c.jsx)(i.code,{children:"Is"})," \u65B9\u6CD5\uFF0C\u7528\u4E8E\u652F\u6301 ",(0,c.jsx)(i.code,{children:"Golang"})," \u65B0\u7248\u672C\u7684 ",(0,c.jsx)(i.code,{children:"Is"})," \u9519\u8BEF\u63A5\u53E3\uFF1A ",(0,c.jsx)(i.a,{href:"/2.7.x/docs/core/gerror-comparison",children:"\u9519\u8BEF\u5904\u7406-\u9519\u8BEF\u6BD4\u8F83"})]}),"\n"]}),"\n",(0,c.jsx)(i.h3,{id:"\u5DE5\u5177\u65B9\u6CD5",children:"\u5DE5\u5177\u65B9\u6CD5"}),"\n",(0,c.jsxs)(i.ol,{children:["\n",(0,c.jsx)(i.li,{children:(0,c.jsx)(i.code,{children:"gconv"})}),"\n",(0,c.jsx)(i.li,{children:"\u53BB\u6389\u6574\u578B\u8F6C\u6362\u65F6\u5BF9\u516B\u8FDB\u5236\u5B57\u7B26\u4E32\u7684\u652F\u6301\u3002"}),"\n",(0,c.jsx)(i.li,{children:"\u6539\u8FDB\u5185\u90E8\u5B9E\u73B0\u903B\u8F91\uFF0C\u63D0\u9AD8\u53EF\u8BFB\u6027\u4FDD\u969C\u53EF\u7EF4\u62A4\u6027\u3002"}),"\n",(0,c.jsx)(i.li,{children:(0,c.jsx)(i.code,{children:"gutil"})}),"\n",(0,c.jsxs)(i.li,{children:["\u65B0\u589E ",(0,c.jsx)(i.code,{children:"gutil.Copy"})," \u65B9\u6CD5\uFF0C\u7528\u4E8E\u6DF1\u5EA6\u62F7\u8D1D\u6307\u5B9A\u5185\u5BB9\u3002"]}),"\n",(0,c.jsxs)(i.li,{children:["\u6539\u8FDB ",(0,c.jsx)(i.code,{children:"gutil.Dump"})," \u65B9\u6CD5\u3002"]}),"\n"]}),"\n",(0,c.jsx)(i.h2,{id:"\u5F00\u53D1\u5DE5\u5177",children:"\u5F00\u53D1\u5DE5\u5177"}),"\n",(0,c.jsx)(i.p,{children:"\u76F8\u5BF9\u4E8E\u4E3B\u5E93\u7A33\u5B9A\u7684\u4EE3\u7801\u7EC4\u4EF6\uFF0CCLI\u5F00\u53D1\u5DE5\u5177\u5728\u8FD1\u671F\u7684\u7248\u672C\u53D1\u5E03\u6709\u4E00\u4E9B\u975E\u517C\u5BB9\u66F4\u65B0\uFF0C\u5404\u4F4D\u5728\u5347\u7EA7\u65F6\u6CE8\u610F\u53D1\u5E03\u8BB0\u5F55\uFF0C\u7EC6\u8282\u8BF7\u67E5\u770B\u6E90\u7801\u8C03\u6574\u3002"}),"\n",(0,c.jsxs)(i.ol,{children:["\n",(0,c.jsxs)(i.li,{children:["\u6539\u8FDB ",(0,c.jsx)(i.code,{children:"build"})," \u547D\u4EE4\uFF0C\u652F\u6301\u6307\u5B9A ",(0,c.jsx)(i.code,{children:"pack"})," \u4EE3\u7801\u6587\u4EF6\u7684\u751F\u6210\u76EE\u5F55\uFF0C\u53C2\u6570\u6709\u4E2A\u522B\u8C03\u6574\u3002"]}),"\n",(0,c.jsxs)(i.li,{children:["\u6539\u8FDB ",(0,c.jsx)(i.code,{children:"docker"})," \u547D\u4EE4\uFF0C\u652F\u6301\u591A\u4E2A ",(0,c.jsx)(i.code,{children:"docker tag"})," \u7684\u91CD\u547D\u540D\u53CA\u4ED3\u5E93\u81EA\u52A8\u63A8\u9001\u3002"]}),"\n",(0,c.jsxs)(i.li,{children:["\u6539\u8FDB ",(0,c.jsx)(i.code,{children:"gen dao"})," \u547D\u4EE4\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49 ",(0,c.jsx)(i.code,{children:"dao/do/entity"})," \u4EE3\u7801\u751F\u6210\u76EE\u5F55\uFF0C\u4E0D\u518D\u5F3A\u5236\u751F\u6210\u5230 ",(0,c.jsx)(i.code,{children:"service/internal"})," \u76EE\u5F55\u4E0B\uFF1A ",(0,c.jsx)(i.a,{href:"/2.7.x/docs/cli/gen-dao",children:"\u6570\u636E\u89C4\u8303-gen dao"})]}),"\n",(0,c.jsxs)(i.li,{children:["\u65B0\u589E ",(0,c.jsx)(i.code,{children:"gen service"})," \u547D\u4EE4\uFF0C\u652F\u6301\u81EA\u52A8\u5316\u5730\u6839\u636E ",(0,c.jsx)(i.code,{children:"logic"})," \u5C42\u7EA7\u4EE3\u7801\uFF0C\u751F\u6210 ",(0,c.jsx)(i.code,{children:"service"})," \u63A5\u53E3\u4EE3\u7801\uFF1A ",(0,c.jsx)(i.a,{href:"/2.7.x/docs/cli/gen-service",children:"\u6A21\u5757\u89C4\u8303-gen service"})]}),"\n",(0,c.jsxs)(i.li,{children:["\u4FEE\u590D ",(0,c.jsx)(i.code,{children:"run"})," \u547D\u4EE4\u81EA\u5B9A\u4E49\u7A0B\u5E8F\u542F\u52A8\u53C2\u6570\u95EE\u9898\u3001 ",(0,c.jsx)(i.code,{children:"gofmt/goimports"})," \u7A0B\u5E8F\u8DEF\u5F84\u5E26\u7A7A\u683C\u95EE\u9898\u3002"]}),"\n"]}),"\n",(0,c.jsx)(i.h2,{id:"\u4E0D\u517C\u5BB9\u4E8B\u9879",children:"\u4E0D\u517C\u5BB9\u4E8B\u9879"}),"\n",(0,c.jsxs)(i.ol,{children:["\n",(0,c.jsxs)(i.li,{children:["\u5C06 ",(0,c.jsx)(i.code,{children:"mysql"})," \u9A71\u52A8\u4ECE\u4E3B\u5E93\u8FC1\u79FB\u5230\u793E\u533A\u6A21\u5757\uFF0C\u4FBF\u4E8E\u5C06 ",(0,c.jsx)(i.code,{children:"mysql"})," \u4ECE\u4E3B\u5E93\u89E3\u8026\u3002\u56E0\u6B64\u4ECE\u540E\u7EED\u7248\u672C\u5F00\u59CB\uFF0C\u5F00\u53D1\u8005\u9700\u8981\u624B\u52A8\u5F15\u5165\u9A71\u52A8\u4F9D\u8D56\uFF1A ",(0,c.jsx)(i.a,{href:"https://github.com/gogf/gf/tree/master/contrib/drivers",children:"https://github.com/gogf/gf/tree/master/contrib/drivers"})]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.code,{children:"ghttp.Response.WriteJson/Xml"})," \u7B49\u65B9\u6CD5\u4E0D\u518D\u8FD4\u56DE ",(0,c.jsx)(i.code,{children:"error"}),"\u3002\u6839\u636E\u7F16\u8BD1\u9519\u8BEF\u8C03\u6574\u5373\u53EF\u3002"]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.code,{children:"goai"})," \u7EC4\u4EF6\u4ECE ",(0,c.jsx)(i.code,{children:"protocol"})," \u5206\u7C7B\u8FC1\u79FB\u5230\u4E86 ",(0,c.jsx)(i.code,{children:"net"})," \u5206\u7C7B\u4E0B\uFF0C ",(0,c.jsx)(i.code,{children:"import"})," \u8DEF\u5F84\u53D1\u751F\u6539\u53D8\u3002\u6839\u636E\u7F16\u8BD1\u9519\u8BEF\u8C03\u6574\u5373\u53EF\u3002"]}),"\n",(0,c.jsxs)(i.li,{children:["\u6570\u636E\u5E93 ",(0,c.jsx)(i.code,{children:"ORM"})," \u64CD\u4F5C\u53C2\u6570\u4E2D\u5E26\u6709 ",(0,c.jsx)(i.code,{children:"gtime.Time"})," \u7C7B\u578B\uFF0C\u4E3A\u4E86\u89E3\u51B3\u65F6\u95F4\u7CBE\u5EA6\u4E22\u5931\u7684\u95EE\u9898\uFF0C\u5C06\u4F1A\u81EA\u52A8\u8F6C\u6362\u4E3A ",(0,c.jsx)(i.code,{children:"time.Time"})," \u7C7B\u578B\u518D\u63D0\u4EA4\u7ED9\u5E95\u5C42\u7684\u6570\u636E\u5E93 ",(0,c.jsx)(i.code,{children:"driver"}),"\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C ",(0,c.jsx)(i.code,{children:"gtime.Time"})," \u7C7B\u578B\u53C2\u6570\u4E5F\u4F1A\u53D7\u5230\u6570\u636E\u5E93\u914D\u7F6E\u7684\u65F6\u533A\u914D\u7F6E\u53C2\u6570\u5F71\u54CD\u3002\u5177\u4F53\u8BF7\u53C2\u8003\uFF1A ",(0,c.jsx)(i.a,{href:"/2.7.x/docs/core/gdb-timezone",children:"ORM\u65F6\u533A\u5904\u7406"})]}),"\n"]})]})}function j(e={}){let{wrapper:i}={...(0,l.a)(),...e.components};return i?(0,c.jsx)(i,{...e,children:(0,c.jsx)(x,{...e})}):x(e)}},250065:function(e,i,n){n.d(i,{Z:function(){return s},a:function(){return d}});var r=n(667294);let c={},l=r.createContext(c);function d(e){let i=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),r.createElement(l.Provider,{value:i},e.children)}}}]);