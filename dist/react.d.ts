export interface ToastOptions {
  duration?: number;
}

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
    options?: ToastOptions
  ): Promise<T>;
}

export declare const toast: ToastAPI;
export declare function ToastContainer(props: { position?: string }): JSX.Element;
