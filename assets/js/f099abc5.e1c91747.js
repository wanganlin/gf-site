"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["5648"],{906443:function(e,r,o){o.r(r),o.d(r,{metadata:()=>n,contentTitle:()=>c,default:()=>g,assets:()=>l,toc:()=>d,frontMatter:()=>s});var n=JSON.parse('{"id":"docs/\u5FAE\u670D\u52A1\u5F00\u53D1/\u670D\u52A1\u7AEF\u914D\u7F6E","title":"\u670D\u52A1\u7AEF\u914D\u7F6E","description":"\u670D\u52A1\u7AEF\u7684\u914D\u7F6E\u65B9\u5F0F\uFF0C\u5305\u62EC\u5982\u4F55\u901A\u8FC7GoFrame\u6846\u67B6\u8BFB\u53D6\u548C\u7BA1\u7406\u914D\u7F6E\u6587\u4EF6\u3002\u63D0\u4F9B\u4E86\u4E00\u4EFD\u5B8C\u6574\u7684\u914D\u7F6E\u6A21\u677F\u793A\u4F8B\uFF0C\u6DB5\u76D6\u670D\u52A1\u540D\u79F0\u3001\u670D\u52A1\u76D1\u542C\u5730\u5740\u3001\u65E5\u5FD7\u5B58\u50A8\u76EE\u5F55\u3001\u9519\u8BEF\u65E5\u5FD7\u8BB0\u5F55\u53CA\u8BBF\u95EE\u65E5\u5FD7\u8BB0\u5F55\u7684\u8BBE\u7F6E\u65B9\u6CD5\u3002\u8BE5\u914D\u7F6E\u4E0E\u6846\u67B6\u81EA\u52A8\u8BFB\u53D6\u903B\u8F91\u4E00\u81F4\uFF0C\u786E\u4FDD\u4E86\u4FBF\u6377\u7684\u670D\u52A1\u90E8\u7F72\u548C\u9AD8\u6548\u7684\u65E5\u5FD7\u7BA1\u7406\uFF0C\u4EE5\u53CA\u5982\u4F55\u8BBE\u7F6E\u548C\u4F7F\u7528\u53C2\u6570\u65E5\u5FD7\u7EC4\u4EF6\u7684\u914D\u7F6E\u8FDB\u884C\u72EC\u7ACB\u7684grpc server\u65E5\u5FD7\u7BA1\u7406\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u5FAE\u670D\u52A1\u5F00\u53D1/\u670D\u52A1\u7AEF\u914D\u7F6E.md","sourceDirName":"docs/\u5FAE\u670D\u52A1\u5F00\u53D1","slug":"/docs/micro-service/config","permalink":"/2.7.x/docs/micro-service/config","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u5FAE\u670D\u52A1\u5F00\u53D1/\u670D\u52A1\u7AEF\u914D\u7F6E.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":3,"frontMatter":{"slug":"/docs/micro-service/config","title":"\u670D\u52A1\u7AEF\u914D\u7F6E","sidebar_position":3,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","\u914D\u7F6E\u7BA1\u7406","\u670D\u52A1\u7AEF\u914D\u7F6E","GrpcServerConfig","\u65E5\u5FD7\u914D\u7F6E","\u65E5\u5FD7\u7EC4\u4EF6","\u670D\u52A1\u76D1\u542C","\u81EA\u52A8\u6620\u5C04","\u9519\u8BEF\u65E5\u5FD7"],"description":"\u670D\u52A1\u7AEF\u7684\u914D\u7F6E\u65B9\u5F0F\uFF0C\u5305\u62EC\u5982\u4F55\u901A\u8FC7GoFrame\u6846\u67B6\u8BFB\u53D6\u548C\u7BA1\u7406\u914D\u7F6E\u6587\u4EF6\u3002\u63D0\u4F9B\u4E86\u4E00\u4EFD\u5B8C\u6574\u7684\u914D\u7F6E\u6A21\u677F\u793A\u4F8B\uFF0C\u6DB5\u76D6\u670D\u52A1\u540D\u79F0\u3001\u670D\u52A1\u76D1\u542C\u5730\u5740\u3001\u65E5\u5FD7\u5B58\u50A8\u76EE\u5F55\u3001\u9519\u8BEF\u65E5\u5FD7\u8BB0\u5F55\u53CA\u8BBF\u95EE\u65E5\u5FD7\u8BB0\u5F55\u7684\u8BBE\u7F6E\u65B9\u6CD5\u3002\u8BE5\u914D\u7F6E\u4E0E\u6846\u67B6\u81EA\u52A8\u8BFB\u53D6\u903B\u8F91\u4E00\u81F4\uFF0C\u786E\u4FDD\u4E86\u4FBF\u6377\u7684\u670D\u52A1\u90E8\u7F72\u548C\u9AD8\u6548\u7684\u65E5\u5FD7\u7BA1\u7406\uFF0C\u4EE5\u53CA\u5982\u4F55\u8BBE\u7F6E\u548C\u4F7F\u7528\u53C2\u6570\u65E5\u5FD7\u7EC4\u4EF6\u7684\u914D\u7F6E\u8FDB\u884C\u72EC\u7ACB\u7684grpc server\u65E5\u5FD7\u7BA1\u7406\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u811A\u624B\u67B6\u6A21\u5757","permalink":"/2.7.x/docs/micro-service/scaffold"},"next":{"title":"\u62E6\u622A\u5668\u7EC4\u4EF6","permalink":"/2.7.x/docs/micro-service/interceptor"}}'),t=o("785893"),i=o("250065");let s={slug:"/docs/micro-service/config",title:"\u670D\u52A1\u7AEF\u914D\u7F6E",sidebar_position:3,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","\u914D\u7F6E\u7BA1\u7406","\u670D\u52A1\u7AEF\u914D\u7F6E","GrpcServerConfig","\u65E5\u5FD7\u914D\u7F6E","\u65E5\u5FD7\u7EC4\u4EF6","\u670D\u52A1\u76D1\u542C","\u81EA\u52A8\u6620\u5C04","\u9519\u8BEF\u65E5\u5FD7"],description:"\u670D\u52A1\u7AEF\u7684\u914D\u7F6E\u65B9\u5F0F\uFF0C\u5305\u62EC\u5982\u4F55\u901A\u8FC7GoFrame\u6846\u67B6\u8BFB\u53D6\u548C\u7BA1\u7406\u914D\u7F6E\u6587\u4EF6\u3002\u63D0\u4F9B\u4E86\u4E00\u4EFD\u5B8C\u6574\u7684\u914D\u7F6E\u6A21\u677F\u793A\u4F8B\uFF0C\u6DB5\u76D6\u670D\u52A1\u540D\u79F0\u3001\u670D\u52A1\u76D1\u542C\u5730\u5740\u3001\u65E5\u5FD7\u5B58\u50A8\u76EE\u5F55\u3001\u9519\u8BEF\u65E5\u5FD7\u8BB0\u5F55\u53CA\u8BBF\u95EE\u65E5\u5FD7\u8BB0\u5F55\u7684\u8BBE\u7F6E\u65B9\u6CD5\u3002\u8BE5\u914D\u7F6E\u4E0E\u6846\u67B6\u81EA\u52A8\u8BFB\u53D6\u903B\u8F91\u4E00\u81F4\uFF0C\u786E\u4FDD\u4E86\u4FBF\u6377\u7684\u670D\u52A1\u90E8\u7F72\u548C\u9AD8\u6548\u7684\u65E5\u5FD7\u7BA1\u7406\uFF0C\u4EE5\u53CA\u5982\u4F55\u8BBE\u7F6E\u548C\u4F7F\u7528\u53C2\u6570\u65E5\u5FD7\u7EC4\u4EF6\u7684\u914D\u7F6E\u8FDB\u884C\u72EC\u7ACB\u7684grpc server\u65E5\u5FD7\u7BA1\u7406\u3002"},c=void 0,l={},d=[{value:"\u57FA\u672C\u4ECB\u7ECD",id:"\u57FA\u672C\u4ECB\u7ECD",level:2},{value:"\u914D\u7F6E\u6A21\u677F",id:"\u914D\u7F6E\u6A21\u677F",level:2}];function a(e){let r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"\u57FA\u672C\u4ECB\u7ECD",children:"\u57FA\u672C\u4ECB\u7ECD"}),"\n",(0,t.jsx)(r.p,{children:"\u670D\u52A1\u7AEF\u652F\u6301\u914D\u7F6E\u6587\u4EF6\uFF0C\u6240\u6709\u7684\u914D\u7F6E\u5C06\u4F1A\u81EA\u52A8\u6620\u5C04\u5230\u914D\u7F6E\u5BF9\u8C61\u4E2D\u3002\u914D\u7F6E\u5BF9\u8C61\u5982\u4E0B\uFF1A"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:"// GrpcServerConfig is the configuration for server.\ntype GrpcServerConfig struct {\n    Address          string              // (optional) Address for server listening.\n    Name             string              // (optional) Name for current service.\n    Logger           *glog.Logger        // (optional) Logger for server.\n    LogPath          string              // (optional) LogPath specifies the directory for storing logging files.\n    LogStdout        bool                // (optional) LogStdout specifies whether printing logging content to stdout.\n    ErrorStack       bool                // (optional) ErrorStack specifies whether logging stack information when error.\n    ErrorLogEnabled  bool                // (optional) ErrorLogEnabled enables error logging content to files.\n    ErrorLogPattern  string              // (optional) ErrorLogPattern specifies the error log file pattern like: error-{Ymd}.log\n    AccessLogEnabled bool                // (optional) AccessLogEnabled enables access logging content to file.\n    AccessLogPattern string              // (optional) AccessLogPattern specifies the error log file pattern like: access-{Ymd}.log\n}\n"})}),"\n",(0,t.jsxs)(r.p,{children:["\u914D\u7F6E\u6587\u4EF6\u7684\u81EA\u52A8\u8BFB\u53D6\u903B\u8F91\u4E0E\u6846\u67B6\u4E00\u81F4\uFF0C\u8BE6\u7EC6\u4ECB\u7ECD\u8BF7\u53C2\u8003\u7AE0\u8282\uFF1A ",(0,t.jsx)(r.a,{href:"/2.7.x/docs/core/gcfg",children:"\u914D\u7F6E\u7BA1\u7406"})]}),"\n",(0,t.jsx)(r.h2,{id:"\u914D\u7F6E\u6A21\u677F",children:"\u914D\u7F6E\u6A21\u677F"}),"\n",(0,t.jsx)(r.p,{children:"\u4E00\u4E2A\u5B8C\u6574\u7684\u914D\u7F6E\u6A21\u677F\u793A\u4F8B\uFF1A"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:'grpc:\n  name:             "demo"  # \u670D\u52A1\u540D\u79F0\n  address:          ":8000" # \u81EA\u5B9A\u4E49\u670D\u52A1\u76D1\u542C\u5730\u5740\n  logPath:          "./log" # \u65E5\u5FD7\u5B58\u50A8\u76EE\u5F55\u8DEF\u5F84\n  logStdout:        true    # \u65E5\u5FD7\u662F\u5426\u8F93\u51FA\u5230\u7EC8\u7AEF\n  errorLogEnabled:  true    # \u662F\u5426\u5F00\u542F\u9519\u8BEF\u65E5\u5FD7\u8BB0\u5F55\n  accessLogEnabled: true    # \u662F\u5426\u5F00\u542F\u8BBF\u95EE\u65E5\u5FD7\u8BB0\u5F55\n  errorStack:       true    # \u5F53\u4EA7\u751F\u9519\u8BEF\u65F6\uFF0C\u662F\u5426\u8BB0\u5F55\u9519\u8BEF\u5806\u6808\n\n  # \u65E5\u5FD7\u6269\u5C55\u914D\u7F6E(\u53C2\u6570\u65E5\u5FD7\u7EC4\u4EF6\u914D\u7F6E)\n  logger:\n    path:                  "/var/log/"   # \u65E5\u5FD7\u6587\u4EF6\u8DEF\u5F84\u3002\u9ED8\u8BA4\u4E3A\u7A7A\uFF0C\u8868\u793A\u5173\u95ED\uFF0C\u4EC5\u8F93\u51FA\u5230\u7EC8\u7AEF\n    file:                  "{Y-m-d}.log" # \u65E5\u5FD7\u6587\u4EF6\u683C\u5F0F\u3002\u9ED8\u8BA4\u4E3A"{Y-m-d}.log"\n    prefix:                ""            # \u65E5\u5FD7\u5185\u5BB9\u8F93\u51FA\u524D\u7F00\u3002\u9ED8\u8BA4\u4E3A\u7A7A\n    level:                 "all"         # \u65E5\u5FD7\u8F93\u51FA\u7EA7\u522B\n    stdout:                true          # \u65E5\u5FD7\u662F\u5426\u540C\u65F6\u8F93\u51FA\u5230\u7EC8\u7AEF\u3002\u9ED8\u8BA4true\n    rotateSize:            0             # \u6309\u7167\u65E5\u5FD7\u6587\u4EF6\u5927\u5C0F\u5BF9\u6587\u4EF6\u8FDB\u884C\u6EDA\u52A8\u5207\u5206\u3002\u9ED8\u8BA4\u4E3A0\uFF0C\u8868\u793A\u5173\u95ED\u6EDA\u52A8\u5207\u5206\u7279\u6027\n    rotateExpire:          0             # \u6309\u7167\u65E5\u5FD7\u6587\u4EF6\u65F6\u95F4\u95F4\u9694\u5BF9\u6587\u4EF6\u6EDA\u52A8\u5207\u5206\u3002\u9ED8\u8BA4\u4E3A0\uFF0C\u8868\u793A\u5173\u95ED\u6EDA\u52A8\u5207\u5206\u7279\u6027\n    rotateBackupLimit:     0             # \u6309\u7167\u5207\u5206\u7684\u6587\u4EF6\u6570\u91CF\u6E05\u7406\u5207\u5206\u6587\u4EF6\uFF0C\u5F53\u6EDA\u52A8\u5207\u5206\u7279\u6027\u5F00\u542F\u65F6\u6709\u6548\u3002\u9ED8\u8BA4\u4E3A0\uFF0C\u8868\u793A\u4E0D\u5907\u4EFD\uFF0C\u5207\u5206\u5219\u5220\u9664\n    rotateBackupExpire:    0             # \u6309\u7167\u5207\u5206\u7684\u6587\u4EF6\u6709\u6548\u671F\u6E05\u7406\u5207\u5206\u6587\u4EF6\uFF0C\u5F53\u6EDA\u52A8\u5207\u5206\u7279\u6027\u5F00\u542F\u65F6\u6709\u6548\u3002\u9ED8\u8BA4\u4E3A0\uFF0C\u8868\u793A\u4E0D\u5907\u4EFD\uFF0C\u5207\u5206\u5219\u5220\u9664\n    rotateBackupCompress:  0             # \u6EDA\u52A8\u5207\u5206\u6587\u4EF6\u7684\u538B\u7F29\u6BD4\uFF080-9\uFF09\u3002\u9ED8\u8BA4\u4E3A0\uFF0C\u8868\u793A\u4E0D\u538B\u7F29\n    rotateCheckInterval:   "1h"          # \u6EDA\u52A8\u5207\u5206\u7684\u65F6\u95F4\u68C0\u6D4B\u95F4\u9694\uFF0C\u4E00\u822C\u4E0D\u9700\u8981\u8BBE\u7F6E\u3002\u9ED8\u8BA4\u4E3A1\u5C0F\u65F6\n\n'})}),"\n",(0,t.jsxs)(r.p,{children:["\u5176\u4E2D\u7684\u65E5\u5FD7\u914D\u7F6E\u4E0E ",(0,t.jsx)(r.code,{children:"http server"})," \u4E00\u81F4\uFF0C\u53EF\u4EE5\u72EC\u7ACB\u4F7F\u7528\u65E5\u5FD7\u7EC4\u4EF6\u7684\u914D\u7F6E\u9879\u6765\u914D\u7F6E ",(0,t.jsx)(r.code,{children:"grpc server"})," \u7684\u65E5\u5FD7\u3002\u5173\u4E8E\u65E5\u5FD7\u7EC4\u4EF6\u7684\u914D\u7F6E\uFF0C\u53EF\u53C2\u8003\u8BE5\u6587\u6863\u8BE6\u7EC6\u4E86\u89E3\uFF1A ",(0,t.jsx)(r.a,{href:"/2.7.x/docs/core/glog-config",children:"\u65E5\u5FD7\u7EC4\u4EF6-\u914D\u7F6E\u7BA1\u7406"})]}),"\n",(0,t.jsxs)(r.p,{children:["\u5728\u6CA1\u6709\u914D\u7F6E ",(0,t.jsx)(r.code,{children:"address"})," \u7684\u60C5\u51B5\u4E0B\uFF0C ",(0,t.jsx)(r.code,{children:"grpc server"})," \u5C06\u4F1A\u4F7F\u7528\u672C\u5730\u7F51\u5361\u7684\u6240\u6709 ",(0,t.jsx)(r.code,{children:"ip"})," \u5730\u5740\u52A0\u4E0A ",(0,t.jsx)(r.strong,{children:"\u968F\u673A\u7A7A\u95F2\u7AEF\u53E3"})," \u6765\u542F\u52A8\uFF08\u9ED8\u8BA4\u914D\u7F6E ",(0,t.jsx)(r.code,{children:":0"}),"\uFF09\u3002\u5982\u679C\u60F3\u8981\u6307\u5B9A ",(0,t.jsx)(r.code,{children:"ip"})," \u4F46\u662F\u4F7F\u7528\u968F\u673A\u7A7A\u95F2\u7AEF\u53E3\u542F\u52A8 ",(0,t.jsx)(r.code,{children:"grpc server"}),"\uFF0C\u53EF\u4EE5\u4F7F\u7528 ",(0,t.jsx)(r.code,{children:"ip:0"})," \u7684\u683C\u5F0F\u6765\u914D\u7F6E ",(0,t.jsx)(r.code,{children:"address"}),"\uFF0C\u4F8B\u5982\uFF1A ",(0,t.jsx)(r.code,{children:"192.168.1.1:0, 10.0.1.1:0"}),"\u3002"]})]})}function g(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,r,o){o.d(r,{Z:function(){return c},a:function(){return s}});var n=o(667294);let t={},i=n.createContext(t);function s(e){let r=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);