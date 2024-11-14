"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["10494"],{505322:function(e,n,i){i.r(n),i.d(n,{metadata:()=>d,contentTitle:()=>c,default:()=>h,assets:()=>o,toc:()=>l,frontMatter:()=>t});var d=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u63A5\u53E3\u5F00\u53D1/ORM\u63A5\u53E3\u5F00\u53D1","title":"ORM\u63A5\u53E3\u5F00\u53D1","description":"gdb \u6A21\u5757\u4F7F\u7528\u4E86\u975E\u5E38\u7075\u6D3B\u4E14\u6269\u5C55\u6027\u5F3A\u7684\u63A5\u53E3\u8BBE\u8BA1\uFF0C\u63A5\u53E3\u8BBE\u8BA1\u5141\u8BB8\u5F00\u53D1\u8005\u53EF\u4EE5\u975E\u5E38\u65B9\u4FBF\u5730\u81EA\u5B9A\u4E49\u5B9E\u73B0\u548C\u66FF\u6362\u63A5\u53E3\u5B9A\u4E49\u4E2D\u7684\u4EFB\u4F55\u65B9\u6CD5\u3002","source":"@site/versioned_docs/version-2.2.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u63A5\u53E3\u5F00\u53D1/ORM\u63A5\u53E3\u5F00\u53D1.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u63A5\u53E3\u5F00\u53D1","slug":"/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u63A5\u53E3\u5F00\u53D1/","permalink":"/en/2.2.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u63A5\u53E3\u5F00\u53D1/","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.2.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u63A5\u53E3\u5F00\u53D1/ORM\u63A5\u53E3\u5F00\u53D1.md","tags":[],"version":"2.2.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":8,"frontMatter":{"title":"ORM\u63A5\u53E3\u5F00\u53D1","sidebar_position":8,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"ORM\u6A21\u578B\u751F\u6210","permalink":"/en/2.2.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u6A21\u578B\u751F\u6210"},"next":{"title":"ORM\u63A5\u53E3\u5F00\u53D1-\u56DE\u8C03\u5904\u7406","permalink":"/en/2.2.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u63A5\u53E3\u5F00\u53D1/ORM\u63A5\u53E3\u5F00\u53D1-\u56DE\u8C03\u5904\u7406"}}'),r=i("785893"),s=i("250065");let t={title:"ORM\u63A5\u53E3\u5F00\u53D1",sidebar_position:8,hide_title:!0},c=void 0,o={},l=[{value:"<code>DB</code> \u63A5\u53E3",id:"db-\u63A5\u53E3",level:2},{value:"<code>DB</code> \u63A5\u53E3\u5173\u7CFB",id:"db-\u63A5\u53E3\u5173\u7CFB",level:2},{value:"<code>Driver</code> \u63A5\u53E3",id:"driver-\u63A5\u53E3",level:2}];function a(e){let n={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"gdb"})," \u6A21\u5757\u4F7F\u7528\u4E86\u975E\u5E38\u7075\u6D3B\u4E14\u6269\u5C55\u6027\u5F3A\u7684\u63A5\u53E3\u8BBE\u8BA1\uFF0C\u63A5\u53E3\u8BBE\u8BA1\u5141\u8BB8\u5F00\u53D1\u8005\u53EF\u4EE5\u975E\u5E38\u65B9\u4FBF\u5730\u81EA\u5B9A\u4E49\u5B9E\u73B0\u548C\u66FF\u6362\u63A5\u53E3\u5B9A\u4E49\u4E2D\u7684\u4EFB\u4F55\u65B9\u6CD5\u3002"]}),"\n",(0,r.jsxs)(n.h2,{id:"db-\u63A5\u53E3",children:[(0,r.jsx)(n.code,{children:"DB"})," \u63A5\u53E3"]}),"\n",(0,r.jsxs)(n.p,{children:["\u63A5\u53E3\u6587\u6863\uFF1A ",(0,r.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb#DB",children:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb#DB"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"DB"})," \u63A5\u53E3\u662F\u6570\u636E\u5E93\u64CD\u4F5C\u7684\u6838\u5FC3\u63A5\u53E3\uFF0C\u4E5F\u662F\u6211\u4EEC\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"ORM"})," \u64CD\u4F5C\u6570\u636E\u5E93\u65F6\u6700\u5E38\u7528\u7684\u63A5\u53E3\uFF0C\u8FD9\u91CC\u4E3B\u8981\u5BF9\u63A5\u53E3\u7684\u51E0\u4E2A\u91CD\u8981\u65B9\u6CD5\u505A\u8BF4\u660E\uFF1A"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Open"})," \u65B9\u6CD5\u7528\u4E8E\u521B\u5EFA\u7279\u5B9A\u7684\u6570\u636E\u5E93\u8FDE\u63A5\u5BF9\u8C61\uFF0C\u8FD4\u56DE\u7684\u662F\u6807\u51C6\u5E93\u7684 ",(0,r.jsx)(n.code,{children:"*sql.DB"})," \u901A\u7528\u6570\u636E\u5E93\u5BF9\u8C61\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Do*"})," \u7CFB\u5217\u65B9\u6CD5\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570 ",(0,r.jsx)(n.code,{children:"link"})," \u4E3A ",(0,r.jsx)(n.code,{children:"Link"})," \u63A5\u53E3\u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u5728 ",(0,r.jsx)(n.code,{children:"master-slave"})," \u6A21\u5F0F\u4E0B\u53EF\u80FD\u662F\u4E00\u4E2A\u4E3B\u8282\u70B9\u5BF9\u8C61\uFF0C\u4E5F\u53EF\u80FD\u662F\u4ECE\u8282\u70B9\u5BF9\u8C61\uFF0C\u56E0\u6B64\u5982\u679C\u5728\u7EE7\u627F\u7684\u9A71\u52A8\u5BF9\u8C61\u5B9E\u73B0\u4E2D\u4F7F\u7528\u8BE5 ",(0,r.jsx)(n.code,{children:"link"})," \u53C2\u6570\u65F6\uFF0C\u6CE8\u610F\u5F53\u524D\u7684\u8FD0\u884C\u6A21\u5F0F\u3002 ",(0,r.jsx)(n.code,{children:"slave"})," \u8282\u70B9\u5728\u5927\u90E8\u5206\u7684\u6570\u636E\u5E93\u4E3B\u4ECE\u6A21\u5F0F\u4E2D\u5F80\u5F80\u662F\u4E0D\u53EF\u5199\u7684\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"HandleSqlBeforeCommit"})," \u65B9\u6CD5\u5C06\u4F1A\u5728\u6BCF\u4E00\u6761 ",(0,r.jsx)(n.code,{children:"SQL"})," \u63D0\u4EA4\u7ED9\u6570\u636E\u5E93\u670D\u52A1\u7AEF\u6267\u884C\u65F6\u88AB\u8C03\u7528\u505A\u4E00\u4E9B\u63D0\u4EA4\u524D\u7684\u56DE\u8C03\u5904\u7406\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u5176\u4ED6\u63A5\u53E3\u65B9\u6CD5\u8BE6\u89C1\u63A5\u53E3\u6587\u6863\u6216\u8005\u6E90\u7801\u6587\u4EF6\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"db-\u63A5\u53E3\u5173\u7CFB",children:[(0,r.jsx)(n.code,{children:"DB"})," \u63A5\u53E3\u5173\u7CFB"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(771454).Z+"",width:"2432",height:"1866"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GoFrame ORM Relations"})}),"\n",(0,r.jsxs)(n.h2,{id:"driver-\u63A5\u53E3",children:[(0,r.jsx)(n.code,{children:"Driver"})," \u63A5\u53E3"]}),"\n",(0,r.jsxs)(n.p,{children:["\u63A5\u53E3\u6587\u6863\uFF1A ",(0,r.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb#Driver",children:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb#Driver"})]}),"\n",(0,r.jsx)(n.p,{children:"\u5F00\u53D1\u8005\u81EA\u5B9A\u4E49\u7684\u9A71\u52A8\u9700\u8981\u5B9E\u73B0\u4EE5\u4E0B\u63A5\u53E3\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"// Driver is the interface for integrating sql drivers into package gdb.\ntype Driver interface {\n    // New creates and returns a database object for specified database server.\n    New(core *Core, node *ConfigNode) (DB, error)\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5176\u4E2D\u7684 ",(0,r.jsx)(n.code,{children:"New"})," \u65B9\u6CD5\u7528\u4E8E\u6839\u636E ",(0,r.jsx)(n.code,{children:"Core"})," \u6570\u636E\u5E93\u57FA\u7840\u5BF9\u8C61\u4EE5\u53CA ",(0,r.jsx)(n.code,{children:"ConfigNode"})," \u914D\u7F6E\u5BF9\u8C61\u521B\u5EFA\u9A71\u52A8\u5BF9\u5E94\u7684\u6570\u636E\u5E93\u64CD\u4F5C\u5BF9\u8C61\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u8FD4\u56DE\u7684\u6570\u636E\u5E93\u5BF9\u8C61\u9700\u8981\u5B9E\u73B0 ",(0,r.jsx)(n.code,{children:"DB"})," \u63A5\u53E3\u3002\u800C\u6570\u636E\u5E93\u57FA\u7840\u5BF9\u8C61 ",(0,r.jsx)(n.code,{children:"Core"})," \u5DF2\u7ECF\u5B9E\u73B0\u4E86 ",(0,r.jsx)(n.code,{children:"DB"})," \u63A5\u53E3\uFF0C\u56E0\u6B64\u5F00\u53D1\u8005\u53EA\u9700\u8981\u201D\u7EE7\u627F\u201D ",(0,r.jsx)(n.code,{children:"Core"})," \u5BF9\u8C61\uFF0C\u7136\u540E\u6839\u636E\u9700\u8981\u8986\u76D6\u5BF9\u5E94\u7684\u63A5\u53E3\u5B9E\u73B0\u65B9\u6CD5\u5373\u53EF\u3002"]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},771454:function(e,n,i){i.d(n,{Z:function(){return d}});let d=i.p+"assets/images/d5fb0a583284c2e45eb7dd504a001279-891c603c932080da42159aa53d0f4e68.png"},250065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return t}});var d=i(667294);let r={},s=d.createContext(r);function t(e){let n=d.useContext(s);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),d.createElement(s.Provider,{value:n},e.children)}}}]);