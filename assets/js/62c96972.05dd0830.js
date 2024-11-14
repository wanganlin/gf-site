"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["21447"],{277628:function(e,o,n){n.r(o),n.d(o,{metadata:()=>t,contentTitle:()=>i,default:()=>p,assets:()=>d,toc:()=>a,frontMatter:()=>s});var t=JSON.parse('{"id":"docs/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u5BF9\u8C61\u590D\u7528-gpool/\u5BF9\u8C61\u590D\u7528-gpool","title":"\u5BF9\u8C61\u590D\u7528-gpool","description":"GoFrame\u6846\u67B6\u4E2D\u7684\u5BF9\u8C61\u590D\u7528\u6C60gpool\u7684\u57FA\u672C\u529F\u80FD\u548C\u4F7F\u7528\u573A\u666F\uFF0C\u5305\u62EC\u63D0\u4F9B\u5BF9\u8C61\u7F13\u5B58\u590D\u7528\u3001\u8FC7\u671F\u65F6\u95F4\u3001\u521B\u5EFA\u548C\u9500\u6BC1\u65B9\u6CD5\u7684\u5B9A\u4E49\u3002gpool\u8BBE\u8BA1\u4E0Esync.Pool\u7684\u533A\u522B\u5728\u4E8E\u5BF9\u8FC7\u671F\u65F6\u95F4\u7684\u652F\u6301\u548CGC\u538B\u529B\u7F13\u89E3\u529F\u80FD\u7684\u4E0D\u540C\uFF0C\u662F\u5E76\u53D1\u5B89\u5168\u7684\u3002","source":"@site/docs/docs/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u5BF9\u8C61\u590D\u7528-gpool/\u5BF9\u8C61\u590D\u7528-gpool.md","sourceDirName":"docs/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u5BF9\u8C61\u590D\u7528-gpool","slug":"/docs/components/container-gpool","permalink":"/docs/components/container-gpool","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u5BF9\u8C61\u590D\u7528-gpool/\u5BF9\u8C61\u590D\u7528-gpool.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":8,"frontMatter":{"slug":"/docs/components/container-gpool","title":"\u5BF9\u8C61\u590D\u7528-gpool","sidebar_position":8,"hide_title":true,"keywords":["\u5BF9\u8C61\u590D\u7528","GoFrame\u6846\u67B6","gpool","\u8FC7\u671F\u65F6\u95F4","\u521B\u5EFA\u65B9\u6CD5","\u9500\u6BC1\u65B9\u6CD5","\u5E76\u53D1\u5B89\u5168","sync.Pool","GC\u538B\u529B","\u7F13\u5B58\u590D\u7528"],"description":"GoFrame\u6846\u67B6\u4E2D\u7684\u5BF9\u8C61\u590D\u7528\u6C60gpool\u7684\u57FA\u672C\u529F\u80FD\u548C\u4F7F\u7528\u573A\u666F\uFF0C\u5305\u62EC\u63D0\u4F9B\u5BF9\u8C61\u7F13\u5B58\u590D\u7528\u3001\u8FC7\u671F\u65F6\u95F4\u3001\u521B\u5EFA\u548C\u9500\u6BC1\u65B9\u6CD5\u7684\u5B9A\u4E49\u3002gpool\u8BBE\u8BA1\u4E0Esync.Pool\u7684\u533A\u522B\u5728\u4E8E\u5BF9\u8FC7\u671F\u65F6\u95F4\u7684\u652F\u6301\u548CGC\u538B\u529B\u7F13\u89E3\u529F\u80FD\u7684\u4E0D\u540C\uFF0C\u662F\u5E76\u53D1\u5B89\u5168\u7684\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u6811\u5F62\u7C7B\u578B-\u65B9\u6CD5\u4ECB\u7ECD","permalink":"/docs/components/container-gtree-funcs"},"next":{"title":"\u5BF9\u8C61\u590D\u7528-\u57FA\u672C\u4F7F\u7528","permalink":"/docs/components/container-gpool-example"}}'),r=n("785893"),l=n("250065"),c=n("894301");let s={slug:"/docs/components/container-gpool",title:"\u5BF9\u8C61\u590D\u7528-gpool",sidebar_position:8,hide_title:!0,keywords:["\u5BF9\u8C61\u590D\u7528","GoFrame\u6846\u67B6","gpool","\u8FC7\u671F\u65F6\u95F4","\u521B\u5EFA\u65B9\u6CD5","\u9500\u6BC1\u65B9\u6CD5","\u5E76\u53D1\u5B89\u5168","sync.Pool","GC\u538B\u529B","\u7F13\u5B58\u590D\u7528"],description:"GoFrame\u6846\u67B6\u4E2D\u7684\u5BF9\u8C61\u590D\u7528\u6C60gpool\u7684\u57FA\u672C\u529F\u80FD\u548C\u4F7F\u7528\u573A\u666F\uFF0C\u5305\u62EC\u63D0\u4F9B\u5BF9\u8C61\u7F13\u5B58\u590D\u7528\u3001\u8FC7\u671F\u65F6\u95F4\u3001\u521B\u5EFA\u548C\u9500\u6BC1\u65B9\u6CD5\u7684\u5B9A\u4E49\u3002gpool\u8BBE\u8BA1\u4E0Esync.Pool\u7684\u533A\u522B\u5728\u4E8E\u5BF9\u8FC7\u671F\u65F6\u95F4\u7684\u652F\u6301\u548CGC\u538B\u529B\u7F13\u89E3\u529F\u80FD\u7684\u4E0D\u540C\uFF0C\u662F\u5E76\u53D1\u5B89\u5168\u7684\u3002"},i=void 0,d={},a=[{value:"\u57FA\u672C\u4ECB\u7ECD",id:"\u57FA\u672C\u4ECB\u7ECD",level:2},{value:"<code>gpool</code> \u4E0E <code>sync.Pool</code>",id:"gpool-\u4E0E-syncpool",level:2},{value:"\u76F8\u5173\u6587\u6863",id:"\u76F8\u5173\u6587\u6863",level:2}];function u(e){let o={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h2,{id:"\u57FA\u672C\u4ECB\u7ECD",children:"\u57FA\u672C\u4ECB\u7ECD"}),"\n",(0,r.jsxs)(o.p,{children:["\u5BF9\u8C61\u590D\u7528\u6C60\uFF08\u5E76\u53D1\u5B89\u5168\uFF09\u3002\u5C06\u5BF9\u8C61\u8FDB\u884C\u7F13\u5B58\u590D\u7528\uFF0C\u652F\u6301 ",(0,r.jsx)(o.code,{children:"\u8FC7\u671F\u65F6\u95F4"}),"\u3001 ",(0,r.jsx)(o.code,{children:"\u521B\u5EFA\u65B9\u6CD5"})," \u53CA ",(0,r.jsx)(o.code,{children:"\u9500\u6BC1\u65B9\u6CD5"})," \u5B9A\u4E49\u3002"]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"\u4F7F\u7528\u573A\u666F"}),"\uFF1A"]}),"\n",(0,r.jsx)(o.p,{children:"\u4EFB\u4F55\u9700\u8981\u652F\u6301\u5B9A\u65F6\u8FC7\u671F\u7684\u5BF9\u8C61\u590D\u7528\u573A\u666F\u3002"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"\u4F7F\u7528\u65B9\u5F0F"}),"\uFF1A"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/container/gpool"\n'})}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"\u63A5\u53E3\u6587\u6863"}),"\uFF1A"]}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/container/gpool",children:"https://pkg.go.dev/github.com/gogf/gf/v2/container/gpool"})}),"\n",(0,r.jsx)(o.p,{children:"\u9700\u8981\u6CE8\u610F\u4E24\u70B9\uFF1A"}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"New"})," \u65B9\u6CD5\u7684\u8FC7\u671F\u65F6\u95F4\u7C7B\u578B\u4E3A ",(0,r.jsx)(o.code,{children:"time.Duration"}),"\u3002"]}),"\n",(0,r.jsxs)(o.li,{children:["\u5BF9\u8C61 ",(0,r.jsx)(o.code,{children:"\u521B\u5EFA\u65B9\u6CD5"}),"( ",(0,r.jsx)(o.code,{children:"newFunc NewFunc"}),")\u8FD4\u56DE\u503C\u5305\u542B\u4E00\u4E2A ",(0,r.jsx)(o.code,{children:"error"})," \u8FD4\u56DE\uFF0C\u5F53\u5BF9\u8C61\u521B\u5EFA\u5931\u8D25\u65F6\u53EF\u7531\u8BE5\u8FD4\u56DE\u503C\u53CD\u9988\u539F\u56E0\u3002"]}),"\n",(0,r.jsxs)(o.li,{children:["\u5BF9\u8C61 ",(0,r.jsx)(o.code,{children:"\u9500\u6BC1\u65B9\u6CD5"}),"( ",(0,r.jsx)(o.code,{children:"expireFunc...ExpireFunc"}),")\u4E3A\u53EF\u9009\u53C2\u6570\uFF0C\u7528\u4EE5\u5F53\u5BF9\u8C61\u8D85\u65F6/\u6C60\u5173\u95ED\u65F6\uFF0C\u81EA\u52A8\u8C03\u7528\u81EA\u5B9A\u4E49\u7684\u65B9\u6CD5\u9500\u6BC1\u5BF9\u8C61\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(o.h2,{id:"gpool-\u4E0E-syncpool",children:[(0,r.jsx)(o.code,{children:"gpool"})," \u4E0E ",(0,r.jsx)(o.code,{children:"sync.Pool"})]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"gpool"})," \u4E0E ",(0,r.jsx)(o.code,{children:"sync.Pool"})," \u90FD\u53EF\u4EE5\u8FBE\u5230\u5BF9\u8C61\u590D\u7528\u7684\u4F5C\u7528\uFF0C\u4F46\u662F\u4E24\u8005\u7684\u8BBE\u8BA1\u521D\u8877\u548C\u4F7F\u7528\u573A\u666F\u4E0D\u592A\u4E00\u6837\u3002"]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"sync.Pool"})," \u7684\u5BF9\u8C61\u751F\u547D\u5468\u671F\u4E0D\u652F\u6301\u81EA\u5B9A\u4E49\u8FC7\u671F\u65F6\u95F4\uFF0C\u7A76\u5176\u539F\u56E0\uFF0C ",(0,r.jsx)(o.code,{children:"sync.Pool"})," \u5E76\u4E0D\u662F\u4E00\u4E2A ",(0,r.jsx)(o.code,{children:"Cache"}),"\uFF1B ",(0,r.jsx)(o.code,{children:"sync.Pool"})," \u8BBE\u8BA1\u521D\u8877\u662F\u4E3A\u4E86\u7F13\u89E3GC ",(0,r.jsx)(o.code,{children:"\u538B\u529B"}),"\uFF0C ",(0,r.jsx)(o.code,{children:"sync.Pool"})," \u4E2D\u7684\u5BF9\u8C61\u4F1A\u5728 ",(0,r.jsx)(o.code,{children:"GC"})," \u5F00\u59CB\u524D\u5168\u90E8\u6E05\u9664\uFF1B\u5E76\u4E14 ",(0,r.jsx)(o.code,{children:"sync.Pool"})," \u4E0D\u652F\u6301\u5BF9\u8C61\u521B\u5EFA\u65B9\u6CD5\u53CA\u9500\u6BC1\u65B9\u6CD5\u3002"]}),"\n",(0,r.jsx)(o.h2,{id:"\u76F8\u5173\u6587\u6863",children:"\u76F8\u5173\u6587\u6863"}),"\n","\n",(0,r.jsx)(c.Z,{})]})}function p(e={}){let{wrapper:o}={...(0,l.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},894301:function(e,o,n){n.d(o,{Z:()=>j});var t=n("785893");n("667294");var r=n("467026"),l=n("123413"),c=n("83012"),s=n("743115"),i=n("863150"),d=n("96025"),a=n("134403");let u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(e){let{href:o,children:n}=e;return(0,t.jsx)(c.Z,{href:o,className:(0,r.Z)("card padding--lg",u.cardContainer),children:n})}function h(e){let{href:o,icon:n,title:l,description:c}=e;return(0,t.jsxs)(p,{href:o,children:[(0,t.jsxs)(a.Z,{as:"h2",className:(0,r.Z)("text--truncate",u.cardTitle),title:l,children:[n," ",l]}),c&&(0,t.jsx)("p",{className:(0,r.Z)("text--truncate",u.cardDescription),title:c,children:c})]})}function g(e){let{item:o}=e,n=(0,l.LM)(o),r=function(){let{selectMessage:e}=(0,s.c)();return o=>e(o,(0,d.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:o}))}();return n?(0,t.jsx)(h,{href:n,icon:"\uD83D\uDDC3\uFE0F",title:o.label,description:o.description??r(o.items.length)}):null}function m(e){let{item:o}=e,n=(0,i.Z)(o.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",r=(0,l.xz)(o.docId??void 0);return(0,t.jsx)(h,{href:o.href,icon:n,title:o.label,description:o.description??r?.description})}function x(e){let{item:o}=e;switch(o.type){case"link":return(0,t.jsx)(m,{item:o});case"category":return(0,t.jsx)(g,{item:o});default:throw Error(`unknown item type ${JSON.stringify(o)}`)}}function f(e){let{className:o}=e,n=(0,l.jA)();return(0,t.jsx)(j,{items:n.items,className:o})}function j(e){let{items:o,className:n}=e;if(!o)return(0,t.jsx)(f,{...e});let c=(0,l.MN)(o);return(0,t.jsx)("section",{className:(0,r.Z)("row",n),children:c.map((e,o)=>(0,t.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,t.jsx)(x,{item:e})},o))})}},743115:function(e,o,n){n.d(o,{c:function(){return i}});var t=n(667294),r=n(402933);let l=["zero","one","two","few","many","other"];function c(e){return l.filter(o=>e.includes(o))}let s={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function i(){let e=function(){let{i18n:{currentLocale:e}}=(0,r.Z)();return(0,t.useMemo)(()=>{try{return function(e){let o=new Intl.PluralRules(e);return{locale:e,pluralForms:c(o.resolvedOptions().pluralCategories),select:e=>o.select(e)}}(e)}catch(o){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${o.message}
`),s}},[e])}();return{selectMessage:(o,n)=>(function(e,o,n){let t=e.split("|");if(1===t.length)return t[0];t.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${t.length}: ${e}`);let r=n.select(o);return t[Math.min(n.pluralForms.indexOf(r),t.length-1)]})(n,o,e)}}},250065:function(e,o,n){n.d(o,{Z:function(){return s},a:function(){return c}});var t=n(667294);let r={},l=t.createContext(r);function c(e){let o=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(l.Provider,{value:o},e.children)}}}]);