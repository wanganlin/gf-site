"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["78270"],{106488:function(e,n,i){i.r(n),i.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>x,assets:()=>t,toc:()=>o,frontMatter:()=>c});var r=JSON.parse('{"id":"\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u5B9A\u65F6\u5668-gtimer/\u5B9A\u65F6\u5668-gtimer","title":"\u5B9A\u65F6\u5668-gtimer","description":"\u57FA\u672C\u4ECB\u7ECD","source":"@site/versioned_docs/version-2.1.x/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u5B9A\u65F6\u5668-gtimer/\u5B9A\u65F6\u5668-gtimer.md","sourceDirName":"\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u5B9A\u65F6\u5668-gtimer","slug":"/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u5B9A\u65F6\u5668-gtimer/","permalink":"/2.1.x/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u5B9A\u65F6\u5668-gtimer/","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.1.x/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u5B9A\u65F6\u5668-gtimer/\u5B9A\u65F6\u5668-gtimer.md","tags":[],"version":"2.1.x","lastUpdatedBy":"John","lastUpdatedAt":1731404158000,"sidebarPosition":0,"frontMatter":{"title":"\u5B9A\u65F6\u5668-gtimer","sidebar_position":0,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u6B63\u5219\u8868\u8FBE\u5F0F-\u65B9\u6CD5\u4ECB\u7ECD","permalink":"/2.1.x/\u7EC4\u4EF6\u5217\u8868/\u6587\u672C\u5904\u7406/\u6B63\u5219\u8868\u8FBE\u5F0F-gregex/\u6B63\u5219\u8868\u8FBE\u5F0F-\u65B9\u6CD5\u4ECB\u7ECD"},"next":{"title":"\u5B9A\u65F6\u5668-\u57FA\u672C\u4F7F\u7528","permalink":"/2.1.x/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u5B9A\u65F6\u5668-gtimer/\u5B9A\u65F6\u5668-\u57FA\u672C\u4F7F\u7528"}}'),s=i("785893"),d=i("250065");let c={title:"\u5B9A\u65F6\u5668-gtimer",sidebar_position:0,hide_title:!0},l=void 0,t={},o=[{value:"\u57FA\u672C\u4ECB\u7ECD",id:"\u57FA\u672C\u4ECB\u7ECD",level:2},{value:"\u9ED8\u8BA4\u5B9A\u65F6\u5668",id:"\u9ED8\u8BA4\u5B9A\u65F6\u5668",level:2},{value:"\u4E0E <code>gcron</code> \u533A\u522B",id:"\u4E0E-gcron-\u533A\u522B",level:2}];function h(e){let n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u57FA\u672C\u4ECB\u7ECD",children:"\u57FA\u672C\u4ECB\u7ECD"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"gtimer"})," \u662F\u4E00\u4E2A\u5E76\u53D1\u5B89\u5168\u7684\u9AD8\u6027\u80FD\u5B9A\u65F6\u5668\uFF0C\u7C7B\u4F3C\u4E8E ",(0,s.jsx)(n.code,{children:"Java"})," \u7684 ",(0,s.jsx)(n.code,{children:"Timer"}),"\u3002 ",(0,s.jsx)(n.code,{children:"gtimer"})," \u5E95\u5C42\u91C7\u7528\u4E86\u4F18\u5148\u7EA7\u961F\u5217\uFF08 ",(0,s.jsx)(n.code,{children:"PriorityQueue"}),"\uFF09\u5B9E\u73B0\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u4F7F\u7528\u573A\u666F"}),"\uFF1A"]}),"\n",(0,s.jsx)(n.p,{children:"\u4EFB\u4F55\u5B9A\u65F6\u4EFB\u52A1\u573A\u666F\uFF0C\u5927\u6279\u91CF\u5B9A\u65F6\u4EFB\u52A1/\u5EF6\u8FDF\u4EFB\u52A1\u7684\u573A\u666F\uFF0C\u8D85\u65F6\u63A7\u5236/\u9891\u7387\u63A7\u5236\u7684\u4E1A\u52A1\u573A\u666F\uFF0C\u5BF9\u4E8E\u5B9A\u65F6\u65F6\u95F4\u51C6\u786E\u5EA6\u8981\u6C42\u4E0D\u9AD8\u7684\u4E1A\u52A1\u573A\u666F\u3002"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u6CE8\u610F\u4E8B\u9879"}),"\uFF1A"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u4EFB\u4F55\u7684\u5B9A\u65F6\u4EFB\u52A1\u90FD\u662F\u6709\u8BEF\u5DEE\u7684\uFF0C\u5728\u5B9A\u65F6\u95F4\u9694\u6BD4\u8F83\u5927\uFF0C\u6216\u8005\u5E76\u53D1\u91CF\u5927\uFF0C\u8D1F\u8F7D\u8F83\u9AD8\u7684\u7CFB\u7EDF\u4E2D\u5C24\u5176\u660E\u663E\uFF0C\u5177\u4F53\u8BF7\u53C2\u8003\uFF1A ",(0,s.jsx)(n.a,{href:"https://github.com/golang/go/issues/14410",children:"https://github.com/golang/go/issues/14410"})]}),"\n",(0,s.jsxs)(n.li,{children:["\u5B9A\u65F6\u95F4\u9694\u4E0D\u4F1A\u8003\u8651\u4EFB\u52A1\u7684\u6267\u884C\u65F6\u95F4\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u4E00\u9879\u5DE5\u4F5C\u9700\u8981 ",(0,s.jsx)(n.code,{children:"3"})," \u5206\u949F\u624D\u80FD\u6267\u884C\u5B8C\u6210\uFF0C\u5E76\u4E14\u8BA1\u5212\u6BCF\u9694 ",(0,s.jsx)(n.code,{children:"5"})," \u5206\u949F\u8FD0\u884C\u4E00\u6B21\uFF0C\u90A3\u4E48\u6BCF\u6B21\u4EFB\u52A1\u4E4B\u95F4\u53EA\u6709 ",(0,s.jsx)(n.code,{children:"2"})," \u5206\u949F\u7684\u7A7A\u95F2\u65F6\u95F4\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u9700\u8981\u6CE8\u610F\u7684\u662F ",(0,s.jsx)(n.strong,{children:"\u5355\u4F8B\u6A21\u5F0F"})," \u8FD0\u884C\u7684\u5B9A\u65F6\u4EFB\u52A1\uFF0C\u4EFB\u52A1\u7684\u6267\u884C\u65F6\u95F4\u4F1A\u5F71\u54CD\u8BE5\u4EFB\u52A1\u4E0B\u4E00\u6B21\u6267\u884C\u7684 ",(0,s.jsx)(n.strong,{children:"\u5F00\u59CB\u65F6\u95F4"}),"\u3002\u4F8B\u5982\uFF1A\u4E00\u4E2A\u6BCF\u95F4\u9694 ",(0,s.jsx)(n.code,{children:"1"})," \u79D2\u6267\u884C\u7684\u4EFB\u52A1\uFF0C\u8FD0\u884C\u8017\u65F6\u4E3A ",(0,s.jsx)(n.code,{children:"1"})," \u79D2\uFF0C\u90A3\u4E48\u5728 ",(0,s.jsx)(n.strong,{children:"\u7B2C1\u79D2"})," \u5F00\u59CB\u8FD0\u884C\u540E\uFF0C\u4E0B\u4E00\u6B21\u4EFB\u52A1\u5C06\u4F1A\u5728 ",(0,s.jsx)(n.strong,{children:"\u7B2C3\u79D2"})," \u5F00\u59CB\u6267\u884C\u3002\u56E0\u4E3A\u4E2D\u95F4\u6709\u4E00\u6B21\u8FD0\u884C\u68C0\u67E5\u65F6\u53D1\u73B0\u6709\u5F53\u524D\u4EFB\u52A1\u6B63\u5728\u8FDB\u884C\uFF0C\u56E0\u6B64\u9000\u51FA\u7B49\u5F85\u4E0B\u4E00\u6B21\u6267\u884C\u68C0\u67E5\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u4F7F\u7528\u65B9\u5F0F\uFF1A"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/os/gtimer"\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u63A5\u53E3\u6587\u6863"}),"\uFF1A"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/os/gtimer",children:"https://pkg.go.dev/github.com/gogf/gf/v2/os/gtimer"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u7B80\u8981\u8BF4\u660E\uFF1A"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"New"})," \u65B9\u6CD5\u7528\u4E8E\u521B\u5EFA\u81EA\u5B9A\u4E49\u7684\u4EFB\u52A1\u5B9A\u65F6\u5668\u5BF9\u8C61\uFF0C\u5E76\u53EF\u5728\u521B\u5EFA\u65F6\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"interval"})," \u7684 ",(0,s.jsx)(n.code,{children:"TimerOptions"}),"\u53C2\u6570\u6307\u5B9A\u5B9A\u65F6\u5668\u7684\u6700\u5C0F ",(0,s.jsx)(n.code,{children:"tick"})," \u65F6\u95F4\u95F4\u9694\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Add"})," \u65B9\u6CD5\u7528\u4E8E\u6DFB\u52A0\u5B9A\u65F6\u4EFB\u52A1\uFF0C\u5176\u4E2D\uFF1A","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"interval"})," \u53C2\u6570\u7528\u4E8E\u6307\u5B9A\u65B9\u6CD5\u7684\u6267\u884C\u7684\u65F6\u95F4\u95F4\u9694\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"job"})," \u53C2\u6570\u4E3A\u9700\u8981\u6267\u884C\u7684\u4EFB\u52A1\u65B9\u6CD5\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"AddEntry"})," \u65B9\u6CD5\u6DFB\u52A0\u5B9A\u65F6\u4EFB\u52A1\uFF0C\u652F\u6301\u66F4\u591A\u53C2\u6570\u7684\u63A7\u5236\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"AddSingleton"})," \u65B9\u6CD5\u7528\u4E8E\u6DFB\u52A0 ",(0,s.jsx)(n.strong,{children:"\u5355\u4F8B"})," \u5B9A\u65F6\u4EFB\u52A1\uFF0C\u5373\u540C\u65F6\u53EA\u80FD\u6709\u4E00\u4E2A\u8BE5\u4EFB\u52A1\u6B63\u5728\u8FD0\u884C\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"AddOnce"})," \u65B9\u6CD5\u7528\u4E8E\u6DFB\u52A0\u53EA\u8FD0\u884C\u4E00\u6B21\u7684\u5B9A\u65F6\u4EFB\u52A1\uFF0C\u5F53\u8FD0\u884C\u4E00\u6B21\u6570\u540E\u8BE5\u5B9A\u65F6\u4EFB\u52A1\u81EA\u52A8\u9500\u6BC1\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"AddTimes"})," \u65B9\u6CD5\u7528\u4E8E\u6DFB\u52A0\u8FD0\u884C\u6307\u5B9A\u6B21\u6570\u7684\u5B9A\u65F6\u4EFB\u52A1\uFF0C\u5F53\u8FD0\u884C ",(0,s.jsx)(n.code,{children:"times"})," \u6B21\u6570\u540E\u8BE5\u5B9A\u65F6\u4EFB\u52A1\u81EA\u52A8\u9500\u6BC1\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Search"})," \u65B9\u6CD5\u7528\u4E8E\u6839\u636E\u540D\u79F0\u8FDB\u884C\u5B9A\u65F6\u4EFB\u52A1\u641C\u7D22(\u8FD4\u56DE\u5B9A\u65F6\u4EFB\u52A1 ",(0,s.jsx)(n.code,{children:"*Entry"})," \u5BF9\u8C61\u6307\u9488)\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Start"})," \u65B9\u6CD5\u7528\u4E8E\u542F\u52A8\u5B9A\u65F6\u5668(\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"New"})," \u521B\u5EFA\u5B9A\u65F6\u5668\u65F6\u4F1A\u81EA\u52A8\u542F\u52A8)\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Stop"})," \u65B9\u6CD5\u7528\u4E8E\u505C\u6B62\u5B9A\u65F6\u5668\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Close"})," \u65B9\u6CD5\u7528\u4E8E\u5173\u95ED\u5B9A\u65F6\u5668\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9ED8\u8BA4\u5B9A\u65F6\u5668",children:"\u9ED8\u8BA4\u5B9A\u65F6\u5668"}),"\n",(0,s.jsxs)(n.p,{children:["\u5927\u90E8\u5206\u7684\u573A\u666F\u4E0B\u4F7F\u7528\u9ED8\u8BA4\u7684\u5B9A\u65F6\u5668\u5373\u53EF\u3002\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"gtimer"})," \u7684\u9ED8\u8BA4\u5B9A\u65F6\u5668\u65F6\uFF0C\u9ED8\u8BA4\u7684\u95F4\u9694\u65F6\u95F4\u4E3A ",(0,s.jsx)(n.code,{children:"100ms"}),"\uFF0C\u56E0\u6B64\u7406\u8BBA\u7684\u65F6\u95F4\u95F4\u9694\u8BEF\u5DEE\u8303\u56F4\u4E3A ",(0,s.jsx)(n.code,{children:"0~100ms"}),"\u3002\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u4E24\u79CD\u65B9\u5F0F\u4FEE\u6539\u9ED8\u8BA4\u7684\u5B9A\u65F6\u5668\u53C2\u6570\uFF1A"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u4F7F\u7528\u542F\u52A8\u53C2\u6570","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gf.gtimer.interval=50"}),": \u4FEE\u6539\u9ED8\u8BA4\u7684\u65F6\u95F4\u523B\u5EA6\u4E3A ",(0,s.jsx)(n.code,{children:"50\u6BEB\u79D2"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u4F7F\u7528\u73AF\u5883\u53D8\u91CF","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"GF_GTIMER_INTERVAL=50"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"\u4E0E-gcron-\u533A\u522B",children:["\u4E0E ",(0,s.jsx)(n.code,{children:"gcron"})," \u533A\u522B"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5177\u4F53\u8BF7\u67E5\u770B\u7AE0\u8282 ",(0,s.jsx)(n.a,{href:"/2.1.x/%E7%BB%84%E4%BB%B6%E5%88%97%E8%A1%A8/%E7%B3%BB%E7%BB%9F%E7%9B%B8%E5%85%B3/%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1-gcron/%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1-gcron%E4%B8%8Egtimer",children:"\u5B9A\u65F6\u4EFB\u52A1-gcron\u4E0Egtimer"})]})]})}function x(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return c}});var r=i(667294);let s={},d=r.createContext(s);function c(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);