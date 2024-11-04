"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[81511],{89523:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>a,frontMatter:()=>c,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"quick/\u5feb\u901f\u5f00\u59cb/\u4f7f\u7528\u89c4\u8303\u8def\u7531","title":"\u4f7f\u7528\u89c4\u8303\u8def\u7531","description":"\u4e3a\u4e86\u7b80\u5316\u8def\u7531\u6ce8\u518c\u65b9\u5f0f\uff0c\u907f\u514d\u4e00\u4e9b\u7e41\u7410\u7684\u53c2\u6570\u5904\u7406\u7ec6\u8282\uff0c","source":"@site/docs/quick/\u5feb\u901f\u5f00\u59cb/\u4f7f\u7528\u89c4\u8303\u8def\u7531.md","sourceDirName":"quick/\u5feb\u901f\u5f00\u59cb","slug":"/quick/strict-router","permalink":"/en/quick/strict-router","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/quick/\u5feb\u901f\u5f00\u59cb/\u4f7f\u7528\u89c4\u8303\u8def\u7531.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730724532000,"sidebarPosition":1,"frontMatter":{"slug":"/quick/strict-router","title":"\u4f7f\u7528\u89c4\u8303\u8def\u7531","hide_title":true,"sidebar_position":1},"sidebar":"quickSidebar","previous":{"title":"\u4e2d\u95f4\u4ef6\u521d\u8bd5\u7528","permalink":"/en/quick/middleware"},"next":{"title":"\u751f\u6210\u63a5\u53e3\u6587\u6863","permalink":"/en/quick/api-doc"}}');var i=r(74848),s=r(28453);const c={slug:"/quick/strict-router",title:"\u4f7f\u7528\u89c4\u8303\u8def\u7531",hide_title:!0,sidebar_position:1},l=void 0,d={},o=[{value:"\u6570\u636e\u7ed3\u6784\u5b9a\u4e49",id:"\u6570\u636e\u7ed3\u6784\u5b9a\u4e49",level:2},{value:"\u8def\u7531\u5bf9\u8c61\u7ba1\u7406",id:"\u8def\u7531\u5bf9\u8c61\u7ba1\u7406",level:2},{value:"\u5b8c\u6574\u793a\u4f8b\u4ee3\u7801",id:"\u5b8c\u6574\u793a\u4f8b\u4ee3\u7801",level:2},{value:"\u6267\u884c\u7ed3\u679c",id:"\u6267\u884c\u7ed3\u679c",level:2},{value:"\u5b66\u4e60\u603b\u7ed3",id:"\u5b66\u4e60\u603b\u7ed3",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["\u4e3a\u4e86\u7b80\u5316\u8def\u7531\u6ce8\u518c\u65b9\u5f0f\uff0c\u907f\u514d\u4e00\u4e9b\u7e41\u7410\u7684\u53c2\u6570\u5904\u7406\u7ec6\u8282\uff0c\n\u8ba9\u5f00\u53d1\u8005\u5c06\u7cbe\u529b\u805a\u7126\u4e8e\u4e1a\u52a1\u903b\u8f91\u672c\u8eab\uff0c",(0,i.jsx)(n.code,{children:"GoFrame"}),"\u6846\u67b6\u63d0\u4f9b\u4e86\u89c4\u8303\u5316\u7684\u8def\u7531\u6ce8\u518c\u65b9\u5f0f\u3002\n\u89c4\u8303\u5316\u7684\u8def\u7531\u6ce8\u518c\u65b9\u5f0f\uff0c\u6211\u4eec\u4e3a\u4e86\u89c1\u540d\u77e5\u610f\uff0c\u4fbf\u547d\u540d\u4e3a\u4e86",(0,i.jsx)(n.strong,{children:"\u89c4\u8303\u8def\u7531"}),"\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u6570\u636e\u7ed3\u6784\u5b9a\u4e49",children:"\u6570\u636e\u7ed3\u6784\u5b9a\u4e49"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u89c4\u8303\u8def\u7531\u4e2d\uff0c\u6211\u4eec\u540c\u6837\u5b9a\u4e49\u4e00\u4e2a\u8bf7\u6c42\u7684\u6570\u636e\u7ed3\u6784\u6765\u63a5\u6536\u5ba2\u6237\u7aef\u63d0\u4ea4\u7684\u53c2\u6570\u4fe1\u606f\uff0c\u4f46\u540c\u65f6\u9700\u8981\u5b9a\u4e49\u4e00\u4e2a\u8fd4\u56de\u5bf9\u8c61\u3002\n\u76ee\u7684\u662f\u4e3a\u4e86\u672a\u6765\u8fd4\u56de\u53c2\u6570\u6269\u5c55\u7684\u9700\u8981\uff0c\u4ee5\u53ca\u672a\u6765\u6807\u51c6\u5316\u63a5\u53e3\u6587\u6863\u751f\u6210\u7684\u9700\u8981\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'type HelloReq struct {\n    g.Meta `path:"/" method:"get"`\n    Name   string `v:"required" dc:"\u59d3\u540d"`\n    Age    int    `v:"required" dc:"\u5e74\u9f84"`\n}\ntype HelloRes struct {}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u7b80\u8981\u4ecb\u7ecd\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5728\u8bf7\u6c42\u5bf9\u8c61\u4e2d\uff0c\u6211\u4eec\u591a\u4e86\u4e00\u4e2a",(0,i.jsx)(n.code,{children:"g.Meta"}),"\u5bf9\u8c61\u7684\u5f15\u7528\uff0c\u5e76\u7ed9\u5b9a\u4e86\u4e00\u4e9b\u7ed3\u6784\u4f53\u6807\u7b7e\u3002\u8be5\u5bf9\u8c61\u4e3a",(0,i.jsx)(n.strong,{children:"\u5143\u6570\u636e\u5bf9\u8c61"}),"\uff0c\u7528\u4e8e\u7ed9\u7ed3\u6784\u4f53\u5d4c\u5165\n\u4e00\u4e9b\u5b9a\u4e49\u7684\u6807\u7b7e\u4fe1\u606f\u3002\u4f8b\u5982\u5728\u672c\u793a\u4f8b\u4e2d\uff1a","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"path"}),"\uff1a\u8868\u793a\u6ce8\u518c\u7684\u8def\u7531\u5730\u5740\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"method"}),"\uff1a\u8868\u793a\u6ce8\u518c\u7ed1\u5b9a\u7684",(0,i.jsx)(n.code,{children:"HTTP Method"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5728\u5c5e\u6027\u4e2d\u540c\u6837\u51fa\u73b0\u4e24\u4e2a\u65b0\u7684\u6807\u7b7e\u540d\u79f0\uff1a","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"v"}),"\uff1a\u8868\u793a\u6821\u9a8c\u89c4\u5219\uff0c\u4e3a",(0,i.jsx)(n.code,{children:"valid"}),"\u7684\u7f29\u5199\uff0c\u7528\u4e8e\u81ea\u52a8\u6821\u9a8c\u8be5\u53c2\u6570\u3002\u8fd9\u91cc\u4f7f\u7528",(0,i.jsx)(n.code,{children:'v:"required"'}),"\u8868\u793a\u8be5\u53c2\u6570\u4e3a\u5fc5\u9700\u53c2\u6570\uff0c\u5982\u679c\u5ba2\u6237\u7aef\u672a\u4f20\u9012\u8be5\u53c2\u6570\u65f6\uff0c\u670d\u52a1\u7aef\u5c06\u4f1a\u6821\u9a8c\u5931\u8d25\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"dc"}),"\uff1a\u8868\u793a\u53c2\u6570\u63cf\u8ff0\u4fe1\u606f\uff0c\u4e3a",(0,i.jsx)(n.code,{children:"description"}),"\u7684\u7f29\u5199\uff0c\u7528\u4e8e\u63cf\u8ff0\u8be5\u53c2\u6570\u7684\u542b\u4e49\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"\u5728\u5f00\u53d1\u624b\u518c\u7684\u5bf9\u5e94\u7ae0\u8282\u4e2d\uff0c\u6709\u5173\u4e8e\u5168\u90e8\u6807\u7b7e\u4fe1\u606f\u4ee5\u53ca\u6821\u9a8c\u7ec4\u4ef6\u7684\u8be6\u7ec6\u8bb2\u89e3\uff0c\u8fd9\u91cc\u53ea\u9700\u8981\u4e86\u89e3\u5176\u4f5c\u7528\u5373\u53ef\uff0c\u4e0d\u505a\u8fc7\u591a\u4ecb\u7ecd\u3002"})}),"\n",(0,i.jsx)(n.h2,{id:"\u8def\u7531\u5bf9\u8c61\u7ba1\u7406",children:"\u8def\u7531\u5bf9\u8c61\u7ba1\u7406"}),"\n",(0,i.jsx)(n.p,{children:"\u4e3a\u4e86\u66f4\u597d\u5730\u7ba1\u7406\u8def\u7531\u6ce8\u518c\uff0c\u7279\u522b\u662f\u63a5\u53e3\u6bd4\u8f83\u591a\u7684\u573a\u666f\u4e0b\uff0c\u5982\u679c\u624b\u52a8\u4e00\u4e00\u53bb\u914d\u7f6e\u8def\u7531\u4e0e\u56de\u8c03\u51fd\u6570\u5173\u7cfb\u592a\u8fc7\u4e8e\u7e41\u7410\u3002\n\u6211\u4eec\u901a\u8fc7\u5bf9\u8c61\u5316\u7684\u5f62\u5f0f\u6765\u5c01\u88c5\u8def\u7531\u56de\u8c03\u51fd\u6570\uff0c\u901a\u8fc7\u5bf9\u8c61\u5316\u5c01\u88c5\u7684\u65b9\u5f0f\u6765\u7b80\u5316\u6211\u4eec\u7684\u8def\u7531\u7ba1\u7406\u3002\n\u6211\u4eec\u5b9a\u4e49\u4e00\u4e2a\u8def\u7531\u5bf9\u8c61\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'type Hello struct{}\n\nfunc (Hello) Say(ctx context.Context, req *HelloReq) (res *HelloRes, err error) {\n    r := g.RequestFromCtx(ctx)\n    r.Response.Writef(\n        "Hello %s! Your Age is %d",\n        req.Name,\n        req.Age,\n    )\n    return\n}\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u6211\u4eec\u5b9a\u4e49\u4e86\u4e00\u4e2a",(0,i.jsx)(n.code,{children:"Hello"}),"\u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u7528\u4e8e\u5c01\u88c5\u8def\u7531\u56de\u8c03\u51fd\u6570\uff0c\u5176\u6240\u6709\u5b9a\u4e49\u7684\u516c\u5f00\u65b9\u6cd5\u90fd\u5c06\u88ab\u4f5c\u4e3a\u8def\u7531\u56de\u8c03\u51fd\u6570\u8fdb\u884c\u6ce8\u518c\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u53ef\u4ee5\u770b\u5230\u8be5\u8def\u7531\u5bf9\u8c61\u7684",(0,i.jsx)(n.code,{children:"Say"}),"\u65b9\u6cd5\u7684\u56de\u8c03\u51fd\u6570\u7684\u5b9a\u4e49\u65b9\u5f0f\uff0c\u76f8\u6bd4\u8f83\u4e8e",(0,i.jsx)(n.code,{children:"func(*ghttp.Request)"}),"\u7684\u56de\u8c03\u51fd\u6570\u5b9a\u4e49\u65b9\u5f0f\uff0c\u66f4\u7b26\u5408\u4e1a\u52a1\u903b\u8f91\u51fd\u6570\u7684\u5b9a\u4e49\u98ce\u683c\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5728\u8def\u7531\u56de\u8c03\u65b9\u6cd5",(0,i.jsx)(n.code,{children:"Say"}),"\u4e2d\uff0c\u6211\u4eec\u901a\u8fc7",(0,i.jsx)(n.code,{children:"g.RequestFromCtx"}),"\u65b9\u6cd5\u4ece",(0,i.jsx)(n.code,{children:"ctx"}),"\u83b7\u53d6\u539f\u59cb\u7684",(0,i.jsx)(n.code,{children:"*ghttp.Request"}),"\u8bf7\u6c42\u5bf9\u8c61\uff0c\u7528\u4e8e\u81ea\u5b9a\u4e49\u8fd4\u56de\u5185\u5bb9\u6570\u636e\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5b8c\u6574\u793a\u4f8b\u4ee3\u7801",children:"\u5b8c\u6574\u793a\u4f8b\u4ee3\u7801"}),"\n",(0,i.jsxs)(n.p,{children:["\u6211\u4eec\u8c03\u6574\u6211\u4eec\u524d\u9762\u7684",(0,i.jsx)(n.code,{children:"Web Server"}),"\u7a0b\u5e8f\u5982\u4e0b\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="main.go"',children:'package main\n\nimport (\n    "context"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\ntype HelloReq struct {\n    g.Meta `path:"/" method:"get"`\n    Name   string `v:"required" dc:"\u59d3\u540d"`\n    Age    int    `v:"required" dc:"\u5e74\u9f84"`\n}\ntype HelloRes struct{}\n\ntype Hello struct{}\n\nfunc (Hello) Say(ctx context.Context, req *HelloReq) (res *HelloRes, err error) {\n    r := g.RequestFromCtx(ctx)\n    r.Response.Writef(\n        "Hello %s! Your Age is %d",\n        req.Name,\n        req.Age,\n    )\n    return\n}\n\nfunc main() {\n    s := g.Server()\n    s.Group("/", func(group *ghttp.RouterGroup) {\n        group.Bind(\n            new(Hello),\n        )\n    })\n    s.SetPort(8000)\n    s.Run()\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u672c\u793a\u4f8b\u4e2d\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u901a\u8fc7",(0,i.jsx)(n.code,{children:"s.Group"}),"\u7684\u5206\u7ec4\u8def\u7531\u65b9\u5f0f\u5b9a\u4e49\u4e00\u7ec4\u8def\u7531\u6ce8\u518c\uff0c\u5728\u5176\u56de\u8c03\u65b9\u6cd5\u4e2d\u6ce8\u518c\u7684\u6240\u6709\u8def\u7531\uff0c\u90fd\u4f1a\u5e26\u6709\u5176\u5b9a\u4e49\u7684\u5206\u7ec4\u8def\u7531\u524d\u7f00",(0,i.jsx)(n.code,{children:"/"}),"\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u901a\u8fc7",(0,i.jsx)(n.code,{children:"group.Bind"}),"\u65b9\u6cd5\u6ce8\u518c\u8def\u7531\u5bf9\u8c61\uff0c\u8be5\u65b9\u6cd5\u5c06\u4f1a\u904d\u5386\u8def\u7531\u5bf9\u8c61\u7684\u6240\u6709\u516c\u5f00\u65b9\u6cd5\uff0c\u8bfb\u53d6\u65b9\u6cd5\u7684\u8f93\u5165\u8f93\u51fa\u7ed3\u6784\u4f53\u5b9a\u4e49\uff0c\u5e76\u5bf9\u5176\u6267\u884c\u8def\u7531\u6ce8\u518c\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u6267\u884c\u7ed3\u679c",children:"\u6267\u884c\u7ed3\u679c"}),"\n",(0,i.jsxs)(n.p,{children:["\u8fd0\u884c\u540e\uff0c\u6211\u4eec\u8bbf\u95ee ",(0,i.jsx)(n.a,{href:"http://127.0.0.1:8000/?name=john&age=18",children:"http://127.0.0.1:8000/?name=john&age=18"})," \u53ef\u4ee5\u770b\u5230\uff0c\u9875\u9762\u8f93\u51fa\u7ed3\u679c\u7b26\u5408\u9884\u671f\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img.png",src:r(49465).A+"",width:"1024",height:"226"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6211\u4eec\u5c1d\u8bd5\u4e00\u4e0b\u9519\u8bef\u7684\u53c2\u6570\u8bf7\u6c42 ",(0,i.jsx)(n.a,{href:"http://127.0.0.1:8000/",children:"http://127.0.0.1:8000/"})," \u4f46\u6211\u4eec\u53d1\u73b0\uff0c\u9875\u9762\u6ca1\u6709\u8f93\u51fa\u4efb\u4f55\u7684\u7ed3\u679c\uff1f\n",(0,i.jsxs)(n.strong,{children:["\u8fd9\u662f\u7531\u4e8e\u53c2\u6570\u6821\u9a8c\u5931\u8d25\uff0c\u5e76\u672a\u8fdb\u5165\u5230\u6211\u4eec\u7684\u8def\u7531\u56de\u8c03\u51fd\u6570\u4e2d\uff0c\u800c\u662f\u88ab",(0,i.jsx)(n.code,{children:"Server"}),"\u76f4\u63a5\u8fd4\u56de\u4e86\u3002"]})]}),"\n",(0,i.jsx)(n.h2,{id:"\u5b66\u4e60\u603b\u7ed3",children:"\u5b66\u4e60\u603b\u7ed3"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u672c\u7ae0\u8282\u6211\u4eec\u5b66\u4f1a\u4e86\u89c4\u8303\u7684\u8def\u7531\u6ce8\u518c\u65b9\u5f0f\uff0c\u4f46\u662f\u8fd8\u7f3a\u5c11\u5bf9\u8fd4\u56de\u7ed3\u679c\uff0c\u7279\u522b\u662f\u4ea7\u751f\u9519\u8bef\u4e4b\u540e\u7684\u7edf\u4e00\u5904\u7406\u63a7\u5236\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u90a3\u4e48\uff0c\u6211\u4eec\u5e94\u8be5\u5982\u4f55\u6355\u83b7\u6821\u9a8c\u5931\u8d25\u9519\u8bef\u5e76\u81ea\u5b9a\u4e49\u8fd4\u56de\u6570\u636e\u5462\uff1f\u6211\u4eec\u5c06\u5728\u4e0b\u4e00\u7ae0\u8282\u66f4\u8fdb\u4e00\u6b65\u4ecb\u7ecd\u3002"})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},49465:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/img-0c2fc34c17e9ca5ab24ca490b332cc85.png"},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>l});var t=r(96540);const i={},s=t.createContext(i);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);