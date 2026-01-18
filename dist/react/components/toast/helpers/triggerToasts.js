import { createToast as a, updateToast as s, genId as c } from "./createToast.js";
import { notify as e } from "./listenar.js";
const i = (r, t) => {
  r != null && e(
    a({
      type: "default",
      action: "add",
      content: r,
      options: t
    })
  );
};
i.dismiss = (r) => {
  e({ action: "dismiss", id: r });
};
i.info = (r, t) => {
  r != null && e(
    a({
      action: "add",
      type: "info",
      content: r,
      options: t
    })
  );
};
i.success = (r, t) => {
  r != null && e(
    a({
      action: "add",
      type: "success",
      content: r,
      options: t
    })
  );
};
i.warning = (r, t) => {
  r != null && e(
    a({
      action: "add",
      type: "warning",
      content: r,
      options: t
    })
  );
};
i.error = (r, t) => {
  r != null && e(
    a({
      action: "add",
      type: "error",
      content: r,
      options: t
    })
  );
};
i.loading = (r, t) => {
  r != null && e(
    a({
      action: "add",
      type: "loading",
      content: r,
      options: { duration: 1 / 0, ...t }
    })
  );
};
i.custom = (r, t) => {
  r != null && e(
    a({
      action: "add",
      type: "custom",
      content: r,
      options: t
    })
  );
};
i.update = (r, t, n) => {
  t != null && e(s({ id: `${r}`, content: t, options: n }));
};
i.promise = (async (r, t, n) => {
  const u = c();
  e(
    a({
      action: "add",
      type: "loading",
      content: t.loading,
      isPromise: !0,
      options: { ...n, id: u, duration: 1 / 0 }
    })
  );
  try {
    const o = await r, d = typeof t.success == "function" ? await t.success(o) : t.success;
    return i.update(u, d, { ...n, type: "success" }), o;
  } catch (o) {
    const d = typeof t.error == "function" ? await t.error(o) : t.error;
    throw i.update(u, d, { ...n, type: "error" }), o;
  }
});
export {
  i as default
};
