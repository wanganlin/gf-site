"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["73045"],{223607:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>i,default:()=>c,assets:()=>d,toc:()=>u,frontMatter:()=>s});var r=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-AllAndCount","title":"ORM\u67E5\u8BE2-AllAndCount","description":"\u8BE5\u65B9\u6CD5\u4ECE v2.5.0 \u7248\u672C\u5F00\u59CB\u63D0\u4F9B\uFF0C\u7528\u4E8E\u540C\u65F6\u67E5\u8BE2\u6570\u636E\u8BB0\u5F55\u5217\u8868\u53CA\u603B\u6570\u91CF\uFF0C\u4E00\u822C\u7528\u4E8E\u5206\u9875\u67E5\u8BE2\u573A\u666F\u4E2D\uFF0C\u7B80\u5316\u5206\u9875\u67E5\u8BE2\u903B\u8F91\u3002","source":"@site/versioned_docs/version-2.5.x/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-AllAndCount.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2","slug":"/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-AllAndCount","permalink":"/en/2.5.x/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-AllAndCount","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.5.x/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-AllAndCount.md","tags":[],"version":"2.5.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":2,"frontMatter":{"title":"ORM\u67E5\u8BE2-AllAndCount","sidebar_position":2,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"ORM\u67E5\u8BE2-All/One/Array/Value/Count","permalink":"/en/2.5.x/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-AllOneArrayValueCount"},"next":{"title":"ORM\u67E5\u8BE2-Scan","permalink":"/en/2.5.x/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-Scan"}}'),o=t("785893"),l=t("250065");let s={title:"ORM\u67E5\u8BE2-AllAndCount",sidebar_position:2,hide_title:!0},i=void 0,d={},u=[];function a(e){let n={code:"code",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["\u8BE5\u65B9\u6CD5\u4ECE ",(0,o.jsx)(n.code,{children:"v2.5.0"})," \u7248\u672C\u5F00\u59CB\u63D0\u4F9B\uFF0C\u7528\u4E8E\u540C\u65F6\u67E5\u8BE2\u6570\u636E\u8BB0\u5F55\u5217\u8868\u53CA\u603B\u6570\u91CF\uFF0C\u4E00\u822C\u7528\u4E8E\u5206\u9875\u67E5\u8BE2\u573A\u666F\u4E2D\uFF0C\u7B80\u5316\u5206\u9875\u67E5\u8BE2\u903B\u8F91\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u65B9\u6CD5\u5B9A\u4E49\uFF1A"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'// AllAndCount retrieves all records and the total count of records from the model.\n// If useFieldForCount is true, it will use the fields specified in the model for counting;\n// otherwise, it will use a constant value of 1 for counting.\n// It returns the result as a slice of records, the total count of records, and an error if any.\n// The where parameter is an optional list of conditions to use when retrieving records.\n//\n// Example:\n//\n//    var model Model\n//    var result Result\n//    var count int\n//    where := []interface{}{"name = ?", "John"}\n//    result, count, err := model.AllAndCount(true)\n//    if err != nil {\n//        // Handle error.\n//    }\n//    fmt.Println(result, count)\nfunc (m *Model) AllAndCount(useFieldForCount bool) (result Result, totalCount int, err error)\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u5728\u65B9\u6CD5\u5185\u90E8\u67E5\u8BE2\u603B\u6570\u91CF\u65F6\uFF0C\u5C06\u4F1A\u5FFD\u7565\u67E5\u8BE2\u4E2D\u7684 ",(0,o.jsx)(n.code,{children:"Limit/Page"})," \u64CD\u4F5C\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u4F7F\u7528\u793A\u4F8B\uFF1A"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'// SELECT `uid`,`name` FROM `user` WHERE `status`=\'deleted\' LIMIT 0,10\n// SELECT COUNT(`uid`,`name`) FROM `user` WHERE `status`=\'deleted\'\nall, count, err := Model("user").Fields("uid", "name").Where("status", "deleted").Limit(0, 10).AllAndCount(true)\n\n// SELECT `uid`,`name` FROM `user` WHERE `status`=\'deleted\' LIMIT 0,10\n// SELECT COUNT(1) FROM `user` WHERE `status`=\'deleted\'\nall, count, err := Model("user").Fields("uid", "name").Where("status", "deleted").Limit(0, 10).AllAndCount(false)\n'})})]})}function c(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return s}});var r=t(667294);let o={},l=r.createContext(o);function s(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);