import { useEffect, useState } from 'react';
import { subscribe } from './toaster';
import Toast from './Toast';

const EXIT_ANIM_MS = 300;

export default function ToastContainer(props) {
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
          return prev.map((t) => (t.options.id === id ? { ...t, ...toast } : t));
        }

        return [{ id, ...toast, offset: 0, leaving: false }, ...prev];
      });

      if (toast.type !== 'loading') {
        setTimeout(() => {
          setToasts((prev) => prev.map((t) => (t.options.id === id ? { ...t, leaving: true } : t)));
        }, Math.max(0, duration - EXIT_ANIM_MS));

        setTimeout(() => {
          setToasts((prev) => prev.filter((t) => t.options.id !== id));
        }, duration);
      }
    });

    return () => unsub();
  }, []);

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
      {toasts.map((t) => (
        <Toast key={t.options.id} toast={t} setToasts={setToasts} position={position} />
      ))}
    </div>
  );
}
