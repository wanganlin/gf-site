"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["7278"],{45029:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>s,default:()=>l,assets:()=>d,toc:()=>o,frontMatter:()=>a});var i=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u67E5\u8BE2\u7F13\u5B58","title":"ORM\u94FE\u5F0F\u64CD\u4F5C-\u67E5\u8BE2\u7F13\u5B58","description":"\u67E5\u8BE2\u7F13\u5B58","source":"@site/versioned_docs/version-2.1.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u67E5\u8BE2\u7F13\u5B58.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9","slug":"/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u67E5\u8BE2\u7F13\u5B58","permalink":"/en/2.1.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u67E5\u8BE2\u7F13\u5B58","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.1.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u67E5\u8BE2\u7F13\u5B58.md","tags":[],"version":"2.1.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":10,"frontMatter":{"title":"ORM\u94FE\u5F0F\u64CD\u4F5C-\u67E5\u8BE2\u7F13\u5B58","sidebar_position":10,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"ORM\u94FE\u5F0F\u64CD\u4F5C-\u4E3B\u4ECE\u5207\u6362","permalink":"/en/2.1.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u4E3B\u4ECE\u5207\u6362"},"next":{"title":"ORM\u94FE\u5F0F\u64CD\u4F5C-\u65F6\u95F4\u7EF4\u62A4","permalink":"/en/2.1.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u65F6\u95F4\u7EF4\u62A4"}}'),r=t("785893"),c=t("250065");let a={title:"ORM\u94FE\u5F0F\u64CD\u4F5C-\u67E5\u8BE2\u7F13\u5B58",sidebar_position:10,hide_title:!0},s=void 0,d={},o=[{value:"\u67E5\u8BE2\u7F13\u5B58",id:"\u67E5\u8BE2\u7F13\u5B58",level:2},{value:"\u7F13\u5B58\u5BF9\u8C61",id:"\u7F13\u5B58\u5BF9\u8C61",level:2},{value:"\u7F13\u5B58\u9002\u914D\uFF08 <code>Redis</code> \u7F13\u5B58\uFF09",id:"\u7F13\u5B58\u9002\u914D-redis-\u7F13\u5B58",level:2},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:2},{value:"\u6570\u636E\u8868\u7ED3\u6784",id:"\u6570\u636E\u8868\u7ED3\u6784",level:3},{value:"\u793A\u4F8B\u4EE3\u7801",id:"\u793A\u4F8B\u4EE3\u7801",level:3}];function h(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u67E5\u8BE2\u7F13\u5B58",children:"\u67E5\u8BE2\u7F13\u5B58"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"gdb"})," \u652F\u6301\u5BF9\u67E5\u8BE2\u7ED3\u679C\u7684\u7F13\u5B58\u5904\u7406\uFF0C\u5E38\u7528\u4E8E\u591A\u8BFB\u5C11\u5199\u7684\u67E5\u8BE2\u7F13\u5B58\u573A\u666F\uFF0C\u5E76\u652F\u6301\u624B\u52A8\u7684\u7F13\u5B58\u6E05\u7406\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u67E5\u8BE2\u7F13\u5B58\u4EC5\u652F\u6301\u94FE\u5F0F\u64CD\u4F5C\uFF0C\u4E14\u5728\u4E8B\u52A1\u64CD\u4F5C\u4E0B\u4E0D\u53EF\u7528\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u76F8\u5173\u65B9\u6CD5\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"type CacheOption struct {\n    // Duration is the TTL for the cache.\n    // If the parameter `Duration` < 0, which means it clear the cache with given `Name`.\n    // If the parameter `Duration` = 0, which means it never expires.\n    // If the parameter `Duration` > 0, which means it expires after `Duration`.\n    Duration time.Duration\n\n    // Name is an optional unique name for the cache.\n    // The Name is used to bind a name to the cache, which means you can later control the cache\n    // like changing the `duration` or clearing the cache with specified Name.\n    Name string\n\n    // Force caches the query result whatever the result is nil or not.\n    // It is used to avoid Cache Penetration.\n    Force bool\n}\n\n// Cache sets the cache feature for the model. It caches the result of the sql, which means\n// if there's another same sql request, it just reads and returns the result from cache, it\n// but not committed and executed into the database.\n//\n// Note that, the cache feature is disabled if the model is performing select statement\n// on a transaction.\nfunc (m *Model) Cache(option CacheOption) *Model\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u7F13\u5B58\u5BF9\u8C61",children:"\u7F13\u5B58\u5BF9\u8C61"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ORM"})," \u5BF9\u8C61\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u63D0\u4F9B\u4E86\u7F13\u5B58\u7BA1\u7406\u5BF9\u8C61\uFF0C\u8BE5\u7F13\u5B58\u5BF9\u8C61\u7C7B\u578B\u4E3A ",(0,r.jsx)(n.code,{children:"*gcache.Cache"}),"\uFF0C\u4E5F\u5C31\u662F\u8BF4\u540C\u65F6\u4E5F\u652F\u6301 ",(0,r.jsx)(n.code,{children:"*gcache.Cache"})," \u7684\u6240\u6709\u7279\u6027\u3002\u53EF\u4EE5\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"GetCache() *gcache.Cache"})," \u63A5\u53E3\u65B9\u6CD5\u83B7\u5F97\u8BE5\u7F13\u5B58\u5BF9\u8C61\uFF0C\u5E76\u901A\u8FC7\u8FD4\u56DE\u7684\u5BF9\u8C61\u5B9E\u73B0\u81EA\u5B9A\u4E49\u7684\u5404\u79CD\u7F13\u5B58\u64CD\u4F5C\uFF0C\u4F8B\u5982\uFF1A ",(0,r.jsx)(n.code,{children:"g.DB().GetCache().Keys()"}),"\u3002"]}),"\n",(0,r.jsxs)(n.h2,{id:"\u7F13\u5B58\u9002\u914D-redis-\u7F13\u5B58",children:["\u7F13\u5B58\u9002\u914D\uFF08 ",(0,r.jsx)(n.code,{children:"Redis"})," \u7F13\u5B58\uFF09"]}),"\n",(0,r.jsxs)(n.p,{children:["\u9ED8\u8BA4\u60C5\u51B5\u4E0B ",(0,r.jsx)(n.code,{children:"ORM"})," \u7684 ",(0,r.jsx)(n.code,{children:"*gcache.Cache"})," \u7F13\u5B58\u5BF9\u8C61\u63D0\u4F9B\u7684\u662F\u5355\u8FDB\u7A0B\u5185\u5B58\u7F13\u5B58\uFF0C\u867D\u7136\u6027\u80FD\u975E\u5E38\u9AD8\u6548\uFF0C\u4F46\u662F\u53EA\u80FD\u5728\u5355\u8FDB\u7A0B\u5185\u4F7F\u7528\u3002\u5982\u679C\u670D\u52A1\u5982\u679C\u91C7\u7528\u591A\u8282\u70B9\u90E8\u7F72\uFF0C\u591A\u8282\u70B9\u4E4B\u95F4\u7684\u7F13\u5B58\u53EF\u80FD\u4F1A\u4EA7\u751F\u6570\u636E\u4E0D\u4E00\u81F4\u7684\u60C5\u51B5\uFF0C\u56E0\u6B64\u5927\u591A\u6570\u573A\u666F\u4E0B\u6211\u4EEC\u90FD\u662F\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"Redis"})," \u670D\u52A1\u5668\u6765\u5B9E\u73B0\u5BF9\u6570\u636E\u5E93\u67E5\u8BE2\u6570\u636E\u7684\u7F13\u5B58\u3002 ",(0,r.jsx)(n.code,{children:"*gcache.Cache"})," \u5BF9\u8C61\u91C7\u7528\u4E86\u9002\u914D\u5668\u8BBE\u8BA1\u6A21\u5F0F\uFF0C\u53EF\u4EE5\u8F7B\u677E\u5B9E\u73B0\u4ECE\u5355\u8FDB\u7A0B\u5185\u5B58\u7F13\u5B58\u5207\u6362\u4E3A\u5206\u5E03\u5F0F\u7684 ",(0,r.jsx)(n.code,{children:"Redis"})," \u7F13\u5B58\u3002\u4F7F\u7528\u793A\u4F8B\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"redisCache := gcache.NewAdapterRedis(g.Redis())\ng.DB().GetCache().SetAdapter(redisCache)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u66F4\u591A\u4ECB\u7ECD\u8BF7\u53C2\u8003\uFF1A ",(0,r.jsx)(n.a,{href:"/en/2.1.x/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6-%E9%87%8D%E7%82%B9/%E7%BC%93%E5%AD%98%E7%AE%A1%E7%90%86/%E7%BC%93%E5%AD%98%E7%AE%A1%E7%90%86-Redis%E7%BC%93%E5%AD%98",children:"\u7F13\u5B58\u7BA1\u7406-Redis\u7F13\u5B58"})]}),"\n",(0,r.jsx)(n.h2,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,r.jsx)(n.h3,{id:"\u6570\u636E\u8868\u7ED3\u6784",children:"\u6570\u636E\u8868\u7ED3\u6784"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `user` (\n  `uid` int(10) unsigned NOT NULL AUTO_INCREMENT,\n  `name` varchar(30) NOT NULL DEFAULT '' COMMENT '\u6635\u79F0',\n  `site` varchar(255) NOT NULL DEFAULT '' COMMENT '\u4E3B\u9875',\n  PRIMARY KEY (`uid`)\n) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u793A\u4F8B\u4EE3\u7801",children:"\u793A\u4F8B\u4EE3\u7801"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "time"\n\n    "github.com/gogf/gf/v2/database/gdb"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var (\n        db  = g.DB()\n        ctx = gctx.New()\n    )\n\n    // \u5F00\u542F\u8C03\u8BD5\u6A21\u5F0F\uFF0C\u4EE5\u4FBF\u4E8E\u8BB0\u5F55\u6240\u6709\u6267\u884C\u7684SQL\n    db.SetDebug(true)\n\n    // \u5199\u5165\u6D4B\u8BD5\u6570\u636E\n    _, err := db.Model("user").Ctx(ctx).Data(g.Map{\n        "name": "john",\n        "site": "https://goframe.org",\n    }).Insert()\n\n    // \u6267\u884C2\u6B21\u67E5\u8BE2\u5E76\u5C06\u67E5\u8BE2\u7ED3\u679C\u7F13\u5B581\u5C0F\u65F6\uFF0C\u5E76\u53EF\u6267\u884C\u7F13\u5B58\u540D\u79F0(\u53EF\u9009)\n    for i := 0; i < 2; i++ {\n        r, _ := db.Model("user").Ctx(ctx).Cache(gdb.CacheOption{\n            Duration: time.Hour,\n            Name:     "vip-user",\n            Force:    false,\n        }).Where("uid", 1).One()\n        g.Log().Debug(ctx, r.Map())\n    }\n\n    // \u6267\u884C\u66F4\u65B0\u64CD\u4F5C\uFF0C\u5E76\u6E05\u7406\u6307\u5B9A\u540D\u79F0\u7684\u67E5\u8BE2\u7F13\u5B58\n    _, err = db.Model("user").Ctx(ctx).Cache(gdb.CacheOption{\n        Duration: -1,\n        Name:     "vip-user",\n        Force:    false,\n    }).Data(gdb.Map{"name": "smith"}).Where("uid", 1).Update()\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n\n    // \u518D\u6B21\u6267\u884C\u67E5\u8BE2\uFF0C\u542F\u7528\u67E5\u8BE2\u7F13\u5B58\u7279\u6027\n    r, _ := db.Model("user").Ctx(ctx).Cache(gdb.CacheOption{\n        Duration: time.Hour,\n        Name:     "vip-user",\n        Force:    false,\n    }).Where("uid", 1).One()\n    g.Log().Debug(ctx, r.Map())\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884C\u540E\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF08\u6D4B\u8BD5\u8868\u6570\u636E\u7ED3\u6784\u4EC5\u4F9B\u793A\u4F8B\u53C2\u8003\uFF09\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'2022-02-08 17:36:19.817 [DEBU] {c0424c75f1c5d116d0df0f7197379412} {"name":"john","site":"https://goframe.org","uid":1}\n2022-02-08 17:36:19.817 [DEBU] {c0424c75f1c5d116d0df0f7197379412} {"name":"john","site":"https://goframe.org","uid":1}\n2022-02-08 17:36:19.817 [DEBU] {c0424c75f1c5d116d0df0f7197379412} [  0 ms] [default] [rows:1  ] UPDATE `user` SET `name`=\'smith\' WHERE `uid`=1\n2022-02-08 17:36:19.818 [DEBU] {c0424c75f1c5d116d0df0f7197379412} [  1 ms] [default] [rows:1  ] SELECT * FROM `user` WHERE `uid`=1 LIMIT 1\n2022-02-08 17:36:19.818 [DEBU] {c0424c75f1c5d116d0df0f7197379412} {"name":"smith","site":"https://goframe.org","uid":1}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u53EF\u4EE5\u770B\u5230\uFF1A"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u4E3A\u4E86\u65B9\u4FBF\u5C55\u793A\u7F13\u5B58\u6548\u679C\uFF0C\u8FD9\u91CC\u5F00\u542F\u4E86\u6570\u636E ",(0,r.jsx)(n.code,{children:"debug"})," \u7279\u6027\uFF0C\u5F53\u6709\u4EFB\u4F55\u7684SQL\u64CD\u4F5C\u65F6\u5C06\u4F1A\u8F93\u51FA\u5230\u7EC8\u7AEF\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u6267\u884C\u4E24\u6B21 ",(0,r.jsx)(n.code,{children:"One"})," \u65B9\u6CD5\u6570\u636E\u67E5\u8BE2\uFF0C\u7B2C\u4E00\u6B21\u8D70\u4E86SQL\u67E5\u8BE2\uFF0C\u7B2C\u4E8C\u6B21\u76F4\u63A5\u4F7F\u7528\u5230\u4E86\u7F13\u5B58\uFF0CSQL\u6CA1\u6709\u63D0\u4EA4\u5230\u6570\u636E\u5E93\u6267\u884C\uFF0C\u56E0\u6B64\u8FD9\u91CC\u53EA\u6253\u5370\u4E86\u4E00\u6761\u67E5\u8BE2SQL\uFF0C\u5E76\u4E14\u4E24\u6B21\u67E5\u8BE2\u7684\u7ED3\u679C\u4E5F\u662F\u4E00\u81F4\u7684\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u6CE8\u610F\u8FD9\u91CC\u4E3A\u8BE5\u67E5\u8BE2\u7684\u7F13\u5B58\u8BBE\u7F6E\u4E86\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684\u540D\u79F0 ",(0,r.jsx)(n.code,{children:"vip-user"}),"\uFF0C\u4EE5\u4FBF\u4E8E\u540E\u7EED\u6E05\u7A7A\u66F4\u65B0\u7F13\u5B58\u3002\u5982\u679C\u7F13\u5B58\u4E0D\u9700\u8981\u6E05\u7406\uFF0C\u90A3\u4E48\u53EF\u4EE5\u4E0D\u7528\u8BBE\u7F6E\u7F13\u5B58\u540D\u79F0\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5F53\u6267\u884C ",(0,r.jsx)(n.code,{children:"Update"})," \u66F4\u65B0\u64CD\u4F5C\u65F6\uFF0C\u540C\u65F6\u6839\u636E\u540D\u79F0\u6E05\u7A7A\u6307\u5B9A\u7684\u7F13\u5B58\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u968F\u540E\u518D\u6267\u884C ",(0,r.jsx)(n.code,{children:"One"})," \u65B9\u6CD5\u6570\u636E\u67E5\u8BE2\uFF0C\u8FD9\u65F6\u91CD\u65B0\u7F13\u5B58\u65B0\u7684\u6570\u636E\u3002"]}),"\n"]})]})}function l(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return a}});var i=t(667294);let r={},c=i.createContext(r);function a(e){let n=i.useContext(c);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);