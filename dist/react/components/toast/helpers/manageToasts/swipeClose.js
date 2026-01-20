import b from "../triggerToasts.js";
let s = !1, t = null, c = null, w = 0, r = 0, a = !1, l = null;
const L = 2, y = 90, S = 20, g = 100;
function P(e) {
  const o = Math.sign(e) || 1, n = Math.abs(e), h = S * (1 - Math.exp(-n / g));
  return o * h;
}
function E(e) {
  if (!e) return !1;
  const o = e.dataset.swipeable === "true", n = e.dataset.isPromise === "true";
  return o && !n;
}
function i(e = !0) {
  if (!t) return;
  if (document.body.style.userSelect = "auto", e && l != null)
    try {
      t.releasePointerCapture(l);
    } catch {
      console.error("");
    }
  t.style.setProperty("--swipe-x", "0px"), t.classList.remove("is-swiping");
  const o = t;
  if (t = null, c = null, l = null, a = !1, s = !1, r = 0, !o.matches(":hover")) {
    const n = new MouseEvent("mouseleave", {
      bubbles: !0,
      cancelable: !0,
      view: window
    });
    o.dispatchEvent(n);
  }
}
function d(e) {
  const n = e.target.closest(".kitzo-toast");
  n && (t = n, c = n.id, w = e.clientX, r = 0, a = !0, s = !1, l = e.pointerId);
}
function p(e) {
  if (!a || !t) return;
  if (r = e.clientX - w, !s && Math.abs(r) > L) {
    s = !0, t.classList.add("is-swiping");
    try {
      t.setPointerCapture(e.pointerId), document.body.style.userSelect = "none";
    } catch {
      console.error("Failed to capture pointer");
    }
  }
  if (!s) return;
  const n = E(t) ? r : P(r);
  t.style.setProperty("--swipe-x", `${n}px`);
}
function f() {
  if (!a || !t || c == null) {
    i();
    return;
  }
  const e = E(t);
  if (s && e && Math.abs(r) > y) {
    const o = r > 0 ? 1 : -1, n = Math.abs(r) + 220;
    t.style.setProperty("--exit-x", `${o * n}px`), t.dataset.exit = "swipe", b.dismiss(c);
  }
  i();
}
function v() {
  i();
}
function m() {
  a && i();
}
let u = !1;
function M() {
  return u ? () => {
  } : (u = !0, document.addEventListener("pointerdown", d), document.addEventListener("pointermove", p), document.addEventListener("pointerup", f), document.addEventListener("pointercancel", v), window.addEventListener("blur", m), () => {
    i(), u = !1, document.removeEventListener("pointerdown", d), document.removeEventListener("pointermove", p), document.removeEventListener("pointerup", f), document.removeEventListener("pointercancel", v), window.removeEventListener("blur", m);
  });
}
export {
  s as dragStarted,
  M as initSwipeToClose
};
