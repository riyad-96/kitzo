import { clearTimer as n, addTimers as u } from "./timers.js";
function s({ toast: i, setToasts: r }) {
  r((e) => e.find((d) => d.id === i.id) ? (n(i.id), u(i, r), e.map(
    (d) => d.id === i.id ? { ...d, ...i, status: "visible" } : d
  )) : e);
}
export {
  s as default
};
