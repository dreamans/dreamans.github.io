import{e as a,d as i,c as l,s as o,v as s,P as n,g as u,_ as d,i as _}from"./q-71956c83.js";import{_auto_getInitialFilterState as c,_auto_getUniqueKinds as m,_auto_apiData as r,ApiMemberWrapper as p}from"./q-b5a984a8.js";import"./q-2ab75100.js";const g=()=>{const t=a(c());return i(u,{children:[l("h1",null,{class:"overview"},"API Reference",3,null),l("h2",null,null,"Filters",3,null),l("div",null,{class:"grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-10"},Array.from(m()).map(e=>l("button",{class:`filter-item block text-sm rounded-md text-left ${t[e]?"active":""}`,"data-kind-label":e.substring(0,1).toUpperCase(),onClick$:o(()=>d(()=>Promise.resolve().then(()=>b),void 0),"s_3mr0qqGS0x4",[t,e])},null,e.split("-").join(" "),0,`filter-${e}`)),1,null),l("h2",null,null,"References",3,null),Object.keys(r).map(e=>i(p,{get id(){return r[e].id},data:r[e],filters:t,[s]:{id:n(r[e],"id"),filters:s}},3,`api-member-wrapper-${r[e].id}`))]},1,"Gk_0")},f=()=>{const[t,e]=_();t[e]=!t[e]},b=Object.freeze(Object.defineProperty({__proto__:null,s_3mr0qqGS0x4:f,s_hIgzPrlKRhw:g},Symbol.toStringTag,{value:"Module"}));export{f as s_3mr0qqGS0x4,g as s_hIgzPrlKRhw};