"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["70275"],{958378:function(n,e,t){t.r(e),t.d(e,{metadata:()=>r,contentTitle:()=>l,default:()=>u,assets:()=>s,toc:()=>c,frontMatter:()=>a});var r=JSON.parse('{"id":"\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u6811\u5F62\u7C7B\u578B-gtree/\u6811\u5F62\u7C7B\u578B-\u57FA\u672C\u4F7F\u7528","title":"\u6811\u5F62\u7C7B\u578B-\u57FA\u672C\u4F7F\u7528","description":"\u57FA\u672C\u4F7F\u7528","source":"@site/versioned_docs/version-2.0.x/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u6811\u5F62\u7C7B\u578B-gtree/\u6811\u5F62\u7C7B\u578B-\u57FA\u672C\u4F7F\u7528.md","sourceDirName":"\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u6811\u5F62\u7C7B\u578B-gtree","slug":"/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u6811\u5F62\u7C7B\u578B-gtree/\u6811\u5F62\u7C7B\u578B-\u57FA\u672C\u4F7F\u7528","permalink":"/en/2.0.x/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u6811\u5F62\u7C7B\u578B-gtree/\u6811\u5F62\u7C7B\u578B-\u57FA\u672C\u4F7F\u7528","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.0.x/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u6811\u5F62\u7C7B\u578B-gtree/\u6811\u5F62\u7C7B\u578B-\u57FA\u672C\u4F7F\u7528.md","tags":[],"version":"2.0.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":0,"frontMatter":{"title":"\u6811\u5F62\u7C7B\u578B-\u57FA\u672C\u4F7F\u7528","sidebar_position":0,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u6811\u5F62\u7C7B\u578B-gtree","permalink":"/en/2.0.x/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u6811\u5F62\u7C7B\u578B-gtree/"},"next":{"title":"\u6811\u5F62\u7C7B\u578B-\u65B9\u6CD5\u4ECB\u7ECD","permalink":"/en/2.0.x/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u6811\u5F62\u7C7B\u578B-gtree/\u6811\u5F62\u7C7B\u578B-\u65B9\u6CD5\u4ECB\u7ECD"}}'),i=t("785893"),o=t("250065");let a={title:"\u6811\u5F62\u7C7B\u578B-\u57FA\u672C\u4F7F\u7528",sidebar_position:0,hide_title:!0},l=void 0,s={},c=[{value:"\u57FA\u672C\u4F7F\u7528",id:"\u57FA\u672C\u4F7F\u7528",level:2},{value:"\u524D\u5E8F/\u540E\u7EED\u904D\u5386",id:"\u524D\u5E8F\u540E\u7EED\u904D\u5386",level:2}];function m(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u57FA\u672C\u4F7F\u7528",children:"\u57FA\u672C\u4F7F\u7528"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/container/gtree"\n    "github.com/gogf/gf/v2/util/gutil"\n)\n\nfunc main() {\n    m := gtree.NewRedBlackTree(gutil.ComparatorInt)\n\n    // \u8BBE\u7F6E\u952E\u503C\u5BF9\n    for i := 0; i < 10; i++ {\n        m.Set(i, i*10)\n    }\n    // \u67E5\u8BE2\u5927\u5C0F\n    fmt.Println(m.Size())\n    // \u6279\u91CF\u8BBE\u7F6E\u952E\u503C\u5BF9(\u4E0D\u540C\u7684\u6570\u636E\u7C7B\u578B\u5BF9\u8C61\u53C2\u6570\u4E0D\u540C)\n    m.Sets(map[interface{}]interface{}{\n        10: 10,\n        11: 11,\n    })\n    fmt.Println(m.Size())\n\n    // \u67E5\u8BE2\u662F\u5426\u5B58\u5728\n    fmt.Println(m.Contains(1))\n\n    // \u67E5\u8BE2\u952E\u503C\n    fmt.Println(m.Get(1))\n\n    // \u5220\u9664\u6570\u636E\u9879\n    m.Remove(9)\n    fmt.Println(m.Size())\n\n    // \u6279\u91CF\u5220\u9664\n    m.Removes([]interface{}{10, 11})\n    fmt.Println(m.Size())\n\n    // \u5F53\u524D\u952E\u540D\u5217\u8868(\u968F\u673A\u6392\u5E8F)\n    fmt.Println(m.Keys())\n    // \u5F53\u524D\u952E\u503C\u5217\u8868(\u968F\u673A\u6392\u5E8F)\n    fmt.Println(m.Values())\n\n    // \u67E5\u8BE2\u952E\u540D\uFF0C\u5F53\u952E\u503C\u4E0D\u5B58\u5728\u65F6\uFF0C\u5199\u5165\u7ED9\u5B9A\u7684\u9ED8\u8BA4\u503C\n    fmt.Println(m.GetOrSet(100, 100))\n\n    // \u5220\u9664\u952E\u503C\u5BF9\uFF0C\u5E76\u8FD4\u56DE\u5BF9\u5E94\u7684\u952E\u503C\n    fmt.Println(m.Remove(100))\n\n    // \u904D\u5386map\n    m.IteratorAsc(func(k interface{}, v interface{}) bool {\n        fmt.Printf("%v:%v ", k, v)\n        return true\n    })\n    fmt.Println()\n\n    // \u6E05\u7A7Amap\n    m.Clear()\n\n    // \u5224\u65ADmap\u662F\u5426\u4E3A\u7A7A\n    fmt.Println(m.IsEmpty())\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u6267\u884C\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-10",children:"12\ntrue\n10\n11\n9\n[0 1 2 3 4 5 6 7 8]\n[0 10 20 30 40 50 60 70 80]\n100\n100\n0:0 1:10 2:20 3:30 4:40 5:50 6:60 7:70 8:80\ntrue\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u524D\u5E8F\u540E\u7EED\u904D\u5386",children:"\u524D\u5E8F/\u540E\u7EED\u904D\u5386"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/container/gtree"\n    "github.com/gogf/gf/v2/util/gutil"\n)\n\nfunc main() {\n    tree := gtree.NewAVLTree(gutil.ComparatorInt)\n    for i := 0; i < 10; i++ {\n        tree.Set(i, i*10)\n    }\n    // \u6253\u5370\u6811\u5F62\n    tree.Print()\n    // \u524D\u5E8F\u904D\u5386\n    fmt.Println("ASC:")\n    tree.IteratorAsc(func(key, value interface{}) bool {\n        fmt.Println(key, value)\n        return true\n    })\n    // \u540E\u7EED\u904D\u5386\n    fmt.Println("DESC:")\n    tree.IteratorDesc(func(key, value interface{}) bool {\n        fmt.Println(key, value)\n        return true\n    })\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u6267\u884C\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-AVLTree",children:"\u2502           \u250C\u2500\u2500 9\n\u2502       \u250C\u2500\u2500 8\n\u2502   \u250C\u2500\u2500 7\n\u2502   \u2502   \u2502   \u250C\u2500\u2500 6\n\u2502   \u2502   \u2514\u2500\u2500 5\n\u2502   \u2502       \u2514\u2500\u2500 4\n\u2514\u2500\u2500 3\n    \u2502   \u250C\u2500\u2500 2\n    \u2514\u2500\u2500 1\n        \u2514\u2500\u2500 0\n\nASC:\n0 0\n1 10\n2 20\n3 30\n4 40\n5 50\n6 60\n7 70\n8 80\n9 90\nDESC:\n9 90\n8 80\n7 70\n6 60\n5 50\n4 40\n3 30\n2 20\n1 10\n0 0\n"})})]})}function u(n={}){let{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(m,{...n})}):m(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return l},a:function(){return a}});var r=t(667294);let i={},o=r.createContext(i);function a(n){let e=r.useContext(o);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);