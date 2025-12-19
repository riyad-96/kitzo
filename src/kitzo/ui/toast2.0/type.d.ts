import { JSX, ReactNode } from 'react';

//! Toast API types declaration
type Positions =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

type ToastOptions = {
  id?: string | number;
  position?: Positions;
  duration?: number;
  showIcon?: boolean;
};

type ToastContainerProps = {
  position?: Positions;
  gap?: number | `${number}`;
  edgeOffset?: number | `${number}px` | `${number}rem` | `${number}%`;
  isDark?: boolean;
};

type Content = ReactNode | ((dismiss?: () => void) => ReactNode);

type Toast = {
  (Content: Content, options?: ToastOptions): void;
  success(content: Content, options?: ToastOptions): void;
  error(content: Content, options?: ToastOptions): void;
  info(content: Content, options?: ToastOptions): void;
  promise<T, E>(
    callback: Promise<T>,
    msgs: {
      loading: ReactNode;
      success: ReactNode | ((res: T) => ReactNode | Promise<ReactNode>);
      error: ReactNode | ((err: E) => ReactNode | Promise<ReactNode>);
    },
    options?: ToastOptions,
  ): void;
  custom(
    content: Content,
    options?: { duration?: number; exitDelay?: number; position?: Positions },
  ): void;

  update(id: string | number, content: Content, options?: ToastOptions): void;
  dismiss(id: string | number): void;
};

export declare const toast: Toast;
export declare function ToastContainer(props: ToastContainerProps): JSX.Element;
