"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["95184"],{838702:function(n,e,r){r.r(e),r.d(e,{metadata:()=>o,contentTitle:()=>g,default:()=>d,assets:()=>c,toc:()=>s,frontMatter:()=>i});var o=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6-Handler","title":"\u65E5\u5FD7\u7EC4\u4EF6-Handler","description":"\u6587\u7AE0\u4ECB\u7ECD\u4E86\u4ECEv2.0\u7248\u672C\u5F00\u59CB\uFF0CGoFrame\u6846\u67B6\u7684glog\u7EC4\u4EF6\u65B0\u589E\u7684\u53EF\u81EA\u5B9A\u4E49\u65E5\u5FD7\u5904\u7406\u7684Handler\u7279\u6027\u3002\u5F00\u53D1\u8005\u53EF\u4EE5\u901A\u8FC7Handler\u5B9E\u73B0\u65E5\u5FD7\u8F93\u51FA\u7684\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u4F8B\u5982\u5C06\u65E5\u5FD7\u8F6C\u4E3AJson\u683C\u5F0F\u8F93\u51FA\u6216\u8005\u8F93\u51FA\u81F3\u7B2C\u4E09\u65B9\u670D\u52A1\u5982Graylog\u3002\u8BE6\u7EC6\u793A\u4F8B\u5C55\u793A\u4E86\u5982\u4F55\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528Handler\u8FDB\u884C\u65E5\u5FD7\u5904\u7406\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u6838\u5FC3\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6-Handler.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6","slug":"/docs/core/glog-handler","permalink":"/2.7.x/docs/core/glog-handler","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u6838\u5FC3\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6-Handler.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":6,"frontMatter":{"slug":"/docs/core/glog-handler","title":"\u65E5\u5FD7\u7EC4\u4EF6-Handler","sidebar_position":6,"hide_title":true,"keywords":["GoFrame","\u65E5\u5FD7\u7EC4\u4EF6","Handler\u7279\u6027","\u65E5\u5FD7\u5904\u7406","\u81EA\u5B9A\u4E49\u8F93\u51FA","Json\u683C\u5F0F","Graylog\u670D\u52A1","\u65E5\u5FD7\u6536\u96C6","glog","\u4E2D\u95F4\u4EF6\u8BBE\u8BA1"],"description":"\u6587\u7AE0\u4ECB\u7ECD\u4E86\u4ECEv2.0\u7248\u672C\u5F00\u59CB\uFF0CGoFrame\u6846\u67B6\u7684glog\u7EC4\u4EF6\u65B0\u589E\u7684\u53EF\u81EA\u5B9A\u4E49\u65E5\u5FD7\u5904\u7406\u7684Handler\u7279\u6027\u3002\u5F00\u53D1\u8005\u53EF\u4EE5\u901A\u8FC7Handler\u5B9E\u73B0\u65E5\u5FD7\u8F93\u51FA\u7684\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u4F8B\u5982\u5C06\u65E5\u5FD7\u8F6C\u4E3AJson\u683C\u5F0F\u8F93\u51FA\u6216\u8005\u8F93\u51FA\u81F3\u7B2C\u4E09\u65B9\u670D\u52A1\u5982Graylog\u3002\u8BE6\u7EC6\u793A\u4F8B\u5C55\u793A\u4E86\u5982\u4F55\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528Handler\u8FDB\u884C\u65E5\u5FD7\u5904\u7406\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u65E5\u5FD7\u7EC4\u4EF6-Context","permalink":"/2.7.x/docs/core/glog-context"},"next":{"title":"\u65E5\u5FD7\u7EC4\u4EF6-JSON\u683C\u5F0F","permalink":"/2.7.x/docs/core/glog-json"}}'),l=r("785893"),t=r("250065");let i={slug:"/docs/core/glog-handler",title:"\u65E5\u5FD7\u7EC4\u4EF6-Handler",sidebar_position:6,hide_title:!0,keywords:["GoFrame","\u65E5\u5FD7\u7EC4\u4EF6","Handler\u7279\u6027","\u65E5\u5FD7\u5904\u7406","\u81EA\u5B9A\u4E49\u8F93\u51FA","Json\u683C\u5F0F","Graylog\u670D\u52A1","\u65E5\u5FD7\u6536\u96C6","glog","\u4E2D\u95F4\u4EF6\u8BBE\u8BA1"],description:"\u6587\u7AE0\u4ECB\u7ECD\u4E86\u4ECEv2.0\u7248\u672C\u5F00\u59CB\uFF0CGoFrame\u6846\u67B6\u7684glog\u7EC4\u4EF6\u65B0\u589E\u7684\u53EF\u81EA\u5B9A\u4E49\u65E5\u5FD7\u5904\u7406\u7684Handler\u7279\u6027\u3002\u5F00\u53D1\u8005\u53EF\u4EE5\u901A\u8FC7Handler\u5B9E\u73B0\u65E5\u5FD7\u8F93\u51FA\u7684\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u4F8B\u5982\u5C06\u65E5\u5FD7\u8F6C\u4E3AJson\u683C\u5F0F\u8F93\u51FA\u6216\u8005\u8F93\u51FA\u81F3\u7B2C\u4E09\u65B9\u670D\u52A1\u5982Graylog\u3002\u8BE6\u7EC6\u793A\u4F8B\u5C55\u793A\u4E86\u5982\u4F55\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528Handler\u8FDB\u884C\u65E5\u5FD7\u5904\u7406\u3002"},g=void 0,c={},s=[{value:"\u76F8\u5173\u5B9A\u4E49",id:"\u76F8\u5173\u5B9A\u4E49",level:2},{value:"<code>Handler</code> \u65B9\u6CD5\u5B9A\u4E49",id:"handler-\u65B9\u6CD5\u5B9A\u4E49",level:3},{value:"<code>Handler</code> \u53C2\u6570\u5B9A\u4E49",id:"handler-\u53C2\u6570\u5B9A\u4E49",level:3},{value:"<code>Handler</code> \u6CE8\u518C\u5230 <code>Logger</code> \u65B9\u6CD5",id:"handler-\u6CE8\u518C\u5230-logger-\u65B9\u6CD5",level:3},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:2},{value:"\u793A\u4F8B1. \u5C06\u65E5\u5FD7\u8F93\u51FA\u8F6C\u6362\u4E3A <code>Json</code> \u683C\u5F0F\u8F93\u51FA",id:"\u793A\u4F8B1-\u5C06\u65E5\u5FD7\u8F93\u51FA\u8F6C\u6362\u4E3A-json-\u683C\u5F0F\u8F93\u51FA",level:3},{value:"\u793A\u4F8B2. \u5C06\u5185\u5BB9\u8F93\u51FA\u5230\u7B2C\u4E09\u65B9\u65E5\u5FD7\u641C\u96C6\u670D\u52A1\u4E2D",id:"\u793A\u4F8B2-\u5C06\u5185\u5BB9\u8F93\u51FA\u5230\u7B2C\u4E09\u65B9\u65E5\u5FD7\u641C\u96C6\u670D\u52A1\u4E2D",level:3},{value:"\u5168\u5C40\u9ED8\u8BA4 <code>Handler</code>",id:"\u5168\u5C40\u9ED8\u8BA4-handler",level:2},{value:"\u7EC4\u4EF6\u901A\u7528 <code>Handler</code>",id:"\u7EC4\u4EF6\u901A\u7528-handler",level:2},{value:"<code>HandlerJson</code>",id:"handlerjson",level:3},{value:"<code>HandlerStructure</code>",id:"handlerstructure",level:3}];function a(n){let e={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.p,{children:["\u4ECE ",(0,l.jsx)(e.code,{children:"v2.0"})," \u7248\u672C\u5F00\u59CB\uFF0C ",(0,l.jsx)(e.code,{children:"glog"})," \u7EC4\u4EF6\u63D0\u4F9B\u4E86\u8D85\u7EA7\u5F3A\u5927\u7684\u3001\u53EF\u81EA\u5B9A\u4E49\u65E5\u5FD7\u5904\u7406\u7684 ",(0,l.jsx)(e.code,{children:"Handler"})," \u7279\u6027\u3002 ",(0,l.jsx)(e.code,{children:"Handler"})," \u91C7\u7528\u4E86\u4E2D\u95F4\u4EF6\u8BBE\u8BA1\u65B9\u5F0F\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u4E3A\u65E5\u5FD7\u5BF9\u8C61\u6CE8\u518C\u591A\u4E2A\u5904\u7406 ",(0,l.jsx)(e.code,{children:"Handler"}),"\uFF0C\u4E5F\u53EF\u4EE5\u5728 ",(0,l.jsx)(e.code,{children:"Handler"})," \u4E2D\u8986\u76D6\u9ED8\u8BA4\u7684\u65E5\u5FD7\u7EC4\u4EF6\u5904\u7406\u903B\u8F91\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u76F8\u5173\u5B9A\u4E49",children:"\u76F8\u5173\u5B9A\u4E49"}),"\n",(0,l.jsxs)(e.h3,{id:"handler-\u65B9\u6CD5\u5B9A\u4E49",children:[(0,l.jsx)(e.code,{children:"Handler"})," \u65B9\u6CD5\u5B9A\u4E49"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:"// Handler is function handler for custom logging content outputs.\ntype Handler func(ctx context.Context, in *HandlerInput)\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u53EF\u4EE5\u770B\u5230\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A\u65E5\u5FD7\u5904\u7406\u7684\u65E5\u5FD7\u4FE1\u606F\uFF0C\u5E76\u4E14\u4E3A\u6307\u9488\u7C7B\u578B\uFF0C\u610F\u5473\u7740\u5728 ",(0,l.jsx)(e.code,{children:"Handler"})," \u4E2D\u53EF\u4EE5\u4FEE\u6539\u8BE5\u53C2\u6570\u7684\u4EFB\u610F\u5C5E\u6027\u4FE1\u606F\uFF0C\u5E76\u4E14\u4FEE\u6539\u540E\u7684\u5185\u5BB9\u5C06\u4F1A\u4F20\u9012\u7ED9\u4E0B\u4E00\u4E2A ",(0,l.jsx)(e.code,{children:"Handler"}),"\u3002"]}),"\n",(0,l.jsxs)(e.h3,{id:"handler-\u53C2\u6570\u5B9A\u4E49",children:[(0,l.jsx)(e.code,{children:"Handler"})," \u53C2\u6570\u5B9A\u4E49"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:'// HandlerInput is the input parameter struct for logging Handler.\ntype HandlerInput struct {\n    Logger      *Logger       // Current Logger object.\n    Buffer      *bytes.Buffer // Buffer for logging content outputs.\n    Time        time.Time     // Logging time, which is the time that logging triggers.\n    TimeFormat  string        // Formatted time string, like "2016-01-09 12:00:00".\n    Color       int           // Using color, like COLOR_RED, COLOR_BLUE, etc. Eg: 34\n    Level       int           // Using level, like LEVEL_INFO, LEVEL_ERRO, etc. Eg: 256\n    LevelFormat string        // Formatted level string, like "DEBU", "ERRO", etc. Eg: ERRO\n    CallerFunc  string        // The source function name that calls logging, only available if F_CALLER_FN set.\n    CallerPath  string        // The source file path and its line number that calls logging, only available if F_FILE_SHORT or F_FILE_LONG set.\n    CtxStr      string        // The retrieved context value string from context, only available if Config.CtxKeys configured.\n    TraceId     string        // Trace id, only available if OpenTelemetry is enabled.\n    Prefix      string        // Custom prefix string for logging content.\n    Content     string        // Content is the main logging content without error stack string produced by logger.\n    Values      []any         // The passed un-formatted values array to logger.\n    Stack       string        // Stack string produced by logger, only available if Config.StStatus configured.\n    IsAsync     bool          // IsAsync marks it is in asynchronous logging.\n}\n'})}),"\n",(0,l.jsxs)(e.p,{children:["\u5F00\u53D1\u8005\u6709 ",(0,l.jsx)(e.strong,{children:"\u4E24\u79CD\u65B9\u5F0F"})," \u901A\u8FC7 ",(0,l.jsx)(e.code,{children:"Handler"})," \u81EA\u5B9A\u4E49\u65E5\u5FD7\u8F93\u51FA\u5185\u5BB9\uFF1A"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u4E00\u79CD\u662F\u76F4\u63A5\u4FEE\u6539 ",(0,l.jsx)(e.code,{children:"HandlerInput"})," \u4E2D\u7684\u5C5E\u6027\u4FE1\u606F\uFF0C\u7136\u540E\u7EE7\u7EED\u6267\u884C ",(0,l.jsx)(e.code,{children:"in.Next(ctx)"}),"\uFF0C\u9ED8\u8BA4\u7684\u65E5\u5FD7\u8F93\u51FA\u903B\u8F91\u4F1A\u5C06 ",(0,l.jsx)(e.code,{children:"HandlerInput"})," \u4E2D\u7684\u5C5E\u6027\u6253\u5370\u4E3A\u5B57\u7B26\u4E32\u8F93\u51FA\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:["\u53E6\u4E00\u79CD\u662F\u5C06\u65E5\u5FD7\u5185\u5BB9\u5199\u5165\u5230 ",(0,l.jsx)(e.code,{children:"Buffer"})," \u7F13\u51B2\u5BF9\u8C61\u4E2D\u5373\u53EF\uFF0C\u9ED8\u8BA4\u7684\u65E5\u5FD7\u8F93\u51FA\u903B\u8F91\u5982\u679C\u53D1\u73B0 ",(0,l.jsx)(e.code,{children:"Buffer"})," \u5DF2\u7ECF\u5B58\u5728\u65E5\u5FD7\u5185\u5BB9\u5C06\u4F1A\u5FFD\u7565\u9ED8\u8BA4\u65E5\u5FD7\u8F93\u51FA\u903B\u8F91\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(e.h3,{id:"handler-\u6CE8\u518C\u5230-logger-\u65B9\u6CD5",children:[(0,l.jsx)(e.code,{children:"Handler"})," \u6CE8\u518C\u5230 ",(0,l.jsx)(e.code,{children:"Logger"})," \u65B9\u6CD5"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:"// SetHandlers sets the logging handlers for current logger.\nfunc (l *Logger) SetHandlers(handlers ...Handler)\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,l.jsxs)(e.p,{children:["\u6211\u4EEC\u6765\u770B\u4E24\u4E2A\u793A\u4F8B\u4FBF\u4E8E\u66F4\u5FEB\u901F\u4E86\u89E3 ",(0,l.jsx)(e.code,{children:"Handler"})," \u7684\u4F7F\u7528\u3002"]}),"\n",(0,l.jsxs)(e.h3,{id:"\u793A\u4F8B1-\u5C06\u65E5\u5FD7\u8F93\u51FA\u8F6C\u6362\u4E3A-json-\u683C\u5F0F\u8F93\u51FA",children:["\u793A\u4F8B1. \u5C06\u65E5\u5FD7\u8F93\u51FA\u8F6C\u6362\u4E3A ",(0,l.jsx)(e.code,{children:"Json"})," \u683C\u5F0F\u8F93\u51FA"]}),"\n",(0,l.jsxs)(e.p,{children:["\u5728\u672C\u793A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u91C7\u7528\u4E86\u524D\u7F6E\u4E2D\u95F4\u4EF6\u7684\u8BBE\u8BA1\uFF0C\u901A\u8FC7\u81EA\u5B9A\u4E49 ",(0,l.jsx)(e.code,{children:"Handler"})," \u5C06\u65E5\u5FD7\u5185\u5BB9\u8F93\u51FA\u683C\u5F0F\u4FEE\u6539\u4E3A\u4E86 ",(0,l.jsx)(e.code,{children:"JSON"})," \u683C\u5F0F\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "encoding/json"\n    "os"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/glog"\n    "github.com/gogf/gf/v2/text/gstr"\n)\n\n// JsonOutputsForLogger is for JSON marshaling in sequence.\ntype JsonOutputsForLogger struct {\n    Time    string `json:"time"`\n    Level   string `json:"level"`\n    Content string `json:"content"`\n}\n\n// LoggingJsonHandler is a example handler for logging JSON format content.\nvar LoggingJsonHandler glog.Handler = func(ctx context.Context, in *glog.HandlerInput) {\n    jsonForLogger := JsonOutputsForLogger{\n        Time:    in.TimeFormat,\n        Level:   gstr.Trim(in.LevelFormat, "[]"),\n        Content: gstr.Trim(in.Content), // 2.7\u4EE5\u4E0A\u7248\u672C\u7528in.ValuesContent()\n    }\n    jsonBytes, err := json.Marshal(jsonForLogger)\n    if err != nil {\n        _, _ = os.Stderr.WriteString(err.Error())\n        return\n    }\n    in.Buffer.Write(jsonBytes)\n    in.Buffer.WriteString("\\n")\n    in.Next(ctx)\n}\n\nfunc main() {\n    g.Log().SetHandlers(LoggingJsonHandler)\n    ctx := context.TODO()\n    g.Log().Debug(ctx, "Debugging...")\n    g.Log().Warning(ctx, "It is warning info")\n    g.Log().Error(ctx, "Error occurs, please have a check")\n}\n'})}),"\n",(0,l.jsxs)(e.p,{children:["\u53EF\u4EE5\u770B\u5230\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728 ",(0,l.jsx)(e.code,{children:"Handler"})," \u4E2D\u901A\u8FC7 ",(0,l.jsx)(e.code,{children:"Buffer"})," \u5C5E\u6027\u64CD\u4F5C\u6765\u63A7\u5236\u8F93\u51FA\u7684\u65E5\u5FD7\u5185\u5BB9\u3002\u5982\u679C\u5728\u6240\u6709\u7684\u524D\u7F6E\u4E2D\u95F4\u4EF6 ",(0,l.jsx)(e.code,{children:"Handler"})," \u5904\u7406\u540E ",(0,l.jsx)(e.code,{children:"Buffer"})," \u5185\u5BB9\u4E3A\u7A7A\uFF0C\u90A3\u4E48\u7EE7\u7EED ",(0,l.jsx)(e.code,{children:"Next"})," \u6267\u884C\u540E\u5C06\u4F1A\u6267\u884C\u65E5\u5FD7\u4E2D\u95F4\u4EF6\u9ED8\u8BA4\u7684 ",(0,l.jsx)(e.code,{children:"Handler"})," \u903B\u8F91\u3002\u6267\u884C\u672C\u793A\u4F8B\u7684\u4EE3\u7801\u540E\uFF0C\u7EC8\u7AEF\u8F93\u51FA\uFF1A"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-html",children:'{"time":"2021-12-31 11:03:25.438","level":"DEBU","content":"Debugging..."}\n{"time":"2021-12-31 11:03:25.438","level":"WARN","content":"It is warning info"}\n{"time":"2021-12-31 11:03:25.438","level":"ERRO","content":"Error occurs, please have a check \\nStack:\\n1.  main.main\\n    C:/hailaz/test/main.go:42"}\n'})}),"\n",(0,l.jsx)(e.h3,{id:"\u793A\u4F8B2-\u5C06\u5185\u5BB9\u8F93\u51FA\u5230\u7B2C\u4E09\u65B9\u65E5\u5FD7\u641C\u96C6\u670D\u52A1\u4E2D",children:"\u793A\u4F8B2. \u5C06\u5185\u5BB9\u8F93\u51FA\u5230\u7B2C\u4E09\u65B9\u65E5\u5FD7\u641C\u96C6\u670D\u52A1\u4E2D"}),"\n",(0,l.jsxs)(e.p,{children:["\u5728\u672C\u793A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u91C7\u7528\u4E86\u540E\u7F6E\u4E2D\u95F4\u4EF6\u7684\u8BBE\u8BA1\uFF0C\u901A\u8FC7\u81EA\u5B9A\u4E49 ",(0,l.jsx)(e.code,{children:"Handler"})," \u5C06\u65E5\u5FD7\u5185\u5BB9\u8F93\u51FA\u4E00\u4EFD\u5230\u7B2C\u4E09\u65B9 ",(0,l.jsx)(e.code,{children:"graylog"})," \u65E5\u5FD7\u641C\u96C6\u670D\u52A1\u4E2D\uFF0C\u5E76\u4E14\u4E0D\u5F71\u54CD\u539F\u6709\u7684\u65E5\u5FD7\u8F93\u51FA\u5904\u7406\u3002"]}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"Graylog"})," \u662F\u4E0E ",(0,l.jsx)(e.code,{children:"ELK"})," \u53EF\u4EE5\u76F8\u63D0\u5E76\u8BBA\u7684\u4E00\u6B3E\u96C6\u4E2D\u5F0F\u65E5\u5FD7\u7BA1\u7406\u65B9\u6848\uFF0C\u652F\u6301\u6570\u636E\u6536\u96C6\u3001\u68C0\u7D22\u3001\u53EF\u89C6\u5316 ",(0,l.jsx)(e.code,{children:"Dashboard"}),"\u3002\u5728\u672C\u793A\u4F8B\u4E2D\u4F7F\u7528\u5230\u4E86\u4E00\u4E2A\u7B80\u5355\u7684\u7B2C\u4E09\u65B9 ",(0,l.jsx)(e.code,{children:"graylog"})," \u5BA2\u6237\u7AEF\u7EC4\u4EF6\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/glog"\n    gelf "github.com/robertkowalski/graylog-golang"\n)\n\nvar grayLogClient = gelf.New(gelf.Config{\n    GraylogPort:     80,\n    GraylogHostname: "graylog-host.com",\n    Connection:      "wan",\n    MaxChunkSizeWan: 42,\n    MaxChunkSizeLan: 1337,\n})\n\n// LoggingGrayLogHandler is an example handler for logging content to remote GrayLog service.\nvar LoggingGrayLogHandler glog.Handler = func(ctx context.Context, in *glog.HandlerInput) {\n    in.Next(ctx)\n    grayLogClient.Log(in.Buffer.String())\n}\n\nfunc main() {\n    g.Log().SetHandlers(LoggingGrayLogHandler)\n    ctx := context.TODO()\n    g.Log().Debug(ctx, "Debugging...")\n    g.Log().Warning(ctx, "It is warning info")\n    g.Log().Error(ctx, "Error occurs, please have a check")\n    glog.Print(ctx, "test log")\n}\n'})}),"\n",(0,l.jsxs)(e.h2,{id:"\u5168\u5C40\u9ED8\u8BA4-handler",children:["\u5168\u5C40\u9ED8\u8BA4 ",(0,l.jsx)(e.code,{children:"Handler"})]}),"\n",(0,l.jsxs)(e.p,{children:["\u65E5\u5FD7\u5BF9\u8C61\u9ED8\u8BA4\u662F\u6CA1\u6709\u8BBE\u7F6E\u4EFB\u4F55\u7684 ",(0,l.jsx)(e.code,{children:"Handler"}),"\uFF0C\u4ECE ",(0,l.jsx)(e.code,{children:"v2.1"})," \u7248\u672C\u5F00\u59CB\uFF0C\u6846\u67B6\u63D0\u4F9B\u4E86\u53EF\u4EE5\u8BBE\u7F6E\u5168\u5C40\u9ED8\u8BA4 ",(0,l.jsx)(e.code,{children:"Handler"})," \u7684\u529F\u80FD\u7279\u6027\u3002\u5168\u5C40\u9ED8\u8BA4 ",(0,l.jsx)(e.code,{children:"Handler"})," \u5C06\u5BF9\u6240\u6709\u7684\u4F7F\u7528\u8BE5\u65E5\u5FD7\u7EC4\u4EF6\uFF0C\u5E76\u4E14\u6CA1\u6709\u81EA\u5B9A\u4E49 ",(0,l.jsx)(e.code,{children:"Handler"})," \u7684\u65E5\u5FD7\u6253\u5370\u529F\u80FD\u751F\u6548\u3002\u540C\u65F6\uFF0C\u5168\u5C40\u9ED8\u8BA4 ",(0,l.jsx)(e.code,{children:"Handler"})," \u5C06\u4F1A\u5F71\u54CD\u65E5\u5FD7\u5305\u65B9\u6CD5\u7684\u65E5\u5FD7\u6253\u5370\u884C\u4E3A\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u5F00\u53D1\u8005\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u4E24\u4E2A\u65B9\u6CD5\u6765\u8BBE\u7F6E\u548C\u83B7\u53D6\u5168\u5C40\u9ED8\u8BA4\u7684 ",(0,l.jsx)(e.code,{children:"Handler"}),"\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:"// SetDefaultHandler sets default handler for package.\nfunc SetDefaultHandler(handler Handler)\n\n// GetDefaultHandler returns the default handler of package.\nfunc GetDefaultHandler() Handler\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u9700\u8981\u6CE8\u610F\uFF0C\u8FD9\u79CD\u5168\u5C40\u5305\u914D\u7F6E\u7684\u65B9\u6CD5\u4E0D\u662F\u5E76\u53D1\u5B89\u5168\u7684\uFF0C\u5E76\u4E14\u5F80\u5F80\u9700\u8981\u5728\u9879\u76EE\u542F\u52A8\u903B\u8F91\u6700\u9876\u90E8\u6267\u884C\u3002"}),"\n",(0,l.jsxs)(e.p,{children:["\u4F7F\u7528\u793A\u4F8B\uFF0C\u6211\u4EEC\u5C06\u9879\u76EE\u6240\u6709\u7684\u65E5\u5FD7\u8F93\u51FA\u5747\u91C7\u7528 ",(0,l.jsx)(e.code,{children:"JSON"})," \u683C\u5F0F\u8F93\u51FA\uFF0C\u4EE5\u4FDD\u8BC1\u65E5\u5FD7\u5185\u5BB9\u7ED3\u6784\u5316\u5E76\u4E14\u6BCF\u6B21\u65E5\u5FD7\u8F93\u51FA\u90FD\u662F\u5355\u884C\uFF0C\u65B9\u4FBF\u65E5\u5FD7\u91C7\u96C6\u671F\u91C7\u96C6\u65E5\u5FD7\uFF1A"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "encoding/json"\n    "os"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/glog"\n    "github.com/gogf/gf/v2/text/gstr"\n)\n\n// JsonOutputsForLogger is for JSON marshaling in sequence.\ntype JsonOutputsForLogger struct {\n    Time    string `json:"time"`\n    Level   string `json:"level"`\n    Content string `json:"content"`\n}\n\n// LoggingJsonHandler is a example handler for logging JSON format content.\nvar LoggingJsonHandler glog.Handler = func(ctx context.Context, in *glog.HandlerInput) {\n    jsonForLogger := JsonOutputsForLogger{\n        Time:    in.TimeFormat,\n        Level:   gstr.Trim(in.LevelFormat, "[]"),\n        Content: gstr.Trim(in.Content), // 2.7\u4EE5\u4E0A\u7248\u672C\u7528in.ValuesContent()\n    }\n    jsonBytes, err := json.Marshal(jsonForLogger)\n    if err != nil {\n        _, _ = os.Stderr.WriteString(err.Error())\n        return\n    }\n    in.Buffer.Write(jsonBytes)\n    in.Buffer.WriteString("\\n")\n    in.Next(ctx)\n}\n\nfunc main() {\n    ctx := context.TODO()\n    glog.SetDefaultHandler(LoggingJsonHandler)\n\n    g.Log().Debug(ctx, "Debugging...")\n    glog.Warning(ctx, "It is warning info")\n    glog.Error(ctx, "Error occurs, please have a check")\n}\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u6267\u884C\u540E\uFF0C\u7EC8\u7AEF\u8F93\u51FA\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-html",children:'{"time":"2022-06-20 10:51:50.235","level":"DEBU","content":"Debugging..."}\n{"time":"2022-06-20 10:51:50.235","level":"WARN","content":"It is warning info"}\n{"time":"2022-06-20 10:51:50.235","level":"ERRO","content":"Error occurs, please have a check"}\n'})}),"\n",(0,l.jsxs)(e.h2,{id:"\u7EC4\u4EF6\u901A\u7528-handler",children:["\u7EC4\u4EF6\u901A\u7528 ",(0,l.jsx)(e.code,{children:"Handler"})]}),"\n",(0,l.jsxs)(e.p,{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E00\u4E9B\u901A\u7528\u6027\u7684\u65E5\u5FD7 ",(0,l.jsx)(e.code,{children:"Handler"}),"\uFF0C\u65B9\u4FBF\u5F00\u53D1\u8005\u4F7F\u7528\uFF0C\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\u3002"]}),"\n",(0,l.jsx)(e.h3,{id:"handlerjson",children:(0,l.jsx)(e.code,{children:"HandlerJson"})}),"\n",(0,l.jsxs)(e.p,{children:["\u8BE5 ",(0,l.jsx)(e.code,{children:"Handler"})," \u53EF\u4EE5\u5C06\u65E5\u5FD7\u5185\u5BB9\u8F6C\u6362\u4E3A ",(0,l.jsx)(e.code,{children:"Json"})," \u683C\u5F0F\u6253\u5370\u3002\u4F7F\u7528\u793A\u4F8B\uFF1A"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/glog"\n)\n\nfunc main() {\n    ctx := context.TODO()\n    glog.SetDefaultHandler(glog.HandlerJson)\n\n    g.Log().Debug(ctx, "Debugging...")\n    glog.Warning(ctx, "It is warning info")\n    glog.Error(ctx, "Error occurs, please have a check")\n}\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u6267\u884C\u540E\uFF0C\u7EC8\u7AEF\u8F93\u51FA\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-html",children:'{"Time":"2022-06-20 20:04:04.725","Level":"DEBU","Content":"Debugging..."}\n{"Time":"2022-06-20 20:04:04.725","Level":"WARN","Content":"It is warning info"}\n{"Time":"2022-06-20 20:04:04.725","Level":"ERRO","Content":"Error occurs, please have a check","Stack":"1.  main.main\\n    /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/.test/main.go:16\\n"}\n'})}),"\n",(0,l.jsx)(e.h3,{id:"handlerstructure",children:(0,l.jsx)(e.code,{children:"HandlerStructure"})}),"\n",(0,l.jsxs)(e.p,{children:["\u8BE5 ",(0,l.jsx)(e.code,{children:"Handler"})," \u53EF\u4EE5\u5C06\u65E5\u5FD7\u5185\u5BB9\u8F6C\u6362\u4E3A\u7ED3\u6784\u5316\u683C\u5F0F\u6253\u5370\uFF0C\u4E3B\u8981\u662F\u4E3A\u4E86\u548C ",(0,l.jsx)(e.code,{children:"Golang"})," \u65B0\u7248\u672C\u7684 ",(0,l.jsx)(e.code,{children:"slog"})," \u65E5\u5FD7\u8F93\u51FA\u5185\u5BB9\u4FDD\u6301\u4E00\u81F4\u3002\u9700\u8981\u6CE8\u610F\uFF0C\u65E5\u5FD7\u7ED3\u6784\u5316\u6253\u5370\u7684\u7279\u6027\u9700\u8981\u4FDD\u8BC1\u6240\u6709\u65E5\u5FD7\u8BB0\u5F55\u5747\u91C7\u7528\u7ED3\u6784\u5316\u8F93\u51FA\u624D\u66F4\u5177\u610F\u4E49\u3002\u4F7F\u7528\u793A\u4F8B\uFF1A"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "net"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/glog"\n)\n\nfunc main() {\n    ctx := context.TODO()\n    glog.SetDefaultHandler(glog.HandlerStructure)\n\n    g.Log().Info(ctx, "caution", "name", "admin")\n    glog.Error(ctx, "oops", net.ErrClosed, "status", 500)\n}\n\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u6267\u884C\u540E\uFF0C\u7EC8\u7AEF\u8F93\u51FA\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-html",children:'Time="2023-11-23 21:00:08.671" Level=INFO Content=caution name=admin\nTime="2023-11-23 21:00:08.671" Level=ERRO oops="use of closed network connection" status=500 Stack="1.  main.main\\n    /Users/txqiangguo/Workspace/gogf/gf/example/.test/main.go:16\\n"\n'})})]})}function d(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(a,{...n})}):a(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return g},a:function(){return i}});var o=r(667294);let l={},t=o.createContext(l);function i(n){let e=o.useContext(t);return o.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function g(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:i(n.components),o.createElement(t.Provider,{value:e},n.children)}}}]);