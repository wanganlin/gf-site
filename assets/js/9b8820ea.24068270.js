"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["32975"],{346640:function(e,n,r){r.r(n),r.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>h,assets:()=>d,toc:()=>t,frontMatter:()=>c});var i=JSON.parse('{"id":"quick/\u5FEB\u901F\u5F00\u59CB/\u4E0B\u8F7D\u4E0E\u4F7F\u7528","title":"\u4E0B\u8F7D\u4E0E\u4F7F\u7528","description":"GoFrame\u6846\u67B6\u7684\u5FEB\u901F\u5F00\u59CB\u6307\u5357\u3002GoFrame\u662F\u4E00\u6B3E\u6A21\u5757\u5316\u3001\u4F4E\u8026\u5408\u8BBE\u8BA1\u7684\u5F00\u53D1\u6846\u67B6\uFF0C\u5305\u542B\u5E38\u7528\u57FA\u7840\u7EC4\u4EF6\u548C\u5F00\u53D1\u5DE5\u5177\uFF0C\u9002\u7528\u4E8E\u5B8C\u6574\u4E1A\u52A1\u9879\u76EE\u548C\u72EC\u7ACB\u7EC4\u4EF6\u5E93\u3002\u5185\u5BB9\u6DB5\u76D6GoFrame\u7684\u4E0B\u8F7D\u4E0E\u5B89\u88C5\u3001\u8FD0\u884C\u57FA\u672C\u64CD\u4F5C\uFF0C\u5E76\u4ECB\u7ECD\u5982\u4F55\u5F00\u53D1\u7B80\u6613Web Server\u63A5\u53E3\u5E94\u7528\u3002","source":"@site/docs/quick/\u5FEB\u901F\u5F00\u59CB/\u4E0B\u8F7D\u4E0E\u4F7F\u7528.md","sourceDirName":"quick/\u5FEB\u901F\u5F00\u59CB","slug":"/quick/install","permalink":"/quick/install","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/quick/\u5FEB\u901F\u5F00\u59CB/\u4E0B\u8F7D\u4E0E\u4F7F\u7528.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731548772000,"sidebarPosition":1,"frontMatter":{"slug":"/quick/install","title":"\u4E0B\u8F7D\u4E0E\u4F7F\u7528","hide_title":true,"sidebar_position":1,"keywords":["GoFrame","GoFrame\u6846\u67B6","\u5B89\u88C5GoFrame","\u6A21\u5757\u5316\u6846\u67B6","\u4F4E\u8026\u5408\u8BBE\u8BA1","Web Server\u63A5\u53E3\u5F00\u53D1","Go\u8BED\u8A00\u73AF\u5883","\u9879\u76EE\u6846\u67B6","\u57FA\u7840\u7EC4\u4EF6","HTTP Server"],"description":"GoFrame\u6846\u67B6\u7684\u5FEB\u901F\u5F00\u59CB\u6307\u5357\u3002GoFrame\u662F\u4E00\u6B3E\u6A21\u5757\u5316\u3001\u4F4E\u8026\u5408\u8BBE\u8BA1\u7684\u5F00\u53D1\u6846\u67B6\uFF0C\u5305\u542B\u5E38\u7528\u57FA\u7840\u7EC4\u4EF6\u548C\u5F00\u53D1\u5DE5\u5177\uFF0C\u9002\u7528\u4E8E\u5B8C\u6574\u4E1A\u52A1\u9879\u76EE\u548C\u72EC\u7ACB\u7EC4\u4EF6\u5E93\u3002\u5185\u5BB9\u6DB5\u76D6GoFrame\u7684\u4E0B\u8F7D\u4E0E\u5B89\u88C5\u3001\u8FD0\u884C\u57FA\u672C\u64CD\u4F5C\uFF0C\u5E76\u4ECB\u7ECD\u5982\u4F55\u5F00\u53D1\u7B80\u6613Web Server\u63A5\u53E3\u5E94\u7528\u3002"},"sidebar":"quickSidebar","previous":{"title":"\u5FEB\u901F\u5F00\u59CB","permalink":"/quick"},"next":{"title":"Hello World","permalink":"/quick/hello-world"}}'),o=r("785893"),s=r("250065");let c={slug:"/quick/install",title:"\u4E0B\u8F7D\u4E0E\u4F7F\u7528",hide_title:!0,sidebar_position:1,keywords:["GoFrame","GoFrame\u6846\u67B6","\u5B89\u88C5GoFrame","\u6A21\u5757\u5316\u6846\u67B6","\u4F4E\u8026\u5408\u8BBE\u8BA1","Web Server\u63A5\u53E3\u5F00\u53D1","Go\u8BED\u8A00\u73AF\u5883","\u9879\u76EE\u6846\u67B6","\u57FA\u7840\u7EC4\u4EF6","HTTP Server"],description:"GoFrame\u6846\u67B6\u7684\u5FEB\u901F\u5F00\u59CB\u6307\u5357\u3002GoFrame\u662F\u4E00\u6B3E\u6A21\u5757\u5316\u3001\u4F4E\u8026\u5408\u8BBE\u8BA1\u7684\u5F00\u53D1\u6846\u67B6\uFF0C\u5305\u542B\u5E38\u7528\u57FA\u7840\u7EC4\u4EF6\u548C\u5F00\u53D1\u5DE5\u5177\uFF0C\u9002\u7528\u4E8E\u5B8C\u6574\u4E1A\u52A1\u9879\u76EE\u548C\u72EC\u7ACB\u7EC4\u4EF6\u5E93\u3002\u5185\u5BB9\u6DB5\u76D6GoFrame\u7684\u4E0B\u8F7D\u4E0E\u5B89\u88C5\u3001\u8FD0\u884C\u57FA\u672C\u64CD\u4F5C\uFF0C\u5E76\u4ECB\u7ECD\u5982\u4F55\u5F00\u53D1\u7B80\u6613Web Server\u63A5\u53E3\u5E94\u7528\u3002"},l=void 0,d={},t=[{value:"\u9650\u5236",id:"\u9650\u5236",level:2},{value:"\u5B89\u88C5",id:"\u5B89\u88C5",level:2},{value:"\u8FD0\u884C",id:"\u8FD0\u884C",level:2}];function a(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["\u5927\u5BB6\u597D\uFF0C\u6B22\u8FCE\u8BBF\u95EE ",(0,o.jsx)(n.code,{children:"GoFrame"})," \u6846\u67B6\u7684\u5FEB\u901F\u5F00\u59CB\u7AE0\u8282\uFF01\n\u7531\u4E8E ",(0,o.jsx)(n.code,{children:"GoFrame"})," \u662F\u4E00\u6B3E\u6A21\u5757\u5316\u3001\u4F4E\u8026\u5408\u8BBE\u8BA1\u7684\u5F00\u53D1\u6846\u67B6\uFF0C\u5305\u542B\u4E86\u5E38\u7528\u7684\u57FA\u7840\u7EC4\u4EF6\u548C\u5F00\u53D1\u5DE5\u5177\uFF0C\u65E2\u53EF\u4EE5\u4F5C\u4E3A\u5B8C\u6574\u7684\u4E1A\u52A1\u9879\u76EE\u6846\u67B6\u4F7F\u7528\u4E5F\u53EF\u4EE5\u4F5C\u4E3A\u72EC\u7ACB\u7684\u7EC4\u4EF6\u5E93\u4F7F\u7528\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u6211\u4EEC\u672C\u7AE0\u8282\u4ECE\u6846\u67B6\u7684\u4E0B\u8F7D\u5B89\u88C5\u4F7F\u7528\u5F00\u59CB\uFF0C\u5230\u6307\u5BFC\u5927\u5BB6\u5B8C\u6210\u4E00\u4E2A\u8F83\u5B8C\u5584\u7684",(0,o.jsx)(n.code,{children:"Web Server"}),"\u63A5\u53E3\u5F00\u53D1\u3002"]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["\u5982\u679C\u60A8\u8FD8\u672A\u51C6\u5907\u597D",(0,o.jsx)(n.code,{children:"Go"}),"\u8BED\u8A00\u5F00\u53D1\u73AF\u5883\uFF0C\u5EFA\u8BAE\u60A8\u5148\u67E5\u9605\u73AF\u5883\u5B89\u88C5\u6587\u6863\uFF1A",(0,o.jsx)(n.a,{href:"/docs/install-go",children:"\u73AF\u5883\u5B89\u88C5"}),"\n\u4E86\u89E3\u4E00\u4E9B\u57FA\u7840\u7684",(0,o.jsx)(n.code,{children:"Go"}),"\u8BED\u8A00\u77E5\u8BC6\u518D\u8FDB\u884C\u4E0B\u4E00\u6B65\u3002"]})}),"\n",(0,o.jsx)(n.h2,{id:"\u9650\u5236",children:"\u9650\u5236"}),"\n",(0,o.jsxs)(n.p,{children:["\u4E3A\u4FDD\u8BC1\u6846\u67B6\u7684\u7A33\u5B9A\u6027\u548C\u5B89\u5168\u6027\uFF0C",(0,o.jsx)(n.code,{children:"GoFrame"}),"\u6846\u67B6\u8981\u6C42\u7684\u6700\u4F4E\u7684\u57FA\u7840",(0,o.jsx)(n.code,{children:"Go"}),"\u8BED\u8A00\u7248\u672C\u901A\u5E38\u4F1A\u6BD4\u6700\u65B0\u7684",(0,o.jsx)(n.code,{children:"Go"}),"\u8BED\u8A00\u7248\u672C\u4F4E",(0,o.jsx)(n.code,{children:"1~3"}),"\u4E2A\u7248\u672C\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u5F53\u524D\u6700\u65B0\u6846\u67B6\u7248\u672C\u8981\u6C42\u7684\u6700\u4F4E",(0,o.jsx)(n.code,{children:"Go"}),"\u8BED\u8A00\u7248\u672C\uFF1A"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"golang\u7248\u672C >= 1.20\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u5B89\u88C5",children:"\u5B89\u88C5"}),"\n",(0,o.jsx)(n.p,{children:"\u60A8\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u5B89\u88C5\u6846\u67B6\u6700\u65B0\u7248\u672C\uFF1A"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"go get -u -v github.com/gogf/gf/v2\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u901A\u5E38\uFF0C\u5728\u9879\u76EE\u7684 ",(0,o.jsx)(n.code,{children:"go.mod"})," \u4E2D\u5305\u542B\u5E76\u4F7F\u7528 ",(0,o.jsx)(n.code,{children:"GoFrame"})," \u7684\u6700\u65B0\u7248\u672C:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"require github.com/gogf/gf/v2 latest\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\u5982\u679C\u60A8\u4F7F\u7528\u7684\u662F",(0,o.jsx)(n.code,{children:"Goland IDE"}),"\uFF0C\u90A3\u4E48\u5728\u4FEE\u6539",(0,o.jsx)(n.code,{children:"go.mod"}),"\u540E\u7B49\u5F85\u7247\u523B\uFF0C",(0,o.jsx)(n.code,{children:"IDE"}),"\u5C06\u4F1A\u81EA\u52A8\u4E0B\u8F7D\u66F4\u65B0\u6700\u65B0\u7684",(0,o.jsx)(n.code,{children:"GoFrame"}),"\u7248\u672C\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:["\u5982\u679C\u60A8\u4F7F\u7528\u7684\u662F\u5176\u4ED6",(0,o.jsx)(n.code,{children:"IDE"}),"\uFF0C\u5728\u4FEE\u6539",(0,o.jsx)(n.code,{children:"go.mod"}),"\u540E\uFF0C\u4F60\u53EF\u4EE5\u5728\u9879\u76EE\u76EE\u5F55\u4E0B\u6267\u884C\uFF1A","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"go mod tidy\n"})}),"\n","\u4E0B\u8F7D\u66F4\u65B0\u6700\u65B0\u7684",(0,o.jsx)(n.code,{children:"GoFrame"}),"\u7248\u672C\u3002"]}),"\n"]})}),"\n",(0,o.jsx)(n.h2,{id:"\u8FD0\u884C",children:"\u8FD0\u884C"}),"\n",(0,o.jsx)(n.p,{children:"\u6211\u4EEC\u5C1D\u8BD5\u8FD0\u884C\u4EE5\u4E0B\u4EE3\u7801\uFF1A"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",metastring:'title="main.go"',children:'package main\n\nimport (\n    "fmt"\n\n    "github.com/gogf/gf/v2"\n)\n\nfunc main() {\n    fmt.Println("Hello GF:", gf.VERSION)\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u8FD9\u6BB5\u7B80\u5355\u7684\u4EE3\u7801\u793A\u4F8B\u662F\u6253\u5370\u5F53\u524D\u5F15\u5165\u7684",(0,o.jsx)(n.code,{children:"GoFrame"}),"\u6846\u67B6\u7248\u672C\u3002\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u6267\u884C\uFF1A"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"go run main.go\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u60A8\u5C06\u4F1A\u5728\u7EC8\u7AEF\u770B\u5230\uFF1A"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"Hello GF: v2.7.4\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u606D\u559C\u60A8\uFF01\u8FD9\u8868\u793A\u60A8\u5DF2\u7ECF\u6210\u529F\u5F15\u7528\u4E86",(0,o.jsx)(n.code,{children:"GoFrame"}),"\u5230\u5F53\u524D\u9879\u76EE\u4E2D\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u4E0B\u4E00\u6B65\uFF0C\u6211\u4EEC\u5C06\u4F7F\u7528",(0,o.jsx)(n.code,{children:"GoFrame"}),"\u5F00\u53D1\u4E00\u4E2A\u7B80\u5355\u7684",(0,o.jsx)(n.code,{children:"HTTP Server"}),"\u670D\u52A1\u3002"]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return c}});var i=r(667294);let o={},s=i.createContext(o);function c(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);