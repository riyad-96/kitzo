import { jsx as a } from "react/jsx-runtime";
import t from "react";
import { subscribe as E } from "./helpers/listenars.js";
import w from "./helpers/manageToasts/manageToasts.js";
import M from "./partials/ToastContainer.js";
import { ToasterContext as O } from "./context/ToasterContext.js";
import { initSwipeToClose as S } from "./helpers/manageToasts/swipeClose.js";
function D(i) {
  const {
    position: h = "top-center",
    richColors: l = !1,
    animateTransformOrigin: g = !0,
    gap: s = 8,
    edgeOffset: n = 16,
    isDark: c,
    pauseOnHover: b = !0,
    swipeToClose: y = !0
  } = i, [k, T] = t.useState(!1);
  t.useEffect(() => {
    T(!0);
  }, []);
  const [p, m] = t.useState([]);
  t.useEffect(() => {
    const e = E(
      (o) => w({ toast: o, setToasts: m }),
      i.toasterId
    ), r = S();
    return () => {
      e(), r();
    };
  }, [i.toasterId]);
  const f = t.useRef(null), u = t.useCallback(() => {
    if (!f.current) return;
    const e = f.current.querySelectorAll("[data-toast-container]"), r = {
      "top-left": 0,
      "top-center": 0,
      "top-right": 0,
      "bottom-left": 0,
      "bottom-center": 0,
      "bottom-right": 0
    };
    e.forEach((o) => {
      const d = o.getAttribute("data-toast-position") || "top-center", x = parseFloat(o.style.getPropertyValue("--toast-height")) || 0;
      o.style.setProperty("--toast-offset-y", `${r[d]}px`);
      const C = isNaN(+s) ? 8 : +s;
      r[d] += x + C;
    });
  }, [s]);
  if (t.useLayoutEffect(() => {
    u();
  }, [p, u]), !k) return null;
  const v = typeof c == "boolean" ? c : window.matchMedia("(prefers-color-scheme: dark)").matches;
  return /* @__PURE__ */ a(
    "div",
    {
      ref: f,
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 2147483647,
        pointerEvents: "none",
        display: "grid",
        padding: n != null ? `${Math.max(Math.min(+n, 200), 0)}px` : 16
      },
      className: `kitzo-toaster ${l ? "kitzo-toaster-rich-colors" : ""} ${v ? "kitzo-toaster-dark" : ""}`,
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
                richColors: l,
                isDark: c,
                gap: s,
                edgeOffset: n,
                animateTransformOrigin: g,
                pauseOnHover: b,
                swipeToClose: y,
                setToasts: m,
                updateOffsets: u
              },
              children: p.map((e) => /* @__PURE__ */ a(M, { t: e }, e.id))
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
