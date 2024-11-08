"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[76580],{656940:(o,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u5b9e\u7528\u5de5\u5177/\u7c7b\u578b\u8f6c\u6362-gconv","title":"\u7c7b\u578b\u8f6c\u6362-gconv","description":"\u672c\u9875\u9762\u4ecb\u7ecd\u4e86GoFrame\u6846\u67b6\u4e2d\u7684\u7c7b\u578b\u8f6c\u6362\u529f\u80fd\uff0c\u8be5\u529f\u80fd\u7531gconv\u6a21\u5757\u5b9e\u73b0\u3002\u901a\u8fc7\u5f15\u7528\u5177\u4f53\u7ae0\u8282\uff0c\u7528\u6237\u53ef\u4ee5\u6df1\u5165\u4e86\u89e3\u5982\u4f55\u5728GoFrame\u4e2d\u8fdb\u884c\u7c7b\u578b\u8f6c\u6362\uff0c\u4ee5\u63d0\u5347\u5f00\u53d1\u6548\u7387\u548c\u4ee3\u7801\u53ef\u9760\u6027\u3002","source":"@site/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u5b9e\u7528\u5de5\u5177/\u7c7b\u578b\u8f6c\u6362-gconv.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u5b9e\u7528\u5de5\u5177","slug":"/docs/components/util-gconv","permalink":"/en/docs/components/util-gconv","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u5b9e\u7528\u5de5\u5177/\u7c7b\u578b\u8f6c\u6362-gconv.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731055597000,"sidebarPosition":3,"frontMatter":{"slug":"/docs/components/util-gconv","title":"\u7c7b\u578b\u8f6c\u6362-gconv","sidebar_position":3,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","gconv\u6a21\u5757","\u7c7b\u578b\u8f6c\u6362","GoFrame\u7c7b\u578b\u8f6c\u6362","gconv\u7c7b\u578b\u8f6c\u6362","GoFrame gconv","GoFrame\u6587\u6863","GoFrame\u7ec4\u4ef6","\u6838\u5fc3\u529f\u80fd"],"description":"\u672c\u9875\u9762\u4ecb\u7ecd\u4e86GoFrame\u6846\u67b6\u4e2d\u7684\u7c7b\u578b\u8f6c\u6362\u529f\u80fd\uff0c\u8be5\u529f\u80fd\u7531gconv\u6a21\u5757\u5b9e\u73b0\u3002\u901a\u8fc7\u5f15\u7528\u5177\u4f53\u7ae0\u8282\uff0c\u7528\u6237\u53ef\u4ee5\u6df1\u5165\u4e86\u89e3\u5982\u4f55\u5728GoFrame\u4e2d\u8fdb\u884c\u7c7b\u578b\u8f6c\u6362\uff0c\u4ee5\u63d0\u5347\u5f00\u53d1\u6548\u7387\u548c\u4ee3\u7801\u53ef\u9760\u6027\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u5143\u6570\u636e-gmeta","permalink":"/en/docs/components/util-gmeta"},"next":{"title":"\u6570\u636e\u6821\u9a8c-gvalid","permalink":"/en/docs/components/util-gvalid"}}');var c=n(474848),s=n(28453);const r={slug:"/docs/components/util-gconv",title:"\u7c7b\u578b\u8f6c\u6362-gconv",sidebar_position:3,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","gconv\u6a21\u5757","\u7c7b\u578b\u8f6c\u6362","GoFrame\u7c7b\u578b\u8f6c\u6362","gconv\u7c7b\u578b\u8f6c\u6362","GoFrame gconv","GoFrame\u6587\u6863","GoFrame\u7ec4\u4ef6","\u6838\u5fc3\u529f\u80fd"],description:"\u672c\u9875\u9762\u4ecb\u7ecd\u4e86GoFrame\u6846\u67b6\u4e2d\u7684\u7c7b\u578b\u8f6c\u6362\u529f\u80fd\uff0c\u8be5\u529f\u80fd\u7531gconv\u6a21\u5757\u5b9e\u73b0\u3002\u901a\u8fc7\u5f15\u7528\u5177\u4f53\u7ae0\u8282\uff0c\u7528\u6237\u53ef\u4ee5\u6df1\u5165\u4e86\u89e3\u5982\u4f55\u5728GoFrame\u4e2d\u8fdb\u884c\u7c7b\u578b\u8f6c\u6362\uff0c\u4ee5\u63d0\u5347\u5f00\u53d1\u6548\u7387\u548c\u4ee3\u7801\u53ef\u9760\u6027\u3002"},i=void 0,a={},d=[];function m(o){const e={a:"a",code:"code",p:"p",...(0,s.R)(),...o.components};return(0,c.jsxs)(e.p,{children:["\u7c7b\u578b\u8f6c\u6362\u529f\u80fd\u7531 ",(0,c.jsx)(e.code,{children:"gconv"})," \u6a21\u5757\u5b9e\u73b0\uff0c\u5177\u4f53\u8bf7\u53c2\u8003 ",(0,c.jsx)(e.a,{href:"/en/docs/core/gconv",children:"\u7c7b\u578b\u8f6c\u6362"})," \u7ae0\u8282\u3002"]})}function l(o={}){const{wrapper:e}={...(0,s.R)(),...o.components};return e?(0,c.jsx)(e,{...o,children:(0,c.jsx)(m,{...o})}):m(o)}},28453:(o,e,n)=>{n.d(e,{R:()=>r,x:()=>i});var t=n(296540);const c={},s=t.createContext(c);function r(o){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof o?o(e):{...e,...o}}),[e,o])}function i(o){let e;return e=o.disableParentContext?"function"==typeof o.components?o.components(c):o.components||c:r(o.components),t.createElement(s.Provider,{value:e},o.children)}}}]);