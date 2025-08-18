# zero-kitzo

[![npm](https://img.shields.io/npm/v/kitzo)](https://www.npmjs.com/package/kitzo)

### A lightweight tool

Current features

- Copy on click
- Tooltip on mouseover
- Ripple effect on mousedown
- Debounce function

#### Install

```bash
npm i kitzo
```

> or

```javascript
<script src="https://cdn.jsdelivr.net/npm/kitzo@1.0.0/dist/kitzo.umd.min.js"></script>
```

---

#### Quick usage overview

| [NPM](#npm-usage)                | [CDN](#cdn-usage)  |
| -------------------------------- | ------------------ |
| [`kitzoCopy()`](#copy-api-1)     | `kitzo.copy()`     |
| [`kitzoTooltip()`](#tooltip-api) | `kitzo.tooltip()`  |
| [`kitzoRipple()`](#ripple-api)   | `kitzo.ripple()`   |
| [`kitzoDebounce()`](#debounce)   | `kitzo.debounce()` |

#### NPM usage

```javascript
import { kitzoCopy, kitzoTooltip, kitzoRipple } from 'kitzo';
```

> Use a modern build tool. **vite** - recommended

##### Copy API:

```javascript
kitzoCopy(selector | element, {
  doc: string,
  event: 'click' | 'dblclick' | 'contextmenu' | 'mouseup' | 'touchend',
});
```

> Instantly adds click-to-copy functionality to buttons, reliably and with fallback.

##### Tooltip API:

```javascript
kitzoTooltip(selectors | element | NodeList, {
  tooltip: string,
  direction: 'top' | 'right' | 'bottom' | 'left',
  arrow: 'on' | 'off',
  offset: number,
  customClass: string,
  style: {},
});
```

> Attach minimal tooltips to buttons for clean, helpful hover hints.

##### Ripple API:

```javascript
kitzoRipple(selectors | element | NodeList, {
  opacity: number,
  duration: number,
  color: string,
  size: number | null,
});
```

> Adds a lightweight, clean ripple effect to your buttons on click.

##### Debounce API:

```javascript
kitzoDebounce(callback, delayInMilliseconds);
```

```javascript
// Log only after typing stops for 500ms
const logSearch = kitzoDebounce((text) => {
  console.log("Searching for:", text);
}, 500);

// Attach to input
document.querySelector("#search").addEventListener("input", (e) => {
  logSearch(e.target.value);
});
```

> Debounce on every call of function.

---

#### CDN usage

```html
<script src="https://cdn.jsdelivr.net/npm/kitzo@1.0.0/dist/kitzo.umd.min.js"></script>
```

> Attach this script tag in the html head tag and you are good to go.

```javascript
kitzo.copy();
kitzo.tooltip();
kitzo.ripple();
```

##### Copy API:

```javascript
kitzo.copy(selectors | element, {
  doc: string,
  event: 'click' | 'dblclick' | 'contextmenu' | 'mouseup' | 'touchend',
});
```

##### Tooltip API:

```javascript
kitzo.tooltip(selectors | element | NodeList, {
  tooltip: string,
  direction: 'top' | 'right' | 'bottom' | 'left',
  arrow: 'on' | 'off',
  offset: number,
  customClass: string,
  style: {},
});
```

##### Ripple API:

```javascript
kitzo.ripple(selectors | element | NodeList, {
  opacity: number,
  duration: number,
  color: string,
  size: number | null,
});
```

##### Debounce API:

```javascript
kitzo.debounce(callback, delayInMilliseconds);
```
```javascript
// Log only after typing stops for 500ms
const logSearch = kitzo.debounce((text) => {
  console.log("Searching for:", text);
}, 500);

// Attach to input
document.querySelector("#search").addEventListener("input", (e) => {
  logSearch(e.target.value);
});
```