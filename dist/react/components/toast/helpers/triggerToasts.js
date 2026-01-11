import { createToast as n, updateToast as c, genId as s } from "./createToast.js";
import { notify as a } from "./listenar.js";
const i = (r, t) => {
  r != null && a(
    n({
      type: "default",
      action: "add",
      content: r,
      options: t
    })
  );
};
i.dismiss = (r) => {
  a({ action: "dismiss", id: r });
};
i.info = (r, t) => {
  r != null && a(
    n({
      action: "add",
      type: "info",
      content: r,
      options: t
    })
  );
};
i.success = (r, t) => {
  r != null && a(
    n({
      action: "add",
      type: "success",
      content: r,
      options: t
    })
  );
};
i.warning = (r, t) => {
  r != null && a(
    n({
      action: "add",
      type: "warning",
      content: r,
      options: t
    })
  );
};
i.error = (r, t) => {
  r != null && a(
    n({
      action: "add",
      type: "error",
      content: r,
      options: t
    })
  );
};
i.loading = (r, t) => {
  r != null && a(
    n({
      action: "add",
      type: "loading",
      content: r,
      options: { duration: 1 / 0, ...t }
    })
  );
};
i.custom = (r, t) => {
  r != null && a(
    n({
      action: "add",
      type: "custom",
      content: r,
      options: t
    })
  );
};
i.update = (r, t, e) => {
  t != null && a(c({ id: r, content: t, options: e }));
};
i.promise = (async (r, t, e) => {
  const u = s();
  a(
    n({
      action: "add",
      type: "loading",
      content: t.loading,
      options: { ...e, id: u, duration: 1 / 0 }
    })
  );
  try {
    const o = await r, d = typeof t.success == "function" ? await t.success(o) : t.success;
    return i.update(u, d, { ...e, type: "success" }), o;
  } catch (o) {
    const d = typeof t.error == "function" ? await t.error(o) : t.error;
    throw i.update(u, d, { ...e, type: "error" }), o;
  }
});
export {
  i as default
};
