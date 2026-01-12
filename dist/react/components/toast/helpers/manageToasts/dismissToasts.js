import { LEAVE_DELAY as a, clearAllTimers as m, clearTimer as u } from "./timers.js";
function n({ toast: l, setToasts: r }) {
  if (!l.id) {
    r((e) => e.map((i) => ({ ...i, status: "leaving" }))), setTimeout(() => {
      r((e) => e.filter((i) => i.status !== "leaving"));
    }, a), m();
    return;
  }
  u(l.id), r(
    (e) => e.map((i) => i.id === l.id ? { ...i, status: "leaving" } : i)
  ), setTimeout(() => {
    r(
      (e) => e.filter((i) => !(i.id === l.id && i.status === "leaving"))
    );
  }, a);
}
export {
  n as default
};
