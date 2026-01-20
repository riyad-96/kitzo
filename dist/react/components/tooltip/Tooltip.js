import { jsx as i, Fragment as u, jsxs as b } from "react/jsx-runtime";
import x from "./helpers/addTooltipStyles.js";
import T from "./helpers/getPositionClass.js";
import v from "./partials/TooltipWrapper.js";
import w from "./helpers/getAnimationProperties.js";
function H(c) {
  const {
    content: r,
    children: t,
    position: h = "top",
    animation: a = !0,
    isHidden: n = !1,
    offset: s = 8,
    smartHover: m = !0,
    hideOnTouch: l = !0,
    isDark: f
  } = c;
  if (typeof n == "boolean" && n) return /* @__PURE__ */ i(u, { children: t });
  if (r == null)
    return /* @__PURE__ */ i(u, { children: t });
  const o = {
    offset: isNaN(Number(s)) ? 8 : Number(s),
    smartHover: typeof m == "boolean" ? m : !0,
    hideOnTouch: typeof l == "boolean" ? l : !0
  };
  let p = !1, d = !1;
  if (typeof window < "u" && (d = window.matchMedia("(pointer: coarse)").matches || navigator.maxTouchPoints > 0, p = typeof f == "boolean" ? f : window.matchMedia("(prefers-color-scheme: dark)").matches), d && o.hideOnTouch) return t;
  const y = T(h), D = !!a, e = w(
    a === !0 ? {} : a
  );
  return x(), /* @__PURE__ */ b(
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
      className: `kitzo-tooltip-root ${p ? "tooltip-theme-dark" : ""} ${o.smartHover ? "smart-hover" : ""} ${D ? "animate-tooltip" : ""}`,
      children: [
        t,
        /* @__PURE__ */ i(
          v,
          {
            content: r,
            positionClass: y,
            finalOptions: o
          }
        )
      ]
    }
  );
}
export {
  H as default
};
