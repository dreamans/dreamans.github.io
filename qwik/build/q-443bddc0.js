import{d as n,F as d,H as t,g as l}from"./q-71956c83.js";const h=[{text:"API › @builder.io/qwik-city/vite/vercel",id:"api--builderioqwik-cityvitevercel",level:1},{text:"vercelEdgeAdapter",id:"verceledgeadapter",level:2},{text:"VercelEdgeAdapterOptions",id:"verceledgeadapteroptions",level:2}],o={title:"@builder.io/qwik-city/vite/vercel API Reference",meta:[],styles:[],links:[],frontmatter:{}},s={title:"\\@builder.io/qwik-city/vite/vercel API Reference"};function i(r){const e=Object.assign({h1:"h1",a:"a",span:"span",h2:"h2",div:"div",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",em:"em",p:"p",strong:"strong"},r.components);return t(l,{children:[t(e.h1,{id:"api--builderioqwik-cityvitevercel",children:[t(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#api--builderioqwik-cityvitevercel",children:t(e.span,{class:"icon icon-link"})}),t(e.a,{href:"/api",children:"API"})," › @builder.io/qwik-city/vite/vercel"]}),`
`,t(e.h2,{id:"verceledgeadapter",children:[t(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#verceledgeadapter",children:t(e.span,{class:"icon icon-link"})}),"vercelEdgeAdapter"]}),`
`,t(e.div,{"data-rehype-pretty-code-fragment":"",children:t(e.pre,{"data-language":"typescript","data-theme":"default",children:t(e.code,{"data-language":"typescript","data-theme":"default",children:t(e.span,{class:"line",children:[t(e.span,{style:{color:"#C586C0"},children:"export"}),t(e.span,{style:{color:"#D4D4D4"},children:" "}),t(e.span,{style:{color:"#569CD6"},children:"declare"}),t(e.span,{style:{color:"#D4D4D4"},children:" "}),t(e.span,{style:{color:"#569CD6"},children:"function"}),t(e.span,{style:{color:"#D4D4D4"},children:" "}),t(e.span,{style:{color:"#DCDCAA"},children:"vercelEdgeAdapter"}),t(e.span,{style:{color:"#D4D4D4"},children:"("}),t(e.span,{style:{color:"#9CDCFE"},children:"opts"}),t(e.span,{style:{color:"#D4D4D4"},children:"?: "}),t(e.span,{style:{color:"#4EC9B0"},children:"VercelEdgeAdapterOptions"}),t(e.span,{style:{color:"#D4D4D4"},children:"): "}),t(e.span,{style:{color:"#4EC9B0"},children:"any"}),t(e.span,{style:{color:"#D4D4D4"},children:";"})]})})})}),`
`,t(e.div,{class:"table-wrapper",children:t(e.table,{children:[t(e.thead,{children:t(e.tr,{children:[t(e.th,{children:"Parameter"}),t(e.th,{children:"Type"}),t(e.th,{children:"Description"})]})}),t(e.tbody,{children:t(e.tr,{children:[t(e.td,{children:"opts"}),t(e.td,{children:t(e.a,{href:"#verceledgeadapteroptions",children:"VercelEdgeAdapterOptions"})}),t(e.td,{children:t(e.em,{children:"(Optional)"})})]})})]})}),`
`,t(e.p,{children:t(e.strong,{children:"Returns:"})}),`
`,t(e.p,{children:"any"}),`
`,t(e.p,{children:t(e.a,{href:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/adapters/vercel-edge/vite/index.ts",children:"Edit this section"})}),`
`,t(e.h2,{id:"verceledgeadapteroptions",children:[t(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#verceledgeadapteroptions",children:t(e.span,{class:"icon icon-link"})}),"VercelEdgeAdapterOptions"]}),`
`,t(e.div,{"data-rehype-pretty-code-fragment":"",children:t(e.pre,{"data-language":"typescript","data-theme":"default",children:t(e.code,{"data-language":"typescript","data-theme":"default",children:t(e.span,{class:"line",children:[t(e.span,{style:{color:"#C586C0"},children:"export"}),t(e.span,{style:{color:"#D4D4D4"},children:" "}),t(e.span,{style:{color:"#569CD6"},children:"interface"}),t(e.span,{style:{color:"#D4D4D4"},children:" "}),t(e.span,{style:{color:"#4EC9B0"},children:"VercelEdgeAdapterOptions"}),t(e.span,{style:{color:"#D4D4D4"},children:" "}),t(e.span,{style:{color:"#569CD6"},children:"extends"}),t(e.span,{style:{color:"#D4D4D4"},children:" "}),t(e.span,{style:{color:"#4EC9B0"},children:"ServerAdapterOptions"})]})})})}),`
`,t(e.p,{children:[t(e.strong,{children:"Extends:"})," ServerAdapterOptions"]}),`
`,t(e.div,{class:"table-wrapper",children:t(e.table,{children:[t(e.thead,{children:t(e.tr,{children:[t(e.th,{children:"Property"}),t(e.th,{children:"Modifiers"}),t(e.th,{children:"Type"}),t(e.th,{children:"Description"})]})}),t(e.tbody,{children:[t(e.tr,{children:[t(e.td,{children:t(e.a,{href:"#",children:"outputConfig?"})}),t(e.td,{}),t(e.td,{children:"boolean"}),t(e.td,{children:[t(e.em,{children:"(Optional)"})," Determines if the build should auto-generate the ",".vercel/output/config.json"," config.","Defaults to ","true","."]})]}),t(e.tr,{children:[t(e.td,{children:t(e.a,{href:"#",children:"staticPaths?"})}),t(e.td,{}),t(e.td,{children:"string[]"}),t(e.td,{children:[t(e.em,{children:"(Optional)"})," Manually add pathnames that should be treated as static paths and not SSR. For example, when these pathnames are requested, their response should come from a static file, rather than a server-side rendered response."]})]}),t(e.tr,{children:[t(e.td,{children:t(e.a,{href:"#",children:"vcConfigEntryPoint?"})}),t(e.td,{}),t(e.td,{children:"string"}),t(e.td,{children:[t(e.em,{children:"(Optional)"})," The ","entrypoint"," property in the ",".vc-config.json"," file. Indicates the initial file where code will be executed for the Edge Function.","Defaults to ","entry.vercel-edge.js","."]})]}),t(e.tr,{children:[t(e.td,{children:t(e.a,{href:"#",children:"vcConfigEnvVarsInUse?"})}),t(e.td,{}),t(e.td,{children:"string[]"}),t(e.td,{children:[t(e.em,{children:"(Optional)"})," The ","envVarsInUse"," property in the ",".vc-config.json"," file. List of environment variable names that will be available for the Edge Function to utilize.","Defaults to ","undefined","."]})]})]})]})}),`
`,t(e.p,{children:t(e.a,{href:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/adapters/vercel-edge/vite/index.ts",children:"Edit this section"})})]})}function c(r={}){const{wrapper:e}=r.components||{};return e?t(e,Object.assign({},r,{children:t(i,r)})):i(r)}const p=()=>n(d,{children:n(c,{},3,null)},3,"H37O0CYw");export{p as default,s as frontmatter,o as head,h as headings};
