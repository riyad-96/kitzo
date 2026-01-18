import type {
  Toast,
  ToastAction,
  ToastContent,
  ToastOptions,
  ToastType,
} from '../types';

const DEFAULTS = {
  duration: 2800,
  showIcon: true,
  animateTransformOrigin: undefined,
  swipeToClose: true,
};

let uid = 0;
export const genId = () => crypto.randomUUID?.() ?? ++uid;

let zIndex = 1;

type CreateToastProps = {
  type: ToastType;
  action: ToastAction;
  content: ToastContent;
  isPromise?: boolean;
  options?: ToastOptions;
};

export function createToast({
  type,
  action,
  content,
  isPromise,
  options,
}: CreateToastProps) {
  const opts = typeof options === 'object' && options !== null ? options : {};

  const newToast: Toast = {
    id: `toast-id:${opts.id ?? genId()}`,
    duration: opts.duration ?? DEFAULTS.duration,
    showIcon: opts.showIcon ?? DEFAULTS.showIcon,
    animateTransformOrigin:
      opts.animateTransformOrigin ?? DEFAULTS.animateTransformOrigin,
    position: opts.position,
    icon: opts.icon,
    type: type === 'default' ? (opts.type ?? 'default') : type,
    status: 'entering',
    zIndex: ++zIndex,
    content,
    action,
    isPromise: Boolean(isPromise),
    swipeToClose: opts.swipeToClose ?? DEFAULTS.swipeToClose,
  };

  return newToast;
}

type UpdateToastProps = {
  id: string;
  content: ToastContent;
  options?: ToastOptions;
};

export function updateToast({ id, content, options }: UpdateToastProps) {
  const opts = typeof options === 'object' && options !== null ? options : {};

  const updatedToast = {
    ...opts,
    id: `toast-id:${id}`,
    content,
    action: 'update' as ToastAction,
    isPromise: false,
    duration: opts.duration ?? DEFAULTS.duration,
  };

  return updatedToast;
}
