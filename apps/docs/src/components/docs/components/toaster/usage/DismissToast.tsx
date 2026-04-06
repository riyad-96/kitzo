'use client';

import CodeBlock from '@/components/code/CodeBlock';
import Tab from '@/components/partials/Tab';
import PreviewButton from '@/components/snippets/PreviewButton';
import { toast } from 'kitzo';
import { useState } from 'react';

export default function DismissToast() {
  const [toastId, setToastId] = useState<string | number | null>(null);

  return (
    <div>
      <h3 className="mb-1 text-xl font-medium">Dismiss Toast</h3>
      <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
        Programmatically dismiss toasts.
      </p>

      <Tab
        preview={
          <div className="grid size-full place-items-center rounded-lg border border-neutral-200 bg-neutral-50 px-6 dark:border-neutral-800 dark:bg-neutral-900">
            <div className="flex flex-wrap gap-2">
              <PreviewButton
                onClick={() => {
                  if (toastId) return;

                  const id = 'dismiss-toast';
                  toast('This toast can be dismissed manually', {
                    id,
                    duration: Infinity,
                    onClose: () => {
                      setToastId(null);
                    },
                  });
                  setToastId(id);
                }}
              >
                Create Persistent Toast
              </PreviewButton>
              <PreviewButton
                onClick={() => {
                  if (toastId) {
                    toast.dismiss(toastId);
                  }
                }}
                disabled={!toastId}
              >
                Dismiss this Toast
              </PreviewButton>
            </div>
          </div>
        }
        code={
          <CodeBlock
            className="h-54.5"
            fileName="DismissToasts.tsx"
            code={`// Dismiss all toasts
toast.dismiss();

// Dismiss specific toast by ID
toast.dismiss(toastId);

// Create toast with ID for later dismissal
const id = 'my-toast';
toast('This can be dismissed', { id });
// Later...
toast.dismiss(id);`}
          />
        }
      />
    </div>
  );
}
