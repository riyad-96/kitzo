import { useRef, useLayoutEffect } from 'react';
import { SuccessSvg, ErrorSvg, LoadingSvg } from './Svgs';
import { dismiss } from './toaster';

function Toast({ toast, setToasts, position, gap }) {
  const { id, leaving, offset, text, type, options } = toast;
  const { style, showIcon } = options;
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (!ref.current) return;

    const height = ref.current.getBoundingClientRect().height;
    const totalHeight = height + gap;

    setToasts((prev) => prev.map((t) => (t.id === id ? { ...t, height: totalHeight } : t)));
  }, [gap, id, setToasts]);

  const transformY = position.includes('bottom')
    ? `translateY(-${offset || 0}px)`
    : `translateY(${offset || 0}px)`;

  function renderCustomContent() {
    const render = toast.render;

    if (typeof render === 'function') {
      return render(() => dismiss(toast.id, toast.options.exitDelay));
    }
    if (typeof render === 'string') {
      return <span>{render}</span>;
    }
    return render;
  }

  return (
    <div
      ref={ref}
      style={{
        maxHeight: 'fit-content',
        transform: transformY,
        ...getToastPosition(position),
      }}
    >
      <div
        className={`toast-content${position.includes('bottom') ? '-bottom' : ''} ${leaving ? 'exit' : ''}`}
      >
        {type === 'custom' ? (
          renderCustomContent()
        ) : (
          <div
            style={{ ...style }}
            className="pre-styled"
          >
            {showIcon && (
              <>
                {type === 'loading' && <LoadingSvg />}
                {type === 'success' && <SuccessSvg />}
                {type === 'error' && <ErrorSvg />}
              </>
            )}
            <span>{text}</span>
          </div>
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
