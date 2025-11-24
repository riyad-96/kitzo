import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';

const toastStyles = `.toast-content,
.toast-content-bottom {
  font-size: 0.925rem;
}
.toast-content,
.toast-content-bottom {
  pointer-events: all;
}
  
.pre-styled {
  padding-inline: 0.825rem;
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
const listeners = new Set();
function addToast(toast) {
  listeners.forEach(callback => {
    callback(toast);
  });
}
function subscribe(callback) {
  if (!document.getElementById('kitzo-react-toast-styles')) {
    const styleTag = document.createElement('style');
    styleTag.id = 'kitzo-react-toast-styles';
    styleTag.textContent = toastStyles;
    document.head.appendChild(styleTag);
  }
  listeners.add(callback);
  return () => listeners.delete(callback);
}
function toast(text = 'Toast message', options = {}) {
  const id = Date.now();
  options = Object.assign({
    duration: 2800,
    id,
    style: {},
    showIcon: false
  }, options);
  addToast({
    type: 'success',
    text,
    options
  });
}
toast.success = (text = 'Toast success', options = {}) => {
  const id = Date.now();
  options = Object.assign({
    duration: 2800,
    id,
    style: {},
    showIcon: true
  }, options);
  addToast({
    type: 'success',
    text,
    options
  });
};
toast.error = (text = 'Toast denied', options = {}) => {
  const id = Date.now();
  options = Object.assign({
    duration: 2800,
    id,
    style: {},
    showIcon: true
  }, options);
  addToast({
    type: 'error',
    text,
    options
  });
};
toast.promise = (callback, msgs = {}, options = {}) => {
  const id = Date.now();
  options = Object.assign({
    duration: 2800,
    id,
    style: {},
    showIcon: true
  }, options);
  msgs = Object.assign({
    loading: 'Saving...',
    success: 'Success',
    error: 'Something went wrong'
  }, msgs);
  addToast({
    type: 'loading',
    text: msgs.loading,
    options: {
      ...options,
      duration: Infinity,
      id
    }
  });
  callback.then(res => {
    const successMsg = typeof msgs.success === 'function' ? msgs.success(res) : msgs.success;
    addToast({
      type: 'success',
      text: successMsg,
      options
    });
    return res;
  }).catch(err => {
    const normalizedError = err instanceof Error ? err : new Error(String(err));
    const errorMsg = typeof msgs.error === 'function' ? msgs.error(normalizedError) : msgs.error;
    addToast({
      type: 'error',
      text: errorMsg,
      options
    });
    return Promise.reject(normalizedError);
  });
};
toast.custom = (render, options = {}) => {
  const id = Date.now();
  options = Object.assign({
    duration: 3000,
    id,
    exitDelay: 50
  }, options);
  addToast({
    type: 'custom',
    render,
    options
  });
  return id;
};
function dismiss(id, exitDelay) {
  addToast({
    type: 'dismiss',
    id,
    exitDelay
  });
}

function SuccessSvg() {
  return /*#__PURE__*/React.createElement("div", {
    className: "svg-container success"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })));
}
function ErrorSvg() {
  return /*#__PURE__*/React.createElement("div", {
    className: "svg-container error"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m6 6 12 12"
  })));
}
function LoadingSvg() {
  return /*#__PURE__*/React.createElement("div", {
    className: "promise-svg-container"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 12a9 9 0 1 1-6.219-8.56"
  })));
}

function Toast({
  toast,
  setToasts,
  position,
  gap
}) {
  const {
    id,
    leaving,
    offset,
    text,
    type,
    options
  } = toast;
  const {
    style,
    showIcon
  } = options;
  const ref = useRef(null);
  useLayoutEffect(() => {
    if (!ref.current) return;
    const height = ref.current.getBoundingClientRect().height;
    const totalHeight = height + gap;
    setToasts(prev => prev.map(t => t.id === id ? {
      ...t,
      height: totalHeight
    } : t));
  }, []);
  const transformY = position.includes('bottom') ? `translateY(-${offset || 0}px)` : `translateY(${offset || 0}px)`;
  function renderCustomContent() {
    const render = toast.render;
    if (typeof render === 'function') {
      return render(() => dismiss(toast.id, toast.options.exitDelay));
    }
    if (typeof render === 'string') {
      return /*#__PURE__*/React.createElement("span", null, render);
    }
    return render;
  }
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      maxHeight: 'fit-content',
      transform: transformY,
      ...getToastPosition(position)
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: `toast-content${position.includes('bottom') ? '-bottom' : ''} ${leaving ? 'exit' : ''}`
  }, type === 'custom' ? renderCustomContent() : /*#__PURE__*/React.createElement("div", {
    style: {
      ...style
    },
    className: "pre-styled"
  }, showIcon && /*#__PURE__*/React.createElement(React.Fragment, null, type === 'loading' && /*#__PURE__*/React.createElement(LoadingSvg, null), type === 'success' && /*#__PURE__*/React.createElement(SuccessSvg, null), type === 'error' && /*#__PURE__*/React.createElement(ErrorSvg, null)), /*#__PURE__*/React.createElement("span", null, text))));
}
function getToastPosition(position) {
  const isLeft = position.includes('left');
  const isRight = position.includes('right');
  const styles = {
    position: 'absolute',
    width: '100%',
    pointerEvents: 'none',
    transition: 'transform 230ms',
    display: 'flex'
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

function ToastContainer(props) {
  props = Object.assign({
    position: 'top-center',
    gap: 8
  }, props);
  const {
    gap
  } = props;
  const position = props.position;
  const [toasts, setToasts] = useState([]);

  // event listener
  useEffect(() => {
    const unsub = subscribe(toast => {
      if (toast.type === 'dismiss') {
        setTimeout(() => {
          setToasts(prev => prev.map(t => t.options.id === toast.id ? {
            ...t,
            leaving: true
          } : t));
        }, Math.max(0, Number(toast.exitDelay)));
        setTimeout(() => {
          setToasts(prev => prev.filter(t => t.options.id !== toast.id));
        }, Math.max(0, Number(toast.exitDelay) + 300));
        return;
      }
      const duration = toast.options.duration;
      const id = toast.options.id;
      setToasts(prev => {
        const exists = prev.some(t => t.options.id === id);
        if (exists) {
          return prev.map(t => t.options.id === id ? {
            ...t,
            ...toast
          } : t);
        }
        return [{
          id,
          ...toast,
          offset: 0,
          height: 0,
          leaving: false
        }, ...prev];
      });
      if (toast.type !== 'loading' && isFinite(duration)) {
        setTimeout(() => {
          setToasts(prev => prev.map(t => t.options.id === id ? {
            ...t,
            leaving: true
          } : t));
        }, Math.max(0, duration - 300));
        setTimeout(() => {
          setToasts(prev => prev.filter(t => t.options.id !== id));
        }, duration);
      }
    });
    return () => unsub();
  }, []);

  // measue height and offset for each toast
  useLayoutEffect(() => {
    const grouped = toasts.reduce((acc, t) => {
      const pos = t.options.position || position || 'top-center';
      (acc[pos] ||= []).push(t);
      return acc;
    }, {});
    let hasChanged = false;
    const updated = toasts.map(toast => {
      const pos = toast.options.position || position || 'top-center';
      const group = grouped[pos];
      const index = group.findIndex(t => t.id === toast.id);
      const offset = group.slice(0, index).reduce((acc, t) => acc + (t.height || 0), 0);
      if (offset !== toast.offset) {
        hasChanged = true;
      }
      return {
        ...toast,
        offset
      };
    });
    if (hasChanged) {
      setToasts(updated);
    }
  }, [toasts]);
  const positions = ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100000000,
      pointerEvents: 'none',
      fontFamily: 'inherit',
      boxSizing: 'border-box'
    }
  }, positions.map(pos => {
    const group = toasts.filter(t => (t.options.position || position || 'top-center') === pos);
    if (!group.length) return null;
    return /*#__PURE__*/React.createElement("div", {
      key: pos,
      style: {
        position: 'absolute',
        inset: 0,
        display: 'grid',
        padding: '1rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, group.map(toast => /*#__PURE__*/React.createElement(Toast, {
      key: toast.options.id,
      toast: toast,
      setToasts: setToasts,
      position: pos,
      gap: typeof gap === 'string' ? isNaN(+gap) ? 8 : +gap : gap
    }))));
  }));
}

const tooltipStyles = `
.kitzo-react-tooltip-content-default-style {
  font-family: sans-serif;
  font-size: 0.875rem;
  background-color: hsl(0, 0%, 15%);
  color: hsl(0, 0%, 95%);
  padding-block: 6px;
  padding-inline: 10px;
  border-radius: 0.325rem;

  @media (prefers-color-scheme: dark) {
    background-color: hsl(0, 0%, 95%);
    color: hsl(0, 0%, 15%);
  }
}

