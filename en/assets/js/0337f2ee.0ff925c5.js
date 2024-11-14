"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["31715"],{842539:function(e,n,c){c.r(n),c.d(n,{metadata:()=>i,contentTitle:()=>r,default:()=>g,assets:()=>l,toc:()=>d,frontMatter:()=>o});var i=JSON.parse('{"id":"\u6A21\u5757\u5217\u8868/\u6570\u636E\u7ED3\u6784/gqueue -\u961F\u5217","title":"gqueue (\u961F\u5217)","description":"\u52A8\u6001\u5927\u5C0F\u7684\u5E76\u53D1\u5B89\u5168\u961F\u5217\u3002\u540C\u65F6\uFF0C gqueue \u4E5F\u652F\u6301\u56FA\u5B9A\u961F\u5217\u5927\u5C0F\uFF0C\u56FA\u5B9A\u961F\u5217\u5927\u5C0F\u65F6\u961F\u5217\u6548\u7387\u548C\u6807\u51C6\u5E93\u7684 channel \u65E0\u5F02\u3002","source":"@site/versioned_docs/version-1.16.x/\u6A21\u5757\u5217\u8868/\u6570\u636E\u7ED3\u6784/gqueue -\u961F\u5217.md","sourceDirName":"\u6A21\u5757\u5217\u8868/\u6570\u636E\u7ED3\u6784","slug":"/\u6A21\u5757\u5217\u8868/\u6570\u636E\u7ED3\u6784/gqueue -\u961F\u5217","permalink":"/en/1.16.x/\u6A21\u5757\u5217\u8868/\u6570\u636E\u7ED3\u6784/gqueue -\u961F\u5217","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.16.x/\u6A21\u5757\u5217\u8868/\u6570\u636E\u7ED3\u6784/gqueue -\u961F\u5217.md","tags":[],"version":"1.16.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":6,"frontMatter":{"title":"gqueue (\u961F\u5217)","sidebar_position":6,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"gtype (\u5E76\u53D1\u5B89\u5168\u7C7B\u578B)","permalink":"/en/1.16.x/\u6A21\u5757\u5217\u8868/\u6570\u636E\u7ED3\u6784/gtype -\u5E76\u53D1\u5B89\u5168\u7C7B\u578B"},"next":{"title":"gtree (\u6811\u5F62)","permalink":"/en/1.16.x/\u6A21\u5757\u5217\u8868/\u6570\u636E\u7ED3\u6784/gtree -\u6811\u5F62"}}'),t=c("785893"),s=c("250065");let o={title:"gqueue (\u961F\u5217)",sidebar_position:6,hide_title:!0},r=void 0,l={},d=[{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:2},{value:"\u793A\u4F8B1\uFF0C\u57FA\u672C\u4F7F\u7528",id:"\u793A\u4F8B1\u57FA\u672C\u4F7F\u7528",level:3},{value:"\u793A\u4F8B2\uFF0C\u7ED3\u5408 <code>select</code> \u8BED\u6CD5\u4F7F\u7528",id:"\u793A\u4F8B2\u7ED3\u5408-select-\u8BED\u6CD5\u4F7F\u7528",level:3},{value:"<code>gqueue</code> \u4E0E <code>glist</code>",id:"gqueue-\u4E0E-glist",level:2},{value:"<code>gqueue</code> \u4E0E <code>channel</code>",id:"gqueue-\u4E0E-channel",level:2}];function u(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["\u52A8\u6001\u5927\u5C0F\u7684\u5E76\u53D1\u5B89\u5168\u961F\u5217\u3002\u540C\u65F6\uFF0C ",(0,t.jsx)(n.code,{children:"gqueue"})," \u4E5F\u652F\u6301\u56FA\u5B9A\u961F\u5217\u5927\u5C0F\uFF0C\u56FA\u5B9A\u961F\u5217\u5927\u5C0F\u65F6\u961F\u5217\u6548\u7387\u548C\u6807\u51C6\u5E93\u7684 ",(0,t.jsx)(n.code,{children:"channel"})," \u65E0\u5F02\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u4F7F\u7528\u573A\u666F"}),"\uFF1A"]}),"\n",(0,t.jsxs)(n.p,{children:["\u8BE5\u961F\u5217\u662F\u5E76\u53D1\u5B89\u5168\u7684\uFF0C\u5E38\u7528\u4E8E\u591A ",(0,t.jsx)(n.code,{children:"goroutine"})," \u6570\u636E\u901A\u4FE1\u4E14\u652F\u6301\u52A8\u6001\u961F\u5217\u5927\u5C0F\u7684\u573A\u666F\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u4F7F\u7528\u65B9\u5F0F"}),"\uFF1A"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'import "github.com/gogf/gf/container/gqueue"\n\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u63A5\u53E3\u6587\u6863"}),"\uFF1A"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://godoc.org/github.com/gogf/gf/container/gqueue",children:"https://godoc.org/github.com/gogf/gf/container/gqueue"})}),"\n",(0,t.jsx)(n.h2,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,t.jsx)(n.h3,{id:"\u793A\u4F8B1\u57FA\u672C\u4F7F\u7528",children:"\u793A\u4F8B1\uFF0C\u57FA\u672C\u4F7F\u7528"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "time"\n    "github.com/gogf/gf/os/gtimer"\n    "github.com/gogf/gf/container/gqueue"\n)\n\nfunc main() {\n    q := gqueue.New()\n    // \u6570\u636E\u751F\u4EA7\u8005\uFF0C\u6BCF\u96941\u79D2\u5F80\u961F\u5217\u5199\u6570\u636E\n    gtimer.SetInterval(time.Second, func() {\n        v := gtime.Now().String()\n        q.Push(v)\n        fmt.Println("Push:", v)\n    })\n\n    // 3\u79D2\u540E\u5173\u95ED\u961F\u5217\n    gtimer.SetTimeout(3*time.Second, func() {\n        q.Close()\n    })\n\n    // \u6D88\u8D39\u8005\uFF0C\u4E0D\u505C\u8BFB\u53D6\u961F\u5217\u6570\u636E\u5E76\u8F93\u51FA\u5230\u7EC8\u7AEF\n    for {\n        if v := q.Pop(); v != nil {\n            fmt.Println(" Pop:", v)\n        } else {\n            break\n        }\n    }\n}\n\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u8BE5\u793A\u4F8B\u4E2D\uFF0C\u7B2C3\u79D2\u65F6\u5173\u95ED\u961F\u5217\uFF0C\u8FD9\u65F6\u7A0B\u5E8F\u7ACB\u5373\u9000\u51FA\uFF0C\u56E0\u6B64\u7ED3\u679C\u4E2D\u53EA\u4F1A\u6253\u53702\u79D2\u7684\u6570\u636E\u3002 \u6267\u884C\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"Push: 2018-09-07 14:03:00\n Pop: 2018-09-07 14:03:00\nPush: 2018-09-07 14:03:01\n Pop: 2018-09-07 14:03:01\n\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"\u793A\u4F8B2\u7ED3\u5408-select-\u8BED\u6CD5\u4F7F\u7528",children:["\u793A\u4F8B2\uFF0C\u7ED3\u5408 ",(0,t.jsx)(n.code,{children:"select"})," \u8BED\u6CD5\u4F7F\u7528"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4F7F\u7528\u961F\u5217\u5BF9\u8C61\u516C\u5F00\u7684 ",(0,t.jsx)(n.code,{children:"Queue.C"})," \u5C5E\u6027\uFF0C\u7ED3\u5408 ",(0,t.jsx)(n.code,{children:"select"})," IO\u590D\u7528\u8BED\u6CD5\u5B9E\u73B0\u5BF9\u961F\u5217\u7684\u8BFB\u53D6\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/container/gqueue"\n    "github.com/gogf/gf/os/gtime"\n    "github.com/gogf/gf/os/gtimer"\n    "time"\n)\n\nfunc main() {\n    queue := gqueue.New()\n    // \u6570\u636E\u751F\u4EA7\u8005\uFF0C\u6BCF\u96941\u79D2\u5F80\u961F\u5217\u5199\u6570\u636E\n    gtimer.SetInterval(time.Second, func() {\n        queue.Push(gtime.Now().String())\n    })\n\n    // \u6D88\u8D39\u8005\uFF0C\u4E0D\u505C\u8BFB\u53D6\u961F\u5217\u6570\u636E\u5E76\u8F93\u51FA\u5230\u7EC8\u7AEF\n    for {\n        select {\n            case v := <-queue.C:\n                if v != nil {\n                    fmt.Println(v)\n                } else {\n                    return\n                }\n        }\n    }\n}\n\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u6267\u884C\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"2019-01-23 20:42:01\n2019-01-23 20:42:02\n2019-01-23 20:42:03\n2019-01-23 20:42:04\n2019-01-23 20:42:05\n2019-01-23 20:42:06\n...\n\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"gqueue-\u4E0E-glist",children:[(0,t.jsx)(n.code,{children:"gqueue"})," \u4E0E ",(0,t.jsx)(n.code,{children:"glist"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"gqueue"})," \u7684\u5E95\u5C42\u57FA\u4E8E ",(0,t.jsx)(n.code,{children:"glist"})," \u94FE\u8868\u5B9E\u73B0\u52A8\u6001\u5927\u5C0F\u7279\u6027\uFF0C\u5728\u961F\u5217\u6EE1\u6216\u8005\u5728\u961F\u5217\u7A7A\u65F6\u8BFB\u53D6\u6570\u636E\u4F1A\u4EA7\u751F\u963B\u585E\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"glist"})," \u662F\u4E00\u4E2A\u5E76\u53D1\u5B89\u5168\u7684\u94FE\u8868\uFF0C\u5E76\u53EF\u4EE5\u5141\u8BB8\u5728\u5173\u95ED\u5E76\u53D1\u5B89\u5168\u7279\u6027\u7684\u65F6\u548C\u4E00\u4E2A\u666E\u901A\u7684 ",(0,t.jsx)(n.code,{children:"list"})," \u94FE\u8868\u65E0\u5F02\uFF0C\u5728\u5B58\u50A8\u548C\u8BFB\u53D6\u6570\u636E\u65F6\u4E0D\u4F1A\u53D1\u751F\u963B\u585E\u3002"]}),"\n",(0,t.jsxs)(n.h2,{id:"gqueue-\u4E0E-channel",children:[(0,t.jsx)(n.code,{children:"gqueue"})," \u4E0E ",(0,t.jsx)(n.code,{children:"channel"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"gqueue"})," \u4E0E\u6807\u51C6\u5E93 ",(0,t.jsx)(n.code,{children:"channel"})," \u7684\u6027\u80FD\u57FA\u51C6\u6D4B\u8BD5\uFF0C\u5176\u4E2D\u6BCF\u4E00\u6B21\u57FA\u51C6\u6D4B\u8BD5\u7684 ",(0,t.jsx)(n.code,{children:"b.N"})," \u503C\u5747\u4E3A ",(0,t.jsx)(n.code,{children:"20000000"}),"\uFF0C\u4EE5\u4FDD\u8BC1\u52A8\u6001\u961F\u5217\u5B58\u53D6\u4E00\u81F4\u9632\u6B62 ",(0,t.jsx)(n.code,{children:"deadlock"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"goos: linux\ngoarch: amd64\npkg: github.com/gogf/gf/container/gqueue\nBenchmark_Gqueue_StaticPushAndPop-4       20000000            84.2 ns/op\nBenchmark_Gqueue_DynamicPush-4            20000000             164 ns/op\nBenchmark_Gqueue_DynamicPop-4             20000000             121 ns/op\nBenchmark_Channel_PushAndPop-4            20000000            70.0 ns/op\nPASS\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u53EF\u4EE5\u770B\u5230\u6807\u51C6\u5E93\u7684 ",(0,t.jsx)(n.code,{children:"channel"})," \u7684\u8BFB\u5199\u6027\u80FD\u662F\u975E\u5E38\u9AD8\u7684\uFF0C\u4F46\u662F\u521B\u5EFA\u7684\u65F6\u5019\u7531\u4E8E\u9700\u8981\u521D\u59CB\u5316\u5185\u5B58\uFF0C\u56E0\u6B64\u521B\u5EFA ",(0,t.jsx)(n.code,{children:"channel"})," \u7684\u65F6\u5019\u6548\u7387\u975E\u5E38\u975E\u5E38\u4F4E\uFF08\u521D\u59CB\u5316\u5373\u5206\u914D\u5185\u5B58\uFF09\uFF0C\u5E76\u4E14\u53D7\u5230\u961F\u5217\u5927\u5C0F\u7684\u9650\u5236\uFF0C\u5199\u5165\u7684\u6570\u636E\u4E0D\u80FD\u8D85\u8FC7\u6307\u5B9A\u7684\u961F\u5217\u5927\u5C0F\u3002 ",(0,t.jsx)(n.code,{children:"gqueue"})," \u4F7F\u7528\u8D77\u6765\u6BD4 ",(0,t.jsx)(n.code,{children:"channel"})," \u66F4\u52A0\u7075\u6D3B\uFF0C\u4E0D\u4EC5\u521B\u5EFA\u6548\u7387\u9AD8\uFF08\u52A8\u6001\u5206\u914D\u5185\u5B58\uFF09\uFF0C\u4E0D\u53D7\u961F\u5217\u5927\u5C0F\u9650\u5236(\u4E5F\u53EF\u9650\u5B9A\u5927\u5C0F)\u3002"]})]})}function g(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},250065:function(e,n,c){c.d(n,{Z:function(){return r},a:function(){return o}});var i=c(667294);let t={},s=i.createContext(t);function o(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);