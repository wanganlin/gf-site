"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["46996"],{653642:function(e,t,o){o.r(t),o.d(t,{metadata:()=>n,contentTitle:()=>a,default:()=>l,assets:()=>c,toc:()=>m,frontMatter:()=>s});var n=JSON.parse('{"id":"docs/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u5B9A\u65F6\u5668-gtimer/\u5B9A\u65F6\u5668-\u6027\u80FD\u6D4B\u8BD5","title":"\u5B9A\u65F6\u5668-\u6027\u80FD\u6D4B\u8BD5","description":"\u4F7F\u7528GoFrame\u6846\u67B6\u5728Linux\u73AF\u5883\u4E0B\u8FDB\u884C\u5B9A\u65F6\u5668\u6027\u80FD\u6D4B\u8BD5\u7684\u8BE6\u7EC6\u4FE1\u606F\u3002\u901A\u8FC7\u5BF9Benchmark_Add\u548CBenchmark_StartStop\u7684\u5BF9\u6BD4\uFF0C\u80FD\u591F\u66F4\u6E05\u6670\u5730\u4E86\u89E3\u5230\u5B9A\u65F6\u5668\u5728\u4E0D\u540C\u64CD\u4F5C\u4E0B\u7684\u6548\u7387\u548C\u8D44\u6E90\u5206\u914D\u60C5\u51B5\u3002\u6D4B\u8BD5\u7ED3\u679C\u663E\u793A\u51FAGo\u8BED\u8A00\u5728\u6267\u884C\u5B9A\u65F6\u5668\u64CD\u4F5C\u65F6\u7684\u9AD8\u6548\u6027\u80FD\u6307\u6807\uFF0C\u4ECE\u800C\u4E3A\u5F00\u53D1\u8005\u5728\u4F7F\u7528GoFrame\u4E2D\u63D0\u4F9B\u66F4\u597D\u7684\u53C2\u8003\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u5B9A\u65F6\u5668-gtimer/\u5B9A\u65F6\u5668-\u6027\u80FD\u6D4B\u8BD5.md","sourceDirName":"docs/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u5B9A\u65F6\u5668-gtimer","slug":"/docs/components/os-gtimer-benchmark","permalink":"/en/2.7.x/docs/components/os-gtimer-benchmark","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u5B9A\u65F6\u5668-gtimer/\u5B9A\u65F6\u5668-\u6027\u80FD\u6D4B\u8BD5.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":1,"frontMatter":{"slug":"/docs/components/os-gtimer-benchmark","title":"\u5B9A\u65F6\u5668-\u6027\u80FD\u6D4B\u8BD5","sidebar_position":1,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","\u5B9A\u65F6\u5668","\u6027\u80FD\u6D4B\u8BD5","Benchmark","Go","gtimer","linux","amd64","github"],"description":"\u4F7F\u7528GoFrame\u6846\u67B6\u5728Linux\u73AF\u5883\u4E0B\u8FDB\u884C\u5B9A\u65F6\u5668\u6027\u80FD\u6D4B\u8BD5\u7684\u8BE6\u7EC6\u4FE1\u606F\u3002\u901A\u8FC7\u5BF9Benchmark_Add\u548CBenchmark_StartStop\u7684\u5BF9\u6BD4\uFF0C\u80FD\u591F\u66F4\u6E05\u6670\u5730\u4E86\u89E3\u5230\u5B9A\u65F6\u5668\u5728\u4E0D\u540C\u64CD\u4F5C\u4E0B\u7684\u6548\u7387\u548C\u8D44\u6E90\u5206\u914D\u60C5\u51B5\u3002\u6D4B\u8BD5\u7ED3\u679C\u663E\u793A\u51FAGo\u8BED\u8A00\u5728\u6267\u884C\u5B9A\u65F6\u5668\u64CD\u4F5C\u65F6\u7684\u9AD8\u6548\u6027\u80FD\u6307\u6807\uFF0C\u4ECE\u800C\u4E3A\u5F00\u53D1\u8005\u5728\u4F7F\u7528GoFrame\u4E2D\u63D0\u4F9B\u66F4\u597D\u7684\u53C2\u8003\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u5B9A\u65F6\u5668-\u57FA\u672C\u4F7F\u7528","permalink":"/en/2.7.x/docs/components/os-gtimer-example"},"next":{"title":"\u5185\u5B58\u9501-gmlock","permalink":"/en/2.7.x/docs/components/os-gmlock"}}'),r=o("785893"),i=o("250065");let s={slug:"/docs/components/os-gtimer-benchmark",title:"\u5B9A\u65F6\u5668-\u6027\u80FD\u6D4B\u8BD5",sidebar_position:1,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","\u5B9A\u65F6\u5668","\u6027\u80FD\u6D4B\u8BD5","Benchmark","Go","gtimer","linux","amd64","github"],description:"\u4F7F\u7528GoFrame\u6846\u67B6\u5728Linux\u73AF\u5883\u4E0B\u8FDB\u884C\u5B9A\u65F6\u5668\u6027\u80FD\u6D4B\u8BD5\u7684\u8BE6\u7EC6\u4FE1\u606F\u3002\u901A\u8FC7\u5BF9Benchmark_Add\u548CBenchmark_StartStop\u7684\u5BF9\u6BD4\uFF0C\u80FD\u591F\u66F4\u6E05\u6670\u5730\u4E86\u89E3\u5230\u5B9A\u65F6\u5668\u5728\u4E0D\u540C\u64CD\u4F5C\u4E0B\u7684\u6548\u7387\u548C\u8D44\u6E90\u5206\u914D\u60C5\u51B5\u3002\u6D4B\u8BD5\u7ED3\u679C\u663E\u793A\u51FAGo\u8BED\u8A00\u5728\u6267\u884C\u5B9A\u65F6\u5668\u64CD\u4F5C\u65F6\u7684\u9AD8\u6548\u6027\u80FD\u6307\u6807\uFF0C\u4ECE\u800C\u4E3A\u5F00\u53D1\u8005\u5728\u4F7F\u7528GoFrame\u4E2D\u63D0\u4F9B\u66F4\u597D\u7684\u53C2\u8003\u3002"},a=void 0,c={},m=[{value:"\u6027\u80FD\u6D4B\u8BD5",id:"\u6027\u80FD\u6D4B\u8BD5",level:2}];function d(e){let t={code:"code",h2:"h2",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"\u6027\u80FD\u6D4B\u8BD5",children:"\u6027\u80FD\u6D4B\u8BD5"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"goos: linux\ngoarch: amd64\npkg: github.com/gogf/gf/v2/os/gtimer\nBenchmark_Add-12                         4048776               291.9 ns/op           249 B/op          6 allocs/op\nBenchmark_StartStop-12                  100000000              10.96 ns/op             0 B/op          0 allocs/op\nPASS\nok      command-line-arguments    6.602s\n"})})]})}function l(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,t,o){o.d(t,{Z:function(){return a},a:function(){return s}});var n=o(667294);let r={},i=n.createContext(r);function s(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);