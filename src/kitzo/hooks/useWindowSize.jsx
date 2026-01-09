import { useEffect, useRef, useState } from 'react';

export default function useWindowSize(options = {}) {
  const { delay = 30 } = options;

  if (typeof delay !== 'number')
    throw new Error(
      "Only number is accepted 'useWindowSize' hook configuration: delay",
    );

  const [screenSize, setScreenSize] = useState({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
  });

  const timeoutRef = useRef(null);
  useEffect(() => {
    function updateScreenSize() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(
        () => {
          setScreenSize({
            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight,
          });
        },
        Math.max(0, Number(delay)),
      );
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateScreenSize);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      window.removeEventListener('resize', updateScreenSize);
    };
  }, [delay]);

  return screenSize;
}
