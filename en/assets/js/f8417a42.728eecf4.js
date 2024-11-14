"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["20592"],{358407:function(e,t,n){n.r(t),n.d(t,{metadata:()=>o,contentTitle:()=>c,default:()=>a,assets:()=>d,toc:()=>l,frontMatter:()=>r});var o=JSON.parse('{"id":"docs/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/HTML\u7F16\u89E3\u7801-ghtml","title":"HTML\u7F16\u89E3\u7801-ghtml","description":"\u5728\u4F7F\u7528GoFrame\u6846\u67B6\u6784\u5EFA\u7684\u9879\u76EE\u4E2D\u8FDB\u884CHTML\u7F16\u7801\u548C\u89E3\u6790\u3002\u901A\u8FC7\u5F15\u5165\u76F8\u5173\u5305\uFF0C\u53EF\u4EE5\u8F7B\u677E\u5BF9HTML\u5185\u5BB9\u8FDB\u884C\u5904\u7406\u3002\u6587\u672B\u63D0\u4F9B\u4E86\u5B98\u65B9\u63A5\u53E3\u6587\u6863\u7684\u94FE\u63A5\uFF0C\u8FDB\u4E00\u6B65\u5E2E\u52A9\u5F00\u53D1\u8005\u7406\u89E3\u548C\u4F7F\u7528\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/HTML\u7F16\u89E3\u7801-ghtml.md","sourceDirName":"docs/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801","slug":"/docs/components/encoding-ghtml","permalink":"/en/2.7.x/docs/components/encoding-ghtml","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/HTML\u7F16\u89E3\u7801-ghtml.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":4,"frontMatter":{"slug":"/docs/components/encoding-ghtml","title":"HTML\u7F16\u89E3\u7801-ghtml","sidebar_position":4,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","HTML\u7F16\u89E3\u7801","ghtml","Go\u8BED\u8A00","\u7F16\u7801\u89E3\u6790","\u63A5\u53E3\u6587\u6863","Web\u5F00\u53D1","\u8F6F\u4EF6\u5F00\u53D1","\u7F16\u7A0B"],"description":"\u5728\u4F7F\u7528GoFrame\u6846\u67B6\u6784\u5EFA\u7684\u9879\u76EE\u4E2D\u8FDB\u884CHTML\u7F16\u7801\u548C\u89E3\u6790\u3002\u901A\u8FC7\u5F15\u5165\u76F8\u5173\u5305\uFF0C\u53EF\u4EE5\u8F7B\u677E\u5BF9HTML\u5185\u5BB9\u8FDB\u884C\u5904\u7406\u3002\u6587\u672B\u63D0\u4F9B\u4E86\u5B98\u65B9\u63A5\u53E3\u6587\u6863\u7684\u94FE\u63A5\uFF0C\u8FDB\u4E00\u6B65\u5E2E\u52A9\u5F00\u53D1\u8005\u7406\u89E3\u548C\u4F7F\u7528\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u7ECF\u5178\u54C8\u5E0C\u51FD\u6570-ghash","permalink":"/en/2.7.x/docs/components/encoding-ghash"},"next":{"title":"URL\u7F16\u89E3\u7801-gurl","permalink":"/en/2.7.x/docs/components/encoding-gurl"}}'),s=n("785893"),i=n("250065");let r={slug:"/docs/components/encoding-ghtml",title:"HTML\u7F16\u89E3\u7801-ghtml",sidebar_position:4,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","HTML\u7F16\u89E3\u7801","ghtml","Go\u8BED\u8A00","\u7F16\u7801\u89E3\u6790","\u63A5\u53E3\u6587\u6863","Web\u5F00\u53D1","\u8F6F\u4EF6\u5F00\u53D1","\u7F16\u7A0B"],description:"\u5728\u4F7F\u7528GoFrame\u6846\u67B6\u6784\u5EFA\u7684\u9879\u76EE\u4E2D\u8FDB\u884CHTML\u7F16\u7801\u548C\u89E3\u6790\u3002\u901A\u8FC7\u5F15\u5165\u76F8\u5173\u5305\uFF0C\u53EF\u4EE5\u8F7B\u677E\u5BF9HTML\u5185\u5BB9\u8FDB\u884C\u5904\u7406\u3002\u6587\u672B\u63D0\u4F9B\u4E86\u5B98\u65B9\u63A5\u53E3\u6587\u6863\u7684\u94FE\u63A5\uFF0C\u8FDB\u4E00\u6B65\u5E2E\u52A9\u5F00\u53D1\u8005\u7406\u89E3\u548C\u4F7F\u7528\u3002"},c=void 0,d={},l=[];function g(e){let t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"HTML\u7F16\u7801\u89E3\u6790\u3002"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"\u4F7F\u7528\u65B9\u5F0F"}),"\uFF1A"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/encoding/ghtml"\n'})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"\u63A5\u53E3\u6587\u6863"}),"\uFF1A"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/encoding/ghtml",children:"https://pkg.go.dev/github.com/gogf/gf/v2/encoding/ghtml"})})]})}function a(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return r}});var o=n(667294);let s={},i=o.createContext(s);function r(e){let t=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);