"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["16545"],{904972:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>a,default:()=>m,assets:()=>c,toc:()=>d,frontMatter:()=>l});var r=JSON.parse('{"id":"docs/\u670D\u52A1\u53EF\u89C2\u6D4B\u6027/\u670D\u52A1\u94FE\u8DEF\u8DDF\u8E2A/\u94FE\u8DEF\u8DDF\u8E2A-HTTP\u793A\u4F8B/\u94FE\u8DEF\u8DDF\u8E2A-HTTP\u793A\u4F8B","title":"\u94FE\u8DEF\u8DDF\u8E2A-HTTP\u793A\u4F8B","description":"\u5728\u4F7F\u7528GoFrame\u6846\u67B6\u65F6\u8FDB\u884C\u94FE\u8DEF\u8DDF\u8E2A\u3002\u901A\u8FC7\u4E24\u4E2A\u793A\u4F8B\uFF0C\u6F14\u793A\u670D\u52A1\u95F4\u4E0A\u4E0B\u6587\u6570\u636E\u4F20\u9012\u4EE5\u53CAHTTP\u3001\u6570\u636E\u5E93\u3001Redis\u548C\u65E5\u5FD7\u7EC4\u4EF6\u7684\u5B8C\u6574\u94FE\u8DEF\u8DDF\u8E2A\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u66F4\u597D\u5730\u638C\u63E1\u5E94\u7528\u670D\u52A1\u4E4B\u95F4\u7684\u8BF7\u6C42\u5904\u7406\u8FC7\u7A0B\uFF0C\u63D0\u9AD8\u7CFB\u7EDF\u7684\u76D1\u63A7\u548C\u5206\u6790\u80FD\u529B\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u670D\u52A1\u53EF\u89C2\u6D4B\u6027/\u670D\u52A1\u94FE\u8DEF\u8DDF\u8E2A/\u94FE\u8DEF\u8DDF\u8E2A-HTTP\u793A\u4F8B/\u94FE\u8DEF\u8DDF\u8E2A-HTTP\u793A\u4F8B.md","sourceDirName":"docs/\u670D\u52A1\u53EF\u89C2\u6D4B\u6027/\u670D\u52A1\u94FE\u8DEF\u8DDF\u8E2A/\u94FE\u8DEF\u8DDF\u8E2A-HTTP\u793A\u4F8B","slug":"/docs/obs/tracing-http-example","permalink":"/en/2.7.x/docs/obs/tracing-http-example","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u670D\u52A1\u53EF\u89C2\u6D4B\u6027/\u670D\u52A1\u94FE\u8DEF\u8DDF\u8E2A/\u94FE\u8DEF\u8DDF\u8E2A-HTTP\u793A\u4F8B/\u94FE\u8DEF\u8DDF\u8E2A-HTTP\u793A\u4F8B.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":3,"frontMatter":{"slug":"/docs/obs/tracing-http-example","title":"\u94FE\u8DEF\u8DDF\u8E2A-HTTP\u793A\u4F8B","sidebar_position":3,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","\u94FE\u8DEF\u8DDF\u8E2A","HTTP\u793A\u4F8B","baggage","\u4E0A\u4E0B\u6587\u6570\u636E\u4F20\u9012","HTTP+DB+Redis+Logging","\u670D\u52A1\u94FE\u8DEF","\u793A\u4F8B\u6F14\u793A","\u7EC4\u4EF6\u8DDF\u8E2A"],"description":"\u5728\u4F7F\u7528GoFrame\u6846\u67B6\u65F6\u8FDB\u884C\u94FE\u8DEF\u8DDF\u8E2A\u3002\u901A\u8FC7\u4E24\u4E2A\u793A\u4F8B\uFF0C\u6F14\u793A\u670D\u52A1\u95F4\u4E0A\u4E0B\u6587\u6570\u636E\u4F20\u9012\u4EE5\u53CAHTTP\u3001\u6570\u636E\u5E93\u3001Redis\u548C\u65E5\u5FD7\u7EC4\u4EF6\u7684\u5B8C\u6574\u94FE\u8DEF\u8DDF\u8E2A\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u66F4\u597D\u5730\u638C\u63E1\u5E94\u7528\u670D\u52A1\u4E4B\u95F4\u7684\u8BF7\u6C42\u5904\u7406\u8FC7\u7A0B\uFF0C\u63D0\u9AD8\u7CFB\u7EDF\u7684\u76D1\u63A7\u548C\u5206\u6790\u80FD\u529B\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u94FE\u8DEF\u8DDF\u8E2A-\u57FA\u672C\u793A\u4F8B","permalink":"/en/2.7.x/docs/obs/tracing-example"},"next":{"title":"\u94FE\u8DEF\u8DDF\u8E2A-HTTP\u793A\u4F8B-Baggage","permalink":"/en/2.7.x/docs/obs/tracing-http-example-baggage"}}'),o=n("785893"),i=n("250065"),s=n("894301");let l={slug:"/docs/obs/tracing-http-example",title:"\u94FE\u8DEF\u8DDF\u8E2A-HTTP\u793A\u4F8B",sidebar_position:3,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","\u94FE\u8DEF\u8DDF\u8E2A","HTTP\u793A\u4F8B","baggage","\u4E0A\u4E0B\u6587\u6570\u636E\u4F20\u9012","HTTP+DB+Redis+Logging","\u670D\u52A1\u94FE\u8DEF","\u793A\u4F8B\u6F14\u793A","\u7EC4\u4EF6\u8DDF\u8E2A"],description:"\u5728\u4F7F\u7528GoFrame\u6846\u67B6\u65F6\u8FDB\u884C\u94FE\u8DEF\u8DDF\u8E2A\u3002\u901A\u8FC7\u4E24\u4E2A\u793A\u4F8B\uFF0C\u6F14\u793A\u670D\u52A1\u95F4\u4E0A\u4E0B\u6587\u6570\u636E\u4F20\u9012\u4EE5\u53CAHTTP\u3001\u6570\u636E\u5E93\u3001Redis\u548C\u65E5\u5FD7\u7EC4\u4EF6\u7684\u5B8C\u6574\u94FE\u8DEF\u8DDF\u8E2A\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u66F4\u597D\u5730\u638C\u63E1\u5E94\u7528\u670D\u52A1\u4E4B\u95F4\u7684\u8BF7\u6C42\u5904\u7406\u8FC7\u7A0B\uFF0C\u63D0\u9AD8\u7CFB\u7EDF\u7684\u76D1\u63A7\u548C\u5206\u6790\u80FD\u529B\u3002"},a=void 0,c={},d=[];function u(e){let t={code:"code",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["\u5728\u672C\u7AE0\u8282\u4E2D\uFF0C\u6211\u4EEC\u6F14\u793A\u4E24\u4E2A\u793A\u4F8B\uFF0C\u4E00\u4E2A\u7528\u4E8E\u6F14\u793A ",(0,o.jsx)(t.code,{children:"baggage"})," \u670D\u52A1\u95F4\u4E0A\u4E0B\u6587\u6570\u636E\u4F20\u9012\uFF1B\u4E00\u4E2A\u7528\u4E8E\u6F14\u793A\u8F83\u5B8C\u6574\u7684 ",(0,o.jsx)(t.code,{children:"HTTP+DB+Redis+Logging"})," \u7EC4\u4EF6\u7684\u94FE\u8DEF\u8DDF\u8E2A\u3002"]}),"\n","\n",(0,o.jsx)(s.Z,{})]})}function m(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},894301:function(e,t,n){n.d(t,{Z:()=>T});var r=n("785893");n("667294");var o=n("467026"),i=n("123413"),s=n("83012"),l=n("743115"),a=n("863150"),c=n("96025"),d=n("134403");let u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:t,children:n}=e;return(0,r.jsx)(s.Z,{href:t,className:(0,o.Z)("card padding--lg",u.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:i,description:s}=e;return(0,r.jsxs)(m,{href:t,children:[(0,r.jsxs)(d.Z,{as:"h2",className:(0,o.Z)("text--truncate",u.cardTitle),title:i,children:[n," ",i]}),s&&(0,r.jsx)("p",{className:(0,o.Z)("text--truncate",u.cardDescription),title:s,children:s})]})}function g(e){let{item:t}=e,n=(0,i.LM)(t),o=function(){let{selectMessage:e}=(0,l.c)();return t=>e(t,(0,c.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,r.jsx)(p,{href:n,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??o(t.items.length)}):null}function f(e){let{item:t}=e,n=(0,a.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",o=(0,i.xz)(t.docId??void 0);return(0,r.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??o?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,r.jsx)(f,{item:t});case"category":return(0,r.jsx)(g,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e,n=(0,i.jA)();return(0,r.jsx)(T,{items:n.items,className:t})}function T(e){let{items:t,className:n}=e;if(!t)return(0,r.jsx)(x,{...e});let s=(0,i.MN)(t);return(0,r.jsx)("section",{className:(0,o.Z)("row",n),children:s.map((e,t)=>(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(h,{item:e})},t))})}},743115:function(e,t,n){n.d(t,{c:function(){return a}});var r=n(667294),o=n(402933);let i=["zero","one","two","few","many","other"];function s(e){return i.filter(t=>e.includes(t))}let l={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function a(){let e=function(){let{i18n:{currentLocale:e}}=(0,o.Z)();return(0,r.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),l}},[e])}();return{selectMessage:(t,n)=>(function(e,t,n){let r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);let o=n.select(t);return r[Math.min(n.pluralForms.indexOf(o),r.length-1)]})(n,t,e)}}},250065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return s}});var r=n(667294);let o={},i=r.createContext(o);function s(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);