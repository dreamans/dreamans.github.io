import{d as t,F as s,H as n,g as i}from"./q-71956c83.js";const a=[{text:"Why not inline styles?",id:"why-not-inline-styles",level:2},{text:"Example",id:"example",level:3}],d={title:"Styling",meta:[],styles:[],links:[],frontmatter:{contributors:["manucorporat","adamdbradley","mhevery"]}},h={title:"Styling",contributors:["manucorporat","adamdbradley","mhevery"]};function o(l){const e=Object.assign({p:"p",a:"a",code:"code",h2:"h2",span:"span",div:"div",pre:"pre",ol:"ol",li:"li",blockquote:"blockquote",h3:"h3"},l.components);return n(i,{children:[n(e.p,{children:["Styling is an important part of the design of a web application. Qwik is responsible for loading the style information when a component is mounted. Use ",n(e.a,{href:"/docs/components/styles/#usestyles",children:n(e.code,{children:"useStyles$()"})})," to tell Qwik which style should be loaded."]}),`
`,n(e.h2,{id:"why-not-inline-styles",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#why-not-inline-styles",children:n(e.span,{class:"icon icon-link"})}),"Why not inline styles?"]}),`
`,n(e.p,{children:"A naive way to ensure that a component has the correct styles loaded is to inline the style information into a component like so."}),`
`,n(e.div,{"data-rehype-pretty-code-fragment":"",children:n(e.pre,{"data-language":"tsx","data-theme":"default",children:n(e.code,{"data-language":"tsx","data-theme":"default",children:[n(e.span,{class:"line",children:[n(e.span,{style:{color:"#C586C0"},children:"export"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#569CD6"},children:"const"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#DCDCAA"},children:"MyComponent"}),n(e.span,{style:{color:"#D4D4D4"},children:" = () "}),n(e.span,{style:{color:"#569CD6"},children:"=>"}),n(e.span,{style:{color:"#D4D4D4"},children:" {"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"  "}),n(e.span,{style:{color:"#C586C0"},children:"return"}),n(e.span,{style:{color:"#D4D4D4"},children:" ("})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"    "}),n(e.span,{style:{color:"#808080"},children:"<>"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"    "}),n(e.span,{style:{color:"#808080"},children:"<"}),n(e.span,{style:{color:"#569CD6"},children:"style"}),n(e.span,{style:{color:"#808080"},children:">"}),n(e.span,{style:{color:"#D4D4D4"},children:".my-class "}),n(e.span,{style:{color:"#569CD6"},children:"{"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#9CDCFE"},children:"color"}),n(e.span,{style:{color:"#D4D4D4"},children:": "}),n(e.span,{style:{color:"#9CDCFE"},children:"red"}),n(e.span,{style:{color:"#D4D4D4"},children:"; "}),n(e.span,{style:{color:"#569CD6"},children:"}"}),n(e.span,{style:{color:"#808080"},children:"</"}),n(e.span,{style:{color:"#569CD6"},children:"style"}),n(e.span,{style:{color:"#808080"},children:">"})]}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#D4D4D4"},children:"      My Component"})}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"    "}),n(e.span,{style:{color:"#808080"},children:"</>"})]}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#D4D4D4"},children:"  );"})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#D4D4D4"},children:"}"})})]})})}),`
`,n(e.p,{children:"The problem with this approach is that we will load styles twice."}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:"The styles are inserted into the HTML as part of the SSR."}),`
`,n(e.li,{children:"Then when the component is invalidated and needs to be re-rendered, the styles are loaded again because they are inlined."}),`
`]}),`
`,n(e.p,{children:["What is needed is to load the styles independently from the component. This is what ",n(e.a,{href:"/docs/components/styles/#usestyles",children:n(e.code,{children:"useStyles$()"})})," is for. There are two scenarios:"]}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:["The component is rendered on the server and the styles are inserted into ",n(e.code,{children:"<head>"})," as part of the SSR.",`
`,n(e.blockquote,{children:[`
`,n(e.p,{children:"Adding a new instance of a component to the application does not require that we load the styles as they are already included as part of SSR."}),`
`]}),`
`]}),`
`,n(e.li,{children:["The component is rendered on the client for the first time. In that case, the new component does not have styles in the ",n(e.code,{children:"<head>"})," as the component was not part of SSR.",`
`,n(e.blockquote,{children:[`
`,n(e.p,{children:["Adding a new component that was not part of SSR requires that styles are loaded and inserted into ",n(e.code,{children:"<head>"}),"."]}),`
`]}),`
`]}),`
`]}),`
`,n(e.h3,{id:"example",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#example",children:n(e.span,{class:"icon icon-link"})}),"Example"]}),`
`,n(e.p,{children:"This example contains two components:"}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:[n(e.code,{children:"<Sibling>"}),": The ",n(e.code,{children:"<Sibling>"})," component is pre-rendered on the server. Because it is pre-rendered, it has styles in the ",n(e.code,{children:"<head>"})," as it was part of SSR. Adding additional ",n(e.code,{children:"<Sibling>"})," components does not require any styles to be loaded."]}),`
`,n(e.li,{children:[n(e.code,{children:"<Child>"}),": The ",n(e.code,{children:"<Child>"})," component can be added by clicking the ",n(e.code,{children:"toggle"})," button. Because it was not part of the SSR pre-rendered, it does not have styles in the ",n(e.code,{children:"<head>"}),". Toggling ",n(e.code,{children:"<Child>"})," requires that styles are loaded."]}),`
`]})]})}function r(l={}){const{wrapper:e}=l.components||{};return e?n(e,Object.assign({},l,{children:n(o,l)})):o(l)}const p=()=>t(s,{children:t(r,{},3,null)},3,"7vFou2Fc");export{p as default,h as frontmatter,d as head,a as headings};
