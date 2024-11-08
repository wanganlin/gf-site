"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[67418],{642114:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>x,frontMatter:()=>o,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u4e0a\u4e0b\u6587\u53d8\u91cf","title":"ORM\u4e0a\u4e0b\u6587\u53d8\u91cf","description":"\u672c\u6587\u4ecb\u7ecd\u4e86\u5728GoFrame\u6846\u67b6\u4e2d\u5982\u4f55\u901a\u8fc7ORM\u652f\u6301\u81ea\u5b9a\u4e49\u7684\u4e0a\u4e0b\u6587\u53d8\u91cf\uff0c\u4ee5\u5b9e\u73b0\u5f02\u6b65IO\u63a7\u5236\u3001\u94fe\u8def\u8ddf\u8e2a\u3001\u5d4c\u5957\u4e8b\u52a1\u7b49\u529f\u80fd\u3002\u901a\u8fc7\u4f7f\u7528Ctx\u65b9\u6cd5\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u8f7b\u677e\u4f20\u9012\u81ea\u5b9a\u4e49\u4e0a\u4e0b\u6587\u53d8\u91cf\uff0c\u5b9e\u73b0\u66f4\u590d\u6742\u7684\u8bf7\u6c42\u63a7\u5236\u548c\u8ddf\u8e2a\u3002\u6587\u7ae0\u63d0\u4f9b\u4e86\u8bf7\u6c42\u8d85\u65f6\u63a7\u5236\u548c\u6a21\u578b\u4e0a\u4e0b\u6587\u64cd\u4f5c\u7684\u5177\u4f53\u793a\u4f8b\u548c\u5efa\u8bae\u3002","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u4e0a\u4e0b\u6587\u53d8\u91cf.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM","slug":"/docs/core/gdb-context","permalink":"/en/docs/core/gdb-context","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u4e0a\u4e0b\u6587\u53d8\u91cf.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731055597000,"sidebarPosition":9,"frontMatter":{"slug":"/docs/core/gdb-context","title":"ORM\u4e0a\u4e0b\u6587\u53d8\u91cf","sidebar_position":9,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","ORM\u4e0a\u4e0b\u6587\u53d8\u91cf","\u5f02\u6b65IO\u63a7\u5236","\u94fe\u8def\u8ddf\u8e2a","\u4e0a\u4e0b\u6587\u53d8\u91cf","\u8bf7\u6c42\u8d85\u65f6","\u5d4c\u5957\u4e8b\u52a1","\u6a21\u578b\u4e0a\u4e0b\u6587\u64cd\u4f5c","ORM\u4e8b\u52a1\u5904\u7406"],"description":"\u672c\u6587\u4ecb\u7ecd\u4e86\u5728GoFrame\u6846\u67b6\u4e2d\u5982\u4f55\u901a\u8fc7ORM\u652f\u6301\u81ea\u5b9a\u4e49\u7684\u4e0a\u4e0b\u6587\u53d8\u91cf\uff0c\u4ee5\u5b9e\u73b0\u5f02\u6b65IO\u63a7\u5236\u3001\u94fe\u8def\u8ddf\u8e2a\u3001\u5d4c\u5957\u4e8b\u52a1\u7b49\u529f\u80fd\u3002\u901a\u8fc7\u4f7f\u7528Ctx\u65b9\u6cd5\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u8f7b\u677e\u4f20\u9012\u81ea\u5b9a\u4e49\u4e0a\u4e0b\u6587\u53d8\u91cf\uff0c\u5b9e\u73b0\u66f4\u590d\u6742\u7684\u8bf7\u6c42\u63a7\u5236\u548c\u8ddf\u8e2a\u3002\u6587\u7ae0\u63d0\u4f9b\u4e86\u8bf7\u6c42\u8d85\u65f6\u63a7\u5236\u548c\u6a21\u578b\u4e0a\u4e0b\u6587\u64cd\u4f5c\u7684\u5177\u4f53\u793a\u4f8b\u548c\u5efa\u8bae\u3002"},"sidebar":"mainSidebar","previous":{"title":"ORM\u63a5\u53e3\u5f00\u53d1-\u9a71\u52a8\u5f00\u53d1","permalink":"/en/docs/core/gdb-interface-driver"},"next":{"title":"ORM\u6700\u4f73\u5b9e\u8df5","permalink":"/en/docs/core/gdb-practice"}}');var r=c(474848),d=c(28453);const o={slug:"/docs/core/gdb-context",title:"ORM\u4e0a\u4e0b\u6587\u53d8\u91cf",sidebar_position:9,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","ORM\u4e0a\u4e0b\u6587\u53d8\u91cf","\u5f02\u6b65IO\u63a7\u5236","\u94fe\u8def\u8ddf\u8e2a","\u4e0a\u4e0b\u6587\u53d8\u91cf","\u8bf7\u6c42\u8d85\u65f6","\u5d4c\u5957\u4e8b\u52a1","\u6a21\u578b\u4e0a\u4e0b\u6587\u64cd\u4f5c","ORM\u4e8b\u52a1\u5904\u7406"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5728GoFrame\u6846\u67b6\u4e2d\u5982\u4f55\u901a\u8fc7ORM\u652f\u6301\u81ea\u5b9a\u4e49\u7684\u4e0a\u4e0b\u6587\u53d8\u91cf\uff0c\u4ee5\u5b9e\u73b0\u5f02\u6b65IO\u63a7\u5236\u3001\u94fe\u8def\u8ddf\u8e2a\u3001\u5d4c\u5957\u4e8b\u52a1\u7b49\u529f\u80fd\u3002\u901a\u8fc7\u4f7f\u7528Ctx\u65b9\u6cd5\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u8f7b\u677e\u4f20\u9012\u81ea\u5b9a\u4e49\u4e0a\u4e0b\u6587\u53d8\u91cf\uff0c\u5b9e\u73b0\u66f4\u590d\u6742\u7684\u8bf7\u6c42\u63a7\u5236\u548c\u8ddf\u8e2a\u3002\u6587\u7ae0\u63d0\u4f9b\u4e86\u8bf7\u6c42\u8d85\u65f6\u63a7\u5236\u548c\u6a21\u578b\u4e0a\u4e0b\u6587\u64cd\u4f5c\u7684\u5177\u4f53\u793a\u4f8b\u548c\u5efa\u8bae\u3002"},s=void 0,i={},l=[{value:"\u8bf7\u6c42\u8d85\u65f6\u63a7\u5236",id:"\u8bf7\u6c42\u8d85\u65f6\u63a7\u5236",level:2},{value:"\u94fe\u8def\u8ddf\u8e2a\u4fe1\u606f",id:"\u94fe\u8def\u8ddf\u8e2a\u4fe1\u606f",level:2},{value:"\u6a21\u578b\u4e0a\u4e0b\u6587\u64cd\u4f5c",id:"\u6a21\u578b\u4e0a\u4e0b\u6587\u64cd\u4f5c",level:2},{value:"\u5d4c\u5957\u4e8b\u52a1\u652f\u6301",id:"\u5d4c\u5957\u4e8b\u52a1\u652f\u6301",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ORM"})," \u652f\u6301\u4f20\u9012\u81ea\u5b9a\u4e49\u7684 ",(0,r.jsx)(n.code,{children:"context"})," \u4e0a\u4e0b\u6587\u53d8\u91cf\uff0c\u7528\u4e8e\u5f02\u6b65 ",(0,r.jsx)(n.code,{children:"IO"})," \u63a7\u5236\u3001\u4e0a\u4e0b\u6587\u4fe1\u606f\u4f20\u9012\uff08\u7279\u522b\u662f\u94fe\u8def\u8ddf\u8e2a\u4fe1\u606f\u7684\u4f20\u9012\uff09\u3001\u4ee5\u53ca\u5d4c\u5957\u4e8b\u52a1\u652f\u6301\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"Ctx"})," \u65b9\u6cd5\u4f20\u9012\u81ea\u5b9a\u4e49\u7684\u4e0a\u4e0b\u6587\u53d8\u91cf\u7ed9 ",(0,r.jsx)(n.code,{children:"ORM"})," \u5bf9\u8c61\uff0c ",(0,r.jsx)(n.code,{children:"Ctx"})," \u65b9\u6cd5\u5176\u5b9e\u662f\u4e00\u4e2a\u94fe\u5f0f\u64cd\u4f5c\u65b9\u6cd5\uff0c\u8be5\u4e0a\u4e0b\u6587\u4f20\u9012\u8fdb\u53bb\u540e\u4ec5\u5bf9\u5f53\u524d ",(0,r.jsx)(n.code,{children:"DB"})," \u63a5\u53e3\u5bf9\u8c61\u6709\u6548\uff0c\u65b9\u6cd5\u5b9a\u4e49\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func Ctx(ctx context.Context) DB\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u8bf7\u6c42\u8d85\u65f6\u63a7\u5236",children:"\u8bf7\u6c42\u8d85\u65f6\u63a7\u5236"}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u901a\u8fc7\u4e0a\u4e0b\u6587\u53d8\u91cf\u63a7\u5236\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4\u7684\u793a\u4f8b\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'ctx, cancel := context.WithTimeout(context.Background(), time.Second)\ndefer cancel()\n_, err := db.Ctx(ctx).Query("SELECT SLEEP(10)")\nfmt.Println(err)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u8be5\u793a\u4f8b\u4e2d\u6267\u884c\u4f1a ",(0,r.jsx)(n.code,{children:"sleep 10"})," \u79d2\u4e2d\uff0c\u56e0\u6b64\u5fc5\u5b9a\u4f1a\u5f15\u53d1\u8bf7\u6c42\u7684\u8d85\u65f6\u3002\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"context deadline exceeded, SELECT SLEEP(10)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u94fe\u8def\u8ddf\u8e2a\u4fe1\u606f",children:"\u94fe\u8def\u8ddf\u8e2a\u4fe1\u606f"}),"\n",(0,r.jsxs)(n.p,{children:["\u4e0a\u4e0b\u6587\u53d8\u91cf\u4e5f\u53ef\u4ee5\u4f20\u9012\u94fe\u8def\u8ddf\u8e2a\u4fe1\u606f\uff0c\u5e76\u4e14\u53ef\u4ee5\u548c\u65e5\u5fd7\u7ec4\u4ef6\u7ed3\u5408\uff0c\u5c06\u94fe\u8def\u4fe1\u606f\u6253\u5370\u5230\u65e5\u5fd7\u4e2d\uff08\u4ec5\u5f53 ",(0,r.jsx)(n.code,{children:"ORM"})," \u65e5\u5fd7\u5f00\u542f\u65f6\uff09\uff0c\u5177\u4f53\u8bf7\u53c2\u8003\u94fe\u8def\u8ddf\u8e2a\u4e13\u9898\u4ecb\u7ecd\u7ae0\u8282\uff1a ",(0,r.jsx)(n.a,{href:"/en/docs/obs/tracing",children:"\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a"})]}),"\n",(0,r.jsx)(n.h2,{id:"\u6a21\u578b\u4e0a\u4e0b\u6587\u64cd\u4f5c",children:"\u6a21\u578b\u4e0a\u4e0b\u6587\u64cd\u4f5c"}),"\n",(0,r.jsxs)(n.p,{children:["\u6a21\u578b\u5bf9\u8c61\u4e5f\u652f\u6301\u4e0a\u4e0b\u6587\u53d8\u91cf\u7684\u4f20\u9012\uff0c\u540c\u6837\u4e5f\u662f\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"Ctx"})," \u65b9\u6cd5\u3002\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\uff0c\u6211\u4eec\u5c06\u793a\u4f8b2\u7684\u4f8b\u5b50\u901a\u8fc7\u6a21\u578b\u64cd\u4f5c\u8c03\u6574\u4e00\u4e0b\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    _, err := g.DB().Model("user").Ctx(gctx.New()).All()\n    if err != nil {\n        panic(err)\n    }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\u4e3a\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"2020-12-28 23:46:56.349 [DEBU] {38d45cbf2743db16f1062074f7473e5c} [  5 ms] [default] [rows:0  ] SHOW FULL COLUMNS FROM `user`\n2020-12-28 23:46:56.354 [DEBU] {38d45cbf2743db16f1062074f7473e5c} [  5 ms] [default] [rows:100] SELECT * FROM `user`\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["\u5176\u4e2d ",(0,r.jsx)(n.code,{children:"SHOW FULL COLUMNS FROM `user` "})," \u4e3a ",(0,r.jsx)(n.code,{children:"ORM"})," \u7ec4\u4ef6\u7684\u6570\u636e\u8868\u5b57\u6bb5\u83b7\u53d6\u67e5\u8be2\uff0c\u6bcf\u4e2a\u8868\u5728\u6267\u884c\u64cd\u4f5c\u4e4b\u524d\u4ec5\u4f1a\u67e5\u8be2\u4e00\u6b21\u5e76\u7f13\u5b58\u7ed3\u679c\u5230\u5185\u5b58\u4e2d\u3002"]})}),"\n",(0,r.jsx)(n.h2,{id:"\u5d4c\u5957\u4e8b\u52a1\u652f\u6301",children:"\u5d4c\u5957\u4e8b\u52a1\u652f\u6301"}),"\n",(0,r.jsxs)(n.p,{children:["\u5d4c\u5957\u4e8b\u52a1\u7684\u652f\u6301\u4f9d\u8d56 ",(0,r.jsx)(n.code,{children:"Context"})," \u4e0a\u4e0b\u6587\u53d8\u91cf\u7684\u5c42\u7ea7\u4f20\u9012\uff0c\u5177\u4f53\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,r.jsx)(n.a,{href:"/en/docs/core/gdb-transaction",children:"ORM\u4e8b\u52a1\u5904\u7406"})]})]})}function x(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,c)=>{c.d(n,{R:()=>o,x:()=>s});var t=c(296540);const r={},d=t.createContext(r);function o(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);