"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["31390"],{425040:function(e,n,c){c.r(n),c.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>t,assets:()=>o,toc:()=>h,frontMatter:()=>d});var s=JSON.parse('{"id":"release/v2.7 2024-04-09","title":"v2.7 2024-04-09","description":"GoFrame\u6846\u67B6\u53D1\u5E03v2.7.0\u7248\u672C\uFF0C\u65B0\u589Emetric\u76D1\u63A7\u7EC4\u4EF6\u5E76\u63D0\u4F9BHTTP Client\u548CServer\u7684\u76D1\u63A7\u6307\u6807\u5B9E\u73B0\uFF0C\u652F\u6301\u591A\u4E2A\u6570\u636E\u5E93\u7684Save\u64CD\u4F5C\uFF0C\u6539\u8FDBgcron\u5B9A\u65F6\u4EFB\u52A1\u7EC4\u4EF6\uFF0C\u589E\u5F3Agdb\u6570\u636E\u5E93\u7EC4\u4EF6\u529F\u80FD\u3002\u540C\u65F6\uFF0C\u4FEE\u590D\u82E5\u5E72\u7CFB\u7EDF\u95EE\u9898\uFF0C\u63D0\u5347\u6846\u67B6\u6027\u80FD\u548C\u7A33\u5B9A\u6027\u3002","source":"@site/versioned_docs/version-2.7.x/release/v2.7 2024-04-09.md","sourceDirName":"release","slug":"/release/v2.7","permalink":"/2.7.x/release/v2.7","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/release/v2.7 2024-04-09.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":0,"frontMatter":{"slug":"/release/v2.7","title":"v2.7 2024-04-09","sidebar_position":0,"hide_title":true,"keywords":["GoFrame","metric\u76D1\u63A7","OpenTelemetry","\u6570\u636E\u5E93\u652F\u6301","\u5B9A\u65F6\u4EFB\u52A1","gcron","HTTP\u76D1\u63A7","\u4E2D\u95F4\u4EF6","\u4EE3\u7801\u751F\u6210","gmetric\u7EC4\u4EF6"],"description":"GoFrame\u6846\u67B6\u53D1\u5E03v2.7.0\u7248\u672C\uFF0C\u65B0\u589Emetric\u76D1\u63A7\u7EC4\u4EF6\u5E76\u63D0\u4F9BHTTP Client\u548CServer\u7684\u76D1\u63A7\u6307\u6807\u5B9E\u73B0\uFF0C\u652F\u6301\u591A\u4E2A\u6570\u636E\u5E93\u7684Save\u64CD\u4F5C\uFF0C\u6539\u8FDBgcron\u5B9A\u65F6\u4EFB\u52A1\u7EC4\u4EF6\uFF0C\u589E\u5F3Agdb\u6570\u636E\u5E93\u7EC4\u4EF6\u529F\u80FD\u3002\u540C\u65F6\uFF0C\u4FEE\u590D\u82E5\u5E72\u7CFB\u7EDF\u95EE\u9898\uFF0C\u63D0\u5347\u6846\u67B6\u6027\u80FD\u548C\u7A33\u5B9A\u6027\u3002"},"sidebar":"releaseSidebar","previous":{"title":"\u7248\u672C\u53D1\u5E03\u8BF4\u660E","permalink":"/2.7.x/release/note"},"next":{"title":"v2.6 2023-12-19","permalink":"/2.7.x/release/v2.6"}}'),i=c("785893"),r=c("250065");let d={slug:"/release/v2.7",title:"v2.7 2024-04-09",sidebar_position:0,hide_title:!0,keywords:["GoFrame","metric\u76D1\u63A7","OpenTelemetry","\u6570\u636E\u5E93\u652F\u6301","\u5B9A\u65F6\u4EFB\u52A1","gcron","HTTP\u76D1\u63A7","\u4E2D\u95F4\u4EF6","\u4EE3\u7801\u751F\u6210","gmetric\u7EC4\u4EF6"],description:"GoFrame\u6846\u67B6\u53D1\u5E03v2.7.0\u7248\u672C\uFF0C\u65B0\u589Emetric\u76D1\u63A7\u7EC4\u4EF6\u5E76\u63D0\u4F9BHTTP Client\u548CServer\u7684\u76D1\u63A7\u6307\u6807\u5B9E\u73B0\uFF0C\u652F\u6301\u591A\u4E2A\u6570\u636E\u5E93\u7684Save\u64CD\u4F5C\uFF0C\u6539\u8FDBgcron\u5B9A\u65F6\u4EFB\u52A1\u7EC4\u4EF6\uFF0C\u589E\u5F3Agdb\u6570\u636E\u5E93\u7EC4\u4EF6\u529F\u80FD\u3002\u540C\u65F6\uFF0C\u4FEE\u590D\u82E5\u5E72\u7CFB\u7EDF\u95EE\u9898\uFF0C\u63D0\u5347\u6846\u67B6\u6027\u80FD\u548C\u7A33\u5B9A\u6027\u3002"},l=void 0,o={},h=[{value:"\u7EC4\u4EF6\u6539\u8FDB",id:"\u7EC4\u4EF6\u6539\u8FDB",level:2},{value:"\u793E\u533A\u7EC4\u4EF6",id:"\u793E\u533A\u7EC4\u4EF6",level:2},{value:"\u5F00\u53D1\u5DE5\u5177",id:"\u5F00\u53D1\u5DE5\u5177",level:2}];function x(e){let n={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["\u5927\u5BB6\u597D\uFF0C ",(0,i.jsx)(n.code,{children:"GoFrame"})," \u6846\u67B6\u4ECA\u5929\u53D1\u5E03\u4E86 ",(0,i.jsx)(n.code,{children:"v2.7.0"})," \u6B63\u5F0F\u7248\u672C\u5566\uFF01 \uD83D\uDC4F\uD83D\uDC4F\uD83D\uDC4F\uD83D\uDC4F\uD83D\uDC4F\uD83D\uDC4F\uD83D\uDC4F\uD83D\uDC4F\uD83D\uDC4F"]}),"\n",(0,i.jsxs)(n.p,{children:["\u672C\u6B21\u7248\u672C\u6700\u5927\u7684\u770B\u70B9\u662F\u63D0\u4F9B\u4E86 ",(0,i.jsx)(n.code,{children:"metric"})," \u76D1\u63A7\u7EC4\u4EF6\uFF0C\u4E3B\u5E93\u63D0\u4F9B\u4E86\u63A5\u53E3\u5316\u7684 ",(0,i.jsx)(n.code,{children:"metric"})," \u8BBE\u8BA1\uFF0C\u793E\u533A\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u57FA\u4E8E ",(0,i.jsx)(n.code,{children:"OpenTelemetry"})," \u7684 ",(0,i.jsx)(n.code,{children:"metric"})," \u63A5\u53E3\u5B9E\u73B0\u3002\u8BE5\u7279\u6027\u5728\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u662F\u5173\u95ED\u7684\uFF0C\u53EA\u6709\u5728\u5F15\u5165\u5177\u4F53\u7684\u63A5\u53E3\u5B9E\u73B0\u6216\u8005\u793E\u533A\u5B9E\u73B0\u65F6\u624D\u4F1A\u9ED8\u8BA4\u542F\u7528\u3002\u5F53\u524D\u7248\u672C\u540C\u65F6\u63D0\u4F9B\u4E86 ",(0,i.jsx)(n.code,{children:"HTTP Client&Server"})," \u7684\u76D1\u63A7\u6307\u6807\u5B9E\u73B0\uFF0C\u5176\u4ED6\u7EC4\u4EF6\u7684\u76D1\u63A7\u6307\u6807\u5C06\u5728\u540E\u7EED\u7248\u672C\u4E2D\u9646\u7EED\u63D0\u4F9B\u3002\u8BE6\u60C5\u8BF7\u53C2\u8003\u6587\u6863\uFF1A ",(0,i.jsx)(n.a,{href:"/2.7.x/docs/obs/metrics",children:"\u670D\u52A1\u76D1\u63A7\u544A\u8B66"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u540C\u65F6\uFF0C\u5728\u672C\u6B21\u7248\u672C\u4E2D\u5B9E\u73B0\u4E86\u5BF9 ",(0,i.jsx)(n.code,{children:"dm/mssql/oracle/pgsql/sqlite"})," \u6570\u636E\u5E93\u7684 ",(0,i.jsx)(n.code,{children:"Save"})," \u64CD\u4F5C\u652F\u6301\uFF0C\u611F\u8C22\u793E\u533A\u5C0F\u4F19\u4F34 ",(0,i.jsx)(n.a,{href:"https://github.com/oldme-git",children:"https://github.com/oldme-git"})," \uD83D\uDC96\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u6B64\u5916\uFF0C\u503C\u5F97\u4E00\u63D0\u7684\u662F\uFF0C\u5728\u672C\u6B21\u7248\u672C\u4E2D\uFF0C\u6211\u4EEC\u5BF9 ",(0,i.jsx)(n.code,{children:"gcron"})," \u5B9A\u65F6\u4EFB\u52A1\u7EC4\u4EF6\u5BF9\u79D2\u7EA7\u5B57\u6BB5\u589E\u52A0\u4E86\u5FFD\u7565\u7B26\u53F7 ",(0,i.jsx)(n.code,{children:"#"})," \u7684\u7279\u6027\uFF0C\u7528\u4E8E\u5C06 ",(0,i.jsx)(n.code,{children:"6"})," \u6BB5\u5F0F\u7684 ",(0,i.jsx)(n.code,{children:"cron pattern"})," \u8F6C\u6362\u4E3A\u7C7B\u4F3C\u4E8E ",(0,i.jsx)(n.code,{children:"5"})," \u6BB5\u5F0F\u7684 ",(0,i.jsx)(n.code,{children:"linux crontab pattern"})," \u529F\u80FD\uFF0C\u7528\u4E8E\u89E3\u51B3\u79D2\u7EA7\u7C92\u5EA6\u4E0B\u7531\u4E8E\u5EF6\u8FDF\u5F15\u8D77\u7684\u4EFB\u52A1\u6267\u884C\u4E0D\u51C6\u786E\u95EE\u9898\uFF1A ",(0,i.jsx)(n.a,{href:"/2.7.x/docs/components/os-gcron-pattern",children:"\u5B9A\u65F6\u4EFB\u52A1-\u8868\u8FBE\u5F0F"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u7531\u4E8E\u672C\u6B21\u7248\u672C\u53D8\u66F4\u5185\u5BB9\u8F83\u591A\uFF0C\u4EE5\u4E0B\u4E2D\u6587\u4ECB\u7ECD\u4E00\u4E9B\u8F83\u4E3A\u91CD\u8981\u7684\u6539\u8FDB\u70B9\uFF0C\u8BE6\u7EC6\u7684 ",(0,i.jsx)(n.code,{children:"ChangeLog"})," \u8BF7\u53C2\u8003\uFF1A ",(0,i.jsx)(n.a,{href:"https://github.com/gogf/gf/releases/tag/v2.7.0",children:"https://github.com/gogf/gf/releases/tag/v2.7.0"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u5B8C\u6574\u4EE3\u7801\u53D8\u66F4\u8BF7\u53C2\u8003\uFF1A",(0,i.jsx)(n.a,{href:"https://github.com/gogf/gf/compare/v2.6.0...v2.7.0",children:"https://github.com/gogf/gf/compare/v2.6.0...v2.7.0"})]}),"\n",(0,i.jsx)(n.p,{children:"\u611F\u8C22\u6240\u6709\u53C2\u4E0E\u672C\u6B21\u7248\u672C\u7684\u8D21\u732E\u5F00\u53D1\u8005\u4EEC\uD83D\uDC96\uFF01"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:c(657197).Z+"",width:"1228",height:"316"})}),"\n",(0,i.jsx)(n.h2,{id:"\u7EC4\u4EF6\u6539\u8FDB",children:"\u7EC4\u4EF6\u6539\u8FDB"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"gdb"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u65B0\u589E ",(0,i.jsx)(n.code,{children:"Stats"})," \u63A5\u53E3\u5B9A\u4E49\u53CA\u5B9E\u73B0\uFF0C\u7528\u4E8E\u83B7\u53D6\u5F53\u524D\u6570\u636E\u5E93 ",(0,i.jsx)(n.code,{children:"orm"})," \u5BF9\u8C61\u7EF4\u62A4\u7684\u8FDE\u63A5\u6C60\u4FE1\u606F\uFF1A ",(0,i.jsx)(n.a,{href:"/2.7.x/docs/core/gdb-senior-connection-pool",children:"ORM\u9AD8\u7EA7\u7279\u6027-\u8FDE\u63A5\u6C60\u72B6\u6001"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u65B0\u589E ",(0,i.jsx)(n.code,{children:"FormatUpsert"})," \u63A5\u53E3\u5B9A\u4E49\u53CA\u5B9E\u73B0\uFF0C\u7528\u4E8E\u4E0D\u540C\u6570\u636E\u5E93\u7C7B\u578B\u5B9E\u73B0\u5199\u5165/\u66F4\u65B0\u64CD\u4F5C\uFF0C\u5373 ",(0,i.jsx)(n.code,{children:"Save"})," \u64CD\u4F5C\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u65B0\u589E ",(0,i.jsx)(n.code,{children:"SqlType"})," \u7C7B\u578B\uFF0C\u5E76\u5C06\u5DF2\u6709\u7684 ",(0,i.jsx)(n.code,{children:"sql type"})," \u7C7B\u578B\u5B9A\u4E49\u4ECE ",(0,i.jsx)(n.code,{children:"string"})," \u7C7B\u578B\u6539\u4E3A\u4E86 ",(0,i.jsx)(n.code,{children:"SqlType"})," \u7C7B\u578B\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u65B0\u589E ",(0,i.jsx)(n.code,{children:"Model.OnConflict"})," \u65B9\u6CD5\uFF0C\u7528\u4E8E\u5B9E\u73B0\u90E8\u5206\u6570\u636E\u5E93\u7C7B\u578B\u5F53\u5B57\u6BB5\u552F\u4E00\u952E\u51B2\u7A81\u65F6\u7684\u66F4\u65B0\u7B56\u7565\uFF0C\u7279\u522B\u662F\u5B9E\u73B0 ",(0,i.jsx)(n.code,{children:"Save"})," \u64CD\u4F5C\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u4FEE\u590D ",(0,i.jsx)(n.code,{children:"ClearTableFieldsAll"})," \u65B9\u6CD5\u5931\u6548\u7684\u95EE\u9898\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ghttp"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u65B0\u589E ",(0,i.jsx)(n.code,{children:"MiddlewareNeverDoneCtx"})," \u4E2D\u95F4\u4EF6\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u9009\u62E9\u4F7F\u7528\uFF0C\u907F\u514D\u5BA2\u6237\u7AEF\u53D6\u6D88\u8BF7\u6C42\u65F6\u670D\u52A1\u7AEF\u6536\u5230\u7684 ",(0,i.jsx)(n.code,{children:"context cancel"})," \u95EE\u9898\uFF1A ",(0,i.jsx)(n.a,{href:"/2.7.x/docs/web/faq",children:"\u5E38\u89C1\u95EE\u9898"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u65B0\u589E ",(0,i.jsx)(n.code,{children:"http server"})," \u7684\u76D1\u63A7\u6307\u6807\u5B9E\u73B0\uFF0C\u9ED8\u8BA4\u5173\u95ED\u4E0D\u4F1A\u5F71\u54CD\u6027\u80FD\uFF0C\u53EA\u6709\u5728\u5F00\u542F ",(0,i.jsx)(n.code,{children:"metrics"})," \u7279\u6027\u65F6\u624D\u4F1A\u81EA\u52A8\u5F00\u542F\uFF1A ",(0,i.jsx)(n.a,{href:"/2.7.x/docs/web/senior-server-metrics",children:"HTTPServer-\u76D1\u63A7\u6307\u6807"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u6539\u8FDB ",(0,i.jsx)(n.code,{children:"tracing"})," \u8BB0\u5F55\uFF0C\u5C06 ",(0,i.jsx)(n.code,{children:"span"})," \u540D\u79F0\u4ECE ",(0,i.jsx)(n.code,{children:"query uri"})," \u6539\u4E3A\u4E86 ",(0,i.jsx)(n.code,{children:"route uri"}),"\uFF0C\u4FBF\u4E8E\u67E5\u770B\u65F6\u66F4\u5BB9\u6613\u805A\u5408\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u6539\u8FDB ",(0,i.jsx)(n.code,{children:"Request"})," \u5BF9\u8C61\u4E2D\u7684 ",(0,i.jsx)(n.code,{children:"EnterTime"})," \u53CA ",(0,i.jsx)(n.code,{children:"LeaveTime"})," \u5C5E\u6027\u7C7B\u578B\uFF0C\u4ECE ",(0,i.jsx)(n.code,{children:"int64"})," \u6539\u4E3A\u4E86 ",(0,i.jsx)(n.code,{children:"*gtime.Time"})," \u7C7B\u578B\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5C06 ",(0,i.jsx)(n.code,{children:"WebSocket"})," \u65B9\u6CD5\u6807\u8BB0\u5E9F\u5F03\uFF0C\u5C06\u4F1A\u5728\u672A\u6765\u7684\u5927\u7248\u672C\u4E2D\u53BB\u6389\uFF0C\u4E5F\u4F1A\u53BB\u6389 ",(0,i.jsx)(n.code,{children:"http server"})," \u5BF9 ",(0,i.jsx)(n.code,{children:"websocket"})," \u7684\u5185\u5D4C\u8026\u5408\u652F\u6301\u3002\u672A\u6765\u5EFA\u8BAE\u901A\u8FC7\u5176\u4ED6\u7684 ",(0,i.jsx)(n.code,{children:"websocket"})," \u5F00\u6E90\u7EC4\u4EF6\u7ED3\u5408 ",(0,i.jsx)(n.code,{children:"http server"})," \u4E00\u8D77\u4F7F\u7528\uFF0C\u66F4\u52A0\u89E3\u8026\u7075\u6D3B\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u4FEE\u590D\u7531\u4E8E ",(0,i.jsx)(n.code,{children:"Request Body"})," \u9ED8\u8BA4\u53EF\u91CD\u590D\u8BFB\u53D6\u7684\u95EE\u9898\u5F15\u53D1\u7684\u5927\u6587\u4EF6\u4E0A\u4F20\u5360\u7528\u5185\u5B58\u95EE\u9898\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u4FEE\u590D ",(0,i.jsx)(n.code,{children:"StartPProfServer"})," \u65B9\u6CD5\u7684 ",(0,i.jsx)(n.code,{children:"pattern"})," \u53C2\u6570\u5931\u6548\u95EE\u9898\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u6587\u4EF6\u4E0B\u8F7D\u65B9\u6CD5 ",(0,i.jsx)(n.code,{children:"Request.ServeFileDownload"})," \u65B9\u6CD5\u65B0\u589E ",(0,i.jsx)(n.code,{children:"Access-Control-Expose-Headers Header"})," \u8FD4\u56DE\uFF0C\u4EE5\u652F\u6301 ",(0,i.jsx)(n.code,{children:"ajax"})," \u6587\u4EF6\u8BF7\u6C42\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u670D\u52A1\u914D\u7F6E\u65B0\u589E ",(0,i.jsx)(n.code,{children:"SwaggerUITemplate"})," \u914D\u7F6E\u9879\uFF0C\u7528\u4E8E\u5FEB\u6377\u914D\u7F6E ",(0,i.jsx)(n.code,{children:"SwaggerUI"})," \u9875\u9762\u7684 ",(0,i.jsx)(n.code,{children:"HTML"})," \u5185\u5BB9\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"http server"})," \u542F\u52A8\u8DEF\u7531\u6253\u5370\u65F6\u4E0D\u518D\u6253\u5370\u5185\u7F6E\u7684\u4E2D\u95F4\u4EF6\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"gclient"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u4FEE\u590D\u5728\u5F00\u542F\u670D\u52A1\u53D1\u73B0\u7684\u60C5\u51B5\u4E0B\uFF0C\u6240\u6709\u7684 ",(0,i.jsx)(n.code,{children:"http"})," \u8BF7\u6C42\u5747\u4F1A\u5F3A\u5236\u8D70\u670D\u52A1\u53D1\u73B0\u7684\u57DF\u540D\u89E3\u6790\u95EE\u9898\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u65B0\u589E ",(0,i.jsx)(n.code,{children:"http client"})," \u7684\u76D1\u63A7\u6307\u6807\u5B9E\u73B0\uFF0C\u9ED8\u8BA4\u5173\u95ED\u4E0D\u4F1A\u5F71\u54CD\u6027\u80FD\uFF0C\u53EA\u6709\u5728\u5F00\u542F ",(0,i.jsx)(n.code,{children:"metrics"})," \u7279\u6027\u65F6\u624D\u4F1A\u81EA\u52A8\u5F00\u542F\uFF1A ",(0,i.jsx)(n.a,{href:"/2.7.x/docs/web/http-client-metrics",children:"HTTPClient-\u76D1\u63A7\u6307\u6807"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"gcron"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u65B0\u589E\u5FFD\u7565\u7B26\u53F7 ",(0,i.jsx)(n.code,{children:"#"}),"\uFF0C\u5BF9 ",(0,i.jsx)(n.code,{children:"cron pattern"})," \u4E2D\u7684 ",(0,i.jsx)(n.strong,{children:"\u79D2\u5B57\u6BB5"})," \u8FDB\u884C\u5360\u4F4D\uFF0C\u8868\u793A\u5FFD\u7565\u79D2\u5B57\u6BB5\uFF0C\u7528\u4E8E\u5C06 ",(0,i.jsx)(n.code,{children:"6"})," \u6BB5\u5F0F\u7684 ",(0,i.jsx)(n.code,{children:"cron pattern"})," \u8F6C\u6362\u4E3A ",(0,i.jsx)(n.code,{children:"5"})," \u6BB5\u5F0F\u7684 ",(0,i.jsx)(n.code,{children:"linux crontab pattern"}),"\uFF1A ",(0,i.jsx)(n.a,{href:"/2.7.x/docs/components/os-gcron-pattern",children:"\u5B9A\u65F6\u4EFB\u52A1-\u8868\u8FBE\u5F0F"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u4FEE\u590D\u5728\u786E\u5B9A\u7684\u79D2\u7EA7\u4EFB\u52A1\u573A\u666F\u4E2D\uFF08\u4F8B\u5982 ",(0,i.jsx)(n.code,{children:"2\xa0* * * * *"}),"\uFF09\uFF0C\u5F53\u5E95\u5C42\u65F6\u95F4\u51FA\u73B0\u4E0D\u51C6\u786E\u65F6\u53EF\u80FD\u5F15\u53D1\u4E24\u6B21\u4EFB\u52A1\u6267\u884C\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"gerror"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u4FEE\u590D ",(0,i.jsx)(n.code,{children:"gerror.HasCode"})," \u65B9\u6CD5\u9012\u5F52\u903B\u8F91\u5931\u6548\u7684\u95EE\u9898\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"g"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u6539\u8FDB ",(0,i.jsx)(n.code,{children:"DumpJson"})," \u65B9\u6CD5\uFF0C\u7528\u4E8E\u5B9E\u73B0\u5BF9\u4EFB\u610F\u53D8\u91CF\u6309\u7167 ",(0,i.jsx)(n.code,{children:"JSON"})," \u683C\u5F0F\u8FDB\u884C\u6253\u5370\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"gcache"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u4FEE\u590D\u5927\u91CF\u521B\u5EFA ",(0,i.jsx)(n.code,{children:"Cache"})," \u5BF9\u8C61\u5F15\u53D1\u7684 ",(0,i.jsx)(n.code,{children:"goroutine"})," \u8FC7\u591A\u95EE\u9898\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"gcmd"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u65B0\u589E ",(0,i.jsx)(n.code,{children:"RunWithSpecificArgs"})," \u65B9\u6CD5\uFF0C\u7528\u4E8E\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684 ",(0,i.jsx)(n.code,{children:"arguments"})," \u8FD0\u884C\u547D\u4EE4\u5BF9\u8C61\u3002"]}),"\n",(0,i.jsx)(n.li,{children:"\u4FEE\u590D\u90E8\u5206\u573A\u666F\u4E0B\u7531\u4E8E\u53C2\u6570\u7ED3\u6784\u4F53\u540D\u79F0\u548C\u7ED3\u6784\u4F53\u6807\u7B7E\u540D\u79F0\u51B2\u7A81\u5F15\u53D1\u7684\u53C2\u6570\u4E22\u5931\u95EE\u9898\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"gfsnotify"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u4FEE\u590D ",(0,i.jsx)(n.code,{children:"gfsnotify"})," \u5BF9\u8C61\u5173\u95ED\u65F6\u53EF\u80FD\u5F15\u53D1\u7684 ",(0,i.jsx)(n.code,{children:"panic"})," \u95EE\u9898\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"glog"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u4FEE\u590D ",(0,i.jsx)(n.code,{children:"rotate"})," \u7279\u6027\u5BF9 ",(0,i.jsx)(n.code,{children:"gz"})," \u540E\u7F00\u65E5\u5FD7\u538B\u7F29\u6587\u4EF6\u7684\u91CD\u590D ",(0,i.jsx)(n.code,{children:"rotate"})," \u95EE\u9898\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"gmetric"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u65B0\u589E ",(0,i.jsx)(n.code,{children:"gmetric"})," \u7EC4\u4EF6\uFF0C\u91C7\u7528\u4E86\u89E3\u8026\u8BBE\u8BA1\uFF0C\u53EA\u6709\u63A5\u53E3\u5B9A\u4E49\u548C ",(0,i.jsx)(n.code,{children:"Noop"})," \u7684\u5B9E\u73B0\uFF0C\u771F\u5B9E\u7684\u5B9E\u73B0\u5728\u793E\u533A\u7EC4\u4EF6\u4E2D\u3002\u53EA\u6709\u5F15\u5165\u5177\u4F53\u7684\u5B9E\u73B0\u624D\u4F1A\u771F\u5B9E\u5F00\u542F ",(0,i.jsx)(n.code,{children:"metric"})," \u7279\u6027\uFF1A ",(0,i.jsx)(n.a,{href:"/2.7.x/docs/obs/metrics",children:"\u670D\u52A1\u76D1\u63A7\u544A\u8B66"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"gproc"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u4FEE\u590D\u8FDB\u7A0B\u53C2\u6570\u89E3\u6790\u5728 ",(0,i.jsx)(n.code,{children:"windows"})," \u4E0B\u53EF\u80FD\u5931\u8D25\u7684\u95EE\u9898\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u6539\u8FDB ",(0,i.jsx)(n.code,{children:"Signal"})," \u4FE1\u53F7\u76D1\u542C\u5B9E\u73B0\uFF0C\u5141\u8BB8\u5728\u8FD0\u884C\u65F6\u589E\u52A0\u4FE1\u53F7\u76D1\u542C\u5904\u7406\u65B9\u6CD5\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"gview"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u4FEE\u590D\u7531\u4E8E ",(0,i.jsx)(n.code,{children:"os.Getwd"})," \u65B9\u6CD5\u6267\u884C\u5931\u8D25\u5F15\u8D77\u7684\u5065\u58EE\u6027\u95EE\u9898\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"gconv"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"json.RawMessage"})," \u652F\u6301\u63A5\u53D7 ",(0,i.jsx)(n.code,{children:"slice"})," \u7C7B\u578B\u7684\u53C2\u6570\u8F6C\u6362\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u4FEE\u590D ",(0,i.jsx)(n.code,{children:"MapDeep"})," \u5185\u90E8\u8F6C\u6362\u7F3A\u5931 ",(0,i.jsx)(n.code,{children:"Deep"})," \u53C2\u6570\u5F15\u53D1\u7684\u9012\u5F52\u8F6C\u6362\u5931\u8D25\u95EE\u9898\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"MapRange"})," \u6539\u8FDB\u5185\u90E8 ",(0,i.jsx)(n.code,{children:"Map"})," \u904D\u5386\u903B\u8F91\uFF0C\u63D0\u9AD8\u6267\u884C\u6027\u80FD\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u793E\u533A\u7EC4\u4EF6",children:"\u793E\u533A\u7EC4\u4EF6"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u793E\u533A ",(0,i.jsx)(n.code,{children:"contrib/drivers"})," \u6570\u636E\u5E93\u7EC4\u4EF6\u7684\u6539\u8FDB\uFF1A"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"contrib/drivers/dm"})," \u7EC4\u4EF6\u65B0\u589E\u5BF9 ",(0,i.jsx)(n.code,{children:"Save"})," \u64CD\u4F5C\u7684\u652F\u6301\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"contrib/drivers/mssql"})," \u7EC4\u4EF6\u65B0\u589E\u5BF9 ",(0,i.jsx)(n.code,{children:"Save"})," \u64CD\u4F5C\u7684\u652F\u6301\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"contrib/drivers/oracle"})," \u7EC4\u4EF6\u65B0\u589E\u5BF9 ",(0,i.jsx)(n.code,{children:"Save"})," \u64CD\u4F5C\u7684\u652F\u6301\uFF0C\u5E76\u4FEE\u590D\u5199\u5165\u53C2\u6570\u4E0D\u652F\u6301 ",(0,i.jsx)(n.code,{children:"gdb.Raw"})," \u7C7B\u578B\u7684\u95EE\u9898\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"contrib/drivers/pgsql"})," \u7EC4\u4EF6\u65B0\u589E\u5BF9 ",(0,i.jsx)(n.code,{children:"Save"})," \u64CD\u4F5C\u7684\u652F\u6301\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"contrib/drivers/sqlite"})," \u7EC4\u4EF6\u65B0\u589E\u5BF9 ",(0,i.jsx)(n.code,{children:"Save"})," \u64CD\u4F5C\u7684\u652F\u6301\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"contrib/drivers/sqlitecgo"})," \u7EC4\u4EF6\u65B0\u589E\u5BF9 ",(0,i.jsx)(n.code,{children:"Save"})," \u64CD\u4F5C\u7684\u652F\u6301\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u65B0\u589E ",(0,i.jsx)(n.code,{children:"contrib/metric/otelmetric"})," \u7EC4\u4EF6\uFF0C\u5B9E\u73B0\u4E86\u5BF9 ",(0,i.jsx)(n.code,{children:"OpenTelemetry Metric"})," \u7684\u652F\u6301\uFF1A ",(0,i.jsx)(n.a,{href:"/2.7.x/docs/obs/metrics",children:"\u670D\u52A1\u76D1\u63A7\u544A\u8B66"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u6539\u8FDB ",(0,i.jsx)(n.code,{children:"contrib/nosql/redis"})," \u7EC4\u4EF6\uFF1A"]}),"\n",(0,i.jsxs)(n.li,{children:["\u65B0\u589E ",(0,i.jsx)(n.code,{children:"SentinelUsername"})," \u53CA ",(0,i.jsx)(n.code,{children:"SentinelPassword"})," \u53C2\u6570\u914D\u7F6E\uFF0C\u4EE5\u6269\u5C55\u5BF9 ",(0,i.jsx)(n.code,{children:"Redis Sentinel"})," \u6A21\u5F0F\u7684\u652F\u6301\uFF1A ",(0,i.jsx)(n.a,{href:"/2.7.x/docs/components/contrib-nosql-redis-config",children:"Redis-\u914D\u7F6E\u7BA1\u7406"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u6539\u8FDB ",(0,i.jsx)(n.code,{children:"Redis"})," \u63A5\u53E3\u5B9E\u73B0\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u7075\u6D3B\u81EA\u5B9A\u4E49\u6269\u5C55\u3001\u8986\u76D6\u793E\u533A\u7EC4\u4EF6\u5BF9\u8C61 ",(0,i.jsx)(n.code,{children:"redis.Redis"})," \u7C7B\u578B\u7684\u5B9E\u73B0\uFF1A ",(0,i.jsx)(n.a,{href:"/2.7.x/docs/components/contrib-nosql-redis-interface",children:"Redis-\u63A5\u53E3\u5316\u8BBE\u8BA1"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u6539\u8FDB ",(0,i.jsx)(n.code,{children:"contrib/registry/etcd"})," \u7EC4\u4EF6\uFF0C\u5141\u8BB8\u5F00\u53D1\u8005\u914D\u7F6E ",(0,i.jsx)(n.code,{children:"etcd"})," \u94FE\u63A5\u7684\u6821\u9A8C\u4FE1\u606F\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u6539\u8FDB ",(0,i.jsx)(n.code,{children:"contrib/rpc/grpcx"})," \u7EC4\u4EF6\uFF1A"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5BF9\u542F\u7528 ",(0,i.jsx)(n.code,{children:"tracing"})," \u7279\u6027\u65F6\uFF0C\u5B89\u5168\u622A\u65AD\u8BF7\u6C42\u5185\u5BB9\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u65B0\u589E\u5BF9 ",(0,i.jsx)(n.code,{children:"logger"})," \u914D\u7F6E\u9879\u7684\u652F\u6301\uFF0C\u5141\u8BB8\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"logger"})," \u914D\u7F6E\u9879\u914D\u7F6E ",(0,i.jsx)(n.code,{children:"grpc server"})," \u7684\u65E5\u5FD7\u5BF9\u8C61\uFF1A ",(0,i.jsx)(n.a,{href:"/2.7.x/docs/micro-service/config",children:"\u670D\u52A1\u7AEF\u914D\u7F6E"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u6539\u8FDB ",(0,i.jsx)(n.code,{children:"contrib/trace/otlphttp"})," \u53CA ",(0,i.jsx)(n.code,{children:"contrib/trace/otlpgrpc"})," \u7EC4\u4EF6\uFF0C\u4FEE\u590D\u5728\u77ED\u8FDB\u7A0B\u573A\u666F\u4E0B\u6B63\u5E38 ",(0,i.jsx)(n.code,{children:"ShutDown"})," \u4ECD\u53EF\u80FD\u4F1A\u51FA\u73B0\u7684 ",(0,i.jsx)(n.code,{children:"trace"})," \u6570\u636E\u4E22\u5931\u95EE\u9898\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5F00\u53D1\u5DE5\u5177",children:"\u5F00\u53D1\u5DE5\u5177"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u6539\u8FDB ",(0,i.jsx)(n.code,{children:"gen dao"})," \u751F\u6210\u7684 ",(0,i.jsx)(n.code,{children:"entity"})," \u6E90\u6587\u4EF6\uFF0C\u589E\u52A0 ",(0,i.jsx)(n.code,{children:"orm"})," \u6807\u7B7E\uFF0C\u4EE5\u63D0\u9AD8\u6570\u636E\u5E93\u67E5\u8BE2\u7ED3\u679C\u8F6C\u6362\u5230 ",(0,i.jsx)(n.code,{children:"entity"})," \u5BF9\u8C61\u7684\u6548\u7387\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u6539\u8FDB ",(0,i.jsx)(n.code,{children:"gen service"})," \u547D\u4EE4\uFF0C\u4FEE\u590D\u751F\u6210\u7684\u6E90\u7801\u6587\u4EF6\u4E2D\uFF0C\u65B9\u6CD5\u987A\u5E8F\u4E0D\u4E00\u81F4\u95EE\u9898\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u6539\u8FDB ",(0,i.jsx)(n.code,{children:"build"})," \u547D\u4EE4\uFF0C\u5C06\u751F\u6210\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6\u5B58\u653E\u76EE\u5F55 ",(0,i.jsx)(n.code,{children:"path"})," \u53C2\u6570\u7684\u9ED8\u8BA4\u503C\u4ECE ",(0,i.jsx)(n.code,{children:"./temp"})," \u6539\u4E3A\u4E86 ",(0,i.jsx)(n.code,{children:"."})," \u5373\u5F53\u524D\u76EE\u5F55\uFF0C\u4EE5\u89E3\u51B3\u8BE5\u53C2\u6570\u81EA\u5B9A\u4E49\u5931\u6548\u7684\u95EE\u9898\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u6539\u8FDB ",(0,i.jsx)(n.code,{children:"init"})," \u547D\u4EE4\uFF0C\u65B0\u589E ",(0,i.jsx)(n.code,{children:"-module/g"})," \u53C2\u6570\uFF0C\u7528\u4E8E\u5728\u521D\u59CB\u5316\u9879\u76EE\u65F6\u663E\u5F0F\u6307\u5B9A ",(0,i.jsx)(n.code,{children:"go module"})," \u540D\u79F0\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u4FEE\u590D ",(0,i.jsx)(n.code,{children:"gen dao"})," \u5728\u591A\u4E2A\u6570\u636E\u5E93\u751F\u6210\u914D\u7F6E\u4E0B\uFF0C\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"clear"})," \u53C2\u6570\u65F6\u5220\u9664\u5DF2\u751F\u6210\u7684 ",(0,i.jsx)(n.code,{children:"dao"})," \u6E90\u6587\u4EF6\u7684\u95EE\u9898\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u4FEE\u590D ",(0,i.jsx)(n.code,{children:"gen pbentity"})," \u547D\u4EE4\uFF0C\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684 ",(0,i.jsx)(n.code,{children:"jsonCase"})," \u53C2\u6570\u65E0\u6548\u7684\u95EE\u9898\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u4FEE\u590D ",(0,i.jsx)(n.code,{children:"run"})," \u547D\u4EE4\u7684 ",(0,i.jsx)(n.code,{children:"-w"})," \u6307\u5B9A\u76D1\u542C\u76EE\u5F55\u53C2\u6570\u5931\u6548\u7684\u95EE\u9898\u3002"]}),"\n"]})]})}function t(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},657197:function(e,n,c){c.d(n,{Z:function(){return s}});let s=c.p+"assets/images/950e1af6550f59942ab68e09ffb63c72-5b310816bdfa35b80a266f53ae864458.png"},250065:function(e,n,c){c.d(n,{Z:function(){return l},a:function(){return d}});var s=c(667294);let i={},r=s.createContext(i);function d(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);