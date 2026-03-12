import React, { type Dispatch, type SetStateAction } from 'react';

/**
 * A custom hook that manages a stateful value in `localStorage`,
 * with full SSR safety and cross-tab synchronization.
 *
 * The hook uses a two-phase approach: the server and first client render
 * always use `initialValue` (preventing hydration mismatches), and the
 * real localStorage value is synced in after mount.
 *
 * @example
 * const [theme, setTheme] = useLocalStorage<'light' | 'dark'>('ui-theme', 'light');
 * // Supports functional updates:
 * setTheme(prev => prev === 'light' ? 'dark' : 'light');
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, Dispatch<SetStateAction<T>>] {
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

  const setValue: Dispatch<SetStateAction<T>> = React.useCallback(
    (value) => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;

        setStoredValue(valueToStore);

        if (typeof window !== 'undefined') {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
          window.dispatchEvent(new Event('local-storage-update'));
        }
      } catch (error) {
        console.warn(`Error setting localStorage key "${key}":`, error);
      }
    },
    [key, storedValue],
  );

  // Phase 2: sync from localStorage after hydration and listen for changes.
  React.useEffect(() => {
    // Hydrate with the real stored value after mount.
    setStoredValue(readValue());

    const handleStorageChange = (event: StorageEvent | Event) => {
      if ((event as StorageEvent).key && (event as StorageEvent).key !== key) {
        return;
      }
      setStoredValue(readValue());
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('local-storage-update', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('local-storage-update', handleStorageChange);
    };
  }, [key, readValue]);

  return [storedValue, setValue];
}
