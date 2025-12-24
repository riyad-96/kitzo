import { useEffect, useLayoutEffect, useState } from 'react';
import { subscribe } from './toaster';
import manageToasts from './manageToasts';
import Toast from './Toast';

export default function ToastContainer({
  position = 'top-center',
  gap = 8,
  edgeOffset = 16,
  isDark = window.matchMedia('(prefers-color-scheme: dark)').matches,
}) {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const unsub = subscribe((toast) => manageToasts(toast, setToasts));
    return unsub;
  }, []);

  useLayoutEffect(() => {
    const grouped = toasts.reduce((prev, t) => {
      const pos = t.position || position || 'top-center';
      (prev[pos] ||= []).push(t);
      return prev;
    }, {});

    let hasChanged = false;

    const updated = toasts.map((toast) => {
      const pos = toast.position || position || 'top-center';
      const group = grouped[pos];
      const index = group.findIndex((t) => t.id === toast.id);

      const distance = group
        .slice(0, index)
        .reduce((acc, t) => acc + (t.height || 0), 0);

      if (distance !== toast.distance) {
        hasChanged = true;
      }

      return { ...toast, distance };
    });

    if (hasChanged) {
      setToasts(updated);
    }
  }, [toasts, position]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2147483647,
        pointerEvents: 'none',
        display: 'grid',
        padding: edgeOffset != null ? edgeOffset : 16,
      }}
      className={`kitzo-toast-container ${isDark ? 'kitzo-toast-dark' : ''}`}
    >
      <div
        style={{
          position: 'relative',
        }}
      >
        {toasts.map((t) => (
          <Toast
            key={t.id}
            t={t}
            containerPosition={position}
            gap={gap}
            setToasts={setToasts}
          />
        ))}
      </div>
    </div>
  );
}
