import type { ManageToastsProps } from './manageToasts';
import { clearAllTimers, clearTimer, LEAVE_DELAY } from './timers';

export default function dismissToasts({ toast, setToasts }: ManageToastsProps) {
  // clear all toast
  if (!toast.id) {
    let toastCount = 0;

    setToasts((prev) => {
      toastCount = prev.length;
      if (prev.length === 0) return prev;
      return prev.map((t) => ({ ...t, status: 'leaving' }));
    });

    if (toastCount === 0) return;

    setTimeout(() => {
      setToasts([]);
    }, LEAVE_DELAY);

    clearAllTimers();
    return;
  }

  // set toast status leaving
  let doesExists = true;

  setToasts((prev) => {
    const exists = prev.find((t) => t.id === toast.id);
    if (!exists) {
      doesExists = false;
      return prev;
    }
    return prev.map((t) =>
      t.id === toast.id ? { ...t, status: 'leaving' } : t,
    );
  });

  if (!doesExists) return;

  // clear timer
  clearTimer(toast.id);

  // remove toast
  setTimeout(() => {
    setToasts((prev) => prev.filter((t) => t.id !== toast.id));
  }, LEAVE_DELAY);
}
