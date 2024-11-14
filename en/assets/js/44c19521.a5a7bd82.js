"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["71141"],{137843:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>r,default:()=>d,assets:()=>l,toc:()=>s,frontMatter:()=>o});var a=JSON.parse('{"id":"\u5F00\u53D1\u5DE5\u5177/\u8D44\u6E90\u6253\u5305-pack","title":"\u8D44\u6E90\u6253\u5305-pack","description":"\u4F7F\u7528\u65B9\u5F0F","source":"@site/versioned_docs/version-2.5.x/\u5F00\u53D1\u5DE5\u5177/\u8D44\u6E90\u6253\u5305-pack.md","sourceDirName":"\u5F00\u53D1\u5DE5\u5177","slug":"/\u5F00\u53D1\u5DE5\u5177/\u8D44\u6E90\u6253\u5305-pack","permalink":"/en/2.5.x/\u5F00\u53D1\u5DE5\u5177/\u8D44\u6E90\u6253\u5305-pack","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.5.x/\u5F00\u53D1\u5DE5\u5177/\u8D44\u6E90\u6253\u5305-pack.md","tags":[],"version":"2.5.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":7,"frontMatter":{"title":"\u8D44\u6E90\u6253\u5305-pack","sidebar_position":7,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u81EA\u52A8\u7F16\u8BD1-run","permalink":"/en/2.5.x/\u5F00\u53D1\u5DE5\u5177/\u81EA\u52A8\u7F16\u8BD1-run"},"next":{"title":"\u955C\u50CF\u7F16\u8BD1-docker","permalink":"/en/2.5.x/\u5F00\u53D1\u5DE5\u5177/\u955C\u50CF\u7F16\u8BD1-docker"}}'),i=t("785893"),c=t("250065");let o={title:"\u8D44\u6E90\u6253\u5305-pack",sidebar_position:7,hide_title:!0},r=void 0,l={},s=[{value:"\u4F7F\u7528\u65B9\u5F0F",id:"\u4F7F\u7528\u65B9\u5F0F",level:2},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:2},{value:"\u5EF6\u4F38\u9605\u8BFB",id:"\u5EF6\u4F38\u9605\u8BFB",level:2}];function p(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u4F7F\u7528\u65B9\u5F0F",children:"\u4F7F\u7528\u65B9\u5F0F"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'$ gf pack -h\nUSAGE\n    gf pack SRC DST\n\nARGUMENT\n    SRC    source path for packing, which can be multiple source paths.\n    DST    destination file path for packed file. if extension of the filename is ".go" and "-n" option is given,\n           it enables packing SRC to go file, or else it packs SRC into a binary file.\n\nOPTION\n    -n, --name       package name for output go file, it\'s set as its directory name if no name passed\n    -p, --prefix     prefix for each file packed into the resource file\n    -k, --keepPath   keep the source path from system to resource file, usually for relative path\n    -h, --help       more information about this command\n\nEXAMPLE\n    gf pack public data.bin\n    gf pack public,template data.bin\n    gf pack public,template packed/data.go\n    gf pack public,template,config packed/data.go\n    gf pack public,template,config packed/data.go -n=packed -p=/var/www/my-app\n    gf pack /var/www/public packed/data.go -n=packed\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u8BE5\u547D\u4EE4\u7528\u4EE5\u5C06\u4EFB\u610F\u7684\u6587\u4EF6\u6253\u5305\u4E3A\u8D44\u6E90\u6587\u4EF6\u6216\u8005 ",(0,i.jsx)(n.code,{children:"Go"})," \u4EE3\u7801\u6587\u4EF6\uFF0C\u53EF\u5C06\u4EFB\u610F\u6587\u4EF6\u6253\u5305\u540E\u968F\u7740\u53EF\u6267\u884C\u6587\u4EF6\u4E00\u540C\u53D1\u5E03\u3002\u6B64\u5916\uFF0C\u5728 ",(0,i.jsx)(n.code,{children:"build"})," \u547D\u4EE4\u4E2D\u652F\u6301\u6253\u5305+\u7F16\u8BD1\u4E00\u6B65\u8FDB\u884C\uFF0C\u5177\u4F53\u8BF7\u67E5\u770B ",(0,i.jsx)(n.code,{children:"build"})," \u547D\u4EE4\u5E2E\u52A9\u4FE1\u606F\u3002\u5173\u4E8E\u8D44\u6E90\u7BA1\u7406\u7684\u4ECB\u7ECD\u8BF7\u53C2\u8003 ",(0,i.jsx)(n.a,{href:"/en/2.5.x/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E8%B5%84%E6%BA%90%E7%AE%A1%E7%90%86/",children:"\u8D44\u6E90\u7BA1\u7406"})," \u7AE0\u8282\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ gf pack public,template packed/data.go\ndone!\n$ ll packed\ntotal 184\n-rw-r--r--  1 john  staff    89K Dec 31 00:44 data.go\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u5EF6\u4F38\u9605\u8BFB",children:"\u5EF6\u4F38\u9605\u8BFB"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/en/2.5.x/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E8%B5%84%E6%BA%90%E7%AE%A1%E7%90%86/%E8%B5%84%E6%BA%90%E7%AE%A1%E7%90%86-%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5",children:"\u8D44\u6E90\u7BA1\u7406-\u6700\u4F73\u5B9E\u8DF5"})}),"\n"]})]})}function d(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return o}});var a=t(667294);let i={},c=a.createContext(i);function o(e){let n=a.useContext(c);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);