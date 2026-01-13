import type { PropsWithChildren, ReactNode } from 'react';

export type Position =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end';

export type AnimationOptions = {
  duration?: number;
  startDuration?: number;
  endDuration?: number;
  delay?: number;
  startDelay?: number;
  endDelay?: number;
};
export type TooltipAnimation = boolean | AnimationOptions;

export type TooltipCoreProps = {
  /**
   * content is necessary
   */
  content: ReactNode;
  position?: Position;

  offset?: number;
  smartHover?: boolean;
  hideOnTouch?: boolean;
  animation?: TooltipAnimation;
  isHidden?: boolean;
  isDark?: boolean;
};

export type TooltipProps = PropsWithChildren<TooltipCoreProps>;
