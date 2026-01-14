import { useEffect, useRef, useState } from 'react';

export default function useWindowSize(updateDelay: number = 30) {
  const [screenSize, setScreenSize] = useState({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
  });

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
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
        Math.max(0, +updateDelay),
      );
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateScreenSize);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      window.removeEventListener('resize', updateScreenSize);
    };
  }, [updateDelay]);

  return screenSize;
}
