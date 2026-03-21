import CodeBlock from '@/components/code/CodeBlock';
import UseCopyAPITable from '@/components/docs/hooks/useCopy/UseCopyAPITable';
import { Metadata } from 'next';
import CopyPreview from '@/components/docs/hooks/useCopy/CopyPreview';

export const metadata: Metadata = {
  title: 'kitzo • Hooks - useCopy',
};

export default function UseCopyPage() {
  return (
    <div className="space-y-10">
      {/* Name */}
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">useCopy</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Copy text to the clipboard with status tracking and optional reset
          delay.
        </p>
      </div>

      {/* Usage */}
      <div className="space-y-3">
        <h2 className="text-xl">Usage</h2>
        <CodeBlock
          fileName="Copy.tsx"
          code={`const { copy, status, isCopied, isCopying, isError } = useCopy(resetDelay);`}
        />
      </div>

      {/* Example */}
      <div className="space-y-4">
        <h2 className="text-xl">Example</h2>

        <CopyPreview />

        <CodeBlock
          fileName="CopyExample.tsx"
          code={`import { useCopy } from 'kitzo';
            
function CopyDemo() {
  const { copy, status } = useCopy(2000);

  return (
    <div>
      <input onChange={(e) => setText(e.target.value)} />
      <button onClick={() => copy(text)}>Copy</button>
      <p>Status: {status}</p>
    </div>
  );
}`}
        />
      </div>

      {/* API */}
      <div className="space-y-3">
        <h2 className="text-xl">API</h2>

        <UseCopyAPITable />
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Returns a copy function and status flags to track the copy process.
        </p>
      </div>

      {/* Behavior */}
      <div className="space-y-3">
        <h2 className="text-xl">Behavior</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
          <li>
            Tracks copy status:{' '}
            <code className="rounded-md border border-neutral-200 bg-neutral-100 px-1 py-0.5 text-xs dark:border-neutral-800 dark:bg-neutral-900">
              standby
            </code>
            ,{' '}
            <code className="rounded-md border border-neutral-200 bg-neutral-100 px-1 py-0.5 text-xs dark:border-neutral-800 dark:bg-neutral-900">
              copying
            </code>
            ,{' '}
            <code className="rounded-md border border-neutral-200 bg-neutral-100 px-1 py-0.5 text-xs dark:border-neutral-800 dark:bg-neutral-900">
              copied
            </code>
            , or{' '}
            <code className="rounded-md border border-neutral-200 bg-neutral-100 px-1 py-0.5 text-xs dark:border-neutral-800 dark:bg-neutral-900">
              error
            </code>
          </li>
          <li>
            Automatically resets to{' '}
            <code className="rounded-md border border-neutral-200 bg-neutral-100 px-1 py-0.5 text-xs dark:border-neutral-800 dark:bg-neutral-900">
              standby
            </code>{' '}
            after{' '}
            <code className="rounded-md border border-neutral-200 bg-neutral-100 px-1 py-0.5 text-xs dark:border-neutral-800 dark:bg-neutral-900">
              resetDelay
            </code>
          </li>
          <li>Prevents multiple simultaneous copy operations</li>
          <li>
            Provides convenient boolean flags:{' '}
            <code className="rounded-md border border-neutral-200 bg-neutral-100 px-1 py-0.5 text-xs dark:border-neutral-800 dark:bg-neutral-900">
              isCopying
            </code>
            ,{' '}
            <code className="rounded-md border border-neutral-200 bg-neutral-100 px-1 py-0.5 text-xs dark:border-neutral-800 dark:bg-neutral-900">
              isCopied
            </code>
            ,{' '}
            <code className="rounded-md border border-neutral-200 bg-neutral-100 px-1 py-0.5 text-xs dark:border-neutral-800 dark:bg-neutral-900">
              isError
            </code>
            ,{' '}
            <code className="rounded-md border border-neutral-200 bg-neutral-100 px-1 py-0.5 text-xs dark:border-neutral-800 dark:bg-neutral-900">
              isStandby
            </code>
          </li>
        </ul>
      </div>
    </div>
  );
}
