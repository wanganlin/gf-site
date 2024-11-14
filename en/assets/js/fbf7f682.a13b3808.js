"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["79946"],{781632:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>d,default:()=>u,assets:()=>l,toc:()=>c,frontMatter:()=>r});var i=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u4E8B\u52A1\u5904\u7406/ORM\u4E8B\u52A1\u5904\u7406","title":"ORM\u4E8B\u52A1\u5904\u7406","description":"\u57FA\u672C\u4ECB\u7ECD","source":"@site/versioned_docs/version-2.5.x/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u4E8B\u52A1\u5904\u7406/ORM\u4E8B\u52A1\u5904\u7406.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u4E8B\u52A1\u5904\u7406","slug":"/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u4E8B\u52A1\u5904\u7406/","permalink":"/en/2.5.x/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u4E8B\u52A1\u5904\u7406/","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.5.x/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u4E8B\u52A1\u5904\u7406/ORM\u4E8B\u52A1\u5904\u7406.md","tags":[],"version":"2.5.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":3,"frontMatter":{"title":"ORM\u4E8B\u52A1\u5904\u7406","sidebar_position":3,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"ORM\u65B9\u6CD5\u64CD\u4F5C(\u539F\u751F)","permalink":"/en/2.5.x/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u65B9\u6CD5\u64CD\u4F5C-\u539F\u751F"},"next":{"title":"ORM\u4E8B\u52A1\u5904\u7406-\u5E38\u89C4\u64CD\u4F5C","permalink":"/en/2.5.x/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u4E8B\u52A1\u5904\u7406/ORM\u4E8B\u52A1\u5904\u7406-\u5E38\u89C4\u64CD\u4F5C"}}'),s=n("785893"),o=n("250065");let r={title:"ORM\u4E8B\u52A1\u5904\u7406",sidebar_position:3,hide_title:!0},d=void 0,l={},c=[{value:"\u57FA\u672C\u4ECB\u7ECD",id:"\u57FA\u672C\u4ECB\u7ECD",level:2}];function a(e){let t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"\u57FA\u672C\u4ECB\u7ECD",children:"\u57FA\u672C\u4ECB\u7ECD"}),"\n",(0,s.jsxs)(t.p,{children:["\u4F7F\u7528 ",(0,s.jsx)(t.code,{children:"GoFrame ORM"})," \u7EC4\u4EF6\u8FDB\u884C\u4E8B\u52A1\u64CD\u4F5C\u975E\u5E38\u7B80\u4FBF\u3001\u5B89\u5168\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4E24\u79CD\u64CD\u4F5C\u65B9\u5F0F\u6765\u5B9E\u73B0\u3002"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\u5E38\u89C4\u64CD\u4F5C\uFF1A\u901A\u8FC7 ",(0,s.jsx)(t.code,{children:"Begin"})," \u5F00\u542F\u4E8B\u52A1\u4E4B\u540E\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u4E8B\u52A1\u64CD\u4F5C\u63A5\u53E3 ",(0,s.jsx)(t.code,{children:"gdb.TX"}),"\uFF0C\u968F\u540E\u53EF\u4EE5\u4F7F\u7528\u8BE5\u63A5\u53E3\u8FDB\u884C\u5982\u4E4B\u524D\u7AE0\u8282\u4ECB\u7ECD\u7684\u65B9\u6CD5\u64CD\u4F5C\u548C\u94FE\u5F0F\u64CD\u4F5C\u3002\u5E38\u89C4\u64CD\u4F5C\u5BB9\u6613\u6F0F\u6389\u5173\u95ED\u4E8B\u52A1\uFF0C\u6709\u4E00\u5B9A\u7684\u4E8B\u52A1\u64CD\u4F5C\u5B89\u5168\u98CE\u9669\u3002"]}),"\n",(0,s.jsxs)(t.li,{children:["\u95ED\u5305\u64CD\u4F5C\uFF1A\u901A\u8FC7 ",(0,s.jsx)(t.code,{children:"Transaction"})," \u95ED\u5305\u65B9\u6CD5\u7684\u5F62\u5F0F\u6765\u64CD\u4F5C\u4E8B\u52A1\uFF0C\u6240\u6709\u7684\u4E8B\u52A1\u903B\u8F91\u5728\u95ED\u5305\u4E2D\u5B9E\u73B0\uFF0C\u95ED\u5305\u7ED3\u675F\u540E\u81EA\u52A8\u5173\u95ED\u4E8B\u52A1\u4FDD\u969C\u4E8B\u52A1\u64CD\u4F5C\u5B89\u5168\u3002\u5E76\u4E14\u95ED\u5305\u64CD\u4F5C\u652F\u6301\u975E\u5E38\u4FBF\u6377\u7684 ",(0,s.jsx)(t.strong,{children:"\u5D4C\u5957\u4E8B\u52A1"}),"\uFF0C\u5D4C\u5957\u4E8B\u52A1\u5728\u4E1A\u52A1\u64CD\u4F5C\u4E2D\u900F\u660E\u65E0\u611F\u77E5\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["\u6211\u4EEC\u63A8\u8350\u4E8B\u52A1\u64CD\u4F5C\u5747\u7EDF\u4E00\u91C7\u7528 ",(0,s.jsx)(t.code,{children:"Transaction"})," \u95ED\u5305\u65B9\u5F0F\u5B9E\u73B0\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["\u63A5\u53E3\u6587\u6863\uFF1A ",(0,s.jsx)(t.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb#TX",children:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb#TX"})]})]})}function u(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return r}});var i=n(667294);let s={},o=i.createContext(s);function r(e){let t=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);