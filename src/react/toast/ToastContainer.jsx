import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { subscribe } from './toaster';
import Toast from './Toast';

export default function ToastContainer(props) {
  props = Object.assign(
    {
      position: 'top-center',
    },
    props
  );

  const { position } = props;

  const [toasts, setToasts] = useState([]);
  const timeouts = useRef(new Set());

  useEffect(() => {
    const unsub = subscribe((toast) => {
      const duration = toast.options.duration;
      const id = toast.options.id;

      setToasts((prev) => {
        const exists = prev.some((t) => t.options.id === id);
        if (exists) {
          return prev.map((t) => (t.options.id === id ? { ...t, ...toast } : t));
        }

        return [{ id, ...toast, offset: 0, leaving: false }, ...prev];
      });

      if (toast.type !== 'loading') {
        const exit = setTimeout(() => {
          setToasts((prev) => prev.map((t) => (t.options.id === id ? { ...t, leaving: true } : t)));
        }, Math.max(0, duration - 300));

        const remove = setTimeout(() => {
          setToasts((prev) => prev.filter((t) => t.options.id !== id));
        }, duration);

        timeouts.current.add(exit);
        timeouts.current.add(remove);
      }
    });

    return () => {
      unsub();
      timeouts.current.forEach(clearTimeout);
      timeouts.current.clear();
    };
  }, []);

  useEffect(() => {
    let offset = 0;
    setToasts((prev) =>
      prev.map((t) => {
        const newToast = { ...t, offset };
        offset += (t.height || 0) + 10;
        return newToast;
      })
    );
  }, [toasts.map((t) => t.height).join(',')]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100000000,
        pointerEvents: 'none',
        fontFamily: 'inherit',
        padding: '1rem',
      }}
    >
      {toasts.map((toast) => (
        <Toast key={toast.options.id} toast={toast} setToasts={setToasts} position={position} />
      ))}
    </div>
  );
}
