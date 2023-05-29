import{b as r,s as i,_ as s}from"./q-71956c83.js";const a=[{id:"introduction",title:"Introduction",apps:[{id:"introduction/hello-world",title:"Hello World",description:"The simplest Qwik app.",icon:"🌎",inputs:[{path:"/app.tsx",code:`import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return <p>Hello Qwik</p>;
});
`},{path:"/entry.server.tsx",code:`import { renderToString, type RenderOptions } from '@builder.io/qwik/server';
import { Root } from './root';

export default function (opts: RenderOptions) {
  return renderToString(<Root />, opts);
}
`},{path:"/root.tsx",code:`import App from './app';

export const Root = () => {
  return (
    <>
      <head>
        <title>Hello Qwik</title>
      </head>
      <body>
        <App />
      </body>
    </>
  );
};
`}]},{id:"introduction/runtime-less",title:"Runtime-less",description:"An app interactive app without runtime.",icon:"🪶",inputs:[{path:"/app.tsx",code:`import { component$ } from '@builder.io/qwik';

export default component$(() => {
  console.log('render <App>');
  return (
    <article id="container">
      <button
        onClick$={() => {
          // The click handler is completely stateless, and does not use any QWIK api.
          // Meaning, the qwik runtime is NEVER downloaded, nor executed
          console.log('click');
          const div = document.querySelector('#container')! as HTMLElement;
          div.style.background = 'yellow';
        }}
      >
        Action
      </button>
    </article>
  );
});
`},{path:"/entry.server.tsx",code:`import { renderToString, type RenderOptions } from '@builder.io/qwik/server';
import { Root } from './root';

export default function (opts: RenderOptions) {
  return renderToString(<Root />, opts);
}
`},{path:"/root.tsx",code:`import App from './app';

export const Root = () => {
  return (
    <>
      <head>
        <title>Hello Qwik</title>
      </head>
      <body>
        <App />
      </body>
    </>
  );
};
`}]}]},{id:"reactivity",title:"Reactivity",apps:[{id:"reactivity/task",title:"Simple useTask()",description:"Learn how to react to changes in variables.",icon:"👀",inputs:[{path:"/app.tsx",code:`import { component$, useTask$, useStore } from '@builder.io/qwik';

interface State {
  count: number;
  debounced: number;
}

export default component$(() => {
  const store = useStore<State>({
    count: 0,
    debounced: 0,
  });

  useTask$(({ track }) => {
    // track changes in store.count
    track(() => store.count);
    console.log('count changed');

    const timer = setTimeout(() => {
      store.debounced = store.count;
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  });

  console.log('<App> renders');
  return (
    <div>
      <Child state={store} />
      <button id="add" onClick$={() => store.count++}>
        +
      </button>
    </div>
  );
});

export const Child = component$((props: { state: State }) => {
  console.log('<Child> render');
  return (
    <div>
      <div id="child">{props.state.count}</div>
      <GrandChild state={props.state} />
    </div>
  );
});

export const GrandChild = component$((props: { state: State }) => {
  console.log('<GrandChild> render');
  return <div id="debounced">Debounced: {props.state.debounced}</div>;
});
`},{path:"/entry.server.tsx",code:`import { renderToString, type RenderOptions } from '@builder.io/qwik/server';
import { Root } from './root';

export default function (opts: RenderOptions) {
  return renderToString(<Root />, opts);
}
`},{path:"/root.tsx",code:`import App from './app';

export const Root = () => {
  return (
    <>
      <head>
        <title>Hello Qwik</title>
      </head>
      <body>
        <App />
      </body>
    </>
  );
};
`}]},{id:"reactivity/counter",title:"Counter",description:"A simple standard counter example.",icon:"⏲",inputs:[{path:"/app.tsx",code:`import { component$, useStore } from '@builder.io/qwik';

export default component$(() => {
  const store = useStore({ count: 0 });

  return (
    <main>
      <p>Count: {store.count}</p>
      <p>
        <button onClick$={() => store.count++}>Click</button>
      </p>
    </main>
  );
});
`},{path:"/entry.server.tsx",code:`import { renderToString, type RenderOptions } from '@builder.io/qwik/server';
import { Root } from './root';

export default function (opts: RenderOptions) {
  return renderToString(<Root />, opts);
}
`},{path:"/root.tsx",code:`import App from './app';

export const Root = () => {
  return (
    <>
      <head>
        <title>Counter</title>
      </head>
      <body>
        <App />
      </body>
    </>
  );
};
`}]},{id:"reactivity/auto-complete",title:"Auto-complete",description:"Auto-complete searching for Star Wars characters using the SWAPI API",icon:"🎬",inputs:[{path:"/app.tsx",code:`import { component$, useStore, useTask$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <article>
      This example features an auto-complete component with a debounce of 150 ms.
      <br />
      The function \`debouncedGetPeople\` needs to be exported because it is used in \`useTask$\`.
      <br />
      <br />
      Go ahead, search for Star Wars characters such as "Luke Skywalker", it uses the{' '}
      <a href="https://swapi.dev/">Star Wars API</a>
      <AutoComplete></AutoComplete>
    </article>
  );
});

interface IState {
  searchInput: string;
  searchResults: string[];
  selectedValue: string;
}

export const AutoComplete = component$(() => {
  const state = useStore<IState>({
    searchInput: '',
    searchResults: [],
    selectedValue: '',
  });

  useTask$(async ({ track }) => {
    const searchInput = track(() => state.searchInput);

    if (!searchInput) {
      state.searchResults = [];
      return;
    }

    const controller = new AbortController();
    state.searchResults = await debouncedGetPeople(state.searchInput, controller);

    return () => {
      controller.abort();
    };
  });

  return (
    <div>
      <input
        type="text"
        onInput$={(ev) => (state.searchInput = (ev.target as HTMLInputElement).value)}
      />
      <SuggestionsListComponent state={state}></SuggestionsListComponent>
    </div>
  );
});

export const SuggestionsListComponent = (props: { state: IState }) => {
  const searchResults = props.state.searchResults;
  return searchResults?.length ? (
    <ul>
      {searchResults.map((suggestion) => {
        return <li onClick$={() => (props.state.selectedValue = suggestion)}>{suggestion}</li>;
      })}
    </ul>
  ) : (
    <p class="no-results">
      <em>No suggestions, you re on your own!</em>
    </p>
  );
};

const getPeople = (searchInput: string, controller?: AbortController): Promise<string[]> =>
  fetch(\`https://swapi.dev/api/people/?search=\${searchInput}\`, {
    signal: controller?.signal,
  })
    .then((response) => {
      return response.json();
    })
    .then((parsedResponse) => {
      return parsedResponse.results.map((people: { name: string }) => people.name);
    });

function debounce<F extends (...args: any[]) => any>(fn: F, delay = 500) {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: Parameters<F>): Promise<ReturnType<F>> => {
    return new Promise((resolve) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        resolve(fn(...args));
      }, delay);
    });
  };
}

export const debouncedGetPeople = debounce(getPeople, 150);
`},{path:"/entry.server.tsx",code:`import { renderToString, type RenderOptions } from '@builder.io/qwik/server';
import { Root } from './root';

export default function (opts: RenderOptions) {
  return renderToString(<Root />, opts);
}
`},{path:"/root.tsx",code:`import App from './app';

export const Root = () => {
  return (
    <>
      <head>
        <title>Auto-complete example using Qwik</title>
      </head>
      <body>
        <App />
      </body>
    </>
  );
};
`}]}]},{id:"visibility",title:"Visibility",apps:[{id:"visibility/clock",title:"Below the fold Clock",description:"Component which requires lazy initialization when it comes into view.",icon:"⏰",inputs:[{path:"/app.tsx",code:`import { component$, useStore, useStyles$, useVisibleTask$ } from '@builder.io/qwik';
import styles from './clock.css';

export default component$(() => {
  const items = new Array(60).fill(null).map((_, index) => 'item ' + index);

  console.log('PARENT');
  return (
    <div>
      <p onClick$={() => console.log('test')}>
        This is an example of Lazy executing code on component when component becomes visible.
      </p>

      <p>
        ⬇️ <strong>Scroll down</strong> until the clock is in view.
      </p>

      <ul>
        {items.map((i) => (
          <li>{i}</li>
        ))}
      </ul>

      <Clock />
    </div>
  );
});

export const Clock = component$(() => {
  useStyles$(styles);

  const store = useStore({
    hour: 0,
    minute: 0,
    second: 0,
  });

  useVisibleTask$(() => {
    const update = () => {
      const now = new Date();
      store.second = now.getSeconds() * (360 / 60);
      store.minute = now.getMinutes() * (360 / 60);
      store.hour = now.getHours() * (360 / 12);
    };
    update();
    const tmrId = setInterval(update, 1000);
    return () => clearInterval(tmrId);
  });

  console.log('Render Clock');
  return (
    <div class="clock">
      <div class="twelve"></div>
      <div class="three"></div>
      <div class="six"></div>
      <div class="nine"></div>
      <div class="hour" style={{ transform: \`rotate(\${store.hour}deg)\` }}></div>
      <div class="minute" style={{ transform: \`rotate(\${store.minute}deg)\` }}></div>
      <div class="second" style={{ transform: \`rotate(\${store.second}deg)\` }}></div>
    </div>
  );
});
`},{path:"/clock.css",code:`/* Clock inspired by: https://paulund.co.uk/create-a-clock-in-css */

.clock {
  background: #fff;
  border: 10px solid #7a7a7a;
  border-radius: 50%;
  box-sizing: border-box;
  height: 300px;
  margin: 0 auto;
  position: relative;
  width: 300px;
}

.twelve,
.three,
.six,
.nine {
  background: #333;
  position: absolute;
}

.twelve,
.six {
  height: 10px;
  width: 4px;
}

.three,
.nine {
  height: 4px;
  width: 10px;
}

.twelve {
  left: 50%;
  top: -1px;
}

.three {
  right: -1px;
  top: 50%;
}

.six {
  left: 50%;
  bottom: -1px;
}

.nine {
  left: -1px;
  top: 50%;
}

.hour {
  height: 60px;
  width: 4px;
  background: #333;
  position: absolute;
  left: 50%;
  top: 80px;
  animation: tick 43200s infinite linear;
  -webkit-animation: tick 43200s infinite linear;
}

.minute {
  height: 100px;
  width: 4px;
  background: #777;
  position: absolute;
  left: 50%;
  top: 40px;
  animation: tick 3600s infinite linear;
  -webkit-animation: tick 3600s infinite linear;
}

.second {
  height: 120px;
  width: 3px;
  background: #fc0505;
  position: absolute;
  left: 50%;
  top: 20px;
  animation: tick 60s infinite linear;
  -webkit-animation: tick 60s infinite linear;
}

.hour,
.minute,
.second {
  transform-origin: 2px 100%;
  -webkit-transform-origin: 2px 100%;
}
`},{path:"/entry.server.tsx",code:`import { renderToString, type RenderOptions } from '@builder.io/qwik/server';
import { Root } from './root';

export default function (opts: RenderOptions) {
  return renderToString(<Root />, opts);
}
`},{path:"/root.tsx",code:`import App from './app';

export const Root = () => {
  return (
    <>
      <head>
        <title>Clock</title>
      </head>
      <body>
        <App />
      </body>
    </>
  );
};
`}]}]},{id:"partial",title:"Partial",apps:[{id:"partial/hackernews-index",title:"HackerNews",description:"HackerNews landing page.",icon:"📰",inputs:[{path:"/app.tsx",code:`import { component$, useTask$, useStore, useStyles$ } from '@builder.io/qwik';
import { isServer } from '@builder.io/qwik/build';
import HackerNewsCSS from './hacker-news.css?inline';

export const HackerNews = component$(() => {
  useStyles$(HackerNewsCSS);
  const store = useStore({ data: null });

  useTask$(async () => {
    if (isServer) {
      const response = await fetch('https://node-hnapi.herokuapp.com/news?page=0');
      store.data = await response.json();
    }
  });

  return (
    <>
      <Nav />
      <Stories data={store.data} />
    </>
  );
});

export const Nav = component$(() => {
  return (
    <nav>
      <header class="header">
        <nav class="inner">
          <a href="/">
            <strong>HN</strong>
          </a>
          <a href="/?type=new">
            <strong>New</strong>
          </a>
          <a href="/?type=show">
            <strong>Show</strong>
          </a>
          <a href="/?type=ask">
            <strong>Ask</strong>
          </a>
          <a href="/?type=job">
            <strong>Jobs</strong>
          </a>
          <a
            class="github"
            href="http://github.com/builderio/qwik"
            target="_blank"
            rel="noreferrer"
          >
            Built with Qwik
          </a>
        </nav>
      </header>
    </nav>
  );
});

export const Stories = component$((props: { data: any }) => {
  const page = 1;
  const type = 'list';
  const stories = props.data;
  return (
    <main class="news-view">
      <section class="news-list-nav">
        {page > 1 ? (
          <a class="page-link" href={\`/?type=\${type}&page=\${page - 1}\`} aria-label="Previous Page">
            {'<'} prev
          </a>
        ) : (
          <span class="page-link disabled" aria-disabled="true">
            {'<'} prev
          </span>
        )}
        <span>page {page}</span>
        {stories && stories.length >= 29 ? (
          <a class="page-link" href={\`/?type=\${type}&page=\${page + 1}\`} aria-label="Next Page">
            more {'>'}
          </a>
        ) : (
          <span class="page-link disabled" aria-disabled="true">
            more {'>'}
          </span>
        )}
      </section>
      <article class="news-list">
        {stories && (
          <ul>
            {stories.map((story: IStory) => (
              <StoryPreview story={story} />
            ))}
          </ul>
        )}
      </article>
    </main>
  );
});

export const StoryPreview = component$((props: { story: IStory }) => {
  return (
    <li class="news-item">
      <span class="score">{props.story.points}</span>
      <span class="title">
        {props.story.url && !props.story.url.startsWith('item?id=') ? (
          <>
            <a href={props.story.url} target="_blank" rel="noreferrer">
              {props.story.title}
            </a>
            <span class="host"> ({props.story.domain})</span>
          </>
        ) : (
          <a href={\`/item/\${props.story.id}\`}>{props.story.title}</a>
        )}
      </span>
      <br />
      <span class="meta">
        {props.story.type !== 'job' ? (
          <>
            by <a href={\`/users/\${props.story.user}\`}>{props.story.user}</a> {props.story.time_ago}{' '}
            |{' '}
            <a href={\`/stories/\${props.story.id}\`}>
              {props.story.comments_count ? \`\${props.story.comments_count} comments\` : 'discuss'}
            </a>
          </>
        ) : (
          <a href={\`/stories/\${props.story.id}\`}>{props.story.time_ago}</a>
        )}
      </span>
      {props.story.type !== 'link' && (
        <>
          {' '}
          <span class="label">{props.story.type}</span>
        </>
      )}
    </li>
  );
});

export interface IComment {
  id: string;
  user: string;
  time_ago: string;
  content: string;
  comments: IComment[];
}

export interface IStory {
  id: string;
  points: string;
  url: string;
  title: string;
  domain: string;
  type: string;
  time_ago: string;
  user: string;
  comments_count: number;
  comments: IComment[];
}
`},{path:"/entry.server.tsx",code:`import { renderToString, type RenderOptions } from '@builder.io/qwik/server';
import { Root } from './root';

export default function (opts: RenderOptions) {
  return renderToString(<Root />, opts);
}
`},{path:"/hacker-news.css",code:`body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 15px;
  background-color: #f2f3f5;
  margin: 0;
  padding-top: 55px;
  color: #34495e;
  overflow-y: scroll;
}
a {
  color: #34495e;
  text-decoration: none;
}
.header {
  background-color: #335d92;
  position: fixed;
  z-index: 999;
  height: 55px;
  top: 0;
  left: 0;
  right: 0;
}
.header .inner {
  max-width: 800px;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 15px 5px;
}
.header a {
  color: rgba(255, 255, 255, 0.8);
  line-height: 24px;
  display: inline-block;
  vertical-align: middle;
  font-weight: 300;
  letter-spacing: 0.075em;
  margin-right: 1.8em;
}
.header a:hover {
  color: #fff;
}
.header a.active {
  color: #fff;
  font-weight: 400;
}
.header a:nth-child(6) {
  margin-right: 0;
}
.header .github {
  color: #fff;
  font-size: 0.9em;
  margin: 0;
  float: right;
}
.logo {
  width: 24px;
  margin-right: 10px;
  display: inline-block;
  vertical-align: middle;
}
.view {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}
@media (max-width: 860px) {
  .header .inner {
    padding: 15px 30px;
  }
}
@media (max-width: 600px) {
  .header .inner {
    padding: 15px;
  }
  .header a {
    margin-right: 1em;
  }
  .header .github {
    display: none;
  }
}
.news-view {
  padding-top: 45px;
}
.news-list,
.news-list-nav {
  background-color: #fff;
  border-radius: 2px;
}
.news-list-nav {
  padding: 15px 30px;
  position: fixed;
  text-align: center;
  top: 55px;
  left: 0;
  right: 0;
  z-index: 998;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
.news-list-nav .page-link {
  margin: 0 1em;
}
.news-list-nav .disabled {
  color: #aaa;
}
.news-list {
  position: absolute;
  margin: 30px 0;
  width: 100%;
}
.news-list ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
@media (max-width: 600px) {
  .news-list {
    margin: 10px 0;
  }
}
.news-item {
  background-color: #fff;
  padding: 20px 30px 20px 80px;
  border-bottom: 1px solid #eee;
  position: relative;
  line-height: 20px;
}
.news-item .score {
  color: #335d92;
  font-size: 1.1em;
  font-weight: 700;
  position: absolute;
  top: 50%;
  left: 0;
  width: 80px;
  text-align: center;
  margin-top: -10px;
}
.news-item .host,
.news-item .meta {
  font-size: 0.85em;
  color: #626262;
}
.news-item .host a,
.news-item .meta a {
  color: #626262;
  text-decoration: underline;
}
.news-item .host a:hover,
.news-item .meta a:hover {
  color: #335d92;
}
.item-view-header {
  background-color: #fff;
  padding: 1.8em 2em 1em;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
.item-view-header h1 {
  display: inline;
  font-size: 1.5em;
  margin: 0;
  margin-right: 0.5em;
}
.item-view-header .host,
.item-view-header .meta,
.item-view-header .meta a {
  color: #626262;
}
.item-view-header .meta a {
  text-decoration: underline;
}
.item-view-comments {
  background-color: #fff;
  margin-top: 10px;
  padding: 0 2em 0.5em;
}
.item-view-comments-header {
  margin: 0;
  font-size: 1.1em;
  padding: 1em 0;
  position: relative;
}
.item-view-comments-header .spinner {
  display: inline-block;
  margin: -15px 0;
}
.comment-children {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
@media (max-width: 600px) {
  .item-view-header h1 {
    font-size: 1.25em;
  }
}
.comment-children .comment-children {
  margin-left: 1.5em;
}
.comment {
  border-top: 1px solid #eee;
  position: relative;
}
.comment .by,
.comment .text,
.comment .toggle {
  font-size: 0.9em;
  margin: 1em 0;
}
.comment .by {
  color: #626262;
}
.comment .by a {
  color: #626262;
  text-decoration: underline;
}
.comment .text {
  overflow-wrap: break-word;
}
.comment .text a:hover {
  color: #335d92;
}
.comment .text pre {
  white-space: pre-wrap;
}
.comment .toggle {
  background-color: #fffbf2;
  padding: 0.3em 0.5em;
  border-radius: 4px;
}
.comment .toggle a {
  color: #626262;
  cursor: pointer;
}
.comment .toggle.open {
  padding: 0;
  background-color: transparent;
  margin-bottom: -0.5em;
}
.user-view {
  background-color: #fff;
  box-sizing: border-box;
  padding: 2em 3em;
}
.user-view h1 {
  margin: 0;
  font-size: 1.5em;
}
.user-view .meta {
  list-style-type: none;
  padding: 0;
}
.user-view .label {
  display: inline-block;
  min-width: 4em;
}
.user-view .about {
  margin: 1em 0;
}
.user-view .links a {
  text-decoration: underline;
}
`},{path:"/root.tsx",code:`import { HackerNews } from './app';

export const Root = () => {
  return (
    <>
      <head>
        <title>Hacker News</title>
      </head>
      <body>
        <HackerNews />
      </body>
    </>
  );
};
`}]}]}],p=r(i(()=>s(()=>import("./q-7e66a926.js"),["build/q-7e66a926.js","build/q-71956c83.js","build/q-a276ee39.js","build/q-0298c02c.js","build/q-e07bfb55.js","build/q-9f979261.js","build/q-4d4bde90.js","build/q-d84644e3.js"]),"s_6xZk2IFCT8M")),o=n=>{n.endsWith("/")&&(n=n.slice(0,n.length-1));for(const e of a)for(const t of e.apps)if(t.id===n)return JSON.parse(JSON.stringify(t))},l=({params:n})=>{const e=o(n.id);return{title:(e==null?void 0:e.title)||"Example"}},c=["Examples","Input","Output","Console"],d=()=>{throw"Symbol removed by Qwik Optimizer, it can not be called from current platform"},m=()=>{throw"Symbol removed by Qwik Optimizer, it can not be called from current platform"},h=Object.freeze(Object.defineProperty({__proto__:null,PANELS:c,default:p,getExampleApp:o,head:l,onGet:d,onStaticGenerate:m},Symbol.toStringTag,{value:"Module"}));export{c as P,a as e,o as g,h as i};
