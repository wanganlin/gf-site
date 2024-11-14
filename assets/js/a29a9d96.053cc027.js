"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["30864"],{589373:function(n,e,i){i.r(e),i.d(e,{metadata:()=>s,contentTitle:()=>r,default:()=>g,assets:()=>d,toc:()=>l,frontMatter:()=>c});var s=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis/Redis-Conn\u5BF9\u8C61","title":"Redis-Conn\u5BF9\u8C61","description":"\u4F7F\u7528 Do \u65B9\u6CD5\u5DF2\u7ECF\u80FD\u591F\u6EE1\u8DB3\u7EDD\u5927\u90E8\u5206\u7684\u573A\u666F\u9700\u8981\uFF0C\u5982\u679C\u9700\u8981\u66F4\u590D\u6742\u7684 Redis \u64CD\u4F5C\uFF08\u4F8B\u5982\u8BA2\u9605\u53D1\u5E03\uFF09\uFF0C\u90A3\u4E48\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 Conn \u65B9\u6CD5\u4ECE\u8FDE\u63A5\u6C60\u4E2D\u83B7\u53D6\u4E00\u4E2A\u8FDE\u63A5\u5BF9\u8C61\uFF0C\u968F\u540E\u4F7F\u7528\u8BE5\u8FDE\u63A5\u5BF9\u8C61\u8FDB\u884C\u64CD\u4F5C\u3002\u4F46\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u8BE5\u8FDE\u63A5\u5BF9\u8C61\u4E0D\u518D\u4F7F\u7528\u65F6\uFF0C\u5E94\u5F53\u663E\u5F0F\u8C03\u7528 Close \u65B9\u6CD5\u8FDB\u884C\u5173\u95ED\uFF08\u4E22\u56DE\u8FDE\u63A5\u6C60\uFF09\u3002","source":"@site/versioned_docs/version-2.0.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis/Redis-Conn\u5BF9\u8C61.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis","slug":"/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis/Redis-Conn\u5BF9\u8C61","permalink":"/2.0.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis/Redis-Conn\u5BF9\u8C61","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.0.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis/Redis-Conn\u5BF9\u8C61.md","tags":[],"version":"2.0.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":2,"frontMatter":{"title":"Redis-Conn\u5BF9\u8C61","sidebar_position":2,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"Redis-\u57FA\u672C\u4F7F\u7528","permalink":"/2.0.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis/Redis-\u57FA\u672C\u4F7F\u7528"},"next":{"title":"Redis-\u7ED3\u679C\u5904\u7406","permalink":"/2.0.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis/Redis-\u7ED3\u679C\u5904\u7406"}}'),o=i("785893"),t=i("250065");let c={title:"Redis-Conn\u5BF9\u8C61",sidebar_position:2,hide_title:!0},r=void 0,d={},l=[{value:"\u57FA\u672C\u4F7F\u7528",id:"\u57FA\u672C\u4F7F\u7528",level:2},{value:"\u8BA2\u9605/\u53D1\u5E03",id:"\u8BA2\u9605\u53D1\u5E03",level:2}];function a(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["\u4F7F\u7528 ",(0,o.jsx)(e.code,{children:"Do"})," \u65B9\u6CD5\u5DF2\u7ECF\u80FD\u591F\u6EE1\u8DB3\u7EDD\u5927\u90E8\u5206\u7684\u573A\u666F\u9700\u8981\uFF0C\u5982\u679C\u9700\u8981\u66F4\u590D\u6742\u7684 ",(0,o.jsx)(e.code,{children:"Redis"})," \u64CD\u4F5C\uFF08\u4F8B\u5982\u8BA2\u9605\u53D1\u5E03\uFF09\uFF0C\u90A3\u4E48\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 ",(0,o.jsx)(e.code,{children:"Conn"})," \u65B9\u6CD5\u4ECE\u8FDE\u63A5\u6C60\u4E2D\u83B7\u53D6\u4E00\u4E2A\u8FDE\u63A5\u5BF9\u8C61\uFF0C\u968F\u540E\u4F7F\u7528\u8BE5\u8FDE\u63A5\u5BF9\u8C61\u8FDB\u884C\u64CD\u4F5C\u3002\u4F46\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u8BE5\u8FDE\u63A5\u5BF9\u8C61\u4E0D\u518D\u4F7F\u7528\u65F6\uFF0C\u5E94\u5F53\u663E\u5F0F\u8C03\u7528 ",(0,o.jsx)(e.code,{children:"Close"})," \u65B9\u6CD5\u8FDB\u884C\u5173\u95ED\uFF08\u4E22\u56DE\u8FDE\u63A5\u6C60\uFF09\u3002"]}),"\n",(0,o.jsxs)(e.p,{children:["\u7531\u4E8E\u8BE5 ",(0,o.jsx)(e.code,{children:"Conn"})," \u662F\u4E2A\u8FDE\u63A5\u5BF9\u8C61\uFF0C\u6CE8\u610F\u8BE5\u5BF9\u8C61\u5B58\u5728\u8FDE\u63A5\u8D85\u65F6\u7684\u9650\u5236\uFF0C\u8D85\u65F6\u548C\u670D\u52A1\u7AEF\u914D\u7F6E\u6709\u5173\u3002"]}),"\n",(0,o.jsx)(e.h2,{id:"\u57FA\u672C\u4F7F\u7528",children:"\u57FA\u672C\u4F7F\u7528"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/util/gconv"\n)\n\nfunc main() {\n    var (\n        ctx = gctx.New()\n    )\n    conn, _ := g.Redis().Conn(ctx)\n    defer conn.Close(ctx)\n    conn.Do(ctx, "SET", "k", "v")\n    v, _ := conn.Do(ctx,"GET", "k")\n    fmt.Println(gconv.String(v))\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:"\u6267\u884C\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-v"})}),"\n",(0,o.jsx)(e.h2,{id:"\u8BA2\u9605\u53D1\u5E03",children:"\u8BA2\u9605/\u53D1\u5E03"}),"\n",(0,o.jsxs)(e.p,{children:["\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 ",(0,o.jsx)(e.code,{children:"Redis"})," \u7684 ",(0,o.jsx)(e.code,{children:"SUBSCRIBE/PUBLISH"})," \u547D\u4EE4\u5B9E\u73B0\u8BA2\u9605/\u53D1\u5E03\u6A21\u5F0F\u3002"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/util/gconv"\n)\n\nfunc main() {\n    var (\n        ctx = gctx.New()\n    )\n    conn, _ := g.Redis().Conn(ctx)\n    defer conn.Close(ctx)\n    _, err := conn.Do(ctx, "SUBSCRIBE", "channel")\n    if err != nil {\n        panic(err)\n    }\n    for {\n        reply, err := conn.Receive(ctx)\n        if err != nil {\n            panic(err)\n        }\n        fmt.Println(gconv.Strings(reply))\n    }\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:"\u6267\u884C\u540E\uFF0C\u7A0B\u5E8F\u5C06\u963B\u585E\u7B49\u5F85\u83B7\u53D6\u6570\u636E\u3002"}),"\n",(0,o.jsxs)(e.p,{children:["\u53E6\u5916\u6253\u5F00\u4E00\u4E2A\u7EC8\u7AEF\u901A\u8FC7 ",(0,o.jsx)(e.code,{children:"redis-cli"})," \u547D\u4EE4\u8FDB\u5165 ",(0,o.jsx)(e.code,{children:"Redis Server"}),"\uFF0C\u53D1\u5E03\u4E00\u6761\u6D88\u606F\uFF1A"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"$ redis-cli\n127.0.0.1:6379> publish channel test\n(integer) 1\n127.0.0.1:6379>\n"})}),"\n",(0,o.jsxs)(e.p,{children:["\u968F\u540E\u7A0B\u5E8F\u7EC8\u7AEF\u7ACB\u5373\u6253\u5370\u51FA\u4ECE ",(0,o.jsx)(e.code,{children:"Redis Server"})," \u83B7\u53D6\u7684\u6570\u636E\uFF1A"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"[message channel test]\n"})})]})}function g(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(a,{...n})}):a(n)}},250065:function(n,e,i){i.d(e,{Z:function(){return r},a:function(){return c}});var s=i(667294);let o={},t=s.createContext(o);function c(n){let e=s.useContext(t);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:c(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);