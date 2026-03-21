import type { PropsWithChildren } from 'react';

type PreviewButtonProps = PropsWithChildren & {
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};

export default function PreviewButton({
  className,
  children,
  onClick,
  disabled,
}: PreviewButtonProps) {
  return (
    <button
      onContextMenu={(e) => e.preventDefault()}
      onClick={onClick}
      disabled={disabled}
      className={`rounded-lg border border-neutral-300 bg-white px-3.5 py-1.75 text-sm dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-300 pointer-fine:hover:border-neutral-400 dark:pointer-fine:hover:border-neutral-600 ${className}`}
    >
      {children}
    </button>
  );
}
