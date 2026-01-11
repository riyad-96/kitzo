import { jsx as i } from "react/jsx-runtime";
import { useState as b, useEffect as k, useRef as v, useCallback as x, useLayoutEffect as E } from "react";
import { subscribe as T } from "./helpers/listenar.js";
import z from "./helpers/manageToasts/manageToasts.js";
import O from "./partials/ToastContainer.js";
function A(p) {
  const {
    position: u = "top-center",
    richColors: l = !0,
    animateTransformOrigin: m = !0,
    gap: o = 8,
    edgeOffset: n = 16,
    isDark: d = window.matchMedia("(prefers-color-scheme: dark)").matches
  } = p, [c, h] = b([]);
  k(() => T((e) => z({ toast: e, setToasts: h })), []);
  const s = v(null), r = x(() => {
    if (!s.current) return;
    const t = s.current.querySelectorAll("[data-toast-container]"), e = {
      "top-left": 0,
      "top-center": 0,
      "top-right": 0,
      "bottom-left": 0,
      "bottom-center": 0,
      "bottom-right": 0
    };
    t.forEach((a) => {
      const f = a.getAttribute("data-toast-position") || "top-center", g = parseFloat(a.style.getPropertyValue("--toast-height")) || 0;
      a.style.setProperty("--toast-offset-y", `${e[f]}px`);
      const y = isNaN(+o) ? +o : 8;
      e[f] += g + y;
    });
  }, [o]);
  return E(() => {
    r();
  }, [c, r]), /* @__PURE__ */ i(
    "div",
    {
      ref: s,
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 2147483647,
        pointerEvents: "none",
        display: "grid",
        padding: n ?? 16
      },
      className: `kitzo-toaster ${l ? "kitzo-toaster-rich-colors" : ""} ${d ? "kitzo-toaster-dark" : ""}`,
      children: /* @__PURE__ */ i(
        "div",
        {
          style: {
            position: "relative"
          },
          children: c.map((t) => /* @__PURE__ */ i(
            O,
            {
              t,
              animateTransformOrigin: m,
              containerPosition: u,
              updateOffsets: r
            },
            t.id
          ))
        }
      )
    }
  );
}
export {
  A as default
};
