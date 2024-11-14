"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["68573"],{998464:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>l,default:()=>h,assets:()=>d,toc:()=>a,frontMatter:()=>c});var r=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u65F6\u95F4\u7EF4\u62A4/ORM\u94FE\u5F0F\u64CD\u4F5C-\u65F6\u95F4\u7EF4\u62A4","title":"ORM\u94FE\u5F0F\u64CD\u4F5C-\u65F6\u95F4\u7EF4\u62A4","description":"\u4F7F\u7528GoFrame\u6846\u67B6\u4E2D\u7684gdb\u6A21\u5757\u8FDB\u884CORM\u94FE\u5F0F\u64CD\u4F5C\u65F6\u7684\u65F6\u95F4\u7EF4\u62A4\u7279\u6027\u3002\u901A\u8FC7\u81EA\u52A8\u586B\u5145\u521B\u5EFA\u3001\u66F4\u65B0\u548C\u5220\u9664\u65F6\u95F4\uFF0C\u6709\u6548\u63D0\u9AD8\u4E86\u5F00\u53D1\u6548\u7387\u3002\u6587\u7AE0\u8BE6\u7EC6\u8BB2\u89E3\u4E86\u5982\u4F55\u542F\u7528\u8FD9\u4E9B\u7279\u6027\u4EE5\u53CA\u5728\u6267\u884C\u6570\u636E\u5E93\u64CD\u4F5C\u5982\u63D2\u5165\u3001\u66F4\u65B0\u548C\u5220\u9664\u65F6\u7684\u5B9E\u73B0\u65B9\u5F0F\u3002\u6B64\u5916\uFF0C\u8FD8\u63D0\u4F9B\u4E86\u9488\u5BF9\u8F6F\u5220\u9664\u548C\u5FFD\u7565\u65F6\u95F4\u7EF4\u62A4\u7B49\u573A\u666F\u7684\u89E3\u51B3\u65B9\u6848\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u65F6\u95F4\u7EF4\u62A4/ORM\u94FE\u5F0F\u64CD\u4F5C-\u65F6\u95F4\u7EF4\u62A4.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u65F6\u95F4\u7EF4\u62A4","slug":"/docs/core/gdb-chaining-soft-time","permalink":"/2.7.x/docs/core/gdb-chaining-soft-time","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u65F6\u95F4\u7EF4\u62A4/ORM\u94FE\u5F0F\u64CD\u4F5C-\u65F6\u95F4\u7EF4\u62A4.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":11,"frontMatter":{"slug":"/docs/core/gdb-chaining-soft-time","title":"ORM\u94FE\u5F0F\u64CD\u4F5C-\u65F6\u95F4\u7EF4\u62A4","sidebar_position":11,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","ORM","\u94FE\u5F0F\u64CD\u4F5C","\u65F6\u95F4\u7EF4\u62A4","gdb","\u81EA\u52A8\u586B\u5145","\u8F6F\u5220\u9664","\u8868\u73B0\u5C42","\u6570\u636E\u64CD\u4F5C"],"description":"\u4F7F\u7528GoFrame\u6846\u67B6\u4E2D\u7684gdb\u6A21\u5757\u8FDB\u884CORM\u94FE\u5F0F\u64CD\u4F5C\u65F6\u7684\u65F6\u95F4\u7EF4\u62A4\u7279\u6027\u3002\u901A\u8FC7\u81EA\u52A8\u586B\u5145\u521B\u5EFA\u3001\u66F4\u65B0\u548C\u5220\u9664\u65F6\u95F4\uFF0C\u6709\u6548\u63D0\u9AD8\u4E86\u5F00\u53D1\u6548\u7387\u3002\u6587\u7AE0\u8BE6\u7EC6\u8BB2\u89E3\u4E86\u5982\u4F55\u542F\u7528\u8FD9\u4E9B\u7279\u6027\u4EE5\u53CA\u5728\u6267\u884C\u6570\u636E\u5E93\u64CD\u4F5C\u5982\u63D2\u5165\u3001\u66F4\u65B0\u548C\u5220\u9664\u65F6\u7684\u5B9E\u73B0\u65B9\u5F0F\u3002\u6B64\u5916\uFF0C\u8FD8\u63D0\u4F9B\u4E86\u9488\u5BF9\u8F6F\u5220\u9664\u548C\u5FFD\u7565\u65F6\u95F4\u7EF4\u62A4\u7B49\u573A\u666F\u7684\u89E3\u51B3\u65B9\u6848\u3002"},"sidebar":"mainSidebar","previous":{"title":"ORM\u94FE\u5F0F\u64CD\u4F5C-\u67E5\u8BE2\u7F13\u5B58","permalink":"/2.7.x/docs/core/gdb-chaining-query-cache"},"next":{"title":"\u65F6\u95F4\u7EF4\u62A4-\u57FA\u672C\u4F7F\u7528","permalink":"/2.7.x/docs/core/gdb-chaining-soft-time-example"}}'),i=n("785893"),o=n("250065"),s=n("894301");let c={slug:"/docs/core/gdb-chaining-soft-time",title:"ORM\u94FE\u5F0F\u64CD\u4F5C-\u65F6\u95F4\u7EF4\u62A4",sidebar_position:11,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","ORM","\u94FE\u5F0F\u64CD\u4F5C","\u65F6\u95F4\u7EF4\u62A4","gdb","\u81EA\u52A8\u586B\u5145","\u8F6F\u5220\u9664","\u8868\u73B0\u5C42","\u6570\u636E\u64CD\u4F5C"],description:"\u4F7F\u7528GoFrame\u6846\u67B6\u4E2D\u7684gdb\u6A21\u5757\u8FDB\u884CORM\u94FE\u5F0F\u64CD\u4F5C\u65F6\u7684\u65F6\u95F4\u7EF4\u62A4\u7279\u6027\u3002\u901A\u8FC7\u81EA\u52A8\u586B\u5145\u521B\u5EFA\u3001\u66F4\u65B0\u548C\u5220\u9664\u65F6\u95F4\uFF0C\u6709\u6548\u63D0\u9AD8\u4E86\u5F00\u53D1\u6548\u7387\u3002\u6587\u7AE0\u8BE6\u7EC6\u8BB2\u89E3\u4E86\u5982\u4F55\u542F\u7528\u8FD9\u4E9B\u7279\u6027\u4EE5\u53CA\u5728\u6267\u884C\u6570\u636E\u5E93\u64CD\u4F5C\u5982\u63D2\u5165\u3001\u66F4\u65B0\u548C\u5220\u9664\u65F6\u7684\u5B9E\u73B0\u65B9\u5F0F\u3002\u6B64\u5916\uFF0C\u8FD8\u63D0\u4F9B\u4E86\u9488\u5BF9\u8F6F\u5220\u9664\u548C\u5FFD\u7565\u65F6\u95F4\u7EF4\u62A4\u7B49\u573A\u666F\u7684\u89E3\u51B3\u65B9\u6848\u3002"},l=void 0,d={},a=[{value:"\u57FA\u672C\u4ECB\u7ECD",id:"\u57FA\u672C\u4ECB\u7ECD",level:2},{value:"\u7279\u6027\u542F\u7528",id:"\u7279\u6027\u542F\u7528",level:2},{value:"\u76F8\u5173\u6587\u6863",id:"\u76F8\u5173\u6587\u6863",level:2}];function u(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"\u57FA\u672C\u4ECB\u7ECD",children:"\u57FA\u672C\u4ECB\u7ECD"}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"\u9700\u8981\u6CE8\u610F\uFF0C\u8BE5\u7279\u6027\u4EC5\u5BF9\u94FE\u5F0F\u64CD\u4F5C\u6709\u6548\u3002"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"gdb"})," \u6A21\u5757\u652F\u6301\u5BF9\u6570\u636E\u8BB0\u5F55\u7684\u5199\u5165\u3001\u66F4\u65B0\u3001\u5220\u9664\u65F6\u95F4\u81EA\u52A8\u586B\u5145\uFF0C\u63D0\u9AD8\u5F00\u53D1\u7EF4\u62A4\u6548\u7387\u3002\u4E3A\u4E86\u4FBF\u4E8E\u65F6\u95F4\u5B57\u6BB5\u540D\u79F0\u3001\u7C7B\u578B\u7684\u7EDF\u4E00\u7EF4\u62A4\uFF0C\u5982\u679C\u4F7F\u7528\u8BE5\u7279\u6027\uFF0C\u6211\u4EEC\u7EA6\u5B9A\uFF1A"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\u5B57\u6BB5\u7684\u7C7B\u578B\u53EF\u4EE5\u4E3A\u65F6\u95F4\u7C7B\u578B\u3001\u6570\u5B57\u6574\u578B\u6216\u8005\u5E03\u5C14\u578B\uFF0C\u5982: ",(0,i.jsx)(t.code,{children:"date"}),", ",(0,i.jsx)(t.code,{children:"datetime"}),", ",(0,i.jsx)(t.code,{children:"timestamp"}),", ",(0,i.jsx)(t.code,{children:"int"}),", ",(0,i.jsx)(t.code,{children:"uint"}),", ",(0,i.jsx)(t.code,{children:"big int"}),", ",(0,i.jsx)(t.code,{children:"bool"}),"\u7B49\u3002"]}),"\n",(0,i.jsxs)(t.li,{children:["\u5B57\u6BB5\u7684\u540D\u79F0\u652F\u6301\u81EA\u5B9A\u4E49\u8BBE\u7F6E\uFF0C\u9ED8\u8BA4\u540D\u79F0\u7EA6\u5B9A\u4E3A\uFF1A","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"created_at"})," \u7528\u4E8E\u8BB0\u5F55\u521B\u5EFA\u65F6\u66F4\u65B0\uFF0C\u4EC5\u4F1A\u5199\u5165\u4E00\u6B21\u3002"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"updated_at"})," \u7528\u4E8E\u8BB0\u5F55\u4FEE\u6539\u65F6\u66F4\u65B0\uFF0C\u6BCF\u6B21\u8BB0\u5F55\u53D8\u66F4\u65F6\u66F4\u65B0\u3002"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"deleted_at"})," \u7528\u4E8E\u8BB0\u5F55\u7684\u8F6F\u5220\u9664\u7279\u6027\uFF0C\u53EA\u6709\u5F53\u8BB0\u5F55\u5220\u9664\u65F6\u4F1A\u5199\u5165\u4E00\u6B21\u3002\n\u5B57\u6BB5\u540D\u79F0\u4E0D\u533A\u5206\u5927\u5C0F\u5199\uFF0C\u4E5F\u4F1A\u5FFD\u7565\u7279\u6B8A\u5B57\u7B26\uFF0C\u4F8B\u5982 ",(0,i.jsx)(t.code,{children:"CreatedAt"}),", ",(0,i.jsx)(t.code,{children:"UpdatedAt"}),", ",(0,i.jsx)(t.code,{children:"DeletedAt"})," \u4E5F\u662F\u652F\u6301\u7684\u3002\u6B64\u5916\uFF0C\u65F6\u95F4\u5B57\u6BB5\u540D\u79F0\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E\u6587\u4EF6\u8FDB\u884C\u81EA\u5B9A\u4E49\u4FEE\u6539\uFF0C\u5E76\u53EF\u4F7F\u7528 ",(0,i.jsx)(t.code,{children:"TimeMaintainDisabled"})," \u914D\u7F6E\u5728\u6570\u636E\u5E93\u5B9E\u4F8B\u4E0A\u5B8C\u6574\u5173\u95ED\u8BE5\u7279\u6027\uFF0C\u5177\u4F53\u8BF7\u53C2\u8003 ",(0,i.jsx)(t.a,{href:"/2.7.x/docs/core/gdb-config",children:"ORM\u4F7F\u7528\u914D\u7F6E"})," \u7AE0\u8282\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"\u7279\u6027\u542F\u7528",children:"\u7279\u6027\u542F\u7528"}),"\n",(0,i.jsxs)(t.p,{children:["\u5F53\u6570\u636E\u8868\u5305\u542B ",(0,i.jsx)(t.code,{children:"created_at"}),"\u3001 ",(0,i.jsx)(t.code,{children:"updated_at"}),"\u3001 ",(0,i.jsx)(t.code,{children:"deleted_at"})," \u4EFB\u610F\u4E00\u4E2A\u6216\u591A\u4E2A\u5B57\u6BB5\u65F6\uFF0C\u8BE5\u7279\u6027\u81EA\u52A8\u542F\u7528\u3002"]}),"\n",(0,i.jsx)(t.h2,{id:"\u76F8\u5173\u6587\u6863",children:"\u76F8\u5173\u6587\u6863"}),"\n","\n",(0,i.jsx)(s.Z,{})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},894301:function(e,t,n){n.d(t,{Z:()=>j});var r=n("785893");n("667294");var i=n("467026"),o=n("123413"),s=n("83012"),c=n("743115"),l=n("863150"),d=n("96025"),a=n("134403");let u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function h(e){let{href:t,children:n}=e;return(0,r.jsx)(s.Z,{href:t,className:(0,i.Z)("card padding--lg",u.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:o,description:s}=e;return(0,r.jsxs)(h,{href:t,children:[(0,r.jsxs)(a.Z,{as:"h2",className:(0,i.Z)("text--truncate",u.cardTitle),title:o,children:[n," ",o]}),s&&(0,r.jsx)("p",{className:(0,i.Z)("text--truncate",u.cardDescription),title:s,children:s})]})}function f(e){let{item:t}=e,n=(0,o.LM)(t),i=function(){let{selectMessage:e}=(0,c.c)();return t=>e(t,(0,d.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,r.jsx)(m,{href:n,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??i(t.items.length)}):null}function x(e){let{item:t}=e,n=(0,l.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",i=(0,o.xz)(t.docId??void 0);return(0,r.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function p(e){let{item:t}=e;switch(t.type){case"link":return(0,r.jsx)(x,{item:t});case"category":return(0,r.jsx)(f,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e,n=(0,o.jA)();return(0,r.jsx)(j,{items:n.items,className:t})}function j(e){let{items:t,className:n}=e;if(!t)return(0,r.jsx)(g,{...e});let s=(0,o.MN)(t);return(0,r.jsx)("section",{className:(0,i.Z)("row",n),children:s.map((e,t)=>(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(p,{item:e})},t))})}},743115:function(e,t,n){n.d(t,{c:function(){return l}});var r=n(667294),i=n(402933);let o=["zero","one","two","few","many","other"];function s(e){return o.filter(t=>e.includes(t))}let c={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function l(){let e=function(){let{i18n:{currentLocale:e}}=(0,i.Z)();return(0,r.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),c}},[e])}();return{selectMessage:(t,n)=>(function(e,t,n){let r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);let i=n.select(t);return r[Math.min(n.pluralForms.indexOf(i),r.length-1)]})(n,t,e)}}},250065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return s}});var r=n(667294);let i={},o=r.createContext(i);function s(e){let t=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);