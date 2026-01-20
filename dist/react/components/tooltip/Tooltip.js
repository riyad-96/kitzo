import { jsx as i, Fragment as d, jsxs as T } from "react/jsx-runtime";
import c from "react";
import v from "./helpers/addTooltipStyles.js";
import w from "./helpers/getPositionClass.js";
import O from "./partials/TooltipWrapper.js";
import k from "./helpers/getAnimationProperties.js";
function C(h) {
  const {
    content: r,
    children: t,
    position: y = "top",
    animation: a = !0,
    isHidden: n = !1,
    offset: s = 8,
    smartHover: f = !0,
    hideOnTouch: m = !0,
    isDark: l
  } = h, [D, b] = c.useState(!1);
  if (c.useEffect(() => {
    b(!0), v();
  }, []), !D) return null;
  if (typeof n == "boolean" && n) return /* @__PURE__ */ i(d, { children: t });
  if (r == null)
    return /* @__PURE__ */ i(d, { children: t });
  const o = {
    offset: isNaN(Number(s)) ? 8 : Number(s),
    smartHover: typeof f == "boolean" ? f : !0,
    hideOnTouch: typeof m == "boolean" ? m : !0
  };
  let u = !1, p = !1;
  if (typeof window < "u" && (p = window.matchMedia("(pointer: coarse)").matches || navigator.maxTouchPoints > 0, u = typeof l == "boolean" ? l : window.matchMedia("(prefers-color-scheme: dark)").matches), p && o.hideOnTouch) return t;
  const x = w(y), M = !!a, e = k(
    a === !0 ? {} : a
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
      className: `kitzo-tooltip-root ${u ? "tooltip-theme-dark" : ""} ${o.smartHover ? "smart-hover" : ""} ${M ? "animate-tooltip" : ""}`,
      children: [
        t,
        /* @__PURE__ */ i(
          O,
          {
            content: r,
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
