const o = /* @__PURE__ */ new Map(), u = 280, s = 500, f = 0;
function c(e) {
  const i = Number(e);
  if (!isFinite(i)) return null;
  const t = Math.max(f, i);
  return {
    totalTime: t,
    leavingDuration: t,
    leftDuration: t + s
  };
}
function T(e) {
  const i = o.get(e);
  i && (clearTimeout(i.leavingTimeoutId), clearTimeout(i.leftTimeoutId), o.delete(e));
}
function g() {
  o.forEach(({ leavingTimeoutId: e, leftTimeoutId: i }) => {
    clearTimeout(e), clearTimeout(i);
  }), o.clear();
}
function d(e, i) {
  const t = c(e.duration);
  if (!t) return;
  T(e.id);
  const r = setTimeout(() => {
    i(
      (a) => a.map((n) => n.id === e.id ? { ...n, status: "leaving" } : n)
    );
  }, t.leavingDuration + u), m = setTimeout(() => {
    i((a) => a.filter((n) => n.id !== e.id)), T(e.id), o.delete(e.id);
  }, t.leftDuration + u), l = Date.now();
  o.set(e.id, {
    leavingTimeoutId: r,
    leftTimeoutId: m,
    startingTime: l,
    totalTime: t.totalTime,
    remainningTime: 0
  });
}
function I(e) {
  const i = o.get(e);
  if (!i || i.remainningTime > 0) return;
  const r = Date.now() - i.startingTime, m = Math.max(i.totalTime - r, 0);
  m !== 0 && (o.set(e, { ...i, remainningTime: m }), clearTimeout(i.leavingTimeoutId), clearTimeout(i.leftTimeoutId));
}
function D(e, i) {
  const t = o.get(e);
  if (!t) return;
  const r = c(t.remainningTime);
  if (!r) return;
  const m = setTimeout(() => {
    i(
      (a) => a.map((n) => n.id === e ? { ...n, status: "leaving" } : n)
    );
  }, r.leavingDuration + u), l = setTimeout(() => {
    i((a) => a.filter((n) => n.id !== e)), T(e), o.delete(e);
  }, r.leftDuration + u);
  o.set(e, {
    ...t,
    startingTime: Date.now(),
    totalTime: t.remainningTime,
    remainningTime: 0,
    leavingTimeoutId: m,
    leftTimeoutId: l
  });
}
export {
  s as LEAVE_DELAY,
  f as MIN_VISIBLE,
  u as TRANSITION_DURATION,
  d as addTimers,
  g as clearAllTimers,
  T as clearTimer,
  I as pauseToast,
  D as resumeToast
};
