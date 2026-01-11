import { addTimers as f } from "./timers.js";
function m({ toast: r, setToasts: e }) {
  let n = !1;
  e((i) => (n = !!i.find((d) => d.id === r.id), n ? i : [r, ...i])), !n && (requestAnimationFrame(() => {
    e(
      (i) => i.map((d) => d.id === r.id ? { ...d, status: "visible" } : d)
    );
  }), f(r, e));
}
export {
  m as default
};
