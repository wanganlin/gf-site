"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["72542"],{927435:function(e,r,n){n.r(r),n.d(r,{metadata:()=>s,contentTitle:()=>l,default:()=>u,assets:()=>i,toc:()=>o,frontMatter:()=>d});var s=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u7ED3\u679C\u5904\u7406/ORM\u7ED3\u679C\u5904\u7406-\u4E3A\u7A7A\u5224\u65AD","title":"ORM\u7ED3\u679C\u5904\u7406-\u4E3A\u7A7A\u5224\u65AD","description":"\u4F7F\u7528GoFrame\u6846\u67B6\u8FDB\u884CORM\u7ED3\u679C\u5904\u7406\u4E2D\u7684\u4E3A\u7A7A\u5224\u65AD\u3002\u5305\u62EC\u5904\u7406\u6570\u636E\u96C6\u5408\u3001\u591A\u6761\u6570\u636E\u8BB0\u5F55\u3001\u6570\u636E\u5B57\u6BB5\u503C\uFF0C\u4EE5\u53CAStruct\u5BF9\u8C61\u548CStruct\u6570\u7EC4\u7684\u7ED3\u679C\u5904\u7406\u65B9\u6CD5\u3002\u901A\u8FC7\u4F7F\u7528IsEmpty\u548CIsNil\u7B49\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u8F7B\u677E\u5730\u5224\u65AD\u67E5\u8BE2\u7ED3\u679C\u662F\u5426\u4E3A\u7A7A\u3002","source":"@site/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u7ED3\u679C\u5904\u7406/ORM\u7ED3\u679C\u5904\u7406-\u4E3A\u7A7A\u5224\u65AD.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u7ED3\u679C\u5904\u7406","slug":"/docs/core/gdb-result-empty-check","permalink":"/docs/core/gdb-result-empty-check","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u7ED3\u679C\u5904\u7406/ORM\u7ED3\u679C\u5904\u7406-\u4E3A\u7A7A\u5224\u65AD.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":1,"frontMatter":{"slug":"/docs/core/gdb-result-empty-check","title":"ORM\u7ED3\u679C\u5904\u7406-\u4E3A\u7A7A\u5224\u65AD","sidebar_position":1,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","ORM","\u7ED3\u679C\u5904\u7406","\u4E3A\u7A7A\u5224\u65AD","\u6570\u636E\u96C6\u5408","\u6570\u636E\u8BB0\u5F55","\u6570\u636E\u5B57\u6BB5\u503C","Struct\u5BF9\u8C61","Struct\u6570\u7EC4"],"description":"\u4F7F\u7528GoFrame\u6846\u67B6\u8FDB\u884CORM\u7ED3\u679C\u5904\u7406\u4E2D\u7684\u4E3A\u7A7A\u5224\u65AD\u3002\u5305\u62EC\u5904\u7406\u6570\u636E\u96C6\u5408\u3001\u591A\u6761\u6570\u636E\u8BB0\u5F55\u3001\u6570\u636E\u5B57\u6BB5\u503C\uFF0C\u4EE5\u53CAStruct\u5BF9\u8C61\u548CStruct\u6570\u7EC4\u7684\u7ED3\u679C\u5904\u7406\u65B9\u6CD5\u3002\u901A\u8FC7\u4F7F\u7528IsEmpty\u548CIsNil\u7B49\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u8F7B\u677E\u5730\u5224\u65AD\u67E5\u8BE2\u7ED3\u679C\u662F\u5426\u4E3A\u7A7A\u3002"},"sidebar":"mainSidebar","previous":{"title":"ORM\u7ED3\u679C\u5904\u7406-\u7ED3\u679C\u7C7B\u578B","permalink":"/docs/core/gdb-result-types"},"next":{"title":"ORM\u7ED3\u679C\u5904\u7406-\u7A7A\u6570\u7EC4\u7ED3\u6784\u8FD4\u56DE","permalink":"/docs/core/gdb-result-empty-array"}}'),c=n("785893"),t=n("250065");let d={slug:"/docs/core/gdb-result-empty-check",title:"ORM\u7ED3\u679C\u5904\u7406-\u4E3A\u7A7A\u5224\u65AD",sidebar_position:1,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","ORM","\u7ED3\u679C\u5904\u7406","\u4E3A\u7A7A\u5224\u65AD","\u6570\u636E\u96C6\u5408","\u6570\u636E\u8BB0\u5F55","\u6570\u636E\u5B57\u6BB5\u503C","Struct\u5BF9\u8C61","Struct\u6570\u7EC4"],description:"\u4F7F\u7528GoFrame\u6846\u67B6\u8FDB\u884CORM\u7ED3\u679C\u5904\u7406\u4E2D\u7684\u4E3A\u7A7A\u5224\u65AD\u3002\u5305\u62EC\u5904\u7406\u6570\u636E\u96C6\u5408\u3001\u591A\u6761\u6570\u636E\u8BB0\u5F55\u3001\u6570\u636E\u5B57\u6BB5\u503C\uFF0C\u4EE5\u53CAStruct\u5BF9\u8C61\u548CStruct\u6570\u7EC4\u7684\u7ED3\u679C\u5904\u7406\u65B9\u6CD5\u3002\u901A\u8FC7\u4F7F\u7528IsEmpty\u548CIsNil\u7B49\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u8F7B\u677E\u5730\u5224\u65AD\u67E5\u8BE2\u7ED3\u679C\u662F\u5426\u4E3A\u7A7A\u3002"},l=void 0,i={},o=[{value:"\u4E00\u3001\u6570\u636E\u96C6\u5408\uFF08\u591A\u6761\uFF09",id:"\u4E00\u6570\u636E\u96C6\u5408\u591A\u6761",level:2},{value:"\u4E8C\u3001\u6570\u636E\u8BB0\u5F55\uFF08\u5355\u6761\uFF09",id:"\u4E8C\u6570\u636E\u8BB0\u5F55\u5355\u6761",level:2},{value:"\u4E09\u3001\u6570\u636E\u5B57\u6BB5\u503C",id:"\u4E09\u6570\u636E\u5B57\u6BB5\u503C",level:2},{value:"\u56DB\u3001\u5B57\u6BB5\u503C\u6570\u7EC4",id:"\u56DB\u5B57\u6BB5\u503C\u6570\u7EC4",level:2},{value:"\u4E94\u3001 <code>Struct</code> \u5BF9\u8C61\uFF08\uD83D\uDD25\u6CE8\u610F\uD83D\uDD25\uFF09",id:"\u4E94-struct-\u5BF9\u8C61\u6CE8\u610F",level:2},{value:"\u516D\u3001 <code>Struct</code> \u6570\u7EC4",id:"\u516D-struct-\u6570\u7EC4",level:2}];function a(e){let r={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r.p,{children:["\u4F7F\u7528 ",(0,c.jsx)(r.code,{children:"GoFrame ORM"})," \u5BF9\u8FD4\u56DE\u7ED3\u679C\u4E3A\u7A7A\u5224\u65AD\u975E\u5E38\u7B80\u4FBF\uFF0C\u5927\u90E8\u5206\u573A\u666F\u4E0B\u76F4\u63A5\u5224\u65AD\u8FD4\u56DE\u7684\u6570\u636E\u662F\u5426\u4E3A ",(0,c.jsx)(r.code,{children:"nil"})," \u6216\u8005\u957F\u5EA6\u4E3A ",(0,c.jsx)(r.code,{children:"0"}),"\uFF0C\u6216\u8005\u4F7F\u7528 ",(0,c.jsx)(r.code,{children:"IsEmpty/IsNil"})," \u65B9\u6CD5\u3002"]}),"\n",(0,c.jsx)(r.h2,{id:"\u4E00\u6570\u636E\u96C6\u5408\u591A\u6761",children:"\u4E00\u3001\u6570\u636E\u96C6\u5408\uFF08\u591A\u6761\uFF09"}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-go",children:'r, err := g.Model("order").Where("status", 1).All()\nif err != nil {\n    return err\n}\nif len(r) == 0 {\n    // \u7ED3\u679C\u4E3A\u7A7A\n}\n'})}),"\n",(0,c.jsxs)(r.p,{children:["\u4E5F\u53EF\u4EE5\u4F7F\u7528 ",(0,c.jsx)(r.code,{children:"IsEmpty"})," \u65B9\u6CD5\uFF1A"]}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-go",children:'r, err := g.Model("order").Where("status", 1).All()\nif err != nil {\n    return err\n}\nif r.IsEmpty() {\n    // \u7ED3\u679C\u4E3A\u7A7A\n}\n'})}),"\n",(0,c.jsx)(r.h2,{id:"\u4E8C\u6570\u636E\u8BB0\u5F55\u5355\u6761",children:"\u4E8C\u3001\u6570\u636E\u8BB0\u5F55\uFF08\u5355\u6761\uFF09"}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-go",children:'r, err := g.Model("order").Where("status", 1).One()\nif err != nil {\n    return err\n}\nif len(r) == 0 {\n    // \u7ED3\u679C\u4E3A\u7A7A\n}\n'})}),"\n",(0,c.jsxs)(r.p,{children:["\u4E5F\u53EF\u4EE5\u4F7F\u7528 ",(0,c.jsx)(r.code,{children:"IsEmpty"})," \u65B9\u6CD5\uFF1A"]}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-go",children:'r, err := g.Model("order").Where("status", 1).One()\nif err != nil {\n    return err\n}\nif r.IsEmpty() {\n    // \u7ED3\u679C\u4E3A\u7A7A\n}\n'})}),"\n",(0,c.jsx)(r.h2,{id:"\u4E09\u6570\u636E\u5B57\u6BB5\u503C",children:"\u4E09\u3001\u6570\u636E\u5B57\u6BB5\u503C"}),"\n",(0,c.jsxs)(r.p,{children:['\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A"\u6CDB\u578B"\u53D8\u91CF\uFF0C\u8FD9\u4E2A\u53EA\u80FD\u4F7F\u7528 ',(0,c.jsx)(r.code,{children:"IsEmpty"})," \u6765\u5224\u65AD\u662F\u5426\u4E3A\u7A7A\u4E86\u3002"]}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-go",children:'r, err := g.Model("order").Where("status", 1).Value()\nif err != nil {\n    return err\n}\nif r.IsEmpty() {\n    // \u7ED3\u679C\u4E3A\u7A7A\n}\n'})}),"\n",(0,c.jsx)(r.h2,{id:"\u56DB\u5B57\u6BB5\u503C\u6570\u7EC4",children:"\u56DB\u3001\u5B57\u6BB5\u503C\u6570\u7EC4"}),"\n",(0,c.jsxs)(r.p,{children:["\u67E5\u8BE2\u8FD4\u56DE\u5B57\u6BB5\u503C\u6570\u7EC4\u672C\u8EAB\u7C7B\u578B\u4E3A ",(0,c.jsx)(r.code,{children:"[]gdb.Value"})," \u7C7B\u578B\uFF0C\u56E0\u6B64\u76F4\u63A5\u5224\u65AD\u957F\u5EA6\u662F\u5426\u4E3A ",(0,c.jsx)(r.code,{children:"0"})," \u5373\u53EF\u3002"]}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-go",children:'// Array/FindArray\nr, err := g.Model("order").Fields("id").Where("status", 1).Array()\nif err != nil {\n    return err\n}\nif len(r) == 0 {\n    // \u7ED3\u679C\u4E3A\u7A7A\n}\n'})}),"\n",(0,c.jsxs)(r.h2,{id:"\u4E94-struct-\u5BF9\u8C61\u6CE8\u610F",children:["\u4E94\u3001 ",(0,c.jsx)(r.code,{children:"Struct"})," \u5BF9\u8C61\uFF08\uD83D\uDD25\u6CE8\u610F\uD83D\uDD25\uFF09"]}),"\n",(0,c.jsxs)(r.p,{children:["\u5173\u4E8E ",(0,c.jsx)(r.code,{children:"Struct"})," \u8F6C\u6362\u5BF9\u8C61\u6765\u8BF4 ",(0,c.jsx)(r.strong,{children:"\u4F1A\u6709\u4E00\u70B9\u4E0D\u4E00\u6837"}),"\uFF0C\u6211\u4EEC\u76F4\u63A5\u770B\u4F8B\u5B50\u5427\u3002"]}),"\n",(0,c.jsxs)(r.p,{children:["\u5F53\u4F20\u9012\u7684\u5BF9\u8C61 ",(0,c.jsx)(r.strong,{children:"\u672C\u8EAB\u5C31\u662F\u4E00\u4E2A\u7A7A\u6307\u9488\u65F6"}),"\uFF0C\u5982\u679C\u67E5\u8BE2\u5230\u6570\u636E\uFF0C\u90A3\u4E48\u4F1A\u5728\u5185\u90E8 ",(0,c.jsx)(r.strong,{children:"\u81EA\u52A8\u521B\u5EFA\u8FD9\u4E2A\u5BF9\u8C61"}),"\uFF1B\u5982\u679C\u6CA1\u6709\u67E5\u8BE2\u5230\u6570\u636E\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u7A7A\u6307\u9488\u4ECD\u65E7\u662F\u4E00\u4E2A\u7A7A\u6307\u9488\uFF0C\u5185\u90E8\u5E76\u4E0D\u4F1A\u505A\u4EFB\u4F55\u5904\u7406\u3002"]}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-go",children:'var user *User\nerr := g.Model("order").Where("status", 1).Scan(&user)\nif err != nil {\n    return err\n}\nif user == nil {\n    // \u7ED3\u679C\u4E3A\u7A7A\n}\n'})}),"\n",(0,c.jsxs)(r.p,{children:["\u5F53\u4F20\u9012\u7684\u5BF9\u8C61 ",(0,c.jsx)(r.strong,{children:"\u672C\u8EAB\u5DF2\u7ECF\u662F\u4E00\u4E2A\u521D\u59CB\u5316\u7684\u5BF9\u8C61"}),"\uFF0C\u5982\u679C\u67E5\u8BE2\u5230\u6570\u636E\uFF0C\u90A3\u4E48\u4F1A\u5728\u5185\u90E8\u5C06\u6570\u636E\u8D4B\u503C\u7ED9\u8FD9\u4E2A\u5BF9\u8C61\uFF1B ",(0,c.jsxs)(r.strong,{children:["\u5982\u679C\u6CA1\u6709\u67E5\u8BE2\u5230\u6570\u636E\uFF0C\u90A3\u4E48\u6B64\u65F6\u5C31\u6CA1\u529E\u6CD5\u5C06\u5BF9\u8C61\u505A ",(0,c.jsx)(r.code,{children:"nil"})," \u5224\u65AD\u7A7A\u7ED3\u679C"]}),"\u3002\u56E0\u6B64 ",(0,c.jsx)(r.code,{children:"ORM"})," \u4F1A\u8FD4\u56DE\u4E00\u4E2A ",(0,c.jsx)(r.code,{children:"sql.ErrNoRows"})," \u9519\u8BEF\uFF0C\u63D0\u9192\u5F00\u53D1\u8005\u6CA1\u6709\u67E5\u8BE2\u5230\u4EFB\u4F55\u6570\u636E\u5E76\u4E14\u5BF9\u8C61\u6CA1\u6709\u505A\u4EFB\u4F55\u8D4B\u503C\uFF0C\u5BF9\u8C61\u7684\u6240\u6709\u5C5E\u6027\u8FD8\u662F\u7ED9\u5B9A\u7684\u521D\u59CB\u5316\u6570\u503C\uFF0C\u4EE5\u4FBF\u5F00\u53D1\u8005\u53EF\u4EE5\u505A\u8FDB\u4E00\u6B65\u7684\u7A7A\u7ED3\u679C\u5224\u65AD\u3002"]}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-go",children:'var user = new(User)\nerr := g.Model("order").Where("status", 1).Scan(&user)\nif err != nil && err != sql.ErrNoRows {\n    return err\n}\nif err == sql.ErrNoRows {\n    // \u7ED3\u679C\u4E3A\u7A7A\n}\n'})}),"\n",(0,c.jsx)(r.admonition,{type:"tip",children:(0,c.jsxs)(r.p,{children:["\u6240\u4EE5\u6211\u4EEC\u63A8\u8350\u5F00\u53D1\u8005\u4E0D\u8981\u4F20\u9012\u4E00\u4E2A\u521D\u59CB\u5316\u8FC7\u540E\u7684\u5BF9\u8C61\u7ED9 ",(0,c.jsx)(r.code,{children:"ORM"}),"\uFF0C\u800C\u662F\u76F4\u63A5\u4F20\u9012\u4E00\u4E2A\u5BF9\u8C61\u7684\u6307\u9488\u7684\u6307\u9488\u7C7B\u578B\uFF08 ",(0,c.jsx)(r.code,{children:"**struct"})," \u7C7B\u578B\uFF09\uFF0C ",(0,c.jsx)(r.code,{children:"ORM"})," \u5185\u90E8\u4F1A\u6839\u636E\u67E5\u8BE2\u7ED3\u679C\u667A\u80FD\u5730\u505A\u81EA\u52A8\u521D\u59CB\u5316\u3002"]})}),"\n",(0,c.jsxs)(r.h2,{id:"\u516D-struct-\u6570\u7EC4",children:["\u516D\u3001 ",(0,c.jsx)(r.code,{children:"Struct"})," \u6570\u7EC4"]}),"\n",(0,c.jsxs)(r.p,{children:["\u5F53\u4F20\u9012\u7684\u5BF9\u8C61\u6570\u7EC4\u672C\u8EAB\u662F\u4E00\u4E2A\u7A7A\u6570\u7EC4\uFF08\u957F\u5EA6\u4E3A ",(0,c.jsx)(r.code,{children:"0"}),"\uFF09\uFF0C\u5982\u679C\u67E5\u8BE2\u5230\u6570\u636E\uFF0C\u90A3\u4E48\u4F1A\u5728\u5185\u90E8\u81EA\u52A8\u8D4B\u503C\u7ED9\u6570\u7EC4\uFF1B\u5982\u679C\u6CA1\u6709\u67E5\u8BE2\u5230\u6570\u636E\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u7A7A\u6570\u7EC4\u4ECD\u65E7\u662F\u4E00\u4E2A\u7A7A\u6570\u7EC4\uFF0C\u5185\u90E8\u5E76\u4E0D\u4F1A\u505A\u4EFB\u4F55\u5904\u7406\u3002"]}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-go",children:'var users []*User\nerr := g.Model("order").Where("status", 1).Scan(&users)\nif err != nil {\n    return err\n}\nif len(users) == 0 {\n    // \u7ED3\u679C\u4E3A\u7A7A\n}\n'})}),"\n",(0,c.jsxs)(r.p,{children:["\u5F53\u4F20\u9012\u7684\u5BF9\u8C61\u6570\u7EC4\u672C\u8EAB\u4E0D\u662F\u7A7A\u6570\u7EC4\uFF0C\u5982\u679C\u67E5\u8BE2\u5230\u6570\u636E\uFF0C\u90A3\u4E48\u4F1A\u5728\u5185\u90E8\u81EA\u52A8\u4ECE\u7D22\u5F15 ",(0,c.jsx)(r.code,{children:"0"})," \u4F4D\u7F6E\u8986\u76D6\u5230\u6570\u7EC4\u4E0A\uFF1B\u5982\u679C\u6CA1\u6709\u67E5\u8BE2\u5230\u6570\u636E\uFF0C\u90A3\u4E48\u6B64\u65F6\u5C31\u6CA1\u529E\u6CD5\u5C06\u6570\u7EC4\u505A\u957F\u5EA6\u4E3A ",(0,c.jsx)(r.code,{children:"0"})," \u5224\u65AD\u7A7A\u7ED3\u679C\u3002\u56E0\u6B64 ",(0,c.jsx)(r.code,{children:"ORM"})," \u4F1A\u8FD4\u56DE\u4E00\u4E2A ",(0,c.jsx)(r.code,{children:"sql.ErrNoRows"})," \u9519\u8BEF\uFF0C\u63D0\u9192\u5F00\u53D1\u8005\u6CA1\u6709\u67E5\u8BE2\u5230\u4EFB\u4F55\u6570\u636E\u5E76\u4E14\u6570\u7EC4\u6CA1\u6709\u505A\u4EFB\u4F55\u8D4B\u503C\uFF0C\u4EE5\u4FBF\u5F00\u53D1\u8005\u53EF\u4EE5\u505A\u8FDB\u4E00\u6B65\u7684\u7A7A\u7ED3\u679C\u5224\u65AD\u3002"]}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-go",children:'var users = make([]*User, 100)\nerr := g.Model("order").Where("status", 1).Scan(&users)\nif err != nil {\n    return err\n}\nif err == sql.ErrNoRows {\n    // \u7ED3\u679C\u4E3A\u7A7A\n}\n'})}),"\n",(0,c.jsx)(r.admonition,{type:"warning",children:(0,c.jsxs)(r.p,{children:["\u7531\u4E8E ",(0,c.jsx)(r.code,{children:"struct"})," \u8F6C\u6362\u5229\u7528\u4E86 ",(0,c.jsx)(r.code,{children:"Golang"})," \u53CD\u5C04\u7279\u6027\uFF0C\u6267\u884C\u6027\u80FD\u4F1A\u6709\u4E00\u5B9A\u7684\u635F\u8017\u3002\u5982\u679C\u60A8\u6D89\u53CA\u5230\u5927\u91CF\u67E5\u8BE2\u7ED3\u679C\u6570\u636E\u7684 ",(0,c.jsx)(r.code,{children:"struct"})," \u6570\u7EC4\u5BF9\u8C61\u8F6C\u6362\uFF0C\u5E76\u4E14\u9700\u8981\u63D0\u9AD8\u8F6C\u6362\u6027\u80FD\uFF0C\u8BF7\u53C2\u8003\u81EA\u5B9A\u4E49\u5B9E\u73B0\u5BF9\u5E94 ",(0,c.jsx)(r.code,{children:"struct"})," \u7684 ",(0,c.jsx)(r.code,{children:"UnmarshalValue"})," \u65B9\u6CD5\uFF1A\n",(0,c.jsx)(r.a,{href:"/docs/core/gconv-unmarshal-value",children:"\u7C7B\u578B\u8F6C\u6362-UnmarshalValue"})]})})]})}function u(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,c.jsx)(r,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return l},a:function(){return d}});var s=n(667294);let c={},t=s.createContext(c);function d(e){let r=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);