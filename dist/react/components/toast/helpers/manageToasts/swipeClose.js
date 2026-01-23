import b from "../triggerToasts.js";
let s = !1, e = null, c = null, m = 0, r = 0, a = !1, l = null;
const L = 2, y = 90, S = 20, g = 100;
function x(t) {
  const o = Math.sign(t) || 1, n = Math.abs(t), h = S * (1 - Math.exp(-n / g));
  return o * h;
}
function E(t) {
  return t ? t.dataset.swipeable === "true" : !1;
}
function i(t = !0) {
  if (!e) return;
  if (document.body.style.userSelect = "auto", t && l != null)
    try {
      e.releasePointerCapture(l);
    } catch {
      console.error("");
    }
  e.style.setProperty("--swipe-x", "0px"), e.classList.remove("is-swiping");
  const o = e;
  if (e = null, c = null, l = null, a = !1, s = !1, r = 0, !o.matches(":hover")) {
    const n = new MouseEvent("mouseleave", {
      bubbles: !0,
      cancelable: !0,
      view: window
    });
    o.dispatchEvent(n);
  }
}
function d(t) {
  const n = t.target.closest(".kitzo-toast");
  n && (e = n, c = n.id, m = t.clientX, r = 0, a = !0, s = !1, l = t.pointerId);
}
function p(t) {
  if (!a || !e) return;
  if (r = t.clientX - m, !s && Math.abs(r) > L) {
    s = !0, e.classList.add("is-swiping");
    try {
      e.setPointerCapture(t.pointerId), document.body.style.userSelect = "none";
    } catch {
      console.error("Failed to capture pointer");
    }
  }
  if (!s) return;
  const n = E(e) ? r : x(r);
  e.style.setProperty("--swipe-x", `${n}px`);
}
function f() {
  if (!a || !e || c == null) {
    i();
    return;
  }
  const t = E(e);
  if (s && t && Math.abs(r) > y) {
    const o = r > 0 ? 1 : -1, n = Math.abs(r) + 220;
    e.style.setProperty("--exit-x", `${o * n}px`), e.dataset.exit = "swipe", b.dismiss(c, e.dataset.toasterId);
  }
  i();
}
function v() {
  i();
}
function w() {
  a && i();
}
let u = !1;
function P() {
  return u ? () => {
  } : (u = !0, document.addEventListener("pointerdown", d), document.addEventListener("pointermove", p), document.addEventListener("pointerup", f), document.addEventListener("pointercancel", v), window.addEventListener("blur", w), () => {
    i(), u = !1, document.removeEventListener("pointerdown", d), document.removeEventListener("pointermove", p), document.removeEventListener("pointerup", f), document.removeEventListener("pointercancel", v), window.removeEventListener("blur", w);
  });
}
export {
  s as dragStarted,
  P as initSwipeToClose
};
