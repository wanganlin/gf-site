"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["75604"],{539567:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>x,assets:()=>d,toc:()=>o,frontMatter:()=>i});var r=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u65B9\u6CD5\u64CD\u4F5C-\u539F\u751F","title":"ORM\u65B9\u6CD5\u64CD\u4F5C(\u539F\u751F)","description":"\u65B9\u6CD5\u64CD\u4F5C","source":"@site/versioned_docs/version-2.2.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u65B9\u6CD5\u64CD\u4F5C-\u539F\u751F.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM","slug":"/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u65B9\u6CD5\u64CD\u4F5C-\u539F\u751F","permalink":"/2.2.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u65B9\u6CD5\u64CD\u4F5C-\u539F\u751F","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.2.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u65B9\u6CD5\u64CD\u4F5C-\u539F\u751F.md","tags":[],"version":"2.2.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":2,"frontMatter":{"title":"ORM\u65B9\u6CD5\u64CD\u4F5C(\u539F\u751F)","sidebar_position":2,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u6A21\u578B\u5173\u8054-\u9759\u6001\u5173\u8054-With\u7279\u6027","permalink":"/2.2.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C-\u91CD\u70B9/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6A21\u578B\u5173\u8054/\u6A21\u578B\u5173\u8054-\u9759\u6001\u5173\u8054-With\u7279\u6027"},"next":{"title":"ORM\u4E8B\u52A1\u5904\u7406","permalink":"/2.2.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u4E8B\u52A1\u5904\u7406/"}}'),s=t("785893"),c=t("250065");let i={title:"ORM\u65B9\u6CD5\u64CD\u4F5C(\u539F\u751F)",sidebar_position:2,hide_title:!0},l=void 0,d={},o=[{value:"\u65B9\u6CD5\u64CD\u4F5C",id:"\u65B9\u6CD5\u64CD\u4F5C",level:2},{value:"\u64CD\u4F5C\u793A\u4F8B",id:"\u64CD\u4F5C\u793A\u4F8B",level:2},{value:"1. <code>ORM</code> \u5BF9\u8C61",id:"1-orm-\u5BF9\u8C61",level:3},{value:"2. \u6570\u636E\u5199\u5165",id:"2-\u6570\u636E\u5199\u5165",level:3},{value:"3. \u6570\u636E\u67E5\u8BE2(\u5217\u8868)",id:"3-\u6570\u636E\u67E5\u8BE2\u5217\u8868",level:3},{value:"4. \u6570\u636E\u67E5\u8BE2(\u5355\u6761)",id:"4-\u6570\u636E\u67E5\u8BE2\u5355\u6761",level:3},{value:"5. \u6570\u636E\u4FDD\u5B58",id:"5-\u6570\u636E\u4FDD\u5B58",level:3},{value:"6. \u6279\u91CF\u64CD\u4F5C",id:"6-\u6279\u91CF\u64CD\u4F5C",level:3},{value:"7. \u6570\u636E\u66F4\u65B0/\u5220\u9664",id:"7-\u6570\u636E\u66F4\u65B0\u5220\u9664",level:3}];function a(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u65B9\u6CD5\u64CD\u4F5C",children:"\u65B9\u6CD5\u64CD\u4F5C"}),"\n",(0,s.jsxs)(n.p,{children:["\u65B9\u6CD5\u64CD\u4F5C\u7528\u4E8E\u539F\u751F ",(0,s.jsx)(n.code,{children:"SQL"})," \u6267\u884C\uFF0C\u76F8\u5BF9\u94FE\u5F0F\u64CD\u4F5C\u66F4\u504F\u5E95\u5C42\u64CD\u4F5C\u4E00\u4E9B\uFF0C\u5728 ",(0,s.jsx)(n.code,{children:"ORM"})," \u94FE\u5F0F\u64CD\u4F5C\u6267\u884C\u4E0D\u4E86\u592A\u8FC7\u4E8E\u590D\u6742\u7684 ",(0,s.jsx)(n.code,{children:"SQL"})," \u64CD\u4F5C\u65F6\uFF0C\u53EF\u4EE5\u4EA4\u7ED9\u65B9\u6CD5\u64CD\u4F5C\u6765\u5904\u7406\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u63A5\u53E3\u6587\u6863\uFF1A"})," ",(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb",children:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u5E38\u7528\u65B9\u6CD5\uFF1A"})}),"\n",(0,s.jsx)(n.p,{children:"\u672C\u6587\u6863\u7684\u65B9\u6CD5\u5217\u8868\u53EF\u80FD\u6EDE\u540E\u4E8E\u4E8E\u4EE3\u7801\uFF0C\u8BE6\u7EC6\u7684\u65B9\u6CD5\u5217\u8868\u8BF7\u67E5\u770B\u63A5\u53E3\u6587\u6863\uFF0C\u4EE5\u4E0B\u65B9\u6CD5\u4EC5\u4F9B\u53C2\u8003\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"// SQL\u64CD\u4F5C\u65B9\u6CD5\uFF0C\u8FD4\u56DE\u539F\u751F\u7684\u6807\u51C6\u5E93sql\u5BF9\u8C61\nQuery(ctx context.Context, query string, args ...interface{}) (*sql.Rows, error)\nExec(ctx context.Context, query string, args ...interface{}) (sql.Result, error)\nPrepare(ctx context.Context, query string) (*sql.Stmt, error)\n\n// \u6570\u636E\u8868\u8BB0\u5F55\u67E5\u8BE2\uFF1A\n// \u67E5\u8BE2\u5355\u6761\u8BB0\u5F55\u3001\u67E5\u8BE2\u591A\u6761\u8BB0\u5F55\u3001\u83B7\u53D6\u8BB0\u5F55\u5BF9\u8C61\u3001\u67E5\u8BE2\u5355\u4E2A\u5B57\u6BB5\u503C(\u94FE\u5F0F\u64CD\u4F5C\u540C\u7406)\nGetAll(ctx context.Context, sql string, args ...interface{}) (Result, error)\nGetOne(ctx context.Context, sql string, args ...interface{}) (Record, error)\nGetValue(ctx context.Context, sql string, args ...interface{}) (Value, error)\nGetArray(ctx context.Context, sql string, args ...interface{}) ([]Value, error)\nGetCount(ctx context.Context, sql string, args ...interface{}) (int, error)\nGetScan(ctx context.Context, objPointer interface{}, sql string, args ...interface{}) error\n\n// \u6570\u636E\u5355\u6761\u64CD\u4F5C\nInsert(ctx context.Context, table string, data interface{}, batch...int) (sql.Result, error)\nReplace(ctx context.Context, table string, data interface{}, batch...int) (sql.Result, error)\nSave(ctx context.Context, table string, data interface{}, batch...int) (sql.Result, error)\n\n// \u6570\u636E\u4FEE\u6539/\u5220\u9664\nUpdate(ctx context.Context, table string, data interface{}, condition interface{}, args ...interface{}) (sql.Result, error)\nDelete(ctx context.Context, table string, condition interface{}, args ...interface{}) (sql.Result, error)\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u7B80\u8981\u8BF4\u660E\uFF1A"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Query"})," \u662F\u539F\u59CB\u7684\u6570\u636E\u67E5\u8BE2\u65B9\u6CD5\uFF0C\u8FD4\u56DE\u7684\u662F\u539F\u751F\u7684\u6807\u51C6\u5E93\u7684\u7ED3\u679C\u96C6\u5BF9\u8C61\uFF0C\u9700\u8981\u81EA\u884C\u89E3\u6790\u3002\u63A8\u8350\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"Get*"})," \u65B9\u6CD5\uFF0C\u4F1A\u5BF9\u7ED3\u679C\u81EA\u52A8\u505A\u89E3\u6790\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Exec"})," \u65B9\u6CD5\u7528\u4E8E\u5199\u5165/\u66F4\u65B0\u7684 ",(0,s.jsx)(n.code,{children:"SQL"})," \u7684\u64CD\u4F5C\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\xa0\u5728\u6267\u884C\u6570\u636E\u67E5\u8BE2\u65F6\u63A8\u8350\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"Get*"})," \u7CFB\u5217\u67E5\u8BE2\u65B9\u6CD5\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Insert"}),"/ ",(0,s.jsx)(n.code,{children:"Replace"}),"/ ",(0,s.jsx)(n.code,{children:"Save"})," \u65B9\u6CD5\u4E2D\u7684 ",(0,s.jsx)(n.code,{children:"data"})," \u53C2\u6570\u652F\u6301\u7684\u6570\u636E\u7C7B\u578B\u4E3A\uFF1A ",(0,s.jsx)(n.code,{children:"string/map/slice/struct/*struct"}),"\uFF0C\u5F53\u4F20\u9012\u4E3A ",(0,s.jsx)(n.code,{children:"slice"})," \u7C7B\u578B\u65F6\uFF0C\u81EA\u52A8\u8BC6\u522B\u4E3A\u6279\u91CF\u64CD\u4F5C\uFF0C\u6B64\u65F6 ",(0,s.jsx)(n.code,{children:"batch"})," \u53C2\u6570\u6709\u6548\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u64CD\u4F5C\u793A\u4F8B",children:"\u64CD\u4F5C\u793A\u4F8B"}),"\n",(0,s.jsxs)(n.h3,{id:"1-orm-\u5BF9\u8C61",children:["1. ",(0,s.jsx)(n.code,{children:"ORM"})," \u5BF9\u8C61"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// \u83B7\u53D6\u9ED8\u8BA4\u914D\u7F6E\u7684\u6570\u636E\u5E93\u5BF9\u8C61(\u914D\u7F6E\u540D\u79F0\u4E3A"default")\ndb := g.DB()\n\n// \u83B7\u53D6\u914D\u7F6E\u5206\u7EC4\u540D\u79F0\u4E3A"user-center"\u7684\u6570\u636E\u5E93\u5BF9\u8C61\ndb := g.DB("user-center")\n\n// \u4F7F\u7528\u539F\u751F\u5355\u4F8B\u7BA1\u7406\u65B9\u6CD5\u83B7\u53D6\u6570\u636E\u5E93\u5BF9\u8C61\u5355\u4F8B\ndb, err := gdb.Instance()\ndb, err := gdb.Instance("user-center")\n\n// \u6CE8\u610F\u4E0D\u7528\u7684\u65F6\u5019\u4E0D\u9700\u8981\u4F7F\u7528Close\u65B9\u6CD5\u5173\u95ED\u6570\u636E\u5E93\u8FDE\u63A5(\u5E76\u4E14gdb\u4E5F\u6CA1\u6709\u63D0\u4F9BClose\u65B9\u6CD5)\uFF0C\n// \u6570\u636E\u5E93\u5F15\u64CE\u5E95\u5C42\u91C7\u7528\u4E86\u94FE\u63A5\u6C60\u8BBE\u8BA1\uFF0C\u5F53\u94FE\u63A5\u4E0D\u518D\u4F7F\u7528\u65F6\u4F1A\u81EA\u52A8\u5173\u95ED\n'})}),"\n",(0,s.jsx)(n.h3,{id:"2-\u6570\u636E\u5199\u5165",children:"2. \u6570\u636E\u5199\u5165"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'r, err := db.Insert(ctx, "user", gdb.Map {\n    "name": "john",\n})\n'})}),"\n",(0,s.jsx)(n.h3,{id:"3-\u6570\u636E\u67E5\u8BE2\u5217\u8868",children:"3. \u6570\u636E\u67E5\u8BE2(\u5217\u8868)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'list, err := db.GetAll(ctx, "select * from user limit 2")\nlist, err := db.GetAll(ctx, "select * from user where age > ? and name like ?", g.Slice{18, "%john%"})\nlist, err := db.GetAll(ctx, "select * from user where status=?", g.Slice{1})\n'})}),"\n",(0,s.jsx)(n.h3,{id:"4-\u6570\u636E\u67E5\u8BE2\u5355\u6761",children:"4. \u6570\u636E\u67E5\u8BE2(\u5355\u6761)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'one, err := db.GetOne(ctx, "select * from user limit 2")\none, err := db.GetOne(ctx, "select * from user where uid=1000")\none, err := db.GetOne(ctx, "select * from user where uid=?", 1000)\none, err := db.GetOne(ctx, "select * from user where uid=?", g.Slice{1000})\n'})}),"\n",(0,s.jsx)(n.h3,{id:"5-\u6570\u636E\u4FDD\u5B58",children:"5. \u6570\u636E\u4FDD\u5B58"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'r, err := db.Save(ctx, "user", gdb.Map {\n    "uid"  :  1,\n    "name" : "john",\n})\n'})}),"\n",(0,s.jsx)(n.h3,{id:"6-\u6279\u91CF\u64CD\u4F5C",children:"6. \u6279\u91CF\u64CD\u4F5C"}),"\n",(0,s.jsxs)(n.p,{children:["\u5176\u4E2D ",(0,s.jsx)(n.code,{children:"batch"})," \u53C2\u6570\u7528\u4E8E\u6307\u5B9A\u6279\u91CF\u64CD\u4F5C\u4E2D\u5206\u6279\u5199\u5165\u6761\u6570\u6570\u91CF\uFF08\u9ED8\u8BA4\u662F ",(0,s.jsx)(n.code,{children:"10"}),"\uFF09\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'_, err := db.Insert(ctx, "user", gdb.List {\n    {"name": "john_1"},\n    {"name": "john_2"},\n    {"name": "john_3"},\n    {"name": "john_4"},\n}, 10)\n'})}),"\n",(0,s.jsx)(n.h3,{id:"7-\u6570\u636E\u66F4\u65B0\u5220\u9664",children:"7. \u6570\u636E\u66F4\u65B0/\u5220\u9664"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// db.Update/db.Delete \u540C\u7406\n// UPDATE `user` SET `name`=\'john\' WHERE `uid`=10000\nr, err := db.Update(ctx, "user", gdb.Map {"name": "john"}, "uid=?", 10000)\n// UPDATE `user` SET `name`=\'john\' WHERE `uid`=10000\nr, err := db.Update(ctx, "user", "name=\'john\'", "uid=10000")\n// UPDATE `user` SET `name`=\'john\' WHERE `uid`=10000\nr, err := db.Update(ctx, "user", "name=?", "uid=?", "john", 10000)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u6CE8\u610F\uFF0C\u53C2\u6570\u57DF\u652F\u6301\u5E76\u5EFA\u8BAE\u4F7F\u7528\u9884\u5904\u7406\u6A21\u5F0F\uFF08\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"?"})," \u5360\u4F4D\u7B26\uFF09\u8FDB\u884C\u8F93\u5165\uFF0C\u907F\u514D ",(0,s.jsx)(n.code,{children:"SQL"})," \u6CE8\u5165\u98CE\u9669\u3002"]})]})}function x(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var r=t(667294);let s={},c=r.createContext(s);function i(e){let n=r.useContext(c);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);