# ARIA toggles
This package contains [HTML custom element] definitions that turn
[ARIA]-enabled buttons into dynamic toggles, and allow you to create accordion
groupings with exclusive selections.

## Usage
Grab [dist/aria-toggle.js](dist/aria-toggle.js) and include it in either the
`<head>` or after the `<body>` of your HTML document. Then, create your toggles
with:

```html
<button is="aria-toggle" aria-controls="content-id">Toggle your content</button>
<div id="content-id">
  <p>Your content goes here.</p>
</div>
```

### `<button is="aria-toggle">`
Every `<button is="aria-toggle">` has _associate content_ defined by the id
referenced in its [aria-controls] attribute, and is imbued with the following
additional super powers:

1. The DOM element will have an `expanded` property that indicates whether it's
   expanded and, correspondingly, whether its associated content is visible.
   The initial value of `expanded` is determined by the following rules:

   * If the `<button>` has an [`aria-expanded`][aria-expanded] attribute, then
     the initial value is based on that attribute and the associated content is
     shown or hidden based on that value.

   * Otherwise, the initial value is `false` only if its associated content has
     `aria-hidden="true"`.

1. The DOM element will have `open()`, `close()` and `toggle()` methods that
   change its `expanded` property.

1. Clicking (or pressing <kbd>space</kbd> or <kbd>enter</kbd> when focused)
   will toggle its `expanded` property.

1. The DOM element will dispatch `open` and `close` events whenever its
   `expanded` property changes.

1. The `expanded` property and the `aria-expanded` attribute _reflect_ one
   another, so setting one will always change the other. This means that other
   components or frameworks can set the `aria-expanded` attribute rather than
   having to know about a toggle's extra properties or methods, and that you
   can style expanded buttons via CSS with `[is=aria-toggle]` (open),
   `[is=aria-toggle][aria-expanded=false]` (closed).

You can create new toggles dynamically with:

```js
var toggle = document.createElement('button', 'aria-toggle');
// or
var toggle = new ARIAToggle();
```

### `<aria-toggle-group exclusive>`
Wrap two or more `<button is="aria-toggle">` elements in an
`<aria-toggle-group>` with the `exclusive` attribute (either empty or set to
anything other than `false`), and whenever a toggle is opened the others will
be closed automatically.


### Hashchange helper
The browser bundle comes with a `hashchange` event listener that detects when
`location.hash` matches the id of either a `<button is="aria-toggle">` or its
associated content, then:

1. If the target is a toggle, the toggle is opened. Otherwise, if the target
   has an associated toggle, that is opened.
2. The associated content is scrolled into view.

If you wish to disabled this behavior, you can call:

```js
ARIAToggle.removeListeners();
```

Be sure to do so _before_ the window's `load` event is called (e.g. in the
`<head>` immediately after the `aria-toggle.js` is included).


## Bundling
The browser bundle in [src/bundle.js](src/bundle.js) includes the excellent
and light-weight [document-register-element] polyfill. If you wish to bring
your own polyfill for the `document.registerElement()` API, you can require
the top-level module directly to get just the `<button is="aria-toggle>` custom
element:

```js
// assigning to window.ARIAToggle is optional
window.ARIAToggle = require('aria-toggle');
```

Or roll your own version of [src/bundle.js](src/bundle.js) and name the
constructors whatever you want, take or leave the [hashchange
helper](#hashchange-helper), etc.

[ARIA]: https://www.w3.org/TR/wai-aria/
[aria-controls]: https://www.w3.org/TR/wai-aria/states_and_properties#aria-controls
[aria-expanded]: https://www.w3.org/TR/wai-aria/states_and_properties#aria-expanded
[HTML custom element]: http://webcomponents.org/articles/introduction-to-custom-elements/
[document-register-element]: https://github.com/WebReflection/document-register-element/
