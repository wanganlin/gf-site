"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["68379"],{739400:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>u,assets:()=>l,toc:()=>a,frontMatter:()=>s});var r=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6A21\u677F\u5F15\u64CE/\u6A21\u677F\u5F15\u64CE-\u6A21\u677F\u51FD\u6570/\u6A21\u677F\u51FD\u6570-\u81EA\u5B9A\u4E49\u51FD\u6570","title":"\u6A21\u677F\u51FD\u6570-\u81EA\u5B9A\u4E49\u51FD\u6570","description":"\u5728GoFrame\u6846\u67B6\u4E2D\u81EA\u5B9A\u4E49\u6A21\u677F\u51FD\u6570\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u5C06\u8FD9\u4E9B\u51FD\u6570\u5168\u5C40\u7ED1\u5B9A\u5230\u6307\u5B9A\u7684\u89C6\u56FE\u5BF9\u8C61\u4E2D\u3002\u6B64\u5916\uFF0C\u8FD8\u53EF\u4EE5\u5C06\u81EA\u5B9A\u4E49\u5BF9\u8C61\u8D4B\u503C\u7ED9\u6A21\u677F\u5E76\u901A\u8FC7\u8BE5\u5BF9\u8C61\u8C03\u7528\u5176\u5C01\u88C5\u7684\u65B9\u6CD5\u3002\u793A\u4F8B\u4EE3\u7801\u5C55\u793A\u4E86\u5982\u4F55\u5B9A\u4E49\u548C\u7ED1\u5B9A\u6A21\u677F\u51FD\u6570\uFF0C\u4EE5\u53CA\u4F7F\u7528\u666E\u901A\u65B9\u5F0F\u548C\u7BA1\u9053\u65B9\u5F0F\u4F20\u9012\u53C2\u6570\u8FDB\u884C\u6A21\u677F\u89E3\u6790\u3002","source":"@site/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6A21\u677F\u5F15\u64CE/\u6A21\u677F\u5F15\u64CE-\u6A21\u677F\u51FD\u6570/\u6A21\u677F\u51FD\u6570-\u81EA\u5B9A\u4E49\u51FD\u6570.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6A21\u677F\u5F15\u64CE/\u6A21\u677F\u5F15\u64CE-\u6A21\u677F\u51FD\u6570","slug":"/docs/core/gview-funcs-custom","permalink":"/docs/core/gview-funcs-custom","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6A21\u677F\u5F15\u64CE/\u6A21\u677F\u5F15\u64CE-\u6A21\u677F\u51FD\u6570/\u6A21\u677F\u51FD\u6570-\u81EA\u5B9A\u4E49\u51FD\u6570.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":2,"frontMatter":{"slug":"/docs/core/gview-funcs-custom","title":"\u6A21\u677F\u51FD\u6570-\u81EA\u5B9A\u4E49\u51FD\u6570","sidebar_position":2,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","\u6A21\u677F\u51FD\u6570","\u81EA\u5B9A\u4E49\u51FD\u6570","\u89C6\u56FE\u5BF9\u8C61","\u5168\u5C40\u7ED1\u5B9A","\u5BF9\u8C61\u8D4B\u503C","\u65B9\u6CD5\u8C03\u7528","\u7BA1\u9053\u4F20\u53C2","\u6A21\u677F\u89E3\u6790"],"description":"\u5728GoFrame\u6846\u67B6\u4E2D\u81EA\u5B9A\u4E49\u6A21\u677F\u51FD\u6570\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u5C06\u8FD9\u4E9B\u51FD\u6570\u5168\u5C40\u7ED1\u5B9A\u5230\u6307\u5B9A\u7684\u89C6\u56FE\u5BF9\u8C61\u4E2D\u3002\u6B64\u5916\uFF0C\u8FD8\u53EF\u4EE5\u5C06\u81EA\u5B9A\u4E49\u5BF9\u8C61\u8D4B\u503C\u7ED9\u6A21\u677F\u5E76\u901A\u8FC7\u8BE5\u5BF9\u8C61\u8C03\u7528\u5176\u5C01\u88C5\u7684\u65B9\u6CD5\u3002\u793A\u4F8B\u4EE3\u7801\u5C55\u793A\u4E86\u5982\u4F55\u5B9A\u4E49\u548C\u7ED1\u5B9A\u6A21\u677F\u51FD\u6570\uFF0C\u4EE5\u53CA\u4F7F\u7528\u666E\u901A\u65B9\u5F0F\u548C\u7BA1\u9053\u65B9\u5F0F\u4F20\u9012\u53C2\u6570\u8FDB\u884C\u6A21\u677F\u89E3\u6790\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u6A21\u677F\u51FD\u6570-\u5185\u7F6E\u51FD\u6570","permalink":"/docs/core/gview-funcs-builtin"},"next":{"title":"\u6570\u636E\u5E93ORM\uD83D\uDD25","permalink":"/docs/core/gdb"}}'),o=t("785893"),i=t("250065");let s={slug:"/docs/core/gview-funcs-custom",title:"\u6A21\u677F\u51FD\u6570-\u81EA\u5B9A\u4E49\u51FD\u6570",sidebar_position:2,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","\u6A21\u677F\u51FD\u6570","\u81EA\u5B9A\u4E49\u51FD\u6570","\u89C6\u56FE\u5BF9\u8C61","\u5168\u5C40\u7ED1\u5B9A","\u5BF9\u8C61\u8D4B\u503C","\u65B9\u6CD5\u8C03\u7528","\u7BA1\u9053\u4F20\u53C2","\u6A21\u677F\u89E3\u6790"],description:"\u5728GoFrame\u6846\u67B6\u4E2D\u81EA\u5B9A\u4E49\u6A21\u677F\u51FD\u6570\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u5C06\u8FD9\u4E9B\u51FD\u6570\u5168\u5C40\u7ED1\u5B9A\u5230\u6307\u5B9A\u7684\u89C6\u56FE\u5BF9\u8C61\u4E2D\u3002\u6B64\u5916\uFF0C\u8FD8\u53EF\u4EE5\u5C06\u81EA\u5B9A\u4E49\u5BF9\u8C61\u8D4B\u503C\u7ED9\u6A21\u677F\u5E76\u901A\u8FC7\u8BE5\u5BF9\u8C61\u8C03\u7528\u5176\u5C01\u88C5\u7684\u65B9\u6CD5\u3002\u793A\u4F8B\u4EE3\u7801\u5C55\u793A\u4E86\u5982\u4F55\u5B9A\u4E49\u548C\u7ED1\u5B9A\u6A21\u677F\u51FD\u6570\uFF0C\u4EE5\u53CA\u4F7F\u7528\u666E\u901A\u65B9\u5F0F\u548C\u7BA1\u9053\u65B9\u5F0F\u4F20\u9012\u53C2\u6570\u8FDB\u884C\u6A21\u677F\u89E3\u6790\u3002"},c=void 0,l={},a=[{value:"\u57FA\u672C\u4ECB\u7ECD",id:"\u57FA\u672C\u4ECB\u7ECD",level:2},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:2}];function d(e){let n={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"\u57FA\u672C\u4ECB\u7ECD",children:"\u57FA\u672C\u4ECB\u7ECD"}),"\n",(0,o.jsx)(n.p,{children:"\u5F00\u53D1\u8005\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6A21\u677F\u51FD\u6570\uFF0C\u5168\u5C40\u7ED1\u5B9A\u6A21\u677F\u51FD\u6570\u5230\u6307\u5B9A\u7684\u89C6\u56FE\u5BF9\u8C61\u4E2D\u3002"}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"\u4E5F\u53EF\u4EE5\u5C06\u81EA\u5B9A\u4E49\u7684\u5BF9\u8C61\u8D4B\u503C\u7ED9\u6A21\u677F\uFF0C\u968F\u540E\u901A\u8FC7\u5BF9\u8C61\u6765\u8C03\u7528\u5176\u5C01\u88C5\u7684\u65B9\u6CD5\u3002"})}),"\n",(0,o.jsx)(n.h2,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "fmt"\n    "github.com/gogf/gf/v2/frame/g"\n)\n\n// \u7528\u4E8E\u6D4B\u8BD5\u7684\u5E26\u53C2\u6570\u7684\u5185\u7F6E\u51FD\u6570\nfunc funcHello(name string) string {\n    return fmt.Sprintf(`Hello %s`, name)\n}\n\nfunc main() {\n    // \u7ED1\u5B9A\u5168\u5C40\u7684\u6A21\u677F\u51FD\u6570\n    g.View().BindFunc("hello", funcHello)\n\n    // \u666E\u901A\u65B9\u5F0F\u4F20\u53C2\n    parsed1, err := g.View().ParseContent(context.TODO(), `{{hello "GoFrame"}}`, nil)\n    if err != nil {\n        panic(err)\n    }\n    fmt.Println(string(parsed1))\n\n    // \u901A\u8FC7\u7BA1\u9053\u4F20\u53C2\n    parsed2, err := g.View().ParseContent(context.TODO(), `{{"GoFrame" | hello}}`, nil)\n    if err != nil {\n        panic(err)\n    }\n    fmt.Println(string(parsed2))\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"\u6267\u884C\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Hello GoFrame\nHello GoFrame\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return s}});var r=t(667294);let o={},i=r.createContext(o);function s(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);