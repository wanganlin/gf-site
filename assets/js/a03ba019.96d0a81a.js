"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[84934],{977719:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u52a0\u5bc6\u89e3\u5bc6/\u52a0\u5bc6\u89e3\u5bc6","title":"\u52a0\u5bc6\u89e3\u5bc6","description":"\u672c\u9875\u9762\u4ecb\u7ecd\u4e86\u4f7f\u7528GoFrame\u6846\u67b6\u8fdb\u884c\u52a0\u5bc6\u89e3\u5bc6\u7684\u5e38\u89c4\u65b9\u6cd5\uff0c\u5305\u62ec\u5982\u4f55\u5728GoFrame\u4e2d\u5b9e\u73b0\u6570\u636e\u7684\u5b89\u5168\u6027\u548c\u4fdd\u62a4\u3002\u901a\u8fc7\u6709\u6548\u7684\u52a0\u5bc6\u6280\u672f\uff0c\u786e\u4fdd\u4fe1\u606f\u7684\u673a\u5bc6\u6027\u548c\u5b8c\u6574\u6027\uff0c\u4e3a\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u63d0\u4f9b\u575a\u5b9e\u7684\u6570\u636e\u5b89\u5168\u4fdd\u969c\u3002","source":"@site/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u52a0\u5bc6\u89e3\u5bc6/\u52a0\u5bc6\u89e3\u5bc6.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u52a0\u5bc6\u89e3\u5bc6","slug":"/docs/components/crypto","permalink":"/docs/components/crypto","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u52a0\u5bc6\u89e3\u5bc6/\u52a0\u5bc6\u89e3\u5bc6.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731055597000,"sidebarPosition":5,"frontMatter":{"slug":"/docs/components/crypto","title":"\u52a0\u5bc6\u89e3\u5bc6","sidebar_position":5,"hide_title":true,"keywords":["\u52a0\u5bc6","\u89e3\u5bc6","GoFrame","\u52a0\u5bc6\u6280\u672f","\u89e3\u5bc6\u6280\u672f","\u6570\u636e\u5b89\u5168","GoFrame\u6846\u67b6","\u4fe1\u606f\u4fdd\u62a4","\u5b89\u5168\u7ec4\u4ef6","\u6570\u636e\u52a0\u5bc6"],"description":"\u672c\u9875\u9762\u4ecb\u7ecd\u4e86\u4f7f\u7528GoFrame\u6846\u67b6\u8fdb\u884c\u52a0\u5bc6\u89e3\u5bc6\u7684\u5e38\u89c4\u65b9\u6cd5\uff0c\u5305\u62ec\u5982\u4f55\u5728GoFrame\u4e2d\u5b9e\u73b0\u6570\u636e\u7684\u5b89\u5168\u6027\u548c\u4fdd\u62a4\u3002\u901a\u8fc7\u6709\u6548\u7684\u52a0\u5bc6\u6280\u672f\uff0c\u786e\u4fdd\u4fe1\u606f\u7684\u673a\u5bc6\u6027\u548c\u5b8c\u6574\u6027\uff0c\u4e3a\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u63d0\u4f9b\u575a\u5b9e\u7684\u6570\u636e\u5b89\u5168\u4fdd\u969c\u3002"},"sidebar":"mainSidebar","previous":{"title":"Redis\u5ba2\u6237\u7aef-gredis","permalink":"/docs/components/database-gredis"},"next":{"title":"MD5\u7b97\u6cd5-gmd5","permalink":"/docs/components/crypto-gmd5"}}');var o=n(474848),s=n(28453),c=n(103514);const i={slug:"/docs/components/crypto",title:"\u52a0\u5bc6\u89e3\u5bc6",sidebar_position:5,hide_title:!0,keywords:["\u52a0\u5bc6","\u89e3\u5bc6","GoFrame","\u52a0\u5bc6\u6280\u672f","\u89e3\u5bc6\u6280\u672f","\u6570\u636e\u5b89\u5168","GoFrame\u6846\u67b6","\u4fe1\u606f\u4fdd\u62a4","\u5b89\u5168\u7ec4\u4ef6","\u6570\u636e\u52a0\u5bc6"],description:"\u672c\u9875\u9762\u4ecb\u7ecd\u4e86\u4f7f\u7528GoFrame\u6846\u67b6\u8fdb\u884c\u52a0\u5bc6\u89e3\u5bc6\u7684\u5e38\u89c4\u65b9\u6cd5\uff0c\u5305\u62ec\u5982\u4f55\u5728GoFrame\u4e2d\u5b9e\u73b0\u6570\u636e\u7684\u5b89\u5168\u6027\u548c\u4fdd\u62a4\u3002\u901a\u8fc7\u6709\u6548\u7684\u52a0\u5bc6\u6280\u672f\uff0c\u786e\u4fdd\u4fe1\u606f\u7684\u673a\u5bc6\u6027\u548c\u5b8c\u6574\u6027\uff0c\u4e3a\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u63d0\u4f9b\u575a\u5b9e\u7684\u6570\u636e\u5b89\u5168\u4fdd\u969c\u3002"},a=void 0,l={},d=[];function u(e){return(0,o.jsx)(c.A,{})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u()}},103514:(e,t,n)=>{n.d(t,{A:()=>y});n(296540);var r=n(634164),o=n(944718),s=n(328774),c=n(853465),i=n(316654),a=n(721312),l=n(751107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=n(474848);function m(e){let{href:t,children:n}=e;return(0,u.jsx)(s.A,{href:t,className:(0,r.A)("card padding--lg",d.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:o,description:s}=e;return(0,u.jsxs)(m,{href:t,children:[(0,u.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:o,children:[n," ",o]}),s&&(0,u.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:s,children:s})]})}function f(e){let{item:t}=e;const n=(0,o.Nr)(t),r=function(){const{selectMessage:e}=(0,c.W)();return t=>e(t,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,u.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function h(e){let{item:t}=e;const n=(0,i.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.cC)(t.docId??void 0);return(0,u.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(h,{item:t});case"category":return(0,u.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,o.$S)();return(0,u.jsx)(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(x,{...e});const s=(0,o.d1)(t);return(0,u.jsx)("section",{className:(0,r.A)("row",n),children:s.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(g,{item:e})},t)))})}},853465:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(296540),o=n(144586);const s=["zero","one","two","few","many","other"];function c(e){return s.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function l(){const e=a();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),s=n.pluralForms.indexOf(o);return r[Math.min(s,r.length-1)]}(n,t,e)}}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var r=n(296540);const o={},s=r.createContext(o);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);