"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["68320"],{689147:function(e,n,s){s.r(n),s.d(n,{metadata:()=>d,contentTitle:()=>l,default:()=>h,assets:()=>o,toc:()=>t,frontMatter:()=>c});var d=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u5B57\u6BB5\u8FC7\u6EE4","title":"ORM\u94FE\u5F0F\u64CD\u4F5C-\u5B57\u6BB5\u8FC7\u6EE4","description":"Fields/FieldsEx \u5B57\u6BB5\u8FC7\u6EE4","source":"@site/versioned_docs/version-2.3.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u5B57\u6BB5\u8FC7\u6EE4.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9","slug":"/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u5B57\u6BB5\u8FC7\u6EE4","permalink":"/2.3.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u5B57\u6BB5\u8FC7\u6EE4","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.3.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u5B57\u6BB5\u8FC7\u6EE4.md","tags":[],"version":"2.3.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":6,"frontMatter":{"title":"ORM\u94FE\u5F0F\u64CD\u4F5C-\u5B57\u6BB5\u8FC7\u6EE4","sidebar_position":6,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"ORM\u94FE\u5F0F\u64CD\u4F5C-\u5BF9\u8C61\u8F93\u5165","permalink":"/2.3.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u5BF9\u8C61\u8F93\u5165"},"next":{"title":"ORM\u94FE\u5F0F\u64CD\u4F5C-\u5B57\u6BB5\u83B7\u53D6","permalink":"/2.3.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u5B57\u6BB5\u83B7\u53D6"}}'),r=s("785893"),i=s("250065");let c={title:"ORM\u94FE\u5F0F\u64CD\u4F5C-\u5B57\u6BB5\u8FC7\u6EE4",sidebar_position:6,hide_title:!0},l=void 0,o={},t=[{value:"<code>Fields/FieldsEx</code> \u5B57\u6BB5\u8FC7\u6EE4",id:"fieldsfieldsex-\u5B57\u6BB5\u8FC7\u6EE4",level:2},{value:"<code>Fields</code> \u793A\u4F8B",id:"fields-\u793A\u4F8B",level:3},{value:"<code>FieldsEx</code> \u793A\u4F8B",id:"fieldsex-\u793A\u4F8B",level:3},{value:"<code>OmitEmpty</code> \u7A7A\u503C\u8FC7\u6EE4",id:"omitempty-\u7A7A\u503C\u8FC7\u6EE4",level:2},{value:"\u5199\u5165/\u66F4\u65B0\u64CD\u4F5C",id:"\u5199\u5165\u66F4\u65B0\u64CD\u4F5C",level:3},{value:"\u6570\u636E\u67E5\u8BE2\u64CD\u4F5C",id:"\u6570\u636E\u67E5\u8BE2\u64CD\u4F5C",level:3},{value:"<code>OmitNil</code> \u7A7A\u503C\u8FC7\u6EE4",id:"omitnil-\u7A7A\u503C\u8FC7\u6EE4",level:2},{value:"\u57FA\u672C\u4ECB\u7ECD",id:"\u57FA\u672C\u4ECB\u7ECD",level:3},{value:"\u4F7F\u7528 <code>do</code> \u5BF9\u8C61\u8FDB\u884C\u5B57\u6BB5\u8FC7\u6EE4",id:"\u4F7F\u7528-do-\u5BF9\u8C61\u8FDB\u884C\u5B57\u6BB5\u8FC7\u6EE4",level:3},{value:"<code>Filter</code> \u5B57\u6BB5\u8FC7\u6EE4(\u5DF2\u5185\u7F6E)",id:"filter-\u5B57\u6BB5\u8FC7\u6EE4\u5DF2\u5185\u7F6E",level:2}];function a(e){let n={code:"code",del:"del",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h2,{id:"fieldsfieldsex-\u5B57\u6BB5\u8FC7\u6EE4",children:[(0,r.jsx)(n.code,{children:"Fields/FieldsEx"})," \u5B57\u6BB5\u8FC7\u6EE4"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Fields"})," \u7528\u4E8E\u6307\u5B9A\u9700\u8981\u64CD\u4F5C\u7684\u8868\u5B57\u6BB5\uFF0C\u5305\u62EC\u67E5\u8BE2\u5B57\u6BB5\u3001\u5199\u5165\u5B57\u6BB5\u3001\u66F4\u65B0\u5B57\u6BB5\u7B49\u8FC7\u6EE4\uFF1B"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"FieldsEx"})," \u7528\u4E8E\u4F8B\u5916\u7684\u5B57\u6BB5\u6307\u5B9A\uFF0C\u53EF\u7528\u4E8E\u67E5\u8BE2\u5B57\u6BB5\u3001\u5199\u5165\u5B57\u6BB5\u3001\u66F4\u65B0\u5B57\u6BB5\u7B49\u8FC7\u6EE4\uFF1B"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"fields-\u793A\u4F8B",children:[(0,r.jsx)(n.code,{children:"Fields"})," \u793A\u4F8B"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5047\u5982 ",(0,r.jsx)(n.code,{children:"user"})," \u8868\u67094\u4E2A\u5B57\u6BB5 ",(0,r.jsx)(n.code,{children:"uid"}),", ",(0,r.jsx)(n.code,{children:"nickname"}),", ",(0,r.jsx)(n.code,{children:"passport"}),", ",(0,r.jsx)(n.code,{children:"password"}),"\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u67E5\u8BE2\u5B57\u6BB5\u8FC7\u6EE4"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'    // SELECT `uid`,`nickname` FROM `user` ORDER BY `uid` asc\n    g.Model("user").Fields("uid, nickname").Order("uid asc").All()\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"\u5199\u5165\u5B57\u6BB5\u8FC7\u6EE4"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'m := g.Map{\n        "uid"      : 10000,\n        "nickname" : "John Guo",\n        "passport" : "john",\n        "password" : "123456",\n    }\n    g.Model(table).Fields("nickname,passport,password").Data(m).Insert()\n    // INSERT INTO `user`(`nickname`,`passport`,`password`) VALUES(\'John Guo\',\'john\',\'123456\')\n'})}),"\n",(0,r.jsxs)(n.h3,{id:"fieldsex-\u793A\u4F8B",children:[(0,r.jsx)(n.code,{children:"FieldsEx"})," \u793A\u4F8B"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5047\u5982 ",(0,r.jsx)(n.code,{children:"user"})," \u8868\u67094\u4E2A\u5B57\u6BB5 ",(0,r.jsx)(n.code,{children:"uid"}),", ",(0,r.jsx)(n.code,{children:"nickname"}),", ",(0,r.jsx)(n.code,{children:"passport"}),", ",(0,r.jsx)(n.code,{children:"password"}),"\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u67E5\u8BE2\u5B57\u6BB5\u6392\u9664"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'    // SELECT `uid`,`nickname` FROM `user`\n    g.Model("user").FieldsEx("passport, password").All()\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"\u5199\u5165\u5B57\u6BB5\u6392\u9664"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'    m := g.Map{\n        "uid"      : 10000,\n        "nickname" : "John Guo",\n        "passport" : "john",\n        "password" : "123456",\n    }\n    g.Model(table).FieldsEx("uid").Data(m).Insert()\n    // INSERT INTO `user`(`nickname`,`passport`,`password`) VALUES(\'John Guo\',\'john\',\'123456\')\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"omitempty-\u7A7A\u503C\u8FC7\u6EE4",children:[(0,r.jsx)(n.code,{children:"OmitEmpty"})," \u7A7A\u503C\u8FC7\u6EE4"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5F53 ",(0,r.jsx)(n.code,{children:"map"}),"/ ",(0,r.jsx)(n.code,{children:"struct"})," \u4E2D\u5B58\u5728\u7A7A\u503C\u5982 ",(0,r.jsx)(n.code,{children:"nil"}),", ",(0,r.jsx)(n.code,{children:'""'}),", ",(0,r.jsx)(n.code,{children:"0"})," \u65F6\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C ",(0,r.jsx)(n.code,{children:"gdb"})," \u5C06\u4F1A\u5C06\u5176\u5F53\u505A\u6B63\u5E38\u7684\u8F93\u5165\u53C2\u6570\uFF0C\u56E0\u6B64\u8FD9\u4E9B\u53C2\u6570\u4E5F\u4F1A\u88AB\u66F4\u65B0\u5230\u6570\u636E\u8868\u3002 ",(0,r.jsx)(n.code,{children:"OmitEmpty"})," \u7279\u6027\u53EF\u4EE5\u5728\u5C06\u6570\u636E\u5199\u5165\u5230\u6570\u636E\u5E93\u4E4B\u524D\u8FC7\u6EE4\u7A7A\u503C\u6570\u636E\u7684\u5B57\u6BB5\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u76F8\u5173\u65B9\u6CD5\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func (m *Model) OmitEmpty() *Model\nfunc (m *Model) OmitEmptyWhere() *Model\nfunc (m *Model) OmitEmptyData() *Model\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"OmitEmpty"})," \u65B9\u6CD5\u4F1A\u540C\u65F6\u8FC7\u6EE4 ",(0,r.jsx)(n.code,{children:"Where"})," \u53CA ",(0,r.jsx)(n.code,{children:"Data"})," \u4E2D\u7684\u7A7A\u503C\u6570\u636E\uFF0C\u800C\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"OmitEmptyWhere/OmitEmptyData"})," \u65B9\u6CD5\u53EF\u4EE5\u6267\u884C\u7279\u5B9A\u7684\u5B57\u6BB5\u8FC7\u6EE4\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u5199\u5165\u66F4\u65B0\u64CD\u4F5C",children:"\u5199\u5165/\u66F4\u65B0\u64CD\u4F5C"}),"\n",(0,r.jsxs)(n.p,{children:["\u7A7A\u503C\u4F1A\u5F71\u54CD\u4E8E\u5199\u5165/\u66F4\u65B0\u64CD\u4F5C\u65B9\u6CD5\uFF0C\u5982 ",(0,r.jsx)(n.code,{children:"Insert"}),", ",(0,r.jsx)(n.code,{children:"Replace"}),", ",(0,r.jsx)(n.code,{children:"Update"}),", ",(0,r.jsx)(n.code,{children:"Save"})," \u64CD\u4F5C\u3002\u5982\u4EE5\u4E0B\u64CD\u4F5C\uFF08\u4EE5 ",(0,r.jsx)(n.code,{children:"map"})," \u4E3A\u4F8B\uFF0C ",(0,r.jsx)(n.code,{children:"struct"})," \u540C\u7406\uFF09\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// UPDATE `user` SET `name`=\'john\',update_time=null WHERE `id`=1\ng.Model("user").Data(g.Map{\n    "name"        : "john",\n    "update_time" : nil,\n}).Where("id", 1).Update()\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u9488\u5BF9\u7A7A\u503C\u60C5\u51B5\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"OmitEmpty"})," \u65B9\u6CD5\u6765\u8FC7\u6EE4\u6389\u8FD9\u4E9B\u7A7A\u503C\u3002\u4F8B\u5982\uFF0C\u4EE5\u4E0A\u793A\u4F8B\u53EF\u4EE5\u4FEE\u6539\u4E3A\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// UPDATE `user` SET `name`=\'john\' WHERE `id`=1\ng.Model("user").OmitEmpty().Data(g.Map{\n    "name"        : "john",\n    "update_time" : nil,\n}).Where("id", 1).Update()\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u5BF9\u4E8E ",(0,r.jsx)(n.code,{children:"struct"})," \u6570\u636E\u53C2\u6570\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u8FDB\u884C\u7A7A\u503C\u8FC7\u6EE4\u3002\u64CD\u4F5C\u793A\u4F8B\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'type User struct {\n    Id         int    `orm:"id"`\n    Passport   string `orm:"passport"`\n    Password   string `orm:"password"`\n    NickName   string `orm:"nickname"`\n    CreateTime string `orm:"create_time"`\n    UpdateTime string `orm:"update_time"`\n}\nuser := User{\n    Id        : 1,\n    NickName  : "john",\n    UpdateTime: gtime.Now().String(),\n}\ng.Model("user").OmitEmpty().Data(user).Insert()\n// INSERT INTO `user`(`id`,`nickname`,`update_time`) VALUES(1,\'john\',\'2019-10-01 12:00:00\')\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u6CE8\u610F\u54DF\uFF0C\u6279\u91CF\u5199\u5165/\u66F4\u65B0\u64CD\u4F5C\u4E2D ",(0,r.jsx)(n.code,{children:"OmitEmpty"})," \u65B9\u6CD5\u5C06\u4F1A\u5931\u6548\uFF0C\u56E0\u4E3A\u5728\u6279\u91CF\u64CD\u4F5C\u4E2D\uFF0C\u5FC5\u987B\u4FDD\u8BC1\u6BCF\u4E2A\u5199\u5165\u8BB0\u5F55\u7684\u5B57\u6BB5\u662F\u7EDF\u4E00\u7684\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5173\u4E8E ",(0,r.jsx)(n.code,{children:"omitempty"})," \u6807\u7B7E\u4E0E ",(0,r.jsx)(n.code,{children:"OmitEmpty"})," \u65B9\u6CD5\uFF1A"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u9488\u5BF9\u4E8E ",(0,r.jsx)(n.code,{children:"struct"})," \u7684\u7A7A\u503C\u8FC7\u6EE4\u5927\u5BB6\u4F1A\u60F3\u5230 ",(0,r.jsx)(n.code,{children:"omitempty"})," \u7684\u6807\u7B7E\u3002\u8BE5\u6807\u7B7E\u5E38\u7528\u4E8E ",(0,r.jsx)(n.code,{children:"json"})," \u8F6C\u6362\u7684\u7A7A\u503C\u8FC7\u6EE4\uFF0C\u4E5F\u5728\u67D0\u4E00\u4E9B\u7B2C\u4E09\u65B9\u7684 ",(0,r.jsx)(n.code,{children:"ORM"})," \u5E93\u4E2D\u7528\u4F5C ",(0,r.jsx)(n.code,{children:"struct"})," \u5230\u6570\u636E\u8868\u5B57\u6BB5\u7684\u7A7A\u503C\u8FC7\u6EE4\uFF0C\u5373\u5F53\u5C5E\u6027\u4E3A\u7A7A\u503C\u65F6\u4E0D\u505A\u8F6C\u6362\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"omitempty"})," \u6807\u7B7E\u4E0E ",(0,r.jsx)(n.code,{children:"OmitEmpty"})," \u65B9\u6CD5\u6240\u8FBE\u5230\u7684\u6548\u679C\u662F\u4E00\u6837\u7684\u3002\u5728 ",(0,r.jsx)(n.code,{children:"ORM"})," \u64CD\u4F5C\u4E2D\uFF0C\u6211\u4EEC\u4E0D\u5EFA\u8BAE\u5BF9 ",(0,r.jsx)(n.code,{children:"struct"})," \u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"omitempty"})," \u7684\u6807\u7B7E\u6765\u63A7\u5236\u5B57\u6BB5\u7684\u7A7A\u503C\u8FC7\u6EE4\uFF0C\u800C\u5EFA\u8BAE\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"OmitEmpty"})," \u65B9\u6CD5\u6765\u505A\u63A7\u5236\u3002\u56E0\u4E3A\u8BE5\u6807\u7B7E\u4E00\u65E6\u52A0\u4E0A\u4E4B\u540E\u4FBF\u7ED1\u5B9A\u5230\u4E86 ",(0,r.jsx)(n.code,{children:"struct"})," \u4E0A\uFF0C\u6CA1\u6709\u529E\u6CD5\u505A\u7075\u6D3B\u63A7\u5236\uFF1B\u800C\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"OmitEmpty"})," \u65B9\u6CD5\u4F7F\u5F97\u5F00\u53D1\u8005\u53EF\u4EE5\u9009\u62E9\u6027\u5730\u3001\u6839\u636E\u4E1A\u52A1\u573A\u666F\u5BF9 ",(0,r.jsx)(n.code,{children:"struct"})," \u505A\u7A7A\u503C\u8FC7\u6EE4\uFF0C\u64CD\u4F5C\u66F4\u52A0\u7075\u6D3B\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u6570\u636E\u67E5\u8BE2\u64CD\u4F5C",children:"\u6570\u636E\u67E5\u8BE2\u64CD\u4F5C"}),"\n",(0,r.jsxs)(n.p,{children:["\u7A7A\u503C\u4E5F\u4F1A\u5F71\u54CD\u6570\u636E\u67E5\u8BE2\u64CD\u4F5C\uFF0C\u4E3B\u8981\u662F\u5F71\u54CD ",(0,r.jsx)(n.code,{children:"where"})," \u6761\u4EF6\u53C2\u6570\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"OmitEmpty"})," \u65B9\u6CD5\u8FC7\u6EE4\u6761\u4EF6\u53C2\u6570\u4E2D\u7684\u7A7A\u503C\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4F7F\u7528\u793A\u4F8B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// SELECT * FROM `user` WHERE `passport`=\'john\' LIMIT 1\nr, err := g.Model("user").Where(g.Map{\n    "nickname" : "",\n    "passport" : "john",\n}).OmitEmpty().One()\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'type User struct {\n    Id         int    `orm:"id"`\n    Passport   string `orm:"passport"`\n    Password   string `orm:"password"`\n    NickName   string `orm:"nickname"`\n    CreateTime string `orm:"create_time"`\n    UpdateTime string `orm:"update_time"`\n}\nuser := User{\n    Passport : "john",\n}\nr, err := g.Model("user").OmitEmpty().Where(user).One()\n// SELECT * FROM `user` WHERE `passport`=\'john\' LIMIT 1\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"omitnil-\u7A7A\u503C\u8FC7\u6EE4",children:[(0,r.jsx)(n.code,{children:"OmitNil"})," \u7A7A\u503C\u8FC7\u6EE4"]}),"\n",(0,r.jsx)(n.h3,{id:"\u57FA\u672C\u4ECB\u7ECD",children:"\u57FA\u672C\u4ECB\u7ECD"}),"\n",(0,r.jsxs)(n.p,{children:["\u5F53 ",(0,r.jsx)(n.code,{children:"map"}),"/ ",(0,r.jsx)(n.code,{children:"struct"})," \u4E2D\u5B58\u5728\u7A7A\u503C\u5982 ",(0,r.jsx)(n.code,{children:"nil"})," \u65F6\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C ",(0,r.jsx)(n.code,{children:"gdb"})," \u5C06\u4F1A\u5C06\u5176\u5F53\u505A\u6B63\u5E38\u7684\u8F93\u5165\u53C2\u6570\uFF0C\u56E0\u6B64\u8FD9\u4E9B\u53C2\u6570\u4E5F\u4F1A\u88AB\u66F4\u65B0\u5230\u6570\u636E\u8868\u3002 ",(0,r.jsx)(n.code,{children:"OmitNil"})," \u7279\u6027\u53EF\u4EE5\u5728\u5C06\u6570\u636E\u5199\u5165\u5230\u6570\u636E\u5E93\u4E4B\u524D\u8FC7\u6EE4\u7A7A\u503C\u6570\u636E\u7684\u5B57\u6BB5\u3002\u4E0E ",(0,r.jsx)(n.code,{children:"OmitEmpty"})," \u7279\u6027\u7684\u533A\u522B\u5728\u4E8E\uFF0C ",(0,r.jsx)(n.code,{children:"OmitNil"})," \u53EA\u4F1A\u8FC7\u6EE4\u503C\u4E3A ",(0,r.jsx)(n.code,{children:"nil"})," \u7684\u7A7A\u503C\u5B57\u6BB5\uFF0C\u5176\u4ED6\u7A7A\u503C\u5982 ",(0,r.jsx)(n.code,{children:'""'}),", ",(0,r.jsx)(n.code,{children:"0"})," \u5E76\u4E0D\u4F1A\u88AB\u8FC7\u6EE4\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u76F8\u5173\u65B9\u6CD5\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func (m *Model) OmitNil() *Model\nfunc (m *Model) OmitNilWhere() *Model\nfunc (m *Model) OmitNilData() *Model\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"OmitEmpty"})," \u65B9\u6CD5\u4F1A\u540C\u65F6\u8FC7\u6EE4 ",(0,r.jsx)(n.code,{children:"Where"})," \u53CA ",(0,r.jsx)(n.code,{children:"Data"})," \u4E2D\u7684\u7A7A\u503C\u6570\u636E\uFF0C\u800C\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"OmitEmptyWhere/OmitEmptyData"})," \u65B9\u6CD5\u53EF\u4EE5\u6267\u884C\u7279\u5B9A\u7684\u5B57\u6BB5\u8FC7\u6EE4\u3002"]}),"\n",(0,r.jsxs)(n.h3,{id:"\u4F7F\u7528-do-\u5BF9\u8C61\u8FDB\u884C\u5B57\u6BB5\u8FC7\u6EE4",children:["\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"do"})," \u5BF9\u8C61\u8FDB\u884C\u5B57\u6BB5\u8FC7\u6EE4"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679C\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"GoFrame"})," \u5DE5\u7A0B\u76EE\u5F55\uFF0C\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"gf gen dao"})," \u6216\u8005 ",(0,r.jsx)(n.code,{children:"make dao"})," \u6307\u4EE4\u4F1A\u81EA\u52A8\u6839\u636E\u914D\u7F6E\u7684\u6570\u636E\u5E93\u751F\u6210\u5BF9\u5E94\u7684\u6570\u636E\u8868 ",(0,r.jsx)(n.code,{children:"dao/entity/do"})," \u6587\u4EF6\uFF0C\u5982\u679C\u5728\u6570\u636E\u5E93\u64CD\u4F5C\u4E2D\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"do"})," \u5BF9\u8C61\uFF0C\u90A3\u4E48\u5C06\u4F1A\u81EA\u52A8\u8FC7\u6EE4\u672A\u8D4B\u503C\u7684\u5B57\u6BB5\u3002\u4F8B\u5982\uFF1A"]}),"\n",(0,r.jsxs)(n.p,{children:["\u751F\u6210\u7684 ",(0,r.jsx)(n.code,{children:"do"})," \u5BF9\u8C61\u7ED3\u6784\u4F53\u5B9A\u4E49"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// User is the golang structure of table user for DAO operations like Where/Data.\ntype User struct {\n    g.Meta   `orm:"table:user, do:true"`\n    Id       interface{} // User ID\n    Passport interface{} // User Passport\n    Password interface{} // User Password\n    Nickname interface{} // User Nickname\n    CreateAt *gtime.Time // Created Time\n    UpdateAt *gtime.Time // Updated Time\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u6570\u636E\u5199\u5165\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"dao.User.Transaction(ctx, func(ctx context.Context, tx gdb.TX) error {\n    _, err = dao.User.Ctx(ctx).Data(do.User{\n        Passport: in.Passport,\n        Password: in.Password,\n        Nickname: in.Nickname,\n    }).Insert()\n    return err\n})\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6570\u636E\u67E5\u8BE2\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"var user *entity.User\nerr = dao.User.Ctx(ctx).Where(do.User{\n    Passport: in.Passport,\n    Password: in.Password,\n}).Scan(&user)\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"filter-\u5B57\u6BB5\u8FC7\u6EE4\u5DF2\u5185\u7F6E",children:[(0,r.jsx)(n.code,{children:"Filter"})," \u5B57\u6BB5\u8FC7\u6EE4(\u5DF2\u5185\u7F6E)"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.del,{children:[(0,r.jsx)(n.code,{children:"gdb"})," \u53EF\u4EE5\u81EA\u52A8\u540C\u6B65 ",(0,r.jsx)(n.strong,{children:"\u6570\u636E\u8868\u7ED3\u6784"})," \u5230\u7A0B\u5E8F\u7F13\u5B58\u4E2D(\u7F13\u5B58\u4E0D\u8FC7\u671F\uFF0C\u76F4\u81F3\u7A0B\u5E8F\u91CD\u542F/\u91CD\u65B0\u90E8\u7F72)\uFF0C\u5E76\u4E14\u53EF\u4EE5\u8FC7\u6EE4\u63D0\u4EA4\u53C2\u6570\u4E2D\u4E0D\u7B26\u5408\u8868\u7ED3\u6784\u7684\u6570\u636E\u9879\uFF0C\u8BE5\u7279\u6027\u53EF\u4EE5\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"Filter"})," \u65B9\u6CD5\u5B9E\u73B0\u3002\u5E38\u7528\u4E8E\u65B0\u589E/\u5220\u9664\u64CD\u4F5C\u4E2D\u8F93\u5165 ",(0,r.jsx)(n.code,{children:"map/struct/[]map/[]string"})," \u53C2\u6570\u7C7B\u578B\u7684\u573A\u666F\u3002"]})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.del,{children:["\u4F7F\u7528\u793A\u4F8B\uFF0C\u5047\u5982 ",(0,r.jsx)(n.code,{children:"user"})," \u8868\u67094\u4E2A\u5B57\u6BB5 ",(0,r.jsx)(n.code,{children:"uid"}),", ",(0,r.jsx)(n.code,{children:"nickname"}),", ",(0,r.jsx)(n.code,{children:"passport"}),", ",(0,r.jsx)(n.code,{children:"password"}),"\uFF1A"]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'r, err := g.Model("user").Filter().Data(g.Map{\n    "id"          : 1,\n    "uid"         : 1,\n    "passport"    : "john",\n    "password"    : "123456",\n}).Insert()\n// INSERT INTO user(uid,passport,password) VALUES(1, "john", "123456")\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.del,{children:["\u5176\u4E2D ",(0,r.jsx)(n.code,{children:"id"})," \u4E3A\u4E0D\u5B58\u5728\u7684\u5B57\u6BB5\uFF0C\u5728\u5199\u5165\u6570\u636E\u65F6\u5C06\u4F1A\u88AB\u8FC7\u6EE4\u6389\uFF0C\u4E0D\u81F3\u4E8E\u88AB\u6784\u9020\u6210\u5199\u5165SQL\u4E2D\u4EA7\u751F\u6267\u884C\u9519\u8BEF\u3002"]})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.del,{children:["\u6570\u636E\u5E93\u6CA1\u6709\u8BBE\u8BA1\u4E3A ",(0,r.jsx)(n.code,{children:"Data"})," \u65B9\u6CD5\u505A\u81EA\u52A8\u8FC7\u6EE4\uFF0C\u800C\u662F\u9700\u8981\u5F00\u53D1\u8005\u8C03\u7528 ",(0,r.jsx)(n.code,{children:"Filter"})," \u65B9\u6CD5\u6765\u624B\u52A8\u6307\u5B9A\u8FC7\u6EE4\uFF0C\u76EE\u7684\u662F\u53CB\u597D\u5730\u63D0\u9192\u5F00\u53D1\u8005\u53EF\u80FD\u8BEF\u5199/\u4F20\u9012\u9519\u8BEF\u4E86\u5B57\u6BB5\u540D\u79F0\u3002\u5982\u679C\u5F3A\u5236\u6027\u7684\u81EA\u52A8\u8FC7\u6EE4\u53EF\u80FD\u4F1A\u5F15\u8D77\u96BE\u4EE5\u9884\u6599\u7684\u4E1A\u52A1\u903B\u8F91\u5F02\u5E38\uFF0C\u4F8B\u5982\uFF0C\u7531\u4E8E\u5B57\u6BB5\u540D\u79F0\u62FC\u5199\u9519\u8BEF\u5BFC\u81F4\u81EA\u52A8\u8FC7\u6EE4\u4E86\u672C\u6765\u9700\u8981\u8F93\u5165\u7684\u5B57\u6BB5\uFF0C\u5BFC\u81F4\u5199\u5165\u6570\u636E\u5E93\u7684\u6570\u636E\u4E0D\u5B8C\u6574\u3002"]})}),"\n",(0,r.jsxs)(n.p,{children:["\u4ECE ",(0,r.jsx)(n.code,{children:"GoFrame v1.15.7"})," \u7248\u672C\u5F00\u59CB\uFF0C\u6839\u636E\u793E\u533A\u6574\u4F53\u53CD\u9988\uFF0C\u4E3A\u63D0\u9AD8\u7EC4\u4EF6\u6613\u7528\u6027\uFF0C ",(0,r.jsx)(n.code,{children:"filter"})," \u7279\u6027\u88AB\u8BBE\u7F6E\u4E3A\u9ED8\u8BA4\u5F00\u542F\uFF0C\u4E0D\u518D\u9700\u8981\u663E\u793A\u8C03\u7528\uFF0C ",(0,r.jsx)(n.code,{children:"Filter"})," \u65B9\u6CD5\u5DF2\u88AB\u6807\u8BB0\u5E9F\u5F03\u3002"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return c}});var d=s(667294);let r={},i=d.createContext(r);function c(e){let n=d.useContext(i);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);