"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["37118"],{25916:function(e,t,r){r.r(t),r.d(t,{metadata:()=>n,contentTitle:()=>c,default:()=>m,assets:()=>a,toc:()=>u,frontMatter:()=>l});var n=JSON.parse('{"id":"docs/\u7EC4\u4EF6\u5217\u8868/\u5B9E\u7528\u5DE5\u5177/\u5B9E\u7528\u5DE5\u5177","title":"\u5B9E\u7528\u5DE5\u5177","description":"\u8BE5\u9875\u9762\u4ECB\u7ECD\u4E86GoFrame\u6846\u67B6\u4E2D\u7684\u5B9E\u7528\u5DE5\u5177\u7EC4\u4EF6\uFF0C\u901A\u8FC7\u8FD9\u4E9B\u5DE5\u5177\u5F00\u53D1\u8005\u53EF\u4EE5\u63D0\u5347\u5F00\u53D1\u6548\u7387\u3002GoFrame\u6846\u67B6\u63D0\u4F9B\u4E86\u4E00\u7CFB\u5217\u9AD8\u6548\u7684\u5B9E\u7528\u5DE5\u5177\u6765\u5E2E\u52A9\u5F00\u53D1\u8005\u66F4\u5FEB\u3001\u66F4\u8F7B\u677E\u5730\u5B8C\u6210\u9879\u76EE\uFF0C\u4E3A\u5F00\u53D1\u8005\u63D0\u4F9B\u4FBF\u6377\u7684\u6587\u6863\u5F00\u53D1\u4F53\u9A8C\u3002","source":"@site/docs/docs/\u7EC4\u4EF6\u5217\u8868/\u5B9E\u7528\u5DE5\u5177/\u5B9E\u7528\u5DE5\u5177.md","sourceDirName":"docs/\u7EC4\u4EF6\u5217\u8868/\u5B9E\u7528\u5DE5\u5177","slug":"/docs/components/util","permalink":"/docs/components/util","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7EC4\u4EF6\u5217\u8868/\u5B9E\u7528\u5DE5\u5177/\u5B9E\u7528\u5DE5\u5177.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731055597000,"sidebarPosition":6,"frontMatter":{"slug":"/docs/components/util","title":"\u5B9E\u7528\u5DE5\u5177","sidebar_position":6,"hide_title":true,"keywords":["\u5B9E\u7528\u5DE5\u5177","GoFrame","GoFrame\u6846\u67B6","\u7EC4\u4EF6","\u5F00\u53D1","\u6548\u7387","\u6587\u6863","\u5DE5\u5177\u5E93","Web\u6846\u67B6","\u5F00\u6E90\u9879\u76EE"],"description":"\u8BE5\u9875\u9762\u4ECB\u7ECD\u4E86GoFrame\u6846\u67B6\u4E2D\u7684\u5B9E\u7528\u5DE5\u5177\u7EC4\u4EF6\uFF0C\u901A\u8FC7\u8FD9\u4E9B\u5DE5\u5177\u5F00\u53D1\u8005\u53EF\u4EE5\u63D0\u5347\u5F00\u53D1\u6548\u7387\u3002GoFrame\u6846\u67B6\u63D0\u4F9B\u4E86\u4E00\u7CFB\u5217\u9AD8\u6548\u7684\u5B9E\u7528\u5DE5\u5177\u6765\u5E2E\u52A9\u5F00\u53D1\u8005\u66F4\u5FEB\u3001\u66F4\u8F7B\u677E\u5730\u5B8C\u6210\u9879\u76EE\uFF0C\u4E3A\u5F00\u53D1\u8005\u63D0\u4F9B\u4FBF\u6377\u7684\u6587\u6863\u5F00\u53D1\u4F53\u9A8C\u3002"},"sidebar":"mainSidebar","previous":{"title":"CRC32\u7B97\u6CD5-gcrc32","permalink":"/docs/components/crypto-gcrc32"},"next":{"title":"\u968F\u673A\u6570-grand","permalink":"/docs/components/util-grand"}}'),o=r("785893"),i=r("250065"),s=r("894301");let l={slug:"/docs/components/util",title:"\u5B9E\u7528\u5DE5\u5177",sidebar_position:6,hide_title:!0,keywords:["\u5B9E\u7528\u5DE5\u5177","GoFrame","GoFrame\u6846\u67B6","\u7EC4\u4EF6","\u5F00\u53D1","\u6548\u7387","\u6587\u6863","\u5DE5\u5177\u5E93","Web\u6846\u67B6","\u5F00\u6E90\u9879\u76EE"],description:"\u8BE5\u9875\u9762\u4ECB\u7ECD\u4E86GoFrame\u6846\u67B6\u4E2D\u7684\u5B9E\u7528\u5DE5\u5177\u7EC4\u4EF6\uFF0C\u901A\u8FC7\u8FD9\u4E9B\u5DE5\u5177\u5F00\u53D1\u8005\u53EF\u4EE5\u63D0\u5347\u5F00\u53D1\u6548\u7387\u3002GoFrame\u6846\u67B6\u63D0\u4F9B\u4E86\u4E00\u7CFB\u5217\u9AD8\u6548\u7684\u5B9E\u7528\u5DE5\u5177\u6765\u5E2E\u52A9\u5F00\u53D1\u8005\u66F4\u5FEB\u3001\u66F4\u8F7B\u677E\u5730\u5B8C\u6210\u9879\u76EE\uFF0C\u4E3A\u5F00\u53D1\u8005\u63D0\u4F9B\u4FBF\u6377\u7684\u6587\u6863\u5F00\u53D1\u4F53\u9A8C\u3002"},c=void 0,a={},u=[];function d(e){return(0,o.jsx)(s.Z,{})}function m(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},894301:function(e,t,r){r.d(t,{Z:()=>b});var n=r("785893");r("667294");var o=r("467026"),i=r("123413"),s=r("83012"),l=r("743115"),c=r("863150"),a=r("96025"),u=r("134403");let d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:t,children:r}=e;return(0,n.jsx)(s.Z,{href:t,className:(0,o.Z)("card padding--lg",d.cardContainer),children:r})}function f(e){let{href:t,icon:r,title:i,description:s}=e;return(0,n.jsxs)(m,{href:t,children:[(0,n.jsxs)(u.Z,{as:"h2",className:(0,o.Z)("text--truncate",d.cardTitle),title:i,children:[r," ",i]}),s&&(0,n.jsx)("p",{className:(0,o.Z)("text--truncate",d.cardDescription),title:s,children:s})]})}function p(e){let{item:t}=e,r=(0,i.LM)(t),o=function(){let{selectMessage:e}=(0,l.c)();return t=>e(t,(0,a.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,n.jsx)(f,{href:r,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??o(t.items.length)}):null}function h(e){let{item:t}=e,r=(0,c.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",o=(0,i.xz)(t.docId??void 0);return(0,n.jsx)(f,{href:t.href,icon:r,title:t.label,description:t.description??o?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,n.jsx)(h,{item:t});case"category":return(0,n.jsx)(p,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e,r=(0,i.jA)();return(0,n.jsx)(b,{items:r.items,className:t})}function b(e){let{items:t,className:r}=e;if(!t)return(0,n.jsx)(x,{...e});let s=(0,i.MN)(t);return(0,n.jsx)("section",{className:(0,o.Z)("row",r),children:s.map((e,t)=>(0,n.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,n.jsx)(g,{item:e})},t))})}},743115:function(e,t,r){r.d(t,{c:function(){return c}});var n=r(667294),o=r(402933);let i=["zero","one","two","few","many","other"];function s(e){return i.filter(t=>e.includes(t))}let l={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function c(){let e=function(){let{i18n:{currentLocale:e}}=(0,o.Z)();return(0,n.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),l}},[e])}();return{selectMessage:(t,r)=>(function(e,t,r){let n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);let o=r.select(t);return n[Math.min(r.pluralForms.indexOf(o),n.length-1)]})(r,t,e)}}},250065:function(e,t,r){r.d(t,{Z:function(){return l},a:function(){return s}});var n=r(667294);let o={},i=n.createContext(o);function s(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);