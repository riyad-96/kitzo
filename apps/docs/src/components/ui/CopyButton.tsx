'use client';

import { useCopy } from 'kitzo';
import { Ban, Check, Copy } from 'lucide-react';

type CopyButtonProps = {
  text: string;
  className?: string;
};

export default function CopyButton({ text, className }: CopyButtonProps) {
  const { copy, isCopied, isCopying, isError } = useCopy();

  return (
    <button
      className={className}
      onClick={() => {
        copy(text);
      }}
    >
      {isCopying && (
        <span className="loading loading-spinner loading-xs"></span>
      )}
      {isError && <Ban size="14" />}
      {isCopied && <Check size="14" />}
      {!isCopied && !isCopying && !isError && <Copy size="14" />}
    </button>
  );
}
