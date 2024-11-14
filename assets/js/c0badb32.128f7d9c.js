"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["27657"],{827614:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>c,default:()=>u,assets:()=>l,toc:()=>d,frontMatter:()=>s});var i=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u65E5\u5FD7\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6-\u8C03\u8BD5\u4FE1\u606F","title":"\u65E5\u5FD7\u7EC4\u4EF6-\u8C03\u8BD5\u4FE1\u606F","description":"Debug/Debugf \u662F\u975E\u5E38\u6709\u7528\u7684\u51E0\u4E2A\u65B9\u6CD5\uFF0C\u7528\u4E8E\u8C03\u8BD5\u4FE1\u606F\u7684\u8BB0\u5F55\uFF0C\u5E38\u7528\u4E8E\u5F00\u53D1/\u6D4B\u8BD5\u73AF\u5883\u4E2D\uFF0C\u5F53\u5E94\u7528\u4E0A\u7EBF\u4E4B\u540E\u53EF\u4EE5\u65B9\u4FBF\u5730\u4F7F\u7528 SetDebug \u6216\u8005\u914D\u7F6E\u6587\u4EF6\u8FDB\u884C\u5F00\u542F/\u5173\u95ED\u3002","source":"@site/versioned_docs/version-2.2.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u65E5\u5FD7\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6-\u8C03\u8BD5\u4FE1\u606F.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u65E5\u5FD7\u7EC4\u4EF6","slug":"/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u65E5\u5FD7\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6-\u8C03\u8BD5\u4FE1\u606F","permalink":"/2.2.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u65E5\u5FD7\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6-\u8C03\u8BD5\u4FE1\u606F","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.2.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u65E5\u5FD7\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6-\u8C03\u8BD5\u4FE1\u606F.md","tags":[],"version":"2.2.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":10,"frontMatter":{"title":"\u65E5\u5FD7\u7EC4\u4EF6-\u8C03\u8BD5\u4FE1\u606F","sidebar_position":10,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u65E5\u5FD7\u7EC4\u4EF6-\u5806\u6808\u6253\u5370","permalink":"/2.2.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u65E5\u5FD7\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6-\u5806\u6808\u6253\u5370"},"next":{"title":"\u65E5\u5FD7\u7EC4\u4EF6-Writer\u63A5\u53E3","permalink":"/2.2.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u65E5\u5FD7\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6-Writer\u63A5\u53E3"}}'),o=t("785893"),r=t("250065");let s={title:"\u65E5\u5FD7\u7EC4\u4EF6-\u8C03\u8BD5\u4FE1\u606F",sidebar_position:10,hide_title:!0},c=void 0,l={},d=[];function a(e){let n={blockquote:"blockquote",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Debug/Debugf"})," \u662F\u975E\u5E38\u6709\u7528\u7684\u51E0\u4E2A\u65B9\u6CD5\uFF0C\u7528\u4E8E\u8C03\u8BD5\u4FE1\u606F\u7684\u8BB0\u5F55\uFF0C\u5E38\u7528\u4E8E\u5F00\u53D1/\u6D4B\u8BD5\u73AF\u5883\u4E2D\uFF0C\u5F53\u5E94\u7528\u4E0A\u7EBF\u4E4B\u540E\u53EF\u4EE5\u65B9\u4FBF\u5730\u4F7F\u7528 ",(0,o.jsx)(n.code,{children:"SetDebug"})," \u6216\u8005\u914D\u7F6E\u6587\u4EF6\u8FDB\u884C\u5F00\u542F/\u5173\u95ED\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "time"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gtime"\n    "github.com/gogf/gf/v2/os/gtimer"\n)\n\nfunc main() {\n    ctx := context.TODO()\n    gtimer.SetTimeout(ctx, 3*time.Second, func(ctx context.Context) {\n        g.Log().SetDebug(false)\n    })\n    for {\n        g.Log().Debug(ctx, gtime.Datetime())\n        g.Log().Info(ctx, gtime.Datetime())\n        time.Sleep(time.Second)\n    }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u8BE5\u793A\u4F8B\u4E2D\u4F7F\u7528 ",(0,o.jsx)(n.code,{children:"glog.Debug"})," \u65B9\u6CD5\u8F93\u51FA\u8C03\u8BD5\u4FE1\u606F\uFF0C3\u79D2\u540E\u5173\u95ED\u8C03\u8BD5\u4FE1\u606F\u7684\u8F93\u51FA\u3002\u6267\u884C\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\u5982\u4E0B\uFF0C\u53EF\u4EE5\u770B\u5230\u53EA\u8F93\u51FA\u4E863\u6761\u65E5\u5FD7\u4FE1\u606F\uFF0C\u540E\u7EED\u7684\u8C03\u8BD5\u65E5\u5FD7\u4FE1\u606F\u7531\u4E8E\u901A\u8FC7 ",(0,o.jsx)(n.code,{children:"SetDebug"})," \u65B9\u6CD5\u5173\u95ED\u540E\uFF0C\u4FBF\u4E0D\u518D\u8F93\u51FA\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:"2022-01-05 15:59:05.674 [DEBU] 2022-01-05 15:59:05\n2022-01-05 15:59:05.675 [INFO] 2022-01-05 15:59:05\n2022-01-05 15:59:06.684 [DEBU] 2022-01-05 15:59:06\n2022-01-05 15:59:06.684 [INFO] 2022-01-05 15:59:06\n2022-01-05 15:59:07.692 [DEBU] 2022-01-05 15:59:07\n2022-01-05 15:59:07.692 [INFO] 2022-01-05 15:59:07\n2022-01-05 15:59:08.708 [INFO] 2022-01-05 15:59:08\n2022-01-05 15:59:09.717 [INFO] 2022-01-05 15:59:09\n2022-01-05 15:59:10.728 [INFO] 2022-01-05 15:59:10\n2022-01-05 15:59:11.733 [INFO] 2022-01-05 15:59:11\n"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"\u6211\u4EEC\u8FD8\u53EF\u4EE5\u901A\u8FC7\u547D\u4EE4\u884C\u53C2\u6570\u6216\u8005\u7CFB\u7EDF\u73AF\u5883\u53D8\u91CF\u53C2\u6570\u7684\u65B9\u5F0F\u5173\u95ED\u6389\u8C03\u8BD5\u4FE1\u606F\u3002"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\u4FEE\u6539\u547D\u4EE4\u884C\u542F\u52A8\u53C2\u6570 - ",(0,o.jsx)(n.code,{children:"gf.glog.debug=false"}),"\uFF1B"]}),"\n",(0,o.jsxs)(n.li,{children:["\u4FEE\u6539\u6307\u5B9A\u7684\u73AF\u5883\u53D8\u91CF - ",(0,o.jsx)(n.code,{children:"GF_GLOG_DEBUG=false"}),"\uFF1B"]}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return s}});var i=t(667294);let o={},r=i.createContext(o);function s(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);