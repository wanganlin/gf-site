"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["76061"],{888943:function(e,n,t){t.r(n),t.d(n,{metadata:()=>o,contentTitle:()=>r,default:()=>g,assets:()=>c,toc:()=>s,frontMatter:()=>a});var o=JSON.parse('{"id":"\u5F00\u53D1\u5DE5\u5177/docker \u955C\u50CF\u7F16\u8BD1","title":"docker \u955C\u50CF\u7F16\u8BD1","description":"\u4F7F\u7528\u65B9\u5F0F\uFF1A","source":"@site/versioned_docs/version-1.16.x/\u5F00\u53D1\u5DE5\u5177/docker \u955C\u50CF\u7F16\u8BD1.md","sourceDirName":"\u5F00\u53D1\u5DE5\u5177","slug":"/\u5F00\u53D1\u5DE5\u5177/docker \u955C\u50CF\u7F16\u8BD1","permalink":"/1.16.x/\u5F00\u53D1\u5DE5\u5177/docker \u955C\u50CF\u7F16\u8BD1","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.16.x/\u5F00\u53D1\u5DE5\u5177/docker \u955C\u50CF\u7F16\u8BD1.md","tags":[],"version":"1.16.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":9,"frontMatter":{"title":"docker \u955C\u50CF\u7F16\u8BD1","sidebar_position":9,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"get \u4F9D\u8D56\u5305\u4E0B\u8F7D","permalink":"/1.16.x/\u5F00\u53D1\u5DE5\u5177/get \u4F9D\u8D56\u5305\u4E0B\u8F7D"},"next":{"title":"mod \u5305\u7BA1\u7406\u6269\u5C55\u529F\u80FD","permalink":"/1.16.x/\u5F00\u53D1\u5DE5\u5177/mod \u5305\u7BA1\u7406\u6269\u5C55\u529F\u80FD"}}'),i=t("785893"),d=t("250065");let a={title:"docker \u955C\u50CF\u7F16\u8BD1",sidebar_position:9,hide_title:!0},r=void 0,c={},s=[];function l(e){let n={code:"code",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u4F7F\u7528\u65B9\u5F0F\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'$ gf docker -h\nUSAGE\n    gf docker [FILE] [OPTION]\n\nARGUMENT\n    FILE      file path for "gf build", it\'s "main.go" in default.\n    OPTION    the same options as "docker build" except some options as follows defined\n\nOPTION\n    -p, --push  auto push the docker image to docker registry if "-t" option passed\n\nEXAMPLES\n    gf docker\n    gf docker -t hub.docker.com/john/image:tag\n    gf docker -p -t hub.docker.com/john/image:tag\n    gf docker main.go\n    gf docker main.go -t hub.docker.com/john/image:tag\n    gf docker main.go -t hub.docker.com/john/image:tag\n    gf docker main.go -p -t hub.docker.com/john/image:tag\n\nDESCRIPTION\n    The "docker" command builds the GF project to a docker images.\n    It runs "gf build" firstly to compile the project to binary file.\n    It then runs "docker build" command automatically to generate the docker image.\n    You should have docker installed, and there must be a Dockerfile in the root of the project.\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u81EA\u52A8\u7F16\u8BD1\u5E76\u751F\u6210 ",(0,i.jsx)(n.code,{children:"docker"})," \u955C\u50CF\u3002\u975E\u5FC5\u9700 ",(0,i.jsx)(n.code,{children:"FILE"})," \u53C2\u6570\u4E3A\u7F16\u8BD1\u6587\u4EF6\u8DEF\u5F84\uFF0C\u9ED8\u8BA4\u4E3A ",(0,i.jsx)(n.code,{children:"main.go"}),"\u3002\u975E\u5FC5\u9700\u53C2\u6570 ",(0,i.jsx)(n.code,{children:"OPTIONS"})," \u4E3A ",(0,i.jsx)(n.code,{children:"docker build"})," \u547D\u4EE4\u76F8\u540C\u53C2\u6570\u53CA\u9009\u9879\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u4F7F\u7528\u793A\u4F8B\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'$ gf docker main.go -p -t loads/gf-demos:test\n2020-12-31 00:47:28.207 start building...\n2020-12-31 00:47:28.207 go build -o ./bin/linux_amd64/main main.go\n2020-12-31 00:47:35.894 done!\nSending build context to Docker daemon  37.63MB\nStep 1/10 : FROM loads/alpine:3.8\n ---\x3e f9fb622e6db2\nStep 2/10 : LABEL maintainer="john@goframe.org"\n ---\x3e Using cache\n ---\x3e da238418d031\nStep 3/10 : ENV WORKDIR /var/www/gf-demos\n ---\x3e Using cache\n ---\x3e 3e7129c087c9\nStep 4/10 : ADD ./bin/linux_amd64/main   $WORKDIR/main\n ---\x3e 3661a9dea494\nStep 5/10 : RUN chmod +x $WORKDIR/main\n ---\x3e Running in 1d49d5d91080\nRemoving intermediate container 1d49d5d91080\n ---\x3e a03ee04e3380\nStep 6/10 : ADD public   $WORKDIR/public\n ---\x3e 63dd06d0e1a3\nStep 7/10 : ADD config   $WORKDIR/config\n ---\x3e fa7a57eba577\nStep 8/10 : ADD template $WORKDIR/template\n ---\x3e 7075609b0447\nStep 9/10 : WORKDIR $WORKDIR\n ---\x3e Running in a34ef38e1031\nRemoving intermediate container a34ef38e1031\n ---\x3e 580077998eaf\nStep 10/10 : CMD ./main\n ---\x3e Running in ed286b518ad9\nRemoving intermediate container ed286b518ad9\n ---\x3e fbbc05842901\nSuccessfully built fbbc05842901\nSuccessfully tagged loads/gf-demos:test\nThe push refers to repository [docker.io/loads/gf-demos]\nb4025b95a79f: Preparing\n9e0369a57507: Preparing\n46c68dcc8e12: Preparing\n59adbc083ee5: Preparing\n10e0b999ba57: Preparing\n8e850d7b086e: Waiting\nd5e057db20a2: Waiting\n92e898fd7f84: Waiting\nd9ff549177a9: Waiting\n...\n'})})]})}function g(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return a}});var o=t(667294);let i={},d=o.createContext(i);function a(e){let n=o.useContext(d);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(d.Provider,{value:n},e.children)}}}]);