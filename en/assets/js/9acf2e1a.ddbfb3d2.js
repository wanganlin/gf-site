"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["20337"],{651706:function(e,n,i){i.r(n),i.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>x,assets:()=>o,toc:()=>h,frontMatter:()=>d});var s=JSON.parse('{"id":"release/\u5386\u53F2\u7248\u672C\u8BB0\u5F55 v1.x/v1.9 2019-09-24","title":"v1.9 2019-09-24","description":"GoFrame\u6846\u67B6\u53D1\u5E03v1.9\u7248\u672C\uFF0C\u5305\u542B\u91CD\u8981\u7684\u65B0\u7279\u6027\u548C\u529F\u80FD\u6539\u8FDB\u3002\u65B0\u589E\u4E86gf\u547D\u4EE4\u884C\u5DE5\u5177\u3001gres\u8D44\u6E90\u7BA1\u7406\u5668\u548Cgsession\u6A21\u5757\u7B49\uFF0C\u5E76\u542F\u7528\u66F4\u4FBF\u6377\u7684WebServer\u8DEF\u7531\u6CE8\u518C\u65B9\u5F0F\u3002\u6539\u8FDB\u4E86ghttp\u548Cgdb\u7B49\u6A21\u5757\uFF0C\u8C03\u6574container\u5206\u7C7B\u6A21\u5757\uFF0C\u540C\u65F6\u4FEE\u590D\u4E86\u4E00\u4E9B\u5DF2\u77E5\u95EE\u9898\u3002","source":"@site/versioned_docs/version-2.7.x/release/\u5386\u53F2\u7248\u672C\u8BB0\u5F55 v1.x/v1.9 2019-09-24.md","sourceDirName":"release/\u5386\u53F2\u7248\u672C\u8BB0\u5F55 v1.x","slug":"/release/v1.9","permalink":"/en/2.7.x/release/v1.9","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/release/\u5386\u53F2\u7248\u672C\u8BB0\u5F55 v1.x/v1.9 2019-09-24.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":7,"frontMatter":{"slug":"/release/v1.9","title":"v1.9 2019-09-24","sidebar_position":7,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","gf\u547D\u4EE4\u884C","gres\u8D44\u6E90\u7BA1\u7406\u5668","gsession\u6A21\u5757","gi18n\u56FD\u9645\u5316","gini\u6A21\u5757","gcmd\u89E3\u6790","gdebug\u6A21\u5757","WebServer\u4E2D\u95F4\u4EF6"],"description":"GoFrame\u6846\u67B6\u53D1\u5E03v1.9\u7248\u672C\uFF0C\u5305\u542B\u91CD\u8981\u7684\u65B0\u7279\u6027\u548C\u529F\u80FD\u6539\u8FDB\u3002\u65B0\u589E\u4E86gf\u547D\u4EE4\u884C\u5DE5\u5177\u3001gres\u8D44\u6E90\u7BA1\u7406\u5668\u548Cgsession\u6A21\u5757\u7B49\uFF0C\u5E76\u542F\u7528\u66F4\u4FBF\u6377\u7684WebServer\u8DEF\u7531\u6CE8\u518C\u65B9\u5F0F\u3002\u6539\u8FDB\u4E86ghttp\u548Cgdb\u7B49\u6A21\u5757\uFF0C\u8C03\u6574container\u5206\u7C7B\u6A21\u5757\uFF0C\u540C\u65F6\u4FEE\u590D\u4E86\u4E00\u4E9B\u5DF2\u77E5\u95EE\u9898\u3002"},"sidebar":"releaseSidebar","previous":{"title":"v1.10 2019-12-05","permalink":"/en/2.7.x/release/v1.10"},"next":{"title":"v1.8 2019-07-15","permalink":"/en/2.7.x/release/v1.8"}}'),r=i("785893"),l=i("250065");let d={slug:"/release/v1.9",title:"v1.9 2019-09-24",sidebar_position:7,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","gf\u547D\u4EE4\u884C","gres\u8D44\u6E90\u7BA1\u7406\u5668","gsession\u6A21\u5757","gi18n\u56FD\u9645\u5316","gini\u6A21\u5757","gcmd\u89E3\u6790","gdebug\u6A21\u5757","WebServer\u4E2D\u95F4\u4EF6"],description:"GoFrame\u6846\u67B6\u53D1\u5E03v1.9\u7248\u672C\uFF0C\u5305\u542B\u91CD\u8981\u7684\u65B0\u7279\u6027\u548C\u529F\u80FD\u6539\u8FDB\u3002\u65B0\u589E\u4E86gf\u547D\u4EE4\u884C\u5DE5\u5177\u3001gres\u8D44\u6E90\u7BA1\u7406\u5668\u548Cgsession\u6A21\u5757\u7B49\uFF0C\u5E76\u542F\u7528\u66F4\u4FBF\u6377\u7684WebServer\u8DEF\u7531\u6CE8\u518C\u65B9\u5F0F\u3002\u6539\u8FDB\u4E86ghttp\u548Cgdb\u7B49\u6A21\u5757\uFF0C\u8C03\u6574container\u5206\u7C7B\u6A21\u5757\uFF0C\u540C\u65F6\u4FEE\u590D\u4E86\u4E00\u4E9B\u5DF2\u77E5\u95EE\u9898\u3002"},c=void 0,o={},h=[{value:"\u65B0\u7279\u6027",id:"\u65B0\u7279\u6027",level:3},{value:"\u91CD\u5927\u8C03\u6574",id:"\u91CD\u5927\u8C03\u6574",level:3},{value:"\u529F\u80FD\u6539\u8FDB",id:"\u529F\u80FD\u6539\u8FDB",level:3},{value:"Bug Fix",id:"bug-fix",level:3}];function t(e){let n={a:"a",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u8BE5\u7248\u672C\u5B9E\u9645\u4E3A ",(0,r.jsx)(n.code,{children:"v2.0"})," \u7684\u5927\u7248\u672C\u53D1\u5E03\uFF0C\u4E3A\u907F\u514D ",(0,r.jsx)(n.code,{children:"go module"})," \u673A\u5236\u4E25\u683C\u8981\u6C42 ",(0,r.jsx)(n.code,{children:"v2"})," \u7248\u672C\u4EE5\u4E0A\u9700\u8981\u4FEE\u6539 ",(0,r.jsx)(n.code,{children:"import"})," \u5E76\u52A0\u4E0A ",(0,r.jsx)(n.code,{children:"v2"})," \u540E\u7F00\uFF0C\u56E0\u6B64\u4F7F\u7528\u4E86 ",(0,r.jsx)(n.code,{children:"v1.9"})," \u8FDB\u884C\u53D1\u5E03\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u65B0\u7279\u6027",children:"\u65B0\u7279\u6027"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u65B0\u589E ",(0,r.jsx)(n.code,{children:"gf"})," \u547D\u4EE4\u884C\u5F00\u53D1\u8F85\u52A9\u5DE5\u5177\uFF1A ",(0,r.jsx)(n.a,{href:"https://wiki.goframe.org/toolchain/cli",children:"https://goframe.org/toolchain/cli"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u65B0\u589E ",(0,r.jsx)(n.code,{children:"gres"})," \u8D44\u6E90\u7BA1\u7406\u5668\u6A21\u5757\uFF1A ",(0,r.jsx)(n.a,{href:"https://wiki.goframe.org/os/gres/index",children:"https://goframe.org/os/gres/index"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u91CD\u6784 ",(0,r.jsx)(n.code,{children:"Session"})," \u529F\u80FD\uFF0C\u65B0\u589E ",(0,r.jsx)(n.code,{children:"gsession"})," \u6A21\u5757\uFF0C ",(0,r.jsx)(n.code,{children:"WebServer"})," \u9ED8\u8BA4\u4F7F\u7528\u6587\u4EF6\u5B58\u50A8 ",(0,r.jsx)(n.code,{children:"Session"}),"\uFF1A ",(0,r.jsx)(n.a,{href:"https://wiki.goframe.org/net/ghttp/session",children:"https://goframe.org/net/ghttp/session"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"WebServer"})," \u65B0\u589E\u4E2D\u95F4\u4EF6\u7279\u6027\uFF0C\u5E76\u4FDD\u7559\u539F\u6709\u7684HOOK\u8BBE\u8BA1\uFF0C\u4E24\u8005\u90FD\u53EF\u5B9E\u73B0\u8BF7\u6C42\u62E6\u622A\u3001\u9884\u5904\u7406\u7B49\u7B49\u7279\u6027\uFF1A ",(0,r.jsx)(n.a,{href:"https://wiki.goframe.org/net/ghttp/router/middleware",children:"https://goframe.org/net/ghttp/router/middleware"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u65B0\u589E ",(0,r.jsx)(n.code,{children:"gi18n"})," \u56FD\u9645\u5316\u7BA1\u7406\u6A21\u5757\uFF1A ",(0,r.jsx)(n.a,{href:"https://wiki.goframe.org/i18n/gi18n/index",children:"https://goframe.org/i18n/gi18n/index"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u65B0\u589E ",(0,r.jsx)(n.code,{children:"gini"})," \u6A21\u5757\uFF1A ",(0,r.jsx)(n.a,{href:"https://wiki.goframe.org/encoding/gini/index",children:"https://goframe.org/encoding/gini/index"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"WebServer"})," \u65B0\u589E\u66F4\u4FBF\u6377\u7684\u5C42\u7EA7\u8DEF\u7531\u6CE8\u518C\u65B9\u5F0F\uFF1A ",(0,r.jsx)(n.a,{href:"https://wiki.goframe.org/net/ghttp/group/level",children:"https://goframe.org/net/ghttp/group/level"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"gcmd"})," \u547D\u4EE4\u884C\u53C2\u6570\u89E3\u6790\u6A21\u5757\u91CD\u6784\uFF0C\u589E\u52A0 ",(0,r.jsx)(n.code,{children:"Parser"})," \u89E3\u6790\u5BF9\u8C61\uFF1A ",(0,r.jsx)(n.a,{href:"https://wiki.goframe.org/os/gcmd/index",children:"https://goframe.org/os/gcmd/index"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u65B0\u589E ",(0,r.jsx)(n.code,{children:"gdebug"})," \u6A21\u5757\uFF0C\u7528\u4E8E\u5806\u6808\u4FE1\u606F\u83B7\u53D6/\u6253\u5370\uFF1A ",(0,r.jsx)(n.a,{href:"https://wiki.goframe.org/debug/gdebug/index",children:"https://goframe.org/debug/gdebug/index"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u91CD\u5927\u8C03\u6574",children:"\u91CD\u5927\u8C03\u6574"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u53BB\u6389 ",(0,r.jsx)(n.code,{children:"1.x"})," \u7248\u672C\u4E2D\u5DF2\u7ECF\u88AB\u6807\u8BB0\u4E3A ",(0,r.jsx)(n.code,{children:"deprecated"})," \u7684\u65B9\u6CD5\uFF1B"]}),"\n",(0,r.jsxs)(n.li,{children:["\u8C03\u6574 ",(0,r.jsx)(n.code,{children:"container"})," \u5206\u7C7B\u7684\u5BB9\u5668\u6A21\u5757\uFF0C\u5C06\u9ED8\u8BA4\u5E76\u53D1\u5B89\u5168\u53C2\u6570\u8C03\u6574\u4E3A\u9ED8\u8BA4\u975E\u5E76\u53D1\u5B89\u5168\uFF1B"]}),"\n",(0,r.jsxs)(n.li,{children:["\u76EE\u5F55\u8C03\u6574:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u53BB\u6389 ",(0,r.jsx)(n.code,{children:"third"})," \u76EE\u5F55\uFF0C\u7EDF\u4E00\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"go module"})," \u7BA1\u7406\u5305\u4F9D\u8D56\uFF1B"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5C06\u539F\u6709 ",(0,r.jsx)(n.code,{children:"g"})," \u76EE\u5F55\u4E2D\u7684\u6A21\u5757\u79FB\u51FA\u5230\u6846\u67B6\u4E3B\u76EE\u5F55\uFF0C\u539F\u6709\u7684 ",(0,r.jsx)(n.code,{children:"g"})," \u6A21\u5757\u79FB\u52A8\u5230 ",(0,r.jsx)(n.code,{children:"frame/g"})," \u76EE\u5F55\uFF1B"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5C06\u539F\u6709 ",(0,r.jsx)(n.code,{children:"geg"})," \u793A\u4F8B\u4EE3\u7801\u76EE\u5F55\u540D\u79F0\u4FEE\u6539\u4E3A ",(0,r.jsx)(n.code,{children:".example"}),"\uFF1B"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u529F\u80FD\u6539\u8FDB",children:"\u529F\u80FD\u6539\u8FDB"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ghttp"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u6539\u8FDB ",(0,r.jsx)(n.code,{children:"Request"})," \u53C2\u6570\u89E3\u6790\u65B9\u5F0F\uFF1A ",(0,r.jsx)(n.a,{href:"https://wiki.goframe.org/net/ghttp/request",children:"https://goframe.org/net/ghttp/request"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u6539\u8FDB\u8DE8\u57DF\u8BF7\u6C42\u529F\u80FD\uFF0C\u65B0\u589E ",(0,r.jsx)(n.code,{children:"Origin"})," \u8BBE\u7F6E\u53CA\u6821\u9A8C\u529F\u80FD\uFF1A ",(0,r.jsx)(n.a,{href:"https://wiki.goframe.org/net/ghttp/cors",children:"https://goframe.org/net/ghttp/cors"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Cookie"})," \u53CA ",(0,r.jsx)(n.code,{children:"Session"})," \u7684 ",(0,r.jsx)(n.code,{children:"TTL"})," \u914D\u7F6E\u6570\u636E\u7C7B\u578B\u4FEE\u6539\u4E3A ",(0,r.jsx)(n.code,{children:"time.Duration"}),";"]}),"\n",(0,r.jsxs)(n.li,{children:["\u65B0\u589E\u5141\u8BB8\u540C\u65F6\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"Header/Cookie"})," \u4F20\u9012 ",(0,r.jsx)(n.code,{children:"SessionId"}),"\uFF1B"]}),"\n",(0,r.jsxs)(n.li,{children:["\u65B0\u589E ",(0,r.jsx)(n.code,{children:"ConfigFromMap/SetConfigWithMap"})," \u65B9\u6CD5\uFF0C\u652F\u6301\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"map"})," \u53C2\u6570\u8BBE\u7F6EWebServer\uFF1B"]}),"\n",(0,r.jsxs)(n.li,{children:["\u6539\u8FDB\u9ED8\u8BA4\u7684 ",(0,r.jsx)(n.code,{children:"CORS"})," \u914D\u7F6E\uFF0C\u589E\u52A0\u5BF9\u5E38\u89C1 ",(0,r.jsx)(n.code,{children:"Header"})," \u53C2\u6570\u7684\u9ED8\u8BA4\u652F\u6301\uFF1B"]}),"\n",(0,r.jsxs)(n.li,{children:["\u65B0\u589E ",(0,r.jsx)(n.code,{children:"IsExitError"})," \u65B9\u6CD5\uFF0C\u7528\u4E8E\u5F00\u53D1\u8005\u81EA\u5B9A\u4E49\u5904\u7406 ",(0,r.jsx)(n.code,{children:"recover"})," \u9519\u8BEF\u5904\u7406\u65F6\uFF0C\u8FC7\u6EE4\u6846\u67B6\u672C\u8EAB\u81EA\u5B9A\u4E49\u7684\u975E\u5F02\u5E38\u9519\u8BEF\uFF1B"]}),"\n",(0,r.jsxs)(n.li,{children:["\u65B0\u589E ",(0,r.jsx)(n.code,{children:"SetSessionStorage"})," \u914D\u7F6E\u65B9\u6CD5\uFF0C\u7528\u4E8E\u5F00\u53D1\u8005\u81EA\u5B9A\u4E49 ",(0,r.jsx)(n.code,{children:"Session"})," \u5B58\u50A8\uFF1B"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ghttp.Request"})," \u65B0\u589E\u66F4\u591A\u7684\u53C2\u6570\u83B7\u53D6\u65B9\u6CD5\uFF1B"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"gdb"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u589E\u52A0\u5BF9SQL\u4E2D\u90E8\u5206\u5B57\u6BB5\u7684\u81EA\u52A8\u8F6C\u4E49( ",(0,r.jsx)(n.code,{children:"Quote"}),")\u529F\u80FD\uFF1B"]}),"\n",(0,r.jsxs)(n.li,{children:["\u589E\u52A0\u5BF9\u65B9\u6CD5\u64CD\u4F5C\u4EE5\u53CA\u94FE\u5F0F\u64CD\u4F5C\u4E2D\u7684 ",(0,r.jsx)(n.code,{children:"slice"})," \u53C2\u6570\u7684\u652F\u6301\uFF1B"]}),"\n",(0,r.jsxs)(n.li,{children:["\u589E\u52A0 ",(0,r.jsx)(n.code,{children:"SetLogger"})," \u65B9\u6CD5\u7528\u4E8E\u5F00\u53D1\u8005\u81EA\u5B9A\u4E49\u6570\u636E\u5E93\u7684\u65E5\u5FD7\u6253\u5370\uFF1B"]}),"\n",(0,r.jsxs)(n.li,{children:["\u589E\u52A0 ",(0,r.jsx)(n.code,{children:"Master/Slave"})," \u65B9\u6CD5\uFF0C\u5F00\u53D1\u8005\u53EF\u81EA\u4E3B\u9009\u62E9\u6570\u636E\u5E93\u64CD\u4F5C\u6267\u884C\u7684\u4E3B\u4ECE\u8282\u70B9\uFF1B"]}),"\n",(0,r.jsxs)(n.li,{children:["\u589E\u52A0\u5BF9 ",(0,r.jsx)(n.code,{children:"mssql/pgsql/oracle"})," \u7684\u5355\u5143\u6D4B\u8BD5\uFF1B"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5728 ",(0,r.jsx)(n.code,{children:"debug"})," \u6A21\u5F0F\u652F\u6301\u5B8C\u6574\u5E26\u53C2\u6570\u6574\u5408\u7684SQL\u8BED\u53E5\u8C03\u8BD5\u6253\u5370\uFF1B"]}),"\n",(0,r.jsx)(n.li,{children:"\u589E\u52A0\u4E86\u66F4\u591A\u7684\u529F\u80FD\u65B9\u6CD5\uFF1B"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"glog"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u65B0\u589E ",(0,r.jsx)(n.code,{children:"Default"})," \u65B9\u6CD5\u7528\u4E8E\u83B7\u53D6\u9ED8\u8BA4\u7684 ",(0,r.jsx)(n.code,{children:"Logger"})," \u5BF9\u8C61\uFF1B"]}),"\n",(0,r.jsxs)(n.li,{children:["\u65B0\u589E ",(0,r.jsx)(n.code,{children:"StackWithFilter"})," \u65B9\u6CD5\u7528\u4E8E\u81EA\u5B9A\u4E49\u5806\u6808\u6253\u5370\u8FC7\u6EE4\uFF1B"]}),"\n",(0,r.jsx)(n.li,{children:"\u589E\u52A0\u4E86\u66F4\u591A\u7684\u529F\u80FD\u65B9\u6CD5\uFF1B"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"gfile"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u90E8\u5206\u65B9\u6CD5\u540D\u79F0\u8C03\u6574\uFF1A ",(0,r.jsx)(n.code,{children:"Get/PutBinContents"})," \u4FEE\u6539\u4E3A ",(0,r.jsx)(n.code,{children:"Get/PutBytes"}),"\uFF1B"]}),"\n",(0,r.jsxs)(n.li,{children:["\u589E\u52A0 ",(0,r.jsx)(n.code,{children:"ScanDirFile"})," \u65B9\u6CD5\uFF0C\u7528\u4E8E\u4EC5\u68C0\u7D22\u6587\u4EF6\u76EE\u5F55\uFF0C\u652F\u6301\u9012\u5F52\u68C0\u7D22\uFF1B"]}),"\n",(0,r.jsx)(n.li,{children:"\u589E\u52A0\u4E86\u66F4\u591A\u7684\u529F\u80FD\u65B9\u6CD5\uFF1B"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"gview"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u65B0\u589E ",(0,r.jsx)(n.code,{children:"SetI18n"})," \u65B9\u6CD5\u7528\u4E8E\u8BBE\u7F6E\u89C6\u56FE\u5BF9\u8C61\u81EA\u5B9A\u4E49\u7684 ",(0,r.jsx)(n.code,{children:"gi18n"})," \u56FD\u9645\u5316\u5BF9\u8C61\uFF1B"]}),"\n",(0,r.jsxs)(n.li,{children:["\u65B0\u589E\u5BF9 ",(0,r.jsx)(n.code,{children:"gres"})," \u8D44\u6E90\u7BA1\u7406\u5668\u7684\u5185\u7F6E\u652F\u6301\uFF1B"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"gcompress"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u589E\u52A0 ",(0,r.jsx)(n.code,{children:"zip"})," \u7B97\u6CD5\u7684\u6587\u4EF6/\u76EE\u5F55\u7684\u538B\u7F29/\u89E3\u538B\u65B9\u6CD5\uFF1B"]}),"\n",(0,r.jsx)(n.li,{children:"\u6587\u4EF6/\u76EE\u5F55\u538B\u7F29\u53C2\u6570\u652F\u6301\u591A\u8DEF\u5F84\uFF1B"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"gconv"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u6539\u8FDB\u5BF9 ",(0,r.jsx)(n.code,{children:"[]byte"})," \u6570\u636E\u7C7B\u578B\u53C2\u6570\u7684\u652F\u6301\uFF1B"]}),"\n",(0,r.jsxs)(n.li,{children:["\u65B0\u589E ",(0,r.jsx)(n.code,{children:"Unsafe"})," \u8F6C\u6362\u65B9\u6CD5\uFF0C\u5F00\u53D1\u8005\u53EF\u5728\u7279\u5B9A\u573A\u666F\u4E0B\u4F7F\u7528\uFF0C\u63D0\u9AD8\u8F6C\u6362\u6548\u7387\uFF1B"]}),"\n",(0,r.jsxs)(n.li,{children:["\u65B0\u589E ",(0,r.jsx)(n.code,{children:"MapDeep/StructDeep/StructsDeep"})," \u65B9\u6CD5\uFF0C\u652F\u6301\u9012\u5F52 ",(0,r.jsx)(n.code,{children:"struct"})," \u8F6C\u6362\uFF1B"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"gjson/gparser"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6539\u8FDB\u7C7B\u578B\u81EA\u52A8\u8BC6\u522B\u529F\u80FD\uFF1B"}),"\n",(0,r.jsxs)(n.li,{children:["\u65B0\u589E ",(0,r.jsx)(n.code,{children:"LoadJson/LoadXml/LoadToml/LoadYaml/LoadIni"})," \u65B9\u6CD5\u7528\u4E8E\u81EA\u5B9A\u4E49\u7684\u6570\u636E\u7C7B\u578B\u5185\u5BB9\u52A0\u8F7D\uFF1B"]}),"\n",(0,r.jsx)(n.li,{children:"\u589E\u52A0\u4E86\u66F4\u591A\u7684\u529F\u80FD\u65B9\u6CD5\uFF1B"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"gerror"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6539\u8FDB\u9519\u8BEF\u5806\u6808\u83B7\u53D6\u903B\u8F91\uFF1B"}),"\n",(0,r.jsx)(n.li,{children:"\u589E\u52A0\u4E86\u66F4\u591A\u7684\u529F\u80FD\u65B9\u6CD5\uFF1B"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"gmap/garray/gset/glist/gvar"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6539\u8FDB\u5E76\u53D1\u5B89\u5168\u57FA\u51C6\u6D4B\u8BD5\u811A\u672C\uFF1B"}),"\n",(0,r.jsxs)(n.li,{children:["\u4FEE\u6539 ",(0,r.jsx)(n.code,{children:"garray.StringArray"})," \u4E3A ",(0,r.jsx)(n.code,{children:"garray.StrArray"}),"\uFF1B"]}),"\n",(0,r.jsx)(n.li,{children:"\u589E\u52A0\u4E86\u66F4\u591A\u7684\u529F\u80FD\u65B9\u6CD5\uFF1B"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"gdes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u89C4\u8303\u5316\u4FEE\u6539\u65B9\u6CD5\u540D\u79F0\uFF1B"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"gstr"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u589E\u52A0 ",(0,r.jsx)(n.code,{children:"Camel/Snake"})," \u76F8\u5173\u547D\u540D\u8F6C\u6362\u65B9\u6CD5\uFF1B"]}),"\n",(0,r.jsx)(n.li,{children:"\u589E\u52A0\u4E86\u66F4\u591A\u7684\u529F\u80FD\u65B9\u6CD5\uFF1B"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"genv"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u589E\u52A0\u4E86\u66F4\u591A\u7684\u529F\u80FD\u65B9\u6CD5\uFF1B"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"bug-fix",children:"Bug Fix"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u4FEE\u590D ",(0,r.jsx)(n.code,{children:"gvalid"})," \u6821\u9A8C ",(0,r.jsx)(n.code,{children:"struct"})," \u65F6\u7684 ",(0,r.jsx)(n.code,{children:"tag"})," \u81EA\u5B9A\u4E49\u9519\u8BEF\u5931\u6548\u7684\u95EE\u9898\uFF1B"]}),"\n",(0,r.jsxs)(n.li,{children:["\u4FEE\u590D ",(0,r.jsx)(n.code,{children:"gcfg"})," \u914D\u7F6E\u7BA1\u7406\u6A21\u5757\u5728\u7279\u5B9A\u60C5\u51B5\u4E0B\u7684\u5185\u5BB9\u7C7B\u578B\u81EA\u52A8\u8BC6\u522B\u5931\u8D25\u95EE\u9898\uFF1B"]}),"\n",(0,r.jsxs)(n.li,{children:["\u4FEE\u590D ",(0,r.jsx)(n.code,{children:"gqueue"})," \u5728\u7528\u6237\u4E3B\u52A8\u5173\u95ED\u961F\u5217\u65F6\u7684\u5E76\u53D1\u5B89\u5168\u95EE\u9898\uFF1B"]}),"\n",(0,r.jsxs)(n.li,{children:["\u4FEE\u590D ",(0,r.jsx)(n.code,{children:"session"})," \u5728\u5F00\u53D1\u8005\u8BBE\u7F6E\u7684 ",(0,r.jsx)(n.code,{children:"TTL"})," \u8FC7\u5927\u65F6\u7684\u6574\u578B\u53D8\u91CF\u6EA2\u51FA\u95EE\u9898\uFF1B"]}),"\n"]})]})}function x(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return d}});var s=i(667294);let r={},l=s.createContext(r);function d(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);