"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["23562"],{878685:function(e,t,r){r.r(t),r.d(t,{metadata:()=>n,contentTitle:()=>c,default:()=>m,assets:()=>a,toc:()=>d,frontMatter:()=>i});var n=JSON.parse('{"id":"docs/WEB\u670D\u52A1\u5F00\u53D1/\u6027\u80FD\u6D4B\u8BD5","title":"\u6027\u80FD\u6D4B\u8BD5","description":"GoFrame\u6846\u67B6\u4E2DHTTP Server\u7EC4\u4EF6\u7684\u6027\u80FD\u6D4B\u8BD5\u3002GoFrame\u6846\u67B6\u4EE5\u5176\u6A21\u5757\u5316\u548C\u4F4E\u8026\u5408\u7684\u8BBE\u8BA1\u7406\u5FF5\uFF0C\u4E3A\u5F00\u53D1\u8005\u63D0\u4F9B\u4E86\u5F3A\u5927\u7684\u57FA\u7840\u5F00\u53D1\u73AF\u5883\u3002\u672C\u6587\u901A\u8FC7\u4E2D\u7ACB\u7684\u7B2C\u4E09\u65B9\u6027\u80FD\u6D4B\u8BD5\u62A5\u544A\uFF0C\u5C55\u793A\u4E86HTTP Server\u7684\u5B9E\u9645\u6027\u80FD\u8868\u73B0\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u66F4\u597D\u5730\u7406\u89E3\u548C\u8BC4\u4F30GoFrame\u6846\u67B6\u7684\u80FD\u529B\u53CA\u4F18\u8D8A\u6027\u3002","source":"@site/docs/docs/WEB\u670D\u52A1\u5F00\u53D1/\u6027\u80FD\u6D4B\u8BD5.md","sourceDirName":"docs/WEB\u670D\u52A1\u5F00\u53D1","slug":"/docs/web/performance","permalink":"/en/docs/web/performance","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/WEB\u670D\u52A1\u5F00\u53D1/\u6027\u80FD\u6D4B\u8BD5.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":12,"frontMatter":{"slug":"/docs/web/performance","title":"\u6027\u80FD\u6D4B\u8BD5","sidebar_position":12,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","\u6027\u80FD\u6D4B\u8BD5","HTTP Server","\u6A21\u5757\u5316\u6846\u67B6","\u4F4E\u8026\u5408","\u57FA\u7840\u5F00\u53D1\u6846\u67B6","\u6027\u80FD\u62A5\u544A","\u7B2C\u4E09\u65B9\u6D4B\u8BD5","Go\u6846\u67B6"],"description":"GoFrame\u6846\u67B6\u4E2DHTTP Server\u7EC4\u4EF6\u7684\u6027\u80FD\u6D4B\u8BD5\u3002GoFrame\u6846\u67B6\u4EE5\u5176\u6A21\u5757\u5316\u548C\u4F4E\u8026\u5408\u7684\u8BBE\u8BA1\u7406\u5FF5\uFF0C\u4E3A\u5F00\u53D1\u8005\u63D0\u4F9B\u4E86\u5F3A\u5927\u7684\u57FA\u7840\u5F00\u53D1\u73AF\u5883\u3002\u672C\u6587\u901A\u8FC7\u4E2D\u7ACB\u7684\u7B2C\u4E09\u65B9\u6027\u80FD\u6D4B\u8BD5\u62A5\u544A\uFF0C\u5C55\u793A\u4E86HTTP Server\u7684\u5B9E\u9645\u6027\u80FD\u8868\u73B0\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u66F4\u597D\u5730\u7406\u89E3\u548C\u8BC4\u4F30GoFrame\u6846\u67B6\u7684\u80FD\u529B\u53CA\u4F18\u8D8A\u6027\u3002"},"sidebar":"mainSidebar","previous":{"title":"HTTPServer-\u76D1\u63A7\u6307\u6807","permalink":"/en/docs/web/senior-server-metrics"},"next":{"title":"\u5E38\u89C1\u95EE\u9898","permalink":"/en/docs/web/faq"}}'),o=r("785893"),s=r("250065");let i={slug:"/docs/web/performance",title:"\u6027\u80FD\u6D4B\u8BD5",sidebar_position:12,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","\u6027\u80FD\u6D4B\u8BD5","HTTP Server","\u6A21\u5757\u5316\u6846\u67B6","\u4F4E\u8026\u5408","\u57FA\u7840\u5F00\u53D1\u6846\u67B6","\u6027\u80FD\u62A5\u544A","\u7B2C\u4E09\u65B9\u6D4B\u8BD5","Go\u6846\u67B6"],description:"GoFrame\u6846\u67B6\u4E2DHTTP Server\u7EC4\u4EF6\u7684\u6027\u80FD\u6D4B\u8BD5\u3002GoFrame\u6846\u67B6\u4EE5\u5176\u6A21\u5757\u5316\u548C\u4F4E\u8026\u5408\u7684\u8BBE\u8BA1\u7406\u5FF5\uFF0C\u4E3A\u5F00\u53D1\u8005\u63D0\u4F9B\u4E86\u5F3A\u5927\u7684\u57FA\u7840\u5F00\u53D1\u73AF\u5883\u3002\u672C\u6587\u901A\u8FC7\u4E2D\u7ACB\u7684\u7B2C\u4E09\u65B9\u6027\u80FD\u6D4B\u8BD5\u62A5\u544A\uFF0C\u5C55\u793A\u4E86HTTP Server\u7684\u5B9E\u9645\u6027\u80FD\u8868\u73B0\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u66F4\u597D\u5730\u7406\u89E3\u548C\u8BC4\u4F30GoFrame\u6846\u67B6\u7684\u80FD\u529B\u53CA\u4F18\u8D8A\u6027\u3002"},c=void 0,a={},d=[{value:"\u5173\u4E8E\u6027\u80FD\u6D4B\u8BD5",id:"\u5173\u4E8E\u6027\u80FD\u6D4B\u8BD5",level:2},{value:"\u5168\u6846\u67B6/\u7EC4\u4EF6\u6027\u80FD\u6D4B\u8BD5\u62A5\u544A",id:"\u5168\u6846\u67B6\u7EC4\u4EF6\u6027\u80FD\u6D4B\u8BD5\u62A5\u544A",level:2},{value:"Go\u6846\u67B6/\u7EC4\u4EF6\u6027\u80FD\u6D4B\u8BD5\u62A5\u544A",id:"go\u6846\u67B6\u7EC4\u4EF6\u6027\u80FD\u6D4B\u8BD5\u62A5\u544A",level:2}];function l(e){let t={a:"a",h2:"h2",img:"img",p:"p",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"\u5173\u4E8E\u6027\u80FD\u6D4B\u8BD5",children:"\u5173\u4E8E\u6027\u80FD\u6D4B\u8BD5"}),"\n",(0,o.jsx)(t.p,{children:"\u9700\u8981\u6CE8\u610F\uFF0CGoFrame\u6846\u67B6\u662F\u4E00\u4E2A\u6A21\u5757\u5316\u3001\u4F4E\u8026\u5408\u7684\u57FA\u7840\u5F00\u53D1\u6846\u67B6\uFF0CHTTP Server\u53EA\u662F\u5176\u4E2D\u4E00\u4E2A\u6838\u5FC3\u7EC4\u4EF6\u3002"}),"\n",(0,o.jsx)(t.p,{children:"\u8FD9\u91CC\u53EA\u662F\u5C55\u793AHTTP Server\u7684\u6027\u80FD\u6D4B\u8BD5\u62A5\u544A\uFF0C\u4EE5\u4E2D\u7ACB\u7684\u7B2C\u4E09\u65B9\u6027\u80FD\u6D4B\u8BD5\u62A5\u544A\u4E3A\u51C6\u3002"}),"\n",(0,o.jsx)(t.h2,{id:"\u5168\u6846\u67B6\u7EC4\u4EF6\u6027\u80FD\u6D4B\u8BD5\u62A5\u544A",children:"\u5168\u6846\u67B6/\u7EC4\u4EF6\u6027\u80FD\u6D4B\u8BD5\u62A5\u544A"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://www.techempower.com/benchmarks/#section=data-r21&test=composite",children:"https://www.techempower.com/benchmarks/#section=data-r21&test=composite"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:r(390115).Z+"",width:"1170",height:"1686"})}),"\n",(0,o.jsx)(t.h2,{id:"go\u6846\u67B6\u7EC4\u4EF6\u6027\u80FD\u6D4B\u8BD5\u62A5\u544A",children:"Go\u6846\u67B6/\u7EC4\u4EF6\u6027\u80FD\u6D4B\u8BD5\u62A5\u544A"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:r(807701).Z+"",width:"2336",height:"758"})})]})}function m(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},807701:function(e,t,r){r.d(t,{Z:function(){return n}});let n=r.p+"assets/images/e8d28499739545684c4637aedcebcae0-9feb70b5015b9b588e281bc86e3bd1ff.png"},390115:function(e,t,r){r.d(t,{Z:function(){return n}});let n=r.p+"assets/images/fbf3b624474544cc94df0add4320026e-4531339d05252dd50be1fec7b721a3e5.png"},250065:function(e,t,r){r.d(t,{Z:function(){return c},a:function(){return i}});var n=r(667294);let o={},s=n.createContext(o);function i(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);