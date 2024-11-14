"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["89375"],{968033:function(e,t,d){d.r(t),d.d(t,{metadata:()=>s,contentTitle:()=>i,default:()=>x,assets:()=>l,toc:()=>h,frontMatter:()=>c});var s=JSON.parse('{"id":"docs/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u76D1\u63A7\u6307\u6807","title":"HTTPClient-\u76D1\u63A7\u6307\u6807","description":"HTTP\u5BA2\u6237\u7AEF\u7684\u76D1\u63A7\u6307\u6807\u529F\u80FD\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u662F\u5173\u95ED\u72B6\u6001\uFF0C\u4EE5\u514D\u5F71\u54CD\u6027\u80FD\u3002\u5B83\u63D0\u4F9B\u4E86\u591A\u79CD\u6307\u6807\u4F9B\u7528\u6237\u53C2\u8003\uFF0C\u5982\u8BF7\u6C42\u6267\u884C\u7684\u65F6\u95F4\u5F00\u9500\u3001\u8FDE\u63A5\u521B\u5EFA\u65F6\u95F4\u4EE5\u53CA\u8BF7\u6C42\u7684\u5B57\u8282\u603B\u5927\u5C0F\u7B49\uFF0C\u53EA\u6709\u5728metric\u7279\u6027\u5168\u5C40\u5F00\u542F\u65F6\u624D\u4F1A\u542F\u7528\u8FD9\u4E9B\u6307\u6807\uFF0C\u5E2E\u52A9\u7528\u6237\u66F4\u597D\u5730\u8FDB\u884C\u6027\u80FD\u5206\u6790\u3002","source":"@site/versioned_docs/version-2.7.x/docs/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u76D1\u63A7\u6307\u6807.md","sourceDirName":"docs/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient","slug":"/docs/web/http-client-metrics","permalink":"/2.7.x/docs/web/http-client-metrics","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u76D1\u63A7\u6307\u6807.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":10,"frontMatter":{"slug":"/docs/web/http-client-metrics","title":"HTTPClient-\u76D1\u63A7\u6307\u6807","sidebar_position":10,"hide_title":true,"keywords":["HTTP\u5BA2\u6237\u7AEF","\u76D1\u63A7\u6307\u6807","\u6027\u80FD\u4F18\u5316","\u8BF7\u6C42\u65F6\u95F4","GoFrame","\u8FDE\u63A5\u65F6\u95F4","\u8BF7\u6C42\u603B\u6570","\u8BF7\u6C42\u5927\u5C0F","GoFrame\u6846\u67B6","\u8FD4\u56DE\u5927\u5C0F"],"description":"HTTP\u5BA2\u6237\u7AEF\u7684\u76D1\u63A7\u6307\u6807\u529F\u80FD\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u662F\u5173\u95ED\u72B6\u6001\uFF0C\u4EE5\u514D\u5F71\u54CD\u6027\u80FD\u3002\u5B83\u63D0\u4F9B\u4E86\u591A\u79CD\u6307\u6807\u4F9B\u7528\u6237\u53C2\u8003\uFF0C\u5982\u8BF7\u6C42\u6267\u884C\u7684\u65F6\u95F4\u5F00\u9500\u3001\u8FDE\u63A5\u521B\u5EFA\u65F6\u95F4\u4EE5\u53CA\u8BF7\u6C42\u7684\u5B57\u8282\u603B\u5927\u5C0F\u7B49\uFF0C\u53EA\u6709\u5728metric\u7279\u6027\u5168\u5C40\u5F00\u542F\u65F6\u624D\u4F1A\u542F\u7528\u8FD9\u4E9B\u6307\u6807\uFF0C\u5E2E\u52A9\u7528\u6237\u66F4\u597D\u5730\u8FDB\u884C\u6027\u80FD\u5206\u6790\u3002"},"sidebar":"mainSidebar","previous":{"title":"HTTPClient-\u5E38\u89C1\u95EE\u9898","permalink":"/2.7.x/docs/web/http-client-faq"},"next":{"title":"\u5206\u9875\u7BA1\u7406","permalink":"/2.7.x/docs/web/paging"}}'),r=d("785893"),n=d("250065");let c={slug:"/docs/web/http-client-metrics",title:"HTTPClient-\u76D1\u63A7\u6307\u6807",sidebar_position:10,hide_title:!0,keywords:["HTTP\u5BA2\u6237\u7AEF","\u76D1\u63A7\u6307\u6807","\u6027\u80FD\u4F18\u5316","\u8BF7\u6C42\u65F6\u95F4","GoFrame","\u8FDE\u63A5\u65F6\u95F4","\u8BF7\u6C42\u603B\u6570","\u8BF7\u6C42\u5927\u5C0F","GoFrame\u6846\u67B6","\u8FD4\u56DE\u5927\u5C0F"],description:"HTTP\u5BA2\u6237\u7AEF\u7684\u76D1\u63A7\u6307\u6807\u529F\u80FD\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u662F\u5173\u95ED\u72B6\u6001\uFF0C\u4EE5\u514D\u5F71\u54CD\u6027\u80FD\u3002\u5B83\u63D0\u4F9B\u4E86\u591A\u79CD\u6307\u6807\u4F9B\u7528\u6237\u53C2\u8003\uFF0C\u5982\u8BF7\u6C42\u6267\u884C\u7684\u65F6\u95F4\u5F00\u9500\u3001\u8FDE\u63A5\u521B\u5EFA\u65F6\u95F4\u4EE5\u53CA\u8BF7\u6C42\u7684\u5B57\u8282\u603B\u5927\u5C0F\u7B49\uFF0C\u53EA\u6709\u5728metric\u7279\u6027\u5168\u5C40\u5F00\u542F\u65F6\u624D\u4F1A\u542F\u7528\u8FD9\u4E9B\u6307\u6807\uFF0C\u5E2E\u52A9\u7528\u6237\u66F4\u597D\u5730\u8FDB\u884C\u6027\u80FD\u5206\u6790\u3002"},i=void 0,l={},h=[{value:"\u6307\u6807\u5217\u8868",id:"\u6307\u6807\u5217\u8868",level:2},{value:"\u5C5E\u6027\u5217\u8868",id:"\u5C5E\u6027\u5217\u8868",level:2}];function o(e){let t={code:"code",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"HTTP"})," \u5BA2\u6237\u7AEF\u652F\u6301\u76D1\u63A7\u6307\u6807\u80FD\u529B\uFF0C\u9ED8\u8BA4\u662F\u5173\u95ED\u7684\u4E0D\u5F71\u54CD\u6027\u80FD\uFF0C\u53EA\u6709\u5728 ",(0,r.jsx)(t.code,{children:"metric"})," \u7279\u6027\u5168\u5C40\u5F00\u542F\u65F6\u8BE5\u7EC4\u4EF6\u624D\u4F1A\u9ED8\u8BA4\u5F00\u542F\u76D1\u63A7\u6307\u6807\u8BA1\u7B97\u548C\u751F\u6210\u529F\u80FD\u3002"]}),"\n",(0,r.jsx)(t.h2,{id:"\u6307\u6807\u5217\u8868",children:"\u6307\u6807\u5217\u8868"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"\u6307\u6807\u540D\u79F0"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"\u6307\u6807\u7C7B\u578B"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"\u6307\u6807\u5355\u4F4D"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"\u6307\u6807\u63CF\u8FF0"})})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"http.client.request.duration"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Histogram"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"ms"})}),(0,r.jsx)(t.td,{children:"\u5BA2\u6237\u7AEF\u8BF7\u6C42\u6267\u884C\u7684\u65F6\u95F4\u5F00\u9500\u3002"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"http.client.request.duration_total"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Counter"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"ms"})}),(0,r.jsx)(t.td,{children:"\u6BCF\u4E2A\u8BF7\u6C42\u4F7F\u7528\u7684\u603B\u65F6\u95F4\u5F00\u9500\u3002"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"http.client.connection.duration"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Histogram"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"ms"})}),(0,r.jsx)(t.td,{children:"\u521B\u5EFA\u8FDE\u63A5\u6240\u4F7F\u7528\u7684\u65F6\u95F4\u5F00\u9500\u3002"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"http.client.request.total"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Counter"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"\u5DF2\u7ECF\u6267\u884C\u5B8C\u6BD5\u7684\u8BF7\u6C42\u603B\u6570\u3002"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"http.client.request.active"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Gauge"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"\u5F53\u524D\u6B63\u5728\u5904\u7406\u7684\u8BF7\u6C42\u6570\u91CF\u3002"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"http.client.request.body_size"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Counter"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"bytes"})}),(0,r.jsx)(t.td,{children:"\u8BF7\u6C42\u7684\u5B57\u8282\u603B\u5927\u5C0F\u3002"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"http.client.response.body_size"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Counter"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"bytes"})}),(0,r.jsx)(t.td,{children:"\u8FD4\u56DE\u7684\u5B57\u8282\u603B\u5927\u5C0F\u3002"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"\u5C5E\u6027\u5217\u8868",children:"\u5C5E\u6027\u5217\u8868"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Label\u540D\u79F0"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Label\u63CF\u8FF0"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Label\u793A\u4F8B"})})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"server.address"})}),(0,r.jsx)(t.td,{children:"\u8BF7\u6C42\u7684\u76EE\u6807\u670D\u52A1\u5730\u5740\u3002\u53EF\u80FD\u662F\u57DF\u540D\u3001IP\u5730\u5740\u3002"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"goframe.org"}),(0,r.jsx)("br",{}),(0,r.jsx)(t.code,{children:"10.0.1.132"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"server.port"})}),(0,r.jsx)(t.td,{children:"\u8BF7\u6C42\u7684\u76EE\u6807\u670D\u52A1\u7AEF\u53E3\u3002"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"8000"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"http.request.method"})}),(0,r.jsx)(t.td,{children:"\u8BF7\u6C42\u7684\u65B9\u6CD5\u540D\u79F0\u3002"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"GET"}),";\xa0",(0,r.jsx)(t.code,{children:"POST"}),";\xa0",(0,r.jsx)(t.code,{children:"DELETE"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"http.response.status_code"})}),(0,r.jsxs)(t.td,{children:["\u5904\u7406\u8FD4\u56DE\u7684 ",(0,r.jsx)(t.code,{children:"HTTP"})," \u72B6\u6001\u7801\u3002"]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"200"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"url.schema"})}),(0,r.jsx)(t.td,{children:"\u4F7F\u7528\u7684\u8BF7\u6C42\u534F\u8BAE\u3002"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"http"}),(0,r.jsx)("br",{}),(0,r.jsx)(t.code,{children:"https"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"network.protocol.version"})}),(0,r.jsx)(t.td,{children:"\u8BF7\u6C42\u534F\u8BAE\u7248\u672C\u3002"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"1.0"}),(0,r.jsx)("br",{}),(0,r.jsx)(t.code,{children:"1.1"})]})]})]})]})]})}function x(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,t,d){d.d(t,{Z:function(){return i},a:function(){return c}});var s=d(667294);let r={},n=s.createContext(r);function c(e){let t=s.useContext(n);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);