function o(e) {
  const t = document.createElement("textarea");
  t.value = e, document.body.appendChild(t), t.select(), document.execCommand("copy"), document.body.removeChild(t);
}
async function n(e) {
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
async function r(e) {
  if (e == null) throw new Error("[kitzo/copy] expected a value to copy, got null or undefined.");
  const t = typeof e == "string" || typeof e == "number" ? String(e) : JSON.stringify(e);
  await n(t);
}
export {
  r as default
};
