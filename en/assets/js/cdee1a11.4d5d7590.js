"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["37916"],{459573:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>a,default:()=>u,assets:()=>t,toc:()=>l,frontMatter:()=>i});var r=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-\u5B50\u67E5\u8BE2\u7279\u6027","title":"ORM\u67E5\u8BE2-\u5B50\u67E5\u8BE2\u7279\u6027","description":"\u4ECE goframe v1.16 \u7248\u672C\u5F00\u59CB\uFF0C ORM \u7EC4\u4EF6\u65B0\u589E\u4E86\u4FBF\u6377\u7684\u5B50\u67E5\u8BE2\u7279\u6027\uFF0C\u76EE\u524D\u652F\u6301\u5E38\u89C1\u7684\u4E09\u79CD\u8BED\u6CD5\u7684\u5B50\u67E5\u8BE2\uFF1A Where \u5B50\u67E5\u8BE2\u3001 Having \u5B50\u67E5\u8BE2\u53CA From \u5B50\u67E5\u8BE2\u3002","source":"@site/versioned_docs/version-1.16.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-\u5B50\u67E5\u8BE2\u7279\u6027.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2","slug":"/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-\u5B50\u67E5\u8BE2\u7279\u6027","permalink":"/en/1.16.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-\u5B50\u67E5\u8BE2\u7279\u6027","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.16.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-\u5B50\u67E5\u8BE2\u7279\u6027.md","tags":[],"version":"1.16.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":6,"frontMatter":{"title":"ORM\u67E5\u8BE2-\u5B50\u67E5\u8BE2\u7279\u6027","sidebar_position":6,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"ORM\u67E5\u8BE2-Union/UnionAll","permalink":"/en/1.16.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-UnionUnionAll"},"next":{"title":"ORM\u67E5\u8BE2-\u5E38\u7528\u64CD\u4F5C\u793A\u4F8B","permalink":"/en/1.16.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-\u5E38\u7528\u64CD\u4F5C\u793A\u4F8B"}}'),d=s("785893"),o=s("250065");let i={title:"ORM\u67E5\u8BE2-\u5B50\u67E5\u8BE2\u7279\u6027",sidebar_position:6,hide_title:!0},a=void 0,t={},l=[{value:"<code>Where</code> \u5B50\u67E5\u8BE2",id:"where-\u5B50\u67E5\u8BE2",level:2},{value:"<code>Having</code> \u5B50\u67E5\u8BE2",id:"having-\u5B50\u67E5\u8BE2",level:2},{value:"<code>From</code> \u5B50\u67E5\u8BE2",id:"from-\u5B50\u67E5\u8BE2",level:2}];function c(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:["\u4ECE ",(0,d.jsx)(n.code,{children:"goframe v1.16"})," \u7248\u672C\u5F00\u59CB\uFF0C ",(0,d.jsx)(n.code,{children:"ORM"})," \u7EC4\u4EF6\u65B0\u589E\u4E86\u4FBF\u6377\u7684\u5B50\u67E5\u8BE2\u7279\u6027\uFF0C\u76EE\u524D\u652F\u6301\u5E38\u89C1\u7684\u4E09\u79CD\u8BED\u6CD5\u7684\u5B50\u67E5\u8BE2\uFF1A ",(0,d.jsx)(n.code,{children:"Where"})," \u5B50\u67E5\u8BE2\u3001 ",(0,d.jsx)(n.code,{children:"Having"})," \u5B50\u67E5\u8BE2\u53CA ",(0,d.jsx)(n.code,{children:"From"})," \u5B50\u67E5\u8BE2\u3002"]}),"\n",(0,d.jsxs)(n.h2,{id:"where-\u5B50\u67E5\u8BE2",children:[(0,d.jsx)(n.code,{children:"Where"})," \u5B50\u67E5\u8BE2"]}),"\n",(0,d.jsxs)(n.p,{children:["\u6211\u4EEC\u53EF\u4EE5\u5728 ",(0,d.jsx)(n.code,{children:"Where"})," \u6761\u4EF6\u4E2D\u4F7F\u7528\u5B50\u67E5\u8BE2\u8BED\u53E5\uFF0C\u793A\u4F8B\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'// \u83B7\u53D6\u9ED8\u8BA4\u914D\u7F6E\u7684\u6570\u636E\u5E93\u5BF9\u8C61(\u914D\u7F6E\u540D\u79F0\u4E3A"default")\ndb := g.DB()\n\ndb.Model("orders").Where("amount > ?", db.Model("orders").Fields("AVG(amount)")).Scan(&orders)\n// SELECT * FROM "orders" WHERE amount > (SELECT AVG(amount) FROM "orders")\n'})}),"\n",(0,d.jsxs)(n.h2,{id:"having-\u5B50\u67E5\u8BE2",children:[(0,d.jsx)(n.code,{children:"Having"})," \u5B50\u67E5\u8BE2"]}),"\n",(0,d.jsxs)(n.p,{children:["\u6211\u4EEC\u53EF\u4EE5\u5728 ",(0,d.jsx)(n.code,{children:"Having"})," \u6761\u4EF6\u4E2D\u4F7F\u7528\u5B50\u67E5\u8BE2\u8BED\u53E5\uFF0C\u793A\u4F8B\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'subQuery := db.Model("users").Fields("AVG(age)").WhereLike("name", "name%")\ndb.Model("users").Fields("AVG(age) as avgage").Group("name").Having("AVG(age) > ?", subQuery).Scan(&results)\n// SELECT AVG(age) as avgage FROM `users` GROUP BY `name` HAVING AVG(age) > (SELECT AVG(age) FROM `users` WHERE name LIKE "name%")\n'})}),"\n",(0,d.jsxs)(n.h2,{id:"from-\u5B50\u67E5\u8BE2",children:[(0,d.jsx)(n.code,{children:"From"})," \u5B50\u67E5\u8BE2"]}),"\n",(0,d.jsxs)(n.p,{children:["\u6211\u4EEC\u53EF\u4EE5\u5728\u4F7F\u7528 ",(0,d.jsx)(n.code,{children:"Model"})," \u65B9\u6CD5\u521B\u5EFA\u6A21\u578B\u65F6\u4F7F\u7528\u5B50\u67E5\u8BE2\u8BED\u53E5\uFF0C\u793A\u4F8B\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'db.Model("? as u", db.Model("users").Fields("name", "age")).Where("age", 18).Scan(&users)\n// SELECT * FROM (SELECT `name`,`age` FROM `users`) as u WHERE `age` = 18\n\nsubQuery1 := db.Model("users").Fields("name")\nsubQuery2 := db.Model("pets").Fields("name")\ndb.Model("? as u, ? as p", subQuery1, subQuery2).Scan(&users)\n// SELECT * FROM (SELECT `name` FROM `users`) as u, (SELECT `name` FROM `pets`) as p\n'})})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return i}});var r=s(667294);let d={},o=r.createContext(d);function i(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);