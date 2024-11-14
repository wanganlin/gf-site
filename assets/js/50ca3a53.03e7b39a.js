"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["50808"],{614518:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>a,assets:()=>c,toc:()=>l,frontMatter:()=>o});var t=JSON.parse('{"id":"WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/HOOK\u4E8B\u4EF6\u56DE\u8C03","title":"HOOK\u4E8B\u4EF6\u56DE\u8C03","description":"ghttp.Server \u63D0\u4F9B\u4E86\u4E8B\u4EF6\u56DE\u8C03\u6CE8\u518C\u529F\u80FD\uFF0C\u7C7B\u4F3C\u4E8E\u5176\u4ED6\u6846\u67B6\u7684 \u4E2D\u95F4\u4EF6 \u529F\u80FD\uFF0C\u76F8\u6BD4\u8F83\u4E8E \u4E2D\u95F4\u4EF6\uFF0C\u4E8B\u4EF6\u56DE\u8C03\u7684\u7279\u6027\u66F4\u52A0\u7B80\u5355\u3002","source":"@site/versioned_docs/version-2.0.x/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/HOOK\u4E8B\u4EF6\u56DE\u8C03.md","sourceDirName":"WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027","slug":"/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/HOOK\u4E8B\u4EF6\u56DE\u8C03","permalink":"/2.0.x/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/HOOK\u4E8B\u4EF6\u56DE\u8C03","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.0.x/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/HOOK\u4E8B\u4EF6\u56DE\u8C03.md","tags":[],"version":"2.0.x","lastUpdatedBy":"John","lastUpdatedAt":1730380474000,"sidebarPosition":6,"frontMatter":{"title":"HOOK\u4E8B\u4EF6\u56DE\u8C03","sidebar_position":6,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"CSRF\u9632\u5FA1\u8BBE\u7F6E","permalink":"/2.0.x/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/CSRF\u9632\u5FA1\u8BBE\u7F6E"},"next":{"title":"WebSocket\u670D\u52A1","permalink":"/2.0.x/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/WebSocket\u670D\u52A1"}}'),s=r("785893"),i=r("250065");let o={title:"HOOK\u4E8B\u4EF6\u56DE\u8C03",sidebar_position:6,hide_title:!0},d=void 0,c={},l=[{value:"\u56DE\u8C03\u4F18\u5148\u7EA7",id:"\u56DE\u8C03\u4F18\u5148\u7EA7",level:2},{value:"\u5173\u4E8E\u5168\u5C40\u56DE\u8C03",id:"\u5173\u4E8E\u5168\u5C40\u56DE\u8C03",level:3},{value:"\u4E1A\u52A1\u51FD\u6570\u8C03\u7528\u987A\u5E8F",id:"\u4E1A\u52A1\u51FD\u6570\u8C03\u7528\u987A\u5E8F",level:3},{value:"<code>ExitHook</code> \u65B9\u6CD5",id:"exithook-\u65B9\u6CD5",level:2},{value:"\u63A5\u53E3\u9274\u6743\u63A7\u5236",id:"\u63A5\u53E3\u9274\u6743\u63A7\u5236",level:2},{value:"\u4E2D\u95F4\u4EF6\u4E0E\u4E8B\u4EF6\u56DE\u8C03",id:"\u4E2D\u95F4\u4EF6\u4E0E\u4E8B\u4EF6\u56DE\u8C03",level:2},{value:"<code>Request.URL</code> \u4E0E <code>Request.Router</code>",id:"requesturl-\u4E0E-requestrouter",level:3},{value:"\u9759\u6001\u6587\u4EF6\u4E8B\u4EF6",id:"\u9759\u6001\u6587\u4EF6\u4E8B\u4EF6",level:2},{value:"\u4E8B\u4EF6\u56DE\u8C03\u793A\u4F8B",id:"\u4E8B\u4EF6\u56DE\u8C03\u793A\u4F8B",level:2},{value:"\u793A\u4F8B1\uFF0C\u57FA\u672C\u4F7F\u7528",id:"\u793A\u4F8B1\u57FA\u672C\u4F7F\u7528",level:3},{value:"\u793A\u4F8B2\uFF0C\u76F8\u540C\u4E8B\u4EF6\u6CE8\u518C",id:"\u793A\u4F8B2\u76F8\u540C\u4E8B\u4EF6\u6CE8\u518C",level:3},{value:"\u793A\u4F8B3\uFF0C\u6539\u53D8\u4E1A\u52A1\u903B\u8F91",id:"\u793A\u4F8B3\u6539\u53D8\u4E1A\u52A1\u903B\u8F91",level:3},{value:"\u793A\u4F8B4\uFF0C\u56DE\u8C03\u6267\u884C\u4F18\u5148\u7EA7",id:"\u793A\u4F8B4\u56DE\u8C03\u6267\u884C\u4F18\u5148\u7EA7",level:3},{value:"\u793A\u4F8B5\uFF0C\u5141\u8BB8\u8DE8\u57DF\u8BF7\u6C42",id:"\u793A\u4F8B5\u5141\u8BB8\u8DE8\u57DF\u8BF7\u6C42",level:3}];function h(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(465763).Z+"",width:"2058",height:"1298"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ghttp.Server"})," \u63D0\u4F9B\u4E86\u4E8B\u4EF6\u56DE\u8C03\u6CE8\u518C\u529F\u80FD\uFF0C\u7C7B\u4F3C\u4E8E\u5176\u4ED6\u6846\u67B6\u7684 ",(0,s.jsx)(n.code,{children:"\u4E2D\u95F4\u4EF6"})," \u529F\u80FD\uFF0C\u76F8\u6BD4\u8F83\u4E8E ",(0,s.jsx)(n.code,{children:"\u4E2D\u95F4\u4EF6"}),"\uFF0C\u4E8B\u4EF6\u56DE\u8C03\u7684\u7279\u6027\u66F4\u52A0\u7B80\u5355\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ghttp.Server"})," \u652F\u6301\u7528\u6237\u5BF9\u4E8E\u67D0\u4E00\u4E8B\u4EF6\u8FDB\u884C\u81EA\u5B9A\u4E49\u76D1\u542C\u5904\u7406\uFF0C\u6309\u7167 ",(0,s.jsx)(n.code,{children:"pattern"})," \u65B9\u5F0F\u8FDB\u884C\u7ED1\u5B9A\u6CE8\u518C( ",(0,s.jsx)(n.code,{children:"pattern"})," \u683C\u5F0F\u4E0E\u8DEF\u7531\u6CE8\u518C\u4E00\u81F4)\u3002 ",(0,s.jsx)(n.strong,{children:"\u652F\u6301\u591A\u4E2A\u65B9\u6CD5\u5BF9\u540C\u4E00\u4E8B\u4EF6\u8FDB\u884C\u76D1\u542C"}),"\uFF0C ",(0,s.jsx)(n.code,{children:"ghttp.Server"})," \u5C06\u4F1A\u6309\u7167 ",(0,s.jsx)(n.code,{children:"\u8DEF\u7531\u4F18\u5148\u7EA7"})," \u53CA ",(0,s.jsx)(n.code,{children:"\u56DE\u8C03\u6CE8\u518C\u987A\u5E8F"})," \u8FDB\u884C\u56DE\u8C03\u65B9\u6CD5\u8C03\u7528\u3002\u540C\u4E00\u4E8B\u4EF6\u65F6\u5148\u6CE8\u518C\u7684HOOK\u56DE\u8C03\u51FD\u6570\u4F18\u5148\u7EA7\u8D8A\u9AD8\u3002 \u76F8\u5173\u65B9\u6CD5\u5982\u4E0B\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"func (s *Server) BindHookHandler(pattern string, hook string, handler HandlerFunc) error\nfunc (s *Server) BindHookHandlerByMap(pattern string, hookmap map[string]HandlerFunc) error\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5F53\u7136\u57DF\u540D\u5BF9\u8C61\u4E5F\u652F\u6301\u4E8B\u4EF6\u56DE\u8C03\u6CE8\u518C\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"func (d *Domain) BindHookHandler(pattern string, hook string, handler HandlerFunc) error\nfunc (d *Domain) BindHookHandlerByMap(pattern string, hookmap map[string]HandlerFunc) error\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u652F\u6301\u7684 ",(0,s.jsx)(n.code,{children:"Hook"})," \u4E8B\u4EF6\u5217\u8868\uFF1A"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ghttp.HookBeforeServe"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u8FDB\u5165/\u521D\u59CB\u5316\u670D\u52A1\u5BF9\u8C61\u4E4B\u524D\uFF0C\u8BE5\u4E8B\u4EF6\u662F\u6700\u5E38\u7528\u7684\u4E8B\u4EF6\uFF0C\u7279\u522B\u662F\u9488\u5BF9\u4E8E\u6743\u9650\u63A7\u5236\u3001\u8DE8\u57DF\u8BF7\u6C42\u7B49\u5904\u7406\u3002"}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ghttp.HookAfterServe"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u5B8C\u6210\u670D\u52A1\u6267\u884C\u6D41\u7A0B\u4E4B\u540E\u3002"}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ghttp.HookBeforeOutput"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5411\u5BA2\u6237\u7AEF\u8F93\u51FA\u8FD4\u56DE\u5185\u5BB9\u4E4B\u524D\u3002"}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ghttp.HookAfterOutput"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5411\u5BA2\u6237\u7AEF\u8F93\u51FA\u8FD4\u56DE\u5185\u5BB9\u4E4B\u540E\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5177\u4F53\u8C03\u7528\u65F6\u673A\u8BF7\u53C2\u8003\u56FE\u4F8B\u6240\u793A\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u56DE\u8C03\u4F18\u5148\u7EA7",children:"\u56DE\u8C03\u4F18\u5148\u7EA7"}),"\n",(0,s.jsxs)(n.p,{children:["\u7531\u4E8E\u4E8B\u4EF6\u7684\u7ED1\u5B9A\u4E5F\u662F\u4F7F\u7528\u7684\u8DEF\u7531\u89C4\u5219\uFF0C\u56E0\u6B64\u5B83\u7684\u4F18\u5148\u7EA7\u548C ",(0,s.jsx)(n.a,{href:"/2.0.x/WEB%E6%9C%8D%E5%8A%A1%E5%BC%80%E5%8F%91/%E8%B7%AF%E7%94%B1%E7%AE%A1%E7%90%86/%E8%B7%AF%E7%94%B1%E7%AE%A1%E7%90%86-%E8%B7%AF%E7%94%B1%E8%A7%84%E5%88%99",children:"\u8DEF\u7531\u7BA1\u7406-\u8DEF\u7531\u89C4\u5219"})," \u7AE0\u8282\u4ECB\u7ECD\u7684\u4F18\u5148\u7EA7\u662F\u4E00\u6837\u7684\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4F46\u662F\u4E8B\u4EF6\u8C03\u7528\u65F6\u548C\u8DEF\u7531\u6CE8\u518C\u8C03\u7528\u65F6\u7684\u673A\u5236\u4E0D\u4E00\u6837\uFF0C ",(0,s.jsx)(n.strong,{children:"\u540C\u4E00\u4E2A\u8DEF\u7531\u89C4\u5219\u4E0B\u5141\u8BB8\u7ED1\u5B9A\u591A\u4E2A\u4E8B\u4EF6\u56DE\u8C03\u65B9\u6CD5"}),"\uFF0C\u8BE5\u8DEF\u7531\u4E0B\u7684\u4E8B\u4EF6\u8C03\u7528\u4F1A ",(0,s.jsx)(n.code,{children:"\u6309\u7167\u4F18\u5148\u7EA7\u8FDB\u884C\u8C03\u7528"}),"\uFF0C\u5047\u5982\u4F18\u5148\u7EA7\u76F8\u7B49\u7684\u8DEF\u7531\u89C4\u5219\uFF0C\u5C06\u4F1A\u6309\u7167\u4E8B\u4EF6\u6CE8\u518C\u7684\u987A\u5E8F\u8FDB\u884C\u8C03\u7528\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u5173\u4E8E\u5168\u5C40\u56DE\u8C03",children:"\u5173\u4E8E\u5168\u5C40\u56DE\u8C03"}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4EEC\u5F80\u5F80\u4F7F\u7528\u7ED1\u5B9A ",(0,s.jsx)(n.code,{children:"/*"})," \u8FD9\u6837\u7684 ",(0,s.jsx)(n.code,{children:"HOOK"})," \u8DEF\u7531\u6765\u5B9E\u73B0\u5168\u5C40\u7684\u56DE\u8C03\u5904\u7406\uFF0C\u8FD9\u6837\u662F\u53EF\u4EE5\u7684\u3002\u4F46\u662F ",(0,s.jsx)(n.code,{children:"HOOK"})," \u6267\u884C\u7684\u4F18\u5148\u662F\u6700\u4F4E\u7684\uFF0C\u8DEF\u7531\u6CE8\u518C\u7684\u8D8A\u7CBE\u786E\uFF0C\u4F18\u5148\u7EA7\u8D8A\u9AD8\uFF0C\u8D8A\u6A21\u7CCA\u7684\u8DEF\u7531\u4F18\u5148\u7EA7\u8D8A\u4F4E\uFF0C ",(0,s.jsx)(n.code,{children:"/*"})," \u5C31\u5C5E\u4E8E\u6700\u6A21\u7CCA\u7684\u8DEF\u7531\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4E3A\u964D\u4F4E\u4E0D\u540C\u7684\u6A21\u5757\u8026\u5408\u6027\uFF0C\u6240\u6709\u7684\u8DEF\u7531\u5F80\u5F80\u4E0D\u662F\u5728\u540C\u4E00\u4E2A\u5730\u65B9\u8FDB\u884C\u6CE8\u518C\u3002\u4F8B\u5982\u7528\u6237\u6A21\u5757\u6CE8\u518C\u7684 ",(0,s.jsx)(n.code,{children:"HOOK"}),"( ",(0,s.jsx)(n.code,{children:"/user/*"}),")\uFF0C\u5B83\u5C06\u4F1A\u88AB\u4F18\u5148\u8C03\u7528\u968F\u540E\u624D\u53EF\u80FD\u662F\u5168\u5C40\u7684 ",(0,s.jsx)(n.code,{children:"HOOK"}),"\uFF1B\u5982\u679C\u4EC5\u4EC5\u4F9D\u9760\u6CE8\u518C\u987A\u5E8F\u6765\u63A7\u5236\u4F18\u5148\u7EA7\uFF0C\u5728\u6A21\u5757\u591A\u8DEF\u7531\u591A\u7684\u65F6\u5019\u4F18\u5148\u7EA7\u4FBF\u5F88\u96BE\u7BA1\u7406\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u4E1A\u52A1\u51FD\u6570\u8C03\u7528\u987A\u5E8F",children:"\u4E1A\u52A1\u51FD\u6570\u8C03\u7528\u987A\u5E8F"}),"\n",(0,s.jsxs)(n.p,{children:["\u5EFA\u8BAE \u76F8\u540C\u7684\u4E1A\u52A1(\u540C\u4E00\u4E1A\u52A1\u6A21\u5757) \u7684\u591A\u4E2A\u5904\u7406\u51FD\u6570(\u4F8B\u5982: A\u3001B\u3001C)\u653E\u5230\u540C\u4E00\u4E2A ",(0,s.jsx)(n.code,{children:"HOOK"})," \u56DE\u8C03\u51FD\u6570\u4E2D\u8FDB\u884C\u5904\u7406\uFF0C\u5728\u6CE8\u518C\u7684\u56DE\u8C03\u51FD\u6570\u4E2D\u81EA\u884C\u7BA1\u7406\u4E1A\u52A1\u5904\u7406\u51FD\u6570\u7684\u8C03\u7528\u987A\u5E8F(\u51FD\u6570\u8C03\u7528\u987A\u5E8F: A-B-C)\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u867D\u7136\u540C\u6837\u7684\u9700\u6C42\uFF0C\u6CE8\u518C\u591A\u4E2A\u76F8\u540C ",(0,s.jsx)(n.code,{children:"HOOK"})," \u7684\u56DE\u8C03\u51FD\u6570\u4E5F\u53EF\u4EE5\u5B9E\u73B0\uFF0C\u529F\u80FD\u4E0A\u4E0D\u4F1A\u6709\u95EE\u9898\uFF0C\u4F46\u4ECE\u8BBE\u8BA1\u7684\u89D2\u5EA6\u6765\u8BB2\uFF0C\u5185\u805A\u6027\u964D\u4F4E\u4E86\uFF0C\u4E0D\u4FBF\u4E8E\u4E1A\u52A1\u51FD\u6570\u7BA1\u7406\u3002"]}),"\n",(0,s.jsxs)(n.h2,{id:"exithook-\u65B9\u6CD5",children:[(0,s.jsx)(n.code,{children:"ExitHook"})," \u65B9\u6CD5"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5F53\u8DEF\u7531\u5339\u914D\u5230\u591A\u4E2A ",(0,s.jsx)(n.code,{children:"HOOK"})," \u65B9\u6CD5\u65F6\uFF0C\u9ED8\u8BA4\u662F\u6309\u7167\u8DEF\u7531\u5339\u914D\u4F18\u5148\u7EA7\u987A\u5E8F\u6267\u884C ",(0,s.jsx)(n.code,{children:"HOOK"})," \u65B9\u6CD5\u3002\u5F53\u5728 ",(0,s.jsx)(n.code,{children:"HOOK"})," \u65B9\u6CD5\u4E2D\u8C03\u7528 ",(0,s.jsx)(n.code,{children:"Request.ExitHook"})," \u65B9\u6CD5\u540E\uFF0C\u540E\u7EED\u7684 ",(0,s.jsx)(n.code,{children:"HOOK"})," \u65B9\u6CD5\u5C06\u4E0D\u4F1A\u88AB\u7EE7\u7EED\u6267\u884C\uFF0C\u4F5C\u7528\u7C7B\u4F3C ",(0,s.jsx)(n.code,{children:"HOOK"})," \u65B9\u6CD5\u8986\u76D6\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u63A5\u53E3\u9274\u6743\u63A7\u5236",children:"\u63A5\u53E3\u9274\u6743\u63A7\u5236"}),"\n",(0,s.jsxs)(n.p,{children:["\u4E8B\u4EF6\u56DE\u8C03\u6CE8\u518C\u6BD4\u8F83\u5E38\u89C1\u7684\u5E94\u7528\u662F\u5728\u5BF9\u8C03\u7528\u7684\u63A5\u53E3\u8FDB\u884C\u9274\u6743\u63A7\u5236/\u6743\u9650\u63A7\u5236\u3002\u8BE5\u64CD\u4F5C\u9700\u8981\u7ED1\u5B9A ",(0,s.jsx)(n.code,{children:"ghttp.HookBeforeServe"})," \u4E8B\u4EF6\uFF0C\u5728\u8BE5\u4E8B\u4EF6\u4E2D\u4F1A\u5BF9\u6240\u6709\u5339\u914D\u7684\u63A5\u53E3\u8BF7\u6C42(\u4F8B\u5982\u7ED1\u5B9A ",(0,s.jsx)(n.code,{children:"/*"})," \u4E8B\u4EF6\u56DE\u8C03\u8DEF\u7531)\u670D\u52A1\u6267\u884C\u524D\u8FDB\u884C\u56DE\u8C03\u5904\u7406\u3002\u5F53\u9274\u6743\u4E0D\u901A\u8FC7\u65F6\uFF0C\u9700\u8981\u8C03\u7528 ",(0,s.jsx)(n.code,{children:"r.ExitAll()"})," \u65B9\u6CD5\u9000\u51FA\u540E\u7EED\u7684\u670D\u52A1\u6267\u884C(\u5305\u62EC\u540E\u7EED\u7684\u4E8B\u4EF6\u56DE\u8C03\u6267\u884C)\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6B64\u5916\uFF0C\u5728\u6743\u9650\u6821\u9A8C\u7684\u4E8B\u4EF6\u56DE\u8C03\u51FD\u6570\u4E2D\u6267\u884C ",(0,s.jsx)(n.code,{children:"r.Redirect*"})," \u65B9\u6CD5\uFF0C\u53C8\u6CA1\u6709\u8C03\u7528 ",(0,s.jsx)(n.code,{children:"r.ExitAll()"})," \u65B9\u6CD5\u9000\u51FA\u4E1A\u52A1\u6267\u884C\uFF0C\u5F80\u5F80\u4F1A\u4EA7\u751F ",(0,s.jsx)(n.code,{children:"http multiple response writeheader calls"})," \u9519\u8BEF\u63D0\u793A\u3002\u56E0\u4E3A ",(0,s.jsx)(n.code,{children:"r.Redirect*"})," \u65B9\u6CD5\u4F1A\u5F80\u8FD4\u56DE\u7684header\u4E2D\u5199\u5165 ",(0,s.jsx)(n.code,{children:"Location"})," \u5934\uFF1B\u800C\u968F\u540E\u7684\u4E1A\u52A1\u670D\u52A1\u63A5\u53E3\u5F80\u5F80\u4F1A\u5F80header\u5199\u5165 ",(0,s.jsx)(n.code,{children:"Content-Type"}),"/ ",(0,s.jsx)(n.code,{children:"Content-Length"})," \u5934\uFF0C\u8FD9\u4E24\u8005\u6709\u51B2\u7A81\u9020\u6210\u7684\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4E2D\u95F4\u4EF6\u4E0E\u4E8B\u4EF6\u56DE\u8C03",children:"\u4E2D\u95F4\u4EF6\u4E0E\u4E8B\u4EF6\u56DE\u8C03"}),"\n",(0,s.jsxs)(n.p,{children:["\u4E2D\u95F4\u4EF6\uFF08 ",(0,s.jsx)(n.code,{children:"Middleware"}),"\uFF09\u4E0E\u4E8B\u4EF6\u56DE\u8C03\uFF08 ",(0,s.jsx)(n.code,{children:"HOOK"}),"\uFF09\u662F ",(0,s.jsx)(n.code,{children:"GF"})," \u6846\u67B6\u7684\u4E24\u5927\u6D41\u7A0B\u63A7\u5236\u7279\u6027\uFF0C\u4E24\u8005\u90FD\u53EF\u7528\u4E8E\u63A7\u5236\u8BF7\u6C42\u6D41\u7A0B\uFF0C\u5E76\u4E14\u4E5F\u90FD\u652F\u6301\u7ED1\u5B9A\u7279\u5B9A\u7684\u8DEF\u7531\u89C4\u5219\u3002\u4F46\u4E24\u8005\u533A\u522B\u4E5F\u662F\u975E\u5E38\u660E\u663E\u7684\u3002"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u9996\u5148\uFF0C\u4E2D\u95F4\u4EF6\u4FA7\u91CD\u4E8E\u5E94\u7528\u7EA7\u7684\u6D41\u7A0B\u63A7\u5236\uFF0C\u800C\u4E8B\u4EF6\u56DE\u8C03\u4FA7\u91CD\u4E8E\u670D\u52A1\u7EA7\u6D41\u7A0B\u63A7\u5236\uFF1B\u4E5F\u5C31\u662F\u8BF4\u4E2D\u95F4\u4EF6\u7684\u4F5C\u7528\u57DF\u4EC5\u9650\u4E8E\u5E94\u7528\uFF0C\u800C\u4E8B\u4EF6\u56DE\u8C03\u7684\u201C\u6743\u9650\u201D\u66F4\u5F3A\u5927\uFF0C\u5C5E\u4E8E ",(0,s.jsx)(n.code,{children:"Server"})," \u7EA7\u522B\uFF0C\u5E76\u53EF\u5904\u7406\u9759\u6001\u6587\u4EF6\u7684\u8BF7\u6C42\u56DE\u8C03\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u5176\u6B21\uFF0C\u4E2D\u95F4\u4EF6\u8BBE\u8BA1\u91C7\u7528\u4E86\u201C\u6D0B\u8471\u201D\u8BBE\u8BA1\u6A21\u578B\uFF1B\u800C\u4E8B\u4EF6\u56DE\u8C03\u91C7\u7528\u7684\u662F\u7279\u5B9A\u4E8B\u4EF6\u7684\u94A9\u5B50\u89E6\u53D1\u8BBE\u8BA1\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u6700\u540E\uFF0C\u4E2D\u95F4\u4EF6\u76F8\u5BF9\u6765\u8BF4\u7075\u6D3B\u6027\u66F4\u9AD8\uFF0C\u4E5F\u662F\u6BD4\u8F83\u63A8\u8350\u7684\u6D41\u7A0B\u63A7\u5236\u65B9\u5F0F\uFF1B\u800C\u4E8B\u4EF6\u56DE\u8C03\u6BD4\u8F83\u7B80\u5355\uFF0C\u4F46\u7075\u6D3B\u6027\u8F83\u5DEE\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"requesturl-\u4E0E-requestrouter",children:[(0,s.jsx)(n.code,{children:"Request.URL"})," \u4E0E ",(0,s.jsx)(n.code,{children:"Request.Router"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Request.Router"})," \u662F\u5339\u914D\u5230\u7684\u8DEF\u7531\u5BF9\u8C61\uFF0C\u5305\u542B\u8DEF\u7531\u6CE8\u518C\u4FE1\u606F\uFF0C\u4E00\u822C\u6765\u8BF4\u5F00\u53D1\u8005\u4E0D\u4F1A\u7528\u5230\u3002 ",(0,s.jsx)(n.code,{children:"Request.URL"})," \u662F\u5E95\u5C42\u8BF7\u6C42\u7684URL\u5BF9\u8C61\uFF08\u7EE7\u627F\u81EA\u6807\u51C6\u5E93 ",(0,s.jsx)(n.code,{children:"http.Request"}),"\uFF09\uFF0C\u5305\u542B\u8BF7\u6C42\u7684URL\u5730\u5740\u4FE1\u606F\uFF0C\u7279\u522B\u662F ",(0,s.jsx)(n.code,{children:"Request.URL.Path"})," \u8868\u793A\u8BF7\u6C42\u7684URI\u5730\u5740\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u56E0\u6B64\uFF0C\u5047\u5982\u5728\u670D\u52A1\u56DE\u8C03\u51FD\u6570\u4E2D\u4F7F\u7528\u7684\u8BDD\uFF0C ",(0,s.jsx)(n.code,{children:"Request.Router"})," \u662F\u6709\u503C\u7684\uFF0C\u56E0\u4E3A\u53EA\u6709\u5339\u914D\u5230\u4E86\u8DEF\u7531\u624D\u4F1A\u8C03\u7528\u670D\u52A1\u56DE\u8C03\u65B9\u6CD5\u3002\u4F46\u662F\u5728\u4E8B\u4EF6\u56DE\u8C03\u51FD\u6570\u4E2D\uFF0C\u8BE5\u5BF9\u8C61\u53EF\u80FD\u4E3A ",(0,s.jsx)(n.code,{children:"nil"}),"\uFF08\u8868\u793A\u6CA1\u6709\u5339\u914D\u5230\u670D\u52A1\u56DE\u8C03\u51FD\u6570\u8DEF\u7531\uFF09\u3002\u7279\u522B\u662F\u5728\u4F7F\u7528\u4E8B\u4EF6\u56DE\u8C03\u5BF9\u8BF7\u6C42\u63A5\u53E3\u9274\u6743\u7684\u65F6\u5019\uFF0C\u5E94\u5F53\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"Request.URL"})," \u5BF9\u8C61\u83B7\u53D6\u8BF7\u6C42\u7684URL\u4FE1\u606F\uFF0C\u800C\u4E0D\u662F ",(0,s.jsx)(n.code,{children:"Request.Router"}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9759\u6001\u6587\u4EF6\u4E8B\u4EF6",children:"\u9759\u6001\u6587\u4EF6\u4E8B\u4EF6"}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679C\u4EC5\u4EC5\u662F\u63D0\u4F9BAPI\u63A5\u53E3\u670D\u52A1\uFF08\u5305\u62EC\u524D\u7F6E\u9759\u6001\u6587\u4EF6\u670D\u52A1\u4EE3\u7406\u5982 ",(0,s.jsx)(n.code,{children:"nginx"}),"\uFF09\uFF0C\u4E0D\u6D89\u53CA\u5230\u9759\u6001\u6587\u4EF6\u670D\u52A1\uFF0C\u90A3\u4E48\u53EF\u4EE5\u5FFD\u7565\u8BE5\u5C0F\u8282\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u4E8B\u4EF6\u56DE\u8C03\u540C\u6837\u80FD\u591F\u5339\u914D\u5230\u7B26\u5408\u8DEF\u7531\u89C4\u5219\u7684\u9759\u6001\u6587\u4EF6\u8BBF\u95EE\uFF08 ",(0,s.jsx)(n.a,{href:"/2.0.x/WEB%E6%9C%8D%E5%8A%A1%E5%BC%80%E5%8F%91/%E9%AB%98%E7%BA%A7%E7%89%B9%E6%80%A7/%E9%9D%99%E6%80%81%E6%96%87%E4%BB%B6%E6%9C%8D%E5%8A%A1",children:"\u9759\u6001\u6587\u4EF6"})," \u7279\u6027\u5728 ",(0,s.jsx)(n.code,{children:"gf"})," \u6846\u67B6\u4E2D\u662F\u9ED8\u8BA4\u5173\u95ED\u7684\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"WebServer"})," \u76F8\u5173\u914D\u7F6E\u6765\u624B\u52A8\u5F00\u542F\uFF0C\u5177\u4F53\u67E5\u770B ",(0,s.jsx)(n.a,{href:"/2.0.x/WEB%E6%9C%8D%E5%8A%A1%E5%BC%80%E5%8F%91/%E6%9C%8D%E5%8A%A1%E9%85%8D%E7%BD%AE/",children:"\u670D\u52A1\u914D\u7F6E"})," \u7AE0\u8282\uFF09\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4F8B\u5982\uFF0C\u6211\u4EEC\u6CE8\u518C\u4E86\u4E00\u4E2A ",(0,s.jsx)(n.code,{children:"/*"})," \u7684\u5168\u5C40\u5339\u914D\u4E8B\u4EF6\u56DE\u8C03\u8DEF\u7531\uFF0C\u90A3\u4E48 ",(0,s.jsx)(n.code,{children:"/static/js/index.js"})," \u6216\u8005 ",(0,s.jsx)(n.code,{children:"/upload/images/thumb.jpg"})," \u7B49\u7B49\u9759\u6001\u6587\u4EF6\u8BBF\u95EE\u4E5F\u4F1A\u88AB\u5339\u914D\u5230\uFF0C\u4F1A\u8FDB\u5165\u5230\u6CE8\u518C\u7684\u4E8B\u4EF6\u56DE\u8C03\u51FD\u6570\u4E2D\u8FDB\u884C\u5904\u7406\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4EEC\u53EF\u4EE5\u5728\u4E8B\u4EF6\u56DE\u8C03\u51FD\u6570\u4E2D\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"Request.IsFileRequest()"})," \u65B9\u6CD5\u6765\u5224\u65AD\u8BE5\u8BF7\u6C42\u662F\u5426\u662F\u9759\u6001\u6587\u4EF6\u8BF7\u6C42\uFF0C\u5982\u679C\u4E1A\u52A1\u903B\u8F91\u4E0D\u9700\u8981\u9759\u6001\u6587\u4EF6\u7684\u8BF7\u6C42\u4E8B\u4EF6\u56DE\u8C03\uFF0C\u90A3\u4E48\u5728\u4E8B\u4EF6\u56DE\u8C03\u51FD\u6570\u4E2D\u76F4\u63A5\u5FFD\u7565\u5373\u53EF\uFF0C\u4EE5\u4FBF\u8FDB\u884C\u9009\u62E9\u6027\u5730\u5904\u7406\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4E8B\u4EF6\u56DE\u8C03\u793A\u4F8B",children:"\u4E8B\u4EF6\u56DE\u8C03\u793A\u4F8B"}),"\n",(0,s.jsx)(n.h3,{id:"\u793A\u4F8B1\u57FA\u672C\u4F7F\u7528",children:"\u793A\u4F8B1\uFF0C\u57FA\u672C\u4F7F\u7528"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n    "github.com/gogf/gf/v2/os/glog"\n)\n\nfunc main() {\n    // \u57FA\u672C\u4E8B\u4EF6\u56DE\u8C03\u4F7F\u7528\n    p := "/:name/info/{uid}"\n    s := g.Server()\n    s.BindHookHandlerByMap(p, map[string]ghttp.HandlerFunc{\n        ghttp.HookBeforeServe:  func(r *ghttp.Request) { glog.Println(ghttp.HookBeforeServe) },\n        ghttp.HookAfterServe:   func(r *ghttp.Request) { glog.Println(ghttp.HookAfterServe) },\n        ghttp.HookBeforeOutput: func(r *ghttp.Request) { glog.Println(ghttp.HookBeforeOutput) },\n        ghttp.HookAfterOutput:  func(r *ghttp.Request) { glog.Println(ghttp.HookAfterOutput) },\n    })\n    s.BindHandler(p, func(r *ghttp.Request) {\n        r.Response.Write("\u7528\u6237:", r.Get("name"), ", uid:", r.Get("uid"))\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5F53\u8BBF\u95EE ",(0,s.jsx)(n.a,{href:"http://127.0.0.1:8199/john/info/10000",children:"http://127.0.0.1:8199/john/info/10000"})," \u65F6\uFF0C\u8FD0\u884CWebServer\u8FDB\u7A0B\u7684\u7EC8\u7AEF\u5C06\u4F1A\u6309\u7167\u4E8B\u4EF6\u7684\u6267\u884C\u6D41\u7A0B\u6253\u5370\u51FA\u5BF9\u5E94\u7684\u4E8B\u4EF6\u540D\u79F0\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u793A\u4F8B2\u76F8\u540C\u4E8B\u4EF6\u6CE8\u518C",children:"\u793A\u4F8B2\uFF0C\u76F8\u540C\u4E8B\u4EF6\u6CE8\u518C"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\n// \u4F18\u5148\u8C03\u7528\u7684HOOK\nfunc beforeServeHook1(r *ghttp.Request) {\n    r.SetParam("name", "GoFrame")\n    r.Response.Writeln("set name")\n}\n\n// \u968F\u540E\u8C03\u7528\u7684HOOK\nfunc beforeServeHook2(r *ghttp.Request) {\n    r.SetParam("site", "https://goframe.org")\n    r.Response.Writeln("set site")\n}\n\n// \u5141\u8BB8\u5BF9\u540C\u4E00\u4E2A\u8DEF\u7531\u540C\u4E00\u4E2A\u4E8B\u4EF6\u6CE8\u518C\u591A\u4E2A\u56DE\u8C03\u51FD\u6570\uFF0C\u6309\u7167\u6CE8\u518C\u987A\u5E8F\u8FDB\u884C\u4F18\u5148\u7EA7\u8C03\u7528\u3002\n// \u4E3A\u4FBF\u4E8E\u5728\u8DEF\u7531\u8868\u4E2D\u5BF9\u6BD4\u67E5\u770B\u4F18\u5148\u7EA7\uFF0C\u8FD9\u91CC\u8BB2HOOK\u56DE\u8C03\u51FD\u6570\u5355\u72EC\u5B9A\u4E49\u4E3A\u4E86\u4E24\u4E2A\u51FD\u6570\u3002\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/", func(r *ghttp.Request) {\n        r.Response.Writeln(r.Get("name"))\n        r.Response.Writeln(r.Get("site"))\n    })\n    s.BindHookHandler("/", ghttp.HookBeforeServe, beforeServeHook1)\n    s.BindHookHandler("/", ghttp.HookBeforeServe, beforeServeHook2)\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884C\u540E\uFF0C\u7EC8\u7AEF\u8F93\u51FA\u7684\u8DEF\u7531\u8868\u4FE1\u606F\u5982\u4E0B\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"SERVER  | ADDRESS | DOMAIN  | METHOD | P | ROUTE |        HANDLER        |    MIDDLEWARE\n|---------|---------|---------|--------|---|-------|-----------------------|-------------------|\n  default |  :8199  | default | ALL    | 1 | /     | main.main.func1       |\n|---------|---------|---------|--------|---|-------|-----------------------|-------------------|\n  default |  :8199  | default | ALL    | 2 | /     | main.beforeServeHook1 | HOOK_BEFORE_SERVE\n|---------|---------|---------|--------|---|-------|-----------------------|-------------------|\n  default |  :8199  | default | ALL    | 1 | /     | main.beforeServeHook2 | HOOK_BEFORE_SERVE\n|---------|---------|---------|--------|---|-------|-----------------------|-------------------|\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u624B\u52A8\u8BBF\u95EE ",(0,s.jsx)(n.a,{href:"http://127.0.0.1:8199/",children:"http://127.0.0.1:8199/"})," \u540E\uFF0C\u9875\u9762\u8F93\u51FA\u5185\u5BB9\u4E3A\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"set name\nset site\nGoFrame\nhttps://goframe.org\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u793A\u4F8B3\u6539\u53D8\u4E1A\u52A1\u903B\u8F91",children:"\u793A\u4F8B3\uFF0C\u6539\u53D8\u4E1A\u52A1\u903B\u8F91"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := g.Server()\n    // \u591A\u4E8B\u4EF6\u56DE\u8C03\u793A\u4F8B\uFF0C\u4E8B\u4EF61\n    pattern1 := "/:name/info"\n    s.BindHookHandlerByMap(pattern1, map[string]ghttp.HandlerFunc{\n        ghttp.HookBeforeServe: func(r *ghttp.Request) {\n            r.SetParam("uid", 1000)\n        },\n    })\n    s.BindHandler(pattern1, func(r *ghttp.Request) {\n        r.Response.Write("\u7528\u6237:", r.Get("name"), ", uid:", r.Get("uid"))\n    })\n\n    // \u591A\u4E8B\u4EF6\u56DE\u8C03\u793A\u4F8B\uFF0C\u4E8B\u4EF62\n    pattern2 := "/{object}/list/{page}.java"\n    s.BindHookHandlerByMap(pattern2, map[string]ghttp.HandlerFunc{\n        ghttp.HookBeforeOutput: func(r *ghttp.Request) {\n            r.Response.SetBuffer([]byte(\n                fmt.Sprintf("\u901A\u8FC7\u4E8B\u4EF6\u4FEE\u6539\u8F93\u51FA\u5185\u5BB9, object:%s, page:%s", r.Get("object"), r.GetRouterString("page"))),\n            )\n        },\n    })\n    s.BindHandler(pattern2, func(r *ghttp.Request) {\n        r.Response.Write(r.Router.Uri)\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u901A\u8FC7\u4E8B\u4EF61\u8BBE\u7F6E\u4E86\u8BBF\u95EE ",(0,s.jsx)(n.code,{children:"/:name/info"})," \u8DEF\u7531\u89C4\u5219\u65F6\u7684GET\u53C2\u6570\uFF1B\u901A\u8FC7\u4E8B\u4EF62\uFF0C\u6539\u53D8\u4E86\u5F53\u8BBF\u95EE\u7684\u8DEF\u5F84\u5339\u914D\u8DEF\u7531 ",(0,s.jsx)(n.code,{children:"/{object}/list/{page}.java"})," \u65F6\u7684\u8F93\u51FA\u7ED3\u679C\u3002\u6267\u884C\u4E4B\u540E\uFF0C\u8BBF\u95EE\u4EE5\u4E0BURL\u67E5\u770B\u6548\u679C\uFF1A"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"http://127.0.0.1:8199/user/info",children:"http://127.0.0.1:8199/user/info"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"http://127.0.0.1:8199/user/list/1.java",children:"http://127.0.0.1:8199/user/list/1.java"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"http://127.0.0.1:8199/user/list/2.java",children:"http://127.0.0.1:8199/user/list/2.java"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u793A\u4F8B4\u56DE\u8C03\u6267\u884C\u4F18\u5148\u7EA7",children:"\u793A\u4F8B4\uFF0C\u56DE\u8C03\u6267\u884C\u4F18\u5148\u7EA7"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/priority/show", func(r *ghttp.Request) {\n        r.Response.Writeln("priority service")\n    })\n\n    s.BindHookHandlerByMap("/priority/:name", map[string]ghttp.HandlerFunc{\n        ghttp.HookBeforeServe: func(r *ghttp.Request) {\n            r.Response.Writeln("/priority/:name")\n        },\n    })\n    s.BindHookHandlerByMap("/priority/*any", map[string]ghttp.HandlerFunc{\n        ghttp.HookBeforeServe: func(r *ghttp.Request) {\n            r.Response.Writeln("/priority/*any")\n        },\n    })\n    s.BindHookHandlerByMap("/priority/show", map[string]ghttp.HandlerFunc{\n        ghttp.HookBeforeServe: func(r *ghttp.Request) {\n            r.Response.Writeln("/priority/show")\n        },\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u8FD9\u4E2A\u793A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u5F80\u6CE8\u518C\u4E863\u4E2A\u8DEF\u7531\u89C4\u5219\u7684\u4E8B\u4EF6\u56DE\u8C03\uFF0C\u5E76\u4E14\u90FD\u80FD\u591F\u5339\u914D\u5230\u8DEF\u7531\u6CE8\u518C\u7684\u5730\u5740 ",(0,s.jsx)(n.code,{children:"/priority/show"}),"\uFF0C\u8FD9\u6837\u6211\u4EEC\u4FBF\u53EF\u4EE5\u901A\u8FC7\u8BBF\u95EE\u8FD9\u4E2A\u5730\u5740\u6765\u770B\u770B\u8DEF\u7531\u6267\u884C\u7684\u987A\u5E8F\u662F\u600E\u4E48\u6837\u7684\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6267\u884C\u540E\u6211\u4EEC\u8BBF\u95EE ",(0,s.jsx)(n.a,{href:"http://127.0.0.1:8199/priority/show",children:"http://127.0.0.1:8199/priority/show"})," \uFF0C\u968F\u540E\u6211\u4EEC\u770B\u5230\u9875\u9762\u8F93\u51FA\u4EE5\u4E0B\u4FE1\u606F\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"/priority/show\n/priority/:name\n/priority/*any\npriority service\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u793A\u4F8B5\u5141\u8BB8\u8DE8\u57DF\u8BF7\u6C42",children:"\u793A\u4F8B5\uFF0C\u5141\u8BB8\u8DE8\u57DF\u8BF7\u6C42"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u4E2D\u95F4\u4EF6\u548C ",(0,s.jsx)(n.a,{href:"/2.0.x/WEB%E6%9C%8D%E5%8A%A1%E5%BC%80%E5%8F%91/%E9%AB%98%E7%BA%A7%E7%89%B9%E6%80%A7/CORS%E8%B7%A8%E5%9F%9F%E5%A4%84%E7%90%86",children:"CORS\u8DE8\u57DF\u5904\u7406"})," \u7AE0\u8282\u4E5F\u6709\u4ECB\u7ECD\u8DE8\u57DF\u5904\u7406\u7684\u793A\u4F8B\uFF0C\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u4F7F\u7528\u4E2D\u95F4\u4EF6\u6765\u5904\u7406\u8DE8\u57DF\u8BF7\u6C42\u7684\u5B9E\u73B0\u5C45\u591A\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"HOOK"})," \u548C\u4E2D\u95F4\u4EF6\u90FD\u80FD\u5B9E\u73B0\u8DE8\u57DF\u8BF7\u6C42\u5904\u7406\uFF0C\u6211\u4EEC\u8FD9\u91CC\u4F7F\u7528HOOK\u6765\u5B9E\u73B0\u7B80\u5355\u7684\u8DE8\u57DF\u5904\u7406\u3002 \u9996\u5148\u6211\u4EEC\u6765\u770B\u4E00\u4E2A\u7B80\u5355\u7684\u63A5\u53E3\u793A\u4F8B\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc Order(r *ghttp.Request) {\n    r.Response.Write("GET")\n}\n\nfunc main() {\n    s := g.Server()\n    s.Group("/api.v1", func(group *ghttp.RouterGroup) {\n        group.GET("/order", Order)\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u63A5\u53E3\u5730\u5740\u662F ",(0,s.jsx)(n.a,{href:"http://localhost:8199/api.v1/order",children:"http://localhost:8199/api.v1/order"})," \uFF0C\u5F53\u7136\u8FD9\u4E2A\u63A5\u53E3\u662F\u4E0D\u5141\u8BB8\u8DE8\u57DF\u7684\u3002\u6211\u4EEC\u6253\u5F00\u4E00\u4E2A\u4E0D\u540C\u7684\u57DF\u540D\uFF0C\u4F8B\u5982\uFF1A\u767E\u5EA6\u9996\u9875(\u6B63\u597D\u7528\u4E86 ",(0,s.jsx)(n.code,{children:"jQuery"}),"\uFF0C\u65B9\u4FBF\u8C03\u8BD5)\uFF0C\u7136\u540E\u6309 ",(0,s.jsx)(n.code,{children:"F12"})," \u6253\u5F00\u5F00\u53D1\u8005\u9762\u677F\uFF0C\u5728 ",(0,s.jsx)(n.code,{children:"console"})," \u4E0B\u6267\u884C\u4EE5\u4E0B ",(0,s.jsx)(n.code,{children:"AJAX"})," \u8BF7\u6C42\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'$.get("http://localhost:8199/api.v1/order", function(result){\n    console.log(result)\n});\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(207769).Z+"",width:"1304",height:"465"})}),"\n",(0,s.jsx)(n.p,{children:"\u8FD4\u56DE\u4E86\u4E0D\u5141\u8BB8\u8DE8\u57DF\u7684\u9519\u8BEF\uFF0C\u63A5\u7740\u6211\u4EEC\u4FEE\u6539\u4E00\u4E0B\u6D4B\u8BD5\u4EE3\u7801\uFF0C\u5982\u4E0B\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc Order(r *ghttp.Request) {\n    r.Response.Write("GET")\n}\n\nfunc main() {\n    s := g.Server()\n    s.Group("/api.v1", func(group *ghttp.RouterGroup) {\n        group.Hook("/*any", ghttp.HookBeforeServe, func(r *ghttp.Request) {\n            r.Response.CORSDefault()\n        })\n        group.GET("/order", Order)\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4EEC\u589E\u52A0\u4E86\u9488\u5BF9\u4E8E\u8DEF\u7531 ",(0,s.jsx)(n.code,{children:"/api.v1/*any"})," \u7684\u7ED1\u5B9A\u4E8B\u4EF6 ",(0,s.jsx)(n.code,{children:"ghttp.HookBeforeServe"}),"\uFF0C\u8BE5\u4E8B\u4EF6\u5C06\u4F1A\u5728\u6240\u6709\u670D\u52A1\u6267\u884C\u4E4B\u524D\u8C03\u7528\uFF0C\u8BE5\u4E8B\u4EF6\u7684\u56DE\u8C03\u65B9\u6CD5\u4E2D\uFF0C\u6211\u4EEC\u901A\u8FC7\u8C03\u7528 ",(0,s.jsx)(n.code,{children:"CORSDefault"})," \u65B9\u6CD5\u4F7F\u7528\u9ED8\u8BA4\u7684\u8DE8\u57DF\u8BBE\u7F6E\u5141\u8BB8\u8DE8\u57DF\u8BF7\u6C42\u3002\u8BE5\u7ED1\u5B9A\u7684\u4E8B\u4EF6\u8DEF\u7531\u89C4\u5219\u4F7F\u7528\u4E86\u6A21\u7CCA\u5339\u914D\u89C4\u5219\uFF0C\u8868\u793A\u6240\u6709 ",(0,s.jsx)(n.code,{children:"/api.v1"})," \u5F00\u5934\u7684\u63A5\u53E3\u5730\u5740\u90FD\u5141\u8BB8\u8DE8\u57DF\u8BF7\u6C42\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8FD4\u56DE\u521A\u624D\u7684\u767E\u5EA6\u9996\u9875\uFF0C\u518D\u6B21\u6267\u884C\u8BF7\u6C42 ",(0,s.jsx)(n.code,{children:"AJAX"})," \u8BF7\u6C42\uFF0C\u8FD9\u6B21\u4FBF\u6210\u529F\u4E86\uFF1A"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(426220).Z+"",width:"1298",height:"551"})})]})}function a(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},207769:function(e,n,r){r.d(n,{Z:function(){return t}});let t=r.p+"assets/images/1023e4430f9465f325889717fe9cee7b-036a662a4b30a58e1a61a77ee68f4c98.png"},426220:function(e,n,r){r.d(n,{Z:function(){return t}});let t=r.p+"assets/images/21c0c51ca4610cf8351df5df2c84f63a-c5c9e0b2dc0dde744148a4f2024d1bbc.png"},465763:function(e,n,r){r.d(n,{Z:function(){return t}});let t=r.p+"assets/images/649b125f971a8cf6bac97961fee3927f-e1ff3e566d7c32b6bc089c21f51f0fc6.png"},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return o}});var t=r(667294);let s={},i=t.createContext(s);function o(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);