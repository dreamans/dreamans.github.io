import{b as i,s as n,_ as p}from"./q-71956c83.js";import{t as a}from"./q-c5752bab.js";const l=i(n(()=>p(()=>import("./q-aba260cb.js"),["build/q-aba260cb.js","build/q-71956c83.js","build/q-9918e857.js","build/q-681e2099.js","build/q-a276ee39.js","build/q-b02a0988.js","build/q-35ceb0bc.js","build/q-77b362c9.js","build/q-d84644e3.js","build/q-1b15dad6.js","build/q-8b40c0a1.js","build/q-0298c02c.js","build/q-e07bfb55.js","build/q-c5752bab.js"]),"s_ecs65giZetE")),c=r=>{const t=[];a.forEach(o=>t.push(...o.apps));for(let o=0;o<t.length;o++)if(t[o].id===r)return{app:JSON.parse(JSON.stringify(t[o])),prev:t[o-1],next:t[o+1]};return null},f=r=>{const t=JSON.parse(JSON.stringify(r)),o=`
import { renderToString, RenderOptions } from '@builder.io/qwik/server';
import { Root } from './root';

export default function (opts: RenderOptions) {
  return renderToString(<Root />, opts);
}
`,s=`
import App from './app';

export const Root = () => {
  return (
    <>
      <head>
        <title>Tutorial</title>
      </head>
      <body>
        <App />
      </body>
    </>
  );
};
`;return t.some(e=>e.code==="/root.tsx")||t.push({path:"/root.tsx",code:s,hidden:!0}),t.some(e=>e.code==="/entry.server.tsx")||t.push({path:"/entry.server.tsx",code:o,hidden:!0}),t},m=["Tutorial","Input","Output"],h=()=>{throw"Symbol removed by Qwik Optimizer, it can not be called from current platform"};export{m as PANELS,l as default,f as ensureDefaultFiles,c as getTutorial,h as onGet};
