"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[75031],{263567:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u4e8b\u52a1\u5904\u7406/ORM\u4e8b\u52a1\u5904\u7406","title":"ORM\u4e8b\u52a1\u5904\u7406","description":"\u4f7f\u7528 GoFrame ORM \u7ec4\u4ef6\u8fdb\u884c\u4e8b\u52a1\u64cd\u4f5c\u975e\u5e38\u7b80\u4fbf\u3001\u5b89\u5168\uff0c\u53ef\u4ee5\u901a\u8fc7\u4e24\u79cd\u64cd\u4f5c\u65b9\u5f0f\u6765\u5b9e\u73b0\u3002","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u4e8b\u52a1\u5904\u7406/ORM\u4e8b\u52a1\u5904\u7406.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u4e8b\u52a1\u5904\u7406","slug":"/docs/core/gdb-transaction","permalink":"/docs/core/gdb-transaction","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u4e8b\u52a1\u5904\u7406/ORM\u4e8b\u52a1\u5904\u7406.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730810002000,"sidebarPosition":3,"frontMatter":{"slug":"/docs/core/gdb-transaction","title":"ORM\u4e8b\u52a1\u5904\u7406","sidebar_position":3,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"ORM\u65b9\u6cd5\u64cd\u4f5c(\u539f\u751f)","permalink":"/docs/core/gdb-funcs"},"next":{"title":"ORM\u4e8b\u52a1\u5904\u7406-\u5e38\u89c4\u64cd\u4f5c","permalink":"/docs/core/gdb-transaction-basic"}}');var o=n(474848),s=n(28453),c=n(744074);const i={slug:"/docs/core/gdb-transaction",title:"ORM\u4e8b\u52a1\u5904\u7406",sidebar_position:3,hide_title:!0},l=void 0,a={},d=[];function u(e){const t={a:"a",admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["\u4f7f\u7528 ",(0,o.jsx)(t.code,{children:"GoFrame ORM"})," \u7ec4\u4ef6\u8fdb\u884c\u4e8b\u52a1\u64cd\u4f5c\u975e\u5e38\u7b80\u4fbf\u3001\u5b89\u5168\uff0c\u53ef\u4ee5\u901a\u8fc7\u4e24\u79cd\u64cd\u4f5c\u65b9\u5f0f\u6765\u5b9e\u73b0\u3002"]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\u5e38\u89c4\u64cd\u4f5c\uff1a\u901a\u8fc7 ",(0,o.jsx)(t.code,{children:"Begin"})," \u5f00\u542f\u4e8b\u52a1\u4e4b\u540e\u4f1a\u8fd4\u56de\u4e00\u4e2a\u4e8b\u52a1\u64cd\u4f5c\u63a5\u53e3 ",(0,o.jsx)(t.code,{children:"gdb.TX"}),"\uff0c\u968f\u540e\u53ef\u4ee5\u4f7f\u7528\u8be5\u63a5\u53e3\u8fdb\u884c\u5982\u4e4b\u524d\u7ae0\u8282\u4ecb\u7ecd\u7684\u65b9\u6cd5\u64cd\u4f5c\u548c\u94fe\u5f0f\u64cd\u4f5c\u3002\u5e38\u89c4\u64cd\u4f5c\u5bb9\u6613\u6f0f\u6389\u5173\u95ed\u4e8b\u52a1\uff0c\u6709\u4e00\u5b9a\u7684\u4e8b\u52a1\u64cd\u4f5c\u5b89\u5168\u98ce\u9669\u3002"]}),"\n",(0,o.jsxs)(t.li,{children:["\u95ed\u5305\u64cd\u4f5c\uff1a\u901a\u8fc7 ",(0,o.jsx)(t.code,{children:"Transaction"})," \u95ed\u5305\u65b9\u6cd5\u7684\u5f62\u5f0f\u6765\u64cd\u4f5c\u4e8b\u52a1\uff0c\u6240\u6709\u7684\u4e8b\u52a1\u903b\u8f91\u5728\u95ed\u5305\u4e2d\u5b9e\u73b0\uff0c\u95ed\u5305\u7ed3\u675f\u540e\u81ea\u52a8\u5173\u95ed\u4e8b\u52a1\u4fdd\u969c\u4e8b\u52a1\u64cd\u4f5c\u5b89\u5168\u3002\u5e76\u4e14\u95ed\u5305\u64cd\u4f5c\u652f\u6301\u975e\u5e38\u4fbf\u6377\u7684 ",(0,o.jsx)(t.strong,{children:"\u5d4c\u5957\u4e8b\u52a1"}),"\uff0c\u5d4c\u5957\u4e8b\u52a1\u5728\u4e1a\u52a1\u64cd\u4f5c\u4e2d\u900f\u660e\u65e0\u611f\u77e5\u3002"]}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["\u6211\u4eec\u63a8\u8350\u4e8b\u52a1\u64cd\u4f5c\u5747\u7edf\u4e00\u91c7\u7528 ",(0,o.jsx)(t.code,{children:"Transaction"})," \u95ed\u5305\u65b9\u5f0f\u5b9e\u73b0\u3002"]})}),"\n",(0,o.jsxs)(t.p,{children:["\u63a5\u53e3\u6587\u6863\uff1a ",(0,o.jsx)(t.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb#TX",children:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb#TX"})]}),"\n","\n",(0,o.jsx)(c.A,{})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},744074:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(296540),o=n(634164),s=n(291054),c=n(314783),i=n(597639);const l=["zero","one","two","few","many","other"];function a(e){return l.filter((t=>e.includes(t)))}const d={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function u(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),d}}),[e])}function m(){const e=u();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),s=n.pluralForms.indexOf(o);return r[Math.min(s,r.length-1)]}(n,t,e)}}var h=n(940877),p=n(923230),f=n(985225);const g={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var x=n(474848);function j(e){let{href:t,children:n}=e;return(0,x.jsx)(c.A,{href:t,className:(0,o.A)("card padding--lg",g.cardContainer),children:n})}function b(e){let{href:t,icon:n,title:r,description:s}=e;return(0,x.jsxs)(j,{href:t,children:[(0,x.jsxs)(f.A,{as:"h2",className:(0,o.A)("text--truncate",g.cardTitle),title:r,children:[n," ",r]}),s&&(0,x.jsx)("p",{className:(0,o.A)("text--truncate",g.cardDescription),title:s,children:s})]})}function M(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=m();return t=>e(t,(0,p.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,x.jsx)(b,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function R(e){let{item:t}=e;const n=(0,h.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,x.jsx)(b,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function O(e){let{item:t}=e;switch(t.type){case"link":return(0,x.jsx)(R,{item:t});case"category":return(0,x.jsx)(M,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const n=(0,s.$S)();return(0,x.jsx)(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return(0,x.jsx)(v,{...e});const r=(0,s.d1)(t);return(0,x.jsx)("section",{className:(0,o.A)("row",n),children:r.map(((e,t)=>(0,x.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,x.jsx)(O,{item:e})},t)))})}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var r=n(296540);const o={},s=r.createContext(o);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);