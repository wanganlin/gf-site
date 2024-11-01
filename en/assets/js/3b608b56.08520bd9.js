"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[98393],{31940:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var s=r(74848),a=r(28453);const t={slug:"/core/gvalid/parameter-type-map",title:"Map\u6821\u9a8c-\u57fa\u672c\u4f7f\u7528",sidebar_position:0,hide_title:!0},i=void 0,o={id:"\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u6821\u9a8c/\u6570\u636e\u6821\u9a8c-\u53c2\u6570\u7c7b\u578b/\u6570\u636e\u6821\u9a8c-Map\u6821\u9a8c/Map\u6821\u9a8c-\u57fa\u672c\u4f7f\u7528",title:"Map\u6821\u9a8c-\u57fa\u672c\u4f7f\u7528",description:"\u9ed8\u8ba4\u9519\u8bef\u63d0\u793a",source:"@site/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u6821\u9a8c/\u6570\u636e\u6821\u9a8c-\u53c2\u6570\u7c7b\u578b/\u6570\u636e\u6821\u9a8c-Map\u6821\u9a8c/Map\u6821\u9a8c-\u57fa\u672c\u4f7f\u7528.md",sourceDirName:"\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u6821\u9a8c/\u6570\u636e\u6821\u9a8c-\u53c2\u6570\u7c7b\u578b/\u6570\u636e\u6821\u9a8c-Map\u6821\u9a8c",slug:"/core/gvalid/parameter-type-map",permalink:"/en/docs/core/gvalid/parameter-type-map",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u6821\u9a8c/\u6570\u636e\u6821\u9a8c-\u53c2\u6570\u7c7b\u578b/\u6570\u636e\u6821\u9a8c-Map\u6821\u9a8c/Map\u6821\u9a8c-\u57fa\u672c\u4f7f\u7528.md",tags:[],version:"current",lastUpdatedBy:"John",lastUpdatedAt:1730382718e3,sidebarPosition:0,frontMatter:{slug:"/core/gvalid/parameter-type-map",title:"Map\u6821\u9a8c-\u57fa\u672c\u4f7f\u7528",sidebar_position:0,hide_title:!0},sidebar:"hiddenSidebar",previous:{title:"\u6570\u636e\u6821\u9a8c-\u5355\u6570\u636e\u6821\u9a8c",permalink:"/en/docs/core/gvalid/parameter-type-basic"},next:{title:"Map\u6821\u9a8c-\u6821\u9a8c\u987a\u5e8f\u6027",permalink:"/en/docs/core/gvalid/parameter-type-map-sequence"}},p={},d=[{value:"\u9ed8\u8ba4\u9519\u8bef\u63d0\u793a",id:"\u9ed8\u8ba4\u9519\u8bef\u63d0\u793a",level:2},{value:"\u81ea\u5b9a\u4e49\u9519\u8bef\u63d0\u793a",id:"\u81ea\u5b9a\u4e49\u9519\u8bef\u63d0\u793a",level:2}];function c(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u9ed8\u8ba4\u9519\u8bef\u63d0\u793a",children:"\u9ed8\u8ba4\u9519\u8bef\u63d0\u793a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var (\n        ctx    = gctx.New()\n        params = map[string]interface{}{\n            "passport":  "",\n            "password":  "123456",\n            "password2": "1234567",\n        }\n        rules = map[string]string{\n            "passport":  "required|length:6,16",\n            "password":  "required|length:6,16|same:password2",\n            "password2": "required|length:6,16",\n        }\n    )\n    err := g.Validator().Rules(rules).Data(params).Run(ctx)\n    if err != nil {\n        g.Dump(err.Maps())\n    }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    "passport": {\n        "required": "The passport field is required",\n        "length":   "The passport value `` length must be between 6 and 16",\n    },\n    "password": {\n        "same": "The password value `123456` must be the same as field password2",\n    },\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u81ea\u5b9a\u4e49\u9519\u8bef\u63d0\u793a",children:"\u81ea\u5b9a\u4e49\u9519\u8bef\u63d0\u793a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var (\n        ctx    = gctx.New()\n        params = map[string]interface{}{\n            "passport":  "",\n            "password":  "123456",\n            "password2": "1234567",\n        }\n        rules = map[string]string{\n            "passport":  "required|length:6,16",\n            "password":  "required|length:6,16|same:password2",\n            "password2": "required|length:6,16",\n        }\n        messages = map[string]interface{}{\n            "passport": "\u8d26\u53f7\u4e0d\u80fd\u4e3a\u7a7a|\u8d26\u53f7\u957f\u5ea6\u5e94\u5f53\u5728{min}\u5230{max}\u4e4b\u95f4",\n            "password": map[string]string{\n                "required": "\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a",\n                "same":     "\u4e24\u6b21\u5bc6\u7801\u8f93\u5165\u4e0d\u76f8\u7b49",\n            },\n        }\n    )\n\n    err := g.Validator().Messages(messages).Rules(rules).Data(params).Run(ctx)\n    if err != nil {\n        g.Dump(err.Maps())\n    }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u8be5\u793a\u4f8b\u540c\u65f6\u4e5f\u5c55\u793a\u4e86 ",(0,s.jsx)(n.code,{children:"messsages"})," \u81ea\u5b9a\u4e49\u9519\u8bef\u4fe1\u606f\u4f20\u9012\u7684\u4e24\u79cd\u6570\u636e\u7c7b\u578b\uff0c ",(0,s.jsx)(n.code,{children:"string"})," \u6216\u8005 ",(0,s.jsx)(n.code,{children:"map[string]string"}),"\u3002\u5176\u4e2d ",(0,s.jsx)(n.code,{children:"map[string]string"})," \u7c7b\u578b\u53c2\u6570\u9700\u8981\u6307\u5b9a\u5bf9\u5e94\u5b57\u6bb5\u3001\u5bf9\u5e94\u89c4\u5219\u7684\u9519\u8bef\u63d0\u793a\u4fe1\u606f\uff0c\u662f\u4e00\u4e2a\u4e8c\u7ef4\u7684\u201c\u5173\u8054\u6570\u7ec4\u201d\u3002\u8be5\u793a\u4f8b\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    "passport": {\n            "length": "\u8d26\u53f7\u957f\u5ea6\u5e94\u5f53\u57286\u523016\u4e4b\u95f4",\n            "required": "\u8d26\u53f7\u4e0d\u80fd\u4e3a\u7a7a"\n    },\n    "password": {\n            "same": "\u4e24\u6b21\u5bc6\u7801\u8f93\u5165\u4e0d\u76f8\u7b49"\n    }\n}\n'})})]})}function l(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var s=r(96540);const a={},t=s.createContext(a);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);