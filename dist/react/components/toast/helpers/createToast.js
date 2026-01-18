const n = {
  duration: 2800,
  showIcon: !0,
  animateTransformOrigin: void 0,
  swipeToClose: void 0
};
let r = 0;
const d = () => crypto.randomUUID?.() ?? ++r;
let u = 1;
function T({
  type: e,
  action: s,
  content: t,
  isPromise: i,
  options: a
}) {
  const o = typeof a == "object" && a !== null ? a : {};
  return {
    id: `toast-id:${o.id ?? d()}`,
    duration: o.duration ?? n.duration,
    showIcon: o.showIcon ?? n.showIcon,
    animateTransformOrigin: o.animateTransformOrigin ?? n.animateTransformOrigin,
    position: o.position,
    icon: o.icon,
    type: e === "default" ? o.type ?? "default" : e,
    status: "entering",
    zIndex: ++u,
    content: t,
    action: s,
    isPromise: !!i,
    swipeToClose: o.swipeToClose ?? n.swipeToClose
  };
}
function l({ id: e, content: s, options: t }) {
  const i = typeof t == "object" && t !== null ? t : {};
  return {
    ...i,
    id: `toast-id:${e}`,
    content: s,
    action: "update",
    isPromise: !1,
    duration: i.duration ?? n.duration
  };
}
export {
  T as createToast,
  d as genId,
  l as updateToast
};
