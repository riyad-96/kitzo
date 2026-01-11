import type { ManageToastsProps } from './manageToasts';
import { addTimers } from './timers';

export default function addToasts({ toast, setToasts }: ManageToastsProps) {
  let isExists = false;

  setToasts((prev) => {
    isExists = !!prev.find((t) => t.id === toast.id);
    if (isExists) return prev;
    return [toast, ...prev];
  });

  if (isExists) return;

  requestAnimationFrame(() => {
    setToasts((prev) =>
      prev.map((t) => (t.id === toast.id ? { ...t, status: 'visible' } : t)),
    );
  });

  addTimers(toast, setToasts);
}
