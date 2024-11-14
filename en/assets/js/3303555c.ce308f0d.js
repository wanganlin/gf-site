"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["10966"],{350310:function(n,e,i){i.r(e),i.d(e,{metadata:()=>t,contentTitle:()=>c,default:()=>a,assets:()=>l,toc:()=>u,frontMatter:()=>o});var t=JSON.parse('{"id":"docs/\u7EC4\u4EF6\u5217\u8868/\u5B9E\u7528\u5DE5\u5177/\u5DE5\u5177\u65B9\u6CD5-gutil","title":"\u5DE5\u5177\u65B9\u6CD5-gutil","description":"gutil\u7EC4\u4EF6\u662FGoFrame\u6846\u67B6\u4E2D\u7528\u4E8E\u5C01\u88C5\u5E38\u7528\u5F00\u53D1\u5DE5\u5177\u65B9\u6CD5\u7684\u6A21\u5757\uFF0C\u63D0\u4F9B\u4E86\u4E00\u7CFB\u5217\u4FBF\u5229\u7684\u51FD\u6570\uFF0C\u652F\u6301\u6570\u636E\u7ED3\u6784\u7684\u53CB\u597D\u8F93\u51FA\uFF0C\u5982Dump\u548CDumpWithType\u3002\u5F00\u53D1\u8005\u53EF\u4EE5\u901A\u8FC7github\u5E93\u5F15\u5165gutil\u7EC4\u4EF6\uFF0C\u4EE5\u63D0\u9AD8Go\u8BED\u8A00\u9879\u76EE\u5F00\u53D1\u6548\u7387\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u7EC4\u4EF6\u5217\u8868/\u5B9E\u7528\u5DE5\u5177/\u5DE5\u5177\u65B9\u6CD5-gutil.md","sourceDirName":"docs/\u7EC4\u4EF6\u5217\u8868/\u5B9E\u7528\u5DE5\u5177","slug":"/docs/components/util-gutil","permalink":"/en/2.7.x/docs/components/util-gutil","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u7EC4\u4EF6\u5217\u8868/\u5B9E\u7528\u5DE5\u5177/\u5DE5\u5177\u65B9\u6CD5-gutil.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":6,"frontMatter":{"slug":"/docs/components/util-gutil","title":"\u5DE5\u5177\u65B9\u6CD5-gutil","sidebar_position":6,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","gutil","\u5DE5\u5177\u65B9\u6CD5","Go\u8BED\u8A00","\u5F00\u53D1\u7EC4\u4EF6","\u6570\u636E\u683C\u5F0F\u5316","\u63A5\u53E3\u6587\u6863","Dump\u51FD\u6570","DumpWithType"],"description":"gutil\u7EC4\u4EF6\u662FGoFrame\u6846\u67B6\u4E2D\u7528\u4E8E\u5C01\u88C5\u5E38\u7528\u5F00\u53D1\u5DE5\u5177\u65B9\u6CD5\u7684\u6A21\u5757\uFF0C\u63D0\u4F9B\u4E86\u4E00\u7CFB\u5217\u4FBF\u5229\u7684\u51FD\u6570\uFF0C\u652F\u6301\u6570\u636E\u7ED3\u6784\u7684\u53CB\u597D\u8F93\u51FA\uFF0C\u5982Dump\u548CDumpWithType\u3002\u5F00\u53D1\u8005\u53EF\u4EE5\u901A\u8FC7github\u5E93\u5F15\u5165gutil\u7EC4\u4EF6\uFF0C\u4EE5\u63D0\u9AD8Go\u8BED\u8A00\u9879\u76EE\u5F00\u53D1\u6548\u7387\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u5206\u9875\u7BA1\u7406-gpage","permalink":"/en/2.7.x/docs/components/util-gpage"},"next":{"title":"\u5355\u5143\u6D4B\u8BD5","permalink":"/en/2.7.x/docs/components/test"}}'),r=i("785893"),s=i("250065");let o={slug:"/docs/components/util-gutil",title:"\u5DE5\u5177\u65B9\u6CD5-gutil",sidebar_position:6,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","gutil","\u5DE5\u5177\u65B9\u6CD5","Go\u8BED\u8A00","\u5F00\u53D1\u7EC4\u4EF6","\u6570\u636E\u683C\u5F0F\u5316","\u63A5\u53E3\u6587\u6863","Dump\u51FD\u6570","DumpWithType"],description:"gutil\u7EC4\u4EF6\u662FGoFrame\u6846\u67B6\u4E2D\u7528\u4E8E\u5C01\u88C5\u5E38\u7528\u5F00\u53D1\u5DE5\u5177\u65B9\u6CD5\u7684\u6A21\u5757\uFF0C\u63D0\u4F9B\u4E86\u4E00\u7CFB\u5217\u4FBF\u5229\u7684\u51FD\u6570\uFF0C\u652F\u6301\u6570\u636E\u7ED3\u6784\u7684\u53CB\u597D\u8F93\u51FA\uFF0C\u5982Dump\u548CDumpWithType\u3002\u5F00\u53D1\u8005\u53EF\u4EE5\u901A\u8FC7github\u5E93\u5F15\u5165gutil\u7EC4\u4EF6\uFF0C\u4EE5\u63D0\u9AD8Go\u8BED\u8A00\u9879\u76EE\u5F00\u53D1\u6548\u7387\u3002"},c=void 0,l={},u=[{value:"\u57FA\u672C\u4ECB\u7ECD",id:"\u57FA\u672C\u4ECB\u7ECD",level:2},{value:"\u5E38\u7528\u65B9\u6CD5",id:"\u5E38\u7528\u65B9\u6CD5",level:2},{value:"<code>Dump</code>",id:"dump",level:3},{value:"<code>DumpWithType</code>",id:"dumpwithtype",level:3},{value:"<code>DumpTo</code>",id:"dumpto",level:3}];function d(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"\u57FA\u672C\u4ECB\u7ECD",children:"\u57FA\u672C\u4ECB\u7ECD"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"gutil"})," \u7EC4\u4EF6\u5C01\u88C5\u4E86\u4E00\u4E9B\u5F00\u53D1\u4E2D\u5E38\u7528\u7684\u5DE5\u5177\u65B9\u6CD5\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u4F7F\u7528\u65B9\u5F0F\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/util/gutil"\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u63A5\u53E3\u6587\u6863\uFF1A"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/util/gutil",children:"https://pkg.go.dev/github.com/gogf/gf/v2/util/gutil"})}),"\n",(0,r.jsx)(e.h2,{id:"\u5E38\u7528\u65B9\u6CD5",children:"\u5E38\u7528\u65B9\u6CD5"}),"\n",(0,r.jsx)(e.h3,{id:"dump",children:(0,r.jsx)(e.code,{children:"Dump"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u8BF4\u660E\uFF1A ",(0,r.jsx)(e.code,{children:"Dump"})," \u5C06 ",(0,r.jsx)(e.code,{children:"values"})," \u4EE5\u66F4\u597D\u7684\u53EF\u8BFB\u6027\u7684\u65B9\u5F0F\u8F93\u51FA\u5728\u6807\u51C6\u8F93\u51FA\u4E2D\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u683C\u5F0F\uFF1A"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:"Dump(values ...interface{})\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u793A\u4F8B\uFF1A"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'type User struct {\n      Name string\n      Age int\n}\n\ntype Location struct {\n      Province string\n      City string\n}\n\ntype UserInfo struct {\n      U User\n      L Location\n}\n\nfunc main() {\n      userList := make([]UserInfo, 0)\n      userList = append(userList, UserInfo{\n          U: User{\n              Name: "\u90ED\u5F3A",\n              Age:  18,\n          },\n          L: Location{\n              Province: "\u56DB\u5DDD",\n              City:     "\u6210\u90FD",\n          },\n      })\n      userList = append(userList, UserInfo{\n          U: User{\n              Name: "\u9EC4\u9A9E",\n              Age:  18,\n          },\n          L: Location{\n              Province: "\u6C5F\u82CF",\n              City:     "\u5357\u4EAC",\n          },\n      })\n\n      gutil.Dump(userList)\n}\n\n// Output:\n[\n      {\n          U: {\n              Name: "\u90ED\u5F3A",\n              Age:  18,\n          },\n          L: {\n              Province: "\u56DB\u5DDD",\n              City:     "\u6210\u90FD",\n          },\n      },\n      {\n          U: {\n              Name: "\u9EC4\u9A9E",\n              Age:  18,\n          },\n          L: {\n              Province: "\u6C5F\u82CF",\n              City:     "\u5357\u4EAC",\n          },\n      },\n]\n'})}),"\n",(0,r.jsx)(e.h3,{id:"dumpwithtype",children:(0,r.jsx)(e.code,{children:"DumpWithType"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u8BF4\u660E\uFF1A ",(0,r.jsx)(e.code,{children:"DumpWithType"})," \u548C ",(0,r.jsx)(e.code,{children:"Dump"})," \u7C7B\u4F3C\uFF0C\u4F46\u662F\u591A\u4E86\u7C7B\u578B\u4FE1\u606F\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u683C\u5F0F\uFF1A"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:"DumpWithType(values ...interface{})\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u793A\u4F8B\uFF1A"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'type User struct {\n      Name string\n      Age int\n}\n\ntype Location struct {\n      Province string\n      City string\n}\n\ntype UserInfo struct {\n      U User\n      L Location\n}\n\nfunc main() {\n      userList := make([]UserInfo, 0)\n      userList = append(userList, UserInfo{\n          U: User{\n              Name: "\u90ED\u5F3A",\n              Age:  18,\n          },\n          L: Location{\n              Province: "\u56DB\u5DDD",\n              City:     "\u6210\u90FD",\n          },\n      })\n      userList = append(userList, UserInfo{\n          U: User{\n              Name: "\u9EC4\u9A9E",\n              Age:  18,\n          },\n          L: Location{\n              Province: "\u6C5F\u82CF",\n              City:     "\u5357\u4EAC",\n          },\n      })\n\n      gutil.DumpWithType(userList)\n}\n\n// Output:\n[]main.UserInfo(2) [\n      main.UserInfo(2) {\n          U: main.User(2) {\n              Name: string(6) "\u90ED\u5F3A",\n              Age:  int(18),\n          },\n          L: main.Location(2) {\n              Province: string(6) "\u56DB\u5DDD",\n              City:     string(6) "\u6210\u90FD",\n          },\n      },\n      main.UserInfo(2) {\n          U: main.User(2) {\n              Name: string(6) "\u9EC4\u9A9E",\n              Age:  int(18),\n          },\n          L: main.Location(2) {\n              Province: string(6) "\u6C5F\u82CF",\n              City:     string(6) "\u5357\u4EAC",\n          },\n      },\n]\n'})}),"\n",(0,r.jsx)(e.h3,{id:"dumpto",children:(0,r.jsx)(e.code,{children:"DumpTo"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u8BF4\u660E\uFF1A ",(0,r.jsx)(e.code,{children:"DumpTo"})," \u5C06 ",(0,r.jsx)(e.code,{children:"value"})," \u4EE5\u81EA\u5B9A\u4E49\u7684\u8F93\u51FA\u5F62\u5F0F\u5199\u5165\u5230 ",(0,r.jsx)(e.code,{children:"write"})," \u4E2D\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u683C\u5F0F\uFF1A"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:"DumpTo(writer io.Writer, value interface{}, option DumpOption)\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u793A\u4F8B\uFF1A"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n      "bytes"\n      "fmt"\n      "github.com/gogf/gf/v2/util/gutil"\n      "io"\n)\n\ntype UserInfo struct {\n      Name     string\n      Age      int\n      Province string\n      City     string\n}\n\ntype DumpWriter struct {\n      Content string\n}\n\nfunc (d *DumpWriter) Write(p []byte) (n int, err error) {\n      buffer := bytes.NewBuffer(nil)\n      buffer.WriteString("I\'m Start!\\n")\n      buffer.WriteString(string(p))\n      buffer.WriteString("\\nI\'m End!\\n")\n\n      d.Content = buffer.String()\n\n      return buffer.Len(), nil\n}\n\nfunc main() {\n      u := UserInfo{\n          "a", 18, "b", "c",\n      }\n\n      var dw io.Writer = &DumpWriter{}\n\n      gutil.DumpTo(dw, u, gutil.DumpOption{})\n\n      fmt.Println(dw.(*DumpWriter).Content)\n}\n\n// Output:\nI\'m Start!\n{\n      Name:     "a",\n      Age:      18,\n      Province: "b",\n      City:     "c",\n}\nI\'m End!\n'})})]})}function a(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},250065:function(n,e,i){i.d(e,{Z:function(){return c},a:function(){return o}});var t=i(667294);let r={},s=t.createContext(r);function o(n){let e=t.useContext(s);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);