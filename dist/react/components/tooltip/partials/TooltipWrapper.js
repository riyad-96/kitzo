import { jsx as e, Fragment as i } from "react/jsx-runtime";
function l({
  content: t,
  positionClass: o,
  finalOptions: r
}) {
  return /* @__PURE__ */ e(
    "div",
    {
      style: {
        position: "absolute",
        whiteSpace: "pre-wrap",
        width: "max-content"
      },
      tabIndex: -1,
      className: `kitzo-tooltip-wrapper ${o}`,
      children: /* @__PURE__ */ e(
        "div",
        {
          className: `kitzo-tooltip-content ${o} ${r.arrow ? "tooltip-arrow" : ""}`,
          children: typeof t == "string" || typeof t == "number" ? /* @__PURE__ */ e("div", { className: "kitzo-tooltip-content-default-style", children: t }) : /* @__PURE__ */ e(i, { children: t })
        }
      )
    }
  );
}
export {
  l as default
};
