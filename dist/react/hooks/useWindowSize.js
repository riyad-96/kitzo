import t from "react";
function c(i = 30) {
  const [r, o] = t.useState({
    screenWidth: 0,
    screenHeight: 0
  }), e = t.useRef(null);
  return t.useEffect(() => {
    function n() {
      e.current && clearTimeout(e.current), e.current = setTimeout(
        () => {
          o({
            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight
          });
        },
        Math.max(0, +i)
      );
    }
    return typeof window < "u" && (n(), window.addEventListener("resize", n)), () => {
      typeof window < "u" && window.removeEventListener("resize", n), e.current && clearTimeout(e.current);
    };
  }, [i]), r;
}
export {
  c as default
};
