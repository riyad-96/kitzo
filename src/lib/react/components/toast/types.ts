import type { ReactNode } from 'react';

export type Positions =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export type ToastType =
  | 'default'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'custom'
  | 'loading';
export type ToastAction = 'add' | 'update' | 'dismiss';
export type ToastStatus = 'entering' | 'visible' | 'leaving';

export type ToastOptions = {
  duration?: number;
  showIcon?: boolean;
  icon?: ReactNode;
  position?: Positions;
  animateTransformOrigin?: boolean;
  id?: string | number;
  type?: ToastType;
};

export type ToastContent = ((dismiss: () => void) => ReactNode) | ReactNode;

export type Toast = {
  id: string | number;
  type: ToastType;
  action: ToastAction;
  status: ToastStatus;
  content: ToastContent;
  zIndex: number;
  duration: number;
  showIcon: boolean;
  icon: ReactNode | undefined;
  position: Positions | undefined;
  animateTransformOrigin: boolean | undefined;
};

type ToastUpdateOptions = Omit<ToastOptions, 'id'>;

export type PromiseToastOptions = Omit<ToastOptions, 'id' | 'type'>;

export type PromiseToastMsgs<T, E = unknown> = {
  loading: ReactNode;
  success: ReactNode | ((res: T) => ReactNode | Promise<ReactNode>);
  error: ReactNode | ((err: E) => ReactNode | Promise<ReactNode>);
};
export type PromiseToastFn = <T, E = unknown>(
  promise: Promise<T>,
  msgs: PromiseToastMsgs<T, E>,
  options?: PromiseToastOptions,
) => Promise<T>;

export type ToastFn = {
  (content: ToastContent, options?: ToastOptions): void;
  info: (content: ToastContent, options?: ToastOptions) => void;
  success: (content: ToastContent, options?: ToastOptions) => void;
  warning: (content: ToastContent, options?: ToastOptions) => void;
  error: (content: ToastContent, options?: ToastOptions) => void;
  promise: PromiseToastFn;
  loading: (content: ToastContent, options?: ToastOptions) => void;
  custom: (content: ToastContent, options?: ToastOptions) => void;
  dismiss: (id?: string | number) => void;
  update: (
    id: string | number,
    content: ToastContent,
    options?: ToastUpdateOptions,
  ) => void;
};

export type ToasterProps = {
  position?: Positions;
  richColors?: boolean;
  animateTransformOrigin?: boolean;
  gap?: number | `${number}`;
  edgeOffset?: number | `${number}px` | `${number}rem` | `${number}%`;
  isDark?: boolean;
};
