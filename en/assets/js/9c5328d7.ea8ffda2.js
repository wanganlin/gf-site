"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["31790"],{67745:function(e,n,t){t.r(n),t.d(n,{metadata:()=>o,contentTitle:()=>i,default:()=>a,assets:()=>d,toc:()=>l,frontMatter:()=>r});var o=JSON.parse('{"id":"docs/\u6846\u67B6\u8BBE\u8BA1/Context\u76F8\u5173\u8BBE\u8BA1/Context \u4E1A\u52A1\u6D41\u7A0B\u5171\u4EAB\u53D8\u91CF","title":"Context: \u4E1A\u52A1\u6D41\u7A0B\u5171\u4EAB\u53D8\u91CF","description":"\u901A\u8FC7\u4F7F\u7528GoFrame\u6846\u67B6\u4E2D\u7684Context\u4F20\u9012\u548C\u7BA1\u7406\u4E0A\u4E0B\u6587\u6D41\u7A0B\u4E2D\u7684\u5171\u4EAB\u53D8\u91CF\u3002\u5728Go\u7F51\u7EDC\u5E94\u7528\u4E2D\uFF0C\u5C24\u5176\u662FHTTP/RPC\u670D\u52A1\u4E2D\uFF0CContext\u662F\u4F20\u9012\u5F02\u6B65IO\u63A7\u5236\u548C\u4E0A\u4E0B\u6587\u53D8\u91CF\u7684\u5173\u952E\u5DE5\u5177\u3002\u901A\u8FC7\u7ED3\u6784\u5316\u5BF9\u8C61\u7684\u5171\u4EAB\uFF0C\u672C\u6587\u5C55\u793A\u4E86\u5982\u4F55\u5728\u8BF7\u6C42\u8FC7\u7A0B\u4E2D\u5B9E\u73B0\u53D8\u91CF\u4F20\u9012\uFF0C\u786E\u4FDD\u8BF7\u6C42\u94FE\u8DEF\u4E2D\u53D8\u91CF\u7684\u4E00\u81F4\u6027\u548C\u7075\u6D3B\u6027\u3002","source":"@site/docs/docs/\u6846\u67B6\u8BBE\u8BA1/Context\u76F8\u5173\u8BBE\u8BA1/Context \u4E1A\u52A1\u6D41\u7A0B\u5171\u4EAB\u53D8\u91CF.md","sourceDirName":"docs/\u6846\u67B6\u8BBE\u8BA1/Context\u76F8\u5173\u8BBE\u8BA1","slug":"/docs/design/context-variable","permalink":"/en/docs/design/context-variable","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6846\u67B6\u8BBE\u8BA1/Context\u76F8\u5173\u8BBE\u8BA1/Context \u4E1A\u52A1\u6D41\u7A0B\u5171\u4EAB\u53D8\u91CF.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731511511000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/design/context-variable","title":"Context: \u4E1A\u52A1\u6D41\u7A0B\u5171\u4EAB\u53D8\u91CF","sidebar_position":0,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","Context","\u4E0A\u4E0B\u6587\u53D8\u91CF","\u5171\u4EAB\u53D8\u91CF","\u5F02\u6B65IO","HTTP\u8BF7\u6C42","Session\u7BA1\u7406","\u7528\u6237\u4FE1\u606F","\u4E2D\u95F4\u4EF6"],"description":"\u901A\u8FC7\u4F7F\u7528GoFrame\u6846\u67B6\u4E2D\u7684Context\u4F20\u9012\u548C\u7BA1\u7406\u4E0A\u4E0B\u6587\u6D41\u7A0B\u4E2D\u7684\u5171\u4EAB\u53D8\u91CF\u3002\u5728Go\u7F51\u7EDC\u5E94\u7528\u4E2D\uFF0C\u5C24\u5176\u662FHTTP/RPC\u670D\u52A1\u4E2D\uFF0CContext\u662F\u4F20\u9012\u5F02\u6B65IO\u63A7\u5236\u548C\u4E0A\u4E0B\u6587\u53D8\u91CF\u7684\u5173\u952E\u5DE5\u5177\u3002\u901A\u8FC7\u7ED3\u6784\u5316\u5BF9\u8C61\u7684\u5171\u4EAB\uFF0C\u672C\u6587\u5C55\u793A\u4E86\u5982\u4F55\u5728\u8BF7\u6C42\u8FC7\u7A0B\u4E2D\u5B9E\u73B0\u53D8\u91CF\u4F20\u9012\uFF0C\u786E\u4FDD\u8BF7\u6C42\u94FE\u8DEF\u4E2D\u53D8\u91CF\u7684\u4E00\u81F4\u6027\u548C\u7075\u6D3B\u6027\u3002"},"sidebar":"mainSidebar","previous":{"title":"Golang\u679A\u4E3E\u503C\u7BA1\u7406","permalink":"/en/docs/design/enums"},"next":{"title":"\u5FAE\u670D\u52A1\u4E0E\u6846\u67B6\u804C\u8D23\u8FB9\u754C","permalink":"/en/docs/design/micro-service-border"}}'),c=t("785893"),s=t("250065");let r={slug:"/docs/design/context-variable",title:"Context: \u4E1A\u52A1\u6D41\u7A0B\u5171\u4EAB\u53D8\u91CF",sidebar_position:0,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","Context","\u4E0A\u4E0B\u6587\u53D8\u91CF","\u5171\u4EAB\u53D8\u91CF","\u5F02\u6B65IO","HTTP\u8BF7\u6C42","Session\u7BA1\u7406","\u7528\u6237\u4FE1\u606F","\u4E2D\u95F4\u4EF6"],description:"\u901A\u8FC7\u4F7F\u7528GoFrame\u6846\u67B6\u4E2D\u7684Context\u4F20\u9012\u548C\u7BA1\u7406\u4E0A\u4E0B\u6587\u6D41\u7A0B\u4E2D\u7684\u5171\u4EAB\u53D8\u91CF\u3002\u5728Go\u7F51\u7EDC\u5E94\u7528\u4E2D\uFF0C\u5C24\u5176\u662FHTTP/RPC\u670D\u52A1\u4E2D\uFF0CContext\u662F\u4F20\u9012\u5F02\u6B65IO\u63A7\u5236\u548C\u4E0A\u4E0B\u6587\u53D8\u91CF\u7684\u5173\u952E\u5DE5\u5177\u3002\u901A\u8FC7\u7ED3\u6784\u5316\u5BF9\u8C61\u7684\u5171\u4EAB\uFF0C\u672C\u6587\u5C55\u793A\u4E86\u5982\u4F55\u5728\u8BF7\u6C42\u8FC7\u7A0B\u4E2D\u5B9E\u73B0\u53D8\u91CF\u4F20\u9012\uFF0C\u786E\u4FDD\u8BF7\u6C42\u94FE\u8DEF\u4E2D\u53D8\u91CF\u7684\u4E00\u81F4\u6027\u548C\u7075\u6D3B\u6027\u3002"},i=void 0,d={},l=[{value:"\u4E00\u3001\u7ED3\u6784\u5B9A\u4E49",id:"\u4E00\u7ED3\u6784\u5B9A\u4E49",level:2},{value:"\u4E8C\u3001\u903B\u8F91\u5C01\u88C5",id:"\u4E8C\u903B\u8F91\u5C01\u88C5",level:2},{value:"\u4E09\u3001\u4E0A\u4E0B\u6587\u53D8\u91CF\u6CE8\u5165",id:"\u4E09\u4E0A\u4E0B\u6587\u53D8\u91CF\u6CE8\u5165",level:2},{value:"\u56DB\u3001\u4E0A\u4E0B\u6587\u53D8\u91CF\u4F7F\u7528",id:"\u56DB\u4E0A\u4E0B\u6587\u53D8\u91CF\u4F7F\u7528",level:2},{value:"\u65B9\u6CD5\u5B9A\u4E49",id:"\u65B9\u6CD5\u5B9A\u4E49",level:3},{value:"<code>Context</code> \u5BF9\u8C61\u83B7\u53D6",id:"context-\u5BF9\u8C61\u83B7\u53D6",level:3},{value:"\u81EA\u5B9A\u4E49 <code>Key-Value</code>",id:"\u81EA\u5B9A\u4E49-key-value",level:3},{value:"\u4E94\u3001\u6CE8\u610F\u4E8B\u9879",id:"\u4E94\u6CE8\u610F\u4E8B\u9879",level:2}];function x(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Context"})," \u6307\u7684\u662F\u6807\u51C6\u5E93\u7684 ",(0,c.jsx)(n.code,{children:"context.Context"}),"\uFF0C\u662F\u4E00\u4E2A\u63A5\u53E3\u5BF9\u8C61\uFF0C\u5E38\u7528\u4E8E ",(0,c.jsxs)(n.strong,{children:["\u5F02\u6B65 ",(0,c.jsx)(n.code,{children:"IO"})," \u63A7\u5236"]})," \u4EE5\u53CA ",(0,c.jsx)(n.strong,{children:"\u4E0A\u4E0B\u6587\u6D41\u7A0B\u53D8\u91CF\u7684\u4F20\u9012"}),"\u3002\u672C\u6587\u5C06\u8981\u4ECB\u7ECD\u7684\uFF0C\u662F\u5982\u4F55\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"Context"})," \u4F20\u9012\u6D41\u7A0B\u95F4\u5171\u4EAB\u53D8\u91CF\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5728 ",(0,c.jsx)(n.code,{children:"Go"})," \u7684\u6267\u884C\u6D41\u7A0B\u4E2D\uFF0C\u7279\u522B\u662F ",(0,c.jsx)(n.code,{children:"HTTP/RPC"})," \u6267\u884C\u6D41\u7A0B\u4E2D\uFF0C\u4E0D\u5B58\u5728\u201D\u5168\u5C40\u53D8\u91CF\u201D\u83B7\u53D6\u8BF7\u6C42\u53C2\u6570\u7684\u65B9\u5F0F\uFF0C\u53EA\u6709\u5C06\u4E0A\u4E0B\u6587 ",(0,c.jsx)(n.code,{children:"Context"})," \u53D8\u91CF\u4F20\u9012\u5230\u540E\u7EED\u6D41\u7A0B\u7684\u65B9\u6CD5\u4E2D\uFF0C\u800C ",(0,c.jsx)(n.code,{children:"Context"})," \u4E0A\u4E0B\u6587\u53D8\u91CF\u5373\u5305\u542B\u4E86\u6240\u6709\u9700\u8981\u4F20\u9012\u7684\u5171\u4EAB\u53D8\u91CF\u3002\u5E76\u4E14\u8BE5 ",(0,c.jsx)(n.code,{children:"Context"})," \u4E2D\u7684\u5171\u4EAB\u53D8\u91CF\u5E94\u5F53\u662F\u4E8B\u5148\u7EA6\u5B9A\u7684\uFF0C\u5E76\u4E14\u5F80\u5F80\u5B58\u50A8\u4E3A\u5BF9\u8C61\u6307\u9488\u5F62\u5F0F\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u901A\u8FC7 ",(0,c.jsx)(n.code,{children:"Context"})," \u4E0A\u4E0B\u6587\u5171\u4EAB\u53D8\u91CF\u975E\u5E38\u7B80\u5355\uFF0C\u4EE5\u4E0B\u6211\u4EEC\u901A\u8FC7\u4E00\u4E2A\u9879\u76EE\u4E2D\u7684\u793A\u4F8B\u6765\u5C55\u793A\u5982\u4F55\u5728\u5B9E\u6218\u5316\u9879\u76EE\u4E2D\u4F20\u9012\u548C\u4F7F\u7528\u901A\u7528\u7684\u5171\u4EAB\u53D8\u91CF\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u4E00\u7ED3\u6784\u5B9A\u4E49",children:"\u4E00\u3001\u7ED3\u6784\u5B9A\u4E49"}),"\n",(0,c.jsxs)(n.p,{children:["\u4E0A\u4E0B\u6587\u5BF9\u8C61\u4E2D\u5F80\u5F80\u5B58\u50A8\u4E00\u4E9B\u9700\u8981\u5171\u4EAB\u7684\u53D8\u91CF\uFF0C\u8FD9\u4E9B\u53D8\u91CF\u901A\u5E38\u4F7F\u7528\u7ED3\u6784\u5316\u7684\u5BF9\u8C61\u6765\u5B58\u50A8\uFF0C\u4EE5\u65B9\u4FBF\u7EF4\u62A4\u3002\u4F8B\u5982\uFF0C\u6211\u4EEC\u5728 ",(0,c.jsx)(n.code,{children:"model"})," \u5B9A\u4E49\u4E00\u4E2A\u4E0A\u4E0B\u6587\u4E2D\u7684\u5171\u4EAB\u53D8\u91CF\uFF1A"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'const (\n    // \u4E0A\u4E0B\u6587\u53D8\u91CF\u5B58\u50A8\u952E\u540D\uFF0C\u524D\u540E\u7AEF\u7CFB\u7EDF\u5171\u4EAB\n    ContextKey = "ContextKey"\n)\n\n// \u8BF7\u6C42\u4E0A\u4E0B\u6587\u7ED3\u6784\ntype Context struct {\n    Session *ghttp.Session // \u5F53\u524DSession\u7BA1\u7406\u5BF9\u8C61\n    User    *ContextUser   // \u4E0A\u4E0B\u6587\u7528\u6237\u4FE1\u606F\n    Data    g.Map          // \u81EA\u5B9AKV\u53D8\u91CF\uFF0C\u4E1A\u52A1\u6A21\u5757\u6839\u636E\u9700\u8981\u8BBE\u7F6E\uFF0C\u4E0D\u56FA\u5B9A\n}\n\n// \u8BF7\u6C42\u4E0A\u4E0B\u6587\u4E2D\u7684\u7528\u6237\u4FE1\u606F\ntype ContextUser struct {\n    Id       uint   // \u7528\u6237ID\n    Passport string // \u7528\u6237\u8D26\u53F7\n    Nickname string // \u7528\u6237\u540D\u79F0\n    Avatar   string // \u7528\u6237\u5934\u50CF\n}\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u5176\u4E2D\uFF1A"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"model.ContextKey"})," \u5E38\u91CF\u8868\u793A\u5B58\u50A8\u5728 ",(0,c.jsx)(n.code,{children:"context.Context"})," \u4E0A\u4E0B\u6587\u53D8\u91CF\u4E2D\u7684\u952E\u540D\uFF0C\u8BE5\u952E\u540D\u7528\u4E8E\u4ECE\u4F20\u9012\u7684 ",(0,c.jsx)(n.code,{children:"context.Context"})," \u53D8\u91CF\u4E2D\u5B58\u50A8/\u83B7\u53D6\u4E1A\u52A1\u81EA\u5B9A\u4E49\u7684\u5171\u4EAB\u53D8\u91CF\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"model.Context"})," \u7ED3\u6784\u4F53\u4E2D\u7684 ",(0,c.jsx)(n.code,{children:"Session"})," \u8868\u793A\u5F53\u524D\u8BF7\u6C42\u7684 ",(0,c.jsx)(n.code,{children:"Session"})," \u5BF9\u8C61\uFF0C\u5728 ",(0,c.jsx)(n.code,{children:"GoFrame"})," \u6846\u67B6\u4E2D\u6BCF\u4E2A ",(0,c.jsx)(n.code,{children:"HTTP"})," \u8BF7\u6C42\u5BF9\u8C61\u4E2D\u90FD\u4F1A\u6709\u4E00\u4E2A\u7A7A\u7684 ",(0,c.jsx)(n.code,{children:"Session"})," \u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u91C7\u7528\u4E86\u61D2\u521D\u59CB\u5316\u8BBE\u8BA1\uFF0C\u53EA\u6709\u5728\u771F\u6B63\u6267\u884C\u8BFB\u5199\u64CD\u4F5C\u65F6\u624D\u4F1A\u521D\u59CB\u5316\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"model.Context"})," \u7ED3\u6784\u4F53\u4E2D\u7684 ",(0,c.jsx)(n.code,{children:"User"})," \u8868\u793A\u5F53\u524D\u767B\u5F55\u7684\u7528\u6237\u57FA\u672C\u4FE1\u606F\uFF0C\u53EA\u6709\u5728\u7528\u6237\u767B\u5F55\u540E\u624D\u6709\u6570\u636E\uFF0C\u5426\u5219\u662F ",(0,c.jsx)(n.code,{children:"nil"}),"\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"model.Context"})," \u7ED3\u6784\u4F53\u4E2D\u7684 ",(0,c.jsx)(n.code,{children:"Data"})," \u5C5E\u6027\u7528\u4E8E\u5B58\u50A8\u81EA\u5B9A\u4E49\u7684 ",(0,c.jsx)(n.code,{children:"KV"})," \u53D8\u91CF\uFF0C\u56E0\u6B64\u4E00\u822C\u6765\u8BF4\u5F00\u53D1\u8005\u65E0\u9700\u518D\u5F80 ",(0,c.jsx)(n.code,{children:"context.Context"})," \u4E0A\u4E0B\u6587\u53D8\u91CF\u4E2D\u589E\u52A0\u81EA\u5B9A\u4E49\u7684\u952E\u503C\u5BF9\uFF0C\u800C\u662F\u76F4\u63A5\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"model."})," ",(0,c.jsx)(n.code,{children:"Context"})," \u5BF9\u8C61\u7684\u8FD9\u4E2A ",(0,c.jsx)(n.code,{children:"Data"})," \u5C5E\u6027\u5373\u53EF\u3002\u8BE6\u89C1\u540E\u7EED\u4ECB\u7ECD\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u4E8C\u903B\u8F91\u5C01\u88C5",children:"\u4E8C\u3001\u903B\u8F91\u5C01\u88C5"}),"\n",(0,c.jsxs)(n.p,{children:["\u7531\u4E8E\u8BE5\u4E0A\u4E0B\u6587\u5BF9\u8C61\u4E5F\u662F\u548C\u4E1A\u52A1\u903B\u8F91\u76F8\u5173\u7684\uFF0C\u56E0\u6B64\u6211\u4EEC\u9700\u8981\u901A\u8FC7 ",(0,c.jsx)(n.code,{children:"service"})," \u5BF9\u8C61\u5C06\u4E0A\u4E0B\u6587\u53D8\u91CF\u5C01\u88C5\u8D77\u6765\u4EE5\u65B9\u4FBF\u5176\u4ED6\u6A21\u5757\u4F7F\u7528\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:"// \u4E0A\u4E0B\u6587\u7BA1\u7406\u670D\u52A1\nvar Context = new(contextService)\n\ntype contextService struct{}\n\n// \u521D\u59CB\u5316\u4E0A\u4E0B\u6587\u5BF9\u8C61\u6307\u9488\u5230\u4E0A\u4E0B\u6587\u5BF9\u8C61\u4E2D\uFF0C\u4EE5\u4FBF\u540E\u7EED\u7684\u8BF7\u6C42\u6D41\u7A0B\u4E2D\u53EF\u4EE5\u4FEE\u6539\u3002\nfunc (s *contextService) Init(r *ghttp.Request, customCtx *model.Context) {\n    r.SetCtxVar(model.ContextKey, customCtx)\n}\n\n// \u83B7\u5F97\u4E0A\u4E0B\u6587\u53D8\u91CF\uFF0C\u5982\u679C\u6CA1\u6709\u8BBE\u7F6E\uFF0C\u90A3\u4E48\u8FD4\u56DEnil\nfunc (s *contextService) Get(ctx context.Context) *model.Context {\n    value := ctx.Value(model.ContextKey)\n    if value == nil {\n        return nil\n    }\n    if localCtx, ok := value.(*model.Context); ok {\n        return localCtx\n    }\n    return nil\n}\n\n// \u5C06\u4E0A\u4E0B\u6587\u4FE1\u606F\u8BBE\u7F6E\u5230\u4E0A\u4E0B\u6587\u8BF7\u6C42\u4E2D\uFF0C\u6CE8\u610F\u662F\u5B8C\u6574\u8986\u76D6\nfunc (s *contextService) SetUser(ctx context.Context, ctxUser *model.ContextUser) {\n    s.Get(ctx).User = ctxUser\n}\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u4E09\u4E0A\u4E0B\u6587\u53D8\u91CF\u6CE8\u5165",children:"\u4E09\u3001\u4E0A\u4E0B\u6587\u53D8\u91CF\u6CE8\u5165"}),"\n",(0,c.jsxs)(n.p,{children:["\u4E0A\u4E0B\u6587\u7684\u53D8\u91CF\u5FC5\u987B\u5728\u8BF7\u6C42\u4E00\u5F00\u59CB\u4FBF\u6CE8\u5165\u5230\u8BF7\u6C42\u6D41\u7A0B\u4E2D\uFF0C\u4EE5\u4FBF\u4E8E\u5176\u4ED6\u65B9\u6CD5\u8C03\u7528\u3002\u5728 ",(0,c.jsx)(n.code,{children:"HTTP"})," \u8BF7\u6C42\u4E2D\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"GoFrame"})," \u7684\u4E2D\u95F4\u4EF6\u6765\u5B9E\u73B0\u3002\u5728 ",(0,c.jsx)(n.code,{children:"GRPC"})," \u8BF7\u6C42\u4E2D\u6211\u4EEC\u4E5F\u53EF\u4EE5\u4F7F\u7528\u62E6\u622A\u5668\u6765\u5B9E\u73B0\u3002\u5728 ",(0,c.jsx)(n.code,{children:"service"})," \u5C42\u7684 ",(0,c.jsx)(n.code,{children:"middleware"})," \u7BA1\u7406\u5BF9\u8C61\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8FD9\u6837\u6765\u5B9A\u4E49\uFF1A"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'// \u81EA\u5B9A\u4E49\u4E0A\u4E0B\u6587\u5BF9\u8C61\nfunc (s *middlewareService) Ctx(r *ghttp.Request) {\n    // \u521D\u59CB\u5316\uFF0C\u52A1\u5FC5\u6700\u5F00\u59CB\u6267\u884C\n    customCtx := &model.Context{\n        Session: r.Session,\n        Data:    make(g.Map),\n    }\n    service.Context.Init(r, customCtx)\n    if userEntity := Session.GetUser(r.Context()); userEntity != nil {\n        customCtx.User = &model.ContextUser{\n            Id:       userEntity.Id,\n            Passport: userEntity.Passport,\n            Nickname: userEntity.Nickname,\n            Avatar:   userEntity.Avatar,\n        }\n    }\n    // \u5C06\u81EA\u5B9A\u4E49\u7684\u4E0A\u4E0B\u6587\u5BF9\u8C61\u4F20\u9012\u5230\u6A21\u677F\u53D8\u91CF\u4E2D\u4F7F\u7528\n    r.Assigns(g.Map{\n        "Context": customCtx,\n    })\n    // \u6267\u884C\u4E0B\u4E00\u6B65\u8BF7\u6C42\u903B\u8F91\n    r.Middleware.Next()\n}\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u8BE5\u4E2D\u95F4\u4EF6\u521D\u59CB\u5316\u4E86\u7528\u6237\u6267\u884C\u6D41\u7A0B\u5171\u4EAB\u7684\u5BF9\u8C61\uFF0C\u5E76\u4E14\u5B58\u50A8\u5230 ",(0,c.jsx)(n.code,{children:"context.Context"})," \u53D8\u91CF\u4E2D\u7684\u5BF9\u8C61\u662F\u6307\u9488\u7C7B\u578B ",(0,c.jsx)(n.code,{children:"*model.Context"}),"\u3002\u8FD9\u6837\u4EFB\u4F55\u4E00\u4E2A\u5730\u65B9\u83B7\u53D6\u5230\u8FD9\u4E2A\u6307\u9488\uFF0C\u65E2\u53EF\u4EE5\u83B7\u53D6\u5230\u91CC\u9762\u7684\u6570\u636E\uFF0C\u4E5F\u80FD\u591F\u76F4\u63A5\u4FEE\u6539\u91CC\u9762\u7684\u6570\u636E\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5176\u4E2D\uFF0C\u5982\u679C ",(0,c.jsx)(n.code,{children:"Session"})," \u4E2D\u5B58\u5728\u7528\u6237\u767B\u5F55\u540E\u7684\u5B58\u50A8\u4FE1\u606F\uFF0C\u90A3\u4E48\u4E5F\u4F1A\u5C06\u9700\u8981\u5171\u4EAB\u7684\u7528\u6237\u57FA\u672C\u4FE1\u606F\u5199\u5165\u5230 ",(0,c.jsx)(n.code,{children:"*model.Context"})," \u4E2D\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u56DB\u4E0A\u4E0B\u6587\u53D8\u91CF\u4F7F\u7528",children:"\u56DB\u3001\u4E0A\u4E0B\u6587\u53D8\u91CF\u4F7F\u7528"}),"\n",(0,c.jsx)(n.h3,{id:"\u65B9\u6CD5\u5B9A\u4E49",children:"\u65B9\u6CD5\u5B9A\u4E49"}),"\n",(0,c.jsxs)(n.p,{children:["\u7EA6\u5B9A\u4FD7\u6210\u7684\uFF0C\u65B9\u6CD5\u5B9A\u4E49\u7684\u7B2C\u4E00\u4E2A\u8F93\u5165\u53C2\u6570\u5F80\u5F80\u9884\u7559\u7ED9 ",(0,c.jsx)(n.code,{children:"context.Context"})," \u7C7B\u578B\u53C2\u6570\u4F7F\u7528\uFF0C\u4EE5\u4FBF\u63A5\u53D7\u4E0A\u4E0B\u6587\u53D8\u91CF\uFF0C\u7279\u522B\u662F ",(0,c.jsx)(n.code,{children:"service"})," \u5C42\u7684\u65B9\u6CD5\u3002\u4F8B\u5982\uFF1A"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:"// \u6267\u884C\u7528\u6237\u767B\u5F55\nfunc (s *userService) Login(ctx context.Context, loginReq *define.UserServiceLoginReq) error {\n    ...\n}\n\n// \u67E5\u8BE2\u5185\u5BB9\u5217\u8868\nfunc (s *contentService) GetList(ctx context.Context, r *define.ContentServiceGetListReq) (*define.ContentServiceGetListRes, error) {\n    ...\n}\n\n// \u521B\u5EFA\u56DE\u590D\u5185\u5BB9\nfunc (s *replyService) Create(ctx context.Context, r *define.ReplyServiceCreateReq) error {\n    ...\n}\n\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u6B64\u5916\uFF0C\u7EA6\u5B9A\u4FD7\u6210\u7684\uFF0C\u65B9\u6CD5\u7684\u6700\u540E\u4E00\u4E2A\u8FD4\u56DE\u53C2\u6570\u5F80\u5F80\u662F ",(0,c.jsx)(n.code,{children:"error"})," \u7C7B\u578B\u3002\u5982\u679C\u60A8\u786E\u5B9A\u6B64\u65B9\u6CD5\u5185\u90E8\u6C38\u4E0D\u4F1A\u4EA7\u751F ",(0,c.jsx)(n.code,{children:"error"}),"\uFF0C\u90A3\u4E48\u53EF\u4EE5\u5FFD\u7565\u3002"]}),"\n",(0,c.jsxs)(n.h3,{id:"context-\u5BF9\u8C61\u83B7\u53D6",children:[(0,c.jsx)(n.code,{children:"Context"})," \u5BF9\u8C61\u83B7\u53D6"]}),"\n",(0,c.jsxs)(n.p,{children:["\u901A\u8FC7 ",(0,c.jsx)(n.code,{children:"service"})," \u4E2D\u5C01\u88C5\u7684\u4EE5\u4E0B\u65B9\u6CD5\uFF0C\u5C06 ",(0,c.jsx)(n.code,{children:"context.Context"})," \u4E0A\u4E0B\u6587\u53D8\u91CF\u4F20\u9012\u8FDB\u53BB\u5373\u53EF\u3002 ",(0,c.jsx)(n.code,{children:"context.Context"})," \u4E0A\u4E0B\u6587\u53D8\u91CF\u5728 ",(0,c.jsx)(n.code,{children:"GoFrame"})," \u6846\u67B6\u7684 ",(0,c.jsx)(n.code,{children:"HTTP"})," \u8BF7\u6C42\u4E2D\u53EF\u4EE5\u901A\u8FC7 ",(0,c.jsx)(n.code,{children:"r.Context()"})," \u65B9\u6CD5\u83B7\u53D6\uFF0C\u5728 ",(0,c.jsx)(n.code,{children:"GRPC"})," \u8BF7\u6C42\u4E2D\uFF0C\u7F16\u8BD1\u751F\u6210\u7684 ",(0,c.jsx)(n.code,{children:"pb"})," \u6587\u4EF6\u4E2D\u6267\u884C\u65B9\u6CD5\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u5373\u56FA\u5B9A\u662F ",(0,c.jsx)(n.code,{children:"context.Context"}),"\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:"service.Context.Get(ctx)\n"})}),"\n",(0,c.jsxs)(n.h3,{id:"\u81EA\u5B9A\u4E49-key-value",children:["\u81EA\u5B9A\u4E49 ",(0,c.jsx)(n.code,{children:"Key-Value"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u8BBE\u7F6E/\u83B7\u53D6\u81EA\u5B9A\u4E49\u7684 ",(0,c.jsx)(n.code,{children:"key-value"})," \u952E\u503C\u5BF9\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:"// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u952E\u503C\u5BF9\nservice.Context.Get(ctx).Data[key] = value\n\n...\n\n// \u83B7\u53D6\u81EA\u5B9A\u4E49\u952E\u503C\u5BF9\nservice.Context.Get(ctx).Data[key]\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u4E94\u6CE8\u610F\u4E8B\u9879",children:"\u4E94\u3001\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsx)(n.li,{children:"\u4E0A\u4E0B\u6587\u53D8\u91CF\u53EA\u4F20\u9012\u5FC5\u987B\u7684\u94FE\u8DEF\u53C2\u6570\u6570\u636E\uFF0C\u4E0D\u8981\u4EC0\u4E48\u53C2\u6570\u90FD\u5F80\u91CC\u9762\u585E\u3002\u7279\u522B\u662F\u4E00\u4E9B\u65B9\u6CD5\u53C2\u6570\u4F20\u53C2\u7684\u6570\u636E\uFF0C\u522B\u5F80\u91CC\u9762\u585E\uFF0C\u800C\u5E94\u5F53\u663E\u793A\u4F20\u9012\u65B9\u6CD5\u53C2\u6570\u3002"}),"\n",(0,c.jsxs)(n.li,{children:["\u4E0A\u4E0B\u6587\u53D8\u91CF\u4EC5\u7528\u4F5C\u8FD0\u884C\u65F6\u4E34\u65F6\u4F7F\u7528\uFF0C\u4E0D\u53EF\u6301\u4E45\u5316\u5B58\u50A8\u957F\u671F\u4F7F\u7528\u3002\u4F8B\u5982\u5C06 ",(0,c.jsx)(n.code,{children:"ctx"})," \u5E8F\u5217\u5316\u540E\u5B58\u50A8\u5230\u6570\u636E\u5E93\uFF0C\u5E76\u518D\u4E0B\u4E00\u6B21\u8BF7\u6C42\u4E2D\u8BFB\u53D6\u51FA\u6765\u53CD\u5E8F\u5217\u5316\u4F7F\u7528\u662F\u9519\u8BEF\u505A\u6CD5\u3002"]}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(x,{...e})}):x(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return r}});var o=t(667294);let c={},s=o.createContext(c);function r(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);