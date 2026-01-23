import { dragStarted as m } from "./swipeClose.js";
import { notify as s } from "../listenars.js";
const i = /* @__PURE__ */ new Map(), T = 500, u = 0;
function a(t) {
  const e = Number(t);
  return isFinite(e) ? Math.max(u, e) : null;
}
function c(t) {
  const e = i.get(t);
  e && (clearTimeout(e.timeoutId), i.delete(t));
}
function l() {
  i.forEach(({ timeoutId: t }) => {
    clearTimeout(t);
  }), i.clear();
}
function I(t) {
  const e = a(t.duration);
  if (!e) return;
  c(t.id);
  const n = setTimeout(() => {
    s({
      action: "dismiss",
      id: t.id,
      toasterId: t.toasterId
    }), i.delete(t.id);
  }, e), r = Date.now();
  i.set(t.id, {
    timeoutId: n,
    startingTime: r,
    totalTime: e,
    remainningTime: 0,
    paused: !1,
    toasterId: t.toasterId
  });
}
function g(t) {
  const e = i.get(t);
  if (!e || e.paused) return;
  const r = Date.now() - e.startingTime, o = Math.max(e.totalTime - r, 0);
  o !== 0 && (i.set(t, { ...e, remainningTime: o, paused: !0 }), clearTimeout(e.timeoutId));
}
function p(t) {
  if (m || !t) return;
  const e = i.get(t);
  if (!e || !e.paused) return;
  const n = a(e.remainningTime);
  if (!n) return;
  const r = setTimeout(() => {
    s({
      action: "dismiss",
      id: t,
      toasterId: e.toasterId
    }), i.delete(t);
  }, n);
  i.set(t, {
    timeoutId: r,
    startingTime: Date.now(),
    totalTime: e.remainningTime,
    remainningTime: 0,
    paused: !1,
    toasterId: e.toasterId
  });
}
export {
  T as LEAVE_DELAY,
  u as MIN_VISIBLE,
  I as addTimers,
  l as clearAllTimers,
  c as clearTimer,
  g as pauseToast,
  p as resumeToast
};
