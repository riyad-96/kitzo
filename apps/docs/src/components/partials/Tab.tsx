'use client';

import { useState, type ReactNode } from 'react';

type TabProps = {
  preview: ReactNode;
  code: ReactNode;
};

type CurrentTab = 'preview' | 'code';

export default function Tab({ preview, code }: TabProps) {
  const [currentTab, setCurrentTab] = useState<CurrentTab>('preview');
  const previewTab = currentTab === 'preview';
  const codeTab = currentTab === 'code';

  return (
    <div className="space-y-4">
      <div className="flex justify-between border-b border-neutral-200 dark:border-neutral-800">
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentTab('preview')}
            className={`group relative grid py-2 text-sm transition-all duration-75 ${previewTab ? 'text-black dark:text-neutral-100' : 'text-neutral-500 dark:text-neutral-400 pointer-fine:hover:text-neutral-800 dark:pointer-fine:hover:text-neutral-200'}`}
          >
            <span>Preview</span>
            <span
              className={`absolute top-1/1 h-px w-full ${previewTab ? 'bg-neutral-700 dark:bg-neutral-300' : 'bg-transparent pointer-fine:group-hover:bg-neutral-400 dark:pointer-fine:group-hover:bg-neutral-600'}`}
            ></span>
          </button>
          <button
            onClick={() => setCurrentTab('code')}
            className={`group relative grid py-2 text-sm transition-all duration-75 ${codeTab ? 'text-black dark:text-neutral-100' : 'text-neutral-500 dark:text-neutral-400 pointer-fine:hover:text-neutral-800 dark:pointer-fine:hover:text-neutral-200'}`}
          >
            <span>Code</span>
            <span
              className={`absolute top-1/1 h-px w-full ${codeTab ? 'bg-neutral-700 dark:bg-neutral-300' : 'bg-transparent pointer-fine:group-hover:bg-neutral-400 dark:pointer-fine:group-hover:bg-neutral-600'}`}
            ></span>
          </button>
        </div>
      </div>

      <div className="h-65">
        {previewTab && preview}
        {codeTab && code}
      </div>
    </div>
  );
}
