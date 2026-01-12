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
};

let uid = 0;
export const genId = () => crypto.randomUUID?.() ?? `kitzo_toast_id_${++uid}`;

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
    id: opts.id ?? genId(),
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
  };

  return newToast;
}

type UpdateToastProps = {
  id: string | number;
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
  };

  return updatedToast;
}
