"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["78713"],{520424:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>O,assets:()=>s,toc:()=>a,frontMatter:()=>d});var t=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-GroupOrderHaving","title":"ORM\u67E5\u8BE2-Group/Order/Having","description":"Group/Order \u5206\u7EC4\u4E0E\u6392\u5E8F","source":"@site/versioned_docs/version-2.6.x/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-GroupOrderHaving.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2","slug":"/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-GroupOrderHaving","permalink":"/en/2.6.x/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-GroupOrderHaving","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.6.x/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-GroupOrderHaving.md","tags":[],"version":"2.6.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":6,"frontMatter":{"title":"ORM\u67E5\u8BE2-Group/Order/Having","sidebar_position":6,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"ORM\u67E5\u8BE2-LeftJoin/RightJoin/InnerJoin","permalink":"/en/2.6.x/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-LeftJoinRightJoinInnerJoin"},"next":{"title":"ORM\u67E5\u8BE2-Union/UnionAll","permalink":"/en/2.6.x/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-UnionUnionAll"}}'),i=r("785893"),o=r("250065");let d={title:"ORM\u67E5\u8BE2-Group/Order/Having",sidebar_position:6,hide_title:!0},l=void 0,s={},a=[{value:"<code>Group/Order</code> \u5206\u7EC4\u4E0E\u6392\u5E8F",id:"grouporder-\u5206\u7EC4\u4E0E\u6392\u5E8F",level:2},{value:"<code>Having</code> \u6761\u4EF6\u8FC7\u6EE4",id:"having-\u6761\u4EF6\u8FC7\u6EE4",level:2}];function c(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h2,{id:"grouporder-\u5206\u7EC4\u4E0E\u6392\u5E8F",children:[(0,i.jsx)(n.code,{children:"Group/Order"})," \u5206\u7EC4\u4E0E\u6392\u5E8F"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Group"})," \u65B9\u6CD5\u7528\u4E8E\u67E5\u8BE2\u5206\u7EC4\uFF0C ",(0,i.jsx)(n.code,{children:"Order"})," \u65B9\u6CD5\u7528\u4E8E\u67E5\u8BE2\u6392\u5E8F\u3002\u4F7F\u7528\u793A\u4F8B\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'// SELECT COUNT(*) total,age FROM `user` GROUP BY age\ng.Model("user").Fields("COUNT(*) total,age").Group("age").All()\n\n// SELECT * FROM `student` ORDER BY class asc,course asc,score desc\ng.Model("student").Order("class asc,course asc,score desc").All()\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u540C\u65F6\uFF0C ",(0,i.jsx)(n.code,{children:"goframe"})," \u7684 ",(0,i.jsx)(n.code,{children:"ORM"})," \u63D0\u4F9B\u4E86\u4E00\u4E9B\u5E38\u7528\u7684\u6392\u5E8F\u65B9\u6CD5\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"// \u6309\u7167\u6307\u5B9A\u5B57\u6BB5\u9012\u589E\u6392\u5E8F\nfunc (m *Model) OrderAsc(column string) *Model\n// \u6309\u7167\u6307\u5B9A\u5B57\u6BB5\u9012\u51CF\u6392\u5E8F\nfunc (m *Model) OrderDesc(column string) *Model\n// \u968F\u673A\u6392\u5E8F\nfunc (m *Model) OrderRandom() *Model\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u4F7F\u7528\u793A\u4F8B\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'// SELECT `id`,`title` FROM `article` ORDER BY `created_at` ASC\ng.Model("article").Fields("id,title").OrderAsc("created_at").All()\n\n// SELECT `id`,`title` FROM `article` ORDER BY `views` DESC\ng.Model("article").Fields("id,title").OrderDesc("views").All()\n\n// SELECT `id`,`title` FROM `article` ORDER BY RAND()\ng.Model("article").Fields("id,title").OrderRandom().All()\n'})}),"\n",(0,i.jsxs)(n.h2,{id:"having-\u6761\u4EF6\u8FC7\u6EE4",children:[(0,i.jsx)(n.code,{children:"Having"})," \u6761\u4EF6\u8FC7\u6EE4"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Having"})," \u65B9\u6CD5\u7528\u4E8E\u67E5\u8BE2\u7ED3\u679C\u7684\u6761\u4EF6\u8FC7\u6EE4\u3002\u4F7F\u7528\u793A\u4F8B\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'// SELECT COUNT(*) total,age FROM `user` GROUP BY age HAVING total>100\ng.Model("user").Fields("COUNT(*) total,age").Group("age").Having("total>100").All()\n\n// SELECT * FROM `student` ORDER BY class HAVING score>60\ng.Model("student").Order("class").Having("score>?", 60).All()\n'})})]})}function O(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return d}});var t=r(667294);let i={},o=t.createContext(i);function d(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);