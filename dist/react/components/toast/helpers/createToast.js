const a = {
  duration: 2800,
  showIcon: !0,
  animateTransformOrigin: void 0
};
let e = 0;
const s = () => crypto.randomUUID?.() ?? `kitzo_toast_id_${++e}`;
let d = 1;
function c({
  type: i,
  action: r,
  content: o,
  options: n
}) {
  const t = typeof n == "object" && n !== null ? n : {};
  return {
    id: t.id ?? s(),
    duration: t.duration ?? a.duration,
    showIcon: t.showIcon ?? a.showIcon,
    animateTransformOrigin: t.animateTransformOrigin ?? a.animateTransformOrigin,
    position: t.position,
    icon: t.icon,
    type: i,
    status: "entering",
    zIndex: ++d,
    content: o,
    action: r
  };
}
function T({ id: i, content: r, options: o }) {
  const n = typeof o == "object" && o !== null ? o : {};
  return {
    ...n,
    id: i,
    content: r,
    action: "update",
    duration: n.duration ?? a.duration
  };
}
export {
  c as createToast,
  s as genId,
  T as updateToast
};
