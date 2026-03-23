import CodeBlock from '@/components/code/CodeBlock';
import { Metadata } from 'next';
import UseOverlayAPITable from '@/components/docs/hooks/useOverlay/UseOverlayAPITable';
import OverlayPreview from '@/components/docs/hooks/useOverlay/OverlayPreview';

export const metadata: Metadata = {
  title: 'kitzo • Hooks - useOverlay',
  description:
    'Synchronize UI overlays with browser history for natural back/forward navigation.',
};

export default function UseOverlayPage() {
  return (
    <div className="space-y-10">
      {/* Name */}
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">useOverlay</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          Manage UI overlays (modals, drawers, popovers) and synchronize them
          with the browser navigation history. Requires a stable ID to ensure
          states are correctly restored across page unmounts and remounts.
        </p>
      </div>

      {/* When NOT to use */}
      <div className="space-y-3 rounded-lg border border-amber-500/25 bg-amber-500/10 p-4">
        <h2 className="text-base font-semibold text-amber-800 dark:text-amber-500">
          ⚠ When NOT to use this hook
        </h2>
        <p className="text-sm text-amber-700 dark:text-amber-400">
          <strong>
            Do not use <code>useOverlay</code>
          </strong>{' '}
          for simple modals or dialogs that you only intend to show once and
          never reopen via the browser&apos;s forward button. Because{' '}
          <code>open()</code> pushes a history entry, a user who closes the
          dialog with the browser&apos;s Back button can immediately reopen it
          by pressing Forward.
        </p>
        <p className="text-sm text-amber-700 dark:text-amber-400">
          This hook is designed for <strong>history-aware overlays</strong> —
          ones where you intentionally want the overlay to be restorable through
          browser navigation (e.g. multi-step flows, deep-linked modals). For
          simple one-time dialogs, use plain <code>useState</code> instead.
        </p>
      </div>

      {/* Usage */}
      <div className="space-y-3">
        <h2 className="text-xl font-medium">Usage</h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          The <code>id</code> parameter is <strong>required</strong>. It must be
          a stable string that uniquely identifies the overlay instance on the
          page.
        </p>
        <CodeBlock
          fileName="OverlayExample.tsx"
          code={`const { isOpen, open, close } = useOverlay('page-name:my-modal');`}
        />
      </div>

      {/* Example */}
      <div className="space-y-4">
        <h2 className="text-xl font-medium">Interactive Demo</h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Open the modals below and try navigating using your browser&apos;s
          back button. Even if you navigate to another page and come back, the
          stable IDs ensure the overlay state is perfectly restored.
        </p>

        <OverlayPreview />

        <div className="space-y-3">
          <h3 className="pt-4 text-lg font-medium">Implementation Example</h3>
          <CodeBlock
            fileName="App.tsx"
            code={`import { useOverlay } from 'kitzo';
import { Dialog, DialogContent } from './components/ui/dialog';

function MyComponent() {
  // Use page-scoped IDs for maximum reliability
  const modal = useOverlay('settings:profile-modal');

  return (
    <>
      <button onClick={modal.open}>Open Modal</button>

      <Dialog open={modal.isOpen} onOpenChange={(open) => !open && modal.close()}>
        <DialogContent>
          <h2>I am a history-aware modal!</h2>
          <button onClick={modal.close}>Close</button>
        </DialogContent>
      </Dialog>
    </>
  );
}`}
          />
        </div>
      </div>

      {/* API */}
      <div className="space-y-3">
        <h2 className="text-xl font-medium">API</h2>
        <UseOverlayAPITable />
      </div>

      {/* Recommendations */}
      <div className="space-y-3">
        <h2 className="text-xl font-medium">Best Practices</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
          <li>
            <strong>Stable IDs:</strong> Always provide a hardcoded string ID.
            Avoid using random IDs or IDs generated during render (like{' '}
            <code>useId</code>) if they might change when the component tree
            shifts.
          </li>
          <li>
            <strong>Page Scoping:</strong> Prefix your IDs with the page or
            feature name (e.g., <code>&apos;login:otp-modal&apos;</code>) to
            avoid collisions with other overlays in the history stack.
          </li>
          <li>
            <strong>LIFO Order:</strong> The hook handles stacking automatically
            using a history-based stack model. Back button will always close the
            most recently opened overlay.
          </li>
        </ul>
      </div>
    </div>
  );
}
