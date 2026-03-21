import type { ReactNode } from 'react';

type TooltipWrapperProps = {
  content: ReactNode;
  positionClass: string;
  finalOptions: Record<string, unknown>;
};

export default function TooltipWrapper({
  content,
  positionClass,
  finalOptions,
}: TooltipWrapperProps) {
  return (
    <div
      style={{
        position: 'absolute',
        whiteSpace: 'pre-wrap',
        inlineSize: 'max-content',
      }}
      className={`kitzo-tooltip-wrapper ${positionClass}`}
      data-position={positionClass}
    >
      <div
        className={`kitzo-tooltip-content ${positionClass} ${finalOptions.arrow ? 'tooltip-arrow' : ''}`}
      >
        {typeof content === 'string' || typeof content === 'number' ? (
          <div className="kitzo-tooltip-content-default-style">{content}</div>
        ) : (
          <>{content}</>
        )}
      </div>
    </div>
  );
}
