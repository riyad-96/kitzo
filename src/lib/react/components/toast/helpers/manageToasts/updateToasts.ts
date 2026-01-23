import type { ManageToastsProps } from './manageToasts';
import { addTimers, clearTimer } from './timers';

export default function updateToasts({ toast, setToasts }: ManageToastsProps) {
  setToasts((prev) => {
    const exists = prev.find((t) => t.id === toast.id);
    if (!exists) {
      return prev;
    }

    clearTimer(toast.id);
    addTimers(toast);

    return prev.map((t) =>
      t.id === toast.id
        ? {
            ...t,
            ...toast,
            status: 'visible',
            updateState: t.updateState?.includes('again')
              ? 'updated'
              : 'updated-again',
          }
        : t,
    );
  });
}
