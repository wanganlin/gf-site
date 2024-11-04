"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[97776],{21090:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>d,toc:()=>t});const d=JSON.parse('{"id":"docs/\u5e38\u89c1\u95ee\u9898-FAQ","title":"\u5e38\u89c1\u95ee\u9898(FAQ)","description":"\u5bc4\u8bed\uff1a","source":"@site/docs/docs/\u5e38\u89c1\u95ee\u9898-FAQ.md","sourceDirName":"docs","slug":"/docs/faq","permalink":"/docs/faq","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u5e38\u89c1\u95ee\u9898-FAQ.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730724532000,"sidebarPosition":10,"frontMatter":{"slug":"/docs/faq","title":"\u5e38\u89c1\u95ee\u9898(FAQ)","sidebar_position":10,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"\u76d1\u63a7\u544a\u8b66-\u7ec4\u4ef6\u6307\u6807","permalink":"/docs/obs/metrics/components"},"next":{"title":"\u9879\u76ee\u90e8\u7f72","permalink":"/docs/deploy"}}');var o=c(74848),i=c(28453);const r={slug:"/docs/faq",title:"\u5e38\u89c1\u95ee\u9898(FAQ)",sidebar_position:10,hide_title:!0},l=void 0,s={},t=[{value:"\u4e00\u3001Golang\u57fa\u7840",id:"\u4e00golang\u57fa\u7840",level:2},{value:"1\u3001\u7a0b\u5e8f\u4ea7\u751f\u5f02\u5e38\uff0c\u4f46\u662f\u7a0b\u5e8f\u76f4\u63a5\u5d29\u6e83\u672a\u88ab\u6846\u67b6\u81ea\u52a8\u6355\u83b7",id:"1\u7a0b\u5e8f\u4ea7\u751f\u5f02\u5e38\u4f46\u662f\u7a0b\u5e8f\u76f4\u63a5\u5d29\u6e83\u672a\u88ab\u6846\u67b6\u81ea\u52a8\u6355\u83b7",level:3},{value:"2\u3001 <code>json</code> \u8f93\u51fa\u65f6\u5c4f\u853d\u6389\u4e00\u4e9b\u5b57\u6bb5",id:"2-json-\u8f93\u51fa\u65f6\u5c4f\u853d\u6389\u4e00\u4e9b\u5b57\u6bb5",level:3},{value:"\u4e8c\u3001\u517c\u5bb9\u6027\u76f8\u5173",id:"\u4e8c\u517c\u5bb9\u6027\u76f8\u5173",level:2},{value:"1\u3001 <code>client_tracing.go:73:3: undefined: attribute.Any</code>",id:"1-client_tracinggo733-undefined-attributeany",level:3},{value:"2\u3001\u4f7f\u7528 <code>gf</code> \u4f9d\u8d56 <code>v1.16.2</code> \u65f6 <code>go mod tidy</code> \u5931\u8d25",id:"2\u4f7f\u7528-gf-\u4f9d\u8d56-v1162-\u65f6-go-mod-tidy-\u5931\u8d25",level:3},{value:"\u4e09\u3001\u6570\u636e\u5e93\u76f8\u5173",id:"\u4e09\u6570\u636e\u5e93\u76f8\u5173",level:2},{value:"\u56db\u3001\u4f7f\u7528\u76f8\u5173",id:"\u56db\u4f7f\u7528\u76f8\u5173",level:2},{value:"1\u3001\u4e0d\u540c\u73af\u5883\u5982\u4f55\uff0c\u52a0\u8f7d\u4e0d\u540c\u7684\u914d\u7f6e\u6587\u4ef6?",id:"1\u4e0d\u540c\u73af\u5883\u5982\u4f55\u52a0\u8f7d\u4e0d\u540c\u7684\u914d\u7f6e\u6587\u4ef6",level:3},{value:"2\u3001 <code>glog with &quot;ERROR: logging before flag.Parse&quot;</code>",id:"2-glog-with-error-logging-before-flagparse",level:3},{value:"3\u3001 <code>gcron</code> \u4e0e <code>http</code> \u5982\u4f55\u540c\u65f6\u4f7f\u7528?",id:"3-gcron-\u4e0e-http-\u5982\u4f55\u540c\u65f6\u4f7f\u7528",level:3},{value:"4\u3001 <code>GoFrame</code> \u7684 <code>struct tag</code>(\u6807\u7b7e) \u6709\u54ea\u4e9b\uff1f",id:"4-goframe-\u7684-struct-tag\u6807\u7b7e-\u6709\u54ea\u4e9b",level:3},{value:"5\u3001 <code>HTTP Server</code> \u51fa\u73b0 <code>context cancel</code> \u62a5\u9519",id:"5-http-server-\u51fa\u73b0-context-cancel-\u62a5\u9519",level:3},{value:"\u4e94\u3001\u73af\u5883\u76f8\u5173",id:"\u4e94\u73af\u5883\u76f8\u5173",level:2},{value:"1\u3001 <code>Linux</code> \u4e0b\u6267\u884c <code>go build main.go</code> \u63d0\u793a\u8fde\u63a5\u8d85\u65f6 <code>connection timed out</code>",id:"1-linux-\u4e0b\u6267\u884c-go-build-maingo-\u63d0\u793a\u8fde\u63a5\u8d85\u65f6-connection-timed-out",level:3},{value:"2\u3001 <code>Linux</code> \u4e0b\u5b89\u88c5 <code>gf</code> \u63d0\u793a\u547d\u4ee4\u4e0d\u5b58\u5728 <code>command not found</code>",id:"2-linux-\u4e0b\u5b89\u88c5-gf-\u63d0\u793a\u547d\u4ee4\u4e0d\u5b58\u5728-command-not-found",level:3},{value:"3\u3001 <code>Win10</code> \u63d0\u793a <code>gf</code> \u547d\u4ee4\u4e0d\u5b58\u5728",id:"3-win10-\u63d0\u793a-gf-\u547d\u4ee4\u4e0d\u5b58\u5728",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"\u5bc4\u8bed\uff1a"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u8bf7\u4f7f\u7528\u9875\u9762\u53f3\u4e0a\u89d2\u7684\u641c\u7d22\u529f\u80fd\uff0c\u5168\u6587\u5feb\u901f\u68c0\u7d22\u5e38\u89c1\u95ee\u9898\u3002"}),"\n",(0,o.jsxs)(n.li,{children:["\u6b22\u8fce\u5927\u5bb6\u79ef\u6781\u53c2\u4e0e\u7f16\u8f91\uff0c\u628a\u81ea\u5df1\u9047\u5230\u7684\u5751\u600e\u4e48\u586b\u7684\u8bb0\u5f55\u8d77\u6765\u3002 ",(0,o.jsx)(n.strong,{children:"\u4f17\u4eba\u62fe\u67f4\u706b\u7130\u9ad8"})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"\u4e00golang\u57fa\u7840",children:"\u4e00\u3001Golang\u57fa\u7840"}),"\n",(0,o.jsx)(n.h3,{id:"1\u7a0b\u5e8f\u4ea7\u751f\u5f02\u5e38\u4f46\u662f\u7a0b\u5e8f\u76f4\u63a5\u5d29\u6e83\u672a\u88ab\u6846\u67b6\u81ea\u52a8\u6355\u83b7",children:"1\u3001\u7a0b\u5e8f\u4ea7\u751f\u5f02\u5e38\uff0c\u4f46\u662f\u7a0b\u5e8f\u76f4\u63a5\u5d29\u6e83\u672a\u88ab\u6846\u67b6\u81ea\u52a8\u6355\u83b7"}),"\n",(0,o.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,o.jsx)(n.code,{children:"GoFrame"})," \u6846\u67b6\u662f\u4e25\u8c28\u548c\u5b89\u5168\u7684\uff0c\u5982\u679c\u7a0b\u5e8f\u4ea7\u751f\u4e86\u5f02\u5e38\uff0c\u4f1a\u9ed8\u8ba4\u88ab\u6846\u67b6\u6355\u83b7\u3002\u5982\u679c\u672a\u88ab\u81ea\u52a8\u6355\u83b7\uff0c\u90a3\u4e48\u53ef\u80fd\u662f\u7531\u4e8e\u7a0b\u5e8f\u903b\u8f91\u81ea\u884c\u5f00\u4e86\u65b0\u7684 ",(0,o.jsx)(n.code,{children:"goroutine"}),"\uff0c\u5728\u65b0\u7684 ",(0,o.jsx)(n.code,{children:"goroutine"})," \u4e2d\u4ea7\u751f\u4e86\u5f02\u5e38\u3002\u56e0\u6b64\u8fd9\u91cc\u6709\u4e24\u4e2a\u65b9\u6848\u53ef\u4f9b\u5927\u5bb6\u9009\u62e9\uff1a"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\u4e0d\u5efa\u8bae\u5728\u8bf7\u6c42\u4e2d\u518d\u5f00 ",(0,o.jsx)(n.code,{children:"goroutine"})," \u6765\u5904\u7406\u8bf7\u6c42\uff0c\u8fd9\u6837\u6216\u4f7f\u5f97 ",(0,o.jsx)(n.code,{children:"goroutine"})," \u5feb\u901f\u81a8\u80c0\uff0c\u5f53 ",(0,o.jsx)(n.code,{children:"goroutine"})," \u591a\u4e86\u4e4b\u540e\u4e5f\u4f1a\u5728 ",(0,o.jsx)(n.code,{children:"Go"})," \u5f15\u64ce\u5c42\u9762\u5f71\u54cd\u7a0b\u5e8f\u7684\u6574\u4f53\u8c03\u5ea6\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:["\u5982\u679c\u5b9e\u5728\u6709\u5fc5\u8981\u65b0\u5f00 ",(0,o.jsx)(n.code,{children:"goroutine"})," \u7684\u573a\u666f\u4e0b\uff0c\u53ef\u4ee5\u8003\u8651\u4f7f\u7528 ",(0,o.jsx)(n.code,{children:"grpool.AddWithRecover"})," \u6765\u521b\u5efa\u65b0\u7684 ",(0,o.jsx)(n.code,{children:"goroutine"}),"\uff0c\u89c1\u540d\u77e5\u610f\uff0c\u5b83\u4f1a\u81ea\u52a8\u6355\u83b7\u5f02\u5e38\u3002\u66f4\u8be6\u7ec6\u7684\u4ecb\u7ecd\u8bf7\u53c2\u8003\uff1a ",(0,o.jsx)(n.a,{href:"/docs/components/os/grpool",children:"\u534f\u7a0b\u7ba1\u7406-grpool"})]}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"2-json-\u8f93\u51fa\u65f6\u5c4f\u853d\u6389\u4e00\u4e9b\u5b57\u6bb5",children:["2\u3001 ",(0,o.jsx)(n.code,{children:"json"})," \u8f93\u51fa\u65f6\u5c4f\u853d\u6389\u4e00\u4e9b\u5b57\u6bb5"]}),"\n",(0,o.jsxs)(n.p,{children:["\u53ef\u4ee5\u901a\u8fc7\u7ed3\u6784\u4f53\u5d4c\u5957\u7684\u65b9\u5f0f\u5b9e\u73b0\uff0c\u901a\u8fc7\u4f7f\u7528 ",(0,o.jsx)(n.code,{children:"*struct{}"})," \u7c7b\u578b\u4e0d\u5360\u7528\u7a7a\u95f4\u4ee5\u53ca ",(0,o.jsx)(n.code,{children:"omitempty"})," \u5b57\u6bb5\u4e3a\u7a7a\u4e0d\u8f93\u51fa\u5b57\u6bb5\u7684\u7279\u6027"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'type User struct {\n    Pwd string `json:"pwd"`\n    Age int    `json:"age"`\n}\n\ntype UserOut struct {\n    User\n    Pwd *struct{} `json:"pwd,omitempty"`// \u8fd9\u91cc\u7684\u5b57\u6bb5json\u540d\u9700\u8981\u548c\u5d4c\u5957\u7684\u5b57\u6bb5json\u540d\u4e00\u81f4\uff0c\u5426\u5219\u65e0\u6548\n}\n\nfunc TestJson(t *testing.T) {\n    u := User{Pwd: "123", Age: 1}\n    bb := UserOut{User: u}\n    b, _ := json.MarshalIndent(bb, "", "    ")\n    t.Log(string(b))\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"\u4e8c\u517c\u5bb9\u6027\u76f8\u5173",children:"\u4e8c\u3001\u517c\u5bb9\u6027\u76f8\u5173"}),"\n",(0,o.jsxs)(n.h3,{id:"1-client_tracinggo733-undefined-attributeany",children:["1\u3001 ",(0,o.jsx)(n.code,{children:"client_tracing.go:73:3: undefined: attribute.Any"})]}),"\n",(0,o.jsx)(n.p,{children:"\u4ee5\u4e0b\u9519\u8bef\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"D:\\Program Files\\Go\\bin\\pkg\\mod\\github.com\\gogf\\gf@v1.16.6\\net\\ghttp\\internal\\client\\client_tracing.go:73:3: undefined: attribute.Any\nD:\\Program Files\\Go\\bin\\pkg\\mod\\github.com\\gogf\\gf@v1.16.6\\net\\ghttp\\internal\\client\\client_tracing_tracer.go:150:3: undefined: attribute.Any\nD:\\Program Files\\Go\\bin\\pkg\\mod\\github.com\\gogf\\gf@v1.16.6\\net\\ghttp\\internal\\client\\client_tracing_tracer.go:151:3: undefined: attribute.Any\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u5bfc\u81f4\u8be5\u9519\u8bef\u7684\u539f\u56e0\u5728\u4e8e\u76ee\u524d\u60a8\u6b63\u5728\u4f7f\u7528\u7684 ",(0,o.jsx)(n.code,{children:"goframe"})," \u4f9d\u8d56\u7684 ",(0,o.jsx)(n.code,{children:"otel"})," \u5305\u7248\u672c\u8fc7\u4f4e\uff08 ",(0,o.jsx)(n.code,{children:"otel"})," \u5305\u662f ",(0,o.jsx)(n.code,{children:"OpenTelemetry"})," \u4f7f\u7528 ",(0,o.jsx)(n.code,{children:"Golang"})," \u5b9e\u73b0\u7684\u7b2c\u4e09\u65b9\u5305\uff0c\u6bd4\u8f83\u5e38\u7528\uff0c\u5f88\u591a\u7b2c\u4e09\u65b9\u57fa\u7840\u7ec4\u4ef6\u90fd\u4f1a\u4f9d\u8d56\uff09\uff0c\u800c\u9879\u76ee\u4e2d\u5176\u4ed6\u7684\u7b2c\u4e09\u65b9\u4f9d\u8d56\u7684 ",(0,o.jsx)(n.code,{children:"otel"})," \u5305\u8fc7\u9ad8\uff0c\u6309\u7167 ",(0,o.jsx)(n.code,{children:"Golang module"})," \u7684\u7ba1\u7406\u7b56\u7565\uff0c\u9879\u76ee\u5c06\u4f1a\u4f7f\u7528\u6700\u65b0\u7684 ",(0,o.jsx)(n.code,{children:"otel"})," \u5305\uff0c\u4e8e\u662f\u5bfc\u81f4\u4e86\u7248\u672c\u4e0d\u517c\u5bb9\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u6839\u56e0\u8fd8\u662f\u5728\u4e8e ",(0,o.jsx)(n.code,{children:"otel"})," \u7684\u5305\u5728\u8fed\u4ee3\u4e2d\u51fa\u73b0\u4e86\u4e0d\u517c\u5bb9\u5347\u7ea7\u5bfc\u81f4\uff0c\u4e0d\u8fc7\u76ee\u524d ",(0,o.jsx)(n.code,{children:"otel"})," \u5305\u5df2\u7ecf\u8f83\u7a33\u5b9a\uff0c\u51fa\u73b0\u4e0d\u517c\u5bb9\u7684\u53ef\u80fd\u6027\u964d\u4f4e\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u89e3\u51b3\u7684\u529e\u6cd5\u662f\u53ea\u6709\u5347\u7ea7 ",(0,o.jsx)(n.code,{children:"goframe"})," \u7684\u7248\u672c\uff0c ",(0,o.jsx)(n.code,{children:"goframe"})," \u6700\u65b0\u7248\u672c\u5df2\u7ecf\u66f4\u65b0\u4f7f\u7528\u4e86\u7a33\u5b9a\u7684 ",(0,o.jsx)(n.code,{children:"otel"})," \u5305\u3002\u5982\u679c\u60a8\u4f7f\u7528\u7684\u5df2\u7ecf\u662f ",(0,o.jsx)(n.code,{children:"v1"})," \u7684\u6700\u65b0\u7248\u672c\uff08 ",(0,o.jsx)(n.code,{children:"v1.16"}),"\uff09\uff0c\u90a3\u4e48\u8bf7\u5347\u7ea7\u4e3a ",(0,o.jsx)(n.code,{children:"v2"})," \u7248\u672c\u89e3\u51b3\u3002"]}),"\n",(0,o.jsxs)(n.h3,{id:"2\u4f7f\u7528-gf-\u4f9d\u8d56-v1162-\u65f6-go-mod-tidy-\u5931\u8d25",children:["2\u3001\u4f7f\u7528 ",(0,o.jsx)(n.code,{children:"gf"})," \u4f9d\u8d56 ",(0,o.jsx)(n.code,{children:"v1.16.2"})," \u65f6 ",(0,o.jsx)(n.code,{children:"go mod tidy"})," \u5931\u8d25"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"found (v0.36.0), but does not contain package go.opentelemetry.io/otel/metric/registry"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:c(89342).A+"",width:"1504",height:"306"})}),"\n",(0,o.jsxs)(n.p,{children:["\u89e3\u51b3\u529e\u6cd5\uff0c\u5347\u7ea7 ",(0,o.jsx)(n.code,{children:"gf"})," \u4f9d\u8d56\u5230 ",(0,o.jsx)(n.code,{children:"v1.16.9"})," \u518d ",(0,o.jsx)(n.code,{children:"go mod tidy"})]}),"\n",(0,o.jsx)(n.h2,{id:"\u4e09\u6570\u636e\u5e93\u76f8\u5173",children:"\u4e09\u3001\u6570\u636e\u5e93\u76f8\u5173"}),"\n",(0,o.jsxs)(n.p,{children:["\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,o.jsx)(n.a,{href:"/docs/core/gdb/faq",children:"ORM\u5e38\u89c1\u95ee\u9898"})]}),"\n",(0,o.jsx)(n.h2,{id:"\u56db\u4f7f\u7528\u76f8\u5173",children:"\u56db\u3001\u4f7f\u7528\u76f8\u5173"}),"\n",(0,o.jsx)(n.h3,{id:"1\u4e0d\u540c\u73af\u5883\u5982\u4f55\u52a0\u8f7d\u4e0d\u540c\u7684\u914d\u7f6e\u6587\u4ef6",children:"1\u3001\u4e0d\u540c\u73af\u5883\u5982\u4f55\uff0c\u52a0\u8f7d\u4e0d\u540c\u7684\u914d\u7f6e\u6587\u4ef6?"}),"\n",(0,o.jsx)(n.p,{children:"\u4e0d\u540c\u73af\u5883\u6307\u7684\u662f\uff1a\u5f00\u53d1\u73af\u5883/\u6d4b\u8bd5\u73af\u5883/\u9884\u53d1\u73af\u5883/\u751f\u4ea7\u73af\u5883\u7b49\u3002"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u9996\u5148\uff0c\u5728\u4e00\u4e9b\u4e92\u8054\u7f51\u9879\u76ee\u4e2d\uff0c\u7279\u522b\u662f\u5206\u5e03\u5f0f\u6216\u8005\u5fae\u670d\u52a1\u5316\u7684\u67b6\u6784\u4e0b\uff0c\u4e00\u822c\u4f1a\u4f7f\u7528\u914d\u7f6e\u7ba1\u7406\u4e2d\u5fc3\uff0c\u4e0d\u540c\u7684\u73af\u5883\u4f1a\u5bf9\u5e94\u4e0d\u540c\u7684\u914d\u7f6e\u7ba1\u7406\u4e2d\u5fc3\uff0c\u6240\u4ee5\u8fd9\u6837\u7684\u573a\u666f\u4e0d\u4f1a\u5b58\u5728\u8fd9\u6837\u7684\u95ee\u9898\u3002"}),"\n",(0,o.jsxs)(n.li,{children:["\u5176\u6b21\uff0c\u5982\u679c\u662f\u4f20\u7edf\u7684\u9879\u76ee\u7ba1\u7406\u65b9\u5f0f\u4e0b\uff0c\u53ef\u80fd\u4f1a\u5c06\u914d\u7f6e\u6587\u4ef6\u653e\u5230\u4ee3\u7801\u4ed3\u5e93\u4e2d\u5171\u540c\u7ba1\u7406\uff0c\u8fd9\u6837\u7684\u65b9\u5f0f\u662f\u4e0d\u63a8\u8350\u7684\u3002\u5982\u679c\u60a8\u4ecd\u7136\u60f3\u8981\u8fd9\u4e48\u505a\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u7cfb\u7edf\u73af\u5883\u53d8\u91cf\u6216\u8005\u547d\u4ee4\u884c\u542f\u52a8\u53c2\u6570\uff0c\u8ba9\u7a0b\u5e8f\u81ea\u52a8\u9009\u62e9\u914d\u7f6e\u6587\u4ef6\u6216\u8005\u6307\u5b9a\u914d\u7f6e\u76ee\u5f55\uff0c\u53c2\u8003 ",(0,o.jsx)(n.a,{href:"/docs/core/gcfg",children:"\u914d\u7f6e\u7ba1\u7406"})," \u7ae0\u8282\u3002\u4f8b\u5982\uff1a ",(0,o.jsx)(n.code,{children:"./app --gf.gcfg.file config-prod.toml "})," \u5219\u901a\u8fc7\u547d\u4ee4\u884c\u542f\u52a8\u53c2\u6570\u7684\u65b9\u5f0f\u5c06\u9ed8\u8ba4\u8bfb\u53d6\u7684\u914d\u7f6e\u6587\u4ef6\u4fee\u6539\u4e3a\u4e86 ",(0,o.jsx)(n.code,{children:"config-prod.toml"})," \u6587\u4ef6\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u6211\u4eec\u4e0d\u5efa\u8bae\u60a8\u5728\u7a0b\u5e8f\u4e2d\u901a\u8fc7\u4ee3\u7801\u903b\u8f91\u6765\u533a\u5206\u548c\u8bfb\u53d6\u4e0d\u540c\u73af\u5883\u7684\u914d\u7f6e\u6587\u4ef6\u3002"}),"\n",(0,o.jsxs)(n.h3,{id:"2-glog-with-error-logging-before-flagparse",children:["2\u3001 ",(0,o.jsx)(n.code,{children:'glog with "ERROR: logging before flag.Parse"'})]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Golang"})," \u5b98\u65b9\u6709\u4e2a\u7b80\u5355\u7684\u65e5\u5fd7\u5e93\u5305\u540d\u4e5f\u53eb\u505a ",(0,o.jsx)(n.code,{children:"glog"}),"\uff0c\u68c0\u67e5\u4f60\u6587\u4ef6\u9876\u90e8 ",(0,o.jsx)(n.code,{children:"import"})," \u7684\u5305\u540d\uff0c\u5c06 ",(0,o.jsx)(n.code,{children:"github.com/golang/glog"})," \u4fee\u6539\u4e3a\u6846\u67b6\u7684\u65e5\u5fd7\u7ec4\u4ef6\u5373\u53ef\uff0c\u65e5\u5fd7\u7ec4\u4ef6\u4f7f\u7528\u8bf7\u53c2\u8003\uff1a ",(0,o.jsx)(n.a,{href:"/docs/core/glog",children:"\u65e5\u5fd7\u7ec4\u4ef6"})]}),"\n",(0,o.jsxs)(n.h3,{id:"3-gcron-\u4e0e-http-\u5982\u4f55\u540c\u65f6\u4f7f\u7528",children:["3\u3001 ",(0,o.jsx)(n.code,{children:"gcron"})," \u4e0e ",(0,o.jsx)(n.code,{children:"http"})," \u5982\u4f55\u540c\u65f6\u4f7f\u7528?"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'func main() {\n    //\u5b9a\u65f6\u4efb\u52a11\n    gcron.AddSingleton("*/5 * * * * *", func() {\n        task.Test()\n        glog.Debug("gcron1")\n    })\n\n    //\u5b9a\u65f6\u4efb\u52a12\n    gcron.AddSingleton("*/10 * * * * *", func() {\n        glog.Debug("gcron2")\n    })\n\n    //\u63a5\u6536http\u8bf7\u6c42\n    g.Server().Run()\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u6ce8\u610f, ",(0,o.jsx)(n.code,{children:"gcron"})," \u4e00\u5b9a\u8981\u5728 ",(0,o.jsx)(n.code,{children:"g.Server().Run"})," \u7684\u524d\u9762\u3002"]}),"\n",(0,o.jsxs)(n.h3,{id:"4-goframe-\u7684-struct-tag\u6807\u7b7e-\u6709\u54ea\u4e9b",children:["4\u3001 ",(0,o.jsx)(n.code,{children:"GoFrame"})," \u7684 ",(0,o.jsx)(n.code,{children:"struct tag"}),"(\u6807\u7b7e) \u6709\u54ea\u4e9b\uff1f"]}),"\n",(0,o.jsxs)(n.p,{children:["\u53c2\u6570\u8bf7\u6c42\u3001\u6570\u636e\u6821\u9a8c\u3001 ",(0,o.jsx)(n.code,{children:"OpenAPIv3"}),"\u3001\u547d\u4ee4\u7ba1\u7406\u3001\u6570\u636e\u5e93ORM\u3002"]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Tag(\u7b80\u5199)"}),(0,o.jsx)(n.th,{children:"\u5168\u79f0"}),(0,o.jsx)(n.th,{children:"\u63cf\u8ff0"}),(0,o.jsx)(n.th,{children:"\u76f8\u5173\u6587\u6863"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"v"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"valid"})}),(0,o.jsx)(n.td,{children:"\u6570\u636e\u6821\u9a8c\u6807\u7b7e\u3002"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"/docs/core/gvalid/parameter-type-struct",children:"Struct\u6821\u9a8c-\u57fa\u672c\u4f7f\u7528"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"p"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"param"})}),(0,o.jsx)(n.td,{children:"\u81ea\u5b9a\u4e49\u8bf7\u6c42\u53c2\u6570\u5339\u914d\u3002"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"/docs/web/request/struct-converting",children:"\u8bf7\u6c42\u8f93\u5165-\u5bf9\u8c61\u5904\u7406"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"d"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"default"})}),(0,o.jsx)(n.td,{children:"\u8bf7\u6c42\u53c2\u6570\u9ed8\u8ba4\u503c\u7ed1\u5b9a\u3002"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"/docs/web/request/default-value",children:"\u8bf7\u6c42\u8f93\u5165-\u9ed8\u8ba4\u503c\u7ed1\u5b9a"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"orm"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"orm"})}),(0,o.jsx)(n.td,{children:"ORM\u6807\u7b7e\uff0c\u7528\u4e8e\u6307\u5b9a\u8868\u540d\u3001\u5173\u8054\u5173\u7cfb\u3002"}),(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.a,{href:"/docs/cli/gen/dao",children:"\u6570\u636e\u89c4\u8303-gen dao"}),(0,o.jsx)("br",{}),(0,o.jsx)(n.a,{href:"/docs/core/gdb/chaining-relation-with",children:"\u6a21\u578b\u5173\u8054-\u9759\u6001\u5173\u8054-With\u7279\u6027"})]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"dc"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"description"})}),(0,o.jsx)(n.td,{children:"\u901a\u7528\u7ed3\u6784\u4f53\u5c5e\u6027\u63cf\u8ff0\uff0cORM\u548c\u63a5\u53e3\u90fd\u7528\u5230\u3002\u5c5e\u4e8e\u6846\u67b6\u9ed8\u8ba4\u7684\u5c5e\u6027\u63cf\u8ff0\u6807\u7b7e\u3002"}),(0,o.jsx)(n.td,{})]})]})]}),"\n",(0,o.jsx)(n.p,{children:"\u5176\u4ed6\uff1a"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\u547d\u4ee4\u884c\u7ed3\u6784\u5316\u7ba1\u7406\u53c2\u6570\uff1a ",(0,o.jsx)(n.a,{href:"/docs/core/gcmd/struct",children:"\u547d\u4ee4\u7ba1\u7406-\u7ed3\u6784\u5316\u53c2\u6570"})]}),"\n",(0,o.jsxs)(n.li,{children:["\u6846\u67b6\u5e38\u7528\u6807\u7b7e\u6807\u7b7e\u96c6\u4e2d\u7ba1\u7406\u5230\u4e86 ",(0,o.jsx)(n.code,{children:"gtag"})," \u7ec4\u4ef6\u4e0b\uff1a ",(0,o.jsx)(n.a,{href:"https://github.com/gogf/gf/blob/master/util/gtag/gtag.go",children:"https://github.com/gogf/gf/blob/master/util/gtag/gtag.go"})]}),"\n",(0,o.jsxs)(n.li,{children:["\u5728\u63a5\u53e3\u6587\u6863\u7ae0\u8282\uff0c\u7531\u4e8e\u91c7\u7528\u4e86\u6807\u7b7e\u5f62\u5f0f\u751f\u6210 ",(0,o.jsx)(n.code,{children:"OpenAPI"})," \u6587\u6863\uff0c\u56e0\u6b64\u6807\u7b7e\u6bd4\u8f83\u591a\uff0c\u5177\u4f53\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,o.jsx)(n.a,{href:"/docs/web/api-document",children:"\u63a5\u53e3\u6587\u6863"})]}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"5-http-server-\u51fa\u73b0-context-cancel-\u62a5\u9519",children:["5\u3001 ",(0,o.jsx)(n.code,{children:"HTTP Server"})," \u51fa\u73b0 ",(0,o.jsx)(n.code,{children:"context cancel"})," \u62a5\u9519"]}),"\n",(0,o.jsxs)(n.p,{children:["\u4ece\u6846\u67b6 ",(0,o.jsx)(n.code,{children:"v2.5"})," \u7248\u672c\u5f00\u59cb\uff0c\u6846\u67b6\u7684 ",(0,o.jsx)(n.code,{children:"HTTP Server"})," \u7684 ",(0,o.jsx)(n.code,{children:"Request"})," \u5bf9\u8c61\u5c06\u4f1a\u76f4\u63a5\u7ee7\u627f\u4e0e\u6807\u51c6\u5e93\u7684 ",(0,o.jsx)(n.code,{children:"http.Request"})," \u5bf9\u8c61\uff0c\n\u5176\u4e2d\u5c31\u5305\u62ec\u5176\u4e2d\u7684 ",(0,o.jsx)(n.code,{children:"context"})," \u4e0a\u4e0b\u6587\u5bf9\u8c61\u3002\u5f53\u5ba2\u6237\u7aef\u4f8b\u5982\u6d4f\u89c8\u5668\u3001 ",(0,o.jsx)(n.code,{children:"HTTP Client"})," \u53d6\u6d88\u8bf7\u6c42\u65f6\uff0c\n\u670d\u52a1\u7aef\u4f1a\u63a5\u6536\u5230 ",(0,o.jsx)(n.code,{children:"context cancel"})," \u64cd\u4f5c( ",(0,o.jsx)(n.code,{children:"context.Done"}),")\uff0c\u4f46\u662f\u670d\u52a1\u7aef\u5e76\u4e0d\u4f1a\u76f4\u63a5\u62a5\u51fa ",(0,o.jsx)(n.code,{children:"context cancel"})," \u7684\u9519\u8bef\u3002\n\u8fd9\u79cd\u9519\u8bef\u5f80\u5f80\u5728\u4e1a\u52a1\u903b\u8f91\u8c03\u7528\u4e86\u5e95\u5c42\u7684\u6570\u636e\u5e93\u3001\u6d88\u606f\u7ec4\u4ef6\u7b49\u7ec4\u4ef6\u65f6\uff0c\u7531\u8fd9\u4e9b\u7ec4\u4ef6\u8bc6\u522b\u5230 ",(0,o.jsx)(n.code,{children:"context cancel"})," \u64cd\u4f5c\uff0c\n\u5c06\u4f1a\u505c\u6b62\u6267\u884c\u5e76\u5f80\u4e0a\u629b\u51fa ",(0,o.jsx)(n.code,{children:"context cancel"})," \u9519\u8bef\u63d0\u9192\u4e0a\u5c42\u5df2\u7ecf\u7ec8\u6b62\u6267\u884c\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u8fd9\u662f\u7b26\u5408\u6807\u51c6\u5e93\u8bbe\u8ba1\u7684\u884c\u4e3a\uff0c\u5ba2\u6237\u7aef\u7ec8\u6b62\u8bf7\u6c42\u540e\uff0c\u670d\u52a1\u7aef\u4e5f\u6ca1\u6709\u7ee7\u7eed\u6267\u884c\u4e0b\u53bb\u7684\u5fc5\u8981\u3002"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://goframe.org/pages/viewpage.action?pageId=124387603#id-%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98-%E6%9C%8D%E5%8A%A1%E7%AB%AF%E9%A2%91%E7%B9%81%E5%87%BA%E7%8E%B0contextcancel%E9%94%99%E8%AF%AF",children:"\u670d\u52a1\u7aef\u9891\u7e41\u51fa\u73b0contextcancel\u9519\u8bef"})}),"\n",(0,o.jsx)(n.h2,{id:"\u4e94\u73af\u5883\u76f8\u5173",children:"\u4e94\u3001\u73af\u5883\u76f8\u5173"}),"\n",(0,o.jsxs)(n.h3,{id:"1-linux-\u4e0b\u6267\u884c-go-build-maingo-\u63d0\u793a\u8fde\u63a5\u8d85\u65f6-connection-timed-out",children:["1\u3001 ",(0,o.jsx)(n.code,{children:"Linux"})," \u4e0b\u6267\u884c ",(0,o.jsx)(n.code,{children:"go build main.go"})," \u63d0\u793a\u8fde\u63a5\u8d85\u65f6 ",(0,o.jsx)(n.code,{children:"connection timed out"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'go: github.com/gogf/gf@v1.14.6-0.20201214132204-c685876e6f67: Get "https://proxy.golang.org/github.com/gogf/gf/@v/v1.14.6-0.20201214132204-c685876e6f67.mod":\ndial tcp 172.217.160.113:443:\nconnect: connection timed out\n'})}),"\n",(0,o.jsx)(n.p,{children:"\u89e3\u51b3\u529e\u6cd5\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"export GO111MODULE=on\nexport GOPROXY=https://goproxy.cn\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u5177\u4f53\u8bf7\u770b\uff1a"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/install-go/go-module",children:"Go Module"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://goproxy.cn",children:"https://goproxy.cn"})}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"2-linux-\u4e0b\u5b89\u88c5-gf-\u63d0\u793a\u547d\u4ee4\u4e0d\u5b58\u5728-command-not-found",children:["2\u3001 ",(0,o.jsx)(n.code,{children:"Linux"})," \u4e0b\u5b89\u88c5 ",(0,o.jsx)(n.code,{children:"gf"})," \u63d0\u793a\u547d\u4ee4\u4e0d\u5b58\u5728 ",(0,o.jsx)(n.code,{children:"command not found"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"./gf install\n\u5b89\u88c5\u540e\n\u6267\u884cgf -v\n\u63d0\u793agf: command not found\n\u4e14/usr/bin\u76ee\u5f55\u4e0b\u5e76\u6ca1\u6709gf\u6587\u4ef6\n\n\u89e3\u51b3\u65b9\u6cd5:\n\u62f7\u8d1dsh\u6587\u4ef6\u5230 /usr/bin\u76ee\u5f55\ncp gf /usr/bin\n\n\u7136\u540e\u6267\u884c\ngf -v\n\n\u5c31\u4f1a\u770b\u5230\nGoFrame CLI Tool v1.15.4, https://goframe.org\nInstall Path: /bin/gf\nBuild Detail:\nGo Version: go1.16.2\nGF Version: v1.15.3\nGit Commit: 22011e76dc3e14006936164cc89e2d4c9190a36d\nBuild Time: 2021-03-30 15:43:22\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"3-win10-\u63d0\u793a-gf-\u547d\u4ee4\u4e0d\u5b58\u5728",children:["3\u3001 ",(0,o.jsx)(n.code,{children:"Win10"})," \u63d0\u793a ",(0,o.jsx)(n.code,{children:"gf"})," \u547d\u4ee4\u4e0d\u5b58\u5728"]}),"\n",(0,o.jsxs)(n.p,{children:["\u89e3\u51b3\u529e\u6cd5\uff1a\u5b89\u88c5 ",(0,o.jsx)(n.code,{children:"gf.exe"})," \u53c2\u8003\uff1a ",(0,o.jsx)(n.a,{href:"/docs/cli",children:"\u5f00\u53d1\u5de5\u5177"})]})]})}function g(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},89342:(e,n,c)=>{c.d(n,{A:()=>d});const d=c.p+"assets/images/08e4b24634f2819f4e6439c9cf9e08a8-390e10dd8d09f8166a4c64f959e190b2.png"},28453:(e,n,c)=>{c.d(n,{R:()=>r,x:()=>l});var d=c(96540);const o={},i=d.createContext(o);function r(e){const n=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);