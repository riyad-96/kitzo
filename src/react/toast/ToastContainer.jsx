import { useEffect, useState } from 'react';
import { subscribe } from './toaster';
import Toast from './Toast';

export default function ToastContainer(props) {
  props = Object.assign(
    {
      position: 'top-center',
      gap: 8,
    },
    props,
  );

  const { position, gap } = props;

  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const unsub = subscribe((toast) => {
      if (toast.type === 'dismiss') {
        setTimeout(
          () => {
            setToasts((prev) => prev.map((t) => (t.options.id === toast.id ? { ...t, leaving: true } : t)));
          },
          Math.max(0, Number(toast.exitDelay)),
        );

        setTimeout(
          () => {
            setToasts((prev) => prev.filter((t) => t.options.id !== toast.id));
          },
          Math.max(0, Number(toast.exitDelay) + 300),
        );
        return;
      }

      const duration = toast.options.duration;
      const id = toast.options.id;

      setToasts((prev) => {
        const exists = prev.some((t) => t.options.id === id);
        if (exists) {
          return prev.map((t) => (t.options.id === id ? { ...t, ...toast } : t));
        }

        return [{ id, ...toast, offset: 0, height: 0, leaving: false }, ...prev];
      });

      if (toast.type !== 'loading' && isFinite(duration)) {
        setTimeout(
          () => {
            setToasts((prev) => prev.map((t) => (t.options.id === id ? { ...t, leaving: true } : t)));
          },
          Math.max(0, duration - 300),
        );

        setTimeout(() => {
          setToasts((prev) => prev.filter((t) => t.options.id !== id));
        }, duration);
      }
    });

    return () => unsub();
  }, []);

  useEffect(() => {
    let offset = 0;
    const updated = toasts.map((toast) => {
      const top = offset;
      offset += toast.height;
      return { ...toast, offset: top };
    });

    const changed = updated.some((u, i) => u.offset != toasts[i].offset);
    if (changed) setToasts(updated);
  }, [toasts]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100000000,
        pointerEvents: 'none',
        fontFamily: 'inherit',
        display: 'grid',
        padding: '1rem',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ position: 'relative' }}>
        {toasts.map((toast) => (
          <Toast key={toast.options.id} toast={toast} setToasts={setToasts} position={position} gap={typeof gap === 'string' ? (isNaN(+gap) ? 8 : +gap) : gap} />
        ))}
      </div>
    </div>
  );
}
