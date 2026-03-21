import React, { type Dispatch, type SetStateAction } from 'react';

type Options<T> = {
  /** Milliseconds to debounce writes to localStorage (default: 0 — no debounce). */
  debounceMs?: number;
  /** Called once after the first value is read from localStorage on mount. */
  onMount?: (value: T) => void;
};

/**
 * A custom hook that manages a stateful value in `localStorage`,
 * with full SSR safety and cross-tab synchronization.
 *
 * The hook uses a two-phase approach: the server and first client render
 * always use `initialValue` (preventing hydration mismatches), and the
 * real localStorage value is synced in after mount.
 *
 * - State is updated immediately on every `setValue` call for a responsive UI.
 * - Writes to `localStorage` are debounced by `options.debounceMs` ms.
 * - `options.onMount` is called exactly once with the first value read from storage.
 *
 * @example
 * const [theme, setTheme] = useLocalStorage<'light' | 'dark'>('ui-theme', 'light', {
 *   debounceMs: 300,
 *   onMount: (v) => console.log('loaded from storage:', v),
 * });
 * // Supports functional updates:
 * setTheme(prev => prev === 'light' ? 'dark' : 'light');
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T,
  options?: Options<T>,
): [T, Dispatch<SetStateAction<T>>] {
  const resolvedOptions = options ?? {};
  const { debounceMs = 0, onMount } = resolvedOptions;

  // Stable ref for onMount so it never needs to be in a dependency array.
  const onMountRef = React.useRef(onMount);
  React.useEffect(() => {
    onMountRef.current = onMount;
  });

  // Always start with initialValue so SSR and first client render match.
  const [storedValue, setStoredValue] = React.useState<T>(initialValue);

  const readValue = React.useCallback((): T => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  }, [key, initialValue]);

  // Timer ref for debounced localStorage writes.
  const writeTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  const setValue: Dispatch<SetStateAction<T>> = React.useCallback(
    (value) => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;

        // Update React state immediately for a responsive UI.
        setStoredValue(valueToStore);

        if (typeof window !== 'undefined') {
          // Debounce the actual localStorage write.
          if (writeTimerRef.current !== null) {
            clearTimeout(writeTimerRef.current);
          }

          if (debounceMs > 0) {
            writeTimerRef.current = setTimeout(() => {
              window.localStorage.setItem(key, JSON.stringify(valueToStore));
              window.dispatchEvent(new Event('local-storage-update'));
              writeTimerRef.current = null;
            }, debounceMs);
          } else {
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
            window.dispatchEvent(new Event('local-storage-update'));
          }
        }
      } catch (error) {
        console.warn(`Error setting localStorage key "${key}":`, error);
      }
    },
    [key, storedValue, debounceMs],
  );

  // Phase 2: hydrate from localStorage after mount and subscribe to changes.
  React.useEffect(() => {
    const initialStored = readValue();

    // Hydrate state with the real stored value.
    setStoredValue(initialStored);

    // Fire onMount exactly once with the first value read from storage.
    onMountRef.current?.(initialStored);

    const handleStorageChange = (event: StorageEvent | Event) => {
      if ((event as StorageEvent).key && (event as StorageEvent).key !== key) {
        return;
      }
      setStoredValue(readValue());
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('local-storage-update', handleStorageChange);

    return () => {
      // Flush any pending debounced write before unmounting.
      if (writeTimerRef.current !== null) {
        clearTimeout(writeTimerRef.current);
      }
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('local-storage-update', handleStorageChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return [storedValue, setValue];
}
