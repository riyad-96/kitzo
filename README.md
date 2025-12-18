# kitzo

[![npm](https://img.shields.io/npm/v/kitzo)](https://www.npmjs.com/package/kitzo)

### A lightweight React micro-utility.

#### Install

```bash
npm i kitzo
```

#### React APIs

```jsx
import { ToastContainer, toast, Tooltip, useDebounce, useWindowSize } from 'kitzo';
```

> You can import only what you need.

#### UI

- Toast message
- Tooltip

##### Toast API:

```jsx
import { toast } from 'kitzo';
import MyCustomComponent from './MyCustomComponent';

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
import { ToastContainer, toast } from 'kitzo';

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

      {/* Toast container must be placed */}
      <ToastContainer />
    </div>
  );
}
```

> Each toast can have its own position. default position is `top-center`.

##### React Tooltip API usage:

```jsx
import { Tooltip } from 'kitzo';

function App() {
  return (
    <div>
      <h1>Tooltip api</h1>

      <div>
        <Tooltip
          content="Tooltip"
          tooltipOptions={{
            offset: 10,
            smartHover: true,
          }}
          animate={{
            duration: 120,
            startDelay: 400,
            endDelay: 50,
          }}
          style={{
            '--arrow-size': 6,
            '--arrow-color': 'red',
          }}
        >
          <button>Hover me</button>
        </Tooltip>
      </div>
    </div>
  );
}
```

> You can provide your own custom jsx element as `content`. e.g. `content={<div>Custom tooltip</div>}`

---

### Hooks

- useDebounce
- useWindowSize

#### useDebounce usage:

```jsx
import { useDebounce } from 'kitzo';

function App() {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, 500);

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>Debounced value: {debouncedValue}</p>
    </div>
  );
}
```

#### useWindowSize usage:

```jsx
import { useWindowSize } from 'kitzo';

function App() {
  const { screenWidth, screenHeight } = useWindowSize({ delay: 100 });

  return (
    <div>
      <p>Window width: {width}</p>
      <p>Window height: {height}</p>
    </div>
  );
}
```

---

### Functions

- copy _(Copy text to clipboard)_

#### copy usage:
```jsx
import { copy } from 'kitzo/fns';
import { ToastContainer, toast } from 'kitzo';

// copy(text: string): Promise<void>;

function App() {
  async function copyText(text) {
    try {
      await copy(text);
      toast.success('Copied to clipboard');
    } catch (err) {
      console.error(err);
      toast.error('Failed to copy to clipboard');
    }
  }

  return (
    <div>
      <button onClick={() => copyText('hello world')}>Copy text</button>
      <ToastContainer />
    </div>
  );
}

// or just
copy('hello world');
```

> Use `copy` function to copy text to clipboard.
