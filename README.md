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
- Tooltip wrapper component

#### Install

```bash
npm i kitzo
```

or

```javascript
<script src="https://cdn.jsdelivr.net/npm/kitzo@2.1.20/dist/kitzo.umd.min.js"></script>
```

> Vanilla: Attach this script tag in the html head tag and you are good to go.

---

#### API links

- **Vanilla**: [copy](#copy-api), [Tooltip](#tooltip-api), [Ripple](#ripple-api), [Debounce](#debounce-api), [Clippath](#clippath-api), [Get type](#typecheck-api)
- **React**: [Toast](#react-toast-api-usage), [Tooltip](#react-tooltip-api)

#### Vanilla APIs

```javascript
// NPM usage
import kitzo from 'kitzo';

kitzo.copy();
kitzo.tooltip();
kitzo.ripple();
kitzo.debounce();
kitzo.clippath();
kitzo.getType();
```

> Use a modern build tool. **vite** - recommended

##### Copy API:

```javascript
kitzo.copy(doc);
```

> Copy functionality on call.

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

> Adds a lightweight, clean ripple effect to your elements on click.

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
  textOption: null | { selector: string, value: string | number },
  clippathSize: string | number,
  smooth: boolean,
  class: string,
  style: object,
});
```

##### TypeCheck API:

```javascript
kitzo.getType(type);

const data = [];
console.log(kitzo.getType(data)); // 'array'
```

---

## React

#### Install

```bash
npm i kitzo
```

#### React APIs

```jsx
import { ToastContainer, toast, Tooltip, ... } from 'kitzo/react';
```

##### Toast API:

```jsx
import { toast } from 'kitzo/react';

toast.success('toast message', { duration: 2000, style: {}, showIcon: true, position: 'top-center' });
toast.error('toast message', { duration: 2000, style: {}, showIcon: true, position: 'top-center' });

toast.promise(
  promise(), // call a function that returns promise
  {
    loading: 'Saving...',
    success: 'Saved' | (response) => 'Saved',
    error: 'Error occured' | (error) => 'Error occured',
  },
  { duration: 2000, style: {}, showIcon: true, position: 'top-center' },
);

// JSX element
toast.custom(<MyCustomComponent />, { duration: 2000, position: 'top-center' });

// Function that receives a dismiss handler
toast.custom((dismiss) => (
  <div>
    <span>Custom toast message</span>
    <button onClick={dismiss}>Close</button>
  </div>
), { duration: 3000 | Infinity });

// (and optionally)
toast.custom("string");
```

##### React Toast API Usage

```jsx
import { ToastContainer, toast } from 'kitzo/react';

function App() {
  function fakePromise() {
    return new Promise((resolved, rejected) => {
      setTimeout(() => {
        Math.random() > 0.5 ? resolved('resolved') : rejected('rejected');
      }, 2000);
    });
  }

  function promiseToast() {
    toast.promise(
      fakePromise(),
      {
        loading: 'Saving data...',
        success: 'Data saved',
        error: 'Failed saving data',
      },
      { duration: 2500, position: 'top-center' },
    );
  }

  function customToast() {
    toast.custom(
      (dismiss) => (
        <div>
          <span>Funtion that return jsx</span>
          <button onClick={dismiss}>Close</button>
        </div>
      ),
      {
        duration: 2000,
        position: 'top-center',
      },
    );
  }

  return (
    <div>
      <button onClick={() => toast.success('✅ Success toast message')}>Succes</button>
      <button onClick={() => toast.error('❌ Error toast message')}>Error</button>
      <button onClick={promiseToast}>Promise</button>
      <button onClick={customToast}>Custom Toast</button>

      {/* Toast container must needed */}
      <ToastContainer />
    </div>
  );
}
```

> Each toast can have its own position. default position is `top-center`.

##### React Tooltip API:

```jsx
import { Tooltip } from 'kitzo/react';

function App() {
  return (
    <div>
      <h1>Tooltip api</h1>

      <div>
        <Tooltip content="Tooltip" position="top" offset="10" hideOnTouch={true}>
          <button>Hover me</button>
        </Tooltip>
      </div>
    </div>
  );
}
```

> You can provide your own custom jsx element as `content`. e.g. `content={<div>Custom tooltip</div>}`
