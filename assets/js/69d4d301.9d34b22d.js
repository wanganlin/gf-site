"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["92494"],{548933:function(e,n,r){r.r(n),r.d(n,{metadata:()=>i,contentTitle:()=>c,default:()=>g,assets:()=>d,toc:()=>a,frontMatter:()=>o});var i=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis/Redis-\u547D\u4EE4\u4EA4\u4E92","title":"Redis-\u547D\u4EE4\u4EA4\u4E92","description":"Do \u65B9\u6CD5","source":"@site/versioned_docs/version-2.3.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis/Redis-\u547D\u4EE4\u4EA4\u4E92.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis","slug":"/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis/Redis-\u547D\u4EE4\u4EA4\u4E92","permalink":"/2.3.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis/Redis-\u547D\u4EE4\u4EA4\u4E92","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.3.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis/Redis-\u547D\u4EE4\u4EA4\u4E92.md","tags":[],"version":"2.3.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":2,"frontMatter":{"title":"Redis-\u547D\u4EE4\u4EA4\u4E92","sidebar_position":2,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"Redis-\u4F7F\u7528\u793A\u4F8B","permalink":"/2.3.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis/Redis-\u4F7F\u7528\u793A\u4F8B"},"next":{"title":"Redis-Conn\u5BF9\u8C61","permalink":"/2.3.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis/Redis-Conn\u5BF9\u8C61"}}'),t=r("785893"),s=r("250065");let o={title:"Redis-\u547D\u4EE4\u4EA4\u4E92",sidebar_position:2,hide_title:!0},c=void 0,d={},a=[{value:"<code>Do</code> \u65B9\u6CD5",id:"do-\u65B9\u6CD5",level:2},{value:"\u81EA\u52A8\u5E8F\u5217\u5316/\u53CD\u5E8F\u5217\u5316",id:"\u81EA\u52A8\u5E8F\u5217\u5316\u53CD\u5E8F\u5217\u5316",level:2},{value:"<code>map</code> \u5B58\u53D6",id:"map-\u5B58\u53D6",level:3},{value:"<code>struct</code> \u5B58\u53D6",id:"struct-\u5B58\u53D6",level:3}];function l(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h2,{id:"do-\u65B9\u6CD5",children:[(0,t.jsx)(n.code,{children:"Do"})," \u65B9\u6CD5"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Do"})," \u662F\u901A\u7528\u7684\u547D\u4EE4\u4EA4\u4E92\u65B9\u6CD5\uFF0C\u6267\u884C\u540C\u6B65\u6307\u4EE4\uFF0C\u901A\u8FC7\u5411 ",(0,t.jsx)(n.code,{children:"Redis Server"})," \u53D1\u9001\u5BF9\u5E94\u7684 ",(0,t.jsx)(n.code,{children:"Redis API"})," \u547D\u4EE4\uFF0C\u6765\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"Redis Server"})," \u7684\u670D\u52A1\u3002 ",(0,t.jsx)(n.code,{children:"Do"})," \u65B9\u6CD5\u6700\u5927\u7684\u7279\u70B9\u662F\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"Redis"})," \u547D\u4EE4\u4E0E\u670D\u52A1\u7AEF\u4EA4\u4E92\uFF0C\u56E0\u6B64\u6269\u5C55\u5F88\u5F3A\uFF0C\u6CA1\u6709\u63D0\u4F9B ",(0,t.jsx)(n.code,{children:"Redis"})," \u64CD\u4F5C\u65B9\u6CD5\u7684\u5176\u4ED6\u547D\u4EE4\u90FD\u53EF\u4EE5\u901A\u8FC7 ",(0,t.jsx)(n.code,{children:"Do"})," \u65B9\u6CD5\u6765\u5B9E\u73B0\u3002\u4F7F\u7528\u793A\u4F8B\uFF1A"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var (\n        ctx = gctx.New()\n    )\n    v, _ := g.Redis().Do(ctx, "SET", "k", "v")\n    fmt.Println(v.String())\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u81EA\u52A8\u5E8F\u5217\u5316\u53CD\u5E8F\u5217\u5316",children:"\u81EA\u52A8\u5E8F\u5217\u5316/\u53CD\u5E8F\u5217\u5316"}),"\n",(0,t.jsxs)(n.p,{children:["\u5F53\u7ED9\u5B9A\u7684\u53C2\u6570\u4E3A ",(0,t.jsx)(n.code,{children:"map"}),", ",(0,t.jsx)(n.code,{children:"slice"}),", ",(0,t.jsx)(n.code,{children:"struct"})," \u65F6\uFF0C ",(0,t.jsx)(n.code,{children:"gredis"})," \u5185\u90E8\u652F\u6301\u81EA\u52A8\u5BF9\u5176\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"json"})," \u5E8F\u5217\u5316\uFF0C\u5E76\u4E14\u8BFB\u53D6\u6570\u636E\u65F6\u53EF\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"gvar.Var"})," \u7684\u8F6C\u6362\u529F\u80FD\u5B9E\u73B0\u53CD\u5E8F\u5217\u5316\u3002"]}),"\n",(0,t.jsxs)(n.h3,{id:"map-\u5B58\u53D6",children:[(0,t.jsx)(n.code,{children:"map"})," \u5B58\u53D6"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/container/gvar"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var (\n        ctx = gctx.New()\n        err    error\n        result *gvar.Var\n        key    = "user"\n        data   = g.Map{\n            "id":   10000,\n            "name": "john",\n        }\n    )\n    _, err = g.Redis().Do(ctx, "SET", key, data)\n    if err != nil {\n        panic(err)\n    }\n    result, err = g.Redis().Do(ctx,"GET", key)\n    if err != nil {\n        panic(err)\n    }\n    fmt.Println(result.Map())\n}\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"struct-\u5B58\u53D6",children:[(0,t.jsx)(n.code,{children:"struct"})," \u5B58\u53D6"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/container/gvar"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    type User struct {\n        Id   int\n        Name string\n    }\n\n    var (\n        ctx = gctx.New()\n        err    error\n        result *gvar.Var\n        key    = "user"\n        user   = g.Map{\n            "id":   10000,\n            "name": "john",\n        }\n    )\n\n    _, err = g.Redis().Do(ctx, "SET", key, user)\n    if err != nil {\n        panic(err)\n    }\n    result, err = g.Redis().Do(ctx, "GET", key)\n    if err != nil {\n        panic(err)\n    }\n\n    var user2 *User\n    if err = result.Struct(&user2); err != nil {\n        panic(err)\n    }\n    fmt.Println(user2.Id, user2.Name)\n}\n'})})]})}function g(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return o}});var i=r(667294);let t={},s=i.createContext(t);function o(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);