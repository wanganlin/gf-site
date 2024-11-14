"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["72302"],{47490:function(n,e,r){r.r(e),r.d(e,{metadata:()=>t,contentTitle:()=>i,default:()=>u,assets:()=>s,toc:()=>c,frontMatter:()=>o});var t=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-Handler\u7279\u6027","title":"ORM\u94FE\u5F0F\u64CD\u4F5C-Handler\u7279\u6027","description":"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528ORM\u94FE\u5F0F\u64CD\u4F5C\u5B9E\u73B0Handler\u7279\u6027\uFF0C\u901A\u8FC7\u793A\u4F8B\u5C55\u793A\u4E86\u5982\u4F55\u590D\u7528\u5E38\u89C1\u7684\u67E5\u8BE2\u903B\u8F91\u548C\u5206\u9875\u64CD\u4F5C\uFF0C\u4ECE\u800C\u7B80\u5316\u4EE3\u7801\uFF0C\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\u3002Handler\u7279\u6027\u5141\u8BB8\u5F00\u53D1\u8005\u5B9A\u4E49\u901A\u7528\u903B\u8F91\u5E76\u5E94\u7528\u4E8E\u6570\u636E\u5E93\u6A21\u578B\uFF0C\u5B9E\u73B0\u66F4\u4E3A\u7B80\u6D01\u548C\u53EF\u7EF4\u62A4\u7684\u4EE3\u7801\u7ED3\u6784\u3002","source":"@site/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-Handler\u7279\u6027.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C","slug":"/docs/core/gdb-chaining-handler","permalink":"/en/docs/core/gdb-chaining-handler","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-Handler\u7279\u6027.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":14,"frontMatter":{"slug":"/docs/core/gdb-chaining-handler","title":"ORM\u94FE\u5F0F\u64CD\u4F5C-Handler\u7279\u6027","sidebar_position":14,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","ORM\u94FE\u5F0F\u64CD\u4F5C","Handler\u7279\u6027","\u67E5\u8BE2\u793A\u4F8B","\u5206\u9875\u793A\u4F8B","\u4EE3\u7801\u590D\u7528","\u6570\u636E\u5E93\u64CD\u4F5C","Go\u8BED\u8A00","gdb\u5E93"],"description":"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528ORM\u94FE\u5F0F\u64CD\u4F5C\u5B9E\u73B0Handler\u7279\u6027\uFF0C\u901A\u8FC7\u793A\u4F8B\u5C55\u793A\u4E86\u5982\u4F55\u590D\u7528\u5E38\u89C1\u7684\u67E5\u8BE2\u903B\u8F91\u548C\u5206\u9875\u64CD\u4F5C\uFF0C\u4ECE\u800C\u7B80\u5316\u4EE3\u7801\uFF0C\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\u3002Handler\u7279\u6027\u5141\u8BB8\u5F00\u53D1\u8005\u5B9A\u4E49\u901A\u7528\u903B\u8F91\u5E76\u5E94\u7528\u4E8E\u6570\u636E\u5E93\u6A21\u578B\uFF0C\u5B9E\u73B0\u66F4\u4E3A\u7B80\u6D01\u548C\u53EF\u7EF4\u62A4\u7684\u4EE3\u7801\u7ED3\u6784\u3002"},"sidebar":"mainSidebar","previous":{"title":"ORM\u94FE\u5F0F\u64CD\u4F5C-Hook\u7279\u6027","permalink":"/en/docs/core/gdb-chaining-hook"},"next":{"title":"ORM\u94FE\u5F0F\u64CD\u4F5C-\u60B2\u89C2\u9501 & \u4E50\u89C2\u9501","permalink":"/en/docs/core/gdb-chaining-locks"}}'),a=r("785893"),d=r("250065");let o={slug:"/docs/core/gdb-chaining-handler",title:"ORM\u94FE\u5F0F\u64CD\u4F5C-Handler\u7279\u6027",sidebar_position:14,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","ORM\u94FE\u5F0F\u64CD\u4F5C","Handler\u7279\u6027","\u67E5\u8BE2\u793A\u4F8B","\u5206\u9875\u793A\u4F8B","\u4EE3\u7801\u590D\u7528","\u6570\u636E\u5E93\u64CD\u4F5C","Go\u8BED\u8A00","gdb\u5E93"],description:"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528ORM\u94FE\u5F0F\u64CD\u4F5C\u5B9E\u73B0Handler\u7279\u6027\uFF0C\u901A\u8FC7\u793A\u4F8B\u5C55\u793A\u4E86\u5982\u4F55\u590D\u7528\u5E38\u89C1\u7684\u67E5\u8BE2\u903B\u8F91\u548C\u5206\u9875\u64CD\u4F5C\uFF0C\u4ECE\u800C\u7B80\u5316\u4EE3\u7801\uFF0C\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\u3002Handler\u7279\u6027\u5141\u8BB8\u5F00\u53D1\u8005\u5B9A\u4E49\u901A\u7528\u903B\u8F91\u5E76\u5E94\u7528\u4E8E\u6570\u636E\u5E93\u6A21\u578B\uFF0C\u5B9E\u73B0\u66F4\u4E3A\u7B80\u6D01\u548C\u53EF\u7EF4\u62A4\u7684\u4EE3\u7801\u7ED3\u6784\u3002"},i=void 0,s={},c=[{value:"\u793A\u4F8B1\uFF0C\u67E5\u8BE2",id:"\u793A\u4F8B1\u67E5\u8BE2",level:2},{value:"\u793A\u4F8B2\uFF0C\u5206\u9875",id:"\u793A\u4F8B2\u5206\u9875",level:2}];function l(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,d.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"Handler"})," \u7279\u6027\u5141\u8BB8\u60A8\u8F7B\u677E\u5730\u590D\u7528\u5E38\u89C1\u7684\u903B\u8F91\u3002"]}),"\n",(0,a.jsx)(e.h2,{id:"\u793A\u4F8B1\u67E5\u8BE2",children:"\u793A\u4F8B1\uFF0C\u67E5\u8BE2"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-go",children:'func AmountGreaterThan1000(m *gdb.Model) *gdb.Model {\n    return m.WhereGT("amount", 1000)\n}\n\nfunc PaidWithCreditCard(m *gdb.Model) *gdb.Model {\n    return m.Where("pay_mode_sign", "credit_card")\n}\n\nfunc PaidWithCod(m *gdb.Model) *gdb.Model {\n    return m.Where("pay_mode_sign", "cod")\n}\n\nfunc OrderStatus(statuses []string) func(m *gdb.Model) *gdb.Model {\n    return func(m *gdb.Model) *gdb.Model {\n        return m.Where("status", statuses)\n    }\n}\n\nvar (\n    m = g.Model("product_order")\n)\n\nm.Handler(AmountGreaterThan1000, PaidWithCreditCard).Scan(&orders)\n// SELECT * FROM `product_order` WHERE `amount`>1000 AND `pay_mode_sign`=\'credit_card\'\n// \u67E5\u627E\u6240\u6709\u91D1\u989D\u5927\u4E8E 1000 \u7684\u4FE1\u7528\u5361\u8BA2\u5355\n\nm.Handler(AmountGreaterThan1000, PaidWithCod).Scan(&orders)\n// SELECT * FROM `product_order` WHERE `amount`>1000 AND `pay_mode_sign`=\'cod\'\n// \u67E5\u627E\u6240\u6709\u91D1\u989D\u5927\u4E8E 1000 \u7684 COD \u8BA2\u5355\n\nm.Handler(AmountGreaterThan1000, OrderStatus([]string{"paid", "shipped"})).Scan(&orders)\n// SELECT * FROM `product_order` WHERE `amount`>1000 AND `status` IN(\'paid\',\'shipped\')\n// \u67E5\u627E\u6240\u6709\u91D1\u989D\u5927\u4E8E1000 \u7684\u5DF2\u4ED8\u6B3E\u6216\u5DF2\u53D1\u8D27\u8BA2\u5355\n'})}),"\n",(0,a.jsx)(e.h2,{id:"\u793A\u4F8B2\u5206\u9875",children:"\u793A\u4F8B2\uFF0C\u5206\u9875"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-go",children:"func Paginate(r *ghttp.Request) func(m *gdb.Model) *gdb.Model {\n    return func(m *gdb.Model) *gdb.Model {\n        type Pagination struct {\n            Page int\n            Size int\n        }\n        var pagination Pagination\n        _ = r.Parse(&pagination)\n        switch {\n        case pagination.Size > 100:\n            pagination.Size = 100\n\n        case pagination.Size <= 0:\n            pagination.Size = 10\n        }\n        return m.Page(pagination.Page, pagination.Size)\n    }\n}\n\nm.Handler(Paginate(r)).Scan(&users)\nm.Handler(Paginate(r)).Scan(&articles)\n"})})]})}function u(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(l,{...n})}):l(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return i},a:function(){return o}});var t=r(667294);let a={},d=t.createContext(a);function o(n){let e=t.useContext(d);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:o(n.components),t.createElement(d.Provider,{value:e},n.children)}}}]);