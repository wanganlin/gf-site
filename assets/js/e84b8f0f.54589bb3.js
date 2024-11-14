"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["36529"],{54070:function(n,e,t){t.r(e),t.d(e,{metadata:()=>i,contentTitle:()=>o,default:()=>p,assets:()=>l,toc:()=>a,frontMatter:()=>c});var i=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6/\u6A21\u677F\u5F15\u64CE/\u6A21\u677F\u5F15\u64CE-\u5176\u4ED6\u4F7F\u7528","title":"\u6A21\u677F\u5F15\u64CE-\u5176\u4ED6\u4F7F\u7528","description":"I18N \u652F\u6301","source":"@site/versioned_docs/version-2.5.x/\u6838\u5FC3\u7EC4\u4EF6/\u6A21\u677F\u5F15\u64CE/\u6A21\u677F\u5F15\u64CE-\u5176\u4ED6\u4F7F\u7528.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6/\u6A21\u677F\u5F15\u64CE","slug":"/\u6838\u5FC3\u7EC4\u4EF6/\u6A21\u677F\u5F15\u64CE/\u6A21\u677F\u5F15\u64CE-\u5176\u4ED6\u4F7F\u7528","permalink":"/2.5.x/\u6838\u5FC3\u7EC4\u4EF6/\u6A21\u677F\u5F15\u64CE/\u6A21\u677F\u5F15\u64CE-\u5176\u4ED6\u4F7F\u7528","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.5.x/\u6838\u5FC3\u7EC4\u4EF6/\u6A21\u677F\u5F15\u64CE/\u6A21\u677F\u5F15\u64CE-\u5176\u4ED6\u4F7F\u7528.md","tags":[],"version":"2.5.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":6,"frontMatter":{"title":"\u6A21\u677F\u5F15\u64CE-\u5176\u4ED6\u4F7F\u7528","sidebar_position":6,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u6A21\u677F\u5F15\u64CE-XSS\u5904\u7406","permalink":"/2.5.x/\u6838\u5FC3\u7EC4\u4EF6/\u6A21\u677F\u5F15\u64CE/\u6A21\u677F\u5F15\u64CE-XSS\u5904\u7406"},"next":{"title":"\u6A21\u677F\u51FD\u6570-\u57FA\u7840\u51FD\u6570","permalink":"/2.5.x/\u6838\u5FC3\u7EC4\u4EF6/\u6A21\u677F\u5F15\u64CE/\u6A21\u677F\u5F15\u64CE-\u6A21\u677F\u51FD\u6570/\u6A21\u677F\u51FD\u6570-\u57FA\u7840\u51FD\u6570"}}'),r=t("785893"),s=t("250065");let c={title:"\u6A21\u677F\u5F15\u64CE-\u5176\u4ED6\u4F7F\u7528",sidebar_position:6,hide_title:!0},o=void 0,l={},a=[{value:"<code>I18N</code> \u652F\u6301",id:"i18n-\u652F\u6301",level:2},{value:"HTTP\u5BF9\u8C61\u89C6\u56FE",id:"http\u5BF9\u8C61\u89C6\u56FE",level:2},{value:"\u63A7\u5236\u5668\u89C6\u56FE\u7BA1\u7406",id:"\u63A7\u5236\u5668\u89C6\u56FE\u7BA1\u7406",level:2}];function d(n){let e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.h2,{id:"i18n-\u652F\u6301",children:[(0,r.jsx)(e.code,{children:"I18N"})," \u652F\u6301"]}),"\n",(0,r.jsxs)(e.p,{children:["\u6A21\u677F\u5F15\u64CE\u652F\u6301 ",(0,r.jsx)(e.code,{children:"i18n"})," \u7279\u6027\uFF0C\u53EF\u4EE5\u901A\u8FC7\u7ED9\u4E0A\u4E0B\u6587\u6CE8\u5165\u7279\u5B9A\u7684 ",(0,r.jsx)(e.code,{children:"i18n"})," \u8BED\u8A00\u6765\u5B9E\u73B0\u4E0D\u540C\u7684\u8BF7\u6C42/\u9875\u9762\u4F7F\u7528\u4E0D\u540C\u7684 ",(0,r.jsx)(e.code,{children:"i18n"})," \u8BED\u8A00\u6E32\u67D3\u3002\u4F8B\u5982\uFF1A"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "fmt"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/i18n/gi18n"\n)\n\nfunc main() {\n    var (\n        ctxCN   = gi18n.WithLanguage(context.TODO(), "zh-CN")\n        ctxJa   = gi18n.WithLanguage(context.TODO(), "ja")\n        content = `{{.name}} says "{#hello}{#world}!"`\n    )\n\n    result1, _ := g.View().ParseContent(ctxCN, content, g.Map{\n        "name": "john",\n    })\n    fmt.Println(result1)\n\n    result2, _ := g.View().ParseContent(ctxJa, content, g.Map{\n        "name": "john",\n    })\n    fmt.Println(result2)\n}\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u6267\u884C\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A\uFF08\u4FDD\u8BC1\u5F53\u524D\u8FD0\u884C\u76EE\u5F55\u5E26\u6709 ",(0,r.jsx)(e.code,{children:"i18n"})," \u8F6C\u8BD1\u914D\u7F6E\u6587\u4EF6\uFF09"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'john says "\u4F60\u597D\u4E16\u754C!"\njohn says "\u3053\u3093\u306B\u3061\u306F\u4E16\u754C!"\n'})}),"\n",(0,r.jsx)(e.h2,{id:"http\u5BF9\u8C61\u89C6\u56FE",children:"HTTP\u5BF9\u8C61\u89C6\u56FE"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"goframe"})," \u6846\u67B6\u7684 ",(0,r.jsx)(e.code,{children:"WebServer"})," \u7684\u8FD4\u56DE\u5BF9\u8C61\u4E2D\u63D0\u4F9B\u4E86\u57FA\u7840\u7684\u6A21\u677F\u89E3\u6790\u65B9\u6CD5\uFF0C\u5982\u4E0B\uFF1A"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:"func (r *Response) WriteTpl(tpl string, params map[string]interface{}, funcMap ...map[string]interface{}) error\nfunc (r *Response) WriteTplContent(content string, params map[string]interface{}, funcMap ...map[string]interface{}) error\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u5176\u4E2D ",(0,r.jsx)(e.code,{children:"WriteTpl"})," \u7528\u4E8E\u8F93\u51FA\u6A21\u677F\u6587\u4EF6\uFF0C ",(0,r.jsx)(e.code,{children:"WriteTplContent"})," \u7528\u4E8E\u76F4\u63A5\u89E3\u6790\u8F93\u51FA\u6A21\u677F\u5185\u5BB9\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u4F7F\u7528\u793A\u4F8B\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/", func(r *ghttp.Request) {\n        r.Cookie.Set("theme", "default")\n        r.Session.Set("name", "john")\n        r.Response.WriteTplContent(`Cookie:{{.Cookie.theme}}, Session:{{.Session.name}}`, nil)\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u6267\u884C\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Cookie:default, Session:john\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u63A7\u5236\u5668\u89C6\u56FE\u7BA1\u7406",children:"\u63A7\u5236\u5668\u89C6\u56FE\u7BA1\u7406"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"goframe"})," \u4E3A\u8DEF\u7531\u63A7\u5236\u5668\u6CE8\u518C\u65B9\u5F0F\u63D0\u4F9B\u4E86\u826F\u597D\u7684\u6A21\u677F\u5F15\u64CE\u652F\u6301\uFF0C\u7531 ",(0,r.jsx)(e.code,{children:"gmvc.View"})," \u89C6\u56FE\u5BF9\u8C61\u8FDB\u884C\u7BA1\u7406\uFF0C\u63D0\u4F9B\u4E86\u826F\u597D\u7684\u6570\u636E ",(0,r.jsx)(e.code,{children:"\u9694\u79BB\u6027"}),"\u3002\u63A7\u5236\u5668\u89C6\u56FE\u662F\u5E76\u53D1\u5B89\u5168\u8BBE\u8BA1\u7684\uFF0C\u5141\u8BB8\u5728\u591A\u7EBF\u7A0B\u4E2D\u5F02\u6B65\u64CD\u4F5C\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u63A7\u5236\u5668\u6CE8\u518C\u65B9\u5F0F\u7C7B\u4F3C\u4E8EPHP\u6267\u884C\u6D41\u7A0B\uFF0C\u76F8\u5BF9\u6765\u8BF4\u6027\u80FD\u6BD4\u8F83\u4F4E\u6548\uFF0C\u56E0\u6B64\u672A\u6765\u4E0D\u518D\u63A8\u8350\u4F7F\u7528\u63A7\u5236\u5668\u6CE8\u518C\u65B9\u5F0F\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:"func (view *View) Assign(key string, value interface{})\nfunc (view *View) Assigns(data gview.Params)\n\nfunc (view *View) Parse(file string) ([]byte, error)\nfunc (view *View) ParseContent(content string) ([]byte, error)\n\nfunc (view *View) Display(files ...string) error\nfunc (view *View) DisplayContent(content string) error\n\nfunc (view *View) LockFunc(f func(vars map[string]interface{}))\nfunc (view *View) RLockFunc(f func(vars map[string]interface{}))\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u4F7F\u7528\u793A\u4F8B1\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/net/ghttp"\n    "github.com/gogf/gf/v2/frame/gmvc"\n)\n\ntype ControllerTemplate struct {\n    gmvc.Controller\n}\n\nfunc (c *ControllerTemplate) Info() {\n    c.View.Assign("name", "john")\n    c.View.Assigns(map[string]interface{}{\n        "age"   : 18,\n        "score" : 100,\n    })\n    c.View.Display("index.tpl")\n}\n\nfunc main() {\n    s := ghttp.GetServer()\n    s.BindController("/template", new(ControllerTemplate))\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u5176\u4E2D ",(0,r.jsx)(e.code,{children:"index.tpl"})," \u7684\u6A21\u677F\u5185\u5BB9\u5982\u4E0B\uFF1A"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"<html>\n    <head>\n        <title>gf template engine</title>\n    </head>\n    <body>\n        <p>Name: {{.name}}</p>\n        <p>Age:  {{.age}}</p>\n        <p>Score:{{.score}}</p>\n    </body>\n</html>\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u6267\u884C\u540E\uFF0C\u8BBF\u95EE ",(0,r.jsx)(e.a,{href:"http://127.0.0.1:8199/template/info",children:"http://127.0.0.1:8199/template/info"})," \u53EF\u4EE5\u770B\u5230\u6A21\u677F\u88AB\u89E3\u6790\u5E76\u5C55\u793A\u5230\u9875\u9762\u4E0A\u3002\u5982\u679C\u9875\u9762\u62A5\u9519\u627E\u4E0D\u5230\u6A21\u677F\u6587\u4EF6\uFF0C\u6CA1\u6709\u5173\u7CFB\uFF0C\u56E0\u4E3A\u8FD9\u91CC\u5E76\u6CA1\u6709\u5BF9\u6A21\u677F\u76EE\u5F55\u505A\u8BBE\u7F6E\uFF0C\u9ED8\u8BA4\u662F\u5F53\u524D\u53EF\u884C\u6587\u4EF6\u7684\u6267\u884C\u76EE\u5F55\uFF08 ",(0,r.jsx)(e.code,{children:"Linux&Mac"})," \u4E0B\u662F ",(0,r.jsx)(e.code,{children:"/tmp"})," \u76EE\u5F55\uFF0C ",(0,r.jsx)(e.code,{children:"Windows"})," \u4E0B\u662F ",(0,r.jsx)(e.code,{children:"C:\\Documents and Settings\\\u7528\u6237\u540D\\Local Settings\\Temp"}),"\uFF09\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u5176\u4E2D\uFF0C\u7ED9\u5B9A\u7684\u6A21\u677F\u6587\u4EF6file\u53C2\u6570\u662F\u9700\u8981\u5E26\u5B8C\u6574\u7684\u6587\u4EF6\u540D\u540E\u7F00\uFF0C\u4F8B\u5982\uFF1A ",(0,r.jsx)(e.code,{children:"index.tpl"}),"\uFF0C ",(0,r.jsx)(e.code,{children:"index.html"})," \u7B49\u7B49\uFF0C\u6A21\u677F\u5F15\u64CE\u5BF9\u6A21\u677F\u6587\u4EF6\u540E\u7F00\u540D\u6CA1\u6709\u8981\u6C42\uFF0C\u7528\u6237\u53EF\u5B8C\u5168\u81EA\u5B9A\u4E49\u3002\u6B64\u5916\uFF0C\u6A21\u677F\u6587\u4EF6\u53C2\u6570\u4E5F\u652F\u6301\u6587\u4EF6\u7684\u7EDD\u5BF9\u8DEF\u5F84(\u5B8C\u6574\u7684\u6587\u4EF6\u8DEF\u5F84)\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u5F53\u7136\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u76F4\u63A5\u89E3\u6790\u6A21\u677F\u5185\u5BB9\uFF0C\u4F8B\u5982\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/net/ghttp"\n    "github.com/gogf/gf/v2/frame/gmvc"\n)\n\ntype ControllerTemplate struct {\n    gmvc.Controller\n}\n\nfunc (c *ControllerTemplate) Info() {\n    c.View.Assign("name", "john")\n    c.View.Assigns(map[string]interface{}{\n        "age"   : 18,\n        "score" : 100,\n    })\n    c.View.DisplayContent(`\n        <html>\n            <head>\n                <title>gf template engine</title>\n            </head>\n            <body>\n                <p>Name: {{.name}}</p>\n                <p>Age:  {{.age}}</p>\n                <p>Score:{{.score}}</p>\n            </body>\n        </html>\n    `)\n}\n\nfunc main() {\n    s := ghttp.GetServer()\n    s.BindController("/template", new(ControllerTemplate{}))\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u6267\u884C\u540E\uFF0C\u8BBF\u95EE ",(0,r.jsx)(e.a,{href:"http://127.0.0.1:8199/template/info",children:"http://127.0.0.1:8199/template/info"})," \u53EF\u4EE5\u770B\u5230\u89E3\u6790\u540E\u7684\u5185\u5BB9\u5982\u4E0B\uFF1A"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"<html>\n    <head>\n        <title>gf template engine</title>\n    </head>\n    <body>\n        <p>Name: john</p>\n        <p>Age:  18</p>\n        <p>Score:100</p>\n    </body>\n</html>\n"})})]})}function p(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return o},a:function(){return c}});var i=t(667294);let r={},s=i.createContext(r);function c(n){let e=i.useContext(s);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);