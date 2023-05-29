import{d as r,F as c,H as l,g as o}from"./q-71956c83.js";const t=[{text:"Environment variables",id:"environment-variables",level:1},{text:"Build-time variables",id:"build-time-variables",level:2},{text:"Server-side variables",id:"server-side-variables",level:2},{text:"Defining server-side variables",id:"defining-server-side-variables",level:3}],d={title:"Qwik City - Environment variables",meta:[],styles:[],links:[],frontmatter:{contributors:["manucorporat"]}},D={title:"Qwik City - Environment variables",contributors:["manucorporat"]};function s(n){const e=Object.assign({h1:"h1",a:"a",span:"span",p:"p",strong:"strong",blockquote:"blockquote",code:"code",h2:"h2",div:"div",pre:"pre",h3:"h3"},n.components);return l(o,{children:[l(e.h1,{id:"environment-variables",children:[l(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#environment-variables",children:l(e.span,{class:"icon icon-link"})}),"Environment variables"]}),`
`,l(e.p,{children:["Qwik apps can read environment variables in two main ways: ",l(e.strong,{children:"build-time variables"})," and ",l(e.strong,{children:"server-side variables"}),"."]}),`
`,l(e.blockquote,{children:[`
`,l(e.p,{children:[l(e.code,{children:"process.env"})," is a Node.js only API, and should be avoided at all costs."]}),`
`]}),`
`,l(e.h2,{id:"build-time-variables",children:[l(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#build-time-variables",children:l(e.span,{class:"icon icon-link"})}),"Build-time variables"]}),`
`,l(e.p,{children:["Build-time variables are powered by ",l(e.a,{href:"https://vitejs.dev/guide/env-and-mode.html",children:"Vite"}),". They are defined in ",l(e.code,{children:".env"})," files and are available ",l(e.strong,{children:"in the browser and in the server-side code"}),"."]}),`
`,l(e.blockquote,{children:[`
`,l(e.p,{children:[l(e.strong,{children:"IMPORTANT! DO NOT"})," use ",l(e.code,{children:"({}).PUBLIC_*"})," to store any sensitive information, such as API keys, secrets, passworlds, etc. ",l(e.strong,{children:"Only public data"}),"."]}),`
`]}),`
`,l(e.p,{children:["Notice that build-time variables should be considered as ",l(e.strong,{children:"public"}),", since they will be hardcoded in the browser build, which can be easily read by anyone."]}),`
`,l(e.p,{children:["Build-time variables are prefixed by default with ",l(e.code,{children:"PUBLIC_"})," and can be accessed with with ",l(e.code,{children:"({}).PUBLIC_*"}),"."]}),`
`,l(e.div,{"data-rehype-pretty-code-fragment":"",children:[l(e.div,{"data-rehype-pretty-code-title":"","data-language":"tsx","data-theme":"default",children:".env"}),l(e.pre,{"data-language":"tsx","data-theme":"default",children:l(e.code,{"data-language":"tsx","data-theme":"default",children:l(e.span,{class:"line",children:[l(e.span,{style:{backgroundColor:"rgb(196 42 94 / 59%)",color:"rgb(255 225 225 / 100%)"},class:"word",children:"PUBLIC_API_URL"}),l(e.span,{style:{color:"#D4D4D4"},children:"="}),l(e.span,{style:{color:"#C8C8C8"},children:"https"}),l(e.span,{style:{color:"#D4D4D4"},children:":"}),l(e.span,{style:{color:"#6A9955"},children:"//api.example.com"})]})})})]}),`
`,l(e.div,{"data-rehype-pretty-code-fragment":"",children:[l(e.div,{"data-rehype-pretty-code-title":"","data-language":"tsx","data-theme":"default",children:"src/routes/index.tsx"}),l(e.pre,{"data-language":"tsx","data-theme":"default",children:l(e.code,{"data-language":"tsx","data-theme":"default",children:[l(e.span,{class:"line",children:[l(e.span,{style:{color:"#C586C0"},children:"import"}),l(e.span,{style:{color:"#D4D4D4"},children:" { "}),l(e.span,{style:{color:"#9CDCFE"},children:"component$"}),l(e.span,{style:{color:"#D4D4D4"},children:" } "}),l(e.span,{style:{color:"#C586C0"},children:"from"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#CE9178"},children:"'@builder.io/qwik'"}),l(e.span,{style:{color:"#D4D4D4"},children:";"})]}),`
`,l(e.span,{class:"line",children:" "}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#C586C0"},children:"export"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#C586C0"},children:"default"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#DCDCAA"},children:"component$"}),l(e.span,{style:{color:"#D4D4D4"},children:"(() "}),l(e.span,{style:{color:"#569CD6"},children:"=>"}),l(e.span,{style:{color:"#D4D4D4"},children:" {"})]}),`
`,l(e.span,{class:"line line--highlighted",children:[l(e.span,{style:{color:"#D4D4D4"},children:"  "}),l(e.span,{style:{color:"#6A9955"},children:"// `({}).PUBLIC_*` variables can be read anywhere, including browser"})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"  "}),l(e.span,{style:{color:"#C586C0"},children:"return"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#808080"},children:"<"}),l(e.span,{style:{color:"#569CD6"},children:"div"}),l(e.span,{style:{color:"#808080"},children:">"}),l(e.span,{style:{backgroundColor:"rgb(196 42 94 / 59%)",color:"rgb(255 225 225 / 100%)"},class:"word",children:"PUBLIC_API_URL"}),l(e.span,{style:{color:"#D4D4D4"},children:": "}),l(e.span,{style:{color:"#569CD6"},children:"{"}),l(e.span,{style:{color:"#C586C0"},children:"import"}),l(e.span,{style:{color:"#D4D4D4"},children:"."}),l(e.span,{style:{color:"#9CDCFE"},children:"meta"}),l(e.span,{style:{color:"#D4D4D4"},children:"."}),l(e.span,{style:{color:"#9CDCFE"},children:"env"}),l(e.span,{style:{color:"#D4D4D4"},children:"."}),l(e.span,{style:{backgroundColor:"rgb(196 42 94 / 59%)",color:"rgb(255 225 225 / 100%)"},class:"word",children:"PUBLIC_API_URL"}),l(e.span,{style:{color:"#569CD6"},children:"}"}),l(e.span,{style:{color:"#808080"},children:"</"}),l(e.span,{style:{color:"#569CD6"},children:"div"}),l(e.span,{style:{color:"#808080"},children:">"})]}),`
`,l(e.span,{class:"line",children:l(e.span,{style:{color:"#D4D4D4"},children:"})"})})]})})]}),`
`,l(e.blockquote,{children:[`
`,l(e.p,{children:[l(e.code,{children:"({}).PUBLIC_*"})," variables can be read anywhere, but do not put any sensitive information in them, since they will be visible to the client."]}),`
`]}),`
`,l(e.h2,{id:"server-side-variables",children:[l(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#server-side-variables",children:l(e.span,{class:"icon icon-link"})}),"Server-side variables"]}),`
`,l(e.p,{children:"Server-side variables are fundamentally runtime variables that are only available in the server-side code."}),`
`,l(e.p,{children:["They are not known at build-time and are not available in the browser, so they can be considered as ",l(e.strong,{children:"private"}),"."]}),`
`,l(e.p,{children:["Server-side variables can only be accessed in server-only APIs that expose the ",l(e.code,{children:"RequestEvent"})," object, such as ",l(e.code,{children:"routeLoader$()"}),", ",l(e.code,{children:"routeAction$()"}),", ",l(e.code,{children:"server$()"})," and endpoint handlers such as ",l(e.code,{children:"onGet"}),", ",l(e.code,{children:"onPost, "}),"onRequest, etc."]}),`
`,l(e.div,{"data-rehype-pretty-code-fragment":"",children:[l(e.div,{"data-rehype-pretty-code-title":"","data-language":"tsx","data-theme":"default",children:"src/routes/index.tsx"}),l(e.pre,{"data-language":"tsx","data-theme":"default",children:l(e.code,{"data-language":"tsx","data-theme":"default",children:[l(e.span,{class:"line",children:[l(e.span,{style:{color:"#C586C0"},children:"import"}),l(e.span,{style:{color:"#D4D4D4"},children:" {"})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"  "}),l(e.span,{style:{color:"#9CDCFE"},children:"routeLoader$"}),l(e.span,{style:{color:"#D4D4D4"},children:","})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"  "}),l(e.span,{style:{color:"#9CDCFE"},children:"routeAction$"}),l(e.span,{style:{color:"#D4D4D4"},children:","})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"  "}),l(e.span,{style:{color:"#9CDCFE"},children:"server$"}),l(e.span,{style:{color:"#D4D4D4"},children:","})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"  "}),l(e.span,{style:{color:"#C586C0"},children:"type"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#9CDCFE"},children:"RequestEvent"}),l(e.span,{style:{color:"#D4D4D4"},children:","})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"} "}),l(e.span,{style:{color:"#C586C0"},children:"from"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#CE9178"},children:"'@builder.io/qwik-city'"}),l(e.span,{style:{color:"#D4D4D4"},children:";"})]}),`
`,l(e.span,{class:"line",children:" "}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#C586C0"},children:"export"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#569CD6"},children:"const"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#DCDCAA"},children:"onGet"}),l(e.span,{style:{color:"#D4D4D4"},children:" = ("}),l(e.span,{style:{color:"#9CDCFE"},children:"requestEvent"}),l(e.span,{style:{color:"#D4D4D4"},children:": "}),l(e.span,{style:{color:"#4EC9B0"},children:"RequestEvent"}),l(e.span,{style:{color:"#D4D4D4"},children:") "}),l(e.span,{style:{color:"#569CD6"},children:"=>"}),l(e.span,{style:{color:"#D4D4D4"},children:" {"})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"  "}),l(e.span,{style:{color:"#9CDCFE"},children:"console"}),l(e.span,{style:{color:"#D4D4D4"},children:"."}),l(e.span,{style:{color:"#DCDCAA"},children:"log"}),l(e.span,{style:{color:"#D4D4D4"},children:"("}),l(e.span,{style:{color:"#9CDCFE"},children:"requestEvent"}),l(e.span,{style:{color:"#D4D4D4"},children:"."}),l(e.span,{style:{color:"#9CDCFE"},children:"env"}),l(e.span,{style:{color:"#D4D4D4"},children:"."}),l(e.span,{style:{color:"#DCDCAA"},children:"get"}),l(e.span,{style:{color:"#D4D4D4"},children:"("}),l(e.span,{style:{color:"#CE9178"},children:"'"}),l(e.span,{style:{color:"#CE9178"},class:"word",children:"DB_PRIVATE_KEY"}),l(e.span,{style:{color:"#CE9178"},children:"'"}),l(e.span,{style:{color:"#D4D4D4"},children:"));"})]}),`
`,l(e.span,{class:"line",children:l(e.span,{style:{color:"#D4D4D4"},children:"};"})}),`
`,l(e.span,{class:"line",children:" "}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#C586C0"},children:"export"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#569CD6"},children:"const"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#DCDCAA"},children:"onPost"}),l(e.span,{style:{color:"#D4D4D4"},children:" = ("}),l(e.span,{style:{color:"#9CDCFE"},children:"requestEvent"}),l(e.span,{style:{color:"#D4D4D4"},children:": "}),l(e.span,{style:{color:"#4EC9B0"},children:"RequestEvent"}),l(e.span,{style:{color:"#D4D4D4"},children:") "}),l(e.span,{style:{color:"#569CD6"},children:"=>"}),l(e.span,{style:{color:"#D4D4D4"},children:" {"})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"  "}),l(e.span,{style:{color:"#9CDCFE"},children:"console"}),l(e.span,{style:{color:"#D4D4D4"},children:"."}),l(e.span,{style:{color:"#DCDCAA"},children:"log"}),l(e.span,{style:{color:"#D4D4D4"},children:"("}),l(e.span,{style:{color:"#9CDCFE"},children:"requestEvent"}),l(e.span,{style:{color:"#D4D4D4"},children:"."}),l(e.span,{style:{color:"#9CDCFE"},children:"env"}),l(e.span,{style:{color:"#D4D4D4"},children:"."}),l(e.span,{style:{color:"#DCDCAA"},children:"get"}),l(e.span,{style:{color:"#D4D4D4"},children:"("}),l(e.span,{style:{color:"#CE9178"},children:"'"}),l(e.span,{style:{color:"#CE9178"},class:"word",children:"DB_PRIVATE_KEY"}),l(e.span,{style:{color:"#CE9178"},children:"'"}),l(e.span,{style:{color:"#D4D4D4"},children:"));"})]}),`
`,l(e.span,{class:"line",children:l(e.span,{style:{color:"#D4D4D4"},children:"};"})}),`
`,l(e.span,{class:"line",children:" "}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#C586C0"},children:"export"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#569CD6"},children:"const"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#4FC1FF"},children:"useAction"}),l(e.span,{style:{color:"#D4D4D4"},children:" = "}),l(e.span,{style:{color:"#DCDCAA"},children:"routeAction$"}),l(e.span,{style:{color:"#D4D4D4"},children:"("}),l(e.span,{style:{color:"#569CD6"},children:"async"}),l(e.span,{style:{color:"#D4D4D4"},children:" ("}),l(e.span,{style:{color:"#9CDCFE"},children:"_"}),l(e.span,{style:{color:"#D4D4D4"},children:", "}),l(e.span,{style:{color:"#9CDCFE"},children:"requestEvent"}),l(e.span,{style:{color:"#D4D4D4"},children:") "}),l(e.span,{style:{color:"#569CD6"},children:"=>"}),l(e.span,{style:{color:"#D4D4D4"},children:" {"})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"  "}),l(e.span,{style:{color:"#9CDCFE"},children:"console"}),l(e.span,{style:{color:"#D4D4D4"},children:"."}),l(e.span,{style:{color:"#DCDCAA"},children:"log"}),l(e.span,{style:{color:"#D4D4D4"},children:"("}),l(e.span,{style:{color:"#9CDCFE"},children:"requestEvent"}),l(e.span,{style:{color:"#D4D4D4"},children:"."}),l(e.span,{style:{color:"#9CDCFE"},children:"env"}),l(e.span,{style:{color:"#D4D4D4"},children:"."}),l(e.span,{style:{color:"#DCDCAA"},children:"get"}),l(e.span,{style:{color:"#D4D4D4"},children:"("}),l(e.span,{style:{color:"#CE9178"},children:"'"}),l(e.span,{style:{color:"#CE9178"},class:"word",children:"DB_PRIVATE_KEY"}),l(e.span,{style:{color:"#CE9178"},children:"'"}),l(e.span,{style:{color:"#D4D4D4"},children:"));"})]}),`
`,l(e.span,{class:"line",children:l(e.span,{style:{color:"#D4D4D4"},children:"});"})}),`
`,l(e.span,{class:"line",children:" "}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#C586C0"},children:"export"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#569CD6"},children:"const"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#4FC1FF"},children:"useLoader"}),l(e.span,{style:{color:"#D4D4D4"},children:" = "}),l(e.span,{style:{color:"#DCDCAA"},children:"routeLoader$"}),l(e.span,{style:{color:"#D4D4D4"},children:"("}),l(e.span,{style:{color:"#569CD6"},children:"async"}),l(e.span,{style:{color:"#D4D4D4"},children:" ("}),l(e.span,{style:{color:"#9CDCFE"},children:"requestEvent"}),l(e.span,{style:{color:"#D4D4D4"},children:") "}),l(e.span,{style:{color:"#569CD6"},children:"=>"}),l(e.span,{style:{color:"#D4D4D4"},children:" {"})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"  "}),l(e.span,{style:{color:"#9CDCFE"},children:"console"}),l(e.span,{style:{color:"#D4D4D4"},children:"."}),l(e.span,{style:{color:"#DCDCAA"},children:"log"}),l(e.span,{style:{color:"#D4D4D4"},children:"("}),l(e.span,{style:{color:"#9CDCFE"},children:"requestEvent"}),l(e.span,{style:{color:"#D4D4D4"},children:"."}),l(e.span,{style:{color:"#9CDCFE"},children:"env"}),l(e.span,{style:{color:"#D4D4D4"},children:"."}),l(e.span,{style:{color:"#DCDCAA"},children:"get"}),l(e.span,{style:{color:"#D4D4D4"},children:"("}),l(e.span,{style:{color:"#CE9178"},children:"'"}),l(e.span,{style:{color:"#CE9178"},class:"word",children:"DB_PRIVATE_KEY"}),l(e.span,{style:{color:"#CE9178"},children:"'"}),l(e.span,{style:{color:"#D4D4D4"},children:"));"})]}),`
`,l(e.span,{class:"line",children:l(e.span,{style:{color:"#D4D4D4"},children:"});"})}),`
`,l(e.span,{class:"line",children:" "}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#C586C0"},children:"export"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#569CD6"},children:"const"}),l(e.span,{style:{color:"#D4D4D4"},children:" "}),l(e.span,{style:{color:"#4FC1FF"},children:"serverFunction"}),l(e.span,{style:{color:"#D4D4D4"},children:" = "}),l(e.span,{style:{color:"#DCDCAA"},children:"server$"}),l(e.span,{style:{color:"#D4D4D4"},children:"("}),l(e.span,{style:{color:"#569CD6"},children:"function"}),l(e.span,{style:{color:"#D4D4D4"},children:" () {"})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"  "}),l(e.span,{style:{color:"#6A9955"},children:"// `this` is the `RequestEvent` object"})]}),`
`,l(e.span,{class:"line",children:[l(e.span,{style:{color:"#D4D4D4"},children:"  "}),l(e.span,{style:{color:"#9CDCFE"},children:"console"}),l(e.span,{style:{color:"#D4D4D4"},children:"."}),l(e.span,{style:{color:"#DCDCAA"},children:"log"}),l(e.span,{style:{color:"#D4D4D4"},children:"("}),l(e.span,{style:{color:"#569CD6"},children:"this"}),l(e.span,{style:{color:"#D4D4D4"},children:"."}),l(e.span,{style:{color:"#9CDCFE"},children:"env"}),l(e.span,{style:{color:"#D4D4D4"},children:"."}),l(e.span,{style:{color:"#DCDCAA"},children:"get"}),l(e.span,{style:{color:"#D4D4D4"},children:"("}),l(e.span,{style:{color:"#CE9178"},children:"'"}),l(e.span,{style:{color:"#CE9178"},class:"word",children:"DB_PRIVATE_KEY"}),l(e.span,{style:{color:"#CE9178"},children:"'"}),l(e.span,{style:{color:"#D4D4D4"},children:"));"})]}),`
`,l(e.span,{class:"line",children:l(e.span,{style:{color:"#D4D4D4"},children:"});"})})]})})]}),`
`,l(e.h3,{id:"defining-server-side-variables",children:[l(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#defining-server-side-variables",children:l(e.span,{class:"icon icon-link"})}),"Defining server-side variables"]}),`
`,l(e.p,{children:["During development server-side variables can be defined in the ",l(e.code,{children:".env.local"})," file, this file is ignored by git by default, so it is safe to put sensitive information in it."]}),`
`,l(e.div,{"data-rehype-pretty-code-fragment":"",children:[l(e.div,{"data-rehype-pretty-code-title":"","data-language":"env","data-theme":"default",children:".env.local"}),l(e.pre,{"data-language":"env","data-theme":"default",children:l(e.code,{"data-language":"env","data-theme":"default",children:l(e.span,{class:"line",children:l(e.span,{style:{color:"#D4D4D4"},children:"DB_PRIVATE_KEY=123456789"})})})})]}),`
`,l(e.blockquote,{children:[`
`,l(e.p,{children:["Make sure you never commit ",l(e.code,{children:".env.local"})," files to git."]}),`
`]}),`
`,l(e.p,{children:["During production, ",l(e.strong,{children:"setting server-side variables is very platform specific"}),". Most of the platforms allow you to set environment variables from their dashboard, or CLI. Please, refer to your platform (cloudflare, vercel, netlify) documentation for more information."]})]})}function a(n={}){const{wrapper:e}=n.components||{};return e?l(e,Object.assign({},n,{children:l(s,n)})):s(n)}const h=()=>r(c,{children:r(a,{},3,null)},3,"gZ7ui-wd");export{h as default,D as frontmatter,d as head,t as headings};
