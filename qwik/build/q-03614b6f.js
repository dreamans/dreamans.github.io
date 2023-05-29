import{d as t,F as r,H as n,g as o}from"./q-71956c83.js";const d=[{text:"Internationalization",id:"internationalization",level:1},{text:"Runtime vs compile time translation",id:"runtime-vs-compile-time-translation",level:2},{text:"Recommendation",id:"recommendation",level:2},{text:"Browser",id:"browser",level:3},{text:"Server",id:"server",level:3},{text:"Development",id:"development",level:3},{text:"Our Recommendation",id:"our-recommendation",level:3},{text:"Internationalization libraries",id:"internationalization-libraries",level:2}],h={title:"Internationalization",meta:[],styles:[],links:[],frontmatter:{contributors:["mhevery","manucorporat"]}},c={title:"Internationalization",contributors:["mhevery","manucorporat"]};function a(i){const e=Object.assign({h1:"h1",a:"a",span:"span",p:"p",h2:"h2",ul:"ul",li:"li",ol:"ol",h3:"h3"},i.components);return n(o,{children:[n(e.h1,{id:"internationalization",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#internationalization",children:n(e.span,{class:"icon icon-link"})}),"Internationalization"]}),`
`,n(e.p,{children:"Internationalization is a complex problem. Qwik does not solve the internationalization problem directly instead it only provides low-level APIs to allow other libraries to solve it."}),`
`,n(e.h2,{id:"runtime-vs-compile-time-translation",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#runtime-vs-compile-time-translation",children:n(e.span,{class:"icon icon-link"})}),"Runtime vs compile time translation"]}),`
`,n(e.p,{children:"At a high level there are two ways in which the translation problem can be solved:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Runtime: load a translation map and look up the translations at runtime."}),`
`,n(e.li,{children:"Compile time: Have a compile step inline the translations into the output string."}),`
`]}),`
`,n(e.p,{children:"Both of the above approaches have trade-offs that one should take into consideration."}),`
`,n(e.p,{children:"The advantages of runtime approaches are:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Simplicity. Does not require an additional build step."}),`
`]}),`
`,n(e.p,{children:"Disadvantages of the runtime approach are:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["Each string is present in triplicate:",`
`,n(e.ol,{children:[`
`,n(e.li,{children:"Once as the original string in the code."}),`
`,n(e.li,{children:"Once as a key in a translation map."}),`
`,n(e.li,{children:"Once as a translated value in the translation map."}),`
`]}),`
`]}),`
`,n(e.li,{children:"The tools don't know how to break up the translation map, for this reason, the whole translation map must be loaded eagerly on application startup. This is a problem because it undoes the effort Qwik put into breaking up and lazy load your codebase. In addition because translation maps are not broken up, the browser will download unnecessary translations. For example, translations for static components that will never re-render on the client."}),`
`,n(e.li,{children:"There is a runtime cost to translation lookups."}),`
`]}),`
`,n(e.p,{children:"The advantages of compile-time approaches are:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Qwik's lazy loading of code now extends to the lazy loading of translation strings. (No unnecessary translation text is loaded)"}),`
`,n(e.li,{children:"No runtime translation map means strings are not in triplicate."}),`
`]}),`
`,n(e.p,{children:"Disadvantages of compile time approaches are:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Extra build step."}),`
`,n(e.li,{children:"Changing languages requires a page reload."}),`
`]}),`
`,n(e.h2,{id:"recommendation",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#recommendation",children:n(e.span,{class:"icon icon-link"})}),"Recommendation"]}),`
`,n(e.p,{children:"With the above in mind, Qwik recommends that you use a tool that best fits your constraints. To help you make a decision there are three different considerations: Browser, Server, and Development."}),`
`,n(e.h3,{id:"browser",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#browser",children:n(e.span,{class:"icon icon-link"})}),"Browser"]}),`
`,n(e.p,{children:"Qwik's goal is to deliver the best possible user experience. It achieves this by deferring the loading of code to later so that the initial startup performance is not overwhelmed. Because the runtime approach requires eager loading of all translations, we don't recommend this approach. We think that the compile-time approach is best for the browser."}),`
`,n(e.h3,{id:"server",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#server",children:n(e.span,{class:"icon icon-link"})}),"Server"]}),`
`,n(e.p,{children:"The server does not have the constraint of lazy loading. For this reason, the server can use either the runtime or compiled approach. The disadvantage of compile time approach on the server is that we need to have a separate deployment for each translation. This complicates the deployment process as well as puts greater demand on number of servers. For this reason, we think the runtime approach is preferable on the server."}),`
`,n(e.h3,{id:"development",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#development",children:n(e.span,{class:"icon icon-link"})}),"Development"]}),`
`,n(e.p,{children:"During development, fewer build steps will result in a faster turnaround. For this reason, runtime translation should result in a simpler development workflow."}),`
`,n(e.h3,{id:"our-recommendation",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#our-recommendation",children:n(e.span,{class:"icon icon-link"})}),"Our Recommendation"]}),`
`,n(e.p,{children:"Our recommendation is to use a tool that would provide a runtime approach on the server, and runtime or compile time on the client depending on whether we are in development or production. This way it is possible to prove the best user experience and development experience, and use the least server resources."}),`
`,n(e.h2,{id:"internationalization-libraries",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#internationalization-libraries",children:n(e.span,{class:"icon icon-link"})}),"Internationalization libraries"]}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://github.com/mhevery/qwik-i18n",children:"$localize"})}),`
`,n(e.li,{children:n(e.a,{href:"https://github.com/robisim74/qwik-speak",children:"qwik-speak"})}),`
`]})]})}function l(i={}){const{wrapper:e}=i.components||{};return e?n(e,Object.assign({},i,{children:n(a,i)})):a(i)}const p=()=>t(r,{children:t(l,{},3,null)},3,"CPVIJhpZ");export{p as default,c as frontmatter,h as head,d as headings};
