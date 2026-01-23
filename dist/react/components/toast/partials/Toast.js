import { jsxs as x, jsx as t, Fragment as s } from "react/jsx-runtime";
import { resumeToast as p, pauseToast as u } from "../helpers/manageToasts/timers.js";
import S from "../helpers/triggerToasts.js";
import { InfoSvg as w, ErrorSvg as I, WarningSvg as E, SuccessSvg as k, LoadingSvg as L } from "./Svgs.js";
import { useToasterContext as M } from "../context/ToasterContext.js";
function P({
  t: d,
  position: n,
  shouldAnimateTransformOrigin: c,
  swipeToClose: m
}) {
  const { pauseOnHover: o } = M(), {
    id: e,
    type: r,
    action: f,
    content: i,
    status: g,
    showIcon: v,
    icon: a,
    toasterId: h,
    updateState: y
  } = d, l = {
    loading: /* @__PURE__ */ t(L, {}),
    success: /* @__PURE__ */ t(k, {}),
    warning: /* @__PURE__ */ t(E, {}),
    error: /* @__PURE__ */ t(I, {}),
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
      "data-toaster-id": h,
      "data-action": f,
      "data-status": g,
      "data-type": r,
      "data-position": n,
      "data-screen-x": n.split("-")[1],
      "data-screen-y": n.split("-")[0],
      "data-exit": "auto",
      "data-swipeable": m,
      "data-animate-transform-origin": c,
      "data-update-state": y,
      onPointerEnter: () => o && u(e),
      onPointerLeave: () => o && p(e),
      onMouseEnter: () => o && u(e),
      onMouseLeave: () => o && p(e),
      className: `kitzo-toast ${c ? `transform-origin-${n}` : ""}`,
      children: [
        v && /* @__PURE__ */ t(s, { children: a ? /* @__PURE__ */ t(s, { children: typeof a == "string" || typeof a == "number" ? /* @__PURE__ */ t(
          "div",
          {
            style: {
              flexShrink: 0
            },
            className: "svg-container",
            children: a
          }
        ) : /* @__PURE__ */ t(s, { children: a }) }) : /* @__PURE__ */ t(s, { children: l[r] && /* @__PURE__ */ t("div", { style: { flexShrink: 0 }, className: "svg-container", children: l[r] }) }) }),
        /* @__PURE__ */ t(
          "div",
          {
            style: {
              flex: 1
            },
            children: typeof i == "function" ? i(() => S.dismiss(e, d.toasterId)) : i
          }
        )
      ]
    }
  );
}
export {
  P as default
};
