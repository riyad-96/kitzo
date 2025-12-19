import { useEffect, useLayoutEffect, useState } from 'react';
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

  const { gap } = props;
  const position = props.position;

  const [toasts, setToasts] = useState([]);

  // event listener
  useEffect(() => {
    const unsub = subscribe((toast) => {
      if (toast.type === 'dismiss') {
        setTimeout(
          () => {
            setToasts((prev) =>
              prev.map((t) =>
                t.options.id === toast.id ? { ...t, leaving: true } : t,
              ),
            );
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
          return prev.map((t) =>
            t.options.id === id ? { ...t, ...toast } : t,
          );
        }

        return [
          { id, ...toast, offset: 0, height: 0, leaving: false },
          ...prev,
        ];
      });

      if (toast.type !== 'loading' && isFinite(duration)) {
        setTimeout(
          () => {
            setToasts((prev) =>
              prev.map((t) =>
                t.options.id === id ? { ...t, leaving: true } : t,
              ),
            );
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

  // measue height and offset for each toast
  useLayoutEffect(() => {
    const grouped = toasts.reduce((acc, t) => {
      const pos = t.options.position || position || 'top-center';
      (acc[pos] ||= []).push(t);
      return acc;
    }, {});

    let hasChanged = false;

    const updated = toasts.map((toast) => {
      const pos = toast.options.position || position || 'top-center';
      const group = grouped[pos];
      const index = group.findIndex((t) => t.id === toast.id);

      const offset = group
        .slice(0, index)
        .reduce((acc, t) => acc + (t.height || 0), 0);

      if (offset !== toast.offset) {
        hasChanged = true;
      }

      return { ...toast, offset };
    });

    if (hasChanged) {
      setToasts(updated);
    }
  }, [toasts, position]);

  const positions = [
    'top-left',
    'top-center',
    'top-right',
    'bottom-left',
    'bottom-center',
    'bottom-right',
  ];

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100000000,
        pointerEvents: 'none',
        fontFamily: 'inherit',

        boxSizing: 'border-box',
      }}
    >
      {positions.map((pos) => {
        const group = toasts.filter(
          (t) => (t.options.position || position || 'top-center') === pos,
        );
        if (!group.length) return null;

        return (
          <div
            key={pos}
            style={{
              position: 'absolute',
              inset: 0,
              display: 'grid',
              padding: '1rem',
            }}
          >
            <div style={{ position: 'relative' }}>
              {group.map((toast) => (
                <Toast
                  key={toast.options.id}
                  toast={toast}
                  setToasts={setToasts}
                  position={pos}
                  gap={typeof gap === 'string' ? (isNaN(+gap) ? 8 : +gap) : gap}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
