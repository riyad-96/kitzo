import { useLayoutEffect, useRef } from 'react';
import { ErrorSvg, InfoSvg, LoadingSvg, SuccessSvg } from './Svgs';
import toast from './toaster';

export default function Toast({ t, containerPosition, gap, setToasts }) {
  const { id, type, render, action, status } = t;

  const ref = useRef(null);

  useLayoutEffect(() => {
    if (!ref.current) return;

    const g =
      typeof gap === 'number'
        ? gap
        : Number.isFinite(Number(gap))
          ? Number(gap)
          : 8;

    const el = ref.current;

    const observer = new ResizeObserver(() => {
      const height = el.offsetHeight + g;
      setToasts((prev) =>
        prev.map((t) => (t.id === id ? { ...t, height } : t)),
      );
    });

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const allowedPositions = [
    'top-left',
    'top-center',
    'top-right',
    'bottom-left',
    'bottom-center',
    'bottom-right',
  ];
  const userPosition = t.position || containerPosition;
  const position = allowedPositions.includes(userPosition)
    ? userPosition
    : 'top-center';

  return (
    <div ref={ref} style={getToastStyles(t, position)}>
      <div
        style={{
          pointerEvents: 'all',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}
        className={`kitzo-toast type-${type} action-${action} status-${status} pos-y-${position.split('-')[0]} pos-x-${position.split('-')[1]} `}
      >
        {t.showIcon && type !== 'normal' && type !== 'custom' && (
          <div
            style={{
              flexShrink: 0,
            }}
          >
            {type === 'loading' && <LoadingSvg />}
            {type === 'success' && <SuccessSvg />}
            {type === 'error' && <ErrorSvg />}
            {type === 'info' && <InfoSvg />}
          </div>
        )}

        <div
          style={{
            flex: 1,
          }}
        >
          {typeof render === 'function'
            ? render(() => toast.dismiss(id))
            : render}
        </div>
      </div>
    </div>
  );
}

function getToastStyles(t, position) {
  const styles = {
    position: 'absolute',
    zIndex: t.zIndex,
    left: 0,
    width: '100%',
    transition: 'transform 300ms',
    display: 'flex',
  };

  const transform = position.includes('top')
    ? `translateY(${t.distance || 0}px)`
    : `translateY(-${t.distance || 0}px)`;
  const justifyContent = position.includes('left')
    ? 'flex-start'
    : position.includes('center')
      ? 'center'
      : 'flex-end';

  styles.transform = transform;
  styles.justifyContent = justifyContent;
  if (position.includes('top')) styles.top = 0;
  if (position.includes('bottom')) styles.bottom = 0;

  return styles;
}
