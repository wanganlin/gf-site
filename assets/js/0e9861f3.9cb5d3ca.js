"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[18955],{683871:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u65f6\u533a\u5904\u7406","title":"ORM\u65f6\u533a\u5904\u7406","description":"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u5728GoFrame\u6846\u67b6\u4e2d\u5904\u7406ORM\u64cd\u4f5c\u4e2d\u7684\u65f6\u533a\u95ee\u9898\uff0c\u7279\u522b\u662f\u4f7f\u7528MySQL\u6570\u636e\u5e93\u65f6\u7684\u65f6\u533a\u8f6c\u6362\u3002\u6211\u4eec\u8bb2\u89e3\u4e86\u5982\u4f55\u901a\u8fc7\u8bbe\u7f6eloc\u53c2\u6570\u6765\u63a7\u5236time.Time\u5bf9\u8c61\u5728\u63d0\u4ea4\u5230\u6570\u636e\u5e93\u65f6\u7684\u65f6\u533a\u5904\u7406\uff0c\u5e76\u63d0\u4f9b\u4e86\u76f8\u5173\u4ee3\u7801\u793a\u4f8b\u548c\u914d\u7f6e\u5efa\u8bae\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u5728\u5904\u7406\u6570\u636e\u5e93\u64cd\u4f5c\u65f6\u66f4\u597d\u5730\u7ba1\u7406\u65f6\u533a\u3002","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u65f6\u533a\u5904\u7406.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM","slug":"/docs/core/gdb-timezone","permalink":"/docs/core/gdb-timezone","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u65f6\u533a\u5904\u7406.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731055597000,"sidebarPosition":5,"frontMatter":{"slug":"/docs/core/gdb-timezone","title":"ORM\u65f6\u533a\u5904\u7406","sidebar_position":5,"hide_title":true,"keywords":["GoFrame\u6846\u67b6","ORM\u65f6\u533a\u5904\u7406","MySQL\u65f6\u533a","time.Time","\u6570\u636e\u5e93\u9a71\u52a8","\u65f6\u533a\u8f6c\u6362","loc\u53c2\u6570","\u65f6\u533a\u8bbe\u7f6e","\u914d\u7f6e\u6587\u4ef6","time.Parse"],"description":"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u5728GoFrame\u6846\u67b6\u4e2d\u5904\u7406ORM\u64cd\u4f5c\u4e2d\u7684\u65f6\u533a\u95ee\u9898\uff0c\u7279\u522b\u662f\u4f7f\u7528MySQL\u6570\u636e\u5e93\u65f6\u7684\u65f6\u533a\u8f6c\u6362\u3002\u6211\u4eec\u8bb2\u89e3\u4e86\u5982\u4f55\u901a\u8fc7\u8bbe\u7f6eloc\u53c2\u6570\u6765\u63a7\u5236time.Time\u5bf9\u8c61\u5728\u63d0\u4ea4\u5230\u6570\u636e\u5e93\u65f6\u7684\u65f6\u533a\u5904\u7406\uff0c\u5e76\u63d0\u4f9b\u4e86\u76f8\u5173\u4ee3\u7801\u793a\u4f8b\u548c\u914d\u7f6e\u5efa\u8bae\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u5728\u5904\u7406\u6570\u636e\u5e93\u64cd\u4f5c\u65f6\u66f4\u597d\u5730\u7ba1\u7406\u65f6\u533a\u3002"},"sidebar":"mainSidebar","previous":{"title":"ORM\u7ed3\u679c\u5904\u7406-\u7a7a\u6570\u7ec4\u7ed3\u6784\u8fd4\u56de","permalink":"/docs/core/gdb-result-empty-array"},"next":{"title":"ORM\u6a21\u578b\u751f\u6210","permalink":"/docs/core/gdb-model-generating"}}');var r=c(474848),t=c(28453);const s={slug:"/docs/core/gdb-timezone",title:"ORM\u65f6\u533a\u5904\u7406",sidebar_position:5,hide_title:!0,keywords:["GoFrame\u6846\u67b6","ORM\u65f6\u533a\u5904\u7406","MySQL\u65f6\u533a","time.Time","\u6570\u636e\u5e93\u9a71\u52a8","\u65f6\u533a\u8f6c\u6362","loc\u53c2\u6570","\u65f6\u533a\u8bbe\u7f6e","\u914d\u7f6e\u6587\u4ef6","time.Parse"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u5728GoFrame\u6846\u67b6\u4e2d\u5904\u7406ORM\u64cd\u4f5c\u4e2d\u7684\u65f6\u533a\u95ee\u9898\uff0c\u7279\u522b\u662f\u4f7f\u7528MySQL\u6570\u636e\u5e93\u65f6\u7684\u65f6\u533a\u8f6c\u6362\u3002\u6211\u4eec\u8bb2\u89e3\u4e86\u5982\u4f55\u901a\u8fc7\u8bbe\u7f6eloc\u53c2\u6570\u6765\u63a7\u5236time.Time\u5bf9\u8c61\u5728\u63d0\u4ea4\u5230\u6570\u636e\u5e93\u65f6\u7684\u65f6\u533a\u5904\u7406\uff0c\u5e76\u63d0\u4f9b\u4e86\u76f8\u5173\u4ee3\u7801\u793a\u4f8b\u548c\u914d\u7f6e\u5efa\u8bae\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u5728\u5904\u7406\u6570\u636e\u5e93\u64cd\u4f5c\u65f6\u66f4\u597d\u5730\u7ba1\u7406\u65f6\u533a\u3002"},d=void 0,o={},l=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u8f6c\u6362\u793a\u4f8b",id:"\u8f6c\u6362\u793a\u4f8b",level:2},{value:"\u793a\u4f8b1\uff0c\u8bbe\u7f6e <code>loc=Local</code>",id:"\u793a\u4f8b1\u8bbe\u7f6e-loclocal",level:3},{value:"\u793a\u4f8b2\uff0c\u4e0d\u8bbe\u7f6e <code>loc</code> \u53c2\u6570",id:"\u793a\u4f8b2\u4e0d\u8bbe\u7f6e-loc-\u53c2\u6570",level:3},{value:"\u6539\u8fdb\u5efa\u8bae",id:"\u6539\u8fdb\u5efa\u8bae",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u4e2a\u95ee\u9898\u7531\u4e8e\u5927\u5bb6\u95ee\u5f97\u6bd4\u8f83\u591a\uff0c\u56e0\u6b64\u5355\u72ec\u5f00\u4e86\u4e00\u4e2a\u7ae0\u8282\u8be6\u7ec6\u4ecb\u7ecd\u4e00\u4e0b ",(0,r.jsx)(n.code,{children:"ORM"})," \u4e2d\u7684\u65f6\u533a\u5904\u7406\u662f\u600e\u4e48\u4e00\u56de\u4e8b\u3002\u6211\u4eec\u8fd9\u91cc\u4ee5 ",(0,r.jsx)(n.code,{children:"MySQL"})," \u6570\u636e\u5e93\u4e3a\u4f8b\u6765\u4ecb\u7ecd\u65f6\u533a\u8f6c\u6362\u7684\u4e8b\u60c5\uff0c\u672c\u5730\u65f6\u533a\u6211\u4eec\u8bbe\u5b9a\u4e3a ",(0,r.jsx)(n.code,{children:"+8"})," \u65f6\u533a\uff0c\u6570\u636e\u5e93\u65f6\u533a\u4e5f\u662f ",(0,r.jsx)(n.code,{children:"+8"})," \u65f6\u533a\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"MySQL"})," \u6570\u636e\u5e93\u9a71\u52a8\u7528\u5f97\u6700\u591a\u7684\u662f\u8fd9\u4e2a\u7b2c\u4e09\u65b9\u5305\uff1a ",(0,r.jsx)(n.a,{href:"https://github.com/go-sql-driver/mysql",children:"https://github.com/go-sql-driver/mysql"})," \uff0c\u5728\u8fd9\u4e2a\u7b2c\u4e09\u65b9\u5305\u4e2d\u6709\u8fd9\u4e48\u4e00\u4e2a\u53c2\u6570:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:c(898602).A+"",width:"1872",height:"768"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5927\u6982\u7684\u610f\u601d\u662f\uff0c\u5f53\u4f60\u63d0\u4ea4\u7684\u65f6\u95f4\u53c2\u6570\u4e3a ",(0,r.jsx)(n.code,{children:"time.Time"})," \u65f6\uff0c\u8be5\u53c2\u6570\u7528\u6765\u8f6c\u6362\u53c2\u6570\u65f6\u533a\u7684\u3002\u5f53\u4f60\u5728\u8fde\u63a5\u6570\u636e\u5e93\u65f6\uff0c\u8be5\u53c2\u6570\u4f20\u9012 ",(0,r.jsx)(n.code,{children:"loc=Local"}),"\uff0c\u90a3\u4e48\u8be5 ",(0,r.jsx)(n.code,{children:"driver"})," \u5c06\u4f1a\u81ea\u52a8\u5c06\u4f60\u63d0\u4ea4\u7684 ",(0,r.jsx)(n.code,{children:"time.Time"})," \u53c2\u6570\u8f6c\u6362\u4e3a\u672c\u5730\u7a0b\u5e8f\u8bbe\u7f6e\u7684\u65f6\u533a\uff0c\u6ca1\u6709\u624b\u52a8\u8bbe\u7f6e\u65f6\uff0c\u90a3\u4e48\u8be5\u65f6\u533a\u4e3a ",(0,r.jsx)(n.code,{children:"UTC"})," \u65f6\u533a\u3002\u90a3\u4e48\u6211\u4eec\u6765\u770b\u4e24\u4e2a\u4f8b\u5b50\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8f6c\u6362\u793a\u4f8b",children:"\u8f6c\u6362\u793a\u4f8b"}),"\n",(0,r.jsxs)(n.h3,{id:"\u793a\u4f8b1\u8bbe\u7f6e-loclocal",children:["\u793a\u4f8b1\uff0c\u8bbe\u7f6e ",(0,r.jsx)(n.code,{children:"loc=Local"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u914d\u7f6e\u6587\u4ef6"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'database:\n  link: "mysql:root:12345678@tcp(127.0.0.1:3306)/test?loc=Local"\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u4ee3\u7801\u793a\u4f8b"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'t1, _ := time.Parse("2006-01-02 15:04:05", "2020-10-27 10:00:00")\nt2, _ := time.Parse("2006-01-02 15:04:05", "2020-10-27 11:00:00")\ndb.Model("user").Ctx(ctx).Where("create_time>? and create_time<?", t1, t2).One()\n// SELECT * FROM `user` WHERE create_time>\'2020-10-27 18:00:00\' AND create_time<\'2020-10-27 19:00:00\'\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u91cc\u7531\u4e8e\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"time.Parse"})," \u521b\u5efa\u7684 ",(0,r.jsx)(n.code,{children:"time.Time"})," \u65f6\u95f4\u5bf9\u8c61\u662f ",(0,r.jsx)(n.code,{children:"UTC"})," \u65f6\u533a\uff0c\u90a3\u4e48\u63d0\u4ea4\u5230\u6570\u636e\u5e93\u6267\u884c\u65f6\u5c06\u4f1a\u88ab\u5e95\u5c42\u7684 ",(0,r.jsx)(n.code,{children:"driver"})," \u4fee\u6539\u4e3a ",(0,r.jsx)(n.code,{children:"+8"})," \u65f6\u533a\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'t1, _ := time.ParseInLocation("2006-01-02 15:04:05", "2020-10-27 10:00:00", time.Local)\nt2, _ := time.ParseInLocation("2006-01-02 15:04:05", "2020-10-27 11:00:00", time.Local)\ndb.Model("user").Ctx(ctx).Where("create_time>? and create_time<?", t1, t2).One()\n// SELECT * FROM `user` WHERE create_time>\'2020-10-27 10:00:00\' AND create_time<\'2020-10-27 11:00:00\'\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u91cc\u7531\u4e8e\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"time.ParseInLocation"})," \u521b\u5efa\u7684 ",(0,r.jsx)(n.code,{children:"time.Time"})," \u65f6\u95f4\u5bf9\u8c61\u662f ",(0,r.jsx)(n.code,{children:"+8"})," \u65f6\u533a\uff0c\u548c ",(0,r.jsx)(n.code,{children:"loc=Local"})," \u7684\u65f6\u533a\u4e00\u81f4\uff0c\u90a3\u4e48\u63d0\u4ea4\u5230\u6570\u636e\u5e93\u6267\u884c\u65f6\u4e0d\u4f1a\u88ab\u5e95\u5c42\u7684 ",(0,r.jsx)(n.code,{children:"driver"})," \u4fee\u6539\u3002"]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["\u6ce8\u610f\u5728\u5199\u5165\u6570\u636e\u4e2d\u5305\u542b ",(0,r.jsx)(n.code,{children:"time.Time"})," \u53c2\u6570\u65f6\uff0c\u4e5f\u9700\u8981\u6ce8\u610f\u65f6\u533a\u8f6c\u6362\u7684\u95ee\u9898\u3002"]})}),"\n",(0,r.jsxs)(n.h3,{id:"\u793a\u4f8b2\u4e0d\u8bbe\u7f6e-loc-\u53c2\u6570",children:["\u793a\u4f8b2\uff0c\u4e0d\u8bbe\u7f6e ",(0,r.jsx)(n.code,{children:"loc"})," \u53c2\u6570"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u914d\u7f6e\u6587\u4ef6"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'database:\n  link: "mysql:root:12345678@tcp(127.0.0.1:3306)/test"\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u4ee3\u7801\u793a\u4f8b"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'t1, _ := time.Parse("2006-01-02 15:04:05", "2020-10-27 10:00:00")\nt2, _ := time.Parse("2006-01-02 15:04:05", "2020-10-27 11:00:00")\ndb.Model("user").Ctx(ctx).Where("create_time>? and create_time<?", t1, t2).One()\n// SELECT * FROM `user` WHERE create_time>\'2020-10-27 10:00:00\' AND create_time<\'2020-10-27 11:00:00\'\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u91cc\u7531\u4e8e\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"time.Parse"})," \u521b\u5efa\u7684 ",(0,r.jsx)(n.code,{children:"time.Time"})," \u65f6\u95f4\u5bf9\u8c61\u662f ",(0,r.jsx)(n.code,{children:"UTC"})," \u65f6\u533a\uff0c\u90a3\u4e48\u63d0\u4ea4\u5230\u6570\u636e\u5e93\u6267\u884c\u65f6\u5c06\u4e0d\u4f1a\u88ab\u5e95\u5c42\u7684 ",(0,r.jsx)(n.code,{children:"driver"})," \u4fee\u6539\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'t1, _ := time.ParseInLocation("2006-01-02 15:04:05", "2020-10-27 10:00:00", time.Local)\nt2, _ := time.ParseInLocation("2006-01-02 15:04:05", "2020-10-27 11:00:00", time.Local)\ndb.Model("user").Ctx(ctx).Where("create_time>? and create_time<?", t1, t2).One()\n// SELECT * FROM `user` WHERE create_time>\'2020-10-27 02:00:00\' AND create_time<\'2020-10-27 03:00:00\'\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u91cc\u7531\u4e8e\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"time.ParseInLocation"})," \u521b\u5efa\u7684 ",(0,r.jsx)(n.code,{children:"time.Time"})," \u65f6\u95f4\u5bf9\u8c61\u662f ",(0,r.jsx)(n.code,{children:"+8"})," \u65f6\u533a\uff0c\u90a3\u4e48\u63d0\u4ea4\u5230\u6570\u636e\u5e93\u6267\u884c\u65f6\u4f1a\u88ab\u5e95\u5c42\u7684 ",(0,r.jsx)(n.code,{children:"driver"})," \u4fee\u6539\u4e3a ",(0,r.jsx)(n.code,{children:"UTC"})," \u65f6\u533a\u3002"]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["\u6ce8\u610f\u5728\u5199\u5165\u6570\u636e\u4e2d\u5305\u542b ",(0,r.jsx)(n.code,{children:"time.Time"})," \u53c2\u6570\u65f6\uff0c\u4e5f\u9700\u8981\u6ce8\u610f\u65f6\u533a\u8f6c\u6362\u7684\u95ee\u9898\u3002"]})}),"\n",(0,r.jsx)(n.h2,{id:"\u6539\u8fdb\u5efa\u8bae",children:"\u6539\u8fdb\u5efa\u8bae"}),"\n",(0,r.jsxs)(n.p,{children:["\u5efa\u8bae\u5728\u914d\u7f6e\u4e2d\u7edf\u4e00\u52a0\u4e0a ",(0,r.jsx)(n.code,{children:"locl"})," \u914d\u7f6e\uff0c\u4f8b\u5982\uff08MySQL\uff09\uff1a ",(0,r.jsx)(n.code,{children:"loc=Local&parseTime=true"}),"\u3002\u4ee5\u4e0b\u662f\u4e00\u4e2a\u53ef\u4f9b\u53c2\u8003\u7684\u914d\u7f6e\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'database:\n  logger:\n    level:  "all"\n    stdout: true\n  default:\n    link:  "mysql:root:12345678@tcp(192.168.1.10:3306)/mydb?loc=Local&parseTime=true"\n    debug: true\n  order:\n    link:  "mysql:root:12345678@tcp(192.168.1.20:3306)/order?loc=Local&parseTime=true"\n    debug: true\n'})})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},898602:(e,n,c)=>{c.d(n,{A:()=>i});const i=c.p+"assets/images/86813361650854a9b17490267709df8a-4cb46e19a4360a42a197ba31624f3fd8.png"},28453:(e,n,c)=>{c.d(n,{R:()=>s,x:()=>d});var i=c(296540);const r={},t=i.createContext(r);function s(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);