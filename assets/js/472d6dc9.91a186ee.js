"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["55072"],{727516:function(n,e,t){t.r(e),t.d(e,{metadata:()=>i,contentTitle:()=>s,default:()=>m,assets:()=>c,toc:()=>a,frontMatter:()=>o});var i=JSON.parse('{"id":"\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u94FE\u8868\u7C7B\u578B-glist/\u94FE\u8868\u7C7B\u578B-\u57FA\u672C\u4F7F\u7528","title":"\u94FE\u8868\u7C7B\u578B-\u57FA\u672C\u4F7F\u7528","description":"\u57FA\u7840\u4F7F\u7528","source":"@site/versioned_docs/version-2.5.x/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u94FE\u8868\u7C7B\u578B-glist/\u94FE\u8868\u7C7B\u578B-\u57FA\u672C\u4F7F\u7528.md","sourceDirName":"\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u94FE\u8868\u7C7B\u578B-glist","slug":"/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u94FE\u8868\u7C7B\u578B-glist/\u94FE\u8868\u7C7B\u578B-\u57FA\u672C\u4F7F\u7528","permalink":"/2.5.x/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u94FE\u8868\u7C7B\u578B-glist/\u94FE\u8868\u7C7B\u578B-\u57FA\u672C\u4F7F\u7528","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.5.x/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u94FE\u8868\u7C7B\u578B-glist/\u94FE\u8868\u7C7B\u578B-\u57FA\u672C\u4F7F\u7528.md","tags":[],"version":"2.5.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":0,"frontMatter":{"title":"\u94FE\u8868\u7C7B\u578B-\u57FA\u672C\u4F7F\u7528","sidebar_position":0,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u94FE\u8868\u7C7B\u578B-glist","permalink":"/2.5.x/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u94FE\u8868\u7C7B\u578B-glist/"},"next":{"title":"\u94FE\u8868\u7C7B\u578B-\u6027\u80FD\u6D4B\u8BD5","permalink":"/2.5.x/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u94FE\u8868\u7C7B\u578B-glist/\u94FE\u8868\u7C7B\u578B-\u6027\u80FD\u6D4B\u8BD5"}}'),l=t("785893"),r=t("250065");let o={title:"\u94FE\u8868\u7C7B\u578B-\u57FA\u672C\u4F7F\u7528",sidebar_position:0,hide_title:!0},s=void 0,c={},a=[{value:"\u57FA\u7840\u4F7F\u7528",id:"\u57FA\u7840\u4F7F\u7528",level:3},{value:"\u94FE\u8868\u904D\u5386",id:"\u94FE\u8868\u904D\u5386",level:3},{value:"<code>Push*</code> \u5143\u7D20\u9879\u5165\u6808",id:"push-\u5143\u7D20\u9879\u5165\u6808",level:3},{value:"<code>Pop*</code> \u5143\u7D20\u9879\u51FA\u6808",id:"pop-\u5143\u7D20\u9879\u51FA\u6808",level:3},{value:"<code>Move*/Insert*</code> \u5143\u7D20\u9879\u79FB\u52A8\u3001\u63D2\u5165",id:"moveinsert-\u5143\u7D20\u9879\u79FB\u52A8\u63D2\u5165",level:3},{value:"<code>Join</code> \u5143\u7D20\u9879\u4E32\u8FDE",id:"join-\u5143\u7D20\u9879\u4E32\u8FDE",level:3},{value:"<code>Remove*</code> \u5143\u7D20\u9879\u79FB\u9664",id:"remove-\u5143\u7D20\u9879\u79FB\u9664",level:3},{value:"<code>JSON</code> \u5E8F\u5217\u5316/\u53CD\u5E8F\u5217",id:"json-\u5E8F\u5217\u5316\u53CD\u5E8F\u5217",level:3}];function g(n){let e={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h3,{id:"\u57FA\u7840\u4F7F\u7528",children:"\u57FA\u7840\u4F7F\u7528"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/container/glist"\n)\n\nfunc main() {\n    // Not concurrent-safe in default.\n    l := glist.New()\n\n    // Push\n    l.PushBack(1) //\u4ECE\u540E\u9762\u63D2\u5165\u503C\n    l.PushBack(2) //\u4ECE\u540E\u9762\u63D2\u5165\u503C\n    e := l.PushFront(0) //\u4ECE\u524D\u9762\u63D2\u5165\u503C\n\n    // Insert\n    l.InsertBefore(e, -1) //\u4ECE0\u7684\u524D\u9762\u63D2\u5165\u503C\n    l.InsertAfter(e, "a") //\u4ECE0\u7684\u540E\u9762\u63D2\u5165\u503C\n    fmt.Println(l)\n\n    // Pop Pop \u51FA\u6808\u540E\uFF0C\u4ECElist\u91CC\u79FB\u9664\n    fmt.Println(l.PopFront()) // \u4ECE\u524D\u9762\u51FA\u6808\uFF0C\u8FD4\u56DE\u51FA\u6808\u7684\u503C\n    fmt.Println(l.PopBack()) //\u4ECE\u540E\u9762\u51FA\u6808\n    fmt.Println(l)\n\n    // All\n    fmt.Println(l.FrontAll()) //\u6B63\u5E8F\u8FD4\u56DE\u4E00\u4E2A\u590D\u672C\n    fmt.Println(l.BackAll())  //\u9006\u5E8F\u8FD4\u56DE\u4E00\u4E2A\u590D\u672C\n\n    // Output:\n    // [-1,0,"a",1,2]\n    // -1\n    // 2\n    // [0,"a",1]\n    // [0 "a" 1]\n    // [1 "a" 0]\n}\n'})}),"\n",(0,l.jsx)(e.h3,{id:"\u94FE\u8868\u904D\u5386",children:"\u94FE\u8868\u904D\u5386"}),"\n",(0,l.jsxs)(e.p,{children:["\u8BE5\u793A\u4F8B\u4E2D\u6211\u4EEC\u5C06\u901A\u8FC7\u8BFB\u9501\u548C\u5199\u9501\u904D\u5386\u4E00\u4E2A\u5E76\u53D1\u5B89\u5168\u7684\u94FE\u8868\uFF0C\u5206\u522B\u901A\u8FC7 ",(0,l.jsx)(e.code,{children:"RLockFunc"})," \u548C ",(0,l.jsx)(e.code,{children:"LockFunc"})," \u5B9E\u73B0\u3002\u6267\u884C\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "container/list"\n    "fmt"\n    "github.com/gogf/gf/v2/container/garray"\n    "github.com/gogf/gf/v2/container/glist"\n)\n\nfunc main() {\n    // concurrent-safe list.\n    l := glist.NewFrom(garray.NewArrayRange(1, 9, 1).Slice(), true)\n    fmt.Println(l)\n    // iterate reading from head.\n    l.RLockFunc(func(list *list.List) {\n        length := list.Len()\n        if length > 0 {\n            for i, e := 0, list.Front(); i < length; i, e = i+1, e.Next() {\n                fmt.Print(e.Value)\n            }\n        }\n    })\n    fmt.Println()\n    // iterate reading from tail.\n    l.RLockFunc(func(list *list.List) {\n        length := list.Len()\n        if length > 0 {\n            for i, e := 0, list.Back(); i < length; i, e = i+1, e.Prev() {\n                fmt.Print(e.Value)\n            }\n        }\n    })\n\n    fmt.Println()\n\n    // iterate reading from head using IteratorAsc.\n    l.IteratorAsc(func(e *glist.Element) bool {\n        fmt.Print(e.Value)\n        return true\n    })\n    fmt.Println()\n    // iterate reading from tail using IteratorDesc.\n    l.IteratorDesc(func(e *glist.Element) bool {\n        fmt.Print(e.Value)\n        return true\n    })\n\n    fmt.Println()\n\n    // iterate writing from head.\n    l.LockFunc(func(list *list.List) {\n        length := list.Len()\n        if length > 0 {\n            for i, e := 0, list.Front(); i < length; i, e = i+1, e.Next() {\n                if e.Value == 6 {\n                    e.Value = "M"\n                    break\n                }\n            }\n        }\n    })\n    fmt.Println(l)\n\n    // Output:\n    // [1,2,3,4,5,6,7,8,9]\n    // 123456789\n    // 987654321\n    // 123456789\n    // 987654321\n    // [1,2,3,4,5,M,7,8,9]\n'})}),"\n",(0,l.jsxs)(e.h3,{id:"push-\u5143\u7D20\u9879\u5165\u6808",children:[(0,l.jsx)(e.code,{children:"Push*"})," \u5143\u7D20\u9879\u5165\u6808"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/container/glist"\n    "github.com/gogf/gf/v2/frame/g"\n)\n\nfunc main() {\n    l := glist.NewFrom(g.Slice{1, 2, 3, 4, 5})\n\n    l.PushBack(6)\n    fmt.Println(l)\n\n    l.PushFront(0)\n    fmt.Println(l)\n\n    // \u6B63\u6570\u4ECE\u53F3\u8FB9\u5165\u6808\n    l.PushBacks(g.Slice{7, 8})\n    fmt.Println(l)\n\n    // \u8D1F\u6570\u4ECE\u5DE6\u8FB9\u5165\u6808\n    l.PushFronts(g.Slice{-1, -2})\n    fmt.Println(l)\n\n    l.PushFrontList(glist.NewFrom(g.Slice{"a", "b", "c"}))\n    l.PushBackList(glist.NewFrom(g.Slice{"d", "e", "f"}))\n    fmt.Println(l)\n\n    // Output:\n    // [1,2,3,4,5,6]\n    // [0,1,2,3,4,5,6]\n    // [0,1,2,3,4,5,6,7,8]\n    // [-2,-1,0,1,2,3,4,5,6,7,8]\n    // ["a","b","c",-2,-1,0,1,2,3,4,5,6,7,8,"d","e","f"]\n\n}\n'})}),"\n",(0,l.jsxs)(e.h3,{id:"pop-\u5143\u7D20\u9879\u51FA\u6808",children:[(0,l.jsx)(e.code,{children:"Pop*"})," \u5143\u7D20\u9879\u51FA\u6808"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/container/glist"\n    "github.com/gogf/gf/v2/frame/g"\n)\n\nfunc main() {\n    l := glist.NewFrom(g.Slice{1, 2, 3, 4, 5, 6, 7, 8, 9})\n\n    fmt.Println(l.PopBack())\n    fmt.Println(l.PopBacks(2))\n    fmt.Println(l.PopFront())\n    fmt.Println(l.PopFronts(2))\n\n    fmt.Println(glist.NewFrom(g.Slice{"a", "b", "c", "d"}).PopFrontAll())\n    fmt.Println(glist.NewFrom(g.Slice{"a", "b", "c", "d"}).PopBackAll())\n\n    // Output:\n    // 9\n    // [8 7]\n    // 1\n    // [2 3]\n    // [4,5,6]\n    // [a b c d]\n    // [d c b a]\n}\n'})}),"\n",(0,l.jsxs)(e.h3,{id:"moveinsert-\u5143\u7D20\u9879\u79FB\u52A8\u63D2\u5165",children:[(0,l.jsx)(e.code,{children:"Move*/Insert*"})," \u5143\u7D20\u9879\u79FB\u52A8\u3001\u63D2\u5165"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/container/glist"\n    "github.com/gogf/gf/v2/frame/g"\n)\n\nfunc main() {\n    l := glist.NewFrom(g.Slice{1, 2, 3, 4, 5, 6, 7, 8, 9})\n\n    l.MoveToBack(l.Front()) //\u5C06\u7B2C\u4E00\u4E2A\u5143\u7D20(1)\u79FB\u52A8\u6700\u53F3\u8FB9  [2,3,4,5,6,7,8,9,1]\n    l.MoveToFront(l.Back().Prev()) //\u5C06\u6700\u540E\u4E00\u9879\u7684\u524D\u4E00\u4E2A\u5143\u7D20(9)\u79FB\u52A8\u6700\u5DE6\u8FB9  [9,2,3,4,5,6,7,8,1]\n    fmt.Println(l)\n\n    // \u5C062\u5230\u6808\u9996\u5143\u7D20\u7684\u524D\u9762\n    l.MoveBefore(l.Front().Next(), l.Front())\n    // \u5C068\u5230\u6808\u5C3E\u5143\u7D20\u7684\u540E\u9762\n    l.MoveAfter(l.Back().Prev(), l.Back())\n    fmt.Println(l)\n\n    // \u5728\u6808\u5C3E\u5143\u7D20\u524D\u63D2\u5165\u65B0\u5143\u7D20\n    l.InsertBefore(l.Back(), "a")\n    // \u5728\u6808\u9996\u5143\u7D20\u540E\u63D2\u5165\u65B0\u5143\u7D20\n    l.InsertAfter(l.Front(), "b")\n\n    // Output:\n    // [9,2,3,4,5,6,7,8,1]\n    // [2,9,3,4,5,6,7,1,8]\n    // [2,"b",9,3,4,5,6,7,1,"a",8]\n}\n'})}),"\n",(0,l.jsxs)(e.h3,{id:"join-\u5143\u7D20\u9879\u4E32\u8FDE",children:[(0,l.jsx)(e.code,{children:"Join"})," \u5143\u7D20\u9879\u4E32\u8FDE"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/container/glist"\n    "github.com/gogf/gf/v2/frame/g"\n)\n\nfunc main() {\n    var l glist.List\n    l.PushBacks(g.Slice{"a", "b", "c", "d"})\n\n    fmt.Println(l.Join(","))\n\n    // Output:\n    // a,b,c,d\n}\n'})}),"\n",(0,l.jsxs)(e.h3,{id:"remove-\u5143\u7D20\u9879\u79FB\u9664",children:[(0,l.jsx)(e.code,{children:"Remove*"})," \u5143\u7D20\u9879\u79FB\u9664"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/container/glist"\n    "github.com/gogf/gf/v2/frame/g"\n)\n\nfunc main() {\n    l := glist.NewFrom(g.Slice{0, 1, 2, 3, 4, 5, 6, 7, 8, 9})\n    fmt.Println(l)\n\n    fmt.Println(l.Remove(l.Front()))\n    fmt.Println(l)\n\n    l.Removes([]*glist.Element{l.Front(), l.Front().Next()})\n    fmt.Println(l)\n\n    l.RemoveAll()\n    fmt.Println(l)\n\n    // Output:\n    // [0,1,2,3,4,5,6,7,8,9]\n    // 0\n    // [1,2,3,4,5,6,7,8,9]\n    // [3,4,5,6,7,8,9]\n    // [] }\n'})}),"\n",(0,l.jsxs)(e.h3,{id:"json-\u5E8F\u5217\u5316\u53CD\u5E8F\u5217",children:[(0,l.jsx)(e.code,{children:"JSON"})," \u5E8F\u5217\u5316/\u53CD\u5E8F\u5217"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"glist"})," \u5BB9\u5668\u5B9E\u73B0\u4E86\u6807\u51C6\u5E93 ",(0,l.jsx)(e.code,{children:"json"})," \u6570\u636E\u683C\u5F0F\u7684\u5E8F\u5217\u5316/\u53CD\u5E8F\u5217\u5316\u63A5\u53E3\u3002"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"Marshal"})}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n      "encoding/json"\n      "fmt"\n      "github.com/gogf/gf/v2/container/glist"\n      "github.com/gogf/gf/v2/frame/g"\n)\n\nfunc main() {\n      type Student struct {\n          Id     int\n          Name   string\n          Scores *glist.List\n      }\n      s := Student{\n          Id:     1,\n          Name:   "john",\n          Scores: glist.NewFrom(g.Slice{100, 99, 98}),\n      }\n      b, _ := json.Marshal(s)\n      fmt.Println(string(b))\n\n      // Output:\n      // {"Id":1,"Name":"john","Scores":[100,99,98]}\n}\n'})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"Unmarshal"})}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:'package main\n\n\nimport (\n      "encoding/json"\n      "fmt"\n      "github.com/gogf/gf/v2/container/glist"\n)\n\n\nfunc main() {\n      b := []byte(`{"Id":1,"Name":"john","Scores":[100,99,98]}`)\n      type Student struct {\n          Id     int\n          Name   string\n          Scores *glist.List\n      }\n      s := Student{}\n      json.Unmarshal(b, &s)\n      fmt.Println(s)\n\n      // Output:\n      // {1 john [100,99,98]}\n}\n'})})]})}function m(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(g,{...n})}):g(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return s},a:function(){return o}});var i=t(667294);let l={},r=i.createContext(l);function o(n){let e=i.useContext(r);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:o(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);