'use client';

import { BaseInput } from '@/components/snippets/Inputs';
import PreviewButton from '@/components/snippets/PreviewButton';
import { useCopy } from 'kitzo';
import { useState } from 'react';

export default function CopyPreview() {
  const [text, setText] = useState('');
  const { copy, status, isCopied, isError } = useCopy(2000);

  return (
    <div className="space-y-3 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
      <BaseInput
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type text to copy..."
      />
      <PreviewButton onClick={() => copy(text)}>
        {!isCopied && !isError && 'Copy Text'}
        {isCopied && 'Copied!'}
        {isError && 'Failed to copy'}
      </PreviewButton>

      <p>
        <span className="text-sm text-neutral-500 dark:text-neutral-400">
          Status:
        </span>{' '}
        {status}
      </p>
    </div>
  );
}
