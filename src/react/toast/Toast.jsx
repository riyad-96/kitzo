import { useRef, useLayoutEffect } from 'react';
import { SuccessSvg, ErrorSvg, LoadingSvg } from './Svgs';

const GAP = 10;

function Toast({ toast, setToasts, position }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (!ref.current) return;

    const height = ref.current.getBoundingClientRect().height;

    setToasts((prev) => {
      const index = prev.findIndex((t) => t.options.id === toast.options.id);
      if (index === -1) return prev;

      if (prev[index].height === height) return prev;

      const newToasts = [...prev];
      newToasts[index] = { ...newToasts[index], height };

      let offset = 0;
      for (let t of newToasts) {
        t.offset = offset;
        offset += (t.height || 0) + GAP;
      }

      return newToasts;
    });
  }, [setToasts, toast.options.id]);

  const transformY = position.includes('bottom') ? `translateY(-${toast.offset || 0}px)` : `translateY(${toast.offset || 0}px)`;

  return (
    <div
      ref={ref}
      style={{
        maxHeight: 'fit-content',
        transform: transformY,
        ...getToastPosition(position),
      }}
    >
      <div className={`toast-content${position.includes('bottom') ? '-bottom' : ''} ${toast.leaving ? 'exit' : ''}`}>
        {toast.type === 'loading' && <LoadingSvg />}
        {toast.type === 'success' && <SuccessSvg />}
        {toast.type === 'error' && <ErrorSvg />}
        <span>{toast.text}</span>
      </div>
    </div>
  );
}

export default Toast;

function getToastPosition(position) {
  const isLeft = position.includes('left');
  const isRight = position.includes('right');

  const styles = {
    position: 'absolute',
    width: 'calc(100% - 2rem)',
    pointerEvents: 'none',
    transition: 'transform 230ms',
    display: 'flex',
  };

  if (position.includes('top')) {
    styles.top = '1rem';
    styles.justifyContent = isLeft ? 'flex-start' : isRight ? 'flex-end' : 'center';
  }
  if (position.includes('bottom')) {
    styles.bottom = '1rem';
    styles.justifyContent = isLeft ? 'flex-start' : isRight ? 'flex-end' : 'center';
  }

  return styles;
}
