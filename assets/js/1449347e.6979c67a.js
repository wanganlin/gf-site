"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["36050"],{599189:function(e,t,r){r.r(t),r.d(t,{metadata:()=>n,contentTitle:()=>c,default:()=>m,assets:()=>a,toc:()=>u,frontMatter:()=>l});var n=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u7ED3\u679C\u5904\u7406/ORM\u7ED3\u679C\u5904\u7406","title":"ORM\u7ED3\u679C\u5904\u7406","description":"\u4F7F\u7528GoFrame\u6846\u67B6\u4E2D\u63D0\u4F9B\u7684\u529F\u80FD\u8FDB\u884CORM\u7ED3\u679C\u7684\u5904\u7406\uFF0C\u8BE6\u7EC6\u8BB2\u89E3\u4E86\u6570\u636E\u5E93\u7ED3\u679C\u7684\u68C0\u7D22\u4E0E\u8F6C\u6362\u8FC7\u7A0B\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u66F4\u9AD8\u6548\u5730\u8FDB\u884C\u6570\u636E\u64CD\u4F5C\u4E0E\u7BA1\u7406\uFF0C\u63D0\u5347Web\u5E94\u7528\u7684\u5F00\u53D1\u6548\u7387\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u7ED3\u679C\u5904\u7406/ORM\u7ED3\u679C\u5904\u7406.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u7ED3\u679C\u5904\u7406","slug":"/docs/core/gdb-result","permalink":"/2.7.x/docs/core/gdb-result","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u7ED3\u679C\u5904\u7406/ORM\u7ED3\u679C\u5904\u7406.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":4,"frontMatter":{"slug":"/docs/core/gdb-result","title":"ORM\u7ED3\u679C\u5904\u7406","sidebar_position":4,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","ORM\u7ED3\u679C\u5904\u7406","\u6570\u636E\u5E93\u5904\u7406","gdb","\u6570\u636E\u68C0\u7D22","\u7ED3\u679C\u8F6C\u6362","SQL\u67E5\u8BE2","\u6570\u636E\u64CD\u4F5C","Web\u5F00\u53D1"],"description":"\u4F7F\u7528GoFrame\u6846\u67B6\u4E2D\u63D0\u4F9B\u7684\u529F\u80FD\u8FDB\u884CORM\u7ED3\u679C\u7684\u5904\u7406\uFF0C\u8BE6\u7EC6\u8BB2\u89E3\u4E86\u6570\u636E\u5E93\u7ED3\u679C\u7684\u68C0\u7D22\u4E0E\u8F6C\u6362\u8FC7\u7A0B\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u66F4\u9AD8\u6548\u5730\u8FDB\u884C\u6570\u636E\u64CD\u4F5C\u4E0E\u7BA1\u7406\uFF0C\u63D0\u5347Web\u5E94\u7528\u7684\u5F00\u53D1\u6548\u7387\u3002"},"sidebar":"mainSidebar","previous":{"title":"ORM\u4E8B\u52A1\u5904\u7406-\u5D4C\u5957\u4E8B\u52A1","permalink":"/2.7.x/docs/core/gdb-transaction-nested"},"next":{"title":"ORM\u7ED3\u679C\u5904\u7406-\u7ED3\u679C\u7C7B\u578B","permalink":"/2.7.x/docs/core/gdb-result-types"}}'),o=r("785893"),i=r("250065"),s=r("894301");let l={slug:"/docs/core/gdb-result",title:"ORM\u7ED3\u679C\u5904\u7406",sidebar_position:4,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","ORM\u7ED3\u679C\u5904\u7406","\u6570\u636E\u5E93\u5904\u7406","gdb","\u6570\u636E\u68C0\u7D22","\u7ED3\u679C\u8F6C\u6362","SQL\u67E5\u8BE2","\u6570\u636E\u64CD\u4F5C","Web\u5F00\u53D1"],description:"\u4F7F\u7528GoFrame\u6846\u67B6\u4E2D\u63D0\u4F9B\u7684\u529F\u80FD\u8FDB\u884CORM\u7ED3\u679C\u7684\u5904\u7406\uFF0C\u8BE6\u7EC6\u8BB2\u89E3\u4E86\u6570\u636E\u5E93\u7ED3\u679C\u7684\u68C0\u7D22\u4E0E\u8F6C\u6362\u8FC7\u7A0B\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u66F4\u9AD8\u6548\u5730\u8FDB\u884C\u6570\u636E\u64CD\u4F5C\u4E0E\u7BA1\u7406\uFF0C\u63D0\u5347Web\u5E94\u7528\u7684\u5F00\u53D1\u6548\u7387\u3002"},c=void 0,a={},u=[];function d(e){return(0,o.jsx)(s.Z,{})}function m(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},894301:function(e,t,r){r.d(t,{Z:()=>b});var n=r("785893");r("667294");var o=r("467026"),i=r("123413"),s=r("83012"),l=r("743115"),c=r("863150"),a=r("96025"),u=r("134403");let d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:t,children:r}=e;return(0,n.jsx)(s.Z,{href:t,className:(0,o.Z)("card padding--lg",d.cardContainer),children:r})}function f(e){let{href:t,icon:r,title:i,description:s}=e;return(0,n.jsxs)(m,{href:t,children:[(0,n.jsxs)(u.Z,{as:"h2",className:(0,o.Z)("text--truncate",d.cardTitle),title:i,children:[r," ",i]}),s&&(0,n.jsx)("p",{className:(0,o.Z)("text--truncate",d.cardDescription),title:s,children:s})]})}function p(e){let{item:t}=e,r=(0,i.LM)(t),o=function(){let{selectMessage:e}=(0,l.c)();return t=>e(t,(0,a.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,n.jsx)(f,{href:r,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??o(t.items.length)}):null}function h(e){let{item:t}=e,r=(0,c.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",o=(0,i.xz)(t.docId??void 0);return(0,n.jsx)(f,{href:t.href,icon:r,title:t.label,description:t.description??o?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,n.jsx)(h,{item:t});case"category":return(0,n.jsx)(p,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e,r=(0,i.jA)();return(0,n.jsx)(b,{items:r.items,className:t})}function b(e){let{items:t,className:r}=e;if(!t)return(0,n.jsx)(x,{...e});let s=(0,i.MN)(t);return(0,n.jsx)("section",{className:(0,o.Z)("row",r),children:s.map((e,t)=>(0,n.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,n.jsx)(g,{item:e})},t))})}},743115:function(e,t,r){r.d(t,{c:function(){return c}});var n=r(667294),o=r(402933);let i=["zero","one","two","few","many","other"];function s(e){return i.filter(t=>e.includes(t))}let l={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function c(){let e=function(){let{i18n:{currentLocale:e}}=(0,o.Z)();return(0,n.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),l}},[e])}();return{selectMessage:(t,r)=>(function(e,t,r){let n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);let o=r.select(t);return n[Math.min(r.pluralForms.indexOf(o),n.length-1)]})(r,t,e)}}},250065:function(e,t,r){r.d(t,{Z:function(){return l},a:function(){return s}});var n=r(667294);let o={},i=n.createContext(o);function s(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);