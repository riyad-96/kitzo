const t = /* @__PURE__ */ new Map(), o = 600, a = 700;
function m(e) {
  const i = Number(e);
  if (!isFinite(i)) return null;
  const n = Math.max(a, i);
  return {
    leaving: n,
    left: n + o
  };
}
function d(e) {
  const i = t.get(e);
  i && (clearTimeout(i.leaving), clearTimeout(i.left), t.delete(e));
}
function f() {
  t.forEach(({ leaving: e, left: i }) => {
    clearTimeout(e), clearTimeout(i);
  }), t.clear();
}
function s(e, i) {
  const n = m(e.duration);
  if (!n) return;
  d(e.id);
  const c = setTimeout(() => {
    i(
      (l) => l.map((r) => r.id === e.id ? { ...r, status: "leaving" } : r)
    );
  }, n.leaving), u = setTimeout(() => {
    i((l) => l.filter((r) => r.id !== e.id)), t.delete(e.id);
  }, n.left);
  t.set(e.id, { leaving: c, left: u });
}
export {
  o as LEAVE_DELAY,
  a as MIN_VISIBLE,
  s as addTimers,
  f as clearAllTimers,
  d as clearTimer
};
