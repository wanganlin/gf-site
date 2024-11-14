"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["66331"],{902326:function(e,n,o){o.r(n),o.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>p,assets:()=>l,toc:()=>d,frontMatter:()=>i});var r=JSON.parse('{"id":"\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u8FDB\u7A0B\u7BA1\u7406-gproc/\u8FDB\u7A0B\u7BA1\u7406-gproc","title":"\u8FDB\u7A0B\u7BA1\u7406-gproc","description":"\u8FDB\u7A0B\u7BA1\u7406\u4EE5\u53CA\u8FDB\u7A0B\u95F4\u7684\u901A\u4FE1\u662F\u901A\u8FC7 gproc \u6A21\u5757\u5B9E\u73B0\u7684\uFF0C\u5176\u4E2D\u8FDB\u7A0B\u95F4\u901A\u4FE1\u91C7\u7528\u7684\u662F\u672C\u5730socket\u901A\u4FE1\u673A\u5236\u3002","source":"@site/versioned_docs/version-2.5.x/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u8FDB\u7A0B\u7BA1\u7406-gproc/\u8FDB\u7A0B\u7BA1\u7406-gproc.md","sourceDirName":"\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u8FDB\u7A0B\u7BA1\u7406-gproc","slug":"/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u8FDB\u7A0B\u7BA1\u7406-gproc/","permalink":"/en/2.5.x/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u8FDB\u7A0B\u7BA1\u7406-gproc/","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.5.x/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u8FDB\u7A0B\u7BA1\u7406-gproc/\u8FDB\u7A0B\u7BA1\u7406-gproc.md","tags":[],"version":"2.5.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":14,"frontMatter":{"title":"\u8FDB\u7A0B\u7BA1\u7406-gproc","sidebar_position":14,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u6587\u4EF6\u76D1\u63A7-gfsnotify","permalink":"/en/2.5.x/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u6587\u4EF6\u76D1\u63A7-gfsnotify"},"next":{"title":"\u8FDB\u7A0B\u7BA1\u7406-\u57FA\u672C\u4F7F\u7528","permalink":"/en/2.5.x/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u8FDB\u7A0B\u7BA1\u7406-gproc/\u8FDB\u7A0B\u7BA1\u7406-\u57FA\u672C\u4F7F\u7528"}}'),t=o("785893"),s=o("250065");let i={title:"\u8FDB\u7A0B\u7BA1\u7406-gproc",sidebar_position:14,hide_title:!0},c=void 0,l={},d=[];function h(e){let n={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["\u8FDB\u7A0B\u7BA1\u7406\u4EE5\u53CA\u8FDB\u7A0B\u95F4\u7684\u901A\u4FE1\u662F\u901A\u8FC7 ",(0,t.jsx)(n.code,{children:"gproc"})," \u6A21\u5757\u5B9E\u73B0\u7684\uFF0C\u5176\u4E2D\u8FDB\u7A0B\u95F4\u901A\u4FE1\u91C7\u7528\u7684\u662F\u672C\u5730socket\u901A\u4FE1\u673A\u5236\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u4F7F\u7528\u65B9\u5F0F"}),"\uFF1A"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/os/gproc"\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u63A5\u53E3\u6587\u6863"}),"\uFF1A"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/os/gproc",children:"https://pkg.go.dev/github.com/gogf/gf/v2/os/gproc"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u7B80\u8981\u8BF4\u660E\uFF1A"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Manager"})," \u5BF9\u8C61\u4E3A\u8FDB\u7A0B\u7BA1\u7406\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u540C\u65F6\u7BA1\u7406\u591A\u4E2A\u5B50\u8FDB\u7A0B(\u5F53\u524D\u6267\u884C\u8FDB\u7A0B\u4E3A\u7236\u8FDB\u7A0B)\uFF1B"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Process"})," \u4E3A\u8FDB\u7A0B\u5BF9\u8C61\uFF0C\u8868\u793A\u7279\u5B9A\u6267\u884C\u6216\u8005\u83B7\u53D6\u7684\u4E00\u4E2A\u8FDB\u7A0B\u8D44\u6E90\uFF1B"]}),"\n",(0,t.jsxs)(n.li,{children:["\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 ",(0,t.jsx)(n.code,{children:"Shell"}),"\u3001 ",(0,t.jsx)(n.code,{children:"ShellExec"}),"\u3001 ",(0,t.jsx)(n.code,{children:"ShellRun"})," \u6765\u6267\u884CShell\u6307\u4EE4\uFF1A","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Shell"})," \u8868\u793A\u4E00\u4E2A\u539F\u751F\u7684Shell\u6307\u4EE4\u6267\u884C\u65B9\u5F0F\uFF0C\u5E26\u81EA\u5B9A\u4E49\u7684\u8F93\u5165\u548C\u8F93\u51FA\u63A7\u5236\uFF1B"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ShellExec"})," \u6267\u884C\u547D\u4EE4\u540E\u5C06\u4F1A\u8FD4\u56DE\u8F93\u51FA\u7684\u7ED3\u679C\u5185\u5BB9\uFF1B"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ShellRun"})," \u6267\u884C\u547D\u4EE4\u540E\u5C06\u4F1A\u76F4\u63A5\u5C06\u8FD4\u56DE\u5185\u5BB9\u8F93\u51FA\u5230\u6807\u51C6\u8F93\u51FA\uFF1B"]}),"\n",(0,t.jsxs)(n.li,{children:["\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"goroutine"})," \u6765\u5B9E\u73B0\u5F02\u6B65\u7684\u6267\u884C\uFF0C\u5982\uFF1A ",(0,t.jsx)(n.code,{children:"go ShellRun(...)"})," \u7B49\u7B49\uFF1B"]}),"\n"]}),"\n"]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return c},a:function(){return i}});var r=o(667294);let t={},s=r.createContext(t);function i(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);