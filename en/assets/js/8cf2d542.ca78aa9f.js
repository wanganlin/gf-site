"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[89627],{78269:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>g});const i=JSON.parse('{"id":"\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u961f\u5217\u7c7b\u578b-gqueue/\u961f\u5217\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528","title":"\u961f\u5217\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528","description":"\u57fa\u672c\u4f7f\u7528","source":"@site/versioned_docs/version-2.6.x/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u961f\u5217\u7c7b\u578b-gqueue/\u961f\u5217\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528.md","sourceDirName":"\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u961f\u5217\u7c7b\u578b-gqueue","slug":"/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u961f\u5217\u7c7b\u578b-gqueue/\u961f\u5217\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528","permalink":"/en/2.6.x/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u961f\u5217\u7c7b\u578b-gqueue/\u961f\u5217\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.6.x/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u961f\u5217\u7c7b\u578b-gqueue/\u961f\u5217\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528.md","tags":[],"version":"2.6.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":0,"frontMatter":{"title":"\u961f\u5217\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528","sidebar_position":0,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u961f\u5217\u7c7b\u578b-gqueue","permalink":"/en/2.6.x/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u961f\u5217\u7c7b\u578b-gqueue/"},"next":{"title":"\u961f\u5217\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5","permalink":"/en/2.6.x/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u961f\u5217\u7c7b\u578b-gqueue/\u961f\u5217\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5"}}');var o=t(74848),u=t(28453);const c={title:"\u961f\u5217\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528",sidebar_position:0,hide_title:!0},s=void 0,r={},g=[{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:2},{value:"\u4f7f\u7528 <code>Queue.Pop</code>",id:"\u4f7f\u7528-queuepop",level:3},{value:"\u4f7f\u7528 <code>Queue.C</code>",id:"\u4f7f\u7528-queuec",level:3},{value:"\u5143\u7d20\u5165\u961f/\u51fa\u961f",id:"\u5143\u7d20\u5165\u961f\u51fa\u961f",level:2},{value:"\u961f\u5217\u957f\u5ea6",id:"\u961f\u5217\u957f\u5ea6",level:2},{value:"\u961f\u5217\u5173\u95ed",id:"\u961f\u5217\u5173\u95ed",level:2},{value:"<code>gqueue</code> \u4e0e <code>glist</code>",id:"gqueue-\u4e0e-glist",level:2}];function l(n){const e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,u.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"\u57fa\u672c\u4f7f\u7528",children:"\u57fa\u672c\u4f7f\u7528"}),"\n",(0,o.jsxs)(e.h3,{id:"\u4f7f\u7528-queuepop",children:["\u4f7f\u7528 ",(0,o.jsx)(e.code,{children:"Queue.Pop"})]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "time"\n    "github.com/gogf/gf/v2/os/gtimer"\n    "github.com/gogf/gf/v2/container/gqueue"\n)\n\nfunc main() {\n    q := gqueue.New()\n\n    // \u6570\u636e\u751f\u4ea7\u8005\uff0c\u6bcf\u96941\u79d2\u5f80\u961f\u5217\u5199\u6570\u636e\n    gtimer.SetInterval(time.Second, func() {\n        v := gtime.Now().String()\n        q.Push(v)\n        fmt.Println("Push:", v)\n    })\n\n    // 3\u79d2\u540e\u5173\u95ed\u961f\u5217\n    gtimer.SetTimeout(3*time.Second, func() {\n        q.Close()\n    })\n\n    // \u6d88\u8d39\u8005\uff0c\u4e0d\u505c\u8bfb\u53d6\u961f\u5217\u6570\u636e\u5e76\u8f93\u51fa\u5230\u7ec8\u7aef\n    for {\n        if v := q.Pop(); v != nil {\n            fmt.Println(" Pop:", v)\n        } else {\n            break\n        }\n    }\n\n    // \u7b2c3\u79d2\u65f6\u5173\u95ed\u961f\u5217\uff0c\u8fd9\u65f6\u7a0b\u5e8f\u7acb\u5373\u9000\u51fa\uff0c\u56e0\u6b64\u7ed3\u679c\u4e2d\u53ea\u4f1a\u6253\u53702\u79d2\u7684\u6570\u636e\u3002 \u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a\n    // Output:\n    // Push: 2021-09-07 14:03:00\n    //  Pop: 2021-09-07 14:03:00\n    // Push: 2021-09-07 14:03:01\n    //  Pop: 2021-09-07 14:03:01\n}\n'})}),"\n",(0,o.jsxs)(e.h3,{id:"\u4f7f\u7528-queuec",children:["\u4f7f\u7528 ",(0,o.jsx)(e.code,{children:"Queue.C"})]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "fmt"\n    "time"\n\n    _ "github.com/gogf/gf/contrib/drivers/mysql/v2"\n    "github.com/gogf/gf/v2/container/gqueue"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/os/gtime"\n    "github.com/gogf/gf/v2/os/gtimer"\n)\n\nfunc main() {\n    queue := gqueue.New()\n    gtimer.AddTimes(gctx.GetInitCtx(), time.Second, 3, func(ctx context.Context) {\n        queue.Push(gtime.Now().String())\n    })\n    for {\n        select {\n        case queueItem := <-queue.C:\n            fmt.Println(queueItem)\n\n        case <-time.After(3 * time.Second):\n            fmt.Println("timeout, exit loop")\n            return\n        }\n    }\n}\n'})}),"\n",(0,o.jsx)(e.h2,{id:"\u5143\u7d20\u5165\u961f\u51fa\u961f",children:"\u5143\u7d20\u5165\u961f/\u51fa\u961f"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "time"\n    "github.com/gogf/gf/v2/os/gtimer"\n    "github.com/gogf/gf/v2/container/gqueue"\n)\n\nfunc main() {\n    q := gqueue.New()\n\n    for i := 0; i < 10; i++ {\n        q.Push(i)\n    }\n\n    fmt.Println(q.Pop())\n    fmt.Println(q.Pop())\n    fmt.Println(q.Pop())\n\n    // Output:\n    // 0\n    // 1\n    // 2\n}\n'})}),"\n",(0,o.jsx)(e.h2,{id:"\u961f\u5217\u957f\u5ea6",children:"\u961f\u5217\u957f\u5ea6"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "time"\n    "github.com/gogf/gf/v2/os/gtimer"\n    "github.com/gogf/gf/v2/container/gqueue"\n)\n\nfunc main() {\n    q := gqueue.New()\n\n    q.Push(1)\n    q.Push(2)\n\n    fmt.Println(q.Len())\n    // size\u662flen\u65b9\u6cd5\u7684\u522b\u79f0\n    fmt.Println(q.Size())\n\n    // May Output:\n    // 2\n    // 2\n}\n'})}),"\n",(0,o.jsx)(e.h2,{id:"\u961f\u5217\u5173\u95ed",children:"\u961f\u5217\u5173\u95ed"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "time"\n    "github.com/gogf/gf/v2/os/gtimer"\n    "github.com/gogf/gf/v2/container/gqueue"\n)\n\nfunc main() {\n    q := gqueue.New()\n\n    for i := 0; i < 10; i++ {\n        q.Push(i)\n    }\n\n    fmt.Println(q.Pop())\n    q.Close()\n    fmt.Println(q.Pop())\n    fmt.Println(q.Len())\n\n    // Output:\n    // 0\n    // <nil>\n    // 0\n}\n'})}),"\n",(0,o.jsxs)(e.h2,{id:"gqueue-\u4e0e-glist",children:[(0,o.jsx)(e.code,{children:"gqueue"})," \u4e0e ",(0,o.jsx)(e.code,{children:"glist"})]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"gqueue"})," \u7684\u5e95\u5c42\u57fa\u4e8e ",(0,o.jsx)(e.code,{children:"glist"})," \u94fe\u8868\u5b9e\u73b0\u52a8\u6001\u5927\u5c0f\u7279\u6027\uff0c\u5728\u961f\u5217\u6ee1\u6216\u8005\u5728\u961f\u5217\u7a7a\u65f6\u8bfb\u53d6\u6570\u636e\u4f1a\u4ea7\u751f\u963b\u585e\u3002"]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"glist"})," \u662f\u4e00\u4e2a\u5e76\u53d1\u5b89\u5168\u7684\u94fe\u8868\uff0c\u5e76\u53ef\u4ee5\u5141\u8bb8\u5728\u5173\u95ed\u5e76\u53d1\u5b89\u5168\u7279\u6027\u7684\u65f6\u548c\u4e00\u4e2a\u666e\u901a\u7684 ",(0,o.jsx)(e.code,{children:"list"})," \u94fe\u8868\u65e0\u5f02\uff0c\u5728\u5b58\u50a8\u548c\u8bfb\u53d6\u6570\u636e\u65f6\u4e0d\u4f1a\u53d1\u751f\u963b\u585e\u3002"]})]})}function d(n={}){const{wrapper:e}={...(0,u.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>s});var i=t(96540);const o={},u=i.createContext(o);function c(n){const e=i.useContext(u);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:c(n.components),i.createElement(u.Provider,{value:e},n.children)}}}]);