import { useLayoutEffect, useRef } from 'react';
import type { Positions, Toast } from '../types';
import ToastContent from './Toast';
import { useToasterContext } from '../context/ToasterContext';

type ToastContainerProps = {
  t: Toast;
};

export default function ToastContainer({ t }: ToastContainerProps) {
  const {
    updateOffsets,
    position: containerPosition,
    animateTransformOrigin,
  } = useToasterContext();

  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new ResizeObserver(() => {
      const height = el.offsetHeight;
      el.style.setProperty('--toast-height', `${height}px`);
      updateOffsets();
    });

    observer.observe(el);

    return () => observer.disconnect();
  }, [updateOffsets]);

  const allowedPositions = [
    'top-left',
    'top-center',
    'top-right',
    'bottom-left',
    'bottom-center',
    'bottom-right',
  ];
  const userPosition = t.position || containerPosition;
  const position = allowedPositions.includes(userPosition!)
    ? userPosition
    : 'top-center';

  const isBottom = position?.includes('bottom');

  const shouldAnimateTransformOrigin =
    typeof t.animateTransformOrigin === 'boolean'
      ? t.animateTransformOrigin
      : animateTransformOrigin;

  return (
    <div
      ref={ref}
      data-toast-container
      data-toast-position={position}
      style={{
        position: 'absolute',
        zIndex: t.zIndex,
        left: 0,
        right: 0,
        transition: 'transform 180ms',
        display: 'flex',
        justifyContent: position?.includes('left')
          ? 'flex-start'
          : position?.includes('center')
            ? 'center'
            : 'flex-end',
        top: isBottom ? 'auto' : 0,
        bottom: isBottom ? 0 : 'auto',
        transform: `translateY(calc(var(--toast-offset-y, 0px) * ${isBottom ? -1 : 1}))`,
      }}
    >
      <ToastContent
        t={t}
        position={position as Positions}
        shouldAnimateTransformOrigin={shouldAnimateTransformOrigin}
      />
    </div>
  );
}
