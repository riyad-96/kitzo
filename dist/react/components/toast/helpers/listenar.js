import n from "./addToastStyles.js";
const e = /* @__PURE__ */ new Set();
function s(t) {
  return n(), e.add(t), () => {
    e.delete(t);
  };
}
function i(t) {
  e.forEach((o) => o(t));
}
export {
  i as notify,
  s as subscribe
};
