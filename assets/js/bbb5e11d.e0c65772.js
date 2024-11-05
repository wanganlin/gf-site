"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[78797],{586928:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>a});const o=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u901a\u7528\u7f16\u89e3\u7801-gjson/\u901a\u7528\u7f16\u89e3\u7801-gjson","title":"\u901a\u7528\u7f16\u89e3\u7801-gjson","description":"gjson \u6a21\u5757\u5b9e\u73b0\u4e86\u5f3a\u5927\u7684\u6570\u636e\u7f16\u7801/\u89e3\u6790\u529f\u80fd\uff0c\u652f\u6301\u6570\u636e\u5c42\u7ea7\u68c0\u7d22\u3001\u52a8\u6001\u521b\u5efa\u4fee\u6539 Json \u5bf9\u8c61\uff0c\u5e76\u652f\u6301\u5e38\u89c1\u6570\u636e\u683c\u5f0f\u7684\u89e3\u6790\u548c\u8f6c\u6362\u7b49\u7279\u70b9\u3002","source":"@site/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u901a\u7528\u7f16\u89e3\u7801-gjson/\u901a\u7528\u7f16\u89e3\u7801-gjson.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u901a\u7528\u7f16\u89e3\u7801-gjson","slug":"/docs/components/encoding-gjson","permalink":"/docs/components/encoding-gjson","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u901a\u7528\u7f16\u89e3\u7801-gjson/\u901a\u7528\u7f16\u89e3\u7801-gjson.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730810002000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/components/encoding-gjson","title":"\u901a\u7528\u7f16\u89e3\u7801-gjson","sidebar_position":0,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"\u7f16\u7801\u89e3\u7801","permalink":"/docs/components/encoding"},"next":{"title":"\u901a\u7528\u7f16\u89e3\u7801-\u5bf9\u8c61\u521b\u5efa","permalink":"/docs/components/encoding-gjson-creation"}}');var s=t(474848),r=t(28453),c=t(744074);const i={slug:"/docs/components/encoding-gjson",title:"\u901a\u7528\u7f16\u89e3\u7801-gjson",sidebar_position:0,hide_title:!0},l=void 0,d={},a=[{value:"<strong>\u4f7f\u7528\u65b9\u5f0f</strong>\uff1a",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"gjson"})," \u6a21\u5757\u5b9e\u73b0\u4e86\u5f3a\u5927\u7684\u6570\u636e\u7f16\u7801/\u89e3\u6790\u529f\u80fd\uff0c\u652f\u6301\u6570\u636e\u5c42\u7ea7\u68c0\u7d22\u3001\u52a8\u6001\u521b\u5efa\u4fee\u6539 ",(0,s.jsx)(n.code,{children:"Json"})," \u5bf9\u8c61\uff0c\u5e76\u652f\u6301\u5e38\u89c1\u6570\u636e\u683c\u5f0f\u7684\u89e3\u6790\u548c\u8f6c\u6362\u7b49\u7279\u70b9\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u7279\u70b9\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u652f\u6301\u6570\u636e\u5c42\u7ea7\u68c0\u7d22\uff1b"}),"\n",(0,s.jsx)(n.li,{children:"\u652f\u6301\u8fd0\u884c\u65f6\u6570\u636e\u4fee\u6539\uff1b"}),"\n",(0,s.jsx)(n.li,{children:"\u652f\u6301\u52a8\u6001\u521b\u5efa\u5c42\u7ea7\u6570\u636e\u7ed3\u6784\uff0c\u5e76\u8f6c\u6362\u4e3a\u652f\u6301\u7684\u6570\u636e\u683c\u5f0f\uff1b"}),"\n",(0,s.jsxs)(n.li,{children:["\u652f\u6301 ",(0,s.jsx)(n.code,{children:"JSON"}),"\u3001 ",(0,s.jsx)(n.code,{children:"XML"}),"\u3001 ",(0,s.jsx)(n.code,{children:"INI"}),"\u3001 ",(0,s.jsx)(n.code,{children:"YAML/YML"}),"\u3001 ",(0,s.jsx)(n.code,{children:"TOML"}),"\u3001 ",(0,s.jsx)(n.code,{children:"PROPERTIES"}),"\u3001 ",(0,s.jsx)(n.code,{children:"Struct"})," \u6570\u636e\u683c\u5f0f\u76f8\u4e92\u8f6c\u6362\uff1b"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["\u9700\u8981\u6ce8\u610f ",(0,s.jsx)(n.code,{children:"gjson"})," \u5305\u652f\u6301\u591a\u79cd\u6570\u636e\u683c\u5f0f\u7684\u8bfb\u53d6\u3001\u5199\u5165\u548c\u8f6c\u6362\uff0c\u4e0d\u4ec5\u4ec5\u9488\u5bf9 ",(0,s.jsx)(n.code,{children:"json"})," \u683c\u5f0f\u3002"]})}),"\n",(0,s.jsxs)(n.h2,{id:"\u4f7f\u7528\u65b9\u5f0f",children:[(0,s.jsx)(n.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/encoding/gjson"\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/encoding/gjson",children:"https://pkg.go.dev/github.com/gogf/gf/v2/encoding/gjson"})}),"\n",(0,s.jsx)(n.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n","\n",(0,s.jsx)(c.A,{})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},744074:(e,n,t)=>{t.d(n,{A:()=>w});var o=t(296540),s=t(634164),r=t(291054),c=t(314783),i=t(597639);const l=["zero","one","two","few","many","other"];function d(e){return l.filter((n=>e.includes(n)))}const a={locale:"en",pluralForms:d(["one","other"]),select:e=>1===e?"one":"other"};function u(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,o.useMemo)((()=>{try{return function(e){const n=new Intl.PluralRules(e);return{locale:e,pluralForms:d(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${n.message}\n`),a}}),[e])}function g(){const e=u();return{selectMessage:(n,t)=>function(e,n,t){const o=e.split("|");if(1===o.length)return o[0];o.length>t.pluralForms.length&&console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(",")}), but the message contains ${o.length}: ${e}`);const s=t.select(n),r=t.pluralForms.indexOf(s);return o[Math.min(r,o.length-1)]}(t,n,e)}}var h=t(940877),m=t(923230),p=t(985225);const j={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var f=t(474848);function x(e){let{href:n,children:t}=e;return(0,f.jsx)(c.A,{href:n,className:(0,s.A)("card padding--lg",j.cardContainer),children:t})}function v(e){let{href:n,icon:t,title:o,description:r}=e;return(0,f.jsxs)(x,{href:n,children:[(0,f.jsxs)(p.A,{as:"h2",className:(0,s.A)("text--truncate",j.cardTitle),title:o,children:[t," ",o]}),r&&(0,f.jsx)("p",{className:(0,s.A)("text--truncate",j.cardDescription),title:r,children:r})]})}function b(e){let{item:n}=e;const t=(0,r.Nr)(n),o=function(){const{selectMessage:e}=g();return n=>e(n,(0,m.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return t?(0,f.jsx)(v,{href:t,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??o(n.items.length)}):null}function N(e){let{item:n}=e;const t=(0,h.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,r.cC)(n.docId??void 0);return(0,f.jsx)(v,{href:n.href,icon:t,title:n.label,description:n.description??o?.description})}function y(e){let{item:n}=e;switch(n.type){case"link":return(0,f.jsx)(N,{item:n});case"category":return(0,f.jsx)(b,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function k(e){let{className:n}=e;const t=(0,r.$S)();return(0,f.jsx)(w,{items:t.items,className:n})}function w(e){const{items:n,className:t}=e;if(!n)return(0,f.jsx)(k,{...e});const o=(0,r.d1)(n);return(0,f.jsx)("section",{className:(0,s.A)("row",t),children:o.map(((e,n)=>(0,f.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,f.jsx)(y,{item:e})},n)))})}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var o=t(296540);const s={},r=o.createContext(s);function c(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);