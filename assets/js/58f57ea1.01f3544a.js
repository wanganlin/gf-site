"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["46719"],{576157:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>u,assets:()=>c,toc:()=>a,frontMatter:()=>o});var r=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6/\u6A21\u677F\u5F15\u64CE/\u6A21\u677F\u5F15\u64CE-\u6A21\u677F\u53D8\u91CF","title":"\u6A21\u677F\u5F15\u64CE-\u6A21\u677F\u53D8\u91CF","description":"\u5185\u7F6E\u53D8\u91CF","source":"@site/versioned_docs/version-2.5.x/\u6838\u5FC3\u7EC4\u4EF6/\u6A21\u677F\u5F15\u64CE/\u6A21\u677F\u5F15\u64CE-\u6A21\u677F\u53D8\u91CF.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6/\u6A21\u677F\u5F15\u64CE","slug":"/\u6838\u5FC3\u7EC4\u4EF6/\u6A21\u677F\u5F15\u64CE/\u6A21\u677F\u5F15\u64CE-\u6A21\u677F\u53D8\u91CF","permalink":"/2.5.x/\u6838\u5FC3\u7EC4\u4EF6/\u6A21\u677F\u5F15\u64CE/\u6A21\u677F\u5F15\u64CE-\u6A21\u677F\u53D8\u91CF","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.5.x/\u6838\u5FC3\u7EC4\u4EF6/\u6A21\u677F\u5F15\u64CE/\u6A21\u677F\u5F15\u64CE-\u6A21\u677F\u53D8\u91CF.md","tags":[],"version":"2.5.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":3,"frontMatter":{"title":"\u6A21\u677F\u5F15\u64CE-\u6A21\u677F\u53D8\u91CF","sidebar_position":3,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u6A21\u677F\u5F15\u64CE-\u6A21\u677F\u6807\u7B7E","permalink":"/2.5.x/\u6838\u5FC3\u7EC4\u4EF6/\u6A21\u677F\u5F15\u64CE/\u6A21\u677F\u5F15\u64CE-\u6A21\u677F\u6807\u7B7E"},"next":{"title":"\u6A21\u677F\u5F15\u64CE-\u6A21\u677F\u5E03\u5C40","permalink":"/2.5.x/\u6838\u5FC3\u7EC4\u4EF6/\u6A21\u677F\u5F15\u64CE/\u6A21\u677F\u5F15\u64CE-\u6A21\u677F\u5E03\u5C40"}}'),i=t("785893"),s=t("250065");let o={title:"\u6A21\u677F\u5F15\u64CE-\u6A21\u677F\u53D8\u91CF",sidebar_position:3,hide_title:!0},l=void 0,c={},a=[{value:"\u5185\u7F6E\u53D8\u91CF",id:"\u5185\u7F6E\u53D8\u91CF",level:2},{value:"\u53D8\u91CF\u5BF9\u8C61",id:"\u53D8\u91CF\u5BF9\u8C61",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u5185\u7F6E\u53D8\u91CF",children:"\u5185\u7F6E\u53D8\u91CF"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"WebServer"})," \u5185\u7F6E\u53D8\u91CF\u8BF7\u53C2\u8003 ",(0,i.jsx)(n.a,{href:"/2.5.x/WEB%E6%9C%8D%E5%8A%A1%E5%BC%80%E5%8F%91/%E6%95%B0%E6%8D%AE%E8%BF%94%E5%9B%9E/%E6%95%B0%E6%8D%AE%E8%BF%94%E5%9B%9E-%E6%A8%A1%E6%9D%BF%E8%A7%A3%E6%9E%90",children:"\u6570\u636E\u8FD4\u56DE-\u6A21\u677F\u89E3\u6790"})," \u7AE0\u8282\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u53D8\u91CF\u5BF9\u8C61",children:"\u53D8\u91CF\u5BF9\u8C61"}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u4EEC\u53EF\u4EE5\u5728\u6A21\u677F\u4E2D\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684\u5BF9\u8C61\uFF0C\u5E76\u53EF\u5728\u6A21\u677F\u4E2D\u8BBF\u95EE\u5BF9\u8C61\u7684\u5C5E\u6027\u53CA\u8C03\u7528\u5176\u65B9\u6CD5\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u793A\u4F8B\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "github.com/gogf/gf/v2/frame/g"\n)\n\ntype T struct {\n    Name string\n}\n\nfunc (t *T) Hello(name string) string {\n    return "Hello " + name\n}\n\nfunc (t *T) Test() string {\n    return "This is test"\n}\n\nfunc main() {\n    t := &T{"John"}\n    v := g.View()\n    content := `{{.t.Hello "there"}}, my name\'s {{.t.Name}}. {{.t.Test}}.`\n    if r, err := v.ParseContent(context.TODO(), content, g.Map{"t": t}); err != nil {\n        g.Dump(err)\n    } else {\n        g.Dump(r)\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u5176\u4E2D\uFF0C\u8D4B\u503C\u7ED9\u6A21\u677F\u7684\u53D8\u91CF\u65E2\u53EF\u4EE5\u662F ",(0,i.jsx)(n.code,{children:"\u5BF9\u8C61\u6307\u9488"})," \u4E5F\u53EF\u4EE5\u662F ",(0,i.jsx)(n.code,{children:"\u5BF9\u8C61\u53D8\u91CF"}),"\u3002\u4F46\u662F\u6CE8\u610F\u5B9A\u4E49\u7684\u5BF9\u8C61\u65B9\u6CD5\uFF0C\u5982\u679C\u4E3A\u5BF9\u8C61\u6307\u9488\u90A3\u4E48\u53EA\u80FD\u8C03\u7528\u65B9\u6CD5\u63A5\u6536\u5668\u4E3A\u5BF9\u8C61\u6307\u9488\u7684\u65B9\u6CD5\uFF1B\u5982\u679C\u4E3A\u5BF9\u8C61\u53D8\u91CF\uFF0C\u90A3\u4E48\u53EA\u80FD\u8C03\u7528\u65B9\u6CD5\u63A5\u6536\u5668\u4E3A\u5BF9\u8C61\u7684\u65B9\u6CD5\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u6267\u884C\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Hello there, my name's John. This is test.\n"})})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var r=t(667294);let i={},s=r.createContext(i);function o(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);