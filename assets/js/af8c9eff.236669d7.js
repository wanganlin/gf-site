"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["71406"],{988612:function(e,n,o){o.r(n),o.d(n,{metadata:()=>r,contentTitle:()=>s,default:()=>g,assets:()=>c,toc:()=>l,frontMatter:()=>d});var r=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027/ORM\u9AD8\u7EA7\u7279\u6027-\u7C7B\u578B\u8F6C\u6362","title":"ORM\u9AD8\u7EA7\u7279\u6027-\u7C7B\u578B\u8F6C\u6362","description":"\u4F7F\u7528GoFrame\u6846\u67B6\u4E2D\u7684gdb\u6A21\u5757\u8FDB\u884CORM\u9AD8\u7EA7\u7279\u6027\u5B9E\u73B0\uFF0C\u91CD\u70B9\u662F\u5728\u6570\u636E\u5E93\u8BB0\u5F55\u7ED3\u679C\u7684\u6570\u636E\u7C7B\u578B\u8F6C\u6362\u529F\u80FD\u3002gdb\u6A21\u5757\u7075\u6D3B\u652F\u6301\u591A\u79CD\u6570\u636E\u7C7B\u578B\u7684\u8F6C\u6362\uFF0C\u5E76\u901A\u8FC7\u793A\u4F8B\u5C55\u793A\u4E86\u5982\u4F55\u5728Go\u4EE3\u7801\u4E2D\u5B9E\u73B0\u5BF9\u6570\u636E\u5E93\u8868\u4E2D\u5546\u54C1\u4FE1\u606F\u7684\u83B7\u53D6\u548C\u5904\u7406\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027/ORM\u9AD8\u7EA7\u7279\u6027-\u7C7B\u578B\u8F6C\u6362.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027","slug":"/docs/core/gdb-senior-type-converting","permalink":"/2.7.x/docs/core/gdb-senior-type-converting","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027/ORM\u9AD8\u7EA7\u7279\u6027-\u7C7B\u578B\u8F6C\u6362.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":7,"frontMatter":{"slug":"/docs/core/gdb-senior-type-converting","title":"ORM\u9AD8\u7EA7\u7279\u6027-\u7C7B\u578B\u8F6C\u6362","sidebar_position":7,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","ORM","\u7C7B\u578B\u8F6C\u6362","gdb","gvar.Var","\u6570\u636E\u5E93\u64CD\u4F5C","\u6570\u636E\u7ED3\u6784","\u5546\u54C1\u8868","\u6570\u636E\u7C7B\u578B\u8F6C\u6362"],"description":"\u4F7F\u7528GoFrame\u6846\u67B6\u4E2D\u7684gdb\u6A21\u5757\u8FDB\u884CORM\u9AD8\u7EA7\u7279\u6027\u5B9E\u73B0\uFF0C\u91CD\u70B9\u662F\u5728\u6570\u636E\u5E93\u8BB0\u5F55\u7ED3\u679C\u7684\u6570\u636E\u7C7B\u578B\u8F6C\u6362\u529F\u80FD\u3002gdb\u6A21\u5757\u7075\u6D3B\u652F\u6301\u591A\u79CD\u6570\u636E\u7C7B\u578B\u7684\u8F6C\u6362\uFF0C\u5E76\u901A\u8FC7\u793A\u4F8B\u5C55\u793A\u4E86\u5982\u4F55\u5728Go\u4EE3\u7801\u4E2D\u5B9E\u73B0\u5BF9\u6570\u636E\u5E93\u8868\u4E2D\u5546\u54C1\u4FE1\u606F\u7684\u83B7\u53D6\u548C\u5904\u7406\u3002"},"sidebar":"mainSidebar","previous":{"title":"ORM\u9AD8\u7EA7\u7279\u6027-\u7C7B\u578B\u8BC6\u522B","permalink":"/2.7.x/docs/core/gdb-senior-type-recognization"},"next":{"title":"ORM\u9AD8\u7EA7\u7279\u6027-\u8FDE\u63A5\u6C60\u72B6\u6001","permalink":"/2.7.x/docs/core/gdb-senior-connection-pool"}}'),t=o("785893"),i=o("250065");let d={slug:"/docs/core/gdb-senior-type-converting",title:"ORM\u9AD8\u7EA7\u7279\u6027-\u7C7B\u578B\u8F6C\u6362",sidebar_position:7,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","ORM","\u7C7B\u578B\u8F6C\u6362","gdb","gvar.Var","\u6570\u636E\u5E93\u64CD\u4F5C","\u6570\u636E\u7ED3\u6784","\u5546\u54C1\u8868","\u6570\u636E\u7C7B\u578B\u8F6C\u6362"],description:"\u4F7F\u7528GoFrame\u6846\u67B6\u4E2D\u7684gdb\u6A21\u5757\u8FDB\u884CORM\u9AD8\u7EA7\u7279\u6027\u5B9E\u73B0\uFF0C\u91CD\u70B9\u662F\u5728\u6570\u636E\u5E93\u8BB0\u5F55\u7ED3\u679C\u7684\u6570\u636E\u7C7B\u578B\u8F6C\u6362\u529F\u80FD\u3002gdb\u6A21\u5757\u7075\u6D3B\u652F\u6301\u591A\u79CD\u6570\u636E\u7C7B\u578B\u7684\u8F6C\u6362\uFF0C\u5E76\u901A\u8FC7\u793A\u4F8B\u5C55\u793A\u4E86\u5982\u4F55\u5728Go\u4EE3\u7801\u4E2D\u5B9E\u73B0\u5BF9\u6570\u636E\u5E93\u8868\u4E2D\u5546\u54C1\u4FE1\u606F\u7684\u83B7\u53D6\u548C\u5904\u7406\u3002"},s=void 0,c={},l=[];function a(e){let n={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"gdb"})," \u7684\u6570\u636E\u8BB0\u5F55\u7ED3\u679C\uFF08 ",(0,t.jsx)(n.code,{children:"Value"}),"\uFF09\u652F\u6301\u975E\u5E38\u7075\u6D3B\u7684\u7C7B\u578B\u8F6C\u6362\uFF0C\u5E76\u5185\u7F6E\u652F\u6301\u5E38\u7528\u7684\u6570\u5341\u79CD\u6570\u636E\u7C7B\u578B\u7684\u8F6C\u6362\u3002"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Value"})," \u7C7B\u578B\u662F ",(0,t.jsx)(n.code,{children:"*gvar.Var"})," \u7C7B\u578B\u7684\u522B\u540D\uFF0C\u56E0\u6B64\u53EF\u4EE5\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"gvar.Var"})," \u6570\u636E\u7C7B\u578B\u7684\u6240\u6709\u8F6C\u6362\u65B9\u6CD5\uFF0C\u5177\u4F53\u8BF7\u67E5\u770B ",(0,t.jsx)(n.a,{href:"/2.7.x/docs/components/container-gvar",children:"\u6CDB\u578B\u7C7B\u578B-gvar"})," \u7AE0\u8282"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u4F7F\u7528\u793A\u4F8B\uFF1A"}),"\n",(0,t.jsx)(n.p,{children:"\u9996\u5148\uFF0C\u6570\u636E\u8868\u5B9A\u4E49\u5982\u4E0B\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"# \u5546\u54C1\u8868\nCREATE TABLE `goods` (\n  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,\n  `title` varchar(300) NOT NULL COMMENT '\u5546\u54C1\u540D\u79F0',\n  `price` decimal(10,2) NOT NULL COMMENT '\u5546\u54C1\u4EF7\u683C',\n  ...\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5176\u6B21\uFF0C\u6570\u636E\u8868\u4E2D\u7684\u6570\u636E\u5982\u4E0B\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"id   title     price\n1    IPhoneX   5999.99\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u6700\u540E\uFF0C\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'if r, err := g.Model("goods").FindOne(1); err == nil {\n    fmt.Printf("goods    id: %d\\n",   r["id"].Int())\n    fmt.Printf("goods title: %s\\n",   r["title"].String())\n    fmt.Printf("goods proce: %.2f\\n", r["price"].Float32())\n} else {\n    g.Log().Error(gctx.New(), err)\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u6267\u884C\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"goods    id: 1\ngoods title: IPhoneX\ngoods proce: 5999.99\n"})})]})}function g(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return s},a:function(){return d}});var r=o(667294);let t={},i=r.createContext(t);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);