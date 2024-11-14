"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["31472"],{358039:function(e,t,o){o.r(t),o.d(t,{metadata:()=>i,contentTitle:()=>c,default:()=>l,assets:()=>a,toc:()=>d,frontMatter:()=>r});var i=JSON.parse('{"id":"docs/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u6A21\u677F\u5F15\u64CE-gview","title":"\u6A21\u677F\u5F15\u64CE-gview","description":"GoFrame\u6846\u67B6\u4E2D\u7684\u6A21\u677F\u5F15\u64CE\u7EC4\u4EF6gview\uFF0C\u8BE6\u7EC6\u8BF4\u660E\u4E86gview\u6A21\u5757\u7684\u529F\u80FD\u548C\u4F7F\u7528\u65B9\u6CD5\u3002\u901A\u8FC7\u5BF9\u6838\u5FC3\u7EC4\u4EF6\u6A21\u677F\u5F15\u64CE\u7684\u8BB2\u89E3\uFF0C\u5E2E\u52A9\u7528\u6237\u7406\u89E3\u548C\u5E94\u7528gview\u6A21\u5757\u5B9E\u73B0\u590D\u6742\u7684\u6A21\u677F\u5F15\u64CE\u529F\u80FD\u3002","source":"@site/docs/docs/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u6A21\u677F\u5F15\u64CE-gview.md","sourceDirName":"docs/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173","slug":"/docs/components/os-gview","permalink":"/docs/components/os-gview","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u6A21\u677F\u5F15\u64CE-gview.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":15,"frontMatter":{"slug":"/docs/components/os-gview","title":"\u6A21\u677F\u5F15\u64CE-gview","sidebar_position":15,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","\u6A21\u677F\u5F15\u64CE","gview","gview\u6A21\u5757","\u6838\u5FC3\u7EC4\u4EF6","\u6A21\u677F\u5F15\u64CE\u5B9E\u73B0","\u6A21\u5757\u5B9E\u73B0","gview\u4F7F\u7528","gview\u529F\u80FD"],"description":"GoFrame\u6846\u67B6\u4E2D\u7684\u6A21\u677F\u5F15\u64CE\u7EC4\u4EF6gview\uFF0C\u8BE6\u7EC6\u8BF4\u660E\u4E86gview\u6A21\u5757\u7684\u529F\u80FD\u548C\u4F7F\u7528\u65B9\u6CD5\u3002\u901A\u8FC7\u5BF9\u6838\u5FC3\u7EC4\u4EF6\u6A21\u677F\u5F15\u64CE\u7684\u8BB2\u89E3\uFF0C\u5E2E\u52A9\u7528\u6237\u7406\u89E3\u548C\u5E94\u7528gview\u6A21\u5757\u5B9E\u73B0\u590D\u6742\u7684\u6A21\u677F\u5F15\u64CE\u529F\u80FD\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u8FDB\u7A0B\u7BA1\u7406-\u94FE\u8DEF\u8DDF\u8E2A","permalink":"/docs/components/os-gproc-tracing"},"next":{"title":"\u534F\u7A0B\u7BA1\u7406-grpool","permalink":"/docs/components/os-grpool"}}'),n=o("785893"),s=o("250065");let r={slug:"/docs/components/os-gview",title:"\u6A21\u677F\u5F15\u64CE-gview",sidebar_position:15,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","\u6A21\u677F\u5F15\u64CE","gview","gview\u6A21\u5757","\u6838\u5FC3\u7EC4\u4EF6","\u6A21\u677F\u5F15\u64CE\u5B9E\u73B0","\u6A21\u5757\u5B9E\u73B0","gview\u4F7F\u7528","gview\u529F\u80FD"],description:"GoFrame\u6846\u67B6\u4E2D\u7684\u6A21\u677F\u5F15\u64CE\u7EC4\u4EF6gview\uFF0C\u8BE6\u7EC6\u8BF4\u660E\u4E86gview\u6A21\u5757\u7684\u529F\u80FD\u548C\u4F7F\u7528\u65B9\u6CD5\u3002\u901A\u8FC7\u5BF9\u6838\u5FC3\u7EC4\u4EF6\u6A21\u677F\u5F15\u64CE\u7684\u8BB2\u89E3\uFF0C\u5E2E\u52A9\u7528\u6237\u7406\u89E3\u548C\u5E94\u7528gview\u6A21\u5757\u5B9E\u73B0\u590D\u6742\u7684\u6A21\u677F\u5F15\u64CE\u529F\u80FD\u3002"},c=void 0,a={},d=[];function g(e){let t={a:"a",code:"code",p:"p",...(0,s.a)(),...e.components};return(0,n.jsxs)(t.p,{children:["\u6A21\u677F\u5F15\u64CE\u7531 ",(0,n.jsx)(t.code,{children:"gview"})," \u6A21\u5757\u5B9E\u73B0\uFF0C\u5177\u4F53\u8BF7\u53C2\u8003 ",(0,n.jsx)(t.a,{href:"/docs/core/gview",children:"\u6A21\u677F\u5F15\u64CE"})," \u7AE0\u8282\u3002"]})}function l(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}},250065:function(e,t,o){o.d(t,{Z:function(){return c},a:function(){return r}});var i=o(667294);let n={},s=i.createContext(n);function r(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);