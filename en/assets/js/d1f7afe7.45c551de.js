"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[12966],{14036:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>t,toc:()=>l});var s=r(74848),o=r(28453);const i={title:"CORS\u8de8\u57df\u5904\u7406",sidebar_position:4,hide_title:!0},c=void 0,t={id:"WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/CORS\u8de8\u57df\u5904\u7406",title:"CORS\u8de8\u57df\u5904\u7406",description:"\u5141\u8bb8\u63a5\u53e3\u8de8\u57df\u5f80\u5f80\u662f\u9700\u8981\u7ed3\u5408 \u4e2d\u95f4\u4ef6/\u62e6\u622a\u5668 \u4e00\u8d77\u4f7f\u7528\uff0c\u6765\u7edf\u4e00\u8bbe\u7f6e\u67d0\u4e9b\u8def\u7531\u89c4\u5219\u4e0b\u7684\u63a5\u53e3\u53ef\u4ee5\u8de8\u57df\u8bbf\u95ee\u3002",source:"@site/versioned_docs/version-2.6.x/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/CORS\u8de8\u57df\u5904\u7406.md",sourceDirName:"WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027",slug:"/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/CORS\u8de8\u57df\u5904\u7406",permalink:"/en/docs/2.6.x/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/CORS\u8de8\u57df\u5904\u7406",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.6.x/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/CORS\u8de8\u57df\u5904\u7406.md",tags:[],version:"2.6.x",lastUpdatedBy:"John",lastUpdatedAt:173036553e4,sidebarPosition:4,frontMatter:{title:"CORS\u8de8\u57df\u5904\u7406",sidebar_position:4,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"\u5e73\u6ed1\u91cd\u542f\u7279\u6027",permalink:"/en/docs/2.6.x/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/\u5e73\u6ed1\u91cd\u542f\u7279\u6027"},next:{title:"CSRF\u9632\u5fa1\u8bbe\u7f6e",permalink:"/en/docs/2.6.x/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/CSRF\u9632\u5fa1\u8bbe\u7f6e"}},d={},l=[{value:"<code>CORS</code> \u5bf9\u8c61",id:"cors-\u5bf9\u8c61",level:3},{value:"<code>CORS</code> \u914d\u7f6e",id:"cors-\u914d\u7f6e",level:3},{value:"\u9ed8\u8ba4 <code>CORSOptions</code>",id:"\u9ed8\u8ba4-corsoptions",level:4},{value:"\u9650\u5236 <code>Origin</code> \u6765\u6e90",id:"\u9650\u5236-origin-\u6765\u6e90",level:4},{value:"<code>OPTIONS</code> \u8bf7\u6c42",id:"options-\u8bf7\u6c42",level:3},{value:"\u793a\u4f8b1\uff0c\u57fa\u672c\u4f7f\u7528",id:"\u793a\u4f8b1\u57fa\u672c\u4f7f\u7528",level:3},{value:"\u793a\u4f8b2\uff0c\u6388\u6743\u8de8\u57df <code>Origin</code>",id:"\u793a\u4f8b2\u6388\u6743\u8de8\u57df-origin",level:3},{value:"\u793a\u4f8b3\uff0c\u81ea\u5b9a\u4e49\u68c0\u6d4b\u6388\u6743",id:"\u793a\u4f8b3\u81ea\u5b9a\u4e49\u68c0\u6d4b\u6388\u6743",level:3}];function p(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u5141\u8bb8\u63a5\u53e3\u8de8\u57df\u5f80\u5f80\u662f\u9700\u8981\u7ed3\u5408 ",(0,s.jsx)(n.strong,{children:"\u4e2d\u95f4\u4ef6/\u62e6\u622a\u5668"})," \u4e00\u8d77\u4f7f\u7528\uff0c\u6765\u7edf\u4e00\u8bbe\u7f6e\u67d0\u4e9b\u8def\u7531\u89c4\u5219\u4e0b\u7684\u63a5\u53e3\u53ef\u4ee5\u8de8\u57df\u8bbf\u95ee\u3002\n\u540c\u65f6\uff0c\u9488\u5bf9\u5141\u8bb8 ",(0,s.jsx)(n.code,{children:"WebSocket"})," \u7684\u8de8\u57df\u8bf7\u6c42\u8bbf\u95ee\uff0c\u4e5f\u662f\u901a\u8fc7\u8be5\u65b9\u5f0f\u6765\u5b9e\u73b0\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u76f8\u5173\u65b9\u6cd5\uff1a ",(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/net/ghttp#Response",children:"https://pkg.go.dev/github.com/gogf/gf/v2/net/ghttp#Response"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"func (r *Response) CORS(options CORSOptions)\nfunc (r *Response) CORSAllowedOrigin(options CORSOptions) bool\nfunc (r *Response) CORSDefault()\nfunc (r *Response) DefaultCORSOptions() CORSOptions\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"cors-\u5bf9\u8c61",children:[(0,s.jsx)(n.code,{children:"CORS"})," \u5bf9\u8c61"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"CORS"})," \u662f ",(0,s.jsx)(n.code,{children:"W3"})," \u4e92\u8054\u7f51\u6807\u51c6\u7ec4\u7ec7\u5bf9HTTP\u8de8\u57df\u8bf7\u6c42\u7684\u6807\u51c6\uff0c\u5728 ",(0,s.jsx)(n.code,{children:"ghttp"})," \u6a21\u5757\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"CORSOptions"})," \u5bf9\u8c61\u6765\u7ba1\u7406\u5bf9\u5e94\u7684\u8de8\u57df\u8bf7\u6c42\u9009\u9879\u3002\u5b9a\u4e49\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"// See https://www.w3.org/TR/cors/ .\n// \u670d\u52a1\u7aef\u5141\u8bb8\u8de8\u57df\u8bf7\u6c42\u9009\u9879\ntype CORSOptions struct {\n    AllowDomain      []string // Used for allowing requests from custom domains\n    AllowOrigin      string   // Access-Control-Allow-Origin\n    AllowCredentials string   // Access-Control-Allow-Credentials\n    ExposeHeaders    string   // Access-Control-Expose-Headers\n    MaxAge           int      // Access-Control-Max-Age\n    AllowMethods     string   // Access-Control-Allow-Methods\n    AllowHeaders     string   // Access-Control-Allow-Headers\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5177\u4f53\u53c2\u6570\u7684\u4ecb\u7ecd\u8bf7\u67e5\u770bW3\u7ec4\u7ec7 ",(0,s.jsx)(n.a,{href:"https://www.w3.org/TR/cors/",children:"\u5b98\u7f51\u624b\u518c"}),"\u3002"]}),"\n",(0,s.jsxs)(n.h3,{id:"cors-\u914d\u7f6e",children:[(0,s.jsx)(n.code,{children:"CORS"})," \u914d\u7f6e"]}),"\n",(0,s.jsxs)(n.h4,{id:"\u9ed8\u8ba4-corsoptions",children:["\u9ed8\u8ba4 ",(0,s.jsx)(n.code,{children:"CORSOptions"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u5f53\u7136\uff0c\u4e3a\u65b9\u4fbf\u8de8\u57df\u8bbe\u7f6e\uff0c\u5728 ",(0,s.jsx)(n.code,{children:"ghttp"})," \u6a21\u5757\u4e2d\u4e5f\u63d0\u4f9b\u4e86\u9ed8\u8ba4\u7684\u8de8\u57df\u8bf7\u6c42\u9009\u9879\uff0c\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"DefaultCORSOptions"})," \u65b9\u6cd5\u83b7\u53d6\u3002\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u5728\u9700\u8981\u5141\u8bb8\u8de8\u57df\u8bf7\u6c42\u7684\u63a5\u53e3\u4e2d\uff08\u4e00\u822c\u60c5\u51b5\u4e0b\u4f7f\u7528\u4e2d\u95f4\u4ef6\uff09\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"CORSDefault()"})," \u5141\u8bb8\u8be5\u63a5\u53e3\u8de8\u57df\u8bbf\u95ee\u3002"]}),"\n",(0,s.jsxs)(n.h4,{id:"\u9650\u5236-origin-\u6765\u6e90",children:["\u9650\u5236 ",(0,s.jsx)(n.code,{children:"Origin"})," \u6765\u6e90"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5927\u591a\u6570\u65f6\u5019\uff0c\u6211\u4eec\u9700\u8981\u9650\u5236\u8bf7\u6c42\u6765\u6e90\u4e3a\u6211\u4eec\u53d7\u4fe1\u4efb\u7684\u57df\u540d\u5217\u8868\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"AllowDomain"})," \u914d\u7f6e\uff0c\u4f7f\u7528\u65b9\u5f0f\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// \u5141\u8bb8\u8de8\u57df\u8bf7\u6c42\u4e2d\u95f4\u4ef6\nfunc Middleware(r *ghttp.Request) {\n    corsOptions := r.Response.DefaultCORSOptions()\n    corsOptions.AllowDomain = []string{"goframe.org", "johng.cn"}\n    r.Response.CORS(corsOptions)\n    r.Middleware.Next()\n}\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"options-\u8bf7\u6c42",children:[(0,s.jsx)(n.code,{children:"OPTIONS"})," \u8bf7\u6c42"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6709\u7684\u5ba2\u6237\u7aef\uff0c\u90e8\u5206\u6d4f\u89c8\u5668\u5728\u53d1\u9001 ",(0,s.jsx)(n.code,{children:"AJAX"})," \u8bf7\u6c42\u4e4b\u524d\u4f1a\u9996\u5148\u53d1\u9001 ",(0,s.jsx)(n.code,{children:"OPTIONS"})," \u9884\u8bf7\u6c42\u68c0\u6d4b\u540e\u7eed\u8bf7\u6c42\u662f\u5426\u5141\u8bb8\u53d1\u9001\u3002 ",(0,s.jsx)(n.code,{children:"GF"})," \u6846\u67b6\u7684 ",(0,s.jsx)(n.code,{children:"Server"})," \u5b8c\u5168\u9075\u5b88 ",(0,s.jsx)(n.code,{children:"W3C"})," \u5173\u4e8e ",(0,s.jsx)(n.code,{children:"OPTIONS"})," \u8bf7\u6c42\u65b9\u6cd5\u7684\u89c4\u8303\u7ea6\u5b9a\uff0c\u56e0\u6b64\u53ea\u8981\u670d\u52a1\u7aef\u8bbe\u7f6e\u597d ",(0,s.jsx)(n.code,{children:"CORS"})," \u4e2d\u95f4\u4ef6\uff0c ",(0,s.jsx)(n.code,{children:"OPTIONS"})," \u8bf7\u6c42\u4e5f\u5c06\u4f1a\u81ea\u52a8\u652f\u6301\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u793a\u4f8b1\u57fa\u672c\u4f7f\u7528",children:"\u793a\u4f8b1\uff0c\u57fa\u672c\u4f7f\u7528"}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u7b80\u5355\u7684\u63a5\u53e3\u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc Order(r *ghttp.Request) {\n    r.Response.Write("GET")\n}\n\nfunc main() {\n    s := g.Server()\n    s.Group("/api.v1", func(group *ghttp.RouterGroup) {\n        group.GET("/order", Order)\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u63a5\u53e3\u5730\u5740\u662f ",(0,s.jsx)(n.a,{href:"http://localhost/api.v1/order",children:"http://localhost/api.v1/order"})," \uff0c\u5f53\u7136\u8fd9\u4e2a\u63a5\u53e3\u662f\u4e0d\u5141\u8bb8\u8de8\u57df\u7684\u3002\u6211\u4eec\u6253\u5f00\u4e00\u4e2a\u4e0d\u540c\u7684\u57df\u540d\uff0c\u4f8b\u5982\uff1a\u767e\u5ea6\u9996\u9875(\u6b63\u597d\u7528\u4e86 ",(0,s.jsx)(n.code,{children:"jQuery"}),"\uff0c\u65b9\u4fbf\u8c03\u8bd5)\uff0c\u7136\u540e\u6309 ",(0,s.jsx)(n.code,{children:"F12"})," \u6253\u5f00\u5f00\u53d1\u8005\u9762\u677f\uff0c\u5728 ",(0,s.jsx)(n.code,{children:"console"})," \u4e0b\u6267\u884c\u4ee5\u4e0b ",(0,s.jsx)(n.code,{children:"AJAX"})," \u8bf7\u6c42\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'$.get("http://localhost:8199/api.v1/order", function(result){\n    console.log(result)\n});\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u7ed3\u679c\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(54381).A+"",width:"1304",height:"465"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u4e86\u4e0d\u5141\u8bb8\u8de8\u57df\u8bf7\u6c42\u7684\u63d0\u793a\u9519\u8bef\uff0c\u63a5\u7740\u6211\u4eec\u4fee\u6539\u4e00\u4e0b\u670d\u52a1\u7aef\u63a5\u53e3\u7684\u6d4b\u8bd5\u4ee3\u7801\uff0c\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc MiddlewareCORS(r *ghttp.Request) {\n    r.Response.CORSDefault()\n    r.Middleware.Next()\n}\n\nfunc Order(r *ghttp.Request) {\n    r.Response.Write("GET")\n}\n\nfunc main() {\n    s := g.Server()\n    s.Group("/api.v1", func(group *ghttp.RouterGroup) {\n        group.Middleware(MiddlewareCORS)\n        group.GET("/order", Order)\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4eec\u589e\u52a0\u4e86\u9488\u5bf9\u4e8e\u8def\u7531 ",(0,s.jsx)(n.code,{children:"/api.v1"})," \u7684\u524d\u7f6e\u4e2d\u95f4\u4ef6 ",(0,s.jsx)(n.code,{children:"MiddlewareCORS"}),"\uff0c\u8be5\u4e8b\u4ef6\u5c06\u4f1a\u5728\u6240\u6709\u670d\u52a1\u6267\u884c\u4e4b\u524d\u8c03\u7528\u3002\u6211\u4eec\u901a\u8fc7\u8c03\u7528 ",(0,s.jsx)(n.code,{children:"CORSDefault"})," \u65b9\u6cd5\u4f7f\u7528\u9ed8\u8ba4\u7684\u8de8\u57df\u8bbe\u7f6e\u5141\u8bb8\u8de8\u57df\u8bf7\u6c42\u3002\u8be5\u7ed1\u5b9a\u7684\u4e8b\u4ef6\u8def\u7531\u89c4\u5219\u4f7f\u7528\u4e86\u6a21\u7cca\u5339\u914d\u89c4\u5219\uff0c\u8868\u793a\u6240\u6709 ",(0,s.jsx)(n.code,{children:"/api.v1"})," \u5f00\u5934\u7684\u63a5\u53e3\u5730\u5740\u90fd\u5141\u8bb8\u8de8\u57df\u8bf7\u6c42\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd4\u56de\u521a\u624d\u7684\u767e\u5ea6\u9996\u9875\uff0c\u518d\u6b21\u6267\u884c\u8bf7\u6c42 ",(0,s.jsx)(n.code,{children:"AJAX"})," \u8bf7\u6c42\uff0c\u8fd9\u6b21\u4fbf\u6210\u529f\u4e86\uff1a"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(33348).A+"",width:"1298",height:"551"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5f53\u7136\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"CORSOptions"})," \u5bf9\u8c61\u4ee5\u53ca ",(0,s.jsx)(n.code,{children:"CORS"})," \u65b9\u6cd5\u5bf9\u8de8\u57df\u8bf7\u6c42\u505a\u66f4\u591a\u7684\u8bbe\u7f6e\u3002"]}),"\n",(0,s.jsxs)(n.h3,{id:"\u793a\u4f8b2\u6388\u6743\u8de8\u57df-origin",children:["\u793a\u4f8b2\uff0c\u6388\u6743\u8de8\u57df ",(0,s.jsx)(n.code,{children:"Origin"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u5927\u591a\u6570\u573a\u666f\u4e2d\uff0c\u6211\u4eec\u662f\u9700\u8981\u81ea\u5b9a\u4e49\u6388\u6743\u8de8\u57df\u7684 ",(0,s.jsx)(n.code,{children:"Origin"}),"\uff0c\u90a3\u4e48\u6211\u4eec\u53ef\u4ee5\u5c06\u4ee5\u4e0a\u7684\u4f8b\u5b50\u6539\u8fdb\u5982\u4e0b\uff0c\u5728\u8be5\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u4ec5\u5141\u8bb8 ",(0,s.jsx)(n.code,{children:"goframe.org"})," \u53ca ",(0,s.jsx)(n.code,{children:"baidu.com"})," \u8de8\u57df\u8bf7\u6c42\u8bbf\u95ee\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc MiddlewareCORS(r *ghttp.Request) {\n    corsOptions := r.Response.DefaultCORSOptions()\n    corsOptions.AllowDomain = []string{"goframe.org", "baidu.com"}\n    r.Response.CORS(corsOptions)\n    r.Middleware.Next()\n}\n\nfunc Order(r *ghttp.Request) {\n    r.Response.Write("GET")\n}\n\nfunc main() {\n    s := g.Server()\n    s.Group("/api.v1", func(group *ghttp.RouterGroup) {\n        group.Middleware(MiddlewareCORS)\n        group.GET("/order", Order)\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u793a\u4f8b3\u81ea\u5b9a\u4e49\u68c0\u6d4b\u6388\u6743",children:"\u793a\u4f8b3\uff0c\u81ea\u5b9a\u4e49\u68c0\u6d4b\u6388\u6743"}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0d\u77e5\u5927\u5bb6\u662f\u5426\u6709\u6ce8\u610f\uff0c\u5728\u4ee5\u4e0a\u7684\u793a\u4f8b\u4e2d\u6709\u4e2a\u7ec6\u8282\uff0c\u5373\u4f7f\u5f53\u524d\u63a5\u53e3\u4e0d\u5141\u8bb8\u8de8\u57df\u8bbf\u95ee\uff0c\u4f46\u662f\u53ea\u8981\u63a5\u53e3\u88ab\u8c03\u7528\uff0c\u63a5\u53e3\u5b8c\u6574\u903b\u8f91\u4ecd\u4f1a\u88ab\u6267\u884c\uff0c\u5728\u670d\u52a1\u7aef\u5176\u5b9e\u4e5f\u5df2\u7ecf\u8d70\u5b8c\u4e86\u4e00\u6b21\u8bf7\u6c42\u6d41\u7a0b\u3002\u9488\u5bf9\u4e8e\u8fd9\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u81ea\u5b9a\u4e49\u6388\u6743 ",(0,s.jsx)(n.code,{children:"Origin"})," \u5e76\u5728\u4e2d\u95f4\u4ef6\u4e2d\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"CORSAllowedOrigin"})," \u65b9\u6cd5\u6765\u505a\u5224\u65ad\uff0c\u5982\u679c\u5f53\u524d\u8bf7\u6c42\u7684 ",(0,s.jsx)(n.code,{children:"Origin"})," \u5728\u670d\u52a1\u7aef\u662f\u88ab\u5141\u8bb8\u6267\u884c\u7684\uff0c\u90a3\u4e48\u624d\u4f1a\u6267\u884c\u540e\u7eed\u6d41\u7a0b\uff0c\u5426\u5219\u4fbf\u4f1a\u7ec8\u6b62\u6267\u884c\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u4ee5\u4e0b\u793a\u4f8b\u4e2d\uff0c\u4ec5\u5141\u8bb8\u6765\u81ea ",(0,s.jsx)(n.code,{children:"goframe.org"})," \u57df\u540d\u7684\u8de8\u57df\u8bf7\u6c42\uff0c\u800c\u6765\u81ea\u5176\u4ed6\u57df\u540d\u7684\u8bf7\u6c42\u5c06\u4f1a\u5931\u8d25\u5e76\u8fd4\u56de ",(0,s.jsx)(n.code,{children:"403"}),"\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc MiddlewareCORS(r *ghttp.Request) {\n    corsOptions := r.Response.DefaultCORSOptions()\n    corsOptions.AllowDomain = []string{"goframe.org"}\n    if !r.Response.CORSAllowedOrigin(corsOptions) {\n        r.Response.WriteStatus(http.StatusForbidden)\n        return\n    }\n    r.Response.CORS(corsOptions)\n    r.Middleware.Next()\n}\n\nfunc Order(r *ghttp.Request) {\n    r.Response.Write("GET")\n}\n\nfunc main() {\n    s := g.Server()\n    s.Group("/api.v1", func(group *ghttp.RouterGroup) {\n        group.Middleware(MiddlewareCORS)\n        group.GET("/order", Order)\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})})]})}function g(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},33348:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/06da9e1ef00ff0a2f2b4b7f77e51644e-c5c9e0b2dc0dde744148a4f2024d1bbc.png"},54381:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/2f1414529f4eaa68cb394542f187994a-036a662a4b30a58e1a61a77ee68f4c98.png"},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>t});var s=r(96540);const o={},i=s.createContext(o);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);