"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["61654"],{641722:function(e,n,t){t.r(n),t.d(n,{metadata:()=>o,contentTitle:()=>d,default:()=>p,assets:()=>r,toc:()=>l,frontMatter:()=>s});var o=JSON.parse('{"id":"docs/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u81EA\u5B9A\u4E49ContentType","title":"HTTPClient-\u81EA\u5B9A\u4E49ContentType","description":"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528HTTPClient\u81EA\u5B9A\u4E49\u8BF7\u6C42\u7684ContentType\u3002\u901A\u8FC7\u4E0D\u540C\u7684\u64CD\u4F5C\u65B9\u6CD5\u5982ContentJson\u548CContentXml\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u8BF7\u6C42\u7684Content-Type\u5206\u522B\u4E3Aapplication/json\u548Capplication/xml\u3002\u540C\u65F6\u4E5F\u63D0\u4F9B\u4E86\u81EA\u5B9A\u4E49ContentType\u7684\u65B9\u6CD5\u4F8B\u5B50\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u7075\u6D3B\u8BBE\u7F6E\u8BF7\u6C42\u53C2\u6570\u548C\u7F16\u7801\u65B9\u5F0F\uFF0C\u4EE5\u6EE1\u8DB3\u4E0D\u540C\u7684API\u8BF7\u6C42\u9700\u6C42\u3002","source":"@site/docs/docs/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u81EA\u5B9A\u4E49ContentType.md","sourceDirName":"docs/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient","slug":"/docs/web/http-client-content-type","permalink":"/docs/web/http-client-content-type","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u81EA\u5B9A\u4E49ContentType.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":4,"frontMatter":{"slug":"/docs/web/http-client-content-type","title":"HTTPClient-\u81EA\u5B9A\u4E49ContentType","sidebar_position":4,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","HTTPClient","ContentType","Json\u8BF7\u6C42","Xml\u8BF7\u6C42","\u81EA\u5B9A\u4E49ContentType","PostContent","url encode","web\u8BF7\u6C42"],"description":"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528HTTPClient\u81EA\u5B9A\u4E49\u8BF7\u6C42\u7684ContentType\u3002\u901A\u8FC7\u4E0D\u540C\u7684\u64CD\u4F5C\u65B9\u6CD5\u5982ContentJson\u548CContentXml\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u8BF7\u6C42\u7684Content-Type\u5206\u522B\u4E3Aapplication/json\u548Capplication/xml\u3002\u540C\u65F6\u4E5F\u63D0\u4F9B\u4E86\u81EA\u5B9A\u4E49ContentType\u7684\u65B9\u6CD5\u4F8B\u5B50\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u7075\u6D3B\u8BBE\u7F6E\u8BF7\u6C42\u53C2\u6570\u548C\u7F16\u7801\u65B9\u5F0F\uFF0C\u4EE5\u6EE1\u8DB3\u4E0D\u540C\u7684API\u8BF7\u6C42\u9700\u6C42\u3002"},"sidebar":"mainSidebar","previous":{"title":"HTTPClient-\u81EA\u5B9A\u4E49Header","permalink":"/docs/web/http-client-header"},"next":{"title":"HTTPClient-\u81EA\u5B9A\u4E49Transport","permalink":"/docs/web/http-client-transport"}}'),i=t("785893"),c=t("250065");let s={slug:"/docs/web/http-client-content-type",title:"HTTPClient-\u81EA\u5B9A\u4E49ContentType",sidebar_position:4,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","HTTPClient","ContentType","Json\u8BF7\u6C42","Xml\u8BF7\u6C42","\u81EA\u5B9A\u4E49ContentType","PostContent","url encode","web\u8BF7\u6C42"],description:"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528HTTPClient\u81EA\u5B9A\u4E49\u8BF7\u6C42\u7684ContentType\u3002\u901A\u8FC7\u4E0D\u540C\u7684\u64CD\u4F5C\u65B9\u6CD5\u5982ContentJson\u548CContentXml\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u8BF7\u6C42\u7684Content-Type\u5206\u522B\u4E3Aapplication/json\u548Capplication/xml\u3002\u540C\u65F6\u4E5F\u63D0\u4F9B\u4E86\u81EA\u5B9A\u4E49ContentType\u7684\u65B9\u6CD5\u4F8B\u5B50\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u7075\u6D3B\u8BBE\u7F6E\u8BF7\u6C42\u53C2\u6570\u548C\u7F16\u7801\u65B9\u5F0F\uFF0C\u4EE5\u6EE1\u8DB3\u4E0D\u540C\u7684API\u8BF7\u6C42\u9700\u6C42\u3002"},d=void 0,r={},l=[{value:"\u793A\u4F8B1\uFF0C\u63D0\u4EA4 <code>Json</code> \u8BF7\u6C42",id:"\u793A\u4F8B1\u63D0\u4EA4-json-\u8BF7\u6C42",level:2},{value:"\u793A\u4F8B2\uFF0C\u63D0\u4EA4 <code>Xml</code> \u8BF7\u6C42",id:"\u793A\u4F8B2\u63D0\u4EA4-xml-\u8BF7\u6C42",level:2},{value:"\u793A\u4F8B3\uFF0C\u81EA\u5B9A\u4E49 <code>ContentType</code>",id:"\u793A\u4F8B3\u81EA\u5B9A\u4E49-contenttype",level:2}];function a(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h2,{id:"\u793A\u4F8B1\u63D0\u4EA4-json-\u8BF7\u6C42",children:["\u793A\u4F8B1\uFF0C\u63D0\u4EA4 ",(0,i.jsx)(n.code,{children:"Json"})," \u8BF7\u6C42"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'g.Client().ContentJson().PostContent(ctx, "http://order.svc/v1/order", g.Map{\n    "uid"         : 1,\n    "sku_id"      : 10000,\n    "amount"      : 19.99,\n    "create_time" : "2020-03-26 12:00:00",\n})\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u901A\u8FC7\u8C03\u7528 ",(0,i.jsx)(n.code,{children:"ContentJson"})," \u94FE\u5F0F\u64CD\u4F5C\u65B9\u6CD5\uFF0C\u8BE5\u8BF7\u6C42\u5C06\u4F1A\u5C06 ",(0,i.jsx)(n.code,{children:"Content-Type"})," \u8BBE\u7F6E\u4E3A ",(0,i.jsx)(n.code,{children:"application/json"}),"\uFF0C\u5E76\u4E14\u5C06\u63D0\u4EA4\u53C2\u6570\u81EA\u52A8\u7F16\u7801\u4E3A ",(0,i.jsx)(n.code,{children:"Json"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{"uid":1,"sku_id":10000,"amount":19.99,"create_time":"2020-03-26 12:00:00"}\n'})}),"\n",(0,i.jsxs)(n.h2,{id:"\u793A\u4F8B2\u63D0\u4EA4-xml-\u8BF7\u6C42",children:["\u793A\u4F8B2\uFF0C\u63D0\u4EA4 ",(0,i.jsx)(n.code,{children:"Xml"})," \u8BF7\u6C42"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'g.Client().ContentXml().PostContent(ctx, "http://order.svc/v1/order", g.Map{\n    "uid"         : 1,\n    "sku_id"      : 10000,\n    "amount"      : 19.99,\n    "create_time" : "2020-03-26 12:00:00",\n})\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u901A\u8FC7\u8C03\u7528 ",(0,i.jsx)(n.code,{children:"ContentXml"})," \u94FE\u5F0F\u64CD\u4F5C\u65B9\u6CD5\uFF0C\u8BE5\u8BF7\u6C42\u5C06\u4F1A\u5C06 ",(0,i.jsx)(n.code,{children:"Content-Type"})," \u8BBE\u7F6E\u4E3A ",(0,i.jsx)(n.code,{children:"application/xml"}),"\uFF0C\u5E76\u4E14\u5C06\u63D0\u4EA4\u53C2\u6570\u81EA\u52A8\u7F16\u7801\u4E3A ",(0,i.jsx)(n.code,{children:"Xml"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"<doc><amount>19.99</amount><create_time>2020-03-26 12:00:00</create_time><sku_id>10000</sku_id><uid>1</uid></doc>\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"\u793A\u4F8B3\u81EA\u5B9A\u4E49-contenttype",children:["\u793A\u4F8B3\uFF0C\u81EA\u5B9A\u4E49 ",(0,i.jsx)(n.code,{children:"ContentType"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"ContentType"})," \u65B9\u6CD5\u81EA\u5B9A\u4E49\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684 ",(0,i.jsx)(n.code,{children:"ContentType"}),"\u3002\u5982\u679C\u662F\u7ED9\u5B9A\u7684 ",(0,i.jsx)(n.code,{children:"string/[]byte"})," \u53C2\u6570\uFF0C\u5BA2\u6237\u7AEF\u5C06\u4F1A\u76F4\u63A5\u5C06\u53C2\u6570\u63D0\u4EA4\u7ED9\u670D\u52A1\u7AEF\uFF1B\u5982\u679C\u662F\u5176\u4ED6\u6570\u636E\u7C7B\u578B\u5C06\u4F1A\u81EA\u52A8\u5BF9\u53C2\u6570\u6267\u884C ",(0,i.jsx)(n.code,{children:"url encode"})," \u518D\u63D0\u4EA4\u5230\u670D\u52A1\u7AEF\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u793A\u4F8B1\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'g.Client().ContentType("application/json").PostContent(\n  ctx,\n  "http://order.svc/v1/order",\n  `{"uid":1,"sku_id":10000,"amount":19.99,"create_time":"2020-03-26 12:00:00"}`,\n)\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u6216"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'g.Client().ContentType("application/json; charset=utf-8").PostContent(\n  ctx,\n  "http://order.svc/v1/order",\n  `{"uid":1,"sku_id":10000,"amount":19.99,"create_time":"2020-03-26 12:00:00"}`,\n)\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u63D0\u4EA4\u7684\u53C2\u6570\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{"uid":1,"sku_id":10000,"amount":19.99,"create_time":"2020-03-26 12:00:00"}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u793A\u4F8B2\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'g.Client().ContentType("application/x-www-form-urlencoded; charset=utf-8").GetContent(\n  ctx,\n  "http://order.svc/v1/order",\n  g.Map{\n    "category" : 1,\n    "sku_id"   : 10000,\n  },\n)\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u63D0\u4EA4\u7684\u53C2\u6570\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"category=1&sku_id=10000\n"})})]})}function p(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return s}});var o=t(667294);let i={},c=o.createContext(i);function s(e){let n=o.useContext(c);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);