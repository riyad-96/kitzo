import React from 'react';

export interface ToastOptions {
  duration?: number;
  style?: React.CSSProperties;
  showIcon?: boolean;
}

export type CustomContent = string | React.ReactNode | ((dismiss: () => void) => React.ReactNode);

export interface ToastAPI {
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
  custom(content: CustomContent, options?: { duration?: number | Infinity; exitDelay: number }): void;
}

export declare const toast: ToastAPI;

export declare function ToastContainer(props: { position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'; gap?: number }): JSX.Element;
