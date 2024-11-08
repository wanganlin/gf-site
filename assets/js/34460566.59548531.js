"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[35953],{723196:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>j,frontMatter:()=>r,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u901a\u7528\u7f16\u89e3\u7801-gjson/\u901a\u7528\u7f16\u89e3\u7801-\u52a8\u6001\u521b\u5efa\u4fee\u6539","title":"\u901a\u7528\u7f16\u89e3\u7801-\u52a8\u6001\u521b\u5efa\u4fee\u6539","description":"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528GoFrame\u6846\u67b6\u4e2d\u7684gjson\u8fdb\u884c\u6570\u636e\u7684\u52a8\u6001\u521b\u5efa\u548c\u4fee\u6539\u3002gjson\u4e0d\u4ec5\u53ef\u4ee5\u7075\u6d3b\u5730\u89e3\u6790\u548c\u68c0\u7d22\u672a\u77e5\u7684\u6570\u636e\u7ed3\u6784\uff0c\u8fd8\u80fd\u591f\u52a8\u6001\u5730\u521b\u5efa\u548c\u7f16\u8f91\u6570\u636e\u5185\u5bb9\u3002\u901a\u8fc7\u5177\u4f53\u793a\u4f8b\uff0c\u5c55\u793a\u4e86\u8bbe\u7f6e\u6570\u636e\u3001\u521b\u5efa\u6570\u7ec4\u548c\u4fee\u6539JSON\u5185\u5bb9\u7684\u65b9\u6cd5\uff0c\u4f7f\u6570\u636e\u7ed3\u6784\u7684\u7f16\u7801\u548c\u89e3\u6790\u66f4\u52a0\u7075\u6d3b\u65b9\u4fbf\u3002","source":"@site/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u901a\u7528\u7f16\u89e3\u7801-gjson/\u901a\u7528\u7f16\u89e3\u7801-\u52a8\u6001\u521b\u5efa\u4fee\u6539.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u901a\u7528\u7f16\u89e3\u7801-gjson","slug":"/docs/components/encoding-gjson-dynamic-creating-and-editing","permalink":"/docs/components/encoding-gjson-dynamic-creating-and-editing","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u901a\u7528\u7f16\u89e3\u7801-gjson/\u901a\u7528\u7f16\u89e3\u7801-\u52a8\u6001\u521b\u5efa\u4fee\u6539.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731055597000,"sidebarPosition":3,"frontMatter":{"slug":"/docs/components/encoding-gjson-dynamic-creating-and-editing","title":"\u901a\u7528\u7f16\u89e3\u7801-\u52a8\u6001\u521b\u5efa\u4fee\u6539","sidebar_position":3,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","gjson","\u52a8\u6001\u521b\u5efa","\u52a8\u6001\u4fee\u6539","\u6570\u636e\u7ed3\u6784","JSON\u89e3\u6790","\u7f16\u7801","\u89e3\u7801","Go\u8bed\u8a00"],"description":"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528GoFrame\u6846\u67b6\u4e2d\u7684gjson\u8fdb\u884c\u6570\u636e\u7684\u52a8\u6001\u521b\u5efa\u548c\u4fee\u6539\u3002gjson\u4e0d\u4ec5\u53ef\u4ee5\u7075\u6d3b\u5730\u89e3\u6790\u548c\u68c0\u7d22\u672a\u77e5\u7684\u6570\u636e\u7ed3\u6784\uff0c\u8fd8\u80fd\u591f\u52a8\u6001\u5730\u521b\u5efa\u548c\u7f16\u8f91\u6570\u636e\u5185\u5bb9\u3002\u901a\u8fc7\u5177\u4f53\u793a\u4f8b\uff0c\u5c55\u793a\u4e86\u8bbe\u7f6e\u6570\u636e\u3001\u521b\u5efa\u6570\u7ec4\u548c\u4fee\u6539JSON\u5185\u5bb9\u7684\u65b9\u6cd5\uff0c\u4f7f\u6570\u636e\u7ed3\u6784\u7684\u7f16\u7801\u548c\u89e3\u6790\u66f4\u52a0\u7075\u6d3b\u65b9\u4fbf\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u901a\u7528\u7f16\u89e3\u7801-Struct\u8f6c\u6362","permalink":"/docs/components/encoding-gjson-struct-converting"},"next":{"title":"\u901a\u7528\u7f16\u89e3\u7801-\u6570\u636e\u683c\u5f0f\u8f6c\u6362","permalink":"/docs/components/encoding-gjson-format-converting"}}');var o=t(474848),i=t(28453);const r={slug:"/docs/components/encoding-gjson-dynamic-creating-and-editing",title:"\u901a\u7528\u7f16\u89e3\u7801-\u52a8\u6001\u521b\u5efa\u4fee\u6539",sidebar_position:3,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","gjson","\u52a8\u6001\u521b\u5efa","\u52a8\u6001\u4fee\u6539","\u6570\u636e\u7ed3\u6784","JSON\u89e3\u6790","\u7f16\u7801","\u89e3\u7801","Go\u8bed\u8a00"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528GoFrame\u6846\u67b6\u4e2d\u7684gjson\u8fdb\u884c\u6570\u636e\u7684\u52a8\u6001\u521b\u5efa\u548c\u4fee\u6539\u3002gjson\u4e0d\u4ec5\u53ef\u4ee5\u7075\u6d3b\u5730\u89e3\u6790\u548c\u68c0\u7d22\u672a\u77e5\u7684\u6570\u636e\u7ed3\u6784\uff0c\u8fd8\u80fd\u591f\u52a8\u6001\u5730\u521b\u5efa\u548c\u7f16\u8f91\u6570\u636e\u5185\u5bb9\u3002\u901a\u8fc7\u5177\u4f53\u793a\u4f8b\uff0c\u5c55\u793a\u4e86\u8bbe\u7f6e\u6570\u636e\u3001\u521b\u5efa\u6570\u7ec4\u548c\u4fee\u6539JSON\u5185\u5bb9\u7684\u65b9\u6cd5\uff0c\u4f7f\u6570\u636e\u7ed3\u6784\u7684\u7f16\u7801\u548c\u89e3\u6790\u66f4\u52a0\u7075\u6d3b\u65b9\u4fbf\u3002"},c=void 0,d={},a=[{value:"\u52a8\u6001\u521b\u5efa",id:"\u52a8\u6001\u521b\u5efa",level:2},{value:"\u793a\u4f8b1\uff0c\u7b80\u5355\u4f7f\u7528",id:"\u793a\u4f8b1\u7b80\u5355\u4f7f\u7528",level:3},{value:"\u793a\u4f8b2\uff0c\u521b\u5efa\u6570\u7ec4",id:"\u793a\u4f8b2\u521b\u5efa\u6570\u7ec4",level:3},{value:"\u52a8\u6001\u4fee\u6539",id:"\u52a8\u6001\u4fee\u6539",level:2},{value:"\u52a8\u6001\u521b\u5efa",id:"\u52a8\u6001\u521b\u5efa-1",level:2},{value:"\u793a\u4f8b1\uff0c\u7b80\u5355\u4f7f\u7528",id:"\u793a\u4f8b1\u7b80\u5355\u4f7f\u7528-1",level:3},{value:"\u793a\u4f8b2\uff0c\u521b\u5efa\u6570\u7ec4",id:"\u793a\u4f8b2\u521b\u5efa\u6570\u7ec4-1",level:3},{value:"\u52a8\u6001\u4fee\u6539",id:"\u52a8\u6001\u4fee\u6539-1",level:2}];function l(n){const e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"gjson"})," \u9664\u4e86\u80fd\u591f\u7075\u6d3b\u89e3\u6790\u3001\u68c0\u7d22\u672a\u77e5\u6570\u636e\u7ed3\u6784\u5185\u5bb9\uff0c\u8fd8\u80fd\u591f\u52a8\u6001\u521b\u5efa\u548c\u4fee\u6539\u6570\u636e\u7ed3\u6784\u5185\u5bb9\u3002"]}),"\n",(0,o.jsx)(e.h2,{id:"\u52a8\u6001\u521b\u5efa",children:"\u52a8\u6001\u521b\u5efa"}),"\n",(0,o.jsx)(e.h3,{id:"\u793a\u4f8b1\u7b80\u5355\u4f7f\u7528",children:"\u793a\u4f8b1\uff0c\u7b80\u5355\u4f7f\u7528"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'func main() {\n    j := gjson.New(nil)\n    j.Set("name", "John")\n    j.Set("score", 99.5)\n    fmt.Printf(\n        "Name: %s, Score: %v\\n",\n        j.Get("name").String(),\n        j.Get("score").Float32(),\n    )\n    fmt.Println(j.MustToJsonString())\n\n    // Output:\n    // Name: John, Score: 99.5\n    // {"name":"John","score":99.5}\n}\n'})}),"\n",(0,o.jsx)(e.h3,{id:"\u793a\u4f8b2\u521b\u5efa\u6570\u7ec4",children:"\u793a\u4f8b2\uff0c\u521b\u5efa\u6570\u7ec4"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'func main() {\n    j := gjson.New(nil)\n    for i := 0; i < 5; i++ {\n        j.Set(fmt.Sprintf(`%d.id`, i), i)\n        j.Set(fmt.Sprintf(`%d.name`, i), fmt.Sprintf(`student-%d`, i))\n    }\n    fmt.Println(j.MustToJsonString())\n\n    // Output:\n    // [{"id":0,"name":"student-0"},{"id":1,"name":"student-1"},{"id":2,"name":"student-2"},{"id":3,"name":"student-3"},{"id":4,"name":"student-4"}]\n}\n'})}),"\n",(0,o.jsx)(e.h2,{id:"\u52a8\u6001\u4fee\u6539",children:"\u52a8\u6001\u4fee\u6539"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'func main() {\n    data :=\n        `{\n    "users" : {\n        "count" : 2,\n        "list"  : [\n            {"name" : "Ming", "score" : 60},\n            {"name" : "John", "score" : 59}\n        ]\n    }\n}`\n    if j, err := gjson.DecodeToJson(data); err != nil {\n        panic(err)\n    } else {\n        j.Set("users.list.1.score", 100)\n        fmt.Println("John Score:", j.Get("users.list.1.score").Float32())\n        fmt.Println(j.MustToJsonString())\n    }\n    // Output:\n    // John Score: 100\n    // {"users":{"count":2,"list":[{"name":"Ming","score":60},{"name":"John","score":100}]}}\n}\n'})}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"JSON"})," \u6570\u636e\u901a\u8fc7 ",(0,o.jsx)(e.code,{children:"gjson"})," \u5305\u8bfb\u53d6\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,o.jsx)(e.code,{children:"Set"})," \u65b9\u6cd5\u6539\u53d8\u5185\u90e8\u53d8\u91cf\u7684\u5185\u5bb9\uff0c\u5f53\u7136\u4e5f\u53ef\u4ee5 ",(0,o.jsx)(e.code,{children:"\u65b0\u589e/\u5220\u9664"})," \u5185\u5bb9\uff0c\u5f53\u9700\u8981\u5220\u9664\u5185\u5bb9\u65f6\uff0c\u8bbe\u5b9a\u7684\u503c\u4e3a ",(0,o.jsx)(e.code,{children:"nil"})," \u5373\u53ef\u3002 ",(0,o.jsx)(e.code,{children:"gjson"})," \u5305\u7684\u6570\u636e\u8fd0\u884c\u65f6\u4fee\u6539\u7279\u6027\u975e\u5e38\u5f3a\u5927\uff0c\u5728\u8be5\u7279\u6027\u7684\u652f\u6301\u4e0b\uff0c\u5404\u79cd\u6570\u636e\u7ed3\u6784\u7684\u7f16\u7801/\u89e3\u6790\u663e\u5f97\u5f02\u5e38\u7684\u7075\u6d3b\u65b9\u4fbf\u3002"]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"gjson"})," \u9664\u4e86\u80fd\u591f\u7075\u6d3b\u89e3\u6790\u3001\u68c0\u7d22\u672a\u77e5\u6570\u636e\u7ed3\u6784\u5185\u5bb9\uff0c\u8fd8\u80fd\u591f\u52a8\u6001\u521b\u5efa\u548c\u4fee\u6539\u6570\u636e\u7ed3\u6784\u5185\u5bb9\u3002"]}),"\n",(0,o.jsx)(e.h2,{id:"\u52a8\u6001\u521b\u5efa-1",children:"\u52a8\u6001\u521b\u5efa"}),"\n",(0,o.jsx)(e.h3,{id:"\u793a\u4f8b1\u7b80\u5355\u4f7f\u7528-1",children:"\u793a\u4f8b1\uff0c\u7b80\u5355\u4f7f\u7528"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'func main() {\n    j := gjson.New(nil)\n    j.Set("name", "John")\n    j.Set("score", 99.5)\n    fmt.Printf(\n        "Name: %s, Score: %v\\n",\n        j.Get("name").String(),\n        j.Get("score").Float32(),\n    )\n    fmt.Println(j.MustToJsonString())\n\n    // Output:\n    // Name: John, Score: 99.5\n    // {"name":"John","score":99.5}\n}\n'})}),"\n",(0,o.jsx)(e.h3,{id:"\u793a\u4f8b2\u521b\u5efa\u6570\u7ec4-1",children:"\u793a\u4f8b2\uff0c\u521b\u5efa\u6570\u7ec4"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'func main() {\n    j := gjson.New(nil)\n    for i := 0; i < 5; i++ {\n        j.Set(fmt.Sprintf(`%d.id`, i), i)\n        j.Set(fmt.Sprintf(`%d.name`, i), fmt.Sprintf(`student-%d`, i))\n    }\n    fmt.Println(j.MustToJsonString())\n\n    // Output:\n    // [{"id":0,"name":"student-0"},{"id":1,"name":"student-1"},{"id":2,"name":"student-2"},{"id":3,"name":"student-3"},{"id":4,"name":"student-4"}]\n}\n'})}),"\n",(0,o.jsx)(e.h2,{id:"\u52a8\u6001\u4fee\u6539-1",children:"\u52a8\u6001\u4fee\u6539"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'func main() {\n    data :=\n        `{\n    "users" : {\n        "count" : 2,\n        "list"  : [\n            {"name" : "Ming", "score" : 60},\n            {"name" : "John", "score" : 59}\n        ]\n    }\n}`\n    if j, err := gjson.DecodeToJson(data); err != nil {\n        panic(err)\n    } else {\n        j.Set("users.list.1.score", 100)\n        fmt.Println("John Score:", j.Get("users.list.1.score").Float32())\n        fmt.Println(j.MustToJsonString())\n    }\n    // Output:\n    // John Score: 100\n    // {"users":{"count":2,"list":[{"name":"Ming","score":60},{"name":"John","score":100}]}}\n}\n'})}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"JSON"})," \u6570\u636e\u901a\u8fc7 ",(0,o.jsx)(e.code,{children:"gjson"})," \u5305\u8bfb\u53d6\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,o.jsx)(e.code,{children:"Set"})," \u65b9\u6cd5\u6539\u53d8\u5185\u90e8\u53d8\u91cf\u7684\u5185\u5bb9\uff0c\u5f53\u7136\u4e5f\u53ef\u4ee5 ",(0,o.jsx)(e.code,{children:"\u65b0\u589e/\u5220\u9664"})," \u5185\u5bb9\uff0c\u5f53\u9700\u8981\u5220\u9664\u5185\u5bb9\u65f6\uff0c\u8bbe\u5b9a\u7684\u503c\u4e3a ",(0,o.jsx)(e.code,{children:"nil"})," \u5373\u53ef\u3002 ",(0,o.jsx)(e.code,{children:"gjson"})," \u5305\u7684\u6570\u636e\u8fd0\u884c\u65f6\u4fee\u6539\u7279\u6027\u975e\u5e38\u5f3a\u5927\uff0c\u5728\u8be5\u7279\u6027\u7684\u652f\u6301\u4e0b\uff0c\u5404\u79cd\u6570\u636e\u7ed3\u6784\u7684\u7f16\u7801/\u89e3\u6790\u663e\u5f97\u5f02\u5e38\u7684\u7075\u6d3b\u65b9\u4fbf\u3002"]})]})}function j(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>c});var s=t(296540);const o={},i=s.createContext(o);function r(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);