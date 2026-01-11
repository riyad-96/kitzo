import { useState as r, useEffect as c } from "react";
function f(e, t) {
  t ??= 500;
  const [u, o] = r(e);
  return c(() => {
    const n = setTimeout(() => {
      o(e);
    }, t);
    return () => {
      clearTimeout(n);
    };
  }, [e, t]), u;
}
export {
  f as default
};
