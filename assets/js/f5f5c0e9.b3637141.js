"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["63195"],{682189:function(e,n,r){r.r(n),r.d(n,{metadata:()=>l,contentTitle:()=>c,default:()=>u,assets:()=>s,toc:()=>t,frontMatter:()=>o});var l=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-AllOneArrayValueCount","title":"ORM\u67E5\u8BE2-All/One/Array/Value/Count","description":"All/One/Array/Value/Count","source":"@site/versioned_docs/version-1.16.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-AllOneArrayValueCount.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2","slug":"/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-AllOneArrayValueCount","permalink":"/1.16.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-AllOneArrayValueCount","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.16.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-AllOneArrayValueCount.md","tags":[],"version":"1.16.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":1,"frontMatter":{"title":"ORM\u67E5\u8BE2-All/One/Array/Value/Count","sidebar_position":1,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"ORM\u67E5\u8BE2-Where/WhereOr/WhereNot","permalink":"/1.16.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-WhereWhereOrWhereNot"},"next":{"title":"ORM\u67E5\u8BE2-Struct/Structs/Scan","permalink":"/1.16.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-StructStructsScan"}}'),d=r("785893"),i=r("250065");let o={title:"ORM\u67E5\u8BE2-All/One/Array/Value/Count",sidebar_position:1,hide_title:!0},c=void 0,s={},t=[{value:"<code>All/One/Array/Value/Count</code>",id:"allonearrayvaluecount",level:2},{value:"<code>Find*</code> \u652F\u6301\u4E3B\u952E\u6761\u4EF6\u7684\u6570\u636E\u67E5\u8BE2",id:"find-\u652F\u6301\u4E3B\u952E\u6761\u4EF6\u7684\u6570\u636E\u67E5\u8BE2",level:2}];function a(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h2,{id:"allonearrayvaluecount",children:(0,d.jsx)(n.code,{children:"All/One/Array/Value/Count"})}),"\n",(0,d.jsx)(n.p,{children:"\u8FD9\u56DB\u4E2A\u65B9\u6CD5\u662F\u6570\u636E\u67E5\u8BE2\u6BD4\u8F83\u5E38\u7528\u7684\u65B9\u6CD5\uFF0C\u65B9\u6CD5\u5217\u8868\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:"func (m *Model) All(where ...interface{} (Result, error)\nfunc (m *Model) One(where ...interface{}) (Record, error)\nfunc (m *Model) Array(fieldsAndWhere ...interface{}) ([]Value, error)\nfunc (m *Model) Value(fieldsAndWhere ...interface{}) (Value, error)\nfunc (m *Model) Count(where ...interface{}) (int, error)\nfunc (m *Model) CountColumn(column string) (int, error)\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u7B80\u8981\u8BF4\u660E\uFF1A"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"All"})," \u7528\u4E8E\u67E5\u8BE2\u5E76\u8FD4\u56DE\u591A\u6761\u8BB0\u5F55\u7684\u5217\u8868/\u6570\u7EC4\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"One"})," \u7528\u4E8E\u67E5\u8BE2\u5E76\u8FD4\u56DE\u5355\u6761\u8BB0\u5F55\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"Array"})," \u7528\u4E8E\u67E5\u8BE2\u6307\u5B9A\u5B57\u6BB5\u5217\u7684\u6570\u636E\uFF0C\u8FD4\u56DE\u6570\u7EC4\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"Value"})," \u7528\u4E8E\u67E5\u8BE2\u5E76\u8FD4\u56DE\u4E00\u4E2A\u5B57\u6BB5\u503C\uFF0C\u5F80\u5F80\u9700\u8981\u7ED3\u5408 ",(0,d.jsx)(n.code,{children:"Fields"})," \u65B9\u6CD5\u4F7F\u7528\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"Count"})," \u7528\u4E8E\u67E5\u8BE2\u5E76\u8FD4\u56DE\u8BB0\u5F55\u6570\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["\u6B64\u5916\uFF0C\u4E5F\u53EF\u4EE5\u770B\u5F97\u5230\u8FD9\u56DB\u4E2A\u65B9\u6CD5\u5B9A\u4E49\u4E2D\u4E5F\u652F\u6301\u6761\u4EF6\u53C2\u6570\u7684\u76F4\u63A5\u8F93\u5165\uFF0C\u53C2\u6570\u7C7B\u578B\u4E0E ",(0,d.jsx)(n.code,{children:"Where"})," \u65B9\u6CD5\u4E00\u81F4\u3002\u4F46\u9700\u8981\u6CE8\u610F\uFF0C\u5176\u4E2D ",(0,d.jsx)(n.code,{children:"Array"})," \u548C ",(0,d.jsx)(n.code,{children:"Value"})," \u65B9\u6CD5\u7684\u53C2\u6570\u4E2D\u81F3\u5C11\u5E94\u8BE5\u8F93\u5165\u5B57\u6BB5\u53C2\u6570\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u4F7F\u7528\u793A\u4F8B\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'// SELECT * FROM `user` WHERE `score`>60\nModel("user").Where("score>?", 60).All()\n\n// SELECT * FROM `user` WHERE `score`>60 LIMIT 1\nModel("user").Where("score>?", 60).One()\n\n// SELECT `name` FROM `user` WHERE `score`>60\nModel("user").Fields("name").Where("score>?", 60).Array()\n\n// SELECT `name` FROM `user` WHERE `uid`=1 LIMIT 1\nModel("user").Fields("name").Where("uid", 1).Value()\n\n// SELECT COUNT(1) FROM `user` WHERE `status` IN(1,2,3)\nModel("user").Where("status", g.Slice{1,2,3}).Count()\n'})}),"\n",(0,d.jsxs)(n.h2,{id:"find-\u652F\u6301\u4E3B\u952E\u6761\u4EF6\u7684\u6570\u636E\u67E5\u8BE2",children:[(0,d.jsx)(n.code,{children:"Find*"})," \u652F\u6301\u4E3B\u952E\u6761\u4EF6\u7684\u6570\u636E\u67E5\u8BE2"]}),"\n",(0,d.jsx)(n.p,{children:"\u65B9\u6CD5\u5217\u8868\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:"func (m *Model) FindAll(where ...interface{}) (Result, error)\nfunc (m *Model) FindOne(where ...interface{}) (Record, error)\nfunc (m *Model) FindArray(fieldsAndWhere ...interface{}) (Value, error)\nfunc (m *Model) FindValue(fieldsAndWhere ...interface{}) (Value, error)\nfunc (m *Model) FindCount(where ...interface{}) (int, error)\nfunc (m *Model) FindScan(pointer interface{}, where ...interface{}) error\n"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"Find*"})," \u65B9\u6CD5\u5305\u542B\uFF1A ",(0,d.jsx)(n.code,{children:"FindAll/FindOne/FineValue/FindCount/FindScan"}),"\uFF0C\u8FD9\u4E9B\u65B9\u6CD5\u4E0E ",(0,d.jsx)(n.code,{children:"All/One/Array/Value/Count/Scan"})," \u65B9\u6CD5\u7684\u533A\u522B\u5728\u4E8E\uFF0C\u5F53\u65B9\u6CD5\u76F4\u63A5\u7ED9\u5B9A\u6761\u4EF6\u53C2\u6570\u65F6\uFF0C\u524D\u8005\u7684\u6548\u679C\u4E0E ",(0,d.jsx)(n.code,{children:"WherePri"})," \u65B9\u6CD5\u4E00\u81F4\uFF1B\u800C\u540E\u8005\u7684\u6548\u679C\u4E0E ",(0,d.jsx)(n.code,{children:"Where"})," \u65B9\u6CD5\u4E00\u81F4\u3002\u4E5F\u5C31\u662F\u8BF4 ",(0,d.jsx)(n.code,{children:"Find*"})," \u65B9\u6CD5\u7684\u6761\u4EF6\u53C2\u6570\u652F\u6301\u667A\u80FD\u4E3B\u952E\u8BC6\u522B\u7279\u6027\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u4F7F\u7528\u793A\u4F8B\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'// SELECT * FROM `scores` WHERE `id`=1\nModel("scores").FindAll(1)\n\n// SELECT * FROM `scores` WHERE `id`=1 LIMIT 1\nModel("scores").FindOne(1)\n\n// SELECT `name` FROM `scores` WHERE `id`=1\nModel("scores").FindArray(1, "name")\n\n// SELECT `name` FROM `scores` WHERE `id`=1 LIMIT 1\nModel("user").FindValue(1, "name")\n\n// SELECT COUNT(1) FROM `user`  WHERE `id`=1\nModel("user").FindCount(1)\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u5173\u4E8E ",(0,d.jsx)(n.code,{children:"Scan/FindScan"})," \u65B9\u6CD5\u4ECB\u7ECD\uFF0C\u8BF7\u67E5\u770B\u540E\u7EED\u7AE0\u8282\u3002"]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return o}});var l=r(667294);let d={},i=l.createContext(d);function o(e){let n=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);