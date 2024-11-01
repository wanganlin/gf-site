"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[4714],{87794:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>j,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var t=r(74848),s=r(28453);const c={slug:"/web/router/registering-struct",title:"\u8def\u7531\u6ce8\u518c-\u5bf9\u8c61\u6ce8\u518c",sidebar_position:1,hide_title:!0},o=void 0,i={id:"WEB\u670d\u52a1\u5f00\u53d1/\u8def\u7531\u7ba1\u7406/\u8def\u7531\u7ba1\u7406-\u8def\u7531\u6ce8\u518c/\u8def\u7531\u6ce8\u518c-\u5bf9\u8c61\u6ce8\u518c",title:"\u8def\u7531\u6ce8\u518c-\u5bf9\u8c61\u6ce8\u518c",description:"\u5bf9\u8c61\u6ce8\u518c \u662f\u901a\u8fc7\u4e00\u4e2a\u5b9e\u4f8b\u5316\u7684\u5bf9\u8c61\u6765\u6267\u884c\u8def\u7531\u6ce8\u518c\uff0c\u4ee5\u540e\u6bcf\u4e00\u4e2a\u8bf7\u6c42\u90fd\u4ea4\u7ed9\u8be5\u5bf9\u8c61\uff08\u540c\u4e00\u5bf9\u8c61\uff09\u5904\u7406\uff0c \u8be5\u5bf9\u8c61\u5e38\u9a7b\u5185\u5b58\u4e0d\u91ca\u653e\u3002",source:"@site/docs/WEB\u670d\u52a1\u5f00\u53d1/\u8def\u7531\u7ba1\u7406/\u8def\u7531\u7ba1\u7406-\u8def\u7531\u6ce8\u518c/\u8def\u7531\u6ce8\u518c-\u5bf9\u8c61\u6ce8\u518c.md",sourceDirName:"WEB\u670d\u52a1\u5f00\u53d1/\u8def\u7531\u7ba1\u7406/\u8def\u7531\u7ba1\u7406-\u8def\u7531\u6ce8\u518c",slug:"/web/router/registering-struct",permalink:"/docs/web/router/registering-struct",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/docs/WEB\u670d\u52a1\u5f00\u53d1/\u8def\u7531\u7ba1\u7406/\u8def\u7531\u7ba1\u7406-\u8def\u7531\u6ce8\u518c/\u8def\u7531\u6ce8\u518c-\u5bf9\u8c61\u6ce8\u518c.md",tags:[],version:"current",lastUpdatedBy:"John",lastUpdatedAt:1730442679e3,sidebarPosition:1,frontMatter:{slug:"/web/router/registering-struct",title:"\u8def\u7531\u6ce8\u518c-\u5bf9\u8c61\u6ce8\u518c",sidebar_position:1,hide_title:!0},sidebar:"hiddenSidebar",previous:{title:"\u8def\u7531\u6ce8\u518c-\u51fd\u6570\u6ce8\u518c",permalink:"/docs/web/router/registering-callback"},next:{title:"\u8def\u7531\u6ce8\u518c-\u5206\u7ec4\u8def\u7531",permalink:"/docs/web/router/registering-group"}},d={},l=[{value:"\u5bf9\u8c61\u6ce8\u518c- <code>BindObject</code>",id:"\u5bf9\u8c61\u6ce8\u518c--bindobject",level:2},{value:"\u8def\u7531\u5185\u7f6e\u53d8\u91cf",id:"\u8def\u7531\u5185\u7f6e\u53d8\u91cf",level:3},{value:"\u547d\u540d\u98ce\u683c\u89c4\u5219",id:"\u547d\u540d\u98ce\u683c\u89c4\u5219",level:3},{value:"\u5bf9\u8c61\u65b9\u6cd5\u6ce8\u518c",id:"\u5bf9\u8c61\u65b9\u6cd5\u6ce8\u518c",level:3},{value:"\u7ed1\u5b9a\u8def\u7531\u65b9\u6cd5- <code>BindObjectMethod</code>",id:"\u7ed1\u5b9a\u8def\u7531\u65b9\u6cd5--bindobjectmethod",level:2},{value:"<code>RESTful</code> \u5bf9\u8c61\u6ce8\u518c- <code>BindObjectRest</code>",id:"restful-\u5bf9\u8c61\u6ce8\u518c--bindobjectrest",level:2},{value:"\u6784\u9020\u65b9\u6cd5 <code>Init</code> \u4e0e\u6790\u6784\u65b9\u6cd5 <code>Shut</code>",id:"\u6784\u9020\u65b9\u6cd5-init-\u4e0e\u6790\u6784\u65b9\u6cd5-shut",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u5bf9\u8c61\u6ce8\u518c"})," \u662f\u901a\u8fc7\u4e00\u4e2a\u5b9e\u4f8b\u5316\u7684\u5bf9\u8c61\u6765\u6267\u884c\u8def\u7531\u6ce8\u518c\uff0c\u4ee5\u540e\u6bcf\u4e00\u4e2a\u8bf7\u6c42\u90fd\u4ea4\u7ed9\u8be5\u5bf9\u8c61\uff08\u540c\u4e00\u5bf9\u8c61\uff09\u5904\u7406\uff0c ",(0,t.jsx)(n.strong,{children:"\u8be5\u5bf9\u8c61\u5e38\u9a7b\u5185\u5b58\u4e0d\u91ca\u653e"}),"\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u76f8\u5173\u65b9\u6cd5"}),"\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func (s *Server) BindObject(pattern string, object interface{}, methods ...string) error\nfunc (s *Server) BindObjectMethod(pattern string, object interface{}, method string) error\nfunc (s *Server) BindObjectRest(pattern string, object interface{}) error\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u524d\u7f6e\u7ea6\u5b9a"}),"\uff1a\u9700\u8981\u8fdb\u884c\u8def\u7531\u6ce8\u518c\u7684\u65b9\u6cd5\u5fc5\u987b\u4e3a ",(0,t.jsx)(n.strong,{children:"\u516c\u5f00\u65b9\u6cd5"}),"\uff0c\u5e76\u4e14 ",(0,t.jsx)(n.strong,{children:"\u65b9\u6cd5\u5b9a\u4e49"})," \u5982\u4e0b\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func(r *ghttp.Request)\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5426\u5219\u65e0\u6cd5\u5b8c\u6210\u6ce8\u518c\uff0c\u8def\u7531\u6ce8\u518c\u65f6\u5c06\u4f1a\u6709\u9519\u8bef\u63d0\u793a\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"panic: interface conversion: interface {} is xxx, not func(*ghttp.Request)\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"\u5bf9\u8c61\u6ce8\u518c--bindobject",children:["\u5bf9\u8c61\u6ce8\u518c- ",(0,t.jsx)(n.code,{children:"BindObject"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"BindObject"})," \u65b9\u6cd5\u5b8c\u6210\u5bf9\u8c61\u7684\u6ce8\u518c\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\ntype Controller struct{}\n\nfunc (c *Controller) Index(r *ghttp.Request) {\n    r.Response.Write("index")\n}\n\nfunc (c *Controller) Show(r *ghttp.Request) {\n    r.Response.Write("show")\n}\n\nfunc main() {\n    s := g.Server()\n    c := new(Controller)\n    s.BindObject("/object", c)\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u5bf9\u8c61\u5728\u8fdb\u884c\u8def\u7531\u6ce8\u518c\u65f6\u4fbf\u751f\u6210\u4e86\u4e00\u4e2a\u5bf9\u8c61\uff08\u5bf9\u8c61\u5728 ",(0,t.jsx)(n.code,{children:"Server"})," \u542f\u52a8\u65f6\u4fbf\u751f\u6210\uff09\uff0c\u6b64\u540e\u4e0d\u7ba1\u591a\u5c11\u8bf7\u6c42\u8fdb\u5165\uff0c ",(0,t.jsx)(n.code,{children:"Server"})," \u90fd\u662f\u5c06\u8bf7\u6c42\u8f6c\u4ea4\u7ed9\u8be5\u5bf9\u8c61\u5bf9\u5e94\u7684\u65b9\u6cd5\u8fdb\u884c\u5904\u7406\u3002\u8be5\u793a\u4f8b\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\u7684\u8def\u7531\u8868\u5982\u4e0b\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"SERVER  | DOMAIN  | ADDRESS | METHOD |     ROUTE     |         HANDLER          | MIDDLEWARE\n|---------|---------|---------|--------|---------------|--------------------------|------------|\n  default | default | :8199   | ALL    | /object       | main.(*Controller).Index |\n|---------|---------|---------|--------|---------------|--------------------------|------------|\n  default | default | :8199   | ALL    | /object/index | main.(*Controller).Index |\n|---------|---------|---------|--------|---------------|--------------------------|------------|\n  default | default | :8199   | ALL    | /object/show  | main.(*Controller).Show  |\n|---------|---------|---------|--------|---------------|--------------------------|------------|\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u968f\u540e\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.a,{href:"http://127.0.0.1:8199/object/show",children:"http://127.0.0.1:8199/object/show"})," \u67e5\u770b\u6548\u679c\u3002"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["\u63a7\u5236\u5668\u4e2d\u7684 ",(0,t.jsx)(n.code,{children:"Index"})," \u65b9\u6cd5\u662f\u4e00\u4e2a\u7279\u6b8a\u7684\u65b9\u6cd5\uff0c\u4f8b\u5982\uff0c\u5f53\u6ce8\u518c\u7684\u8def\u7531\u89c4\u5219\u4e3a ",(0,t.jsx)(n.code,{children:"/user"})," \u65f6\uff0cHTTP\u8bf7\u6c42\u5230 ",(0,t.jsx)(n.code,{children:"/user"})," \u65f6\uff0c\u5c06\u4f1a\u81ea\u52a8\u6620\u5c04\u5230\u63a7\u5236\u5668\u7684 ",(0,t.jsx)(n.code,{children:"Index"})," \u65b9\u6cd5\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u8bbf\u95ee\u5730\u5740 ",(0,t.jsx)(n.code,{children:"/user"})," \u548c ",(0,t.jsx)(n.code,{children:"/user/index"})," \u5c06\u4f1a\u8fbe\u5230\u76f8\u540c\u7684\u6267\u884c\u6548\u679c\u3002"]})}),"\n",(0,t.jsx)(n.h3,{id:"\u8def\u7531\u5185\u7f6e\u53d8\u91cf",children:"\u8def\u7531\u5185\u7f6e\u53d8\u91cf"}),"\n",(0,t.jsxs)(n.p,{children:["\u5f53\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"BindObject"})," \u65b9\u6cd5\u8fdb\u884c\u5bf9\u8c61\u6ce8\u518c\u65f6\uff0c\u5728\u8def\u7531\u89c4\u5219\u4e2d\u53ef\u4ee5\u4f7f\u7528\u4e24\u4e2a\u5185\u7f6e\u7684\u53d8\u91cf\uff1a ",(0,t.jsx)(n.code,{children:"{.struct}"})," \u548c ",(0,t.jsx)(n.code,{children:"{.method}"}),"\uff0c\u524d\u8005\u8868\u793a\u5f53\u524d ",(0,t.jsx)(n.strong,{children:"\u5bf9\u8c61\u540d\u79f0"}),"\uff0c\u540e\u8005\u8868\u793a\u5f53\u524d\u6ce8\u518c\u7684 ",(0,t.jsx)(n.strong,{children:"\u65b9\u6cd5\u540d"}),"\u3002\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u4f8b\u5b50\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\ntype Order struct{}\n\nfunc (o *Order) List(r *ghttp.Request) {\n    r.Response.Write("list")\n}\n\nfunc main() {\n    s := g.Server()\n    o := new(Order)\n    s.BindObject("/{.struct}-{.method}", o)\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\u7684\u8def\u7531\u8868\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"SERVER  | DOMAIN  | ADDRESS | METHOD |    ROUTE    |      HANDLER       | MIDDLEWARE\n|---------|---------|---------|--------|-------------|--------------------|------------|\n  default | default | :8199   | ALL    | /order-list | main.(*Order).List |\n|---------|---------|---------|--------|-------------|--------------------|------------|\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u6211\u4eec\u5c1d\u8bd5\u7740\u8bbf\u95ee ",(0,t.jsx)(n.a,{href:"http://127.0.0.1:8199/order-list",children:"http://127.0.0.1:8199/order-list"})," \uff0c\u53ef\u4ee5\u770b\u5230\u9875\u9762\u8f93\u51fa ",(0,t.jsx)(n.code,{children:"list"}),"\u3002\u5982\u679c\u8def\u7531\u89c4\u5219\u4e2d\u4e0d\u4f7f\u7528\u5185\u7f6e\u53d8\u91cf\uff0c\u90a3\u4e48\u9ed8\u8ba4\u7684\u60c5\u51b5\u4e0b\uff0c\u65b9\u6cd5\u5c06\u4f1a\u88ab\u8ffd\u52a0\u5230\u6307\u5b9a\u7684\u8def\u7531\u89c4\u5219\u672b\u5c3e\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u547d\u540d\u98ce\u683c\u89c4\u5219",children:"\u547d\u540d\u98ce\u683c\u89c4\u5219"}),"\n",(0,t.jsxs)(n.p,{children:["\u901a\u8fc7\u5bf9\u8c61\u8fdb\u884c\u8def\u7531\u6ce8\u518c\u65f6\uff0c\u53ef\u4ee5\u6839\u636e\u5bf9\u8c61\u53ca\u65b9\u6cd5\u540d\u79f0\u81ea\u52a8\u751f\u6210\u8def\u7531\u89c4\u5219\uff0c\u9ed8\u8ba4\u7684\u8def\u7531\u89c4\u5219\u4e3a\uff1a\u5f53\u65b9\u6cd5\u540d\u79f0\u5e26\u6709\u591a\u4e2a ",(0,t.jsx)(n.code,{children:"\u5355\u8bcd"}),"\uff08\u6309\u7167\u5b57\u7b26\u5927\u5199\u533a\u5206\u5355\u8bcd\uff09\u65f6\uff0c\u8def\u7531\u63a7\u5236\u5668\u9ed8\u8ba4\u4f1a\u81ea\u52a8\u4f7f\u7528\u82f1\u6587\u8fde\u63a5\u7b26\u53f7 ",(0,t.jsx)(n.code,{children:"-"})," \u8fdb\u884c\u62fc\u63a5\uff0c\u56e0\u6b64\u8bbf\u95ee\u7684\u65f6\u5019\u65b9\u6cd5\u540d\u79f0\u9700\u8981\u5e26 ",(0,t.jsx)(n.code,{children:"-"})," \u53f7\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c\u65b9\u6cd5\u540d\u4e3a ",(0,t.jsx)(n.code,{children:"UserName"})," \u65f6\uff0c\u751f\u6210\u7684\u8def\u7531\u4e3a ",(0,t.jsx)(n.code,{children:"user-name"}),"\uff1b\u65b9\u6cd5\u540d\u4e3a ",(0,t.jsx)(n.code,{children:"ShowListItems"})," \u65f6\uff0c\u751f\u6210\u7684\u8def\u7531\u4e3a ",(0,t.jsx)(n.code,{children:"show-list-items"}),"\uff1b\u4ee5\u6b64\u7c7b\u63a8\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u6b64\u5916\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:".Server.SetNameToUriType"})," \u65b9\u6cd5\u6765\u8bbe\u7f6e\u5bf9\u8c61\u65b9\u6cd5\u540d\u79f0\u7684\u8def\u7531\u751f\u6210\u65b9\u5f0f\u3002\u652f\u6301\u7684\u65b9\u5f0f\u76ee\u524d\u6709 ",(0,t.jsx)(n.code,{children:"4"})," \u79cd\uff0c\u5bf9\u5e94 ",(0,t.jsx)(n.code,{children:"4"})," \u4e2a\u5e38\u91cf\u5b9a\u4e49\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"UriTypeDefault  = 0 // \uff08\u9ed8\u8ba4\uff09\u5168\u90e8\u8f6c\u4e3a\u5c0f\u5199\uff0c\u5355\u8bcd\u4ee5'-'\u8fde\u63a5\u7b26\u53f7\u8fde\u63a5\nUriTypeFullName = 1 // \u4e0d\u5904\u7406\u540d\u79f0\uff0c\u4ee5\u539f\u6709\u540d\u79f0\u6784\u5efa\u6210URI\nUriTypeAllLower = 2 // \u4ec5\u8f6c\u4e3a\u5c0f\u5199\uff0c\u5355\u8bcd\u95f4\u4e0d\u4f7f\u7528\u8fde\u63a5\u7b26\u53f7\nUriTypeCamel    = 3 // \u91c7\u7528\u9a7c\u5cf0\u547d\u540d\u65b9\u5f0f\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u6ce8\u610f\uff1a\u9700\u8981\u5728\u901a\u8fc7\u5bf9\u8c61\u8fdb\u884c\u8def\u7531\u6ce8\u518c\u524d\u8fdb\u884c\u8be5\u53c2\u6570\u7684\u8bbe\u7f6e\uff0c\u5728\u8def\u7531\u6ce8\u518c\u540e\u8bbe\u7f6e\u5c06\u4e0d\u4f1a\u751f\u6548\uff0c\u90a3\u4e48\u5c06\u4f7f\u7528\u9ed8\u8ba4\u89c4\u5219\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u793a\u4f8b\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\ntype User struct{}\n\nfunc (u *User) ShowList(r *ghttp.Request) {\n    r.Response.Write("list")\n}\n\nfunc main() {\n    u := new(User)\n    s1 := g.Server("UriTypeDefault")\n    s2 := g.Server("UriTypeFullName")\n    s3 := g.Server("UriTypeAllLower")\n    s4 := g.Server("UriTypeCamel")\n\n    s1.SetNameToUriType(ghttp.UriTypeDefault)\n    s2.SetNameToUriType(ghttp.UriTypeFullName)\n    s3.SetNameToUriType(ghttp.UriTypeAllLower)\n    s4.SetNameToUriType(ghttp.UriTypeCamel)\n\n    s1.BindObject("/{.struct}/{.method}", u)\n    s2.BindObject("/{.struct}/{.method}", u)\n    s3.BindObject("/{.struct}/{.method}", u)\n    s4.BindObject("/{.struct}/{.method}", u)\n\n    s1.SetPort(8100)\n    s2.SetPort(8200)\n    s3.SetPort(8300)\n    s4.SetPort(8400)\n\n    s1.Start()\n    s2.Start()\n    s3.Start()\n    s4.Start()\n\n    g.Wait()\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u4e3a\u4e86\u5bf9\u6bd4\u6f14\u793a\u6548\u679c\uff0c\u8fd9\u4e2a\u793a\u4f8b\u91c7\u7528\u4e86 ",(0,t.jsx)(n.code,{children:"\u591aServer"})," \u8fd0\u884c\u65b9\u5f0f\uff0c\u5c06\u4e0d\u540c\u7684\u540d\u79f0\u8f6c\u6362\u65b9\u5f0f\u4f7f\u7528\u4e86\u4e0d\u540c\u7684 ",(0,t.jsx)(n.code,{children:"Server"})," \u6765\u914d\u7f6e\u8fd0\u884c\uff0c\u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u65b9\u4fbf\u5730\u5728\u540c\u4e00\u4e2a\u7a0b\u5e8f\u4e2d\uff0c\u8bbf\u95ee\u4e0d\u540c\u7684 ",(0,t.jsx)(n.code,{children:"Server"}),"\uff08\u901a\u8fc7\u4e0d\u540c\u7684\u7aef\u53e3\u7ed1\u5b9a\uff09\u770b\u5230\u4e0d\u540c\u7684\u7ed3\u679c\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\u7684\u8def\u7531\u8868\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"      SERVER     | DOMAIN  | ADDRESS | METHOD |      ROUTE      |        HANDLER        | MIDDLEWARE\n-----------------|---------|---------|--------|-----------------|-----------------------|-------------\n  UriTypeDefault | default | :8100   | ALL    | /user/show-list | main.(*User).ShowList |\n-----------------|---------|---------|--------|-----------------|-----------------------|-------------\n\n      SERVER      | DOMAIN  | ADDRESS | METHOD |     ROUTE      |        HANDLER        | MIDDLEWARE\n------------------|---------|---------|--------|----------------|-----------------------|-------------\n  UriTypeFullName | default | :8200   | ALL    | /User/ShowList | main.(*User).ShowList |\n------------------|---------|---------|--------|----------------|-----------------------|-------------\n\n      SERVER      | DOMAIN  | ADDRESS | METHOD |     ROUTE      |        HANDLER        | MIDDLEWARE\n------------------|---------|---------|--------|----------------|-----------------------|-------------\n  UriTypeAllLower | default | :8300   | ALL    | /user/showlist | main.(*User).ShowList |\n------------------|---------|---------|--------|----------------|-----------------------|-------------\n\n     SERVER    | DOMAIN  | ADDRESS | METHOD |     ROUTE      |        HANDLER        | MIDDLEWARE\n---------------|---------|---------|--------|----------------|-----------------------|-------------\n  UriTypeCamel | default | :8400   | ALL    | /user/showList | main.(*User).ShowList |\n---------------|---------|---------|--------|----------------|-----------------------|-------------\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u53ef\u4ee5\u5206\u522b\u8bbf\u95ee\u4ee5\u4e0b ",(0,t.jsx)(n.code,{children:"URL"})," \u5730\u5740\u5f97\u5230\u671f\u671b\u7684\u7ed3\u679c\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"http://127.0.0.1:8100/user/show-list\nhttp://127.0.0.1:8200/User/ShowList\nhttp://127.0.0.1:8300/user/showlist\nhttp://127.0.0.1:8400/user/showList\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u5bf9\u8c61\u65b9\u6cd5\u6ce8\u518c",children:"\u5bf9\u8c61\u65b9\u6cd5\u6ce8\u518c"}),"\n",(0,t.jsxs)(n.p,{children:["\u5047\u5982\u63a7\u5236\u5668\u4e2d\u6709\u82e5\u5e72\u516c\u5f00\u65b9\u6cd5\uff0c\u4f46\u662f\u6211\u53ea\u60f3\u6ce8\u518c\u5176\u4e2d\u51e0\u4e2a\uff0c\u5176\u4f59\u7684\u65b9\u6cd5\u6211\u4e0d\u60f3\u5bf9\u5916\u516c\u5f00\uff0c\u600e\u4e48\u529e\uff1f\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"BindObject"})," \u4f20\u9012 ",(0,t.jsx)(n.strong,{children:"\u7b2c\u4e09\u4e2a\u975e\u5fc5\u9700\u53c2\u6570"})," \u66ff\u6362\u5b9e\u73b0\uff0c\u53c2\u6570\u652f\u6301\u4f20\u5165 ",(0,t.jsx)(n.strong,{children:"\u591a\u4e2a"})," \u65b9\u6cd5\u540d\u79f0\uff0c\u591a\u4e2a\u540d\u79f0\u4ee5\u82f1\u6587 ",(0,t.jsx)(n.code,{children:","})," \u53f7\u5206\u9694\uff08 ",(0,t.jsx)(n.strong,{children:"\u65b9\u6cd5\u540d\u79f0\u53c2\u6570\u533a\u5206\u5927\u5c0f\u5199"}),"\uff09\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\ntype Controller struct{}\n\nfunc (c *Controller) Index(r *ghttp.Request) {\n    r.Response.Write("index")\n}\n\nfunc (c *Controller) Show(r *ghttp.Request) {\n    r.Response.Write("show")\n}\n\nfunc main() {\n    s := g.Server()\n    c := new(Controller)\n    s.BindObject("/object", c, "Show")\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\u8def\u7531\u8868\u4e3a\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"SERVER  | DOMAIN  | ADDRESS | METHOD |    ROUTE     |         HANDLER         | MIDDLEWARE\n|---------|---------|---------|--------|--------------|-------------------------|------------|\n  default | default | :8199   | ALL    | /object/show | main.(*Controller).Show |\n|---------|---------|---------|--------|--------------|-------------------------|------------|\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"\u7ed1\u5b9a\u8def\u7531\u65b9\u6cd5--bindobjectmethod",children:["\u7ed1\u5b9a\u8def\u7531\u65b9\u6cd5- ",(0,t.jsx)(n.code,{children:"BindObjectMethod"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"BindObjectMethod"})," \u65b9\u6cd5\u7ed1\u5b9a\u6307\u5b9a\u7684\u8def\u7531\u5230\u6307\u5b9a\u7684\u65b9\u6cd5\u6267\u884c\uff08 ",(0,t.jsx)(n.strong,{children:"\u65b9\u6cd5\u540d\u79f0\u53c2\u6570\u533a\u5206\u5927\u5c0f\u5199"}),"\uff09\u3002"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"BindObjectMethod"})," \u548c ",(0,t.jsx)(n.code,{children:"BindObject"})," \u7684\u533a\u522b\uff1a ",(0,t.jsx)(n.code,{children:"BindObjectMethod"})," \u5c06\u5bf9\u8c61\u4e2d\u7684\u6307\u5b9a\u65b9\u6cd5\u4e0e\u6307\u5b9a\u8def\u7531\u89c4\u5219\u8fdb\u884c\u7ed1\u5b9a\uff0c\u7b2c\u4e09\u4e2a ",(0,t.jsx)(n.code,{children:"method"})," \u53c2\u6570\u53ea\u80fd\u6307\u5b9a\u4e00\u4e2a\u65b9\u6cd5\u540d\u79f0\uff1b ",(0,t.jsx)(n.code,{children:"BindObject"})," \u6ce8\u518c\u65f6\uff0c\u6240\u6709\u7684\u8def\u7531\u90fd\u662f\u5bf9\u8c61\u65b9\u6cd5\u540d\u79f0\u6309\u7167\u89c4\u5219\u751f\u6210\u7684\uff0c\u7b2c\u4e09\u4e2a ",(0,t.jsx)(n.code,{children:"methods"})," \u53c2\u6570\u53ef\u4ee5\u6307\u5b9a\u591a\u4e2a\u6ce8\u518c\u7684\u65b9\u6cd5\u540d\u79f0\u3002"]})}),"\n",(0,t.jsx)(n.p,{children:"\u6765\u770b\u4e00\u4e2a\u4f8b\u5b50\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\ntype Controller struct{}\n\nfunc (c *Controller) Index(r *ghttp.Request) {\n    r.Response.Write("index")\n}\n\nfunc (c *Controller) Show(r *ghttp.Request) {\n    r.Response.Write("show")\n}\n\nfunc main() {\n    s := g.Server()\n    c := new(Controller)\n    s.BindObjectMethod("/show", c, "Show")\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\u7684\u8def\u7531\u8868\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"SERVER  | DOMAIN  | ADDRESS | METHOD | ROUTE |         HANDLER         | MIDDLEWARE\n|---------|---------|---------|--------|-------|-------------------------|------------|\n  default | default | :8199   | ALL    | /show | main.(*Controller).Show |\n|---------|---------|---------|--------|-------|-------------------------|------------|\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"restful-\u5bf9\u8c61\u6ce8\u518c--bindobjectrest",children:[(0,t.jsx)(n.code,{children:"RESTful"})," \u5bf9\u8c61\u6ce8\u518c- ",(0,t.jsx)(n.code,{children:"BindObjectRest"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"RESTful"})," \u8bbe\u8ba1\u65b9\u5f0f\u7684\u63a7\u5236\u5668\uff0c\u901a\u5e38\u7528\u4e8e ",(0,t.jsx)(n.code,{children:"API"})," \u670d\u52a1\u3002 ",(0,t.jsxs)(n.strong,{children:["\u5728\u8fd9\u79cd\u6a21\u5f0f\u4e0b\uff0c ",(0,t.jsx)(n.code,{children:"HTTP"})," \u7684 ",(0,t.jsx)(n.code,{children:"Method"})," \u5c06\u4f1a\u6620\u5c04\u5230\u63a7\u5236\u5668\u5bf9\u5e94\u7684\u65b9\u6cd5\u540d\u79f0"]}),"\uff0c\u4f8b\u5982\uff1a ",(0,t.jsx)(n.code,{children:"POST"})," \u65b9\u5f0f\u5c06\u4f1a\u6620\u5c04\u5230\u63a7\u5236\u5668\u7684 ",(0,t.jsx)(n.code,{children:"Post"})," \u65b9\u6cd5\u4e2d(\u516c\u5f00\u65b9\u6cd5\uff0c\u9996\u5b57\u6bcd\u5927\u5199)\uff0c ",(0,t.jsx)(n.code,{children:"DELETE"})," \u65b9\u5f0f\u5c06\u4f1a\u6620\u5c04\u5230\u63a7\u5236\u5668\u7684 ",(0,t.jsx)(n.code,{children:"Delete"})," \u65b9\u6cd5\u4e2d\uff0c\u4ee5\u6b64\u7c7b\u63a8\u3002\u5176\u4ed6\u975e ",(0,t.jsx)(n.code,{children:"HTTP Method"})," \u547d\u540d\u7684\u65b9\u6cd5\uff0c\u5373\u4f7f\u662f\u5b9a\u4e49\u7684\u5305\u516c\u5f00\u65b9\u6cd5\uff0c\u5c06\u4e0d\u4f1a\u81ea\u52a8\u6ce8\u518c\uff0c\u5bf9\u4e8e\u5e94\u7528\u7aef\u4e0d\u53ef\u89c1\u3002\u5f53\u7136\uff0c\u5982\u679c\u63a7\u5236\u5668\u5e76\u672a\u5b9a\u4e49\u5bf9\u5e94 ",(0,t.jsx)(n.code,{children:"HTTP Method"})," \u7684\u65b9\u6cd5\uff0c\u8be5 ",(0,t.jsx)(n.code,{children:"Method"})," \u8bf7\u6c42\u4e0b\u5c06\u4f1a\u8fd4\u56de ",(0,t.jsx)(n.code,{children:"HTTP Status 404"}),"\u3002"]}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"GoFrame"})," \u7684\u8fd9\u79cd ",(0,t.jsx)(n.code,{children:"RESTful"})," \u5bf9\u8c61\u6ce8\u518c\u65b9\u5f0f\u662f\u4e00\u79cd\u4e25\u683c\u7684 ",(0,t.jsx)(n.code,{children:"REST"})," \u8def\u7531\u6ce8\u518c\u65b9\u5f0f\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u63a7\u5236\u5668\u7684\u5bf9\u8c61\u770b\u505a ",(0,t.jsx)(n.code,{children:"REST"})," \u4e2d\u7684\u8d44\u6e90\uff0c\u800c\u5176\u4e2d\u7684 ",(0,t.jsx)(n.code,{children:"HTTP Method"})," \u65b9\u6cd5\u5373\u4e3a ",(0,t.jsx)(n.code,{children:"REST"})," \u89c4\u8303\u7684\u8d44\u6e90\u64cd\u4f5c\u65b9\u6cd5\u3002\u5982\u679c\u5927\u5bb6\u4e0d\u592a\u719f\u6089 ",(0,t.jsx)(n.code,{children:"REST"})," \u89c4\u8303\uff0c\u6216\u8005\u4e0d\u60f3\u592a\u8fc7\u4e25\u683c\u7684 ",(0,t.jsx)(n.code,{children:"RESTful"})," \u8def\u7531\u8bbe\u8ba1\uff0c\u90a3\u4e48\u8bf7\u5ffd\u7565\u8be5\u7ae0\u8282\u3002"]})}),"\n",(0,t.jsxs)(n.p,{children:["\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"BindObjectRest"})," \u65b9\u6cd5\u5b8c\u6210 ",(0,t.jsx)(n.code,{children:"REST"})," \u5bf9\u8c61\u7684\u6ce8\u518c\uff0c\u793a\u4f8b\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\ntype Controller struct{}\n\n// RESTFul - GET\nfunc (c *Controller) Get(r *ghttp.Request) {\n    r.Response.Write("GET")\n}\n\n// RESTFul - POST\nfunc (c *Controller) Post(r *ghttp.Request) {\n    r.Response.Write("POST")\n}\n\n// RESTFul - DELETE\nfunc (c *Controller) Delete(r *ghttp.Request) {\n    r.Response.Write("DELETE")\n}\n\n// \u8be5\u65b9\u6cd5\u65e0\u6cd5\u6620\u5c04\uff0c\u5c06\u4f1a\u65e0\u6cd5\u8bbf\u95ee\u5230\nfunc (c *Controller) Hello(r *ghttp.Request) {\n    r.Response.Write("Hello")\n}\n\nfunc main() {\n    s := g.Server()\n    c := new(Controller)\n    s.BindObjectRest("/object", c)\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\u8def\u7531\u8868\u5982\u4e0b;"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"SERVER  | DOMAIN  | ADDRESS | METHOD |  ROUTE  |          HANDLER          | MIDDLEWARE\n|---------|---------|---------|--------|---------|---------------------------|------------|\n  default | default | :8199   | DELETE | /object | main.(*Controller).Delete |\n|---------|---------|---------|--------|---------|---------------------------|------------|\n  default | default | :8199   | GET    | /object | main.(*Controller).Get    |\n|---------|---------|---------|--------|---------|---------------------------|------------|\n  default | default | :8199   | POST   | /object | main.(*Controller).Post   |\n|---------|---------|---------|--------|---------|---------------------------|------------|\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"\u6784\u9020\u65b9\u6cd5-init-\u4e0e\u6790\u6784\u65b9\u6cd5-shut",children:["\u6784\u9020\u65b9\u6cd5 ",(0,t.jsx)(n.code,{children:"Init"})," \u4e0e\u6790\u6784\u65b9\u6cd5 ",(0,t.jsx)(n.code,{children:"Shut"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u5bf9\u8c61\u4e2d\u7684 ",(0,t.jsx)(n.code,{children:"Init"})," \u548c ",(0,t.jsx)(n.code,{children:"Shut"})," \u662f\u4e24\u4e2a\u5728 ",(0,t.jsx)(n.code,{children:"HTTP"})," \u8bf7\u6c42\u6d41\u7a0b\u4e2d\u88ab ",(0,t.jsx)(n.code,{children:"Server"})," \u81ea\u52a8\u8c03\u7528\u7684\u7279\u6b8a\u65b9\u6cd5\uff08\u7c7b\u4f3c ",(0,t.jsx)(n.code,{children:"\u6784\u9020\u51fd\u6570"})," \u548c ",(0,t.jsx)(n.code,{children:"\u6790\u6784\u51fd\u6570"})," \u7684\u4f5c\u7528\uff09\u3002"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Init"})," \u56de\u8c03\u65b9\u6cd5"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u5bf9\u8c61\u6536\u5230\u8bf7\u6c42\u65f6\u7684\u521d\u59cb\u5316\u65b9\u6cd5\uff0c\u5728\u670d\u52a1\u63a5\u53e3\u8c03\u7528\u4e4b\u524d\u88ab\u56de\u8c03\u6267\u884c\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u65b9\u6cd5\u5b9a\u4e49\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// "\u6784\u9020\u51fd\u6570"\u5bf9\u8c61\u65b9\u6cd5\nfunc (c *Controller) Init(r *ghttp.Request) {\n\n}\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Shut"})," \u56de\u8c03\u65b9\u6cd5"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5f53\u8bf7\u6c42\u7ed3\u675f\u65f6\u88ab ",(0,t.jsx)(n.code,{children:"Server"})," \u81ea\u52a8\u8c03\u7528\uff0c\u53ef\u4ee5\u7528\u4e8e\u5bf9\u8c61\u6267\u884c\u4e00\u4e9b\u6536\u5c3e\u5904\u7406\u7684\u64cd\u4f5c\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u65b9\u6cd5\u5b9a\u4e49\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// "\u6790\u6784\u51fd\u6570"\u5bf9\u8c61\u65b9\u6cd5\nfunc (c *Controller) Shut(r *ghttp.Request) {\n\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u4e3e\u4e2a\u4f8b\u5b50\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\ntype Controller struct{}\n\nfunc (c *Controller) Init(r *ghttp.Request) {\n    r.Response.Writeln("Init")\n}\n\nfunc (c *Controller) Shut(r *ghttp.Request) {\n    r.Response.Writeln("Shut")\n}\n\nfunc (c *Controller) Hello(r *ghttp.Request) {\n    r.Response.Writeln("Hello")\n}\n\nfunc main() {\n    s := g.Server()\n    c := new(Controller)\n    s.BindObject("/object", c)\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\u8def\u7531\u8868\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"SERVER  | DOMAIN  | ADDRESS | METHOD |     ROUTE     |         HANDLER          | MIDDLEWARE\n|---------|---------|---------|--------|---------------|--------------------------|------------|\n  default | default | :8199   | ALL    | /object/hello | main.(*Controller).Hello |\n|---------|---------|---------|--------|---------------|--------------------------|------------|\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u5e76\u6ca1\u6709\u81ea\u52a8\u6ce8\u518c ",(0,t.jsx)(n.code,{children:"Init"})," \u548c ",(0,t.jsx)(n.code,{children:"Shut"})," \u8fd9\u4e24\u4e2a\u65b9\u6cd5\u7684\u8def\u7531\uff0c\u6211\u4eec\u8bbf\u95ee ",(0,t.jsx)(n.a,{href:"http://127.0.0.1:8199/object/hello",children:"http://127.0.0.1:8199/object/hello"})," \u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Init",children:"Hello\nShut\n"})})]})}function j(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>i});var t=r(96540);const s={},c=t.createContext(s);function o(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);