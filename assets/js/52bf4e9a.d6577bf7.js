"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["64332"],{212044:function(e,n,d){d.r(n),d.d(n,{metadata:()=>c,contentTitle:()=>l,default:()=>h,assets:()=>t,toc:()=>o,frontMatter:()=>r});var c=JSON.parse('{"id":"\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u73AF\u5883\u53D8\u91CF-genv","title":"\u73AF\u5883\u53D8\u91CF-genv","description":"\u73AF\u5883\u53D8\u91CF\u7BA1\u7406\u7EC4\u4EF6\u3002","source":"@site/versioned_docs/version-2.3.x/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u73AF\u5883\u53D8\u91CF-genv.md","sourceDirName":"\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173","slug":"/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u73AF\u5883\u53D8\u91CF-genv","permalink":"/2.3.x/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u73AF\u5883\u53D8\u91CF-genv","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.3.x/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u73AF\u5883\u53D8\u91CF-genv.md","tags":[],"version":"2.3.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":12,"frontMatter":{"title":"\u73AF\u5883\u53D8\u91CF-genv","sidebar_position":12,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u914D\u7F6E\u7BA1\u7406-gcfg","permalink":"/2.3.x/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u914D\u7F6E\u7BA1\u7406-gcfg"},"next":{"title":"\u6587\u4EF6\u76D1\u63A7-gfsnotify","permalink":"/2.3.x/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u6587\u4EF6\u76D1\u63A7-gfsnotify"}}'),i=d("785893"),s=d("250065");let r={title:"\u73AF\u5883\u53D8\u91CF-genv",sidebar_position:12,hide_title:!0},l=void 0,t={},o=[{value:"<code>SetMap</code>",id:"setmap",level:2},{value:"<code>GetWithCmd</code>",id:"getwithcmd",level:2},{value:"<code>All</code>",id:"all",level:2},{value:"<code>Map</code>",id:"map",level:2},{value:"<code>Get</code>",id:"get",level:2},{value:"<code>Set</code>",id:"set",level:2},{value:"<code>SetMap</code>",id:"setmap-1",level:2},{value:"<code>Contains</code>",id:"contains",level:2},{value:"<code>Remove</code>",id:"remove",level:2},{value:"<code>Build</code>",id:"build",level:2}];function a(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u73AF\u5883\u53D8\u91CF\u7BA1\u7406\u7EC4\u4EF6\u3002"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u4F7F\u7528\u65B9\u5F0F"}),"\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/os/genv"\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u63A5\u53E3\u6587\u6863"}),"\uFF1A"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/os/genv",children:"https://pkg.go.dev/github.com/gogf/gf/v2/os/genv"})}),"\n",(0,i.jsx)(n.h2,{id:"setmap",children:(0,i.jsx)(n.code,{children:"SetMap"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"func SetMap(m map[string]string) error\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u8BE5\u65B9\u6CD5\u7528\u4E8E\u6279\u91CF\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\u3002\u4F7F\u7528\u793A\u4F8B\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'genv.SetMap(g.MapStrStr{\n    "APPID":     "order",\n    "THREAD":    "16",\n    "ENDPOINTS": "127.0.0.1:6379",\n})\n'})}),"\n",(0,i.jsx)(n.h2,{id:"getwithcmd",children:(0,i.jsx)(n.code,{children:"GetWithCmd"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"func GetWithCmd(key string, def ...interface{}) *gvar.Var\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8BE5\u65B9\u6CD5\u7528\u4E8E\u83B7\u53D6\u73AF\u5883\u53D8\u91CF\u4E2D\u6307\u5B9A\u7684\u9009\u9879\u6570\u503C\uFF0C\u5982\u679C\u8BE5\u73AF\u5883\u53D8\u91CF\u4E0D\u5B58\u5728\u65F6\uFF0C\u5219\u4ECE\u547D\u4EE4\u884C\u9009\u9879\u4E2D\u8BFB\u53D6\u3002\u4F46\u662F\u4E24\u8005\u7684\u540D\u79F0\u89C4\u5219\u4F1A\u4E0D\u4E00\u6837\u3002\u4F8B\u5982\uFF1A ",(0,i.jsx)(n.code,{children:'genv.GetWithCmd("gf.debug")'})," \u5C06\u4F1A\u4F18\u5148\u53BB\u8BFB\u53D6 ",(0,i.jsx)(n.code,{children:"GF_DEBUG"})," \u73AF\u5883\u53D8\u91CF\u7684\u503C\uFF0C\u5F53\u4E0D\u5B58\u5728\u65F6\u5219\u53BB\u547D\u4EE4\u884C\u4E2D\u7684 ",(0,i.jsx)(n.code,{children:"gf.debug"})," \u9009\u9879\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u9700\u8981\u6CE8\u610F\u7684\u662F\u53C2\u6570\u547D\u540D\u8F6C\u6362\u89C4\u5219\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u73AF\u5883\u53D8\u91CF\u4F1A\u5C06\u540D\u79F0\u8F6C\u6362\u4E3A\u5927\u5199\uFF0C\u540D\u79F0\u4E2D\u7684 ",(0,i.jsx)(n.code,{children:"."})," \u5B57\u7B26\u8F6C\u6362\u4E3A ",(0,i.jsx)(n.code,{children:"_"})," \u5B57\u7B26\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u547D\u4EE4\u884C\u4E2D\u4F1A\u5C06\u540D\u79F0\u8F6C\u6362\u4E3A\u5C0F\u5199\uFF0C\u540D\u79F0\u4E2D\u7684 ",(0,i.jsx)(n.code,{children:"_"})," \u5B57\u7B26\u8F6C\u6362\u4E3A ",(0,i.jsx)(n.code,{children:"."})," \u5B57\u7B26\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"all",children:(0,i.jsx)(n.code,{children:"All"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"func All() []string\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8BE5\u65B9\u6CD5\u8868\u793A\u8FD4\u56DE\u73AF\u5883\u53D8\u91CF\u4E2D\u7684\u5B57\u7B26\u4E32\uFF0C\u5E76\u4E14\u4EE5` ",(0,i.jsx)(n.code,{children:"key=value"})," `\u7684\u5F62\u5F0F\u8FD4\u56DE\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"map",children:(0,i.jsx)(n.code,{children:"Map"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"func Map() map[string]string\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8BE5\u65B9\u6CD5\u8868\u793A\u8FD4\u56DE\u73AF\u5883\u53D8\u91CF\u4E2D\u7684\u5B57\u7B26\u4E32\uFF0C\u5E76\u4E14\u4EE5` ",(0,i.jsx)(n.code,{children:"map"})," `\u7684\u5F62\u5F0F\u8FD4\u56DE\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"get",children:(0,i.jsx)(n.code,{children:"Get"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"func Get(key string, def ...interface{}) *gvar.Var\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8BE5\u65B9\u6CD5\u7528\u4E8E\u521B\u5EFA\u8FD4\u56DE\u4E00\u4E2A\u6CDB\u578B\u7C7B\u578B\u7684\u73AF\u5883\u53D8\u91CF\uFF0C\u5982\u679C\u7ED9\u5B9A\u7684 ",(0,i.jsx)(n.code,{children:"key"})," \u4E0D\u5B58\u5728\u5219\u8FD4\u56DE\u4E00\u4E2A\u9ED8\u8BA4\u7684\u6CDB\u578B\u7C7B\u578B\u7684\u73AF\u5883\u53D8\u91CF\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"set",children:(0,i.jsx)(n.code,{children:"Set"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"func Set(key, value string) error\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8BE5\u65B9\u6CD5\u662F\u901A\u8FC7\u5B58\u653E ",(0,i.jsx)(n.code,{children:"key"})," \u548C ",(0,i.jsx)(n.code,{children:"value"})," \u7684\u73AF\u5883\u53D8\u91CF\uFF0C\u5982\u679C\u6709\u62A5\u9519\u5219\u8FD4\u56DE\u4E00\u4E2A ",(0,i.jsx)(n.code,{children:"Error"})," \u7C7B\u578B\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"setmap-1",children:(0,i.jsx)(n.code,{children:"SetMap"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"func SetMap(m map[string]string) error\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8BE5\u65B9\u6CD5\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"map"})," \u7C7B\u578B\u7684\u53C2\u6570\u5B58\u653E\u73AF\u5883\u53D8\u91CF\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"contains",children:(0,i.jsx)(n.code,{children:"Contains"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"func Contains(key string) bool\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8BE5\u65B9\u6CD5\u901A\u8FC7\u68C0\u67E5\u73AF\u5883\u53D8\u91CF\u4E2D\u662F\u5426\u5B58\u5728 ",(0,i.jsx)(n.code,{children:"key"}),"\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"remove",children:(0,i.jsx)(n.code,{children:"Remove"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"func Remove(key ...string) error\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u8BE5\u65B9\u6CD5\u53EF\u4EE5\u5220\u9664\u4E00\u4E2A\u6216\u8005\u591A\u4E2A\u73AF\u5883\u53D8\u91CF\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"build",children:(0,i.jsx)(n.code,{children:"Build"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"func Build(m map[string]string) []string\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8BE5\u65B9\u6CD5\u5C06 ",(0,i.jsx)(n.code,{children:"map"})," \u7684\u53C2\u6570\u4EE5\u6570\u7EC4\u7684\u5F62\u5F0F\u6784\u5EFA\u5E76\u4E14\u8FD4\u56DE\u3002"]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return l},a:function(){return r}});var c=d(667294);let i={},s=c.createContext(i);function r(e){let n=c.useContext(s);return c.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);