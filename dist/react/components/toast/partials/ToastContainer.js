import { jsx as c } from "react/jsx-runtime";
import { useRef as d, useLayoutEffect as b } from "react";
import h from "./Toast.js";
function v({
  t,
  animateTransformOrigin: f,
  containerPosition: l,
  updateOffsets: r
}) {
  const s = d(null);
  b(() => {
    const e = s.current;
    if (!e) return;
    const a = new ResizeObserver(() => {
      const p = e.offsetHeight;
      e.style.setProperty("--toast-height", `${p}px`), r();
    });
    return a.observe(e), () => a.disconnect();
  }, [r]);
  const m = [
    "top-left",
    "top-center",
    "top-right",
    "bottom-left",
    "bottom-center",
    "bottom-right"
  ], i = t.position || l, o = m.includes(i) ? i : "top-center", n = o.includes("bottom"), u = typeof t.animateTransformOrigin == "boolean" ? t.animateTransformOrigin : f;
  return /* @__PURE__ */ c(
    "div",
    {
      ref: s,
      "data-toast-container": !0,
      "data-toast-position": o,
      style: {
        position: "absolute",
        zIndex: t.zIndex,
        left: 0,
        right: 0,
        transition: "transform 180ms",
        display: "flex",
        justifyContent: o.includes("left") ? "flex-start" : o.includes("center") ? "center" : "flex-end",
        top: n ? "auto" : 0,
        bottom: n ? 0 : "auto",
        transform: `translateY(calc(var(--toast-offset-y, 0px) * ${n ? -1 : 1}))`
      },
      children: /* @__PURE__ */ c(
        h,
        {
          t,
          position: o,
          shouldAnimateTransformOrigin: u
        }
      )
    }
  );
}
export {
  v as default
};
