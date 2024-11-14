"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["59006"],{688868:function(e,d,n){n.r(d),n.d(d,{metadata:()=>r,contentTitle:()=>l,default:()=>h,assets:()=>o,toc:()=>c,frontMatter:()=>i});var r=JSON.parse('{"id":"\u5F00\u53D1\u5DE5\u5177/gen \u4EE3\u7801\u751F\u6210/gen dao-\u91CD\u70B9","title":"gen dao(\u91CD\u70B9)","description":"dao \u547D\u4EE4\u7528\u4E8E\u751F\u6210 dao \u6570\u636E\u8BBF\u95EE\u5BF9\u8C61\u6587\u4EF6\uFF0C\u4EE5\u53CA model \u6570\u636E\u7ED3\u6784\u5B9A\u4E49\u6587\u4EF6\u3002\u63A8\u8350\u4F7F\u7528\u914D\u7F6E\u6587\u4EF6\u6765\u7BA1\u7406\u751F\u6210\u89C4\u5219\u3002","source":"@site/versioned_docs/version-1.16.x/\u5F00\u53D1\u5DE5\u5177/gen \u4EE3\u7801\u751F\u6210/gen dao-\u91CD\u70B9.md","sourceDirName":"\u5F00\u53D1\u5DE5\u5177/gen \u4EE3\u7801\u751F\u6210","slug":"/\u5F00\u53D1\u5DE5\u5177/gen \u4EE3\u7801\u751F\u6210/gen dao-\u91CD\u70B9","permalink":"/1.16.x/\u5F00\u53D1\u5DE5\u5177/gen \u4EE3\u7801\u751F\u6210/gen dao-\u91CD\u70B9","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.16.x/\u5F00\u53D1\u5DE5\u5177/gen \u4EE3\u7801\u751F\u6210/gen dao-\u91CD\u70B9.md","tags":[],"version":"1.16.x","lastUpdatedBy":"John","lastUpdatedAt":1730727129000,"sidebarPosition":0,"frontMatter":{"title":"gen dao(\u91CD\u70B9)","sidebar_position":0,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"gen \u4EE3\u7801\u751F\u6210","permalink":"/1.16.x/\u5F00\u53D1\u5DE5\u5177/gen \u4EE3\u7801\u751F\u6210/"},"next":{"title":"gen model","permalink":"/1.16.x/\u5F00\u53D1\u5DE5\u5177/gen \u4EE3\u7801\u751F\u6210/gen model"}}'),s=n("785893"),t=n("250065");let i={title:"gen dao(\u91CD\u70B9)",sidebar_position:0,hide_title:!0},l=void 0,o={},c=[{value:"\u4F7F\u7528\u65B9\u5F0F",id:"\u4F7F\u7528\u65B9\u5F0F",level:2},{value:"\u914D\u7F6E\u793A\u4F8B",id:"\u914D\u7F6E\u793A\u4F8B",level:2},{value:"\u53C2\u6570\u8BF4\u660E",id:"\u53C2\u6570\u8BF4\u660E",level:2}];function a(e){let d={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.code,{children:"dao"})," \u547D\u4EE4\u7528\u4E8E\u751F\u6210 ",(0,s.jsx)(d.code,{children:"dao"})," \u6570\u636E\u8BBF\u95EE\u5BF9\u8C61\u6587\u4EF6\uFF0C\u4EE5\u53CA ",(0,s.jsx)(d.code,{children:"model"})," \u6570\u636E\u7ED3\u6784\u5B9A\u4E49\u6587\u4EF6\u3002\u63A8\u8350\u4F7F\u7528\u914D\u7F6E\u6587\u4EF6\u6765\u7BA1\u7406\u751F\u6210\u89C4\u5219\u3002"]}),"\n",(0,s.jsx)(d.h2,{id:"\u4F7F\u7528\u65B9\u5F0F",children:"\u4F7F\u7528\u65B9\u5F0F"}),"\n",(0,s.jsxs)(d.p,{children:["\u8FDB\u5165\u9879\u76EE\u6839\u76EE\u5F55\u6267\u884C ",(0,s.jsx)(d.code,{children:"gf gen dao"})," \u5373\u53EF\u3002\u4EE5\u4E0B\u4E3A\u547D\u4EE4\u884C\u5E2E\u52A9\u4FE1\u606F\u3002"]}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-bash",children:'$ gf gen dao -h\nUSAGE\n    gf gen dao [OPTION]\n\nOPTION\n    -/--path             directory path for generated files.\n    -l, --link           database configuration, the same as the ORM configuration of GoFrame.\n    -t, --tables         generate models only for given tables, multiple table names separated with \',\'\n    -e, --tablesEx       generate models excluding given tables, multiple table names separated with \',\'\n    -g, --group          specifying the configuration group name of database for generated ORM instance,\n                         it\'s not necessary and the default value is "default"\n    -p, --prefix         add prefix for all table of specified link/database tables.\n    -r, --removePrefix   remove specified prefix of the table, multiple prefix separated with \',\'\n    -m, --mod            module name for generated golang file imports.\n    -j, --jsonCase       generated json tag case for model struct, cases are as follows:\n                         | Case            | Example            |\n                         |---------------- |--------------------|\n                         | Camel           | AnyKindOfString    |\n                         | CamelLower      | anyKindOfString    | default\n                         | Snake           | any_kind_of_string |\n                         | SnakeScreaming  | ANY_KIND_OF_STRING |\n                         | SnakeFirstUpper | rgb_code_md5       |\n                         | Kebab           | any-kind-of-string |\n                         | KebabScreaming  | ANY-KIND-OF-STRING |\n    -/--stdTime          use time.Time from stdlib instead of gtime.Time for generated time/date fields of tables.\n    -/--gJsonSupport     use gJsonSupport to use *gjson.Json instead of string for generated json fields of tables.\n    -/--modelFile        custom file name for storing generated model content.\n    -/--tplDaoIndex      template content for Dao index files generating.\n    -/--tplDaoInternal   template content for Dao internal files generating.\n    -/--tplModelIndex    template content for Model index files generating.\n    -/--tplModelStruct   template content for Model internal files generating.\n\nCONFIGURATION SUPPORT\n    Options are also supported by configuration file.\n    It\'s suggested using configuration file instead of command line arguments making producing.\n    The configuration node name is "gf.gen.dao", which also supports multiple databases, for example:\n    [gfcli]\n        [[gfcli.gen.dao]]\n            link     = "mysql:root:12345678@tcp(127.0.0.1:3306)/test"\n            tables   = "order,products"\n            jsonCase = "CamelLower"\n        [[gfcli.gen.dao]]\n            link   = "mysql:root:12345678@tcp(127.0.0.1:3306)/primary"\n            path   = "./my-app"\n            prefix = "primary_"\n            tables = "user, userDetail"\n\nEXAMPLES\n    gf gen dao\n    gf gen dao -l "mysql:root:12345678@tcp(127.0.0.1:3306)/test"\n    gf gen dao -path ./model -c config.yaml -g user-center -t user,user_detail,user_login\n    gf gen dao -r user_\n'})}),"\n",(0,s.jsx)(d.h2,{id:"\u914D\u7F6E\u793A\u4F8B",children:"\u914D\u7F6E\u793A\u4F8B"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{children:'[gfcli]\n    [[gfcli.gen.dao]]\n        link   = "mysql:root:12345678@tcp(127.0.0.1:3306)/order"\n        group  = "order"\n        prefix = "order_"\n        tables = ""\n    [[gfcli.gen.dao]]\n        link   = "mysql:root:12345678@tcp(127.0.0.1:3306)/user"\n        group  = "user"\n        prefix = "user_"\n        tables = "user,userDetail,userScore"\n'})}),"\n",(0,s.jsx)(d.h2,{id:"\u53C2\u6570\u8BF4\u660E",children:"\u53C2\u6570\u8BF4\u660E"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"\u540D\u79F0"}),(0,s.jsx)(d.th,{children:"\u5FC5\u987B"}),(0,s.jsx)(d.th,{children:"\u9ED8\u8BA4\u503C"}),(0,s.jsx)(d.th,{children:"\u542B\u4E49"}),(0,s.jsx)(d.th,{children:"\u793A\u4F8B"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"gfcli.gen.dao"})}),(0,s.jsx)(d.td,{children:"\u662F"}),(0,s.jsx)(d.td,{}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"dao"})," \u4EE3\u7801\u751F\u6210\u914D\u7F6E\u9879\uFF0C\u53EF\u4EE5\u6709\u591A\u4E2A\u914D\u7F6E\u9879\u6784\u6210\u6570\u7EC4\uFF0C\u652F\u6301\u591A\u4E2A\u6570\u636E\u5E93\u751F\u6210\u3002"]}),(0,s.jsx)(d.td,{children:"-"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"link"})}),(0,s.jsx)(d.td,{children:"\u662F"}),(0,s.jsx)(d.td,{}),(0,s.jsxs)(d.td,{children:["\u5206\u4E3A\u4E24\u90E8\u5206\uFF0C\u7B2C\u4E00\u90E8\u5206\u8868\u793A\u4F60\u8FDE\u63A5\u7684\u6570\u636E\u5E93\u7C7B\u578B ",(0,s.jsx)(d.code,{children:"mysql"}),", ",(0,s.jsx)(d.code,{children:"postgresql"})," \u7B49, \u7B2C\u4E8C\u90E8\u5206\u5C31\u662F\u8FDE\u63A5\u6570\u636E\u5E93\u7684 ",(0,s.jsx)(d.code,{children:"dsn"})," \u4FE1\u606F\u3002\u5177\u4F53\u8BF7\u53C2\u8003 ",(0,s.jsx)(d.a,{href:"/1.16.x/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6-%E9%87%8D%E7%82%B9/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E4%BD%BF%E7%94%A8%E9%85%8D%E7%BD%AE",children:"ORM\u4F7F\u7528\u914D\u7F6E"})," \u7AE0\u8282\u3002"]}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"<br />mysql:root:12345678@tcp(127.0.0.1:3306)/user<br />"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"group"})}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"default"})}),(0,s.jsx)(d.td,{children:"\u5728\u6570\u636E\u5E93\u914D\u7F6E\u4E2D\u7684\u6570\u636E\u5E93\u5206\u7EC4\u540D\u79F0\u3002\u53EA\u80FD\u914D\u7F6E\u4E00\u4E2A\u540D\u79F0\u3002"}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"default"}),(0,s.jsx)("br",{}),(0,s.jsx)(d.code,{children:"order"}),(0,s.jsx)("br",{}),(0,s.jsx)(d.code,{children:"user"})]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"tables"})}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"\u6307\u5B9A\u5F53\u524D\u6570\u636E\u5E93\u4E2D\u9700\u8981\u6267\u884C\u4EE3\u7801\u751F\u6210\u7684\u6570\u636E\u8868\u3002\u5982\u679C\u4E3A\u7A7A\uFF0C\u8868\u793A\u6570\u636E\u5E93\u7684\u6240\u6709\u8868\u90FD\u4F1A\u751F\u6210\u3002"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"user, userDetail"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"tablesEx"})}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"\u6307\u5B9A\u5F53\u524D\u6570\u636E\u5E93\u4E2D\u9700\u8981\u6392\u9664\u4EE3\u7801\u751F\u6210\u7684\u6570\u636E\u8868\u3002"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"product, order"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"path"})}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"./app"})}),(0,s.jsxs)(d.td,{children:["\u751F\u6210 ",(0,s.jsx)(d.code,{children:"dao"})," \u548C ",(0,s.jsx)(d.code,{children:"model"})," \u6587\u4EF6\u7684\u5B58\u50A8\u76EE\u5F55\u5730\u5740"]}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"./app"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"modelFile"})}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"model.go"})}),(0,s.jsx)(d.td,{children:"\u81EA\u5B9A\u4E49\u751F\u6210\u7684\u6A21\u578B\u6587\u4EF6\u540D\u79F0\u3002"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"entity.go"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"prefix"})}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"\u751F\u6210\u6570\u636E\u5E93\u5BF9\u8C61\u53CA\u6587\u4EF6\u7684\u524D\u7F00\uFF0C\u4EE5\u4FBF\u533A\u5206\u4E0D\u540C\u6570\u636E\u5E93\u6216\u8005\u4E0D\u540C\u6570\u636E\u5E93\u4E2D\u7684\u76F8\u540C\u8868\u540D\uFF0C\u9632\u6B62\u6570\u636E\u8868\u540C\u540D\u8986\u76D6\u3002"}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"order_"}),(0,s.jsx)("br",{}),(0,s.jsx)(d.code,{children:"user_"})]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"removePrefix"})}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"\u5220\u9664\u6570\u636E\u8868\u7684\u6307\u5B9A\u524D\u7F00\u540D\u79F0\u3002"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"gf_"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"jsonCase"})}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"CamelLower"})}),(0,s.jsxs)(d.td,{children:["\u6307\u5B9A ",(0,s.jsx)(d.code,{children:"model"})," \u4E2D\u751F\u6210\u7684\u6570\u636E\u5B9E\u4F53\u5BF9\u8C61\u4E2D ",(0,s.jsx)(d.code,{children:"json"})," \u6807\u7B7E\u540D\u79F0\u89C4\u5219\uFF0C\u53C2\u6570\u4E0D\u533A\u5206\u5927\u5C0F\u5199\u3002\u53C2\u6570\u53EF\u9009\u4E3A\uFF1A ",(0,s.jsx)(d.code,{children:"Camel"}),"\u3001 ",(0,s.jsx)(d.code,{children:"CamelLower"}),"\u3001 ",(0,s.jsx)(d.code,{children:"Snake"}),"\u3001 ",(0,s.jsx)(d.code,{children:"SnakeScreaming"}),"\u3001 ",(0,s.jsx)(d.code,{children:"SnakeFirstUpper"}),"\u3001 ",(0,s.jsx)(d.code,{children:"Kebab"}),"\u3001 ",(0,s.jsx)(d.code,{children:"KebabScreaming"}),"\u3002\u5177\u4F53\u4ECB\u7ECD\u8BF7\u53C2\u8003\u547D\u540D\u884C\u5E2E\u52A9\u793A\u4F8B\u3002"]}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"CamelLower"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"stdTime"})}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{}),(0,s.jsxs)(d.td,{children:["\u5F53\u6570\u636E\u8868\u5B57\u6BB5\u7C7B\u578B\u4E3A\u65F6\u95F4\u7C7B\u578B\u65F6\uFF0C\u4EE3\u7801\u751F\u6210\u7684\u5C5E\u6027\u7C7B\u578B\u4F7F\u7528\u6807\u51C6\u5E93\u7684 ",(0,s.jsx)(d.code,{children:"time.Time"})," \u800C\u4E0D\u662F\u6846\u67B6\u7684 ",(0,s.jsx)(d.code,{children:"*gtime.Time"})," \u7C7B\u578B\u3002"]}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"1"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"gJsonSupport"})}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{}),(0,s.jsxs)(d.td,{children:["\u5F53\u6570\u636E\u8868\u5B57\u6BB5\u7C7B\u578B\u4E3A ",(0,s.jsx)(d.code,{children:"JSON"})," \u7C7B\u578B\u65F6\uFF0C\u4EE3\u7801\u751F\u6210\u7684\u5C5E\u6027\u7C7B\u578B\u4F7F\u7528 ",(0,s.jsx)(d.code,{children:"*gjson.Json"})," \u7C7B\u578B\u3002"]}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"1"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"tplDaoIndex"})}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"https://github.com/gogf/gf-cli/blob/master/command/gen/gen_dao_template_dao.go",children:"gen_dao_template_dao.go"})}),(0,s.jsxs)(d.td,{children:["\u751F\u6210 ",(0,s.jsx)(d.code,{children:"Dao"})," \u4EE3\u7801\u6587\u4EF6\u6A21\u677F\u5185\u5BB9\u3002"]}),(0,s.jsx)(d.td,{children:"\u8BF7\u67E5\u770B\u4EE3\u7801\u6E90\u6587\u4EF6"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"tplDaoInternal"})}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"https://github.com/gogf/gf-cli/blob/master/command/gen/gen_dao_template_dao.go",children:"gen_dao_template_dao.go"})}),(0,s.jsxs)(d.td,{children:["\u751F\u6210 ",(0,s.jsx)(d.code,{children:"Dao Internal"})," \u4EE3\u7801\u6587\u4EF6\u6A21\u677F\u5185\u5BB9\u3002"]}),(0,s.jsx)(d.td,{children:"\u8BF7\u67E5\u770B\u4EE3\u7801\u6E90\u6587\u4EF6"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"tplModelIndex"})}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"https://github.com/gogf/gf-cli/blob/master/command/gen/gen_dao_template_model.go",children:"gen_dao_template_model.go"})}),(0,s.jsxs)(d.td,{children:["\u751F\u6210 ",(0,s.jsx)(d.code,{children:"Model"})," \u4EE3\u7801\u6587\u4EF6\u6A21\u677F\u5185\u5BB9\u3002"]}),(0,s.jsx)(d.td,{children:"\u8BF7\u67E5\u770B\u4EE3\u7801\u6E90\u6587\u4EF6"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"tplModelStruct"})}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"https://github.com/gogf/gf-cli/blob/master/command/gen/gen_dao_template_model.go",children:"gen_dao_template_model.go"})}),(0,s.jsxs)(d.td,{children:["\u751F\u6210 ",(0,s.jsx)(d.code,{children:"Model Struct"})," \u4EE3\u7801\u6A21\u677F\u5185\u5BB9\u3002"]}),(0,s.jsx)(d.td,{children:"\u8BF7\u67E5\u770B\u4EE3\u7801\u6E90\u6587\u4EF6"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"mod"})}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{}),(0,s.jsxs)(d.td,{children:["\u7528\u4E8E\u751F\u6210 ",(0,s.jsx)(d.code,{children:"go"})," \u6587\u4EF6\u7684 ",(0,s.jsx)(d.code,{children:"import"})," \u8BA1\u7B97\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4F1A\u81EA\u52A8\u8BFB\u53D6\u5F53\u524D\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u7684 ",(0,s.jsx)(d.code,{children:"go.mod"})," \u83B7\u53D6\u3002"]}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"github.com/gogf/gf-demos"})})]})]})]}),"\n",(0,s.jsx)(d.p,{children:"\u751F\u6210\u7684\u4EE3\u7801\u7ED3\u6784\u793A\u4F8B\uFF1A"}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.img,{src:"https://wiki.goframe.org/download/attachments/1114168/image2020-12-24_17-39-44.png?version=1&modificationDate=1608802784148&api=v2",alt:""})}),"\n",(0,s.jsx)(d.p,{children:"\u5176\u4E2D\uFF1A"}),"\n",(0,s.jsxs)(d.ol,{children:["\n",(0,s.jsxs)(d.li,{children:[(0,s.jsx)(d.code,{children:"dao/internal"}),"\xa0\u4EE5\u53CA ",(0,s.jsx)(d.code,{children:"model/internal"})," \u4E0B\u9762\u7684\u6587\u4EF6\u7531\u5DE5\u5177\u751F\u6210\uFF0C\u591A\u6B21\u751F\u6210\u4F1A\u88AB\u8986\u76D6\uFF0C\u56E0\u6B64\u4E0D\u8981\u624B\u52A8\u4FEE\u6539\u3002\u91C7\u7528 ",(0,s.jsx)(d.code,{children:"internal"})," \u5305\u540D\u7684\u76EE\u7684\u662F\u4EC5\u4F5C\u4E3A ",(0,s.jsx)(d.code,{children:"dao"})," \u6216 ",(0,s.jsx)(d.code,{children:"model"})," \u7684\u5185\u90E8\u5305\u5F15\u7528\uFF0C\u4E0D\u5BF9\u5916\u5F00\u653E\u3002"]}),"\n",(0,s.jsxs)(d.li,{children:[(0,s.jsx)(d.code,{children:"dao"})," \u76EE\u5F55\u4E0B\u7684\u6587\u4EF6 \u53EF\u4EE5\u505A\u4E00\u4E9B\u6570\u636E\u5E93\u7684\u5B9A\u5236\u5316\u64CD\u4F5C\uFF0C\u901A\u8FC7\u5DE5\u5177\u591A\u6B21\u751F\u6210\u4E0D\u4F1A\u8986\u76D6\uFF0C\u4F46\u662F\u66F4\u591A\u5EFA\u8BAE\u7528\u6237\u5728\u81EA\u5DF1\u7684 ",(0,s.jsx)(d.code,{children:"service"})," \u4E2D\u5B9E\u73B0\u3002"]}),"\n",(0,s.jsxs)(d.li,{children:[(0,s.jsx)(d.code,{children:"model"})," \u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\uFF0C\u53EF\u4EE5\u505A\u81EA\u5B9A\u4E49\u7684\u4E00\u4E9B\u6570\u636E\u7ED3\u6784\u5B9A\u4E49\uFF0C\u901A\u8FC7\u5DE5\u5177\u591A\u6B21\u751F\u6210\u4E0D\u4F1A\u8986\u76D6\u3002"]}),"\n"]})]})}function h(e={}){let{wrapper:d}={...(0,t.a)(),...e.components};return d?(0,s.jsx)(d,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,d,n){n.d(d,{Z:function(){return l},a:function(){return i}});var r=n(667294);let s={},t=r.createContext(s);function i(e){let d=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(d):{...d,...e}},[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(t.Provider,{value:d},e.children)}}}]);