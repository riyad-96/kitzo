import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';

const listeners = new Set();
let isStyleAdded = false;
function toastStyles() {
  return `@layer base {
  .toast-content,
  .toast-content-bottom {
    font-size: 0.925rem;
  }
}

.toast-content,
.toast-content-bottom {
  pointer-events: all;
  padding-inline: 0.625rem 0.825rem;
  padding-block: 0.625rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: white;
  border-radius: 0.5525rem;
  box-shadow: 0 2px 8px -3px rgba(0, 0, 0, 0.3);
}

.toast-content {
  animation: slide-in 230ms forwards;
}
.toast-content.exit {
  animation: slide-out 110ms forwards;
}

.toast-content-bottom {
  animation: bottom-slide-in 230ms forwards;
}
.toast-content-bottom.exit {
  animation: bottom-slide-out 110ms forwards;
}

@keyframes slide-in {
  from {
    opacity: 0;
    translate: 0 -100%;
    scale: 0.7;
  }
  to {
    opacity: 1;
    translate: 0 0;
    scale: 1;
  }
}

@keyframes slide-out {
  from {
    opacity: 1;
    translate: 0 0;
    scale: 1;
  }
  to {
    opacity: 0;
    translate: 0 -100%;
    scale: 0.7;
  }
}

@keyframes bottom-slide-in {
  from {
    opacity: 0;
    translate: 0 100%;
    scale: 0.7;
  }
  to {
    opacity: 1;
    translate: 0 0;
    scale: 1;
  }
}

@keyframes bottom-slide-out {
  from {
    opacity: 1;
    translate: 0 0;
    scale: 1;
  }
  to {
    opacity: 0;
    translate: 0 100%;
    scale: 0.7;
  }
}

.svg-container {
  display: grid;
  place-items: center;
  border-radius: 10rem;
  background-color: #61d345;
  color: white;
  height: 20px;
  width: 20px;
  position: relative;
  overflow: hidden;

  scale: 1.1;
  animation: svg-container-animation 400ms ease-in-out forwards;

  svg {
    width: 14px;
    height: 14px;
    stroke-width: 4px;
    display: inline-block;
  }
}

.svg-container.success {
  background-color: #61d345;
}
.svg-container.error {
  background-color: #ff4b4b;

  svg {
    scale: 0;
    animation: error-svg-zoom-in 170ms 130ms forwards;
  }
}

.svg-container.success::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 5;
  border-radius: 10rem;
  background-color: #61d345;
  animation: success-container-before-animation 250ms 150ms forwards;
}

@keyframes svg-container-animation {
  0% {
    scale: 1;
  }
  50% {
    scale: 1.15;
  }
  100% {
    scale: 1;
  }
}

@keyframes success-container-before-animation {
  from {
    translate: 0 0;
  }
  to {
    translate: 100% -50%;
  }
}

@keyframes error-svg-zoom-in {
  from {
    scale: 0;
  }
  to {
    scale: 1;
  }
}

.promise-svg-container {
  width: 20px;
  height: 20px;
  display: grid;
  place-items: center;
  color: #474747;

  svg {
    width: 14px;
    height: 14px;
    stroke-width: 3px;
    display: inline-block;
    animation: rotate-infinity 1000ms infinite linear;
  }
}

@keyframes rotate-infinity {
  to {
    rotate: 360deg;
  }
}
`;
}
function addToast(toast) {
  listeners.forEach((callback) => {
    callback(toast);
  });
}
function subscribe(callback) {
  if (!isStyleAdded) {
    const styleTag = document.createElement('style');
    styleTag.textContent = toastStyles();
    document.head.appendChild(styleTag);
    isStyleAdded = true;
  }
  listeners.add(callback);
  return () => listeners.delete(callback);
}
function success(text = 'Toast success', options = {}) {
  const id = Date.now();
  options = Object.assign(
    {
      duration: 2000,
      id,
    },
    options
  );
  addToast({
    type: 'success',
    text,
    options,
  });
}
function error(text = 'Toast denied', options = {}) {
  const id = Date.now();
  options = Object.assign(
    {
      duration: 2000,
      id,
    },
    options
  );
  addToast({
    type: 'error',
    text,
    options,
  });
}
function promise(callback, msgs = {}, options = {}) {
  const id = Date.now();
  options = Object.assign(
    {
      duration: 2000,
      id,
    },
    options
  );
  msgs = Object.assign(
    {
      loading: 'Saving...',
      success: 'Success',
      error: 'Something went wrong',
    },
    msgs
  );
  addToast({
    type: 'loading',
    text: msgs.loading,
    options: {
      ...options,
      duration: Infinity,
      id,
    },
  });
  callback
    .then((res) => {
      const successMsg = typeof msgs.success === 'function' ? msgs.success(res) : msgs.success;
      addToast({
        type: 'success',
        text: successMsg,
        options,
      });
      return res;
    })
    .catch((err) => {
      const normalizedError = err instanceof Error ? err : new Error(String(err));
      const errorMsg = typeof msgs.error === 'function' ? msgs.error(normalizedError) : msgs.error;
      addToast({
        type: 'error',
        text: errorMsg,
        options,
      });
      return Promise.reject(normalizedError);
    });
}

