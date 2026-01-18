import { jsx as l } from "react/jsx-runtime";
import { useRef as b, useLayoutEffect as g } from "react";
import h from "./Toast.js";
import { useToasterContext as x } from "../context/ToasterContext.js";
function v({ t }) {
  const {
    updateOffsets: s,
    position: f,
    animateTransformOrigin: c,
    swipeToClose: p
  } = x(), i = b(null);
  g(() => {
    const e = i.current;
    if (!e) return;
    const a = new ResizeObserver(() => {
      const T = e.offsetHeight;
      e.style.setProperty("--toast-height", `${T}px`), s();
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
  ], r = t.position || f, o = m.includes(r) ? r : "top-center", n = o?.includes("bottom"), u = typeof t.animateTransformOrigin == "boolean" ? t.animateTransformOrigin : !!c, d = typeof t.swipeToClose == "boolean" ? t.swipeToClose : !!p;
  return /* @__PURE__ */ l(
    "div",
    {
      ref: i,
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
      children: /* @__PURE__ */ l(
        h,
        {
          t,
          position: o,
          shouldAnimateTransformOrigin: u,
          swipeToClose: d
        }
      )
    }
  );
}
export {
  v as default
};
