"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["15301"],{514211:function(n,e,o){o.r(e),o.d(e,{metadata:()=>t,contentTitle:()=>l,default:()=>a,assets:()=>d,toc:()=>s,frontMatter:()=>i});var t=JSON.parse('{"id":"docs/\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/TCP\u7EC4\u4EF6/TCP\u7EC4\u4EF6-\u8FDE\u63A5\u6C60\u7279\u6027","title":"TCP\u7EC4\u4EF6-\u8FDE\u63A5\u6C60\u7279\u6027","description":"GoFrame\u6846\u67B6\u4E2D\u7684gtcp\u6A21\u5757\u8FDE\u63A5\u6C60\u7279\u6027\uFF0C\u901A\u8FC7gtcp.PoolConn\u5B9E\u73B0\u7684\u8FDE\u63A5\u6C60\u5177\u6709600\u79D2\u7684\u56FA\u5B9A\u5B58\u6D3B\u65F6\u95F4\uFF0C\u5E76\u5177\u5907\u6570\u636E\u53D1\u9001\u65F6\u7684\u65AD\u5F00\u91CD\u8FDE\u673A\u5236\uFF0C\u9002\u7528\u4E8E\u9891\u7E41\u77ED\u94FE\u63A5\u64CD\u4F5C\u548C\u9AD8\u8FDE\u63A5\u5E76\u53D1\u7684\u573A\u666F\u3002\u6587\u7AE0\u63D0\u4F9B\u4E86\u4E24\u4E2A\u793A\u4F8B\uFF0C\u6F14\u793A\u4E86\u8FDE\u63A5\u6C60\u7684\u57FA\u7840\u4F7F\u7528\u53CA\u65AD\u5F00\u91CD\u8FDE\u64CD\u4F5C\uFF0C\u5E2E\u52A9\u7528\u6237\u6DF1\u523B\u7406\u89E3\u8FDE\u63A5\u6C60\u5728\u7F51\u7EDC\u7F16\u7A0B\u4E2D\u7684\u5B9E\u9645\u5E94\u7528\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/TCP\u7EC4\u4EF6/TCP\u7EC4\u4EF6-\u8FDE\u63A5\u6C60\u7279\u6027.md","sourceDirName":"docs/\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/TCP\u7EC4\u4EF6","slug":"/docs/network/gtcp-connection-pool","permalink":"/en/2.7.x/docs/network/gtcp-connection-pool","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/TCP\u7EC4\u4EF6/TCP\u7EC4\u4EF6-\u8FDE\u63A5\u6C60\u7279\u6027.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":3,"frontMatter":{"slug":"/docs/network/gtcp-connection-pool","title":"TCP\u7EC4\u4EF6-\u8FDE\u63A5\u6C60\u7279\u6027","sidebar_position":3,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","TCP\u8FDE\u63A5\u6C60","gtcp\u6A21\u5757","\u8FDE\u63A5\u6C60\u7279\u6027","\u77ED\u94FE\u63A5\u64CD\u4F5C","\u9AD8\u5E76\u53D1","\u65AD\u5F00\u91CD\u8FDE","\u6570\u636E\u53D1\u9001","\u793A\u4F8B\u7A0B\u5E8F"],"description":"GoFrame\u6846\u67B6\u4E2D\u7684gtcp\u6A21\u5757\u8FDE\u63A5\u6C60\u7279\u6027\uFF0C\u901A\u8FC7gtcp.PoolConn\u5B9E\u73B0\u7684\u8FDE\u63A5\u6C60\u5177\u6709600\u79D2\u7684\u56FA\u5B9A\u5B58\u6D3B\u65F6\u95F4\uFF0C\u5E76\u5177\u5907\u6570\u636E\u53D1\u9001\u65F6\u7684\u65AD\u5F00\u91CD\u8FDE\u673A\u5236\uFF0C\u9002\u7528\u4E8E\u9891\u7E41\u77ED\u94FE\u63A5\u64CD\u4F5C\u548C\u9AD8\u8FDE\u63A5\u5E76\u53D1\u7684\u573A\u666F\u3002\u6587\u7AE0\u63D0\u4F9B\u4E86\u4E24\u4E2A\u793A\u4F8B\uFF0C\u6F14\u793A\u4E86\u8FDE\u63A5\u6C60\u7684\u57FA\u7840\u4F7F\u7528\u53CA\u65AD\u5F00\u91CD\u8FDE\u64CD\u4F5C\uFF0C\u5E2E\u52A9\u7528\u6237\u6DF1\u523B\u7406\u89E3\u8FDE\u63A5\u6C60\u5728\u7F51\u7EDC\u7F16\u7A0B\u4E2D\u7684\u5B9E\u9645\u5E94\u7528\u3002"},"sidebar":"mainSidebar","previous":{"title":"TCP\u7EC4\u4EF6-TLS\u52A0\u5BC6","permalink":"/en/2.7.x/docs/network/gtcp-tls"},"next":{"title":"UDP\u7EC4\u4EF6","permalink":"/en/2.7.x/docs/network/gudp"}}'),r=o("785893"),c=o("250065");let i={slug:"/docs/network/gtcp-connection-pool",title:"TCP\u7EC4\u4EF6-\u8FDE\u63A5\u6C60\u7279\u6027",sidebar_position:3,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","TCP\u8FDE\u63A5\u6C60","gtcp\u6A21\u5757","\u8FDE\u63A5\u6C60\u7279\u6027","\u77ED\u94FE\u63A5\u64CD\u4F5C","\u9AD8\u5E76\u53D1","\u65AD\u5F00\u91CD\u8FDE","\u6570\u636E\u53D1\u9001","\u793A\u4F8B\u7A0B\u5E8F"],description:"GoFrame\u6846\u67B6\u4E2D\u7684gtcp\u6A21\u5757\u8FDE\u63A5\u6C60\u7279\u6027\uFF0C\u901A\u8FC7gtcp.PoolConn\u5B9E\u73B0\u7684\u8FDE\u63A5\u6C60\u5177\u6709600\u79D2\u7684\u56FA\u5B9A\u5B58\u6D3B\u65F6\u95F4\uFF0C\u5E76\u5177\u5907\u6570\u636E\u53D1\u9001\u65F6\u7684\u65AD\u5F00\u91CD\u8FDE\u673A\u5236\uFF0C\u9002\u7528\u4E8E\u9891\u7E41\u77ED\u94FE\u63A5\u64CD\u4F5C\u548C\u9AD8\u8FDE\u63A5\u5E76\u53D1\u7684\u573A\u666F\u3002\u6587\u7AE0\u63D0\u4F9B\u4E86\u4E24\u4E2A\u793A\u4F8B\uFF0C\u6F14\u793A\u4E86\u8FDE\u63A5\u6C60\u7684\u57FA\u7840\u4F7F\u7528\u53CA\u65AD\u5F00\u91CD\u8FDE\u64CD\u4F5C\uFF0C\u5E2E\u52A9\u7528\u6237\u6DF1\u523B\u7406\u89E3\u8FDE\u63A5\u6C60\u5728\u7F51\u7EDC\u7F16\u7A0B\u4E2D\u7684\u5B9E\u9645\u5E94\u7528\u3002"},l=void 0,d={},s=[{value:"\u793A\u4F8B1\uFF0C\u57FA\u672C\u4F7F\u7528",id:"\u793A\u4F8B1\u57FA\u672C\u4F7F\u7528",level:2},{value:"\u793A\u4F8B2\uFF0C\u8FDE\u63A5\u65AD\u5F00\u60C5\u51B5",id:"\u793A\u4F8B2\u8FDE\u63A5\u65AD\u5F00\u60C5\u51B5",level:2}];function g(n){let e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"gtcp"})," \u6A21\u5757\u63D0\u4F9B\u4E86\u8FDE\u63A5\u6C60\u7684\u7279\u6027\uFF0C\u7531 ",(0,r.jsx)(e.code,{children:"gtcp.PoolConn"})," \u5BF9\u8C61\u5B9E\u73B0\uFF0C\u8FDE\u63A5\u6C60\u7F13\u5B58\u56FA\u5B9A\u5B58\u6D3B\u65F6\u95F4\u4E3A600\u79D2\uFF0C\u4E14\u5185\u90E8\u5B9E\u73B0\u4E86\u6570\u636E\u53D1\u9001\u65F6\u7684\u65AD\u5F00\u91CD\u8FDE\u673A\u5236\u3002\u8FDE\u63A5\u6C60\u975E\u5E38\u9002\u5408\u4E8E\u9891\u7E41\u7684\u77ED\u94FE\u63A5\u64CD\u4F5C\u4E14\u8FDE\u63A5\u5E76\u53D1\u91CF\u5927\u7684\u573A\u666F\u3002\u6211\u4EEC\u63A5\u4E0B\u6765\u4F7F\u7528\u4E24\u4E2A\u793A\u4F8B\u6765\u6F14\u793A\u4E00\u4E0B\u8FDE\u63A5\u6C60\u7684\u4F5C\u7528\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u4F7F\u7528\u65B9\u5F0F"}),"\uFF1A"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/net/gtcp"\n'})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u63A5\u53E3\u6587\u6863"}),"\uFF1A"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/net/gtcp",children:"https://pkg.go.dev/github.com/gogf/gf/v2/net/gtcp"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:"type PoolConn\n    func NewPoolConn(addr string, timeout ...int) (*PoolConn, error)\n    func (c *PoolConn) Close() error\n    func (c *PoolConn) Recv(length int, retry ...Retry) ([]byte, error)\n    func (c *PoolConn) RecvLine(retry ...Retry) ([]byte, error)\n    func (c *PoolConn) RecvPkg(option ...PkgOption) ([]byte, error)\n    func (c *PoolConn) RecvPkgWithTimeout(timeout time.Duration, option ...PkgOption) ([]byte, error)\n    func (c *PoolConn) RecvWithTimeout(length int, timeout time.Duration, retry ...Retry) (data []byte, err error)\n    func (c *PoolConn) Send(data []byte, retry ...Retry) error\n    func (c *PoolConn) SendPkg(data []byte, option ...PkgOption) (err error)\n    func (c *PoolConn) SendPkgWithTimeout(data []byte, timeout time.Duration, option ...PkgOption) error\n    func (c *PoolConn) SendRecv(data []byte, receive int, retry ...Retry) ([]byte, error)\n    func (c *PoolConn) SendRecvPkg(data []byte, option ...PkgOption) ([]byte, error)\n    func (c *PoolConn) SendRecvPkgWithTimeout(data []byte, timeout time.Duration, option ...PkgOption) ([]byte, error)\n    func (c *PoolConn) SendRecvWithTimeout(data []byte, receive int, timeout time.Duration, retry ...Retry) ([]byte, error)\n    func (c *PoolConn) SendWithTimeout(data []byte, timeout time.Duration, retry ...Retry) error\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u7531\u4E8E ",(0,r.jsx)(e.code,{children:"gtcp.PoolConn"})," \u7EE7\u627F\u4E8E ",(0,r.jsx)(e.code,{children:"gtcp.Conn"})," \u56E0\u6B64\u540C\u65F6\u4E5F\u53EF\u4EE5\u4F7F\u7528 ",(0,r.jsx)(e.code,{children:"gtcp.Conn"})," \u7684\u65B9\u6CD5\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u793A\u4F8B1\u57FA\u672C\u4F7F\u7528",children:"\u793A\u4F8B1\uFF0C\u57FA\u672C\u4F7F\u7528"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "time"\n    "github.com/gogf/gf/v2/net/gtcp"\n    "github.com/gogf/gf/v2/os/glog"\n    "github.com/gogf/gf/v2/os/gtime"\n)\n\nfunc main() {\n    // Server\n    go gtcp.NewServer("127.0.0.1:8999", func(conn *gtcp.Conn) {\n        defer conn.Close()\n        for {\n            data, err := conn.Recv(-1)\n            if len(data) > 0 {\n                if err := conn.Send(append([]byte("> "), data...)); err != nil {\n                    fmt.Println(err)\n                }\n            }\n            if err != nil {\n                break\n            }\n        }\n    }).Run()\n\n    time.Sleep(time.Second)\n\n    // Client\n    for {\n       if conn, err := gtcp.NewPoolConn("127.0.0.1:8999"); err == nil {\n           if b, err := conn.SendRecv([]byte(gtime.Datetime()), -1); err == nil {\n               fmt.Println(string(b), conn.LocalAddr(), conn.RemoteAddr())\n           } else {\n               fmt.Println(err)\n           }\n           conn.Close()\n       } else {\n           glog.Error(err)\n       }\n       time.Sleep(time.Second)\n    }\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u5728\u8FD9\u4E2A\u793A\u4F8B\u4E2D\uFF0CServer\u521B\u5EFA\u65B0\u7684goroutine\u5F02\u6B65\u8FD0\u884C\uFF0CClient\u5728main goroutine\u4E2D\u6267\u884C\u3002Server\u7AEF\u662F\u4E00\u4E2A\u56DE\u663E\u670D\u52A1\u5668\uFF0CClient\u6BCF\u96941\u79D2\u5411Server\u7AEF\u53D1\u9001\u5F53\u524D\u7684\u65F6\u95F4\uFF0C\u7ECF\u8FC7Server\u7AEF\u56DE\u663E\u8FD4\u56DE\u540E\uFF0C\u5728Client\u7AEF\u6253\u5370\u51FA\u53CC\u65B9\u7684\u8FDE\u63A5\u7AEF\u53E3\u4FE1\u606F\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u6267\u884C\u540E\uFF0C\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"> 2018-07-11 23:29:54 127.0.0.1:55876 127.0.0.1:8999\n> 2018-07-11 23:29:55 127.0.0.1:55876 127.0.0.1:8999\n> 2018-07-11 23:29:56 127.0.0.1:55876 127.0.0.1:8999\n> 2018-07-11 23:29:57 127.0.0.1:55876 127.0.0.1:8999\n> 2018-07-11 23:29:58 127.0.0.1:55876 127.0.0.1:8999\n...\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u53EF\u4EE5\u770B\u5230\uFF0CClient\u7684\u7AEF\u53E3\u4E00\u76F4\u672A\u53D8\uFF0C\u6BCF\u4E00\u6B21\u901A\u8FC7 ",(0,r.jsx)(e.code,{children:'gtcp.NewConn("127.0.0.1:8999")'})," \u83B7\u5F97\u7684\u90FD\u662F\u540C\u4E00\u4E2A ",(0,r.jsx)(e.code,{children:"gtcp.Conn"})," \u5BF9\u8C61\uFF0C\u4E14\u6BCF\u4E00\u6B21 ",(0,r.jsx)(e.code,{children:"conn.Close()"})," \u65F6\u5E76\u4E0D\u662F\u771F\u6B63\u7684\u5173\u95ED\u8FDE\u63A5\uFF0C\u800C\u662F\u5C06\u8BE5\u5BF9\u8C61\u91CD\u65B0\u4E22\u56DE\u5230\u8FDE\u63A5\u6C60\u91CC\u5FAA\u73AF\u4F7F\u7528\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u793A\u4F8B2\u8FDE\u63A5\u65AD\u5F00\u60C5\u51B5",children:"\u793A\u4F8B2\uFF0C\u8FDE\u63A5\u65AD\u5F00\u60C5\u51B5"}),"\n",(0,r.jsx)(e.p,{children:"\u8FD9\u4E2A\u4F8B\u5B50\u662F\u4E3A\u4E86\u5C55\u793A\u5F53\u670D\u52A1\u7AEF\u5173\u95ED\u8FDE\u63A5\u540E\uFF0C\u8BE5\u8FDE\u63A5\u5BF9\u8C61\u8FD8\u662F\u5426\u6709\u6548\u7684\u5904\u7406\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "time"\n    "github.com/gogf/gf/v2/net/gtcp"\n    "github.com/gogf/gf/v2/os/glog"\n    "github.com/gogf/gf/v2/os/gtime"\n)\n\nfunc main() {\n    // Server\n    go gtcp.NewServer("127.0.0.1:8999", func(conn *gtcp.Conn) {\n        defer conn.Close()\n        for {\n            data, err := conn.Recv(-1)\n            if len(data) > 0 {\n                if err := conn.Send(append([]byte("> "), data...)); err != nil {\n                    fmt.Println(err)\n                }\n            }\n            if err != nil {\n                break\n            }\n            return\n        }\n    }).Run()\n\n    time.Sleep(time.Second)\n\n    // Client\n    for {\n       if conn, err := gtcp.NewPoolConn("127.0.0.1:8999"); err == nil {\n           if b, err := conn.SendRecv([]byte(gtime.Datetime()), -1); err == nil {\n               fmt.Println(string(b), conn.LocalAddr(), conn.RemoteAddr())\n           } else {\n               fmt.Println(err)\n           }\n           conn.Close()\n       } else {\n           glog.Error(err)\n       }\n       time.Sleep(time.Second)\n    }\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u6267\u884C\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"> 2018-07-20 12:56:15 127.0.0.1:59368 127.0.0.1:8999\nEOF\n> 2018-07-20 12:56:17 127.0.0.1:59376 127.0.0.1:8999\nEOF\n> 2018-07-20 12:56:19 127.0.0.1:59378 127.0.0.1:8999\nEOF\n...\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u5728\u8FD9\u4E2A\u793A\u4F8B\u4E2D\uFF0CServer\u6BCF\u5904\u7406\u5B8C\u6BD5\u4E00\u6761\u8BF7\u6C42\u4E4B\u540E\u4FBF\u5173\u95ED\u94FE\u63A5\u3002Client\u5728\u7B2C\u4E00\u6761\u8BF7\u6C42\u53D1\u9001\u5B8C\u6BD5\u540E\uFF0C\u7531\u4E8E\u8FDE\u63A5\u6C60\u7684IO\u590D\u7528\u7279\u6027\uFF0C\u4E0B\u4E00\u6B21\u83B7\u53D6\u5230\u7684\u5C06\u662F\u540C\u4E00\u4E2A\u8FDE\u63A5\u5BF9\u8C61\uFF0C\u7531\u4E8EServer\u94FE\u63A5\u5DF2\u4E3B\u52A8\u5173\u95ED\uFF0C\u7B2C\u4E8C\u6B21\u8BF7\u6C42\u5199\u5165\u6210\u529F\uFF08\u5176\u5B9E\u5E76\u672A\u6210\u529F\u53D1\u9001\u5230Server\u7AEF\uFF0C\u9700\u8981\u901A\u8FC7\u4E0B\u4E00\u6B21\u7684\u8BFB\u53D6\u64CD\u4F5C\u624D\u80FD\u68C0\u6D4B\u5230\u94FE\u63A5\u9519\u8BEF\uFF09\uFF0C\u4F46\u662F\u8BFB\u53D6\u5374\u5931\u8D25\u4E86\uFF08 ",(0,r.jsx)(e.code,{children:"EOF"})," \u8868\u793A\u76EE\u6807\u8FDE\u63A5\u5173\u95ED\uFF09\uFF0C\u56E0\u6B64\u8FD9\u4E2A\u65F6\u5019Client\u6267\u884C ",(0,r.jsx)(e.code,{children:"Close"})," \u65F6\u5C06\u4F1A\u9500\u6BC1\u8BE5\u8FDE\u63A5\u64CD\u4F5C\u5BF9\u8C61\uFF0C\u800C\u4E0D\u662F\u8FDB\u4E00\u6B65\u590D\u7528\u3002\u4E0B\u4E00\u6B21\u518D\u901A\u8FC7 ",(0,r.jsx)(e.code,{children:"gtcp.NewPoolConn"})," \u83B7\u5F97\u8FDE\u63A5\u5BF9\u8C61\u65F6\uFF0CClient\u5C06\u4F1A\u4E0EServer\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8FDE\u63A5\u8FDB\u884C\u6570\u636E\u901A\u4FE1\u3002\u6240\u4EE5\u4F60\u770B\u5230Client\u7684\u7AEF\u53E3\u4E00\u76F4\u5728\u53D8\u5316\uFF0C\u90A3\u662F\u56E0\u4E3A\u8BE5 ",(0,r.jsx)(e.code,{children:"gtcp.Conn"})," \u5BF9\u8C61\u5DF2\u7ECF\u662F\u4E00\u4E2A\u65B0\u7684\u8FDE\u63A5\u5BF9\u8C61\uFF0C\u4E4B\u524D\u7684\u8FDE\u63A5\u5BF9\u8C61\u5DF2\u7ECF\u88AB\u9500\u6BC1\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u8FDE\u63A5\u5BF9\u8C61\u7684IO\u590D\u7528\u6D89\u53CA\u5230\u5341\u5206\u5FAE\u5999\u7684\u8FDE\u63A5\u72B6\u6001\u53D8\u5316\u95EE\u9898\uFF0C\u7531\u4E8E\u70B9\u5BF9\u70B9\u7F51\u7EDC\u901A\u4FE1\u672C\u8EAB\u662F\u6BD4\u8F83\u590D\u6742\u7684\u73AF\u5883\uFF0C\u8FDE\u63A5\u5BF9\u8C61\u7684\u72B6\u6001\u968F\u65F6\u53EF\u80FD\u88AB\u52A8\u53D1\u751F\u7740\u53D8\u5316\uFF0C\u56E0\u6B64\uFF0C\u5728\u4F7F\u7528gtcp\u8FDE\u63A5\u6C60\u7279\u6027\u65F6\uFF0C\u9700\u8981\u6CE8\u610F\u5F53\u901A\u4FE1\u9519\u8BEF\u4EA7\u751F\u65F6\u7684\u8FDE\u63A5\u5BF9\u8C61\u91CD\u5EFA\u673A\u5236\uFF0C\u4E00\u65E6\u4EA7\u751F\u9519\u8BEF\uFF0C\u7ACB\u5373\u4E22\u5F03\uFF08 ",(0,r.jsx)(e.code,{children:"Close"}),"\uFF09\u8BE5\u5BF9\u8C61( ",(0,r.jsx)(e.code,{children:"gtcp.PoolConn"}),")\u5E76\u91CD\u5EFA\uFF08 ",(0,r.jsx)(e.code,{children:"gtcp.NewPoolConn"}),"\uFF09\u3002"]})]})}function a(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(g,{...n})}):g(n)}},250065:function(n,e,o){o.d(e,{Z:function(){return l},a:function(){return i}});var t=o(667294);let r={},c=t.createContext(r);function i(n){let e=t.useContext(c);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),t.createElement(c.Provider,{value:e},n.children)}}}]);