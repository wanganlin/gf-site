"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["6473"],{460290:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>c,default:()=>m,assets:()=>a,toc:()=>d,frontMatter:()=>l});var r=JSON.parse('{"id":"docs/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u65F6\u95F4\u7BA1\u7406-gtime/\u65F6\u95F4\u7BA1\u7406-gtime","title":"\u65F6\u95F4\u7BA1\u7406-gtime","description":"gtime\u6A21\u5757\u662FGoFrame\u6846\u67B6\u7684\u901A\u7528\u65F6\u95F4\u7BA1\u7406\u6A21\u5757\uFF0C\u62D3\u5C55\u4E86Golang\u6807\u51C6\u5E93time\u7684\u529F\u80FD\uFF0C\u63D0\u4F9B\u4E86\u81EA\u5B9A\u4E49\u7684\u65E5\u671F\u683C\u5F0F\u5316\u8BED\u6CD5\uFF0C\u5BF9PHP\u7684date\u51FD\u6570\u683C\u5F0F\u6709\u826F\u597D\u517C\u5BB9\u6027\uFF0C\u4F7FPHP\u5F00\u53D1\u8005\u5728Go\u4E2D\u5B9E\u73B0\u65F6\u95F4\u7BA1\u7406\u65F6\u66F4\u52A0\u4FBF\u5229\u3002","source":"@site/docs/docs/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u65F6\u95F4\u7BA1\u7406-gtime/\u65F6\u95F4\u7BA1\u7406-gtime.md","sourceDirName":"docs/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u65F6\u95F4\u7BA1\u7406-gtime","slug":"/docs/components/os-gtime","permalink":"/docs/components/os-gtime","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u65F6\u95F4\u7BA1\u7406-gtime/\u65F6\u95F4\u7BA1\u7406-gtime.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731488916000,"sidebarPosition":6,"frontMatter":{"slug":"/docs/components/os-gtime","title":"\u65F6\u95F4\u7BA1\u7406-gtime","sidebar_position":6,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","\u65F6\u95F4\u7BA1\u7406","gtime","\u65E5\u671F\u683C\u5F0F\u5316","PHP date","\u901A\u7528\u65F6\u95F4\u6A21\u5757","\u65F6\u95F4\u6269\u5C55","\u65F6\u95F4\u65E5\u671F\u65B9\u6CD5","\u81EA\u5B9A\u4E49\u683C\u5F0F"],"description":"gtime\u6A21\u5757\u662FGoFrame\u6846\u67B6\u7684\u901A\u7528\u65F6\u95F4\u7BA1\u7406\u6A21\u5757\uFF0C\u62D3\u5C55\u4E86Golang\u6807\u51C6\u5E93time\u7684\u529F\u80FD\uFF0C\u63D0\u4F9B\u4E86\u81EA\u5B9A\u4E49\u7684\u65E5\u671F\u683C\u5F0F\u5316\u8BED\u6CD5\uFF0C\u5BF9PHP\u7684date\u51FD\u6570\u683C\u5F0F\u6709\u826F\u597D\u517C\u5BB9\u6027\uFF0C\u4F7FPHP\u5F00\u53D1\u8005\u5728Go\u4E2D\u5B9E\u73B0\u65F6\u95F4\u7BA1\u7406\u65F6\u66F4\u52A0\u4FBF\u5229\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u65E5\u5FD7\u7BA1\u7406-glog","permalink":"/docs/components/os-glog"},"next":{"title":"\u65F6\u95F4\u7BA1\u7406-\u65F6\u95F4\u683C\u5F0F","permalink":"/docs/components/os-gtime-format"}}'),o=n("785893"),i=n("250065"),s=n("894301");let l={slug:"/docs/components/os-gtime",title:"\u65F6\u95F4\u7BA1\u7406-gtime",sidebar_position:6,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","\u65F6\u95F4\u7BA1\u7406","gtime","\u65E5\u671F\u683C\u5F0F\u5316","PHP date","\u901A\u7528\u65F6\u95F4\u6A21\u5757","\u65F6\u95F4\u6269\u5C55","\u65F6\u95F4\u65E5\u671F\u65B9\u6CD5","\u81EA\u5B9A\u4E49\u683C\u5F0F"],description:"gtime\u6A21\u5757\u662FGoFrame\u6846\u67B6\u7684\u901A\u7528\u65F6\u95F4\u7BA1\u7406\u6A21\u5757\uFF0C\u62D3\u5C55\u4E86Golang\u6807\u51C6\u5E93time\u7684\u529F\u80FD\uFF0C\u63D0\u4F9B\u4E86\u81EA\u5B9A\u4E49\u7684\u65E5\u671F\u683C\u5F0F\u5316\u8BED\u6CD5\uFF0C\u5BF9PHP\u7684date\u51FD\u6570\u683C\u5F0F\u6709\u826F\u597D\u517C\u5BB9\u6027\uFF0C\u4F7FPHP\u5F00\u53D1\u8005\u5728Go\u4E2D\u5B9E\u73B0\u65F6\u95F4\u7BA1\u7406\u65F6\u66F4\u52A0\u4FBF\u5229\u3002"},c=void 0,a={},d=[{value:"\u57FA\u672C\u4ECB\u7ECD",id:"\u57FA\u672C\u4ECB\u7ECD",level:2},{value:"\u76F8\u5173\u6587\u6863",id:"\u76F8\u5173\u6587\u6863",level:2}];function u(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"\u57FA\u672C\u4ECB\u7ECD",children:"\u57FA\u672C\u4ECB\u7ECD"}),"\n",(0,o.jsxs)(t.p,{children:["\u901A\u7528\u65F6\u95F4\u7BA1\u7406\u6A21\u5757\uFF0C\u5C01\u88C5\u4E86\u5E38\u7528\u7684\u65F6\u95F4/\u65E5\u671F\u76F8\u5173\u7684\u65B9\u6CD5\uFF0C\u4F5C\u4E3A\u6807\u51C6\u5E93 ",(0,o.jsx)(t.code,{children:"time"})," \u7684\u529F\u80FD\u6027\u6269\u5C55\uFF0C\u63D0\u4F9B\u4E86\u66F4\u591A\u7684\u529F\u80FD\u7279\u6027\u3002\u652F\u6301\u81EA\u5B9A\u4E49\u7684\u65E5\u671F\u683C\u5F0F\u5316\u8BED\u6CD5\uFF0C\u683C\u5F0F\u5316\u8BED\u6CD5\u7075\u611F\u6765\u6E90\u4E8E ",(0,o.jsx)(t.code,{children:"PHP"})," \u7684 ",(0,o.jsx)(t.code,{children:"date"})," \u51FD\u6570\u8BED\u6CD5 ( ",(0,o.jsx)(t.a,{href:"http://php.net/manual/zh/function.date.php",children:"http://php.net/manual/zh/function.date.php"})," )\u3002"]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"gtime"})," \u7684\u65F6\u95F4\u683C\u5F0F\u8BED\u6CD5\u5BF9\u4E8E\u719F\u6089 ",(0,o.jsx)(t.code,{children:"PHP"})," \u7684\u5F00\u53D1\u8005\u6765\u8BF4\u975E\u5E38\u53CB\u597D\u3002"]})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"\u4F7F\u7528\u65B9\u5F0F"}),"\uFF1A"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/os/gtime"\n'})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"\u63A5\u53E3\u6587\u6863"}),"\uFF1A"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/os/gtime",children:"https://pkg.go.dev/github.com/gogf/gf/v2/os/gtime"})}),"\n",(0,o.jsx)(t.h2,{id:"\u76F8\u5173\u6587\u6863",children:"\u76F8\u5173\u6587\u6863"}),"\n","\n",(0,o.jsx)(s.Z,{})]})}function m(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},894301:function(e,t,n){n.d(t,{Z:()=>j});var r=n("785893");n("667294");var o=n("467026"),i=n("123413"),s=n("83012"),l=n("743115"),c=n("863150"),a=n("96025"),d=n("134403");let u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:t,children:n}=e;return(0,r.jsx)(s.Z,{href:t,className:(0,o.Z)("card padding--lg",u.cardContainer),children:n})}function g(e){let{href:t,icon:n,title:i,description:s}=e;return(0,r.jsxs)(m,{href:t,children:[(0,r.jsxs)(d.Z,{as:"h2",className:(0,o.Z)("text--truncate",u.cardTitle),title:i,children:[n," ",i]}),s&&(0,r.jsx)("p",{className:(0,o.Z)("text--truncate",u.cardDescription),title:s,children:s})]})}function p(e){let{item:t}=e,n=(0,i.LM)(t),o=function(){let{selectMessage:e}=(0,l.c)();return t=>e(t,(0,a.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,r.jsx)(g,{href:n,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??o(t.items.length)}):null}function h(e){let{item:t}=e,n=(0,c.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",o=(0,i.xz)(t.docId??void 0);return(0,r.jsx)(g,{href:t.href,icon:n,title:t.label,description:t.description??o?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,r.jsx)(h,{item:t});case"category":return(0,r.jsx)(p,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e,n=(0,i.jA)();return(0,r.jsx)(j,{items:n.items,className:t})}function j(e){let{items:t,className:n}=e;if(!t)return(0,r.jsx)(x,{...e});let s=(0,i.MN)(t);return(0,r.jsx)("section",{className:(0,o.Z)("row",n),children:s.map((e,t)=>(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(f,{item:e})},t))})}},743115:function(e,t,n){n.d(t,{c:function(){return c}});var r=n(667294),o=n(402933);let i=["zero","one","two","few","many","other"];function s(e){return i.filter(t=>e.includes(t))}let l={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function c(){let e=function(){let{i18n:{currentLocale:e}}=(0,o.Z)();return(0,r.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),l}},[e])}();return{selectMessage:(t,n)=>(function(e,t,n){let r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);let o=n.select(t);return r[Math.min(n.pluralForms.indexOf(o),r.length-1)]})(n,t,e)}}},250065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return s}});var r=n(667294);let o={},i=r.createContext(o);function s(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);