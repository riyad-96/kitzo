'use client';

import CodeBlock from '@/components/code/CodeBlock';
import Tab from '@/components/partials/Tab';
import PreviewButton from '@/components/snippets/PreviewButton';
import { toast } from 'kitzo';

export default function BasicToast() {
  return (
    <div>
      <h3 className="mb-1 text-xl font-medium">Basic Toast</h3>
      <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
        Display a simple notification message.
      </p>

      <Tab
        preview={
          <div className="grid size-full place-items-center rounded-lg border border-neutral-200 bg-neutral-50 px-6 dark:border-neutral-800 dark:bg-neutral-900">
            <div className="flex flex-wrap gap-2">
              <PreviewButton
                onClick={() => toast('This is a basic toast notification')}
              >
                Default
              </PreviewButton>
              <PreviewButton
                onClick={() => toast.info('New updates available')}
              >
                Info
              </PreviewButton>
              <PreviewButton
                onClick={() => toast.success('Event has been created')}
              >
                success
              </PreviewButton>
              <PreviewButton
                onClick={() => toast.warning('Your session will expire soon')}
              >
                Warning
              </PreviewButton>
              <PreviewButton
                onClick={() => toast.error('Failed to save changes')}
              >
                Error
              </PreviewButton>
            </div>
          </div>
        }
        code={
          <CodeBlock
            className="h-54.5"
            code={`// Basic toasts
toast('This is a basic toast notification');
toast.info('New updates available');
toast.success('Event has been created');
toast.warning('Your session will expire soon');
toast.error('Failed to save changes');`}
            fileName="BasicToast.tsx"
          />
        }
      />
    </div>
  );
}
