import type { ReactNode } from 'react';

export type ToastPositions =
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
  position?: ToastPositions;
  animateTransformOrigin?: boolean;
  id?: string | number;
  type?: ToastType;
  swipeToClose?: boolean;
  toasterId?: string | number;
  onClose?: (id: string | number) => void;
};

export type ToastContent = ((dismiss: () => void) => ReactNode) | ReactNode;

export type Toast = {
  id: string | number;
  toasterId: string | number;
  type: ToastType;
  action: ToastAction;
  status: ToastStatus;
  content: ToastContent;
  zIndex: number;
  duration: number;
  showIcon: boolean;
  position?: ToastPositions;
  swipeToClose?: boolean;
  icon?: ReactNode;
  animateTransformOrigin?: boolean;
  updateState?: string;
  onClose?: (id: string | number) => void;
};

type ToastOptionsWithoutType = Omit<ToastOptions, 'type'>;
type UpdateToastOptions = Omit<ToastOptions, 'id'>;
type Options = ToastOptionsWithoutType;

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
  (content: ToastContent, options?: ToastOptions): string | number;
  info: (content: ToastContent, options?: Options) => string | number;
  success: (content: ToastContent, options?: Options) => string | number;
  warning: (content: ToastContent, options?: Options) => string | number;
  error: (content: ToastContent, options?: Options) => string | number;
  promise: PromiseToastFn;
  loading: (content: ToastContent, options?: Options) => string | number;
  custom: (content: ToastContent, options?: Options) => string | number;
  dismiss: (
    id?: string | number,
    toasterId?: string | number,
  ) => string | number | undefined;
  update: (
    id: string | number,
    content: ToastContent,
    options?: UpdateToastOptions,
  ) => string | number;
};

//! toaster props
export type ToasterProps = {
  position?: ToastPositions;
  gap?: number | `${number}`;
  edgeOffset?: number | `${number}`;
  toasterId?: string | number;
  dark?: boolean;
  compact?: boolean;
  richColors?: boolean;
  pauseOnHover?: boolean;
  swipeToClose?: boolean;
  animateTransformOrigin?: boolean;
  animateScale?: boolean;
};
