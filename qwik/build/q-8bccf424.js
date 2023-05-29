import{B as a}from"./q-4bc7de01.js";import{G as r}from"./q-b02a0988.js";import{Q as i,x as d,S as l}from"./q-d84644e3.js";import{c as n,b as c,s as u,_ as m,e as p,B as y,d as e,w as f,v as o}from"./q-71956c83.js";const g=t=>n("script",{dangerouslySetInnerHTML:`
  ((d, sentStats) => {
    const id = () => Math.round(Math.random() * Number.MAX_SAFE_INTEGER).toString(36);
    const pageId = id();
    const sessionId = (sessionStorage["q:sId"] = sessionStorage["q:sId"] || id());
    const now = Date.now();
    const sessionStart = parseInt((sessionStorage["q:sTs"] = sessionStorage["q:sTs"] || now), 10);
    const sessionOffset = now - sessionStart;
    const visitorId = (localStorage["q:vId"] = localStorage["q:vId"] || id());
    const qEvents = [];
    const loggedQrls = new Set();

    const send = () => {
      if (qEvents.length > 0) {
        fetch("https://cdn.builder.io/api/v1/track", {
          method: "POST",
          body: JSON.stringify({ events: qEvents }),
          keepalive: true,
        });
        qEvents.length = 0;
      }

    };

    const queue = (type, metadata) => {
      qEvents.push({
        type: type,
        data: {
          metadata: {
            url: location.href,
            pageId: pageId,
            sessionOffset: sessionOffset,
            ...metadata
          },
          ownerId: ${JSON.stringify(t.builderApiKey)},
          sessionId: sessionId,
          visitorId: visitorId
        },
      });
    };

    d.addEventListener("qsymbol", (ev) => {
      try {
        const detail = ev.detail;
        const qsymbol = detail?.symbol;
        console.debug('Symbol', qsymbol);
        if (qsymbol && !loggedQrls.has(qsymbol)) {
          loggedQrls.add(qsymbol);

          queue("qrl", {
            reqTime: Math.round(detail?.reqTime ?? -1),
            execTime: Math.round(performance.now()),
            qsymbol: qsymbol,
          });

          if (qEvents.length > 9) {
            send();
          }
        }
      } catch (e) {
        console.error(e);
      }
    });

    d.addEventListener("visibilitychange", () => {
      if (d.visibilityState === "hidden") {
        try {
          if (!sentStats) {
            sentStats = true;

            const metadata = {
              perf: [],
              ua: navigator.userAgent,
            };
            const entryTypes = ["navigation", "paint", "longtask"];

            if (performance.getEntriesByType) {
              for (const entryTypeName of entryTypes) {
                for (const entry of performance.getEntriesByType(entryTypeName)) {
                  metadata.perf.push(entry.toJSON());
                }
              }
            }

            if (navigator.connection) {
              metadata.conn = {};
              for (const n in navigator.connection) {
                if (navigator.connection[n] && typeof navigator.connection[n] !== "function") {
                  metadata.conn[n] = navigator.connection[n];
                }
              }
            }
            queue('qstats', metadata);
          }
          send();
        } catch (e) {
          console.error(e);
        }
      }
    });
  })(document);
`},null,null,3,"xh_0"),v=c(u(()=>m(()=>import("./q-a5c3c5d5.js"),["build/q-a5c3c5d5.js","build/q-71956c83.js","build/q-564f5686.js","build/q-d84644e3.js"]),"s_pTmg6TTZ2oo")),I=()=>{const t=p({headerMenuOpen:!1,sideMenuOpen:!1,theme:"auto"});return y(r,t),e(i,{children:[n("head",null,null,[n("meta",null,{charSet:"utf-8"},null,3,null),e(v,null,3,"eW_0")],1,null),n("body",null,{class:f(s=>({"header-open":s.headerMenuOpen,"menu-open":s.sideMenuOpen}),[t])},[e(d,null,3,"eW_1"),e(l,null,3,"eW_2"),e(g,{builderApiKey:a,[o]:{builderApiKey:o}},3,"eW_3")],1,null)]},1,"eW_4")};export{I as s_w5MYBhIX0cA};
