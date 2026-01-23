import type {
  Toast,
  ToastAction,
  ToastContent,
  ToastOptions,
  ToastType,
} from '../types';
import { DEFAULT_TOASTER_ID } from './listenars';

const DEFAULTS = {
  duration: 2800,
  showIcon: true,
  animateTransformOrigin: undefined,
  swipeToClose: undefined,
};

let uid = 0;
export const genId = () => crypto.randomUUID?.() ?? ++uid;

let zIndex = 1;

type CreateToastProps = {
  type: ToastType;
  action: ToastAction;
  content: ToastContent;
  options?: ToastOptions;
};

export function createToast({
  type,
  action,
  content,
  options,
}: CreateToastProps) {
  const opts = typeof options === 'object' && options !== null ? options : {};

  const newToast: Toast = {
    id: `${opts.id ?? genId()}`,
    toasterId: `${opts.toasterId ?? DEFAULT_TOASTER_ID}`,
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
    swipeToClose: opts.swipeToClose ?? DEFAULTS.swipeToClose,
    updateState: 'initial',
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
    id,
    content,
    action: 'update' as ToastAction,
    duration: opts.duration ?? DEFAULTS.duration,
    toasterId: `${opts.toasterId ?? DEFAULT_TOASTER_ID}`,
  };

  return updatedToast;
}
