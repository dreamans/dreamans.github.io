import{d as s,F as r,H as e,g as o}from"./q-71956c83.js";const t=[{text:"Menu",id:"menu",level:1},{text:"File Structure",id:"file-structure",level:2},{text:"Declaring Menu Structure",id:"declaring-menu-structure",level:2},{text:"Retrieving Menu Structure",id:"retrieving-menu-structure",level:2},{text:"Using ContentMenu in a layout",id:"using-contentmenu-in-a-layout",level:2}],d={title:"Qwik City - Menu",meta:[],styles:[],links:[],frontmatter:{contributors:["manucorporat","adamdbradley","the-r3aper7","Oyemade","mhevery","nnelgxorz","jakovljevic-mladen","cunzaizhuyi","AnthonyPAlicea"]}},h={title:"Qwik City - Menu",contributors:["manucorporat","adamdbradley","the-r3aper7","Oyemade","mhevery","nnelgxorz","jakovljevic-mladen","cunzaizhuyi","AnthonyPAlicea"]};function c(n){const l=Object.assign({h1:"h1",a:"a",span:"span",p:"p",ol:"ol",li:"li",code:"code",h2:"h2",div:"div",pre:"pre",ul:"ul"},n.components);return e(o,{children:[e(l.h1,{id:"menu",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#menu",children:e(l.span,{class:"icon icon-link"})}),"Menu"]}),`
`,e(l.p,{children:"Menus allow you to describe the site navigation structure in a simple declarative way. Menus come in two steps:"}),`
`,e(l.ol,{children:[`
`,e(l.li,{children:["Defining a ",e(l.code,{children:"menu.md"})," file that contains the menu structure for the directory it's in."]}),`
`,e(l.li,{children:["Using the ",e(l.a,{href:"/docs/api/#usecontent",children:e(l.code,{children:"useContent()"})})," function to retrieve the menu structure in a template for rendering. ",e(l.a,{href:"/docs/api/#usecontent",children:"Read more here"})]}),`
`]}),`
`,e(l.h2,{id:"file-structure",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#file-structure",children:e(l.span,{class:"icon icon-link"})}),"File Structure"]}),`
`,e(l.p,{children:"First layout files as follows:"}),`
`,e(l.div,{"data-rehype-pretty-code-fragment":"",children:e(l.pre,{"data-language":"bash","data-theme":"default",children:e(l.code,{"data-language":"bash","data-theme":"default",children:[e(l.span,{class:"line",children:e(l.span,{style:{color:"#DCDCAA"},children:"src/"})}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#DCDCAA"},children:"└──"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#CE9178"},children:"routes/"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"    "}),e(l.span,{style:{color:"#DCDCAA"},children:"└──"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#CE9178"},children:"some/"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"        "}),e(l.span,{style:{color:"#DCDCAA"},children:"├──"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#CE9178"},children:"menu.md"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"        "}),e(l.span,{style:{color:"#DCDCAA"},children:"├──"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#CE9178"},children:"layout.tsx"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"        "}),e(l.span,{style:{color:"#DCDCAA"},children:"└──"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#CE9178"},children:"path/"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"            "}),e(l.span,{style:{color:"#DCDCAA"},children:"└──"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#CE9178"},children:"index.tsx"}),e(l.span,{style:{color:"#D4D4D4"},children:"  "}),e(l.span,{style:{color:"#6A9955"},children:"# https://example.com/some/path"})]})]})})}),`
`,e(l.p,{children:["Navigating to ",e(l.code,{children:"https://example.com/some/path"})," activates:"]}),`
`,e(l.ul,{children:[`
`,e(l.li,{children:[e(l.code,{children:"src/routes/some/path/index.tsx"}),": This component will be used for rendering the page content."]}),`
`,e(l.li,{children:[e(l.code,{children:"src/routes/some/layout.tsx"}),": This layout will be used to provide content around the ",e(l.code,{children:"src/routes/some/path/index.tsx"}),". Internally the layout can use ",e(l.code,{children:"src/routes/some/menu.md"})," to render the menus."]}),`
`,e(l.li,{children:[e(l.code,{children:"src/routes/some/menu.md"}),": This file will be used to declare the menu structure which will be rendered by ",e(l.code,{children:"src/routes/some/layout.tsx"}),"."]}),`
`]}),`
`,e(l.h2,{id:"declaring-menu-structure",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#declaring-menu-structure",children:e(l.span,{class:"icon icon-link"})}),"Declaring Menu Structure"]}),`
`,e(l.p,{children:["Use ",e(l.code,{children:"menu.md"})," to declare the menu structure."]}),`
`,e(l.ul,{children:[`
`,e(l.li,{children:["Use the headings (",e(l.code,{children:"#"}),", ",e(l.code,{children:"##"}),", etc..) to define menu depth"]}),`
`,e(l.li,{children:["Use the bulleted list (",e(l.code,{children:"-"}),") to define menu items."]}),`
`]}),`
`,e(l.div,{"data-rehype-pretty-code-fragment":"",children:[e(l.div,{"data-rehype-pretty-code-title":"","data-language":"markdown","data-theme":"default",children:"src/route/some/menu.md"}),e(l.pre,{"data-language":"markdown","data-theme":"default",children:e(l.code,{"data-language":"markdown","data-theme":"default",children:[e(l.span,{class:"line",children:e(l.span,{style:{color:"#569CD6",fontWeight:"bold"},children:"# Docs"})}),`
`,e(l.span,{class:"line",children:" "}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#569CD6",fontWeight:"bold"},children:"## Getting Started"})}),`
`,e(l.span,{class:"line",children:" "}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#6796E6"},children:"-"}),e(l.span,{style:{color:"#D4D4D4"},children:" ["}),e(l.span,{style:{color:"#CE9178"},children:"Introduction"}),e(l.span,{style:{color:"#D4D4D4"},children:"]("}),e(l.span,{style:{color:"#D4D4D4",textDecoration:"underline"},children:"introduction/index.md"}),e(l.span,{style:{color:"#D4D4D4"},children:")"})]}),`
`,e(l.span,{class:"line",children:" "}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#569CD6",fontWeight:"bold"},children:"## Components"})}),`
`,e(l.span,{class:"line",children:" "}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#6796E6"},children:"-"}),e(l.span,{style:{color:"#D4D4D4"},children:" ["}),e(l.span,{style:{color:"#CE9178"},children:"Basics"}),e(l.span,{style:{color:"#D4D4D4"},children:"]("}),e(l.span,{style:{color:"#D4D4D4",textDecoration:"underline"},children:"/docs/(qwik)/components/basics/index.mdx"}),e(l.span,{style:{color:"#D4D4D4"},children:")"})]})]})})]}),`
`,e(l.h2,{id:"retrieving-menu-structure",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#retrieving-menu-structure",children:e(l.span,{class:"icon icon-link"})}),"Retrieving Menu Structure"]}),`
`,e(l.p,{children:["At runtime, any component can retrieve the menu with ",e(l.a,{href:"/docs/api/#usecontent",children:e(l.code,{children:"useContent()"})})," hook. The type returned is ",e(l.code,{children:"ContentMenu"}),"."]}),`
`,e(l.p,{children:"The example above will return:"}),`
`,e(l.div,{"data-rehype-pretty-code-fragment":"",children:e(l.pre,{"data-language":"javascript","data-theme":"default",children:e(l.code,{"data-language":"javascript","data-theme":"default",children:[e(l.span,{class:"line",children:e(l.span,{style:{color:"#D4D4D4"},children:"{"})}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"  "}),e(l.span,{style:{color:"#C8C8C8"},children:"text"}),e(l.span,{style:{color:"#D4D4D4"},children:": "}),e(l.span,{style:{color:"#CE9178"},children:'"Docs"'}),e(l.span,{style:{color:"#D4D4D4"},children:","})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"  "}),e(l.span,{style:{color:"#C8C8C8"},children:"items"}),e(l.span,{style:{color:"#D4D4D4"},children:": ["})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#D4D4D4"},children:"    {"})}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"      "}),e(l.span,{style:{color:"#9CDCFE"},children:"text:"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#CE9178"},children:'"Getting Started"'}),e(l.span,{style:{color:"#D4D4D4"},children:","})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"      "}),e(l.span,{style:{color:"#9CDCFE"},children:"items:"}),e(l.span,{style:{color:"#D4D4D4"},children:" ["})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#D4D4D4"},children:"        {"})}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"          "}),e(l.span,{style:{color:"#9CDCFE"},children:"text:"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#CE9178"},children:'"Introduction"'}),e(l.span,{style:{color:"#D4D4D4"},children:","})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"          "}),e(l.span,{style:{color:"#9CDCFE"},children:"href:"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#CE9178"},children:'"/docs/introduction"'})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#D4D4D4"},children:"        }"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#D4D4D4"},children:"      ],"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#D4D4D4"},children:"    },"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#D4D4D4"},children:"    {"})}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"      "}),e(l.span,{style:{color:"#9CDCFE"},children:"text:"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#CE9178"},children:'"Components"'}),e(l.span,{style:{color:"#D4D4D4"},children:","})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"      "}),e(l.span,{style:{color:"#9CDCFE"},children:"items:"}),e(l.span,{style:{color:"#D4D4D4"},children:" ["})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#D4D4D4"},children:"        {"})}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"          "}),e(l.span,{style:{color:"#9CDCFE"},children:"text:"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#CE9178"},children:'"Basics"'}),e(l.span,{style:{color:"#D4D4D4"},children:","})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"          "}),e(l.span,{style:{color:"#9CDCFE"},children:"href:"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#CE9178"},children:'"/docs/(qwik)/components/basics"'})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#D4D4D4"},children:"        }"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#D4D4D4"},children:"      ],"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#D4D4D4"},children:"    },"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#D4D4D4"},children:"  ],"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#D4D4D4"},children:"}"})})]})})}),`
`,e(l.h2,{id:"using-contentmenu-in-a-layout",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#using-contentmenu-in-a-layout",children:e(l.span,{class:"icon icon-link"})}),"Using ",e(l.code,{children:"ContentMenu"})," in a layout"]}),`
`,e(l.p,{children:["While ",e(l.a,{href:"/docs/api/#usecontent",children:e(l.code,{children:"useContent()"})})," can be invoked from any component that is part of the current route. It is typically used in a layout component (or a component used by layout) to render the menu. An example usage is shown here:"]}),`
`,e(l.div,{"data-rehype-pretty-code-fragment":"",children:e(l.pre,{"data-language":"tsx","data-theme":"default",children:e(l.code,{"data-language":"tsx","data-theme":"default",children:[e(l.span,{class:"line",children:[e(l.span,{style:{color:"#C586C0"},children:"import"}),e(l.span,{style:{color:"#D4D4D4"},children:" { "}),e(l.span,{style:{color:"#9CDCFE"},children:"component$"}),e(l.span,{style:{color:"#D4D4D4"},children:" } "}),e(l.span,{style:{color:"#C586C0"},children:"from"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#CE9178"},children:"'@builder.io/qwik'"}),e(l.span,{style:{color:"#D4D4D4"},children:";"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#C586C0"},children:"import"}),e(l.span,{style:{color:"#D4D4D4"},children:" { "}),e(l.span,{style:{color:"#9CDCFE"},children:"useLocation"}),e(l.span,{style:{color:"#D4D4D4"},children:", "}),e(l.span,{style:{color:"#9CDCFE"},children:"useContent"}),e(l.span,{style:{color:"#D4D4D4"},children:" } "}),e(l.span,{style:{color:"#C586C0"},children:"from"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#CE9178"},children:"'@builder.io/qwik-city'"}),e(l.span,{style:{color:"#D4D4D4"},children:";"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#C586C0"},children:"export"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#C586C0"},children:"default"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#DCDCAA"},children:"component$"}),e(l.span,{style:{color:"#D4D4D4"},children:"(() "}),e(l.span,{style:{color:"#569CD6"},children:"=>"}),e(l.span,{style:{color:"#D4D4D4"},children:" {"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"  "}),e(l.span,{style:{color:"#569CD6"},children:"const"}),e(l.span,{style:{color:"#D4D4D4"},children:" { "}),e(l.span,{style:{color:"#4FC1FF"},children:"menu"}),e(l.span,{style:{color:"#D4D4D4"},children:" } = "}),e(l.span,{style:{color:"#DCDCAA"},children:"useContent"}),e(l.span,{style:{color:"#D4D4D4"},children:"();"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"  "}),e(l.span,{style:{color:"#569CD6"},children:"const"}),e(l.span,{style:{color:"#D4D4D4"},children:" { "}),e(l.span,{style:{color:"#4FC1FF"},children:"url"}),e(l.span,{style:{color:"#D4D4D4"},children:" } = "}),e(l.span,{style:{color:"#DCDCAA"},children:"useLocation"}),e(l.span,{style:{color:"#D4D4D4"},children:"();"})]}),`
`,e(l.span,{class:"line",children:" "}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"  "}),e(l.span,{style:{color:"#C586C0"},children:"return"}),e(l.span,{style:{color:"#D4D4D4"},children:" ("})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"    "}),e(l.span,{style:{color:"#808080"},children:"<"}),e(l.span,{style:{color:"#569CD6"},children:"nav"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#9CDCFE"},children:"class"}),e(l.span,{style:{color:"#D4D4D4"},children:"="}),e(l.span,{style:{color:"#CE9178"},children:'"menu"'}),e(l.span,{style:{color:"#808080"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"      "}),e(l.span,{style:{color:"#569CD6"},children:"{"}),e(l.span,{style:{color:"#9CDCFE"},children:"menu"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"        ? "}),e(l.span,{style:{color:"#9CDCFE"},children:"menu"}),e(l.span,{style:{color:"#D4D4D4"},children:"."}),e(l.span,{style:{color:"#9CDCFE"},children:"items"}),e(l.span,{style:{color:"#D4D4D4"},children:"?."}),e(l.span,{style:{color:"#DCDCAA"},children:"map"}),e(l.span,{style:{color:"#D4D4D4"},children:"(("}),e(l.span,{style:{color:"#9CDCFE"},children:"item"}),e(l.span,{style:{color:"#D4D4D4"},children:") "}),e(l.span,{style:{color:"#569CD6"},children:"=>"}),e(l.span,{style:{color:"#D4D4D4"},children:" ("})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"            "}),e(l.span,{style:{color:"#808080"},children:"<>"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"              "}),e(l.span,{style:{color:"#808080"},children:"<"}),e(l.span,{style:{color:"#569CD6"},children:"h5"}),e(l.span,{style:{color:"#808080"},children:">"}),e(l.span,{style:{color:"#569CD6"},children:"{"}),e(l.span,{style:{color:"#9CDCFE"},children:"item"}),e(l.span,{style:{color:"#D4D4D4"},children:"."}),e(l.span,{style:{color:"#9CDCFE"},children:"text"}),e(l.span,{style:{color:"#569CD6"},children:"}"}),e(l.span,{style:{color:"#808080"},children:"</"}),e(l.span,{style:{color:"#569CD6"},children:"h5"}),e(l.span,{style:{color:"#808080"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"              "}),e(l.span,{style:{color:"#808080"},children:"<"}),e(l.span,{style:{color:"#569CD6"},children:"ul"}),e(l.span,{style:{color:"#808080"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"                "}),e(l.span,{style:{color:"#569CD6"},children:"{"}),e(l.span,{style:{color:"#9CDCFE"},children:"item"}),e(l.span,{style:{color:"#D4D4D4"},children:"."}),e(l.span,{style:{color:"#9CDCFE"},children:"items"}),e(l.span,{style:{color:"#D4D4D4"},children:"?."}),e(l.span,{style:{color:"#DCDCAA"},children:"map"}),e(l.span,{style:{color:"#D4D4D4"},children:"(("}),e(l.span,{style:{color:"#9CDCFE"},children:"item"}),e(l.span,{style:{color:"#D4D4D4"},children:") "}),e(l.span,{style:{color:"#569CD6"},children:"=>"}),e(l.span,{style:{color:"#D4D4D4"},children:" ("})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"                  "}),e(l.span,{style:{color:"#808080"},children:"<"}),e(l.span,{style:{color:"#569CD6"},children:"li"}),e(l.span,{style:{color:"#808080"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"                    "}),e(l.span,{style:{color:"#808080"},children:"<"}),e(l.span,{style:{color:"#569CD6"},children:"a"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"                      "}),e(l.span,{style:{color:"#9CDCFE"},children:"href"}),e(l.span,{style:{color:"#D4D4D4"},children:"="}),e(l.span,{style:{color:"#569CD6"},children:"{"}),e(l.span,{style:{color:"#9CDCFE"},children:"item"}),e(l.span,{style:{color:"#D4D4D4"},children:"."}),e(l.span,{style:{color:"#9CDCFE"},children:"href"}),e(l.span,{style:{color:"#569CD6"},children:"}"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"                      "}),e(l.span,{style:{color:"#9CDCFE"},children:"class"}),e(l.span,{style:{color:"#D4D4D4"},children:"="}),e(l.span,{style:{color:"#569CD6"},children:"{"}),e(l.span,{style:{color:"#D4D4D4"},children:"{"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"                        "}),e(l.span,{style:{color:"#CE9178"},children:"'is-active'"}),e(l.span,{style:{color:"#9CDCFE"},children:":"}),e(l.span,{style:{color:"#D4D4D4"},children:" "}),e(l.span,{style:{color:"#9CDCFE"},children:"url"}),e(l.span,{style:{color:"#D4D4D4"},children:"."}),e(l.span,{style:{color:"#9CDCFE"},children:"pathname"}),e(l.span,{style:{color:"#D4D4D4"},children:" === "}),e(l.span,{style:{color:"#9CDCFE"},children:"item"}),e(l.span,{style:{color:"#D4D4D4"},children:"."}),e(l.span,{style:{color:"#9CDCFE"},children:"href"}),e(l.span,{style:{color:"#D4D4D4"},children:","})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"                      }"}),e(l.span,{style:{color:"#569CD6"},children:"}"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"                    "}),e(l.span,{style:{color:"#808080"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"                      "}),e(l.span,{style:{color:"#569CD6"},children:"{"}),e(l.span,{style:{color:"#9CDCFE"},children:"item"}),e(l.span,{style:{color:"#D4D4D4"},children:"."}),e(l.span,{style:{color:"#9CDCFE"},children:"text"}),e(l.span,{style:{color:"#569CD6"},children:"}"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"                    "}),e(l.span,{style:{color:"#808080"},children:"</"}),e(l.span,{style:{color:"#569CD6"},children:"a"}),e(l.span,{style:{color:"#808080"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"                  "}),e(l.span,{style:{color:"#808080"},children:"</"}),e(l.span,{style:{color:"#569CD6"},children:"li"}),e(l.span,{style:{color:"#808080"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"                ))"}),e(l.span,{style:{color:"#569CD6"},children:"}"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"              "}),e(l.span,{style:{color:"#808080"},children:"</"}),e(l.span,{style:{color:"#569CD6"},children:"ul"}),e(l.span,{style:{color:"#808080"},children:">"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"            "}),e(l.span,{style:{color:"#808080"},children:"</>"})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#D4D4D4"},children:"          ))"})}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"        : "}),e(l.span,{style:{color:"#569CD6"},children:"null}"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#D4D4D4"},children:"    "}),e(l.span,{style:{color:"#808080"},children:"</"}),e(l.span,{style:{color:"#569CD6"},children:"nav"}),e(l.span,{style:{color:"#808080"},children:">"})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#D4D4D4"},children:"  );"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#D4D4D4"},children:"});"})})]})})})]})}function i(n={}){const{wrapper:l}=n.components||{};return l?e(l,Object.assign({},n,{children:e(c,n)})):c(n)}const D=()=>s(r,{children:s(i,{},3,null)},3,"AEESpmoB");export{D as default,h as frontmatter,d as head,t as headings};
