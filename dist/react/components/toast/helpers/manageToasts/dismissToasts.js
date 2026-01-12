import { LEAVE_DELAY as l, clearAllTimers as d, clearTimer as f } from "./timers.js";
function m({ toast: t, setToasts: n }) {
  if (!t.id) {
    let i = 0;
    if (n((e) => (i = e.length, e.length === 0 ? e : e.map((r) => ({ ...r, status: "leaving" })))), i === 0) return;
    setTimeout(() => {
      n([]);
    }, l), d();
    return;
  }
  let u = !0;
  n((i) => i.find((r) => r.id === t.id) ? i.map(
    (r) => r.id === t.id ? { ...r, status: "leaving" } : r
  ) : (u = !1, i)), u && (f(t.id), setTimeout(() => {
    n((i) => i.filter((e) => e.id !== t.id));
  }, l));
}
export {
  m as default
};
