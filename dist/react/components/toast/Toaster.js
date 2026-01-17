import { jsx as s } from "react/jsx-runtime";
import { useState as k, useEffect as v, useRef as x, useCallback as T, useLayoutEffect as E } from "react";
import { subscribe as O } from "./helpers/listenar.js";
import z from "./helpers/manageToasts/manageToasts.js";
import C from "./partials/ToastContainer.js";
import { ToasterContext as $ } from "./context/ToasterContext.js";
function S(m) {
  const {
    position: d = "top-center",
    richColors: c = !1,
    animateTransformOrigin: h = !0,
    gap: e = 8,
    edgeOffset: r = 16,
    isDark: f = window.matchMedia("(prefers-color-scheme: dark)").matches,
    pauseOnHover: g = !0
  } = m, [p, l] = k([]);
  v(() => O((o) => z({ toast: o, setToasts: l })), []);
  const a = x(null), i = T(() => {
    if (!a.current) return;
    const t = a.current.querySelectorAll("[data-toast-container]"), o = {
      "top-left": 0,
      "top-center": 0,
      "top-right": 0,
      "bottom-left": 0,
      "bottom-center": 0,
      "bottom-right": 0
    };
    t.forEach((n) => {
      const u = n.getAttribute("data-toast-position") || "top-center", y = parseFloat(n.style.getPropertyValue("--toast-height")) || 0;
      n.style.setProperty("--toast-offset-y", `${o[u]}px`);
      const b = isNaN(+e) ? 8 : +e;
      o[u] += y + b;
    });
  }, [e]);
  return E(() => {
    i();
  }, [p, i]), /* @__PURE__ */ s(
    "div",
    {
      ref: a,
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 2147483647,
        pointerEvents: "none",
        display: "grid",
        padding: r != null ? `${Math.max(Math.min(+r, 200), 0)}px` : 16
      },
      className: `kitzo-toaster ${c ? "kitzo-toaster-rich-colors" : ""} ${f ? "kitzo-toaster-dark" : ""}`,
      children: /* @__PURE__ */ s(
        "div",
        {
          style: {
            position: "relative"
          },
          children: /* @__PURE__ */ s(
            $.Provider,
            {
              value: {
                position: d,
                richColors: c,
                isDark: f,
                gap: e,
                edgeOffset: r,
                animateTransformOrigin: h,
                pauseOnHover: g,
                setToasts: l,
                updateOffsets: i
              },
              children: p.map((t) => /* @__PURE__ */ s(C, { t }, t.id))
            }
          )
        }
      )
    }
  );
}
export {
  S as default
};
