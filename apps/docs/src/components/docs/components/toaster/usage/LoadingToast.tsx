'use client';

import CodeBlock from '@/components/code/CodeBlock';
import Tab from '@/components/partials/Tab';
import PreviewButton from '@/components/snippets/PreviewButton';
import { toast } from 'kitzo';

export default function LoadingToast() {
  return (
    <div>
      <h3 className="mb-1 text-xl font-medium">Loading Toast</h3>
      <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
        Display a loading state for ongoing operations.
      </p>

      <Tab
        preview={
          <div className="grid size-full place-items-center rounded-lg border border-neutral-200 bg-neutral-50 px-6 dark:border-neutral-800 dark:bg-neutral-900">
            <div className="flex flex-wrap gap-2">
              <PreviewButton
                onClick={() =>
                  toast.loading('Processing...', { id: 'loading-default' })
                }
              >
                Show Loading
              </PreviewButton>
              <PreviewButton
                onClick={() =>
                  toast.loading('Uploading files', {
                    icon: (
                      <span className="loading loading-spinner loading-xs"></span>
                    ),
                    id: 'loading-custom',
                  })
                }
              >
                Custom animation
              </PreviewButton>
              <PreviewButton
                onClick={() => {
                  toast.dismiss('loading-default');
                  toast.dismiss('loading-custom');
                }}
              >
                Dismiss
              </PreviewButton>
            </div>
          </div>
        }
        code={
          <CodeBlock
            className="h-54.5"
            fileName="LoadingToasts.tsx"
            code={`toast.loading('Processing...', { id: 'loading-default' })
    
// With custom icon
toast.loading('Uploading files', {
  icon: (
    <span className="loading loading-spinner loading-xs"></span>
  ),
  id: 'loading-custom',
})

toast.dismiss('loading-default');
toast.dismiss('loading-custom');
`}
          />
        }
      />
    </div>
  );
}
