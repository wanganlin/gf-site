"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["57760"],{389397:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>u,assets:()=>c,toc:()=>l,frontMatter:()=>i});var t=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027/ORM\u9AD8\u7EA7\u7279\u6027-\u7A7A\u8DD1\u7279\u6027","title":"ORM\u9AD8\u7EA7\u7279\u6027-\u7A7A\u8DD1\u7279\u6027","description":"GoFrame\u6846\u67B6\u4E2D\u7684ORM\u7A7A\u8DD1\u7279\u6027\uFF0C\u8BE5\u7279\u6027\u901A\u8FC7DryRun\u914D\u7F6E\u9879\u542F\u7528\uFF0C\u53EF\u4EE5\u5728\u4E0D\u5F00\u542F\u5B9E\u9645\u5199\u5165\u3001\u66F4\u65B0\u3001\u5220\u9664\u64CD\u4F5C\u7684\u60C5\u51B5\u4E0B\u8C03\u8BD5SQL\u8BED\u53E5\u3002\u672C\u6587\u63D0\u4F9B\u4E86\u8BE6\u7EC6\u7684\u914D\u7F6E\u793A\u4F8B\u4EE5\u53CA\u5982\u4F55\u5229\u7528\u547D\u4EE4\u884C\u53C2\u6570\u548C\u73AF\u5883\u53D8\u91CF\u5168\u5C40\u4FEE\u6539\u8BE5\u7279\u6027\u7684\u4F7F\u7528\u65B9\u6CD5\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u9A8C\u8BC1SQL\u6267\u884C\u7684\u6B63\u786E\u6027\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027/ORM\u9AD8\u7EA7\u7279\u6027-\u7A7A\u8DD1\u7279\u6027.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027","slug":"/docs/core/gdb-senior-dry-run","permalink":"/2.7.x/docs/core/gdb-senior-dry-run","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027/ORM\u9AD8\u7EA7\u7279\u6027-\u7A7A\u8DD1\u7279\u6027.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":5,"frontMatter":{"slug":"/docs/core/gdb-senior-dry-run","title":"ORM\u9AD8\u7EA7\u7279\u6027-\u7A7A\u8DD1\u7279\u6027","sidebar_position":5,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","ORM","\u7A7A\u8DD1\u7279\u6027","DryRun","SQL","\u8C03\u8BD5\u6A21\u5F0F","\u65E5\u5FD7\u8F93\u51FA","\u6570\u636E\u5E93","\u914D\u7F6E\u793A\u4F8B"],"description":"GoFrame\u6846\u67B6\u4E2D\u7684ORM\u7A7A\u8DD1\u7279\u6027\uFF0C\u8BE5\u7279\u6027\u901A\u8FC7DryRun\u914D\u7F6E\u9879\u542F\u7528\uFF0C\u53EF\u4EE5\u5728\u4E0D\u5F00\u542F\u5B9E\u9645\u5199\u5165\u3001\u66F4\u65B0\u3001\u5220\u9664\u64CD\u4F5C\u7684\u60C5\u51B5\u4E0B\u8C03\u8BD5SQL\u8BED\u53E5\u3002\u672C\u6587\u63D0\u4F9B\u4E86\u8BE6\u7EC6\u7684\u914D\u7F6E\u793A\u4F8B\u4EE5\u53CA\u5982\u4F55\u5229\u7528\u547D\u4EE4\u884C\u53C2\u6570\u548C\u73AF\u5883\u53D8\u91CF\u5168\u5C40\u4FEE\u6539\u8BE5\u7279\u6027\u7684\u4F7F\u7528\u65B9\u6CD5\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u9A8C\u8BC1SQL\u6267\u884C\u7684\u6B63\u786E\u6027\u3002"},"sidebar":"mainSidebar","previous":{"title":"ORM\u9AD8\u7EA7\u7279\u6027-\u5B57\u6BB5\u6620\u5C04","permalink":"/2.7.x/docs/core/gdb-senior-fields-mapping"},"next":{"title":"ORM\u9AD8\u7EA7\u7279\u6027-\u7C7B\u578B\u8BC6\u522B","permalink":"/2.7.x/docs/core/gdb-senior-type-recognization"}}'),s=r("785893"),o=r("250065");let i={slug:"/docs/core/gdb-senior-dry-run",title:"ORM\u9AD8\u7EA7\u7279\u6027-\u7A7A\u8DD1\u7279\u6027",sidebar_position:5,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","ORM","\u7A7A\u8DD1\u7279\u6027","DryRun","SQL","\u8C03\u8BD5\u6A21\u5F0F","\u65E5\u5FD7\u8F93\u51FA","\u6570\u636E\u5E93","\u914D\u7F6E\u793A\u4F8B"],description:"GoFrame\u6846\u67B6\u4E2D\u7684ORM\u7A7A\u8DD1\u7279\u6027\uFF0C\u8BE5\u7279\u6027\u901A\u8FC7DryRun\u914D\u7F6E\u9879\u542F\u7528\uFF0C\u53EF\u4EE5\u5728\u4E0D\u5F00\u542F\u5B9E\u9645\u5199\u5165\u3001\u66F4\u65B0\u3001\u5220\u9664\u64CD\u4F5C\u7684\u60C5\u51B5\u4E0B\u8C03\u8BD5SQL\u8BED\u53E5\u3002\u672C\u6587\u63D0\u4F9B\u4E86\u8BE6\u7EC6\u7684\u914D\u7F6E\u793A\u4F8B\u4EE5\u53CA\u5982\u4F55\u5229\u7528\u547D\u4EE4\u884C\u53C2\u6570\u548C\u73AF\u5883\u53D8\u91CF\u5168\u5C40\u4FEE\u6539\u8BE5\u7279\u6027\u7684\u4F7F\u7528\u65B9\u6CD5\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u9A8C\u8BC1SQL\u6267\u884C\u7684\u6B63\u786E\u6027\u3002"},d=void 0,c={},l=[];function a(e){let n={code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ORM"})," \u7A7A\u8DD1\u53EF\u4EE5\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"DryRun"})," \u914D\u7F6E\u9879\u6765\u542F\u7528\uFF0C\u9ED8\u8BA4\u5173\u95ED\u3002\u5F53 ",(0,s.jsx)(n.code,{children:"ORM"})," \u7684\u7A7A\u8DD1\u7279\u6027\u5F00\u542F\u65F6\uFF0C\u8BFB\u53D6\u64CD\u4F5C\u5C06\u4F1A\u63D0\u4EA4\uFF0C\u800C\u5199\u5165\u3001\u66F4\u65B0\u3001\u5220\u9664\u64CD\u4F5C\u5C06\u4F1A\u88AB\u5FFD\u7565\u3002\u8BE5\u7279\u6027\u5F80\u5F80\u7ED3\u5408\u8C03\u8BD5\u6A21\u5F0F\u548C\u65E5\u5FD7\u8F93\u51FA\u4E00\u8D77\u4F7F\u7528\uFF0C\u7528\u4E8E\u6821\u9A8C\u5F53\u524D\u7684\u7A0B\u5E8F\uFF08\u7279\u522B\u662F\u811A\u672C\uFF09\u6267\u884C\u7684 ",(0,s.jsx)(n.code,{children:"SQL"})," \u662F\u5426\u7B26\u5408\u9884\u671F\u3002\u4EE5\u4E0B\u662F\u4E00\u4E2A\u5F00\u542F\u4E86\u7A7A\u8DD1\u7279\u6027\u7684\u914D\u7F6E\u793A\u4F8B\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'database:\n  default:\n  - link:   "mysql:root:12345678@tcp(127.0.0.1:3306)/user"\n    debug:  true\n    dryRun: true\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u7A7A\u8DD1\u7279\u6027\u4E5F\u53EF\u4EE5\u901A\u8FC7\u547D\u4EE4\u884C\u53C2\u6570\u6216\u8005\u73AF\u5883\u53D8\u91CF\u5168\u5C40\u4FEE\u6539\uFF1A"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u547D\u4EE4\u884C\u542F\u52A8\u53C2\u6570 - ",(0,s.jsx)(n.code,{children:"gf.gdb.dryrun=true"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u6307\u5B9A\u7684\u73AF\u5883\u53D8\u91CF - ",(0,s.jsx)(n.code,{children:"GF_GDB_DRYRUN=true"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u4F8B\u5982\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ ./app --gf.gdb.dryrun=true\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ ./app --gf.gdb.dryrun true\n"})})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return i}});var t=r(667294);let s={},o=t.createContext(s);function i(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);