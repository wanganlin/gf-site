"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["26718"],{780633:function(e,n,t){t.r(n),t.d(n,{metadata:()=>o,contentTitle:()=>c,default:()=>a,assets:()=>i,toc:()=>d,frontMatter:()=>l});var o=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-Hook\u7279\u6027","title":"ORM\u94FE\u5F0F\u64CD\u4F5C-Hook\u7279\u6027","description":"Hook \u7279\u6027\u5141\u8BB8\u6211\u4EEC\u5BF9\u7279\u6027\u7684 Model \u7ED1\u5B9A CURD \u94A9\u5B50\u5904\u7406\u3002","source":"@site/versioned_docs/version-2.1.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-Hook\u7279\u6027.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9","slug":"/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-Hook\u7279\u6027","permalink":"/en/2.1.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-Hook\u7279\u6027","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.1.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-Hook\u7279\u6027.md","tags":[],"version":"2.1.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":13,"frontMatter":{"title":"ORM\u94FE\u5F0F\u64CD\u4F5C-Hook\u7279\u6027","sidebar_position":13,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u5E93\u5207\u6362","permalink":"/en/2.1.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u5E93\u5207\u6362"},"next":{"title":"ORM\u94FE\u5F0F\u64CD\u4F5C-Handler\u7279\u6027","permalink":"/en/2.1.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-Handler\u7279\u6027"}}'),r=t("785893"),s=t("250065");let l={title:"ORM\u94FE\u5F0F\u64CD\u4F5C-Hook\u7279\u6027",sidebar_position:13,hide_title:!0},c=void 0,i={},d=[{value:"\u76F8\u5173\u5B9A\u4E49",id:"\u76F8\u5173\u5B9A\u4E49",level:2},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:2}];function u(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Hook"})," \u7279\u6027\u5141\u8BB8\u6211\u4EEC\u5BF9\u7279\u6027\u7684 ",(0,r.jsx)(n.code,{children:"Model"})," \u7ED1\u5B9A ",(0,r.jsx)(n.code,{children:"CURD"})," \u94A9\u5B50\u5904\u7406\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u76F8\u5173\u5B9A\u4E49",children:"\u76F8\u5173\u5B9A\u4E49"}),"\n",(0,r.jsxs)(n.p,{children:["\u76F8\u5173 ",(0,r.jsx)(n.code,{children:"Hook"})," \u51FD\u6570\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"type (\n    HookFuncSelect func(ctx context.Context, in *HookSelectInput) (result Result, err error)\n    HookFuncInsert func(ctx context.Context, in *HookInsertInput) (result sql.Result, err error)\n    HookFuncUpdate func(ctx context.Context, in *HookUpdateInput) (result sql.Result, err error)\n    HookFuncDelete func(ctx context.Context, in *HookDeleteInput) (result sql.Result, err error)\n)\n\n// HookHandler manages all supported hook functions for Model.\ntype HookHandler struct {\n    Select HookFuncSelect\n    Insert HookFuncInsert\n    Update HookFuncUpdate\n    Delete HookFuncDelete\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Hook"})," \u6CE8\u518C\u65B9\u6CD5\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"// Hook sets the hook functions for current model.\nfunc (m *Model) Hook(hook HookHandler) *Model\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,r.jsxs)(n.p,{children:["\u67E5\u8BE2 ",(0,r.jsx)(n.code,{children:"birth_day"})," \u5B57\u6BB5\u65F6\uFF0C\u540C\u65F6\u8BA1\u7B97\u51FA\u5F53\u524D\u7528\u6237\u7684\u5E74\u9F84\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'m := g.DB().Model("user").Hook(gdb.HookHandler{\n    Select: func(ctx context.Context, in *gdb.HookSelectInput) (result gdb.Result, err error) {\n        result, err = in.Next(ctx)\n        if err != nil {\n            return\n        }\n        for i, record := range result {\n            if !record["birth_day"].IsEmpty() {\n                age := gtime.Now().Sub(record["birth_day"].GTime()).Hours() / 24 / 365\n                record["age"] = gvar.New(age)\n            }\n            result[i] = record\n        }\n        return\n    },\n})\nall, err := m.Where("status", "online").OrderAsc(`id`).All()\n'})})]})}function a(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return l}});var o=t(667294);let r={},s=o.createContext(r);function l(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);