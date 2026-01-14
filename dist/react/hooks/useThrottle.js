import { useState as c, useRef as f, useEffect as i } from "react";
function a(t, e = 500) {
  const [n, u] = c(t), r = f(0);
  return i(() => {
    function s() {
      const o = Date.now();
      o - r.current >= e && (u(t), r.current = o);
    }
    return s;
  }, [t, e]), n;
}
export {
  a as default
};
