import { createToast as n, updateToast as s, genId as c } from "./createToast.js";
import { notify as i } from "./listenars.js";
const e = (r, t) => {
  r != null && i(
    n({
      type: "default",
      action: "add",
      content: r,
      options: t
    })
  );
};
e.dismiss = (r, t) => {
  i({
    action: "dismiss",
    id: r,
    toasterId: t
  });
};
e.info = (r, t) => {
  r != null && i(
    n({
      action: "add",
      type: "info",
      content: r,
      options: t
    })
  );
};
e.success = (r, t) => {
  r != null && i(
    n({
      action: "add",
      type: "success",
      content: r,
      options: t
    })
  );
};
e.warning = (r, t) => {
  r != null && i(
    n({
      action: "add",
      type: "warning",
      content: r,
      options: t
    })
  );
};
e.error = (r, t) => {
  r != null && i(
    n({
      action: "add",
      type: "error",
      content: r,
      options: t
    })
  );
};
e.loading = (r, t) => {
  r != null && i(
    n({
      action: "add",
      type: "loading",
      content: r,
      options: { duration: 1 / 0, ...t }
    })
  );
};
e.custom = (r, t) => {
  r != null && i(
    n({
      action: "add",
      type: "custom",
      content: r,
      options: t
    })
  );
};
e.update = (r, t, a) => {
  r != null && t != null && i(s({ id: `${r}`, content: t, options: a }));
};
e.promise = (async (r, t, a) => {
  const u = c();
  i(
    n({
      action: "add",
      type: "loading",
      content: t.loading,
      options: { ...a, id: u, duration: 1 / 0, swipeToClose: !1 }
    })
  );
  try {
    const o = await r, d = typeof t.success == "function" ? await t.success(o) : t.success;
    return e.update(u, d, { ...a, type: "success" }), o;
  } catch (o) {
    const d = typeof t.error == "function" ? await t.error(o) : t.error;
    throw e.update(u, d, { ...a, type: "error" }), o;
  }
});
export {
  e as default
};
