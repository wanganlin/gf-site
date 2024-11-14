"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["86011"],{18556:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>l,assets:()=>o,toc:()=>a,frontMatter:()=>d});var s=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-Scan","title":"ORM\u67E5\u8BE2-Scan","description":"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528Scan\u65B9\u6CD5\u8FDB\u884CORM\u67E5\u8BE2\u7684\u6280\u5DE7\uFF0C\u4E3B\u8981\u5305\u62EC\u5982\u4F55\u5C06\u67E5\u8BE2\u7ED3\u679C\u8F6C\u6362\u4E3Astruct\u5BF9\u8C61\u548Cstruct\u6570\u7EC4\u3002\u901A\u8FC7\u793A\u4F8B\u4EE3\u7801\u8BF4\u660E\u4E86Scan\u65B9\u6CD5\u7684\u7528\u6CD5\uFF0C\u5982\u5355\u6761\u8BB0\u5F55\u8F6C\u6362\u4E3Astruct\u5BF9\u8C61\u3001\u591A\u6761\u8BB0\u5F55\u8F6C\u6362\u4E3Astruct\u6570\u7EC4\u7B49\uFF0C\u5E2E\u52A9\u7528\u6237\u6709\u6548\u5730\u5904\u7406\u6570\u636E\u5E93\u67E5\u8BE2\u7ED3\u679C\u3002","source":"@site/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-Scan.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2","slug":"/docs/core/gdb-chaining-query-scan","permalink":"/docs/core/gdb-chaining-query-scan","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-Scan.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":3,"frontMatter":{"slug":"/docs/core/gdb-chaining-query-scan","title":"ORM\u67E5\u8BE2-Scan","sidebar_position":3,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","ORM\u67E5\u8BE2","Scan\u65B9\u6CD5","\u7ED3\u6784\u4F53\u8F6C\u6362","struct\u6570\u7EC4","gdb","\u67E5\u8BE2\u7ED3\u679C","\u7ED3\u6784\u4F53\u5BF9\u8C61","Go\u6846\u67B6"],"description":"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528Scan\u65B9\u6CD5\u8FDB\u884CORM\u67E5\u8BE2\u7684\u6280\u5DE7\uFF0C\u4E3B\u8981\u5305\u62EC\u5982\u4F55\u5C06\u67E5\u8BE2\u7ED3\u679C\u8F6C\u6362\u4E3Astruct\u5BF9\u8C61\u548Cstruct\u6570\u7EC4\u3002\u901A\u8FC7\u793A\u4F8B\u4EE3\u7801\u8BF4\u660E\u4E86Scan\u65B9\u6CD5\u7684\u7528\u6CD5\uFF0C\u5982\u5355\u6761\u8BB0\u5F55\u8F6C\u6362\u4E3Astruct\u5BF9\u8C61\u3001\u591A\u6761\u8BB0\u5F55\u8F6C\u6362\u4E3Astruct\u6570\u7EC4\u7B49\uFF0C\u5E2E\u52A9\u7528\u6237\u6709\u6548\u5730\u5904\u7406\u6570\u636E\u5E93\u67E5\u8BE2\u7ED3\u679C\u3002"},"sidebar":"mainSidebar","previous":{"title":"ORM\u67E5\u8BE2-Exist","permalink":"/docs/core/gdb-chaining-query-exist"},"next":{"title":"ORM\u67E5\u8BE2-ScanAndCount","permalink":"/docs/core/gdb-chaining-query-scan-and-count"}}'),c=r("785893"),t=r("250065");let d={slug:"/docs/core/gdb-chaining-query-scan",title:"ORM\u67E5\u8BE2-Scan",sidebar_position:3,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","ORM\u67E5\u8BE2","Scan\u65B9\u6CD5","\u7ED3\u6784\u4F53\u8F6C\u6362","struct\u6570\u7EC4","gdb","\u67E5\u8BE2\u7ED3\u679C","\u7ED3\u6784\u4F53\u5BF9\u8C61","Go\u6846\u67B6"],description:"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528Scan\u65B9\u6CD5\u8FDB\u884CORM\u67E5\u8BE2\u7684\u6280\u5DE7\uFF0C\u4E3B\u8981\u5305\u62EC\u5982\u4F55\u5C06\u67E5\u8BE2\u7ED3\u679C\u8F6C\u6362\u4E3Astruct\u5BF9\u8C61\u548Cstruct\u6570\u7EC4\u3002\u901A\u8FC7\u793A\u4F8B\u4EE3\u7801\u8BF4\u660E\u4E86Scan\u65B9\u6CD5\u7684\u7528\u6CD5\uFF0C\u5982\u5355\u6761\u8BB0\u5F55\u8F6C\u6362\u4E3Astruct\u5BF9\u8C61\u3001\u591A\u6761\u8BB0\u5F55\u8F6C\u6362\u4E3Astruct\u6570\u7EC4\u7B49\uFF0C\u5E2E\u52A9\u7528\u6237\u6709\u6548\u5730\u5904\u7406\u6570\u636E\u5E93\u67E5\u8BE2\u7ED3\u679C\u3002"},i=void 0,o={},a=[{value:"<code>struct</code> \u5BF9\u8C61",id:"struct-\u5BF9\u8C61",level:2},{value:"<code>struct</code> \u6570\u7EC4",id:"struct-\u6570\u7EC4",level:2}];function u(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Scan"})," \u65B9\u6CD5\u652F\u6301\u5C06\u67E5\u8BE2\u7ED3\u679C\u8F6C\u6362\u4E3A\u7ED3\u6784\u4F53\u6216\u8005\u7ED3\u6784\u4F53\u6570\u7EC4\uFF0C ",(0,c.jsx)(n.code,{children:"Scan"})," \u65B9\u6CD5\u5C06\u4F1A\u6839\u636E\u7ED9\u5B9A\u7684\u53C2\u6570\u7C7B\u578B\u81EA\u52A8\u8BC6\u522B\u6267\u884C\u7684\u8F6C\u6362\u7C7B\u578B\u3002"]}),"\n",(0,c.jsxs)(n.h2,{id:"struct-\u5BF9\u8C61",children:[(0,c.jsx)(n.code,{children:"struct"})," \u5BF9\u8C61"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Scan"})," \u652F\u6301\u5C06\u67E5\u8BE2\u7ED3\u679C\u8F6C\u6362\u4E3A\u4E00\u4E2A ",(0,c.jsx)(n.code,{children:"struct"})," \u5BF9\u8C61\uFF0C\u67E5\u8BE2\u7ED3\u679C\u5E94\u5F53\u662F\u7279\u5B9A\u7684\u4E00\u6761\u8BB0\u5F55\uFF0C\u5E76\u4E14 ",(0,c.jsx)(n.code,{children:"pointer"})," \u53C2\u6570\u5E94\u5F53\u4E3A ",(0,c.jsx)(n.code,{children:"struct"})," \u5BF9\u8C61\u7684\u6307\u9488\u5730\u5740\uFF08 ",(0,c.jsx)(n.code,{children:"*struct"})," \u6216\u8005 ",(0,c.jsx)(n.code,{children:"**struct"}),"\uFF09\uFF0C\u4F7F\u7528\u65B9\u5F0F\u4F8B\u5982\uFF1A"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'type User struct {\n    Id         int\n    Passport   string\n    Password   string\n    NickName   string\n    CreateTime *gtime.Time\n}\nuser := User{}\ng.Model("user").Where("id", 1).Scan(&user)\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u6216\u8005"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'var user = User{}\ng.Model("user").Where("id", 1).Scan(&user)\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u524D\u4E24\u79CD\u65B9\u5F0F\u90FD\u662F\u9884\u5148\u521D\u59CB\u5316\u5BF9\u8C61\uFF08\u63D0\u524D\u5206\u914D\u5185\u5B58\uFF09\uFF0C\u63A8\u8350\u7684\u65B9\u5F0F\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'var user *User\ng.Model("user").Where("id", 1).Scan(&user)\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u8FD9\u79CD\u65B9\u5F0F\u53EA\u6709\u5728\u67E5\u8BE2\u5230\u6570\u636E\u7684\u65F6\u5019\u624D\u4F1A\u6267\u884C\u521D\u59CB\u5316\u53CA\u5185\u5B58\u5206\u914D\u3002\u6CE8\u610F\u5728\u7528\u6CD5\u4E0A\u7684\u533A\u522B\uFF0C\u7279\u522B\u662F\u4F20\u9012\u53C2\u6570\u7C7B\u578B\u7684\u5DEE\u522B\uFF08\u524D\u4E24\u79CD\u65B9\u5F0F\u4F20\u9012\u7684\u53C2\u6570\u7C7B\u578B\u662F ",(0,c.jsx)(n.code,{children:"*User"}),"\uFF0C\u8FD9\u91CC\u4F20\u9012\u7684\u53C2\u6570\u7C7B\u578B\u5176\u5B9E\u662F ",(0,c.jsx)(n.code,{children:"**User"}),"\uFF09\u3002"]}),"\n",(0,c.jsxs)(n.h2,{id:"struct-\u6570\u7EC4",children:[(0,c.jsx)(n.code,{children:"struct"})," \u6570\u7EC4"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Scan"})," \u652F\u6301\u5C06\u591A\u6761\u67E5\u8BE2\u7ED3\u679C\u96C6\u8F6C\u6362\u4E3A\u4E00\u4E2A ",(0,c.jsx)(n.code,{children:"[]struct/[]*struct"})," \u6570\u7EC4\uFF0C\u67E5\u8BE2\u7ED3\u679C\u5E94\u5F53\u662F\u591A\u6761\u8BB0\u5F55\u7EC4\u6210\u7684\u7ED3\u679C\u96C6\uFF0C\u5E76\u4E14 ",(0,c.jsx)(n.code,{children:"pointer"})," \u5E94\u5F53\u4E3A\u6570\u7EC4\u7684\u6307\u9488\u5730\u5740\uFF0C\u4F7F\u7528\u65B9\u5F0F\u4F8B\u5982\uFF1A"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'var users []User\ng.Model("user").Scan(&users)\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u6216\u8005"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'var users []*User\ng.Model("user").Scan(&users)\n'})})]})}function l(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return d}});var s=r(667294);let c={},t=s.createContext(c);function d(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);