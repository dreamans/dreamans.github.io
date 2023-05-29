import{d as i,F as t,H as n,g as s}from"./q-71956c83.js";const c=[{text:"Static Site Generation (SSG) Overview",id:"static-site-generation-ssg-overview",level:1},{text:"SSG vs. Server-Side Rendered (SSR)",id:"ssg-vs-server-side-rendered-ssr",level:2},{text:"Static Site Generation Config",id:"static-site-generation-config",level:2},{text:"Changes",id:"changes",level:3},{text:"SSG Config",id:"ssg-config",level:3},{text:"origin",id:"origin",level:4},{text:"outDir",id:"outdir",level:4},{text:"Javascript Runtimes",id:"javascript-runtimes",level:3},{text:"Dynamic SSG Routes",id:"dynamic-ssg-routes",level:2}],d={title:"Static Site Generation (SSG) Overview",meta:[],styles:[],links:[],frontmatter:{contributors:["adamdbradley","AnthonyPAlicea","mhevery"]}},h={title:"Static Site Generation (SSG) Overview",contributors:["adamdbradley","AnthonyPAlicea","mhevery"]};function l(r){const e=Object.assign({h1:"h1",a:"a",span:"span",p:"p",code:"code",h2:"h2",div:"div",pre:"pre",h3:"h3",ul:"ul",li:"li",h4:"h4",em:"em"},r.components);return n(s,{children:[n(e.h1,{id:"static-site-generation-ssg-overview",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#static-site-generation-ssg-overview",children:n(e.span,{class:"icon icon-link"})}),"Static Site Generation (SSG) Overview"]}),`
`,n(e.p,{children:`Static Site Generation, or commonly referred to as "SSG", is the process of pre-rendering site webpages into static HTML files. The benefit is that when a visitor requests the webpage, the response is a pre-generated HTML file (a static file), and doesn't require the webpage's HTML to "rebuild" on the visitor's browser, or dynamically created by your server (more on this later).`}),`
`,n(e.p,{children:[`Additionally, due to Qwik's underlying architecture, page performance also benefits by not requiring a Javascript "hydration" step, which can significantly lower performance and slow down user interactivity. By pre-rendering static `,n(e.code,{children:"index.html"})," files with SSG, and combined with Qwik's ",n(e.a,{href:"/docs/concepts/resumable/",children:"resumability"}),", static site generation offers many performance benefits over legacy solutions."]}),`
`,n(e.h2,{id:"ssg-vs-server-side-rendered-ssr",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#ssg-vs-server-side-rendered-ssr",children:n(e.span,{class:"icon icon-link"})}),"SSG vs. Server-Side Rendered (SSR)"]}),`
`,n(e.p,{children:[`Qwik City is capable of taking a Qwik application, no matter if it's a "webapp" or "website", and generate static HTML. Once it's generated as HTML, Qwik is fundamentally able to skip rebuilding the app by using `,n(e.a,{href:"/docs/concepts/resumable/",children:"resumability"}),', since the app was already generated as HTML. Both Static Site Generation (SSG) and Server-Side Rendering (SSR) use the same process to generate the HTML. The main difference between the SSG and SSR however, is "when" the HTML is generated.']}),`
`,n(e.p,{children:"In a traditional setup, SSG pre-renders each webpage at build-time, while SSR render's each webpage on-demand for each HTTP request. SSG only needs to generate the HTML one time per build, which is great for webpages where each visitor should see the same content. In contrast, SSR is great when the webpage may be different for each visitor, and would need to render custom HTML for each individual HTTP request."}),`
`,n(e.p,{children:"For example, SSG is ideal for a blog or docs site, where all the content should be the same for each visitor. While SSR may work fine for a blog, it may be an unnecessary strain for your HTTP servers to render the blog content for every visitor, even though they'd all end up seeing the same HTML."}),`
`,n(e.p,{children:"However, an account dashboard would commonly have different content for each signed-in user. In this setup, each user should get their own rendered HTML with their account information, rather than everyone seeing the exact same content. This is where SSR would be preferred."}),`
`,n(e.p,{children:"Ideally, the more you can do with static site generation the better, since that'll have less costs to your servers and faster response times."}),`
`,n(e.p,{children:"With Qwik City however, the decision to use SSG or SSR, does not have to be one or the other decision. Instead, your own implementation can choose to have some route paths use SSG, while some other pages use SSR. It's entirely up to you and your requirements."}),`
`,n(e.h2,{id:"static-site-generation-config",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#static-site-generation-config",children:n(e.span,{class:"icon icon-link"})}),"Static Site Generation Config"]}),`
`,n(e.p,{children:"Static site generation is created from the built in adapter, to create an adapter run:"}),`
`,n(e.div,{"data-rehype-pretty-code-fragment":"",children:n(e.pre,{"data-language":"shell","data-theme":"default",children:n(e.code,{"data-language":"shell","data-theme":"default",children:n(e.span,{class:"line",children:[n(e.span,{style:{color:"#DCDCAA"},children:"npm"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#CE9178"},children:"run"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#CE9178"},children:"qwik"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#CE9178"},children:"add"})]})})})}),`
`,n(e.p,{children:["Select ",n(e.code,{children:"Adapter: Static site (.html files)"}),". Done!"]}),`
`,n(e.h3,{id:"changes",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#changes",children:n(e.span,{class:"icon icon-link"})}),"Changes"]}),`
`,n(e.p,{children:"Running the above command will make the following changes to your project:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["A ",n(e.code,{children:"build.server"})," script will be automatically added to your ",n(e.code,{children:"package.json"})," file."]}),`
`,n(e.li,{children:["A ",n(e.code,{children:"adapters/static/vite.config.ts"})," file will be created."]}),`
`]}),`
`,n(e.p,{children:["Your build files will be generated into the ",n(e.code,{children:"dist"})," folder."]}),`
`,n(e.p,{children:"You can build and preview your static site using:"}),`
`,n(e.div,{"data-rehype-pretty-code-fragment":"",children:n(e.pre,{"data-language":"shell","data-theme":"default",children:n(e.code,{"data-language":"shell","data-theme":"default",children:n(e.span,{class:"line",children:[n(e.span,{style:{color:"#DCDCAA"},children:"npm"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#CE9178"},children:"run"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#CE9178"},children:"preview"})]})})})}),`
`,n(e.h3,{id:"ssg-config",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#ssg-config",children:n(e.span,{class:"icon icon-link"})}),"SSG Config"]}),`
`,n(e.p,{children:["The ",n(e.code,{children:"adapters/static/vite.config.ts"})," file also includes the SSG config, which would be custom for each implementation."]}),`
`,n(e.h4,{id:"origin",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#origin",children:n(e.span,{class:"icon icon-link"})}),n(e.code,{children:"origin"})]}),`
`,n(e.p,{children:["The URL ",n(e.code,{children:"origin"}),", which is a combination of the scheme (protocol) and hostname (domain). For example, ",n(e.code,{children:"https://qwik.builder.io"})," has the protocol ",n(e.code,{children:"https://"})," and domain ",n(e.code,{children:"qwik.builder.io"}),". However, the ",n(e.code,{children:"origin"})," does ",n(e.em,{children:"not"})," include a ",n(e.code,{children:"pathname"}),"."]}),`
`,n(e.p,{children:["The ",n(e.code,{children:"origin"})," is used to provide a full URL during Static Site Generation (SSG), and to simulate a complete URL rather than just the ",n(e.code,{children:"pathname"}),". For example, in order to render a correct canonical tag URL or URLs within the ",n(e.code,{children:"sitemap.xml"}),", the ",n(e.code,{children:"origin"})," must be provided too."]}),`
`,n(e.p,{children:["If the site also starts with a pathname other than ",n(e.code,{children:"/"}),", please use the ",n(e.code,{children:"basePathname"})," option in the Qwik City config options."]}),`
`,n(e.h4,{id:"outdir",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#outdir",children:n(e.span,{class:"icon icon-link"})}),n(e.code,{children:"outDir"})]}),`
`,n(e.p,{children:["The ",n(e.code,{children:"outDir"})," is a file system output directory where the static files should be written. In the example above, it's using Node's ",n(e.a,{href:"https://nodejs.org/api/url.html#urlfileurltopathurl",children:"fileURLToPath"})," to create an absolute file system path to write the static HTML files to."]}),`
`,n(e.h3,{id:"javascript-runtimes",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#javascript-runtimes",children:n(e.span,{class:"icon icon-link"})}),"Javascript Runtimes"]}),`
`,n(e.p,{children:["For a Javascript project, it's quite common for the build's runtime to be built on top of ",n(e.a,{href:"https://nodejs.org/en/docs/",children:"Node.js"}),". However, the core of Qwik City static site generation isn't tied to using only Node.js, which is why the ",n(e.code,{children:"qwikCityGenerate()"})," function is imported from ",n(e.code,{children:"@builder.io/qwik-city/static/node"}),". By scoping the generate function to a specific runtime, such as Node.js, this gives Qwik City the flexibility to also generate SSG from other runtimes in the future, such as ",n(e.a,{href:"https://deno.land/",children:"Deno"})," or ",n(e.a,{href:"https://bun.sh/",children:"Bun"}),"."]}),`
`,n(e.h2,{id:"dynamic-ssg-routes",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#dynamic-ssg-routes",children:n(e.span,{class:"icon icon-link"})}),"Dynamic SSG Routes"]}),`
`,n(e.p,{children:["So far, we've only discussed how to generate static HTML files for a single route path. However, in most cases, you'll want to generate HTML files for multiple route paths that has dynamic params. For example, a product site may have a route path for each product, such as ",n(e.code,{children:"/product/:id"}),". In this case, you'll want to generate HTML files for each product page, which would require generating HTML files for each product ID."]}),`
`,n(e.div,{"data-rehype-pretty-code-fragment":"",children:n(e.pre,{"data-language":"tsx","data-theme":"default",children:n(e.code,{"data-language":"tsx","data-theme":"default",children:[n(e.span,{class:"line",children:[n(e.span,{style:{color:"#C586C0"},children:"import"}),n(e.span,{style:{color:"#D4D4D4"},children:" { "}),n(e.span,{style:{color:"#9CDCFE"},children:"component$"}),n(e.span,{style:{color:"#D4D4D4"},children:" } "}),n(e.span,{style:{color:"#C586C0"},children:"from"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#CE9178"},children:"'@builder.io/qwik'"}),n(e.span,{style:{color:"#D4D4D4"},children:";"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#C586C0"},children:"import"}),n(e.span,{style:{color:"#D4D4D4"},children:" { "}),n(e.span,{style:{color:"#9CDCFE"},children:"useLocation"}),n(e.span,{style:{color:"#D4D4D4"},children:", "}),n(e.span,{style:{color:"#C586C0"},children:"type"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#9CDCFE"},children:"StaticGenerateHandler"}),n(e.span,{style:{color:"#D4D4D4"},children:" } "}),n(e.span,{style:{color:"#C586C0"},children:"from"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#CE9178"},children:"'@builder.io/qwik-city'"}),n(e.span,{style:{color:"#D4D4D4"},children:";"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#C586C0"},children:"import"}),n(e.span,{style:{color:"#D4D4D4"},children:" { "}),n(e.span,{style:{color:"#9CDCFE"},children:"loadProductIds"}),n(e.span,{style:{color:"#D4D4D4"},children:" } "}),n(e.span,{style:{color:"#C586C0"},children:"from"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#CE9178"},children:"'./load-product-ids'"}),n(e.span,{style:{color:"#D4D4D4"},children:";"})]}),`
`,n(e.span,{class:"line",children:" "}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#C586C0"},children:"export"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#C586C0"},children:"default"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#DCDCAA"},children:"component$"}),n(e.span,{style:{color:"#D4D4D4"},children:"(() "}),n(e.span,{style:{color:"#569CD6"},children:"=>"}),n(e.span,{style:{color:"#D4D4D4"},children:" {"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"  "}),n(e.span,{style:{color:"#569CD6"},children:"const"}),n(e.span,{style:{color:"#D4D4D4"},children:" { "}),n(e.span,{style:{color:"#4FC1FF"},children:"params"}),n(e.span,{style:{color:"#D4D4D4"},children:" } = "}),n(e.span,{style:{color:"#DCDCAA"},children:"useLocation"}),n(e.span,{style:{color:"#D4D4D4"},children:"();"})]}),`
`,n(e.span,{class:"line",children:" "}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"  "}),n(e.span,{style:{color:"#C586C0"},children:"return"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#808080"},children:"<"}),n(e.span,{style:{color:"#569CD6"},children:"p"}),n(e.span,{style:{color:"#808080"},children:">"}),n(e.span,{style:{color:"#D4D4D4"},children:"Example: "}),n(e.span,{style:{color:"#569CD6"},children:"{"}),n(e.span,{style:{color:"#9CDCFE"},children:"params"}),n(e.span,{style:{color:"#D4D4D4"},children:"."}),n(e.span,{style:{color:"#9CDCFE"},children:"id"}),n(e.span,{style:{color:"#569CD6"},children:"}"}),n(e.span,{style:{color:"#808080"},children:"</"}),n(e.span,{style:{color:"#569CD6"},children:"p"}),n(e.span,{style:{color:"#808080"},children:">"}),n(e.span,{style:{color:"#D4D4D4"},children:";"})]}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#D4D4D4"},children:"});"})}),`
`,n(e.span,{class:"line",children:" "}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#C586C0"},children:"export"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#569CD6"},children:"const"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#DCDCAA"},children:"onStaticGenerate"}),n(e.span,{style:{color:"#D4D4D4"},children:": "}),n(e.span,{style:{color:"#4EC9B0"},children:"StaticGenerateHandler"}),n(e.span,{style:{color:"#D4D4D4"},children:" = "}),n(e.span,{style:{color:"#569CD6"},children:"async"}),n(e.span,{style:{color:"#D4D4D4"},children:" () "}),n(e.span,{style:{color:"#569CD6"},children:"=>"}),n(e.span,{style:{color:"#D4D4D4"},children:" {"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"  "}),n(e.span,{style:{color:"#6A9955"},children:"// example of loading params for this use case"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"  "}),n(e.span,{style:{color:"#6A9955"},children:"// every implementation will be different"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"  "}),n(e.span,{style:{color:"#569CD6"},children:"const"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#4FC1FF"},children:"ids"}),n(e.span,{style:{color:"#D4D4D4"},children:" = "}),n(e.span,{style:{color:"#C586C0"},children:"await"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#DCDCAA"},children:"loadProductIds"}),n(e.span,{style:{color:"#D4D4D4"},children:"();"})]}),`
`,n(e.span,{class:"line",children:" "}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"  "}),n(e.span,{style:{color:"#C586C0"},children:"return"}),n(e.span,{style:{color:"#D4D4D4"},children:" {"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"    "}),n(e.span,{style:{color:"#9CDCFE"},children:"params:"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#9CDCFE"},children:"ids"}),n(e.span,{style:{color:"#D4D4D4"},children:"."}),n(e.span,{style:{color:"#DCDCAA"},children:"map"}),n(e.span,{style:{color:"#D4D4D4"},children:"(("}),n(e.span,{style:{color:"#9CDCFE"},children:"id"}),n(e.span,{style:{color:"#D4D4D4"},children:") "}),n(e.span,{style:{color:"#569CD6"},children:"=>"}),n(e.span,{style:{color:"#D4D4D4"},children:" {"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"      "}),n(e.span,{style:{color:"#C586C0"},children:"return"}),n(e.span,{style:{color:"#D4D4D4"},children:" { "}),n(e.span,{style:{color:"#9CDCFE"},children:"id"}),n(e.span,{style:{color:"#D4D4D4"},children:" };"})]}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#D4D4D4"},children:"    }),"})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#D4D4D4"},children:"  };"})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#D4D4D4"},children:"};"})})]})})}),`
`,n(e.p,{children:["In the above example, the ",n(e.code,{children:"onStaticGenerate()"})," function is loading the product IDs from a ",n(e.code,{children:"loadProductIds()"})," function. This function would be custom for each implementation, but the general idea is that you'll need to load the data for each product ID, and then generate HTML files for each product ID."]}),`
`,n(e.p,{children:["The ",n(e.code,{children:"onStaticGenerate"})," function should be exported from the top-level of the module, and should return an object with a ",n(e.code,{children:"params"})," property. The ",n(e.code,{children:"params"})," property should be an array of objects, where each object is a set of params for the route path. For example, if the route path is ",n(e.code,{children:"/product/:id"}),", then the ",n(e.code,{children:"params"})," array should be an array of objects with an ",n(e.code,{children:"id"})," property."]}),`
`,n(e.p,{children:"The directory structure for this example would be:"}),`
`,n(e.div,{"data-rehype-pretty-code-fragment":"",children:n(e.pre,{"data-language":"bash","data-theme":"default",children:n(e.code,{"data-language":"bash","data-theme":"default",children:[n(e.span,{class:"line",children:n(e.span,{style:{color:"#DCDCAA"},children:"src/"})}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#DCDCAA"},children:"└──"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#CE9178"},children:"routes/"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"    "}),n(e.span,{style:{color:"#DCDCAA"},children:"└──"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#CE9178"},children:"product/"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"        "}),n(e.span,{style:{color:"#DCDCAA"},children:"└──"}),n(e.span,{style:{color:"#D4D4D4"},children:" [id]/"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#D4D4D4"},children:"            "}),n(e.span,{style:{color:"#DCDCAA"},children:"└──"}),n(e.span,{style:{color:"#D4D4D4"},children:" "}),n(e.span,{style:{color:"#CE9178"},children:"index.tsx"})]})]})})}),`
`,n(e.p,{children:["Notice that the ",n(e.code,{children:"index.tsx"})," file is inside a directory named ",n(e.code,{children:"[id]"}),". This is a special directory name that tells Qwik City to generate HTML files for each ",n(e.code,{children:"id"})," param. The ",n(e.code,{children:"index.tsx"})," file is the default file that Qwik City will use when generating HTML files for a route path."]})]})}function o(r={}){const{wrapper:e}=r.components||{};return e?n(e,Object.assign({},r,{children:n(l,r)})):l(r)}const p=()=>i(t,{children:i(o,{},3,null)},3,"HkyJ9QEU");export{p as default,h as frontmatter,d as head,c as headings};