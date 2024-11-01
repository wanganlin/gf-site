"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[19137],{63276:(n,e,c)=>{c.r(e),c.d(e,{assets:()=>t,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>g});var o=c(74848),r=c(28453);const i={title:"\u5185\u5b58\u9501-gmlock",sidebar_position:1,hide_title:!0},s=void 0,l={id:"\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u5185\u5b58\u9501-gmlock",title:"\u5185\u5b58\u9501-gmlock",description:"\u5185\u5b58\u9501\u6a21\u5757\uff0c\u4e5f\u79f0\u4e4b\u4e3a \u52a8\u6001\u4e92\u65a5\u9501 \u6a21\u5757\uff0c\u652f\u6301\u6309\u7167 \u7ed9\u5b9a\u952e\u540d\u52a8\u6001\u751f\u6210\u4e92\u65a5\u9501\uff0c\u5e76\u53d1\u5b89\u5168\u5e76\u652f\u6301 Try*Lock \u7279\u6027\u3002",source:"@site/versioned_docs/version-2.6.x/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u5185\u5b58\u9501-gmlock.md",sourceDirName:"\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173",slug:"/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u5185\u5b58\u9501-gmlock",permalink:"/docs/2.6.x/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u5185\u5b58\u9501-gmlock",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.6.x/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u5185\u5b58\u9501-gmlock.md",tags:[],version:"2.6.x",lastUpdatedBy:"John",lastUpdatedAt:173036553e4,sidebarPosition:1,frontMatter:{title:"\u5185\u5b58\u9501-gmlock",sidebar_position:1,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"\u5b9a\u65f6\u5668-\u6027\u80fd\u6d4b\u8bd5",permalink:"/docs/2.6.x/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u5b9a\u65f6\u5668-gtimer/\u5b9a\u65f6\u5668-\u6027\u80fd\u6d4b\u8bd5"},next:{title:"\u4e92\u65a5\u9501-gmutex",permalink:"/docs/2.6.x/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u4e92\u65a5\u9501-gmutex"}},t={},g=[{value:"\u793a\u4f8b1\uff0c\u57fa\u672c\u4f7f\u7528",id:"\u793a\u4f8b1\u57fa\u672c\u4f7f\u7528",level:3},{value:"\u793a\u4f8b2\uff0cTryLock\u975e\u963b\u585e\u9501",id:"\u793a\u4f8b2trylock\u975e\u963b\u585e\u9501",level:3}];function d(n){const e={a:"a",blockquote:"blockquote",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["\u5185\u5b58\u9501\u6a21\u5757\uff0c\u4e5f\u79f0\u4e4b\u4e3a ",(0,o.jsx)(e.code,{children:"\u52a8\u6001\u4e92\u65a5\u9501"})," \u6a21\u5757\uff0c\u652f\u6301\u6309\u7167 ",(0,o.jsx)(e.code,{children:"\u7ed9\u5b9a\u952e\u540d\u52a8\u6001\u751f\u6210\u4e92\u65a5\u9501"}),"\uff0c\u5e76\u53d1\u5b89\u5168\u5e76\u652f\u6301 ",(0,o.jsx)(e.code,{children:"Try*Lock"})," \u7279\u6027\u3002"]}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsxs)(e.p,{children:["\u5f53\u7ef4\u62a4\u5927\u91cf\u52a8\u6001\u4e92\u65a5\u9501\u7684\u573a\u666f\u65f6\uff0c\u5982\u679c\u4e0d\u518d\u4f7f\u7528\u7684\u4e92\u65a5\u9501\u5bf9\u8c61\uff0c\u8bf7\u624b\u52a8\u8c03\u7528 ",(0,o.jsx)(e.code,{children:"Remove"})," \u65b9\u6cd5\u5220\u9664\u6389\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/os/gmlock"\n'})}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"\u4f7f\u7528\u573a\u666f"}),"\uff1a \u9700\u8981 ",(0,o.jsx)(e.code,{children:"\u52a8\u6001\u521b\u5efa\u4e92\u65a5\u9501"}),"\uff0c\u6216\u8005\u9700\u8981 ",(0,o.jsx)(e.code,{children:"\u7ef4\u62a4\u5927\u91cf\u52a8\u6001\u9501"})," \u7684\u573a\u666f\uff1b"]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/os/gmlock",children:"https://pkg.go.dev/github.com/gogf/gf/v2/os/gmlock"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:"func Lock(key string)\nfunc LockFunc(key string, f func())\nfunc RLock(key string)\nfunc RLockFunc(key string, f func())\nfunc RUnlock(key string)\nfunc Remove(key string)\nfunc TryLock(key string) bool\nfunc TryLockFunc(key string, f func()) bool\nfunc TryRLock(key string) bool\nfunc TryRLockFunc(key string, f func()) bool\nfunc Unlock(key string)\ntype Locker\n    func New() *Locker\n    func (l *Locker) Clear()\n    func (l *Locker) Lock(key string)\n    func (l *Locker) LockFunc(key string, f func())\n    func (l *Locker) RLock(key string)\n    func (l *Locker) RLockFunc(key string, f func())\n    func (l *Locker) RUnlock(key string)\n    func (l *Locker) Remove(key string)\n    func (l *Locker) TryLock(key string) bool\n    func (l *Locker) TryLockFunc(key string, f func()) bool\n    func (l *Locker) TryRLock(key string) bool\n    func (l *Locker) TryRLockFunc(key string, f func()) bool\n    func (l *Locker) Unlock(key string)\n"})}),"\n",(0,o.jsx)(e.h3,{id:"\u793a\u4f8b1\u57fa\u672c\u4f7f\u7528",children:"\u793a\u4f8b1\uff0c\u57fa\u672c\u4f7f\u7528"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "time"\n    "sync"\n    "github.com/gogf/gf/v2/os/glog"\n    "github.com/gogf/gf/v2/os/gmlock"\n)\n\nfunc main() {\n    key := "lock"\n    wg  := sync.WaitGroup{}\n    for i := 0; i < 10; i++ {\n        wg.Add(1)\n        go func(i int) {\n            gmlock.Lock(key)\n            glog.Println(i)\n            time.Sleep(time.Second)\n            gmlock.Unlock(key)\n            wg.Done()\n        }(i)\n    }\n    wg.Wait()\n}\n'})}),"\n",(0,o.jsxs)(e.p,{children:["\u8be5\u793a\u4f8b\u4e2d\uff0c\u6a21\u62df\u4e86\u540c\u65f6\u5f00\u542f ",(0,o.jsx)(e.code,{children:"10"})," \u4e2a ",(0,o.jsx)(e.code,{children:"goroutine"}),"\uff0c\u4f46\u540c\u4e00\u65f6\u523b\u53ea\u80fd\u6709\u4e00\u4e2a ",(0,o.jsx)(e.code,{children:"goroutine"})," \u83b7\u5f97\u9501\uff0c\u83b7\u5f97\u9501\u7684 ",(0,o.jsx)(e.code,{children:"goroutine"})," \u6267\u884c ",(0,o.jsx)(e.code,{children:"1"})," \u79d2\u540e\u9000\u51fa\uff0c\u5176\u4ed6 ",(0,o.jsx)(e.code,{children:"goroutine"})," \u624d\u80fd\u83b7\u5f97\u9501\u3002"]}),"\n",(0,o.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-html",children:"2018-10-15 23:57:28.295 9\n2018-10-15 23:57:29.296 0\n2018-10-15 23:57:30.296 1\n2018-10-15 23:57:31.296 2\n2018-10-15 23:57:32.296 3\n2018-10-15 23:57:33.297 4\n2018-10-15 23:57:34.297 5\n2018-10-15 23:57:35.297 6\n2018-10-15 23:57:36.298 7\n2018-10-15 23:57:37.298 8\n"})}),"\n",(0,o.jsx)(e.h3,{id:"\u793a\u4f8b2trylock\u975e\u963b\u585e\u9501",children:"\u793a\u4f8b2\uff0cTryLock\u975e\u963b\u585e\u9501"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"TryLock"})," \u65b9\u6cd5\u662f\u6709\u8fd4\u56de\u503c\u7684\uff0c\u5b83\u8868\u793a\u7528\u6765\u5c1d\u8bd5\u83b7\u53d6\u9501\uff0c\u5982\u679c\u83b7\u53d6\u6210\u529f\uff0c\u5219\u8fd4\u56de ",(0,o.jsx)(e.code,{children:"true"}),"\uff1b\u5982\u679c\u83b7\u53d6\u5931\u8d25\uff08\u5373\u4e92\u65a5\u9501\u5df2\u88ab\u5176\u4ed6 ",(0,o.jsx)(e.code,{children:"goroutine"})," \u83b7\u53d6\uff09\uff0c\u5219\u8fd4\u56de ",(0,o.jsx)(e.code,{children:"false"}),"\u3002"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "sync"\n    "github.com/gogf/gf/v2/os/glog"\n    "time"\n    "github.com/gogf/gf/v2/os/gmlock"\n)\n\nfunc main() {\n    key := "lock"\n    wg  := sync.WaitGroup{}\n    for i := 0; i < 10; i++ {\n        wg.Add(1)\n        go func(i int) {\n            if gmlock.TryLock(key) {\n                glog.Println(i)\n                time.Sleep(time.Second)\n                gmlock.Unlock(key)\n            } else {\n                glog.Println(false)\n            }\n            wg.Done()\n        }(i)\n    }\n    wg.Wait()\n}\n'})}),"\n",(0,o.jsxs)(e.p,{children:["\u540c\u7406\uff0c\u5728\u8be5\u793a\u4f8b\u4e2d\uff0c\u540c\u65f6\u4e5f\u53ea\u6709 ",(0,o.jsx)(e.code,{children:"1"})," \u4e2a ",(0,o.jsx)(e.code,{children:"goroutine"})," \u80fd\u83b7\u5f97\u9501\uff0c\u5176\u4ed6 ",(0,o.jsx)(e.code,{children:"goroutine"})," \u5728 ",(0,o.jsx)(e.code,{children:"TryLock"})," \u5931\u8d25\u4fbf\u76f4\u63a5\u9000\u51fa\u4e86\u3002"]}),"\n",(0,o.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-html",children:"2018-10-16 00:01:59.172 9\n2018-10-16 00:01:59.172 false\n2018-10-16 00:01:59.172 false\n2018-10-16 00:01:59.172 false\n2018-10-16 00:01:59.172 false\n2018-10-16 00:01:59.172 false\n2018-10-16 00:01:59.172 false\n2018-10-16 00:01:59.172 false\n2018-10-16 00:01:59.172 false\n2018-10-16 00:01:59.176 false\n"})})]})}function k(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},28453:(n,e,c)=>{c.d(e,{R:()=>s,x:()=>l});var o=c(96540);const r={},i=o.createContext(r);function s(n){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),o.createElement(i.Provider,{value:e},n.children)}}}]);