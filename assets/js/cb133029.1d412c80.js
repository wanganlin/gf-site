"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[52594],{14150:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var t=r(74848),s=r(28453);const c={title:"HTTPS & TLS",sidebar_position:2,hide_title:!0},o=void 0,l={id:"WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/HTTPS & TLS",title:"HTTPS & TLS",description:"HTTPS\u670d\u52a1",source:"@site/versioned_docs/version-2.6.x/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/HTTPS & TLS.md",sourceDirName:"WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027",slug:"/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/HTTPS & TLS",permalink:"/docs/2.6.x/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/HTTPS & TLS",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.6.x/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/HTTPS & TLS.md",tags:[],version:"2.6.x",lastUpdatedBy:"John",lastUpdatedAt:173036553e4,sidebarPosition:2,frontMatter:{title:"HTTPS & TLS",sidebar_position:2,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"\u670d\u52a1\u65e5\u5fd7\u7ba1\u7406",permalink:"/docs/2.6.x/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/\u670d\u52a1\u65e5\u5fd7\u7ba1\u7406"},next:{title:"\u5e73\u6ed1\u91cd\u542f\u7279\u6027",permalink:"/docs/2.6.x/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/\u5e73\u6ed1\u91cd\u542f\u7279\u6027"}},i={},d=[{value:"HTTPS\u670d\u52a1",id:"https\u670d\u52a1",level:2},{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:3},{value:"<code>HTTPS</code> \u4e0e <code>HTTP</code> \u652f\u6301",id:"https-\u4e0e-http-\u652f\u6301",level:2},{value:"\u4f7f\u7528 <code>Let\u2019s Encrypt</code> \u514d\u8d39\u8bc1\u4e66",id:"\u4f7f\u7528-lets-encrypt-\u514d\u8d39\u8bc1\u4e66",level:2},{value:"\u5b89\u88c5 <code>Certbot</code>",id:"\u5b89\u88c5-certbot",level:3},{value:"\u7533\u8bf7\u8bc1\u4e66",id:"\u7533\u8bf7\u8bc1\u4e66",level:3},{value:"\u4f7f\u7528\u8bc1\u4e66",id:"\u4f7f\u7528\u8bc1\u4e66",level:3},{value:"\u8bc1\u4e66\u7eed\u671f",id:"\u8bc1\u4e66\u7eed\u671f",level:3}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"https\u670d\u52a1",children:"HTTPS\u670d\u52a1"}),"\n",(0,t.jsxs)(n.p,{children:["\u5efa\u7acb ",(0,t.jsx)(n.code,{children:"HTTPS"})," \u670d\u52a1\u975e\u5e38\u7b80\u5355\uff0c\u4f7f\u7528\u6846\u67b6WebServer\u63d0\u4f9b\u7684 ",(0,t.jsx)(n.code,{children:"EnableHTTPS(certFile, keyFile string) error"})," \u65b9\u6cd5\u5373\u53ef\u3002\u5f88\u663e\u7136\uff0c\u8be5\u65b9\u6cd5\u4e2d\u9700\u8981\u63d0\u4f9b\u4e24\u4e2a\u53c2\u6570\uff0c\u5373\u4e24\u4e2a\u7528\u4e8e ",(0,t.jsx)(n.code,{children:"HTTPS"})," \u975e\u5bf9\u79f0\u52a0\u5bc6\u7684\u8bc1\u4e66\u6587\u4ef6\u4ee5\u53ca\u5bf9\u5e94\u7684\u79d8\u94a5\u6587\u4ef6\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u51c6\u5907\u5de5\u4f5c",children:"\u51c6\u5907\u5de5\u4f5c"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u672c\u5730\u6f14\u793a\u7684\u9700\u8981\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"openssl"})," \u547d\u4ee4\u751f\u6210\u672c\u5730\u7528\u4e8e\u6d4b\u8bd5\u7684\u8bc1\u4e66\u548c\u5bf9\u5e94\u7684\u79d8\u94a5\u6587\u4ef6\u3002\u547d\u4ee4\u5982\u4e0b\uff1a"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u4f7f\u7528\u5e38\u7528\u7684 ",(0,t.jsx)(n.code,{children:"RSA"})," \u7b97\u6cd5\u751f\u6210\u79d8\u94a5\u6587\u4ef6"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"openssl genrsa -out server.key 2048\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u6b64\u5916\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"ECDSA"})," \u7b97\u6cd5\u6765\u751f\u6210\u79d8\u94a5\u6587\u4ef6\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"openssl ecparam -genkey -name secp384r1 -out server.key\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"\u6839\u636e\u79d8\u94a5\u6587\u4ef6\u751f\u6210\u8bc1\u4e66\u6587\u4ef6"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"openssl req -new -x509 -key server.key -out server.crt -days 365\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"(\u53ef\u9009)\u6839\u636e\u79d8\u94a5\u751f\u6210\u516c\u94a5\u6587\u4ef6\uff0c\u8be5\u6587\u4ef6\u7528\u4e8e\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u7aef\u901a\u4fe1"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"openssl rsa -in server.key -out server.key.public\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"openssl"})," \u652f\u6301\u7684\u7b97\u6cd5\u4ee5\u53ca\u547d\u4ee4\u53c2\u6570\u6bd4\u8f83\u591a\uff0c\u5982\u679c\u60f3\u8981\u6df1\u5165\u4e86\u89e3\u8bf7\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"man openssl"})," \u547d\u4ee4\u8fdb\u884c\u67e5\u770b\u3002\u672c\u6b21\u793a\u4f8b\u4e2d\uff0c\u672c\u5730\u73af\u5883( ",(0,t.jsx)(n.code,{children:"Ubuntu"}),")\u4f7f\u7528\u547d\u4ee4\u751f\u6210\u76f8\u5173\u79d8\u94a5\u3001\u516c\u94a5\u3001\u8bc1\u4e66\u6587\u4ef6\u7684\u6d41\u7a0b\u5982\u4e0b\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ openssl genrsa -out server.key 2048\nGenerating RSA private key, 2048 bit long modulus\n.........................+++\n.....................................................................+++\nunable to write 'random state'\ne is 65537 (0x10001)\n\n$ openssl req -new -x509 -key server.key -out server.crt -days 365\nYou are about to be asked to enter information that will be incorporated\ninto your certificate request.\nWhat you are about to enter is what is called a Distinguished Name or a DN.\nThere are quite a few fields but you can leave some blank\nFor some fields there will be a default value,\nIf you enter '.', the field will be left blank.\n-----\nCountry Name (2 letter code) [AU]:CH\nState or Province Name (full name) [Some-State]:SiChuan\nLocality Name (eg, city) []:Chengdu\nOrganization Name (eg, company) [Internet Widgits Pty Ltd]:John.cn\nOrganizational Unit Name (eg, section) []:Dev\nCommon Name (e.g. server FQDN or YOUR name) []:John\nEmail Address []:john@johng.cn\n\n$ openssl rsa -in server.key -out server.key.public\nwriting RSA key\n\n$ ll\ntotal 20\ndrwxrwxr-x  2 john john 4096 Apr 23 21:26 ./\ndrwxr-xr-x 90 john john 4096 Apr 23 20:55 ../\n-rw-rw-r--  1 john john 1383 Apr 23 21:26 server.crt\n-rw-rw-r--  1 john john 1675 Apr 23 21:25 server.key\n-rw-rw-r--  1 john john 1675 Apr 23 21:26 server.key.public\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5176\u4e2d\uff0c\u751f\u6210\u8bc1\u4e66\u7684\u547d\u4ee4\u63d0\u793a\u9700\u8981\u5f55\u5165\u4e00\u4e9b\u4fe1\u606f\uff0c\u53ef\u4ee5\u76f4\u63a5\u56de\u8f66\u7559\u7a7a\u5373\u53ef\uff0c\u6211\u4eec\u8fd9\u91cc\u968f\u4fbf\u586b\u5199\u4e86\u4e00\u4e9b\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"\u793a\u4f8b\u4ee3\u7801",children:"\u793a\u4f8b\u4ee3\u7801"}),"\n",(0,t.jsxs)(n.p,{children:["\u6839\u636e\u4ee5\u4e0a\u751f\u6210\u7684\u79d8\u94a5\u548c\u8bc1\u4e66\u6587\u4ef6\uff0c\u6211\u4eec\u6765\u6f14\u793a\u5982\u679c\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"ghttp.Server"})," \u5b9e\u73b0\u4e00\u4e2aHTTPS\u670d\u52a1\u3002\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := ghttp.GetServer()\n    s.BindHandler("/", func(r *ghttp.Request){\n        r.Response.Writeln("\u6765\u81ea\u4e8eHTTPS\u7684\uff1a\u54c8\u55bd\u4e16\u754c\uff01")\n    })\n    s.EnableHTTPS("/home/john/https/server.crt", "/home/john/https/server.key")\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u6211\u4eec\u76f4\u63a5\u5c06\u4e4b\u524d\u751f\u6210\u7684\u8bc1\u4e66\u548c\u79d8\u94a5\u6587\u4ef6\u5730\u5740\u4f20\u9012\u7ed9 ",(0,t.jsx)(n.code,{children:"EnableHTTPS"})," \u5373\u53ef\uff0c\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"s.SetPort(8199)"})," \u8bbe\u7f6eHTTPS\u7684\u670d\u52a1\u7aef\u53e3\uff0c\u5f53\u7136\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"s.SetHTTPSPort(8199)"})," \u6765\u5b9e\u73b0\uff0c\u5728\u5355\u4e00\u670d\u52a1\u4e0b\u4e24\u8005\u6ca1\u6709\u533a\u522b\uff0c\u5f53 ",(0,t.jsx)(n.code,{children:"WebServer"})," \u9700\u8981\u540c\u65f6\u652f\u6301 ",(0,t.jsx)(n.code,{children:"HTTP"})," \u548c ",(0,t.jsx)(n.code,{children:"HTTPS"})," \u670d\u52a1\u7684\u65f6\u5019\uff0c\u4e24\u8005\u7684\u4f5c\u7528\u5c31\u4e0d\u540c\u4e86\uff0c\u8fd9\u4e2a\u7279\u6027\u6211\u4eec\u4f1a\u5728\u540e\u9762\u4ecb\u7ecd\u3002\u968f\u540e\u6211\u4eec\u8bbf\u95ee\u9875\u9762 ",(0,t.jsx)(n.a,{href:"https://127.0.0.1:8199/",children:"https://127.0.0.1:8199/"})," \u6765\u770b\u4e00\u4e0b\u6548\u679c\uff1a"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(31660).A+"",width:"728",height:"533"})}),"\n",(0,t.jsx)(n.p,{children:"\u53ef\u4ee5\u770b\u5230\u6d4f\u89c8\u5668\u6709\u63d0\u793a\u4fe1\u606f\uff0c\u4e3b\u8981\u662f\u56e0\u4e3a\u6211\u4eec\u751f\u6210\u7684\u8bc1\u4e66\u4e3a\u79c1\u6709\u7684\uff0c\u975e\u7b2c\u4e09\u65b9\u6388\u4fe1\u4f01\u4e1a\u63d0\u4f9b\u7684\u3002\u6d4f\u89c8\u5668\u5927\u591a\u4f1a\u81ea\u5e26\u4e00\u4e9b\u7b2c\u4e09\u65b9\u6388\u4fe1\u7684HTTPS\u8bc1\u4e66\u673a\u6784\uff0c\u8fd9\u4e9b\u673a\u6784\u63d0\u4f9b\u7684HTTPS\u8bc1\u4e66\u88ab\u6d4f\u89c8\u5668\u8ba4\u4e3a\u662f\u6743\u5a01\u7684\u3001\u53ef\u4fe1\u7684\uff0c\u624d\u4e0d\u4f1a\u51fa\u73b0\u8be5\u63d0\u793a\u4fe1\u606f\u3002\u4e00\u822c\u8fd9\u79cd\u7b2c\u4e09\u65b9\u6743\u5a01\u673a\u6784\u6388\u4fe1\u8bc1\u4e66\u4ef7\u683c\u5728\u6bcf\u5e74\u51e0\u5343\u5230\u51e0\u4e07\u4eba\u6c11\u5e01\u4e0d\u7b49\uff0c\u611f\u5174\u8da3\u7684\u670b\u53cb\u53ef\u5728\u641c\u7d22\u5f15\u64ce\u4e0a\u4e86\u89e3\u4e0b\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(81876).A+"",width:"732",height:"699"})}),"\n",(0,t.jsxs)(n.p,{children:["\u6211\u4eec\u8fd9\u91cc\u76f4\u63a5\u70b9\u51fb ",(0,t.jsx)(n.code,{children:"Advanced"}),"\uff0c\u7136\u540e\u70b9\u51fb ",(0,t.jsx)(n.code,{children:"Proceed to 127.0.0.1 (unsafe)"}),"\uff0c\u6700\u7ec8\u53ef\u4ee5\u770b\u5230\u9875\u9762\u8f93\u51fa\u9884\u671f\u7684\u7ed3\u679c\uff1a"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(5707).A+"",width:"729",height:"79"})}),"\n",(0,t.jsxs)(n.h2,{id:"https-\u4e0e-http-\u652f\u6301",children:[(0,t.jsx)(n.code,{children:"HTTPS"})," \u4e0e ",(0,t.jsx)(n.code,{children:"HTTP"})," \u652f\u6301"]}),"\n",(0,t.jsxs)(n.p,{children:["\u6211\u4eec\u7ecf\u5e38\u4f1a\u9047\u5230\u9700\u8981\u901a\u8fc7HTTP\u548cHTTPS\u6765\u63d0\u4f9b\u540c\u4e00\u4e2a\u670d\u52a1\u7684\u60c5\u51b5\uff0c\u5373\u9664\u4e86\u7aef\u53e3\u548c\u8bbf\u95ee\u534f\u8bae\u4e0d\u4e00\u6837\uff0c\u5176\u4ed6\u90fd\u662f\u76f8\u540c\u7684\u3002\u5982\u679c\u6309\u7167\u4f20\u7edf\u7684\u4f7f\u7528\u591a ",(0,t.jsx)(n.code,{children:"WebServer"})," \u7684\u65b9\u5f0f\u6765\u8fd0\u884c\u7684\u8bdd\u4f1a\u6bd4\u8f83\u7e41\u7410\uff0c\u4e3a\u8f7b\u677e\u5730\u89e3\u51b3\u5f00\u53d1\u8005\u7684\u70e6\u607c\uff0c ",(0,t.jsx)(n.code,{children:"ghttp"})," \u63d0\u4f9b\u4e86\u975e\u5e38\u65b9\u4fbf\u7684\u7279\u6027\uff1a\u652f\u6301 \u201c\u540c\u4e00\u4e2a\u201d ",(0,t.jsx)(n.code,{children:"WebServer"})," \u540c\u65f6\u652f\u6301 ",(0,t.jsx)(n.code,{children:"HTTPS"})," \u53ca ",(0,t.jsx)(n.code,{children:"HTTP"})," \u8bbf\u95ee\u534f\u8bae\u3002\u6211\u4eec\u5148\u6765\u770b\u4e00\u4e2a\u4f8b\u5b50\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := ghttp.GetServer()\n    s.BindHandler("/", func(r *ghttp.Request){\n        r.Response.Writeln("\u60a8\u53ef\u4ee5\u540c\u65f6\u901a\u8fc7HTTP\u548cHTTPS\u65b9\u5f0f\u770b\u5230\u8be5\u5185\u5bb9\uff01")\n    })\n    s.EnableHTTPS("/home/john/https/server.crt", "/home/john/https/server.key")\n    s.SetHTTPSPort(443)\n    s.SetPort(80)\n    s.Run()\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u6267\u884c\u540e\uff0c\u901a\u8fc7\u672c\u5730\u6d4f\u89c8\u5668\u8bbf\u95ee\u8fd9\u4e24\u4e2a\u5730\u5740 ",(0,t.jsx)(n.a,{href:"http://127.0.0.1/",children:"http://127.0.0.1/"})," \u548c\xa0",(0,t.jsx)(n.a,{href:"https://127.0.0.1/",children:"https://127.0.0.1/"})," \u90fd\u4f1a\u770b\u5230\u540c\u6837\u7684\u5185\u5bb9\uff08\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u7531\u4e8e\u90e8\u5206\u7cfb\u7edf\u5bf9\u4e8e\u6743\u9650\u7684\u9650\u5236\uff0cWebServer\u7ed1\u5b9a ",(0,t.jsx)(n.code,{children:"80"})," \u548c ",(0,t.jsx)(n.code,{children:"443"})," \u7aef\u53e3\u9700\u8981 ",(0,t.jsx)(n.code,{children:"root/\u7ba1\u7406\u5458"})," \u6743\u9650\uff0c\u5982\u679c\u542f\u52a8\u62a5\u9519\uff0c\u53ef\u4ee5\u66f4\u6539\u7aef\u53e3\u53f7\u540e\u91cd\u65b0\u6267\u884c\u5373\u53ef\uff09\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u672c\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528\u4e86\u4e24\u4e2a\u65b9\u6cd5\u6765\u5f00\u542fHTTPS\u7279\u6027\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func (s *Server) EnableHTTPS(certFile, keyFile string) error\nfunc (s *Server) SetHTTPSPort(port ...int) error\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u4e00\u4e2a\u662f\u6dfb\u52a0\u8bc1\u4e66\u53ca\u5bc6\u94a5\u6587\u4ef6\uff0c\u4e00\u4e2a\u662f\u8bbe\u7f6eHTTPS\u534f\u8bae\u7684\u76d1\u542c\u7aef\u53e3\uff0c\u4e00\u65e6\u8fd9\u4e24\u4e2a\u5c5e\u6027\u88ab\u8bbe\u7f6e\u4e86\uff0c\u90a3\u4e48WebServer\u5c31\u4f1a\u542f\u7528HTTPS\u7279\u6027\u3002\u5e76\u4e14\uff0c\u5728\u793a\u4f8b\u4e2d\u4e5f\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"SetPort"})," \u65b9\u6cd5\u6765\u8bbe\u7f6e\u4e86HTTP\u670d\u52a1\u7684\u76d1\u542c\u7aef\u53e3\uff0c\u56e0\u6b64\u8be5WebServer\u5c06\u4f1a\u540c\u65f6\u76d1\u542c\u6307\u5b9a\u7684HTTPS\u548cHTTP\u670d\u52a1\u7aef\u53e3\u3002"]}),"\n",(0,t.jsxs)(n.h2,{id:"\u4f7f\u7528-lets-encrypt-\u514d\u8d39\u8bc1\u4e66",children:["\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"Let\u2019s Encrypt"})," \u514d\u8d39\u8bc1\u4e66"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"SSL\u514d\u8d39\u8bc1\u4e66"})," \u673a\u6784\u6bd4\u8f83\u591a\uff0c\u5982\uff1a"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"\u817e\u8baf\u4e91DV SSL \u8bc1\u4e66"}),": ",(0,t.jsx)(n.a,{href:"https://cloud.tencent.com/product/ssl",children:"https://cloud.tencent.com/product/ssl"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Let\u2019s Encrypt"}),": ",(0,t.jsx)(n.a,{href:"https://letsencrypt.org/",children:"https://letsencrypt.org/"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"CloudFlare SSL"}),": ",(0,t.jsx)(n.a,{href:"https://www.cloudflare.com/",children:"https://www.cloudflare.com/"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"StartSSL"}),": ",(0,t.jsx)(n.a,{href:"https://www.startcomca.com/",children:"https://www.startcomca.com/"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Wosign\u6c83\u901aSSL"}),": ",(0,t.jsx)(n.a,{href:"https://www.wosign.com/",children:"https://www.wosign.com/"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"             loovit.net AlphaSSL"}),": ",(0,t.jsx)(n.a,{href:"https://www.lowendtalk.com/entry/register?Target=discussion%2Fcomment%2F2306096",children:"https://www.lowendtalk.com/entry/register?Target=discussion%2Fcomment%2F2306096"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4ee5\u4e0b\u4ee5 ",(0,t.jsx)(n.code,{children:"Let's Encrypt"})," \u4e3a\u4f8b\uff0c\u4ecb\u7ecd\u5982\u4f55\u7533\u8bf7\u3001\u4f7f\u7528\u3001\u7eed\u671f\u514d\u8d39\u8bc1\u4e66\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Let\u2019s Encrypt"})," \u5b98\u7f51\u5730\u5740\uff1a ",(0,t.jsx)(n.a,{href:"https://letsencrypt.org/",children:"https://letsencrypt.org/"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u4ee5\u4e0b\u4ee5 ",(0,t.jsx)(n.code,{children:"Ubuntu"})," \u7cfb\u7edf\u4e3a\u4f8b\uff0c\u5982\u4f55\u7533\u8bf7 ",(0,t.jsx)(n.code,{children:"Let's Encrypt"})," \u514d\u8d39\u8bc1\u4e66\u53ca\u5728 ",(0,t.jsx)(n.code,{children:"GoFrame"})," \u6846\u67b6\u4e0b\u5bf9\u8bc1\u4e66\u7684\u4f7f\u7528\u3002"]}),"\n",(0,t.jsxs)(n.h3,{id:"\u5b89\u88c5-certbot",children:["\u5b89\u88c5 ",(0,t.jsx)(n.code,{children:"Certbot"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Certbot"})," \u5b98\u7f51\u5730\u5740\uff1a ",(0,t.jsx)(n.a,{href:"https://certbot.eff.org/",children:"https://certbot.eff.org/"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u7533\u8bf7 ",(0,t.jsx)(n.code,{children:"Let\u2019s Encrypt"})," \u514d\u8d39\u8bc1\u4e66\u9700\u8981\u4f7f\u7528\u5230 ",(0,t.jsx)(n.code,{children:"certbot"})," \u5de5\u5177\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo apt-get update\nsudo apt-get install software-properties-common\nsudo add-apt-repository ppa:certbot/certbot\nsudo apt-get update\nsudo apt-get install certbot\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u7533\u8bf7\u8bc1\u4e66",children:"\u7533\u8bf7\u8bc1\u4e66"}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"certbot certonly --standalone -d \u7533\u8bf7\u57df\u540d --staple-ocsp -m \u90ae\u7bb1\u5730\u5740 --agree-tos\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4f8b\u5982\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'root@ip-172-31-41-204:~# certbot certonly --standalone -d goframe.org --staple-ocsp -m john@goframe.org --agree-tos\nSaving debug log to /var/log/letsencrypt/letsencrypt.log\nPlugins selected: Authenticator standalone, Installer None\nStarting new HTTPS connection (1): acme-v02.api.letsencrypt.org\nObtaining a new certificate\nPerforming the following challenges:\nhttp-01 challenge for goframe.org\nWaiting for verification...\nCleaning up challenges\n\nIMPORTANT NOTES:\n - Congratulations! Your certificate and chain have been saved at:\n   /etc/letsencrypt/live/goframe.org/fullchain.pem\n   Your key file has been saved at:\n   /etc/letsencrypt/live/goframe.org/privkey.pem\n   Your cert will expire on 2019-01-25. To obtain a new or tweaked\n   version of this certificate in the future, simply run certbot\n   again. To non-interactively renew *all* of your certificates, run\n   "certbot renew"\n - If you like Certbot, please consider supporting our work by:\n\n   Donating to ISRG / Let\'s Encrypt:   https://letsencrypt.org/donate\n   Donating to EFF:                    https://eff.org/donate-le\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8bc1\u4e66\u4f1a\u88ab\u5b89\u88c5\u5230 ",(0,t.jsx)(n.code,{children:"/etc/letsencrypt/"}),"\uff0c\u8bc1\u4e66\u548c\u79c1\u94a5\u6587\u4ef6\u5206\u522b\u4e3a\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"/etc/letsencrypt/live/goframe.org/fullchain.pem\n/etc/letsencrypt/live/goframe.org/privkey.pem\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u4f7f\u7528\u8bc1\u4e66",children:"\u4f7f\u7528\u8bc1\u4e66"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := ghttp.GetServer()\n    s.BindHandler("/", func(r *ghttp.Request){\n        r.Response.Writeln("\u6765\u81ea\u4e8eHTTPS\u7684\uff1a\u54c8\u55bd\u4e16\u754c\uff01")\n    })\n    s.EnableHTTPS("/etc/letsencrypt/live/goframe.org/fullchain.pem", "/etc/letsencrypt/live/goframe.org/privkey.pem")\n    s.Run()\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u8bc1\u4e66\u7eed\u671f",children:"\u8bc1\u4e66\u7eed\u671f"}),"\n",(0,t.jsxs)(n.p,{children:["\u8bc1\u4e66\u9ed8\u8ba4\u6709\u6548\u671f\u4e3a ",(0,t.jsx)(n.code,{children:"3\u4e2a\u6708"}),"\uff0c\u5230\u671f\u540e\u9700\u8981\u624b\u52a8\u7eed\u671f\uff0c\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"certbot renew\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u793a\u4f8b1\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"crontab"})," \u5b9a\u65f6\u4efb\u52a1\u6765\u5b9e\u73b0\u81ea\u52a8\u7eed\u671f\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'# \u6bcf\u5929\u5c1d\u8bd5\u7eed\u671f\u4e00\u6b21\uff0c\u6210\u529f\u540e\u91cd\u542f`GoFrame`\u6846\u67b6\u8fd0\u884c\u7684WebServer\n0 3 * * * certbot renew --quiet --renew-hook "kill -SIGUSR1 $(pidof \u8fdb\u7a0b\u540d\u79f0)"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u793a\u4f8b2\uff0c\u5982\u679c\u6211\u4eec\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"nginx"})," \u7ba1\u7406\u8bc1\u4e66\uff0c\u90a3\u4e48\u6211\u4eec\u53ef\u4ee5\u8fd9\u6837\u6765\u8bbe\u7f6e\u5b9a\u65f6\u4efb\u52a1\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'# \u6bcf\u5929\u5c1d\u8bd5\u7eed\u671f\u4e00\u6b21\uff0c\u8bc1\u4e66\u7eed\u671f\u9700\u8981\u5148\u5173\u95ed80\u7aef\u53e3\u7684WebServer\u76d1\u542c\n0 3 * * * service nginx stop && certbot renew --quiet --renew-hook "service nginx start"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u4e3a\u4e86\u9632\u6b62 ",(0,t.jsx)(n.code,{children:"certbot renew"})," \u547d\u4ee4\u53ef\u80fd\u7684\u5931\u8d25\u5bfc\u81f4 ",(0,t.jsx)(n.code,{children:"nginx"})," \u65e0\u6cd5\u91cd\u65b0\u542f\u52a8\uff0c\u4e3a\u4fdd\u8bc1\u7a33\u5b9a\u6027\uff0c\u53ef\u4ee5\u8fd9\u6837\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'# \u6bcf\u5929\u5c1d\u8bd5\u7eed\u671f\u4e00\u6b21\uff0c\u8bc1\u4e66\u7eed\u671f\u9700\u8981\u5148\u5173\u95ed80\u7aef\u53e3\u7684WebServer\u76d1\u542c\n0 3 * * * service nginx stop && certbot renew --quiet --renew-hook "service nginx start"\n5 3 * * * service nginx start\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},31660:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/059756bd98935e7ca098667d36730f71-d2ad2a10a3ae3705bfecb3f5655ad95f.png"},5707:(e,n,r)=>{r.d(n,{A:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtkAAABPCAMAAAAJMynbAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAD87++zy0oxdKlsljmiAADW1tZaWlrHys21tbWtra26SUU6OjqUlJTm5ubIy8aMrlWZmZlzc3NplLcpKSmduEm6u7h2y/CtICDe3t4hISHv7+9mZmbIa2tOkL0dY53DxMDG2llra2unEBBqsdjf7JTgra2lpaXUjY1KSkoQEBCuvJ2RrG7AVFRDhbe4DwCfpquMjIxJktrI22S2zF1/f4DU1NH39/fKS0ad1+9znEE7g8vJ23ixLCySoq+dulfbnp6Av+SGpb5SUlLjtrZLfaYzMzPv2Ni901Hszc3///9Kk9cHBwekt4vOenpVlt65ubp7e3t9o0qtsrbZm5vaFACrGRmt3O/DXFwZGRlCQkJrte6yynS3OjpopM68xLOqw0JDi9zT43bpS0Tlvb2Xy+OiDABkpNSfu8vFxcVbpuuYq4Fdl77PEwA7fb++x82OpXJ4p8VCg8BvmTzV5mR+olGLm6iLy/L16emas8TLcnInaJ696PabsX/X5YpPjdCFyPE7e66g2fSuxVdpyeysDgCkvkK2UEy7z2HC11Xht7ZdoOFKhL3L3lzl8Jy2wKnaS0SSrcHDEQDFY2OEhIR2nEnD13xKkce4Pz+tvMeLqL6Xt13+9/eNx+L37+/2uLbRhYU9jOPoxcVroMLXlZVRk9fMzMyowmt4s9W2wspxmj1Ek+fpUkuwyEiE0/Bam8XLy8fx3d0ub6bT4oTB1WOkv07O3oKhr7qzMDDdpqZIjte9vb29TExTmeV1qsmHsMo7gsaDpFqk2PR6xu+NqmhNnOlAfK1Umca+03DFycyEhIzM3mywJyei1eqlCQm4v8WR2PFXmMq9xb3W52hIjduEwuKL1fDg7Y2pt5hKjMG8GgTSHAC0v6ZXoeGEqEh7n0s1eK7O3n2owl1SfqPiFgCftISit8YrbaVzve69UEyQyOfuU0zv7/erw1TQ4mF7oERSpuq1vbVHkuVTk76r4PRzt+5arexRlsOOqr+k3fSUsMRsq898qsenvMqzy2aGo2E6S2OCAAAACXBIWXMAAAsSAAALEgHS3X78AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M0BrLToAAADPlJREFUeJztnQ14G2UdwIusd94td9mVs+7uCsSONU2E4im5g4GCZET7GmdCNS7FIbiJRPkQfBQoKAxFEBWRBRkYAYFFB8hShDm8iSIU8BHLZDJ5UHAIfkweHQ8gOAH1fe/70iRrSkN5zv/vad+899lL87s3//d/yXtdVQAII10d3btGAUDHmDuzKZZTAaBDsC3V7qTZ1EhcRwDQGfQa00rterPfennTVXtLrTQ+tYHZIDbQQfR4G2a//+h5TVdlemMtdrThxAZmz/VzB0JNG2bvv2BxC7M1w2i+o/u+f+cvwGzgtWTaZkfv+vbiS1qZrcWaqH3lT+988ZyPb3gFzAY6ClsWfBHudM2OffZ7i7e2NluL9TZYcOKGl77zqw+fs2vXsS+/sYnZVFxNqXGqvacxsHztLP1DgHAg5Xmu6k16Zmt+6s1+6A8fWbx16yVLbnRwhHYhW0V7a/Viv3zsIc9v2bbtli9t2XLf9Y3NpjiNVxSN89QeKzi1Vdd6pcf4ETu6MeP2pKJKZsGn0qIskTmlnlExkudxrU82STub8j0Zkfb+UnDS24H9v2I5zjzjFCPOqYo7j1GCNeD1QE5Ahi8QcM3WygkPTgua/Y0l3/rtVmy2i9N4M4GTQav1RuvEfun5W7Y9f8i287c9fN9pwTabdQ5B0KRUKiVpgntQntnLFnmlzfCyTUTrdy4bduZUhUqlgotSpo+2xKQTHFsWI1i7GjnrOFm1V9UTmTiTyPCNJ70dmPBYa4pVsdqSwLKW2WSeJgi6rju1V/FaALMJF0N82Xs53IS2lqB9BM1+ZOfGjf/ws9gzu66NDmb/Xtmw6827Hn7xuaEt++3z5+CKEuscQllKYWniUtk9qOZmDyxfSLTefMQ48mBzToEES0yzFWZl5wxWXV1ZuYTtFMuNJ70dmMRMmQXrQKuW2SxHpFaj/hrwekAh79Gq5k6zkmO20O/BBsz+/NEbP/b1AF/wzK7VEcj+nfS3u89/6aT11aEXr69PaXtmp6gUuubpCp9ClaevMeeMFYbXTi4cRGhvonHBKtGaRStIZeHygfEDCpOFzVfb2+ucZBdBMXmZs2sR2pnXFyElPdp4sm4HhkpagLh1oLbZ3Ii5VtxfA+YYRi1jyCtRKqu4bl4qcc2uSryH3ZBbZu//+MZfviWIZ3a13uyaL/t36j4/v/vdz+HK0L+r9QTNvvmplZV4ZeVTN5tzxiYfGBxY3r0Unbn3ovHxcVIuHbNikM2TNyC0adPAdQNrzsSxdQyROB03nrggW/rFZGTGqsTcxhuNmo6XZb3hpLcDc888l1OUqGrt0THb3KfA+WvA3MKn6kLCFHnJPLOb9SDvWfDEO75Sxw9bmO1T+6xjzztjA4lC1k8R2zVbj5OL/JWVH1q5B/6tmPPGsNQILVzuxCEHTJoxSPcYjkH2LlQq3R+0trXMZhinCJitRBL2E+4R3X5epp+UnMw3nERBsxEvqKrTsbXNjsdxTK9wqq67tRm/IsDsoKSqgWkqHzC7aQ/yngWH3fbeOp7wzI5OwTP7qv3+esaQe4lmNeaqKWYrqoThK5ee/LuTL7XExm02qexYS8y28yA4BhnrJnMHut+DNi0cdLuPOA7R7AL5zdbpjF1VxB535emabcJzLCUxttq22ZpqKAqrYrPd2sxeDmD2oMpxX44qlyqRB8/spj3IP+28/7Y3BDmshdm+QPvITxxz3monI7J+6IUXrvCiEs9sa3KPRy+7bA/72Kwe5AEr0PBas60uTBKRx8z2e1X3KjS+ptBdGLRXlrBlumQL5oqp06LTmYjLMfdZTzcaMWHNxAdr5Wxss1GJw28xLBeoAXOMEledl00ROKudmk4P8pGd/7koaPb9rtm1Uh3+5Mg3f33MP4ecSOS0K555ZujKqWaXyelAVQ4+8NEDD3babNPsFQUnD2LFJGPdpM94B26zMcNj3XdYK+dYp0CemHqfWHOeNh2puP+CtnqQVlYkZp00jtlI5xV7iVcD5pqqk+/jWLsyjR5ktfr7JX+86Ad+PLOjMT/RWCDrt37omE9esZdVv3L7YxOPrfaWeWbj7bTK5gvmXz3/gvl2nF1wYpBNk2T6WrMcM8PrzQXb08ll1qNQdQrkionFLjnPWXKT2ajNrF/carM58w+6ZiMSkkhTasCc4mayy851t933IAkfXXL4Qccdd9xFLp7ZLqbadRchV3914rHt/yK1s7a/b2Lia0c2MDuVy+X4HSfMr1CV+SfsILOGzexe96LCMI6qB69zyrHJwuDSNd03oPEVg0txZZXZz+OJcbylHcP0yHEmivuMct68LkpmOsnsmMySSzMR+9JMo0lvB2YPklJZimKs/At+rFJ4PT6Hn7RKcudeDZh7GNau5JwLfrvvQZo8dPkCrPZBn3FY4pjtUsJeG/VX168amrjppu2r99rr3u1vn5hYd69vkTRiHYBCHKxdfGGlasQrF15MZtkxCI6zUWXNou6CXY4VrlsxScLrq9c8MLloxYDlX4xk9MwC6daV9D6EElYtT+ZG7Cvrhuku3y9al9MbTXo7sHIj5tV1rYKxv6eBF5BZ5huEVwPmnjJuvgzSkVRSdjpgZPc9SJPoXY///ctfnFeb8sEQR3HSYE/9RNS9P7vpu88ef+ihP/7Js8+u2/PBhmYbGE3RjFrefr9fu3yg0cF7Vyb9CCWnAP5/odSKEi8bqsojlrVmjUyjB1nFHcNY73933n77PCxhDE8F9SVJbIaIXZsi/oN7nvKb400+cPqtP/Jv6Jqt9jiorT9e1NhsAMDNNSupgoJ0plzT7GzVyDR6kFhlw2CYTy950zyGyRnGFLXxGkys1zBzI8H5xshRfznl3HXrzj391qPexjCGt1yyLxAqkvvREwnMBmaGoqpWalfiVDtCZKRqc/xtNm6tP3VjizabiUVrU9vsmJF715Nn77vv2U9+jsVix7yPAjpm64oHXPQAZo1pme34/cjlTePsFt/wLZXMtEnd+eCYDQAdoQ2zZxeJgRYa6Bz63Jld4kFtoFPouehcma1J0RwDAB0iKtV/Kea1MhurzQNAp2gpdodHrASAuQLMBsIJmA2Eky4WAMJI11znbgCgI4DZQDgBs4FwAmYD4QTMBsIJmA2EEzAbCCdgNhBOwGwgnIDZQDgJmJ2o+CZe3chI5lcOmn+dl3H/EotUTTEH/YnyqG8EoQzfdCsAmDYBs5O+ej5hV1KyKIpZ/FusoenTT4a4yTTbguoi+rL9fZSe4eiYuTJK5BCNzbZGTaVH6USRpmX4KiUwMxyzzeGjsqRI4Sldj4u8jrGX8rL1KHXh1pXNomyXCeM8GriQe3Sk9xezIhkMQimSOyYVvT049NBpDZ82o2RU4JSRMpAUpznRXCthIBqLbI2ETRtIw+dWn2O2UoQ7DwDt4LbZSkLHbbZ1JxklmbZI2gvrzcbGZllsrfNodOl6LFlG/RFJr8XJAKhyelRhMzRdrBs8LKNgZ/miMlq1zM73Fbu66L4+xNJygpZHaTpJ030N2uwutqP/ByBseNFIugebTVtmi/a8ov1YbzYmy1qzzEdsNrnbFxLtsQRJrCwqEdxuJ2yz8/YA18RsPVJGkli12mwhk+5J4615ajROpQWKkksUNbXNRkljtp86EGo8s/l+lGRHzZ6dkrWHtUxi4UmYLZM4W5S5VmZLxR7UJ8bNKNk0O5/wmZ20xwHGZrOjooKbeJkjZuOohzbiGTLeaToQjYzSmUCbLXu3lAKA3WObzRKP5a4ieYi3arOTBFKtM7tYzNIK0tVMNhOzzRbViGe2AzZbTKg0TfcoEjZbwGtWFaSRG9MFzFY1NlnkkHfHVkiZAG3hy41QcjZiNYwtzI7xvNCozXYH7FNSSQVlEjhGV1BCbWS2gaJkdEDdjEaqmiCS0byVOrM1OqPx6Uzc9TkBQ5cA7eCZrYhMkrJaRn80YjKtONvZT5dmx9mIz081Oy0bKCkIQsaKszkuqZIfzTJbjESyeNsRWRZEHiWEfCZp59XLCADawDVbEjncg8yJxMSZ9SAxZUNR8kndMRt50YhqD3+dwWG1uds0NpuOGIiT2bJ1YzBsdhlHMjS57QD+M6KO0r58uAD31ADawTGbI/niJEI1GZuliLpFu2ZzYjY5WkI+s0ftjl/WbnMZnVIcs0t8iSenVLbHfKdIB7If1Yi5jnegkM8G2sE2WzUj7CT+1VkscjaYz5aYTHt7Fa04G0my2Cg8ztJuopsXMv1KuUgyJ/mIg0rug4eXJ+A+B8BMCVxdd28XWqcjLbfZYLrbN05oeLunizSxl59yMxiBfJQEIhBgxsBn/YBwAmYD4QTMBsIJmA2EEzAbCCdgNhBOwGwgnIDZQDgBs4FwAmYD4QTMBsIJmA2EEzAbCCdgNhBOwGwgnIDZQDgBs4FwAmYD4QTMBsIJmA2EEzAbCCdgNhBO/gcrE0wqoCoaVgAAAABJRU5ErkJggg=="},81876:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/4f42cdf83d94d2d4589241f4adc5ba5f-c5fed081f8357feb61290c444a692f54.png"},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>l});var t=r(96540);const s={},c=t.createContext(s);function o(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);