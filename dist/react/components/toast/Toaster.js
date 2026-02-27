import { jsx as n } from "react/jsx-runtime";
import t from "react";
import { subscribe as w } from "./helpers/listenars.js";
import M from "./helpers/manageToasts/manageToasts.js";
import O from "./partials/ToastContainer.js";
import { ToasterContext as S } from "./context/ToasterContext.js";
import { initSwipeToClose as z } from "./helpers/manageToasts/swipeClose.js";
function q(s) {
  const {
    position: h = "top-center",
    richColors: u = !1,
    animateTransformOrigin: g = !0,
    gap: r = s?.compact ? 8 : 12,
    edgeOffset: i = 16,
    dark: c,
    pauseOnHover: b = !0,
    swipeToClose: y = !0,
    compact: k = !1
  } = s, [T, v] = t.useState(!1);
  t.useEffect(() => {
    v(!0);
  }, []);
  const [p, m] = t.useState([]);
  t.useEffect(() => {
    const e = w(
      (o) => M({ toast: o, setToasts: m }),
      s.toasterId
    ), a = z();
    return () => {
      e(), a();
    };
  }, [s.toasterId]);
  const f = t.useRef(null), l = t.useCallback(() => {
    if (!f.current) return;
    const e = f.current.querySelectorAll("[data-toast-container]"), a = {
      "top-left": 0,
      "top-center": 0,
      "top-right": 0,
      "bottom-left": 0,
      "bottom-center": 0,
      "bottom-right": 0
    };
    e.forEach((o) => {
      const d = o.getAttribute("data-toast-position") || "top-center", C = parseFloat(o.style.getPropertyValue("--toast-height")) || 0;
      o.style.setProperty("--toast-offset-y", `${a[d]}px`);
      const E = isNaN(+r) ? 8 : +r;
      a[d] += C + E;
    });
  }, [r]);
  if (t.useLayoutEffect(() => {
    l();
  }, [p, l]), !T) return null;
  const x = typeof c == "boolean" ? c : window.matchMedia("(prefers-color-scheme: dark)").matches;
  return /* @__PURE__ */ n(
    "div",
    {
      ref: f,
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 2147483647,
        pointerEvents: "none",
        display: "grid",
        padding: i != null ? `${Math.max(Math.min(+i, 200), 0)}px` : 16
      },
      className: `kitzo-toaster ${u ? "kitzo-toaster-rich-colors" : ""} ${x ? "kitzo-toaster-dark" : ""}`,
      children: /* @__PURE__ */ n(
        "div",
        {
          style: {
            position: "relative"
          },
          children: /* @__PURE__ */ n(
            S.Provider,
            {
              value: {
                position: h,
                gap: r,
                edgeOffset: i,
                setToasts: m,
                updateOffsets: l,
                dark: c,
                compact: k,
                richColors: u,
                swipeToClose: y,
                pauseOnHover: b,
                animateTransformOrigin: g
              },
              children: p.map((e) => /* @__PURE__ */ n(O, { t: e }, e.id))
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
