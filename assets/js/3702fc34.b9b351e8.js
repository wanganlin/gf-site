"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[89459],{147027:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u6821\u9a8c/\u6570\u636e\u6821\u9a8c-\u81ea\u5b9a\u4e49\u89c4\u5219/\u81ea\u5b9a\u4e49\u89c4\u5219-\u5b8c\u6574\u6570\u636e\u6821\u9a8c","title":"\u81ea\u5b9a\u4e49\u89c4\u5219-\u5b8c\u6574\u6570\u636e\u6821\u9a8c","description":"\u672c\u6587\u6863\u4ecb\u7ecd\u4e86\u5982\u4f55\u5728GoFrame\u6846\u67b6\u4e2d\u4f7f\u7528\u81ea\u5b9a\u4e49\u89c4\u5219\u5bf9\u7ed3\u6784\u4f53\u8fdb\u884c\u5b8c\u6574\u6570\u636e\u6821\u9a8c\u3002\u901a\u8fc7\u7ed9\u7ed3\u6784\u4f53\u6dfb\u52a0\u5143\u6570\u636eg.Meta\uff0c\u80fd\u591f\u6ce8\u518c\u548c\u4f7f\u7528\u81ea\u5b9a\u4e49\u6821\u9a8c\u89c4\u5219\uff0c\u4f8b\u5982UserCreateReq\uff0c\u5b9e\u73b0\u5bf9\u521b\u5efa\u7528\u6237\u8bf7\u6c42\u7684\u6821\u9a8c\u3002\u793a\u4f8b\u4ee3\u7801\u6f14\u793a\u4e86\u5982\u4f55\u5b9e\u73b0\u548c\u5e94\u7528\u81ea\u5b9a\u4e49\u6821\u9a8c\u65b9\u6cd5\uff0c\u4ee5\u786e\u4fdd\u6570\u636e\u7684\u552f\u4e00\u6027\u548c\u6709\u6548\u6027\u3002","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u6821\u9a8c/\u6570\u636e\u6821\u9a8c-\u81ea\u5b9a\u4e49\u89c4\u5219/\u81ea\u5b9a\u4e49\u89c4\u5219-\u5b8c\u6574\u6570\u636e\u6821\u9a8c.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u6821\u9a8c/\u6570\u636e\u6821\u9a8c-\u81ea\u5b9a\u4e49\u89c4\u5219","slug":"/docs/core/gvalid-custom-rules-handle-input-parameters","permalink":"/docs/core/gvalid-custom-rules-handle-input-parameters","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u6821\u9a8c/\u6570\u636e\u6821\u9a8c-\u81ea\u5b9a\u4e49\u89c4\u5219/\u81ea\u5b9a\u4e49\u89c4\u5219-\u5b8c\u6574\u6570\u636e\u6821\u9a8c.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731055597000,"sidebarPosition":1,"frontMatter":{"slug":"/docs/core/gvalid-custom-rules-handle-input-parameters","title":"\u81ea\u5b9a\u4e49\u89c4\u5219-\u5b8c\u6574\u6570\u636e\u6821\u9a8c","sidebar_position":1,"hide_title":true,"keywords":["GoFrame","\u81ea\u5b9a\u4e49\u89c4\u5219","\u5b8c\u6574\u6570\u636e\u6821\u9a8c","UserCreateReq","\u6821\u9a8c\u7ec4\u4ef6","\u7ed3\u6784\u4f53\u6821\u9a8c","GoFrame\u6846\u67b6","gvalid","\u6570\u636e\u6821\u9a8c","\u6821\u9a8c\u89c4\u5219"],"description":"\u672c\u6587\u6863\u4ecb\u7ecd\u4e86\u5982\u4f55\u5728GoFrame\u6846\u67b6\u4e2d\u4f7f\u7528\u81ea\u5b9a\u4e49\u89c4\u5219\u5bf9\u7ed3\u6784\u4f53\u8fdb\u884c\u5b8c\u6574\u6570\u636e\u6821\u9a8c\u3002\u901a\u8fc7\u7ed9\u7ed3\u6784\u4f53\u6dfb\u52a0\u5143\u6570\u636eg.Meta\uff0c\u80fd\u591f\u6ce8\u518c\u548c\u4f7f\u7528\u81ea\u5b9a\u4e49\u6821\u9a8c\u89c4\u5219\uff0c\u4f8b\u5982UserCreateReq\uff0c\u5b9e\u73b0\u5bf9\u521b\u5efa\u7528\u6237\u8bf7\u6c42\u7684\u6821\u9a8c\u3002\u793a\u4f8b\u4ee3\u7801\u6f14\u793a\u4e86\u5982\u4f55\u5b9e\u73b0\u548c\u5e94\u7528\u81ea\u5b9a\u4e49\u6821\u9a8c\u65b9\u6cd5\uff0c\u4ee5\u786e\u4fdd\u6570\u636e\u7684\u552f\u4e00\u6027\u548c\u6709\u6548\u6027\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u81ea\u5b9a\u4e49\u89c4\u5219-\u89c4\u5219\u6ce8\u518c","permalink":"/docs/core/gvalid-custom-rules-register"},"next":{"title":"\u6570\u636e\u6821\u9a8c-\u81ea\u5b9a\u4e49\u9519\u8bef","permalink":"/docs/core/gvalid-custom-validating-message"}}');var s=n(474848),a=n(28453);const o={slug:"/docs/core/gvalid-custom-rules-handle-input-parameters",title:"\u81ea\u5b9a\u4e49\u89c4\u5219-\u5b8c\u6574\u6570\u636e\u6821\u9a8c",sidebar_position:1,hide_title:!0,keywords:["GoFrame","\u81ea\u5b9a\u4e49\u89c4\u5219","\u5b8c\u6574\u6570\u636e\u6821\u9a8c","UserCreateReq","\u6821\u9a8c\u7ec4\u4ef6","\u7ed3\u6784\u4f53\u6821\u9a8c","GoFrame\u6846\u67b6","gvalid","\u6570\u636e\u6821\u9a8c","\u6821\u9a8c\u89c4\u5219"],description:"\u672c\u6587\u6863\u4ecb\u7ecd\u4e86\u5982\u4f55\u5728GoFrame\u6846\u67b6\u4e2d\u4f7f\u7528\u81ea\u5b9a\u4e49\u89c4\u5219\u5bf9\u7ed3\u6784\u4f53\u8fdb\u884c\u5b8c\u6574\u6570\u636e\u6821\u9a8c\u3002\u901a\u8fc7\u7ed9\u7ed3\u6784\u4f53\u6dfb\u52a0\u5143\u6570\u636eg.Meta\uff0c\u80fd\u591f\u6ce8\u518c\u548c\u4f7f\u7528\u81ea\u5b9a\u4e49\u6821\u9a8c\u89c4\u5219\uff0c\u4f8b\u5982UserCreateReq\uff0c\u5b9e\u73b0\u5bf9\u521b\u5efa\u7528\u6237\u8bf7\u6c42\u7684\u6821\u9a8c\u3002\u793a\u4f8b\u4ee3\u7801\u6f14\u793a\u4e86\u5982\u4f55\u5b9e\u73b0\u548c\u5e94\u7528\u81ea\u5b9a\u4e49\u6821\u9a8c\u65b9\u6cd5\uff0c\u4ee5\u786e\u4fdd\u6570\u636e\u7684\u552f\u4e00\u6027\u548c\u6709\u6548\u6027\u3002"},c=void 0,i={},d=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2}];function l(e){const r={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,s.jsxs)(r.p,{children:["\u5927\u5bb6\u4e5f\u8bb8\u5df2\u7ecf\u6ce8\u610f\u5230\uff0c\u5f53\u6211\u4eec\u7ed9\u5b9a\u4e00\u4e2a ",(0,s.jsx)(r.code,{children:"struct"})," \u65f6\uff0c\u6211\u4eec\u7684\u89c4\u5219\u53ea\u80fd\u5bf9\u5176\u4e2d\u7684\u952e\u503c\u6216\u8005\u5c5e\u6027\u8fdb\u884c\u6821\u9a8c\uff0c\u5982\u679c\u6211\u4eec\u60f3\u8981\u901a\u8fc7\u89c4\u5219\u5b8c\u6574\u6821\u9a8c ",(0,s.jsx)(r.code,{children:"struct"})," \u8fd9\u4e2a\u5bf9\u8c61\u65f6\uff0c\u5c45\u7136\u65e0\u6cd5\u6ce8\u518c\u6821\u9a8c\u7ec4\u4ef6\u7684\u81ea\u5b9a\u4e49\u6821\u9a8c\u89c4\u5219\u3002\u5f53\u7136\uff0c\u6211\u4eec\u7684\u6821\u9a8c\u7ec4\u4ef6\u4e5f\u652f\u6301\u76f4\u63a5\u6821\u9a8c\u5f53\u524d\u7684 ",(0,s.jsx)(r.code,{children:"struct"})," \u5bf9\u8c61\u3002\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u4f8b\u5b50\uff0c\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u9700\u8981\u5bf9\u521b\u5efa\u7684\u7528\u6237\u8bf7\u6c42\u8fdb\u884c\u5b8c\u6574\u7684\u81ea\u5b9a\u4e49\u6821\u9a8c\uff0c\u5e76\u6ce8\u518c\u4e00\u4e2a ",(0,s.jsx)(r.code,{children:"UserCreateReq"})," \u7684\u6821\u9a8c\u89c4\u5219\u6765\u5b9e\u73b0\u3002"]}),"\n",(0,s.jsx)(r.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "fmt"\n    "github.com/gogf/gf/v2/database/gdb"\n    "github.com/gogf/gf/v2/errors/gerror"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/util/gvalid"\n    "time"\n)\n\ntype UserCreateReq struct {\n    g.Meta `v:"UserCreateReq"`\n    Name   string\n    Pass   string\n}\n\nfunc RuleUserCreateReq(ctx context.Context, in gvalid.RuleFuncInput) error {\n    var req *UserCreateReq\n    if err := in.Data.Scan(&req); err != nil {\n        return gerror.Wrap(err, `Scan data to UserCreateReq failed`)\n    }\n    // SELECT COUNT(*) FROM `user` WHERE `name` = xxx\n    count, err := g.Model("user").Ctx(ctx).Cache(gdb.CacheOption{\n        Duration: time.Hour,\n        Name:     "",\n        Force:    false,\n    }).Where("name", req.Name).Count()\n    if err != nil {\n        return err\n    }\n    if count > 0 {\n        return gerror.Newf(`The name "%s" is already token by others`, req.Name)\n    }\n    return nil\n}\n\nfunc main() {\n    var (\n        ctx  = gctx.New()\n        user = &UserCreateReq{\n            Name: "john",\n            Pass: "123456",\n        }\n    )\n    err := g.Validator().RuleFunc("UserCreateReq", RuleUserCreateReq).Data(user).Run(ctx)\n    fmt.Println(err)\n}\n'})}),"\n",(0,s.jsxs)(r.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u6211\u4eec\u901a\u8fc7\u7ed9\u7ed3\u6784\u4f53\u4e00\u4e2a ",(0,s.jsx)(r.code,{children:"g.Meta"})," \u5d4c\u5165\u7684\u5143\u6570\u636e\uff0c\u5e76\u7ed1\u5b9a ",(0,s.jsx)(r.code,{children:"UserCreateReq"})," \u7684\u81ea\u5b9a\u4e49\u89c4\u5219\uff0c ",(0,s.jsx)(r.code,{children:"g.Meta"})," \u4f5c\u4e3a\u7ed3\u6784\u4f53\u7684\u4e00\u90e8\u5206\uff0c\u5f53\u6211\u4eec\u901a\u8fc7 ",(0,s.jsx)(r.code,{children:"CheckStruct"})," \u6821\u9a8c\u8be5\u7ed3\u6784\u4f53\u5bf9\u8c61\u65f6\uff0c\u4fbf\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(r.code,{children:"UserCreateReq"})," \u6765\u5b9e\u73b0\u6821\u9a8c\u3002"]}),"\n",(0,s.jsx)(r.p,{children:"\u4e0a\u9762\u7684\u4f8b\u5b50\uff0c\u6211\u4eec\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:'The name "john" is already token\n'})})]})}function u(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>c});var t=n(296540);const s={},a=t.createContext(s);function o(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);