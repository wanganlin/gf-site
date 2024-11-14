"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["65092"],{802459:function(e,n,r){r.r(n),r.d(n,{metadata:()=>l,contentTitle:()=>s,default:()=>h,assets:()=>t,toc:()=>o,frontMatter:()=>i});var l=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6A21\u677F\u5F15\u64CE/\u6A21\u677F\u5F15\u64CE-\u6A21\u677F\u51FD\u6570/\u6A21\u677F\u51FD\u6570-\u57FA\u7840\u51FD\u6570","title":"\u6A21\u677F\u51FD\u6570-\u57FA\u7840\u51FD\u6570","description":"\u4EE5\u4E0B\u4E3A Golang \u6807\u51C6\u5E93\u7684\u4E00\u4E9B\u57FA\u7840\u8BED\u6CD5\u548C\u57FA\u7840\u51FD\u6570\uFF0C GoFrame \u6846\u67B6\u5BF9\u90E8\u5206\u57FA\u7840\u51FD\u6570\u505A\u4E86\u5FC5\u8981\u7684\u6539\u8FDB\u3002","source":"@site/versioned_docs/version-2.4.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6A21\u677F\u5F15\u64CE/\u6A21\u677F\u5F15\u64CE-\u6A21\u677F\u51FD\u6570/\u6A21\u677F\u51FD\u6570-\u57FA\u7840\u51FD\u6570.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6A21\u677F\u5F15\u64CE/\u6A21\u677F\u5F15\u64CE-\u6A21\u677F\u51FD\u6570","slug":"/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6A21\u677F\u5F15\u64CE/\u6A21\u677F\u5F15\u64CE-\u6A21\u677F\u51FD\u6570/\u6A21\u677F\u51FD\u6570-\u57FA\u7840\u51FD\u6570","permalink":"/en/2.4.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6A21\u677F\u5F15\u64CE/\u6A21\u677F\u5F15\u64CE-\u6A21\u677F\u51FD\u6570/\u6A21\u677F\u51FD\u6570-\u57FA\u7840\u51FD\u6570","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.4.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6A21\u677F\u5F15\u64CE/\u6A21\u677F\u5F15\u64CE-\u6A21\u677F\u51FD\u6570/\u6A21\u677F\u51FD\u6570-\u57FA\u7840\u51FD\u6570.md","tags":[],"version":"2.4.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":0,"frontMatter":{"title":"\u6A21\u677F\u51FD\u6570-\u57FA\u7840\u51FD\u6570","sidebar_position":0,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u6A21\u677F\u5F15\u64CE-\u5176\u4ED6\u4F7F\u7528","permalink":"/en/2.4.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6A21\u677F\u5F15\u64CE/\u6A21\u677F\u5F15\u64CE-\u5176\u4ED6\u4F7F\u7528"},"next":{"title":"\u6A21\u677F\u51FD\u6570-\u5185\u7F6E\u51FD\u6570","permalink":"/en/2.4.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6A21\u677F\u5F15\u64CE/\u6A21\u677F\u5F15\u64CE-\u6A21\u677F\u51FD\u6570/\u6A21\u677F\u51FD\u6570-\u5185\u7F6E\u51FD\u6570"}}'),d=r("785893"),c=r("250065");let i={title:"\u6A21\u677F\u51FD\u6570-\u57FA\u7840\u51FD\u6570",sidebar_position:0,hide_title:!0},s=void 0,t={},o=[{value:"<code>and</code>",id:"and",level:2},{value:"<code>call</code>",id:"call",level:2},{value:"<code>index</code>",id:"index",level:2},{value:"<code>len</code>",id:"len",level:2},{value:"<code>not</code>",id:"not",level:2},{value:"<code>or</code>",id:"or",level:2},{value:"<code>print</code>",id:"print",level:2},{value:"<code>printf</code>",id:"printf",level:2},{value:"<code>println</code>",id:"println",level:2},{value:"<code>urlquery</code>",id:"urlquery",level:2},{value:"<code>eq / ne / lt / le / gt / ge</code>",id:"eq--ne--lt--le--gt--ge",level:2},{value:"\u5BF9\u6BD4\u51FD\u6570\u6539\u8FDB",id:"\u5BF9\u6BD4\u51FD\u6570\u6539\u8FDB",level:3},{value:"\u6539\u8FDB\u8FD0\u884C\u793A\u4F8B",id:"\u6539\u8FDB\u8FD0\u884C\u793A\u4F8B",level:3}];function a(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:["\u4EE5\u4E0B\u4E3A ",(0,d.jsx)(n.code,{children:"Golang"})," \u6807\u51C6\u5E93\u7684\u4E00\u4E9B\u57FA\u7840\u8BED\u6CD5\u548C\u57FA\u7840\u51FD\u6570\uFF0C ",(0,d.jsx)(n.code,{children:"GoFrame"})," \u6846\u67B6\u5BF9\u90E8\u5206\u57FA\u7840\u51FD\u6570\u505A\u4E86\u5FC5\u8981\u7684\u6539\u8FDB\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u53D8\u91CF\u53EF\u4EE5\u4F7F\u7528\u7B26\u53F7 ",(0,d.jsx)(n.code,{children:"|"})," \u5728\u51FD\u6570\u95F4\u4F20\u9012"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"{{.value | Func1 | Func2}}\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u4F7F\u7528\u62EC\u53F7"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'{{printf "nums is %s %d" (printf "%d %d" 1 2) 3}}\n'})}),"\n",(0,d.jsx)(n.h2,{id:"and",children:(0,d.jsx)(n.code,{children:"and"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"{{and .X .Y .Z}}\n"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"and"})," \u4F1A\u9010\u4E00\u5224\u65AD\u6BCF\u4E2A\u53C2\u6570\uFF0C\u5C06\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u4E3A\u7A7A\u7684\u53C2\u6570\uFF0C\u5426\u5219\u5C31\u8FD4\u56DE\u6700\u540E\u4E00\u4E2A\u975E\u7A7A\u53C2\u6570"]}),"\n",(0,d.jsx)(n.h2,{id:"call",children:(0,d.jsx)(n.code,{children:"call"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"{{call .Field.Func .Arg1 .Arg2}}\n"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"call"})," \u53EF\u4EE5\u8C03\u7528\u51FD\u6570\uFF0C\u5E76\u4F20\u5165\u53C2\u6570"]}),"\n",(0,d.jsxs)(n.p,{children:["\u8C03\u7528\u7684\u51FD\u6570\u9700\u8981\u8FD4\u56DE 1 \u4E2A\u503C \u6216\u8005 2 \u4E2A\u503C\uFF0C\u8FD4\u56DE\u4E24\u4E2A\u503C\u65F6\uFF0C\u7B2C\u4E8C\u4E2A\u503C\u7528\u4E8E\u8FD4\u56DE ",(0,d.jsx)(n.code,{children:"error"})," \u7C7B\u578B\u7684\u9519\u8BEF\u3002\u8FD4\u56DE\u7684\u9519\u8BEF\u4E0D\u7B49\u4E8E ",(0,d.jsx)(n.code,{children:"nil"})," \u65F6\uFF0C\u6267\u884C\u5C06\u7EC8\u6B62\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"index",children:(0,d.jsx)(n.code,{children:"index"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"index"})," \u652F\u6301 ",(0,d.jsx)(n.code,{children:"map"}),", ",(0,d.jsx)(n.code,{children:"slice"}),", ",(0,d.jsx)(n.code,{children:"array"}),", ",(0,d.jsx)(n.code,{children:"string"}),"\uFF0C\u8BFB\u53D6\u6307\u5B9A\u7C7B\u578B\u5BF9\u5E94\u4E0B\u6807\u7684\u503C\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'{{index .Maps "name"}}\n'})}),"\n",(0,d.jsx)(n.h2,{id:"len",children:(0,d.jsx)(n.code,{children:"len"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'{{printf "The content length is %d" (.Content|len)}}\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u8FD4\u56DE\u5BF9\u5E94\u7C7B\u578B\u7684\u957F\u5EA6\uFF0C\u652F\u6301\u7C7B\u578B\uFF1A ",(0,d.jsx)(n.code,{children:"map"}),", ",(0,d.jsx)(n.code,{children:"slice"}),", ",(0,d.jsx)(n.code,{children:"array"}),", ",(0,d.jsx)(n.code,{children:"string"}),", ",(0,d.jsx)(n.code,{children:"chan"}),"\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"not",children:(0,d.jsx)(n.code,{children:"not"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"not"})," \u8FD4\u56DE\u8F93\u5165\u53C2\u6570\u7684\u5426\u5B9A\u503C\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u4F8B\u5982\uFF0C\u5224\u65AD\u662F\u5426\u53D8\u91CF\u662F\u5426\u4E3A\u7A7A\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'{{if not .Var}}\n// \u6267\u884C\u4E3A\u7A7A\u64CD\u4F5C(.Var\u4E3A\u7A7A, \u5982: nil, 0, "", \u957F\u5EA6\u4E3A0\u7684slice/map)\n{{else}}\n// \u6267\u884C\u975E\u7A7A\u64CD\u4F5C(.Var\u4E0D\u4E3A\u7A7A)\n{{end}}\n'})}),"\n",(0,d.jsx)(n.h2,{id:"or",children:(0,d.jsx)(n.code,{children:"or"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"{{or .X .Y .Z}}\n"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"or"})," \u4F1A\u9010\u4E00\u5224\u65AD\u6BCF\u4E2A\u53C2\u6570\uFF0C\u5C06\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u975E\u7A7A\u7684\u53C2\u6570\uFF0C\u5426\u5219\u5C31\u8FD4\u56DE\u6700\u540E\u4E00\u4E2A\u53C2\u6570\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"print",children:(0,d.jsx)(n.code,{children:"print"})}),"\n",(0,d.jsxs)(n.p,{children:["\u540C ",(0,d.jsx)(n.code,{children:"fmt.Sprint"}),"\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"printf",children:(0,d.jsx)(n.code,{children:"printf"})}),"\n",(0,d.jsxs)(n.p,{children:["\u540C ",(0,d.jsx)(n.code,{children:"fmt.Sprintf"}),"\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"println",children:(0,d.jsx)(n.code,{children:"println"})}),"\n",(0,d.jsxs)(n.p,{children:["\u540C ",(0,d.jsx)(n.code,{children:"fmt.Sprintln"}),"\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"urlquery",children:(0,d.jsx)(n.code,{children:"urlquery"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'{{urlquery "http://johng.cn"}}\n'})}),"\n",(0,d.jsx)(n.p,{children:"\u5C06\u8FD4\u56DE"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"http%3A%2F%2Fjohng.cn\n"})}),"\n",(0,d.jsx)(n.h2,{id:"eq--ne--lt--le--gt--ge",children:(0,d.jsx)(n.code,{children:"eq / ne / lt / le / gt / ge"})}),"\n",(0,d.jsxs)(n.p,{children:["\u8FD9\u7C7B\u51FD\u6570\u4E00\u822C\u914D\u5408\u5728 ",(0,d.jsx)(n.code,{children:"if"})," \u4E2D\u4F7F\u7528"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"`eq`: arg1 == arg2\n`ne`: arg1 != arg2\n`lt`: arg1 < arg2\n`le`: arg1 <= arg2\n`gt`: arg1 > arg2\n`ge`: arg1 >= arg2\n"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"eq"})," \u548C\u5176\u4ED6\u51FD\u6570\u4E0D\u4E00\u6837\u7684\u5730\u65B9\u662F\uFF0C\u652F\u6301\u591A\u4E2A\u53C2\u6570\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"{{eq arg1 arg2 arg3 arg4}}\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u548C\u4E0B\u9762\u7684\u903B\u8F91\u5224\u65AD\u76F8\u540C:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"arg1==arg2 || arg1==arg3 || arg1==arg4 ...\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u4E0E ",(0,d.jsx)(n.code,{children:"if"})," \u4E00\u8D77\u4F7F\u7528"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"{{if eq true .Var1 .Var2 .Var3}}...{{end}}\n"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"{{if lt 100 200}}...{{end}}\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u4F8B\u5982\uFF0C\u5224\u65AD\u53D8\u91CF\u4E0D\u4E3A\u7A7A\u65F6\u6267\u884C\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'{{if .Var}}\n// \u6267\u884C\u975E\u7A7A\u64CD\u4F5C(.Var\u4E0D\u4E3A\u7A7A)\n{{else}}\n// \u6267\u884C\u4E3A\u7A7A\u64CD\u4F5C(.Var\u4E3A\u7A7A, \u5982: nil, 0, "", \u957F\u5EA6\u4E3A0\u7684slice/map)\n{{end}}\n'})}),"\n",(0,d.jsx)(n.h3,{id:"\u5BF9\u6BD4\u51FD\u6570\u6539\u8FDB",children:"\u5BF9\u6BD4\u51FD\u6570\u6539\u8FDB"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"GoFrame"})," \u6846\u67B6\u6A21\u677F\u5F15\u64CE\u5BF9\u6807\u51C6\u5E93\u81EA\u5E26\u7684\u5BF9\u6BD4\u6A21\u677F\u51FD\u6570 ",(0,d.jsx)(n.code,{children:"eq/ne/lt/le/gt/ge"})," \u505A\u4E86\u5FC5\u8981\u7684\u6539\u8FDB\uFF0C\u4EE5\u4FBF\u652F\u6301\u4EFB\u610F\u6570\u636E\u7C7B\u578B\u7684\u6BD4\u8F83\u3002\u4F8B\u5982\uFF0C\u5728\u6807\u51C6\u5E93\u6A21\u677F\u4E2D\u7684\u4EE5\u4E0B\u6BD4\u8F83\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'{{eq 1 "1"}}\n'})}),"\n",(0,d.jsx)(n.p,{children:"\u5C06\u4F1A\u5F15\u53D1\u9519\u8BEF\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'panic: template: at <eq 1 "1">: error calling eq: incompatible types for comparison\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u7531\u4E8E\u6BD4\u8F83\u7684\u4E24\u4E2A\u53C2\u6570\u4E0D\u662F\u540C\u4E00\u6570\u636E\u7C7B\u578B\uFF0C\u56E0\u6B64\u5F15\u53D1\u4E86 ",(0,d.jsx)(n.code,{children:"panic"})," \u9519\u8BEF\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5728 ",(0,d.jsx)(n.code,{children:"GoFrame"})," \u6846\u67B6\u7684\u6A21\u677F\u5F15\u64CE\u4E2D\uFF0C\u5C06\u4F1A\u81EA\u52A8\u5C06\u4E24\u4E2A\u53C2\u6570\u8FDB\u884C\u6570\u636E\u8F6C\u6362\uFF0C\u8F6C\u6362\u4E3A\u540C\u4E00\u7C7B\u578B\u540E\u518D\u8FDB\u884C\u6BD4\u8F83\uFF0C\u8FD9\u6837\u7684\u5F00\u53D1\u4F53\u9A8C\u66F4\u597D\u3001\u7075\u6D3B\u6027\u66F4\u9AD8\u3002\u5982\u679C\u4E24\u4E2A\u53C2\u6570\u5747\u4E3A\u6574\u578B\u53D8\u91CF\uFF08\u6216\u8005\u6574\u578B\u5B57\u7B26\u4E32\uFF09\uFF0C\u90A3\u4E48\u5C06\u4F1A\u8F6C\u6362\u4E3A\u6574\u578B\u8FDB\u884C\u6BD4\u8F83\uFF0C\u5426\u5219\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\u53D8\u91CF\u8FDB\u884C\u6BD4\u8F83\uFF08\u533A\u5206\u5927\u5C0F\u5199\uFF09\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"\u6539\u8FDB\u8FD0\u884C\u793A\u4F8B",children:"\u6539\u8FDB\u8FD0\u884C\u793A\u4F8B"}),"\n",(0,d.jsxs)(n.p,{children:["\u6211\u4EEC\u6765\u770B\u4E00\u4E2A ",(0,d.jsx)(n.code,{children:"GoFrame"})," \u6846\u67B6\u7684\u6A21\u677F\u5F15\u64CE\u4E2D\u7684\u5BF9\u6BD4\u6A21\u677F\u51FD\u6570\u8FD0\u884C\u793A\u4F8B\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "fmt"\n    "github.com/gogf/gf/v2/frame/g"\n)\n\nfunc main() {\n    tplContent := `\neq:\neq "a" "a": {{eq "a" "a"}}\neq "1" "1": {{eq "1" "1"}}\neq  1  "1": {{eq  1  "1"}}\n\nne:\nne  1  "1": {{ne  1  "1"}}\nne "a" "a": {{ne "a" "a"}}\nne "a" "b": {{ne "a" "b"}}\n\nlt:\nlt  1  "2": {{lt  1  "2"}}\nlt  2   2 : {{lt  2   2 }}\nlt "a" "b": {{lt "a" "b"}}\n\nle:\nle  1  "2": {{le  1  "2"}}\nle  2   1 : {{le  2   1 }}\nle "a" "a": {{le "a" "a"}}\n\ngt:\ngt  1  "2": {{gt  1  "2"}}\ngt  2   1 : {{gt  2   1 }}\ngt "a" "a": {{gt "a" "a"}}\n\nge:\nge  1  "2": {{ge  1  "2"}}\nge  2   1 : {{ge  2   1 }}\nge "a" "a": {{ge "a" "a"}}\n`\n    content, err := g.View().ParseContent(context.TODO(), tplContent, nil)\n    if err != nil {\n        panic(err)\n    }\n    fmt.Println(content)\n}\n'})}),"\n",(0,d.jsx)(n.p,{children:"\u8FD0\u884C\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'eq:\neq "a" "a": true\neq "1" "1": true\neq  1  "1": true\n\nne:\nne  1  "1": false\nne "a" "a": false\nne "a" "b": true\n\nlt:\nlt  1  "2": true\nlt  2   2 : false\nlt "a" "b": true\n\nle:\nle  1  "2": true\nle  2   1 : false\nle "a" "a": true\n\ngt:\ngt  1  "2": false\ngt  2   1 : true\ngt "a" "a": false\n\nge:\nge  1  "2": false\nge  2   1 : true\nge "a" "a": true\n'})})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return i}});var l=r(667294);let d={},c=l.createContext(d);function i(e){let n=l.useContext(c);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),l.createElement(c.Provider,{value:n},e.children)}}}]);