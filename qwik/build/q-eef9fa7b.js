import{l as k,c as i,k as v,d as c,v as o,s as d,_ as p,P as g,b as S,y as V,e as $,f as R,M as N,w as P,g as q,i as f,K as E,$ as W}from"./q-71956c83.js";import{a as B}from"./q-856b75da.js";import{R as j}from"./q-4d4bde90.js";import{C as Q}from"./q-a1ad2395.js";import{C as O}from"./q-e31c5fa3.js";import{r as U,s as F}from"./q-e07bfb55.js";import{g as H}from"./q-7ea826cb.js";import{i as J}from"./q-8128c547.js";import"./q-86000b98.js";import"./q-725317a4.js";import"./q-564f5686.js";const m=t=>(k(),i("div",{class:{"active-tab":t.isActive,"repl-tab-button":!0,...t.cssClass}},null,[i("button",{onClick$:t.onClick$},{class:"repl-tab-button-select",type:"button","preventdefault:click":!0},v(t,"text"),0,null),t.onClose$&&t.enableInputDelete?i("button",{onClick$:t.onClose$},{class:"repl-tab-button-close",type:"button","preventdefault:click":!0},c(Q,{width:9,height:9,[o]:{width:o,height:o}},3,"1X_0"),0,"1X_1"):null],1,t.text)),C=t=>i("div",null,{class:"repl-tab-buttons",translate:"no"},i("div",null,{class:"repl-tab-buttons-inner"},v(t,"children"),1,null),1,"Wa_0"),Y=({input:t,store:e})=>(k(),i("div",null,{class:"repl-panel repl-detail-panel"},[c(C,{children:[c(m,{text:"Console",isActive:e.selectedOutputDetail==="console",onClick$:d(()=>p(()=>import("./q-35806aa1.js"),["build/q-35806aa1.js","build/q-71956c83.js"]),"s_J7Cd0jO05IY",[e]),[o]:{text:o}},3,"9i_0"),c(m,{text:"Options",isActive:e.selectedOutputDetail==="options",onClick$:d(()=>p(()=>import("./q-35806aa1.js"),["build/q-35806aa1.js","build/q-71956c83.js"]),"s_MbH3hL9RTzs",[e]),[o]:{text:o}},3,"9i_1")]},1,"9i_2"),i("div",null,{class:"repl-tab"},[e.selectedOutputDetail==="console"?c(B,{store:e},3,"9i_3"):null,e.selectedOutputDetail==="options"?c(j,{input:t,get versions(){return e.versions},[o]:{versions:g(e,"versions")}},3,"9i_4"):null],1,null)],1,"9i_5")),z=S(d(()=>p(()=>import("./q-c6afadef.js"),["build/q-c6afadef.js","build/q-71956c83.js","build/q-b02a0988.js"]),"s_0kmNOrsHHvo")),K=({input:t,enableCopyToPlayground:e,enableDownload:n})=>i("div",null,{class:"repl-commands"},e?i("button",{onClick$:d(()=>p(()=>import("./q-f374dbce.js"),["build/q-f374dbce.js","build/q-71956c83.js","build/q-9f979261.js","build/q-4d4bde90.js"]),"s_B2wymv1Cql8",[t])},{class:"copy-to-playground",type:"button",title:"Copy To Playground","aria-label":"Copy To Playground"},[i("svg",null,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[i("rect",null,{x:"128",y:"128",width:"336",height:"336",rx:"57",ry:"57",fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32"},null,3,null),i("path",null,{d:"M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,3,null)],3,null),"Open in Playground"],2,"L3_0"):null,1,"L3_1"),X=({input:t,store:e,onInputChange$:n,onInputDelete$:s,enableCopyToPlayground:l,enableDownload:u,enableInputDelete:r})=>i("div",null,{class:"repl-panel repl-input-panel",translate:"no"},[c(C,{children:[t.files.map(a=>k(a.hidden?null:c(m,{text:Z(a.path),isActive:e.selectedInputPath===a.path,onClick$:d(()=>p(()=>Promise.resolve().then(()=>y),void 0),"s_lWGaPPYlcvs",[a,e]),onClose$:d(()=>p(()=>import("./q-d49591c3.js"),["build/q-d49591c3.js","build/q-71956c83.js"]),"s_4Ef0A36JSmA",[a,s]),enableInputDelete:r},3,a.path))),c(K,{input:t,enableCopyToPlayground:l,enableDownload:u},3,"db_0")]},1,"db_1"),i("div",null,{class:"repl-tab"},c(z,{input:t,onChange$:n,store:e,ariaLabel:"File Input",lineNumbers:"on",wordWrap:"off",[o]:{ariaLabel:o,lineNumbers:o,wordWrap:o}},2,"db_2"),1,null)],1,"db_3"),Z=t=>{const e=t.split("/");return e[e.length-1]},I=({outputs:t,headerText:e})=>i("div",null,{class:"output-result output-modules"},[i("div",null,{class:"file-tree"},[i("div",null,{class:"file-tree-header"},t.length>0?e:"",1,null),i("div",null,{class:"file-tree-items"},t.map((n,s)=>i("a",{onClick$:d(()=>p(()=>import("./q-a8f2ad55.js"),["build/q-a8f2ad55.js","build/q-71956c83.js"]),"s_FXZT01ybtDQ",[s])},{href:"#","preventdefault:click":!0},v(n,"path"),0,n.path)),1,null)],1,null),i("div",null,{class:"file-modules"},t.map((n,s)=>i("div",{"data-file-item":s},{class:"file-item"},[i("div",null,{class:"file-info"},[i("span",null,null,v(n,"path"),1,null),n.size?i("span",null,{class:"file-size"},["(",v(n,"size"),")"],1,"0y_0"):null],1,null),i("div",null,{class:"file-text"},c(O,{get path(){return n.path},get code(){return n.code},[o]:{path:g(n,"path"),code:g(n,"code")}},3,"0y_1"),1,null)],1,n.path)),1,null)],1,"0y_2"),G=({outputs:t})=>i("div",null,{class:"output-result output-modules"},[i("div",null,{class:"file-tree"},[i("div",null,{class:"file-tree-header"},"Symbols",3,null),i("div",null,{class:"file-tree-items"},t.map((e,n)=>{var s;return i("a",{onClick$:d(()=>p(()=>import("./q-ee23d288.js"),["build/q-ee23d288.js","build/q-71956c83.js"]),"s_01ySc3fVguw",[n])},{href:"#","preventdefault:click":!0},(s=e.hook)==null?void 0:s.canonicalFilename,0,e.path)}),1,null)],1,null),i("div",null,{class:"file-modules"},t.filter(e=>!!e.hook).map((e,n)=>{var s;return i("div",{"data-file-item":n},{class:"file-item"},[i("div",null,{class:"file-info"},i("span",null,null,(s=e.hook)==null?void 0:s.canonicalFilename,1,null),1,null),i("div",null,{class:"file-text"},c(O,{get path(){return e.path},get code(){return e.code},[o]:{path:g(e,"path"),code:g(e,"code")}},3,"Pf_0"),1,null)],1,e.path)}),1,null)],1,"Pf_1"),ee=({input:t,store:e})=>{k();const n=e.diagnostics.length+e.monacoDiagnostics.length;return i("div",null,{class:"repl-panel repl-output-panel"},[c(C,{children:[c(m,{text:"App",isActive:e.selectedOutputPanel==="app",onClick$:d(()=>p(()=>import("./q-4b1fb64e.js"),["build/q-4b1fb64e.js","build/q-71956c83.js"]),"s_xlmVpSP6ZK8",[e]),[o]:{text:o}},3,"tq_0"),e.enableHtmlOutput?c(m,{text:"HTML",isActive:e.selectedOutputPanel==="html",onClick$:d(()=>p(()=>import("./q-4b1fb64e.js"),["build/q-4b1fb64e.js","build/q-71956c83.js"]),"s_znnkb13Pb1Q",[e]),[o]:{text:o}},3,"tq_1"):null,e.enableClientOutput?c(m,{text:"Symbols",isActive:e.selectedOutputPanel==="symbols",onClick$:d(()=>p(()=>import("./q-4b1fb64e.js"),["build/q-4b1fb64e.js","build/q-71956c83.js"]),"s_Fxx4vULRBEM",[e]),[o]:{text:o}},3,"tq_2"):null,e.enableClientOutput?c(m,{text:"Client Bundles",isActive:e.selectedOutputPanel==="clientBundles",onClick$:d(()=>p(()=>import("./q-4b1fb64e.js"),["build/q-4b1fb64e.js","build/q-71956c83.js"]),"s_8W1FtQIiz3c",[e]),[o]:{text:o}},3,"tq_3"):null,e.enableSsrOutput?c(m,{text:"SSR Module",isActive:e.selectedOutputPanel==="serverModules",onClick$:d(()=>p(()=>import("./q-4b1fb64e.js"),["build/q-4b1fb64e.js","build/q-71956c83.js"]),"s_j0BGmggPOPw",[e]),[o]:{text:o}},3,"tq_4"):null,c(m,{text:`Diagnostics${n>0?` (${n})`:""}`,cssClass:{"repl-tab-diagnostics":!0,"has-errors":n>0},isActive:e.selectedOutputPanel==="diagnostics",onClick$:d(()=>p(()=>import("./q-4b1fb64e.js"),["build/q-4b1fb64e.js","build/q-71956c83.js"]),"s_NlEAonVRJ6I",[e])},3,"tq_5")]},1,"tq_6"),i("div",{class:{"repl-tab":!0,"repl-mode-production":t.buildMode==="production","repl-mode-development":t.buildMode!=="production"}},null,[i("div",{class:{"output-result":!0,"output-app":!0,"output-app-active":e.selectedOutputPanel==="app"}},null,[e.isLoading?i("svg",null,{class:"repl-spinner",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"},i("circle",null,{cx:"50",cy:"50",r:"24","stroke-width":"4","stroke-dasharray":"37.69911184307752 37.69911184307752",fill:"none","stroke-linecap":"round"},null,3,null),3,"tq_7"):null,i("iframe",{src:v(e,"serverUrl")},{class:"repl-server"},null,3,null)],1,null),e.selectedOutputPanel==="html"?i("div",null,{class:"output-result output-html"},c(O,{language:"markup",get code(){return e.html},[o]:{language:o,code:g(e,"html")}},3,"tq_8"),1,"tq_9"):null,e.selectedOutputPanel==="symbols"?c(G,{get outputs(){return e.transformedModules},[o]:{outputs:g(e,"transformedModules")}},3,"tq_10"):null,e.selectedOutputPanel==="clientBundles"?c(I,{headerText:"/build/",get outputs(){return e.clientBundles},[o]:{headerText:o,outputs:g(e,"clientBundles")}},3,"tq_11"):null,e.selectedOutputPanel==="serverModules"?c(I,{headerText:"/server/",get outputs(){return e.ssrModules},[o]:{headerText:o,outputs:g(e,"ssrModules")}},3,"tq_12"):null,e.selectedOutputPanel==="diagnostics"?i("div",null,{class:"output-result output-diagnostics"},n===0?i("p",null,{class:"no-diagnostics"},"- No Reported Diagnostics -",3,"tq_13"):[...e.diagnostics,...e.monacoDiagnostics].map(s=>i("p",null,null,v(s,"message"),1,"tq_14")),1,"tq_15"):null],1,null)],1,"tq_16")},te=t=>{V(d(()=>p(()=>import("./q-45e2866f.js"),["build/q-45e2866f.js","build/q-71956c83.js"]),"s_Z3o4v0D0CLc"));const e=$(()=>({clientId:Math.round(Math.random()*Number.MAX_SAFE_INTEGER).toString(36).toLowerCase(),html:"",transformedModules:[],clientBundles:[],ssrModules:[],diagnostics:[],monacoDiagnostics:[],enableClientOutput:t.enableClientOutput!==!1,enableHtmlOutput:t.enableHtmlOutput!==!1,enableSsrOutput:t.enableSsrOutput!==!1,selectedInputPath:"",selectedOutputPanel:"app",selectedOutputDetail:"console",ssrBuild:!0,debug:!1,serverUrl:"about:blank",serverWindow:null,versions:[],events:[],isLoading:!0}));R(d(()=>p(()=>import("./q-45e2866f.js"),["build/q-45e2866f.js","build/q-71956c83.js"]),"s_FnJG8PSAVYs",[t,e]));const n=d(()=>p(()=>Promise.resolve().then(()=>y),void 0),"s_IW29huCoDkc",[t]),s=d(()=>p(()=>import("./q-45e2866f.js"),["build/q-45e2866f.js","build/q-71956c83.js"]),"s_6kQEodZ410o",[t,e]);return N(d(()=>p(()=>Promise.resolve().then(()=>y),void 0),"s_XoQB11UZ1S0",[t,e])),R(d(()=>p(()=>Promise.resolve().then(()=>y),void 0),"s_IRhp4u7HN3o",[t,e])),c(q,{children:[c(X,{get input(){return t.input},store:e,onInputChange$:n,onInputDelete$:s,get enableCopyToPlayground(){return t.enableCopyToPlayground},get enableDownload(){return t.enableDownload},[o]:{input:P(l=>l.input,[t]),store:o,onInputChange$:o,onInputDelete$:o,enableCopyToPlayground:P(l=>l.enableCopyToPlayground,[t]),enableDownload:P(l=>l.enableDownload,[t])}},3,"Y6_0"),c(ee,{get input(){return t.input},store:e,[o]:{input:P(l=>l.input,[t]),store:o}},3,"Y6_1"),c(Y,{get input(){return t.input},store:e,[o]:{input:P(l=>l.input,[t]),store:o}},3,"Y6_2")]},1,"Y6_3")},ne=async t=>{let e=[],n=null;try{n=JSON.parse(localStorage.getItem(x)),se(n)?(console.debug(`Qwik REPL, fetch npm data: ${T}`),n=await(await fetch(T)).json(),n.timestamp=Date.now(),localStorage.setItem(x,JSON.stringify(n))):console.debug("Qwik REPL, using cached npm data")}catch(s){console.warn("getReplVersion",s)}return n&&Array.isArray(n.versions)&&(e=n.versions.filter(s=>{if(s===t||(n==null?void 0:n.tags.latest)===s)return!0;if(s.includes("-"))return!1;const l=s.split(".");return!(l.length!==3||isNaN(l[2])||l[0]==="0"&&l[1]==="0"&&parseInt(l[2],10)<100)}),e.length>20&&(e=e.slice(0,20)),(!t||!n.versions.includes(t))&&(t=n.tags.latest)),n||console.debug("Qwik REPL, npm data not found"),(!Array.isArray(e)||e.length===0)&&console.debug("Qwik REPL, versions not found"),t||console.debug("Qwik REPL, version not found"),{version:t,versions:e}},se=t=>!(t&&typeof t.timestamp=="number"&&t.timestamp+72e5>Date.now()),T="https://data.jsdelivr.com/v1/package/npm/@builder.io/qwik",x="qwikNpmData",le=async()=>{const[t,e]=f(),n=await ne(t.input.version);n.version?(e.versions=n.versions,t.input.version=n.version,e.serverUrl=new URL(`/repl/~repl-server-host.html?${e.clientId}`,origin).href,window.addEventListener("message",s=>U(s,e))):console.debug("Qwik REPL version not set")},ie=async(t,e,n,s)=>{const l=await D(),u=l.languages.typescript;u.typescriptDefaults.setCompilerOptions({allowJs:!0,allowNonTsExtensions:!0,esModuleInterop:!0,isolatedModules:!0,jsx:u.JsxEmit.ReactJSX,jsxImportSource:"@builder.io/qwik",moduleResolution:u.ModuleResolutionKind.NodeJs,noEmit:!0,skipLibCheck:!0,target:u.ScriptTarget.Latest,typeRoots:["node_modules/@types"]}),u.javascriptDefaults.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!1}),u.javascriptDefaults.setCompilerOptions({target:u.ScriptTarget.ESNext,allowNonTsExtensions:!0}),u.javascriptDefaults.workerOptions;const r=l.editor.create(t,{...pe,ariaLabel:e.ariaLabel,lineNumbers:e.lineNumbers,wordWrap:e.wordWrap,model:null,theme:L(H()==="dark")});if(u.typescriptDefaults.setEagerModelSync(!0),e.onChange$){let a=null,_=null;n.onChangeSubscription=E(r.onDidChangeModelContent(async()=>{clearTimeout(a),a=setTimeout(()=>{e.onChange$(e.store.selectedInputPath,r.getValue())},200),clearTimeout(_),_=setTimeout(()=>{ae(l,r,s)},50)}))}n.editor=E(r)},oe=async(t,e)=>{const n=await D(),s=t.store.selectedInputPath,l=t.input.files,u=n.editor.getModels();for(const r of u)try{const a=l.find(_=>w(n,_.path).fsPath===r.uri.fsPath);a?a.code!==r.getValue()&&r.setValue(a.code):r.dispose()}catch(a){console.error(r.uri.fsPath,a)}for(const r of l)try{const a=w(n,r.path);n.editor.getModel(a)||n.editor.createModel(r.code,void 0,a)}catch(a){console.error(r.path,a)}if(e.editor){const r=w(n,s).fsPath,a=e.editor.getModel();if(a){const _=e.editor.saveViewState();_&&(e.viewStates[a.uri.fsPath]=E(_))}if(!a||a.uri.fsPath!==r){const _=n.editor.getModels().find(b=>b.uri.fsPath===r);if(_){e.editor.setModel(_);const b=e.viewStates[_.uri.fsPath];b&&e.editor.restoreViewState(b),e.editor.focus()}}}},L=t=>t?"vs-dark":"vs",ae=async(t,e,n)=>{if(!h.tsWorker){const r=await t.languages.typescript.getTypeScriptWorker();h.tsWorker=await r(e.getModel().uri)}const s=h.tsWorker,l=t.editor.getModels(),u=[];await Promise.all(l.map(async r=>{const a=`file://${r.uri.fsPath}`,_=s.getSemanticDiagnostics(a),b=s.getSyntacticDiagnostics(a);u.push(...await _),u.push(...await b)})),u.length>0?n.monacoDiagnostics=u.map(r=>{var _;return{message:re(r.messageText),category:"error",highlights:[],code:`TSC: ${r.code}`,file:((_=r.file)==null?void 0:_.fileName)||"",scope:"monaco",suggestions:null}}):n.monacoDiagnostics.length>0&&(n.monacoDiagnostics=[],n.selectedOutputPanel==="diagnostics"&&n.diagnostics.length===0&&(n.selectedOutputPanel="app"))},re=t=>t?typeof t=="string"?t:t.messageText:"",ue=async t=>{const n=(await D()).languages.typescript.typescriptDefaults;(await ce(t)).forEach(l=>{l&&typeof l.code=="string"&&typeof l.path=="string"&&n.addExtraLib(l.code,`file://${l.path}`)}),n.addExtraLib(ge)},ce=async t=>{const e=[{pkgName:"@builder.io/qwik",pkgVersion:t,pkgPath:"/core.d.ts",path:"/node_modules/@types/builder.io__qwik/index.d.ts"},{pkgName:"@builder.io/qwik",pkgVersion:t,pkgPath:"/jsx-runtime.d.ts",path:"/node_modules/@types/builder.io__qwik/jsx-runtime.d.ts"},{pkgName:"@builder.io/qwik",pkgVersion:t,pkgPath:"/server.d.ts",path:"/node_modules/@types/builder.io__qwik/server.d.ts"},{pkgName:"@builder.io/qwik",pkgVersion:t,pkgPath:"/build/index.d.ts",path:"/node_modules/@types/builder.io__qwik/build/index.d.ts"}],n=await caches.open("QwikReplResults");return await Promise.all(e.map(async s=>{let l=h.deps.find(u=>u.pkgName===s.pkgName&&u.pkgPath===s.pkgPath&&u.pkgVersion===s.pkgVersion);l||(l={pkgName:s.pkgName,pkgVersion:s.pkgVersion,pkgPath:s.pkgPath,path:s.path},h.deps.push(l),l.promise=new Promise((u,r)=>{de(n,s).then(a=>{l.code=a,u()},r)})),await l.promise})),h.deps},de=async(t,e)=>{const n=M(e.pkgName,e.pkgVersion,e.pkgPath),s=new Request(n),l=await t.match(s);if(l)return l.clone().text();const u=await fetch(s);if(u.ok)return s.url.includes("localhost")||await t.put(s,u.clone()),u.clone().text();throw new Error(`Unable to fetch: ${n}`)},D=async()=>(h.loader||(h.loader=new Promise((t,e)=>{const n=document.createElement("script");n.addEventListener("error",e),n.addEventListener("load",()=>{require.config({paths:{vs:A}}),require(["vs/editor/editor.main"],()=>{t(globalThis.monaco)})}),n.async=!0,n.src=me,document.head.appendChild(n)})),h.loader),w=(t,e)=>new t.Uri().with({path:e}),pe={automaticLayout:!0,lineDecorationsWidth:5,lineNumbersMinChars:3,minimap:{enabled:!1},roundedSelection:!1,scrollBeyondLastLine:!1,tabSize:2},h={deps:[],loader:null,tsWorker:null},M=(t,e,n)=>`https://cdn.jsdelivr.net/npm/${t}@${e}${n}`,_e="0.33.0",A=M("monaco-editor",_e,"/min/vs"),me=`${A}/loader.js`,ge=`
declare module '*.css' {
  const css: string
  export default css
}
`,he=async({track:t})=>{const[e,n]=f();t(()=>n.editor),t(()=>e.input.version),t(()=>e.input.files),t(()=>e.store.selectedInputPath),e.input.version&&n.editor&&await oe(e,n)},fe=(t,e)=>{const[n]=f(),s=n.input.files.find(l=>l.path===t);s&&(s.code=e,n.input.buildId++)},ve=({track:t})=>{const[e,n]=f();t(()=>e.input.buildId),t(()=>e.input.buildMode),t(()=>e.input.entryStrategy),t(()=>e.input.files),t(()=>e.input.version),t(()=>n.serverWindow),F(e.input,n)},be=async()=>{const[t,e,n]=f();return n.editor||await ie(t.value,e,n,e.store),()=>{n.editor&&n.editor.dispose()}},Pe=({track:t})=>{var s;const[e,n]=f();t(()=>e.theme),e.theme!=="auto"&&((s=n.editor)==null||s.updateOptions({theme:L(e.theme==="dark")}))},ye=async({track:t})=>{const[e,n]=f();t(()=>e.input.version),t(()=>n.editor),e.input.version&&n.editor&&await ue(e.input.version)},ke=t=>{const[e,n]=f();function s(){document.body.classList.contains("DocSearch--active")||(n.isOpen=!0)}(t.key==="Escape"&&n.isOpen||t.key==="k"&&(t.metaKey||t.ctrlKey)||!J(t)&&t.key==="/"&&!n.isOpen)&&(n.isOpen?n.isOpen=!1:document.body.classList.contains("DocSearch--active")||s()),e&&e.value===document.activeElement&&/[a-zA-Z0-9]/.test(String.fromCharCode(t.keyCode))&&(n.isOpen=!0,n.initialQuery=t.key)},we=async()=>{const[t,e]=f();e.selectedInputPath=t.path},y=Object.freeze(Object.defineProperty({__proto__:null,_hW:W,s_AqHBIVNKf34:be,s_IRhp4u7HN3o:ve,s_IW29huCoDkc:fe,s_Qf2nEuUdHpM:ye,s_XoQB11UZ1S0:le,s_eePwnt3YTI8:Pe,s_iw211Du0bw8:te,s_lWGaPPYlcvs:we,s_oEksvFPgMEM:he,s_uCl5Lf0Typ8:ke},Symbol.toStringTag,{value:"Module"}));export{W as _hW,be as s_AqHBIVNKf34,ve as s_IRhp4u7HN3o,fe as s_IW29huCoDkc,ye as s_Qf2nEuUdHpM,le as s_XoQB11UZ1S0,Pe as s_eePwnt3YTI8,te as s_iw211Du0bw8,we as s_lWGaPPYlcvs,he as s_oEksvFPgMEM,ke as s_uCl5Lf0Typ8};
