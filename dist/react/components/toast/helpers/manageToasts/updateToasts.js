import { clearTimer as u, addTimers as t } from "./timers.js";
function r({ toast: d, setToasts: a }) {
  a((e) => e.find((i) => i.id === d.id) ? (u(d.id), t(d), e.map(
    (i) => i.id === d.id ? {
      ...i,
      ...d,
      status: "visible",
      updateState: i.updateState?.includes("again") ? "updated" : "updated-again"
    } : i
  )) : e);
}
export {
  r as default
};