.kitzo-react-tooltip-wrapper {
  transition-duration: 120ms, 50ms;
  transition-property: scale opacity;
}

.kitzo-react-tooltip-wrapper.top {
  --tooltip-offset: calc(var(--offset) * 1px);

  bottom: calc(var(--tooltip-offset) + 100%);
  left: 50%;
  translate: -50% 0;
  scale: 0.7;
  opacity: 0;
  transform-origin: bottom;
}

.kitzo-react-tooltip-wrapper.right {
  --tooltip-offset: calc(var(--offset) * 1px);

  left: calc(var(--tooltip-offset) + 100%);
  top: 50%;
  translate: 0 -50%;
  scale: 0.7;
  opacity: 0;
  transform-origin: left;
}

.kitzo-react-tooltip-wrapper.bottom {
  --tooltip-offset: calc(var(--offset) * 1px);

  top: calc(var(--tooltip-offset) + 100%);
  left: 50%;
  translate: -50% 0;
  scale: 0.7;
  opacity: 0;
  transform-origin: top;
}

.kitzo-react-tooltip-wrapper.left {
  --tooltip-offset: calc(var(--offset) * 1px);

  right: calc(var(--tooltip-offset) + 100%);
  top: 50%;
  translate: 0 -50%;
  scale: 0.7;
  opacity: 0;
  transform-origin: right;
}

