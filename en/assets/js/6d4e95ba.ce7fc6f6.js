"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[53253],{603342:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u8d44\u6e90\u7ba1\u7406/\u8d44\u6e90\u7ba1\u7406","title":"\u8d44\u6e90\u7ba1\u7406","description":"\u57fa\u672c\u4ecb\u7ecd","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u8d44\u6e90\u7ba1\u7406/\u8d44\u6e90\u7ba1\u7406.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u8d44\u6e90\u7ba1\u7406","slug":"/docs/core/gres","permalink":"/en/docs/core/gres","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u8d44\u6e90\u7ba1\u7406/\u8d44\u6e90\u7ba1\u7406.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730810002000,"sidebarPosition":12,"frontMatter":{"slug":"/docs/core/gres","title":"\u8d44\u6e90\u7ba1\u7406","sidebar_position":12,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"I18N\u56fd\u9645\u5316-\u4f7f\u7528\u4ecb\u7ecd","permalink":"/en/docs/core/gi18n-example"},"next":{"title":"\u8d44\u6e90\u7ba1\u7406-\u5de5\u5177\u6253\u5305","permalink":"/en/docs/core/gres-pack-using-cli"}}');var t=r(474848),c=r(28453),o=r(744074);const i={slug:"/docs/core/gres",title:"\u8d44\u6e90\u7ba1\u7406",sidebar_position:12,hide_title:!0},l=void 0,d={},a=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u7ec4\u4ef6\u7279\u6027",id:"\u7ec4\u4ef6\u7279\u6027",level:2},{value:"\u4e0e <code>embed.FS</code> \u7684\u6bd4\u8f83",id:"\u4e0e-embedfs-\u7684\u6bd4\u8f83",level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"\u8d44\u6e90\u7ba1\u7406"})," \u662f\u6307\u53ef\u4ee5\u5c06\u4efb\u610f\u6587\u4ef6/\u76ee\u5f55\u6253\u5305\u4e3a ",(0,t.jsx)(n.code,{children:"Golang"})," \u6e90\u7801\u6587\u4ef6\uff0c\u5e76\u4e14\u7f16\u8bd1\u5230\u53ef\u6267\u884c\u6587\u4ef6\u4e2d\uff0c\u968f\u7740\u53ef\u6267\u884c\u6587\u4ef6\u53d1\u5e03\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u8d44\u6e90\u6587\u4ef6\u5728\u7a0b\u5e8f\u542f\u52a8\u65f6\u5c06\u4f1a\u81ea\u89e3\u538b\u91ca\u653e\u5230\u5185\u5b58\u4e2d\uff0c\u4f9b\u7a0b\u5e8f\u53ea\u8bfb\u8bbf\u95ee\uff0c\u53ef\u4ee5\u5c06\u5b83\u5f53\u505a\u57fa\u4e8e\u5185\u5b58\u7684\u6587\u4ef6\u7ba1\u7406\u5668\u3002\u540c\u65f6\uff0c ",(0,t.jsx)(n.code,{children:"GoFrame"})," \u7684\u8d44\u6e90\u7ba1\u7406\u7279\u6027\u4e5f\u652f\u6301\u5c06\u6587\u4ef6/\u76ee\u5f55\u6253\u5305\u4e3a\u72ec\u7acb\u7684\u4e8c\u8fdb\u5236\u8d44\u6e90\u6587\u4ef6\u4f7f\u7528\u3002\u7531\u4e8e\u8d44\u6e90\u6587\u4ef6\u5728\u7a0b\u5e8f\u8fd0\u884c\u65f6\u662f\u57fa\u4e8e\u5185\u5b58\u7684\u6587\u4ef6\u64cd\u4f5c\uff0c\u6ca1\u6709\u78c1\u76d8 ",(0,t.jsx)(n.code,{children:"IO"})," \u7684\u5f00\u9500\uff0c\u56e0\u6b64\u5176\u6587\u4ef6\u64cd\u4f5c\u6548\u7387\u975e\u5e38\u9ad8\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/os/gres"\n\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/os/gres",children:"https://pkg.go.dev/github.com/gogf/gf/v2/os/gres"})}),"\n",(0,t.jsx)(n.h2,{id:"\u7ec4\u4ef6\u7279\u6027",children:"\u7ec4\u4ef6\u7279\u6027"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"gres"})," \u8d44\u6e90\u7ba1\u7406\u7ec4\u4ef6\u5177\u6709\u4ee5\u4e0b\u663e\u8457\u7279\u70b9\uff1a"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u53ef\u5c06\u4efb\u610f\u7684\u6587\u4ef6/\u76ee\u5f55\u6253\u5305\u4e3a ",(0,t.jsx)(n.code,{children:"Go"})," \u6587\u4ef6\uff0c\u652f\u6301\u81ea\u5b9a\u4e49\u52a0\u89e3\u5bc6\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u6253\u5305\u7684 ",(0,t.jsx)(n.code,{children:"Go"})," \u6587\u4ef6/\u8d44\u6e90\u6587\u4ef6\u81ea\u52a8\u538b\u7f29\uff0c\u5e38\u89c1 ",(0,t.jsx)(n.code,{children:"css/js"})," \u7b49\u6587\u4ef6\u53ef\u8fbe\u5230 ",(0,t.jsx)(n.code,{children:"50~90%"})," \u7684\u538b\u7f29\u7387\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u652f\u6301\u5bf9\u6253\u5305\u4e3a ",(0,t.jsx)(n.code,{children:"Go"})," \u6587\u4ef6\u7684\u8d44\u6e90\u5185\u5bb9\uff0c\u65b9\u4fbf\u5730\u5bfc\u51fa\u5230\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u3002"]}),"\n",(0,t.jsx)(n.li,{children:"\u8d44\u6e90\u7ba1\u7406\u5668\u5185\u5bb9\u5b8c\u5168\u57fa\u4e8e\u5185\u5b58\uff0c\u5e76\u4e14\u5185\u5bb9\u53ea\u8bfb\uff0c\u65e0\u6cd5\u52a8\u6001\u4fee\u6539\u3002"}),"\n",(0,t.jsxs)(n.li,{children:["\u8d44\u6e90\u7ba1\u7406\u5668\u9ed8\u8ba4\u6574\u5408\u652f\u6301\u5230\u4e86 ",(0,t.jsx)(n.code,{children:"WebServer"}),"\u3001\u914d\u7f6e\u7ba1\u7406\u3001\u6a21\u677f\u5f15\u64ce\u6a21\u5757\u4e2d\u3002"]}),"\n",(0,t.jsx)(n.li,{children:"\u4efb\u610f\u6587\u4ef6\u5982\u7f51\u7ad9\u9759\u6001\u6587\u4ef6\u3001\u914d\u7f6e\u6587\u4ef6\u7b49\u53ef\u7f16\u8bd1\u5230\u4e8c\u8fdb\u5236\u6587\u4ef6\u4e2d\uff0c\u4e5f\u53ef\u7f16\u8bd1\u5230\u53d1\u5e03\u7684\u53ef\u6267\u884c\u6587\u4ef6\u4e2d\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u5f00\u53d1\u8005\u53ef\u53ea\u9700\u7f16\u8bd1\u53d1\u5e03\u4e00\u4e2a\u53ef\u6267\u884c\u6587\u4ef6\uff0c\u9664\u4e86\u65b9\u4fbf\u4e86\u8f6f\u4ef6\u5206\u53d1\uff0c\u4e5f\u4e3a\u4fdd\u62a4\u8f6f\u4ef6\u77e5\u8bc6\u4ea7\u6743\u5185\u5bb9\u63d0\u4f9b\u4e86\u53ef\u80fd\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"\u4e0e-embedfs-\u7684\u6bd4\u8f83",children:["\u4e0e ",(0,t.jsx)(n.code,{children:"embed.FS"})," \u7684\u6bd4\u8f83"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4ece ",(0,t.jsx)(n.code,{children:"Golang v1.16"})," \u7248\u672c\u5f00\u59cb\u5b98\u65b9\u63d0\u4f9b\u4e86\u9759\u6001\u6587\u4ef6\u5d4c\u5165\u7684 ",(0,t.jsx)(n.code,{children:"embed.FS"})," \u7279\u6027\uff0c\u6574\u4f53\u5e95\u5c42\u8bbe\u8ba1\u548c ",(0,t.jsx)(n.code,{children:"gres"})," \u7ec4\u4ef6\u7c7b\u4f3c\uff0c\u538b\u7f29\u6bd4\u3001\u6267\u884c\u6548\u7387\u4e5f\u5dee\u4e0d\u591a\uff0c\u53ea\u662f\u5728\u4f7f\u7528\u8bbe\u8ba1\u548c\u5de5\u7a0b\u5316\u7ba1\u7406\u4e0a\u6709\u6bd4\u8f83\u5927\u7684\u5dee\u522b\u3002 ",(0,t.jsx)(n.code,{children:"GoFrame"})," \u8d44\u6e90\u7ba1\u7406\u7ec4\u4ef6\u7684\u529f\u80fd\u66f4\u52a0\u4e30\u5bcc\uff0c\u6846\u67b6\u7684\u6838\u5fc3\u7ec4\u4ef6\u5df2\u7ecf\u5b8c\u5168\u5bf9\u63a5\u4e86 ",(0,t.jsx)(n.code,{children:"gres"})," \u8d44\u6e90\u7ba1\u7406\u7ec4\u4ef6\uff0c\u5e76\u4e14\u5728 ",(0,t.jsx)(n.code,{children:"GoFrame"})," \u63d0\u4f9b\u7684\u6807\u51c6\u7684\u5de5\u7a0b\u5316\u7ba1\u7406\u4e0b\u80fd\u591f\u505a\u5230\u5bf9\u5f00\u53d1\u8005\u65e0\u611f\u77e5\u5730\u4f7f\u7528\u8d44\u6e90\u7ba1\u7406\u7279\u6027\uff0c\u5177\u4f53\u53ef\u4ee5\u53c2\u8003\u7ae0\u8282 ",(0,t.jsx)(n.a,{href:"/en/docs/core/gres-practice",children:"\u8d44\u6e90\u7ba1\u7406-\u6700\u4f73\u5b9e\u8df5"})," \u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u672a\u6765 ",(0,t.jsx)(n.code,{children:"GoFrame"})," \u57fa\u7840\u6846\u67b6\u5e95\u5c42\u4e0d\u4f1a\u8003\u8651\u5185\u7f6e\u5bf9 ",(0,t.jsx)(n.code,{children:"embed.FS"})," \u7ec4\u4ef6\u7684\u652f\u6301\uff0c ",(0,t.jsx)(n.code,{children:"embed.FS"})," \u4e0e ",(0,t.jsx)(n.code,{children:"gres"})," \u7ec4\u4ef6\u53ef\u4ee5\u72ec\u7acb\u4f7f\u7528\u4e92\u4e0d\u5f71\u54cd\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n","\n",(0,t.jsx)(o.A,{})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},744074:(e,n,r)=>{r.d(n,{A:()=>w});var s=r(296540),t=r(634164),c=r(291054),o=r(314783),i=r(597639);const l=["zero","one","two","few","many","other"];function d(e){return l.filter((n=>e.includes(n)))}const a={locale:"en",pluralForms:d(["one","other"]),select:e=>1===e?"one":"other"};function h(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,s.useMemo)((()=>{try{return function(e){const n=new Intl.PluralRules(e);return{locale:e,pluralForms:d(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${n.message}\n`),a}}),[e])}function u(){const e=h();return{selectMessage:(n,r)=>function(e,n,r){const s=e.split("|");if(1===s.length)return s[0];s.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const t=r.select(n),c=r.pluralForms.indexOf(t);return s[Math.min(c,s.length-1)]}(r,n,e)}}var m=r(940877),x=r(923230),g=r(985225);const p={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var f=r(474848);function j(e){let{href:n,children:r}=e;return(0,f.jsx)(o.A,{href:n,className:(0,t.A)("card padding--lg",p.cardContainer),children:r})}function b(e){let{href:n,icon:r,title:s,description:c}=e;return(0,f.jsxs)(j,{href:n,children:[(0,f.jsxs)(g.A,{as:"h2",className:(0,t.A)("text--truncate",p.cardTitle),title:s,children:[r," ",s]}),c&&(0,f.jsx)("p",{className:(0,t.A)("text--truncate",p.cardDescription),title:c,children:c})]})}function v(e){let{item:n}=e;const r=(0,c.Nr)(n),s=function(){const{selectMessage:e}=u();return n=>e(n,(0,x.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return r?(0,f.jsx)(b,{href:r,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??s(n.items.length)}):null}function F(e){let{item:n}=e;const r=(0,m.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,c.cC)(n.docId??void 0);return(0,f.jsx)(b,{href:n.href,icon:r,title:n.label,description:n.description??s?.description})}function k(e){let{item:n}=e;switch(n.type){case"link":return(0,f.jsx)(F,{item:n});case"category":return(0,f.jsx)(v,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function N(e){let{className:n}=e;const r=(0,c.$S)();return(0,f.jsx)(w,{items:r.items,className:n})}function w(e){const{items:n,className:r}=e;if(!n)return(0,f.jsx)(N,{...e});const s=(0,c.d1)(n);return(0,f.jsx)("section",{className:(0,t.A)("row",r),children:s.map(((e,n)=>(0,f.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,f.jsx)(k,{item:e})},n)))})}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>i});var s=r(296540);const t={},c=s.createContext(t);function o(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);