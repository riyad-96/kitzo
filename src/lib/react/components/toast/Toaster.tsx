import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import type { Positions, Toast, ToasterProps } from './types';
import { subscribe } from './helpers/listenar';
import manageToasts from './helpers/manageToasts/manageToasts';
import ToastContainer from './partials/ToastContainer';
import { ToasterContext } from './context/ToasterContext';

export default function Toaster(props: ToasterProps) {
  const {
    position = 'top-center',
    richColors = false,
    animateTransformOrigin = true,
    gap = 8,
    edgeOffset = 16,
    isDark = window.matchMedia('(prefers-color-scheme: dark)').matches,
    pauseOnHover = true,
    swipeToClose = true,
  } = props;

  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    const unsub = subscribe((toast) => manageToasts({ toast, setToasts }));
    return unsub;
  }, []);

  const toasterRef = useRef<HTMLDivElement | null>(null);

  // direct dom update
  const updateOffsets = useCallback(() => {
    if (!toasterRef.current) return;

    // get all toast elements
    const toastElements: NodeListOf<HTMLElement> =
      toasterRef.current.querySelectorAll('[data-toast-container]');

    const stackOffsets = {
      'top-left': 0,
      'top-center': 0,
      'top-right': 0,
      'bottom-left': 0,
      'bottom-center': 0,
      'bottom-right': 0,
    };

    toastElements.forEach((el) => {
      const pos: Positions =
        (el.getAttribute('data-toast-position') as Positions) ||
        ('top-center' as Positions);
      const height =
        parseFloat(el.style.getPropertyValue('--toast-height')) || 0;

      el.style.setProperty('--toast-offset-y', `${stackOffsets[pos]}px`);

      const effectiveGap = isNaN(+gap) ? 8 : +gap;
      stackOffsets[pos] += height + effectiveGap;
    });
  }, [gap]);

  useLayoutEffect(() => {
    updateOffsets();
  }, [toasts, updateOffsets]);

  return (
    <div
      ref={toasterRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2147483647,
        pointerEvents: 'none',
        display: 'grid',
        padding:
          edgeOffset != null
            ? `${Math.max(Math.min(+edgeOffset, 200), 0)}px`
            : 16,
      }}
      className={`kitzo-toaster ${richColors ? 'kitzo-toaster-rich-colors' : ''} ${isDark ? 'kitzo-toaster-dark' : ''}`}
    >
      <div
        style={{
          position: 'relative',
        }}
      >
        <ToasterContext.Provider
          value={{
            position,
            richColors,
            isDark,
            gap,
            edgeOffset,
            animateTransformOrigin,
            pauseOnHover,
            swipeToClose,
            setToasts,
            updateOffsets,
          }}
        >
          {toasts.map((t) => (
            <ToastContainer key={t.id} t={t} />
          ))}
        </ToasterContext.Provider>
      </div>
    </div>
  );
}
