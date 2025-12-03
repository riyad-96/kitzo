import type { JSX, PropsWithChildren, ReactNode } from 'react';

type TooltipOptions = {
  /**
   * @default 'top'
   */
  position?:
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
  /**
   * @default 8
   */
  offset?: number;
  /**
   * Enables “Smart Hover Persistence”, allowing the tooltip to remain open
   * while the cursor moves between the trigger and the tooltip.
   *
   * @default true
   */
  smartHover?: boolean;
  /**
   * @default true
   */
  arrow: boolean;
  /**
   * @default true
   */
  hideOnTouch?: boolean;
};

type AnimationOptions = {
  /**
   * @default 110ms
   */
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
  tooltipOptions?: TooltipOptions;
  animation?: TooltipAnimation;
  style?: TooltipStyles;
};

type TooltipProps = PropsWithChildren<TooltipCoreProps>;

export declare function Tooltip(props: TooltipProps): JSX.Element;
