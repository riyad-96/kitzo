import { useEffect, useRef, useState } from 'react';

type UseWindowSizeOptions = {
  updateDelay?: number;
};

export default function useWindowSize(options: UseWindowSizeOptions = {}) {
  const { updateDelay = 30 } = options;

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
