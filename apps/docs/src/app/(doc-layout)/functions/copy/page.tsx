import CodeBlock from '@/components/code/CodeBlock';
import CopyAPITable from '@/components/docs/functions/copy/CopyAPITable';

export const metadata = {
  title: 'kitzo • Functions - copy',
};

export default function CopyFunctionPage() {
  return (
    <div className="space-y-10">
      {/* Name */}
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">copy</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Copy a string or serializable value to the system clipboard safely.
        </p>
      </div>

      {/* Usage */}
      <div className="space-y-3">
        <h2 className="text-xl">Usage</h2>
        <CodeBlock fileName="copy.ts" code={`await copy(value);`} />
      </div>

      {/* Example */}
      <div className="space-y-4">
        <h2 className="text-xl">Example</h2>

        <CodeBlock
          fileName="CopyExample.tsx"
          code={`import { copy } from 'kitzo/fns';
            
async function copyExample() {
  try {
    await copy('Hello, world!');
    console.log('Copied successfully!');
  } catch (err) {
    console.error('Copy failed:', err);
  }
}

copyExample();`}
        />
      </div>

      {/* API */}
      <div className="space-y-3">
        <h2 className="text-xl">API</h2>

        <CopyAPITable />
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Returns a Promise that resolves after the text is copied to the
          clipboard.
        </p>
      </div>

      {/* Behavior */}
      <div className="space-y-3">
        <h2 className="text-xl">Behavior</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
          <li>
            Automatically falls back to a legacy {CodeWord('<textarea />')} copy
            method if `navigator.clipboard` is unavailable.
          </li>
          <li>
            Serializes non-string/number values using{' '}
            {CodeWord('JSON.stringify')}.
          </li>
          <li>Returns a Promise to allow async handling and error catching.</li>
          <li>
            Circular objects are replaced with a placeholder string to prevent
            errors.
          </li>
        </ul>
      </div>
    </div>
  );
}

function CodeWord(word: string) {
  return (
    <code className="rounded-md border border-neutral-200 bg-neutral-100 px-1 py-0.5 text-xs dark:border-neutral-800 dark:bg-neutral-900">
      {word}
    </code>
  );
}
