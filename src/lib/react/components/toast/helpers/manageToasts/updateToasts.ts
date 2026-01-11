import type { ManageToastsProps } from './manageToasts';
import { addTimers } from './timers';

export default function updateToasts({ toast, setToasts }: ManageToastsProps) {
  let isExists = true;
  setToasts((prev) => {
    const exists = prev.find((t) => t.id === toast.id);
    if (!exists) {
      isExists = false;
      return prev;
    }
    return prev.map((t) =>
      t.id === toast.id ? { ...t, ...toast, status: 'visible' } : t,
    );
  });

  if (!isExists) return;
  addTimers(toast, setToasts);
}
