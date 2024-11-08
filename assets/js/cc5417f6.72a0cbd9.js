"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[70306],{315979:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6838\u5fc3\u7ec4\u4ef6","title":"\u6838\u5fc3\u7ec4\u4ef6(\ud83d\udd25\u91cd\u70b9\ud83d\udd25)","description":"\u6838\u5fc3\u7ec4\u4ef6\u662fGoFrame\u6846\u67b6\u7684\u91cd\u8981\u7ec4\u6210\u90e8\u5206\uff0c\u63d0\u4f9b\u4e86\u57fa\u7840\u7684\u5f00\u53d1\u5de5\u5177\u548c\u7cfb\u7edf\u67b6\u6784\u652f\u6301\uff0c\u4e3a\u5e94\u7528\u5f00\u53d1\u63d0\u4f9b\u4e86\u575a\u5b9e\u53ef\u9760\u7684\u57fa\u7840\u3002\u672c\u6587\u6863\u4ecb\u7ecd\u6838\u5fc3\u7ec4\u4ef6\u53ca\u5176\u5728GoFrame\u6846\u67b6\u4e2d\u7684\u5e94\u7528\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u597d\u5730\u7406\u89e3\u548c\u4f7f\u7528\u8fd9\u4e9b\u7ec4\u4ef6\u3002","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6838\u5fc3\u7ec4\u4ef6.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6","slug":"/docs/core","permalink":"/docs/core","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6838\u5fc3\u7ec4\u4ef6.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731056950000,"sidebarPosition":4,"frontMatter":{"slug":"/docs/core","title":"\u6838\u5fc3\u7ec4\u4ef6(\ud83d\udd25\u91cd\u70b9\ud83d\udd25)","sidebar_position":4,"hide_title":true,"keywords":["GoFrame","\u6838\u5fc3\u7ec4\u4ef6","GoFrame\u6846\u67b6","\u6846\u67b6\u7ec4\u6210","\u8f6f\u4ef6\u5f00\u53d1","\u6280\u672f\u6846\u67b6","\u5f00\u53d1\u5de5\u5177","\u7f16\u7a0b\u57fa\u7840","\u5e94\u7528\u5f00\u53d1","\u7cfb\u7edf\u67b6\u6784"],"description":"\u6838\u5fc3\u7ec4\u4ef6\u662fGoFrame\u6846\u67b6\u7684\u91cd\u8981\u7ec4\u6210\u90e8\u5206\uff0c\u63d0\u4f9b\u4e86\u57fa\u7840\u7684\u5f00\u53d1\u5de5\u5177\u548c\u7cfb\u7edf\u67b6\u6784\u652f\u6301\uff0c\u4e3a\u5e94\u7528\u5f00\u53d1\u63d0\u4f9b\u4e86\u575a\u5b9e\u53ef\u9760\u7684\u57fa\u7840\u3002\u672c\u6587\u6863\u4ecb\u7ecd\u6838\u5fc3\u7ec4\u4ef6\u53ca\u5176\u5728GoFrame\u6846\u67b6\u4e2d\u7684\u5e94\u7528\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u597d\u5730\u7406\u89e3\u548c\u4f7f\u7528\u8fd9\u4e9b\u7ec4\u4ef6\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u5de5\u5177\u5e2e\u52a9-help","permalink":"/docs/cli/help"},"next":{"title":"\u5bf9\u8c61\u7ba1\u7406","permalink":"/docs/core/g"}}');var o=r(474848),s=r(28453),c=r(103514);const i={slug:"/docs/core",title:"\u6838\u5fc3\u7ec4\u4ef6(\ud83d\udd25\u91cd\u70b9\ud83d\udd25)",sidebar_position:4,hide_title:!0,keywords:["GoFrame","\u6838\u5fc3\u7ec4\u4ef6","GoFrame\u6846\u67b6","\u6846\u67b6\u7ec4\u6210","\u8f6f\u4ef6\u5f00\u53d1","\u6280\u672f\u6846\u67b6","\u5f00\u53d1\u5de5\u5177","\u7f16\u7a0b\u57fa\u7840","\u5e94\u7528\u5f00\u53d1","\u7cfb\u7edf\u67b6\u6784"],description:"\u6838\u5fc3\u7ec4\u4ef6\u662fGoFrame\u6846\u67b6\u7684\u91cd\u8981\u7ec4\u6210\u90e8\u5206\uff0c\u63d0\u4f9b\u4e86\u57fa\u7840\u7684\u5f00\u53d1\u5de5\u5177\u548c\u7cfb\u7edf\u67b6\u6784\u652f\u6301\uff0c\u4e3a\u5e94\u7528\u5f00\u53d1\u63d0\u4f9b\u4e86\u575a\u5b9e\u53ef\u9760\u7684\u57fa\u7840\u3002\u672c\u6587\u6863\u4ecb\u7ecd\u6838\u5fc3\u7ec4\u4ef6\u53ca\u5176\u5728GoFrame\u6846\u67b6\u4e2d\u7684\u5e94\u7528\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u597d\u5730\u7406\u89e3\u548c\u4f7f\u7528\u8fd9\u4e9b\u7ec4\u4ef6\u3002"},l=void 0,a={},d=[];function u(e){const t={code:"code",p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["\u6838\u5fc3\u7ec4\u4ef6\u662f ",(0,o.jsx)(t.code,{children:"GoFrame"})," \u6846\u67b6\u7684\u6838\u5fc3\u7ec4\u6210\u90e8\u5206\u3002"]}),"\n","\n",(0,o.jsx)(c.A,{})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},103514:(e,t,r)=>{r.d(t,{A:()=>F});r(296540);var n=r(634164),o=r(944718),s=r(328774),c=r(853465),i=r(316654),l=r(721312),a=r(751107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=r(474848);function m(e){let{href:t,children:r}=e;return(0,u.jsx)(s.A,{href:t,className:(0,n.A)("card padding--lg",d.cardContainer),children:r})}function p(e){let{href:t,icon:r,title:o,description:s}=e;return(0,u.jsxs)(m,{href:t,children:[(0,u.jsxs)(a.A,{as:"h2",className:(0,n.A)("text--truncate",d.cardTitle),title:o,children:[r," ",o]}),s&&(0,u.jsx)("p",{className:(0,n.A)("text--truncate",d.cardDescription),title:s,children:s})]})}function f(e){let{item:t}=e;const r=(0,o.Nr)(t),n=function(){const{selectMessage:e}=(0,c.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,u.jsx)(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function h(e){let{item:t}=e;const r=(0,i.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,o.cC)(t.docId??void 0);return(0,u.jsx)(p,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(h,{item:t});case"category":return(0,u.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const r=(0,o.$S)();return(0,u.jsx)(F,{items:r.items,className:t})}function F(e){const{items:t,className:r}=e;if(!t)return(0,u.jsx)(x,{...e});const s=(0,o.d1)(t);return(0,u.jsx)("section",{className:(0,n.A)("row",r),children:s.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(g,{item:e})},t)))})}},853465:(e,t,r)=>{r.d(t,{W:()=>a});var n=r(296540),o=r(144586);const s=["zero","one","two","few","many","other"];function c(e){return s.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function a(){const e=l();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const o=r.select(t),s=r.pluralForms.indexOf(o);return n[Math.min(s,n.length-1)]}(r,t,e)}}},28453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>i});var n=r(296540);const o={},s=n.createContext(o);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);