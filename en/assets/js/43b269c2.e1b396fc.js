"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["94851"],{444464:function(n,e,t){t.r(e),t.d(e,{metadata:()=>i,contentTitle:()=>g,default:()=>m,assets:()=>l,toc:()=>s,frontMatter:()=>r});var i=JSON.parse('{"id":"\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u5B9A\u65F6\u5668-gtimer/\u5B9A\u65F6\u5668-\u57FA\u672C\u4F7F\u7528","title":"\u5B9A\u65F6\u5668-\u57FA\u672C\u4F7F\u7528","description":"\u57FA\u672C\u793A\u4F8B","source":"@site/versioned_docs/version-2.4.x/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u5B9A\u65F6\u5668-gtimer/\u5B9A\u65F6\u5668-\u57FA\u672C\u4F7F\u7528.md","sourceDirName":"\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u5B9A\u65F6\u5668-gtimer","slug":"/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u5B9A\u65F6\u5668-gtimer/\u5B9A\u65F6\u5668-\u57FA\u672C\u4F7F\u7528","permalink":"/en/2.4.x/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u5B9A\u65F6\u5668-gtimer/\u5B9A\u65F6\u5668-\u57FA\u672C\u4F7F\u7528","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.4.x/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u5B9A\u65F6\u5668-gtimer/\u5B9A\u65F6\u5668-\u57FA\u672C\u4F7F\u7528.md","tags":[],"version":"2.4.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":0,"frontMatter":{"title":"\u5B9A\u65F6\u5668-\u57FA\u672C\u4F7F\u7528","sidebar_position":0,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u5B9A\u65F6\u5668-gtimer","permalink":"/en/2.4.x/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u5B9A\u65F6\u5668-gtimer/"},"next":{"title":"\u5B9A\u65F6\u5668-\u6027\u80FD\u6D4B\u8BD5","permalink":"/en/2.4.x/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u5B9A\u65F6\u5668-gtimer/\u5B9A\u65F6\u5668-\u6027\u80FD\u6D4B\u8BD5"}}'),o=t("785893"),c=t("250065");let r={title:"\u5B9A\u65F6\u5668-\u57FA\u672C\u4F7F\u7528",sidebar_position:0,hide_title:!0},g=void 0,l={},s=[{value:"\u57FA\u672C\u793A\u4F8B",id:"\u57FA\u672C\u793A\u4F8B",level:2},{value:"\u5355\u4F8B\u4EFB\u52A1",id:"\u5355\u4F8B\u4EFB\u52A1",level:2},{value:"\u5EF6\u8FDF\u4EFB\u52A1",id:"\u5EF6\u8FDF\u4EFB\u52A1",level:2},{value:"<code>SetTimeout</code> \u4E0E <code>SetInterval</code>",id:"settimeout-\u4E0E-setinterval",level:2},{value:"<code>Exit</code> \u9000\u51FA",id:"exit-\u9000\u51FA",level:2}];function d(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"\u57FA\u672C\u793A\u4F8B",children:"\u57FA\u672C\u793A\u4F8B"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "fmt"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/os/gtime"\n    "github.com/gogf/gf/v2/os/gtimer"\n    "time"\n)\n\nfunc main() {\n    var (\n        ctx = gctx.New()\n        now = time.Now()\n    )\n    gtimer.AddTimes(ctx, time.Second, 10, func(ctx context.Context) {\n        fmt.Println(gtime.Now(), time.Duration(time.Now().UnixNano()-now.UnixNano()))\n        now = time.Now()\n    })\n\n    select {}\n}\n\n'})}),"\n",(0,o.jsx)(e.p,{children:"\u6267\u884C\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\u4E3A:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-html",children:"2021-05-27 13:28:19 1.004516s\n2021-05-27 13:28:20 997.262ms\n2021-05-27 13:28:21 999.972ms\n2021-05-27 13:28:22 1.00112s\n2021-05-27 13:28:23 998.773ms\n2021-05-27 13:28:24 999.957ms\n2021-05-27 13:28:25 1.002468s\n2021-05-27 13:28:26 997.468ms\n2021-05-27 13:28:27 999.981ms\n2021-05-27 13:28:28 1.002504s\n"})}),"\n",(0,o.jsx)(e.h2,{id:"\u5355\u4F8B\u4EFB\u52A1",children:"\u5355\u4F8B\u4EFB\u52A1"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/os/glog"\n    "github.com/gogf/gf/v2/os/gtimer"\n    "time"\n)\n\nfunc main() {\n    var (\n        ctx      = gctx.New()\n        interval = time.Second\n    )\n\n    gtimer.AddSingleton(ctx, interval, func(ctx context.Context) {\n        glog.Print(ctx, "doing")\n        time.Sleep(5 * time.Second)\n    })\n\n    select {}\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:"\u6267\u884C\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\u4E3A:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-html",children:"2021-11-14 11:50:42.192 {189cwi9mo40cfp73guzhugo100tnuedg} doing\n2021-11-14 11:50:48.190 {189cwi9mo40cfp73guzhugo100tnuedg} doing\n2021-11-14 11:50:54.192 {189cwi9mo40cfp73guzhugo100tnuedg} doing\n2021-11-14 11:51:00.189 {189cwi9mo40cfp73guzhugo100tnuedg} doing\n...\n"})}),"\n",(0,o.jsx)(e.h2,{id:"\u5EF6\u8FDF\u4EFB\u52A1",children:"\u5EF6\u8FDF\u4EFB\u52A1"}),"\n",(0,o.jsxs)(e.p,{children:["\u5EF6\u8FDF\u4EFB\u52A1\u662F\u6307\u5728\u6307\u5B9A\u65F6\u95F4\u540E\u751F\u6548\u7684\u5B9A\u65F6\u4EFB\u52A1\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 ",(0,o.jsx)(e.code,{children:"DelayAdd*"})," \u76F8\u5173\u65B9\u6CD5\u5B9E\u73B0\u5EF6\u8FDF\u4EFB\u52A1\u7684\u521B\u5EFA\u3002"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "fmt"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/os/gtime"\n    "github.com/gogf/gf/v2/os/gtimer"\n    "time"\n)\n\nfunc main() {\n    var (\n        ctx      = gctx.New()\n        delay    = time.Second\n        interval = time.Second\n    )\n    fmt.Println("Start:", gtime.Now())\n    gtimer.DelayAdd(\n        ctx,\n        delay,\n        interval,\n        func(ctx context.Context) {\n            fmt.Println("Running:", gtime.Now())\n        },\n    )\n    select {}\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:"\u6267\u884C\u540E\uFF0C\u7EC8\u7AEF\u8F93\u51FA\uFF1A"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"Start: 2021-05-27 13:26:02\nRunning: 2021-05-27 13:26:04\nRunning: 2021-05-27 13:26:05\nRunning: 2021-05-27 13:26:06\nRunning: 2021-05-27 13:26:07\nRunning: 2021-05-27 13:26:08\nRunning: 2021-05-27 13:26:09\nRunning: 2021-05-27 13:26:10\nRunning: 2021-05-27 13:26:11\n...\n"})}),"\n",(0,o.jsxs)(e.h2,{id:"settimeout-\u4E0E-setinterval",children:[(0,o.jsx)(e.code,{children:"SetTimeout"})," \u4E0E ",(0,o.jsx)(e.code,{children:"SetInterval"})]}),"\n",(0,o.jsxs)(e.p,{children:["\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u6765\u6E90\u4E8E ",(0,o.jsx)(e.code,{children:"Javascript"})," \u5E38\u7528\u5B9A\u65F6\u65B9\u6CD5\u3002\u5176\u4E2D ",(0,o.jsx)(e.code,{children:"SetTimeout"})," \u7528\u4E8E\u521B\u5EFA\u53EA\u6267\u884C\u4E00\u6B21\u7684\u5B9A\u65F6\u4EFB\u52A1\uFF0C\u4E0D\u8FC7\u53EF\u4EE5\u901A\u8FC7\u9012\u5F52\u8C03\u7528 ",(0,o.jsx)(e.code,{children:"SetTimeout"})," \u6765\u5B9E\u73B0\u65E0\u9650\u95F4\u9694\u6267\u884C\u3002 ",(0,o.jsx)(e.code,{children:"SetIterval"})," \u7528\u4E8E\u521B\u5EFA\u95F4\u9694\u6267\u884C\u4E0D\u9000\u51FA\u7684\u5B9A\u65F6\u4EFB\u52A1\u3002"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "fmt"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/os/gtime"\n    "github.com/gogf/gf/v2/os/gtimer"\n    "time"\n)\n\nfunc main() {\n    var (\n        ctx      = gctx.New()\n        timeout  = time.Second\n        interval = time.Second\n    )\n    gtimer.SetTimeout(ctx, timeout, func(ctx context.Context) {\n        fmt.Println("SetTimeout:", gtime.Now())\n    })\n    gtimer.SetInterval(ctx, interval, func(ctx context.Context) {\n        fmt.Println("SetInterval:", gtime.Now())\n    })\n    select {}\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:"\u6267\u884C\u540E\uFF0C\u7EC8\u7AEF\u8F93\u51FA\uFF1A"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"SetInterval: 2021-05-27 13:20:50\nSetTimeout: 2021-05-27 13:20:50\nSetInterval: 2021-05-27 13:20:51\nSetInterval: 2021-05-27 13:20:52\nSetInterval: 2021-05-27 13:20:53\nSetInterval: 2021-05-27 13:20:54\nSetInterval: 2021-05-27 13:20:55\nSetInterval: 2021-05-27 13:20:56\nSetInterval: 2021-05-27 13:20:57\nSetInterval: 2021-05-27 13:20:58\n...\n"})}),"\n",(0,o.jsxs)(e.h2,{id:"exit-\u9000\u51FA",children:[(0,o.jsx)(e.code,{children:"Exit"})," \u9000\u51FA"]}),"\n",(0,o.jsxs)(e.p,{children:["\u6211\u4EEC\u53EF\u4EE5\u5728\u5B9A\u65F6\u4EFB\u52A1\u4E2D\u901A\u8FC7 ",(0,o.jsx)(e.code,{children:"Exit"})," \u65B9\u6CD5\u5F3A\u5236\u9000\u51FA\u5B9A\u65F6\u4EFB\u52A1\u7684\u7EE7\u7EED\u6267\u884C\uFF0C\u8BE5\u5B9A\u65F6\u4EFB\u52A1\u5C06\u4F1A\u88AB\u4ECE\u5B9A\u65F6\u5668\u4E2D\u79FB\u9664\u3002"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "fmt"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/os/gtime"\n    "github.com/gogf/gf/v2/os/gtimer"\n    "time"\n)\n\nfunc main() {\n    var (\n        ctx = gctx.New()\n    )\n    gtimer.SetInterval(ctx, time.Second, func(ctx context.Context) {\n        fmt.Println("exit:", gtime.Now())\n        gtimer.Exit()\n    })\n    select {}\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:"\u6267\u884C\u540E\uFF0C\u7EC8\u7AEF\u8F93\u51FA\uFF1A"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"exit: 2021-05-27 13:31:24\n"})})]})}function m(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return g},a:function(){return r}});var i=t(667294);let o={},c=i.createContext(o);function r(n){let e=i.useContext(c);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function g(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),i.createElement(c.Provider,{value:e},n.children)}}}]);