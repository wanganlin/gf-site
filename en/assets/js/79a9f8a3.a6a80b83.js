"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["87789"],{675387:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>i,default:()=>g,assets:()=>d,toc:()=>l,frontMatter:()=>o});var t=JSON.parse('{"id":"\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/TCP\u7EC4\u4EF6/TCP\u7EC4\u4EF6","title":"TCP\u7EC4\u4EF6","description":"gtcp \u6A21\u5757\u5B9E\u73B0\u7B80\u4FBF\u6613\u7528\u3001\u8F7B\u91CF\u7EA7\u7684 TCPServer \u670D\u52A1\u7AEF\u3002","source":"@site/versioned_docs/version-1.16.x/\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/TCP\u7EC4\u4EF6/TCP\u7EC4\u4EF6.md","sourceDirName":"\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/TCP\u7EC4\u4EF6","slug":"/\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/TCP\u7EC4\u4EF6/","permalink":"/en/1.16.x/\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/TCP\u7EC4\u4EF6/","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.16.x/\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/TCP\u7EC4\u4EF6/TCP\u7EC4\u4EF6.md","tags":[],"version":"1.16.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":0,"frontMatter":{"title":"TCP\u7EC4\u4EF6","sidebar_position":0,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u8DEF\u7531\u7BA1\u7406-\u4E2D\u95F4\u4EF6/\u62E6\u622A\u5668","permalink":"/en/1.16.x/WEB\u670D\u52A1\u5F00\u53D1/\u8DEF\u7531\u7BA1\u7406/\u8DEF\u7531\u7BA1\u7406-\u4E2D\u95F4\u4EF6\u62E6\u622A\u5668"},"next":{"title":"TCP\u7EC4\u4EF6-\u8FDE\u63A5\u5BF9\u8C61","permalink":"/en/1.16.x/\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/TCP\u7EC4\u4EF6/TCP\u7EC4\u4EF6-\u8FDE\u63A5\u5BF9\u8C61/"}}'),s=r("785893"),c=r("250065");let o={title:"TCP\u7EC4\u4EF6",sidebar_position:0,hide_title:!0},i=void 0,d={},l=[];function a(e){let n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"gtcp"})," \u6A21\u5757\u5B9E\u73B0\u7B80\u4FBF\u6613\u7528\u3001\u8F7B\u91CF\u7EA7\u7684 ",(0,s.jsx)(n.code,{children:"TCPServer"})," \u670D\u52A1\u7AEF\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u4F7F\u7528\u65B9\u5F0F"}),"\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'import "github.com/gogf/gf/net/gtcp"\n\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u63A5\u53E3\u6587\u6863"}),"\uFF1A ",(0,s.jsx)(n.a,{href:"https://godoc.org/github.com/gogf/gf/net/gtcp",children:"https://godoc.org/github.com/gogf/gf/net/gtcp"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"type Server\n    func GetServer(name ...interface{}) *Server\n    func NewServer(address string, handler func(*Conn), name ...string) *Server\n    func NewServerKeyCrt(address, crtFile, keyFile string, handler func(*Conn), name ...string) *Server\n    func NewServerTLS(address string, tlsConfig *tls.Config, handler func(*Conn), name ...string) *Server\n    func (s *Server) Close() error\n    func (s *Server) Run() (err error)\n    func (s *Server) SetAddress(address string)\n    func (s *Server) SetHandler(handler func(*Conn))\n    func (s *Server) SetTLSConfig(tlsConfig *tls.Config)\n    func (s *Server) SetTLSKeyCrt(crtFile, keyFile string) error\n\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5176\u4E2D\uFF0C ",(0,s.jsx)(n.code,{children:"GetServer"})," \u4F7F\u7528\u5355\u4F8B\u6A21\u5F0F\u901A\u8FC7\u7ED9\u5B9A\u4E00\u4E2A\u552F\u4E00\u7684\u540D\u79F0\u83B7\u53D6/\u521B\u5EFA\u4E00\u4E2A\u5355\u4F8B ",(0,s.jsx)(n.code,{children:"Server"}),"\uFF0C\u540E\u7EED\u53EF\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"SetAddress"})," \u548C ",(0,s.jsx)(n.code,{children:"SetHandler"})," \u65B9\u6CD5\u52A8\u6001\u4FEE\u6539Server\u5C5E\u6027\uFF1B ",(0,s.jsx)(n.code,{children:"NewServer"})," \u5219\u76F4\u63A5\u6839\u636E\u7ED9\u5B9A\u53C2\u6570\u521B\u5EFA\u4E00\u4E2AServer\u5BF9\u8C61\uFF0C\u5E76\u53EF\u6307\u5B9A\u540D\u79F0\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4EEC\u901A\u8FC7\u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7684 ",(0,s.jsx)(n.code,{children:"echo\u670D\u52A1\u5668"})," \u6765\u6F14\u793A ",(0,s.jsx)(n.code,{children:"TCPServer"})," \u7684\u4F7F\u7528\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/net/gtcp"\n)\n\nfunc main() {\n    gtcp.NewServer("127.0.0.1:8999", func(conn *gtcp.Conn) {\n        defer conn.Close()\n        for {\n            data, err := conn.Recv(-1)\n            if len(data) > 0 {\n                if err := conn.Send(append([]byte("> "), data...)); err != nil {\n                  fmt.Println(err)\n                }\n            }\n            if err != nil {\n                break\n            }\n        }\n    }).Run()\n}\n\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u8FD9\u4E2A\u793A\u4F8B\u4E2D\u6211\u4EEC\u4F7F\u7528\u4E86 ",(0,s.jsx)(n.code,{children:"Send"})," \u548C ",(0,s.jsx)(n.code,{children:"Recv"})," \u6765\u53D1\u9001\u548C\u63A5\u6536\u6570\u636E\u3002\u5176\u4E2D ",(0,s.jsx)(n.code,{children:"Recv"})," \u65B9\u6CD5\u4F1A\u901A\u8FC7\u963B\u585E\u65B9\u5F0F\u63A5\u6536\u6570\u636E\uFF0C\u76F4\u5230\u5BA2\u6237\u7AEF\u201D\u53D1\u9001\u5B8C\u6BD5\u4E00\u6761\u6570\u636E\u201D(\u6267\u884C\u4E00\u6B21 ",(0,s.jsx)(n.code,{children:"Send"}),"\uFF0C\u5E95\u5C42Socket\u901A\u4FE1\u4E0D\u5E26\u7F13\u51B2\u5B9E\u73B0)\uFF0C\u6216\u8005\u5173\u95ED\u94FE\u63A5\u3002\u5173\u4E8E\u5176\u4E2D\u7684\u94FE\u63A5\u5BF9\u8C61 ",(0,s.jsx)(n.code,{children:"gtcp.Conn"})," \u7684\u4ECB\u7ECD\uFF0C\u8BF7\u7EE7\u7EED\u9605\u8BFB\u540E\u7EED\u7AE0\u8282\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6267\u884C\u4E4B\u540E\u6211\u4EEC\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"telnet"})," \u5DE5\u5177\u6765\u8FDB\u884C\u6D4B\u8BD5\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"john@home:~$ telnet 127.0.0.1 8999\nTrying 127.0.0.1...\nConnected to 127.0.0.1.\nEscape character is '^]'.\nhello\n> hello\nhi there\n> hi there\n\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6BCF\u4E00\u4E2A\u5BA2\u6237\u7AEF\u53D1\u8D77\u7684TCP\u94FE\u63A5\uFF0CTCPServer\u90FD\u4F1A\u521B\u5EFA\u4E00\u4E2A ",(0,s.jsx)(n.code,{children:"goroutine"})," \u8FDB\u884C\u5904\u7406\uFF0C\u76F4\u81F3TCP\u94FE\u63A5\u65AD\u5F00\u3002\u7531\u4E8Egoroutine\u6BD4\u8F83\u8F7B\u91CF\u7EA7\uFF0C\u56E0\u6B64\u53EF\u4EE5\u652F\u6491\u5F88\u9AD8\u7684\u5E76\u53D1\u91CF\u3002"]})]})}function g(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return o}});var t=r(667294);let s={},c=t.createContext(s);function o(e){let n=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);