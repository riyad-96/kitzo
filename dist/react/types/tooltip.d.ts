import type { JSX, PropsWithChildren, ReactNode } from 'react';

type TooltipOptions = {
  /**
   * Default position: 'top'
   */
  position?: 'top' | 'right' | 'bottom' | 'left';
  /**
   * Default offset: 8
   */
  offset?: number;
  /**
   * Default delay: 0
   */
  delay?: number;
  /**
   * Default hideOnTouch: true
   */
  hideOnTouch?: boolean;
};

type TooltipCoreProps = {
  /**
   * content is necessary
   */
  content: ReactNode;
  tooltipOptions?: TooltipOptions;
};

type TooltipProps = PropsWithChildren<TooltipCoreProps>;

export declare function Tooltip(props: TooltipProps): JSX.Element;
