"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["35775"],{799860:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>d,default:()=>g,assets:()=>i,toc:()=>o,frontMatter:()=>a});var r=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u6821\u9A8C/\u6570\u636E\u6821\u9A8C-\u53C2\u6570\u7C7B\u578B/\u6570\u636E\u6821\u9A8C-Struct\u6821\u9A8C/Struct\u6821\u9A8C-\u57FA\u672C\u4F7F\u7528","title":"Struct\u6821\u9A8C-\u57FA\u672C\u4F7F\u7528","description":"\u4F7F\u7528GoFrame\u6846\u67B6\u8FDB\u884CStruct\u7C7B\u578B\u6570\u636E\u7684\u6821\u9A8C\uFF0C\u5305\u62EC\u5BF9\u6821\u9A8Ctag\u89C4\u5219\u7684\u8BE6\u7EC6\u8BF4\u660E\u4EE5\u53CA\u4E0D\u540C\u7C7B\u578B\u7684\u6570\u636E\u6821\u9A8C\u65B9\u6CD5\uFF0C\u5982\u57FA\u672C\u6821\u9A8C\u3001\u4F7F\u7528map\u81EA\u5B9A\u4E49\u89C4\u5219\u3001\u4EE5\u53CA\u7ED3\u6784\u4F53\u7684\u9012\u5F52\u6821\u9A8C\u793A\u4F8B\u3002\u901A\u8FC7\u793A\u4F8B\u4EE3\u7801\u5C55\u793A\u5982\u4F55\u8BBE\u7F6E\u5C5E\u6027\u522B\u540D\u548C\u81EA\u5B9A\u4E49\u9519\u8BEF\u63D0\u793A\u4FE1\u606F\uFF0C\u5B9E\u73B0\u5BF9struct\u5BF9\u8C61\u4E2D\u4E0D\u540C\u5C5E\u6027\u7684\u590D\u6742\u6821\u9A8C\u903B\u8F91\u3002","source":"@site/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u6821\u9A8C/\u6570\u636E\u6821\u9A8C-\u53C2\u6570\u7C7B\u578B/\u6570\u636E\u6821\u9A8C-Struct\u6821\u9A8C/Struct\u6821\u9A8C-\u57FA\u672C\u4F7F\u7528.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u6821\u9A8C/\u6570\u636E\u6821\u9A8C-\u53C2\u6570\u7C7B\u578B/\u6570\u636E\u6821\u9A8C-Struct\u6821\u9A8C","slug":"/docs/core/gvalid-parameter-type-struct-example","permalink":"/docs/core/gvalid-parameter-type-struct-example","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u6821\u9A8C/\u6570\u636E\u6821\u9A8C-\u53C2\u6570\u7C7B\u578B/\u6570\u636E\u6821\u9A8C-Struct\u6821\u9A8C/Struct\u6821\u9A8C-\u57FA\u672C\u4F7F\u7528.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731511511000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/core/gvalid-parameter-type-struct-example","title":"Struct\u6821\u9A8C-\u57FA\u672C\u4F7F\u7528","sidebar_position":0,"hide_title":true,"keywords":["Struct\u6821\u9A8C","GoFrame\u6846\u67B6","gvalid","\u53C2\u6570\u6821\u9A8C","\u5C5E\u6027\u522B\u540D","\u6821\u9A8C\u89C4\u5219","\u94FE\u5F0F\u64CD\u4F5C","\u5D4C\u5957\u6821\u9A8C","\u9012\u5F52\u6821\u9A8C","Go"],"description":"\u4F7F\u7528GoFrame\u6846\u67B6\u8FDB\u884CStruct\u7C7B\u578B\u6570\u636E\u7684\u6821\u9A8C\uFF0C\u5305\u62EC\u5BF9\u6821\u9A8Ctag\u89C4\u5219\u7684\u8BE6\u7EC6\u8BF4\u660E\u4EE5\u53CA\u4E0D\u540C\u7C7B\u578B\u7684\u6570\u636E\u6821\u9A8C\u65B9\u6CD5\uFF0C\u5982\u57FA\u672C\u6821\u9A8C\u3001\u4F7F\u7528map\u81EA\u5B9A\u4E49\u89C4\u5219\u3001\u4EE5\u53CA\u7ED3\u6784\u4F53\u7684\u9012\u5F52\u6821\u9A8C\u793A\u4F8B\u3002\u901A\u8FC7\u793A\u4F8B\u4EE3\u7801\u5C55\u793A\u5982\u4F55\u8BBE\u7F6E\u5C5E\u6027\u522B\u540D\u548C\u81EA\u5B9A\u4E49\u9519\u8BEF\u63D0\u793A\u4FE1\u606F\uFF0C\u5B9E\u73B0\u5BF9struct\u5BF9\u8C61\u4E2D\u4E0D\u540C\u5C5E\u6027\u7684\u590D\u6742\u6821\u9A8C\u903B\u8F91\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u6570\u636E\u6821\u9A8C-Struct\u6821\u9A8C","permalink":"/docs/core/gvalid-parameter-type-struct"},"next":{"title":"Struct\u6821\u9A8C-Assoc\u5173\u8054","permalink":"/docs/core/gvalid-parameter-type-struct-assoc"}}'),t=s("785893"),c=s("250065");let a={slug:"/docs/core/gvalid-parameter-type-struct-example",title:"Struct\u6821\u9A8C-\u57FA\u672C\u4F7F\u7528",sidebar_position:0,hide_title:!0,keywords:["Struct\u6821\u9A8C","GoFrame\u6846\u67B6","gvalid","\u53C2\u6570\u6821\u9A8C","\u5C5E\u6027\u522B\u540D","\u6821\u9A8C\u89C4\u5219","\u94FE\u5F0F\u64CD\u4F5C","\u5D4C\u5957\u6821\u9A8C","\u9012\u5F52\u6821\u9A8C","Go"],description:"\u4F7F\u7528GoFrame\u6846\u67B6\u8FDB\u884CStruct\u7C7B\u578B\u6570\u636E\u7684\u6821\u9A8C\uFF0C\u5305\u62EC\u5BF9\u6821\u9A8Ctag\u89C4\u5219\u7684\u8BE6\u7EC6\u8BF4\u660E\u4EE5\u53CA\u4E0D\u540C\u7C7B\u578B\u7684\u6570\u636E\u6821\u9A8C\u65B9\u6CD5\uFF0C\u5982\u57FA\u672C\u6821\u9A8C\u3001\u4F7F\u7528map\u81EA\u5B9A\u4E49\u89C4\u5219\u3001\u4EE5\u53CA\u7ED3\u6784\u4F53\u7684\u9012\u5F52\u6821\u9A8C\u793A\u4F8B\u3002\u901A\u8FC7\u793A\u4F8B\u4EE3\u7801\u5C55\u793A\u5982\u4F55\u8BBE\u7F6E\u5C5E\u6027\u522B\u540D\u548C\u81EA\u5B9A\u4E49\u9519\u8BEF\u63D0\u793A\u4FE1\u606F\uFF0C\u5B9E\u73B0\u5BF9struct\u5BF9\u8C61\u4E2D\u4E0D\u540C\u5C5E\u6027\u7684\u590D\u6742\u6821\u9A8C\u903B\u8F91\u3002"},d=void 0,i={},o=[{value:"\u6821\u9A8C <code>tag</code> \u89C4\u5219\u4ECB\u7ECD",id:"\u6821\u9A8C-tag-\u89C4\u5219\u4ECB\u7ECD",level:2},{value:"\u6821\u9A8C <code>tag</code> \u4F7F\u7528\u793A\u4F8B",id:"\u6821\u9A8C-tag-\u4F7F\u7528\u793A\u4F8B",level:2},{value:"\u4F7F\u7528 <code>map</code> \u6307\u5B9A\u6821\u9A8C\u89C4\u5219",id:"\u4F7F\u7528-map-\u6307\u5B9A\u6821\u9A8C\u89C4\u5219",level:2},{value:"\u7ED3\u6784\u4F53\u9012\u5F52\u6821\u9A8C\uFF08\u5D4C\u5957\u6821\u9A8C\uFF09",id:"\u7ED3\u6784\u4F53\u9012\u5F52\u6821\u9A8C\u5D4C\u5957\u6821\u9A8C",level:2}];function l(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Struct"})," \u6821\u9A8C\u5E38\u4F7F\u7528\u4EE5\u4E0B\u94FE\u5F0F\u64CD\u4F5C\u65B9\u5F0F\uFF1A"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"g.Validator().Data(object).Run(ctx)\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"\u6821\u9A8C-tag-\u89C4\u5219\u4ECB\u7ECD",children:["\u6821\u9A8C ",(0,t.jsx)(n.code,{children:"tag"})," \u89C4\u5219\u4ECB\u7ECD"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u5F00\u59CB\u4ECB\u7ECD ",(0,t.jsx)(n.code,{children:"Struct"})," \u53C2\u6570\u7C7B\u578B\u6821\u9A8C\u4E4B\u524D\uFF0C\u6211\u4EEC\u6765\u4ECB\u7ECD\u4E00\u4E0B\u5E38\u7528\u7684\u6821\u9A8C ",(0,t.jsx)(n.code,{children:"tag"})," \u89C4\u5219\u3002\u89C4\u5219\u5982\u4E0B\uFF1A"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[\u5C5E\u6027\u522B\u540D@]\u6821\u9A8C\u89C4\u5219[#\u9519\u8BEF\u63D0\u793A]\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5176\u4E2D\uFF1A"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"\u5C5E\u6027\u522B\u540D"})," \u548C ",(0,t.jsx)(n.code,{children:"\u9519\u8BEF\u63D0\u793A"})," \u4E3A ",(0,t.jsx)(n.strong,{children:"\u975E\u5FC5\u9700\u5B57\u6BB5"}),"\uFF0C ",(0,t.jsx)(n.code,{children:"\u6821\u9A8C\u89C4\u5219"})," \u662F ",(0,t.jsx)(n.strong,{children:"\u5FC5\u9700\u5B57\u6BB5\u3002"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"\u5C5E\u6027\u522B\u540D"})," \u975E\u5FC5\u9700\u5B57\u6BB5\uFF0C\u6307\u5B9A\u5728\u6821\u9A8C\u4E2D\u4F7F\u7528\u7684\u5BF9\u5E94 ",(0,t.jsx)(n.code,{children:"struct"})," \u5C5E\u6027\u7684\u522B\u540D\uFF0C\u540C\u65F6\u6821\u9A8C\u540E\u8FD4\u56DE\u7684 ",(0,t.jsx)(n.code,{children:"error"})," \u5BF9\u8C61\u4E2D\u7684\u4E5F\u5C06\u4F7F\u7528\u8BE5\u522B\u540D\u8FD4\u56DE\u3002\u4F8B\u5982\u5728\u5904\u7406\u8BF7\u6C42\u8868\u5355\u65F6\u6BD4\u8F83\u6709\u7528\uFF0C\u56E0\u4E3A\u8868\u5355\u7684\u5B57\u6BB5\u540D\u79F0\u5F80\u5F80\u548C ",(0,t.jsx)(n.code,{children:"struct"})," \u7684\u5C5E\u6027\u540D\u79F0\u4E0D\u4E00\u81F4\u3002\u5927\u90E8\u5206\u573A\u666F\u4E0B\u4E0D\u9700\u8981\u8BBE\u7F6E\u5C5E\u6027\u522B\u540D\uFF0C\u9ED8\u8BA4\u76F4\u63A5\u4F7F\u7528\u5C5E\u6027\u540D\u79F0\u5373\u53EF\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"\u6821\u9A8C\u89C4\u5219"})," \u5219\u4E3A\u5F53\u524D\u5C5E\u6027\u7684\u6821\u9A8C\u89C4\u5219\uFF0C\u591A\u4E2A\u6821\u9A8C\u89C4\u5219\u8BF7\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"|"})," \u7B26\u53F7\u7EC4\u5408\uFF0C\u4F8B\u5982\uFF1A ",(0,t.jsx)(n.code,{children:"required|between:1,100"}),"\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"\u9519\u8BEF\u63D0\u793A"})," \u975E\u5FC5\u9700\u5B57\u6BB5\uFF0C\u8868\u793A\u81EA\u5B9A\u4E49\u7684\u9519\u8BEF\u63D0\u793A\u4FE1\u606F\uFF0C\u5F53\u89C4\u5219\u6821\u9A8C\u65F6\u5BF9\u9ED8\u8BA4\u7684\u9519\u8BEF\u63D0\u793A\u4FE1\u606F\u8FDB\u884C\u8986\u76D6\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"\u6821\u9A8C-tag-\u4F7F\u7528\u793A\u4F8B",children:["\u6821\u9A8C ",(0,t.jsx)(n.code,{children:"tag"})," \u4F7F\u7528\u793A\u4F8B"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\ntype User struct {\n    Uid   int    `v:"uid      @integer|min:1#|\u8BF7\u8F93\u5165\u7528\u6237ID"`\n    Name  string `v:"name     @required|length:6,30#\u8BF7\u8F93\u5165\u7528\u6237\u540D\u79F0|\u7528\u6237\u540D\u79F0\u957F\u5EA6\u975E\u6CD5"`\n    Pass1 string `v:"password1@required|password3"`\n    Pass2 string `v:"password2@required|password3|same:Pass1#|\u5BC6\u7801\u683C\u5F0F\u4E0D\u5408\u6CD5|\u4E24\u6B21\u5BC6\u7801\u4E0D\u4E00\u81F4\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165"`\n}\n\nfunc main() {\n    var (\n        ctx  = gctx.New()\n        user = &User{\n            Name:  "john",\n            Pass1: "Abc123!@#",\n            Pass2: "123",\n        }\n    )\n\n    err := g.Validator().Data(user).Run(ctx)\n    if err != nil {\n        g.Dump(err.Items())\n    }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u53EF\u4EE5\u770B\u5230\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5BF9\u5728 ",(0,t.jsx)(n.code,{children:"struct"})," \u5B9A\u4E49\u65F6\u4F7F\u7528\u4E86 ",(0,t.jsx)(n.code,{children:"gvalid"})," \u7684 ",(0,t.jsx)(n.code,{children:"gvalid tag"})," \u6765\u7ED1\u5B9A\u6821\u9A8C\u7684\u89C4\u5219\u53CA\u9519\u8BEF\u63D0\u793A\u4FE1\u606F\u3002\u5728\u6B64\u793A\u4F8B\u4EE3\u7801\u4E2D\uFF0C ",(0,t.jsx)(n.code,{children:"same:password1"})," \u89C4\u5219\u540C\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"same:Pass1"})," \u89C4\u5219\u662F\u4E00\u6837\u7684\u6548\u679C\u3002 ",(0,t.jsxs)(n.strong,{children:["\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5728\u6570\u636E\u6821\u9A8C\u4E2D\uFF0C\u53EF\u4EE5\u540C\u65F6\u4F7F\u7528\u539F\u6709\u7684 ",(0,t.jsx)(n.code,{children:"struct"})," \u5C5E\u6027\u540D\u79F0\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u522B\u540D\u3002\u4F46\u662F\uFF0C\u8FD4\u56DE\u7684\u7ED3\u679C\u4E2D\u53EA\u4F1A\u4F7F\u7528\u522B\u540D\u8FD4\u56DE\uFF0C\u8FD9\u4E5F\u662F\u522B\u540D\u6700\u5927\u7684\u7528\u9014\u3002"]})," \u6B64\u5916\uFF0C\u5728\u5BF9 ",(0,t.jsx)(n.code,{children:"struct"})," \u5BF9\u8C61\u8FDB\u884C\u6821\u9A8C\u65F6\uFF0C\u4E5F\u53EF\u4EE5\u4F20\u9012\u6821\u9A8C\u6216\u8005\u548C\u9519\u8BEF\u63D0\u793A\u53C2\u6570\uFF0C\u8FD9\u4E2A\u65F6\u5019\u4F1A\u8986\u76D6 ",(0,t.jsx)(n.code,{children:"struct"})," \u5728\u5B9A\u4E49\u65F6\u7ED1\u5B9A\u7684\u5BF9\u5E94\u53C2\u6570\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u4EE5\u4E0A\u793A\u4F8B\u6267\u884C\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'[\n    {\n        "uid": {\n            "min": "\u8BF7\u8F93\u5165\u7528\u6237ID",\n        },\n    },\n    {\n        "name": {\n            "length": "\u7528\u6237\u540D\u79F0\u957F\u5EA6\u975E\u6CD5",\n        },\n    },\n    {\n        "password2": {\n            "password3": "\u5BC6\u7801\u683C\u5F0F\u4E0D\u5408\u6CD5",\n        },\n    },\n]\n'})}),"\n",(0,t.jsxs)(n.h2,{id:"\u4F7F\u7528-map-\u6307\u5B9A\u6821\u9A8C\u89C4\u5219",children:["\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"map"})," \u6307\u5B9A\u6821\u9A8C\u89C4\u5219"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    type User struct {\n        Age  int\n        Name string\n    }\n    var (\n        ctx   = gctx.New()\n        user  = User{Name: "john"}\n        rules = map[string]string{\n            "Name": "required|length:6,16",\n            "Age":  "between:18,30",\n        }\n        messages = map[string]interface{}{\n            "Name": map[string]string{\n                "required": "\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",\n                "length":   "\u540D\u79F0\u957F\u5EA6\u4E3A{min}\u5230{max}\u4E2A\u5B57\u7B26",\n            },\n            "Age": "\u5E74\u9F84\u4E3A18\u523030\u5468\u5C81",\n        }\n    )\n\n    err := g.Validator().Rules(rules).Messages(messages).Data(user).Run(ctx)\n    if err != nil {\n        g.Dump(err.Maps())\n    }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u4EE5\u4E0A\u793A\u4F8B\u4E2D\uFF0C ",(0,t.jsx)(n.code,{children:"Age"})," \u5C5E\u6027\u7531\u4E8E\u9ED8\u8BA4\u503C ",(0,t.jsx)(n.code,{children:"0"})," \u7684\u5B58\u5728\uFF0C\u56E0\u6B64\u4F1A\u5F15\u8D77 ",(0,t.jsx)(n.code,{children:"required"})," \u89C4\u5219\u7684\u5931\u6548\uFF0C\u56E0\u6B64\u8FD9\u91CC\u6CA1\u6709\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"required"})," \u89C4\u5219\u800C\u662F\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"between"})," \u89C4\u5219\u6765\u8FDB\u884C\u6821\u9A8C\u3002\u793A\u4F8B\u4EE3\u7801\u6267\u884C\u540E\uFF0C\u7EC8\u7AEF\u8F93\u51FA\uFF1A"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'{\n    "Age": {\n        "between": "\u5E74\u9F84\u4E3A18\u523030\u5468\u5C81"\n    },\n    "Name": {\n        "length": "\u540D\u79F0\u957F\u5EA6\u4E3A6\u523016\u4E2A\u5B57\u7B26"\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u7ED3\u6784\u4F53\u9012\u5F52\u6821\u9A8C\u5D4C\u5957\u6821\u9A8C",children:"\u7ED3\u6784\u4F53\u9012\u5F52\u6821\u9A8C\uFF08\u5D4C\u5957\u6821\u9A8C\uFF09"}),"\n",(0,t.jsxs)(n.p,{children:["\u652F\u6301\u9012\u5F52\u7684\u7ED3\u6784\u4F53\u6821\u9A8C\uFF08\u5D4C\u5957\u6821\u9A8C\uFF09\uFF0C\u5373\u5982\u679C\u5C5E\u6027\u4E5F\u662F\u7ED3\u6784\u4F53\uFF08\u4E5F\u652F\u6301\u5D4C\u5957\u7ED3\u6784\u4F53\uFF08 ",(0,t.jsx)(n.code,{children:"embedded"}),"\uFF09\uFF09\uFF0C\u90A3\u4E48\u5C06\u4F1A\u81EA\u52A8\u5C06\u8BE5\u5C5E\u6027\u6267\u884C\u9012\u5F52\u6821\u9A8C\u3002\u4F7F\u7528\u793A\u4F8B\uFF1A"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    type Pass struct {\n        Pass1 string `v:"password1@required|same:password2#\u8BF7\u8F93\u5165\u60A8\u7684\u5BC6\u7801|\u60A8\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4"`\n        Pass2 string `v:"password2@required|same:password1#\u8BF7\u518D\u6B21\u8F93\u5165\u60A8\u7684\u5BC6\u7801|\u60A8\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4"`\n    }\n    type User struct {\n        Pass\n        Id   int\n        Name string `valid:"name@required#\u8BF7\u8F93\u5165\u60A8\u7684\u59D3\u540D"`\n    }\n    var (\n        ctx  = gctx.New()\n        user = &User{\n            Name: "john",\n            Pass: Pass{\n                Pass1: "1",\n                Pass2: "2",\n            },\n        }\n    )\n    err := g.Validator().Data(user).Run(ctx)\n    g.Dump(err.Maps())\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u6216\u8005\u5C5E\u6027\u4E3A\u5D4C\u5957\u7ED3\u6784\u4F53\uFF08 ",(0,t.jsx)(n.code,{children:"embedded"}),"\uFF09\u7684\u573A\u666F\uFF1A"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    type Pass struct {\n        Pass1 string `v:"password1@required|same:password2#\u8BF7\u8F93\u5165\u60A8\u7684\u5BC6\u7801|\u60A8\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4"`\n        Pass2 string `v:"password2@required|same:password1#\u8BF7\u518D\u6B21\u8F93\u5165\u60A8\u7684\u5BC6\u7801|\u60A8\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4"`\n    }\n    type User struct {\n        Id   int\n        Name string `valid:"name@required#\u8BF7\u8F93\u5165\u60A8\u7684\u59D3\u540D"`\n        Pass Pass\n    }\n    var (\n        ctx  = gctx.New()\n        user = &User{\n            Name: "john",\n            Pass: Pass{\n                Pass1: "1",\n                Pass2: "2",\n            },\n        }\n    )\n    err := g.Validator().Data(user).Run(ctx)\n    g.Dump(err.Maps())\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u6267\u884C\u540E\uFF0C\u7EC8\u7AEF\u8F93\u51FA\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'{\n    "password1": {\n        "same": "\u60A8\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4",\n    },\n    "password2": {\n        "same": "\u60A8\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4",\n    },\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u66F4\u591A\u9012\u5F52\u6821\u9A8C\u7684\u4ECB\u7ECD\uFF0C\u8BF7\u53C2\u8003\u7AE0\u8282\uFF1A ",(0,t.jsx)(n.a,{href:"/docs/core/gvalid-recursive-validating",children:"\u6570\u636E\u6821\u9A8C-\u9012\u5F52\u6821\u9A8C"})]})]})}function g(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return a}});var r=s(667294);let t={},c=r.createContext(t);function a(e){let n=r.useContext(c);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);