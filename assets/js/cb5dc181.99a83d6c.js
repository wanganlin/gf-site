"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["38445"],{302915:function(e,r,t){t.r(r),t.d(r,{metadata:()=>n,contentTitle:()=>c,default:()=>x,assets:()=>o,toc:()=>l,frontMatter:()=>i});var n=JSON.parse('{"id":"docs/\u670D\u52A1\u53EF\u89C2\u6D4B\u6027/\u670D\u52A1\u76D1\u63A7\u544A\u8B66/\u76D1\u63A7\u544A\u8B66-\u5185\u7F6E\u6307\u6807","title":"\u76D1\u63A7\u544A\u8B66-\u5185\u7F6E\u6307\u6807","description":"GoFrame\u6846\u67B6\u4E2D\u76D1\u63A7\u544A\u8B66\u5185\u7F6E\u6307\u6807\u7684\u4F7F\u7528\u65B9\u6CD5\uFF0C\u6DB5\u76D6\u4E86\u5982\u4F55\u901A\u8FC7otelmetric\u5F00\u542FGo\u57FA\u7840\u6307\u6807\uFF0C\u4EE5\u53CA\u5982\u4F55\u7ED3\u5408Prometheus\u548COpenTelemetry\u8FDB\u884C\u6027\u80FD\u76D1\u63A7\u548C\u4F18\u5316\u3002\u6587\u4E2D\u63D0\u4F9B\u4E86\u793A\u4F8B\u4EE3\u7801\u548C\u8BE6\u7EC6\u7684\u6307\u6807\u8BF4\u660E\uFF0C\u5305\u62EC\u6307\u6807\u540D\u79F0\u3001\u6307\u6807\u7C7B\u578B\u4EE5\u53CA\u63CF\u8FF0\uFF0C\u4EE5\u5E2E\u52A9\u7528\u6237\u7406\u89E3\u548C\u5B9E\u65BD\u6027\u80FD\u76D1\u6D4B\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u670D\u52A1\u53EF\u89C2\u6D4B\u6027/\u670D\u52A1\u76D1\u63A7\u544A\u8B66/\u76D1\u63A7\u544A\u8B66-\u5185\u7F6E\u6307\u6807.md","sourceDirName":"docs/\u670D\u52A1\u53EF\u89C2\u6D4B\u6027/\u670D\u52A1\u76D1\u63A7\u544A\u8B66","slug":"/docs/obs/metrics-builtin","permalink":"/2.7.x/docs/obs/metrics-builtin","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u670D\u52A1\u53EF\u89C2\u6D4B\u6027/\u670D\u52A1\u76D1\u63A7\u544A\u8B66/\u76D1\u63A7\u544A\u8B66-\u5185\u7F6E\u6307\u6807.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":5,"frontMatter":{"slug":"/docs/obs/metrics-builtin","title":"\u76D1\u63A7\u544A\u8B66-\u5185\u7F6E\u6307\u6807","sidebar_position":5,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","\u5185\u7F6E\u6307\u6807","\u76D1\u63A7\u544A\u8B66","\u6307\u6807\u7C7B\u578B","\u6027\u80FD\u76D1\u63A7","Prometheus","OpenTelemetry","\u6027\u80FD\u4F18\u5316","Go\u57FA\u7840\u6307\u6807"],"description":"GoFrame\u6846\u67B6\u4E2D\u76D1\u63A7\u544A\u8B66\u5185\u7F6E\u6307\u6807\u7684\u4F7F\u7528\u65B9\u6CD5\uFF0C\u6DB5\u76D6\u4E86\u5982\u4F55\u901A\u8FC7otelmetric\u5F00\u542FGo\u57FA\u7840\u6307\u6807\uFF0C\u4EE5\u53CA\u5982\u4F55\u7ED3\u5408Prometheus\u548COpenTelemetry\u8FDB\u884C\u6027\u80FD\u76D1\u63A7\u548C\u4F18\u5316\u3002\u6587\u4E2D\u63D0\u4F9B\u4E86\u793A\u4F8B\u4EE3\u7801\u548C\u8BE6\u7EC6\u7684\u6307\u6807\u8BF4\u660E\uFF0C\u5305\u62EC\u6307\u6807\u540D\u79F0\u3001\u6307\u6807\u7C7B\u578B\u4EE5\u53CA\u63CF\u8FF0\uFF0C\u4EE5\u5E2E\u52A9\u7528\u6237\u7406\u89E3\u548C\u5B9E\u65BD\u6027\u80FD\u76D1\u6D4B\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u76D1\u63A7\u544A\u8B66-\u6307\u6807\u5C5E\u6027","permalink":"/2.7.x/docs/obs/metrics-attributes"},"next":{"title":"\u76D1\u63A7\u544A\u8B66-\u7EC4\u4EF6\u6307\u6807","permalink":"/2.7.x/docs/obs/metrics-components"}}'),s=t("785893"),d=t("250065");let i={slug:"/docs/obs/metrics-builtin",title:"\u76D1\u63A7\u544A\u8B66-\u5185\u7F6E\u6307\u6807",sidebar_position:5,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","\u5185\u7F6E\u6307\u6807","\u76D1\u63A7\u544A\u8B66","\u6307\u6807\u7C7B\u578B","\u6027\u80FD\u76D1\u63A7","Prometheus","OpenTelemetry","\u6027\u80FD\u4F18\u5316","Go\u57FA\u7840\u6307\u6807"],description:"GoFrame\u6846\u67B6\u4E2D\u76D1\u63A7\u544A\u8B66\u5185\u7F6E\u6307\u6807\u7684\u4F7F\u7528\u65B9\u6CD5\uFF0C\u6DB5\u76D6\u4E86\u5982\u4F55\u901A\u8FC7otelmetric\u5F00\u542FGo\u57FA\u7840\u6307\u6807\uFF0C\u4EE5\u53CA\u5982\u4F55\u7ED3\u5408Prometheus\u548COpenTelemetry\u8FDB\u884C\u6027\u80FD\u76D1\u63A7\u548C\u4F18\u5316\u3002\u6587\u4E2D\u63D0\u4F9B\u4E86\u793A\u4F8B\u4EE3\u7801\u548C\u8BE6\u7EC6\u7684\u6307\u6807\u8BF4\u660E\uFF0C\u5305\u62EC\u6307\u6807\u540D\u79F0\u3001\u6307\u6807\u7C7B\u578B\u4EE5\u53CA\u63CF\u8FF0\uFF0C\u4EE5\u5E2E\u52A9\u7528\u6237\u7406\u89E3\u548C\u5B9E\u65BD\u6027\u80FD\u76D1\u6D4B\u3002"},c=void 0,o={},l=[{value:"\u57FA\u672C\u4ECB\u7ECD",id:"\u57FA\u672C\u4ECB\u7ECD",level:2},{value:"\u5185\u7F6E\u6307\u6807\u8BF4\u660E",id:"\u5185\u7F6E\u6307\u6807\u8BF4\u660E",level:2}];function h(e){let r={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h2,{id:"\u57FA\u672C\u4ECB\u7ECD",children:"\u57FA\u672C\u4ECB\u7ECD"}),"\n",(0,s.jsxs)(r.p,{children:["\u6846\u67B6\u5185\u7F6E\u4E86 ",(0,s.jsx)(r.code,{children:"Go"})," \u57FA\u7840\u6307\u6807\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u662F\u5173\u95ED\u7684\uFF0C\u9700\u8981\u624B\u52A8\u5F00\u542F\uFF0C\u53EF\u4EE5\u901A\u8FC7\u521B\u5EFA ",(0,s.jsx)(r.code,{children:"Provider"})," \u65F6\u901A\u8FC7 ",(0,s.jsx)(r.code,{children:"otelmetric.WithBuiltInMetrics()"})," \u53C2\u6570\u5F00\u542F\u3002"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-go",children:'package main\n\nimport (\n    "go.opentelemetry.io/otel/exporters/prometheus"\n\n    "github.com/gogf/gf/contrib/metric/otelmetric/v2"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/os/gmetric"\n)\n\nconst (\n    instrument        = "github.com/gogf/gf/example/metric/basic"\n    instrumentVersion = "v1.0"\n)\n\nvar (\n    meter = gmetric.GetGlobalProvider().Meter(gmetric.MeterOption{\n        Instrument:        instrument,\n        InstrumentVersion: instrumentVersion,\n    })\n    counter = meter.MustCounter(\n        "goframe.metric.demo.counter",\n        gmetric.MetricOption{\n            Help: "This is a simple demo for Counter usage",\n            Unit: "bytes",\n        },\n    )\n)\n\nfunc main() {\n    var ctx = gctx.New()\n\n    // Prometheus exporter to export metrics as Prometheus format.\n    exporter, err := prometheus.New(\n        prometheus.WithoutCounterSuffixes(),\n        prometheus.WithoutUnits(),\n    )\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n\n    // OpenTelemetry provider.\n    provider := otelmetric.MustProvider(\n        otelmetric.WithReader(exporter),\n        otelmetric.WithBuiltInMetrics(),\n    )\n    provider.SetAsGlobal()\n    defer provider.Shutdown(ctx)\n\n    // Counter.\n    counter.Inc(ctx)\n    counter.Add(ctx, 10)\n\n    // HTTP Server for metrics exporting.\n    otelmetric.StartPrometheusMetricsServer(8000, "/metrics")\n}\n'})}),"\n",(0,s.jsxs)(r.p,{children:["\u6267\u884C\u540E\uFF0C\u8BBF\u95EE ",(0,s.jsx)(r.a,{href:"http://127.0.0.1:8000/metrics",children:"http://127.0.0.1:8000/metrics"})," \u67E5\u770B\u7ED3\u679C\u3002"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:t(882671).Z+"",width:"2966",height:"2014"})}),"\n",(0,s.jsx)(r.h2,{id:"\u5185\u7F6E\u6307\u6807\u8BF4\u660E",children:"\u5185\u7F6E\u6307\u6807\u8BF4\u660E"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"\u6307\u6807\u540D\u79F0"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"\u6307\u6807\u7C7B\u578B"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"\u6307\u6807\u5355\u4F4D"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"\u6307\u6807\u63CF\u8FF0"})})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"process.runtime.go.cgo.calls"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Counter"})}),(0,s.jsx)(r.td,{}),(0,s.jsxs)(r.td,{children:["\u5F53\u524D\u8FDB\u7A0B\u8C03\u7528\u7684 ",(0,s.jsx)(r.code,{children:"cgo"})," \u6B21\u6570\u3002"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"process.runtime.go.gc.count"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Counter"})}),(0,s.jsx)(r.td,{}),(0,s.jsxs)(r.td,{children:["\u5DF2\u5B8C\u6210\u7684 ",(0,s.jsx)(r.code,{children:"gc"})," \u5468\u671F\u7684\u6B21\u6570\u3002"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"process.runtime.go.gc.pause_ns"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Histogram"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"ns"})}),(0,s.jsxs)(r.td,{children:["\u5728 ",(0,s.jsx)(r.code,{children:"GC stop-the-world "})," \u4E2D\u6682\u505C\u7684\u7EB3\u79D2\u6570\u91CF\u3002"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"process.runtime.go.gc.pause_total_ns"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Counter"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"ns"})}),(0,s.jsxs)(r.td,{children:["\u81EA\u7A0B\u5E8F\u542F\u52A8\u4EE5\u6765\uFF0C ",(0,s.jsx)(r.code,{children:"GC stop-the-world "})," \u7684\u7D2F\u8BA1\u5FAE\u79D2\u8BA1\u6570\u3002"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"process.runtime.go.goroutines"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Gauge"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"\u5F53\u524D\u8FD0\u884C\u7684\u534F\u7A0B\u6570\u91CF\u3002"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"process.runtime.go.lookups"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Counter"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"\u8FD0\u884C\u65F6\u6267\u884C\u7684\u6307\u9488\u67E5\u8BE2\u7684\u6570\u91CF\u3002"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"process.runtime.go.mem.heap_alloc"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Gauge"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"bytes"})}),(0,s.jsx)(r.td,{children:"\u5206\u914D\u7684\u5806\u5BF9\u8C61\u7684\u5B57\u8282\u6570\u3002"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"process.runtime.go.mem.heap_idle"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Gauge"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"bytes"})}),(0,s.jsx)(r.td,{children:"\u7A7A\u95F2\uFF08\u672A\u4F7F\u7528\uFF09\u7684\u5806\u5185\u5B58\u3002"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"process.runtime.go.mem.heap_inuse"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Gauge"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"bytes"})}),(0,s.jsx)(r.td,{children:"\u5DF2\u4F7F\u7528\u7684\u5806\u5185\u5B58\u3002"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"process.runtime.go.mem.heap_objects"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Gauge"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"\u5DF2\u5206\u914D\u7684\u5806\u5BF9\u8C61\u6570\u91CF\u3002"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"process.runtime.go.mem.live_objects"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Gauge"})}),(0,s.jsx)(r.td,{}),(0,s.jsxs)(r.td,{children:["\u5B58\u6D3B\u5BF9\u8C61\u6570\u91CF( ",(0,s.jsx)(r.code,{children:"Mallocs - Frees"}),")"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"process.runtime.go.mem.heap_released"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Gauge"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"bytes"})}),(0,s.jsx)(r.td,{children:"\u5DF2\u4EA4\u8FD8\u7ED9\u64CD\u4F5C\u7CFB\u7EDF\u7684\u5806\u5185\u5B58\u3002"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"process.runtime.go.mem.heap_sys"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Gauge"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"bytes"})}),(0,s.jsx)(r.td,{children:"\u4ECE\u64CD\u4F5C\u7CFB\u7EDF\u83B7\u5F97\u7684\u5806\u5185\u5B58\u3002"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"process.runtime.uptime"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Counter"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"ms"})}),(0,s.jsx)(r.td,{children:"\u81EA\u5E94\u7528\u7A0B\u5E8F\u88AB\u521D\u59CB\u5316\u4EE5\u6765\u7684\u6BEB\u79D2\u6570\u3002"})]})]})]})]})}function x(e={}){let{wrapper:r}={...(0,d.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},882671:function(e,r,t){t.d(r,{Z:function(){return n}});let n=t.p+"assets/images/daf1d8449208ba307efd483c505b7b5a-643570199582f99bdada658b4dbbe7ee.png"},250065:function(e,r,t){t.d(r,{Z:function(){return c},a:function(){return i}});var n=t(667294);let s={},d=n.createContext(s);function i(e){let r=n.useContext(d);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(d.Provider,{value:r},e.children)}}}]);