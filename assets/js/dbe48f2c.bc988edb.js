"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["51395"],{371307:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>c,default:()=>f,assets:()=>a,toc:()=>d,frontMatter:()=>l});var r=JSON.parse('{"id":"docs/\u7EC4\u4EF6\u5217\u8868/\u7EC4\u4EF6\u5217\u8868","title":"\u7EC4\u4EF6\u5217\u8868","description":"\u6B64\u6587\u6863\u4ECB\u7ECD\u4E86GoFrame\u6846\u67B6\u4E2D\u7684\u6A21\u5757\u5217\u8868\uFF0C\u5305\u62EC\u6838\u5FC3\u6A21\u5757\u548C\u793E\u533A\u6A21\u5757\u3002\u6838\u5FC3\u6A21\u5757\u7531gf\u4E3B\u4ED3\u5E93\u7EF4\u62A4\uFF0C\u7B80\u5355\u6613\u7528\uFF0C\u793E\u533A\u6A21\u5757\u7531\u793E\u533A\u8D21\u732E\uFF0C\u5B58\u653E\u4E8Egogf\u7A7A\u95F4\u4E0B\u3002\u8BE6\u7EC6\u4FE1\u606F\u8BF7\u53C2\u9605\u6E90\u4EE3\u7801README\u6587\u4EF6\u548C\u76F8\u5173\u7684\u6838\u5FC3\u6A21\u5757\u6587\u6863\u3002","source":"@site/docs/docs/\u7EC4\u4EF6\u5217\u8868/\u7EC4\u4EF6\u5217\u8868.md","sourceDirName":"docs/\u7EC4\u4EF6\u5217\u8868","slug":"/docs/components","permalink":"/docs/components","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7EC4\u4EF6\u5217\u8868/\u7EC4\u4EF6\u5217\u8868.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731055597000,"sidebarPosition":5,"frontMatter":{"slug":"/docs/components","title":"\u7EC4\u4EF6\u5217\u8868","sidebar_position":5,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","\u6838\u5FC3\u6A21\u5757","\u793E\u533A\u6A21\u5757","gf\u4E3B\u4ED3\u5E93","\u6A21\u5757\u5217\u8868","\u8F7B\u91CF\u7EA7\u6846\u67B6","\u6A21\u5757\u7EF4\u62A4","gogf\u7A7A\u95F4","\u6A21\u5757\u6587\u6863"],"description":"\u6B64\u6587\u6863\u4ECB\u7ECD\u4E86GoFrame\u6846\u67B6\u4E2D\u7684\u6A21\u5757\u5217\u8868\uFF0C\u5305\u62EC\u6838\u5FC3\u6A21\u5757\u548C\u793E\u533A\u6A21\u5757\u3002\u6838\u5FC3\u6A21\u5757\u7531gf\u4E3B\u4ED3\u5E93\u7EF4\u62A4\uFF0C\u7B80\u5355\u6613\u7528\uFF0C\u793E\u533A\u6A21\u5757\u7531\u793E\u533A\u8D21\u732E\uFF0C\u5B58\u653E\u4E8Egogf\u7A7A\u95F4\u4E0B\u3002\u8BE6\u7EC6\u4FE1\u606F\u8BF7\u53C2\u9605\u6E90\u4EE3\u7801README\u6587\u4EF6\u548C\u76F8\u5173\u7684\u6838\u5FC3\u6A21\u5757\u6587\u6863\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u8D44\u6E90\u7BA1\u7406-\u6700\u4F73\u5B9E\u8DF5","permalink":"/docs/core/gres-practice"},"next":{"title":"\u6570\u636E\u7ED3\u6784","permalink":"/docs/components/container"}}'),o=n("785893"),i=n("250065"),s=n("894301");let l={slug:"/docs/components",title:"\u7EC4\u4EF6\u5217\u8868",sidebar_position:5,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","\u6838\u5FC3\u6A21\u5757","\u793E\u533A\u6A21\u5757","gf\u4E3B\u4ED3\u5E93","\u6A21\u5757\u5217\u8868","\u8F7B\u91CF\u7EA7\u6846\u67B6","\u6A21\u5757\u7EF4\u62A4","gogf\u7A7A\u95F4","\u6A21\u5757\u6587\u6863"],description:"\u6B64\u6587\u6863\u4ECB\u7ECD\u4E86GoFrame\u6846\u67B6\u4E2D\u7684\u6A21\u5757\u5217\u8868\uFF0C\u5305\u62EC\u6838\u5FC3\u6A21\u5757\u548C\u793E\u533A\u6A21\u5757\u3002\u6838\u5FC3\u6A21\u5757\u7531gf\u4E3B\u4ED3\u5E93\u7EF4\u62A4\uFF0C\u7B80\u5355\u6613\u7528\uFF0C\u793E\u533A\u6A21\u5757\u7531\u793E\u533A\u8D21\u732E\uFF0C\u5B58\u653E\u4E8Egogf\u7A7A\u95F4\u4E0B\u3002\u8BE6\u7EC6\u4FE1\u606F\u8BF7\u53C2\u9605\u6E90\u4EE3\u7801README\u6587\u4EF6\u548C\u76F8\u5173\u7684\u6838\u5FC3\u6A21\u5757\u6587\u6863\u3002"},c=void 0,a={},d=[{value:"\u6838\u5FC3\u6A21\u5757",id:"\u6838\u5FC3\u6A21\u5757",level:2},{value:"\u793E\u533A\u6A21\u5757",id:"\u793E\u533A\u6A21\u5757",level:2},{value:"\u76F8\u5173\u6587\u6863",id:"\u76F8\u5173\u6587\u6863",level:2}];function u(e){let t={code:"code",h2:"h2",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"\u6A21\u5757\u5217\u8868\u5305\u542B\u7EDD\u5927\u90E8\u5206\u6846\u67B6\u7684\u6838\u5FC3\u6A21\u5757\u4EE5\u53CA\u793E\u533A\u6A21\u5757\u4ECB\u7ECD\u6587\u6863\u3002"}),"\n",(0,o.jsx)(t.h2,{id:"\u6838\u5FC3\u6A21\u5757",children:"\u6838\u5FC3\u6A21\u5757"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"GoFrame"})," \u63D0\u4F9B\u4E86\u4E00\u4E9B\u57FA\u7840\u7684\u3001\u5E38\u7528\u7684\u6A21\u5757\uFF0C\u7B80\u5355\u3001\u6613\u7528\u548C\u8F7B\u91CF\u7EA7\uFF0C\u5E76\u4FDD\u6301\u6781\u5C11\u7684\u5916\u90E8\u4F9D\u8D56\uFF0C\u8FD9\u4E9B\u6A21\u5757\u7531 ",(0,o.jsx)(t.code,{children:"gf"})," \u4E3B\u4ED3\u5E93\u7EC6\u81F4\u7EF4\u62A4\u3002"]}),"\n",(0,o.jsx)(t.h2,{id:"\u793E\u533A\u6A21\u5757",children:"\u793E\u533A\u6A21\u5757"}),"\n",(0,o.jsxs)(t.p,{children:["\u793E\u533A\u6A21\u5757\u4E3B\u8981\u7531\u793E\u533A\u8D21\u732E\u5E76\u7EF4\u62A4\uFF0C\u5927\u90E8\u5206\u4E5F\u662F\u7531 ",(0,o.jsx)(t.code,{children:"gf"})," \u4E3B\u4ED3\u5E93\u7684\u8D21\u732E\u8005\u63D0\u4F9B\u53CA\u7EF4\u62A4\uFF0C\u5B58\u653E\u4E8E ",(0,o.jsx)(t.code,{children:"gogf"})," \u7A7A\u95F4\u4E0B\uFF0C\u4E0E ",(0,o.jsx)(t.code,{children:"gf"})," \u4E3B\u4ED3\u5E93\u5904\u4E8E\u540C\u4E00\u7EA7\u522B\u3002\u6709\u7684\u793E\u533A\u6A21\u5757\u662F\u4ECE ",(0,o.jsx)(t.code,{children:"gf"})," \u4E3B\u4ED3\u5E93\u4E2D\u5265\u79BB\u51FA\u6765\u5355\u72EC\u7EF4\u62A4\u7684\u6A21\u5757\uFF0C\u8FD9\u4E9B\u6A21\u5757\u5E76\u4E0D\u662F\u7279\u522B\u5E38\u7528\uFF0C\u6216\u8005\u5BF9\u5916\u90E8\u4F9D\u8D56\u8F83\u91CD\u3002"]}),"\n",(0,o.jsxs)(t.p,{children:["\u76EE\u524D\u793E\u533A\u6A21\u5757\u7684\u6587\u6863\u672A\u6536\u5F55\uFF0C\u793E\u533A\u6A21\u5757\u4F7F\u7528\u65B9\u6CD5\u8BF7\u5177\u4F53\u67E5\u770B\u6E90\u7801 ",(0,o.jsx)(t.code,{children:"README.MD"})," \u6587\u4EF6\uFF0C\u7531\u4E8E\u793E\u533A\u6A21\u5757\u5927\u90FD\u662F\u6838\u5FC3\u6A21\u5757\u7684\u5177\u4F53\u63A5\u53E3\u5177\u4F53\uFF0C\u56E0\u6B64\u4E5F\u53EF\u4EE5\u67E5\u770B\u76F8\u5173\u8054\u7684\u6838\u5FC3\u6A21\u5757\u6587\u6863\u3002"]}),"\n",(0,o.jsx)(t.h2,{id:"\u76F8\u5173\u6587\u6863",children:"\u76F8\u5173\u6587\u6863"}),"\n","\n",(0,o.jsx)(s.Z,{})]})}function f(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},894301:function(e,t,n){n.d(t,{Z:()=>j});var r=n("785893");n("667294");var o=n("467026"),i=n("123413"),s=n("83012"),l=n("743115"),c=n("863150"),a=n("96025"),d=n("134403");let u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function f(e){let{href:t,children:n}=e;return(0,r.jsx)(s.Z,{href:t,className:(0,o.Z)("card padding--lg",u.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:i,description:s}=e;return(0,r.jsxs)(f,{href:t,children:[(0,r.jsxs)(d.Z,{as:"h2",className:(0,o.Z)("text--truncate",u.cardTitle),title:i,children:[n," ",i]}),s&&(0,r.jsx)("p",{className:(0,o.Z)("text--truncate",u.cardDescription),title:s,children:s})]})}function p(e){let{item:t}=e,n=(0,i.LM)(t),o=function(){let{selectMessage:e}=(0,l.c)();return t=>e(t,(0,a.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,r.jsx)(m,{href:n,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??o(t.items.length)}):null}function h(e){let{item:t}=e,n=(0,c.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",o=(0,i.xz)(t.docId??void 0);return(0,r.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??o?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,r.jsx)(h,{item:t});case"category":return(0,r.jsx)(p,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e,n=(0,i.jA)();return(0,r.jsx)(j,{items:n.items,className:t})}function j(e){let{items:t,className:n}=e;if(!t)return(0,r.jsx)(x,{...e});let s=(0,i.MN)(t);return(0,r.jsx)("section",{className:(0,o.Z)("row",n),children:s.map((e,t)=>(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(g,{item:e})},t))})}},743115:function(e,t,n){n.d(t,{c:function(){return c}});var r=n(667294),o=n(402933);let i=["zero","one","two","few","many","other"];function s(e){return i.filter(t=>e.includes(t))}let l={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function c(){let e=function(){let{i18n:{currentLocale:e}}=(0,o.Z)();return(0,r.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),l}},[e])}();return{selectMessage:(t,n)=>(function(e,t,n){let r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);let o=n.select(t);return r[Math.min(n.pluralForms.indexOf(o),r.length-1)]})(n,t,e)}}},250065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return s}});var r=n(667294);let o={},i=r.createContext(o);function s(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);