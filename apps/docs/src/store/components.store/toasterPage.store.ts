import { create } from 'zustand';

export type Positions =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

type ToasterStore = {
  position: Positions;
  richColors: boolean;
  dark: boolean;
  gap: number;
  animateTransformOrigin: boolean;
  pauseOnHover: boolean;
  swipeToClose: boolean;
  animateScale: boolean;
  compact: boolean;
  edgeOffset: number;
  setPosition: (position: Positions) => void;
  setRichColors: (richColors: boolean) => void;
  setIsDark: (isDark: boolean) => void;
  setGap: (gap: number) => void;
  setAnimateTransformOrigin: (animateTransformOrigin: boolean) => void;
  setPauseOnHover: (pauseOnHover: boolean) => void;
  setSwipeToClose: (swipeToClose: boolean) => void;
  setEdgeOffset: (edgeOffset: number) => void;
  setAnimateScale: (animateScale: boolean) => void;
  setCompact: (compact: boolean) => void;
};

const store = create<ToasterStore>((set) => ({
  position: 'top-right',
  richColors: false,
  dark: false,
  gap: 12,
  animateTransformOrigin: true,
  pauseOnHover: true,
  swipeToClose: true,
  edgeOffset: 16,
  animateScale: false,
  compact: false,
  setPosition: (position) => set({ position }),
  setRichColors: (richColors) => set({ richColors }),
  setIsDark: (dark) => set({ dark }),
  setGap: (gap) => set({ gap }),
  setAnimateTransformOrigin: (animateTransformOrigin) =>
    set({ animateTransformOrigin }),
  setPauseOnHover: (pauseOnHover) => set({ pauseOnHover }),
  setSwipeToClose: (swipeToClose) => set({ swipeToClose }),
  setEdgeOffset: (edgeOffset) => set({ edgeOffset }),
  setAnimateScale: (animateScale) => set({ animateScale }),
  setCompact: (compact) => set({ compact }),
}));

export const useToasterStore = store;
export const toasterStore = store.getState;
