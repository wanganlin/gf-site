"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["37928"],{711858:function(e,n,i){i.r(n),i.d(n,{metadata:()=>s,contentTitle:()=>t,default:()=>g,assets:()=>l,toc:()=>a,frontMatter:()=>c});var s=JSON.parse('{"id":"docs/\u5FAE\u670D\u52A1\u5F00\u53D1/\u670D\u52A1\u914D\u7F6E\u7BA1\u7406","title":"\u670D\u52A1\u914D\u7F6E\u7BA1\u7406","description":"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528\u914D\u7F6E\u7BA1\u7406\u7EC4\u4EF6\uFF0C\u901A\u8FC7\u89E3\u8026\u5316\u8BBE\u8BA1\uFF0C\u652F\u6301\u591A\u79CD\u7B2C\u4E09\u65B9\u914D\u7F6E\u4E2D\u5FC3\u5982Polaris\u3001Apollo\u3001Nacos\u3001Consul\u7B49\u3002\u901A\u8FC7\u8BE6\u7EC6\u4EE3\u7801\u5C55\u793A\u4E86\u5982\u4F55\u521D\u59CB\u5316\u548C\u542F\u7528Polaris\u914D\u7F6E\u5BA2\u6237\u7AEF\uFF0C\u5E76\u63D0\u4F9B\u4E86\u4F7F\u7528\u793A\u4F8B\u548C\u9519\u8BEF\u5904\u7406\u65B9\u5F0F\u3002","source":"@site/docs/docs/\u5FAE\u670D\u52A1\u5F00\u53D1/\u670D\u52A1\u914D\u7F6E\u7BA1\u7406.md","sourceDirName":"docs/\u5FAE\u670D\u52A1\u5F00\u53D1","slug":"/docs/micro-service/config-service","permalink":"/en/docs/micro-service/config-service","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u5FAE\u670D\u52A1\u5F00\u53D1/\u670D\u52A1\u914D\u7F6E\u7BA1\u7406.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731573312000,"sidebarPosition":7,"frontMatter":{"slug":"/docs/micro-service/config-service","title":"\u670D\u52A1\u914D\u7F6E\u7BA1\u7406","sidebar_position":7,"hide_title":true,"keywords":["GoFrame","\u914D\u7F6E\u7BA1\u7406","\u5FAE\u670D\u52A1","Polaris","Apollo","Nacos","Consul","Kubernetes","\u5BB9\u5668\u7F16\u6392","\u914D\u7F6E\u4E2D\u5FC3"],"description":"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528\u914D\u7F6E\u7BA1\u7406\u7EC4\u4EF6\uFF0C\u901A\u8FC7\u89E3\u8026\u5316\u8BBE\u8BA1\uFF0C\u652F\u6301\u591A\u79CD\u7B2C\u4E09\u65B9\u914D\u7F6E\u4E2D\u5FC3\u5982Polaris\u3001Apollo\u3001Nacos\u3001Consul\u7B49\u3002\u901A\u8FC7\u8BE6\u7EC6\u4EE3\u7801\u5C55\u793A\u4E86\u5982\u4F55\u521D\u59CB\u5316\u548C\u542F\u7528Polaris\u914D\u7F6E\u5BA2\u6237\u7AEF\uFF0C\u5E76\u63D0\u4F9B\u4E86\u4F7F\u7528\u793A\u4F8B\u548C\u9519\u8BEF\u5904\u7406\u65B9\u5F0F\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u670D\u52A1\u8D1F\u8F7D\u5747\u8861","permalink":"/en/docs/micro-service/load-balance"},"next":{"title":"WEB\u670D\u52A1\u5F00\u53D1","permalink":"/en/docs/web"}}'),r=i("785893"),o=i("250065");let c={slug:"/docs/micro-service/config-service",title:"\u670D\u52A1\u914D\u7F6E\u7BA1\u7406",sidebar_position:7,hide_title:!0,keywords:["GoFrame","\u914D\u7F6E\u7BA1\u7406","\u5FAE\u670D\u52A1","Polaris","Apollo","Nacos","Consul","Kubernetes","\u5BB9\u5668\u7F16\u6392","\u914D\u7F6E\u4E2D\u5FC3"],description:"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528\u914D\u7F6E\u7BA1\u7406\u7EC4\u4EF6\uFF0C\u901A\u8FC7\u89E3\u8026\u5316\u8BBE\u8BA1\uFF0C\u652F\u6301\u591A\u79CD\u7B2C\u4E09\u65B9\u914D\u7F6E\u4E2D\u5FC3\u5982Polaris\u3001Apollo\u3001Nacos\u3001Consul\u7B49\u3002\u901A\u8FC7\u8BE6\u7EC6\u4EE3\u7801\u5C55\u793A\u4E86\u5982\u4F55\u521D\u59CB\u5316\u548C\u542F\u7528Polaris\u914D\u7F6E\u5BA2\u6237\u7AEF\uFF0C\u5E76\u63D0\u4F9B\u4E86\u4F7F\u7528\u793A\u4F8B\u548C\u9519\u8BEF\u5904\u7406\u65B9\u5F0F\u3002"},t=void 0,l={},a=[{value:"\u57FA\u672C\u4ECB\u7ECD",id:"\u57FA\u672C\u4ECB\u7ECD",level:2},{value:"\u7EC4\u4EF6\u542F\u7528",id:"\u7EC4\u4EF6\u542F\u7528",level:2},{value:"\u5E38\u7528\u7EC4\u4EF6",id:"\u5E38\u7528\u7EC4\u4EF6",level:2},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:2},{value:"\u8FD0\u884C <code>polaris</code>",id:"\u8FD0\u884C-polaris",level:3},{value:"\u8FD0\u884C\u793A\u4F8B",id:"\u8FD0\u884C\u793A\u4F8B",level:3},{value:"\u6DFB\u52A0\u6D4B\u8BD5\u6570\u636E",id:"\u6DFB\u52A0\u6D4B\u8BD5\u6570\u636E",level:3},{value:"\u518D\u6B21\u8FD0\u884C\u793A\u4F8B",id:"\u518D\u6B21\u8FD0\u884C\u793A\u4F8B",level:3}];function d(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u57FA\u672C\u4ECB\u7ECD",children:"\u57FA\u672C\u4ECB\u7ECD"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"GoFrame"})," \u6846\u67B6\u63D0\u4F9B\u4E86\u914D\u7F6E\u7BA1\u7406\u7EC4\u4EF6\uFF0C\u91C7\u7528\u4E86\u89E3\u8026\u5316\u53CA\u63A5\u53E3\u5316\u8BBE\u8BA1\uFF0C\u53EF\u4EE5\u5F88\u7075\u6D3B\u5730\u5BF9\u63A5\u5404\u79CD\u7B2C\u4E09\u65B9\u914D\u7F6E\u7BA1\u7406\u4E2D\u5FC3\u3002\u914D\u7F6E\u7BA1\u7406\u7EC4\u4EF6\u9ED8\u8BA4\u63D0\u4F9B\u57FA\u4E8E\u672C\u5730\u7CFB\u7EDF\u6587\u4EF6\u7684\u5B9E\u73B0\uFF0C\u66F4\u591A\u7684\u5B9E\u73B0\u8BF7\u53C2\u8003\u793E\u533A\u7EC4\u4EF6\uFF1A ",(0,r.jsx)(n.a,{href:"https://github.com/gogf/gf/tree/master/contrib/config",children:"https://github.com/gogf/gf/tree/master/contrib/config"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u793E\u533A\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u5E38\u7528\u7684\u591A\u79CD\u914D\u7F6E\u4E2D\u5FC3\u5B9E\u73B0\uFF0C\u4F8B\u5982 ",(0,r.jsx)(n.code,{children:"polaris, apollo, nacos, consul"})," \u4EE5\u53CA\u5BB9\u5668\u7F16\u6392\u7684 ",(0,r.jsx)(n.code,{children:"kubernetes configmap"}),"\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u7EC4\u4EF6\u542F\u7528",children:"\u7EC4\u4EF6\u542F\u7528"}),"\n",(0,r.jsxs)(n.p,{children:["\u914D\u7F6E\u7BA1\u7406\u7EC4\u4EF6\u7684\u542F\u7528\u91C7\u7528\u4E86\u5305\u521D\u59CB\u5316\u7684\u65B9\u5F0F\uFF0C\u5E76\u4E14\u7531\u4E8E\u914D\u7F6E\u7BA1\u7406\u529F\u80FD\u6BD4\u8F83\u5E95\u5C42\uFF0C\u56E0\u6B64\u9700\u8981\u4FDD\u8BC1\u793E\u533A\u5305\u5728 ",(0,r.jsx)(n.code,{children:"main"})," \u5305\u7684\u6700\u9876\u90E8\u5F15\u5165\uFF0C\u9632\u6B62\u8E29\u5751\u3002\u6211\u4EEC\u8FD9\u91CC\u4EE5 ",(0,r.jsx)(n.code,{children:"polaris"})," \u4E3A\u4F8B\uFF0C\u793E\u533A\u7EC4\u4EF6\u7684\u4F7F\u7528\u8BF4\u660E\uFF1A ",(0,r.jsx)(n.a,{href:"https://github.com/gogf/gf/tree/master/contrib/config/polaris",children:"https://github.com/gogf/gf/tree/master/contrib/config/polaris"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u9700\u8981\u63D0\u4F9B\u4E00\u4E2A\u72EC\u7ACB\u7684\u5F15\u5165\u5305\uFF0C\u4F8B\u5982 ",(0,r.jsx)(n.code,{children:"boot"}),"\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package boot\n\nimport (\n    "github.com/gogf/gf/contrib/config/polaris/v2"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc init() {\n    var (\n        ctx       = gctx.GetInitCtx()\n        namespace = "default"\n        fileGroup = "TestGroup"\n        fileName  = "config.yaml"\n        path      = "manifest/config/polaris.yaml"\n        logDir    = "/tmp/polaris/log"\n    )\n    // Create polaris Client that implements gcfg.Adapter.\n    adapter, err := polaris.New(ctx, polaris.Config{\n        Namespace: namespace,\n        FileGroup: fileGroup,\n        FileName:  fileName,\n        Path:      path,\n        LogDir:    logDir,\n        Watch:     true,\n    })\n    if err != nil {\n        g.Log().Fatalf(ctx, `%+v`, err)\n    }\n    // Change the adapter of default configuration instance.\n    g.Cfg().SetAdapter(adapter)\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u5176\u4E2D\uFF1A"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Namespace"})," \u6307\u5B9A\u7684\u662F ",(0,r.jsx)(n.code,{children:"polaris"})," \u914D\u7F6E\u4E2D\u7684\u547D\u540D\u7A7A\u95F4\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"FileGroup"})," \u6307\u5B9A\u7684\u662F ",(0,r.jsx)(n.code,{children:"polaris"})," \u4E2D\u7684\u6587\u4EF6\u5206\u7EC4\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"FileName"})," \u6307\u5B9A\u7684\u662F\u9700\u8981\u8BFB\u53D6\u7684 ",(0,r.jsx)(n.code,{children:"polaris"})," \u4E2D\u7684\u914D\u7F6E\u6587\u4EF6\u540D\u79F0\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Path"})," \u6307\u5B9A\u7684\u662F ",(0,r.jsx)(n.code,{children:"polaris"})," \u670D\u52A1\u7AEF\u914D\u7F6E\uFF0C\u5305\u62ECpolaris\u7684\u94FE\u63A5\u5730\u5740\u3001\u76D1\u542C\u5730\u5740\u3001\u7EC4\u4EF6\u8F93\u51FA\u65E5\u5FD7\u8DEF\u5F84\u7B49\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Polaris"})," \u7684\u914D\u7F6E\u6587\u4EF6\u5982\u4E0B\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'global:\n  serverConnector:\n    addresses:\n      - 127.0.0.1:8091\nconfig:\n  configConnector:\n    addresses:\n      - 127.0.0.1:8093\nconsumer:\n  localCache:\n    persistDir: "/tmp/polaris/backup"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u968F\u540E\u5728 ",(0,r.jsx)(n.code,{children:"main.go"})," \u9876\u90E8\u5F15\u5165 ",(0,r.jsx)(n.code,{children:"boot"})," \u5305\uFF0C\u4FDD\u8BC1\u8BE5\u5305\u7684\u5F15\u5165\u5728\u6240\u6709\u7EC4\u4EF6\u7684\u6700\u524D\u9762\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    _ "github.com/gogf/gf/example/config/polaris/boot"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var ctx = gctx.GetInitCtx()\n\n    // Available checks.\n    g.Dump(g.Cfg().Available(ctx))\n\n    // All key-value configurations.\n    g.Dump(g.Cfg().Data(ctx))\n\n    // Retrieve certain value by key.\n    g.Dump(g.Cfg().MustGet(ctx, "server.address"))\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u6CE8\u610F\u5176\u4E2D\u9876\u90E8 ",(0,r.jsx)(n.code,{children:"import"})," \u7684\u5F15\u5165\u8BED\u53E5\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'_ "github.com/gogf/gf/example/config/polaris/boot"\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u5E38\u7528\u7EC4\u4EF6",children:"\u5E38\u7528\u7EC4\u4EF6"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u7EC4\u4EF6\u540D\u79F0"}),(0,r.jsx)(n.th,{children:"\u6587\u6863\u8BF4\u660E"}),(0,r.jsx)(n.th,{children:"\u5907\u6CE8"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"file"})}),(0,r.jsx)(n.td,{children:"\u6846\u67B6\u5185\u7F6E"}),(0,r.jsx)(n.td,{children:"\u9ED8\u8BA4\u5B9E\u73B0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"apollo"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/gogf/gf/tree/master/contrib/config/apollo",children:"https://github.com/gogf/gf/tree/master/contrib/config/apollo"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"kubecm"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/gogf/gf/tree/master/contrib/config/kubecm",children:"https://github.com/gogf/gf/tree/master/contrib/config/kubecm"})}),(0,r.jsx)(n.td,{children:"\u5E38\u7528\u4E8E\u5BB9\u5668\u90E8\u7F72\u73AF\u5883"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"nacos"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/gogf/gf/tree/master/contrib/config/nacos",children:"https://github.com/gogf/gf/tree/master/contrib/config/nacos"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"polaris"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/gogf/gf/tree/master/contrib/config/polaris",children:"https://github.com/gogf/gf/tree/master/contrib/config/polaris"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"consul"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/gogf/gf/tree/master/contrib/config/consul",children:"https://github.com/gogf/gf/tree/master/contrib/config/consul"})}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["\u66F4\u591A\u7EC4\u4EF6\uFF0C\u8BF7\u53C2\u8003\uFF1A ",(0,r.jsx)(n.a,{href:"https://github.com/gogf/gf/tree/master/contrib/config",children:"https://github.com/gogf/gf/tree/master/contrib/config"})]}),"\n",(0,r.jsx)(n.h2,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/gogf/gf/tree/master/example/config/polaris",children:"https://github.com/gogf/gf/tree/master/example/config/polaris"})}),"\n",(0,r.jsxs)(n.h3,{id:"\u8FD0\u884C-polaris",children:["\u8FD0\u884C ",(0,r.jsx)(n.code,{children:"polaris"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker run -d --name polaris -p 8080:8080 -p 8090:8090 -p 8091:8091 -p 8093:8093 loads/polaris-server-standalone:1.11.2\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u8FD0\u884C\u793A\u4F8B",children:"\u8FD0\u884C\u793A\u4F8B"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'$ go run main.go\ntrue\n{}\n"failed to update local value: config file is empty"\npanic: failed to update local value: config file is empty\n\ngoroutine 1 [running]:\ngithub.com/gogf/gf/v2/os/gcfg.(*Config).MustGet(0x0?, {0x1c1c4f8?, 0xc0000c2000?}, {0x1ac11ad?, 0x0?}, {0x0?, 0xc000002340?, 0xc000064738?})\n        /Users/john/Workspace/gogf/gf/os/gcfg/gcfg.go:167 +0x5e\nmain.main()\n        /Users/john/Workspace/gogf/gf/example/config/polaris/main.go:20 +0x1b8\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u53EF\u4EE5\u770B\u5230\u6700\u540E\u7684 ",(0,r.jsx)(n.code,{children:"MustGet"})," \u65B9\u6CD5\u6267\u884C\u6709\u62A5\u9519\uFF0C\u8FD9\u662F\u56E0\u4E3A ",(0,r.jsx)(n.code,{children:"polaris"})," \u4E2D\u5E76\u6CA1\u6709\u6307\u5B9A\u7684\u547D\u540D\u7A7A\u95F4\u3001\u914D\u7F6E\u5206\u7EC4\u4EE5\u53CA\u914D\u7F6E\u6587\u4EF6\uFF0C\u5373\u4FBF\u67E5\u8BE2\u4E0D\u5230\u4EFB\u4F55\u6570\u636E\u4F46\u662F\u6D89\u53CA\u5230\u914D\u7F6E\u95EE\u9898\u56E0\u6B64\u8FD4\u56DE\u9519\u8BEF\u4E86\u3002\u7531\u4E8E\u8FD9\u91CC\u4F7F\u7528\u7684\u662F ",(0,r.jsx)(n.code,{children:"Must*"})," \u65B9\u6CD5\uFF0C\u90A3\u4E48\u5728\u6267\u884C\u8FD4\u56DE\u9519\u8BEF\u65F6\u5C06\u4F1A\u76F4\u63A5 ",(0,r.jsx)(n.code,{children:"panic"})," \u800C\u4E0D\u662F\u8FD4\u56DE\u9519\u8BEF\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u90A3\u4E48\u6211\u4EEC\u8FDB\u5165 ",(0,r.jsx)(n.code,{children:"polaris"})," \u7684\u540E\u53F0\u6DFB\u52A0\u4E00\u4E9B\u6D4B\u8BD5\u6570\u636E\u518D\u8BD5\u8BD5\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u6DFB\u52A0\u6D4B\u8BD5\u6570\u636E",children:"\u6DFB\u52A0\u6D4B\u8BD5\u6570\u636E"}),"\n",(0,r.jsxs)(n.p,{children:["\u8FDB\u5165 ",(0,r.jsx)(n.a,{href:"http://127.0.0.1:8080/#/login",children:"http://127.0.0.1:8080/#/login"})," \u9ED8\u8BA4\u8D26\u53F7 ",(0,r.jsx)(n.code,{children:"polaris"})," \u5BC6\u7801 ",(0,r.jsx)(n.code,{children:"polaris"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(544624).Z+"",width:"3068",height:"846"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(55021).Z+"",width:"3066",height:"1152"})}),"\n",(0,r.jsx)(n.h3,{id:"\u518D\u6B21\u8FD0\u884C\u793A\u4F8B",children:"\u518D\u6B21\u8FD0\u884C\u793A\u4F8B"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'$ go run main.go\ntrue\n{\n    "server": {\n        "openapiPath": "/api.json",\n        "swaggerPath": "/swagger",\n        "address":     ":8199",\n    },\n}\n<nil>\n":8199"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u53EF\u4EE5\u770B\u5230\u5DF2\u7ECF\u6B63\u786E\u67E5\u8BE2\u5230\u4E86 ",(0,r.jsx)(n.code,{children:"polaris"})," \u4E2D\u7684\u914D\u7F6E\u6570\u636E\u3002"]})]})}function g(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},55021:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/acaecb43af69ec5f149e1fbe8f74dc4b-39364e4b31cc81703969669270f9dd28.png"},544624:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/b6aa368b0594187558a778aa54a428a2-35c6edba1ffa55e3aab1270919741148.png"},250065:function(e,n,i){i.d(n,{Z:function(){return t},a:function(){return c}});var s=i(667294);let r={},o=s.createContext(r);function c(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);