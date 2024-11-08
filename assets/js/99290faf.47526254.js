"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[16941],{483013:(r,e,o)=>{o.r(e),o.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u6700\u4f73\u5b9e\u8df5/\u67e5\u8be2\u65f6\u907f\u514d\u8fd4\u56de\u5bf9\u8c61\u521d\u59cb\u5316\u53casql.ErrNoRows\u5224\u65ad","title":"\u67e5\u8be2\u65f6\u907f\u514d\u8fd4\u56de\u5bf9\u8c61\u521d\u59cb\u5316\u53casql.ErrNoRows\u5224\u65ad","description":"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u5728\u4f7f\u7528GoFrame\u6846\u67b6\u8fdb\u884cSQL\u67e5\u8be2\u65f6\uff0c\u907f\u514d\u5bf9\u8c61\u521d\u59cb\u5316\u4ee5\u53casql.ErrNoRows\u9519\u8bef\u5224\u65ad\u95ee\u9898\u3002\u901a\u8fc7\u4e0d\u521d\u59cb\u5316\u67e5\u8be2\u7ed3\u679c\u5bf9\u8c61\uff0c\u4f7f\u7528\u6307\u9488\u4e3anil\u5224\u65ad\u7684\u65b9\u6cd5\uff0c\u7edf\u4e00\u9879\u76ee\u4e2d\u5bf9\u7a7a\u67e5\u8be2\u7ed3\u679c\u7684\u5904\u7406\u903b\u8f91\uff0c\u4ece\u800c\u964d\u4f4e\u4ee3\u7801\u5bf9\u9519\u8bef\u5904\u7406\u7684\u590d\u6742\u5ea6\u3002","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u6700\u4f73\u5b9e\u8df5/\u67e5\u8be2\u65f6\u907f\u514d\u8fd4\u56de\u5bf9\u8c61\u521d\u59cb\u5316\u53casql.ErrNoRows\u5224\u65ad.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u6700\u4f73\u5b9e\u8df5","slug":"/docs/core/gdb-practice-avoid-object-initialization-and-sql-errnorows-error","permalink":"/docs/core/gdb-practice-avoid-object-initialization-and-sql-errnorows-error","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u6700\u4f73\u5b9e\u8df5/\u67e5\u8be2\u65f6\u907f\u514d\u8fd4\u56de\u5bf9\u8c61\u521d\u59cb\u5316\u53casql.ErrNoRows\u5224\u65ad.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731055597000,"sidebarPosition":2,"frontMatter":{"slug":"/docs/core/gdb-practice-avoid-object-initialization-and-sql-errnorows-error","title":"\u67e5\u8be2\u65f6\u907f\u514d\u8fd4\u56de\u5bf9\u8c61\u521d\u59cb\u5316\u53casql.ErrNoRows\u5224\u65ad","sidebar_position":2,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","SQL\u67e5\u8be2","\u5bf9\u8c61\u521d\u59cb\u5316","sql.ErrNoRows","\u9519\u8bef\u5904\u7406","\u6307\u9488\u5224\u65ad","ORM\u7ed3\u679c\u5904\u7406","\u5bf9\u8c61\u5185\u5b58","\u4ee3\u7801\u590d\u6742\u5ea6"],"description":"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u5728\u4f7f\u7528GoFrame\u6846\u67b6\u8fdb\u884cSQL\u67e5\u8be2\u65f6\uff0c\u907f\u514d\u5bf9\u8c61\u521d\u59cb\u5316\u4ee5\u53casql.ErrNoRows\u9519\u8bef\u5224\u65ad\u95ee\u9898\u3002\u901a\u8fc7\u4e0d\u521d\u59cb\u5316\u67e5\u8be2\u7ed3\u679c\u5bf9\u8c61\uff0c\u4f7f\u7528\u6307\u9488\u4e3anil\u5224\u65ad\u7684\u65b9\u6cd5\uff0c\u7edf\u4e00\u9879\u76ee\u4e2d\u5bf9\u7a7a\u67e5\u8be2\u7ed3\u679c\u7684\u5904\u7406\u903b\u8f91\uff0c\u4ece\u800c\u964d\u4f4e\u4ee3\u7801\u5bf9\u9519\u8bef\u5904\u7406\u7684\u590d\u6742\u5ea6\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u590d\u6742\u7c7b\u578b\u5c3d\u91cf\u4f7f\u7528json\u5b58\u50a8\uff0c\u4fbf\u4e8eScan\u5230\u5bf9\u8c61\u65f6\u81ea\u52a8\u5316\u8f6c\u6362\uff0c\u907f\u514d\u81ea\u5b9a\u4e49\u89e3\u6790","permalink":"/docs/core/gdb-practice-using-json-for-complicated-field"},"next":{"title":"ORM\u5e38\u89c1\u95ee\u9898","permalink":"/docs/core/gdb-faq"}}');var s=o(474848),t=o(28453);const i={slug:"/docs/core/gdb-practice-avoid-object-initialization-and-sql-errnorows-error",title:"\u67e5\u8be2\u65f6\u907f\u514d\u8fd4\u56de\u5bf9\u8c61\u521d\u59cb\u5316\u53casql.ErrNoRows\u5224\u65ad",sidebar_position:2,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","SQL\u67e5\u8be2","\u5bf9\u8c61\u521d\u59cb\u5316","sql.ErrNoRows","\u9519\u8bef\u5904\u7406","\u6307\u9488\u5224\u65ad","ORM\u7ed3\u679c\u5904\u7406","\u5bf9\u8c61\u5185\u5b58","\u4ee3\u7801\u590d\u6742\u5ea6"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u5728\u4f7f\u7528GoFrame\u6846\u67b6\u8fdb\u884cSQL\u67e5\u8be2\u65f6\uff0c\u907f\u514d\u5bf9\u8c61\u521d\u59cb\u5316\u4ee5\u53casql.ErrNoRows\u9519\u8bef\u5224\u65ad\u95ee\u9898\u3002\u901a\u8fc7\u4e0d\u521d\u59cb\u5316\u67e5\u8be2\u7ed3\u679c\u5bf9\u8c61\uff0c\u4f7f\u7528\u6307\u9488\u4e3anil\u5224\u65ad\u7684\u65b9\u6cd5\uff0c\u7edf\u4e00\u9879\u76ee\u4e2d\u5bf9\u7a7a\u67e5\u8be2\u7ed3\u679c\u7684\u5904\u7406\u903b\u8f91\uff0c\u4ece\u800c\u964d\u4f4e\u4ee3\u7801\u5bf9\u9519\u8bef\u5904\u7406\u7684\u590d\u6742\u5ea6\u3002"},c=void 0,d={},a=[{value:"\u67e5\u8be2\u65f6\u907f\u514d\u8fd4\u56de\u5bf9\u8c61\u521d\u59cb\u5316\u53ca <code>sql.ErrNoRows</code> \u5224\u65ad",id:"\u67e5\u8be2\u65f6\u907f\u514d\u8fd4\u56de\u5bf9\u8c61\u521d\u59cb\u5316\u53ca-sqlerrnorows-\u5224\u65ad",level:2}];function l(r){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...r.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.h2,{id:"\u67e5\u8be2\u65f6\u907f\u514d\u8fd4\u56de\u5bf9\u8c61\u521d\u59cb\u5316\u53ca-sqlerrnorows-\u5224\u65ad",children:["\u67e5\u8be2\u65f6\u907f\u514d\u8fd4\u56de\u5bf9\u8c61\u521d\u59cb\u5316\u53ca ",(0,s.jsx)(e.code,{children:"sql.ErrNoRows"})," \u5224\u65ad"]}),"\n",(0,s.jsxs)(e.p,{children:["\u6267\u884cSQL\u67e5\u8be2\u65f6\uff0c\u8bf7\u907f\u514d\u63d0\u524d\u5c06\u67e5\u8be2\u7ed3\u679c\u521d\u59cb\u5316\uff0c\u4ee5\u907f\u514d\u7ed3\u6784\u5bf9\u8c61\u9ed8\u8ba4\u503c\u7684\u5f71\u54cd\uff0c\u907f\u514d\u521b\u5efa\u4e0d\u5fc5\u8981\u7684\u5bf9\u8c61\u5185\u5b58\u3002\u901a\u8fc7\u8fd4\u56de\u5bf9\u8c61\u6307\u9488 ",(0,s.jsx)(e.code,{children:"nil"})," \u5224\u65ad\u907f\u514d ",(0,s.jsx)(e.code,{children:"sql.ErrNoRows"})," \u4f7f\u7528\uff0c\u964d\u4f4e\u4ee3\u7801\u5bf9 ",(0,s.jsx)(e.code,{children:"error"})," \u5904\u7406\u7684\u590d\u6742\u5ea6\u3001\u7edf\u4e00\u9879\u76ee\u4e2d\u5bf9\u7a7a\u67e5\u8be2\u7ed3\u679c\u5904\u7406\u903b\u8f91\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u4e00\u4e2a\u53cd\u9762\u4f8b\u5b50\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'func (s *sTask) GetOne(ctx context.Context, id uint64) (out *entity.ResourceTask, err error) {\n    out = new(model.TaskDetail)\n    err = dao.ResourceTask.Ctx(ctx).WherePri(id).Scan(out)\n    if err != nil {\n        if err == sql.ErrNoRows {\n            err = gerror.Newf(`record not found for "%d"`, id)\n        }\n        return\n    }\n    return\n}\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u5728\u8be5\u4f8b\u5b50\u4e2d\uff0c\u5b9e\u9645\u8fd4\u56de\u7684 ",(0,s.jsx)(e.code,{children:"out"})," \u5bf9\u8c61\u7531\u4e8e\u5bf9\u8c61\u521d\u59cb\u5316\u7684\u7f18\u6545\u6709\u4e86\u9ed8\u8ba4\u503c\uff08\u65e0\u8bbaSQL\u662f\u5426\u67e5\u8be2\u5230\u6570\u636e\uff09\uff0c\u5e76\u4e14 ",(0,s.jsx)(e.code,{children:"sql.ErrNoRows"})," \u7684\u5224\u65ad\u589e\u52a0\u4e86\u4ee3\u7801\u903b\u8f91\u4e2d\u5bf9 ",(0,s.jsx)(e.code,{children:"error"})," \u5904\u7406\u7684\u590d\u6742\u5ea6\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u5efa\u8bae\u6539\u8fdb\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'func (s *sTask) GetOne(ctx context.Context, id uint64) (out *entity.ResourceTask, err error) {\n    err = dao.ResourceTask.Ctx(ctx).WherePri(id).Scan(&out)\n    if err != nil {\n        return\n    }\n    if out == nil {\n        err = gerror.Newf(`record not found for "%d"`, id)\n    }\n    return\n}\n'})}),"\n",(0,s.jsx)(e.admonition,{type:"warning",children:(0,s.jsxs)(e.p,{children:["\u6ce8\u610f\u4ee3\u7801\u4e2d ",(0,s.jsx)(e.code,{children:"&out"})," \u7684\u4f7f\u7528\u3002"]})}),"\n",(0,s.jsxs)(e.p,{children:["\u66f4\u591a\u7684\u4ecb\u7ecd\u8bf7\u53c2\u8003\uff1a ",(0,s.jsx)(e.a,{href:"/docs/core/gdb-result-empty-check",children:"ORM\u7ed3\u679c\u5904\u7406-\u4e3a\u7a7a\u5224\u65ad"})]})]})}function u(r={}){const{wrapper:e}={...(0,t.R)(),...r.components};return e?(0,s.jsx)(e,{...r,children:(0,s.jsx)(l,{...r})}):l(r)}},28453:(r,e,o)=>{o.d(e,{R:()=>i,x:()=>c});var n=o(296540);const s={},t=n.createContext(s);function i(r){const e=n.useContext(t);return n.useMemo((function(){return"function"==typeof r?r(e):{...e,...r}}),[e,r])}function c(r){let e;return e=r.disableParentContext?"function"==typeof r.components?r.components(s):r.components||s:i(r.components),n.createElement(t.Provider,{value:e},r.children)}}}]);