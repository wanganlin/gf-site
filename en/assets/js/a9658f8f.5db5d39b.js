"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["25433"],{307700:function(e,n,i){i.r(n),i.d(n,{metadata:()=>l,contentTitle:()=>r,default:()=>x,assets:()=>o,toc:()=>t,frontMatter:()=>c});var l=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u65E5\u5FD7\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6","title":"\u65E5\u5FD7\u7EC4\u4EF6","description":"glog \u662F\u901A\u7528\u7684\u9AD8\u6027\u80FD\u65E5\u5FD7\u7BA1\u7406\u6A21\u5757\uFF0C\u5B9E\u73B0\u4E86\u5F3A\u5927\u6613\u7528\u7684\u65E5\u5FD7\u7BA1\u7406\u529F\u80FD\uFF0C\u662F GoFrame \u5F00\u53D1\u6846\u67B6\u7684\u6838\u5FC3\u7EC4\u4EF6\u4E4B\u4E00\u3002","source":"@site/versioned_docs/version-2.4.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u65E5\u5FD7\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u65E5\u5FD7\u7EC4\u4EF6","slug":"/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u65E5\u5FD7\u7EC4\u4EF6/","permalink":"/en/2.4.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u65E5\u5FD7\u7EC4\u4EF6/","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.4.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u65E5\u5FD7\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6.md","tags":[],"version":"2.4.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":4,"frontMatter":{"title":"\u65E5\u5FD7\u7EC4\u4EF6","sidebar_position":4,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u914D\u7F6E\u7BA1\u7406-TOML\u683C\u5F0F","permalink":"/en/2.4.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u914D\u7F6E\u7BA1\u7406/\u914D\u7F6E\u7BA1\u7406-TOML\u683C\u5F0F"},"next":{"title":"\u65E5\u5FD7\u7EC4\u4EF6-\u914D\u7F6E\u7BA1\u7406","permalink":"/en/2.4.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u65E5\u5FD7\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6-\u914D\u7F6E\u7BA1\u7406"}}'),s=i("785893"),d=i("250065");let c={title:"\u65E5\u5FD7\u7EC4\u4EF6",sidebar_position:4,hide_title:!0},r=void 0,o={},t=[{value:"\u57FA\u672C\u4ECB\u7ECD",id:"\u57FA\u672C\u4ECB\u7ECD",level:2},{value:"\u7EC4\u4EF6\u7279\u6027",id:"\u7EC4\u4EF6\u7279\u6027",level:2},{value:"\u77E5\u8BC6\u56FE\u8C31",id:"\u77E5\u8BC6\u56FE\u8C31",level:2},{value:"\u5355\u4F8B\u5BF9\u8C61",id:"\u5355\u4F8B\u5BF9\u8C61",level:2},{value:"<code>glog.Print</code> \u548C <code>g.Log().Print</code> \u533A\u522B",id:"glogprint-\u548C-glogprint-\u533A\u522B",level:2}];function h(e){let n={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"glog"})," \u662F\u901A\u7528\u7684\u9AD8\u6027\u80FD\u65E5\u5FD7\u7BA1\u7406\u6A21\u5757\uFF0C\u5B9E\u73B0\u4E86\u5F3A\u5927\u6613\u7528\u7684\u65E5\u5FD7\u7BA1\u7406\u529F\u80FD\uFF0C\u662F ",(0,s.jsx)(n.code,{children:"GoFrame"})," \u5F00\u53D1\u6846\u67B6\u7684\u6838\u5FC3\u7EC4\u4EF6\u4E4B\u4E00\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u57FA\u672C\u4ECB\u7ECD",children:"\u57FA\u672C\u4ECB\u7ECD"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u4F7F\u7528\u65B9\u5F0F"}),"\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/os/glog"\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u63A5\u53E3\u6587\u6863"}),"\uFF1A"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/os/glog",children:"https://pkg.go.dev/github.com/gogf/gf/v2/os/glog"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u7B80\u8981\u8BF4\u660E\uFF1A"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"glog"})," \u6A21\u5757\u56FA\u5B9A\u65E5\u5FD7\u6587\u4EF6\u540D\u79F0\u683C\u5F0F\u4E3A ",(0,s.jsx)(n.code,{children:"*.log"}),"\uFF0C\u5373\u56FA\u5B9A\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:".log"})," \u4F5C\u4E3A\u65E5\u5FD7\u6587\u4EF6\u540D\u540E\u7F00\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"glog"})," \u652F\u6301\u6587\u4EF6\u8F93\u51FA\u3001\u65E5\u5FD7\u7EA7\u522B\u3001\u65E5\u5FD7\u5206\u7C7B\u3001\u8C03\u8BD5\u7BA1\u7406\u3001\u8C03\u7528\u8DDF\u8E2A\u3001\u94FE\u5F0F\u64CD\u4F5C\u3001\u6EDA\u52A8\u5207\u5206\u7B49\u7B49\u4E30\u5BCC\u7279\u6027\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u53EF\u4EE5\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"glog.New"})," \u65B9\u6CD5\u521B\u5EFA ",(0,s.jsx)(n.code,{children:"glog.Logger"})," \u5BF9\u8C61\u7528\u4E8E\u81EA\u5B9A\u4E49\u65E5\u5FD7\u6253\u5370\uFF0C\u4E5F\u53EF\u4EE5\u5E76\u63A8\u8350\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"glog"})," \u9ED8\u8BA4\u63D0\u4F9B\u7684\u5305\u65B9\u6CD5\u6765\u6253\u5370\u65E5\u5FD7\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5F53\u4F7F\u7528\u5305\u65B9\u6CD5\u4FEE\u6539\u6A21\u5757\u914D\u7F6E\u65F6\uFF0C\u6CE8\u610F\u4EFB\u4F55\u7684 ",(0,s.jsx)(n.code,{children:"glog.Set*"})," \u8BBE\u7F6E\u65B9\u6CD5\u90FD\u5C06\u4F1A ",(0,s.jsx)(n.strong,{children:"\u5168\u5C40\u751F\u6548"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u65E5\u5FD7\u5185\u5BB9\u9ED8\u8BA4\u65F6\u95F4\u683C\u5F0F\u4E3A ",(0,s.jsx)(n.code,{children:"\u65F6\u95F4 [\u7EA7\u522B] \u5185\u5BB9 \u6362\u884C"}),"\uFF0C\u5176\u4E2D ",(0,s.jsx)(n.code,{children:"\u65F6\u95F4"})," \u7CBE\u786E\u5230\u6BEB\u79D2\u7EA7\u522B\uFF0C ",(0,s.jsx)(n.code,{children:"\u7EA7\u522B"})," \u4E3A\u53EF\u9009\u8F93\u51FA\uFF0C ",(0,s.jsx)(n.code,{children:"\u5185\u5BB9"})," \u4E3A\u8C03\u7528\u7AEF\u7684\u53C2\u6570\u8F93\u5165\uFF0C ",(0,s.jsx)(n.code,{children:"\u6362\u884C"})," \u4E3A\u53EF\u9009\u8F93\u51FA(\u90E8\u5206\u65B9\u6CD5\u81EA\u52A8\u4E3A\u65E5\u5FD7\u5185\u5BB9\u6DFB\u52A0\u6362\u884C\u7B26\u53F7)\uFF0C\u65E5\u5FD7\u5185\u5BB9\u793A\u4F8B\uFF1A ",(0,s.jsx)(n.code,{children:"2018-10-10 12:00:01.568 [ERRO] \u4EA7\u751F\u9519\u8BEF"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Print*/Debug*/Info*"})," \u65B9\u6CD5\u8F93\u51FA\u65E5\u5FD7\u5185\u5BB9\u5230\u6807\u51C6\u8F93\u51FA( ",(0,s.jsx)(n.code,{children:"stdout"}),")\uFF0C\u4E3A\u9632\u6B62\u65E5\u5FD7\u7684\u9519\u4E71\uFF0C ",(0,s.jsx)(n.code,{children:"Notice*/Warning*/Error*/Critical*/Panic*/Fatal*"})," \u65B9\u6CD5\u4E5F\u662F\u5C06\u65E5\u5FD7\u5185\u5BB9\u8F93\u51FA\u5230\u6807\u51C6\u8F93\u51FA( ",(0,s.jsx)(n.code,{children:"stdout"}),")\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Panic*"})," \u65B9\u6CD5\u5728\u8F93\u51FA\u65E5\u5FD7\u4FE1\u606F\u540E\u4F1A\u5F15\u53D1 ",(0,s.jsx)(n.code,{children:"panic"})," \u9519\u8BEF\u65B9\u6CD5"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Fatal*"})," \u65B9\u6CD5\u5728\u8F93\u51FA\u65E5\u5FD7\u4FE1\u606F\u4E4B\u540E\u4F1A\u505C\u6B62\u8FDB\u7A0B\u8FD0\u884C\uFF0C\u5E76\u8FD4\u56DE\u8FDB\u7A0B\u72B6\u6001\u7801\u503C\u4E3A ",(0,s.jsx)(n.code,{children:"1"}),"(\u6B63\u5E38\u7A0B\u5E8F\u9000\u51FA\u72B6\u6001\u7801\u4E3A ",(0,s.jsx)(n.code,{children:"0"}),")\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u7EC4\u4EF6\u7279\u6027",children:"\u7EC4\u4EF6\u7279\u6027"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"glog"})," \u7EC4\u4EF6\u5177\u6709\u4EE5\u4E0B\u663E\u8457\u7279\u6027\uFF1A"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4F7F\u7528\u7B80\u4FBF\uFF0C\u529F\u80FD\u5F3A\u5927"}),"\n",(0,s.jsx)(n.li,{children:"\u652F\u6301\u914D\u7F6E\u7BA1\u7406\uFF0C\u4F7F\u7528\u7EDF\u4E00\u7684\u914D\u7F6E\u7EC4\u4EF6"}),"\n",(0,s.jsx)(n.li,{children:"\u652F\u6301\u65E5\u5FD7\u7EA7\u522B"}),"\n",(0,s.jsx)(n.li,{children:"\u652F\u6301\u989C\u8272\u6253\u5370"}),"\n",(0,s.jsx)(n.li,{children:"\u652F\u6301\u94FE\u5F0F\u64CD\u4F5C"}),"\n",(0,s.jsx)(n.li,{children:"\u652F\u6301\u6307\u5B9A\u8F93\u51FA\u65E5\u5FD7\u6587\u4EF6/\u76EE\u5F55"}),"\n",(0,s.jsx)(n.li,{children:"\u652F\u6301\u94FE\u8DEF\u8DDF\u8E2A"}),"\n",(0,s.jsx)(n.li,{children:"\u652F\u6301\u5F02\u6B65\u8F93\u51FA"}),"\n",(0,s.jsx)(n.li,{children:"\u652F\u6301\u5806\u6808\u6253\u5370"}),"\n",(0,s.jsx)(n.li,{children:"\u652F\u6301\u8C03\u8BD5\u4FE1\u606F\u5F00\u5173"}),"\n",(0,s.jsxs)(n.li,{children:["\u652F\u6301\u81EA\u5B9A\u4E49 ",(0,s.jsx)(n.code,{children:"Writer"})," \u8F93\u51FA\u63A5\u53E3"]}),"\n",(0,s.jsxs)(n.li,{children:["\u652F\u6301\u81EA\u5B9A\u4E49\u65E5\u5FD7 ",(0,s.jsx)(n.code,{children:"Handler"})," \u5904\u7406"]}),"\n",(0,s.jsxs)(n.li,{children:["\u652F\u6301\u81EA\u5B9A\u4E49\u65E5\u5FD7 ",(0,s.jsx)(n.code,{children:"CtxKeys"})," \u952E\u503C"]}),"\n",(0,s.jsxs)(n.li,{children:["\u652F\u6301 ",(0,s.jsx)(n.code,{children:"JSON"})," \u683C\u5F0F\u6253\u5370"]}),"\n",(0,s.jsxs)(n.li,{children:["\u652F\u6301 ",(0,s.jsx)(n.code,{children:"Flags"})," \u7279\u6027"]}),"\n",(0,s.jsxs)(n.li,{children:["\u652F\u6301 ",(0,s.jsx)(n.code,{children:"Rotate"})," \u6EDA\u52A8\u5207\u5206\u7279\u6027"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u77E5\u8BC6\u56FE\u8C31",children:"\u77E5\u8BC6\u56FE\u8C31"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(159992).Z+"",width:"2193",height:"1586"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5355\u4F8B\u5BF9\u8C61",children:"\u5355\u4F8B\u5BF9\u8C61"}),"\n",(0,s.jsxs)(n.p,{children:["\u65E5\u5FD7\u7EC4\u4EF6\u652F\u6301\u5355\u4F8B\u6A21\u5F0F\uFF0C\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"g.Log(\u5355\u4F8B\u540D\u79F0)"})," \u83B7\u53D6\u4E0D\u540C\u7684\u5355\u4F8B\u65E5\u5FD7\u7BA1\u7406\u5BF9\u8C61\u3002\u63D0\u4F9B\u5355\u4F8B\u5BF9\u8C61\u7684\u76EE\u7684\u5728\u4E8E\u9488\u5BF9\u4E0D\u540C\u4E1A\u52A1\u573A\u666F\u53EF\u4EE5\u4F7F\u7528\u4E0D\u540C\u914D\u7F6E\u7684\u65E5\u5FD7\u7BA1\u7406\u5BF9\u8C61\u3002\u6211\u4EEC\u63A8\u8350\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"g.Log()"})," \u65B9\u6CD5\u83B7\u53D6\u5355\u4F8B\u5BF9\u8C61\u6765\u8FDB\u884C\u65E5\u5FD7\u64CD\u4F5C\uFF0C\u8BE5\u65B9\u6CD5\u5185\u90E8\u4F1A\u81EA\u52A8\u8BFB\u53D6\u914D\u7F6E\u6587\u4EF6\u5E76\u521D\u59CB\u5316\u5355\u4F8B\u5BF9\u8C61\uFF0C\u8BE5\u521D\u59CB\u5316\u64CD\u4F5C\u4EC5\u4F1A\u6267\u884C\u4E00\u6B21\u3002"]}),"\n",(0,s.jsxs)(n.h2,{id:"glogprint-\u548C-glogprint-\u533A\u522B",children:[(0,s.jsx)(n.code,{children:"glog.Print"})," \u548C ",(0,s.jsx)(n.code,{children:"g.Log().Print"})," \u533A\u522B"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"glog"})," \u662F\u65E5\u5FD7\u7EC4\u4EF6\u7684\u5305\u540D\uFF0C ",(0,s.jsx)(n.code,{children:"g.Log()"})," \u662F\u4E00\u4E2A\u65E5\u5FD7\u7EC4\u4EF6\u5355\u4F8B\u5BF9\u8C61\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"g.Log()"})," \u5355\u4F8B\u5BF9\u8C61\u901A\u8FC7\u5BF9\u8C61\u7BA1\u7406\u7EC4\u4EF6 ",(0,s.jsx)(n.code,{children:"g"})," \u5305\u6765\u7EF4\u62A4\uFF0C\u5BF9\u8C61\u521D\u59CB\u5316\u65F6\u4F1A\u81EA\u52A8\u8BFB\u53D6\u65E5\u5FD7\u914D\u7F6E\uFF0C\u4F7F\u7528\u7B80\u4FBF\uFF0C\u5927\u591A\u6570\u573A\u666F\u4E0B\u63A8\u8350\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\u4F7F\u7528\u65E5\u5FD7\u7EC4\u4EF6\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"glog"})," \u901A\u8FC7\u72EC\u7ACB\u7EC4\u4EF6\u7684\u5F62\u5F0F\u4F7F\u7528\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4F1A\u76F4\u63A5\u8F93\u51FA\u65E5\u5FD7\u5230\u7EC8\u7AEF\u3002\u4E5F\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E\u7BA1\u7406\u65B9\u6CD5\u8BBE\u7F6E\u5168\u5C40\u914D\u7F6E\uFF0C\u6216\u8005\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"New"})," \u521B\u5EFA\u72EC\u7ACB\u7684\u65E5\u5FD7\u5BF9\u8C61\u4F7F\u7528\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u7F51\u53CB"}),"\uFF1A\u4E3A\u4EC0\u4E48\u4F1A\u6709\u4E24\u79CD\u65E5\u5FD7\u6253\u5370\u65B9\u5F0F\uFF1F\u6211\u5E94\u8BE5\u7528\u54EA\u79CD\u65B9\u5F0F\u5462\uFF1F"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u56DE\u7B54"}),"\uFF1A"]}),"\n",(0,s.jsxs)(n.p,{children:["\u7531\u4E8E\u6846\u67B6\u7684\u6BCF\u4E2A\u7EC4\u4EF6\u90FD\u662F ",(0,s.jsx)(n.strong,{children:"\u89E3\u8026\u5316\u8BBE\u8BA1"})," \u7684\uFF0C\u6846\u67B6\u662F ",(0,s.jsx)(n.strong,{children:"\u53EF\u4EE5\u4F5C\u4E3A\u72EC\u7ACB\u7684\u5DE5\u5177\u5E93\u4F7F\u7528"})," \u7684\u3002\u6BD4\u5982\u9879\u76EE\u53EA\u9700\u8981\u4F7F\u7528\u65E5\u5FD7\u7EC4\u4EF6\uFF0C\u90A3\u4E48\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"glog"})," \u5305\u7684\u65B9\u6CD5\u5373\u53EF\uFF0C\u4E0D\u4F1A\u5F15\u5165\u5176\u4ED6\u7684\u7EC4\u4EF6\u3002\u4F46\u5728\u9879\u76EE\u5DE5\u7A0B\u5316\u4F7F\u7528\u4E2D\uFF0C\u5DE5\u5177\u5E93\u7684\u4F7F\u7528\u65B9\u5F0F\u4F1A\u8F83\u4E3A\u7E41\u7410\uFF0C\u5F80\u5F80\u4F1A\u6D89\u53CA\u5230\u914D\u7F6E\u548C\u7EC4\u4EF6\u521D\u59CB\u5316\uFF08\u5927\u90E8\u5206\u573A\u666F\u4F1A\u5F15\u8D77\u4E8C\u6B21\u5C01\u88C5\uFF09\uFF0C\u56E0\u6B64\u6846\u67B6\u4E5F\u63D0\u4F9B\u4E86\u4E00\u4E2A ",(0,s.jsx)(n.strong,{children:"\u8026\u5408\u5305"})," \u53EB\u505A ",(0,s.jsx)(n.code,{children:"g"})," \u5305\uFF0C\u8FD9\u4E2A\u5305\u4E0B\u9762\u9ED8\u8BA4\u52A0\u8F7D\u4E86\u4E00\u4E9B\u5E38\u7528\u7684\u7EC4\u4EF6\u3002 ",(0,s.jsx)(n.code,{children:"g.Log()"})," \u5C31\u662F\u5176\u4E2D\u7684\u65E5\u5FD7\u7EC4\u4EF6\uFF0C\u5B83\u4F1A\u81EA\u52A8\u6309\u7167\u5DE5\u7A0B\u89C4\u8303\u8BFB\u53D6\u5E76\u521D\u59CB\u5316\u914D\u7F6E\u5BF9\u8C61\uFF0C\u5FEB\u901F\u521D\u59CB\u5316\u65E5\u5FD7\u5BF9\u8C61\u5E76\u5B9E\u73B0\u5355\u4F8B\u7BA1\u7406\uFF0C\u6781\u5927\u7B80\u5316\u5DE5\u7A0B\u5316\u4E0B\u7684\u65E5\u5FD7\u4F7F\u7528\u3002\u66F4\u591A\u7684\u4ECB\u7ECD\u8BF7\u53C2\u8003\uFF1A ",(0,s.jsx)(n.a,{href:"/en/2.4.x/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6-%E9%87%8D%E7%82%B9/%E5%AF%B9%E8%B1%A1%E7%AE%A1%E7%90%86",children:"\u5BF9\u8C61\u7BA1\u7406"})]})]})}function x(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},159992:function(e,n,i){i.d(n,{Z:function(){return l}});let l=i.p+"assets/images/148b86e9ec923e14a12ec102ce49a777-56016b1c21cd03d816233d8f6f646df3.png"},250065:function(e,n,i){i.d(n,{Z:function(){return r},a:function(){return c}});var l=i(667294);let s={},d=l.createContext(s);function c(e){let n=l.useContext(d);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),l.createElement(d.Provider,{value:n},e.children)}}}]);