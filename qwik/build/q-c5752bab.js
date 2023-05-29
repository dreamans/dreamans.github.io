const n=[{id:"welcome",title:"Start here",apps:[{id:"welcome/overview",title:"Qwik Tutorial Overview",enableHtmlOutput:!0,enableClientOutput:!0,enableSsrOutput:!1,problemInputs:[{path:"/app.tsx",code:`import { component$, useStore } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <h1>Hello World!</h1>
      I am a static component, there is no reason to ever download me to the client.
      <br />
      <button onClick$={() => alert('Hello')}>greet!</button>
      <hr />
      <Counter />
    </>
  );
});

export const Counter = component$(() => {
  const store = useStore({ count: 0 });
  return (
    <>
      I am a dynamic component. Qwik will download me only when it is time to re-render me after the
      user clicks on the <code>+1</code> button.
      <br />
      Current count: {store.count}
      <br />
      <button onClick$={() => store.count++}>+1</button>
    </>
  );
});
`}],solutionInputs:[{path:"/app.tsx",code:`import { component$, useStore } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <h1>Hello World!</h1>
      Look! I am a static component.
      <br />
      Qwik will never download me to the client. I am only rendered on the server.
      <br />
      <button onClick$={() => alert('Hello')}>greet!</button>
      <hr />
      <Counter />
    </>
  );
});

export const Counter = component$(() => {
  const store = useStore({ count: 0 });
  return (
    <>
      I am a dynamic component. Qwik will download me only when it is time to re-render me after the
      user clicks on the <code>+1</code> button.
      <br />
      Current count: {store.count}
      <br />
      <button onClick$={() => store.count++}>+1</button>
    </>
  );
});
`}]}]},{id:"introduction",title:"Simple Application",apps:[{id:"introduction/component",title:"Basic Component",enableHtmlOutput:!1,enableClientOutput:!1,enableSsrOutput:!1,problemInputs:[{path:"/app.tsx",code:`import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return <p>Hello World</p>;
});
`}],solutionInputs:[{path:"/app.tsx",code:`import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <main>
      <p>
        <label>
          GitHub organization:
          <input value="BuilderIO" />
        </label>
      </p>
      <section>
        <ul>
          <li>
            <a href="https://github.com/BuilderIO/qwik">Qwik</a>
          </li>
          <li>
            <a href="https://github.com/BuilderIO/partytown">Partytown</a>
          </li>
        </ul>
      </section>
    </main>
  );
});
`}]},{id:"introduction/store",title:"State management",enableHtmlOutput:!1,enableClientOutput:!1,enableSsrOutput:!1,problemInputs:[{path:"/app.tsx",code:`import { component$ } from '@builder.io/qwik';

export default component$(() => {
  // \`github\` is just a constant object.
  // Convert it to a Store that can be serialized to JSON on application pause.
  const github = {
    org: 'BuilderIO',
    repos: ['qwik', 'partytown'] as string[] | null,
  };

  return (
    <main>
      <p>
        <label>
          GitHub username:
          <input value={github.org} />
        </label>
      </p>
      <section>
        {github.repos ? (
          <ul>
            {github.repos.map((repo) => (
              <li>
                <a href={\`https://github.com/\${github.org}/\${repo}\`}>
                  {github.org}/{repo}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          'loading...'
        )}
      </section>
    </main>
  );
});
`}],solutionInputs:[{path:"/app.tsx",code:`import { component$, useStore } from '@builder.io/qwik';

export default component$(() => {
  const github = useStore({
    org: 'BuilderIO',
    repos: ['qwik', 'partytown'] as string[] | null,
  });

  return (
    <main>
      <p>
        <label>
          GitHub username:
          <input value={github.org} />
        </label>
      </p>
      <section>
        {github.repos ? (
          <ul>
            {github.repos.map((repo) => (
              <li>
                <a href={\`https://github.com/\${github.org}/\${repo}\`}>
                  {github.org}/{repo}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          'loading...'
        )}
      </section>
    </main>
  );
});
`}]},{id:"introduction/listeners",title:"Event listeners",enableHtmlOutput:!1,enableClientOutput:!1,enableSsrOutput:!1,problemInputs:[{path:"/app.tsx",code:`import { component$, useStore } from '@builder.io/qwik';

export default component$(() => {
  const github = useStore({
    org: 'BuilderIO',
    repos: ['qwik', 'partytown'] as string[] | null,
  });

  return (
    <main>
      <p>
        <label>
          GitHub username:
          <input value={github.org} />
        </label>
      </p>
      <section>
        {github.repos ? (
          <ul>
            {github.repos.map((repo) => (
              <li>
                <a href={\`https://github.com/\${github.org}/\${repo}\`}>
                  {github.org}/{repo}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          'loading...'
        )}
      </section>
    </main>
  );
});
`}],solutionInputs:[{path:"/app.tsx",code:`import { component$, useStore } from '@builder.io/qwik';

export default component$(() => {
  const github = useStore({
    org: 'BuilderIO',
    repos: ['qwik', 'partytown'] as string[] | null,
  });

  return (
    <main>
      <p>
        <label>
          GitHub username:
          <input
            value={github.org}
            onInput$={(ev) => (github.org = (ev.target as HTMLInputElement).value)}
          />
        </label>
      </p>
      <section>
        {github.repos ? (
          <ul>
            {github.repos.map((repo) => (
              <li>
                <a href={\`https://github.com/\${github.org}/\${repo}\`}>
                  {github.org}/{repo}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          'loading...'
        )}
      </section>
    </main>
  );
});
`}]},{id:"introduction/resource",title:"Fetching resource on state change",enableHtmlOutput:!1,enableClientOutput:!1,enableSsrOutput:!1,problemInputs:[{path:"/app.tsx",code:`// @ts-ignore: Unused import
import { component$, useStore, Resource, useResource$ } from '@builder.io/qwik';

export default component$(() => {
  const github = useStore({
    org: 'BuilderIO',
  });

  // Use useResource$() to set up how the data is fetched from the server.
  // See the example for Fetching Data in the text on the left.
  // @ts-ignore: Unused declaration
  const reposResource = useResource$<string[]>(({ track, cleanup }) => {
    // We need a way to re-run fetching data whenever the \`github.org\` changes.
    // Use \`track\` to trigger re-running of the this data fetching function.
    track(() => github.org);

    // A good practice is to use \`AbortController\` to abort the fetching of data if
    // new request comes in. We create a new \`AbortController\` and register a \`cleanup\`
    // function which is called when this function re-runs.
    const controller = new AbortController();
    cleanup(() => controller.abort());

    // Fetch the data and return the promises.
    return getRepositories(github.org, controller);
  });

  console.log('Render');
  return (
    <main>
      <p>
        <label>
          GitHub username:
          <input
            value={github.org}
            onInput$={(ev) => (github.org = (ev.target as HTMLInputElement).value)}
          />
        </label>
      </p>
      <section>
        {/* Use <Resource> to display the data from the useResource$() function. */}
        {/* To help, here's a callback function to display the data on resolved. */}
        {/* (repos) => (
            <ul>
              {repos.map((repo) => (
                <li>
                  <a href={\`https://github.com/\${github.org}/\${repo}\`}>{repo}</a>
                </li>
              ))}
            </ul>
          ) */}
      </section>
    </main>
  );
});

export async function getRepositories(
  username: string,
  controller?: AbortController
): Promise<string[]> {
  console.log('FETCH', \`https://api.github.com/users/\${username}/repos\`);
  const resp = await fetch(\`https://api.github.com/users/\${username}/repos\`, {
    signal: controller?.signal,
  });
  console.log('FETCH resolved');
  const json = await resp.json();
  return Array.isArray(json)
    ? json.map((repo: { name: string }) => repo.name)
    : Promise.reject(json);
}
`}],solutionInputs:[{path:"/app.tsx",code:`/* eslint-disable no-console */
import { component$, useStore, Resource, useResource$ } from '@builder.io/qwik';

export default component$(() => {
  const github = useStore({
    org: 'BuilderIO',
  });

  const reposResource = useResource$<string[]>(({ track, cleanup }) => {
    // We need a way to re-run fetching data whenever the \`github.org\` changes.
    // Use \`track\` to trigger re-running of this data fetching function.
    track(() => github.org);

    // A good practice is to use \`AbortController\` to abort the fetching of data if
    // new request comes in. We create a new \`AbortController\` and register a \`cleanup\`
    // function which is called when this function re-runs.
    const controller = new AbortController();
    cleanup(() => controller.abort());

    // Fetch the data and return the promises.
    return getRepositories(github.org, controller);
  });

  console.log('Render');
  return (
    <main>
      <p>
        <label>
          GitHub username:
          <input
            value={github.org}
            onInput$={(ev) => (github.org = (ev.target as HTMLInputElement).value)}
          />
        </label>
      </p>
      <section>
        <Resource
          value={reposResource}
          onPending={() => <>Loading...</>}
          onRejected={(error) => <>Error: {error.message}</>}
          onResolved={(repos) => (
            <ul>
              {repos.map((repo) => (
                <li>
                  <a href={\`https://github.com/\${github.org}/\${repo}\`}>{repo}</a>
                </li>
              ))}
            </ul>
          )}
        />
      </section>
    </main>
  );
});

export async function getRepositories(
  username: string,
  controller?: AbortController
): Promise<string[]> {
  console.log('FETCH', \`https://api.github.com/users/\${username}/repos\`);
  const resp = await fetch(\`https://api.github.com/users/\${username}/repos\`, {
    signal: controller?.signal,
  });
  console.log('FETCH resolved');
  const json = await resp.json();
  return Array.isArray(json)
    ? json.map((repo: { name: string }) => repo.name)
    : Promise.reject(json);
}
`}]}]},{id:"component",title:"Components",apps:[{id:"component/basic",title:"Basic Component",enableHtmlOutput:!1,enableClientOutput:!1,enableSsrOutput:!1,problemInputs:[{path:"/app.tsx",code:`import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return <p>__put_something_here__</p>;
});
`}],solutionInputs:[{path:"/app.tsx",code:`import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return <div>Hello World!</div>;
});
`}]},{id:"component/binding",title:"Binding Expressions",enableHtmlOutput:!1,enableClientOutput:!1,enableSsrOutput:!1,problemInputs:[{path:"/app.tsx",code:`import { component$ } from '@builder.io/qwik';

export default component$(() => {
  // @ts-ignore
  const data = {
    name: 'Qwik',
    description: DESCRIPTION,
  };

  return (
    <>
      <input value="data.name should go here" />
      <br />
      <textarea rows={10} cols={60} value="data.description should go here"></textarea>
    </>
  );
});

export const DESCRIPTION = \`
Qwik is designed for the fastest possible page load time,
by delivering pure HTML with near 0 JavaScript for your
pages to become interactive, regardless of how complex
your site or app is. It achieves this via resumability
of code.\`;
`}],solutionInputs:[{path:"/app.tsx",code:`import { component$ } from '@builder.io/qwik';

export default component$(() => {
  const data = {
    name: 'Qwik',
    description: DESCRIPTION,
  };

  return (
    <>
      <input value={data.name} />
      <br />
      <textarea rows={10} cols={60} value={data.description}></textarea>
    </>
  );
});

export const DESCRIPTION = \`
Qwik is designed for the fastest possible page load time,
by delivering pure HTML with near 0 JavaScript for your
pages to become interactive, regardless of how complex
your site or app is. It achieves this via resumability
of code.\`;
`}]},{id:"component/composition",title:"Composing Components",enableHtmlOutput:!1,enableClientOutput:!1,enableSsrOutput:!1,problemInputs:[{path:"/app.tsx",code:`import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <main>
      Insert Greeter component here. By composing components together large applications can be
      written without putting all of the code into a single file/component.
    </main>
  );
});

export const Greeter = component$(() => {
  return <div>Hello World!</div>;
});
`}],solutionInputs:[{path:"/app.tsx",code:`import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <main>
      <Greeter />
    </main>
  );
});

export const Greeter = component$(() => {
  return <div>Hello World!</div>;
});
`}]},{id:"component/lite",title:"Inline Components",enableHtmlOutput:!0,enableClientOutput:!0,enableSsrOutput:!0,problemInputs:[{path:"/app.tsx",code:`import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <main>
      <Greeter />
    </main>
  );
});

export const Greeter = component$(() => {
  return <div>Hello World!</div>;
});
`}],solutionInputs:[{path:"/app.tsx",code:`import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <main>
      <Greeter />
    </main>
  );
});

export const Greeter = () => {
  return <div>Hello World!</div>;
};
`}]}]},{id:"events",title:"Events",apps:[{id:"events/basic",title:"Listening on events",enableHtmlOutput:!0,enableClientOutput:!0,enableSsrOutput:!0,problemInputs:[{path:"/app.tsx",code:`import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return <button>Click Me</button>;
});
`}],solutionInputs:[{path:"/app.tsx",code:`import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return <button onClick$={() => alert('Hello World!')}>Click Me</button>;
});
`}]},{id:"events/document",title:"Listening on document/window",enableHtmlOutput:!1,enableClientOutput:!1,enableSsrOutput:!1,problemInputs:[{path:"/app.tsx",code:`/* eslint-disable no-console */
import { component$, useStore } from '@builder.io/qwik';

export default component$(() => {
  const store = useStore({ x: 0, y: 0 });
  return (
    <div
      onMouseMove$={(event) => {
        store.x = event.clientX;
        store.y = event.clientY;
        console.log(store);
      }}
    >
      Your mouse location is ({store.x}, {store.y}).
    </div>
  );
});
`}],solutionInputs:[{path:"/app.tsx",code:`/* eslint-disable no-console */
import { component$, useStore } from '@builder.io/qwik';

export default component$(() => {
  const store = useStore({ x: 0, y: 0 });
  return (
    <div
      document:onMouseMove$={(event) => {
        store.x = event.x;
        store.y = event.y;
      }}
    >
      Your mouse location is ({store.x}, {store.y}).
    </div>
  );
});
`}]},{id:"events/preventdefault",title:"Preventing default behavior",enableHtmlOutput:!1,enableClientOutput:!1,enableSsrOutput:!1,problemInputs:[{path:"/app.tsx",code:`import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <a href="/" onClick$={() => alert('do something else.')}>
      click me!
    </a>
  );
});
`}],solutionInputs:[{path:"/app.tsx",code:`import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <a href="/" preventdefault:click onClick$={() => alert('do something else.')}>
      click me!
    </a>
  );
});
`}]},{id:"events/synchronous",title:"Synchronous Events",enableHtmlOutput:!1,enableClientOutput:!1,enableSsrOutput:!1,problemInputs:[{path:"/app.tsx",code:`import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <a href="/" onClick$={() => window.open('http://qwik.builder.io')}>
      click me!
    </a>
  );
});
`}],solutionInputs:[{path:"/app.tsx",code:`import { component$, useVisibleTask$, useSignal } from '@builder.io/qwik';

export default component$(() => {
  const aHref = useSignal<Element>();
  useVisibleTask$(() => {
    const handler = (event: Event) => {
      event.preventDefault();
      window.open('http://qwik.builder.io');
    };
    aHref.value!.addEventListener('click', handler);
    return () => aHref.value!.removeEventListener('click', handler);
  });

  return (
    <a href="/" ref={aHref}>
      click me!
    </a>
  );
});
`}]},{id:"events/programmatic",title:"useOn() / useOnDocument() / useOnWindow() - Programmatic Listeners",enableHtmlOutput:!1,enableClientOutput:!1,enableSsrOutput:!1,problemInputs:[{path:"/app.tsx",code:`import { component$ } from '@builder.io/qwik';

export default component$(() => {
  // hint: useOn('click', $(() => ...));

  return <p>App Component. Click me.</p>;
});
`}],solutionInputs:[{path:"/app.tsx",code:`import { component$, useOn, $ } from '@builder.io/qwik';

export default component$(() => {
  useOn(
    'click',
    $(() => alert('Hello World!'))
  );

  return <p>App Component. Click me.</p>;
});
`}]}]},{id:"store",title:"Stores",apps:[{id:"store/basic",title:"Storing State",enableHtmlOutput:!0,enableClientOutput:!1,enableSsrOutput:!1,problemInputs:[{path:"/app.tsx",code:`import { component$ } from '@builder.io/qwik';

export default component$(() => {
  const counter = { count: 0 };

  return (
    <>
      <p>Count: {counter.count}</p>
      <button onClick$={() => counter.count++}>+1</button>
    </>
  );
});
`}],solutionInputs:[{path:"/app.tsx",code:`import { component$, useStore } from '@builder.io/qwik';

export default component$(() => {
  const counter = useStore({ count: 0 });

  return (
    <>
      <p>Count: {counter.count}</p>
      <button onClick$={() => counter.count++}>+1</button>
    </>
  );
});
`}]},{id:"store/recursive",title:"Recursive Store",enableHtmlOutput:!1,enableClientOutput:!1,enableSsrOutput:!1,problemInputs:[{path:"/app.tsx",code:`import { component$, useStore } from '@builder.io/qwik';

export default component$(() => {
  const store = useStore({ counter: { count: 0 }, list: [0] });

  return (
    <>
      <Display counter={store.counter} list={store.list} />
      <button onClick$={() => store.counter.count++}>+1 Count</button>
      <button onClick$={() => store.list.push(0)}>+1 List element</button>
    </>
  );
});

interface DisplayProps {
  counter: { count: number };
  list: number[];
}
export const Display = component$((props: DisplayProps) => {
  return (
    <p>
      Count: {props.counter.count}, List length: {props.list.length}
    </p>
  );
});
`}],solutionInputs:[{path:"/app.tsx",code:`import { component$, useStore } from '@builder.io/qwik';

export default component$(() => {
  const store = useStore({ counter: { count: 0 }, list: [0] }, { deep: false });

  return (
    <>
      <Display counter={store.counter} list={store.list} />
      <button onClick$={() => (store.counter = { count: ++store.counter.count })}>+1 Count</button>
      <button onClick$={() => (store.list = [...store.list, 0])}>+1 List element</button>
    </>
  );
});

interface DisplayProps {
  counter: { count: number };
  list: number[];
}
export const Display = component$((props: DisplayProps) => {
  return (
    <p>
      Count: {props.counter.count}, List length: {props.list.length}
    </p>
  );
});
`}]},{id:"store/serialization",title:"Serialization Graph",enableHtmlOutput:!1,enableClientOutput:!1,enableSsrOutput:!1,problemInputs:[{path:"/app.tsx",code:`import { component$, useStore, type QRL, $ } from '@builder.io/qwik';

interface ParentStore {
  name: string;
  children: ChildStore[];
  greetNames: QRL<(parent: ParentStore) => void>;
}
interface ChildStore {
  name: string;
  parent: ParentStore;
}
export default component$(() => {
  const parent: ParentStore = {
    name: 'Builder.io',
    children: [],
    greetNames: $((parent) => alert(parent.name)),
  };
  parent.children = [
    // insert few items here
  ];
  const parentStore = useStore<ParentStore>(parent, { deep: true });
  return (
    <>
      {parentStore.name}
      <button onClick$={async () => await parentStore.greetNames(parent)}>alert</button>
      <ul>
        {parentStore.children.map((child) => (
          <li>
            {child.name} -&lt; {child.parent.name}
          </li>
        ))}
      </ul>
    </>
  );
});
`}],solutionInputs:[{path:"/app.tsx",code:`import { component$, useStore, type QRL, $ } from '@builder.io/qwik';

interface ParentStore {
  name: string;
  children: ChildStore[];
  greetNames: QRL<(parent: ParentStore) => void>;
}
interface ChildStore {
  name: string;
  parent: ParentStore;
}
export default component$(() => {
  const parent: ParentStore = {
    name: 'Builder.io',
    children: [],
    greetNames: $((parent) => alert(parent.name)),
  };
  parent.children = [
    { name: 'Qwik', parent },
    { name: 'Partytown', parent },
  ];
  const parentStore = useStore<ParentStore>(parent, { deep: true });
  return (
    <>
      {parentStore.name}
      <button onClick$={async () => await parentStore.greetNames(parent)}>alert</button>
      <ul>
        {parentStore.children.map((child) => (
          <li>
            {child.name} -&lt; {child.parent.name}
          </li>
        ))}
      </ul>
    </>
  );
});
`}]},{id:"store/no-serialize",title:"Non-serializable Properties",enableHtmlOutput:!1,enableClientOutput:!1,enableSsrOutput:!1,problemInputs:[{path:"/app.tsx",code:`import { component$, type NoSerialize, useStore } from '@builder.io/qwik';

interface AppStore {
  time: null | string;
  cleanup: NoSerialize<() => void>;
}
export default component$(() => {
  const store = useStore<AppStore>({
    time: null,
    cleanup: undefined,
  });
  return (
    <>
      <p>Current Time: {store.time}</p>
      <button
        onClick$={() => {
          // @ts-ignore
          const id = setInterval(() => (store.time = new Date().toString()), 1000);
          // assign a cleanup function to: store.cleanup
        }}
      >
        start
      </button>
      <button
        onClick$={() => {
          store.cleanup && store.cleanup();
          store.cleanup = undefined;
        }}
      >
        stop
      </button>
    </>
  );
});
`}],solutionInputs:[{path:"/app.tsx",code:`import { component$, noSerialize, type NoSerialize, useStore } from '@builder.io/qwik';

interface AppStore {
  time: null | string;
  cleanup: NoSerialize<() => void>;
}
export default component$(() => {
  const store = useStore<AppStore>({
    time: null,
    cleanup: undefined,
  });
  return (
    <>
      <p>Current Time: {store.time}</p>
      <button
        onClick$={() => {
          const id = setInterval(() => (store.time = new Date().toString()), 1000);
          store.cleanup = noSerialize(() => clearInterval(id));
        }}
      >
        start
      </button>
      <button
        onClick$={() => {
          store.cleanup && store.cleanup();
          store.cleanup = undefined;
        }}
      >
        stop
      </button>
    </>
  );
});
`}]}]},{id:"props",title:"Component Props",apps:[{id:"props/basic",title:"Passing Data to Components",enableHtmlOutput:!1,enableClientOutput:!1,enableSsrOutput:!1,problemInputs:[{path:"/app.tsx",code:`import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <main>
      <Greeter />
    </main>
  );
});

interface GreeterProps {}
export const Greeter = component$((props: GreeterProps) => {
  return <p>Bind props here</p>;
});
`}],solutionInputs:[{path:"/app.tsx",code:`import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <main>
      <Greeter salutation="Hello" name="World" />
    </main>
  );
});

interface GreeterProps {
  salutation: string;
  name: string;
}
export const Greeter = component$((props: GreeterProps) => {
  return (
    <p>
      {props.salutation} {props.name}!
    </p>
  );
});
`}]},{id:"props/store",title:"Passing Stores",enableHtmlOutput:!1,enableClientOutput:!1,enableSsrOutput:!1,problemInputs:[{path:"/app.tsx",code:`import { component$, useStore } from '@builder.io/qwik';

interface CountStore {
  count: number;
}
export default component$(() => {
  const store = useStore<CountStore>({ count: 0 });

  return (
    <>
      <button onClick$={() => store.count++}>+1</button>
      <Display count={store.count} />
    </>
  );
});

interface DisplayProps {
  count: number;
}
export const Display = component$((props: DisplayProps) => {
  return <p>The count is: {props.count}</p>;
});
`}],solutionInputs:[{path:"/app.tsx",code:`import { component$, useStore } from '@builder.io/qwik';

interface CountStore {
  count: number;
}
export default component$(() => {
  const store = useStore<CountStore>({ count: 0 });

  return (
    <>
      <button onClick$={() => store.count++}>+1</button>
      <Display store={store} />
    </>
  );
});

interface DisplayProps {
  store: CountStore;
}
export const Display = component$((props: DisplayProps) => {
  return <p>The count is: {props.store.count}</p>;
});
`}]},{id:"props/closures",title:"Passing Closures",enableHtmlOutput:!1,enableClientOutput:!1,enableSsrOutput:!1,problemInputs:[{path:"/app.tsx",code:`import { component$, $, type PropFunction } from '@builder.io/qwik';

export default component$(() => {
  const goodbye$ = $(() => alert('Good Bye!'));
  return (
    <main>
      <MyComponent goodbye$={goodbye$} hello$={async (name) => alert('Hello ' + name)} />
    </main>
  );
});

interface MyComponentProps {
  goodbye$: PropFunction<() => void>;
  hello$: PropFunction<(name: string) => void>;
}
export const MyComponent = component$((props: MyComponentProps) => {
  return (
    <p>
      <button onClick$={props.goodbye$}>good bye</button>
      <button onClick$={async () => await props.hello$('World')}>hello</button>
    </p>
  );
});
`}],solutionInputs:[{path:"/app.tsx",code:`import { component$, $, type PropFunction } from '@builder.io/qwik';

export default component$(() => {
  const goodbye$ = $(() => alert('Good Bye!'));
  return (
    <main>
      <MyComponent goodbye$={goodbye$} hello$={async (name) => alert('Hello ' + name)} />
    </main>
  );
});

interface MyComponentProps {
  goodbye$: PropFunction<() => void>;
  hello$: PropFunction<(name: string) => void>;
}
export const MyComponent = component$((props: MyComponentProps) => {
  return (
    <p>
      <button onClick$={props.goodbye$}>good bye</button>
      <button onClick$={async () => await props.hello$('World')}>hello</button>
    </p>
  );
});
`}]}]},{id:"reactivity",title:"Reactivity",apps:[{id:"reactivity/template",title:"Implicit Template Updates",enableHtmlOutput:!1,enableClientOutput:!1,enableSsrOutput:!1,problemInputs:[{path:"/app.tsx",code:`/* eslint-disable no-console */
import { component$, useStore } from '@builder.io/qwik';

interface AppStore {
  countA: number;
  countB: number;
}
export default component$(() => {
  const store = useStore<AppStore>({
    countA: 0,
    countB: 0,
  });
  console.log('Render: <App>');
  return (
    <>
      <button onClick$={() => null}>a++</button>
      <DisplayA store={store} />
      <hr />
      <button onClick$={() => null}>b++</button>
      <DisplayB store={store} />
    </>
  );
});

export const DisplayA = component$((props: { store: AppStore }) => {
  console.log('Render: <DisplayA>');
  return <>{props.store.countA}</>;
});

export const DisplayB = component$((props: { store: AppStore }) => {
  console.log('Render: <DisplayB>');
  return <>{props.store.countB}</>;
});
`}],solutionInputs:[{path:"/app.tsx",code:`/* eslint-disable no-console */
import { component$, useStore } from '@builder.io/qwik';

interface AppStore {
  countA: number;
  countB: number;
}
export default component$(() => {
  const store = useStore({
    countA: 0,
    countB: 0,
  });
  console.log('Render: <App>');
  return (
    <>
      <button onClick$={() => store.countA++}>a++</button>
      <DisplayA store={store} />
      <hr />
      <button onClick$={() => store.countB++}>b++</button>
      <DisplayB store={store} />
    </>
  );
});

export const DisplayA = component$((props: { store: AppStore }) => {
  console.log('Render: <DisplayA>');
  return <>{props.store.countA}</>;
});

export const DisplayB = component$((props: { store: AppStore }) => {
  console.log('Render: <DisplayB>');
  return <>{props.store.countB}</>;
});
`}]},{id:"reactivity/explicit",title:"useTask$() - Explicit Reactivity",enableHtmlOutput:!1,enableClientOutput:!1,enableSsrOutput:!1,problemInputs:[{path:"/app.tsx",code:`/* eslint-disable no-console */
import { component$, useStore, useTask$ } from '@builder.io/qwik';

interface AppStore {
  count: number;
  delayCount: number;
}
export default component$(() => {
  const store = useStore<AppStore>({
    count: 0,
    delayCount: 0,
  });
  console.log('Render: <App>');
  useTask$(({ track }) => {
    // tracking \`store.count\`
    // setup a timer to copy \`count => delayCount\` after 2 seconds.
    return () => {
      // cleanup code
    };
  });
  return (
    <>
      <DisplayCount store={store} />
      <DisplayDelayCount store={store} />
      <button onClick$={() => store.count++}>+1</button>
    </>
  );
});

export const DisplayCount = component$((props: { store: AppStore }) => {
  console.log('Render: <DisplayA>');
  return <>{props.store.count}</>;
});

export const DisplayDelayCount = component$((props: { store: AppStore }) => {
  console.log('Render: <DisplayB>');
  return <>{props.store.delayCount}</>;
});
`}],solutionInputs:[{path:"/app.tsx",code:`/* eslint-disable no-console */
import { component$, useStore, useTask$ } from '@builder.io/qwik';

interface AppStore {
  count: number;
  delayCount: number;
}
export default component$(() => {
  const store = useStore({
    count: 0,
    delayCount: 0,
  });
  console.log('Render: <App>');
  useTask$(({ track }) => {
    track(() => store.count);
    const id = setTimeout(() => (store.delayCount = store.count), 2000);
    return () => clearTimeout(id);
  });
  return (
    <>
      <DisplayCount store={store} />
      <DisplayDelayCount store={store} />
      <button onClick$={() => store.count++}>+1</button>
    </>
  );
});

export const DisplayCount = component$((props: { store: AppStore }) => {
  console.log('Render: <DisplayA>');
  return <>{props.store.count}</>;
});

export const DisplayDelayCount = component$((props: { store: AppStore }) => {
  console.log('Render: <DisplayB>');
  return <>{props.store.delayCount}</>;
});
`}]},{id:"reactivity/resource",title:"useResource$() - Explicit Reactivity",enableHtmlOutput:!1,enableClientOutput:!1,enableSsrOutput:!1,problemInputs:[{path:"/app.tsx",code:`// @ts-ignore: Unused import
import { component$, useStore, Resource, useResource$ } from '@builder.io/qwik';

export default component$(() => {
  const github = useStore({
    org: 'BuilderIO',
  });

  // Use useResource$() to set up how the data is fetched from the server.
  // See the example for Fetching Data in the text on the left.
  // @ts-ignore: Unused declaration
  const reposResource = useResource$<string[]>(({ track, cleanup }) => {
    // We need a way to re-run fetching data whenever the \`github.org\` changes.
    // Use \`track\` to trigger re-running of the this data fetching function.
    track(() => github.org);

    // A good practice is to use \`AbortController\` to abort the fetching of data if
    // new request comes in. We create a new \`AbortController\` and register a \`cleanup\`
    // function which is called when this function re-runs.
    const controller = new AbortController();
    cleanup(() => controller.abort());

    // Fetch the data and return the promises.
    return getRepositories(github.org, controller);
  });

  console.log('Render');
  return (
    <main>
      <p>
        <label>
          GitHub username:
          <input
            value={github.org}
            onInput$={(ev) => (github.org = (ev.target as HTMLInputElement).value)}
          />
        </label>
      </p>
      <section>
        {/* Use <Resource> to display the data from the useResource$() function. */}
        {/* To help, here's a callback function to display the data on resolved. */}
        {/* (repos) => (
            <ul>
              {repos.map((repo) => (
                <li>
                  <a href={\`https://github.com/\${github.org}/\${repo}\`}>{repo}</a>
                </li>
              ))}
            </ul>
          ) */}
      </section>
    </main>
  );
});

export async function getRepositories(
  username: string,
  controller?: AbortController
): Promise<string[]> {
  console.log('FETCH', \`https://api.github.com/users/\${username}/repos\`);
  const resp = await fetch(\`https://api.github.com/users/\${username}/repos\`, {
    signal: controller?.signal,
  });
  console.log('FETCH resolved');
  const json = await resp.json();
  return Array.isArray(json)
    ? json.map((repo: { name: string }) => repo.name)
    : Promise.reject(json);
}
`}],solutionInputs:[{path:"/app.tsx",code:`/* eslint-disable no-console */
import { component$, useStore, Resource, useResource$ } from '@builder.io/qwik';

export default component$(() => {
  const github = useStore({
    org: 'BuilderIO',
  });

  const reposResource = useResource$<string[]>(({ track, cleanup }) => {
    // We need a way to re-run fetching data whenever the \`github.org\` changes.
    // Use \`track\` to trigger re-running of this data fetching function.
    track(() => github.org);

    // A good practice is to use \`AbortController\` to abort the fetching of data if
    // new request comes in. We create a new \`AbortController\` and register a \`cleanup\`
    // function which is called when this function re-runs.
    const controller = new AbortController();
    cleanup(() => controller.abort());

    // Fetch the data and return the promises.
    return getRepositories(github.org, controller);
  });

  console.log('Render');
  return (
    <main>
      <p>
        <label>
          GitHub username:
          <input
            value={github.org}
            onInput$={(ev) => (github.org = (ev.target as HTMLInputElement).value)}
          />
        </label>
      </p>
      <section>
        <Resource
          value={reposResource}
          onPending={() => <>Loading...</>}
          onRejected={(error) => <>Error: {error.message}</>}
          onResolved={(repos) => (
            <ul>
              {repos.map((repo) => (
                <li>
                  <a href={\`https://github.com/\${github.org}/\${repo}\`}>{repo}</a>
                </li>
              ))}
            </ul>
          )}
        />
      </section>
    </main>
  );
});

export async function getRepositories(
  username: string,
  controller?: AbortController
): Promise<string[]> {
  console.log('FETCH', \`https://api.github.com/users/\${username}/repos\`);
  const resp = await fetch(\`https://api.github.com/users/\${username}/repos\`, {
    signal: controller?.signal,
  });
  console.log('FETCH resolved');
  const json = await resp.json();
  return Array.isArray(json)
    ? json.map((repo: { name: string }) => repo.name)
    : Promise.reject(json);
}
`}]}]},{id:"context",title:"Context",apps:[{id:"context/basic",title:"Using context",enableHtmlOutput:!1,enableClientOutput:!1,enableSsrOutput:!1,problemInputs:[{path:"/app.tsx",code:`import { component$, createContextId, useContextProvider, useStore } from '@builder.io/qwik';

interface TodosStore {
  items: string[];
}
export const todosContext = createContextId<TodosStore>('Todos');
export default component$(() => {
  useContextProvider(
    todosContext,
    useStore<TodosStore>({
      items: ['Learn Qwik', 'Build Qwik app', 'Profit'],
    })
  );

  return <Items />;
});

export const Items = component$(() => {
  // replace this with context retrieval.
  const todos = { items: [] };
  return (
    <ul>
      {todos.items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
});
`}],solutionInputs:[{path:"/app.tsx",code:`import {
  component$,
  createContextId,
  useContextProvider,
  useContext,
  useStore,
} from '@builder.io/qwik';

interface TodosStore {
  items: string[];
}
export const todosContext = createContextId<TodosStore>('Todos');
export default component$(() => {
  useContextProvider(
    todosContext,
    useStore<TodosStore>({
      items: ['Learn Qwik', 'Build Qwik app', 'Profit'],
    })
  );

  return <Items />;
});

export const Items = component$(() => {
  const todos = useContext(todosContext);
  return (
    <ul>
      {todos.items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
});
`}]}]},{id:"hooks",title:"Lifecycle Hooks",apps:[{id:"hooks/use-task",title:"useTask$()",enableHtmlOutput:!1,enableClientOutput:!1,enableSsrOutput:!1,problemInputs:[{path:"/app.tsx",code:`import { component$, useTask$, useStore } from '@builder.io/qwik';

export default component$(() => {
  const store = useStore({
    value: '',
    debouncedValue: '',
  });
  useTask$(({ track }) => {
    // Use track to rerun this function when store's \`value\` property changes.

    // Setup a timer to copy \`value => debouncedValue\` after half a second.

    // Return cleanup function in case \`value\` property changes before time is up.
    return () => {
      // cleanup code
    };
  });
  return (
    <>
      <input
        value={store.value}
        onInput$={(event) => (store.value = (event.target as HTMLInputElement).value)}
      />
      <br />
      Current value: {store.value}
      <br />
      Debounced value: {store.debouncedValue}
    </>
  );
});
`}],solutionInputs:[{path:"/app.tsx",code:`import { component$, useTask$, useStore } from '@builder.io/qwik';

export default component$(() => {
  const store = useStore({
    value: '',
    debouncedValue: '',
  });
  useTask$(({ track }) => {
    // rerun this function  when \`value\` property changes.
    track(() => store.value);
    // Set up timeout for debounced value.
    const id = setTimeout(() => (store.debouncedValue = store.value), 500);
    // return cleanup function in case \`value\` property changes before time is up.
    return () => clearTimeout(id);
  });
  return (
    <>
      <input
        value={store.value}
        onInput$={(event) => (store.value = (event.target as HTMLInputElement).value)}
      />
      <br />
      Current value: {store.value}
      <br />
      Debounced value: {store.debouncedValue}
    </>
  );
});
`}]},{id:"hooks/use-signal",title:"useSignal()",enableHtmlOutput:!1,enableClientOutput:!1,enableSsrOutput:!1,problemInputs:[{path:"/app.tsx",code:`import { component$, useSignal, useVisibleTask$, useStore } from '@builder.io/qwik';

export default component$(() => {
  const store = useStore({
    width: 0,
    height: 0,
  });
  const outputRef = useSignal<Element>();
  useVisibleTask$(() => {
    if (outputRef.value) {
      const rect = outputRef.value.getBoundingClientRect();
      store.width = Math.round(rect.width);
      store.height = Math.round(rect.height);
    }
  });

  return (
    <main>
      <aside style={{ border: '1px solid red', width: '100px' }}>
        Change text value here to stretch the box.
      </aside>
      <p>
        The above red box is {store.height} pixels high and {store.width} pixels wide.
      </p>
    </main>
  );
});
`}],solutionInputs:[{path:"/app.tsx",code:`import { component$, useVisibleTask$, useSignal, useStore } from '@builder.io/qwik';

export default component$(() => {
  const store = useStore({
    width: 0,
    height: 0,
  });
  const outputRef = useSignal<Element>();
  useVisibleTask$(() => {
    if (outputRef.value) {
      const rect = outputRef.value.getBoundingClientRect();
      store.width = Math.round(rect.width);
      store.height = Math.round(rect.height);
    }
  });

  return (
    <main>
      <aside style={{ border: '1px solid red', width: '100px' }} ref={outputRef}>
        Change text value here to stretch the box.
      </aside>
      <p>
        The above red box is {store.height} pixels high and {store.width} pixels wide.
      </p>
    </main>
  );
});
`}]},{id:"hooks/use-visible-task",title:"useVisibleTask$()",enableHtmlOutput:!1,enableClientOutput:!1,enableSsrOutput:!1,problemInputs:[{path:"/app.tsx",code:`import { component$, useStore, useStyles$, useVisibleTask$ } from '@builder.io/qwik';
import styles from './clock.css?inline';

interface ClockStore {
  hour: number;
  minute: number;
  second: number;
}
export const Clock = component$(() => {
  useStyles$(styles);

  const store = useStore<ClockStore>({
    hour: 0,
    minute: 0,
    second: 0,
  });

  useVisibleTask$(() => {
    // Put code here to periodically call updateClock().
  });

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

export function updateClock(store: ClockStore) {
  const now = new Date();
  store.second = now.getSeconds() * (360 / 60);
  store.minute = now.getMinutes() * (360 / 60);
  store.hour = now.getHours() * (360 / 12);
}

export default component$(() => {
  return (
    <main>
      <p>This is an example of Lazy executing code on component when component becomes visible.</p>

      <p style={{ height: '800px' }}>
        ⬇️ <strong>Scroll down</strong> until the clock is in view.
      </p>

      <Clock />
    </main>
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
`}],solutionInputs:[{path:"/app.tsx",code:`import { component$, useStore, useStyles$, useVisibleTask$ } from '@builder.io/qwik';
import styles from './clock.css';

interface ClockStore {
  hour: number;
  minute: number;
  second: number;
}
export const Clock = component$(() => {
  useStyles$(styles);

  const store = useStore<ClockStore>({
    hour: 0,
    minute: 0,
    second: 0,
  });

  useVisibleTask$(() => {
    const intervalId = setInterval(() => updateClock(store), 1000);
    return () => clearInterval(intervalId);
  });

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

export function updateClock(store: ClockStore) {
  const now = new Date();
  store.second = now.getSeconds() * (360 / 60);
  store.minute = now.getMinutes() * (360 / 60);
  store.hour = now.getHours() * (360 / 12);
}

export default component$(() => {
  return (
    <main>
      <p>This is an example of Lazy executing code on component when component becomes visible.</p>

      <p style={{ height: '800px' }}>
        ⬇️ <strong>Scroll down</strong> until the clock is in view.
      </p>

      <Clock />
    </main>
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
`}]},{id:"hooks/use-on",title:"useOn() / useOnDocument() / useOnWindow()",enableHtmlOutput:!1,enableClientOutput:!1,enableSsrOutput:!1,problemInputs:[{path:"/app.tsx",code:`import { $, component$, useOn, useStore } from '@builder.io/qwik';

export default component$(() => {
  const store = useStore(
    {
      element: { x: 0, y: 0 },
      window: { x: 0, y: 0 },
      document: { x: 0, y: 0 },
    },
    { deep: true }
  );
  useOn(
    'mousemove',
    $((event) => {
      store.element.x = (event as MouseEvent).x;
      store.element.y = (event as MouseEvent).y;
    })
  );
  return (
    <ul>
      <li>
        Element: ({store.element.x}, {store.element.y})
      </li>
      <li>
        Document: ({store.document.x}, {store.document.y})
      </li>
      <li>
        Window: ({store.window.x}, {store.window.y})
      </li>
    </ul>
  );
});
`}],solutionInputs:[{path:"/app.tsx",code:`import { component$, useOnDocument, $, useStore, useOn, useOnWindow } from '@builder.io/qwik';

export default component$(() => {
  const store = useStore(
    {
      element: { x: 0, y: 0 },
      window: { x: 0, y: 0 },
      document: { x: 0, y: 0 },
    },
    { deep: true }
  );
  useOn(
    'mousemove',
    $((event) => {
      store.element.x = (event as MouseEvent).x;
      store.element.y = (event as MouseEvent).y;
    })
  );
  useOnDocument(
    'mousemove',
    $((event) => {
      store.document.x = (event as MouseEvent).x;
      store.document.y = (event as MouseEvent).y;
    })
  );
  useOnWindow(
    'mousemove',
    $((event) => {
      store.window.x = (event as MouseEvent).x;
      store.window.y = (event as MouseEvent).y;
    })
  );

  return (
    <ul>
      <li>
        Element: ({store.element.x}, {store.element.y})
      </li>
      <li>
        Document: ({store.document.x}, {store.document.y})
      </li>
      <li>
        Window: ({store.window.x}, {store.window.y})
      </li>
    </ul>
  );
});
`}]},{id:"hooks/use-un-mount",title:"useUnMount$()",enableHtmlOutput:!1,enableClientOutput:!1,enableSsrOutput:!1,problemInputs:[{path:"/app.tsx",code:`import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return <p>TODO</p>;
});
`}],solutionInputs:[{path:"/app.tsx",code:`import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return <p>TODO</p>;
});
`}]}]},{id:"projection",title:"Projection",apps:[{id:"projection/basic",title:"Basic Projection",enableHtmlOutput:!1,enableClientOutput:!1,enableSsrOutput:!1,problemInputs:[{path:"/app.tsx",code:`/* eslint-disable no-console */
import { component$, useStore } from '@builder.io/qwik';

export default component$(() => {
  const store = useStore({ count: 0 });
  console.log('Render: <App>');
  return (
    <Panel>
      Count: {store.count}. <button onClick$={() => store.count++}>+1</button>
    </Panel>
  );
});

export const Panel = component$(() => {
  console.log('Render: <Panel>');
  return (
    <div style={{ border: '2px solid red;', padding: '1em' }}>
      Currently the <code>&lt;Panel&gt;</code> component controls the content here. Replace this
      text with <code>&lt;Slot&gt;</code> element to see the content projected from the{' '}
      <code>&lt;App&gt;</code>.
    </div>
  );
});
`}],solutionInputs:[{path:"/app.tsx",code:`/* eslint-disable no-console */
import { component$, Slot, useStore } from '@builder.io/qwik';

export default component$(() => {
  const store = useStore({ count: 0 });
  console.log('Render: <App>');
  return (
    <Panel>
      Count: {store.count}. <button onClick$={() => store.count++}>+1</button>
    </Panel>
  );
});

export const Panel = component$(() => {
  console.log('Render: <Panel>');
  return (
    <div style={{ border: '2px solid red;', padding: '1em' }}>
      <Slot />
    </div>
  );
});
`}]},{id:"projection/slots",title:"Named Slots",enableHtmlOutput:!1,enableClientOutput:!1,enableSsrOutput:!1,problemInputs:[{path:"/app.tsx",code:`import { component$, Slot, useStore } from '@builder.io/qwik';

export default component$(() => {
  console.log('Render: <App>');
  return (
    <Collapsable>
      <div q:slot="closed">▶ (collapsed summary)</div>
      <div q:slot="open">
        ▼<div> Content that should be displayed when the collapse component is open. </div>
      </div>
    </Collapsable>
  );
});

export const Collapsable = component$(() => {
  console.log('Render: <Collapsable>');
  const store = useStore({ open: true });
  return (
    <div onClick$={() => (store.open = !store.open)}>
      {store.open ? <Slot name="open" /> : \`▶\`}
      {/* Instead, project content from the parent named "closed" here */}
    </div>
  );
});
`}],solutionInputs:[{path:"/app.tsx",code:`import { component$, Slot, useStore } from '@builder.io/qwik';

export default component$(() => {
  console.log('Render: <App>');
  return (
    <Collapsable>
      <div q:slot="closed">▶ (collapsed summary)</div>
      <div q:slot="open">
        ▼<div> Content that should be displayed when the collapse component is open. </div>
      </div>
    </Collapsable>
  );
});

export const Collapsable = component$(() => {
  console.log('Render: <Collapsable>');
  const store = useStore({ open: true });
  return (
    <div onClick$={() => (store.open = !store.open)}>
      {store.open ? <Slot name="open" /> : <Slot name="closed" />}
    </div>
  );
});
`}]},{id:"projection/fallback",title:"Fallback content",enableHtmlOutput:!1,enableClientOutput:!1,enableSsrOutput:!1,problemInputs:[{path:"/app.tsx",code:`import { component$, Slot, useStyles$ } from '@builder.io/qwik';

export const Card = component$(() => {
  useStyles$(CSS);
  return (
    <article class="card">
      <header class="title">
        <Slot name="title"></Slot>
      </header>
      <section class="body">
        <Slot name="body"></Slot>
      </section>
    </article>
  );
});

export default component$(() => {
  return (
    <>
      <Card>
        <span q:slot="title">Qwik</span>
        <span q:slot="body">Qwik is a resumable framework for building instant web apps.</span>
      </Card>
      <Card>
        <span q:slot="title">Partytown</span>
      </Card>
      <Card>
        <span q:slot="body">
          Builder.io allows you to visually build on your tech stack Empower your entire team to
          visually create and optimize high-speed experiences on your sites and apps. Provide
          whole-team autonomy with a platform that is developer approved.
        </span>
      </Card>
    </>
  );
});

export const CSS = \`
.card {
  border-radius: 5px;
  vertical-align: top;
  display: inline-block;
  border: 1px solid grey;
  width: 200px;
  margin: .5em;
}

.title {
  background-color: lightgray;
  padding: 0.5em;
  border-bottom: 1px solid black;
}

/* Add the right CSS selector here to make a fallback for slot named "title" */
q\\\\:title {
  content: 'Fallback title';
  color: red;
}

.body {
  padding: 0.5em;
}

/* Add the right CSS selector here to make a fallback for slot named "body" */
q\\\\:body {
  content: 'Fallback body';
  color: orange;
}
\`;
`}],solutionInputs:[{path:"/app.tsx",code:`import { component$, Slot, useStyles$ } from '@builder.io/qwik';

export const Card = component$(() => {
  useStyles$(CSS);
  return (
    <article class="card">
      <header class="title">
        <Slot name="title"></Slot>
      </header>
      <section class="body">
        <Slot name="body"></Slot>
      </section>
    </article>
  );
});

export default component$(() => {
  return (
    <>
      <Card>
        <span q:slot="title">Qwik</span>
        <span q:slot="body">Qwik is a resumable framework for building instant web apps.</span>
      </Card>
      <Card>
        <span q:slot="title">Partytown</span>
      </Card>
      <Card>
        <span q:slot="body">
          Builder.io allows you to visually build on your tech stack Empower your entire team to
          visually create and optimize high-speed experiences on your sites and apps. Provide
          whole-team autonomy with a platform that is developer approved.
        </span>
      </Card>
    </>
  );
});

export const CSS = \`
.card {
  border-radius: 5px;
  vertical-align: top;
  display: inline-block;
  border: 1px solid grey;
  width: 200px;
  margin: .5em;
}

.title {
  background-color: lightgray;
  padding: 0.5em;
  border-bottom: 1px solid black;
}

/* Fallback for slot named "title" */
.title:empty::before {
  content: 'Fallback title';
  color: red;
}

.body {
  padding: 0.5em;
}

/* Fallback for slot named "body" */
.body:empty::before {
  content: 'Fallback body';
  color: orange;
}
\`;
`}]}]},{id:"style",title:"Styling",apps:[{id:"style/styles",title:"useStyles() - Styles",enableHtmlOutput:!1,enableClientOutput:!1,enableSsrOutput:!1,problemInputs:[{path:"/app.tsx",code:`import { component$, useStyles$, useStore } from '@builder.io/qwik';

export default component$(() => {
  useStyles$(AppCSS);
  const store = useStore({ open: false, siblings: [0] }, { deep: true });

  return (
    <div class="parent">
      <button onClick$={() => (store.open = !store.open)}>toggle</button>
      <button onClick$={() => store.siblings.push(0)}>addSibling</button>
      {store.open ? <Child key="child" /> : null}
      {store.siblings.map(() => (
        <Sibling />
      ))}
    </div>
  );
});

export const Child = component$(() => {
  useStyles$(ChildCSS);
  return (
    <div class="child">
      <div>Child</div>
    </div>
  );
});

export const Sibling = component$(() => {
  useStyles$(SiblingCSS);

  return (
    <div class="sibling">
      <div>Sibling</div>
    </div>
  );
});

//TODO: These should be import as: import AppCSS from './app.css';
// however the playground does not yet support such imports.
export const AppCSS = \`
.parent {
  border: 1px solid black;
  padding: 1em;
}
\`;
export const ChildCSS = \`
.child {
  margin-top: 1em;
  border: 1px solid red;
  padding: 1em;
  display: block;
}
\`;
export const SiblingCSS = \`.sibling {
  margin-top: 1em;
  border: 1px solid green;
  padding: 1em;
  display: block;
}
\`;
`}],solutionInputs:[{path:"/app.tsx",code:`import { component$, useStyles$, useStore } from '@builder.io/qwik';

export default component$(() => {
  useStyles$(AppCSS);
  const store = useStore({ open: false, siblings: [0] }, { deep: true });

  return (
    <div class="parent">
      <button onClick$={() => (store.open = !store.open)}>toggle</button>
      <button onClick$={() => store.siblings.push(0)}>addSibling</button>
      {store.open ? <Child key="child" /> : null}
      {store.siblings.map(() => (
        <Sibling />
      ))}
    </div>
  );
});

export const Child = component$(() => {
  useStyles$(ChildCSS);
  return (
    <div class="child">
      <div>Child</div>
    </div>
  );
});

export const Sibling = component$(() => {
  useStyles$(SiblingCSS);

  return (
    <div class="sibling">
      <div>Sibling</div>
    </div>
  );
});

//TODO: These should be import as: import AppCSS from './app.css';
// however the playground does not yet support such imports.
export const AppCSS = \`
.parent {
  border: 1px solid black;
  padding: 1em;
}
\`;
export const ChildCSS = \`
.child {
  margin-top: 1em;
  border: 1px solid red;
  padding: 1em;
  display: block;
}
\`;
export const SiblingCSS = \`.sibling {
  margin-top: 1em;
  border: 1px solid green;
  padding: 1em;
  display: block;
}
\`;
`}]},{id:"style/scoped",title:"useStylesScoped() - Scoped styles",enableHtmlOutput:!1,enableClientOutput:!1,enableSsrOutput:!1,problemInputs:[{path:"/app.tsx",code:`import { component$, useStyles$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <ComponentA />
      <ComponentB />
    </>
  );
});

export const ComponentA = component$(() => {
  useStyles$(\`
    .component {
      background-color: red;
    }\`);
  return (
    <div class="component">
      <div>A</div>
    </div>
  );
});

export const ComponentB = component$(() => {
  useStyles$(\`
    .component {
      background-color: green;
    }\`);

  return (
    <div class="component">
      <div>B</div>
    </div>
  );
});
`}],solutionInputs:[{path:"/app.tsx",code:`import { component$, useStylesScoped$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <ComponentA />
      <ComponentB />
    </>
  );
});

export const ComponentA = component$(() => {
  useStylesScoped$(\`
    .component {
      background-color: red;
    }\`);
  return (
    <div class="component">
      <div>A</div>
    </div>
  );
});

export const ComponentB = component$(() => {
  useStylesScoped$(\`
    .component {
      background-color: green;
    }\`);

  return (
    <div class="component">
      <div>B</div>
    </div>
  );
});
`}]}]},{id:"qrl",title:"$ and QRL",apps:[{id:"qrl/optimizer",title:"Optimizer",enableHtmlOutput:!0,enableClientOutput:!0,enableSsrOutput:!0,problemInputs:[{path:"/app.tsx",code:`/* eslint-disable no-console */
import { component$, useStore } from '@builder.io/qwik';

export default component$(() => {
  const store = useStore({ count: 0 });
  return (
    <>
      Count: {store.count} <button onClick$={() => console.log('+1')}>+1</button>
    </>
  );
});
`}],solutionInputs:[{path:"/app.tsx",code:`/* eslint-disable no-console */
import { component$, useStore } from '@builder.io/qwik';

export default component$(() => {
  const store = useStore({ count: 0 });
  return (
    <>
      Count: {store.count} <button onClick$={() => store.count++}>+1</button>
    </>
  );
});
`}]},{id:"qrl/data",title:"Lazy Loading constants",enableHtmlOutput:!0,enableClientOutput:!0,enableSsrOutput:!0,problemInputs:[{path:"/app.tsx",code:`import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <button onClick$={async () => alert('Hello World!')}>click me</button>
    </>
  );
});
`}],solutionInputs:[{path:"/app.tsx",code:`import { component$, $ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <button onClick$={async () => alert(await $('Hello World!').resolve())}>click me</button>
    </>
  );
});
`}]},{id:"qrl/closures",title:"Lazy Loading closures",enableHtmlOutput:!0,enableClientOutput:!0,enableSsrOutput:!0,problemInputs:[{path:"/app.tsx",code:`import { component$, useStore, $ } from '@builder.io/qwik';

export default component$(() => {
  const store = useStore({ name: '' });
  return (
    <>
      <label>
        Enter your name followed by the enter key:{' '}
        <input
          onInput$={$(async (event: KeyboardEvent) => {
            const input = event.target as HTMLInputElement;
            store.name = input.value;
          })}
          onChange$={$(async () => {
            if (store.name) alert(store.name);
          })}
          value={store.name}
        />
      </label>
    </>
  );
});
`}],solutionInputs:[{path:"/app.tsx",code:`// @ts-ignore: Unused import
import { component$, useStore, $ } from '@builder.io/qwik';

export default component$(() => {
  const store = useStore({ name: '' });
  return (
    <>
      <label>
        Enter your name followed by the enter key:{' '}
        <input
          onInput$={(event) => {
            const input = event.target as HTMLInputElement;
            store.name = input.value;
          }}
          onChange$={() => {
            if (store.name) alert(store.name);
          }}
          value={store.name}
        />
      </label>
    </>
  );
});
`}]}]},{id:"composing",title:"Composing new APIs",apps:[{id:"composing/dollar",title:"Creating APIs with $",enableHtmlOutput:!1,enableClientOutput:!1,enableSsrOutput:!1,problemInputs:[{path:"/app.tsx",code:`import { component$, type QRL, implicit$FirstArg, useStore } from '@builder.io/qwik';

export function delayQrl<T>(fn: QRL<() => T>, delayInMs: number): Promise<T> {
  return new Promise((res) => {
    setTimeout(() => {
      res(fn());
    }, delayInMs);
  });
}

export const delay$ = implicit$FirstArg(delayQrl);

export default component$(() => {
  const store = useStore({ count: 0, delay: 0 });
  return (
    <>
      Count: {store.count} <br />
      Delay: {store.delay} <br />
      <button
        onClick$={async () => {
          store.count++;
          // This code should be delayed by 1000ms
          store.delay++;
        }}
      >
        +1
      </button>
    </>
  );
});
`}],solutionInputs:[{path:"/app.tsx",code:`import { component$, type QRL, implicit$FirstArg, useStore } from '@builder.io/qwik';

export function delayQrl<T>(fn: QRL<() => T>, delayInMs: number): Promise<T> {
  return new Promise((res) => {
    setTimeout(() => {
      res(fn());
    }, delayInMs);
  });
}

export const delay$ = implicit$FirstArg(delayQrl);

export default component$(() => {
  const store = useStore({ count: 0, delay: 0 });
  return (
    <>
      Count: {store.count} <br />
      Delay: {store.delay} <br />
      <button
        onClick$={async () => {
          store.count++;
          await delay$(() => store.delay++, 1000);
        }}
      >
        +1
      </button>
    </>
  );
});
`}]},{id:"composing/use",title:"Composing use Hooks",enableHtmlOutput:!1,enableClientOutput:!1,enableSsrOutput:!1,problemInputs:[{path:"/app.tsx",code:`import { component$, useOnDocument, useStore, $ } from '@builder.io/qwik';

export default component$(() => {
  const mousePosition = useStore({ x: 0, y: 0 });
  useOnDocument(
    'mousemove',
    $((event: Event) => {
      mousePosition.x = (event as MouseEvent).clientX;
      mousePosition.y = (event as MouseEvent).clientY;
    })
  );
  return (
    <div>
      (x: {mousePosition.x}, y: {mousePosition.y})
    </div>
  );
});
`}],solutionInputs:[{path:"/app.tsx",code:`import { component$, useOnDocument, useStore, $ } from '@builder.io/qwik';

export function useMousePosition() {
  const mousePosition = useStore({ x: 0, y: 0 });
  useOnDocument(
    'mousemove',
    $((event: Event) => {
      mousePosition.x = (event as MouseEvent).clientX;
      mousePosition.y = (event as MouseEvent).clientY;
    })
  );
  return mousePosition;
}

export default component$(() => {
  const mousePosition = useMousePosition();
  return (
    <div>
      (x: {mousePosition.x}, y: {mousePosition.y})
    </div>
  );
});
`}]}]},{id:"understanding",title:"Understanding Qwik difference",apps:[{id:"understanding/treeshaking",title:"Tree-shaking static components",problemInputs:[{path:"/app.tsx",code:`/* eslint-disable no-console */
import { component$, useStore } from '@builder.io/qwik';

interface CountStore {
  count: number;
}
export default component$(() => {
  const store = useStore<CountStore>({ count: 0 });
  console.log('Render: <App/>');
  return (
    <>
      <code>&lt;App&gt;</code>
      This component is static! After initial rendering as part of SSR, it will never rerender on
      the client. This means that it will also never load an the client. The component is
      tree-shaken on the client.
      <br />
      Click <button onClick$={() => store.count++}>+1</button> to observe what code Qwik loads as a
      result of modifying the application state.
      <Child store={store} />
    </>
  );
});

export const Child = component$((props: { store: CountStore }) => {
  console.log('Render: <Child/>');
  return (
    <>
      <code>&lt;Child&gt;</code>
      This component is dynamic because it is bound to <code>props.store.count</code>
      {props.store.count}
      <GrandChild store={props.store} />
    </>
  );
});

export const GrandChild = component$((props: { store: CountStore }) => {
  console.log('Render: <GrandChild/>');
  return (
    <>
      <code>&lt;GrandChild&gt;</code>
      This component is also dynamic because it is bound to <code>props.store.count</code>
      {props.store.count}
    </>
  );
});
`}],solutionInputs:[{path:"/app.tsx",code:`/* eslint-disable no-console */
import { component$, useStore } from '@builder.io/qwik';

interface CountStore {
  count: number;
}
export default component$(() => {
  const store = useStore<CountStore>({ count: 0 });
  console.log('Render: <App/>');
  return (
    <>
      <code>&lt;App&gt;</code>
      This component is static! After initial rendering as part of SSR, it will never rerender on
      the client. This means that it will also never load an the client. The component is
      tree-shaken on the client.
      <br />
      Click <button onClick$={() => store.count++}>+1</button> to observe what code Qwik loads as a
      result of modifying the application state.
      <Child store={store} />
    </>
  );
});

export const Child = component$((props: { store: CountStore }) => {
  console.log('Render: <Child/>');
  return (
    <>
      <code>&lt;Child&gt;</code>
      This component is dynamic because it is bound to <code>props.store.count</code>
      {/** Commented out the binding to demonstrate the effect on code downloaded to the client! **/}
      {/** props.store.count **/}
      <GrandChild store={props.store} />
    </>
  );
});

export const GrandChild = component$((props: { store: CountStore }) => {
  console.log('Render: <GroundChild/>');
  return (
    <>
      <code>&lt;GrandChild&lt;</code>
      This component is also dynamic because it is bound to <code>props.store.count</code>
      {props.store.count}
    </>
  );
});
`}]},{id:"understanding/capturing",title:"Capturing lexical scope",problemInputs:[{path:"/app.tsx",code:`/* eslint-disable no-console */
import { component$, useStore } from '@builder.io/qwik';

interface AppStore {
  counter: { count: number };
  largeData: any;
}
export default component$(() => {
  const store = useStore<AppStore>(
    {
      counter: { count: 1 },
      largeData: { data: 'PRETEND THIS IS A LARGE DATASET' },
    },
    { deep: true }
  );
  console.log('Render: <App/>');
  const counter = store.counter;
  return (
    <>
      <code>&lt;App&gt;</code>
      <code>largeData</code>: {JSON.stringify(store.largeData)}
      <br />
      Click <button onClick$={() => store.counter.count++}>+1</button>
      <Child counter={counter} />
    </>
  );
});

export const Child = component$((props: { counter: AppStore['counter'] }) => {
  console.log('Render: <Child/>');
  return (
    <>
      <code>&lt;Child&gt;</code> {props.counter.count}
    </>
  );
});
`}],solutionInputs:[{path:"/app.tsx",code:`/* eslint-disable no-console */
import { component$, useStore } from '@builder.io/qwik';

interface AppStore {
  counter: { count: number };
  largeData: any;
}
export default component$(() => {
  const store = useStore<AppStore>(
    {
      counter: { count: 1 },
      largeData: { data: 'PRETEND THIS IS A LARGE DATASET' },
    },
    { deep: true }
  );
  console.log('Render: <App/>');
  const counter = store.counter;
  return (
    <>
      <code>&lt;App&gt;</code>
      <code>largeData</code>: {JSON.stringify(store.largeData)}
      <br />
      Click <button onClick$={() => counter.count++}>+1</button>
      <Child counter={counter} />
    </>
  );
});

export const Child = component$((props: { counter: AppStore['counter'] }) => {
  console.log('Render: <Child/>');
  return (
    <>
      <code>&lt;Child&gt;</code> {props.counter.count}
    </>
  );
});
`}]}]}];export{n as t};
