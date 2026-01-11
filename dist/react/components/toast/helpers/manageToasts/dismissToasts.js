import { LEAVE_DELAY as d, clearAllTimers as l, clearTimer as u } from "./timers.js";
function f({ toast: r, setToasts: m }) {
  if (!r.id) {
    m((e) => e.map((i) => ({ ...i, status: "leaving" }))), setTimeout(() => {
      m([]);
    }, d), l();
    return;
  }
  u(r.id), m(
    (e) => e.map((i) => i.id === r.id ? { ...i, status: "leaving" } : i)
  ), setTimeout(() => {
    m((e) => e.filter((i) => i.id !== r.id));
  }, d);
}
export {
  f as default
};
