"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["18945"],{637468:function(e,n,o){o.r(n),o.d(n,{metadata:()=>l,contentTitle:()=>s,default:()=>a,assets:()=>i,toc:()=>t,frontMatter:()=>d});var l=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6-\u914D\u7F6E\u7BA1\u7406","title":"\u65E5\u5FD7\u7EC4\u4EF6-\u914D\u7F6E\u7BA1\u7406","description":"GoFrame\u6846\u67B6\u4E2D\u65E5\u5FD7\u7EC4\u4EF6\u7684\u914D\u7F6E\u7BA1\u7406\u529F\u80FD\uFF0C\u5305\u62EC\u5982\u4F55\u901A\u8FC7\u914D\u7F6E\u6587\u4EF6\u548C\u914D\u7F6E\u65B9\u6CD5\u7BA1\u7406Logger\u5BF9\u8C61\u3002\u65E5\u5FD7\u7EC4\u4EF6\u652F\u6301\u591A\u79CD\u914D\u7F6E\u683C\u5F0F\uFF0C\u6A21\u5757\u5316\u8BBE\u8BA1\u4F7F\u5176\u80FD\u72EC\u7ACB\u5730\u8FDB\u884C\u65E5\u5FD7\u8F93\u51FA\u914D\u7F6E\u3002\u914D\u7F6E\u9879\u6DB5\u76D6\u65E5\u5FD7\u8DEF\u5F84\u3001\u8F93\u51FA\u7EA7\u522B\u548C\u7EC8\u7AEF\u663E\u793A\u7B49\uFF0C\u65E5\u5FD7\u7EA7\u522B\u652F\u6301\u591A\u79CD\u6A21\u5F0F\uFF0C\u786E\u4FDD\u7075\u6D3B\u8BB0\u5F55\u5404\u7EA7\u522B\u4FE1\u606F\u3002","source":"@site/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6-\u914D\u7F6E\u7BA1\u7406.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6","slug":"/docs/core/glog-config","permalink":"/en/docs/core/glog-config","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6-\u914D\u7F6E\u7BA1\u7406.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/core/glog-config","title":"\u65E5\u5FD7\u7EC4\u4EF6-\u914D\u7F6E\u7BA1\u7406","sidebar_position":0,"hide_title":true,"keywords":["GoFrame","\u65E5\u5FD7\u7EC4\u4EF6","\u914D\u7F6E\u7BA1\u7406","\u65E5\u5FD7\u8F93\u51FA","\u65E5\u5FD7\u7EA7\u522B","\u914D\u7F6E\u6587\u4EF6","Logger","\u6A21\u5757\u5316","\u65E5\u5FD7\u5207\u5206","\u65E5\u5FD7\u683C\u5F0F"],"description":"GoFrame\u6846\u67B6\u4E2D\u65E5\u5FD7\u7EC4\u4EF6\u7684\u914D\u7F6E\u7BA1\u7406\u529F\u80FD\uFF0C\u5305\u62EC\u5982\u4F55\u901A\u8FC7\u914D\u7F6E\u6587\u4EF6\u548C\u914D\u7F6E\u65B9\u6CD5\u7BA1\u7406Logger\u5BF9\u8C61\u3002\u65E5\u5FD7\u7EC4\u4EF6\u652F\u6301\u591A\u79CD\u914D\u7F6E\u683C\u5F0F\uFF0C\u6A21\u5757\u5316\u8BBE\u8BA1\u4F7F\u5176\u80FD\u72EC\u7ACB\u5730\u8FDB\u884C\u65E5\u5FD7\u8F93\u51FA\u914D\u7F6E\u3002\u914D\u7F6E\u9879\u6DB5\u76D6\u65E5\u5FD7\u8DEF\u5F84\u3001\u8F93\u51FA\u7EA7\u522B\u548C\u7EC8\u7AEF\u663E\u793A\u7B49\uFF0C\u65E5\u5FD7\u7EA7\u522B\u652F\u6301\u591A\u79CD\u6A21\u5F0F\uFF0C\u786E\u4FDD\u7075\u6D3B\u8BB0\u5F55\u5404\u7EA7\u522B\u4FE1\u606F\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u65E5\u5FD7\u7EC4\u4EF6","permalink":"/en/docs/core/glog"},"next":{"title":"\u65E5\u5FD7\u7EC4\u4EF6-\u65E5\u5FD7\u7EA7\u522B","permalink":"/en/docs/core/glog-level"}}'),r=o("785893"),c=o("250065");let d={slug:"/docs/core/glog-config",title:"\u65E5\u5FD7\u7EC4\u4EF6-\u914D\u7F6E\u7BA1\u7406",sidebar_position:0,hide_title:!0,keywords:["GoFrame","\u65E5\u5FD7\u7EC4\u4EF6","\u914D\u7F6E\u7BA1\u7406","\u65E5\u5FD7\u8F93\u51FA","\u65E5\u5FD7\u7EA7\u522B","\u914D\u7F6E\u6587\u4EF6","Logger","\u6A21\u5757\u5316","\u65E5\u5FD7\u5207\u5206","\u65E5\u5FD7\u683C\u5F0F"],description:"GoFrame\u6846\u67B6\u4E2D\u65E5\u5FD7\u7EC4\u4EF6\u7684\u914D\u7F6E\u7BA1\u7406\u529F\u80FD\uFF0C\u5305\u62EC\u5982\u4F55\u901A\u8FC7\u914D\u7F6E\u6587\u4EF6\u548C\u914D\u7F6E\u65B9\u6CD5\u7BA1\u7406Logger\u5BF9\u8C61\u3002\u65E5\u5FD7\u7EC4\u4EF6\u652F\u6301\u591A\u79CD\u914D\u7F6E\u683C\u5F0F\uFF0C\u6A21\u5757\u5316\u8BBE\u8BA1\u4F7F\u5176\u80FD\u72EC\u7ACB\u5730\u8FDB\u884C\u65E5\u5FD7\u8F93\u51FA\u914D\u7F6E\u3002\u914D\u7F6E\u9879\u6DB5\u76D6\u65E5\u5FD7\u8DEF\u5F84\u3001\u8F93\u51FA\u7EA7\u522B\u548C\u7EC8\u7AEF\u663E\u793A\u7B49\uFF0C\u65E5\u5FD7\u7EA7\u522B\u652F\u6301\u591A\u79CD\u6A21\u5F0F\uFF0C\u786E\u4FDD\u7075\u6D3B\u8BB0\u5F55\u5404\u7EA7\u522B\u4FE1\u606F\u3002"},s=void 0,i={},t=[{value:"\u914D\u7F6E\u6587\u4EF6\uFF08\u63A8\u8350\uFF09",id:"\u914D\u7F6E\u6587\u4EF6\u63A8\u8350",level:2},{value:"\u793A\u4F8B1\uFF0C\u9ED8\u8BA4\u914D\u7F6E\u9879",id:"\u793A\u4F8B1\u9ED8\u8BA4\u914D\u7F6E\u9879",level:3},{value:"\u793A\u4F8B2\uFF0C\u591A\u4E2A\u914D\u7F6E\u9879",id:"\u793A\u4F8B2\u591A\u4E2A\u914D\u7F6E\u9879",level:3},{value:"\u914D\u7F6E\u65B9\u6CD5\uFF08\u9AD8\u7EA7\uFF09",id:"\u914D\u7F6E\u65B9\u6CD5\u9AD8\u7EA7",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2}];function g(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u65E5\u5FD7\u7EC4\u4EF6\u662F ",(0,r.jsx)(n.code,{children:"GoFrame"})," \u6846\u67B6\u6838\u5FC3\u7684\u7EC4\u4EF6\u4E4B\u4E00\uFF0C\u652F\u6301\u975E\u5E38\u65B9\u4FBF\u7684\u914D\u7F6E\u7BA1\u7406\u80FD\u529B\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u914D\u7F6E\u6587\u4EF6\u63A8\u8350",children:"\u914D\u7F6E\u6587\u4EF6\uFF08\u63A8\u8350\uFF09"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["\u65E5\u5FD7\u7684\u914D\u7F6E\u4F7F\u7528\u7684\u662F\u6846\u67B6\u7EDF\u4E00\u7684\u914D\u7F6E\u7EC4\u4EF6\uFF0C\u652F\u6301\u591A\u79CD\u6587\u4EF6\u683C\u5F0F\uFF0C\u4E5F\u652F\u6301\u914D\u7F6E\u4E2D\u5FC3\u3001\u63A5\u53E3\u5316\u6269\u5C55\u7B49\u7279\u6027\uFF0C\u66F4\u591A\u7EC6\u8282\u8BF7\u53C2\u8003\u7AE0\u8282\uFF1A ",(0,r.jsx)(n.a,{href:"/en/docs/core/gcfg",children:"\u914D\u7F6E\u7BA1\u7406"})]})}),"\n",(0,r.jsxs)(n.p,{children:["\u65E5\u5FD7\u7EC4\u4EF6\u652F\u6301\u914D\u7F6E\u6587\u4EF6\uFF0C\u5F53\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"g.Log(\u5355\u4F8B\u540D\u79F0)"})," \u83B7\u53D6 ",(0,r.jsx)(n.code,{children:"Logger"})," \u5355\u4F8B\u5BF9\u8C61\u65F6\uFF0C\u5C06\u4F1A\u81EA\u52A8\u901A\u8FC7\u9ED8\u8BA4\u7684\u914D\u7F6E\u7BA1\u7406\u5BF9\u8C61\u83B7\u53D6\u5BF9\u5E94\u7684 ",(0,r.jsx)(n.code,{children:"Logger"})," \u914D\u7F6E\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4F1A\u8BFB\u53D6 ",(0,r.jsx)(n.code,{children:"logger.\u5355\u4F8B\u540D\u79F0"})," \u914D\u7F6E\u9879\uFF0C\u5F53\u8BE5\u914D\u7F6E\u9879\u4E0D\u5B58\u5728\u65F6\uFF0C\u5C06\u4F1A\u8BFB\u53D6\u9ED8\u8BA4\u7684 ",(0,r.jsx)(n.code,{children:"logger"})," \u914D\u7F6E\u9879\u3002\u914D\u7F6E\u9879\u8BF7\u53C2\u8003\u914D\u7F6E\u5BF9\u8C61\u7ED3\u6784\u5B9A\u4E49\uFF1A ",(0,r.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/os/glog#Config",children:"https://pkg.go.dev/github.com/gogf/gf/v2/os/glog#Config"})]}),"\n",(0,r.jsx)(n.p,{children:"\u5B8C\u6574\u914D\u7F6E\u6587\u4EF6\u914D\u7F6E\u9879\u53CA\u8BF4\u660E\u5982\u4E0B\uFF0C\u5176\u4E2D\u914D\u7F6E\u9879\u540D\u79F0\u4E0D\u533A\u5206\u5927\u5C0F\u5199\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'logger:\n  path:                  "/var/log/"           # \u65E5\u5FD7\u6587\u4EF6\u8DEF\u5F84\u3002\u9ED8\u8BA4\u4E3A\u7A7A\uFF0C\u8868\u793A\u5173\u95ED\uFF0C\u4EC5\u8F93\u51FA\u5230\u7EC8\u7AEF\n  file:                  "{Y-m-d}.log"         # \u65E5\u5FD7\u6587\u4EF6\u683C\u5F0F\u3002\u9ED8\u8BA4\u4E3A"{Y-m-d}.log"\n  prefix:                ""                    # \u65E5\u5FD7\u5185\u5BB9\u8F93\u51FA\u524D\u7F00\u3002\u9ED8\u8BA4\u4E3A\u7A7A\n  level:                 "all"                 # \u65E5\u5FD7\u8F93\u51FA\u7EA7\u522B\n  timeFormat:            "2006-01-02T15:04:05" # \u81EA\u5B9A\u4E49\u65E5\u5FD7\u8F93\u51FA\u7684\u65F6\u95F4\u683C\u5F0F\uFF0C\u4F7F\u7528Golang\u6807\u51C6\u7684\u65F6\u95F4\u683C\u5F0F\u914D\u7F6E\n  ctxKeys:               []                    # \u81EA\u5B9A\u4E49Context\u4E0A\u4E0B\u6587\u53D8\u91CF\u540D\u79F0\uFF0C\u81EA\u52A8\u6253\u5370Context\u7684\u53D8\u91CF\u5230\u65E5\u5FD7\u4E2D\u3002\u9ED8\u8BA4\u4E3A\u7A7A\n  header:                true                  # \u662F\u5426\u6253\u5370\u65E5\u5FD7\u7684\u5934\u4FE1\u606F\u3002\u9ED8\u8BA4true\n  stdout:                true                  # \u65E5\u5FD7\u662F\u5426\u540C\u65F6\u8F93\u51FA\u5230\u7EC8\u7AEF\u3002\u9ED8\u8BA4true\n  rotateSize:            0                     # \u6309\u7167\u65E5\u5FD7\u6587\u4EF6\u5927\u5C0F\u5BF9\u6587\u4EF6\u8FDB\u884C\u6EDA\u52A8\u5207\u5206\u3002\u9ED8\u8BA4\u4E3A0\uFF0C\u8868\u793A\u5173\u95ED\u6EDA\u52A8\u5207\u5206\u7279\u6027\n  rotateExpire:          0                     # \u6309\u7167\u65E5\u5FD7\u6587\u4EF6\u65F6\u95F4\u95F4\u9694\u5BF9\u6587\u4EF6\u6EDA\u52A8\u5207\u5206\u3002\u9ED8\u8BA4\u4E3A0\uFF0C\u8868\u793A\u5173\u95ED\u6EDA\u52A8\u5207\u5206\u7279\u6027\n  rotateBackupLimit:     0                     # \u6309\u7167\u5207\u5206\u7684\u6587\u4EF6\u6570\u91CF\u6E05\u7406\u5207\u5206\u6587\u4EF6\uFF0C\u5F53\u6EDA\u52A8\u5207\u5206\u7279\u6027\u5F00\u542F\u65F6\u6709\u6548\u3002\u9ED8\u8BA4\u4E3A0\uFF0C\u8868\u793A\u4E0D\u5907\u4EFD\uFF0C\u5207\u5206\u5219\u5220\u9664\n  rotateBackupExpire:    0                     # \u6309\u7167\u5207\u5206\u7684\u6587\u4EF6\u6709\u6548\u671F\u6E05\u7406\u5207\u5206\u6587\u4EF6\uFF0C\u5F53\u6EDA\u52A8\u5207\u5206\u7279\u6027\u5F00\u542F\u65F6\u6709\u6548\u3002\u9ED8\u8BA4\u4E3A0\uFF0C\u8868\u793A\u4E0D\u5907\u4EFD\uFF0C\u5207\u5206\u5219\u5220\u9664\n  rotateBackupCompress:  0                     # \u6EDA\u52A8\u5207\u5206\u6587\u4EF6\u7684\u538B\u7F29\u6BD4\uFF080-9\uFF09\u3002\u9ED8\u8BA4\u4E3A0\uFF0C\u8868\u793A\u4E0D\u538B\u7F29\n  rotateCheckInterval:   "1h"                  # \u6EDA\u52A8\u5207\u5206\u7684\u65F6\u95F4\u68C0\u6D4B\u95F4\u9694\uFF0C\u4E00\u822C\u4E0D\u9700\u8981\u8BBE\u7F6E\u3002\u9ED8\u8BA4\u4E3A1\u5C0F\u65F6\n  stdoutColorDisabled:   false                 # \u5173\u95ED\u7EC8\u7AEF\u7684\u989C\u8272\u6253\u5370\u3002\u9ED8\u8BA4\u5F00\u542F\n  writerColorEnable:     false                 # \u65E5\u5FD7\u6587\u4EF6\u662F\u5426\u5E26\u4E0A\u989C\u8272\u3002\u9ED8\u8BA4false\uFF0C\u8868\u793A\u4E0D\u5E26\u989C\u8272\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u5176\u4E2D\uFF0C ",(0,r.jsx)(n.code,{children:"level"})," \u914D\u7F6E\u9879\u4F7F\u7528\u5B57\u7B26\u4E32\u914D\u7F6E\uFF0C\u6309\u7167\u65E5\u5FD7\u7EA7\u522B\u652F\u6301\u4EE5\u4E0B\u914D\u7F6E\uFF1A ",(0,r.jsx)(n.code,{children:"DEBU"})," < ",(0,r.jsx)(n.code,{children:"INFO"})," < ",(0,r.jsx)(n.code,{children:"NOTI"})," < ",(0,r.jsx)(n.code,{children:"WARN"})," < ",(0,r.jsx)(n.code,{children:"ERRO"})," < ",(0,r.jsx)(n.code,{children:"CRIT"}),"\uFF0C\u4E5F\u652F\u6301 ",(0,r.jsx)(n.code,{children:"ALL"}),", ",(0,r.jsx)(n.code,{children:"DEV"}),", ",(0,r.jsx)(n.code,{children:"PROD"})," \u5E38\u89C1\u90E8\u7F72\u6A21\u5F0F\u914D\u7F6E\u540D\u79F0\u3002 ",(0,r.jsx)(n.code,{children:"level"})," \u914D\u7F6E\u9879\u5B57\u7B26\u4E32\u4E0D\u533A\u5206\u5927\u5C0F\u5199\u3002\u5173\u4E8E\u65E5\u5FD7\u7EA7\u522B\u7684\u8BE6\u7EC6\u4ECB\u7ECD\u8BF7\u67E5\u770B ",(0,r.jsx)(n.a,{href:"/en/docs/core/glog-level",children:"\u65E5\u5FD7\u7EC4\u4EF6-\u65E5\u5FD7\u7EA7\u522B"})," \u7AE0\u8282\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u793A\u4F8B1\u9ED8\u8BA4\u914D\u7F6E\u9879",children:"\u793A\u4F8B1\uFF0C\u9ED8\u8BA4\u914D\u7F6E\u9879"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'logger:\n  path:    "/var/log"\n  level:   "all"\n  stdout:  false\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u968F\u540E\u53EF\u4EE5\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"g.Log()"})," \u83B7\u53D6\u9ED8\u8BA4\u7684\u5355\u4F8B\u5BF9\u8C61\u65F6\u81EA\u52A8\u83B7\u53D6\u5E76\u8BBE\u7F6E\u8BE5\u914D\u7F6E\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u793A\u4F8B2\u591A\u4E2A\u914D\u7F6E\u9879",children:"\u793A\u4F8B2\uFF0C\u591A\u4E2A\u914D\u7F6E\u9879"}),"\n",(0,r.jsxs)(n.p,{children:["\u591A\u4E2A ",(0,r.jsx)(n.code,{children:"Logger"})," \u7684\u914D\u7F6E\u793A\u4F8B\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'logger:\n  path:    "/var/log"\n  level:   "all"\n  stdout:  false\n  logger1:\n    path:    "/var/log/logger1"\n    level:   "dev"\n    stdout:  false\n  logger2:\n    path:    "/var/log/logger2"\n    level:   "prod"\n    stdout:  true\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u5355\u4F8B\u5BF9\u8C61\u540D\u79F0\u83B7\u53D6\u5BF9\u5E94\u914D\u7F6E\u7684 ",(0,r.jsx)(n.code,{children:"Logger"})," \u5355\u4F8B\u5BF9\u8C61\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// \u5BF9\u5E94 logger.logger1 \u914D\u7F6E\u9879\nl1 := g.Log("logger1")\n// \u5BF9\u5E94 logger.logger2 \u914D\u7F6E\u9879\nl2 := g.Log("logger2")\n// \u5BF9\u5E94\u9ED8\u8BA4\u914D\u7F6E\u9879 logger\nl3 := g.Log("none")\n// \u5BF9\u5E94\u9ED8\u8BA4\u914D\u7F6E\u9879 logger\nl4 := g.Log()\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u914D\u7F6E\u65B9\u6CD5\u9AD8\u7EA7",children:"\u914D\u7F6E\u65B9\u6CD5\uFF08\u9AD8\u7EA7\uFF09"}),"\n",(0,r.jsxs)(n.p,{children:["\u914D\u7F6E\u65B9\u6CD5\u7528\u4E8E\u6A21\u5757\u5316\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"glog"})," \u65F6\u7531\u5F00\u53D1\u8005\u81EA\u5DF1\u8FDB\u884C\u914D\u7F6E\u7BA1\u7406\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u65B9\u6CD5\u5217\u8868\uFF1A"}),"\n",(0,r.jsx)(n.p,{children:"\u7B80\u8981\u8BF4\u660E\uFF1A"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u53EF\u4EE5\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"SetConfig"})," \u53CA ",(0,r.jsx)(n.code,{children:"SetConfigWithMap"})," \u6765\u8BBE\u7F6E\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u4E5F\u53EF\u4EE5\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"Logger"})," \u5BF9\u8C61\u7684 ",(0,r.jsx)(n.code,{children:"Set*"})," \u65B9\u6CD5\u8FDB\u884C\u7279\u5B9A\u914D\u7F6E\u7684\u8BBE\u7F6E\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u4E3B\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u914D\u7F6E\u9879\u5728 ",(0,r.jsx)(n.code,{children:"Logger"})," \u5BF9\u8C61\u6267\u884C\u65E5\u5FD7\u8F93\u51FA\u4E4B\u524D\u8BBE\u7F6E\uFF0C\u907F\u514D\u5E76\u53D1\u5B89\u5168\u95EE\u9898\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"SetConfigWithMap"})," \u65B9\u6CD5\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"Key-Value"})," \u952E\u503C\u5BF9\u6765\u8BBE\u7F6E/\u4FEE\u6539 ",(0,r.jsx)(n.code,{children:"Logger"})," \u7684\u7279\u5B9A\u914D\u7F6E\uFF0C\u5176\u4F59\u7684\u914D\u7F6E\u4F7F\u7528\u9ED8\u8BA4\u914D\u7F6E\u5373\u53EF\u3002\u5176\u4E2D ",(0,r.jsx)(n.code,{children:"Key"})," \u7684\u540D\u79F0\u5373\u662F ",(0,r.jsx)(n.code,{children:"Config"})," \u8FD9\u4E2A ",(0,r.jsx)(n.code,{children:"struct"})," \u4E2D\u7684\u5C5E\u6027\u540D\u79F0\uFF0C\u5E76\u4E14\u4E0D\u533A\u5206\u5927\u5C0F\u5199\uFF0C\u5355\u8BCD\u95F4\u4E5F\u652F\u6301\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"-"}),"/ ",(0,r.jsx)(n.code,{children:"_"}),"/ ",(0,r.jsx)(n.code,{children:"\u7A7A\u683C"})," \u7B26\u53F7\u8FDE\u63A5\uFF0C\u5177\u4F53\u53EF\u53C2\u8003 ",(0,r.jsx)(n.a,{href:"/en/docs/core/gconv-struct",children:"\u7C7B\u578B\u8F6C\u6362-Struct\u8F6C\u6362"})," \u7AE0\u8282\u7684\u8F6C\u6362\u89C4\u5219\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u7B80\u5355\u793A\u4F8B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'logger := glog.New()\nlogger.SetConfigWithMap(g.Map{\n    "path":     "/var/log",\n    "level":    "all",\n    "stdout":   false,\n    "StStatus": 0,\n})\nlogger.Print("test")\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u5176\u4E2D ",(0,r.jsx)(n.code,{children:"StStatus"})," \u8868\u793A\u662F\u5426\u5F00\u542F\u5806\u6808\u6253\u5370\uFF0C\u8BBE\u7F6E\u4E3A ",(0,r.jsx)(n.code,{children:"0"})," \u8868\u793A\u5173\u95ED\u3002\u952E\u540D\u4E5F\u53EF\u4EE5\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"stStatus"}),", ",(0,r.jsx)(n.code,{children:"st-status"}),", ",(0,r.jsx)(n.code,{children:"st_status"}),", ",(0,r.jsx)(n.code,{children:"St Status"}),"\uFF0C\u5176\u4ED6\u914D\u7F6E\u5C5E\u6027\u4EE5\u6B64\u7C7B\u63A8\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,r.jsxs)(n.p,{children:["\u5E38\u89C1\u95EE\u9898\uFF1A\u5982\u65E5\u5FD7\u7EC4\u4EF6\u7684\u914D\u7F6E\u4E3A\u4F55\u6CA1\u6709\u5BF9 ",(0,r.jsx)(n.code,{children:"HTTP Server"}),"\u3001 ",(0,r.jsx)(n.code,{children:"GRPC Server"}),"\u3001 ",(0,r.jsx)(n.code,{children:"ORM"})," \u7EC4\u4EF6\u6253\u5370\u7684\u65E5\u5FD7\u751F\u6548\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"GoFrame"})," \u6846\u67B6\u91C7\u7528\u4E86\u6A21\u5757\u5316\u8BBE\u8BA1\uFF0C\u65E5\u5FD7\u7EC4\u4EF6\u662F\u6846\u67B6\u72EC\u7ACB\u7684\u7EC4\u4EF6\uFF0C\u672C\u7AE0\u8282\u4ECB\u7ECD\u7684\u914D\u7F6E\u5747\u53EA\u5BF9\u72EC\u7ACB\u4F7F\u7528\u65E5\u5FD7\u7EC4\u4EF6\u7684\u65B9\u5F0F\u751F\u6548\uFF0C\u4F8B\u5982\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"g.Log()"})," \u6216\u8005 ",(0,r.jsx)(n.code,{children:"glog.New()"})," \u65B9\u6CD5\u521B\u5EFA\u7684\u65E5\u5FD7\u7EC4\u4EF6\u3002\u5176\u4ED6\u7EC4\u4EF6\u7684\u65E5\u5FD7\u914D\u7F6E\u6709\u4E13\u95E8\u7684\u914D\u7F6E\u9879\uFF0C\u6216\u8005\u65E5\u5FD7\u5BF9\u8C61\u8BBE\u7F6E\u65B9\u6CD5\u6765\u5B9E\u73B0\u65E5\u5FD7\u7684\u914D\u7F6E\uFF0C\u8BF7\u5177\u4F53\u67E5\u770B\u5BF9\u5E94\u7684\u7EC4\u4EF6\u6587\u6863\u548C ",(0,r.jsx)(n.code,{children:"API"}),"\u3002"]})]})}function a(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return s},a:function(){return d}});var l=o(667294);let r={},c=l.createContext(r);function d(e){let n=l.useContext(c);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),l.createElement(c.Provider,{value:n},e.children)}}}]);