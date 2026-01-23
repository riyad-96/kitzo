import { LEAVE_DELAY as r, clearAllTimers as s, clearTimer as u } from "./timers.js";
function a({ toast: l, setToasts: n }) {
  if (l.action === "dismiss" && l.id == null) {
    n((i) => i.map((e) => ({ ...e, status: "leaving" }))), setTimeout(() => {
      n((i) => i.filter((e) => e.status !== "leaving"));
    }, r), s();
    return;
  }
  n((i) => (i.find((d) => d.id === l.id) && u(l.id), i.map(
    (d) => d.id === l.id ? { ...d, status: "leaving" } : d
  ))), setTimeout(() => {
    n(
      (i) => i.filter((e) => !(e.id === l.id && e.status === "leaving"))
    );
  }, r);
}
export {
  a as default
};
