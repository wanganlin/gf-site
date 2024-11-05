"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[94765],{901611:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>x,frontMatter:()=>i,metadata:()=>d,toc:()=>h});const d=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c","title":"ORM\u94fe\u5f0f\u64cd\u4f5c(\ud83d\udd25\u91cd\u70b9\ud83d\udd25)","description":"\u57fa\u672c\u4ecb\u7ecd","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c","slug":"/docs/core/gdb-chaining","permalink":"/docs/core/gdb-chaining","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730810002000,"sidebarPosition":1,"frontMatter":{"slug":"/docs/core/gdb-chaining","title":"ORM\u94fe\u5f0f\u64cd\u4f5c(\ud83d\udd25\u91cd\u70b9\ud83d\udd25)","sidebar_position":1,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"ORM\u4f7f\u7528\u914d\u7f6e-\u5e38\u89c1\u95ee\u9898","permalink":"/docs/core/gdb-config-faq"},"next":{"title":"ORM\u94fe\u5f0f\u64cd\u4f5c-\u6a21\u578b\u521b\u5efa","permalink":"/docs/core/gdb-chaining-model"}}');var r=n(474848),s=n(28453),c=n(744074);const i={slug:"/docs/core/gdb-chaining",title:"ORM\u94fe\u5f0f\u64cd\u4f5c(\ud83d\udd25\u91cd\u70b9\ud83d\udd25)",sidebar_position:1,hide_title:!0},l=void 0,o={},h=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u90e8\u5206\u4e0d\u652f\u6301\u7684\u64cd\u4f5c",id:"\u90e8\u5206\u4e0d\u652f\u6301\u7684\u64cd\u4f5c",level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function a(e){const t={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"gdb"})," \u94fe\u5f0f\u64cd\u4f5c\u4f7f\u7528\u65b9\u5f0f\u7b80\u5355\u7075\u6d3b\uff0c\u662f ",(0,r.jsx)(t.code,{children:"GoFrame"})," \u6846\u67b6\u5b98\u65b9\u63a8\u8350\u7684\u6570\u636e\u5e93\u64cd\u4f5c\u65b9\u5f0f\u3002\u94fe\u5f0f\u64cd\u4f5c\u53ef\u4ee5\u901a\u8fc7\u6570\u636e\u5e93\u5bf9\u8c61\u7684 ",(0,r.jsx)(t.code,{children:"db.Model"})," \u65b9\u6cd5\u6216\u8005\u4e8b\u52a1\u5bf9\u8c61\u7684 ",(0,r.jsx)(t.code,{children:"tx.Model"})," \u65b9\u6cd5\uff0c\u57fa\u4e8e\u6307\u5b9a\u7684\u6570\u636e\u8868\u8fd4\u56de\u4e00\u4e2a\u94fe\u5f0f\u64cd\u4f5c\u5bf9\u8c61 ",(0,r.jsx)(t.code,{children:"*Model"}),"\uff0c\u8be5\u5bf9\u8c61\u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u65b9\u6cd5\u3002\u5f53\u524d\u65b9\u6cd5\u5217\u8868\u53ef\u80fd\u6ede\u540e\u4e8e\u6e90\u4ee3\u7801\uff0c\u8be6\u7ec6\u7684\u65b9\u6cd5\u5217\u8868\u8bf7\u53c2\u8003\u63a5\u53e3\u6587\u6863\uff1a ",(0,r.jsx)(t.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb#Model",children:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb#Model"})]}),"\n",(0,r.jsx)(t.h2,{id:"\u90e8\u5206\u4e0d\u652f\u6301\u7684\u64cd\u4f5c",children:"\u90e8\u5206\u4e0d\u652f\u6301\u7684\u64cd\u4f5c"}),"\n",(0,r.jsx)(t.p,{children:"\u4ee5\u4e0b\u662f\u6700\u65b0\u7248\u672c\u7684\u652f\u6301\u60c5\u51b5"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"\u7c7b\u578b"}),(0,r.jsx)(t.th,{children:"Replace"}),(0,r.jsx)(t.th,{children:"Save"}),(0,r.jsx)(t.th,{children:"InsertIgnore"}),(0,r.jsx)(t.th,{children:"InsertGetId"}),(0,r.jsx)(t.th,{children:"LastInsertId"}),(0,r.jsx)(t.th,{children:"Transaction"}),(0,r.jsx)(t.th,{children:"RowsAffected"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"mysql"})}),(0,r.jsx)(t.td,{children:"\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u652f\u6301"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"mariadb"})}),(0,r.jsx)(t.td,{children:"\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u652f\u6301"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"tidb"})}),(0,r.jsx)(t.td,{children:"\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u652f\u6301"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"pgsql"})}),(0,r.jsx)(t.td,{children:"\u4e0d\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u4e0d\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u652f\u6301"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"mssql"})}),(0,r.jsx)(t.td,{children:"\u4e0d\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u4e0d\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u652f\u6301"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"sqlite"})}),(0,r.jsx)(t.td,{children:"\u4e0d\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u652f\u6301"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"oracle"})}),(0,r.jsx)(t.td,{children:"\u4e0d\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u4e0d\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u652f\u6301"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"dm"})}),(0,r.jsx)(t.td,{children:"\u4e0d\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u652f\u6301"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"clickhouse"})}),(0,r.jsx)(t.td,{children:"\u4e0d\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u4e0d\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u4e0d\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u4e0d\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u4e0d\u652f\u6301"}),(0,r.jsx)(t.td,{children:"\u4e0d\u652f\u6301"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n","\n",(0,r.jsx)(c.A,{})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},744074:(e,t,n)=>{n.d(t,{A:()=>y});var d=n(296540),r=n(634164),s=n(291054),c=n(314783),i=n(597639);const l=["zero","one","two","few","many","other"];function o(e){return l.filter((t=>e.includes(t)))}const h={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,d.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),h}}),[e])}function x(){const e=a();return{selectMessage:(t,n)=>function(e,t,n){const d=e.split("|");if(1===d.length)return d[0];d.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${d.length}: ${e}`);const r=n.select(t),s=n.pluralForms.indexOf(r);return d[Math.min(s,d.length-1)]}(n,t,e)}}var j=n(940877),u=n(923230),m=n(985225);const f={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var g=n(474848);function p(e){let{href:t,children:n}=e;return(0,g.jsx)(c.A,{href:t,className:(0,r.A)("card padding--lg",f.cardContainer),children:n})}function b(e){let{href:t,icon:n,title:d,description:s}=e;return(0,g.jsxs)(p,{href:t,children:[(0,g.jsxs)(m.A,{as:"h2",className:(0,r.A)("text--truncate",f.cardTitle),title:d,children:[n," ",d]}),s&&(0,g.jsx)("p",{className:(0,r.A)("text--truncate",f.cardDescription),title:s,children:s})]})}function M(e){let{item:t}=e;const n=(0,s.Nr)(t),d=function(){const{selectMessage:e}=x();return t=>e(t,(0,u.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,g.jsx)(b,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??d(t.items.length)}):null}function v(e){let{item:t}=e;const n=(0,j.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",d=(0,s.cC)(t.docId??void 0);return(0,g.jsx)(b,{href:t.href,icon:n,title:t.label,description:t.description??d?.description})}function R(e){let{item:t}=e;switch(t.type){case"link":return(0,g.jsx)(v,{item:t});case"category":return(0,g.jsx)(M,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function O(e){let{className:t}=e;const n=(0,s.$S)();return(0,g.jsx)(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return(0,g.jsx)(O,{...e});const d=(0,s.d1)(t);return(0,g.jsx)("section",{className:(0,r.A)("row",n),children:d.map(((e,t)=>(0,g.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,g.jsx)(R,{item:e})},t)))})}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var d=n(296540);const r={},s=d.createContext(r);function c(e){const t=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),d.createElement(s.Provider,{value:t},e.children)}}}]);