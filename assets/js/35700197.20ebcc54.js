"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["42101"],{815385:function(e,o,n){n.r(o),n.d(o,{metadata:()=>t,contentTitle:()=>p,default:()=>d,assets:()=>c,toc:()=>i,frontMatter:()=>a});var t=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u9519\u8BEF\u5904\u7406/\u9519\u8BEF\u5904\u7406-\u6027\u80FD\u6D4B\u8BD5","title":"\u9519\u8BEF\u5904\u7406-\u6027\u80FD\u6D4B\u8BD5","description":"\u5E38\u7528\u65B9\u6CD5\u7684\u57FA\u51C6\u6027\u80FD\u6D4B\u8BD5\uFF1A https://github.com/gogf/gf/v2/blob/master/errors/gerror/gerror\\\\z\\\\bench\\\\test.go","source":"@site/versioned_docs/version-2.1.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u9519\u8BEF\u5904\u7406/\u9519\u8BEF\u5904\u7406-\u6027\u80FD\u6D4B\u8BD5.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u9519\u8BEF\u5904\u7406","slug":"/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u9519\u8BEF\u5904\u7406/\u9519\u8BEF\u5904\u7406-\u6027\u80FD\u6D4B\u8BD5","permalink":"/2.1.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u9519\u8BEF\u5904\u7406/\u9519\u8BEF\u5904\u7406-\u6027\u80FD\u6D4B\u8BD5","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.1.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u9519\u8BEF\u5904\u7406/\u9519\u8BEF\u5904\u7406-\u6027\u80FD\u6D4B\u8BD5.md","tags":[],"version":"2.1.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":4,"frontMatter":{"title":"\u9519\u8BEF\u5904\u7406-\u6027\u80FD\u6D4B\u8BD5","sidebar_position":4,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u9519\u8BEF\u5904\u7406-\u5176\u4ED6\u7279\u6027","permalink":"/2.1.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u9519\u8BEF\u5904\u7406/\u9519\u8BEF\u5904\u7406-\u5176\u4ED6\u7279\u6027"},"next":{"title":"\u9519\u8BEF\u5904\u7406-\u6700\u4F73\u5B9E\u8DF5","permalink":"/2.1.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u9519\u8BEF\u5904\u7406/\u9519\u8BEF\u5904\u7406-\u6700\u4F73\u5B9E\u8DF5"}}'),r=n("785893"),s=n("250065");let a={title:"\u9519\u8BEF\u5904\u7406-\u6027\u80FD\u6D4B\u8BD5",sidebar_position:4,hide_title:!0},p=void 0,c={},i=[];function l(e){let o={a:"a",code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:["\u5E38\u7528\u65B9\u6CD5\u7684\u57FA\u51C6\u6027\u80FD\u6D4B\u8BD5\uFF1A ",(0,r.jsx)(o.a,{href:"https://github.com/gogf/gf/v2/blob/master/errors/gerror/gerror_z_bench_test.go",children:"https://github.com/gogf/gf/v2/blob/master/errors/gerror/gerror_z_bench_test.go"})]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:'$ go test *.go -bench=".*" -benchmem\ngoos: linux\ngoarch: amd64\nBenchmark_New-4                  1890454               589 ns/op             256 B/op          1 allocs/op\nBenchmark_Newf-4                 1569258               762 ns/op             324 B/op          3 allocs/op\nBenchmark_Wrap-4                 2012910               600 ns/op             256 B/op          1 allocs/op\nBenchmark_Wrapf-4                1600197               749 ns/op             324 B/op          3 allocs/op\nBenchmark_NewSkip-4              2009928               579 ns/op             256 B/op          1 allocs/op\nBenchmark_NewSkipf-4             1578370               752 ns/op             324 B/op          3 allocs/op\nBenchmark_NewCode-4              2060835               591 ns/op             256 B/op          1 allocs/op\nBenchmark_NewCodef-4             1603306               752 ns/op             324 B/op          3 allocs/op\nBenchmark_NewCodeSkip-4          2047794               584 ns/op             256 B/op          1 allocs/op\nBenchmark_NewCodeSkipf-4         1524495               779 ns/op             324 B/op          3 allocs/op\nBenchmark_WrapCode-4             1972147               603 ns/op             256 B/op          1 allocs/op\nBenchmark_WrapCodef-4            1651316               735 ns/op             324 B/op          3 allocs/op\n'})})]})}function d(e={}){let{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return p},a:function(){return a}});var t=n(667294);let r={},s=t.createContext(r);function a(e){let o=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function p(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);