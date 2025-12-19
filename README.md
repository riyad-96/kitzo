# kitzo

[![npm](https://img.shields.io/npm/v/kitzo)](https://www.npmjs.com/package/kitzo)

### A lightweight React micro-utility.

#### Install

```bash
npm i kitzo
```

#### React APIs

```jsx
import {
  ToastContainer,
  toast,
  Tooltip,
  useDebounce,
  useWindowSize,
} from 'kitzo';
```

> You can import only what you need.

#### UI

- Toast message
- Tooltip

##### Toast API usage:

```jsx
import { toast } from 'kitzo';
import MyCustomComponent from './MyCustomComponent';

// ---------------------
// Normal / Success / Error
// ---------------------

toast('Toast message', {
  id: 'normat_toast',
  duration: 2000,
  showIcon: true,
  position: 'top-center',
});

toast.success('Toast message', {
  id: 'success_toast',
  duration: 2000,
  showIcon: true,
  position: 'top-center',
});

toast.error('Toast message', {
  id: 'error_toast',
  duration: 2000,
  showIcon: true,
  position: 'top-center',
});

// content can be: (dismiss) => (
// <div>
//   <span>any thing</span>
//   <button onClick={dismiss} >❌</button>
// </div>
//)

// ---------------------
// Promise-based toast
// ---------------------

toast.promise(
  promise(), // function that returns a promise
  {
    loading: 'Saving...',
    success: (res) => `Saved: ${res}`, // or just 'Saved'
    error: (err) => `Error occurred: ${err}`, // or just 'Error occurred'
  },
  {
    id: 'promise_toast',
    duration: 2000,
    showIcon: true,
    position: 'top-center',
  },
);

// ---------------------
// Custom toast
// ---------------------

// JSX element
toast.custom(<MyCustomComponent />, {
  id: 'custom_toast',
  duration: 2000,
  position: 'top-center',
});

// Function that receives a dismiss handler
toast.custom(
  (dismiss) => (
    <div>
      <span>Custom toast message</span>
      <button onClick={dismiss}>Close</button>
    </div>
  ),
  {
    id: 'custom_toast',
    duration: Infinity, // or 3000
    position: 'top-center',
  },
);

// Simple string
toast.custom('Simple string toast', {
  id: 'custom_toast',
  duration: 2000,
  position: 'top-center',
});

// ---------------------
// Update / Dismiss
// ---------------------
// ❗ Update is only supported on custom toasts

toast.update('my-toast', 'Updated content!', {
  duration: 3000,
});

// Dismiss by id (optional)
toast.dismiss('my-toast');
// Or dismiss all toasts
toast.dismiss();
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
