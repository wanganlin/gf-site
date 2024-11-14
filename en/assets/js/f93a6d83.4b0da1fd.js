"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["63505"],{752061:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>r,default:()=>g,assets:()=>c,toc:()=>d,frontMatter:()=>s});var a=JSON.parse('{"id":"docs/WEB\u670D\u52A1\u5F00\u53D1/\u5206\u9875\u7BA1\u7406/\u5206\u9875\u7BA1\u7406-Ajax\u5206\u9875","title":"\u5206\u9875\u7BA1\u7406-Ajax\u5206\u9875","description":"\u4F7F\u7528Ajax\u65B9\u6CD5\u5B9E\u73B0\u5206\u9875\u7BA1\u7406\u7684\u6280\u672F\u7EC6\u8282\u3002\u533A\u522B\u4E8E\u4F20\u7EDF\u5206\u9875\u65B9\u5F0F\uFF0CAjax\u5206\u9875\u901A\u8FC7Javascript\u65B9\u6CD5\u52A8\u6001\u83B7\u53D6\u5E76\u6E32\u67D3\u5206\u9875\u5185\u5BB9\uFF0C\u4EE5\u5B9E\u73B0\u66F4\u6D41\u7545\u7684\u7528\u6237\u4F53\u9A8C\u3002\u793A\u4F8B\u4EE3\u7801\u5C55\u793A\u4E86\u5982\u4F55\u5728GoFrame\u6846\u67B6\u4E2D\u96C6\u6210Ajax\u5206\u9875\u529F\u80FD\uFF0C\u63D0\u4F9B\u4E00\u4E2A\u5B9E\u7528\u7684\u540E\u7AEF\u5206\u9875\u89E3\u51B3\u65B9\u6848\u3002","source":"@site/versioned_docs/version-2.7.x/docs/WEB\u670D\u52A1\u5F00\u53D1/\u5206\u9875\u7BA1\u7406/\u5206\u9875\u7BA1\u7406-Ajax\u5206\u9875.md","sourceDirName":"docs/WEB\u670D\u52A1\u5F00\u53D1/\u5206\u9875\u7BA1\u7406","slug":"/docs/web/paging-ajax","permalink":"/en/2.7.x/docs/web/paging-ajax","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/WEB\u670D\u52A1\u5F00\u53D1/\u5206\u9875\u7BA1\u7406/\u5206\u9875\u7BA1\u7406-Ajax\u5206\u9875.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":2,"frontMatter":{"slug":"/docs/web/paging-ajax","title":"\u5206\u9875\u7BA1\u7406-Ajax\u5206\u9875","sidebar_position":2,"hide_title":true,"keywords":["Ajax\u5206\u9875","\u5206\u9875\u7BA1\u7406","Javascript\u5206\u9875","GoFrame","GoFrame\u6846\u67B6","Golang","\u9875\u9762\u6E32\u67D3","\u524D\u7AEF\u5F00\u53D1","\u52A8\u6001\u5206\u9875","Web\u5F00\u53D1"],"description":"\u4F7F\u7528Ajax\u65B9\u6CD5\u5B9E\u73B0\u5206\u9875\u7BA1\u7406\u7684\u6280\u672F\u7EC6\u8282\u3002\u533A\u522B\u4E8E\u4F20\u7EDF\u5206\u9875\u65B9\u5F0F\uFF0CAjax\u5206\u9875\u901A\u8FC7Javascript\u65B9\u6CD5\u52A8\u6001\u83B7\u53D6\u5E76\u6E32\u67D3\u5206\u9875\u5185\u5BB9\uFF0C\u4EE5\u5B9E\u73B0\u66F4\u6D41\u7545\u7684\u7528\u6237\u4F53\u9A8C\u3002\u793A\u4F8B\u4EE3\u7801\u5C55\u793A\u4E86\u5982\u4F55\u5728GoFrame\u6846\u67B6\u4E2D\u96C6\u6210Ajax\u5206\u9875\u529F\u80FD\uFF0C\u63D0\u4F9B\u4E00\u4E2A\u5B9E\u7528\u7684\u540E\u7AEF\u5206\u9875\u89E3\u51B3\u65B9\u6848\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u5206\u9875\u7BA1\u7406-\u9759\u6001\u5206\u9875","permalink":"/en/2.7.x/docs/web/paging-static"},"next":{"title":"\u5206\u9875\u7BA1\u7406-URL\u6A21\u677F","permalink":"/en/2.7.x/docs/web/paging-template"}}'),i=t("785893"),o=t("250065");let s={slug:"/docs/web/paging-ajax",title:"\u5206\u9875\u7BA1\u7406-Ajax\u5206\u9875",sidebar_position:2,hide_title:!0,keywords:["Ajax\u5206\u9875","\u5206\u9875\u7BA1\u7406","Javascript\u5206\u9875","GoFrame","GoFrame\u6846\u67B6","Golang","\u9875\u9762\u6E32\u67D3","\u524D\u7AEF\u5F00\u53D1","\u52A8\u6001\u5206\u9875","Web\u5F00\u53D1"],description:"\u4F7F\u7528Ajax\u65B9\u6CD5\u5B9E\u73B0\u5206\u9875\u7BA1\u7406\u7684\u6280\u672F\u7EC6\u8282\u3002\u533A\u522B\u4E8E\u4F20\u7EDF\u5206\u9875\u65B9\u5F0F\uFF0CAjax\u5206\u9875\u901A\u8FC7Javascript\u65B9\u6CD5\u52A8\u6001\u83B7\u53D6\u5E76\u6E32\u67D3\u5206\u9875\u5185\u5BB9\uFF0C\u4EE5\u5B9E\u73B0\u66F4\u6D41\u7545\u7684\u7528\u6237\u4F53\u9A8C\u3002\u793A\u4F8B\u4EE3\u7801\u5C55\u793A\u4E86\u5982\u4F55\u5728GoFrame\u6846\u67B6\u4E2D\u96C6\u6210Ajax\u5206\u9875\u529F\u80FD\uFF0C\u63D0\u4F9B\u4E00\u4E2A\u5B9E\u7528\u7684\u540E\u7AEF\u5206\u9875\u89E3\u51B3\u65B9\u6848\u3002"},r=void 0,c={},d=[];function p(e){let n={code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Ajax"})," \u5206\u9875\u4E0E\u5176\u4ED6\u5206\u9875\u65B9\u5F0F\u7684\u533A\u522B\u5728\u4E8E\uFF0C\u5206\u9875\u94FE\u63A5\u4F1A\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"Javascript"})," \u65B9\u6CD5\u6765\u5B9E\u73B0\uFF0C\u8BE5 ",(0,i.jsx)(n.code,{children:"Javascript"})," \u65B9\u6CD5\u662F\u5206\u9875\u65B9\u6CD5\uFF0C\u53C2\u6570\u56FA\u5B9A\u4E3A\u8BE5\u5206\u9875\u5BF9\u5E94\u7684\u5206\u9875 ",(0,i.jsx)(n.code,{children:"URL"})," \u5730\u5740\u3002\u8BE5 ",(0,i.jsx)(n.code,{children:"Javascript"})," \u65B9\u6CD5\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"Ajax"})," \u83B7\u53D6\u5230 ",(0,i.jsx)(n.code,{children:"URL"})," \u8FDE\u63A5\u5BF9\u5E94\u7684\u5206\u9875\u5185\u5BB9\u540E\u6E32\u67D3\u5230\u9875\u9762\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u5B8C\u6574\u793A\u4F8B\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n    "github.com/gogf/gf/v2/os/gview"\n)\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/page/ajax", func(r *ghttp.Request) {\n        page := r.GetPage(100, 10)\n        page.AjaxActionName = "DoAjax"\n        buffer, _ := gview.ParseContent(`\n        <html>\n            <head>\n                <style>\n                    a,span {padding:8px; font-size:16px;}\n                    div{margin:5px 5px 20px 5px}\n                </style>\n                <script src="https://cdn.bootcss.com/jquery/2.0.3/jquery.min.js"><\/script>\n                <script>\n                function DoAjax(url) {\n                     $.get(url, function(data,status) {\n                         $("body").html(data);\n                     });\n                }\n                <\/script>\n            </head>\n            <body>\n                <div>{{.page1}}</div>\n                <div>{{.page2}}</div>\n                <div>{{.page3}}</div>\n                <div>{{.page4}}</div>\n            </body>\n        </html>\n        `, g.Map{\n            "page1": page.GetContent(1),\n            "page2": page.GetContent(2),\n            "page3": page.GetContent(3),\n            "page4": page.GetContent(4),\n        })\n        r.Response.Write(buffer)\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u8BE5\u793A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u5B9A\u4E49\u4E86\u4E00\u4E2A ",(0,i.jsx)(n.code,{children:"DoAjax(url)"})," \u65B9\u6CD5\u7528\u6765\u6267\u884C\u5206\u9875\u64CD\u4F5C\uFF0C\u4E3A\u6F14\u793A\u9700\u8981\u5B83\u903B\u8F91\u5F88\u7B80\u5355\uFF0C\u4F1A\u52A0\u8F7D\u6307\u5B9A\u5206\u9875\u9875\u9762\u7684\u5185\u5BB9\u5E76\u8986\u76D6\u6389\u5F53\u524D\u9875\u9762\u7684\u5206\u9875\u5185\u5BB9\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'function DoAjax(url) {\n     $.get(url, function(data,status) {\n         $("body").html(data);\n     });\n}\n'})})]})}function g(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return s}});var a=t(667294);let i={},o=a.createContext(i);function s(e){let n=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);