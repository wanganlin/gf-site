"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["2636"],{990052:function(e,d,n){n.r(d),n.d(d,{metadata:()=>t,contentTitle:()=>r,default:()=>o,assets:()=>l,toc:()=>c,frontMatter:()=>i});var t=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u65F6\u95F4\u7EF4\u62A4","title":"ORM\u94FE\u5F0F\u64CD\u4F5C-\u65F6\u95F4\u7EF4\u62A4","description":"\u9700\u8981\u6CE8\u610F\uFF0C\u8BE5\u7279\u6027\u4EC5\u5BF9\u94FE\u5F0F\u64CD\u4F5C\u6709\u6548\u3002","source":"@site/versioned_docs/version-1.16.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u65F6\u95F4\u7EF4\u62A4.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9","slug":"/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u65F6\u95F4\u7EF4\u62A4","permalink":"/1.16.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u65F6\u95F4\u7EF4\u62A4","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.16.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u65F6\u95F4\u7EF4\u62A4.md","tags":[],"version":"1.16.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":11,"frontMatter":{"title":"ORM\u94FE\u5F0F\u64CD\u4F5C-\u65F6\u95F4\u7EF4\u62A4","sidebar_position":11,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"ORM\u94FE\u5F0F\u64CD\u4F5C-\u67E5\u8BE2\u7F13\u5B58","permalink":"/1.16.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u67E5\u8BE2\u7F13\u5B58"},"next":{"title":"ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u5E93\u5207\u6362","permalink":"/1.16.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u5E93\u5207\u6362"}}'),a=n("785893"),s=n("250065");let i={title:"ORM\u94FE\u5F0F\u64CD\u4F5C-\u65F6\u95F4\u7EF4\u62A4",sidebar_position:11,hide_title:!0},r=void 0,l={},c=[{value:"\u7279\u6027\u7684\u542F\u7528",id:"\u7279\u6027\u7684\u542F\u7528",level:3},{value:"<code>created_at</code> \u5199\u5165\u65F6\u95F4",id:"created_at-\u5199\u5165\u65F6\u95F4",level:3},{value:"<code>updated_at</code> \u66F4\u65B0\u65F6\u95F4",id:"updated_at-\u66F4\u65B0\u65F6\u95F4",level:3},{value:"<code>deleted_at</code> \u6570\u636E\u8F6F\u5220\u9664",id:"deleted_at-\u6570\u636E\u8F6F\u5220\u9664",level:3},{value:"\u8054\u8868\u67E5\u8BE2\u7684\u573A\u666F",id:"\u8054\u8868\u67E5\u8BE2\u7684\u573A\u666F",level:4},{value:"<code>Unscoped</code> \u5FFD\u7565\u65F6\u95F4\u7279\u6027",id:"unscoped-\u5FFD\u7565\u65F6\u95F4\u7279\u6027",level:4}];function u(e){let d={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.p,{children:"\u9700\u8981\u6CE8\u610F\uFF0C\u8BE5\u7279\u6027\u4EC5\u5BF9\u94FE\u5F0F\u64CD\u4F5C\u6709\u6548\u3002"}),"\n",(0,a.jsxs)(d.p,{children:[(0,a.jsx)(d.code,{children:"gdb"})," \u6A21\u5757\u652F\u6301\u5BF9\u6570\u636E\u8BB0\u5F55\u7684\u5199\u5165\u3001\u66F4\u65B0\u3001\u5220\u9664\u65F6\u95F4\u81EA\u52A8\u586B\u5145\uFF0C\u63D0\u9AD8\u5F00\u53D1\u7EF4\u62A4\u6548\u7387\u3002\u4E3A\u4E86\u4FBF\u4E8E\u65F6\u95F4\u5B57\u6BB5\u540D\u79F0\u3001\u7C7B\u578B\u7684\u7EDF\u4E00\u7EF4\u62A4\uFF0C\u5982\u679C\u4F7F\u7528\u8BE5\u7279\u6027\uFF0C\u6211\u4EEC\u7EA6\u5B9A\uFF1A"]}),"\n",(0,a.jsxs)(d.ul,{children:["\n",(0,a.jsxs)(d.li,{children:["\u5B57\u6BB5\u5E94\u5F53\u8BBE\u7F6E\u5141\u8BB8\u503C\u4E3A ",(0,a.jsx)(d.code,{children:"null"}),"\u3002"]}),"\n",(0,a.jsxs)(d.li,{children:["\u5B57\u6BB5\u7684\u7C7B\u578B\u5FC5\u987B\u4E3A\u65F6\u95F4\u7C7B\u578B\uFF0C\u5982: ",(0,a.jsx)(d.code,{children:"date"}),", ",(0,a.jsx)(d.code,{children:"datetime"}),", ",(0,a.jsx)(d.code,{children:"timestamp"}),"\u3002\u4E0D\u652F\u6301\u6570\u5B57\u7C7B\u578B\u5B57\u6BB5\uFF0C\u5982 ",(0,a.jsx)(d.code,{children:"int"}),"\u3002"]}),"\n",(0,a.jsxs)(d.li,{children:["\u5B57\u6BB5\u7684\u540D\u79F0\u4E0D\u652F\u6301\u81EA\u5B9A\u4E49\u8BBE\u7F6E\uFF0C\u5E76\u4E14\u56FA\u5B9A\u540D\u79F0\u7EA6\u5B9A\u4E3A\uFF1A","\n",(0,a.jsxs)(d.ul,{children:["\n",(0,a.jsxs)(d.li,{children:[(0,a.jsx)(d.code,{children:"created_at"})," \u7528\u4E8E\u8BB0\u5F55\u521B\u5EFA\u65F6\u66F4\u65B0\uFF0C\u4EC5\u4F1A\u5199\u5165\u4E00\u6B21\u3002"]}),"\n",(0,a.jsxs)(d.li,{children:[(0,a.jsx)(d.code,{children:"updated_at"})," \u7528\u4E8E\u8BB0\u5F55\u4FEE\u6539\u65F6\u66F4\u65B0\uFF0C\u6BCF\u6B21\u8BB0\u5F55\u53D8\u66F4\u65F6\u66F4\u65B0\u3002"]}),"\n",(0,a.jsxs)(d.li,{children:[(0,a.jsx)(d.code,{children:"deleted_at"})," \u7528\u4E8E\u8BB0\u5F55\u7684\u8F6F\u5220\u9664\u7279\u6027\uFF0C\u53EA\u6709\u5F53\u8BB0\u5F55\u5220\u9664\u65F6\u4F1A\u5199\u5165\u4E00\u6B21\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(d.p,{children:["\u5B57\u6BB5\u540D\u79F0\u5176\u5B9E\u4E0D\u533A\u5206\u5927\u5C0F\u5199\uFF0C\u4E5F\u4F1A\u5FFD\u7565\u7279\u6B8A\u5B57\u7B26\uFF0C\u4F8B\u5982 ",(0,a.jsx)(d.code,{children:"CreatedAt"}),", ",(0,a.jsx)(d.code,{children:"UpdatedAt"}),", ",(0,a.jsx)(d.code,{children:"DeletedAt"})," \u4E5F\u662F\u652F\u6301\u7684\u3002\u6B64\u5916\uFF0C\u65F6\u95F4\u5B57\u6BB5\u540D\u79F0\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E\u6587\u4EF6\u8FDB\u884C\u81EA\u5B9A\u4E49\u4FEE\u6539\uFF0C\u5E76\u53EF\u4F7F\u7528 ",(0,a.jsx)(d.code,{children:"TimeMaintainDisabled"})," \u914D\u7F6E\u5B8C\u6574\u5173\u95ED\u8BE5\u7279\u6027\uFF0C\u5177\u4F53\u8BF7\u53C2\u8003 ",(0,a.jsx)(d.a,{href:"/1.16.x/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6-%E9%87%8D%E7%82%B9/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E4%BD%BF%E7%94%A8%E9%85%8D%E7%BD%AE",children:"ORM\u4F7F\u7528\u914D\u7F6E"})," \u7AE0\u8282\u3002"]}),"\n",(0,a.jsx)(d.p,{children:"\u5BF9\u65F6\u95F4\u7C7B\u578B\u7684\u56FA\u5B9A\u5176\u5B9E\u662F\u4E3A\u4E86\u5F62\u6210\u4E00\u79CD\u89C4\u8303\u3002"}),"\n",(0,a.jsx)(d.h3,{id:"\u7279\u6027\u7684\u542F\u7528",children:"\u7279\u6027\u7684\u542F\u7528"}),"\n",(0,a.jsxs)(d.p,{children:["\u5F53\u6570\u636E\u8868\u5305\u542B ",(0,a.jsx)(d.code,{children:"created_at"}),"\u3001 ",(0,a.jsx)(d.code,{children:"updated_at"}),"\u3001 ",(0,a.jsx)(d.code,{children:"deleted_at"})," \u4EFB\u610F\u4E00\u4E2A\u6216\u591A\u4E2A\u5B57\u6BB5\u65F6\uFF0C\u8BE5\u7279\u6027\u81EA\u52A8\u542F\u7528\u3002"]}),"\n",(0,a.jsx)(d.p,{children:"\u4EE5\u4E0B\u7684\u793A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u9ED8\u8BA4\u793A\u4F8B\u4E2D\u7684\u6570\u636E\u8868\u5747\u5305\u542B\u4E86\u8FD93\u4E2A\u5B57\u6BB5\u3002"}),"\n",(0,a.jsxs)(d.h3,{id:"created_at-\u5199\u5165\u65F6\u95F4",children:[(0,a.jsx)(d.code,{children:"created_at"})," \u5199\u5165\u65F6\u95F4"]}),"\n",(0,a.jsxs)(d.p,{children:["\u5728\u6267\u884C ",(0,a.jsx)(d.code,{children:"Insert/InsertIgnore/BatchInsert/BatchInsertIgnore"})," \u65B9\u6CD5\u65F6\u81EA\u52A8\u5199\u5165\u8BE5\u65F6\u95F4\uFF0C\u968F\u540E\u4FDD\u6301\u4E0D\u53D8\u3002"]}),"\n",(0,a.jsx)(d.pre,{children:(0,a.jsx)(d.code,{className:"language-go",children:'// INSERT INTO `user`(`name`,`created_at`,`updated_at`) VALUES(\'john\', `2020-06-06 21:00:00`, `2020-06-06 21:00:00`)\ndb.Table("user").Data(g.Map{"name": "john"}).Insert()\n\n// INSERT IGNORE INTO `user`(`uid`,`name`,`created_at`,`updated_at`) VALUES(10000,\'john\', `2020-06-06 21:00:00`, `2020-06-06 21:00:00`)\ndb.Table("user").Data(g.Map{"uid": 10000, "name": "john"}).InsertIgnore()\n\n// REPLACE INTO `user`(`uid`,`name`,`created_at`,`updated_at`) VALUES(10000,\'john\', `2020-06-06 21:00:00`, `2020-06-06 21:00:00`)\ndb.Table("user").Data(g.Map{"uid": 10000, "name": "john"}).Replace()\n\n// INSERT INTO `user`(`uid`,`name`,`created_at`,`updated_at`) VALUES(10001,\'john\', `2020-06-06 21:00:00`, `2020-06-06 21:00:00`) ON DUPLICATE KEY UPDATE `uid`=VALUES(`uid`),`name`=VALUES(`name`),`updated_at`=VALUES(`updated_at`)\ndb.Table("user").Data(g.Map{"uid": 10001, "name": "john"}).Save()\n'})}),"\n",(0,a.jsxs)(d.p,{children:["\u9700\u8981\u6CE8\u610F\u7684\u662F ",(0,a.jsx)(d.code,{children:"Replace"})," \u65B9\u6CD5\u4E5F\u4F1A\u66F4\u65B0\u8BE5\u5B57\u6BB5\uFF0C\u56E0\u4E3A\u8BE5\u64CD\u4F5C\u76F8\u5F53\u4E8E\u5220\u9664\u5DF2\u5B58\u5728\u7684\u65E7\u6570\u636E\u5E76\u91CD\u65B0\u5199\u4E00\u6761\u6570\u636E\u3002"]}),"\n",(0,a.jsxs)(d.h3,{id:"updated_at-\u66F4\u65B0\u65F6\u95F4",children:[(0,a.jsx)(d.code,{children:"updated_at"})," \u66F4\u65B0\u65F6\u95F4"]}),"\n",(0,a.jsxs)(d.p,{children:["\u5728\u6267\u884C ",(0,a.jsx)(d.code,{children:"Insert/InsertIgnore/BatchInsert/BatchInsertIgnore"})," \u65B9\u6CD5\u65F6\u81EA\u52A8\u5199\u5165\u8BE5\u65F6\u95F4\uFF0C\u5728\u6267\u884C ",(0,a.jsx)(d.code,{children:"Save/Update"})," \u65F6\u66F4\u65B0\u8BE5\u65F6\u95F4\uFF08\u6CE8\u610F\u5F53\u5199\u5165\u6570\u636E\u5B58\u5728\u65F6\u4F1A\u66F4\u65B0 ",(0,a.jsx)(d.code,{children:"updated_at"})," \u65F6\u95F4\uFF0C\u4E0D\u4F1A\u66F4\u65B0 ",(0,a.jsx)(d.code,{children:"created_at"})," \u65F6\u95F4\uFF09\u3002"]}),"\n",(0,a.jsx)(d.pre,{children:(0,a.jsx)(d.code,{className:"language-go",children:'// UPDATE `user` SET `name`=\'john guo\',`updated_at`=\'2020-06-06 21:00:00\' WHERE name=\'john\'\ndb.Table("user").Data(g.Map{"name" : "john guo"}).Where("name", "john").Update()\n\n// UPDATE `user` SET `status`=1,`updated_at`=\'2020-06-06 21:00:00\' ORDER BY `login_time` asc LIMIT 10\ndb.Table("user").Data("status", 1).Order("login_time asc").Limit(10).Update()\n\n// INSERT INTO `user`(`id`,`name`,`update_at`) VALUES(1,\'john guo\',\'2020-12-29 20:16:14\') ON DUPLICATE KEY UPDATE `id`=VALUES(`id`),`name`=VALUES(`name`),`update_at`=VALUES(`update_at`)\ndb.Table("user").Data(g.Map{"id": 1, "name": "john guo"}).Save()\n'})}),"\n",(0,a.jsxs)(d.p,{children:["\u9700\u8981\u6CE8\u610F\u7684\u662F ",(0,a.jsx)(d.code,{children:"Replace"})," \u65B9\u6CD5\u4E5F\u4F1A\u66F4\u65B0\u8BE5\u5B57\u6BB5\uFF0C\u56E0\u4E3A\u8BE5\u64CD\u4F5C\u76F8\u5F53\u4E8E\u5220\u9664\u5DF2\u5B58\u5728\u7684\u65E7\u6570\u636E\u5E76\u91CD\u65B0\u5199\u4E00\u6761\u6570\u636E\u3002"]}),"\n",(0,a.jsxs)(d.h3,{id:"deleted_at-\u6570\u636E\u8F6F\u5220\u9664",children:[(0,a.jsx)(d.code,{children:"deleted_at"})," \u6570\u636E\u8F6F\u5220\u9664"]}),"\n",(0,a.jsxs)(d.p,{children:["\u8F6F\u5220\u9664\u4F1A\u7A0D\u5FAE\u6BD4\u8F83\u590D\u6742\u4E00\u4E9B\uFF0C\u5F53\u8F6F\u5220\u9664\u5B58\u5728\u65F6\uFF0C\u6240\u6709\u7684\u67E5\u8BE2\u8BED\u53E5\u90FD\u5C06\u4F1A\u81EA\u52A8\u52A0\u4E0A ",(0,a.jsx)(d.code,{children:"deleted_at"})," \u7684\u6761\u4EF6\u3002"]}),"\n",(0,a.jsx)(d.pre,{children:(0,a.jsx)(d.code,{className:"language-go",children:'// UPDATE `user` SET `deleted_at`=\'2020-06-06 21:00:00\' WHERE uid=10\ndb.Table("user").Where("uid", 10).Delete()\n'})}),"\n",(0,a.jsx)(d.p,{children:"\u67E5\u8BE2\u7684\u65F6\u5019\u4F1A\u53D1\u751F\u4E00\u4E9B\u53D8\u5316\uFF0C\u4F8B\u5982\uFF1A"}),"\n",(0,a.jsx)(d.pre,{children:(0,a.jsx)(d.code,{className:"language-go",children:'// SELECT * FROM `user` WHERE uid>1 AND `deleted_at` IS NULL\ndb.Table("user").Where("uid>?", 1).All()\n'})}),"\n",(0,a.jsxs)(d.p,{children:["\u53EF\u4EE5\u770B\u5230\u5F53\u6570\u636E\u8868\u4E2D\u5B58\u5728 ",(0,a.jsx)(d.code,{children:"deleted_at"})," \u5B57\u6BB5\u65F6\uFF0C\u6240\u6709\u6D89\u53CA\u5230\u8BE5\u8868\u7684\u67E5\u8BE2\u64CD\u4F5C\u90FD\u5C06\u81EA\u52A8\u52A0\u4E0A ",(0,a.jsx)(d.code,{children:"deleted_at IS NULL"})," \u7684\u6761\u4EF6"]}),"\n",(0,a.jsx)(d.h4,{id:"\u8054\u8868\u67E5\u8BE2\u7684\u573A\u666F",children:"\u8054\u8868\u67E5\u8BE2\u7684\u573A\u666F"}),"\n",(0,a.jsx)(d.p,{children:"\u5982\u679C\u5173\u8054\u67E5\u8BE2\u7684\u51E0\u4E2A\u8868\u90FD\u542F\u7528\u4E86\u8F6F\u5220\u9664\u7279\u6027\u65F6\uFF0C\u4F1A\u53D1\u751F\u4EE5\u4E0B\u8FD9\u79CD\u60C5\u51B5\uFF0C\u5373\u6761\u4EF6\u8BED\u53E5\u4E2D\u4F1A\u589E\u52A0\u6240\u6709\u76F8\u5173\u8868\u7684\u8F6F\u5220\u9664\u65F6\u95F4\u5224\u65AD\u3002"}),"\n",(0,a.jsx)(d.pre,{children:(0,a.jsx)(d.code,{className:"language-go",children:'// SELECT * FROM `user` AS `u` LEFT JOIN `user_detail` AS `ud` ON (ud.uid=u.uid) WHERE u.uid=10 AND `u`.`deleted_at` IS NULL AND `ud`.`deleteat` IS NULL LIMIT 1\ndb.Table("user", "u").LeftJoin("user_detail", "ud", "ud.uid=u.uid").Where("u.uid", 10).One()\n'})}),"\n",(0,a.jsxs)(d.h4,{id:"unscoped-\u5FFD\u7565\u65F6\u95F4\u7279\u6027",children:[(0,a.jsx)(d.code,{children:"Unscoped"})," \u5FFD\u7565\u65F6\u95F4\u7279\u6027"]}),"\n",(0,a.jsxs)(d.p,{children:[(0,a.jsx)(d.code,{children:"Unscoped"})," \u7528\u4E8E\u5728\u94FE\u5F0F\u64CD\u4F5C\u4E2D\u5FFD\u7565\u81EA\u52A8\u65F6\u95F4\u66F4\u65B0\u7279\u6027\uFF0C\u4F8B\u5982\u4E0A\u9762\u7684\u793A\u4F8B\uFF0C\u52A0\u4E0A ",(0,a.jsx)(d.code,{children:"Unscoped"})," \u65B9\u6CD5\u540E\uFF1A"]}),"\n",(0,a.jsx)(d.pre,{children:(0,a.jsx)(d.code,{className:"language-go",children:'// SELECT * FROM `user` WHERE uid>1\ndb.Table("user").Unscoped().Where("uid>?", 1).All()\n\n// SELECT * FROM `user` AS `u` LEFT JOIN `user_detail` AS `ud` ON (ud.uid=u.uid) WHERE u.uid=10 LIMIT 1\ndb.Table("user", "u").LeftJoin("user_detail", "ud", "ud.uid=u.uid").Where("u.uid", 10).Unscoped().One()\n'})})]})}function o(e={}){let{wrapper:d}={...(0,s.a)(),...e.components};return d?(0,a.jsx)(d,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},250065:function(e,d,n){n.d(d,{Z:function(){return r},a:function(){return i}});var t=n(667294);let a={},s=t.createContext(a);function i(e){let d=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(d):{...d,...e}},[d,e])}function r(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:d},e.children)}}}]);