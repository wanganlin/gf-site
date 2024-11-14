"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["90703"],{442821:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>h,assets:()=>i,toc:()=>o,frontMatter:()=>l});var t=JSON.parse('{"id":"WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u57FA\u672C\u4F7F\u7528","title":"HTTPClient-\u57FA\u672C\u4F7F\u7528","description":"\u57FA\u672C\u4F7F\u7528","source":"@site/versioned_docs/version-2.5.x/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u57FA\u672C\u4F7F\u7528.md","sourceDirName":"WEB\u670D\u52A1\u5F00\u53D1/HTTPClient","slug":"/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u57FA\u672C\u4F7F\u7528","permalink":"/2.5.x/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u57FA\u672C\u4F7F\u7528","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.5.x/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u57FA\u672C\u4F7F\u7528.md","tags":[],"version":"2.5.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":0,"frontMatter":{"title":"HTTPClient-\u57FA\u672C\u4F7F\u7528","sidebar_position":0,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"HTTPClient","permalink":"/2.5.x/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/"},"next":{"title":"HTTPClient-\u6587\u4EF6\u4E0A\u4F20","permalink":"/2.5.x/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u6587\u4EF6\u4E0A\u4F20"}}'),s=r("785893"),c=r("250065");let l={title:"HTTPClient-\u57FA\u672C\u4F7F\u7528",sidebar_position:0,hide_title:!0},d=void 0,i={},o=[{value:"\u57FA\u672C\u4F7F\u7528",id:"\u57FA\u672C\u4F7F\u7528",level:2},{value:"\u53D1\u9001 <code>GET</code> \u8BF7\u6C42\uFF0C\u6253\u5370\u51FA\u8FD4\u56DE\u503C",id:"\u53D1\u9001-get-\u8BF7\u6C42\u6253\u5370\u51FA\u8FD4\u56DE\u503C",level:3},{value:"\u53D1\u9001 <code>GET</code> \u8BF7\u6C42\uFF0C\u4E0B\u8F7D\u8FDC\u7A0B\u6587\u4EF6",id:"\u53D1\u9001-get-\u8BF7\u6C42\u4E0B\u8F7D\u8FDC\u7A0B\u6587\u4EF6",level:3},{value:"\u53D1\u9001 <code>POST</code> \u8BF7\u6C42\uFF0C\u6253\u5370\u51FA\u8FD4\u56DE\u503C",id:"\u53D1\u9001-post-\u8BF7\u6C42\u6253\u5370\u51FA\u8FD4\u56DE\u503C",level:3},{value:"\u53D1\u9001 <code>POST</code> \u8BF7\u6C42\uFF0C\u53C2\u6570\u4E3A <code>map</code> \u7C7B\u578B\uFF0C\u6253\u5370\u51FA\u8FD4\u56DE\u503C",id:"\u53D1\u9001-post-\u8BF7\u6C42\u53C2\u6570\u4E3A-map-\u7C7B\u578B\u6253\u5370\u51FA\u8FD4\u56DE\u503C",level:3},{value:"\u53D1\u9001 <code>POST</code> \u8BF7\u6C42\uFF0C\u53C2\u6570\u4E3A <code>JSON</code> \u6570\u636E\uFF0C\u6253\u5370\u51FA\u8FD4\u56DE\u503C",id:"\u53D1\u9001-post-\u8BF7\u6C42\u53C2\u6570\u4E3A-json-\u6570\u636E\u6253\u5370\u51FA\u8FD4\u56DE\u503C",level:3},{value:"\u53D1\u9001 <code>DELETE</code> \u8BF7\u6C42\uFF0C\u6253\u5370\u51FA\u8FD4\u56DE\u503C",id:"\u53D1\u9001-delete-\u8BF7\u6C42\u6253\u5370\u51FA\u8FD4\u56DE\u503C",level:3},{value:"<code>*Bytes</code> \u53CA <code>*Content</code> \u65B9\u6CD5",id:"bytes-\u53CA-content-\u65B9\u6CD5",level:2},{value:"\u53D1\u9001 <code>GET</code> \u8BF7\u6C42\uFF0C\u6253\u5370\u51FA\u8FD4\u56DE\u503C",id:"\u53D1\u9001-get-\u8BF7\u6C42\u6253\u5370\u51FA\u8FD4\u56DE\u503C-1",level:3},{value:"\u53D1\u9001 <code>POST</code> \u8BF7\u6C42\uFF0C\u6253\u5370\u51FA\u8FD4\u56DE\u503C",id:"\u53D1\u9001-post-\u8BF7\u6C42\u6253\u5370\u51FA\u8FD4\u56DE\u503C-1",level:3},{value:"<code>*Var</code> \u65B9\u6CD5",id:"var-\u65B9\u6CD5",level:2}];function a(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u57FA\u672C\u4F7F\u7528",children:"\u57FA\u672C\u4F7F\u7528"}),"\n",(0,s.jsxs)(n.p,{children:["\u6700\u57FA\u672C\u7684 ",(0,s.jsx)(n.code,{children:"HTTP"})," \u5BA2\u6237\u7AEF\u4F7F\u7528\u662F\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"HTTP Method"})," \u540C\u540D\u7684\u51E0\u4E2A\u64CD\u4F5C\u65B9\u6CD5\u6765\u53D1\u9001\u8BF7\u6C42\uFF0C ",(0,s.jsxs)(n.strong,{children:["\u4F46\u9700\u8981\u6CE8\u610F\u7684\u662F\u8FD4\u56DE\u7684\u7ED3\u679C\u5BF9\u8C61\u9700\u8981\u6267\u884C ",(0,s.jsx)(n.code,{children:"Close"})," \u9632\u6B62\u5185\u5B58\u6EA2\u51FA"]}),"\u3002\u6211\u4EEC\u6765\u770B\u51E0\u4E2A ",(0,s.jsx)(n.code,{children:"HTTP"})," \u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684\u7B80\u5355\u793A\u4F8B\u3002"]}),"\n",(0,s.jsxs)(n.h3,{id:"\u53D1\u9001-get-\u8BF7\u6C42\u6253\u5370\u51FA\u8FD4\u56DE\u503C",children:["\u53D1\u9001 ",(0,s.jsx)(n.code,{children:"GET"})," \u8BF7\u6C42\uFF0C\u6253\u5370\u51FA\u8FD4\u56DE\u503C"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'if r, err := g.Client().Get(ctx, "https://goframe.org"); err != nil {\n    panic(err)\n}\ndefer r.Close()\nfmt.Println(r.ReadAllString())\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"\u53D1\u9001-get-\u8BF7\u6C42\u4E0B\u8F7D\u8FDC\u7A0B\u6587\u4EF6",children:["\u53D1\u9001 ",(0,s.jsx)(n.code,{children:"GET"})," \u8BF7\u6C42\uFF0C\u4E0B\u8F7D\u8FDC\u7A0B\u6587\u4EF6"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'if r, err := g.Client().Get(ctx, "https://goframe.org/cover.png"); err != nil {\n    panic(err)\n}\ndefer r.Close()\ngfile.PutBytes("/Users/john/Temp/cover.png", r.ReadAll())\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u4E0B\u8F7D\u6587\u4EF6\u64CD\u4F5C\uFF0C\u5C0F\u6587\u4EF6\u4E0B\u8F7D\u975E\u5E38\u7B80\u5355\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5982\u679C\u8FDC\u7A0B\u6587\u4EF6\u6BD4\u8F83\u5927\u65F6\uFF0C\u670D\u52A1\u7AEF\u4F1A\u5206\u6279\u8FD4\u56DE\u6570\u636E\uFF0C\u56E0\u6B64\u4F1A\u9700\u8981\u5BA2\u6237\u7AEF\u53D1\u591A\u4E2A ",(0,s.jsx)(n.code,{children:"GET"})," \u8BF7\u6C42\uFF0C\u6BCF\u4E00\u6B21\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"Header"})," \u6765\u8BF7\u6C42\u5206\u6279\u7684\u6587\u4EF6\u8303\u56F4\u957F\u5EA6\uFF0C\u611F\u5174\u8DA3\u7684\u540C\u5B66\u53EF\u81EA\u884C\u7814\u7A76\u76F8\u5173\u7EC6\u8282\u3002"]}),"\n",(0,s.jsxs)(n.h3,{id:"\u53D1\u9001-post-\u8BF7\u6C42\u6253\u5370\u51FA\u8FD4\u56DE\u503C",children:["\u53D1\u9001 ",(0,s.jsx)(n.code,{children:"POST"})," \u8BF7\u6C42\uFF0C\u6253\u5370\u51FA\u8FD4\u56DE\u503C"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'if r, err := g.Client().Post(ctx, "http://127.0.0.1:8199/form", "name=john&age=18"); err != nil {\n    panic(err)\n}\ndefer r.Close()\nfmt.Println(r.ReadAllString())\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u4F20\u9012\u591A\u53C2\u6570\u7684\u65F6\u5019\u7528\u6237\u53EF\u4EE5\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"&"})," \u7B26\u53F7\u8FDB\u884C\u8FDE\u63A5\uFF0C\u6CE8\u610F\u53C2\u6570\u503C\u5F80\u5F80\u9700\u8981\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"gurl.Encode"})," \u7F16\u7801\u4E00\u4E0B\u3002"]}),"\n",(0,s.jsxs)(n.h3,{id:"\u53D1\u9001-post-\u8BF7\u6C42\u53C2\u6570\u4E3A-map-\u7C7B\u578B\u6253\u5370\u51FA\u8FD4\u56DE\u503C",children:["\u53D1\u9001 ",(0,s.jsx)(n.code,{children:"POST"})," \u8BF7\u6C42\uFF0C\u53C2\u6570\u4E3A ",(0,s.jsx)(n.code,{children:"map"})," \u7C7B\u578B\uFF0C\u6253\u5370\u51FA\u8FD4\u56DE\u503C"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'if r, err := g.Client().Post(\n    ctx,\n    "http://127.0.0.1:8199/form",\n    g.Map{\n        "submit"   : "1",\n        "callback" : "http://127.0.0.1/callback?url=http://baidu.com",\n    }\n)); err != nil {\n    panic(err)\n}\ndefer r.Close()\nfmt.Println(r.ReadAllString())\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u4F20\u9012\u591A\u53C2\u6570\u7684\u65F6\u5019\u7528\u6237\u53EF\u4EE5\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"&"})," \u7B26\u53F7\u8FDB\u884C\u8FDE\u63A5\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"map"}),"\uFF08 ",(0,s.jsxs)(n.strong,{children:["\u5176\u5B9E\u4E4B\u524D\u4E5F\u63D0\u5230\uFF0C\u4EFB\u610F\u6570\u636E\u7C7B\u578B\u90FD\u652F\u6301\uFF0C\u5305\u62EC ",(0,s.jsx)(n.code,{children:"struct"})]}),"\uFF09\u3002"]}),"\n",(0,s.jsxs)(n.h3,{id:"\u53D1\u9001-post-\u8BF7\u6C42\u53C2\u6570\u4E3A-json-\u6570\u636E\u6253\u5370\u51FA\u8FD4\u56DE\u503C",children:["\u53D1\u9001 ",(0,s.jsx)(n.code,{children:"POST"})," \u8BF7\u6C42\uFF0C\u53C2\u6570\u4E3A ",(0,s.jsx)(n.code,{children:"JSON"})," \u6570\u636E\uFF0C\u6253\u5370\u51FA\u8FD4\u56DE\u503C"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'if r, err := g.Client().Post(\n    ctx,\n    "http://user.svc/v1/user/create",\n    `{"passport":"john","password":"123456","password-confirm":"123456"}`,\n); err != nil {\n    panic(err)\n}\ndefer r.Close()\nfmt.Println(r.ReadAllString())\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u53EF\u4EE5\u770B\u5230\uFF0C\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"ghttp"})," \u5BA2\u6237\u7AEF\u53D1\u9001 ",(0,s.jsx)(n.code,{children:"JSON"})," \u6570\u636E\u8BF7\u6C42\u975E\u5E38\u65B9\u4FBF\uFF0C\u76F4\u63A5\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"Post"})," \u65B9\u6CD5\u63D0\u4EA4\u5373\u53EF\u3002\u5F53\u6CA1\u6709\u663E\u5F0F\u8BBE\u7F6E ",(0,s.jsx)(n.code,{children:"ContentType"})," \u65F6\uFF0C\u5BA2\u6237\u7AEF\u4F1A\u81EA\u52A8\u8BC6\u522B\u53C2\u6570\u7C7B\u578B\u5E76\u5C06\u8BF7\u6C42\u7684 ",(0,s.jsx)(n.code,{children:"Content-Type"})," \u8BBE\u7F6E\u4E3A ",(0,s.jsx)(n.code,{children:"application/json"}),"\u3002"]}),"\n",(0,s.jsxs)(n.h3,{id:"\u53D1\u9001-delete-\u8BF7\u6C42\u6253\u5370\u51FA\u8FD4\u56DE\u503C",children:["\u53D1\u9001 ",(0,s.jsx)(n.code,{children:"DELETE"})," \u8BF7\u6C42\uFF0C\u6253\u5370\u51FA\u8FD4\u56DE\u503C"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'if r, err := g.Client().Delete(ctx, "http://user.svc/v1/user/delete/1", "10000"); err != nil {\n    panic(err)\n}\ndefer r.Close()\nfmt.Println(r.ReadAllString())\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"bytes-\u53CA-content-\u65B9\u6CD5",children:[(0,s.jsx)(n.code,{children:"*Bytes"})," \u53CA ",(0,s.jsx)(n.code,{children:"*Content"})," \u65B9\u6CD5"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4EE5 ",(0,s.jsx)(n.code,{children:"Bytes"})," \u53CA ",(0,s.jsx)(n.code,{children:"Content"})," \u540E\u7F00\u7ED3\u5C3E\u7684\u8BF7\u6C42\u65B9\u6CD5\u4E3A\u76F4\u63A5\u83B7\u53D6\u8FD4\u56DE\u5185\u5BB9\u7684 ",(0,s.jsx)(n.strong,{children:"\u5FEB\u6377\u65B9\u6CD5"}),"\uFF0C\u8FD9\u4E9B\u65B9\u6CD5\u5C06\u4F1A\u81EA\u52A8\u8BFB\u53D6\u670D\u52A1\u7AEF\u8FD4\u56DE\u5185\u5BB9 ",(0,s.jsx)(n.strong,{children:"\u5E76\u81EA\u52A8\u5173\u95ED\u8BF7\u6C42\u8FDE\u63A5"}),"\u3002 ",(0,s.jsx)(n.code,{children:"*Bytes"})," \u65B9\u6CD5\u7528\u4E8E\u83B7\u53D6 ",(0,s.jsx)(n.code,{children:"[]byte"})," \u7C7B\u578B\u7ED3\u679C\uFF0C ",(0,s.jsx)(n.code,{children:"*Content"})," \u65B9\u6CD5\u7528\u4E8E\u83B7\u53D6 ",(0,s.jsx)(n.code,{children:"string"})," \u7C7B\u578B\u7ED3\u679C\u3002 ",(0,s.jsx)(n.strong,{children:"\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5982\u679C\u8BF7\u6C42\u6267\u884C\u5931\u8D25\uFF0C\u8FD4\u56DE\u5185\u5BB9\u5C06\u4F1A\u4E3A\u7A7A\u3002"})]}),"\n",(0,s.jsxs)(n.h3,{id:"\u53D1\u9001-get-\u8BF7\u6C42\u6253\u5370\u51FA\u8FD4\u56DE\u503C-1",children:["\u53D1\u9001 ",(0,s.jsx)(n.code,{children:"GET"})," \u8BF7\u6C42\uFF0C\u6253\u5370\u51FA\u8FD4\u56DE\u503C"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:' // \u8FD4\u56DEcontent\u4E3A[]bytes\u7C7B\u578B\n content := g.Client().GetBytes(ctx, "https://goframe.org")\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:' // \u8FD4\u56DEcontent\u4E3Astring\u7C7B\u578B\n content := g.Client().GetContent(ctx, "https://goframe.org")\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"\u53D1\u9001-post-\u8BF7\u6C42\u6253\u5370\u51FA\u8FD4\u56DE\u503C-1",children:["\u53D1\u9001 ",(0,s.jsx)(n.code,{children:"POST"})," \u8BF7\u6C42\uFF0C\u6253\u5370\u51FA\u8FD4\u56DE\u503C"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// \u8FD4\u56DEcontent\u4E3A[]bytes\u7C7B\u578B\ncontent := g.Client().PostBytes(\n    ctx,\n    "http://user.svc/v1/user/create",\n    `{"passport":"john","password":"123456","password-confirm":"123456"}`,\n)\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// \u8FD4\u56DEcontent\u4E3Astring\u7C7B\u578B\ncontent := g.Client().PostContent(\n    ctx,\n    "http://user.svc/v1/user/create",\n    `{"passport":"john","password":"123456","password-confirm":"123456"}`,\n)\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"var-\u65B9\u6CD5",children:[(0,s.jsx)(n.code,{children:"*Var"})," \u65B9\u6CD5"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4EE5 ",(0,s.jsx)(n.code,{children:"Var"})," \u540E\u7F00\u7ED3\u5C3E\u7684\u8BF7\u6C42\u65B9\u6CD5\u76F4\u63A5\u8BF7\u6C42\u5E76\u83B7\u53D6 ",(0,s.jsx)(n.code,{children:"HTTP"})," \u63A5\u53E3\u7ED3\u679C\u4E3A ",(0,s.jsx)(n.code,{children:"g.Var"})," \u6CDB\u578B\u7C7B\u578B ",(0,s.jsx)(n.strong,{children:"\u4FBF\u4E8E\u4E0B\u4E00\u6B65\u6267\u884C\u7C7B\u578B\u8F6C\u6362\uFF0C\u7279\u522B\u662F\u5C06\u8BF7\u6C42\u7ED3\u679C\u8F6C\u6362\u5230\u7ED3\u6784\u4F53\u5BF9\u8C61\u4E0A"}),"\u3002\u5F80\u5F80\u7528\u4E8E\u670D\u52A1\u7AEF\u8FD4\u56DE\u683C\u5F0F\u4E3A ",(0,s.jsx)(n.code,{children:"JSON/XML"})," \u7684\u60C5\u51B5\uFF0C\u901A\u8FC7\u8FD4\u56DE\u7684 ",(0,s.jsx)(n.code,{children:"g.Var"})," \u6CDB\u578B\u5BF9\u8C61\u53EF\u6839\u636E\u9700\u8981\u81EA\u52A8\u89E3\u6790\u3002\u6B64\u5916\uFF0C\u5982\u679C\u8BF7\u6C42\u5931\u8D25\u6216\u8005\u8BF7\u6C42\u7ED3\u679C\u4E3A\u7A7A\uFF0C\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u7A7A\u7684 ",(0,s.jsx)(n.code,{children:"g.Var"})," \u6CDB\u578B\u5BF9\u8C61\uFF0C\u4E0D\u5F71\u54CD\u8F6C\u6362\u65B9\u6CD5\u8C03\u7528\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u4F7F\u7528\u793A\u4F8B\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"type User struct {\n    Id   int\n    Name string\n}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"// Struct\nvar user *User\ng.Client().GetVar(ctx, url).Scan(&user)\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"// Struct\u6570\u7EC4\nvar users []*User\ng.Client().GetVar(ctx, url).Scan(&users)\n"})})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return l}});var t=r(667294);let s={},c=t.createContext(s);function l(e){let n=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);