"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[7714],{952997:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>n,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"docs/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/SameSite \u8bbe\u7f6e","title":"SameSite\u8bbe\u7f6e","description":"\u672c\u6587\u6863\u4ecb\u7ecd\u4e86\u5982\u4f55\u5728\u4f7f\u7528GoFrame\u6846\u67b6\u6784\u5efa\u7684\u670d\u52a1\u5668\u4e2d\u8bbe\u7f6eSameSite\u5c5e\u6027\u3002\u901a\u8fc7\u8be6\u7ec6\u7684\u4ee3\u7801\u4f8b\u5b50\uff0c\u60a8\u53ef\u4ee5\u5b66\u4e60\u5982\u4f55\u914d\u7f6eSameSite\u4ee5\u786e\u4fddcookie\u5b89\u5168\u6027\uff0c\u5c24\u5176\u662f\u5728chrome89\u53ca\u4ee5\u4e0a\u7248\u672c\u4e2d\u5904\u7406\u4e0d\u540c\u534f\u8bae\u7684\u8de8\u7ad9\u8bf7\u6c42\u3002","source":"@site/docs/docs/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/SameSite \u8bbe\u7f6e.md","sourceDirName":"docs/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027","slug":"/docs/web/senior-same-site","permalink":"/docs/web/senior-same-site","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/SameSite \u8bbe\u7f6e.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731055597000,"sidebarPosition":10,"frontMatter":{"slug":"/docs/web/senior-same-site","title":"SameSite\u8bbe\u7f6e","sidebar_position":10,"hide_title":true,"keywords":["SameSite\u8bbe\u7f6e","GoFrame","cookie","chrome89","\u534f\u8bae","\u8de8\u7ad9\u8bf7\u6c42","http","secure","GoFrame\u6846\u67b6","\u670d\u52a1\u5668\u914d\u7f6e"],"description":"\u672c\u6587\u6863\u4ecb\u7ecd\u4e86\u5982\u4f55\u5728\u4f7f\u7528GoFrame\u6846\u67b6\u6784\u5efa\u7684\u670d\u52a1\u5668\u4e2d\u8bbe\u7f6eSameSite\u5c5e\u6027\u3002\u901a\u8fc7\u8be6\u7ec6\u7684\u4ee3\u7801\u4f8b\u5b50\uff0c\u60a8\u53ef\u4ee5\u5b66\u4e60\u5982\u4f55\u914d\u7f6eSameSite\u4ee5\u786e\u4fddcookie\u5b89\u5168\u6027\uff0c\u5c24\u5176\u662f\u5728chrome89\u53ca\u4ee5\u4e0a\u7248\u672c\u4e2d\u5904\u7406\u4e0d\u540c\u534f\u8bae\u7684\u8de8\u7ad9\u8bf7\u6c42\u3002"},"sidebar":"mainSidebar","previous":{"title":"PProf\u670d\u52a1\u6027\u80fd\u5206\u6790","permalink":"/docs/web/senior-pprof"},"next":{"title":"HTTPServer-\u76d1\u63a7\u6307\u6807","permalink":"/docs/web/senior-server-metrics"}}');var o=s(474848),r=s(28453);const n={slug:"/docs/web/senior-same-site",title:"SameSite\u8bbe\u7f6e",sidebar_position:10,hide_title:!0,keywords:["SameSite\u8bbe\u7f6e","GoFrame","cookie","chrome89","\u534f\u8bae","\u8de8\u7ad9\u8bf7\u6c42","http","secure","GoFrame\u6846\u67b6","\u670d\u52a1\u5668\u914d\u7f6e"],description:"\u672c\u6587\u6863\u4ecb\u7ecd\u4e86\u5982\u4f55\u5728\u4f7f\u7528GoFrame\u6846\u67b6\u6784\u5efa\u7684\u670d\u52a1\u5668\u4e2d\u8bbe\u7f6eSameSite\u5c5e\u6027\u3002\u901a\u8fc7\u8be6\u7ec6\u7684\u4ee3\u7801\u4f8b\u5b50\uff0c\u60a8\u53ef\u4ee5\u5b66\u4e60\u5982\u4f55\u914d\u7f6eSameSite\u4ee5\u786e\u4fddcookie\u5b89\u5168\u6027\uff0c\u5c24\u5176\u662f\u5728chrome89\u53ca\u4ee5\u4e0a\u7248\u672c\u4e2d\u5904\u7406\u4e0d\u540c\u534f\u8bae\u7684\u8de8\u7ad9\u8bf7\u6c42\u3002"},c=void 0,a={},d=[{value:"SameSite \u4ecb\u7ecd",id:"samesite-\u4ecb\u7ecd",level:2},{value:"\u53c2\u8003\u6587\u6863",id:"\u53c2\u8003\u6587\u6863",level:3},{value:"chrome89\u5f00\u59cb\u534f\u8bae\u4e0d\u540c\u4e5f\u5c5e\u4e8e\u8de8\u7ad9\u8bf7\u6c42",id:"chrome89\u5f00\u59cb\u534f\u8bae\u4e0d\u540c\u4e5f\u5c5e\u4e8e\u8de8\u7ad9\u8bf7\u6c42",level:3},{value:"\u5982\u4f55\u8bbe\u7f6e\uff1f",id:"\u5982\u4f55\u8bbe\u7f6e",level:2}];function m(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"samesite-\u4ecb\u7ecd",children:"SameSite \u4ecb\u7ecd"}),"\n",(0,o.jsx)(t.h3,{id:"\u53c2\u8003\u6587\u6863",children:"\u53c2\u8003\u6587\u6863"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://web.dev/samesite-cookies-explained/",children:"https://web.dev/samesite-cookies-explained/"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://web.dev/samesite-cookie-recipes/",children:"https://web.dev/samesite-cookie-recipes/"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://web.dev/schemeful-samesite/",children:"https://web.dev/schemeful-samesite/"})}),"\n",(0,o.jsx)(t.h3,{id:"chrome89\u5f00\u59cb\u534f\u8bae\u4e0d\u540c\u4e5f\u5c5e\u4e8e\u8de8\u7ad9\u8bf7\u6c42",children:"chrome89\u5f00\u59cb\u534f\u8bae\u4e0d\u540c\u4e5f\u5c5e\u4e8e\u8de8\u7ad9\u8bf7\u6c42"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://www.chromestatus.com/feature/5096179480133632",children:"https://www.chromestatus.com/feature/5096179480133632"})}),"\n",(0,o.jsx)(t.h2,{id:"\u5982\u4f55\u8bbe\u7f6e",children:"\u5982\u4f55\u8bbe\u7f6e\uff1f"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-go",children:'func main() {\n    s := g.Server()\n    s.BindHandler("/", func(r *ghttp.Request) {\n        r.Cookie.SetHttpCookie(&http.Cookie{\n            Name:     "test",\n            Value:    "1234",\n            Secure:   true,\n            SameSite: http.SameSiteNoneMode,// \u81ea\u5b9a\u4e49samesite\uff0c\u914d\u5408secure\u4e00\u8d77\u4f7f\u7528\n        })\n    })\n    s.SetAddr("127.0.0.1:8080")\n    s.Run()\n}\n'})})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>n,x:()=>c});var i=s(296540);const o={},r=i.createContext(o);function n(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);