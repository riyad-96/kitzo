import { jsxs as m, jsx as n, Fragment as e } from "react/jsx-runtime";
import p from "../helpers/triggerToasts.js";
import { InfoSvg as u, ErrorSvg as v, WarningSvg as h, SuccessSvg as y, LoadingSvg as x } from "./Svgs.js";
function I({
  t: l,
  position: s,
  shouldAnimateTransformOrigin: a
}) {
  const { id: c, type: i, action: d, content: r, status: f, showIcon: g, icon: t } = l, o = {
    loading: /* @__PURE__ */ n(x, {}),
    success: /* @__PURE__ */ n(y, {}),
    warning: /* @__PURE__ */ n(h, {}),
    error: /* @__PURE__ */ n(v, {}),
    info: /* @__PURE__ */ n(u, {}),
    default: null,
    custom: null
  };
  return /* @__PURE__ */ m(
    "div",
    {
      style: {
        pointerEvents: "all",
        display: "flex",
        alignItems: "center",
        gap: 8
      },
      className: `kitzo-toast type-${i} action-${d} status-${f} pos-y-${s.split("-")[0]} pos-x-${s.split("-")[1]} ${a ? `transform-origin-${s}` : ""}`,
      children: [
        g && /* @__PURE__ */ n(e, { children: t ? /* @__PURE__ */ n(e, { children: typeof t == "string" || typeof t == "number" ? /* @__PURE__ */ n(
          "div",
          {
            style: {
              flexShrink: 0
            },
            className: "svg-container",
            children: t
          }
        ) : /* @__PURE__ */ n(e, { children: t }) }) : /* @__PURE__ */ n(e, { children: o[i] && /* @__PURE__ */ n("div", { style: { flexShrink: 0 }, className: "svg-container", children: o[i] }) }) }),
        /* @__PURE__ */ n(
          "div",
          {
            style: {
              flex: 1
            },
            children: typeof r == "function" ? r(() => p.dismiss(c)) : r
          }
        )
      ]
    }
  );
}
export {
  I as default
};
