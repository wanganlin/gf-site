"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["27366"],{777779:function(n,e,r){r.r(e),r.d(e,{metadata:()=>o,contentTitle:()=>c,default:()=>g,assets:()=>a,toc:()=>d,frontMatter:()=>i});var o=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u9519\u8BEF\u5904\u7406/\u9519\u8BEF\u5904\u7406-\u6700\u4F73\u5B9E\u8DF5","title":"\u9519\u8BEF\u5904\u7406-\u6700\u4F73\u5B9E\u8DF5","description":"\u6253\u5370\u9519\u8BEF\u5BF9\u8C61\u4E2D\u7684\u5806\u6808\u4FE1\u606F","source":"@site/versioned_docs/version-2.2.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u9519\u8BEF\u5904\u7406/\u9519\u8BEF\u5904\u7406-\u6700\u4F73\u5B9E\u8DF5.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u9519\u8BEF\u5904\u7406","slug":"/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u9519\u8BEF\u5904\u7406/\u9519\u8BEF\u5904\u7406-\u6700\u4F73\u5B9E\u8DF5","permalink":"/2.2.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u9519\u8BEF\u5904\u7406/\u9519\u8BEF\u5904\u7406-\u6700\u4F73\u5B9E\u8DF5","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.2.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u9519\u8BEF\u5904\u7406/\u9519\u8BEF\u5904\u7406-\u6700\u4F73\u5B9E\u8DF5.md","tags":[],"version":"2.2.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":5,"frontMatter":{"title":"\u9519\u8BEF\u5904\u7406-\u6700\u4F73\u5B9E\u8DF5","sidebar_position":5,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u9519\u8BEF\u5904\u7406-\u5176\u4ED6\u7279\u6027","permalink":"/2.2.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u9519\u8BEF\u5904\u7406/\u9519\u8BEF\u5904\u7406-\u5176\u4ED6\u7279\u6027"},"next":{"title":"\u9519\u8BEF\u5904\u7406-\u6027\u80FD\u6D4B\u8BD5","permalink":"/2.2.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u9519\u8BEF\u5904\u7406/\u9519\u8BEF\u5904\u7406-\u6027\u80FD\u6D4B\u8BD5"}}'),s=r("785893"),t=r("250065");let i={title:"\u9519\u8BEF\u5904\u7406-\u6700\u4F73\u5B9E\u8DF5",sidebar_position:5,hide_title:!0},c=void 0,a={},d=[{value:"\u6253\u5370\u9519\u8BEF\u5BF9\u8C61\u4E2D\u7684\u5806\u6808\u4FE1\u606F",id:"\u6253\u5370\u9519\u8BEF\u5BF9\u8C61\u4E2D\u7684\u5806\u6808\u4FE1\u606F",level:2},{value:"\u6B63\u786E\u7684\u9519\u8BEF\u5BF9\u8C61Wrap\u65B9\u5F0F",id:"\u6B63\u786E\u7684\u9519\u8BEF\u5BF9\u8C61wrap\u65B9\u5F0F",level:2}];function l(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u6253\u5370\u9519\u8BEF\u5BF9\u8C61\u4E2D\u7684\u5806\u6808\u4FE1\u606F",children:"\u6253\u5370\u9519\u8BEF\u5BF9\u8C61\u4E2D\u7684\u5806\u6808\u4FE1\u606F"}),"\n",(0,s.jsxs)(e.p,{children:["\u901A\u8FC7 ",(0,s.jsx)(e.code,{children:"fmt/glog"})," \u6216\u8005\u5176\u4ED6\u5305\u6253\u5370\u9519\u8BEF\u5BF9\u8C61\u65F6\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4E0D\u4F1A\u8F93\u51FA\u9519\u8BEF\u5806\u6808\u4FE1\u606F\u3002\u4F8B\u5982\uFF1A"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n\n    "github.com/gogf/gf/v2/encoding/gjson"\n)\n\nfunc main() {\n    _, err := gjson.Encode(func() {})\n    fmt.Printf("err: %v", err)\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884C\u540E\uFF0C\u7EC8\u7AEF\u8F93\u51FA\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:"err: json.Marshal failed: json: unsupported type: func()\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u6253\u5370\u9519\u8BEF\u5BF9\u8C61\u4E2D\u7684\u9519\u8BEF\u5806\u6808\u4FE1\u606F\uFF0C\u5E94\u5F53\u4F7F\u7528 ",(0,s.jsx)(e.code,{children:"%+v"})," \u7684\u683C\u5F0F\u5316\u65B9\u5F0F\u3002\u4F8B\u5982\uFF1A"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n\n    "github.com/gogf/gf/v2/encoding/gjson"\n)\n\nfunc main() {\n    _, err := gjson.Encode(func() {})\n    fmt.Printf("err: %+v", err)\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884C\u540E\uFF0C\u7EC8\u7AEF\u8F93\u51FA\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:"err: json.Marshal failed: json: unsupported type: func()\n1. json.Marshal failed\n   1).  github.com/gogf/gf/v2/internal/json.Marshal\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/internal/json/json.go:30\n   2).  github.com/gogf/gf/v2/encoding/gjson.Encode\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/encoding/gjson/gjson_stdlib_json_util.go:41\n   3).  main.main\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/.test/main.go:10\n2. json: unsupported type: func()\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u6B63\u786E\u7684\u9519\u8BEF\u5BF9\u8C61wrap\u65B9\u5F0F",children:"\u6B63\u786E\u7684\u9519\u8BEF\u5BF9\u8C61Wrap\u65B9\u5F0F"}),"\n",(0,s.jsxs)(e.p,{children:["\u5F53\u5BF9\u9519\u8BEF\u5BF9\u8C61\u8FDB\u884C ",(0,s.jsx)(e.code,{children:"Wrap"})," \u65F6\uFF0C\u4E0D\u8981\u5C06\u9519\u8BEF\u5BF9\u8C61\u6253\u5370\u5230 ",(0,s.jsx)(e.code,{children:"Wrap"})," \u7684\u9519\u8BEF\u4FE1\u606F\u4E2D\uFF0C\u56E0\u4E3A ",(0,s.jsx)(e.code,{children:"Wrap"})," \u65F6\u672C\u8EAB\u4F1A\u5C06\u76EE\u6807\u9519\u8BEF\u5BF9\u8C61\u5305\u88F9\u5230\u521B\u5EFA\u7684\u65B0\u7684\u9519\u8BEF\u5BF9\u8C61\u5185\u90E8\u3002\u5982\u679C\u5C06\u9519\u8BEF\u4FE1\u606F\u518D\u6253\u5370\u5305\u542B\u5728\u9519\u8BEF\u5B57\u7B26\u4E32\u4E2D\uFF0C\u90A3\u4E48\u5728\u6253\u5370\u9519\u8BEF\u5806\u6808\u7684\u65F6\u5019\u4F1A\u51FA\u73B0\u9519\u8BEF\u4FE1\u606F\u91CD\u590D\u3002\u4F8B\u5982\uFF08\u4E3A\u7B80\u5316\u793A\u4F8B\uFF0C\u8FD9\u91CC\u6CA1\u6709\u6253\u5370\u5806\u6808\u4FE1\u606F\uFF09\uFF1A"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n\n    "github.com/gogf/gf/v2/encoding/gjson"\n    "github.com/gogf/gf/v2/errors/gerror"\n)\n\nfunc main() {\n    _, err1 := gjson.Encode(func() {})\n    err2 := gerror.Wrapf(err1, `error occurred: %v`, err1)\n    fmt.Printf("err: %v", err2)\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884C\u540E\uFF0C\u7EC8\u7AEF\u8F93\u51FA\uFF0C\u53EF\u4EE5\u770B\u5230\uFF0C\u6253\u5370\u7684\u9519\u8BEF\u4FE1\u606F\u51FA\u73B0\u4E86\u91CD\u590D\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:"err: error occurred: json.Marshal failed: json: unsupported type: func(): json.Marshal failed: json: unsupported type: func()\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u6211\u4EEC\u5C06\u4E0A\u9762\u7684\u793A\u4F8B\u4EE3\u7801\u4FEE\u590D\u4E00\u4E0B\uFF0C\u5982\u4E0B\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n\n    "github.com/gogf/gf/v2/encoding/gjson"\n    "github.com/gogf/gf/v2/errors/gerror"\n)\n\nfunc main() {\n    _, err1 := gjson.Encode(func() {})\n    err2 := gerror.Wrap(err1, `error occurred`)\n    fmt.Printf("err: %v", err2)\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884C\u540E\uFF0C\u7EC8\u7AEF\u8F93\u51FA\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:"err: error occurred: json.Marshal failed: json: unsupported type: func()\n"})})]})}function g(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return c},a:function(){return i}});var o=r(667294);let s={},t=o.createContext(s);function i(n){let e=o.useContext(t);return o.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),o.createElement(t.Provider,{value:e},n.children)}}}]);