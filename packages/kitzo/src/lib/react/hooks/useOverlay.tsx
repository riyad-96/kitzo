import { useState, useEffect } from 'react';

/**
 * Global state to track the active overlay stack in the browser history.
 * We use a centralized listener to ensure all hooks are in sync, even if
 * they are mounted/unmounted during navigation transitions.
 */
const OVERLAYS_KEY = '__kitzo_overlays';

let currentStack: string[] = [];
const listeners = new Set<(stack: string[]) => void>();

if (typeof window !== 'undefined') {
  const syncFromHistory = () => {
    const state = window.history.state;
    currentStack = state?.[OVERLAYS_KEY] || [];
    listeners.forEach((listener) => listener(currentStack));
  };

  window.addEventListener('popstate', syncFromHistory);

  // Initial sync
  if (window.history.state) {
    currentStack = window.history.state[OVERLAYS_KEY] || [];
  }
}

/**
 * A React hook that manages UI overlays (modal, drawer, popover, etc.)
 * and synchronizes them with the browser navigation history.
 *
 * @param id - A stable unique identifier for the overlay.
 *             Required to maintain history state across navigations.
 *             Recommendation: Use page-scoped names like 'login-page:otp-modal'.
 *
 * @returns {isOpen: boolean, open: () => void, close: () => void}
 */
export function useOverlay(id: string) {
  if (!id) {
    throw new Error(
      'useOverlay requires a unique "id" parameter to manage history state correctly. ' +
        "Recommendation: Use a page-scoped name like 'login-page:my-modal'.",
    );
  }

  const [isOpen, setIsOpen] = useState(() => currentStack.includes(id));

  useEffect(() => {
    const handleUpdate = (stack: string[]) => {
      setIsOpen(stack.includes(id));
    };

    listeners.add(handleUpdate);
    // Sync immediately on mount
    handleUpdate(currentStack);

    return () => {
      listeners.delete(handleUpdate);
    };
  }, [id]);

  /**
   * Opens the overlay and pushes a new entry to the browser history.
   */
  const open = () => {
    const currentState = window.history.state || {};
    const overlays: string[] = currentState[OVERLAYS_KEY] || [];

    if (!overlays.includes(id)) {
      const nextStack = [...overlays, id];
      window.history.pushState(
        { ...currentState, [OVERLAYS_KEY]: nextStack },
        '',
      );

      // Update global state and notify all active hooks
      currentStack = nextStack;
      listeners.forEach((l) => l(currentStack));
    }
  };

  /**
   * Closes the overlay by triggering browser back navigation.
   */
  const close = () => {
    const currentState = window.history.state || {};
    const overlays: string[] = currentState[OVERLAYS_KEY] || [];

    if (overlays.includes(id)) {
      window.history.back();
    } else {
      setIsOpen(false);
    }
  };

  return {
    isOpen,
    open,
    close,
  };
}
