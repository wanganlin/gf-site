"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[73320],{35873:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>d,metadata:()=>o,toc:()=>a});var s=i(74848),n=i(28453);const d={title:"Redis-\u63a5\u53e3\u5316\u8bbe\u8ba1",sidebar_position:4,hide_title:!0},r=void 0,o={id:"\u6838\u5fc3\u7ec4\u4ef6/NoSQL Redis/Redis-\u63a5\u53e3\u5316\u8bbe\u8ba1",title:"Redis-\u63a5\u53e3\u5316\u8bbe\u8ba1",description:"gredis \u91c7\u7528\u63a5\u53e3\u5316\u8bbe\u8ba1\uff0c\u5177\u6709\u5f3a\u5927\u7684\u7075\u6d3b\u6027\u548c\u6269\u5c55\u6027\u3002",source:"@site/versioned_docs/version-2.6.x/2-\u6838\u5fc3\u7ec4\u4ef6/11-NoSQL Redis/4-Redis-\u63a5\u53e3\u5316\u8bbe\u8ba1.md",sourceDirName:"2-\u6838\u5fc3\u7ec4\u4ef6/11-NoSQL Redis",slug:"/\u6838\u5fc3\u7ec4\u4ef6/NoSQL Redis/Redis-\u63a5\u53e3\u5316\u8bbe\u8ba1",permalink:"/gf-site/en/docs/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/NoSQL Redis/Redis-\u63a5\u53e3\u5316\u8bbe\u8ba1",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.6.x/2-\u6838\u5fc3\u7ec4\u4ef6/11-NoSQL Redis/4-Redis-\u63a5\u53e3\u5316\u8bbe\u8ba1.md",tags:[],version:"2.6.x",lastUpdatedBy:"John",lastUpdatedAt:1730208097e3,sidebarPosition:4,frontMatter:{title:"Redis-\u63a5\u53e3\u5316\u8bbe\u8ba1",sidebar_position:4,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Redis-Conn\u5bf9\u8c61",permalink:"/gf-site/en/docs/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/NoSQL Redis/Redis-Conn\u5bf9\u8c61"},next:{title:"I18N\u56fd\u9645\u5316",permalink:"/gf-site/en/docs/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/I18N\u56fd\u9645\u5316/"}},c={},a=[{value:"\u63a5\u53e3\u5b9a\u4e49",id:"\u63a5\u53e3\u5b9a\u4e49",level:2},{value:"\u76f8\u5173\u65b9\u6cd5",id:"\u76f8\u5173\u65b9\u6cd5",level:2},{value:"\u66f4\u8fdb\u4e00\u6b65",id:"\u66f4\u8fdb\u4e00\u6b65",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"gredis"})," \u91c7\u7528\u63a5\u53e3\u5316\u8bbe\u8ba1\uff0c\u5177\u6709\u5f3a\u5927\u7684\u7075\u6d3b\u6027\u548c\u6269\u5c55\u6027\u3002"]}),"\n",(0,s.jsx)(t.h2,{id:"\u63a5\u53e3\u5b9a\u4e49",children:"\u63a5\u53e3\u5b9a\u4e49"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gredis#Adapter",children:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gredis#Adapter"})}),"\n",(0,s.jsx)(t.h2,{id:"\u76f8\u5173\u65b9\u6cd5",children:"\u76f8\u5173\u65b9\u6cd5"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"// SetAdapter sets custom adapter for current redis client.\nfunc (r *Redis) SetAdapter(adapter Adapter)\n\n// GetAdapter returns the adapter that is set in current redis client.\nfunc (r *Redis) GetAdapter() Adapter\n"})}),"\n",(0,s.jsx)(t.h2,{id:"\u66f4\u8fdb\u4e00\u6b65",children:"\u66f4\u8fdb\u4e00\u6b65"}),"\n",(0,s.jsxs)(t.p,{children:["\u7531\u4e8e ",(0,s.jsx)(t.code,{children:"gredis"})," \u7ec4\u4ef6\u7684\u63a5\u53e3\u5b9e\u73b0\u662f\u9ad8\u9636\u529f\u80fd\uff0c\u4e00\u822c\u6765\u8bf4\u5f00\u53d1\u8005\u4e5f\u65e0\u9700\u66ff\u6362 ",(0,s.jsx)(t.code,{children:"Redis"})," \u63a5\u53e3\u5b9e\u73b0\u3002\u611f\u5174\u8da3\u7684\u670b\u53cb\u53ef\u4ee5\u81ea\u884c\u7814\u7a76\u3002"]})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>o});var s=i(96540);const n={},d=s.createContext(n);function r(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);