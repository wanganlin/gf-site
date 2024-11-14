"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["34458"],{379922:function(e,n,d){d.r(n),d.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>h,assets:()=>o,toc:()=>t,frontMatter:()=>c});var i=JSON.parse('{"id":"docs/\u6846\u67B6\u8BBE\u8BA1/\u5168\u94FE\u8DEF\u8DDF\u8E2A\u8BBE\u8BA1","title":"\u5168\u94FE\u8DEF\u8DDF\u8E2A\u8BBE\u8BA1","description":"\u94FE\u8DEF\u8DDF\u8E2A\u662F\u53EF\u89C2\u6D4B\u6027\u7684\u91CD\u8981\u6307\u6807\u4E4B\u4E00\uFF0CGoFrame\u6846\u67B6\u5728\u652F\u6301OpenTelemetry\u6807\u51C6\u65B9\u9762\u5177\u6709\u4F18\u52BF\u3002\u672C\u6587\u63A2\u8BA8\u9879\u76EE\u5B9E\u8DF5\u4E2D\u7684\u94FE\u8DEF\u8DDF\u8E2A\u75DB\u70B9\uFF0C\u4EE5\u53CA\u5982\u4F55\u901A\u8FC7GoFrame\u6846\u67B6\u5B9E\u73B0\u5168\u94FE\u8DEF\u8DDF\u8E2A\uFF0C\u786E\u4FDD\u6807\u51C6\u843D\u5730\u548C\u65E5\u5FD7\u652F\u6301\u3002\u8BE5\u6846\u67B6\u7684\u7EDF\u4E00\u7EC4\u4EF6\u548C\u89C4\u8303\u68C0\u6D4B\u5DE5\u5177\u6709\u52A9\u4E8E\u63D0\u5347\u4E1A\u52A1\u9879\u76EE\u7684\u7A33\u5B9A\u6027\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u6846\u67B6\u8BBE\u8BA1/\u5168\u94FE\u8DEF\u8DDF\u8E2A\u8BBE\u8BA1.md","sourceDirName":"docs/\u6846\u67B6\u8BBE\u8BA1","slug":"/docs/design/tracing","permalink":"/2.7.x/docs/design/tracing","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u6846\u67B6\u8BBE\u8BA1/\u5168\u94FE\u8DEF\u8DDF\u8E2A\u8BBE\u8BA1.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":4,"frontMatter":{"slug":"/docs/design/tracing","title":"\u5168\u94FE\u8DEF\u8DDF\u8E2A\u8BBE\u8BA1","sidebar_position":4,"hide_title":true,"keywords":["GoFrame","\u5168\u94FE\u8DEF\u8DDF\u8E2A","OpenTelemetry","\u53EF\u89C2\u6D4B\u6027","OTEL","Golang","\u94FE\u8DEF\u4F20\u9012","\u65E5\u5FD7\u652F\u6301","\u6846\u67B6","\u7B2C\u4E09\u65B9\u7EC4\u4EF6"],"description":"\u94FE\u8DEF\u8DDF\u8E2A\u662F\u53EF\u89C2\u6D4B\u6027\u7684\u91CD\u8981\u6307\u6807\u4E4B\u4E00\uFF0CGoFrame\u6846\u67B6\u5728\u652F\u6301OpenTelemetry\u6807\u51C6\u65B9\u9762\u5177\u6709\u4F18\u52BF\u3002\u672C\u6587\u63A2\u8BA8\u9879\u76EE\u5B9E\u8DF5\u4E2D\u7684\u94FE\u8DEF\u8DDF\u8E2A\u75DB\u70B9\uFF0C\u4EE5\u53CA\u5982\u4F55\u901A\u8FC7GoFrame\u6846\u67B6\u5B9E\u73B0\u5168\u94FE\u8DEF\u8DDF\u8E2A\uFF0C\u786E\u4FDD\u6807\u51C6\u843D\u5730\u548C\u65E5\u5FD7\u652F\u6301\u3002\u8BE5\u6846\u67B6\u7684\u7EDF\u4E00\u7EC4\u4EF6\u548C\u89C4\u8303\u68C0\u6D4B\u5DE5\u5177\u6709\u52A9\u4E8E\u63D0\u5347\u4E1A\u52A1\u9879\u76EE\u7684\u7A33\u5B9A\u6027\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u5FAE\u670D\u52A1\u5927\u4ED3\u7BA1\u7406\u6A21\u5F0F","permalink":"/2.7.x/docs/design/project-mono-repo"},"next":{"title":"\u5168\u9519\u8BEF\u5806\u6808\u8BBE\u8BA1","permalink":"/2.7.x/docs/design/error-stack"}}'),r=d("785893"),s=d("250065");let c={slug:"/docs/design/tracing",title:"\u5168\u94FE\u8DEF\u8DDF\u8E2A\u8BBE\u8BA1",sidebar_position:4,hide_title:!0,keywords:["GoFrame","\u5168\u94FE\u8DEF\u8DDF\u8E2A","OpenTelemetry","\u53EF\u89C2\u6D4B\u6027","OTEL","Golang","\u94FE\u8DEF\u4F20\u9012","\u65E5\u5FD7\u652F\u6301","\u6846\u67B6","\u7B2C\u4E09\u65B9\u7EC4\u4EF6"],description:"\u94FE\u8DEF\u8DDF\u8E2A\u662F\u53EF\u89C2\u6D4B\u6027\u7684\u91CD\u8981\u6307\u6807\u4E4B\u4E00\uFF0CGoFrame\u6846\u67B6\u5728\u652F\u6301OpenTelemetry\u6807\u51C6\u65B9\u9762\u5177\u6709\u4F18\u52BF\u3002\u672C\u6587\u63A2\u8BA8\u9879\u76EE\u5B9E\u8DF5\u4E2D\u7684\u94FE\u8DEF\u8DDF\u8E2A\u75DB\u70B9\uFF0C\u4EE5\u53CA\u5982\u4F55\u901A\u8FC7GoFrame\u6846\u67B6\u5B9E\u73B0\u5168\u94FE\u8DEF\u8DDF\u8E2A\uFF0C\u786E\u4FDD\u6807\u51C6\u843D\u5730\u548C\u65E5\u5FD7\u652F\u6301\u3002\u8BE5\u6846\u67B6\u7684\u7EDF\u4E00\u7EC4\u4EF6\u548C\u89C4\u8303\u68C0\u6D4B\u5DE5\u5177\u6709\u52A9\u4E8E\u63D0\u5347\u4E1A\u52A1\u9879\u76EE\u7684\u7A33\u5B9A\u6027\u3002"},l=void 0,o={},t=[{value:"\u4E00\u3001\u9879\u76EE\u5B9E\u8DF5\u7684\u75DB\u70B9",id:"\u4E00\u9879\u76EE\u5B9E\u8DF5\u7684\u75DB\u70B9",level:2},{value:"1\u3001\u7EC4\u4EF6\u6CA1\u6709\u4E25\u683C\u6267\u884C\u6807\u51C6",id:"1\u7EC4\u4EF6\u6CA1\u6709\u4E25\u683C\u6267\u884C\u6807\u51C6",level:3},{value:"2\u3001\u7B2C\u4E09\u65B9\u7EC4\u4EF6\u6742\u4E71\u65E0\u7AE0",id:"2\u7B2C\u4E09\u65B9\u7EC4\u4EF6\u6742\u4E71\u65E0\u7AE0",level:3},{value:"3\u3001\u4E1A\u52A1\u903B\u8F91\u6613\u4E22\u5931\u94FE\u8DEF",id:"3\u4E1A\u52A1\u903B\u8F91\u6613\u4E22\u5931\u94FE\u8DEF",level:3},{value:"\u4E8C\u3001\u6846\u67B6\u5168\u94FE\u8DEF\u8DDF\u8E2A",id:"\u4E8C\u6846\u67B6\u5168\u94FE\u8DEF\u8DDF\u8E2A",level:2},{value:"1\u3001\u7EDF\u4E00\u6846\u67B6",id:"1\u7EDF\u4E00\u6846\u67B6",level:3},{value:"2\u3001\u6807\u51C6\u843D\u5730",id:"2\u6807\u51C6\u843D\u5730",level:3},{value:"3\u3001\u65E5\u5FD7\u652F\u6301",id:"3\u65E5\u5FD7\u652F\u6301",level:3},{value:"4\u3001\u89C4\u8303\u68C0\u6D4B\u5DE5\u5177",id:"4\u89C4\u8303\u68C0\u6D4B\u5DE5\u5177",level:3},{value:"5\u3001\u94FE\u8DEF\u4F20\u9012\u652F\u6301",id:"5\u94FE\u8DEF\u4F20\u9012\u652F\u6301",level:3}];function a(e){let n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u53EF\u89C2\u6D4B\u6027\u662F\u5F88\u91CD\u8981\u7684\uFF0C\u76EE\u524D\u5DF2\u7ECF\u6709\u6BD4\u8F83\u4E0D\u9519\u7684 ",(0,r.jsx)(n.code,{children:"OpenTelemetry"})," \u6807\u51C6\uFF0C\u5404\u4E2A\u7B2C\u4E09\u65B9\u7EC4\u4EF6\u4EE5\u53CA\u5382\u5546\u90FD\u6309\u7167\u8FD9\u5957\u6807\u51C6\u5E93\u6765\u66B4\u9732\u548C\u5BF9\u63A5\u89C2\u6D4B\u6570\u636E\u5C06\u4F1A\u66F4\u52A0\u7B80\u4FBF\u3002\u6211\u4EEC\u672C\u6B21\u804A\u5230\u7684\uFF0C\u662F\u94FE\u8DEF\u8DDF\u8E2A\uFF0C\u5B83\u662F\u53EF\u89C2\u6D4B\u6027\u4E2D\u5F88\u91CD\u8981\u7684\u4E00\u9879\u6307\u6807\u3002"]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"GoFrame"})," \u6846\u67B6\u5177\u6709\u5F88\u9AD8\u7684\u524D\u77BB\u6027\uFF0C\u5728 ",(0,r.jsx)(n.code,{children:"OpenTelemetry"})," \u6807\u51C6\u8349\u7A3F\u9636\u6BB5\u4FBF\u5F00\u59CB\u6301\u7EED\u5173\u6CE8\uFF0C\u5E76\u5728\u53D1\u5E03 ",(0,r.jsx)(n.code,{children:"OTEL"})," \u6807\u51C6\u53D1\u5E03\u4E86 ",(0,r.jsx)(n.code,{children:"alpha"})," \u7248\u672C\u65F6\uFF0C\u6846\u67B6\u4FBF\u5F00\u59CB\u652F\u6301\u3002\u76EE\u524D ",(0,r.jsx)(n.code,{children:"OTEL"})," \u7684 ",(0,r.jsx)(n.code,{children:"Golang"})," \u5B9E\u73B0\u5DF2\u7ECF\u7A33\u5B9A\u3002 ",(0,r.jsx)(n.code,{children:"GoFrame"}),' \u662F\u76EE\u524D\u4F17\u591A"\u6846\u67B6"\u4E2D\u5BF9 ',(0,r.jsx)(n.code,{children:"OTEL"})," \u6807\u51C6\u53CA\u5B9E\u73B0\u652F\u6301\u5F97\u6700\u597D\u7684\u6846\u67B6\uFF0C\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"GoFrame"})," \u6846\u67B6\u5373\u9690\u5F0F\u81EA\u5E26\u94FE\u8DEF\u8DDF\u8E2A\u7279\u6027\u3002\u5E76\u4E14\u53EF\u89C2\u6D4B\u6027\u4E5F\u662F\u6846\u67B6\u672A\u6765\u53D1\u5C55\u7684\u91CD\u70B9\u7279\u6027\u3002"]})}),"\n",(0,r.jsx)(n.h2,{id:"\u4E00\u9879\u76EE\u5B9E\u8DF5\u7684\u75DB\u70B9",children:"\u4E00\u3001\u9879\u76EE\u5B9E\u8DF5\u7684\u75DB\u70B9"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u9879\u76EE\u5B9E\u8DF5\u4E2D\uFF0C\u5B9E\u73B0\u94FE\u8DEF\u8DDF\u8E2A\u5F80\u5F80\u4F1A\u9047\u5230\u4EE5\u4E0B\u5E38\u89C1\u7684\u75DB\u70B9\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"1\u7EC4\u4EF6\u6CA1\u6709\u4E25\u683C\u6267\u884C\u6807\u51C6",children:"1\u3001\u7EC4\u4EF6\u6CA1\u6709\u4E25\u683C\u6267\u884C\u6807\u51C6"}),"\n",(0,r.jsxs)(n.p,{children:["\u867D\u7136\u5DF2\u7ECF\u6709 ",(0,r.jsx)(n.code,{children:"OTEL"})," \u6807\u51C6\uFF0C\u4F46\u662F\u7B2C\u4E09\u65B9\u7EC4\u4EF6\u6CA1\u6709\u4E25\u683C\u6267\u884C\u3002\u4F8B\u5982\uFF0C\u5728\u65E5\u5FD7\u548C ",(0,r.jsx)(n.code,{children:"ORM"})," \u7EC4\u4EF6\u4E2D\uFF0C\u6CA1\u6709\u4E25\u683C\u7EA6\u675F\u4F20\u9012 ",(0,r.jsx)(n.code,{children:"ctx"})," \u4E0A\u4E0B\u6587\u53D8\u91CF\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"2\u7B2C\u4E09\u65B9\u7EC4\u4EF6\u6742\u4E71\u65E0\u7AE0",children:"2\u3001\u7B2C\u4E09\u65B9\u7EC4\u4EF6\u6742\u4E71\u65E0\u7AE0"}),"\n",(0,r.jsxs)(n.p,{children:["\u4E1A\u52A1\u9879\u76EE\u62FC\u51D1\u4F7F\u7528\u7684\u7B2C\u4E09\u65B9\u7EC4\u4EF6\u4F17\u591A\uFF0C\u6709\u7684\u7EC4\u4EF6\u6CA1\u6709\u5B9E\u73B0\u94FE\u8DEF\u8DDF\u8E2A\u652F\u6301\uFF0C\u66F4\u522B\u63D0 ",(0,r.jsx)(n.code,{children:"OTEL"})," \u6807\u51C6\u3002\u4F8B\u5982\uFF0C\u547D\u4EE4\u7BA1\u7406\u3001\u914D\u7F6E\u7BA1\u7406\u3001\u7F13\u5B58\u7BA1\u7406\u3001\u6570\u636E\u6821\u9A8C\u3001\u5B9A\u65F6\u4EFB\u52A1\u7B49\u7B49\u5E38\u7528\u7EC4\u4EF6\uFF0C\u8868\u8C61\u5C31\u662F\u6CA1\u6709\u63D0\u4F9B ",(0,r.jsx)(n.code,{children:"ctx"})," \u4E0A\u4E0B\u6587\u53D8\u91CF\u4F20\u9012\u3002\u5F53\u4F7F\u7528\u5230\u7684\u7EC4\u4EF6\u4E0D\u652F\u6301\u94FE\u8DEF\u4F20\u9012\u65F6\uFF0C\u94FE\u8DEF\u4FE1\u606F\u4FBF\u4E22\u5931\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"3\u4E1A\u52A1\u903B\u8F91\u6613\u4E22\u5931\u94FE\u8DEF",children:"3\u3001\u4E1A\u52A1\u903B\u8F91\u6613\u4E22\u5931\u94FE\u8DEF"}),"\n",(0,r.jsxs)(n.p,{children:["\u4E1A\u52A1\u9879\u76EE\u4E2D\uFF0C\u94FE\u8DEF\u8DDF\u8E2A\u6CA1\u6709\u68C0\u6D4B\u624B\u6BB5\uFF0C\u4E5F\u5C31\u662F\u5199\u7740\u5199\u7740\uFF0C\u94FE\u8DEF\u8DDF\u8E2A\u4E0D\u5C0F\u5FC3\u5C31\u5F04\u4E22\u4E86\u3002\u4F8B\u5982\u5728\u94FE\u8DEF\u4F20\u9012\u4E2D\u65B0\u5EFA ",(0,r.jsx)(n.code,{children:"ctx"})," \u6216\u8005\u4F20\u9012 ",(0,r.jsx)(n.code,{children:"nil"})," \u7684 ",(0,r.jsx)(n.code,{children:"ctx"}),"\u3002\u5F53\u6218\u7565\u8BBE\u8BA1\u5728\u6218\u672F\u5B9E\u65BD\u65F6\u906D\u9047\u5230\u4E86\u732A\u961F\u53CB\uFF0C\u9047\u5230\u95EE\u9898\u9700\u8981\u5B9A\u4F4D\u65F6\u5C31GG\u3002\u7279\u522B\u662F\u5728 ",(0,r.jsx)(n.code,{children:"toB"})," \u4E1A\u52A1\u4E2D\uFF0C\u9047\u5230\u5DE5\u5355\u9650\u65F6\u4F1A\u5F88\u6293\u72C2\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4E8C\u6846\u67B6\u5168\u94FE\u8DEF\u8DDF\u8E2A",children:"\u4E8C\u3001\u6846\u67B6\u5168\u94FE\u8DEF\u8DDF\u8E2A"}),"\n",(0,r.jsx)(n.h3,{id:"1\u7EDF\u4E00\u6846\u67B6",children:"1\u3001\u7EDF\u4E00\u6846\u67B6"}),"\n",(0,r.jsxs)(n.p,{children:["\u7531\u4E8E ",(0,r.jsx)(n.code,{children:"GoFrame"})," \u662F\u4E00\u6B3E\u5DE5\u7A0B\u5B8C\u5907\u7684\u57FA\u7840\u6846\u67B6\uFF0C\u63D0\u4F9B\u4E86\u9879\u76EE\u6240\u9700\u7684\u901A\u7528\u6838\u5FC3\u57FA\u7840\u7EC4\u4EF6\uFF0C\u56E0\u6B64\u53EF\u4EE5\u975E\u5E38\u65B9\u4FBF\u7EDF\u4E00\u5730\u7684\u57FA\u7840\u7EC4\u4EF6\u5B9E\u73B0\u94FE\u8DEF\u8DDF\u8E2A\u6807\u51C6\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"2\u6807\u51C6\u843D\u5730",children:"2\u3001\u6807\u51C6\u843D\u5730"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u6846\u67B6\u7684\u6838\u5FC3\u7EC4\u4EF6\u4E2D\u5747\u589E\u52A0\u4E86\u5BF9 ",(0,r.jsx)(n.code,{children:"ctx"})," \u4E0A\u4E0B\u6587\u53D8\u91CF\u7684\u652F\u6301\uFF0C\u5E76\u4E25\u683C\u6267\u884C ",(0,r.jsx)(n.code,{children:"OTEL"})," \u6807\u51C6\uFF0C\u4FDD\u969C\u6807\u51C6\u7684\u987A\u5229\u843D\u5730\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"3\u65E5\u5FD7\u652F\u6301",children:"3\u3001\u65E5\u5FD7\u652F\u6301"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u5DE5\u7A0B\u5B9E\u8DF5\u4E2D\uFF0C\u65E5\u5FD7\u5BF9\u4E8E\u94FE\u8DEF\u8DDF\u8E2A\u6765\u8BF4\u662F\u975E\u5E38\u91CD\u8981\u7684\u7EC4\u4EF6\uFF0C\u5728\u5927\u90E8\u5206\u7684\u4E1A\u52A1\u573A\u666F\u4E2D\uFF0C\u6211\u4EEC\u9700\u8981\u901A\u8FC7\u94FE\u8DEF\u8DDF\u8E2A\u548C\u65E5\u5FD7\u5185\u5BB9\u6765\u6392\u67E5\u548C\u5B9A\u4F4D\u5177\u4F53\u95EE\u9898\u3002",(0,r.jsx)(n.code,{children:"GoFrame"})," \u6846\u67B6\u7684\u65E5\u5FD7\u7EC4\u4EF6\u4E5F\u652F\u6301\u5E76\u4E14\u4E25\u683C\u6267\u884C ",(0,r.jsx)(n.code,{children:"OTEL"})," \u6807\u51C6\uFF0C\u56E0\u6B64\u53EA\u8981\u4F7F\u7528\u6846\u67B6\u7684\u65E5\u5FD7\u7EC4\u4EF6\uFF0C\u90A3\u4E48\u4E5F\u4F1A\u81EA\u52A8\u6253\u5370\u94FE\u8DEF\u76F8\u5173\u4FE1\u606F\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"4\u89C4\u8303\u68C0\u6D4B\u5DE5\u5177",children:"4\u3001\u89C4\u8303\u68C0\u6D4B\u5DE5\u5177"}),"\n",(0,r.jsxs)(n.p,{children:["\u6846\u67B6\u901A\u8FC7\u5F00\u53D1\u5DE5\u5177\u63D0\u4F9B\u5DE5\u7A0B\u89C4\u8303\u68C0\u6D4B\u529F\u80FD\uFF0C\u53EF\u4EE5\u81EA\u52A8\u68C0\u6D4B\u51FA\u4E1A\u52A1\u9879\u76EE\u4E2D\u7684\u94FE\u8DEF\u4E22\u5931\u95EE\u9898\uFF0C\u8FDB\u4E00\u6B65\u63A8\u8FDB ",(0,r.jsx)(n.code,{children:"OTEL"})," \u6807\u51C6\u843D\u5730\uFF0C\u4FDD\u969C\u9879\u76EE\u8D28\u91CF\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"5\u94FE\u8DEF\u4F20\u9012\u652F\u6301",children:"5\u3001\u94FE\u8DEF\u4F20\u9012\u652F\u6301"}),"\n",(0,r.jsxs)(n.p,{children:["\u94FE\u8DEF\u7684\u4F20\u9012\u4E5F\u9700\u8981\u7EDF\u4E00\u7EC4\u4EF6\u3002\u76EE\u524D\u6BD4\u8F83\u5E38\u89C1\u7684\u534F\u8BAE\u662F ",(0,r.jsx)(n.code,{children:"HTTP/GRPC"})," \u534F\u8BAE\uFF0C\u56E0\u6B64\u6846\u67B6\u4E5F\u63D0\u4F9B\u4E86 ",(0,r.jsx)(n.code,{children:"HTTP Client/Server"})," \u4EE5\u53CA ",(0,r.jsx)(n.code,{children:"GRPC Client/Server"})," \u7EC4\u4EF6\u6765\u4FDD\u969C\u94FE\u8DEF\u7684\u4F20\u9012\u3002\u5E76\u4E14\u4E3A\u63D0\u9AD8\u4ECB\u5165\u6027\u548C\u6613\u7528\u6027\uFF0C\u5C4F\u853D\u590D\u6742\u7684\u5E95\u5C42\u529F\u80FD\u7EC6\u8282\uFF0C\u8FD9\u79CD\u94FE\u8DEF\u4F20\u9012\u662F\u5E95\u5C42 ",(0,r.jsx)(n.strong,{children:"\u9690\u5F0F\u5B9E\u73B0"})," \u7684\uFF0C\u4F7F\u7528\u8005\u5BF9\u6B64\u4E8B\u5B8C\u5168\u65E0\u611F\u77E5\u7684\u3002"]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return l},a:function(){return c}});var i=d(667294);let r={},s=i.createContext(r);function c(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);