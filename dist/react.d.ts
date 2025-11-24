import type { ReactNode, CSSProperties, JSX, PropsWithChildren } from 'react';

//! Toast API types declaration
export type Positions = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

export interface ToastOptions {
  position?: Positions;
  duration?: number;
  style?: CSSProperties;
  showIcon?: boolean;
}

export type CustomContent = string | ReactNode | ((dismiss: () => void) => ReactNode);

export interface ToastAPI {
  (text?: string, options?: ToastOptions): void;

  success(text?: string, options?: ToastOptions): void;

  error(text?: string, options?: ToastOptions): void;

  promise<T>(
    callback: Promise<T>,
    msgs?: {
      loading?: string;
      success?: string | ((res: T) => string | Promise<string>);
      error?: string | ((err: any) => string | Promise<string>);
    },
    options?: ToastOptions,
  ): void;

  custom(content: CustomContent, options?: { duration?: number; exitDelay?: number; position?: Positions }): void;
}

export declare const toast: ToastAPI;

export declare function ToastContainer(props: { position?: Positions; gap?: number }): JSX.Element;

//! Tooltip API types declaration
export interface TooltipCoreProps {
  content: string | ReactNode;
  position?: 'top' | 'right' | 'bottom' | 'left';
  offset?: number;
  hideOnTouch?: boolean;
}

export type TooltipProps = PropsWithChildren<TooltipCoreProps>;

export declare function Tooltip(props: TooltipProps): JSX.Element;
