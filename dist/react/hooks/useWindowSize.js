import { useState as u, useRef as c, useEffect as d } from "react";
function w(i = {}) {
  const { updateDelay: n = 30 } = i, [r, o] = u({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight
  }), e = c(null);
  return d(() => {
    function t() {
      e.current && clearTimeout(e.current), e.current = setTimeout(
        () => {
          o({
            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight
          });
        },
        Math.max(0, +n)
      );
    }
    return typeof window < "u" && window.addEventListener("resize", t), () => {
      e.current && clearTimeout(e.current), window.removeEventListener("resize", t);
    };
  }, [n]), r;
}
export {
  w as default
};
