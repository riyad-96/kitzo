const toastStyles = `.kitzo-toast-container {
  --normal-bg: hsl(0, 0%, 100%);
  --normal-text: hsl(0, 0%, 10%);
  --normal-border: hsl(0, 0%, 94%);

  --success-bg: var(--normal-bg);
  --success-text: var(--normal-text);
  --success-border: var(--normal-border);
  --success-svg-clr: var(--normal-bg);
  --success-svg-bg: var(--normal-text);

  --error-bg: var(--normal-bg);
  --error-text: var(--normal-text);
  --error-border: var(--normal-border);
  --error-svg-clr: var(--normal-bg);
  --error-svg-bg: var(--normal-text);

  --info-bg: var(--normal-bg);
  --info-text: var(--normal-text);
  --info-border: var(--normal-border);
  --info-svg-clr: var(--normal-bg);
  --info-svg-bg: var(--normal-text);

  --loader-stroke: hsl(0, 0%, 50%);
  --loader-bg: hsl(0, 0%, 80%);
}

.kitzo-toast-container.kitzo-toast-dark {
  --normal-bg: hsl(0, 0%, 15%);
  --normal-text: hsl(0, 0%, 95%);
  --normal-border: hsl(0, 0%, 17%);

  --success-bg: var(--normal-bg);
  --success-text: var(--normal-text);
  --success-border: var(--normal-border);
  --success-svg-clr: var(--normal-bg);
  --success-svg-bg: var(--normal-text);

  --error-bg: var(--normal-bg);
  --error-text: var(--normal-text);
  --error-border: var(--normal-border);
  --error-svg-clr: var(--normal-bg);
  --error-svg-bg: var(--normal-text);

  --info-bg: var(--normal-bg);
  --info-text: var(--normal-text);
  --info-border: var(--normal-border);
  --info-svg-clr: var(--normal-bg);
  --info-svg-bg: var(--normal-text);

  --loader-stroke: hsl(0, 0%, 80%);
  --loader-bg: hsl(0, 0%, 50%);
}

.kitzo-toast-container.kitzo-toast-rich-colors {
  --success-bg: hsl(152, 65%, 95%);
  --success-text: hsl(142, 98%, 30%);
  --success-border: hsl(142, 100%, 93%);
  --success-svg-clr: white;
  --success-svg-bg: hsl(142, 98%, 40%);

  --error-bg: hsl(0, 65%, 95%);
  --error-text: hsl(6, 98%, 40%);
  --error-border: hsl(0, 100%, 94%);
  --error-svg-clr: white;
  --error-svg-bg: hsl(6, 98%, 50%);

  --info-bg: hsl(210, 65%, 95%);
  --info-text: hsl(210, 100%, 20%);
  --info-border: hsl(210, 100%, 94%);
  --info-svg-clr: white;
  --info-svg-bg: hsl(210, 100%, 40%);
}

.kitzo-toast-container.kitzo-toast-rich-colors.kitzo-toast-dark {
  --success-bg: hsl(152, 65%, 15%);
  --success-text: hsl(142, 98%, 70%);
  --success-border: hsl(142, 100%, 15%);
  --success-svg-clr: white;
  --success-svg-bg: hsl(142, 98%, 40%);

  --error-bg: hsl(0, 65%, 15%);
  --error-text: hsl(6, 98%, 70%);
  --error-border: hsl(0, 100%, 15%);
  --error-svg-clr: white;
  --error-svg-bg: hsl(6, 98%, 50%);

  --info-bg: hsl(210, 65%, 15%);
  --info-text: hsl(210, 100%, 70%);
  --info-border: hsl(210, 100%, 16%);
  --info-svg-clr: white;
  --info-svg-bg: hsl(210, 100%, 40%);
}

.kitzo-toast {
  font-family: inherit;
  font-size: 0.875rem;
  transition:
    transform 280ms,
    opacity 280ms;
  will-change: transform, opacity;
}

/*! toast transfor origin */
.kitzo-toast.transform-origin-top-left {
  transform-origin: top left;
}
.kitzo-toast.transform-origin-top-center {
  transform-origin: top center;
}
.kitzo-toast.transform-origin-top-right {
  transform-origin: top right;
}
.kitzo-toast.transform-origin-bottom-left {
  transform-origin: bottom left;
}
.kitzo-toast.transform-origin-bottom-center {
  transform-origin: bottom center;
}
.kitzo-toast.transform-origin-bottom-right {
  transform-origin: bottom right;
}

/*! Toast theme styles  */
.kitzo-toast.type-normal {
  background-color: var(--normal-bg);
  color: var(--normal-text);
  border: 1px solid var(--normal-border);
}
.kitzo-toast.type-loading {
  background-color: var(--normal-bg);
  color: var(--normal-text);
  border: 1px solid var(--normal-border);
}

.kitzo-toast.type-success {
  background-color: var(--success-bg);
  color: var(--success-text);
  border: 1px solid var(--success-border);
}

.kitzo-toast.type-error {
  background-color: var(--error-bg);
  color: var(--error-text);
  border: 1px solid var(--error-border);
}

.kitzo-toast.type-info {
  background-color: var(--info-bg);
  color: var(--info-text);
  border: 1px solid var(--info-border);
}

.kitzo-toast.type-normal,
.kitzo-toast.type-loading,
.kitzo-toast.type-success,
.kitzo-toast.type-error,
.kitzo-toast.type-info {
  border-radius: 0.425rem;
  padding: 0.325rem 0.5rem;
  box-shadow: 0 3px 8px -3px hsl(0, 0%, 0%, 0.15);
}

/*! toast transition styles */
.kitzo-toast.status-entering.pos-y-top {
  opacity: 0;
  transform: translateY(-120%) scale(0.6);
}

.kitzo-toast.status-visible.pos-y-top {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.kitzo-toast.status-leaving.pos-y-top {
  transform-origin: top;
  opacity: 0;
  transform: translateY(-120%) scale(0.6);
}

.kitzo-toast.status-entering.pos-y-bottom {
  opacity: 0;
  transform: translateY(120%) scale(0.6);
}

.kitzo-toast.status-visible.pos-y-bottom {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.kitzo-toast.status-leaving.pos-y-bottom {
  transform-origin: bottom;
  opacity: 0;
  transform: translateY(120%) scale(0.6);
}

.action-update {
  animation: update 150ms;
}

@keyframes update {
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

/*! svg stylings */
.svg-container {
  display: grid;
  place-items: center;
  border-radius: 10rem;
  height: 18px;
  width: 18px;
  position: relative;
  overflow: hidden;

  scale: 1.1;
  animation: svg-container-animation 400ms ease-in-out forwards;

  svg {
    width: 12px;
    height: 12px;
    stroke-width: 4px;
    display: inline-block;
  }
}

.svg-container.success {
  color: var(--success-svg-clr);
  background-color: var(--success-svg-bg);
}
.svg-container.error {
  color: var(--error-svg-clr);
  background-color: var(--error-svg-bg);

  svg {
    scale: 0;
    animation: error-svg-zoom-in 170ms 130ms forwards;
  }
}

.svg-container.info {
  color: var(--info-svg-clr);
  background-color: var(--info-svg-bg);
  animation: info-svg-bell 400ms 200ms;

  svg {
    width: 14px;
    height: 14px;
  }
}

.svg-container.success::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 5;
  border-radius: 10rem;
  background-color: var(--success-svg-bg);
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

@keyframes info-svg-bell {
  0% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(15deg);
  }
  75% {
    transform: rotate(-15deg);
  }
  100% {
    transform: rotate(0);
  }
}

.promise-svg-container {
  width: 20px;
  height: 20px;
  display: grid;
  place-items: center;

  .loader {
    width: 14px;
    height: 14px;
    background-image: conic-gradient(
      var(--loader-stroke) 0 25%,
      var(--loader-bg) 0 100%
    );
    border-radius: 10rem;
    position: relative;
    animation: rotate-infinity 1000ms linear infinite;
  }
  .loader::before {
    content: '';
    position: absolute;
    inset: 2px;
    border-radius: inherit;
    background-color: var(--normal-bg);
  }
}

@keyframes rotate-infinity {
  to {
    rotate: 360deg;
  }
}`;

