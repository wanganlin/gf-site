"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[33196],{40737:(e,s,d)=>{d.r(s),d.d(s,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"docs/\u5176\u4ed6\u8d44\u6599/\u51c6\u5907\u5de5\u4f5c/\u73af\u5883\u5b89\u88c5","title":"\u73af\u5883\u5b89\u88c5","description":"\u8be5\u7ae0\u8282\u4e3a\u624b\u6478\u624b\u5b89\u88c5 Golang \u5f00\u53d1\u73af\u5883\u53ca IDE \u914d\u7f6e\u6559\u7a0b\uff0c\u4ec5\u9488\u5bf9 Golang \u840c\u65b0\uff0c\u8001\u53f8\u673a\u8bf7\u5ffd\u7565\u3002","source":"@site/docs/docs/\u5176\u4ed6\u8d44\u6599/\u51c6\u5907\u5de5\u4f5c/\u73af\u5883\u5b89\u88c5.md","sourceDirName":"docs/\u5176\u4ed6\u8d44\u6599/\u51c6\u5907\u5de5\u4f5c","slug":"/docs/install-go","permalink":"/en/docs/install-go","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u5176\u4ed6\u8d44\u6599/\u51c6\u5907\u5de5\u4f5c/\u73af\u5883\u5b89\u88c5.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730724532000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/install-go","title":"\u73af\u5883\u5b89\u88c5","sidebar_position":0,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"\u9644\u5f55\uff1a\u7cfb\u7edf\u4fe1\u53f7\u5217\u8868","permalink":"/en/docs/other/system-signals"},"next":{"title":"Go Module","permalink":"/en/docs/install-go/go-module"}}');var c=d(74848),l=d(28453);const i={slug:"/docs/install-go",title:"\u73af\u5883\u5b89\u88c5",sidebar_position:0,hide_title:!0},t=void 0,o={},a=[{value:"Go\u5f00\u53d1\u73af\u5883\u5b89\u88c5",id:"go\u5f00\u53d1\u73af\u5883\u5b89\u88c5",level:2},{value:"Step1 - \u4e0b\u8f7dGo\u5f00\u53d1\u5305",id:"step1---\u4e0b\u8f7dgo\u5f00\u53d1\u5305",level:3},{value:"Step2 - \u5b89\u88c5\u5f15\u5bfc",id:"step2---\u5b89\u88c5\u5f15\u5bfc",level:3},{value:"IDE\u5f00\u53d1\u73af\u5883\u5b89\u88c5",id:"ide\u5f00\u53d1\u73af\u5883\u5b89\u88c5",level:2},{value:"Goland\u7684\u4f7f\u7528",id:"goland\u7684\u4f7f\u7528",level:3},{value:"Step1. \u6253\u5f00IDE",id:"step1-\u6253\u5f00ide",level:4},{value:"Step2. \u521b\u5efa\u9879\u76ee",id:"step2-\u521b\u5efa\u9879\u76ee",level:4},{value:"Step3. \u521b\u5efa\u7a0b\u5e8f",id:"step3-\u521b\u5efa\u7a0b\u5e8f",level:4},{value:"Step4. \u6267\u884c\u8fd0\u884c",id:"step4-\u6267\u884c\u8fd0\u884c",level:4},{value:"VSCode\u7684\u4f7f\u7528",id:"vscode\u7684\u4f7f\u7528",level:3},{value:"Step1.\u4e0b\u8f7d\u5b89\u88c5",id:"step1\u4e0b\u8f7d\u5b89\u88c5",level:4},{value:"Step2.\u5b89\u88c5Go\u6269\u5c55",id:"step2\u5b89\u88c5go\u6269\u5c55",level:4},{value:"Step3.HelloWorld",id:"step3helloworld",level:4}];function r(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.p,{children:["\u8be5\u7ae0\u8282\u4e3a\u624b\u6478\u624b\u5b89\u88c5 ",(0,c.jsx)(s.code,{children:"Golang"})," \u5f00\u53d1\u73af\u5883\u53ca ",(0,c.jsx)(s.code,{children:"IDE"})," \u914d\u7f6e\u6559\u7a0b\uff0c\u4ec5\u9488\u5bf9 ",(0,c.jsx)(s.code,{children:"Golang"})," \u840c\u65b0\uff0c\u8001\u53f8\u673a\u8bf7\u5ffd\u7565\u3002"]}),"\n",(0,c.jsx)(s.h2,{id:"go\u5f00\u53d1\u73af\u5883\u5b89\u88c5",children:"Go\u5f00\u53d1\u73af\u5883\u5b89\u88c5"}),"\n",(0,c.jsx)(s.h3,{id:"step1---\u4e0b\u8f7dgo\u5f00\u53d1\u5305",children:"Step1 - \u4e0b\u8f7dGo\u5f00\u53d1\u5305"}),"\n",(0,c.jsxs)(s.p,{children:["\u8bbf\u95eeGo\u56fd\u5185\u955c\u50cf\u7ad9\u4e0b\u8f7d\u9875\u9762 ",(0,c.jsx)(s.a,{href:"https://golang.google.cn/dl/",children:"https://golang.google.cn/dl/"}),"\uff0c\u5e76\u5728\u9875\u9762\u6700\u4e0a\u65b9\u7684\u7248\u672c\u4e2d\u9009\u62e9\u4f60\u5f53\u524d\u7684\u7cfb\u7edf\u7248\u672c\uff0c\u4f1a\u4e0b\u8f7d\u6700\u65b0\u7248\u672c\u7684Go\u5f00\u53d1\u5305:"]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:d(50690).A+"",width:"1025",height:"532"})}),"\n",(0,c.jsx)(s.h3,{id:"step2---\u5b89\u88c5\u5f15\u5bfc",children:"Step2 - \u5b89\u88c5\u5f15\u5bfc"}),"\n",(0,c.jsxs)(s.p,{children:["\u8bbf\u95ee\u5b98\u65b9\u5b89\u88c5\u4ecb\u7ecd\u9875\u9762 ",(0,c.jsx)(s.a,{href:"https://golang.google.cn/doc/install",children:"https://golang.google.cn/doc/install"}),"\uff0c\u6309\u7167\u5f53\u524d\u7cfb\u7edf\u7248\u672c\u6267\u884c\u5bf9\u5e94\u7684\u5b89\u88c5\u6d41\u7a0b\u5373\u53ef\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:["Windows( ",(0,c.jsx)(s.code,{children:"msi"}),")\u548cMacOS( ",(0,c.jsx)(s.code,{children:"pkg"}),")\u63a8\u8350\u4f7f\u7528\u5b89\u88c5\u5305\u7684\u65b9\u5f0f\u6765\u5b89\u88c5\u3002\u4f5c\u8005\u5f53\u524dMacOS\u5b89\u88c5\u5305( ",(0,c.jsx)(s.code,{children:"pkg"}),")\u5b89\u88c5\u8fc7\u7a0b\u5982\u4e0b\u56fe\u6240\u793a\uff1a"]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:d(13795).A+"",width:"620",height:"438"})}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:d(30790).A+"",width:"620",height:"438"})}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:d(20415).A+"",width:"620",height:"438"})}),"\n",(0,c.jsx)(s.p,{children:"Go\u7684\u5f00\u53d1\u5305\u5347\u7ea7\u4e5f\u662f\u540c\u6837\u7684\u8fc7\u7a0b\u3002"}),"\n",(0,c.jsx)(s.h2,{id:"ide\u5f00\u53d1\u73af\u5883\u5b89\u88c5",children:"IDE\u5f00\u53d1\u73af\u5883\u5b89\u88c5"}),"\n",(0,c.jsxs)(s.p,{children:["\u76ee\u524d ",(0,c.jsx)(s.code,{children:"Go"})," \u7684 ",(0,c.jsx)(s.code,{children:"IDE"})," \u6709\u4e24\u6b3e\u6bd4\u8f83\u6d41\u884c\uff0c\u4e00\u6b3e\u662f ",(0,c.jsx)(s.code,{children:"VSCode+Plugins"}),"\uff08\u514d\u8d39\uff09\uff0c\u53e6\u4e00\u6b3e\u662f ",(0,c.jsx)(s.code,{children:"JetBrains"})," \u516c\u53f8\u7684 ",(0,c.jsx)(s.code,{children:"Goland"}),"\uff08\u6536\u8d39\uff09\u3002\u7531\u4e8e ",(0,c.jsx)(s.code,{children:"JetBrains"})," \u4e5f\u662f ",(0,c.jsx)(s.code,{children:"GoFrame"})," \u6846\u67b6\u7684\u8d5e\u52a9\u5546\uff0c\u56e0\u6b64\u6211\u4eec\u4f18\u5148\u63a8\u8350\u4f7f\u7528 ",(0,c.jsx)(s.code,{children:"Goland"})," \u6765\u4f5c\u4e3a\u5f00\u53d1IDE\uff0c\u4e0b\u8f7d\u53ca\u6ce8\u518c\u8bf7\u53c2\u8003\u7f51\u4e0a\u6559\u7a0b\uff08 ",(0,c.jsx)(s.a,{href:"https://www.baidu.com/s?wd=goland%20%E5%AE%89%E8%A3%85",children:"\u767e\u5ea6"})," \u6216 ",(0,c.jsx)(s.a,{href:"https://www.google.com/search?q=goland+%E5%AE%89%E8%A3%85",children:"Google"}),"\uff09\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"JetBrains"})," \u7684\u5b98\u65b9\u7f51\u7ad9\u4e3a\uff1a ",(0,c.jsx)(s.a,{href:"https://www.jetbrains.com/?from=GoFrame",children:"https://www.jetbrains.com"})]}),"\n",(0,c.jsx)(s.h3,{id:"goland\u7684\u4f7f\u7528",children:"Goland\u7684\u4f7f\u7528"}),"\n",(0,c.jsxs)(s.p,{children:["\u6211\u4eec\u6765\u521b\u5efa\u7b2c\u4e00\u4e2a ",(0,c.jsx)(s.code,{children:"Go"})," \u7a0b\u5e8f\u5427\uff0c\u8001\u89c4\u77e9\uff0c\u4e0a ",(0,c.jsx)(s.code,{children:"hello world"}),"\u3002"]}),"\n",(0,c.jsx)(s.h4,{id:"step1-\u6253\u5f00ide",children:"Step1. \u6253\u5f00IDE"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:d(24238).A+"",width:"800",height:"500"})}),"\n",(0,c.jsx)(s.h4,{id:"step2-\u521b\u5efa\u9879\u76ee",children:"Step2. \u521b\u5efa\u9879\u76ee"}),"\n",(0,c.jsxs)(s.p,{children:["\u8fd9\u91cc\u9700\u8981\u6ce8\u610f\u7684\u662f ",(0,c.jsx)(s.code,{children:"Go"})," \u5b89\u88c5\u6587\u4ef6\u7684\u8def\u5f84( ",(0,c.jsx)(s.code,{children:"SDK"}),")\uff0c ",(0,c.jsx)(s.a,{href:"https://golang.google.cn/doc/install",children:"\u5b98\u65b9\u5b89\u88c5\u6587\u6863"})," \u6709\u8be6\u7ec6\u8bf4\u660e\uff0c\u8bf7\u4ed4\u7ec6\u9605\u8bfb\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:["\u5176\u4e2d\u7684 ",(0,c.jsx)(s.code,{children:"Location"})," \u968f\u610f\u9009\u62e9\u4e00\u4e2a\u672c\u5730\u8def\u5f84\u5373\u53ef\u3002"]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:d(38192).A+"",width:"666",height:"482"})}),"\n",(0,c.jsx)(s.h4,{id:"step3-\u521b\u5efa\u7a0b\u5e8f",children:"Step3. \u521b\u5efa\u7a0b\u5e8f"}),"\n",(0,c.jsxs)(s.p,{children:["\u65b0\u5efa\u4e00\u4e2a ",(0,c.jsx)(s.code,{children:"go"})," \u6587\u4ef6\uff0c\u53eb\u505a ",(0,c.jsx)(s.code,{children:"hello.go"}),"\uff0c\u5e76\u8f93\u5165\u4ee5\u4e0b\u4ee3\u7801:"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-go",children:'package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("hello world!")\n}\n'})}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:d(72071).A+"",width:"931",height:"534"})}),"\n",(0,c.jsx)(s.h4,{id:"step4-\u6267\u884c\u8fd0\u884c",children:"Step4. \u6267\u884c\u8fd0\u884c"}),"\n",(0,c.jsxs)(s.p,{children:["\u83dc\u5355\u680f ",(0,c.jsx)(s.code,{children:"Run"})," - ",(0,c.jsx)(s.code,{children:"Run"})," - ",(0,c.jsx)(s.code,{children:"go build hello.go"}),"\u3002"]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:d(32923).A+"",width:"800",height:"542"})}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:d(69434).A+"",width:"692",height:"593"})}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:d(142).A+"",width:"828",height:"528"})}),"\n",(0,c.jsxs)(s.p,{children:["\u606d\u559c\u4f60\uff0c\u7b2c\u4e00\u4e2a ",(0,c.jsx)(s.code,{children:"Go"})," \u7a0b\u5e8f\u4fbf\u6210\u529f\u4e86\uff01"]}),"\n",(0,c.jsx)(s.h3,{id:"vscode\u7684\u4f7f\u7528",children:"VSCode\u7684\u4f7f\u7528"}),"\n",(0,c.jsx)(s.h4,{id:"step1\u4e0b\u8f7d\u5b89\u88c5",children:(0,c.jsx)(s.a,{href:"https://code.visualstudio.com/",children:"Step1.\u4e0b\u8f7d\u5b89\u88c5"})}),"\n",(0,c.jsx)(s.h4,{id:"step2\u5b89\u88c5go\u6269\u5c55",children:(0,c.jsx)(s.a,{href:"https://docs.microsoft.com/zh-cn/learn/modules/go-get-started/4-install-visual-studio-code?ns-enrollment-type=learningpath&ns-enrollment-id=learn.languages.go-first-steps",children:"Step2.\u5b89\u88c5Go\u6269\u5c55"})}),"\n",(0,c.jsx)(s.h4,{id:"step3helloworld",children:(0,c.jsx)(s.a,{href:"https://docs.microsoft.com/zh-cn/learn/modules/go-get-started/5-hello-world",children:"Step3.HelloWorld"})})]})}function h(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(r,{...e})}):r(e)}},38192:(e,s,d)=>{d.d(s,{A:()=>n});const n=d.p+"assets/images/0520c06f4ba6cb8411ffe09eb0713a26-ca15106972625163f1424ca75d8ef711.png"},24238:(e,s,d)=>{d.d(s,{A:()=>n});const n=d.p+"assets/images/53e952d14b92225b865b2bca6aab7cd2-7c584cace99e641f4c5a904bb220b58e.png"},13795:(e,s,d)=>{d.d(s,{A:()=>n});const n=d.p+"assets/images/80729ac6360ac646a39b696d32778d66-55d6bd95cd25b0b9677da47b167e2452.png"},69434:(e,s,d)=>{d.d(s,{A:()=>n});const n=d.p+"assets/images/80d5fbefe18582fcbbf6f7c34cdff35a-139dbbd238fb06bd06c84fbb854598e6.png"},32923:(e,s,d)=>{d.d(s,{A:()=>n});const n=d.p+"assets/images/a4dc00babf5b34dcc081b916b83713b8-a61fe1daa243d8a5561306bc92aa4472.png"},30790:(e,s,d)=>{d.d(s,{A:()=>n});const n=d.p+"assets/images/afc21d8598a0bef86c1a53c8e6784bb6-a63b2b6f05373fa6ee76e4797119bc90.png"},72071:(e,s,d)=>{d.d(s,{A:()=>n});const n=d.p+"assets/images/c3c0ce22f357637b39e7656733d91983-7b9c51f69cdabdc408b9e8425612e1c3.png"},50690:(e,s,d)=>{d.d(s,{A:()=>n});const n=d.p+"assets/images/d3ce7f0e43ebf678adea8db4c46662d5-f9d11574b304156e13d860b888bf4fc3.png"},142:(e,s,d)=>{d.d(s,{A:()=>n});const n=d.p+"assets/images/ecb56b2f0bb37809e2fd11f89e667566-827d97f0ea59b603e30ab50dd828ef00.png"},20415:(e,s,d)=>{d.d(s,{A:()=>n});const n=d.p+"assets/images/f3f59daf118e34e16a920bcdcf6391de-9211f606160796bedbb3593a50520b67.png"},28453:(e,s,d)=>{d.d(s,{R:()=>i,x:()=>t});var n=d(96540);const c={},l=n.createContext(c);function i(e){const s=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),n.createElement(l.Provider,{value:s},e.children)}}}]);