"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[11943],{7745:(o,e,n)=>{n.r(e),n.d(e,{assets:()=>t,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>r});const c=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u5bf9\u8c61\u590d\u7528-gpool/\u5bf9\u8c61\u590d\u7528-gpool","title":"\u5bf9\u8c61\u590d\u7528-gpool","description":"\u57fa\u672c\u4ecb\u7ecd","source":"@site/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u5bf9\u8c61\u590d\u7528-gpool/\u5bf9\u8c61\u590d\u7528-gpool.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u5bf9\u8c61\u590d\u7528-gpool","slug":"/docs/components/container/gpool","permalink":"/en/docs/components/container/gpool","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u5bf9\u8c61\u590d\u7528-gpool/\u5bf9\u8c61\u590d\u7528-gpool.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730724532000,"sidebarPosition":8,"frontMatter":{"slug":"/docs/components/container/gpool","title":"\u5bf9\u8c61\u590d\u7528-gpool","sidebar_position":8,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"\u6811\u5f62\u7c7b\u578b-\u65b9\u6cd5\u4ecb\u7ecd","permalink":"/en/docs/components/container/gtree-funcs"},"next":{"title":"\u5bf9\u8c61\u590d\u7528-\u57fa\u672c\u4f7f\u7528","permalink":"/en/docs/components/container/gpool-example"}}');var s=n(74848),l=n(28453);const d={slug:"/docs/components/container/gpool",title:"\u5bf9\u8c61\u590d\u7528-gpool",sidebar_position:8,hide_title:!0},i=void 0,t={},r=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"<code>gpool</code> \u4e0e <code>sync.Pool</code>",id:"gpool-\u4e0e-syncpool",level:2}];function p(o){const e={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...o.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,s.jsxs)(e.p,{children:["\u5bf9\u8c61\u590d\u7528\u6c60\uff08\u5e76\u53d1\u5b89\u5168\uff09\u3002\u5c06\u5bf9\u8c61\u8fdb\u884c\u7f13\u5b58\u590d\u7528\uff0c\u652f\u6301 ",(0,s.jsx)(e.code,{children:"\u8fc7\u671f\u65f6\u95f4"}),"\u3001 ",(0,s.jsx)(e.code,{children:"\u521b\u5efa\u65b9\u6cd5"})," \u53ca ",(0,s.jsx)(e.code,{children:"\u9500\u6bc1\u65b9\u6cd5"})," \u5b9a\u4e49\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u4f7f\u7528\u573a\u666f"}),"\uff1a"]}),"\n",(0,s.jsx)(e.p,{children:"\u4efb\u4f55\u9700\u8981\u652f\u6301\u5b9a\u65f6\u8fc7\u671f\u7684\u5bf9\u8c61\u590d\u7528\u573a\u666f\u3002"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/container/gpool"\n'})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/container/gpool",children:"https://pkg.go.dev/github.com/gogf/gf/v2/container/gpool"})}),"\n",(0,s.jsx)(e.p,{children:"\u9700\u8981\u6ce8\u610f\u4e24\u70b9\uff1a"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"New"})," \u65b9\u6cd5\u7684\u8fc7\u671f\u65f6\u95f4\u7c7b\u578b\u4e3a ",(0,s.jsx)(e.code,{children:"time.Duration"}),"\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:["\u5bf9\u8c61 ",(0,s.jsx)(e.code,{children:"\u521b\u5efa\u65b9\u6cd5"}),"( ",(0,s.jsx)(e.code,{children:"newFunc NewFunc"}),")\u8fd4\u56de\u503c\u5305\u542b\u4e00\u4e2a ",(0,s.jsx)(e.code,{children:"error"})," \u8fd4\u56de\uff0c\u5f53\u5bf9\u8c61\u521b\u5efa\u5931\u8d25\u65f6\u53ef\u7531\u8be5\u8fd4\u56de\u503c\u53cd\u9988\u539f\u56e0\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:["\u5bf9\u8c61 ",(0,s.jsx)(e.code,{children:"\u9500\u6bc1\u65b9\u6cd5"}),"( ",(0,s.jsx)(e.code,{children:"expireFunc...ExpireFunc"}),")\u4e3a\u53ef\u9009\u53c2\u6570\uff0c\u7528\u4ee5\u5f53\u5bf9\u8c61\u8d85\u65f6/\u6c60\u5173\u95ed\u65f6\uff0c\u81ea\u52a8\u8c03\u7528\u81ea\u5b9a\u4e49\u7684\u65b9\u6cd5\u9500\u6bc1\u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.h2,{id:"gpool-\u4e0e-syncpool",children:[(0,s.jsx)(e.code,{children:"gpool"})," \u4e0e ",(0,s.jsx)(e.code,{children:"sync.Pool"})]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"gpool"})," \u4e0e ",(0,s.jsx)(e.code,{children:"sync.Pool"})," \u90fd\u53ef\u4ee5\u8fbe\u5230\u5bf9\u8c61\u590d\u7528\u7684\u4f5c\u7528\uff0c\u4f46\u662f\u4e24\u8005\u7684\u8bbe\u8ba1\u521d\u8877\u548c\u4f7f\u7528\u573a\u666f\u4e0d\u592a\u4e00\u6837\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"sync.Pool"})," \u7684\u5bf9\u8c61\u751f\u547d\u5468\u671f\u4e0d\u652f\u6301\u81ea\u5b9a\u4e49\u8fc7\u671f\u65f6\u95f4\uff0c\u7a76\u5176\u539f\u56e0\uff0c ",(0,s.jsx)(e.code,{children:"sync.Pool"})," \u5e76\u4e0d\u662f\u4e00\u4e2a ",(0,s.jsx)(e.code,{children:"Cache"}),"\uff1b ",(0,s.jsx)(e.code,{children:"sync.Pool"})," \u8bbe\u8ba1\u521d\u8877\u662f\u4e3a\u4e86\u7f13\u89e3GC ",(0,s.jsx)(e.code,{children:"\u538b\u529b"}),"\uff0c ",(0,s.jsx)(e.code,{children:"sync.Pool"})," \u4e2d\u7684\u5bf9\u8c61\u4f1a\u5728 ",(0,s.jsx)(e.code,{children:"GC"})," \u5f00\u59cb\u524d\u5168\u90e8\u6e05\u9664\uff1b\u5e76\u4e14 ",(0,s.jsx)(e.code,{children:"sync.Pool"})," \u4e0d\u652f\u6301\u5bf9\u8c61\u521b\u5efa\u65b9\u6cd5\u53ca\u9500\u6bc1\u65b9\u6cd5\u3002"]})]})}function h(o={}){const{wrapper:e}={...(0,l.R)(),...o.components};return e?(0,s.jsx)(e,{...o,children:(0,s.jsx)(p,{...o})}):p(o)}},28453:(o,e,n)=>{n.d(e,{R:()=>d,x:()=>i});var c=n(96540);const s={},l=c.createContext(s);function d(o){const e=c.useContext(l);return c.useMemo((function(){return"function"==typeof o?o(e):{...e,...o}}),[e,o])}function i(o){let e;return e=o.disableParentContext?"function"==typeof o.components?o.components(s):o.components||s:d(o.components),c.createElement(l.Provider,{value:e},o.children)}}}]);