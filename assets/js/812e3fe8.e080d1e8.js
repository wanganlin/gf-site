"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[5545],{462223:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u6821\u9a8c/\u6570\u636e\u6821\u9a8c-\u53c2\u6570\u7c7b\u578b/\u6570\u636e\u6821\u9a8c-Map\u6821\u9a8c/\u6570\u636e\u6821\u9a8c-Map\u6821\u9a8c","title":"\u6570\u636e\u6821\u9a8c-Map\u6821\u9a8c","description":"","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u6821\u9a8c/\u6570\u636e\u6821\u9a8c-\u53c2\u6570\u7c7b\u578b/\u6570\u636e\u6821\u9a8c-Map\u6821\u9a8c/\u6570\u636e\u6821\u9a8c-Map\u6821\u9a8c.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u6821\u9a8c/\u6570\u636e\u6821\u9a8c-\u53c2\u6570\u7c7b\u578b/\u6570\u636e\u6821\u9a8c-Map\u6821\u9a8c","slug":"/docs/core/gvalid-parameter-type-map","permalink":"/docs/core/gvalid-parameter-type-map","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u6821\u9a8c/\u6570\u636e\u6821\u9a8c-\u53c2\u6570\u7c7b\u578b/\u6570\u636e\u6821\u9a8c-Map\u6821\u9a8c/\u6570\u636e\u6821\u9a8c-Map\u6821\u9a8c.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730810002000,"frontMatter":{"slug":"/docs/core/gvalid-parameter-type-map","title":"\u6570\u636e\u6821\u9a8c-Map\u6821\u9a8c","hide_title":true},"sidebar":"mainSidebar","previous":{"title":"\u6570\u636e\u6821\u9a8c-\u5355\u6570\u636e\u6821\u9a8c","permalink":"/docs/core/gvalid-parameter-type-basic"},"next":{"title":"Map\u6821\u9a8c-\u57fa\u672c\u4f7f\u7528","permalink":"/docs/core/gvalid-parameter-type-map-example"}}');var o=r(474848),s=r(28453),c=r(744074);const a={slug:"/docs/core/gvalid-parameter-type-map",title:"\u6570\u636e\u6821\u9a8c-Map\u6821\u9a8c",hide_title:!0},i=void 0,l={},u=[];function d(e){return(0,o.jsx)(c.A,{})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d()}},744074:(e,t,r)=>{r.d(t,{A:()=>N});var n=r(296540),o=r(634164),s=r(291054),c=r(314783),a=r(597639);const i=["zero","one","two","few","many","other"];function l(e){return i.filter((t=>e.includes(t)))}const u={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function d(){const{i18n:{currentLocale:e}}=(0,a.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),u}}),[e])}function p(){const e=d();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const o=r.select(t),s=r.pluralForms.indexOf(o);return n[Math.min(s,n.length-1)]}(r,t,e)}}var m=r(940877),f=r(923230),h=r(985225);const g={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var x=r(474848);function y(e){let{href:t,children:r}=e;return(0,x.jsx)(c.A,{href:t,className:(0,o.A)("card padding--lg",g.cardContainer),children:r})}function v(e){let{href:t,icon:r,title:n,description:s}=e;return(0,x.jsxs)(y,{href:t,children:[(0,x.jsxs)(h.A,{as:"h2",className:(0,o.A)("text--truncate",g.cardTitle),title:n,children:[r," ",n]}),s&&(0,x.jsx)("p",{className:(0,o.A)("text--truncate",g.cardDescription),title:s,children:s})]})}function M(e){let{item:t}=e;const r=(0,s.Nr)(t),n=function(){const{selectMessage:e}=p();return t=>e(t,(0,f.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,x.jsx)(v,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function j(e){let{item:t}=e;const r=(0,m.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,s.cC)(t.docId??void 0);return(0,x.jsx)(v,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return(0,x.jsx)(j,{item:t});case"category":return(0,x.jsx)(M,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function w(e){let{className:t}=e;const r=(0,s.$S)();return(0,x.jsx)(N,{items:r.items,className:t})}function N(e){const{items:t,className:r}=e;if(!t)return(0,x.jsx)(w,{...e});const n=(0,s.d1)(t);return(0,x.jsx)("section",{className:(0,o.A)("row",r),children:n.map(((e,t)=>(0,x.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,x.jsx)(b,{item:e})},t)))})}},28453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>a});var n=r(296540);const o={},s=n.createContext(o);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);