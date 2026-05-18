import CodeBlock from '@/components/code/CodeBlock';
import { Metadata } from 'next';
import UseMountedAPITable from '@/components/docs/hooks/useMounted/UseMountedAPITable';
import MountedPreview from '@/components/docs/hooks/useMounted/MountedPreview';
import { InlineCode } from '@/components/code/inline-code';

export const metadata: Metadata = {
  title: 'kitzo • Hooks - useMounted',
  description:
    'Detect when a React component has mounted on the client-side to safely render browser-only features without hydration mismatch errors.',
};

export default function UseMountedPage() {
  return (
    <div className="space-y-10">
      {/* Name */}
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">useMounted</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Detect when a React component has fully mounted on the client-side.
          Extremely useful for avoiding hydration mismatches when rendering browser-only features.
        </p>
      </div>

      {/* Usage */}
      <div className="space-y-3">
        <h2 className="text-xl">Usage</h2>
        <CodeBlock
          fileName="Mounted.tsx"
          code={`const isMounted = useMounted();`}
        />
      </div>

      {/* Example */}
      <div className="space-y-4">
        <h2 className="text-xl">Example</h2>

        <MountedPreview />

        <CodeBlock
          fileName="ClientOnlyWrapper.tsx"
          code={`import { useMounted } from 'kitzo';
            
function ClientOnly({ children }: { children: React.ReactNode }) {
  const isMounted = useMounted();

  if (!isMounted) {
    // Render an empty state or a server-safe fallback skeleton during SSR/hydration
    return <div className="h-20 animate-pulse bg-neutral-100 dark:bg-neutral-800 rounded-lg" />;
  }

  // Safe to render browser-only APIs or components after mounting
  return <>{children}</>;
}`}
        />
      </div>

      {/* API */}
      <div className="space-y-3">
        <h2 className="text-xl">API</h2>

        <UseMountedAPITable />
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          Returns a simple boolean indicating the component&apos;s mount status.
        </p>
      </div>

      {/* Behavior */}
      <div className="space-y-3">
        <h2 className="text-xl">Behavior</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
          <li>
            Guarantees a hydration-safe fallback during server-side rendering (SSR) and static generation (SSG).
          </li>
          <li>
            Returns <InlineCode>false</InlineCode> on the server and initial client render, then transitions to <InlineCode>true</InlineCode> immediately after hydration.
          </li>
          <li>
            Prevents React hydration mismatches caused by browser-only global APIs (e.g. <InlineCode>window</InlineCode>, <InlineCode>document</InlineCode>, or <InlineCode>localStorage</InlineCode>).
          </li>
          <li>
            Triggers a single re-render upon mount to update layout and display client-only features.
          </li>
        </ul>
      </div>
    </div>
  );
}
