import { useEffect, useRef, useState } from 'react';

export default function useThrottle<T>(value: T, delay: number = 500): T {
  const [throttledValue, setThrottledValue] = useState<T>(value);

  const lastTime = useRef<number>(0);

  useEffect(() => {
    function throttle() {
      const now = Date.now();

      if (now - lastTime.current >= delay) {
        setThrottledValue(value);
        lastTime.current = now;
      }
    }

    return throttle;
  }, [value, delay]);

  return throttledValue;
}
