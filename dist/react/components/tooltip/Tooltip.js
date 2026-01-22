import { jsx as a, Fragment as r, jsxs as T } from "react/jsx-runtime";
import c from "react";
import v from "./helpers/addTooltipStyles.js";
import w from "./helpers/getPositionClass.js";
import O from "./partials/TooltipWrapper.js";
import k from "./helpers/getAnimationProperties.js";
function C(h) {
  const {
    content: n,
    children: t,
    position: y = "top",
    animation: i = !0,
    isHidden: s = !1,
    offset: f = 8,
    smartHover: m = !0,
    hideOnTouch: l = !0,
    isDark: u
  } = h, [D, b] = c.useState(!1);
  if (c.useEffect(() => {
    b(!0), v();
  }, []), !D) return /* @__PURE__ */ a(r, { children: t });
  if (typeof s == "boolean" && s) return /* @__PURE__ */ a(r, { children: t });
  if (n == null)
    return /* @__PURE__ */ a(r, { children: t });
  const o = {
    offset: isNaN(Number(f)) ? 8 : Number(f),
    smartHover: typeof m == "boolean" ? m : !0,
    hideOnTouch: typeof l == "boolean" ? l : !0
  };
  let p = !1, d = !1;
  if (typeof window < "u" && (d = window.matchMedia("(pointer: coarse)").matches || navigator.maxTouchPoints > 0, p = typeof u == "boolean" ? u : window.matchMedia("(prefers-color-scheme: dark)").matches), d && o.hideOnTouch) return t;
  const x = w(y), M = !!i, e = k(
    i === !0 ? {} : i
  );
  return /* @__PURE__ */ T(
    "div",
    {
      style: {
        position: "relative",
        width: "fit-content",
        "--offset": Math.max(0, o.offset),
        "--startDuration": Math.max(
          0,
          e.startDuration
        ),
        "--endDuration": Math.max(0, e.endDuration),
        "--startDelay": Math.max(0, e.startDelay),
        "--endDelay": Math.max(0, e.endDelay)
      },
      className: `kitzo-tooltip-root ${p ? "tooltip-theme-dark" : ""} ${o.smartHover ? "smart-hover" : ""} ${M ? "animate-tooltip" : ""}`,
      children: [
        t,
        /* @__PURE__ */ a(
          O,
          {
            content: n,
            positionClass: x,
            finalOptions: o
          }
        )
      ]
    }
  );
}
export {
  C as default
};
