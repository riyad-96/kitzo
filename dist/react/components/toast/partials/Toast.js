import { jsxs as g, jsx as t, Fragment as s } from "react/jsx-runtime";
import { resumeToast as v, pauseToast as h } from "../helpers/manageToasts/timers.js";
import y from "../helpers/triggerToasts.js";
import { InfoSvg as x, ErrorSvg as S, WarningSvg as $, SuccessSvg as T, LoadingSvg as k } from "./Svgs.js";
import { useToasterContext as E } from "../context/ToasterContext.js";
function C({
  t: n,
  position: o,
  shouldAnimateTransformOrigin: d
}) {
  const { setToasts: m, pauseOnHover: a } = E(), { id: l, type: r, action: f, content: i, status: p, showIcon: u, icon: e } = n, c = {
    loading: /* @__PURE__ */ t(k, {}),
    success: /* @__PURE__ */ t(T, {}),
    warning: /* @__PURE__ */ t($, {}),
    error: /* @__PURE__ */ t(S, {}),
    info: /* @__PURE__ */ t(x, {}),
    default: null,
    custom: null
  };
  return /* @__PURE__ */ g(
    "div",
    {
      id: `toast-id-${l}`,
      style: {
        pointerEvents: "all",
        display: "flex",
        alignItems: "center",
        gap: 8
      },
      onMouseEnter: () => a && h(n.id),
      onMouseLeave: () => a && v(n.id, m),
      className: `kitzo-toast type-${r} action-${f} status-${p} pos-y-${o.split("-")[0]} pos-x-${o.split("-")[1]} ${d ? `transform-origin-${o}` : ""}`,
      children: [
        u && /* @__PURE__ */ t(s, { children: e ? /* @__PURE__ */ t(s, { children: typeof e == "string" || typeof e == "number" ? /* @__PURE__ */ t(
          "div",
          {
            style: {
              flexShrink: 0
            },
            className: "svg-container",
            children: e
          }
        ) : /* @__PURE__ */ t(s, { children: e }) }) : /* @__PURE__ */ t(s, { children: c[r] && /* @__PURE__ */ t("div", { style: { flexShrink: 0 }, className: "svg-container", children: c[r] }) }) }),
        /* @__PURE__ */ t(
          "div",
          {
            style: {
              flex: 1
            },
            children: typeof i == "function" ? i(() => y.dismiss(l)) : i
          }
        )
      ]
    }
  );
}
export {
  C as default
};
