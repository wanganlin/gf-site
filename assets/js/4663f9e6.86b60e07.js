"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["83690"],{527018:function(n,e,a){a.r(e),a.d(e,{metadata:()=>s,contentTitle:()=>o,default:()=>m,assets:()=>l,toc:()=>i,frontMatter:()=>c});var s=JSON.parse('{"id":"\u6A21\u5757\u5217\u8868/\u6570\u636E\u7ED3\u6784/gmap -\u5B57\u5178\u8868","title":"gmap (\u5B57\u5178\u8868)","description":"\u652F\u6301\u5E76\u53D1\u5B89\u5168\u5F00\u5173\u9009\u9879\u7684 map \u5BB9\u5668\uFF0C\u6700\u5E38\u7528\u7684\u6570\u636E\u7ED3\u6784\u3002\u8BE5\u6A21\u5757\u5305\u542B\u591A\u4E2A\u6570\u636E\u7ED3\u6784\u7684 map \u5BB9\u5668\uFF1A HashMap\u3001 TreeMap \u548C ListMap\u3002","source":"@site/versioned_docs/version-1.16.x/\u6A21\u5757\u5217\u8868/\u6570\u636E\u7ED3\u6784/gmap -\u5B57\u5178\u8868.md","sourceDirName":"\u6A21\u5757\u5217\u8868/\u6570\u636E\u7ED3\u6784","slug":"/\u6A21\u5757\u5217\u8868/\u6570\u636E\u7ED3\u6784/gmap -\u5B57\u5178\u8868","permalink":"/1.16.x/\u6A21\u5757\u5217\u8868/\u6570\u636E\u7ED3\u6784/gmap -\u5B57\u5178\u8868","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.16.x/\u6A21\u5757\u5217\u8868/\u6570\u636E\u7ED3\u6784/gmap -\u5B57\u5178\u8868.md","tags":[],"version":"1.16.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":0,"frontMatter":{"title":"gmap (\u5B57\u5178\u8868)","sidebar_position":0,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"gredis (Redis\u5BA2\u6237\u7AEF)","permalink":"/1.16.x/\u6A21\u5757\u5217\u8868/\u6570\u636E\u7BA1\u7406/gredis -Redis\u5BA2\u6237\u7AEF"},"next":{"title":"garray (\u6570\u7EC4)","permalink":"/1.16.x/\u6A21\u5757\u5217\u8868/\u6570\u636E\u7ED3\u6784/garray -\u6570\u7EC4"}}'),t=a("785893"),r=a("250065");let c={title:"gmap (\u5B57\u5178\u8868)",sidebar_position:0,hide_title:!0},o=void 0,l={},i=[{value:"\u5E76\u53D1\u5B89\u5168",id:"\u5E76\u53D1\u5B89\u5168",level:2},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:2},{value:"\u57FA\u672C\u4F7F\u7528",id:"\u57FA\u672C\u4F7F\u7528",level:3},{value:"\u6709\u5E8F\u904D\u5386",id:"\u6709\u5E8F\u904D\u5386",level:3},{value:"<code>FilterEmpty/FilterNil</code> \u7A7A\u503C\u8FC7\u6EE4",id:"filteremptyfilternil-\u7A7A\u503C\u8FC7\u6EE4",level:3},{value:"<code>Flip</code> \u952E\u503C\u5BF9\u53CD\u8F6C",id:"flip-\u952E\u503C\u5BF9\u53CD\u8F6C",level:3},{value:"<code>Keys/Values</code> \u952E\u540D/\u6570\u503C\u5217\u8868",id:"keysvalues-\u952E\u540D\u6570\u503C\u5217\u8868",level:3},{value:"<code>Pop/Pops</code> \u968F\u673A\u51FA\u6808",id:"poppops-\u968F\u673A\u51FA\u6808",level:3},{value:"<code>SetIfNotExist*</code> \u5224\u65AD\u6027\u5199\u5165",id:"setifnotexist-\u5224\u65AD\u6027\u5199\u5165",level:3},{value:"<code>Merge</code> \u5B57\u5178\u8868\u5408\u5E76",id:"merge-\u5B57\u5178\u8868\u5408\u5E76",level:3},{value:"<code>JSON</code> \u5E8F\u5217\u5316/\u53CD\u5E8F\u5217",id:"json-\u5E8F\u5217\u5316\u53CD\u5E8F\u5217",level:3},{value:"\u6027\u80FD\u6D4B\u8BD5",id:"\u6027\u80FD\u6D4B\u8BD5",level:2},{value:"\u5E76\u53D1\u5B89\u5168",id:"\u5E76\u53D1\u5B89\u5168-1",level:3},{value:"\u975E\u5E76\u53D1\u5B89\u5168",id:"\u975E\u5E76\u53D1\u5B89\u5168",level:3},{value:"\u4E0D\u540C\u7C7B\u578Bmap\u6027\u80FD",id:"\u4E0D\u540C\u7C7B\u578Bmap\u6027\u80FD",level:3},{value:"<code>gmap</code> \u4E0E <code>sync.Map</code> \u6027\u80FD\u6BD4\u8F83",id:"gmap-\u4E0E-syncmap-\u6027\u80FD\u6BD4\u8F83",level:3}];function p(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:["\u652F\u6301\u5E76\u53D1\u5B89\u5168\u5F00\u5173\u9009\u9879\u7684 ",(0,t.jsx)(e.code,{children:"map"})," \u5BB9\u5668\uFF0C\u6700\u5E38\u7528\u7684\u6570\u636E\u7ED3\u6784\u3002\u8BE5\u6A21\u5757\u5305\u542B\u591A\u4E2A\u6570\u636E\u7ED3\u6784\u7684 ",(0,t.jsx)(e.code,{children:"map"})," \u5BB9\u5668\uFF1A ",(0,t.jsx)(e.code,{children:"HashMap"}),"\u3001 ",(0,t.jsx)(e.code,{children:"TreeMap"})," \u548C ",(0,t.jsx)(e.code,{children:"ListMap"}),"\u3002"]}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u7C7B\u578B"}),(0,t.jsx)(e.th,{children:"\u6570\u636E\u7ED3\u6784"}),(0,t.jsx)(e.th,{children:"\u5E73\u5747\u590D\u6742\u5EA6"}),(0,t.jsx)(e.th,{children:"\u652F\u6301\u6392\u5E8F"}),(0,t.jsx)(e.th,{children:"\u6709\u5E8F\u904D\u5386"}),(0,t.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"HashMap"})}),(0,t.jsx)(e.td,{children:"\u54C8\u5E0C\u8868"}),(0,t.jsx)(e.td,{children:"O(1)"}),(0,t.jsx)(e.td,{children:"\u5426"}),(0,t.jsx)(e.td,{children:"\u5426"}),(0,t.jsx)(e.td,{children:"\u9AD8\u6027\u80FD\u8BFB\u5199\u64CD\u4F5C\uFF0C\u5185\u5B58\u5360\u7528\u8F83\u9AD8\uFF0C\u968F\u673A\u904D\u5386"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"ListMap"})}),(0,t.jsx)(e.td,{children:"\u54C8\u5E0C\u8868+\u53CC\u5411\u94FE\u8868"}),(0,t.jsx)(e.td,{children:"O(2)"}),(0,t.jsx)(e.td,{children:"\u5426"}),(0,t.jsx)(e.td,{children:"\u662F"}),(0,t.jsx)(e.td,{children:"\u652F\u6301\u6309\u7167\u5199\u5165\u987A\u5E8F\u904D\u5386\uFF0C\u5185\u5B58\u5360\u7528\u8F83\u9AD8"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"TreeMap"})}),(0,t.jsx)(e.td,{children:"\u7EA2\u9ED1\u6811"}),(0,t.jsx)(e.td,{children:"O(log N)"}),(0,t.jsx)(e.td,{children:"\u662F"}),(0,t.jsx)(e.td,{children:"\u662F"}),(0,t.jsx)(e.td,{children:"\u5185\u5B58\u5360\u7528\u7D27\u51D1\uFF0C\u652F\u6301\u952E\u540D\u6392\u5E8F\u53CA\u6709\u5E8F\u904D\u5386"})]})]})]}),"\n",(0,t.jsxs)(e.p,{children:["\u6B64\u5916\uFF0C ",(0,t.jsx)(e.code,{children:"gmap"})," \u6A21\u5757\u652F\u6301\u591A\u79CD\u4EE5\u54C8\u5E0C\u8868\u4E3A\u57FA\u7840\u6570\u636E\u7ED3\u6784\u7684\u5E38\u89C1\u7C7B\u578B ",(0,t.jsx)(e.code,{children:"map"})," \u5B9A\u4E49\uFF1A ",(0,t.jsx)(e.code,{children:"IntIntMap"}),"\u3001 ",(0,t.jsx)(e.code,{children:"IntStrMap"}),"\u3001 ",(0,t.jsx)(e.code,{children:"IntAnyMap"}),"\u3001 ",(0,t.jsx)(e.code,{children:"StrIntMap"}),"\u3001 ",(0,t.jsx)(e.code,{children:"StrStrMap"}),"\u3001 ",(0,t.jsx)(e.code,{children:"StrAnyMap"}),"\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u4F7F\u7528\u573A\u666F"}),"\uFF1A"]}),"\n",(0,t.jsxs)(e.p,{children:["\u4EFB\u4F55 ",(0,t.jsx)(e.code,{children:"map"}),"/\u54C8\u5E0C\u8868/\u5173\u8054\u6570\u7EC4\u4F7F\u7528\u573A\u666F\uFF0C\u5C24\u5176\u662F\u5E76\u53D1\u5B89\u5168\u573A\u666F\u4E2D\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u4F7F\u7528\u65B9\u5F0F"}),"\uFF1A"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-go",children:'import "github.com/gogf/gf/container/gmap"\n\n'})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u63A5\u53E3\u6587\u6863"}),"\uFF1A"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://godoc.org/github.com/gogf/gf/container/gmap",children:"https://godoc.org/github.com/gogf/gf/container/gmap"})}),"\n",(0,t.jsx)(e.h2,{id:"\u5E76\u53D1\u5B89\u5168",children:"\u5E76\u53D1\u5B89\u5168"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"gmap"})," \u652F\u6301\u5E76\u53D1\u5B89\u5168\u9009\u9879\u5F00\u5173\uFF0C\u5728\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u662F ",(0,t.jsx)(e.code,{children:"\u975E\u5E76\u53D1\u5B89\u5168"})," \u7684\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u9009\u62E9\u5F00\u542F ",(0,t.jsx)(e.code,{children:"gmap"})," \u7684\u5E76\u53D1\u5B89\u5168\u7279\u6027(\u4F20\u9012\u521D\u59CB\u5316\u5F00\u5173\u53C2\u6570 ",(0,t.jsx)(e.code,{children:"safe"})," \u53C2\u6570\u503C\u4E3A ",(0,t.jsx)(e.code,{children:"true"}),", \u5FC5\u987B\u5728\u521D\u59CB\u5316\u65F6\u8BBE\u5B9A\uFF0C\u4E0D\u80FD\u8FD0\u884C\u65F6\u52A8\u6001\u8BBE\u5B9A)\u3002\u5982\uFF1A"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-go",children:"m := gmap.New(true)\n\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u4E0D\u4EC5\u4EC5\u662F ",(0,t.jsx)(e.code,{children:"gmap"})," \u6A21\u5757\uFF0C ",(0,t.jsx)(e.code,{children:"goframe"})," \u6846\u67B6\u7684\u5176\u4ED6\u5E76\u53D1\u5B89\u5168\u6570\u636E\u7ED3\u6784\u4E5F\u652F\u6301\u5E76\u53D1\u5B89\u5168\u7279\u6027\u5F00\u5173\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,t.jsx)(e.h3,{id:"\u57FA\u672C\u4F7F\u7528",children:"\u57FA\u672C\u4F7F\u7528"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/container/gmap"\n)\n\nfunc main() {\n    // \u521B\u5EFA\u4E00\u4E2A\u9ED8\u8BA4\u7684gmap\u5BF9\u8C61\uFF0C\n    // \u9ED8\u8BA4\u60C5\u51B5\u4E0B\u8BE5gmap\u5BF9\u8C61\u4E0D\u652F\u6301\u5E76\u53D1\u5B89\u5168\u7279\u6027\uFF0C\n    // \u521D\u59CB\u5316\u65F6\u53EF\u4EE5\u7ED9\u5B9Atrue\u53C2\u6570\u5F00\u542F\u5E76\u53D1\u5B89\u5168\u7279\u6027\u3002\n    m := gmap.New()\n\n    // \u8BBE\u7F6E\u952E\u503C\u5BF9\n    for i := 0; i < 10; i++ {\n        m.Set(i, i)\n    }\n    // \u67E5\u8BE2\u5927\u5C0F\n    fmt.Println(m.Size())\n    // \u6279\u91CF\u8BBE\u7F6E\u952E\u503C\u5BF9(\u4E0D\u540C\u7684\u6570\u636E\u7C7B\u578B\u5BF9\u8C61\u53C2\u6570\u4E0D\u540C)\n    m.Sets(map[interface{}]interface{}{\n        10 : 10,\n        11 : 11,\n    })\n    fmt.Println(m.Size())\n\n    // \u67E5\u8BE2\u662F\u5426\u5B58\u5728\n    fmt.Println(m.Contains(1))\n\n    // \u67E5\u8BE2\u952E\u503C\n    fmt.Println(m.Get(1))\n\n    // \u5220\u9664\u6570\u636E\u9879\n    m.Remove(9)\n    fmt.Println(m.Size())\n\n    // \u6279\u91CF\u5220\u9664\n    m.Removes([]interface{}{10, 11})\n    fmt.Println(m.Size())\n\n    // \u5F53\u524D\u952E\u540D\u5217\u8868(\u968F\u673A\u6392\u5E8F)\n    fmt.Println(m.Keys())\n    // \u5F53\u524D\u952E\u503C\u5217\u8868(\u968F\u673A\u6392\u5E8F)\n    fmt.Println(m.Values())\n\n    // \u67E5\u8BE2\u952E\u540D\uFF0C\u5F53\u952E\u503C\u4E0D\u5B58\u5728\u65F6\uFF0C\u5199\u5165\u7ED9\u5B9A\u7684\u9ED8\u8BA4\u503C\n    fmt.Println(m.GetOrSet(100, 100))\n\n    // \u5220\u9664\u952E\u503C\u5BF9\uFF0C\u5E76\u8FD4\u56DE\u5BF9\u5E94\u7684\u952E\u503C\n    fmt.Println(m.Remove(100))\n\n    // \u904D\u5386map\n    m.Iterator(func(k interface{}, v interface{}) bool {\n        fmt.Printf("%v:%v ", k, v)\n        return true\n    })\n\n    // \u81EA\u5B9A\u4E49\u5199\u9501\u64CD\u4F5C\n    m.LockFunc(func(m map[interface{}]interface{}) {\n        m[99] = 99\n    })\n\n    // \u81EA\u5B9A\u4E49\u8BFB\u9501\u64CD\u4F5C\n    m.RLockFunc(func(m map[interface{}]interface{}) {\n        fmt.Println(m[99])\n    })\n\n    // \u6E05\u7A7Amap\n    m.Clear()\n\n    // \u5224\u65ADmap\u662F\u5426\u4E3A\u7A7A\n    fmt.Println(m.IsEmpty())\n}\n\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u6267\u884C\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-html",children:"10\n12\ntrue\n1\n11\n9\n[0 1 2 4 6 7 3 5 8]\n[3 5 8 0 1 2 4 6 7]\n100\n100\n3:3 5:5 8:8 7:7 0:0 1:1 2:2 4:4 6:6 99\ntrue\n\n"})}),"\n",(0,t.jsx)(e.h3,{id:"\u6709\u5E8F\u904D\u5386",children:"\u6709\u5E8F\u904D\u5386"}),"\n",(0,t.jsxs)(e.p,{children:["\u6211\u4EEC\u6765\u770B\u4E00\u4E0B\u4E09\u79CD\u4E0D\u540C\u7C7B\u578B ",(0,t.jsx)(e.code,{children:"map"})," \u7684\u6709\u5E8F\u6027\u904D\u5386\u793A\u4F8B\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/frame/g"\n    "github.com/gogf/gf/container/gmap"\n    "github.com/gogf/gf/util/gutil"\n)\n\nfunc main() {\n    array   := g.Slice{2, 3, 1, 5, 4, 6, 8, 7, 9}\n    hashMap := gmap.New(true)\n    listMap := gmap.NewListMap(true)\n    treeMap := gmap.NewTreeMap(gutil.ComparatorInt, true)\n    for _, v := range array {\n        hashMap.Set(v, v)\n    }\n    for _, v := range array {\n        listMap.Set(v, v)\n    }\n    for _, v := range array {\n        treeMap.Set(v, v)\n    }\n    fmt.Println("HashMap   Keys:", hashMap.Keys())\n    fmt.Println("HashMap Values:", hashMap.Values())\n    fmt.Println("ListMap   Keys:", listMap.Keys())\n    fmt.Println("ListMap Values:", listMap.Values())\n    fmt.Println("TreeMap   Keys:", treeMap.Keys())\n    fmt.Println("TreeMap Values:", treeMap.Values())\n}\n\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u6267\u884C\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-html",children:"HashMap   Keys: [4 6 8 7 9 2 3 1 5]\nHashMap Values: [6 8 4 3 1 5 7 9 2]\nListMap   Keys: [2 3 1 5 4 6 8 7 9]\nListMap Values: [2 3 1 5 4 6 8 7 9]\nTreeMap   Keys: [1 2 3 4 5 6 7 8 9]\nTreeMap Values: [1 2 3 4 5 6 7 8 9]\n\n"})}),"\n",(0,t.jsxs)(e.h3,{id:"filteremptyfilternil-\u7A7A\u503C\u8FC7\u6EE4",children:[(0,t.jsx)(e.code,{children:"FilterEmpty/FilterNil"})," \u7A7A\u503C\u8FC7\u6EE4"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/container/gmap"\n    "github.com/gogf/gf/frame/g"\n)\n\nfunc main() {\n    m1 := gmap.NewFrom(g.MapAnyAny{\n        "k1": "",\n        "k2": nil,\n        "k3": 0,\n        "k4": 1,\n    })\n    m2 := gmap.NewFrom(g.MapAnyAny{\n        "k1": "",\n        "k2": nil,\n        "k3": 0,\n        "k4": 1,\n    })\n    m1.FilterEmpty()\n    m2.FilterNil()\n    fmt.Println(m1.Map())\n    fmt.Println(m2.Map())\n\n    // Output:\n    // map[k4:1]\n    // map[k1: k3:0 k4:1]\n}\n\n'})}),"\n",(0,t.jsxs)(e.h3,{id:"flip-\u952E\u503C\u5BF9\u53CD\u8F6C",children:[(0,t.jsx)(e.code,{children:"Flip"})," \u952E\u503C\u5BF9\u53CD\u8F6C"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/container/gmap"\n    "github.com/gogf/gf/frame/g"\n)\n\nfunc main() {\n    var m gmap.Map\n    m.Sets(g.MapAnyAny{\n        "k1": "v1",\n        "k2": "v2",\n    })\n    m.Flip()\n    fmt.Println(m.Map())\n\n    // May Output:\n    // map[v1:k1 v2:k2]\n}\n\n'})}),"\n",(0,t.jsxs)(e.h3,{id:"keysvalues-\u952E\u540D\u6570\u503C\u5217\u8868",children:[(0,t.jsx)(e.code,{children:"Keys/Values"})," \u952E\u540D/\u6570\u503C\u5217\u8868"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/container/gmap"\n    "github.com/gogf/gf/frame/g"\n)\n\nfunc main() {\n    var m gmap.Map\n    m.Sets(g.MapAnyAny{\n        "k1": "v1",\n        "k2": "v2",\n        "k3": "v3",\n        "k4": "v4",\n    })\n    fmt.Println(m.Keys())\n    fmt.Println(m.Values())\n\n    // May Output:\n    // [k1 k2 k3 k4]\n    // [v2 v3 v4 v1]\n}\n\n'})}),"\n",(0,t.jsxs)(e.h3,{id:"poppops-\u968F\u673A\u51FA\u6808",children:[(0,t.jsx)(e.code,{children:"Pop/Pops"})," \u968F\u673A\u51FA\u6808"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/container/gmap"\n    "github.com/gogf/gf/frame/g"\n)\n\nfunc main() {\n    var m gmap.Map\n    m.Sets(g.MapAnyAny{\n        "k1": "v1",\n        "k2": "v2",\n        "k3": "v3",\n        "k4": "v4",\n    })\n    fmt.Println(m.Pop())\n    fmt.Println(m.Pops(2))\n    fmt.Println(m.Size())\n\n    // May Output:\n    // k1 v1\n    // map[k2:v2 k4:v4]\n    // 1\n}\n\n'})}),"\n",(0,t.jsxs)(e.h3,{id:"setifnotexist-\u5224\u65AD\u6027\u5199\u5165",children:[(0,t.jsx)(e.code,{children:"SetIfNotExist*"})," \u5224\u65AD\u6027\u5199\u5165"]}),"\n",(0,t.jsxs)(e.p,{children:["\u5224\u65AD\u6027\u5199\u5165\u662F\u6307\u5F53\u6307\u5B9A\u7684\u952E\u540D\u4E0D\u5B58\u5728\u65F6\u5219\u5199\u5165\u5E76\u4E14\u65B9\u6CD5\u8FD4\u56DE ",(0,t.jsx)(e.code,{children:"true"}),"\uFF0C\u5426\u5219\u5FFD\u7565\u5199\u5165\u5E76\u4E14\u65B9\u6CD5\u8FD4\u56DE ",(0,t.jsx)(e.code,{children:"false"}),"\u3002\u76F8\u5173\u65B9\u6CD5\u5982\u4E0B\uFF1A"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"SetIfNotExist"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"SetIfNotExistFunc"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"SetIfNotExistFuncLock"})}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"\u65B9\u6CD5\u5177\u4F53\u63CF\u8FF0\u8BF7\u67E5\u770B\u63A5\u53E3\u6587\u6863\u6216\u6E90\u7801\u6CE8\u91CA\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/container/gmap"\n)\n\nfunc main() {\n    var m gmap.Map\n    fmt.Println(m.SetIfNotExist("k1", "v1"))\n    fmt.Println(m.SetIfNotExist("k1", "v1"))\n    fmt.Println(m.Map())\n\n    // Output:\n    // true\n    // false\n    // map[k1:v1]\n}\n\n'})}),"\n",(0,t.jsxs)(e.h3,{id:"merge-\u5B57\u5178\u8868\u5408\u5E76",children:[(0,t.jsx)(e.code,{children:"Merge"})," \u5B57\u5178\u8868\u5408\u5E76"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/container/gmap"\n)\n\nfunc main() {\n    var m1, m2 gmap.Map\n    m1.Set("key1", "val1")\n    m2.Set("key2", "val2")\n    m1.Merge(&m2)\n    fmt.Println(m1.Map())\n\n    // May Output:\n    // map[key1:val1 key2:val2]\n}\n\n'})}),"\n",(0,t.jsxs)(e.h3,{id:"json-\u5E8F\u5217\u5316\u53CD\u5E8F\u5217",children:[(0,t.jsx)(e.code,{children:"JSON"})," \u5E8F\u5217\u5316/\u53CD\u5E8F\u5217"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"gmap"})," \u6A21\u5757\u4E0B\u7684\u6240\u6709\u5BB9\u5668\u7C7B\u578B\u5747\u5B9E\u73B0\u4E86\u6807\u51C6\u5E93 ",(0,t.jsx)(e.code,{children:"json"})," \u6570\u636E\u683C\u5F0F\u7684\u5E8F\u5217\u5316/\u53CD\u5E8F\u5217\u5316\u63A5\u53E3\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["1. ",(0,t.jsx)(e.code,{children:"Marshal"})]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "encoding/json"\n    "fmt"\n    "github.com/gogf/gf/frame/g"\n\n    "github.com/gogf/gf/container/gmap"\n)\n\nfunc main() {\n    m := gmap.New()\n    m.Sets(g.MapAnyAny{\n        "name":  "john",\n        "score": 100,\n    })\n    b, _ := json.Marshal(m)\n    fmt.Println(string(b))\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u6267\u884C\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\uFF1A"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:'{"name":"john","score":100}\n'})}),"\n",(0,t.jsxs)(e.ol,{start:"2",children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"Unmarshal"})}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "encoding/json"\n    "fmt"\n    "github.com/gogf/gf/container/gmap"\n)\n\nfunc main() {\n    m := gmap.Map{}\n    s := []byte(`{"name":"john","score":100}`)\n    json.Unmarshal(s, &m)\n    fmt.Println(m.Map())\n}\n\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u6267\u884C\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\uFF1A"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"map[name:john score:100]\n\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u6027\u80FD\u6D4B\u8BD5",children:"\u6027\u80FD\u6D4B\u8BD5"}),"\n",(0,t.jsx)(e.h3,{id:"\u5E76\u53D1\u5B89\u5168-1",children:"\u5E76\u53D1\u5B89\u5168"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://github.com/gogf/gf/blob/master/container/gmap/gmap_z_bench_safe_test.go",children:"https://github.com/gogf/gf/blob/master/container/gmap/gmap_z_bench_safe_test.go"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"goos: linux\ngoarch: amd64\nBenchmark_IntIntMap_Set-4               10000000               202 ns/op              15 B/op          0 allocs/op\nBenchmark_IntAnyMap_Set-4               10000000               262 ns/op              29 B/op          1 allocs/op\nBenchmark_IntStrMap_Set-4               10000000               241 ns/op              22 B/op          0 allocs/op\nBenchmark_AnyAnyMap_Set-4                5000000               359 ns/op              40 B/op          2 allocs/op\nBenchmark_StrIntMap_Set-4                5000000               305 ns/op              26 B/op          1 allocs/op\nBenchmark_StrAnyMap_Set-4                5000000               354 ns/op              40 B/op          2 allocs/op\nBenchmark_StrStrMap_Set-4                5000000               338 ns/op              32 B/op          1 allocs/op\nBenchmark_IntIntMap_Get-4               20000000              86.6 ns/op               0 B/op          0 allocs/op\nBenchmark_IntAnyMap_Get-4               30000000              69.7 ns/op               0 B/op          0 allocs/op\nBenchmark_IntStrMap_Get-4               30000000              69.6 ns/op               0 B/op          0 allocs/op\nBenchmark_AnyAnyMap_Get-4               20000000              74.4 ns/op               0 B/op          0 allocs/op\nBenchmark_StrIntMap_Get-4               20000000               116 ns/op               7 B/op          0 allocs/op\nBenchmark_StrAnyMap_Get-4               20000000              92.3 ns/op               7 B/op          0 allocs/op\nBenchmark_StrStrMap_Get-4               20000000              91.9 ns/op               7 B/op          0 allocs/op\n\n"})}),"\n",(0,t.jsx)(e.h3,{id:"\u975E\u5E76\u53D1\u5B89\u5168",children:"\u975E\u5E76\u53D1\u5B89\u5168"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://github.com/gogf/gf/blob/master/container/gmap/gmap_z_bench_unsafe_test.go",children:"https://github.com/gogf/gf/blob/master/container/gmap/gmap_z_bench_unsafe_test.go"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"goos: linux\ngoarch: amd64\nBenchmark_Unsafe_IntIntMap_Set-4        10000000               318 ns/op              62 B/op          0 allocs/op\nBenchmark_Unsafe_IntAnyMap_Set-4         5000000               282 ns/op              57 B/op          1 allocs/op\nBenchmark_Unsafe_IntStrMap_Set-4         5000000               332 ns/op              82 B/op          1 allocs/op\nBenchmark_Unsafe_AnyAnyMap_Set-4         3000000               471 ns/op              73 B/op          2 allocs/op\nBenchmark_Unsafe_StrIntMap_Set-4         5000000               429 ns/op              82 B/op          1 allocs/op\nBenchmark_Unsafe_StrAnyMap_Set-4         3000000               424 ns/op              73 B/op          2 allocs/op\nBenchmark_Unsafe_StrStrMap_Set-4         2000000               515 ns/op              96 B/op          2 allocs/op\nBenchmark_Unsafe_IntIntMap_Get-4        10000000               133 ns/op               0 B/op          0 allocs/op\nBenchmark_Unsafe_IntAnyMap_Get-4        20000000               134 ns/op               0 B/op          0 allocs/op\nBenchmark_Unsafe_IntStrMap_Get-4        10000000               126 ns/op               0 B/op          0 allocs/op\nBenchmark_Unsafe_AnyAnyMap_Get-4        10000000               166 ns/op               0 B/op          0 allocs/op\nBenchmark_Unsafe_StrIntMap_Get-4         5000000               246 ns/op               7 B/op          0 allocs/op\nBenchmark_Unsafe_StrAnyMap_Get-4        10000000               238 ns/op               7 B/op          0 allocs/op\nBenchmark_Unsafe_StrStrMap_Get-4         5000000               229 ns/op               7 B/op          0 allocs/op\n\n"})}),"\n",(0,t.jsx)(e.h3,{id:"\u4E0D\u540C\u7C7B\u578Bmap\u6027\u80FD",children:"\u4E0D\u540C\u7C7B\u578Bmap\u6027\u80FD"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://github.com/gogf/gf/blob/master/container/gmap/gmap_z_bench_maps_test.go",children:"https://github.com/gogf/gf/blob/master/container/gmap/gmap_z_bench_maps_test.go"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"goos: linux\ngoarch: amd64\nBenchmark_HashMap_Set-4                  5000000               349 ns/op              40 B/op          2 allocs/op\nBenchmark_ListMap_Set-4                  3000000               455 ns/op              87 B/op          3 allocs/op\nBenchmark_TreeMap_Set-4                  3000000               481 ns/op              28 B/op          2 allocs/op\nBenchmark_HashMap_Get-4                 30000000              67.8 ns/op               0 B/op          0 allocs/op\nBenchmark_ListMap_Get-4                 20000000              74.5 ns/op               0 B/op          0 allocs/op\nBenchmark_TreeMap_Get-4                 20000000               189 ns/op               8 B/op          1 allocs/op\n\n"})}),"\n",(0,t.jsxs)(e.h3,{id:"gmap-\u4E0E-syncmap-\u6027\u80FD\u6BD4\u8F83",children:[(0,t.jsx)(e.code,{children:"gmap"})," \u4E0E ",(0,t.jsx)(e.code,{children:"sync.Map"})," \u6027\u80FD\u6BD4\u8F83"]}),"\n",(0,t.jsxs)(e.p,{children:["go\u8BED\u8A00\u4ECE ",(0,t.jsx)(e.code,{children:"1.9"})," \u7248\u672C\u5F00\u59CB\u5F15\u5165\u4E86\u5E76\u53D1\u5B89\u5168\u7684 ",(0,t.jsx)(e.code,{children:"sync.Map"}),"\uFF0C\u4F46 ",(0,t.jsx)(e.code,{children:"gmap"})," \u6BD4\u8F83\u4E8E\u6807\u51C6\u5E93\u7684 ",(0,t.jsx)(e.code,{children:"sync.Map"})," \u6027\u80FD\u66F4\u52A0\u4F18\u5F02\uFF0C\u5E76\u4E14\u529F\u80FD\u66F4\u52A0\u4E30\u5BCC\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u6211\u4EEC\u6765\u770B\u770B\u57FA\u51C6\u6D4B\u8BD5\u5BF9\u6BD4\u7ED3\u679C\uFF1A ",(0,t.jsx)(e.a,{href:"https://github.com/gogf/gf/blob/master/container/gmap/gmap_z_bench_syncmap_test.go",children:"https://github.com/gogf/gf/blob/master/container/gmap/gmap_z_bench_syncmap_test.go"})]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"goos: linux\ngoarch: amd64\nBenchmark_GMapSet-4                     10000000               209 ns/op              15 B/op          0 allocs/op\nBenchmark_SyncMapSet-4                   3000000               451 ns/op              67 B/op          3 allocs/op\nBenchmark_GMapGet-4                     30000000              66.4 ns/op               0 B/op          0 allocs/op\nBenchmark_SyncMapGet-4                  30000000              36.0 ns/op               0 B/op          0 allocs/op\nBenchmark_GMapRemove-4                  10000000               207 ns/op               0 B/op          0 allocs/op\nBenchmark_SyncMapRmove-4                30000000              42.4 ns/op               0 B/op          0 allocs/op\n\n"})})]})}function m(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(p,{...n})}):p(n)}},250065:function(n,e,a){a.d(e,{Z:function(){return o},a:function(){return c}});var s=a(667294);let t={},r=s.createContext(t);function c(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);