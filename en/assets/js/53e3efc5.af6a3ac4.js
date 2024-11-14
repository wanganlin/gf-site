"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["22896"],{883257:function(e,n,r){r.r(n),r.d(n,{metadata:()=>c,contentTitle:()=>t,default:()=>a,assets:()=>l,toc:()=>o,frontMatter:()=>s});var c=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u94FE\u8DEF\u8DDF\u8E2A/\u94FE\u8DEF\u8DDF\u8E2A-\u80CC\u666F\u77E5\u8BC6","title":"\u94FE\u8DEF\u8DDF\u8E2A-\u80CC\u666F\u77E5\u8BC6","description":"\u4E00\u3001OpenTelemetry","source":"@site/versioned_docs/version-2.2.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u94FE\u8DEF\u8DDF\u8E2A/\u94FE\u8DEF\u8DDF\u8E2A-\u80CC\u666F\u77E5\u8BC6.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u94FE\u8DEF\u8DDF\u8E2A","slug":"/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u94FE\u8DEF\u8DDF\u8E2A/\u94FE\u8DEF\u8DDF\u8E2A-\u80CC\u666F\u77E5\u8BC6","permalink":"/en/2.2.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u94FE\u8DEF\u8DDF\u8E2A/\u94FE\u8DEF\u8DDF\u8E2A-\u80CC\u666F\u77E5\u8BC6","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.2.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u94FE\u8DEF\u8DDF\u8E2A/\u94FE\u8DEF\u8DDF\u8E2A-\u80CC\u666F\u77E5\u8BC6.md","tags":[],"version":"2.2.x","lastUpdatedBy":"John","lastUpdatedAt":1730727129000,"sidebarPosition":0,"frontMatter":{"title":"\u94FE\u8DEF\u8DDF\u8E2A-\u80CC\u666F\u77E5\u8BC6","sidebar_position":0,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u94FE\u8DEF\u8DDF\u8E2A","permalink":"/en/2.2.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u94FE\u8DEF\u8DDF\u8E2A/"},"next":{"title":"\u94FE\u8DEF\u8DDF\u8E2A-\u51C6\u5907\u5DE5\u4F5C","permalink":"/en/2.2.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u94FE\u8DEF\u8DDF\u8E2A/\u94FE\u8DEF\u8DDF\u8E2A-\u51C6\u5907\u5DE5\u4F5C"}}'),i=r("785893"),d=r("250065");let s={title:"\u94FE\u8DEF\u8DDF\u8E2A-\u80CC\u666F\u77E5\u8BC6",sidebar_position:0,hide_title:!0},t=void 0,l={},o=[{value:"\u4E00\u3001OpenTelemetry",id:"\u4E00opentelemetry",level:2},{value:"\u4E8C\u3001\u91CD\u8981\u6982\u5FF5",id:"\u4E8C\u91CD\u8981\u6982\u5FF5",level:2},{value:"TracerProvider",id:"tracerprovider",level:3},{value:"Tracer",id:"tracer",level:3},{value:"Span",id:"span",level:3},{value:"Attributes",id:"attributes",level:3},{value:"Events",id:"events",level:3},{value:"SpanContext",id:"spancontext",level:3},{value:"Propagator",id:"propagator",level:3},{value:"\u4E09\u3001\u652F\u6301\u7EC4\u4EF6",id:"\u4E09\u652F\u6301\u7EC4\u4EF6",level:2},{value:"\u56DB\u3001\u53C2\u8003\u8D44\u6599",id:"\u56DB\u53C2\u8003\u8D44\u6599",level:2}];function h(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u4E00opentelemetry",children:"\u4E00\u3001OpenTelemetry"}),"\n",(0,i.jsxs)(n.p,{children:["\u5206\u5E03\u5F0F\u94FE\u8DEF\u8DDF\u8E2A\uFF08 ",(0,i.jsx)(n.code,{children:"          Distributed Tracing        "}),"\uFF09\u7684\u6982\u5FF5\u6700\u65E9\u662F\u7531 ",(0,i.jsx)(n.code,{children:"Google"})," \u63D0\u51FA\u6765\u7684\uFF0C\u53D1\u5C55\u81F3\u4ECA\u6280\u672F\u5DF2\u7ECF\u6BD4\u8F83\u6210\u719F\uFF0C\u4E5F\u662F\u6709\u4E00\u4E9B\u534F\u8BAE\u6807\u51C6\u53EF\u4EE5\u53C2\u8003\u3002\u76EE\u524D\u5728 ",(0,i.jsx)(n.code,{children:"Tracing"})," \u6280\u672F\u8FD9\u5757\u6BD4\u8F83\u6709\u5F71\u54CD\u529B\u7684\u662F\u4E24\u5927\u5F00\u6E90\u6280\u672F\u6846\u67B6\uFF1A ",(0,i.jsx)(n.code,{children:"Netflix"})," \u516C\u53F8\u5F00\u6E90\u7684 ",(0,i.jsx)(n.code,{children:"OpenTracing"})," \u548C ",(0,i.jsx)(n.code,{children:"Google"})," \u5F00\u6E90\u7684 ",(0,i.jsx)(n.code,{children:"OpenCensus"}),"\u3002\u4E24\u5927\u6846\u67B6\u90FD\u62E5\u6709\u6BD4\u8F83\u9AD8\u7684\u5F00\u53D1\u8005\u7FA4\u4F53\u3002\u4E3A\u5F62\u6210\u7EDF\u4E00\u7684\u6280\u672F\u6807\u51C6\uFF0C\u4E24\u5927\u6846\u67B6\u6700\u7EC8\u78E8\u5408\u6210\u7ACB\u4E86 ",(0,i.jsx)(n.code,{children:"OpenTelemetry"})," \u9879\u76EE\uFF0C\u7B80\u79F0 ",(0,i.jsx)(n.code,{children:"otel"}),"\u3002\u5177\u4F53\u53EF\u4EE5\u53C2\u8003\uFF1A"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://wiki.goframe.org/pages/viewpage.action?pageId=3673400",children:"OpenTracing\u4ECB\u7ECD"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://wiki.goframe.org/pages/viewpage.action?pageId=3673499",children:"OpenTelemetry\u4ECB\u7ECD"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u56E0\u6B64\uFF0C\u6211\u4EEC\u7684 ",(0,i.jsx)(n.code,{children:"Tracing"})," \u6280\u672F\u65B9\u6848\u4EE5 ",(0,i.jsx)(n.code,{children:"OpenTelemetry"})," \u4E3A\u5B9E\u65BD\u6807\u51C6\uFF0C\u534F\u8BAE\u6807\u51C6\u7684\u4E00\u4E9B ",(0,i.jsx)(n.code,{children:"Golang"})," \u5B9E\u73B0\u5F00\u6E90\u9879\u76EE\uFF1A"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/open-telemetry/opentelemetry-go",children:"https://github.com/open-telemetry/opentelemetry-go"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/open-telemetry/opentelemetry-go-contrib",children:"https://github.com/open-telemetry/opentelemetry-go-contrib"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5176\u4ED6\u7B2C\u4E09\u65B9\u7684\u6846\u67B6\u548C\u7CFB\u7EDF\uFF08\u5982 ",(0,i.jsx)(n.code,{children:"Jaeger/Prometheus/Grafana"})," \u7B49\uFF09\u4E5F\u4F1A\u6309\u7167\u6807\u51C6\u5316\u7684\u89C4\u8303\u6765\u5BF9\u63A5 ",(0,i.jsx)(n.code,{children:"OpenTelemetry"}),"\uFF0C\u4F7F\u5F97\u7CFB\u7EDF\u7684\u5F00\u53D1\u548C\u7EF4\u62A4\u6210\u672C\u5927\u5927\u964D\u4F4E\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(45682).Z+"",width:"800",height:"534"})}),"\n",(0,i.jsx)(n.h2,{id:"\u4E8C\u91CD\u8981\u6982\u5FF5",children:"\u4E8C\u3001\u91CD\u8981\u6982\u5FF5"}),"\n",(0,i.jsxs)(n.p,{children:["\u6211\u4EEC\u5148\u770B\u770B ",(0,i.jsx)(n.code,{children:"OpenTelemetry"})," \u7684\u67B6\u6784\u56FE\uFF0C\u6211\u4EEC\u8FD9\u91CC\u4E0D\u4F1A\u5B8C\u6574\u4ECB\u7ECD\uFF0C\u53EA\u4F1A\u4ECB\u7ECD\u5176\u4E2D\u5927\u5BB6\u5E38\u7528\u7684\u51E0\u4E2A\u6982\u5FF5\u3002\u5173\u4E8E ",(0,i.jsx)(n.code,{children:"OpenTelemetry"})," \u7684\u5185\u90E8\u6280\u672F\u67B6\u6784\u8BBE\u8BA1\u4ECB\u7ECD\uFF0C\u53EF\u4EE5\u53C2\u8003 ",(0,i.jsx)(n.a,{href:"https://wiki.goframe.org/pages/viewpage.action?pageId=3673512",children:"OpenTelemetry\u67B6\u6784"})," \uFF0C\u5173\u4E8E\u8BED\u4E49\u7EA6\u5B9A\u8BF7\u53C2\u8003\uFF1A ",(0,i.jsx)(n.a,{href:"https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/trace/api.md",children:"https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/trace/api.md"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://wiki.goframe.org/download/attachments/3673512/8fbc65f937aaac8c9b6947faa89a6964.png?version=1&modificationDate=1611217362937&api=v2",alt:""})}),"\n",(0,i.jsx)(n.h3,{id:"tracerprovider",children:"TracerProvider"}),"\n",(0,i.jsxs)(n.p,{children:["\u4E3B\u8981\u8D1F\u8D23\u521B\u5EFA ",(0,i.jsx)(n.code,{children:"Tracer"}),"\uFF0C\u4E00\u822C\u662F\u9700\u8981\u7B2C\u4E09\u65B9\u7684\u5206\u5E03\u5F0F\u94FE\u8DEF\u8DDF\u8E2A\u7BA1\u7406\u5E73\u53F0\u63D0\u4F9B\u5177\u4F53\u7684\u5B9E\u73B0\u3002\u9ED8\u8BA4\u60C5\u51B5\u662F\u4E00\u4E2A\u7A7A\u7684 ",(0,i.jsx)(n.code,{children:"TracerProvider (NoopTracerProvider)"}),"\uFF0C\u867D\u7136\u4E5F\u80FD\u521B\u5EFA ",(0,i.jsx)(n.code,{children:"Tracer"})," \u4F46\u662F\u5185\u90E8\u5176\u5B9E\u4E0D\u4F1A\u6267\u884C\u5177\u4F53\u7684\u6570\u636E\u6D41\u4F20\u8F93\u903B\u8F91\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"tracer",children:"Tracer"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Tracer"})," \u8868\u793A\u4E00\u6B21\u5B8C\u6574\u7684\u8FFD\u8E2A\u94FE\u8DEF\uFF0C ",(0,i.jsx)(n.code,{children:"tracer"})," \u7531\u4E00\u4E2A\u6216\u591A\u4E2A ",(0,i.jsx)(n.code,{children:"span"})," \u7EC4\u6210\u3002\u4E0B\u56FE\u793A\u4F8B\u8868\u793A\u4E86\u4E00\u4E2A\u7531 ",(0,i.jsx)(n.code,{children:"8"})," \u4E2A ",(0,i.jsx)(n.code,{children:"span"})," \u7EC4\u6210\u7684 ",(0,i.jsx)(n.code,{children:"tracer"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"        [Span A]  \u2190\u2190\u2190(the root span)\n            |\n     +------+------+\n     |             |\n [Span B]      [Span C] \u2190\u2190\u2190(Span C is a `ChildOf` Span A)\n     |             |\n [Span D]      +---+-------+\n               |           |\n           [Span E]    [Span F] >>> [Span G] >>> [Span H]\n                                       \u2191\n                                       \u2191\n                                       \u2191\n                         (Span G `FollowsFrom` Span F)\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u65F6\u95F4\u8F74\u7684\u5C55\u73B0\u65B9\u5F0F\u4F1A\u66F4\u5BB9\u6613\u7406\u89E3\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\u2013\u2013|\u2013\u2013\u2013\u2013\u2013\u2013\u2013|\u2013\u2013\u2013\u2013\u2013\u2013\u2013|\u2013\u2013\u2013\u2013\u2013\u2013\u2013|\u2013\u2013\u2013\u2013\u2013\u2013\u2013|\u2013\u2013\u2013\u2013\u2013\u2013\u2013|\u2013\u2013\u2013\u2013\u2013\u2013\u2013|\u2013\u2013\u2013\u2013\u2013\u2013\u2013|\u2013> time\n\n [Span A\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7]\n   [Span B\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7]\n      [Span D\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7]\n    [Span C\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7]\n         [Span E\xb7\xb7\xb7\xb7\xb7\xb7\xb7]        [Span F\xb7\xb7] [Span G\xb7\xb7] [Span H\xb7\xb7]\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6211\u4EEC\u901A\u5E38\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u521B\u5EFA\u4E00\u4E2A ",(0,i.jsx)(n.code,{children:"Tracer"}),"\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"gtrace.NewTracer(tracerName)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"span",children:"Span"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Span"})," \u662F\u4E00\u6761\u8FFD\u8E2A\u94FE\u8DEF\u4E2D\u7684\u57FA\u672C\u7EC4\u6210\u8981\u7D20\uFF0C\u4E00\u4E2A ",(0,i.jsx)(n.code,{children:"span"})," \u8868\u793A\u4E00\u4E2A\u72EC\u7ACB\u7684\u5DE5\u4F5C\u5355\u5143\uFF0C\u6BD4\u5982\u53EF\u4EE5\u8868\u793A\u4E00\u6B21\u51FD\u6570\u8C03\u7528\uFF0C\u4E00\u6B21 ",(0,i.jsx)(n.code,{children:"http"})," \u8BF7\u6C42\u7B49\u7B49\u3002 ",(0,i.jsx)(n.code,{children:"span"})," \u4F1A\u8BB0\u5F55\u5982\u4E0B\u57FA\u672C\u8981\u7D20:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u670D\u52A1\u540D\u79F0\uFF08 ",(0,i.jsx)(n.code,{children:"operation name"}),"\uFF09"]}),"\n",(0,i.jsx)(n.li,{children:"\u670D\u52A1\u7684\u5F00\u59CB\u65F6\u95F4\u548C\u7ED3\u675F\u65F6\u95F4"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"K/V"})," \u5F62\u5F0F\u7684 ",(0,i.jsx)(n.code,{children:"Tags"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"K/V"})," \u5F62\u5F0F\u7684 ",(0,i.jsx)(n.code,{children:"Logs"})]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"SpanContext"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Span"})," \u662F\u8FD9\u4E48\u591A\u5BF9\u8C61\u4E2D\u4F7F\u7528\u9891\u7387\u6700\u9AD8\u7684\uFF0C\u56E0\u6B64\u521B\u5EFA ",(0,i.jsx)(n.code,{children:"Span"})," \u4E5F\u975E\u5E38\u7B80\u4FBF\uFF0C\u4F8B\u5982\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"gtrace.NewSpan(ctx, spanName, opts...)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"attributes",children:"Attributes"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Attributes"})," \u4EE5 ",(0,i.jsx)(n.code,{children:"K/V"})," \u952E\u503C\u5BF9\u7684\u5F62\u5F0F\u4FDD\u5B58\u7528\u6237\u81EA\u5B9A\u4E49\u6807\u7B7E\uFF0C\u4E3B\u8981\u7528\u4E8E\u94FE\u8DEF\u8FFD\u8E2A\u7ED3\u679C\u7684\u67E5\u8BE2\u8FC7\u6EE4\u3002\u4F8B\u5982\uFF1A ",(0,i.jsx)(n.code,{children:'http.method="GET",http.status_code=200'}),"\u3002\u5176\u4E2D ",(0,i.jsx)(n.code,{children:"key"})," \u503C\u5FC5\u987B\u4E3A\u5B57\u7B26\u4E32\uFF0C ",(0,i.jsx)(n.code,{children:"value"})," \u5FC5\u987B\u662F\u5B57\u7B26\u4E32\uFF0C\u5E03\u5C14\u578B\u6216\u8005\u6570\u503C\u578B\u3002 ",(0,i.jsx)(n.code,{children:"span"})," \u4E2D\u7684 ",(0,i.jsx)(n.code,{children:"Attributes"})," \u4EC5\u81EA\u5DF1\u53EF\u89C1\uFF0C\u4E0D\u4F1A\u968F\u7740 ",(0,i.jsx)(n.code,{children:"SpanContext"})," \u4F20\u9012\u7ED9\u540E\u7EED ",(0,i.jsx)(n.code,{children:"span"}),"\u3002 \u8BBE\u7F6E ",(0,i.jsx)(n.code,{children:"Attributes"})," \u65B9\u5F0F\u4F8B\u5982\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'span.SetAttributes(\n    label.String("http.remote", conn.RemoteAddr().String()),\n    label.String("http.local", conn.LocalAddr().String()),\n)\n'})}),"\n",(0,i.jsx)(n.h3,{id:"events",children:"Events"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Events"})," \u4E0E ",(0,i.jsx)(n.code,{children:"Attributes"})," \u7C7B\u4F3C\uFF0C\u4E5F\u662F ",(0,i.jsx)(n.code,{children:"K/V"})," \u952E\u503C\u5BF9\u5F62\u5F0F\u3002\u4E0E ",(0,i.jsx)(n.code,{children:"Attributes"})," \u4E0D\u540C\u7684\u662F\uFF0C ",(0,i.jsx)(n.code,{children:"Events"})," \u8FD8\u4F1A\u8BB0\u5F55\u5199\u5165 ",(0,i.jsx)(n.code,{children:"Events"})," \u7684\u65F6\u95F4\uFF0C\u56E0\u6B64 ",(0,i.jsx)(n.code,{children:"Events"})," \u4E3B\u8981\u7528\u4E8E\u8BB0\u5F55\u67D0\u4E9B\u4E8B\u4EF6\u53D1\u751F\u7684\u65F6\u95F4\u3002 ",(0,i.jsx)(n.code,{children:"Events"})," \u7684 ",(0,i.jsx)(n.code,{children:"key"})," \u503C\u540C\u6837\u5FC5\u987B\u4E3A\u5B57\u7B26\u4E32\uFF0C\u4F46\u5BF9 ",(0,i.jsx)(n.code,{children:"value"})," \u7C7B\u578B\u5219\u6CA1\u6709\u9650\u5236\u3002\u4F8B\u5982\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'span.AddEvent("http.request", trace.WithAttributes(\n    label.Any("http.request.header", headers),\n    label.Any("http.request.baggage", gtrace.GetBaggageMap(ctx)),\n    label.String("http.request.body", bodyContent),\n))\n'})}),"\n",(0,i.jsx)(n.h3,{id:"spancontext",children:"SpanContext"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"SpanContext"})," \u643A\u5E26\u7740\u4E00\u4E9B\u7528\u4E8E ",(0,i.jsx)(n.strong,{children:"\u8DE8\u670D\u52A1\u901A\u4FE1\u7684\uFF08\u8DE8\u8FDB\u7A0B\uFF09"})," \u6570\u636E\uFF0C\u4E3B\u8981\u5305\u542B\uFF1A"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u8DB3\u591F\u5728\u7CFB\u7EDF\u4E2D\u6807\u8BC6\u8BE5 ",(0,i.jsx)(n.code,{children:"span"})," \u7684\u4FE1\u606F\uFF0C\u6BD4\u5982\uFF1A ",(0,i.jsx)(n.code,{children:"span_id, trace_id"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Baggage"})," -\xa0\u4E3A\u6574\u6761\u8FFD\u8E2A\u8FDE\u4FDD\u5B58\u8DE8\u670D\u52A1\uFF08\u8DE8\u8FDB\u7A0B\uFF09\u7684 ",(0,i.jsx)(n.code,{children:"K/V"})," \u683C\u5F0F\u7684\u7528\u6237\u81EA\u5B9A\u4E49\u6570\u636E\u3002 ",(0,i.jsx)(n.code,{children:"Baggage"})," \u4E0E ",(0,i.jsx)(n.code,{children:"Attributes"})," \u7C7B\u4F3C\uFF0C\u4E5F\u662F ",(0,i.jsx)(n.code,{children:"K/V"})," \u952E\u503C\u5BF9\u3002\u4E0E ",(0,i.jsx)(n.code,{children:"Attributes"})," \u4E0D\u540C\u7684\u662F\uFF1A"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5176 ",(0,i.jsx)(n.code,{children:"key"})," \u8DDF ",(0,i.jsx)(n.code,{children:"value"})," \u90FD\u53EA\u80FD\u662F\u5B57\u7B26\u4E32\u683C\u5F0F"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Baggage"})," \u4E0D\u4EC5\u5F53\u524D ",(0,i.jsx)(n.code,{children:"span"})," \u53EF\u89C1\uFF0C\u5176\u4F1A\u968F\u7740 ",(0,i.jsx)(n.code,{children:"SpanContext"})," \u4F20\u9012\u7ED9\u540E\u7EED\u6240\u6709\u7684\u5B50 ",(0,i.jsx)(n.code,{children:"span"}),"\u3002\u8981\u5C0F\u5FC3\u8C28\u614E\u7684\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"Baggage"}),"\xa0- \u56E0\u4E3A\u5728\u6240\u6709\u7684 ",(0,i.jsx)(n.code,{children:"span"})," \u4E2D\u4F20\u9012\u8FD9\u4E9B ",(0,i.jsx)(n.code,{children:"K,V"})," \u4F1A\u5E26\u6765\u4E0D\u5C0F\u7684\u7F51\u7EDC\u548C ",(0,i.jsx)(n.code,{children:"CPU"})," \u5F00\u9500\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"propagator",children:"Propagator"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Propagator"})," \u4F20\u64AD\u5668\u7528\u4E8E\u7AEF\u5BF9\u7AEF\u7684\u6570\u636E\u7F16\u7801/\u89E3\u7801\uFF0C\u4F8B\u5982\uFF1A ",(0,i.jsx)(n.code,{children:"Client"})," \u5230 ",(0,i.jsx)(n.code,{children:"Server"})," \u7AEF\u7684\u6570\u636E\u4F20\u8F93\uFF0C ",(0,i.jsx)(n.code,{children:"TraceId"}),"\u3001 ",(0,i.jsx)(n.code,{children:"SpanId"})," \u548C ",(0,i.jsx)(n.code,{children:"Baggage"})," \u4E5F\u662F\u9700\u8981\u901A\u8FC7\u4F20\u64AD\u5668\u6765\u7BA1\u7406\u6570\u636E\u4F20\u8F93\u3002\u4E1A\u52A1\u7AEF\u5F00\u53D1\u8005\u5F80\u5F80\u5BF9 ",(0,i.jsx)(n.code,{children:"Propagator"})," \u65E0\u611F\u77E5\uFF0C\u53EA\u6709\u4E2D\u95F4\u4EF6/\u62E6\u622A\u5668\u7684\u5F00\u53D1\u8005\u9700\u8981\u77E5\u9053\u5B83\u7684\u4F5C\u7528\u3002 ",(0,i.jsx)(n.code,{children:"OpenTelemetry"})," \u7684\u6807\u51C6\u534F\u8BAE\u5B9E\u73B0\u5E93\u63D0\u4F9B\u4E86\u5E38\u7528\u7684 ",(0,i.jsx)(n.code,{children:"TextMapPropagator"}),"\uFF0C\u7528\u4E8E\u5E38\u89C1\u7684\u6587\u672C\u6570\u636E\u7AEF\u5230\u7AEF\u4F20\u8F93\u3002\u6B64\u5916\uFF0C\u4E3A\u4FDD\u8BC1 ",(0,i.jsx)(n.code,{children:"TextMapPropagator"})," \u4E2D\u7684\u4F20\u8F93\u6570\u636E\u517C\u5BB9\u6027\uFF0C\u4E0D\u5E94\u5F53\u5E26\u6709\u7279\u6B8A\u5B57\u7B26\uFF0C\u5177\u4F53\u8BF7\u53C2\u8003\uFF1A ",(0,i.jsx)(n.a,{href:"https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/context/api-propagators.md",children:"https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/context/api-propagators.md"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"GoFrame"})," \u6846\u67B6\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"gtrace"})," \u6A21\u5757\u4F7F\u7528\u4E86\u4EE5\u4E0B\u4F20\u64AD\u5668\u5BF9\u8C61\uFF0C\u5E76\u5168\u5C40\u8BBE\u7F6E\u5230\u4E86 ",(0,i.jsx)(n.code,{children:"OpenTelemetry"})," \u4E2D\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"// defaultTextMapPropagator is the default propagator for context propagation between peers.\ndefaultTextMapPropagator = propagation.NewCompositeTextMapPropagator(\n    propagation.TraceContext{},\n    propagation.Baggage{},\n)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u4E09\u652F\u6301\u7EC4\u4EF6",children:"\u4E09\u3001\u652F\u6301\u7EC4\u4EF6"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"GoFrame"})," \u7684\u6838\u5FC3\u7EC4\u4EF6\u90FD\u5DF2\u7ECF\u5168\u9762\u652F\u6301 ",(0,i.jsx)(n.code,{children:"OpenTelemetry"})," \u6807\u51C6\uFF0C\u5E76\u4E14\u81EA\u52A8\u5F00\u542F\u4E86\u94FE\u8DEF\u8DDF\u8E2A\u7279\u6027\uFF0C\u5F00\u53D1\u8005\u65E0\u9700\u663E\u793A\u8C03\u7528\u3001\u4F7F\u7528\u65E0\u611F\u77E5\u3002\u5728\u6CA1\u6709\u6CE8\u5165\u5916\u90E8 ",(0,i.jsx)(n.code,{children:"TracerProvider"})," \u7684\u60C5\u51B5\u4E0B\uFF0C\u6846\u67B6\u4F1A\u4F7F\u7528\u9ED8\u8BA4\u7684 ",(0,i.jsx)(n.code,{children:"TracerProvider"}),"\uFF0C\u8BE5 ",(0,i.jsx)(n.code,{children:"TracerProvider"})," \u53EA\u4F1A\u81EA\u52A8\u521B\u5EFA ",(0,i.jsx)(n.code,{children:"TraceID"})," \u53CA ",(0,i.jsx)(n.code,{children:"SpanID"}),"\uFF0C\u5E76\u4E0D\u4F1A\u6267\u884C\u590D\u6742\u903B\u8F91\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u4EE5\u4E0B\u6838\u5FC3\u7EC4\u4EF6\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Http Client"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"HTTP"})," \u5BA2\u6237\u7AEF\u81EA\u52A8\u542F\u7528\u4E86\u94FE\u8DEF\u8DDF\u8E2A\u7279\u6027\uFF0C\u5177\u4F53\u4F7F\u7528\u793A\u4F8B\u8BF7\u53C2\u8003\u540E\u7EED\u793A\u4F8B\u7AE0\u8282\u3002"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Http Server"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"HTTP"})," \u670D\u52A1\u7AEF\u81EA\u52A8\u542F\u7528\u4E86\u94FE\u8DEF\u8DDF\u8E2A\u7279\u6027\uFF0C\u5177\u4F53\u4F7F\u7528\u793A\u4F8B\u8BF7\u53C2\u8003\u540E\u7EED\u793A\u4F8B\u7AE0\u8282\u3002"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"gRPC Client"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"gRPC"})," \u5BA2\u6237\u7AEF\u81EA\u52A8\u542F\u7528\u4E86\u94FE\u8DEF\u8DDF\u8E2A\u7279\u6027\uFF0C\u5177\u4F53\u4F7F\u7528\u793A\u4F8B\u8BF7\u53C2\u8003\u540E\u7EED\u793A\u4F8B\u7AE0\u8282\u3002"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"gRPC Server"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"gRPC"})," \u670D\u52A1\u7AEF\u81EA\u52A8\u542F\u7528\u4E86\u94FE\u8DEF\u8DDF\u8E2A\u7279\u6027\uFF0C\u5177\u4F53\u4F7F\u7528\u793A\u4F8B\u8BF7\u53C2\u8003\u540E\u7EED\u793A\u4F8B\u7AE0\u8282\u3002"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Logging"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u65E5\u5FD7\u5185\u5BB9\u4E2D\u9700\u8981\u6CE8\u5165\u5F53\u524D\u8BF7\u6C42\u7684 ",(0,i.jsx)(n.code,{children:"TraceId"}),"\uFF0C\u4EE5\u65B9\u4FBF\u901A\u8FC7\u65E5\u5FD7\u5FEB\u901F\u67E5\u627E\u5B9A\u4F4D\u95EE\u9898\u70B9\u3002\u8BE5\u7279\u6027\u662F\u7531 ",(0,i.jsx)(n.code,{children:"glog"})," \u7EC4\u4EF6\u5B9E\u73B0\uFF0C\u8FD9\u9700\u8981\u5F00\u53D1\u8005\u5728\u8F93\u51FA\u65E5\u5FD7\u7684\u65F6\u5019\u8C03\u7528 ",(0,i.jsx)(n.code,{children:"Ctx"})," \u94FE\u5F0F\u64CD\u4F5C\u65B9\u6CD5\u5C06 ",(0,i.jsx)(n.code,{children:"context.Context"})," \u4E0A\u4E0B\u6587\u53D8\u91CF\u4F20\u9012\u5230\u5F53\u524D\u8F93\u51FA\u65E5\u5FD7\u64CD\u4F5C\u94FE\u8DEF\u4E2D\uFF0C\u6CA1\u6709\u4F20\u9012 ",(0,i.jsx)(n.code,{children:"context.Context"})," \u4E0A\u4E0B\u6587\u53D8\u91CF\uFF0C\u5C31\u4F1A\u4E22\u5931\u65E5\u5FD7\u5185\u5BB9\u4E2D\u7684 ",(0,i.jsx)(n.code,{children:"TraceId"}),"\u3002"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"ORM"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u6570\u636E\u5E93\u7684\u6267\u884C\u662F\u5F88\u91CD\u8981\u7684\u94FE\u8DEF\u73AF\u8282\uFF0C ",(0,i.jsx)(n.code,{children:"Orm"})," \u7EC4\u4EF6\u9700\u8981\u5C06\u81EA\u8EAB\u7684\u6267\u884C\u60C5\u51B5\u6295\u9012\u5230\u94FE\u8DEF\u4E2D\uFF0C\u4F5C\u4E3A\u6267\u884C\u94FE\u8DEF\u7684\u4E00\u90E8\u5206\u3002"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Redis"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Redis"})," \u7684\u6267\u884C\u4E5F\u662F\u5F88\u91CD\u8981\u7684\u94FE\u8DEF\u73AF\u8282\uFF0C ",(0,i.jsx)(n.code,{children:"Redis"})," \u9700\u8981\u5C06\u81EA\u8EAB\u7684\u6267\u884C\u60C5\u51B5\u6295\u9012\u5230\u94FE\u8DEF\u4E2D\uFF0C\u4F5C\u4E3A\u6267\u884C\u94FE\u8DEF\u7684\u4E00\u90E8\u5206\u3002"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Utils"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5BF9\u4E8E ",(0,i.jsx)(n.code,{children:"Tracing"})," \u7279\u6027\u7684\u7BA1\u7406\u9700\u8981\u505A\u4E00\u5B9A\u7684\u5C01\u88C5\uFF0C\u4E3B\u8981\u8003\u8651\u7684\u662F\u53EF\u6269\u5C55\u6027\u548C\u6613\u7528\u6027\u4E24\u65B9\u9762\u3002\u8BE5\u5C01\u88C5\u7531 ",(0,i.jsx)(n.code,{children:"gtrace"})," \u6A21\u5757\u5B9E\u73B0\uFF0C\u6587\u6863\u5730\u5740\uFF1A ",(0,i.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/net/gtrace",children:"https://pkg.go.dev/github.com/gogf/gf/v2/net/gtrace"})]}),"\n",(0,i.jsx)(n.h2,{id:"\u56DB\u53C2\u8003\u8D44\u6599",children:"\u56DB\u3001\u53C2\u8003\u8D44\u6599"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://opentracing.io/",children:"https://opentracing.io"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://opencensus.io/",children:"https://opencensus.io"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://opentelemetry.io/",children:"https://opentelemetry.io"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/open-telemetry/opentelemetry-specification/tree/main/specification",children:"https://github.com/open-telemetry/opentelemetry-specification/tree/main/specification"})}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},45682:function(e,n,r){r.d(n,{Z:function(){return c}});let c=r.p+"assets/images/163aa9aead904abbb34f20314b7b48a5-4afbf40d9585c9cfe4372c5812ebbc21.jpg"},250065:function(e,n,r){r.d(n,{Z:function(){return t},a:function(){return s}});var c=r(667294);let i={},d=c.createContext(i);function s(e){let n=c.useContext(d);return c.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),c.createElement(d.Provider,{value:n},e.children)}}}]);