"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["31888"],{839674:function(n,e,t){t.r(e),t.d(e,{metadata:()=>o,contentTitle:()=>c,default:()=>g,assets:()=>d,toc:()=>a,frontMatter:()=>i});var o=JSON.parse('{"id":"docs/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/\u901A\u7528\u7F16\u89E3\u7801-gjson/\u901A\u7528\u7F16\u89E3\u7801-\u6570\u636E\u683C\u5F0F\u8F6C\u6362","title":"\u901A\u7528\u7F16\u89E3\u7801-\u6570\u636E\u683C\u5F0F\u8F6C\u6362","description":"\u4F7F\u7528GoFrame\u6846\u67B6\u8FDB\u884C\u6570\u636E\u683C\u5F0F\u8F6C\u6362\uFF0C\u5305\u62ECJSON\u3001XML\u3001YAML\u3001TOML\u7B49\u591A\u79CD\u683C\u5F0F\u7684\u76F8\u4E92\u8F6C\u6362\uFF0C\u5E76\u63D0\u4F9B\u4E00\u4E2A\u793A\u4F8B\u4EE3\u7801\u3002\u4F7F\u7528gjson\u5E93\uFF0C\u53EF\u4EE5\u5229\u7528Must*\u65B9\u6CD5\u786E\u4FDD\u6570\u636E\u683C\u5F0F\u7684\u5B89\u5168\u8F6C\u6362\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/\u901A\u7528\u7F16\u89E3\u7801-gjson/\u901A\u7528\u7F16\u89E3\u7801-\u6570\u636E\u683C\u5F0F\u8F6C\u6362.md","sourceDirName":"docs/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/\u901A\u7528\u7F16\u89E3\u7801-gjson","slug":"/docs/components/encoding-gjson-format-converting","permalink":"/2.7.x/docs/components/encoding-gjson-format-converting","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/\u901A\u7528\u7F16\u89E3\u7801-gjson/\u901A\u7528\u7F16\u89E3\u7801-\u6570\u636E\u683C\u5F0F\u8F6C\u6362.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":4,"frontMatter":{"slug":"/docs/components/encoding-gjson-format-converting","title":"\u901A\u7528\u7F16\u89E3\u7801-\u6570\u636E\u683C\u5F0F\u8F6C\u6362","sidebar_position":4,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","\u6570\u636E\u683C\u5F0F\u8F6C\u6362","gjson","JSON","XML","YAML","TOML","\u7F16\u89E3\u7801","\u63A5\u53E3\u6587\u6863"],"description":"\u4F7F\u7528GoFrame\u6846\u67B6\u8FDB\u884C\u6570\u636E\u683C\u5F0F\u8F6C\u6362\uFF0C\u5305\u62ECJSON\u3001XML\u3001YAML\u3001TOML\u7B49\u591A\u79CD\u683C\u5F0F\u7684\u76F8\u4E92\u8F6C\u6362\uFF0C\u5E76\u63D0\u4F9B\u4E00\u4E2A\u793A\u4F8B\u4EE3\u7801\u3002\u4F7F\u7528gjson\u5E93\uFF0C\u53EF\u4EE5\u5229\u7528Must*\u65B9\u6CD5\u786E\u4FDD\u6570\u636E\u683C\u5F0F\u7684\u5B89\u5168\u8F6C\u6362\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u901A\u7528\u7F16\u89E3\u7801-\u52A8\u6001\u521B\u5EFA\u4FEE\u6539","permalink":"/2.7.x/docs/components/encoding-gjson-dynamic-creating-and-editing"},"next":{"title":"\u901A\u7528\u7F16\u89E3\u7801-\u65B9\u6CD5\u4ECB\u7ECD","permalink":"/2.7.x/docs/components/encoding-gjson-funcs"}}'),r=t("785893"),s=t("250065");let i={slug:"/docs/components/encoding-gjson-format-converting",title:"\u901A\u7528\u7F16\u89E3\u7801-\u6570\u636E\u683C\u5F0F\u8F6C\u6362",sidebar_position:4,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","\u6570\u636E\u683C\u5F0F\u8F6C\u6362","gjson","JSON","XML","YAML","TOML","\u7F16\u89E3\u7801","\u63A5\u53E3\u6587\u6863"],description:"\u4F7F\u7528GoFrame\u6846\u67B6\u8FDB\u884C\u6570\u636E\u683C\u5F0F\u8F6C\u6362\uFF0C\u5305\u62ECJSON\u3001XML\u3001YAML\u3001TOML\u7B49\u591A\u79CD\u683C\u5F0F\u7684\u76F8\u4E92\u8F6C\u6362\uFF0C\u5E76\u63D0\u4F9B\u4E00\u4E2A\u793A\u4F8B\u4EE3\u7801\u3002\u4F7F\u7528gjson\u5E93\uFF0C\u53EF\u4EE5\u5229\u7528Must*\u65B9\u6CD5\u786E\u4FDD\u6570\u636E\u683C\u5F0F\u7684\u5B89\u5168\u8F6C\u6362\u3002"},c=void 0,d={},a=[];function l(n){let e={a:"a",code:"code",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:["\u6570\u636E\u683C\u5F0F\u8F6C\u6362\u6709\u5F88\u591A\u65B9\u6CD5\uFF0C\u5177\u4F53\u8BF7\u67E5\u770B\u63A5\u53E3\u6587\u6863\uFF1A ",(0,r.jsx)(e.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/encoding/gjson",children:"https://pkg.go.dev/github.com/gogf/gf/v2/encoding/gjson"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u8FD9\u91CC\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u6709\u4E00\u4E9B ",(0,r.jsx)(e.code,{children:"Must*"})," \u8F6C\u6362\u65B9\u6CD5\uFF0C\u8FD9\u4E9B\u65B9\u6CD5\u4FDD\u8BC1\u5FC5\u987B\u8F6C\u6362\u4E3A\u6307\u5B9A\u7684\u6570\u636E\u683C\u5F0F\uFF0C\u5426\u5219\u76F4\u63A5 ",(0,r.jsx)(e.code,{children:"panic"}),"\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u6211\u4EEC\u5C31\u6765\u4E00\u4E2A\u4F8B\u5B50\u8BF4\u660E\u5373\u53EF\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'data :=\n    `{\n    "users" : {\n        "count" : 1,\n        "array" : ["John", "Ming"]\n    }\n}`\nif j, err := gjson.DecodeToJson(data); err != nil {\n    panic(err)\n} else {\n    fmt.Println("JSON:")\n    fmt.Println(j.MustToJsonString())\n    fmt.Println("======================")\n\n    fmt.Println("XML:")\n    fmt.Println(j.MustToXmlString())\n    fmt.Println("======================")\n\n    fmt.Println("YAML:")\n    fmt.Println(j.MustToYamlString())\n    fmt.Println("======================")\n\n    fmt.Println("TOML:")\n    fmt.Println(j.MustToTomlString())\n}\n\n// Output:\n// JSON:\n// {"users":{"array":["John","Ming"],"count":1}}\n// ======================\n// XML:\n// <users><array>John</array><array>Ming</array><count>1</count></users>\n// ======================\n// YAML:\n// users:\n//     array:\n//       - John\n//       - Ming\n//     count: 1\n//\n// ======================\n// TOML:\n// [users]\n//   array = ["John", "Ming"]\n//   count = 1.0\n'})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"gjson"})," \u652F\u6301\u5C06 ",(0,r.jsx)(e.code,{children:"JSON"})," \u8F6C\u6362\u4E3A\u5176\u4ED6\u5E38\u89C1\u7684\u6570\u636E\u683C\u5F0F\uFF0C\u76EE\u524D\u652F\u6301\uFF1A ",(0,r.jsx)(e.code,{children:"JSON"}),"\u3001 ",(0,r.jsx)(e.code,{children:"XML"}),"\u3001 ",(0,r.jsx)(e.code,{children:"INI"}),"\u3001 ",(0,r.jsx)(e.code,{children:"YAML/YML"}),"\u3001 ",(0,r.jsx)(e.code,{children:"TOML"}),"\u3001 ",(0,r.jsx)(e.code,{children:"PROPERTIES"}),"\u3001 ",(0,r.jsx)(e.code,{children:"Struct"})," \u6570\u636E\u683C\u5F0F\u4E4B\u95F4\u7684\u76F8\u4E92\u8F6C\u6362\u3002"]})]})}function g(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return i}});var o=t(667294);let r={},s=o.createContext(r);function i(n){let e=o.useContext(s);return o.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),o.createElement(s.Provider,{value:e},n.children)}}}]);