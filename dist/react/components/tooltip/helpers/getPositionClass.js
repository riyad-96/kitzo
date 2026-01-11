const s = [
  "top-start",
  "top",
  "top-end",
  "right-start",
  "right",
  "right-end",
  "bottom-start",
  "bottom",
  "bottom-end",
  "left-start",
  "left",
  "left-end"
];
function n(t = "") {
  t = typeof t == "string" ? t.trim().toLowerCase() : "top";
  const e = s.find((o) => o === t);
  if (!e) return "top";
  if (e.includes("-")) {
    const [o, r] = e.split("-");
    return `${o} ${r}`;
  } else
    return e;
}
export {
  n as default
};
