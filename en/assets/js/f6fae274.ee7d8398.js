"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[47844],{322461:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>g,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/XML\u7f16\u89e3\u7801-gxml","title":"XML\u7f16\u89e3\u7801-gxml","description":"\u672c\u9875\u9762\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528GoFrame\u6846\u67b6\u4e2d\u7684gxml\u8fdb\u884cXML\u6570\u636e\u683c\u5f0f\u7684\u7f16\u7801\u548c\u89e3\u6790\u3002\u63d0\u4f9b\u4e86gxml\u5e93\u7684\u57fa\u672c\u4f7f\u7528\u65b9\u6cd5\u4ee5\u53ca\u76f8\u5173\u63a5\u53e3\u6587\u6863\u7684\u94fe\u63a5\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u5728Go\u8bed\u8a00\u9879\u76ee\u4e2d\u8f7b\u677e\u5904\u7406XML\u6570\u636e\u3002\u5177\u4f53\u5b9e\u73b0\u5305\u62ecimport\u8bed\u53e5\u4e0egxml\u5e93\u7684\u8c03\u7528\u793a\u4f8b\u3002","source":"@site/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/XML\u7f16\u89e3\u7801-gxml.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801","slug":"/docs/components/encoding-gxml","permalink":"/en/docs/components/encoding-gxml","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/XML\u7f16\u89e3\u7801-gxml.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731055597000,"sidebarPosition":6,"frontMatter":{"slug":"/docs/components/encoding-gxml","title":"XML\u7f16\u89e3\u7801-gxml","sidebar_position":6,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","XML","XML\u7f16\u89e3\u7801","\u6570\u636e\u683c\u5f0f","gxml","\u7f16\u7801\u89e3\u6790","Go\u8bed\u8a00","\u7f16\u7a0b","\u63a5\u53e3\u6587\u6863"],"description":"\u672c\u9875\u9762\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528GoFrame\u6846\u67b6\u4e2d\u7684gxml\u8fdb\u884cXML\u6570\u636e\u683c\u5f0f\u7684\u7f16\u7801\u548c\u89e3\u6790\u3002\u63d0\u4f9b\u4e86gxml\u5e93\u7684\u57fa\u672c\u4f7f\u7528\u65b9\u6cd5\u4ee5\u53ca\u76f8\u5173\u63a5\u53e3\u6587\u6863\u7684\u94fe\u63a5\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u5728Go\u8bed\u8a00\u9879\u76ee\u4e2d\u8f7b\u677e\u5904\u7406XML\u6570\u636e\u3002\u5177\u4f53\u5b9e\u73b0\u5305\u62ecimport\u8bed\u53e5\u4e0egxml\u5e93\u7684\u8c03\u7528\u793a\u4f8b\u3002"},"sidebar":"mainSidebar","previous":{"title":"URL\u7f16\u89e3\u7801-gurl","permalink":"/en/docs/components/encoding-gurl"},"next":{"title":"INI\u7f16\u89e3\u7801-gini","permalink":"/en/docs/components/encoding-gini"}}');var s=n(474848),i=n(28453);const r={slug:"/docs/components/encoding-gxml",title:"XML\u7f16\u89e3\u7801-gxml",sidebar_position:6,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","XML","XML\u7f16\u89e3\u7801","\u6570\u636e\u683c\u5f0f","gxml","\u7f16\u7801\u89e3\u6790","Go\u8bed\u8a00","\u7f16\u7a0b","\u63a5\u53e3\u6587\u6863"],description:"\u672c\u9875\u9762\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528GoFrame\u6846\u67b6\u4e2d\u7684gxml\u8fdb\u884cXML\u6570\u636e\u683c\u5f0f\u7684\u7f16\u7801\u548c\u89e3\u6790\u3002\u63d0\u4f9b\u4e86gxml\u5e93\u7684\u57fa\u672c\u4f7f\u7528\u65b9\u6cd5\u4ee5\u53ca\u76f8\u5173\u63a5\u53e3\u6587\u6863\u7684\u94fe\u63a5\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u5728Go\u8bed\u8a00\u9879\u76ee\u4e2d\u8f7b\u677e\u5904\u7406XML\u6570\u636e\u3002\u5177\u4f53\u5b9e\u73b0\u5305\u62ecimport\u8bed\u53e5\u4e0egxml\u5e93\u7684\u8c03\u7528\u793a\u4f8b\u3002"},c=void 0,g={},d=[];function l(e){const o={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.p,{children:"XML\u6570\u636e\u683c\u5f0f\u7f16\u7801\u89e3\u6790\u3002"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/encoding/gxml"\n'})}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/encoding/gxml",children:"https://pkg.go.dev/github.com/gogf/gf/v2/encoding/gxml"})})]})}function m(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>r,x:()=>c});var t=n(296540);const s={},i=t.createContext(s);function r(e){const o=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:o},e.children)}}}]);