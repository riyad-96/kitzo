import { jsx as s } from "react/jsx-runtime";
/* empty css          */
import { useState as v, useEffect as x, useRef as T, useCallback as C, useLayoutEffect as E } from "react";
import { subscribe as O } from "./helpers/listenar.js";
import z from "./helpers/manageToasts/manageToasts.js";
import $ from "./partials/ToastContainer.js";
import { ToasterContext as w } from "./context/ToasterContext.js";
function q(m) {
  const {
    position: d = "top-center",
    richColors: f = !1,
    animateTransformOrigin: h = !0,
    gap: e = 8,
    edgeOffset: r = 16,
    isDark: p = window.matchMedia("(prefers-color-scheme: dark)").matches,
    pauseOnHover: g = !0,
    swipeToClose: y = !0
  } = m, [a, l] = v([]);
  x(() => O((o) => z({ toast: o, setToasts: l })), []);
  const i = T(null), n = C(() => {
    if (!i.current) return;
    const t = i.current.querySelectorAll("[data-toast-container]"), o = {
      "top-left": 0,
      "top-center": 0,
      "top-right": 0,
      "bottom-left": 0,
      "bottom-center": 0,
      "bottom-right": 0
    };
    t.forEach((c) => {
      const u = c.getAttribute("data-toast-position") || "top-center", b = parseFloat(c.style.getPropertyValue("--toast-height")) || 0;
      c.style.setProperty("--toast-offset-y", `${o[u]}px`);
      const k = isNaN(+e) ? 8 : +e;
      o[u] += b + k;
    });
  }, [e]);
  return E(() => {
    n(), console.log(a);
  }, [a, n]), /* @__PURE__ */ s(
    "div",
    {
      ref: i,
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 2147483647,
        pointerEvents: "none",
        display: "grid",
        padding: r != null ? `${Math.max(Math.min(+r, 200), 0)}px` : 16
      },
      className: `kitzo-toaster ${f ? "kitzo-toaster-rich-colors" : ""} ${p ? "kitzo-toaster-dark" : ""}`,
      children: /* @__PURE__ */ s(
        "div",
        {
          style: {
            position: "relative"
          },
          children: /* @__PURE__ */ s(
            w.Provider,
            {
              value: {
                position: d,
                richColors: f,
                isDark: p,
                gap: e,
                edgeOffset: r,
                animateTransformOrigin: h,
                pauseOnHover: g,
                swipeToClose: y,
                setToasts: l,
                updateOffsets: n
              },
              children: a.map((t) => /* @__PURE__ */ s($, { t }, t.id))
            }
          )
        }
      )
    }
  );
}
export {
  q as default
};
