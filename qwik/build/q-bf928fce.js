import{e as x,f as C,h as d,R as h,i as y,j as g,k as P}from"./q-5476fcbc.js";import{i as k,l as p,x as B,Y as S,e as w,C as u,c as m,d as b,v as _,w as r,P as $,s as i,_ as n}from"./q-71956c83.js";const E=x,R=()=>{const[e,t,l]=k();return{"--flex-dir":l.flexDir,"--flex-dir-tablet":C(t,l,e,{stackedStyle:l.flexDir,desktopStyle:"row"})}},T=()=>{const[e,t,l]=k();return`
        @media (max-width: ${d(t,l,e,"medium")}px) {
          .${t.builderBlock.id}-breakpoints {
            flex-direction: var(--flex-dir-tablet);
            align-items: stretch;
          }

          .${t.builderBlock.id}-breakpoints > .builder-column {
            width: var(--column-width-tablet) !important;
            margin-left: var(--column-margin-left-tablet) !important;
          }
        }

        @media (max-width: ${d(t,l,e,"small")}px) {
          .${t.builderBlock.id}-breakpoints {
            flex-direction: var(--flex-dir);
            align-items: stretch;
          }

          .${t.builderBlock.id}-breakpoints > .builder-column {
            width: var(--column-width-mobile) !important;
            margin-left: var(--column-margin-left-mobile) !important;
          }
        },
      `},z=e=>{p(),B(i(()=>n(()=>Promise.resolve().then(()=>a),void 0),"s_s7JLZz7MCCQ"));const t=S(P),l=w({cols:e.columns||[],flexDir:e.stackColumnsAt==="never"?"row":e.reverseColumnsWhenStacked?"column-reverse":"column",gutterSize:typeof e.space=="number"?e.space||0:20,stackAt:e.stackColumnsAt||"tablet"}),v=u(i(()=>n(()=>Promise.resolve().then(()=>a),void 0),"s_adFEq2RWT9s",[t,e,l])),c=u(i(()=>n(()=>Promise.resolve().then(()=>a),void 0),"s_nBtMPbzd1Wc",[t,e,l]));return m("div",null,{class:r(s=>`builder-columns ${s.builderBlock.id}-breakpoints div-Columns`,[e],'`builder-columns ${p0.builderBlock.id}-breakpoints`+" div-Columns"'),style:r(s=>s.value,[v],"p0.value")},[b(h,{get styles(){return c.value},[_]:{styles:r(s=>s.value,[c],"p0.value")}},3,"c0_0"),(e.columns||[]).map(function(s,o){return m("div",{style:y(e,l,t,o)},{class:"builder-column div-Columns-2"},b(g,{get blocks(){return s.blocks},path:`component.options.columns.${o}.blocks`,get parent(){return e.builderBlock.id},styleProp:{flexGrow:"1"},[_]:{blocks:$(s,"blocks"),parent:r(f=>f.builderBlock.id,[e],"p0.builderBlock.id")}},3,"c0_1"),1,o)})],1,"c0_2")},a=Object.freeze(Object.defineProperty({__proto__:null,s_7yLj4bxdI6c:z,s_adFEq2RWT9s:R,s_nBtMPbzd1Wc:T,s_s7JLZz7MCCQ:E},Symbol.toStringTag,{value:"Module"}));export{z as s_7yLj4bxdI6c,R as s_adFEq2RWT9s,T as s_nBtMPbzd1Wc,E as s_s7JLZz7MCCQ};
