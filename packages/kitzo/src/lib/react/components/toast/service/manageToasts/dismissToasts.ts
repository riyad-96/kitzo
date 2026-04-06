import type { ManageToastsProps } from './manageToasts';
import { clearAllTimers, clearTimer, LEAVE_DELAY } from './timers';

export default function dismissToasts({ toast, setToasts }: ManageToastsProps) {
  // clear all toast
  if (toast.action === 'dismiss' && toast.id == null) {
    setToasts((prev) => prev.map((t) => ({ ...t, status: 'leaving' })));

    setTimeout(() => {
      setToasts((prev) => {
        prev.forEach((t) => {
          if (t.status === 'leaving') {
            setTimeout(() => t.onClose?.(t.id), 0);
          }
        });
        return prev.filter((t) => t.status !== 'leaving');
      });
    }, LEAVE_DELAY);

    clearAllTimers();
    return;
  }

  // set toast status leaving
  setToasts((prev) => {
    const exists = prev.find((t) => t.id === toast.id);
    if (exists) {
      clearTimer(toast.id);
    }

    return prev.map((t) =>
      t.id === toast.id ? { ...t, status: 'leaving' } : t,
    );
  });

  // remove toast
  setTimeout(() => {
    setToasts((prev) => {
      const removedToast = prev.find(
        (t) => t.id === toast.id && t.status === 'leaving',
      );
      if (removedToast) {
        setTimeout(() => removedToast.onClose?.(removedToast.id), 0);
      }

      return prev.filter((t) => !(t.id === toast.id && t.status === 'leaving'));
    });
  }, LEAVE_DELAY);
}
