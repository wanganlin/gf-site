"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[52548],{696143:(o,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>n,toc:()=>i});const n=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u9519\u8bef\u5904\u7406/\u9519\u8bef\u5904\u7406-\u6027\u80fd\u6d4b\u8bd5","title":"\u9519\u8bef\u5904\u7406-\u6027\u80fd\u6d4b\u8bd5","description":"\u672c\u6587\u6863\u6db5\u76d6\u4e86\u4f7f\u7528GoFrame\u6846\u67b6\u8fdb\u884c\u9519\u8bef\u5904\u7406\u7684\u57fa\u51c6\u6027\u80fd\u6d4b\u8bd5\uff0c\u63d0\u4f9b\u4e86\u5e38\u7528\u65b9\u6cd5\u7684\u6027\u80fd\u5bf9\u6bd4\u7ed3\u679c\u3002\u901a\u8fc7\u8fd9\u4e9b\u6027\u80fd\u6d4b\u8bd5\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u66f4\u597d\u5730\u7406\u89e3\u548c\u4f18\u5316Go\u8bed\u8a00\u7f16\u7a0b\u4e2d\u7684\u9519\u8bef\u5904\u7406\u6548\u7387\uff0c\u4ece\u800c\u63d0\u5347\u6574\u4e2a\u5e94\u7528\u7a0b\u5e8f\u7684\u6027\u80fd\u8868\u73b0\u3002\u6570\u636e\u6765\u6e90\u4e8eGitHub\u4e0aGoFrame\u7684\u5f00\u6e90\u9879\u76ee\uff0c\u8be6\u7ec6\u5217\u4e3e\u4e86\u4e0d\u540c\u9519\u8bef\u5904\u7406\u65b9\u6cd5\u5728\u4e0d\u540c\u914d\u7f6e\u4e0b\u7684\u6027\u80fd\u8868\u73b0\uff0c\u4f9b\u5f00\u53d1\u8005\u53c2\u8003\u3002","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u9519\u8bef\u5904\u7406/\u9519\u8bef\u5904\u7406-\u6027\u80fd\u6d4b\u8bd5.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u9519\u8bef\u5904\u7406","slug":"/docs/core/gerror-benchmark","permalink":"/docs/core/gerror-benchmark","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u9519\u8bef\u5904\u7406/\u9519\u8bef\u5904\u7406-\u6027\u80fd\u6d4b\u8bd5.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731055597000,"sidebarPosition":6,"frontMatter":{"slug":"/docs/core/gerror-benchmark","title":"\u9519\u8bef\u5904\u7406-\u6027\u80fd\u6d4b\u8bd5","sidebar_position":6,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","\u9519\u8bef\u5904\u7406","\u6027\u80fd\u6d4b\u8bd5","\u57fa\u51c6\u6d4b\u8bd5","\u6027\u80fd\u4f18\u5316","Go\u8bed\u8a00","\u7f16\u7a0b\u6846\u67b6","\u4ee3\u7801\u6548\u7387","Go\u5f00\u53d1"],"description":"\u672c\u6587\u6863\u6db5\u76d6\u4e86\u4f7f\u7528GoFrame\u6846\u67b6\u8fdb\u884c\u9519\u8bef\u5904\u7406\u7684\u57fa\u51c6\u6027\u80fd\u6d4b\u8bd5\uff0c\u63d0\u4f9b\u4e86\u5e38\u7528\u65b9\u6cd5\u7684\u6027\u80fd\u5bf9\u6bd4\u7ed3\u679c\u3002\u901a\u8fc7\u8fd9\u4e9b\u6027\u80fd\u6d4b\u8bd5\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u66f4\u597d\u5730\u7406\u89e3\u548c\u4f18\u5316Go\u8bed\u8a00\u7f16\u7a0b\u4e2d\u7684\u9519\u8bef\u5904\u7406\u6548\u7387\uff0c\u4ece\u800c\u63d0\u5347\u6574\u4e2a\u5e94\u7528\u7a0b\u5e8f\u7684\u6027\u80fd\u8868\u73b0\u3002\u6570\u636e\u6765\u6e90\u4e8eGitHub\u4e0aGoFrame\u7684\u5f00\u6e90\u9879\u76ee\uff0c\u8be6\u7ec6\u5217\u4e3e\u4e86\u4e0d\u540c\u9519\u8bef\u5904\u7406\u65b9\u6cd5\u5728\u4e0d\u540c\u914d\u7f6e\u4e0b\u7684\u6027\u80fd\u8868\u73b0\uff0c\u4f9b\u5f00\u53d1\u8005\u53c2\u8003\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u9519\u8bef\u5904\u7406-\u6700\u4f73\u5b9e\u8df5","permalink":"/docs/core/gerror-practice"},"next":{"title":"\u9519\u8bef\u5904\u7406-\u9519\u8bef\u7801\u7279\u6027","permalink":"/docs/core/gerror-code"}}');var s=r(474848),t=r(28453);const c={slug:"/docs/core/gerror-benchmark",title:"\u9519\u8bef\u5904\u7406-\u6027\u80fd\u6d4b\u8bd5",sidebar_position:6,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","\u9519\u8bef\u5904\u7406","\u6027\u80fd\u6d4b\u8bd5","\u57fa\u51c6\u6d4b\u8bd5","\u6027\u80fd\u4f18\u5316","Go\u8bed\u8a00","\u7f16\u7a0b\u6846\u67b6","\u4ee3\u7801\u6548\u7387","Go\u5f00\u53d1"],description:"\u672c\u6587\u6863\u6db5\u76d6\u4e86\u4f7f\u7528GoFrame\u6846\u67b6\u8fdb\u884c\u9519\u8bef\u5904\u7406\u7684\u57fa\u51c6\u6027\u80fd\u6d4b\u8bd5\uff0c\u63d0\u4f9b\u4e86\u5e38\u7528\u65b9\u6cd5\u7684\u6027\u80fd\u5bf9\u6bd4\u7ed3\u679c\u3002\u901a\u8fc7\u8fd9\u4e9b\u6027\u80fd\u6d4b\u8bd5\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u66f4\u597d\u5730\u7406\u89e3\u548c\u4f18\u5316Go\u8bed\u8a00\u7f16\u7a0b\u4e2d\u7684\u9519\u8bef\u5904\u7406\u6548\u7387\uff0c\u4ece\u800c\u63d0\u5347\u6574\u4e2a\u5e94\u7528\u7a0b\u5e8f\u7684\u6027\u80fd\u8868\u73b0\u3002\u6570\u636e\u6765\u6e90\u4e8eGitHub\u4e0aGoFrame\u7684\u5f00\u6e90\u9879\u76ee\uff0c\u8be6\u7ec6\u5217\u4e3e\u4e86\u4e0d\u540c\u9519\u8bef\u5904\u7406\u65b9\u6cd5\u5728\u4e0d\u540c\u914d\u7f6e\u4e0b\u7684\u6027\u80fd\u8868\u73b0\uff0c\u4f9b\u5f00\u53d1\u8005\u53c2\u8003\u3002"},a=void 0,p={},i=[];function l(o){const e={a:"a",code:"code",p:"p",pre:"pre",...(0,t.R)(),...o.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:["\u5e38\u7528\u65b9\u6cd5\u7684\u57fa\u51c6\u6027\u80fd\u6d4b\u8bd5\uff1a ",(0,s.jsx)(e.a,{href:"https://github.com/gogf/gf/blob/master/errors/gerror/gerror_z_bench_test.go",children:"https://github.com/gogf/gf/blob/master/errors/gerror/gerror_z_bench_test.go"})]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'$ go test *.go -bench=".*" -benchmem\ngoos: linux\ngoarch: amd64\nBenchmark_New-4                  1890454               589 ns/op             256 B/op          1 allocs/op\nBenchmark_Newf-4                 1569258               762 ns/op             324 B/op          3 allocs/op\nBenchmark_Wrap-4                 2012910               600 ns/op             256 B/op          1 allocs/op\nBenchmark_Wrapf-4                1600197               749 ns/op             324 B/op          3 allocs/op\nBenchmark_NewSkip-4              2009928               579 ns/op             256 B/op          1 allocs/op\nBenchmark_NewSkipf-4             1578370               752 ns/op             324 B/op          3 allocs/op\nBenchmark_NewCode-4              2060835               591 ns/op             256 B/op          1 allocs/op\nBenchmark_NewCodef-4             1603306               752 ns/op             324 B/op          3 allocs/op\nBenchmark_NewCodeSkip-4          2047794               584 ns/op             256 B/op          1 allocs/op\nBenchmark_NewCodeSkipf-4         1524495               779 ns/op             324 B/op          3 allocs/op\nBenchmark_WrapCode-4             1972147               603 ns/op             256 B/op          1 allocs/op\nBenchmark_WrapCodef-4            1651316               735 ns/op             324 B/op          3 allocs/op\n'})})]})}function d(o={}){const{wrapper:e}={...(0,t.R)(),...o.components};return e?(0,s.jsx)(e,{...o,children:(0,s.jsx)(l,{...o})}):l(o)}},28453:(o,e,r)=>{r.d(e,{R:()=>c,x:()=>a});var n=r(296540);const s={},t=n.createContext(s);function c(o){const e=n.useContext(t);return n.useMemo((function(){return"function"==typeof o?o(e):{...e,...o}}),[e,o])}function a(o){let e;return e=o.disableParentContext?"function"==typeof o.components?o.components(s):o.components||s:c(o.components),n.createElement(t.Provider,{value:e},o.children)}}}]);