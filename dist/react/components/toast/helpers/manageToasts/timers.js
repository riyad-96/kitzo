import { dragStarted as c } from "./swipeClose.js";
const r = /* @__PURE__ */ new Map(), m = 280, f = 500, d = 0;
function T(e) {
  const t = Number(e);
  if (!isFinite(t)) return null;
  const i = Math.max(d, t);
  return {
    totalTime: i,
    leavingDuration: i,
    leftDuration: i + f
  };
}
function s(e) {
  const t = r.get(e);
  t && (clearTimeout(t.leavingTimeoutId), clearTimeout(t.leftTimeoutId), r.delete(e));
}
function I() {
  r.forEach(({ leavingTimeoutId: e, leftTimeoutId: t }) => {
    clearTimeout(e), clearTimeout(t);
  }), r.clear();
}
function p(e, t) {
  const i = T(e.duration);
  if (!i) return;
  s(e.id);
  const o = setTimeout(() => {
    t(
      (a) => a.map((n) => n.id === e.id ? { ...n, status: "leaving" } : n)
    );
  }, i.leavingDuration + m), u = setTimeout(() => {
    t((a) => a.filter((n) => n.id !== e.id)), s(e.id), r.delete(e.id);
  }, i.leftDuration + m), l = Date.now();
  r.set(e.id, {
    leavingTimeoutId: o,
    leftTimeoutId: u,
    startingTime: l,
    totalTime: i.totalTime,
    remainningTime: 0,
    paused: !1
  });
}
function D(e) {
  const t = r.get(e);
  if (!t || t.paused) return;
  const o = Date.now() - t.startingTime, u = Math.max(t.totalTime - o, 0);
  u !== 0 && (r.set(e, { ...t, remainningTime: u, paused: !0 }), clearTimeout(t.leavingTimeoutId), clearTimeout(t.leftTimeoutId));
}
function v(e, t) {
  if (c) return;
  const i = r.get(e);
  if (!i || !i.paused) return;
  const o = T(i.remainningTime);
  if (!o) return;
  const u = setTimeout(() => {
    t(
      (a) => a.map((n) => n.id === e ? { ...n, status: "leaving" } : n)
    );
  }, o.leavingDuration + m), l = setTimeout(() => {
    t((a) => a.filter((n) => n.id !== e)), s(e), r.delete(e);
  }, o.leftDuration + m);
  r.set(e, {
    startingTime: Date.now(),
    totalTime: i.remainningTime,
    remainningTime: 0,
    leavingTimeoutId: u,
    leftTimeoutId: l,
    paused: !1
  });
}
export {
  f as LEAVE_DELAY,
  d as MIN_VISIBLE,
  m as TRANSITION_DURATION,
  p as addTimers,
  I as clearAllTimers,
  s as clearTimer,
  D as pauseToast,
  v as resumeToast
};
