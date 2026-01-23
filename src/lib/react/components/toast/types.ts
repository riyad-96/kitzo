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
  swipeToClose?: boolean;
  toasterId?: string | number;
};

export type ToastContent = ((dismiss: () => void) => ReactNode) | ReactNode;

export type Toast = {
  id: string;
  toasterId: string;
  type: ToastType;
  action: ToastAction;
  status: ToastStatus;
  content: ToastContent;
  zIndex: number;
  duration: number;
  showIcon: boolean;
  position?: Positions;
  swipeToClose?: boolean;
  icon?: ReactNode;
  animateTransformOrigin?: boolean;
  updateState?: string;
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
  (content: ToastContent, options?: ToastOptions): void;
  info: (content: ToastContent, options?: Options) => void;
  success: (content: ToastContent, options?: Options) => void;
  warning: (content: ToastContent, options?: Options) => void;
  error: (content: ToastContent, options?: Options) => void;
  promise: PromiseToastFn;
  loading: (content: ToastContent, options?: Options) => void;
  custom: (content: ToastContent, options?: Options) => void;
  dismiss: (id?: string | number, toasterId?: string | number) => void;
  update: (
    id: string | number,
    content: ToastContent,
    options?: UpdateToastOptions,
  ) => void;
};

export type ToasterProps = {
  position?: Positions;
  richColors?: boolean;
  animateTransformOrigin?: boolean;
  gap?: number | `${number}`;
  edgeOffset?: number | `${number}`;
  isDark?: boolean;
  pauseOnHover?: boolean;
  swipeToClose?: boolean;
  toasterId?: string | number;
};
