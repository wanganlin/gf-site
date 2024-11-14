"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["87560"],{547534:function(n,e,o){o.r(e),o.d(e,{metadata:()=>c,contentTitle:()=>d,default:()=>x,assets:()=>l,toc:()=>s,frontMatter:()=>t});var c=JSON.parse('{"id":"\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u534F\u7A0B\u7BA1\u7406-grpool","title":"\u534F\u7A0B\u7BA1\u7406-grpool","description":"\u57FA\u672C\u4ECB\u7ECD","source":"@site/versioned_docs/version-2.4.x/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u534F\u7A0B\u7BA1\u7406-grpool.md","sourceDirName":"\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173","slug":"/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u534F\u7A0B\u7BA1\u7406-grpool","permalink":"/en/2.4.x/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u534F\u7A0B\u7BA1\u7406-grpool","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.4.x/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u534F\u7A0B\u7BA1\u7406-grpool.md","tags":[],"version":"2.4.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":16,"frontMatter":{"title":"\u534F\u7A0B\u7BA1\u7406-grpool","sidebar_position":16,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u6A21\u677F\u5F15\u64CE-gview","permalink":"/en/2.4.x/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u6A21\u677F\u5F15\u64CE-gview"},"next":{"title":"\u6784\u5EFA\u4FE1\u606F-gbuild","permalink":"/en/2.4.x/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u6784\u5EFA\u4FE1\u606F-gbuild"}}'),i=o("785893"),r=o("250065");let t={title:"\u534F\u7A0B\u7BA1\u7406-grpool",sidebar_position:16,hide_title:!0},d=void 0,l={},s=[{value:"\u57FA\u672C\u4ECB\u7ECD",id:"\u57FA\u672C\u4ECB\u7ECD",level:2},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:2},{value:"\u4F7F\u7528\u9ED8\u8BA4\u7684 <code>goroutine</code> \u6C60\uFF0C\u9650\u5236 <code>100</code> \u4E2A <code>goroutine</code> \u6267\u884C <code>1000</code> \u4E2A\u4EFB\u52A1",id:"\u4F7F\u7528\u9ED8\u8BA4\u7684-goroutine-\u6C60\u9650\u5236-100-\u4E2A-goroutine-\u6267\u884C-1000-\u4E2A\u4EFB\u52A1",level:3},{value:"\u5F02\u6B65\u4F20\u53C2\uFF1A\u6765\u4E2A\u65B0\u624B\u5BB9\u6613\u51FA\u9519\u7684\u4F8B\u5B50",id:"\u5F02\u6B65\u4F20\u53C2\u6765\u4E2A\u65B0\u624B\u5BB9\u6613\u51FA\u9519\u7684\u4F8B\u5B50",level:3},{value:"\u81EA\u52A8\u6355\u83B7 <code>goroutine</code> \u9519\u8BEF\uFF1A <code>AddWithRecover</code>",id:"\u81EA\u52A8\u6355\u83B7-goroutine-\u9519\u8BEF-addwithrecover",level:3},{value:"\u6D4B\u8BD5\u4E00\u4E0B <code>grpool</code> \u548C\u539F\u751F\u7684 <code>goroutine</code> \u4E4B\u95F4\u7684\u6027\u80FD",id:"\u6D4B\u8BD5\u4E00\u4E0B-grpool-\u548C\u539F\u751F\u7684-goroutine-\u4E4B\u95F4\u7684\u6027\u80FD",level:3}];function g(n){let e={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u57FA\u672C\u4ECB\u7ECD",children:"\u57FA\u672C\u4ECB\u7ECD"}),"\n",(0,i.jsxs)(e.p,{children:["Go\u8BED\u8A00\u4E2D\u7684 ",(0,i.jsx)(e.code,{children:"goroutine"})," \u867D\u7136\u76F8\u5BF9\u4E8E\u7CFB\u7EDF\u7EBF\u7A0B\u6765\u8BF4\u6BD4\u8F83\u8F7B\u91CF\u7EA7\uFF08\u521D\u59CB\u6808\u5927\u5C0F\u4EC5 ",(0,i.jsx)(e.code,{children:"2KB"}),"\uFF09\uFF0C\uFF08\u5E76\u4E14\u652F\u6301\u52A8\u6001\u6269\u5BB9\uFF09\uFF0C\u800C\u6B63\u5E38\u91C7\u7528 ",(0,i.jsx)(e.code,{children:"Java"}),"\u3001 ",(0,i.jsx)(e.code,{children:"C++"})," \u7B49\u8BED\u8A00\u542F\u7528\u7684\u7EBF\u7A0B\u4E00\u822C\u90FD\u662F\u5185\u6838\u6001\u7684\u5360\u7528\u7684\u5185\u5B58\u8D44\u6E90\u4E00\u822C\u5728 ",(0,i.jsx)(e.code,{children:"4m"})," \u5DE6\u53F3\uFF0C\u800C\u5047\u8BBE\u6211\u4EEC\u7684\u670D\u52A1\u5668CPU\u5185\u5B58\u4E3A ",(0,i.jsx)(e.code,{children:"4G"}),"\uFF0C\u90A3\u4E48\u5F88\u660E\u663E\u624D\u7528\u7684\u5185\u6838\u6001\u7EBF\u7A0B\u7684\u5E76\u53D1\u603B\u6570\u91CF\u4E5F\u5C31\u662F ",(0,i.jsx)(e.code,{children:"1024"})," \u4E2A\uFF0C\u76F8\u53CD\u67E5\u770B\u4E00\u4E0BGo\u8BED\u8A00\u7684\u534F\u7A0B\u5219\u53EF\u4EE5\u8FBE\u5230 ",(0,i.jsx)(e.code,{children:"4*1024*1024/2=200w"}),".\u8FD9\u4E48\u4E00\u770B\u5C31\u660E\u767D\u4E86\u4E3A\u4EC0\u4E48Go\u8BED\u8A00\u5929\u751F\u652F\u6301\u9AD8\u5E76\u53D1\u3002\u4F46\u662F\u5728\u9AD8\u5E76\u53D1\u91CF\u4E0B\u7684 ",(0,i.jsx)(e.code,{children:"goroutine"})," \u9891\u7E41\u521B\u5EFA\u548C\u9500\u6BC1\u5BF9\u4E8E\u6027\u80FD\u635F\u8017\u4EE5\u53CA ",(0,i.jsx)(e.code,{children:"GC"})," \u6765\u8BF4\u538B\u529B\u4E5F\u4E0D\u5C0F\u3002\u5145\u5206\u5C06 ",(0,i.jsx)(e.code,{children:"goroutine"})," \u590D\u7528\uFF0C\u51CF\u5C11 ",(0,i.jsx)(e.code,{children:"goroutine"})," \u7684\u521B\u5EFA/\u9500\u6BC1\u7684\u6027\u80FD\u635F\u8017\uFF0C\u8FD9\u4FBF\u662F ",(0,i.jsx)(e.code,{children:"grpool"})," \u5BF9 ",(0,i.jsx)(e.code,{children:"goroutine"})," \u8FDB\u884C\u6C60\u5316\u5C01\u88C5\u7684\u76EE\u7684\u3002\u4F8B\u5982\uFF0C\u9488\u5BF9\u4E8E ",(0,i.jsx)(e.code,{children:"100W"})," \u4E2A\u6267\u884C\u4EFB\u52A1\uFF0C\u4F7F\u7528 ",(0,i.jsx)(e.code,{children:"goroutine"})," \u7684\u8BDD\u9700\u8981\u4E0D\u505C\u521B\u5EFA\u5E76\u9500\u6BC1 ",(0,i.jsx)(e.code,{children:"100W"})," \u4E2A ",(0,i.jsx)(e.code,{children:"goroutine"}),"\uFF0C\u800C\u4F7F\u7528 ",(0,i.jsx)(e.code,{children:"grpool"})," \u4E5F\u8BB8\u5E95\u5C42\u53EA\u9700\u8981\u51E0\u4E07\u4E2A ",(0,i.jsx)(e.code,{children:"goroutine"})," \u4FBF\u80FD\u5145\u5206\u590D\u7528\u5730\u6267\u884C\u5B8C\u6210\u6240\u6709\u4EFB\u52A1\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u7ECF\u6D4B\u8BD5\uFF0C ",(0,i.jsx)(e.code,{children:"goroutine"})," \u6C60\u5BF9\u4E8E\u4E1A\u52A1\u903B\u8F91\u7684\u6267\u884C\u6548\u7387\uFF08\u964D\u4F4E\u6267\u884C\u65F6\u95F4/CPU\u4F7F\u7528\u7387\uFF09\u63D0\u5347\u4E0D\u5927\uFF0C\u751A\u81F3\u6CA1\u6709\u539F\u751F\u7684 ",(0,i.jsx)(e.code,{children:"goroutine"})," \u6267\u884C\u5FEB\u901F\uFF08\u6C60\u5316 ",(0,i.jsx)(e.code,{children:"goroutine"})," \u6267\u884C\u8C03\u5EA6\u5E76\u6CA1\u6709\u5E95\u5C42Go\u8C03\u5EA6\u5668\u9AD8\u6548\uFF0C\u56E0\u4E3A\u6C60\u5316 ",(0,i.jsx)(e.code,{children:"goroutine"})," \u7684\u6267\u884C\u8C03\u5EA6\u4E5F\u662F\u57FA\u4E8E\u5E95\u5C42Go\u8C03\u5EA6\u5668\uFF09\uFF0C\u4F46\u662F\u7531\u4E8E\u91C7\u7528\u4E86\u590D\u7528\u7684\u8BBE\u8BA1\uFF0C\u6C60\u5316\u540E\u5BF9\u5185\u5B58\u7684\u4F7F\u7528\u7387\u5F97\u5230\u6781\u5927\u7684\u964D\u4F4E\u3002\u5728 ",(0,i.jsx)(e.code,{children:"v2"})," \u7248\u672C\u4E2D ",(0,i.jsx)(e.code,{children:"grpool"})," \u4E5F\u52A0\u5165\u4E86\u8D2F\u7A7F\u5168\u5C40\u7684\u94FE\u8DEF\u8FFD\u8E2A\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u6982\u5FF5\uFF1A"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"Pool"}),"\uFF1A ",(0,i.jsx)(e.code,{children:"goroutine"})," \u6C60\uFF0C\u7528\u4E8E\u7BA1\u7406\u82E5\u5E72\u53EF\u590D\u7528\u7684 ",(0,i.jsx)(e.code,{children:"goroutine"})," \u534F\u7A0B\u8D44\u6E90\uFF1B"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"Worker"}),"\uFF1A\u6C60\u5BF9\u8C61\u4E2D\u53C2\u4E0E\u4EFB\u52A1\u6267\u884C\u7684 ",(0,i.jsx)(e.code,{children:"goroutine"}),"\uFF0C\u4E00\u4E2A ",(0,i.jsx)(e.code,{children:"Worker"})," \u53EF\u4EE5\u6267\u884C\u82E5\u5E72\u4E2A ",(0,i.jsx)(e.code,{children:"Job"}),"\uFF0C\u76F4\u5230\u961F\u5217\u4E2D\u518D\u65E0\u7B49\u5F85\u7684 ",(0,i.jsx)(e.code,{children:"Job"}),"\uFF1B"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"Job"}),"\uFF1A\u6DFB\u52A0\u5230\u6C60\u5BF9\u8C61\u7684\u4EFB\u52A1\u961F\u5217\u4E2D\u7B49\u5F85\u6267\u884C\u7684\u4EFB\u52A1\uFF0C\u662F\u4E00\u4E2A ",(0,i.jsx)(e.code,{children:"func()"})," \u7684\u65B9\u6CD5\uFF0C\u4E00\u4E2A ",(0,i.jsx)(e.code,{children:"Job"})," \u540C\u65F6\u53EA\u80FD\u88AB\u4E00\u4E2A ",(0,i.jsx)(e.code,{children:"Worker"})," \u83B7\u53D6\u5E76\u6267\u884C\uFF1B"]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u4F7F\u7528\u65B9\u5F0F"}),"\uFF1A"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/os/grpool"\n\n'})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u4F7F\u7528\u573A\u666F"}),"\uFF1A"]}),"\n",(0,i.jsx)(e.p,{children:"\u7BA1\u7406\u5927\u91CF\u5F02\u6B65\u4EFB\u52A1\u7684\u573A\u666F\u3001\u9700\u8981\u5F02\u6B65\u534F\u7A0B\u590D\u7528\u7684\u573A\u666F\u3001\u9700\u8981\u964D\u4F4E\u5185\u5B58\u4F7F\u7528\u7387\u7684\u573A\u666F\u3002"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u63A5\u53E3\u6587\u6863"}),"\uFF1A"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"func Add(f func()) error\nfunc Jobs() int\nfunc Size() int\ntype Pool\n    func New(limit ...int) *Pool\n    func (p *Pool) Add(ctx context.Context, f Func) error\n    func (p *Pool) AddWithRecover(ctx context.Context, userFunc Func, recoverFunc ...func(err error)) error\n    func (p *Pool) Cap() int\n    func (p *Pool) Close()\n    func (p *Pool) IsClosed() bool\n    func (p *Pool) Jobs() int\n    func (p *Pool) Size() int\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u901A\u8FC7 ",(0,i.jsx)(e.code,{children:"grpool.New"})," \u65B9\u6CD5\u521B\u5EFA\u4E00\u4E2A ",(0,i.jsx)(e.code,{children:"goroutine\u6C60"})," \u5BF9\u8C61\uFF0C\u53C2\u6570 ",(0,i.jsx)(e.code,{children:"limit"})," \u4E3A\u975E\u5FC5\u9700\u53C2\u6570\uFF0C\u7528\u4E8E\u9650\u5B9A\u6C60\u4E2D\u7684\u5DE5\u4F5C ",(0,i.jsx)(e.code,{children:"goroutine"})," \u6570\u91CF\uFF0C\u9ED8\u8BA4\u4E3A\u4E0D\u9650\u5236\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u4EFB\u52A1\u53EF\u4EE5\u4E0D\u505C\u5730\u5F80\u6C60\u4E2D\u6DFB\u52A0\uFF0C\u6CA1\u6709\u9650\u5236\uFF0C\u4F46\u662F\u5DE5\u4F5C\u7684 ",(0,i.jsx)(e.code,{children:"goroutine"})," \u662F\u53EF\u4EE5\u505A\u9650\u5236\u7684\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 ",(0,i.jsx)(e.code,{children:"Size()"})," \u65B9\u6CD5\u67E5\u8BE2\u5F53\u524D\u7684\u5DE5\u4F5C ",(0,i.jsx)(e.code,{children:"goroutine"})," \u6570\u91CF\uFF0C\u4F7F\u7528 ",(0,i.jsx)(e.code,{children:"Jobs()"})," \u65B9\u6CD5\u67E5\u8BE2\u5F53\u524D\u6C60\u4E2D\u5F85\u5904\u7406\u7684\u4EFB\u52A1\u6570\u91CF\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u540C\u65F6\uFF0C\u4E3A\u4FBF\u4E8E\u4F7F\u7528\uFF0C ",(0,i.jsx)(e.code,{children:"grpool"})," \u5305\u63D0\u4F9B\u4E86\u9ED8\u8BA4\u7684 ",(0,i.jsx)(e.code,{children:"goroutine"})," \u6C60\uFF0C\u9ED8\u8BA4\u7684\u6C60\u5BF9\u8C61\u4E0D\u9650\u5236 ",(0,i.jsx)(e.code,{children:"goroutine"})," \u6570\u91CF\uFF0C\u76F4\u63A5\u901A\u8FC7 ",(0,i.jsx)(e.code,{children:"grpool.Add"})," \u5373\u53EF\u5F80\u9ED8\u8BA4\u7684\u6C60\u4E2D\u6DFB\u52A0\u4EFB\u52A1\uFF0C\u4EFB\u52A1\u53C2\u6570\u5FC5\u987B\u662F\u4E00\u4E2A ",(0,i.jsx)(e.code,{children:"func()"})," \u7C7B\u578B\u7684\u51FD\u6570/\u65B9\u6CD5\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u8FD9\u4E2A\u6A21\u5757\u5927\u5BB6\u95EE\u5F97\u6700\u591A\u7684\u662F\u5916\u90E8\u5982\u4F55\u7ED9 ",(0,i.jsx)(e.code,{children:"grpool"})," \u91CC\u9762\u7684\u4EFB\u52A1\u4F20\u9012\u53C2\u6570\uFF0C\u5177\u4F53\u8BF7\u770B\u793A\u4F8B2\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,i.jsxs)(e.h3,{id:"\u4F7F\u7528\u9ED8\u8BA4\u7684-goroutine-\u6C60\u9650\u5236-100-\u4E2A-goroutine-\u6267\u884C-1000-\u4E2A\u4EFB\u52A1",children:["\u4F7F\u7528\u9ED8\u8BA4\u7684 ",(0,i.jsx)(e.code,{children:"goroutine"})," \u6C60\uFF0C\u9650\u5236 ",(0,i.jsx)(e.code,{children:"100"})," \u4E2A ",(0,i.jsx)(e.code,{children:"goroutine"})," \u6267\u884C ",(0,i.jsx)(e.code,{children:"1000"})," \u4E2A\u4EFB\u52A1"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n     "context"\n     "fmt"\n     "github.com/gogf/gf/v2/os/gctx"\n     "github.com/gogf/gf/v2/os/grpool"\n     "github.com/gogf/gf/v2/os/gtimer"\n     "time"\n)\n\nvar (\n    ctx = gctx.New()\n)\n\nfunc job(ctx context.Context) {\n     time.Sleep(1*time.Second)\n}\n\nfunc main() {\n     pool := grpool.New(100)\n     for i := 0; i < 1000; i++ {\n         pool.Add(ctx,job)\n     }\n     fmt.Println("worker:", pool.Size())\n     fmt.Println(" jobs:", pool.Jobs())\n     gtimer.SetInterval(ctx,time.Second, func(ctx context.Context) {\n         fmt.Println("worker:", pool.Size())\n         fmt.Println(" jobs:", pool.Jobs())\n         fmt.Println()\n     })\n\n     select {}\n}\n'})}),"\n",(0,i.jsxs)(e.p,{children:["\u8FD9\u6BB5\u7A0B\u5E8F\u4E2D\u7684\u4EFB\u52A1\u51FD\u6570\u7684\u529F\u80FD\u662F ",(0,i.jsx)(e.code,{children:"sleep 1\u79D2\u949F"}),"\uFF0C\u8FD9\u6837\u4FBF\u80FD\u5145\u5206\u5C55\u793A\u51FAgoroutine\u6570\u91CF\u9650\u5236\u529F\u80FD\u3002\u5176\u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528\u4E86 ",(0,i.jsx)(e.code,{children:"gtime.SetInterval"})," \u5B9A\u65F6\u5668\u6BCF\u96941\u79D2\u949F\u6253\u5370\u51FA\u5F53\u524D\u9ED8\u8BA4\u6C60\u4E2D\u7684\u5DE5\u4F5C ",(0,i.jsx)(e.code,{children:"goroutine"})," \u6570\u91CF\u4EE5\u53CA\u5F85\u5904\u7406\u7684\u4EFB\u52A1\u6570\u91CF\u3002"]}),"\n",(0,i.jsx)(e.h3,{id:"\u5F02\u6B65\u4F20\u53C2\u6765\u4E2A\u65B0\u624B\u5BB9\u6613\u51FA\u9519\u7684\u4F8B\u5B50",children:"\u5F02\u6B65\u4F20\u53C2\uFF1A\u6765\u4E2A\u65B0\u624B\u5BB9\u6613\u51FA\u9519\u7684\u4F8B\u5B50"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n     "context"\n     "fmt"\n     "github.com/gogf/gf/v2/os/gctx"\n     "github.com/gogf/gf/v2/os/grpool"\n     "sync"\n)\n\nvar (\n    ctx = gctx.New()\n)\n\nfunc main() {\n     wg := sync.WaitGroup{}\n     for i := 0; i < 10; i++ {\n        wg.Add(1)\n        grpool.Add(ctx,func(ctx context.Context) {\n               fmt.Println(i)\n               wg.Done()\n        })\n     }\n     wg.Wait()\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u6211\u4EEC\u8FD9\u6BB5\u4EE3\u7801\u7684\u76EE\u7684\u662F\u8981\u987A\u5E8F\u5730\u6253\u5370\u51FA0-9\uFF0C\u7136\u800C\u8FD0\u884C\u540E\u5374\u8F93\u51FA\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-10",children:"10\n10\n10\n10\n10\n10\n10\n10\n10\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u4E3A\u4EC0\u4E48\u5462\uFF1F\u8FD9\u91CC\u7684\u6267\u884C\u7ED3\u679C\u65E0\u8BBA\u662F\u91C7\u7528 ",(0,i.jsx)(e.code,{children:"go"})," \u5173\u952E\u5B57\u6765\u6267\u884C\u8FD8\u662F ",(0,i.jsx)(e.code,{children:"grpool"})," \u6765\u6267\u884C\u90FD\u662F\u5982\u6B64\u3002\u539F\u56E0\u662F\uFF0C\u5BF9\u4E8E\u5F02\u6B65\u7EBF\u7A0B/\u534F\u7A0B\u6765\u8BB2\uFF0C\u51FD\u6570\u8FDB\u884C\u5F02\u6B65\u6267\u884C\u6CE8\u518C\u65F6\uFF0C\u8BE5\u51FD\u6570\u5E76\u672A\u771F\u6B63\u5F00\u59CB\u6267\u884C(\u6CE8\u518C\u65F6\u53EA\u5728 ",(0,i.jsx)(e.code,{children:"goroutine"})," \u7684\u6808\u4E2D\u4FDD\u5B58\u4E86\u53D8\u91CF ",(0,i.jsx)(e.code,{children:"i"})," \u7684\u5185\u5B58\u5730\u5740)\uFF0C\u800C\u4E00\u65E6\u5F00\u59CB\u6267\u884C\u65F6\u51FD\u6570\u624D\u4F1A\u53BB\u8BFB\u53D6\u53D8\u91CF ",(0,i.jsx)(e.code,{children:"i"})," \u7684\u503C\uFF0C\u800C\u8FD9\u4E2A\u65F6\u5019\u53D8\u91CF ",(0,i.jsx)(e.code,{children:"i"})," \u7684\u503C\u5DF2\u7ECF\u81EA\u589E\u5230\u4E86 ",(0,i.jsx)(e.code,{children:"10"}),"\u3002 \u6E05\u695A\u539F\u56E0\u4E4B\u540E\uFF0C\u6539\u8FDB\u65B9\u6848\u4E5F\u5F88\u7B80\u5355\u4E86\uFF0C\u5C31\u662F\u5728\u6CE8\u518C\u5F02\u6B65\u6267\u884C\u51FD\u6570\u7684\u65F6\u5019\uFF0C\u628A\u5F53\u65F6\u53D8\u91CF ",(0,i.jsx)(e.code,{children:"i"})," \u7684\u503C\u4E5F\u4E00\u5E76\u4F20\u9012\u83B7\u53D6\uFF1B\u6216\u8005\u628A\u5F53\u524D\u53D8\u91CFi\u7684\u503C\u8D4B\u503C\u7ED9\u4E00\u4E2A\u4E0D\u4F1A\u6539\u53D8\u7684\u4E34\u65F6\u53D8\u91CF\uFF0C\u5728\u51FD\u6570\u4E2D\u4F7F\u7528\u8BE5\u4E34\u65F6\u53D8\u91CF\u800C\u4E0D\u662F\u76F4\u63A5\u4F7F\u7528\u53D8\u91CF ",(0,i.jsx)(e.code,{children:"i"}),"\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u6539\u8FDB\u540E\u7684\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"1)\u3001\u4F7F\u7528go\u5173\u952E\u5B57"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "sync"\n)\n\nfunc main() {\n    wg := sync.WaitGroup{}\n    for i := 0; i < 10; i++ {\n        wg.Add(1)\n        go func(v int){\n            fmt.Println(v)\n            wg.Done()\n        }(i)\n    }\n    wg.Wait()\n}\n\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u6267\u884C\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-0",children:"9\n3\n4\n5\n6\n7\n8\n1\n2\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u6CE8\u610F\uFF0C\u5F02\u6B65\u6267\u884C\u65F6\u5E76\u4E0D\u4F1A\u4FDD\u8BC1\u6309\u7167\u51FD\u6570\u6CE8\u518C\u65F6\u7684\u987A\u5E8F\u6267\u884C\uFF0C\u4EE5\u4E0B\u540C\u7406\u3002"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"2)\u3001\u4F7F\u7528\u4E34\u65F6\u53D8\u91CF"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n     "context"\n     "fmt"\n     "github.com/gogf/gf/v2/os/gctx"\n     "github.com/gogf/gf/v2/os/grpool"\n     "sync"\n)\n\nvar (\n   ctx = gctx.New()\n)\n\nfunc main() {\n     wg := sync.WaitGroup{}\n     for i := 0; i < 10; i++ {\n        wg.Add(1)\n        v := i\n        grpool.Add(ctx, func(ctx context.Context) {\n               fmt.Println(v)\n               wg.Done()\n        })\n     }\n     wg.Wait()\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u6267\u884C\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-9",children:"0\n1\n2\n3\n4\n5\n6\n7\n8\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u8FD9\u91CC\u53EF\u4EE5\u770B\u5230\uFF0C\u4F7F\u7528 ",(0,i.jsx)(e.code,{children:"grpool"})," \u8FDB\u884C\u4EFB\u52A1\u6CE8\u518C\u65F6\uFF0C\u6CE8\u518C\u65B9\u6CD5\u4E3A ",(0,i.jsx)(e.code,{children:"func(ctx context.Context)"}),"\uFF0C\u56E0\u6B64\u65E0\u6CD5\u5728\u4EFB\u52A1\u6CE8\u518C\u65F6\u628A\u53D8\u91CF ",(0,i.jsx)(e.code,{children:"i"})," \u7684\u503C\u6CE8\u518C\u8FDB\u53BB\uFF08\u8BF7\u5C3D\u91CF\u4E0D\u8981\u901A\u8FC7 ",(0,i.jsx)(e.code,{children:"ctx"})," \u4F20\u9012\u4E1A\u52A1\u53C2\u6570\uFF09\uFF0C\u56E0\u6B64\u53EA\u80FD\u91C7\u7528\u4E34\u65F6\u53D8\u91CF\u7684\u5F62\u5F0F\u6765\u4F20\u9012\u5F53\u524D\u53D8\u91CF ",(0,i.jsx)(e.code,{children:"i"})," \u7684\u503C\u3002"]}),"\n",(0,i.jsxs)(e.h3,{id:"\u81EA\u52A8\u6355\u83B7-goroutine-\u9519\u8BEF-addwithrecover",children:["\u81EA\u52A8\u6355\u83B7 ",(0,i.jsx)(e.code,{children:"goroutine"})," \u9519\u8BEF\uFF1A ",(0,i.jsx)(e.code,{children:"AddWithRecover"})]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"AddWithRecover"})," \u5C06\u65B0\u4F5C\u4E1A\u63A8\u9001\u5230\u5177\u6709\u6307\u5B9A\u6062\u590D\u529F\u80FD\u7684\u6C60\u4E2D\u3002\u5F53 ",(0,i.jsx)(e.code,{children:"userFunc"})," \u6267\u884C\u8FC7\u7A0B\u4E2D\u51FA\u73B0 ",(0,i.jsx)(e.code,{children:"panic"})," \u65F6\uFF0C\u4F1A\u8C03\u7528\u53EF\u9009\u7684 ",(0,i.jsx)(e.code,{children:"Recovery Func"}),"\u3002\u5982\u679C\u6CA1\u6709\u4F20\u5165 ",(0,i.jsx)(e.code,{children:"Recovery Func"})," \u6216\u8D4B\u7A7A\uFF0C\u5219\u5FFD\u7565 ",(0,i.jsx)(e.code,{children:"userFunc"})," \u5F15\u53D1\u7684 ",(0,i.jsx)(e.code,{children:"panic"}),"\u3002\u8BE5\u4F5C\u4E1A\u5C06\u5F02\u6B65\u6267\u884C\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "fmt"\n    "github.com/gogf/gf/v2/container/garray"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/os/grpool"\n    "time"\n)\n\nvar (\n    ctx = gctx.New()\n)\nfunc main() {\n    array := garray.NewArray(true)\n    grpool.AddWithRecover(ctx, func(ctx context.Context) {\n        array.Append(1)\n        array.Append(2)\n        panic(1)\n    }, func(err error) {\n        array.Append(1)\n    })\n    grpool.AddWithRecover(ctx, func(ctx context.Context) {\n        panic(1)\n        array.Append(1)\n    })\n    time.Sleep(500 * time.Millisecond)\n    fmt.Print(array.Len())\n}\n'})}),"\n",(0,i.jsxs)(e.h3,{id:"\u6D4B\u8BD5\u4E00\u4E0B-grpool-\u548C\u539F\u751F\u7684-goroutine-\u4E4B\u95F4\u7684\u6027\u80FD",children:["\u6D4B\u8BD5\u4E00\u4E0B ",(0,i.jsx)(e.code,{children:"grpool"})," \u548C\u539F\u751F\u7684 ",(0,i.jsx)(e.code,{children:"goroutine"})," \u4E4B\u95F4\u7684\u6027\u80FD"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"1)\u3001grpool"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n     "context"\n     "fmt"\n     "github.com/gogf/gf/v2/os/gctx"\n     "github.com/gogf/gf/v2/os/grpool"\n     "github.com/gogf/gf/v2/os/gtime"\n     "sync"\n     "time"\n)\n\nvar (\n   ctx = gctx.New()\n)\n\nfunc main() {\n     start := gtime.TimestampMilli()\n     wg := sync.WaitGroup{}\n     for i := 0; i < 10000000; i++ {\n        wg.Add(1)\n        grpool.Add(ctx,func(ctx context.Context) {\n               time.Sleep(time.Millisecond)\n               wg.Done()\n        })\n     }\n     wg.Wait()\n     fmt.Println(grpool.Size())\n     fmt.Println("time spent:", gtime.TimestampMilli() - start)\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"2)\u3001goroutine"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n     "fmt"\n     "github.com/gogf/gf/v2/os/gtime"\n     "sync"\n     "time"\n)\n\nfunc main() {\n     start := gtime.TimestampMilli()\n     wg := sync.WaitGroup{}\n     for i := 0; i < 10000000; i++ {\n        wg.Add(1)\n        go func() {\n               time.Sleep(time.Millisecond)\n               wg.Done()\n        }()\n     }\n     wg.Wait()\n     fmt.Println("time spent:", gtime.TimestampMilli() - start)\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"3)\u3001\u8FD0\u884C\u7ED3\u679C\u6BD4\u8F83"})}),"\n",(0,i.jsx)(e.p,{children:"\u6D4B\u8BD5\u7ED3\u679C\u4E3A\u4E24\u4E2A\u7A0B\u5E8F\u5404\u8FD0\u884C3\u6B21\u53D6\u5E73\u5747\u503C\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"grpool:\n    goroutine count: 847313\n     memory   spent: ~2.1 G\n     time     spent: 37792 ms\n\ngoroutine:\n    goroutine count: 1000W\n    memory    spent: ~4.8 GB\n    time      spent: 27085 ms\n\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u53EF\u4EE5\u770B\u5230\u6C60\u5316\u8FC7\u540E\uFF0C\u6267\u884C\u76F8\u540C\u6570\u91CF\u7684\u4EFB\u52A1\uFF0C ",(0,i.jsx)(e.code,{children:"goroutine"})," \u6570\u91CF\u51CF\u5C11\u5F88\u591A\uFF0C\u76F8\u5BF9\u7684\u5185\u5B58\u4E5F\u964D\u4F4E\u4E86\u4E00\u500D\u4EE5\u4E0A\uFF0CCPU\u65F6\u95F4\u8017\u65F6\u4E5F\u52C9\u5F3A\u53EF\u4EE5\u63A5\u53D7\u3002"]})]})}function x(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(g,{...n})}):g(n)}},250065:function(n,e,o){o.d(e,{Z:function(){return d},a:function(){return t}});var c=o(667294);let i={},r=c.createContext(i);function t(n){let e=c.useContext(r);return c.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:t(n.components),c.createElement(r.Provider,{value:e},n.children)}}}]);