"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["87724"],{99388:function(A,e,r){r.r(e),r.d(e,{metadata:()=>n,contentTitle:()=>s,default:()=>v,assets:()=>o,toc:()=>i,frontMatter:()=>l});var n=JSON.parse('{"id":"quick/\u5FEB\u901F\u5F00\u59CB/Hello World","title":"Hello World","description":"\u4F7F\u7528GoFrame\u6846\u67B6\u6784\u5EFA\u4E00\u4E2A\u7B80\u5355\u7684Hello World Web Server\u3002GoFrame\u662F\u4E00\u6B3E\u6A21\u5757\u5316\u7684Go\u8BED\u8A00\u6846\u67B6\uFF0C\u63D0\u4F9B\u65B9\u4FBF\u7684Web\u670D\u52A1\u5668\u6784\u5EFA\u65B9\u5F0F\u3002\u672C\u6587\u8BE6\u7EC6\u89E3\u6790\u4E86\u4EE3\u7801\u793A\u4F8B\uFF0C\u5305\u62ECServer\u5BF9\u8C61\u7684\u521B\u5EFA\u3001\u8DEF\u7531\u7ED1\u5B9A\u3001\u7AEF\u53E3\u8BBE\u7F6E\u53CA\u8FD0\u884C\u7ED3\u679C\u7684\u89E3\u8BFB\uFF0C\u4E3A\u521D\u5B66\u8005\u63D0\u4F9B\u4E86\u4E00\u6761\u5FEB\u901F\u5165\u95E8\u7684\u8DEF\u5F84\u3002","source":"@site/versioned_docs/version-2.7.x/quick/\u5FEB\u901F\u5F00\u59CB/Hello World.md","sourceDirName":"quick/\u5FEB\u901F\u5F00\u59CB","slug":"/quick/hello-world","permalink":"/2.7.x/quick/hello-world","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/quick/\u5FEB\u901F\u5F00\u59CB/Hello World.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731511511000,"sidebarPosition":2,"frontMatter":{"slug":"/quick/hello-world","title":"Hello World","hide_title":true,"sidebar_position":2,"keywords":["GoFrame\u6846\u67B6","Web Server","Go\u8BED\u8A00","\u6A21\u5757\u5316\u6846\u67B6","\u8DEF\u7531\u7ED1\u5B9A","\u81EA\u52A8\u63A5\u53E3\u6587\u6863","g.Server","\u7F51\u7EDC\u8BF7\u6C42","Server\u5BF9\u8C61","GoFrame\u6559\u7A0B"],"description":"\u4F7F\u7528GoFrame\u6846\u67B6\u6784\u5EFA\u4E00\u4E2A\u7B80\u5355\u7684Hello World Web Server\u3002GoFrame\u662F\u4E00\u6B3E\u6A21\u5757\u5316\u7684Go\u8BED\u8A00\u6846\u67B6\uFF0C\u63D0\u4F9B\u65B9\u4FBF\u7684Web\u670D\u52A1\u5668\u6784\u5EFA\u65B9\u5F0F\u3002\u672C\u6587\u8BE6\u7EC6\u89E3\u6790\u4E86\u4EE3\u7801\u793A\u4F8B\uFF0C\u5305\u62ECServer\u5BF9\u8C61\u7684\u521B\u5EFA\u3001\u8DEF\u7531\u7ED1\u5B9A\u3001\u7AEF\u53E3\u8BBE\u7F6E\u53CA\u8FD0\u884C\u7ED3\u679C\u7684\u89E3\u8BFB\uFF0C\u4E3A\u521D\u5B66\u8005\u63D0\u4F9B\u4E86\u4E00\u6761\u5FEB\u901F\u5165\u95E8\u7684\u8DEF\u5F84\u3002"},"sidebar":"quickSidebar","previous":{"title":"\u4E0B\u8F7D\u4E0E\u4F7F\u7528","permalink":"/2.7.x/quick/install"},"next":{"title":"\u83B7\u53D6\u8BF7\u6C42\u53C2\u6570","permalink":"/2.7.x/quick/request-input"}}'),t=r("785893"),d=r("250065");let l={slug:"/quick/hello-world",title:"Hello World",hide_title:!0,sidebar_position:2,keywords:["GoFrame\u6846\u67B6","Web Server","Go\u8BED\u8A00","\u6A21\u5757\u5316\u6846\u67B6","\u8DEF\u7531\u7ED1\u5B9A","\u81EA\u52A8\u63A5\u53E3\u6587\u6863","g.Server","\u7F51\u7EDC\u8BF7\u6C42","Server\u5BF9\u8C61","GoFrame\u6559\u7A0B"],description:"\u4F7F\u7528GoFrame\u6846\u67B6\u6784\u5EFA\u4E00\u4E2A\u7B80\u5355\u7684Hello World Web Server\u3002GoFrame\u662F\u4E00\u6B3E\u6A21\u5757\u5316\u7684Go\u8BED\u8A00\u6846\u67B6\uFF0C\u63D0\u4F9B\u65B9\u4FBF\u7684Web\u670D\u52A1\u5668\u6784\u5EFA\u65B9\u5F0F\u3002\u672C\u6587\u8BE6\u7EC6\u89E3\u6790\u4E86\u4EE3\u7801\u793A\u4F8B\uFF0C\u5305\u62ECServer\u5BF9\u8C61\u7684\u521B\u5EFA\u3001\u8DEF\u7531\u7ED1\u5B9A\u3001\u7AEF\u53E3\u8BBE\u7F6E\u53CA\u8FD0\u884C\u7ED3\u679C\u7684\u89E3\u8BFB\uFF0C\u4E3A\u521D\u5B66\u8005\u63D0\u4F9B\u4E86\u4E00\u6761\u5FEB\u901F\u5165\u95E8\u7684\u8DEF\u5F84\u3002"},s=void 0,o={},i=[{value:"Hello World",id:"hello-world",level:2},{value:"\u6267\u884C\u7ED3\u679C",id:"\u6267\u884C\u7ED3\u679C",level:2},{value:"\u5B66\u4E60\u603B\u7ED3",id:"\u5B66\u4E60\u603B\u7ED3",level:2}];function c(A){let e={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.a)(),...A.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"GoFrame"})," \u662F\u4E00\u6B3E\u57FA\u7840\u8BBE\u65BD\u5EFA\u8BBE\u6BD4\u8F83\u5B8C\u5584\u7684\u6A21\u5757\u5316\u6846\u67B6\uFF0C\n",(0,t.jsx)(e.code,{children:"Web Server"})," \u6A21\u5757\u662F\u5176\u4E2D\u6BD4\u8F83\u6838\u5FC3\u7684\u6A21\u5757\uFF0C\u6211\u4EEC\u8FD9\u91CC\u5C06 ",(0,t.jsx)(e.code,{children:"Web"})," \u670D\u52A1\u5F00\u53D1\u4F5C\u4E3A\u6846\u67B6\u5165\u95E8\u7684\u9009\u62E9\uFF0C\u4FBF\u4E8E\u5927\u5BB6\u66F4\u5BB9\u6613\u5B66\u4E60\u548C\u7406\u89E3\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"hello-world",children:"Hello World"}),"\n",(0,t.jsxs)(e.p,{children:["\u6211\u4EEC\u5148\u6765\u5F00\u53D1\u4E00\u4E2A\u7B80\u5355\u7684",(0,t.jsx)(e.code,{children:"Web Server"}),"\u7A0B\u5E8F\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-go",metastring:'title="main.go"',children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/", func(r *ghttp.Request) {\n        r.Response.Write("Hello World!")\n    })\n    s.SetPort(8000)\n    s.Run()\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u6211\u4EEC\u6765\u770B\u770B\u8FD9\u6BB5\u4EE3\u7801\uFF1A"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\u4EFB\u4F55\u65F6\u5019\uFF0C\u60A8\u90FD\u53EF\u4EE5\u901A\u8FC7 ",(0,t.jsx)(e.code,{children:"g.Server()"})," \u65B9\u6CD5\u83B7\u5F97\u4E00\u4E2A\u9ED8\u8BA4\u7684 ",(0,t.jsx)(e.code,{children:"Server"})," \u5BF9\u8C61\uFF0C\u8BE5\u65B9\u6CD5\u91C7\u7528",(0,t.jsx)(e.strong,{children:"\u5355\u4F8B\u6A21\u5F0F"}),"\u8BBE\u8BA1\uFF0C\n\u4E5F\u5C31\u662F\u8BF4\uFF0C\u591A\u6B21\u8C03\u7528\u8BE5\u65B9\u6CD5\uFF0C\u8FD4\u56DE\u7684\u662F\u540C\u4E00\u4E2A ",(0,t.jsx)(e.code,{children:"Server"})," \u5BF9\u8C61\u3002\u5176\u4E2D\u7684",(0,t.jsx)(e.code,{children:"g"}),"\u7EC4\u4EF6\u662F\u6846\u67B6\u63D0\u4F9B\u7684\u4E00\u4E2A\u8026\u5408\u7EC4\u4EF6\uFF0C\u5C01\u88C5\u548C\u521D\u59CB\u5316\u4E00\u4E9B\u5E38\u7528\u7684\u7EC4\u4EF6\u5BF9\u8C61\uFF0C\u4E3A\u4E1A\u52A1\u9879\u76EE\u63D0\u4F9B\u4FBF\u6377\u5316\u7684\u4F7F\u7528\u65B9\u5F0F\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:["\u901A\u8FC7",(0,t.jsx)(e.code,{children:"Server"}),"\u5BF9\u8C61\u7684",(0,t.jsx)(e.code,{children:"BindHandler"}),"\u65B9\u6CD5\u7ED1\u5B9A\u8DEF\u7531\u4EE5\u53CA\u56DE\u8C03\u51FD\u6570\u3002\u5728\u672C\u793A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u7ED1\u5B9A\u4E86",(0,t.jsx)(e.code,{children:"/"}),"\u8DEF\u7531\uFF0C\u5E76\u6307\u5B9A\u56DE\u8C03\u51FD\u6570\u8FD4\u56DE",(0,t.jsx)(e.code,{children:"Hello World"}),"\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:["\u5728\u56DE\u8C03\u51FD\u6570\u4E2D\uFF0C\u8F93\u5165\u53C2\u6570\u4E3A\u5F53\u524D\u8BF7\u6C42\u5BF9\u8C61",(0,t.jsx)(e.code,{children:"r *ghttp.Request"}),"\uFF0C\u8BE5\u5BF9\u8C61\u5305\u542B\u5F53\u524D\u8BF7\u6C42\u7684\u4E0A\u4E0B\u6587\u4FE1\u606F\u3002\u5728\u672C\u793A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u901A\u8FC7",(0,t.jsx)(e.code,{children:"r.Response"}),"\u8FD4\u56DE\u5BF9\u8C61\u76F4\u63A5",(0,t.jsx)(e.code,{children:"Write"}),"\u8FD4\u56DE\u7ED3\u679C\u4FE1\u606F\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:["\u901A\u8FC7",(0,t.jsx)(e.code,{children:"SetPort"}),"\u65B9\u6CD5\u8BBE\u7F6E\u5F53\u524D",(0,t.jsx)(e.code,{children:"Server"}),"\u76D1\u542C\u7AEF\u53E3\u3002\u5728\u672C\u793A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u76D1\u542C",(0,t.jsx)(e.code,{children:"8000"}),"\u7AEF\u53E3\uFF0C\u5982\u679C\u5728\u6CA1\u6709\u8BBE\u7F6E\u7AEF\u53E3\u7684\u60C5\u51B5\u4E0B\uFF0C\u5B83\u9ED8\u8BA4\u4F1A\u76D1\u542C\u4E00\u4E2A\u968F\u673A\u7684\u7AEF\u53E3\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:["\u901A\u8FC7 ",(0,t.jsx)(e.code,{children:"Run()"})," \u65B9\u6CD5\u963B\u585E\u6267\u884C ",(0,t.jsx)(e.code,{children:"Server"})," \u7684\u76D1\u542C\u8FD0\u884C\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u6267\u884C\u7ED3\u679C",children:"\u6267\u884C\u7ED3\u679C"}),"\n",(0,t.jsx)(e.p,{children:"\u8FD0\u884C\u8BE5\u7A0B\u5E8F\uFF0C\u60A8\u5C06\u5728\u7EC8\u7AEF\u770B\u5230\u7C7B\u4F3C\u4EE5\u4E0B\u65E5\u5FD7\u4FE1\u606F\uFF1A"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-html",children:"$ go run main.go\n2024-10-27 21:30:39.412 [INFO] pid[58889]: http server started listening on [:8000]\n2024-10-27 21:30:39.412 [INFO] {08a0b0086e5202184111100658330800} openapi specification is disabled\n\n  ADDRESS | METHOD | ROUTE |     HANDLER     | MIDDLEWARE  \n----------|--------|-------|-----------------|-------------\n  :8000   | ALL    | /     | main.main.func1 |             \n----------|--------|-------|-----------------|-------------\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u5728\u9ED8\u8BA4\u7684\u65E5\u5FD7\u6253\u5370\u4E2D\u5305\u542B\u4EE5\u4E0B\u4FE1\u606F\uFF1A"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\u5F53\u524D\u8FDB\u7A0B\u53F7",(0,t.jsx)(e.code,{children:"58889"}),"\uFF0C\u4EE5\u53CA\u76D1\u542C\u7684\u5730\u5740",(0,t.jsx)(e.code,{children:":8000"}),"\uFF08\u8868\u793A\u76D1\u542C\u672C\u673A\u6240\u6709IP\u5730\u5740\u7684",(0,t.jsx)(e.code,{children:"8000"}),"\u7AEF\u53E3\uFF09\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:["\u7531\u4E8E\u6846\u67B6\u5E26\u6709\u81EA\u52A8\u63A5\u53E3\u6587\u6863\u751F\u6210\u529F\u80FD\uFF0C\u672C\u793A\u4F8B\u4E2D\u672A\u542F\u7528\uFF0C\u56E0\u6B64\u63D0\u793A",(0,t.jsx)(e.code,{children:"openapi specification is disabled"}),"\u3002\n\u5173\u4E8E\u63A5\u53E3\u6587\u6863\u7684\u81EA\u52A8\u751F\u6210\uFF0C\u5728\u5F00\u53D1\u624B\u518C\u4E2D\u5BF9\u5E94\u7AE0\u8282\u4F1A\u8BE6\u7EC6\u8BB2\u89E3\uFF0C\u672C\u793A\u4F8B\u4E0D\u4F5C\u4ECB\u7ECD\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:["\u6700\u540E\u4F1A\u6253\u5370\u5F53\u524D",(0,t.jsx)(e.code,{children:"Server"}),"\u7684\u8DEF\u7531\u5217\u8868\u3002\u7531\u4E8E\u6211\u4EEC\u53EA\u76D1\u542C\u4E86",(0,t.jsx)(e.code,{children:"/"}),"\u8DEF\u7531\uFF0C\u90A3\u4E48\u8FD9\u91CC\u53EA\u6253\u5370\u4E86\u4E00\u4E2A\u8DEF\u7531\u4FE1\u606F\u3002\u5728\u8DEF\u7531\u4FE1\u606F\u8868\u4E2D\uFF1A","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"ADDRESS"}),"\uFF1A\u8868\u793A\u8BE5\u8DEF\u7531\u7684\u76D1\u542C\u5730\u5740\uFF0C\u540C\u4E00\u4E2A\u8FDB\u7A0B\u53EF\u4EE5\u540C\u65F6\u8FD0\u884C\u591A\u4E2A",(0,t.jsx)(e.code,{children:"Server"}),"\uFF0C\u4E0D\u540C\u7684",(0,t.jsx)(e.code,{children:"Server"}),"\u53EF\u4EE5\u76D1\u542C\u4E0D\u540C\u7684\u5730\u5740\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"METHOD"}),"\uFF1A\u8868\u793A\u8DEF\u7531\u76D1\u542C\u7684",(0,t.jsx)(e.code,{children:"HTTP Method"}),"\u4FE1\u606F\uFF0C\u6BD4\u5982",(0,t.jsx)(e.code,{children:"GET/POST/PUT/DELETE"}),"\u7B49\u3002\u8FD9\u91CC\u7684",(0,t.jsx)(e.code,{children:"ALL"}),"\u6807\u8BC6\u76D1\u542C\u6240\u6709\u7684",(0,t.jsx)(e.code,{children:"HTTP Method"}),"\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"ROUTE"}),"\uFF1A\u8868\u793A\u76D1\u542C\u7684\u5177\u4F53\u8DEF\u7531\u5730\u5740\u4FE1\u606F\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"HANDLER"}),"\uFF1A\u8868\u793A\u8DEF\u7531\u56DE\u8C03\u51FD\u6570\u7684\u540D\u79F0\u3002\u7531\u4E8E\u672C\u793A\u4F8B\u4F7F\u7528\u7684\u662F\u95ED\u5305\u51FD\u6570\uFF0C\u56E0\u6B64\u770B\u5230\u7684\u662F\u4E00\u4E2A\u4E34\u65F6\u51FD\u6570\u540D\u79F0",(0,t.jsx)(e.code,{children:"main.main.func1"}),"\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"MIDDLEWARE"}),"\uFF1A\u8868\u793A\u7ED1\u5B9A\u5230\u5F53\u524D\u8DEF\u7531\u7684\u4E2D\u95F4\u4EF6\u51FD\u6570\u540D\u79F0\uFF0C\u4E2D\u95F4\u4EF6\u662F",(0,t.jsx)(e.code,{children:"Server"}),"\u4E2D\u4E00\u79CD\u7ECF\u5178\u7684\u62E6\u622A\u5668\uFF0C\u540E\u7EED\u7AE0\u8282\u4E2D\u4F1A\u6709\u8BE6\u7EC6\u8BB2\u89E3\uFF0C\u8FD9\u91CC\u6682\u4E0D\u505A\u4ECB\u7ECD\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["\u8FD0\u884C\u540E\uFF0C\u6211\u4EEC\u5C1D\u8BD5\u8BBF\u95EE ",(0,t.jsx)(e.a,{href:"http://127.0.0.1:8000/",children:"http://127.0.0.1:8000/"})," \u60A8\u5C06\u5728\u9875\u9762\u4E2D\u770B\u5230\u8F93\u51FA"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"img_1.png",src:r(219168).Z+"",width:"742",height:"254"})}),"\n",(0,t.jsx)(e.h2,{id:"\u5B66\u4E60\u603B\u7ED3",children:"\u5B66\u4E60\u603B\u7ED3"}),"\n",(0,t.jsxs)(e.p,{children:["\u606D\u559C\u60A8\uFF01\u60A8\u5B66\u4F1A\u4E86\u4F7F\u7528",(0,t.jsx)(e.code,{children:"GoFrame"}),"\u6846\u67B6\u5F00\u53D1\u7B2C\u4E00\u4E2A",(0,t.jsx)(e.code,{children:"Web Server"}),"\u7A0B\u5E8F\uFF01"]}),"\n",(0,t.jsxs)(e.p,{children:["\u4E0B\u4E00\u6B65\uFF0C\u6211\u4EEC\u5C06\u4F1A\u5C1D\u8BD5\u7740\u5728",(0,t.jsx)(e.code,{children:"Web Server"}),"\u4E2D\u83B7\u53D6\u5BA2\u6237\u7AEF\u63D0\u4EA4\u7684\u53C2\u6570\u4FE1\u606F\u3002"]})]})}function v(A={}){let{wrapper:e}={...(0,d.a)(),...A.components};return e?(0,t.jsx)(e,{...A,children:(0,t.jsx)(c,{...A})}):c(A)}},219168:function(A,e,r){r.d(e,{Z:function(){return n}});let n="data:image/png;base64,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"},250065:function(A,e,r){r.d(e,{Z:function(){return s},a:function(){return l}});var n=r(667294);let t={},d=n.createContext(t);function l(A){let e=n.useContext(d);return n.useMemo(function(){return"function"==typeof A?A(e):{...e,...A}},[e,A])}function s(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(t):A.components||t:l(A.components),n.createElement(d.Provider,{value:e},A.children)}}}]);