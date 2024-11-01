"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[29268],{56216:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var r=t(74848),i=t(28453);const o={slug:"/web/http-client/transport",title:"HTTPClient-\u81ea\u5b9a\u4e49Transport",sidebar_position:5,hide_title:!0},s=void 0,c={id:"WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u81ea\u5b9a\u4e49Transport",title:"HTTPClient-\u81ea\u5b9a\u4e49Transport",description:"\u7531\u4e8e gclient.Client \u5185\u90e8\u5c01\u88c5\u6269\u5c55\u4e8e\u6807\u51c6\u5e93\u7684 http.Client \u5bf9\u8c61\uff0c\u56e0\u6b64\u6807\u51c6\u5e93 http.Client \u6709\u7684\u7279\u6027\uff0c gclient.Client \u4e5f\u662f\u652f\u6301\u7684\u3002\u6211\u4eec\u8fd9\u91cc\u63d0\u5230\u7684\u4f8b\u5b50\u662f Transport \u4f7f\u7528\u3002\u6765\u770b\u51e0\u4e2a\u793a\u4f8b\uff1a",source:"@site/docs/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u81ea\u5b9a\u4e49Transport.md",sourceDirName:"WEB\u670d\u52a1\u5f00\u53d1/HTTPClient",slug:"/web/http-client/transport",permalink:"/docs/web/http-client/transport",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/docs/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u81ea\u5b9a\u4e49Transport.md",tags:[],version:"current",lastUpdatedBy:"John",lastUpdatedAt:173036553e4,sidebarPosition:5,frontMatter:{slug:"/web/http-client/transport",title:"HTTPClient-\u81ea\u5b9a\u4e49Transport",sidebar_position:5,hide_title:!0},sidebar:"hiddenSidebar",previous:{title:"HTTPClient-\u81ea\u5b9a\u4e49ContentType",permalink:"/docs/web/http-client/content-type"},next:{title:"HTTPClient-\u8bf7\u6c42\u4fe1\u606f\u6253\u5370",permalink:"/docs/web/http-client/raw-request-response"}},l={},a=[{value:"\u4f7f\u7528 <code>Unix Socket</code>",id:"\u4f7f\u7528-unix-socket",level:2},{value:"\u8bbe\u7f6e\u5ba2\u6237\u7aef\u8fde\u63a5\u6c60\u5927\u5c0f\u53c2\u6570",id:"\u8bbe\u7f6e\u5ba2\u6237\u7aef\u8fde\u63a5\u6c60\u5927\u5c0f\u53c2\u6570",level:2}];function d(n){const e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:["\u7531\u4e8e ",(0,r.jsx)(e.code,{children:"gclient.Client"})," \u5185\u90e8\u5c01\u88c5\u6269\u5c55\u4e8e\u6807\u51c6\u5e93\u7684 ",(0,r.jsx)(e.code,{children:"http.Client"})," \u5bf9\u8c61\uff0c\u56e0\u6b64\u6807\u51c6\u5e93 ",(0,r.jsx)(e.code,{children:"http.Client"})," \u6709\u7684\u7279\u6027\uff0c ",(0,r.jsx)(e.code,{children:"gclient.Client"})," \u4e5f\u662f\u652f\u6301\u7684\u3002\u6211\u4eec\u8fd9\u91cc\u63d0\u5230\u7684\u4f8b\u5b50\u662f ",(0,r.jsx)(e.code,{children:"Transport"})," \u4f7f\u7528\u3002\u6765\u770b\u51e0\u4e2a\u793a\u4f8b\uff1a"]}),"\n",(0,r.jsxs)(e.h2,{id:"\u4f7f\u7528-unix-socket",children:["\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"Unix Socket"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"Unix Socket"})," \u901a\u4fe1\uff0c\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"Transport"})," \u6765\u5b9e\u73b0\u3002\u4ee5\u4e0b\u4ee3\u7801\u4e3a\u771f\u5b9e\u9879\u76ee\u4ee3\u7801\u6458\u9009\uff0c\u65e0\u6cd5\u72ec\u7acb\u8fd0\u884c\uff0c\u4ec5\u505a\u53c2\u8003\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'func (*Guardian) ConvertContainerPathToHostPath(\n    ctx context.Context, namespace, podName, containerName, containerPath string,\n) (string, error) {\n    var (\n        client = g.Client()\n        url    = "http://localhost/api/v1/pod/path"\n        req    = webservice.HostPathInfoReq{\n            Namespace:     namespace,\n            PodName:       podName,\n            ContainerName: containerName,\n            ContainerPath: containerPath,\n        }\n        res *webservice.HostPathInfoRes\n    )\n    client.Transport = &http.Transport{\n        DialContext: func(ctx context.Context, network, addr string) (net.Conn, error) {\n            return net.Dial("unix", serviceSocketPath)\n        },\n    }\n    err := client.ContentJson().GetVar(ctx, url, req).Scan(&res)\n    if err != nil {\n        return "", gerror.Wrapf(\n            err,\n            `request guardian failed for url: %s, req: %s`,\n            url, gjson.MustEncodeString(req),\n        )\n    }\n    if res == nil {\n        return "", gerror.Newf(\n            `nil response from guardian request url: %s, req: %s`,\n            url, gjson.MustEncodeString(req),\n        )\n    }\n    return res.HostPath, nil\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"\u8bbe\u7f6e\u5ba2\u6237\u7aef\u8fde\u63a5\u6c60\u5927\u5c0f\u53c2\u6570",children:"\u8bbe\u7f6e\u5ba2\u6237\u7aef\u8fde\u63a5\u6c60\u5927\u5c0f\u53c2\u6570"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'func ExampleNew_MultiConn_Recommend() {\n    var (\n        ctx    = gctx.New()\n        client = g.Client()\n    )\n\n    // controls the maximum idle(keep-alive) connections to keep per-host\n    client.Transport.(*http.Transport).MaxIdleConnsPerHost = 5\n\n    for i := 0; i < 5; i++ {\n        go func() {\n            if r, err := client.Get(ctx, "http://127.0.0.1:8999/var/json"); err != nil {\n                panic(err)\n            } else {\n                fmt.Println(r.ReadAllString())\n                r.Close()\n            }\n        }()\n    }\n\n    time.Sleep(time.Second * 1)\n\n    // Output:\n    //{"id":1,"name":"john"}\n    //{"id":1,"name":"john"}\n    //{"id":1,"name":"john"}\n    //{"id":1,"name":"john"}\n    //{"id":1,"name":"john"}\n}\n'})})]})}function p(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>c});var r=t(96540);const i={},o=r.createContext(i);function s(n){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);