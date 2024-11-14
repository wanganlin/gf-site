"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["39441"],{358312:function(e,n,s){s.r(n),s.d(n,{metadata:()=>d,contentTitle:()=>c,default:()=>u,assets:()=>o,toc:()=>t,frontMatter:()=>l});var d=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6A21\u578B\u521B\u5EFA","title":"ORM\u94FE\u5F0F\u64CD\u4F5C-\u6A21\u578B\u521B\u5EFA","description":"\u6A21\u578B\u521B\u5EFA","source":"@site/versioned_docs/version-2.0.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6A21\u578B\u521B\u5EFA.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9","slug":"/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6A21\u578B\u521B\u5EFA","permalink":"/2.0.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6A21\u578B\u521B\u5EFA","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.0.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6A21\u578B\u521B\u5EFA.md","tags":[],"version":"2.0.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":0,"frontMatter":{"title":"ORM\u94FE\u5F0F\u64CD\u4F5C-\u6A21\u578B\u521B\u5EFA","sidebar_position":0,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"ORM\u94FE\u5F0F\u64CD\u4F5C(\u91CD\u70B9)","permalink":"/2.0.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/"},"next":{"title":"ORM\u94FE\u5F0F\u64CD\u4F5C-\u5199\u5165\u4FDD\u5B58","permalink":"/2.0.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u5199\u5165\u4FDD\u5B58"}}'),i=s("785893"),r=s("250065");let l={title:"ORM\u94FE\u5F0F\u64CD\u4F5C-\u6A21\u578B\u521B\u5EFA",sidebar_position:0,hide_title:!0},c=void 0,o={},t=[{value:"\u6A21\u578B\u521B\u5EFA",id:"\u6A21\u578B\u521B\u5EFA",level:2},{value:"<code>Model</code>",id:"model",level:3},{value:"<code>Raw</code>",id:"raw",level:3},{value:"\u94FE\u5F0F\u5B89\u5168",id:"\u94FE\u5F0F\u5B89\u5168",level:2},{value:"\u9ED8\u8BA4\u60C5\u51B5",id:"\u9ED8\u8BA4\u60C5\u51B5",level:3},{value:"<code>Clone</code> \u65B9\u6CD5",id:"clone-\u65B9\u6CD5",level:3},{value:"<code>Safe</code> \u65B9\u6CD5",id:"safe-\u65B9\u6CD5",level:3}];function M(e){let n={code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u6A21\u578B\u521B\u5EFA",children:"\u6A21\u578B\u521B\u5EFA"}),"\n",(0,i.jsx)(n.h3,{id:"model",children:(0,i.jsx)(n.code,{children:"Model"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Model"})," \u65B9\u6CD5\u7528\u4E8E\u521B\u5EFA\u57FA\u4E8E\u6570\u636E\u8868\u7684 ",(0,i.jsx)(n.code,{children:"Model"})," \u5BF9\u8C61\u3002\u5E38\u89C1\u7684\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"g"})," \u5BF9\u8C61\u7BA1\u7406\u6A21\u5757\u4E2D\u7684 ",(0,i.jsx)(n.code,{children:"Model"})," \u65B9\u6CD5\u5728\u9ED8\u8BA4\u7684\u6570\u636E\u5E93\u914D\u7F6E\u4E0A\u521B\u5EFA ",(0,i.jsx)(n.code,{children:"Model"})," \u5BF9\u8C61\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u4F7F\u7528\u793A\u4F8B\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'g.Model("user")\n// \u6216\u8005\ng.DB().Model("user")\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u6B64\u5916\uFF0C\u5728\u67D0\u4E9B\u573A\u666F\u4E0B\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"DB"})," \u65B9\u6CD5\u5207\u6362\u5F53\u524D\u6A21\u578B\u7684\u6570\u636E\u5E93\u5BF9\u8C61\uFF0C\u4F8B\u5982\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'m := g.Model("user")\nm  = m.DB(g.DB("order"))\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u5176\u6548\u679C\u4E0E\u4EE5\u4E0B\u64CD\u4F5C\u662F\u4E00\u6837\u7684\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'m := g.DB("user").Model("user")\n'})}),"\n",(0,i.jsx)(n.h3,{id:"raw",children:(0,i.jsx)(n.code,{children:"Raw"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Raw"})," \u65B9\u6CD5\u7528\u4E8E\u521B\u5EFA\u4E00\u4E2A\u57FA\u4E8E\u539F\u59CB ",(0,i.jsx)(n.code,{children:"SQL"})," \u8BED\u53E5\u7684 ",(0,i.jsx)(n.code,{children:"Model"})," \u5BF9\u8C61\u3002\u4E5F\u53EF\u4EE5\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"g"})," \u5BF9\u8C61\u7BA1\u7406\u6A21\u5757\u4E2D\u7684 ",(0,i.jsx)(n.code,{children:"ModelRaw"})," \u65B9\u6CD5\u901A\u8FC7\u7ED9\u5B9A\u7684 ",(0,i.jsx)(n.code,{children:"SQL"})," \u8BED\u53E5\u5728\u9ED8\u8BA4\u7684\u6570\u636E\u5E93\u914D\u7F6E\u4E0A\u521B\u5EFA ",(0,i.jsx)(n.code,{children:"Model"})," \u5BF9\u8C61\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'s := "SELECT * FROM `user`"\nm := g.ModelRaw(s).WhereLT("age", 18).Limit(10).OrderAsc("id").All()\n// SELECT * FROM `user` WHERE `age`<18 ORDER BY `id` ASC LIMIT 10\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'s := "SELECT * FROM `user` WHERE `status` IN(?)"\nm := g.ModelRaw(s, g.Slice{1,2,3}).WhereLT("age", 18).Limit(10).OrderAsc("id").All()\n// SELECT * FROM `user` WHERE `status` IN(1,2,3) AND `age`<18 ORDER BY `id` ASC LIMIT 10\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\u94FE\u5F0F\u5B89\u5168",children:"\u94FE\u5F0F\u5B89\u5168"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"\u94FE\u5F0F\u5B89\u5168"})," \u53EA\u662F\u6A21\u578B\u64CD\u4F5C\u7684\u4E24\u79CD\u65B9\u5F0F\u533A\u522B\uFF1A\u4E00\u79CD\u4F1A\u4FEE\u6539\u5F53\u524D ",(0,i.jsx)(n.code,{children:"model"})," \u5BF9\u8C61\uFF08\u4E0D\u5B89\u5168\uFF0C\u9ED8\u8BA4\uFF09\uFF0C\u4E00\u79CD\u4E0D\u4F1A\uFF08\u5B89\u5168\uFF09\u4F46\u662F\u6A21\u578B\u5C5E\u6027\u4FEE\u6539/\u6761\u4EF6\u53E0\u52A0\u9700\u8981\u4F7F\u7528\u8D4B\u503C\u64CD\u4F5C\uFF0C\u4EC5\u6B64\u800C\u5DF2\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u9ED8\u8BA4\u60C5\u51B5",children:"\u9ED8\u8BA4\u60C5\u51B5"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C ",(0,i.jsx)(n.code,{children:"gdb"})," \u662F ",(0,i.jsx)(n.code,{children:"\u975E\u94FE\u5F0F\u5B89\u5168"})," \u7684\uFF0C\u4E5F\u5C31\u662F\u8BF4\u94FE\u5F0F\u64CD\u4F5C\u7684\u6BCF\u4E00\u4E2A\u65B9\u6CD5\u90FD\u5C06\u5BF9\u5F53\u524D\u64CD\u4F5C\u7684 ",(0,i.jsx)(n.code,{children:"Model"})," \u5C5E\u6027\u8FDB\u884C\u4FEE\u6539\uFF0C\u56E0\u6B64\u8BE5 ",(0,i.jsx)(n.code,{children:"Model"})," \u5BF9\u8C61 ",(0,i.jsx)(n.strong,{children:"\u4E0D\u53EF\u4EE5\u91CD\u590D\u4F7F\u7528"}),"\u3002\u4F8B\u5982\uFF0C\u5F53\u5B58\u5728\u591A\u4E2A\u5206\u5F00\u67E5\u8BE2\u7684\u6761\u4EF6\u65F6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8FD9\u4E48\u6765\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"Model"})," \u5BF9\u8C61\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'user := g.Model("user")\nuser.Where("status", g.Slice{1,2,3})\nif vip {\n    // \u67E5\u8BE2\u6761\u4EF6\u81EA\u52A8\u53E0\u52A0\uFF0C\u4FEE\u6539\u5F53\u524D\u6A21\u578B\u5BF9\u8C61\n    user.Where("money>=?", 1000000)\n} else {\n    // \u67E5\u8BE2\u6761\u4EF6\u81EA\u52A8\u53E0\u52A0\uFF0C\u4FEE\u6539\u5F53\u524D\u6A21\u578B\u5BF9\u8C61\n    user.Where("money<?",  1000000)\n}\n//  vip: SELECT * FROM user WHERE status IN(1,2,3) AND money >= 1000000\n// !vip: SELECT * FROM user WHERE status IN(1,2,3) AND money < 1000000\nr, err := user.All()\n//  vip: SELECT COUNT(1) FROM user WHERE status IN(1,2,3) AND money >= 1000000\n// !vip: SELECT COUNT(1) FROM user WHERE status IN(1,2,3) AND money < 1000000\nn, err := user.Count()\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u53EF\u4EE5\u770B\u5230\uFF0C\u5982\u679C\u662F\u5206\u5F00\u6267\u884C\u94FE\u5F0F\u64CD\u4F5C\uFF0C\u94FE\u5F0F\u7684\u6BCF\u4E00\u4E2A\u64CD\u4F5C\u90FD\u4F1A\u4FEE\u6539\u5DF2\u6709\u7684 ",(0,i.jsx)(n.code,{children:"Model"})," \u5BF9\u8C61\uFF0C\u67E5\u8BE2\u6761\u4EF6\u4F1A\u81EA\u52A8\u53E0\u52A0\uFF0C\u56E0\u6B64 ",(0,i.jsx)(n.code,{children:"user"})," \u5BF9\u8C61\u4E0D\u53EF\u91CD\u590D\u4F7F\u7528\uFF0C\u5426\u5219\u6761\u4EF6\u4F1A\u4E0D\u505C\u53E0\u52A0\u3002\u5E76\u4E14\u5728\u8FD9\u79CD\u4F7F\u7528\u65B9\u5F0F\u4E2D\uFF0C\u6BCF\u6B21\u6211\u4EEC\u9700\u8981\u64CD\u4F5C ",(0,i.jsx)(n.code,{children:"user"})," \u7528\u6237\u8868\uFF0C\u90FD\u5F97\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:'g.DB().Table("user")'})," \u8FD9\u6837\u7684\u8BED\u6CD5\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 ",(0,i.jsx)(n.code,{children:"user"})," \u6A21\u578B\u5BF9\u8C61\uFF0C\u76F8\u5BF9\u6765\u8BF4\u4F1A\u6BD4\u8F83\u7E41\u7410\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u57FA\u4E8E\u6027\u80FD\u4EE5\u53CAGC\u4F18\u5316\u8003\u8651\uFF0C\u6A21\u578B\u5BF9\u8C61\u4E3A ",(0,i.jsx)(n.code,{children:"\u975E\u94FE\u5F0F\u5B89\u5168"}),"\uFF0C\u9632\u6B62\u4EA7\u751F\u8FC7\u591A\u7684\u4E34\u65F6\u6A21\u578B\u5BF9\u8C61\u3002",(0,i.jsx)(n.img,{alt:"(\u5FAE\u7B11)",src:s(490553).Z+"",width:"16",height:"16"})]}),"\n",(0,i.jsxs)(n.h3,{id:"clone-\u65B9\u6CD5",children:[(0,i.jsx)(n.code,{children:"Clone"})," \u65B9\u6CD5"]}),"\n",(0,i.jsxs)(n.p,{children:["\u6B64\u5916\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u624B\u52A8\u8C03\u52A8 ",(0,i.jsx)(n.code,{children:"Clone"})," \u65B9\u6CD5\u514B\u9686\u5F53\u524D\u6A21\u578B\uFF0C\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u6A21\u578B\u6765\u5B9E\u73B0\u94FE\u5F0F\u5B89\u5168\uFF0C\u7531\u4E8E\u662F\u65B0\u7684\u6A21\u578B\u5BF9\u8C61\uFF0C\u56E0\u6B64\u5E76\u4E0D\u62C5\u5FC3\u4F1A\u4FEE\u6539\u5DF2\u6709\u7684\u6A21\u578B\u5BF9\u8C61\u7684\u95EE\u9898\u3002\u4F8B\u5982\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'// \u5B9A\u4E49\u4E00\u4E2A\u7528\u6237\u6A21\u578B\u5355\u4F8B\nuser := g.Model("user")\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'// \u514B\u9686\u4E00\u4E2A\u65B0\u7684\u7528\u6237\u6A21\u578B\nm := user.Clone()\nm.Where("status", g.Slice{1,2,3})\nif vip {\n    m.And("money>=?", 1000000)\n} else {\n    m.And("money<?",  1000000)\n}\n//  vip: SELECT * FROM user WHERE status IN(1,2,3) AND money >= 1000000\n// !vip: SELECT * FROM user WHERE status IN(1,2,3) AND money < 1000000\nr, err := m.All()\n//  vip: SELECT COUNT(1) FROM user WHERE status IN(1,2,3) AND money >= 1000000\n// !vip: SELECT COUNT(1) FROM user WHERE status IN(1,2,3) AND money < 1000000\nn, err := m.Count()\n'})}),"\n",(0,i.jsxs)(n.h3,{id:"safe-\u65B9\u6CD5",children:[(0,i.jsx)(n.code,{children:"Safe"})," \u65B9\u6CD5"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5F53\u7136\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"Safe"})," \u65B9\u6CD5\u8BBE\u7F6E\u5F53\u524D\u6A21\u578B\u4E3A ",(0,i.jsx)(n.code,{children:"\u94FE\u5F0F\u5B89\u5168"})," \u7684\u5BF9\u8C61\uFF0C\u540E\u7EED\u7684\u6BCF\u4E00\u4E2A\u94FE\u5F0F\u64CD\u4F5C\u90FD\u5C06\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684 ",(0,i.jsx)(n.code,{children:"Model"})," \u5BF9\u8C61\uFF0C\u8BE5 ",(0,i.jsx)(n.code,{children:"Model"})," \u5BF9\u8C61\u53EF\u91CD\u590D\u4F7F\u7528\u3002\u4F46\u9700\u8981\u7279\u522B\u6CE8\u610F\u7684\u662F\uFF0C\u6A21\u578B\u5C5E\u6027\u7684\u4FEE\u6539\uFF0C\u6216\u8005\u64CD\u4F5C\u6761\u4EF6\u7684\u53E0\u52A0\uFF0C\u9700\u8981\u901A\u8FC7\u53D8\u91CF\u8D4B\u503C\u7684\u65B9\u5F0F\uFF08 ",(0,i.jsx)(n.code,{children:"m = m.xxx"}),"\uFF09\u8986\u76D6\u539F\u6709\u7684\u6A21\u578B\u5BF9\u8C61\u6765\u5B9E\u73B0\u3002\u4F8B\u5982\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'// \u5B9A\u4E49\u4E00\u4E2A\u7528\u6237\u6A21\u578B\u5355\u4F8B\nuser := g.Model("user").Safe()\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'m := user.Where("status", g.Slice{1,2,3})\nif vip {\n    // \u67E5\u8BE2\u6761\u4EF6\u901A\u8FC7\u8D4B\u503C\u53E0\u52A0\n    m = m.And("money>=?", 1000000)\n} else {\n    // \u67E5\u8BE2\u6761\u4EF6\u901A\u8FC7\u8D4B\u503C\u53E0\u52A0\n    m = m.And("money<?",  1000000)\n}\n//  vip: SELECT * FROM user WHERE status IN(1,2,3) AND money >= 1000000\n// !vip: SELECT * FROM user WHERE status IN(1,2,3) AND money < 1000000\nr, err := m.All()\n//  vip: SELECT COUNT(1) FROM user WHERE status IN(1,2,3) AND money >= 1000000\n// !vip: SELECT COUNT(1) FROM user WHERE status IN(1,2,3) AND money < 1000000\nn, err := m.Count()\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u53EF\u4EE5\u770B\u5230\uFF0C\u793A\u4F8B\u4E2D\u7684\u7528\u6237\u6A21\u578B\u5355\u4F8B\u5BF9\u8C61 ",(0,i.jsx)(n.code,{children:"user"})," \u53EF\u4EE5\u91CD\u590D\u4F7F\u7528\uFF0C\u800C\u4E0D\u7528\u62C5\u5FC3\u88AB\u201C\u6C61\u67D3\u201D\u7684\u95EE\u9898\u3002\u5728\u8FD9\u79CD\u94FE\u5F0F\u5B89\u5168\u7684\u65B9\u5F0F\u4E0B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u7528\u6237\u5355\u4F8B\u5BF9\u8C61 ",(0,i.jsx)(n.code,{children:"user"}),"\uFF0C\u5E76\u4E14\u53EF\u4EE5\u91CD\u590D\u4F7F\u7528\u5230\u540E\u7EED\u7684\u5404\u79CD\u67E5\u8BE2\u4E2D\u3002\u4F46\u662F\u5B58\u5728\u591A\u4E2A\u67E5\u8BE2\u6761\u4EF6\u65F6\uFF0C\u6761\u4EF6\u7684\u53E0\u52A0\u9700\u8981\u901A\u8FC7\u6A21\u578B\u8D4B\u503C\u64CD\u4F5C\uFF08 ",(0,i.jsx)(n.code,{children:"m = m.xxx"}),"\uFF09\u6765\u5B9E\u73B0\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"Safe"})," \u65B9\u6CD5\u6807\u8BB0\u4E4B\u540E\uFF0C\u6BCF\u4E00\u4E2A\u94FE\u5F0F\u64CD\u4F5C\u90FD\u5C06\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u4E34\u65F6\u6A21\u578B\u5BF9\u8C61\uFF08\u5185\u90E8\u81EA\u52A8\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"Clone"})," \u5B9E\u73B0\u6A21\u578B\u514B\u9686\uFF09\uFF0C\u4ECE\u800C\u5B9E\u73B0\u94FE\u5F0F\u5B89\u5168\u3002\u8FD9\u79CD\u4F7F\u7528\u65B9\u5F0F\u5728\u6A21\u578B\u64CD\u4F5C\u4E2D\u6BD4\u8F83\u5E38\u89C1\u3002"]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(M,{...e})}):M(e)}},490553:function(e,n,s){s.d(n,{Z:function(){return d}});let d="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNMCAxNmgxNlYwSDB6Ii8+PC9kZWZzPjxnIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgMTYpIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNhIi8+PC9tYXNrPjxnIG1hc2s9InVybCgjYikiIGZpbGwtcnVsZT0ibm9uemVybyI+PHBhdGggZD0iTTE2IDhBOCA4IDAgMSAwIDAgOGE4IDggMCAwIDAgMTYgMCIgZmlsbD0iI0ZGQ0M0RCIvPjxwYXRoIGQ9Ik00LjY3MyA1LjUwMmMuMDItLjA4LjUyLTEuOTQ2IDMuMzI3LTEuOTQ2IDIuODA4IDAgMy4zMDcgMS44NjYgMy4zMjYgMS45NDZhLjIyMi4yMjIgMCAwIDEtLjM3MS4yMTJjLS4wMDktLjAwOS0uODY5LS44MjUtMi45NTUtLjgyNS0yLjA4NiAwLTIuOTQ3LjgxNi0yLjk1NS44MjVhLjIyNC4yMjQgMCAwIDEtLjI2Ni4wMzUuMjIyLjIyMiAwIDAgMS0uMTA2LS4yNDdNNi40NDQgMTBjMC0uODYtLjQ5Ny0xLjU1Ni0xLjExLTEuNTU2LS42MTQgMC0xLjExMi42OTYtMS4xMTIgMS41NTYgMCAuODYuNDk4IDEuNTU2IDEuMTExIDEuNTU2LjYxNCAwIDEuMTExLS42OTcgMS4xMTEtMS41NTZNMTEuNzc4IDEwYzAtLjg2LS40OTgtMS41NTYtMS4xMTEtMS41NTYtLjYxNCAwLTEuMTExLjY5Ni0xLjExMSAxLjU1NiAwIC44Ni40OTcgMS41NTYgMS4xMSAxLjU1Ni42MTQgMCAxLjExMi0uNjk3IDEuMTEyLTEuNTU2IiBmaWxsPSIjNjY0NTAwIi8+PC9nPjwvZz48L3N2Zz4="},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return l}});var d=s(667294);let i={},r=d.createContext(i);function l(e){let n=d.useContext(r);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);