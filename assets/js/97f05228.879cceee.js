"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[14242],{19827:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>t});var r=o(74848),d=o(28453);const i={slug:"/web/senior/pprof",title:"PProf\u670d\u52a1\u6027\u80fd\u5206\u6790",sidebar_position:9,hide_title:!0},s=void 0,c={id:"WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/PProf\u670d\u52a1\u6027\u80fd\u5206\u6790",title:"PProf\u670d\u52a1\u6027\u80fd\u5206\u6790",description:"GoFrame \u6846\u67b6\u7684 Web Server \u63d0\u4f9b\u4e86\u975e\u5e38\u5f3a\u5927\u548c\u7b80\u4fbf\u7684\u670d\u52a1\u6027\u80fd\u5206\u6790\u529f\u80fd\uff0c\u5185\u90e8\u5b8c\u7f8e\u96c6\u6210\u4e86 pprof \u6027\u80fd\u5206\u6790\u5de5\u5177\uff0c\u53ef\u4ee5\u5728\u4efb\u4f55\u65f6\u5019\u901a\u8fc7 EnablePProf \u65b9\u6cd5\u542f\u7528\u6027\u80fd\u5206\u6790\u7279\u6027\uff0c\u5e76\u53ef\u81ea\u5b9a\u4e49\u6027\u80fd\u5206\u6790\u5de5\u5177\u9875\u9762\u8def\u7531\u5730\u5740\uff0c\u4e0d\u4f20\u9012\u8def\u7531\u5730\u5740\u65f6\uff0c\u9ed8\u8ba4URI\u5730\u5740\u4e3a /debug/pprof\u3002",source:"@site/docs/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/PProf\u670d\u52a1\u6027\u80fd\u5206\u6790.md",sourceDirName:"WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027",slug:"/web/senior/pprof",permalink:"/docs/web/senior/pprof",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/docs/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/PProf\u670d\u52a1\u6027\u80fd\u5206\u6790.md",tags:[],version:"current",lastUpdatedBy:"John",lastUpdatedAt:1730442507e3,sidebarPosition:9,frontMatter:{slug:"/web/senior/pprof",title:"PProf\u670d\u52a1\u6027\u80fd\u5206\u6790",sidebar_position:9,hide_title:!0},sidebar:"hiddenSidebar",previous:{title:"\u81ea\u5b9a\u4e49\u72b6\u6001\u7801\u5904\u7406",permalink:"/docs/web/senior/status-handler"},next:{title:"SameSite\u8bbe\u7f6e",permalink:"/docs/web/senior/same-site"}},l={},t=[{value:"<code>PProf</code> \u542f\u7528",id:"pprof-\u542f\u7528",level:2},{value:"<code>EnablePProf</code>",id:"enablepprof",level:3},{value:"<code>StartPProfServer</code>",id:"startpprofserver",level:3},{value:"<code>PProf</code> \u6307\u6807",id:"pprof-\u6307\u6807",level:2},{value:"<code>PProf</code> \u9875\u9762",id:"pprof-\u9875\u9762",level:2},{value:"\u6027\u80fd\u91c7\u96c6\u5206\u6790\ud83d\udd25",id:"\u6027\u80fd\u91c7\u96c6\u5206\u6790",level:2},{value:"CPU\u6027\u80fd\u5206\u6790",id:"cpu\u6027\u80fd\u5206\u6790",level:3},{value:"\u5185\u5b58\u4f7f\u7528\u5206\u6790",id:"\u5185\u5b58\u4f7f\u7528\u5206\u6790",level:3},{value:"goroutine\u4f7f\u7528\u5206\u6790",id:"goroutine\u4f7f\u7528\u5206\u6790",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"GoFrame"})," \u6846\u67b6\u7684 ",(0,r.jsx)(n.code,{children:"Web Server"})," \u63d0\u4f9b\u4e86\u975e\u5e38\u5f3a\u5927\u548c\u7b80\u4fbf\u7684\u670d\u52a1\u6027\u80fd\u5206\u6790\u529f\u80fd\uff0c\u5185\u90e8\u5b8c\u7f8e\u96c6\u6210\u4e86 ",(0,r.jsx)(n.code,{children:"pprof"})," \u6027\u80fd\u5206\u6790\u5de5\u5177\uff0c\u53ef\u4ee5\u5728\u4efb\u4f55\u65f6\u5019\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"EnablePProf"})," \u65b9\u6cd5\u542f\u7528\u6027\u80fd\u5206\u6790\u7279\u6027\uff0c\u5e76\u53ef\u81ea\u5b9a\u4e49\u6027\u80fd\u5206\u6790\u5de5\u5177\u9875\u9762\u8def\u7531\u5730\u5740\uff0c\u4e0d\u4f20\u9012\u8def\u7531\u5730\u5740\u65f6\uff0c\u9ed8\u8ba4URI\u5730\u5740\u4e3a ",(0,r.jsx)(n.code,{children:"/debug/pprof"}),"\u3002"]}),"\n",(0,r.jsxs)(n.h2,{id:"pprof-\u542f\u7528",children:[(0,r.jsx)(n.code,{children:"PProf"})," \u542f\u7528"]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"PProf"})," \u7279\u6027\u7684\u542f\u7528\u4f1a\u5bf9\u7a0b\u5e8f\u6027\u80fd\u4ea7\u751f\u4e00\u5b9a\u5f71\u54cd\uff0c\u5177\u4f53\u5f71\u54cd\u7a0b\u5ea6\u9700\u8981\u6839\u636e\u5f53\u524d\u4e1a\u52a1\u573a\u666f\u5728 ",(0,r.jsx)(n.code,{children:"PProd"})," \u542f\u7528\u524d\u540e\u8fdb\u884c\u5bf9\u6bd4\u3002"]})}),"\n",(0,r.jsx)(n.h3,{id:"enablepprof",children:(0,r.jsx)(n.code,{children:"EnablePProf"})}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n    "runtime"\n)\n\nfunc main() {\n    runtime.SetMutexProfileFraction(1) // (\u975e\u5fc5\u9700)\u5f00\u542f\u5bf9\u9501\u8c03\u7528\u7684\u8ddf\u8e2a\n    runtime.SetBlockProfileRate(1)     // (\u975e\u5fc5\u9700)\u5f00\u542f\u5bf9\u963b\u585e\u64cd\u4f5c\u7684\u8ddf\u8e2a\n\n    s := g.Server()\n    s.EnablePProf()\n    s.BindHandler("/", func(r *ghttp.Request) {\n        r.Response.Writeln("\u54c8\u55bd\u4e16\u754c\uff01")\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u4e2a\u4f8b\u5b50\u4f7f\u7528\u4e86 ",(0,r.jsx)(n.code,{children:"s.EnablePProf()"})," \u542f\u7528\u4e86\u6027\u80fd\u5206\u6790\uff0c\u9ed8\u8ba4\u4f1a\u81ea\u52a8\u6ce8\u518c\u4ee5\u4e0b\u51e0\u4e2a\u8def\u7531\u89c4\u5219\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"/debug/pprof/*action\n/debug/pprof/cmdline\n/debug/pprof/profile\n/debug/pprof/symbol\n/debug/pprof/trace\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5176\u4e2d ",(0,r.jsx)(n.code,{children:"/debug/pprof/*action"})," \u4e3a\u9875\u9762\u8bbf\u95ee\u7684\u8def\u7531\uff0c\u5176\u4ed6\u51e0\u4e2a\u5730\u5740\u4e3a ",(0,r.jsx)(n.code,{children:"go tool pprof"})," \u547d\u4ee4\u51c6\u5907\u7684\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"startpprofserver",children:(0,r.jsx)(n.code,{children:"StartPProfServer"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"StartPProfServer"})," \u65b9\u6cd5\uff0c\u5feb\u901f\u5f00\u542f\u4e00\u4e2a\u72ec\u7acb\u7684 ",(0,r.jsx)(n.code,{children:"PProf Server"}),"\uff0c\u5e38\u7528\u4e8e\u4e00\u4e9b\u6ca1\u6709 ",(0,r.jsx)(n.code,{children:"HTTP Server"})," \u7684\u5e38\u9a7b\u7684\u8fdb\u7a0b\u4e2d\uff08\u4f8b\u5982\u5b9a\u65f6\u4efb\u52a1\u3001 ",(0,r.jsx)(n.code,{children:"GRPC"})," \u670d\u52a1\u4e2d\uff09\uff0c\u53ef\u4ee5\u5feb\u901f\u5f00\u542f\u4e00\u4e2a ",(0,r.jsx)(n.code,{children:"PProf Server"})," \u7528\u4e8e\u7a0b\u5e8f\u6027\u80fd\u5206\u6790\u3002\u8be5\u65b9\u6cd5\u7684\u5b9a\u4e49\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func StartPProfServer(port int, pattern ...string)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4e00\u822c\u7684\u573a\u666f\u662f\u4f7f\u7528\u5f02\u6b65 ",(0,r.jsx)(n.code,{children:"goroutine"})," \u8fd0\u884c\u8be5 ",(0,r.jsx)(n.code,{children:"PProd Server"}),"\uff0c\u5373\u5f80\u5f80\u662f\u8fd9\u4e48\u6765\u4f7f\u7528\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    go ghttp.StartPProfServer(8199)\n    // \u5176\u4ed6\u670d\u52a1\u542f\u52a8\u3001\u8fd0\u884c\n    // ...\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0a\u793a\u4f8b\u53ef\u4ee5\u6539\u8fdb\u4e3a\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    go ghttp.StartPProfServer(8299)\n\n    s := g.Server()\n    s.EnablePProf()\n    s.BindHandler("/", func(r *ghttp.Request) {\n        r.Response.Writeln("\u54c8\u55bd\u4e16\u754c\uff01")\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"pprof-\u6307\u6807",children:[(0,r.jsx)(n.code,{children:"PProf"})," \u6307\u6807"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"heap"}),": \u62a5\u544a\u5185\u5b58\u5206\u914d\u6837\u672c\uff1b\u7528\u4e8e\u76d1\u89c6\u5f53\u524d\u548c\u5386\u53f2\u5185\u5b58\u4f7f\u7528\u60c5\u51b5\uff0c\u5e76\u68c0\u67e5\u5185\u5b58\u6cc4\u6f0f\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"threadcreate"}),": \u62a5\u544a\u4e86\u5bfc\u81f4\u521b\u5efa\u65b0OS\u7ebf\u7a0b\u7684\u7a0b\u5e8f\u90e8\u5206\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"goroutine"}),": \u62a5\u544a\u6240\u6709\u5f53\u524d ",(0,r.jsx)(n.code,{children:"goroutine"})," \u7684\u5806\u6808\u8ddf\u8e2a\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"block"}),": \u663e\u793a ",(0,r.jsx)(n.code,{children:"goroutine"})," \u5728\u54ea\u91cc\u963b\u585e\u540c\u6b65\u539f\u8bed\uff08\u5305\u62ec\u8ba1\u65f6\u5668\u901a\u9053\uff09\u7684\u7b49\u5f85\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u672a\u542f\u7528\uff0c\u9700\u8981\u624b\u52a8\u8c03\u7528 ",(0,r.jsx)(n.code,{children:"runtime.SetBlockProfileRate"})," \u542f\u7528\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"mutex"}),": \u62a5\u544a\u9501\u7ade\u4e89\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u672a\u542f\u7528\uff0c\u9700\u8981\u624b\u52a8\u8c03\u7528 ",(0,r.jsx)(n.code,{children:"runtime.SetMutexProfileFraction"})," \u542f\u7528\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"pprof-\u9875\u9762",children:[(0,r.jsx)(n.code,{children:"PProf"})," \u9875\u9762"]}),"\n",(0,r.jsxs)(n.p,{children:["\u7b80\u5355\u7684\u6027\u80fd\u5206\u6790\u6211\u4eec\u76f4\u63a5\u8bbf\u95ee ",(0,r.jsx)(n.code,{children:"/debug/pprof"})," \u5730\u5740\u5373\u53ef\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsxs)(n.p,{children:["1\u3001 ",(0,r.jsx)(n.code,{children:"pprof"})," \u9875\u9762"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:o(19747).A+"",width:"389",height:"252"})}),"\n",(0,r.jsx)(n.p,{children:"2\u3001\u5806\u4f7f\u7528\u91cf"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:o(76579).A+"",width:"1000",height:"521"})}),"\n",(0,r.jsxs)(n.p,{children:["3\u3001\u5f53\u524d\u8fdb\u7a0b\u4e2d\u7684 ",(0,r.jsx)(n.code,{children:"goroutine"})," \u8be6\u60c5"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:o(43615).A+"",width:"1000",height:"473"})}),"\n",(0,r.jsx)(n.h2,{id:"\u6027\u80fd\u91c7\u96c6\u5206\u6790",children:"\u6027\u80fd\u91c7\u96c6\u5206\u6790\ud83d\udd25"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"\u4ee5\u4e0b\u793a\u4f8b\u622a\u56fe\u6765\u6e90\u4e8e\u793a\u4f8b\u9879\u76ee\uff0c\u4ec5\u4f9b\u53c2\u8003\u3002"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u60f3\u8981\u8fdb\u884c\u8be6\u7ec6\u7684\u6027\u80fd\u5206\u6790\uff0c\u57fa\u672c\u4e0a\u79bb\u4e0d\u5f00 ",(0,r.jsx)(n.code,{children:"go tool pprof"})," \u547d\u4ee4\u884c\u5de5\u5177\u7684\u652f\u6301\uff0c\u5728\u5f00\u542f\u6027\u80fd\u5206\u6790\u652f\u6301\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u6267\u884c\u6027\u80fd\u91c7\u96c6\u5206\u6790\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'go tool pprof -http :8080 "http://127.0.0.1:8199/debug/pprof/profile"\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u4e5f\u53ef\u4ee5\u5c06pprof\u6587\u4ef6\u5bfc\u51fa\u540e\u518d\u901a\u8fc7go tool pprof\u547d\u4ee4\u6253\u5f00\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl http://127.0.0.1:8199/debug/pprof/profile > pprof.profile\ngo tool pprof -http :8080 pprof.profile\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6267\u884c\u540e ",(0,r.jsx)(n.code,{children:"profile"})," \u7684 ",(0,r.jsx)(n.code,{children:"pprof"})," \u5de5\u5177\u7ecf\u8fc7\u7ea6 ",(0,r.jsx)(n.code,{children:"30"})," \u79d2\u5de6\u53f3\u7684\u63a5\u53e3\u4fe1\u606f\u91c7\u96c6\uff08\u8fd9 ",(0,r.jsx)(n.code,{children:"30"})," \u79d2\u671f\u95f4 ",(0,r.jsx)(n.code,{children:"WebServer"})," \u5e94\u5f53\u6709\u6d41\u91cf\u8fdb\u5165\uff09\uff0c\u7136\u540e\u751f\u6210\u6027\u80fd\u5206\u6790\u62a5\u544a\uff0c\u968f\u540e\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"top10"}),"/ ",(0,r.jsx)(n.code,{children:"web"})," \u7b49 ",(0,r.jsx)(n.code,{children:"pprof"})," \u547d\u4ee4\u67e5\u770b\u62a5\u544a\u7ed3\u679c\uff0c\u66f4\u591a\u547d\u4ee4\u53ef\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"go tool pprof"})," \u67e5\u770b\u3002\u5173\u4e8e ",(0,r.jsx)(n.code,{children:"pprof"})," \u7684\u8be6\u7ec6\u4f7f\u7528\u4ecb\u7ecd\uff0c\u8bf7\u67e5\u770b ",(0,r.jsx)(n.code,{children:"Golang"})," \u5b98\u65b9\uff1a ",(0,r.jsx)(n.a,{href:"https://blog.golang.org/profiling-go-programs",children:"blog.golang.org/profiling-go-programs"})]}),"\n",(0,r.jsx)(n.h3,{id:"cpu\u6027\u80fd\u5206\u6790",children:"CPU\u6027\u80fd\u5206\u6790"}),"\n",(0,r.jsx)(n.p,{children:"\u672c\u793a\u4f8b\u4e2d\u7684\u547d\u4ee4\u884c\u6027\u80fd\u5206\u6790\u7ed3\u679c\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'$ go tool pprof -http :8080 "http://127.0.0.1:8199/debug/pprof/profile"\nServing web UI on http://localhost:8080\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["\u56fe\u5f62\u5316\u5c55\u793a ",(0,r.jsx)(n.code,{children:"pprof"})," \u9700\u8981\u5b89\u88c5 ",(0,r.jsx)(n.code,{children:"Graphviz"})," \u56fe\u5f62\u5316\u5de5\u5177\uff0c\u4ee5\u6211\u76ee\u524d\u7684\u7cfb\u7edf\u4e3a ",(0,r.jsx)(n.code,{children:"Ubuntu"})," \u4e3a\u4f8b\uff0c\u76f4\u63a5\u6267\u884c ",(0,r.jsx)(n.code,{children:"sudo apt-get install graphviz"})," \u547d\u4ee4\u5373\u53ef\u5b89\u88c5\u5b8c\u6210\u56fe\u5f62\u5316\u5de5\u5177\uff08\u5982\u679c\u662f ",(0,r.jsx)(n.code,{children:"MacOS"}),"\uff0c\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"brew install Graphviz"})," \u5b89\u88c5\uff09\u3002"]})}),"\n",(0,r.jsx)(n.p,{children:"\u8fd0\u884c\u540e\u5c06\u4f1a\u4f7f\u7528\u9ed8\u8ba4\u7684\u6d4f\u89c8\u5668\u6253\u5f00\u4ee5\u4e0b\u56fe\u5f62\u754c\u9762\uff0c\u5c55\u793a\u8fd9\u6bb5\u65f6\u95f4\u6293\u53d6\u7684CPU\u5f00\u9500\u94fe\u8def\uff1a"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:o(17886).A+"",width:"3454",height:"1854"})}),"\n",(0,r.jsx)(n.p,{children:"\u4e5f\u53ef\u4ee5\u67e5\u770b\u706b\u70ac\u56fe\uff0c\u53ef\u80fd\u66f4\u5f62\u8c61\u4e00\u4e9b\uff1a"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:o(14553).A+"",width:"3454",height:"1168"})}),"\n",(0,r.jsx)(n.h3,{id:"\u5185\u5b58\u4f7f\u7528\u5206\u6790",children:"\u5185\u5b58\u4f7f\u7528\u5206\u6790"}),"\n",(0,r.jsxs)(n.p,{children:["\u4e0e ",(0,r.jsx)(n.code,{children:"CPU"})," \u6027\u80fd\u5206\u6790\u7c7b\u4f3c\uff0c\u5185\u5b58\u4f7f\u7528\u5206\u6790\u540c\u6837\u4f7f\u7528\u5230 ",(0,r.jsx)(n.code,{children:"go tool pprof"})," \u547d\u4ee4\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'$ go tool pprof -http :8080 "http://127.0.0.1:8199/debug/pprof/heap"\nServing web UI on http://localhost:8080\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u56fe\u5f62\u5c55\u793a\u7c7b\u4f3c\u8fd9\u6837\u7684\uff1a"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:o(55825).A+"",width:"3454",height:"1820"})}),"\n",(0,r.jsx)(n.p,{children:"\u540c\u6837\u7684\uff0c\u4e5f\u53ef\u4ee5\u67e5\u770b\u706b\u70ac\u56fe\uff0c\u53ef\u80fd\u66f4\u5f62\u8c61\u4e00\u4e9b\uff1a"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:o(50436).A+"",width:"3454",height:"1010"})}),"\n",(0,r.jsx)(n.h3,{id:"goroutine\u4f7f\u7528\u5206\u6790",children:"goroutine\u4f7f\u7528\u5206\u6790"}),"\n",(0,r.jsxs)(n.p,{children:["\u4e0e\u4e0a\u9762\u7684\u5206\u6790\u7c7b\u4f3c\uff0c ",(0,r.jsx)(n.code,{children:"goroutine"})," \u4f7f\u7528\u5206\u6790\u540c\u6837\u4f7f\u7528\u5230 ",(0,r.jsx)(n.code,{children:"go tool pprof"})," \u547d\u4ee4\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'$ go tool pprof -http :8080 "http://127.0.0.1:8199/debug/pprof/goroutine"\nServing web UI on http://localhost:8080\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u56fe\u5f62\u5c55\u793a\u7c7b\u4f3c\u8fd9\u6837\u7684\uff0c\u901a\u5e38 ",(0,r.jsx)(n.code,{children:"goroutine"})," \u770b\u8fd9\u4e2a\u56fe\u7684\u8bdd\u5c31\u5dee\u4e0d\u591a\u4e86\uff0c\u5f53\u7136\u4e5f\u6709\u706b\u70ac\u56fe\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:o(89470).A+"",width:"3454",height:"1818"})})]})}function a(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19747:(e,n,o)=>{o.d(n,{A:()=>r});const r="data:image/png;base64,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"},55825:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/3740981520744e6a3831ba5f2c811e23-106e5055d34c120f2b335ea3aba40314.png"},43615:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/4aad1989545e9fe67cf46de3b06686aa-7022a469373d941eaa2919880d0b2208.png"},17886:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/56387af30ed4e111df652c5918f36313-1e1464e580139e1f73d3f5767a289e7b.png"},14553:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/69a078ee228fa5ae63e91ea8bd45b6db-a2ac2242284aea23d03782ff95610d8d.png"},50436:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/8f5ef1007b9eaddab88adadfff9f6101-e77077195fa46dbde29702f9daf7868f.png"},76579:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/990043747df320652c2ab0944f259f73-761ef5610b70d9606c2b3af927da6fcc.png"},89470:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/adbc81d2a903ede5454eeb85c2ca5743-b93888a4701c77c59047144100f555d8.png"},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>c});var r=o(96540);const d={},i=r.createContext(d);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);