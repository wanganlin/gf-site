"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[94491],{45904:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=t(74848),c=t(28453);const i={slug:"/web/http-client/content-type",title:"HTTPClient-\u81ea\u5b9a\u4e49ContentType",sidebar_position:4,hide_title:!0},d=void 0,s={id:"WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u81ea\u5b9a\u4e49ContentType",title:"HTTPClient-\u81ea\u5b9a\u4e49ContentType",description:"\u793a\u4f8b1\uff0c\u63d0\u4ea4 Json \u8bf7\u6c42",source:"@site/docs/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u81ea\u5b9a\u4e49ContentType.md",sourceDirName:"WEB\u670d\u52a1\u5f00\u53d1/HTTPClient",slug:"/web/http-client/content-type",permalink:"/docs/web/http-client/content-type",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/docs/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u81ea\u5b9a\u4e49ContentType.md",tags:[],version:"current",lastUpdatedBy:"John",lastUpdatedAt:173036553e4,sidebarPosition:4,frontMatter:{slug:"/web/http-client/content-type",title:"HTTPClient-\u81ea\u5b9a\u4e49ContentType",sidebar_position:4,hide_title:!0},sidebar:"hiddenSidebar",previous:{title:"HTTPClient-\u81ea\u5b9a\u4e49Header",permalink:"/docs/web/http-client/header"},next:{title:"HTTPClient-\u81ea\u5b9a\u4e49Transport",permalink:"/docs/web/http-client/transport"}},r={},l=[{value:"\u793a\u4f8b1\uff0c\u63d0\u4ea4 <code>Json</code> \u8bf7\u6c42",id:"\u793a\u4f8b1\u63d0\u4ea4-json-\u8bf7\u6c42",level:2},{value:"\u793a\u4f8b2\uff0c\u63d0\u4ea4 <code>Xml</code> \u8bf7\u6c42",id:"\u793a\u4f8b2\u63d0\u4ea4-xml-\u8bf7\u6c42",level:2},{value:"\u793a\u4f8b3\uff0c\u81ea\u5b9a\u4e49 <code>ContentType</code>",id:"\u793a\u4f8b3\u81ea\u5b9a\u4e49-contenttype",level:2}];function a(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h2,{id:"\u793a\u4f8b1\u63d0\u4ea4-json-\u8bf7\u6c42",children:["\u793a\u4f8b1\uff0c\u63d0\u4ea4 ",(0,o.jsx)(n.code,{children:"Json"})," \u8bf7\u6c42"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'g.Client().ContentJson().PostContent(ctx, "http://order.svc/v1/order", g.Map{\n    "uid"         : 1,\n    "sku_id"      : 10000,\n    "amount"      : 19.99,\n    "create_time" : "2020-03-26 12:00:00",\n})\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u901a\u8fc7\u8c03\u7528 ",(0,o.jsx)(n.code,{children:"ContentJson"})," \u94fe\u5f0f\u64cd\u4f5c\u65b9\u6cd5\uff0c\u8be5\u8bf7\u6c42\u5c06\u4f1a\u5c06 ",(0,o.jsx)(n.code,{children:"Content-Type"})," \u8bbe\u7f6e\u4e3a ",(0,o.jsx)(n.code,{children:"application/json"}),"\uff0c\u5e76\u4e14\u5c06\u63d0\u4ea4\u53c2\u6570\u81ea\u52a8\u7f16\u7801\u4e3a ",(0,o.jsx)(n.code,{children:"Json"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'{"uid":1,"sku_id":10000,"amount":19.99,"create_time":"2020-03-26 12:00:00"}\n'})}),"\n",(0,o.jsxs)(n.h2,{id:"\u793a\u4f8b2\u63d0\u4ea4-xml-\u8bf7\u6c42",children:["\u793a\u4f8b2\uff0c\u63d0\u4ea4 ",(0,o.jsx)(n.code,{children:"Xml"})," \u8bf7\u6c42"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'g.Client().ContentXml().PostContent(ctx, "http://order.svc/v1/order", g.Map{\n    "uid"         : 1,\n    "sku_id"      : 10000,\n    "amount"      : 19.99,\n    "create_time" : "2020-03-26 12:00:00",\n})\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u901a\u8fc7\u8c03\u7528 ",(0,o.jsx)(n.code,{children:"ContentXml"})," \u94fe\u5f0f\u64cd\u4f5c\u65b9\u6cd5\uff0c\u8be5\u8bf7\u6c42\u5c06\u4f1a\u5c06 ",(0,o.jsx)(n.code,{children:"Content-Type"})," \u8bbe\u7f6e\u4e3a ",(0,o.jsx)(n.code,{children:"application/xml"}),"\uff0c\u5e76\u4e14\u5c06\u63d0\u4ea4\u53c2\u6570\u81ea\u52a8\u7f16\u7801\u4e3a ",(0,o.jsx)(n.code,{children:"Xml"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"<doc><amount>19.99</amount><create_time>2020-03-26 12:00:00</create_time><sku_id>10000</sku_id><uid>1</uid></doc>\n"})}),"\n",(0,o.jsxs)(n.h2,{id:"\u793a\u4f8b3\u81ea\u5b9a\u4e49-contenttype",children:["\u793a\u4f8b3\uff0c\u81ea\u5b9a\u4e49 ",(0,o.jsx)(n.code,{children:"ContentType"})]}),"\n",(0,o.jsxs)(n.p,{children:["\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,o.jsx)(n.code,{children:"ContentType"})," \u65b9\u6cd5\u81ea\u5b9a\u4e49\u5ba2\u6237\u7aef\u8bf7\u6c42\u7684 ",(0,o.jsx)(n.code,{children:"ContentType"}),"\u3002\u5982\u679c\u662f\u7ed9\u5b9a\u7684 ",(0,o.jsx)(n.code,{children:"string/[]byte"})," \u53c2\u6570\uff0c\u5ba2\u6237\u7aef\u5c06\u4f1a\u76f4\u63a5\u5c06\u53c2\u6570\u63d0\u4ea4\u7ed9\u670d\u52a1\u7aef\uff1b\u5982\u679c\u662f\u5176\u4ed6\u6570\u636e\u7c7b\u578b\u5c06\u4f1a\u81ea\u52a8\u5bf9\u53c2\u6570\u6267\u884c ",(0,o.jsx)(n.code,{children:"url encode"})," \u518d\u63d0\u4ea4\u5230\u670d\u52a1\u7aef\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u793a\u4f8b1\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'g.Client().ContentType("application/json").PostContent(\n  ctx,\n  "http://order.svc/v1/order",\n  `{"uid":1,"sku_id":10000,"amount":19.99,"create_time":"2020-03-26 12:00:00"}`,\n)\n'})}),"\n",(0,o.jsx)(n.p,{children:"\u6216"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'g.Client().ContentType("application/json; charset=utf-8").PostContent(\n  ctx,\n  "http://order.svc/v1/order",\n  `{"uid":1,"sku_id":10000,"amount":19.99,"create_time":"2020-03-26 12:00:00"}`,\n)\n'})}),"\n",(0,o.jsx)(n.p,{children:"\u63d0\u4ea4\u7684\u53c2\u6570\u5982\u4e0b\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'{"uid":1,"sku_id":10000,"amount":19.99,"create_time":"2020-03-26 12:00:00"}\n'})}),"\n",(0,o.jsx)(n.p,{children:"\u793a\u4f8b2\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'g.Client().ContentType("application/x-www-form-urlencoded; charset=utf-8").GetContent(\n  ctx,\n  "http://order.svc/v1/order",\n  g.Map{\n    "category" : 1,\n    "sku_id"   : 10000,\n  },\n)\n'})}),"\n",(0,o.jsx)(n.p,{children:"\u63d0\u4ea4\u7684\u53c2\u6570\u5982\u4e0b\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"category=1&sku_id=10000\n"})})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>s});var o=t(96540);const c={},i=o.createContext(c);function d(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);