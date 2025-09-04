# kitzo

[![npm](https://img.shields.io/npm/v/kitzo)](https://www.npmjs.com/package/kitzo)

### A lightweight tool

Current features

- Copy on click
- Tooltip on mouseover
- Ripple effect on mousedown
- Debounce function
- Hover clip-path effect

#### Install

```bash
npm i kitzo
```

or

```javascript
<script src="https://cdn.jsdelivr.net/npm/kitzo@1.1.7/dist/kitzo.umd.min.js"></script>
```

> Attach this script tag in the html head tag and you are good to go.

---

#### Quick usage overview


| [API](#apis)                        |
| ----------------------------------- |
| [`kitzo.copy()`](#copy-api)         |
| [`kitzo.tooltip()`](#tooltip-api)   |
| [`kitzo.ripple()`](#ripple-api)     |
| [`kitzo.debounce()`](#debounce-api) |
| [`kitzo.clippath()`](#clippath-api) |

#### APIs
```javascript
// NPM usage
import kitzo from 'kitzo';

kitzo.copy();
kitzo.tooltip();
kitzo.ripple();
kitzo.debounce();
kitzo.clippath();
```

> Use a modern build tool. **vite** - recommended

##### Copy API:

```javascript
kitzo.copy(selector | element, {
  doc: string,
  event: 'click' | 'dblclick' | 'contextmenu' | 'mouseup' | 'touchend',
});
```

> Instantly adds click-to-copy functionality to buttons, reliably and with fallback.

##### Tooltip API:

```javascript
kitzo.tooltip(selectors | element | NodeList, {
  tooltip: string,
  direction: 'top' | 'right' | 'bottom' | 'left',
  arrow: 'on' | 'off',
  offset: number,
  customClass: string,
  style: object,
});
```

> Attach minimal tooltips to buttons for clean, helpful hover hints.

##### Ripple API:

```javascript
kitzo.ripple(selectors | element | NodeList, {
  opacity: number,
  duration: number,
  color: string,
  size: number,
});
```

> Adds a lightweight, clean ripple effect to your buttons on click.

##### Debounce API:

```javascript
kitzo.debounce(callback, delayInMilliseconds);
```

```javascript
// Log only after typing stops for 500ms
const logSearch = kitzo.debounce((text) => {
  console.log('Searching for:', text);
}, 500);

// Attach to input
document.querySelector('#search').addEventListener('input', (e) => {
  logSearch(e.target.value);
});
```

> Debounce on every call of function.

##### Clippath API:

```javascript
kitzo.clippath(selectors | element | NodeList, {
  text: string,
  clippathSize: string | number,
  smooth: boolean,
  style: object,
});
```
