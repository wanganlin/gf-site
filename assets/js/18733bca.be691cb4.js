"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["51646"],{453509:function(e,d,t){t.r(d),t.d(d,{metadata:()=>n,contentTitle:()=>c,default:()=>x,assets:()=>l,toc:()=>h,frontMatter:()=>i});var n=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027/ORM\u9AD8\u7EA7\u7279\u6027-\u7C7B\u578B\u8BC6\u522B","title":"ORM\u9AD8\u7EA7\u7279\u6027-\u7C7B\u578B\u8BC6\u522B","description":"\u4F7F\u7528 GoFrame ORM \u67E5\u8BE2\u6570\u636E\u65F6\uFF0C\u7531\u4E8E\u5B57\u6BB5\u503C\u662F\u4E00\u4E2A\u6CDB\u578B\u5BF9\u8C61\uFF0C\u8FD4\u56DE\u7684\u6570\u636E\u7C7B\u578B\u5C06\u4F1A\u88AB\u81EA\u52A8\u8BC6\u522B\u6620\u5C04\u5230 Go \u53D8\u91CF\u7C7B\u578B\uFF0C\u4F5C\u4E3A\u6CDB\u578B\u7684\u5177\u4F53\u503C\u3002","source":"@site/versioned_docs/version-2.1.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027/ORM\u9AD8\u7EA7\u7279\u6027-\u7C7B\u578B\u8BC6\u522B.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027","slug":"/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027/ORM\u9AD8\u7EA7\u7279\u6027-\u7C7B\u578B\u8BC6\u522B","permalink":"/2.1.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027/ORM\u9AD8\u7EA7\u7279\u6027-\u7C7B\u578B\u8BC6\u522B","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.1.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027/ORM\u9AD8\u7EA7\u7279\u6027-\u7C7B\u578B\u8BC6\u522B.md","tags":[],"version":"2.1.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":4,"frontMatter":{"title":"ORM\u9AD8\u7EA7\u7279\u6027-\u7C7B\u578B\u8BC6\u522B","sidebar_position":4,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"ORM\u9AD8\u7EA7\u7279\u6027-\u7A7A\u8DD1\u7279\u6027","permalink":"/2.1.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027/ORM\u9AD8\u7EA7\u7279\u6027-\u7A7A\u8DD1\u7279\u6027"},"next":{"title":"ORM\u9AD8\u7EA7\u7279\u6027-\u7C7B\u578B\u8F6C\u6362","permalink":"/2.1.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027/ORM\u9AD8\u7EA7\u7279\u6027-\u7C7B\u578B\u8F6C\u6362"}}'),r=t("785893"),s=t("250065");let i={title:"ORM\u9AD8\u7EA7\u7279\u6027-\u7C7B\u578B\u8BC6\u522B",sidebar_position:4,hide_title:!0},c=void 0,l={},h=[];function o(e){let d={a:"a",code:"code",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(d.p,{children:["\u4F7F\u7528 ",(0,r.jsx)(d.code,{children:"GoFrame ORM"})," \u67E5\u8BE2\u6570\u636E\u65F6\uFF0C\u7531\u4E8E\u5B57\u6BB5\u503C\u662F\u4E00\u4E2A\u6CDB\u578B\u5BF9\u8C61\uFF0C\u8FD4\u56DE\u7684\u6570\u636E\u7C7B\u578B\u5C06\u4F1A\u88AB\u81EA\u52A8\u8BC6\u522B\u6620\u5C04\u5230 ",(0,r.jsx)(d.code,{children:"Go"})," \u53D8\u91CF\u7C7B\u578B\uFF0C\u4F5C\u4E3A\u6CDB\u578B\u7684\u5177\u4F53\u503C\u3002"]}),"\n",(0,r.jsx)(d.p,{children:"\u4F8B\u5982\uFF1A"}),"\n",(0,r.jsxs)(d.ul,{children:["\n",(0,r.jsxs)(d.li,{children:["\u5F53\u5B57\u6BB5\u7C7B\u578B\u4E3A ",(0,r.jsx)(d.code,{children:"int(xx)"})," \u65F6\uFF0C\u67E5\u8BE2\u5230\u7684\u5B57\u6BB5\u503C\u7C7B\u578B\u5C06\u4F1A\u88AB\u8BC6\u522B\u4F1A ",(0,r.jsx)(d.code,{children:"int"})," \u7C7B\u578B"]}),"\n",(0,r.jsxs)(d.li,{children:["\u5F53\u5B57\u6BB5\u7C7B\u578B\u4E3A ",(0,r.jsx)(d.code,{children:"varchar(xxx)"}),"/ ",(0,r.jsx)(d.code,{children:"char(xxx)"}),"/ ",(0,r.jsx)(d.code,{children:"text"})," \u7B49\u7C7B\u578B\u65F6\u5C06\u4F1A\u88AB\u81EA\u52A8\u8BC6\u522B\u4E3A ",(0,r.jsx)(d.code,{children:"string"})," \u7C7B\u578B"]}),"\n",(0,r.jsx)(d.li,{children:"\u2026\u2026"}),"\n"]}),"\n",(0,r.jsxs)(d.p,{children:["\u4EE5\u4E0B\u4EE5 ",(0,r.jsx)(d.code,{children:"mysql"})," \u7C7B\u578B\u4E3A\u4F8B\uFF0C\u4ECB\u7ECD\u6570\u636E\u5E93\u7C7B\u578B\u4E0E ",(0,r.jsx)(d.code,{children:"Go"})," \u53D8\u91CF\u7C7B\u578B\u7684\u81EA\u52A8\u8BC6\u522B\u6620\u5C04\u5173\u7CFB:"]}),"\n",(0,r.jsxs)(d.p,{children:["\u7248\u672C\u53EF\u80FD\u968F\u65F6\u8FED\u4EE3\u66F4\u65B0\uFF0C\u5177\u4F53\u53EF\u67E5\u770B\u6E90\u7801 ",(0,r.jsx)(d.a,{href:"https://github.com/gogf/gf/blob/master/database/gdb/gdb_core_structure.go",children:"https://github.com/gogf/gf/blob/master/database/gdb/gdb_core_structure.go"})]}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"\u6570\u636E\u5E93\u7C7B\u578B"}),(0,r.jsx)(d.th,{children:"Go\u53D8\u91CF\u7C7B\u578B"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"*char"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"string"})})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"*text"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"string"})})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"*binary"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"bytes"})})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"*blob"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"bytes"})})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"*int"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"int"})})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"*money"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"float64"})})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"bit"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"int"})})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"big_int"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"int64"})})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"float"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"float64"})})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"double"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"float64"})})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"decimal"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"float64"})})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"bool"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"bool"})})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"date"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"time.Time"})})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"datetime"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"time.Time"})})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"timestamp"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"time.Time"})})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"\u5176\u4ED6"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"string"})})]})]})]}),"\n",(0,r.jsxs)(d.p,{children:["\u8FD9\u4E00\u7279\u6027\u5BF9\u4E8E\u9700\u8981\u5C06\u67E5\u8BE2\u7ED3\u679C\u8FDB\u884C\u7F16\u7801\uFF0C\u5E76\u901A\u8FC7\u4F8B\u5982 ",(0,r.jsx)(d.code,{children:"JSON"})," \u65B9\u5F0F\u76F4\u63A5\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\u6765\u8BF4\u5C06\u4F1A\u975E\u5E38\u53CB\u597D\u3002"]})]})}function x(e={}){let{wrapper:d}={...(0,s.a)(),...e.components};return d?(0,r.jsx)(d,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,d,t){t.d(d,{Z:function(){return c},a:function(){return i}});var n=t(667294);let r={},s=n.createContext(r);function i(e){let d=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(d):{...d,...e}},[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:d},e.children)}}}]);