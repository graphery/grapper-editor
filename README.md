# ![Grapper](./assets/img/grapper.png)<br/>Code editor web component

## `<g-editor>`

A standalone code editor component that edits a `<grapper-view>` in real time and keeps its
attributes/internal markup synchronized.


## Features

* Inline editor with copy/save/reload/rearrange controls
* Works against:
  * A `<grapper-view>` component (keeps attributes and content synchronized)
  * Inline code provided in the light DOM (comment node or `<textarea>`)
  * An `<iframe>`’s `document.body`
* Read-only, show, and edit modes
* Optional line highlighting
* Theme switching (light/dark)
* Diagnostics event stream for Grapper View validation


## Installation

You can install the component via npm:

```bash
npm install --save grapper-editor
```

Then import it in your app from CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/grapper-editor@1.0.0-beta.1/dist/editor.js"></script>
```

> The component registers as `<g-editor>`.


## Working with the Grapper view (`<grapper-view>`)

When the `href` points at a `<grapper-view>`, the editor switches to **composer mode**:

```html
<grapper-view id="composer"></grapper-view>

<g-editor title="Composer" href="#composer" mode="edit"></g-editor>
```

In composer mode:

* The edited markup is applied to the composer’s **inner content**.
* All **attributes** on the composer are kept in sync (added/removed/updated) to match the edited
  source.
* Diagnostics will be computed against the live `<grapper-view>` and surfaced via the `diagnostic`
  event and the built-in panel (if your provider UI shows it).


## Inline content

You can provide the initial code as a comment node or a `<textarea>` in the light DOM:

```html

<g-editor title="My template" mode="edit">
  <!--
  <svg width="300" height="80">
    <text x="10" y="40">Hello Graphane!</text>
  </svg>
  -->
</g-editor>
```

Or:

```html
<g-editor title="My template" mode="edit">
  <textarea>
    <svg width="300" height="80">
      <text x="10" y="40">Hello Graphane!</text>
    </svg>
  </textarea>
</g-editor>
```


## Editing an existing element with `href`

Point the editor at any element in the same document (or an `<iframe>`):

```html
<div id="preview"></div>

<g-editor title="Section editor" href="#preview" mode="edit"></g-editor>
```

* If `href` targets an `<iframe>`, the editor waits for it to load and uses its
  `contentDocument.body`.
* When you edit, the target element’s `innerHTML` is updated in real time.



## Attributes

| Attribute         | Type      | Default   | Description                                                                                                        |
|-------------------|-----------|-----------|--------------------------------------------------------------------------------------------------------------------|
| `title`           | `string`  | `""`      | UI title displayed in the editor header.                                                                           |
| `href`            | `string`  | `""`      | CSS selector for the element to edit. Supports elements and `<iframe>`. When empty, uses inline light-DOM content. |
| `keep-format`     | `boolean` | `false`   | Preserve original formatting when re-loading code into the model.                                                  |
| `options`         | `object`  | `{}`      | Editor/model options (pass JSON string in HTML; a plain object when set programmatically).                         |
| `theme`           | `string`  | `"light"` | Editor theme. Set to `"dark"` for dark mode. Also responds to a global `themeChanged` event (see **Theming**).     |
| `mode`            | `string`  | `"show"`  | One of: `"readonly"`, `"show"`, `"edit"`. Controls editability and which header actions are visible.               |
| `lines-highlight` | `string`  | `""`      | Line ranges to highlight (e.g. `"1-3;8;12-14"`). See **Line highlighting**.                                        |

> All attributes are reactive and can be changed at runtime.


## Line highlighting

Use `lines-highlight` with a semicolon-separated list of single lines or inclusive ranges:

* Single lines: `5`
* Ranges: `10-15`
* Combined: `1-3;5;12-14`

The string is parsed into numeric lines and applied by the editor provider.


## UI & header actions

Depending on `mode`, the header shows:

* **Edit / Show** toggles
* **Reload** — discard unsaved edits and restore the original code
* **Rearrange** — re-parse and re-format the current code using the model’s loader
* **Copy** — copy current code to clipboard
* **Save** — trigger a download of the current code (uses the provided `saveFile` helper)

> In `readonly` mode, all editing controls are hidden and the editor is non-editable.


## Events

### `diagnostic`

Emitted whenever diagnostics are computed (typically after edits), especially useful with
`<grapper-view>`.

```js
const editor = document.querySelector('g-editor');
editor.addEventListener('diagnostic', (evt) => {
  // evt.detail is the diagnostic payload produced by your diagnostic pipeline
  console.log('Diagnostic:', evt.detail);
});
```

Perfect — with that `BASE.md` content I can now integrate the **public events from grapper-core** into the README for `<g-editor>`.

Here’s the **updated README** section with the **public events** clearly documented.

### Lifecycle Events

These are automatically emitted during the component's lifecycle:

| Event         | When it fires                                                               |
| ------------- | --------------------------------------------------------------------------- |
| **`ready`**   | When the component has been instantiated and its constructor has run.       |
| **`render`**  | After the component has built its initial UI structure in the shadow DOM.   |
| **`refresh`** | After the component has updated its content without a full re-render.       |
| **`update`**  | Each time the component’s content is updated (may fire multiple times).     |


## Programmatic API

Access the component instance and call methods/properties directly:

```js
const editor = document.querySelector('g-editor');

