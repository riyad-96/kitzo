import { jsx as r } from "react/jsx-runtime";
import { useState as k, useEffect as v, useRef as x, useCallback as C, useLayoutEffect as w } from "react";
import { subscribe as E } from "./helpers/listenar.js";
import O from "./helpers/manageToasts/manageToasts.js";
import z from "./partials/ToastContainer.js";
import { ToasterContext as S } from "./context/ToasterContext.js";
import { initSwipeToClose as $ } from "./helpers/manageToasts/swipeClose.js";
function D(m) {
  const {
    position: d = "top-center",
    richColors: c = !1,
    animateTransformOrigin: h = !0,
    gap: o = 8,
    edgeOffset: a = 16,
    isDark: p = window.matchMedia("(prefers-color-scheme: dark)").matches,
    pauseOnHover: g = !0,
    swipeToClose: b = !0
  } = m, [f, l] = k([]);
  v(() => {
    const t = E((e) => O({ toast: e, setToasts: l })), s = $();
    return () => {
      t(), s();
    };
  }, []);
  const i = x(null), n = C(() => {
    if (!i.current) return;
    const t = i.current.querySelectorAll("[data-toast-container]"), s = {
      "top-left": 0,
      "top-center": 0,
      "top-right": 0,
      "bottom-left": 0,
      "bottom-center": 0,
      "bottom-right": 0
    };
    t.forEach((e) => {
      const u = e.getAttribute("data-toast-position") || "top-center", y = parseFloat(e.style.getPropertyValue("--toast-height")) || 0;
      e.style.setProperty("--toast-offset-y", `${s[u]}px`);
      const T = isNaN(+o) ? 8 : +o;
      s[u] += y + T;
    });
  }, [o]);
  return w(() => {
    n();
  }, [f, n]), /* @__PURE__ */ r(
    "div",
    {
      ref: i,
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 2147483647,
        pointerEvents: "none",
        display: "grid",
        padding: a != null ? `${Math.max(Math.min(+a, 200), 0)}px` : 16
      },
      className: `kitzo-toaster ${c ? "kitzo-toaster-rich-colors" : ""} ${p ? "kitzo-toaster-dark" : ""}`,
      children: /* @__PURE__ */ r(
        "div",
        {
          style: {
            position: "relative"
          },
          children: /* @__PURE__ */ r(
            S.Provider,
            {
              value: {
                position: d,
                richColors: c,
                isDark: p,
                gap: o,
                edgeOffset: a,
                animateTransformOrigin: h,
                pauseOnHover: g,
                swipeToClose: b,
                setToasts: l,
                updateOffsets: n
              },
              children: f.map((t) => /* @__PURE__ */ r(z, { t }, t.id))
            }
          )
        }
      )
    }
  );
}
export {
  D as default
};
