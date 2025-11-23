import { type ReactNode, type CSSProperties, type JSX, type PropsWithChildren } from 'react';

// Toast API types declaration
export interface ToastOptions {
  position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
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
      success?: string | ((res: T) => string);
      error?: string | ((err: Error) => string);
    },
    options?: ToastOptions,
  ): Promise<T>;
  custom(content: CustomContent, options?: { duration?: number; exitDelay?: number; position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right' }): void;
}

export declare const toast: ToastAPI;

export declare function ToastContainer(props: { position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'; gap?: number }): JSX.Element;

// Tooltip API types declaration
export interface TooltipCoreProps {
  content: string | ReactNode;
  position?: 'top' | 'right' | 'bottom' | 'left';
  offset?: number;
  hideOnTouch?: boolean;
}

export type TooltipProps = PropsWithChildren<TooltipCoreProps>;

export declare function Tooltip(props: TooltipProps): JSX.Element;
