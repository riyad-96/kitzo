'use client';

import CodeBlock from '@/components/code/CodeBlock';
import Tab from '@/components/partials/Tab';
import PreviewButton from '@/components/ui/PreviewButton';
import { toast } from 'kitzo';
import { useState } from 'react';

export default function UpdateToast() {
  const [toastId, setToastId] = useState<string | number>('');

  return (
    <div>
      <h3 className="mb-1 text-xl font-medium">Update Toast</h3>
      <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
        Update existing toast content and options.
      </p>

      <Tab
        preview={
          <div className="grid size-full place-items-center rounded-lg border border-neutral-200 bg-neutral-50 px-6 dark:border-neutral-800 dark:bg-neutral-900">
            <div className="flex flex-wrap gap-2">
              <PreviewButton
                onClick={() => {
                  const id = 'update-example';
                  setToastId(id);
                  toast.loading('Processing your request...', { id });
                }}
              >
                Start Loading Toast
              </PreviewButton>
              <PreviewButton
                onClick={() => {
                  if (toastId) {
                    toast.update(toastId, 'Processing complete!', {
                      type: 'success',
                      duration: 3000,
                    });
                  }
                }}
                disabled={!toastId}
              >
                Update to Success
              </PreviewButton>
              <PreviewButton
                onClick={() => {
                  if (toastId) {
                    toast.update(toastId, 'An error occurred', {
                      type: 'error',
                      duration: 3000,
                    });
                  }
                }}
                disabled={!toastId}
              >
                Update to Error
              </PreviewButton>
            </div>
          </div>
        }
        code={
          <CodeBlock
            className="h-54.5"
            fileName="UpdateToasts.tsx"
            code={`const id = 'update-toast';
toast.loading('Processing...', { id });

// Later, update the toast
toast.update(id, 'Processing complete!', {
  type: 'success',
  duration: 3000
});

// Update with different type
toast.update(id, 'An error occurred', {
  type: 'error'
});`}
          />
        }
      />
    </div>
  );
}
