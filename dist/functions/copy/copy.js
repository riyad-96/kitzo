function o(e) {
  const t = document.createElement("textarea");
  t.value = e, document.body.appendChild(t), t.select(), document.execCommand("copy"), document.body.removeChild(t);
}
async function a(e) {
  if (!navigator.clipboard?.writeText) {
    o(e);
    return;
  }
  try {
    await navigator.clipboard.writeText(e);
  } catch (t) {
    o(e), console.error(t);
  }
}
async function n(e) {
  const t = typeof e == "string" || typeof e == "number" || typeof e == "boolean" ? String(e) : JSON.stringify(e);
  await a(t);
}
export {
  n as default
};
