"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[78729],{554646:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>r,contentTitle:()=>g,default:()=>l,frontMatter:()=>c,metadata:()=>t,toc:()=>f});const t=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u6587\u4ef6\u76d1\u63a7-gfsnotify","title":"\u6587\u4ef6\u76d1\u63a7-gfsnotify","description":"\u672c\u9875\u9762\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528GoFrame\u6846\u67b6\u4e2dgfsnotify\u6a21\u5757\u6765\u5b9e\u73b0\u6587\u4ef6\u548c\u76ee\u5f55\u7684\u76d1\u63a7\u3002gfsnotify\u80fd\u591f\u68c0\u6d4b\u6587\u4ef6\u7684\u589e\u52a0\u3001\u5220\u9664\u3001\u4fee\u6539\u3001\u91cd\u547d\u540d\u7b49\u53d8\u52a8\u64cd\u4f5c\uff0c\u5e76\u63d0\u4f9b\u65b9\u4fbf\u7684\u63a5\u53e3\u51fd\u6570\u5982Add\u548cRemove\u8fdb\u884c\u76d1\u542c\u548c\u53d6\u6d88\u76d1\u542c\u64cd\u4f5c\u3002\u9002\u7528\u4e8e*nix\u7cfb\u7edf\u7684inotify\u673a\u5236\uff0c\u5728\u4f7f\u7528\u65f6\u4f1a\u53d7\u5230\u7cfb\u7edf\u5185\u6838\u53c2\u6570\u7684\u9650\u5236\u3002\u901a\u8fc7\u5b9e\u4f8b\u4ee3\u7801\u5c55\u793a\u5982\u4f55\u8bbe\u7f6e\u3001\u79fb\u9664\u76d1\u542c\u53ca\u8fdb\u884c\u6587\u4ef6\u64cd\u4f5c\u76d1\u63a7\u3002","source":"@site/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u6587\u4ef6\u76d1\u63a7-gfsnotify.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173","slug":"/docs/components/os-gfsnotify","permalink":"/en/docs/components/os-gfsnotify","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u6587\u4ef6\u76d1\u63a7-gfsnotify.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731055597000,"sidebarPosition":13,"frontMatter":{"slug":"/docs/components/os-gfsnotify","title":"\u6587\u4ef6\u76d1\u63a7-gfsnotify","sidebar_position":13,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","gfsnotify","\u6587\u4ef6\u76d1\u63a7","Go\u6846\u67b6","\u6587\u4ef6\u64cd\u4f5c","\u76d1\u542c\u6a21\u5757","Go\u5f00\u53d1","\u7cfb\u7edf\u76d1\u63a7","\u76ee\u5f55\u76d1\u63a7"],"description":"\u672c\u9875\u9762\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528GoFrame\u6846\u67b6\u4e2dgfsnotify\u6a21\u5757\u6765\u5b9e\u73b0\u6587\u4ef6\u548c\u76ee\u5f55\u7684\u76d1\u63a7\u3002gfsnotify\u80fd\u591f\u68c0\u6d4b\u6587\u4ef6\u7684\u589e\u52a0\u3001\u5220\u9664\u3001\u4fee\u6539\u3001\u91cd\u547d\u540d\u7b49\u53d8\u52a8\u64cd\u4f5c\uff0c\u5e76\u63d0\u4f9b\u65b9\u4fbf\u7684\u63a5\u53e3\u51fd\u6570\u5982Add\u548cRemove\u8fdb\u884c\u76d1\u542c\u548c\u53d6\u6d88\u76d1\u542c\u64cd\u4f5c\u3002\u9002\u7528\u4e8e*nix\u7cfb\u7edf\u7684inotify\u673a\u5236\uff0c\u5728\u4f7f\u7528\u65f6\u4f1a\u53d7\u5230\u7cfb\u7edf\u5185\u6838\u53c2\u6570\u7684\u9650\u5236\u3002\u901a\u8fc7\u5b9e\u4f8b\u4ee3\u7801\u5c55\u793a\u5982\u4f55\u8bbe\u7f6e\u3001\u79fb\u9664\u76d1\u542c\u53ca\u8fdb\u884c\u6587\u4ef6\u64cd\u4f5c\u76d1\u63a7\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u73af\u5883\u53d8\u91cf-genv","permalink":"/en/docs/components/os-genv"},"next":{"title":"\u8fdb\u7a0b\u7ba1\u7406-gproc","permalink":"/en/docs/components/os-gproc"}}');var s=o(474848),i=o(28453);const c={slug:"/docs/components/os-gfsnotify",title:"\u6587\u4ef6\u76d1\u63a7-gfsnotify",sidebar_position:13,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","gfsnotify","\u6587\u4ef6\u76d1\u63a7","Go\u6846\u67b6","\u6587\u4ef6\u64cd\u4f5c","\u76d1\u542c\u6a21\u5757","Go\u5f00\u53d1","\u7cfb\u7edf\u76d1\u63a7","\u76ee\u5f55\u76d1\u63a7"],description:"\u672c\u9875\u9762\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528GoFrame\u6846\u67b6\u4e2dgfsnotify\u6a21\u5757\u6765\u5b9e\u73b0\u6587\u4ef6\u548c\u76ee\u5f55\u7684\u76d1\u63a7\u3002gfsnotify\u80fd\u591f\u68c0\u6d4b\u6587\u4ef6\u7684\u589e\u52a0\u3001\u5220\u9664\u3001\u4fee\u6539\u3001\u91cd\u547d\u540d\u7b49\u53d8\u52a8\u64cd\u4f5c\uff0c\u5e76\u63d0\u4f9b\u65b9\u4fbf\u7684\u63a5\u53e3\u51fd\u6570\u5982Add\u548cRemove\u8fdb\u884c\u76d1\u542c\u548c\u53d6\u6d88\u76d1\u542c\u64cd\u4f5c\u3002\u9002\u7528\u4e8e*nix\u7cfb\u7edf\u7684inotify\u673a\u5236\uff0c\u5728\u4f7f\u7528\u65f6\u4f1a\u53d7\u5230\u7cfb\u7edf\u5185\u6838\u53c2\u6570\u7684\u9650\u5236\u3002\u901a\u8fc7\u5b9e\u4f8b\u4ee3\u7801\u5c55\u793a\u5982\u4f55\u8bbe\u7f6e\u3001\u79fb\u9664\u76d1\u542c\u53ca\u8fdb\u884c\u6587\u4ef6\u64cd\u4f5c\u76d1\u63a7\u3002"},g=void 0,r={},f=[{value:"\u6dfb\u52a0\u76d1\u542c",id:"\u6dfb\u52a0\u76d1\u542c",level:2},{value:"\u79fb\u9664\u76d1\u542c",id:"\u79fb\u9664\u76d1\u542c",level:2},{value:"fs.inotify.max_user_instances\u4e0efs.inotify.max_user_watches",id:"fsinotifymax_user_instances\u4e0efsinotifymax_user_watches",level:2}];function d(n){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"gfsnotify"})," \u80fd\u76d1\u63a7\u6307\u5b9a\u6587\u4ef6/\u76ee\u5f55\u7684\u6539\u53d8\uff0c\u5982\u6587\u4ef6\u7684\u589e\u52a0\u3001\u5220\u9664\u3001\u4fee\u6539\u3001\u91cd\u547d\u540d\u7b49\u64cd\u4f5c\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/os/gfsnotify"\n'})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/os/gfsnotify",children:"https://pkg.go.dev/github.com/gogf/gf/v2/os/gfsnotify"})}),"\n",(0,s.jsxs)(e.p,{children:["\u63a8\u8350\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"gfsnotify"})," \u6a21\u5757\u63d0\u4f9b\u7684 ",(0,s.jsx)(e.code,{children:"Add"})," \u548c ",(0,s.jsx)(e.code,{children:"Remove"})," \u6a21\u5757\u65b9\u6cd5\uff0c\u7528\u4e8e\u6dfb\u52a0\u76d1\u63a7\u548c\u53d6\u6d88\u76d1\u63a7\u3002\u63a8\u8350\u539f\u56e0\u89c1\u968f\u540e\u7ae0\u8282\u8bf4\u660e\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u6b64\u5916\u4e5f\u53ef\u80fd\u901a\u8fc7 ",(0,s.jsx)(e.code,{children:"New"})," \u65b9\u6cd5\u521b\u5efa\u4e00\u4e2a\u76d1\u63a7\u7ba1\u7406\u5bf9\u8c61\u4e4b\u540e\u518d\u8fdb\u884c\u76d1\u63a7\u7ba1\u7406\u3002\u5176\u4e2d\uff0c\u6dfb\u52a0\u76d1\u63a7\u7684\u65f6\u5019\u9700\u8981\u7ed9\u5b9a\u89e6\u53d1\u76d1\u63a7\u65f6\u7684\u56de\u8c03\u51fd\u6570\uff0c\u53c2\u6570\u7c7b\u578b\u4e3a ",(0,s.jsx)(e.code,{children:"*gfsnotify.Event"})," \u5bf9\u8c61\u6307\u9488\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u6dfb\u52a0\u76d1\u542c",children:"\u6dfb\u52a0\u76d1\u542c"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/os/gfsnotify"\n    "github.com/gogf/gf/v2/os/glog"\n)\n\nfunc main() {\n    // /home/john/temp \u662f\u4e00\u4e2a\u76ee\u5f55\uff0c\u5f53\u7136\u4e5f\u53ef\u4ee5\u6307\u5b9a\u6587\u4ef6\n    path := "/home/john/temp"\n    ctx := gctx.New()\n    _, err := gfsnotify.Add(path, func(event *gfsnotify.Event) {\n        if event.IsCreate() {\n            glog.Debug(ctx, "\u521b\u5efa\u6587\u4ef6 : ", event.Path)\n        }\n        if event.IsWrite() {\n            glog.Debug(ctx, "\u5199\u5165\u6587\u4ef6 : ", event.Path)\n        }\n        if event.IsRemove() {\n            glog.Debug(ctx, "\u5220\u9664\u6587\u4ef6 : ", event.Path)\n        }\n        if event.IsRename() {\n            glog.Debug(ctx, "\u91cd\u547d\u540d\u6587\u4ef6 : ", event.Path)\n        }\n        if event.IsChmod() {\n            glog.Debug(ctx, "\u4fee\u6539\u6743\u9650 : ", event.Path)\n        }\n        glog.Debug(ctx, event)\n    }, true)\n\n      // \u79fb\u9664\u5bf9\u8be5path\u7684\u76d1\u542c\n    // gfsnotify.Remove(path)\n\n    if err != nil {\n        glog.Fatal(ctx, err)\n    } else {\n        select {}\n    }\n}\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u5176\u4e2d ",(0,s.jsx)(e.code,{children:"/home/john"})," \u53c2\u6570\u4e3a\u4e00\u4e2a\u76ee\u5f55\uff0c ",(0,s.jsx)(e.code,{children:"gfsnotify.Add"})," \u65b9\u6cd5\u9ed8\u8ba4\u4e3a ",(0,s.jsx)(e.strong,{children:"\u9012\u5f52\u76d1\u63a7"}),"\uff0c\u4e5f\u5c31\u662f\u8bf4\u5f53\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6(\u5305\u62ec\u5b50\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6)\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u4e5f\u4f1a\u6536\u5230\u6587\u4ef6\u76d1\u63a7\u4fe1\u606f\u56de\u8c03\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u5f53\u6211\u4eec\u5728 ",(0,s.jsx)(e.code,{children:"/home/john"})," \u76ee\u5f55\u4e0b\u521b\u5efa/\u5220\u9664/\u4fee\u6539\u6587\u4ef6\u65f6\uff0c\u53ef\u4ee5\u770b\u5230 ",(0,s.jsx)(e.code,{children:"gfsnotify"})," \u76d1\u63a7\u5230\u4e86\u6587\u4ef6\u7684\u4fee\u6539\u5e76\u8f93\u51fa\u4e86\u5bf9\u5e94\u7684\u4e8b\u4ef6\u4fe1\u606f\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u79fb\u9664\u76d1\u542c",children:"\u79fb\u9664\u76d1\u542c"}),"\n",(0,s.jsxs)(e.p,{children:["\u79fb\u9664\u76d1\u542c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"Remove"})," \u65b9\u6cd5\uff0c\u4f1a\u79fb\u9664\u5bf9\u6574\u4e2a\u6587\u4ef6/\u76ee\u5f55\u7684\u76d1\u542c\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u5f53\u5bf9\u540c\u4e00\u4e2a\u6587\u4ef6/\u76ee\u5f55\u5b58\u5728\u591a\u4e2a\u76d1\u542c\u56de\u8c03\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(e.code,{children:"RemoveCallback"})," \u65b9\u6cd5\u79fb\u9664\u6307\u5b9a\u7684\u56de\u8c03\u3002\u65b9\u6cd5\u53c2\u6570 ",(0,s.jsx)(e.code,{children:"callbackId"})," \u662f\u5728\u6dfb\u52a0\u76d1\u542c\u65f6\u8fd4\u56de\u7684 ",(0,s.jsx)(e.code,{children:"Callback"})," \u5bf9\u8c61\u7684\u552f\u4e00ID\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u4f7f\u7528\u793a\u4f8b1\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/os/gfsnotify"\n    "github.com/gogf/gf/v2/os/glog"\n    "github.com/gogf/gf/v2/os/gtimer"\n    "time"\n)\n\nfunc main() {\n    ctx := gctx.New()\n    c1, err := gfsnotify.Add("/home/john/temp/log", func(event *gfsnotify.Event) {\n        glog.Debug(ctx, "callback1")\n    })\n    if err != nil {\n        panic(err)\n    }\n    c2, err := gfsnotify.Add("/home/john/temp/log", func(event *gfsnotify.Event) {\n        glog.Debug(ctx, "callback2")\n    })\n    if err != nil {\n        panic(err)\n    }\n    // 5\u79d2\u540e\u79fb\u9664c1\u7684\u56de\u8c03\u51fd\u6570\u6ce8\u518c\uff0c\u4ec5\u5269c2\n    gtimer.SetTimeout(5*time.Second, func() {\n        gfsnotify.RemoveCallback(c1.Id)\n        glog.Debug(ctx, "remove callback c1")\n    })\n    // 10\u79d2\u540e\u79fb\u9664c2\u7684\u56de\u8c03\u51fd\u6570\u6ce8\u518c\uff0c\u6240\u6709\u7684\u56de\u8c03\u90fd\u79fb\u9664\uff0c\u4e0d\u518d\u6709\u4efb\u4f55\u6253\u5370\u4fe1\u606f\u8f93\u51fa\n    gtimer.SetTimeout(10*time.Second, func() {\n        gfsnotify.RemoveCallback(c2.Id)\n        glog.Debug(ctx, "remove callback c2")\n    })\n\n    select {}\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u4f7f\u7528\u793a\u4f8b2\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/os/gfsnotify"\n    "github.com/gogf/gf/v2/os/glog"\n    "github.com/gogf/gf/v2/os/gtimer"\n    "time"\n)\n\nfunc main() {\n     ctx := gctx.New()\n    callback, err := gfsnotify.Add("/home/john/temp", func(event *gfsnotify.Event) {\n        glog.Debug(ctx, "callback")\n    })\n    if err != nil {\n        panic(err)\n    }\n\n    // \u5728\u6b64\u671f\u95f4\u521b\u5efa\u6587\u4ef6\u3001\u76ee\u5f55\u3001\u4fee\u6539\u6587\u4ef6\u3001\u5220\u9664\u6587\u4ef6\n\n    // 20\u79d2\u540e\u79fb\u9664\u56de\u8c03\u51fd\u6570\u6ce8\u518c\uff0c\u6240\u6709\u7684\u56de\u8c03\u90fd\u79fb\u9664\uff0c\u4e0d\u518d\u6709\u4efb\u4f55\u6253\u5370\u4fe1\u606f\u8f93\u51fa\n    gtimer.SetTimeout(20*time.Second, func() {\n        gfsnotify.RemoveCallback(callback.Id)\n        glog.Debug(ctx, "remove callback")\n    })\n\n    select {}\n}\n'})}),"\n",(0,s.jsx)(e.h2,{id:"fsinotifymax_user_instances\u4e0efsinotifymax_user_watches",children:"fs.inotify.max_user_instances\u4e0efs.inotify.max_user_watches"}),"\n",(0,s.jsxs)(e.p,{children:["\u5728 ",(0,s.jsx)(e.code,{children:"*nix"})," \u7cfb\u7edf\u4e0b\uff0c ",(0,s.jsx)(e.code,{children:"gfsnotify"})," \u6a21\u5757\u4f7f\u7528\u7684\u662f\u7cfb\u7edf\u7684 ",(0,s.jsx)(e.code,{children:"inotify"})," \u7279\u6027\u6765\u5b9e\u73b0\u7684\u6587\u4ef6/\u76ee\u5f55\u76d1\u63a7\uff0c\u56e0\u6b64\u8be5\u529f\u80fd\u5728\u4f7f\u7528\u65f6\u4f1a\u53d7\u5230\u7cfb\u7edf\u7684\u4e24\u4e2a\u5185\u6838\u51fd\u6570\u9650\u5236\uff1a"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"fs.inotify.max_user_instances"}),"\uff1a\u8868\u793a\u5f53\u524d\u7528\u6237\u53ef\u521b\u5efa\u7684 ",(0,s.jsx)(e.code,{children:"inotify"})," \u76d1\u63a7\u5b9e\u4f8b\u6570\u91cf\uff0c\u5373 ",(0,s.jsx)(e.code,{children:"gfsnotify.New"})," \u65b9\u6cd5\u521b\u5efa\u7684 ",(0,s.jsx)(e.code,{children:"Watcher"})," \u5bf9\u8c61\u6570\u91cf\uff0c\u4e00\u4e2a ",(0,s.jsx)(e.code,{children:"Watcher"})," \u5bf9\u8c61\u5bf9\u5e94\u7cfb\u7edf\u7684\u4e00\u4e2a ",(0,s.jsx)(e.code,{children:"inotify"})," \u5b9e\u4f8b\uff0c\u7cfb\u7edf\u9ed8\u8ba4\u6570\u91cf\u4e3a\uff1a ",(0,s.jsx)(e.code,{children:"128"}),"\uff1b"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"fs.inotify.max_user_watches"}),"\uff1a\u8868\u793a\u4e00\u4e2a ",(0,s.jsx)(e.code,{children:"inotify"})," \u5b9e\u4f8b\u53ef\u6dfb\u52a0\u7684\u76d1\u63a7\u6587\u4ef6\u961f\u5217\u5927\u5c0f\uff0c\u5f80\u540c\u4e00\u4e2a ",(0,s.jsx)(e.code,{children:"inotify"})," \u6dfb\u52a0\u7684\u76d1\u63a7\u6587\u4ef6\u8d85\u8fc7\u8be5\u6570\u91cf\u9650\u5236\u5219\u4f1a\u5931\u8d25\uff0c\u5e76\u4e14\u4f1a\u6709\u7cfb\u7edf\u9519\u8bef\u65e5\u5fd7\uff0c\u7cfb\u7edf\u9ed8\u8ba4\u6570\u91cf\u5f80\u5f80\u4e3a\uff1a ",(0,s.jsx)(e.code,{children:"8192"}),"(\u6709\u7684\u7cfb\u7edf\u8be5\u6570\u503c\u4f1a\u6bd4\u8f83\u5927\u4e00\u4e9b)\uff1b"]}),"\n"]}),"\n"]})]})}function l(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},28453:(n,e,o)=>{o.d(e,{R:()=>c,x:()=>g});var t=o(296540);const s={},i=t.createContext(s);function c(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function g(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);