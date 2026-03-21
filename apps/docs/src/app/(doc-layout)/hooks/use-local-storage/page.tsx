import CodeBlock from '@/components/code/CodeBlock';
import { Metadata } from 'next';
import UseLocalStorageAPITable from '@/components/docs/hooks/useLocalStorage/UseLocalStorageAPITable';
import LocalStoragePreview from '@/components/docs/hooks/useLocalStorage/LocalStoragePreview';
import { InlineCode } from '@/components/code/inline-code';

export const metadata: Metadata = {
  title: 'kitzo • Hooks - useLocalStorage',
};

export default function UseLocalStoragePage() {
  return (
    <div className="space-y-10">
      {/* Name */}
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">useLocalStorage</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Persist state to the browser&apos;s localStorage. Syncs state across
          multiple tabs.
        </p>
      </div>

      {/* Usage */}
      <div className="space-y-3">
        <h2 className="text-xl">Usage</h2>
        <CodeBlock
          fileName="LocalStorage.tsx"
          code={`const [value, setValue] = useLocalStorage('key', 'initialValue');`}
        />
      </div>

      {/* Example */}
      <div className="space-y-4">
        <h2 className="text-xl">Example</h2>

        <LocalStoragePreview />

        <CodeBlock
          fileName="ThemeToggle.tsx"
          code={`import { useLocalStorage } from 'kitzo';
            
function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Toggle Theme: {theme}
    </button>
  );
}`}
        />
      </div>

      {/* API */}
      <div className="space-y-3">
        <h2 className="text-xl">API</h2>

        <UseLocalStorageAPITable />
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          Returns an array containing the current state value and a setter
          function, similar to <InlineCode>useState</InlineCode>.
        </p>
      </div>

      {/* Behavior */}
      <div className="space-y-3">
        <h2 className="text-xl">Behavior</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
          <li>Syncs changes to localStorage automatically.</li>
          <li>
            Listens to <InlineCode>storage</InlineCode> events, syncing state
            across browser tabs.
          </li>
          <li>Safely handles hydration issues during server-side rendering.</li>
          <li>
            Supports debouncing writes with the{' '}
            <InlineCode>debounceMs</InlineCode> option.
          </li>
        </ul>
      </div>
    </div>
  );
}
