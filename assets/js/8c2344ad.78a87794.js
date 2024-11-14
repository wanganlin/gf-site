"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["15474"],{684090:function(n,e,t){t.r(e),t.d(e,{metadata:()=>r,contentTitle:()=>o,default:()=>u,assets:()=>s,toc:()=>l,frontMatter:()=>i});var r=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-Handler\u7279\u6027","title":"ORM\u94FE\u5F0F\u64CD\u4F5C-Handler\u7279\u6027","description":"Handler \u7279\u6027\u5141\u8BB8\u60A8\u8F7B\u677E\u5730\u590D\u7528\u5E38\u89C1\u7684\u903B\u8F91\u3002","source":"@site/versioned_docs/version-2.1.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-Handler\u7279\u6027.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9","slug":"/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-Handler\u7279\u6027","permalink":"/2.1.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-Handler\u7279\u6027","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.1.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-Handler\u7279\u6027.md","tags":[],"version":"2.1.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":14,"frontMatter":{"title":"ORM\u94FE\u5F0F\u64CD\u4F5C-Handler\u7279\u6027","sidebar_position":14,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"ORM\u94FE\u5F0F\u64CD\u4F5C-Hook\u7279\u6027","permalink":"/2.1.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-Hook\u7279\u6027"},"next":{"title":"ORM\u94FE\u5F0F\u64CD\u4F5C-\u60B2\u89C2\u9501 & \u4E50\u89C2\u9501","permalink":"/2.1.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u60B2\u89C2\u9501 & \u4E50\u89C2\u9501"}}'),a=t("785893"),d=t("250065");let i={title:"ORM\u94FE\u5F0F\u64CD\u4F5C-Handler\u7279\u6027",sidebar_position:14,hide_title:!0},o=void 0,s={},l=[{value:"\u793A\u4F8B1\uFF0C\u67E5\u8BE2",id:"\u793A\u4F8B1\u67E5\u8BE2",level:2},{value:"\u793A\u4F8B2\uFF0C\u5206\u9875",id:"\u793A\u4F8B2\u5206\u9875",level:2}];function c(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,d.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"Handler"})," \u7279\u6027\u5141\u8BB8\u60A8\u8F7B\u677E\u5730\u590D\u7528\u5E38\u89C1\u7684\u903B\u8F91\u3002"]}),"\n",(0,a.jsx)(e.h2,{id:"\u793A\u4F8B1\u67E5\u8BE2",children:"\u793A\u4F8B1\uFF0C\u67E5\u8BE2"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-go",children:'func AmountGreaterThan1000(m *gdb.Model) *gdb.Model {\n    return m.WhereGT("amount", 1000)\n}\n\nfunc PaidWithCreditCard(m *gdb.Model) *gdb.Model {\n    return m.Where("pay_mode_sign", "credit_card")\n}\n\nfunc PaidWithCod(m *gdb.Model) *gdb.Model {\n    return m.Where("pay_mode_sign", "cod")\n}\n\nfunc OrderStatus(statuses []string) func(m *gdb.Model) *gdb.Model {\n    return func(m *gdb.Model) *gdb.Model {\n        return m.Where("status", statuses)\n    }\n}\n\nvar (\n    m = g.Model("product_order")\n)\n\nm.Handler(AmountGreaterThan1000, PaidWithCreditCard).Scan(&orders)\n// SELECT * FROM `product_order` WHERE `amount`>1000 AND `pay_mode_sign`=\'credit_card\'\n// \u67E5\u627E\u6240\u6709\u91D1\u989D\u5927\u4E8E 1000 \u7684\u4FE1\u7528\u5361\u8BA2\u5355\n\nm.Handler(AmountGreaterThan1000, PaidWithCod).Scan(&orders)\n// SELECT * FROM `product_order` WHERE `amount`>1000 AND `pay_mode_sign`=\'cod\'\n// \u67E5\u627E\u6240\u6709\u91D1\u989D\u5927\u4E8E 1000 \u7684 COD \u8BA2\u5355\n\nm.Handler(AmountGreaterThan1000, OrderStatus([]string{"paid", "shipped"})).Scan(&orders)\n// SELECT * FROM `product_order` WHERE `amount`>1000 AND `status` IN(\'paid\',\'shipped\')\n// \u67E5\u627E\u6240\u6709\u91D1\u989D\u5927\u4E8E1000 \u7684\u5DF2\u4ED8\u6B3E\u6216\u5DF2\u53D1\u8D27\u8BA2\u5355\n'})}),"\n",(0,a.jsx)(e.h2,{id:"\u793A\u4F8B2\u5206\u9875",children:"\u793A\u4F8B2\uFF0C\u5206\u9875"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-go",children:"func Paginate(r *ghttp.Request) func(m *gdb.Model) *gdb.Model {\n    return func(m *gdb.Model) *gdb.Model {\n        type Pagination struct {\n            Page int\n            Size int\n        }\n        var pagination Pagination\n        _ = r.Parse(&pagination)\n        switch {\n        case pagination.Size > 100:\n            pagination.Size = 100\n\n        case pagination.Size <= 0:\n            pagination.Size = 10\n        }\n        return m.Page(pagination.Page, pagination.Size)\n    }\n}\n\nm.Handler(Paginate(r)).Scan(&users)\nm.Handler(Paginate(r)).Scan(&articles)\n"})})]})}function u(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(c,{...n})}):c(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return o},a:function(){return i}});var r=t(667294);let a={},d=r.createContext(a);function i(n){let e=r.useContext(d);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:i(n.components),r.createElement(d.Provider,{value:e},n.children)}}}]);