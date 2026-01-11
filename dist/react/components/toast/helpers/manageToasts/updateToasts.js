import { addTimers as u } from "./timers.js";
function t({ toast: e, setToasts: d }) {
  let r = !0;
  d((s) => s.find((i) => i.id === e.id) ? s.map(
    (i) => i.id === e.id ? { ...i, ...e, status: "visible" } : i
  ) : (r = !1, s)), r && u(e, d);
}
export {
  t as default
};
