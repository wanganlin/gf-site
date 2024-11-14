"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["54375"],{864460:function(e,r,n){n.r(r),n.d(r,{metadata:()=>s,contentTitle:()=>c,default:()=>p,assets:()=>a,toc:()=>d,frontMatter:()=>i});var s=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u547D\u4EE4\u7BA1\u7406/\u547D\u4EE4\u7BA1\u7406-Parser\u89E3\u6790","title":"\u547D\u4EE4\u7BA1\u7406-Parser\u89E3\u6790","description":"GoFrame\u6846\u67B6\u7684\u547D\u4EE4\u884C\u89E3\u6790\u529F\u80FD\uFF0C\u91CD\u70B9\u8BB2\u89E3\u4E86gcmd\u7EC4\u4EF6\u7684Parser\u89E3\u6790\u65B9\u6CD5\u3002\u901A\u8FC7\u81EA\u5B9A\u4E49\u9009\u9879\u540D\u79F0\u548C\u6570\u503C\u89E3\u6790\uFF0C\u80FD\u591F\u9AD8\u6548\u7BA1\u7406\u548C\u89E3\u6790\u547D\u4EE4\u884C\u9009\u9879\u3002\u5305\u62EC\u4EE3\u7801\u793A\u4F8B\u548C\u8BE6\u7EC6\u7684\u63A5\u53E3\u6587\u6863\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u7406\u89E3\u548C\u5E94\u7528\u4E8E\u5B9E\u9645\u9879\u76EE\u4E2D\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u6838\u5FC3\u7EC4\u4EF6/\u547D\u4EE4\u7BA1\u7406/\u547D\u4EE4\u7BA1\u7406-Parser\u89E3\u6790.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u547D\u4EE4\u7BA1\u7406","slug":"/docs/core/gcmd-parser","permalink":"/en/2.7.x/docs/core/gcmd-parser","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u6838\u5FC3\u7EC4\u4EF6/\u547D\u4EE4\u7BA1\u7406/\u547D\u4EE4\u7BA1\u7406-Parser\u89E3\u6790.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":2,"frontMatter":{"slug":"/docs/core/gcmd-parser","title":"\u547D\u4EE4\u7BA1\u7406-Parser\u89E3\u6790","sidebar_position":2,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","\u547D\u4EE4\u884C\u89E3\u6790","gcmd","Parser\u89E3\u6790","Go\u5F00\u53D1","\u4EE3\u7801\u793A\u4F8B","\u9009\u9879\u7BA1\u7406","\u547D\u4EE4\u884C\u9009\u9879","\u5F00\u53D1\u6587\u6863"],"description":"GoFrame\u6846\u67B6\u7684\u547D\u4EE4\u884C\u89E3\u6790\u529F\u80FD\uFF0C\u91CD\u70B9\u8BB2\u89E3\u4E86gcmd\u7EC4\u4EF6\u7684Parser\u89E3\u6790\u65B9\u6CD5\u3002\u901A\u8FC7\u81EA\u5B9A\u4E49\u9009\u9879\u540D\u79F0\u548C\u6570\u503C\u89E3\u6790\uFF0C\u80FD\u591F\u9AD8\u6548\u7BA1\u7406\u548C\u89E3\u6790\u547D\u4EE4\u884C\u9009\u9879\u3002\u5305\u62EC\u4EE3\u7801\u793A\u4F8B\u548C\u8BE6\u7EC6\u7684\u63A5\u53E3\u6587\u6863\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u7406\u89E3\u548C\u5E94\u7528\u4E8E\u5B9E\u9645\u9879\u76EE\u4E2D\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u547D\u4EE4\u7BA1\u7406-\u57FA\u7840\u65B9\u6CD5","permalink":"/en/2.7.x/docs/core/gcmd-funcs"},"next":{"title":"\u547D\u4EE4\u7BA1\u7406-\u547D\u4EE4\u884C\u5BF9\u8C61","permalink":"/en/2.7.x/docs/core/gcmd-command"}}'),t=n("785893"),o=n("250065");let i={slug:"/docs/core/gcmd-parser",title:"\u547D\u4EE4\u7BA1\u7406-Parser\u89E3\u6790",sidebar_position:2,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","\u547D\u4EE4\u884C\u89E3\u6790","gcmd","Parser\u89E3\u6790","Go\u5F00\u53D1","\u4EE3\u7801\u793A\u4F8B","\u9009\u9879\u7BA1\u7406","\u547D\u4EE4\u884C\u9009\u9879","\u5F00\u53D1\u6587\u6863"],description:"GoFrame\u6846\u67B6\u7684\u547D\u4EE4\u884C\u89E3\u6790\u529F\u80FD\uFF0C\u91CD\u70B9\u8BB2\u89E3\u4E86gcmd\u7EC4\u4EF6\u7684Parser\u89E3\u6790\u65B9\u6CD5\u3002\u901A\u8FC7\u81EA\u5B9A\u4E49\u9009\u9879\u540D\u79F0\u548C\u6570\u503C\u89E3\u6790\uFF0C\u80FD\u591F\u9AD8\u6548\u7BA1\u7406\u548C\u89E3\u6790\u547D\u4EE4\u884C\u9009\u9879\u3002\u5305\u62EC\u4EE3\u7801\u793A\u4F8B\u548C\u8BE6\u7EC6\u7684\u63A5\u53E3\u6587\u6863\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u7406\u89E3\u548C\u5E94\u7528\u4E8E\u5B9E\u9645\u9879\u76EE\u4E2D\u3002"},c=void 0,a={},d=[{value:"\u57FA\u672C\u4ECB\u7ECD",id:"\u57FA\u672C\u4ECB\u7ECD",level:2},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:2}];function l(e){let r={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"\u57FA\u672C\u4ECB\u7ECD",children:"\u57FA\u672C\u4ECB\u7ECD"}),"\n",(0,t.jsxs)(r.p,{children:["\u547D\u4EE4\u884C\u89E3\u6790\u6700\u4E3B\u8981\u7684\u662F\u9488\u5BF9\u4E8E\u9009\u9879\u7684\u89E3\u6790\uFF0C ",(0,t.jsx)(r.code,{children:"gcmd"})," \u7EC4\u4EF6\u63D0\u4F9B\u4E86 ",(0,t.jsx)(r.code,{children:"Parse"})," \u65B9\u6CD5\uFF0C\u7528\u4E8E\u81EA\u5B9A\u4E49\u89E3\u6790\u9009\u9879\uFF0C\u5305\u62EC\u6709\u54EA\u4E9B\u9009\u9879\u540D\u79F0\uFF0C\u6BCF\u4E2A\u9009\u9879\u662F\u5426\u5E26\u6709\u6570\u503C\u3002\u6839\u636E\u8FD9\u4E00\u914D\u7F6E\u4FBF\u53EF\u5C06\u6240\u6709\u7684\u53C2\u6570\u548C\u9009\u9879\u8FDB\u884C\u89E3\u6790\u5F52\u7C7B\u3002"]}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsxs)(r.p,{children:["\u5927\u90E8\u5206\u573A\u666F\u4E0B\uFF0C\u6211\u4EEC\u5E76\u4E0D\u9700\u8981\u663E\u5F0F\u521B\u5EFA ",(0,t.jsx)(r.code,{children:"Parser"})," \u5BF9\u8C61\uFF0C\u56E0\u4E3A\u6211\u4EEC\u6709\u5C42\u7EA7\u7BA1\u7406\u4EE5\u53CA\u5BF9\u8C61\u7BA1\u7406\u65B9\u5F0F\u6765\u7BA1\u7406\u591A\u547D\u4EE4\u3002\u4F46\u5E95\u5C42\u4ECD\u7136\u662F\u91C7\u7528 ",(0,t.jsx)(r.code,{children:"Parser"})," \u65B9\u5F0F\u5B9E\u73B0\uFF0C\u56E0\u6B64\u672C\u7AE0\u8282\u5927\u5BB6\u4E86\u89E3\u539F\u7406\u5373\u53EF\u3002"]})}),"\n",(0,t.jsx)(r.p,{children:"\u76F8\u5173\u65B9\u6CD5\uFF1A"}),"\n",(0,t.jsxs)(r.p,{children:["\u66F4\u591A ",(0,t.jsx)(r.code,{children:"Parser"})," \u65B9\u6CD5\u8BF7\u53C2\u8003\u63A5\u53E3\u6587\u6863\uFF1A ",(0,t.jsx)(r.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/os/gcmd#Parser",children:"https://pkg.go.dev/github.com/gogf/gf/v2/os/gcmd#Parser"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:"func Parse(supportedOptions map[string]bool, option ...ParserOption) (*Parser, error)\nfunc ParseWithArgs(args []string, supportedOptions map[string]bool, option ...ParserOption) (*Parser, error)\nfunc ParserFromCtx(ctx context.Context) *Parser\nfunc (p *Parser) GetArg(index int, def ...string) *gvar.Var\nfunc (p *Parser) GetArgAll() []string\nfunc (p *Parser) GetOpt(name string, def ...interface{}) *gvar.Var\nfunc (p *Parser) GetOptAll() map[string]string\n"})}),"\n",(0,t.jsxs)(r.p,{children:["\u5176\u4E2D\uFF0C ",(0,t.jsx)(r.code,{children:"ParserOption"})," \u5982\u4E0B\uFF1A"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:"// ParserOption manages the parsing options.\ntype ParserOption struct {\n    CaseSensitive bool // Marks options parsing in case-sensitive way.\n    Strict        bool // Whether stops parsing and returns error if invalid option passed.\n}\n"})}),"\n",(0,t.jsx)(r.p,{children:"\u89E3\u6790\u793A\u4F8B\uFF1A"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:'parser, err := gcmd.Parse(g.MapStrBool{\n    "n,name":    true,\n    "v,version": true,\n    "a,arch":    true,\n    "o,os":      true,\n    "p,path":    true,\n})\n'})}),"\n",(0,t.jsxs)(r.p,{children:["\u53EF\u4EE5\u770B\u5230\uFF0C\u9009\u9879\u8F93\u5165\u53C2\u6570\u5176\u5B9E\u662F\u4E00\u4E2A ",(0,t.jsx)(r.code,{children:"map"})," \u7C7B\u578B\u3002\u5176\u4E2D\u952E\u503C\u4E3A\u9009\u9879\u540D\u79F0\uFF0C\u540C\u4E00\u4E2A\u9009\u9879\u7684\u4E0D\u540C\u540D\u79F0\u53EF\u4EE5\u901A\u8FC7 ",(0,t.jsx)(r.code,{children:","})," \u7B26\u53F7\u8FDB\u884C\u5206\u9694\u3002\u6BD4\u5982\uFF0C\u8BE5\u793A\u4F8B\u4E2D ",(0,t.jsx)(r.code,{children:"n"})," \u548C ",(0,t.jsx)(r.code,{children:"name"})," \u9009\u9879\u662F\u540C\u4E00\u4E2A\u9009\u9879\uFF0C\u5F53\u7528\u6237\u8F93\u5165 ",(0,t.jsx)(r.code,{children:"-n john"})," \u7684\u65F6\u5019\uFF0C ",(0,t.jsx)(r.code,{children:"n"})," \u548C ",(0,t.jsx)(r.code,{children:"name"})," \u9009\u9879\u90FD\u4F1A\u83B7\u5F97\u5230\u6570\u636E ",(0,t.jsx)(r.code,{children:"john"}),"\u3002"]}),"\n",(0,t.jsxs)(r.p,{children:["\u800C\u952E\u503C\u662F\u4E00\u4E2A\u5E03\u5C14\u7C7B\u578B\uFF0C\u6807\u8BC6\u8BE5\u9009\u9879\u662F\u5426\u9700\u8981\u89E3\u6790\u53C2\u6570\u3002\u8FD9\u4E00\u9009\u9879\u914D\u7F6E\u662F\u975E\u5E38\u91CD\u8981\u7684\uFF0C\u56E0\u4E3A\u6709\u7684\u9009\u9879\u662F\u4E0D\u9700\u8981\u83B7\u5F97\u6570\u636E\u7684\uFF0C\u4EC5\u4EC5\u4F5C\u4E3A\u4E00\u4E2A\u6807\u8BC6\u3002\u4F8B\u5982\uFF0C ",(0,t.jsx)(r.code,{children:"-f force"})," \u8FD9\u4E2A\u8F93\u5165\uFF0C\u5728\u9700\u8981\u89E3\u6790\u6570\u636E\u7684\u60C5\u51B5\u4E0B\uFF0C\u9009\u9879 ",(0,t.jsx)(r.code,{children:"f"})," \u7684\u503C\u4E3A ",(0,t.jsx)(r.code,{children:"force"}),"\uFF1B\u800C\u5728\u4E0D\u9700\u8981\u89E3\u6790\u9009\u9879\u6570\u636E\u7684\u60C5\u51B5\u4E0B\uFF0C\u5176\u4E2D\u7684 ",(0,t.jsx)(r.code,{children:"force"})," \u4FBF\u662F\u547D\u4EE4\u884C\u7684\u4E00\u4E2A\u53C2\u6570\uFF0C\u800C\u4E0D\u662F\u9009\u9879\u3002"]}),"\n",(0,t.jsx)(r.h2,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:'func ExampleParse() {\n    os.Args = []string{"gf", "build", "main.go", "-o=gf.exe", "-y"}\n    p, err := gcmd.Parse(g.MapStrBool{\n        "o,output": true,\n        "y,yes":    false,\n    })\n    if err != nil {\n        panic(err)\n    }\n    fmt.Println(p.GetOpt("o"))\n    fmt.Println(p.GetOpt("output"))\n    fmt.Println(p.GetOpt("y") != nil)\n    fmt.Println(p.GetOpt("yes") != nil)\n    fmt.Println(p.GetOpt("none") != nil)\n\n    // Output:\n    // gf.exe\n    // gf.exe\n    // true\n    // true\n    // false\n}\n'})})]})}function p(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return c},a:function(){return i}});var s=n(667294);let t={},o=s.createContext(t);function i(e){let r=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);