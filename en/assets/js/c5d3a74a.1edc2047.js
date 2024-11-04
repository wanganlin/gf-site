"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[23041],{32653:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u8fde\u63a5\u6c60\u72b6\u6001","title":"ORM\u9ad8\u7ea7\u7279\u6027-\u8fde\u63a5\u6c60\u72b6\u6001","description":"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 DB.Stats \u65b9\u6cd5\u83b7\u53d6 orm \u5bf9\u8c61\u7684\u8fde\u63a5\u6c60\u72b6\u6001\u3002\u6211\u4eec\u6765\u770b\u4e2a\u793a\u4f8b\uff1a","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u8fde\u63a5\u6c60\u72b6\u6001.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027","slug":"/docs/core/gdb/senior-connection-pool","permalink":"/en/docs/core/gdb/senior-connection-pool","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u8fde\u63a5\u6c60\u72b6\u6001.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730724532000,"sidebarPosition":8,"frontMatter":{"slug":"/docs/core/gdb/senior-connection-pool","title":"ORM\u9ad8\u7ea7\u7279\u6027-\u8fde\u63a5\u6c60\u72b6\u6001","sidebar_position":8,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"ORM\u9ad8\u7ea7\u7279\u6027-\u7c7b\u578b\u8f6c\u6362","permalink":"/en/docs/core/gdb/senior-type-converting"},"next":{"title":"ORM\u9ad8\u7ea7\u7279\u6027-\u5185\u5d4c\u7ed3\u6784\u652f\u6301","permalink":"/en/docs/core/gdb/senior-nested-struct-support"}}');var s=t(74848),r=t(28453);const i={slug:"/docs/core/gdb/senior-connection-pool",title:"ORM\u9ad8\u7ea7\u7279\u6027-\u8fde\u63a5\u6c60\u72b6\u6001",sidebar_position:8,hide_title:!0},c=void 0,a={},d=[];function l(n){const e={code:"code",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:["\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(e.code,{children:"DB.Stats"})," \u65b9\u6cd5\u83b7\u53d6 ",(0,s.jsx)(e.code,{children:"orm"})," \u5bf9\u8c61\u7684\u8fde\u63a5\u6c60\u72b6\u6001\u3002\u6211\u4eec\u6765\u770b\u4e2a\u793a\u4f8b\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    _ "github.com/gogf/gf/contrib/drivers/mysql/v2"\n\n    "github.com/gogf/gf/v2/database/gdb"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var ctx = gctx.New()\n    db, err := gdb.New(gdb.ConfigNode{\n        Link: "mysql:root:12345678@tcp(127.0.0.1:3306)/test",\n    })\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    err = db.PingMaster()\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    stats := db.Stats(ctx)\n    g.Dump(stats)\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\u5982\u4e0b\uff0c\u53ef\u4ee5\u770b\u5230\u6bcf\u4e2a\u94fe\u63a5\u7684\u6570\u636e\u5e93\u8282\u70b9\u4ee5\u53ca\u5bf9\u5e94\u7684\u8fde\u63a5\u6c60\u72b6\u6001\u4fe1\u606f\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:'[\n    {\n        node:  {\n            Host:                 "127.0.0.1",\n            Port:                 "3306",\n            User:                 "root",\n            Pass:                 "12345678",\n            Name:                 "test",\n            Type:                 "mysql",\n            Link:                 "",\n            Extra:                "",\n            Role:                 "",\n            Debug:                false,\n            Prefix:               "",\n            DryRun:               false,\n            Weight:               0,\n            Charset:              "utf8",\n            Protocol:             "tcp",\n            Timezone:             "",\n            Namespace:            "",\n            MaxIdleConnCount:     0,\n            MaxOpenConnCount:     0,\n            MaxConnLifeTime:      0,\n            QueryTimeout:         0,\n            ExecTimeout:          0,\n            TranTimeout:          0,\n            PrepareTimeout:       0,\n            CreatedAt:            "",\n            UpdatedAt:            "",\n            DeletedAt:            "",\n            TimeMaintainDisabled: false,\n        },\n        stats: {\n            MaxOpenConnections: 0,\n            OpenConnections:    1,\n            InUse:              0,\n            Idle:               1,\n            WaitCount:          0,\n            WaitDuration:       0,\n            MaxIdleClosed:      0,\n            MaxIdleTimeClosed:  0,\n            MaxLifetimeClosed:  0,\n        },\n    },\n]\n'})})]})}function g(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>c});var o=t(96540);const s={},r=o.createContext(s);function i(n){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),o.createElement(r.Provider,{value:e},n.children)}}}]);