const h="@builder.io/qwik",k="2.75.6",v="2.7.1",q="5.14.1",R="QwikReplDeps",E="QwikReplResults",w=async(s,r,e,n)=>{const t=B(r,e,n),o=await s.match(t);if(o)return o;const i=await fetch(t);if(i.ok)return t.url.includes("localhost")||await s.put(t,i.clone()),i},g=async(s,r,e,n)=>{const t=await w(s,r,e,n);if(t)console.debug(`Run: ${t.url}`),new Function(await t.clone().text())();else throw new Error(`Unable to run: ${I(r,e,n)}`)},N=async s=>{var n,t,o,i,l;const r=s.version,e=await caches.open(R);if(await Promise.all([w(e,h,r,"/core.cjs"),w(e,h,r,"/core.mjs"),w(e,h,r,"/core.min.mjs"),w(e,h,r,"/optimizer.cjs"),w(e,h,r,"/server.cjs"),w(e,"rollup",k,"/dist/rollup.browser.js"),w(e,"prettier",v,"/standalone.js"),w(e,"prettier",v,"/parser-html.js")]),self.qwikBuild={isServer:!0,isBrowser:!1,isDev:!1},!S((n=self.qwikCore)==null?void 0:n.version,r))if(await g(e,h,r,"/core.cjs"),self.qwikCore)console.debug(`Loaded @builder.io/qwik: ${self.qwikCore.version}`);else throw new Error(`Unable to load @builder.io/qwik ${r}`);if(!S((t=self.qwikOptimizer)==null?void 0:t.versions.qwik,r))if(await g(e,h,r,"/optimizer.cjs"),self.qwikOptimizer)console.debug(`Loaded @builder.io/qwik/optimizer: ${self.qwikOptimizer.versions.qwik}`);else throw new Error(`Unable to load @builder.io/qwik/optimizer ${r}`);if(!S((o=self.qwikServer)==null?void 0:o.versions.qwik,r))if(await g(e,h,r,"/server.cjs"),self.qwikServer)console.debug(`Loaded @builder.io/qwik/server: ${self.qwikServer.versions.qwik}`);else throw new Error(`Unable to load @builder.io/qwik/server ${r}`);if(((i=self.rollup)==null?void 0:i.VERSION)!==k)if(await g(e,"rollup",k,"/dist/rollup.browser.js"),self.rollup)console.debug(`Loaded rollup: ${self.rollup.VERSION}`);else throw new Error(`Unable to load rollup ${k}`);if(((l=self.prettier)==null?void 0:l.version)!==v)if(await g(e,"prettier",v,"/standalone.js"),await g(e,"prettier",v,"/parser-html.js"),self.prettier)console.debug(`Loaded prettier: ${self.prettier.version}`);else throw new Error(`Unable to load prettier ${v}`);if(s.buildMode==="production"&&!self.Terser)if(await w(e,"terser",q,"/dist/bundle.min.js"),await g(e,"terser",q,"/dist/bundle.min.js"),self.Terser)console.debug(`Loaded terser: ${q}`);else throw new Error(`Unable to load terser ${q}`);e.keys().then(u=>{if(u.length>30)for(let p=0;p<5;p++)e.delete(u[p])})},B=(s,r,e)=>new Request(I(s,r,e)),I=(s,r,e)=>`https://cdn.jsdelivr.net/npm/${s}${r?"@"+r:""}${e}`,S=(s,r)=>!(!s||s!==r&&!s.includes("-dev")&&!r.includes("-dev")),L=(s,r)=>{const e=s.srcInputs,n=t=>{var o;return(o=e.find(i=>i.path===t))==null?void 0:o.path};return{name:"repl-resolver",resolveId(t,o){if(!o)return t;if(t==="@builder.io/qwik"||t==="@builder.io/qwik/jsx-runtime"||t==="@builder.io/qwik/jsx-dev-runtime")return"\0qwikCore";if(t==="@builder.io/qwik/build")return"\0qwikBuild";if(t==="@builder.io/qwik/server")return"\0qwikServer";if(t.startsWith("./")){const i=["",".tsx",".ts"];t=t.slice(1);for(const l of i){const u=n(t+l);if(u)return u}}return{id:t,external:!0}},async load(t){const o=s.srcInputs.find(i=>i.path===t);if(o&&typeof o.code=="string")return o.code;if(r==="ssr"){if(t==="\0qwikCore")return C("qwikCore");if(t==="\0qwikServer")return C("qwikServer");if(t==="\0qwikBuild")return`
          export const isServer = true;
          export const isBrowser = false;
          export const isDev = false;
        `}if(t==="\0qwikBuild")return`
        export const isServer = false;
        export const isBrowser = true;
        export const isDev = false;
      `;if(t==="\0qwikCore"){const i=await caches.open(R);if(s.buildMode==="production"){const u=await w(i,"@builder.io/qwik",s.version,"/core.min.mjs");if(u)return u.clone().text()}const l=await w(i,"@builder.io/qwik",s.version,"/core.mjs");if(l)return l.clone().text();throw new Error("Unable to load Qwik core")}return null}}},C=s=>{const r=self[s];if(!r)throw new Error(`Unable to load Qwik runtime bundle "${s}"`);const e=Object.keys(r);return`
    const { ${e.join(", ")} } = self.${s};
    export { ${e.join(", ")} };
  `},M=s=>{const r=e=>[".css",".scss",".sass"].some(n=>e.endsWith(n));return{name:"repl-css",resolveId(e){return r(e)?e.startsWith(".")?e.slice(1):e:null},load(e){if(r(e)){const n=s.srcInputs.find(t=>t.path.endsWith(e));if(n&&typeof n.code=="string")return`const css = ${JSON.stringify(n.code)}; export default css;`}return null}}},_=s=>({name:"repl-minify",async generateBundle(r,e){var n;if(s.buildMode==="production")for(const t in e){const o=e[t];if(o.type==="chunk"){const i=await((n=self.Terser)==null?void 0:n.minify(o.code,P));i&&(o.code=i.code)}}}}),P={ecma:2020,module:!0,toplevel:!0},z=async(s,r,e)=>{var u,p;const n=performance.now(),t={target:"client",buildMode:s.buildMode,debug:s.debug,srcInputs:$(s),entryStrategy:s.entryStrategy,manifestOutput:c=>{e.manifest=c},transformedModuleOutput:c=>{e.transformedModules=c}};console.debug("client opts",t);const o=s.srcInputs.find(c=>c.path.endsWith("app.tsx"));if(!o)throw new Error('Missing client entry "app.tsx"');const i={input:o.path,cache:self.rollupCache,plugins:[M(s),(u=self.qwikOptimizer)==null?void 0:u.qwikRollup(t),L(s,"client"),_(s)],onwarn(c){const a={scope:"rollup-ssr",code:c.code??null,message:c.message,category:"warning",highlights:[],file:c.id||"",suggestions:null},f=c.loc;f&&f.file&&(a.file=f.file,a.highlights.push({startCol:f.column,endCol:f.column+1,startLine:f.line,endLine:f.line+1,lo:0,hi:0})),e.diagnostics.push(a)}},l=await((p=self.rollup)==null?void 0:p.rollup(i));if(l){self.rollupCache=l.cache;const c=await l.generate({sourcemap:!1});e.clientBundles=c.output.map(O).filter(a=>!a.path.endsWith("app.js")&&!a.path.endsWith("q-manifest.json")),await Promise.all(e.clientBundles.map(async a=>{const f=new URL("/repl/"+e.clientId+"/"+a.path,s.serverUrl),b=new Request(f.href),y=new Response(a.code,{headers:{"Content-Type":"application/javascript; charset=utf-8","Cache-Control":"no-store, no-cache, max-age=0","X-Qwik-REPL-App":"ssr-result"}});await r.put(b,y)})),r.keys().then(a=>{if(a.length>500)for(let f=0;f<25;f++)r.delete(a[f])})}e.transformedModules=e.transformedModules.filter(c=>!c.path.endsWith("app.js")&&!c.path.endsWith("entry.server.js")&&!c.path.endsWith("root.js")),e.events.push({kind:"console-log",scope:"build",start:n,end:performance.now(),message:["Build Client"]})},$=s=>s.srcInputs.filter(r=>Q.some(e=>r.path.endsWith(e))),Q=[".tsx",".ts",".js",".jsx",".mjs"],O=s=>{const r={path:s.fileName,code:"",size:""};return s.type==="chunk"?r.code=s.code||"":s.type==="asset"&&(r.code=String(s.source||"")),r.size=`${r.code.length} B`,r},D=async(s,r)=>{var l,u;const e=performance.now(),n={target:"ssr",buildMode:s.buildMode,debug:s.debug,srcInputs:$(s),entryStrategy:{type:"inline"},manifestInput:r.manifest};console.debug("ssr opts",n);const t=s.srcInputs.find(p=>p.path.endsWith("entry.server.tsx"));if(!t)throw new Error('Missing SSR entry "entry.server.tsx"');const o={input:t.path,cache:self.rollupCache,plugins:[M(s),(l=self.qwikOptimizer)==null?void 0:l.qwikRollup(n),L(s,"ssr")],onwarn(p){const c={scope:"rollup-ssr",code:p.code??null,message:p.message,category:"warning",highlights:[],file:p.id||"",suggestions:null},a=p.loc;a&&a.file&&(c.file=a.file,c.highlights.push({startCol:a.column,endCol:a.column+1,startLine:a.line,endLine:a.line+1,lo:0,hi:0})),r.diagnostics.push(c)}},i=await((u=self.rollup)==null?void 0:u.rollup(o));if(i){self.rollupCache=i.cache;const p=await i.generate({format:"cjs",inlineDynamicImports:!0,sourcemap:!1});r.ssrModules=p.output.map(O),r.ssrModules.push({path:"q-manifest.json",code:JSON.stringify(r.manifest,null,2)})}r.events.push({kind:"console-log",scope:"build",start:e,end:performance.now(),message:["Build SSR"]})},A=async(s,r,e)=>{var x;const n=e.ssrModules.find(d=>d.path.endsWith(".js"));if(!n||typeof n.code!="string")return;const t=performance.now(),o={exports:{}};new Function("module","exports","require",n.code)(o,o.exports,H);const l=o.exports,u=typeof l=="function"?l:l.default??l.render;if(typeof u!="function")throw new Error(`Server module "${n.path}" does not export render()`);const p=console.log,c=console.warn,a=console.error,f=console.debug;console.log=(...d)=>{e.events.push({kind:"console-log",scope:"ssr",message:d.map(m=>String(m)),start:performance.now()}),p(...d)},console.warn=(...d)=>{e.events.push({kind:"console-warn",scope:"ssr",message:d.map(m=>String(m)),start:performance.now()}),c(...d)},console.error=(...d)=>{e.events.push({kind:"console-error",scope:"ssr",message:d.map(m=>String(m)),start:performance.now()})},console.debug=(...d)=>{e.events.push({kind:"console-debug",scope:"ssr",message:d.map(m=>String(m)),start:performance.now()}),f(...d)};const b="/repl/"+e.clientId+"/",y=b+"build/",j=await u({base:y,manifest:e.manifest,prefetchStrategy:null});if(console.log=p,console.warn=c,console.error=a,console.debug=f,e.html=j.html,e.events.push({kind:"pause",scope:"ssr",start:t,end:performance.now(),message:[]}),s.buildMode!=="production")try{const d=(x=self.prettier)==null?void 0:x.format(e.html,{parser:"html",plugins:self.prettierPlugins});d&&(e.html=d)}catch(d){console.error(d)}const U=new URL(b,s.serverUrl),W=new Request(U.href),T=new Response(j.html,{headers:{"Content-Type":"text/html; charset=utf-8"}});await r.put(W,T)},H=s=>{console.debug(`require() not available from REPL SSR, path: ${s}`)},K=async(s,r,e)=>{const n={type:"result",clientId:r,buildId:e.buildId,html:"",transformedModules:[],clientBundles:[],manifest:void 0,ssrModules:[],diagnostics:[],events:[]};try{await N(e);const t=await caches.open(E);await z(e,t,n),await D(e,n),await A(e,t,n)}catch(t){n.diagnostics.push({scope:"runtime",message:String(t.stack||t),category:"error",file:"",highlights:[],suggestions:null,code:"runtime error"}),console.error(t)}await J(s,n)},F=s=>{if(s.data){const r=JSON.parse(s.data);r.type==="update"&&K(s.source,r.clientId,r.options)}},J=async(s,r)=>{s.postMessage(r)},V=async s=>{const e=new URL(s.request.url).pathname,n=e.split("/"),t=n[1],o=n[2];if(!(t!=="repl"||e.includes("/~repl-server")||e==="/repl/repl-sw.js"))return s.respondWith(caches.open(E).then(async i=>{var u;const l=await i.match(s.request);if(l){if((u=l.headers.get("Content-Type"))!=null&&u.includes("text/html")){const p=X(o,await l.clone().text());return new Response(p,{headers:{"Content-Type":"text/html; charset=utf-8","Cache-Control":"no-store,no-cache,max-age=0","X-Qwik-REPL-App":"ssr-result"}})}return l}return new Response("404 - "+s.request.url,{headers:{"Content-Type":"text/plain; charset=utf-8","Cache-Control":"no-store, no-cache, max-age=0","X-Qwik-REPL-App":"Not-Found"},status:404})}).catch(i=>console.error(i)))},X=(s,r)=>`<script>${`
