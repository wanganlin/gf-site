"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[43552],{91401:(e,d,c)=>{c.r(d),c.d(d,{assets:()=>h,contentTitle:()=>r,default:()=>x,frontMatter:()=>l,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"\u5f00\u53d1\u5de5\u5177/\u4ee3\u7801\u751f\u6210-gen/\u63a5\u53e3\u89c4\u8303-gen ctrl","title":"\u63a5\u53e3\u89c4\u8303-gen ctrl","description":"\u8be5\u529f\u80fd\u7279\u6027\u4ece v2.5 \u7248\u672c\u5f00\u59cb\u63d0\u4f9b\u3002\u8be5\u547d\u4ee4\u76ee\u524d\u4ec5\u652f\u6301 HTTP \u63a5\u53e3\u5f00\u53d1\uff0c GRPC \u90e8\u5206\u8bf7\u53c2\u8003 gen pb \u547d\u4ee4\u3002\u672a\u6765\u4f1a\u8003\u8651 HTTP \u53ca GRPC \u7edf\u4e00\u4f7f\u7528\u8be5\u547d\u4ee4\u751f\u6210\u63a7\u5236\u5668\u53ca SDK \u6e90\u4ee3\u7801\u3002","source":"@site/versioned_docs/version-2.6.x/\u5f00\u53d1\u5de5\u5177/\u4ee3\u7801\u751f\u6210-gen/\u63a5\u53e3\u89c4\u8303-gen ctrl.md","sourceDirName":"\u5f00\u53d1\u5de5\u5177/\u4ee3\u7801\u751f\u6210-gen","slug":"/\u5f00\u53d1\u5de5\u5177/\u4ee3\u7801\u751f\u6210-gen/\u63a5\u53e3\u89c4\u8303-gen ctrl","permalink":"/2.6.x/\u5f00\u53d1\u5de5\u5177/\u4ee3\u7801\u751f\u6210-gen/\u63a5\u53e3\u89c4\u8303-gen ctrl","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.6.x/\u5f00\u53d1\u5de5\u5177/\u4ee3\u7801\u751f\u6210-gen/\u63a5\u53e3\u89c4\u8303-gen ctrl.md","tags":[],"version":"2.6.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":0,"frontMatter":{"title":"\u63a5\u53e3\u89c4\u8303-gen ctrl","sidebar_position":0,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u4ee3\u7801\u751f\u6210-gen(\ud83d\udd25\u91cd\u70b9\ud83d\udd25)","permalink":"/2.6.x/\u5f00\u53d1\u5de5\u5177/\u4ee3\u7801\u751f\u6210-gen/"},"next":{"title":"\u6570\u636e\u89c4\u8303-gen dao","permalink":"/2.6.x/\u5f00\u53d1\u5de5\u5177/\u4ee3\u7801\u751f\u6210-gen/\u6570\u636e\u89c4\u8303-gen dao"}}');var s=c(74848),i=c(28453);const l={title:"\u63a5\u53e3\u89c4\u8303-gen ctrl",sidebar_position:0,hide_title:!0},r=void 0,h={},o=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u89e3\u51b3\u75db\u70b9",id:"\u89e3\u51b3\u75db\u70b9",level:3},{value:"\u547d\u4ee4\u7279\u6027",id:"\u547d\u4ee4\u7279\u6027",level:3},{value:"\u524d\u7f6e\u7ea6\u5b9a",id:"\u524d\u7f6e\u7ea6\u5b9a",level:2},{value:"\u91cd\u8981\u7684\u89c4\u8303\ud83d\udd25",id:"\u91cd\u8981\u7684\u89c4\u8303",level:3},{value:"\u5efa\u8bae\u6027\u7684\u547d\u540d",id:"\u5efa\u8bae\u6027\u7684\u547d\u540d",level:3},{value:"\u547d\u4ee4\u4f7f\u7528",id:"\u547d\u4ee4\u4f7f\u7528",level:2},{value:"\u624b\u52a8\u6a21\u5f0f",id:"\u624b\u52a8\u6a21\u5f0f",level:3},{value:"\u81ea\u52a8\u6a21\u5f0f\uff08\u63a8\u8350\uff09",id:"\u81ea\u52a8\u6a21\u5f0f\u63a8\u8350",level:3},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u81ea\u52a8\u751f\u6210\u7684\u63a5\u53e3\u5b9a\u4e49\u6587\u4ef6",id:"\u81ea\u52a8\u751f\u6210\u7684\u63a5\u53e3\u5b9a\u4e49\u6587\u4ef6",level:3},{value:"\u81ea\u52a8\u751f\u6210\u7684\u63a7\u5236\u5668\u4ee3\u7801\u6587\u4ef6",id:"\u81ea\u52a8\u751f\u6210\u7684\u63a7\u5236\u5668\u4ee3\u7801\u6587\u4ef6",level:3},{value:"\u81ea\u52a8\u751f\u6210\u7684 <code>HTTP SDK</code> \u4ee3\u7801\u6587\u4ef6",id:"\u81ea\u52a8\u751f\u6210\u7684-http-sdk-\u4ee3\u7801\u6587\u4ef6",level:3},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2},{value:"\u4e3a\u4ec0\u4e48\u6bcf\u4e00\u4e2a <code>api</code> \u63a5\u53e3\u751f\u6210\u4e00\u4e2a <code>controller</code> \u6587\u4ef6\u800c\u4e0d\u662f\u5408\u5e76\u5230\u4e00\u4e2a <code>controller</code> \u6587\u4ef6\u4e2d",id:"\u4e3a\u4ec0\u4e48\u6bcf\u4e00\u4e2a-api-\u63a5\u53e3\u751f\u6210\u4e00\u4e2a-controller-\u6587\u4ef6\u800c\u4e0d\u662f\u5408\u5e76\u5230\u4e00\u4e2a-controller-\u6587\u4ef6\u4e2d",level:3},{value:"\u6839\u636e <code>api</code> \u6a21\u5757\u751f\u6210\u5bf9\u5e94\u7684 <code>controller</code> \u6a21\u5757\u4e2d\u4e3a\u4f55\u5b58\u5728\u4e00\u4e2a\u7a7a\u7684 <code>go</code> \u6587\u4ef6",id:"\u6839\u636e-api-\u6a21\u5757\u751f\u6210\u5bf9\u5e94\u7684-controller-\u6a21\u5757\u4e2d\u4e3a\u4f55\u5b58\u5728\u4e00\u4e2a\u7a7a\u7684-go-\u6587\u4ef6",level:3}];function t(e){const d={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(d.p,{children:["\u8be5\u529f\u80fd\u7279\u6027\u4ece ",(0,s.jsx)(d.code,{children:"v2.5"})," \u7248\u672c\u5f00\u59cb\u63d0\u4f9b\u3002\u8be5\u547d\u4ee4\u76ee\u524d\u4ec5\u652f\u6301 ",(0,s.jsx)(d.code,{children:"HTTP"})," \u63a5\u53e3\u5f00\u53d1\uff0c ",(0,s.jsx)(d.code,{children:"GRPC"})," \u90e8\u5206\u8bf7\u53c2\u8003 ",(0,s.jsx)(d.code,{children:"gen pb"})," \u547d\u4ee4\u3002\u672a\u6765\u4f1a\u8003\u8651 ",(0,s.jsx)(d.code,{children:"HTTP"})," \u53ca ",(0,s.jsx)(d.code,{children:"GRPC"})," \u7edf\u4e00\u4f7f\u7528\u8be5\u547d\u4ee4\u751f\u6210\u63a7\u5236\u5668\u53ca ",(0,s.jsx)(d.code,{children:"SDK"})," \u6e90\u4ee3\u7801\u3002"]}),"\n",(0,s.jsx)(d.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,s.jsx)(d.h3,{id:"\u89e3\u51b3\u75db\u70b9",children:"\u89e3\u51b3\u75db\u70b9"}),"\n",(0,s.jsxs)(d.p,{children:["\u5728\u5f00\u53d1\u9879\u76ee\u7684\u65f6\u5019\uff0c\u5f80\u5f80\u9700\u8981\u5148\u6839\u636e\u4e1a\u52a1\u9700\u6c42\u548c\u573a\u666f\u8bbe\u8ba1 ",(0,s.jsx)(d.code,{children:"API"})," \u63a5\u53e3\uff0c\u4f7f\u7528 ",(0,s.jsx)(d.code,{children:"proto"})," \u6216\u8005 ",(0,s.jsx)(d.code,{children:"golang struct"})," \u6765\u8bbe\u8ba1 ",(0,s.jsx)(d.code,{children:"API"})," \u7684\u8f93\u5165\u548c\u8f93\u51fa\uff0c\u968f\u540e\u518d\u521b\u5efa\u4e0e ",(0,s.jsx)(d.code,{children:"API"})," \u76f8\u5bf9\u5e94\u7684\u63a7\u5236\u5668\u5b9e\u73b0\uff0c\u6700\u540e\u4e5f\u6709\u53ef\u80fd\u4f1a\u63d0\u4f9b ",(0,s.jsx)(d.code,{children:"SDK"}),"\uff08\u540c\u4e3a ",(0,s.jsx)(d.code,{children:"Golang"})," \u8bed\u8a00\u6761\u4ef6\u4e0b\uff09\u4f9b\u5185/\u5916\u90e8\u670d\u52a1\u8c03\u7528\u3002\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u4f1a\u9047\u5230\u4ee5\u4e0b\u75db\u70b9\uff1a"]}),"\n",(0,s.jsxs)(d.ul,{children:["\n",(0,s.jsxs)(d.li,{children:[(0,s.jsx)(d.strong,{children:"\u91cd\u590d\u6027\u7684\u4ee3\u7801\u5de5\u4f5c\u8f83\u7e41\u7410"}),"\u3002\u5728 ",(0,s.jsx)(d.code,{children:"API"})," \u4e2d\u521b\u5efa\u8f93\u5165\u8f93\u51fa\u5b9a\u4e49\u6587\u4ef6\u540e\u8fd8\u9700\u8981\u5728\u63a7\u5236\u5668\u76ee\u5f55\u4e0b\u521b\u5efa\u5bf9\u5e94\u7684\u6587\u4ef6\u3001\u521b\u5efa\u5bf9\u5e94\u7684\u63a7\u5236\u5668\u521d\u59cb\u5316\u4ee3\u7801\u3001\u4ece ",(0,s.jsx)(d.code,{children:"API"})," \u4ee3\u7801\u4e2d\u53cd\u590d\u62f7\u8d1d\u5404\u4e2a\u8f93\u5165\u8f93\u51fa\u7ed3\u6784\u540d\u79f0\uff0c\u5728\u8fd9\u8fc7\u7a0b\u91cd\u590d\u6027\u7684\u64cd\u4f5c\u6bd4\u8f83\u7e41\u7410\u3002"]}),"\n",(0,s.jsxs)(d.li,{children:[(0,s.jsx)(d.strong,{children:"API\u4e0e\u63a7\u5236\u5668\u4e4b\u95f4\u7684\u5173\u8054\u6ca1\u6709\u53ef\u9760\u89c4\u8303\u7ea6\u675f"}),"\u3002\u9664\u4e86 ",(0,s.jsx)(d.code,{children:"API"})," \u6709\u4e00\u5b9a\u7684\u547d\u540d\u7ea6\u675f\u5916\uff0c\u63a7\u5236\u5668\u7684\u521b\u5efa\u548c\u65b9\u6cd5\u547d\u540d\u5e76\u6ca1\u6709\u7ea6\u675f\uff0c\u7075\u6d3b\u5ea6\u8f83\u9ad8\uff0c ",(0,s.jsx)(d.code,{children:"API"})," \u7684\u7ed3\u6784\u540d\u79f0\u4e0e\u63a7\u5236\u5668\u65b9\u6cd5\u540d\u79f0\u96be\u4ee5\u7ea6\u675f\u5bf9\u5e94\uff0c\u5f53\u63a5\u53e3\u8d8a\u6765\u8d8a\u591a\u65f6\u4f1a\u6709\u4e00\u5b9a\u7ef4\u62a4\u6210\u672c\u3002"]}),"\n",(0,s.jsxs)(d.li,{children:[(0,s.jsx)(d.strong,{children:"\u56e2\u961f\u5f00\u53d1\u591a\u4eba\u534f\u4f5c\u65f6\u4ee3\u7801\u6587\u4ef6\u51b2\u7a81\u6982\u7387\u5927"}),"\u3002\u591a\u4eba\u5f00\u53d1\u534f\u4f5c\u90fd\u5f80\u4e00\u4e2a\u6587\u4ef6\u6267\u884c\u53d8\u66f4\u65f6\uff0c\u51fa\u73b0\u6587\u4ef6\u51b2\u7a81\u7684\u6982\u7387\u5c31\u4f1a\u53d8\u5927\uff0c\u56e2\u961f\u534f\u4f5c\u5f00\u53d1\u4e2d\u5904\u7406\u8fd9\u79cd\u6587\u4ef6\u51b2\u7a81\u7684\u7cbe\u529b\u5f00\u9500\u6beb\u65e0\u610f\u4e49\u3002"]}),"\n",(0,s.jsxs)(d.li,{children:[(0,s.jsx)(d.strong,{children:"\u7f3a\u5c11API\u7684HTTP SDK\u81ea\u52a8\u751f\u6210\u5de5\u5177"}),"\u3002\u5f53\u5f00\u53d1\u5b8c ",(0,s.jsx)(d.code,{children:"API"})," \u540e\uff0c\u5f80\u5f80\u9700\u8981\u7acb\u5373\u7ed9\u5185\u90e8\u6216\u8005\u5916\u90e8\u8c03\u7528\uff0c\u7f3a\u5c11\u4fbf\u6377\u7684 ",(0,s.jsx)(d.code,{children:"SDK"})," \u751f\u6210\uff0c\u9700\u8981\u624b\u52a8\u6765\u7ef4\u62a4\u8fd9\u90e8\u5206 ",(0,s.jsx)(d.code,{children:"SDK"})," \u4ee3\u7801\uff0c\u90a3\u4e48\u5bf9\u4e8e\u8c03\u7528\u7aef\u6765\u8bf4\u6210\u672c\u975e\u5e38\u9ad8\u3002"]}),"\n"]}),"\n",(0,s.jsx)(d.h3,{id:"\u547d\u4ee4\u7279\u6027",children:"\u547d\u4ee4\u7279\u6027"}),"\n",(0,s.jsxs)(d.ul,{children:["\n",(0,s.jsxs)(d.li,{children:["\u89c4\u8303\u4e86 ",(0,s.jsx)(d.code,{children:"API"})," \u5b9a\u4e49\u4e0e\u63a7\u5236\u5668\u6587\u4ef6\u547d\u540d\u3001\u63a7\u5236\u5668\u5b9e\u73b0\u65b9\u6cd5\u547d\u540d\u3002"]}),"\n",(0,s.jsxs)(d.li,{children:["\u89c4\u8303\u4e86 ",(0,s.jsx)(d.code,{children:"API"})," \u5b9a\u4e49\u4e0e\u63a7\u5236\u5668\u4ee3\u7801\u4e4b\u95f4\u7684\u5173\u8054\u5173\u7cfb\uff0c\u4fbf\u4e8e\u5feb\u901f\u5b9a\u4f4d ",(0,s.jsx)(d.code,{children:"API"})," \u5b9e\u73b0\u3002"]}),"\n",(0,s.jsxs)(d.li,{children:["\u6839\u636e ",(0,s.jsx)(d.code,{children:"API"})," \u5b9a\u4e49\u81ea\u52a8\u751f\u6210\u63a7\u5236\u5668\u63a5\u53e3\u3001\u63a7\u5236\u5668\u521d\u59cb\u5316\u6587\u4ef6\u53ca\u4ee3\u7801\u3001\u63a5\u53e3\u521d\u59cb\u5316\u4ee3\u7801\u3002"]}),"\n",(0,s.jsxs)(d.li,{children:["\u6839\u636e ",(0,s.jsx)(d.code,{children:"API"})," \u5b9a\u4e49\u81ea\u52a8\u751f\u6210\u6613\u4e8e\u4f7f\u7528\u7684 ",(0,s.jsx)(d.code,{children:"HTTP SDK"})," \u4ee3\u7801\u3002\u8be5\u529f\u80fd\u53ef\u914d\u7f6e\uff0c\u9ed8\u8ba4\u5173\u95ed\u3002"]}),"\n",(0,s.jsxs)(d.li,{children:["\u652f\u6301 ",(0,s.jsx)(d.code,{children:"File Watch"})," \u81ea\u52a8\u5316\u751f\u6210\u6a21\u5f0f\uff1a\u5f53\u67d0\u4e2a ",(0,s.jsx)(d.code,{children:"API"})," \u7ed3\u6784\u5b9a\u4e49\u6587\u4ef6\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u81ea\u52a8\u589e\u91cf\u5316\u66f4\u65b0\u5bf9\u5e94\u7684\u63a7\u5236\u5668\u3001 ",(0,s.jsx)(d.code,{children:"SDK"})," \u4ee3\u7801\u3002"]}),"\n"]}),"\n",(0,s.jsx)(d.h2,{id:"\u524d\u7f6e\u7ea6\u5b9a",children:"\u524d\u7f6e\u7ea6\u5b9a"}),"\n",(0,s.jsx)(d.h3,{id:"\u91cd\u8981\u7684\u89c4\u8303",children:"\u91cd\u8981\u7684\u89c4\u8303\ud83d\udd25"}),"\n",(0,s.jsxs)(d.p,{children:["\u8be5\u547d\u4ee4\u7684\u76ee\u7684\u4e4b\u4e00\u662f\u89c4\u8303\u5316 ",(0,s.jsx)(d.code,{children:"api"})," \u4ee3\u7801\u7684\u7f16\u5199\uff0c\u90a3\u4e48\u6211\u4eec\u5e94\u8be5\u6709\u4e00\u4e9b\u91cd\u8981\u7684\u89c4\u8303\u9700\u8981\u4e86\u89e3\uff08\u5426\u5219\u751f\u6210\u4e0d\u4e86\u4ee3\u7801\u54e6\uff09\uff1a"]}),"\n",(0,s.jsxs)(d.ul,{children:["\n",(0,s.jsxs)(d.li,{children:[(0,s.jsx)(d.code,{children:"api"})," \u5c42\u7684\u63a5\u53e3\u5b9a\u4e49\u6587\u4ef6\u8def\u5f84\u9700\u8981\u6ee1\u8db3 ",(0,s.jsx)(d.code,{children:"/api/\u6a21\u5757/\u7248\u672c/\u5b9a\u4e49\u6587\u4ef6.go"}),"\uff0c\u4f8b\u5982\uff1a ",(0,s.jsx)(d.code,{children:"/api/user/v1/user.go"}),"\u3001 ",(0,s.jsx)(d.code,{children:"/api/user/v1/user_delete.go"}),"\u3001etc.","\n",(0,s.jsxs)(d.ul,{children:["\n",(0,s.jsxs)(d.li,{children:["\u8fd9\u91cc\u7684 ",(0,s.jsx)(d.strong,{children:"\u6a21\u5757"})," \u6307\u7684\u662f ",(0,s.jsx)(d.code,{children:"API"})," \u7684\u6a21\u5757\u5212\u5206\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06 ",(0,s.jsx)(d.code,{children:"API"})," \u6309\u7167\u4e0d\u540c\u7684 ",(0,s.jsx)(d.strong,{children:"\u4e1a\u52a1\u5c5e\u6027"})," \u8fdb\u884c\u62c6\u5206\u65b9\u4fbf\u805a\u5408\u7ef4\u62a4\u3002\u4f60\u4e5f\u53ef\u4ee5\u5c06\u6a21\u5757\u8ba4\u4e3a\u662f\u5177\u4f53\u7684\u4e1a\u52a1\u8d44\u6e90\u3002"]}),"\n",(0,s.jsxs)(d.li,{children:["\u8fd9\u91cc\u7684 ",(0,s.jsx)(d.strong,{children:"\u7248\u672c"})," \u901a\u5e38\u4f7f\u7528 ",(0,s.jsx)(d.code,{children:"v1"}),"/ ",(0,s.jsx)(d.code,{children:"v2"}),"..\u8fd9\u6837\u7684\u5f62\u5f0f\u6765\u5b9a\u4e49\uff0c\u7528\u4ee5 ",(0,s.jsx)(d.code,{children:"API"})," \u517c\u5bb9\u6027\u7684\u7248\u672c\u63a7\u5236\u3002\u5f53\u76f8\u540c\u7684 ",(0,s.jsx)(d.code,{children:"API"})," \u51fa\u73b0\u517c\u5bb9\u6027\u66f4\u65b0\u65f6\uff0c\u9700\u8981\u901a\u8fc7\u4e0d\u540c\u7248\u672c\u53f7\u6765\u533a\u5206\u3002\u9ed8\u8ba4\u4f7f\u7528 ",(0,s.jsx)(d.code,{children:"v1"})," \u6765\u7ba1\u7406\u7b2c\u4e00\u4e2a\u7248\u672c\u3002"]}),"\n",(0,s.jsxs)(d.li,{children:["\u8fd9\u91cc\u7684 ",(0,s.jsx)(d.strong,{children:"\u5b9a\u4e49\u6587\u4ef6"})," \u6307\u7684\u662f ",(0,s.jsx)(d.code,{children:"API"})," \u7684\u8f93\u5165\u8f93\u51fa\u5b9a\u4e49\u6587\u4ef6\uff0c\u901a\u5e38\u6bcf\u4e2a ",(0,s.jsx)(d.code,{children:"API"})," \u9700\u8981\u5355\u72ec\u5b9a\u4e49\u4e00\u4e2a ",(0,s.jsx)(d.code,{children:"go"})," \u6587\u4ef6\u6765\u72ec\u7acb\u7ef4\u62a4\u3002\u5f53\u7136\u4e5f\u652f\u6301\u5c06\u591a\u4e2a ",(0,s.jsx)(d.code,{children:"API"})," \u653e\u5230\u4e00\u4e2a ",(0,s.jsx)(d.code,{children:"go"})," \u6587\u4ef6\u4e2d\u7edf\u4e00\u7ef4\u62a4\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(d.li,{children:[(0,s.jsx)(d.code,{children:"api"})," \u5b9a\u4e49\u7684\u7ed3\u6784\u4f53\u540d\u79f0\u9700\u8981\u6ee1\u8db3 ",(0,s.jsx)(d.code,{children:"\u64cd\u4f5c+Req"})," \u53ca ",(0,s.jsx)(d.code,{children:"\u64cd\u4f5c+Res"})," \u7684\u547d\u540d\u65b9\u5f0f\u3002\u4f8b\u5982\uff1a ",(0,s.jsx)(d.code,{children:"GetOneReq/GetOneRes"}),"\u3001 ",(0,s.jsx)(d.code,{children:"GetListReq/GetListRes"}),"\u3001 ",(0,s.jsx)(d.code,{children:"DeleteReq/DeleteRes"}),"\u3001etc.","\n",(0,s.jsxs)(d.ul,{children:["\n",(0,s.jsxs)(d.li,{children:["\u8fd9\u91cc\u7684\u64cd\u4f5c\u662f\u5f53\u524d ",(0,s.jsx)(d.code,{children:"API"})," \u6a21\u5757\u7684\u64cd\u4f5c\u540d\u79f0\uff0c\u901a\u5e38\u5bf9\u5e94 ",(0,s.jsx)(d.code,{children:"CURD"})," \u662f\uff1a ",(0,s.jsx)(d.code,{children:"Create"}),"\u3001 ",(0,s.jsx)(d.code,{children:"Update"}),"\u3001 ",(0,s.jsx)(d.code,{children:"GetList/GetOne"}),"\u3001 ",(0,s.jsx)(d.code,{children:"Delete"}),"\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(d.p,{children:["\u4ee5\u4e0b\u662f\u9879\u76ee\u5de5\u7a0b\u6a21\u677f\u4e2d\u7684 ",(0,s.jsx)(d.code,{children:"Hello"})," \u63a5\u53e3\u793a\u4f8b\uff1a"]}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.img,{src:c(32974).A+"",width:"3072",height:"1748"})}),"\n",(0,s.jsx)(d.h3,{id:"\u5efa\u8bae\u6027\u7684\u547d\u540d",children:"\u5efa\u8bae\u6027\u7684\u547d\u540d"}),"\n",(0,s.jsx)(d.p,{children:"\u6211\u4eec\u5bf9\u4e00\u4e9b\u5e38\u7528\u7684\u63a5\u53e3\u5b9a\u4e49\u505a\u4e86\u4e00\u4e9b\u5efa\u8bae\u6027\u7684\u547d\u540d\uff0c\u4f9b\u5927\u5bb6\u53c2\u8003\uff1a"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"\u64cd\u4f5c\u540d\u79f0"}),(0,s.jsx)(d.th,{children:"\u5efa\u8bae\u547d\u540d"}),(0,s.jsx)(d.th,{children:"\u5907\u6ce8"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.strong,{children:"\u67e5\u8be2\u5217\u8868"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"GetListReq/Res"})}),(0,s.jsx)(d.td,{children:"\u901a\u5e38\u662f\u4ece\u6570\u636e\u5e93\u4e2d\u5206\u9875\u67e5\u8be2\u6570\u636e\u8bb0\u5f55"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.strong,{children:"\u67e5\u8be2\u8be6\u60c5"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"GetOneReq/Res"})}),(0,s.jsx)(d.td,{children:"\u901a\u5e38\u63a5\u53e3\u9700\u8981\u4f20\u9012\u4e3b\u952e\u6761\u4ef6\uff0c\u4ece\u6570\u636e\u5e93\u4e2d\u67e5\u8be2\u8bb0\u5f55\u8be6\u60c5"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.strong,{children:"\u521b\u5efa\u8d44\u6e90"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"CreateReq/Res"})}),(0,s.jsx)(d.td,{children:"\u901a\u5e38\u662f\u5f80\u6570\u636e\u8868\u4e2d\u63d2\u5165\u4e00\u6761\u6216\u591a\u6761\u6570\u636e\u8bb0\u5f55"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.strong,{children:"\u4fee\u6539\u8d44\u6e90"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"UpdateReq/Res"})}),(0,s.jsx)(d.td,{children:"\u901a\u5e38\u662f\u6309\u7167\u4e00\u5b9a\u6761\u4ef6\u4fee\u6539\u6570\u636e\u8868\u4e2d\u7684\u4e00\u6761\u6216\u591a\u6761\u6570\u636e\u8bb0\u5f55"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.strong,{children:"\u5220\u9664\u8d44\u6e90"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"DeleteReq/Res"})}),(0,s.jsx)(d.td,{children:"\u901a\u5e38\u662f\u6309\u7167\u4e00\u5b9a\u6761\u4ef6\u5220\u9664\u6570\u636e\u8868\u4e2d\u7684\u4e00\u6761\u6216\u591a\u6761\u6570\u636e\u8bb0\u5f55"})]})]})]}),"\n",(0,s.jsx)(d.h2,{id:"\u547d\u4ee4\u4f7f\u7528",children:"\u547d\u4ee4\u4f7f\u7528"}),"\n",(0,s.jsxs)(d.p,{children:["\u8be5\u547d\u4ee4\u901a\u8fc7\u5206\u6790\u7ed9\u5b9a\u7684 ",(0,s.jsx)(d.code,{children:"api"})," \u63a5\u53e3\u5b9a\u4e49\u76ee\u5f55\u4e0b\u7684\u4ee3\u7801\uff0c\u81ea\u52a8\u751f\u6210\u5bf9\u5e94\u7684\u63a7\u5236\u5668/ ",(0,s.jsx)(d.code,{children:"SDK Go"})," \u4ee3\u7801\u6587\u4ef6\u3002"]}),"\n",(0,s.jsx)(d.h3,{id:"\u624b\u52a8\u6a21\u5f0f",children:"\u624b\u52a8\u6a21\u5f0f"}),"\n",(0,s.jsxs)(d.p,{children:["\u5982\u679c\u662f\u624b\u52a8\u6267\u884c\u547d\u4ee4\u884c\uff0c\u76f4\u63a5\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u6267\u884c ",(0,s.jsx)(d.code,{children:"gf gen ctrl"})," \u5373\u53ef\uff0c\u5979\u5c06\u5b8c\u6574\u626b\u63cf ",(0,s.jsx)(d.code,{children:"api"})," \u63a5\u53e3\u5b9a\u4e49\u76ee\u5f55\uff0c\u5e76\u751f\u6210\u5bf9\u5e94\u4ee3\u7801\u3002"]}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-bash",children:"$ gf gen ctrl -h\nUSAGE\n    gf gen ctrl [OPTION]\n\nOPTION\n    -s, --srcFolder       source folder path to be parsed. default: api\n    -d, --dstFolder       destination folder path storing automatically generated go files. default: internal/controller\n    -w, --watchFile       used in file watcher, it re-generates go files only if given file is under srcFolder\n    -k, --sdkPath         also generate SDK go files for api definitions to specified directory\n    -v, --sdkStdVersion   use standard version prefix for generated sdk request path\n    -n, --sdkNoV1         do not add version suffix for interface module name if version is v1\n    -h, --help            more information about this command\n\nEXAMPLE\n    gf gen ctrl\n\n"})}),"\n",(0,s.jsxs)(d.p,{children:["\u5982\u679c\u4f7f\u7528\u6846\u67b6\u63a8\u8350\u7684\u9879\u76ee\u5de5\u7a0b\u811a\u624b\u67b6\uff0c\u5e76\u4e14\u7cfb\u7edf\u5b89\u88c5\u4e86 ",(0,s.jsx)(d.code,{children:"make"})," \u5de5\u5177\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(d.code,{children:"make ctrl"})," \u5feb\u6377\u6307\u4ee4\u3002"]}),"\n",(0,s.jsx)(d.p,{children:"\u53c2\u6570\u8bf4\u660e\uff1a"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"\u540d\u79f0"}),(0,s.jsx)(d.th,{children:"\u5fc5\u987b"}),(0,s.jsx)(d.th,{children:"\u9ed8\u8ba4\u503c"}),(0,s.jsx)(d.th,{children:"\u542b\u4e49"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"srcFolder"})}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"api"})}),(0,s.jsxs)(d.td,{children:["\u6307\u5411 ",(0,s.jsx)(d.code,{children:"api"})," \u63a5\u53e3\u5b9a\u4e49\u6587\u4ef6\u76ee\u5f55\u5730\u5740"]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"dstFolder"})}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"internal/controller"})}),(0,s.jsx)(d.td,{children:"\u6307\u5411\u751f\u6210\u7684\u63a7\u5236\u5668\u6587\u4ef6\u5b58\u653e\u76ee\u5f55"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"watchFile"})}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"\u7528\u5728IDE\u7684\u6587\u4ef6\u76d1\u63a7\u4e2d\uff0c\u7528\u4e8e\u6839\u636e\u5f53\u6587\u4ef6\u53d1\u751f\u53d8\u5316\u65f6\u81ea\u52a8\u6267\u884c\u751f\u6210\u64cd\u4f5c"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"sdkPath"})}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{}),(0,s.jsxs)(d.td,{children:["\u5982\u679c\u9700\u8981\u751f\u6210 ",(0,s.jsx)(d.code,{children:"HTTP SDK"}),"\uff0c\u8be5\u53c2\u6570\u7528\u4e8e\u6307\u5b9a\u751f\u6210\u7684SDK\u4ee3\u7801\u76ee\u5f55\u5b58\u653e\u8def\u5f84"]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"sdkStdVersion"})}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"false"})}),(0,s.jsxs)(d.td,{children:["\u751f\u6210\u7684 ",(0,s.jsx)(d.code,{children:"HTTP SDK"})," \u662f\u5426\u4f7f\u7528\u6807\u51c6\u7684\u7248\u672c\u7ba1\u7406\u3002\u6807\u51c6\u7684\u7248\u672c\u7ba1\u7406\u5c06\u81ea\u52a8\u6839\u636e ",(0,s.jsx)(d.code,{children:"API"})," \u7248\u672c\u589e\u52a0\u8bf7\u6c42\u7684\u8def\u7531\u524d\u7f00\u3002\u4f8b\u5982 ",(0,s.jsx)(d.code,{children:"v1"})," \u7248\u672c\u7684API\u5c06\u4f1a\u81ea\u52a8\u589e\u52a0 ",(0,s.jsx)(d.code,{children:"/api/v1"})," \u7684\u8bf7\u6c42\u8def\u7531\u524d\u7f00\u3002"]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"sdksdkNoV1"})}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"false"})}),(0,s.jsxs)(d.td,{children:["\u751f\u6210\u7684 ",(0,s.jsx)(d.code,{children:"HTTP SDK"})," \u4e2d\uff0c\u5f53\u63a5\u53e3\u4e3a ",(0,s.jsx)(d.code,{children:"v1"})," \u7248\u672c\u65f6\uff0c\u63a5\u53e3\u6a21\u5757\u540d\u79f0\u662f\u5426\u4e0d\u5e26 ",(0,s.jsx)(d.code,{children:"V1"})," \u540e\u7f00\u3002"]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"clear"})}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"false"})}),(0,s.jsxs)(d.td,{children:["\u662f\u5426\u5220\u9664 ",(0,s.jsx)(d.code,{children:"controller"})," \u4e2d\u4e0e ",(0,s.jsx)(d.code,{children:"api"})," \u5c42\u5b9a\u4e49\u4e0d\u5b58\u5728\u7684\u63a7\u5236\u5668\u63a5\u53e3\u6587\u4ef6\u3002"]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"merge"})}),(0,s.jsx)(d.td,{children:"\u5426"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"false"})}),(0,s.jsxs)(d.td,{children:["\u7528\u4ee5\u63a7\u5236\u751f\u6210\u7684\u63a7\u5236\u5668\u4ee3\u7801\u6587\u4ef6\u6309\u7167 ",(0,s.jsx)(d.code,{children:"api"})," \u5c42\u7684\u6587\u4ef6\u751f\u6210\uff0c\u800c\u4e0d\u662f\u9ed8\u8ba4\u6309\u7167 ",(0,s.jsx)(d.code,{children:"api"})," \u63a5\u53e3\u62c6\u5206\u4e3a\u4e0d\u540c\u7684\u63a5\u53e3\u5b9e\u73b0\u6587\u4ef6\u3002"]})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"\u81ea\u52a8\u6a21\u5f0f\u63a8\u8350",children:"\u81ea\u52a8\u6a21\u5f0f\uff08\u63a8\u8350\uff09"}),"\n",(0,s.jsxs)(d.p,{children:["\u5982\u679c\u60a8\u662f\u4f7f\u7528\u7684 ",(0,s.jsx)(d.code,{children:"GolandIDE"}),"\uff0c\u90a3\u4e48\u53ef\u4ee5\u4f7f\u7528\u6211\u4eec\u63d0\u4f9b\u7684\u914d\u7f6e\u6587\u4ef6\uff1a ",(0,s.jsx)(d.a,{href:"https://goframe.org/download/attachments/153977096/watchers.xml?version=1&modificationDate=1712065983366&api=v2",children:"watchers.xml"}),"\xa0 \u81ea\u52a8\u76d1\u542c\u4ee3\u7801\u6587\u4ef6\u4fee\u6539\u65f6\u81ea\u52a8\u751f\u6210\u63a5\u53e3\u6587\u4ef6\u3002\u4f7f\u7528\u65b9\u5f0f\uff0c\u5982\u4e0b\u56fe\uff1a"]}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.img,{src:c(47352).A+"",width:"1964",height:"1424"})}),"\n",(0,s.jsx)(d.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,s.jsx)(d.h3,{id:"\u81ea\u52a8\u751f\u6210\u7684\u63a5\u53e3\u5b9a\u4e49\u6587\u4ef6",children:"\u81ea\u52a8\u751f\u6210\u7684\u63a5\u53e3\u5b9a\u4e49\u6587\u4ef6"}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.img,{src:c(77553).A+"",width:"3840",height:"2110"})}),"\n",(0,s.jsx)(d.h3,{id:"\u81ea\u52a8\u751f\u6210\u7684\u63a7\u5236\u5668\u4ee3\u7801\u6587\u4ef6",children:"\u81ea\u52a8\u751f\u6210\u7684\u63a7\u5236\u5668\u4ee3\u7801\u6587\u4ef6"}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.img,{src:c(21521).A+"",width:"3840",height:"2110"})}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.img,{src:c(96737).A+"",width:"3840",height:"2110"})}),"\n",(0,s.jsxs)(d.h3,{id:"\u81ea\u52a8\u751f\u6210\u7684-http-sdk-\u4ee3\u7801\u6587\u4ef6",children:["\u81ea\u52a8\u751f\u6210\u7684 ",(0,s.jsx)(d.code,{children:"HTTP SDK"})," \u4ee3\u7801\u6587\u4ef6"]}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.img,{src:c(47089).A+"",width:"3840",height:"2110"})}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.img,{src:c(21537).A+"",width:"3840",height:"2110"})}),"\n",(0,s.jsx)(d.h2,{id:"\u5e38\u89c1\u95ee\u9898",children:"\u5e38\u89c1\u95ee\u9898"}),"\n",(0,s.jsxs)(d.h3,{id:"\u4e3a\u4ec0\u4e48\u6bcf\u4e00\u4e2a-api-\u63a5\u53e3\u751f\u6210\u4e00\u4e2a-controller-\u6587\u4ef6\u800c\u4e0d\u662f\u5408\u5e76\u5230\u4e00\u4e2a-controller-\u6587\u4ef6\u4e2d",children:["\u4e3a\u4ec0\u4e48\u6bcf\u4e00\u4e2a ",(0,s.jsx)(d.code,{children:"api"})," \u63a5\u53e3\u751f\u6210\u4e00\u4e2a ",(0,s.jsx)(d.code,{children:"controller"})," \u6587\u4ef6\u800c\u4e0d\u662f\u5408\u5e76\u5230\u4e00\u4e2a ",(0,s.jsx)(d.code,{children:"controller"})," \u6587\u4ef6\u4e2d"]}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.img,{src:"https://goframe.org/download/attachments/93880327/image2023-6-15_16-29-12.png?version=1&modificationDate=1686817753666&api=v2",alt:""})}),"\n",(0,s.jsxs)(d.p,{children:["\u5f53\u7136\uff0c\u9488\u5bf9\u5c0f\u578b\u9879\u76ee\u6216\u8005\u4e2a\u4eba\u7b80\u5355\u9879\u76ee\u3001\u4e00\u4e2a ",(0,s.jsx)(d.code,{children:"api"})," \u6a21\u5757\u53ea\u6709\u51e0\u4e2a\u63a5\u53e3\u7684\u9879\u76ee\u800c\u8a00\uff0c\u7ba1\u7406\u7684\u65b9\u5f0f\u5e76\u4e0d\u4f1a\u6210\u4e3a\u4ec0\u4e48\u95ee\u9898\uff0c\u53ef\u4ee5\u6839\u636e\u4e2a\u4eba\u559c\u597d\u7ef4\u62a4\u4ee3\u7801\u6587\u4ef6\u5373\u53ef\u3002\u6211\u4eec\u8fd9\u91cc\u4ee5\u8f83\u590d\u6742\u7684\u4e1a\u52a1\u9879\u76ee\uff0c\u6216\u8005\u4f01\u4e1a\u7ea7\u9879\u76ee\uff0c\u5728\u4e00\u4e2a ",(0,s.jsx)(d.code,{children:"api"})," \u6a21\u5757\u7684\u63a5\u53e3\u6bd4\u8f83\u591a\u7684\u573a\u666f\u6765\u5c55\u5f00\u63cf\u8ff0\u4e00\u4e0b\u3002"]}),"\n",(0,s.jsxs)(d.ul,{children:["\n",(0,s.jsxs)(d.li,{children:["\u9996\u5148\uff0c\u5f00\u53d1 ",(0,s.jsx)(d.code,{children:"api"})," \u63a5\u53e3\u65f6\uff0c\u67e5\u627e ",(0,s.jsx)(d.code,{children:"api"})," \u63a5\u53e3\u5b9e\u73b0\u66f4\u52a0\u6e05\u6670\uff0c\u800c\u4e0d\u662f\u5728\u4e00\u4e2a\u52a8\u5219\u4e0a\u5343\u884c\u7684\u4ee3\u7801\u6587\u4ef6\u4e2d\u67e5\u627e\u3002"]}),"\n",(0,s.jsxs)(d.li,{children:["\u5176\u6b21\uff0c\u5728\u591a\u4eba\u534f\u4f5c\u7684\u9879\u76ee\u4e2d\uff0c\u5982\u679c\u591a\u4eba\u540c\u65f6\u4fee\u6539\u540c\u4e00\u4e2a ",(0,s.jsx)(d.code,{children:"controller"})," \u6587\u4ef6\u5728\u7248\u672c\u7ba1\u7406\u4e2d\u5bb9\u6613\u51fa\u73b0\u6587\u4ef6\u51b2\u7a81\u3002\u4e00\u4e2a ",(0,s.jsx)(d.code,{children:"api"})," \u63a5\u53e3\u5bf9\u5e94\u4e00\u4e2a ",(0,s.jsx)(d.code,{children:"controller"})," \u5b9e\u73b0\u6587\u4ef6\u7684\u7ef4\u62a4\u65b9\u5f0f\u80fd\u6700\u5927\u51cf\u5c11\u4ee3\u7801\u534f\u4f5c\u65f6\u7684\u6587\u4ef6\u51b2\u7a81\u6982\u7387\uff0c\u5927\u90e8\u5206\u5f00\u53d1\u8005\u4e5f\u4e0d\u5e0c\u671b\u82b1\u8d39\u81ea\u5df1\u5b9d\u8d35\u7684\u65f6\u95f4\u4e00\u6b21\u53c8\u4e00\u6b21\u5730\u89e3\u51b3\u6587\u4ef6\u51b2\u7a81\u4e0a\u3002"]}),"\n",(0,s.jsxs)(d.li,{children:["\u6700\u540e\uff0c ",(0,s.jsx)(d.code,{children:"controller"})," \u5c42\u7684\u4ee3\u7801\u6709\u5b83\u81ea\u8eab\u7684\u804c\u8d23\uff1a","\n",(0,s.jsxs)(d.ul,{children:["\n",(0,s.jsx)(d.li,{children:"\u6821\u9a8c\u8f93\u5165\u53c2\u6570\uff1a\u5ba2\u6237\u7aef\u63d0\u4ea4\u7684\u53c2\u6570\u90fd\u662f\u4e0d\u53ef\u4fe1\u4efb\u7684\uff0c\u5927\u90e8\u5206\u573a\u666f\u4e0b\u90fd\u9700\u8981\u505a\u6570\u636e\u6821\u9a8c\u3002"}),"\n",(0,s.jsxs)(d.li,{children:["\u5b9e\u73b0\u63a5\u53e3\u903b\u8f91\uff1a\u76f4\u63a5\u5728 ",(0,s.jsx)(d.code,{children:"controller"})," \u4e2d\u5b9e\u73b0\u63a5\u53e3\u903b\u8f91\uff0c\u6216\u8005\u8c03\u7528\u4e00\u4e2a\u6216\u591a\u4e2a ",(0,s.jsx)(d.code,{children:"service"})," \u63a5\u53e3\u3001\u7b2c\u4e09\u65b9\u670d\u52a1\u63a5\u53e3\u6765\u5b9e\u73b0\u63a5\u53e3\u903b\u8f91\u3002\u6ce8\u610f\u4e8b\u9879\uff0c\u4e0d\u80fd\u5728 ",(0,s.jsx)(d.code,{children:"service"})," \u5c42\u7684\u63a5\u53e3\u4e2d\u53bb\u5b9e\u73b0 ",(0,s.jsx)(d.code,{children:"api"})," \u63a5\u53e3\u903b\u8f91\uff0c\u56e0\u4e3a ",(0,s.jsx)(d.code,{children:"api"})," \u63a5\u53e3\u662f\u4e0e\u5177\u4f53\u7684\u4e1a\u52a1\u573a\u666f\u7ed1\u5b9a\u7684\uff0c\u65e0\u6cd5\u590d\u7528\u3002\ud83d\udc80 ",(0,s.jsxs)(d.strong,{children:["\u5927\u90e8\u5206\u5e38\u89c1\u7684\u9519\u8bef\u662f ",(0,s.jsx)(d.code,{children:"controller"})," \u76f4\u63a5\u628a\u8bf7\u6c42\u900f\u4f20\u7ed9 ",(0,s.jsx)(d.code,{children:"service"})," \u63a5\u53e3\u6765\u5b9e\u73b0 ",(0,s.jsx)(d.code,{children:"api"})," \u63a5\u53e3\u903b\u8f91\uff0c\u9020\u6210\u4e86 ",(0,s.jsx)(d.code,{children:"controller"})," \u770b\u8d77\u6765\u53ef\u6709\u53ef\u65e0\u3001 ",(0,s.jsx)(d.code,{children:"service"})," \u5c42\u7684\u5b9e\u73b0\u8d8a\u6765\u8d8a\u91cd\u4e14\u65e0\u6cd5\u590d\u7528\u3002"]})," \ud83d\udc80"]}),"\n",(0,s.jsx)(d.li,{children:"\u751f\u6210\u8fd4\u56de\u6570\u636e\uff1a\u7ec4\u7ec7\u5185\u90e8\u4ea7\u751f\u7684\u7ed3\u679c\u6570\u636e\uff0c\u751f\u6210\u63a5\u53e3\u5b9a\u4e49\u7684\u8fd4\u56de\u6570\u636e\u63a5\u53e3\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(d.li,{children:["\u8fd9\u4e9b\u804c\u8d23\u4e5f\u5c31\u610f\u5473\u7740 ",(0,s.jsx)(d.code,{children:"controller"})," \u7684\u4ee3\u7801\u4e5f\u662f\u6bd4\u8f83\u590d\u6742\uff0c\u5206\u5f00\u7ef4\u62a4\u80fd\u51cf\u5c11\u5f00\u53d1\u8005\u5fc3\u667a\u8d1f\u62c5\u3001\u6613\u4e8e\u6e05\u6670\u7ef4\u62a4 ",(0,s.jsx)(d.code,{children:"api"})," \u63a5\u53e3\u5b9e\u73b0\u903b\u8f91\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.strong,{children:"\u4e00\u4e9b\u5efa\u8bae"}),"\uff1a"]}),"\n",(0,s.jsxs)(d.p,{children:["\u5982\u679c\u4e00\u4e2a ",(0,s.jsx)(d.code,{children:"api"})," \u6a21\u5757\u4e0b\u7684\u63a5\u53e3\u6587\u4ef6\u592a\u591a\uff0c\u5efa\u8bae\u5c06\u590d\u6742\u7684 ",(0,s.jsx)(d.code,{children:"api"})," \u6a21\u5757\u8fdb\u4e00\u6b65\u5212\u5206\u4e3a\u5b50\u6a21\u5757\u3002\u8fd9\u6837\u53ef\u4ee5\u5bf9\u590d\u6742\u7684 ",(0,s.jsx)(d.code,{children:"api"})," \u6a21\u5757\u8fdb\u884c\u89e3\u8026\uff0c\u4e5f\u80fd\u901a\u8fc7\u591a\u76ee\u5f55\u7684\u65b9\u5f0f\u6765\u7ef4\u62a4 ",(0,s.jsx)(d.code,{children:"api"})," \u63a5\u53e3\u5b9a\u4e49\u548c ",(0,s.jsx)(d.code,{children:"controller"})," \u63a5\u53e3\u5b9e\u73b0\u6587\u4ef6\u3002\u76ee\u5f55\u7ed3\u6784\u4f1a\u66f4\u6e05\u6670\uff0c\u66f4\u5229\u4e8e\u591a\u4eba\u534f\u4f5c\u548c\u7248\u672c\u7ba1\u7406\u3002"]}),"\n",(0,s.jsxs)(d.h3,{id:"\u6839\u636e-api-\u6a21\u5757\u751f\u6210\u5bf9\u5e94\u7684-controller-\u6a21\u5757\u4e2d\u4e3a\u4f55\u5b58\u5728\u4e00\u4e2a\u7a7a\u7684-go-\u6587\u4ef6",children:["\u6839\u636e ",(0,s.jsx)(d.code,{children:"api"})," \u6a21\u5757\u751f\u6210\u5bf9\u5e94\u7684 ",(0,s.jsx)(d.code,{children:"controller"})," \u6a21\u5757\u4e2d\u4e3a\u4f55\u5b58\u5728\u4e00\u4e2a\u7a7a\u7684 ",(0,s.jsx)(d.code,{children:"go"})," \u6587\u4ef6"]}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.strong,{children:"\u4f8b\u5982"}),"\uff1a"]}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.img,{src:c(46909).A+"",width:"1512",height:"1112"})}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.strong,{children:"\u8bf4\u660e"}),"\uff1a"]}),"\n",(0,s.jsxs)(d.p,{children:["\u6bcf\u4e2a ",(0,s.jsx)(d.code,{children:"api"})," \u6a21\u5757\u4f1a\u751f\u6210\u4e00\u4e2a\u7a7a\u7684\u8be5\u6a21\u5757 ",(0,s.jsx)(d.code,{children:"controller"})," \u4e0b\u7684 ",(0,s.jsx)(d.code,{children:"go"})," \u6587\u4ef6\uff0c\u8be5\u6587\u4ef6\u53ea\u4f1a\u751f\u6210\u4e00\u6b21\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u91cc\u9762\u586b\u5145\u5fc5\u8981\u7684\u9884\u5b9a\u4e49\u4ee3\u7801\u5185\u5bb9\uff0c\u4f8b\u5982\uff0c\u8be5\u6a21\u5757 ",(0,s.jsx)(d.code,{children:"controller"})," \u5185\u90e8\u4f7f\u7528\u7684\u53d8\u91cf\u3001\u5e38\u91cf\u3001\u6570\u636e\u7ed3\u6784\u5b9a\u4e49\uff0c\u6216\u8005\u5305\u521d\u59cb\u5316 ",(0,s.jsx)(d.code,{children:"init"})," \u65b9\u6cd5\u5b9a\u4e49\u7b49\u7b49\u3002 ",(0,s.jsxs)(d.em,{children:["\u6211\u4eec\u63d0\u5021\u597d\u7684\u4ee3\u7801\u7ba1\u7406\u4e60\u60ef\uff0c\u6a21\u5757\u4e0b\u7684 ",(0,s.jsx)(d.strong,{children:"\u9884\u5b9a\u4e49\u5185\u5bb9"})," \u5c3d\u91cf\u7edf\u4e00\u7ef4\u62a4\u5230\u8be5\u6a21\u5757\u4e0b\u4ee5\u6a21\u5757\u540d\u79f0\u547d\u540d\u7684 ",(0,s.jsx)(d.code,{children:"go"})," \u6587\u4ef6\u4e2d\uff08 ",(0,s.jsx)(d.code,{children:"\u6a21\u5757.go"}),"\uff09\uff0c\u800c\u4e0d\u662f\u5206\u6563\u5230\u5404\u4e2a ",(0,s.jsx)(d.code,{children:"go"})," \u6587\u4ef6\u4e2d\uff0c\u4ee5\u4fbf\u4e8e\u66f4\u597d\u5730\u7ef4\u62a4\u4ee3\u7801\u3002"]})]}),"\n",(0,s.jsxs)(d.p,{children:["\u5982\u679c\u8be5 ",(0,s.jsx)(d.code,{children:"controller"})," \u76ee\u524d\u6ca1\u6709\u9700\u8981\u81ea\u5b9a\u4e49\u586b\u5145\u7684\u4ee3\u7801\u5185\u5bb9\uff0c\u90a3\u4e48\u4fdd\u7559\u8be5\u6587\u4ef6\u4e3a\u7a7a\u5373\u53ef\uff0c\u4e3a\u672a\u6765\u9884\u7559\u6269\u5c55\u80fd\u529b\u3002"]})]})}function x(e={}){const{wrapper:d}={...(0,i.R)(),...e.components};return d?(0,s.jsx)(d,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},32974:(e,d,c)=>{c.d(d,{A:()=>n});const n=c.p+"assets/images/01daf12806662ec62913396dbb3b1e1a-896850476e276db9cb7fba0526d3a75e.png"},21537:(e,d,c)=>{c.d(d,{A:()=>n});const n=c.p+"assets/images/235e8d49220f72897f05b3a6ce78a783-af47feea522b31e519dcfbef41cb8b7d.png"},46909:(e,d,c)=>{c.d(d,{A:()=>n});const n=c.p+"assets/images/2630a85245906826878a59a5d6751db0-a2f3a58aea952a5691101361cf80d673.png"},21521:(e,d,c)=>{c.d(d,{A:()=>n});const n=c.p+"assets/images/2b5eb28410bd6067d68c92b7949e68bb-7c6b22a6514d8d9e6f12a8fd8581f868.png"},77553:(e,d,c)=>{c.d(d,{A:()=>n});const n=c.p+"assets/images/5f2a50cba07edda296b3eb2f9b363f6d-d06d6bc2521ff8f6387f69c0085e254c.png"},47089:(e,d,c)=>{c.d(d,{A:()=>n});const n=c.p+"assets/images/8bd39dc6588be2224eae693c58b311ab-cddc3cfe4b549a35c5491e2fdd27debf.png"},96737:(e,d,c)=>{c.d(d,{A:()=>n});const n=c.p+"assets/images/90460e2e27a8db1ab62002cfe957d8e9-7fcc741e9d6a1e53d28170d5cc4238db.png"},47352:(e,d,c)=>{c.d(d,{A:()=>n});const n=c.p+"assets/images/a63382c77a0975b08407887e83ddf588-927bc14651b46f7faf674b3547e9596b.png"},28453:(e,d,c)=>{c.d(d,{R:()=>l,x:()=>r});var n=c(96540);const s={},i=n.createContext(s);function l(e){const d=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function r(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(i.Provider,{value:d},e.children)}}}]);