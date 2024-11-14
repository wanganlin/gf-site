"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["48419"],{251650:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>g,assets:()=>l,toc:()=>a,frontMatter:()=>o});var r=JSON.parse('{"id":"docs/\u7EC4\u4EF6\u5217\u8868/NoSQL Redis/Redis-\u4F7F\u7528\u793A\u4F8B","title":"Redis-\u4F7F\u7528\u793A\u4F8B","description":"\u4F7F\u7528GoFrame\u6846\u67B6\u5728Redis\u4E2D\u6267\u884C\u57FA\u672C\u64CD\u4F5C\u7684\u793A\u4F8B\uFF0C\u5305\u62ECSet/Get\u3001SetEx\u3001HSet/HGetAll\u548CHMSet/HMGet\u64CD\u4F5C\u3002\u8FD9\u4E9B\u4EE3\u7801\u793A\u4F8B\u5C55\u793A\u4E86\u5982\u4F55\u901A\u8FC7GoFrame\u6846\u67B6\u7684Redis\u6A21\u5757\u8FDB\u884C\u6570\u636E\u5B58\u50A8\u548C\u68C0\u7D22\uFF0C\u9002\u7528\u4E8E\u521D\u5B66\u8005\u5B66\u4E60\u5982\u4F55\u5728GoFrame\u6846\u67B6\u73AF\u5883\u4E2D\u5B9E\u73B0Redis\u529F\u80FD\u3002\u672C\u793A\u4F8B\u540C\u65F6\u63D0\u9192\u7528\u6237\u5728Redis\u7248\u672C4.0.0\u53CA\u4EE5\u4E0A\u4E2DHMSET\u5DF2\u5F03\u7528\uFF0C\u5E94\u4F7F\u7528HSET\u3002","source":"@site/docs/docs/\u7EC4\u4EF6\u5217\u8868/NoSQL Redis/Redis-\u4F7F\u7528\u793A\u4F8B.md","sourceDirName":"docs/\u7EC4\u4EF6\u5217\u8868/NoSQL Redis","slug":"/docs/components/contrib-nosql-redis-example","permalink":"/docs/components/contrib-nosql-redis-example","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7EC4\u4EF6\u5217\u8868/NoSQL Redis/Redis-\u4F7F\u7528\u793A\u4F8B.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":1,"frontMatter":{"slug":"/docs/components/contrib-nosql-redis-example","title":"Redis-\u4F7F\u7528\u793A\u4F8B","sidebar_position":1,"hide_title":true,"keywords":["Redis\u793A\u4F8B","GoFrame\u6846\u67B6","NoSQL\u6570\u636E\u5E93","Set\u64CD\u4F5C","Get\u64CD\u4F5C","SetEx\u64CD\u4F5C","HSet\u64CD\u4F5C","HMSet\u64CD\u4F5C","HGetAll\u64CD\u4F5C","HMGet\u64CD\u4F5C"],"description":"\u4F7F\u7528GoFrame\u6846\u67B6\u5728Redis\u4E2D\u6267\u884C\u57FA\u672C\u64CD\u4F5C\u7684\u793A\u4F8B\uFF0C\u5305\u62ECSet/Get\u3001SetEx\u3001HSet/HGetAll\u548CHMSet/HMGet\u64CD\u4F5C\u3002\u8FD9\u4E9B\u4EE3\u7801\u793A\u4F8B\u5C55\u793A\u4E86\u5982\u4F55\u901A\u8FC7GoFrame\u6846\u67B6\u7684Redis\u6A21\u5757\u8FDB\u884C\u6570\u636E\u5B58\u50A8\u548C\u68C0\u7D22\uFF0C\u9002\u7528\u4E8E\u521D\u5B66\u8005\u5B66\u4E60\u5982\u4F55\u5728GoFrame\u6846\u67B6\u73AF\u5883\u4E2D\u5B9E\u73B0Redis\u529F\u80FD\u3002\u672C\u793A\u4F8B\u540C\u65F6\u63D0\u9192\u7528\u6237\u5728Redis\u7248\u672C4.0.0\u53CA\u4EE5\u4E0A\u4E2DHMSET\u5DF2\u5F03\u7528\uFF0C\u5E94\u4F7F\u7528HSET\u3002"},"sidebar":"mainSidebar","previous":{"title":"Redis-\u914D\u7F6E\u7BA1\u7406","permalink":"/docs/components/contrib-nosql-redis-config"},"next":{"title":"Redis-\u547D\u4EE4\u4EA4\u4E92","permalink":"/docs/components/contrib-nosql-redis-do-and-serialization"}}'),i=t("785893"),s=t("250065");let o={slug:"/docs/components/contrib-nosql-redis-example",title:"Redis-\u4F7F\u7528\u793A\u4F8B",sidebar_position:1,hide_title:!0,keywords:["Redis\u793A\u4F8B","GoFrame\u6846\u67B6","NoSQL\u6570\u636E\u5E93","Set\u64CD\u4F5C","Get\u64CD\u4F5C","SetEx\u64CD\u4F5C","HSet\u64CD\u4F5C","HMSet\u64CD\u4F5C","HGetAll\u64CD\u4F5C","HMGet\u64CD\u4F5C"],description:"\u4F7F\u7528GoFrame\u6846\u67B6\u5728Redis\u4E2D\u6267\u884C\u57FA\u672C\u64CD\u4F5C\u7684\u793A\u4F8B\uFF0C\u5305\u62ECSet/Get\u3001SetEx\u3001HSet/HGetAll\u548CHMSet/HMGet\u64CD\u4F5C\u3002\u8FD9\u4E9B\u4EE3\u7801\u793A\u4F8B\u5C55\u793A\u4E86\u5982\u4F55\u901A\u8FC7GoFrame\u6846\u67B6\u7684Redis\u6A21\u5757\u8FDB\u884C\u6570\u636E\u5B58\u50A8\u548C\u68C0\u7D22\uFF0C\u9002\u7528\u4E8E\u521D\u5B66\u8005\u5B66\u4E60\u5982\u4F55\u5728GoFrame\u6846\u67B6\u73AF\u5883\u4E2D\u5B9E\u73B0Redis\u529F\u80FD\u3002\u672C\u793A\u4F8B\u540C\u65F6\u63D0\u9192\u7528\u6237\u5728Redis\u7248\u672C4.0.0\u53CA\u4EE5\u4E0A\u4E2DHMSET\u5DF2\u5F03\u7528\uFF0C\u5E94\u4F7F\u7528HSET\u3002"},c=void 0,l={},a=[{value:"<code>Set/Get</code> \u64CD\u4F5C",id:"setget-\u64CD\u4F5C",level:2},{value:"<code>SetEx</code> \u64CD\u4F5C",id:"setex-\u64CD\u4F5C",level:2},{value:"<code>HSet/HGetAll</code> \u64CD\u4F5C",id:"hsethgetall-\u64CD\u4F5C",level:2},{value:"<code>HMSet/HMGet</code> \u64CD\u4F5C",id:"hmsethmget-\u64CD\u4F5C",level:2}];function d(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h2,{id:"setget-\u64CD\u4F5C",children:[(0,i.jsx)(n.code,{children:"Set/Get"})," \u64CD\u4F5C"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n\n    _ "github.com/gogf/gf/contrib/nosql/redis/v2"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var ctx = gctx.New()\n    _, err := g.Redis().Set(ctx, "key", "value")\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    value, err := g.Redis().Get(ctx, "key")\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    fmt.Println(value.String())\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u6267\u884C\u540E\uFF0C\u7EC8\u7AEF\u8F93\u51FA\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-value"})}),"\n",(0,i.jsxs)(n.h2,{id:"setex-\u64CD\u4F5C",children:[(0,i.jsx)(n.code,{children:"SetEx"})," \u64CD\u4F5C"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "time"\n\n    _ "github.com/gogf/gf/contrib/nosql/redis/v2"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var ctx = gctx.New()\n    err := g.Redis().SetEX(ctx, "key", "value", 1)\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    value, err := g.Redis().Get(ctx, "key")\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    fmt.Println(value.IsNil())\n    fmt.Println(value.String())\n\n    time.Sleep(time.Second)\n\n    value, err = g.Redis().Get(ctx, "key")\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    fmt.Println(value.IsNil())\n    fmt.Println(value.Val())\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u6267\u884C\u540E\uFF0C\u7EC8\u7AEF\u8F93\u51FA\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-false",children:"value\ntrue\n<nil>\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"hsethgetall-\u64CD\u4F5C",children:[(0,i.jsx)(n.code,{children:"HSet/HGetAll"})," \u64CD\u4F5C"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n\n    _ "github.com/gogf/gf/contrib/nosql/redis/v2"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var (\n        ctx = gctx.New()\n        key = "key"\n    )\n    _, err := g.Redis().HSet(ctx, key, g.Map{\n        "id":    1,\n        "name":  "john",\n        "score": 100,\n    })\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n\n    // retrieve hash map\n    value, err := g.Redis().HGetAll(ctx, key)\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    fmt.Println(value.Map())\n\n    // scan to struct\n    type User struct {\n        Id    uint64\n        Name  string\n        Score float64\n    }\n    var user *User\n    if err = value.Scan(&user); err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    g.Dump(user)\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u6267\u884C\u540E\uFF0C\u7EC8\u7AEF\u8F93\u51FA\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'map[id:1 name:john score:100]\n{\n    Id:    1,\n    Name:  "john",\n    Score: 100,\n}\n'})}),"\n",(0,i.jsxs)(n.h2,{id:"hmsethmget-\u64CD\u4F5C",children:[(0,i.jsx)(n.code,{children:"HMSet/HMGet"})," \u64CD\u4F5C"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    _ "github.com/gogf/gf/contrib/nosql/redis/v2"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var (\n        ctx = gctx.New()\n        key = "key"\n    )\n    err := g.Redis().HMSet(ctx, key, g.Map{\n        "id":    1,\n        "name":  "john",\n        "score": 100,\n    })\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n\n    // retrieve hash map\n    values, err := g.Redis().HMGet(ctx, key, "id", "name")\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    g.Dump(values.Strings())\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u6267\u884C\u540E\uFF0C\u7EC8\u7AEF\u8F93\u51FA\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'[\n    "1",\n    "john",\n]\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"As per Redis 4.0.0, HMSET is considered deprecated. Please use HSET in new code. "})}),"\n",(0,i.jsxs)(n.p,{children:["\u6839\u636E ",(0,i.jsx)(n.code,{children:"Redis 4.0.0"}),"\uFF0C ",(0,i.jsx)(n.code,{children:"HMSET"})," \u88AB\u89C6\u4E3A\u5DF2\u5F03\u7528\u3002\u8BF7\u5728\u65B0\u4EE3\u7801\u4E2D\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"HSET"}),"\u3002"]})]})}function g(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return o}});var r=t(667294);let i={},s=r.createContext(i);function o(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);