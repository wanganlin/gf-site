"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["39884"],{775958:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>l,default:()=>g,assets:()=>a,toc:()=>d,frontMatter:()=>s});var r=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u7C7B\u578B\u8F6C\u6362/\u7C7B\u578B\u8F6C\u6362","title":"\u7C7B\u578B\u8F6C\u6362","description":"GoFrame\u6846\u67B6\u4E2D\u7684gconv\u5305\uFF0C\u8BE5\u5305\u63D0\u4F9B\u4E86\u9AD8\u6548\u7684\u7C7B\u578B\u8F6C\u6362\u529F\u80FD\uFF0C\u652F\u6301\u4ECE\u5E38\u7528\u6570\u636E\u7C7B\u578B\u5230\u6307\u5B9A\u7C7B\u578B\u7684\u8F6C\u6362\uFF0C\u5E76\u53EF\u5C06\u4EFB\u610F\u7C7B\u578B\u8F6C\u6362\u4E3Astruct\u5BF9\u8C61\u3002gconv\u5E7F\u6CDB\u4F7F\u7528\u65AD\u8A00\uFF0C\u6709\u6548\u63D0\u5347\u7A0B\u5E8F\u6027\u80FD\uFF0C\u662F\u5F00\u53D1\u8005\u5B9E\u73B0\u7C7B\u578B\u8F6C\u6362\u7684\u7406\u60F3\u9009\u62E9\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u6838\u5FC3\u7EC4\u4EF6/\u7C7B\u578B\u8F6C\u6362/\u7C7B\u578B\u8F6C\u6362.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u7C7B\u578B\u8F6C\u6362","slug":"/docs/core/gconv","permalink":"/en/2.7.x/docs/core/gconv","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u6838\u5FC3\u7EC4\u4EF6/\u7C7B\u578B\u8F6C\u6362/\u7C7B\u578B\u8F6C\u6362.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":7,"frontMatter":{"slug":"/docs/core/gconv","title":"\u7C7B\u578B\u8F6C\u6362","sidebar_position":7,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","\u7C7B\u578B\u8F6C\u6362","gconv","\u9AD8\u6548\u8F6C\u6362","\u7ED3\u6784\u4F53\u8F6C\u6362","\u6570\u636E\u7C7B\u578B","\u7F16\u7A0B\u6548\u7387","\u63A5\u53E3\u6587\u6863","\u65E0\u7F1D\u8F6C\u6362"],"description":"GoFrame\u6846\u67B6\u4E2D\u7684gconv\u5305\uFF0C\u8BE5\u5305\u63D0\u4F9B\u4E86\u9AD8\u6548\u7684\u7C7B\u578B\u8F6C\u6362\u529F\u80FD\uFF0C\u652F\u6301\u4ECE\u5E38\u7528\u6570\u636E\u7C7B\u578B\u5230\u6307\u5B9A\u7C7B\u578B\u7684\u8F6C\u6362\uFF0C\u5E76\u53EF\u5C06\u4EFB\u610F\u7C7B\u578B\u8F6C\u6362\u4E3Astruct\u5BF9\u8C61\u3002gconv\u5E7F\u6CDB\u4F7F\u7528\u65AD\u8A00\uFF0C\u6709\u6548\u63D0\u5347\u7A0B\u5E8F\u6027\u80FD\uFF0C\u662F\u5F00\u53D1\u8005\u5B9E\u73B0\u7C7B\u578B\u8F6C\u6362\u7684\u7406\u60F3\u9009\u62E9\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u6570\u636E\u6821\u9A8C-\u5E38\u89C1\u95EE\u9898","permalink":"/en/2.7.x/docs/core/gvalid-faq"},"next":{"title":"\u7C7B\u578B\u8F6C\u6362-\u57FA\u672C\u7C7B\u578B","permalink":"/en/2.7.x/docs/core/gconv-basic"}}'),o=n("785893"),c=n("250065"),i=n("894301");let s={slug:"/docs/core/gconv",title:"\u7C7B\u578B\u8F6C\u6362",sidebar_position:7,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","\u7C7B\u578B\u8F6C\u6362","gconv","\u9AD8\u6548\u8F6C\u6362","\u7ED3\u6784\u4F53\u8F6C\u6362","\u6570\u636E\u7C7B\u578B","\u7F16\u7A0B\u6548\u7387","\u63A5\u53E3\u6587\u6863","\u65E0\u7F1D\u8F6C\u6362"],description:"GoFrame\u6846\u67B6\u4E2D\u7684gconv\u5305\uFF0C\u8BE5\u5305\u63D0\u4F9B\u4E86\u9AD8\u6548\u7684\u7C7B\u578B\u8F6C\u6362\u529F\u80FD\uFF0C\u652F\u6301\u4ECE\u5E38\u7528\u6570\u636E\u7C7B\u578B\u5230\u6307\u5B9A\u7C7B\u578B\u7684\u8F6C\u6362\uFF0C\u5E76\u53EF\u5C06\u4EFB\u610F\u7C7B\u578B\u8F6C\u6362\u4E3Astruct\u5BF9\u8C61\u3002gconv\u5E7F\u6CDB\u4F7F\u7528\u65AD\u8A00\uFF0C\u6709\u6548\u63D0\u5347\u7A0B\u5E8F\u6027\u80FD\uFF0C\u662F\u5F00\u53D1\u8005\u5B9E\u73B0\u7C7B\u578B\u8F6C\u6362\u7684\u7406\u60F3\u9009\u62E9\u3002"},l=void 0,a={},d=[{value:"\u57FA\u672C\u4ECB\u7ECD",id:"\u57FA\u672C\u4ECB\u7ECD",level:2},{value:"\u76F8\u5173\u6587\u6863",id:"\u76F8\u5173\u6587\u6863",level:2}];function u(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"\u57FA\u672C\u4ECB\u7ECD",children:"\u57FA\u672C\u4ECB\u7ECD"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"GoFrame"})," \u6846\u67B6\u63D0\u4F9B\u4E86\u975E\u5E38\u5F3A\u5927\u6613\u7528\u7684\u7C7B\u578B\u8F6C\u6362\u5305 ",(0,o.jsx)(t.code,{children:"gconv"}),"\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u5C06\u5E38\u7528\u6570\u636E\u7C7B\u578B\u8F6C\u6362\u4E3A\u6307\u5B9A\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u5BF9\u5E38\u7528\u57FA\u672C\u6570\u636E\u7C7B\u578B\u4E4B\u95F4\u7684\u65E0\u7F1D\u8F6C\u6362\uFF0C\u540C\u65F6\u4E5F\u652F\u6301\u4EFB\u610F\u7C7B\u578B\u5230 ",(0,o.jsx)(t.code,{children:"struct"})," \u5BF9\u8C61\u7684\u8F6C\u6362\u3002\u7531\u4E8E ",(0,o.jsx)(t.code,{children:"gconv"})," \u6A21\u5757\u5185\u90E8\u5927\u91CF\u4F18\u5148\u4F7F\u7528\u4E86\u65AD\u8A00\u800C\u975E\u53CD\u5C04\uFF0C\u56E0\u6B64\u6267\u884C\u7684\u6548\u7387\u975E\u5E38\u9AD8\u3002"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"\u6CE8\u610F\u4E8B\u9879\uFF1A"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"gconv"})," \u5305\u7684\u4E3B\u8981\u76EE\u6807\u662F\u63D0\u4F9B\u7B80\u4FBF\u4E14\u9AD8\u6548\u7684\u7C7B\u578B\u8F6C\u6362\u529F\u80FD\uFF0C\u5F00\u53D1\u8005\u5E94\u5F53\u6CE8\u610F\u8F6C\u6362\u7684\u8F93\u5165\u53C2\u6570\u4EE5\u53CA\u5F53\u524D\u4F7F\u7528\u7684\u4E1A\u52A1\u573A\u666F\uFF0C\u90E8\u5206\u65B9\u6CD5\u5982\u679C\u8F6C\u6362\u5931\u8D25\uFF0C\u90A3\u4E48\u65B9\u6CD5\u5E76\u4E0D\u4F1A\u8FD4\u56DE\u9519\u8BEF\u539F\u56E0\uFF0C\u4E5F\u4E0D\u4F1A\u4EA7\u751F ",(0,o.jsx)(t.code,{children:"panic"}),"\uFF0C\u800C\u662F\u76F4\u63A5\u4EE5\u8F6C\u6362\u5931\u8D25\u540E\u7684\u6570\u503C\u8FD4\u56DE\u3002\u56E0\u6B64\uFF0C\u5F00\u53D1\u8005\u5F80\u5F80\u9700\u8981\u7ED3\u5408\u8FD4\u56DE\u503C\u4EE5\u53CA\u5F53\u524D\u4F7F\u7528\u7684\u4E1A\u52A1\u573A\u666F\u6765\u7EFC\u5408\u5224\u65AD\u7ED3\u679C\u7684\u6B63\u786E\u6027\u3002"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"\u4F7F\u7528\u65B9\u5F0F\uFF1A"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/util/gconv"\n'})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"\u63A5\u53E3\u6587\u6863"}),"\uFF1A"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/util/gconv",children:"https://pkg.go.dev/github.com/gogf/gf/v2/util/gconv"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"\u65B9\u6CD5\u5217\u8868\uFF1A"})}),"\n",(0,o.jsx)(t.p,{children:"\u65B9\u6CD5\u5217\u8868\u53EF\u80FD\u6EDE\u540E\u4E8E\u4EE3\u7801\uFF0C\u8BE6\u60C5\u8BF7\u67E5\u770B\u63A5\u53E3\u6587\u6863\u3002"}),"\n",(0,o.jsx)(t.h2,{id:"\u76F8\u5173\u6587\u6863",children:"\u76F8\u5173\u6587\u6863"}),"\n","\n",(0,o.jsx)(i.Z,{})]})}function g(e={}){let{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},894301:function(e,t,n){n.d(t,{Z:()=>v});var r=n("785893");n("667294");var o=n("467026"),c=n("123413"),i=n("83012"),s=n("743115"),l=n("863150"),a=n("96025"),d=n("134403");let u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function g(e){let{href:t,children:n}=e;return(0,r.jsx)(i.Z,{href:t,className:(0,o.Z)("card padding--lg",u.cardContainer),children:n})}function h(e){let{href:t,icon:n,title:c,description:i}=e;return(0,r.jsxs)(g,{href:t,children:[(0,r.jsxs)(d.Z,{as:"h2",className:(0,o.Z)("text--truncate",u.cardTitle),title:c,children:[n," ",c]}),i&&(0,r.jsx)("p",{className:(0,o.Z)("text--truncate",u.cardDescription),title:i,children:i})]})}function p(e){let{item:t}=e,n=(0,c.LM)(t),o=function(){let{selectMessage:e}=(0,s.c)();return t=>e(t,(0,a.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,r.jsx)(h,{href:n,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??o(t.items.length)}):null}function m(e){let{item:t}=e,n=(0,l.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",o=(0,c.xz)(t.docId??void 0);return(0,r.jsx)(h,{href:t.href,icon:n,title:t.label,description:t.description??o?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,r.jsx)(m,{item:t});case"category":return(0,r.jsx)(p,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e,n=(0,c.jA)();return(0,r.jsx)(v,{items:n.items,className:t})}function v(e){let{items:t,className:n}=e;if(!t)return(0,r.jsx)(x,{...e});let i=(0,c.MN)(t);return(0,r.jsx)("section",{className:(0,o.Z)("row",n),children:i.map((e,t)=>(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(f,{item:e})},t))})}},743115:function(e,t,n){n.d(t,{c:function(){return l}});var r=n(667294),o=n(402933);let c=["zero","one","two","few","many","other"];function i(e){return c.filter(t=>e.includes(t))}let s={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function l(){let e=function(){let{i18n:{currentLocale:e}}=(0,o.Z)();return(0,r.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),s}},[e])}();return{selectMessage:(t,n)=>(function(e,t,n){let r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);let o=n.select(t);return r[Math.min(n.pluralForms.indexOf(o),r.length-1)]})(n,t,e)}}},250065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return i}});var r=n(667294);let o={},c=r.createContext(o);function i(e){let t=r.useContext(c);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);