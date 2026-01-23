import type { Toast } from '../types';
import addToastStyles from './addToastStyles';

type ListenerHandler = (toast: Toast) => void;

const listeners = new Map<string | number, Set<ListenerHandler>>();
export const DEFAULT_TOASTER_ID = 'default';

export function subscribe(
  fn: ListenerHandler,
  toasterId: string | number = DEFAULT_TOASTER_ID,
) {
  addToastStyles();
  toasterId = `toaster-id:${toasterId ?? DEFAULT_TOASTER_ID}`;

  if (!listeners.has(toasterId)) {
    listeners.set(toasterId, new Set());
  }

  const set = listeners.get(toasterId);
  if (set) set.add(fn);

  return () => {
    set?.delete(fn);
    if (set?.size === 0) {
      listeners.delete(toasterId);
    }
  };
}

function addIdPrefix(prefix: string, id?: string) {
  if (id == null) return undefined;
  id = `${id}`;

  return id.startsWith(prefix) ? id : `${prefix}${id}`;
}

export function notify(toast: Partial<Toast>) {
  if (toast.id == null) {
    listeners.forEach((s) => {
      s.forEach((fn) => fn({ ...(toast as Toast) }));
    });
    return;
  }

  const id = addIdPrefix('toast-id:', toast.id);
  const toasterId = addIdPrefix(
    'toaster-id:',
    toast.toasterId ?? DEFAULT_TOASTER_ID,
  );

  const set = listeners.get(toasterId as string);
  if (!set) return;

  set.forEach((fn) => fn({ ...toast, id, toasterId } as Toast));
}
