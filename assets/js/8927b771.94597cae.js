"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["1031"],{405673:function(e,s,n){n.r(s),n.d(s,{metadata:()=>i,contentTitle:()=>d,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>r});var i=JSON.parse('{"id":"WEB\u670D\u52A1\u5F00\u53D1/Session/Session-Redis-KeyValue","title":"Session-Redis-KeyValue","description":"Redis KeyValue Storage","source":"@site/versioned_docs/version-2.6.x/WEB\u670D\u52A1\u5F00\u53D1/Session/Session-Redis-KeyValue.md","sourceDirName":"WEB\u670D\u52A1\u5F00\u53D1/Session","slug":"/WEB\u670D\u52A1\u5F00\u53D1/Session/Session-Redis-KeyValue","permalink":"/2.6.x/WEB\u670D\u52A1\u5F00\u53D1/Session/Session-Redis-KeyValue","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.6.x/WEB\u670D\u52A1\u5F00\u53D1/Session/Session-Redis-KeyValue.md","tags":[],"version":"2.6.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":2,"frontMatter":{"title":"Session-Redis-KeyValue","sidebar_position":2,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"Session-Memory","permalink":"/2.6.x/WEB\u670D\u52A1\u5F00\u53D1/Session/Session-Memory"},"next":{"title":"Session-Redis-HashTable","permalink":"/2.6.x/WEB\u670D\u52A1\u5F00\u53D1/Session/Session-Redis-HashTable"}}'),o=n("785893"),t=n("250065");let r={title:"Session-Redis-KeyValue",sidebar_position:2,hide_title:!0},d=void 0,c={},l=[{value:"Redis KeyValue Storage",id:"redis-keyvalue-storage",level:2},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:2}];function a(e){let s={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h2,{id:"redis-keyvalue-storage",children:"Redis KeyValue Storage"}),"\n",(0,o.jsxs)(s.p,{children:["\u6587\u4EF6\u5B58\u50A8\u7684\u65B9\u5F0F\u5728\u5355\u8282\u70B9\u7684\u573A\u666F\u4E0B\u975E\u5E38\u4E0D\u9519\uFF0C\u4F46\u662F\u6D89\u53CA\u5230\u5BF9\u5E94\u7528\u8FDB\u884C\u591A\u8282\u70B9\u90E8\u7F72\u7684\u573A\u666F\u4E0B\uFF0C\u5404\u4E2A\u8282\u70B9\u7684 ",(0,o.jsx)(s.code,{children:"Session"})," \u65E0\u6CD5\u5171\u4EAB\uFF0C\u56E0\u6B64\u9700\u8981\u5C06 ",(0,o.jsx)(s.code,{children:"Session"})," \u5B58\u50A8\u5355\u72EC\u5265\u79BB\u51FA\u6765\u7BA1\u7406\uFF0C ",(0,o.jsx)(s.code,{children:"Redis"})," \u670D\u52A1\u5668\u662F\u6BD4\u8F83\u5E38\u89C1\u7684\u4E00\u4E2A\u9009\u62E9\u3002"]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.code,{children:"gsession"})," \u7684 ",(0,o.jsx)(s.code,{children:"Redis"})," \u5B58\u50A8\u4F7F\u7528 ",(0,o.jsx)(s.code,{children:"StorageRedis"})," \u5BF9\u8C61\u5B9E\u73B0\uFF0C\u4E0E\u6587\u4EF6\u5B58\u50A8\u6BD4\u8F83\u7C7B\u4F3C\uFF0C\u4E3A\u4E86\u63D0\u9AD8\u6267\u884C\u6548\u7387\uFF0C\u4E5F\u662F\u91C7\u7528\u4E86 ",(0,o.jsx)(s.code,{children:"\u5185\u5B58+Redis"})," \u7684\u65B9\u5F0F\u3002\u4E0E\u6587\u4EF6\u5B58\u50A8\u552F\u4E00\u4E0D\u540C\u7684\u662F\uFF0C\u5728\u6BCF\u4E00\u6B21\u8BF7\u6C42\u4E2D\u5982\u679C\u9700\u8981\u5BF9 ",(0,o.jsx)(s.code,{children:"Session"})," \u8FDB\u884C\u64CD\u4F5C\u65F6\uFF0C\u5C06\u4F1A\u4ECE ",(0,o.jsx)(s.code,{children:"Redis"})," \u4E2D\u62C9\u53D6\u4E00\u6B21\u6700\u65B0\u7684 ",(0,o.jsx)(s.code,{children:"Session"})," \u6570\u636E\uFF08\u800C\u6587\u4EF6\u5B58\u50A8\u53EA\u4F1A\u5728 ",(0,o.jsx)(s.code,{children:"Session"})," \u4E0D\u5B58\u5728\u65F6\u8BFB\u53D6\u4E00\u6B21\u6587\u4EF6\uFF09\u3002\u5728\u6BCF\u4E00\u6B21\u8BF7\u6C42\u7ED3\u675F\u4E4B\u540E\uFF0C\u5C06\u5168\u91CF\u7684 ",(0,o.jsx)(s.code,{children:"Session"})," \u6570\u636E\u901A\u8FC7 ",(0,o.jsx)(s.code,{children:"JSON"})," \u5E8F\u5217\u5316\u4E4B\u540E\u901A\u8FC7 ",(0,o.jsx)(s.code,{children:"KeyValue"})," \u65B9\u5F0F\u66F4\u65B0\u5230 ",(0,o.jsx)(s.code,{children:"Redis"})," \u670D\u52A1\u4E2D\u3002"]}),"\n",(0,o.jsxs)(s.p,{children:["\u5982\u679C\u5355\u4E2A\u7528\u6237\u4E0B(\u4EE5\u7528\u6237\u7EF4\u5EA6\u4E3E\u4F8B) ",(0,o.jsx)(s.code,{children:"Session"})," \u6570\u636E\u91CF\u4E0D\u5927\u7684\u4E1A\u52A1\u573A\u666F\u4E2D\uFF0C\u90FD\u63A8\u8350\u4F7F\u7528\u8FD9\u79CD ",(0,o.jsx)(s.code,{children:"Storage"})," \u65B9\u5F0F\u3002\u5982\u679C\u5355\u4E2A\u7528\u6237 ",(0,o.jsx)(s.code,{children:"Session"})," \u6570\u636E\u91CF\u8F83\u5927\uFF08\u4F8B\u5982 ",(0,o.jsx)(s.code,{children:">10MB"}),"\uFF09\uFF0C\u53EF\u4EE5\u53C2\u8003 ",(0,o.jsx)(s.code,{children:"HashTable"})," \u7684 ",(0,o.jsx)(s.code,{children:"Storage"})," \u65B9\u5F0F\uFF1A ",(0,o.jsx)(s.a,{href:"/2.6.x/WEB%E6%9C%8D%E5%8A%A1%E5%BC%80%E5%8F%91/Session/Session-Redis-HashTable",children:"Session-Redis-HashTable"})]}),"\n",(0,o.jsx)(s.h2,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n    "github.com/gogf/gf/v2/os/gsession"\n    "github.com/gogf/gf/v2/os/gtime"\n    "time"\n)\n\nfunc main() {\n    s := g.Server()\n    s.SetSessionMaxAge(time.Minute)\n    s.SetSessionStorage(gsession.NewStorageRedis(g.Redis()))\n    s.Group("/", func(group *ghttp.RouterGroup) {\n        group.ALL("/set", func(r *ghttp.Request) {\n            r.Session.Set("time", gtime.Timestamp())\n            r.Response.Write("ok")\n        })\n        group.ALL("/get", func(r *ghttp.Request) {\n            r.Response.Write(r.Session.Data())\n        })\n        group.ALL("/del", func(r *ghttp.Request) {\n            _ = r.Session.RemoveAll()\n            r.Response.Write("ok")\n        })\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,o.jsxs)(s.p,{children:["\u5728\u8BE5\u5B9E\u4F8B\u4E2D\uFF0C\u4E3A\u4E86\u65B9\u4FBF\u89C2\u5BDF\u8FC7\u671F\u5931\u6548\uFF0C\u6211\u4EEC\u5C06 ",(0,o.jsx)(s.code,{children:"Session"})," \u7684\u8FC7\u671F\u65F6\u95F4\u8BBE\u7F6E\u4E3A ",(0,o.jsx)(s.code,{children:"1\u5206\u949F"}),"\u3002\u6267\u884C\u540E\uFF0C"]}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["\u9996\u5148\uFF0C\u8BBF\u95EE ",(0,o.jsx)(s.a,{href:"http://127.0.0.1:8199/set",children:"http://127.0.0.1:8199/set"})," \u8BBE\u7F6E\u4E00\u4E2A ",(0,o.jsx)(s.code,{children:"Session"})," \u53D8\u91CF\uFF1B"]}),"\n",(0,o.jsxs)(s.li,{children:["\u968F\u540E\uFF0C\u8BBF\u95EE ",(0,o.jsx)(s.a,{href:"http://127.0.0.1:8199/get",children:"http://127.0.0.1:8199/get"})," \u53EF\u4EE5\u770B\u5230\u8BE5 ",(0,o.jsx)(s.code,{children:"Session"})," \u53D8\u91CF\u5DF2\u7ECF\u8BBE\u7F6E\u5E76\u6210\u529F\u83B7\u53D6\uFF1B"]}),"\n",(0,o.jsxs)(s.li,{children:["\u63A5\u7740\uFF0C\u6211\u4EEC\u505C\u6B62\u7A0B\u5E8F\uFF0C\u5E76\u91CD\u65B0\u542F\u52A8\uFF0C\u518D\u6B21\u8BBF\u95EE ",(0,o.jsx)(s.a,{href:"http://127.0.0.1:8199/get",children:"http://127.0.0.1:8199/get"}),"\uFF0C\u53EF\u4EE5\u770B\u5230 ",(0,o.jsx)(s.code,{children:"Session"})," \u53D8\u91CF\u5DF2\u7ECF\u4ECE ",(0,o.jsx)(s.code,{children:"Redis"})," \u5B58\u50A8\u4E2D\u6062\u590D\uFF1B\u5982\u679C\u6211\u4EEC\u624B\u52A8\u4FEE\u6539 ",(0,o.jsx)(s.code,{children:"Redis"})," \u4E2D\u7684\u5BF9\u5E94\u952E\u503C\u6570\u636E\uFF0C\u9875\u9762\u5237\u65B0\u65F6\u4E5F\u4F1A\u8BFB\u53D6\u5230\u6700\u65B0\u7684\u503C\uFF1B"]}),"\n",(0,o.jsxs)(s.li,{children:["\u7B49\u5F851\u5206\u949F\u540E\uFF0C\u518D\u6B21\u8BBF\u95EE ",(0,o.jsx)(s.a,{href:"http://127.0.0.1:8199/get",children:"http://127.0.0.1:8199/get"})," \u53EF\u4EE5\u770B\u5230\u5DF2\u7ECF\u65E0\u6CD5\u83B7\u53D6\u8BE5 ",(0,o.jsx)(s.code,{children:"Session"}),"\uFF0C\u56E0\u4E3A\u8BE5 ",(0,o.jsx)(s.code,{children:"Session"})," \u5DF2\u7ECF\u8FC7\u671F\uFF1B"]}),"\n"]})]})}function h(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return r}});var i=n(667294);let o={},t=i.createContext(o);function r(e){let s=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);