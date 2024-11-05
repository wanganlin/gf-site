"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[49750],{838748:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u6587\u672c\u5904\u7406/\u6b63\u5219\u8868\u8fbe\u5f0f-gregex/\u6b63\u5219\u8868\u8fbe\u5f0f-gregex","title":"\u6b63\u5219\u8868\u8fbe\u5f0f-gregex","description":"\u57fa\u672c\u4ecb\u7ecd","source":"@site/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u6587\u672c\u5904\u7406/\u6b63\u5219\u8868\u8fbe\u5f0f-gregex/\u6b63\u5219\u8868\u8fbe\u5f0f-gregex.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u6587\u672c\u5904\u7406/\u6b63\u5219\u8868\u8fbe\u5f0f-gregex","slug":"/docs/components/text-gregex","permalink":"/docs/components/text-gregex","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u6587\u672c\u5904\u7406/\u6b63\u5219\u8868\u8fbe\u5f0f-gregex/\u6b63\u5219\u8868\u8fbe\u5f0f-gregex.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730810002000,"sidebarPosition":1,"frontMatter":{"slug":"/docs/components/text-gregex","title":"\u6b63\u5219\u8868\u8fbe\u5f0f-gregex","sidebar_position":1,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"\u5b57\u7b26\u4e32\u5904\u7406-gstr","permalink":"/docs/components/text-gstr"},"next":{"title":"\u6b63\u5219\u8868\u8fbe\u5f0f-\u57fa\u672c\u4f7f\u7528","permalink":"/docs/components/text-gregex-example"}}');var s=n(474848),o=n(28453),c=n(744074);const i={slug:"/docs/components/text-gregex",title:"\u6b63\u5219\u8868\u8fbe\u5f0f-gregex",sidebar_position:1,hide_title:!0},l=void 0,a={},d=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"gregex"})," \u63d0\u4f9b\u4e86\u5bf9\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u652f\u6301\uff0c\u5e95\u5c42\u662f\u5bf9\u6807\u51c6\u5e93 ",(0,s.jsx)(t.code,{children:"regexp"})," \u7684\u5c01\u88c5\uff0c\u6781\u5927\u5730\u7b80\u5316\u4e86\u6b63\u5219\u7684\u4f7f\u7528\uff0c\u5e76\u91c7\u7528\u4e86\u89e3\u6790\u7f13\u5b58\u8bbe\u8ba1\uff0c\u63d0\u9ad8\u4e86\u6267\u884c\u6548\u7387\u3002"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"\u4f7f\u7528\u65b9\u5f0f\uff1a"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/text/gregex"\n'})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/text/gregex",children:"https://pkg.go.dev/github.com/gogf/gf/v2/text/gregex"})}),"\n",(0,s.jsx)(t.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n","\n",(0,s.jsx)(c.A,{})]})}function g(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},744074:(e,t,n)=>{n.d(t,{A:()=>N});var r=n(296540),s=n(634164),o=n(291054),c=n(314783),i=n(597639);const l=["zero","one","two","few","many","other"];function a(e){return l.filter((t=>e.includes(t)))}const d={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function u(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),d}}),[e])}function g(){const e=u();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),o=n.pluralForms.indexOf(s);return r[Math.min(o,r.length-1)]}(n,t,e)}}var m=n(940877),p=n(923230),h=n(985225);const x={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var f=n(474848);function j(e){let{href:t,children:n}=e;return(0,f.jsx)(c.A,{href:t,className:(0,s.A)("card padding--lg",x.cardContainer),children:n})}function v(e){let{href:t,icon:n,title:r,description:o}=e;return(0,f.jsxs)(j,{href:t,children:[(0,f.jsxs)(h.A,{as:"h2",className:(0,s.A)("text--truncate",x.cardTitle),title:r,children:[n," ",r]}),o&&(0,f.jsx)("p",{className:(0,s.A)("text--truncate",x.cardDescription),title:o,children:o})]})}function b(e){let{item:t}=e;const n=(0,o.Nr)(t),r=function(){const{selectMessage:e}=g();return t=>e(t,(0,p.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,f.jsx)(v,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function k(e){let{item:t}=e;const n=(0,m.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.cC)(t.docId??void 0);return(0,f.jsx)(v,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function w(e){let{item:t}=e;switch(t.type){case"link":return(0,f.jsx)(k,{item:t});case"category":return(0,f.jsx)(b,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const n=(0,o.$S)();return(0,f.jsx)(N,{items:n.items,className:t})}function N(e){const{items:t,className:n}=e;if(!t)return(0,f.jsx)(y,{...e});const r=(0,o.d1)(t);return(0,f.jsx)("section",{className:(0,s.A)("row",n),children:r.map(((e,t)=>(0,f.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,f.jsx)(w,{item:e})},t)))})}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var r=n(296540);const s={},o=r.createContext(s);function c(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);