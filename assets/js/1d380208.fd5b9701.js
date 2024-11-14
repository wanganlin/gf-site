"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["80621"],{927619:function(e,n,i){i.r(n),i.d(n,{metadata:()=>d,contentTitle:()=>s,default:()=>h,assets:()=>l,toc:()=>o,frontMatter:()=>t});var d=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6/\u7F13\u5B58\u7BA1\u7406/\u7F13\u5B58\u7BA1\u7406-Redis\u7F13\u5B58","title":"\u7F13\u5B58\u7BA1\u7406-Redis\u7F13\u5B58","description":"\u57FA\u672C\u4ECB\u7ECD","source":"@site/versioned_docs/version-2.5.x/\u6838\u5FC3\u7EC4\u4EF6/\u7F13\u5B58\u7BA1\u7406/\u7F13\u5B58\u7BA1\u7406-Redis\u7F13\u5B58.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6/\u7F13\u5B58\u7BA1\u7406","slug":"/\u6838\u5FC3\u7EC4\u4EF6/\u7F13\u5B58\u7BA1\u7406/\u7F13\u5B58\u7BA1\u7406-Redis\u7F13\u5B58","permalink":"/2.5.x/\u6838\u5FC3\u7EC4\u4EF6/\u7F13\u5B58\u7BA1\u7406/\u7F13\u5B58\u7BA1\u7406-Redis\u7F13\u5B58","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.5.x/\u6838\u5FC3\u7EC4\u4EF6/\u7F13\u5B58\u7BA1\u7406/\u7F13\u5B58\u7BA1\u7406-Redis\u7F13\u5B58.md","tags":[],"version":"2.5.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":2,"frontMatter":{"title":"\u7F13\u5B58\u7BA1\u7406-Redis\u7F13\u5B58","sidebar_position":2,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u7F13\u5B58\u7BA1\u7406-\u5185\u5B58\u7F13\u5B58","permalink":"/2.5.x/\u6838\u5FC3\u7EC4\u4EF6/\u7F13\u5B58\u7BA1\u7406/\u7F13\u5B58\u7BA1\u7406-\u5185\u5B58\u7F13\u5B58"},"next":{"title":"\u7F13\u5B58\u7BA1\u7406-\u65B9\u6CD5\u4ECB\u7ECD","permalink":"/2.5.x/\u6838\u5FC3\u7EC4\u4EF6/\u7F13\u5B58\u7BA1\u7406/\u7F13\u5B58\u7BA1\u7406-\u65B9\u6CD5\u4ECB\u7ECD"}}'),c=i("785893"),r=i("250065");let t={title:"\u7F13\u5B58\u7BA1\u7406-Redis\u7F13\u5B58",sidebar_position:2,hide_title:!0},s=void 0,l={},o=[{value:"\u57FA\u672C\u4ECB\u7ECD",id:"\u57FA\u672C\u4ECB\u7ECD",level:2},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u5173\u4E8E <code>Clear/Size</code> \u7B49\u65B9\u6CD5",id:"\u5173\u4E8E-clearsize-\u7B49\u65B9\u6CD5",level:3},{value:"\u5EFA\u8BAE\u4F7F\u7528\u4E0D\u540C\u7684 <code>redis db</code> \u533A\u5206\u4E1A\u52A1\u7F13\u5B58\u7C7B\u578B",id:"\u5EFA\u8BAE\u4F7F\u7528\u4E0D\u540C\u7684-redis-db-\u533A\u5206\u4E1A\u52A1\u7F13\u5B58\u7C7B\u578B",level:3}];function a(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"\u57FA\u672C\u4ECB\u7ECD",children:"\u57FA\u672C\u4ECB\u7ECD"}),"\n",(0,c.jsxs)(n.p,{children:["\u7F13\u5B58\u7EC4\u4EF6\u540C\u65F6\u63D0\u4F9B\u4E86 ",(0,c.jsx)(n.code,{children:"gcache"})," \u7684 ",(0,c.jsx)(n.code,{children:"Redis"})," \u7F13\u5B58\u9002\u914D\u5B9E\u73B0\u3002 ",(0,c.jsx)(n.code,{children:"Redis"})," \u7F13\u5B58\u5728\u591A\u8282\u70B9\u4FDD\u8BC1\u7F13\u5B58\u7684\u6570\u636E\u4E00\u81F4\u6027\u65F6\u975E\u5E38\u6709\u7528\uFF0C\u7279\u522B\u662F ",(0,c.jsx)(n.code,{children:"Session"})," \u5171\u4EAB\u3001\u6570\u636E\u5E93\u67E5\u8BE2\u7F13\u5B58\u7B49\u573A\u666F\u4E2D\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'func ExampleCache_SetAdapter() {\n    var (\n        err         error\n        ctx         = gctx.New()\n        cache       = gcache.New()\n        redisConfig = &gredis.Config{\n            Address: "127.0.0.1:6379",\n            Db:      9,\n        }\n        cacheKey   = `key`\n        cacheValue = `value`\n    )\n    // Create redis client object.\n    redis, err := gredis.New(redisConfig)\n    if err != nil {\n        panic(err)\n    }\n    // Create redis cache adapter and set it to cache object.\n    cache.SetAdapter(gcache.NewAdapterRedis(redis))\n\n    // Set and Get using cache object.\n    err = cache.Set(ctx, cacheKey, cacheValue, time.Second)\n    if err != nil {\n        panic(err)\n    }\n    fmt.Println(cache.MustGet(ctx, cacheKey).String())\n\n    // Get using redis client.\n    fmt.Println(redis.MustDo(ctx, "GET", cacheKey).String())\n\n    // Output:\n    // value\n    // value\n}\n'})}),"\n",(0,c.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,c.jsxs)(n.h3,{id:"\u5173\u4E8E-clearsize-\u7B49\u65B9\u6CD5",children:["\u5173\u4E8E ",(0,c.jsx)(n.code,{children:"Clear/Size"})," \u7B49\u65B9\u6CD5"]}),"\n",(0,c.jsxs)(n.p,{children:["\u9996\u5148\uFF0C\u76F8\u540C\u7684 ",(0,c.jsx)(n.code,{children:"gredis.Config"})," \u603B\u662F\u4F1A\u8FDE\u63A5\u5230\u76F8\u540C\u7684 ",(0,c.jsx)(n.code,{children:"redis db"})," \u4E2D\uFF0C\u800C\u7531\u4E8E ",(0,c.jsx)(n.code,{children:"Redis"})," \u672C\u8EAB\u6CA1\u6709\u6570\u636E\u5206\u7EC4\u529F\u80FD\uFF0C\u6240\u4EE5\u5F53\u591A\u4E2A ",(0,c.jsx)(n.code,{children:"gcache.Cache"})," \u5BF9\u8C61\u8FDE\u63A5\u5230\u540C\u4E2A ",(0,c.jsx)(n.code,{children:"redis db"})," \u65F6\uFF0C\u5C06\u4F1A\u5171\u4EAB\u6574\u4E2A ",(0,c.jsx)(n.code,{children:"redis db"}),"\uFF0C\u800C\u4E0D\u4F1A\u5355\u72EC\u5F00\u8F9F\u4E00\u4E2A\u5206\u7EC4\u7528\u6765\u5B58\u50A8\u5F53\u524D ",(0,c.jsx)(n.code,{children:"gcache.Cache"})," \u5BF9\u8C61\u4E2D\u7684\u5185\u5BB9\u3002\u56E0\u6B64\u5F53\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"Clear"}),"\u3001 ",(0,c.jsx)(n.code,{children:"Size"})," \u8FD9\u7C7B\u64CD\u4F5C\u65F6\uFF0C\u5C06\u4F1A\u5BF9\u6574\u4E2A ",(0,c.jsx)(n.code,{children:"redis db"})," \u8FDB\u884C\u64CD\u4F5C\uFF0C\u800C\u4E0D\u662F\u4E0E\u5185\u5B58\u7F13\u5B58\u4E00\u6837\u7684\u4EC5\u64CD\u4F5C\u5F53\u524D ",(0,c.jsx)(n.code,{children:"gcache.Cache"})," \u5BF9\u8C61\u4E2D\u7684\u5185\u5BB9\uFF0C\u5B58\u5728\u4E00\u5B9A\u7684\u53CD\u76F4\u89C9\uFF0C\u8BF7\u52A1\u5FC5\u8C28\u614E\u4F7F\u7528\u3002"]}),"\n",(0,c.jsxs)(n.h3,{id:"\u5EFA\u8BAE\u4F7F\u7528\u4E0D\u540C\u7684-redis-db-\u533A\u5206\u4E1A\u52A1\u7F13\u5B58\u7C7B\u578B",children:["\u5EFA\u8BAE\u4F7F\u7528\u4E0D\u540C\u7684 ",(0,c.jsx)(n.code,{children:"redis db"})," \u533A\u5206\u4E1A\u52A1\u7F13\u5B58\u7C7B\u578B"]}),"\n",(0,c.jsxs)(n.p,{children:["\u53E6\u5916\uFF0C\u5EFA\u8BAE\u5927\u5BB6\u5728\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"Redis"})," \u7F13\u5B58\u65F6\uFF0C\u5355\u72EC\u914D\u7F6E\u4E0D\u540C\u7684 ",(0,c.jsx)(n.code,{children:"db"})," \u6765\u4F7F\u7528\uFF0C\u800C\u4E0D\u662F\u548C\u5176\u4ED6\u7684\u4E1A\u52A1\u6570\u636E\u5171\u7528\u4E00\u4E2A ",(0,c.jsx)(n.code,{children:"db"}),"\u3002"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return s},a:function(){return t}});var d=i(667294);let c={},r=d.createContext(c);function t(e){let n=d.useContext(r);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);