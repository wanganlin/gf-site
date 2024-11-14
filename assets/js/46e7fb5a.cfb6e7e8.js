"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["36487"],{841302:function(e,r,n){n.r(r),n.d(r,{metadata:()=>o,contentTitle:()=>l,default:()=>a,assets:()=>g,toc:()=>s,frontMatter:()=>c});var o=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6-Writer\u63A5\u53E3","title":"\u65E5\u5FD7\u7EC4\u4EF6-Writer\u63A5\u53E3","description":"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528glog\u6A21\u5757\u7684Writer\u63A5\u53E3\u6765\u81EA\u5B9A\u4E49\u65E5\u5FD7\u8F93\u51FA\u3002\u901A\u8FC7\u5B9E\u73B0\u81EA\u5B9A\u4E49Writer\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u7075\u6D3B\u5730\u5C06\u65E5\u5FD7\u8F93\u51FA\u5230\u4E0D\u540C\u7684\u76EE\u6807\u5982\u6587\u4EF6\u3001\u6807\u51C6\u8F93\u51FA\u548CGraylog\u7B49\u3002\u6B64\u5916\uFF0C\u8FD8\u63D0\u4F9B\u4E86\u793A\u4F8B\u4EE3\u7801\u8BF4\u660E\u5982\u4F55\u5B9E\u73B0\u65E5\u5FD7HOOK\u529F\u80FD\uFF0C\u4EE5\u4FBF\u53CA\u65F6\u5C06\u4E25\u91CD\u9519\u8BEF\u901A\u77E5\u5230\u76D1\u63A7\u670D\u52A1\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u6838\u5FC3\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6-Writer\u63A5\u53E3.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6","slug":"/docs/core/glog-writer","permalink":"/2.7.x/docs/core/glog-writer","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u6838\u5FC3\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6-Writer\u63A5\u53E3.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731511511000,"sidebarPosition":11,"frontMatter":{"slug":"/docs/core/glog-writer","title":"\u65E5\u5FD7\u7EC4\u4EF6-Writer\u63A5\u53E3","sidebar_position":11,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","\u65E5\u5FD7\u7EC4\u4EF6","Writer\u63A5\u53E3","\u65E5\u5FD7\u81EA\u5B9A\u4E49\u8F93\u51FA","\u81EA\u5B9A\u4E49Writer","glog\u6A21\u5757","\u65E5\u5FD7HOOK","graylog","\u96C6\u4E2D\u5F0F\u65E5\u5FD7\u7BA1\u7406"],"description":"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528glog\u6A21\u5757\u7684Writer\u63A5\u53E3\u6765\u81EA\u5B9A\u4E49\u65E5\u5FD7\u8F93\u51FA\u3002\u901A\u8FC7\u5B9E\u73B0\u81EA\u5B9A\u4E49Writer\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u7075\u6D3B\u5730\u5C06\u65E5\u5FD7\u8F93\u51FA\u5230\u4E0D\u540C\u7684\u76EE\u6807\u5982\u6587\u4EF6\u3001\u6807\u51C6\u8F93\u51FA\u548CGraylog\u7B49\u3002\u6B64\u5916\uFF0C\u8FD8\u63D0\u4F9B\u4E86\u793A\u4F8B\u4EE3\u7801\u8BF4\u660E\u5982\u4F55\u5B9E\u73B0\u65E5\u5FD7HOOK\u529F\u80FD\uFF0C\u4EE5\u4FBF\u53CA\u65F6\u5C06\u4E25\u91CD\u9519\u8BEF\u901A\u77E5\u5230\u76D1\u63A7\u670D\u52A1\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u65E5\u5FD7\u7EC4\u4EF6-\u8C03\u8BD5\u4FE1\u606F","permalink":"/2.7.x/docs/core/glog-debug"},"next":{"title":"\u65E5\u5FD7\u7EC4\u4EF6-Flags\u7279\u6027","permalink":"/2.7.x/docs/core/glog-flags"}}'),t=n("785893"),i=n("250065");let c={slug:"/docs/core/glog-writer",title:"\u65E5\u5FD7\u7EC4\u4EF6-Writer\u63A5\u53E3",sidebar_position:11,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","\u65E5\u5FD7\u7EC4\u4EF6","Writer\u63A5\u53E3","\u65E5\u5FD7\u81EA\u5B9A\u4E49\u8F93\u51FA","\u81EA\u5B9A\u4E49Writer","glog\u6A21\u5757","\u65E5\u5FD7HOOK","graylog","\u96C6\u4E2D\u5F0F\u65E5\u5FD7\u7BA1\u7406"],description:"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528glog\u6A21\u5757\u7684Writer\u63A5\u53E3\u6765\u81EA\u5B9A\u4E49\u65E5\u5FD7\u8F93\u51FA\u3002\u901A\u8FC7\u5B9E\u73B0\u81EA\u5B9A\u4E49Writer\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u7075\u6D3B\u5730\u5C06\u65E5\u5FD7\u8F93\u51FA\u5230\u4E0D\u540C\u7684\u76EE\u6807\u5982\u6587\u4EF6\u3001\u6807\u51C6\u8F93\u51FA\u548CGraylog\u7B49\u3002\u6B64\u5916\uFF0C\u8FD8\u63D0\u4F9B\u4E86\u793A\u4F8B\u4EE3\u7801\u8BF4\u660E\u5982\u4F55\u5B9E\u73B0\u65E5\u5FD7HOOK\u529F\u80FD\uFF0C\u4EE5\u4FBF\u53CA\u65F6\u5C06\u4E25\u91CD\u9519\u8BEF\u901A\u77E5\u5230\u76D1\u63A7\u670D\u52A1\u3002"},l=void 0,g={},s=[{value:"\u81EA\u5B9A\u4E49 <code>Writer</code> \u63A5\u53E3",id:"\u81EA\u5B9A\u4E49-writer-\u63A5\u53E3",level:2},{value:"\u793A\u4F8B1\uFF0C\u5B9E\u73B0\u65E5\u5FD7 <code>HOOK</code>",id:"\u793A\u4F8B1\u5B9E\u73B0\u65E5\u5FD7-hook",level:2},{value:"\u793A\u4F8B2\uFF0C\u6574\u5408 <code>graylog</code>",id:"\u793A\u4F8B2\u6574\u5408-graylog",level:2}];function d(e){let r={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"Writer"})," \u63A5\u53E3\u662F\u6700\u5E95\u5C42\u7684 ",(0,t.jsx)(r.code,{children:"IO"})," \u5199\u5165\u63A5\u53E3\uFF0C\u5982\u679C\u4E1A\u52A1\u9700\u8981\u81EA\u5B9A\u4E49\u65E5\u5FD7\u5185\u5BB9\u6253\u5370\uFF0C\u5EFA\u8BAE\u4F7F\u7528 ",(0,t.jsx)(r.code,{children:"Handler"})," \u7279\u6027\uFF0C\u53C2\u8003\u7AE0\u8282\uFF1A ",(0,t.jsx)(r.a,{href:"/2.7.x/docs/core/glog-handler",children:"\u65E5\u5FD7\u7EC4\u4EF6-Handler"})]})}),"\n",(0,t.jsxs)(r.h2,{id:"\u81EA\u5B9A\u4E49-writer-\u63A5\u53E3",children:["\u81EA\u5B9A\u4E49 ",(0,t.jsx)(r.code,{children:"Writer"})," \u63A5\u53E3"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"glog"})," \u6A21\u5757\u5B9E\u73B0\u4E86\u6807\u51C6\u8F93\u51FA\u4EE5\u53CA\u6587\u4EF6\u8F93\u51FA\u7684\u65E5\u5FD7\u5185\u5BB9\u6253\u5370\u3002\u5F53\u7136\uFF0C\u5F00\u53D1\u8005\u4E5F\u53EF\u4EE5\u901A\u8FC7\u81EA\u5B9A\u4E49 ",(0,t.jsx)(r.code,{children:"io.Writer"})," \u63A5\u53E3\u5B9E\u73B0\u81EA\u5B9A\u4E49\u7684\u65E5\u5FD7\u5185\u5BB9\u8F93\u51FA\u3002 ",(0,t.jsx)(r.code,{children:"io.Writer"})," \u662F\u6807\u51C6\u5E93\u63D0\u4F9B\u7684\u5185\u5BB9\u8F93\u51FA\u63A5\u53E3\uFF0C\u5176\u5B9A\u4E49\u5982\u4E0B\uFF1A"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:"type Writer interface {\n    Write(p []byte) (n int, err error)\n}\n"})}),"\n",(0,t.jsxs)(r.p,{children:["\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 ",(0,t.jsx)(r.code,{children:"SetWriter"})," \u65B9\u6CD5\u6216\u8005\u94FE\u5F0F\u65B9\u6CD5 ",(0,t.jsx)(r.code,{children:"To"})," \u6765\u5B9E\u73B0\u81EA\u5B9A\u4E49 ",(0,t.jsx)(r.code,{children:"Writer"})," \u8F93\u51FA\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u5728\u8BE5 ",(0,t.jsx)(r.code,{children:"Writer"})," \u4E2D\u5B9E\u73B0\u5B9A\u4E49\u7684\u64CD\u4F5C\uFF0C\u4E5F\u53EF\u4EE5\u5728\u5176\u4E2D\u6574\u5408\u5176\u4ED6\u7684\u6A21\u5757\u529F\u80FD\u3002"]}),"\n",(0,t.jsxs)(r.p,{children:["\u6B64\u5916\uFF0C ",(0,t.jsx)(r.code,{children:"glog.Logger"})," \u5BF9\u8C61\u5DF2\u7ECF\u5B9E\u73B0\u4E86 ",(0,t.jsx)(r.code,{children:"io.Writer"})," \u63A5\u53E3\uFF0C\u56E0\u6B64\u5F00\u53D1\u8005\u53EF\u4EE5\u975E\u5E38\u65B9\u4FBF\u5730\u5C06 ",(0,t.jsx)(r.code,{children:"glog"})," \u6574\u5408\u4F7F\u7528\u5230\u5176\u4ED6\u7684\u6A21\u5757\u4E2D\u3002"]}),"\n",(0,t.jsxs)(r.h2,{id:"\u793A\u4F8B1\u5B9E\u73B0\u65E5\u5FD7-hook",children:["\u793A\u4F8B1\uFF0C\u5B9E\u73B0\u65E5\u5FD7 ",(0,t.jsx)(r.code,{children:"HOOK"})]}),"\n",(0,t.jsxs)(r.p,{children:["\u5728\u8BE5\u793A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u5B9E\u73B0\u4E86\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684 ",(0,t.jsx)(r.code,{children:"Writer"})," \u5BF9\u8C61 ",(0,t.jsx)(r.code,{children:"MyWriter"}),"\uFF0C\u5728\u8BE5\u5BF9\u8C61\u5B9E\u73B0\u7684 ",(0,t.jsx)(r.code,{children:"Writer"})," \u63A5\u53E3\u4E2D\u6211\u4EEC\u5BF9\u65E5\u5FD7\u5185\u5BB9\u8FDB\u884C\u5224\u65AD\uFF0C\u5982\u679C\u51FA\u73B0\u4E86 ",(0,t.jsx)(r.code,{children:"PANI"})," \u6216\u8005 ",(0,t.jsx)(r.code,{children:"FATA"})," \u9519\u8BEF\uFF0C\u90A3\u4E48\u8868\u793A\u662F\u975E\u5E38\u4E25\u91CD\u7684\u9519\u8BEF\uFF0C\u8BE5\u63A5\u53E3\u5C06\u4F1A\u7B2C\u4E00\u65F6\u95F4\u901A\u8FC7 ",(0,t.jsx)(r.code,{children:"HTTP"})," \u63A5\u53E3\u544A\u77E5 ",(0,t.jsx)(r.code,{children:"Monitor"})," \u76D1\u63A7\u670D\u52A1\u3002\u968F\u540E\u518D\u5C06\u65E5\u5FD7\u5185\u5BB9\u901A\u8FC7 ",(0,t.jsx)(r.code,{children:"glog"})," \u6A21\u5757\u6309\u7167\u914D\u7F6E\u5199\u5165\u5230\u6587\u4EF6\u548C\u6807\u51C6\u8F93\u51FA\u3002"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "fmt"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n    "github.com/gogf/gf/v2/os/glog"\n    "github.com/gogf/gf/v2/text/gregex"\n)\n\ntype MyWriter struct {\n    logger *glog.Logger\n}\n\nfunc (w *MyWriter) Write(p []byte) (n int, err error) {\n    var (\n        s   = string(p)\n        ctx = context.Background()\n    )\n    if gregex.IsMatchString(`PANI|FATA`, s) {\n        fmt.Println("SERIOUS ISSUE OCCURRED!! I\'d better tell monitor in first time!")\n        g.Client().PostContent(ctx, "http://monitor.mydomain.com", s)\n    }\n    return w.logger.Write(p)\n}\n\nfunc main() {\n    var ctx = context.Background()\n    glog.SetWriter(&MyWriter{\n        logger: glog.New(),\n    })\n    glog.Fatal(ctx, "FATAL ERROR")\n}\n'})}),"\n",(0,t.jsx)(r.p,{children:"\u6267\u884C\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-html",children:"SERIOUS ISSUE OCCURRED!! I'd better tell monitor in first time!\n2019-05-23 20:14:49.374 [FATA] FATAL ERROR\nStack:\n1. /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/geg/os/glog/glog_writer_hook.go:27\n"})}),"\n",(0,t.jsxs)(r.h2,{id:"\u793A\u4F8B2\u6574\u5408-graylog",children:["\u793A\u4F8B2\uFF0C\u6574\u5408 ",(0,t.jsx)(r.code,{children:"graylog"})]}),"\n",(0,t.jsxs)(r.p,{children:["\u5047\u5982\u6211\u4EEC\u9700\u8981\u8F93\u51FA\u65E5\u5FD7\u5230\u6587\u4EF6\u53CA\u6807\u51C6\u8F93\u51FA\uFF0C\u5E76\u4E14\u540C\u65F6\u4E5F\u9700\u8981\u8F93\u51FA\u65E5\u5FD7\u5230 ",(0,t.jsx)(r.code,{children:"Graylog"}),"\uFF0C\u5F88\u660E\u663E\u8FD9\u4E2A\u4E5F\u662F\u9700\u8981\u81EA\u5B9A\u4E49 ",(0,t.jsx)(r.code,{children:"Writer"})," \u624D\u80FD\u5B9E\u73B0\u3002\u5F53\u7136\u540C\u7406\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u81EA\u5B9A\u4E49\u8F93\u51FA\u5230\u5176\u4ED6\u7684\u65E5\u5FD7\u6536\u96C6\u7EC4\u4EF6\u6216\u8005\u6570\u636E\u5E93\u4E2D\u3002"]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"Graylog"})," \u662F\u4E0E ",(0,t.jsx)(r.code,{children:"ELK"})," \u53EF\u4EE5\u76F8\u63D0\u5E76\u8BBA\u7684\u4E00\u6B3E\u96C6\u4E2D\u5F0F\u65E5\u5FD7\u7BA1\u7406\u65B9\u6848\uFF0C\u652F\u6301\u6570\u636E\u6536\u96C6\u3001\u68C0\u7D22\u3001\u53EF\u89C6\u5316 ",(0,t.jsx)(r.code,{children:"Dashboard"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"\u793A\u4F8B\u4EE3\u7801\uFF1A"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n\n    "github.com/gogf/gf/v2/os/glog"\n    "github.com/robertkowalski/graylog-golang"\n)\n\ntype MyGrayLogWriter struct {\n    gelf    *gelf.Gelf\n    logger  *glog.Logger\n}\n\nfunc (w *MyGrayLogWriter) Write(p []byte) (n int, err error) {\n    w.gelf.Send(p)\n    return w.logger.Write(p)\n}\n\nfunc main() {\n    var ctx = context.Background()\n    glog.SetWriter(&MyGrayLogWriter{\n        logger : glog.New(),\n        gelf   : gelf.New(gelf.Config{\n            GraylogPort     : 80,\n            GraylogHostname : "graylog-host.com",\n            Connection      : "wan",\n            MaxChunkSizeWan : 42,\n            MaxChunkSizeLan : 1337,\n        }),\n    })\n    glog.Println(ctx, "test log")\n}\n'})})]})}function a(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return l},a:function(){return c}});var o=n(667294);let t={},i=o.createContext(t);function c(e){let r=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),o.createElement(i.Provider,{value:r},e.children)}}}]);