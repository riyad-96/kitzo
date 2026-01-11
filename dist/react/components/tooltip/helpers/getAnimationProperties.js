function c(e) {
  const a = e?.startDelay, n = e?.endDelay, t = e?.delay ?? 0, f = e?.startDuration, D = e?.endDuration, r = e?.duration ?? 110;
  return {
    startDelay: a ?? t,
    endDelay: n ?? t,
    startDuration: f ?? r,
    endDuration: D ?? r
  };
}
export {
  c as default
};
