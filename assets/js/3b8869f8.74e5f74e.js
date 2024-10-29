"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[1477],{74740:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=e(74848),i=e(28453);const s={title:"HTTPClient-\u62e6\u622a\u5668/\u4e2d\u95f4\u4ef6",sidebar_position:8,hide_title:!0},o=void 0,c={id:"WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u62e6\u622a\u5668\u4e2d\u95f4\u4ef6",title:"HTTPClient-\u62e6\u622a\u5668/\u4e2d\u95f4\u4ef6",description:"\u57fa\u672c\u4ecb\u7ecd",source:"@site/versioned_docs/version-2.6.x/5-WEB\u670d\u52a1\u5f00\u53d1/9-HTTPClient/8-HTTPClient-\u62e6\u622a\u5668\u4e2d\u95f4\u4ef6.md",sourceDirName:"5-WEB\u670d\u52a1\u5f00\u53d1/9-HTTPClient",slug:"/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u62e6\u622a\u5668\u4e2d\u95f4\u4ef6",permalink:"/gf-site/docs/2.6.x/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u62e6\u622a\u5668\u4e2d\u95f4\u4ef6",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.6.x/5-WEB\u670d\u52a1\u5f00\u53d1/9-HTTPClient/8-HTTPClient-\u62e6\u622a\u5668\u4e2d\u95f4\u4ef6.md",tags:[],version:"2.6.x",lastUpdatedBy:"John",lastUpdatedAt:1730208097e3,sidebarPosition:8,frontMatter:{title:"HTTPClient-\u62e6\u622a\u5668/\u4e2d\u95f4\u4ef6",sidebar_position:8,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"HTTPClient-\u4ee3\u7406Proxy\u8bbe\u7f6e",permalink:"/gf-site/docs/2.6.x/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u4ee3\u7406Proxy\u8bbe\u7f6e"},next:{title:"HTTPClient-\u5e38\u89c1\u95ee\u9898",permalink:"/gf-site/docs/2.6.x/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u5e38\u89c1\u95ee\u9898"}},l={},d=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u4e2d\u95f4\u4ef6\u7c7b\u578b",id:"\u4e2d\u95f4\u4ef6\u7c7b\u578b",level:2},{value:"\u524d\u7f6e\u4e2d\u95f4\u4ef6",id:"\u524d\u7f6e\u4e2d\u95f4\u4ef6",level:3},{value:"\u540e\u7f6e\u4e2d\u95f4\u4ef6",id:"\u540e\u7f6e\u4e2d\u95f4\u4ef6",level:3},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u670d\u52a1\u7aef",id:"\u670d\u52a1\u7aef",level:3},{value:"\u5ba2\u6237\u7aef",id:"\u5ba2\u6237\u7aef",level:3},{value:"\u8fd0\u884c\u6d4b\u8bd5",id:"\u8fd0\u884c\u6d4b\u8bd5",level:3}];function g(n){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"HTTPClient"})," \u652f\u6301\u5f3a\u5927\u7684\u62e6\u622a\u5668/\u4e2d\u95f4\u4ef6\u7279\u6027\uff0c\u8be5\u7279\u6027\u4f7f\u5f97\u5bf9\u4e8e\u5ba2\u6237\u7aef\u7684\u5168\u5c40\u8bf7\u6c42\u62e6\u622a\u53ca\u6ce8\u5165\u6210\u4e3a\u4e86\u53ef\u80fd\uff0c\u4f8b\u5982\u4fee\u6539/\u6ce8\u5165\u63d0\u4ea4\u53c2\u6570\u3001\u4fee\u6539/\u6ce8\u5165\u8fd4\u56de\u53c2\u6570\u3001\u57fa\u4e8e\u5ba2\u6237\u7aef\u7684\u53c2\u6570\u6821\u9a8c\u7b49\u7b49\u3002\u4e2d\u95f4\u4ef6\u7684\u6ce8\u5165\u901a\u8fc7\u4ee5\u4e0b\u65b9\u6cd5\u5b9e\u73b0\uff1a"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"func (c *Client) Use(handlers ...HandlerFunc) *Client\n"})}),"\n",(0,r.jsxs)(t.p,{children:["\u5728\u4e2d\u95f4\u4ef6\u4e2d\u901a\u8fc7 ",(0,r.jsx)(t.code,{children:"Next"})," \u65b9\u6cd5\u6267\u884c\u4e0b\u4e00\u6b65\u6d41\u7a0b\uff0c ",(0,r.jsx)(t.code,{children:"Next"})," \u65b9\u6cd5\u5b9a\u4e49\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"func (c *Client) Next(req *http.Request) (*Response, error)\n"})}),"\n",(0,r.jsx)(t.h2,{id:"\u4e2d\u95f4\u4ef6\u7c7b\u578b",children:"\u4e2d\u95f4\u4ef6\u7c7b\u578b"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"HTTPClient"})," \u4e2d\u95f4\u4ef6\u529f\u80fd\u540c ",(0,r.jsx)(t.code,{children:"HTTPServer"})," \u7684\u4e2d\u95f4\u4ef6\u529f\u80fd\u7c7b\u4f3c\uff0c\u540c\u6837\u4e5f\u662f\u5206\u4e3a\u4e86\u524d\u7f6e\u4e2d\u95f4\u4ef6\u548c\u540e\u7f6e\u4e2d\u95f4\u4ef6\u4e24\u79cd\u3002"]}),"\n",(0,r.jsx)(t.h3,{id:"\u524d\u7f6e\u4e2d\u95f4\u4ef6",children:"\u524d\u7f6e\u4e2d\u95f4\u4ef6"}),"\n",(0,r.jsxs)(t.p,{children:["\u5904\u7406\u903b\u8f91\u4f4d\u4e8e ",(0,r.jsx)(t.code,{children:"Next"})," \u65b9\u6cd5\u4e4b\u524d\uff0c\u683c\u5f0f\u5f62\u5982\uff1a"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"c := g.Client()\nc.Use(func(c *gclient.Client, r *http.Request) (resp *gclient.Response, err error) {\n\t// \u81ea\u5b9a\u4e49\u5904\u7406\u903b\u8f91\n\tresp, err = c.Next(r)\n    return resp, err\n})\n"})}),"\n",(0,r.jsx)(t.h3,{id:"\u540e\u7f6e\u4e2d\u95f4\u4ef6",children:"\u540e\u7f6e\u4e2d\u95f4\u4ef6"}),"\n",(0,r.jsxs)(t.p,{children:["\u5904\u7406\u903b\u8f91\u4f4d\u4e8e ",(0,r.jsx)(t.code,{children:"Next"})," \u65b9\u6cd5\u4e4b\u540e\uff0c\u683c\u5f0f\u5f62\u5982\uff1a"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"c := g.Client()\nc.Use(func(c *gclient.Client, r *http.Request) (resp *gclient.Response, err error) {\n\tresp, err = c.Next(r)\n    // \u81ea\u5b9a\u4e49\u5904\u7406\u903b\u8f91\n    return resp, err\n})\n"})}),"\n",(0,r.jsx)(t.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,r.jsx)(t.p,{children:"\u6211\u4eec\u6765\u4e00\u4e2a\u4ee3\u7801\u793a\u4f8b\u66f4\u597d\u4ecb\u7ecd\u4f7f\u7528\uff0c\u8be5\u793a\u4f8b\u901a\u8fc7\u7ed9\u5ba2\u6237\u7aef\u589e\u52a0\u62e6\u622a\u5668\uff0c\u5bf9\u63d0\u4ea4\u7684JSON\u6570\u636e\u6ce8\u5165\u81ea\u5b9a\u4e49\u7684\u989d\u5916\u53c2\u6570\uff0c\u8fd9\u4e9b\u989d\u5916\u53c2\u6570\u5b9e\u73b0\u5bf9\u63d0\u4ea4\u53c2\u6570\u7684\u7b7e\u540d\u751f\u6210\u4f53\u79ef\u7b7e\u540d\u76f8\u5173\u53c2\u6570\u63d0\u4ea4\uff0c\u4e5f\u5c31\u662f\u5b9e\u73b0\u4e00\u7248\u7b80\u5355\u7684\u63a5\u53e3\u53c2\u6570\u5b89\u5168\u6821\u9a8c\u3002"}),"\n",(0,r.jsx)(t.h3,{id:"\u670d\u52a1\u7aef",children:"\u670d\u52a1\u7aef"}),"\n",(0,r.jsxs)(t.p,{children:["\u670d\u52a1\u7aef\u7684\u903b\u8f91\u5f88\u7b80\u5355\uff0c\u5c31\u662f\u628a\u5ba2\u6237\u7aef\u63d0\u4ea4\u7684 ",(0,r.jsx)(t.code,{children:"JSON"})," \u53c2\u6570\u6309\u7167 ",(0,r.jsx)(t.code,{children:"map"})," \u89e3\u6790\u540e\u518d\u6784\u9020\u6210 ",(0,r.jsx)(t.code,{children:"JSON"})," \u5b57\u7b26\u4e32\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u3002"]}),"\n",(0,r.jsx)(t.p,{children:"\u5f80\u5f80\u670d\u52a1\u7aef\u4e5f\u9700\u8981\u901a\u8fc7\u4e2d\u95f4\u4ef6\u8fdb\u884c\u7b7e\u540d\u6821\u9a8c\uff0c\u6211\u8fd9\u91cc\u5077\u4e86\u4e00\u4e2a\u61d2\uff0c\u76f4\u63a5\u8fd4\u56de\u4e86\u5ba2\u6237\u7aef\u63d0\u4ea4\u7684\u6570\u636e\u3002\u4f53\u8c05\u4e00\u4e0b\u6587\u6863\u7ef4\u62a4\u4f5c\u8005\ud83d\ude38\u3002"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'package main\n\nimport (\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n\ts := g.Server()\n\ts.Group("/", func(group *ghttp.RouterGroup) {\n\t\tgroup.ALL("/", func(r *ghttp.Request) {\n\t\t\tr.Response.Write(r.GetMap())\n\t\t})\n\t})\n\ts.SetPort(8199)\n\ts.Run()\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"\u5ba2\u6237\u7aef",children:"\u5ba2\u6237\u7aef"}),"\n",(0,r.jsx)(t.p,{children:"\u5ba2\u6237\u7aef\u7684\u903b\u8f91\u662f\u5b9e\u73b0\u57fa\u672c\u7684\u5ba2\u6237\u7aef\u53c2\u6570\u63d0\u4ea4\u3001\u62e6\u622a\u5668\u6ce8\u5165\u3001\u7b7e\u540d\u76f8\u5173\u53c2\u6570\u6ce8\u5165\u4ee5\u53ca\u7b7e\u540d\u53c2\u6570\u751f\u6210\u3002"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'package main\n\nimport (\n\t"bytes"\n\t"fmt"\n\t"io/ioutil"\n\t"net/http"\n\n\t"github.com/gogf/gf/v2/container/garray"\n\t"github.com/gogf/gf/v2/crypto/gmd5"\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/internal/json"\n\t"github.com/gogf/gf/v2/net/gclient"\n\t"github.com/gogf/gf/v2/os/gctx"\n\t"github.com/gogf/gf/v2/os/gtime"\n\t"github.com/gogf/gf/v2/util/gconv"\n\t"github.com/gogf/gf/v2/util/guid"\n\t"github.com/gogf/gf/v2/util/gutil"\n)\n\nconst (\n\tappId     = "123"\n\tappSecret = "456"\n)\n\n// \u6ce8\u5165\u7edf\u4e00\u7684\u63a5\u53e3\u7b7e\u540d\u53c2\u6570\nfunc injectSignature(jsonContent []byte) []byte {\n\tvar m map[string]interface{}\n\t_ = json.Unmarshal(jsonContent, &m)\n\tif len(m) > 0 {\n\t\tm["appid"] = appId\n\t\tm["nonce"] = guid.S()\n\t\tm["timestamp"] = gtime.Timestamp()\n\t\tvar (\n\t\t\tkeyArray   = garray.NewSortedStrArrayFrom(gutil.Keys(m))\n\t\t\tsigContent string\n\t\t)\n\t\tkeyArray.Iterator(func(k int, v string) bool {\n\t\t\tsigContent += v\n\t\t\tsigContent += gconv.String(m[v])\n\t\t\treturn true\n\t\t})\n\t\tm["signature"] = gmd5.MustEncryptString(gmd5.MustEncryptString(sigContent) + appSecret)\n\t\tjsonContent, _ = json.Marshal(m)\n\t}\n\treturn jsonContent\n}\n\nfunc main() {\n\tc := g.Client()\n\tc.Use(func(c *gclient.Client, r *http.Request) (resp *gclient.Response, err error) {\n\t\tbodyBytes, _ := ioutil.ReadAll(r.Body)\n\t\tif len(bodyBytes) > 0 {\n\t\t\t// \u6ce8\u5165\u7b7e\u540d\u76f8\u5173\u53c2\u6570\uff0c\u4fee\u6539Request\u539f\u6709\u7684\u63d0\u4ea4\u53c2\u6570\n\t\t\tbodyBytes = injectSignature(bodyBytes)\n\t\t\tr.Body = ioutil.NopCloser(bytes.NewBuffer(bodyBytes))\n\t\t\tr.ContentLength = int64(len(bodyBytes))\n\t\t}\n\t\treturn c.Next(r)\n\t})\n\tcontent := c.ContentJson().PostContent(gctx.New(), "http://127.0.0.1:8199/", g.Map{\n\t\t"name": "goframe",\n\t\t"site": "https://goframe.org",\n\t})\n\tfmt.Println(content)\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"\u8fd0\u884c\u6d4b\u8bd5",children:"\u8fd0\u884c\u6d4b\u8bd5"}),"\n",(0,r.jsx)(t.p,{children:"\u5148\u8fd0\u884c\u670d\u52a1\u7aef\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"$ go run server.go\n\n  SERVER  | DOMAIN  | ADDRESS | METHOD | ROUTE |      HANDLER      | MIDDLEWARE\n----------|---------|---------|--------|-------|-------------------|-------------\n  default | default | :8199   | ALL    | /     | main.main.func1.1 |\n----------|---------|---------|--------|-------|-------------------|-------------\n\n2021-05-18 09:23:41.865 97906: http server started listening on [:8199]\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u518d\u8fd0\u884c\u5ba2\u6237\u7aef\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'$ go run client.go\n{"appid":"123","name":"goframe","nonce":"12vd8tx23l6cbfz9k59xehk1002pixfo","signature":"578a90b67bdc63d551d6a18635307ba2","site":"https://goframe.org","timestamp":1621301076}\n$\n'})}),"\n",(0,r.jsxs)(t.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u670d\u52a1\u7aef\u63a5\u53d7\u5230\u7684\u53c2\u6570\u591a\u4e86\u591a\u4e86\u51e0\u9879\uff0c\u5305\u62ec ",(0,r.jsx)(t.code,{children:"appid/nonce/timestamp/signature"}),"\uff0c\u8fd9\u4e9b\u53c2\u6570\u5f80\u5f80\u90fd\u662f\u7b7e\u540d\u6821\u9a8c\u7b97\u6cd5\u6240\u9700\u8981\u7684\u53c2\u6570\u3002"]})]})}function a(n={}){const{wrapper:t}={...(0,i.R)(),...n.components};return t?(0,r.jsx)(t,{...n,children:(0,r.jsx)(g,{...n})}):g(n)}},28453:(n,t,e)=>{e.d(t,{R:()=>o,x:()=>c});var r=e(96540);const i={},s=r.createContext(i);function o(n){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function c(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),r.createElement(s.Provider,{value:t},n.children)}}}]);