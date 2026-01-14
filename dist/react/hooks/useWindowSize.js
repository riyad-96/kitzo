import { useState as o, useRef as u, useEffect as c } from "react";
function d(n = 30) {
  const [t, r] = o({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight
  }), e = u(null);
  return c(() => {
    function i() {
      e.current && clearTimeout(e.current), e.current = setTimeout(
        () => {
          r({
            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight
          });
        },
        Math.max(0, +n)
      );
    }
    return typeof window < "u" && window.addEventListener("resize", i), () => {
      e.current && clearTimeout(e.current), window.removeEventListener("resize", i);
    };
  }, [n]), t;
}
export {
  d as default
};
