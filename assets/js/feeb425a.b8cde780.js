"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["14261"],{81632:function(n,e,t){t.r(e),t.d(e,{metadata:()=>i,contentTitle:()=>r,default:()=>d,assets:()=>s,toc:()=>g,frontMatter:()=>c});var i=JSON.parse('{"id":"\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u961F\u5217\u7C7B\u578B-gqueue/\u961F\u5217\u7C7B\u578B-\u57FA\u672C\u4F7F\u7528","title":"\u961F\u5217\u7C7B\u578B-\u57FA\u672C\u4F7F\u7528","description":"\u57FA\u672C\u4F7F\u7528","source":"@site/versioned_docs/version-2.2.x/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u961F\u5217\u7C7B\u578B-gqueue/\u961F\u5217\u7C7B\u578B-\u57FA\u672C\u4F7F\u7528.md","sourceDirName":"\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u961F\u5217\u7C7B\u578B-gqueue","slug":"/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u961F\u5217\u7C7B\u578B-gqueue/\u961F\u5217\u7C7B\u578B-\u57FA\u672C\u4F7F\u7528","permalink":"/2.2.x/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u961F\u5217\u7C7B\u578B-gqueue/\u961F\u5217\u7C7B\u578B-\u57FA\u672C\u4F7F\u7528","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.2.x/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u961F\u5217\u7C7B\u578B-gqueue/\u961F\u5217\u7C7B\u578B-\u57FA\u672C\u4F7F\u7528.md","tags":[],"version":"2.2.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":0,"frontMatter":{"title":"\u961F\u5217\u7C7B\u578B-\u57FA\u672C\u4F7F\u7528","sidebar_position":0,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u961F\u5217\u7C7B\u578B-gqueue","permalink":"/2.2.x/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u961F\u5217\u7C7B\u578B-gqueue/"},"next":{"title":"\u961F\u5217\u7C7B\u578B-\u6027\u80FD\u6D4B\u8BD5","permalink":"/2.2.x/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u961F\u5217\u7C7B\u578B-gqueue/\u961F\u5217\u7C7B\u578B-\u6027\u80FD\u6D4B\u8BD5"}}'),o=t("785893"),u=t("250065");let c={title:"\u961F\u5217\u7C7B\u578B-\u57FA\u672C\u4F7F\u7528",sidebar_position:0,hide_title:!0},r=void 0,s={},g=[{value:"\u57FA\u672C\u4F7F\u7528",id:"\u57FA\u672C\u4F7F\u7528",level:2},{value:"\u4F7F\u7528 <code>Queue.Pop</code>",id:"\u4F7F\u7528-queuepop",level:3},{value:"\u4F7F\u7528 <code>Queue.C</code>",id:"\u4F7F\u7528-queuec",level:3},{value:"\u5143\u7D20\u5165\u961F/\u51FA\u961F",id:"\u5143\u7D20\u5165\u961F\u51FA\u961F",level:2},{value:"\u961F\u5217\u957F\u5EA6",id:"\u961F\u5217\u957F\u5EA6",level:2},{value:"\u961F\u5217\u5173\u95ED",id:"\u961F\u5217\u5173\u95ED",level:2},{value:"<code>gqueue</code> \u4E0E <code>glist</code>",id:"gqueue-\u4E0E-glist",level:2}];function l(n){let e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,u.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"\u57FA\u672C\u4F7F\u7528",children:"\u57FA\u672C\u4F7F\u7528"}),"\n",(0,o.jsxs)(e.h3,{id:"\u4F7F\u7528-queuepop",children:["\u4F7F\u7528 ",(0,o.jsx)(e.code,{children:"Queue.Pop"})]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "time"\n    "github.com/gogf/gf/v2/os/gtimer"\n    "github.com/gogf/gf/v2/container/gqueue"\n)\n\nfunc main() {\n    q := gqueue.New()\n\n    // \u6570\u636E\u751F\u4EA7\u8005\uFF0C\u6BCF\u96941\u79D2\u5F80\u961F\u5217\u5199\u6570\u636E\n    gtimer.SetInterval(time.Second, func() {\n        v := gtime.Now().String()\n        q.Push(v)\n        fmt.Println("Push:", v)\n    })\n\n    // 3\u79D2\u540E\u5173\u95ED\u961F\u5217\n    gtimer.SetTimeout(3*time.Second, func() {\n        q.Close()\n    })\n\n    // \u6D88\u8D39\u8005\uFF0C\u4E0D\u505C\u8BFB\u53D6\u961F\u5217\u6570\u636E\u5E76\u8F93\u51FA\u5230\u7EC8\u7AEF\n    for {\n        if v := q.Pop(); v != nil {\n            fmt.Println(" Pop:", v)\n        } else {\n            break\n        }\n    }\n\n    // \u7B2C3\u79D2\u65F6\u5173\u95ED\u961F\u5217\uFF0C\u8FD9\u65F6\u7A0B\u5E8F\u7ACB\u5373\u9000\u51FA\uFF0C\u56E0\u6B64\u7ED3\u679C\u4E2D\u53EA\u4F1A\u6253\u53702\u79D2\u7684\u6570\u636E\u3002 \u6267\u884C\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A\n    // Output:\n    // Push: 2021-09-07 14:03:00\n    //  Pop: 2021-09-07 14:03:00\n    // Push: 2021-09-07 14:03:01\n    //  Pop: 2021-09-07 14:03:01\n}\n'})}),"\n",(0,o.jsxs)(e.h3,{id:"\u4F7F\u7528-queuec",children:["\u4F7F\u7528 ",(0,o.jsx)(e.code,{children:"Queue.C"})]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "fmt"\n    "time"\n\n    _ "github.com/gogf/gf/contrib/drivers/mysql/v2"\n    "github.com/gogf/gf/v2/container/gqueue"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/os/gtime"\n    "github.com/gogf/gf/v2/os/gtimer"\n)\n\nfunc main() {\n    queue := gqueue.New()\n    gtimer.AddTimes(gctx.GetInitCtx(), time.Second, 3, func(ctx context.Context) {\n        queue.Push(gtime.Now().String())\n    })\n    for {\n        select {\n        case queueItem := <-queue.C:\n            fmt.Println(queueItem)\n\n        case <-time.After(3 * time.Second):\n            fmt.Println("timeout, exit loop")\n            return\n        }\n    }\n}\n'})}),"\n",(0,o.jsx)(e.h2,{id:"\u5143\u7D20\u5165\u961F\u51FA\u961F",children:"\u5143\u7D20\u5165\u961F/\u51FA\u961F"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "time"\n    "github.com/gogf/gf/v2/os/gtimer"\n    "github.com/gogf/gf/v2/container/gqueue"\n)\n\nfunc main() {\n    q := gqueue.New()\n\n    for i := 0; i < 10; i++ {\n        q.Push(i)\n    }\n\n    fmt.Println(q.Pop())\n    fmt.Println(q.Pop())\n    fmt.Println(q.Pop())\n\n    // Output:\n    // 0\n    // 1\n    // 2\n}\n'})}),"\n",(0,o.jsx)(e.h2,{id:"\u961F\u5217\u957F\u5EA6",children:"\u961F\u5217\u957F\u5EA6"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "time"\n    "github.com/gogf/gf/v2/os/gtimer"\n    "github.com/gogf/gf/v2/container/gqueue"\n)\n\nfunc main() {\n    q := gqueue.New()\n\n    q.Push(1)\n    q.Push(2)\n\n    fmt.Println(q.Len())\n    // size\u662Flen\u65B9\u6CD5\u7684\u522B\u79F0\n    fmt.Println(q.Size())\n\n    // May Output:\n    // 2\n    // 2\n}\n'})}),"\n",(0,o.jsx)(e.h2,{id:"\u961F\u5217\u5173\u95ED",children:"\u961F\u5217\u5173\u95ED"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "time"\n    "github.com/gogf/gf/v2/os/gtimer"\n    "github.com/gogf/gf/v2/container/gqueue"\n)\n\nfunc main() {\n    q := gqueue.New()\n\n    for i := 0; i < 10; i++ {\n        q.Push(i)\n    }\n\n    fmt.Println(q.Pop())\n    q.Close()\n    fmt.Println(q.Pop())\n    fmt.Println(q.Len())\n\n    // Output:\n    // 0\n    // <nil>\n    // 0\n}\n'})}),"\n",(0,o.jsxs)(e.h2,{id:"gqueue-\u4E0E-glist",children:[(0,o.jsx)(e.code,{children:"gqueue"})," \u4E0E ",(0,o.jsx)(e.code,{children:"glist"})]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"gqueue"})," \u7684\u5E95\u5C42\u57FA\u4E8E ",(0,o.jsx)(e.code,{children:"glist"})," \u94FE\u8868\u5B9E\u73B0\u52A8\u6001\u5927\u5C0F\u7279\u6027\uFF0C\u5728\u961F\u5217\u6EE1\u6216\u8005\u5728\u961F\u5217\u7A7A\u65F6\u8BFB\u53D6\u6570\u636E\u4F1A\u4EA7\u751F\u963B\u585E\u3002"]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"glist"})," \u662F\u4E00\u4E2A\u5E76\u53D1\u5B89\u5168\u7684\u94FE\u8868\uFF0C\u5E76\u53EF\u4EE5\u5141\u8BB8\u5728\u5173\u95ED\u5E76\u53D1\u5B89\u5168\u7279\u6027\u7684\u65F6\u548C\u4E00\u4E2A\u666E\u901A\u7684 ",(0,o.jsx)(e.code,{children:"list"})," \u94FE\u8868\u65E0\u5F02\uFF0C\u5728\u5B58\u50A8\u548C\u8BFB\u53D6\u6570\u636E\u65F6\u4E0D\u4F1A\u53D1\u751F\u963B\u585E\u3002"]})]})}function d(n={}){let{wrapper:e}={...(0,u.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return r},a:function(){return c}});var i=t(667294);let o={},u=i.createContext(o);function c(n){let e=i.useContext(u);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:c(n.components),i.createElement(u.Provider,{value:e},n.children)}}}]);