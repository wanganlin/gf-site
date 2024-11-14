"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["10603"],{493897:function(n,o,e){e.r(o),e.d(o,{metadata:()=>t,contentTitle:()=>p,default:()=>m,assets:()=>c,toc:()=>l,frontMatter:()=>r});var t=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u7C7B\u578B\u8F6C\u6362/\u7C7B\u578B\u8F6C\u6362-\u6027\u80FD\u6D4B\u8BD5","title":"\u7C7B\u578B\u8F6C\u6362-\u6027\u80FD\u6D4B\u8BD5","description":"\u57FA\u672C\u7C7B\u578B\u8F6C\u6362\u6027\u80FD\u57FA\u51C6\u6D4B\u8BD5\uFF1A","source":"@site/versioned_docs/version-2.2.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u7C7B\u578B\u8F6C\u6362/\u7C7B\u578B\u8F6C\u6362-\u6027\u80FD\u6D4B\u8BD5.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u7C7B\u578B\u8F6C\u6362","slug":"/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u7C7B\u578B\u8F6C\u6362/\u7C7B\u578B\u8F6C\u6362-\u6027\u80FD\u6D4B\u8BD5","permalink":"/2.2.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u7C7B\u578B\u8F6C\u6362/\u7C7B\u578B\u8F6C\u6362-\u6027\u80FD\u6D4B\u8BD5","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.2.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u7C7B\u578B\u8F6C\u6362/\u7C7B\u578B\u8F6C\u6362-\u6027\u80FD\u6D4B\u8BD5.md","tags":[],"version":"2.2.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":6,"frontMatter":{"title":"\u7C7B\u578B\u8F6C\u6362-\u6027\u80FD\u6D4B\u8BD5","sidebar_position":6,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u7C7B\u578B\u8F6C\u6362-UnmarshalValue","permalink":"/2.2.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u7C7B\u578B\u8F6C\u6362/\u7C7B\u578B\u8F6C\u6362-UnmarshalValue"},"next":{"title":"\u7F13\u5B58\u7BA1\u7406","permalink":"/2.2.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u7F13\u5B58\u7BA1\u7406/"}}'),s=e("785893"),a=e("250065");let r={title:"\u7C7B\u578B\u8F6C\u6362-\u6027\u80FD\u6D4B\u8BD5",sidebar_position:6,hide_title:!0},p=void 0,c={},l=[];function i(n){let o={code:"code",p:"p",pre:"pre",...(0,a.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.p,{children:"\u57FA\u672C\u7C7B\u578B\u8F6C\u6362\u6027\u80FD\u57FA\u51C6\u6D4B\u8BD5\uFF1A"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:'john@john-B85M:~/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/util/gconv$ go test *.go -bench=".*" -benchmem\ngoos: linux\ngoarch: amd64\nBenchmarkString-4               20000000                71.8 ns/op            24 B/op          2 allocs/op\nBenchmarkInt-4                  100000000               22.2 ns/op             8 B/op          1 allocs/op\nBenchmarkInt8-4                 100000000               24.5 ns/op             8 B/op          1 allocs/op\nBenchmarkInt16-4                50000000                23.8 ns/op             8 B/op          1 allocs/op\nBenchmarkInt32-4                100000000               24.1 ns/op             8 B/op          1 allocs/op\nBenchmarkInt64-4                100000000               21.7 ns/op             8 B/op          1 allocs/op\nBenchmarkUint-4                 100000000               22.2 ns/op             8 B/op          1 allocs/op\nBenchmarkUint8-4                50000000                25.6 ns/op             8 B/op          1 allocs/op\nBenchmarkUint16-4               50000000                32.1 ns/op             8 B/op          1 allocs/op\nBenchmarkUint32-4               50000000                27.7 ns/op             8 B/op          1 allocs/op\nBenchmarkUint64-4               50000000                28.1 ns/op             8 B/op          1 allocs/op\nBenchmarkFloat32-4              10000000               155 ns/op              24 B/op          2 allocs/op\nBenchmarkFloat64-4              10000000               177 ns/op              24 B/op          2 allocs/op\nBenchmarkTime-4                  5000000               240 ns/op              72 B/op          4 allocs/op\nBenchmarkTimeDuration-4         50000000                26.2 ns/op             8 B/op          1 allocs/op\nBenchmarkBytes-4                10000000               149 ns/op             128 B/op          3 allocs/op\nBenchmarkStrings-4              10000000               223 ns/op              40 B/op          3 allocs/op\nBenchmarkInts-4                 20000000                55.0 ns/op            16 B/op          2 allocs/op\nBenchmarkFloats-4               10000000               186 ns/op              32 B/op          3 allocs/op\nBenchmarkInterfaces-4           20000000                66.6 ns/op            24 B/op          2 allocs/op\nPASS\nok      command-line-arguments  35.356s\n'})})]})}function m(n={}){let{wrapper:o}={...(0,a.a)(),...n.components};return o?(0,s.jsx)(o,{...n,children:(0,s.jsx)(i,{...n})}):i(n)}},250065:function(n,o,e){e.d(o,{Z:function(){return p},a:function(){return r}});var t=e(667294);let s={},a=t.createContext(s);function r(n){let o=t.useContext(a);return t.useMemo(function(){return"function"==typeof n?n(o):{...o,...n}},[o,n])}function p(n){let o;return o=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),t.createElement(a.Provider,{value:o},n.children)}}}]);