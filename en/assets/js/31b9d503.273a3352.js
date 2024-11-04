"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[14826],{92523:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>x,frontMatter:()=>l,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"docs/\u6846\u67b6\u8bbe\u8ba1/\u6a21\u5757\u5316\u8bbe\u8ba1","title":"\u6a21\u5757\u5316\u8bbe\u8ba1","description":"\u672c\u7ae0\u8282\u6211\u4eec\u5148\u8bb2\u4e00\u8bb2\u5728\u8f6f\u4ef6\u8bbe\u8ba1\u4e2d\uff0c\u6a21\u5757\u5316\u7684\u4e00\u4e9b\u8bbe\u8ba1\u548c\u590d\u7528\u539f\u5219\uff0c\u7136\u540e\u518d\u4ecb\u7ecd GoFrame \u6846\u67b6\u7684\u6a21\u5757\u5316\u8bbe\u8ba1\uff0c\u4ee5\u4fbf\u4e8e\u5927\u5bb6\u66f4\u597d\u5730\u4e86\u89e3 GoFrame \u6846\u67b6\u6a21\u5757\u5316\u8bbe\u8ba1\u7684\u601d\u60f3\u3002","source":"@site/docs/docs/\u6846\u67b6\u8bbe\u8ba1/\u6a21\u5757\u5316\u8bbe\u8ba1.md","sourceDirName":"docs/\u6846\u67b6\u8bbe\u8ba1","slug":"/docs/design/modular","permalink":"/en/docs/design/modular","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6846\u67b6\u8bbe\u8ba1/\u6a21\u5757\u5316\u8bbe\u8ba1.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730724532000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/design/modular","title":"\u6a21\u5757\u5316\u8bbe\u8ba1","sidebar_position":0,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"\u6846\u67b6\u8bbe\u8ba1","permalink":"/en/docs/design"},"next":{"title":"\u7edf\u4e00\u6846\u67b6\u8bbe\u8ba1","permalink":"/en/docs/design/unified"}}');var c=s(74848),d=s(28453);const l={slug:"/docs/design/modular",title:"\u6a21\u5757\u5316\u8bbe\u8ba1",sidebar_position:0,hide_title:!0},r=void 0,o={},h=[{value:"\u4e00\u3001\u4ec0\u4e48\u662f\u6a21\u5757",id:"\u4e00\u4ec0\u4e48\u662f\u6a21\u5757",level:2},{value:"\u4e8c\u3001\u6a21\u5757\u5316\u7684\u76ee\u6807",id:"\u4e8c\u6a21\u5757\u5316\u7684\u76ee\u6807",level:2},{value:"\u4e09\u3001\u6a21\u5757\u590d\u7528\u539f\u5219",id:"\u4e09\u6a21\u5757\u590d\u7528\u539f\u5219",level:2},{value:"<code>REP</code> \u590d\u7528/\u53d1\u5e03\u7b49\u540c\u539f\u5219",id:"rep-\u590d\u7528\u53d1\u5e03\u7b49\u540c\u539f\u5219",level:3},{value:"<code>CCP</code> \u5171\u540c\u95ed\u5305\u539f\u5219",id:"ccp-\u5171\u540c\u95ed\u5305\u539f\u5219",level:3},{value:"<code>CRP</code> \u5171\u540c\u590d\u7528\u539f\u5219",id:"crp-\u5171\u540c\u590d\u7528\u539f\u5219",level:3},{value:"\u590d\u7528\u539f\u5219\u7ade\u4e89\u5173\u7cfb",id:"\u590d\u7528\u539f\u5219\u7ade\u4e89\u5173\u7cfb",level:3},{value:"\u56db\u3001\u6846\u67b6\u6a21\u5757\u8bbe\u8ba1",id:"\u56db\u6846\u67b6\u6a21\u5757\u8bbe\u8ba1",level:2},{value:"\u5355\u4ed3\u5e93\u5305\u8bbe\u8ba1",id:"\u5355\u4ed3\u5e93\u5305\u8bbe\u8ba1",level:3},{value:"\u6a21\u5757\u805a\u5408\u8bbe\u8ba1",id:"\u6a21\u5757\u805a\u5408\u8bbe\u8ba1",level:3},{value:"\u4e94\u3001\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",id:"\u4e94\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",level:2},{value:"1\u3001\u867d\u7136\u6bcf\u4e00\u4e2a\u6a21\u5757\u90fd\u6309\u7167\u4f4e\u8026\u5408\u8bbe\u8ba1\uff0c\u6a21\u5757\u867d\u7136\u53ef\u4ee5\u9009\u62e9\u6027\u5f15\u5165\uff0c\u4f46\u5728\u4f7f\u7528\u65f6\u4e5f\u5f97\u5168\u91cf\u4e0b\u8f7d\u5b8c\u6574\u6846\u67b6\u4ee3\u7801",id:"1\u867d\u7136\u6bcf\u4e00\u4e2a\u6a21\u5757\u90fd\u6309\u7167\u4f4e\u8026\u5408\u8bbe\u8ba1\u6a21\u5757\u867d\u7136\u53ef\u4ee5\u9009\u62e9\u6027\u5f15\u5165\u4f46\u5728\u4f7f\u7528\u65f6\u4e5f\u5f97\u5168\u91cf\u4e0b\u8f7d\u5b8c\u6574\u6846\u67b6\u4ee3\u7801",level:3},{value:"2\u3001\u6846\u67b6\u4e2d\u4efb\u4e00\u6a21\u5757\u7684\u7248\u672c\u53d8\u66f4\u90fd\u4f1a\u5f15\u8d77\u6846\u67b6\u7248\u672c\u7684\u53d1\u5e03\uff0c\u6846\u67b6\u7684\u53d1\u5e03\u9891\u6b21\u662f\u5426\u4f1a\u53d8\u9ad8\uff1f",id:"2\u6846\u67b6\u4e2d\u4efb\u4e00\u6a21\u5757\u7684\u7248\u672c\u53d8\u66f4\u90fd\u4f1a\u5f15\u8d77\u6846\u67b6\u7248\u672c\u7684\u53d1\u5e03\u6846\u67b6\u7684\u53d1\u5e03\u9891\u6b21\u662f\u5426\u4f1a\u53d8\u9ad8",level:3},{value:"3\u3001\u6846\u67b6\u805a\u5408\u5e76\u7ef4\u62a4\u901a\u7528\u6027\u7684\u6838\u5fc3\u6a21\u5757\uff0c\u901a\u7528\u6027\u7684\u6838\u5fc3\u6a21\u5757\u5b9a\u4e49\u662f\u4ec0\u4e48\uff1f",id:"3\u6846\u67b6\u805a\u5408\u5e76\u7ef4\u62a4\u901a\u7528\u6027\u7684\u6838\u5fc3\u6a21\u5757\u901a\u7528\u6027\u7684\u6838\u5fc3\u6a21\u5757\u5b9a\u4e49\u662f\u4ec0\u4e48",level:3},{value:"4\u3001\u6846\u67b6\u4e2d\u5305\u542b\u7684\u6a21\u5757\u591a\uff0c\u4eba\u7684\u7cbe\u529b\u6709\u9650\uff0c\u6211\u89c9\u5f97\u6bcf\u4e2a\u6a21\u5757\u80af\u5b9a\u6ca1\u6709github\u4e0a\u5176\u4ed6\u5355\u5305\u7684\u9879\u76ee\u66f4\u597d",id:"4\u6846\u67b6\u4e2d\u5305\u542b\u7684\u6a21\u5757\u591a\u4eba\u7684\u7cbe\u529b\u6709\u9650\u6211\u89c9\u5f97\u6bcf\u4e2a\u6a21\u5757\u80af\u5b9a\u6ca1\u6709github\u4e0a\u5176\u4ed6\u5355\u5305\u7684\u9879\u76ee\u66f4\u597d",level:3},{value:"5\u3001\u6846\u67b6\u4e2d\u5305\u542b\u7684\u6a21\u5757\u591a\uff0c\u6211\u89c9\u5f97\u6bcf\u4e2a\u6a21\u5757\u7684\u6027\u80fd\u5f80\u5f80\u5c31\u4e0d\u4f1a\u9ad8",id:"5\u6846\u67b6\u4e2d\u5305\u542b\u7684\u6a21\u5757\u591a\u6211\u89c9\u5f97\u6bcf\u4e2a\u6a21\u5757\u7684\u6027\u80fd\u5f80\u5f80\u5c31\u4e0d\u4f1a\u9ad8",level:3}];function t(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:["\u672c\u7ae0\u8282\u6211\u4eec\u5148\u8bb2\u4e00\u8bb2\u5728\u8f6f\u4ef6\u8bbe\u8ba1\u4e2d\uff0c\u6a21\u5757\u5316\u7684\u4e00\u4e9b\u8bbe\u8ba1\u548c\u590d\u7528\u539f\u5219\uff0c\u7136\u540e\u518d\u4ecb\u7ecd ",(0,c.jsx)(n.code,{children:"GoFrame"})," \u6846\u67b6\u7684\u6a21\u5757\u5316\u8bbe\u8ba1\uff0c\u4ee5\u4fbf\u4e8e\u5927\u5bb6\u66f4\u597d\u5730\u4e86\u89e3 ",(0,c.jsx)(n.code,{children:"GoFrame"})," \u6846\u67b6\u6a21\u5757\u5316\u8bbe\u8ba1\u7684\u601d\u60f3\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u4e00\u4ec0\u4e48\u662f\u6a21\u5757",children:"\u4e00\u3001\u4ec0\u4e48\u662f\u6a21\u5757"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u6a21\u5757"})," \u4e5f\u79f0\u4f5c ",(0,c.jsx)(n.strong,{children:"\u7ec4\u4ef6"}),"\uff0c\u662f\u8f6f\u4ef6\u7cfb\u7edf\u4e2d\u53ef\u590d\u7528\u7684\u529f\u80fd\u903b\u8f91\u5c01\u88c5\u5355\u4f4d\u3002\u5728\u4e0d\u540c\u7684\u8f6f\u4ef6\u67b6\u6784\u5c42\u6b21\uff0c\u6a21\u5757\u7684\u6982\u5ff5\u4f1a\u6709\u4e9b\u4e0d\u592a\u4e00\u6837\u3002\u5728\u5f00\u53d1\u6846\u67b6\u5c42\u9762\uff0c\u6a21\u5757\u662f\u67d0\u4e00\u7c7b\u529f\u80fd\u903b\u8f91\u7684\u6700\u5c0f\u5c01\u88c5\u5355\u4f4d\u3002\u5728 ",(0,c.jsx)(n.code,{children:"Golang"})," \u4ee3\u7801\u5c42\u9762\u4e2d\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u5c06 ",(0,c.jsx)(n.code,{children:"package"})," \u79f0\u4f5c\u6a21\u5757\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u4e8c\u6a21\u5757\u5316\u7684\u76ee\u6807",children:"\u4e8c\u3001\u6a21\u5757\u5316\u7684\u76ee\u6807"}),"\n",(0,c.jsxs)(n.p,{children:["\u8f6f\u4ef6\u8fdb\u884c\u6a21\u5757\u5316\u8bbe\u8ba1\u7684\u76ee\u7684\uff0c\u662f\u4e3a\u4e86\u4f7f\u5f97\u8f6f\u4ef6\u529f\u80fd\u903b\u8f91\u5c3d\u53ef\u80fd\u7684 ",(0,c.jsx)(n.strong,{children:"\u89e3\u8026"})," \u548c ",(0,c.jsx)(n.strong,{children:"\u590d\u7528"}),"\uff0c\u7ec8\u6781\u76ee\u6807\u4e5f\u662f\u4e3a\u4e86\u4fdd\u8bc1\u8f6f\u4ef6\u5f00\u53d1\u7ef4\u62a4\u7684\u6548\u7387\u548c\u8d28\u91cf\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u4e09\u6a21\u5757\u590d\u7528\u539f\u5219",children:"\u4e09\u3001\u6a21\u5757\u590d\u7528\u539f\u5219"}),"\n",(0,c.jsxs)(n.h3,{id:"rep-\u590d\u7528\u53d1\u5e03\u7b49\u540c\u539f\u5219",children:[(0,c.jsx)(n.code,{children:"REP"})," \u590d\u7528/\u53d1\u5e03\u7b49\u540c\u539f\u5219"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u590d\u7528/\u53d1\u5e03\u7b49\u540c\u539f\u5219"}),"\uff08 ",(0,c.jsx)(n.code,{children:"Reuse/Release Equivalency Principle"}),"\uff09\uff1a\u8f6f\u4ef6\u590d\u7528\u7684\u6700\u5c0f\u7c92\u5ea6\u5e94\u7b49\u540c\u4e8e\u5176\u53d1\u5e03\u7684\u6700\u5c0f\u7c92\u5ea6\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u76f4\u767d\u5730\u8bf4\uff0c\u5c31\u662f\u8981\u590d\u7528\u4e00\u6bb5\u4ee3\u7801\u5c31\u628a\u5b83\u62bd\u6210\u6a21\u5757\u3002"}),"\n",(0,c.jsxs)(n.h3,{id:"ccp-\u5171\u540c\u95ed\u5305\u539f\u5219",children:[(0,c.jsx)(n.code,{children:"CCP"})," \u5171\u540c\u95ed\u5305\u539f\u5219"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u5171\u540c\u95ed\u5305\u539f\u5219"}),"\uff08 ",(0,c.jsx)(n.code,{children:"Common Closure Principle"}),"\uff09\uff1a\u4e3a\u4e86\u76f8\u540c\u76ee\u7684\u800c\u540c\u65f6\u4fee\u6539\u7684\u7c7b\uff0c\u5e94\u8be5\u653e\u5728\u540c\u4e00\u4e2a\u6a21\u5757\u4e2d\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5bf9\u5927\u90e8\u5206\u5e94\u7528\u7a0b\u5e8f\u800c\u8a00\uff0c ",(0,c.jsx)(n.strong,{children:"\u53ef\u7ef4\u62a4\u6027"})," \u7684\u91cd\u8981\u6027\u8fdc\u8fdc\u5927\u4e8e ",(0,c.jsx)(n.strong,{children:"\u53ef\u590d\u7528\u6027"}),"\uff0c\u7531\u540c\u4e00\u4e2a\u539f\u56e0\u5f15\u8d77\u7684\u4ee3\u7801\u4fee\u6539\uff0c\u6700\u597d\u5728\u540c\u4e00\u4e2a\u6a21\u5757\u4e2d\uff0c\u5982\u679c\u5206\u6563\u5728\u591a\u4e2a\u6a21\u5757\u4e2d\uff0c\u90a3\u4e48\u5f00\u53d1\u3001\u63d0\u4ea4\u3001\u90e8\u7f72\u7684\u6210\u672c\u90fd\u4f1a\u4e0a\u5347\u3002"]}),"\n",(0,c.jsxs)(n.h3,{id:"crp-\u5171\u540c\u590d\u7528\u539f\u5219",children:[(0,c.jsx)(n.code,{children:"CRP"})," \u5171\u540c\u590d\u7528\u539f\u5219"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u5171\u540c\u590d\u7528\u539f\u5219"}),"\uff08 ",(0,c.jsx)(n.code,{children:"Common Reuse Principle"}),"\uff09\uff1a\u4e0d\u8981\u5f3a\u8feb\u4e00\u4e2a\u6a21\u5757\u4f9d\u8d56\u5b83\u4e0d\u9700\u8981\u7684\u4e1c\u897f\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u76f8\u4fe1\u4f60\u4e00\u5b9a\u6709\u8fd9\u79cd\u7ecf\u5386\uff0c\u96c6\u6210\u4e86\u6a21\u5757A\uff0c\u4f46\u6a21\u5757A\u4f9d\u8d56\u4e86\u6a21\u5757B\u3001C\u3002\u5373\u4f7f\u6a21\u5757B\u3001C \u4f60\u5b8c\u5168\u7528\u4e0d\u5230\uff0c\u4e5f\u4e0d\u5f97\u4e0d\u96c6\u6210\u8fdb\u6765\u3002\u8fd9\u662f\u56e0\u4e3a\u4f60\u53ea\u7528\u5230\u4e86\u6a21\u5757A\u7684\u90e8\u5206\u80fd\u529b\uff0c\u6a21\u5757A\u4e2d\u989d\u5916\u7684\u80fd\u529b\u5e26\u6765\u4e86\u989d\u5916\u7684\u4f9d\u8d56\u3002\u5982\u679c\u9075\u5faa\u5171\u540c\u590d\u7528\u539f\u5219\uff0c\u4f60\u9700\u8981\u628aA\u62c6\u5206\uff0c\u53ea\u4fdd\u7559\u4f60\u8981\u7528\u7684\u90e8\u5206\u3002"}),"\n",(0,c.jsx)(n.h3,{id:"\u590d\u7528\u539f\u5219\u7ade\u4e89\u5173\u7cfb",children:"\u590d\u7528\u539f\u5219\u7ade\u4e89\u5173\u7cfb"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"REP"}),"\u3001 ",(0,c.jsx)(n.code,{children:"CCP"}),"\u3001 ",(0,c.jsx)(n.code,{children:"CRP"})," \u4e09\u4e2a\u539f\u5219\u4e4b\u95f4\u5b58\u5728 ",(0,c.jsx)(n.strong,{children:"\u5f7c\u6b64\u7ade\u4e89"})," \u7684\u5173\u7cfb\u3002 ",(0,c.jsx)(n.code,{children:"REP"})," \u548c ",(0,c.jsx)(n.code,{children:"CCP"})," \u662f ",(0,c.jsx)(n.strong,{children:"\u9ecf\u5408\u6027\u539f\u5219"}),"\uff0c\u5b83\u4eec\u4f1a\u8ba9\u6a21\u5757\u53d8\u5f97\u66f4\u5927\uff0c\u800c ",(0,c.jsx)(n.code,{children:"CRP"})," \u539f\u5219\u662f ",(0,c.jsx)(n.strong,{children:"\u6392\u9664\u6027\u539f\u5219"}),"\uff0c\u5b83\u4f1a\u8ba9\u6a21\u5757\u53d8\u5c0f\u3002\u9075\u5b88 ",(0,c.jsx)(n.code,{children:"REP"}),"\u3001 ",(0,c.jsx)(n.code,{children:"CCP"})," \u800c\u5ffd\u7565 ",(0,c.jsx)(n.code,{children:"CRP"})," \uff0c\u5c31\u4f1a\u4f9d\u8d56\u4e86\u592a\u591a\u6ca1\u6709\u7528\u5230\u7684\u6a21\u5757\u548c\u7c7b\uff0c\u800c\u8fd9\u4e9b\u6a21\u5757\u6216\u7c7b\u7684\u53d8\u52a8\u4f1a\u5bfc\u81f4\u4f60\u81ea\u5df1\u7684\u6a21\u5757\u8fdb\u884c\u592a\u591a\u4e0d\u5fc5\u8981\u7684\u53d1\u5e03\uff1b\u9075\u5b88 ",(0,c.jsx)(n.code,{children:"REP"})," \u3001 ",(0,c.jsx)(n.code,{children:"CRP"})," \u800c\u5ffd\u7565 ",(0,c.jsx)(n.code,{children:"CCP"}),"\uff0c\u56e0\u4e3a\u6a21\u5757\u62c6\u5206\u7684\u592a\u7ec6\u4e86\uff0c\u4e00\u4e2a\u9700\u6c42\u53d8\u66f4\u53ef\u80fd\u8981\u6539 ",(0,c.jsx)(n.code,{children:"n"})," \u4e2a\u6a21\u5757\uff0c\u5e26\u6765\u7684\u6210\u672c\u4e5f\u662f\u5de8\u5927\u7684\u3002"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:s(9894).A+"",width:"722",height:"573"})}),"\n",(0,c.jsx)(n.p,{children:"\u56fe2. \u6a21\u5757\u590d\u7528\u539f\u5219\u7ade\u4e89\u5173\u7cfb\u5f20\u529b\u56fe"}),"\n",(0,c.jsxs)(n.p,{children:["\u4f18\u79c0\u7684\u67b6\u6784\u5e08\u5e94\u8be5\u80fd\u5728\u4e0a\u8ff0\u4e09\u89d2\u5f62\u5f20\u529b\u533a\u57df\u4e2d\u5b9a\u4f4d\u4e00\u4e2a\u6700\u9002\u5408\u76ee\u524d\u7814\u53d1\u56e2\u961f\u72b6\u6001\u7684\u4f4d\u7f6e\uff0c\u4f8b\u5982\u5728\u9879\u76ee\u65e9\u671f\uff0c ",(0,c.jsx)(n.code,{children:"CCP"})," \u6bd4 ",(0,c.jsx)(n.code,{children:"REP"})," \u66f4\u91cd\u8981\uff0c\u968f\u7740\u9879\u76ee\u7684\u53d1\u5c55\uff0c\u8fd9\u4e2a\u6700\u5408\u9002\u7684\u4f4d\u7f6e\u4e5f\u8981\u4e0d\u505c\u8c03\u6574\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u56db\u6846\u67b6\u6a21\u5757\u8bbe\u8ba1",children:"\u56db\u3001\u6846\u67b6\u6a21\u5757\u8bbe\u8ba1"}),"\n",(0,c.jsx)(n.p,{children:"\u7ecf\u8fc7\u524d\u9762\u5173\u4e8e\u6a21\u5757\u8bbe\u8ba1\u539f\u5219\u548c\u590d\u7528\u539f\u5219\u7684\u4ecb\u7ecd\uff0c\u6211\u4eec\u5e94\u8be5\u5bf9\u6a21\u5757\u5f00\u53d1\u548c\u7ba1\u7406\u8fd9\u5757\u7684\u539f\u5219\u6709\u4e86\u5927\u6982\u7684\u4e86\u89e3\uff0c\u90a3\u4e48\u6211\u4eec\u63a5\u7740\u4ecb\u7ecd\u6846\u67b6\u7684\u6a21\u5757\u5316\u8bbe\u8ba1\u5c31\u6bd4\u8f83\u5bb9\u6613\u7406\u89e3\u4e86\u3002"}),"\n",(0,c.jsx)(n.h3,{id:"\u5355\u4ed3\u5e93\u5305\u8bbe\u8ba1",children:"\u5355\u4ed3\u5e93\u5305\u8bbe\u8ba1"}),"\n",(0,c.jsxs)(n.p,{children:["\u6839\u636e ",(0,c.jsx)(n.code,{children:"REP"})," \u539f\u5219\u6211\u4eec\u4e86\u89e3\u5230\uff0c\u4e00\u4e2a\u53ef\u590d\u7528\u7684\u6a21\u5757\u662f\u652f\u6301\u72ec\u7acb\u7248\u672c\u7ba1\u7406\u7684\uff0c\u5355\u4ed3\u5e93\u5305\u8bbe\u8ba1\u4e5f\u6b63\u662f\u5982\u6b64\u3002 ",(0,c.jsx)(n.code,{children:"Golang"})," \u4e2d\u5f88\u591a\u8fd9\u6837\u7684\u5355\u4ed3\u5e93\u5305\uff0c\u4e00\u4e2a\u5305\u5c31\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u6a21\u5757\u3002\u5355\u4ed3\u5e93\u5305\u6839\u636e ",(0,c.jsx)(n.code,{children:"CRP"})," \u539f\u5219\u53ef\u4ee5\u518d\u8fdb\u4e00\u6b65\u7684\u7ec6\u5316\u89e3\u8026\u62c6\u5206\u3002\u6211\u4eec\u6765\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u5728\u5f00\u53d1\u590d\u6742\u7684\u4e1a\u52a1\u9879\u76ee\u573a\u666f\u4e0b\uff0c\u5e38\u89c1\u7684\u5305\u4f9d\u8d56\u60c5\u51b5\uff0c\u7c7b\u4f3c\u4e8e\u8fd9\u6837\u7684\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:"module business\n\ngo 1.16\n\nrequire (\n    business.com/golang/strings v1.0.0\n    business.com/golang/config v1.15.0\n    business.com/golang/container v1.1.0\n    business.com/golang/encoding v1.2.0\n    business.com/golang/files v1.2.1\n    business.com/golang/cache v1.7.3\n    business.com/framework/utils v1.30.1\n    github.com/pkg/errors v0.9.0\n    github.com/goorm/orm v1.2.1\n    github.com/goredis/redis v1.7.4\n    github.com/gokafka/kafka v0.1.0\n    github.com/gometrics/metrics v0.3.5\n    github.com/gotracing/tracing v0.8.2\n    github.com/gohttp/http v1.18.1\n    github.com/google/grpc v1.16.1\n    github.com/smith/env v1.0.2\n    github.com/htbj/command v1.1.1\n    github.com/kmlevel1/pool v1.1.4\n    github.com/anolog/logging v1.16.2\n    github.com/bgses123/session v1.5.1\n    github.com/gomytmp/template v1.3.4\n    github.com/govalidation/validate v1.19.2\n    github.com/yetme1/goi18n v0.10.0\n    github.com/convman/convert v1.20.0\n    github.com/google/uuid v1.1.2\n    // ...\n)\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u793a\u4f8b\u4e2d\u7684\u6a21\u5757\u4f9d\u8d56\uff0c\u90fd\u662f\u4e00\u4e9b\u901a\u7528\u6a21\u5757\uff0c\u5927\u90e8\u5206\u4e1a\u52a1\u9879\u76ee\u90fd\u4f1a\u6d89\u53ca\u5230\u3002\u6a21\u5757\u5730\u5740\u662f\u4fbf\u4e8e\u6f14\u793a\u800c\u5199\u7684\u968f\u610f\u5730\u5740\uff0c\u5e76\u4e0d\u4e00\u5b9a\u771f\u5b9e\u5b58\u5728\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"Golang"})," \u5f00\u53d1\u8fc7\u590d\u6742\u4e00\u70b9\u7684\u4e1a\u52a1\u9879\u76ee\u7684\u5c0f\u4f19\u4f34\u4eec\uff0c\u5bf9\u4e8e\u8fd9\u6837\u7684\u573a\u666f\u5927\u5bb6\u4e00\u5b9a\u4e0d\u4f1a\u964c\u751f\u3002\u4e00\u4e2a\u6b63\u5e38\u7684\u8f6f\u4ef6\u4f01\u4e1a\uff0c\u5f80\u5f80\u81f3\u5c11\u6709\u6570\u767e\u4e2a\u8fd9\u6837\u7684\u9879\u76ee\uff0c\u771f\u5b9e\u7684\u6a21\u5757\u4f9d\u8d56\u5173\u7cfb\u6bd4\u8fd9\u91cc\u7684\u4f8b\u5b50\u66f4\u52a0\u590d\u6742\u3002\u5728 ",(0,c.jsx)(n.code,{children:"Golang"})," \u9879\u76ee\u5f00\u53d1\u4e2d\uff0c\u5bf9\u4e8e\u6a21\u5757\u4f9d\u8d56\u7684\u7ef4\u62a4\u6027\u6311\u6218\u662f\u6bd4\u8f83\u5927\u7684\uff0c\u6211\u4eec\u5f80\u5f80\u4f1a\u9047\u5230\u4e00\u4e9b\u75db\u70b9\uff0c\u4e3b\u8981\u7684\u51e0\u70b9\uff1a"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u5b9e\u73b0\u76f8\u540c\u529f\u80fd\u903b\u8f91\u7684\u6a21\u5757\u8f83\u591a\uff0c\u9009\u62e9\u6210\u672c\u589e\u52a0"}),"\n",(0,c.jsx)(n.li,{children:"\u9879\u76ee\u4f9d\u8d56\u7684\u6a21\u5757\u8fc7\u591a\uff0c\u9879\u76ee\u6574\u4f53\u7684\u7a33\u5b9a\u6027\u4f1a\u53d7\u5230\u5f71\u54cd"}),"\n",(0,c.jsx)(n.li,{children:"\u9879\u76ee\u4f9d\u8d56\u7684\u6a21\u5757\u8fc7\u591a\uff0c\u9879\u76ee\u65e0\u4ece\u4e0b\u624b\u662f\u5426\u5e94\u5f53\u5347\u7ea7\u8fd9\u4e9b\u6a21\u5757\u7248\u672c"}),"\n",(0,c.jsxs)(n.li,{children:["\u6a21\u5757\u5206\u6563\u8bbe\u8ba1\uff0c\u4e0d\u6210\u4f53\u7cfb\uff0c\u96be\u4ee5\u7edf\u4e00\u3002\u5177\u4f53\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,c.jsx)(n.a,{href:"/en/docs/design/unified",children:"\u7edf\u4e00\u6846\u67b6\u8bbe\u8ba1"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u73b0\u8eab\u8bf4\u6cd5\u4e3e\u4f8b\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u672c\u5382\u7684\u81ea\u7814\u6a21\u5757\u6709\u6570\u5341\u4e2a\uff0c\u8fd9\u4e9b\u6a21\u5757\u5df2\u7ecf\u88ab\u9891\u7e41\u4f7f\u7528\u904d\u5e03\u5230\u6570\u767e\u4e2a\u4e1a\u52a1\u9879\u76ee\u4e2d\u3002\u6709\u4e00\u6b21\uff0c\u6211\u4eec\u63d0\u4ea4\u4e86\u5bf9\u51e0\u4e2a\u6a21\u5757\u7684 ",(0,c.jsx)(n.code,{children:"bug fix"}),"\uff0c\u5176\u4e2d\u6709\u4e24\u4e2a\u8fd8\u662f\u6bd4\u8f83\u91cd\u8981\u7684 ",(0,c.jsx)(n.code,{children:"bug"}),"\uff0c\u7d27\u63a5\u7740\uff0c\u6211\u4eec\u8981\u6c42\u6240\u6709\u4e1a\u52a1\u9879\u76ee\u5168\u90e8\u5347\u7ea7\u4e00\u4e0b\u5bf9\u5e94\u6a21\u5757\u7684\u7248\u672c\u53f7\uff0c\u5e76\u4e14\u8fd9\u4e9b\u7248\u672c\u53f7\u586b\u5199\u5f97\u52a1\u5fc5\u5c0f\u5fc3\u3002\u5f53\u7136\uff0c\u8fd9\u80af\u5b9a\u4e5f\u4e0d\u662f\u552f\u4e00\u7684\u4e00\u6b21\uff0c\u968f\u540e\u76f8\u540c\u7684\u573a\u666f\u5404\u4f4d\u540c\u5b66\u53ef\u4ee5\u81ea\u884c\u8111\u8865\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u6211\u4eec\u4e5f\u53ef\u4ee5\u9009\u62e9\uff0c\u4e0d\u53bb\u4e3b\u52a8\u63a8\u8fdb\u6240\u6709\u4e1a\u52a1\u9879\u76ee\u5347\u7ea7\u6a21\u5757\uff0c\u53ea\u8981\u9879\u76ee\u8fd8\u6ca1\u6709\u89e6\u53d1\u8fd9\u4e9b ",(0,c.jsx)(n.code,{children:"bug"}),"\uff0c\u90a3\u4e48\u5c31\u7b49\u7740\u4e1a\u52a1\u9879\u76ee\u8e29\u5230\u4e86\u5751\u518d\u7531\u9879\u76ee\u7ec4\u81ea\u884c\u53bb\u5347\u7ea7\u3002\u9886\u5bfc\u5982\u679c\u542c\u5230\u8fd9\u79cd\u89e3\u51b3\u65b9\u6848......\u5404\u4f4d\u540c\u5b66\u518d\u81ea\u884c\u8111\u8865\u4e00\u4e0b\u548c\u8c10\u7684\u573a\u666f\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5176\u5b9e\u8fd9\u79cd\u95ee\u9898\u4e3b\u8981\u7684\u539f\u56e0\uff0c\u8fd8\u662f\u6765\u6e90\u4e8e\u6a21\u5757\u7684\u4e0d\u7a33\u5b9a\uff0c\u6a21\u5757\u4e5f\u662f\u9700\u8981\u4e0d\u505c\u8fed\u4ee3\u6539\u8fdb\u7684\u3002\u9879\u76ee\u4f7f\u7528\u5230\u8fd9\u4e9b\u6a21\u5757\uff0c\u90a3\u4e48\u5c31\u4e0e\u8fd9\u4e9b\u6a21\u5757\u5efa\u7acb\u4e86 ",(0,c.jsx)(n.strong,{children:"\u8026\u5408\u5173\u7cfb"}),"\uff0c\u8026\u5408\u6a21\u5757\u7684\u53d8\u5316\uff0c\u5fc5\u7136\u4f1a\u5f71\u54cd\u5230\u4f9d\u8d56\u7684\u76f8\u5173\u9879\u76ee\u3002\u8d8a\u5e95\u5c42\u7684\u57fa\u7840\u6a21\u5757\uff0c\u9876\u5c42\u6a21\u5757\u5219\u5bf9\u5176\u4f9d\u8d56\u7684\u8d8a\u591a\uff0c\u5f71\u54cd\u9762\u4e5f\u5c31\u8d8a\u5927\u3002\u90a3\u662f\u4e0d\u662f\u53ea\u8981\u6a21\u5757\u7a33\u5b9a\u4e86\uff0c\u5c31\u4e0d\u4f1a\u5b58\u5728\u8fd9\u6837\u7684\u95ee\u9898\u4e86\u5462\uff1f\u98ce\u9669\u4f9d\u65e7\u662f\u5b58\u5728\u7684\u3002 ",(0,c.jsx)(n.code,{children:"Golang"})," \u6807\u51c6\u5e93\u5927\u5bb6\u89c9\u5f97\u7b97\u7a33\u5b9a\u5427\uff0c\u4f46\u662f\u5b83\u4e5f\u662f\u5728\u4e0d\u65ad\u7684\u8fed\u4ee3\u6539\u8fdb\u8fc7\u7a0b\u4e2d\uff0c\u4e5f\u662f\u4e0d\u65ad\u6709 ",(0,c.jsx)(n.code,{children:"bug"})," \u51fa\u73b0\uff0c\u53ea\u662f\u5927\u5bb6\u5e78\u8fd0\u6ca1\u8e29\u4e0a\u53bb\u800c\u5df2\uff0c\u98ce\u9669\u76f8\u5bf9\u8f83\u4f4e\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u597d\u7684\u8f6f\u4ef6\u8bbe\u8ba1\uff0c\u5e76\u4e0d\u662f\u4e00\u6210\u4e0d\u53d8\uff0c\u800c\u662f\u80fd\u591f\u505a\u5230\u5feb\u901f\u54cd\u5e94\u53d8\u5316\uff0c\u6839\u636e\u53d8\u5316\u5feb\u901f\u6539\u8fdb\u5b8c\u5584\u3002\u6a21\u5757\u7684\u8bbe\u8ba1\u548c\u7ba1\u7406\uff0c\u4ea6\u662f\u5982\u6b64\u3002\u5bfb\u6c42\u80fd\u591f\u5feb\u901f\u6539\u8fdb\u6a21\u5757\u903b\u8f91\u3001\u6709\u6548\u7ef4\u62a4\u6a21\u5757\u4f9d\u8d56\u7684\u65b9\u6848\uff0c\u6bd4\u7f16\u5199\u66f4\u52a0\u7a33\u5b9a\u7684\u529f\u80fd\u6a21\u5757\uff0c\u66f4\u52a0\u9ad8\u6548\u548c\u52a1\u5b9e\u3002"}),"\n",(0,c.jsx)(n.h3,{id:"\u6a21\u5757\u805a\u5408\u8bbe\u8ba1",children:"\u6a21\u5757\u805a\u5408\u8bbe\u8ba1"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"GoFrame"})," \u7684\u6a21\u5757\u5316\u7ba1\u7406\u601d\u60f3\u66f4\u504f\u91cd\u4e8e ",(0,c.jsx)(n.code,{children:"CCP"})," \u539f\u5219\uff0c\u770b\u91cd ",(0,c.jsx)(n.strong,{children:"\u53ef\u7ef4\u62a4\u6027"})," \u6bd4 ",(0,c.jsx)(n.strong,{children:"\u53ef\u590d\u7528\u6027"})," \u66f4\u591a\u3002\u7531\u4e8e ",(0,c.jsx)(n.code,{children:"GoFrame"})," \u662f\u57fa\u4e8e ",(0,c.jsx)(n.strong,{children:"\u5f00\u53d1\u6846\u67b6"})," \u5c42\u9762\u7684\u51fa\u53d1\u70b9\u8003\u8651\uff0c\u56e0\u6b64\u6574\u4f53\u6846\u67b6\u7684\u8bbe\u8ba1\u4e0d\u662f\u5355\u70b9\u8bbe\u8ba1\u7684\uff0c\u800c\u662f\u81ea\u9876\u5411\u4e0b\u8bbe\u8ba1\u7684\u3002\u524d\u9762\u6709\u63d0\u5230\uff0c\u8d8a\u5e95\u5c42\u7684\u57fa\u7840\u6a21\u5757\uff0c\u9876\u5c42\u6a21\u5757\u5219\u5bf9\u5176\u4f9d\u8d56\u7684\u8d8a\u591a\uff0c\u5f71\u54cd\u9762\u4e5f\u5c31\u8d8a\u5927\u3002\u56e0\u6b64\uff0c\u6846\u67b6\u5c06\u4e00\u4e9b ",(0,c.jsx)(n.strong,{children:"\u901a\u7528\u6027\u7684\u6838\u5fc3\u6a21\u5757"})," \u8fdb\u884c\u7edf\u4e00\u7ef4\u62a4\uff0c\u8fd9\u6837\u505a\u7684\u76ee\u7684\u662f\u4f7f\u5f97\u8fd9\u4e9b\u6a21\u5757\u5171\u540c\u5f62\u6210\u95ed\u5305\uff0c\u4fdd\u8bc1\u57fa\u7840\u6a21\u5757\u7684\u7a33\u5b9a\u6027\uff0c\u5e76\u901a\u8fc7\u7edf\u4e00\u7684\u7248\u672c\u7ba1\u7406\uff0c\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\u548c\u53ef\u7ef4\u62a4\u6027\uff0c\u964d\u4f4e\u63a5\u5165\u548c\u7ef4\u62a4\u6210\u672c\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u7ad9\u5728 ",(0,c.jsx)(n.code,{children:"GoFrame"})," \u6846\u67b6\u6a21\u5757\u5316\u8bbe\u8ba1\u7684\u89d2\u5ea6\uff0c\u524d\u9762\u4f8b\u5b50\u4e2d\u7684\u4f9d\u8d56\u60c5\u51b5\u5e94\u5f53\u53d8\u6210\u4ee5\u4e0b\u7684\u6837\u5b50\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:"module business\n\ngo 1.16\n\nrequire (\n    github.com/gogf/gf v1.16.0\n    github.com/goorm/orm v1.15.1\n    github.com/goredis/redis v1.7.4\n    github.com/gokafka/kafka v0.1.0\n    github.com/google/grpc v1.16.1\n    // ...\n)\n"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"GoFrame"})," \u53ea\u7ef4\u62a4\u4e00\u4e9b\u901a\u7528\u6027\u7684\u6838\u5fc3\u6a21\u5757\uff0c\u5176\u4ed6\u975e\u901a\u7528\u6838\u5fc3\u6a21\u5757\u6216\u8005\u7a33\u5b9a\u6027\u8f83\u9ad8\u7684\u6a21\u5757\uff0c\u4f9d\u65e7\u5efa\u8bae\u4f7f\u7528\u5355\u4ed3\u5e93\u5305\u7684\u5f62\u5f0f\u8fdb\u884c\u4f9d\u8d56\u5f15\u5165\uff0c\u6b63\u5982 ",(0,c.jsx)(n.code,{children:"REP"})," \u548c ",(0,c.jsx)(n.code,{children:"CRP"})," \u6a21\u5757\u590d\u7528\u539f\u5219\u5021\u5bfc\u7684\u90a3\u6837\u3002\u5728\u8fd9\u79cd\u8bbe\u8ba1\u6a21\u5f0f\u4e0b\uff1a"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u6846\u67b6\u6838\u5fc3\u7ef4\u62a4\u8f83\u5168\u9762\u7684\u901a\u7528\u57fa\u7840\u6a21\u5757\uff0c\u964d\u4f4e\u57fa\u7840\u6a21\u5757\u9009\u62e9\u6210\u672c"}),"\n",(0,c.jsx)(n.li,{children:"\u6211\u4eec\u53ea\u9700\u8981\u7ef4\u62a4\u4e00\u4e2a\u7edf\u4e00\u7684\u6846\u67b6\u7248\u672c\uff0c\u800c\u4e0d\u662f\u6570\u5341\u4e2a\u6a21\u5757\u7248\u672c"}),"\n",(0,c.jsx)(n.li,{children:"\u6211\u4eec\u53ea\u9700\u8981\u4e86\u89e3\u4e00\u4e2a\u6846\u67b6\u7684\u5185\u5bb9\u53d8\u5316\uff0c\u800c\u4e0d\u662f\u6570\u5341\u4e2a\u6a21\u5757\u7684\u5185\u5bb9\u53d8\u5316"}),"\n",(0,c.jsx)(n.li,{children:"\u5347\u7ea7\u7684\u65f6\u5019\u53ea\u9700\u8981\u5347\u7ea7\u4e00\u4e2a\u6846\u67b6\u7248\u672c\uff0c\u800c\u4e0d\u662f\u6570\u5341\u4e2a\u6a21\u5757\u7248\u672c\u7684\u5347\u7ea7"}),"\n",(0,c.jsx)(n.li,{children:"\u51cf\u8f7b\u5f00\u53d1\u4eba\u5458\u7684\u5fc3\u667a\u8d1f\u62c5\uff0c\u63d0\u9ad8\u6a21\u5757\u53ef\u7ef4\u62a4\u6027\uff0c\u66f4\u5bb9\u6613\u4fdd\u8bc1\u5404\u4e1a\u52a1\u9879\u76ee\u7684\u6a21\u5757\u7248\u672c\u4e00\u81f4\u6027"}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u4e94\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",children:"\u4e94\u3001\u5e38\u89c1\u95ee\u9898\u89e3\u7b54"}),"\n",(0,c.jsx)(n.h3,{id:"1\u867d\u7136\u6bcf\u4e00\u4e2a\u6a21\u5757\u90fd\u6309\u7167\u4f4e\u8026\u5408\u8bbe\u8ba1\u6a21\u5757\u867d\u7136\u53ef\u4ee5\u9009\u62e9\u6027\u5f15\u5165\u4f46\u5728\u4f7f\u7528\u65f6\u4e5f\u5f97\u5168\u91cf\u4e0b\u8f7d\u5b8c\u6574\u6846\u67b6\u4ee3\u7801",children:"1\u3001\u867d\u7136\u6bcf\u4e00\u4e2a\u6a21\u5757\u90fd\u6309\u7167\u4f4e\u8026\u5408\u8bbe\u8ba1\uff0c\u6a21\u5757\u867d\u7136\u53ef\u4ee5\u9009\u62e9\u6027\u5f15\u5165\uff0c\u4f46\u5728\u4f7f\u7528\u65f6\u4e5f\u5f97\u5168\u91cf\u4e0b\u8f7d\u5b8c\u6574\u6846\u67b6\u4ee3\u7801"}),"\n",(0,c.jsxs)(n.p,{children:["\u8fd9\u5bf9\u7f16\u8bd1\u578b\u5f00\u53d1\u8bed\u8a00\u6765\u8bf4\u5e76\u4e0d\u662f\u95ee\u9898\uff0c ",(0,c.jsx)(n.strong,{children:"\u6587\u4ef6\u5c42\u9762\u7684\u6e90\u6587\u4ef6\u4e0b\u8f7d\u4e0e\u6a21\u5757\u4e4b\u95f4\u7684\u903b\u8f91\u8026\u5408\u6ca1\u6709\u76f4\u63a5\u5173\u7cfb"}),"\u3002\u8fd9\u4e2a\u95ee\u9898\u7684\u6839\u56e0\uff0c\u4e3b\u8981\u662f\u6765\u6e90\u4e8e\u6211\u4eec\u5bf9 ",(0,c.jsx)(n.strong,{children:"\u7f16\u8bd1\u578b\u8bed\u8a00"})," \u548c ",(0,c.jsx)(n.strong,{children:"\u89e3\u91ca\u578b\u8bed\u8a00"})," \u7406\u89e3\u7684\u601d\u8def\u4e0d\u4e00\u6837\u3002\u5728\u4e92\u8054\u7f51\u65f6\u4ee3\uff0c\u89e3\u91ca\u578b\u8bed\u8a00\u5927\u884c\u5176\u9053\uff0c\u800cGolang\u8bed\u8a00\u5728\u8fd9\u4e2a\u65f6\u4ee3\u5e7f\u53d7\u6b22\u8fce\u7684\u540c\u65f6\u5374\u53c8\u72ec\u6811\u65d7\u5e1c\u3002"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:s(92015).A+"",width:"2126",height:"614"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"\u7f16\u8bd1\u578b\u8bed\u8a00"}),"\uff1a\uff08\u4ee5\u9759\u6001\u7f16\u8bd1\u4e3a\u4f8b\uff09\u5f80\u5f80\u4ee5 ",(0,c.jsx)(n.code,{children:"main"})," \u5305\u4e3a\u5165\u53e3\uff0c\u7f16\u8bd1\u5668\u4f1a\u81ea\u52a8\u5206\u6790\u6e90\u7801\u5e76\u5c06\u6240\u6709\u903b\u8f91\u4f9d\u8d56\u6a21\u5757\u4e2d\u5bf9\u5e94\u7684\u8d44\u6e90\u8fdb\u884c\u7f16\u8bd1\u5904\u7406\uff0c\u6700\u7ec8\u751f\u6210\u4e3a\u9759\u6001\u4e8c\u8fdb\u5236\u6587\u4ef6\u8fdb\u884c\u53d1\u5e03\uff0c\u81ea\u8eab\u6e90\u6587\u4ef6\u4ee5\u53ca\u4f9d\u8d56\u6a21\u5757\uff08\u903b\u8f91\u4f9d\u8d56\uff09\u7684\u6e90\u6587\u4ef6\u53ea\u5728\u7f16\u8bd1\u9636\u6bb5\u4f7f\u7528\uff0c\u6e90\u7801\u6587\u4ef6\u5e76\u4e0d\u4f1a\u76f4\u63a5\u7528\u4e8e\u53d1\u5e03\uff0c\u5982\uff1aC/C++\u3001Golang\u3001Rust\u7b49\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"\u89e3\u91ca\u578b\u8bed\u8a00"}),'\uff1a\u5f80\u5f80\u4f1a\u5c06\u81ea\u8eab\u6e90\u6587\u4ef6\uff08\u6216\u4e2d\u95f4\u7801\uff09\u4ee5\u53ca\u4f9d\u8d56\u6a21\u5757\u7684\u6e90\u6587\u4ef6\uff08\u6216\u4e2d\u95f4\u7801\uff09\u5168\u90e8\u8fdb\u884c\u6253\u5305\u53d1\u5e03\uff0c\u4f8b\u5982\uff1aPHP\u3001Java\u3001NodeJS\u3001Python\u7b49\u3002\u8fd9\u4e2a\u65f6\u5019\uff0c\u4f9d\u8d56\u6a21\u5757\u7684\u6e90\u7801\u5927\u5c0f\u5bf9\u4e8e\u9879\u76ee\u53d1\u5e03\u6765\u8bf4\u5f71\u54cd\u4f1a\u6bd4\u8f83\u5927\u3002\u5e76\u4e14\uff0c\u6253\u5305\u65f6\u5019\u7684\u6a21\u5757\u4f9d\u8d56\u5904\u7406\u5e76\u4e0d\u4f1a\u68c0\u67e5"\u903b\u8f91\u4f9d\u8d56"\uff0c\u53ea\u8981\u4f9d\u8d56\u914d\u7f6e\u6587\u4ef6\u4e2d\u5b58\u5728\u6307\u5b9a\u6a21\u5757\uff0c\u90a3\u4e48\u8be5\u6a21\u5757\u90fd\u4f1a\u88ab\u5171\u540c\u6253\u5305\u53d1\u5e03\u3002\u5047\u5982\u6a21\u5757\u4e2d\u670910\u4e07\u4e2a\u51fd\u6570\uff0c\u5373\u4f7f\u5176\u4e2d\u53ea\u6709\u4e00\u4e2a\u51fd\u6570\u88ab\u4f7f\u7528\u5230\uff0c\u8be5\u6a21\u5757\u6240\u6709\u51fd\u6570\u5c06\u88ab\u5171\u540c\u6253\u5305\u53d1\u5e03\u3002\u56e0\u4e3a\u89e3\u91ca\u578b\u8bed\u8a00\u5728\u4ee3\u7801\u53d1\u5e03\u524d\u5e76\u6ca1\u6709"\u7f16\u8bd1-\u6c47\u7f16-\u94fe\u63a5"\u7b49\u9636\u6bb5\uff0c\u53ea\u80fd\u5728\u8fd0\u884c\u65f6\u5bf9\u6e90\u7801\u53ca\u6a21\u5757\u4f9d\u8d56\u505a\u5b8c\u6574\u89e3\u6790\u5904\u7406\u3002\u7279\u522b\u662fPHP/Java\u8f6cGo\u7684\u540c\u5b66\uff0c\u8fd9\u4e00\u5757\u7684\u601d\u7ef4\u9700\u8981\u8f6c\u53d8\u9002\u5e94\u3002']}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"2\u6846\u67b6\u4e2d\u4efb\u4e00\u6a21\u5757\u7684\u7248\u672c\u53d8\u66f4\u90fd\u4f1a\u5f15\u8d77\u6846\u67b6\u7248\u672c\u7684\u53d1\u5e03\u6846\u67b6\u7684\u53d1\u5e03\u9891\u6b21\u662f\u5426\u4f1a\u53d8\u9ad8",children:"2\u3001\u6846\u67b6\u4e2d\u4efb\u4e00\u6a21\u5757\u7684\u7248\u672c\u53d8\u66f4\u90fd\u4f1a\u5f15\u8d77\u6846\u67b6\u7248\u672c\u7684\u53d1\u5e03\uff0c\u6846\u67b6\u7684\u53d1\u5e03\u9891\u6b21\u662f\u5426\u4f1a\u53d8\u9ad8\uff1f"}),"\n",(0,c.jsxs)(n.p,{children:["\u5f53\u7136\uff0c\u6846\u67b6\u7684\u6a21\u5757\u8bbe\u8ba1\u4e5f\u4f1a\u5145\u5206\u8003\u8651\u7a33\u5b9a\u6027\u56e0\u7d20\uff0c\u4ec5\u4f1a\u5c06\u4e00\u4e9b ",(0,c.jsx)(n.strong,{children:"\u901a\u7528\u6027\u7684\u6838\u5fc3\u6a21\u5757"})," \u6309\u7167 ",(0,c.jsx)(n.code,{children:"CCP"})," \u8fdb\u884c\u7ba1\u7406\uff0c\u5e76\u4e0d\u4f1a\u5305\u542b\u7279\u5b9a\u4e1a\u52a1\u7684\u903b\u8f91\u5c01\u88c5\uff0c\u56e0\u4e3a\u6d89\u53ca\u5230\u7279\u5b9a\u4e1a\u52a1\u7684\u529f\u80fd\u903b\u8f91\u5b9e\u73b0\u5c06\u4f1a\u4e3a\u6846\u67b6\u6a21\u5757\u5e26\u6765\u66f4\u591a\u7684\u4e0d\u7a33\u5b9a\u53d8\u5316\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u4fdd\u8bc1\u4e00\u5b9a\u7684\u7a33\u5b9a\u6027\u524d\u63d0\u4e0b\uff0c\u6a21\u5757\u7684\u7248\u672c\u53d1\u5e03\u6309\u7167\u6846\u67b6\u7edf\u4e00\u7684\u8fed\u4ee3\u5f00\u53d1\u8ba1\u5212\u8fdb\u884c\uff0c\u9664\u4e86\u5fc5\u8981\u7684 ",(0,c.jsx)(n.code,{children:"hot fix"})," \u4e4b\u5916\uff0c\u7248\u672c\u53d1\u5e03\u8bbe\u7f6e\u6709\u56fa\u5b9a\u7684\u65f6\u95f4\u7a97\u53e3\uff0c\u4ee5\u4fdd\u8bc1\u6846\u67b6\u6838\u5fc3\u7684\u7a33\u5b9a\u6027\u3002\u56e0\u6b64\uff0c\u6846\u67b6\u901a\u8fc7\u6a21\u5757\u805a\u5408\u7684\u65b9\u5f0f\u8fdb\u884c\u7248\u672c\u7ba1\u7406\uff0c\u4e0d\u4ec5\u6ca1\u6709\u589e\u52a0\u6846\u67b6\u7684\u7248\u672c\u53d1\u5e03\u9891\u6b21\uff0c\u53cd\u800c\u964d\u4f4e\u4e86\u6846\u67b6\u7684\u7248\u672c\u53d1\u5e03\u9891\u6b21\uff0c\u4f7f\u5f97\u6846\u67b6\u4e2d\u7684\u6a21\u5757\u7248\u672c\u66f4\u52a0\u7a33\u5b9a\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"3\u6846\u67b6\u805a\u5408\u5e76\u7ef4\u62a4\u901a\u7528\u6027\u7684\u6838\u5fc3\u6a21\u5757\u901a\u7528\u6027\u7684\u6838\u5fc3\u6a21\u5757\u5b9a\u4e49\u662f\u4ec0\u4e48",children:"3\u3001\u6846\u67b6\u805a\u5408\u5e76\u7ef4\u62a4\u901a\u7528\u6027\u7684\u6838\u5fc3\u6a21\u5757\uff0c\u901a\u7528\u6027\u7684\u6838\u5fc3\u6a21\u5757\u5b9a\u4e49\u662f\u4ec0\u4e48\uff1f"}),"\n",(0,c.jsxs)(n.p,{children:["\u9996\u5148\uff0c\u5b83\u4eec\u662f ",(0,c.jsx)(n.strong,{children:"\u57fa\u7840\u6a21\u5757"}),"\uff0c\u5f80\u5f80\u4f4d\u4e8e\u6a21\u5757\u4f9d\u8d56\u94fe\u7684\u6700\u5e95\u5c42\uff0c\u8fd9\u90e8\u5206\u7684\u6a21\u5757\u53d8\u5316\u5bf9\u9879\u76ee\u7a33\u5b9a\u6027\u5f71\u54cd\u6700\u5927\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u5176\u6b21\uff0c\u7edd\u5927\u90e8\u5206\u9879\u76ee\uff08\u4e8c\u516b\u5b9a\u5f8b\uff09\u90fd\u4f1a\u4f9d\u8d56\u7684\u901a\u7528\u6027\u57fa\u7840\u6a21\u5757\uff0c\u53ef\u4ee5\u79f0\u4f5c\u6838\u5fc3\u6a21\u5757\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u6700\u540e\uff0c\u8fd9\u90e8\u5206\u6a21\u5757\u4e0d\u5305\u542b\u5177\u4f53\u7684 ",(0,c.jsx)(n.strong,{children:"\u4e1a\u52a1\u5c01\u88c5\u5b9e\u73b0"}),"\u3002\u53cd\u4f8b\u5982\uff1a\u5fae\u4fe1\u516c\u4f17\u53f7/\u5c0f\u7a0b\u5e8f\u3001CMS/CRM\u3001\u533a\u5757\u94fe\u7b49\u76f8\u5173\u6a21\u5757\u90fd\u662f\u5177\u4f53\u4e1a\u52a1\u5b9e\u73b0\u5c01\u88c5\u3002"]}),"\n",(0,c.jsx)(n.admonition,{type:"tip",children:(0,c.jsx)(n.p,{children:"\u5173\u4e8e\u6a21\u5757\u901a\u7528\u6027\u7684\u8bc4\u4f30\u65e0\u6cd5\u5b8c\u5168\u51c6\u786e\uff0c\u6846\u67b6\u4e3a\u4fdd\u8bc1\u6838\u5fc3\u7cbe\u7b80\u4f1a\u5c3d\u53ef\u80fd\u6301\u4fdd\u5b88\u6001\u5ea6\uff0c\u5e76\u4e14\u4f1a\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u5728\u672a\u6765\u7684\u8fed\u4ee3\u4e2d\u9010\u6b65\u505a\u8c03\u6574\u3002"})}),"\n",(0,c.jsx)(n.p,{children:"\u4ee5\u4e0b\u4e3a\u53ef\u4f9b\u53c2\u8003\u7684\u6a21\u5757\u5206\u5c42\uff1a"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:s(91731).A+"",width:"602",height:"722"})}),"\n",(0,c.jsx)(n.p,{children:"\u6a21\u5757\u5206\u5c42\u53c2\u8003"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u4e1a\u52a1\u5b9e\u73b0\u6a21\u5757"}),"\uff1a\u7279\u5b9a\u4e1a\u52a1\u9879\u76ee\u903b\u8f91\u5b9e\u73b0\uff0c\u8fd9\u91cc\u5305\u542b\u4e1a\u52a1\u9879\u76ee\u8fdb\u4e00\u6b65\u7684\u4ee3\u7801\u5206\u5c42\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u901a\u7528\u4e1a\u52a1\u6a21\u5757"}),"\uff1a\u53ef\u590d\u7528\u7684\u4e1a\u52a1\u903b\u8f91\u5c01\u88c5\uff0c\u4f8b\u5982\u5fae\u4fe1\u516c\u4f17\u53f7/\u5c0f\u7a0b\u5e8f\u3001CMS/CRM\u3001\u533a\u5757\u94fe\u7b49\u76f8\u5173\u4e1a\u52a1\u903b\u8f91\u5c01\u88c5\u6a21\u5757\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u901a\u7528\u57fa\u7840\u6a21\u5757"}),"\uff1a\u6807\u51c6\u5e93\u4e0d\u63d0\u4f9b\u6216\u8005\u57fa\u4e8e\u6807\u51c6\u5e93\u5c01\u88c5\u6269\u5c55\u7684\u57fa\u7840\u6a21\u5757\uff0c\u4f8b\u5982\uff1a\u914d\u7f6e\u3001\u6821\u9a8c\u3001\u7f13\u5b58\u3001ORM\u3001I18N\u7b49\u7b49\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u6807\u51c6\u57fa\u7840\u6a21\u5757"}),"\uff1aGolang\u6807\u51c6\u5e93\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"4\u6846\u67b6\u4e2d\u5305\u542b\u7684\u6a21\u5757\u591a\u4eba\u7684\u7cbe\u529b\u6709\u9650\u6211\u89c9\u5f97\u6bcf\u4e2a\u6a21\u5757\u80af\u5b9a\u6ca1\u6709github\u4e0a\u5176\u4ed6\u5355\u5305\u7684\u9879\u76ee\u66f4\u597d",children:"4\u3001\u6846\u67b6\u4e2d\u5305\u542b\u7684\u6a21\u5757\u591a\uff0c\u4eba\u7684\u7cbe\u529b\u6709\u9650\uff0c\u6211\u89c9\u5f97\u6bcf\u4e2a\u6a21\u5757\u80af\u5b9a\u6ca1\u6709github\u4e0a\u5176\u4ed6\u5355\u5305\u7684\u9879\u76ee\u66f4\u597d"}),"\n",(0,c.jsx)(n.p,{children:'\u4e00\u4ef6\u4e8b\u60c5\u505a\u5f97\u5c11\u5e76\u4e0d\u5c31\u80fd\u505a\u5f97"\u597d"\uff0c\u8fd9\u4e24\u4e2a\u903b\u8f91\u4e4b\u95f4\u6ca1\u6709\u5fc5\u7136\u5173\u7cfb\u3002'}),"\n",(0,c.jsx)(n.h3,{id:"5\u6846\u67b6\u4e2d\u5305\u542b\u7684\u6a21\u5757\u591a\u6211\u89c9\u5f97\u6bcf\u4e2a\u6a21\u5757\u7684\u6027\u80fd\u5f80\u5f80\u5c31\u4e0d\u4f1a\u9ad8",children:"5\u3001\u6846\u67b6\u4e2d\u5305\u542b\u7684\u6a21\u5757\u591a\uff0c\u6211\u89c9\u5f97\u6bcf\u4e2a\u6a21\u5757\u7684\u6027\u80fd\u5f80\u5f80\u5c31\u4e0d\u4f1a\u9ad8"}),"\n",(0,c.jsx)(n.p,{children:"\u54c8\u54c8\u3002"})]})}function x(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(t,{...e})}):t(e)}},92015:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/7b9d58a737b0340d95454312801c3c0e-b8cb2961af5c7a177ac7118eaedb225e.png"},9894:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/bcfbb9253aefc770b284cc0c67ae68b8-71878511e0a3d271a2fd316e2ed94e76.png"},91731:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/f48e08aa60bb126bb41953bcbe98b438-1b5831687661321f35f0f20a8d9ccfcc.png"},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>r});var i=s(96540);const c={},d=i.createContext(c);function l(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);