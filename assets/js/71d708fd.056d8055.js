"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["92115"],{184179:function(e,s,n){n.r(s),n.d(s,{metadata:()=>o,contentTitle:()=>c,default:()=>u,assets:()=>d,toc:()=>l,frontMatter:()=>r});var o=JSON.parse('{"id":"docs/WEB\u670D\u52A1\u5F00\u53D1/Session/Session-Memory","title":"Session-Memory","description":"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528\u5185\u5B58\u5B58\u50A8\u5B9E\u73B0Session\u529F\u80FD\u3002\u5185\u5B58\u5B58\u50A8\u65B9\u5F0F\u7B80\u5355\u9AD8\u6548\uFF0C\u4F46\u4E0D\u652F\u6301\u6301\u4E45\u5316\uFF0C\u56E0\u6B64\u5728\u5E94\u7528\u7A0B\u5E8F\u91CD\u542F\u540ESession\u6570\u636E\u4F1A\u4E22\u5931\u3002\u901A\u8FC7\u793A\u4F8B\u4EE3\u7801\uFF0C\u8BE6\u7EC6\u8BF4\u660E\u4E86\u5982\u4F55\u8BBE\u7F6ESession\u7684\u8FC7\u671F\u65F6\u95F4\u4EE5\u53CA\u5982\u4F55\u5B58\u50A8\u548C\u83B7\u53D6Session\u6570\u636E\u3002","source":"@site/docs/docs/WEB\u670D\u52A1\u5F00\u53D1/Session/Session-Memory.md","sourceDirName":"docs/WEB\u670D\u52A1\u5F00\u53D1/Session","slug":"/docs/web/session-memory","permalink":"/docs/web/session-memory","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/WEB\u670D\u52A1\u5F00\u53D1/Session/Session-Memory.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":1,"frontMatter":{"slug":"/docs/web/session-memory","title":"Session-Memory","sidebar_position":1,"hide_title":true,"keywords":["GoFrame","Session\u5B58\u50A8","\u5185\u5B58\u5B58\u50A8","Session\u6570\u636E","StorageMemory","gsession","GoFrame\u6846\u67B6","Session\u793A\u4F8B","Session\u8BBE\u7F6E","Session\u6301\u4E45\u5316"],"description":"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528\u5185\u5B58\u5B58\u50A8\u5B9E\u73B0Session\u529F\u80FD\u3002\u5185\u5B58\u5B58\u50A8\u65B9\u5F0F\u7B80\u5355\u9AD8\u6548\uFF0C\u4F46\u4E0D\u652F\u6301\u6301\u4E45\u5316\uFF0C\u56E0\u6B64\u5728\u5E94\u7528\u7A0B\u5E8F\u91CD\u542F\u540ESession\u6570\u636E\u4F1A\u4E22\u5931\u3002\u901A\u8FC7\u793A\u4F8B\u4EE3\u7801\uFF0C\u8BE6\u7EC6\u8BF4\u660E\u4E86\u5982\u4F55\u8BBE\u7F6ESession\u7684\u8FC7\u671F\u65F6\u95F4\u4EE5\u53CA\u5982\u4F55\u5B58\u50A8\u548C\u83B7\u53D6Session\u6570\u636E\u3002"},"sidebar":"mainSidebar","previous":{"title":"Session-File","permalink":"/docs/web/session-file"},"next":{"title":"Session-Redis-KeyValue","permalink":"/docs/web/session-redis-key-value"}}'),i=n("785893"),t=n("250065");let r={slug:"/docs/web/session-memory",title:"Session-Memory",sidebar_position:1,hide_title:!0,keywords:["GoFrame","Session\u5B58\u50A8","\u5185\u5B58\u5B58\u50A8","Session\u6570\u636E","StorageMemory","gsession","GoFrame\u6846\u67B6","Session\u793A\u4F8B","Session\u8BBE\u7F6E","Session\u6301\u4E45\u5316"],description:"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528\u5185\u5B58\u5B58\u50A8\u5B9E\u73B0Session\u529F\u80FD\u3002\u5185\u5B58\u5B58\u50A8\u65B9\u5F0F\u7B80\u5355\u9AD8\u6548\uFF0C\u4F46\u4E0D\u652F\u6301\u6301\u4E45\u5316\uFF0C\u56E0\u6B64\u5728\u5E94\u7528\u7A0B\u5E8F\u91CD\u542F\u540ESession\u6570\u636E\u4F1A\u4E22\u5931\u3002\u901A\u8FC7\u793A\u4F8B\u4EE3\u7801\uFF0C\u8BE6\u7EC6\u8BF4\u660E\u4E86\u5982\u4F55\u8BBE\u7F6ESession\u7684\u8FC7\u671F\u65F6\u95F4\u4EE5\u53CA\u5982\u4F55\u5B58\u50A8\u548C\u83B7\u53D6Session\u6570\u636E\u3002"},c=void 0,d={},l=[{value:"\u5185\u5B58\u5B58\u50A8",id:"\u5185\u5B58\u5B58\u50A8",level:2},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:2}];function a(e){let s={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"\u5185\u5B58\u5B58\u50A8",children:"\u5185\u5B58\u5B58\u50A8"}),"\n",(0,i.jsxs)(s.p,{children:["\u5185\u5B58\u5B58\u50A8\u6BD4\u8F83\u7B80\u5355\uFF0C\u6027\u80FD\u4E5F\u5F88\u9AD8\u6548\uFF0C\u4F46\u6CA1\u6709\u6301\u4E45\u5316\u5B58\u50A8 ",(0,i.jsx)(s.code,{children:"Session"})," \u6570\u636E\uFF0C\u56E0\u6B64\u5E94\u7528\u7A0B\u5E8F\u91CD\u542F\u4E4B\u540E\u4FBF\u4F1A\u4E22\u5931 ",(0,i.jsx)(s.code,{children:"Session"})," \u6570\u636E\uFF0C\u53EF\u7528\u4E8E\u7279\u5B9A\u7684\u4E1A\u52A1\u573A\u666F\u4E2D\u3002 ",(0,i.jsx)(s.code,{children:"gsession"})," \u7684 ",(0,i.jsx)(s.code,{children:"\u5185\u5B58"})," \u5B58\u50A8\u4F7F\u7528 ",(0,i.jsx)(s.code,{children:"StorageMemory"})," \u5BF9\u8C61\u5B9E\u73B0\uFF0C"]}),"\n",(0,i.jsx)(s.h2,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n    "github.com/gogf/gf/v2/os/gsession"\n    "github.com/gogf/gf/v2/os/gtime"\n    "time"\n)\n\nfunc main() {\n    s := g.Server()\n    s.SetSessionMaxAge(time.Minute)\n    s.SetSessionStorage(gsession.NewStorageMemory())\n    s.Group("/", func(group *ghttp.RouterGroup) {\n        group.ALL("/set", func(r *ghttp.Request) {\n            r.Session.MustSet("time", gtime.Timestamp())\n            r.Response.Write("ok")\n        })\n        group.ALL("/get", func(r *ghttp.Request) {\n            r.Response.Write(r.Session.Data())\n        })\n        group.ALL("/del", func(r *ghttp.Request) {\n            _ = r.Session.RemoveAll()\n            r.Response.Write("ok")\n        })\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,i.jsxs)(s.p,{children:["\u5728\u8BE5\u5B9E\u4F8B\u4E2D\uFF0C\u4E3A\u4E86\u65B9\u4FBF\u89C2\u5BDF\u8FC7\u671F\u5931\u6548\uFF0C\u6211\u4EEC\u5C06 ",(0,i.jsx)(s.code,{children:"Session"})," \u7684\u8FC7\u671F\u65F6\u95F4\u8BBE\u7F6E\u4E3A ",(0,i.jsx)(s.code,{children:"1\u5206\u949F"}),"\u3002\u6267\u884C\u540E\uFF0C"]}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\u9996\u5148\uFF0C\u8BBF\u95EE ",(0,i.jsx)(s.a,{href:"http://127.0.0.1:8199/set",children:"http://127.0.0.1:8199/set"})," \u8BBE\u7F6E\u4E00\u4E2A ",(0,i.jsx)(s.code,{children:"Session"})," \u53D8\u91CF\uFF1B"]}),"\n",(0,i.jsxs)(s.li,{children:["\u968F\u540E\uFF0C\u8BBF\u95EE ",(0,i.jsx)(s.a,{href:"http://127.0.0.1:8199/get",children:"http://127.0.0.1:8199/get"})," \u53EF\u4EE5\u770B\u5230\u8BE5 ",(0,i.jsx)(s.code,{children:"Session"})," \u53D8\u91CF\u5DF2\u7ECF\u8BBE\u7F6E\u5E76\u6210\u529F\u83B7\u53D6\uFF1B"]}),"\n",(0,i.jsxs)(s.li,{children:["\u63A5\u7740\uFF0C\u6211\u4EEC\u505C\u6B62\u7A0B\u5E8F\uFF0C\u5E76\u91CD\u65B0\u542F\u52A8\uFF0C\u518D\u6B21\u8BBF\u95EE ",(0,i.jsx)(s.a,{href:"http://127.0.0.1:8199/get",children:"http://127.0.0.1:8199/get"}),"\uFF0C\u53EF\u4EE5\u770B\u5230 ",(0,i.jsx)(s.code,{children:"Session"})," \u53D8\u91CF\u5DF2\u7ECF\u6CA1\u6709\u4E86\uFF1B"]}),"\n"]})]})}function u(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return c},a:function(){return r}});var o=n(667294);let i={},t=o.createContext(i);function r(e){let s=o.useContext(t);return o.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(t.Provider,{value:s},e.children)}}}]);