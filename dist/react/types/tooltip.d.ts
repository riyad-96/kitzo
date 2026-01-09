import type { CSSProperties, JSX, PropsWithChildren, ReactNode } from 'react';

type Position =
  | 'top-start'
  | 'top'
  | 'top-end'
  | 'right-start'
  | 'right'
  | 'right-end'
  | 'bottom-start'
  | 'bottom'
  | 'bottom-end'
  | 'left-start'
  | 'left'
  | 'left-end';

type TooltipOptions = {
  offset?: number;
  smartHover?: boolean;
  arrow?: boolean;
  hideOnTouch?: boolean;
};

type AnimationOptions = {
  duration?: number;
  startDuration?: number;
  endDuration?: number;
  delay?: number;
  startDelay?: number;
  endDelay?: number;
};
type TooltipAnimation = boolean | AnimationOptions;

type TooltipStyles = {
  '--arrow-size'?: number;
  '--arrow-color'?: string;
};

type TooltipCoreProps = {
  /**
   * content is necessary
   */
  content: string | ReactNode;
  position?: Position;
  tooltipOptions?: TooltipOptions;
  tooltipClassName?: string;
  tooltipStyle?: TooltipStyles & CSSProperties;
  animation?: TooltipAnimation;
  isHidden?: boolean;
  isDark?: boolean;
};

type TooltipProps = PropsWithChildren<TooltipCoreProps>;

export declare function Tooltip(props: TooltipProps): JSX.Element;
