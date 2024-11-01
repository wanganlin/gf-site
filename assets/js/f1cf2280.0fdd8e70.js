"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[78303],{4272:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>a});var s=o(74848),t=o(28453);const i={slug:"/components/encoding/gjson-faq",title:"\u901a\u7528\u7f16\u89e3\u7801-FAQ",sidebar_position:6,hide_title:!0},c=void 0,r={id:"\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u901a\u7528\u7f16\u89e3\u7801-gjson/\u901a\u7528\u7f16\u89e3\u7801-FAQ",title:"\u901a\u7528\u7f16\u89e3\u7801-FAQ",description:"JSON\u4e2d\u7684\u5927\u6570\u5b57\u7cbe\u5ea6\u4e22\u5931\u95ee\u9898",source:"@site/docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u901a\u7528\u7f16\u89e3\u7801-gjson/\u901a\u7528\u7f16\u89e3\u7801-FAQ.md",sourceDirName:"\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u901a\u7528\u7f16\u89e3\u7801-gjson",slug:"/components/encoding/gjson-faq",permalink:"/docs/components/encoding/gjson-faq",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u901a\u7528\u7f16\u89e3\u7801-gjson/\u901a\u7528\u7f16\u89e3\u7801-FAQ.md",tags:[],version:"current",lastUpdatedBy:"John",lastUpdatedAt:1730376618e3,sidebarPosition:6,frontMatter:{slug:"/components/encoding/gjson-faq",title:"\u901a\u7528\u7f16\u89e3\u7801-FAQ",sidebar_position:6,hide_title:!0},sidebar:"hiddenSidebar",previous:{title:"\u901a\u7528\u7f16\u89e3\u7801-\u65b9\u6cd5\u4ecb\u7ecd",permalink:"/docs/components/encoding/gjson-funcs"},next:{title:"\u4e8c\u8fdb\u5236\u7f16\u89e3\u7801-gbinary",permalink:"/docs/components/encoding/gbinary"}},d={},a=[{value:"JSON\u4e2d\u7684\u5927\u6570\u5b57\u7cbe\u5ea6\u4e22\u5931\u95ee\u9898",id:"json\u4e2d\u7684\u5927\u6570\u5b57\u7cbe\u5ea6\u4e22\u5931\u95ee\u9898",level:2},{value:"\u95ee\u9898\u63cf\u8ff0",id:"\u95ee\u9898\u63cf\u8ff0",level:3},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:3},{value:"\u76f8\u5173\u8fde\u63a5",id:"\u76f8\u5173\u8fde\u63a5",level:3}];function g(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"json\u4e2d\u7684\u5927\u6570\u5b57\u7cbe\u5ea6\u4e22\u5931\u95ee\u9898",children:"JSON\u4e2d\u7684\u5927\u6570\u5b57\u7cbe\u5ea6\u4e22\u5931\u95ee\u9898"}),"\n",(0,s.jsx)(e.h3,{id:"\u95ee\u9898\u63cf\u8ff0",children:"\u95ee\u9898\u63cf\u8ff0"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/encoding/gjson"\n    "github.com/gogf/gf/v2/frame/g"\n)\n\nfunc main() {\n    str := `{"Id":1492404095703580672,"Name":"Jason"}`\n    strJson := gjson.New(str)\n    g.Dump(strJson)\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u540e\u8f93\u51fa\u4e3a\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'"{\\"Id\\":1492404095703580700,\\"Name\\":\\"Jason\\"}"\n'})}),"\n",(0,s.jsx)(e.h3,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/encoding/gjson"\n    "github.com/gogf/gf/v2/frame/g"\n)\n\nfunc main() {\n    str := `{"Id":1492404095703580672,"Name":"Jason"}`\n    strJson := gjson.NewWithOptions(str, gjson.Options{\n        StrNumber: true,\n    })\n    g.Dump(strJson)\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u540e\u8f93\u51fa\u4e3a\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'"{\\"Id\\":1492404095703580672,\\"Name\\":\\"Jason\\"}"\n'})}),"\n",(0,s.jsx)(e.h3,{id:"\u76f8\u5173\u8fde\u63a5",children:"\u76f8\u5173\u8fde\u63a5"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/gogf/gf/issues/1603",children:"https://github.com/gogf/gf/issues/1603"})}),"\n"]})]})}function l(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(g,{...n})}):g(n)}},28453:(n,e,o)=>{o.d(e,{R:()=>c,x:()=>r});var s=o(96540);const t={},i=s.createContext(t);function c(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);