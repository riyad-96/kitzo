import { jsxs as S, jsx as t, Fragment as o } from "react/jsx-runtime";
import { resumeToast as l, pauseToast as m } from "../helpers/manageToasts/timers.js";
import I from "../helpers/triggerToasts.js";
import { InfoSvg as E, ErrorSvg as T, WarningSvg as k, SuccessSvg as w, LoadingSvg as L } from "./Svgs.js";
import { useToasterContext as M } from "../context/ToasterContext.js";
function z({
  t: c,
  position: s,
  shouldAnimateTransformOrigin: p,
  swipeToClose: u
}) {
  const { pauseOnHover: n, compact: f } = M(), {
    id: e,
    type: r,
    action: g,
    content: i,
    status: v,
    showIcon: h,
    icon: a,
    toasterId: y,
    updateState: x
  } = c, d = {
    loading: /* @__PURE__ */ t(L, {}),
    success: /* @__PURE__ */ t(w, {}),
    warning: /* @__PURE__ */ t(k, {}),
    error: /* @__PURE__ */ t(T, {}),
    info: /* @__PURE__ */ t(E, {}),
    default: null,
    custom: null
  };
  return /* @__PURE__ */ S(
    "div",
    {
      id: e,
      style: {
        pointerEvents: "all",
        display: "flex",
        alignItems: "center",
        gap: 8
      },
      "data-toaster-id": y,
      "data-action": g,
      "data-status": v,
      "data-type": r,
      "data-position": s,
      "data-screen-x": s.split("-")[1],
      "data-screen-y": s.split("-")[0],
      "data-exit": "auto",
      "data-swipeable": u,
      "data-animate-transform-origin": p,
      "data-compact": f,
      "data-update-state": x,
      onPointerEnter: () => n && m(e),
      onPointerLeave: () => n && l(e),
      onMouseEnter: () => n && m(e),
      onMouseLeave: () => n && l(e),
      className: "kitzo-toast",
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
            children: typeof i == "function" ? i(() => I.dismiss(e, c.toasterId)) : i
          }
        )
      ]
    }
  );
}
export {
  z as default
};
