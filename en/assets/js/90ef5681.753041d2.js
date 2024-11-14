"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["45671"],{722214:function(e,n,c){c.r(n),c.d(n,{metadata:()=>i,contentTitle:()=>d,default:()=>h,assets:()=>l,toc:()=>o,frontMatter:()=>s});var i=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u65F6\u533A\u5904\u7406","title":"ORM\u65F6\u533A\u5904\u7406","description":"\u57FA\u672C\u4ECB\u7ECD","source":"@site/versioned_docs/version-2.0.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u65F6\u533A\u5904\u7406.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM","slug":"/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u65F6\u533A\u5904\u7406","permalink":"/en/2.0.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u65F6\u533A\u5904\u7406","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.0.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u65F6\u533A\u5904\u7406.md","tags":[],"version":"2.0.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":5,"frontMatter":{"title":"ORM\u65F6\u533A\u5904\u7406","sidebar_position":5,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"ORM\u4E8B\u52A1\u5904\u7406-\u5D4C\u5957\u4E8B\u52A1","permalink":"/en/2.0.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u4E8B\u52A1\u5904\u7406/ORM\u4E8B\u52A1\u5904\u7406-\u5D4C\u5957\u4E8B\u52A1"},"next":{"title":"ORM\u6A21\u578B\u751F\u6210","permalink":"/en/2.0.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u6A21\u578B\u751F\u6210"}}'),r=c("785893"),t=c("250065");let s={title:"ORM\u65F6\u533A\u5904\u7406",sidebar_position:5,hide_title:!0},d=void 0,l={},o=[{value:"\u57FA\u672C\u4ECB\u7ECD",id:"\u57FA\u672C\u4ECB\u7ECD",level:2},{value:"\u8F6C\u6362\u793A\u4F8B",id:"\u8F6C\u6362\u793A\u4F8B",level:2},{value:"\u793A\u4F8B1\uFF0C\u8BBE\u7F6E <code>loc=Local</code>",id:"\u793A\u4F8B1\u8BBE\u7F6E-loclocal",level:3},{value:"\u793A\u4F8B2\uFF0C\u4E0D\u8BBE\u7F6E <code>loc</code> \u53C2\u6570",id:"\u793A\u4F8B2\u4E0D\u8BBE\u7F6E-loc-\u53C2\u6570",level:3},{value:"\u6539\u8FDB\u5EFA\u8BAE",id:"\u6539\u8FDB\u5EFA\u8BAE",level:2}];function a(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u57FA\u672C\u4ECB\u7ECD",children:"\u57FA\u672C\u4ECB\u7ECD"}),"\n",(0,r.jsxs)(n.p,{children:["\u8FD9\u4E2A\u95EE\u9898\u7531\u4E8E\u5927\u5BB6\u95EE\u5F97\u6BD4\u8F83\u591A\uFF0C\u56E0\u6B64\u5355\u72EC\u5F00\u4E86\u4E00\u4E2A\u7AE0\u8282\u8BE6\u7EC6\u4ECB\u7ECD\u4E00\u4E0B ",(0,r.jsx)(n.code,{children:"ORM"})," \u4E2D\u7684\u65F6\u533A\u5904\u7406\u662F\u600E\u4E48\u4E00\u56DE\u4E8B\u3002\u6211\u4EEC\u8FD9\u91CC\u4EE5 ",(0,r.jsx)(n.code,{children:"MySQL"})," \u6570\u636E\u5E93\u4E3A\u57FA\u7840\u6765\u4ECB\u7ECD\u65F6\u533A\u8F6C\u6362\u7684\u4E8B\u60C5\uFF0C\u672C\u5730\u65F6\u533A\u6211\u4EEC\u8BBE\u5B9A\u4E3A ",(0,r.jsx)(n.code,{children:"+8"})," \u65F6\u533A\uFF0C\u6570\u636E\u5E93\u65F6\u533A\u4E5F\u662F ",(0,r.jsx)(n.code,{children:"+8"})," \u65F6\u533A\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"MySQL"})," \u6570\u636E\u5E93\u9A71\u52A8\u7528\u5F97\u6700\u591A\u7684\u662F\u8FD9\u4E2A\u7B2C\u4E09\u65B9\u5305\uFF1A ",(0,r.jsx)(n.a,{href:"https://github.com/go-sql-driver/mysql",children:"https://github.com/go-sql-driver/mysql"})," \uFF0C\u5728\u8FD9\u4E2A\u7B2C\u4E09\u65B9\u5305\u4E2D\u6709\u8FD9\u4E48\u4E00\u4E2A\u53C2\u6570:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:c(156358).Z+"",width:"1872",height:"768"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5927\u6982\u7684\u610F\u601D\u662F\uFF0C\u5F53\u4F60\u63D0\u4EA4\u7684\u65F6\u95F4\u53C2\u6570\u4E3A ",(0,r.jsx)(n.code,{children:"time.Time"})," \u65F6\uFF0C\u8BE5\u53C2\u6570\u7528\u6765\u8F6C\u6362\u53C2\u6570\u65F6\u533A\u7684\u3002\u5F53\u4F60\u5728\u8FDE\u63A5\u6570\u636E\u5E93\u65F6\uFF0C\u8BE5\u53C2\u6570\u4F20\u9012 ",(0,r.jsx)(n.code,{children:"loc=Local"}),"\uFF0C\u90A3\u4E48\u8BE5 ",(0,r.jsx)(n.code,{children:"driver"})," \u5C06\u4F1A\u81EA\u52A8\u5C06\u4F60\u63D0\u4EA4\u7684 ",(0,r.jsx)(n.code,{children:"time.Time"})," \u53C2\u6570\u8F6C\u6362\u4E3A\u672C\u5730\u7A0B\u5E8F\u8BBE\u7F6E\u7684\u65F6\u533A\uFF0C\u6CA1\u6709\u624B\u52A8\u8BBE\u7F6E\u65F6\uFF0C\u90A3\u4E48\u8BE5\u65F6\u533A\u4E3A ",(0,r.jsx)(n.code,{children:"UTC"})," \u65F6\u533A\u3002\u90A3\u4E48\u6211\u4EEC\u6765\u770B\u4E24\u4E2A\u4F8B\u5B50\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8F6C\u6362\u793A\u4F8B",children:"\u8F6C\u6362\u793A\u4F8B"}),"\n",(0,r.jsxs)(n.h3,{id:"\u793A\u4F8B1\u8BBE\u7F6E-loclocal",children:["\u793A\u4F8B1\uFF0C\u8BBE\u7F6E ",(0,r.jsx)(n.code,{children:"loc=Local"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u914D\u7F6E\u6587\u4EF6"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'[database]\n    link = "mysql:root:12345678@tcp(127.0.0.1:3306)/test?loc=Local"\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u4EE3\u7801\u793A\u4F8B"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'t1, _ := time.Parse("2006-01-02 15:04:05", "2020-10-27 10:00:00")\nt2, _ := time.Parse("2006-01-02 15:04:05", "2020-10-27 11:00:00")\ndb.Model("user").Where("create_time>? and create_time<?", t1, t2).One()\n// SELECT * FROM `user` WHERE create_time>\'2020-10-27 18:00:00\' AND create_time<\'2020-10-27 19:00:00\'\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u8FD9\u91CC\u7531\u4E8E\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"time.Parse"})," \u521B\u5EFA\u7684 ",(0,r.jsx)(n.code,{children:"time.Time"})," \u65F6\u95F4\u5BF9\u8C61\u662F ",(0,r.jsx)(n.code,{children:"UTC"})," \u65F6\u533A\uFF0C\u90A3\u4E48\u63D0\u4EA4\u5230\u6570\u636E\u5E93\u6267\u884C\u65F6\u5C06\u4F1A\u88AB\u5E95\u5C42\u7684 ",(0,r.jsx)(n.code,{children:"driver"})," \u4FEE\u6539\u4E3A ",(0,r.jsx)(n.code,{children:"+8"})," \u65F6\u533A\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'t1, _ := time.ParseInLocation("2006-01-02 15:04:05", "2020-10-27 10:00:00", time.Local)\nt2, _ := time.ParseInLocation("2006-01-02 15:04:05", "2020-10-27 11:00:00", time.Local)\ndb.Model("user").Where("create_time>? and create_time<?", t1, t2).One()\n// SELECT * FROM `user` WHERE create_time>\'2020-10-27 10:00:00\' AND create_time<\'2020-10-27 11:00:00\'\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u8FD9\u91CC\u7531\u4E8E\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"time.ParseInLocation"})," \u521B\u5EFA\u7684 ",(0,r.jsx)(n.code,{children:"time.Time"})," \u65F6\u95F4\u5BF9\u8C61\u662F ",(0,r.jsx)(n.code,{children:"+8"})," \u65F6\u533A\uFF0C\u548C ",(0,r.jsx)(n.code,{children:"loc=Local"})," \u7684\u65F6\u533A\u4E00\u81F4\uFF0C\u90A3\u4E48\u63D0\u4EA4\u5230\u6570\u636E\u5E93\u6267\u884C\u65F6\u4E0D\u4F1A\u88AB\u5E95\u5C42\u7684 ",(0,r.jsx)(n.code,{children:"driver"})," \u4FEE\u6539\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6CE8\u610F\u5728\u5199\u5165\u6570\u636E\u4E2D\u5305\u542B ",(0,r.jsx)(n.code,{children:"time.Time"})," \u53C2\u6570\u65F6\uFF0C\u4E5F\u9700\u8981\u6CE8\u610F\u65F6\u533A\u8F6C\u6362\u7684\u95EE\u9898\u3002"]}),"\n",(0,r.jsxs)(n.h3,{id:"\u793A\u4F8B2\u4E0D\u8BBE\u7F6E-loc-\u53C2\u6570",children:["\u793A\u4F8B2\uFF0C\u4E0D\u8BBE\u7F6E ",(0,r.jsx)(n.code,{children:"loc"})," \u53C2\u6570"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u914D\u7F6E\u6587\u4EF6"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'[database]\n    link = "mysql:root:12345678@tcp(127.0.0.1:3306)/test"\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u4EE3\u7801\u793A\u4F8B"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'t1, _ := time.Parse("2006-01-02 15:04:05", "2020-10-27 10:00:00")\nt2, _ := time.Parse("2006-01-02 15:04:05", "2020-10-27 11:00:00")\ndb.Model("user").Where("create_time>? and create_time<?", t1, t2).One()\n// SELECT * FROM `user` WHERE create_time>\'2020-10-27 10:00:00\' AND create_time<\'2020-10-27 11:00:00\'\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u8FD9\u91CC\u7531\u4E8E\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"time.Parse"})," \u521B\u5EFA\u7684 ",(0,r.jsx)(n.code,{children:"time.Time"})," \u65F6\u95F4\u5BF9\u8C61\u662F ",(0,r.jsx)(n.code,{children:"UTC"})," \u65F6\u533A\uFF0C\u90A3\u4E48\u63D0\u4EA4\u5230\u6570\u636E\u5E93\u6267\u884C\u65F6\u5C06\u4E0D\u4F1A\u88AB\u5E95\u5C42\u7684 ",(0,r.jsx)(n.code,{children:"driver"})," \u4FEE\u6539\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'t1, _ := time.ParseInLocation("2006-01-02 15:04:05", "2020-10-27 10:00:00", time.Local)\nt2, _ := time.ParseInLocation("2006-01-02 15:04:05", "2020-10-27 11:00:00", time.Local)\ndb.Model("user").Where("create_time>? and create_time<?", t1, t2).One()\n// SELECT * FROM `user` WHERE create_time>\'2020-10-27 02:00:00\' AND create_time<\'2020-10-27 03:00:00\'\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u8FD9\u91CC\u7531\u4E8E\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"time.ParseInLocation"})," \u521B\u5EFA\u7684 ",(0,r.jsx)(n.code,{children:"time.Time"})," \u65F6\u95F4\u5BF9\u8C61\u662F ",(0,r.jsx)(n.code,{children:"+8"})," \u65F6\u533A\uFF0C\u90A3\u4E48\u63D0\u4EA4\u5230\u6570\u636E\u5E93\u6267\u884C\u65F6\u4F1A\u88AB\u5E95\u5C42\u7684 ",(0,r.jsx)(n.code,{children:"driver"})," \u4FEE\u6539\u4E3A ",(0,r.jsx)(n.code,{children:"UTC"})," \u65F6\u533A\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6CE8\u610F\u5728\u5199\u5165\u6570\u636E\u4E2D\u5305\u542B ",(0,r.jsx)(n.code,{children:"time.Time"})," \u53C2\u6570\u65F6\uFF0C\u4E5F\u9700\u8981\u6CE8\u610F\u65F6\u533A\u8F6C\u6362\u7684\u95EE\u9898\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u6539\u8FDB\u5EFA\u8BAE",children:"\u6539\u8FDB\u5EFA\u8BAE"}),"\n",(0,r.jsxs)(n.p,{children:["\u5EFA\u8BAE\u7EDF\u4E00\u52A0\u4E0A ",(0,r.jsx)(n.code,{children:"locl"})," \u914D\u7F6E\uFF0C\u4F8B\u5982\uFF1A ",(0,r.jsx)(n.code,{children:"loc=Local&parseTime=true"}),"\u3002\u4EE5\u4E0B\u662F\u4E00\u4E2A\u53EF\u4F9B\u53C2\u8003\u7684\u914D\u7F6E\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'database:\n  logger:\n    level:  "all"\n    stdout: true\n  default:\n    link:  "mysql:root:12345678@tcp(192.168.1.10:3306)/mydb?loc=Local&parseTime=true"\n    debug: true\n  order:\n    link:  "mysql:root:12345678@tcp(192.168.1.20:3306)/order?loc=Local&parseTime=true"\n    debug: true\n'})})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},156358:function(e,n,c){c.d(n,{Z:function(){return i}});let i=c.p+"assets/images/0125635f94f703afd19d96efe7c2e36c-4cb46e19a4360a42a197ba31624f3fd8.png"},250065:function(e,n,c){c.d(n,{Z:function(){return d},a:function(){return s}});var i=c(667294);let r={},t=i.createContext(r);function s(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);