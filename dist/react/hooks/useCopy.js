import { useState as u, useRef as i, useCallback as p, useEffect as m } from "react";
import d from "../../functions/copy/copy.js";
function g(a = {}) {
  const { resetDelay: s = 1500 } = a, [r, e] = u("standby"), [f, c] = u(null), t = i(null), n = i(!1), l = p(
    async (y) => {
      if (!n.current) {
        t.current && clearTimeout(t.current);
        try {
          n.current = !0, c(null), e("copying"), await d(y), e("copied");
        } catch (o) {
          c(o instanceof Error ? o : new Error(String(o))), e("error");
        } finally {
          t.current = setTimeout(
            () => {
              n.current = !1, e("standby");
            },
            Math.max(s, 500)
          );
        }
      }
    },
    [s]
  );
  return m(() => () => {
    t.current && clearTimeout(t.current);
  }, []), {
    copy: l,
    status: r,
    error: f,
    isCopying: r === "copying",
    isCopied: r === "copied",
    isError: r === "error",
    isStandby: r === "standby"
  };
}
export {
  g as default
};