// Read or replace the entire code buffer
console.log(editor.code);
editor.code = '<svg><text>Hello</text></svg>';

// Update without changing "original" snapshot
editor.update('<div>New content</div>');

// Is the buffer different from the original snapshot?
if (editor.isChanged) {
  // Revert to original snapshot
  await editor.discardChanges();
}

// Re-parse/normalize current code via the model
await editor.rearrange();

// Utilities
await editor.toClipboard();
await editor.toDisk();     // triggers a file save
editor.resetChange();      // sets "original" = current buffer
```

**Properties**

* `code: string` — get/set current buffer
* `isChanged: boolean` — whether `code` differs from the original snapshot captured on load or after
  `resetChange()`

**Methods (async when noted)**

* `update(v: string): Promise<void>`
* `discardChanges(): Promise<void>`
* `rearrange(): Promise<void>`
* `toClipboard(): Promise<void>`
* `toDisk(): Promise<void>`
* `resetChange(): void`


## Theming

Set `theme="light"` or `theme="dark"` directly, or broadcast a global theme change:

```js
document.documentElement.dispatchEvent(
  new CustomEvent('themeChanged', {detail : {theme : 'dark'}})
);
```

The editor listens for `themeChanged` on `document.documentElement` and updates itself.


## Examples

### 1) Grapper View

```html
<grapper-view id="chart">
  <tempplate>
    <svg viewBox="0 0 200 100" width="200px" height="100px">
      <g stroke-width="12" stroke-linecap="round">
        <g g-for="(record, index) of data">
          <line  x1="22"
                 :x2="record.value"
                 :y1="index * 20 + 30"
                 :y2="index * 20 + 30"
                 :stroke="record.color"
          ></line>
        </g>
      </g>
    </svg>
  </tempplate>
  <script type="data">
    [
      {"color": "#D80000", "value": 130},
      {"color": "#00D800", "value": 170},
      {"color": "#0000D8", "value": 100}
    ]
  </script>
</grapper-view>

<g-editor title="Basic example" href="#chart"></g-editor>
```

### 2) Read-only viewer

```html
<g-editor title="Spec preview" mode="readonly" lines-highlight="1-5;12">
  <!--
  <article>
    <h1>Spec</h1>
    <p>…</p>
  </article>
  -->
</g-editor>
```

### 3) Editing inside an iframe

```html
<iframe id="sandbox" src="/playground.html"></iframe>

<g-editor title="Iframe body editor" href="#sandbox" mode="edit"></g-editor>
```



## Tips & gotchas

* `keep-format` helps preserve the original formatting when re-loading code into the model. If you
  prefer normalized output, leave it `false`.
* If your `href` selector doesn’t match anything, the editor logs an error and renders nothing.
* For `<grapper-view>`, both **attributes** and **inner content** are source-of-truth from the
  editor; manual changes to the live element may be overwritten by subsequent edits.

