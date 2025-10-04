import { useRef, useLayoutEffect } from 'react';
import { SuccessSvg, ErrorSvg, LoadingSvg } from './Svgs';

function Toast({ toast, setToasts, position }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (!ref.current) return;
    const h = ref.current.getBoundingClientRect().height;

    setToasts((prev) => prev.map((t) => (t.options.id === toast.id ? t : { ...t, offset: t.offset + h + 10 })));
  }, [setToasts, toast.id]);

  if (position.includes('bottom')) {
    return (
      <div
        ref={ref}
        className="toast"
        style={{
          transform: `translateY(-${toast.offset}px)`,
          ...getToastPosition(position),
        }}
      >
        <div className={`toast-content-bottom ${toast.leaving ? 'exit' : ''}`}>
          {toast.type === 'loading' && <LoadingSvg />}
          {toast.type === 'success' && <SuccessSvg />}
          {toast.type === 'error' && <ErrorSvg />}
          <span>{toast.text}</span>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="toast"
      style={{
        transform: `translateY(${toast.offset}px)`,
        ...getToastPosition(position),
      }}
    >
      <div className={`toast-content ${toast.leaving ? 'exit' : ''}`}>
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
