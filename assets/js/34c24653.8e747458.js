"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["13251"],{550863:function(e,n,i){i.r(n),i.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>x,assets:()=>s,toc:()=>c,frontMatter:()=>d});var r=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u4E8B\u52A1\u5904\u7406/ORM\u4E8B\u52A1\u5904\u7406-\u5E38\u89C4\u64CD\u4F5C","title":"ORM\u4E8B\u52A1\u5904\u7406-\u5E38\u89C4\u64CD\u4F5C","description":"\u5E38\u89C4\u7684\u4E8B\u52A1\u64CD\u4F5C\u65B9\u6CD5\u4E3A Begin/Commit/Rollback\uFF0C\u6BCF\u4E00\u4E2A\u65B9\u6CD5\u6307\u5B9A\u7279\u5B9A\u7684\u4E8B\u52A1\u64CD\u4F5C\u3002\u5F00\u542F\u4E8B\u52A1\u64CD\u4F5C\u53EF\u4EE5\u901A\u8FC7\u6267\u884C db.Begin \u65B9\u6CD5\uFF0C\u8BE5\u65B9\u6CD5\u8FD4\u56DE\u4E8B\u52A1\u7684\u64CD\u4F5C\u63A5\u53E3\uFF0C\u7C7B\u578B\u4E3A gdb.Tx\uFF0C\u901A\u8FC7\u8BE5\u5BF9\u8C61\u6267\u884C\u540E\u7EED\u7684\u6570\u636E\u5E93\u64CD\u4F5C\uFF0C\u5E76\u53EF\u901A\u8FC7 tx.Commit \u63D0\u4EA4\u4FEE\u6539\uFF0C\u6216\u8005\u901A\u8FC7 tx.Rollback \u56DE\u6EDA\u4FEE\u6539\u3002","source":"@site/versioned_docs/version-2.4.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u4E8B\u52A1\u5904\u7406/ORM\u4E8B\u52A1\u5904\u7406-\u5E38\u89C4\u64CD\u4F5C.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u4E8B\u52A1\u5904\u7406","slug":"/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u4E8B\u52A1\u5904\u7406/ORM\u4E8B\u52A1\u5904\u7406-\u5E38\u89C4\u64CD\u4F5C","permalink":"/2.4.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u4E8B\u52A1\u5904\u7406/ORM\u4E8B\u52A1\u5904\u7406-\u5E38\u89C4\u64CD\u4F5C","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.4.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u4E8B\u52A1\u5904\u7406/ORM\u4E8B\u52A1\u5904\u7406-\u5E38\u89C4\u64CD\u4F5C.md","tags":[],"version":"2.4.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":0,"frontMatter":{"title":"ORM\u4E8B\u52A1\u5904\u7406-\u5E38\u89C4\u64CD\u4F5C","sidebar_position":0,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"ORM\u4E8B\u52A1\u5904\u7406","permalink":"/2.4.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u4E8B\u52A1\u5904\u7406/"},"next":{"title":"ORM\u4E8B\u52A1\u5904\u7406-\u95ED\u5305\u64CD\u4F5C","permalink":"/2.4.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u4E8B\u52A1\u5904\u7406/ORM\u4E8B\u52A1\u5904\u7406-\u95ED\u5305\u64CD\u4F5C"}}'),t=i("785893"),l=i("250065");let d={title:"ORM\u4E8B\u52A1\u5904\u7406-\u5E38\u89C4\u64CD\u4F5C",sidebar_position:0,hide_title:!0},o=void 0,s={},c=[{value:"\u4E00\u3001\u5F00\u542F\u4E8B\u52A1\u64CD\u4F5C",id:"\u4E00\u5F00\u542F\u4E8B\u52A1\u64CD\u4F5C",level:2},{value:"\u4E8C\u3001\u4E8B\u52A1\u56DE\u6EDA\u64CD\u4F5C",id:"\u4E8C\u4E8B\u52A1\u56DE\u6EDA\u64CD\u4F5C",level:2},{value:"\u4E09\u3001\u4E8B\u52A1\u63D0\u4EA4\u64CD\u4F5C",id:"\u4E09\u4E8B\u52A1\u63D0\u4EA4\u64CD\u4F5C",level:2},{value:"\u56DB\u3001\u4E8B\u52A1\u94FE\u5F0F\u64CD\u4F5C",id:"\u56DB\u4E8B\u52A1\u94FE\u5F0F\u64CD\u4F5C",level:2}];function a(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["\u5E38\u89C4\u7684\u4E8B\u52A1\u64CD\u4F5C\u65B9\u6CD5\u4E3A ",(0,t.jsx)(n.code,{children:"Begin/Commit/Rollback"}),"\uFF0C\u6BCF\u4E00\u4E2A\u65B9\u6CD5\u6307\u5B9A\u7279\u5B9A\u7684\u4E8B\u52A1\u64CD\u4F5C\u3002\u5F00\u542F\u4E8B\u52A1\u64CD\u4F5C\u53EF\u4EE5\u901A\u8FC7\u6267\u884C ",(0,t.jsx)(n.code,{children:"db.Begin"})," \u65B9\u6CD5\uFF0C\u8BE5\u65B9\u6CD5\u8FD4\u56DE\u4E8B\u52A1\u7684\u64CD\u4F5C\u63A5\u53E3\uFF0C\u7C7B\u578B\u4E3A ",(0,t.jsx)(n.code,{children:"gdb.Tx"}),"\uFF0C\u901A\u8FC7\u8BE5\u5BF9\u8C61\u6267\u884C\u540E\u7EED\u7684\u6570\u636E\u5E93\u64CD\u4F5C\uFF0C\u5E76\u53EF\u901A\u8FC7 ",(0,t.jsx)(n.code,{children:"tx.Commit"})," \u63D0\u4EA4\u4FEE\u6539\uFF0C\u6216\u8005\u901A\u8FC7 ",(0,t.jsx)(n.code,{children:"tx.Rollback"})," \u56DE\u6EDA\u4FEE\u6539\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5E38\u89C1\u95EE\u9898\u6CE8\u610F\uFF1A\u5F00\u542F\u4E8B\u52A1\u64CD\u4F5C\u540E\uFF0C\u8BF7\u52A1\u5FC5\u5728\u4E0D\u9700\u8981\u4F7F\u7528\u8BE5\u4E8B\u52A1\u5BF9\u8C61\u65F6\uFF0C\u901A\u8FC7 ",(0,t.jsx)(n.code,{children:"Commit"}),"/ ",(0,t.jsx)(n.code,{children:"Rollback"})," \u64CD\u4F5C\u5173\u95ED\u6389\u8BE5\u4E8B\u52A1\uFF0C\u5EFA\u8BAE\u5145\u5206\u5229\u7528\u597D ",(0,t.jsx)(n.code,{children:"defer"})," \u65B9\u6CD5\u3002\u5982\u679C\u4E8B\u52A1\u4F7F\u7528\u540E\u4E0D\u5173\u95ED\uFF0C\u5728\u5E94\u7528\u4FA7\u4F1A\u5F15\u8D77 ",(0,t.jsx)(n.code,{children:"goroutine"})," \u4E0D\u65AD\u6FC0\u589E\u6CC4\u9732\uFF0C\u5728\u6570\u636E\u5E93\u4FA7\u4F1A\u5F15\u8D77\u4E8B\u52A1\u7EBF\u7A0B\u6570\u91CF\u88AB\u6253\u6EE1\uFF0C\u4EE5\u81F3\u4E8E\u540E\u7EED\u7684\u4E8B\u52A1\u8BF7\u6C42\u6267\u884C\u8D85\u65F6\u3002\u6B64\u5916\uFF0C\u5EFA\u8BAE\u5C3D\u53EF\u80FD\u4F7F\u7528\u540E\u7EED\u4ECB\u7ECD\u7684 ",(0,t.jsx)(n.code,{children:"Transaction"})," \u95ED\u5305\u65B9\u6CD5\u6765\u5B89\u5168\u5B9E\u73B0\u4E8B\u52A1\u64CD\u4F5C\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4E00\u5F00\u542F\u4E8B\u52A1\u64CD\u4F5C",children:"\u4E00\u3001\u5F00\u542F\u4E8B\u52A1\u64CD\u4F5C"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'db := g.DB()\n\nif tx, err := db.Begin(ctx); err == nil {\n    fmt.Println("\u5F00\u542F\u4E8B\u52A1\u64CD\u4F5C")\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u4E8B\u52A1\u64CD\u4F5C\u5BF9\u8C61\u53EF\u4EE5\u6267\u884C\u6240\u6709 ",(0,t.jsx)(n.code,{children:"db"})," \u5BF9\u8C61\u7684\u65B9\u6CD5\uFF0C\u5177\u4F53\u8BF7\u53C2\u8003 ",(0,t.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb",children:"API\u6587\u6863"}),"\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4E8C\u4E8B\u52A1\u56DE\u6EDA\u64CD\u4F5C",children:"\u4E8C\u3001\u4E8B\u52A1\u56DE\u6EDA\u64CD\u4F5C"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'if tx, err := db.Begin(ctx); err == nil {\n    r, err := tx.Save("user", g.Map{\n        "id"   :  1,\n        "name" : "john",\n    })\n    if err != nil {\n        tx.Rollback()\n    }\n    fmt.Println(r)\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u4E09\u4E8B\u52A1\u63D0\u4EA4\u64CD\u4F5C",children:"\u4E09\u3001\u4E8B\u52A1\u63D0\u4EA4\u64CD\u4F5C"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'if tx, err := db.Begin(ctx); err == nil {\n    r, err := tx.Save("user", g.Map{\n        "id"   :  1,\n        "name" : "john",\n    })\n    if err == nil {\n       tx.Commit()\n    }\n    fmt.Println(r)\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u56DB\u4E8B\u52A1\u94FE\u5F0F\u64CD\u4F5C",children:"\u56DB\u3001\u4E8B\u52A1\u94FE\u5F0F\u64CD\u4F5C"}),"\n",(0,t.jsxs)(n.p,{children:["\u4E8B\u52A1\u64CD\u4F5C\u5BF9\u8C61\u4ECD\u7136\u53EF\u4EE5\u901A\u8FC7 ",(0,t.jsx)(n.code,{children:"tx.Model"})," \u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u94FE\u5F0F\u64CD\u4F5C\u7684\u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u4E0E ",(0,t.jsx)(n.code,{children:"db.Model"})," \u65B9\u6CD5\u8FD4\u56DE\u503C\u76F8\u540C\uFF0C\u53EA\u4E0D\u8FC7\u6570\u636E\u5E93\u64CD\u4F5C\u5728\u4E8B\u52A1\u4E0A\u6267\u884C\uFF0C\u53EF\u63D0\u4EA4\u6216\u56DE\u6EDA\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'if tx, err := db.Begin(); err == nil {\n    r, err := tx.Model("user").Data(g.Map{"id":1, "name": "john_1"}).Save()\n    if err == nil {\n       tx.Commit()\n    }\n    fmt.Println(r)\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u5176\u4ED6\u94FE\u5F0F\u64CD\u4F5C\u8BF7\u53C2\u8003 ",(0,t.jsx)(n.a,{href:"/2.4.x/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6-%E9%87%8D%E7%82%B9/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E9%87%8D%E7%82%B9/",children:"ORM\u94FE\u5F0F\u64CD\u4F5C(\u91CD\u70B9)"})," \u7AE0\u8282\u3002"]})]})}function x(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return d}});var r=i(667294);let t={},l=r.createContext(t);function d(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);