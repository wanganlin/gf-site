"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["28266"],{605108:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>l,default:()=>p,assets:()=>c,toc:()=>d,frontMatter:()=>r});var i=JSON.parse('{"id":"docs/\u5F00\u53D1\u5DE5\u5177/\u5DE5\u5177\u5E2E\u52A9-help","title":"\u5DE5\u5177\u5E2E\u52A9-help","description":"\u4F7F\u7528GoFrame\u6846\u67B6\u7684CLI\u5DE5\u5177\u7684\u5E2E\u52A9\u547D\u4EE4\uFF0C\u901A\u8FC7\u8F93\u5165gf -h\u6216gf [COMMAND] -h\u6765\u83B7\u53D6\u5E2E\u52A9\u4FE1\u606F\u3002\u5982\u679C\u60A8\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u9047\u5230\u95EE\u9898\uFF0C\u53EF\u968F\u65F6\u4F7F\u7528help\u547D\u4EE4\u67E5\u8BE2\u76F8\u5173\u5E2E\u52A9\u3002\u5728\u8FD9\u91CC\uFF0C\u60A8\u8FD8\u53EF\u4EE5\u4E86\u89E3\u5230\u5177\u4F53\u7684sidebar\u4F4D\u7F6E\u7684\u76F8\u5173\u4FE1\u606F\u3002","source":"@site/docs/docs/\u5F00\u53D1\u5DE5\u5177/\u5DE5\u5177\u5E2E\u52A9-help.md","sourceDirName":"docs/\u5F00\u53D1\u5DE5\u5177","slug":"/docs/cli/help","permalink":"/en/docs/cli/help","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u5F00\u53D1\u5DE5\u5177/\u5DE5\u5177\u5E2E\u52A9-help.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731330933000,"sidebarPosition":11,"frontMatter":{"slug":"/docs/cli/help","title":"\u5DE5\u5177\u5E2E\u52A9-help","sidebar_position":11,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","CLI\u5DE5\u5177","gf\u547D\u4EE4","\u5E2E\u52A9\u6587\u6863","\u547D\u4EE4\u884C\u5DE5\u5177","\u8F6F\u4EF6\u5E2E\u52A9","\u5DE5\u5177\u4F7F\u7528","sidebar\u4F4D\u7F6E"],"description":"\u4F7F\u7528GoFrame\u6846\u67B6\u7684CLI\u5DE5\u5177\u7684\u5E2E\u52A9\u547D\u4EE4\uFF0C\u901A\u8FC7\u8F93\u5165gf -h\u6216gf [COMMAND] -h\u6765\u83B7\u53D6\u5E2E\u52A9\u4FE1\u606F\u3002\u5982\u679C\u60A8\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u9047\u5230\u95EE\u9898\uFF0C\u53EF\u968F\u65F6\u4F7F\u7528help\u547D\u4EE4\u67E5\u8BE2\u76F8\u5173\u5E2E\u52A9\u3002\u5728\u8FD9\u91CC\uFF0C\u60A8\u8FD8\u53EF\u4EE5\u4E86\u89E3\u5230\u5177\u4F53\u7684sidebar\u4F4D\u7F6E\u7684\u76F8\u5173\u4FE1\u606F\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u517C\u5BB9\u4FEE\u590D-fix","permalink":"/en/docs/cli/fix"},"next":{"title":"\u6838\u5FC3\u7EC4\u4EF6(\uD83D\uDD25\u91CD\u70B9\uD83D\uDD25)","permalink":"/en/docs/core"}}'),o=n("785893"),s=n("250065");let r={slug:"/docs/cli/help",title:"\u5DE5\u5177\u5E2E\u52A9-help",sidebar_position:11,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","CLI\u5DE5\u5177","gf\u547D\u4EE4","\u5E2E\u52A9\u6587\u6863","\u547D\u4EE4\u884C\u5DE5\u5177","\u8F6F\u4EF6\u5E2E\u52A9","\u5DE5\u5177\u4F7F\u7528","sidebar\u4F4D\u7F6E"],description:"\u4F7F\u7528GoFrame\u6846\u67B6\u7684CLI\u5DE5\u5177\u7684\u5E2E\u52A9\u547D\u4EE4\uFF0C\u901A\u8FC7\u8F93\u5165gf -h\u6216gf [COMMAND] -h\u6765\u83B7\u53D6\u5E2E\u52A9\u4FE1\u606F\u3002\u5982\u679C\u60A8\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u9047\u5230\u95EE\u9898\uFF0C\u53EF\u968F\u65F6\u4F7F\u7528help\u547D\u4EE4\u67E5\u8BE2\u76F8\u5173\u5E2E\u52A9\u3002\u5728\u8FD9\u91CC\uFF0C\u60A8\u8FD8\u53EF\u4EE5\u4E86\u89E3\u5230\u5177\u4F53\u7684sidebar\u4F4D\u7F6E\u7684\u76F8\u5173\u4FE1\u606F\u3002"},l=void 0,c={},d=[];function a(e){let t={code:"code",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"\u4F7F\u7528\u65B9\u5F0F\uFF1A"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"gf -h"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"gf [COMMAND] -h"})}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["\u4EFB\u4F55\u4E0D\u61C2\u7684\uFF0C\u5C31\u7528 ",(0,o.jsx)(t.code,{children:"help"})," \u770B\u770B\u5427\u3002"]})]})}function p(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return r}});var i=n(667294);let o={},s=i.createContext(o);function r(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);