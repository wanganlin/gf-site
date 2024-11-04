"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[812],{56217:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>g,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>s});const o=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-Handler","title":"\u65e5\u5fd7\u7ec4\u4ef6-Handler","description":"\u4ece v2.0 \u7248\u672c\u5f00\u59cb\uff0c glog \u7ec4\u4ef6\u63d0\u4f9b\u4e86\u8d85\u7ea7\u5f3a\u5927\u7684\u3001\u53ef\u81ea\u5b9a\u4e49\u65e5\u5fd7\u5904\u7406\u7684 Handler \u7279\u6027\u3002 Handler \u91c7\u7528\u4e86\u4e2d\u95f4\u4ef6\u8bbe\u8ba1\u65b9\u5f0f\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u4e3a\u65e5\u5fd7\u5bf9\u8c61\u6ce8\u518c\u591a\u4e2a\u5904\u7406 Handler\uff0c\u4e5f\u53ef\u4ee5\u5728 Handler \u4e2d\u8986\u76d6\u9ed8\u8ba4\u7684\u65e5\u5fd7\u7ec4\u4ef6\u5904\u7406\u903b\u8f91\u3002","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-Handler.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6","slug":"/docs/core/glog/handler","permalink":"/docs/core/glog/handler","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-Handler.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1730724532000,"sidebarPosition":6,"frontMatter":{"slug":"/docs/core/glog/handler","title":"\u65e5\u5fd7\u7ec4\u4ef6-Handler","sidebar_position":6,"hide_title":true},"sidebar":"mainSidebar","previous":{"title":"\u65e5\u5fd7\u7ec4\u4ef6-Context","permalink":"/docs/core/glog/context"},"next":{"title":"\u65e5\u5fd7\u7ec4\u4ef6-JSON\u683c\u5f0f","permalink":"/docs/core/glog/json"}}');var l=r(74848),t=r(28453);const c={slug:"/docs/core/glog/handler",title:"\u65e5\u5fd7\u7ec4\u4ef6-Handler",sidebar_position:6,hide_title:!0},i=void 0,g={},s=[{value:"\u76f8\u5173\u5b9a\u4e49",id:"\u76f8\u5173\u5b9a\u4e49",level:2},{value:"<code>Handler</code> \u65b9\u6cd5\u5b9a\u4e49",id:"handler-\u65b9\u6cd5\u5b9a\u4e49",level:3},{value:"<code>Handler</code> \u53c2\u6570\u5b9a\u4e49",id:"handler-\u53c2\u6570\u5b9a\u4e49",level:3},{value:"<code>Handler</code> \u6ce8\u518c\u5230 <code>Logger</code> \u65b9\u6cd5",id:"handler-\u6ce8\u518c\u5230-logger-\u65b9\u6cd5",level:3},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u793a\u4f8b1. \u5c06\u65e5\u5fd7\u8f93\u51fa\u8f6c\u6362\u4e3a <code>Json</code> \u683c\u5f0f\u8f93\u51fa",id:"\u793a\u4f8b1-\u5c06\u65e5\u5fd7\u8f93\u51fa\u8f6c\u6362\u4e3a-json-\u683c\u5f0f\u8f93\u51fa",level:3},{value:"\u793a\u4f8b2. \u5c06\u5185\u5bb9\u8f93\u51fa\u5230\u7b2c\u4e09\u65b9\u65e5\u5fd7\u641c\u96c6\u670d\u52a1\u4e2d",id:"\u793a\u4f8b2-\u5c06\u5185\u5bb9\u8f93\u51fa\u5230\u7b2c\u4e09\u65b9\u65e5\u5fd7\u641c\u96c6\u670d\u52a1\u4e2d",level:3},{value:"\u5168\u5c40\u9ed8\u8ba4 <code>Handler</code>",id:"\u5168\u5c40\u9ed8\u8ba4-handler",level:2},{value:"\u7ec4\u4ef6\u901a\u7528 <code>Handler</code>",id:"\u7ec4\u4ef6\u901a\u7528-handler",level:2},{value:"<code>HandlerJson</code>",id:"handlerjson",level:3},{value:"<code>HandlerStructure</code>",id:"handlerstructure",level:3}];function a(n){const e={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.p,{children:["\u4ece ",(0,l.jsx)(e.code,{children:"v2.0"})," \u7248\u672c\u5f00\u59cb\uff0c ",(0,l.jsx)(e.code,{children:"glog"})," \u7ec4\u4ef6\u63d0\u4f9b\u4e86\u8d85\u7ea7\u5f3a\u5927\u7684\u3001\u53ef\u81ea\u5b9a\u4e49\u65e5\u5fd7\u5904\u7406\u7684 ",(0,l.jsx)(e.code,{children:"Handler"})," \u7279\u6027\u3002 ",(0,l.jsx)(e.code,{children:"Handler"})," \u91c7\u7528\u4e86\u4e2d\u95f4\u4ef6\u8bbe\u8ba1\u65b9\u5f0f\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u4e3a\u65e5\u5fd7\u5bf9\u8c61\u6ce8\u518c\u591a\u4e2a\u5904\u7406 ",(0,l.jsx)(e.code,{children:"Handler"}),"\uff0c\u4e5f\u53ef\u4ee5\u5728 ",(0,l.jsx)(e.code,{children:"Handler"})," \u4e2d\u8986\u76d6\u9ed8\u8ba4\u7684\u65e5\u5fd7\u7ec4\u4ef6\u5904\u7406\u903b\u8f91\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u76f8\u5173\u5b9a\u4e49",children:"\u76f8\u5173\u5b9a\u4e49"}),"\n",(0,l.jsxs)(e.h3,{id:"handler-\u65b9\u6cd5\u5b9a\u4e49",children:[(0,l.jsx)(e.code,{children:"Handler"})," \u65b9\u6cd5\u5b9a\u4e49"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:"// Handler is function handler for custom logging content outputs.\ntype Handler func(ctx context.Context, in *HandlerInput)\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u53ef\u4ee5\u770b\u5230\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u65e5\u5fd7\u5904\u7406\u7684\u65e5\u5fd7\u4fe1\u606f\uff0c\u5e76\u4e14\u4e3a\u6307\u9488\u7c7b\u578b\uff0c\u610f\u5473\u7740\u5728 ",(0,l.jsx)(e.code,{children:"Handler"})," \u4e2d\u53ef\u4ee5\u4fee\u6539\u8be5\u53c2\u6570\u7684\u4efb\u610f\u5c5e\u6027\u4fe1\u606f\uff0c\u5e76\u4e14\u4fee\u6539\u540e\u7684\u5185\u5bb9\u5c06\u4f1a\u4f20\u9012\u7ed9\u4e0b\u4e00\u4e2a ",(0,l.jsx)(e.code,{children:"Handler"}),"\u3002"]}),"\n",(0,l.jsxs)(e.h3,{id:"handler-\u53c2\u6570\u5b9a\u4e49",children:[(0,l.jsx)(e.code,{children:"Handler"})," \u53c2\u6570\u5b9a\u4e49"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:'// HandlerInput is the input parameter struct for logging Handler.\ntype HandlerInput struct {\n    Logger      *Logger       // Current Logger object.\n    Buffer      *bytes.Buffer // Buffer for logging content outputs.\n    Time        time.Time     // Logging time, which is the time that logging triggers.\n    TimeFormat  string        // Formatted time string, like "2016-01-09 12:00:00".\n    Color       int           // Using color, like COLOR_RED, COLOR_BLUE, etc. Eg: 34\n    Level       int           // Using level, like LEVEL_INFO, LEVEL_ERRO, etc. Eg: 256\n    LevelFormat string        // Formatted level string, like "DEBU", "ERRO", etc. Eg: ERRO\n    CallerFunc  string        // The source function name that calls logging, only available if F_CALLER_FN set.\n    CallerPath  string        // The source file path and its line number that calls logging, only available if F_FILE_SHORT or F_FILE_LONG set.\n    CtxStr      string        // The retrieved context value string from context, only available if Config.CtxKeys configured.\n    TraceId     string        // Trace id, only available if OpenTelemetry is enabled.\n    Prefix      string        // Custom prefix string for logging content.\n    Content     string        // Content is the main logging content without error stack string produced by logger.\n    Values      []any         // The passed un-formatted values array to logger.\n    Stack       string        // Stack string produced by logger, only available if Config.StStatus configured.\n    IsAsync     bool          // IsAsync marks it is in asynchronous logging.\n}\n'})}),"\n",(0,l.jsxs)(e.p,{children:["\u5f00\u53d1\u8005\u6709 ",(0,l.jsx)(e.strong,{children:"\u4e24\u79cd\u65b9\u5f0f"})," \u901a\u8fc7 ",(0,l.jsx)(e.code,{children:"Handler"})," \u81ea\u5b9a\u4e49\u65e5\u5fd7\u8f93\u51fa\u5185\u5bb9\uff1a"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u4e00\u79cd\u662f\u76f4\u63a5\u4fee\u6539 ",(0,l.jsx)(e.code,{children:"HandlerInput"})," \u4e2d\u7684\u5c5e\u6027\u4fe1\u606f\uff0c\u7136\u540e\u7ee7\u7eed\u6267\u884c ",(0,l.jsx)(e.code,{children:"in.Next(ctx)"}),"\uff0c\u9ed8\u8ba4\u7684\u65e5\u5fd7\u8f93\u51fa\u903b\u8f91\u4f1a\u5c06 ",(0,l.jsx)(e.code,{children:"HandlerInput"})," \u4e2d\u7684\u5c5e\u6027\u6253\u5370\u4e3a\u5b57\u7b26\u4e32\u8f93\u51fa\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:["\u53e6\u4e00\u79cd\u662f\u5c06\u65e5\u5fd7\u5185\u5bb9\u5199\u5165\u5230 ",(0,l.jsx)(e.code,{children:"Buffer"})," \u7f13\u51b2\u5bf9\u8c61\u4e2d\u5373\u53ef\uff0c\u9ed8\u8ba4\u7684\u65e5\u5fd7\u8f93\u51fa\u903b\u8f91\u5982\u679c\u53d1\u73b0 ",(0,l.jsx)(e.code,{children:"Buffer"})," \u5df2\u7ecf\u5b58\u5728\u65e5\u5fd7\u5185\u5bb9\u5c06\u4f1a\u5ffd\u7565\u9ed8\u8ba4\u65e5\u5fd7\u8f93\u51fa\u903b\u8f91\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(e.h3,{id:"handler-\u6ce8\u518c\u5230-logger-\u65b9\u6cd5",children:[(0,l.jsx)(e.code,{children:"Handler"})," \u6ce8\u518c\u5230 ",(0,l.jsx)(e.code,{children:"Logger"})," \u65b9\u6cd5"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:"// SetHandlers sets the logging handlers for current logger.\nfunc (l *Logger) SetHandlers(handlers ...Handler)\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,l.jsxs)(e.p,{children:["\u6211\u4eec\u6765\u770b\u4e24\u4e2a\u793a\u4f8b\u4fbf\u4e8e\u66f4\u5feb\u901f\u4e86\u89e3 ",(0,l.jsx)(e.code,{children:"Handler"})," \u7684\u4f7f\u7528\u3002"]}),"\n",(0,l.jsxs)(e.h3,{id:"\u793a\u4f8b1-\u5c06\u65e5\u5fd7\u8f93\u51fa\u8f6c\u6362\u4e3a-json-\u683c\u5f0f\u8f93\u51fa",children:["\u793a\u4f8b1. \u5c06\u65e5\u5fd7\u8f93\u51fa\u8f6c\u6362\u4e3a ",(0,l.jsx)(e.code,{children:"Json"})," \u683c\u5f0f\u8f93\u51fa"]}),"\n",(0,l.jsxs)(e.p,{children:["\u5728\u672c\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u91c7\u7528\u4e86\u524d\u7f6e\u4e2d\u95f4\u4ef6\u7684\u8bbe\u8ba1\uff0c\u901a\u8fc7\u81ea\u5b9a\u4e49 ",(0,l.jsx)(e.code,{children:"Handler"})," \u5c06\u65e5\u5fd7\u5185\u5bb9\u8f93\u51fa\u683c\u5f0f\u4fee\u6539\u4e3a\u4e86 ",(0,l.jsx)(e.code,{children:"JSON"})," \u683c\u5f0f\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "encoding/json"\n    "os"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/glog"\n    "github.com/gogf/gf/v2/text/gstr"\n)\n\n// JsonOutputsForLogger is for JSON marshaling in sequence.\ntype JsonOutputsForLogger struct {\n    Time    string `json:"time"`\n    Level   string `json:"level"`\n    Content string `json:"content"`\n}\n\n// LoggingJsonHandler is a example handler for logging JSON format content.\nvar LoggingJsonHandler glog.Handler = func(ctx context.Context, in *glog.HandlerInput) {\n    jsonForLogger := JsonOutputsForLogger{\n        Time:    in.TimeFormat,\n        Level:   gstr.Trim(in.LevelFormat, "[]"),\n        Content: gstr.Trim(in.Content), // 2.7\u4ee5\u4e0a\u7248\u672c\u7528in.ValuesContent()\n    }\n    jsonBytes, err := json.Marshal(jsonForLogger)\n    if err != nil {\n        _, _ = os.Stderr.WriteString(err.Error())\n        return\n    }\n    in.Buffer.Write(jsonBytes)\n    in.Buffer.WriteString("\\n")\n    in.Next(ctx)\n}\n\nfunc main() {\n    g.Log().SetHandlers(LoggingJsonHandler)\n    ctx := context.TODO()\n    g.Log().Debug(ctx, "Debugging...")\n    g.Log().Warning(ctx, "It is warning info")\n    g.Log().Error(ctx, "Error occurs, please have a check")\n}\n'})}),"\n",(0,l.jsxs)(e.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u6211\u4eec\u53ef\u4ee5\u5728 ",(0,l.jsx)(e.code,{children:"Handler"})," \u4e2d\u901a\u8fc7 ",(0,l.jsx)(e.code,{children:"Buffer"})," \u5c5e\u6027\u64cd\u4f5c\u6765\u63a7\u5236\u8f93\u51fa\u7684\u65e5\u5fd7\u5185\u5bb9\u3002\u5982\u679c\u5728\u6240\u6709\u7684\u524d\u7f6e\u4e2d\u95f4\u4ef6 ",(0,l.jsx)(e.code,{children:"Handler"})," \u5904\u7406\u540e ",(0,l.jsx)(e.code,{children:"Buffer"})," \u5185\u5bb9\u4e3a\u7a7a\uff0c\u90a3\u4e48\u7ee7\u7eed ",(0,l.jsx)(e.code,{children:"Next"})," \u6267\u884c\u540e\u5c06\u4f1a\u6267\u884c\u65e5\u5fd7\u4e2d\u95f4\u4ef6\u9ed8\u8ba4\u7684 ",(0,l.jsx)(e.code,{children:"Handler"})," \u903b\u8f91\u3002\u6267\u884c\u672c\u793a\u4f8b\u7684\u4ee3\u7801\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-html",children:'{"time":"2021-12-31 11:03:25.438","level":"DEBU","content":"Debugging..."}\n{"time":"2021-12-31 11:03:25.438","level":"WARN","content":"It is warning info"}\n{"time":"2021-12-31 11:03:25.438","level":"ERRO","content":"Error occurs, please have a check \\nStack:\\n1.  main.main\\n    C:/hailaz/test/main.go:42"}\n'})}),"\n",(0,l.jsx)(e.h3,{id:"\u793a\u4f8b2-\u5c06\u5185\u5bb9\u8f93\u51fa\u5230\u7b2c\u4e09\u65b9\u65e5\u5fd7\u641c\u96c6\u670d\u52a1\u4e2d",children:"\u793a\u4f8b2. \u5c06\u5185\u5bb9\u8f93\u51fa\u5230\u7b2c\u4e09\u65b9\u65e5\u5fd7\u641c\u96c6\u670d\u52a1\u4e2d"}),"\n",(0,l.jsxs)(e.p,{children:["\u5728\u672c\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u91c7\u7528\u4e86\u540e\u7f6e\u4e2d\u95f4\u4ef6\u7684\u8bbe\u8ba1\uff0c\u901a\u8fc7\u81ea\u5b9a\u4e49 ",(0,l.jsx)(e.code,{children:"Handler"})," \u5c06\u65e5\u5fd7\u5185\u5bb9\u8f93\u51fa\u4e00\u4efd\u5230\u7b2c\u4e09\u65b9 ",(0,l.jsx)(e.code,{children:"graylog"})," \u65e5\u5fd7\u641c\u96c6\u670d\u52a1\u4e2d\uff0c\u5e76\u4e14\u4e0d\u5f71\u54cd\u539f\u6709\u7684\u65e5\u5fd7\u8f93\u51fa\u5904\u7406\u3002"]}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"Graylog"})," \u662f\u4e0e ",(0,l.jsx)(e.code,{children:"ELK"})," \u53ef\u4ee5\u76f8\u63d0\u5e76\u8bba\u7684\u4e00\u6b3e\u96c6\u4e2d\u5f0f\u65e5\u5fd7\u7ba1\u7406\u65b9\u6848\uff0c\u652f\u6301\u6570\u636e\u6536\u96c6\u3001\u68c0\u7d22\u3001\u53ef\u89c6\u5316 ",(0,l.jsx)(e.code,{children:"Dashboard"}),"\u3002\u5728\u672c\u793a\u4f8b\u4e2d\u4f7f\u7528\u5230\u4e86\u4e00\u4e2a\u7b80\u5355\u7684\u7b2c\u4e09\u65b9 ",(0,l.jsx)(e.code,{children:"graylog"})," \u5ba2\u6237\u7aef\u7ec4\u4ef6\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/glog"\n    gelf "github.com/robertkowalski/graylog-golang"\n)\n\nvar grayLogClient = gelf.New(gelf.Config{\n    GraylogPort:     80,\n    GraylogHostname: "graylog-host.com",\n    Connection:      "wan",\n    MaxChunkSizeWan: 42,\n    MaxChunkSizeLan: 1337,\n})\n\n// LoggingGrayLogHandler is an example handler for logging content to remote GrayLog service.\nvar LoggingGrayLogHandler glog.Handler = func(ctx context.Context, in *glog.HandlerInput) {\n    in.Next(ctx)\n    grayLogClient.Log(in.Buffer.String())\n}\n\nfunc main() {\n    g.Log().SetHandlers(LoggingGrayLogHandler)\n    ctx := context.TODO()\n    g.Log().Debug(ctx, "Debugging...")\n    g.Log().Warning(ctx, "It is warning info")\n    g.Log().Error(ctx, "Error occurs, please have a check")\n    glog.Print(ctx, "test log")\n}\n'})}),"\n",(0,l.jsxs)(e.h2,{id:"\u5168\u5c40\u9ed8\u8ba4-handler",children:["\u5168\u5c40\u9ed8\u8ba4 ",(0,l.jsx)(e.code,{children:"Handler"})]}),"\n",(0,l.jsxs)(e.p,{children:["\u65e5\u5fd7\u5bf9\u8c61\u9ed8\u8ba4\u662f\u6ca1\u6709\u8bbe\u7f6e\u4efb\u4f55\u7684 ",(0,l.jsx)(e.code,{children:"Handler"}),"\uff0c\u4ece ",(0,l.jsx)(e.code,{children:"v2.1"})," \u7248\u672c\u5f00\u59cb\uff0c\u6846\u67b6\u63d0\u4f9b\u4e86\u53ef\u4ee5\u8bbe\u7f6e\u5168\u5c40\u9ed8\u8ba4 ",(0,l.jsx)(e.code,{children:"Handler"})," \u7684\u529f\u80fd\u7279\u6027\u3002\u5168\u5c40\u9ed8\u8ba4 ",(0,l.jsx)(e.code,{children:"Handler"})," \u5c06\u5bf9\u6240\u6709\u7684\u4f7f\u7528\u8be5\u65e5\u5fd7\u7ec4\u4ef6\uff0c\u5e76\u4e14\u6ca1\u6709\u81ea\u5b9a\u4e49 ",(0,l.jsx)(e.code,{children:"Handler"})," \u7684\u65e5\u5fd7\u6253\u5370\u529f\u80fd\u751f\u6548\u3002\u540c\u65f6\uff0c\u5168\u5c40\u9ed8\u8ba4 ",(0,l.jsx)(e.code,{children:"Handler"})," \u5c06\u4f1a\u5f71\u54cd\u65e5\u5fd7\u5305\u65b9\u6cd5\u7684\u65e5\u5fd7\u6253\u5370\u884c\u4e3a\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u5f00\u53d1\u8005\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u4e24\u4e2a\u65b9\u6cd5\u6765\u8bbe\u7f6e\u548c\u83b7\u53d6\u5168\u5c40\u9ed8\u8ba4\u7684 ",(0,l.jsx)(e.code,{children:"Handler"}),"\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:"// SetDefaultHandler sets default handler for package.\nfunc SetDefaultHandler(handler Handler)\n\n// GetDefaultHandler returns the default handler of package.\nfunc GetDefaultHandler() Handler\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u9700\u8981\u6ce8\u610f\uff0c\u8fd9\u79cd\u5168\u5c40\u5305\u914d\u7f6e\u7684\u65b9\u6cd5\u4e0d\u662f\u5e76\u53d1\u5b89\u5168\u7684\uff0c\u5e76\u4e14\u5f80\u5f80\u9700\u8981\u5728\u9879\u76ee\u542f\u52a8\u903b\u8f91\u6700\u9876\u90e8\u6267\u884c\u3002"}),"\n",(0,l.jsxs)(e.p,{children:["\u4f7f\u7528\u793a\u4f8b\uff0c\u6211\u4eec\u5c06\u9879\u76ee\u6240\u6709\u7684\u65e5\u5fd7\u8f93\u51fa\u5747\u91c7\u7528 ",(0,l.jsx)(e.code,{children:"JSON"})," \u683c\u5f0f\u8f93\u51fa\uff0c\u4ee5\u4fdd\u8bc1\u65e5\u5fd7\u5185\u5bb9\u7ed3\u6784\u5316\u5e76\u4e14\u6bcf\u6b21\u65e5\u5fd7\u8f93\u51fa\u90fd\u662f\u5355\u884c\uff0c\u65b9\u4fbf\u65e5\u5fd7\u91c7\u96c6\u671f\u91c7\u96c6\u65e5\u5fd7\uff1a"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "encoding/json"\n    "os"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/glog"\n    "github.com/gogf/gf/v2/text/gstr"\n)\n\n// JsonOutputsForLogger is for JSON marshaling in sequence.\ntype JsonOutputsForLogger struct {\n    Time    string `json:"time"`\n    Level   string `json:"level"`\n    Content string `json:"content"`\n}\n\n// LoggingJsonHandler is a example handler for logging JSON format content.\nvar LoggingJsonHandler glog.Handler = func(ctx context.Context, in *glog.HandlerInput) {\n    jsonForLogger := JsonOutputsForLogger{\n        Time:    in.TimeFormat,\n        Level:   gstr.Trim(in.LevelFormat, "[]"),\n        Content: gstr.Trim(in.Content), // 2.7\u4ee5\u4e0a\u7248\u672c\u7528in.ValuesContent()\n    }\n    jsonBytes, err := json.Marshal(jsonForLogger)\n    if err != nil {\n        _, _ = os.Stderr.WriteString(err.Error())\n        return\n    }\n    in.Buffer.Write(jsonBytes)\n    in.Buffer.WriteString("\\n")\n    in.Next(ctx)\n}\n\nfunc main() {\n    ctx := context.TODO()\n    glog.SetDefaultHandler(LoggingJsonHandler)\n\n    g.Log().Debug(ctx, "Debugging...")\n    glog.Warning(ctx, "It is warning info")\n    glog.Error(ctx, "Error occurs, please have a check")\n}\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-html",children:'{"time":"2022-06-20 10:51:50.235","level":"DEBU","content":"Debugging..."}\n{"time":"2022-06-20 10:51:50.235","level":"WARN","content":"It is warning info"}\n{"time":"2022-06-20 10:51:50.235","level":"ERRO","content":"Error occurs, please have a check"}\n'})}),"\n",(0,l.jsxs)(e.h2,{id:"\u7ec4\u4ef6\u901a\u7528-handler",children:["\u7ec4\u4ef6\u901a\u7528 ",(0,l.jsx)(e.code,{children:"Handler"})]}),"\n",(0,l.jsxs)(e.p,{children:["\u7ec4\u4ef6\u63d0\u4f9b\u4e86\u4e00\u4e9b\u901a\u7528\u6027\u7684\u65e5\u5fd7 ",(0,l.jsx)(e.code,{children:"Handler"}),"\uff0c\u65b9\u4fbf\u5f00\u53d1\u8005\u4f7f\u7528\uff0c\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\u3002"]}),"\n",(0,l.jsx)(e.h3,{id:"handlerjson",children:(0,l.jsx)(e.code,{children:"HandlerJson"})}),"\n",(0,l.jsxs)(e.p,{children:["\u8be5 ",(0,l.jsx)(e.code,{children:"Handler"})," \u53ef\u4ee5\u5c06\u65e5\u5fd7\u5185\u5bb9\u8f6c\u6362\u4e3a ",(0,l.jsx)(e.code,{children:"Json"})," \u683c\u5f0f\u6253\u5370\u3002\u4f7f\u7528\u793a\u4f8b\uff1a"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/glog"\n)\n\nfunc main() {\n    ctx := context.TODO()\n    glog.SetDefaultHandler(glog.HandlerJson)\n\n    g.Log().Debug(ctx, "Debugging...")\n    glog.Warning(ctx, "It is warning info")\n    glog.Error(ctx, "Error occurs, please have a check")\n}\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-html",children:'{"Time":"2022-06-20 20:04:04.725","Level":"DEBU","Content":"Debugging..."}\n{"Time":"2022-06-20 20:04:04.725","Level":"WARN","Content":"It is warning info"}\n{"Time":"2022-06-20 20:04:04.725","Level":"ERRO","Content":"Error occurs, please have a check","Stack":"1.  main.main\\n    /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/.test/main.go:16\\n"}\n'})}),"\n",(0,l.jsx)(e.h3,{id:"handlerstructure",children:(0,l.jsx)(e.code,{children:"HandlerStructure"})}),"\n",(0,l.jsxs)(e.p,{children:["\u8be5 ",(0,l.jsx)(e.code,{children:"Handler"})," \u53ef\u4ee5\u5c06\u65e5\u5fd7\u5185\u5bb9\u8f6c\u6362\u4e3a\u7ed3\u6784\u5316\u683c\u5f0f\u6253\u5370\uff0c\u4e3b\u8981\u662f\u4e3a\u4e86\u548c ",(0,l.jsx)(e.code,{children:"Golang"})," \u65b0\u7248\u672c\u7684 ",(0,l.jsx)(e.code,{children:"slog"})," \u65e5\u5fd7\u8f93\u51fa\u5185\u5bb9\u4fdd\u6301\u4e00\u81f4\u3002\u9700\u8981\u6ce8\u610f\uff0c\u65e5\u5fd7\u7ed3\u6784\u5316\u6253\u5370\u7684\u7279\u6027\u9700\u8981\u4fdd\u8bc1\u6240\u6709\u65e5\u5fd7\u8bb0\u5f55\u5747\u91c7\u7528\u7ed3\u6784\u5316\u8f93\u51fa\u624d\u66f4\u5177\u610f\u4e49\u3002\u4f7f\u7528\u793a\u4f8b\uff1a"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "net"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/glog"\n)\n\nfunc main() {\n    ctx := context.TODO()\n    glog.SetDefaultHandler(glog.HandlerStructure)\n\n    g.Log().Info(ctx, "caution", "name", "admin")\n    glog.Error(ctx, "oops", net.ErrClosed, "status", 500)\n}\n\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-html",children:'Time="2023-11-23 21:00:08.671" Level=INFO Content=caution name=admin\nTime="2023-11-23 21:00:08.671" Level=ERRO oops="use of closed network connection" status=500 Stack="1.  main.main\\n    /Users/txqiangguo/Workspace/gogf/gf/example/.test/main.go:16\\n"\n'})})]})}function d(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(a,{...n})}):a(n)}},28453:(n,e,r)=>{r.d(e,{R:()=>c,x:()=>i});var o=r(96540);const l={},t=o.createContext(l);function c(n){const e=o.useContext(t);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:c(n.components),o.createElement(t.Provider,{value:e},n.children)}}}]);