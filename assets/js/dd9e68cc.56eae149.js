"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["80997"],{493718:function(n,e,r){r.r(e),r.d(e,{metadata:()=>o,contentTitle:()=>i,default:()=>a,assets:()=>s,toc:()=>g,frontMatter:()=>c});var o=JSON.parse('{"id":"docs/\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/UDP\u7EC4\u4EF6/UDP\u7EC4\u4EF6-\u8FDE\u63A5\u5BF9\u8C61","title":"UDP\u7EC4\u4EF6-\u8FDE\u63A5\u5BF9\u8C61","description":"\u4F7F\u7528GoFrame\u6846\u67B6\u8FDB\u884CUDP\u7EC4\u4EF6\u5F00\u53D1\uFF0C\u7279\u522B\u662Fgudp.Conn\u8FDE\u63A5\u5BF9\u8C61\u7684\u4F7F\u7528\u3002\u6587\u4E2D\u63D0\u4F9B\u4E86\u8BE6\u7EC6\u7684\u51FD\u6570\u63A5\u53E3\u8BF4\u660E\u4EE5\u53CA\u4E00\u4E2A\u5B8C\u6574\u7684\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u7AEF\u901A\u4FE1\u7684\u793A\u4F8B\u4EE3\u7801\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u5FEB\u901F\u638C\u63E1UDP\u8FDE\u63A5\u5BF9\u8C61\u7684\u5177\u4F53\u64CD\u4F5C\u548C\u5E94\u7528\u573A\u666F\u3002","source":"@site/docs/docs/\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/UDP\u7EC4\u4EF6/UDP\u7EC4\u4EF6-\u8FDE\u63A5\u5BF9\u8C61.md","sourceDirName":"docs/\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/UDP\u7EC4\u4EF6","slug":"/docs/network/gudp-conn","permalink":"/docs/network/gudp-conn","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/UDP\u7EC4\u4EF6/UDP\u7EC4\u4EF6-\u8FDE\u63A5\u5BF9\u8C61.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731418950000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/network/gudp-conn","title":"UDP\u7EC4\u4EF6-\u8FDE\u63A5\u5BF9\u8C61","sidebar_position":0,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","gudp.Conn","UDP\u7EC4\u4EF6","UDP\u8FDE\u63A5","gudp\u6A21\u5757","\u7F51\u7EDC\u7F16\u7A0B","Go\u8BED\u8A00","\u6570\u636E\u901A\u4FE1","\u7F16\u7A0B\u793A\u4F8B"],"description":"\u4F7F\u7528GoFrame\u6846\u67B6\u8FDB\u884CUDP\u7EC4\u4EF6\u5F00\u53D1\uFF0C\u7279\u522B\u662Fgudp.Conn\u8FDE\u63A5\u5BF9\u8C61\u7684\u4F7F\u7528\u3002\u6587\u4E2D\u63D0\u4F9B\u4E86\u8BE6\u7EC6\u7684\u51FD\u6570\u63A5\u53E3\u8BF4\u660E\u4EE5\u53CA\u4E00\u4E2A\u5B8C\u6574\u7684\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u7AEF\u901A\u4FE1\u7684\u793A\u4F8B\u4EE3\u7801\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u5FEB\u901F\u638C\u63E1UDP\u8FDE\u63A5\u5BF9\u8C61\u7684\u5177\u4F53\u64CD\u4F5C\u548C\u5E94\u7528\u573A\u666F\u3002"},"sidebar":"mainSidebar","previous":{"title":"UDP\u7EC4\u4EF6","permalink":"/docs/network/gudp"},"next":{"title":"UDP\u7EC4\u4EF6-\u5DE5\u5177\u65B9\u6CD5","permalink":"/docs/network/gudp-funcs"}}'),t=r("785893"),d=r("250065");let c={slug:"/docs/network/gudp-conn",title:"UDP\u7EC4\u4EF6-\u8FDE\u63A5\u5BF9\u8C61",sidebar_position:0,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","gudp.Conn","UDP\u7EC4\u4EF6","UDP\u8FDE\u63A5","gudp\u6A21\u5757","\u7F51\u7EDC\u7F16\u7A0B","Go\u8BED\u8A00","\u6570\u636E\u901A\u4FE1","\u7F16\u7A0B\u793A\u4F8B"],description:"\u4F7F\u7528GoFrame\u6846\u67B6\u8FDB\u884CUDP\u7EC4\u4EF6\u5F00\u53D1\uFF0C\u7279\u522B\u662Fgudp.Conn\u8FDE\u63A5\u5BF9\u8C61\u7684\u4F7F\u7528\u3002\u6587\u4E2D\u63D0\u4F9B\u4E86\u8BE6\u7EC6\u7684\u51FD\u6570\u63A5\u53E3\u8BF4\u660E\u4EE5\u53CA\u4E00\u4E2A\u5B8C\u6574\u7684\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u7AEF\u901A\u4FE1\u7684\u793A\u4F8B\u4EE3\u7801\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u5FEB\u901F\u638C\u63E1UDP\u8FDE\u63A5\u5BF9\u8C61\u7684\u5177\u4F53\u64CD\u4F5C\u548C\u5E94\u7528\u573A\u666F\u3002"},i=void 0,s={},g=[{value:"\u57FA\u672C\u4ECB\u7ECD",id:"\u57FA\u672C\u4ECB\u7ECD",level:2},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:2}];function l(n){let e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,d.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"gudp"})," \u6A21\u5757\u63D0\u4F9B\u4E86\u975E\u5E38\u7B80\u4FBF\u6613\u7528\u7684 ",(0,t.jsx)(e.code,{children:"gudp.Conn"})," \u94FE\u63A5\u64CD\u4F5C\u5BF9\u8C61\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u4F7F\u7528\u65B9\u5F0F"}),"\uFF1A"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/net/gudp"\n'})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u63A5\u53E3\u6587\u6863"}),"\uFF1A ",(0,t.jsx)(e.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/net/gudp",children:"https://pkg.go.dev/github.com/gogf/gf/v2/net/gudp"})]}),"\n",(0,t.jsx)(e.h2,{id:"\u57FA\u672C\u4ECB\u7ECD",children:"\u57FA\u672C\u4ECB\u7ECD"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"gudp.Conn"})," \u7684\u64CD\u4F5C\u7EDD\u5927\u90E8\u5206\u7C7B\u4F3C\u4E8E ",(0,t.jsx)(e.code,{children:"gtcp"})," \u7684\u64CD\u4F5C\u65B9\u5F0F\uFF08\u5927\u90E8\u5206\u7684\u65B9\u6CD5\u540D\u79F0\u4E5F\u76F8\u540C\uFF09\uFF0C\u4F46\u7531\u4E8E ",(0,t.jsx)(e.code,{children:"UDP"})," \u662F\u9762\u5411\u975E\u8FDE\u63A5\u7684\u534F\u8BAE\uFF0C\u56E0\u6B64 ",(0,t.jsx)(e.code,{children:"gudp.Conn"}),"\uFF08\u5E95\u5C42\u901A\u4FE1\u7AEF\u53E3\uFF09\u4E5F\u53EA\u80FD\u5B8C\u6210\u6700\u591A\u4E00\u6B21\u6570\u636E\u5199\u5165\u548C\u8BFB\u53D6\uFF0C\u5BA2\u6237\u7AEF\u4E0B\u4E00\u6B21\u518D\u4E0E\u76EE\u6807\u670D\u52A1\u7AEF\u8FDB\u884C\u901A\u4FE1\u7684\u65F6\u5019\uFF0C\u5C06\u9700\u8981\u521B\u5EFA\u65B0\u7684 ",(0,t.jsx)(e.code,{children:"Conn"})," \u5BF9\u8C61\u8FDB\u884C\u901A\u4FE1\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n	"context"\n	"fmt"\n	"time"\n\n	"github.com/gogf/gf/v2/frame/g"\n	"github.com/gogf/gf/v2/net/gudp"\n	"github.com/gogf/gf/v2/os/gtime"\n)\n\nfunc main() {\n	var (\n		ctx    = context.Background()\n		logger = g.Log()\n	)\n	// Server\n	go gudp.NewServer("127.0.0.1:8999", func(conn *gudp.ServerConn) {\n		defer conn.Close()\n		for {\n			data, addr, err := conn.Recv(-1)\n			if len(data) > 0 {\n				if err = conn.Send(append([]byte("> "), data...), addr); err != nil {\n					logger.Error(ctx, err)\n				}\n			}\n			if err != nil {\n				logger.Error(ctx, err)\n			}\n		}\n	}).Run()\n\n	time.Sleep(time.Second)\n\n	// Client\n	for {\n		if conn, err := gudp.NewClientConn("127.0.0.1:8999"); err == nil {\n			if b, err := conn.SendRecv([]byte(gtime.Datetime()), -1); err == nil {\n				fmt.Println(string(b), conn.LocalAddr(), conn.RemoteAddr())\n			} else {\n				logger.Error(ctx, err)\n			}\n			conn.Close()\n		} else {\n			logger.Error(ctx, err)\n		}\n		time.Sleep(time.Second)\n	}\n}\n'})}),"\n",(0,t.jsxs)(e.p,{children:["\u8BE5\u793A\u4F8B\u4E0E ",(0,t.jsx)(e.code,{children:"gtcp.Conn"})," \u4E2D\u7684\u901A\u4FE1\u793A\u4F8B\u7C7B\u4F3C\uFF0C\u4E0D\u540C\u7684\u662F\uFF0C\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u7AEF\u65E0\u6CD5\u4FDD\u6301\u8FDE\u63A5\uFF0C\u6BCF\u6B21\u901A\u4FE1\u90FD\u9700\u8981\u521B\u5EFA\u7684\u65B0\u7684\u8FDE\u63A5\u5BF9\u8C61\u8FDB\u884C\u901A\u4FE1\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u6267\u884C\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"> 2018-07-21 23:13:31 127.0.0.1:33271 127.0.0.1:8999\n> 2018-07-21 23:13:32 127.0.0.1:45826 127.0.0.1:8999\n> 2018-07-21 23:13:33 127.0.0.1:58027 127.0.0.1:8999\n> 2018-07-21 23:13:34 127.0.0.1:33056 127.0.0.1:8999\n> 2018-07-21 23:13:35 127.0.0.1:39260 127.0.0.1:8999\n> 2018-07-21 23:13:36 127.0.0.1:33967 127.0.0.1:8999\n> 2018-07-21 23:13:37 127.0.0.1:52359 127.0.0.1:8999\n...\n"})})]})}function a(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return i},a:function(){return c}});var o=r(667294);let t={},d=o.createContext(t);function c(n){let e=o.useContext(d);return o.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),o.createElement(d.Provider,{value:e},n.children)}}}]);