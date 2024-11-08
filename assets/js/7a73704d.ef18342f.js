"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[31232],{900556:(e,d,n)=>{n.r(d),n.d(d,{assets:()=>r,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u65f6\u95f4\u7ef4\u62a4","title":"ORM\u94fe\u5f0f\u64cd\u4f5c-\u65f6\u95f4\u7ef4\u62a4","description":"\u672c\u6587\u4ecb\u7ecd\u4e86\u4f7f\u7528GoFrame\u6846\u67b6\u4e2d\u7684gdb\u6a21\u5757\u8fdb\u884cORM\u94fe\u5f0f\u64cd\u4f5c\u65f6\u7684\u65f6\u95f4\u7ef4\u62a4\u7279\u6027\u3002\u901a\u8fc7\u81ea\u52a8\u586b\u5145\u521b\u5efa\u3001\u66f4\u65b0\u548c\u5220\u9664\u65f6\u95f4\uff0c\u6709\u6548\u63d0\u9ad8\u4e86\u5f00\u53d1\u6548\u7387\u3002\u6587\u7ae0\u8be6\u7ec6\u8bb2\u89e3\u4e86\u5982\u4f55\u542f\u7528\u8fd9\u4e9b\u7279\u6027\u4ee5\u53ca\u5728\u6267\u884c\u6570\u636e\u5e93\u64cd\u4f5c\u5982\u63d2\u5165\u3001\u66f4\u65b0\u548c\u5220\u9664\u65f6\u7684\u5b9e\u73b0\u65b9\u5f0f\u3002\u6b64\u5916\uff0c\u8fd8\u63d0\u4f9b\u4e86\u9488\u5bf9\u8f6f\u5220\u9664\u548c\u5ffd\u7565\u65f6\u95f4\u7ef4\u62a4\u7b49\u573a\u666f\u7684\u89e3\u51b3\u65b9\u6848\u3002","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u65f6\u95f4\u7ef4\u62a4.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c","slug":"/docs/core/gdb-chaining-soft-time","permalink":"/docs/core/gdb-chaining-soft-time","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u65f6\u95f4\u7ef4\u62a4.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731055597000,"sidebarPosition":11,"frontMatter":{"slug":"/docs/core/gdb-chaining-soft-time","title":"ORM\u94fe\u5f0f\u64cd\u4f5c-\u65f6\u95f4\u7ef4\u62a4","sidebar_position":11,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","ORM","\u94fe\u5f0f\u64cd\u4f5c","\u65f6\u95f4\u7ef4\u62a4","gdb","\u81ea\u52a8\u586b\u5145","\u8f6f\u5220\u9664","\u8868\u73b0\u5c42","\u6570\u636e\u64cd\u4f5c"],"description":"\u672c\u6587\u4ecb\u7ecd\u4e86\u4f7f\u7528GoFrame\u6846\u67b6\u4e2d\u7684gdb\u6a21\u5757\u8fdb\u884cORM\u94fe\u5f0f\u64cd\u4f5c\u65f6\u7684\u65f6\u95f4\u7ef4\u62a4\u7279\u6027\u3002\u901a\u8fc7\u81ea\u52a8\u586b\u5145\u521b\u5efa\u3001\u66f4\u65b0\u548c\u5220\u9664\u65f6\u95f4\uff0c\u6709\u6548\u63d0\u9ad8\u4e86\u5f00\u53d1\u6548\u7387\u3002\u6587\u7ae0\u8be6\u7ec6\u8bb2\u89e3\u4e86\u5982\u4f55\u542f\u7528\u8fd9\u4e9b\u7279\u6027\u4ee5\u53ca\u5728\u6267\u884c\u6570\u636e\u5e93\u64cd\u4f5c\u5982\u63d2\u5165\u3001\u66f4\u65b0\u548c\u5220\u9664\u65f6\u7684\u5b9e\u73b0\u65b9\u5f0f\u3002\u6b64\u5916\uff0c\u8fd8\u63d0\u4f9b\u4e86\u9488\u5bf9\u8f6f\u5220\u9664\u548c\u5ffd\u7565\u65f6\u95f4\u7ef4\u62a4\u7b49\u573a\u666f\u7684\u89e3\u51b3\u65b9\u6848\u3002"},"sidebar":"mainSidebar","previous":{"title":"ORM\u94fe\u5f0f\u64cd\u4f5c-\u67e5\u8be2\u7f13\u5b58","permalink":"/docs/core/gdb-chaining-query-cache"},"next":{"title":"ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u5e93\u5207\u6362","permalink":"/docs/core/gdb-chaining-schema"}}');var s=n(474848),a=n(28453);const i={slug:"/docs/core/gdb-chaining-soft-time",title:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u65f6\u95f4\u7ef4\u62a4",sidebar_position:11,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","ORM","\u94fe\u5f0f\u64cd\u4f5c","\u65f6\u95f4\u7ef4\u62a4","gdb","\u81ea\u52a8\u586b\u5145","\u8f6f\u5220\u9664","\u8868\u73b0\u5c42","\u6570\u636e\u64cd\u4f5c"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u4f7f\u7528GoFrame\u6846\u67b6\u4e2d\u7684gdb\u6a21\u5757\u8fdb\u884cORM\u94fe\u5f0f\u64cd\u4f5c\u65f6\u7684\u65f6\u95f4\u7ef4\u62a4\u7279\u6027\u3002\u901a\u8fc7\u81ea\u52a8\u586b\u5145\u521b\u5efa\u3001\u66f4\u65b0\u548c\u5220\u9664\u65f6\u95f4\uff0c\u6709\u6548\u63d0\u9ad8\u4e86\u5f00\u53d1\u6548\u7387\u3002\u6587\u7ae0\u8be6\u7ec6\u8bb2\u89e3\u4e86\u5982\u4f55\u542f\u7528\u8fd9\u4e9b\u7279\u6027\u4ee5\u53ca\u5728\u6267\u884c\u6570\u636e\u5e93\u64cd\u4f5c\u5982\u63d2\u5165\u3001\u66f4\u65b0\u548c\u5220\u9664\u65f6\u7684\u5b9e\u73b0\u65b9\u5f0f\u3002\u6b64\u5916\uff0c\u8fd8\u63d0\u4f9b\u4e86\u9488\u5bf9\u8f6f\u5220\u9664\u548c\u5ffd\u7565\u65f6\u95f4\u7ef4\u62a4\u7b49\u573a\u666f\u7684\u89e3\u51b3\u65b9\u6848\u3002"},c=void 0,r={},o=[{value:"\u7279\u6027\u7684\u542f\u7528",id:"\u7279\u6027\u7684\u542f\u7528",level:3},{value:"<code>created_at</code> \u5199\u5165\u65f6\u95f4",id:"created_at-\u5199\u5165\u65f6\u95f4",level:3},{value:"<code>updated_at</code> \u66f4\u65b0\u65f6\u95f4",id:"updated_at-\u66f4\u65b0\u65f6\u95f4",level:3},{value:"<code>deleted_at</code> \u6570\u636e\u8f6f\u5220\u9664",id:"deleted_at-\u6570\u636e\u8f6f\u5220\u9664",level:3},{value:"\u8054\u8868\u67e5\u8be2\u7684\u573a\u666f",id:"\u8054\u8868\u67e5\u8be2\u7684\u573a\u666f",level:4},{value:"<code>Unscoped</code> \u5ffd\u7565\u65f6\u95f4\u7279\u6027",id:"unscoped-\u5ffd\u7565\u65f6\u95f4\u7279\u6027",level:4}];function l(e){const d={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.p,{children:"\u9700\u8981\u6ce8\u610f\uff0c\u8be5\u7279\u6027\u4ec5\u5bf9\u94fe\u5f0f\u64cd\u4f5c\u6709\u6548\u3002"}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.code,{children:"gdb"})," \u6a21\u5757\u652f\u6301\u5bf9\u6570\u636e\u8bb0\u5f55\u7684\u5199\u5165\u3001\u66f4\u65b0\u3001\u5220\u9664\u65f6\u95f4\u81ea\u52a8\u586b\u5145\uff0c\u63d0\u9ad8\u5f00\u53d1\u7ef4\u62a4\u6548\u7387\u3002\u4e3a\u4e86\u4fbf\u4e8e\u65f6\u95f4\u5b57\u6bb5\u540d\u79f0\u3001\u7c7b\u578b\u7684\u7edf\u4e00\u7ef4\u62a4\uff0c\u5982\u679c\u4f7f\u7528\u8be5\u7279\u6027\uff0c\u6211\u4eec\u7ea6\u5b9a\uff1a"]}),"\n",(0,s.jsxs)(d.ul,{children:["\n",(0,s.jsxs)(d.li,{children:["\u5b57\u6bb5\u5e94\u5f53\u8bbe\u7f6e\u5141\u8bb8\u503c\u4e3a ",(0,s.jsx)(d.code,{children:"null"}),"\u3002"]}),"\n",(0,s.jsxs)(d.li,{children:["\u5b57\u6bb5\u7684\u7c7b\u578b\u5fc5\u987b\u4e3a\u65f6\u95f4\u7c7b\u578b\uff0c\u5982: ",(0,s.jsx)(d.code,{children:"date"}),", ",(0,s.jsx)(d.code,{children:"datetime"}),", ",(0,s.jsx)(d.code,{children:"timestamp"}),"\u3002\u4e0d\u652f\u6301\u6570\u5b57\u7c7b\u578b\u5b57\u6bb5\uff0c\u5982 ",(0,s.jsx)(d.code,{children:"int"}),"\u3002"]}),"\n",(0,s.jsxs)(d.li,{children:["\u5b57\u6bb5\u7684\u540d\u79f0\u652f\u6301\u81ea\u5b9a\u4e49\u8bbe\u7f6e\uff0c\u9ed8\u8ba4\u540d\u79f0\u7ea6\u5b9a\u4e3a\uff1a","\n",(0,s.jsxs)(d.ul,{children:["\n",(0,s.jsxs)(d.li,{children:[(0,s.jsx)(d.code,{children:"created_at"})," \u7528\u4e8e\u8bb0\u5f55\u521b\u5efa\u65f6\u66f4\u65b0\uff0c\u4ec5\u4f1a\u5199\u5165\u4e00\u6b21\u3002"]}),"\n",(0,s.jsxs)(d.li,{children:[(0,s.jsx)(d.code,{children:"updated_at"})," \u7528\u4e8e\u8bb0\u5f55\u4fee\u6539\u65f6\u66f4\u65b0\uff0c\u6bcf\u6b21\u8bb0\u5f55\u53d8\u66f4\u65f6\u66f4\u65b0\u3002"]}),"\n",(0,s.jsxs)(d.li,{children:[(0,s.jsx)(d.code,{children:"deleted_at"})," \u7528\u4e8e\u8bb0\u5f55\u7684\u8f6f\u5220\u9664\u7279\u6027\uff0c\u53ea\u6709\u5f53\u8bb0\u5f55\u5220\u9664\u65f6\u4f1a\u5199\u5165\u4e00\u6b21\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(d.p,{children:["\u5b57\u6bb5\u540d\u79f0\u5176\u5b9e\u4e0d\u533a\u5206\u5927\u5c0f\u5199\uff0c\u4e5f\u4f1a\u5ffd\u7565\u7279\u6b8a\u5b57\u7b26\uff0c\u4f8b\u5982 ",(0,s.jsx)(d.code,{children:"CreatedAt"}),", ",(0,s.jsx)(d.code,{children:"UpdatedAt"}),", ",(0,s.jsx)(d.code,{children:"DeletedAt"})," \u4e5f\u662f\u652f\u6301\u7684\u3002\u6b64\u5916\uff0c\u65f6\u95f4\u5b57\u6bb5\u540d\u79f0\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u8fdb\u884c\u81ea\u5b9a\u4e49\u4fee\u6539\uff0c\u5e76\u53ef\u4f7f\u7528 ",(0,s.jsx)(d.code,{children:"TimeMaintainDisabled"})," \u914d\u7f6e\u5b8c\u6574\u5173\u95ed\u8be5\u7279\u6027\uff0c\u5177\u4f53\u8bf7\u53c2\u8003 ",(0,s.jsx)(d.a,{href:"/docs/core/gdb-config",children:"ORM\u4f7f\u7528\u914d\u7f6e"})," \u7ae0\u8282\u3002"]}),"\n",(0,s.jsx)(d.admonition,{type:"tip",children:(0,s.jsx)(d.p,{children:"\u5bf9\u65f6\u95f4\u7c7b\u578b\u7684\u56fa\u5b9a\u5176\u5b9e\u662f\u4e3a\u4e86\u5f62\u6210\u4e00\u79cd\u89c4\u8303\u3002"})}),"\n",(0,s.jsx)(d.h3,{id:"\u7279\u6027\u7684\u542f\u7528",children:"\u7279\u6027\u7684\u542f\u7528"}),"\n",(0,s.jsxs)(d.p,{children:["\u5f53\u6570\u636e\u8868\u5305\u542b ",(0,s.jsx)(d.code,{children:"created_at"}),"\u3001 ",(0,s.jsx)(d.code,{children:"updated_at"}),"\u3001 ",(0,s.jsx)(d.code,{children:"deleted_at"})," \u4efb\u610f\u4e00\u4e2a\u6216\u591a\u4e2a\u5b57\u6bb5\u65f6\uff0c\u8be5\u7279\u6027\u81ea\u52a8\u542f\u7528\u3002"]}),"\n",(0,s.jsx)(d.p,{children:"\u4ee5\u4e0b\u7684\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u9ed8\u8ba4\u793a\u4f8b\u4e2d\u7684\u6570\u636e\u8868\u5747\u5305\u542b\u4e86\u8fd93\u4e2a\u5b57\u6bb5\u3002"}),"\n",(0,s.jsxs)(d.h3,{id:"created_at-\u5199\u5165\u65f6\u95f4",children:[(0,s.jsx)(d.code,{children:"created_at"})," \u5199\u5165\u65f6\u95f4"]}),"\n",(0,s.jsxs)(d.p,{children:["\u5728\u6267\u884c ",(0,s.jsx)(d.code,{children:"Insert/InsertIgnore/BatchInsert/BatchInsertIgnore"})," \u65b9\u6cd5\u65f6\u81ea\u52a8\u5199\u5165\u8be5\u65f6\u95f4\uff0c\u968f\u540e\u4fdd\u6301\u4e0d\u53d8\u3002"]}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-go",children:'// INSERT INTO `user`(`name`,`created_at`,`updated_at`) VALUES(\'john\', `2020-06-06 21:00:00`, `2020-06-06 21:00:00`)\ng.Model("user").Data(g.Map{"name": "john"}).Insert()\n\n// INSERT IGNORE INTO `user`(`uid`,`name`,`created_at`,`updated_at`) VALUES(10000,\'john\', `2020-06-06 21:00:00`, `2020-06-06 21:00:00`)\ng.Model("user").Data(g.Map{"uid": 10000, "name": "john"}).InsertIgnore()\n\n// REPLACE INTO `user`(`uid`,`name`,`created_at`,`updated_at`) VALUES(10000,\'john\', `2020-06-06 21:00:00`, `2020-06-06 21:00:00`)\ng.Model("user").Data(g.Map{"uid": 10000, "name": "john"}).Replace()\n\n// INSERT INTO `user`(`uid`,`name`,`created_at`,`updated_at`) VALUES(10001,\'john\', `2020-06-06 21:00:00`, `2020-06-06 21:00:00`) ON DUPLICATE KEY UPDATE `uid`=VALUES(`uid`),`name`=VALUES(`name`),`updated_at`=VALUES(`updated_at`)\ng.Model("user").Data(g.Map{"uid": 10001, "name": "john"}).Save()\n'})}),"\n",(0,s.jsxs)(d.p,{children:["\u9700\u8981\u6ce8\u610f\u7684\u662f ",(0,s.jsx)(d.code,{children:"Replace"})," \u65b9\u6cd5\u4e5f\u4f1a\u66f4\u65b0\u8be5\u5b57\u6bb5\uff0c\u56e0\u4e3a\u8be5\u64cd\u4f5c\u76f8\u5f53\u4e8e\u5220\u9664\u5df2\u5b58\u5728\u7684\u65e7\u6570\u636e\u5e76\u91cd\u65b0\u5199\u4e00\u6761\u6570\u636e\u3002"]}),"\n",(0,s.jsxs)(d.h3,{id:"updated_at-\u66f4\u65b0\u65f6\u95f4",children:[(0,s.jsx)(d.code,{children:"updated_at"})," \u66f4\u65b0\u65f6\u95f4"]}),"\n",(0,s.jsxs)(d.p,{children:["\u5728\u6267\u884c ",(0,s.jsx)(d.code,{children:"Insert/InsertIgnore/BatchInsert/BatchInsertIgnore"})," \u65b9\u6cd5\u65f6\u81ea\u52a8\u5199\u5165\u8be5\u65f6\u95f4\uff0c\u5728\u6267\u884c ",(0,s.jsx)(d.code,{children:"Save/Update"})," \u65f6\u66f4\u65b0\u8be5\u65f6\u95f4\uff08\u6ce8\u610f\u5f53\u5199\u5165\u6570\u636e\u5b58\u5728\u65f6\u4f1a\u66f4\u65b0 ",(0,s.jsx)(d.code,{children:"updated_at"})," \u65f6\u95f4\uff0c\u4e0d\u4f1a\u66f4\u65b0 ",(0,s.jsx)(d.code,{children:"created_at"})," \u65f6\u95f4\uff09\u3002"]}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-go",children:'// UPDATE `user` SET `name`=\'john guo\',`updated_at`=\'2020-06-06 21:00:00\' WHERE name=\'john\'\ng.Model("user").Data(g.Map{"name" : "john guo"}).Where("name", "john").Update()\n\n// UPDATE `user` SET `status`=1,`updated_at`=\'2020-06-06 21:00:00\' ORDER BY `login_time` asc LIMIT 10\ng.Model("user").Data("status", 1).Order("login_time asc").Limit(10).Update()\n\n// INSERT INTO `user`(`id`,`name`,`update_at`) VALUES(1,\'john guo\',\'2020-12-29 20:16:14\') ON DUPLICATE KEY UPDATE `id`=VALUES(`id`),`name`=VALUES(`name`),`update_at`=VALUES(`update_at`)\ng.Model("user").Data(g.Map{"id": 1, "name": "john guo"}).Save()\n'})}),"\n",(0,s.jsx)(d.admonition,{type:"warning",children:(0,s.jsxs)(d.p,{children:["\u9700\u8981\u6ce8\u610f\u7684\u662f ",(0,s.jsx)(d.code,{children:"Replace"})," \u65b9\u6cd5\u4e5f\u4f1a\u66f4\u65b0\u8be5\u5b57\u6bb5\uff0c\u56e0\u4e3a\u8be5\u64cd\u4f5c\u76f8\u5f53\u4e8e\u5220\u9664\u5df2\u5b58\u5728\u7684\u65e7\u6570\u636e\u5e76\u91cd\u65b0\u5199\u4e00\u6761\u6570\u636e\u3002"]})}),"\n",(0,s.jsxs)(d.h3,{id:"deleted_at-\u6570\u636e\u8f6f\u5220\u9664",children:[(0,s.jsx)(d.code,{children:"deleted_at"})," \u6570\u636e\u8f6f\u5220\u9664"]}),"\n",(0,s.jsxs)(d.p,{children:["\u8f6f\u5220\u9664\u4f1a\u7a0d\u5fae\u6bd4\u8f83\u590d\u6742\u4e00\u4e9b\uff0c\u5f53\u8f6f\u5220\u9664\u5b58\u5728\u65f6\uff0c\u6240\u6709\u7684\u67e5\u8be2\u8bed\u53e5\u90fd\u5c06\u4f1a\u81ea\u52a8\u52a0\u4e0a ",(0,s.jsx)(d.code,{children:"deleted_at"})," \u7684\u6761\u4ef6\u3002"]}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-go",children:'// UPDATE `user` SET `deleted_at`=\'2020-06-06 21:00:00\' WHERE uid=10\ng.Model("user").Where("uid", 10).Delete()\n'})}),"\n",(0,s.jsx)(d.p,{children:"\u67e5\u8be2\u7684\u65f6\u5019\u4f1a\u53d1\u751f\u4e00\u4e9b\u53d8\u5316\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-go",children:'// SELECT * FROM `user` WHERE uid>1 AND `deleted_at` IS NULL\ng.Model("user").Where("uid>?", 1).All()\n'})}),"\n",(0,s.jsxs)(d.p,{children:["\u53ef\u4ee5\u770b\u5230\u5f53\u6570\u636e\u8868\u4e2d\u5b58\u5728 ",(0,s.jsx)(d.code,{children:"deleted_at"})," \u5b57\u6bb5\u65f6\uff0c\u6240\u6709\u6d89\u53ca\u5230\u8be5\u8868\u7684\u67e5\u8be2\u64cd\u4f5c\u90fd\u5c06\u81ea\u52a8\u52a0\u4e0a ",(0,s.jsx)(d.code,{children:"deleted_at IS NULL"})," \u7684\u6761\u4ef6"]}),"\n",(0,s.jsx)(d.h4,{id:"\u8054\u8868\u67e5\u8be2\u7684\u573a\u666f",children:"\u8054\u8868\u67e5\u8be2\u7684\u573a\u666f"}),"\n",(0,s.jsx)(d.p,{children:"\u5982\u679c\u5173\u8054\u67e5\u8be2\u7684\u51e0\u4e2a\u8868\u90fd\u542f\u7528\u4e86\u8f6f\u5220\u9664\u7279\u6027\u65f6\uff0c\u4f1a\u53d1\u751f\u4ee5\u4e0b\u8fd9\u79cd\u60c5\u51b5\uff0c\u5373\u6761\u4ef6\u8bed\u53e5\u4e2d\u4f1a\u589e\u52a0\u6240\u6709\u76f8\u5173\u8868\u7684\u8f6f\u5220\u9664\u65f6\u95f4\u5224\u65ad\u3002"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-go",children:'// SELECT * FROM `user` AS `u` LEFT JOIN `user_detail` AS `ud` ON (ud.uid=u.uid) WHERE u.uid=10 AND `u`.`deleted_at` IS NULL AND `ud`.`deleteat` IS NULL LIMIT 1\ng.Model("user", "u").LeftJoin("user_detail", "ud", "ud.uid=u.uid").Where("u.uid", 10).One()\n'})}),"\n",(0,s.jsxs)(d.h4,{id:"unscoped-\u5ffd\u7565\u65f6\u95f4\u7279\u6027",children:[(0,s.jsx)(d.code,{children:"Unscoped"})," \u5ffd\u7565\u65f6\u95f4\u7279\u6027"]}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.code,{children:"Unscoped"})," \u7528\u4e8e\u5728\u94fe\u5f0f\u64cd\u4f5c\u4e2d\u5ffd\u7565\u81ea\u52a8\u65f6\u95f4\u66f4\u65b0\u7279\u6027\uff0c\u4f8b\u5982\u4e0a\u9762\u7684\u793a\u4f8b\uff0c\u52a0\u4e0a ",(0,s.jsx)(d.code,{children:"Unscoped"})," \u65b9\u6cd5\u540e\uff1a"]}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-go",children:'// SELECT * FROM `user` WHERE uid>1\ng.Model("user").Unscoped().Where("uid>?", 1).All()\n\n// SELECT * FROM `user` AS `u` LEFT JOIN `user_detail` AS `ud` ON (ud.uid=u.uid) WHERE u.uid=10 LIMIT 1\ng.Model("user", "u").LeftJoin("user_detail", "ud", "ud.uid=u.uid").Where("u.uid", 10).Unscoped().One()\n'})})]})}function u(e={}){const{wrapper:d}={...(0,a.R)(),...e.components};return d?(0,s.jsx)(d,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,d,n)=>{n.d(d,{R:()=>i,x:()=>c});var t=n(296540);const s={},a=t.createContext(s);function i(e){const d=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:d},e.children)}}}]);