"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["26928"],{719032:function(n,e,r){r.r(e),r.d(e,{metadata:()=>t,contentTitle:()=>d,default:()=>l,assets:()=>s,toc:()=>u,frontMatter:()=>c});var t=JSON.parse('{"id":"\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/UDP\u7EC4\u4EF6/UDP\u7EC4\u4EF6-\u8FDE\u63A5\u5BF9\u8C61","title":"UDP\u7EC4\u4EF6-\u8FDE\u63A5\u5BF9\u8C61","description":"gudp \u6A21\u5757\u63D0\u4F9B\u4E86\u975E\u5E38\u7B80\u4FBF\u6613\u7528\u7684 gudp.Conn \u94FE\u63A5\u64CD\u4F5C\u5BF9\u8C61\u3002","source":"@site/versioned_docs/version-2.5.x/\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/UDP\u7EC4\u4EF6/UDP\u7EC4\u4EF6-\u8FDE\u63A5\u5BF9\u8C61.md","sourceDirName":"\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/UDP\u7EC4\u4EF6","slug":"/\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/UDP\u7EC4\u4EF6/UDP\u7EC4\u4EF6-\u8FDE\u63A5\u5BF9\u8C61","permalink":"/en/2.5.x/\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/UDP\u7EC4\u4EF6/UDP\u7EC4\u4EF6-\u8FDE\u63A5\u5BF9\u8C61","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.5.x/\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/UDP\u7EC4\u4EF6/UDP\u7EC4\u4EF6-\u8FDE\u63A5\u5BF9\u8C61.md","tags":[],"version":"2.5.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":0,"frontMatter":{"title":"UDP\u7EC4\u4EF6-\u8FDE\u63A5\u5BF9\u8C61","sidebar_position":0,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"UDP\u7EC4\u4EF6","permalink":"/en/2.5.x/\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/UDP\u7EC4\u4EF6/"},"next":{"title":"UDP\u7EC4\u4EF6-\u5DE5\u5177\u65B9\u6CD5","permalink":"/en/2.5.x/\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/UDP\u7EC4\u4EF6/UDP\u7EC4\u4EF6-\u5DE5\u5177\u65B9\u6CD5"}}'),o=r("785893"),i=r("250065");let c={title:"UDP\u7EC4\u4EF6-\u8FDE\u63A5\u5BF9\u8C61",sidebar_position:0,hide_title:!0},d=void 0,s={},u=[{value:"\u57FA\u672C\u4ECB\u7ECD",id:"\u57FA\u672C\u4ECB\u7ECD",level:2},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:2}];function a(n){let e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"gudp"})," \u6A21\u5757\u63D0\u4F9B\u4E86\u975E\u5E38\u7B80\u4FBF\u6613\u7528\u7684 ",(0,o.jsx)(e.code,{children:"gudp.Conn"})," \u94FE\u63A5\u64CD\u4F5C\u5BF9\u8C61\u3002"]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"\u4F7F\u7528\u65B9\u5F0F"}),"\uFF1A"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/net/gudp"\n'})}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"\u63A5\u53E3\u6587\u6863"}),"\uFF1A ",(0,o.jsx)(e.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/net/gudp",children:"https://pkg.go.dev/github.com/gogf/gf/v2/net/gudp"})]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:"type Conn\n    func NewConn(raddr string, laddr ...string) (*Conn, error)\n    func NewConnByNetConn(udp *net.UDPConn) *Conn\n    func (c *Conn) Close() error\n    func (c *Conn) LocalAddr() net.Addr\n    func (c *Conn) Recv(length int, retry ...Retry) ([]byte, error)\n    func (c *Conn) RecvPkg(retry ...Retry) (result []byte, err error)\n    func (c *Conn) RecvPkgWithTimeout(timeout time.Duration, retry ...Retry) ([]byte, error)\n    func (c *Conn) RecvWithTimeout(length int, timeout time.Duration, retry ...Retry) ([]byte, error)\n    func (c *Conn) RemoteAddr() net.Addr\n    func (c *Conn) Send(data []byte, retry ...Retry) error\n    func (c *Conn) SendPkg(data []byte, retry ...Retry) error\n    func (c *Conn) SendPkgWithTimeout(data []byte, timeout time.Duration, retry ...Retry) error\n    func (c *Conn) SendRecv(data []byte, receive int, retry ...Retry) ([]byte, error)\n    func (c *Conn) SendRecvPkg(data []byte, retry ...Retry) ([]byte, error)\n    func (c *Conn) SendRecvPkgWithTimeout(data []byte, timeout time.Duration, retry ...Retry) ([]byte, error)\n    func (c *Conn) SendRecvWithTimeout(data []byte, receive int, timeout time.Duration, retry ...Retry) ([]byte, error)\n    func (c *Conn) SendWithTimeout(data []byte, timeout time.Duration, retry ...Retry) error\n    func (c *Conn) SetDeadline(t time.Time) error\n    func (c *Conn) SetRecvBufferWait(d time.Duration)\n    func (c *Conn) SetRecvDeadline(t time.Time) error\n    func (c *Conn) SetSendDeadline(t time.Time) error\n"})}),"\n",(0,o.jsxs)(e.p,{children:["\u53EF\u4EE5\u770B\u5230\uFF0C ",(0,o.jsx)(e.code,{children:"gudp.Conn"})," \u548C ",(0,o.jsx)(e.code,{children:"gtcp.Conn"})," \u7684\u65B9\u6CD5\u975E\u5E38\u7C7B\u4F3C\uFF0C\u5E76\u4E14\u4E5F\u652F\u6301\u7B80\u5355\u534F\u8BAE\u7684\u6D88\u606F\u5305\u65B9\u6CD5\u3002"]}),"\n",(0,o.jsx)(e.h2,{id:"\u57FA\u672C\u4ECB\u7ECD",children:"\u57FA\u672C\u4ECB\u7ECD"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"gudp.Conn"})," \u7684\u64CD\u4F5C\u7EDD\u5927\u90E8\u5206\u7C7B\u4F3C\u4E8E ",(0,o.jsx)(e.code,{children:"gtcp"})," \u7684\u64CD\u4F5C\u65B9\u5F0F\uFF08\u5927\u90E8\u5206\u7684\u65B9\u6CD5\u540D\u79F0\u4E5F\u76F8\u540C\uFF09\uFF0C\u4F46\u7531\u4E8E ",(0,o.jsx)(e.code,{children:"UDP"})," \u662F\u9762\u5411\u975E\u8FDE\u63A5\u7684\u534F\u8BAE\uFF0C\u56E0\u6B64 ",(0,o.jsx)(e.code,{children:"gudp.Conn"}),"\uFF08\u5E95\u5C42\u901A\u4FE1\u7AEF\u53E3\uFF09\u4E5F\u53EA\u80FD\u5B8C\u6210\u6700\u591A\u4E00\u6B21\u6570\u636E\u5199\u5165\u548C\u8BFB\u53D6\uFF0C\u5BA2\u6237\u7AEF\u4E0B\u4E00\u6B21\u518D\u4E0E\u76EE\u6807\u670D\u52A1\u7AEF\u8FDB\u884C\u901A\u4FE1\u7684\u65F6\u5019\uFF0C\u5C06\u9700\u8981\u521B\u5EFA\u65B0\u7684 ",(0,o.jsx)(e.code,{children:"Conn"})," \u5BF9\u8C61\u8FDB\u884C\u901A\u4FE1\u3002"]}),"\n",(0,o.jsx)(e.h2,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/gudp"\n    "github.com/gogf/gf/v2/os/gtime"\n    "time"\n)\n\nfunc main() {\n    // Server\n    go gudp.NewServer("127.0.0.1:8999", func(conn *gudp.Conn) {\n        defer conn.Close()\n        for {\n            data, err := conn.Recv(-1)\n            if len(data) > 0 {\n                if err := conn.Send(append([]byte("> "), data...)); err != nil {\n                    g.Log().Error(err)\n                }\n            }\n            if err != nil {\n                g.Log().Error(err)\n            }\n        }\n    }).Run()\n\n    time.Sleep(time.Second)\n\n    // Client\n    for {\n        if conn, err := gudp.NewConn("127.0.0.1:8999"); err == nil {\n            if b, err := conn.SendRecv([]byte(gtime.Datetime()), -1); err == nil {\n                fmt.Println(string(b), conn.LocalAddr(), conn.RemoteAddr())\n            } else {\n                g.Log().Error(err)\n            }\n            conn.Close()\n        } else {\n            g.Log().Error(err)\n        }\n        time.Sleep(time.Second)\n    }\n}\n'})}),"\n",(0,o.jsxs)(e.p,{children:["\u8BE5\u793A\u4F8B\u4E0E ",(0,o.jsx)(e.code,{children:"gtcp.Conn"})," \u4E2D\u7684\u901A\u4FE1\u793A\u4F8B\u7C7B\u4F3C\uFF0C\u4E0D\u540C\u7684\u662F\uFF0C\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u7AEF\u65E0\u6CD5\u4FDD\u6301\u8FDE\u63A5\uFF0C\u6BCF\u6B21\u901A\u4FE1\u90FD\u9700\u8981\u521B\u5EFA\u7684\u65B0\u7684\u8FDE\u63A5\u5BF9\u8C61\u8FDB\u884C\u901A\u4FE1\u3002"]}),"\n",(0,o.jsx)(e.p,{children:"\u6267\u884C\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"> 2018-07-21 23:13:31 127.0.0.1:33271 127.0.0.1:8999\n> 2018-07-21 23:13:32 127.0.0.1:45826 127.0.0.1:8999\n> 2018-07-21 23:13:33 127.0.0.1:58027 127.0.0.1:8999\n> 2018-07-21 23:13:34 127.0.0.1:33056 127.0.0.1:8999\n> 2018-07-21 23:13:35 127.0.0.1:39260 127.0.0.1:8999\n> 2018-07-21 23:13:36 127.0.0.1:33967 127.0.0.1:8999\n> 2018-07-21 23:13:37 127.0.0.1:52359 127.0.0.1:8999\n...\n"})})]})}function l(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(a,{...n})}):a(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return d},a:function(){return c}});var t=r(667294);let o={},i=t.createContext(o);function c(n){let e=t.useContext(i);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:c(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);