"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["10305"],{233463:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>c,default:()=>h,assets:()=>l,toc:()=>o,frontMatter:()=>r});var i=JSON.parse('{"id":"quick/\u9879\u76EE\u811A\u624B\u67B6/\u63A5\u53E3\u5F00\u53D1/Step3 - \u7F16\u5199api\u63A5\u53E3\u5B9A\u4E49","title":"Step3 - \u7F16\u5199api\u63A5\u53E3\u5B9A\u4E49","description":"\u5728\u9879\u76EE\u7684api\u76EE\u5F55\u4E0B\u5B9A\u4E49CURD\u63A5\u53E3\uFF0C\u91C7\u7528RESTful\u98CE\u683C\u7684\u63A5\u53E3\u8BBE\u8BA1\uFF0C\u4F7F\u7528HTTP Method\u6765\u89C4\u8303\u63A5\u53E3\u8BF7\u6C42\u3002\u63A5\u53E3\u5B9A\u4E49\u4E2D\u4F7F\u7528g.Meta\u7BA1\u7406\u5143\u6570\u636E\u4FE1\u606F\uFF0C\u5305\u62EC\u8DEF\u7531\u5730\u5740\u3001\u8BF7\u6C42\u65B9\u5F0F\u548C\u63A5\u53E3\u63CF\u8FF0\u3002\u8BF7\u6C42\u53C2\u6570\u548C\u8FD4\u56DE\u6570\u636E\u7ED3\u6784\u4F53\u5B9A\u4E49\u4E86\u8BE6\u7EC6\u7684\u53C2\u6570\u6821\u9A8C\u89C4\u5219\u3002\u63A5\u53E3\u7248\u672C\u63A7\u5236\u4E0A\u5F00\u59CB\u4F7F\u7528v1\u7248\u672C\uFF0C\u4EE5\u4FBF\u7EF4\u62A4\u672A\u6765\u7684\u517C\u5BB9\u6027\u3002\u63A5\u53E3\u53C2\u6570\u91C7\u7528\u7075\u6D3B\u63A5\u6536\u65B9\u5F0F\uFF0C\u6EE1\u8DB3\u63A5\u53E3\u8BF7\u6C42\u7684\u591A\u6837\u5316\u9700\u6C42\u3002","source":"@site/docs/quick/\u9879\u76EE\u811A\u624B\u67B6/\u63A5\u53E3\u5F00\u53D1/Step3 - \u7F16\u5199api\u63A5\u53E3\u5B9A\u4E49.md","sourceDirName":"quick/\u9879\u76EE\u811A\u624B\u67B6/\u63A5\u53E3\u5F00\u53D1","slug":"/quick/scaffold-api-definition","permalink":"/quick/scaffold-api-definition","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/quick/\u9879\u76EE\u811A\u624B\u67B6/\u63A5\u53E3\u5F00\u53D1/Step3 - \u7F16\u5199api\u63A5\u53E3\u5B9A\u4E49.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1732096013000,"sidebarPosition":3,"frontMatter":{"slug":"/quick/scaffold-api-definition","title":"Step3 - \u7F16\u5199api\u63A5\u53E3\u5B9A\u4E49","hide_title":true,"sidebar_position":3,"keywords":["GoFrame","\u63A5\u53E3\u5B9A\u4E49","RESTful","HTTP Method","\u7248\u672C\u63A7\u5236","\u53C2\u6570\u6821\u9A8C","\u7528\u6237\u7BA1\u7406","\u5143\u6570\u636E\u7BA1\u7406","\u6570\u636E\u8FD4\u56DE","Golang"],"description":"\u5728\u9879\u76EE\u7684api\u76EE\u5F55\u4E0B\u5B9A\u4E49CURD\u63A5\u53E3\uFF0C\u91C7\u7528RESTful\u98CE\u683C\u7684\u63A5\u53E3\u8BBE\u8BA1\uFF0C\u4F7F\u7528HTTP Method\u6765\u89C4\u8303\u63A5\u53E3\u8BF7\u6C42\u3002\u63A5\u53E3\u5B9A\u4E49\u4E2D\u4F7F\u7528g.Meta\u7BA1\u7406\u5143\u6570\u636E\u4FE1\u606F\uFF0C\u5305\u62EC\u8DEF\u7531\u5730\u5740\u3001\u8BF7\u6C42\u65B9\u5F0F\u548C\u63A5\u53E3\u63CF\u8FF0\u3002\u8BF7\u6C42\u53C2\u6570\u548C\u8FD4\u56DE\u6570\u636E\u7ED3\u6784\u4F53\u5B9A\u4E49\u4E86\u8BE6\u7EC6\u7684\u53C2\u6570\u6821\u9A8C\u89C4\u5219\u3002\u63A5\u53E3\u7248\u672C\u63A7\u5236\u4E0A\u5F00\u59CB\u4F7F\u7528v1\u7248\u672C\uFF0C\u4EE5\u4FBF\u7EF4\u62A4\u672A\u6765\u7684\u517C\u5BB9\u6027\u3002\u63A5\u53E3\u53C2\u6570\u91C7\u7528\u7075\u6D3B\u63A5\u6536\u65B9\u5F0F\uFF0C\u6EE1\u8DB3\u63A5\u53E3\u8BF7\u6C42\u7684\u591A\u6837\u5316\u9700\u6C42\u3002"},"sidebar":"quickSidebar","previous":{"title":"Step2 - \u751F\u6210/dao/do/entity","permalink":"/quick/scaffold-api-gen-dao"},"next":{"title":"Step4 - \u751F\u6210controller\u4EE3\u7801","permalink":"/quick/scaffold-api-controller"}}'),d=s("785893"),t=s("250065");let r={slug:"/quick/scaffold-api-definition",title:"Step3 - \u7F16\u5199api\u63A5\u53E3\u5B9A\u4E49",hide_title:!0,sidebar_position:3,keywords:["GoFrame","\u63A5\u53E3\u5B9A\u4E49","RESTful","HTTP Method","\u7248\u672C\u63A7\u5236","\u53C2\u6570\u6821\u9A8C","\u7528\u6237\u7BA1\u7406","\u5143\u6570\u636E\u7BA1\u7406","\u6570\u636E\u8FD4\u56DE","Golang"],description:"\u5728\u9879\u76EE\u7684api\u76EE\u5F55\u4E0B\u5B9A\u4E49CURD\u63A5\u53E3\uFF0C\u91C7\u7528RESTful\u98CE\u683C\u7684\u63A5\u53E3\u8BBE\u8BA1\uFF0C\u4F7F\u7528HTTP Method\u6765\u89C4\u8303\u63A5\u53E3\u8BF7\u6C42\u3002\u63A5\u53E3\u5B9A\u4E49\u4E2D\u4F7F\u7528g.Meta\u7BA1\u7406\u5143\u6570\u636E\u4FE1\u606F\uFF0C\u5305\u62EC\u8DEF\u7531\u5730\u5740\u3001\u8BF7\u6C42\u65B9\u5F0F\u548C\u63A5\u53E3\u63CF\u8FF0\u3002\u8BF7\u6C42\u53C2\u6570\u548C\u8FD4\u56DE\u6570\u636E\u7ED3\u6784\u4F53\u5B9A\u4E49\u4E86\u8BE6\u7EC6\u7684\u53C2\u6570\u6821\u9A8C\u89C4\u5219\u3002\u63A5\u53E3\u7248\u672C\u63A7\u5236\u4E0A\u5F00\u59CB\u4F7F\u7528v1\u7248\u672C\uFF0C\u4EE5\u4FBF\u7EF4\u62A4\u672A\u6765\u7684\u517C\u5BB9\u6027\u3002\u63A5\u53E3\u53C2\u6570\u91C7\u7528\u7075\u6D3B\u63A5\u6536\u65B9\u5F0F\uFF0C\u6EE1\u8DB3\u63A5\u53E3\u8BF7\u6C42\u7684\u591A\u6837\u5316\u9700\u6C42\u3002"},c=void 0,l={},o=[{value:"\u521B\u5EFA\u63A5\u53E3",id:"\u521B\u5EFA\u63A5\u53E3",level:2},{value:"\u5220\u9664\u63A5\u53E3",id:"\u5220\u9664\u63A5\u53E3",level:2},{value:"\u66F4\u65B0\u63A5\u53E3",id:"\u66F4\u65B0\u63A5\u53E3",level:2},{value:"\u67E5\u8BE2\u63A5\u53E3\uFF08\u5355\u4E2A\uFF09",id:"\u67E5\u8BE2\u63A5\u53E3\u5355\u4E2A",level:2},{value:"\u67E5\u8BE2\u63A5\u53E3\uFF08\u5217\u8868\uFF09",id:"\u67E5\u8BE2\u63A5\u53E3\u5217\u8868",level:2},{value:"\u5B66\u4E60\u5C0F\u7ED3",id:"\u5B66\u4E60\u5C0F\u7ED3",level:2}];function a(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:["\u5728\u9879\u76EE\u7684",(0,d.jsx)(n.code,{children:"api"}),"\u76EE\u5F55\u4E0B\uFF0C\u6211\u4EEC\u5F00\u59CB\u5B9A\u4E49\u6211\u4EEC\u7684",(0,d.jsx)(n.code,{children:"CURD"}),"\u63A5\u53E3\u3002"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u63A5\u53E3\u6211\u4EEC\u4F7F\u7528",(0,d.jsx)(n.code,{children:"RESTful"}),"\u98CE\u683C\u8BBE\u8BA1\uFF0C\u5145\u5206\u4F7F\u7528",(0,d.jsx)(n.code,{children:"GET/POST/PUT/DELETE"}),"\u7684",(0,d.jsx)(n.code,{children:"HTTP Method"}),"\uFF0C\u8FD9\u6837\u89C4\u8303\u8BBE\u8BA1\u7684\u63A5\u53E3\u4F1A\u975E\u5E38\u4F18\u96C5\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u540C\u6837\u7684\uFF0C\u6211\u4EEC\u9ED8\u8BA4\u5F00\u59CB\u4F7F\u7528",(0,d.jsx)(n.code,{children:"v1"}),"\u7248\u672C\u3002\u4F7F\u7528\u7248\u672C\u53F7\u505A\u4E3A\u826F\u597D\u7684\u5F00\u53D1\u4E60\u60EF\uFF0C\u6709\u5229\u4E8E\u672A\u6765\u63A5\u53E3\u7684\u517C\u5BB9\u6027\u7EF4\u62A4\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"user api definition",src:s(682505).Z+"",width:"3412",height:"2002"})}),"\n",(0,d.jsx)(n.h2,{id:"\u521B\u5EFA\u63A5\u53E3",children:"\u521B\u5EFA\u63A5\u53E3"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",metastring:'title="api/user/v1/user.go"',children:'type CreateReq struct {\n    g.Meta `path:"/user" method:"post" tags:"User" summary:"Create user"`\n    Name   string `v:"required|length:3,10" dc:"user name"`\n    Age    uint   `v:"required|between:18,200" dc:"user age"`\n}\ntype CreateRes struct {\n    Id int64 `json:"id" dc:"user id"`\n}\n'})}),"\n",(0,d.jsx)(n.p,{children:"\u7B80\u8981\u4ECB\u7ECD\uFF1A"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u63A5\u53E3\u5B9A\u4E49\u4E2D\uFF0C\u4F7F\u7528",(0,d.jsx)(n.code,{children:"g.Meta"}),"\u6765\u7BA1\u7406\u63A5\u53E3\u7684\u5143\u6570\u636E\u4FE1\u606F\uFF0C\u8FD9\u4E9B\u5143\u6570\u636E\u4FE1\u606F\u901A\u8FC7\u6807\u7B7E\u7684\u5F62\u5F0F\u5B9A\u4E49\u5728",(0,d.jsx)(n.code,{children:"g.Meta"}),"\u5C5E\u6027\u4E0A\u3002\u8FD9\u91CC\u7684\u5143\u6570\u636E\u4FE1\u606F\u5305\u62EC\uFF1A",(0,d.jsx)(n.code,{children:"path"}),"\u8DEF\u7531\u5730\u5740\u3001",(0,d.jsx)(n.code,{children:"method"}),"\u8BF7\u6C42\u65B9\u5F0F\u3001",(0,d.jsx)(n.code,{children:"tags"}),"\u63A5\u53E3\u5206\u7EC4(\u7528\u4E8E\u751F\u6210\u63A5\u53E3\u6587\u6863)\u3001",(0,d.jsx)(n.code,{children:"summary"}),"\u63A5\u53E3\u63CF\u8FF0\u3002\u8FD9\u4E9B\u5143\u6570\u636E\u4FE1\u606F\u90FD\u662F",(0,d.jsx)(n.code,{children:"OpenAPIv3"}),"\u91CC\u9762\u7684\u4E1C\u897F\uFF0C\u6211\u4EEC\u8FD9\u91CC\u4E0D\u505A\u8BE6\u7EC6\u4ECB\u7ECD\uFF0C\u5927\u5BB6\u4E86\u89E3\u5373\u53EF\uFF0C\u611F\u5174\u8DA3\u53EF\u4EE5\u53C2\u8003\u7AE0\u8282\uFF1A",(0,d.jsx)(n.a,{href:"/docs/web/api-document-openapiv3",children:"\u63A5\u53E3\u6587\u6863-OpenAPIv3"}),"\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u8FD9\u91CC\u7684",(0,d.jsx)(n.code,{children:"Name"}),"\u548C",(0,d.jsx)(n.code,{children:"Age"}),"\u5C5E\u6027\u5373\u662F\u54B1\u4EEC\u63A5\u53E3\u7684\u53C2\u6570\u5B9A\u4E49\u3002\u5176\u4E2D",(0,d.jsx)(n.code,{children:"dc"}),"\u6807\u7B7E\u662F",(0,d.jsx)(n.code,{children:"description"}),"\u7684\u7F29\u5199\uFF0C\u8868\u793A\u53C2\u6570\u7684\u542B\u4E49\uFF1B",(0,d.jsx)(n.code,{children:"v"}),"\u6807\u7B7E\u662F",(0,d.jsx)(n.code,{children:"valid"}),"\u5F97\u7F29\u5199\uFF0C\u8868\u793A\u53C2\u6570\u7684\u6821\u9A8C\u89C4\u5219\u3002\u6211\u4EEC\u8FD9\u91CC\u4F7F\u7528\u5230\u4E86",(0,d.jsx)(n.code,{children:"3"}),"\u6761\u5185\u7F6E\u7684\u6821\u9A8C\u89C4\u5219\uFF1A","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"required"}),"\uFF1A\u8BE5\u53C2\u6570\u662F\u5FC5\u9700\u53C2\u6570\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"length"}),"\uFF1A\u53C2\u6570\u7684\u957F\u5EA6\u6821\u9A8C\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"between"}),"\uFF1A\u53C2\u6570\u7684\u5927\u5C0F\u6821\u9A8C\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u8FD9\u91CC\u4EC5\u505A\u4E86\u89E3\u5373\u53EF\uFF0C\u66F4\u591A\u7684\u6821\u9A8C\u89C4\u5219\u8BF7\u53C2\u8003\u7AE0\u8282 ",(0,d.jsx)(n.a,{href:"/docs/core/gvalid-rules",children:"\u6570\u636E\u6821\u9A8C-\u6821\u9A8C\u89C4\u5219"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\u8BF7\u6C42\u7684\u53C2\u6570\u7ED3\u6784\u4F53",(0,d.jsx)(n.code,{children:"CreateReq"}),"\u4E2D\uFF0C\u6211\u4EEC\u5E76\u6CA1\u6709\u5B9A\u4E49\u53C2\u6570\u7684\u63A5\u6536\u65B9\u5F0F\uFF0C\u56E0\u4E3A",(0,d.jsx)(n.code,{children:"GoFrame"}),"\u6846\u67B6\u652F\u6301\u975E\u5E38\u5F3A\u5927\u7075\u6D3B\u7684\u53C2\u6570\u63A5\u6536\u65B9\u5F0F\uFF0C\u80FD\u591F\u81EA\u52A8\u8BC6\u522B",(0,d.jsx)(n.code,{children:"Query String/Form/Json/Xml"}),"\u7B49\u63D0\u4EA4\u65B9\u5F0F\uFF0C\u5E76\u5C06\u63D0\u4EA4\u53C2\u6570\u81EA\u52A8\u6620\u5C04\u5230\u8BF7\u6C42\u53C2\u6570\u63A5\u6536\u5BF9\u8C61\u4E0A\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u53EA\u6709\u8FD4\u56DE\u7684\u53C2\u6570\u7ED3\u6784\u4F53\u4E2D\u5E26\u6709",(0,d.jsx)(n.code,{children:"json"}),"\u6807\u7B7E\uFF0C\u56E0\u4E3A\u8FD4\u56DE\u7684\u6570\u636E\u5F80\u5F80\u9700\u8981\u8F6C\u6362\u4E3A",(0,d.jsx)(n.code,{children:"json"}),"\u683C\u5F0F\u7ED9\u524D\u7AEF\u4F7F\u7528\uFF0C\u901A\u8FC7",(0,d.jsx)(n.code,{children:"snake"}),"\u7684\u53C2\u6570\u547D\u540D\u7684\u65B9\u5F0F\u66F4\u7B26\u5408\u524D\u7AEF\u547D\u540D\u4E60\u60EF\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.admonition,{type:"tip",children:(0,d.jsxs)(n.p,{children:["\u5728",(0,d.jsx)(n.code,{children:"RESTful"}),"\u98CE\u683C\u7684\u63A5\u53E3\u8BBE\u8BA1\u4E2D\uFF0C\u6211\u4EEC\u901A\u5E38\u4F7F\u7528",(0,d.jsx)(n.code,{children:"HTTP Method"}),"\u4E2D\u7684",(0,d.jsx)(n.code,{children:"POST"}),"\u6765\u8868\u793A\u5199\u5165\u64CD\u4F5C\uFF0C\u800C\u4F7F\u7528",(0,d.jsx)(n.code,{children:"PUT"}),"\u6765\u8868\u793A\u66F4\u65B0\u64CD\u4F5C\u3002"]})}),"\n",(0,d.jsx)(n.h2,{id:"\u5220\u9664\u63A5\u53E3",children:"\u5220\u9664\u63A5\u53E3"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",metastring:'title="api/user/v1/user.go"',children:'type DeleteReq struct {\n    g.Meta `path:"/user/{id}" method:"delete" tags:"User" summary:"Delete user"`\n    Id     int64 `v:"required" dc:"user id"`\n}\ntype DeleteRes struct{}\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u8FD9\u91CC\u7684\u8DEF\u7531\u6807\u7B7E",(0,d.jsx)(n.code,{children:"path"}),"\u4F7F\u7528\u7684",(0,d.jsx)(n.code,{children:"/user/{id}"}),"\uFF0C\u5176\u4E2D\u7684",(0,d.jsx)(n.code,{children:"{id}"}),"\u8868\u793A\u4E00\u4E2A\u5B57\u6BB5\u5339\u914D\u8DEF\u7531\uFF0C\u8BE5\u53C2\u6570\u901A\u8FC7",(0,d.jsx)(n.code,{children:"URL Path"}),"\u7684\u65B9\u5F0F\u4F20\u9012\uFF0C\u53C2\u6570\u540D\u79F0\u4E3A",(0,d.jsx)(n.code,{children:"id"}),"\u3002\u53EF\u4EE5\u770B\u5230\uFF0C\u6211\u4EEC\u5728\u8BF7\u6C42\u53C2\u6570\u5BF9\u8C61\u4E2D\u6B63\u597D\u5B9A\u4E49\u4E86\u4E00\u4E2A",(0,d.jsx)(n.code,{children:"Id"}),"\u53C2\u6570\uFF0C\u662F\u7684\uFF0C\u4ECE\u8DEF\u7531\u4E2D\u5339\u914D\u5230\u7684",(0,d.jsx)(n.code,{children:"id"}),"\u53C2\u6570\u4F1A",(0,d.jsx)(n.strong,{children:"\u4E0D\u533A\u5206\u53C2\u6570\u5B57\u6BCD\u5927\u5C0F\u5199"}),"\u76F4\u63A5\u6620\u5C04\u5230\u8BE5",(0,d.jsx)(n.code,{children:"Id"}),"\u4E0A\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u4E3E\u4E2A\u4F8B\u5B50\uFF1A\u8DEF\u7531",(0,d.jsx)(n.code,{children:"/user/1"}),"\u4E2D\uFF0C",(0,d.jsx)(n.code,{children:"id"}),"\u53C2\u6570\u7684\u503C\u4FBF\u662F",(0,d.jsx)(n.code,{children:"1"}),"\uFF1B\u5728\u8DEF\u7531",(0,d.jsx)(n.code,{children:"/user/100"}),"\u4E2D\uFF0C",(0,d.jsx)(n.code,{children:"id"}),"\u53C2\u6570\u7684\u503C\u4FBF\u662F",(0,d.jsx)(n.code,{children:"100"}),"\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u66F4\u65B0\u63A5\u53E3",children:"\u66F4\u65B0\u63A5\u53E3"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",metastring:'title="api/user/v1/user.go"',children:'// Status marks user status.\ntype Status int\n\nconst (\n    StatusOK       Status = 0 // User is OK.\n    StatusDisabled Status = 1 // User is disabled.\n)\n\ntype UpdateReq struct {\n    g.Meta `path:"/user/{id}" method:"put" tags:"User" summary:"Update user"`\n    Id     int64   `v:"required" dc:"user id"`\n    Name   *string `v:"length:3,10" dc:"user name"`\n    Age    *uint   `v:"between:18,200" dc:"user age"`\n    Status *Status `v:"in:0,1" dc:"user status"`\n}\ntype UpdateRes struct{}\n'})}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u8FD9\u91CC\uFF1A"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u6211\u4EEC\u8FD9\u91CC\u5B9A\u4E49\u4E86\u4E00\u4E2A\u7528\u6237\u72B6\u6001\u7C7B\u578B",(0,d.jsx)(n.code,{children:"Status"}),"\uFF0C\u91C7\u7528\u7684\u662F",(0,d.jsx)(n.code,{children:"Golang"}),"\u91CC\u9762\u7EA6\u5B9A\u4FD7\u6210\u7684",(0,d.jsx)(n.code,{children:"enums"}),"\u5B9A\u4E49\u65B9\u5F0F\u3002\u8FD9\u91CC\u5927\u5BB6\u4E86\u89E3\u5373\u53EF\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u5BF9",(0,d.jsx)(n.code,{children:"Status"}),"\u53C2\u6570\u7684\u6821\u9A8C\u4F7F\u7528\u4E86",(0,d.jsx)(n.code,{children:"in:0,1"}),"\u6821\u9A8C\u89C4\u5219\uFF0C\u8BE5\u89C4\u5219\u5C06\u4F1A\u6821\u9A8C\u4F20\u9012\u7684",(0,d.jsx)(n.code,{children:"Status"}),"\u7684\u503C\u5FC5\u9700\u662F\u6211\u4EEC\u5B9A\u4E49\u7684\u5E38\u91CF\u7684\u4E24\u4E2A\u503C",(0,d.jsx)(n.code,{children:"StatusOK/StatusDisabled"}),"\uFF0C\u5373",(0,d.jsx)(n.code,{children:"0/1"}),"\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u63A5\u53E3\u53C2\u6570\u6211\u4EEC\u4F7F\u7528\u4E86\u6307\u9488\u6765\u63A5\u6536\uFF0C\u76EE\u7684\u662F\u907F\u514D\u7C7B\u578B\u9ED8\u8BA4\u503C\u5BF9\u6211\u4EEC\u4FEE\u6539\u63A5\u53E3\u7684\u5F71\u54CD\u3002\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u5047\u5982",(0,d.jsx)(n.code,{children:"Status"}),"\u4E0D\u5B9A\u4E49\u4E3A\u6307\u9488\uFF0C\u90A3\u4E48\u5B83\u5C31\u4F1A\u6709\u9ED8\u8BA4\u503C",(0,d.jsx)(n.code,{children:"0"}),"\u7684\u5F71\u54CD\uFF0C\u90A3\u4E48\u5728\u5904\u7406\u903B\u8F91\u4E2D\uFF0C\u5F88\u96BE\u5224\u65AD\u5230\u5E95\u8C03\u7528\u7AEF\u6709\u6CA1\u6709\u4F20\u9012\u8BE5\u53C2\u6570\uFF0C\u662F\u5426\u8981\u771F\u6B63\u4FEE\u6539\u6570\u503C\u4E3A",(0,d.jsx)(n.code,{children:"0"}),"\u3002\u4F46\u6211\u4EEC\u4F7F\u7528\u6307\u9488\u540E\uFF0C\u5F53\u7528\u6237\u6CA1\u6709\u4F20\u9012\u8BE5\u53C2\u6570\u65F6\uFF0C\u8BE5\u53C2\u6570\u7684\u9ED8\u8BA4\u503C\u5C31\u662F",(0,d.jsx)(n.code,{children:"nil"}),"\uFF0C\u5904\u7406\u903B\u8F91\u4FBF\u5F88\u597D\u505A\u5224\u65AD\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u67E5\u8BE2\u63A5\u53E3\u5355\u4E2A",children:"\u67E5\u8BE2\u63A5\u53E3\uFF08\u5355\u4E2A\uFF09"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",metastring:'title="api/user/v1/user.go"',children:'type GetOneReq struct {\n    g.Meta `path:"/user/{id}" method:"get" tags:"User" summary:"Get one user"`\n    Id     int64 `v:"required" dc:"user id"`\n}\ntype GetOneRes struct {\n    *entity.User `dc:"user"`\n}\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u8FD9\u91CC\u7684\u8FD4\u56DE\u7ED3\u679C\u6211\u4EEC\u4F7F\u7528\u4E86",(0,d.jsx)(n.code,{children:"*entity.User"}),"\u7ED3\u6784\u4F53\uFF0C\u8BE5\u7ED3\u6784\u662F\u524D\u9762\u6211\u4EEC\u901A\u8FC7",(0,d.jsx)(n.code,{children:"make dao"}),"\u547D\u4EE4\u751F\u6210\u7684",(0,d.jsx)(n.code,{children:"entity"}),"\uFF0C\u8BE5\u6570\u636E\u7ED3\u6784\u4E0E\u6570\u636E\u8868\u5B57\u6BB5\u4E00\u4E00\u5BF9\u5E94\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u67E5\u8BE2\u63A5\u53E3\u5217\u8868",children:"\u67E5\u8BE2\u63A5\u53E3\uFF08\u5217\u8868\uFF09"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",metastring:'title="api/user/v1/user.go"',children:'type GetListReq struct {\n    g.Meta `path:"/user" method:"get" tags:"User" summary:"Get users"`\n    Age    *uint   `v:"between:18,200" dc:"user age"`\n    Status *Status `v:"in:0,1" dc:"user age"`\n}\ntype GetListRes struct {\n    List []*entity.User `json:"list" dc:"user list"`\n}\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u8BE5\u63A5\u53E3\u53EF\u4EE5\u6839\u636E",(0,d.jsx)(n.code,{children:"Age"}),"\u548C",(0,d.jsx)(n.code,{children:"Status"}),"\u8FDB\u884C\u67E5\u8BE2\uFF0C\u8FD4\u56DE\u7684\u662F\u591A\u6761\u8BB0\u5F55",(0,d.jsx)(n.code,{children:"List []*entity.User"}),"\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u5B66\u4E60\u5C0F\u7ED3",children:"\u5B66\u4E60\u5C0F\u7ED3"}),"\n",(0,d.jsxs)(n.p,{children:["\u672C\u7AE0\u8282\u7684\u793A\u4F8B\u6E90\u7801\uFF1A",(0,d.jsx)(n.a,{href:"https://github.com/gogf/quick-demo/blob/main/api/user/v1/user.go",children:"https://github.com/gogf/quick-demo/blob/main/api/user/v1/user.go"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u53EF\u4EE5\u770B\u5230\uFF0C\u5728",(0,d.jsx)(n.code,{children:"GoFrame"}),"\u6846\u67B6\u7684\u811A\u624B\u67B6\u9879\u76EE\u5B9A\u4E49",(0,d.jsx)(n.code,{children:"api"}),"\u63A5\u53E3\u76F8\u5F53\u4F18\u96C5\uFF0C\u5E76\u4E14\u652F\u6301\u81EA\u52A8\u7684\u6570\u636E\u6821\u9A8C\u3001\u5143\u6570\u636E\u6CE8\u5165\u3001\u7075\u6D3B\u7684\u8DEF\u7531\u914D\u7F6E\u7B49\u5B9E\u7528\u7279\u6027\u3002\u8FD9\u79CD\u63A5\u53E3\u5B9A\u4E49\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u81EA\u52A8\u5316\u5730\u751F\u6210\u63A5\u53E3\u6587\u6863\uFF0C\u4EE3\u7801\u5373\u6587\u6863\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u4FDD\u8BC1\u4EE3\u7801\u548C\u6587\u6863\u7684\u4E00\u81F4\u6027\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5E76\u4E14\uFF0C\u8FD9\u8FD8\u5E76\u4E0D\u662F",(0,d.jsx)(n.code,{children:"GoFrame"}),"\u9B45\u529B\u7684\u5168\u90E8\uFF0C\u53EA\u662F\u73AB\u7470\u4E0A\u7684\u4E00\u7247\u82B1\u74E3\u3002\u4E0B\u4E00\u6B65\uFF0C\u6211\u4EEC\u5C06\u4F7F\u7528\u811A\u624B\u67B6\u5DE5\u5177\uFF0C\u81EA\u52A8\u5316\u5730\u5E2E\u6211\u4EEC\u751F\u6210\u5BF9\u5E94\u7684",(0,d.jsx)(n.code,{children:"controller"}),"\u63A7\u5236\u4EE3\u7801\u3002"]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},682505:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/QQ_1732094808338-5f9ffafa066a9807c0f608bb42264581.png"},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return r}});var i=s(667294);let d={},t=i.createContext(d);function r(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);