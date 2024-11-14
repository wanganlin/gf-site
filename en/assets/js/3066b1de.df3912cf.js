"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["97463"],{263596:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>c,default:()=>x,assets:()=>l,toc:()=>o,frontMatter:()=>t});var i=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis/NoSQL Redis","title":"NoSQL Redis","description":"\u57FA\u672C\u4ECB\u7ECD","source":"@site/versioned_docs/version-2.3.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis/NoSQL Redis.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis","slug":"/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis/","permalink":"/en/2.3.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis/","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.3.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis/NoSQL Redis.md","tags":[],"version":"2.3.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":11,"frontMatter":{"title":"NoSQL Redis","sidebar_position":11,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"ORM\u9AD8\u7EA7\u7279\u6027-\u81EA\u5B9A\u4E49\u7C7B\u578B\u8F6C\u6362","permalink":"/en/2.3.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027/ORM\u9AD8\u7EA7\u7279\u6027-\u81EA\u5B9A\u4E49\u7C7B\u578B\u8F6C\u6362"},"next":{"title":"Redis-\u914D\u7F6E\u7BA1\u7406","permalink":"/en/2.3.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis/Redis-\u914D\u7F6E\u7BA1\u7406"}}'),d=s("785893"),r=s("250065");let t={title:"NoSQL Redis",sidebar_position:11,hide_title:!0},c=void 0,l={},o=[{value:"\u57FA\u672C\u4ECB\u7ECD",id:"\u57FA\u672C\u4ECB\u7ECD",level:2},{value:"\u7EC4\u4EF6\u7279\u6027",id:"\u7EC4\u4EF6\u7279\u6027",level:2}];function h(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h2,{id:"\u57FA\u672C\u4ECB\u7ECD",children:"\u57FA\u672C\u4ECB\u7ECD"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"Redis"})," \u5BA2\u6237\u7AEF\u7531 ",(0,d.jsx)(n.code,{children:"gredis"})," \u7EC4\u4EF6\u5B9E\u73B0\uFF0C\u5E95\u5C42\u91C7\u7528\u4E86\u94FE\u63A5\u6C60\u8BBE\u8BA1\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u4E3A\u4E86\u4FDD\u8BC1\u901A\u7528\u6027\u548C\u6269\u5C55\u6027\uFF0C ",(0,d.jsx)(n.code,{children:"gredis"})," \u7EC4\u4EF6\u91C7\u7528\u4E86 ",(0,d.jsx)(n.strong,{children:"\u547D\u4EE4\u901A\u9053"})," \u7684\u65B9\u5F0F\u6267\u884C ",(0,d.jsx)(n.code,{children:"Redis"})," \u64CD\u4F5C\u3002\u5F53\u60A8\u4E0D\u77E5\u9053\u547D\u4EE4\u901A\u9053\u7684\u53C2\u6570\u5982\u4F55\u4F20\u9012\u65F6\uFF0C\u53EF\u4EE5\u53C2\u8003\u7EC8\u7AEF\u547D\u4EE4\u884C\u7684\u53C2\u6570\u4F20\u9012\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u6240\u6709\u7684\u64CD\u4F5C\u90FD\u548C\u547D\u4EE4\u884C\u7684\u53C2\u6570\u4F20\u9012\u4FDD\u6301\u4E00\u81F4\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u4F7F\u7528\u65B9\u5F0F"}),"\uFF1A"]}),"\n",(0,d.jsx)(n.p,{children:"\u5B89\u88C5\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"go get -u github.com/gogf/gf/contrib/nosql/redis/v2\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u5F15\u7528\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'import (\n    _ "github.com/gogf/gf/contrib/nosql/redis/v2"\n\n    // other imported packages.\n)\n'})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u63A5\u53E3\u6587\u6863"}),"\uFF1A"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gredis",children:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gredis"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://github.com/gogf/gf/tree/master/contrib/nosql/redis",children:"https://github.com/gogf/gf/tree/master/contrib/nosql/redis"})}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u7B80\u8981\u4ECB\u7ECD\uFF1A"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"gredis"})," \u4F7F\u7528\u4E86\u8FDE\u63A5\u6C60\u6765\u8FDB\u884C ",(0,d.jsx)(n.code,{children:"Redis"})," \u8FDE\u63A5\u7BA1\u7406\uFF0C\u901A\u8FC7 ",(0,d.jsx)(n.code,{children:"Config"})," \u914D\u7F6E\u5BF9\u8C61\u6216\u8005 ",(0,d.jsx)(n.code,{children:"Set*"})," \u65B9\u6CD5\u53EF\u4EE5\u5BF9\u8FDE\u63A5\u6C60\u7684\u5C5E\u6027\u8FDB\u884C\u7BA1\u7406\uFF0C\u901A\u8FC7 ",(0,d.jsx)(n.code,{children:"Stats"})," \u65B9\u6CD5\u53EF\u4EE5\u83B7\u53D6\u8FDE\u63A5\u6C60\u7684\u7EDF\u8BA1\u4FE1\u606F\u3002 ",(0,d.jsx)(n.code,{children:"gredis"})," \u4F7F\u7528\u63A5\u53E3\u5316\u7684\u8BBE\u8BA1\u6765\u89E3\u8026\u5BF9 ",(0,d.jsx)(n.code,{children:"redis"})," \u7684\u5E95\u5C42\u4F9D\u8D56\uFF0C\u901A\u8FC7\u793E\u533A\u7EC4\u4EF6\u7684\u65B9\u5F0F\u5B9E\u73B0\u4E86 ",(0,d.jsx)(n.code,{children:"100+"})," \u9879\u5E38\u7528\u65B9\u6CD5\uFF0C\u5E76\u4E14\u63D0\u4F9B\u4E86\u5206\u7EC4\u7684\u65B9\u5F0F\u6765\u7BA1\u7406\u63A5\u53E3\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"gredis.Redis"})," \u5BA2\u6237\u7AEF\u5BF9\u8C61\u63D0\u4F9B\u4E86\u4E00\u4E2A ",(0,d.jsx)(n.code,{children:"Close"})," \u65B9\u6CD5\uFF0C\u8BE5\u65B9\u6CD5\u7528\u4E8E\u5173\u95ED ",(0,d.jsx)(n.code,{children:"Redis"})," \u5BA2\u6237\u7AEF\uFF08\u540C\u65F6\u5173\u95ED\u5BA2\u6237\u7AEF\u7684\u8FDE\u63A5\u6C60\uFF09\uFF0C\u800C\u4E0D\u662F\u8FDE\u63A5\u5BF9\u8C61\uFF0C\u5F00\u53D1\u8005\u57FA\u672C\u4E0D\u4F1A\u7528\u5230\uFF0C\u975E\u9AD8\u7EA7\u73A9\u5BB6\u8BF7\u4E0D\u8981\u4F7F\u7528\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u7EC4\u4EF6\u7279\u6027",children:"\u7EC4\u4EF6\u7279\u6027"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"gredis"})," \u5177\u6709\u4EE5\u4E0B\u663E\u8457\u7279\u6027\uFF1A"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u4F7F\u7528\u7B80\u4FBF\uFF0C\u529F\u80FD\u5F3A\u5927"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u7EDF\u4E00\u914D\u7F6E\u7EC4\u4EF6\u8FDB\u884C\u914D\u7F6E"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u63D0\u4F9B ",(0,d.jsx)(n.code,{children:"100+"})," \u9879\u5E38\u7528\u65B9\u6CD5\u793E\u533A\u7EC4\u4EF6\u5B9E\u73B0"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u652F\u6301\u5355\u5B9E\u4F8B\u53CA\u96C6\u7FA4\u5316\u64CD\u4F5C"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u652F\u6301 ",(0,d.jsx)(n.code,{children:"Redis"})," \u670D\u52A1\u6240\u6709\u7279\u6027"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u652F\u6301 ",(0,d.jsx)(n.code,{children:"OpenTelemetry"})," \u53EF\u89C2\u6D4B\u6027"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u652F\u6301\u5355\u4F8B\u5BF9\u8C61\u3001\u4E5F\u652F\u6301\u52A8\u6001\u521B\u5EFA\u5BF9\u8C61"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u63A5\u53E3\u5316\u8BBE\u8BA1\uFF0C\u5F88\u9AD8\u7684\u7075\u6D3B\u6027\u548C\u6269\u5C55\u6027"}),"\n"]}),"\n"]})]})}function x(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return t}});var i=s(667294);let d={},r=i.createContext(d);function t(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);