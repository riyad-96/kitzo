function a(e) {
  const t = document.createElement("textarea");
  t.value = e, document.body.appendChild(t), t.select(), document.execCommand("copy"), document.body.removeChild(t);
}
async function o(e) {
  if (!navigator.clipboard?.writeText) {
    a(e);
    return;
  }
  try {
    await navigator.clipboard.writeText(e);
  } catch (t) {
    a(e), console.error(t);
  }
}
async function r(e) {
  let t;
  try {
    t = typeof e == "string" || typeof e == "number" || typeof e == "boolean" ? String(e) : JSON.stringify(e);
  } catch {
    t = "[Cannot copy circular object]";
  }
  await o(t);
}
export {
  r as default
};
