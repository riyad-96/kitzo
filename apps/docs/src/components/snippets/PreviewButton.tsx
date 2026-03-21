import type { PropsWithChildren } from 'react';
import { Button } from '@ui';

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
    <Button
      onContextMenu={(e) => e.preventDefault()}
      onClick={onClick}
      disabled={disabled}
      className={className}
      variant="outline"
    >
      {children}
    </Button>
  );
}
