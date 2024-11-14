"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["74397"],{706228:function(e,n,t){t.r(n),t.d(n,{metadata:()=>c,contentTitle:()=>s,default:()=>x,assets:()=>i,toc:()=>l,frontMatter:()=>o});var c=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u4E0A\u4E0B\u6587\u53D8\u91CF","title":"ORM\u4E0A\u4E0B\u6587\u53D8\u91CF","description":"\u5728GoFrame\u6846\u67B6\u4E2D\u5982\u4F55\u901A\u8FC7ORM\u652F\u6301\u81EA\u5B9A\u4E49\u7684\u4E0A\u4E0B\u6587\u53D8\u91CF\uFF0C\u4EE5\u5B9E\u73B0\u5F02\u6B65IO\u63A7\u5236\u3001\u94FE\u8DEF\u8DDF\u8E2A\u3001\u5D4C\u5957\u4E8B\u52A1\u7B49\u529F\u80FD\u3002\u901A\u8FC7\u4F7F\u7528Ctx\u65B9\u6CD5\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u8F7B\u677E\u4F20\u9012\u81EA\u5B9A\u4E49\u4E0A\u4E0B\u6587\u53D8\u91CF\uFF0C\u5B9E\u73B0\u66F4\u590D\u6742\u7684\u8BF7\u6C42\u63A7\u5236\u548C\u8DDF\u8E2A\u3002\u6587\u7AE0\u63D0\u4F9B\u4E86\u8BF7\u6C42\u8D85\u65F6\u63A7\u5236\u548C\u6A21\u578B\u4E0A\u4E0B\u6587\u64CD\u4F5C\u7684\u5177\u4F53\u793A\u4F8B\u548C\u5EFA\u8BAE\u3002","source":"@site/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u4E0A\u4E0B\u6587\u53D8\u91CF.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM","slug":"/docs/core/gdb-context","permalink":"/docs/core/gdb-context","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u4E0A\u4E0B\u6587\u53D8\u91CF.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":9,"frontMatter":{"slug":"/docs/core/gdb-context","title":"ORM\u4E0A\u4E0B\u6587\u53D8\u91CF","sidebar_position":9,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","ORM\u4E0A\u4E0B\u6587\u53D8\u91CF","\u5F02\u6B65IO\u63A7\u5236","\u94FE\u8DEF\u8DDF\u8E2A","\u4E0A\u4E0B\u6587\u53D8\u91CF","\u8BF7\u6C42\u8D85\u65F6","\u5D4C\u5957\u4E8B\u52A1","\u6A21\u578B\u4E0A\u4E0B\u6587\u64CD\u4F5C","ORM\u4E8B\u52A1\u5904\u7406"],"description":"\u5728GoFrame\u6846\u67B6\u4E2D\u5982\u4F55\u901A\u8FC7ORM\u652F\u6301\u81EA\u5B9A\u4E49\u7684\u4E0A\u4E0B\u6587\u53D8\u91CF\uFF0C\u4EE5\u5B9E\u73B0\u5F02\u6B65IO\u63A7\u5236\u3001\u94FE\u8DEF\u8DDF\u8E2A\u3001\u5D4C\u5957\u4E8B\u52A1\u7B49\u529F\u80FD\u3002\u901A\u8FC7\u4F7F\u7528Ctx\u65B9\u6CD5\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u8F7B\u677E\u4F20\u9012\u81EA\u5B9A\u4E49\u4E0A\u4E0B\u6587\u53D8\u91CF\uFF0C\u5B9E\u73B0\u66F4\u590D\u6742\u7684\u8BF7\u6C42\u63A7\u5236\u548C\u8DDF\u8E2A\u3002\u6587\u7AE0\u63D0\u4F9B\u4E86\u8BF7\u6C42\u8D85\u65F6\u63A7\u5236\u548C\u6A21\u578B\u4E0A\u4E0B\u6587\u64CD\u4F5C\u7684\u5177\u4F53\u793A\u4F8B\u548C\u5EFA\u8BAE\u3002"},"sidebar":"mainSidebar","previous":{"title":"ORM\u63A5\u53E3\u5F00\u53D1-\u9A71\u52A8\u5F00\u53D1","permalink":"/docs/core/gdb-interface-driver"},"next":{"title":"ORM\u6700\u4F73\u5B9E\u8DF5","permalink":"/docs/core/gdb-practice"}}'),r=t("785893"),d=t("250065");let o={slug:"/docs/core/gdb-context",title:"ORM\u4E0A\u4E0B\u6587\u53D8\u91CF",sidebar_position:9,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","ORM\u4E0A\u4E0B\u6587\u53D8\u91CF","\u5F02\u6B65IO\u63A7\u5236","\u94FE\u8DEF\u8DDF\u8E2A","\u4E0A\u4E0B\u6587\u53D8\u91CF","\u8BF7\u6C42\u8D85\u65F6","\u5D4C\u5957\u4E8B\u52A1","\u6A21\u578B\u4E0A\u4E0B\u6587\u64CD\u4F5C","ORM\u4E8B\u52A1\u5904\u7406"],description:"\u5728GoFrame\u6846\u67B6\u4E2D\u5982\u4F55\u901A\u8FC7ORM\u652F\u6301\u81EA\u5B9A\u4E49\u7684\u4E0A\u4E0B\u6587\u53D8\u91CF\uFF0C\u4EE5\u5B9E\u73B0\u5F02\u6B65IO\u63A7\u5236\u3001\u94FE\u8DEF\u8DDF\u8E2A\u3001\u5D4C\u5957\u4E8B\u52A1\u7B49\u529F\u80FD\u3002\u901A\u8FC7\u4F7F\u7528Ctx\u65B9\u6CD5\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u8F7B\u677E\u4F20\u9012\u81EA\u5B9A\u4E49\u4E0A\u4E0B\u6587\u53D8\u91CF\uFF0C\u5B9E\u73B0\u66F4\u590D\u6742\u7684\u8BF7\u6C42\u63A7\u5236\u548C\u8DDF\u8E2A\u3002\u6587\u7AE0\u63D0\u4F9B\u4E86\u8BF7\u6C42\u8D85\u65F6\u63A7\u5236\u548C\u6A21\u578B\u4E0A\u4E0B\u6587\u64CD\u4F5C\u7684\u5177\u4F53\u793A\u4F8B\u548C\u5EFA\u8BAE\u3002"},s=void 0,i={},l=[{value:"\u8BF7\u6C42\u8D85\u65F6\u63A7\u5236",id:"\u8BF7\u6C42\u8D85\u65F6\u63A7\u5236",level:2},{value:"\u94FE\u8DEF\u8DDF\u8E2A\u4FE1\u606F",id:"\u94FE\u8DEF\u8DDF\u8E2A\u4FE1\u606F",level:2},{value:"\u6A21\u578B\u4E0A\u4E0B\u6587\u64CD\u4F5C",id:"\u6A21\u578B\u4E0A\u4E0B\u6587\u64CD\u4F5C",level:2},{value:"\u5D4C\u5957\u4E8B\u52A1\u652F\u6301",id:"\u5D4C\u5957\u4E8B\u52A1\u652F\u6301",level:2}];function a(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ORM"})," \u652F\u6301\u4F20\u9012\u81EA\u5B9A\u4E49\u7684 ",(0,r.jsx)(n.code,{children:"context"})," \u4E0A\u4E0B\u6587\u53D8\u91CF\uFF0C\u7528\u4E8E\u5F02\u6B65 ",(0,r.jsx)(n.code,{children:"IO"})," \u63A7\u5236\u3001\u4E0A\u4E0B\u6587\u4FE1\u606F\u4F20\u9012\uFF08\u7279\u522B\u662F\u94FE\u8DEF\u8DDF\u8E2A\u4FE1\u606F\u7684\u4F20\u9012\uFF09\u3001\u4EE5\u53CA\u5D4C\u5957\u4E8B\u52A1\u652F\u6301\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"Ctx"})," \u65B9\u6CD5\u4F20\u9012\u81EA\u5B9A\u4E49\u7684\u4E0A\u4E0B\u6587\u53D8\u91CF\u7ED9 ",(0,r.jsx)(n.code,{children:"ORM"})," \u5BF9\u8C61\uFF0C ",(0,r.jsx)(n.code,{children:"Ctx"})," \u65B9\u6CD5\u5176\u5B9E\u662F\u4E00\u4E2A\u94FE\u5F0F\u64CD\u4F5C\u65B9\u6CD5\uFF0C\u8BE5\u4E0A\u4E0B\u6587\u4F20\u9012\u8FDB\u53BB\u540E\u4EC5\u5BF9\u5F53\u524D ",(0,r.jsx)(n.code,{children:"DB"})," \u63A5\u53E3\u5BF9\u8C61\u6709\u6548\uFF0C\u65B9\u6CD5\u5B9A\u4E49\u5982\u4E0B\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func Ctx(ctx context.Context) DB\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u8BF7\u6C42\u8D85\u65F6\u63A7\u5236",children:"\u8BF7\u6C42\u8D85\u65F6\u63A7\u5236"}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u4EEC\u6765\u770B\u4E00\u4E2A\u901A\u8FC7\u4E0A\u4E0B\u6587\u53D8\u91CF\u63A7\u5236\u8BF7\u6C42\u8D85\u65F6\u65F6\u95F4\u7684\u793A\u4F8B\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'ctx, cancel := context.WithTimeout(context.Background(), time.Second)\ndefer cancel()\n_, err := db.Ctx(ctx).Query("SELECT SLEEP(10)")\nfmt.Println(err)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u8BE5\u793A\u4F8B\u4E2D\u6267\u884C\u4F1A ",(0,r.jsx)(n.code,{children:"sleep 10"})," \u79D2\u4E2D\uFF0C\u56E0\u6B64\u5FC5\u5B9A\u4F1A\u5F15\u53D1\u8BF7\u6C42\u7684\u8D85\u65F6\u3002\u6267\u884C\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"context deadline exceeded, SELECT SLEEP(10)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u94FE\u8DEF\u8DDF\u8E2A\u4FE1\u606F",children:"\u94FE\u8DEF\u8DDF\u8E2A\u4FE1\u606F"}),"\n",(0,r.jsxs)(n.p,{children:["\u4E0A\u4E0B\u6587\u53D8\u91CF\u4E5F\u53EF\u4EE5\u4F20\u9012\u94FE\u8DEF\u8DDF\u8E2A\u4FE1\u606F\uFF0C\u5E76\u4E14\u53EF\u4EE5\u548C\u65E5\u5FD7\u7EC4\u4EF6\u7ED3\u5408\uFF0C\u5C06\u94FE\u8DEF\u4FE1\u606F\u6253\u5370\u5230\u65E5\u5FD7\u4E2D\uFF08\u4EC5\u5F53 ",(0,r.jsx)(n.code,{children:"ORM"})," \u65E5\u5FD7\u5F00\u542F\u65F6\uFF09\uFF0C\u5177\u4F53\u8BF7\u53C2\u8003\u94FE\u8DEF\u8DDF\u8E2A\u4E13\u9898\u4ECB\u7ECD\u7AE0\u8282\uFF1A ",(0,r.jsx)(n.a,{href:"/docs/obs/tracing",children:"\u670D\u52A1\u94FE\u8DEF\u8DDF\u8E2A"})]}),"\n",(0,r.jsx)(n.h2,{id:"\u6A21\u578B\u4E0A\u4E0B\u6587\u64CD\u4F5C",children:"\u6A21\u578B\u4E0A\u4E0B\u6587\u64CD\u4F5C"}),"\n",(0,r.jsxs)(n.p,{children:["\u6A21\u578B\u5BF9\u8C61\u4E5F\u652F\u6301\u4E0A\u4E0B\u6587\u53D8\u91CF\u7684\u4F20\u9012\uFF0C\u540C\u6837\u4E5F\u662F\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"Ctx"})," \u65B9\u6CD5\u3002\u6211\u4EEC\u6765\u770B\u4E00\u4E2A\u7B80\u5355\u7684\u793A\u4F8B\uFF0C\u6211\u4EEC\u5C06\u793A\u4F8B2\u7684\u4F8B\u5B50\u901A\u8FC7\u6A21\u578B\u64CD\u4F5C\u8C03\u6574\u4E00\u4E0B\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    _, err := g.DB().Model("user").Ctx(gctx.New()).All()\n    if err != nil {\n        panic(err)\n    }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884C\u540E\uFF0C\u7EC8\u7AEF\u8F93\u51FA\u4E3A\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"2020-12-28 23:46:56.349 [DEBU] {38d45cbf2743db16f1062074f7473e5c} [  5 ms] [default] [rows:0  ] SHOW FULL COLUMNS FROM `user`\n2020-12-28 23:46:56.354 [DEBU] {38d45cbf2743db16f1062074f7473e5c} [  5 ms] [default] [rows:100] SELECT * FROM `user`\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["\u5176\u4E2D ",(0,r.jsx)(n.code,{children:"SHOW FULL COLUMNS FROM `user` "})," \u4E3A ",(0,r.jsx)(n.code,{children:"ORM"})," \u7EC4\u4EF6\u7684\u6570\u636E\u8868\u5B57\u6BB5\u83B7\u53D6\u67E5\u8BE2\uFF0C\u6BCF\u4E2A\u8868\u5728\u6267\u884C\u64CD\u4F5C\u4E4B\u524D\u4EC5\u4F1A\u67E5\u8BE2\u4E00\u6B21\u5E76\u7F13\u5B58\u7ED3\u679C\u5230\u5185\u5B58\u4E2D\u3002"]})}),"\n",(0,r.jsx)(n.h2,{id:"\u5D4C\u5957\u4E8B\u52A1\u652F\u6301",children:"\u5D4C\u5957\u4E8B\u52A1\u652F\u6301"}),"\n",(0,r.jsxs)(n.p,{children:["\u5D4C\u5957\u4E8B\u52A1\u7684\u652F\u6301\u4F9D\u8D56 ",(0,r.jsx)(n.code,{children:"Context"})," \u4E0A\u4E0B\u6587\u53D8\u91CF\u7684\u5C42\u7EA7\u4F20\u9012\uFF0C\u5177\u4F53\u8BF7\u53C2\u8003\u7AE0\u8282\uFF1A ",(0,r.jsx)(n.a,{href:"/docs/core/gdb-transaction",children:"ORM\u4E8B\u52A1\u5904\u7406"})]})]})}function x(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return o}});var c=t(667294);let r={},d=c.createContext(r);function o(e){let n=c.useContext(d);return c.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),c.createElement(d.Provider,{value:n},e.children)}}}]);