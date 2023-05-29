import{b as n,s as i,_ as r}from"./q-71956c83.js";import{t as a}from"./q-2ab75100.js";const s="qwik",d=[{name:'"q:slot"',id:"componentbaseprops-_q_slot_",hierarchy:[{name:"ComponentBaseProps",id:"componentbaseprops-_q_slot_"},{name:'"q:slot"',id:"componentbaseprops-_q_slot_"}],kind:"PropertySignature",content:"```typescript\n'q:slot'?: string;\n```",mdFile:"qwik.componentbaseprops._q_slot_.md"},{name:"$",id:"_",hierarchy:[{name:"$",id:"_"}],kind:"Variable",content:"Qwik Optimizer marker function.\n\nUse `$(...)` to tell Qwik Optimizer to extract the expression in `$(...)` into a lazy-loadable resource referenced by `QRL`<!-- -->.\n\n\n```typescript\n$: <T>(expression: T) => QRL<T>\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/qrl/qrl.public.ts",mdFile:"qwik._.md"},{name:"AriaAttributes",id:"ariaattributes",hierarchy:[{name:"AriaAttributes",id:"ariaattributes"}],kind:"Interface",content:`\`\`\`typescript
export interface AriaAttributes 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  ["aria-activedescendant"?](#) |  | string \\| undefined | _(Optional)_ Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. |
|  ["aria-atomic"?](#) |  | Booleanish \\| undefined | _(Optional)_ Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. |
|  ["aria-autocomplete"?](#) |  | 'none' \\| 'inline' \\| 'list' \\| 'both' \\| undefined | _(Optional)_ Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be presented if they are made. |
|  ["aria-busy"?](#) |  | Booleanish \\| undefined | _(Optional)_ Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. |
|  ["aria-checked"?](#) |  | boolean \\| 'false' \\| 'mixed' \\| 'true' \\| undefined | _(Optional)_ Indicates the current "checked" state of checkboxes, radio buttons, and other widgets. |
|  ["aria-colcount"?](#) |  | number \\| undefined | _(Optional)_ Defines the total number of columns in a table, grid, or treegrid. |
|  ["aria-colindex"?](#) |  | number \\| undefined | _(Optional)_ Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid. |
|  ["aria-colspan"?](#) |  | number \\| undefined | _(Optional)_ Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid. |
|  ["aria-controls"?](#) |  | string \\| undefined | _(Optional)_ Identifies the element (or elements) whose contents or presence are controlled by the current element. |
|  ["aria-current"?](#) |  | boolean \\| 'false' \\| 'true' \\| 'page' \\| 'step' \\| 'location' \\| 'date' \\| 'time' \\| undefined | _(Optional)_ Indicates the element that represents the current item within a container or set of related elements. |
|  ["aria-describedby"?](#) |  | string \\| undefined | _(Optional)_ Identifies the element (or elements) that describes the object. |
|  ["aria-details"?](#) |  | string \\| undefined | _(Optional)_ Identifies the element that provides a detailed, extended description for the object. |
|  ["aria-disabled"?](#) |  | Booleanish \\| undefined | _(Optional)_ Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable. |
|  ["aria-dropeffect"?](#) |  | 'none' \\| 'copy' \\| 'execute' \\| 'link' \\| 'move' \\| 'popup' \\| undefined | _(Optional)_ Indicates what functions can be performed when a dragged object is released on the drop target. |
|  ["aria-errormessage"?](#) |  | string \\| undefined | _(Optional)_ Identifies the element that provides an error message for the object. |
|  ["aria-expanded"?](#) |  | Booleanish \\| undefined | _(Optional)_ Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. |
|  ["aria-flowto"?](#) |  | string \\| undefined | _(Optional)_ Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion, allows assistive technology to override the general default of reading in document source order. |
|  ["aria-grabbed"?](#) |  | Booleanish \\| undefined | _(Optional)_ Indicates an element's "grabbed" state in a drag-and-drop operation. |
|  ["aria-haspopup"?](#) |  | boolean \\| 'false' \\| 'true' \\| 'menu' \\| 'listbox' \\| 'tree' \\| 'grid' \\| 'dialog' \\| undefined | _(Optional)_ Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. |
|  ["aria-hidden"?](#) |  | Booleanish \\| undefined | _(Optional)_ Indicates whether the element is exposed to an accessibility API. |
|  ["aria-invalid"?](#) |  | boolean \\| 'false' \\| 'true' \\| 'grammar' \\| 'spelling' \\| undefined | _(Optional)_ Indicates the entered value does not conform to the format expected by the application. |
|  ["aria-keyshortcuts"?](#) |  | string \\| undefined | _(Optional)_ Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. |
|  ["aria-label"?](#) |  | string \\| undefined | _(Optional)_ Defines a string value that labels the current element. |
|  ["aria-labelledby"?](#) |  | string \\| undefined | _(Optional)_ Identifies the element (or elements) that labels the current element. |
|  ["aria-level"?](#) |  | number \\| undefined | _(Optional)_ Defines the hierarchical level of an element within a structure. |
|  ["aria-live"?](#) |  | 'off' \\| 'assertive' \\| 'polite' \\| undefined | _(Optional)_ Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. |
|  ["aria-modal"?](#) |  | Booleanish \\| undefined | _(Optional)_ Indicates whether an element is modal when displayed. |
|  ["aria-multiline"?](#) |  | Booleanish \\| undefined | _(Optional)_ Indicates whether a text box accepts multiple lines of input or only a single line. |
|  ["aria-multiselectable"?](#) |  | Booleanish \\| undefined | _(Optional)_ Indicates that the user may select more than one item from the current selectable descendants. |
|  ["aria-orientation"?](#) |  | 'horizontal' \\| 'vertical' \\| undefined | _(Optional)_ Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. |
|  ["aria-owns"?](#) |  | string \\| undefined | _(Optional)_ Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship between DOM elements where the DOM hierarchy cannot be used to represent the relationship. |
|  ["aria-placeholder"?](#) |  | string \\| undefined | _(Optional)_ Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value. A hint could be a sample value or a brief description of the expected format. |
|  ["aria-posinset"?](#) |  | number \\| undefined | _(Optional)_ Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. |
|  ["aria-pressed"?](#) |  | boolean \\| 'false' \\| 'mixed' \\| 'true' \\| undefined | _(Optional)_ Indicates the current "pressed" state of toggle buttons. |
|  ["aria-readonly"?](#) |  | Booleanish \\| undefined | _(Optional)_ Indicates that the element is not editable, but is otherwise operable. |
|  ["aria-relevant"?](#) |  | 'additions' \\| 'additions removals' \\| 'additions text' \\| 'all' \\| 'removals' \\| 'removals additions' \\| 'removals text' \\| 'text' \\| 'text additions' \\| 'text removals' \\| undefined | _(Optional)_ Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified. |
|  ["aria-required"?](#) |  | Booleanish \\| undefined | _(Optional)_ Indicates that user input is required on the element before a form may be submitted. |
|  ["aria-roledescription"?](#) |  | string \\| undefined | _(Optional)_ Defines a human-readable, author-localized description for the role of an element. |
|  ["aria-rowcount"?](#) |  | number \\| undefined | _(Optional)_ Defines the total number of rows in a table, grid, or treegrid. |
|  ["aria-rowindex"?](#) |  | number \\| undefined | _(Optional)_ Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid. |
|  ["aria-rowspan"?](#) |  | number \\| undefined | _(Optional)_ Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid. |
|  ["aria-selected"?](#) |  | Booleanish \\| undefined | _(Optional)_ Indicates the current "selected" state of various widgets. |
|  ["aria-setsize"?](#) |  | number \\| undefined | _(Optional)_ Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. |
|  ["aria-sort"?](#) |  | 'none' \\| 'ascending' \\| 'descending' \\| 'other' \\| undefined | _(Optional)_ Indicates if items in a table or grid are sorted in ascending or descending order. |
|  ["aria-valuemax"?](#) |  | number \\| undefined | _(Optional)_ Defines the maximum allowed value for a range widget. |
|  ["aria-valuemin"?](#) |  | number \\| undefined | _(Optional)_ Defines the minimum allowed value for a range widget. |
|  ["aria-valuenow"?](#) |  | number \\| undefined | _(Optional)_ Defines the current value for a range widget. |
|  ["aria-valuetext"?](#) |  | string \\| undefined | _(Optional)_ Defines the human readable text alternative of aria-valuenow for a range widget. |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/types/jsx-generated.ts",mdFile:"qwik.ariaattributes.md"},{name:"AriaRole",id:"ariarole",hierarchy:[{name:"AriaRole",id:"ariarole"}],kind:"TypeAlias",content:"```typescript\nexport type AriaRole = 'alert' | 'alertdialog' | 'application' | 'article' | 'banner' | 'button' | 'cell' | 'checkbox' | 'columnheader' | 'combobox' | 'complementary' | 'contentinfo' | 'definition' | 'dialog' | 'directory' | 'document' | 'feed' | 'figure' | 'form' | 'grid' | 'gridcell' | 'group' | 'heading' | 'img' | 'link' | 'list' | 'listbox' | 'listitem' | 'log' | 'main' | 'marquee' | 'math' | 'menu' | 'menubar' | 'menuitem' | 'menuitemcheckbox' | 'menuitemradio' | 'navigation' | 'none' | 'note' | 'option' | 'presentation' | 'progressbar' | 'radio' | 'radiogroup' | 'region' | 'row' | 'rowgroup' | 'rowheader' | 'scrollbar' | 'search' | 'searchbox' | 'separator' | 'slider' | 'spinbutton' | 'status' | 'switch' | 'tab' | 'table' | 'tablist' | 'tabpanel' | 'term' | 'textbox' | 'timer' | 'toolbar' | 'tooltip' | 'tree' | 'treegrid' | 'treeitem' | (string & {});\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/types/jsx-generated.ts",mdFile:"qwik.ariarole.md"},{name:"cache",id:"resourcectx-cache",hierarchy:[{name:"ResourceCtx",id:"resourcectx-cache"},{name:"cache",id:"resourcectx-cache"}],kind:"MethodSignature",content:`\`\`\`typescript
cache(policyOrMilliseconds: number | 'immutable'): void;
\`\`\`


|  Parameter | Type | Description |
|  --- | --- | --- |
|  policyOrMilliseconds | number \\| 'immutable' |  |

**Returns:**

void`,mdFile:"qwik.resourcectx.cache.md"},{name:"ClassList",id:"classlist",hierarchy:[{name:"ClassList",id:"classlist"}],kind:"TypeAlias",content:"```typescript\nexport type ClassList = BaseClassList | BaseClassList[];\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/types/jsx-qwik-attributes.ts",mdFile:"qwik.classlist.md"},{name:"cleanup",id:"renderresult-cleanup",hierarchy:[{name:"RenderResult",id:"renderresult-cleanup"},{name:"cleanup",id:"renderresult-cleanup"}],kind:"MethodSignature",content:"```typescript\ncleanup(): void;\n```\n**Returns:**\n\nvoid",mdFile:"qwik.renderresult.cleanup.md"},{name:"Component",id:"component",hierarchy:[{name:"Component",id:"component"}],kind:"TypeAlias",content:`Type representing the Qwik component.

\`Component\` is the type returned by invoking \`component$\`<!-- -->.

\`\`\`
interface MyComponentProps {
  someProp: string;
}
const MyComponent: Component<MyComponentProps> = component$((props: MyComponentProps) => {
  return <span>{props.someProp}</span>;
});
\`\`\`


\`\`\`typescript
export type Component<PROPS extends {}> = FunctionComponent<PublicProps<PROPS>>;
\`\`\`
**References:** [FunctionComponent](#functioncomponent)<!-- -->, [PublicProps](#publicprops)`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/component/component.public.ts",mdFile:"qwik.component.md"},{name:"component$",id:"component_",hierarchy:[{name:"component$",id:"component_"}],kind:"Variable",content:"Declare a Qwik component that can be used to create UI.\n\nUse `component$` to declare a Qwik component. A Qwik component is a special kind of component that allows the Qwik framework to lazy load and execute the component independently of other Qwik components as well as lazy load the component's life-cycle hooks and event handlers.\n\nSide note: You can also declare regular (standard JSX) components that will have standard synchronous behavior.\n\nQwik component is a facade that describes how the component should be used without forcing the implementation of the component to be eagerly loaded. A minimum Qwik definition consists of:\n\n\\#\\#\\# Example\n\nAn example showing how to create a counter component:\n\n```tsx\nexport interface CounterProps {\n  initialValue?: number;\n  step?: number;\n}\nexport const Counter = component$((props: CounterProps) => {\n  const state = useStore({ count: props.initialValue || 0 });\n  return (\n    <div>\n      <span>{state.count}</span>\n      <button onClick$={() => (state.count += props.step || 1)}>+</button>\n    </div>\n  );\n});\n```\n- `component$` is how a component gets declared. - `{ value?: number; step?: number }` declares the public (props) interface of the component. - `{ count: number }` declares the private (state) interface of the component.\n\nThe above can then be used like so:\n\n```tsx\nexport const OtherComponent = component$(() => {\n  return <Counter initialValue={100} />;\n});\n```\nSee also: `component`<!-- -->, `useCleanup`<!-- -->, `onResume`<!-- -->, `onPause`<!-- -->, `useOn`<!-- -->, `useOnDocument`<!-- -->, `useOnWindow`<!-- -->, `useStyles`\n\n\n```typescript\ncomponent$: <PROPS = unknown, ARG extends {} = PROPS extends {} ? PropFunctionProps<PROPS> : {}>(onMount: OnRenderFn<ARG>) => Component<PROPS extends {} ? PROPS : ARG>\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/component/component.public.ts",mdFile:"qwik.component_.md"},{name:"ComponentBaseProps",id:"componentbaseprops",hierarchy:[{name:"ComponentBaseProps",id:"componentbaseprops"}],kind:"Interface",content:`\`\`\`typescript
export interface ComponentBaseProps 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  ["q:slot"?](#componentbaseprops-_q_slot_) |  | string | _(Optional)_ |
|  [key?](#) |  | string \\| number \\| null \\| undefined | _(Optional)_ |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/types/jsx-qwik-attributes.ts",mdFile:"qwik.componentbaseprops.md"},{name:"componentQrl",id:"componentqrl",hierarchy:[{name:"componentQrl",id:"componentqrl"}],kind:"Variable",content:"Declare a Qwik component that can be used to create UI.\n\nUse `component$` to declare a Qwik component. A Qwik component is a special kind of component that allows the Qwik framework to lazy load and execute the component independently of other Qwik components as well as lazy load the component's life-cycle hooks and event handlers.\n\nSide note: You can also declare regular (standard JSX) components that will have standard synchronous behavior.\n\nQwik component is a facade that describes how the component should be used without forcing the implementation of the component to be eagerly loaded. A minimum Qwik definition consists of:\n\n\\#\\#\\# Example\n\nAn example showing how to create a counter component:\n\n```tsx\nexport interface CounterProps {\n  initialValue?: number;\n  step?: number;\n}\nexport const Counter = component$((props: CounterProps) => {\n  const state = useStore({ count: props.initialValue || 0 });\n  return (\n    <div>\n      <span>{state.count}</span>\n      <button onClick$={() => (state.count += props.step || 1)}>+</button>\n    </div>\n  );\n});\n```\n- `component$` is how a component gets declared. - `{ value?: number; step?: number }` declares the public (props) interface of the component. - `{ count: number }` declares the private (state) interface of the component.\n\nThe above can then be used like so:\n\n```tsx\nexport const OtherComponent = component$(() => {\n  return <Counter initialValue={100} />;\n});\n```\nSee also: `component`<!-- -->, `useCleanup`<!-- -->, `onResume`<!-- -->, `onPause`<!-- -->, `useOn`<!-- -->, `useOnDocument`<!-- -->, `useOnWindow`<!-- -->, `useStyles`\n\n\n```typescript\ncomponentQrl: <PROPS extends {}>(componentQrl: QRL<OnRenderFn<PROPS>>) => Component<PROPS>\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/component/component.public.ts",mdFile:"qwik.componentqrl.md"},{name:"ContextId",id:"contextid",hierarchy:[{name:"ContextId",id:"contextid"}],kind:"Interface",content:`ContextId is a typesafe ID for your context.

Context is a way to pass stores to the child components without prop-drilling.

Use \`createContextId()\` to create a \`ContextId\`<!-- -->. A \`ContextId\` is just a serializable identifier for the context. It is not the context value itself. See \`useContextProvider()\` and \`useContext()\` for the values. Qwik needs a serializable ID for the context so that the it can track context providers and consumers in a way that survives resumability.

\\#\\#\\# Example

\`\`\`tsx
// Declare the Context type.
interface TodosStore {
  items: string[];
}
// Create a Context ID (no data is saved here.)
// You will use this ID to both create and retrieve the Context.
export const TodosContext = createContextId<TodosStore>('Todos');

// Example of providing context to child components.
export const App = component$(() => {
  useContextProvider(
    TodosContext,
    useStore<TodosStore>({
      items: ['Learn Qwik', 'Build Qwik app', 'Profit'],
    })
  );

  return <Items />;
});

// Example of retrieving the context provided by a parent component.
export const Items = component$(() => {
  const todos = useContext(TodosContext);
  return (
    <ul>
      {todos.items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
});

\`\`\`


\`\`\`typescript
export interface ContextId<STATE> 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [\\_\\_brand\\_context\\_type\\_\\_](#) | <code>readonly</code> | STATE | Design-time property to store type information for the context. |
|  [id](#) | <code>readonly</code> | string | A unique ID for the context. |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/use/use-context.ts",mdFile:"qwik.contextid.md"},{name:"CorePlatform",id:"coreplatform",hierarchy:[{name:"CorePlatform",id:"coreplatform"}],kind:"Interface",content:`Low-level API for platform abstraction.

Different platforms (browser, node, service workers) may have different ways of handling things such as \`requestAnimationFrame\` and imports. To make Qwik platform-independent Qwik uses the \`CorePlatform\` API to access the platform API.

\`CorePlatform\` also is responsible for importing symbols. The import map is different on the client (browser) then on the server. For this reason, the server has a manifest that is used to map symbols to javascript chunks. The manifest is encapsulated in \`CorePlatform\`<!-- -->, for this reason, the \`CorePlatform\` can't be global as there may be multiple applications running at server concurrently.

This is a low-level API and there should not be a need for you to access this.


\`\`\`typescript
export interface CorePlatform 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [chunkForSymbol](#) |  | (symbolName: string, chunk: string \\| null) =&gt; readonly \\[symbol: string, chunk: string\\] \\| undefined | <p>Retrieve chunk name for the symbol.</p><p>When the application is running on the server the symbols may be imported from different files (as server build is typically a single javascript chunk.) For this reason, it is necessary to convert the chunks from server format to client (browser) format. This is done by looking up symbols (which are globally unique) in the manifest. (Manifest is the mapping of symbols to the client chunk names.)</p> |
|  [importSymbol](#) |  | (containerEl: Element \\| undefined, url: string \\| URL \\| undefined \\| null, symbol: string) =&gt; [ValueOrPromise](#valueorpromise)<!-- -->&lt;any&gt; | <p>Retrieve a symbol value from QRL.</p><p>Qwik needs to lazy load data and closures. For this Qwik uses QRLs that are serializable references of resources that are needed. The QRLs contain all the information necessary to retrieved the reference using <code>importSymbol</code>.</p><p>Why not use <code>import()</code>? Because <code>import()</code> is relative to the current file, and the current file is always the Qwik framework. So QRLs have additional information that allows them to serialize imports relative to application base rather than the Qwik framework file.</p> |
|  [isServer](#) |  | boolean | True of running on the server platform. |
|  [nextTick](#) |  | (fn: () =&gt; any) =&gt; Promise&lt;any&gt; | Perform operation on next tick. |
|  [raf](#) |  | (fn: () =&gt; any) =&gt; Promise&lt;any&gt; | Perform operation on next request-animation-frame. |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/platform/types.ts",mdFile:"qwik.coreplatform.md"},{name:"createContextId",id:"createcontextid",hierarchy:[{name:"createContextId",id:"createcontextid"}],kind:"Variable",content:`Create a context ID to be used in your application. The name should be written with no spaces.

Context is a way to pass stores to the child components without prop-drilling.

Use \`createContextId()\` to create a \`ContextId\`<!-- -->. A \`ContextId\` is just a serializable identifier for the context. It is not the context value itself. See \`useContextProvider()\` and \`useContext()\` for the values. Qwik needs a serializable ID for the context so that the it can track context providers and consumers in a way that survives resumability.

\\#\\#\\# Example

\`\`\`tsx
// Declare the Context type.
interface TodosStore {
  items: string[];
}
// Create a Context ID (no data is saved here.)
// You will use this ID to both create and retrieve the Context.
export const TodosContext = createContextId<TodosStore>('Todos');

// Example of providing context to child components.
export const App = component$(() => {
  useContextProvider(
    TodosContext,
    useStore<TodosStore>({
      items: ['Learn Qwik', 'Build Qwik app', 'Profit'],
    })
  );

  return <Items />;
});

// Example of retrieving the context provided by a parent component.
export const Items = component$(() => {
  const todos = useContext(TodosContext);
  return (
    <ul>
      {todos.items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
});

\`\`\`


\`\`\`typescript
createContextId: <STATE = unknown>(name: string) => ContextId<STATE>
\`\`\``,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/use/use-context.ts",mdFile:"qwik.createcontextid.md"},{name:"DOMAttributes",id:"domattributes",hierarchy:[{name:"DOMAttributes",id:"domattributes"}],kind:"Interface",content:`\`\`\`typescript
export interface DOMAttributes<T> extends QwikProps<T>, QwikEvents<T> 
\`\`\`
**Extends:** QwikProps&lt;T&gt;, QwikEvents&lt;T&gt;


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [children?](#) |  | [JSXChildren](#jsxchildren) | _(Optional)_ |
|  [key?](#) |  | string \\| number \\| null \\| undefined | _(Optional)_ |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/types/jsx-qwik-attributes.ts",mdFile:"qwik.domattributes.md"},{name:"EagernessOptions",id:"eagernessoptions",hierarchy:[{name:"EagernessOptions",id:"eagernessoptions"}],kind:"TypeAlias",content:"```typescript\nexport type EagernessOptions = 'visible' | 'load' | 'idle';\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/use/use-task.ts",mdFile:"qwik.eagernessoptions.md"},{name:"Element",id:"h-jsx-element",hierarchy:[{name:"h",id:"h-jsx-element"},{name:"JSX",id:"h-jsx-element"},{name:"Element",id:"h-jsx-element"}],kind:"Interface",content:"```typescript\ninterface Element extends QwikJSX.Element \n```\n**Extends:** [QwikJSX.Element](#)",mdFile:"qwik.h.jsx.element.md"},{name:"ElementChildrenAttribute",id:"h-jsx-elementchildrenattribute",hierarchy:[{name:"h",id:"h-jsx-elementchildrenattribute"},{name:"JSX",id:"h-jsx-elementchildrenattribute"},{name:"ElementChildrenAttribute",id:"h-jsx-elementchildrenattribute"}],kind:"Interface",content:`\`\`\`typescript
interface ElementChildrenAttribute 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [children?](#) |  | any | _(Optional)_ |`,mdFile:"qwik.h.jsx.elementchildrenattribute.md"},{name:"ErrorBoundaryStore",id:"errorboundarystore",hierarchy:[{name:"ErrorBoundaryStore",id:"errorboundarystore"}],kind:"Interface",content:`\`\`\`typescript
export interface ErrorBoundaryStore 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [error](#) |  | any \\| undefined |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/error-handling.ts",mdFile:"qwik.errorboundarystore.md"},{name:"event$",id:"event_",hierarchy:[{name:"event$",id:"event_"}],kind:"Variable",content:"```typescript\nevent$: <T>(first: T) => QRL<T>\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/qrl/qrl.public.ts",mdFile:"qwik.event_.md"},{name:"eventQrl",id:"eventqrl",hierarchy:[{name:"eventQrl",id:"eventqrl"}],kind:"Variable",content:"```typescript\neventQrl: <T>(qrl: QRL<T>) => QRL<T>\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/qrl/qrl.public.ts",mdFile:"qwik.eventqrl.md"},{name:"Fragment",id:"fragment",hierarchy:[{name:"Fragment",id:"fragment"}],kind:"Variable",content:"```typescript\nFragment: FunctionComponent<{\n    children?: any;\n    key?: string | number | null;\n}>\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/jsx-runtime.ts",mdFile:"qwik.fragment.md"},{name:"FunctionComponent",id:"functioncomponent",hierarchy:[{name:"FunctionComponent",id:"functioncomponent"}],kind:"Interface",content:"```typescript\nexport interface FunctionComponent<P = Record<string, any>> \n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/types/jsx-node.ts",mdFile:"qwik.functioncomponent.md"},{name:"getCaptured",id:"qrl-getcaptured",hierarchy:[{name:"QRL",id:"qrl-getcaptured"},{name:"getCaptured",id:"qrl-getcaptured"}],kind:"MethodSignature",content:"```typescript\ngetCaptured(): any[] | null;\n```\n**Returns:**\n\nany\\[\\] \\| null",mdFile:"qwik.qrl.getcaptured.md"},{name:"getHash",id:"qrl-gethash",hierarchy:[{name:"QRL",id:"qrl-gethash"},{name:"getHash",id:"qrl-gethash"}],kind:"MethodSignature",content:"```typescript\ngetHash(): string;\n```\n**Returns:**\n\nstring",mdFile:"qwik.qrl.gethash.md"},{name:"getModifierState",id:"qwikkeyboardevent-getmodifierstate",hierarchy:[{name:"QwikKeyboardEvent",id:"qwikkeyboardevent-getmodifierstate"},{name:"getModifierState",id:"qwikkeyboardevent-getmodifierstate"}],kind:"MethodSignature",content:`See \\[DOM Level 3 Events spec\\](https://www.w3.org/TR/uievents-key/\\#keys-modifier). for a list of valid (case-sensitive) arguments to this method.


\`\`\`typescript
getModifierState(key: string): boolean;
\`\`\`


|  Parameter | Type | Description |
|  --- | --- | --- |
|  key | string |  |

**Returns:**

boolean`,mdFile:"qwik.qwikkeyboardevent.getmodifierstate.md"},{name:"getPlatform",id:"getplatform",hierarchy:[{name:"getPlatform",id:"getplatform"}],kind:"Variable",content:"Retrieve the `CorePlatform`<!-- -->.\n\nThe `CorePlatform` is also responsible for retrieving the Manifest, that contains mappings from symbols to javascript import chunks. For this reason, `CorePlatform` can't be global, but is specific to the application currently running. On server it is possible that many different applications are running in a single server instance, and for this reason the `CorePlatform` is associated with the application document.\n\n\n```typescript\ngetPlatform: () => CorePlatform\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/platform/platform.ts",mdFile:"qwik.getplatform.md"},{name:"getSymbol",id:"qrl-getsymbol",hierarchy:[{name:"QRL",id:"qrl-getsymbol"},{name:"getSymbol",id:"qrl-getsymbol"}],kind:"MethodSignature",content:"```typescript\ngetSymbol(): string;\n```\n**Returns:**\n\nstring",mdFile:"qwik.qrl.getsymbol.md"},{name:"h",id:"h",hierarchy:[{name:"h",id:"h"}],kind:"Function",content:`\`\`\`typescript
export declare namespace h 
\`\`\`


|  Function | Description |
|  --- | --- |
|  [h(type)](#) |  |
|  [h(type, data)](#) |  |
|  [h(type, text)](#) |  |
|  [h(type, children)](#) |  |
|  [h(type, data, text)](#) |  |
|  [h(type, data, children)](#) |  |
|  [h(sel, data, children)](#) |  |


|  Namespace | Description |
|  --- | --- |
|  [JSX](#h-jsx) |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/factory.ts",mdFile:"qwik.h.md"},{name:"h",id:"h",hierarchy:[{name:"h",id:"h"}],kind:"Namespace",content:`\`\`\`typescript
export declare namespace h 
\`\`\`


|  Function | Description |
|  --- | --- |
|  [h(type)](#) |  |
|  [h(type, data)](#) |  |
|  [h(type, text)](#) |  |
|  [h(type, children)](#) |  |
|  [h(type, data, text)](#) |  |
|  [h(type, data, children)](#) |  |
|  [h(sel, data, children)](#) |  |


|  Namespace | Description |
|  --- | --- |
|  [JSX](#h-jsx) |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/factory.ts",mdFile:"qwik.h.md"},{name:"HTMLAttributes",id:"htmlattributes",hierarchy:[{name:"HTMLAttributes",id:"htmlattributes"}],kind:"Interface",content:`\`\`\`typescript
export interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> 
\`\`\`
**Extends:** [AriaAttributes](#ariaattributes)<!-- -->, [DOMAttributes](#domattributes)<!-- -->&lt;T&gt;


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [about?](#) |  | string \\| undefined | _(Optional)_ |
|  [accessKey?](#) |  | string \\| undefined | _(Optional)_ |
|  [autoCapitalize?](#) |  | string \\| undefined | _(Optional)_ |
|  [autoCorrect?](#) |  | string \\| undefined | _(Optional)_ |
|  [autoSave?](#) |  | string \\| undefined | _(Optional)_ |
|  [color?](#) |  | string \\| undefined | _(Optional)_ |
|  [contentEditable?](#) |  | 'true' \\| 'false' \\| 'inherit' \\| undefined | _(Optional)_ |
|  [contextMenu?](#) |  | string \\| undefined | _(Optional)_ |
|  [datatype?](#) |  | string \\| undefined | _(Optional)_ |
|  [dir?](#) |  | 'ltr' \\| 'rtl' \\| 'auto' \\| undefined | _(Optional)_ |
|  [draggable?](#) |  | boolean \\| undefined | _(Optional)_ |
|  [hidden?](#) |  | boolean \\| 'hidden' \\| 'until-found' \\| undefined | _(Optional)_ |
|  [id?](#) |  | string \\| undefined | _(Optional)_ |
|  [inlist?](#) |  | any | _(Optional)_ |
|  [inputMode?](#) |  | 'none' \\| 'text' \\| 'tel' \\| 'url' \\| 'email' \\| 'numeric' \\| 'decimal' \\| 'search' \\| undefined | _(Optional)_ Hints at the type of data that might be entered by the user while editing the element or its contents |
|  [is?](#) |  | string \\| undefined | _(Optional)_ Specify that a standard HTML element should behave like a defined custom built-in element |
|  [itemID?](#) |  | string \\| undefined | _(Optional)_ |
|  [itemProp?](#) |  | string \\| undefined | _(Optional)_ |
|  [itemRef?](#) |  | string \\| undefined | _(Optional)_ |
|  [itemScope?](#) |  | boolean \\| undefined | _(Optional)_ |
|  [itemType?](#) |  | string \\| undefined | _(Optional)_ |
|  [lang?](#) |  | string \\| undefined | _(Optional)_ |
|  [placeholder?](#) |  | string \\| undefined | _(Optional)_ |
|  [prefix?](#) |  | string \\| undefined | _(Optional)_ |
|  [property?](#) |  | string \\| undefined | _(Optional)_ |
|  [radioGroup?](#) |  | string \\| undefined | _(Optional)_ |
|  [resource?](#) |  | string \\| undefined | _(Optional)_ |
|  [results?](#) |  | number \\| undefined | _(Optional)_ |
|  [role?](#) |  | [AriaRole](#ariarole) \\| undefined | _(Optional)_ |
|  [security?](#) |  | string \\| undefined | _(Optional)_ |
|  [slot?](#) |  | string \\| undefined | _(Optional)_ |
|  [spellcheck?](#) |  | boolean \\| undefined | _(Optional)_ |
|  [style?](#) |  | Record&lt;string, string \\| number \\| undefined&gt; \\| string \\| undefined | _(Optional)_ |
|  [tabIndex?](#) |  | number \\| undefined | _(Optional)_ |
|  [title?](#) |  | string \\| undefined | _(Optional)_ |
|  [translate?](#) |  | 'yes' \\| 'no' \\| undefined | _(Optional)_ |
|  [typeof?](#) |  | string \\| undefined | _(Optional)_ |
|  [unselectable?](#) |  | 'on' \\| 'off' \\| undefined | _(Optional)_ |
|  [vocab?](#) |  | string \\| undefined | _(Optional)_ |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/types/jsx-generated.ts",mdFile:"qwik.htmlattributes.md"},{name:"HTMLFragment",id:"htmlfragment",hierarchy:[{name:"HTMLFragment",id:"htmlfragment"}],kind:"Variable",content:"```typescript\nHTMLFragment: FunctionComponent<{\n    dangerouslySetInnerHTML: string;\n}>\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/jsx-runtime.ts",mdFile:"qwik.htmlfragment.md"},{name:"implicit$FirstArg",id:"implicit_firstarg",hierarchy:[{name:"implicit$FirstArg",id:"implicit_firstarg"}],kind:"Variable",content:`Create a \`____$(...)\` convenience method from \`___(...)\`<!-- -->.

It is very common for functions to take a lazy-loadable resource as a first argument. For this reason, the Qwik Optimizer automatically extracts the first argument from any function which ends in \`$\`<!-- -->.

This means that \`foo$(arg0)\` and \`foo($(arg0))\` are equivalent with respect to Qwik Optimizer. The former is just a shorthand for the latter.

For example, these function calls are equivalent:

- \`component$(() => {...})\` is same as \`component($(() => {...}))\`

\`\`\`tsx
export function myApi(callback: QRL<() => void>): void {
  // ...
}

export const myApi$ = implicit$FirstArg(myApi);
// type of myApi$: (callback: () => void): void

// can be used as:
myApi$(() => console.log('callback'));

// will be transpiled to:
// FILE: <current file>
myApi(qrl('./chunk-abc.js', 'callback'));

// FILE: chunk-abc.js
export const callback = () => console.log('callback');
\`\`\`


\`\`\`typescript
implicit$FirstArg: <FIRST, REST extends any[], RET>(fn: (first: QRL<FIRST>, ...rest: REST) => RET) => (first: FIRST, ...rest: REST) => RET
\`\`\``,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/util/implicit_dollar.ts",mdFile:"qwik.implicit_firstarg.md"},{name:"IntrinsicAttributes",id:"h-jsx-intrinsicattributes",hierarchy:[{name:"h",id:"h-jsx-intrinsicattributes"},{name:"JSX",id:"h-jsx-intrinsicattributes"},{name:"IntrinsicAttributes",id:"h-jsx-intrinsicattributes"}],kind:"Interface",content:"```typescript\ninterface IntrinsicAttributes extends QwikJSX.IntrinsicAttributes \n```\n**Extends:** [QwikJSX.IntrinsicAttributes](#)",mdFile:"qwik.h.jsx.intrinsicattributes.md"},{name:"IntrinsicElements",id:"h-jsx-intrinsicelements",hierarchy:[{name:"h",id:"h-jsx-intrinsicelements"},{name:"JSX",id:"h-jsx-intrinsicelements"},{name:"IntrinsicElements",id:"h-jsx-intrinsicelements"}],kind:"Interface",content:"```typescript\ninterface IntrinsicElements extends QwikJSX.IntrinsicElements \n```\n**Extends:** [QwikJSX.IntrinsicElements](#)",mdFile:"qwik.h.jsx.intrinsicelements.md"},{name:"jsx",id:"jsx",hierarchy:[{name:"jsx",id:"jsx"}],kind:"Variable",content:"```typescript\njsx: <T extends string | FunctionComponent<any>>(type: T, props: T extends FunctionComponent<infer PROPS> ? PROPS : Record<string, any>, key?: string | number | null) => JSXNode<T>\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/jsx-runtime.ts",mdFile:"qwik.jsx.md"},{name:"JSX",id:"h-jsx",hierarchy:[{name:"h",id:"h-jsx"},{name:"JSX",id:"h-jsx"}],kind:"Namespace",content:`\`\`\`typescript
namespace JSX 
\`\`\`


|  Interface | Description |
|  --- | --- |
|  [Element](#h-jsx-element) |  |
|  [ElementChildrenAttribute](#h-jsx-elementchildrenattribute) |  |
|  [IntrinsicAttributes](#h-jsx-intrinsicattributes) |  |
|  [IntrinsicElements](#h-jsx-intrinsicelements) |  |`,mdFile:"qwik.h.jsx.md"},{name:"JSXChildren",id:"jsxchildren",hierarchy:[{name:"JSXChildren",id:"jsxchildren"}],kind:"TypeAlias",content:"```typescript\nexport type JSXChildren = string | number | boolean | null | undefined | Function | RegExp | JSXChildren[] | Promise<JSXChildren> | Signal<JSXChildren> | JSXNode;\n```\n**References:** [JSXChildren](#jsxchildren)<!-- -->, [Signal](#signal)<!-- -->, [JSXNode](#jsxnode)",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/types/jsx-qwik-attributes.ts",mdFile:"qwik.jsxchildren.md"},{name:"jsxDEV",id:"jsxdev",hierarchy:[{name:"jsxDEV",id:"jsxdev"}],kind:"Variable",content:"```typescript\njsxDEV: <T extends string | FunctionComponent<any>>(type: T, props: T extends FunctionComponent<infer PROPS> ? PROPS : Record<string, any>, key: string | number | null | undefined, _isStatic: boolean, opts: JsxDevOpts, _ctx: any) => JSXNode<T>\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/jsx-runtime.ts",mdFile:"qwik.jsxdev.md"},{name:"JSXNode",id:"jsxnode",hierarchy:[{name:"JSXNode",id:"jsxnode"}],kind:"Interface",content:`\`\`\`typescript
export interface JSXNode<T = string | FunctionComponent> 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [children](#) |  | any \\| null |  |
|  [dev?](#) |  | DevJSX | _(Optional)_ |
|  [flags](#) |  | number |  |
|  [immutableProps](#) |  | Record&lt;string, any&gt; \\| null |  |
|  [key](#) |  | string \\| null |  |
|  [props](#) |  | T extends [FunctionComponent](#functioncomponent)<!-- -->&lt;infer B&gt; ? B : Record&lt;string, any&gt; |  |
|  [type](#) |  | T |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/types/jsx-node.ts",mdFile:"qwik.jsxnode.md"},{name:"JSXTagName",id:"jsxtagname",hierarchy:[{name:"JSXTagName",id:"jsxtagname"}],kind:"TypeAlias",content:"```typescript\nexport type JSXTagName = keyof HTMLElementTagNameMap | Omit<string, keyof HTMLElementTagNameMap>;\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/types/jsx-qwik-attributes.ts",mdFile:"qwik.jsxtagname.md"},{name:"NativeAnimationEvent",id:"nativeanimationevent",hierarchy:[{name:"NativeAnimationEvent",id:"nativeanimationevent"}],kind:"TypeAlias",content:"```typescript\nexport type NativeAnimationEvent = AnimationEvent;\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/types/jsx-qwik-events.ts",mdFile:"qwik.nativeanimationevent.md"},{name:"NativeClipboardEvent",id:"nativeclipboardevent",hierarchy:[{name:"NativeClipboardEvent",id:"nativeclipboardevent"}],kind:"TypeAlias",content:"```typescript\nexport type NativeClipboardEvent = ClipboardEvent;\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/types/jsx-qwik-events.ts",mdFile:"qwik.nativeclipboardevent.md"},{name:"NativeCompositionEvent",id:"nativecompositionevent",hierarchy:[{name:"NativeCompositionEvent",id:"nativecompositionevent"}],kind:"TypeAlias",content:"```typescript\nexport type NativeCompositionEvent = CompositionEvent;\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/types/jsx-qwik-events.ts",mdFile:"qwik.nativecompositionevent.md"},{name:"NativeDragEvent",id:"nativedragevent",hierarchy:[{name:"NativeDragEvent",id:"nativedragevent"}],kind:"TypeAlias",content:"```typescript\nexport type NativeDragEvent = DragEvent;\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/types/jsx-qwik-events.ts",mdFile:"qwik.nativedragevent.md"},{name:"NativeFocusEvent",id:"nativefocusevent",hierarchy:[{name:"NativeFocusEvent",id:"nativefocusevent"}],kind:"TypeAlias",content:"```typescript\nexport type NativeFocusEvent = FocusEvent;\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/types/jsx-qwik-events.ts",mdFile:"qwik.nativefocusevent.md"},{name:"NativeKeyboardEvent",id:"nativekeyboardevent",hierarchy:[{name:"NativeKeyboardEvent",id:"nativekeyboardevent"}],kind:"TypeAlias",content:"```typescript\nexport type NativeKeyboardEvent = KeyboardEvent;\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/types/jsx-qwik-events.ts",mdFile:"qwik.nativekeyboardevent.md"},{name:"NativeMouseEvent",id:"nativemouseevent",hierarchy:[{name:"NativeMouseEvent",id:"nativemouseevent"}],kind:"TypeAlias",content:"```typescript\nexport type NativeMouseEvent = MouseEvent;\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/types/jsx-qwik-events.ts",mdFile:"qwik.nativemouseevent.md"},{name:"NativePointerEvent",id:"nativepointerevent",hierarchy:[{name:"NativePointerEvent",id:"nativepointerevent"}],kind:"TypeAlias",content:"```typescript\nexport type NativePointerEvent = PointerEvent;\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/types/jsx-qwik-events.ts",mdFile:"qwik.nativepointerevent.md"},{name:"NativeTouchEvent",id:"nativetouchevent",hierarchy:[{name:"NativeTouchEvent",id:"nativetouchevent"}],kind:"TypeAlias",content:"```typescript\nexport type NativeTouchEvent = TouchEvent;\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/types/jsx-qwik-events.ts",mdFile:"qwik.nativetouchevent.md"},{name:"NativeTransitionEvent",id:"nativetransitionevent",hierarchy:[{name:"NativeTransitionEvent",id:"nativetransitionevent"}],kind:"TypeAlias",content:"```typescript\nexport type NativeTransitionEvent = TransitionEvent;\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/types/jsx-qwik-events.ts",mdFile:"qwik.nativetransitionevent.md"},{name:"NativeUIEvent",id:"nativeuievent",hierarchy:[{name:"NativeUIEvent",id:"nativeuievent"}],kind:"TypeAlias",content:"```typescript\nexport type NativeUIEvent = UIEvent;\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/types/jsx-qwik-events.ts",mdFile:"qwik.nativeuievent.md"},{name:"NativeWheelEvent",id:"nativewheelevent",hierarchy:[{name:"NativeWheelEvent",id:"nativewheelevent"}],kind:"TypeAlias",content:"```typescript\nexport type NativeWheelEvent = WheelEvent;\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/types/jsx-qwik-events.ts",mdFile:"qwik.nativewheelevent.md"},{name:"noSerialize",id:"noserialize",hierarchy:[{name:"noSerialize",id:"noserialize"}],kind:"Variable",content:`Marks a property on a store as non-serializable.

At times it is necessary to store values on a store that are non-serializable. Normally this is a runtime error as Store wants to eagerly report when a non-serializable property is assigned to it.

You can use \`noSerialize()\` to mark a value as non-serializable. The value is persisted in the Store but does not survive serialization. The implication is that when your application is resumed, the value of this object will be \`undefined\`<!-- -->. You will be responsible for recovering from this.

See: \\[noSerialize Tutorial\\](http://qwik.builder.io/tutorial/store/no-serialize)


\`\`\`typescript
noSerialize: <T extends object | undefined>(input: T) => NoSerialize<T>
\`\`\``,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/state/common.ts",mdFile:"qwik.noserialize.md"},{name:"NoSerialize",id:"noserialize",hierarchy:[{name:"NoSerialize",id:"noserialize"}],kind:"TypeAlias",content:`Marks a property on a store as non-serializable.

At times it is necessary to store values on a store that are non-serializable. Normally this is a runtime error as Store wants to eagerly report when a non-serializable property is assigned to it.

You can use \`noSerialize()\` to mark a value as non-serializable. The value is persisted in the Store but does not survive serialization. The implication is that when your application is resumed, the value of this object will be \`undefined\`<!-- -->. You will be responsible for recovering from this.

See: \\[noSerialize Tutorial\\](http://qwik.builder.io/tutorial/store/no-serialize)


\`\`\`typescript
noSerialize: <T extends object | undefined>(input: T) => NoSerialize<T>
\`\`\``,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/state/common.ts",mdFile:"qwik.noserialize.md"},{name:"OnRenderFn",id:"onrenderfn",hierarchy:[{name:"OnRenderFn",id:"onrenderfn"}],kind:"TypeAlias",content:"```typescript\nexport type OnRenderFn<PROPS extends {}> = (props: PROPS) => JSXNode<any> | null;\n```\n**References:** [JSXNode](#jsxnode)",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/component/component.public.ts",mdFile:"qwik.onrenderfn.md"},{name:"OnVisibleTaskOptions",id:"onvisibletaskoptions",hierarchy:[{name:"OnVisibleTaskOptions",id:"onvisibletaskoptions"}],kind:"Interface",content:`\`\`\`typescript
export interface OnVisibleTaskOptions 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [strategy?](#) |  | [VisibleTaskStrategy](#visibletaskstrategy) | <p>_(Optional)_ The strategy to use to determine when the "VisibleTask" should first execute.</p><p>- <code>intersection-observer</code>: the task will first execute when the element is visible in the viewport, under the hood it uses the IntersectionObserver API. - <code>document-ready</code>: the task will first execute when the document is ready, under the hood it uses the document <code>load</code> event. - <code>document-idle</code>: the task will first execute when the document is idle, under the hood it uses the requestIdleCallback API.</p> |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/use/use-task.ts",mdFile:"qwik.onvisibletaskoptions.md"},{name:"PropFnInterface",id:"propfninterface",hierarchy:[{name:"PropFnInterface",id:"propfninterface"}],kind:"Interface",content:"```typescript\nexport interface PropFnInterface<ARGS extends any[], RET> \n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/qrl/qrl.public.ts",mdFile:"qwik.propfninterface.md"},{name:"PropFunction",id:"propfunction",hierarchy:[{name:"PropFunction",id:"propfunction"}],kind:"TypeAlias",content:"```typescript\nexport type PropFunction<T extends Function = (...args: any[]) => any> = T extends (...args: infer ARGS) => infer RET ? PropFnInterface<ARGS, Awaited<RET>> : never;\n```\n**References:** [PropFnInterface](#propfninterface)",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/qrl/qrl.public.ts",mdFile:"qwik.propfunction.md"},{name:"PropFunctionProps",id:"propfunctionprops",hierarchy:[{name:"PropFunctionProps",id:"propfunctionprops"}],kind:"TypeAlias",content:"```typescript\nexport type PropFunctionProps<PROPS extends {}> = {\n    [K in keyof PROPS]: NonNullable<PROPS[K]> extends (...args: infer ARGS) => infer RET ? PropFnInterface<ARGS, Awaited<RET>> : PROPS[K];\n};\n```\n**References:** [PropFnInterface](#propfninterface)",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/component/component.public.ts",mdFile:"qwik.propfunctionprops.md"},{name:"PropsOf",id:"propsof",hierarchy:[{name:"PropsOf",id:"propsof"}],kind:"TypeAlias",content:"Infers `Props` from the component.\n\n```typescript\nexport const OtherComponent = component$(() => {\n  return $(() => <Counter value={100} />);\n});\n```\n\n\n```typescript\nexport type PropsOf<COMP extends Component<any>> = COMP extends Component<infer PROPS> ? NonNullable<PROPS> : never;\n```\n**References:** [Component](#component)",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/component/component.public.ts",mdFile:"qwik.propsof.md"},{name:"PublicProps",id:"publicprops",hierarchy:[{name:"PublicProps",id:"publicprops"}],kind:"TypeAlias",content:"Extends the defined component PROPS, adding the default ones (children and q:slot)..\n\n\n```typescript\nexport type PublicProps<PROPS extends {}> = TransformProps<PROPS> & ComponentBaseProps & ComponentChildren<PROPS>;\n```\n**References:** [ComponentBaseProps](#componentbaseprops)",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/component/component.public.ts",mdFile:"qwik.publicprops.md"},{name:"qrl",id:"qrl",hierarchy:[{name:"qrl",id:"qrl"}],kind:"Variable",content:`Used by Qwik Optimizer to point to lazy-loaded resources.

This function should be used by the Qwik Optimizer only. The function should not be directly referred to in the source code of the application.


\`\`\`typescript
qrl: <T = any>(chunkOrFn: string | (() => Promise<any>), symbol: string, lexicalScopeCapture?: any[], stackOffset?: number) => QRL<T>
\`\`\``,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/qrl/qrl.ts",mdFile:"qwik.qrl.md"},{name:"QRL",id:"qrl",hierarchy:[{name:"QRL",id:"qrl"}],kind:"Interface",content:`Used by Qwik Optimizer to point to lazy-loaded resources.

This function should be used by the Qwik Optimizer only. The function should not be directly referred to in the source code of the application.


\`\`\`typescript
qrl: <T = any>(chunkOrFn: string | (() => Promise<any>), symbol: string, lexicalScopeCapture?: any[], stackOffset?: number) => QRL<T>
\`\`\``,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/qrl/qrl.public.ts",mdFile:"qwik.qrl.md"},{name:"QwikAnimationEvent",id:"qwikanimationevent",hierarchy:[{name:"QwikAnimationEvent",id:"qwikanimationevent"}],kind:"Interface",content:`\`\`\`typescript
export interface QwikAnimationEvent<T = Element> extends SyntheticEvent<T, NativeAnimationEvent> 
\`\`\`
**Extends:** SyntheticEvent&lt;T, [NativeAnimationEvent](#nativeanimationevent)<!-- -->&gt;


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [animationName](#) |  | string |  |
|  [elapsedTime](#) |  | number |  |
|  [pseudoElement](#) |  | string |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/types/jsx-qwik-events.ts",mdFile:"qwik.qwikanimationevent.md"},{name:"QwikChangeEvent",id:"qwikchangeevent",hierarchy:[{name:"QwikChangeEvent",id:"qwikchangeevent"}],kind:"Interface",content:`\`\`\`typescript
export interface QwikChangeEvent<T = Element> extends SyntheticEvent<T> 
\`\`\`
**Extends:** SyntheticEvent&lt;T&gt;


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [target](#) |  | EventTarget &amp; T |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/types/jsx-qwik-events.ts",mdFile:"qwik.qwikchangeevent.md"},{name:"QwikClipboardEvent",id:"qwikclipboardevent",hierarchy:[{name:"QwikClipboardEvent",id:"qwikclipboardevent"}],kind:"Interface",content:`\`\`\`typescript
export interface QwikClipboardEvent<T = Element> extends SyntheticEvent<T, NativeClipboardEvent> 
\`\`\`
**Extends:** SyntheticEvent&lt;T, [NativeClipboardEvent](#nativeclipboardevent)<!-- -->&gt;


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [clipboardData](#) |  | DataTransfer |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/types/jsx-qwik-events.ts",mdFile:"qwik.qwikclipboardevent.md"},{name:"QwikCompositionEvent",id:"qwikcompositionevent",hierarchy:[{name:"QwikCompositionEvent",id:"qwikcompositionevent"}],kind:"Interface",content:`\`\`\`typescript
export interface QwikCompositionEvent<T = Element> extends SyntheticEvent<T, NativeCompositionEvent> 
\`\`\`
**Extends:** SyntheticEvent&lt;T, [NativeCompositionEvent](#nativecompositionevent)<!-- -->&gt;


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [data](#) |  | string |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/types/jsx-qwik-events.ts",mdFile:"qwik.qwikcompositionevent.md"},{name:"QwikDOMAttributes",id:"qwikdomattributes",hierarchy:[{name:"QwikDOMAttributes",id:"qwikdomattributes"}],kind:"Interface",content:"```typescript\nexport interface QwikDOMAttributes extends DOMAttributes<any> \n```\n**Extends:** [DOMAttributes](#domattributes)<!-- -->&lt;any&gt;",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/types/jsx-qwik.ts",mdFile:"qwik.qwikdomattributes.md"},{name:"QwikDragEvent",id:"qwikdragevent",hierarchy:[{name:"QwikDragEvent",id:"qwikdragevent"}],kind:"Interface",content:`\`\`\`typescript
export interface QwikDragEvent<T = Element> extends QwikMouseEvent<T, NativeDragEvent> 
\`\`\`
**Extends:** [QwikMouseEvent](#qwikmouseevent)<!-- -->&lt;T, [NativeDragEvent](#nativedragevent)<!-- -->&gt;


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [dataTransfer](#) |  | DataTransfer |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/types/jsx-qwik-events.ts",mdFile:"qwik.qwikdragevent.md"},{name:"QwikFocusEvent",id:"qwikfocusevent",hierarchy:[{name:"QwikFocusEvent",id:"qwikfocusevent"}],kind:"Interface",content:`\`\`\`typescript
export interface QwikFocusEvent<T = Element> extends SyntheticEvent<T, NativeFocusEvent> 
\`\`\`
**Extends:** SyntheticEvent&lt;T, [NativeFocusEvent](#nativefocusevent)<!-- -->&gt;


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [relatedTarget](#) |  | EventTarget \\| null |  |
|  [target](#) |  | EventTarget &amp; T |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/types/jsx-qwik-events.ts",mdFile:"qwik.qwikfocusevent.md"},{name:"QwikIntrinsicElements",id:"qwikintrinsicelements",hierarchy:[{name:"QwikIntrinsicElements",id:"qwikintrinsicelements"}],kind:"Interface",content:`\`\`\`typescript
export interface QwikIntrinsicElements extends IntrinsicHTMLElements 
\`\`\`
**Extends:** IntrinsicHTMLElements


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [script](#) |  | QwikScriptHTMLAttributes&lt;HTMLScriptElement&gt; |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/types/jsx-qwik-elements.ts",mdFile:"qwik.qwikintrinsicelements.md"},{name:"QwikInvalidEvent",id:"qwikinvalidevent",hierarchy:[{name:"QwikInvalidEvent",id:"qwikinvalidevent"}],kind:"Interface",content:`\`\`\`typescript
export interface QwikInvalidEvent<T = Element> extends SyntheticEvent<T> 
\`\`\`
**Extends:** SyntheticEvent&lt;T&gt;


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [target](#) |  | EventTarget &amp; T |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/types/jsx-qwik-events.ts",mdFile:"qwik.qwikinvalidevent.md"},{name:"QwikJSX",id:"qwikjsx",hierarchy:[{name:"QwikJSX",id:"qwikjsx"}],kind:"Namespace",content:`\`\`\`typescript
export declare namespace QwikJSX 
\`\`\`


|  Interface | Description |
|  --- | --- |
|  [Element](#) |  |
|  [ElementChildrenAttribute](#) |  |
|  [IntrinsicAttributes](#) |  |
|  [IntrinsicElements](#) |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/types/jsx-qwik.ts",mdFile:"qwik.qwikjsx.md"},{name:"QwikKeyboardEvent",id:"qwikkeyboardevent",hierarchy:[{name:"QwikKeyboardEvent",id:"qwikkeyboardevent"}],kind:"Interface",content:`\`\`\`typescript
export interface QwikKeyboardEvent<T = Element> extends SyntheticEvent<T, NativeKeyboardEvent> 
\`\`\`
**Extends:** SyntheticEvent&lt;T, [NativeKeyboardEvent](#nativekeyboardevent)<!-- -->&gt;


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [altKey](#) |  | boolean |  |
|  [charCode](#) |  | number |  |
|  [ctrlKey](#) |  | boolean |  |
|  [key](#) |  | string | See the \\[DOM Level 3 Events spec\\](https://www.w3.org/TR/uievents-key/\\#named-key-attribute-values). for possible values |
|  [keyCode](#) |  | number |  |
|  [locale](#) |  | string |  |
|  [location](#) |  | number |  |
|  [metaKey](#) |  | boolean |  |
|  [repeat](#) |  | boolean |  |
|  [shiftKey](#) |  | boolean |  |
|  [which](#) |  | number |  |


|  Method | Description |
|  --- | --- |
|  [getModifierState(key)](#qwikkeyboardevent-getmodifierstate) | See \\[DOM Level 3 Events spec\\](https://www.w3.org/TR/uievents-key/\\#keys-modifier). for a list of valid (case-sensitive) arguments to this method. |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/types/jsx-qwik-events.ts",mdFile:"qwik.qwikkeyboardevent.md"},{name:"QwikMouseEvent",id:"qwikmouseevent",hierarchy:[{name:"QwikMouseEvent",id:"qwikmouseevent"}],kind:"Interface",content:`\`\`\`typescript
export interface QwikMouseEvent<T = Element, E = NativeMouseEvent> extends SyntheticEvent<T, E> 
\`\`\`
**Extends:** SyntheticEvent&lt;T, E&gt;


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [altKey](#) |  | boolean |  |
|  [button](#) |  | number |  |
|  [buttons](#) |  | number |  |
|  [clientX](#) |  | number |  |
|  [clientY](#) |  | number |  |
|  [ctrlKey](#) |  | boolean |  |
|  [metaKey](#) |  | boolean |  |
|  [movementX](#) |  | number |  |
|  [movementY](#) |  | number |  |
|  [pageX](#) |  | number |  |
|  [pageY](#) |  | number |  |
|  [relatedTarget](#) |  | EventTarget \\| null |  |
|  [screenX](#) |  | number |  |
|  [screenY](#) |  | number |  |
|  [shiftKey](#) |  | boolean |  |
|  [x](#) |  | number |  |
|  [y](#) |  | number |  |


|  Method | Description |
|  --- | --- |
|  [getModifierState(key)](#) | See \\[DOM Level 3 Events spec\\](https://www.w3.org/TR/uievents-key/\\#keys-modifier). for a list of valid (case-sensitive) arguments to this method. |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/types/jsx-qwik-events.ts",mdFile:"qwik.qwikmouseevent.md"},{name:"QwikPointerEvent",id:"qwikpointerevent",hierarchy:[{name:"QwikPointerEvent",id:"qwikpointerevent"}],kind:"Interface",content:`\`\`\`typescript
export interface QwikPointerEvent<T = Element> extends QwikMouseEvent<T, NativePointerEvent> 
\`\`\`
**Extends:** [QwikMouseEvent](#qwikmouseevent)<!-- -->&lt;T, [NativePointerEvent](#nativepointerevent)<!-- -->&gt;


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [height](#) |  | number |  |
|  [isPrimary](#) |  | boolean |  |
|  [pointerId](#) |  | number |  |
|  [pointerType](#) |  | 'mouse' \\| 'pen' \\| 'touch' |  |
|  [pressure](#) |  | number |  |
|  [tiltX](#) |  | number |  |
|  [tiltY](#) |  | number |  |
|  [width](#) |  | number |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/types/jsx-qwik-events.ts",mdFile:"qwik.qwikpointerevent.md"},{name:"QwikSubmitEvent",id:"qwiksubmitevent",hierarchy:[{name:"QwikSubmitEvent",id:"qwiksubmitevent"}],kind:"Interface",content:"```typescript\nexport interface QwikSubmitEvent<T = Element> extends SyntheticEvent<T> \n```\n**Extends:** SyntheticEvent&lt;T&gt;",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/types/jsx-qwik-events.ts",mdFile:"qwik.qwiksubmitevent.md"},{name:"QwikTouchEvent",id:"qwiktouchevent",hierarchy:[{name:"QwikTouchEvent",id:"qwiktouchevent"}],kind:"Interface",content:`\`\`\`typescript
export interface QwikTouchEvent<T = Element> extends SyntheticEvent<T, NativeTouchEvent> 
\`\`\`
**Extends:** SyntheticEvent&lt;T, [NativeTouchEvent](#nativetouchevent)<!-- -->&gt;


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [altKey](#) |  | boolean |  |
|  [changedTouches](#) |  | TouchList |  |
|  [ctrlKey](#) |  | boolean |  |
|  [metaKey](#) |  | boolean |  |
|  [shiftKey](#) |  | boolean |  |
|  [targetTouches](#) |  | TouchList |  |
|  [touches](#) |  | TouchList |  |


|  Method | Description |
|  --- | --- |
|  [getModifierState(key)](#) | See \\[DOM Level 3 Events spec\\](https://www.w3.org/TR/uievents-key/\\#keys-modifier). for a list of valid (case-sensitive) arguments to this method. |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/types/jsx-qwik-events.ts",mdFile:"qwik.qwiktouchevent.md"},{name:"QwikTransitionEvent",id:"qwiktransitionevent",hierarchy:[{name:"QwikTransitionEvent",id:"qwiktransitionevent"}],kind:"Interface",content:`\`\`\`typescript
export interface QwikTransitionEvent<T = Element> extends SyntheticEvent<T, NativeTransitionEvent> 
\`\`\`
**Extends:** SyntheticEvent&lt;T, [NativeTransitionEvent](#nativetransitionevent)<!-- -->&gt;


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [elapsedTime](#) |  | number |  |
|  [propertyName](#) |  | string |  |
|  [pseudoElement](#) |  | string |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/types/jsx-qwik-events.ts",mdFile:"qwik.qwiktransitionevent.md"},{name:"QwikUIEvent",id:"qwikuievent",hierarchy:[{name:"QwikUIEvent",id:"qwikuievent"}],kind:"Interface",content:`\`\`\`typescript
export interface QwikUIEvent<T = Element> extends SyntheticEvent<T, NativeUIEvent> 
\`\`\`
**Extends:** SyntheticEvent&lt;T, [NativeUIEvent](#nativeuievent)<!-- -->&gt;


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [detail](#) |  | number |  |
|  [view](#) |  | AbstractView |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/types/jsx-qwik-events.ts",mdFile:"qwik.qwikuievent.md"},{name:"QwikWheelEvent",id:"qwikwheelevent",hierarchy:[{name:"QwikWheelEvent",id:"qwikwheelevent"}],kind:"Interface",content:`\`\`\`typescript
export interface QwikWheelEvent<T = Element> extends QwikMouseEvent<T, NativeWheelEvent> 
\`\`\`
**Extends:** [QwikMouseEvent](#qwikmouseevent)<!-- -->&lt;T, [NativeWheelEvent](#nativewheelevent)<!-- -->&gt;


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [deltaMode](#) |  | number |  |
|  [deltaX](#) |  | number |  |
|  [deltaY](#) |  | number |  |
|  [deltaZ](#) |  | number |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/types/jsx-qwik-events.ts",mdFile:"qwik.qwikwheelevent.md"},{name:"render",id:"render",hierarchy:[{name:"render",id:"render"}],kind:"Variable",content:`Render JSX.

Use this method to render JSX. This function does reconciling which means it always tries to reuse what is already in the DOM (rather then destroy and recreate content.) It returns a cleanup function you could use for cleaning up subscriptions.


\`\`\`typescript
render: (parent: Element | Document, jsxNode: JSXNode | FunctionComponent<any>, opts?: RenderOptions) => Promise<RenderResult>
\`\`\``,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/dom/render.public.ts",mdFile:"qwik.render.md"},{name:"RenderOnce",id:"renderonce",hierarchy:[{name:"RenderOnce",id:"renderonce"}],kind:"Variable",content:"```typescript\nRenderOnce: FunctionComponent<{\n    children?: any;\n    key?: string | number | null | undefined;\n}>\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/jsx-runtime.ts",mdFile:"qwik.renderonce.md"},{name:"RenderOptions",id:"renderoptions",hierarchy:[{name:"RenderOptions",id:"renderoptions"}],kind:"Interface",content:`\`\`\`typescript
export interface RenderOptions 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [serverData?](#) |  | Record&lt;string, any&gt; | _(Optional)_ |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/dom/render.public.ts",mdFile:"qwik.renderoptions.md"},{name:"RenderResult",id:"renderresult",hierarchy:[{name:"RenderResult",id:"renderresult"}],kind:"Interface",content:`\`\`\`typescript
export interface RenderResult 
\`\`\`


|  Method | Description |
|  --- | --- |
|  [cleanup()](#renderresult-cleanup) |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/dom/render.public.ts",mdFile:"qwik.renderresult.md"},{name:"RenderSSROptions",id:"renderssroptions",hierarchy:[{name:"RenderSSROptions",id:"renderssroptions"}],kind:"Interface",content:`\`\`\`typescript
export interface RenderSSROptions 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [base?](#) |  | string | _(Optional)_ |
|  [beforeClose?](#) |  | (contexts: QContext\\[\\], containerState: ContainerState, containsDynamic: boolean, textNodes: Map&lt;string, string&gt;) =&gt; Promise&lt;[JSXNode](#jsxnode)<!-- -->&gt; | _(Optional)_ |
|  [beforeContent?](#) |  | [JSXNode](#jsxnode)<!-- -->&lt;string&gt;\\[\\] | _(Optional)_ |
|  [containerAttributes](#) |  | Record&lt;string, string&gt; |  |
|  [containerTagName](#) |  | string |  |
|  [serverData?](#) |  | Record&lt;string, any&gt; | _(Optional)_ |
|  [stream](#) |  | [StreamWriter](#streamwriter) |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/ssr/render-ssr.ts",mdFile:"qwik.renderssroptions.md"},{name:"resolve",id:"qrl-resolve",hierarchy:[{name:"QRL",id:"qrl-resolve"},{name:"resolve",id:"qrl-resolve"}],kind:"MethodSignature",content:`Resolve the QRL and return the actual value.


\`\`\`typescript
resolve(): Promise<TYPE>;
\`\`\`
**Returns:**

Promise&lt;TYPE&gt;`,mdFile:"qwik.qrl.resolve.md"},{name:"Resource",id:"resource",hierarchy:[{name:"Resource",id:"resource"}],kind:"Variable",content:`This method works like an async memoized function that runs whenever some tracked value changes and returns some data.

\`useResource\` however returns immediate a \`ResourceReturn\` object that contains the data and a state that indicates if the data is available or not.

The status can be one of the following:

- 'pending' - the data is not yet available. - 'resolved' - the data is available. - 'rejected' - the data is not available due to an error or timeout.

\\#\\#\\# Example

Example showing how \`useResource\` to perform a fetch to request the weather, whenever the input city name changes.

\`\`\`tsx
const Cmp = component$(() => {
  const store = useStore({
    city: '',
  });

  const weatherResource = useResource$<any>(async ({ track, cleanup }) => {
    const cityName = track(() => store.city);
    const abortController = new AbortController();
    cleanup(() => abortController.abort('cleanup'));
    const res = await fetch(\`http://weatherdata.com?city=\${cityName}\`, {
      signal: abortController.signal,
    });
    const data = res.json();
    return data;
  });

  return (
    <div>
      <input name="city" onInput$={(ev: any) => (store.city = ev.target.value)} />
      <Resource
        value={weatherResource}
        onResolved={(weather) => {
          return <div>Temperature: {weather.temp}</div>;
        }}
      />
    </div>
  );
});
\`\`\`


\`\`\`typescript
Resource: <T>(props: ResourceProps<T>) => JSXNode
\`\`\``,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/use/use-resource.ts",mdFile:"qwik.resource.md"},{name:"ResourceCtx",id:"resourcectx",hierarchy:[{name:"ResourceCtx",id:"resourcectx"}],kind:"Interface",content:`\`\`\`typescript
export interface ResourceCtx<T> 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [previous](#) | <code>readonly</code> | T \\| undefined |  |
|  [track](#) | <code>readonly</code> | [Tracker](#tracker) |  |


|  Method | Description |
|  --- | --- |
|  [cache(policyOrMilliseconds)](#resourcectx-cache) |  |
|  [cleanup(callback)](#) |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/use/use-task.ts",mdFile:"qwik.resourcectx.md"},{name:"ResourceFn",id:"resourcefn",hierarchy:[{name:"ResourceFn",id:"resourcefn"}],kind:"TypeAlias",content:"```typescript\nexport type ResourceFn<T> = (ctx: ResourceCtx<any>) => ValueOrPromise<T>;\n```\n**References:** [ResourceCtx](#resourcectx)<!-- -->, [ValueOrPromise](#valueorpromise)",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/use/use-task.ts",mdFile:"qwik.resourcefn.md"},{name:"ResourceOptions",id:"resourceoptions",hierarchy:[{name:"ResourceOptions",id:"resourceoptions"}],kind:"Interface",content:`Options to pass to \`useResource$()\`


\`\`\`typescript
export interface ResourceOptions 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [timeout?](#) |  | number | _(Optional)_ Timeout in milliseconds. If the resource takes more than the specified millisecond, it will timeout. Resulting on a rejected resource. |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/use/use-resource.ts",mdFile:"qwik.resourceoptions.md"},{name:"ResourcePending",id:"resourcepending",hierarchy:[{name:"ResourcePending",id:"resourcepending"}],kind:"Interface",content:`\`\`\`typescript
export interface ResourcePending<T> 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [loading](#) | <code>readonly</code> | boolean |  |
|  [value](#) | <code>readonly</code> | Promise&lt;T&gt; |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/use/use-task.ts",mdFile:"qwik.resourcepending.md"},{name:"ResourceProps",id:"resourceprops",hierarchy:[{name:"ResourceProps",id:"resourceprops"}],kind:"Interface",content:`\`\`\`typescript
export interface ResourceProps<T> 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [onPending?](#) |  | () =&gt; [JSXNode](#jsxnode) | _(Optional)_ |
|  [onRejected?](#) |  | (reason: any) =&gt; [JSXNode](#jsxnode) | _(Optional)_ |
|  [onResolved](#) |  | (value: T) =&gt; [JSXNode](#jsxnode) |  |
|  [value](#) | <code>readonly</code> | [ResourceReturn](#resourcereturn)<!-- -->&lt;T&gt; \\| [Signal](#signal)<!-- -->&lt;Promise&lt;T&gt; \\| T&gt; \\| Promise&lt;T&gt; |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/use/use-resource.ts",mdFile:"qwik.resourceprops.md"},{name:"ResourceRejected",id:"resourcerejected",hierarchy:[{name:"ResourceRejected",id:"resourcerejected"}],kind:"Interface",content:`\`\`\`typescript
export interface ResourceRejected<T> 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [loading](#) | <code>readonly</code> | boolean |  |
|  [value](#) | <code>readonly</code> | Promise&lt;T&gt; |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/use/use-task.ts",mdFile:"qwik.resourcerejected.md"},{name:"ResourceResolved",id:"resourceresolved",hierarchy:[{name:"ResourceResolved",id:"resourceresolved"}],kind:"Interface",content:`\`\`\`typescript
export interface ResourceResolved<T> 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [loading](#) | <code>readonly</code> | boolean |  |
|  [value](#) | <code>readonly</code> | Promise&lt;T&gt; |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/use/use-task.ts",mdFile:"qwik.resourceresolved.md"},{name:"ResourceReturn",id:"resourcereturn",hierarchy:[{name:"ResourceReturn",id:"resourcereturn"}],kind:"TypeAlias",content:"```typescript\nexport type ResourceReturn<T> = ResourcePending<T> | ResourceResolved<T> | ResourceRejected<T>;\n```\n**References:** [ResourcePending](#resourcepending)<!-- -->, [ResourceResolved](#resourceresolved)<!-- -->, [ResourceRejected](#resourcerejected)",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/use/use-task.ts",mdFile:"qwik.resourcereturn.md"},{name:"setPlatform",id:"setplatform",hierarchy:[{name:"setPlatform",id:"setplatform"}],kind:"Variable",content:"Sets the `CorePlatform`<!-- -->.\n\nThis is useful to override the platform in tests to change the behavior of, `requestAnimationFrame`<!-- -->, and import resolution.\n\n\n```typescript\nsetPlatform: (plt: CorePlatform) => CorePlatform\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/platform/platform.ts",mdFile:"qwik.setplatform.md"},{name:"Signal",id:"signal",hierarchy:[{name:"Signal",id:"signal"}],kind:"Interface",content:`\`\`\`typescript
export interface Signal<T = any> 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [value](#) |  | T |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/state/signal.ts",mdFile:"qwik.signal.md"},{name:"SkipRender",id:"skiprender",hierarchy:[{name:"SkipRender",id:"skiprender"}],kind:"Variable",content:"```typescript\nSkipRender: JSXNode\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/utils.public.ts",mdFile:"qwik.skiprender.md"},{name:"Slot",id:"slot",hierarchy:[{name:"Slot",id:"slot"}],kind:"Variable",content:"Allows to project the children of the current component. <Slot/> can only be used within the context of a component defined with `component$`<!-- -->.\n\n\n```typescript\nSlot: FunctionComponent<{\n    name?: string;\n}>\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/slot.public.ts",mdFile:"qwik.slot.md"},{name:"SnapshotListener",id:"snapshotlistener",hierarchy:[{name:"SnapshotListener",id:"snapshotlistener"}],kind:"Interface",content:`\`\`\`typescript
export interface SnapshotListener 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [el](#) |  | Element |  |
|  [key](#) |  | string |  |
|  [qrl](#) |  | [QRL](#qrl)<!-- -->&lt;any&gt; |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/container/container.ts",mdFile:"qwik.snapshotlistener.md"},{name:"SnapshotMeta",id:"snapshotmeta",hierarchy:[{name:"SnapshotMeta",id:"snapshotmeta"}],kind:"TypeAlias",content:"```typescript\nexport type SnapshotMeta = Record<string, SnapshotMetaValue>;\n```\n**References:** [SnapshotMetaValue](#snapshotmetavalue)",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/container/container.ts",mdFile:"qwik.snapshotmeta.md"},{name:"SnapshotMetaValue",id:"snapshotmetavalue",hierarchy:[{name:"SnapshotMetaValue",id:"snapshotmetavalue"}],kind:"Interface",content:`\`\`\`typescript
export interface SnapshotMetaValue 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [c?](#) |  | string | _(Optional)_ |
|  [h?](#) |  | string | _(Optional)_ |
|  [s?](#) |  | string | _(Optional)_ |
|  [w?](#) |  | string | _(Optional)_ |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/container/container.ts",mdFile:"qwik.snapshotmetavalue.md"},{name:"SnapshotResult",id:"snapshotresult",hierarchy:[{name:"SnapshotResult",id:"snapshotresult"}],kind:"Interface",content:`\`\`\`typescript
export interface SnapshotResult 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [funcs](#) |  | string\\[\\] |  |
|  [mode](#) |  | 'render' \\| 'listeners' \\| 'static' |  |
|  [objs](#) |  | any\\[\\] |  |
|  [qrls](#) |  | [QRL](#qrl)<!-- -->\\[\\] |  |
|  [resources](#) |  | ResourceReturnInternal&lt;any&gt;\\[\\] |  |
|  [state](#) |  | [SnapshotState](#snapshotstate) |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/container/container.ts",mdFile:"qwik.snapshotresult.md"},{name:"SnapshotState",id:"snapshotstate",hierarchy:[{name:"SnapshotState",id:"snapshotstate"}],kind:"Interface",content:`\`\`\`typescript
export interface SnapshotState 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [ctx](#) |  | [SnapshotMeta](#snapshotmeta) |  |
|  [objs](#) |  | any\\[\\] |  |
|  [refs](#) |  | Record&lt;string, string&gt; |  |
|  [subs](#) |  | any\\[\\] |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/container/container.ts",mdFile:"qwik.snapshotstate.md"},{name:"SSRComment",id:"ssrcomment",hierarchy:[{name:"SSRComment",id:"ssrcomment"}],kind:"Variable",content:"```typescript\nSSRComment: FunctionComponent<{\n    data: string;\n}>\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/utils.public.ts",mdFile:"qwik.ssrcomment.md"},{name:"SSRHint",id:"ssrhint",hierarchy:[{name:"SSRHint",id:"ssrhint"}],kind:"Variable",content:`> Warning: This API is now obsolete.
> 
> - It has no effect
> 


\`\`\`typescript
SSRHint: FunctionComponent<SSRHintProps>
\`\`\``,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/utils.public.ts",mdFile:"qwik.ssrhint.md"},{name:"SSRHintProps",id:"ssrhintprops",hierarchy:[{name:"SSRHintProps",id:"ssrhintprops"}],kind:"Interface",content:`\`\`\`typescript
export interface SSRHintProps 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [dynamic?](#) |  | boolean | _(Optional)_ |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/utils.public.ts",mdFile:"qwik.ssrhintprops.md"},{name:"SSRRaw",id:"ssrraw",hierarchy:[{name:"SSRRaw",id:"ssrraw"}],kind:"Variable",content:"```typescript\nSSRRaw: FunctionComponent<{\n    data: string;\n}>\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/utils.public.ts",mdFile:"qwik.ssrraw.md"},{name:"SSRStream",id:"ssrstream",hierarchy:[{name:"SSRStream",id:"ssrstream"}],kind:"Variable",content:"```typescript\nSSRStream: FunctionComponent<SSRStreamProps>\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/utils.public.ts",mdFile:"qwik.ssrstream.md"},{name:"SSRStreamBlock",id:"ssrstreamblock",hierarchy:[{name:"SSRStreamBlock",id:"ssrstreamblock"}],kind:"Variable",content:"```typescript\nSSRStreamBlock: FunctionComponent<{\n    children?: any;\n}>\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/utils.public.ts",mdFile:"qwik.ssrstreamblock.md"},{name:"SSRStreamProps",id:"ssrstreamprops",hierarchy:[{name:"SSRStreamProps",id:"ssrstreamprops"}],kind:"Interface",content:`\`\`\`typescript
export interface SSRStreamProps 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [children](#) |  | AsyncGenerator&lt;[JSXChildren](#jsxchildren)<!-- -->, void, any&gt; \\| ((stream: [StreamWriter](#streamwriter)<!-- -->) =&gt; Promise&lt;void&gt;) \\| (() =&gt; AsyncGenerator&lt;[JSXChildren](#jsxchildren)<!-- -->, void, any&gt;) |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/jsx/utils.public.ts",mdFile:"qwik.ssrstreamprops.md"},{name:"StreamWriter",id:"streamwriter",hierarchy:[{name:"StreamWriter",id:"streamwriter"}],kind:"TypeAlias",content:"```typescript\nexport type StreamWriter = {\n    write: (chunk: string) => void;\n};\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/render/ssr/render-ssr.ts",mdFile:"qwik.streamwriter.md"},{name:"TaskCtx",id:"taskctx",hierarchy:[{name:"TaskCtx",id:"taskctx"}],kind:"Interface",content:`\`\`\`typescript
export interface TaskCtx 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [track](#) |  | [Tracker](#tracker) |  |


|  Method | Description |
|  --- | --- |
|  [cleanup(callback)](#) |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/use/use-task.ts",mdFile:"qwik.taskctx.md"},{name:"TaskFn",id:"taskfn",hierarchy:[{name:"TaskFn",id:"taskfn"}],kind:"TypeAlias",content:"```typescript\nexport type TaskFn = (ctx: TaskCtx) => ValueOrPromise<void | (() => void)>;\n```\n**References:** [TaskCtx](#taskctx)<!-- -->, [ValueOrPromise](#valueorpromise)",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/use/use-task.ts",mdFile:"qwik.taskfn.md"},{name:"Tracker",id:"tracker",hierarchy:[{name:"Tracker",id:"tracker"}],kind:"Interface",content:"Used to signal to Qwik which state should be watched for changes.\n\nThe `Tracker` is passed into the `taskFn` of `useTask`<!-- -->. It is intended to be used to wrap state objects in a read proxy which signals to Qwik which properties should be watched for changes. A change to any of the properties causes the `taskFn` to rerun.\n\n\\#\\#\\# Example\n\nThe `obs` passed into the `taskFn` is used to mark `state.count` as a property of interest. Any changes to the `state.count` property will cause the `taskFn` to rerun.\n\n```tsx\nconst Cmp = component$(() => {\n  const store = useStore({ count: 0, doubleCount: 0 });\n  useTask$(({ track }) => {\n    const count = track(() => store.count);\n    store.doubleCount = 2 * count;\n  });\n  return (\n    <div>\n      <span>\n        {store.count} / {store.doubleCount}\n      </span>\n      <button onClick$={() => store.count++}>+</button>\n    </div>\n  );\n});\n```\n\n\n```typescript\nexport interface Tracker \n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/use/use-task.ts",mdFile:"qwik.tracker.md"},{name:"untrack",id:"untrack",hierarchy:[{name:"untrack",id:"untrack"}],kind:"Variable",content:"```typescript\nuntrack: <T>(fn: () => T) => T\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/use/use-core.ts",mdFile:"qwik.untrack.md"},{name:"useComputed$",id:"usecomputed_",hierarchy:[{name:"useComputed$",id:"usecomputed_"}],kind:"Variable",content:"```typescript\nuseComputed$: Computed\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/use/use-task.ts",mdFile:"qwik.usecomputed_.md"},{name:"useComputedQrl",id:"usecomputedqrl",hierarchy:[{name:"useComputedQrl",id:"usecomputedqrl"}],kind:"Variable",content:"```typescript\nuseComputedQrl: ComputedQRL\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/use/use-task.ts",mdFile:"qwik.usecomputedqrl.md"},{name:"useContext",id:"usecontext",hierarchy:[{name:"useContext",id:"usecontext"}],kind:"Variable",content:`Retrieve Context value.

Use \`useContext()\` to retrieve the value of context in a component. To retrieve a value a parent component needs to invoke \`useContextProvider()\` to assign a value.

\\#\\#\\# Example

\`\`\`tsx
// Declare the Context type.
interface TodosStore {
  items: string[];
}
// Create a Context ID (no data is saved here.)
// You will use this ID to both create and retrieve the Context.
export const TodosContext = createContextId<TodosStore>('Todos');

// Example of providing context to child components.
export const App = component$(() => {
  useContextProvider(
    TodosContext,
    useStore<TodosStore>({
      items: ['Learn Qwik', 'Build Qwik app', 'Profit'],
    })
  );

  return <Items />;
});

// Example of retrieving the context provided by a parent component.
export const Items = component$(() => {
  const todos = useContext(TodosContext);
  return (
    <ul>
      {todos.items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
});

\`\`\`


\`\`\`typescript
useContext: UseContext
\`\`\``,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/use/use-context.ts",mdFile:"qwik.usecontext.md"},{name:"useContextProvider",id:"usecontextprovider",hierarchy:[{name:"useContextProvider",id:"usecontextprovider"}],kind:"Variable",content:`Assign a value to a Context.

Use \`useContextProvider()\` to assign a value to a context. The assignment happens in the component's function. Once assigned, use \`useContext()\` in any child component to retrieve the value.

Context is a way to pass stores to the child components without prop-drilling.

\\#\\#\\# Example

\`\`\`tsx
// Declare the Context type.
interface TodosStore {
  items: string[];
}
// Create a Context ID (no data is saved here.)
// You will use this ID to both create and retrieve the Context.
export const TodosContext = createContextId<TodosStore>('Todos');

// Example of providing context to child components.
export const App = component$(() => {
  useContextProvider(
    TodosContext,
    useStore<TodosStore>({
      items: ['Learn Qwik', 'Build Qwik app', 'Profit'],
    })
  );

  return <Items />;
});

// Example of retrieving the context provided by a parent component.
export const Items = component$(() => {
  const todos = useContext(TodosContext);
  return (
    <ul>
      {todos.items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
});

\`\`\`


\`\`\`typescript
useContextProvider: <STATE extends object>(context: ContextId<STATE>, newValue: STATE) => void
\`\`\``,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/use/use-context.ts",mdFile:"qwik.usecontextprovider.md"},{name:"useErrorBoundary",id:"useerrorboundary",hierarchy:[{name:"useErrorBoundary",id:"useerrorboundary"}],kind:"Variable",content:"```typescript\nuseErrorBoundary: () => Readonly<ErrorBoundaryStore>\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/use/use-error-boundary.ts",mdFile:"qwik.useerrorboundary.md"},{name:"useId",id:"useid",hierarchy:[{name:"useId",id:"useid"}],kind:"Variable",content:"```typescript\nuseId: () => string\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/use/use-id.ts",mdFile:"qwik.useid.md"},{name:"useOn",id:"useon",hierarchy:[{name:"useOn",id:"useon"}],kind:"Variable",content:"Register a listener on the current component's host element.\n\nUsed to programmatically add event listeners. Useful from custom `use*` methods, which do not have access to the JSX. Otherwise, it's adding a JSX listener in the `<div>` is a better idea.\n\n\n```typescript\nuseOn: (event: PascalCaseEventLiteralType | PascalCaseEventLiteralType[], eventQrl: QRL<(ev: Event) => void> | undefined) => void\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/use/use-on.ts",mdFile:"qwik.useon.md"},{name:"useOnDocument",id:"useondocument",hierarchy:[{name:"useOnDocument",id:"useondocument"}],kind:"Variable",content:"Register a listener on `document`<!-- -->.\n\nUsed to programmatically add event listeners. Useful from custom `use*` methods, which do not have access to the JSX.\n\n\n```typescript\nuseOnDocument: (event: PascalCaseEventLiteralType | PascalCaseEventLiteralType[], eventQrl: QRL<(ev: Event) => void> | undefined) => void\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/use/use-on.ts",mdFile:"qwik.useondocument.md"},{name:"useOnWindow",id:"useonwindow",hierarchy:[{name:"useOnWindow",id:"useonwindow"}],kind:"Variable",content:"Register a listener on `window`<!-- -->.\n\nUsed to programmatically add event listeners. Useful from custom `use*` methods, which do not have access to the JSX.\n\n\n```typescript\nuseOnWindow: (event: PascalCaseEventLiteralType | PascalCaseEventLiteralType[], eventQrl: QRL<(ev: Event) => void> | undefined) => void\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/use/use-on.ts",mdFile:"qwik.useonwindow.md"},{name:"useResource$",id:"useresource_",hierarchy:[{name:"useResource$",id:"useresource_"}],kind:"Variable",content:`This method works like an async memoized function that runs whenever some tracked value changes and returns some data.

\`useResource\` however returns immediate a \`ResourceReturn\` object that contains the data and a state that indicates if the data is available or not.

The status can be one of the following:

- 'pending' - the data is not yet available. - 'resolved' - the data is available. - 'rejected' - the data is not available due to an error or timeout.

\\#\\#\\# Example

Example showing how \`useResource\` to perform a fetch to request the weather, whenever the input city name changes.

\`\`\`tsx
const Cmp = component$(() => {
  const store = useStore({
    city: '',
  });

  const weatherResource = useResource$<any>(async ({ track, cleanup }) => {
    const cityName = track(() => store.city);
    const abortController = new AbortController();
    cleanup(() => abortController.abort('cleanup'));
    const res = await fetch(\`http://weatherdata.com?city=\${cityName}\`, {
      signal: abortController.signal,
    });
    const data = res.json();
    return data;
  });

  return (
    <div>
      <input name="city" onInput$={(ev: any) => (store.city = ev.target.value)} />
      <Resource
        value={weatherResource}
        onResolved={(weather) => {
          return <div>Temperature: {weather.temp}</div>;
        }}
      />
    </div>
  );
});
\`\`\`


\`\`\`typescript
useResource$: <T>(generatorFn: ResourceFn<T>, opts?: ResourceOptions) => ResourceReturn<T>
\`\`\``,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/use/use-resource.ts",mdFile:"qwik.useresource_.md"},{name:"useResourceQrl",id:"useresourceqrl",hierarchy:[{name:"useResourceQrl",id:"useresourceqrl"}],kind:"Variable",content:`This method works like an async memoized function that runs whenever some tracked value changes and returns some data.

\`useResource\` however returns immediate a \`ResourceReturn\` object that contains the data and a state that indicates if the data is available or not.

The status can be one of the following:

- 'pending' - the data is not yet available. - 'resolved' - the data is available. - 'rejected' - the data is not available due to an error or timeout.

\\#\\#\\# Example

Example showing how \`useResource\` to perform a fetch to request the weather, whenever the input city name changes.

\`\`\`tsx
const Cmp = component$(() => {
  const store = useStore({
    city: '',
  });

  const weatherResource = useResource$<any>(async ({ track, cleanup }) => {
    const cityName = track(() => store.city);
    const abortController = new AbortController();
    cleanup(() => abortController.abort('cleanup'));
    const res = await fetch(\`http://weatherdata.com?city=\${cityName}\`, {
      signal: abortController.signal,
    });
    const data = res.json();
    return data;
  });

  return (
    <div>
      <input name="city" onInput$={(ev: any) => (store.city = ev.target.value)} />
      <Resource
        value={weatherResource}
        onResolved={(weather) => {
          return <div>Temperature: {weather.temp}</div>;
        }}
      />
    </div>
  );
});
\`\`\`


\`\`\`typescript
useResourceQrl: <T>(qrl: QRL<ResourceFn<T>>, opts?: ResourceOptions) => ResourceReturn<T>
\`\`\``,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/use/use-resource.ts",mdFile:"qwik.useresourceqrl.md"},{name:"useServerData",id:"useserverdata",hierarchy:[{name:"useServerData",id:"useserverdata"}],kind:"Function",content:`\`\`\`typescript
export declare function useServerData<T>(key: string): T | undefined;
\`\`\`


|  Parameter | Type | Description |
|  --- | --- | --- |
|  key | string |  |

**Returns:**

T \\| undefined`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/use/use-env-data.ts",mdFile:"qwik.useserverdata.md"},{name:"useSignal",id:"usesignal",hierarchy:[{name:"useSignal",id:"usesignal"}],kind:"Variable",content:"```typescript\nuseSignal: UseSignal\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/use/use-signal.ts",mdFile:"qwik.usesignal.md"},{name:"UseSignal",id:"usesignal",hierarchy:[{name:"UseSignal",id:"usesignal"}],kind:"Interface",content:"```typescript\nuseSignal: UseSignal\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/use/use-signal.ts",mdFile:"qwik.usesignal.md"},{name:"useStore",id:"usestore",hierarchy:[{name:"useStore",id:"usestore"}],kind:"Variable",content:`Creates an object that Qwik can track across serializations.

Use \`useStore\` to create a state for your application. The returned object is a proxy that has a unique ID. The ID of the object is used in the \`QRL\`<!-- -->s to refer to the store.

\\#\\#\\# Example

Example showing how \`useStore\` is used in Counter example to keep track of the count.

\`\`\`tsx
const Stores = component$(() => {
  const counter = useCounter(1);

  // Reactivity happens even for nested objects and arrays
  const userData = useStore({
    name: 'Manu',
    address: {
      address: '',
      city: '',
    },
    orgs: [],
  });

  // useStore() can also accept a function to calculate the initial value
  const state = useStore(() => {
    return {
      value: expensiveInitialValue(),
    };
  });

  return (
    <div>
      <div>Counter: {counter.value}</div>
      <Child userData={userData} state={state} />
    </div>
  );
});

function useCounter(step: number) {
  // Multiple stores can be created in custom hooks for convenience and composability
  const counterStore = useStore({
    value: 0,
  });
  useVisibleTask$(() => {
    // Only runs in the client
    const timer = setInterval(() => {
      counterStore.value += step;
    }, 500);
    return () => {
      clearInterval(timer);
    };
  });
  return counterStore;
}
\`\`\`


\`\`\`typescript
useStore: <STATE extends object>(initialState: STATE | (() => STATE), opts?: UseStoreOptions) => STATE
\`\`\``,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/use/use-store.public.ts",mdFile:"qwik.usestore.md"},{name:"UseStoreOptions",id:"usestoreoptions",hierarchy:[{name:"UseStoreOptions",id:"usestoreoptions"}],kind:"Interface",content:`\`\`\`typescript
export interface UseStoreOptions 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [deep?](#) |  | boolean | _(Optional)_ If <code>true</code> then all nested objects and arrays will be tracked as well. Default is <code>false</code>. |
|  [reactive?](#) |  | boolean | _(Optional)_ If <code>false</code> then the object will not be tracked for changes. Default is <code>true</code>. |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/use/use-store.public.ts",mdFile:"qwik.usestoreoptions.md"},{name:"useStyles$",id:"usestyles_",hierarchy:[{name:"useStyles$",id:"usestyles_"}],kind:"Variable",content:`A lazy-loadable reference to a component's styles.

Component styles allow Qwik to lazy load the style information for the component only when needed. (And avoid double loading it in case of SSR hydration.)

\`\`\`tsx
import styles from './code-block.css?inline';

export const CmpStyles = component$(() => {
  useStyles$(styles);

  return <div>Some text</div>;
});
\`\`\`


\`\`\`typescript
useStyles$: (first: string) => void
\`\`\``,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/use/use-styles.ts",mdFile:"qwik.usestyles_.md"},{name:"useStylesQrl",id:"usestylesqrl",hierarchy:[{name:"useStylesQrl",id:"usestylesqrl"}],kind:"Variable",content:`A lazy-loadable reference to a component's styles.

Component styles allow Qwik to lazy load the style information for the component only when needed. (And avoid double loading it in case of SSR hydration.)

\`\`\`tsx
import styles from './code-block.css?inline';

export const CmpStyles = component$(() => {
  useStyles$(styles);

  return <div>Some text</div>;
});
\`\`\`


\`\`\`typescript
useStylesQrl: (styles: QRL<string>) => void
\`\`\``,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/use/use-styles.ts",mdFile:"qwik.usestylesqrl.md"},{name:"UseStylesScoped",id:"usestylesscoped",hierarchy:[{name:"UseStylesScoped",id:"usestylesscoped"}],kind:"Interface",content:`\`\`\`typescript
export interface UseStylesScoped 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [scopeId](#) |  | string |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/use/use-styles.ts",mdFile:"qwik.usestylesscoped.md"},{name:"useStylesScoped$",id:"usestylesscoped_",hierarchy:[{name:"useStylesScoped$",id:"usestylesscoped_"}],kind:"Variable",content:`A lazy-loadable reference to a component's styles, that is scoped to the component.

Component styles allow Qwik to lazy load the style information for the component only when needed. (And avoid double loading it in case of SSR hydration.)

\`\`\`tsx
import scoped from './code-block.css?inline';

export const CmpScopedStyles = component$(() => {
  useStylesScoped$(scoped);

  return <div>Some text</div>;
});
\`\`\`


\`\`\`typescript
useStylesScoped$: (first: string) => UseStylesScoped
\`\`\``,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/use/use-styles.ts",mdFile:"qwik.usestylesscoped_.md"},{name:"useStylesScopedQrl",id:"usestylesscopedqrl",hierarchy:[{name:"useStylesScopedQrl",id:"usestylesscopedqrl"}],kind:"Variable",content:`A lazy-loadable reference to a component's styles, that is scoped to the component.

Component styles allow Qwik to lazy load the style information for the component only when needed. (And avoid double loading it in case of SSR hydration.)

\`\`\`tsx
import scoped from './code-block.css?inline';

export const CmpScopedStyles = component$(() => {
  useStylesScoped$(scoped);

  return <div>Some text</div>;
});
\`\`\`


\`\`\`typescript
useStylesScopedQrl: (styles: QRL<string>) => UseStylesScoped
\`\`\``,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/use/use-styles.ts",mdFile:"qwik.usestylesscopedqrl.md"},{name:"useTask$",id:"usetask_",hierarchy:[{name:"useTask$",id:"usetask_"}],kind:"Variable",content:"Reruns the `taskFn` when the observed inputs change.\n\nUse `useTask` to observe changes on a set of inputs, and then re-execute the `taskFn` when those inputs change.\n\nThe `taskFn` only executes if the observed inputs change. To observe the inputs, use the `obs` function to wrap property reads. This creates subscriptions that will trigger the `taskFn` to rerun.\n\n\n```typescript\nuseTask$: (first: TaskFn, opts?: UseTaskOptions | undefined) => void\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/use/use-task.ts",mdFile:"qwik.usetask_.md"},{name:"UseTaskOptions",id:"usetaskoptions",hierarchy:[{name:"UseTaskOptions",id:"usetaskoptions"}],kind:"Interface",content:`\`\`\`typescript
export interface UseTaskOptions 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [eagerness?](#) |  | [EagernessOptions](#eagernessoptions) | _(Optional)_ - <code>visible</code>: run the effect when the element is visible. - <code>load</code>: eagerly run the effect when the application resumes. |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/use/use-task.ts",mdFile:"qwik.usetaskoptions.md"},{name:"useTaskQrl",id:"usetaskqrl",hierarchy:[{name:"useTaskQrl",id:"usetaskqrl"}],kind:"Variable",content:"Reruns the `taskFn` when the observed inputs change.\n\nUse `useTask` to observe changes on a set of inputs, and then re-execute the `taskFn` when those inputs change.\n\nThe `taskFn` only executes if the observed inputs change. To observe the inputs, use the `obs` function to wrap property reads. This creates subscriptions that will trigger the `taskFn` to rerun.\n\n\n```typescript\nuseTaskQrl: (qrl: QRL<TaskFn>, opts?: UseTaskOptions) => void\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/use/use-task.ts",mdFile:"qwik.usetaskqrl.md"},{name:"useVisibleTask$",id:"usevisibletask_",hierarchy:[{name:"useVisibleTask$",id:"usevisibletask_"}],kind:"Variable",content:`\`\`\`tsx
const Timer = component$(() => {
  const store = useStore({
    count: 0,
  });

  useVisibleTask$(() => {
    // Only runs in the client
    const timer = setInterval(() => {
      store.count++;
    }, 500);
    return () => {
      clearInterval(timer);
    };
  });

  return <div>{store.count}</div>;
});
\`\`\`


\`\`\`typescript
useVisibleTask$: (first: TaskFn, opts?: OnVisibleTaskOptions | undefined) => void
\`\`\``,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/use/use-task.ts",mdFile:"qwik.usevisibletask_.md"},{name:"useVisibleTaskQrl",id:"usevisibletaskqrl",hierarchy:[{name:"useVisibleTaskQrl",id:"usevisibletaskqrl"}],kind:"Variable",content:`\`\`\`tsx
const Timer = component$(() => {
  const store = useStore({
    count: 0,
  });

  useVisibleTask$(() => {
    // Only runs in the client
    const timer = setInterval(() => {
      store.count++;
    }, 500);
    return () => {
      clearInterval(timer);
    };
  });

  return <div>{store.count}</div>;
});
\`\`\`


\`\`\`typescript
useVisibleTaskQrl: (qrl: QRL<TaskFn>, opts?: OnVisibleTaskOptions) => void
\`\`\``,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/use/use-task.ts",mdFile:"qwik.usevisibletaskqrl.md"},{name:"ValueOrPromise",id:"valueorpromise",hierarchy:[{name:"ValueOrPromise",id:"valueorpromise"}],kind:"TypeAlias",content:"Type representing a value which is either resolve or a promise.\n\n\n```typescript\nexport type ValueOrPromise<T> = T | Promise<T>;\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/util/types.ts",mdFile:"qwik.valueorpromise.md"},{name:"version",id:"version",hierarchy:[{name:"version",id:"version"}],kind:"Variable",content:"QWIK\\_VERSION\n\n\n```typescript\nversion: string\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/version.ts",mdFile:"qwik.version.md"},{name:"VisibleTaskStrategy",id:"visibletaskstrategy",hierarchy:[{name:"VisibleTaskStrategy",id:"visibletaskstrategy"}],kind:"TypeAlias",content:"```typescript\nexport type VisibleTaskStrategy = 'intersection-observer' | 'document-ready' | 'document-idle';\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/core/use/use-task.ts",mdFile:"qwik.visibletaskstrategy.md"}],c={id:s,package:"@builder.io/qwik",members:d},p="qwik-city",l=[{name:"Action",id:"action",hierarchy:[{name:"Action",id:"action"}],kind:"Interface",content:"```typescript\nexport interface Action<RETURN, INPUT = Record<string, any>, OPTIONAL extends boolean = true> \n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts",mdFile:"qwik-city.action.md"},{name:"ActionConstructor",id:"actionconstructor",hierarchy:[{name:"ActionConstructor",id:"actionconstructor"}],kind:"Interface",content:"```typescript\nexport interface ActionConstructor \n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts",mdFile:"qwik-city.actionconstructor.md"},{name:"ActionOptions",id:"actionoptions",hierarchy:[{name:"ActionOptions",id:"actionoptions"}],kind:"Interface",content:`\`\`\`typescript
export interface ActionOptions 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [id?](#) | <code>readonly</code> | string | _(Optional)_ |
|  [validation?](#) | <code>readonly</code> | DataValidator\\[\\] | _(Optional)_ |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts",mdFile:"qwik-city.actionoptions.md"},{name:"ActionOptionsWithValidation",id:"actionoptionswithvalidation",hierarchy:[{name:"ActionOptionsWithValidation",id:"actionoptionswithvalidation"}],kind:"Interface",content:`\`\`\`typescript
export interface ActionOptionsWithValidation<B extends TypedDataValidator = TypedDataValidator> 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [id?](#) | <code>readonly</code> | string | _(Optional)_ |
|  [validation](#) | <code>readonly</code> | \\[val: B, ...a: DataValidator\\[\\]\\] |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts",mdFile:"qwik-city.actionoptionswithvalidation.md"},{name:"ActionStore",id:"actionstore",hierarchy:[{name:"ActionStore",id:"actionstore"}],kind:"Interface",content:`\`\`\`typescript
export interface ActionStore<RETURN, INPUT, OPTIONAL extends boolean = true> 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [actionPath](#) | <code>readonly</code> | string | <p>It's the "action" path that a native <code>&lt;form&gt;</code> should have in order to call the action.</p>
\`\`\`tsx
 <form action={action.actionPath} />
\`\`\`
<p>Most of the time this property should not be used directly, instead use the <code>Form</code> component:</p>
\`\`\`tsx
import {action$, Form} from '@builder.io/qwik-city';

export const useAddUser = action$(() => { ... });

export default component$(() => {
  const action = useAddUser();
  return (
    <Form action={action}/>
  );
});
\`\`\`
 |
|  [formData](#) | <code>readonly</code> | FormData \\| undefined | <p>When calling an action through a <code>&lt;form&gt;</code>, this property contains the previously submitted <code>FormData</code>.</p><p>This is useful to keep the filled form data even after a full page reload.</p><p>It's <code>undefined</code> before the action is first called.</p> |
|  [isRunning](#) | <code>readonly</code> | boolean | <p>Reactive property that becomes <code>true</code> only in the browser, when a form is submitted and switched back to false when the action finish, ie, it describes if the action is actively running.</p><p>This property is specially useful to disable the submit button while the action is processing, to prevent multiple submissions, and to inform visually to the user that the action is actively running.</p><p>It will be always <code>false</code> in the server, and only becomes <code>true</code> briefly while the action is running.</p> |
|  [status?](#) | <code>readonly</code> | number | <p>_(Optional)_ Returned HTTP status code of the action after its last execution.</p><p>It's <code>undefined</code> before the action is first called.</p> |
|  [submit](#) | <code>readonly</code> | QRL&lt;OPTIONAL extends true ? (form?: INPUT \\| FormData \\| SubmitEvent) =&gt; Promise&lt;ActionReturn&lt;RETURN&gt;&gt; : (form: INPUT \\| FormData \\| SubmitEvent) =&gt; Promise&lt;ActionReturn&lt;RETURN&gt;&gt;&gt; | Method to execute the action programmatically from the browser. Ie, instead of using a <code>&lt;form&gt;</code>, a 'click' handle can call the <code>run()</code> method of the action in order to execute the action in the server. |
|  [value](#) | <code>readonly</code> | RETURN \\| undefined | <p>Returned successful data of the action. This reactive property will contain the data returned inside the <code>action$</code> function.</p><p>It's <code>undefined</code> before the action is first called.</p> |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts",mdFile:"qwik-city.actionstore.md"},{name:"ContentHeading",id:"contentheading",hierarchy:[{name:"ContentHeading",id:"contentheading"}],kind:"Interface",content:`\`\`\`typescript
export interface ContentHeading 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [id](#) | <code>readonly</code> | string |  |
|  [level](#) | <code>readonly</code> | number |  |
|  [text](#) | <code>readonly</code> | string |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts",mdFile:"qwik-city.contentheading.md"},{name:"ContentMenu",id:"contentmenu",hierarchy:[{name:"ContentMenu",id:"contentmenu"}],kind:"Interface",content:`\`\`\`typescript
export interface ContentMenu 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [href?](#) | <code>readonly</code> | string | _(Optional)_ |
|  [items?](#) | <code>readonly</code> | [ContentMenu](#contentmenu)<!-- -->\\[\\] | _(Optional)_ |
|  [text](#) | <code>readonly</code> | string |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts",mdFile:"qwik-city.contentmenu.md"},{name:"DocumentHead",id:"documenthead",hierarchy:[{name:"DocumentHead",id:"documenthead"}],kind:"TypeAlias",content:"```typescript\nexport type DocumentHead = DocumentHeadValue | ((props: DocumentHeadProps) => DocumentHeadValue);\n```\n**References:** [DocumentHeadValue](#documentheadvalue)<!-- -->, [DocumentHeadProps](#documentheadprops)",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts",mdFile:"qwik-city.documenthead.md"},{name:"DocumentHeadProps",id:"documentheadprops",hierarchy:[{name:"DocumentHeadProps",id:"documentheadprops"}],kind:"Interface",content:`\`\`\`typescript
export interface DocumentHeadProps extends RouteLocation 
\`\`\`
**Extends:** [RouteLocation](#routelocation)


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [head](#) | <code>readonly</code> | [ResolvedDocumentHead](#resolveddocumenthead) |  |
|  [resolveValue](#) | <code>readonly</code> | ResolveSyncValue |  |
|  [withLocale](#) | <code>readonly</code> | &lt;T&gt;(fn: () =&gt; T) =&gt; T |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts",mdFile:"qwik-city.documentheadprops.md"},{name:"DocumentHeadValue",id:"documentheadvalue",hierarchy:[{name:"DocumentHeadValue",id:"documentheadvalue"}],kind:"Interface",content:`\`\`\`typescript
export interface DocumentHeadValue 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [frontmatter?](#) | <code>readonly</code> | Readonly&lt;Record&lt;string, any&gt;&gt; | _(Optional)_ Arbitrary object containing custom data. When the document head is created from markdown files, the frontmatter attributes that are not recognized as a well-known meta names (such as title, description, author, etc...), are stored in this property. |
|  [links?](#) | <code>readonly</code> | readonly [DocumentLink](#documentlink)<!-- -->\\[\\] | _(Optional)_ Used to manually append <code>&lt;link&gt;</code> elements to the <code>&lt;head&gt;</code>. |
|  [meta?](#) | <code>readonly</code> | readonly [DocumentMeta](#documentmeta)<!-- -->\\[\\] | _(Optional)_ Used to manually set meta tags in the head. Additionally, the <code>data</code> property could be used to set arbitrary data which the <code>&lt;head&gt;</code> component could later use to generate <code>&lt;meta&gt;</code> tags. |
|  [styles?](#) | <code>readonly</code> | readonly [DocumentStyle](#documentstyle)<!-- -->\\[\\] | _(Optional)_ Used to manually append <code>&lt;style&gt;</code> elements to the <code>&lt;head&gt;</code>. |
|  [title?](#) | <code>readonly</code> | string | _(Optional)_ Sets <code>document.title</code>. |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts",mdFile:"qwik-city.documentheadvalue.md"},{name:"DocumentLink",id:"documentlink",hierarchy:[{name:"DocumentLink",id:"documentlink"}],kind:"Interface",content:`\`\`\`typescript
export interface DocumentLink 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [as?](#) |  | string | _(Optional)_ |
|  [crossorigin?](#) |  | string | _(Optional)_ |
|  [disabled?](#) |  | boolean | _(Optional)_ |
|  [href?](#) |  | string | _(Optional)_ |
|  [hreflang?](#) |  | string | _(Optional)_ |
|  [id?](#) |  | string | _(Optional)_ |
|  [imagesizes?](#) |  | string | _(Optional)_ |
|  [imagesrcset?](#) |  | string | _(Optional)_ |
|  [integrity?](#) |  | string | _(Optional)_ |
|  [key?](#) |  | string | _(Optional)_ |
|  [media?](#) |  | string | _(Optional)_ |
|  [prefetch?](#) |  | string | _(Optional)_ |
|  [referrerpolicy?](#) |  | string | _(Optional)_ |
|  [rel?](#) |  | string | _(Optional)_ |
|  [sizes?](#) |  | string | _(Optional)_ |
|  [title?](#) |  | string | _(Optional)_ |
|  [type?](#) |  | string | _(Optional)_ |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts",mdFile:"qwik-city.documentlink.md"},{name:"DocumentMeta",id:"documentmeta",hierarchy:[{name:"DocumentMeta",id:"documentmeta"}],kind:"Interface",content:`\`\`\`typescript
export interface DocumentMeta 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [content?](#) | <code>readonly</code> | string | _(Optional)_ |
|  [httpEquiv?](#) | <code>readonly</code> | string | _(Optional)_ |
|  [itemprop?](#) | <code>readonly</code> | string | _(Optional)_ |
|  [key?](#) | <code>readonly</code> | string | _(Optional)_ |
|  [name?](#) | <code>readonly</code> | string | _(Optional)_ |
|  [property?](#) | <code>readonly</code> | string | _(Optional)_ |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts",mdFile:"qwik-city.documentmeta.md"},{name:"DocumentStyle",id:"documentstyle",hierarchy:[{name:"DocumentStyle",id:"documentstyle"}],kind:"Interface",content:`\`\`\`typescript
export interface DocumentStyle 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [key?](#) | <code>readonly</code> | string | _(Optional)_ |
|  [props?](#) | <code>readonly</code> | Readonly&lt;{ \\[propName: string\\]: string; }&gt; | _(Optional)_ |
|  [style](#) | <code>readonly</code> | string |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts",mdFile:"qwik-city.documentstyle.md"},{name:"FailReturn",id:"failreturn",hierarchy:[{name:"FailReturn",id:"failreturn"}],kind:"TypeAlias",content:"```typescript\nexport type FailReturn<T> = T & {\n    failed: true;\n};\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts",mdFile:"qwik-city.failreturn.md"},{name:"Form",id:"form",hierarchy:[{name:"Form",id:"form"}],kind:"Variable",content:"```typescript\nForm: <O, I>({ action, spaReset, reloadDocument, onSubmit$, ...rest }: FormProps<O, I>, key: string | null) => QwikJSX.Element\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/form-component.tsx",mdFile:"qwik-city.form.md"},{name:"FormProps",id:"formprops",hierarchy:[{name:"FormProps",id:"formprops"}],kind:"Interface",content:`\`\`\`typescript
export interface FormProps<O, I> extends Omit<QwikJSX.IntrinsicElements['form'], 'action' | 'method'> 
\`\`\`
**Extends:** Omit&lt;QwikJSX.IntrinsicElements\\['form'\\], 'action' \\| 'method'&gt;


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [action?](#) |  | [ActionStore](#actionstore)<!-- -->&lt;O, I, true \\| false&gt; | _(Optional)_ Reference to the action returned by <code>action()</code>. |
|  [key?](#) |  | string \\| number \\| null | _(Optional)_ |
|  [onSubmit$?](#) |  | (event: Event, form: HTMLFormElement) =&gt; ValueOrPromise&lt;void&gt; | _(Optional)_ Event handler executed right when the form is submitted. |
|  [onSubmitCompleted$?](#) |  | (event: CustomEvent&lt;[FormSubmitCompletedDetail](#formsubmitsuccessdetail)<!-- -->&lt;O&gt;&gt;, form: HTMLFormElement) =&gt; ValueOrPromise&lt;void&gt; | _(Optional)_ Event handler executed right after the action is executed successfully and returns some data. |
|  [reloadDocument?](#) |  | boolean | _(Optional)_ When <code>true</code> the form submission will cause a full page reload, even if SPA mode is enabled and JS is available. |
|  [spaReset?](#) |  | boolean | <p>_(Optional)_ When <code>true</code> all the form inputs will be reset in SPA mode, just like happens in a full page form submission.</p><p>Defaults to <code>false</code></p> |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/form-component.tsx",mdFile:"qwik-city.formprops.md"},{name:"FormSubmitSuccessDetail",id:"formsubmitsuccessdetail",hierarchy:[{name:"FormSubmitSuccessDetail",id:"formsubmitsuccessdetail"}],kind:"Interface",content:`\`\`\`typescript
export interface FormSubmitCompletedDetail<T> 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [status](#) |  | number |  |
|  [value](#) |  | T |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/form-component.tsx",mdFile:"qwik-city.formsubmitsuccessdetail.md"},{name:"globalAction$",id:"globalaction_",hierarchy:[{name:"globalAction$",id:"globalaction_"}],kind:"Variable",content:"```typescript\nglobalAction$: ActionConstructor\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/server-functions.ts",mdFile:"qwik-city.globalaction_.md"},{name:"globalActionQrl",id:"globalactionqrl",hierarchy:[{name:"globalActionQrl",id:"globalactionqrl"}],kind:"Variable",content:"```typescript\nglobalActionQrl: ActionConstructorQRL\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/server-functions.ts",mdFile:"qwik-city.globalactionqrl.md"},{name:"JSONObject",id:"jsonobject",hierarchy:[{name:"JSONObject",id:"jsonobject"}],kind:"TypeAlias",content:"```typescript\nexport type JSONObject = {\n    [x: string]: JSONValue;\n};\n```\n**References:** [JSONValue](#jsonvalue)",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts",mdFile:"qwik-city.jsonobject.md"},{name:"JSONValue",id:"jsonvalue",hierarchy:[{name:"JSONValue",id:"jsonvalue"}],kind:"TypeAlias",content:"```typescript\nexport type JSONValue = string | number | boolean | {\n    [x: string]: JSONValue;\n} | Array<JSONValue>;\n```\n**References:** [JSONValue](#jsonvalue)",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts",mdFile:"qwik-city.jsonvalue.md"},{name:"Link",id:"link",hierarchy:[{name:"Link",id:"link"}],kind:"Variable",content:'```typescript\nLink: import("@builder.io/qwik").Component<LinkProps>\n```',editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/link-component.tsx",mdFile:"qwik-city.link.md"},{name:"LinkProps",id:"linkprops",hierarchy:[{name:"LinkProps",id:"linkprops"}],kind:"Interface",content:`\`\`\`typescript
export interface LinkProps extends AnchorAttributes 
\`\`\`
**Extends:** AnchorAttributes


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [prefetch?](#) |  | boolean | _(Optional)_ |
|  [reload?](#) |  | boolean | _(Optional)_ |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/link-component.tsx",mdFile:"qwik-city.linkprops.md"},{name:"Loader",id:"loader",hierarchy:[{name:"Loader",id:"loader"}],kind:"Interface",content:"```typescript\nexport interface Loader<RETURN> \n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts",mdFile:"qwik-city.loader.md"},{name:"LoaderSignal",id:"loadersignal",hierarchy:[{name:"LoaderSignal",id:"loadersignal"}],kind:"TypeAlias",content:"```typescript\nexport type LoaderSignal<T> = T extends () => ValueOrPromise<infer B> ? ReadonlySignal<ValueOrPromise<B>> : ReadonlySignal<T>;\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts",mdFile:"qwik-city.loadersignal.md"},{name:"MenuData",id:"menudata",hierarchy:[{name:"MenuData",id:"menudata"}],kind:"TypeAlias",content:"```typescript\nexport type MenuData = [pathname: string, menuLoader: MenuModuleLoader];\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts",mdFile:"qwik-city.menudata.md"},{name:"PageModule",id:"pagemodule",hierarchy:[{name:"PageModule",id:"pagemodule"}],kind:"Interface",content:`\`\`\`typescript
export interface PageModule extends RouteModule 
\`\`\`
**Extends:** RouteModule


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [default](#) | <code>readonly</code> | any |  |
|  [head?](#) | <code>readonly</code> | ContentModuleHead | _(Optional)_ |
|  [headings?](#) | <code>readonly</code> | [ContentHeading](#contentheading)<!-- -->\\[\\] | _(Optional)_ |
|  [onStaticGenerate?](#) | <code>readonly</code> | [StaticGenerateHandler](#staticgeneratehandler) | _(Optional)_ |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts",mdFile:"qwik-city.pagemodule.md"},{name:"PathParams",id:"pathparams",hierarchy:[{name:"PathParams",id:"pathparams"}],kind:"TypeAlias",content:"```typescript\nexport declare type PathParams = Record<string, string>;\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts",mdFile:"qwik-city.pathparams.md"},{name:"QwikCityMockProvider",id:"qwikcitymockprovider",hierarchy:[{name:"QwikCityMockProvider",id:"qwikcitymockprovider"}],kind:"Variable",content:'```typescript\nQwikCityMockProvider: import("@builder.io/qwik").Component<QwikCityMockProps>\n```',editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/qwik-city-component.tsx",mdFile:"qwik-city.qwikcitymockprovider.md"},{name:"QwikCityPlan",id:"qwikcityplan",hierarchy:[{name:"QwikCityPlan",id:"qwikcityplan"}],kind:"Interface",content:`\`\`\`typescript
export interface QwikCityPlan 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [basePathname?](#) | <code>readonly</code> | string | _(Optional)_ |
|  [cacheModules?](#) | <code>readonly</code> | boolean | _(Optional)_ |
|  [menus?](#) | <code>readonly</code> | [MenuData](#menudata)<!-- -->\\[\\] | _(Optional)_ |
|  [routes](#) | <code>readonly</code> | [RouteData](#routedata)<!-- -->\\[\\] |  |
|  [serverPlugins?](#) | <code>readonly</code> | RouteModule\\[\\] | _(Optional)_ |
|  [trailingSlash?](#) | <code>readonly</code> | boolean | _(Optional)_ |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts",mdFile:"qwik-city.qwikcityplan.md"},{name:"QwikCityProps",id:"qwikcityprops",hierarchy:[{name:"QwikCityProps",id:"qwikcityprops"}],kind:"Interface",content:`\`\`\`typescript
export interface QwikCityProps 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [viewTransition?](#) |  | boolean | <p>_(Optional)_ Enable the ViewTransition API</p><p>Default: <code>true</code></p> |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/qwik-city-component.tsx",mdFile:"qwik-city.qwikcityprops.md"},{name:"QwikCityProvider",id:"qwikcityprovider",hierarchy:[{name:"QwikCityProvider",id:"qwikcityprovider"}],kind:"Variable",content:'```typescript\nQwikCityProvider: import("@builder.io/qwik").Component<QwikCityProps>\n```',editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/qwik-city-component.tsx",mdFile:"qwik-city.qwikcityprovider.md"},{name:"ResolvedDocumentHead",id:"resolveddocumenthead",hierarchy:[{name:"ResolvedDocumentHead",id:"resolveddocumenthead"}],kind:"TypeAlias",content:"```typescript\nexport type ResolvedDocumentHead = Required<DocumentHeadValue>;\n```\n**References:** [DocumentHeadValue](#documentheadvalue)",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts",mdFile:"qwik-city.resolveddocumenthead.md"},{name:"routeAction$",id:"routeaction_",hierarchy:[{name:"routeAction$",id:"routeaction_"}],kind:"Variable",content:"```typescript\nrouteAction$: ActionConstructor\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/server-functions.ts",mdFile:"qwik-city.routeaction_.md"},{name:"routeActionQrl",id:"routeactionqrl",hierarchy:[{name:"routeActionQrl",id:"routeactionqrl"}],kind:"Variable",content:"```typescript\nrouteActionQrl: ActionConstructorQRL\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/server-functions.ts",mdFile:"qwik-city.routeactionqrl.md"},{name:"RouteData",id:"routedata",hierarchy:[{name:"RouteData",id:"routedata"}],kind:"TypeAlias",content:`\`\`\`typescript
export type RouteData = [pattern: RegExp, loaders: ModuleLoader[]] | [pattern: RegExp, loaders: ModuleLoader[], paramNames: string[]] | [
    pattern: RegExp,
    loaders: ModuleLoader[],
    paramNames: string[],
    originalPathname: string,
    routeBundleNames: string[]
];
\`\`\``,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts",mdFile:"qwik-city.routedata.md"},{name:"routeLoader$",id:"routeloader_",hierarchy:[{name:"routeLoader$",id:"routeloader_"}],kind:"Variable",content:"```typescript\nrouteLoader$: LoaderConstructor\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/server-functions.ts",mdFile:"qwik-city.routeloader_.md"},{name:"routeLoaderQrl",id:"routeloaderqrl",hierarchy:[{name:"routeLoaderQrl",id:"routeloaderqrl"}],kind:"Variable",content:"```typescript\nrouteLoaderQrl: LoaderConstructorQRL\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/server-functions.ts",mdFile:"qwik-city.routeloaderqrl.md"},{name:"RouteLocation",id:"routelocation",hierarchy:[{name:"RouteLocation",id:"routelocation"}],kind:"Interface",content:`\`\`\`typescript
export interface RouteLocation 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [isNavigating](#) | <code>readonly</code> | boolean |  |
|  [params](#) | <code>readonly</code> | Readonly&lt;Record&lt;string, string&gt;&gt; |  |
|  [prevUrl](#) | <code>readonly</code> | URL \\| undefined |  |
|  [url](#) | <code>readonly</code> | URL |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts",mdFile:"qwik-city.routelocation.md"},{name:"RouteNavigate",id:"routenavigate",hierarchy:[{name:"RouteNavigate",id:"routenavigate"}],kind:"TypeAlias",content:"```typescript\nexport type RouteNavigate = QRL<(path?: string, forceReload?: boolean) => Promise<void>>;\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts",mdFile:"qwik-city.routenavigate.md"},{name:"RouterOutlet",id:"routeroutlet",hierarchy:[{name:"RouterOutlet",id:"routeroutlet"}],kind:"Variable",content:'```typescript\nRouterOutlet: import("@builder.io/qwik").Component<{}>\n```',editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/router-outlet-component.tsx",mdFile:"qwik-city.routeroutlet.md"},{name:"server$",id:"server_",hierarchy:[{name:"server$",id:"server_"}],kind:"Variable",content:'```typescript\nserver$: <T extends import("./types").ServerFunction>(first: T) => QRL<T>\n```',editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/server-functions.ts",mdFile:"qwik-city.server_.md"},{name:"serverQrl",id:"serverqrl",hierarchy:[{name:"serverQrl",id:"serverqrl"}],kind:"Variable",content:"```typescript\nserverQrl: ServerConstructorQRL\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/server-functions.ts",mdFile:"qwik-city.serverqrl.md"},{name:"ServiceWorkerRegister",id:"serviceworkerregister",hierarchy:[{name:"ServiceWorkerRegister",id:"serviceworkerregister"}],kind:"Variable",content:'```typescript\nServiceWorkerRegister: (props: {\n    nonce?: string;\n}) => import("@builder.io/qwik").JSXNode<"script">\n```',editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/sw-component.tsx",mdFile:"qwik-city.serviceworkerregister.md"},{name:"StaticGenerate",id:"staticgenerate",hierarchy:[{name:"StaticGenerate",id:"staticgenerate"}],kind:"Interface",content:`\`\`\`typescript
export interface StaticGenerate 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [params?](#) |  | [PathParams](#pathparams)<!-- -->\\[\\] | _(Optional)_ |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts",mdFile:"qwik-city.staticgenerate.md"},{name:"StaticGenerateHandler",id:"staticgeneratehandler",hierarchy:[{name:"StaticGenerateHandler",id:"staticgeneratehandler"}],kind:"TypeAlias",content:"```typescript\nexport type StaticGenerateHandler = () => Promise<StaticGenerate> | StaticGenerate;\n```\n**References:** [StaticGenerate](#staticgenerate)",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts",mdFile:"qwik-city.staticgeneratehandler.md"},{name:"useContent",id:"usecontent",hierarchy:[{name:"useContent",id:"usecontent"}],kind:"Variable",content:'```typescript\nuseContent: () => import("./types").ContentState\n```',editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/use-functions.ts",mdFile:"qwik-city.usecontent.md"},{name:"useDocumentHead",id:"usedocumenthead",hierarchy:[{name:"useDocumentHead",id:"usedocumenthead"}],kind:"Variable",content:"```typescript\nuseDocumentHead: () => Required<ResolvedDocumentHead>\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/use-functions.ts",mdFile:"qwik-city.usedocumenthead.md"},{name:"useLocation",id:"uselocation",hierarchy:[{name:"useLocation",id:"uselocation"}],kind:"Variable",content:"```typescript\nuseLocation: () => RouteLocation\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/use-functions.ts",mdFile:"qwik-city.uselocation.md"},{name:"useNavigate",id:"usenavigate",hierarchy:[{name:"useNavigate",id:"usenavigate"}],kind:"Variable",content:"```typescript\nuseNavigate: () => RouteNavigate\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/use-functions.ts",mdFile:"qwik-city.usenavigate.md"},{name:"validator$",id:"validator_",hierarchy:[{name:"validator$",id:"validator_"}],kind:"Variable",content:"```typescript\nvalidator$: ValidatorConstructor\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/server-functions.ts",mdFile:"qwik-city.validator_.md"},{name:"validatorQrl",id:"validatorqrl",hierarchy:[{name:"validatorQrl",id:"validatorqrl"}],kind:"Variable",content:"```typescript\nvalidatorQrl: ValidatorConstructorQRL\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/server-functions.ts",mdFile:"qwik-city.validatorqrl.md"},{name:"zod$",id:"zod_",hierarchy:[{name:"zod$",id:"zod_"}],kind:"Variable",content:"```typescript\nzod$: ZodConstructor\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/server-functions.ts",mdFile:"qwik-city.zod_.md"},{name:"ZodConstructor",id:"zodconstructor",hierarchy:[{name:"ZodConstructor",id:"zodconstructor"}],kind:"Interface",content:"```typescript\nexport interface ZodConstructor \n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/types.ts",mdFile:"qwik-city.zodconstructor.md"},{name:"zodQrl",id:"zodqrl",hierarchy:[{name:"zodQrl",id:"zodqrl"}],kind:"Variable",content:"```typescript\nzodQrl: ZodConstructorQRL\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/runtime/src/server-functions.ts",mdFile:"qwik-city.zodqrl.md"}],m={id:p,package:"@builder.io/qwik-city",members:l},u="qwik-city-middleware-azure-swa",h=[{name:"createQwikCity",id:"createqwikcity",hierarchy:[{name:"createQwikCity",id:"createqwikcity"}],kind:"Function",content:`\`\`\`typescript
export declare function createQwikCity(opts: QwikCityAzureOptions): AzureFunction;
\`\`\`


|  Parameter | Type | Description |
|  --- | --- | --- |
|  opts | [QwikCityAzureOptions](#qwikcityazureoptions) |  |

**Returns:**

AzureFunction`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/azure-swa/index.ts",mdFile:"qwik-city.createqwikcity.md"},{name:"PlatformAzure",id:"platformazure",hierarchy:[{name:"PlatformAzure",id:"platformazure"}],kind:"Interface",content:"```typescript\nexport interface PlatformAzure extends Partial<Context> \n```\n**Extends:** Partial&lt;Context&gt;",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/azure-swa/index.ts",mdFile:"qwik-city.platformazure.md"},{name:"QwikCityAzureOptions",id:"qwikcityazureoptions",hierarchy:[{name:"QwikCityAzureOptions",id:"qwikcityazureoptions"}],kind:"Interface",content:"```typescript\nexport interface QwikCityAzureOptions extends ServerRenderOptions \n```\n**Extends:** ServerRenderOptions",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/azure-swa/index.ts",mdFile:"qwik-city.qwikcityazureoptions.md"}],y={id:u,package:"@builder.io/qwik-city/middleware/azure-swa",members:h},k="qwik-city-middleware-cloudflare-pages",g=[{name:"createQwikCity",id:"createqwikcity",hierarchy:[{name:"createQwikCity",id:"createqwikcity"}],kind:"Function",content:`\`\`\`typescript
export declare function createQwikCity(opts: QwikCityCloudflarePagesOptions): (request: PlatformCloudflarePages['request'], env: Record<string, any> & {
    ASSETS: {
        fetch: (req: Request) => Response;
    };
}, ctx: PlatformCloudflarePages['ctx']) => Promise<Response>;
\`\`\`


|  Parameter | Type | Description |
|  --- | --- | --- |
|  opts | [QwikCityCloudflarePagesOptions](#qwikcitycloudflarepagesoptions) |  |

**Returns:**

(request: [PlatformCloudflarePages](#platformcloudflarepages)<!-- -->\\['request'\\], env: Record&lt;string, any&gt; &amp; { ASSETS: { fetch: (req: Request) =&gt; Response; }; }, ctx: [PlatformCloudflarePages](#platformcloudflarepages)<!-- -->\\['ctx'\\]) =&gt; Promise&lt;Response&gt;`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/cloudflare-pages/index.ts",mdFile:"qwik-city.createqwikcity.md"},{name:"PlatformCloudflarePages",id:"platformcloudflarepages",hierarchy:[{name:"PlatformCloudflarePages",id:"platformcloudflarepages"}],kind:"Interface",content:`\`\`\`typescript
export interface PlatformCloudflarePages 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [ctx](#) |  | { waitUntil: (promise: Promise&lt;any&gt;) =&gt; void; } |  |
|  [env](#) |  | Record&lt;string, any&gt; |  |
|  [request](#) |  | Request |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/cloudflare-pages/index.ts",mdFile:"qwik-city.platformcloudflarepages.md"},{name:"QwikCityCloudflarePagesOptions",id:"qwikcitycloudflarepagesoptions",hierarchy:[{name:"QwikCityCloudflarePagesOptions",id:"qwikcitycloudflarepagesoptions"}],kind:"Interface",content:"```typescript\nexport interface QwikCityCloudflarePagesOptions extends ServerRenderOptions \n```\n**Extends:** ServerRenderOptions",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/cloudflare-pages/index.ts",mdFile:"qwik-city.qwikcitycloudflarepagesoptions.md"}],w={id:k,package:"@builder.io/qwik-city/middleware/cloudflare-pages",members:g},f="qwik-city-middleware-netlify-edge",q=[{name:"createQwikCity",id:"createqwikcity",hierarchy:[{name:"createQwikCity",id:"createqwikcity"}],kind:"Function",content:`\`\`\`typescript
export declare function createQwikCity(opts: QwikCityNetlifyOptions): (request: Request, context: Context) => Promise<Response>;
\`\`\`


|  Parameter | Type | Description |
|  --- | --- | --- |
|  opts | [QwikCityNetlifyOptions](#qwikcitynetlifyoptions) |  |

**Returns:**

(request: Request, context: Context) =&gt; Promise&lt;Response&gt;`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/netlify-edge/index.ts",mdFile:"qwik-city.createqwikcity.md"},{name:"PlatformNetlify",id:"platformnetlify",hierarchy:[{name:"PlatformNetlify",id:"platformnetlify"}],kind:"Interface",content:"```typescript\nexport interface PlatformNetlify extends Partial<Omit<Context, 'next' | 'cookies'>> \n```\n**Extends:** Partial&lt;Omit&lt;Context, 'next' \\| 'cookies'&gt;&gt;",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/netlify-edge/index.ts",mdFile:"qwik-city.platformnetlify.md"},{name:"QwikCityNetlifyOptions",id:"qwikcitynetlifyoptions",hierarchy:[{name:"QwikCityNetlifyOptions",id:"qwikcitynetlifyoptions"}],kind:"Interface",content:"```typescript\nexport interface QwikCityNetlifyOptions extends ServerRenderOptions \n```\n**Extends:** ServerRenderOptions",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/netlify-edge/index.ts",mdFile:"qwik-city.qwikcitynetlifyoptions.md"}],b={id:f,package:"@builder.io/qwik-city/middleware/netlify-edge",members:q},v="qwik-city-middleware-node",O=[{name:"createQwikCity",id:"createqwikcity",hierarchy:[{name:"createQwikCity",id:"createqwikcity"}],kind:"Function",content:`\`\`\`typescript
export declare function createQwikCity(opts: QwikCityNodeRequestOptions): {
    router: (req: IncomingMessage, res: ServerResponse, next: NodeRequestNextFunction) => Promise<void>;
    notFound: (req: IncomingMessage, res: ServerResponse, next: (e: any) => void) => Promise<void>;
    staticFile: (req: IncomingMessage, res: ServerResponse, next: (e?: any) => void) => Promise<void>;
};
\`\`\`


|  Parameter | Type | Description |
|  --- | --- | --- |
|  opts | [QwikCityNodeRequestOptions](#qwikcitynoderequestoptions) |  |

**Returns:**

{ router: (req: IncomingMessage, res: ServerResponse, next: [NodeRequestNextFunction](#noderequestnextfunction)<!-- -->) =&gt; Promise&lt;void&gt;; notFound: (req: IncomingMessage, res: ServerResponse, next: (e: any) =&gt; void) =&gt; Promise&lt;void&gt;; staticFile: (req: IncomingMessage, res: ServerResponse, next: (e?: any) =&gt; void) =&gt; Promise&lt;void&gt;; }`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/node/index.ts",mdFile:"qwik-city.createqwikcity.md"},{name:"NodeRequestNextFunction",id:"noderequestnextfunction",hierarchy:[{name:"NodeRequestNextFunction",id:"noderequestnextfunction"}],kind:"Interface",content:"```typescript\nexport interface NodeRequestNextFunction \n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/node/index.ts",mdFile:"qwik-city.noderequestnextfunction.md"},{name:"PlatformNode",id:"platformnode",hierarchy:[{name:"PlatformNode",id:"platformnode"}],kind:"Interface",content:`\`\`\`typescript
export interface PlatformNode 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [incomingMessage?](#) |  | IncomingMessage | _(Optional)_ |
|  [node?](#) |  | string | _(Optional)_ |
|  [ssr?](#) |  | true | _(Optional)_ |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/node/index.ts",mdFile:"qwik-city.platformnode.md"},{name:"QwikCityNodeRequestOptions",id:"qwikcitynoderequestoptions",hierarchy:[{name:"QwikCityNodeRequestOptions",id:"qwikcitynoderequestoptions"}],kind:"Interface",content:`\`\`\`typescript
export interface QwikCityNodeRequestOptions extends ServerRenderOptions 
\`\`\`
**Extends:** ServerRenderOptions


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [origin?](#) |  | string | <p>_(Optional)_ Origin of the server, used to resolve relative URLs and validate the request origin against CSRF attacks.</p><p>When not specified, it defaults to the <code>ORIGIN</code> environment variable (if set) or derived from the incoming request.</p> |
|  [static?](#) |  | { root?: string; cacheControl?: string; } | _(Optional)_ Options for serving static files |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/node/index.ts",mdFile:"qwik-city.qwikcitynoderequestoptions.md"}],x={id:v,package:"@builder.io/qwik-city/middleware/node",members:O},T="qwik-city-middleware-request-handler",S=[{name:"AbortMessage",id:"abortmessage",hierarchy:[{name:"AbortMessage",id:"abortmessage"}],kind:"Class",content:"```typescript\nexport declare class AbortMessage \n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/request-handler/redirect-handler.ts",mdFile:"qwik-city.abortmessage.md"},{name:"CacheControl",id:"cachecontrol",hierarchy:[{name:"CacheControl",id:"cachecontrol"}],kind:"TypeAlias",content:"```typescript\nexport type CacheControl = CacheControlOptions | number | 'day' | 'week' | 'month' | 'year' | 'no-cache' | 'immutable' | 'private';\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/request-handler/types.ts",mdFile:"qwik-city.cachecontrol.md"},{name:"Cookie",id:"cookie",hierarchy:[{name:"Cookie",id:"cookie"}],kind:"Interface",content:`\`\`\`typescript
export interface Cookie 
\`\`\`


|  Method | Description |
|  --- | --- |
|  [delete(name, options)](#cookie-delete) | Deletes cookie value by name using the <code>Response</code> cookie header. |
|  [get(name)](#cookie-get) | Gets a <code>Request</code> cookie header value by name. |
|  [getAll()](#cookie-getall) | Gets all <code>Request</code> cookie headers. |
|  [has(name)](#cookie-has) | Checks if the <code>Request</code> cookie header name exists. |
|  [headers()](#cookie-headers) | Returns an array of all the set <code>Response</code> <code>Set-Cookie</code> header values. |
|  [set(name, value, options)](#cookie-set) | Sets a <code>Response</code> cookie header using the <code>Set-Cookie</code> header. |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/request-handler/types.ts",mdFile:"qwik-city.cookie.md"},{name:"CookieOptions",id:"cookieoptions",hierarchy:[{name:"CookieOptions",id:"cookieoptions"}],kind:"Interface",content:`https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie


\`\`\`typescript
export interface CookieOptions 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [domain?](#) |  | string | _(Optional)_ Defines the host to which the cookie will be sent. If omitted, this attribute defaults to the host of the current document URL, not including subdomains. |
|  [expires?](#) |  | Date \\| string | _(Optional)_ Indicates the maximum lifetime of the cookie as an HTTP-date timestamp. If both <code>expires</code> and <code>maxAge</code> are set, <code>maxAge</code> has precedence. |
|  [httpOnly?](#) |  | boolean | _(Optional)_ Forbids JavaScript from accessing the cookie, for example, through the <code>document.cookie</code> property. |
|  [maxAge?](#) |  | number \\| \\[number, 'seconds' \\| 'minutes' \\| 'hours' \\| 'days' \\| 'weeks'\\] | _(Optional)_ Indicates the number of seconds until the cookie expires. A zero or negative number will expire the cookie immediately. If both <code>expires</code> and <code>maxAge</code> are set, <code>maxAge</code> has precedence. You can also use the array syntax to set the max-age using minutes, hours, days or weeks. For example, <code>{ maxAge: [3, &quot;days&quot;] }</code> would set the cookie to expire in 3 days. |
|  [path?](#) |  | string | _(Optional)_ Indicates the path that must exist in the requested URL for the browser to send the Cookie header. |
|  [sameSite?](#) |  | 'strict' \\| 'lax' \\| 'none' \\| boolean | _(Optional)_ Controls whether or not a cookie is sent with cross-site requests, providing some protection against cross-site request forgery attacks (CSRF). |
|  [secure?](#) |  | boolean | _(Optional)_ Indicates that the cookie is sent to the server only when a request is made with the <code>https:</code> scheme (except on localhost) |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/request-handler/types.ts",mdFile:"qwik-city.cookieoptions.md"},{name:"CookieValue",id:"cookievalue",hierarchy:[{name:"CookieValue",id:"cookievalue"}],kind:"Interface",content:`\`\`\`typescript
export interface CookieValue 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [json](#) |  | &lt;T = unknown&gt;() =&gt; T |  |
|  [number](#) |  | () =&gt; number |  |
|  [value](#) |  | string |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/request-handler/types.ts",mdFile:"qwik-city.cookievalue.md"},{name:"DeferReturn",id:"deferreturn",hierarchy:[{name:"DeferReturn",id:"deferreturn"}],kind:"TypeAlias",content:"```typescript\nexport type DeferReturn<T> = () => Promise<T>;\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/request-handler/types.ts",mdFile:"qwik-city.deferreturn.md"},{name:"delete",id:"cookie-delete",hierarchy:[{name:"Cookie",id:"cookie-delete"},{name:"delete",id:"cookie-delete"}],kind:"MethodSignature",content:`Deletes cookie value by name using the \`Response\` cookie header.


\`\`\`typescript
delete(name: string, options?: Pick<CookieOptions, 'path' | 'domain'>): void;
\`\`\`


|  Parameter | Type | Description |
|  --- | --- | --- |
|  name | string |  |
|  options | Pick&lt;[CookieOptions](#cookieoptions)<!-- -->, 'path' \\| 'domain'&gt; | _(Optional)_ |

**Returns:**

void`,mdFile:"qwik-city.cookie.delete.md"},{name:"get",id:"cookie-get",hierarchy:[{name:"Cookie",id:"cookie-get"},{name:"get",id:"cookie-get"}],kind:"MethodSignature",content:`Gets a \`Request\` cookie header value by name.


\`\`\`typescript
get(name: string): CookieValue | null;
\`\`\`


|  Parameter | Type | Description |
|  --- | --- | --- |
|  name | string |  |

**Returns:**

[CookieValue](#cookievalue) \\| null`,mdFile:"qwik-city.cookie.get.md"},{name:"getAll",id:"cookie-getall",hierarchy:[{name:"Cookie",id:"cookie-getall"},{name:"getAll",id:"cookie-getall"}],kind:"MethodSignature",content:"Gets all `Request` cookie headers.\n\n\n```typescript\ngetAll(): Record<string, CookieValue>;\n```\n**Returns:**\n\nRecord&lt;string, [CookieValue](#cookievalue)<!-- -->&gt;",mdFile:"qwik-city.cookie.getall.md"},{name:"getErrorHtml",id:"geterrorhtml",hierarchy:[{name:"getErrorHtml",id:"geterrorhtml"}],kind:"Function",content:`\`\`\`typescript
export declare function getErrorHtml(status: number, e: any): string;
\`\`\`


|  Parameter | Type | Description |
|  --- | --- | --- |
|  status | number |  |
|  e | any |  |

**Returns:**

string`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/request-handler/error-handler.ts",mdFile:"qwik-city.geterrorhtml.md"},{name:"has",id:"cookie-has",hierarchy:[{name:"Cookie",id:"cookie-has"},{name:"has",id:"cookie-has"}],kind:"MethodSignature",content:`Checks if the \`Request\` cookie header name exists.


\`\`\`typescript
has(name: string): boolean;
\`\`\`


|  Parameter | Type | Description |
|  --- | --- | --- |
|  name | string |  |

**Returns:**

boolean`,mdFile:"qwik-city.cookie.has.md"},{name:"headers",id:"cookie-headers",hierarchy:[{name:"Cookie",id:"cookie-headers"},{name:"headers",id:"cookie-headers"}],kind:"MethodSignature",content:"Returns an array of all the set `Response` `Set-Cookie` header values.\n\n\n```typescript\nheaders(): string[];\n```\n**Returns:**\n\nstring\\[\\]",mdFile:"qwik-city.cookie.headers.md"},{name:"mergeHeadersCookies",id:"mergeheaderscookies",hierarchy:[{name:"mergeHeadersCookies",id:"mergeheaderscookies"}],kind:"Variable",content:"```typescript\nmergeHeadersCookies: (headers: Headers, cookies: CookieInterface) => Headers\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/request-handler/cookie.ts",mdFile:"qwik-city.mergeheaderscookies.md"},{name:"RedirectMessage",id:"redirectmessage",hierarchy:[{name:"RedirectMessage",id:"redirectmessage"}],kind:"Class",content:"```typescript\nexport declare class RedirectMessage extends AbortMessage \n```\n**Extends:** [AbortMessage](#abortmessage)",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/request-handler/redirect-handler.ts",mdFile:"qwik-city.redirectmessage.md"},{name:"RequestEvent",id:"requestevent",hierarchy:[{name:"RequestEvent",id:"requestevent"}],kind:"Interface",content:`\`\`\`typescript
export interface RequestEvent<PLATFORM = QwikCityPlatform> extends RequestEventCommon<PLATFORM> 
\`\`\`
**Extends:** [RequestEventCommon](#requesteventcommon)<!-- -->&lt;PLATFORM&gt;


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [exited](#) | <code>readonly</code> | boolean |  |
|  [getWritableStream](#) | <code>readonly</code> | () =&gt; WritableStream&lt;Uint8Array&gt; | Low-level access to write to the HTTP response stream. Once <code>getWritableStream()</code> is called, the status and headers can no longer be modified and will be sent over the network. |
|  [headersSent](#) | <code>readonly</code> | boolean |  |
|  [next](#) | <code>readonly</code> | () =&gt; Promise&lt;void&gt; |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/request-handler/types.ts",mdFile:"qwik-city.requestevent.md"},{name:"RequestEventAction",id:"requesteventaction",hierarchy:[{name:"RequestEventAction",id:"requesteventaction"}],kind:"Interface",content:`\`\`\`typescript
export interface RequestEventAction<PLATFORM = QwikCityPlatform> extends RequestEventCommon<PLATFORM> 
\`\`\`
**Extends:** [RequestEventCommon](#requesteventcommon)<!-- -->&lt;PLATFORM&gt;


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [fail](#) |  | &lt;T extends Record&lt;string, any&gt;&gt;(status: number, returnData: T) =&gt; FailReturn&lt;T&gt; |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/request-handler/types.ts",mdFile:"qwik-city.requesteventaction.md"},{name:"RequestEventBase",id:"requesteventbase",hierarchy:[{name:"RequestEventBase",id:"requesteventbase"}],kind:"Interface",content:`\`\`\`typescript
export interface RequestEventBase<PLATFORM = QwikCityPlatform> 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [basePathname](#) | <code>readonly</code> | string | The base pathname of the request, which can be configured at build time. Defaults to <code>/</code>. |
|  [cacheControl](#) | <code>readonly</code> | (cacheControl: [CacheControl](#cachecontrol)<!-- -->) =&gt; void | <p>Convenience method to set the Cache-Control header.</p><p>https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control</p> |
|  [cookie](#) | <code>readonly</code> | [Cookie](#cookie) | <p>HTTP request and response cookie. Use the <code>get()</code> method to retrieve a request cookie value. Use the <code>set()</code> method to set a response cookie value.</p><p>https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies</p> |
|  [env](#) | <code>readonly</code> | EnvGetter | Platform provided environment variables. |
|  [headers](#) | <code>readonly</code> | Headers | <p>HTTP response headers. Notice it will be empty until you first add a header. If you want to read the request headers, use <code>request.headers</code> instead.</p><p>https://developer.mozilla.org/en-US/docs/Glossary/Response\\_header</p> |
|  [method](#) | <code>readonly</code> | string | <p>HTTP request method.</p><p>https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods</p> |
|  [params](#) | <code>readonly</code> | Readonly&lt;Record&lt;string, string&gt;&gt; | URL path params which have been parsed from the current url pathname segments. Use <code>query</code> to instead retrieve the query string search params. |
|  [parseBody](#) | <code>readonly</code> | () =&gt; Promise&lt;unknown&gt; | <p>This method will check the request headers for a <code>Content-Type</code> header and parse the body accordingly. It supports <code>application/json</code>, <code>application/x-www-form-urlencoded</code>, and <code>multipart/form-data</code> content types.</p><p>If the <code>Content-Type</code> header is not set, it will return <code>null</code>.</p> |
|  [pathname](#) | <code>readonly</code> | string | <p>URL pathname. Does not include the protocol, domain, query string (search params) or hash.</p><p>https://developer.mozilla.org/en-US/docs/Web/API/URL/pathname</p> |
|  [platform](#) | <code>readonly</code> | PLATFORM | Platform specific data and functions |
|  [query](#) | <code>readonly</code> | URLSearchParams | <p>URL Query Strings (URL Search Params). Use <code>params</code> to instead retrieve the route params found in the url pathname.</p><p>https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams</p> |
|  [request](#) | <code>readonly</code> | Request | HTTP request information. |
|  [sharedMap](#) | <code>readonly</code> | Map&lt;string, any&gt; | Shared Map across all the request handlers. Every HTTP request will get a new instance of the shared map. The shared map is useful for sharing data between request handlers. |
|  [url](#) | <code>readonly</code> | URL | HTTP request URL. |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/request-handler/types.ts",mdFile:"qwik-city.requesteventbase.md"},{name:"RequestEventCommon",id:"requesteventcommon",hierarchy:[{name:"RequestEventCommon",id:"requesteventcommon"}],kind:"Interface",content:`\`\`\`typescript
export interface RequestEventCommon<PLATFORM = QwikCityPlatform> extends RequestEventBase<PLATFORM> 
\`\`\`
**Extends:** [RequestEventBase](#requesteventbase)<!-- -->&lt;PLATFORM&gt;


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [error](#) | <code>readonly</code> | (statusCode: ErrorCodes, message: string) =&gt; ErrorResponse | When called, the response will immediately end with the given status code. This could be useful to end a response with <code>404</code>, and use the 404 handler in the routes directory. See https://developer.mozilla.org/en-US/docs/Web/HTTP/Status for which status code should be used. |
|  [exit](#) | <code>readonly</code> | () =&gt; [AbortMessage](#abortmessage) |  |
|  [html](#) | <code>readonly</code> | (statusCode: StatusCodes, html: string) =&gt; [AbortMessage](#abortmessage) | Convenience method to send an HTML body response. The response will be automatically set the <code>Content-Type</code> header to<code>text/html; charset=utf-8</code>. An <code>html()</code> response can only be called once. |
|  [json](#) | <code>readonly</code> | (statusCode: StatusCodes, data: any) =&gt; [AbortMessage](#abortmessage) | Convenience method to JSON stringify the data and send it in the response. The response will be automatically set the <code>Content-Type</code> header to <code>application/json; charset=utf-8</code>. A <code>json()</code> response can only be called once. |
|  [locale](#) | <code>readonly</code> | (local?: string) =&gt; string | <p>Which locale the content is in.</p><p>The locale value can be retrieved from selected methods using <code>getLocale()</code>:</p> |
|  [redirect](#) | <code>readonly</code> | (statusCode: RedirectCode, url: string) =&gt; [RedirectMessage](#redirectmessage) | <p>URL to redirect to. When called, the response will immediately end with the correct redirect status and headers.</p><p>https://developer.mozilla.org/en-US/docs/Web/HTTP/Redirections</p> |
|  [send](#) | <code>readonly</code> | SendMethod | Send a body response. The <code>Content-Type</code> response header is not automatically set when using <code>send()</code> and must be set manually. A <code>send()</code> response can only be called once. |
|  [status](#) | <code>readonly</code> | (statusCode?: StatusCodes) =&gt; number | <p>HTTP response status code. Sets the status code when called with an argument. Always returns the status code, so calling <code>status()</code> without an argument will can be used to return the current status code.</p><p>https://developer.mozilla.org/en-US/docs/Web/HTTP/Status</p> |
|  [text](#) | <code>readonly</code> | (statusCode: StatusCodes, text: string) =&gt; [AbortMessage](#abortmessage) | Convenience method to send an text body response. The response will be automatically set the <code>Content-Type</code> header to<code>text/plain; charset=utf-8</code>. An <code>text()</code> response can only be called once. |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/request-handler/types.ts",mdFile:"qwik-city.requesteventcommon.md"},{name:"RequestEventLoader",id:"requesteventloader",hierarchy:[{name:"RequestEventLoader",id:"requesteventloader"}],kind:"Interface",content:`\`\`\`typescript
export interface RequestEventLoader<PLATFORM = QwikCityPlatform> extends RequestEventAction<PLATFORM> 
\`\`\`
**Extends:** [RequestEventAction](#requesteventaction)<!-- -->&lt;PLATFORM&gt;


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [defer](#) |  | &lt;T&gt;(returnData: Promise&lt;T&gt; \\| (() =&gt; Promise&lt;T&gt;)) =&gt; [DeferReturn](#deferreturn)<!-- -->&lt;T&gt; |  |
|  [resolveValue](#) |  | [ResolveValue](#resolvevalue) |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/request-handler/types.ts",mdFile:"qwik-city.requesteventloader.md"},{name:"requestHandler",id:"requesthandler",hierarchy:[{name:"requestHandler",id:"requesthandler"}],kind:"Function",content:"```typescript\nexport type RequestHandler<PLATFORM = QwikCityPlatform> = (ev: RequestEvent<PLATFORM>) => Promise<void> | void;\n```\n**References:** [RequestEvent](#requestevent)",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/request-handler/request-handler.ts",mdFile:"qwik-city.requesthandler.md"},{name:"RequestHandler",id:"requesthandler",hierarchy:[{name:"RequestHandler",id:"requesthandler"}],kind:"TypeAlias",content:"```typescript\nexport type RequestHandler<PLATFORM = QwikCityPlatform> = (ev: RequestEvent<PLATFORM>) => Promise<void> | void;\n```\n**References:** [RequestEvent](#requestevent)",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/request-handler/types.ts",mdFile:"qwik-city.requesthandler.md"},{name:"ResolveSyncValue",id:"resolvesyncvalue",hierarchy:[{name:"ResolveSyncValue",id:"resolvesyncvalue"}],kind:"Interface",content:"```typescript\nexport interface ResolveSyncValue \n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/request-handler/types.ts",mdFile:"qwik-city.resolvesyncvalue.md"},{name:"ResolveValue",id:"resolvevalue",hierarchy:[{name:"ResolveValue",id:"resolvevalue"}],kind:"Interface",content:"```typescript\nexport interface ResolveValue \n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/request-handler/types.ts",mdFile:"qwik-city.resolvevalue.md"},{name:"ServerRenderOptions",id:"serverrenderoptions",hierarchy:[{name:"ServerRenderOptions",id:"serverrenderoptions"}],kind:"Interface",content:`\`\`\`typescript
export interface ServerRenderOptions extends RenderOptions 
\`\`\`
**Extends:** RenderOptions


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [checkOrigin?](#) |  | boolean | <p>_(Optional)_ Protection against cross-site request forgery (CSRF) attacks.</p><p>When <code>true</code>, for every incoming POST, PUT, PATCH, or DELETE form submissions, the request origin is checked to match the server's origin.</p><p>Be careful when disabling this option as it may lead to CSRF attacks.</p><p>Defaults to <code>true</code>.</p> |
|  [qwikCityPlan](#) |  | QwikCityPlan |  |
|  [render](#) |  | Render |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/request-handler/types.ts",mdFile:"qwik-city.serverrenderoptions.md"},{name:"ServerRequestEvent",id:"serverrequestevent",hierarchy:[{name:"ServerRequestEvent",id:"serverrequestevent"}],kind:"Interface",content:`Request event created by the server.


\`\`\`typescript
export interface ServerRequestEvent<T = any> 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [env](#) |  | EnvGetter |  |
|  [getWritableStream](#) |  | [ServerResponseHandler](#serverresponsehandler)<!-- -->&lt;T&gt; |  |
|  [locale](#) |  | string \\| undefined |  |
|  [mode](#) |  | [ServerRequestMode](#serverrequestmode) |  |
|  [platform](#) |  | any |  |
|  [request](#) |  | Request |  |
|  [url](#) |  | URL |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/request-handler/types.ts",mdFile:"qwik-city.serverrequestevent.md"},{name:"ServerRequestMode",id:"serverrequestmode",hierarchy:[{name:"ServerRequestMode",id:"serverrequestmode"}],kind:"TypeAlias",content:"```typescript\nexport type ServerRequestMode = 'dev' | 'static' | 'server';\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/request-handler/types.ts",mdFile:"qwik-city.serverrequestmode.md"},{name:"ServerResponseHandler",id:"serverresponsehandler",hierarchy:[{name:"ServerResponseHandler",id:"serverresponsehandler"}],kind:"TypeAlias",content:"```typescript\nexport type ServerResponseHandler<T = any> = (status: number, headers: Headers, cookies: Cookie, resolve: (response: T) => void, requestEv: RequestEventInternal) => WritableStream<Uint8Array>;\n```\n**References:** [Cookie](#cookie)",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/request-handler/types.ts",mdFile:"qwik-city.serverresponsehandler.md"},{name:"set",id:"cookie-set",hierarchy:[{name:"Cookie",id:"cookie-set"},{name:"set",id:"cookie-set"}],kind:"MethodSignature",content:`Sets a \`Response\` cookie header using the \`Set-Cookie\` header.


\`\`\`typescript
set(name: string, value: string | number | Record<string, any>, options?: CookieOptions): void;
\`\`\`


|  Parameter | Type | Description |
|  --- | --- | --- |
|  name | string |  |
|  value | string \\| number \\| Record&lt;string, any&gt; |  |
|  options | [CookieOptions](#cookieoptions) | _(Optional)_ |

**Returns:**

void`,mdFile:"qwik-city.cookie.set.md"}],R={id:T,package:"@builder.io/qwik-city/middleware/request-handler",members:S},I="qwik-city-middleware-vercel-edge",_=[{name:"createQwikCity",id:"createqwikcity",hierarchy:[{name:"createQwikCity",id:"createqwikcity"}],kind:"Function",content:`\`\`\`typescript
export declare function createQwikCity(opts: QwikCityVercelEdgeOptions): (request: Request) => Promise<Response>;
\`\`\`


|  Parameter | Type | Description |
|  --- | --- | --- |
|  opts | [QwikCityVercelEdgeOptions](#qwikcityverceledgeoptions) |  |

**Returns:**

(request: Request) =&gt; Promise&lt;Response&gt;`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/vercel-edge/index.ts",mdFile:"qwik-city.createqwikcity.md"},{name:"PlatformVercel",id:"platformvercel",hierarchy:[{name:"PlatformVercel",id:"platformvercel"}],kind:"Interface",content:"```typescript\nexport interface PlatformVercel \n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/vercel-edge/index.ts",mdFile:"qwik-city.platformvercel.md"},{name:"QwikCityVercelEdgeOptions",id:"qwikcityverceledgeoptions",hierarchy:[{name:"QwikCityVercelEdgeOptions",id:"qwikcityverceledgeoptions"}],kind:"Interface",content:"```typescript\nexport interface QwikCityVercelEdgeOptions extends ServerRenderOptions \n```\n**Extends:** ServerRenderOptions",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/vercel-edge/index.ts",mdFile:"qwik-city.qwikcityverceledgeoptions.md"}],P={id:I,package:"@builder.io/qwik-city/middleware/vercel-edge",members:_},F="qwik-city-static",C=[{name:"generate",id:"generate",hierarchy:[{name:"generate",id:"generate"}],kind:"Function",content:`Use this function when SSG should be generated from another module, such as a Vite plugin. This function's should be passed the paths of the entry module and Qwik City Plan.


\`\`\`typescript
export declare function generate(opts: StaticGenerateOptions): Promise<StaticGenerateResult>;
\`\`\`


|  Parameter | Type | Description |
|  --- | --- | --- |
|  opts | [StaticGenerateOptions](#staticgenerateoptions) |  |

**Returns:**

Promise&lt;[StaticGenerateResult](#staticgenerateresult)<!-- -->&gt;`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/static/index.ts",mdFile:"qwik-city.generate.md"},{name:"StaticGenerateOptions",id:"staticgenerateoptions",hierarchy:[{name:"StaticGenerateOptions",id:"staticgenerateoptions"}],kind:"Interface",content:`\`\`\`typescript
export interface StaticGenerateOptions extends StaticGenerateRenderOptions 
\`\`\`
**Extends:** [StaticGenerateRenderOptions](#staticgeneraterenderoptions)


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [basePathname?](#) |  | string | _(Optional)_ Defaults to <code>/</code> |
|  [qwikCityPlanModulePath](#) |  | string | Path to the Qwik City Plan module exporting the default <code>@qwik-city-plan</code>. |
|  [renderModulePath](#) |  | string | Path to the SSR module exporting the default render function. In most cases it'll be <code>./src/entry.ssr.tsx</code>. |
|  [rootDir?](#) |  | string | _(Optional)_ |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/static/types.ts",mdFile:"qwik-city.staticgenerateoptions.md"},{name:"StaticGenerateRenderOptions",id:"staticgeneraterenderoptions",hierarchy:[{name:"StaticGenerateRenderOptions",id:"staticgeneraterenderoptions"}],kind:"Interface",content:`\`\`\`typescript
export interface StaticGenerateRenderOptions extends RenderOptions 
\`\`\`
**Extends:** RenderOptions


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [emit404Pages?](#) |  | boolean | _(Optional)_ Set to <code>false</code> if the static build should not write custom or default <code>404.html</code> pages. Defaults to <code>true</code>. |
|  [emitData?](#) |  | boolean | _(Optional)_ Set to <code>false</code> if the generated <code>q-data.json</code> data files should not be written to disk. Defaults to <code>true</code>. |
|  [emitHtml?](#) |  | boolean | _(Optional)_ Set to <code>false</code> if the generated static HTML files should not be written to disk. Setting to <code>false</code> is useful if the SSG should only write the <code>q-data.json</code> files to disk. Defaults to <code>true</code>. |
|  [exclude?](#) |  | string\\[\\] | _(Optional)_ Defines file system routes relative to the source <code>routes</code> directory that should not be static generated. Accepts wildcard behavior. This should not include the "base" pathname. <code>exclude</code> always takes priority over <code>include</code>. |
|  [include?](#) |  | string\\[\\] | _(Optional)_ Defines file system routes relative to the source <code>routes</code> directory that should be static generated. Accepts wildcard behavior. This should not include the "base" pathname. If not provided, all routes will be static generated. <code>exclude</code> always takes priority over <code>include</code>. |
|  [log?](#) |  | 'debug' | _(Optional)_ Log level. |
|  [maxTasksPerWorker?](#) |  | number | _(Optional)_ Maximum number of tasks to be running at one time per worker. Defaults to <code>20</code>. |
|  [maxWorkers?](#) |  | number | _(Optional)_ Maximum number of workers to use while generating the static pages. Defaults to the number of CPUs available. |
|  [origin](#) |  | string | <p>The URL <code>origin</code>, which is a combination of the scheme (protocol) and hostname (domain). For example, <code>https://qwik.builder.io</code> has the protocol <code>https://</code> and domain <code>qwik.builder.io</code>. However, the <code>origin</code> does not include a <code>pathname</code>.</p><p>The <code>origin</code> is used to provide a full URL during Static Site Generation (SSG), and to simulate a complete URL rather than just the <code>pathname</code>. For example, in order to render a correct canonical tag URL or URLs within the <code>sitemap.xml</code>, the <code>origin</code> must be provided too.</p><p>If the site also starts with a pathname other than <code>/</code>, please use the <code>basePathname</code> option in the Qwik City config options.</p> |
|  [outDir](#) |  | string | File system directory where the static files should be written. |
|  [sitemapOutFile?](#) |  | string \\| null | _(Optional)_ File system path to write the <code>sitemap.xml</code> to. Defaults to <code>sitemap.xml</code> and written to the root of the <code>outDir</code>. Setting to <code>null</code> will prevent the sitemap from being created. |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/static/types.ts",mdFile:"qwik-city.staticgeneraterenderoptions.md"},{name:"StaticGenerateResult",id:"staticgenerateresult",hierarchy:[{name:"StaticGenerateResult",id:"staticgenerateresult"}],kind:"Interface",content:`\`\`\`typescript
export interface StaticGenerateResult 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [duration](#) |  | number |  |
|  [errors](#) |  | number |  |
|  [rendered](#) |  | number |  |
|  [staticPaths](#) |  | string\\[\\] |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/static/types.ts",mdFile:"qwik-city.staticgenerateresult.md"}],E={id:F,package:"@builder.io/qwik-city/static",members:C},D="qwik-city-vite-azure-swa",M=[{name:"azureSwaAdapter",id:"azureswaadapter",hierarchy:[{name:"azureSwaAdapter",id:"azureswaadapter"}],kind:"Function",content:`\`\`\`typescript
export declare function azureSwaAdapter(opts?: AzureSwaAdapterOptions): any;
\`\`\`


|  Parameter | Type | Description |
|  --- | --- | --- |
|  opts | [AzureSwaAdapterOptions](#azureswaadapteroptions) | _(Optional)_ |

**Returns:**

any`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/adapters/azure-swa/vite/index.ts",mdFile:"qwik-city.azureswaadapter.md"},{name:"AzureSwaAdapterOptions",id:"azureswaadapteroptions",hierarchy:[{name:"AzureSwaAdapterOptions",id:"azureswaadapteroptions"}],kind:"Interface",content:"```typescript\nexport interface AzureSwaAdapterOptions extends ServerAdapterOptions \n```\n**Extends:** ServerAdapterOptions",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/adapters/azure-swa/vite/index.ts",mdFile:"qwik-city.azureswaadapteroptions.md"}],U={id:D,package:"@builder.io/qwik-city/vite/azure-swa",members:M},A="qwik-city-vite-cloud-run",B=[{name:"cloudRunAdapter",id:"cloudrunadapter",hierarchy:[{name:"cloudRunAdapter",id:"cloudrunadapter"}],kind:"Function",content:`\`\`\`typescript
export declare function cloudRunAdapter(opts?: CloudRunAdapterOptions): any;
\`\`\`


|  Parameter | Type | Description |
|  --- | --- | --- |
|  opts | [CloudRunAdapterOptions](#cloudrunadapteroptions) | _(Optional)_ |

**Returns:**

any`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/adapters/cloud-run/vite/index.ts",mdFile:"qwik-city.cloudrunadapter.md"},{name:"CloudRunAdapterOptions",id:"cloudrunadapteroptions",hierarchy:[{name:"CloudRunAdapterOptions",id:"cloudrunadapteroptions"}],kind:"Interface",content:"```typescript\nexport interface CloudRunAdapterOptions extends ServerAdapterOptions \n```\n**Extends:** ServerAdapterOptions",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/adapters/cloud-run/vite/index.ts",mdFile:"qwik-city.cloudrunadapteroptions.md"}],Q={id:A,package:"@builder.io/qwik-city/vite/cloud-run",members:B},z="qwik-city-vite-cloudflare-pages",j=[{name:"cloudflarePagesAdapter",id:"cloudflarepagesadapter",hierarchy:[{name:"cloudflarePagesAdapter",id:"cloudflarepagesadapter"}],kind:"Function",content:`\`\`\`typescript
export declare function cloudflarePagesAdapter(opts?: CloudflarePagesAdapterOptions): any;
\`\`\`


|  Parameter | Type | Description |
|  --- | --- | --- |
|  opts | [CloudflarePagesAdapterOptions](#cloudflarepagesadapteroptions) | _(Optional)_ |

**Returns:**

any`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/adapters/cloudflare-pages/vite/index.ts",mdFile:"qwik-city.cloudflarepagesadapter.md"},{name:"CloudflarePagesAdapterOptions",id:"cloudflarepagesadapteroptions",hierarchy:[{name:"CloudflarePagesAdapterOptions",id:"cloudflarepagesadapteroptions"}],kind:"Interface",content:`\`\`\`typescript
export interface CloudflarePagesAdapterOptions extends ServerAdapterOptions 
\`\`\`
**Extends:** ServerAdapterOptions


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [functionRoutes?](#) |  | boolean | <p>_(Optional)_ Determines if the build should generate the function invocation routes <code>_routes.json</code> file.</p><p>https://developers.cloudflare.com/pages/platform/functions/routing/\\#functions-invocation-routes</p><p>Defaults to <code>true</code>.</p> |
|  [staticPaths?](#) |  | string\\[\\] | _(Optional)_ Manually add pathnames that should be treated as static paths and not SSR. For example, when these pathnames are requested, their response should come from a static file, rather than a server-side rendered response. |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/adapters/cloudflare-pages/vite/index.ts",mdFile:"qwik-city.cloudflarepagesadapteroptions.md"}],V={id:z,package:"@builder.io/qwik-city/vite/cloudflare-pages",members:j},L="qwik-city-vite-node-server",N=[],$={id:L,package:"@builder.io/qwik-city/vite/node-server",members:N},H="qwik-city-vite-netlify-edge",J=[{name:"netlifyEdgeAdapter",id:"netlifyedgeadapter",hierarchy:[{name:"netlifyEdgeAdapter",id:"netlifyedgeadapter"}],kind:"Function",content:`\`\`\`typescript
export declare function netlifyEdgeAdapter(opts?: NetlifyEdgeAdapterOptions): any;
\`\`\`


|  Parameter | Type | Description |
|  --- | --- | --- |
|  opts | [NetlifyEdgeAdapterOptions](#netlifyedgeadapteroptions) | _(Optional)_ |

**Returns:**

any`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/adapters/netlify-edge/vite/index.ts",mdFile:"qwik-city.netlifyedgeadapter.md"},{name:"NetlifyEdgeAdapterOptions",id:"netlifyedgeadapteroptions",hierarchy:[{name:"NetlifyEdgeAdapterOptions",id:"netlifyedgeadapteroptions"}],kind:"Interface",content:`\`\`\`typescript
export interface NetlifyEdgeAdapterOptions extends ServerAdapterOptions 
\`\`\`
**Extends:** ServerAdapterOptions


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [excludedPath?](#) |  | string | _(Optional)_ Manually add path pattern that should be excluded from the edge function routes that are created by the 'manifest.json' file. |
|  [functionRoutes?](#) |  | boolean | <p>_(Optional)_ Determines if the build should generate the edge functions declarations <code>manifest.json</code> file.</p><p>https://docs.netlify.com/edge-functions/declarations/</p><p>Defaults to <code>true</code>.</p> |
|  [staticPaths?](#) |  | string\\[\\] | _(Optional)_ Manually add pathnames that should be treated as static paths and not SSR. For example, when these pathnames are requested, their response should come from a static file, rather than a server-side rendered response. |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/adapters/netlify-edge/vite/index.ts",mdFile:"qwik-city.netlifyedgeadapteroptions.md"}],X={id:H,package:"@builder.io/qwik-city/vite/netlify-edge",members:J},G="qwik-city-vite-static",W=[{name:"staticAdapter",id:"staticadapter",hierarchy:[{name:"staticAdapter",id:"staticadapter"}],kind:"Function",content:`\`\`\`typescript
export declare function staticAdapter(opts: StaticGenerateAdapterOptions): any;
\`\`\`


|  Parameter | Type | Description |
|  --- | --- | --- |
|  opts | [StaticGenerateAdapterOptions](#staticgenerateadapteroptions) |  |

**Returns:**

any`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/adapters/static/vite/index.ts",mdFile:"qwik-city.staticadapter.md"},{name:"StaticGenerateAdapterOptions",id:"staticgenerateadapteroptions",hierarchy:[{name:"StaticGenerateAdapterOptions",id:"staticgenerateadapteroptions"}],kind:"Interface",content:"```typescript\nexport interface StaticGenerateAdapterOptions extends Omit<StaticGenerateRenderOptions, 'outDir'> \n```\n**Extends:** Omit&lt;StaticGenerateRenderOptions, 'outDir'&gt;",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/adapters/static/vite/index.ts",mdFile:"qwik-city.staticgenerateadapteroptions.md"}],K={id:G,package:"@builder.io/qwik-city/vite/static",members:W},Y="qwik-city-vite-vercel",Z=[{name:"vercelEdgeAdapter",id:"verceledgeadapter",hierarchy:[{name:"vercelEdgeAdapter",id:"verceledgeadapter"}],kind:"Function",content:`\`\`\`typescript
export declare function vercelEdgeAdapter(opts?: VercelEdgeAdapterOptions): any;
\`\`\`


|  Parameter | Type | Description |
|  --- | --- | --- |
|  opts | [VercelEdgeAdapterOptions](#verceledgeadapteroptions) | _(Optional)_ |

**Returns:**

any`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/adapters/vercel-edge/vite/index.ts",mdFile:"qwik-city.verceledgeadapter.md"},{name:"VercelEdgeAdapterOptions",id:"verceledgeadapteroptions",hierarchy:[{name:"VercelEdgeAdapterOptions",id:"verceledgeadapteroptions"}],kind:"Interface",content:`\`\`\`typescript
export interface VercelEdgeAdapterOptions extends ServerAdapterOptions 
\`\`\`
**Extends:** ServerAdapterOptions


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [outputConfig?](#) |  | boolean | <p>_(Optional)_ Determines if the build should auto-generate the <code>.vercel/output/config.json</code> config.</p><p>Defaults to <code>true</code>.</p> |
|  [staticPaths?](#) |  | string\\[\\] | _(Optional)_ Manually add pathnames that should be treated as static paths and not SSR. For example, when these pathnames are requested, their response should come from a static file, rather than a server-side rendered response. |
|  [vcConfigEntryPoint?](#) |  | string | <p>_(Optional)_ The <code>entrypoint</code> property in the <code>.vc-config.json</code> file. Indicates the initial file where code will be executed for the Edge Function.</p><p>Defaults to <code>entry.vercel-edge.js</code>.</p> |
|  [vcConfigEnvVarsInUse?](#) |  | string\\[\\] | <p>_(Optional)_ The <code>envVarsInUse</code> property in the <code>.vc-config.json</code> file. List of environment variable names that will be available for the Edge Function to utilize.</p><p>Defaults to <code>undefined</code>.</p> |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/adapters/vercel-edge/vite/index.ts",mdFile:"qwik-city.verceledgeadapteroptions.md"}],ee={id:Y,package:"@builder.io/qwik-city/vite/vercel",members:Z},te="qwik-optimizer",ne=[{name:"basename",id:"path-basename",hierarchy:[{name:"Path",id:"path-basename"},{name:"basename",id:"path-basename"}],kind:"MethodSignature",content:`\`\`\`typescript
basename(path: string, ext?: string): string;
\`\`\`


|  Parameter | Type | Description |
|  --- | --- | --- |
|  path | string |  |
|  ext | string | _(Optional)_ |

**Returns:**

string`,mdFile:"qwik.path.basename.md"},{name:"ComponentEntryStrategy",id:"componententrystrategy",hierarchy:[{name:"ComponentEntryStrategy",id:"componententrystrategy"}],kind:"Interface",content:`\`\`\`typescript
export interface ComponentEntryStrategy 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [manual?](#) |  | Record&lt;string, string&gt; | _(Optional)_ |
|  [type](#) |  | 'component' |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/optimizer/src/types.ts",mdFile:"qwik.componententrystrategy.md"},{name:"createOptimizer",id:"createoptimizer",hierarchy:[{name:"createOptimizer",id:"createoptimizer"}],kind:"Variable",content:"```typescript\ncreateOptimizer: (optimizerOptions?: OptimizerOptions) => Promise<Optimizer>\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/optimizer/src/optimizer.ts",mdFile:"qwik.createoptimizer.md"},{name:"Diagnostic",id:"diagnostic",hierarchy:[{name:"Diagnostic",id:"diagnostic"}],kind:"Interface",content:`\`\`\`typescript
export interface Diagnostic 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [category](#) |  | [DiagnosticCategory](#diagnosticcategory) |  |
|  [code](#) |  | string \\| null |  |
|  [file](#) |  | string |  |
|  [highlights](#) |  | [SourceLocation](#sourcelocation)<!-- -->\\[\\] |  |
|  [message](#) |  | string |  |
|  [scope](#) |  | string |  |
|  [suggestions](#) |  | string\\[\\] \\| null |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/optimizer/src/types.ts",mdFile:"qwik.diagnostic.md"},{name:"DiagnosticCategory",id:"diagnosticcategory",hierarchy:[{name:"DiagnosticCategory",id:"diagnosticcategory"}],kind:"TypeAlias",content:"```typescript\nexport type DiagnosticCategory = 'error' | 'warning' | 'sourceError';\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/optimizer/src/types.ts",mdFile:"qwik.diagnosticcategory.md"},{name:"dirname",id:"path-dirname",hierarchy:[{name:"Path",id:"path-dirname"},{name:"dirname",id:"path-dirname"}],kind:"MethodSignature",content:`\`\`\`typescript
dirname(path: string): string;
\`\`\`


|  Parameter | Type | Description |
|  --- | --- | --- |
|  path | string |  |

**Returns:**

string`,mdFile:"qwik.path.dirname.md"},{name:"EntryStrategy",id:"entrystrategy",hierarchy:[{name:"EntryStrategy",id:"entrystrategy"}],kind:"TypeAlias",content:"```typescript\nexport type EntryStrategy = InlineEntryStrategy | HoistEntryStrategy | SingleEntryStrategy | HookEntryStrategy | ComponentEntryStrategy | SmartEntryStrategy;\n```\n**References:** [InlineEntryStrategy](#inlineentrystrategy)<!-- -->, [SingleEntryStrategy](#singleentrystrategy)<!-- -->, [HookEntryStrategy](#hookentrystrategy)<!-- -->, [ComponentEntryStrategy](#componententrystrategy)<!-- -->, [SmartEntryStrategy](#smartentrystrategy)",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/optimizer/src/types.ts",mdFile:"qwik.entrystrategy.md"},{name:"extname",id:"path-extname",hierarchy:[{name:"Path",id:"path-extname"},{name:"extname",id:"path-extname"}],kind:"MethodSignature",content:`\`\`\`typescript
extname(path: string): string;
\`\`\`


|  Parameter | Type | Description |
|  --- | --- | --- |
|  path | string |  |

**Returns:**

string`,mdFile:"qwik.path.extname.md"},{name:"format",id:"path-format",hierarchy:[{name:"Path",id:"path-format"},{name:"format",id:"path-format"}],kind:"MethodSignature",content:`\`\`\`typescript
format(pathObject: {
        root: string;
        dir: string;
        base: string;
        ext: string;
        name: string;
    }): string;
\`\`\`


|  Parameter | Type | Description |
|  --- | --- | --- |
|  pathObject | { root: string; dir: string; base: string; ext: string; name: string; } |  |

**Returns:**

string`,mdFile:"qwik.path.format.md"},{name:"GlobalInjections",id:"globalinjections",hierarchy:[{name:"GlobalInjections",id:"globalinjections"}],kind:"Interface",content:`\`\`\`typescript
export interface GlobalInjections 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [attributes?](#) |  | { \\[key: string\\]: string; } | _(Optional)_ |
|  [location](#) |  | 'head' \\| 'body' |  |
|  [tag](#) |  | string |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/optimizer/src/types.ts",mdFile:"qwik.globalinjections.md"},{name:"HookAnalysis",id:"hookanalysis",hierarchy:[{name:"HookAnalysis",id:"hookanalysis"}],kind:"Interface",content:`\`\`\`typescript
export interface HookAnalysis 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [canonicalFilename](#) |  | string |  |
|  [captures](#) |  | boolean |  |
|  [ctxKind](#) |  | 'event' \\| 'function' |  |
|  [ctxName](#) |  | string |  |
|  [displayName](#) |  | string |  |
|  [entry](#) |  | string \\| null |  |
|  [extension](#) |  | string |  |
|  [hash](#) |  | string |  |
|  [name](#) |  | string |  |
|  [origin](#) |  | string |  |
|  [parent](#) |  | string \\| null |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/optimizer/src/types.ts",mdFile:"qwik.hookanalysis.md"},{name:"HookEntryStrategy",id:"hookentrystrategy",hierarchy:[{name:"HookEntryStrategy",id:"hookentrystrategy"}],kind:"Interface",content:`\`\`\`typescript
export interface HookEntryStrategy 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [type](#) |  | 'hook' |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/optimizer/src/types.ts",mdFile:"qwik.hookentrystrategy.md"},{name:"InlineEntryStrategy",id:"inlineentrystrategy",hierarchy:[{name:"InlineEntryStrategy",id:"inlineentrystrategy"}],kind:"Interface",content:`\`\`\`typescript
export interface InlineEntryStrategy 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [type](#) |  | 'inline' |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/optimizer/src/types.ts",mdFile:"qwik.inlineentrystrategy.md"},{name:"isAbsolute",id:"path-isabsolute",hierarchy:[{name:"Path",id:"path-isabsolute"},{name:"isAbsolute",id:"path-isabsolute"}],kind:"MethodSignature",content:`\`\`\`typescript
isAbsolute(path: string): boolean;
\`\`\`


|  Parameter | Type | Description |
|  --- | --- | --- |
|  path | string |  |

**Returns:**

boolean`,mdFile:"qwik.path.isabsolute.md"},{name:"join",id:"path-join",hierarchy:[{name:"Path",id:"path-join"},{name:"join",id:"path-join"}],kind:"MethodSignature",content:`\`\`\`typescript
join(...paths: string[]): string;
\`\`\`


|  Parameter | Type | Description |
|  --- | --- | --- |
|  paths | string\\[\\] |  |

**Returns:**

string`,mdFile:"qwik.path.join.md"},{name:"MinifyMode",id:"minifymode",hierarchy:[{name:"MinifyMode",id:"minifymode"}],kind:"TypeAlias",content:"```typescript\nexport type MinifyMode = 'simplify' | 'none';\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/optimizer/src/types.ts",mdFile:"qwik.minifymode.md"},{name:"normalize",id:"path-normalize",hierarchy:[{name:"Path",id:"path-normalize"},{name:"normalize",id:"path-normalize"}],kind:"MethodSignature",content:`\`\`\`typescript
normalize(path: string): string;
\`\`\`


|  Parameter | Type | Description |
|  --- | --- | --- |
|  path | string |  |

**Returns:**

string`,mdFile:"qwik.path.normalize.md"},{name:"Optimizer",id:"optimizer",hierarchy:[{name:"Optimizer",id:"optimizer"}],kind:"Interface",content:`\`\`\`typescript
export interface Optimizer 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [sys](#) |  | [OptimizerSystem](#optimizersystem) | Optimizer system use. This can be updated with a custom file system. |


|  Method | Description |
|  --- | --- |
|  [transformFs(opts)](#optimizer-transformfs) | Transforms the directory from the file system. |
|  [transformFsSync(opts)](#optimizer-transformfssync) | Transforms the directory from the file system. |
|  [transformModules(opts)](#optimizer-transformmodules) | Transforms the input code string, does not access the file system. |
|  [transformModulesSync(opts)](#optimizer-transformmodulessync) | Transforms the input code string, does not access the file system. |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/optimizer/src/types.ts",mdFile:"qwik.optimizer.md"},{name:"OptimizerOptions",id:"optimizeroptions",hierarchy:[{name:"OptimizerOptions",id:"optimizeroptions"}],kind:"Interface",content:`\`\`\`typescript
export interface OptimizerOptions 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [binding?](#) |  | any | _(Optional)_ |
|  [sys?](#) |  | [OptimizerSystem](#optimizersystem) | _(Optional)_ |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/optimizer/src/types.ts",mdFile:"qwik.optimizeroptions.md"},{name:"OptimizerSystem",id:"optimizersystem",hierarchy:[{name:"OptimizerSystem",id:"optimizersystem"}],kind:"Interface",content:`\`\`\`typescript
export interface OptimizerSystem 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [cwd](#) |  | () =&gt; string |  |
|  [dynamicImport](#) |  | (path: string) =&gt; Promise&lt;any&gt; |  |
|  [env](#) |  | [SystemEnvironment](#systemenvironment) |  |
|  [getInputFiles?](#) |  | (rootDir: string) =&gt; Promise&lt;[TransformModuleInput](#transformmoduleinput)<!-- -->\\[\\]&gt; | _(Optional)_ |
|  [os](#) |  | string |  |
|  [path](#) |  | [Path](#path) |  |
|  [strictDynamicImport](#) |  | (path: string) =&gt; Promise&lt;any&gt; |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/optimizer/src/types.ts",mdFile:"qwik.optimizersystem.md"},{name:"parse",id:"path-parse",hierarchy:[{name:"Path",id:"path-parse"},{name:"parse",id:"path-parse"}],kind:"MethodSignature",content:`\`\`\`typescript
parse(path: string): {
        root: string;
        dir: string;
        base: string;
        ext: string;
        name: string;
    };
\`\`\`


|  Parameter | Type | Description |
|  --- | --- | --- |
|  path | string |  |

**Returns:**

{ root: string; dir: string; base: string; ext: string; name: string; }`,mdFile:"qwik.path.parse.md"},{name:"Path",id:"path",hierarchy:[{name:"Path",id:"path"}],kind:"Interface",content:`\`\`\`typescript
export interface Path 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [delimiter](#) | <code>readonly</code> | string |  |
|  [posix](#) | <code>readonly</code> | [Path](#path) |  |
|  [sep](#) | <code>readonly</code> | string |  |
|  [win32](#) | <code>readonly</code> | null |  |


|  Method | Description |
|  --- | --- |
|  [basename(path, ext)](#path-basename) |  |
|  [dirname(path)](#path-dirname) |  |
|  [extname(path)](#path-extname) |  |
|  [format(pathObject)](#path-format) |  |
|  [isAbsolute(path)](#path-isabsolute) |  |
|  [join(paths)](#path-join) |  |
|  [normalize(path)](#path-normalize) |  |
|  [parse(path)](#path-parse) |  |
|  [relative(from, to)](#path-relative) |  |
|  [resolve(paths)](#path-resolve) |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/optimizer/src/types.ts",mdFile:"qwik.path.md"},{name:"QwikBuildMode",id:"qwikbuildmode",hierarchy:[{name:"QwikBuildMode",id:"qwikbuildmode"}],kind:"TypeAlias",content:"```typescript\nexport type QwikBuildMode = 'production' | 'development';\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/optimizer/src/plugins/plugin.ts",mdFile:"qwik.qwikbuildmode.md"},{name:"QwikBuildTarget",id:"qwikbuildtarget",hierarchy:[{name:"QwikBuildTarget",id:"qwikbuildtarget"}],kind:"TypeAlias",content:"```typescript\nexport type QwikBuildTarget = 'client' | 'ssr' | 'lib' | 'test';\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/optimizer/src/plugins/plugin.ts",mdFile:"qwik.qwikbuildtarget.md"},{name:"QwikBundle",id:"qwikbundle",hierarchy:[{name:"QwikBundle",id:"qwikbundle"}],kind:"Interface",content:`\`\`\`typescript
export interface QwikBundle 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [dynamicImports?](#) |  | string\\[\\] | _(Optional)_ |
|  [imports?](#) |  | string\\[\\] | _(Optional)_ |
|  [origins?](#) |  | string\\[\\] | _(Optional)_ |
|  [size](#) |  | number |  |
|  [symbols?](#) |  | string\\[\\] | _(Optional)_ |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/optimizer/src/types.ts",mdFile:"qwik.qwikbundle.md"},{name:"QwikManifest",id:"qwikmanifest",hierarchy:[{name:"QwikManifest",id:"qwikmanifest"}],kind:"Interface",content:`\`\`\`typescript
export interface QwikManifest 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [bundles](#) |  | { \\[fileName: string\\]: [QwikBundle](#qwikbundle)<!-- -->; } |  |
|  [injections?](#) |  | [GlobalInjections](#globalinjections)<!-- -->\\[\\] | _(Optional)_ |
|  [mapping](#) |  | { \\[symbolName: string\\]: string; } |  |
|  [options?](#) |  | { target?: string; buildMode?: string; forceFullBuild?: boolean; entryStrategy?: { \\[key: string\\]: any; }; } | _(Optional)_ |
|  [platform?](#) |  | { \\[name: string\\]: string; } | _(Optional)_ |
|  [symbols](#) |  | { \\[symbolName: string\\]: [QwikSymbol](#qwiksymbol)<!-- -->; } |  |
|  [version](#) |  | string |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/optimizer/src/types.ts",mdFile:"qwik.qwikmanifest.md"},{name:"qwikRollup",id:"qwikrollup",hierarchy:[{name:"qwikRollup",id:"qwikrollup"}],kind:"Function",content:`\`\`\`typescript
export declare function qwikRollup(qwikRollupOpts?: QwikRollupPluginOptions): any;
\`\`\`


|  Parameter | Type | Description |
|  --- | --- | --- |
|  qwikRollupOpts | [QwikRollupPluginOptions](#qwikrolluppluginoptions) | _(Optional)_ |

**Returns:**

any`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/optimizer/src/plugins/rollup.ts",mdFile:"qwik.qwikrollup.md"},{name:"QwikRollupPluginOptions",id:"qwikrolluppluginoptions",hierarchy:[{name:"QwikRollupPluginOptions",id:"qwikrolluppluginoptions"}],kind:"Interface",content:`\`\`\`typescript
export interface QwikRollupPluginOptions 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [buildMode?](#) |  | [QwikBuildMode](#qwikbuildmode) | _(Optional)_ Build <code>production</code> or <code>development</code>. Default <code>development</code> |
|  [debug?](#) |  | boolean | _(Optional)_ Prints verbose Qwik plugin debug logs. Default <code>false</code> |
|  [entryStrategy?](#) |  | [EntryStrategy](#entrystrategy) | _(Optional)_ The Qwik entry strategy to use while building for production. During development the type is always <code>hook</code>. Default <code>{ type: &quot;smart&quot; }</code>) |
|  [forceFullBuild?](#) |  | boolean | _(Optional)_ |
|  [manifestInput?](#) |  | [QwikManifest](#qwikmanifest) | _(Optional)_ The SSR build requires the manifest generated during the client build. The <code>manifestInput</code> option can be used to manually provide a manifest. Default <code>undefined</code> |
|  [manifestOutput?](#) |  | (manifest: [QwikManifest](#qwikmanifest)<!-- -->) =&gt; Promise&lt;void&gt; \\| void | _(Optional)_ The client build will create a manifest and this hook is called with the generated build data. Default <code>undefined</code> |
|  [optimizerOptions?](#) |  | [OptimizerOptions](#optimizeroptions) | _(Optional)_ |
|  [rootDir?](#) |  | string | _(Optional)_ The root of the application, which is commonly the same directory as <code>package.json</code> and <code>rollup.config.js</code>. Default <code>process.cwd()</code> |
|  [srcDir?](#) |  | string | _(Optional)_ The source directory to find all the Qwik components. Since Qwik does not have a single input, the <code>srcDir</code> is used to recursively find Qwik files. Default <code>src</code> |
|  [srcInputs?](#) |  | [TransformModuleInput](#transformmoduleinput)<!-- -->\\[\\] \\| null | _(Optional)_ Alternative to <code>srcDir</code>, where <code>srcInputs</code> is able to provide the files manually. This option is useful for an environment without a file system, such as a webworker. Default: <code>null</code> |
|  [target?](#) |  | [QwikBuildTarget](#qwikbuildtarget) | _(Optional)_ Target <code>client</code> or <code>ssr</code>. Default <code>client</code> |
|  [transformedModuleOutput?](#) |  | ((transformedModules: [TransformModule](#transformmodule)<!-- -->\\[\\]) =&gt; Promise&lt;void&gt; \\| void) \\| null | _(Optional)_ Hook that's called after the build and provides all of the transformed modules that were used before bundling. |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/optimizer/src/plugins/rollup.ts",mdFile:"qwik.qwikrolluppluginoptions.md"},{name:"QwikSymbol",id:"qwiksymbol",hierarchy:[{name:"QwikSymbol",id:"qwiksymbol"}],kind:"Interface",content:`\`\`\`typescript
export interface QwikSymbol 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [canonicalFilename](#) |  | string |  |
|  [captures](#) |  | boolean |  |
|  [ctxKind](#) |  | 'function' \\| 'event' |  |
|  [ctxName](#) |  | string |  |
|  [displayName](#) |  | string |  |
|  [hash](#) |  | string |  |
|  [origin](#) |  | string |  |
|  [parent](#) |  | string \\| null |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/optimizer/src/types.ts",mdFile:"qwik.qwiksymbol.md"},{name:"qwikVite",id:"qwikvite",hierarchy:[{name:"qwikVite",id:"qwikvite"}],kind:"Function",content:`\`\`\`typescript
export declare function qwikVite(qwikViteOpts?: QwikVitePluginOptions): any;
\`\`\`


|  Parameter | Type | Description |
|  --- | --- | --- |
|  qwikViteOpts | [QwikVitePluginOptions](#qwikvitepluginoptions) | _(Optional)_ |

**Returns:**

any`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/optimizer/src/plugins/vite.ts",mdFile:"qwik.qwikvite.md"},{name:"QwikViteDevResponse",id:"qwikvitedevresponse",hierarchy:[{name:"QwikViteDevResponse",id:"qwikvitedevresponse"}],kind:"Interface",content:`\`\`\`typescript
export interface QwikViteDevResponse 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [\\_qwikEnvData?](#) |  | Record&lt;string, any&gt; | _(Optional)_ |
|  [\\_qwikRenderResolve?](#) |  | () =&gt; void | _(Optional)_ |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/optimizer/src/plugins/vite.ts",mdFile:"qwik.qwikvitedevresponse.md"},{name:"QwikVitePlugin",id:"qwikviteplugin",hierarchy:[{name:"QwikVitePlugin",id:"qwikviteplugin"}],kind:"Interface",content:`\`\`\`typescript
export interface QwikVitePlugin 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [api](#) |  | [QwikVitePluginApi](#qwikvitepluginapi) |  |
|  [name](#) |  | 'vite-plugin-qwik' |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/optimizer/src/plugins/vite.ts",mdFile:"qwik.qwikviteplugin.md"},{name:"QwikVitePluginApi",id:"qwikvitepluginapi",hierarchy:[{name:"QwikVitePluginApi",id:"qwikvitepluginapi"}],kind:"Interface",content:`\`\`\`typescript
export interface QwikVitePluginApi 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [getClientOutDir](#) |  | () =&gt; string \\| null |  |
|  [getClientPublicOutDir](#) |  | () =&gt; string \\| null |  |
|  [getManifest](#) |  | () =&gt; [QwikManifest](#qwikmanifest) \\| null |  |
|  [getOptimizer](#) |  | () =&gt; [Optimizer](#optimizer) \\| null |  |
|  [getOptions](#) |  | () =&gt; NormalizedQwikPluginOptions |  |
|  [getRootDir](#) |  | () =&gt; string \\| null |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/optimizer/src/plugins/vite.ts",mdFile:"qwik.qwikvitepluginapi.md"},{name:"QwikVitePluginOptions",id:"qwikvitepluginoptions",hierarchy:[{name:"QwikVitePluginOptions",id:"qwikvitepluginoptions"}],kind:"Interface",content:`\`\`\`typescript
export interface QwikVitePluginOptions 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [client?](#) |  | { input?: string\\[\\] \\| string; devInput?: string; outDir?: string; manifestOutput?: (manifest: [QwikManifest](#qwikmanifest)<!-- -->) =&gt; Promise&lt;void&gt; \\| void; } | _(Optional)_ |
|  [debug?](#) |  | boolean | _(Optional)_ Prints verbose Qwik plugin debug logs. Default <code>false</code> |
|  [devTools?](#) |  | { clickToSource: string\\[\\] \\| false; } | _(Optional)_ |
|  [entryStrategy?](#) |  | [EntryStrategy](#entrystrategy) | _(Optional)_ The Qwik entry strategy to use while building for production. During development the type is always <code>hook</code>. Default <code>{ type: &quot;smart&quot; }</code>) |
|  [optimizerOptions?](#) |  | [OptimizerOptions](#optimizeroptions) | _(Optional)_ Options for the Qwik optimizer. Default <code>undefined</code> |
|  [srcDir?](#) |  | string | _(Optional)_ The source directory to find all the Qwik components. Since Qwik does not have a single input, the <code>srcDir</code> is used to recursively find Qwik files. Default <code>src</code> |
|  [ssr?](#) |  | { input?: string; outDir?: string; manifestInput?: [QwikManifest](#qwikmanifest)<!-- -->; } | _(Optional)_ |
|  [transformedModuleOutput?](#) |  | ((transformedModules: [TransformModule](#transformmodule)<!-- -->\\[\\]) =&gt; Promise&lt;void&gt; \\| void) \\| null | _(Optional)_ Hook that's called after the build and provides all of the transformed modules that were used before bundling. |
|  [vendorRoots?](#) |  | string\\[\\] | _(Optional)_ List of directories to recursively search for Qwik components or Vendors. Default <code>[]</code> |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/optimizer/src/plugins/vite.ts",mdFile:"qwik.qwikvitepluginoptions.md"},{name:"relative",id:"path-relative",hierarchy:[{name:"Path",id:"path-relative"},{name:"relative",id:"path-relative"}],kind:"MethodSignature",content:`\`\`\`typescript
relative(from: string, to: string): string;
\`\`\`


|  Parameter | Type | Description |
|  --- | --- | --- |
|  from | string |  |
|  to | string |  |

**Returns:**

string`,mdFile:"qwik.path.relative.md"},{name:"resolve",id:"path-resolve",hierarchy:[{name:"Path",id:"path-resolve"},{name:"resolve",id:"path-resolve"}],kind:"MethodSignature",content:`\`\`\`typescript
resolve(...paths: string[]): string;
\`\`\`


|  Parameter | Type | Description |
|  --- | --- | --- |
|  paths | string\\[\\] |  |

**Returns:**

string`,mdFile:"qwik.path.resolve.md"},{name:"ResolvedManifest",id:"resolvedmanifest",hierarchy:[{name:"ResolvedManifest",id:"resolvedmanifest"}],kind:"Interface",content:`\`\`\`typescript
export interface ResolvedManifest 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [manifest](#) |  | [QwikManifest](#qwikmanifest) |  |
|  [mapper](#) |  | [SymbolMapper](#symbolmapper) |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/optimizer/src/types.ts",mdFile:"qwik.resolvedmanifest.md"},{name:"SingleEntryStrategy",id:"singleentrystrategy",hierarchy:[{name:"SingleEntryStrategy",id:"singleentrystrategy"}],kind:"Interface",content:`\`\`\`typescript
export interface SingleEntryStrategy 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [manual?](#) |  | Record&lt;string, string&gt; | _(Optional)_ |
|  [type](#) |  | 'single' |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/optimizer/src/types.ts",mdFile:"qwik.singleentrystrategy.md"},{name:"SmartEntryStrategy",id:"smartentrystrategy",hierarchy:[{name:"SmartEntryStrategy",id:"smartentrystrategy"}],kind:"Interface",content:`\`\`\`typescript
export interface SmartEntryStrategy 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [manual?](#) |  | Record&lt;string, string&gt; | _(Optional)_ |
|  [type](#) |  | 'smart' |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/optimizer/src/types.ts",mdFile:"qwik.smartentrystrategy.md"},{name:"SourceLocation",id:"sourcelocation",hierarchy:[{name:"SourceLocation",id:"sourcelocation"}],kind:"Interface",content:`\`\`\`typescript
export interface SourceLocation 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [endCol](#) |  | number |  |
|  [endLine](#) |  | number |  |
|  [hi](#) |  | number |  |
|  [lo](#) |  | number |  |
|  [startCol](#) |  | number |  |
|  [startLine](#) |  | number |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/optimizer/src/types.ts",mdFile:"qwik.sourcelocation.md"},{name:"SourceMapsOption",id:"sourcemapsoption",hierarchy:[{name:"SourceMapsOption",id:"sourcemapsoption"}],kind:"TypeAlias",content:"```typescript\nexport type SourceMapsOption = 'external' | 'inline' | undefined | null;\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/optimizer/src/types.ts",mdFile:"qwik.sourcemapsoption.md"},{name:"SymbolMapper",id:"symbolmapper",hierarchy:[{name:"SymbolMapper",id:"symbolmapper"}],kind:"TypeAlias",content:"```typescript\nexport type SymbolMapper = Record<string, readonly [symbol: string, chunk: string]>;\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/optimizer/src/types.ts",mdFile:"qwik.symbolmapper.md"},{name:"SymbolMapperFn",id:"symbolmapperfn",hierarchy:[{name:"SymbolMapperFn",id:"symbolmapperfn"}],kind:"TypeAlias",content:"```typescript\nexport type SymbolMapperFn = (symbolName: string, mapper: SymbolMapper | undefined) => readonly [symbol: string, chunk: string] | undefined;\n```\n**References:** [SymbolMapper](#symbolmapper)",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/optimizer/src/types.ts",mdFile:"qwik.symbolmapperfn.md"},{name:"SystemEnvironment",id:"systemenvironment",hierarchy:[{name:"SystemEnvironment",id:"systemenvironment"}],kind:"TypeAlias",content:"```typescript\nexport type SystemEnvironment = 'node' | 'deno' | 'webworker' | 'browsermain' | 'unknown';\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/optimizer/src/types.ts",mdFile:"qwik.systemenvironment.md"},{name:"transformFs",id:"optimizer-transformfs",hierarchy:[{name:"Optimizer",id:"optimizer-transformfs"},{name:"transformFs",id:"optimizer-transformfs"}],kind:"MethodSignature",content:`Transforms the directory from the file system.


\`\`\`typescript
transformFs(opts: TransformFsOptions): Promise<TransformOutput>;
\`\`\`


|  Parameter | Type | Description |
|  --- | --- | --- |
|  opts | [TransformFsOptions](#transformfsoptions) |  |

**Returns:**

Promise&lt;[TransformOutput](#transformoutput)<!-- -->&gt;`,mdFile:"qwik.optimizer.transformfs.md"},{name:"TransformFsOptions",id:"transformfsoptions",hierarchy:[{name:"TransformFsOptions",id:"transformfsoptions"}],kind:"Interface",content:`\`\`\`typescript
export interface TransformFsOptions extends TransformOptions 
\`\`\`
**Extends:** [TransformOptions](#transformoptions)


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [vendorRoots](#) |  | string\\[\\] |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/optimizer/src/types.ts",mdFile:"qwik.transformfsoptions.md"},{name:"transformFsSync",id:"optimizer-transformfssync",hierarchy:[{name:"Optimizer",id:"optimizer-transformfssync"},{name:"transformFsSync",id:"optimizer-transformfssync"}],kind:"MethodSignature",content:`Transforms the directory from the file system.


\`\`\`typescript
transformFsSync(opts: TransformFsOptions): TransformOutput;
\`\`\`


|  Parameter | Type | Description |
|  --- | --- | --- |
|  opts | [TransformFsOptions](#transformfsoptions) |  |

**Returns:**

[TransformOutput](#transformoutput)`,mdFile:"qwik.optimizer.transformfssync.md"},{name:"TransformModule",id:"transformmodule",hierarchy:[{name:"TransformModule",id:"transformmodule"}],kind:"Interface",content:`\`\`\`typescript
export interface TransformModule 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [code](#) |  | string |  |
|  [hook](#) |  | [HookAnalysis](#hookanalysis) \\| null |  |
|  [isEntry](#) |  | boolean |  |
|  [map](#) |  | string \\| null |  |
|  [path](#) |  | string |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/optimizer/src/types.ts",mdFile:"qwik.transformmodule.md"},{name:"TransformModuleInput",id:"transformmoduleinput",hierarchy:[{name:"TransformModuleInput",id:"transformmoduleinput"}],kind:"Interface",content:`\`\`\`typescript
export interface TransformModuleInput 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [code](#) |  | string |  |
|  [path](#) |  | string |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/optimizer/src/types.ts",mdFile:"qwik.transformmoduleinput.md"},{name:"transformModules",id:"optimizer-transformmodules",hierarchy:[{name:"Optimizer",id:"optimizer-transformmodules"},{name:"transformModules",id:"optimizer-transformmodules"}],kind:"MethodSignature",content:`Transforms the input code string, does not access the file system.


\`\`\`typescript
transformModules(opts: TransformModulesOptions): Promise<TransformOutput>;
\`\`\`


|  Parameter | Type | Description |
|  --- | --- | --- |
|  opts | [TransformModulesOptions](#transformmodulesoptions) |  |

**Returns:**

Promise&lt;[TransformOutput](#transformoutput)<!-- -->&gt;`,mdFile:"qwik.optimizer.transformmodules.md"},{name:"TransformModulesOptions",id:"transformmodulesoptions",hierarchy:[{name:"TransformModulesOptions",id:"transformmodulesoptions"}],kind:"Interface",content:`\`\`\`typescript
export interface TransformModulesOptions extends TransformOptions 
\`\`\`
**Extends:** [TransformOptions](#transformoptions)


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [input](#) |  | [TransformModuleInput](#transformmoduleinput)<!-- -->\\[\\] |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/optimizer/src/types.ts",mdFile:"qwik.transformmodulesoptions.md"},{name:"transformModulesSync",id:"optimizer-transformmodulessync",hierarchy:[{name:"Optimizer",id:"optimizer-transformmodulessync"},{name:"transformModulesSync",id:"optimizer-transformmodulessync"}],kind:"MethodSignature",content:`Transforms the input code string, does not access the file system.


\`\`\`typescript
transformModulesSync(opts: TransformModulesOptions): TransformOutput;
\`\`\`


|  Parameter | Type | Description |
|  --- | --- | --- |
|  opts | [TransformModulesOptions](#transformmodulesoptions) |  |

**Returns:**

[TransformOutput](#transformoutput)`,mdFile:"qwik.optimizer.transformmodulessync.md"},{name:"TransformOptions",id:"transformoptions",hierarchy:[{name:"TransformOptions",id:"transformoptions"}],kind:"Interface",content:`\`\`\`typescript
export interface TransformOptions 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [entryStrategy?](#) |  | [EntryStrategy](#entrystrategy) | _(Optional)_ |
|  [explicitExtensions?](#) |  | boolean | _(Optional)_ |
|  [isServer?](#) |  | boolean | _(Optional)_ |
|  [minify?](#) |  | [MinifyMode](#minifymode) | _(Optional)_ |
|  [mode?](#) |  | EmitMode | _(Optional)_ |
|  [preserveFilenames?](#) |  | boolean | _(Optional)_ |
|  [regCtxName?](#) |  | string\\[\\] | _(Optional)_ |
|  [rootDir?](#) |  | string | _(Optional)_ |
|  [scope?](#) |  | string | _(Optional)_ |
|  [sourceMaps?](#) |  | boolean | _(Optional)_ |
|  [srcDir](#) |  | string |  |
|  [stripCtxName?](#) |  | string\\[\\] | _(Optional)_ |
|  [stripEventHandlers?](#) |  | boolean | _(Optional)_ |
|  [stripExports?](#) |  | string\\[\\] | _(Optional)_ |
|  [transpileJsx?](#) |  | boolean | _(Optional)_ |
|  [transpileTs?](#) |  | boolean | _(Optional)_ |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/optimizer/src/types.ts",mdFile:"qwik.transformoptions.md"},{name:"TransformOutput",id:"transformoutput",hierarchy:[{name:"TransformOutput",id:"transformoutput"}],kind:"Interface",content:`\`\`\`typescript
export interface TransformOutput 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [diagnostics](#) |  | [Diagnostic](#diagnostic)<!-- -->\\[\\] |  |
|  [isJsx](#) |  | boolean |  |
|  [isTypeScript](#) |  | boolean |  |
|  [modules](#) |  | [TransformModule](#transformmodule)<!-- -->\\[\\] |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/optimizer/src/types.ts",mdFile:"qwik.transformoutput.md"},{name:"TranspileOption",id:"transpileoption",hierarchy:[{name:"TranspileOption",id:"transpileoption"}],kind:"TypeAlias",content:"```typescript\nexport type TranspileOption = boolean | undefined | null;\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/optimizer/src/types.ts",mdFile:"qwik.transpileoption.md"},{name:"versions",id:"versions",hierarchy:[{name:"versions",id:"versions"}],kind:"Variable",content:"```typescript\nversions: {\n    qwik: string;\n}\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/optimizer/src/versions.ts",mdFile:"qwik.versions.md"}],ie={id:te,package:"@builder.io/qwik/optimizer",members:ne},re="qwik-server",oe=[{name:"getQwikLoaderScript",id:"getqwikloaderscript",hierarchy:[{name:"getQwikLoaderScript",id:"getqwikloaderscript"}],kind:"Function",content:`Provides the qwikloader.js file as a string. Useful for tooling to inline the qwikloader script into HTML.


\`\`\`typescript
export declare function getQwikLoaderScript(opts?: {
    events?: string[];
    debug?: boolean;
}): string;
\`\`\`


|  Parameter | Type | Description |
|  --- | --- | --- |
|  opts | { events?: string\\[\\]; debug?: boolean; } | _(Optional)_ |

**Returns:**

string`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/server/scripts.ts",mdFile:"qwik.getqwikloaderscript.md"},{name:"InOrderAuto",id:"inorderauto",hierarchy:[{name:"InOrderAuto",id:"inorderauto"}],kind:"Interface",content:`\`\`\`typescript
export interface InOrderAuto 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [maximunChunk?](#) |  | number | _(Optional)_ |
|  [maximunInitialChunk?](#) |  | number | _(Optional)_ |
|  [strategy](#) |  | 'auto' |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/server/types.ts",mdFile:"qwik.inorderauto.md"},{name:"InOrderDisabled",id:"inorderdisabled",hierarchy:[{name:"InOrderDisabled",id:"inorderdisabled"}],kind:"Interface",content:`\`\`\`typescript
export interface InOrderDisabled 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [strategy](#) |  | 'disabled' |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/server/types.ts",mdFile:"qwik.inorderdisabled.md"},{name:"InOrderStreaming",id:"inorderstreaming",hierarchy:[{name:"InOrderStreaming",id:"inorderstreaming"}],kind:"TypeAlias",content:"```typescript\nexport type InOrderStreaming = InOrderAuto | InOrderDisabled | InOrderDirect;\n```\n**References:** [InOrderAuto](#inorderauto)<!-- -->, [InOrderDisabled](#inorderdisabled)",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/server/types.ts",mdFile:"qwik.inorderstreaming.md"},{name:"PrefetchImplementation",id:"prefetchimplementation",hierarchy:[{name:"PrefetchImplementation",id:"prefetchimplementation"}],kind:"Interface",content:`\`\`\`typescript
export interface PrefetchImplementation 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [linkInsert?](#) |  | 'js-append' \\| 'html-append' \\| null | <p>_(Optional)_ <code>js-append</code>: Use JS runtime to create each <code>&lt;link&gt;</code> and append to the body.</p><p><code>html-append</code>: Render each <code>&lt;link&gt;</code> within html, appended at the end of the body.</p> |
|  [linkRel?](#) |  | 'prefetch' \\| 'preload' \\| 'modulepreload' \\| null | _(Optional)_ Value of the <code>&lt;link rel=&quot;...&quot;&gt;</code> attribute when link is used. Defaults to <code>prefetch</code> if links are inserted. |
|  [prefetchEvent?](#) |  | 'always' \\| null | <p>_(Optional)_ Dispatch a <code>qprefetch</code> event with detail data containing the bundles that should be prefetched. The event dispatch script will be inlined into the document's HTML so any listeners of this event should already be ready to handle the event.</p><p>This implementation will inject a script similar to:</p>
\`\`\`
<script type="module">
  document.dispatchEvent(new CustomEvent("qprefetch", { detail:{ "bundles": [...] } }))
<\/script>
\`\`\`
<p>By default, the <code>prefetchEvent</code> implementation will be set to <code>always</code>.</p> |
|  [workerFetchInsert?](#) |  | 'always' \\| 'no-link-support' \\| null | <p>_(Optional)_ <code>always</code>: Always include the worker fetch JS runtime.</p><p><code>no-link-support</code>: Only include the worker fetch JS runtime when the browser doesn't support <code>&lt;link&gt;</code> prefetch/preload/modulepreload.</p> |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/server/types.ts",mdFile:"qwik.prefetchimplementation.md"},{name:"PrefetchResource",id:"prefetchresource",hierarchy:[{name:"PrefetchResource",id:"prefetchresource"}],kind:"Interface",content:`\`\`\`typescript
export interface PrefetchResource 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [imports](#) |  | [PrefetchResource](#prefetchresource)<!-- -->\\[\\] |  |
|  [url](#) |  | string |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/server/types.ts",mdFile:"qwik.prefetchresource.md"},{name:"PrefetchStrategy",id:"prefetchstrategy",hierarchy:[{name:"PrefetchStrategy",id:"prefetchstrategy"}],kind:"Interface",content:`\`\`\`typescript
export interface PrefetchStrategy 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [implementation?](#) |  | [PrefetchImplementation](#prefetchimplementation) | _(Optional)_ |
|  [symbolsToPrefetch?](#) |  | [SymbolsToPrefetch](#symbolstoprefetch) | _(Optional)_ |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/server/types.ts",mdFile:"qwik.prefetchstrategy.md"},{name:"QwikLoaderOptions",id:"qwikloaderoptions",hierarchy:[{name:"QwikLoaderOptions",id:"qwikloaderoptions"}],kind:"Interface",content:`\`\`\`typescript
export interface QwikLoaderOptions 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [events?](#) |  | string\\[\\] | _(Optional)_ |
|  [include?](#) |  | 'always' \\| 'never' \\| 'auto' | _(Optional)_ |
|  [position?](#) |  | 'top' \\| 'bottom' | _(Optional)_ |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/server/types.ts",mdFile:"qwik.qwikloaderoptions.md"},{name:"Render",id:"render",hierarchy:[{name:"Render",id:"render"}],kind:"TypeAlias",content:"```typescript\nexport type Render = RenderToString | RenderToStream;\n```\n**References:** [RenderToString](#rendertostring)<!-- -->, [RenderToStream](#rendertostream)",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/server/types.ts",mdFile:"qwik.render.md"},{name:"RenderOptions",id:"renderoptions",hierarchy:[{name:"RenderOptions",id:"renderoptions"}],kind:"Interface",content:`\`\`\`typescript
export interface RenderOptions extends SerializeDocumentOptions 
\`\`\`
**Extends:** [SerializeDocumentOptions](#serializedocumentoptions)


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [base?](#) |  | string \\| ((options: [RenderOptions](#renderoptions)<!-- -->) =&gt; string) | _(Optional)_ Specifies the root of the JS files of the client build. Setting a base, will cause the render of the <code>q:base</code> attribute in the <code>q:container</code> element. |
|  [containerAttributes?](#) |  | Record&lt;string, string&gt; | _(Optional)_ |
|  [containerTagName?](#) |  | string | _(Optional)_ When set, the app is serialized into a fragment. And the returned html is not a complete document. Defaults to <code>html</code> |
|  [locale?](#) |  | string \\| ((options: [RenderOptions](#renderoptions)<!-- -->) =&gt; string) | _(Optional)_ Language to use when rendering the document. |
|  [prefetchStrategy?](#) |  | [PrefetchStrategy](#prefetchstrategy) \\| null | _(Optional)_ |
|  [qwikLoader?](#) |  | [QwikLoaderOptions](#qwikloaderoptions) | _(Optional)_ Specifies if the Qwik Loader script is added to the document or not. Defaults to <code>{ include: true }</code>. |
|  [serverData?](#) |  | Record&lt;string, any&gt; | _(Optional)_ |
|  [snapshot?](#) |  | boolean | _(Optional)_ Defaults to <code>true</code> |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/server/types.ts",mdFile:"qwik.renderoptions.md"},{name:"RenderResult",id:"renderresult",hierarchy:[{name:"RenderResult",id:"renderresult"}],kind:"Interface",content:`\`\`\`typescript
export interface RenderResult 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [isStatic](#) |  | boolean |  |
|  [manifest?](#) |  | QwikManifest | _(Optional)_ |
|  [prefetchResources](#) |  | [PrefetchResource](#prefetchresource)<!-- -->\\[\\] |  |
|  [snapshotResult](#) |  | SnapshotResult \\| undefined |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/server/types.ts",mdFile:"qwik.renderresult.md"},{name:"renderToStream",id:"rendertostream",hierarchy:[{name:"renderToStream",id:"rendertostream"}],kind:"Function",content:"```typescript\nexport type RenderToStream = (opts: RenderToStreamOptions) => Promise<RenderToStreamResult>;\n```\n**References:** [RenderToStreamOptions](#rendertostreamoptions)<!-- -->, [RenderToStreamResult](#rendertostreamresult)",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/server/render.ts",mdFile:"qwik.rendertostream.md"},{name:"RenderToStream",id:"rendertostream",hierarchy:[{name:"RenderToStream",id:"rendertostream"}],kind:"TypeAlias",content:"```typescript\nexport type RenderToStream = (opts: RenderToStreamOptions) => Promise<RenderToStreamResult>;\n```\n**References:** [RenderToStreamOptions](#rendertostreamoptions)<!-- -->, [RenderToStreamResult](#rendertostreamresult)",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/server/types.ts",mdFile:"qwik.rendertostream.md"},{name:"RenderToStreamOptions",id:"rendertostreamoptions",hierarchy:[{name:"RenderToStreamOptions",id:"rendertostreamoptions"}],kind:"Interface",content:`\`\`\`typescript
export interface RenderToStreamOptions extends RenderOptions 
\`\`\`
**Extends:** [RenderOptions](#renderoptions)


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [stream](#) |  | StreamWriter |  |
|  [streaming?](#) |  | [StreamingOptions](#streamingoptions) | _(Optional)_ |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/server/types.ts",mdFile:"qwik.rendertostreamoptions.md"},{name:"RenderToStreamResult",id:"rendertostreamresult",hierarchy:[{name:"RenderToStreamResult",id:"rendertostreamresult"}],kind:"Interface",content:`\`\`\`typescript
export interface RenderToStreamResult extends RenderResult 
\`\`\`
**Extends:** [RenderResult](#renderresult)


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [flushes](#) |  | number |  |
|  [size](#) |  | number |  |
|  [timing](#) |  | { firstFlush: number; render: number; snapshot: number; } |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/server/types.ts",mdFile:"qwik.rendertostreamresult.md"},{name:"renderToString",id:"rendertostring",hierarchy:[{name:"renderToString",id:"rendertostring"}],kind:"Function",content:"```typescript\nexport type RenderToString = (opts: RenderToStringOptions) => Promise<RenderToStringResult>;\n```\n**References:** [RenderToStringOptions](#rendertostringoptions)<!-- -->, [RenderToStringResult](#rendertostringresult)",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/server/render.ts",mdFile:"qwik.rendertostring.md"},{name:"RenderToString",id:"rendertostring",hierarchy:[{name:"RenderToString",id:"rendertostring"}],kind:"TypeAlias",content:"```typescript\nexport type RenderToString = (opts: RenderToStringOptions) => Promise<RenderToStringResult>;\n```\n**References:** [RenderToStringOptions](#rendertostringoptions)<!-- -->, [RenderToStringResult](#rendertostringresult)",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/server/types.ts",mdFile:"qwik.rendertostring.md"},{name:"RenderToStringOptions",id:"rendertostringoptions",hierarchy:[{name:"RenderToStringOptions",id:"rendertostringoptions"}],kind:"Interface",content:"```typescript\nexport interface RenderToStringOptions extends RenderOptions \n```\n**Extends:** [RenderOptions](#renderoptions)",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/server/types.ts",mdFile:"qwik.rendertostringoptions.md"},{name:"RenderToStringResult",id:"rendertostringresult",hierarchy:[{name:"RenderToStringResult",id:"rendertostringresult"}],kind:"Interface",content:`\`\`\`typescript
export interface RenderToStringResult extends RenderResult 
\`\`\`
**Extends:** [RenderResult](#renderresult)


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [html](#) |  | string |  |
|  [timing](#) |  | { render: number; snapshot: number; } |  |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/server/types.ts",mdFile:"qwik.rendertostringresult.md"},{name:"resolveManifest",id:"resolvemanifest",hierarchy:[{name:"resolveManifest",id:"resolvemanifest"}],kind:"Function",content:`\`\`\`typescript
export declare function resolveManifest(manifest: QwikManifest | ResolvedManifest | undefined): ResolvedManifest | undefined;
\`\`\`


|  Parameter | Type | Description |
|  --- | --- | --- |
|  manifest | QwikManifest \\| ResolvedManifest \\| undefined |  |

**Returns:**

ResolvedManifest \\| undefined`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/server/render.ts",mdFile:"qwik.resolvemanifest.md"},{name:"SerializeDocumentOptions",id:"serializedocumentoptions",hierarchy:[{name:"SerializeDocumentOptions",id:"serializedocumentoptions"}],kind:"Interface",content:`\`\`\`typescript
export interface SerializeDocumentOptions 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [debug?](#) |  | boolean | _(Optional)_ |
|  [manifest?](#) |  | QwikManifest \\| ResolvedManifest | _(Optional)_ |
|  [symbolMapper?](#) |  | SymbolMapperFn | _(Optional)_ |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/server/types.ts",mdFile:"qwik.serializedocumentoptions.md"},{name:"setServerPlatform",id:"setserverplatform",hierarchy:[{name:"setServerPlatform",id:"setserverplatform"}],kind:"Function",content:`\`\`\`typescript
export declare function setServerPlatform(manifest: QwikManifest | ResolvedManifest | undefined): Promise<void>;
\`\`\`


|  Parameter | Type | Description |
|  --- | --- | --- |
|  manifest | QwikManifest \\| ResolvedManifest \\| undefined |  |

**Returns:**

Promise&lt;void&gt;`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/server/index.ts",mdFile:"qwik.setserverplatform.md"},{name:"StreamingOptions",id:"streamingoptions",hierarchy:[{name:"StreamingOptions",id:"streamingoptions"}],kind:"Interface",content:`\`\`\`typescript
export interface StreamingOptions 
\`\`\`


|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [inOrder?](#) |  | [InOrderStreaming](#inorderstreaming) | _(Optional)_ |`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/server/types.ts",mdFile:"qwik.streamingoptions.md"},{name:"SymbolsToPrefetch",id:"symbolstoprefetch",hierarchy:[{name:"SymbolsToPrefetch",id:"symbolstoprefetch"}],kind:"TypeAlias",content:`auto: Prefetch all possible QRLs used by the document. Default


\`\`\`typescript
export type SymbolsToPrefetch = 'auto' | ((opts: {
    manifest: QwikManifest;
}) => PrefetchResource[]);
\`\`\`
**References:** [PrefetchResource](#prefetchresource)`,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/server/types.ts",mdFile:"qwik.symbolstoprefetch.md"},{name:"versions",id:"versions",hierarchy:[{name:"versions",id:"versions"}],kind:"Variable",content:"```typescript\nversions: {\n    readonly qwik: string;\n    readonly qwikDom: string;\n}\n```",editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/server/utils.ts",mdFile:"qwik.versions.md"}],ae={id:re,package:"@builder.io/qwik/server",members:oe},se="qwik-testing",de=[{name:"createDOM",id:"createdom",hierarchy:[{name:"createDOM",id:"createdom"}],kind:"Variable",content:`CreatePlatform and CreateDocument


\`\`\`typescript
createDOM: () => Promise<{
    render: (jsxElement: JSXNode) => Promise<import("@builder.io/qwik").RenderResult>;
    screen: HTMLElement;
    userEvent: (queryOrElement: string | Element | keyof HTMLElementTagNameMap | null, eventNameCamel: string | keyof WindowEventMap, eventPayload?: any) => Promise<void>;
}>
\`\`\``,editUrl:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik/src/testing/library.ts",mdFile:"qwik.createdom.md"}],ce={id:se,package:"@builder.io/qwik/testing",members:de},t=new Set,pe={qwik:c,"qwik-city":m,"qwik-city-middleware-azure-swa":y,"qwik-city-middleware-cloudflare-pages":w,"qwik-city-middleware-netlify-edge":b,"qwik-city-middleware-node":x,"qwik-city-middleware-request-handler":R,"qwik-city-middleware-vercel-edge":P,"qwik-city-static":E,"qwik-city-vite-azure-swa":U,"qwik-city-vite-cloud-run":Q,"qwik-city-vite-cloudflare-pages":V,"qwik-city-vite-node-server":$,"qwik-city-vite-netlify-edge":X,"qwik-city-vite-static":K,"qwik-city-vite-vercel":ee,"qwik-optimizer":ie,"qwik-server":ae,"qwik-testing":ce},le=()=>(t.size||pe.qwik.members.forEach(e=>t.add(a(e.kind))),t),he=()=>Array.from(le()).reduce((e,o)=>(typeof o!="string"||(e[o]=!0),e),{})||{},ye=n(i(()=>r(()=>import("./q-1a204647.js"),["build/q-1a204647.js","build/q-71956c83.js","build/q-2ab75100.js"]),"s_hIgzPrlKRhw")),ke=n(i(()=>r(()=>import("./q-2ce341b4.js"),["build/q-2ce341b4.js","build/q-71956c83.js","build/q-2ab75100.js"]),"s_O6uLU0g1RNA")),ge=n(i(()=>r(()=>import("./q-f0619ae0.js"),["build/q-f0619ae0.js","build/q-71956c83.js","build/q-2ab75100.js"]),"s_Kx1MJMeM3Oc"));export{ge as ApiMemberList,ke as ApiMemberWrapper,pe as _auto_apiData,he as _auto_getInitialFilterState,le as _auto_getUniqueKinds,ye as default};
