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

  // hook logic
  useEffect(() => {
    
  }, [pathname]);

  return ref;
}

export default useScrollRestoration;
