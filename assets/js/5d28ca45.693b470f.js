"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["12275"],{167188:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>h,assets:()=>l,toc:()=>d,frontMatter:()=>c});var s=JSON.parse('{"id":"\u6A21\u5757\u5217\u8868/\u7F16\u7801\u89E3\u7801/gcharset -\u5B57\u7B26\u96C6\u8F6C\u6362","title":"gcharset (\u5B57\u7B26\u96C6\u8F6C\u6362)","description":"\u5F3A\u5927\u7684\u5B57\u7B26\u7F16\u7801\u8F6C\u6362\u6A21\u5757\u3002","source":"@site/versioned_docs/version-1.16.x/\u6A21\u5757\u5217\u8868/\u7F16\u7801\u89E3\u7801/gcharset -\u5B57\u7B26\u96C6\u8F6C\u6362.md","sourceDirName":"\u6A21\u5757\u5217\u8868/\u7F16\u7801\u89E3\u7801","slug":"/\u6A21\u5757\u5217\u8868/\u7F16\u7801\u89E3\u7801/gcharset -\u5B57\u7B26\u96C6\u8F6C\u6362","permalink":"/1.16.x/\u6A21\u5757\u5217\u8868/\u7F16\u7801\u89E3\u7801/gcharset -\u5B57\u7B26\u96C6\u8F6C\u6362","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.16.x/\u6A21\u5757\u5217\u8868/\u7F16\u7801\u89E3\u7801/gcharset -\u5B57\u7B26\u96C6\u8F6C\u6362.md","tags":[],"version":"1.16.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":11,"frontMatter":{"title":"gcharset (\u5B57\u7B26\u96C6\u8F6C\u6362)","sidebar_position":11,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"gtoml (TOML\u7F16\u89E3\u7801)","permalink":"/1.16.x/\u6A21\u5757\u5217\u8868/\u7F16\u7801\u89E3\u7801/gtoml -TOML\u7F16\u89E3\u7801"},"next":{"title":"gcompress (\u538B\u7F29/\u89E3\u538B)","permalink":"/1.16.x/\u6A21\u5757\u5217\u8868/\u7F16\u7801\u89E3\u7801/gcompress -\u538B\u7F29\u89E3\u538B"}}'),r=t("785893"),i=t("250065");let c={title:"gcharset (\u5B57\u7B26\u96C6\u8F6C\u6362)",sidebar_position:11,hide_title:!0},o=void 0,l={},d=[];function a(e){let n={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u5F3A\u5927\u7684\u5B57\u7B26\u7F16\u7801\u8F6C\u6362\u6A21\u5757\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u652F\u6301\u7684\u5B57\u7B26\u96C6:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u4E2D\u6587 : ",(0,r.jsx)(n.code,{children:"GBK/GB18030/GB2312/Big5"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u65E5\u6587 : ",(0,r.jsx)(n.code,{children:"EUCJP/ISO2022JP/ShiftJIS"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u97E9\u6587 : ",(0,r.jsx)(n.code,{children:"EUCKR"})]}),"\n",(0,r.jsxs)(n.li,{children:["Unicode : ",(0,r.jsx)(n.code,{children:"UTF-8/UTF-16/UTF-16BE/UTF-16LE"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u5176\u4ED6\u7F16\u7801 : ",(0,r.jsx)(n.code,{children:"macintosh/IBM*/Windows*/ISO-*"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u4F7F\u7528\u65B9\u5F0F"}),"\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'import "github.com/gogf/gf/encoding/gcharset"\n\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u63A5\u53E3\u6587\u6863"}),"\uFF1A"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://godoc.org/github.com/gogf/gf/encoding/gcharset",children:"https://godoc.org/github.com/gogf/gf/encoding/gcharset"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u4F7F\u7528\u793A\u4F8B"}),"\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/encoding/gcharset"\n)\n\nfunc main() {\n    src        := "~{;(<dR;:x>F#,6@WCN^O`GW!#"\n    srcCharset := "GB2312"\n    dstCharset := "UTF-8"\n    str, err := gcharset.Convert(dstCharset, srcCharset, src)\n    if err != nil {\n        panic(err)\n    }\n    fmt.Println(str)\n}\n\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884C\u540E\uFF0C\u7EC8\u7AEF\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"\u82B1\u95F4\u4E00\u58F6\u9152\uFF0C\u72EC\u914C\u65E0\u76F8\u4EB2\u3002\n\n"})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return c}});var s=t(667294);let r={},i=s.createContext(r);function c(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);