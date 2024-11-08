"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[42806],{722572:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"docs/\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/\u670d\u52a1\u76d1\u63a7\u544a\u8b66/\u670d\u52a1\u76d1\u63a7\u544a\u8b66","title":"\u670d\u52a1\u76d1\u63a7\u544a\u8b66","description":"\u672c\u9875\u9762\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528GoFrame\u6846\u67b6\u8fdb\u884c\u670d\u52a1\u76d1\u63a7\u544a\u8b66\uff0c\u4ecev2.7\u7248\u672c\u5f00\u59cb\uff0c\u5f00\u53d1\u8005\u53ef\u5feb\u901f\u5b9e\u73b0\u76d1\u63a7\u6307\u6807\u53ca\u5176\u66b4\u9732\uff0c\u4fbf\u4e8e\u5bf9\u7cfb\u7edf\u8fdb\u884c\u5168\u9762\u7684\u76d1\u63a7\u548c\u53ca\u65f6\u9884\u8b66\u3002","source":"@site/docs/docs/\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/\u670d\u52a1\u76d1\u63a7\u544a\u8b66/\u670d\u52a1\u76d1\u63a7\u544a\u8b66.md","sourceDirName":"docs/\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/\u670d\u52a1\u76d1\u63a7\u544a\u8b66","slug":"/docs/obs/metrics","permalink":"/en/docs/obs/metrics","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/\u670d\u52a1\u76d1\u63a7\u544a\u8b66/\u670d\u52a1\u76d1\u63a7\u544a\u8b66.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731055597000,"sidebarPosition":1,"frontMatter":{"slug":"/docs/obs/metrics","title":"\u670d\u52a1\u76d1\u63a7\u544a\u8b66","sidebar_position":1,"hide_title":true,"keywords":["\u670d\u52a1\u76d1\u63a7","\u544a\u8b66","\u76d1\u63a7\u544a\u8b66","\u6307\u6807\u66b4\u9732","GoFrame","GoFrame\u6846\u67b6","\u76d1\u63a7\u6307\u6807","\u5f00\u53d1\u8005","v2.7\u7248\u672c","\u6846\u67b6\u7279\u6027"],"description":"\u672c\u9875\u9762\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528GoFrame\u6846\u67b6\u8fdb\u884c\u670d\u52a1\u76d1\u63a7\u544a\u8b66\uff0c\u4ecev2.7\u7248\u672c\u5f00\u59cb\uff0c\u5f00\u53d1\u8005\u53ef\u5feb\u901f\u5b9e\u73b0\u76d1\u63a7\u6307\u6807\u53ca\u5176\u66b4\u9732\uff0c\u4fbf\u4e8e\u5bf9\u7cfb\u7edf\u8fdb\u884c\u5168\u9762\u7684\u76d1\u63a7\u548c\u53ca\u65f6\u9884\u8b66\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u94fe\u8def\u8ddf\u8e2a-TraceID\u6ce8\u5165\u548c\u83b7\u53d6","permalink":"/en/docs/obs/tracing-practice-inject-traceid"},"next":{"title":"\u76d1\u63a7\u544a\u8b66-\u57fa\u672c\u4ecb\u7ecd","permalink":"/en/docs/obs/metrics-intro"}}');var s=n(474848),o=n(28453),c=n(103514);const i={slug:"/docs/obs/metrics",title:"\u670d\u52a1\u76d1\u63a7\u544a\u8b66",sidebar_position:1,hide_title:!0,keywords:["\u670d\u52a1\u76d1\u63a7","\u544a\u8b66","\u76d1\u63a7\u544a\u8b66","\u6307\u6807\u66b4\u9732","GoFrame","GoFrame\u6846\u67b6","\u76d1\u63a7\u6307\u6807","\u5f00\u53d1\u8005","v2.7\u7248\u672c","\u6846\u67b6\u7279\u6027"],description:"\u672c\u9875\u9762\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528GoFrame\u6846\u67b6\u8fdb\u884c\u670d\u52a1\u76d1\u63a7\u544a\u8b66\uff0c\u4ecev2.7\u7248\u672c\u5f00\u59cb\uff0c\u5f00\u53d1\u8005\u53ef\u5feb\u901f\u5b9e\u73b0\u76d1\u63a7\u6307\u6807\u53ca\u5176\u66b4\u9732\uff0c\u4fbf\u4e8e\u5bf9\u7cfb\u7edf\u8fdb\u884c\u5168\u9762\u7684\u76d1\u63a7\u548c\u53ca\u65f6\u9884\u8b66\u3002"},l=void 0,a={},d=[];function u(e){const t={code:"code",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["\u76d1\u63a7\u544a\u8b66\u7279\u6027\u4ece\u6846\u67b6 ",(0,s.jsx)(t.code,{children:"v2.7"})," \u7248\u672c\u5f00\u59cb\u63d0\u4f9b\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["\u5f00\u53d1\u8005\u901a\u8fc7 ",(0,s.jsx)(t.code,{children:"GoFrame"})," \u6846\u67b6\u53ef\u4ee5\u5feb\u901f\u5730\u5b9e\u73b0\u76d1\u63a7\u6307\u6807\u53ca\u6307\u6807\u66b4\u9732\u3002"]}),"\n","\n",(0,s.jsx)(c.A,{})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},103514:(e,t,n)=>{n.d(t,{A:()=>b});n(296540);var r=n(634164),s=n(944718),o=n(328774),c=n(853465),i=n(316654),l=n(721312),a=n(751107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=n(474848);function m(e){let{href:t,children:n}=e;return(0,u.jsx)(o.A,{href:t,className:(0,r.A)("card padding--lg",d.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:s,description:o}=e;return(0,u.jsxs)(m,{href:t,children:[(0,u.jsxs)(a.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:s,children:[n," ",s]}),o&&(0,u.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:o,children:o})]})}function f(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=(0,c.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,u.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function h(e){let{item:t}=e;const n=(0,i.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,u.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(h,{item:t});case"category":return(0,u.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,s.$S)();return(0,u.jsx)(b,{items:n.items,className:t})}function b(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(x,{...e});const o=(0,s.d1)(t);return(0,u.jsx)("section",{className:(0,r.A)("row",n),children:o.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(g,{item:e})},t)))})}},853465:(e,t,n)=>{n.d(t,{W:()=>a});var r=n(296540),s=n(144586);const o=["zero","one","two","few","many","other"];function c(e){return o.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function a(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),o=n.pluralForms.indexOf(s);return r[Math.min(o,r.length-1)]}(n,t,e)}}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var r=n(296540);const s={},o=r.createContext(s);function c(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);