function SuccessSvg() {
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: 'svg-container success',
    },
    /*#__PURE__*/ React.createElement(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        width: '24',
        height: '24',
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: '2',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
      /*#__PURE__*/ React.createElement('path', {
        d: 'M20 6 9 17l-5-5',
      })
    )
  );
}
function ErrorSvg() {
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: 'svg-container error',
    },
    /*#__PURE__*/ React.createElement(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        width: '24',
        height: '24',
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: '2',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
      /*#__PURE__*/ React.createElement('path', {
        d: 'M18 6 6 18',
      }),
      /*#__PURE__*/ React.createElement('path', {
        d: 'm6 6 12 12',
      })
    )
  );
}
function LoadingSvg() {
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: 'promise-svg-container',
    },
    /*#__PURE__*/ React.createElement(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        width: '24',
        height: '24',
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: '2',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
      /*#__PURE__*/ React.createElement('path', {
        d: 'M21 12a9 9 0 1 1-6.219-8.56',
      })
    )
  );
}

const GAP = 10;
function Toast({ toast, setToasts, position }) {
  const ref = useRef(null);
  useLayoutEffect(() => {
    if (!ref.current) return;
    const h = ref.current.getBoundingClientRect().height;
    setToasts((prev) =>
      prev.map((t) =>
        t.options.id === toast.id
          ? t
          : {
              ...t,
              offset: t.offset + h + GAP,
            }
      )
    );
  }, [setToasts, toast.id]);
  if (position.includes('bottom')) {
    return /*#__PURE__*/ React.createElement(
      'div',
      {
        ref: ref,
        className: 'toast',
        style: {
          transform: `translateY(-${toast.offset}px)`,
          ...getToastPosition(position),
        },
      },
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: `toast-content-bottom ${toast.leaving ? 'exit' : ''}`,
        },
        toast.type === 'loading' && /*#__PURE__*/ React.createElement(LoadingSvg, null),
        toast.type === 'success' && /*#__PURE__*/ React.createElement(SuccessSvg, null),
        toast.type === 'error' && /*#__PURE__*/ React.createElement(ErrorSvg, null),
        /*#__PURE__*/ React.createElement('span', null, toast.text)
      )
    );
  }
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      ref: ref,
      className: 'toast',
      style: {
        transform: `translateY(${toast.offset}px)`,
        ...getToastPosition(position),
      },
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: `toast-content ${toast.leaving ? 'exit' : ''}`,
      },
      toast.type === 'loading' && /*#__PURE__*/ React.createElement(LoadingSvg, null),
      toast.type === 'success' && /*#__PURE__*/ React.createElement(SuccessSvg, null),
      toast.type === 'error' && /*#__PURE__*/ React.createElement(ErrorSvg, null),
      /*#__PURE__*/ React.createElement('span', null, toast.text)
    )
  );
}
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

const EXIT_ANIM_MS = 300;
function ToastContainer(props) {
  props = Object.assign(
    {
      position: 'top-center',
    },
    props
  );
  const { position } = props;
  const [toasts, setToasts] = useState([]);
  useEffect(() => {
    const unsub = subscribe((toast) => {
      const duration = toast.options.duration;
      const id = toast.options.id;
      setToasts((prev) => {
        const exists = prev.some((t) => t.options.id === id);
        if (exists) {
          return prev.map((t) =>
            t.options.id === id
              ? {
                  ...t,
                  ...toast,
                }
              : t
          );
        }
        return [
          {
            id,
            ...toast,
            offset: 0,
            leaving: false,
          },
          ...prev,
        ];
      });
      if (toast.type !== 'loading') {
        setTimeout(() => {
          setToasts((prev) =>
            prev.map((t) =>
              t.options.id === id
                ? {
                    ...t,
                    leaving: true,
                  }
                : t
            )
          );
        }, Math.max(0, duration - EXIT_ANIM_MS));
        setTimeout(() => {
          setToasts((prev) => prev.filter((t) => t.options.id !== id));
        }, duration);
      }
    });
    return () => unsub();
  }, []);
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      style: {
        position: 'fixed',
        inset: 0,
        zIndex: 100000000,
        pointerEvents: 'none',
        fontFamily: 'inherit',
        padding: '1rem',
      },
    },
    toasts.map((t) =>
      /*#__PURE__*/ React.createElement(Toast, {
        key: t.options.id,
        toast: t,
        setToasts: setToasts,
        position: position,
      })
    )
  );
}

const toast = {
  success,
  error,
  promise,
};

export { ToastContainer, toast };
