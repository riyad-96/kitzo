import { useEffect, useMemo, useRef } from 'react';

type DebounceOptions = {
  /**
   * If true, the callback is invoked on the leading edge of the timeout (immediately on the first call).
   * @default false
   */
  leading?: boolean;
  /**
   * If true, the callback is invoked on the trailing edge of the timeout (after the delay has passed).
   * @default true
   */
  trailing?: boolean;
  /**
   * The number of milliseconds to delay execution.
   * @default 300
   */
  delay?: number;
};

type DebouncedFunction<Args extends unknown[]> = {
  /**
   * The debounced version of your callback.
   * @param args - The arguments passed to the original callback.
   */
  (...args: Args): void;
  /**
   * Cancels any scheduled execution of the debounced callback.
   */
  cancel: () => void;
  /**
   * Immediately invokes the pending execution of the debounced callback and cancels the timer.
   */
  flush: () => void;
};

/**
 * A hook that returns a memoized debounced function to limit the execution rate of a callback.
 * * @template Args - The type of arguments accepted by the callback.
 * @param callback - The function to debounce.
 * @param options - Configuration for leading/trailing edges and delay.
 * @returns A debounced function with `.cancel()` and `.flush()` methods.
 */
export function useDebouncedCallback<Args extends unknown[]>(
  callback: (...args: Args) => void,
  options: DebounceOptions = {},
): DebouncedFunction<Args> {
  const { leading = false, trailing = true, delay = 300 } = options;

  const callbackRef = useRef(callback);
  const lastArgs = useRef<Args | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isLeadingInvoked = useRef(false);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const debouncedFn = useMemo(() => {
    const fn = (...args: Args) => {
      lastArgs.current = args;

      const invoke = () => {
        callbackRef.current(...args);
      };

      if (timer.current) clearTimeout(timer.current);

      if (leading && !timer.current) {
        invoke();
        isLeadingInvoked.current = true;
      } else {
        isLeadingInvoked.current = false;
      }

      timer.current = setTimeout(() => {
        const pendingArgs = lastArgs.current;
        const shouldInvokeTrailing =
          trailing && !isLeadingInvoked.current && pendingArgs;

        timer.current = null;
        isLeadingInvoked.current = false;
        lastArgs.current = null;

        if (shouldInvokeTrailing) {
          callbackRef.current(...pendingArgs);
        }
      }, delay);
    };

    fn.cancel = () => {
      if (timer.current) {
        clearTimeout(timer.current);
        timer.current = null;
      }
      lastArgs.current = null;
      isLeadingInvoked.current = false;
    };

    fn.flush = () => {
      if (timer.current && lastArgs.current) {
        const args = lastArgs.current;
        fn.cancel();
        callbackRef.current(...args);
      }
    };

    return fn;
  }, [delay, leading, trailing]);

  useEffect(() => {
    return () => {
      debouncedFn.cancel();
    };
  }, [debouncedFn]);

  return debouncedFn;
}
