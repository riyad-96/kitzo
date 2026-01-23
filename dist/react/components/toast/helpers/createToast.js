import { DEFAULT_TOASTER_ID as r } from "./listenars.js";
const e = {
  duration: 2800,
  showIcon: !0,
  animateTransformOrigin: void 0,
  swipeToClose: void 0
};
let s = 0;
const d = () => crypto.randomUUID?.() ?? ++s;
let u = 1;
function p({
  type: a,
  action: i,
  content: n,
  options: o
}) {
  const t = typeof o == "object" && o !== null ? o : {};
  return {
    id: `${t.id ?? d()}`,
    toasterId: `${t.toasterId ?? r}`,
    duration: t.duration ?? e.duration,
    showIcon: t.showIcon ?? e.showIcon,
    animateTransformOrigin: t.animateTransformOrigin ?? e.animateTransformOrigin,
    position: t.position,
    icon: t.icon,
    type: a === "default" ? t.type ?? "default" : a,
    status: "entering",
    zIndex: ++u,
    content: n,
    action: i,
    swipeToClose: t.swipeToClose ?? e.swipeToClose,
    updateState: "initial"
  };
}
function l({ id: a, content: i, options: n }) {
  const o = typeof n == "object" && n !== null ? n : {};
  return {
    ...o,
    id: a,
    content: i,
    action: "update",
    duration: o.duration ?? e.duration,
    toasterId: `${o.toasterId ?? r}`
  };
}
export {
  p as createToast,
  d as genId,
  l as updateToast
};
