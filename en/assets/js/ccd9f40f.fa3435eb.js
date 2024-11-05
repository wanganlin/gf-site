"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[25460],{891709:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"docs/WEB\u670d\u52a1\u5f00\u53d1/\u8def\u7531\u7ba1\u7406/\u8def\u7531\u7ba1\u7406-\u4e2d\u95f4\u4ef6\u62e6\u622a\u5668/\u8def\u7531\u7ba1\u7406-\u4e2d\u95f4\u4ef6\u62e6\u622a\u5668","title":"\u8def\u7531\u7ba1\u7406-\u4e2d\u95f4\u4ef6/\u62e6\u622a\u5668","description":"","source":"@site/docs/docs/WEB\u670d\u52a1\u5f00\u53d1/\u8def\u7531\u7ba1\u7406/\u8def\u7531\u7ba1\u7406-\u4e2d\u95f4\u4ef6\u62e6\u622a\u5668/\u8def\u7531\u7ba1\u7406-\u4e2d\u95f4\u4ef6\u62e6\u622a\u5668.md","sourceDirName":"docs/WEB\u670d\u52a1\u5f00\u53d1/\u8def\u7531\u7ba1\u7406/\u8def\u7531\u7ba1\u7406-\u4e2d\u95f4\u4ef6\u62e6\u622a\u5668","slug":"/docs/web/router-middleware","permalink":"/en/docs/web/router-middleware","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/WEB\u670d\u52a1\u5f00\u53d1/\u8def\u7531\u7ba1\u7406/\u8def\u7531\u7ba1\u7406-\u4e2d\u95f4\u4ef6\u62e6\u622a\u5668/\u8def\u7531\u7ba1\u7406-\u4e2d\u95f4\u4ef6\u62e6\u622a\u5668.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730810002000,"sidebarPosition":2,"frontMatter":{"slug":"/docs/web/router-middleware","title":"\u8def\u7531\u7ba1\u7406-\u4e2d\u95f4\u4ef6/\u62e6\u622a\u5668","sidebar_position":2,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"\u89c4\u8303\u8def\u7531-\u5e38\u89c1\u95ee\u9898","permalink":"/en/docs/web/router-registering-strict-router-faq"},"next":{"title":"\u4e2d\u95f4\u4ef6/\u62e6\u622a\u5668-\u57fa\u672c\u4ecb\u7ecd","permalink":"/en/docs/web/router-middleware-intro"}}');var o=r(474848),s=r(28453),i=r(744074);const c={slug:"/docs/web/router-middleware",title:"\u8def\u7531\u7ba1\u7406-\u4e2d\u95f4\u4ef6/\u62e6\u622a\u5668",sidebar_position:2,hide_title:!0},l=void 0,a={},u=[];function d(e){return(0,o.jsx)(i.A,{})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d()}},744074:(e,t,r)=>{r.d(t,{A:()=>k});var n=r(296540),o=r(634164),s=r(291054),i=r(314783),c=r(597639);const l=["zero","one","two","few","many","other"];function a(e){return l.filter((t=>e.includes(t)))}const u={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function d(){const{i18n:{currentLocale:e}}=(0,c.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),u}}),[e])}function m(){const e=d();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const o=r.select(t),s=r.pluralForms.indexOf(o);return n[Math.min(s,n.length-1)]}(r,t,e)}}var f=r(940877),p=r(923230),h=r(985225);const g={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var x=r(474848);function w(e){let{href:t,children:r}=e;return(0,x.jsx)(i.A,{href:t,className:(0,o.A)("card padding--lg",g.cardContainer),children:r})}function b(e){let{href:t,icon:r,title:n,description:s}=e;return(0,x.jsxs)(w,{href:t,children:[(0,x.jsxs)(h.A,{as:"h2",className:(0,o.A)("text--truncate",g.cardTitle),title:n,children:[r," ",n]}),s&&(0,x.jsx)("p",{className:(0,o.A)("text--truncate",g.cardDescription),title:s,children:s})]})}function j(e){let{item:t}=e;const r=(0,s.Nr)(t),n=function(){const{selectMessage:e}=m();return t=>e(t,(0,p.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,x.jsx)(b,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function y(e){let{item:t}=e;const r=(0,f.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,s.cC)(t.docId??void 0);return(0,x.jsx)(b,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return(0,x.jsx)(y,{item:t});case"category":return(0,x.jsx)(j,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function N(e){let{className:t}=e;const r=(0,s.$S)();return(0,x.jsx)(k,{items:r.items,className:t})}function k(e){const{items:t,className:r}=e;if(!t)return(0,x.jsx)(N,{...e});const n=(0,s.d1)(t);return(0,x.jsx)("section",{className:(0,o.A)("row",r),children:n.map(((e,t)=>(0,x.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,x.jsx)(v,{item:e})},t)))})}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>c});var n=r(296540);const o={},s=n.createContext(o);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);