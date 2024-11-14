"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["35455"],{433357:function(e,t,r){r.r(t),r.d(t,{metadata:()=>s,contentTitle:()=>i,default:()=>a,assets:()=>l,toc:()=>o,frontMatter:()=>h});var s=JSON.parse('{"id":"docs/\u5176\u4ED6\u8D44\u6599/Golang\u5B66\u4E60\u8D44\u6E90","title":"Golang\u5B66\u4E60\u8D44\u6E90","description":"\u5404\u7C7BGolang\u5B66\u4E60\u8D44\u6E90\uFF0C\u5305\u62EC\u56FD\u5185\u5916\u77E5\u540D\u535A\u5BA2\u5982Tony Bai\u3001\u9E1F\u7A9D\u3001Draveness\u548CDave Cheney\u7684\u6280\u672F\u6587\u7AE0\uFF0C\u6D89\u53CAGo\u8BED\u8A00\u7F16\u7A0B\u3001\u9AD8\u6027\u80FD\u7F16\u7A0B\u3001GoFrame\u6846\u67B6\u7B49\u4E3B\u9898\u3002\u540C\u65F6\u63D0\u4F9B\u56FD\u5185\u5916\u793E\u533A\u548C\u8BBA\u575B\uFF0C\u5982Segmentfault\u3001\u6398\u91D1\u548Creddit Go\u7B49\uFF0C\u4E3AGolang\u5F00\u53D1\u8005\u63D0\u4F9B\u4E30\u5BCC\u7684\u5B66\u4E60\u8D44\u6599\u3002","source":"@site/docs/docs/\u5176\u4ED6\u8D44\u6599/Golang\u5B66\u4E60\u8D44\u6E90.md","sourceDirName":"docs/\u5176\u4ED6\u8D44\u6599","slug":"/docs/other/golang-resource","permalink":"/docs/other/golang-resource","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u5176\u4ED6\u8D44\u6599/Golang\u5B66\u4E60\u8D44\u6E90.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":4,"frontMatter":{"slug":"/docs/other/golang-resource","title":"Golang\u5B66\u4E60\u8D44\u6E90","sidebar_position":4,"hide_title":true,"keywords":["Golang\u5B66\u4E60\u8D44\u6E90","Tony Bai\u535A\u5BA2","Go\u8BED\u8A00\u7F16\u7A0B","\u5206\u5E03\u5F0F\u7CFB\u7EDF","\u9AD8\u6027\u80FD\u7F16\u7A0B","GoFrame\u6846\u67B6","Golang\u8BBA\u575B","Dave Cheney\u5206\u6790","Uber\u6280\u672F\u535A\u5BA2","Go\u884C\u4E1A\u8D44\u8BAF"],"description":"\u5404\u7C7BGolang\u5B66\u4E60\u8D44\u6E90\uFF0C\u5305\u62EC\u56FD\u5185\u5916\u77E5\u540D\u535A\u5BA2\u5982Tony Bai\u3001\u9E1F\u7A9D\u3001Draveness\u548CDave Cheney\u7684\u6280\u672F\u6587\u7AE0\uFF0C\u6D89\u53CAGo\u8BED\u8A00\u7F16\u7A0B\u3001\u9AD8\u6027\u80FD\u7F16\u7A0B\u3001GoFrame\u6846\u67B6\u7B49\u4E3B\u9898\u3002\u540C\u65F6\u63D0\u4F9B\u56FD\u5185\u5916\u793E\u533A\u548C\u8BBA\u575B\uFF0C\u5982Segmentfault\u3001\u6398\u91D1\u548Creddit Go\u7B49\uFF0C\u4E3AGolang\u5F00\u53D1\u8005\u63D0\u4F9B\u4E30\u5BCC\u7684\u5B66\u4E60\u8D44\u6599\u3002"},"sidebar":"mainSidebar","previous":{"title":"GoFrame\u793E\u533A\u6559\u7A0B","permalink":"/docs/other/community-resource"},"next":{"title":"\u5982\u4F55\u4ECEv1\u6109\u5FEB\u5347\u7EA7\u5230v2","permalink":"/docs/other/happy-upgrading-from-v1-to-v2"}}'),n=r("785893"),d=r("250065");let h={slug:"/docs/other/golang-resource",title:"Golang\u5B66\u4E60\u8D44\u6E90",sidebar_position:4,hide_title:!0,keywords:["Golang\u5B66\u4E60\u8D44\u6E90","Tony Bai\u535A\u5BA2","Go\u8BED\u8A00\u7F16\u7A0B","\u5206\u5E03\u5F0F\u7CFB\u7EDF","\u9AD8\u6027\u80FD\u7F16\u7A0B","GoFrame\u6846\u67B6","Golang\u8BBA\u575B","Dave Cheney\u5206\u6790","Uber\u6280\u672F\u535A\u5BA2","Go\u884C\u4E1A\u8D44\u8BAF"],description:"\u5404\u7C7BGolang\u5B66\u4E60\u8D44\u6E90\uFF0C\u5305\u62EC\u56FD\u5185\u5916\u77E5\u540D\u535A\u5BA2\u5982Tony Bai\u3001\u9E1F\u7A9D\u3001Draveness\u548CDave Cheney\u7684\u6280\u672F\u6587\u7AE0\uFF0C\u6D89\u53CAGo\u8BED\u8A00\u7F16\u7A0B\u3001\u9AD8\u6027\u80FD\u7F16\u7A0B\u3001GoFrame\u6846\u67B6\u7B49\u4E3B\u9898\u3002\u540C\u65F6\u63D0\u4F9B\u56FD\u5185\u5916\u793E\u533A\u548C\u8BBA\u575B\uFF0C\u5982Segmentfault\u3001\u6398\u91D1\u548Creddit Go\u7B49\uFF0C\u4E3AGolang\u5F00\u53D1\u8005\u63D0\u4F9B\u4E30\u5BCC\u7684\u5B66\u4E60\u8D44\u6599\u3002"},i=void 0,l={},o=[{value:"\u4E00\u3001\u5927\u4F6C\u535A\u5BA2",id:"\u4E00\u5927\u4F6C\u535A\u5BA2",level:2},{value:"\u56FD\u5185",id:"\u56FD\u5185",level:3},{value:"\u56FD\u5916",id:"\u56FD\u5916",level:3},{value:"\u4E8C\u3001\u884C\u4E1A\u8D44\u8BAF",id:"\u4E8C\u884C\u4E1A\u8D44\u8BAF",level:2},{value:"\u56FD\u5185",id:"\u56FD\u5185-1",level:3},{value:"\u56FD\u5916",id:"\u56FD\u5916-1",level:3}];function c(e){let t={a:"a",h2:"h2",h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"\u4E00\u5927\u4F6C\u535A\u5BA2",children:"\u4E00\u3001\u5927\u4F6C\u535A\u5BA2"}),"\n",(0,n.jsx)(t.h3,{id:"\u56FD\u5185",children:"\u56FD\u5185"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"\u540D\u79F0"}),(0,n.jsx)(t.th,{children:"\u5730\u5740"}),(0,n.jsx)(t.th,{children:"\u5907\u6CE8"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Tony Bai"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://tonybai.com/",children:"https://tonybai.com/"})}),(0,n.jsx)(t.td,{children:"\u4E00\u4E2A\u7A0B\u5E8F\u5458\u7684\u5FC3\u8DEF\u5386\u7A0B"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"\u66F9\u6625\u6656"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://xargin.com/",children:"https://xargin.com/"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"\u9E1F\u7A9D"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://colobu.com/",children:"https://colobu.com/"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Draveness"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://draveness.me/",children:"https://draveness.me/"})}),(0,n.jsx)(t.td,{children:"Draveness\u5199\u4E86\u5F88\u591AGo\u548C\u5206\u5E03\u5F0F\u65B9\u9762\u7684\u6587\u7AE0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"\u714E\u9C7C"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"http://blog.eddycjy.com/",children:"http://blog.eddycjy.com/"})}),(0,n.jsx)(t.td,{children:"\u714E\u9C7C\u5927\u4F6C\u7684\u8FF7\u4E4B\u535A\u5BA2"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"\u67AF\u85E4"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"http://topgoer.com/",children:"http://topgoer.com/"})}),(0,n.jsx)(t.td,{children:"\u67AF\u85E4\u5927\u4F6C\u7684\u8D85\u5168Go\u77E5\u8BC6\u5E93"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"\u7801\u519C\u6843\u82B1\u6E90"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://qcrao.com/",children:"https://qcrao.com/"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"\u6781\u5BA2\u5154\u5154"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://geektutu.com/post/high-performance-go.html",children:"https://geektutu.com/post/high-performance-go.html"})}),(0,n.jsx)(t.td,{children:"Go \u8BED\u8A00\u9AD8\u6027\u80FD\u7F16\u7A0B"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"\u56FD\u5916",children:"\u56FD\u5916"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"\u540D\u79F0"}),(0,n.jsx)(t.th,{children:"\u5730\u5740"}),(0,n.jsx)(t.th,{children:"\u5907\u6CE8"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Dave Cheney"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://dave.cheney.net/",children:"https://dave.cheney.net/"})}),(0,n.jsx)(t.td,{children:"Dave \u5199\u4E86\u5F88\u591AGo\u65B9\u9762\u7684\u6DF1\u5165\u5206\u6790\u6587\u7AE0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"A Journey with Go"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://medium.com/a-journey-with-go",children:"https://medium.com/a-journey-with-go"})}),(0,n.jsx)(t.td,{children:"Everything about Go: internals, concurrency, compiler, or packages available in the Go community."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Uber"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://eng.uber.com/aresdb/",children:"https://eng.uber.com/aresdb/"})}),(0,n.jsx)(t.td,{children:"Uber \u56E2\u961F\u535A\u5BA2"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"William Kennedy"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://www.ardanlabs.com/blog/",children:"https://www.ardanlabs.com/blog/"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Reliable Insights"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://www.robustperception.io/blog",children:"https://www.robustperception.io/blog"})}),(0,n.jsx)(t.td,{children:"Prometheus\u76F8\u5173\u8D44\u8BAF"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Russ cox"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://research.swtch.com/",children:"https://research.swtch.com/"})}),(0,n.jsx)(t.td,{children:"Golang \u4F5C\u8005\u535A\u5BA2"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Jaana B. Dogan"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://rakyll.org/",children:"https://rakyll.org/"})}),(0,n.jsx)(t.td,{children:"Engineer at Google Cloud."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"\u4E8C\u884C\u4E1A\u8D44\u8BAF",children:"\u4E8C\u3001\u884C\u4E1A\u8D44\u8BAF"}),"\n",(0,n.jsx)(t.h3,{id:"\u56FD\u5185-1",children:"\u56FD\u5185"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"\u540D\u79F0"}),(0,n.jsx)(t.th,{children:"\u5730\u5740"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Segmentfault"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://segmentfault.com/t/golang",children:"https://segmentfault.com/t/golang"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"\u6398\u91D1"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://juejin.im/timeline/backend/Go",children:"https://juejin.im/timeline/backend/Go"})})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"\u56FD\u5916-1",children:"\u56FD\u5916"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"\u540D\u79F0"}),(0,n.jsx)(t.th,{children:"\u5730\u5740"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Go Dev"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://go.dev/",children:"https://go.dev/"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"reddit Go"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://www.reddit.com/r/golang/",children:"https://www.reddit.com/r/golang/"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Dev Go"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://dev.to/t/go",children:"https://dev.to/t/go"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"golangbridge"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://forum.golangbridge.org/",children:"https://forum.golangbridge.org/"})})]})]})]})]})}function a(e={}){let{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},250065:function(e,t,r){r.d(t,{Z:function(){return i},a:function(){return h}});var s=r(667294);let n={},d=s.createContext(n);function h(e){let t=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:h(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);