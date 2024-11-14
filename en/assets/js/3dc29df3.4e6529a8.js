"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["1181"],{598996:function(e,n,o){o.r(n),o.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>l,assets:()=>g,toc:()=>a,frontMatter:()=>r});var t=JSON.parse('{"id":"docs/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/YAML\u7F16\u89E3\u7801-gyaml","title":"YAML\u7F16\u89E3\u7801-gyaml","description":"YAML\u6570\u636E\u683C\u5F0F\u7684\u7F16\u89E3\u7801\u65B9\u6CD5\uFF0C\u4F7F\u7528GoFrame\u6846\u67B6\u4E0B\u7684gyaml\u5E93\u8FDB\u884C\u7F16\u7801\u89E3\u6790\u3002\u901A\u8FC7\u5BFC\u5165github.com/gogf/gf/v2/encoding/gyaml\u5305\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u5730\u5904\u7406YAML\u683C\u5F0F\u7684\u6570\u636E\u3002\u6B64\u5916\uFF0C\u8FD8\u63D0\u4F9B\u4E86\u63A5\u53E3\u6587\u6863\u7684\u94FE\u63A5\u4F9B\u7528\u6237\u53C2\u8003\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/YAML\u7F16\u89E3\u7801-gyaml.md","sourceDirName":"docs/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801","slug":"/docs/components/encoding-gyaml","permalink":"/en/2.7.x/docs/components/encoding-gyaml","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/YAML\u7F16\u89E3\u7801-gyaml.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":8,"frontMatter":{"slug":"/docs/components/encoding-gyaml","title":"YAML\u7F16\u89E3\u7801-gyaml","sidebar_position":8,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","YAML","\u7F16\u7801","\u89E3\u7801","gyaml","\u6570\u636E\u683C\u5F0F","Go\u8BED\u8A00","\u63A5\u53E3\u6587\u6863","\u7F16\u7801\u89E3\u6790"],"description":"YAML\u6570\u636E\u683C\u5F0F\u7684\u7F16\u89E3\u7801\u65B9\u6CD5\uFF0C\u4F7F\u7528GoFrame\u6846\u67B6\u4E0B\u7684gyaml\u5E93\u8FDB\u884C\u7F16\u7801\u89E3\u6790\u3002\u901A\u8FC7\u5BFC\u5165github.com/gogf/gf/v2/encoding/gyaml\u5305\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u5730\u5904\u7406YAML\u683C\u5F0F\u7684\u6570\u636E\u3002\u6B64\u5916\uFF0C\u8FD8\u63D0\u4F9B\u4E86\u63A5\u53E3\u6587\u6863\u7684\u94FE\u63A5\u4F9B\u7528\u6237\u53C2\u8003\u3002"},"sidebar":"mainSidebar","previous":{"title":"INI\u7F16\u89E3\u7801-gini","permalink":"/en/2.7.x/docs/components/encoding-gini"},"next":{"title":"TOML\u7F16\u89E3\u7801-gtoml","permalink":"/en/2.7.x/docs/components/encoding-gtoml"}}'),i=o("785893"),s=o("250065");let r={slug:"/docs/components/encoding-gyaml",title:"YAML\u7F16\u89E3\u7801-gyaml",sidebar_position:8,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","YAML","\u7F16\u7801","\u89E3\u7801","gyaml","\u6570\u636E\u683C\u5F0F","Go\u8BED\u8A00","\u63A5\u53E3\u6587\u6863","\u7F16\u7801\u89E3\u6790"],description:"YAML\u6570\u636E\u683C\u5F0F\u7684\u7F16\u89E3\u7801\u65B9\u6CD5\uFF0C\u4F7F\u7528GoFrame\u6846\u67B6\u4E0B\u7684gyaml\u5E93\u8FDB\u884C\u7F16\u7801\u89E3\u6790\u3002\u901A\u8FC7\u5BFC\u5165github.com/gogf/gf/v2/encoding/gyaml\u5305\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u5730\u5904\u7406YAML\u683C\u5F0F\u7684\u6570\u636E\u3002\u6B64\u5916\uFF0C\u8FD8\u63D0\u4F9B\u4E86\u63A5\u53E3\u6587\u6863\u7684\u94FE\u63A5\u4F9B\u7528\u6237\u53C2\u8003\u3002"},c=void 0,g={},a=[];function d(e){let n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"YAML"})," \u6570\u636E\u683C\u5F0F\u7F16\u7801\u89E3\u6790\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u4F7F\u7528\u65B9\u5F0F"}),"\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/encoding/gyaml"\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u63A5\u53E3\u6587\u6863"}),"\uFF1A"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/encoding/gyaml",children:"https://pkg.go.dev/github.com/gogf/gf/v2/encoding/gyaml"})})]})}function l(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return c},a:function(){return r}});var t=o(667294);let i={},s=t.createContext(i);function r(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);