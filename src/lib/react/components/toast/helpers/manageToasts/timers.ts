import type { Dispatch, SetStateAction } from 'react';
import type { Toast } from '../../types';
import { dragStarted } from './swipeClose';

type TimersKey = string | number;
type TimersValue = {
  leavingTimeoutId: number;
  leftTimeoutId: number;
  startingTime: number;
  totalTime: number;
  remainningTime: number;
  paused: boolean;
};

const timers = new Map<TimersKey, TimersValue>();

export const TRANSITION_DURATION = 280;
export const LEAVE_DELAY = 500;
export const MIN_VISIBLE = 0;

// get timeout durations
function getDurations(duration: number) {
  const d = Number(duration);
  if (!isFinite(d)) return null;

  const visible = Math.max(MIN_VISIBLE, d);

  return {
    totalTime: visible,
    leavingDuration: visible,
    leftDuration: visible + LEAVE_DELAY,
  };
}

// clear a timer
export function clearTimer(id: string | number) {
  const timer = timers.get(id);

  if (!timer) return;
  clearTimeout(timer.leavingTimeoutId);
  clearTimeout(timer.leftTimeoutId);
  timers.delete(id);
}

// clear all timers;
export function clearAllTimers() {
  timers.forEach(({ leavingTimeoutId, leftTimeoutId }) => {
    clearTimeout(leavingTimeoutId);
    clearTimeout(leftTimeoutId);
  });
  timers.clear();
}

type SetToasts = Dispatch<SetStateAction<Toast[]>>;

// add timer to close the toast on time
export function addTimers(toast: Toast, setToasts: SetToasts) {
  const durations = getDurations(toast.duration);
  if (!durations) return;

  clearTimer(toast.id);

  const leavingTimeoutId = setTimeout(() => {
    setToasts((prev) =>
      prev.map((t) => (t.id === toast.id ? { ...t, status: 'leaving' } : t)),
    );
  }, durations.leavingDuration + TRANSITION_DURATION);

  const leftTimeoutId = setTimeout(() => {
    setToasts((prev) => prev.filter((t) => t.id !== toast.id));
    clearTimer(toast.id);
    timers.delete(toast.id);
  }, durations.leftDuration + TRANSITION_DURATION);

  const startingTime = Date.now();

  timers.set(toast.id, {
    leavingTimeoutId,
    leftTimeoutId,
    startingTime,
    totalTime: durations.totalTime,
    remainningTime: 0,
    paused: false,
  });
}

// pause toast and store remainning time
export function pauseToast(id: string | number) {
  // if (dragStarted) return;

  const timer = timers.get(id);

  if (!timer) return;

  // already paused
  if (timer.paused) return;

  const now = Date.now();
  const passedTime = now - timer.startingTime;
  const remainningTime = Math.max(timer.totalTime - passedTime, 0);

  // already expired, don't pause
  if (remainningTime === 0) return;

  timers.set(id, { ...timer, remainningTime, paused: true });

  clearTimeout(timer.leavingTimeoutId);
  clearTimeout(timer.leftTimeoutId);
}

// Resume toast with remainning time
export function resumeToast(id: string | number, setToasts: SetToasts) {
  if (dragStarted) return;

  const timer = timers.get(id);
  if (!timer) return;

  if (!timer.paused) return;

  const durations = getDurations(timer.remainningTime);
  if (!durations) return;

  const leavingTimeoutId = setTimeout(() => {
    setToasts((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: 'leaving' } : t)),
    );
  }, durations.leavingDuration + TRANSITION_DURATION);

  const leftTimeoutId = setTimeout(() => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
    clearTimer(id);
    timers.delete(id);
  }, durations.leftDuration + TRANSITION_DURATION);

  timers.set(id, {
    startingTime: Date.now(),
    totalTime: timer.remainningTime,
    remainningTime: 0,
    leavingTimeoutId,
    leftTimeoutId,
    paused: false,
  });
}
