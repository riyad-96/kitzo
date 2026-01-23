import u from "./addToastStyles.js";
const r = /* @__PURE__ */ new Map(), s = "default";
function l(t, e = s) {
  u(), e = `toaster-id:${e ?? s}`, r.has(e) || r.set(e, /* @__PURE__ */ new Set());
  const n = r.get(e);
  return n && n.add(t), () => {
    n?.delete(t), n?.size === 0 && r.delete(e);
  };
}
function o(t, e) {
  if (e != null)
    return e = `${e}`, e.startsWith(t) ? e : `${t}${e}`;
}
function a(t) {
  if (t.id == null) {
    r.forEach((i) => {
      i.forEach((c) => c({ ...t }));
    });
    return;
  }
  const e = o("toast-id:", t.id), n = o(
    "toaster-id:",
    t.toasterId ?? s
  ), f = r.get(n);
  f && f.forEach((i) => i({ ...t, id: e, toasterId: n }));
}
export {
  s as DEFAULT_TOASTER_ID,
  a as notify,
  l as subscribe
};
