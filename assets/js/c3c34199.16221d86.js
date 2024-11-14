"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["91551"],{564982:function(n,e,t){t.r(e),t.d(e,{metadata:()=>r,contentTitle:()=>l,default:()=>p,assets:()=>a,toc:()=>c,frontMatter:()=>s});var r=JSON.parse('{"id":"WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u81EA\u5B9A\u4E49Transport","title":"HTTPClient-\u81EA\u5B9A\u4E49Transport","description":"\u7531\u4E8E gclient.Client \u5185\u90E8\u5C01\u88C5\u6269\u5C55\u4E8E\u6807\u51C6\u5E93\u7684 http.Client \u5BF9\u8C61\uFF0C\u56E0\u6B64\u6807\u51C6\u5E93 http.Client \u6709\u7684\u7279\u6027\uFF0C gclient.Client \u4E5F\u662F\u652F\u6301\u7684\u3002\u6211\u4EEC\u8FD9\u91CC\u63D0\u5230\u7684\u4F8B\u5B50\u662F Transport \u4F7F\u7528\u3002\u6765\u770B\u51E0\u4E2A\u793A\u4F8B\uFF1A","source":"@site/versioned_docs/version-2.5.x/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u81EA\u5B9A\u4E49Transport.md","sourceDirName":"WEB\u670D\u52A1\u5F00\u53D1/HTTPClient","slug":"/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u81EA\u5B9A\u4E49Transport","permalink":"/2.5.x/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u81EA\u5B9A\u4E49Transport","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.5.x/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u81EA\u5B9A\u4E49Transport.md","tags":[],"version":"2.5.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":5,"frontMatter":{"title":"HTTPClient-\u81EA\u5B9A\u4E49Transport","sidebar_position":5,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"HTTPClient-\u81EA\u5B9A\u4E49ContentType","permalink":"/2.5.x/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u81EA\u5B9A\u4E49ContentType"},"next":{"title":"HTTPClient-\u8BF7\u6C42\u4FE1\u606F\u6253\u5370","permalink":"/2.5.x/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u8BF7\u6C42\u4FE1\u606F\u6253\u5370"}}'),i=t("785893"),o=t("250065");let s={title:"HTTPClient-\u81EA\u5B9A\u4E49Transport",sidebar_position:5,hide_title:!0},l=void 0,a={},c=[{value:"\u4F7F\u7528 <code>Unix Socket</code>",id:"\u4F7F\u7528-unix-socket",level:2},{value:"\u8BBE\u7F6E\u5BA2\u6237\u7AEF\u8FDE\u63A5\u6C60\u5927\u5C0F\u53C2\u6570",id:"\u8BBE\u7F6E\u5BA2\u6237\u7AEF\u8FDE\u63A5\u6C60\u5927\u5C0F\u53C2\u6570",level:2}];function d(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:["\u7531\u4E8E ",(0,i.jsx)(e.code,{children:"gclient.Client"})," \u5185\u90E8\u5C01\u88C5\u6269\u5C55\u4E8E\u6807\u51C6\u5E93\u7684 ",(0,i.jsx)(e.code,{children:"http.Client"})," \u5BF9\u8C61\uFF0C\u56E0\u6B64\u6807\u51C6\u5E93 ",(0,i.jsx)(e.code,{children:"http.Client"})," \u6709\u7684\u7279\u6027\uFF0C ",(0,i.jsx)(e.code,{children:"gclient.Client"})," \u4E5F\u662F\u652F\u6301\u7684\u3002\u6211\u4EEC\u8FD9\u91CC\u63D0\u5230\u7684\u4F8B\u5B50\u662F ",(0,i.jsx)(e.code,{children:"Transport"})," \u4F7F\u7528\u3002\u6765\u770B\u51E0\u4E2A\u793A\u4F8B\uFF1A"]}),"\n",(0,i.jsxs)(e.h2,{id:"\u4F7F\u7528-unix-socket",children:["\u4F7F\u7528 ",(0,i.jsx)(e.code,{children:"Unix Socket"})]}),"\n",(0,i.jsxs)(e.p,{children:["\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u4F7F\u7528 ",(0,i.jsx)(e.code,{children:"Unix Socket"})," \u901A\u4FE1\uFF0C\u4F7F\u7528 ",(0,i.jsx)(e.code,{children:"Transport"})," \u6765\u5B9E\u73B0\u3002\u4EE5\u4E0B\u4EE3\u7801\u4E3A\u771F\u5B9E\u9879\u76EE\u4EE3\u7801\u6458\u9009\uFF0C\u65E0\u6CD5\u72EC\u7ACB\u8FD0\u884C\uFF0C\u4EC5\u505A\u53C2\u8003\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'func (*Guardian) ConvertContainerPathToHostPath(\n    ctx context.Context, namespace, podName, containerName, containerPath string,\n) (string, error) {\n    var (\n        client = g.Client()\n        url    = "http://localhost/api/v1/pod/path"\n        req    = webservice.HostPathInfoReq{\n            Namespace:     namespace,\n            PodName:       podName,\n            ContainerName: containerName,\n            ContainerPath: containerPath,\n        }\n        res *webservice.HostPathInfoRes\n    )\n    client.Transport = &http.Transport{\n        DialContext: func(ctx context.Context, network, addr string) (net.Conn, error) {\n            return net.Dial("unix", serviceSocketPath)\n        },\n    }\n    err := client.ContentJson().GetVar(ctx, url, req).Scan(&res)\n    if err != nil {\n        return "", gerror.Wrapf(\n            err,\n            `request guardian failed for url: %s, req: %s`,\n            url, gjson.MustEncodeString(req),\n        )\n    }\n    if res == nil {\n        return "", gerror.Newf(\n            `nil response from guardian request url: %s, req: %s`,\n            url, gjson.MustEncodeString(req),\n        )\n    }\n    return res.HostPath, nil\n}\n'})}),"\n",(0,i.jsx)(e.h2,{id:"\u8BBE\u7F6E\u5BA2\u6237\u7AEF\u8FDE\u63A5\u6C60\u5927\u5C0F\u53C2\u6570",children:"\u8BBE\u7F6E\u5BA2\u6237\u7AEF\u8FDE\u63A5\u6C60\u5927\u5C0F\u53C2\u6570"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'func ExampleNew_MultiConn_Recommend() {\n    var (\n        ctx    = gctx.New()\n        client = g.Client()\n    )\n\n    // controls the maximum idle(keep-alive) connections to keep per-host\n    client.Transport.(*http.Transport).MaxIdleConnsPerHost = 5\n\n    for i := 0; i < 5; i++ {\n        go func() {\n            if r, err := client.Get(ctx, "http://127.0.0.1:8999/var/json"); err != nil {\n                panic(err)\n            } else {\n                fmt.Println(r.ReadAllString())\n                r.Close()\n            }\n        }()\n    }\n\n    time.Sleep(time.Second * 1)\n\n    // Output:\n    //{"id":1,"name":"john"}\n    //{"id":1,"name":"john"}\n    //{"id":1,"name":"john"}\n    //{"id":1,"name":"john"}\n    //{"id":1,"name":"john"}\n}\n'})})]})}function p(n={}){let{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return l},a:function(){return s}});var r=t(667294);let i={},o=r.createContext(i);function s(n){let e=r.useContext(o);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);