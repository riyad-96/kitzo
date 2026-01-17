import { jsx as f } from "react/jsx-runtime";
import { useRef as d, useLayoutEffect as b } from "react";
import g from "./Toast.js";
import { useToasterContext as h } from "../context/ToasterContext.js";
function v({ t }) {
  const {
    updateOffsets: s,
    position: c,
    animateTransformOrigin: l
  } = h(), r = d(null);
  b(() => {
    const e = r.current;
    if (!e) return;
    const a = new ResizeObserver(() => {
      const p = e.offsetHeight;
      e.style.setProperty("--toast-height", `${p}px`), s();
    });
    return a.observe(e), () => a.disconnect();
  }, [s]);
  const m = [
    "top-left",
    "top-center",
    "top-right",
    "bottom-left",
    "bottom-center",
    "bottom-right"
  ], i = t.position || c, o = m.includes(i) ? i : "top-center", n = o?.includes("bottom"), u = typeof t.animateTransformOrigin == "boolean" ? t.animateTransformOrigin : l;
  return /* @__PURE__ */ f(
    "div",
    {
      ref: r,
      "data-toast-container": !0,
      "data-toast-position": o,
      style: {
        position: "absolute",
        zIndex: t.zIndex,
        left: 0,
        right: 0,
        transition: "transform 180ms",
        display: "flex",
        justifyContent: o?.includes("left") ? "flex-start" : o?.includes("center") ? "center" : "flex-end",
        top: n ? "auto" : 0,
        bottom: n ? 0 : "auto",
        transform: `translateY(calc(var(--toast-offset-y, 0px) * ${n ? -1 : 1}))`
      },
      children: /* @__PURE__ */ f(
        g,
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
