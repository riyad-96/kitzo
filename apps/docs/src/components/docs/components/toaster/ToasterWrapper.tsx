'use client';

import { useToasterStore } from '@/store/components.store/toasterPage.store';
import { Toaster } from 'kitzo';

export default function ToasterWrapper() {
  const {
    position,
    richColors,
    dark,
    gap,
    animateTransformOrigin,
    pauseOnHover,
    swipeToClose,
    edgeOffset,
    animateScale,
    compact,
  } = useToasterStore();

  return (
    <Toaster
      position={position}
      richColors={richColors}
      dark={dark}
      gap={gap}
      animateTransformOrigin={animateTransformOrigin}
      pauseOnHover={pauseOnHover}
      swipeToClose={swipeToClose}
      edgeOffset={edgeOffset}
      animateScale={animateScale}
      compact={compact}
    />
  );
}
