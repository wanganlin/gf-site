"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["84017"],{110190:function(e,r,c){c.r(r),c.d(r,{metadata:()=>s,contentTitle:()=>o,default:()=>u,assets:()=>i,toc:()=>l,frontMatter:()=>n});var s=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u6821\u9A8C/\u6570\u636E\u6821\u9A8C-\u5E38\u89C1\u95EE\u9898","title":"\u6570\u636E\u6821\u9A8C-\u5E38\u89C1\u95EE\u9898","description":"\u5728\u4F7F\u7528GoFrame\u6846\u67B6\u8FDB\u884C\u6570\u636E\u6821\u9A8C\u65F6\uFF0CStruct\u9ED8\u8BA4\u503C\u5BF9required\u89C4\u5219\u7684\u5F71\u54CD\u53CA\u5176\u89E3\u51B3\u65B9\u6848\uFF0C\u5305\u62EC\u4F7F\u7528\u6307\u9488\u7C7B\u578B\u7ED5\u8FC7\u9ED8\u8BA4\u503C\u5F71\u54CD\u3001\u7EC4\u5408\u6821\u9A8C\u89C4\u5219\u4EE5\u53CAAssoc\u8054\u5408\u6821\u9A8C\u65B9\u6CD5\uFF0C\u4EE5\u786E\u4FDD\u6821\u9A8C\u51C6\u786E\u6027\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u6821\u9A8C/\u6570\u636E\u6821\u9A8C-\u5E38\u89C1\u95EE\u9898.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u6821\u9A8C","slug":"/docs/core/gvalid-faq","permalink":"/2.7.x/docs/core/gvalid-faq","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u6821\u9A8C/\u6570\u636E\u6821\u9A8C-\u5E38\u89C1\u95EE\u9898.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":9,"frontMatter":{"slug":"/docs/core/gvalid-faq","title":"\u6570\u636E\u6821\u9A8C-\u5E38\u89C1\u95EE\u9898","sidebar_position":9,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","\u6570\u636E\u6821\u9A8C","Struct\u9ED8\u8BA4\u503C","required\u89C4\u5219","\u6307\u9488\u7C7B\u578B","\u7EC4\u5408\u6821\u9A8C\u89C4\u5219","Assoc\u8054\u5408\u6821\u9A8C","API\u8F93\u5165\u8F93\u51FA","Server"],"description":"\u5728\u4F7F\u7528GoFrame\u6846\u67B6\u8FDB\u884C\u6570\u636E\u6821\u9A8C\u65F6\uFF0CStruct\u9ED8\u8BA4\u503C\u5BF9required\u89C4\u5219\u7684\u5F71\u54CD\u53CA\u5176\u89E3\u51B3\u65B9\u6848\uFF0C\u5305\u62EC\u4F7F\u7528\u6307\u9488\u7C7B\u578B\u7ED5\u8FC7\u9ED8\u8BA4\u503C\u5F71\u54CD\u3001\u7EC4\u5408\u6821\u9A8C\u89C4\u5219\u4EE5\u53CAAssoc\u8054\u5408\u6821\u9A8C\u65B9\u6CD5\uFF0C\u4EE5\u786E\u4FDD\u6821\u9A8C\u51C6\u786E\u6027\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u6570\u636E\u6821\u9A8C-\u65B9\u6CD5\u4ECB\u7ECD","permalink":"/2.7.x/docs/core/gvalid-funcs"},"next":{"title":"\u7C7B\u578B\u8F6C\u6362","permalink":"/2.7.x/docs/core/gconv"}}'),d=c("785893"),t=c("250065");let n={slug:"/docs/core/gvalid-faq",title:"\u6570\u636E\u6821\u9A8C-\u5E38\u89C1\u95EE\u9898",sidebar_position:9,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","\u6570\u636E\u6821\u9A8C","Struct\u9ED8\u8BA4\u503C","required\u89C4\u5219","\u6307\u9488\u7C7B\u578B","\u7EC4\u5408\u6821\u9A8C\u89C4\u5219","Assoc\u8054\u5408\u6821\u9A8C","API\u8F93\u5165\u8F93\u51FA","Server"],description:"\u5728\u4F7F\u7528GoFrame\u6846\u67B6\u8FDB\u884C\u6570\u636E\u6821\u9A8C\u65F6\uFF0CStruct\u9ED8\u8BA4\u503C\u5BF9required\u89C4\u5219\u7684\u5F71\u54CD\u53CA\u5176\u89E3\u51B3\u65B9\u6848\uFF0C\u5305\u62EC\u4F7F\u7528\u6307\u9488\u7C7B\u578B\u7ED5\u8FC7\u9ED8\u8BA4\u503C\u5F71\u54CD\u3001\u7EC4\u5408\u6821\u9A8C\u89C4\u5219\u4EE5\u53CAAssoc\u8054\u5408\u6821\u9A8C\u65B9\u6CD5\uFF0C\u4EE5\u786E\u4FDD\u6821\u9A8C\u51C6\u786E\u6027\u3002"},o=void 0,i={},l=[{value:"<code>Struct</code> \u9ED8\u8BA4\u503C\u5BF9 <code>required</code> \u89C4\u5219\u7684\u5F71\u54CD",id:"struct-\u9ED8\u8BA4\u503C\u5BF9-required-\u89C4\u5219\u7684\u5F71\u54CD",level:2}];function a(e){let r={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(r.h2,{id:"struct-\u9ED8\u8BA4\u503C\u5BF9-required-\u89C4\u5219\u7684\u5F71\u54CD",children:[(0,d.jsx)(r.code,{children:"Struct"})," \u9ED8\u8BA4\u503C\u5BF9 ",(0,d.jsx)(r.code,{children:"required"})," \u89C4\u5219\u7684\u5F71\u54CD"]}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.code,{children:"Struct"})," \u7684\u5C5E\u6027\u4F1A\u6709 ",(0,d.jsx)(r.code,{children:"\u9ED8\u8BA4\u503C"}),"\uFF0C\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u4F1A\u5F15\u8D77 ",(0,d.jsx)(r.code,{children:"required"})," \u89C4\u5219\u7684\u5931\u6548\u3002\u4F8B\u5982\uFF1A"]}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-go",children:'type User struct {\n    Name string `v:"required"`\n    Age  uint   `v:"required"`\n}\n'})}),"\n",(0,d.jsxs)(r.p,{children:["\u5728\u8BE5\u7ED3\u6784\u4F53\u6821\u9A8C\u4E2D\uFF0C ",(0,d.jsx)(r.code,{children:"Age"})," \u5C5E\u6027\u7684 ",(0,d.jsx)(r.code,{children:"required"})," \u6821\u9A8C\u5C06\u4F1A\u5931\u6548\uFF0C\u56E0\u4E3A ",(0,d.jsx)(r.code,{children:"Age"})," \u5373\u4FBF\u6CA1\u6709\u8F93\u5165\u4E5F\u4F1A\u6709\u9ED8\u8BA4\u503C ",(0,d.jsx)(r.code,{children:"0"}),"\u3002"]}),"\n",(0,d.jsxs)(r.p,{children:["\u8FD9\u91CC\u6709 ",(0,d.jsx)(r.strong,{children:"\u4E09\u79CD"})," \u89E3\u51B3\u65B9\u6848\uFF1A"]}),"\n",(0,d.jsxs)(r.ol,{children:["\n",(0,d.jsxs)(r.li,{children:["\u5C06\u5C5E\u6027\u6539\u4E3A\u6307\u9488\u7C7B\u578B\uFF0C\u4F8B\u5982 ",(0,d.jsx)(r.code,{children:"*int"}),"\u3001 ",(0,d.jsx)(r.code,{children:"*float64"}),"\u3001 ",(0,d.jsx)(r.code,{children:"*g.Var"})," \u7B49\uFF0C\u901A\u8FC7\u6307\u9488\u7C7B\u578B\u9ED8\u8BA4\u503C\u4E3A ",(0,d.jsx)(r.code,{children:"nil"})," \u7684\u7279\u70B9\u7ED5\u8FC7\u4E86\u8FD9\u4E2A\u95EE\u9898\u3002"]}),"\n",(0,d.jsxs)(r.li,{children:["\u4F7F\u7528\u7EC4\u5408\u6821\u9A8C\u89C4\u5219\u6765\u5F25\u8865\u9ED8\u8BA4\u503C\u5BF9 ",(0,d.jsx)(r.code,{children:"required"})," \u89C4\u5219\u7684\u5F71\u54CD\uFF0C\u4F8B\u5982\u4EE5\u4E0A\u793A\u4F8B\u4E2D\u5C06 ",(0,d.jsx)(r.code,{children:"Age"})," \u5C5E\u6027\u7684\u6821\u9A8C\u89C4\u5219\u4FEE\u6539\u4E3A ",(0,d.jsx)(r.code,{children:"required|min:1"})," \u5C06\u80FD\u8FBE\u5230\u4E1A\u52A1\u6821\u9A8C\u7684\u6548\u679C\u3002"]}),"\n",(0,d.jsxs)(r.li,{children:["\u4F7F\u7528 ",(0,d.jsx)(r.code,{children:"Struct"})," \u6821\u9A8C\u7684 ",(0,d.jsx)(r.code,{children:"Assoc"})," \u8054\u5408\u6821\u9A8C\u65B9\u6CD5\u8BBE\u7F6E\u8054\u5408\u6821\u9A8C\u53C2\u6570\uFF0C\u5728\u6821\u9A8C ",(0,d.jsx)(r.code,{children:"Struct"})," \u7C7B\u578B\u53C2\u6570\u65F6\uFF0C\u53C2\u6570\u503C\u5C06\u4EE5 ",(0,d.jsx)(r.code,{children:"Assoc"})," \u65B9\u6CD5\u4E2D\u7ED9\u5B9A\u7684\u53C2\u6570\u4E3A\u51C6\u6267\u884C\u6821\u9A8C\u3002\u5982\u679C\u4F7F\u7528\u6846\u67B6\u7684 ",(0,d.jsx)(r.code,{children:"Server"}),"\uFF0C\u91C7\u7528\u7ED3\u6784\u5316\u7684 ",(0,d.jsx)(r.code,{children:"API"})," \u8F93\u5165\u8F93\u51FA\uFF08 ",(0,d.jsx)(r.code,{children:"XxxReq/XxxRes"}),"\uFF09\uFF0C\u90A3\u4E48 ",(0,d.jsx)(r.code,{children:"Server"})," \u5C06\u4F1A\u81EA\u52A8\u8C03\u7528 ",(0,d.jsx)(r.code,{children:"Assoc"})," \u6267\u884C\u6821\u9A8C\uFF0C\u5F00\u53D1\u8005\u65E0\u9700\u62C5\u5FC3\u9ED8\u8BA4\u503C\u7684\u5F71\u54CD\u3002\u6587\u6863\u94FE\u63A5\uFF1A ",(0,d.jsx)(r.a,{href:"/2.7.x/docs/core/gvalid-parameter-type-struct-assoc",children:"Struct\u6821\u9A8C-Assoc\u5173\u8054"})]}),"\n"]})]})}function u(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,r,c){c.d(r,{Z:function(){return o},a:function(){return n}});var s=c(667294);let d={},t=s.createContext(d);function n(e){let r=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);