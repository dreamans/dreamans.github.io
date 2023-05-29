import{d as i,F as a,H as t,g as c}from"./q-71956c83.js";const d=[{text:"Example",id:"example",level:3}],h={title:"Optimizer",meta:[],styles:[],links:[],frontmatter:{contributors:["manucorporat","adamdbradley","mhevery"]}},s={title:"Optimizer",contributors:["manucorporat","adamdbradley","mhevery"]};function o(n){const e=Object.assign({p:"p",code:"code",a:"a",h3:"h3",span:"span"},n.components);return t(c,{children:[t(e.p,{children:["For the application to be resumable it needs to have lots of entry points. For example, clicking on button ",t(e.code,{children:"A"})," is a different entry point than clicking on button ",t(e.code,{children:"B"}),". When we implement an application we don't usually think about entry points and so we typically end up with just one entry point or the ",t(e.code,{children:"main()"})," function."]}),`
`,t(e.p,{children:["The Optimizer does its job by looking for functions that end in ",t(e.code,{children:"$"})," character. For example, the Optimizer will transform a call to ",t(e.a,{href:"/docs/components/overview/#component",children:t(e.code,{children:"component$()"})})," into an entry point. Notice that the name of the function doesn't matter only that it ends with the ",t(e.code,{children:"$"}),"."]}),`
`,t(e.p,{children:["Every time you see ",t(e.code,{children:"$"})," you should think, there is a lazy-loaded boundary here. The implication is that the lazy-loaded content may require lazy-loading and hence can't be accessed synchronously."]}),`
`,t(e.p,{children:"While the Optimizer can serialize any data that Qwik can serialize, it has special handling for closures. Closures are functions that are created inside of other functions and that may capture variables in the lexical scope. The ability to serialize closures is a key property that makes Qwik resumable. Without closure serialization, it would be difficult to have resumable applications."}),`
`,t(e.h3,{id:"example",children:[t(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#example",children:t(e.span,{class:"icon icon-link"})}),"Example"]}),`
`,t(e.p,{children:["In this example notice that we have two lazy-loaded chunks because we have two ",t(e.code,{children:"$"})," in our code."]}),`
`,t(e.p,{children:["Open the ",t(e.code,{children:"Symbols"})," tab and notice how Optimizer turned the ",t(e.code,{children:"onClick$"})," function into an entry point. Specifically, notice that the ",t(e.code,{children:"onClick$"})," entry point does not import the ",t(e.code,{children:"@builder.io/qwik"})," module."]}),`
`,t(e.p,{children:["Now change the ",t(e.code,{children:"onClick$"})," callback to ",t(e.code,{children:"store.count++"}),"."]}),`
`,t(e.p,{children:["Open the ",t(e.code,{children:"Symbols"})," tab again and notice that this time the Optimizer imported ",t(e.code,{children:"@builder.io/qwik"})," and inserted ",t(e.code,{children:"useLexicalScope()"})," call to restore the captured state of the event handler. Restoring the captured state of the function is what makes Qwik resumable."]})]})}function r(n={}){const{wrapper:e}=n.components||{};return e?t(e,Object.assign({},n,{children:t(o,n)})):o(n)}const p=()=>i(a,{children:i(r,{},3,null)},3,"5-PI00wa");export{p as default,s as frontmatter,h as head,d as headings};
