import{d as n,F as o,H as i,g as r}from"./q-71956c83.js";const c=[{text:"Resumable vs. Hydration",id:"resumable-vs-hydration",level:1},{text:"Introducing Resumability",id:"introducing-resumability",level:2},{text:"Listeners",id:"listeners",level:3},{text:"Component Trees",id:"component-trees",level:3},{text:"Application State",id:"application-state",level:3},{text:"Serialization",id:"serialization",level:4},{text:"Writing applications with serializability in mind",id:"writing-applications-with-serializability-in-mind",level:3},{text:"Other benefits of resumability",id:"other-benefits-of-resumability",level:3}],h={title:"Resumable",meta:[],styles:[],links:[],frontmatter:{contributors:["voluntadpear","RATIU5","adamdbradley","manucorporat","Craiqser","ahashem95","mhevery"]}},d={title:"Resumable",contributors:["voluntadpear","RATIU5","adamdbradley","manucorporat","Craiqser","ahashem95","mhevery"]};function a(t){const e=Object.assign({h1:"h1",a:"a",span:"span",p:"p",ol:"ol",li:"li",img:"img",strong:"strong",h2:"h2",h3:"h3",div:"div",pre:"pre",code:"code",h4:"h4",ul:"ul",em:"em"},t.components);return i(r,{children:[i(e.h1,{id:"resumable-vs-hydration",children:[i(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#resumable-vs-hydration",children:i(e.span,{class:"icon icon-link"})}),"Resumable vs. Hydration"]}),`
`,i(e.p,{children:"A key concept of Qwik applications is that they are resumable from a server-side-rendered state. The best way to explain resumability is to understand how the current generation of frameworks are replayable (hydration)."}),`
`,i(e.p,{children:"When an SSR/SSG application boots up on a client, it requires that the framework on the client restores three pieces of information:"}),`
`,i(e.ol,{children:[`
`,i(e.li,{children:"Listeners - locate event listeners and install them on the DOM nodes to make the application interactive."}),`
`,i(e.li,{children:"Component tree - build up an internal data structure representing the application component tree."}),`
`,i(e.li,{children:"Application state - restore the application state."}),`
`]}),`
`,i(e.p,{children:"Collectively, this is known as hydration. All current generations of frameworks require this step to make the application interactive."}),`
`,i(e.p,{children:[i(e.a,{href:"https://www.builder.io/blog/hydration-is-pure-overhead",children:"Hydration is expensive"})," for two reasons:"]}),`
`,i(e.ol,{children:[`
`,i(e.li,{children:"The frameworks have to download all of the component code associated with the current page."}),`
`,i(e.li,{children:"The frameworks have to execute the templates associated with the components on the page to rebuild the listener location and the internal component tree."}),`
`]}),`
`,i(e.p,{children:i(e.img,{src:"https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F04681212764f4025b2b5f5c6a258ad6e?format=webp&width=2000",alt:"Resumable vs Hydration"})}),`
`,i(e.p,{children:"Qwik is different because it does not require hydration to resume an application on the client. Not requiring hydration is what makes the Qwik application startup instantaneous."}),`
`,i(e.p,{children:["All other frameworks' hydration ",i(e.strong,{children:"replays"})," all the application logic in the client. Qwik instead pauses execution in the server, and resumes execution in the client."]}),`
`,i(e.h2,{id:"introducing-resumability",children:[i(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#introducing-resumability",children:i(e.span,{class:"icon icon-link"})}),"Introducing Resumability"]}),`
`,i(e.p,{children:"Resumability is about pausing execution in the server and resuming execution in the client without having to replay and download all of the application logic."}),`
`,i(e.p,{children:"A good mental model is that Qwik applications at any point in their lifecycle can be serialized and moved to a different VM instance (server to browser). There, the application simply resumes where the serialization stopped. No hydration is required. This is why we say that Qwik applications don't hydrate; they resume."}),`
`,i(e.p,{children:"In order to achieve this, Qwik needs to solve the 3 problems (listeners, component tree, application state) in a way that is compatible with a no-code startup."}),`
`,i(e.h3,{id:"listeners",children:[i(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#listeners",children:i(e.span,{class:"icon icon-link"})}),"Listeners"]}),`
`,i(e.p,{children:"DOM without event listeners is just a static page; it is not an application. Today's standard for all sites is quite a high level of interactivity, so even the most static-looking sites are full of event listeners. These include menus, hovers, expanding details, or even full-on interactive apps."}),`
`,i(e.p,{children:"Existing frameworks solve the event listener by downloading the components and executing their templates to collect event listeners that are then attached to the DOM. The current approach has these issues:"}),`
`,i(e.ol,{children:[`
`,i(e.li,{children:"Requires the template code to be eagerly downloaded."}),`
`,i(e.li,{children:"Requires template code to be eagerly executed."}),`
`,i(e.li,{children:"Requires the event handler code to be downloaded eagerly (to be attached)."}),`
`]}),`
`,i(e.p,{children:"The above approach does not scale. As the application becomes more complicated, the amount of code needed to download eagerly and execute grows proportionally with the size of the application. This negatively impacts the application startup performance and hence the user experience."}),`
`,i(e.p,{children:"Qwik solves the above issue by serializing the event listeners into DOM like so:"}),`
`,i(e.div,{"data-rehype-pretty-code-fragment":"",children:i(e.pre,{"data-language":"html","data-theme":"default",children:i(e.code,{"data-language":"html","data-theme":"default",children:i(e.span,{class:"line",children:[i(e.span,{style:{color:"#808080"},children:"<"}),i(e.span,{style:{color:"#569CD6"},children:"button"}),i(e.span,{style:{color:"#D4D4D4"},children:" "}),i(e.span,{style:{color:"#9CDCFE"},children:"on:click"}),i(e.span,{style:{color:"#D4D4D4"},children:"="}),i(e.span,{style:{color:"#CE9178"},children:'"./chunk.js#handler_symbol"'}),i(e.span,{style:{color:"#808080"},children:">"}),i(e.span,{style:{color:"#D4D4D4"},children:"click me"}),i(e.span,{style:{color:"#808080"},children:"</"}),i(e.span,{style:{color:"#569CD6"},children:"button"}),i(e.span,{style:{color:"#808080"},children:">"})]})})})}),`
`,i(e.p,{children:["Qwik still needs to collect the listener information, but this step is done as part of the SSR/SSG. The results of SSR/SSG are then serialized into HTML so that the browser does not need to do anything to resume the execution. Notice that the ",i(e.code,{children:"on:click"})," attribute contains all of the information to resume the application without doing anything eagerly."]}),`
`,i(e.ol,{children:[`
`,i(e.li,{children:"Qwikloader sets up a single global listener instead of many individual listeners per DOM element. This step can be done with no application code present."}),`
`,i(e.li,{children:"The HTML contains a URL to the chunk and symbol name. The attribute tells Qwikloader which code chunk to download and which symbol to retrieve from the chunk."}),`
`,i(e.li,{children:"Finally, to make all of the above possible, Qwik's event processing implementation understands asynchronicity which allows insertion of asynchronous lazy loading."}),`
`]}),`
`,i(e.h3,{id:"component-trees",children:[i(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#component-trees",children:i(e.span,{class:"icon icon-link"})}),"Component Trees"]}),`
`,i(e.p,{children:"Frameworks work with component trees. To that end, frameworks need a complete understanding of the component trees to know which components need to be rerendered and when. If you look into the existing framework SSR/SSG output, the component boundary information has been destroyed. There is no way of knowing where component boundaries are by looking at the resulting HTML. To recreate this information, frameworks re-execute the component templates and memoize the component boundary location. Re-execution is what hydration is. Hydration is expensive as it requires both the download of component templates and their execution."}),`
`,i(e.p,{children:"Qwik collects component boundary information as part of the SSR/SSG and then serializes that information into HTML. The result is that Qwik can:"}),`
`,i(e.ol,{children:[`
`,i(e.li,{children:"Rebuild the component hierarchy information without the component code actually being present. The component code can remain lazy."}),`
`,i(e.li,{children:"Qwik can do this lazily only for the components which need to be re-rendered rather than all upfront."}),`
`,i(e.li,{children:"Qwik collects relationship information between stores and components. This creates a subscription model that informs Qwik which components need to be re-rendered as a result of state change. The subscription information also gets serialized into HTML."}),`
`]}),`
`,i(e.h3,{id:"application-state",children:[i(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#application-state",children:i(e.span,{class:"icon icon-link"})}),"Application State"]}),`
`,i(e.p,{children:"Existing frameworks usually have a way of serializing the application state into HTML so that the state can be restored as part of hydration. In this way, they are very similar to Qwik. However, Qwik has state management more tightly integrated into the lifecycle of the components. In practice, this means that component can be delay-loaded independently from the state of the component. This is not easily achievable in existing frameworks because component props are usually created by the parent component. This creates a chain reaction. In order to restore component X, its parents need to be restored as well. Qwik allows any component to be resumed without the parent component code being present."}),`
`,i(e.h4,{id:"serialization",children:[i(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#serialization",children:i(e.span,{class:"icon icon-link"})}),"Serialization"]}),`
`,i(e.p,{children:["The simplest way to think about serialization is through ",i(e.code,{children:"JSON.stringify"}),". However, JSON has several limitations. Qwik can overcome some limitations, but some can't be overcome, and they place limitations on what the developer can do. Understanding these limitations is important when building Qwik applications."]}),`
`,i(e.p,{children:"Limitations of JSON which Qwik solves:"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:"JSON produces a DAG. DAG stands for Directed Acyclic Graph, which means that the object which is being serialized can't have circular references. This is a big limitation because the application state is often circular. Qwik ensures that when the graph of objects gets serialized, the circular references get properly saved and then restored."}),`
`,i(e.li,{children:["JSON can't serialize some object types. For example, DOM references, or Dates. Qwik's serialization format ensures that such objects can correctly be serialized and restored. Here is a list of types that can be serialized with Qwik:",`
`,i(e.ul,{children:[`
`,i(e.li,{children:"DOM references"}),`
`,i(e.li,{children:["Promises (See ",i(e.a,{href:"../../components/resource/",children:"resources"}),")"]}),`
`,i(e.li,{children:"Function closures (if wrapped in QRL)"}),`
`,i(e.li,{children:"Dates"}),`
`,i(e.li,{children:[i(e.code,{children:"URL"})," objects"]}),`
`,i(e.li,{children:[i(e.code,{children:"Map"})," and ",i(e.code,{children:"Set"})," instances."]}),`
`]}),`
`]}),`
`]}),`
`,i(e.p,{children:"Limitations of JSON that Qwik does not solve:"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["Serialization of classes (",i(e.code,{children:"instanceof"})," and prototype)",`
`,i(e.ul,{children:[`
`,i(e.li,{children:["Although some built-in classes, such as ",i(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date",children:"Date"}),", ",i(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/URL",children:"URL"}),", ",i(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map",children:"Map"}),", ",i(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set",children:"Set"})," are supported."]}),`
`]}),`
`]}),`
`,i(e.li,{children:"Serialization of Streams."}),`
`]}),`
`,i(e.h3,{id:"writing-applications-with-serializability-in-mind",children:[i(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#writing-applications-with-serializability-in-mind",children:i(e.span,{class:"icon icon-link"})}),"Writing applications with serializability in mind"]}),`
`,i(e.p,{children:["The resumability capability of the framework must extend to resumability of the application as well. This means that the framework must provide mechanisms for the developer to express ",i(e.em,{children:"components"})," and ",i(e.em,{children:"entities"})," of the application in a way which can be serialized and then resumed (without re-bootstrapping). This necessitates that the application is written with resumability constraints in mind. It is simply not possible for developers to continue to write applications in a heap-centric way and expect that a better framework can somehow make up for this sub-optimal approach."]}),`
`,i(e.p,{children:"Developers must write their applications in a DOM-centric way. This will require a change of behavior and retooling of web developers' skills. Frameworks need to provide guidance and APIs to make it easy for developers to write the applications in this way."}),`
`,i(e.h3,{id:"other-benefits-of-resumability",children:[i(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#other-benefits-of-resumability",children:i(e.span,{class:"icon icon-link"})}),"Other benefits of resumability"]}),`
`,i(e.p,{children:"The most obvious benefit of using resumability is for server-side-rendering. However, there are secondary benefits:"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:"Serializing existing PWA apps so that users don't lose context when they return to the application"}),`
`,i(e.li,{children:"Improved rendering performance because only changed components need to be re-rendered"}),`
`,i(e.li,{children:"Fine-grained lazy-loading"}),`
`,i(e.li,{children:"Decreased memory pressure, especially on mobile devices"}),`
`,i(e.li,{children:"Progressive interactivity of existing static websites"}),`
`]})]})}function s(t={}){const{wrapper:e}=t.components||{};return e?i(e,Object.assign({},t,{children:i(a,t)})):a(t)}const p=()=>n(o,{children:n(s,{},3,null)},3,"k7PU_osO");export{p as default,d as frontmatter,h as head,c as headings};
