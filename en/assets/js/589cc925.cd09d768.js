"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["25009"],{916867:function(e,t,r){r.r(t),r.d(t,{metadata:()=>n,contentTitle:()=>c,default:()=>f,assets:()=>a,toc:()=>u,frontMatter:()=>l});var n=JSON.parse('{"id":"docs/WEB\u670D\u52A1\u5F00\u53D1/\u670D\u52A1\u914D\u7F6E/\u670D\u52A1\u914D\u7F6E","title":"\u670D\u52A1\u914D\u7F6E","description":"GoFrame\u6846\u67B6\u7684WebServer\u914D\u7F6E\u7BA1\u7406\u975E\u5E38\u65B9\u4FBF\uFF0C\u652F\u6301\u901A\u8FC7\u914D\u7F6E\u6587\u4EF6\u914D\u7F6E\u3001\u591A\u79CD\u914D\u7F6E\u6587\u4EF6\u683C\u5F0F\u3001\u591A\u79CD\u914D\u7F6E\u65B9\u5F0F\u4EE5\u53CA\u591A\u79CD\u914D\u7F6E\u65B9\u6CD5\uFF0C\u5B9E\u73B0\u7075\u6D3B\u3001\u9AD8\u6548\u7684\u670D\u52A1\u914D\u7F6E\u7BA1\u7406\uFF0C\u4E3A\u5F00\u53D1\u8005\u63D0\u4F9B\u7B80\u4FBF\u7684\u64CD\u4F5C\u4F53\u9A8C\u3002","source":"@site/versioned_docs/version-2.7.x/docs/WEB\u670D\u52A1\u5F00\u53D1/\u670D\u52A1\u914D\u7F6E/\u670D\u52A1\u914D\u7F6E.md","sourceDirName":"docs/WEB\u670D\u52A1\u5F00\u53D1/\u670D\u52A1\u914D\u7F6E","slug":"/docs/web/server-config","permalink":"/en/2.7.x/docs/web/server-config","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/WEB\u670D\u52A1\u5F00\u53D1/\u670D\u52A1\u914D\u7F6E/\u670D\u52A1\u914D\u7F6E.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":5,"frontMatter":{"slug":"/docs/web/server-config","title":"\u670D\u52A1\u914D\u7F6E","sidebar_position":5,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","WebServer","\u670D\u52A1\u914D\u7F6E","\u914D\u7F6E\u7BA1\u7406","\u914D\u7F6E\u6587\u4EF6","\u914D\u7F6E\u65B9\u5F0F","\u914D\u7F6E\u683C\u5F0F","\u914D\u7F6E\u65B9\u6CD5","\u6846\u67B6\u914D\u7F6E"],"description":"GoFrame\u6846\u67B6\u7684WebServer\u914D\u7F6E\u7BA1\u7406\u975E\u5E38\u65B9\u4FBF\uFF0C\u652F\u6301\u901A\u8FC7\u914D\u7F6E\u6587\u4EF6\u914D\u7F6E\u3001\u591A\u79CD\u914D\u7F6E\u6587\u4EF6\u683C\u5F0F\u3001\u591A\u79CD\u914D\u7F6E\u65B9\u5F0F\u4EE5\u53CA\u591A\u79CD\u914D\u7F6E\u65B9\u6CD5\uFF0C\u5B9E\u73B0\u7075\u6D3B\u3001\u9AD8\u6548\u7684\u670D\u52A1\u914D\u7F6E\u7BA1\u7406\uFF0C\u4E3A\u5F00\u53D1\u8005\u63D0\u4F9B\u7B80\u4FBF\u7684\u64CD\u4F5C\u4F53\u9A8C\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u6570\u636E\u8FD4\u56DE-Stream\u8FD4\u56DE","permalink":"/en/2.7.x/docs/web/response-stream"},"next":{"title":"\u670D\u52A1\u914D\u7F6E-\u914D\u7F6E\u6587\u4EF6","permalink":"/en/2.7.x/docs/web/server-config-file"}}'),o=r("785893"),i=r("250065"),s=r("894301");let l={slug:"/docs/web/server-config",title:"\u670D\u52A1\u914D\u7F6E",sidebar_position:5,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","WebServer","\u670D\u52A1\u914D\u7F6E","\u914D\u7F6E\u7BA1\u7406","\u914D\u7F6E\u6587\u4EF6","\u914D\u7F6E\u65B9\u5F0F","\u914D\u7F6E\u683C\u5F0F","\u914D\u7F6E\u65B9\u6CD5","\u6846\u67B6\u914D\u7F6E"],description:"GoFrame\u6846\u67B6\u7684WebServer\u914D\u7F6E\u7BA1\u7406\u975E\u5E38\u65B9\u4FBF\uFF0C\u652F\u6301\u901A\u8FC7\u914D\u7F6E\u6587\u4EF6\u914D\u7F6E\u3001\u591A\u79CD\u914D\u7F6E\u6587\u4EF6\u683C\u5F0F\u3001\u591A\u79CD\u914D\u7F6E\u65B9\u5F0F\u4EE5\u53CA\u591A\u79CD\u914D\u7F6E\u65B9\u6CD5\uFF0C\u5B9E\u73B0\u7075\u6D3B\u3001\u9AD8\u6548\u7684\u670D\u52A1\u914D\u7F6E\u7BA1\u7406\uFF0C\u4E3A\u5F00\u53D1\u8005\u63D0\u4F9B\u7B80\u4FBF\u7684\u64CD\u4F5C\u4F53\u9A8C\u3002"},c=void 0,a={},u=[];function d(e){let t={code:"code",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"GoFrame"})," \u6846\u67B6\u7684 ",(0,o.jsx)(t.code,{children:"WebServer"})," \u914D\u7F6E\u7BA1\u7406\u975E\u5E38\u65B9\u4FBF\uFF0C\u652F\u6301\u901A\u8FC7\u914D\u7F6E\u6587\u4EF6\u914D\u7F6E\u3001\u591A\u79CD\u914D\u7F6E\u6587\u4EF6\u683C\u5F0F\u3001\u591A\u79CD\u914D\u7F6E\u65B9\u5F0F\u4EE5\u53CA\u82E5\u5E72\u914D\u7F6E\u65B9\u6CD5\u3002"]}),"\n","\n",(0,o.jsx)(s.Z,{})]})}function f(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},894301:function(e,t,r){r.d(t,{Z:()=>b});var n=r("785893");r("667294");var o=r("467026"),i=r("123413"),s=r("83012"),l=r("743115"),c=r("863150"),a=r("96025"),u=r("134403");let d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function f(e){let{href:t,children:r}=e;return(0,n.jsx)(s.Z,{href:t,className:(0,o.Z)("card padding--lg",d.cardContainer),children:r})}function m(e){let{href:t,icon:r,title:i,description:s}=e;return(0,n.jsxs)(f,{href:t,children:[(0,n.jsxs)(u.Z,{as:"h2",className:(0,o.Z)("text--truncate",d.cardTitle),title:i,children:[r," ",i]}),s&&(0,n.jsx)("p",{className:(0,o.Z)("text--truncate",d.cardDescription),title:s,children:s})]})}function p(e){let{item:t}=e,r=(0,i.LM)(t),o=function(){let{selectMessage:e}=(0,l.c)();return t=>e(t,(0,a.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,n.jsx)(m,{href:r,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??o(t.items.length)}):null}function h(e){let{item:t}=e,r=(0,c.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",o=(0,i.xz)(t.docId??void 0);return(0,n.jsx)(m,{href:t.href,icon:r,title:t.label,description:t.description??o?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,n.jsx)(h,{item:t});case"category":return(0,n.jsx)(p,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e,r=(0,i.jA)();return(0,n.jsx)(b,{items:r.items,className:t})}function b(e){let{items:t,className:r}=e;if(!t)return(0,n.jsx)(x,{...e});let s=(0,i.MN)(t);return(0,n.jsx)("section",{className:(0,o.Z)("row",r),children:s.map((e,t)=>(0,n.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,n.jsx)(g,{item:e})},t))})}},743115:function(e,t,r){r.d(t,{c:function(){return c}});var n=r(667294),o=r(402933);let i=["zero","one","two","few","many","other"];function s(e){return i.filter(t=>e.includes(t))}let l={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function c(){let e=function(){let{i18n:{currentLocale:e}}=(0,o.Z)();return(0,n.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),l}},[e])}();return{selectMessage:(t,r)=>(function(e,t,r){let n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);let o=r.select(t);return n[Math.min(r.pluralForms.indexOf(o),n.length-1)]})(r,t,e)}}},250065:function(e,t,r){r.d(t,{Z:function(){return l},a:function(){return s}});var n=r(667294);let o={},i=n.createContext(o);function s(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);