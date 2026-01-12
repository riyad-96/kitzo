const i = {
  duration: 2800,
  showIcon: !0,
  animateTransformOrigin: void 0
};
let r = 0;
const d = () => crypto.randomUUID?.() ?? `kitzo_toast_id_${++r}`;
let s = 1;
function c({
  type: a,
  action: e,
  content: o,
  options: n
}) {
  const t = typeof n == "object" && n !== null ? n : {};
  return {
    id: t.id ?? d(),
    duration: t.duration ?? i.duration,
    showIcon: t.showIcon ?? i.showIcon,
    animateTransformOrigin: t.animateTransformOrigin ?? i.animateTransformOrigin,
    position: t.position,
    icon: t.icon,
    type: a === "default" ? t.type ?? "default" : a,
    status: "entering",
    zIndex: ++s,
    content: o,
    action: e
  };
}
function T({ id: a, content: e, options: o }) {
  const n = typeof o == "object" && o !== null ? o : {};
  return {
    ...n,
    id: a,
    content: e,
    action: "update",
    duration: n.duration ?? i.duration
  };
}
export {
  c as createToast,
  d as genId,
  T as updateToast
};
