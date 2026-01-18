import { LEAVE_DELAY as u, clearAllTimers as a, clearTimer as n } from "./timers.js";
function s({ toast: l, setToasts: d }) {
  if (l.id == null) {
    d((e) => e.map((i) => ({ ...i, status: "leaving" }))), setTimeout(() => {
      d((e) => e.filter((i) => i.status !== "leaving"));
    }, u), a();
    return;
  }
  n(l.id);
  const r = l.id.includes("toast-id:") ? l.id : `toast-id:${l.id}`;
  d(
    (e) => e.map((i) => i.id === r ? { ...i, status: "leaving" } : i)
  ), setTimeout(() => {
    d(
      (e) => e.filter((i) => !(i.id === r && i.status === "leaving"))
    );
  }, u);
}
export {
  s as default
};
