"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[88586],{33326:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>o,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/HOOK\u4e8b\u4ef6\u56de\u8c03","title":"HOOK\u4e8b\u4ef6\u56de\u8c03","description":"ghttp.Server \u63d0\u4f9b\u4e86\u4e8b\u4ef6\u56de\u8c03\u6ce8\u518c\u529f\u80fd\uff0c\u7c7b\u4f3c\u4e8e\u5176\u4ed6\u6846\u67b6\u7684 \u4e2d\u95f4\u4ef6 \u529f\u80fd\uff0c\u76f8\u6bd4\u8f83\u4e8e \u4e2d\u95f4\u4ef6\uff0c\u4e8b\u4ef6\u56de\u8c03\u7684\u7279\u6027\u66f4\u52a0\u7b80\u5355\u3002","source":"@site/versioned_docs/version-2.6.x/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/HOOK\u4e8b\u4ef6\u56de\u8c03.md","sourceDirName":"WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027","slug":"/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/HOOK\u4e8b\u4ef6\u56de\u8c03","permalink":"/en/2.6.x/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/HOOK\u4e8b\u4ef6\u56de\u8c03","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.6.x/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/HOOK\u4e8b\u4ef6\u56de\u8c03.md","tags":[],"version":"2.6.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":6,"frontMatter":{"title":"HOOK\u4e8b\u4ef6\u56de\u8c03","sidebar_position":6,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"CSRF\u9632\u5fa1\u8bbe\u7f6e","permalink":"/en/2.6.x/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/CSRF\u9632\u5fa1\u8bbe\u7f6e"},"next":{"title":"WebSocket\u670d\u52a1","permalink":"/en/2.6.x/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/WebSocket\u670d\u52a1"}}');var s=r(74848),i=r(28453);const o={title:"HOOK\u4e8b\u4ef6\u56de\u8c03",sidebar_position:6,hide_title:!0},d=void 0,c={},l=[{value:"\u56de\u8c03\u4f18\u5148\u7ea7",id:"\u56de\u8c03\u4f18\u5148\u7ea7",level:2},{value:"\u5173\u4e8e\u5168\u5c40\u56de\u8c03",id:"\u5173\u4e8e\u5168\u5c40\u56de\u8c03",level:3},{value:"\u4e1a\u52a1\u51fd\u6570\u8c03\u7528\u987a\u5e8f",id:"\u4e1a\u52a1\u51fd\u6570\u8c03\u7528\u987a\u5e8f",level:3},{value:"<code>ExitHook</code> \u65b9\u6cd5",id:"exithook-\u65b9\u6cd5",level:2},{value:"\u63a5\u53e3\u9274\u6743\u63a7\u5236",id:"\u63a5\u53e3\u9274\u6743\u63a7\u5236",level:2},{value:"\u4e2d\u95f4\u4ef6\u4e0e\u4e8b\u4ef6\u56de\u8c03",id:"\u4e2d\u95f4\u4ef6\u4e0e\u4e8b\u4ef6\u56de\u8c03",level:2},{value:"<code>Request.URL</code> \u4e0e <code>Request.Router</code>",id:"requesturl-\u4e0e-requestrouter",level:3},{value:"\u9759\u6001\u6587\u4ef6\u4e8b\u4ef6",id:"\u9759\u6001\u6587\u4ef6\u4e8b\u4ef6",level:2},{value:"\u4e8b\u4ef6\u56de\u8c03\u793a\u4f8b",id:"\u4e8b\u4ef6\u56de\u8c03\u793a\u4f8b",level:2},{value:"\u793a\u4f8b1\uff0c\u57fa\u672c\u4f7f\u7528",id:"\u793a\u4f8b1\u57fa\u672c\u4f7f\u7528",level:3},{value:"\u793a\u4f8b2\uff0c\u76f8\u540c\u4e8b\u4ef6\u6ce8\u518c",id:"\u793a\u4f8b2\u76f8\u540c\u4e8b\u4ef6\u6ce8\u518c",level:3},{value:"\u793a\u4f8b3\uff0c\u6539\u53d8\u4e1a\u52a1\u903b\u8f91",id:"\u793a\u4f8b3\u6539\u53d8\u4e1a\u52a1\u903b\u8f91",level:3},{value:"\u793a\u4f8b4\uff0c\u56de\u8c03\u6267\u884c\u4f18\u5148\u7ea7",id:"\u793a\u4f8b4\u56de\u8c03\u6267\u884c\u4f18\u5148\u7ea7",level:3},{value:"\u793a\u4f8b5\uff0c\u5141\u8bb8\u8de8\u57df\u8bf7\u6c42",id:"\u793a\u4f8b5\u5141\u8bb8\u8de8\u57df\u8bf7\u6c42",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(70283).A+"",width:"2058",height:"1298"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ghttp.Server"})," \u63d0\u4f9b\u4e86\u4e8b\u4ef6\u56de\u8c03\u6ce8\u518c\u529f\u80fd\uff0c\u7c7b\u4f3c\u4e8e\u5176\u4ed6\u6846\u67b6\u7684 ",(0,s.jsx)(n.code,{children:"\u4e2d\u95f4\u4ef6"})," \u529f\u80fd\uff0c\u76f8\u6bd4\u8f83\u4e8e ",(0,s.jsx)(n.code,{children:"\u4e2d\u95f4\u4ef6"}),"\uff0c\u4e8b\u4ef6\u56de\u8c03\u7684\u7279\u6027\u66f4\u52a0\u7b80\u5355\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ghttp.Server"})," \u652f\u6301\u7528\u6237\u5bf9\u4e8e\u67d0\u4e00\u4e8b\u4ef6\u8fdb\u884c\u81ea\u5b9a\u4e49\u76d1\u542c\u5904\u7406\uff0c\u6309\u7167 ",(0,s.jsx)(n.code,{children:"pattern"})," \u65b9\u5f0f\u8fdb\u884c\u7ed1\u5b9a\u6ce8\u518c( ",(0,s.jsx)(n.code,{children:"pattern"})," \u683c\u5f0f\u4e0e\u8def\u7531\u6ce8\u518c\u4e00\u81f4)\u3002 ",(0,s.jsx)(n.strong,{children:"\u652f\u6301\u591a\u4e2a\u65b9\u6cd5\u5bf9\u540c\u4e00\u4e8b\u4ef6\u8fdb\u884c\u76d1\u542c"}),"\uff0c ",(0,s.jsx)(n.code,{children:"ghttp.Server"})," \u5c06\u4f1a\u6309\u7167 ",(0,s.jsx)(n.code,{children:"\u8def\u7531\u4f18\u5148\u7ea7"})," \u53ca ",(0,s.jsx)(n.code,{children:"\u56de\u8c03\u6ce8\u518c\u987a\u5e8f"})," \u8fdb\u884c\u56de\u8c03\u65b9\u6cd5\u8c03\u7528\u3002\u540c\u4e00\u4e8b\u4ef6\u65f6\u5148\u6ce8\u518c\u7684HOOK\u56de\u8c03\u51fd\u6570\u4f18\u5148\u7ea7\u8d8a\u9ad8\u3002 \u76f8\u5173\u65b9\u6cd5\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"func (s *Server) BindHookHandler(pattern string, hook string, handler HandlerFunc) error\nfunc (s *Server) BindHookHandlerByMap(pattern string, hookmap map[string]HandlerFunc) error\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5f53\u7136\u57df\u540d\u5bf9\u8c61\u4e5f\u652f\u6301\u4e8b\u4ef6\u56de\u8c03\u6ce8\u518c\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"func (d *Domain) BindHookHandler(pattern string, hook string, handler HandlerFunc) error\nfunc (d *Domain) BindHookHandlerByMap(pattern string, hookmap map[string]HandlerFunc) error\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u652f\u6301\u7684 ",(0,s.jsx)(n.code,{children:"Hook"})," \u4e8b\u4ef6\u5217\u8868\uff1a"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ghttp.HookBeforeServe"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u8fdb\u5165/\u521d\u59cb\u5316\u670d\u52a1\u5bf9\u8c61\u4e4b\u524d\uff0c\u8be5\u4e8b\u4ef6\u662f\u6700\u5e38\u7528\u7684\u4e8b\u4ef6\uff0c\u7279\u522b\u662f\u9488\u5bf9\u4e8e\u6743\u9650\u63a7\u5236\u3001\u8de8\u57df\u8bf7\u6c42\u7b49\u5904\u7406\u3002"}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ghttp.HookAfterServe"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u5b8c\u6210\u670d\u52a1\u6267\u884c\u6d41\u7a0b\u4e4b\u540e\u3002"}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ghttp.HookBeforeOutput"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5411\u5ba2\u6237\u7aef\u8f93\u51fa\u8fd4\u56de\u5185\u5bb9\u4e4b\u524d\u3002"}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ghttp.HookAfterOutput"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5411\u5ba2\u6237\u7aef\u8f93\u51fa\u8fd4\u56de\u5185\u5bb9\u4e4b\u540e\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5177\u4f53\u8c03\u7528\u65f6\u673a\u8bf7\u53c2\u8003\u56fe\u4f8b\u6240\u793a\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u56de\u8c03\u4f18\u5148\u7ea7",children:"\u56de\u8c03\u4f18\u5148\u7ea7"}),"\n",(0,s.jsxs)(n.p,{children:["\u7531\u4e8e\u4e8b\u4ef6\u7684\u7ed1\u5b9a\u4e5f\u662f\u4f7f\u7528\u7684\u8def\u7531\u89c4\u5219\uff0c\u56e0\u6b64\u5b83\u7684\u4f18\u5148\u7ea7\u548c ",(0,s.jsx)(n.a,{href:"/en/2.6.x/WEB%E6%9C%8D%E5%8A%A1%E5%BC%80%E5%8F%91/%E8%B7%AF%E7%94%B1%E7%AE%A1%E7%90%86/%E8%B7%AF%E7%94%B1%E7%AE%A1%E7%90%86-%E8%B7%AF%E7%94%B1%E8%A7%84%E5%88%99",children:"\u8def\u7531\u7ba1\u7406-\u8def\u7531\u89c4\u5219"})," \u7ae0\u8282\u4ecb\u7ecd\u7684\u4f18\u5148\u7ea7\u662f\u4e00\u6837\u7684\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4f46\u662f\u4e8b\u4ef6\u8c03\u7528\u65f6\u548c\u8def\u7531\u6ce8\u518c\u8c03\u7528\u65f6\u7684\u673a\u5236\u4e0d\u4e00\u6837\uff0c ",(0,s.jsx)(n.strong,{children:"\u540c\u4e00\u4e2a\u8def\u7531\u89c4\u5219\u4e0b\u5141\u8bb8\u7ed1\u5b9a\u591a\u4e2a\u4e8b\u4ef6\u56de\u8c03\u65b9\u6cd5"}),"\uff0c\u8be5\u8def\u7531\u4e0b\u7684\u4e8b\u4ef6\u8c03\u7528\u4f1a ",(0,s.jsx)(n.code,{children:"\u6309\u7167\u4f18\u5148\u7ea7\u8fdb\u884c\u8c03\u7528"}),"\uff0c\u5047\u5982\u4f18\u5148\u7ea7\u76f8\u7b49\u7684\u8def\u7531\u89c4\u5219\uff0c\u5c06\u4f1a\u6309\u7167\u4e8b\u4ef6\u6ce8\u518c\u7684\u987a\u5e8f\u8fdb\u884c\u8c03\u7528\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u5173\u4e8e\u5168\u5c40\u56de\u8c03",children:"\u5173\u4e8e\u5168\u5c40\u56de\u8c03"}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4eec\u5f80\u5f80\u4f7f\u7528\u7ed1\u5b9a ",(0,s.jsx)(n.code,{children:"/*"})," \u8fd9\u6837\u7684 ",(0,s.jsx)(n.code,{children:"HOOK"})," \u8def\u7531\u6765\u5b9e\u73b0\u5168\u5c40\u7684\u56de\u8c03\u5904\u7406\uff0c\u8fd9\u6837\u662f\u53ef\u4ee5\u7684\u3002\u4f46\u662f ",(0,s.jsx)(n.code,{children:"HOOK"})," \u6267\u884c\u7684\u4f18\u5148\u662f\u6700\u4f4e\u7684\uff0c\u8def\u7531\u6ce8\u518c\u7684\u8d8a\u7cbe\u786e\uff0c\u4f18\u5148\u7ea7\u8d8a\u9ad8\uff0c\u8d8a\u6a21\u7cca\u7684\u8def\u7531\u4f18\u5148\u7ea7\u8d8a\u4f4e\uff0c ",(0,s.jsx)(n.code,{children:"/*"})," \u5c31\u5c5e\u4e8e\u6700\u6a21\u7cca\u7684\u8def\u7531\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4e3a\u964d\u4f4e\u4e0d\u540c\u7684\u6a21\u5757\u8026\u5408\u6027\uff0c\u6240\u6709\u7684\u8def\u7531\u5f80\u5f80\u4e0d\u662f\u5728\u540c\u4e00\u4e2a\u5730\u65b9\u8fdb\u884c\u6ce8\u518c\u3002\u4f8b\u5982\u7528\u6237\u6a21\u5757\u6ce8\u518c\u7684 ",(0,s.jsx)(n.code,{children:"HOOK"}),"( ",(0,s.jsx)(n.code,{children:"/user/*"}),")\uff0c\u5b83\u5c06\u4f1a\u88ab\u4f18\u5148\u8c03\u7528\u968f\u540e\u624d\u53ef\u80fd\u662f\u5168\u5c40\u7684 ",(0,s.jsx)(n.code,{children:"HOOK"}),"\uff1b\u5982\u679c\u4ec5\u4ec5\u4f9d\u9760\u6ce8\u518c\u987a\u5e8f\u6765\u63a7\u5236\u4f18\u5148\u7ea7\uff0c\u5728\u6a21\u5757\u591a\u8def\u7531\u591a\u7684\u65f6\u5019\u4f18\u5148\u7ea7\u4fbf\u5f88\u96be\u7ba1\u7406\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u4e1a\u52a1\u51fd\u6570\u8c03\u7528\u987a\u5e8f",children:"\u4e1a\u52a1\u51fd\u6570\u8c03\u7528\u987a\u5e8f"}),"\n",(0,s.jsxs)(n.p,{children:["\u5efa\u8bae \u76f8\u540c\u7684\u4e1a\u52a1(\u540c\u4e00\u4e1a\u52a1\u6a21\u5757) \u7684\u591a\u4e2a\u5904\u7406\u51fd\u6570(\u4f8b\u5982: A\u3001B\u3001C)\u653e\u5230\u540c\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"HOOK"})," \u56de\u8c03\u51fd\u6570\u4e2d\u8fdb\u884c\u5904\u7406\uff0c\u5728\u6ce8\u518c\u7684\u56de\u8c03\u51fd\u6570\u4e2d\u81ea\u884c\u7ba1\u7406\u4e1a\u52a1\u5904\u7406\u51fd\u6570\u7684\u8c03\u7528\u987a\u5e8f(\u51fd\u6570\u8c03\u7528\u987a\u5e8f: A-B-C)\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u867d\u7136\u540c\u6837\u7684\u9700\u6c42\uff0c\u6ce8\u518c\u591a\u4e2a\u76f8\u540c ",(0,s.jsx)(n.code,{children:"HOOK"})," \u7684\u56de\u8c03\u51fd\u6570\u4e5f\u53ef\u4ee5\u5b9e\u73b0\uff0c\u529f\u80fd\u4e0a\u4e0d\u4f1a\u6709\u95ee\u9898\uff0c\u4f46\u4ece\u8bbe\u8ba1\u7684\u89d2\u5ea6\u6765\u8bb2\uff0c\u5185\u805a\u6027\u964d\u4f4e\u4e86\uff0c\u4e0d\u4fbf\u4e8e\u4e1a\u52a1\u51fd\u6570\u7ba1\u7406\u3002"]}),"\n",(0,s.jsxs)(n.h2,{id:"exithook-\u65b9\u6cd5",children:[(0,s.jsx)(n.code,{children:"ExitHook"})," \u65b9\u6cd5"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5f53\u8def\u7531\u5339\u914d\u5230\u591a\u4e2a ",(0,s.jsx)(n.code,{children:"HOOK"})," \u65b9\u6cd5\u65f6\uff0c\u9ed8\u8ba4\u662f\u6309\u7167\u8def\u7531\u5339\u914d\u4f18\u5148\u7ea7\u987a\u5e8f\u6267\u884c ",(0,s.jsx)(n.code,{children:"HOOK"})," \u65b9\u6cd5\u3002\u5f53\u5728 ",(0,s.jsx)(n.code,{children:"HOOK"})," \u65b9\u6cd5\u4e2d\u8c03\u7528 ",(0,s.jsx)(n.code,{children:"Request.ExitHook"})," \u65b9\u6cd5\u540e\uff0c\u540e\u7eed\u7684 ",(0,s.jsx)(n.code,{children:"HOOK"})," \u65b9\u6cd5\u5c06\u4e0d\u4f1a\u88ab\u7ee7\u7eed\u6267\u884c\uff0c\u4f5c\u7528\u7c7b\u4f3c ",(0,s.jsx)(n.code,{children:"HOOK"})," \u65b9\u6cd5\u8986\u76d6\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u63a5\u53e3\u9274\u6743\u63a7\u5236",children:"\u63a5\u53e3\u9274\u6743\u63a7\u5236"}),"\n",(0,s.jsxs)(n.p,{children:["\u4e8b\u4ef6\u56de\u8c03\u6ce8\u518c\u6bd4\u8f83\u5e38\u89c1\u7684\u5e94\u7528\u662f\u5728\u5bf9\u8c03\u7528\u7684\u63a5\u53e3\u8fdb\u884c\u9274\u6743\u63a7\u5236/\u6743\u9650\u63a7\u5236\u3002\u8be5\u64cd\u4f5c\u9700\u8981\u7ed1\u5b9a ",(0,s.jsx)(n.code,{children:"ghttp.HookBeforeServe"})," \u4e8b\u4ef6\uff0c\u5728\u8be5\u4e8b\u4ef6\u4e2d\u4f1a\u5bf9\u6240\u6709\u5339\u914d\u7684\u63a5\u53e3\u8bf7\u6c42(\u4f8b\u5982\u7ed1\u5b9a ",(0,s.jsx)(n.code,{children:"/*"})," \u4e8b\u4ef6\u56de\u8c03\u8def\u7531)\u670d\u52a1\u6267\u884c\u524d\u8fdb\u884c\u56de\u8c03\u5904\u7406\u3002\u5f53\u9274\u6743\u4e0d\u901a\u8fc7\u65f6\uff0c\u9700\u8981\u8c03\u7528 ",(0,s.jsx)(n.code,{children:"r.ExitAll()"})," \u65b9\u6cd5\u9000\u51fa\u540e\u7eed\u7684\u670d\u52a1\u6267\u884c(\u5305\u62ec\u540e\u7eed\u7684\u4e8b\u4ef6\u56de\u8c03\u6267\u884c)\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6b64\u5916\uff0c\u5728\u6743\u9650\u6821\u9a8c\u7684\u4e8b\u4ef6\u56de\u8c03\u51fd\u6570\u4e2d\u6267\u884c ",(0,s.jsx)(n.code,{children:"r.Redirect*"})," \u65b9\u6cd5\uff0c\u53c8\u6ca1\u6709\u8c03\u7528 ",(0,s.jsx)(n.code,{children:"r.ExitAll()"})," \u65b9\u6cd5\u9000\u51fa\u4e1a\u52a1\u6267\u884c\uff0c\u5f80\u5f80\u4f1a\u4ea7\u751f ",(0,s.jsx)(n.code,{children:"http multiple response writeheader calls"})," \u9519\u8bef\u63d0\u793a\u3002\u56e0\u4e3a ",(0,s.jsx)(n.code,{children:"r.Redirect*"})," \u65b9\u6cd5\u4f1a\u5f80\u8fd4\u56de\u7684header\u4e2d\u5199\u5165 ",(0,s.jsx)(n.code,{children:"Location"})," \u5934\uff1b\u800c\u968f\u540e\u7684\u4e1a\u52a1\u670d\u52a1\u63a5\u53e3\u5f80\u5f80\u4f1a\u5f80header\u5199\u5165 ",(0,s.jsx)(n.code,{children:"Content-Type"}),"/ ",(0,s.jsx)(n.code,{children:"Content-Length"})," \u5934\uff0c\u8fd9\u4e24\u8005\u6709\u51b2\u7a81\u9020\u6210\u7684\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4e2d\u95f4\u4ef6\u4e0e\u4e8b\u4ef6\u56de\u8c03",children:"\u4e2d\u95f4\u4ef6\u4e0e\u4e8b\u4ef6\u56de\u8c03"}),"\n",(0,s.jsxs)(n.p,{children:["\u4e2d\u95f4\u4ef6\uff08 ",(0,s.jsx)(n.code,{children:"Middleware"}),"\uff09\u4e0e\u4e8b\u4ef6\u56de\u8c03\uff08 ",(0,s.jsx)(n.code,{children:"HOOK"}),"\uff09\u662f ",(0,s.jsx)(n.code,{children:"GF"})," \u6846\u67b6\u7684\u4e24\u5927\u6d41\u7a0b\u63a7\u5236\u7279\u6027\uff0c\u4e24\u8005\u90fd\u53ef\u7528\u4e8e\u63a7\u5236\u8bf7\u6c42\u6d41\u7a0b\uff0c\u5e76\u4e14\u4e5f\u90fd\u652f\u6301\u7ed1\u5b9a\u7279\u5b9a\u7684\u8def\u7531\u89c4\u5219\u3002\u4f46\u4e24\u8005\u533a\u522b\u4e5f\u662f\u975e\u5e38\u660e\u663e\u7684\u3002"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u9996\u5148\uff0c\u4e2d\u95f4\u4ef6\u4fa7\u91cd\u4e8e\u5e94\u7528\u7ea7\u7684\u6d41\u7a0b\u63a7\u5236\uff0c\u800c\u4e8b\u4ef6\u56de\u8c03\u4fa7\u91cd\u4e8e\u670d\u52a1\u7ea7\u6d41\u7a0b\u63a7\u5236\uff1b\u4e5f\u5c31\u662f\u8bf4\u4e2d\u95f4\u4ef6\u7684\u4f5c\u7528\u57df\u4ec5\u9650\u4e8e\u5e94\u7528\uff0c\u800c\u4e8b\u4ef6\u56de\u8c03\u7684\u201c\u6743\u9650\u201d\u66f4\u5f3a\u5927\uff0c\u5c5e\u4e8e ",(0,s.jsx)(n.code,{children:"Server"})," \u7ea7\u522b\uff0c\u5e76\u53ef\u5904\u7406\u9759\u6001\u6587\u4ef6\u7684\u8bf7\u6c42\u56de\u8c03\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u5176\u6b21\uff0c\u4e2d\u95f4\u4ef6\u8bbe\u8ba1\u91c7\u7528\u4e86\u201c\u6d0b\u8471\u201d\u8bbe\u8ba1\u6a21\u578b\uff1b\u800c\u4e8b\u4ef6\u56de\u8c03\u91c7\u7528\u7684\u662f\u7279\u5b9a\u4e8b\u4ef6\u7684\u94a9\u5b50\u89e6\u53d1\u8bbe\u8ba1\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u6700\u540e\uff0c\u4e2d\u95f4\u4ef6\u76f8\u5bf9\u6765\u8bf4\u7075\u6d3b\u6027\u66f4\u9ad8\uff0c\u4e5f\u662f\u6bd4\u8f83\u63a8\u8350\u7684\u6d41\u7a0b\u63a7\u5236\u65b9\u5f0f\uff1b\u800c\u4e8b\u4ef6\u56de\u8c03\u6bd4\u8f83\u7b80\u5355\uff0c\u4f46\u7075\u6d3b\u6027\u8f83\u5dee\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"requesturl-\u4e0e-requestrouter",children:[(0,s.jsx)(n.code,{children:"Request.URL"})," \u4e0e ",(0,s.jsx)(n.code,{children:"Request.Router"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Request.Router"})," \u662f\u5339\u914d\u5230\u7684\u8def\u7531\u5bf9\u8c61\uff0c\u5305\u542b\u8def\u7531\u6ce8\u518c\u4fe1\u606f\uff0c\u4e00\u822c\u6765\u8bf4\u5f00\u53d1\u8005\u4e0d\u4f1a\u7528\u5230\u3002 ",(0,s.jsx)(n.code,{children:"Request.URL"})," \u662f\u5e95\u5c42\u8bf7\u6c42\u7684URL\u5bf9\u8c61\uff08\u7ee7\u627f\u81ea\u6807\u51c6\u5e93 ",(0,s.jsx)(n.code,{children:"http.Request"}),"\uff09\uff0c\u5305\u542b\u8bf7\u6c42\u7684URL\u5730\u5740\u4fe1\u606f\uff0c\u7279\u522b\u662f ",(0,s.jsx)(n.code,{children:"Request.URL.Path"})," \u8868\u793a\u8bf7\u6c42\u7684URI\u5730\u5740\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u56e0\u6b64\uff0c\u5047\u5982\u5728\u670d\u52a1\u56de\u8c03\u51fd\u6570\u4e2d\u4f7f\u7528\u7684\u8bdd\uff0c ",(0,s.jsx)(n.code,{children:"Request.Router"})," \u662f\u6709\u503c\u7684\uff0c\u56e0\u4e3a\u53ea\u6709\u5339\u914d\u5230\u4e86\u8def\u7531\u624d\u4f1a\u8c03\u7528\u670d\u52a1\u56de\u8c03\u65b9\u6cd5\u3002\u4f46\u662f\u5728\u4e8b\u4ef6\u56de\u8c03\u51fd\u6570\u4e2d\uff0c\u8be5\u5bf9\u8c61\u53ef\u80fd\u4e3a ",(0,s.jsx)(n.code,{children:"nil"}),"\uff08\u8868\u793a\u6ca1\u6709\u5339\u914d\u5230\u670d\u52a1\u56de\u8c03\u51fd\u6570\u8def\u7531\uff09\u3002\u7279\u522b\u662f\u5728\u4f7f\u7528\u4e8b\u4ef6\u56de\u8c03\u5bf9\u8bf7\u6c42\u63a5\u53e3\u9274\u6743\u7684\u65f6\u5019\uff0c\u5e94\u5f53\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"Request.URL"})," \u5bf9\u8c61\u83b7\u53d6\u8bf7\u6c42\u7684URL\u4fe1\u606f\uff0c\u800c\u4e0d\u662f ",(0,s.jsx)(n.code,{children:"Request.Router"}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9759\u6001\u6587\u4ef6\u4e8b\u4ef6",children:"\u9759\u6001\u6587\u4ef6\u4e8b\u4ef6"}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u4ec5\u4ec5\u662f\u63d0\u4f9bAPI\u63a5\u53e3\u670d\u52a1\uff08\u5305\u62ec\u524d\u7f6e\u9759\u6001\u6587\u4ef6\u670d\u52a1\u4ee3\u7406\u5982 ",(0,s.jsx)(n.code,{children:"nginx"}),"\uff09\uff0c\u4e0d\u6d89\u53ca\u5230\u9759\u6001\u6587\u4ef6\u670d\u52a1\uff0c\u90a3\u4e48\u53ef\u4ee5\u5ffd\u7565\u8be5\u5c0f\u8282\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4e8b\u4ef6\u56de\u8c03\u540c\u6837\u80fd\u591f\u5339\u914d\u5230\u7b26\u5408\u8def\u7531\u89c4\u5219\u7684\u9759\u6001\u6587\u4ef6\u8bbf\u95ee\uff08 ",(0,s.jsx)(n.a,{href:"/en/2.6.x/WEB%E6%9C%8D%E5%8A%A1%E5%BC%80%E5%8F%91/%E9%AB%98%E7%BA%A7%E7%89%B9%E6%80%A7/%E9%9D%99%E6%80%81%E6%96%87%E4%BB%B6%E6%9C%8D%E5%8A%A1",children:"\u9759\u6001\u6587\u4ef6"})," \u7279\u6027\u5728 ",(0,s.jsx)(n.code,{children:"gf"})," \u6846\u67b6\u4e2d\u662f\u9ed8\u8ba4\u5173\u95ed\u7684\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"WebServer"})," \u76f8\u5173\u914d\u7f6e\u6765\u624b\u52a8\u5f00\u542f\uff0c\u5177\u4f53\u67e5\u770b ",(0,s.jsx)(n.a,{href:"/en/2.6.x/WEB%E6%9C%8D%E5%8A%A1%E5%BC%80%E5%8F%91/%E6%9C%8D%E5%8A%A1%E9%85%8D%E7%BD%AE/",children:"\u670d\u52a1\u914d\u7f6e"})," \u7ae0\u8282\uff09\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c\u6211\u4eec\u6ce8\u518c\u4e86\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"/*"})," \u7684\u5168\u5c40\u5339\u914d\u4e8b\u4ef6\u56de\u8c03\u8def\u7531\uff0c\u90a3\u4e48 ",(0,s.jsx)(n.code,{children:"/static/js/index.js"})," \u6216\u8005 ",(0,s.jsx)(n.code,{children:"/upload/images/thumb.jpg"})," \u7b49\u7b49\u9759\u6001\u6587\u4ef6\u8bbf\u95ee\u4e5f\u4f1a\u88ab\u5339\u914d\u5230\uff0c\u4f1a\u8fdb\u5165\u5230\u6ce8\u518c\u7684\u4e8b\u4ef6\u56de\u8c03\u51fd\u6570\u4e2d\u8fdb\u884c\u5904\u7406\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4eec\u53ef\u4ee5\u5728\u4e8b\u4ef6\u56de\u8c03\u51fd\u6570\u4e2d\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"Request.IsFileRequest()"})," \u65b9\u6cd5\u6765\u5224\u65ad\u8be5\u8bf7\u6c42\u662f\u5426\u662f\u9759\u6001\u6587\u4ef6\u8bf7\u6c42\uff0c\u5982\u679c\u4e1a\u52a1\u903b\u8f91\u4e0d\u9700\u8981\u9759\u6001\u6587\u4ef6\u7684\u8bf7\u6c42\u4e8b\u4ef6\u56de\u8c03\uff0c\u90a3\u4e48\u5728\u4e8b\u4ef6\u56de\u8c03\u51fd\u6570\u4e2d\u76f4\u63a5\u5ffd\u7565\u5373\u53ef\uff0c\u4ee5\u4fbf\u8fdb\u884c\u9009\u62e9\u6027\u5730\u5904\u7406\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4e8b\u4ef6\u56de\u8c03\u793a\u4f8b",children:"\u4e8b\u4ef6\u56de\u8c03\u793a\u4f8b"}),"\n",(0,s.jsx)(n.h3,{id:"\u793a\u4f8b1\u57fa\u672c\u4f7f\u7528",children:"\u793a\u4f8b1\uff0c\u57fa\u672c\u4f7f\u7528"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n    "github.com/gogf/gf/v2/os/glog"\n)\n\nfunc main() {\n    // \u57fa\u672c\u4e8b\u4ef6\u56de\u8c03\u4f7f\u7528\n    p := "/:name/info/{uid}"\n    s := g.Server()\n    s.BindHookHandlerByMap(p, map[string]ghttp.HandlerFunc{\n        ghttp.HookBeforeServe:  func(r *ghttp.Request) { glog.Println(ghttp.HookBeforeServe) },\n        ghttp.HookAfterServe:   func(r *ghttp.Request) { glog.Println(ghttp.HookAfterServe) },\n        ghttp.HookBeforeOutput: func(r *ghttp.Request) { glog.Println(ghttp.HookBeforeOutput) },\n        ghttp.HookAfterOutput:  func(r *ghttp.Request) { glog.Println(ghttp.HookAfterOutput) },\n    })\n    s.BindHandler(p, func(r *ghttp.Request) {\n        r.Response.Write("\u7528\u6237:", r.Get("name"), ", uid:", r.Get("uid"))\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5f53\u8bbf\u95ee ",(0,s.jsx)(n.a,{href:"http://127.0.0.1:8199/john/info/10000",children:"http://127.0.0.1:8199/john/info/10000"})," \u65f6\uff0c\u8fd0\u884cWebServer\u8fdb\u7a0b\u7684\u7ec8\u7aef\u5c06\u4f1a\u6309\u7167\u4e8b\u4ef6\u7684\u6267\u884c\u6d41\u7a0b\u6253\u5370\u51fa\u5bf9\u5e94\u7684\u4e8b\u4ef6\u540d\u79f0\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u793a\u4f8b2\u76f8\u540c\u4e8b\u4ef6\u6ce8\u518c",children:"\u793a\u4f8b2\uff0c\u76f8\u540c\u4e8b\u4ef6\u6ce8\u518c"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\n// \u4f18\u5148\u8c03\u7528\u7684HOOK\nfunc beforeServeHook1(r *ghttp.Request) {\n    r.SetParam("name", "GoFrame")\n    r.Response.Writeln("set name")\n}\n\n// \u968f\u540e\u8c03\u7528\u7684HOOK\nfunc beforeServeHook2(r *ghttp.Request) {\n    r.SetParam("site", "https://goframe.org")\n    r.Response.Writeln("set site")\n}\n\n// \u5141\u8bb8\u5bf9\u540c\u4e00\u4e2a\u8def\u7531\u540c\u4e00\u4e2a\u4e8b\u4ef6\u6ce8\u518c\u591a\u4e2a\u56de\u8c03\u51fd\u6570\uff0c\u6309\u7167\u6ce8\u518c\u987a\u5e8f\u8fdb\u884c\u4f18\u5148\u7ea7\u8c03\u7528\u3002\n// \u4e3a\u4fbf\u4e8e\u5728\u8def\u7531\u8868\u4e2d\u5bf9\u6bd4\u67e5\u770b\u4f18\u5148\u7ea7\uff0c\u8fd9\u91cc\u8bb2HOOK\u56de\u8c03\u51fd\u6570\u5355\u72ec\u5b9a\u4e49\u4e3a\u4e86\u4e24\u4e2a\u51fd\u6570\u3002\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/", func(r *ghttp.Request) {\n        r.Response.Writeln(r.Get("name"))\n        r.Response.Writeln(r.Get("site"))\n    })\n    s.BindHookHandler("/", ghttp.HookBeforeServe, beforeServeHook1)\n    s.BindHookHandler("/", ghttp.HookBeforeServe, beforeServeHook2)\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\u7684\u8def\u7531\u8868\u4fe1\u606f\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"SERVER  | ADDRESS | DOMAIN  | METHOD | P | ROUTE |        HANDLER        |    MIDDLEWARE\n|---------|---------|---------|--------|---|-------|-----------------------|-------------------|\n  default |  :8199  | default | ALL    | 1 | /     | main.main.func1       |\n|---------|---------|---------|--------|---|-------|-----------------------|-------------------|\n  default |  :8199  | default | ALL    | 2 | /     | main.beforeServeHook1 | HOOK_BEFORE_SERVE\n|---------|---------|---------|--------|---|-------|-----------------------|-------------------|\n  default |  :8199  | default | ALL    | 1 | /     | main.beforeServeHook2 | HOOK_BEFORE_SERVE\n|---------|---------|---------|--------|---|-------|-----------------------|-------------------|\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u624b\u52a8\u8bbf\u95ee ",(0,s.jsx)(n.a,{href:"http://127.0.0.1:8199/",children:"http://127.0.0.1:8199/"})," \u540e\uff0c\u9875\u9762\u8f93\u51fa\u5185\u5bb9\u4e3a\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"set name\nset site\nGoFrame\nhttps://goframe.org\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u793a\u4f8b3\u6539\u53d8\u4e1a\u52a1\u903b\u8f91",children:"\u793a\u4f8b3\uff0c\u6539\u53d8\u4e1a\u52a1\u903b\u8f91"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := g.Server()\n    // \u591a\u4e8b\u4ef6\u56de\u8c03\u793a\u4f8b\uff0c\u4e8b\u4ef61\n    pattern1 := "/:name/info"\n    s.BindHookHandlerByMap(pattern1, map[string]ghttp.HandlerFunc{\n        ghttp.HookBeforeServe: func(r *ghttp.Request) {\n            r.SetParam("uid", 1000)\n        },\n    })\n    s.BindHandler(pattern1, func(r *ghttp.Request) {\n        r.Response.Write("\u7528\u6237:", r.Get("name"), ", uid:", r.Get("uid"))\n    })\n\n    // \u591a\u4e8b\u4ef6\u56de\u8c03\u793a\u4f8b\uff0c\u4e8b\u4ef62\n    pattern2 := "/{object}/list/{page}.java"\n    s.BindHookHandlerByMap(pattern2, map[string]ghttp.HandlerFunc{\n        ghttp.HookBeforeOutput: func(r *ghttp.Request) {\n            r.Response.SetBuffer([]byte(\n                fmt.Sprintf("\u901a\u8fc7\u4e8b\u4ef6\u4fee\u6539\u8f93\u51fa\u5185\u5bb9, object:%s, page:%s", r.Get("object"), r.GetRouterString("page"))),\n            )\n        },\n    })\n    s.BindHandler(pattern2, func(r *ghttp.Request) {\n        r.Response.Write(r.Router.Uri)\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u901a\u8fc7\u4e8b\u4ef61\u8bbe\u7f6e\u4e86\u8bbf\u95ee ",(0,s.jsx)(n.code,{children:"/:name/info"})," \u8def\u7531\u89c4\u5219\u65f6\u7684GET\u53c2\u6570\uff1b\u901a\u8fc7\u4e8b\u4ef62\uff0c\u6539\u53d8\u4e86\u5f53\u8bbf\u95ee\u7684\u8def\u5f84\u5339\u914d\u8def\u7531 ",(0,s.jsx)(n.code,{children:"/{object}/list/{page}.java"})," \u65f6\u7684\u8f93\u51fa\u7ed3\u679c\u3002\u6267\u884c\u4e4b\u540e\uff0c\u8bbf\u95ee\u4ee5\u4e0bURL\u67e5\u770b\u6548\u679c\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"http://127.0.0.1:8199/user/info",children:"http://127.0.0.1:8199/user/info"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"http://127.0.0.1:8199/user/list/1.java",children:"http://127.0.0.1:8199/user/list/1.java"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"http://127.0.0.1:8199/user/list/2.java",children:"http://127.0.0.1:8199/user/list/2.java"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u793a\u4f8b4\u56de\u8c03\u6267\u884c\u4f18\u5148\u7ea7",children:"\u793a\u4f8b4\uff0c\u56de\u8c03\u6267\u884c\u4f18\u5148\u7ea7"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/priority/show", func(r *ghttp.Request) {\n        r.Response.Writeln("priority service")\n    })\n\n    s.BindHookHandlerByMap("/priority/:name", map[string]ghttp.HandlerFunc{\n        ghttp.HookBeforeServe: func(r *ghttp.Request) {\n            r.Response.Writeln("/priority/:name")\n        },\n    })\n    s.BindHookHandlerByMap("/priority/*any", map[string]ghttp.HandlerFunc{\n        ghttp.HookBeforeServe: func(r *ghttp.Request) {\n            r.Response.Writeln("/priority/*any")\n        },\n    })\n    s.BindHookHandlerByMap("/priority/show", map[string]ghttp.HandlerFunc{\n        ghttp.HookBeforeServe: func(r *ghttp.Request) {\n            r.Response.Writeln("/priority/show")\n        },\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u8fd9\u4e2a\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u5f80\u6ce8\u518c\u4e863\u4e2a\u8def\u7531\u89c4\u5219\u7684\u4e8b\u4ef6\u56de\u8c03\uff0c\u5e76\u4e14\u90fd\u80fd\u591f\u5339\u914d\u5230\u8def\u7531\u6ce8\u518c\u7684\u5730\u5740 ",(0,s.jsx)(n.code,{children:"/priority/show"}),"\uff0c\u8fd9\u6837\u6211\u4eec\u4fbf\u53ef\u4ee5\u901a\u8fc7\u8bbf\u95ee\u8fd9\u4e2a\u5730\u5740\u6765\u770b\u770b\u8def\u7531\u6267\u884c\u7684\u987a\u5e8f\u662f\u600e\u4e48\u6837\u7684\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6267\u884c\u540e\u6211\u4eec\u8bbf\u95ee ",(0,s.jsx)(n.a,{href:"http://127.0.0.1:8199/priority/show",children:"http://127.0.0.1:8199/priority/show"})," \uff0c\u968f\u540e\u6211\u4eec\u770b\u5230\u9875\u9762\u8f93\u51fa\u4ee5\u4e0b\u4fe1\u606f\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"/priority/show\n/priority/:name\n/priority/*any\npriority service\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u793a\u4f8b5\u5141\u8bb8\u8de8\u57df\u8bf7\u6c42",children:"\u793a\u4f8b5\uff0c\u5141\u8bb8\u8de8\u57df\u8bf7\u6c42"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"HOOK"})," \u548c\u4e2d\u95f4\u4ef6\u90fd\u80fd\u5b9e\u73b0\u8de8\u57df\u8bf7\u6c42\u5904\u7406\uff0c\u6211\u4eec\u8fd9\u91cc\u4f7f\u7528HOOK\u6765\u5b9e\u73b0\u7b80\u5355\u7684\u8de8\u57df\u5904\u7406\u3002 \u9996\u5148\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u7b80\u5355\u7684\u63a5\u53e3\u793a\u4f8b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc Order(r *ghttp.Request) {\n    r.Response.Write("GET")\n}\n\nfunc main() {\n    s := g.Server()\n    s.Group("/api.v1", func(group *ghttp.RouterGroup) {\n        group.GET("/order", Order)\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u63a5\u53e3\u5730\u5740\u662f ",(0,s.jsx)(n.a,{href:"http://localhost:8199/api.v1/order",children:"http://localhost:8199/api.v1/order"})," \uff0c\u5f53\u7136\u8fd9\u4e2a\u63a5\u53e3\u662f\u4e0d\u5141\u8bb8\u8de8\u57df\u7684\u3002\u6211\u4eec\u6253\u5f00\u4e00\u4e2a\u4e0d\u540c\u7684\u57df\u540d\uff0c\u4f8b\u5982\uff1a\u767e\u5ea6\u9996\u9875(\u6b63\u597d\u7528\u4e86 ",(0,s.jsx)(n.code,{children:"jQuery"}),"\uff0c\u65b9\u4fbf\u8c03\u8bd5)\uff0c\u7136\u540e\u6309 ",(0,s.jsx)(n.code,{children:"F12"})," \u6253\u5f00\u5f00\u53d1\u8005\u9762\u677f\uff0c\u5728 ",(0,s.jsx)(n.code,{children:"console"})," \u4e0b\u6267\u884c\u4ee5\u4e0b ",(0,s.jsx)(n.code,{children:"AJAX"})," \u8bf7\u6c42\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'$.get("http://localhost:8199/api.v1/order", function(result){\n    console.log(result)\n});\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u7ed3\u679c\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(66977).A+"",width:"1304",height:"465"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u4e86\u4e0d\u5141\u8bb8\u8de8\u57df\u7684\u9519\u8bef\uff0c\u63a5\u7740\u6211\u4eec\u4fee\u6539\u4e00\u4e0b\u6d4b\u8bd5\u4ee3\u7801\uff0c\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc Order(r *ghttp.Request) {\n    r.Response.Write("GET")\n}\n\nfunc main() {\n    s := g.Server()\n    s.Group("/api.v1", func(group *ghttp.RouterGroup) {\n        group.Hook("/*any", ghttp.HookBeforeServe, func(r *ghttp.Request) {\n            r.Response.CORSDefault()\n        })\n        group.GET("/order", Order)\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4eec\u589e\u52a0\u4e86\u9488\u5bf9\u4e8e\u8def\u7531 ",(0,s.jsx)(n.code,{children:"/api.v1/*any"})," \u7684\u7ed1\u5b9a\u4e8b\u4ef6 ",(0,s.jsx)(n.code,{children:"ghttp.HookBeforeServe"}),"\uff0c\u8be5\u4e8b\u4ef6\u5c06\u4f1a\u5728\u6240\u6709\u670d\u52a1\u6267\u884c\u4e4b\u524d\u8c03\u7528\uff0c\u8be5\u4e8b\u4ef6\u7684\u56de\u8c03\u65b9\u6cd5\u4e2d\uff0c\u6211\u4eec\u901a\u8fc7\u8c03\u7528 ",(0,s.jsx)(n.code,{children:"CORSDefault"})," \u65b9\u6cd5\u4f7f\u7528\u9ed8\u8ba4\u7684\u8de8\u57df\u8bbe\u7f6e\u5141\u8bb8\u8de8\u57df\u8bf7\u6c42\u3002\u8be5\u7ed1\u5b9a\u7684\u4e8b\u4ef6\u8def\u7531\u89c4\u5219\u4f7f\u7528\u4e86\u6a21\u7cca\u5339\u914d\u89c4\u5219\uff0c\u8868\u793a\u6240\u6709 ",(0,s.jsx)(n.code,{children:"/api.v1"})," \u5f00\u5934\u7684\u63a5\u53e3\u5730\u5740\u90fd\u5141\u8bb8\u8de8\u57df\u8bf7\u6c42\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd4\u56de\u521a\u624d\u7684\u767e\u5ea6\u9996\u9875\uff0c\u518d\u6b21\u6267\u884c\u8bf7\u6c42 ",(0,s.jsx)(n.code,{children:"AJAX"})," \u8bf7\u6c42\uff0c\u8fd9\u6b21\u4fbf\u6210\u529f\u4e86\uff1a"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(10460).A+"",width:"1298",height:"551"})})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},66977:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/5f2412c6bef1f4018905b9670c2c1230-036a662a4b30a58e1a61a77ee68f4c98.png"},70283:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/b14b0a15203c5e5e32b39e8f7635b373-e1ff3e566d7c32b6bc089c21f51f0fc6.png"},10460:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/bb6c6efc0caad505c71a7ab31ba8d88b-c5c9e0b2dc0dde744148a4f2024d1bbc.png"},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>d});var t=r(96540);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);