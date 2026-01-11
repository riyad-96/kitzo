import type { Dispatch, SetStateAction } from 'react';
import type { Toast } from '../../types';

type TimersKey = string | number;
type TimersValue = {
  leaving: number;
  left: number;
};

const timers = new Map<TimersKey, TimersValue>();

export const LEAVE_DELAY = 600;
export const MIN_VISIBLE = 700;

function getDurations(duration: number) {
  const d = Number(duration);
  if (!isFinite(d)) return null;

  const visible = Math.max(MIN_VISIBLE, d);

  return {
    leaving: visible,
    left: visible + LEAVE_DELAY,
  };
}

export function clearTimer(id: string | number) {
  const timer = timers.get(id);

  if (!timer) return;
  clearTimeout(timer.leaving);
  clearTimeout(timer.left);
  timers.delete(id);
}

export function clearAllTimers() {
  timers.forEach(({ leaving, left }) => {
    clearTimeout(leaving);
    clearTimeout(left);
  });
  timers.clear();
}

type SetToasts = Dispatch<SetStateAction<Toast[]>>;

export function addTimers(toast: Toast, setToasts: SetToasts) {
  const durations = getDurations(toast.duration);
  if (!durations) return;

  clearTimer(toast.id);

  const leaving = setTimeout(() => {
    setToasts((prev) =>
      prev.map((t) => (t.id === toast.id ? { ...t, status: 'leaving' } : t)),
    );
  }, durations.leaving);

  const left = setTimeout(() => {
    setToasts((prev) => prev.filter((t) => t.id !== toast.id));
    timers.delete(toast.id);
  }, durations.left);

  timers.set(toast.id, { leaving, left });
}
