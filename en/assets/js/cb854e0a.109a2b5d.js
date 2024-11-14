"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["93733"],{815784:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>c,default:()=>u,assets:()=>d,toc:()=>a,frontMatter:()=>r});var i=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u7F13\u5B58\u7BA1\u7406/\u7F13\u5B58\u7BA1\u7406-Redis\u7F13\u5B58","title":"\u7F13\u5B58\u7BA1\u7406-Redis\u7F13\u5B58","description":"GF \u6846\u67B6\u901A\u8FC7\u793E\u533A\u6A21\u5757\u63D0\u4F9B\u4E86 gcache \u7684 Redis \u7F13\u5B58\u9002\u914D\u5B9E\u73B0\uFF0C\u4ED3\u5E93\u5730\u5740\uFF1A https://github.com/gogf/gcache-adapter \u4F7F\u7528\u65B9\u5F0F\u8BF7\u53C2\u8003\u4ED3\u5E93 README \u4ECB\u7ECD\u3002","source":"@site/versioned_docs/version-1.16.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u7F13\u5B58\u7BA1\u7406/\u7F13\u5B58\u7BA1\u7406-Redis\u7F13\u5B58.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u7F13\u5B58\u7BA1\u7406","slug":"/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u7F13\u5B58\u7BA1\u7406/\u7F13\u5B58\u7BA1\u7406-Redis\u7F13\u5B58","permalink":"/en/1.16.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u7F13\u5B58\u7BA1\u7406/\u7F13\u5B58\u7BA1\u7406-Redis\u7F13\u5B58","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.16.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u7F13\u5B58\u7BA1\u7406/\u7F13\u5B58\u7BA1\u7406-Redis\u7F13\u5B58.md","tags":[],"version":"1.16.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":2,"frontMatter":{"title":"\u7F13\u5B58\u7BA1\u7406-Redis\u7F13\u5B58","sidebar_position":2,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u7F13\u5B58\u7BA1\u7406-\u7F13\u5B58\u9002\u914D","permalink":"/en/1.16.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u7F13\u5B58\u7BA1\u7406/\u7F13\u5B58\u7BA1\u7406-\u7F13\u5B58\u9002\u914D"},"next":{"title":"\u6A21\u677F\u5F15\u64CE","permalink":"/en/1.16.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6A21\u677F\u5F15\u64CE/"}}'),s=n("785893"),o=n("250065");let r={title:"\u7F13\u5B58\u7BA1\u7406-Redis\u7F13\u5B58",sidebar_position:2,hide_title:!0},c=void 0,d={},a=[];function l(e){let t={a:"a",code:"code",p:"p",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"GF"})," \u6846\u67B6\u901A\u8FC7\u793E\u533A\u6A21\u5757\u63D0\u4F9B\u4E86 ",(0,s.jsx)(t.code,{children:"gcache"})," \u7684 ",(0,s.jsx)(t.code,{children:"Redis"})," \u7F13\u5B58\u9002\u914D\u5B9E\u73B0\uFF0C\u4ED3\u5E93\u5730\u5740\uFF1A ",(0,s.jsx)(t.a,{href:"https://github.com/gogf/gcache-adapter",children:"https://github.com/gogf/gcache-adapter"})," \u4F7F\u7528\u65B9\u5F0F\u8BF7\u53C2\u8003\u4ED3\u5E93 ",(0,s.jsx)(t.code,{children:"README"})," \u4ECB\u7ECD\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"Redis"})," \u7F13\u5B58\u5728\u591A\u8282\u70B9\u4FDD\u8BC1\u7F13\u5B58\u7684\u6570\u636E\u4E00\u81F4\u6027\u65F6\u975E\u5E38\u6709\u7528\uFF0C\u7279\u522B\u662F ",(0,s.jsx)(t.code,{children:"Session"})," \u5171\u4EAB, \u6570\u636E\u5E93\u67E5\u8BE2\u7F13\u5B58\u7B49\u573A\u666F\u4E2D\u3002\u5176\u4E2D\uFF0C\u6570\u636E\u5E93ORM\u4E5F\u5185\u7F6E\u652F\u6301\u4E86\u7F13\u5B58\u9002\u914D\u529F\u80FD\uFF0C\u5177\u4F53\u793A\u4F8B\u8BF7\u53C2\u8003\uFF1A ",(0,s.jsx)(t.a,{href:"/en/1.16.x/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6-%E9%87%8D%E7%82%B9/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E9%87%8D%E7%82%B9/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E6%9F%A5%E8%AF%A2%E7%BC%93%E5%AD%98",children:"ORM\u94FE\u5F0F\u64CD\u4F5C-\u67E5\u8BE2\u7F13\u5B58"})," \u7AE0\u8282\u3002"]})]})}function u(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return r}});var i=n(667294);let s={},o=i.createContext(s);function r(e){let t=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);