import{d as s,F as a,H as t,g as c}from"./q-71956c83.js";const r=[{text:"Example",id:"example",level:3}],d={title:"Scoped Styling",meta:[],styles:[],links:[],frontmatter:{contributors:["manucorporat","adamdbradley","mhevery"]}},h={title:"Scoped Styling",contributors:["manucorporat","adamdbradley","mhevery"]};function o(n){const e=Object.assign({p:"p",a:"a",code:"code",h3:"h3",span:"span"},n.components);return t(c,{children:[t(e.p,{children:["In previous sections, we have discussed how styles can be loaded lazily as they are needed using ",t(e.a,{href:"/docs/components/styles/#usestyles",children:t(e.code,{children:"useStyles$()"})})," hook. Browser styles are global and apply to all DOM elements, for this reason, Qwik also provides a way to load styles that are specific to a specific component. This is achieved by generating a unique class for each component and then inserting that unique class id into the stylesheet."]}),`
`,t(e.p,{children:["Use ",t(e.code,{children:"useStylesScoped$()"})," to load and scope the style to a specific component only."]}),`
`,t(e.h3,{id:"example",children:[t(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#example",children:t(e.span,{class:"icon icon-link"})}),"Example"]}),`
`,t(e.p,{children:["In this example, there are two components both of which have a class with the same name. Because of that, the two styles collide which results in undesirable behavior. Use the ",t(e.code,{children:"useStylesScoped$()"})," hook to scope the styles to a specific component and fix the collision."]})]})}function i(n={}){const{wrapper:e}=n.components||{};return e?t(e,Object.assign({},n,{children:t(o,n)})):o(n)}const p=()=>s(a,{children:s(i,{},3,null)},3,"USIb-8vu");export{p as default,h as frontmatter,d as head,r as headings};
