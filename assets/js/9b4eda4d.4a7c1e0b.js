"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["1766"],{162171:function(e,t,r){r.r(t),r.d(t,{metadata:()=>n,contentTitle:()=>c,default:()=>m,assets:()=>a,toc:()=>d,frontMatter:()=>l});var n=JSON.parse('{"id":"docs/\u6846\u67B6\u8BBE\u8BA1/\u6846\u67B6\u8BBE\u8BA1","title":"\u6846\u67B6\u8BBE\u8BA1","description":"GoFrame\u6846\u67B6\u7684\u8BBE\u8BA1\u601D\u60F3\u662F\u5176\u7075\u9B42\u6240\u5728\uFF0C\u662F\u4F7F\u7528\u8005\u4E0D\u53EF\u6216\u7F3A\u7684\u5185\u529F\u5FC3\u6CD5\u3002\u76F8\u6BD4\u4E8E\u7B80\u5355\u7684\u6280\u5DE7\u6027\u6846\u67B6\u548C\u7EC4\u4EF6\u4F7F\u7528\uFF0CGoFrame\u66F4\u6CE8\u91CD\u6307\u5BFC\u4F7F\u7528\u8005\u7406\u89E3\u8BBE\u8BA1\u7406\u5FF5\u3002\u638C\u63E1\u4E86GoFrame\u7684\u72EC\u7279\u8BBE\u8BA1\u601D\u60F3\uFF0C\u5C31\u7B49\u4E8E\u638C\u63E1\u4E86\u6574\u4E2A\u6846\u67B6\u7684\u7CBE\u9AD3\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u6846\u67B6\u8BBE\u8BA1/\u6846\u67B6\u8BBE\u8BA1.md","sourceDirName":"docs/\u6846\u67B6\u8BBE\u8BA1","slug":"/docs/design","permalink":"/2.7.x/docs/design","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u6846\u67B6\u8BBE\u8BA1/\u6846\u67B6\u8BBE\u8BA1.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":1,"frontMatter":{"slug":"/docs/design","title":"\u6846\u67B6\u8BBE\u8BA1","sidebar_position":1,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","\u6846\u67B6\u8BBE\u8BA1","\u8BBE\u8BA1\u601D\u60F3","\u5185\u529F\u5FC3\u6CD5","\u7EC4\u4EF6\u4F7F\u7528","\u72EC\u7279\u8BBE\u8BA1","\u6280\u5DE7\u6027\u6846\u67B6","\u7406\u89E3\u8BBE\u8BA1","\u4F7F\u7528\u6307\u5357"],"description":"GoFrame\u6846\u67B6\u7684\u8BBE\u8BA1\u601D\u60F3\u662F\u5176\u7075\u9B42\u6240\u5728\uFF0C\u662F\u4F7F\u7528\u8005\u4E0D\u53EF\u6216\u7F3A\u7684\u5185\u529F\u5FC3\u6CD5\u3002\u76F8\u6BD4\u4E8E\u7B80\u5355\u7684\u6280\u5DE7\u6027\u6846\u67B6\u548C\u7EC4\u4EF6\u4F7F\u7528\uFF0CGoFrame\u66F4\u6CE8\u91CD\u6307\u5BFC\u4F7F\u7528\u8005\u7406\u89E3\u8BBE\u8BA1\u7406\u5FF5\u3002\u638C\u63E1\u4E86GoFrame\u7684\u72EC\u7279\u8BBE\u8BA1\u601D\u60F3\uFF0C\u5C31\u7B49\u4E8E\u638C\u63E1\u4E86\u6574\u4E2A\u6846\u67B6\u7684\u7CBE\u9AD3\u3002"},"sidebar":"mainSidebar","next":{"title":"\u6A21\u5757\u5316\u8BBE\u8BA1","permalink":"/2.7.x/docs/design/modular"}}'),o=r("785893"),i=r("250065"),s=r("894301");let l={slug:"/docs/design",title:"\u6846\u67B6\u8BBE\u8BA1",sidebar_position:1,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","\u6846\u67B6\u8BBE\u8BA1","\u8BBE\u8BA1\u601D\u60F3","\u5185\u529F\u5FC3\u6CD5","\u7EC4\u4EF6\u4F7F\u7528","\u72EC\u7279\u8BBE\u8BA1","\u6280\u5DE7\u6027\u6846\u67B6","\u7406\u89E3\u8BBE\u8BA1","\u4F7F\u7528\u6307\u5357"],description:"GoFrame\u6846\u67B6\u7684\u8BBE\u8BA1\u601D\u60F3\u662F\u5176\u7075\u9B42\u6240\u5728\uFF0C\u662F\u4F7F\u7528\u8005\u4E0D\u53EF\u6216\u7F3A\u7684\u5185\u529F\u5FC3\u6CD5\u3002\u76F8\u6BD4\u4E8E\u7B80\u5355\u7684\u6280\u5DE7\u6027\u6846\u67B6\u548C\u7EC4\u4EF6\u4F7F\u7528\uFF0CGoFrame\u66F4\u6CE8\u91CD\u6307\u5BFC\u4F7F\u7528\u8005\u7406\u89E3\u8BBE\u8BA1\u7406\u5FF5\u3002\u638C\u63E1\u4E86GoFrame\u7684\u72EC\u7279\u8BBE\u8BA1\u601D\u60F3\uFF0C\u5C31\u7B49\u4E8E\u638C\u63E1\u4E86\u6574\u4E2A\u6846\u67B6\u7684\u7CBE\u9AD3\u3002"},c=void 0,a={},d=[];function u(e){let t={code:"code",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["\u8BBE\u8BA1\u601D\u60F3\u662F ",(0,o.jsx)(t.code,{children:"GoFrame"})," \u6846\u67B6\u7684\u7075\u9B42\uFF0C\u540C\u65F6\u5BF9\u4E8E\u4F7F\u7528\u8005\u6765\u8BB2\uFF0C\u662F\u4E0D\u53EF\u6216\u7F3A\u7684\u5185\u529F\u5FC3\u6CD5\u3002"]}),"\n",(0,o.jsx)(t.p,{children:"\u6388\u4EBA\u4E88\u9C7C\u4E0D\u5982\u6388\u4EBA\u4EE5\u6E14\uFF0C\u6BD4\u8D77\u6280\u5DE7\u6027\u7684\u6846\u67B6\u3001\u7EC4\u4EF6\u4F7F\u7528\uFF0C\u6211\u4EEC\u60F3\u5C3D\u53EF\u80FD\u5730\u544A\u8BC9\u5927\u5BB6\u4E3A\u4EC0\u4E48\u8FD9\u6837\u3001\u4E3A\u4EC0\u4E48\u90A3\u6837\u3002"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"GoFrame"})," \u6709\u5176\u72EC\u7279\u7684\u8BBE\u8BA1\u601D\u60F3\uFF0C\u7406\u89E3\u4E86 ",(0,o.jsx)(t.code,{children:"GoFrame"})," \u7684\u8BBE\u8BA1\u601D\u60F3\uFF0C\u60A8\u5C31\u7406\u89E3\u4E86 ",(0,o.jsx)(t.code,{children:"GoFrame"})," \u7684\u5168\u90E8\u3002"]}),"\n","\n",(0,o.jsx)(s.Z,{})]})}function m(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},894301:function(e,t,r){r.d(t,{Z:()=>F});var n=r("785893");r("667294");var o=r("467026"),i=r("123413"),s=r("83012"),l=r("743115"),c=r("863150"),a=r("96025"),d=r("134403");let u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:t,children:r}=e;return(0,n.jsx)(s.Z,{href:t,className:(0,o.Z)("card padding--lg",u.cardContainer),children:r})}function f(e){let{href:t,icon:r,title:i,description:s}=e;return(0,n.jsxs)(m,{href:t,children:[(0,n.jsxs)(d.Z,{as:"h2",className:(0,o.Z)("text--truncate",u.cardTitle),title:i,children:[r," ",i]}),s&&(0,n.jsx)("p",{className:(0,o.Z)("text--truncate",u.cardDescription),title:s,children:s})]})}function p(e){let{item:t}=e,r=(0,i.LM)(t),o=function(){let{selectMessage:e}=(0,l.c)();return t=>e(t,(0,a.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,n.jsx)(f,{href:r,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??o(t.items.length)}):null}function h(e){let{item:t}=e,r=(0,c.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",o=(0,i.xz)(t.docId??void 0);return(0,n.jsx)(f,{href:t.href,icon:r,title:t.label,description:t.description??o?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,n.jsx)(h,{item:t});case"category":return(0,n.jsx)(p,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e,r=(0,i.jA)();return(0,n.jsx)(F,{items:r.items,className:t})}function F(e){let{items:t,className:r}=e;if(!t)return(0,n.jsx)(g,{...e});let s=(0,i.MN)(t);return(0,n.jsx)("section",{className:(0,o.Z)("row",r),children:s.map((e,t)=>(0,n.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,n.jsx)(x,{item:e})},t))})}},743115:function(e,t,r){r.d(t,{c:function(){return c}});var n=r(667294),o=r(402933);let i=["zero","one","two","few","many","other"];function s(e){return i.filter(t=>e.includes(t))}let l={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function c(){let e=function(){let{i18n:{currentLocale:e}}=(0,o.Z)();return(0,n.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),l}},[e])}();return{selectMessage:(t,r)=>(function(e,t,r){let n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);let o=r.select(t);return n[Math.min(r.pluralForms.indexOf(o),n.length-1)]})(r,t,e)}}},250065:function(e,t,r){r.d(t,{Z:function(){return l},a:function(){return s}});var n=r(667294);let o={},i=n.createContext(o);function s(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);