"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[87620],{65858:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>r,contentTitle:()=>c,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"docs/\u5f00\u53d1\u5de5\u5177/\u9879\u76ee\u521b\u5efa-init","title":"\u9879\u76ee\u521b\u5efa-init","description":"\u4ece v2 \u7248\u672c\u5f00\u59cb\uff0c\u9879\u76ee\u7684\u521b\u5efa\u4e0d\u518d\u4f9d\u8d56\u8fdc\u7aef\u83b7\u53d6\uff0c\u4ed3\u5e93\u6a21\u677f\u5df2\u7ecf\u901a\u8fc7 \u8d44\u6e90\u7ba1\u7406 \u7684\u65b9\u5f0f\u5185\u7f6e\u5230\u4e86\u5de5\u5177\u4e8c\u8fdb\u5236\u6587\u4ef6\u4e2d\uff0c\u56e0\u6b64\u9879\u76ee\u521b\u5efa\u901f\u5ea6\u975e\u5e38\u8fc5\u901f\u3002","source":"@site/docs/docs/\u5f00\u53d1\u5de5\u5177/\u9879\u76ee\u521b\u5efa-init.md","sourceDirName":"docs/\u5f00\u53d1\u5de5\u5177","slug":"/docs/cli/init","permalink":"/docs/cli/init","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u5f00\u53d1\u5de5\u5177/\u9879\u76ee\u521b\u5efa-init.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730724532000,"sidebarPosition":3,"frontMatter":{"slug":"/docs/cli/init","title":"\u9879\u76ee\u521b\u5efa-init","sidebar_position":3,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"\u6846\u67b6\u5347\u7ea7-up","permalink":"/docs/cli/up"},"next":{"title":"\u4ea4\u53c9\u7f16\u8bd1-build","permalink":"/docs/cli/build"}}');var d=i(74848),s=i(28453);const t={slug:"/docs/cli/init",title:"\u9879\u76ee\u521b\u5efa-init",sidebar_position:3,hide_title:!0},c=void 0,r={},l=[{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u5728\u5f53\u524d\u76ee\u5f55\u4e0b\u521d\u59cb\u5316\u9879\u76ee",id:"\u5728\u5f53\u524d\u76ee\u5f55\u4e0b\u521d\u59cb\u5316\u9879\u76ee",level:3},{value:"\u521b\u5efa\u4e00\u4e2a\u6307\u5b9a\u540d\u79f0\u7684\u9879\u76ee",id:"\u521b\u5efa\u4e00\u4e2a\u6307\u5b9a\u540d\u79f0\u7684\u9879\u76ee",level:3},{value:"\u521b\u5efa\u4e00\u4e2a <code>MonoRepo</code> \u9879\u76ee",id:"\u521b\u5efa\u4e00\u4e2a-monorepo-\u9879\u76ee",level:3},{value:"\u521b\u5efa\u4e00\u4e2a <code>MonoRepoApp</code> \u9879\u76ee",id:"\u521b\u5efa\u4e00\u4e2a-monorepoapp-\u9879\u76ee",level:4}];function a(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(e.admonition,{type:"tip",children:(0,d.jsxs)(e.p,{children:["\u4ece ",(0,d.jsx)(e.code,{children:"v2"})," \u7248\u672c\u5f00\u59cb\uff0c\u9879\u76ee\u7684\u521b\u5efa\u4e0d\u518d\u4f9d\u8d56\u8fdc\u7aef\u83b7\u53d6\uff0c\u4ed3\u5e93\u6a21\u677f\u5df2\u7ecf\u901a\u8fc7 ",(0,d.jsx)(e.a,{href:"/docs/core/gres",children:"\u8d44\u6e90\u7ba1\u7406"})," \u7684\u65b9\u5f0f\u5185\u7f6e\u5230\u4e86\u5de5\u5177\u4e8c\u8fdb\u5236\u6587\u4ef6\u4e2d\uff0c\u56e0\u6b64\u9879\u76ee\u521b\u5efa\u901f\u5ea6\u975e\u5e38\u8fc5\u901f\u3002"]})}),"\n",(0,d.jsx)(e.h2,{id:"\u4f7f\u7528\u65b9\u5f0f",children:"\u4f7f\u7528\u65b9\u5f0f"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-bash",children:"$ gf init -h\nUSAGE\n    gf init ARGUMENT [OPTION]\n\nARGUMENT\n    NAME    \u9879\u76ee\u540d\u79f0\uff0c\u5728\u5f53\u524d\u76ee\u5f55\u4e0b\u521b\u5efa\u540d\u4e3a NAME \u7684\u6587\u4ef6\u5939\uff0c\u5e76\u4e14 module \u540d\u79f0\u4e5f\u4e3a NAME\n\nOPTION\n    -m, --mono    \u521d\u59cb\u5316\u5927\u4ed3\u6a21\u5f0f mono-repo\n    -a, --monoApp \u521d\u59cb\u5316\u5927\u4ed3\u4e0b\u7684\u4e00\u4e2a\u5c0f\u4ed3 mono-repo-app\n    -u, --update  \u521d\u59cb\u5316\u540e\u4f7f\u7528\u6700\u65b0\u7684\u6846\u67b6\u7248\u672c\n    -g, --module  \u81ea\u5b9a\u4e49 module\n    -h, --help    \u66f4\u591a\u5e2e\u52a9\n\nEXAMPLE\n    gf init my-project\n    gf init my-mono-repo -m\n"})}),"\n",(0,d.jsxs)(e.p,{children:["\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,d.jsx)(e.code,{children:"init"})," \u547d\u4ee4\u5728\u5f53\u524d\u76ee\u5f55\u751f\u6210\u4e00\u4e2a\u793a\u4f8b\u7684 ",(0,d.jsx)(e.code,{children:"GoFrame"})," \u7a7a\u6846\u67b6\u9879\u76ee\uff0c\u5e76\u53ef\u7ed9\u5b9a\u9879\u76ee\u540d\u79f0\u53c2\u6570\u3002\u751f\u6210\u7684\u9879\u76ee\u76ee\u5f55\u7ed3\u6784\u4ec5\u4f9b\u53c2\u8003\uff0c\u6839\u636e\u4e1a\u52a1\u9879\u76ee\u5177\u4f53\u60c5\u51b5\u53ef\u81ea\u884c\u8c03\u6574\u3002\u751f\u6210\u7684\u76ee\u5f55\u7ed3\u6784\u8bf7\u53c2\u8003 ",(0,d.jsx)(e.a,{href:"/docs/design/project/layer",children:"\u4ee3\u7801\u5206\u5c42\u8bbe\u8ba1"}),"\xa0\u7ae0\u8282\u3002"]}),"\n",(0,d.jsx)(e.admonition,{type:"note",children:(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.code,{children:"GoFrame"})," \u6846\u67b6\u5f00\u53d1\u63a8\u8350\u7edf\u4e00\u4f7f\u7528\u5b98\u65b9\u7684 ",(0,d.jsx)(e.code,{children:"go module"})," \u7279\u6027\u8fdb\u884c\u4f9d\u8d56\u5305\u7ba1\u7406\uff0c\u56e0\u6b64\u7a7a\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u4e5f\u6709\u4e00\u4e2a ",(0,d.jsx)(e.code,{children:"go.mod"})," \u6587\u4ef6\u3002"]})}),"\n",(0,d.jsx)(e.admonition,{type:"tip",children:(0,d.jsxs)(e.p,{children:["\u5de5\u7a0b\u76ee\u5f55\u91c7\u7528\u4e86\u901a\u7528\u5316\u7684\u8bbe\u8ba1\uff0c\u5b9e\u9645\u9879\u76ee\u4e2d\u53ef\u4ee5\u6839\u636e\u9879\u76ee\u9700\u8981\u9002\u5f53\u589e\u51cf\u6a21\u677f\u7ed9\u5b9a\u7684\u76ee\u5f55\u3002\u4f8b\u5982\uff0c\u6ca1\u6709 ",(0,d.jsx)(e.code,{children:"kubernetes"})," \u90e8\u7f72\u9700\u6c42\u7684\u573a\u666f\uff0c\u76f4\u63a5\u5220\u9664\u5bf9\u5e94 ",(0,d.jsx)(e.code,{children:"deploy"})," \u76ee\u5f55\u5373\u53ef\u3002"]})}),"\n",(0,d.jsx)(e.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,d.jsx)(e.h3,{id:"\u5728\u5f53\u524d\u76ee\u5f55\u4e0b\u521d\u59cb\u5316\u9879\u76ee",children:"\u5728\u5f53\u524d\u76ee\u5f55\u4e0b\u521d\u59cb\u5316\u9879\u76ee"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-bash",children:"$ gf init .\ninitializing...\ninitialization done!\nyou can now run 'gf run main.go' to start your journey, enjoy!\n"})}),"\n",(0,d.jsx)(e.h3,{id:"\u521b\u5efa\u4e00\u4e2a\u6307\u5b9a\u540d\u79f0\u7684\u9879\u76ee",children:"\u521b\u5efa\u4e00\u4e2a\u6307\u5b9a\u540d\u79f0\u7684\u9879\u76ee"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-bash",children:"$ gf init myapp\ninitializing...\ninitialization done!\nyou can now run 'cd myapp && gf run main.go' to start your journey, enjoy!\n"})}),"\n",(0,d.jsxs)(e.h3,{id:"\u521b\u5efa\u4e00\u4e2a-monorepo-\u9879\u76ee",children:["\u521b\u5efa\u4e00\u4e2a ",(0,d.jsx)(e.code,{children:"MonoRepo"})," \u9879\u76ee"]}),"\n",(0,d.jsxs)(e.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u521b\u5efa\u7684\u662f ",(0,d.jsx)(e.code,{children:"SingleRepo"})," \u9879\u76ee\uff0c\u82e5\u6709\u9700\u8981\u4e5f\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a ",(0,d.jsx)(e.code,{children:"MonoRepo"}),"\uff08\u5927\u4ed3\uff09\u9879\u76ee\uff0c\u901a\u8fc7\u4f7f\u7528 ",(0,d.jsx)(e.code,{children:"-m"})," \u9009\u9879\u5373\u53ef\u3002"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-bash",children:"$ gf init mymono -m\ninitializing...\ninitialization done!\n"})}),"\n",(0,d.jsxs)(e.p,{children:["\u5173\u4e8e\u5927\u4ed3\u7684\u4ecb\u7ecd\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,d.jsx)(e.a,{href:"/docs/design/project/mono-repo",children:"\u5fae\u670d\u52a1\u5927\u4ed3\u7ba1\u7406\u6a21\u5f0f"})]}),"\n",(0,d.jsxs)(e.h4,{id:"\u521b\u5efa\u4e00\u4e2a-monorepoapp-\u9879\u76ee",children:["\u521b\u5efa\u4e00\u4e2a ",(0,d.jsx)(e.code,{children:"MonoRepoApp"})," \u9879\u76ee"]}),"\n",(0,d.jsxs)(e.p,{children:["\u82e5\u9700\u8981\u5728 ",(0,d.jsx)(e.code,{children:"MonoRepo"}),"\uff08\u5927\u4ed3\uff09\u4e0b\u7684\u521b\u5efa\u4e00\u4e2a\u5c0f\u4ed3\uff0c\u901a\u8fc7\u4f7f\u7528 ",(0,d.jsx)(e.code,{children:"-a"})," \u9009\u9879\u5373\u53ef\u3002"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-bash",children:"$ gf init app/user -a\ninitializing...\ninitialization done!\n"})})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(a,{...n})}):a(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>t,x:()=>c});var o=i(96540);const d={},s=o.createContext(d);function t(n){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:t(n.components),o.createElement(s.Provider,{value:e},n.children)}}}]);