"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["77211"],{745030:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>i,default:()=>h,assets:()=>d,toc:()=>c,frontMatter:()=>a});var r=JSON.parse('{"id":"docs/WEB\u670D\u52A1\u5F00\u53D1/\u8BF7\u6C42\u8F93\u5165/\u8BF7\u6C42\u8F93\u5165-JSONXML","title":"\u8BF7\u6C42\u8F93\u5165-JSON/XML","description":"GoFrame\u6846\u67B6\u5BF9JSON\u548CXML\u6570\u636E\u683C\u5F0F\u7684\u539F\u751F\u652F\u6301\uFF0C\u8BE6\u7EC6\u63CF\u8FF0\u4E86\u5982\u4F55\u901A\u8FC7GoFrame\u6846\u67B6\u7684Request\u5BF9\u8C61\u6765\u5904\u7406\u5BA2\u6237\u7AEF\u63D0\u4EA4\u7684\u6570\u636E\u683C\u5F0F\uFF0C\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\u3002\u6587\u6863\u4E2D\u5305\u62EC\u793A\u4F8B\u4EE3\u7801\u6F14\u793A\u5982\u4F55\u89E3\u6790\u548C\u9A8C\u8BC1\u63D0\u4EA4\u7684\u6570\u636E\uFF0C\u4EE5\u53CA\u5982\u4F55\u8FDB\u884C\u6570\u636E\u683C\u5F0F\u8F6C\u6362\uFF0C\u4E3A\u5F00\u53D1\u8005\u63D0\u4F9B\u4E86\u4FBF\u6377\u7684\u6570\u636E\u83B7\u53D6\u548C\u5904\u7406\u80FD\u529B\u3002","source":"@site/versioned_docs/version-2.7.x/docs/WEB\u670D\u52A1\u5F00\u53D1/\u8BF7\u6C42\u8F93\u5165/\u8BF7\u6C42\u8F93\u5165-JSONXML.md","sourceDirName":"docs/WEB\u670D\u52A1\u5F00\u53D1/\u8BF7\u6C42\u8F93\u5165","slug":"/docs/web/request-json-xml-parameter","permalink":"/en/2.7.x/docs/web/request-json-xml-parameter","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/WEB\u670D\u52A1\u5F00\u53D1/\u8BF7\u6C42\u8F93\u5165/\u8BF7\u6C42\u8F93\u5165-JSONXML.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":3,"frontMatter":{"slug":"/docs/web/request-json-xml-parameter","title":"\u8BF7\u6C42\u8F93\u5165-JSON/XML","sidebar_position":3,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","\u8BF7\u6C42\u8F93\u5165","JSON","XML","\u6570\u636E\u683C\u5F0F","GoFrame\u6587\u6863","\u6570\u636E\u9A8C\u8BC1","\u63A5\u53E3\u5F00\u53D1","web\u6846\u67B6"],"description":"GoFrame\u6846\u67B6\u5BF9JSON\u548CXML\u6570\u636E\u683C\u5F0F\u7684\u539F\u751F\u652F\u6301\uFF0C\u8BE6\u7EC6\u63CF\u8FF0\u4E86\u5982\u4F55\u901A\u8FC7GoFrame\u6846\u67B6\u7684Request\u5BF9\u8C61\u6765\u5904\u7406\u5BA2\u6237\u7AEF\u63D0\u4EA4\u7684\u6570\u636E\u683C\u5F0F\uFF0C\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\u3002\u6587\u6863\u4E2D\u5305\u62EC\u793A\u4F8B\u4EE3\u7801\u6F14\u793A\u5982\u4F55\u89E3\u6790\u548C\u9A8C\u8BC1\u63D0\u4EA4\u7684\u6570\u636E\uFF0C\u4EE5\u53CA\u5982\u4F55\u8FDB\u884C\u6570\u636E\u683C\u5F0F\u8F6C\u6362\uFF0C\u4E3A\u5F00\u53D1\u8005\u63D0\u4F9B\u4E86\u4FBF\u6377\u7684\u6570\u636E\u83B7\u53D6\u548C\u5904\u7406\u80FD\u529B\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u8BF7\u6C42\u8F93\u5165-\u8BF7\u6C42\u6821\u9A8C","permalink":"/en/2.7.x/docs/web/request-validation"},"next":{"title":"\u8BF7\u6C42\u8F93\u5165-\u9ED8\u8BA4\u503C\u7ED1\u5B9A","permalink":"/en/2.7.x/docs/web/request-default-value"}}'),o=s("785893"),t=s("250065");let a={slug:"/docs/web/request-json-xml-parameter",title:"\u8BF7\u6C42\u8F93\u5165-JSON/XML",sidebar_position:3,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","\u8BF7\u6C42\u8F93\u5165","JSON","XML","\u6570\u636E\u683C\u5F0F","GoFrame\u6587\u6863","\u6570\u636E\u9A8C\u8BC1","\u63A5\u53E3\u5F00\u53D1","web\u6846\u67B6"],description:"GoFrame\u6846\u67B6\u5BF9JSON\u548CXML\u6570\u636E\u683C\u5F0F\u7684\u539F\u751F\u652F\u6301\uFF0C\u8BE6\u7EC6\u63CF\u8FF0\u4E86\u5982\u4F55\u901A\u8FC7GoFrame\u6846\u67B6\u7684Request\u5BF9\u8C61\u6765\u5904\u7406\u5BA2\u6237\u7AEF\u63D0\u4EA4\u7684\u6570\u636E\u683C\u5F0F\uFF0C\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\u3002\u6587\u6863\u4E2D\u5305\u62EC\u793A\u4F8B\u4EE3\u7801\u6F14\u793A\u5982\u4F55\u89E3\u6790\u548C\u9A8C\u8BC1\u63D0\u4EA4\u7684\u6570\u636E\uFF0C\u4EE5\u53CA\u5982\u4F55\u8FDB\u884C\u6570\u636E\u683C\u5F0F\u8F6C\u6362\uFF0C\u4E3A\u5F00\u53D1\u8005\u63D0\u4F9B\u4E86\u4FBF\u6377\u7684\u6570\u636E\u83B7\u53D6\u548C\u5904\u7406\u80FD\u529B\u3002"},i=void 0,d={},c=[{value:"\u793A\u4F8B1\uFF0C\u7B80\u5355\u793A\u4F8B",id:"\u793A\u4F8B1\u7B80\u5355\u793A\u4F8B",level:2},{value:"\u793A\u4F8B2\uFF0C\u5BF9\u8C61\u8F6C\u6362\u53CA\u6821\u9A8C",id:"\u793A\u4F8B2\u5BF9\u8C61\u8F6C\u6362\u53CA\u6821\u9A8C",level:2}];function l(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["\u4ECE ",(0,o.jsx)(n.code,{children:"GoFrame v1.11"})," \u7248\u672C\u5F00\u59CB\uFF0C ",(0,o.jsx)(n.code,{children:"Request"})," \u5BF9\u8C61\u63D0\u4F9B\u4E86\u5BF9\u5BA2\u6237\u7AEF\u63D0\u4EA4\u7684 ",(0,o.jsx)(n.code,{children:"JSON/XML"})," \u6570\u636E\u683C\u5F0F\u7684\u539F\u751F\u652F\u6301\uFF0C\u4E3A\u5F00\u53D1\u8005\u63D0\u4F9B\u4E86\u66F4\u4FBF\u6377\u7684\u6570\u636E\u83B7\u53D6\u7279\u6027\uFF0C\u4EE5\u8FDB\u4E00\u6B65\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\u3002"]}),"\n",(0,o.jsx)(n.h2,{id:"\u793A\u4F8B1\u7B80\u5355\u793A\u4F8B",children:"\u793A\u4F8B1\uFF0C\u7B80\u5355\u793A\u4F8B"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/", func(r *ghttp.Request) {\n        r.Response.Writef("name: %v, pass: %v", r.Get("name"), r.Get("pass"))\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u6267\u884C\u540E\uFF0C\u6211\u4EEC\u901A\u8FC7 ",(0,o.jsx)(n.code,{children:"curl"})," \u5DE5\u5177\u63D0\u4EA4\u6570\u636E\u6765\u6D4B\u8BD5\u4E00\u4E0B\uFF1A"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Query"})," \u6570\u636E\u683C\u5F0F"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'$ curl "http://127.0.0.1:8199/?name=john&pass=123"\nname: john, pass: 123\n'})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Form"})," \u8868\u5355\u63D0\u4EA4"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'$ curl -d "name=john&pass=123" "http://127.0.0.1:8199/"\nname: john, pass: 123\n'})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"JSON"})," \u6570\u636E\u683C\u5F0F"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'$ curl -d \'{"name":"john","pass":"123"}\' "http://127.0.0.1:8199/"\nname: john, pass: 123\n'})}),"\n",(0,o.jsxs)(n.ol,{start:"4",children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"XML"})," \u6570\u636E\u683C\u5F0F"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'$ curl -d \'<?xml version="1.0" encoding="UTF-8"?><doc><name>john</name><pass>123</pass></doc>\' "http://127.0.0.1:8199/"\nname: john, pass: 123\n\n\n$ curl -d \'<doc><name>john</name><pass>123</pass></doc>\' "http://127.0.0.1:8199/"\nname: john, pass: 123\n'})}),"\n",(0,o.jsx)(n.h2,{id:"\u793A\u4F8B2\u5BF9\u8C61\u8F6C\u6362\u53CA\u6821\u9A8C",children:"\u793A\u4F8B2\uFF0C\u5BF9\u8C61\u8F6C\u6362\u53CA\u6821\u9A8C"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n    "github.com/gogf/gf/v2/util/gvalid"\n)\n\ntype RegisterReq struct {\n    Name  string `p:"username"  v:"required|length:6,30#\u8BF7\u8F93\u5165\u8D26\u53F7|\u8D26\u53F7\u957F\u5EA6\u4E3A:{min}\u5230:{max}\u4F4D"`\n    Pass  string `p:"password1" v:"required|length:6,30#\u8BF7\u8F93\u5165\u5BC6\u7801|\u5BC6\u7801\u957F\u5EA6\u4E0D\u591F"`\n    Pass2 string `p:"password2" v:"required|length:6,30|same:password1#\u8BF7\u786E\u8BA4\u5BC6\u7801|\u5BC6\u7801\u957F\u5EA6\u4E0D\u591F|\u4E24\u6B21\u5BC6\u7801\u4E0D\u4E00\u81F4"`\n}\n\ntype RegisterRes struct {\n    Code  int         `json:"code"`\n    Error string      `json:"error"`\n    Data  interface{} `json:"data"`\n}\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/register", func(r *ghttp.Request) {\n        var req *RegisterReq\n        if err := r.Parse(&req); err != nil {\n            // Validation error.\n            if v, ok := err.(gvalid.Error); ok {\n                r.Response.WriteJsonExit(RegisterRes{\n                    Code:  1,\n                    Error: v.FirstString(),\n                })\n            }\n            // Other error.\n            r.Response.WriteJsonExit(RegisterRes{\n                Code:  1,\n                Error: err.Error(),\n            })\n        }\n        // ...\n        r.Response.WriteJsonExit(RegisterRes{\n            Data: req,\n        })\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u6267\u884C\u540E\uFF0C\u6211\u4EEC\u901A\u8FC7 ",(0,o.jsx)(n.code,{children:"curl"})," \u5DE5\u5177\u63D0\u4EA4\u6570\u636E\u6765\u6D4B\u8BD5\u4E00\u4E0B\uFF1A"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"JSON"})," \u6570\u636E\u683C\u5F0F"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'$ curl -d \'{"username":"johngcn","password1":"123456","password2":"123456"}\' "http://127.0.0.1:8199/register"\n{"code":0,"error":"","data":{"Name":"johngcn","Pass":"123456","Pass2":"123456"}}\n\n\n$ curl -d \'{"username":"johngcn","password1":"123456","password2":"1234567"}\' "http://127.0.0.1:8199/register"\n{"code":1,"error":"\u4E24\u6B21\u5BC6\u7801\u4E0D\u4E00\u81F4","data":null}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u53EF\u4EE5\u770B\u5230\uFF0C\u6211\u4EEC\u63D0\u4EA4\u7684 ",(0,o.jsx)(n.code,{children:"JSON"})," \u5185\u5BB9\u4E5F\u88AB ",(0,o.jsx)(n.code,{children:"Parse"})," \u65B9\u6CD5\u667A\u80FD\u5730\u8F6C\u6362\u4E3A\u4E86\u7ED3\u6784\u4F53\u5BF9\u8C61\u3002"]}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"XML"})," \u6570\u636E\u683C\u5F0F"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'$ curl -d \'<?xml version="1.0" encoding="UTF-8"?><doc><username>johngcn</username><password1>123456</password1><password2>123456</password2></doc>\' "http://127.0.0.1:8199/register"\n{"code":0,"error":"","data":{"Name":"johngcn","Pass":"123456","Pass2":"123456"}}\n\n\n$ curl -d \'<?xml version="1.0" encoding="UTF-8"?><doc><username>johngcn</username><password1>123456</password1><password2>1234567</password2></doc>\' "http://127.0.0.1:8199/register"\n{"code":1,"error":"\u4E24\u6B21\u5BC6\u7801\u4E0D\u4E00\u81F4","data":null}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u53EF\u4EE5\u770B\u5230\uFF0C\u6211\u4EEC\u63D0\u4EA4\u7684 ",(0,o.jsx)(n.code,{children:"XML"})," \u5185\u5BB9\u4E5F\u88AB ",(0,o.jsx)(n.code,{children:"Parse"})," \u65B9\u6CD5\u667A\u80FD\u5730\u8F6C\u6362\u4E3A\u4E86\u7ED3\u6784\u4F53\u5BF9\u8C61\u3002"]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return a}});var r=s(667294);let o={},t=r.createContext(o);function a(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);