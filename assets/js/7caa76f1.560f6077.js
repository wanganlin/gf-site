"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["46809"],{341852:function(e,s,n){n.r(s),n.d(s,{metadata:()=>i,contentTitle:()=>c,default:()=>a,assets:()=>d,toc:()=>l,frontMatter:()=>r});var i=JSON.parse('{"id":"docs/WEB\u670D\u52A1\u5F00\u53D1/Session/Session-File","title":"Session-File","description":"\u4F7F\u7528GoFrame\u6846\u67B6\u7684ghttp.Server\u5B9E\u73B0Session\u7684\u6587\u4EF6\u5B58\u50A8\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CSession\u5B58\u50A8\u91C7\u7528\u5185\u5B58\u548C\u6587\u4EF6\u7ED3\u5408\u7684\u65B9\u5F0F\uFF0C\u901A\u8FC7StorageFile\u5B9E\u73B0\u6301\u4E45\u5316\u7BA1\u7406\u3002\u5F97\u76CA\u4E8Egcache\u6A21\u5757\uFF0CSession\u6570\u636E\u64CD\u4F5C\u9AD8\u6548\uFF0C\u7279\u522B\u9002\u5408\u8BFB\u591A\u5199\u5C11\u7684\u573A\u666F\u3002\u540C\u65F6\uFF0C\u6F14\u793A\u793A\u4F8B\u5C55\u793A\u4E86\u5982\u4F55\u5728GoFrame\u9879\u76EE\u4E2D\u8BBE\u7F6E\u4E0E\u83B7\u53D6Session\u3002","source":"@site/docs/docs/WEB\u670D\u52A1\u5F00\u53D1/Session/Session-File.md","sourceDirName":"docs/WEB\u670D\u52A1\u5F00\u53D1/Session","slug":"/docs/web/session-file","permalink":"/docs/web/session-file","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/WEB\u670D\u52A1\u5F00\u53D1/Session/Session-File.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/web/session-file","title":"Session-File","sidebar_position":0,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","Session","\u6587\u4EF6\u5B58\u50A8","ghttp.Server","StorageFile","gcache","\u5E8F\u5217\u5316","\u53CD\u5E8F\u5217\u5316","\u4F1A\u8BDD\u7BA1\u7406"],"description":"\u4F7F\u7528GoFrame\u6846\u67B6\u7684ghttp.Server\u5B9E\u73B0Session\u7684\u6587\u4EF6\u5B58\u50A8\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CSession\u5B58\u50A8\u91C7\u7528\u5185\u5B58\u548C\u6587\u4EF6\u7ED3\u5408\u7684\u65B9\u5F0F\uFF0C\u901A\u8FC7StorageFile\u5B9E\u73B0\u6301\u4E45\u5316\u7BA1\u7406\u3002\u5F97\u76CA\u4E8Egcache\u6A21\u5757\uFF0CSession\u6570\u636E\u64CD\u4F5C\u9AD8\u6548\uFF0C\u7279\u522B\u9002\u5408\u8BFB\u591A\u5199\u5C11\u7684\u573A\u666F\u3002\u540C\u65F6\uFF0C\u6F14\u793A\u793A\u4F8B\u5C55\u793A\u4E86\u5982\u4F55\u5728GoFrame\u9879\u76EE\u4E2D\u8BBE\u7F6E\u4E0E\u83B7\u53D6Session\u3002"},"sidebar":"mainSidebar","previous":{"title":"Session","permalink":"/docs/web/session"},"next":{"title":"Session-Memory","permalink":"/docs/web/session-memory"}}'),o=n("785893"),t=n("250065");let r={slug:"/docs/web/session-file",title:"Session-File",sidebar_position:0,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","Session","\u6587\u4EF6\u5B58\u50A8","ghttp.Server","StorageFile","gcache","\u5E8F\u5217\u5316","\u53CD\u5E8F\u5217\u5316","\u4F1A\u8BDD\u7BA1\u7406"],description:"\u4F7F\u7528GoFrame\u6846\u67B6\u7684ghttp.Server\u5B9E\u73B0Session\u7684\u6587\u4EF6\u5B58\u50A8\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CSession\u5B58\u50A8\u91C7\u7528\u5185\u5B58\u548C\u6587\u4EF6\u7ED3\u5408\u7684\u65B9\u5F0F\uFF0C\u901A\u8FC7StorageFile\u5B9E\u73B0\u6301\u4E45\u5316\u7BA1\u7406\u3002\u5F97\u76CA\u4E8Egcache\u6A21\u5757\uFF0CSession\u6570\u636E\u64CD\u4F5C\u9AD8\u6548\uFF0C\u7279\u522B\u9002\u5408\u8BFB\u591A\u5199\u5C11\u7684\u573A\u666F\u3002\u540C\u65F6\uFF0C\u6F14\u793A\u793A\u4F8B\u5C55\u793A\u4E86\u5982\u4F55\u5728GoFrame\u9879\u76EE\u4E2D\u8BBE\u7F6E\u4E0E\u83B7\u53D6Session\u3002"},c=void 0,d={},l=[{value:"\u6587\u4EF6\u5B58\u50A8",id:"\u6587\u4EF6\u5B58\u50A8",level:2},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:2}];function h(e){let s={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h2,{id:"\u6587\u4EF6\u5B58\u50A8",children:"\u6587\u4EF6\u5B58\u50A8"}),"\n",(0,o.jsxs)(s.p,{children:["\u5728\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C ",(0,o.jsx)(s.code,{children:"ghttp.Server"})," \u7684 ",(0,o.jsx)(s.code,{children:"Session"})," \u5B58\u50A8\u4F7F\u7528\u4E86 ",(0,o.jsx)(s.code,{children:"\u5185\u5B58+\u6587\u4EF6"})," \u7684\u65B9\u5F0F\uFF0C\u4F7F\u7528 ",(0,o.jsx)(s.code,{children:"StorageFile"})," \u5BF9\u8C61\u5B9E\u73B0\u3002\u5177\u4F53\u539F\u7406\u4E3A\uFF1A"]}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"Session"})," \u7684\u6570\u636E\u64CD\u4F5C\u5B8C\u5168\u57FA\u4E8E\u5185\u5B58\uFF1B"]}),"\n",(0,o.jsxs)(s.li,{children:["\u4F7F\u7528 ",(0,o.jsx)(s.code,{children:"gcache"})," \u8FDB\u7A0B\u7F13\u5B58\u6A21\u5757\u63A7\u5236\u6570\u636E\u8FC7\u671F\uFF1B"]}),"\n",(0,o.jsxs)(s.li,{children:["\u4F7F\u7528\u6587\u4EF6\u5B58\u50A8\u6301\u4E45\u5316\u5B58\u50A8\u7BA1\u7406 ",(0,o.jsx)(s.code,{children:"Session"})," \u6570\u636E\uFF1B"]}),"\n",(0,o.jsxs)(s.li,{children:["\u5F53\u4E14\u4EC5\u6709\u5F53 ",(0,o.jsx)(s.code,{children:"Session"})," \u88AB\u6807\u8BB0\u4E3A ",(0,o.jsx)(s.code,{children:"dirty"})," \u65F6\uFF08\u6570\u636E\u6709\u66F4\u65B0\uFF09\u624D\u4F1A\u6267\u884C ",(0,o.jsx)(s.code,{children:"Session"})," \u5E8F\u5217\u5316\u5E76\u6267\u884C\u6587\u4EF6\u6301\u4E45\u5316\u5B58\u50A8\uFF1B"]}),"\n",(0,o.jsxs)(s.li,{children:["\u5F53\u4E14\u4EC5\u5F53\u5185\u5B58\u4E2D\u7684 ",(0,o.jsx)(s.code,{children:"Session"})," \u4E0D\u5B58\u5728\u65F6\uFF0C\u624D\u4F1A\u4ECE\u6587\u4EF6\u5B58\u50A8\u4E2D\u53CD\u5E8F\u5217\u5316\u6062\u590D ",(0,o.jsx)(s.code,{children:"Session"})," \u6570\u636E\u5230\u5185\u5B58\u4E2D\uFF0C\u964D\u4F4E ",(0,o.jsx)(s.code,{children:"IO"})," \u8C03\u7528\uFF1B"]}),"\n",(0,o.jsxs)(s.li,{children:["\u5E8F\u5217\u5316/\u53CD\u5E8F\u5217\u5316\u4F7F\u7528\u7684\u662F\u6807\u51C6\u5E93\u7684 ",(0,o.jsx)(s.code,{children:"json.Marshal/UnMarshal"})," \u65B9\u6CD5\uFF1B"]}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["\u4ECE\u539F\u7406\u53EF\u77E5\uFF0C\u5F53 ",(0,o.jsx)(s.code,{children:"Session"})," \u4E3A\u8BFB\u591A\u5199\u5C11\u7684\u573A\u666F\u4E2D\uFF0C ",(0,o.jsx)(s.code,{children:"Session"})," \u7684\u6570\u636E\u64CD\u4F5C\u975E\u5E38\u9AD8\u6548\u3002"]}),"\n",(0,o.jsx)(s.admonition,{type:"tip",children:(0,o.jsxs)(s.p,{children:["\u6709\u4E2A\u6CE8\u610F\u7684\u7EC6\u8282\uFF0C\u7531\u4E8E\u6587\u4EF6\u5B58\u50A8\u6D89\u53CA\u5230\u6587\u4EF6\u64CD\u4F5C\uFF0C\u4E3A\u4FBF\u4E8E\u964D\u4F4E ",(0,o.jsx)(s.code,{children:"IO"})," \u5F00\u9500\u5E76\u63D0\u9AD8 ",(0,o.jsx)(s.code,{children:"Session"})," \u64CD\u4F5C\u6027\u80FD\uFF0C\u5E76\u4E0D\u662F\u6BCF\u4E00\u6B21 ",(0,o.jsx)(s.code,{children:"Session"})," \u8BF7\u6C42\u7ED3\u675F\u540E\u90FD\u4F1A\u7ACB\u5373\u5237\u65B0\u5BF9\u5E94 ",(0,o.jsx)(s.code,{children:"Session"})," \u7684 ",(0,o.jsx)(s.code,{children:"TTL"})," \u65F6\u95F4\u3002\u800C\u53EA\u6709\u5F53\u6D89\u53CA\u5230\u66F4\u65B0\u64CD\u4F5C\uFF08\u88AB\u6807\u8BB0\u4E3A ",(0,o.jsx)(s.code,{children:"dirty"}),"\uFF09\u65F6\u624D\u4F1A\u7ACB\u5373\u5237\u65B0\u5176 ",(0,o.jsx)(s.code,{children:"TTL"}),"\uFF1B\u9488\u5BF9\u4E8E\u8BFB\u53D6\u8BF7\u6C42\uFF0C\u5C06\u4F1A\u6BCF\u9694 ",(0,o.jsx)(s.code,{children:"\u4E00\u5206\u949F"})," \u66F4\u65B0\u524D\u4E00\u5206\u949F\u5185\u8BFB\u53D6\u64CD\u4F5C\u5BF9\u5E94\u7684 ",(0,o.jsx)(s.code,{children:"Session"})," \u6587\u4EF6 ",(0,o.jsx)(s.code,{children:"TTL"})," \u65F6\u95F4\uFF0C\u4EE5\u4FBF\u4E8E ",(0,o.jsx)(s.code,{children:"Session"})," \u81EA\u52A8\u7EED\u6D3B\u3002"]})}),"\n",(0,o.jsx)(s.h2,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n    "github.com/gogf/gf/v2/os/gtime"\n    "time"\n)\n\nfunc main() {\n    s := g.Server()\n    s.SetSessionMaxAge(time.Minute)\n    s.Group("/", func(group *ghttp.RouterGroup) {\n        group.ALL("/set", func(r *ghttp.Request) {\n            r.Session.Set("time", gtime.Timestamp())\n            r.Response.Write("ok")\n        })\n        group.ALL("/get", func(r *ghttp.Request) {\n            r.Response.Write(r.Session.Data())\n        })\n        group.ALL("/del", func(r *ghttp.Request) {\n            _ = r.Session.RemoveAll()\n            r.Response.Write("ok")\n        })\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,o.jsxs)(s.p,{children:["\u5728\u8BE5\u5B9E\u4F8B\u4E2D\uFF0C\u4E3A\u4E86\u65B9\u4FBF\u89C2\u5BDF\u8FC7\u671F\u5931\u6548\uFF0C\u6211\u4EEC\u5C06 ",(0,o.jsx)(s.code,{children:"Session"})," \u7684\u8FC7\u671F\u65F6\u95F4\u8BBE\u7F6E\u4E3A ",(0,o.jsx)(s.code,{children:"1\u5206\u949F"}),"\u3002\u6267\u884C\u540E\uFF0C"]}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["\u9996\u5148\uFF0C\u8BBF\u95EE ",(0,o.jsx)(s.a,{href:"http://127.0.0.1:8199/set",children:"http://127.0.0.1:8199/set"})," \u8BBE\u7F6E\u4E00\u4E2A ",(0,o.jsx)(s.code,{children:"Session"})," \u53D8\u91CF\uFF1B"]}),"\n",(0,o.jsxs)(s.li,{children:["\u968F\u540E\uFF0C\u8BBF\u95EE ",(0,o.jsx)(s.a,{href:"http://127.0.0.1:8199/get",children:"http://127.0.0.1:8199/get"})," \u53EF\u4EE5\u770B\u5230\u8BE5 ",(0,o.jsx)(s.code,{children:"Session"})," \u53D8\u91CF\u5DF2\u7ECF\u8BBE\u7F6E\u5E76\u6210\u529F\u83B7\u53D6\uFF1B"]}),"\n",(0,o.jsxs)(s.li,{children:["\u63A5\u7740\uFF0C\u6211\u4EEC\u505C\u6B62\u7A0B\u5E8F\uFF0C\u5E76\u91CD\u65B0\u542F\u52A8\uFF0C\u518D\u6B21\u8BBF\u95EE ",(0,o.jsx)(s.a,{href:"http://127.0.0.1:8199/get",children:"http://127.0.0.1:8199/get"}),"\uFF0C\u53EF\u4EE5\u770B\u5230 ",(0,o.jsx)(s.code,{children:"Session"})," \u53D8\u91CF\u5DF2\u7ECF\u4ECE\u6587\u4EF6\u5B58\u50A8\u4E2D\u6062\u590D\uFF1B"]}),"\n",(0,o.jsxs)(s.li,{children:["\u7B49\u5F851\u5206\u949F\u540E\uFF0C\u518D\u6B21\u8BBF\u95EE ",(0,o.jsx)(s.a,{href:"http://127.0.0.1:8199/get",children:"http://127.0.0.1:8199/get"})," \u53EF\u4EE5\u770B\u5230\u5DF2\u7ECF\u65E0\u6CD5\u83B7\u53D6\u8BE5 ",(0,o.jsx)(s.code,{children:"Session"}),"\uFF0C\u56E0\u4E3A\u8BE5 ",(0,o.jsx)(s.code,{children:"Session"})," \u5DF2\u7ECF\u8FC7\u671F\uFF1B"]}),"\n"]})]})}function a(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return c},a:function(){return r}});var i=n(667294);let o={},t=i.createContext(o);function r(e){let s=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);