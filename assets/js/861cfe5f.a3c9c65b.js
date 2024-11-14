"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["34365"],{842972:function(e,t,r){r.r(t),r.d(t,{metadata:()=>n,contentTitle:()=>s,default:()=>f,assets:()=>l,toc:()=>d,frontMatter:()=>a});var n=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u914D\u7F6E\u7BA1\u7406/\u914D\u7F6E\u7BA1\u7406-\u63A5\u53E3\u5316\u8BBE\u8BA1/\u914D\u7F6E\u7BA1\u7406-\u63A5\u53E3\u5316\u8BBE\u8BA1","title":"\u914D\u7F6E\u7BA1\u7406-\u63A5\u53E3\u5316\u8BBE\u8BA1","description":"GoFrame\u6846\u67B6\u4E2Dgcfg\u7EC4\u4EF6\u7684\u63A5\u53E3\u5316\u8BBE\u8BA1\u53CA\u5176\u9AD8\u6269\u5C55\u6027\u3002\u901A\u8FC7\u63A5\u53E3\u5316\u8BBE\u8BA1\uFF0C\u7528\u6237\u53EF\u4EE5\u81EA\u5B9A\u4E49\u914D\u7F6E\u83B7\u53D6\u65B9\u5F0F\uFF0C\u5305\u62EC\u4F7F\u7528etcd\u3001zookeeper\u3001consul\u3001kubernetes configmap\u548Capollo\u7B49\uFF0C\u6EE1\u8DB3\u591A\u6837\u5316\u7684\u914D\u7F6E\u7BA1\u7406\u9700\u6C42\u3002\u8BE6\u7EC6\u7684\u63A5\u53E3\u5B9A\u4E49\u548C\u5B9E\u73B0\u8BBE\u7F6E\u6307\u5BFC\u4E3A\u60A8\u63D0\u4F9B\u914D\u7F6E\u529F\u80FD\u7684\u7075\u6D3B\u6027\u3002","source":"@site/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u914D\u7F6E\u7BA1\u7406/\u914D\u7F6E\u7BA1\u7406-\u63A5\u53E3\u5316\u8BBE\u8BA1/\u914D\u7F6E\u7BA1\u7406-\u63A5\u53E3\u5316\u8BBE\u8BA1.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u914D\u7F6E\u7BA1\u7406/\u914D\u7F6E\u7BA1\u7406-\u63A5\u53E3\u5316\u8BBE\u8BA1","slug":"/docs/core/gcfg-interface","permalink":"/docs/core/gcfg-interface","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u914D\u7F6E\u7BA1\u7406/\u914D\u7F6E\u7BA1\u7406-\u63A5\u53E3\u5316\u8BBE\u8BA1/\u914D\u7F6E\u7BA1\u7406-\u63A5\u53E3\u5316\u8BBE\u8BA1.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731330933000,"sidebarPosition":3,"frontMatter":{"slug":"/docs/core/gcfg-interface","title":"\u914D\u7F6E\u7BA1\u7406-\u63A5\u53E3\u5316\u8BBE\u8BA1","sidebar_position":3,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","\u914D\u7F6E\u7BA1\u7406","\u63A5\u53E3\u5316\u8BBE\u8BA1","\u9AD8\u6269\u5C55\u6027","\u914D\u7F6E\u83B7\u53D6\u65B9\u5F0F","etcd","zookeeper","consul","kubernetes","apollo"],"description":"GoFrame\u6846\u67B6\u4E2Dgcfg\u7EC4\u4EF6\u7684\u63A5\u53E3\u5316\u8BBE\u8BA1\u53CA\u5176\u9AD8\u6269\u5C55\u6027\u3002\u901A\u8FC7\u63A5\u53E3\u5316\u8BBE\u8BA1\uFF0C\u7528\u6237\u53EF\u4EE5\u81EA\u5B9A\u4E49\u914D\u7F6E\u83B7\u53D6\u65B9\u5F0F\uFF0C\u5305\u62EC\u4F7F\u7528etcd\u3001zookeeper\u3001consul\u3001kubernetes configmap\u548Capollo\u7B49\uFF0C\u6EE1\u8DB3\u591A\u6837\u5316\u7684\u914D\u7F6E\u7BA1\u7406\u9700\u6C42\u3002\u8BE6\u7EC6\u7684\u63A5\u53E3\u5B9A\u4E49\u548C\u5B9E\u73B0\u8BBE\u7F6E\u6307\u5BFC\u4E3A\u60A8\u63D0\u4F9B\u914D\u7F6E\u529F\u80FD\u7684\u7075\u6D3B\u6027\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u914D\u7F6E\u7BA1\u7406-\u5E38\u7528\u65B9\u6CD5","permalink":"/docs/core/gcfg-funcs"},"next":{"title":"\u914D\u7F6E\u7BA1\u7406-AdapterFile","permalink":"/docs/core/gcfg-interface-adapter-file"}}'),o=r("785893"),i=r("250065"),c=r("894301");let a={slug:"/docs/core/gcfg-interface",title:"\u914D\u7F6E\u7BA1\u7406-\u63A5\u53E3\u5316\u8BBE\u8BA1",sidebar_position:3,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","\u914D\u7F6E\u7BA1\u7406","\u63A5\u53E3\u5316\u8BBE\u8BA1","\u9AD8\u6269\u5C55\u6027","\u914D\u7F6E\u83B7\u53D6\u65B9\u5F0F","etcd","zookeeper","consul","kubernetes","apollo"],description:"GoFrame\u6846\u67B6\u4E2Dgcfg\u7EC4\u4EF6\u7684\u63A5\u53E3\u5316\u8BBE\u8BA1\u53CA\u5176\u9AD8\u6269\u5C55\u6027\u3002\u901A\u8FC7\u63A5\u53E3\u5316\u8BBE\u8BA1\uFF0C\u7528\u6237\u53EF\u4EE5\u81EA\u5B9A\u4E49\u914D\u7F6E\u83B7\u53D6\u65B9\u5F0F\uFF0C\u5305\u62EC\u4F7F\u7528etcd\u3001zookeeper\u3001consul\u3001kubernetes configmap\u548Capollo\u7B49\uFF0C\u6EE1\u8DB3\u591A\u6837\u5316\u7684\u914D\u7F6E\u7BA1\u7406\u9700\u6C42\u3002\u8BE6\u7EC6\u7684\u63A5\u53E3\u5B9A\u4E49\u548C\u5B9E\u73B0\u8BBE\u7F6E\u6307\u5BFC\u4E3A\u60A8\u63D0\u4F9B\u914D\u7F6E\u529F\u80FD\u7684\u7075\u6D3B\u6027\u3002"},s=void 0,l={},d=[{value:"\u63A5\u53E3\u5B9A\u4E49",id:"\u63A5\u53E3\u5B9A\u4E49",level:2},{value:"\u8BBE\u7F6E\u63A5\u53E3\u5B9E\u73B0",id:"\u8BBE\u7F6E\u63A5\u53E3\u5B9E\u73B0",level:2},{value:"\u83B7\u53D6\u63A5\u53E3\u5B9E\u73B0",id:"\u83B7\u53D6\u63A5\u53E3\u5B9E\u73B0",level:2},{value:"\u76F8\u5173\u6587\u6863",id:"\u76F8\u5173\u6587\u6863",level:2}];function u(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"gcfg"})," \u7EC4\u4EF6\u91C7\u7528\u4E86\u63A5\u53E3\u5316\u8BBE\u8BA1\uFF0C\u4EE5\u5B9E\u73B0\u9AD8\u6269\u5C55\u6027\u3002\u901A\u8FC7\u63A5\u53E3\u5316\u8BBE\u8BA1\u7684\u65B9\u5F0F\uFF0C\u4F7F\u7528\u8005\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5BF9\u63A5\u7684\u914D\u7F6E\u83B7\u53D6\u65B9\u5F0F\uFF0C\u4F8B\u5982 ",(0,o.jsx)(t.code,{children:"etcd, zookeeper, consul, kubernetes configmap, apollo"})," \u7B49\u7B49\u3002"]}),"\n",(0,o.jsx)(t.h2,{id:"\u63A5\u53E3\u5B9A\u4E49",children:"\u63A5\u53E3\u5B9A\u4E49"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://github.com/gogf/gf/blob/master/os/gcfg/gcfg_adaper.go",children:"https://github.com/gogf/gf/blob/master/os/gcfg/gcfg_adaper.go"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-go",children:"// Adapter is the interface for configuration retrieving.\ntype Adapter interface {\n    // Available checks and returns the configuration service is available.\n    // The optional parameter `resource` specifies certain configuration resource.\n    //\n    // It returns true if configuration file is present in default AdapterFile, or else false.\n    // Note that this function does not return error as it just does simply check for backend configuration service.\n    Available(ctx context.Context, resource ...string) (ok bool)\n\n    // Get retrieves and returns value by specified `pattern`.\n    Get(ctx context.Context, pattern string) (value interface{}, err error)\n\n    // Data retrieves and returns all configuration data as map type.\n    // Note that this function may lead lots of memory usage if configuration data is too large,\n    // you can implement this function if necessary.\n    Data(ctx context.Context) (data map[string]interface{}, err error)\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"\u8BBE\u7F6E\u63A5\u53E3\u5B9E\u73B0",children:"\u8BBE\u7F6E\u63A5\u53E3\u5B9E\u73B0"}),"\n",(0,o.jsxs)(t.p,{children:["\u914D\u7F6E\u5BF9\u8C61\u53EF\u4EE5\u901A\u8FC7 ",(0,o.jsx)(t.code,{children:"SetAdapter"})," \u65B9\u6CD5\u8BBE\u7F6E\u5F53\u524D\u4F7F\u7528\u7684\u63A5\u53E3\u5B9E\u73B0\u3002"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-go",children:"// SetAdapter sets the adapter of current Config object.\nfunc (c *Config) SetAdapter(adapter Adapter)\n"})}),"\n",(0,o.jsx)(t.h2,{id:"\u83B7\u53D6\u63A5\u53E3\u5B9E\u73B0",children:"\u83B7\u53D6\u63A5\u53E3\u5B9E\u73B0"}),"\n",(0,o.jsxs)(t.p,{children:["\u914D\u7F6E\u5BF9\u8C61\u53EF\u4EE5\u901A\u8FC7 ",(0,o.jsx)(t.code,{children:"GetAdapter"})," \u65B9\u6CD5\u83B7\u53D6\u5F53\u524D\u4F7F\u7528\u7684\u63A5\u53E3\u5B9E\u73B0\u3002"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-go",children:"// GetAdapter returns the adapter of current Config object.\nfunc (c *Config) GetAdapter() Adapter\n"})}),"\n",(0,o.jsx)(t.h2,{id:"\u76F8\u5173\u6587\u6863",children:"\u76F8\u5173\u6587\u6863"}),"\n","\n",(0,o.jsx)(c.Z,{})]})}function f(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},894301:function(e,t,r){r.d(t,{Z:()=>j});var n=r("785893");r("667294");var o=r("467026"),i=r("123413"),c=r("83012"),a=r("743115"),s=r("863150"),l=r("96025"),d=r("134403");let u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function f(e){let{href:t,children:r}=e;return(0,n.jsx)(c.Z,{href:t,className:(0,o.Z)("card padding--lg",u.cardContainer),children:r})}function p(e){let{href:t,icon:r,title:i,description:c}=e;return(0,n.jsxs)(f,{href:t,children:[(0,n.jsxs)(d.Z,{as:"h2",className:(0,o.Z)("text--truncate",u.cardTitle),title:i,children:[r," ",i]}),c&&(0,n.jsx)("p",{className:(0,o.Z)("text--truncate",u.cardDescription),title:c,children:c})]})}function g(e){let{item:t}=e,r=(0,i.LM)(t),o=function(){let{selectMessage:e}=(0,a.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,n.jsx)(p,{href:r,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??o(t.items.length)}):null}function h(e){let{item:t}=e,r=(0,s.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",o=(0,i.xz)(t.docId??void 0);return(0,n.jsx)(p,{href:t.href,icon:r,title:t.label,description:t.description??o?.description})}function m(e){let{item:t}=e;switch(t.type){case"link":return(0,n.jsx)(h,{item:t});case"category":return(0,n.jsx)(g,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e,r=(0,i.jA)();return(0,n.jsx)(j,{items:r.items,className:t})}function j(e){let{items:t,className:r}=e;if(!t)return(0,n.jsx)(x,{...e});let c=(0,i.MN)(t);return(0,n.jsx)("section",{className:(0,o.Z)("row",r),children:c.map((e,t)=>(0,n.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,n.jsx)(m,{item:e})},t))})}},743115:function(e,t,r){r.d(t,{c:function(){return s}});var n=r(667294),o=r(402933);let i=["zero","one","two","few","many","other"];function c(e){return i.filter(t=>e.includes(t))}let a={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function s(){let e=function(){let{i18n:{currentLocale:e}}=(0,o.Z)();return(0,n.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),a}},[e])}();return{selectMessage:(t,r)=>(function(e,t,r){let n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);let o=r.select(t);return n[Math.min(r.pluralForms.indexOf(o),n.length-1)]})(r,t,e)}}},250065:function(e,t,r){r.d(t,{Z:function(){return a},a:function(){return c}});var n=r(667294);let o={},i=n.createContext(o);function c(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);