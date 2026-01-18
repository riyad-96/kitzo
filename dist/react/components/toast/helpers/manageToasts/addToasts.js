import { addTimers as s } from "./timers.js";
function e({ toast: d, setToasts: r }) {
  r((i) => i.find((m) => m.id === d.id) ? i : [d, ...i]), requestAnimationFrame(() => {
    r(
      (i) => i.map((n) => n.id === d.id ? { ...n, status: "visible" } : n)
    );
  }), s(d, r);
}
export {
  e as default
};
