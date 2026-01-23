import { LEAVE_DELAY as u, clearAllTimers as a, clearTimer as m } from "./timers.js";
function n({ toast: l, setToasts: r }) {
  if (l.id == null) {
    r((e) => e.map((i) => ({ ...i, status: "leaving" }))), setTimeout(() => {
      r((e) => e.filter((i) => i.status !== "leaving"));
    }, u), a();
    return;
  }
  m(l.id), r(
    (e) => e.map((i) => i.id === l.id ? { ...i, status: "leaving" } : i)
  ), setTimeout(() => {
    r(
      (e) => e.filter((i) => !(i.id === l.id && i.status === "leaving"))
    );
  }, u);
}
export {
  n as default
};
