import React from 'react';
import type { ToastPositions, Toast, ToasterProps } from './types';
import { subscribe } from './service/listenars';
import manageToasts from './service/manageToasts/manageToasts';
import ToastContainer from './partials/ToastContainer';
import { ToasterContext } from './context/ToasterContext';
import { initSwipeToClose } from './service/manageToasts/swipeClose';
import { clampedValue } from './service/utils';

export function Toaster(props: ToasterProps) {
  const {
    position = 'top-center',
    gap = props?.compact ? 8 : 12,
    edgeOffset = 16,
    dark,
    compact = false,
    richColors = false,
    pauseOnHover = true,
    swipeToClose = true,
    animateScale = false,
    animateTransformOrigin = true,
  } = props;

  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const [toasts, setToasts] = React.useState<Toast[]>([]);

  // subscriber
  React.useEffect(() => {
    const unsub = subscribe(
      (toast) => manageToasts({ toast, setToasts }),
      props.toasterId,
    );
    const unsubscribeSwipeToClose = initSwipeToClose();
    return () => {
      unsub();
      unsubscribeSwipeToClose();
    };
  }, [props.toasterId]);

  const toasterRef = React.useRef<HTMLDivElement | null>(null);

  // direct dom update
  const updateOffsets = React.useCallback(() => {
    if (!toasterRef.current) return;

    // get all toast elements
    const toastElements: NodeListOf<HTMLElement> =
      toasterRef.current.querySelectorAll('[data-kitzo-toast-container]');

    const stackOffsets = {
      'top-left': 0,
      'top-center': 0,
      'top-right': 0,
      'bottom-left': 0,
      'bottom-center': 0,
      'bottom-right': 0,
    };

    toastElements.forEach((el) => {
      const pos: ToastPositions =
        (el.getAttribute('data-toast-position') as ToastPositions) ||
        ('top-center' as ToastPositions);
      const height =
        parseFloat(el.style.getPropertyValue('--toast-height')) || 0;

      el.style.setProperty('--toast-offset-y', `${stackOffsets[pos]}px`);

      const effectiveGap = isNaN(Number(gap))
        ? props?.compact
          ? 8
          : 12
        : Number(gap);
      stackOffsets[pos] += height + clampedValue(effectiveGap, 0, 32);
    });
  }, [gap, props?.compact]);

  React.useLayoutEffect(() => {
    updateOffsets();
  }, [toasts, updateOffsets]);

  if (!isMounted) return null;

  const prefersDark =
    typeof dark === 'boolean'
      ? dark
      : window.matchMedia('(prefers-color-scheme: dark)').matches;

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
            ? `${clampedValue(Number(edgeOffset), 0, 32)}px`
            : 16,
      }}
      className={`kitzo-toaster ${richColors ? 'kitzo-toaster-rich-colors' : ''} ${prefersDark ? 'dark kitzo-toaster-dark' : ''}`}
    >
      <div
        style={{
          position: 'relative',
        }}
      >
        <ToasterContext.Provider
          value={{
            position,
            gap,
            edgeOffset,
            setToasts,
            updateOffsets,
            dark,
            compact,
            richColors,
            swipeToClose,
            pauseOnHover,
            animateScale,
            animateTransformOrigin,
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
