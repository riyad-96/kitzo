const listeners = new Set();
let isStyleAdded = false;

function toastStyles() {
  return `.toast-content,
.toast-content-bottom {
  font-size: 0.925rem;
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

export function subscribe(callback) {
  if (!isStyleAdded) {
    const styleTag = document.createElement('style');
    styleTag.textContent = toastStyles();
    document.head.appendChild(styleTag);
    isStyleAdded = true;
  }

  listeners.add(callback);
  return () => listeners.delete(callback);
}

export function success(text = 'Toast success', options = {}) {
  const id = Date.now();
  options = Object.assign(
    {
      duration: 2000,
      id,
    },
    options
  );
  addToast({ type: 'success', text, options });
}

export function error(text = 'Toast denied', options = {}) {
  const id = Date.now();
  options = Object.assign(
    {
      duration: 2000,
      id,
    },
    options
  );
  addToast({ type: 'error', text, options });
}

export function promise(callback, msgs = {}, options = {}) {
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

  addToast({ type: 'loading', text: msgs.loading, options: { ...options, duration: Infinity, id } });

  callback
    .then((res) => {
      const successMsg = typeof msgs.success === 'function' ? msgs.success(res) : msgs.success;
      addToast({ type: 'success', text: successMsg, options });

      return res;
    })
    .catch((err) => {
      const normalizedError = err instanceof Error ? err : new Error(String(err));
      const errorMsg = typeof msgs.error === 'function' ? msgs.error(normalizedError) : msgs.error;

      addToast({ type: 'error', text: errorMsg, options });
      return Promise.reject(normalizedError);
    });
}
