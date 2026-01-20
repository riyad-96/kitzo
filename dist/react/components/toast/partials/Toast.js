import { jsxs as x, jsx as t, Fragment as o } from "react/jsx-runtime";
import { resumeToast as m, pauseToast as p } from "../helpers/manageToasts/timers.js";
import S from "../helpers/triggerToasts.js";
import { InfoSvg as w, ErrorSvg as E, WarningSvg as T, SuccessSvg as k, LoadingSvg as I } from "./Svgs.js";
import { useToasterContext as L } from "../context/ToasterContext.js";
function C({
  t: f,
  position: n,
  shouldAnimateTransformOrigin: c,
  swipeToClose: u
}) {
  const { setToasts: l, pauseOnHover: s } = L(), { id: e, type: r, action: g, content: i, status: v, showIcon: h, icon: a, isPromise: y } = f, d = {
    loading: /* @__PURE__ */ t(I, {}),
    success: /* @__PURE__ */ t(k, {}),
    warning: /* @__PURE__ */ t(T, {}),
    error: /* @__PURE__ */ t(E, {}),
    info: /* @__PURE__ */ t(w, {}),
    default: null,
    custom: null
  };
  return /* @__PURE__ */ x(
    "div",
    {
      id: e,
      style: {
        pointerEvents: "all",
        display: "flex",
        alignItems: "center",
        gap: 8,
        whiteSpace: "pre-wrap"
      },
      "data-action": g,
      "data-status": v,
      "data-type": r,
      "data-position": n,
      "data-screen-x": n.split("-")[1],
      "data-screen-y": n.split("-")[0],
      "data-exit": "auto",
      "data-is-promise": y,
      "data-swipeable": u,
      "data-animate-transform-origin": c,
      className: `kitzo-toast ${c ? `transform-origin-${n}` : ""}`,
      onPointerEnter: () => s && p(e),
      onPointerLeave: () => s && m(e, l),
      onMouseEnter: () => s && p(e),
      onMouseLeave: () => s && m(e, l),
      children: [
        h && /* @__PURE__ */ t(o, { children: a ? /* @__PURE__ */ t(o, { children: typeof a == "string" || typeof a == "number" ? /* @__PURE__ */ t(
          "div",
          {
            style: {
              flexShrink: 0
            },
            className: "svg-container",
            children: a
          }
        ) : /* @__PURE__ */ t(o, { children: a }) }) : /* @__PURE__ */ t(o, { children: d[r] && /* @__PURE__ */ t("div", { style: { flexShrink: 0 }, className: "svg-container", children: d[r] }) }) }),
        /* @__PURE__ */ t(
          "div",
          {
            style: {
              flex: 1
            },
            children: typeof i == "function" ? i(() => S.dismiss(e)) : i
          }
        )
      ]
    }
  );
}
export {
  C as default
};
