"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["90274"],{244040:function(e,t,r){r.r(t),r.d(t,{metadata:()=>n,contentTitle:()=>a,default:()=>f,assets:()=>c,toc:()=>u,frontMatter:()=>o});var n=JSON.parse('{"id":"release/\u5386\u53F2\u7248\u672C\u8BB0\u5F55 v1.x/\u5386\u53F2\u7248\u672C\u8BB0\u5F55 v1.x","title":"\u5386\u53F2\u7248\u672C\u8BB0\u5F55 v1.x","description":"","source":"@site/docs/release/\u5386\u53F2\u7248\u672C\u8BB0\u5F55 v1.x/\u5386\u53F2\u7248\u672C\u8BB0\u5F55 v1.x.md","sourceDirName":"release/\u5386\u53F2\u7248\u672C\u8BB0\u5F55 v1.x","slug":"/release/v1.x","permalink":"/release/v1.x","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/release/\u5386\u53F2\u7248\u672C\u8BB0\u5F55 v1.x/\u5386\u53F2\u7248\u672C\u8BB0\u5F55 v1.x.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731558303000,"sidebarPosition":10000,"frontMatter":{"slug":"/release/v1.x","title":"\u5386\u53F2\u7248\u672C\u8BB0\u5F55 v1.x","sidebar_position":10000,"hide_title":true},"sidebar":"releaseSidebar","previous":{"title":"v2.0 2022-03-09","permalink":"/release/v2.0"},"next":{"title":"v1.16 2021-06-01","permalink":"/release/v1.16"}}'),l=r("785893"),i=r("250065"),s=r("894301");let o={slug:"/release/v1.x",title:"\u5386\u53F2\u7248\u672C\u8BB0\u5F55 v1.x",sidebar_position:1e4,hide_title:!0},a=void 0,c={},u=[];function d(e){return(0,l.jsx)(s.Z,{})}function f(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},894301:function(e,t,r){r.d(t,{Z:()=>v});var n=r("785893");r("667294");var l=r("467026"),i=r("123413"),s=r("83012"),o=r("743115"),a=r("863150"),c=r("96025"),u=r("134403");let d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function f(e){let{href:t,children:r}=e;return(0,n.jsx)(s.Z,{href:t,className:(0,l.Z)("card padding--lg",d.cardContainer),children:r})}function m(e){let{href:t,icon:r,title:i,description:s}=e;return(0,n.jsxs)(f,{href:t,children:[(0,n.jsxs)(u.Z,{as:"h2",className:(0,l.Z)("text--truncate",d.cardTitle),title:i,children:[r," ",i]}),s&&(0,n.jsx)("p",{className:(0,l.Z)("text--truncate",d.cardDescription),title:s,children:s})]})}function p(e){let{item:t}=e,r=(0,i.LM)(t),l=function(){let{selectMessage:e}=(0,o.c)();return t=>e(t,(0,c.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,n.jsx)(m,{href:r,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??l(t.items.length)}):null}function h(e){let{item:t}=e,r=(0,a.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",l=(0,i.xz)(t.docId??void 0);return(0,n.jsx)(m,{href:t.href,icon:r,title:t.label,description:t.description??l?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,n.jsx)(h,{item:t});case"category":return(0,n.jsx)(p,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e,r=(0,i.jA)();return(0,n.jsx)(v,{items:r.items,className:t})}function v(e){let{items:t,className:r}=e;if(!t)return(0,n.jsx)(g,{...e});let s=(0,i.MN)(t);return(0,n.jsx)("section",{className:(0,l.Z)("row",r),children:s.map((e,t)=>(0,n.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,n.jsx)(x,{item:e})},t))})}},743115:function(e,t,r){r.d(t,{c:function(){return a}});var n=r(667294),l=r(402933);let i=["zero","one","two","few","many","other"];function s(e){return i.filter(t=>e.includes(t))}let o={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function a(){let e=function(){let{i18n:{currentLocale:e}}=(0,l.Z)();return(0,n.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),o}},[e])}();return{selectMessage:(t,r)=>(function(e,t,r){let n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);let l=r.select(t);return n[Math.min(r.pluralForms.indexOf(l),n.length-1)]})(r,t,e)}}},250065:function(e,t,r){r.d(t,{Z:function(){return o},a:function(){return s}});var n=r(667294);let l={},i=n.createContext(l);function s(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);