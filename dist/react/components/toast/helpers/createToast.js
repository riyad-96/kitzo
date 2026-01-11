const i = {
  duration: 2800,
  showIcon: !0,
  animateTransformOrigin: void 0,
  position: "top-center"
};
let e = 0;
const s = () => crypto.randomUUID?.() ?? `kitzo_toast_id_${++e}`;
let d = 1;
function u({
  type: a,
  action: r,
  content: o,
  options: n
}) {
  const t = typeof n == "object" && n !== null ? n : {};
  return {
    id: t.id ?? s(),
    duration: t.duration ?? i.duration,
    showIcon: t.showIcon ?? i.showIcon,
    animateTransformOrigin: t.animateTransformOrigin ?? i.animateTransformOrigin,
    position: t.position ?? i.position,
    icon: t.icon,
    type: a,
    status: "entering",
    zIndex: ++d,
    content: o,
    action: r
  };
}
function p({ id: a, content: r, options: o }) {
  const n = typeof o == "object" && o !== null ? o : {};
  return {
    ...n,
    id: a,
    content: r,
    action: "update",
    duration: n.duration ?? i.duration
  };
}
export {
  u as createToast,
  s as genId,
  p as updateToast
};
