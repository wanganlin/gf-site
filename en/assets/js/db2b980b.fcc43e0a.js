"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["30628"],{249170:function(e,n,s){s.r(n),s.d(n,{metadata:()=>d,contentTitle:()=>c,default:()=>h,assets:()=>l,toc:()=>o,frontMatter:()=>i});var d=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u5199\u5165\u4FDD\u5B58","title":"ORM\u94FE\u5F0F\u64CD\u4F5C-\u5199\u5165\u4FDD\u5B58","description":"\u5E38\u7528\u65B9\u6CD5","source":"@site/versioned_docs/version-2.6.x/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u5199\u5165\u4FDD\u5B58.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C","slug":"/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u5199\u5165\u4FDD\u5B58","permalink":"/en/2.6.x/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u5199\u5165\u4FDD\u5B58","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.6.x/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u5199\u5165\u4FDD\u5B58.md","tags":[],"version":"2.6.x","lastUpdatedBy":"John","lastUpdatedAt":1730727129000,"sidebarPosition":1,"frontMatter":{"title":"ORM\u94FE\u5F0F\u64CD\u4F5C-\u5199\u5165\u4FDD\u5B58","sidebar_position":1,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"ORM\u94FE\u5F0F\u64CD\u4F5C-\u6A21\u578B\u521B\u5EFA","permalink":"/en/2.6.x/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6A21\u578B\u521B\u5EFA"},"next":{"title":"ORM\u94FE\u5F0F\u64CD\u4F5C-\u66F4\u65B0\u5220\u9664","permalink":"/en/2.6.x/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u66F4\u65B0\u5220\u9664"}}'),r=s("785893"),a=s("250065");let i={title:"ORM\u94FE\u5F0F\u64CD\u4F5C-\u5199\u5165\u4FDD\u5B58",sidebar_position:1,hide_title:!0},c=void 0,l={},o=[{value:"\u5E38\u7528\u65B9\u6CD5",id:"\u5E38\u7528\u65B9\u6CD5",level:2},{value:"<code>Insert/Replace/Save</code>",id:"insertreplacesave",level:3},{value:"<code>InsertIgnore</code>",id:"insertignore",level:3},{value:"<code>InsertAndGetId</code>",id:"insertandgetid",level:3},{value:"<code>OnDuplicate/OnDuplicateEx</code>",id:"onduplicateonduplicateex",level:3},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:2},{value:"\u793A\u4F8B1\uFF0C\u57FA\u672C\u4F7F\u7528",id:"\u793A\u4F8B1\u57FA\u672C\u4F7F\u7528",level:3},{value:"\u793A\u4F8B2\uFF0C\u6570\u636E\u6279\u91CF\u5199\u5165",id:"\u793A\u4F8B2\u6570\u636E\u6279\u91CF\u5199\u5165",level:3},{value:"\u793A\u4F8B3\uFF0C\u6570\u636E\u6279\u91CF\u4FDD\u5B58",id:"\u793A\u4F8B3\u6570\u636E\u6279\u91CF\u4FDD\u5B58",level:3},{value:"<code>RawSQL</code> \u8BED\u53E5\u5D4C\u5165",id:"rawsql-\u8BED\u53E5\u5D4C\u5165",level:2}];function t(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u5E38\u7528\u65B9\u6CD5",children:"\u5E38\u7528\u65B9\u6CD5"}),"\n",(0,r.jsx)(n.h3,{id:"insertreplacesave",children:(0,r.jsx)(n.code,{children:"Insert/Replace/Save"})}),"\n",(0,r.jsx)(n.p,{children:"\u8FD9\u51E0\u4E2A\u94FE\u5F0F\u64CD\u4F5C\u65B9\u6CD5\u7528\u4E8E\u6570\u636E\u7684\u5199\u5165\uFF0C\u5E76\u4E14\u652F\u6301\u81EA\u52A8\u7684\u5355\u6761\u6216\u8005\u6279\u91CF\u7684\u6570\u636E\u5199\u5165\uFF0C\u533A\u522B\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Insert"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"INSERT INTO"})," \u8BED\u53E5\u8FDB\u884C\u6570\u636E\u5E93\u5199\u5165\uFF0C\u5982\u679C\u5199\u5165\u7684\u6570\u636E\u4E2D\u5B58\u5728\u4E3B\u952E\u6216\u8005\u552F\u4E00\u7D22\u5F15\u65F6\uFF0C\u8FD4\u56DE\u5931\u8D25\uFF0C\u5426\u5219\u5199\u5165\u4E00\u6761\u65B0\u6570\u636E\u3002"]}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Replace"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"REPLACE INTO"})," \u8BED\u53E5\u8FDB\u884C\u6570\u636E\u5E93\u5199\u5165\uFF0C\u5982\u679C\u5199\u5165\u7684\u6570\u636E\u4E2D\u5B58\u5728\u4E3B\u952E\u6216\u8005\u552F\u4E00\u7D22\u5F15\u65F6\uFF0C\u4F1A\u5220\u9664\u539F\u6709\u7684\u8BB0\u5F55\uFF0C\u5FC5\u5B9A\u4F1A\u5199\u5165\u4E00\u6761\u65B0\u8BB0\u5F55\u3002"]}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Save"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"INSERT INTO"})," \u8BED\u53E5\u8FDB\u884C\u6570\u636E\u5E93\u5199\u5165\uFF0C\u5982\u679C\u5199\u5165\u7684\u6570\u636E\u4E2D\u5B58\u5728\u4E3B\u952E\u6216\u8005\u552F\u4E00\u7D22\u5F15\u65F6\uFF0C\u66F4\u65B0\u539F\u6709\u6570\u636E\uFF0C\u5426\u5219\u5199\u5165\u4E00\u6761\u65B0\u6570\u636E\u3002\u5BF9\u4E8E\u90E8\u5206\u6570\u636E\u5E93\uFF0C\u4F8B\u5982 ",(0,r.jsx)(n.code,{children:"PgSQL, SQL server, Oracle"})," \u53EF\u4EE5\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"OnConflict"})," \u65B9\u6CD5\u6307\u5B9A\u51B2\u7A81\u952E\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'db.Model(table).Data(g.Map{\n       "id":          1,\n       "passport":    "p1",\n       "password":    "pw1",\n}).OnConflict("id").Save()\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5728\u90E8\u5206\u6570\u636E\u5E93\u7C7B\u578B\u4E2D\uFF0C\u5E76\u4E0D\u652F\u6301 ",(0,r.jsx)(n.code,{children:"Replace/Save"})," \u65B9\u6CD5\uFF0C\u5177\u4F53\u8BF7\u53C2\u8003 ",(0,r.jsx)(n.a,{href:"https://wiki.goframe.org/pages/viewpage.action?pageId=1114699",children:"\u94FE\u5F0F\u64CD\u4F5C"})," \u4ECB\u7ECD\u7AE0\u8282\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u8FD9\u51E0\u4E2A\u65B9\u6CD5\u9700\u8981\u7ED3\u5408 ",(0,r.jsx)(n.code,{children:"Data"})," \u65B9\u6CD5\u4F7F\u7528\uFF0C\u8BE5\u65B9\u6CD5\u7528\u4E8E\u4F20\u9012\u6570\u636E\u53C2\u6570\uFF0C\u7528\u4E8E\u6570\u636E\u5199\u5165/\u66F4\u65B0\u7B49\u5199\u64CD\u4F5C\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"insertignore",children:(0,r.jsx)(n.code,{children:"InsertIgnore"})}),"\n",(0,r.jsx)(n.p,{children:"\u7528\u4E8E\u5199\u5165\u6570\u636E\u65F6\u5982\u679C\u5199\u5165\u7684\u6570\u636E\u4E2D\u5B58\u5728\u4E3B\u952E\u6216\u8005\u552F\u4E00\u7D22\u5F15\u65F6\uFF0C\u5FFD\u7565\u9519\u8BEF\u7EE7\u7EED\u6267\u884C\u5199\u5165\u3002\u8BE5\u65B9\u6CD5\u5B9A\u4E49\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func (m *Model) InsertIgnore(data ...interface{}) (result sql.Result, err error)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"insertandgetid",children:(0,r.jsx)(n.code,{children:"InsertAndGetId"})}),"\n",(0,r.jsxs)(n.p,{children:["\u7528\u4E8E\u5199\u5165\u6570\u636E\u65F6\u5E76\u76F4\u63A5\u8FD4\u56DE\u81EA\u589E\u5B57\u6BB5\u7684 ",(0,r.jsx)(n.code,{children:"ID"}),"\u3002\u8BE5\u65B9\u6CD5\u5B9A\u4E49\u5982\u4E0B\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func (m *Model) InsertAndGetId(data ...interface{}) (lastInsertId int64, err error)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"onduplicateonduplicateex",children:(0,r.jsx)(n.code,{children:"OnDuplicate/OnDuplicateEx"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"OnDuplicate/OnDuplicateEx"})," \u65B9\u6CD5\u9700\u8981\u7ED3\u5408 ",(0,r.jsx)(n.code,{children:"Save"})," \u65B9\u6CD5\u4E00\u8D77\u4F7F\u7528\uFF0C\u7528\u4E8E\u6307\u5B9A ",(0,r.jsx)(n.code,{children:"Save"})," \u65B9\u6CD5\u7684\u66F4\u65B0/\u4E0D\u66F4\u65B0\u5B57\u6BB5\uFF0C\u53C2\u6570\u4E3A\u5B57\u7B26\u4E32\u3001\u5B57\u7B26\u4E32\u6570\u7EC4\u3001 ",(0,r.jsx)(n.code,{children:"Map"}),"\u3002\u4F8B\u5982\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'OnDuplicate("nickname, age")\nOnDuplicate("nickname", "age")\nOnDuplicate(g.Map{\n    "nickname": gdb.Raw("CONCAT(\'name_\', VALUES(`nickname`))"),\n})\nOnDuplicate(g.Map{\n    "nickname": "passport",\n})\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u5176\u4E2D ",(0,r.jsx)(n.code,{children:"OnDuplicateEx"})," \u7528\u4E8E\u6392\u9664\u6307\u5B9A\u5FFD\u7565\u66F4\u65B0\u7684\u5B57\u6BB5\uFF0C\u6392\u9664\u7684\u5B57\u6BB5\u9700\u8981\u5728\u5199\u5165\u7684\u6570\u636E\u96C6\u5408\u4E2D\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,r.jsx)(n.h3,{id:"\u793A\u4F8B1\u57FA\u672C\u4F7F\u7528",children:"\u793A\u4F8B1\uFF0C\u57FA\u672C\u4F7F\u7528"}),"\n",(0,r.jsxs)(n.p,{children:["\u6570\u636E\u5199\u5165/\u4FDD\u5B58\u65B9\u6CD5\u9700\u8981\u7ED3\u5408 ",(0,r.jsx)(n.code,{children:"Data"})," \u65B9\u6CD5\u4F7F\u7528\uFF0C\u65B9\u6CD5\u7684\u53C2\u6570\u7C7B\u578B\u53EF\u4EE5\u4E3A ",(0,r.jsx)(n.code,{children:"Map/Struct/Slice"}),"\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// INSERT INTO `user`(`name`) VALUES(\'john\')\ng.Model("user").Data(g.Map{"name": "john"}).Insert()\n\n// INSERT IGNORE INTO `user`(`uid`,`name`) VALUES(10000,\'john\')\ng.Model("user").Data(g.Map{"uid": 10000, "name": "john"}).InsertIgnore()\n\n// REPLACE INTO `user`(`uid`,`name`) VALUES(10000,\'john\')\ng.Model("user").Data(g.Map{"uid": 10000, "name": "john"}).Replace()\n\n// INSERT INTO `user`(`uid`,`name`) VALUES(10001,\'john\') ON DUPLICATE KEY UPDATE `uid`=VALUES(`uid`),`name`=VALUES(`name`)\ng.Model("user").Data(g.Map{"uid": 10001, "name": "john"}).Save()\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u4E5F\u53EF\u4EE5\u4E0D\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"Data"})," \u65B9\u6CD5\uFF0C\u800C\u7ED9\u5199\u5165/\u4FDD\u5B58\u65B9\u6CD5\u76F4\u63A5\u4F20\u9012\u6570\u636E\u53C2\u6570\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'g.Model("user").Insert(g.Map{"name": "john"})\ng.Model("user").Replace(g.Map{"uid": 10000, "name": "john"})\ng.Model("user").Save(g.Map{"uid": 10001, "name": "john"})\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u6570\u636E\u53C2\u6570\u4E5F\u5E38\u7528 ",(0,r.jsx)(n.code,{children:"          struct        "})," \u7C7B\u578B\uFF0C\u4F8B\u5982\u5F53\u8868\u5B57\u6BB5\u4E3A ",(0,r.jsx)(n.code,{children:"          uid/name/site        "})," \u65F6\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'type User struct {\n    Uid  int    `orm:"uid"`\n    Name string `orm:"name"`\n    Site string `orm:"site"`\n}\nuser := &User{\n    Uid:  1,\n    Name: "john",\n    Site: "https://goframe.org",\n}\n// INSERT INTO `user`(`uid`,`name`,`site`) VALUES(1,\'john\',\'https://goframe.org\')\ng.Model("user").Data(user).Insert()\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\u793A\u4F8B2\u6570\u636E\u6279\u91CF\u5199\u5165",children:"\u793A\u4F8B2\uFF0C\u6570\u636E\u6279\u91CF\u5199\u5165"}),"\n",(0,r.jsxs)(n.p,{children:["\u901A\u8FC7\u7ED9 ",(0,r.jsx)(n.code,{children:"Data"})," \u65B9\u6CD5\u8F93\u5165 ",(0,r.jsx)(n.code,{children:"Slice"})," \u6570\u7EC4\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u7528\u4EE5\u5B9E\u73B0\u6279\u91CF\u5199\u5165\u3002\u6570\u7EC4\u5143\u7D20\u9700\u8981\u4E3A ",(0,r.jsx)(n.code,{children:"Map"})," \u6216\u8005 ",(0,r.jsx)(n.code,{children:"Struct"})," \u7C7B\u578B\uFF0C\u4EE5\u4FBF\u4E8E\u6570\u636E\u5E93\u7EC4\u4EF6\u81EA\u52A8\u83B7\u53D6\u5B57\u6BB5\u4FE1\u606F\u5E76\u751F\u6210\u6279\u91CF\u64CD\u4F5C ",(0,r.jsx)(n.code,{children:"SQL"}),"\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// INSERT INTO `user`(`name`) VALUES(\'john_1\'),(\'john_2\'),(\'john_3\')\ng.Model("user").Data(g.List{\n    {"name": "john_1"},\n    {"name": "john_2"},\n    {"name": "john_3"},\n}).Insert()\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u53EF\u4EE5\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"Batch"})," \u65B9\u6CD5\u6307\u5B9A\u6279\u91CF\u64CD\u4F5C\u4E2D\u5206\u6279\u5199\u5165\u6761\u6570\u6570\u91CF\uFF08\u9ED8\u8BA4\u662F ",(0,r.jsx)(n.code,{children:"10"}),"\uFF09\uFF0C\u4EE5\u4E0B\u793A\u4F8B\u5C06\u4F1A\u88AB\u62C6\u5206\u4E3A\u4E24\u6761\u5199\u5165\u8BF7\u6C42\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// INSERT INTO `user`(`name`) VALUES(\'john_1\'),(\'john_2\')\n// INSERT INTO `user`(`name`) VALUES(\'john_3\')\ng.Model("user").Data(g.List{\n    {"name": "john_1"},\n    {"name": "john_2"},\n    {"name": "john_3"},\n}).Batch(2).Insert()\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\u793A\u4F8B3\u6570\u636E\u6279\u91CF\u4FDD\u5B58",children:"\u793A\u4F8B3\uFF0C\u6570\u636E\u6279\u91CF\u4FDD\u5B58"}),"\n",(0,r.jsx)(n.p,{children:"\u6279\u91CF\u4FDD\u5B58\u64CD\u4F5C\u4E0E\u5355\u6761\u4FDD\u5B58\u64CD\u4F5C\u539F\u7406\u662F\u4E00\u6837\u7684\uFF0C\u5F53\u5199\u5165\u7684\u6570\u636E\u4E2D\u5B58\u5728\u4E3B\u952E\u6216\u8005\u552F\u4E00\u7D22\u5F15\u65F6\u5C06\u4F1A\u66F4\u65B0\u539F\u6709\u8BB0\u5F55\u503C\uFF0C\u5426\u5219\u65B0\u5199\u5165\u4E00\u6761\u8BB0\u5F55\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// INSERT INTO `user`(`uid`,`name`) VALUES(10000,\'john_1\'),(10001,\'john_2\'),(10002,\'john_3\')\n// ON DUPLICATE KEY UPDATE `uid`=VALUES(`uid`),`name`=VALUES(`name`)\ng.Model("user").Data(g.List{\n    {"uid":10000, "name": "john_1"},\n    {"uid":10001, "name": "john_2"},\n    {"uid":10002, "name": "john_3"},\n}).Save()\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"rawsql-\u8BED\u53E5\u5D4C\u5165",children:[(0,r.jsx)(n.code,{children:"RawSQL"})," \u8BED\u53E5\u5D4C\u5165"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"gdb.Raw"})," \u662F\u5B57\u7B26\u4E32\u7C7B\u578B\uFF0C\u8BE5\u7C7B\u578B\u7684\u53C2\u6570\u5C06\u4F1A\u76F4\u63A5\u4F5C\u4E3A ",(0,r.jsx)(n.code,{children:"SQL"})," \u7247\u6BB5\u5D4C\u5165\u5230\u63D0\u4EA4\u5230\u5E95\u5C42\u7684 ",(0,r.jsx)(n.code,{children:"SQL"})," \u8BED\u53E5\u4E2D\uFF0C\u4E0D\u4F1A\u88AB\u81EA\u52A8\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\u53C2\u6570\u7C7B\u578B\u3001\u4E5F\u4E0D\u4F1A\u88AB\u5F53\u505A\u9884\u5904\u7406\u53C2\u6570\u3002\u66F4\u8BE6\u7EC6\u7684\u4ECB\u7ECD\u8BF7\u53C2\u8003\u7AE0\u8282\uFF1A ",(0,r.jsx)(n.a,{href:"/en/2.6.x/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%AB%98%E7%BA%A7%E7%89%B9%E6%80%A7/ORM%E9%AB%98%E7%BA%A7%E7%89%B9%E6%80%A7-RawSQL",children:"ORM\u9AD8\u7EA7\u7279\u6027-RawSQL"}),"\u3002\u4F8B\u5982\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// INSERT INTO `user`(`id`,`passport`,`password`,`nickname`,`create_time`) VALUES(\'id+2\',\'john\',\'123456\',\'now()\')\ng.Model("user").Data(g.Map{\n    "id":          "id+2",\n    "passport":    "john",\n    "password":    "123456",\n    "nickname":    "JohnGuo",\n    "create_time": "now()",\n}).Insert()\n// \u6267\u884C\u62A5\u9519\uFF1AError Code: 1136. Column count doesn\'t match value count at row 1\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"gdb.Raw"})," \u6539\u9020\u540E\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// INSERT INTO `user`(`id`,`passport`,`password`,`nickname`,`create_time`) VALUES(id+2,\'john\',\'123456\',now())\ng.Model("user").Data(g.Map{\n    "id":          gdb.Raw("id+2"),\n    "passport":    "john",\n    "password":    "123456",\n    "nickname":    "JohnGuo",\n    "create_time": gdb.Raw("now()"),\n}).Insert()\n'})})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return i}});var d=s(667294);let r={},a=d.createContext(r);function i(e){let n=d.useContext(a);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),d.createElement(a.Provider,{value:n},e.children)}}}]);