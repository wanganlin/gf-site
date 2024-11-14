"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["11530"],{333395:function(e,n,t){t.r(n),t.d(n,{metadata:()=>o,contentTitle:()=>i,default:()=>h,assets:()=>l,toc:()=>d,frontMatter:()=>r});var o=JSON.parse('{"id":"docs/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/WebSocket\u670D\u52A1","title":"WebSocket\u670D\u52A1","description":"\u4F7F\u7528GoFrame\u6846\u67B6\u5F00\u53D1WebSocket\u670D\u52A1\uFF0C\u5305\u62ECHTML5\u5BA2\u6237\u7AEF\u3001WebSocket\u670D\u52A1\u7AEF\u3001HTTPS\u652F\u6301\u548C\u5B89\u5168\u6821\u9A8C\u7B49\u5185\u5BB9\u3002\u901A\u8FC7\u793A\u4F8B\u4EE3\u7801\uFF0C\u5C55\u793A\u4E86WebSocket\u7684\u8FDE\u63A5\u4E0E\u4FE1\u606F\u4F20\u9012\u673A\u5236\uFF0C\u5E76\u8BE6\u7EC6\u8BF4\u660E\u4E86\u670D\u52A1\u7AEF\u4E0E\u5BA2\u6237\u7AEF\u4E4B\u95F4\u7684\u901A\u4FE1\u6D41\u7A0B\u548C\u6570\u636E\u5904\u7406\u65B9\u6CD5\uFF0C\u8BA9\u8BFB\u8005\u80FD\u591F\u5FEB\u901F\u4E0A\u624B\u5E76\u5B9E\u73B0\u529F\u80FD\u9F50\u5168\u7684WebSocket\u670D\u52A1\u3002","source":"@site/versioned_docs/version-2.7.x/docs/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/WebSocket\u670D\u52A1.md","sourceDirName":"docs/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027","slug":"/docs/web/senior-websocket","permalink":"/2.7.x/docs/web/senior-websocket","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/WebSocket\u670D\u52A1.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731511511000,"sidebarPosition":7,"frontMatter":{"slug":"/docs/web/senior-websocket","title":"WebSocket\u670D\u52A1","sidebar_position":7,"hide_title":true,"keywords":["WebSocket","GoFrame","WebSocket\u670D\u52A1","GoFrame\u6846\u67B6","WebSocket\u5F00\u53D1","WebSocket\u5BA2\u6237\u7AEF","HTTPS\u652F\u6301","WebSocket\u5B89\u5168","WebSocket\u8FDE\u63A5","GoFrame\u793A\u4F8B"],"description":"\u4F7F\u7528GoFrame\u6846\u67B6\u5F00\u53D1WebSocket\u670D\u52A1\uFF0C\u5305\u62ECHTML5\u5BA2\u6237\u7AEF\u3001WebSocket\u670D\u52A1\u7AEF\u3001HTTPS\u652F\u6301\u548C\u5B89\u5168\u6821\u9A8C\u7B49\u5185\u5BB9\u3002\u901A\u8FC7\u793A\u4F8B\u4EE3\u7801\uFF0C\u5C55\u793A\u4E86WebSocket\u7684\u8FDE\u63A5\u4E0E\u4FE1\u606F\u4F20\u9012\u673A\u5236\uFF0C\u5E76\u8BE6\u7EC6\u8BF4\u660E\u4E86\u670D\u52A1\u7AEF\u4E0E\u5BA2\u6237\u7AEF\u4E4B\u95F4\u7684\u901A\u4FE1\u6D41\u7A0B\u548C\u6570\u636E\u5904\u7406\u65B9\u6CD5\uFF0C\u8BA9\u8BFB\u8005\u80FD\u591F\u5FEB\u901F\u4E0A\u624B\u5E76\u5B9E\u73B0\u529F\u80FD\u9F50\u5168\u7684WebSocket\u670D\u52A1\u3002"},"sidebar":"mainSidebar","previous":{"title":"HOOK\u4E8B\u4EF6\u56DE\u8C03","permalink":"/2.7.x/docs/web/senior-hook"},"next":{"title":"\u81EA\u5B9A\u4E49\u72B6\u6001\u7801\u5904\u7406","permalink":"/2.7.x/docs/web/senior-status-handler"}}'),s=t("785893"),c=t("250065");let r={slug:"/docs/web/senior-websocket",title:"WebSocket\u670D\u52A1",sidebar_position:7,hide_title:!0,keywords:["WebSocket","GoFrame","WebSocket\u670D\u52A1","GoFrame\u6846\u67B6","WebSocket\u5F00\u53D1","WebSocket\u5BA2\u6237\u7AEF","HTTPS\u652F\u6301","WebSocket\u5B89\u5168","WebSocket\u8FDE\u63A5","GoFrame\u793A\u4F8B"],description:"\u4F7F\u7528GoFrame\u6846\u67B6\u5F00\u53D1WebSocket\u670D\u52A1\uFF0C\u5305\u62ECHTML5\u5BA2\u6237\u7AEF\u3001WebSocket\u670D\u52A1\u7AEF\u3001HTTPS\u652F\u6301\u548C\u5B89\u5168\u6821\u9A8C\u7B49\u5185\u5BB9\u3002\u901A\u8FC7\u793A\u4F8B\u4EE3\u7801\uFF0C\u5C55\u793A\u4E86WebSocket\u7684\u8FDE\u63A5\u4E0E\u4FE1\u606F\u4F20\u9012\u673A\u5236\uFF0C\u5E76\u8BE6\u7EC6\u8BF4\u660E\u4E86\u670D\u52A1\u7AEF\u4E0E\u5BA2\u6237\u7AEF\u4E4B\u95F4\u7684\u901A\u4FE1\u6D41\u7A0B\u548C\u6570\u636E\u5904\u7406\u65B9\u6CD5\uFF0C\u8BA9\u8BFB\u8005\u80FD\u591F\u5FEB\u901F\u4E0A\u624B\u5E76\u5B9E\u73B0\u529F\u80FD\u9F50\u5168\u7684WebSocket\u670D\u52A1\u3002"},i=void 0,l={},d=[{value:"HTML5\u5BA2\u6237\u7AEF",id:"html5\u5BA2\u6237\u7AEF",level:2},{value:"WebSocket\u670D\u52A1\u7AEF",id:"websocket\u670D\u52A1\u7AEF",level:2},{value:"HTTPS\u7684WebSocket",id:"https\u7684websocket",level:2},{value:"\u793A\u4F8B\u7ED3\u679C\u5C55\u793A",id:"\u793A\u4F8B\u7ED3\u679C\u5C55\u793A",level:2},{value:"Websocket\u5B89\u5168\u6821\u9A8C",id:"websocket\u5B89\u5168\u6821\u9A8C",level:2},{value:"WebSocket Client \u5BA2\u6237\u7AEF",id:"websocket-client-\u5BA2\u6237\u7AEF",level:2}];function a(e){let n={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"goframe"})," \u6846\u67B6\u8FDB\u884C ",(0,s.jsx)(n.code,{children:"websocket"})," \u5F00\u53D1\u76F8\u5F53\u7B80\u5355\u3002\u6211\u4EEC\u4EE5\u4E0B\u901A\u8FC7\u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7684 ",(0,s.jsx)(n.code,{children:"echo\u670D\u52A1\u5668"})," \u6765\u6F14\u793A ",(0,s.jsx)(n.code,{children:"goframe"})," \u6846\u67B6\u7684 ",(0,s.jsx)(n.code,{children:"websocket"})," \u7684\u4F7F\u7528\uFF08\u5BA2\u6237\u7AEF\u4F7F\u7528HTML5\u5B9E\u73B0\uFF09\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"html5\u5BA2\u6237\u7AEF",children:"HTML5\u5BA2\u6237\u7AEF"}),"\n",(0,s.jsxs)(n.p,{children:["\u5148\u4E0A ",(0,s.jsx)(n.code,{children:"H5"})," \u5BA2\u6237\u7AEF\u7684\u4EE3\u7801"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'<!DOCTYPE html>\n<html lang="zh">\n<head>\n    <title>gf websocket echo server</title>\n     <meta http-equiv="Content-Type" content="text/html;charset=utf-8"/>\n    <link rel="stylesheet" href="//cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css">\n    <script src="//cdn.bootcss.com/jquery/1.11.3/jquery.min.js"><\/script>\n</head>\n<body>\n<div class="container">\n    <div class="list-group" id="divShow"></div>\n    <div>\n        <div><input class="form-control" id="txtContent" autofocus placeholder="\u8BF7\u8F93\u5165\u53D1\u9001\u5185\u5BB9"></div>\n        <div><button class="btn btn-default" id="btnSend" style="margin-top:15px">\u53D1 \u9001</button></div>\n    </div>\n</div>\n</body>\n</html>\n\n<script type="application/javascript">\n    // \u663E\u793A\u63D0\u793A\u4FE1\u606F\n    function showInfo(content) {\n        $("<div class=\\"list-group-item list-group-item-info\\">" + content + "</div>").appendTo("#divShow")\n    }\n    // \u663E\u793A\u8B66\u544A\u4FE1\u606F\n    function showWaring(content) {\n        $("<div class=\\"list-group-item list-group-item-warning\\">" + content + "</div>").appendTo("#divShow")\n    }\n    // \u663E\u793A\u6210\u529F\u4FE1\u606F\n    function showSuccess(content) {\n        $("<div class=\\"list-group-item list-group-item-success\\">" + content + "</div>").appendTo("#divShow")\n    }\n    // \u663E\u793A\u9519\u8BEF\u4FE1\u606F\n    function showError(content) {\n        $("<div class=\\"list-group-item list-group-item-danger\\">" + content + "</div>").appendTo("#divShow")\n    }\n\n    $(function () {\n        const url = "ws://127.0.0.1:8199/ws";\n        let ws  = new WebSocket(url);\n        try {\n            // ws\u8FDE\u63A5\u6210\u529F\n            ws.onopen = function () {\n                showInfo("WebSocket Server [" + url +"] \u8FDE\u63A5\u6210\u529F\uFF01");\n            };\n            // ws\u8FDE\u63A5\u5173\u95ED\n            ws.onclose = function () {\n                if (ws) {\n                    ws.close();\n                    ws = null;\n                }\n                showError("WebSocket Server [" + url +"] \u8FDE\u63A5\u5173\u95ED\uFF01");\n            };\n            // ws\u8FDE\u63A5\u9519\u8BEF\n            ws.onerror = function () {\n                if (ws) {\n                    ws.close();\n                    ws = null;\n                }\n                showError("WebSocket Server [" + url +"] \u8FDE\u63A5\u5173\u95ED\uFF01");\n            };\n            // ws\u6570\u636E\u8FD4\u56DE\u5904\u7406\n            ws.onmessage = function (result) {\n                showWaring(" > " + result.data);\n            };\n        } catch (e) {\n            alert(e.message);\n        }\n\n        // \u6309\u94AE\u70B9\u51FB\u53D1\u9001\u6570\u636E\n        $("#btnSend").on("click", function () {\n            if (ws == null) {\n                showError("WebSocket Server [" + url +"] \u8FDE\u63A5\u5931\u8D25\uFF0C\u8BF7F5\u5237\u65B0\u9875\u9762!");\n                return;\n            }\n            const content = $.trim($("#txtContent").val()).replace("/[\\n]/g", "");\n            if (content.length <= 0) {\n                alert("\u8BF7\u8F93\u5165\u53D1\u9001\u5185\u5BB9!");\n                return;\n            }\n            $("#txtContent").val("")\n            showSuccess(content);\n            ws.send(content);\n        });\n\n        // \u56DE\u8F66\u6309\u94AE\u89E6\u53D1\u53D1\u9001\u70B9\u51FB\u4E8B\u4EF6\n        $("#txtContent").on("keydown", function (event) {\n            if (event.keyCode === 13) {\n                $("#btnSend").trigger("click");\n            }\n        });\n    })\n\n<\/script>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u6CE8\u610F\u6211\u4EEC\u8FD9\u91CC\u7684\u670D\u52A1\u7AEF\u8FDE\u63A5\u5730\u5740\u4E3A\uFF1A ",(0,s.jsx)(n.code,{children:"ws://127.0.0.1:8199/ws"}),"\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5BA2\u6237\u7AEF\u7684\u529F\u80FD\u5F88\u7B80\u5355\uFF0C\u4E3B\u8981\u5B9E\u73B0\u4E86\u8FD9\u51E0\u4E2A\u529F\u80FD\uFF1A"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u4E0E\u670D\u52A1\u7AEF ",(0,s.jsx)(n.code,{children:"websocket"})," \u8FDE\u63A5\u72B6\u6001\u4FDD\u6301\u53CA\u4FE1\u606F\u5C55\u793A\uFF1B"]}),"\n",(0,s.jsxs)(n.li,{children:["\u754C\u9762\u8F93\u5165\u5185\u5BB9\u5E76\u53D1\u9001\u4FE1\u606F\u5230 ",(0,s.jsx)(n.code,{children:"websocket"})," \u670D\u52A1\u7AEF\uFF1B"]}),"\n",(0,s.jsxs)(n.li,{children:["\u63A5\u6536\u5230 ",(0,s.jsx)(n.code,{children:"websocket"})," \u7684\u8FD4\u56DE\u4FE1\u606F\u540E\u56DE\u663E\u5728\u754C\u9762\u4E0A\uFF1B"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"websocket\u670D\u52A1\u7AEF",children:"WebSocket\u670D\u52A1\u7AEF"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/os/gfile"\n    "github.com/gogf/gf/v2/os/glog"\n)\n\nvar ctx = gctx.New()\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/ws", func(r *ghttp.Request) {\n        ws, err := r.WebSocket()\n        if err != nil {\n            glog.Error(ctx, err)\n            r.Exit()\n        }\n        for {\n            msgType, msg, err := ws.ReadMessage()\n            if err != nil {\n                return\n            }\n            if err = ws.WriteMessage(msgType, msg); err != nil {\n                return\n            }\n        }\n    })\n    s.SetServerRoot(gfile.MainPkgPath())\n    s.SetPort(8199)\n    s.Run()\n}\n\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u53EF\u4EE5\u770B\u5230\uFF0C\u670D\u52A1\u7AEF\u7684\u4EE3\u7801\u76F8\u5F53\u7B80\u5355\uFF0C\u8FD9\u91CC\u9700\u8981\u7740\u91CD\u8BF4\u660E\u7684\u662F\u8FD9\u51E0\u4E2A\u5730\u65B9\uFF1A"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"WebSocket\u65B9\u6CD5"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"websocket"})," \u670D\u52A1\u7AEF\u7684\u8DEF\u7531\u6CE8\u518C\u65B9\u5F0F\u548C\u666E\u901A\u7684 ",(0,s.jsx)(n.code,{children:"http"})," \u56DE\u8C03\u51FD\u6570\u6CE8\u518C\u65B9\u5F0F\u4E00\u6837\uFF0C\u4F46\u662F\u5728\u63A5\u53E3\u5904\u7406\u4E2D\u6211\u4EEC\u9700\u8981\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"ghttp.Request.WebSocket"})," \u65B9\u6CD5\uFF08\u8FD9\u91CC\u76F4\u63A5\u4F7F\u7528\u6307\u9488\u5BF9\u8C61 ",(0,s.jsx)(n.code,{children:"r.WebSocket()"}),"\uFF09\u5C06\u8BF7\u6C42\u8F6C\u6362\u4E3A ",(0,s.jsx)(n.code,{children:"websocket"})," \u64CD\u4F5C\uFF0C\u5E76\u8FD4\u56DE\u4E00\u4E2A ",(0,s.jsx)(n.code,{children:"WebSocket\u5BF9\u8C61"}),"\uFF0C\u8BE5\u5BF9\u8C61\u7528\u4E8E\u540E\u7EED\u7684 ",(0,s.jsx)(n.code,{children:"websocket"})," \u901A\u4FE1\u64CD\u4F5C\u3002\u5F53\u7136\uFF0C\u5982\u679C\u5BA2\u6237\u7AEF\u8BF7\u6C42\u5E76\u975E\u4E3A ",(0,s.jsx)(n.code,{children:"websocket"})," \u64CD\u4F5C\u65F6\uFF0C\u8F6C\u6362\u5C06\u4F1A\u5931\u8D25\uFF0C\u8BE5\u65B9\u6CD5\u4F1A\u8FD4\u56DE\u9519\u8BEF\u4FE1\u606F\uFF0C\u4F7F\u7528\u65F6\u8BF7\u6CE8\u610F\u5224\u65AD\u65B9\u6CD5\u7684 ",(0,s.jsx)(n.code,{children:"error"})," \u8FD4\u56DE\u503C\u3002"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"ReadMessage & WriteMessage"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8BFB\u53D6\u6D88\u606F\u4EE5\u53CA\u5199\u5165\u6D88\u606F\u5BF9\u5E94\u7684\u662F ",(0,s.jsx)(n.code,{children:"websocket"})," \u7684\u6570\u636E\u8BFB\u53D6\u4EE5\u53CA\u5199\u5165\u64CD\u4F5C( ",(0,s.jsx)(n.code,{children:"ReadMessage & WriteMessage"}),")\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u90FD\u6709\u4E00\u4E2A ",(0,s.jsx)(n.code,{children:"msgType"})," \u7684\u53D8\u91CF\uFF0C\u8868\u793A\u8BF7\u6C42\u8BFB\u53D6\u53CA\u5199\u5165\u6570\u636E\u7684\u7C7B\u578B\uFF0C\u5E38\u89C1\u7684\u4E24\u79CD\u6570\u636E\u7C7B\u578B\u4E3A\uFF1A\u5B57\u7B26\u4E32\u6570\u636E\u6216\u8005\u4E8C\u8FDB\u5236\u6570\u636E\u3002\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\uFF0C\u7531\u4E8E\u63A5\u53E3\u53CC\u65B9\u90FD\u4F1A\u7EA6\u5B9A\u7EDF\u4E00\u7684\u6570\u636E\u683C\u5F0F\uFF0C\u56E0\u6B64\u8BFB\u53D6\u548C\u5199\u5165\u7684 ",(0,s.jsx)(n.code,{children:"msgType"})," \u51E0\u4E4E\u90FD\u662F\u4E00\u81F4\u7684\uFF0C\u6240\u4EE5\u5728\u672C\u793A\u4F8B\u4E2D\u7684\u8FD4\u56DE\u6D88\u606F\u65F6\uFF0C\u6570\u636E\u7C7B\u578B\u53C2\u6570\u76F4\u63A5\u4F7F\u7528\u7684\u662F\u8BFB\u53D6\u5230\u7684 ",(0,s.jsx)(n.code,{children:"msgType"}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"https\u7684websocket",children:"HTTPS\u7684WebSocket"}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679C\u9700\u8981\u652F\u6301 ",(0,s.jsx)(n.code,{children:"HTTPS"})," \u7684 ",(0,s.jsx)(n.code,{children:"WebSocket"})," \u670D\u52A1\uFF0C\u53EA\u9700\u8981\u4F9D\u8D56\u7684 ",(0,s.jsx)(n.code,{children:"WebServer"})," \u652F\u6301 ",(0,s.jsx)(n.code,{children:"HTTPS"})," \u5373\u53EF\uFF0C\u8BBF\u95EE\u7684 ",(0,s.jsx)(n.code,{children:"WebSocket"})," \u5730\u5740\u9700\u8981\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"wss://"})," \u534F\u8BAE\u8BBF\u95EE\u3002\u4EE5\u4E0A\u5BA2\u6237\u7AEF ",(0,s.jsx)(n.code,{children:"HTML5"})," \u9875\u9762\u4E2D\u7684 ",(0,s.jsx)(n.code,{children:"WebSocket"})," \u8BBF\u95EE\u5730\u5740\u9700\u8981\u4FEE\u6539\u4E3A\uFF1A ",(0,s.jsx)(n.code,{children:"wss://127.0.0.1:8199/wss"}),"\u3002\u670D\u52A1\u7AEF\u793A\u4F8B\u4EE3\u7801\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/os/gfile"\n    "github.com/gogf/gf/v2/os/glog"\n)\n\nvar ctx = gctx.New()\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/wss", func(r *ghttp.Request) {\n        ws, err := r.WebSocket()\n        if err != nil {\n            glog.Error(ctx, err)\n            r.Exit()\n        }\n        for {\n            msgType, msg, err := ws.ReadMessage()\n            if err != nil {\n                return\n            }\n            if err = ws.WriteMessage(msgType, msg); err != nil {\n                return\n            }\n        }\n    })\n    s.SetServerRoot(gfile.MainPkgPath())\n    s.EnableHTTPS("../../https/server.crt", "../../https/server.key")\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u793A\u4F8B\u7ED3\u679C\u5C55\u793A",children:"\u793A\u4F8B\u7ED3\u679C\u5C55\u793A"}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4EEC\u9996\u5148\u6267\u884C\u793A\u4F8B\u4EE3\u7801 ",(0,s.jsx)(n.code,{children:"main.go"}),"\uFF0C\u968F\u540E\u8BBF\u95EE\u9875\u9762 ",(0,s.jsx)(n.a,{href:"http://127.0.0.1:8199/",children:"http://127.0.0.1:8199/"}),"\uFF0C\u968F\u610F\u8F93\u5165\u8BF7\u6C42\u5185\u5BB9\u5E76\u63D0\u4EA4\uFF0C\u968F\u540E\u5728\u670D\u52A1\u7AEF\u5173\u95ED\u7A0B\u5E8F\u3002\u53EF\u4EE5\u770B\u5230\uFF0C\u9875\u9762\u4F1A\u56DE\u663E\u63D0\u4EA4\u7684\u5185\u5BB9\u4FE1\u606F\uFF0C\u5E76\u4E14\u5373\u65F6\u5C55\u793A ",(0,s.jsx)(n.code,{children:"websocket"})," \u7684\u8FDE\u63A5\u72B6\u6001\u7684\u6539\u53D8\uFF0C\u5F53\u670D\u52A1\u7AEF\u5173\u95ED\u65F6\uFF0C\u5BA2\u6237\u7AEF\u4E5F\u4F1A\u5373\u65F6\u5730\u6253\u5370\u51FA\u5173\u95ED\u4FE1\u606F\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(633235).Z+"",width:"1000",height:"394"})}),"\n",(0,s.jsx)(n.h2,{id:"websocket\u5B89\u5168\u6821\u9A8C",children:"Websocket\u5B89\u5168\u6821\u9A8C"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"GoFrame"})," \u6846\u67B6\u7684 ",(0,s.jsx)(n.code,{children:"websocket"})," \u6A21\u5757\u5E76\u4E0D\u4F1A\u505A\u540C\u6E90\u68C0\u67E5( ",(0,s.jsx)(n.code,{children:"origin"}),")\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u8FD9\u79CD\u6761\u4EF6\u4E0B\u7684websocket\u5141\u8BB8\u5B8C\u5168\u8DE8\u57DF\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5B89\u5168\u7684\u6821\u9A8C\u9700\u8981\u7531\u4E1A\u52A1\u5C42\u6765\u5904\u7406\uFF0C\u5B89\u5168\u6821\u9A8C\u4E3B\u8981\u5305\u542B\u4EE5\u4E0B\u51E0\u4E2A\u65B9\u9762\uFF1A"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"origin"})," \u7684\u6821\u9A8C: \u4E1A\u52A1\u5C42\u5728\u6267\u884C ",(0,s.jsx)(n.code,{children:"r.WebSocket()"})," \u4E4B\u524D\u9700\u8981\u8FDB\u884C ",(0,s.jsx)(n.code,{children:"origin"})," \u540C\u6E90\u8BF7\u6C42\u7684\u6821\u9A8C\uFF1B\u6216\u8005\u6309\u7167\u81EA\u5B9A\u4E49\u7684\u5904\u7406\u5BF9\u8BF7\u6C42\u8FDB\u884C\u6821\u9A8C(\u5982\u679C\u8BF7\u6C42\u63D0\u4EA4\u53C2\u6570)\uFF1B\u5982\u679C\u672A\u901A\u8FC7\u6821\u9A8C\uFF0C\u90A3\u4E48\u8C03\u7528 ",(0,s.jsx)(n.code,{children:"r.Exit()"})," \u7EC8\u6B62\u8BF7\u6C42\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"websocket"})," \u901A\u4FE1\u6570\u636E\u6821\u9A8C: \u6570\u636E\u901A\u4FE1\u5F80\u5F80\u90FD\u6709\u4E00\u4E9B\u81EA\u5B9A\u4E49\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u5728\u8FD9\u4E9B\u901A\u4FE1\u6570\u636E\u4E2D\u52A0\u4E0A\u9274\u6743\u5904\u7406\u903B\u8F91\uFF1B"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"websocket-client-\u5BA2\u6237\u7AEF",children:"WebSocket Client \u5BA2\u6237\u7AEF"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:' package main\n\nimport (\n    "crypto/tls"\n    "fmt"\n    "net/http"\n    "time"\n\n    "github.com/gogf/gf/v2/net/gclient"\n    "github.com/gorilla/websocket"\n)\n\nfunc main() {\n    client := gclient.NewWebSocket()\n    client.HandshakeTimeout = time.Second    // \u8BBE\u7F6E\u8D85\u65F6\u65F6\u95F4\n    client.Proxy = http.ProxyFromEnvironment // \u8BBE\u7F6E\u4EE3\u7406\n    client.TLSClientConfig = &tls.Config{}   // \u8BBE\u7F6E tls \u914D\u7F6E\n\n    conn, _, err := client.Dial("ws://127.0.0.1:8199/ws", nil)\n    if err != nil {\n        panic(err)\n    }\n    defer conn.Close()\n\n    err = conn.WriteMessage(websocket.TextMessage, []byte("hello word"))\n    if err != nil {\n        panic(err)\n    }\n\n    mt, data, err := conn.ReadMessage()\n    if err != nil {\n        panic(err)\n    }\n    fmt.Println(mt, string(data))\n}\n'})})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},633235:function(e,n,t){t.d(n,{Z:function(){return o}});let o=t.p+"assets/images/670be5bdaae78e5cd183fade39dc20e7-e0a3885c79a60e9d4898736add4ae5c6.png"},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return r}});var o=t(667294);let s={},c=o.createContext(s);function r(e){let n=o.useContext(c);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);