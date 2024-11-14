"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["49893"],{17341:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>p,assets:()=>d,toc:()=>l,frontMatter:()=>c});var s=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u6700\u4F73\u5B9E\u8DF5","title":"ORM\u6700\u4F73\u5B9E\u8DF5","description":"\u67E5\u8BE2\u65F6\u907F\u514D\u8FD4\u56DE\u5BF9\u8C61\u521D\u59CB\u5316\u53CA sql.ErrNoRows \u5224\u65AD","source":"@site/versioned_docs/version-2.2.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u6700\u4F73\u5B9E\u8DF5.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM","slug":"/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u6700\u4F73\u5B9E\u8DF5","permalink":"/en/2.2.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u6700\u4F73\u5B9E\u8DF5","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.2.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u6700\u4F73\u5B9E\u8DF5.md","tags":[],"version":"2.2.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":10,"frontMatter":{"title":"ORM\u6700\u4F73\u5B9E\u8DF5","sidebar_position":10,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"ORM\u4E0A\u4E0B\u6587\u53D8\u91CF","permalink":"/en/2.2.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u4E0A\u4E0B\u6587\u53D8\u91CF"},"next":{"title":"ORM\u7ED3\u679C\u5904\u7406-\u7ED3\u679C\u7C7B\u578B","permalink":"/en/2.2.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u7ED3\u679C\u5904\u7406/ORM\u7ED3\u679C\u5904\u7406-\u7ED3\u679C\u7C7B\u578B"}}'),t=r("785893"),i=r("250065");let c={title:"ORM\u6700\u4F73\u5B9E\u8DF5",sidebar_position:10,hide_title:!0},o=void 0,d={},l=[{value:"\u67E5\u8BE2\u65F6\u907F\u514D\u8FD4\u56DE\u5BF9\u8C61\u521D\u59CB\u5316\u53CA <code>sql.ErrNoRows</code> \u5224\u65AD",id:"\u67E5\u8BE2\u65F6\u907F\u514D\u8FD4\u56DE\u5BF9\u8C61\u521D\u59CB\u5316\u53CA-sqlerrnorows-\u5224\u65AD",level:2},{value:"\u590D\u6742\u7C7B\u578B\u5C3D\u91CF\u4F7F\u7528 <code>json</code> \u5B58\u50A8\uFF0C\u4FBF\u4E8E <code>Scan</code> \u5230\u5BF9\u8C61\u65F6\u81EA\u52A8\u5316\u8F6C\u6362\uFF0C\u907F\u514D\u81EA\u5B9A\u4E49\u89E3\u6790",id:"\u590D\u6742\u7C7B\u578B\u5C3D\u91CF\u4F7F\u7528-json-\u5B58\u50A8\u4FBF\u4E8E-scan-\u5230\u5BF9\u8C61\u65F6\u81EA\u52A8\u5316\u8F6C\u6362\u907F\u514D\u81EA\u5B9A\u4E49\u89E3\u6790",level:2}];function a(e){let n={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h2,{id:"\u67E5\u8BE2\u65F6\u907F\u514D\u8FD4\u56DE\u5BF9\u8C61\u521D\u59CB\u5316\u53CA-sqlerrnorows-\u5224\u65AD",children:["\u67E5\u8BE2\u65F6\u907F\u514D\u8FD4\u56DE\u5BF9\u8C61\u521D\u59CB\u5316\u53CA ",(0,t.jsx)(n.code,{children:"sql.ErrNoRows"})," \u5224\u65AD"]}),"\n",(0,t.jsxs)(n.p,{children:["\u6267\u884CSQL\u67E5\u8BE2\u65F6\uFF0C\u8BF7\u907F\u514D\u63D0\u524D\u5C06\u67E5\u8BE2\u7ED3\u679C\u521D\u59CB\u5316\uFF0C\u4EE5\u907F\u514D\u7ED3\u6784\u5BF9\u8C61\u9ED8\u8BA4\u503C\u7684\u5F71\u54CD\uFF0C\u907F\u514D\u521B\u5EFA\u4E0D\u5FC5\u8981\u7684\u5BF9\u8C61\u5185\u5B58\u3002\u901A\u8FC7\u8FD4\u56DE\u5BF9\u8C61\u6307\u9488 ",(0,t.jsx)(n.code,{children:"nil"})," \u5224\u65AD\u907F\u514D ",(0,t.jsx)(n.code,{children:"sql.ErrNoRows"})," \u4F7F\u7528\uFF0C\u964D\u4F4E\u4EE3\u7801\u5BF9 ",(0,t.jsx)(n.code,{children:"error"})," \u5904\u7406\u7684\u590D\u6742\u5EA6\u3001\u7EDF\u4E00\u9879\u76EE\u4E2D\u5BF9\u7A7A\u67E5\u8BE2\u7ED3\u679C\u5904\u7406\u903B\u8F91\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u4E00\u4E2A\u53CD\u9762\u4F8B\u5B50\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'func (s *sTask) GetOne(ctx context.Context, id uint64) (out *entity.ResourceTask, err error) {\n    out = new(model.TaskDetail)\n    err = dao.ResourceTask.Ctx(ctx).WherePri(id).Scan(out)\n    if err != nil {\n        if err == sql.ErrNoRows {\n            err = gerror.Newf(`record not found for "%d"`, id)\n        }\n        return\n    }\n    return\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u8BE5\u4F8B\u5B50\u4E2D\uFF0C\u5B9E\u9645\u8FD4\u56DE\u7684 ",(0,t.jsx)(n.code,{children:"out"})," \u5BF9\u8C61\u7531\u4E8E\u5BF9\u8C61\u521D\u59CB\u5316\u7684\u7F18\u6545\u6709\u4E86\u9ED8\u8BA4\u503C\uFF08\u65E0\u8BBASQL\u662F\u5426\u67E5\u8BE2\u5230\u6570\u636E\uFF09\uFF0C\u5E76\u4E14 ",(0,t.jsx)(n.code,{children:"sql.ErrNoRows"})," \u7684\u5224\u65AD\u589E\u52A0\u4E86\u4EE3\u7801\u903B\u8F91\u4E2D\u5BF9 ",(0,t.jsx)(n.code,{children:"error"})," \u5904\u7406\u7684\u590D\u6742\u5EA6\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u5EFA\u8BAE\u6539\u8FDB\u5982\u4E0B\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'func (s *sTask) GetOne(ctx context.Context, id uint64) (out *entity.ResourceTask, err error) {\n    err = dao.ResourceTask.Ctx(ctx).WherePri(id).Scan(&out)\n    if err != nil {\n        return\n    }\n    if out == nil {\n        err = gerror.Newf(`record not found for "%d"`, id)\n    }\n    return\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u6CE8\u610F\u4EE3\u7801\u4E2D ",(0,t.jsx)(n.code,{children:"&out"})," \u7684\u4F7F\u7528\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u66F4\u591A\u7684\u4ECB\u7ECD\u8BF7\u53C2\u8003\uFF1A ",(0,t.jsx)(n.a,{href:"/en/2.2.x/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6-%E9%87%8D%E7%82%B9/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E7%BB%93%E6%9E%9C%E5%A4%84%E7%90%86/ORM%E7%BB%93%E6%9E%9C%E5%A4%84%E7%90%86-%E4%B8%BA%E7%A9%BA%E5%88%A4%E6%96%AD",children:"ORM\u7ED3\u679C\u5904\u7406-\u4E3A\u7A7A\u5224\u65AD"})]}),"\n",(0,t.jsxs)(n.h2,{id:"\u590D\u6742\u7C7B\u578B\u5C3D\u91CF\u4F7F\u7528-json-\u5B58\u50A8\u4FBF\u4E8E-scan-\u5230\u5BF9\u8C61\u65F6\u81EA\u52A8\u5316\u8F6C\u6362\u907F\u514D\u81EA\u5B9A\u4E49\u89E3\u6790",children:["\u590D\u6742\u7C7B\u578B\u5C3D\u91CF\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"json"})," \u5B58\u50A8\uFF0C\u4FBF\u4E8E ",(0,t.jsx)(n.code,{children:"Scan"})," \u5230\u5BF9\u8C61\u65F6\u81EA\u52A8\u5316\u8F6C\u6362\uFF0C\u907F\u514D\u81EA\u5B9A\u4E49\u89E3\u6790"]}),"\n",(0,t.jsx)(n.p,{children:"\u4E3E\u4E00\u4E2A\uD83C\uDF30\u3002\u5047\u5982\u6211\u4EEC\u9700\u8981\u5B9E\u73B0\u4EA7\u54C1\u552E\u5356\u89C4\u683C\u5217\u8868\uFF0C\u5176\u4E2D\u5305\u542B\u53EF\u9009\u62E9\u7684\u5206\u7247\u6570\u91CF\u3001\u5206\u7247\u5BB9\u91CF\u4EE5\u53CA\u526F\u672C\u6570\u91CF\uFF0C\u5982\u4E0B\u56FE\uFF08\u975E\u73B0\u7F51\u4EE3\u7801\uFF0C\u4EC5\u4F9B\u793A\u4F8B\u5B66\u4E60\uFF09\uFF1A"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(798157).Z+"",width:"1710",height:"616"})}),"\n",(0,t.jsx)(n.p,{children:"\u6211\u4EEC\u7684\u8868\u8BBE\u8BA1\u5982\u4E0B\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `sell_spec` (\n    `id`            int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '\u4E3B\u952E',\n    `product`       varchar(45) NOT NULL COMMENT '\u4EA7\u54C1\u540D\u79F0',\n    `resources`     json NOT NULL COMMENT '\u8D44\u6E90\u89C4\u683C(cpu:memory)\uFF0C\u4F8B\u5982\uFF1A[\"0:0.25\", \"0:1\", \"1:2\"]',\n    `disk_min`      int(10) DEFAULT NULL COMMENT '\u78C1\u76D8\u6700\u5C0F\u5BB9\u91CF',\n    `disk_max`      int(10) DEFAULT NULL COMMENT '\u78C1\u76D8\u6700\u5927\u5BB9\u91CF',\n    `disk_step`     int(10) DEFAULT NULL COMMENT '\u78C1\u76D8\u9012\u589E\u5927\u5C0F',\n    `shards`        json NOT NULL COMMENT '\u5206\u7247\u89C4\u683C\uFF0C\u4F8B\u5982\uFF1A[1,3,5,8,12,16,24,32,40,48,64,80,96,128]',\n    `replicas`      json NOT NULL COMMENT '\u526F\u672C\u89C4\u683C\uFF0C\u4F8B\u5982\uFF1A[1,2,3,4,5,6,7,8,9,12]',\n    `created_at`    datetime DEFAULT NULL COMMENT '\u521B\u5EFA\u65F6\u95F4',\n    `updated_at`    datetime DEFAULT NULL COMMENT '\u66F4\u65B0\u65F6\u95F4',\n    PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='\u552E\u5356\u89C4\u683C\u914D\u7F6E';\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5176\u4E2D\u7684 ",(0,t.jsx)(n.code,{children:"resources, shards, replicas"})," \u6211\u4EEC\u5B9A\u4E49\u4E3A ",(0,t.jsx)(n.code,{children:"json"})," \u683C\u5F0F\uFF0C\u76EE\u7684\u662F\u53EF\u4EE5\u5B58\u50A8\u81EA\u5B9A\u4E49\u7684\u8D44\u6E90\u3001\u5206\u7247\u3001\u526F\u672C\u89C4\u683C\u5217\u8868\uFF08\u975E\u987A\u5E8F\u6027\uFF09\u3002\u90A3\u4E48\u6211\u4EEC\u7684 ",(0,t.jsx)(n.code,{children:"go struct"})," \u5B9A\u4E49\u5982\u4E0B\uFF1A"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// SellSpec \u662F\u901A\u8FC7GoFrame\u5DE5\u5177\u81EA\u52A8\u751F\u6210\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u7531\u5DE5\u5177\u7EF4\u62A4\u3002\ntype SellSpec struct {\n    Id        uint        `description:"\u4E3B\u952E"`\n    Product   string      `description:"\u4EA7\u54C1\u540D\u79F0"`\n    Resources string      `description:"\u8D44\u6E90\u89C4\u683C(cpu:memory)\uFF0C\u4F8B\u5982\uFF1A[\\"0:0.25\\", \\"0:1\\", \\"1:2\\"]"`\n    DiskMin   int         `description:"\u78C1\u76D8\u6700\u5C0F\u5BB9\u91CF"`\n    DiskMax   int         `description:"\u78C1\u76D8\u6700\u5927\u5BB9\u91CF"`\n    DiskStep  int         `description:"\u78C1\u76D8\u9012\u589E\u5927\u5C0F"`\n    Shards    string      `description:"\u5206\u7247\u89C4\u683C\uFF0C\u4F8B\u5982\uFF1A[1,3,5,8,12,16,24,32,40,48,64,80,96,128]"`\n    Replicas  string      `description:"\u526F\u672C\u89C4\u683C\uFF0C\u4F8B\u5982\uFF1A[1,2,3,4,5,6,7,8,9,12]"`\n    CreatedAt *gtime.Time `description:"\u521B\u5EFA\u65F6\u95F4"`\n    UpdatedAt *gtime.Time `description:"\u66F4\u65B0\u65F6\u95F4"`\n}\n\n// SellSpecItem \u662F\u6269\u5C55entity\u7684\u81EA\u5B9A\u4E49\u6570\u636E\u7ED3\u6784\uFF0C\u5176\u4E2D\u90E8\u5206\u5B57\u6BB5\u88AB\u8986\u76D6\u4E3A\u4E86\u6570\u7EC4\u7C7B\u578B\u3002\ntype SellSpecItem struct {\n    entity.SellSpec\n    Resources []string `dc:"\u8D44\u6E90\u89C4\u683C"`\n    Shards    []int    `dc:"\u5206\u7247\u89C4\u683C"`\n    Replicas  []int    `dc:"\u526F\u672C\u89C4\u683C"`\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u90A3\u4E48\u5728\u7A0B\u5E8F\u4E2D\u6211\u4EEC\u53EF\u4EE5\u8FD9\u4E48\u6765\u5199\u5165\u548C\u67E5\u8BE2\u6570\u636E\u8BB0\u5F55\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u6570\u636E\u5199\u5165\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'_, err = dao.SellSpec.Ctx(ctx).Data(v1.SellSpecItem{\n    SellSpec: entity.SellSpec{\n        Product:  "redis",\n        DiskMin:  50,\n        DiskMax:  1000,\n        DiskStep: 10,\n    },\n    Resources: []string{"1:2", "2:4", "4:8"},\n    Shards:    []int{1, 3, 5, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 128},\n    Replicas:  []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 12},\n}).Insert()\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u6570\u636E\u67E5\u8BE2"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"var items []v1.SellSpecItem\nerr = dao.SellSpec.Ctx(ctx).Scan(&items)\n"})})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},798157:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/daec9ea03f44d2866051b28e8157e3ef-67481f212d3ac31da59eb91f515b4e80.png"},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return c}});var s=r(667294);let t={},i=s.createContext(t);function c(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);