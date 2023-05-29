import{d as u,c as t,g as c,l as d,w as p,v as m,a as s,k as w}from"./q-71956c83.js";import{T as g}from"./q-564f5686.js";import{b as f,v as h}from"./q-d84644e3.js";const y=({title:l,description:n,href:i})=>{const r=new URL("/logos/social-card.png?v=3",i).href,o="Image of Qwik Framework Logo, Framework reimagined for the edge. Code snippet npm create qwik@latest";return u(c,{children:[t("meta",{content:i},{property:"og:url"},null,3,null),t("meta",{content:l},{property:"og:title"},null,3,null),t("meta",{content:n},{property:"og:description"},null,3,null),t("meta",{content:r},{property:"og:image"},null,3,null),t("meta",{content:o},{property:"og:image:alt"},null,3,null),t("meta",null,{property:"og:image:width",content:"800"},null,3,null),t("meta",null,{property:"og:image:height",content:"418"},null,3,null),t("meta",null,{property:"og:type",content:"website"},null,3,null),t("meta",null,{property:"og:site_name",content:"Qwik"},null,3,null),t("meta",null,{property:"og:locale",content:"en_US"},null,3,null),t("meta",null,{name:"twitter:card",content:"summary_large_image"},null,3,null),t("meta",null,{name:"twitter:site",content:"@QwikDev"},null,3,null),t("meta",{content:l},{name:"twitter:title"},null,3,null),t("meta",{content:n},{name:"twitter:description"},null,3,null),t("meta",{content:r},{name:"twitter:image"},null,3,null),t("meta",{content:o},{name:"twitter:image:alt"},null,3,null),t("meta",null,{property:"fb:app_id",content:"676395883130092"},null,3,null)]},1,"Jw_0")},b=`/* Partytown 0.8.0 - MIT builder.io */
!function(t,e,n,i,r,o,a,d,s,c,l,p){function u(){p||(p=1,"/"==(a=(o.lib||"/~partytown/")+(o.debug?"debug/":""))[0]&&(s=e.querySelectorAll('script[type="text/partytown"]'),i!=t?i.dispatchEvent(new CustomEvent("pt1",{detail:t})):(d=setTimeout(f,1e4),e.addEventListener("pt0",w),r?h(1):n.serviceWorker?n.serviceWorker.register(a+(o.swPath||"partytown-sw.js"),{scope:a}).then((function(t){t.active?h():t.installing&&t.installing.addEventListener("statechange",(function(t){"activated"==t.target.state&&h()}))}),console.error):f())))}function h(t){c=e.createElement(t?"script":"iframe"),t||(c.setAttribute("style","display:block;width:0;height:0;border:0;visibility:hidden"),c.setAttribute("aria-hidden",!0)),c.src=a+"partytown-"+(t?"atomics.js?v=0.8.0":"sandbox-sw.html?"+Date.now()),e.querySelector(o.sandboxParent||"body").appendChild(c)}function f(n,r){for(w(),i==t&&(o.forward||[]).map((function(e){delete t[e.split(".")[0]]})),n=0;n<s.length;n++)(r=e.createElement("script")).innerHTML=s[n].innerHTML,e.head.appendChild(r);c&&c.parentNode.removeChild(c)}function w(){clearTimeout(d)}o=t.partytown||{},i==t&&(o.forward||[]).map((function(e){l=t,e.split(".").map((function(e,n,i){l=l[i[n]]=n+1<i.length?"push"==i[n+1]?[]:l[i[n]]||{}:function(){(t._ptf=t._ptf||[]).push(i,arguments)}}))})),"complete"==e.readyState?u():(t.addEventListener("DOMContentLoaded",u),t.addEventListener("load",u))}(window,document,navigator,top,window.crossOriginIsolated);`,v=(l,n)=>{const{forward:i=[],...r}=l||{},o=JSON.stringify(r,(e,a)=>(typeof a=="function"&&(a=String(a),a.startsWith(e+"(")&&(a="function "+a)),a));return["!(function(w,p,f,c){",Object.keys(r).length>0?`c=w[p]=Object.assign(w[p]||{},${o});`:"c=w[p]=w[p]||{};","c[f]=(c[f]||[])",i.length>0?`.concat(${JSON.stringify(i)})`:"","})(window,'partytown','forward');",n].join("")},k=l=>v(l,b),_=()=>u(c,{children:[t("script",null,{dangerouslySetInnerHTML:k({forward:["dataLayer.push"]})},null,3,null),t("script",null,{type:"text/partytown",dangerouslySetInnerHTML:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NR2STLN');`},null,3,null),t("script",null,{type:"text/partytown",src:"https://cdn.jsdelivr.net/npm/@builder.io/persist-attribution@0.0.1-beta-2/dist/persist-attribution.min.js",id:"persist-attribution-init","data-send-page-view-events":"true"},null,3,null),t("link",null,{rel:"dns-prefetch",href:"https://cdn.jsdelivr.net/"},null,3,null),t("link",null,{rel:"dns-prefetch",href:"https://cdn.builder.io/"},null,3,null)]},3,"Vt_0"),j=()=>{var o;d();const l=f(),n=h(),i=n.title?`${n.title} - Qwik`:"Qwik - Framework reimagined for the edge",r=((o=n.meta.find(e=>e.name==="description"))==null?void 0:o.content)||"No hydration, auto lazy-loading, edge-optimized, and fun 🎉!";return u(c,{children:[t("title",null,null,i,1,null),t("meta",{content:r},{name:"description"},null,3,null),t("link",null,{rel:"canonical",href:p(e=>e.url.href,[l])},null,3,null),t("meta",null,{name:"viewport",content:"width=device-width, initial-scale=1"},null,3,null),t("meta",null,{name:"apple-mobile-web-app-title",content:"Qwik"},null,3,null),t("meta",null,{name:"application-name",content:"Qwik"},null,3,null),t("meta",null,{name:"apple-mobile-web-app-title",content:"Qwik"},null,3,null),t("meta",null,{name:"theme-color",content:"#006ce9"},null,3,null),t("meta",null,{name:"color-scheme",content:"dark light"},null,3,null),t("link",null,{rel:"apple-touch-icon",sizes:"180x180",href:"/favicons/apple-touch-icon.png"},null,3,null),t("link",null,{rel:"icon",href:"/favicons/favicon.svg",type:"image/svg+xml"},null,3,null),u(c,{children:[u(y,{title:i,description:r,get href(){return l.url.href},[m]:{href:p(e=>e.url.href,[l])}},3,"Py_0"),u(_,null,3,"Py_1")]},1,"Py_2"),n.meta.map(e=>s("meta",{...e},null,0,"Py_3")),n.links.map(e=>s("link",{...e},null,0,"Py_4")),n.styles.map(e=>s("style",{...e.props,dangerouslySetInnerHTML:w(e,"style")},null,0,"Py_5")),u(g,null,3,"Py_6")]},1,"Py_7")};export{j as s_pTmg6TTZ2oo};