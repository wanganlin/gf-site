"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[25942],{57447:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>a,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=t(74848),c=t(28453);const s={slug:"/core/gconv",title:"\u7c7b\u578b\u8f6c\u6362",sidebar_position:7,hide_title:!0},r=void 0,i={id:"\u6838\u5fc3\u7ec4\u4ef6/\u7c7b\u578b\u8f6c\u6362/\u7c7b\u578b\u8f6c\u6362",title:"\u7c7b\u578b\u8f6c\u6362",description:"\u57fa\u672c\u4ecb\u7ecd",source:"@site/docs/\u6838\u5fc3\u7ec4\u4ef6/\u7c7b\u578b\u8f6c\u6362/\u7c7b\u578b\u8f6c\u6362.md",sourceDirName:"\u6838\u5fc3\u7ec4\u4ef6/\u7c7b\u578b\u8f6c\u6362",slug:"/core/gconv",permalink:"/en/docs/core/gconv",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/docs/\u6838\u5fc3\u7ec4\u4ef6/\u7c7b\u578b\u8f6c\u6362/\u7c7b\u578b\u8f6c\u6362.md",tags:[],version:"current",lastUpdatedBy:"John",lastUpdatedAt:173036553e4,sidebarPosition:7,frontMatter:{slug:"/core/gconv",title:"\u7c7b\u578b\u8f6c\u6362",sidebar_position:7,hide_title:!0},sidebar:"hiddenSidebar",previous:{title:"\u6570\u636e\u6821\u9a8c-\u5e38\u89c1\u95ee\u9898",permalink:"/en/docs/core/gvalid/faq"},next:{title:"\u7c7b\u578b\u8f6c\u6362-\u57fa\u672c\u7c7b\u578b",permalink:"/en/docs/core/gconv/basic"}},d={},l=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2}];function g(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"GoFrame"})," \u6846\u67b6\u63d0\u4f9b\u4e86\u975e\u5e38\u5f3a\u5927\u6613\u7528\u7684\u7c7b\u578b\u8f6c\u6362\u5305 ",(0,o.jsx)(n.code,{children:"gconv"}),"\uff0c\u53ef\u4ee5\u5b9e\u73b0\u5c06\u5e38\u7528\u6570\u636e\u7c7b\u578b\u8f6c\u6362\u4e3a\u6307\u5b9a\u7684\u6570\u636e\u7c7b\u578b\uff0c\u5bf9\u5e38\u7528\u57fa\u672c\u6570\u636e\u7c7b\u578b\u4e4b\u95f4\u7684\u65e0\u7f1d\u8f6c\u6362\uff0c\u540c\u65f6\u4e5f\u652f\u6301\u4efb\u610f\u7c7b\u578b\u5230 ",(0,o.jsx)(n.code,{children:"struct"})," \u5bf9\u8c61\u7684\u8f6c\u6362\u3002\u7531\u4e8e ",(0,o.jsx)(n.code,{children:"gconv"})," \u6a21\u5757\u5185\u90e8\u5927\u91cf\u4f18\u5148\u4f7f\u7528\u4e86\u65ad\u8a00\u800c\u975e\u53cd\u5c04\uff0c\u56e0\u6b64\u6267\u884c\u7684\u6548\u7387\u975e\u5e38\u9ad8\u3002"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"\u6ce8\u610f\u4e8b\u9879\uff1a"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"gconv"})," \u5305\u7684\u4e3b\u8981\u76ee\u6807\u662f\u63d0\u4f9b\u7b80\u4fbf\u4e14\u9ad8\u6548\u7684\u7c7b\u578b\u8f6c\u6362\u529f\u80fd\uff0c\u5f00\u53d1\u8005\u5e94\u5f53\u6ce8\u610f\u8f6c\u6362\u7684\u8f93\u5165\u53c2\u6570\u4ee5\u53ca\u5f53\u524d\u4f7f\u7528\u7684\u4e1a\u52a1\u573a\u666f\uff0c\u90e8\u5206\u65b9\u6cd5\u5982\u679c\u8f6c\u6362\u5931\u8d25\uff0c\u90a3\u4e48\u65b9\u6cd5\u5e76\u4e0d\u4f1a\u8fd4\u56de\u9519\u8bef\u539f\u56e0\uff0c\u4e5f\u4e0d\u4f1a\u4ea7\u751f ",(0,o.jsx)(n.code,{children:"panic"}),"\uff0c\u800c\u662f\u76f4\u63a5\u4ee5\u8f6c\u6362\u5931\u8d25\u540e\u7684\u6570\u503c\u8fd4\u56de\u3002\u56e0\u6b64\uff0c\u5f00\u53d1\u8005\u5f80\u5f80\u9700\u8981\u7ed3\u5408\u8fd4\u56de\u503c\u4ee5\u53ca\u5f53\u524d\u4f7f\u7528\u7684\u4e1a\u52a1\u573a\u666f\u6765\u7efc\u5408\u5224\u65ad\u7ed3\u679c\u7684\u6b63\u786e\u6027\u3002"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"\u4f7f\u7528\u65b9\u5f0f\uff1a"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/util/gconv"\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/util/gconv",children:"https://pkg.go.dev/github.com/gogf/gf/v2/util/gconv"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"\u65b9\u6cd5\u5217\u8868\uff1a"})}),"\n",(0,o.jsx)(n.p,{children:"\u65b9\u6cd5\u5217\u8868\u53ef\u80fd\u6ede\u540e\u4e8e\u4ee3\u7801\uff0c\u8be6\u60c5\u8bf7\u67e5\u770b\u63a5\u53e3\u6587\u6863\u3002"})]})}function a(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var o=t(96540);const c={},s=o.createContext(c);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);