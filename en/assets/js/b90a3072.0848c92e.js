"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["420"],{319466:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>s,default:()=>l,assets:()=>a,toc:()=>d,frontMatter:()=>i});var t=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u547D\u4EE4\u7BA1\u7406/\u547D\u4EE4\u7BA1\u7406-\u94FE\u8DEF\u8DDF\u8E2A","title":"\u547D\u4EE4\u7BA1\u7406-\u94FE\u8DEF\u8DDF\u8E2A","description":"\u4F7F\u7528GoFrame\u6846\u67B6\u7684\u547D\u4EE4\u7BA1\u7406\u7EC4\u4EF6\u8FDB\u884C\u94FE\u8DEF\u8DDF\u8E2A\u3002\u901A\u8FC7OpenTelemetry\u89C4\u8303\uFF0C\u4F7F\u7528GoFrame\u53EF\u4EE5\u5B9E\u73B0\u8DE8\u8FDB\u7A0B\u7684\u94FE\u8DEF\u8DDF\u8E2A\uFF0C\u7279\u522B\u9002\u7528\u4E8E\u4E34\u65F6\u8FD0\u884C\u7684\u8FDB\u7A0B\u3002\u793A\u4F8B\u4E2D\u5C55\u793A\u4E86\u5982\u4F55\u901A\u8FC7\u4E3B\u8FDB\u7A0B\u8C03\u7528\u5B50\u8FDB\u7A0B\uFF0C\u5E76\u81EA\u52A8\u4F20\u9012\u94FE\u8DEF\u4FE1\u606F\u3002","source":"@site/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u547D\u4EE4\u7BA1\u7406/\u547D\u4EE4\u7BA1\u7406-\u94FE\u8DEF\u8DDF\u8E2A.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u547D\u4EE4\u7BA1\u7406","slug":"/docs/core/gcmd-tracing","permalink":"/en/docs/core/gcmd-tracing","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u547D\u4EE4\u7BA1\u7406/\u547D\u4EE4\u7BA1\u7406-\u94FE\u8DEF\u8DDF\u8E2A.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":6,"frontMatter":{"slug":"/docs/core/gcmd-tracing","title":"\u547D\u4EE4\u7BA1\u7406-\u94FE\u8DEF\u8DDF\u8E2A","sidebar_position":6,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","\u547D\u4EE4\u7BA1\u7406","\u94FE\u8DEF\u8DDF\u8E2A","OpenTelemetry","\u4E3B\u8FDB\u7A0B","\u5B50\u8FDB\u7A0B","gcmd","gproc","gctx"],"description":"\u4F7F\u7528GoFrame\u6846\u67B6\u7684\u547D\u4EE4\u7BA1\u7406\u7EC4\u4EF6\u8FDB\u884C\u94FE\u8DEF\u8DDF\u8E2A\u3002\u901A\u8FC7OpenTelemetry\u89C4\u8303\uFF0C\u4F7F\u7528GoFrame\u53EF\u4EE5\u5B9E\u73B0\u8DE8\u8FDB\u7A0B\u7684\u94FE\u8DEF\u8DDF\u8E2A\uFF0C\u7279\u522B\u9002\u7528\u4E8E\u4E34\u65F6\u8FD0\u884C\u7684\u8FDB\u7A0B\u3002\u793A\u4F8B\u4E2D\u5C55\u793A\u4E86\u5982\u4F55\u901A\u8FC7\u4E3B\u8FDB\u7A0B\u8C03\u7528\u5B50\u8FDB\u7A0B\uFF0C\u5E76\u81EA\u52A8\u4F20\u9012\u94FE\u8DEF\u4FE1\u606F\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u547D\u4EE4\u7BA1\u7406-\u7EC8\u7AEF\u4EA4\u4E92","permalink":"/en/docs/core/gcmd-scan"},"next":{"title":"\u914D\u7F6E\u7BA1\u7406","permalink":"/en/docs/core/gcfg"}}'),c=r("785893"),o=r("250065");let i={slug:"/docs/core/gcmd-tracing",title:"\u547D\u4EE4\u7BA1\u7406-\u94FE\u8DEF\u8DDF\u8E2A",sidebar_position:6,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","\u547D\u4EE4\u7BA1\u7406","\u94FE\u8DEF\u8DDF\u8E2A","OpenTelemetry","\u4E3B\u8FDB\u7A0B","\u5B50\u8FDB\u7A0B","gcmd","gproc","gctx"],description:"\u4F7F\u7528GoFrame\u6846\u67B6\u7684\u547D\u4EE4\u7BA1\u7406\u7EC4\u4EF6\u8FDB\u884C\u94FE\u8DEF\u8DDF\u8E2A\u3002\u901A\u8FC7OpenTelemetry\u89C4\u8303\uFF0C\u4F7F\u7528GoFrame\u53EF\u4EE5\u5B9E\u73B0\u8DE8\u8FDB\u7A0B\u7684\u94FE\u8DEF\u8DDF\u8E2A\uFF0C\u7279\u522B\u9002\u7528\u4E8E\u4E34\u65F6\u8FD0\u884C\u7684\u8FDB\u7A0B\u3002\u793A\u4F8B\u4E2D\u5C55\u793A\u4E86\u5982\u4F55\u901A\u8FC7\u4E3B\u8FDB\u7A0B\u8C03\u7528\u5B50\u8FDB\u7A0B\uFF0C\u5E76\u81EA\u52A8\u4F20\u9012\u94FE\u8DEF\u4FE1\u606F\u3002"},s=void 0,a={},d=[{value:"\u57FA\u672C\u4ECB\u7ECD",id:"\u57FA\u672C\u4ECB\u7ECD",level:2},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:2},{value:"\u4E3B\u8FDB\u7A0B",id:"\u4E3B\u8FDB\u7A0B",level:3},{value:"\u5B50\u8FDB\u7A0B",id:"\u5B50\u8FDB\u7A0B",level:3},{value:"\u6267\u884C\u7ED3\u679C",id:"\u6267\u884C\u7ED3\u679C",level:3}];function g(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"\u57FA\u672C\u4ECB\u7ECD",children:"\u57FA\u672C\u4ECB\u7ECD"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"GoFrame"})," \u547D\u4EE4\u7BA1\u7406\u7EC4\u4EF6\u4E5F\u652F\u6301\u8DE8\u8FDB\u7A0B\u7684\u94FE\u8DEF\u8DDF\u8E2A\u7279\u6027\uFF0C\u7279\u522B\u662F\u5BF9\u4E8E\u4E00\u4E9B\u4E34\u65F6\u8FD0\u884C\u7684\u8FDB\u7A0B\u7279\u522B\u6709\u7528\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u6846\u67B6\u6574\u4F53\u7684\u94FE\u8DEF\u8DDF\u8E2A\u90FD\u662F\u91C7\u7528\u7684 ",(0,c.jsx)(n.code,{children:"OpenTelemetry"})," \u89C4\u8303\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,c.jsx)(n.h3,{id:"\u4E3B\u8FDB\u7A0B",children:"\u4E3B\u8FDB\u7A0B"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"main.go"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gcmd"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/os/gproc"\n)\n\nvar (\n    Main = &gcmd.Command{\n        Name:  "main",\n        Brief: "main process",\n        Func: func(ctx context.Context, parser *gcmd.Parser) (err error) {\n            g.Log().Debug(ctx, `this is main process`)\n            return gproc.ShellRun(ctx, `go run sub.go`)\n        },\n    }\n)\n\nfunc main() {\n    Main.Run(gctx.GetInitCtx())\n}\n'})}),"\n",(0,c.jsx)(n.h3,{id:"\u5B50\u8FDB\u7A0B",children:"\u5B50\u8FDB\u7A0B"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"sub.go"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gcmd"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nvar (\n    Sub = &gcmd.Command{\n        Name:  "sub",\n        Brief: "sub process",\n        Func: func(ctx context.Context, parser *gcmd.Parser) (err error) {\n            g.Log().Debug(ctx, `this is sub process`)\n            return nil\n        },\n    }\n)\n\nfunc main() {\n    Sub.Run(gctx.GetInitCtx())\n}\n'})}),"\n",(0,c.jsx)(n.h3,{id:"\u6267\u884C\u7ED3\u679C",children:"\u6267\u884C\u7ED3\u679C"}),"\n",(0,c.jsx)(n.p,{children:"\u6267\u884C\u540E\uFF0C\u7EC8\u7AEF\u8F93\u51FA\u5982\u4E0B\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ go run main.go\n2022-06-21 20:35:06.196 [DEBU] {00698a61e2a2fa1661da5d7993d72e8c} this is main process\n2022-06-21 20:35:07.482 [DEBU] {00698a61e2a2fa1661da5d7993d72e8c} this is sub process\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u53EF\u4EE5\u770B\u5230\uFF0C\u94FE\u8DEF\u4FE1\u606F\u5DF2\u7ECF\u81EA\u52A8\u4F20\u9012\u7ED9\u4E86\u5B50\u8FDB\u7A0B\u3002"})]})}function l(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(g,{...e})}):g(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return i}});var t=r(667294);let c={},o=t.createContext(c);function i(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);