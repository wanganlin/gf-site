"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["94607"],{403331:function(e,n,i){i.r(n),i.d(n,{metadata:()=>c,contentTitle:()=>d,default:()=>h,assets:()=>r,toc:()=>l,frontMatter:()=>t});var c=JSON.parse('{"id":"quick/\u9879\u76EE\u811A\u624B\u67B6/\u63A5\u53E3\u5F00\u53D1/Step6 - \u914D\u7F6E\u4E0E\u8DEF\u7531","title":"Step6 - \u914D\u7F6E\u4E0E\u8DEF\u7531","description":"\u5F15\u5165mysql\u6570\u636E\u5E93\u9A71\u52A8\u3001\u6DFB\u52A0\u6570\u636E\u5E93\u914D\u7F6E\u548C\u8DEF\u7531\u6CE8\u518C\u6B65\u9AA4\u3002\u8BE6\u7EC6\u8BF4\u660E\u4E86\u811A\u624B\u67B6\u9879\u76EE\u6A21\u677F\u4E2D\u7684\u914D\u7F6E\uFF0C\u5305\u62EC\u5DE5\u5177\u914D\u7F6E\u548C\u4E1A\u52A1\u914D\u7F6E\uFF0C\u4EE5\u53CA\u5982\u4F55\u8FDB\u884C\u914D\u7F6E\u6587\u4EF6\u7684\u4FEE\u6539\u3002","source":"@site/docs/quick/\u9879\u76EE\u811A\u624B\u67B6/\u63A5\u53E3\u5F00\u53D1/Step6 - \u914D\u7F6E\u4E0E\u8DEF\u7531.md","sourceDirName":"quick/\u9879\u76EE\u811A\u624B\u67B6/\u63A5\u53E3\u5F00\u53D1","slug":"/quick/scaffold-api-config-and-route","permalink":"/en/quick/scaffold-api-config-and-route","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/quick/\u9879\u76EE\u811A\u624B\u67B6/\u63A5\u53E3\u5F00\u53D1/Step6 - \u914D\u7F6E\u4E0E\u8DEF\u7531.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732096013000,"sidebarPosition":6,"frontMatter":{"slug":"/quick/scaffold-api-config-and-route","title":"Step6 - \u914D\u7F6E\u4E0E\u8DEF\u7531","hide_title":true,"sidebar_position":6,"keywords":["GoFrame","GoFrame\u6846\u67B6","\u6570\u636E\u5E93\u9A71\u52A8","mysql","\u8DEF\u7531","\u914D\u7F6E","API","\u670D\u52A1\u5668\u914D\u7F6E","\u65E5\u5FD7\u6A21\u5757","\u4E1A\u52A1\u6A21\u5757"],"description":"\u5F15\u5165mysql\u6570\u636E\u5E93\u9A71\u52A8\u3001\u6DFB\u52A0\u6570\u636E\u5E93\u914D\u7F6E\u548C\u8DEF\u7531\u6CE8\u518C\u6B65\u9AA4\u3002\u8BE6\u7EC6\u8BF4\u660E\u4E86\u811A\u624B\u67B6\u9879\u76EE\u6A21\u677F\u4E2D\u7684\u914D\u7F6E\uFF0C\u5305\u62EC\u5DE5\u5177\u914D\u7F6E\u548C\u4E1A\u52A1\u914D\u7F6E\uFF0C\u4EE5\u53CA\u5982\u4F55\u8FDB\u884C\u914D\u7F6E\u6587\u4EF6\u7684\u4FEE\u6539\u3002"},"sidebar":"quickSidebar","previous":{"title":"Step5 - \u5B8C\u6210\u63A5\u53E3\u903B\u8F91\u5B9E\u73B0","permalink":"/en/quick/scaffold-api-implements"},"next":{"title":"Step7 - \u542F\u52A8\u4E0E\u6D4B\u8BD5","permalink":"/en/quick/scaffold-api-run-and-test"}}'),o=i("785893"),s=i("250065");let t={slug:"/quick/scaffold-api-config-and-route",title:"Step6 - \u914D\u7F6E\u4E0E\u8DEF\u7531",hide_title:!0,sidebar_position:6,keywords:["GoFrame","GoFrame\u6846\u67B6","\u6570\u636E\u5E93\u9A71\u52A8","mysql","\u8DEF\u7531","\u914D\u7F6E","API","\u670D\u52A1\u5668\u914D\u7F6E","\u65E5\u5FD7\u6A21\u5757","\u4E1A\u52A1\u6A21\u5757"],description:"\u5F15\u5165mysql\u6570\u636E\u5E93\u9A71\u52A8\u3001\u6DFB\u52A0\u6570\u636E\u5E93\u914D\u7F6E\u548C\u8DEF\u7531\u6CE8\u518C\u6B65\u9AA4\u3002\u8BE6\u7EC6\u8BF4\u660E\u4E86\u811A\u624B\u67B6\u9879\u76EE\u6A21\u677F\u4E2D\u7684\u914D\u7F6E\uFF0C\u5305\u62EC\u5DE5\u5177\u914D\u7F6E\u548C\u4E1A\u52A1\u914D\u7F6E\uFF0C\u4EE5\u53CA\u5982\u4F55\u8FDB\u884C\u914D\u7F6E\u6587\u4EF6\u7684\u4FEE\u6539\u3002"},d=void 0,r={},l=[{value:"\u5F15\u5165\u6570\u636E\u5E93\u9A71\u52A8",id:"\u5F15\u5165\u6570\u636E\u5E93\u9A71\u52A8",level:2},{value:"\u6DFB\u52A0\u6570\u636E\u5E93\u914D\u7F6E",id:"\u6DFB\u52A0\u6570\u636E\u5E93\u914D\u7F6E",level:2},{value:"\u5DE5\u5177\u914D\u7F6E <code>hack/config.yaml</code>",id:"\u5DE5\u5177\u914D\u7F6E-hackconfigyaml",level:3},{value:"\u4E1A\u52A1\u914D\u7F6E <code>manifest/config/config.yaml</code>",id:"\u4E1A\u52A1\u914D\u7F6E-manifestconfigconfigyaml",level:3},{value:"\u6DFB\u52A0\u8DEF\u7531\u6CE8\u518C",id:"\u6DFB\u52A0\u8DEF\u7531\u6CE8\u518C",level:2},{value:"\u5B66\u4E60\u5C0F\u7ED3",id:"\u5B66\u4E60\u5C0F\u7ED3",level:2}];function a(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"\u5F15\u5165\u6570\u636E\u5E93\u9A71\u52A8",children:"\u5F15\u5165\u6570\u636E\u5E93\u9A71\u52A8"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"GoFrame"}),"\u7684\u6570\u636E\u5E93\u7EC4\u4EF6\u4F7F\u7528\u4E86\u63A5\u53E3\u5316\u8BBE\u8BA1\uFF0C\u63A5\u53E3\u4E0E\u5B9E\u73B0\u662F\u5206\u79BB\u7684\uFF0C\u8FD9\u6837\u80FD\u63D0\u4F9B\u66F4\u597D\u7684\u62BD\u8C61\u548C\u6269\u5C55\u6027\u3002\u6211\u4EEC\u8FD9\u91CC\u4F7F\u7528\u4E86",(0,o.jsx)(n.code,{children:"mysql"}),"\u6570\u636E\u5E93\uFF0C\u90A3\u4E48\u9700\u8981\u5F15\u5165\u5177\u4F53\u7684",(0,o.jsx)(n.code,{children:"mysql"}),"\u9A71\u52A8\u5B9E\u73B0\u3002\u6211\u4EEC\u5728",(0,o.jsx)(n.code,{children:"main.go"}),"\u4E2D\u52A0\u4E0A",(0,o.jsx)(n.code,{children:'_ "github.com/gogf/gf/contrib/drivers/mysql/v2"'}),"\u5373\u53EF\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u793A\u4F8B\u6E90\u7801\uFF1A",(0,o.jsx)(n.a,{href:"https://github.com/gogf/quick-demo/blob/main/main.go",children:"https://github.com/gogf/quick-demo/blob/main/main.go"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",metastring:'title="main.go"',children:'package main\n\nimport (\n    _ "demo/internal/packed"\n\n    _ "github.com/gogf/gf/contrib/drivers/mysql/v2"\n\n    "github.com/gogf/gf/v2/os/gctx"\n\n    "demo/internal/cmd"\n)\n\nfunc main() {\n    cmd.Main.Run(gctx.GetInitCtx())\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u6570\u636E\u5E93\u7684\u9A71\u52A8\uFF0C\u9879\u76EE\u53EA\u9700\u8981\u5F15\u5165\u8FD9\u4E00\u6B21\u5373\u53EF\uFF0C\u540E\u7EED\u90FD\u4E0D\u9700\u8981\u505A\u8C03\u6574\u3002\n\u66F4\u591A\u5173\u4E8E\u6570\u636E\u5E93\u9A71\u52A8\u7684\u652F\u6301\u4EE5\u53CA\u8BE6\u7EC6\u4ECB\u7ECD\uFF0C\u8BF7\u53C2\u8003\u7AE0\u8282 ",(0,o.jsx)(n.a,{href:"/en/docs/core/gdb",children:"\u6570\u636E\u5E93ORM"}),"\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u5982\u679C\u5728\u6CA1\u6709\u5F15\u5165\u6570\u636E\u5E93\u9A71\u52A8\u7684\u60C5\u51B5\u4E0B\u6267\u884C\u6570\u636E\u5E93\u64CD\u4F5C\uFF0C\u6570\u636E\u5E93ORM\u7EC4\u4EF6\u4F1A\u62A5\u5982\u4E0B\u7684\u9519\u8BEF\u63D0\u793A\uFF1A"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:'cannot find database driver for specified database type "mysql", did you misspell type name "mysql" or forget importing the database driver? possible reference: https://github.com/gogf/gf/tree/master/contrib/drivers\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["\u5728\u811A\u624B\u67B6\u9879\u76EE\u6A21\u677F",(0,o.jsx)(n.code,{children:"main.go"}),"\u7684",(0,o.jsx)(n.code,{children:"import"}),"\u4E2D\u6709\u4E00\u6BB5",(0,o.jsx)(n.code,{children:'_ "demo/internal/packed"'}),"\uFF0C\u8868\u793A",(0,o.jsx)(n.code,{children:"GoFrame"}),"\u6846\u67B6\u7684\u8D44\u6E90\u7BA1\u7406\uFF0C\u8FD9\u662F\u4E00\u4E2A\u9AD8\u7EA7\u7279\u6027\u3002\u8BE5\u7279\u6027\u53EF\u4EE5\u5C06\u4EFB\u4F55\u8D44\u6E90\u6253\u5305\u8FDB\u4E8C\u8FDB\u5236\u6587\u4EF6\uFF0C\u8FD9\u6837\u6211\u4EEC\u5728\u53D1\u5E03\u7684\u65F6\u5019\uFF0C\u4EC5\u9700\u8981\u53D1\u5E03\u4E00\u4E2A\u4E8C\u8FDB\u5236\u6587\u4EF6\u5373\u53EF\u3002\u6211\u4EEC\u8FD9\u91CC\u6CA1\u6709\u7528\u5230\u8BE5\u7279\u6027\uFF0C\u56E0\u6B64\u5927\u5BB6\u4E86\u89E3\u5373\u53EF\uFF0C\u611F\u5174\u8DA3\u53EF\u4EE5\u540E\u7EED\u67E5\u9605\u5F00\u53D1\u624B\u518C\u76F8\u5173\u7AE0\u8282\u3002"]})}),"\n",(0,o.jsx)(n.h2,{id:"\u6DFB\u52A0\u6570\u636E\u5E93\u914D\u7F6E",children:"\u6DFB\u52A0\u6570\u636E\u5E93\u914D\u7F6E"}),"\n",(0,o.jsx)(n.p,{children:"\u5728\u811A\u624B\u67B6\u9879\u76EE\u6A21\u677F\u4E2D\u4E3B\u8981\u6709\u4E24\u4E2A\u914D\u7F6E\u6587\u4EF6\u3002"}),"\n",(0,o.jsxs)(n.h3,{id:"\u5DE5\u5177\u914D\u7F6E-hackconfigyaml",children:["\u5DE5\u5177\u914D\u7F6E ",(0,o.jsx)(n.code,{children:"hack/config.yaml"})]}),"\n",(0,o.jsxs)(n.p,{children:["\u5728\u524D\u9762\u7684\u7AE0\u8282\u6211\u4EEC\u5DF2\u7ECF\u6709\u8FC7\u4ECB\u7ECD\u3002\u8FD9\u4E2A\u914D\u7F6E\u6587\u4EF6\u4E3B\u8981\u662F\u672C\u5730\u5F00\u53D1\u65F6\u5019\u4F7F\u7528\uFF0C\u5F53",(0,o.jsx)(n.code,{children:"cli"}),"\u811A\u624B\u67B6\u5DE5\u5177\u6267\u884C\u65F6\u4F1A\u81EA\u52A8\u8BFB\u53D6\u5176\u4E2D\u7684\u914D\u7F6E\u5185\u5BB9\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u793A\u4F8B\u6E90\u7801\uFF1A",(0,o.jsx)(n.a,{href:"https://github.com/gogf/quick-demo/blob/main/hack/config.yaml",children:"https://github.com/gogf/quick-demo/blob/main/hack/config.yaml"})]}),"\n",(0,o.jsxs)(n.h3,{id:"\u4E1A\u52A1\u914D\u7F6E-manifestconfigconfigyaml",children:["\u4E1A\u52A1\u914D\u7F6E ",(0,o.jsx)(n.code,{children:"manifest/config/config.yaml"})]}),"\n",(0,o.jsx)(n.p,{children:"\u4E3B\u8981\u7EF4\u62A4\u4E1A\u52A1\u9879\u76EE\u7684\u7EC4\u4EF6\u914D\u7F6E\u4FE1\u606F\u3001\u4E1A\u52A1\u6A21\u5757\u914D\u7F6E\uFF0C\u5B8C\u5168\u7531\u5F00\u53D1\u8005\u81EA\u884C\u7EF4\u62A4\u3002\u5728\u7A0B\u5E8F\u542F\u52A8\u65F6\u4F1A\u8BFB\u53D6\u8BE5\u914D\u7F6E\u6587\u4EF6\u3002\u8BE5\u4E1A\u52A1\n\u9ED8\u8BA4\u7684\u811A\u624B\u67B6\u9879\u76EE\u6A21\u677F\u63D0\u4F9B\u7684\u4E1A\u52A1\u914D\u7F6E\u5982\u4E0B\uFF1A"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:'title="manifest/config/config.yaml"',children:'# https://goframe.org/docs/web/server-config-file-template\nserver:\n  address:     ":8000"\n  openapiPath: "/api.json"\n  swaggerPath: "/swagger"\n\n# https://goframe.org/docs/core/glog-config\nlogger:\n  level : "all"\n  stdout: true\n\n# https://goframe.org/docs/core/gdb-config-file\ndatabase:\n  default:\n    link: "mysql:root:12345678@tcp(127.0.0.1:3306)/test"\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u9ED8\u8BA4\u63D0\u4F9B\u4E86",(0,o.jsx)(n.code,{children:"3"}),"\u9879\u7EC4\u4EF6\u7684\u914D\u7F6E\uFF0C\u5206\u522B\u4E3A\uFF1A"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"server"}),"\uFF1A",(0,o.jsx)(n.code,{children:"Web Server"}),"\u7684\u914D\u7F6E\u3002\u8FD9\u91CC\u9ED8\u8BA4\u914D\u7F6E\u7684\u76D1\u542C\u5730\u5740\u4E3A",(0,o.jsx)(n.code,{children:":8000"}),"\uFF0C\u5E76\u542F\u7528\u4E86\u63A5\u53E3\u6587\u6863\u7279\u6027\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"logger"}),"\uFF1A\u9ED8\u8BA4\u65E5\u5FD7\u7EC4\u4EF6\u7684\u914D\u7F6E\u3002\u8FD9\u91CC\u7684\u65E5\u5FD7\u7EA7\u522B\u662F\u6240\u6709\u65E5\u5FD7\u90FD\u4F1A\u6253\u5370\uFF0C\u5E76\u4E14\u90FD\u4F1A\u8F93\u51FA\u5230\u6807\u51C6\u8F93\u51FA\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"database"}),"\uFF1A\u6570\u636E\u5E93\u7EC4\u4EF6\u7684\u914D\u7F6E\u3002\u8FD9\u53EA\u662F\u4E00\u4E2A\u6A21\u677F\uFF0C\u9700\u8981\u6211\u4EEC\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u4FEE\u6539\u94FE\u63A5\u5730\u5740\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["\u6BCF\u4E00\u9879\u7EC4\u4EF6\u914D\u7F6E\u7684\u6CE8\u91CA\u4E0A\u63D0\u4F9B\u4E86\u5B98\u7F51\u6587\u6863\u7684\u914D\u7F6E\u53C2\u8003\u94FE\u63A5\u3002\u6211\u4EEC\u8FD9\u91CC\u9700\u8981\u4FEE\u6539\u6570\u636E\u5E93\u914D\u7F6E\u4E2D\u7684\u94FE\u63A5\u4FE1\u606F\uFF0C\u4E3A\u6211\u4EEC\u771F\u5B9E\u53EF\u7528\u7684\u94FE\u63A5\u4FE1\u606F\u3002\u5173\u4E8E\u6570\u636E\u5E93\u7684\u914D\u7F6E\u8BE6\u7EC6\u4ECB\u7ECD\uFF0C\u611F\u5174\u8DA3\u8BF7\u53C2\u8003\u7AE0\u8282\uFF1A",(0,o.jsx)(n.a,{href:"/en/docs/core/gdb-config-file",children:"ORM\u4F7F\u7528\u914D\u7F6E-\u914D\u7F6E\u6587\u4EF6"})]}),"\n",(0,o.jsxs)(n.p,{children:["\u793A\u4F8B\u6E90\u7801\uFF1A",(0,o.jsx)(n.a,{href:"https://github.com/gogf/quick-demo/blob/main/manifest/config/config.yaml",children:"https://github.com/gogf/quick-demo/blob/main/manifest/config/config.yaml"})]}),"\n",(0,o.jsx)(n.h2,{id:"\u6DFB\u52A0\u8DEF\u7531\u6CE8\u518C",children:"\u6DFB\u52A0\u8DEF\u7531\u6CE8\u518C"}),"\n",(0,o.jsxs)(n.p,{children:["\u6DFB\u52A0\u6211\u4EEC\u65B0\u586B\u5199\u7684",(0,o.jsx)(n.code,{children:"api"}),"\u5230\u8DEF\u7531\u975E\u5E38\u7B80\u5355\uFF0C\u5982\u4E0B\uFF1A"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"goframe\u8DEF\u7531\u6CE8\u518C",src:i(576969).Z+"",width:"3420",height:"2002"})}),"\n",(0,o.jsxs)(n.p,{children:["\u5728\u5206\u7EC4\u8DEF\u7531\u7684",(0,o.jsx)(n.code,{children:"group.Bind"}),"\u65B9\u6CD5\u4E2D\uFF0C\u901A\u8FC7",(0,o.jsx)(n.code,{children:"user.NewV1()"}),"\u6DFB\u52A0\u6211\u4EEC\u7684\u8DEF\u7531\u5BF9\u8C61\u5373\u53EF\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u793A\u4F8B\u6E90\u7801\uFF1A",(0,o.jsx)(n.a,{href:"https://github.com/gogf/quick-demo/blob/main/internal/cmd/cmd.go",children:"https://github.com/gogf/quick-demo/blob/main/internal/cmd/cmd.go"})]}),"\n",(0,o.jsx)(n.p,{children:"\u5230\u76EE\u524D\u4E3A\u6B62\uFF0C\u6211\u4EEC\u7684\u63A5\u53E3\u5DF2\u7ECF\u5B8C\u5168\u5F00\u53D1\u5B8C\u4E86\uFF0C\u4E0B\u4E00\u6B65\uFF0C\u6211\u4EEC\u5C06\u542F\u52A8\u670D\u52A1\uFF0C\u5E76\u505A\u4E00\u4E9B\u63A5\u53E3\u6D4B\u8BD5\uFF0C\u67E5\u770B\u6548\u679C\u3002"}),"\n",(0,o.jsx)(n.h2,{id:"\u5B66\u4E60\u5C0F\u7ED3",children:"\u5B66\u4E60\u5C0F\u7ED3"}),"\n",(0,o.jsxs)(n.p,{children:["\u5F53\u6211\u4EEC\u5728\u4F7F\u7528\u6570\u636E\u5E93\u529F\u80FD\u7684\u65F6\u5019\uFF0C\u9700\u8981\u5F15\u5165\u7279\u5B9A\u7684\u6570\u636E\u5E93\u9A71\u52A8\u3002\u5728",(0,o.jsx)(n.code,{children:"GoFrame"}),"\u5B98\u65B9\u4ED3\u5E93\u4E2D\uFF0C\u901A\u8FC7\u793E\u533A\u7EC4\u4EF6\u7684\u5F62\u5F0F\u63D0\u4F9B\u4E86\u5E38\u7528\u6570\u636E\u5E93\u7684\u9A71\u52A8\u5B9E\u73B0\u3002\u6211\u4EEC\u7684\u7A0B\u5E8F\u4E3B\u8981\u4F7F\u7528\u7684\u662F\u4E1A\u52A1\u914D\u7F6E\uFF0C\u5E76\u4E14\u9700\u8981\u5C06\u5176\u4E2D\u7684\u6570\u636E\u5E93\u8FDE\u63A5\u5730\u5740\u4FEE\u6539\u4E3A\u6211\u4EEC\u642D\u5EFA\u7684\u6570\u636E\u5E93\u5730\u5740\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u8DEF\u7531\u6CE8\u518C\u5C31\u592A\u7B80\u5355\u4E86\uFF0C\u6DFB\u52A0\u4E00\u4E2A",(0,o.jsx)(n.code,{children:"controller"}),"\u5BF9\u8C61\u5230\u5206\u7EC4\u8DEF\u7531\u6CE8\u518C\u4E2D",(0,o.jsx)(n.code,{children:"group.Bind"}),"\u5373\u53EF\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u76EE\u524D\u4E3A\u6B62\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u5C06",(0,o.jsx)(n.code,{children:"CURD"}),"\u63A5\u53E3\u5F00\u53D1\u5B8C\u6210\u5566\uD83D\uDC4F\uD83D\uDC4F\u3002\u53EF\u4EE5\u770B\u5230\uFF0C\u6211\u4EEC\u505A\u7684\u4E8B\u60C5\u4E3B\u8981\u662F\u8FD9\u51E0\u9879\uFF1A"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u6570\u636E\u5E93\u8868\u8BBE\u8BA1"}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"api"}),"\u63A5\u53E3\u5B9A\u4E49"]}),"\n",(0,o.jsx)(n.li,{children:"\u63A5\u53E3\u7684\u4E1A\u52A1\u903B\u8F91\u5B9E\u73B0"}),"\n",(0,o.jsx)(n.li,{children:"\u7B80\u5355\u7684\u914D\u7F6E\u548C\u8DEF\u7531\u6CE8\u518C"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u4E0B\u4E00\u6B65\uFF0C\u6211\u4EEC\u542F\u52A8\u7A0B\u5E8F\u770B\u770B\u6548\u679C\u5427\u3002"})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},576969:function(e,n,i){i.d(n,{Z:function(){return c}});let c=i.p+"assets/images/QQ_1731680426319-9a62c618b048b96f0bb8976f999b334b.png"},250065:function(e,n,i){i.d(n,{Z:function(){return d},a:function(){return t}});var c=i(667294);let o={},s=c.createContext(o);function t(e){let n=c.useContext(s);return c.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);