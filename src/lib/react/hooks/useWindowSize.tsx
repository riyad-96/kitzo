import React from 'react';

export default function useWindowSize(updateDelay: number = 30) {
  const [screenSize, setScreenSize] = React.useState({
    screenWidth: 0,
    screenHeight: 0,
  });

  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
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
      updateScreenSize();
      window.addEventListener('resize', updateScreenSize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', updateScreenSize);
      }
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [updateDelay]);

  return screenSize;
}
