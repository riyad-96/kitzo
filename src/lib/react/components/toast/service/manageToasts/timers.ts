import type { Toast } from '../../types';
import { dragStarted } from './swipeClose';
import { notify } from '../listenars';

type TimersKey = string | number;
type TimersValue = {
  timeoutId: number;
  startingTime: number;
  totalTime: number;
  remainningTime: number;
  paused: boolean;
  toasterId: string | number;
};

const timers = new Map<TimersKey, TimersValue>();

export const TRANSITION_DURATION = 280;
export const LEAVE_DELAY = 500;
export const MIN_VISIBLE = 0;

// get timeout durations
function getDurations(duration: number) {
  const d = Number(duration);
  if (!isFinite(d)) return null;

  return Math.max(MIN_VISIBLE, d);
}

// clear a timer
export function clearTimer(id: string | number) {
  const timer = timers.get(id);

  if (!timer) return;
  clearTimeout(timer.timeoutId);
  timers.delete(id);
}

// clear all timers;
export function clearAllTimers() {
  timers.forEach(({ timeoutId }) => {
    clearTimeout(timeoutId);
  });
  timers.clear();
}

// add timer to close the toast on time
export function addTimers(toast: Toast) {
  const duration = getDurations(toast.duration);
  if (!duration) return;

  clearTimer(toast.id);

  const timeoutId = setTimeout(() => {
    notify({
      action: 'dismiss',
      id: toast.id,
      toasterId: toast.toasterId,
    });
    timers.delete(toast.id);
  }, duration);

  const startingTime = Date.now();

  timers.set(toast.id, {
    timeoutId,
    startingTime,
    totalTime: duration,
    remainningTime: 0,
    paused: false,
    toasterId: toast.toasterId,
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

  clearTimeout(timer.timeoutId);
}

// Resume toast with remainning time
export function resumeToast(id?: string | number) {
  if (dragStarted) return;
  if (!id) return;

  const timer = timers.get(id);
  if (!timer) return;

  if (!timer.paused) return;

  const duration = getDurations(timer.remainningTime);
  if (!duration) return;

  const timeoutId = setTimeout(() => {
    notify({
      action: 'dismiss',
      id: id,
      toasterId: timer.toasterId,
    });
    timers.delete(id);
  }, duration);

  timers.set(id, {
    timeoutId,
    startingTime: Date.now(),
    totalTime: timer.remainningTime,
    remainningTime: 0,
    paused: false,
    toasterId: timer.toasterId,
  });
}
