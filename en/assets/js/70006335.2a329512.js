"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[29063],{45869:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>i,contentTitle:()=>d,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u9519\u8bef\u7ba1\u7406/\u9519\u8bef\u7801\u63a5\u53e3-gcode","title":"\u9519\u8bef\u7801\u63a5\u53e3-gcode","description":"\u4e86\u89e3GoFrame\u6846\u67b6\u4e2d\u7684\u9519\u8bef\u7801\u63a5\u53e3gcode\uff0c\u4ee5\u53ca\u5982\u4f55\u5728\u9879\u76ee\u4e2d\u6709\u6548\u5730\u5904\u7406\u9519\u8bef\u3002\u672c\u6587\u6863\u8be6\u7ec6\u4ecb\u7ecd\u4e86\u9519\u8bef\u7801\u63a5\u53e3\u7684\u529f\u80fd\u548c\u4f7f\u7528\u65b9\u6cd5\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u5728GoFrame\u6846\u67b6\u4e2d\u6784\u5efa\u7a33\u5b9a\u548c\u53ef\u9760\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u786e\u4fdd\u7cfb\u7edf\u7684\u9ad8\u53ef\u7528\u6027\u548c\u53ef\u7ef4\u62a4\u6027\u3002","source":"@site/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u9519\u8bef\u7ba1\u7406/\u9519\u8bef\u7801\u63a5\u53e3-gcode.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u9519\u8bef\u7ba1\u7406","slug":"/docs/components/error-gcode","permalink":"/en/docs/components/error-gcode","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u9519\u8bef\u7ba1\u7406/\u9519\u8bef\u7801\u63a5\u53e3-gcode.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731056950000,"sidebarPosition":1,"frontMatter":{"slug":"/docs/components/error-gcode","title":"\u9519\u8bef\u7801\u63a5\u53e3-gcode","sidebar_position":1,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","\u9519\u8bef\u7801\u63a5\u53e3","\u9519\u8bef\u5904\u7406","\u6838\u5fc3\u7ec4\u4ef6","\u63a5\u53e3\u53c2\u8003","gcode","\u7ec4\u4ef6\u5f00\u53d1","\u67b6\u6784\u8bbe\u8ba1","\u7cfb\u7edf\u7a33\u5b9a\u6027"],"description":"\u4e86\u89e3GoFrame\u6846\u67b6\u4e2d\u7684\u9519\u8bef\u7801\u63a5\u53e3gcode\uff0c\u4ee5\u53ca\u5982\u4f55\u5728\u9879\u76ee\u4e2d\u6709\u6548\u5730\u5904\u7406\u9519\u8bef\u3002\u672c\u6587\u6863\u8be6\u7ec6\u4ecb\u7ecd\u4e86\u9519\u8bef\u7801\u63a5\u53e3\u7684\u529f\u80fd\u548c\u4f7f\u7528\u65b9\u6cd5\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u5728GoFrame\u6846\u67b6\u4e2d\u6784\u5efa\u7a33\u5b9a\u548c\u53ef\u9760\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u786e\u4fdd\u7cfb\u7edf\u7684\u9ad8\u53ef\u7528\u6027\u548c\u53ef\u7ef4\u62a4\u6027\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u9519\u8bef\u5904\u7406-gerror","permalink":"/en/docs/components/error-gerror"},"next":{"title":"\u529f\u80fd\u8c03\u8bd5","permalink":"/en/docs/components/debug"}}');var n=t(474848),c=t(28453);const s={slug:"/docs/components/error-gcode",title:"\u9519\u8bef\u7801\u63a5\u53e3-gcode",sidebar_position:1,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","\u9519\u8bef\u7801\u63a5\u53e3","\u9519\u8bef\u5904\u7406","\u6838\u5fc3\u7ec4\u4ef6","\u63a5\u53e3\u53c2\u8003","gcode","\u7ec4\u4ef6\u5f00\u53d1","\u67b6\u6784\u8bbe\u8ba1","\u7cfb\u7edf\u7a33\u5b9a\u6027"],description:"\u4e86\u89e3GoFrame\u6846\u67b6\u4e2d\u7684\u9519\u8bef\u7801\u63a5\u53e3gcode\uff0c\u4ee5\u53ca\u5982\u4f55\u5728\u9879\u76ee\u4e2d\u6709\u6548\u5730\u5904\u7406\u9519\u8bef\u3002\u672c\u6587\u6863\u8be6\u7ec6\u4ecb\u7ecd\u4e86\u9519\u8bef\u7801\u63a5\u53e3\u7684\u529f\u80fd\u548c\u4f7f\u7528\u65b9\u6cd5\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u5728GoFrame\u6846\u67b6\u4e2d\u6784\u5efa\u7a33\u5b9a\u548c\u53ef\u9760\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u786e\u4fdd\u7cfb\u7edf\u7684\u9ad8\u53ef\u7528\u6027\u548c\u53ef\u7ef4\u62a4\u6027\u3002"},d=void 0,i={},a=[];function p(e){const o={a:"a",p:"p",...(0,c.R)(),...e.components};return(0,n.jsxs)(o.p,{children:["\u8bf7\u53c2\u8003\u6838\u5fc3\u7ec4\u4ef6\u7ae0\u8282\uff1a ",(0,n.jsx)(o.a,{href:"/en/docs/core/gerror-code-interface",children:"\u9519\u8bef\u5904\u7406-\u9519\u8bef\u7801\u63a5\u53e3"})]})}function m(e={}){const{wrapper:o}={...(0,c.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,o,t)=>{t.d(o,{R:()=>s,x:()=>d});var r=t(296540);const n={},c=r.createContext(n);function s(e){const o=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(c.Provider,{value:o},e.children)}}}]);