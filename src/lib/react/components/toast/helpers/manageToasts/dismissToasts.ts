import type { ManageToastsProps } from './manageToasts';
import { clearAllTimers, clearTimer, LEAVE_DELAY } from './timers';

export default function dismissToasts({ toast, setToasts }: ManageToastsProps) {
  // clear all toast
  if (!toast.id) {
    setToasts((prev) => prev.map((t) => ({ ...t, status: 'leaving' })));

    setTimeout(() => {
      setToasts([]);
    }, LEAVE_DELAY);

    clearAllTimers();
    return;
  }

  // clear timer
  clearTimer(toast.id);

  // set toast status leaving
  setToasts((prev) =>
    prev.map((t) => (t.id === toast.id ? { ...t, status: 'leaving' } : t)),
  );

  // remove toast
  setTimeout(() => {
    setToasts((prev) => prev.filter((t) => t.id !== toast.id));
  }, LEAVE_DELAY);
}