.kitzo-react-tooltip-root:hover {
  .kitzo-react-tooltip-wrapper.top {
    scale: 1;
    opacity: 1;
  }
  .kitzo-react-tooltip-wrapper.right {
    scale: 1;
    opacity: 1;
  }
  .kitzo-react-tooltip-wrapper.bottom {
    scale: 1;
    opacity: 1;
  }
  .kitzo-react-tooltip-wrapper.left {
    scale: 1;
    opacity: 1;
  }
}
`;
(() => {
  if (!document.getElementById('kitzo-react-tooltip-styles')) {
    const styleTag = document.createElement('style');
    styleTag.id = 'kitzo-react-tooltip-styles';
    styleTag.textContent = tooltipStyles;
    document.head.appendChild(styleTag);
  }
})();
function getPositionBasedClassName(position) {
  let defaultClass = 'kitzo-react-tooltip-wrapper';
  const allowedPositions = ['top', 'right', 'bottom', 'left'];
  if (allowedPositions.includes(position)) {
    return defaultClass + ' ' + position;
  } else {
    return defaultClass + ' ' + 'top';
  }
}
function Tooltip({
  content = 'Tooltip',
  position = '',
  offset = 8,
  hideOnTouch = true,
  children
}) {
  if (typeof hideOnTouch !== 'boolean') hideOnTouch = true;
  const isTouch = window.matchMedia('(pointer: coarse)').matches;
  if (isTouch && hideOnTouch) return children;

  // sanitize props
  if (typeof position !== 'string') {
    console.warn(`[kitzo/react]: Tooltip position ignored due to invalid data type.`);
    position = 'top';
  }
  if (isNaN(Number(offset))) offset = 8;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 'fit-content',
      '--offset': Math.max(0, offset)
    },
    className: "kitzo-react-tooltip-root"
  }, children, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      textWrap: 'nowrap',
      pointerEvents: 'none'
    },
    tabIndex: -1,
    className: getPositionBasedClassName(position.trim().toLowerCase())
  }, typeof content === 'string' || typeof content === 'number' ? /*#__PURE__*/React.createElement("div", {
    className: "kitzo-react-tooltip-content-default-style"
  }, content) : /*#__PURE__*/React.createElement(React.Fragment, null, content)));
}

function useScrollRestoration(path, key, options = {}) {
  if (!path || typeof path !== 'object' && typeof path !== 'string') {
    throw new Error('kitzo/react: useScrollRestoration(path, ...) expect location object from the react useLocation hook or unique path string(location.pathname)');
  }
  if (!key || typeof key !== 'string' && typeof key !== 'number') {
    throw new Error('kitzo/react: useScrollRestoration(..., key) expect unique string or number');
  }
  const pathname = typeof path === 'object' ? path.pathname : path;
  const behavior = options?.behavior ? options.behavior : 'instant';
  const delay = options?.delay ? isNaN(Number(options.delay)) ? 0 : Number(options.delay) : 0;

  // hook management
  const ref = useRef(null);
  const history = useRef(new Map());

  // hook logic
  useEffect(() => {
    const element = ref.current;
    const target = element || window;
    const isWindow = target === window;
    const mapKey = `${pathname}::${key}`;
    const saved = history.current.get(mapKey);
    const restore = () => {
      if (!saved) return;
      if (isWindow) {
        window.scrollTo({
          top: saved.top,
          left: saved.left,
          behavior
        });
      } else if (element) {
        element.scrollTo({
          top: saved.top,
          left: saved.left,
          behavior
        });
      }
    };
    if (saved) {
      if (delay > 0) {
        const timeoutId = setTimeout(restore, delay);
        return () => clearTimeout(timeoutId);
      } else {
        restore();
      }
    } else {
      if (isWindow) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'auto'
        });
      } else if (element) {
        element.scrollTo({
          top: 0,
          left: 0,
          behavior: 'auto'
        });
      }
    }
    let timeoutId = null;
    const save = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const top = isWindow ? window.scrollY : element?.scrollTop ?? 0;
        const left = isWindow ? window.scrollX : element?.scrollLeft ?? 0;
        history.current.set(mapKey, {
          top,
          left
        });
      }, 50);
    };
    target.addEventListener('scroll', save, {
      passive: true
    });
    return () => {
      target.removeEventListener('scroll', save);
      clearTimeout(timeoutId);
    };
  }, [pathname, key, behavior, delay]);
  return ref;
}

export { ToastContainer, Tooltip, toast, useScrollRestoration };
