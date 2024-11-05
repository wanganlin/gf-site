"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[41094],{447013:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u6821\u9a8c/\u6570\u636e\u6821\u9a8c-\u81ea\u5b9a\u4e49\u89c4\u5219/\u6570\u636e\u6821\u9a8c-\u81ea\u5b9a\u4e49\u89c4\u5219","title":"\u6570\u636e\u6821\u9a8c-\u81ea\u5b9a\u4e49\u89c4\u5219","description":"\u867d\u7136 gvalid \u5df2\u7ecf\u5185\u7f6e\u4e86\u5e38\u89c1\u7684\u6570\u5341\u79cd\u6821\u9a8c\u89c4\u5219\uff0c\u4f46\u662f\u5728\u90e8\u5206\u4e1a\u52a1\u573a\u666f\u4e0b\u6211\u4eec\u9700\u8981\u81ea\u5b9a\u4e49\u6821\u9a8c\u89c4\u5219\uff0c\u7279\u522b\u662f\u4e00\u4e9b\u53ef\u4ee5\u91cd\u590d\u4f7f\u7528\u7684\u4e1a\u52a1\u76f8\u5173\u7684\u6821\u9a8c\u89c4\u5219\u3002\u5f53\u7136\uff0c gvalid \u5982\u6b64\u7684\u5f3a\u5927\u548c\u8d34\u5fc3\uff0c\u5979\u5df2\u7ecf\u4e3a\u60a8\u8003\u8651\u5f97\u5982\u6b64\u5468\u5168\u3002\u81ea\u5b9a\u4e49\u6821\u9a8c\u89c4\u5219\u53ef\u4ee5\u5b9e\u73b0\u7075\u6d3b\u6027\u5f3a\uff0c\u53ef\u590d\u7528\u6027\u9ad8\u7684\u6821\u9a8c\u7279\u6027\u3002","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u6821\u9a8c/\u6570\u636e\u6821\u9a8c-\u81ea\u5b9a\u4e49\u89c4\u5219/\u6570\u636e\u6821\u9a8c-\u81ea\u5b9a\u4e49\u89c4\u5219.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u6821\u9a8c/\u6570\u636e\u6821\u9a8c-\u81ea\u5b9a\u4e49\u89c4\u5219","slug":"/docs/core/gvalid-custom-rules","permalink":"/docs/core/gvalid-custom-rules","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u6821\u9a8c/\u6570\u636e\u6821\u9a8c-\u81ea\u5b9a\u4e49\u89c4\u5219/\u6570\u636e\u6821\u9a8c-\u81ea\u5b9a\u4e49\u89c4\u5219.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730810002000,"sidebarPosition":6,"frontMatter":{"slug":"/docs/core/gvalid-custom-rules","title":"\u6570\u636e\u6821\u9a8c-\u81ea\u5b9a\u4e49\u89c4\u5219","sidebar_position":6,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"\u6570\u636e\u6821\u9a8c-\u9012\u5f52\u6821\u9a8c","permalink":"/docs/core/gvalid-recursive-validating"},"next":{"title":"\u81ea\u5b9a\u4e49\u89c4\u5219-\u89c4\u5219\u6ce8\u518c","permalink":"/docs/core/gvalid-custom-rules-register"}}');var s=n(474848),o=n(28453),c=n(744074);const i={slug:"/docs/core/gvalid-custom-rules",title:"\u6570\u636e\u6821\u9a8c-\u81ea\u5b9a\u4e49\u89c4\u5219",sidebar_position:6,hide_title:!0},l=void 0,a={},d=[];function u(e){const t={code:"code",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["\u867d\u7136 ",(0,s.jsx)(t.code,{children:"gvalid"})," \u5df2\u7ecf\u5185\u7f6e\u4e86\u5e38\u89c1\u7684\u6570\u5341\u79cd\u6821\u9a8c\u89c4\u5219\uff0c\u4f46\u662f\u5728\u90e8\u5206\u4e1a\u52a1\u573a\u666f\u4e0b\u6211\u4eec\u9700\u8981\u81ea\u5b9a\u4e49\u6821\u9a8c\u89c4\u5219\uff0c\u7279\u522b\u662f\u4e00\u4e9b\u53ef\u4ee5\u91cd\u590d\u4f7f\u7528\u7684\u4e1a\u52a1\u76f8\u5173\u7684\u6821\u9a8c\u89c4\u5219\u3002\u5f53\u7136\uff0c ",(0,s.jsx)(t.code,{children:"gvalid"})," \u5982\u6b64\u7684\u5f3a\u5927\u548c\u8d34\u5fc3\uff0c\u5979\u5df2\u7ecf\u4e3a\u60a8\u8003\u8651\u5f97\u5982\u6b64\u5468\u5168\u3002\u81ea\u5b9a\u4e49\u6821\u9a8c\u89c4\u5219\u53ef\u4ee5\u5b9e\u73b0\u7075\u6d3b\u6027\u5f3a\uff0c\u53ef\u590d\u7528\u6027\u9ad8\u7684\u6821\u9a8c\u7279\u6027\u3002"]}),"\n","\n",(0,s.jsx)(c.A,{})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},744074:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(296540),s=n(634164),o=n(291054),c=n(314783),i=n(597639);const l=["zero","one","two","few","many","other"];function a(e){return l.filter((t=>e.includes(t)))}const d={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function u(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),d}}),[e])}function m(){const e=u();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),o=n.pluralForms.indexOf(s);return r[Math.min(o,r.length-1)]}(n,t,e)}}var f=n(940877),p=n(923230),h=n(985225);const g={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var x=n(474848);function v(e){let{href:t,children:n}=e;return(0,x.jsx)(c.A,{href:t,className:(0,s.A)("card padding--lg",g.cardContainer),children:n})}function j(e){let{href:t,icon:n,title:r,description:o}=e;return(0,x.jsxs)(v,{href:t,children:[(0,x.jsxs)(h.A,{as:"h2",className:(0,s.A)("text--truncate",g.cardTitle),title:r,children:[n," ",r]}),o&&(0,x.jsx)("p",{className:(0,s.A)("text--truncate",g.cardDescription),title:o,children:o})]})}function b(e){let{item:t}=e;const n=(0,o.Nr)(t),r=function(){const{selectMessage:e}=m();return t=>e(t,(0,p.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,x.jsx)(j,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function w(e){let{item:t}=e;const n=(0,f.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.cC)(t.docId??void 0);return(0,x.jsx)(j,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return(0,x.jsx)(w,{item:t});case"category":return(0,x.jsx)(b,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function N(e){let{className:t}=e;const n=(0,o.$S)();return(0,x.jsx)(k,{items:n.items,className:t})}function k(e){const{items:t,className:n}=e;if(!t)return(0,x.jsx)(N,{...e});const r=(0,o.d1)(t);return(0,x.jsx)("section",{className:(0,s.A)("row",n),children:r.map(((e,t)=>(0,x.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,x.jsx)(y,{item:e})},t)))})}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var r=n(296540);const s={},o=r.createContext(s);function c(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);