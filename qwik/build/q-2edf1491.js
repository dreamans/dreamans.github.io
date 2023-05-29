import{d as r,F as s,H as n,g as o}from"./q-71956c83.js";const a=[{text:"Fetching data",id:"fetching-data",level:2},{text:"Rendering data",id:"rendering-data",level:2},{text:"SSR vs Client",id:"ssr-vs-client",level:2}],d={title:"Basics - Qwik Tutorial",meta:[],styles:[],links:[],frontmatter:{contributors:["adamdbradley","manucorporat","mhevery","saikatdas0790","devagja","avivr","forresst"]}},h={title:"Basics - Qwik Tutorial",contributors:["adamdbradley","manucorporat","mhevery","saikatdas0790","devagja","avivr","forresst"]};function c(l){const e=Object.assign({p:"p",code:"code",a:"a",ul:"ul",li:"li",h2:"h2",span:"span",div:"div",pre:"pre"},l.components);return n(o,{children:[n(e.p,{children:["For this tutorial, we would like to fetch the list of repositories for a given GitHub organization. To aid you, we have added the ",n(e.code,{children:"getRepositories()"})," function to the bottom of the file. Your task is to use the ",n(e.code,{children:"getRepositories()"})," function to fetch the list of repositories whenever the user updates the ",n(e.code,{children:"org"})," input."]}),`
`,n(e.p,{children:["Qwik provides ",n(e.a,{href:"/docs/components/state/",children:n(e.code,{children:"useResource$()"})})," and ",n(e.code,{children:"<Resource>"})," to help you fetch and display data from the server. When fetching data the application can be in one of three states:"]}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.code,{children:"pending"}),": the data is being fetched from the server => Render ",n(e.code,{children:"loading..."})," indicator."]}),`
`,n(e.li,{children:[n(e.code,{children:"resolved"}),": the data has successfully been fetched from the server => Render the data."]}),`
`,n(e.li,{children:[n(e.code,{children:"rejected"}),": the data could not be fetched from the server due to an error => Render the error."]}),`
`]}),`
`,n(e.p,{children:["Use ",n(e.a,{href:"/docs/components/state/",children:n(e.code,{children:"useResource$()"})})," function to set up how the data is fetched from the server. Use ",n(e.code,{children:"<Resource>"})," to display the data."]}),`
`,n(e.h2,{id:"fetching-data",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#fetching-data",children:n(e.span,{class:"icon icon-link"})}),"Fetching data"]}),`
`,n(e.p,{children:["Use ",n(e.a,{href:"/docs/components/state/",children:n(e.code,{children:"useResource$()"})})," to set up how the data is fetched from the server."]}),`
`,n(e.div,{"data-rehype-pretty-code-fragment":"",children:n(e.pre,{"data-language":"jsx","data-theme":"default",children:n(e.code,{"data-language":"jsx","data-theme":"default",children:[n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"  "}),n(e.span,{style:{color:"#569CD6"},children:"const"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#4FC1FF"},children:"reposResource"}),n(e.span,{style:{color:"#D4D4D4"},children:" = "}),n(e.span,{style:{color:"#DCDCAA"},children:"useResource$"}),n(e.span,{style:{color:"#D4D4D4"},children:"<"}),n(e.span,{style:{color:"#4EC9B0"},children:"string"}),n(e.span,{style:{color:"#D4D4D4"},children:"[]>(({ "}),n(e.span,{style:{color:"#9CDCFE"},children:"track"}),n(e.span,{style:{color:"#D4D4D4"},children:", "}),n(e.span,{style:{color:"#9CDCFE"},children:"cleanup"}),n(e.span,{style:{color:"#D4D4D4"},children:" }) "}),n(e.span,{style:{color:"#569CD6"},children:"=>"}),n(e.span,{style:{color:"#D4D4D4"},children:" {"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"    "}),n(e.span,{style:{color:"#6A9955"},children:"// We need a way to re-run fetching data whenever the `github.org` changes."})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"    "}),n(e.span,{style:{color:"#6A9955"},children:"// Use `track` to trigger re-running of this data fetching function."})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"    "}),n(e.span,{style:{color:"#DCDCAA"},children:"track"}),n(e.span,{style:{color:"#D4D4D4"},children:"(() "}),n(e.span,{style:{color:"#569CD6"},children:"=>"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#9CDCFE"},children:"github"}),n(e.span,{style:{color:"#D4D4D4"},children:"."}),n(e.span,{style:{color:"#9CDCFE"},children:"org"}),n(e.span,{style:{color:"#D4D4D4"},children:");"})]}),`
`,n(e.span,{class:"line",children:" "}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"    "}),n(e.span,{style:{color:"#6A9955"},children:"// A good practice is to use `AbortController` to abort the fetching of data if"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"    "}),n(e.span,{style:{color:"#6A9955"},children:"// new request comes in. We create a new `AbortController` and register a `cleanup`"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"    "}),n(e.span,{style:{color:"#6A9955"},children:"// function which is called when this function re-runs."})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"    "}),n(e.span,{style:{color:"#569CD6"},children:"const"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#4FC1FF"},children:"controller"}),n(e.span,{style:{color:"#D4D4D4"},children:" = "}),n(e.span,{style:{color:"#569CD6"},children:"new"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#DCDCAA"},children:"AbortController"}),n(e.span,{style:{color:"#D4D4D4"},children:"();"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"    "}),n(e.span,{style:{color:"#DCDCAA"},children:"cleanup"}),n(e.span,{style:{color:"#D4D4D4"},children:"(() "}),n(e.span,{style:{color:"#569CD6"},children:"=>"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#9CDCFE"},children:"controller"}),n(e.span,{style:{color:"#D4D4D4"},children:"."}),n(e.span,{style:{color:"#DCDCAA"},children:"abort"}),n(e.span,{style:{color:"#D4D4D4"},children:"());"})]}),`
`,n(e.span,{class:"line",children:" "}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"    "}),n(e.span,{style:{color:"#6A9955"},children:"// Fetch the data and return the promises."})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"    "}),n(e.span,{style:{color:"#C586C0"},children:"return"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#DCDCAA"},children:"getRepositories"}),n(e.span,{style:{color:"#D4D4D4"},children:"("}),n(e.span,{style:{color:"#9CDCFE"},children:"github"}),n(e.span,{style:{color:"#D4D4D4"},children:"."}),n(e.span,{style:{color:"#9CDCFE"},children:"org"}),n(e.span,{style:{color:"#D4D4D4"},children:", "}),n(e.span,{style:{color:"#9CDCFE"},children:"controller"}),n(e.span,{style:{color:"#D4D4D4"},children:");"})]}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#D4D4D4"},children:"  });"})})]})})}),`
`,n(e.p,{children:["The ",n(e.a,{href:"/docs/components/state/",children:n(e.code,{children:"useResource$()"})})," function returns a ",n(e.code,{children:"ResourceReturn"})," object, which is a Promise-like object that can be serialized by Qwik. The ",n(e.a,{href:"/docs/components/state/",children:n(e.code,{children:"useResource$()"})})," function allows you to ",n(e.code,{children:"track"})," store properties so that the ",n(e.a,{href:"/docs/components/state/",children:n(e.code,{children:"useResource$()"})})," function can be reactive on store changes. The ",n(e.code,{children:"cleanup"})," function allows you to register code that needs to be run to release resources from the previous run. Finally, the ",n(e.a,{href:"/docs/components/state/",children:n(e.code,{children:"useResource$()"})})," function returns a promise that will resolve to the value."]}),`
`,n(e.h2,{id:"rendering-data",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#rendering-data",children:n(e.span,{class:"icon icon-link"})}),"Rendering data"]}),`
`,n(e.p,{children:["Use ",n(e.code,{children:"<Resource>"})," to display the data of ",n(e.a,{href:"/docs/components/state/",children:n(e.code,{children:"useResource$()"})})," function. The ",n(e.code,{children:"<Resource>"})," allows you to render different content depending if the resource is ",n(e.code,{children:"pending"}),", ",n(e.code,{children:"resolved"})," or ",n(e.code,{children:"rejected"}),"."]}),`
`,n(e.p,{children:["On the server the ",n(e.code,{children:"<Resource>"})," does not render ",n(e.code,{children:"loading"})," state, instead, it pauses rendering until the resource is resolved and will always render as either ",n(e.code,{children:"resolved"})," or ",n(e.code,{children:"rejected"}),". (On the client, the ",n(e.code,{children:"<Resource>"})," renders all states including ",n(e.code,{children:"pending"}),".)"]}),`
`,n(e.div,{"data-rehype-pretty-code-fragment":"",children:n(e.pre,{"data-language":"jsx","data-theme":"default",children:n(e.code,{"data-language":"jsx","data-theme":"default",children:[n(e.span,{class:"line",children:[n(e.span,{style:{color:"#808080"},children:"<"}),n(e.span,{style:{color:"#4EC9B0"},children:"Resource"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"  "}),n(e.span,{style:{color:"#9CDCFE"},children:"value"}),n(e.span,{style:{color:"#D4D4D4"},children:"="}),n(e.span,{style:{color:"#569CD6"},children:"{"}),n(e.span,{style:{color:"#9CDCFE"},children:"resourceToRender"}),n(e.span,{style:{color:"#569CD6"},children:"}"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"  "}),n(e.span,{style:{color:"#9CDCFE"},children:"onPending"}),n(e.span,{style:{color:"#D4D4D4"},children:"="}),n(e.span,{style:{color:"#569CD6"},children:"{"}),n(e.span,{style:{color:"#D4D4D4"},children:"() "}),n(e.span,{style:{color:"#569CD6"},children:"=>"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#808080"},children:"<"}),n(e.span,{style:{color:"#569CD6"},children:"div"}),n(e.span,{style:{color:"#808080"},children:">"}),n(e.span,{style:{color:"#D4D4D4"},children:"Loading..."}),n(e.span,{style:{color:"#808080"},children:"</"}),n(e.span,{style:{color:"#569CD6"},children:"div"}),n(e.span,{style:{color:"#808080"},children:">"}),n(e.span,{style:{color:"#569CD6"},children:"}"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"  "}),n(e.span,{style:{color:"#9CDCFE"},children:"onRejected"}),n(e.span,{style:{color:"#D4D4D4"},children:"="}),n(e.span,{style:{color:"#569CD6"},children:"{"}),n(e.span,{style:{color:"#D4D4D4"},children:"("}),n(e.span,{style:{color:"#9CDCFE"},children:"reason"}),n(e.span,{style:{color:"#D4D4D4"},children:") "}),n(e.span,{style:{color:"#569CD6"},children:"=>"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#808080"},children:"<"}),n(e.span,{style:{color:"#569CD6"},children:"div"}),n(e.span,{style:{color:"#808080"},children:">"}),n(e.span,{style:{color:"#D4D4D4"},children:"Error: "}),n(e.span,{style:{color:"#569CD6"},children:"{"}),n(e.span,{style:{color:"#9CDCFE"},children:"reason"}),n(e.span,{style:{color:"#569CD6"},children:"}"}),n(e.span,{style:{color:"#808080"},children:"</"}),n(e.span,{style:{color:"#569CD6"},children:"div"}),n(e.span,{style:{color:"#808080"},children:">"}),n(e.span,{style:{color:"#569CD6"},children:"}"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"  "}),n(e.span,{style:{color:"#9CDCFE"},children:"onResolved"}),n(e.span,{style:{color:"#D4D4D4"},children:"="}),n(e.span,{style:{color:"#569CD6"},children:"{"}),n(e.span,{style:{color:"#D4D4D4"},children:"("}),n(e.span,{style:{color:"#9CDCFE"},children:"data"}),n(e.span,{style:{color:"#D4D4D4"},children:") "}),n(e.span,{style:{color:"#569CD6"},children:"=>"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#808080"},children:"<"}),n(e.span,{style:{color:"#569CD6"},children:"div"}),n(e.span,{style:{color:"#808080"},children:">"}),n(e.span,{style:{color:"#569CD6"},children:"{"}),n(e.span,{style:{color:"#9CDCFE"},children:"data"}),n(e.span,{style:{color:"#569CD6"},children:"}"}),n(e.span,{style:{color:"#808080"},children:"</"}),n(e.span,{style:{color:"#569CD6"},children:"div"}),n(e.span,{style:{color:"#808080"},children:">"}),n(e.span,{style:{color:"#569CD6"},children:"}"})]}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#808080"},children:"/>"})})]})})}),`
`,n(e.h2,{id:"ssr-vs-client",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#ssr-vs-client",children:n(e.span,{class:"icon icon-link"})}),"SSR vs Client"]}),`
`,n(e.p,{children:["Notice that the same code can render on both server and client (with slightly different behavior, which skips the ",n(e.code,{children:"pending"})," state rendering on the server.)"]})]})}function t(l={}){const{wrapper:e}=l.components||{};return e?n(e,Object.assign({},l,{children:n(c,l)})):c(l)}const D=()=>r(s,{children:r(t,{},3,null)},3,"fx7SJNyq");export{D as default,h as frontmatter,d as head,a as headings};
