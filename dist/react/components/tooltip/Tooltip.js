import { jsxs as d, jsx as h } from "react/jsx-runtime";
import y from "./helpers/addTooltipStyles.js";
import D from "./helpers/getPositionClass.js";
import b from "./partials/TooltipWrapper.js";
import T from "./helpers/getAnimationProperties.js";
const x = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
function H(n) {
  const {
    content: r,
    children: t,
    position: c = "top",
    // arrowStyle = {},
    animation: i = !0,
    isHidden: s = !1,
    offset: m = 8,
    // arrow = false,
    smartHover: l = !0,
    hideOnTouch: f = !0
  } = n;
  let { isDark: o } = n;
  if (typeof s == "boolean" && s || r == null)
    return t;
  const e = {
    offset: isNaN(Number(m)) ? 8 : Number(m),
    // arrow: typeof arrow === 'boolean' ? arrow : false,
    smartHover: typeof l == "boolean" ? l : !0,
    hideOnTouch: typeof f == "boolean" ? f : !0
  };
  if (window.matchMedia("(pointer: coarse)").matches && e.hideOnTouch) return t;
  const p = D(c), u = !!i, a = T(
    i === !0 ? {} : i
  );
  return o = typeof o == "boolean" ? o : x(), y(), /* @__PURE__ */ d(
    "div",
    {
      style: {
        position: "relative",
        width: "fit-content",
        "--offset": Math.max(0, e.offset),
        "--startDuration": Math.max(
          0,
          a.startDuration
        ),
        "--endDuration": Math.max(0, a.endDuration),
        "--startDelay": Math.max(0, a.startDelay),
        "--endDelay": Math.max(0, a.endDelay)
        // '--arrow-color': arrowStyle?.['--arrow-color'],
        // '--arrow-size': arrowStyle?.['--arrow-size'],
      },
      className: `kitzo-tooltip-root ${o ? "tooltip-theme-dark" : ""} ${e.smartHover ? "smart-hover" : ""} ${u ? "animate-tooltip" : ""}`,
      children: [
        t,
        /* @__PURE__ */ h(
          b,
          {
            content: r,
            positionClass: p,
            finalOptions: e
          }
        )
      ]
    }
  );
}
export {
  H as default
};
