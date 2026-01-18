import { jsxs as x, jsx as e, Fragment as a } from "react/jsx-runtime";
import { resumeToast as d, pauseToast as m } from "../helpers/manageToasts/timers.js";
import S from "../helpers/triggerToasts.js";
import { InfoSvg as w, ErrorSvg as T, WarningSvg as E, SuccessSvg as k, LoadingSvg as I } from "./Svgs.js";
import { useToasterContext as L } from "../context/ToasterContext.js";
function C({
  t: p,
  position: o,
  shouldAnimateTransformOrigin: u,
  swipeToClose: f
}) {
  const { setToasts: c, pauseOnHover: s } = L(), { id: t, type: r, action: g, content: i, status: v, showIcon: h, icon: n, isPromise: y } = p, l = {
    loading: /* @__PURE__ */ e(I, {}),
    success: /* @__PURE__ */ e(k, {}),
    warning: /* @__PURE__ */ e(E, {}),
    error: /* @__PURE__ */ e(T, {}),
    info: /* @__PURE__ */ e(w, {}),
    default: null,
    custom: null
  };
  return /* @__PURE__ */ x(
    "div",
    {
      id: t,
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
      "data-screen-x": o.split("-")[1],
      "data-screen-y": o.split("-")[0],
      "data-exit": "auto",
      "data-is-promise": y,
      "data-swipeable": f,
      className: `kitzo-toast ${u ? `transform-origin-${o}` : ""}`,
      onPointerEnter: () => s && m(t),
      onPointerLeave: () => s && d(t, c),
      onMouseEnter: () => s && m(t),
      onMouseLeave: () => s && d(t, c),
      children: [
        h && /* @__PURE__ */ e(a, { children: n ? /* @__PURE__ */ e(a, { children: typeof n == "string" || typeof n == "number" ? /* @__PURE__ */ e(
          "div",
          {
            style: {
              flexShrink: 0
            },
            className: "svg-container",
            children: n
          }
        ) : /* @__PURE__ */ e(a, { children: n }) }) : /* @__PURE__ */ e(a, { children: l[r] && /* @__PURE__ */ e("div", { style: { flexShrink: 0 }, className: "svg-container", children: l[r] }) }) }),
        /* @__PURE__ */ e(
          "div",
          {
            style: {
              flex: 1
            },
            children: typeof i == "function" ? i(() => S.dismiss(t)) : i
          }
        )
      ]
    }
  );
}
export {
  C as default
};
