import{i as n,e as u,d as _,c as t,w as d,g as i,s,_ as r}from"./q-71956c83.js";const a=()=>{const[e]=n();return e.nested.fields.are="tracked"},c=()=>{const e=u({nested:{fields:{are:"not tracked"}}},{deep:!0});return _(i,{children:[t("p",null,null,d(o=>o.nested.fields.are,[e]),3,null),t("button",null,{onClick$:s(()=>r(()=>Promise.resolve().then(()=>l),void 0),"s_uU0fBMMXpCY",[e])},"Clicking me works because store is deep watched",3,null),t("br",null,null,null,3,null),t("button",null,{onClick$:s(()=>r(()=>Promise.resolve().then(()=>l),void 0),"s_tDVC2PeEHMI",[e])},"Click me still works",3,null)]},3,"VF_0")},p=()=>{const[e]=n();return e.nested={fields:{are:"tracked"}}},l=Object.freeze(Object.defineProperty({__proto__:null,s_2oIFmLjh0zY:c,s_tDVC2PeEHMI:p,s_uU0fBMMXpCY:a},Symbol.toStringTag,{value:"Module"}));export{c as s_2oIFmLjh0zY,p as s_tDVC2PeEHMI,a as s_uU0fBMMXpCY};