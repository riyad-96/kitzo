import { jsxs as t, jsx as r } from "react/jsx-runtime";
function i({ size: n = 16, className: o = "" }) {
  return /* @__PURE__ */ t(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: n,
      height: n,
      className: o,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ r("circle", { cx: "12", cy: "12", r: "10" }),
        /* @__PURE__ */ r("path", { d: "m9 12 2 2 4-4" })
      ]
    }
  );
}
function c({ size: n = 16, className: o = "" }) {
  return /* @__PURE__ */ t(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: n,
      height: n,
      className: o,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ r("path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" }),
        /* @__PURE__ */ r("path", { d: "M12 9v4" }),
        /* @__PURE__ */ r("path", { d: "M12 17h.01" })
      ]
    }
  );
}
function s({ size: n = 16, className: o = "" }) {
  return /* @__PURE__ */ t(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: n,
      height: n,
      className: o,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ r("circle", { cx: "12", cy: "12", r: "10" }),
        /* @__PURE__ */ r("path", { d: "m15 9-6 6" }),
        /* @__PURE__ */ r("path", { d: "m9 9 6 6" })
      ]
    }
  );
}
function h({ size: n = 16, className: o = "" }) {
  return /* @__PURE__ */ t(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: n,
      height: n,
      className: o,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ r("circle", { cx: "12", cy: "12", r: "10" }),
        /* @__PURE__ */ r("line", { x1: "12", x2: "12", y1: "8", y2: "12" }),
        /* @__PURE__ */ r("line", { x1: "12", x2: "12.01", y1: "16", y2: "16" })
      ]
    }
  );
}
function d() {
  return /* @__PURE__ */ r("div", { className: "loading-svg-container", children: /* @__PURE__ */ r("div", { className: "loader" }) });
}
export {
  s as ErrorSvg,
  h as InfoSvg,
  d as LoadingSvg,
  i as SuccessSvg,
  c as WarningSvg
};
