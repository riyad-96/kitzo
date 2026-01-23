import { addTimers as e } from "./timers.js";
function u({ toast: d, setToasts: n }) {
  n((i) => i.find((r) => r.id === d.id) ? i : [d, ...i]), requestAnimationFrame(() => {
    n(
      (i) => i.map((s) => s.id === d.id ? { ...s, status: "visible" } : s)
    );
  }), e(d);
}
export {
  u as default
};