(() => {
  const sendToServerWindow = (data) => {
    try {
      parent.postMessage(JSON.stringify({
        type: 'event',
        clientId: '${s}',
        event: data
      }));
    } catch {}
  };

  const log = console.log;
  const warn = console.warn;
  const error = console.error;

  console.log = (...args) => {
    sendToServerWindow({
      kind: 'console-log',
      scope: 'client',
      message: args.map(a => String(a)),
      start: performance.now(),
    });
    log(...args);
  };

  console.warn = (...args) => {
    sendToServerWindow({
      kind: 'console-warn',
      scope: 'client',
      message: args.map(a => String(a)),
      start: performance.now(),
    });
    warn(...args);
  };

  console.error = (...args) => {
    sendToServerWindow({
      kind: 'console-error',
      scope: 'client',
      message: args.map(a => String(a)),
      start: performance.now(),
    });
    error(...args);
  };

  window.addEventListener('error', (ev) => {
    sendToServerWindow({
      kind: 'error',
      scope: 'client',
      message: [ev.message],
      start: performance.now(),
    });
  });

  document.addEventListener('qsymbol', (ev) => {
    const symbolName = ev.detail;
    sendToServerWindow({
      kind: 'symbol',
      scope: 'client',
      message: [symbolName],
      start: performance.now(),
    });
  });

  document.addEventListener('qresume', () => {
    sendToServerWindow({
      kind: 'resume',
      scope: 'client',
      message: '',
      start: performance.now(),
    });
  });

  document.addEventListener('click', (ev) => {
    try {
      if (ev.target && ev.target.tagName === 'A') {
        const anchor = ev.target;
        const href = anchor.href;
        if (href && href !== '#') {
          const url = new URL(anchor.href, origin);
          if (url.origin !== origin) {
            anchor.setAttribute('target', '_blank');
          }
        }
      }
    } catch (e) {
      console.error('repl-request-handler', e);
    }
  }, true);
})();`}<\/script>${r||""}`;self.onmessage=F;self.onfetch=V;self.oninstall=s=>{self.skipWaiting(),s.waitUntil(Promise.all([caches.open(R),caches.open(E)]))};self.onactivate=()=>self.clients.claim();
