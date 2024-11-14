"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["71805"],{534634:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>l,default:()=>g,assets:()=>o,toc:()=>d,frontMatter:()=>c});var s=JSON.parse('{"id":"\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u96C6\u5408\u7C7B\u578B-gset/\u96C6\u5408\u7C7B\u578B-\u57FA\u672C\u4F7F\u7528","title":"\u96C6\u5408\u7C7B\u578B-\u57FA\u672C\u4F7F\u7528","description":"\u57FA\u672C\u4F7F\u7528","source":"@site/versioned_docs/version-2.1.x/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u96C6\u5408\u7C7B\u578B-gset/\u96C6\u5408\u7C7B\u578B-\u57FA\u672C\u4F7F\u7528.md","sourceDirName":"\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u96C6\u5408\u7C7B\u578B-gset","slug":"/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u96C6\u5408\u7C7B\u578B-gset/\u96C6\u5408\u7C7B\u578B-\u57FA\u672C\u4F7F\u7528","permalink":"/2.1.x/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u96C6\u5408\u7C7B\u578B-gset/\u96C6\u5408\u7C7B\u578B-\u57FA\u672C\u4F7F\u7528","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.1.x/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u96C6\u5408\u7C7B\u578B-gset/\u96C6\u5408\u7C7B\u578B-\u57FA\u672C\u4F7F\u7528.md","tags":[],"version":"2.1.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":0,"frontMatter":{"title":"\u96C6\u5408\u7C7B\u578B-\u57FA\u672C\u4F7F\u7528","sidebar_position":0,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u96C6\u5408\u7C7B\u578B-gset","permalink":"/2.1.x/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u96C6\u5408\u7C7B\u578B-gset/"},"next":{"title":"\u96C6\u5408\u7C7B\u578B-\u6027\u80FD\u6D4B\u8BD5","permalink":"/2.1.x/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u96C6\u5408\u7C7B\u578B-gset/\u96C6\u5408\u7C7B\u578B-\u6027\u80FD\u6D4B\u8BD5"}}'),i=t("785893"),r=t("250065");let c={title:"\u96C6\u5408\u7C7B\u578B-\u57FA\u672C\u4F7F\u7528",sidebar_position:0,hide_title:!0},l=void 0,o={},d=[{value:"\u57FA\u672C\u4F7F\u7528",id:"\u57FA\u672C\u4F7F\u7528",level:2},{value:"\u4EA4\u5DEE\u5E76\u8865\u96C6",id:"\u4EA4\u5DEE\u5E76\u8865\u96C6",level:2},{value:"<code>Contains/ContainsI</code> \u5305\u542B\u5224\u65AD",id:"containscontainsi-\u5305\u542B\u5224\u65AD",level:2},{value:"<code>Pop/Pops</code> \u96C6\u5408\u9879\u51FA\u6808",id:"poppops-\u96C6\u5408\u9879\u51FA\u6808",level:2},{value:"<code>Join</code> \u96C6\u5408\u9879\u4E32\u8FDE",id:"join-\u96C6\u5408\u9879\u4E32\u8FDE",level:2},{value:"<code>IsSubsetOf</code> \u5B50\u96C6\u5224\u65AD",id:"issubsetof-\u5B50\u96C6\u5224\u65AD",level:2},{value:"<code>AddIfNotExist*</code> \u5224\u65AD\u6027\u5199\u5165",id:"addifnotexist-\u5224\u65AD\u6027\u5199\u5165",level:2},{value:"<code>Walk</code> \u904D\u5386\u4FEE\u6539",id:"walk-\u904D\u5386\u4FEE\u6539",level:2},{value:"<code>JSON</code> \u5E8F\u5217\u5316/\u53CD\u5E8F\u5217",id:"json-\u5E8F\u5217\u5316\u53CD\u5E8F\u5217",level:2}];function a(n){let e={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u57FA\u672C\u4F7F\u7528",children:"\u57FA\u672C\u4F7F\u7528"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/container/gset"\n    "fmt"\n)\n\nfunc main() {\n    // \u521B\u5EFA\u4E00\u4E2A\u5E76\u53D1\u5B89\u5168\u7684\u96C6\u5408\u5BF9\u8C61\n    s := gset.New(true)\n\n    // \u6DFB\u52A0\u6570\u636E\u9879\n    s.Add(1)\n\n    // \u6279\u91CF\u6DFB\u52A0\u6570\u636E\u9879\n    s.Add([]interface{}{1, 2, 3}...)\n\n    // \u96C6\u5408\u6570\u636E\u9879\u5927\u5C0F\n    fmt.Println(s.Size())\n\n    // \u96C6\u5408\u4E2D\u662F\u5426\u5B58\u5728\u6307\u5B9A\u6570\u636E\u9879\n    fmt.Println(s.Contains(2))\n\n    // \u8FD4\u56DE\u6570\u636E\u9879slice\n    fmt.Println(s.Slice())\n\n    // \u5220\u9664\u6570\u636E\u9879\n    s.Remove(3)\n\n    // \u904D\u5386\u6570\u636E\u9879\n    s.Iterator(func(v interface{}) bool {\n        fmt.Println("Iterator:", v)\n        return true\n    })\n\n    // \u5C06\u96C6\u5408\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\n    fmt.Println(s.String())\n\n    // \u5E76\u53D1\u5B89\u5168\u5199\u9501\u64CD\u4F5C\n    s.LockFunc(func(m map[interface{}]struct{}) {\n        m[4] = struct{}{}\n    })\n\n    // \u5E76\u53D1\u5B89\u5168\u8BFB\u9501\u64CD\u4F5C\n    s.RLockFunc(func(m map[interface{}]struct{}) {\n        fmt.Println(m)\n    })\n\n    // \u6E05\u7A7A\u96C6\u5408\n    s.Clear()\n    fmt.Println(s.Size())\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u6267\u884C\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-3",children:"true\n[1 2 3]\nIterator: 1\nIterator: 2\n[1 2]\nmap[1:{} 2:{} 4:{}]\n0\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u4EA4\u5DEE\u5E76\u8865\u96C6",children:"\u4EA4\u5DEE\u5E76\u8865\u96C6"}),"\n",(0,i.jsx)(e.p,{children:"\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u65B9\u6CD5\u5B9E\u73B0\u4EA4\u5DEE\u5E76\u8865\u96C6\uFF0C\u5E76\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u7ED3\u679C\u96C6\u5408\uFF0C"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"func (set *Set) Intersect(others ...*Set) (newSet *Set)\nfunc (set *Set) Diff(others ...*Set) (newSet *Set)\nfunc (set *Set) Union(others ...*Set) (newSet *Set)\nfunc (set *Set) Complement(full *Set) (newSet *Set)\n"})}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"Intersect"}),": \u4EA4\u96C6\uFF0C\u5C5E\u4E8Eset\u4E14\u5C5E\u4E8Eothers\u7684\u5143\u7D20\u4E3A\u5143\u7D20\u7684\u96C6\u5408\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"Diff"}),": \u5DEE\u96C6\uFF0C\u5C5E\u4E8Eset\u4E14\u4E0D\u5C5E\u4E8Eothers\u7684\u5143\u7D20\u4E3A\u5143\u7D20\u7684\u96C6\u5408\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"Union"}),": \u5E76\u96C6\uFF0C\u5C5E\u4E8Eset\u6216\u5C5E\u4E8Eothers\u7684\u5143\u7D20\u4E3A\u5143\u7D20\u7684\u96C6\u5408\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"Complement"}),": \u8865\u96C6\uFF0C(\u524D\u63D0: set\u5E94\u5F53\u4E3Afull\u7684\u5B50\u96C6)\u5C5E\u4E8E\u5168\u96C6full\u4E0D\u5C5E\u4E8E\u96C6\u5408set\u7684\u5143\u7D20\u7EC4\u6210\u7684\u96C6\u5408\u3002\u5982\u679C\u7ED9\u5B9A\u7684full\u96C6\u5408\u4E0D\u662Fset\u7684\u5168\u96C6\u65F6\uFF0C\u8FD4\u56DEfull\u4E0Eset\u7684\u5DEE\u96C6."]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u901A\u8FC7\u96C6\u5408\u65B9\u6CD5\u6211\u4EEC\u53EF\u4EE5\u53D1\u73B0\uFF0C\u4EA4\u5DEE\u5E76\u96C6\u65B9\u6CD5\u652F\u6301\u591A\u4E2A\u96C6\u5408\u53C2\u6570\u8FDB\u884C\u8BA1\u7B97\u3002\u4EE5\u4E0B\u4E3A\u7B80\u5316\u793A\u4F8B\uFF0C\u53EA\u4F7F\u7528\u4E00\u4E2A\u53C2\u6570\u96C6\u5408\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/container/gset"\n)\n\nfunc main() {\n    s1 := gset.NewFrom(g.Slice{1, 2, 3})\n    s2 := gset.NewFrom(g.Slice{4, 5, 6})\n    s3 := gset.NewFrom(g.Slice{1, 2, 3, 4, 5, 6, 7})\n\n    // \u4EA4\u96C6\n    fmt.Println(s3.Intersect(s1).Slice())\n    // \u5DEE\u96C6\n    fmt.Println(s3.Diff(s1).Slice())\n    // \u5E76\u96C6\n    fmt.Println(s1.Union(s2).Slice())\n    // \u8865\u96C6\n    fmt.Println(s1.Complement(s3).Slice())\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u6267\u884C\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"[1 2 3]\n[4 5 6 7]\n[1 2 3 4 5 6]\n[7 4 5 6]\n"})}),"\n",(0,i.jsxs)(e.h2,{id:"containscontainsi-\u5305\u542B\u5224\u65AD",children:[(0,i.jsx)(e.code,{children:"Contains/ContainsI"})," \u5305\u542B\u5224\u65AD"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/container/gset"\n)\n\nfunc main() {\n    var set gset.StrSet\n    set.Add("a")\n    fmt.Println(set.Contains("a"))\n    fmt.Println(set.Contains("A"))\n    fmt.Println(set.ContainsI("A"))\n\n    // Output:\n    // true\n    // false\n    // true\n}\n'})}),"\n",(0,i.jsxs)(e.h2,{id:"poppops-\u96C6\u5408\u9879\u51FA\u6808",children:[(0,i.jsx)(e.code,{children:"Pop/Pops"})," \u96C6\u5408\u9879\u51FA\u6808"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/container/gset"\n)\n\nfunc main() {\n    var set gset.Set\n    set.Add(1, 2, 3, 4)\n    fmt.Println(set.Pop())\n    fmt.Println(set.Pops(2))\n    fmt.Println(set.Size())\n\n    // May Output:\n    // 1\n    // [2 3]\n    // 1\n}\n'})}),"\n",(0,i.jsxs)(e.h2,{id:"join-\u96C6\u5408\u9879\u4E32\u8FDE",children:[(0,i.jsx)(e.code,{children:"Join"})," \u96C6\u5408\u9879\u4E32\u8FDE"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/container/gset"\n)\n\nfunc main() {\n    var set gset.Set\n    set.Add("a", "b", "c", "d")\n    fmt.Println(set.Join(","))\n\n    // May Output:\n    // a,b,c,d\n}\n'})}),"\n",(0,i.jsxs)(e.h2,{id:"issubsetof-\u5B50\u96C6\u5224\u65AD",children:[(0,i.jsx)(e.code,{children:"IsSubsetOf"})," \u5B50\u96C6\u5224\u65AD"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/container/gset"\n    "github.com/gogf/gf/v2/frame/g"\n)\n\nfunc main() {\n    var s1, s2 gset.Set\n    s1.Add(g.Slice{1, 2, 3}...)\n    s2.Add(g.Slice{2, 3}...)\n    fmt.Println(s1.IsSubsetOf(&s2))\n    fmt.Println(s2.IsSubsetOf(&s1))\n\n    // Output:\n    // false\n    // true\n}\n'})}),"\n",(0,i.jsxs)(e.h2,{id:"addifnotexist-\u5224\u65AD\u6027\u5199\u5165",children:[(0,i.jsx)(e.code,{children:"AddIfNotExist*"})," \u5224\u65AD\u6027\u5199\u5165"]}),"\n",(0,i.jsxs)(e.p,{children:["\u5224\u65AD\u6027\u5199\u5165\u662F\u6307\u5F53\u6307\u5B9A\u7684\u6570\u636E\u9879\u4E0D\u5B58\u5728\u65F6\u5219\u5199\u5165\u5E76\u4E14\u65B9\u6CD5\u8FD4\u56DE ",(0,i.jsx)(e.code,{children:"true"}),"\uFF0C\u5426\u5219\u5FFD\u7565\u5438\u5165\u5E76\u4E14\u65B9\u6CD5\u8FD4\u56DE ",(0,i.jsx)(e.code,{children:"false"}),"\u3002\u76F8\u5173\u65B9\u6CD5\u5982\u4E0B\uFF1A"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"AddIfNotExist"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"AddIfNotExistFunc"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"AddIfNotExistFuncLock"})}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u65B9\u6CD5\u5177\u4F53\u63CF\u8FF0\u8BF7\u67E5\u770B\u63A5\u53E3\u6587\u6863\u6216\u6E90\u7801\u6CE8\u91CA\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/container/gset"\n)\n\nfunc main() {\n    var set gset.Set\n    fmt.Println(set.AddIfNotExist(1))\n    fmt.Println(set.AddIfNotExist(1))\n    fmt.Println(set.Slice())\n\n    // Output:\n    // true\n    // false\n    // [1]\n}\n'})}),"\n",(0,i.jsxs)(e.h2,{id:"walk-\u904D\u5386\u4FEE\u6539",children:[(0,i.jsx)(e.code,{children:"Walk"})," \u904D\u5386\u4FEE\u6539"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/container/gset"\n    "github.com/gogf/gf/v2/frame/g"\n)\n\nfunc main() {\n    var (\n        set    gset.StrSet\n        names  = g.SliceStr{"user", "user_detail"}\n        prefix = "gf_"\n    )\n    set.Add(names...)\n    // Add prefix for given table names.\n    set.Walk(func(item string) string {\n        return prefix + item\n    })\n    fmt.Println(set.Slice())\n\n    // May Output:\n    // [gf_user gf_user_detail]\n}\n'})}),"\n",(0,i.jsxs)(e.h2,{id:"json-\u5E8F\u5217\u5316\u53CD\u5E8F\u5217",children:[(0,i.jsx)(e.code,{children:"JSON"})," \u5E8F\u5217\u5316/\u53CD\u5E8F\u5217"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"gset"})," \u6A21\u5757\u4E0B\u7684\u6240\u6709\u5BB9\u5668\u7C7B\u578B\u5747\u5B9E\u73B0\u4E86\u6807\u51C6\u5E93 ",(0,i.jsx)(e.code,{children:"json"})," \u6570\u636E\u683C\u5F0F\u7684\u5E8F\u5217\u5316/\u53CD\u5E8F\u5217\u5316\u63A5\u53E3\u3002"]}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"Marshal"})}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n       "encoding/json"\n       "fmt"\n       "github.com/gogf/gf/v2/container/gset"\n)\n\nfunc main() {\n       type Student struct {\n           Id     int\n           Name   string\n           Scores *gset.IntSet\n       }\n       s := Student{\n           Id:     1,\n           Name:   "john",\n           Scores: gset.NewIntSetFrom([]int{100, 99, 98}),\n       }\n       b, _ := json.Marshal(s)\n       fmt.Println(string(b))\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u6267\u884C\u540E\uFF0C\u7EC8\u7AEF\u8F93\u51FA\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'{"Id":1,"Name":"john","Scores":[100,99,98]}\n'})}),"\n",(0,i.jsxs)(e.ol,{start:"2",children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"Unmarshal"})}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'package main\n\n\nimport (\n       "encoding/json"\n       "fmt"\n       "github.com/gogf/gf/v2/container/gset"\n)\n\n\nfunc main() {\n       b := []byte(`{"Id":1,"Name":"john","Scores":[100,99,98]}`)\n       type Student struct {\n           Id     int\n           Name   string\n           Scores *gset.IntSet\n       }\n       s := Student{}\n       json.Unmarshal(b, &s)\n       fmt.Println(s)\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u6267\u884C\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"{1 john [100,99,98]}\n"})})]})}function g(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return l},a:function(){return c}});var s=t(667294);let i={},r=s.createContext(i);function c(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);