"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["41453"],{103295:function(e,n,r){r.r(n),r.d(n,{metadata:()=>i,contentTitle:()=>d,default:()=>g,assets:()=>c,toc:()=>a,frontMatter:()=>t});var i=JSON.parse('{"id":"docs/\u7EC4\u4EF6\u5217\u8868/NoSQL Redis/Redis-\u547D\u4EE4\u4EA4\u4E92","title":"Redis-\u547D\u4EE4\u4EA4\u4E92","description":"\u5728\u4F7F\u7528GoFrame\u6846\u67B6\u6784\u5EFA\u7684\u5E94\u7528\u4E2D\uFF0C\u901A\u8FC7Redis\u547D\u4EE4\u4EA4\u4E92\u4EE5\u53CA\u81EA\u52A8\u5316\u7684\u65B9\u5F0F\u6765\u5E8F\u5217\u5316\u548C\u53CD\u5E8F\u5217\u5316\u6570\u636E\u3002\u9996\u5148\uFF0C\u6211\u4EEC\u8BB2\u89E3\u4E86Do\u65B9\u6CD5\u7684\u5F3A\u5927\u6269\u5C55\u6027\uFF0C\u5B83\u5141\u8BB8\u4EFB\u4F55Redis\u547D\u4EE4\u7684\u6267\u884C\u3002\u968F\u540E\u6211\u4EEC\u5C55\u793A\u4E86\u5982\u4F55\u4F7F\u7528map\u548Cstruct\u6765\u5B58\u53D6\u6570\u636E\uFF0C\u5E76\u5229\u7528json\u5E8F\u5217\u5316\u7B80\u5316\u7F16\u7A0B\u3002\u901A\u8FC7GoFrame\u6846\u67B6\u4E0ERedis\u7684\u7ED3\u5408\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u66F4\u52A0\u9AD8\u6548\u5730\u8FDB\u884C\u6570\u636E\u7BA1\u7406\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u7EC4\u4EF6\u5217\u8868/NoSQL Redis/Redis-\u547D\u4EE4\u4EA4\u4E92.md","sourceDirName":"docs/\u7EC4\u4EF6\u5217\u8868/NoSQL Redis","slug":"/docs/components/contrib-nosql-redis-do-and-serialization","permalink":"/2.7.x/docs/components/contrib-nosql-redis-do-and-serialization","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u7EC4\u4EF6\u5217\u8868/NoSQL Redis/Redis-\u547D\u4EE4\u4EA4\u4E92.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":2,"frontMatter":{"slug":"/docs/components/contrib-nosql-redis-do-and-serialization","title":"Redis-\u547D\u4EE4\u4EA4\u4E92","sidebar_position":2,"hide_title":true,"keywords":["Redis\u547D\u4EE4\u4EA4\u4E92","Do\u65B9\u6CD5","\u81EA\u52A8\u5E8F\u5217\u5316\u4E0E\u53CD\u5E8F\u5217\u5316","GoFrame\u6846\u67B6","\u7ED3\u6784\u4F53\u5B58\u53D6","map\u5B58\u53D6","gredis\u5E93","json\u5E8F\u5217\u5316","Redis API","Go\u8BED\u8A00"],"description":"\u5728\u4F7F\u7528GoFrame\u6846\u67B6\u6784\u5EFA\u7684\u5E94\u7528\u4E2D\uFF0C\u901A\u8FC7Redis\u547D\u4EE4\u4EA4\u4E92\u4EE5\u53CA\u81EA\u52A8\u5316\u7684\u65B9\u5F0F\u6765\u5E8F\u5217\u5316\u548C\u53CD\u5E8F\u5217\u5316\u6570\u636E\u3002\u9996\u5148\uFF0C\u6211\u4EEC\u8BB2\u89E3\u4E86Do\u65B9\u6CD5\u7684\u5F3A\u5927\u6269\u5C55\u6027\uFF0C\u5B83\u5141\u8BB8\u4EFB\u4F55Redis\u547D\u4EE4\u7684\u6267\u884C\u3002\u968F\u540E\u6211\u4EEC\u5C55\u793A\u4E86\u5982\u4F55\u4F7F\u7528map\u548Cstruct\u6765\u5B58\u53D6\u6570\u636E\uFF0C\u5E76\u5229\u7528json\u5E8F\u5217\u5316\u7B80\u5316\u7F16\u7A0B\u3002\u901A\u8FC7GoFrame\u6846\u67B6\u4E0ERedis\u7684\u7ED3\u5408\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u66F4\u52A0\u9AD8\u6548\u5730\u8FDB\u884C\u6570\u636E\u7BA1\u7406\u3002"},"sidebar":"mainSidebar","previous":{"title":"Redis-\u4F7F\u7528\u793A\u4F8B","permalink":"/2.7.x/docs/components/contrib-nosql-redis-example"},"next":{"title":"Redis-Conn\u5BF9\u8C61","permalink":"/2.7.x/docs/components/contrib-nosql-redis-conn"}}'),s=r("785893"),o=r("250065");let t={slug:"/docs/components/contrib-nosql-redis-do-and-serialization",title:"Redis-\u547D\u4EE4\u4EA4\u4E92",sidebar_position:2,hide_title:!0,keywords:["Redis\u547D\u4EE4\u4EA4\u4E92","Do\u65B9\u6CD5","\u81EA\u52A8\u5E8F\u5217\u5316\u4E0E\u53CD\u5E8F\u5217\u5316","GoFrame\u6846\u67B6","\u7ED3\u6784\u4F53\u5B58\u53D6","map\u5B58\u53D6","gredis\u5E93","json\u5E8F\u5217\u5316","Redis API","Go\u8BED\u8A00"],description:"\u5728\u4F7F\u7528GoFrame\u6846\u67B6\u6784\u5EFA\u7684\u5E94\u7528\u4E2D\uFF0C\u901A\u8FC7Redis\u547D\u4EE4\u4EA4\u4E92\u4EE5\u53CA\u81EA\u52A8\u5316\u7684\u65B9\u5F0F\u6765\u5E8F\u5217\u5316\u548C\u53CD\u5E8F\u5217\u5316\u6570\u636E\u3002\u9996\u5148\uFF0C\u6211\u4EEC\u8BB2\u89E3\u4E86Do\u65B9\u6CD5\u7684\u5F3A\u5927\u6269\u5C55\u6027\uFF0C\u5B83\u5141\u8BB8\u4EFB\u4F55Redis\u547D\u4EE4\u7684\u6267\u884C\u3002\u968F\u540E\u6211\u4EEC\u5C55\u793A\u4E86\u5982\u4F55\u4F7F\u7528map\u548Cstruct\u6765\u5B58\u53D6\u6570\u636E\uFF0C\u5E76\u5229\u7528json\u5E8F\u5217\u5316\u7B80\u5316\u7F16\u7A0B\u3002\u901A\u8FC7GoFrame\u6846\u67B6\u4E0ERedis\u7684\u7ED3\u5408\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u66F4\u52A0\u9AD8\u6548\u5730\u8FDB\u884C\u6570\u636E\u7BA1\u7406\u3002"},d=void 0,c={},a=[{value:"<code>Do</code> \u65B9\u6CD5",id:"do-\u65B9\u6CD5",level:2},{value:"\u81EA\u52A8\u5E8F\u5217\u5316/\u53CD\u5E8F\u5217\u5316",id:"\u81EA\u52A8\u5E8F\u5217\u5316\u53CD\u5E8F\u5217\u5316",level:2},{value:"<code>map</code> \u5B58\u53D6",id:"map-\u5B58\u53D6",level:3},{value:"<code>struct</code> \u5B58\u53D6",id:"struct-\u5B58\u53D6",level:3}];function l(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h2,{id:"do-\u65B9\u6CD5",children:[(0,s.jsx)(n.code,{children:"Do"})," \u65B9\u6CD5"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Do"})," \u662F\u901A\u7528\u7684\u547D\u4EE4\u4EA4\u4E92\u65B9\u6CD5\uFF0C\u6267\u884C\u540C\u6B65\u6307\u4EE4\uFF0C\u901A\u8FC7\u5411 ",(0,s.jsx)(n.code,{children:"Redis Server"})," \u53D1\u9001\u5BF9\u5E94\u7684 ",(0,s.jsx)(n.code,{children:"Redis API"})," \u547D\u4EE4\uFF0C\u6765\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"Redis Server"})," \u7684\u670D\u52A1\u3002 ",(0,s.jsx)(n.code,{children:"Do"})," \u65B9\u6CD5\u6700\u5927\u7684\u7279\u70B9\u662F\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"Redis"})," \u547D\u4EE4\u4E0E\u670D\u52A1\u7AEF\u4EA4\u4E92\uFF0C\u56E0\u6B64\u6269\u5C55\u5F88\u5F3A\uFF0C\u6CA1\u6709\u63D0\u4F9B ",(0,s.jsx)(n.code,{children:"Redis"})," \u64CD\u4F5C\u65B9\u6CD5\u7684\u5176\u4ED6\u547D\u4EE4\u90FD\u53EF\u4EE5\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"Do"})," \u65B9\u6CD5\u6765\u5B9E\u73B0\u3002\u4F7F\u7528\u793A\u4F8B\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var (\n        ctx = gctx.New()\n    )\n    v, _ := g.Redis().Do(ctx, "SET", "k", "v")\n    fmt.Println(v.String())\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u81EA\u52A8\u5E8F\u5217\u5316\u53CD\u5E8F\u5217\u5316",children:"\u81EA\u52A8\u5E8F\u5217\u5316/\u53CD\u5E8F\u5217\u5316"}),"\n",(0,s.jsxs)(n.p,{children:["\u5F53\u7ED9\u5B9A\u7684\u53C2\u6570\u4E3A ",(0,s.jsx)(n.code,{children:"map"}),", ",(0,s.jsx)(n.code,{children:"slice"}),", ",(0,s.jsx)(n.code,{children:"struct"})," \u65F6\uFF0C ",(0,s.jsx)(n.code,{children:"gredis"})," \u5185\u90E8\u652F\u6301\u81EA\u52A8\u5BF9\u5176\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"json"})," \u5E8F\u5217\u5316\uFF0C\u5E76\u4E14\u8BFB\u53D6\u6570\u636E\u65F6\u53EF\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"gvar.Var"})," \u7684\u8F6C\u6362\u529F\u80FD\u5B9E\u73B0\u53CD\u5E8F\u5217\u5316\u3002"]}),"\n",(0,s.jsxs)(n.h3,{id:"map-\u5B58\u53D6",children:[(0,s.jsx)(n.code,{children:"map"})," \u5B58\u53D6"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/container/gvar"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var (\n        ctx = gctx.New()\n        err    error\n        result *gvar.Var\n        key    = "user"\n        data   = g.Map{\n            "id":   10000,\n            "name": "john",\n        }\n    )\n    _, err = g.Redis().Do(ctx, "SET", key, data)\n    if err != nil {\n        panic(err)\n    }\n    result, err = g.Redis().Do(ctx,"GET", key)\n    if err != nil {\n        panic(err)\n    }\n    fmt.Println(result.Map())\n}\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"struct-\u5B58\u53D6",children:[(0,s.jsx)(n.code,{children:"struct"})," \u5B58\u53D6"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/container/gvar"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    type User struct {\n        Id   int\n        Name string\n    }\n\n    var (\n        ctx = gctx.New()\n        err    error\n        result *gvar.Var\n        key    = "user"\n        user   = g.Map{\n            "id":   10000,\n            "name": "john",\n        }\n    )\n\n    _, err = g.Redis().Do(ctx, "SET", key, user)\n    if err != nil {\n        panic(err)\n    }\n    result, err = g.Redis().Do(ctx, "GET", key)\n    if err != nil {\n        panic(err)\n    }\n\n    var user2 *User\n    if err = result.Struct(&user2); err != nil {\n        panic(err)\n    }\n    fmt.Println(user2.Id, user2.Name)\n}\n'})})]})}function g(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return t}});var i=r(667294);let s={},o=i.createContext(s);function t(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);