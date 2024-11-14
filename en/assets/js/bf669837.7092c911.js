"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["63455"],{848982:function(e,n,r){r.r(n),r.d(n,{metadata:()=>o,contentTitle:()=>c,default:()=>a,assets:()=>t,toc:()=>l,frontMatter:()=>s});var o=JSON.parse('{"id":"docs/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/PProf\u670D\u52A1\u6027\u80FD\u5206\u6790","title":"PProf\u670D\u52A1\u6027\u80FD\u5206\u6790","description":"\u5728\u4F7F\u7528GoFrame\u6846\u67B6\u642D\u5EFA\u7684Web Server\u4E2D\u5229\u7528pprof\u5DE5\u5177\u8FDB\u884C\u6027\u80FD\u5206\u6790\u3002GoFrame\u6846\u67B6\u96C6\u6210\u4E86pprof\uFF0C\u53EF\u4EE5\u501F\u52A9EnablePProf\u65B9\u6CD5\u4FBF\u6377\u5F00\u542F\u6027\u80FD\u5206\u6790\u529F\u80FD\uFF0C\u5E76\u63A2\u8BA8\u4E86\u5982\u4F55\u8BBE\u7F6E\u72EC\u7ACB\u7684PProf Server\uFF0C\u4EE5\u6709\u6548\u76D1\u63A7\u5185\u5B58\u4F7F\u7528\u3001goroutine\u884C\u4E3A\u53CACPU\u6027\u80FD\u7B49\u5173\u952E\u6307\u6807\uFF0C\u540C\u65F6\u63D0\u4F9B\u5177\u4F53\u547D\u4EE4\u884C\u793A\u4F8B\u4E0E\u89E3\u6790\u3002","source":"@site/docs/docs/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/PProf\u670D\u52A1\u6027\u80FD\u5206\u6790.md","sourceDirName":"docs/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027","slug":"/docs/web/senior-pprof","permalink":"/en/docs/web/senior-pprof","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/PProf\u670D\u52A1\u6027\u80FD\u5206\u6790.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":9,"frontMatter":{"slug":"/docs/web/senior-pprof","title":"PProf\u670D\u52A1\u6027\u80FD\u5206\u6790","sidebar_position":9,"hide_title":true,"keywords":["GoFrame","PProf","\u6027\u80FD\u5206\u6790","Web Server","pprof\u5DE5\u5177","EnablePProf","PProf Server","GoFrame\u6846\u67B6","\u6027\u80FD\u4F18\u5316","Go\u5DE5\u5177"],"description":"\u5728\u4F7F\u7528GoFrame\u6846\u67B6\u642D\u5EFA\u7684Web Server\u4E2D\u5229\u7528pprof\u5DE5\u5177\u8FDB\u884C\u6027\u80FD\u5206\u6790\u3002GoFrame\u6846\u67B6\u96C6\u6210\u4E86pprof\uFF0C\u53EF\u4EE5\u501F\u52A9EnablePProf\u65B9\u6CD5\u4FBF\u6377\u5F00\u542F\u6027\u80FD\u5206\u6790\u529F\u80FD\uFF0C\u5E76\u63A2\u8BA8\u4E86\u5982\u4F55\u8BBE\u7F6E\u72EC\u7ACB\u7684PProf Server\uFF0C\u4EE5\u6709\u6548\u76D1\u63A7\u5185\u5B58\u4F7F\u7528\u3001goroutine\u884C\u4E3A\u53CACPU\u6027\u80FD\u7B49\u5173\u952E\u6307\u6807\uFF0C\u540C\u65F6\u63D0\u4F9B\u5177\u4F53\u547D\u4EE4\u884C\u793A\u4F8B\u4E0E\u89E3\u6790\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u81EA\u5B9A\u4E49\u72B6\u6001\u7801\u5904\u7406","permalink":"/en/docs/web/senior-status-handler"},"next":{"title":"SameSite\u8BBE\u7F6E","permalink":"/en/docs/web/senior-same-site"}}'),i=r("785893"),d=r("250065");let s={slug:"/docs/web/senior-pprof",title:"PProf\u670D\u52A1\u6027\u80FD\u5206\u6790",sidebar_position:9,hide_title:!0,keywords:["GoFrame","PProf","\u6027\u80FD\u5206\u6790","Web Server","pprof\u5DE5\u5177","EnablePProf","PProf Server","GoFrame\u6846\u67B6","\u6027\u80FD\u4F18\u5316","Go\u5DE5\u5177"],description:"\u5728\u4F7F\u7528GoFrame\u6846\u67B6\u642D\u5EFA\u7684Web Server\u4E2D\u5229\u7528pprof\u5DE5\u5177\u8FDB\u884C\u6027\u80FD\u5206\u6790\u3002GoFrame\u6846\u67B6\u96C6\u6210\u4E86pprof\uFF0C\u53EF\u4EE5\u501F\u52A9EnablePProf\u65B9\u6CD5\u4FBF\u6377\u5F00\u542F\u6027\u80FD\u5206\u6790\u529F\u80FD\uFF0C\u5E76\u63A2\u8BA8\u4E86\u5982\u4F55\u8BBE\u7F6E\u72EC\u7ACB\u7684PProf Server\uFF0C\u4EE5\u6709\u6548\u76D1\u63A7\u5185\u5B58\u4F7F\u7528\u3001goroutine\u884C\u4E3A\u53CACPU\u6027\u80FD\u7B49\u5173\u952E\u6307\u6807\uFF0C\u540C\u65F6\u63D0\u4F9B\u5177\u4F53\u547D\u4EE4\u884C\u793A\u4F8B\u4E0E\u89E3\u6790\u3002"},c=void 0,t={},l=[{value:"<code>PProf</code> \u542F\u7528",id:"pprof-\u542F\u7528",level:2},{value:"<code>EnablePProf</code>",id:"enablepprof",level:3},{value:"<code>StartPProfServer</code>",id:"startpprofserver",level:3},{value:"<code>PProf</code> \u6307\u6807",id:"pprof-\u6307\u6807",level:2},{value:"<code>PProf</code> \u9875\u9762",id:"pprof-\u9875\u9762",level:2},{value:"\u6027\u80FD\u91C7\u96C6\u5206\u6790\uD83D\uDD25",id:"\u6027\u80FD\u91C7\u96C6\u5206\u6790",level:2},{value:"CPU\u6027\u80FD\u5206\u6790",id:"cpu\u6027\u80FD\u5206\u6790",level:3},{value:"\u5185\u5B58\u4F7F\u7528\u5206\u6790",id:"\u5185\u5B58\u4F7F\u7528\u5206\u6790",level:3},{value:"goroutine\u4F7F\u7528\u5206\u6790",id:"goroutine\u4F7F\u7528\u5206\u6790",level:3}];function h(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"GoFrame"})," \u6846\u67B6\u7684 ",(0,i.jsx)(n.code,{children:"Web Server"})," \u63D0\u4F9B\u4E86\u975E\u5E38\u5F3A\u5927\u548C\u7B80\u4FBF\u7684\u670D\u52A1\u6027\u80FD\u5206\u6790\u529F\u80FD\uFF0C\u5185\u90E8\u5B8C\u7F8E\u96C6\u6210\u4E86 ",(0,i.jsx)(n.code,{children:"pprof"})," \u6027\u80FD\u5206\u6790\u5DE5\u5177\uFF0C\u53EF\u4EE5\u5728\u4EFB\u4F55\u65F6\u5019\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"EnablePProf"})," \u65B9\u6CD5\u542F\u7528\u6027\u80FD\u5206\u6790\u7279\u6027\uFF0C\u5E76\u53EF\u81EA\u5B9A\u4E49\u6027\u80FD\u5206\u6790\u5DE5\u5177\u9875\u9762\u8DEF\u7531\u5730\u5740\uFF0C\u4E0D\u4F20\u9012\u8DEF\u7531\u5730\u5740\u65F6\uFF0C\u9ED8\u8BA4URI\u5730\u5740\u4E3A ",(0,i.jsx)(n.code,{children:"/debug/pprof"}),"\u3002"]}),"\n",(0,i.jsxs)(n.h2,{id:"pprof-\u542F\u7528",children:[(0,i.jsx)(n.code,{children:"PProf"})," \u542F\u7528"]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"PProf"})," \u7279\u6027\u7684\u542F\u7528\u4F1A\u5BF9\u7A0B\u5E8F\u6027\u80FD\u4EA7\u751F\u4E00\u5B9A\u5F71\u54CD\uFF0C\u5177\u4F53\u5F71\u54CD\u7A0B\u5EA6\u9700\u8981\u6839\u636E\u5F53\u524D\u4E1A\u52A1\u573A\u666F\u5728 ",(0,i.jsx)(n.code,{children:"PProd"})," \u542F\u7528\u524D\u540E\u8FDB\u884C\u5BF9\u6BD4\u3002"]})}),"\n",(0,i.jsx)(n.h3,{id:"enablepprof",children:(0,i.jsx)(n.code,{children:"EnablePProf"})}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u4EEC\u6765\u770B\u4E00\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n    "runtime"\n)\n\nfunc main() {\n    runtime.SetMutexProfileFraction(1) // (\u975E\u5FC5\u9700)\u5F00\u542F\u5BF9\u9501\u8C03\u7528\u7684\u8DDF\u8E2A\n    runtime.SetBlockProfileRate(1)     // (\u975E\u5FC5\u9700)\u5F00\u542F\u5BF9\u963B\u585E\u64CD\u4F5C\u7684\u8DDF\u8E2A\n\n    s := g.Server()\n    s.EnablePProf()\n    s.BindHandler("/", func(r *ghttp.Request) {\n        r.Response.Writeln("\u54C8\u55BD\u4E16\u754C\uFF01")\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u8FD9\u4E2A\u4F8B\u5B50\u4F7F\u7528\u4E86 ",(0,i.jsx)(n.code,{children:"s.EnablePProf()"})," \u542F\u7528\u4E86\u6027\u80FD\u5206\u6790\uFF0C\u9ED8\u8BA4\u4F1A\u81EA\u52A8\u6CE8\u518C\u4EE5\u4E0B\u51E0\u4E2A\u8DEF\u7531\u89C4\u5219\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"/debug/pprof/*action\n/debug/pprof/cmdline\n/debug/pprof/profile\n/debug/pprof/symbol\n/debug/pprof/trace\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5176\u4E2D ",(0,i.jsx)(n.code,{children:"/debug/pprof/*action"})," \u4E3A\u9875\u9762\u8BBF\u95EE\u7684\u8DEF\u7531\uFF0C\u5176\u4ED6\u51E0\u4E2A\u5730\u5740\u4E3A ",(0,i.jsx)(n.code,{children:"go tool pprof"})," \u547D\u4EE4\u51C6\u5907\u7684\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"startpprofserver",children:(0,i.jsx)(n.code,{children:"StartPProfServer"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4E5F\u53EF\u4EE5\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"StartPProfServer"})," \u65B9\u6CD5\uFF0C\u5FEB\u901F\u5F00\u542F\u4E00\u4E2A\u72EC\u7ACB\u7684 ",(0,i.jsx)(n.code,{children:"PProf Server"}),"\uFF0C\u5E38\u7528\u4E8E\u4E00\u4E9B\u6CA1\u6709 ",(0,i.jsx)(n.code,{children:"HTTP Server"})," \u7684\u5E38\u9A7B\u7684\u8FDB\u7A0B\u4E2D\uFF08\u4F8B\u5982\u5B9A\u65F6\u4EFB\u52A1\u3001 ",(0,i.jsx)(n.code,{children:"GRPC"})," \u670D\u52A1\u4E2D\uFF09\uFF0C\u53EF\u4EE5\u5FEB\u901F\u5F00\u542F\u4E00\u4E2A ",(0,i.jsx)(n.code,{children:"PProf Server"})," \u7528\u4E8E\u7A0B\u5E8F\u6027\u80FD\u5206\u6790\u3002\u8BE5\u65B9\u6CD5\u7684\u5B9A\u4E49\u5982\u4E0B\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"func StartPProfServer(port int, pattern ...string)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4E00\u822C\u7684\u573A\u666F\u662F\u4F7F\u7528\u5F02\u6B65 ",(0,i.jsx)(n.code,{children:"goroutine"})," \u8FD0\u884C\u8BE5 ",(0,i.jsx)(n.code,{children:"PProd Server"}),"\uFF0C\u5373\u5F80\u5F80\u662F\u8FD9\u4E48\u6765\u4F7F\u7528\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    go ghttp.StartPProfServer(8199)\n    // \u5176\u4ED6\u670D\u52A1\u542F\u52A8\u3001\u8FD0\u884C\n    // ...\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u4EE5\u4E0A\u793A\u4F8B\u53EF\u4EE5\u6539\u8FDB\u4E3A\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    go ghttp.StartPProfServer(8299)\n\n    s := g.Server()\n    s.EnablePProf()\n    s.BindHandler("/", func(r *ghttp.Request) {\n        r.Response.Writeln("\u54C8\u55BD\u4E16\u754C\uFF01")\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,i.jsxs)(n.h2,{id:"pprof-\u6307\u6807",children:[(0,i.jsx)(n.code,{children:"PProf"})," \u6307\u6807"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"heap"}),": \u62A5\u544A\u5185\u5B58\u5206\u914D\u6837\u672C\uFF1B\u7528\u4E8E\u76D1\u89C6\u5F53\u524D\u548C\u5386\u53F2\u5185\u5B58\u4F7F\u7528\u60C5\u51B5\uFF0C\u5E76\u68C0\u67E5\u5185\u5B58\u6CC4\u6F0F\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"threadcreate"}),": \u62A5\u544A\u4E86\u5BFC\u81F4\u521B\u5EFA\u65B0OS\u7EBF\u7A0B\u7684\u7A0B\u5E8F\u90E8\u5206\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"goroutine"}),": \u62A5\u544A\u6240\u6709\u5F53\u524D ",(0,i.jsx)(n.code,{children:"goroutine"})," \u7684\u5806\u6808\u8DDF\u8E2A\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"block"}),": \u663E\u793A ",(0,i.jsx)(n.code,{children:"goroutine"})," \u5728\u54EA\u91CC\u963B\u585E\u540C\u6B65\u539F\u8BED\uFF08\u5305\u62EC\u8BA1\u65F6\u5668\u901A\u9053\uFF09\u7684\u7B49\u5F85\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u672A\u542F\u7528\uFF0C\u9700\u8981\u624B\u52A8\u8C03\u7528 ",(0,i.jsx)(n.code,{children:"runtime.SetBlockProfileRate"})," \u542F\u7528\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"mutex"}),": \u62A5\u544A\u9501\u7ADE\u4E89\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u672A\u542F\u7528\uFF0C\u9700\u8981\u624B\u52A8\u8C03\u7528 ",(0,i.jsx)(n.code,{children:"runtime.SetMutexProfileFraction"})," \u542F\u7528\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"pprof-\u9875\u9762",children:[(0,i.jsx)(n.code,{children:"PProf"})," \u9875\u9762"]}),"\n",(0,i.jsxs)(n.p,{children:["\u7B80\u5355\u7684\u6027\u80FD\u5206\u6790\u6211\u4EEC\u76F4\u63A5\u8BBF\u95EE ",(0,i.jsx)(n.code,{children:"/debug/pprof"})," \u5730\u5740\u5373\u53EF\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A"]}),"\n",(0,i.jsxs)(n.p,{children:["1\u3001 ",(0,i.jsx)(n.code,{children:"pprof"})," \u9875\u9762"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(990921).Z+"",width:"389",height:"252"})}),"\n",(0,i.jsx)(n.p,{children:"2\u3001\u5806\u4F7F\u7528\u91CF"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(924258).Z+"",width:"1000",height:"521"})}),"\n",(0,i.jsxs)(n.p,{children:["3\u3001\u5F53\u524D\u8FDB\u7A0B\u4E2D\u7684 ",(0,i.jsx)(n.code,{children:"goroutine"})," \u8BE6\u60C5"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(986794).Z+"",width:"1000",height:"473"})}),"\n",(0,i.jsx)(n.h2,{id:"\u6027\u80FD\u91C7\u96C6\u5206\u6790",children:"\u6027\u80FD\u91C7\u96C6\u5206\u6790\uD83D\uDD25"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"\u4EE5\u4E0B\u793A\u4F8B\u622A\u56FE\u6765\u6E90\u4E8E\u793A\u4F8B\u9879\u76EE\uFF0C\u4EC5\u4F9B\u53C2\u8003\u3002"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679C\u60F3\u8981\u8FDB\u884C\u8BE6\u7EC6\u7684\u6027\u80FD\u5206\u6790\uFF0C\u57FA\u672C\u4E0A\u79BB\u4E0D\u5F00 ",(0,i.jsx)(n.code,{children:"go tool pprof"})," \u547D\u4EE4\u884C\u5DE5\u5177\u7684\u652F\u6301\uFF0C\u5728\u5F00\u542F\u6027\u80FD\u5206\u6790\u652F\u6301\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u6267\u884C\u6027\u80FD\u91C7\u96C6\u5206\u6790\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'go tool pprof -http :8080 "http://127.0.0.1:8199/debug/pprof/profile"\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u4E5F\u53EF\u4EE5\u5C06pprof\u6587\u4EF6\u5BFC\u51FA\u540E\u518D\u901A\u8FC7go tool pprof\u547D\u4EE4\u6253\u5F00\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl http://127.0.0.1:8199/debug/pprof/profile > pprof.profile\ngo tool pprof -http :8080 pprof.profile\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6267\u884C\u540E ",(0,i.jsx)(n.code,{children:"profile"})," \u7684 ",(0,i.jsx)(n.code,{children:"pprof"})," \u5DE5\u5177\u7ECF\u8FC7\u7EA6 ",(0,i.jsx)(n.code,{children:"30"})," \u79D2\u5DE6\u53F3\u7684\u63A5\u53E3\u4FE1\u606F\u91C7\u96C6\uFF08\u8FD9 ",(0,i.jsx)(n.code,{children:"30"})," \u79D2\u671F\u95F4 ",(0,i.jsx)(n.code,{children:"WebServer"})," \u5E94\u5F53\u6709\u6D41\u91CF\u8FDB\u5165\uFF09\uFF0C\u7136\u540E\u751F\u6210\u6027\u80FD\u5206\u6790\u62A5\u544A\uFF0C\u968F\u540E\u53EF\u4EE5\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"top10"}),"/ ",(0,i.jsx)(n.code,{children:"web"})," \u7B49 ",(0,i.jsx)(n.code,{children:"pprof"})," \u547D\u4EE4\u67E5\u770B\u62A5\u544A\u7ED3\u679C\uFF0C\u66F4\u591A\u547D\u4EE4\u53EF\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"go tool pprof"})," \u67E5\u770B\u3002\u5173\u4E8E ",(0,i.jsx)(n.code,{children:"pprof"})," \u7684\u8BE6\u7EC6\u4F7F\u7528\u4ECB\u7ECD\uFF0C\u8BF7\u67E5\u770B ",(0,i.jsx)(n.code,{children:"Golang"})," \u5B98\u65B9\uFF1A ",(0,i.jsx)(n.a,{href:"https://blog.golang.org/profiling-go-programs",children:"blog.golang.org/profiling-go-programs"})]}),"\n",(0,i.jsx)(n.h3,{id:"cpu\u6027\u80FD\u5206\u6790",children:"CPU\u6027\u80FD\u5206\u6790"}),"\n",(0,i.jsx)(n.p,{children:"\u672C\u793A\u4F8B\u4E2D\u7684\u547D\u4EE4\u884C\u6027\u80FD\u5206\u6790\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'$ go tool pprof -http :8080 "http://127.0.0.1:8199/debug/pprof/profile"\nServing web UI on http://localhost:8080\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["\u56FE\u5F62\u5316\u5C55\u793A ",(0,i.jsx)(n.code,{children:"pprof"})," \u9700\u8981\u5B89\u88C5 ",(0,i.jsx)(n.code,{children:"Graphviz"})," \u56FE\u5F62\u5316\u5DE5\u5177\uFF0C\u4EE5\u6211\u76EE\u524D\u7684\u7CFB\u7EDF\u4E3A ",(0,i.jsx)(n.code,{children:"Ubuntu"})," \u4E3A\u4F8B\uFF0C\u76F4\u63A5\u6267\u884C ",(0,i.jsx)(n.code,{children:"sudo apt-get install graphviz"})," \u547D\u4EE4\u5373\u53EF\u5B89\u88C5\u5B8C\u6210\u56FE\u5F62\u5316\u5DE5\u5177\uFF08\u5982\u679C\u662F ",(0,i.jsx)(n.code,{children:"MacOS"}),"\uFF0C\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"brew install Graphviz"})," \u5B89\u88C5\uFF09\u3002"]})}),"\n",(0,i.jsx)(n.p,{children:"\u8FD0\u884C\u540E\u5C06\u4F1A\u4F7F\u7528\u9ED8\u8BA4\u7684\u6D4F\u89C8\u5668\u6253\u5F00\u4EE5\u4E0B\u56FE\u5F62\u754C\u9762\uFF0C\u5C55\u793A\u8FD9\u6BB5\u65F6\u95F4\u6293\u53D6\u7684CPU\u5F00\u9500\u94FE\u8DEF\uFF1A"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(641409).Z+"",width:"3454",height:"1854"})}),"\n",(0,i.jsx)(n.p,{children:"\u4E5F\u53EF\u4EE5\u67E5\u770B\u706B\u70AC\u56FE\uFF0C\u53EF\u80FD\u66F4\u5F62\u8C61\u4E00\u4E9B\uFF1A"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(101395).Z+"",width:"3454",height:"1168"})}),"\n",(0,i.jsx)(n.h3,{id:"\u5185\u5B58\u4F7F\u7528\u5206\u6790",children:"\u5185\u5B58\u4F7F\u7528\u5206\u6790"}),"\n",(0,i.jsxs)(n.p,{children:["\u4E0E ",(0,i.jsx)(n.code,{children:"CPU"})," \u6027\u80FD\u5206\u6790\u7C7B\u4F3C\uFF0C\u5185\u5B58\u4F7F\u7528\u5206\u6790\u540C\u6837\u4F7F\u7528\u5230 ",(0,i.jsx)(n.code,{children:"go tool pprof"})," \u547D\u4EE4\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'$ go tool pprof -http :8080 "http://127.0.0.1:8199/debug/pprof/heap"\nServing web UI on http://localhost:8080\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u56FE\u5F62\u5C55\u793A\u7C7B\u4F3C\u8FD9\u6837\u7684\uFF1A"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(572846).Z+"",width:"3454",height:"1820"})}),"\n",(0,i.jsx)(n.p,{children:"\u540C\u6837\u7684\uFF0C\u4E5F\u53EF\u4EE5\u67E5\u770B\u706B\u70AC\u56FE\uFF0C\u53EF\u80FD\u66F4\u5F62\u8C61\u4E00\u4E9B\uFF1A"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(23988).Z+"",width:"3454",height:"1010"})}),"\n",(0,i.jsx)(n.h3,{id:"goroutine\u4F7F\u7528\u5206\u6790",children:"goroutine\u4F7F\u7528\u5206\u6790"}),"\n",(0,i.jsxs)(n.p,{children:["\u4E0E\u4E0A\u9762\u7684\u5206\u6790\u7C7B\u4F3C\uFF0C ",(0,i.jsx)(n.code,{children:"goroutine"})," \u4F7F\u7528\u5206\u6790\u540C\u6837\u4F7F\u7528\u5230 ",(0,i.jsx)(n.code,{children:"go tool pprof"})," \u547D\u4EE4\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'$ go tool pprof -http :8080 "http://127.0.0.1:8199/debug/pprof/goroutine"\nServing web UI on http://localhost:8080\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u56FE\u5F62\u5C55\u793A\u7C7B\u4F3C\u8FD9\u6837\u7684\uFF0C\u901A\u5E38 ",(0,i.jsx)(n.code,{children:"goroutine"})," \u770B\u8FD9\u4E2A\u56FE\u7684\u8BDD\u5C31\u5DEE\u4E0D\u591A\u4E86\uFF0C\u5F53\u7136\u4E5F\u6709\u706B\u70AC\u56FE\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(577783).Z+"",width:"3454",height:"1818"})})]})}function a(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},990921:function(e,n,r){r.d(n,{Z:function(){return o}});let o="data:image/png;base64,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"},572846:function(e,n,r){r.d(n,{Z:function(){return o}});let o=r.p+"assets/images/3740981520744e6a3831ba5f2c811e23-106e5055d34c120f2b335ea3aba40314.png"},986794:function(e,n,r){r.d(n,{Z:function(){return o}});let o=r.p+"assets/images/4aad1989545e9fe67cf46de3b06686aa-7022a469373d941eaa2919880d0b2208.png"},641409:function(e,n,r){r.d(n,{Z:function(){return o}});let o=r.p+"assets/images/56387af30ed4e111df652c5918f36313-1e1464e580139e1f73d3f5767a289e7b.png"},101395:function(e,n,r){r.d(n,{Z:function(){return o}});let o=r.p+"assets/images/69a078ee228fa5ae63e91ea8bd45b6db-a2ac2242284aea23d03782ff95610d8d.png"},23988:function(e,n,r){r.d(n,{Z:function(){return o}});let o=r.p+"assets/images/8f5ef1007b9eaddab88adadfff9f6101-e77077195fa46dbde29702f9daf7868f.png"},924258:function(e,n,r){r.d(n,{Z:function(){return o}});let o=r.p+"assets/images/990043747df320652c2ab0944f259f73-761ef5610b70d9606c2b3af927da6fcc.png"},577783:function(e,n,r){r.d(n,{Z:function(){return o}});let o=r.p+"assets/images/adbc81d2a903ede5454eeb85c2ca5743-b93888a4701c77c59047144100f555d8.png"},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return s}});var o=r(667294);let i={},d=o.createContext(i);function s(e){let n=o.useContext(d);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(d.Provider,{value:n},e.children)}}}]);