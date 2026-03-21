'use client';

import CodeBlock from '@/components/code/CodeBlock';
import Tab from '@/components/partials/Tab';
import PreviewButton from '@/components/ui/PreviewButton';
import { toast } from 'kitzo';

export default function PromiseToast() {
  const promise = () =>
    new Promise((res, rej) =>
      setTimeout(
        () =>
          Math.random() > 0.5
            ? res('Successfully updated')
            : rej("Couldn't update, try again"),
        2000,
      ),
    );

  return (
    <div>
      <h3 className="mb-1 text-xl font-medium">Promise Toast</h3>
      <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
        Handle async operations with automatic state transitions.
      </p>

      <Tab
        preview={
          <div className="grid size-full place-items-center rounded-lg border border-neutral-200 bg-neutral-50 px-6 dark:border-neutral-800 dark:bg-neutral-900">
            <div className="flex flex-wrap gap-2">
              <PreviewButton
                onClick={() => {
                  toast.promise(promise(), {
                    loading: 'Loading data...',
                    success: 'Data loaded successfully',
                    error: 'Failed to load data',
                  });
                }}
              >
                Promise
              </PreviewButton>
              <PreviewButton
                onClick={() => {
                  toast.promise(promise(), {
                    loading: 'Updating data...',
                    success: (res) => `Response: ${res}`,
                    error: (err) => `Error: ${err}`,
                  });
                }}
              >
                Dynamic Toast
              </PreviewButton>
            </div>
          </div>
        }
        code={
          <CodeBlock
            className="h-54.5"
            fileName="PromiseToasts.tsx"
            code={`const fetchPromise = fetchData();

toast.promise(fetchPromise, {
  loading: 'Loading data...',
  success: 'Data loaded successfully',
  error: 'Failed to load data',
});

// Dynamic data
const updatePromise = updateData();

toast.promise(updatePromise, {
  loading: 'Updating data...',
  success: (res) => \`Response: \${res}\`,
  error: (err) => \`Error: \${err}\`,
});`}
          />
        }
      />
    </div>
  );
}
