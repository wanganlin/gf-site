"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[18738],{146441:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>a,frontMatter:()=>r,metadata:()=>o,toc:()=>g});const o=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/HTML\u7f16\u89e3\u7801-ghtml","title":"HTML\u7f16\u89e3\u7801-ghtml","description":"\u672c\u6587\u6863\u4ecb\u7ecd\u4e86\u5982\u4f55\u5728\u4f7f\u7528GoFrame\u6846\u67b6\u6784\u5efa\u7684\u9879\u76ee\u4e2d\u8fdb\u884cHTML\u7f16\u7801\u548c\u89e3\u6790\u3002\u901a\u8fc7\u5f15\u5165\u76f8\u5173\u5305\uff0c\u53ef\u4ee5\u8f7b\u677e\u5bf9HTML\u5185\u5bb9\u8fdb\u884c\u5904\u7406\u3002\u6587\u672b\u63d0\u4f9b\u4e86\u5b98\u65b9\u63a5\u53e3\u6587\u6863\u7684\u94fe\u63a5\uff0c\u8fdb\u4e00\u6b65\u5e2e\u52a9\u5f00\u53d1\u8005\u7406\u89e3\u548c\u4f7f\u7528\u3002","source":"@site/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/HTML\u7f16\u89e3\u7801-ghtml.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801","slug":"/docs/components/encoding-ghtml","permalink":"/docs/components/encoding-ghtml","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/HTML\u7f16\u89e3\u7801-ghtml.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731055597000,"sidebarPosition":4,"frontMatter":{"slug":"/docs/components/encoding-ghtml","title":"HTML\u7f16\u89e3\u7801-ghtml","sidebar_position":4,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","HTML\u7f16\u89e3\u7801","ghtml","Go\u8bed\u8a00","\u7f16\u7801\u89e3\u6790","\u63a5\u53e3\u6587\u6863","Web\u5f00\u53d1","\u8f6f\u4ef6\u5f00\u53d1","\u7f16\u7a0b"],"description":"\u672c\u6587\u6863\u4ecb\u7ecd\u4e86\u5982\u4f55\u5728\u4f7f\u7528GoFrame\u6846\u67b6\u6784\u5efa\u7684\u9879\u76ee\u4e2d\u8fdb\u884cHTML\u7f16\u7801\u548c\u89e3\u6790\u3002\u901a\u8fc7\u5f15\u5165\u76f8\u5173\u5305\uff0c\u53ef\u4ee5\u8f7b\u677e\u5bf9HTML\u5185\u5bb9\u8fdb\u884c\u5904\u7406\u3002\u6587\u672b\u63d0\u4f9b\u4e86\u5b98\u65b9\u63a5\u53e3\u6587\u6863\u7684\u94fe\u63a5\uff0c\u8fdb\u4e00\u6b65\u5e2e\u52a9\u5f00\u53d1\u8005\u7406\u89e3\u548c\u4f7f\u7528\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u7ecf\u5178\u54c8\u5e0c\u51fd\u6570-ghash","permalink":"/docs/components/encoding-ghash"},"next":{"title":"URL\u7f16\u89e3\u7801-gurl","permalink":"/docs/components/encoding-gurl"}}');var s=n(474848),c=n(28453);const r={slug:"/docs/components/encoding-ghtml",title:"HTML\u7f16\u89e3\u7801-ghtml",sidebar_position:4,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","HTML\u7f16\u89e3\u7801","ghtml","Go\u8bed\u8a00","\u7f16\u7801\u89e3\u6790","\u63a5\u53e3\u6587\u6863","Web\u5f00\u53d1","\u8f6f\u4ef6\u5f00\u53d1","\u7f16\u7a0b"],description:"\u672c\u6587\u6863\u4ecb\u7ecd\u4e86\u5982\u4f55\u5728\u4f7f\u7528GoFrame\u6846\u67b6\u6784\u5efa\u7684\u9879\u76ee\u4e2d\u8fdb\u884cHTML\u7f16\u7801\u548c\u89e3\u6790\u3002\u901a\u8fc7\u5f15\u5165\u76f8\u5173\u5305\uff0c\u53ef\u4ee5\u8f7b\u677e\u5bf9HTML\u5185\u5bb9\u8fdb\u884c\u5904\u7406\u3002\u6587\u672b\u63d0\u4f9b\u4e86\u5b98\u65b9\u63a5\u53e3\u6587\u6863\u7684\u94fe\u63a5\uff0c\u8fdb\u4e00\u6b65\u5e2e\u52a9\u5f00\u53d1\u8005\u7406\u89e3\u548c\u4f7f\u7528\u3002"},i=void 0,d={},g=[];function l(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"HTML\u7f16\u7801\u89e3\u6790\u3002"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/encoding/ghtml"\n'})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/encoding/ghtml",children:"https://pkg.go.dev/github.com/gogf/gf/v2/encoding/ghtml"})})]})}function a(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var o=n(296540);const s={},c=o.createContext(s);function r(e){const t=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(c.Provider,{value:t},e.children)}}}]);