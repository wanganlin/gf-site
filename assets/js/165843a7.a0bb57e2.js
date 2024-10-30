"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[54678],{485:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var s=n(74848),d=n(28453);const l={title:"ORM\u7ed3\u679c\u5904\u7406-\u4e3a\u7a7a\u5224\u65ad",sidebar_position:1,hide_title:!0},c=void 0,i={id:"\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u7ed3\u679c\u5904\u7406/ORM\u7ed3\u679c\u5904\u7406-\u4e3a\u7a7a\u5224\u65ad",title:"ORM\u7ed3\u679c\u5904\u7406-\u4e3a\u7a7a\u5224\u65ad",description:"\u4f7f\u7528 GoFrame ORM \u5bf9\u8fd4\u56de\u7ed3\u679c\u4e3a\u7a7a\u5224\u65ad\u975e\u5e38\u7b80\u4fbf\uff0c\u5927\u90e8\u5206\u573a\u666f\u4e0b\u76f4\u63a5\u5224\u65ad\u8fd4\u56de\u7684\u6570\u636e\u662f\u5426\u4e3a nil \u6216\u8005\u957f\u5ea6\u4e3a 0\uff0c\u6216\u8005\u4f7f\u7528 IsEmpty/IsNil \u65b9\u6cd5\u3002",source:"@site/versioned_docs/version-2.6.x/2-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/4-ORM\u7ed3\u679c\u5904\u7406/1-ORM\u7ed3\u679c\u5904\u7406-\u4e3a\u7a7a\u5224\u65ad.md",sourceDirName:"2-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/4-ORM\u7ed3\u679c\u5904\u7406",slug:"/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u7ed3\u679c\u5904\u7406/ORM\u7ed3\u679c\u5904\u7406-\u4e3a\u7a7a\u5224\u65ad",permalink:"/gf-site/docs/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u7ed3\u679c\u5904\u7406/ORM\u7ed3\u679c\u5904\u7406-\u4e3a\u7a7a\u5224\u65ad",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.6.x/2-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/4-ORM\u7ed3\u679c\u5904\u7406/1-ORM\u7ed3\u679c\u5904\u7406-\u4e3a\u7a7a\u5224\u65ad.md",tags:[],version:"2.6.x",lastUpdatedBy:"John",lastUpdatedAt:173028244e4,sidebarPosition:1,frontMatter:{title:"ORM\u7ed3\u679c\u5904\u7406-\u4e3a\u7a7a\u5224\u65ad",sidebar_position:1,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"ORM\u7ed3\u679c\u5904\u7406-\u7ed3\u679c\u7c7b\u578b",permalink:"/gf-site/docs/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u7ed3\u679c\u5904\u7406/ORM\u7ed3\u679c\u5904\u7406-\u7ed3\u679c\u7c7b\u578b"},next:{title:"ORM\u7ed3\u679c\u5904\u7406-\u7a7a\u6570\u7ec4\u7ed3\u6784\u8fd4\u56de",permalink:"/gf-site/docs/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u7ed3\u679c\u5904\u7406/ORM\u7ed3\u679c\u5904\u7406-\u7a7a\u6570\u7ec4\u7ed3\u6784\u8fd4\u56de"}},t={},o=[{value:"\u4e00\u3001\u6570\u636e\u96c6\u5408\uff08\u591a\u6761\uff09",id:"\u4e00\u6570\u636e\u96c6\u5408\u591a\u6761",level:2},{value:"\u4e8c\u3001\u6570\u636e\u8bb0\u5f55\uff08\u5355\u6761\uff09",id:"\u4e8c\u6570\u636e\u8bb0\u5f55\u5355\u6761",level:2},{value:"\u4e09\u3001\u6570\u636e\u5b57\u6bb5\u503c",id:"\u4e09\u6570\u636e\u5b57\u6bb5\u503c",level:2},{value:"\u56db\u3001\u5b57\u6bb5\u503c\u6570\u7ec4",id:"\u56db\u5b57\u6bb5\u503c\u6570\u7ec4",level:2},{value:"\u4e94\u3001 <code>Struct</code> \u5bf9\u8c61\uff08\ud83d\udd25\u6ce8\u610f\ud83d\udd25\uff09",id:"\u4e94-struct-\u5bf9\u8c61\u6ce8\u610f",level:2},{value:"\u516d\u3001 <code>Struct</code> \u6570\u7ec4",id:"\u516d-struct-\u6570\u7ec4",level:2}];function a(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(r.code,{children:"GoFrame ORM"})," \u5bf9\u8fd4\u56de\u7ed3\u679c\u4e3a\u7a7a\u5224\u65ad\u975e\u5e38\u7b80\u4fbf\uff0c\u5927\u90e8\u5206\u573a\u666f\u4e0b\u76f4\u63a5\u5224\u65ad\u8fd4\u56de\u7684\u6570\u636e\u662f\u5426\u4e3a ",(0,s.jsx)(r.code,{children:"nil"})," \u6216\u8005\u957f\u5ea6\u4e3a ",(0,s.jsx)(r.code,{children:"0"}),"\uff0c\u6216\u8005\u4f7f\u7528 ",(0,s.jsx)(r.code,{children:"IsEmpty/IsNil"})," \u65b9\u6cd5\u3002"]}),"\n",(0,s.jsx)(r.h2,{id:"\u4e00\u6570\u636e\u96c6\u5408\u591a\u6761",children:"\u4e00\u3001\u6570\u636e\u96c6\u5408\uff08\u591a\u6761\uff09"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-go",children:'r, err := g.Model("order").Where("status", 1).All()\nif err != nil {\n    return err\n}\nif len(r) == 0 {\n    // \u7ed3\u679c\u4e3a\u7a7a\n}\n'})}),"\n",(0,s.jsxs)(r.p,{children:["\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(r.code,{children:"IsEmpty"})," \u65b9\u6cd5\uff1a"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-go",children:'r, err := g.Model("order").Where("status", 1).All()\nif err != nil {\n    return err\n}\nif r.IsEmpty() {\n    // \u7ed3\u679c\u4e3a\u7a7a\n}\n'})}),"\n",(0,s.jsx)(r.h2,{id:"\u4e8c\u6570\u636e\u8bb0\u5f55\u5355\u6761",children:"\u4e8c\u3001\u6570\u636e\u8bb0\u5f55\uff08\u5355\u6761\uff09"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-go",children:'r, err := g.Model("order").Where("status", 1).One()\nif err != nil {\n    return err\n}\nif len(r) == 0 {\n    // \u7ed3\u679c\u4e3a\u7a7a\n}\n'})}),"\n",(0,s.jsxs)(r.p,{children:["\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(r.code,{children:"IsEmpty"})," \u65b9\u6cd5\uff1a"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-go",children:'r, err := g.Model("order").Where("status", 1).One()\nif err != nil {\n    return err\n}\nif r.IsEmpty() {\n    // \u7ed3\u679c\u4e3a\u7a7a\n}\n'})}),"\n",(0,s.jsx)(r.h2,{id:"\u4e09\u6570\u636e\u5b57\u6bb5\u503c",children:"\u4e09\u3001\u6570\u636e\u5b57\u6bb5\u503c"}),"\n",(0,s.jsxs)(r.p,{children:['\u8fd4\u56de\u7684\u662f\u4e00\u4e2a"\u6cdb\u578b"\u53d8\u91cf\uff0c\u8fd9\u4e2a\u53ea\u80fd\u4f7f\u7528 ',(0,s.jsx)(r.code,{children:"IsEmpty"})," \u6765\u5224\u65ad\u662f\u5426\u4e3a\u7a7a\u4e86\u3002"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-go",children:'r, err := g.Model("order").Where("status", 1).Value()\nif err != nil {\n    return err\n}\nif r.IsEmpty() {\n    // \u7ed3\u679c\u4e3a\u7a7a\n}\n'})}),"\n",(0,s.jsx)(r.h2,{id:"\u56db\u5b57\u6bb5\u503c\u6570\u7ec4",children:"\u56db\u3001\u5b57\u6bb5\u503c\u6570\u7ec4"}),"\n",(0,s.jsxs)(r.p,{children:["\u67e5\u8be2\u8fd4\u56de\u5b57\u6bb5\u503c\u6570\u7ec4\u672c\u8eab\u7c7b\u578b\u4e3a ",(0,s.jsx)(r.code,{children:"[]gdb.Value"})," \u7c7b\u578b\uff0c\u56e0\u6b64\u76f4\u63a5\u5224\u65ad\u957f\u5ea6\u662f\u5426\u4e3a ",(0,s.jsx)(r.code,{children:"0"})," \u5373\u53ef\u3002"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-go",children:'// Array/FindArray\nr, err := g.Model("order").Fields("id").Where("status", 1).Array()\nif err != nil {\n    return err\n}\nif len(r) == 0 {\n    // \u7ed3\u679c\u4e3a\u7a7a\n}\n'})}),"\n",(0,s.jsxs)(r.h2,{id:"\u4e94-struct-\u5bf9\u8c61\u6ce8\u610f",children:["\u4e94\u3001 ",(0,s.jsx)(r.code,{children:"Struct"})," \u5bf9\u8c61\uff08\ud83d\udd25\u6ce8\u610f\ud83d\udd25\uff09"]}),"\n",(0,s.jsxs)(r.p,{children:["\u5173\u4e8e ",(0,s.jsx)(r.code,{children:"Struct"})," \u8f6c\u6362\u5bf9\u8c61\u6765\u8bf4 ",(0,s.jsx)(r.strong,{children:"\u4f1a\u6709\u4e00\u70b9\u4e0d\u4e00\u6837"}),"\uff0c\u6211\u4eec\u76f4\u63a5\u770b\u4f8b\u5b50\u5427\u3002"]}),"\n",(0,s.jsxs)(r.p,{children:["\u5f53\u4f20\u9012\u7684\u5bf9\u8c61 ",(0,s.jsx)(r.strong,{children:"\u672c\u8eab\u5c31\u662f\u4e00\u4e2a\u7a7a\u6307\u9488\u65f6"}),"\uff0c\u5982\u679c\u67e5\u8be2\u5230\u6570\u636e\uff0c\u90a3\u4e48\u4f1a\u5728\u5185\u90e8 ",(0,s.jsx)(r.strong,{children:"\u81ea\u52a8\u521b\u5efa\u8fd9\u4e2a\u5bf9\u8c61"}),"\uff1b\u5982\u679c\u6ca1\u6709\u67e5\u8be2\u5230\u6570\u636e\uff0c\u90a3\u4e48\u8fd9\u4e2a\u7a7a\u6307\u9488\u4ecd\u65e7\u662f\u4e00\u4e2a\u7a7a\u6307\u9488\uff0c\u5185\u90e8\u5e76\u4e0d\u4f1a\u505a\u4efb\u4f55\u5904\u7406\u3002"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-go",children:'var user *User\nerr := g.Model("order").Where("status", 1).Scan(&user)\nif err != nil {\n    return err\n}\nif user == nil {\n    // \u7ed3\u679c\u4e3a\u7a7a\n}\n'})}),"\n",(0,s.jsxs)(r.p,{children:["\u5f53\u4f20\u9012\u7684\u5bf9\u8c61 ",(0,s.jsx)(r.strong,{children:"\u672c\u8eab\u5df2\u7ecf\u662f\u4e00\u4e2a\u521d\u59cb\u5316\u7684\u5bf9\u8c61"}),"\uff0c\u5982\u679c\u67e5\u8be2\u5230\u6570\u636e\uff0c\u90a3\u4e48\u4f1a\u5728\u5185\u90e8\u5c06\u6570\u636e\u8d4b\u503c\u7ed9\u8fd9\u4e2a\u5bf9\u8c61\uff1b ",(0,s.jsxs)(r.strong,{children:["\u5982\u679c\u6ca1\u6709\u67e5\u8be2\u5230\u6570\u636e\uff0c\u90a3\u4e48\u6b64\u65f6\u5c31\u6ca1\u529e\u6cd5\u5c06\u5bf9\u8c61\u505a ",(0,s.jsx)(r.code,{children:"nil"})," \u5224\u65ad\u7a7a\u7ed3\u679c"]}),"\u3002\u56e0\u6b64 ",(0,s.jsx)(r.code,{children:"ORM"})," \u4f1a\u8fd4\u56de\u4e00\u4e2a ",(0,s.jsx)(r.code,{children:"sql.ErrNoRows"})," \u9519\u8bef\uff0c\u63d0\u9192\u5f00\u53d1\u8005\u6ca1\u6709\u67e5\u8be2\u5230\u4efb\u4f55\u6570\u636e\u5e76\u4e14\u5bf9\u8c61\u6ca1\u6709\u505a\u4efb\u4f55\u8d4b\u503c\uff0c\u5bf9\u8c61\u7684\u6240\u6709\u5c5e\u6027\u8fd8\u662f\u7ed9\u5b9a\u7684\u521d\u59cb\u5316\u6570\u503c\uff0c\u4ee5\u4fbf\u5f00\u53d1\u8005\u53ef\u4ee5\u505a\u8fdb\u4e00\u6b65\u7684\u7a7a\u7ed3\u679c\u5224\u65ad\u3002"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-go",children:'var user = new(User)\nerr := g.Model("order").Where("status", 1).Scan(&user)\nif err != nil && err != sql.ErrNoRows {\n    return err\n}\nif err == sql.ErrNoRows {\n    // \u7ed3\u679c\u4e3a\u7a7a\n}\n'})}),"\n",(0,s.jsxs)(r.p,{children:["\u6240\u4ee5\u6211\u4eec\u63a8\u8350\u5f00\u53d1\u8005\u4e0d\u8981\u4f20\u9012\u4e00\u4e2a\u521d\u59cb\u5316\u8fc7\u540e\u7684\u5bf9\u8c61\u7ed9 ",(0,s.jsx)(r.code,{children:"ORM"}),"\uff0c\u800c\u662f\u76f4\u63a5\u4f20\u9012\u4e00\u4e2a\u5bf9\u8c61\u7684\u6307\u9488\u7684\u6307\u9488\u7c7b\u578b\uff08 ",(0,s.jsx)(r.code,{children:"**struct"})," \u7c7b\u578b\uff09\uff0c ",(0,s.jsx)(r.code,{children:"ORM"})," \u5185\u90e8\u4f1a\u6839\u636e\u67e5\u8be2\u7ed3\u679c\u667a\u80fd\u5730\u505a\u81ea\u52a8\u521d\u59cb\u5316\u3002"]}),"\n",(0,s.jsxs)(r.h2,{id:"\u516d-struct-\u6570\u7ec4",children:["\u516d\u3001 ",(0,s.jsx)(r.code,{children:"Struct"})," \u6570\u7ec4"]}),"\n",(0,s.jsxs)(r.p,{children:["\u5f53\u4f20\u9012\u7684\u5bf9\u8c61\u6570\u7ec4\u672c\u8eab\u662f\u4e00\u4e2a\u7a7a\u6570\u7ec4\uff08\u957f\u5ea6\u4e3a ",(0,s.jsx)(r.code,{children:"0"}),"\uff09\uff0c\u5982\u679c\u67e5\u8be2\u5230\u6570\u636e\uff0c\u90a3\u4e48\u4f1a\u5728\u5185\u90e8\u81ea\u52a8\u8d4b\u503c\u7ed9\u6570\u7ec4\uff1b\u5982\u679c\u6ca1\u6709\u67e5\u8be2\u5230\u6570\u636e\uff0c\u90a3\u4e48\u8fd9\u4e2a\u7a7a\u6570\u7ec4\u4ecd\u65e7\u662f\u4e00\u4e2a\u7a7a\u6570\u7ec4\uff0c\u5185\u90e8\u5e76\u4e0d\u4f1a\u505a\u4efb\u4f55\u5904\u7406\u3002"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-go",children:'var users []*User\nerr := g.Model("order").Where("status", 1).Scan(&users)\nif err != nil {\n    return err\n}\nif len(users) == 0 {\n    // \u7ed3\u679c\u4e3a\u7a7a\n}\n'})}),"\n",(0,s.jsxs)(r.p,{children:["\u5f53\u4f20\u9012\u7684\u5bf9\u8c61\u6570\u7ec4\u672c\u8eab\u4e0d\u662f\u7a7a\u6570\u7ec4\uff0c\u5982\u679c\u67e5\u8be2\u5230\u6570\u636e\uff0c\u90a3\u4e48\u4f1a\u5728\u5185\u90e8\u81ea\u52a8\u4ece\u7d22\u5f15 ",(0,s.jsx)(r.code,{children:"0"})," \u4f4d\u7f6e\u8986\u76d6\u5230\u6570\u7ec4\u4e0a\uff1b\u5982\u679c\u6ca1\u6709\u67e5\u8be2\u5230\u6570\u636e\uff0c\u90a3\u4e48\u6b64\u65f6\u5c31\u6ca1\u529e\u6cd5\u5c06\u6570\u7ec4\u505a\u957f\u5ea6\u4e3a ",(0,s.jsx)(r.code,{children:"0"})," \u5224\u65ad\u7a7a\u7ed3\u679c\u3002\u56e0\u6b64 ",(0,s.jsx)(r.code,{children:"ORM"})," \u4f1a\u8fd4\u56de\u4e00\u4e2a ",(0,s.jsx)(r.code,{children:"sql.ErrNoRows"})," \u9519\u8bef\uff0c\u63d0\u9192\u5f00\u53d1\u8005\u6ca1\u6709\u67e5\u8be2\u5230\u4efb\u4f55\u6570\u636e\u5e76\u4e14\u6570\u7ec4\u6ca1\u6709\u505a\u4efb\u4f55\u8d4b\u503c\uff0c\u4ee5\u4fbf\u5f00\u53d1\u8005\u53ef\u4ee5\u505a\u8fdb\u4e00\u6b65\u7684\u7a7a\u7ed3\u679c\u5224\u65ad\u3002"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-go",children:'var users = make([]*User, 100)\nerr := g.Model("order").Where("status", 1).Scan(&users)\nif err != nil {\n    return err\n}\nif err == sql.ErrNoRows {\n    // \u7ed3\u679c\u4e3a\u7a7a\n}\n'})}),"\n",(0,s.jsxs)(r.p,{children:["\u7531\u4e8e ",(0,s.jsx)(r.code,{children:"struct"})," \u8f6c\u6362\u5229\u7528\u4e86 ",(0,s.jsx)(r.code,{children:"Golang"})," \u53cd\u5c04\u7279\u6027\uff0c\u6267\u884c\u6027\u80fd\u4f1a\u6709\u4e00\u5b9a\u7684\u635f\u8017\u3002\u5982\u679c\u60a8\u6d89\u53ca\u5230\u5927\u91cf\u67e5\u8be2\u7ed3\u679c\u6570\u636e\u7684 ",(0,s.jsx)(r.code,{children:"struct"})," \u6570\u7ec4\u5bf9\u8c61\u8f6c\u6362\uff0c\u5e76\u4e14\u9700\u8981\u63d0\u9ad8\u8f6c\u6362\u6027\u80fd\uff0c\u8bf7\u53c2\u8003\u81ea\u5b9a\u4e49\u5b9e\u73b0\u5bf9\u5e94 ",(0,s.jsx)(r.code,{children:"struct"})," \u7684 ",(0,s.jsx)(r.code,{children:"UnmarshalValue"})," \u65b9\u6cd5\uff1a ",(0,s.jsx)(r.a,{href:"/gf-site/docs/2.6.x/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2/%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2-UnmarshalValue",children:"\u7c7b\u578b\u8f6c\u6362-UnmarshalValue"})]})]})}function h(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>i});var s=n(96540);const d={},l=s.createContext(d);function c(e){const r=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),s.createElement(l.Provider,{value:r},e.children)}}}]);