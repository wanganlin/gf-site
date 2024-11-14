"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["45630"],{497904:function(e,t,r){r.r(t),r.d(t,{metadata:()=>s,contentTitle:()=>i,default:()=>h,assets:()=>c,toc:()=>a,frontMatter:()=>d});var s=JSON.parse('{"id":"docs/WEB\u670D\u52A1\u5F00\u53D1/\u8DEF\u7531\u7BA1\u7406/\u8DEF\u7531\u7BA1\u7406-\u8DEF\u7531\u6CE8\u518C/\u8DEF\u7531\u6CE8\u518C-\u89C4\u8303\u8DEF\u7531/\u89C4\u8303\u8DEF\u7531-\u5E38\u89C1\u95EE\u9898","title":"\u89C4\u8303\u8DEF\u7531-\u5E38\u89C1\u95EE\u9898","description":"\u5728\u4F7F\u7528GoFrame\u6846\u67B6\u7684\u89C4\u8303\u8DEF\u7531\u4E0B\uFF0C\u5982\u4F55\u652F\u6301\u540C\u4E00\u63A5\u53E3\u7684\u591A\u79CDHTTP Method\u63D0\u4EA4\u65B9\u5F0F\u3002\u5728\u8BBE\u8BA1RESTful\u63A5\u53E3\u65F6\uFF0C\u6BCF\u4E2AAPI\u5E94\u6709\u660E\u786E\u7684HTTP Method\u5BF9\u5E94\uFF0C\u5982\u521B\u5EFA\u7528\u6237\u3001\u83B7\u53D6\u7528\u6237\u5217\u8868\u7B49\u3002\u5982\u679C\u9700\u8981\u4E00\u4E2A\u63A5\u53E3\u652F\u6301\u591A\u4E2AHTTP Method\uFF0C\u53EF\u4EE5\u901A\u8FC7Meta\u6807\u7B7E\u8BBE\u7F6E\u3002\u6B64\u5916\uFF0C\u4ECB\u7ECD\u5982\u4F55\u4F7F\u7528\u7C7B\u578B\u522B\u540D\u8BA9Response\u7ED3\u6784\u4F53\u7684Data\u5B57\u6BB5\u8FD4\u56DE\u6570\u7EC4\u5F62\u5F0F\u3002","source":"@site/versioned_docs/version-2.7.x/docs/WEB\u670D\u52A1\u5F00\u53D1/\u8DEF\u7531\u7BA1\u7406/\u8DEF\u7531\u7BA1\u7406-\u8DEF\u7531\u6CE8\u518C/\u8DEF\u7531\u6CE8\u518C-\u89C4\u8303\u8DEF\u7531/\u89C4\u8303\u8DEF\u7531-\u5E38\u89C1\u95EE\u9898.md","sourceDirName":"docs/WEB\u670D\u52A1\u5F00\u53D1/\u8DEF\u7531\u7BA1\u7406/\u8DEF\u7531\u7BA1\u7406-\u8DEF\u7531\u6CE8\u518C/\u8DEF\u7531\u6CE8\u518C-\u89C4\u8303\u8DEF\u7531","slug":"/docs/web/router-registering-strict-router-faq","permalink":"/2.7.x/docs/web/router-registering-strict-router-faq","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/WEB\u670D\u52A1\u5F00\u53D1/\u8DEF\u7531\u7BA1\u7406/\u8DEF\u7531\u7BA1\u7406-\u8DEF\u7531\u6CE8\u518C/\u8DEF\u7531\u6CE8\u518C-\u89C4\u8303\u8DEF\u7531/\u89C4\u8303\u8DEF\u7531-\u5E38\u89C1\u95EE\u9898.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":2,"frontMatter":{"slug":"/docs/web/router-registering-strict-router-faq","title":"\u89C4\u8303\u8DEF\u7531-\u5E38\u89C1\u95EE\u9898","sidebar_position":2,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","\u89C4\u8303\u8DEF\u7531","HTTP Method","RESTful\u63A5\u53E3","API\u8BBE\u8BA1","\u7528\u6237\u63A5\u53E3","CURD\u64CD\u4F5C","Meta\u6807\u7B7E","Response\u7ED3\u6784\u4F53"],"description":"\u5728\u4F7F\u7528GoFrame\u6846\u67B6\u7684\u89C4\u8303\u8DEF\u7531\u4E0B\uFF0C\u5982\u4F55\u652F\u6301\u540C\u4E00\u63A5\u53E3\u7684\u591A\u79CDHTTP Method\u63D0\u4EA4\u65B9\u5F0F\u3002\u5728\u8BBE\u8BA1RESTful\u63A5\u53E3\u65F6\uFF0C\u6BCF\u4E2AAPI\u5E94\u6709\u660E\u786E\u7684HTTP Method\u5BF9\u5E94\uFF0C\u5982\u521B\u5EFA\u7528\u6237\u3001\u83B7\u53D6\u7528\u6237\u5217\u8868\u7B49\u3002\u5982\u679C\u9700\u8981\u4E00\u4E2A\u63A5\u53E3\u652F\u6301\u591A\u4E2AHTTP Method\uFF0C\u53EF\u4EE5\u901A\u8FC7Meta\u6807\u7B7E\u8BBE\u7F6E\u3002\u6B64\u5916\uFF0C\u4ECB\u7ECD\u5982\u4F55\u4F7F\u7528\u7C7B\u578B\u522B\u540D\u8BA9Response\u7ED3\u6784\u4F53\u7684Data\u5B57\u6BB5\u8FD4\u56DE\u6570\u7EC4\u5F62\u5F0F\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u89C4\u8303\u8DEF\u7531-\u5982\u4F55\u4F7F\u7528","permalink":"/2.7.x/docs/web/router-registering-strict-router-usage"},"next":{"title":"\u8DEF\u7531\u7BA1\u7406-\u4E2D\u95F4\u4EF6/\u62E6\u622A\u5668","permalink":"/2.7.x/docs/web/router-middleware"}}'),o=r("785893"),n=r("250065");let d={slug:"/docs/web/router-registering-strict-router-faq",title:"\u89C4\u8303\u8DEF\u7531-\u5E38\u89C1\u95EE\u9898",sidebar_position:2,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","\u89C4\u8303\u8DEF\u7531","HTTP Method","RESTful\u63A5\u53E3","API\u8BBE\u8BA1","\u7528\u6237\u63A5\u53E3","CURD\u64CD\u4F5C","Meta\u6807\u7B7E","Response\u7ED3\u6784\u4F53"],description:"\u5728\u4F7F\u7528GoFrame\u6846\u67B6\u7684\u89C4\u8303\u8DEF\u7531\u4E0B\uFF0C\u5982\u4F55\u652F\u6301\u540C\u4E00\u63A5\u53E3\u7684\u591A\u79CDHTTP Method\u63D0\u4EA4\u65B9\u5F0F\u3002\u5728\u8BBE\u8BA1RESTful\u63A5\u53E3\u65F6\uFF0C\u6BCF\u4E2AAPI\u5E94\u6709\u660E\u786E\u7684HTTP Method\u5BF9\u5E94\uFF0C\u5982\u521B\u5EFA\u7528\u6237\u3001\u83B7\u53D6\u7528\u6237\u5217\u8868\u7B49\u3002\u5982\u679C\u9700\u8981\u4E00\u4E2A\u63A5\u53E3\u652F\u6301\u591A\u4E2AHTTP Method\uFF0C\u53EF\u4EE5\u901A\u8FC7Meta\u6807\u7B7E\u8BBE\u7F6E\u3002\u6B64\u5916\uFF0C\u4ECB\u7ECD\u5982\u4F55\u4F7F\u7528\u7C7B\u578B\u522B\u540D\u8BA9Response\u7ED3\u6784\u4F53\u7684Data\u5B57\u6BB5\u8FD4\u56DE\u6570\u7EC4\u5F62\u5F0F\u3002"},i=void 0,c={},a=[{value:"\u5728\u89C4\u8303\u8DEF\u7531\u4E0B\uFF0C\u540C\u4E00\u63A5\u53E3\u5982\u4F55\u652F\u6301\u591A\u79CD <code>HTTP Method</code> \u63D0\u4EA4\u65B9\u5F0F",id:"\u5728\u89C4\u8303\u8DEF\u7531\u4E0B\u540C\u4E00\u63A5\u53E3\u5982\u4F55\u652F\u6301\u591A\u79CD-http-method-\u63D0\u4EA4\u65B9\u5F0F",level:2},{value:"\u4F7F\u7528\u9ED8\u8BA4\u63D0\u4F9B\u7684 <code>Response</code> \u7ED3\u6784\u4F53\uFF0C\u5982\u4F55\u8BA9 <code>Data</code> \u5B57\u6BB5\u53EA\u8FD4\u56DE\u6570\u7EC4\u800C\u65E0\u9700\u6307\u5B9A\u540D\u79F0\u7684\u952E\u503C\u5BF9",id:"\u4F7F\u7528\u9ED8\u8BA4\u63D0\u4F9B\u7684-response-\u7ED3\u6784\u4F53\u5982\u4F55\u8BA9-data-\u5B57\u6BB5\u53EA\u8FD4\u56DE\u6570\u7EC4\u800C\u65E0\u9700\u6307\u5B9A\u540D\u79F0\u7684\u952E\u503C\u5BF9",level:2}];function l(e){let t={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.h2,{id:"\u5728\u89C4\u8303\u8DEF\u7531\u4E0B\u540C\u4E00\u63A5\u53E3\u5982\u4F55\u652F\u6301\u591A\u79CD-http-method-\u63D0\u4EA4\u65B9\u5F0F",children:["\u5728\u89C4\u8303\u8DEF\u7531\u4E0B\uFF0C\u540C\u4E00\u63A5\u53E3\u5982\u4F55\u652F\u6301\u591A\u79CD ",(0,o.jsx)(t.code,{children:"HTTP Method"})," \u63D0\u4EA4\u65B9\u5F0F"]}),"\n",(0,o.jsxs)(t.p,{children:["\u9996\u5148\uFF0C\u4E00\u4E2A\u63A5\u53E3\u5E94\u5F53\u53EA\u505A\u4E00\u4EF6\u4E8B\u60C5\uFF0C ",(0,o.jsx)(t.code,{children:"HTTP Method"})," \u662F\u6709\u610F\u4E49\u7684\uFF08\u4F8B\u5982 ",(0,o.jsx)(t.code,{children:"RESTful"})," \u63A5\u53E3\u98CE\u683C\u8BBE\u8BA1\uFF09\uFF0C\u4E00\u4E2A\u63A5\u53E3\u652F\u6301\u591A\u79CD ",(0,o.jsx)(t.code,{children:"HTTP Method"})," \u65B9\u5F0F\u901A\u5E38\u662F\u63A5\u53E3\u8BBE\u8BA1\u4E0D\u5408\u7406\uFF0C\u5EFA\u8BAE\u91CD\u65B0\u5BA1\u89C6\u63A5\u53E3\u8BBE\u8BA1\u3002"]}),"\n",(0,o.jsxs)(t.p,{children:["\u901A\u5E38\u662F\u4E0D\u5B58\u5728\u4E00\u4E2A ",(0,o.jsx)(t.code,{children:"API"})," \u9700\u8981\u7ED1\u5B9A\u591A\u4E2A ",(0,o.jsx)(t.code,{children:"HTTP Method"})," \u7684\u573A\u666F\u7684\u3002\u4F8B\u5982\uFF0C\u62FF\u7528\u6237\u63A5\u53E3\u6765\u8BB2\uFF0C\u4E00\u4E2A ",(0,o.jsx)(t.code,{children:"CURD"})," \u63A5\u53E3\u5728 ",(0,o.jsx)(t.code,{children:"RESTful"})," \u5B9E\u73B0\u5E94\u5F53\u6709 ",(0,o.jsx)(t.code,{children:"4-5"})," \u4E2A ",(0,o.jsx)(t.code,{children:"API"})," \u5B9A\u4E49\uFF0C\u5B9E\u73B0\u4E0D\u540C\u7684\u4E1A\u52A1\u903B\u8F91\u3002\u90A3\u4E48\u53EF\u80FD\u5B58\u5728\u4EE5\u4E0B ",(0,o.jsx)(t.code,{children:"API"})," \u5B9A\u4E49\u7684 ",(0,o.jsx)(t.code,{children:"RESTful"})," \u63A5\u53E3\uFF1A"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"\u63A5\u53E3\u540D\u79F0    Method    Path\n\u521B\u5EFA\u7528\u6237    PUT       /user\n\u7528\u6237\u5217\u8868    GET       /user\n\u7528\u6237\u8BE6\u60C5    GET       /user/{uid}\n\u4FEE\u6539\u7528\u6237    POST      /user/{uid}\n\u5220\u9664\u7528\u6237    DELETE    /user/{uid}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["\u5982\u679C\u786E\u5B9E\u5B58\u5728\u4E00\u4E2A\u63A5\u53E3\u652F\u6301\u591A\u4E2A ",(0,o.jsx)(t.code,{children:"HTTP Method"})," \u7684\u573A\u666F\uFF0C\u90A3\u4E48\u53EF\u4EE5\u901A\u8FC7\u5728 ",(0,o.jsx)(t.code,{children:"Meta"})," \u6807\u7B7E\u4E2D\u7684 ",(0,o.jsx)(t.code,{children:"method"})," \u5C5E\u6027\u4E2D\u4F7F\u7528\u82F1\u6587 ",(0,o.jsx)(t.code,{children:","})," \u53F7\u5206\u9694\u5404\u4E2A ",(0,o.jsx)(t.code,{children:"HTTP Method"})," \u5373\u53EF\uFF0C\u4F8B\u5982\uFF1A"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-go",children:'type SaveReq struct {\n    g.Meta `path:"/user/{uid}" method:"put,post" summary:"\u4FDD\u5B58\u7528\u6237" tags:"\u7528\u6237\u7BA1\u7406"`\n    Uid    int64  `dc:"\u7528\u6237ID"`\n    Name   string `dc:"\u7528\u6237\u540D"`\n    // ...\n}\n'})}),"\n",(0,o.jsxs)(t.h2,{id:"\u4F7F\u7528\u9ED8\u8BA4\u63D0\u4F9B\u7684-response-\u7ED3\u6784\u4F53\u5982\u4F55\u8BA9-data-\u5B57\u6BB5\u53EA\u8FD4\u56DE\u6570\u7EC4\u800C\u65E0\u9700\u6307\u5B9A\u540D\u79F0\u7684\u952E\u503C\u5BF9",children:["\u4F7F\u7528\u9ED8\u8BA4\u63D0\u4F9B\u7684 ",(0,o.jsx)(t.code,{children:"Response"})," \u7ED3\u6784\u4F53\uFF0C\u5982\u4F55\u8BA9 ",(0,o.jsx)(t.code,{children:"Data"})," \u5B57\u6BB5\u53EA\u8FD4\u56DE\u6570\u7EC4\u800C\u65E0\u9700\u6307\u5B9A\u540D\u79F0\u7684\u952E\u503C\u5BF9"]}),"\n",(0,o.jsx)(t.p,{children:"\u4F7F\u7528\u7C7B\u578B\u522B\u540D\u5373\u53EF\u3002"}),"\n",(0,o.jsxs)(t.p,{children:["\u6E90\u7801\u5730\u5740\uFF1A ",(0,o.jsx)(t.a,{href:"https://github.com/gogf/gf/tree/master/example/httpserver/response-with-json-array",children:"gf/example/httpserver/response-with-json-array"})]}),"\n",(0,o.jsx)(t.p,{children:"\u7ED3\u679C\u793A\u4F8B\uFF1A"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:r(59303).Z+"",width:"1576",height:"286"})})]})}function h(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},59303:function(e,t,r){r.d(t,{Z:function(){return s}});let s=r.p+"assets/images/ad6f068521ad869d5b9c9f4be3f44681-6644d866c4efa37e4be003b0a660b0ea.png"},250065:function(e,t,r){r.d(t,{Z:function(){return i},a:function(){return d}});var s=r(667294);let o={},n=s.createContext(o);function d(e){let t=s.useContext(n);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);