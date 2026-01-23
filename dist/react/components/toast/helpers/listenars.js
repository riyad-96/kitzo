import f from "./addToastStyles.js";
const s = /* @__PURE__ */ new Map(), i = "default";
function u(e, t = i) {
  f(), t = `toaster-id:${t ?? i}`, s.has(t) || s.set(t, /* @__PURE__ */ new Set());
  const n = s.get(t);
  return n && n.add(e), () => {
    n?.delete(e), n?.size === 0 && s.delete(t);
  };
}
function r(e, t) {
  return t = `${t}`, t.startsWith(e) ? t : `${e}${t}`;
}
function a(e) {
  const t = r("toast-id:", e.id), n = r(
    "toaster-id:",
    e.toasterId ?? i
  ), o = s.get(n);
  o && o.forEach((c) => c({ ...e, id: t, toasterId: n }));
}
export {
  i as DEFAULT_TOASTER_ID,
  a as notify,
  u as subscribe
};
