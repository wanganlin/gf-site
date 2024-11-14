"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["31435"],{761485:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>s,default:()=>g,assets:()=>d,toc:()=>p,frontMatter:()=>o});var i=JSON.parse('{"id":"WEB\u670D\u52A1\u5F00\u53D1/\u5206\u9875\u7BA1\u7406/\u5206\u9875\u7BA1\u7406-URL\u6A21\u677F","title":"\u5206\u9875\u7BA1\u7406-URL\u6A21\u677F","description":"gpage \u652F\u6301\u81EA\u5B9A\u4E49 URL \u6A21\u677F\uFF0C\u5728\u6A21\u677F\u4E2D\u53EF\u4EE5\u4F7F\u7528 {.page} \u5185\u7F6E\u53D8\u91CF\u66FF\u6362\u9875\u7801\u7684\u5185\u5BB9\uFF0C\u6211\u4EEC\u6765\u770B\u4E00\u4E2A\u7B80\u5355\u7684\u793A\u4F8B\uFF1A","source":"@site/versioned_docs/version-2.1.x/WEB\u670D\u52A1\u5F00\u53D1/\u5206\u9875\u7BA1\u7406/\u5206\u9875\u7BA1\u7406-URL\u6A21\u677F.md","sourceDirName":"WEB\u670D\u52A1\u5F00\u53D1/\u5206\u9875\u7BA1\u7406","slug":"/WEB\u670D\u52A1\u5F00\u53D1/\u5206\u9875\u7BA1\u7406/\u5206\u9875\u7BA1\u7406-URL\u6A21\u677F","permalink":"/en/2.1.x/WEB\u670D\u52A1\u5F00\u53D1/\u5206\u9875\u7BA1\u7406/\u5206\u9875\u7BA1\u7406-URL\u6A21\u677F","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.1.x/WEB\u670D\u52A1\u5F00\u53D1/\u5206\u9875\u7BA1\u7406/\u5206\u9875\u7BA1\u7406-URL\u6A21\u677F.md","tags":[],"version":"2.1.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":3,"frontMatter":{"title":"\u5206\u9875\u7BA1\u7406-URL\u6A21\u677F","sidebar_position":3,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u5206\u9875\u7BA1\u7406-Ajax\u5206\u9875","permalink":"/en/2.1.x/WEB\u670D\u52A1\u5F00\u53D1/\u5206\u9875\u7BA1\u7406/\u5206\u9875\u7BA1\u7406-Ajax\u5206\u9875"},"next":{"title":"\u5206\u9875\u7BA1\u7406-\u81EA\u5B9A\u4E49\u5206\u9875","permalink":"/en/2.1.x/WEB\u670D\u52A1\u5F00\u53D1/\u5206\u9875\u7BA1\u7406/\u5206\u9875\u7BA1\u7406-\u81EA\u5B9A\u4E49\u5206\u9875"}}'),a=t("785893"),r=t("250065");let o={title:"\u5206\u9875\u7BA1\u7406-URL\u6A21\u677F",sidebar_position:3,hide_title:!0},s=void 0,d={},p=[];function c(e){let n={code:"code",img:"img",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"gpage"})," \u652F\u6301\u81EA\u5B9A\u4E49 ",(0,a.jsx)(n.code,{children:"URL"})," \u6A21\u677F\uFF0C\u5728\u6A21\u677F\u4E2D\u53EF\u4EE5\u4F7F\u7528 ",(0,a.jsx)(n.code,{children:"{.page}"})," \u5185\u7F6E\u53D8\u91CF\u66FF\u6362\u9875\u7801\u7684\u5185\u5BB9\uFF0C\u6211\u4EEC\u6765\u770B\u4E00\u4E2A\u7B80\u5355\u7684\u793A\u4F8B\uFF1A"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n    "github.com/gogf/gf/v2/os/gview"\n)\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/page/template/{page}.html", func(r *ghttp.Request) {\n        page := r.GetPage(100, 10)\n        page.UrlTemplate = "/order/list/{.page}.html"\n        buffer, _ := gview.ParseContent(`\n        <html>\n            <head>\n                <style>\n                    a,span {padding:8px; font-size:16px;}\n                    div{margin:5px 5px 20px 5px}\n                </style>\n            </head>\n            <body>\n                <div>{{.page1}}</div>\n                <div>{{.page2}}</div>\n                <div>{{.page3}}</div>\n                <div>{{.page4}}</div>\n            </body>\n        </html>\n        `, g.Map{\n            "page1": page.GetContent(1),\n            "page2": page.GetContent(2),\n            "page3": page.GetContent(3),\n            "page4": page.GetContent(4),\n        })\n        r.Response.Write(buffer)\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["\u5728\u4EE3\u7801\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 ",(0,a.jsx)(n.code,{children:"UrlTemplate"})," \u5C5E\u6027\u8BBE\u7F6E ",(0,a.jsx)(n.code,{children:"URL"})," \u6A21\u677F\uFF0C\u6267\u884C\u540E\uFF0C\u7ED3\u679C\u5982\u4E0B\uFF1A"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(383729).Z+"",width:"660",height:"230"})})]})}function g(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},383729:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/0bb41ad7c5015c74d06e7045568f17fa-ba3cd994a145bf97246f07323673b7d2.png"},250065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return o}});var i=t(667294);let a={},r=i.createContext(a);function o(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);