const listeners = new Set();

export function subscribe(fn) {
  if (!document.getElementById('kitzo-toast-styles')) {
    const styleTag = document.createElement('style');
    styleTag.id = 'kitzo-toast-styles';
    styleTag.textContent = toastStyles;
    document.head.appendChild(styleTag);
  }

  listeners.add(fn);
  return () => listeners.delete(fn);
}

function notify(toast) {
  listeners.forEach((fn) => fn(toast));
}

const DEFAULTS = {
  duration: 2800,
  showIcon: true,
};

let uid = 0;
const genId = () => crypto.randomUUID?.() ?? `kitzo_toast_id_${++uid}`;

let zIndex = 1;

function createToast(type, action, content, options = {}) {
  const opts = typeof options === 'object' && options !== null ? options : {};

  return {
    id: opts.id ?? genId(),
    type,
    zIndex: ++zIndex,
    render: content,
    duration: opts.duration ?? DEFAULTS.duration,
    showIcon: opts.showIcon ?? DEFAULTS.showIcon,
    action,
    ...opts,
  };
}

function toast(content, options) {
  if (content == null) return;
  notify(createToast('normal', 'add', content, options));
}

toast.success = (content, options) => {
  if (content == null) return;
  notify(createToast('success', 'add', content, options));
};

toast.error = (content, options) => {
  if (content == null) return;
  notify(createToast('error', 'add', content, options));
};

toast.info = (content, options) => {
  if (content == null) return;
  notify(createToast('info', 'add', content, options));
};

toast.custom = (content, options) => {
  if (content == null) return;
  notify(createToast('custom', 'add', content, options));
};

toast.dismiss = (id) => {
  notify({ action: 'dismiss', id });
};

toast.update = (id, content, options = {}) => {
  if (!id) return;
  notify(createToast('custom', 'update', content, { ...options, id }));
};

const loading = (content, options = {}) => {
  notify(
    createToast('loading', 'add', content, {
      ...options,
      duration: Infinity,
    }),
  );
};

toast.promise = (promise, handlers, options = {}) => {
  if (!promise) return;
  if (!handlers) return;
  if (!handlers.loading) return;
  if (!handlers.success) return;
  if (!handlers.error) return;

  const id = options.id ?? genId();

  loading(handlers.loading, { ...options, id, duration: Infinity });

  promise
    .then(async (result) => {
      const successContent =
        typeof handlers.success === 'function'
          ? await handlers.success(result)
          : handlers.success;

      toast.update(id, await successContent, {
        type: 'success',
        duration: options.duration ?? 2800,
      });
      return result;
    })
    .catch(async (error) => {
      const errorContent =
        typeof handlers.error === 'function'
          ? await handlers.error(error)
          : handlers.error;

      toast.update(id, errorContent, {
        type: 'error',
        duration: options.duration ?? 3800,
      });
      throw error;
    });

  return promise;
};

export default toast;
