import { useRef, useLayoutEffect } from 'react';
import { SuccessSvg, ErrorSvg, LoadingSvg } from './Svgs';
import { dismiss } from './toaster';

function Toast({ toast, setToasts, position, gap }) {
  const { id, leaving, offset, text, type, options } = toast;
  const { style, showIcon } = options;
  const ref = useRef(null);

  useLayoutEffect(() => {
    const height = ref.current.getBoundingClientRect().height + gap;
    setToasts((prev) => prev.map((t) => (t.id == id ? { ...t, height } : t)));
  }, []);

  const transformY = position.includes('bottom') ? `translateY(-${offset || 0}px)` : `translateY(${offset || 0}px)`;

  return (
    <div
      ref={ref}
      style={{
        maxHeight: 'fit-content',
        transform: transformY,
        ...getToastPosition(position),
      }}
    >
      <div style={{ ...style }} className={`toast-content${position.includes('bottom') ? '-bottom' : ''} ${leaving ? 'exit' : ''}`}>
        {type === 'custom' ? (
          typeof toast.render === 'function' ? (
            toast.render(() => dismiss(toast.id, toast.options.exitDelay))
          ) : typeof toast.render === 'string' ? (
            <span>{toast.render}</span>
          ) : (
            toast.render
          )
        ) : (
          <>
            {showIcon && (
              <>
                {type === 'loading' && <LoadingSvg />}
                {type === 'success' && <SuccessSvg />}
                {type === 'error' && <ErrorSvg />}
              </>
            )}
            <span>{text}</span>
          </>
        )}
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
    width: '100%',
    pointerEvents: 'none',
    transition: 'transform 230ms',
    display: 'flex',
  };

  if (position.includes('top')) {
    styles.top = '0';
    styles.justifyContent = isLeft ? 'flex-start' : isRight ? 'flex-end' : 'center';
  }
  if (position.includes('bottom')) {
    styles.bottom = '0';
    styles.justifyContent = isLeft ? 'flex-start' : isRight ? 'flex-end' : 'center';
  }

  return styles;
}
