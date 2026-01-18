import f from "../triggerToasts.js";
let e = null, l = null, d = 0, r = 0, o = !1, i = !1, a = null;
const w = 0, m = 90, v = 90, E = 120;
function b(t) {
  const s = Math.sign(t) || 1, n = Math.abs(t), p = v * (1 - Math.exp(-n / E));
  return s * p;
}
function u(t) {
  if (!t) return !1;
  const s = t.dataset.swipeable === "true", n = t.dataset.isPromise === "true";
  return s && !n;
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
  const s = e;
  if (e = null, l = null, a = null, o = !1, i = !1, r = 0, !s.matches(":hover")) {
    const n = new MouseEvent("mouseleave", {
      bubbles: !0,
      cancelable: !0,
      view: window
    });
    s.dispatchEvent(n);
  }
}
document.addEventListener("pointerdown", (t) => {
  const n = t.target.closest(".kitzo-toast");
  if (n) {
    document.body.style.userSelect = "none", e = n, l = n.id, d = t.clientX, r = 0, o = !0, i = !1, a = t.pointerId;
    try {
      n.setPointerCapture(t.pointerId);
    } catch {
      console.error("");
    }
  }
});
document.addEventListener("pointermove", (t) => {
  if (!o || !e || (r = t.clientX - d, !i && Math.abs(r) > w && (i = !0, e.classList.add("is-swiping")), !i)) return;
  const n = u(e) ? r : b(r);
  e.style.setProperty("--swipe-x", `${n}px`);
});
document.addEventListener("pointerup", () => {
  if (!o || !e || l == null) {
    c();
    return;
  }
  const t = u(e);
  if (i && t && Math.abs(r) > m) {
    const s = r > 0 ? 1 : -1, n = window.innerWidth / 2 + 50;
    e.style.setProperty("--exit-x", `${s * n}px`), e.dataset.exit = "swipe", f.dismiss(l);
  }
  c();
});
document.addEventListener("pointercancel", () => {
  c();
});
window.addEventListener("blur", () => {
  o && c();
});
export {
  i as dragStarted
};
