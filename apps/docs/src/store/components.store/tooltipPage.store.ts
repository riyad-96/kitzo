import { create } from 'zustand';
import { TooltipPosition } from 'kitzo';

type AnimationOptions = {
  startDuration?: number;
  endDuration?: number;
  startDelay?: number;
  endDelay?: number;
};

export type TooltipAnimation = boolean | AnimationOptions;

type SetAnimationFn = (prev: TooltipAnimation) => TooltipAnimation;
type SetAnimationType = (
  newAnimation: TooltipAnimation | SetAnimationFn,
) => void;

type TooltipStore = {
  position: TooltipPosition;
  offset: number;
  smartHover: boolean;
  hideOnTouch: boolean;
  isDark: boolean;
  isHidden: boolean;
  animation: TooltipAnimation;
  setPosition: (position: TooltipPosition) => void;
  setOffset: (offset: number) => void;
  setSmartHover: (smartHover: boolean) => void;
  setHideOnTouch: (hideOnTouch: boolean) => void;
  setIsDark: (isDark: boolean) => void;
  setIsHidden: (isHidden: boolean) => void;
  setAnimation: SetAnimationType;
  resetAnimation: () => void;
};

const defaultAnimation = {
  startDuration: 110,
  endDuration: 110,
  startDelay: 0,
  endDelay: 0,
};

const store = create<TooltipStore>((set) => ({
  position: 'top',
  offset: 8,
  smartHover: true,
  hideOnTouch: true,
  isDark: false,
  isHidden: false,
  animation: defaultAnimation,
  setPosition: (position) => set({ position }),
  setOffset: (offset) => set({ offset }),
  setSmartHover: (smartHover) => set({ smartHover }),
  setHideOnTouch: (hideOnTouch) => set({ hideOnTouch }),
  setIsDark: (isDark) => set({ isDark }),
  setIsHidden: (isHidden) => set({ isHidden }),
  setAnimation: (newAnimation) => {
    set((state) => ({
      animation:
        typeof newAnimation === 'function'
          ? newAnimation(state.animation)
          : newAnimation,
    }));
  },
  resetAnimation: () => set({ animation: defaultAnimation }),
}));

export const useTooltipStore = store;
export const tooltipStore = store.getState;
