import { LEAVE_DELAY as n, clearAllTimers as t, clearTimer as u } from "./timers.js";
function m({ toast: a, setToasts: l }) {
  if (a.id == null) {
    l((e) => e.map((i) => ({ ...i, status: "leaving" }))), setTimeout(() => {
      l((e) => e.filter((i) => i.status !== "leaving"));
    }, n), t();
    return;
  }
  u(a.id);
  const r = `toast-id:${a.id}`;
  console.log(r), l(
    (e) => e.map((i) => i.id === r ? { ...i, status: "leaving" } : i)
  ), setTimeout(() => {
    l(
      (e) => e.filter((i) => !(i.id === r && i.status === "leaving"))
    );
  }, n);
}
export {
  m as default
};
