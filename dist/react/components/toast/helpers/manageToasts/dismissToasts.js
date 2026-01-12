import { LEAVE_DELAY as n, clearAllTimers as f, clearTimer as m } from "./timers.js";
function t({ toast: e, setToasts: d }) {
  if (!e.id) {
    d((i) => i.map((u) => ({ ...u, status: "leaving" }))), setTimeout(() => {
      d([]);
    }, n), f();
    return;
  }
  let l = !0;
  d((i) => i.find((r) => r.id === e.id) ? i.map(
    (r) => r.id === e.id ? { ...r, status: "leaving" } : r
  ) : (l = !1, i)), l && (m(e.id), setTimeout(() => {
    d((i) => i.filter((u) => u.id !== e.id));
  }, n));
}
export {
  t as default
};
