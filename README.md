# kitzo

[![npm](https://img.shields.io/npm/v/kitzo)](https://www.npmjs.com/package/kitzo)

### A lightweight library of Vanilla js and React js

##### [Vanilla js](#quick-usage-overview-vanilla-js)

- Copy on click
- Tooltip on mouseover
- Ripple effect on mousedown
- Debounce function
- Hover clip-path effect

##### [React js](#react)

- React Toast notifications

#### Install

```bash
npm i kitzo
```

or

```javascript
<script src="https://cdn.jsdelivr.net/npm/kitzo@2.0.9/dist/kitzo.umd.min.js"></script>
```

> Attach this script tag in the html head tag and you are good to go.

---

#### Quick usage overview: Vanilla js

| [API](#vanilla-apis)                |
| ----------------------------------- |
| [`kitzo.copy()`](#copy-api)         |
| [`kitzo.tooltip()`](#tooltip-api)   |
| [`kitzo.ripple()`](#ripple-api)     |
| [`kitzo.debounce()`](#debounce-api) |
| [`kitzo.clippath()`](#clippath-api) |

#### Vanilla APIs

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

---

## React

#### Install

```bash
npm i kitzo
```

#### React APIs

```jsx
import { ToastContainer, toast, ... } from 'kitzo/react';
```

##### Toast API:

```jsx
import { toast } from 'kitzo/react';

toast.success('toast message', {});
toast.error('toast message', {});
toast.promise(
  promise(),
  {
    loading: 'Saving...',
    success: 'Saved',
    error: 'Error occured',
  },
  { duration: 2000 }
);
```

##### Toast API Usage

```jsx
import { ToastContainer, toast } from 'kitzo/react';

function App() {
  function fakePromise() {
    return new Promise((resolved, rejected) => {
      setTimeout(() => {
        Math.random() > 0.5 ? resolved('resolved') : rejected('rejected');
      }, 2000)
    })
  }

  return (
    <div>
      <button onClick={() => toast.success('✅ Success toast message')}>Succes</button>
      <button onClick={() => toast.error('❌ Error toast message')}>Error</button>
      <button
        onClick={() => {
          toast.promise(
            fakePromise(),
            {
              loading: 'Saving data...',
              success: 'Data saved',
              error: 'Failed saving data',
            },
            { duration: 2500 }
          );
        }}
      >
        Promise
      </button>

      {/* Toast container must needed */}
      <ToastContainer position="top-center" />
    </div>
  );
}
```
