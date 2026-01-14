import { useState as u, useRef as i, useCallback as y, useEffect as p } from "react";
import m from "../../functions/copy/copy.js";
function E(c = 1500) {
  const [r, e] = u("standby"), [a, s] = u(null), t = i(null), n = i(!1), f = y(
    async (l) => {
      if (!n.current) {
        t.current && clearTimeout(t.current);
        try {
          n.current = !0, s(null), e("copying"), await m(l), e("copied");
        } catch (o) {
          s(o instanceof Error ? o : new Error(String(o))), e("error");
        } finally {
          t.current = setTimeout(
            () => {
              n.current = !1, e("standby");
            },
            Math.max(c, 500)
          );
        }
      }
    },
    [c]
  );
  return p(() => () => {
    t.current && clearTimeout(t.current);
  }, []), {
    copy: f,
    status: r,
    error: a,
    isCopying: r === "copying",
    isCopied: r === "copied",
    isError: r === "error",
    isStandby: r === "standby"
  };
}
export {
  E as default
};
