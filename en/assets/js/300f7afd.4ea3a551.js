"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[59270],{303702:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>t,default:()=>a,frontMatter:()=>s,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-LeftJoinRightJoinInnerJoin","title":"ORM\u67e5\u8be2-LeftJoin/RightJoin/InnerJoin","description":"\u672c\u6587\u6863\u4ecb\u7ecd\u4e86\u5728GoFrame\u6846\u67b6\u4e2d\u5982\u4f55\u4f7f\u7528ORM\u8fdb\u884cLeftJoin\u3001RightJoin\u548cInnerJoin\u67e5\u8be2\uff0c\u5305\u62ec\u4f7f\u7528\u4e0d\u540c\u7684\u5173\u8054\u67e5\u8be2\u65b9\u6cd5\u53ca\u5176\u5e94\u7528\u573a\u666f\u3002\u6587\u4e2d\u5f3a\u8c03\u5728\u5927\u6570\u636e\u91cf\u548c\u9ad8\u5e76\u53d1\u73af\u5883\u4e2d\u8c28\u614e\u4f7f\u7528Join\u64cd\u4f5c\uff0c\u63a8\u8350\u4f7f\u7528\u4ee3\u7801\u5b9e\u73b0\u6570\u636e\u805a\u5408\u3002\u6b64\u5916\uff0c\u8fd8\u63d0\u4f9b\u4e86\u901a\u8fc7\u81ea\u5b9a\u4e49\u6570\u636e\u8868\u522b\u540d\u548c\u5b57\u6bb5\u64cd\u4f5c\u7b26\u8fdb\u884cjoin\u67e5\u8be2\u7684\u793a\u4f8b\uff0c\u5e76\u7ed3\u5408dao\u5c55\u793a\u5177\u4f53\u7684\u4f7f\u7528\u65b9\u6cd5\u3002","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-LeftJoinRightJoinInnerJoin.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2","slug":"/docs/core/gdb-chaining-query-join","permalink":"/en/docs/core/gdb-chaining-query-join","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-LeftJoinRightJoinInnerJoin.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731055597000,"sidebarPosition":5,"frontMatter":{"slug":"/docs/core/gdb-chaining-query-join","title":"ORM\u67e5\u8be2-LeftJoin/RightJoin/InnerJoin","sidebar_position":5,"hide_title":true,"keywords":["ORM\u67e5\u8be2","LeftJoin","RightJoin","InnerJoin","GoFrame","\u5173\u8054\u67e5\u8be2","\u6570\u636e\u8868\u522b\u540d","\u5b57\u6bb5\u64cd\u4f5c\u7b26","\u8054\u8868\u67e5\u8be2","\u6570\u636e\u805a\u5408"],"description":"\u672c\u6587\u6863\u4ecb\u7ecd\u4e86\u5728GoFrame\u6846\u67b6\u4e2d\u5982\u4f55\u4f7f\u7528ORM\u8fdb\u884cLeftJoin\u3001RightJoin\u548cInnerJoin\u67e5\u8be2\uff0c\u5305\u62ec\u4f7f\u7528\u4e0d\u540c\u7684\u5173\u8054\u67e5\u8be2\u65b9\u6cd5\u53ca\u5176\u5e94\u7528\u573a\u666f\u3002\u6587\u4e2d\u5f3a\u8c03\u5728\u5927\u6570\u636e\u91cf\u548c\u9ad8\u5e76\u53d1\u73af\u5883\u4e2d\u8c28\u614e\u4f7f\u7528Join\u64cd\u4f5c\uff0c\u63a8\u8350\u4f7f\u7528\u4ee3\u7801\u5b9e\u73b0\u6570\u636e\u805a\u5408\u3002\u6b64\u5916\uff0c\u8fd8\u63d0\u4f9b\u4e86\u901a\u8fc7\u81ea\u5b9a\u4e49\u6570\u636e\u8868\u522b\u540d\u548c\u5b57\u6bb5\u64cd\u4f5c\u7b26\u8fdb\u884cjoin\u67e5\u8be2\u7684\u793a\u4f8b\uff0c\u5e76\u7ed3\u5408dao\u5c55\u793a\u5177\u4f53\u7684\u4f7f\u7528\u65b9\u6cd5\u3002"},"sidebar":"mainSidebar","previous":{"title":"ORM\u67e5\u8be2-ScanAndCount","permalink":"/en/docs/core/gdb-chaining-query-scan-and-count"},"next":{"title":"ORM\u67e5\u8be2-Group/Order/Having","permalink":"/en/docs/core/gdb-chaining-query-group-order-having"}}');var o=i(474848),d=i(28453);const s={slug:"/docs/core/gdb-chaining-query-join",title:"ORM\u67e5\u8be2-LeftJoin/RightJoin/InnerJoin",sidebar_position:5,hide_title:!0,keywords:["ORM\u67e5\u8be2","LeftJoin","RightJoin","InnerJoin","GoFrame","\u5173\u8054\u67e5\u8be2","\u6570\u636e\u8868\u522b\u540d","\u5b57\u6bb5\u64cd\u4f5c\u7b26","\u8054\u8868\u67e5\u8be2","\u6570\u636e\u805a\u5408"],description:"\u672c\u6587\u6863\u4ecb\u7ecd\u4e86\u5728GoFrame\u6846\u67b6\u4e2d\u5982\u4f55\u4f7f\u7528ORM\u8fdb\u884cLeftJoin\u3001RightJoin\u548cInnerJoin\u67e5\u8be2\uff0c\u5305\u62ec\u4f7f\u7528\u4e0d\u540c\u7684\u5173\u8054\u67e5\u8be2\u65b9\u6cd5\u53ca\u5176\u5e94\u7528\u573a\u666f\u3002\u6587\u4e2d\u5f3a\u8c03\u5728\u5927\u6570\u636e\u91cf\u548c\u9ad8\u5e76\u53d1\u73af\u5883\u4e2d\u8c28\u614e\u4f7f\u7528Join\u64cd\u4f5c\uff0c\u63a8\u8350\u4f7f\u7528\u4ee3\u7801\u5b9e\u73b0\u6570\u636e\u805a\u5408\u3002\u6b64\u5916\uff0c\u8fd8\u63d0\u4f9b\u4e86\u901a\u8fc7\u81ea\u5b9a\u4e49\u6570\u636e\u8868\u522b\u540d\u548c\u5b57\u6bb5\u64cd\u4f5c\u7b26\u8fdb\u884cjoin\u67e5\u8be2\u7684\u793a\u4f8b\uff0c\u5e76\u7ed3\u5408dao\u5c55\u793a\u5177\u4f53\u7684\u4f7f\u7528\u65b9\u6cd5\u3002"},t=void 0,u={},l=[{value:"<code>LeftJoin/RightJoin/InnerJoin</code>",id:"leftjoinrightjoininnerjoin",level:2},{value:"\u81ea\u5b9a\u4e49\u6570\u636e\u8868\u522b\u540d",id:"\u81ea\u5b9a\u4e49\u6570\u636e\u8868\u522b\u540d",level:2},{value:"<code>LeftJoinOnFields/RightJoinOnFields/InnerJoinOnFields</code>",id:"leftjoinonfieldsrightjoinonfieldsinnerjoinonfields",level:2},{value:"\u7ed3\u5408 <code>dao</code> \u4f7f\u7528\u793a\u4f8b",id:"\u7ed3\u5408-dao-\u4f7f\u7528\u793a\u4f8b",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"leftjoinrightjoininnerjoin",children:(0,o.jsx)(n.code,{children:"LeftJoin/RightJoin/InnerJoin"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"LeftJoin"})," \u5de6\u5173\u8054\u67e5\u8be2\uff1b"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"RightJoin"})," \u53f3\u5173\u8054\u67e5\u8be2\uff1b"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"InnerJoin"})," \u5185\u5173\u8054\u67e5\u8be2\uff1b"]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["\u5176\u5b9e\u6211\u4eec\u5e76\u4e0d\u63a8\u8350\u4f7f\u7528 ",(0,o.jsx)(n.code,{children:"Join"})," \u8fdb\u884c\u8054\u8868\u67e5\u8be2\uff0c\u7279\u522b\u662f\u5728\u6570\u636e\u91cf\u6bd4\u8f83\u5927\u3001\u5e76\u53d1\u8bf7\u6c42\u91cf\u6bd4\u8f83\u9ad8\u7684\u573a\u666f\u4e2d\uff0c\u5bb9\u6613\u4ea7\u751f\u6027\u80fd\u95ee\u9898\uff0c\u4e5f\u5bb9\u6613\u63d0\u9ad8\u7ef4\u62a4\u7684\u590d\u6742\u5ea6\u3002\u5efa\u8bae\u60a8\u5728\u786e\u5b9a\u6709\u6b64\u5fc5\u8981\u7684\u573a\u666f\u4e0b\u4f7f\u7528\u3002\n\u6b64\u5916\uff0c\u60a8\u4e5f\u53ef\u4ee5\u53c2\u8003\n",(0,o.jsx)(n.a,{href:"/en/docs/core/gdb-chaining-relation-scan-list",children:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u6a21\u578b\u5173\u8054"}),"\n\u7ae0\u8282\uff0c\u6570\u636e\u5e93\u53ea\u8d1f\u8d23\u5b58\u50a8\u6570\u636e\u548c\u7b80\u5355\u7684\u5355\u8868\u64cd\u4f5c\uff0c\u901a\u8fc7 ",(0,o.jsx)(n.code,{children:"ORM"})," \u63d0\u4f9b\u7684\u529f\u80fd\u5728\u4ee3\u7801\u5c42\u9762\u5b9e\u73b0\u6570\u636e\u805a\u5408\u3002"]})}),"\n",(0,o.jsx)(n.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'// \u67e5\u8be2\u7b26\u5408\u6761\u4ef6\u7684\u5355\u6761\u8bb0\u5f55(\u7b2c\u4e00\u6761)\n// SELECT u.*,ud.site FROM user u LEFT JOIN user_detail ud ON u.uid=ud.uid WHERE u.uid=1 LIMIT 1\ng.Model("user u").LeftJoin("user_detail ud", "u.uid=ud.uid").Fields("u.*,ud.site").Where("u.uid", 1).One()\n\n// \u67e5\u8be2\u6307\u5b9a\u5b57\u6bb5\u503c\n// SELECT ud.site FROM user u RIGHT JOIN user_detail ud ON u.uid=ud.uid WHERE u.uid=1 LIMIT 1\ng.Model("user u").RightJoin("user_detail ud", "u.uid=ud.uid").Fields("ud.site").Where("u.uid", 1).Value()\n\n// \u5206\u7ec4\u53ca\u6392\u5e8f\n// SELECT u.*,ud.city FROM user u INNER JOIN user_detail ud ON u.uid=ud.uid GROUP BY city ORDER BY register_time asc\ng.Model("user u").InnerJoin("user_detail ud", "u.uid=ud.uid").Fields("u.*,ud.city").Group("city").Order("register_time asc").All()\n\n// \u4e0d\u4f7f\u7528join\u7684\u8054\u8868\u67e5\u8be2\n// SELECT u.*,ud.city FROM user u,user_detail ud WHERE u.uid=ud.uid\ng.Model("user u,user_detail ud").Where("u.uid=ud.uid").Fields("u.*,ud.city").All()\n'})}),"\n",(0,o.jsx)(n.h2,{id:"\u81ea\u5b9a\u4e49\u6570\u636e\u8868\u522b\u540d",children:"\u81ea\u5b9a\u4e49\u6570\u636e\u8868\u522b\u540d"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'// SELECT * FROM `user` AS u LEFT JOIN `user_detail` as ud ON(ud.id=u.id) WHERE u.id=1 LIMIT 1\ng.Model("user", "u").LeftJoin("user_detail", "ud", "ud.id=u.id").Where("u.id", 1).One()\ng.Model("user").As("u").LeftJoin("user_detail", "ud", "ud.id=u.id").Where("u.id", 1).One()\n'})}),"\n",(0,o.jsx)(n.h2,{id:"leftjoinonfieldsrightjoinonfieldsinnerjoinonfields",children:(0,o.jsx)(n.code,{children:"LeftJoinOnFields/RightJoinOnFields/InnerJoinOnFields"})}),"\n",(0,o.jsx)(n.p,{children:"LeftJoinOnFields/RightJoinOnFields/InnerJoinOnFields \u8fd9\u4e09\u4e2a\u65b9\u6cd5\u53ef\u4ee5\u6307\u5b9a\u5b57\u6bb5\u548c\u64cd\u4f5c\u7b26\u8fdb\u884c join \u67e5\u8be2\uff0c\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'// \u67e5\u8be2\u7b26\u5408\u6761\u4ef6\u7684\u5355\u6761\u8bb0\u5f55(\u7b2c\u4e00\u6761)\n// SELECT user.*,user_detail.address FROM user LEFT JOIN user_detail ON (user.id = user_detail.uid) WHERE user.id=1 LIMIT 1\ng.Model("user").LeftJoinOnFields("user_detail", "id", "=", "uid").Fields("user.*,user_detail.address").Where("id", 1).One()\n\n// \u67e5\u8be2\u591a\u6761\u8bb0\u5f55\n// SELECT user.*,user_detail.address FROM user RIGHT JOIN user_detail ON (user.id = user_detail.uid)\ng.Model("user").RightJoinOnFields("user_detail", "id", "=", "uid").Fields("user.*,user_detail.address").All()\n'})}),"\n",(0,o.jsxs)(n.h2,{id:"\u7ed3\u5408-dao-\u4f7f\u7528\u793a\u4f8b",children:["\u7ed3\u5408 ",(0,o.jsx)(n.code,{children:"dao"})," \u4f7f\u7528\u793a\u4f8b"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'// SELECT resource_task_schedule.id,...,time_window.time_window\n// FROM `resource_task_schedule`\n// LEFT JOIN `time_window` ON (`resource_task_schedule`.`resource_id`=`time_window`.`resource_id`)\n// WHERE (time_window.`status`="valid") AND (`time_window`.`start_time` <= 3600)\nvar (\n    orm                = dao.ResourceTaskSchedule.Ctx(ctx)\n    tsTable            = dao.ResourceTaskSchedule.Table()\n    tsCls              = dao.ResourceTaskSchedule.Columns()\n    twTable            = dao.TimeWindow.Table()\n    twCls              = dao.TimeWindow.Columns()\n    scheduleItems      []scheduleItem\n)\norm = orm.FieldsPrefix(tsTable, tsCls)\norm = orm.FieldsPrefix(twTable, twCls.TimeWindow)\norm = orm.LeftJoinOnField(twTable, twCls.ResourceId)\norm = orm.WherePrefix(twTable, twCls.Status, "valid")\norm = orm.WherePrefixLTE(twTable, twCls.StartTime, 3600)\nerr = orm.Scan(&scheduleItems)\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'// SELECT DISTINCT resource_info.* FROM `resource_info`\n// LEFT JOIN `resource_network` ON (`resource_info`.`resource_id`=`resource_network`.`resource_id`)\n// WHERE (`resource_info`.`resource_id` like \'%10.0.1.3%\')\n// or (`resource_info`.`resource_name` like \'%10.0.1.3%\')\n// or (`resource_network`.`vip`like \'%10.0.1.3%\')\n// ORDER BY `id` Desc LIMIT 0,2\nvar (\n    orm    = dao.ResourceInfo.Ctx(ctx).OmitEmpty()\n    rTable = dao.ResourceInfo.Table()\n    rCls   = dao.ResourceInfo.Columns()\n    nTable = dao.ResourceNetwork.Table()\n    nCls   = dao.ResourceNetwork.Columns()\n)\norm = orm.LeftJoinOnField(nTable, rCls.ResourceId)\norm = orm.WherePrefix(rTable, do.ResourceInfo{\n    AppId:        req.AppIds,\n    ResourceId:   req.ResourceIds,\n    Region:       req.Regions,\n    Zone:         req.Zones,\n    ResourceName: req.ResourceNames,\n    Status:       req.Statuses,\n    BusinessType: req.Products,\n    Engine:       req.Engines,\n    Version:      req.Versions,\n})\norm = orm.WherePrefix(nTable, do.ResourceNetwork{\n    Vip:      req.Vips,\n    VpcId:    req.VpcIds,\n    SubnetId: req.SubnetIds,\n})\n// Fuzzy like querying.\nif req.Key != "" {\n    var (\n        keyLike = "%" + req.Key + "%"\n    )\n    whereFormat := fmt.Sprintf(\n        "(`%s`.`%s` like ?) or (`%s`.`%s` like ?) or (`%s`.`%s`like ?) ",\n        rTable, rCls.ResourceId,\n        rTable, rCls.ResourceName,\n        nTable, nCls.Vip,\n    )\n    orm = orm.Where(whereFormat, keyLike, keyLike, keyLike)\n}\n// Resource items.\nerr = orm.Distinct().FieldsPrefix(rTable, "*").Order(req.Order, req.OrderDirection).Limit(req.Offset, req.Limit).Scan(&res.Items)\n'})})]})}function a(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>t});var r=i(296540);const o={},d=r.createContext(o);function s(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);