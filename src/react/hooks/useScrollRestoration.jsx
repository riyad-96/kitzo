import { useEffect, useRef } from 'react';

function useScrollRestoration(path, key, options = {}) {
  if (!path || (typeof path !== 'object' && typeof path !== 'string')) {
    throw new Error(
      'kitzo/react: useScrollRestoration(path, ...) expect location object from the react useLocation hook or unique path string(location.pathname)',
    );
  }
  if (!key || (typeof key !== 'string' && typeof key !== 'number')) {
    throw new Error('kitzo/react: useScrollRestoration(..., key) expect unique string or number');
  }

  const pathname = typeof path === 'object' ? path.pathname : path;
  const behavior = options?.behavior ? options.behavior : 'instant';
  const delay = options?.delay ? (isNaN(Number(options.delay)) ? 0 : Number(options.delay)) : 0;

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
      if (!saved) {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        element.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        return;
      }
      if (isWindow) {
        window.scrollTo({ top: saved.top, left: saved.left, behavior });
      } else if (element) {
        element.scrollTo({ top: saved.top, left: saved.left, behavior });
      }
    };

    if (saved) {
      if (delay > 0) {
        const timeoutId = setTimeout(restore, delay);
        return () => clearTimeout(timeoutId);
      } else {
        restore();
      }
    }

    let timeoutId = null;
    const save = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const top = isWindow ? window.scrollY : (element?.scrollTop ?? 0);
        const left = isWindow ? window.scrollX : (element?.scrollLeft ?? 0);
        history.current.set(mapKey, { top, left });
      }, 50);
    };

    target.addEventListener('scroll', save, { passive: true });

    return () => {
      target.removeEventListener('scroll', save);
      clearTimeout(timeoutId);
    };
  }, [pathname, key, behavior, delay]);

  return ref;
}

export default useScrollRestoration;
