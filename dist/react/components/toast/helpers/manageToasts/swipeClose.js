import f from "../triggerToasts.js";
let e = null, l = null, u = 0, r = 0, i = !1, o = !1, a = null;
const w = 2, m = 90, v = 20, E = 100;
function b(t) {
  const n = Math.sign(t) || 1, s = Math.abs(t), p = v * (1 - Math.exp(-s / E));
  return n * p;
}
function d(t) {
  if (!t) return !1;
  const n = t.dataset.swipeable === "true", s = t.dataset.isPromise === "true";
  return n && !s;
}
function c(t = !0) {
  if (!e) return;
  if (document.body.style.userSelect = "auto", t && a != null)
    try {
      e.releasePointerCapture(a);
    } catch {
      console.error("");
    }
  e.style.setProperty("--swipe-x", "0px"), e.classList.remove("is-swiping");
  const n = e;
  if (e = null, l = null, a = null, i = !1, o = !1, r = 0, !n.matches(":hover")) {
    const s = new MouseEvent("mouseleave", {
      bubbles: !0,
      cancelable: !0,
      view: window
    });
    n.dispatchEvent(s);
  }
}
document.addEventListener("pointerdown", (t) => {
  const s = t.target.closest(".kitzo-toast");
  if (s) {
    document.body.style.userSelect = "none", e = s, l = s.id, u = t.clientX, r = 0, i = !0, o = !1, a = t.pointerId;
    try {
      s.setPointerCapture(t.pointerId);
    } catch {
      console.error("");
    }
  }
});
document.addEventListener("pointermove", (t) => {
  if (!i || !e || (r = t.clientX - u, !o && Math.abs(r) > w && (o = !0, e.classList.add("is-swiping")), !o)) return;
  const s = d(e) ? r : b(r);
  e.style.setProperty("--swipe-x", `${s}px`);
});
document.addEventListener("pointerup", () => {
  if (!i || !e || l == null) {
    c();
    return;
  }
  const t = d(e);
  if (o && t && Math.abs(r) > m) {
    const n = r > 0 ? 1 : -1, s = Math.abs(r) + 300;
    e.style.setProperty("--exit-x", `${n * s}px`), e.dataset.exit = "swipe", f.dismiss(l);
  }
  c();
});
document.addEventListener("pointercancel", () => {
  c();
});
window.addEventListener("blur", () => {
  i && c();
});
export {
  o as dragStarted
};
