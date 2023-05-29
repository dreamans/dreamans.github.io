import{i as $,a as W,Y as M,j as D,f as V,w as d,s as v,_ as b,l as Y,x as q,C as x,d as U,c as p,S as T,g as J,$ as Z}from"./q-71956c83.js";import{g as H,a as G,I as Q,b as X}from"./q-847f0f55.js";import{n as K,o as R}from"./q-5476fcbc.js";const tt=()=>{var n;const[t,e]=$();return(n=e.value)!=null&&n.match(/builder\.io/)&&!t.noWebp?e.value.replace(/\?/g,"?format=webp&"):""},et=JSON.parse(`{
  "images.ctfassets.net": "contentful",
  "cdn.builder.io": "builder.io",
  "images.prismic.io": "imgix",
  "www.datocms-assets.com": "imgix",
  "cdn.sanity.io": "imgix",
  "images.unsplash.com": "imgix",
  "cdn.shopify.com": "shopify",
  "s7d1.scene7.com": "scene7",
  "ip.keycdn.com": "keycdn",
  "assets.caisy.io": "bunny"
}
`),rt=JSON.parse(`{
  "imgix.net": "imgix",
  "files.wordpress.com": "wordpress",
  "b-cdn.net": "bunny",
  "storyblok.com": "storyblok",
  "kc-usercontent.com": "kontent.ai",
  "cloudinary.com": "cloudinary",
  "kxcdn.com": "keycdn"
}
`),nt=JSON.parse(`{
  "/cdn-cgi/image/": "cloudflare",
  "/_next/image": "nextjs",
  "/_next/static": "nextjs",
  "/_vercel/image": "vercel",
  "/is/image": "scene7"
}
`),I=new Map(Object.entries(et)),st=Object.entries(rt);function it(t){return ot(t)||at(t)}function ot(t){if(typeof t=="string"&&!t.startsWith("https://"))return!1;const{hostname:e}=new URL(t);if(I.has(e))return I.get(e);for(const[n,s]of st)if(e.endsWith(`.${n}`))return s;return!1}function at(t){const{pathname:e}=new URL(t,"http://n");for(const[n,s]of Object.entries(nt))if(e.startsWith(n))return s;return!1}const P=t=>{if(!t)return t;const e=Number(t);return isNaN(e)?t:Math.round(e)},l=(t,e,n,s,r)=>{n?(r&&(n=P(n)),t.searchParams.set(e,n.toString())):s&&t.searchParams.delete(e)},h=(t,e,n)=>{t.searchParams.has(e)||t.searchParams.set(e,n.toString())},S=(t,e)=>{const n=Number(t.searchParams.get(e));return isNaN(n)?void 0:n},A=t=>{const{pathname:e,search:n}=t;return`${e}${n}`},ct=({url:t,width:e,height:n,format:s})=>{const r=new URL(t);return l(r,"w",e,!0,!0),l(r,"h",n,!0,!0),l(r,"fm",s),h(r,"fit","fill"),r},ut=({url:t,width:e,height:n,format:s})=>{const r=new URL(t);return h(r,"fit","cover"),l(r,"width",e,!0,!0),l(r,"height",n,!0,!0),l(r,"format",s),r},lt=({url:t,width:e,height:n,format:s})=>{var i;const r=new URL(t);if(l(r,"w",e,!0,!0),l(r,"h",n,!0,!0),h(r,"fit","min"),s){r.searchParams.set("fm",s);const o=r.searchParams.get("auto");o==="format"?r.searchParams.delete("auto"):o!=null&&o.includes("format")&&r.searchParams.set("auto",o.split(",").filter(c=>c!=="format").join(","))}else r.searchParams.delete("fm"),(i=r.searchParams.get("auto"))!=null&&i.includes("format")||r.searchParams.append("auto","format");return r},ft=/(.+?)(?:_(?:(pico|icon|thumb|small|compact|medium|large|grande|original|master)|(\d*)x(\d*)))?(?:_crop_([a-z]+))?(\.[a-zA-Z]+)(\.png|\.jpg|\.webp|\.avif)?$/,mt=t=>{const e=new URL(t),n=e.pathname.match(ft);if(!n)throw new Error("Invalid Shopify URL");const[,s,r,i,o,c,a,u]=n;e.pathname=`${s}${a}`;const m=i||e.searchParams.get("width"),f=o||e.searchParams.get("height");return e.searchParams.delete("width"),e.searchParams.delete("height"),{base:e.toString(),width:Number(m)||void 0,height:Number(f)||void 0,format:u?u.slice(1):void 0,params:{crop:c,size:r},cdn:"shopify"}},dt=({base:t,width:e,height:n,format:s,params:r})=>{const i=new URL(t);return l(i,"width",e,!0,!0),l(i,"height",n,!0,!0),l(i,"crop",r==null?void 0:r.crop),l(i,"format",s),i},ht=({url:t,width:e,height:n})=>{const s=mt(t);if(!s)return;const r={...s,width:e,height:n};return dt(r)},gt=({url:t,width:e,height:n})=>{const s=new URL(t);return l(s,"w",e,!0,!0),l(s,"h",n,!0,!0),h(s,"crop","1"),s},pt=/https?:\/\/(?<host>[^\/]+)\/(?<cloudName>[^\/]+)\/(?<assetType>image|video|raw)\/(?<deliveryType>upload|fetch|private|authenticated|sprite|facebook|twitter|youtube|vimeo)\/?(?<signature>s\-\-[a-zA-Z0-9]+\-\-)?\/?(?<transformations>(?:[^_\/]+_[^,\/]+,?)*)?\/(?:(?<version>v\d+)\/)?(?<id>[^\.^\s]+)\.?(?<format>[a-zA-Z]+$)?$/g,wt=t=>t?Object.fromEntries(t.split(",").map(e=>e.split("_"))):{},O=({host:t,cloudName:e,assetType:n,deliveryType:s,signature:r,transformations:i={},version:o,id:c,format:a})=>{a&&(i.f=a);const u=Object.entries(i).map(([f,g])=>`${f}_${g}`).join(",");return`https://${[t,e,n,s,r,u,o,c].filter(Boolean).join("/")}`},z=t=>{const n=[...new URL(t).toString().matchAll(pt)];if(!n.length)throw new Error("Invalid Cloudinary URL");const s=n[0].groups||{},{transformations:r="",format:i,...o}=s,{w:c,h:a,f:u,...m}=wt(r),f=u&&u!=="auto"?u:i;return{base:O({...o,transformations:m}),width:Number(c)||void 0,height:Number(a)||void 0,format:f,cdn:"cloudinary",params:{...s,transformations:m}}},vt=({base:t,width:e,height:n,format:s,params:r})=>{var c;const i=z(t.toString()),o={transformations:{},...i.params,...r,format:s||"auto"};return e&&(o.transformations.w=P(e).toString()),n&&(o.transformations.h=P(n).toString()),(c=o.transformations).c||(c.c="lfill"),O(o)},bt=({url:t,width:e,height:n,format:s="auto"})=>{var o,c;const r=z(t);if(!r)throw new Error("Invalid Cloudinary URL");if(((o=r.params)==null?void 0:o.assetType)!=="image")throw new Error("Cloudinary transformer only supports images");if((c=r.params)!=null&&c.signature)throw new Error("Cloudinary transformer does not support signed URLs");const i={...r,width:e,height:n,format:s};return vt(i)},_t=/https?:\/\/(?<host>[^\/]+)\/cdn-cgi\/image\/(?<transformations>[^\/]+)\/(?<path>.*)$/g,yt=t=>Object.fromEntries(t.split(",").map(e=>e.split("="))),C=({host:t,transformations:e={},path:n})=>{const s=Object.entries(e).map(([i,o])=>`${i}=${o}`).join(",");return`https://${[t,"cdn-cgi","image",s,n].join("/")}`},B=t=>{const e=new URL(t),n=[...e.toString().matchAll(_t)];if(!n.length)throw new Error("Invalid Cloudflare URL");const s=n[0].groups||{},{transformations:r,...i}=s,{width:o,height:c,f:a,...u}=yt(r);return C({...i,transformations:u}),{base:e.toString(),width:Number(o)||void 0,height:Number(c)||void 0,format:a,cdn:"cloudflare",params:{...s,transformations:u}}},St=({base:t,width:e,height:n,format:s,params:r})=>{const i=B(t.toString()),o={transformations:{},...i.params,...r};return e&&(o.transformations.width=e==null?void 0:e.toString()),n&&(o.transformations.height=n==null?void 0:n.toString()),s&&(o.transformations.f=s),new URL(C(o))},$t=({url:t,width:e,height:n,format:s="auto"})=>{const r=B(t);if(!r)throw new Error("Invalid Cloudflare URL");const i={...r,width:e,height:n,format:s};return St(i)},xt=({url:t,width:e,height:n})=>{const s=new URL(t);return l(s,"width",e,!0,!0),l(s,"height",n,!0,!0),s},Ut=/(?<id>\/f\/\d+\/\d+x\d+\/\w+\/[^\/]+)\/?(?<modifiers>m\/?(?<crop>\d+x\d+:\d+x\d+)?\/?(?<resize>(?<flipx>\-)?(?<width>\d+)x(?<flipy>\-)?(?<height>\d+))?\/?(filters\:(?<filters>[^\/]+))?)?$/g,Rt=/^(?<modifiers>\/(?<crop>\d+x\d+:\d+x\d+)?\/?(?<resize>(?<flipx>\-)?(?<width>\d+)x(?<flipy>\-)?(?<height>\d+))?\/?(filters\:(?<filters>[^\/]+))?\/?)?(?<id>\/f\/.+)$/g,Pt=t=>t?Object.fromEntries(t.split(":").map(e=>{if(!e)return[];const[n,s]=e.split("(");return[n,s.replace(")","")]})):{},Lt=t=>{if(!t)return;const e=Object.entries(t).map(([n,s])=>`${n}(${s??""})`);if(e.length!==0)return`filters:${e.join(":")}`},jt=t=>{const e=new URL(t),n=e.hostname==="img2.storyblok.com"?Rt:Ut,[s]=e.pathname.matchAll(n);if(!s||!s.groups)throw new Error("Invalid Storyblok URL");const{id:r,crop:i,width:o,height:c,filters:a,flipx:u,flipy:m}=s.groups,{format:f,...g}=Pt(a);return e.hostname==="img2.storyblok.com"&&(e.hostname="a.storyblok.com"),{base:e.origin+r,width:Number(o)||void 0,height:Number(c)||void 0,format:f,params:{crop:i,filters:g,flipx:u,flipy:m},cdn:"storyblok"}},Tt=({base:t,width:e=0,height:n=0,format:s,params:r={}})=>{const{crop:i,filters:o,flipx:c="",flipy:a=""}=r,u=`${c}${e}x${a}${n}`;return new URL([t,"m",i,u,Lt(o),s].filter(Boolean).join("/"))},It=({url:t,width:e,height:n,format:s})=>{const r=jt(t);if(r)return s&&(r.params||(r.params={filters:{}}),r.params.filters||(r.params.filters={}),r.params.filters.format=s),Tt({...r,width:e,height:n})},Et=({url:t,width:e,height:n,format:s})=>{const r=new URL(t);return l(r,"w",e,!0,!0),l(r,"h",n,!0,!0),l(r,"fm",s,!0),(e||n)&&h(r,"fit","crop"),r},Nt=({base:t,width:e,params:{quality:n=75,root:s="_vercel"}={}})=>{const r=new URL("http://n");return r.pathname=`/${s}/image`,r.searchParams.set("url",t.toString()),l(r,"w",e,!1,!0),h(r,"q",n),A(r)},F=({url:t,width:e,cdn:n})=>{const s=new URL(t,"http://n"),r=s.pathname.startsWith("/_next/image")||s.pathname.startsWith("/_vercel/image"),i=r?s.searchParams.get("url"):t.toString();if(i)return l(s,"w",e,!0,!0),r?s.hostname==="n"?A(s):s.toString():Nt({base:i,width:e,params:{root:n==="nextjs"?"_next":"_vercel"}})},Wt=t=>F({...t,cdn:"nextjs"}),At=({url:t,width:e,height:n,format:s})=>{const r=new URL(t);return l(r,"wid",e,!0,!0),l(r,"hei",n,!0,!0),l(r,"fmt",s,!0),l(r,"qlt",S(r,"qlt"),!0),l(r,"scl",S(r,"scl"),!0),h(r,"fit","crop"),!e&&!n&&h(r,"scl",1),r},Ot=({url:t,width:e,height:n,format:s})=>{const r=new URL(t);return l(r,"width",e,!0,!0),l(r,"height",n,!0,!0),l(r,"format",s,!0),l(r,"quality",S(r,"quality"),!0),h(r,"enlarge",0),r},zt=({url:t,width:e,height:n,format:s})=>{const r=new URL(t);return l(r,"width",e,!0,!0),l(r,"height",n,!0,!0),l(r,"format",s),l(r,"quality",S(r,"quality"),!0),r},Ct=t=>({imgix:lt,contentful:ct,"builder.io":ut,shopify:ht,wordpress:gt,cloudinary:bt,bunny:xt,storyblok:It,cloudflare:$t,vercel:F,nextjs:Wt,scene7:At,"kontent.ai":Et,keycdn:Ot,directus:zt})[t],L=t=>{if(t)return Ct(t)},k=t=>L(it(t));var Bt=(t,e)=>{if(!(!t||!e))switch(e){case"constrained":return`(min-width: ${t}px) ${t}px, 100vw`;case"fixed":return`${t}px`;case"fullWidth":return"100vw";default:return}},w=t=>t||t===0?`${t}px`:void 0,Ft=({width:t,height:e,aspectRatio:n,layout:s,objectFit:r="cover",background:i})=>{const o=[["object-fit",r]];return i!=null&&i.startsWith("https:")||i!=null&&i.startsWith("http:")||i!=null&&i.startsWith("data:")?(o.push(["background-image",`url(${i})`]),o.push(["background-size","cover"]),o.push(["background-repeat","no-repeat"])):o.push(["background",i]),s==="fixed"&&(o.push(["width",w(t)]),o.push(["height",w(e)])),s==="constrained"&&(o.push(["max-width",w(t)]),o.push(["max-height",w(e)]),o.push(["aspect-ratio",n?`${n}`:void 0]),o.push(["width","100%"])),s==="fullWidth"&&(o.push(["width","100%"]),o.push(["aspect-ratio",n?`${n}`:void 0]),o.push(["height",w(e)])),Object.fromEntries(o.filter(([,c])=>c))},E=[6016,5120,4480,3840,3200,2560,2048,1920,1668,1280,1080,960,828,750,640],N=24,kt=({width:t,layout:e})=>{if(e==="fullWidth")return E;if(!t)return[];const n=t*2;return e==="fixed"?[t,n]:e==="constrained"?[t,n,...E.filter(s=>s<n)]:[]},Mt=({src:t,width:e,layout:n="constrained",height:s,aspectRatio:r,breakpoints:i,cdn:o,transformer:c})=>{if(c||(c=o?L(o):k(t)),!!c)return i||(i=kt({width:e,layout:n})),i.sort((a,u)=>a-u).map(a=>{let u;s&&r&&(u=Math.round(a/r));const m=c({url:t,width:a,height:u});return m?`${m.toString()} ${a}w`:""}).join(`,
`)};function Dt({src:t,width:e,height:n,priority:s,layout:r="constrained",aspectRatio:i,cdn:o,transformer:c,objectFit:a="cover",background:u,breakpoints:m,...f}){if(c||(c=o?L(o):k(t)),e=e&&Number(e)||void 0,n=n&&Number(n)||void 0,s?(f.loading||(f.loading="eager"),f.fetchpriority||(f.fetchpriority="high")):(f.loading||(f.loading="lazy"),f.decoding||(f.decoding="async")),f.alt===""&&(f.role||(f.role="presentation")),i?e?n?console.error("Ignoring aspectRatio because width and height are both set"):n=e/i:n?e=n*i:r!=="fullWidth"&&console.error("When aspectRatio is set, either width or height must also be set"):e&&n?i=e/n:r!=="fullWidth"&&console.error("Either aspectRatio or both width and height must be set"),c&&u==="auto"){const y=i?Math.round(N*i):void 0,j=c({url:t,width:N,height:y});j&&(u=j.toString())}const g={width:e,height:n,aspectRatio:i,layout:r,objectFit:a,background:u};if(c){f.sizes||(f.sizes=Bt(e,r)),f.style={...Ft(g),...f.style},f.srcset=Mt({src:t,width:e,height:n,aspectRatio:i,layout:r,breakpoints:m,transformer:c});const y=c({url:t,width:e,height:n});y&&(t=y.toString()),(r==="fullWidth"||r==="constrained")&&(e=void 0,n=void 0)}return{...f,src:t,width:e,height:n}}const Vt=t=>W("img",{...Dt(t)},null,0,"XF_0"),Yt=async()=>{const[t,e,n,s]=$();s.value=await H({src:e.src,width:e.width,height:e.height,aspectRatio:e.aspectRatio,layout:e.layout,resolutions:n,imageTransformer$:t})},qt=t=>{const e=M(Q),{resolutions:n,imageTransformer$:s,...r}={...e,...t},i={...t.style,...G(t)},o=X(t),c=D("");V(v(()=>b(()=>Promise.resolve().then(()=>_),void 0),"s_0QcMuLuR0Hw",[s,t,n,c]));const a={...r,children:void 0};return W("img",{...a,style:i,sizes:o},{decoding:"async",width:d(u=>["fullWidth","constrained"].includes(u.layout)?void 0:u.width,[t],'["fullWidth","constrained"].includes(p0.layout)?undefined:p0.width'),height:d(u=>["fullWidth","constrained"].includes(u.layout)?void 0:u.height,[t],'["fullWidth","constrained"].includes(p0.layout)?undefined:p0.height'),srcSet:d(u=>u.value,[c],"p0.value")},0,"ET_0")},Jt=t=>{var r,i,o,c;Y(),q(v(()=>b(()=>Promise.resolve().then(()=>_),void 0),"s_fBMYiVf9fuU"));const e=x(v(()=>b(()=>Promise.resolve().then(()=>_),void 0),"s_TZMibf9Gpvw",[t])),n=x(v(()=>b(()=>Promise.resolve().then(()=>_),void 0),"s_01YCu72BBtA",[t,e])),s=x(v(()=>b(()=>Promise.resolve().then(()=>_),void 0),"s_yJ1jG0g5fbw",[t]));return U(J,{children:[p("picture",null,null,[n.value?p("source",null,{type:"image/webp",srcSet:d(a=>a.value,[n],"p0.value")},null,3,"0A_0"):null,p("img",null,{loading:"lazy",alt:d(a=>a.altText,[t],"p0.altText"),role:d(a=>a.altText?"presentation":void 0,[t],'p0.altText?"presentation":undefined'),style:d((a,u)=>({objectPosition:u.backgroundPosition||"center",objectFit:u.backgroundSize||"cover",...a.value}),[s,t],'{objectPosition:p1.backgroundPosition||"center",objectFit:p1.backgroundSize||"cover",...p0.value}'),class:d(a=>"builder-image"+(a.className?" "+a.className:"")+" img-Image",[t],'"builder-image"+(p0.className?" "+p0.className:"")+" img-Image"'),src:d(a=>a.image,[t],"p0.image"),srcSet:d(a=>a.value,[e],"p0.value"),sizes:d(a=>a.sizes,[t],"p0.sizes")},null,3,null)],1,null),t.aspectRatio&&!((i=(r=t.builderBlock)==null?void 0:r.children)!=null&&i.length&&t.fitContent)?p("div",null,{class:"builder-image-sizer div-Image",style:d(a=>({paddingTop:a.aspectRatio*100+"%"}),[t],'{paddingTop:p0.aspectRatio*100+"%"}')},null,3,"0A_1"):null,(c=(o=t.builderBlock)==null?void 0:o.children)!=null&&c.length&&t.fitContent?U(T,null,3,"0A_2"):null,!t.fitContent&&t.children?p("div",null,{class:"div-Image-2"},U(T,null,3,"0A_3"),1,"0A_4"):null]},1,"0A_5")},Zt=()=>{const[t]=$(),e={position:"absolute",height:"100%",width:"100%",left:"0px",top:"0px"};return t.aspectRatio?e:void 0},Ht=K,Gt=()=>{var s;const[t]=$(),n=t.image||t.src;if(!n||!(n.match(/builder\.io/)||n.match(/cdn\.shopify\.com/)))return t.srcset;if(t.srcset&&((s=t.image)!=null&&s.includes("builder.io/api/v1/image"))){if(!t.srcset.includes(t.image.split("?")[0]))return console.debug("Removed given srcset"),R(n)}else if(t.image&&!t.srcset)return R(n);return R(n)},_=Object.freeze(Object.defineProperty({__proto__:null,_hW:Z,s_01YCu72BBtA:tt,s_0QcMuLuR0Hw:Yt,s_LRxDkFa1EfU:Jt,s_TZMibf9Gpvw:Gt,s_W1wZaAVNrf0:Vt,s_fBMYiVf9fuU:Ht,s_vchO0uJY55k:qt,s_yJ1jG0g5fbw:Zt},Symbol.toStringTag,{value:"Module"}));export{Z as _hW,tt as s_01YCu72BBtA,Yt as s_0QcMuLuR0Hw,Jt as s_LRxDkFa1EfU,Gt as s_TZMibf9Gpvw,Vt as s_W1wZaAVNrf0,Ht as s_fBMYiVf9fuU,qt as s_vchO0uJY55k,Zt as s_yJ1jG0g5fbw};