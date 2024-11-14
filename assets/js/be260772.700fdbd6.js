"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["48329"],{908115:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>p,assets:()=>d,toc:()=>l,frontMatter:()=>s});var r=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6/\u6A21\u677F\u5F15\u64CE/\u6A21\u677F\u5F15\u64CE-XSS\u5904\u7406","title":"\u6A21\u677F\u5F15\u64CE-XSS\u5904\u7406","description":"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6A21\u677F\u5F15\u64CE\u5BF9\u6240\u6709\u7684\u53D8\u91CF\u8F93\u51FA\u5E76\u6CA1\u6709\u4F7F\u7528 HTML \u8F6C\u7801\u5904\u7406\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5982\u679C\u5F00\u53D1\u8005\u5904\u7406\u4E0D\u597D\uFF0C\u53EF\u80FD\u4F1A\u5B58\u5728XSS\u6F0F\u6D1E\u3002","source":"@site/versioned_docs/version-2.5.x/\u6838\u5FC3\u7EC4\u4EF6/\u6A21\u677F\u5F15\u64CE/\u6A21\u677F\u5F15\u64CE-XSS\u5904\u7406.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6/\u6A21\u677F\u5F15\u64CE","slug":"/\u6838\u5FC3\u7EC4\u4EF6/\u6A21\u677F\u5F15\u64CE/\u6A21\u677F\u5F15\u64CE-XSS\u5904\u7406","permalink":"/2.5.x/\u6838\u5FC3\u7EC4\u4EF6/\u6A21\u677F\u5F15\u64CE/\u6A21\u677F\u5F15\u64CE-XSS\u5904\u7406","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.5.x/\u6838\u5FC3\u7EC4\u4EF6/\u6A21\u677F\u5F15\u64CE/\u6A21\u677F\u5F15\u64CE-XSS\u5904\u7406.md","tags":[],"version":"2.5.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":5,"frontMatter":{"title":"\u6A21\u677F\u5F15\u64CE-XSS\u5904\u7406","sidebar_position":5,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u6A21\u677F\u5F15\u64CE-\u6A21\u677F\u5E03\u5C40","permalink":"/2.5.x/\u6838\u5FC3\u7EC4\u4EF6/\u6A21\u677F\u5F15\u64CE/\u6A21\u677F\u5F15\u64CE-\u6A21\u677F\u5E03\u5C40"},"next":{"title":"\u6A21\u677F\u5F15\u64CE-\u5176\u4ED6\u4F7F\u7528","permalink":"/2.5.x/\u6838\u5FC3\u7EC4\u4EF6/\u6A21\u677F\u5F15\u64CE/\u6A21\u677F\u5F15\u64CE-\u5176\u4ED6\u4F7F\u7528"}}'),i=t("785893"),o=t("250065");let s={title:"\u6A21\u677F\u5F15\u64CE-XSS\u5904\u7406",sidebar_position:5,hide_title:!0},c=void 0,d={},l=[];function a(e){let n={code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6A21\u677F\u5F15\u64CE\u5BF9\u6240\u6709\u7684\u53D8\u91CF\u8F93\u51FA\u5E76\u6CA1\u6709\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"HTML"})," \u8F6C\u7801\u5904\u7406\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5982\u679C\u5F00\u53D1\u8005\u5904\u7406\u4E0D\u597D\uFF0C\u53EF\u80FD\u4F1A\u5B58\u5728XSS\u6F0F\u6D1E\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4E0D\u7528\u62C5\u5FC3\uFF0C ",(0,i.jsx)(n.code,{children:"GoFrame"})," \u6846\u67B6\u5F53\u7136\u5DF2\u7ECF\u5145\u5206\u8003\u8651\u5230\u8FD9\u70B9\uFF0C\u5E76\u4E14\u4E3A\u5F00\u53D1\u8005\u63D0\u4F9B\u4E86\u6BD4\u8F83\u7075\u6D3B\u7684\u914D\u7F6E\u53C2\u6570\u6765\u63A7\u5236\u662F\u5426\u9ED8\u8BA4\u8F6C\u4E49\u53D8\u91CF\u8F93\u51FA\u7684 ",(0,i.jsx)(n.code,{children:"HTML"})," \u5185\u5BB9\u3002\u8BE5\u7279\u6027\u53EF\u4EE5\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"AutoEncode"})," \u914D\u7F6E\u9879\uFF0C\u6216\u8005 ",(0,i.jsx)(n.code,{children:"SetAutoEncode"})," \u65B9\u6CD5\u6765\u5F00\u542F/\u5173\u95ED\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u8BE5\u7279\u6027\u5E76\u4E0D\u4F1A\u5F71\u54CD ",(0,i.jsx)(n.code,{children:"include"})," \u6A21\u677F\u7684\u5185\u7F6E\u51FD\u6570\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u4F7F\u7528\u793A\u4F8B\uFF1A"}),"\n",(0,i.jsx)(n.p,{children:"1\u3001\u914D\u7F6E\u6587\u4EF6"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'[viewer]\n    delimiters  =  ["${", "}"]\n    autoencode  =  true\n'})}),"\n",(0,i.jsx)(n.p,{children:"2\u3001\u793A\u4F8B\u4EE3\u7801"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "fmt"\n    "github.com/gogf/gf/v2/frame/g"\n)\n\nfunc main() {\n    result, _ := g.View().ParseContent(context.TODO(), "\u59D3\u540D: ${.name}", g.Map{\n        "name": "<script>alert(\'john\');<\/script>",\n    })\n    fmt.Println(result)\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"3\u3001\u6267\u884C\u8F93\u51FA"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\u59D3\u540D: &lt;script&gt;alert(&#39;john&#39;);&lt;/script&gt;\n"})})]})}function p(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return s}});var r=t(667294);let i={},o=r.createContext(i);function s(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);