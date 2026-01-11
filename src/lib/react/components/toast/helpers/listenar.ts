import type { Toast } from '../types';
import addToastStyles from './addToastStyles';

type ListenerHandler = (toast: Toast) => void;
const listeners = new Set<ListenerHandler>();

export function subscribe(fn: ListenerHandler) {
  addToastStyles();

  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}

export function notify(toast: Partial<Toast>) {
  listeners.forEach((fn) => fn(toast as Toast));
}
