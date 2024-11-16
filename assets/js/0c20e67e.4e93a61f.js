"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["46154"],{599734:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>u,assets:()=>i,toc:()=>a,frontMatter:()=>l});var t=JSON.parse('{"id":"quick/\u9879\u76EE\u811A\u624B\u67B6/\u63A5\u53E3\u5F00\u53D1/Step4 - \u751F\u6210controller\u4EE3\u7801","title":"Step4 - \u751F\u6210controller\u4EE3\u7801","description":"\u6839\u636Eapi\u751F\u6210\u4EE3\u7801","source":"@site/docs/quick/\u9879\u76EE\u811A\u624B\u67B6/\u63A5\u53E3\u5F00\u53D1/Step4 - \u751F\u6210controller\u4EE3\u7801.md","sourceDirName":"quick/\u9879\u76EE\u811A\u624B\u67B6/\u63A5\u53E3\u5F00\u53D1","slug":"/quick/scaffold-api-controller","permalink":"/quick/scaffold-api-controller","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/quick/\u9879\u76EE\u811A\u624B\u67B6/\u63A5\u53E3\u5F00\u53D1/Step4 - \u751F\u6210controller\u4EE3\u7801.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731680613000,"sidebarPosition":4,"frontMatter":{"slug":"/quick/scaffold-api-controller","title":"Step4 - \u751F\u6210controller\u4EE3\u7801","hide_title":true,"sidebar_position":4},"sidebar":"quickSidebar","previous":{"title":"Step3 - \u7F16\u5199api\u63A5\u53E3\u5B9A\u4E49","permalink":"/quick/scaffold-api-definition"},"next":{"title":"Step5 - \u5B8C\u6210\u63A5\u53E3\u903B\u8F91\u5B9E\u73B0","permalink":"/quick/scaffold-api-implements"}}'),o=r("785893"),s=r("250065");let l={slug:"/quick/scaffold-api-controller",title:"Step4 - \u751F\u6210controller\u4EE3\u7801",hide_title:!0,sidebar_position:4},c=void 0,i={},a=[{value:"\u6839\u636E<code>api</code>\u751F\u6210\u4EE3\u7801",id:"\u6839\u636Eapi\u751F\u6210\u4EE3\u7801",level:2},{value:"<code>api</code>\u63A5\u53E3\u6587\u4EF6",id:"api\u63A5\u53E3\u6587\u4EF6",level:2},{value:"<code>controller</code>\u8DEF\u7531\u5BF9\u8C61\u7BA1\u7406",id:"controller\u8DEF\u7531\u5BF9\u8C61\u7BA1\u7406",level:2},{value:"<code>controller</code>\u8DEF\u7531\u5B9E\u73B0\u4EE3\u7801",id:"controller\u8DEF\u7531\u5B9E\u73B0\u4EE3\u7801",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h2,{id:"\u6839\u636Eapi\u751F\u6210\u4EE3\u7801",children:["\u6839\u636E",(0,o.jsx)(n.code,{children:"api"}),"\u751F\u6210\u4EE3\u7801"]}),"\n",(0,o.jsxs)(n.p,{children:["\u5F53",(0,o.jsx)(n.code,{children:"api"}),"\u5B9A\u4E49\u5B8C\u6210\u540E\uFF0C\u6211\u4EEC\u901A\u8FC7",(0,o.jsx)(n.code,{children:"make ctrl"}),"\u547D\u4EE4\uFF08\u6216\u8005",(0,o.jsx)(n.code,{children:"gf gen ctrl"}),"\uFF09\u751F\u6210\u63A7\u5236\u5668\u4EE3\u7801\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"$ make ctrl\ngenerated: /Users/john/Temp/demo/api/user/user.go\ngenerated: /Users/john/Temp/demo/internal/controller/user/user.go\ngenerated: /Users/john/Temp/demo/internal/controller/user/user_new.go\ngenerated: /Users/john/Temp/demo/internal/controller/user/user_v1_create.go\ngenerated: /Users/john/Temp/demo/internal/controller/user/user_v1_update.go\ngenerated: /Users/john/Temp/demo/internal/controller/user/user_v1_delete.go\ngenerated: /Users/john/Temp/demo/internal/controller/user/user_v1_get_one.go\ngenerated: /Users/john/Temp/demo/internal/controller/user/user_v1_get_list.go\ndone!\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"goframe api interface controller",src:r(897006).Z+"",width:"3420",height:"2002"})}),"\n",(0,o.jsxs)(n.p,{children:["\u751F\u6210\u7684\u4EE3\u7801\u4E3B\u8981\u5305\u542B",(0,o.jsx)(n.code,{children:"3"}),"\u7C7B\u6587\u4EF6\u3002"]}),"\n",(0,o.jsxs)(n.h2,{id:"api\u63A5\u53E3\u6587\u4EF6",children:[(0,o.jsx)(n.code,{children:"api"}),"\u63A5\u53E3\u6587\u4EF6"]}),"\n",(0,o.jsxs)(n.p,{children:["\u5B9A\u4E49\u4E86",(0,o.jsx)(n.code,{children:"api interface"}),"\uFF0C\u7528\u4E8E\u4FDD\u8BC1\u63A7\u5236\u5668\u5B9E\u73B0\u7684\u63A5\u53E3\u5B8C\u6574\uFF0C\u907F\u514D\u53EA\u5B9E\u73B0\u90E8\u5206\u63A5\u53E3\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"/Users/john/Temp/demo/api/user/user.go\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u5185\u5BB9\u5982\u4E0B\uFF1A"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",metastring:'title="api/user/user.go"',children:'// =================================================================================\n// Code generated and maintained by GoFrame CLI tool. DO NOT EDIT.\n// =================================================================================\n\npackage user\n\nimport (\n	"context"\n\n	"demo/api/user/v1"\n)\n\ntype IUserV1 interface {\n	Create(ctx context.Context, req *v1.CreateReq) (res *v1.CreateRes, err error)\n	Update(ctx context.Context, req *v1.UpdateReq) (res *v1.UpdateRes, err error)\n	Delete(ctx context.Context, req *v1.DeleteReq) (res *v1.DeleteRes, err error)\n	GetOne(ctx context.Context, req *v1.GetOneReq) (res *v1.GetOneRes, err error)\n	GetList(ctx context.Context, req *v1.GetListReq) (res *v1.GetListRes, err error)\n}\n'})}),"\n",(0,o.jsxs)(n.h2,{id:"controller\u8DEF\u7531\u5BF9\u8C61\u7BA1\u7406",children:[(0,o.jsx)(n.code,{children:"controller"}),"\u8DEF\u7531\u5BF9\u8C61\u7BA1\u7406"]}),"\n",(0,o.jsx)(n.p,{children:"\u7528\u4E8E\u7BA1\u7406\u63A7\u5236\u5668\u7684\u521D\u59CB\u5316\uFF0C\u4EE5\u53CA\u4E00\u4E9B\u63A7\u5236\u5185\u90E8\u4F7F\u7528\u7684\u6570\u636E\u7ED3\u6784\u3001\u5E38\u91CF\u5B9A\u4E49\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"generated: /Users/john/Temp/demo/internal/controller/user/user.go\ngenerated: /Users/john/Temp/demo/internal/controller/user/user_new.go\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u5176\u4E2D",(0,o.jsx)(n.code,{children:"internal/controller/user/user.go"}),"\u662F\u4E00\u4E2A\u7A7A\u7684\u6E90\u7801\u6587\u4EF6\uFF0C\u53EF\u7528\u4E8E\u5B9A\u4E49\u4E00\u4E9B\u5185\u90E8\u4F7F\u7528\u7684\u6570\u636E\u7ED3\u6784\u3001\u53D8\u91CF\u7B49\u5185\u5BB9\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",metastring:'title="internal/controller/user/user.go"',children:"// =================================================================================\n// This is auto-generated by GoFrame CLI tool only once. Fill this file as you wish.\n// =================================================================================\n\npackage user\n\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u53E6\u4E00\u4E2A",(0,o.jsx)(n.code,{children:"internal/controller/user/user_new.go"}),"\u6587\u4EF6\u662F\u81EA\u52A8\u751F\u6210\u7684\u8DEF\u7531\u5BF9\u8C61\u521B\u5EFA\u6587\u4EF6\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",metastring:'title="internal/controller/user/user_new.go"',children:'// =================================================================================\n// This is auto-generated by GoFrame CLI tool only once. Fill this file as you wish.\n// =================================================================================\n\npackage user\n\nimport (\n	"demo/api/user"\n)\n\ntype ControllerV1 struct{}\n\nfunc NewV1() user.IUserV1 {\n	return &ControllerV1{}\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"\u8FD9\u4E24\u4E2A\u6587\u4EF6\u90FD\u53EA\u4F1A\u751F\u6210\u4E00\u6B21\uFF0C\u968F\u540E\u5F00\u53D1\u8005\u53EF\u4EE5\u968F\u610F\u4FEE\u6539\u3001\u6269\u5C55\u3002"}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["\u5982\u679C\u540E\u7EED\u6211\u4EEC\u9700\u8981\u5B9A\u4E49",(0,o.jsx)(n.code,{children:"v2"}),"\u63A5\u53E3\uFF0C",(0,o.jsx)(n.code,{children:"make ctrl"}),"\u547D\u4EE4\u4F1A\u7C7B\u4F3C\u751F\u6210",(0,o.jsx)(n.code,{children:"type ControllerV2 struct{}"}),"\u7ED3\u6784\u4F53\u5B9A\u4E49\uFF0C\u4EE5\u53CA",(0,o.jsx)(n.code,{children:"func NewV2() user.IUserV2"}),"\u521D\u59CB\u5316\u65B9\u6CD5\u3002"]})}),"\n",(0,o.jsxs)(n.h2,{id:"controller\u8DEF\u7531\u5B9E\u73B0\u4EE3\u7801",children:[(0,o.jsx)(n.code,{children:"controller"}),"\u8DEF\u7531\u5B9E\u73B0\u4EE3\u7801"]}),"\n",(0,o.jsxs)(n.p,{children:["\u7528\u4E8E\u5177\u4F53\u7684",(0,o.jsx)(n.code,{children:"api"}),"\u63A5\u53E3\u5B9E\u73B0\u7684\u903B\u8F91\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4F1A\u6309\u7167\u4E00\u4E2A",(0,o.jsx)(n.code,{children:"api"}),"\u63A5\u53E3\u4E00\u4E2A\u6E90\u7801\u6587\u4EF6\u7684\u5F62\u5F0F\u751F\u6210\u4EE3\u7801\uFF0C\u4E5F\u53EF\u4EE5\u63A7\u5236\u6309\u7167",(0,o.jsx)(n.code,{children:"api"}),"\u6587\u4EF6\u5B9A\u4E49\u7684\u63A5\u53E3\u805A\u5408\u751F\u6210\u5230\u5BF9\u5E94\u7684\u4E00\u4E2A\u6E90\u7801\u6587\u4EF6\u4E2D\u3002\u5177\u4F53\u7684\u547D\u4EE4\u4ECB\u7ECD\u8BF7\u53C2\u8003\u7AE0\u8282 ",(0,o.jsx)(n.a,{href:"/docs/cli/gen-ctrl",children:"\u63A5\u53E3\u89C4\u8303-gen ctrl"}),"\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"generated: /Users/john/Temp/demo/internal/controller/user/user_v1_create.go\ngenerated: /Users/john/Temp/demo/internal/controller/user/user_v1_update.go\ngenerated: /Users/john/Temp/demo/internal/controller/user/user_v1_delete.go\ngenerated: /Users/john/Temp/demo/internal/controller/user/user_v1_get_one.go\ngenerated: /Users/john/Temp/demo/internal/controller/user/user_v1_get_list.go\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u6211\u4EEC\u6253\u5F00\u4E00\u4E2A\u6587\u4EF6\u67E5\u770B\u751F\u6210\u7684\u4EE3\u7801\u6A21\u677F\uFF1A"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",metastring:'title="internal/controller/user/user_v1_create.go"',children:'package user\n\nimport (\n	"context"\n\n	"github.com/gogf/gf/v2/errors/gcode"\n	"github.com/gogf/gf/v2/errors/gerror"\n\n	"demo/api/user/v1"\n)\n\nfunc (c *ControllerV1) Create(ctx context.Context, req *v1.CreateReq) (res *v1.CreateRes, err error) {\n	return nil, gerror.NewCode(gcode.CodeNotImplemented)\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"\u53EF\u4EE5\u770B\u5230\uFF0C\u8FD9\u53EA\u662F\u6211\u4EEC\u5B9A\u4E49\u7684\u521B\u5EFA\u63A5\u53E3\u7684\u5B9E\u73B0\u6A21\u677F\uFF0C\u6211\u4EEC\u5B8C\u5584\u8FD9\u4E2A\u8DEF\u7531\u51FD\u6570\u7684\u5177\u4F53\u4E1A\u52A1\u903B\u8F91\u5373\u53EF\u3002"})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},897006:function(e,n,r){r.d(n,{Z:function(){return t}});let t=r.p+"assets/images/QQ_1731678085194-a0391f874abac07b097c3e537a376098.png"},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return l}});var t=r(667294);let o={},s=t.createContext(o);function l(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);