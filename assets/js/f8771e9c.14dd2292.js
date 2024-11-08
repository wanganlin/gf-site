"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[26649],{288933:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>g,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"docs/\u5f00\u53d1\u5de5\u5177/\u4ee3\u7801\u751f\u6210-gen/\u4ee3\u7801\u751f\u6210-gen","title":"\u4ee3\u7801\u751f\u6210-gen(\ud83d\udd25\u91cd\u70b9\ud83d\udd25)","description":"\u4ecev2\u7248\u672c\u5f00\u59cb\uff0cCLI\u5de5\u5177\u7ed3\u5408GoFrame\u6846\u67b6\u6700\u65b0\u7248\u672c\uff0c\u4e3a\u5f00\u53d1\u8005\u63d0\u4f9b\u4ee3\u7801\u751f\u6210\u529f\u80fd\uff0c\u4ee5\u89c4\u8303\u5316\u9879\u76ee\u4ee3\u7801\u7f16\u5199\u548c\u7b80\u5316\u5f00\u53d1\u590d\u6742\u5ea6\u3002\u7279\u522b\u5728\u4f01\u4e1a\u7ea7\u548c\u56e2\u961f\u9879\u76ee\u4e2d\uff0cCLI\u5de5\u5177\u80fd\u660e\u663e\u63d0\u5347\u5f00\u53d1\u6548\u7387\uff0c\u4f7f\u5f97\u5f00\u53d1\u8005\u4e13\u6ce8\u4e8e\u4e1a\u52a1\u903b\u8f91\u3002","source":"@site/docs/docs/\u5f00\u53d1\u5de5\u5177/\u4ee3\u7801\u751f\u6210-gen/\u4ee3\u7801\u751f\u6210-gen.md","sourceDirName":"docs/\u5f00\u53d1\u5de5\u5177/\u4ee3\u7801\u751f\u6210-gen","slug":"/docs/cli/gen","permalink":"/docs/cli/gen","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u5f00\u53d1\u5de5\u5177/\u4ee3\u7801\u751f\u6210-gen/\u4ee3\u7801\u751f\u6210-gen.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731055597000,"sidebarPosition":5,"frontMatter":{"slug":"/docs/cli/gen","title":"\u4ee3\u7801\u751f\u6210-gen(\ud83d\udd25\u91cd\u70b9\ud83d\udd25)","sidebar_position":5,"hide_title":true,"keywords":["\u4ee3\u7801\u751f\u6210","GoFrame","CLI\u5de5\u5177","\u9879\u76ee\u5f00\u53d1","\u4f01\u4e1a\u7ea7\u9879\u76ee","\u4ee3\u7801\u89c4\u8303","\u56e2\u961f\u534f\u4f5c","\u5f00\u53d1\u6548\u7387","ORM\u6a21\u578b","protobuf\u6587\u4ef6"],"description":"\u4ecev2\u7248\u672c\u5f00\u59cb\uff0cCLI\u5de5\u5177\u7ed3\u5408GoFrame\u6846\u67b6\u6700\u65b0\u7248\u672c\uff0c\u4e3a\u5f00\u53d1\u8005\u63d0\u4f9b\u4ee3\u7801\u751f\u6210\u529f\u80fd\uff0c\u4ee5\u89c4\u8303\u5316\u9879\u76ee\u4ee3\u7801\u7f16\u5199\u548c\u7b80\u5316\u5f00\u53d1\u590d\u6742\u5ea6\u3002\u7279\u522b\u5728\u4f01\u4e1a\u7ea7\u548c\u56e2\u961f\u9879\u76ee\u4e2d\uff0cCLI\u5de5\u5177\u80fd\u660e\u663e\u63d0\u5347\u5f00\u53d1\u6548\u7387\uff0c\u4f7f\u5f97\u5f00\u53d1\u8005\u4e13\u6ce8\u4e8e\u4e1a\u52a1\u903b\u8f91\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u4ea4\u53c9\u7f16\u8bd1-build","permalink":"/docs/cli/build"},"next":{"title":"\u63a5\u53e3\u89c4\u8303-gen ctrl","permalink":"/docs/cli/gen-ctrl"}}');var o=t(474848),s=t(28453),i=t(103514);const c={slug:"/docs/cli/gen",title:"\u4ee3\u7801\u751f\u6210-gen(\ud83d\udd25\u91cd\u70b9\ud83d\udd25)",sidebar_position:5,hide_title:!0,keywords:["\u4ee3\u7801\u751f\u6210","GoFrame","CLI\u5de5\u5177","\u9879\u76ee\u5f00\u53d1","\u4f01\u4e1a\u7ea7\u9879\u76ee","\u4ee3\u7801\u89c4\u8303","\u56e2\u961f\u534f\u4f5c","\u5f00\u53d1\u6548\u7387","ORM\u6a21\u578b","protobuf\u6587\u4ef6"],description:"\u4ecev2\u7248\u672c\u5f00\u59cb\uff0cCLI\u5de5\u5177\u7ed3\u5408GoFrame\u6846\u67b6\u6700\u65b0\u7248\u672c\uff0c\u4e3a\u5f00\u53d1\u8005\u63d0\u4f9b\u4ee3\u7801\u751f\u6210\u529f\u80fd\uff0c\u4ee5\u89c4\u8303\u5316\u9879\u76ee\u4ee3\u7801\u7f16\u5199\u548c\u7b80\u5316\u5f00\u53d1\u590d\u6742\u5ea6\u3002\u7279\u522b\u5728\u4f01\u4e1a\u7ea7\u548c\u56e2\u961f\u9879\u76ee\u4e2d\uff0cCLI\u5de5\u5177\u80fd\u660e\u663e\u63d0\u5347\u5f00\u53d1\u6548\u7387\uff0c\u4f7f\u5f97\u5f00\u53d1\u8005\u4e13\u6ce8\u4e8e\u4e1a\u52a1\u903b\u8f91\u3002"},l=void 0,a={},d=[{value:"\u91cd\u8981\u8bf4\u660e\ud83d\udd25",id:"\u91cd\u8981\u8bf4\u660e",level:2},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["\u4ece ",(0,o.jsx)(n.code,{children:"v2"})," \u7248\u672c\u5f00\u59cb\uff0c\u6700\u65b0\u7684 ",(0,o.jsx)(n.code,{children:"CLI"})," \u5de5\u5177\u7248\u672c\u529f\u80fd\u4f1a\u968f\u7740 ",(0,o.jsx)(n.code,{children:"GoFrame"})," \u6846\u67b6\u7684\u6700\u65b0\u7248\u672c\u7f16\u8bd1\uff0c\u5f15\u5165\u5982\u679c\u672c\u5730\u7684 ",(0,o.jsx)(n.code,{children:"CLI"})," \u5de5\u5177\u81ea\u52a8\u5316\u751f\u6210\u7684\u4ee3\u7801\u4e0e\u9879\u76ee\u7684 ",(0,o.jsx)(n.code,{children:"GoFrame"})," \u6846\u67b6\u7248\u672c\u51fa\u73b0\u517c\u5bb9\u6027\u95ee\u9898\u65f6\uff0c\u5efa\u8bae\u5347\u7ea7\u9879\u76ee\u6846\u67b6\u7248\u672c\uff0c\u6216\u8005\u81ea\u5b9a\u4e49\u5b89\u88c5\u65e7\u7248\u672c\u7684 ",(0,o.jsx)(n.code,{children:"CLI"})," \u5de5\u5177\u3002\u65e7\u7248\u672cCLI\u5de5\u5177\u5b89\u88c5\u65b9\u5f0f\u53c2\u8003\u4ed3\u5e93\u9996\u9875\u4ecb\u7ecd\uff1a ",(0,o.jsx)(n.a,{href:"https://github.com/gogf/gf-cli",children:"https://github.com/gogf/gf-cli"})]})}),"\n",(0,o.jsx)(n.h2,{id:"\u91cd\u8981\u8bf4\u660e",children:"\u91cd\u8981\u8bf4\u660e\ud83d\udd25"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"CLI"})," \u5de5\u5177\u63d0\u4f9b\u7684\u4ee3\u7801\u751f\u6210\u529f\u80fd\uff0c\u76ee\u7684\u662f ",(0,o.jsx)(n.strong,{children:"\u89c4\u8303\u5316\u9879\u76ee\u4ee3\u7801\u7f16\u5199"}),"\u3001 ",(0,o.jsx)(n.strong,{children:"\u7b80\u5316\u9879\u76ee\u5f00\u53d1\u590d\u6742\u5ea6"}),"\uff0c ",(0,o.jsx)(n.strong,{children:"\u8ba9\u5f00\u53d1\u8005\u80fd\u591f\u628a\u7cbe\u529b\u805a\u7126\u4e8e\u4e1a\u52a1\u903b\u8f91\u672c\u8eab"}),"\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"CLI"})," \u5de5\u5177\u672c\u8eab\u4f1a\u9700\u8981\u6709\u4e00\u5b9a\u524d\u7f6e\u7684\u5b66\u4e60\u548c\u7406\u89e3\u6210\u672c\uff08\u5c3d\u91cf\u7406\u89e3\u4e3a\u4ec0\u4e48\uff09\uff0c\u4f46\u5728\u719f\u7ec3\u4e4b\u540e\uff0c\u5927\u5bb6\u7684\u5f00\u53d1\u5de5\u4f5c\u5c06\u4f1a\u4e8b\u534a\u529f\u500d\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"CLI"})," \u5de5\u5177\u7684\u4ee3\u7801\u751f\u6210\u529f\u80fd\u9488\u5bf9\u4e8e\u4f01\u4e1a\u7ea7\u9879\u76ee\u3001\u591a\u6210\u5458\u7684\u56e2\u961f\u6027\u9879\u76ee\u4e2d\u6536\u76ca\u4f1a\u975e\u5e38\u9ad8\u3002\u4f46\u9488\u5bf9\u4e8e\u5355\u4eba\u5c0f\u578b\u9879\u76ee\uff0c\u5f00\u53d1\u8005\u53ef\u6839\u636e\u4e2a\u4eba\u610f\u613f\u8bc4\u4f30\u662f\u5426\u9009\u62e9\u4f7f\u7528\u3002 ",(0,o.jsx)(n.code,{children:"GoFrame"})," \u6846\u67b6\u672c\u8eab\u53ea\u662f\u63d0\u4f9b\u4e86\u57fa\u7840\u7ec4\u4ef6\uff0c\u91c7\u7528\u4e86\u7ec4\u4ef6\u5316\u7684\u7075\u6d3b\u8bbe\u8ba1\uff0c\u4e0d\u4f1a\u5bf9\u9879\u76ee\u4ee3\u7801\u505a\u4e25\u683c\u7684\u8981\u6c42\uff1b\u4f46 ",(0,o.jsx)(n.code,{children:"CLI"})," \u5de5\u5177\u4f1a\u6709\u4e00\u5b9a\u7684\u6761\u6846\u9650\u5236\uff0c\u76ee\u7684\u662f\u4f7f\u5f97\u56e2\u961f\u4e2d\u6bcf\u4e2a\u6210\u5458\u7684\u6b65\u8c03\u548c\u98ce\u683c\u4e00\u81f4\uff0c\u4e0d\u4f1a\u4f7f\u5f97\u5f00\u53d1\u8005\u7684\u4ee3\u7801\u7f16\u5199\u8fc7\u4e8e\u968f\u610f\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"\u4f7f\u7528\u65b9\u5f0f",children:"\u4f7f\u7528\u65b9\u5f0f"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'$ gf gen -h\nUSAGE\n    gf gen COMMAND [OPTION]\n\nCOMMAND\n    ctrl        parse api definitions to generate controller/sdk go files\n    dao         automatically generate go files for dao/do/entity\n    enums       parse go files in current project and generate enums go file\n    pb          parse proto files and generate protobuf go files\n    pbentity    generate entity message files in protobuf3 format\n    service     parse struct and associated functions from packages to generate service go file\n\nDESCRIPTION\n    The "gen" command is designed for multiple generating purposes.\n    It\'s currently supporting generating go files for ORM models, protobuf and protobuf entity files.\n    Please use "gf gen dao -h" for specified type help.\n'})}),"\n",(0,o.jsx)(n.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n","\n",(0,o.jsx)(i.A,{})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},103514:(e,n,t)=>{t.d(n,{A:()=>j});t(296540);var r=t(634164),o=t(944718),s=t(328774),i=t(853465),c=t(316654),l=t(721312),a=t(751107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=t(474848);function g(e){let{href:n,children:t}=e;return(0,u.jsx)(s.A,{href:n,className:(0,r.A)("card padding--lg",d.cardContainer),children:t})}function f(e){let{href:n,icon:t,title:o,description:s}=e;return(0,u.jsxs)(g,{href:n,children:[(0,u.jsxs)(a.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:o,children:[t," ",o]}),s&&(0,u.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:s,children:s})]})}function h(e){let{item:n}=e;const t=(0,o.Nr)(n),r=function(){const{selectMessage:e}=(0,i.W)();return n=>e(n,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return t?(0,u.jsx)(f,{href:t,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??r(n.items.length)}):null}function p(e){let{item:n}=e;const t=(0,c.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.cC)(n.docId??void 0);return(0,u.jsx)(f,{href:n.href,icon:t,title:n.label,description:n.description??r?.description})}function m(e){let{item:n}=e;switch(n.type){case"link":return(0,u.jsx)(p,{item:n});case"category":return(0,u.jsx)(h,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function x(e){let{className:n}=e;const t=(0,o.$S)();return(0,u.jsx)(j,{items:t.items,className:n})}function j(e){const{items:n,className:t}=e;if(!n)return(0,u.jsx)(x,{...e});const s=(0,o.d1)(n);return(0,u.jsx)("section",{className:(0,r.A)("row",t),children:s.map(((e,n)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(m,{item:e})},n)))})}},853465:(e,n,t)=>{t.d(n,{W:()=>a});var r=t(296540),o=t(144586);const s=["zero","one","two","few","many","other"];function i(e){return s.filter((n=>e.includes(n)))}const c={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,r.useMemo)((()=>{try{return function(e){const n=new Intl.PluralRules(e);return{locale:e,pluralForms:i(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${n.message}\n`),c}}),[e])}function a(){const e=l();return{selectMessage:(n,t)=>function(e,n,t){const r=e.split("|");if(1===r.length)return r[0];r.length>t.pluralForms.length&&console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=t.select(n),s=t.pluralForms.indexOf(o);return r[Math.min(s,r.length-1)]}(t,n,e)}}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var r=t(296540);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);