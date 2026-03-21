import CodeBlock from '@/components/code/CodeBlock';
import { Metadata } from 'next';
import UseDebouncedCallbackAPITable from '@/components/docs/hooks/useDebouncedCallback/UseDebouncedCallbackAPITable';
import DebouncedCallbackPreview from '@/components/docs/hooks/useDebouncedCallback/DebouncedCallbackPreview';
import { InlineCode } from '@/components/code/inline-code';

export const metadata: Metadata = {
  title: 'kitzo • Hooks - useDebouncedCallback',
};

export default function UseDebouncedCallbackPage() {
  return (
    <div className="space-y-10">
      {/* Name */}
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">useDebouncedCallback</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Return a debounced version of the provided callback function.
        </p>
      </div>

      {/* Usage */}
      <div className="space-y-3">
        <h2 className="text-xl">Usage</h2>
        <CodeBlock
          fileName="DebouncedCallback.tsx"
          code={`const debouncedCallback = useDebouncedCallback(callback, { delay: 500 });`}
        />
      </div>

      {/* Example */}
      <div className="space-y-4">
        <h2 className="text-xl">Example</h2>

        <DebouncedCallbackPreview />

        <CodeBlock
          fileName="Fetch.tsx"
          code={`import { useDebouncedCallback } from 'kitzo';
import { useState } from 'react';
            
function SearchInput() {
  const [value, setValue] = useState('');

  const debouncedSearch = useDebouncedCallback((query: string) => {
    // fire API call here with query
    console.log("Searching for:", query);
  }, { delay: 500 });

  return (
    <input
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        debouncedSearch(e.target.value);
      }}
    />
  );
}`}
        />
      </div>

      {/* API */}
      <div className="space-y-3">
        <h2 className="text-xl">API</h2>

        <UseDebouncedCallbackAPITable />
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          Returns a debounced version of the callback, with additional
          <InlineCode>cancel</InlineCode> and <InlineCode>flush</InlineCode>{' '}
          methods attached.
        </p>
      </div>

      {/* Behavior */}
      <div className="space-y-3">
        <h2 className="text-xl">Behavior</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
          <li>
            Delays executing the callback until the delay has fully elapsed.
          </li>
          <li>
            Provides <InlineCode>cancel</InlineCode> to clear the timeout and{' '}
            <InlineCode>flush</InlineCode> to execute immediately.
          </li>
          <li>
            Options support <InlineCode>leading</InlineCode> and{' '}
            <InlineCode>trailing</InlineCode> edge execution.
          </li>
        </ul>
      </div>
    </div>
  );
}
