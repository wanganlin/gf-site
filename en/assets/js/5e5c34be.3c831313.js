"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["22820"],{988317:function(e,n,d){d.r(n),d.d(n,{metadata:()=>t,contentTitle:()=>o,default:()=>u,assets:()=>l,toc:()=>a,frontMatter:()=>c});var t=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u66F4\u65B0\u5220\u9664","title":"ORM\u94FE\u5F0F\u64CD\u4F5C-\u66F4\u65B0\u5220\u9664","description":"\u4E3A\u5B89\u5168\u6027\u4FDD\u8BC1\u3001\u9632\u6B62\u8BEF\u64CD\u4F5C\uFF0C Update \u53CA Delete \u65B9\u6CD5\u5FC5\u987B\u5E26\u6709 Where \u6761\u4EF6\u624D\u80FD\u63D0\u4EA4\u6267\u884C\uFF0C\u5426\u5219\u5C06\u4F1A\u9519\u8BEF\u8FD4\u56DE\uFF0C\u9519\u8BEF\u4FE1\u606F\u5982\uFF1A there should be WHERE condition statement for XXX operation\u3002 goframe \u662F\u4E00\u6B3E\u7528\u4E8E\u4F01\u4E1A\u751F\u4EA7\u7EA7\u522B\u7684\u6846\u67B6\uFF0C\u5404\u4E2A\u6A21\u5757\u8BBE\u8BA1\u4E25\u8C28\uFF0C\u5DE5\u7A0B\u5B9E\u8DF5\u7684\u7EC6\u8282\u5904\u7406\u5F97\u6BD4\u8F83\u597D\u3002","source":"@site/versioned_docs/version-2.3.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u66F4\u65B0\u5220\u9664.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9","slug":"/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u66F4\u65B0\u5220\u9664","permalink":"/en/2.3.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u66F4\u65B0\u5220\u9664","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.3.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u66F4\u65B0\u5220\u9664.md","tags":[],"version":"2.3.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":2,"frontMatter":{"title":"ORM\u94FE\u5F0F\u64CD\u4F5C-\u66F4\u65B0\u5220\u9664","sidebar_position":2,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"ORM\u94FE\u5F0F\u64CD\u4F5C-\u5199\u5165\u4FDD\u5B58","permalink":"/en/2.3.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u5199\u5165\u4FDD\u5B58"},"next":{"title":"ORM\u94FE\u5F0F\u64CD\u4F5C-\u5BF9\u8C61\u8F93\u5165","permalink":"/en/2.3.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u5BF9\u8C61\u8F93\u5165"}}'),r=d("785893"),s=d("250065");let c={title:"ORM\u94FE\u5F0F\u64CD\u4F5C-\u66F4\u65B0\u5220\u9664",sidebar_position:2,hide_title:!0},o=void 0,l={},a=[{value:"<code>Update</code> \u66F4\u65B0\u65B9\u6CD5",id:"update-\u66F4\u65B0\u65B9\u6CD5",level:2},{value:"<code>Counter</code> \u66F4\u65B0\u7279\u6027",id:"counter-\u66F4\u65B0\u7279\u6027",level:2},{value:"<code>Increment/Decrement</code> \u81EA\u589E/\u51CF",id:"incrementdecrement-\u81EA\u589E\u51CF",level:2},{value:"<code>RawSQL</code> \u8BED\u53E5\u5D4C\u5165",id:"rawsql-\u8BED\u53E5\u5D4C\u5165",level:2},{value:"<code>Delete</code> \u5220\u9664\u65B9\u6CD5",id:"delete-\u5220\u9664\u65B9\u6CD5",level:2},{value:"\u8F6F\u5220\u9664\u7279\u6027",id:"\u8F6F\u5220\u9664\u7279\u6027",level:2}];function i(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u4E3A\u5B89\u5168\u6027\u4FDD\u8BC1\u3001\u9632\u6B62\u8BEF\u64CD\u4F5C\uFF0C ",(0,r.jsx)(n.code,{children:"Update"})," \u53CA ",(0,r.jsx)(n.code,{children:"Delete"})," \u65B9\u6CD5\u5FC5\u987B\u5E26\u6709 ",(0,r.jsx)(n.code,{children:"Where"})," \u6761\u4EF6\u624D\u80FD\u63D0\u4EA4\u6267\u884C\uFF0C\u5426\u5219\u5C06\u4F1A\u9519\u8BEF\u8FD4\u56DE\uFF0C\u9519\u8BEF\u4FE1\u606F\u5982\uFF1A ",(0,r.jsx)(n.code,{children:"there should be WHERE condition statement for XXX operation"}),"\u3002 ",(0,r.jsx)(n.code,{children:"goframe"})," \u662F\u4E00\u6B3E\u7528\u4E8E\u4F01\u4E1A\u751F\u4EA7\u7EA7\u522B\u7684\u6846\u67B6\uFF0C\u5404\u4E2A\u6A21\u5757\u8BBE\u8BA1\u4E25\u8C28\uFF0C\u5DE5\u7A0B\u5B9E\u8DF5\u7684\u7EC6\u8282\u5904\u7406\u5F97\u6BD4\u8F83\u597D\u3002"]}),"\n",(0,r.jsxs)(n.h2,{id:"update-\u66F4\u65B0\u65B9\u6CD5",children:[(0,r.jsx)(n.code,{children:"Update"})," \u66F4\u65B0\u65B9\u6CD5"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Update"})," \u7528\u4E8E\u6570\u636E\u7684\u66F4\u65B0\uFF0C\u5F80\u5F80\u9700\u8981\u7ED3\u5408 ",(0,r.jsx)(n.code,{children:"Data"})," \u53CA ",(0,r.jsx)(n.code,{children:"Where"})," \u65B9\u6CD5\u5171\u540C\u4F7F\u7528\u3002 ",(0,r.jsx)(n.code,{children:"Data"})," \u65B9\u6CD5\u7528\u4E8E\u6307\u5B9A\u9700\u8981\u66F4\u65B0\u7684\u6570\u636E\uFF0C ",(0,r.jsx)(n.code,{children:"Where"})," \u65B9\u6CD5\u7528\u4E8E\u6307\u5B9A\u66F4\u65B0\u7684\u6761\u4EF6\u8303\u56F4\u3002\u540C\u65F6\uFF0C ",(0,r.jsx)(n.code,{children:"Update"})," \u65B9\u6CD5\u4E5F\u652F\u6301\u76F4\u63A5\u7ED9\u5B9A\u6570\u636E\u548C\u6761\u4EF6\u53C2\u6570\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4F7F\u7528\u793A\u4F8B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// UPDATE `user` SET `name`=\'john guo\' WHERE name=\'john\'\ng.Model("user").Data(g.Map{"name" : "john guo"}).Where("name", "john").Update()\ng.Model("user").Data("name=\'john guo\'").Where("name", "john").Update()\n// UPDATE `user` SET `status`=1 ORDER BY `login_time` asc LIMIT 10\ng.Model("user").Data("status", 1).Order("login_time asc").Limit(10).Update()\n\n// UPDATE `user` SET `status`=1 WHERE 1\ng.Model("user").Data("status=1").Where(1).Update()\ng.Model("user").Data("status", 1).Where(1).Update()\ng.Model("user").Data(g.Map{"status" : 1}).Where(1).Update()\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u4E5F\u53EF\u4EE5\u76F4\u63A5\u7ED9 ",(0,r.jsx)(n.code,{children:"Update"})," \u65B9\u6CD5\u4F20\u9012 ",(0,r.jsx)(n.code,{children:"data"})," \u53CA ",(0,r.jsx)(n.code,{children:"where"})," \u53C2\u6570\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// UPDATE `user` SET `name`=\'john guo\' WHERE name=\'john\'\ng.Model("user").Update(g.Map{"name" : "john guo"}, "name", "john")\ng.Model("user").Update("name=\'john guo\'", "name", "john")\n\n// UPDATE `user` SET `status`=1 WHERE 1\ng.Model("user").Update("status=1", 1)\ng.Model("user").Update(g.Map{"status" : 1}, 1)\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"counter-\u66F4\u65B0\u7279\u6027",children:[(0,r.jsx)(n.code,{children:"Counter"})," \u66F4\u65B0\u7279\u6027"]}),"\n",(0,r.jsxs)(n.p,{children:["\u53EF\u4EE5\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"Counter"})," \u7C7B\u578B\u53C2\u6570\u5BF9\u7279\u5B9A\u7684\u5B57\u6BB5\u8FDB\u884C\u6570\u503C\u64CD\u4F5C\uFF0C\u4F8B\u5982\uFF1A\u589E\u52A0\u3001\u51CF\u5C11\u64CD\u4F5C\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Counter"})," \u6570\u636E\u7ED3\u6784\u5B9A\u4E49\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"// Counter  is the type for update count.\ntype Counter struct {\n    Field string\n    Value float64\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Counter"})," \u4F7F\u7528\u793A\u4F8B\uFF0C\u5B57\u6BB5\u81EA\u589E\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'updateData := g.Map{\n    "views": &gdb.Counter{\n        Field: "views",\n        Value: 1,\n    },\n}\n// UPDATE `article` SET `views`=`views`+1 WHERE `id`=1\nresult, err := db.Update("article", updateData, "id", 1)\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Counter"})," \u4E5F\u53EF\u4EE5\u5B9E\u73B0\u975E\u81EA\u8EAB\u5B57\u6BB5\u7684\u81EA\u589E\uFF0C\u4F8B\u5982\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'updateData := g.Map{\n    "views": &gdb.Counter{\n        Field: "clicks",\n        Value: 1,\n    },\n}\n// UPDATE `article` SET `views`=`clicks`+1 WHERE `id`=1\nresult, err := db.Update("article", updateData, "id", 1)\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"incrementdecrement-\u81EA\u589E\u51CF",children:[(0,r.jsx)(n.code,{children:"Increment/Decrement"})," \u81EA\u589E/\u51CF"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"Increment"})," \u548C ",(0,r.jsx)(n.code,{children:"Decrement"})," \u65B9\u6CD5\u5B9E\u73B0\u5BF9\u6307\u5B9A\u5B57\u6BB5\u7684\u81EA\u589E/\u81EA\u51CF\u5E38\u7528\u64CD\u4F5C\u3002\u4E24\u4E2A\u65B9\u6CD5\u7684\u5B9A\u4E49\u5982\u4E0B\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"// Increment increments a column's value by a given amount.\nfunc (m *Model) Increment(column string, amount float64) (sql.Result, error)\n\n// Decrement decrements a column's value by a given amount.\nfunc (m *Model) Decrement(column string, amount float64) (sql.Result, error)\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4F7F\u7528\u793A\u4F8B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// UPDATE `article` SET `views`=`views`+10000 WHERE `id`=1\ng.Model("article").Where("id", 1).Increment("views", 10000)\n// UPDATE `article` SET `views`=`views`-10000 WHERE `id`=1\ng.Model("article").Where("id", 1).Decrement("views", 10000)\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"rawsql-\u8BED\u53E5\u5D4C\u5165",children:[(0,r.jsx)(n.code,{children:"RawSQL"})," \u8BED\u53E5\u5D4C\u5165"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"gdb.Raw"})," \u662F\u5B57\u7B26\u4E32\u7C7B\u578B\uFF0C\u8BE5\u7C7B\u578B\u7684\u53C2\u6570\u5C06\u4F1A\u76F4\u63A5\u4F5C\u4E3A ",(0,r.jsx)(n.code,{children:"SQL"})," \u7247\u6BB5\u5D4C\u5165\u5230\u63D0\u4EA4\u5230\u5E95\u5C42\u7684 ",(0,r.jsx)(n.code,{children:"SQL"})," \u8BED\u53E5\u4E2D\uFF0C\u4E0D\u4F1A\u88AB\u81EA\u52A8\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\u53C2\u6570\u7C7B\u578B\u3001\u4E5F\u4E0D\u4F1A\u88AB\u5F53\u505A\u9884\u5904\u7406\u53C2\u6570\u3002\u4F8B\u5982\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// UPDATE `user` SET login_count=\'login_count+1\',update_time=\'now()\' WHERE id=1\ng.Model("user").Data(g.Map{\n    "login_count": "login_count+1",\n    "update_time": "now()",\n}).Where("id", 1).Update()\n// \u6267\u884C\u62A5\u9519\uFF1AError Code: 1136. Column count doesn\'t match value count at row 1\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"gdb.Raw"})," \u6539\u9020\u540E\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// UPDATE `user` SET login_count=login_count+1,update_time=now() WHERE id=1\ng.Model("user").Data(g.Map{\n    "login_count": gdb.Raw("login_count+1"),\n    "update_time": gdb.Raw("now()"),\n}).Where("id", 1).Update()\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"delete-\u5220\u9664\u65B9\u6CD5",children:[(0,r.jsx)(n.code,{children:"Delete"})," \u5220\u9664\u65B9\u6CD5"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Delete"})," \u65B9\u6CD5\u7528\u4E8E\u6570\u636E\u7684\u5220\u9664\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4F7F\u7528\u793A\u4F8B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// DELETE FROM `user` WHERE uid=10\ng.Model("user").Where("uid", 10).Delete()\n// DELETE FROM `user` ORDER BY `login_time` asc LIMIT 10\ng.Model("user").Order("login_time asc").Limit(10).Delete()\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u4E5F\u53EF\u4EE5\u76F4\u63A5\u7ED9 ",(0,r.jsx)(n.code,{children:"Delete"})," \u65B9\u6CD5\u4F20\u9012 ",(0,r.jsx)(n.code,{children:"where"})," \u53C2\u6570\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// DELETE FROM `user` WHERE `uid`=10\ng.Model("user").Delete("uid", 10)\n// DELETE FROM `user` WHERE `score`<60\ng.Model("user").Delete("score < ", 60)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u8F6F\u5220\u9664\u7279\u6027",children:"\u8F6F\u5220\u9664\u7279\u6027"}),"\n",(0,r.jsxs)(n.p,{children:["\u8F6F\u5220\u9664\u7279\u6027\u8BF7\u67E5\u770B\u7AE0\u8282\uFF1A ",(0,r.jsx)(n.a,{href:"/en/2.3.x/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6-%E9%87%8D%E7%82%B9/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E9%87%8D%E7%82%B9/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E6%97%B6%E9%97%B4%E7%BB%B4%E6%8A%A4",children:"ORM\u94FE\u5F0F\u64CD\u4F5C-\u65F6\u95F4\u7EF4\u62A4"})]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return o},a:function(){return c}});var t=d(667294);let r={},s=t.createContext(r);function c(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);