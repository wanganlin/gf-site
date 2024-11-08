"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[90670],{714808:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u5b9a\u65f6\u4efb\u52a1-gcron/\u5b9a\u65f6\u4efb\u52a1-gcron\u4e0egtimer","title":"\u5b9a\u65f6\u4efb\u52a1-gcron\u4e0egtimer","description":"\u672c\u6587\u6863\u4ecb\u7ecd\u4e86GoFrame\u6846\u67b6\u4e2d\u5b9a\u65f6\u4efb\u52a1\u6a21\u5757gcron\u4e0e\u5b9a\u65f6\u5668\u6a21\u5757gtimer\u7684\u533a\u522b\u3002gtimer\u662f\u9ad8\u6027\u80fd\u6a21\u5757\uff0c\u9002\u7528\u4e8e\u5404\u79cd\u5b9a\u65f6\u4efb\u52a1\u573a\u666f\uff0c\u5305\u62ecTCP\u901a\u4fe1\u548c\u6e38\u620f\u5f00\u53d1\u3002gcron\u652f\u6301crontab\u8bed\u6cd5\uff0c\u57fa\u4e8egtimer\u5b9e\u73b0\uff0c\u4e3a\u7528\u6237\u63d0\u4f9b\u4e86\u4fbf\u6377\u7684\u5b9a\u65f6\u4efb\u52a1\u7ba1\u7406\u65b9\u5f0f\u3002","source":"@site/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u5b9a\u65f6\u4efb\u52a1-gcron/\u5b9a\u65f6\u4efb\u52a1-gcron\u4e0egtimer.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u5b9a\u65f6\u4efb\u52a1-gcron","slug":"/docs/components/os-gcron-differ-with-gtimer","permalink":"/en/docs/components/os-gcron-differ-with-gtimer","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u5b9a\u65f6\u4efb\u52a1-gcron/\u5b9a\u65f6\u4efb\u52a1-gcron\u4e0egtimer.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731055597000,"sidebarPosition":3,"frontMatter":{"slug":"/docs/components/os-gcron-differ-with-gtimer","title":"\u5b9a\u65f6\u4efb\u52a1-gcron\u4e0egtimer","sidebar_position":3,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","\u5b9a\u65f6\u4efb\u52a1","gcron","gtimer","\u6027\u80fd\u6a21\u5757","crontab","\u65f6\u95f4\u95f4\u9694","TCP\u901a\u4fe1","\u6e38\u620f\u5f00\u53d1"],"description":"\u672c\u6587\u6863\u4ecb\u7ecd\u4e86GoFrame\u6846\u67b6\u4e2d\u5b9a\u65f6\u4efb\u52a1\u6a21\u5757gcron\u4e0e\u5b9a\u65f6\u5668\u6a21\u5757gtimer\u7684\u533a\u522b\u3002gtimer\u662f\u9ad8\u6027\u80fd\u6a21\u5757\uff0c\u9002\u7528\u4e8e\u5404\u79cd\u5b9a\u65f6\u4efb\u52a1\u573a\u666f\uff0c\u5305\u62ecTCP\u901a\u4fe1\u548c\u6e38\u620f\u5f00\u53d1\u3002gcron\u652f\u6301crontab\u8bed\u6cd5\uff0c\u57fa\u4e8egtimer\u5b9e\u73b0\uff0c\u4e3a\u7528\u6237\u63d0\u4f9b\u4e86\u4fbf\u6377\u7684\u5b9a\u65f6\u4efb\u52a1\u7ba1\u7406\u65b9\u5f0f\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u5b9a\u65f6\u4efb\u52a1-\u65e5\u5fd7\u7ba1\u7406","permalink":"/en/docs/components/os-gcron-logging"},"next":{"title":"\u7f13\u5b58\u7ba1\u7406-gcache","permalink":"/en/docs/components/os-gcache"}}');var o=n(474848),c=n(28453);const s={slug:"/docs/components/os-gcron-differ-with-gtimer",title:"\u5b9a\u65f6\u4efb\u52a1-gcron\u4e0egtimer",sidebar_position:3,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","\u5b9a\u65f6\u4efb\u52a1","gcron","gtimer","\u6027\u80fd\u6a21\u5757","crontab","\u65f6\u95f4\u95f4\u9694","TCP\u901a\u4fe1","\u6e38\u620f\u5f00\u53d1"],description:"\u672c\u6587\u6863\u4ecb\u7ecd\u4e86GoFrame\u6846\u67b6\u4e2d\u5b9a\u65f6\u4efb\u52a1\u6a21\u5757gcron\u4e0e\u5b9a\u65f6\u5668\u6a21\u5757gtimer\u7684\u533a\u522b\u3002gtimer\u662f\u9ad8\u6027\u80fd\u6a21\u5757\uff0c\u9002\u7528\u4e8e\u5404\u79cd\u5b9a\u65f6\u4efb\u52a1\u573a\u666f\uff0c\u5305\u62ecTCP\u901a\u4fe1\u548c\u6e38\u620f\u5f00\u53d1\u3002gcron\u652f\u6301crontab\u8bed\u6cd5\uff0c\u57fa\u4e8egtimer\u5b9e\u73b0\uff0c\u4e3a\u7528\u6237\u63d0\u4f9b\u4e86\u4fbf\u6377\u7684\u5b9a\u65f6\u4efb\u52a1\u7ba1\u7406\u65b9\u5f0f\u3002"},i=void 0,d={},l=[{value:"<code>gcron</code> \u4e0e <code>gtimer</code> \u533a\u522b",id:"gcron-\u4e0e-gtimer-\u533a\u522b",level:2}];function g(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.h2,{id:"gcron-\u4e0e-gtimer-\u533a\u522b",children:[(0,o.jsx)(r.code,{children:"gcron"})," \u4e0e ",(0,o.jsx)(r.code,{children:"gtimer"})," \u533a\u522b"]}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/en/docs/components/os-gcron",children:"\u5b9a\u65f6\u4efb\u52a1-gcron"})," \u4e0e ",(0,o.jsx)(r.a,{href:"/en/docs/components/os-gtimer",children:"\u5b9a\u65f6\u5668-gtimer"})," \u533a\u522b:"]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"gtimer"})," \u5c5e\u4e8e\u9ad8\u6027\u80fd\u6a21\u5757\uff0c\u662f\u6846\u67b6\u6838\u5fc3\u6a21\u5757\uff0c\u6784\u5efa\u4efb\u4f55\u5b9a\u65f6\u4efb\u52a1\u7684\u57fa\u7840\uff0c\u4efb\u4f55\u65b9\u6cd5\u64cd\u4f5c\u8017\u65f6\u5747\u5728 ",(0,o.jsx)(r.code,{children:"\u7eb3\u79d2"})," \u7ea7\u522b\u3002"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"gtimer"})," \u53ef\u9002\u7528\u4e8e\u4efb\u4f55\u7684\u5b9a\u65f6\u4efb\u52a1\u573a\u666f\u4e2d\uff0c\u4f8b\u5982: TCP\u901a\u4fe1\u3001\u6e38\u620f\u5f00\u53d1\u7b49\u573a\u666f\u3002"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"gcron"})," \u652f\u6301\u7ecf\u5178\u7684 ",(0,o.jsx)(r.code,{children:"crontab"})," \u5f62\u5f0f\u7684\u5b9a\u65f6\u4efb\u52a1\u8bed\u6cd5\uff0c\u6700\u5c0f\u65f6\u95f4\u8bbe\u5b9a\u95f4\u9694\u4e3a ",(0,o.jsx)(r.code,{children:"\u79d2"}),"\u3002"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"gcron"})," \u5e95\u5c42\u5b9e\u73b0\u57fa\u4e8e ",(0,o.jsx)(r.code,{children:"gtimer"}),"\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"\u76f8\u4f3c\u6a21\u5757"}),(0,o.jsx)(r.th,{children:"\u8bf4\u660e"}),(0,o.jsx)(r.th,{children:"\u6027\u80fd"}),(0,o.jsx)(r.th,{children:"\u7c7bLinux Crontab\u6a21\u5f0f"}),(0,o.jsx)(r.th,{children:"\u5e95\u5c42\u5b9e\u73b0"})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:(0,o.jsx)(r.a,{href:"/en/docs/components/os-gcron",children:"\u5b9a\u65f6\u4efb\u52a1-gcron"})}),(0,o.jsxs)(r.td,{children:["\u5b9a\u65f6\u4efb\u52a1\u3002",(0,o.jsx)("br",{}),"\u8f83\u4e0a\u5c42\u5c01\u88c5\uff0c\u65f6\u95f4\u523b\u5ea6\u4ee5\u81ea\u7136\u79d2\u4e3a\u5355\u4f4d\u3002"]}),(0,o.jsx)(r.td,{children:"\u4e00\u822c"}),(0,o.jsx)(r.td,{children:"\u652f\u6301"}),(0,o.jsxs)(r.td,{children:["\u57fa\u4e8e ",(0,o.jsx)(r.code,{children:"gtimer"})]})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:(0,o.jsx)(r.a,{href:"/en/docs/components/os-gtimer",children:"\u5b9a\u65f6\u5668-gtimer"})}),(0,o.jsxs)(r.td,{children:["\u5b9a\u65f6\u5668\u3002",(0,o.jsx)("br",{}),"\u5e95\u5c42\u7ec4\u4ef6\uff0c\u65f6\u95f4\u523b\u5ea6\u4ee5\u65f6\u95f4\u69fd\u4e3a\u5355\u4f4d\uff08\u65f6\u95f4\u69fd\u53ef\u81ea\u5b9a\u4e49\uff09\u3002"]}),(0,o.jsx)(r.td,{children:"\u9ad8\u6548"}),(0,o.jsx)(r.td,{children:"\u4e0d\u652f\u6301"}),(0,o.jsxs)(r.td,{children:["\u57fa\u4e8e ",(0,o.jsx)(r.code,{children:"PriorityQueue"})," \u6570\u636e\u7ed3\u6784\u81ea\u5b9e\u73b0"]})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>i});var t=n(296540);const o={},c=t.createContext(o);function s(e){const r=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(c.Provider,{value:r},e.children)}}}]);