import { JSX } from 'react/jsx-runtime';
import { PropsWithChildren } from 'react';
import { ReactNode } from 'react';

declare type AnimationOptions = {
    duration?: number;
    startDuration?: number;
    endDuration?: number;
    delay?: number;
    startDelay?: number;
    endDelay?: number;
};

declare type CopyStatus = 'standby' | 'copying' | 'copied' | 'error';

declare type Options = ToastOptionsWithoutType;

declare type Position = 'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end';

declare type Positions = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

declare type PromiseToastFn = <T, E = unknown>(promise: Promise<T>, msgs: PromiseToastMsgs<T, E>, options?: PromiseToastOptions) => Promise<T>;

declare type PromiseToastMsgs<T, E = unknown> = {
    loading: ReactNode;
    success: ReactNode | ((res: T) => ReactNode | Promise<ReactNode>);
    error: ReactNode | ((err: E) => ReactNode | Promise<ReactNode>);
};

declare type PromiseToastOptions = Omit<ToastOptions, 'id' | 'type'>;

export declare const toast: ToastFn;

declare type ToastContent = ((dismiss: () => void) => ReactNode) | ReactNode;

export declare function Toaster(props: ToasterProps): JSX.Element;

declare type ToasterProps = {
    position?: Positions;
    richColors?: boolean;
    animateTransformOrigin?: boolean;
    gap?: number | `${number}`;
    edgeOffset?: number | `${number}`;
    isDark?: boolean;
};

declare type ToastFn = {
    (content: ToastContent, options?: ToastOptions): void;
    info: (content: ToastContent, options?: Options) => void;
    success: (content: ToastContent, options?: Options) => void;
    warning: (content: ToastContent, options?: Options) => void;
    error: (content: ToastContent, options?: Options) => void;
    promise: PromiseToastFn;
    loading: (content: ToastContent, options?: Options) => void;
    custom: (content: ToastContent, options?: Options) => void;
    dismiss: (id?: string | number) => void;
    update: (id: string | number, content: ToastContent, options?: UpdateToastOptions) => void;
};

declare type ToastOptions = {
    duration?: number;
    showIcon?: boolean;
    icon?: ReactNode;
    position?: Positions;
    animateTransformOrigin?: boolean;
    id?: string | number;
    type?: ToastType;
};

declare type ToastOptionsWithoutType = Omit<ToastOptions, 'type'>;

declare type ToastType = 'default' | 'success' | 'warning' | 'error' | 'info' | 'custom' | 'loading';

export declare function Tooltip(props: TooltipProps): ReactNode;

declare type TooltipAnimation = boolean | AnimationOptions;

declare type TooltipCoreProps = {
    /**
     * content is necessary
     */
    content: ReactNode;
    position?: Position;
    offset?: number;
    smartHover?: boolean;
    hideOnTouch?: boolean;
    animation?: TooltipAnimation;
    isHidden?: boolean;
    isDark?: boolean;
};

declare type TooltipProps = PropsWithChildren<TooltipCoreProps>;

declare type UpdateToastOptions = Omit<ToastOptions, 'id'>;

export declare function useCopy(options?: UseCopyOptions): UseCopyReturn;

declare type UseCopyOptions = {
    resetDelay?: number;
};

declare type UseCopyReturn = {
    copy: (doc: string) => Promise<void>;
    status: CopyStatus;
    error: Error | null;
    isCopying: boolean;
    isCopied: boolean;
    isError: boolean;
    isStandby: boolean;
};

export declare function useDebounce<T>(value: T, delay?: number): T;

export declare function useThrottle<T>(value: T, delay?: number): T;

export declare function useWindowSize(options?: UseWindowSizeOptions): {
    screenWidth: number;
    screenHeight: number;
};

declare type UseWindowSizeOptions = {
    updateDelay?: number;
};

export { }
