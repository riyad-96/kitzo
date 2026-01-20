import { jsx as a } from "react/jsx-runtime";
import t from "react";
import { subscribe as E } from "./helpers/listenar.js";
import w from "./helpers/manageToasts/manageToasts.js";
import M from "./partials/ToastContainer.js";
import { ToasterContext as O } from "./context/ToasterContext.js";
import { initSwipeToClose as S } from "./helpers/manageToasts/swipeClose.js";
function I(d) {
  const {
    position: h = "top-center",
    richColors: p = !1,
    animateTransformOrigin: g = !0,
    gap: s = 8,
    edgeOffset: i = 16,
    isDark: n,
    pauseOnHover: b = !0,
    swipeToClose: y = !0
  } = d, [k, T] = t.useState(!1);
  t.useEffect(() => {
    T(!0);
  }, []);
  const [u, l] = t.useState([]);
  t.useEffect(() => {
    const e = E((o) => w({ toast: o, setToasts: l })), r = S();
    return () => {
      e(), r();
    };
  }, []);
  const c = t.useRef(null), f = t.useCallback(() => {
    if (!c.current) return;
    const e = c.current.querySelectorAll("[data-toast-container]"), r = {
      "top-left": 0,
      "top-center": 0,
      "top-right": 0,
      "bottom-left": 0,
      "bottom-center": 0,
      "bottom-right": 0
    };
    e.forEach((o) => {
      const m = o.getAttribute("data-toast-position") || "top-center", x = parseFloat(o.style.getPropertyValue("--toast-height")) || 0;
      o.style.setProperty("--toast-offset-y", `${r[m]}px`);
      const C = isNaN(+s) ? 8 : +s;
      r[m] += x + C;
    });
  }, [s]);
  if (t.useLayoutEffect(() => {
    f();
  }, [u, f]), !k) return null;
  const v = typeof n == "boolean" ? n : window.matchMedia("(prefers-color-scheme: dark)").matches;
  return /* @__PURE__ */ a(
    "div",
    {
      ref: c,
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 2147483647,
        pointerEvents: "none",
        display: "grid",
        padding: i != null ? `${Math.max(Math.min(+i, 200), 0)}px` : 16
      },
      className: `kitzo-toaster ${p ? "kitzo-toaster-rich-colors" : ""} ${v ? "kitzo-toaster-dark" : ""}`,
      children: /* @__PURE__ */ a(
        "div",
        {
          style: {
            position: "relative"
          },
          children: /* @__PURE__ */ a(
            O.Provider,
            {
              value: {
                position: h,
                richColors: p,
                isDark: n,
                gap: s,
                edgeOffset: i,
                animateTransformOrigin: g,
                pauseOnHover: b,
                swipeToClose: y,
                setToasts: l,
                updateOffsets: f
              },
              children: u.map((e) => /* @__PURE__ */ a(M, { t: e }, e.id))
            }
          )
        }
      )
    }
  );
}
export {
  I as default
};
