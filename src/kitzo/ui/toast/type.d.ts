import type { ReactNode, CSSProperties, JSX } from 'react';

//! Toast API types declaration
type Positions =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

type ToastOptions = {
  position?: Positions;
  duration?: number;
  style?: CSSProperties;
  showIcon?: boolean;
};

type CustomContent = ReactNode | ((dismiss: () => void) => ReactNode);

type ToastAPI = {
  (text: ReactNode, options?: ToastOptions): void;

  success(text: ReactNode, options?: ToastOptions): void;

  error(text: ReactNode, options?: ToastOptions): void;

  promise<T>(
    callback: Promise<T>,
    msgs: {
      loading: string;
      success: string | ((res: T) => string | Promise<string>);
      error: string | ((err: any) => string | Promise<string>);
    },
    options?: ToastOptions,
  ): void;

  custom(
    content: CustomContent,
    options?: { duration?: number; exitDelay?: number; position?: Positions },
  ): void;
};

export declare const toast: ToastAPI;

export declare function ToastContainer(props: { position?: Positions; gap?: number }): JSX.Element;
