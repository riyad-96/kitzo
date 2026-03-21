'use client';

import CodeBlock from '@/components/code/CodeBlock';
import Tab from '@/components/partials/Tab';
import PreviewButton from '@/components/snippets/PreviewButton';
import { toast } from 'kitzo';

export default function CustomToast() {
  return (
    <div>
      <h3 className="mb-1 text-xl font-medium">Custom Toast</h3>
      <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
        Create fully customized toast content.
      </p>

      <Tab
        preview={
          <div className="grid size-full place-items-center rounded-lg border border-neutral-200 bg-neutral-50 px-6 dark:border-neutral-800 dark:bg-neutral-900">
            <PreviewButton
              onClick={() => {
                toast.custom(
                  (dismiss) => (
                    <div className="max-w-[320px] rounded-xl border border-neutral-200 bg-white p-3.5 shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
                      <h4 className="mb-2 text-sm font-medium">
                        Custom Notification
                      </h4>
                      <p className="mb-3 text-xs text-neutral-600 dark:text-neutral-400">
                        This is a fully customized toast message with custom
                        styling.
                      </p>
                      <button
                        onClick={dismiss}
                        className="rounded-md bg-neutral-900 px-2 py-0.75 text-xs text-white hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300"
                      >
                        Dismiss
                      </button>
                    </div>
                  ),
                  {
                    duration: 4000,
                  },
                );
              }}
            >
              Show Custom Toast
            </PreviewButton>
          </div>
        }
        code={
          <CodeBlock
            className="h-54.5"
            fileName="CustomToasts.tsx"
            code={`toast.custom(
  (dismiss) => (
    <div className="rounded-xl border border-neutral-200 bg-white p-3.5 shadow-lg dark:border-neutral-800 dark:bg-neutral-900 max-w-[320px]">
      <h4 className="mb-2 text-sm font-medium">Custom Notification</h4>
      <p className="mb-3 text-xs text-neutral-600 dark:text-neutral-400">
        This is a fully customized toast message with custom
        styling.
      </p>
      <button
        onClick={dismiss}
        className="rounded-md bg-neutral-900 px-2 py-0.75 text-xs text-white hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300"
      >
        Dismiss
      </button>
    </div>
  ),
  {
    duration: 4000,
  },
)`}
          />
        }
      />
    </div>
  );
}
