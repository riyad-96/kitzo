import m from "./dismissToasts.js";
import a from "./addToasts.js";
import f from "./updateToasts.js";
function p({ toast: i, setToasts: d }) {
  i.action === "dismiss" && m({ toast: i, setToasts: d }), i.action === "add" && a({ toast: i, setToasts: d }), i.action === "update" && f({ toast: i, setToasts: d });
}
export {
  p as default
};
