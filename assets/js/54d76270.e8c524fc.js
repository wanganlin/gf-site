"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["1495"],{789641:function(n,e,o){o.r(e),o.d(e,{metadata:()=>r,contentTitle:()=>i,default:()=>a,assets:()=>g,toc:()=>l,frontMatter:()=>s});var r=JSON.parse('{"id":"docs/\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/TCP\u7EC4\u4EF6/TCP\u7EC4\u4EF6-\u8FDE\u63A5\u5BF9\u8C61/\u8FDE\u63A5\u5BF9\u8C61-\u901A\u4FE1\u5F00\u53D1\u8FDB\u9636","title":"\u8FDE\u63A5\u5BF9\u8C61-\u901A\u4FE1\u5F00\u53D1\u8FDB\u9636","description":"\u5728GoFrame\u6846\u67B6\u4E0B\u4F7F\u7528gtcp\u5B9E\u73B0\u5F02\u6B65\u5168\u53CC\u5DE5\u901A\u4FE1\u7684\u9AD8\u7EA7\u5F00\u53D1\u3002\u901A\u8FC7\u5B8C\u6574\u793A\u4F8B\u5C55\u793A\u4E86\u5982\u4F55\u5728\u7A0B\u5E8F\u4E2D\u5904\u7406\u957F\u8FDE\u63A5\uFF0C\u5229\u7528SendPkg\u548CRecvPkg\u65B9\u6CD5\u8FDB\u884C\u6570\u636E\u4F20\u8F93\uFF0C\u5E76\u786E\u4FDD\u5E76\u53D1\u5B89\u5168\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/TCP\u7EC4\u4EF6/TCP\u7EC4\u4EF6-\u8FDE\u63A5\u5BF9\u8C61/\u8FDE\u63A5\u5BF9\u8C61-\u901A\u4FE1\u5F00\u53D1\u8FDB\u9636.md","sourceDirName":"docs/\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/TCP\u7EC4\u4EF6/TCP\u7EC4\u4EF6-\u8FDE\u63A5\u5BF9\u8C61","slug":"/docs/network/gtcp-conn-senior","permalink":"/2.7.x/docs/network/gtcp-conn-senior","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/TCP\u7EC4\u4EF6/TCP\u7EC4\u4EF6-\u8FDE\u63A5\u5BF9\u8C61/\u8FDE\u63A5\u5BF9\u8C61-\u901A\u4FE1\u5F00\u53D1\u8FDB\u9636.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":1,"frontMatter":{"slug":"/docs/network/gtcp-conn-senior","title":"\u8FDE\u63A5\u5BF9\u8C61-\u901A\u4FE1\u5F00\u53D1\u8FDB\u9636","sidebar_position":1,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","gtcp","\u957F\u8FDE\u63A5","\u5F02\u6B65\u901A\u4FE1","\u5168\u53CC\u5DE5\u901A\u4FE1","SendPkg","RecvPkg","\u7F51\u7EDC\u7F16\u7A0B","\u5E76\u53D1\u5B89\u5168"],"description":"\u5728GoFrame\u6846\u67B6\u4E0B\u4F7F\u7528gtcp\u5B9E\u73B0\u5F02\u6B65\u5168\u53CC\u5DE5\u901A\u4FE1\u7684\u9AD8\u7EA7\u5F00\u53D1\u3002\u901A\u8FC7\u5B8C\u6574\u793A\u4F8B\u5C55\u793A\u4E86\u5982\u4F55\u5728\u7A0B\u5E8F\u4E2D\u5904\u7406\u957F\u8FDE\u63A5\uFF0C\u5229\u7528SendPkg\u548CRecvPkg\u65B9\u6CD5\u8FDB\u884C\u6570\u636E\u4F20\u8F93\uFF0C\u5E76\u786E\u4FDD\u5E76\u53D1\u5B89\u5168\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u8FDE\u63A5\u5BF9\u8C61-\u6D88\u606F\u5305\u5904\u7406","permalink":"/2.7.x/docs/network/gtcp-conn-package"},"next":{"title":"TCP\u7EC4\u4EF6-\u5DE5\u5177\u65B9\u6CD5","permalink":"/2.7.x/docs/network/gtcp-funcs"}}'),c=o("785893"),t=o("250065");let s={slug:"/docs/network/gtcp-conn-senior",title:"\u8FDE\u63A5\u5BF9\u8C61-\u901A\u4FE1\u5F00\u53D1\u8FDB\u9636",sidebar_position:1,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","gtcp","\u957F\u8FDE\u63A5","\u5F02\u6B65\u901A\u4FE1","\u5168\u53CC\u5DE5\u901A\u4FE1","SendPkg","RecvPkg","\u7F51\u7EDC\u7F16\u7A0B","\u5E76\u53D1\u5B89\u5168"],description:"\u5728GoFrame\u6846\u67B6\u4E0B\u4F7F\u7528gtcp\u5B9E\u73B0\u5F02\u6B65\u5168\u53CC\u5DE5\u901A\u4FE1\u7684\u9AD8\u7EA7\u5F00\u53D1\u3002\u901A\u8FC7\u5B8C\u6574\u793A\u4F8B\u5C55\u793A\u4E86\u5982\u4F55\u5728\u7A0B\u5E8F\u4E2D\u5904\u7406\u957F\u8FDE\u63A5\uFF0C\u5229\u7528SendPkg\u548CRecvPkg\u65B9\u6CD5\u8FDB\u884C\u6570\u636E\u4F20\u8F93\uFF0C\u5E76\u786E\u4FDD\u5E76\u53D1\u5B89\u5168\u3002"},i=void 0,g={},l=[{value:"\u5F00\u53D1\u8FDB\u9636",id:"\u5F00\u53D1\u8FDB\u9636",level:2},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:2}];function d(n){let e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h2,{id:"\u5F00\u53D1\u8FDB\u9636",children:"\u5F00\u53D1\u8FDB\u9636"}),"\n",(0,c.jsxs)(e.p,{children:["\u9488\u5BF9\u4E8E\u77ED\u8FDE\u63A5\u800C\u8A00\uFF0C\u6BCF\u4E00\u6B21\u53D1\u9001\u63A5\u6536\u6570\u636E\u5373\u5173\u95ED\u8FDE\u63A5\uFF0C\u8FDE\u63A5\u7684\u5904\u7406\u903B\u8F91\u6BD4\u8F83\u7B80\u5355\uFF0C\u5F53\u7136\u901A\u4FE1\u6548\u7387\u4E5F\u4F1A\u6BD4\u8F83\u4F4E\u3002\u5728\u5927\u591A\u6570\u7684TCP\u901A\u4FE1\u573A\u666F\u4E2D\uFF0C\u5F80\u5F80\u662F\u4F7F\u7528\u957F\u8FDE\u63A5\u64CD\u4F5C\uFF0C\u5E76\u91C7\u7528\u5F02\u6B65\u5168\u53CC\u5DE5\u7684TCP\u901A\u4FE1\u6A21\u5F0F\uFF0C\u5373\u6240\u6709\u7684\u901A\u4FE1\u5B8C\u5168\u662F\u5F02\u6B65\u3002\u5728\u8FD9\u79CD\u573A\u666F\u4E0B\uFF0C ",(0,c.jsx)(e.code,{children:"gtcp.Conn"})," \u94FE\u63A5\u5BF9\u8C61\u53EF\u80FD\u540C\u65F6\u5904\u4E8E\u591A\u4E2A\u8BFB\u5199\u64CD\u4F5C\uFF08 ",(0,c.jsx)(e.code,{children:"gtcp.Conn"})," \u5BF9\u8C61\u7684\u6570\u636E\u8BFB\u5199\u64CD\u4F5C\u662F\u5E76\u53D1\u5B89\u5168\u7684\uFF09\uFF0C\u56E0\u6B64 ",(0,c.jsx)(e.code,{children:"SendRecv"})," \u64CD\u4F5C\u5728\u903B\u8F91\u4E0A\u5C06\u4F1A\u5931\u6548\u3002\u56E0\u4E3A\u5F53\u4F60\u5728\u540C\u4E00\u903B\u8F91\u64CD\u4F5C\u4E2D\u53D1\u9001\u5B8C\u6BD5\u6570\u636E\u4E4B\u540E\uFF0C\u968F\u540E\u7ACB\u5373\u83B7\u53D6\u6570\u636E\u6709\u53EF\u80FD\u5F97\u5230\u7684\u662F\u5176\u4ED6\u5199\u64CD\u4F5C\u7684\u7ED3\u679C\u3002"]}),"\n",(0,c.jsxs)(e.p,{children:["\u65E0\u8BBA\u670D\u52A1\u7AEF\u8FD8\u662F\u5BA2\u6237\u7AEF\uFF0C\u90FD\u9700\u8981\u5728\u72EC\u7ACB\u7684\u5F02\u6B65\u5FAA\u73AF\u4E2D\u5C01\u88C5\u4F7F\u7528 ",(0,c.jsx)(e.code,{children:"Recv*"})," \u65B9\u6CD5\u83B7\u53D6\u6570\u636E\u5E76\u901A\u8FC7 ",(0,c.jsx)(e.code,{children:"switch...case..."})," \u5904\u7406\u6570\u636E\uFF08\u4EC5\u5728\u4E00\u4E2A ",(0,c.jsx)(e.code,{children:"goroutine"})," \u4E2D\u5168\u6743\u8D1F\u8D23\u8BFB\u53D6\u6570\u636E\uFF09\uFF0C\u6839\u636E\u8BF7\u6C42\u6570\u636E\u8FDB\u884C\u4E1A\u52A1\u5904\u7406\u7684\u8F6C\u53D1\u3002"]}),"\n",(0,c.jsx)(e.admonition,{type:"tip",children:(0,c.jsxs)(e.p,{children:["\u4E5F\u5C31\u662F\u8BF4\uFF0C ",(0,c.jsx)(e.code,{children:"Send*"}),"/ ",(0,c.jsx)(e.code,{children:"Recv*"})," \u65B9\u6CD5\u662F\u5E76\u53D1\u5B89\u5168\u7684\uFF0C\u4F46\u662F\u53D1\u9001\u6570\u636E\u65F6\u8981\u4E00\u6B21\u6027\u53D1\u9001\u3002\u7531\u4E8E\u652F\u6301\u5F02\u6B65\u5E76\u53D1\u5199\uFF0C ",(0,c.jsx)(e.code,{children:"gtcp.Conn"})," \u5BF9\u8C61\u4E0D\u5E26\u4EFB\u4F55\u7F13\u51B2\u5B9E\u73B0\u3002"]})}),"\n",(0,c.jsx)(e.h2,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,c.jsxs)(e.p,{children:["\u6211\u4EEC\u901A\u8FC7\u4E00\u4E2A\u5B8C\u6210\u7684\u793A\u4F8B\u6765\u8BF4\u660E\u4E00\u4E0B\u5982\u4F55\u5728\u7A0B\u5E8F\u4E2D\u5B9E\u73B0\u5F02\u6B65\u5168\u53CC\u5DE5\u901A\u4FE1\uFF0C\u5B8C\u6210\u793A\u4F8B\u4EE3\u7801\u4F4D\u4E8E\uFF1A ",(0,c.jsx)(e.a,{href:"https://github.com/gogf/gf/v2/tree/master/.example/net/gtcp/pkg_operations/common",children:"https://github.com/gogf/gf/v2/tree/master/.example/net/gtcp/pkg_operations/common"})]}),"\n",(0,c.jsxs)(e.ol,{children:["\n",(0,c.jsx)(e.li,{children:(0,c.jsx)(e.code,{children:"types/types.go"})}),"\n"]}),"\n",(0,c.jsxs)(e.p,{children:["\u5B9A\u4E49\u901A\u4FE1\u7684\u6570\u636E\u683C\u5F0F\uFF0C\u968F\u540E\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 ",(0,c.jsx)(e.code,{children:"SendPkg"}),"/ ",(0,c.jsx)(e.code,{children:"RecvPkg"})," \u65B9\u6CD5\u6765\u901A\u4FE1\u3002"]}),"\n",(0,c.jsxs)(e.p,{children:["\u8003\u8651\u5230\u7B80\u5316\u6D4B\u8BD5\u4EE3\u7801\u590D\u6742\u5EA6\uFF0C\u56E0\u6B64\u8FD9\u91CC\u4F7F\u7528 ",(0,c.jsx)(e.code,{children:"JSON"})," \u6570\u636E\u683C\u5F0F\u6765\u4F20\u9012\u6570\u636E\u3002\u5728\u4E00\u4E9B\u5BF9\u4E8E\u6D88\u606F\u5305\u5927\u5C0F\u6BD4\u8F83\u4E25\u683C\u7684\u573A\u666F\u4E2D\uFF0C ",(0,c.jsx)(e.code,{children:"\u6570\u636E"})," \u5B57\u6BB5\u53EF\u4EE5\u81EA\u884C\u6309\u7167\u4E8C\u8FDB\u5236\u8FDB\u884C\u5C01\u88C5\u89E3\u6790\u8BBE\u8BA1\u3002\u6B64\u5916\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5373\u4F7F\u4F7F\u7528 ",(0,c.jsx)(e.code,{children:"JSON"})," \u6570\u636E\u683C\u5F0F\uFF0C\u5176\u4E2D\u7684 ",(0,c.jsx)(e.code,{children:"Act"})," \u5B57\u6BB5\u5F80\u5F80\u5B9A\u4E49\u5E38\u91CF\u6765\u5B9E\u73B0\uFF0C\u5927\u90E8\u5206\u573A\u666F\u4E2D\u4F7F\u7528 ",(0,c.jsx)(e.code,{children:"uint8"})," \u7C7B\u578B\u5373\u53EF\uFF0C\u4EE5\u51CF\u5C0F\u6D88\u606F\u5305\u5927\u5C0F\uFF0C\u8FD9\u91CC\u5077\u4E00\u4E0B\u61D2\uFF0C\u76F4\u63A5\u4F7F\u7528\u5B57\u7B26\u4E32\uFF0C\u4EE5\u4FBF\u6F14\u793A\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-go",children:"package types\n\n\ntype Msg struct {\n       Act  string // \u64CD\u4F5C\n       Data string // \u6570\u636E\n}\n"})}),"\n",(0,c.jsxs)(e.ol,{start:"2",children:["\n",(0,c.jsx)(e.li,{children:(0,c.jsx)(e.code,{children:"funcs/funcs.go"})}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:"\u81EA\u5B9A\u4E49\u6570\u636E\u683C\u5F0F\u7684\u53D1\u9001/\u83B7\u53D6\u5B9A\u4E49\uFF0C\u4FBF\u4E8E\u6570\u636E\u7ED3\u6784\u7F16\u7801/\u89E3\u6790\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-go",children:'package funcs\n\n\nimport (\n       "encoding/json"\n       "fmt"\n       "github.com/gogf/gf/v2/net/gtcp"\n       "github.com/gogf/gf/.example/net/gtcp/pkg_operations/common/types"\n)\n\n\n// \u81EA\u5B9A\u4E49\u683C\u5F0F\u53D1\u9001\u6D88\u606F\u5305\nfunc SendPkg(conn *gtcp.Conn, act string, data...string) error {\n       s := ""\n       if len(data) > 0 {\n           s = data[0]\n       }\n       msg, err := json.Marshal(types.Msg{\n           Act  : act,\n           Data : s,\n       })\n       if err != nil {\n           panic(err)\n       }\n       return conn.SendPkg(msg)\n}\n\n\n// \u81EA\u5B9A\u4E49\u683C\u5F0F\u63A5\u6536\u6D88\u606F\u5305\nfunc RecvPkg(conn *gtcp.Conn) (msg *types.Msg, err error) {\n       if data, err := conn.RecvPkg(); err != nil {\n           return nil, err\n       } else {\n           msg = &types.Msg{}\n           err = json.Unmarshal(data, msg)\n           if err != nil {\n               return nil, fmt.Errorf("invalid package structure: %s", err.Error())\n           }\n           return msg, err\n       }\n}\n'})}),"\n",(0,c.jsxs)(e.ol,{start:"3",children:["\n",(0,c.jsx)(e.li,{children:(0,c.jsx)(e.code,{children:"gtcp_common_server.go"})}),"\n"]}),"\n",(0,c.jsxs)(e.p,{children:["\u901A\u4FE1\u670D\u52A1\u7AEF\u3002\u5728\u8BE5\u793A\u4F8B\u4E2D\uFF0C\u670D\u52A1\u7AEF\u5E76\u4E0D\u4E3B\u52A8\u65AD\u5F00\u8FDE\u63A5\uFF0C\u800C\u662F\u5728 ",(0,c.jsx)(e.code,{children:"10"})," \u79D2\u540E\u5411\u5BA2\u6237\u7AEF\u53D1\u9001 ",(0,c.jsx)(e.code,{children:"doexit"})," \u6D88\u606F\uFF0C\u901A\u77E5\u5BA2\u6237\u7AEF\u4E3B\u52A8\u65AD\u5F00\u8FDE\u63A5\uFF0C\u4EE5\u7ED3\u675F\u793A\u4F8B\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-go",children:'package main\n\n\nimport (\n       "github.com/gogf/gf/v2/net/gtcp"\n       "github.com/gogf/gf/v2/os/glog"\n       "github.com/gogf/gf/v2/os/gtimer"\n       "github.com/gogf/gf/.example/net/gtcp/pkg_operations/common/funcs"\n       "github.com/gogf/gf/.example/net/gtcp/pkg_operations/common/types"\n       "time"\n)\n\n\nfunc main() {\n       gtcp.NewServer("127.0.0.1:8999", func(conn *gtcp.Conn) {\n           defer conn.Close()\n           // \u6D4B\u8BD5\u6D88\u606F, 10\u79D2\u540E\u8BA9\u5BA2\u6237\u7AEF\u4E3B\u52A8\u9000\u51FA\n           gtimer.SetTimeout(10*time.Second, func() {\n               funcs.SendPkg(conn, "doexit")\n           })\n           for {\n               msg, err := funcs.RecvPkg(conn)\n               if err != nil {\n                   if err.Error() == "EOF" {\n                       glog.Println("client closed")\n                   }\n                   break\n               }\n               switch msg.Act {\n                   case "hello":     onClientHello(conn, msg)\n                   case "heartbeat": onClientHeartBeat(conn, msg)\n                   default:\n                       glog.Errorf("invalid message: %v", msg)\n                       break\n               }\n           }\n       }).Run()\n}\n\n\nfunc onClientHello(conn *gtcp.Conn, msg *types.Msg) {\n       glog.Printf("hello message from [%s]: %s", conn.RemoteAddr().String(), msg.Data)\n       funcs.SendPkg(conn, msg.Act, "Nice to meet you!")\n}\n\n\nfunc onClientHeartBeat(conn *gtcp.Conn, msg *types.Msg) {\n       glog.Printf("heartbeat from [%s]", conn.RemoteAddr().String())\n}\n'})}),"\n",(0,c.jsxs)(e.ol,{start:"4",children:["\n",(0,c.jsx)(e.li,{children:(0,c.jsx)(e.code,{children:"gtcp_common_client.go"})}),"\n"]}),"\n",(0,c.jsxs)(e.p,{children:["\u901A\u4FE1\u5BA2\u6237\u7AEF\uFF0C\u53EF\u4EE5\u770B\u5230\u4EE3\u7801\u7ED3\u6784\u548C\u670D\u52A1\u7AEF\u5DEE\u4E0D\u591A\uFF0C\u6570\u636E\u83B7\u53D6\u72EC\u7ACB\u5904\u4E8E ",(0,c.jsx)(e.code,{children:"for"})," \u5FAA\u73AF\u4E2D\uFF0C\u6BCF\u4E2A\u4E1A\u52A1\u903B\u8F91\u53D1\u9001\u6D88\u606F\u5305\u65F6\u76F4\u63A5\u4F7F\u7528 ",(0,c.jsx)(e.code,{children:"SendPkg"})," \u65B9\u6CD5\u8FDB\u884C\u53D1\u9001\u3002"]}),"\n",(0,c.jsxs)(e.p,{children:["\u5FC3\u8DF3\u6D88\u606F\u5E38\u7528 ",(0,c.jsx)(e.code,{children:"gtimer"})," \u5B9A\u65F6\u5668\u5B9E\u73B0\uFF0C\u5728\u8BE5\u793A\u4F8B\u4E2D\uFF0C\u5BA2\u6237\u7AEF\u6BCF\u9694 ",(0,c.jsx)(e.code,{children:"1"})," \u79D2\u4E3B\u52A8\u5411\u670D\u52A1\u7AEF\u53D1\u9001\u5FC3\u8DF3\u6D88\u606F\uFF0C\u5728 ",(0,c.jsx)(e.code,{children:"3"})," \u79D2\u540E\u5411\u670D\u52A1\u7AEF\u53D1\u9001 ",(0,c.jsx)(e.code,{children:"hello"})," \u6D4B\u8BD5\u6D88\u606F\u3002\u8FD9\u4E9B\u90FD\u662F\u7531 ",(0,c.jsx)(e.code,{children:"gtimer"})," \u5B9A\u65F6\u5668\u5B9E\u73B0\u7684\uFF0C\u5B9A\u65F6\u5668\u5728TCP\u901A\u4FE1\u4E2D\u6BD4\u8F83\u5E38\u89C1\u3002"]}),"\n",(0,c.jsxs)(e.p,{children:["\u5BA2\u6237\u7AEF\u8FDE\u63A5 ",(0,c.jsx)(e.code,{children:"10"})," \u79D2\u540E\uFF0C\u670D\u52A1\u7AEF\u4F1A\u7ED9\u5BA2\u6237\u7AEF\u53D1\u9001 ",(0,c.jsx)(e.code,{children:"doexit"})," \u6D88\u606F\uFF0C\u5BA2\u6237\u7AEF\u6536\u5230\u8BE5\u6D88\u606F\u540E\u4FBF\u4E3B\u52A8\u65AD\u5F00\u8FDE\u63A5\uFF0C\u957F\u8FDE\u63A5\u7ED3\u675F\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-go",children:'package main\n\n\nimport (\n       "github.com/gogf/gf/v2/net/gtcp"\n       "github.com/gogf/gf/v2/os/glog"\n       "github.com/gogf/gf/v2/os/gtimer"\n       "github.com/gogf/gf/.example/net/gtcp/pkg_operations/common/funcs"\n       "github.com/gogf/gf/.example/net/gtcp/pkg_operations/common/types"\n       "time"\n)\n\n\nfunc main() {\n       conn, err := gtcp.NewConn("127.0.0.1:8999")\n       if err != nil {\n           panic(err)\n       }\n       defer conn.Close()\n       // \u5FC3\u8DF3\u6D88\u606F\n       gtimer.SetInterval(time.Second, func() {\n           if err := funcs.SendPkg(conn, "heartbeat"); err != nil {\n               panic(err)\n           }\n       })\n       // \u6D4B\u8BD5\u6D88\u606F, 3\u79D2\u540E\u5411\u670D\u52A1\u7AEF\u53D1\u9001hello\u6D88\u606F\n       gtimer.SetTimeout(3*time.Second, func() {\n           if err := funcs.SendPkg(conn, "hello", "My name\'s John!"); err != nil {\n               panic(err)\n           }\n       })\n       for {\n           msg, err := funcs.RecvPkg(conn)\n           if err != nil {\n               if err.Error() == "EOF" {\n                   glog.Println("server closed")\n               }\n               break\n           }\n           switch msg.Act {\n               case "hello":     onServerHello(conn, msg)\n               case "doexit":    onServerDoExit(conn, msg)\n               case "heartbeat": onServerHeartBeat(conn, msg)\n               default:\n                   glog.Errorf("invalid message: %v", msg)\n                   break\n           }\n       }\n}\n\n\nfunc onServerHello(conn *gtcp.Conn, msg *types.Msg) {\n       glog.Printf("hello response message from [%s]: %s", conn.RemoteAddr().String(), msg.Data)\n}\n\n\nfunc onServerHeartBeat(conn *gtcp.Conn, msg *types.Msg) {\n       glog.Printf("heartbeat from [%s]", conn.RemoteAddr().String())\n}\n\n\nfunc onServerDoExit(conn *gtcp.Conn, msg *types.Msg) {\n       glog.Printf("exit command from [%s]", conn.RemoteAddr().String())\n       conn.Close()\n}\n'})}),"\n",(0,c.jsxs)(e.ol,{start:"5",children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u6267\u884C\u540E"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:" "})," \u670D\u52A1\u7AEF\u8F93\u51FA\u7ED3\u679C"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-html",children:"  2019-05-03 14:59:13.732 heartbeat from [127.0.0.1:51220]\n  2019-05-03 14:59:14.732 heartbeat from [127.0.0.1:51220]\n  2019-05-03 14:59:15.733 heartbeat from [127.0.0.1:51220]\n  2019-05-03 14:59:15.733 hello message from [127.0.0.1:51220]: My name's John!\n  2019-05-03 14:59:16.731 heartbeat from [127.0.0.1:51220]\n  2019-05-03 14:59:17.733 heartbeat from [127.0.0.1:51220]\n  2019-05-03 14:59:18.731 heartbeat from [127.0.0.1:51220]\n  2019-05-03 14:59:19.730 heartbeat from [127.0.0.1:51220]\n  2019-05-03 14:59:20.732 heartbeat from [127.0.0.1:51220]\n  2019-05-03 14:59:21.732 heartbeat from [127.0.0.1:51220]\n  2019-05-03 14:59:22.698 client closed\n"})}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u5BA2\u6237\u7AEF\u8F93\u51FA\u7ED3\u679C"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-html",children:"  2019-05-03 14:59:15.733 hello response message from [127.0.0.1:8999]: Nice to meet you!\n  2019-05-03 14:59:22.698 exit command from [127.0.0.1:8999]\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function a(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(d,{...n})}):d(n)}},250065:function(n,e,o){o.d(e,{Z:function(){return i},a:function(){return s}});var r=o(667294);let c={},t=r.createContext(c);function s(n){let e=r.useContext(t);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:s(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);