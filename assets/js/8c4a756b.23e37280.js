"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["58017"],{660650:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>o,default:()=>p,assets:()=>d,toc:()=>a,frontMatter:()=>c});var i=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u6700\u4F73\u5B9E\u8DF5/\u590D\u6742\u7C7B\u578B\u5C3D\u91CF\u4F7F\u7528json\u5B58\u50A8\uFF0C\u4FBF\u4E8EScan\u5230\u5BF9\u8C61\u65F6\u81EA\u52A8\u5316\u8F6C\u6362\uFF0C\u907F\u514D\u81EA\u5B9A\u4E49\u89E3\u6790","title":"\u590D\u6742\u7C7B\u578B\u5C3D\u91CF\u4F7F\u7528json\u5B58\u50A8\uFF0C\u4FBF\u4E8EScan\u5230\u5BF9\u8C61\u65F6\u81EA\u52A8\u5316\u8F6C\u6362\uFF0C\u907F\u514D\u81EA\u5B9A\u4E49\u89E3\u6790","description":"\u5728\u6570\u636E\u5E93\u8BBE\u8BA1\u4E2D\u4F7F\u7528JSON\u683C\u5F0F\u5B58\u50A8\u590D\u6742\u7C7B\u578B\u6570\u636E\u7684\u4F18\u52BF\uFF0C\u4E3B\u8981\u901A\u8FC7GoFrame\u6846\u67B6\u5B9E\u73B0\u81EA\u52A8\u5316\u8F6C\u6362\uFF0C\u4ECE\u800C\u7B80\u5316\u4EE3\u7801\u3002\u4EE5\u4EA7\u54C1\u552E\u5356\u89C4\u683C\u4E3A\u4F8B\uFF0C\u901A\u8FC7\u5B9A\u4E49\u548C\u4F7F\u7528Go\u7ED3\u6784\u4F53\u5B9E\u73B0\u6570\u636E\u5E93\u7684\u589E\u5220\u67E5\u6539\uFF0C\u907F\u514D\u81EA\u5B9A\u4E49\u89E3\u6790\u7684\u590D\u6742\u64CD\u4F5C\u3002\u6B64\u5916\uFF0C\u8BE6\u7EC6\u5C55\u793A\u4E86\u5982\u4F55\u5728Go\u5E94\u7528\u4E2D\u8FDB\u884C\u6570\u636E\u5199\u5165\u548C\u67E5\u8BE2\uFF0C\u786E\u4FDD\u9AD8\u6548\u7387\u7684\u6570\u636E\u5904\u7406\u8FC7\u7A0B\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u6700\u4F73\u5B9E\u8DF5/\u590D\u6742\u7C7B\u578B\u5C3D\u91CF\u4F7F\u7528json\u5B58\u50A8\uFF0C\u4FBF\u4E8EScan\u5230\u5BF9\u8C61\u65F6\u81EA\u52A8\u5316\u8F6C\u6362\uFF0C\u907F\u514D\u81EA\u5B9A\u4E49\u89E3\u6790.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u6700\u4F73\u5B9E\u8DF5","slug":"/docs/core/gdb-practice-using-json-for-complicated-field","permalink":"/2.7.x/docs/core/gdb-practice-using-json-for-complicated-field","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u6700\u4F73\u5B9E\u8DF5/\u590D\u6742\u7C7B\u578B\u5C3D\u91CF\u4F7F\u7528json\u5B58\u50A8\uFF0C\u4FBF\u4E8EScan\u5230\u5BF9\u8C61\u65F6\u81EA\u52A8\u5316\u8F6C\u6362\uFF0C\u907F\u514D\u81EA\u5B9A\u4E49\u89E3\u6790.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":1,"frontMatter":{"slug":"/docs/core/gdb-practice-using-json-for-complicated-field","title":"\u590D\u6742\u7C7B\u578B\u5C3D\u91CF\u4F7F\u7528json\u5B58\u50A8\uFF0C\u4FBF\u4E8EScan\u5230\u5BF9\u8C61\u65F6\u81EA\u52A8\u5316\u8F6C\u6362\uFF0C\u907F\u514D\u81EA\u5B9A\u4E49\u89E3\u6790","sidebar_position":1,"hide_title":true,"keywords":["GoFrame","JSON\u5B58\u50A8","\u6570\u636E\u81EA\u52A8\u5316\u8F6C\u6362","\u590D\u6742\u7C7B\u578B","\u6570\u636E\u5E93\u8BBE\u8BA1","ORM\u7EC4\u4EF6","Go\u8BED\u8A00","\u4EA7\u54C1\u552E\u5356\u89C4\u683C","\u6570\u636E\u67E5\u8BE2","\u6570\u636E\u7ED3\u6784"],"description":"\u5728\u6570\u636E\u5E93\u8BBE\u8BA1\u4E2D\u4F7F\u7528JSON\u683C\u5F0F\u5B58\u50A8\u590D\u6742\u7C7B\u578B\u6570\u636E\u7684\u4F18\u52BF\uFF0C\u4E3B\u8981\u901A\u8FC7GoFrame\u6846\u67B6\u5B9E\u73B0\u81EA\u52A8\u5316\u8F6C\u6362\uFF0C\u4ECE\u800C\u7B80\u5316\u4EE3\u7801\u3002\u4EE5\u4EA7\u54C1\u552E\u5356\u89C4\u683C\u4E3A\u4F8B\uFF0C\u901A\u8FC7\u5B9A\u4E49\u548C\u4F7F\u7528Go\u7ED3\u6784\u4F53\u5B9E\u73B0\u6570\u636E\u5E93\u7684\u589E\u5220\u67E5\u6539\uFF0C\u907F\u514D\u81EA\u5B9A\u4E49\u89E3\u6790\u7684\u590D\u6742\u64CD\u4F5C\u3002\u6B64\u5916\uFF0C\u8BE6\u7EC6\u5C55\u793A\u4E86\u5982\u4F55\u5728Go\u5E94\u7528\u4E2D\u8FDB\u884C\u6570\u636E\u5199\u5165\u548C\u67E5\u8BE2\uFF0C\u786E\u4FDD\u9AD8\u6548\u7387\u7684\u6570\u636E\u5904\u7406\u8FC7\u7A0B\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u5229\u7528\u6307\u9488\u5C5E\u6027\u548Cdo\u5BF9\u8C61\u5B9E\u73B0\u7075\u6D3B\u7684\u4FEE\u6539\u63A5\u53E3","permalink":"/2.7.x/docs/core/gdb-practice-using-pointer-and-do-for-update-api"},"next":{"title":"\u67E5\u8BE2\u65F6\u907F\u514D\u8FD4\u56DE\u5BF9\u8C61\u521D\u59CB\u5316\u53CAsql.ErrNoRows\u5224\u65AD","permalink":"/2.7.x/docs/core/gdb-practice-avoid-object-initialization-and-sql-errnorows-error"}}'),s=t("785893"),r=t("250065");let c={slug:"/docs/core/gdb-practice-using-json-for-complicated-field",title:"\u590D\u6742\u7C7B\u578B\u5C3D\u91CF\u4F7F\u7528json\u5B58\u50A8\uFF0C\u4FBF\u4E8EScan\u5230\u5BF9\u8C61\u65F6\u81EA\u52A8\u5316\u8F6C\u6362\uFF0C\u907F\u514D\u81EA\u5B9A\u4E49\u89E3\u6790",sidebar_position:1,hide_title:!0,keywords:["GoFrame","JSON\u5B58\u50A8","\u6570\u636E\u81EA\u52A8\u5316\u8F6C\u6362","\u590D\u6742\u7C7B\u578B","\u6570\u636E\u5E93\u8BBE\u8BA1","ORM\u7EC4\u4EF6","Go\u8BED\u8A00","\u4EA7\u54C1\u552E\u5356\u89C4\u683C","\u6570\u636E\u67E5\u8BE2","\u6570\u636E\u7ED3\u6784"],description:"\u5728\u6570\u636E\u5E93\u8BBE\u8BA1\u4E2D\u4F7F\u7528JSON\u683C\u5F0F\u5B58\u50A8\u590D\u6742\u7C7B\u578B\u6570\u636E\u7684\u4F18\u52BF\uFF0C\u4E3B\u8981\u901A\u8FC7GoFrame\u6846\u67B6\u5B9E\u73B0\u81EA\u52A8\u5316\u8F6C\u6362\uFF0C\u4ECE\u800C\u7B80\u5316\u4EE3\u7801\u3002\u4EE5\u4EA7\u54C1\u552E\u5356\u89C4\u683C\u4E3A\u4F8B\uFF0C\u901A\u8FC7\u5B9A\u4E49\u548C\u4F7F\u7528Go\u7ED3\u6784\u4F53\u5B9E\u73B0\u6570\u636E\u5E93\u7684\u589E\u5220\u67E5\u6539\uFF0C\u907F\u514D\u81EA\u5B9A\u4E49\u89E3\u6790\u7684\u590D\u6742\u64CD\u4F5C\u3002\u6B64\u5916\uFF0C\u8BE6\u7EC6\u5C55\u793A\u4E86\u5982\u4F55\u5728Go\u5E94\u7528\u4E2D\u8FDB\u884C\u6570\u636E\u5199\u5165\u548C\u67E5\u8BE2\uFF0C\u786E\u4FDD\u9AD8\u6548\u7387\u7684\u6570\u636E\u5904\u7406\u8FC7\u7A0B\u3002"},o=void 0,d={},a=[];function l(e){let n={code:"code",img:"img",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u4E3E\u4E00\u4E2A\uD83C\uDF30\u3002\u5047\u5982\u6211\u4EEC\u9700\u8981\u5B9E\u73B0\u4EA7\u54C1\u552E\u5356\u89C4\u683C\u5217\u8868\uFF0C\u5176\u4E2D\u5305\u542B\u53EF\u9009\u62E9\u7684\u5206\u7247\u6570\u91CF\u3001\u5206\u7247\u5BB9\u91CF\u4EE5\u53CA\u526F\u672C\u6570\u91CF\uFF0C\u5982\u4E0B\u56FE\uFF08\u975E\u73B0\u7F51\u4EE3\u7801\uFF0C\u4EC5\u4F9B\u793A\u4F8B\u5B66\u4E60\uFF09\uFF1A"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(625396).Z+"",width:"1710",height:"616"})}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u4EEC\u7684\u8868\u8BBE\u8BA1\u5982\u4E0B\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `sell_spec` (\n    `id`            int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '\u4E3B\u952E',\n    `product`       varchar(45) NOT NULL COMMENT '\u4EA7\u54C1\u540D\u79F0',\n    `resources`     json NOT NULL COMMENT '\u8D44\u6E90\u89C4\u683C(cpu:memory)\uFF0C\u4F8B\u5982\uFF1A[\"0:0.25\", \"0:1\", \"1:2\"]',\n    `disk_min`      int(10) DEFAULT NULL COMMENT '\u78C1\u76D8\u6700\u5C0F\u5BB9\u91CF',\n    `disk_max`      int(10) DEFAULT NULL COMMENT '\u78C1\u76D8\u6700\u5927\u5BB9\u91CF',\n    `disk_step`     int(10) DEFAULT NULL COMMENT '\u78C1\u76D8\u9012\u589E\u5927\u5C0F',\n    `shards`        json NOT NULL COMMENT '\u5206\u7247\u89C4\u683C\uFF0C\u4F8B\u5982\uFF1A[1,3,5,8,12,16,24,32,40,48,64,80,96,128]',\n    `replicas`      json NOT NULL COMMENT '\u526F\u672C\u89C4\u683C\uFF0C\u4F8B\u5982\uFF1A[1,2,3,4,5,6,7,8,9,12]',\n    `created_at`    datetime DEFAULT NULL COMMENT '\u521B\u5EFA\u65F6\u95F4',\n    `updated_at`    datetime DEFAULT NULL COMMENT '\u66F4\u65B0\u65F6\u95F4',\n    PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='\u552E\u5356\u89C4\u683C\u914D\u7F6E';\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5176\u4E2D\u7684 ",(0,s.jsx)(n.code,{children:"resources, shards, replicas"})," \u6211\u4EEC\u5B9A\u4E49\u4E3A ",(0,s.jsx)(n.code,{children:"json"})," \u683C\u5F0F\uFF0C\u76EE\u7684\u662F\u53EF\u4EE5\u5B58\u50A8\u81EA\u5B9A\u4E49\u7684\u8D44\u6E90\u3001\u5206\u7247\u3001\u526F\u672C\u89C4\u683C\u5217\u8868\uFF08\u975E\u987A\u5E8F\u6027\uFF09\u3002\u90A3\u4E48\u6211\u4EEC\u7684 ",(0,s.jsx)(n.code,{children:"go struct"})," \u5B9A\u4E49\u5982\u4E0B\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// SellSpec \u662F\u901A\u8FC7GoFrame\u5DE5\u5177\u81EA\u52A8\u751F\u6210\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u7531\u5DE5\u5177\u7EF4\u62A4\u3002\ntype SellSpec struct {\n    Id        uint        `description:"\u4E3B\u952E"`\n    Product   string      `description:"\u4EA7\u54C1\u540D\u79F0"`\n    Resources string      `description:"\u8D44\u6E90\u89C4\u683C(cpu:memory)\uFF0C\u4F8B\u5982\uFF1A[\\"0:0.25\\", \\"0:1\\", \\"1:2\\"]"`\n    DiskMin   int         `description:"\u78C1\u76D8\u6700\u5C0F\u5BB9\u91CF"`\n    DiskMax   int         `description:"\u78C1\u76D8\u6700\u5927\u5BB9\u91CF"`\n    DiskStep  int         `description:"\u78C1\u76D8\u9012\u589E\u5927\u5C0F"`\n    Shards    string      `description:"\u5206\u7247\u89C4\u683C\uFF0C\u4F8B\u5982\uFF1A[1,3,5,8,12,16,24,32,40,48,64,80,96,128]"`\n    Replicas  string      `description:"\u526F\u672C\u89C4\u683C\uFF0C\u4F8B\u5982\uFF1A[1,2,3,4,5,6,7,8,9,12]"`\n    CreatedAt *gtime.Time `description:"\u521B\u5EFA\u65F6\u95F4"`\n    UpdatedAt *gtime.Time `description:"\u66F4\u65B0\u65F6\u95F4"`\n}\n\n// SellSpecItem \u662F\u6269\u5C55entity\u7684\u81EA\u5B9A\u4E49\u6570\u636E\u7ED3\u6784\uFF0C\n// \u5176\u4E2D\u90E8\u5206\u5B57\u6BB5Resources/Shards/Replicas\u88AB\u8986\u76D6\u4E3A\u4E86\u6570\u7EC4\u7C7B\u578B\uFF0C\u65B9\u4FBFORM\u64CD\u4F5C\u65F6\u81EA\u52A8\u8FDB\u884C\u7C7B\u578B\u8F6C\u6362\u3002\ntype SellSpecItem struct {\n    entity.SellSpec\n    Resources []string `dc:"\u8D44\u6E90\u89C4\u683C"`\n    Shards    []int    `dc:"\u5206\u7247\u89C4\u683C"`\n    Replicas  []int    `dc:"\u526F\u672C\u89C4\u683C"`\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u90A3\u4E48\u5728\u7A0B\u5E8F\u4E2D\u6211\u4EEC\u53EF\u4EE5\u8FD9\u4E48\u6765\u5199\u5165\u548C\u67E5\u8BE2\u6570\u636E\u8BB0\u5F55\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u6570\u636E\u5199\u5165\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'_, err = dao.SellSpec.Ctx(ctx).Data(v1.SellSpecItem{\n    SellSpec: entity.SellSpec{\n        Product:  "redis",\n        DiskMin:  50,\n        DiskMax:  1000,\n        DiskStep: 10,\n    },\n    Resources: []string{"1:2", "2:4", "4:8"},\n    Shards:    []int{1, 3, 5, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 128},\n    Replicas:  []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 12},\n}).Insert()\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u6570\u636E\u67E5\u8BE2\uFF0C ",(0,s.jsx)(n.code,{children:"ORM"})," \u7EC4\u4EF6\u5C06\u4F1A\u81EA\u52A8\u5730\u5C06\u6570\u636E\u8868\u4E2D\u7684\u8BB0\u5F55\u8F6C\u6362\u4E3A ",(0,s.jsx)(n.code,{children:"go struct"})," \u5BF9\u5E94\u7684\u6570\u7EC4\u7C7B\u578B\u5C5E\u6027\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"var items []v1.SellSpecItem\nerr = dao.SellSpec.Ctx(ctx).Scan(&items)\n"})})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},625396:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/9876558f2195bcdad4d03060e9a15161-67481f212d3ac31da59eb91f515b4e80.png"},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return c}});var i=t(667294);let s={},r=i.createContext(s);function c(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);