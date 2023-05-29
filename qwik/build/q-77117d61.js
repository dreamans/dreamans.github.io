import{d as t,F as s,H as n,g as c}from"./q-71956c83.js";const i={title:"Synchronous Event Processing",meta:[],styles:[],links:[],frontmatter:{contributors:["adamdbradley","manucorporat","kerbelp","mhevery","cunzaizhuyi","spenserblack","hamatoyogi"]}},d={title:"Synchronous Event Processing",contributors:["adamdbradley","manucorporat","kerbelp","mhevery","cunzaizhuyi","spenserblack","hamatoyogi"]};function r(o){const e=Object.assign({p:"p",blockquote:"blockquote",strong:"strong",code:"code",a:"a"},o.components);return n(c,{children:[n(e.p,{children:"While not a common use case, you may occasionally need to process events synchronously."}),`
`,n(e.p,{children:"Since Qwik processes asynchronously by default, your code must be explicitly configured for synchronous calls. This example shows how to eagerly load an event handler that processes a synchronous event."}),`
`,n(e.blockquote,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Your task:"})," Convert the ",n(e.code,{children:"onClick$"})," from asynchronous event to synchronous event by using ",n(e.a,{href:"/docs/components/tasks/#usevisibletask",children:n(e.code,{children:"useVisibleTask$"})})," lifecycle and ",n(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener",children:"normal event registration"}),"."]}),`
`]})]})}function a(o={}){const{wrapper:e}=o.components||{};return e?n(e,Object.assign({},o,{children:n(r,o)})):r(o)}const h=()=>t(s,{children:t(a,{},3,null)},3,"mkOa8Mw9");export{h as default,d as frontmatter,i as head};