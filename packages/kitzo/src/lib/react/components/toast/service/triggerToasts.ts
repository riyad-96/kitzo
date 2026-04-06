import type {
  PromiseToastFn,
  PromiseToastMsgs,
  PromiseToastOptions,
  ToastFn,
} from '../types';
import { createToast, genId, updateToast } from './createToast';
import { notify } from './listenars';

const toast: ToastFn = (content, options) => {
  const newToast = createToast({
    type: 'default',
    action: 'add',
    content,
    options,
  });
  if (content == null) return newToast.id;
  notify(newToast);
  return newToast.id;
};

toast.dismiss = (id, toasterId) => {
  notify({
    action: 'dismiss',
    id,
    toasterId,
  });
  return id;
};

toast.info = (content, options) => {
  const newToast = createToast({
    action: 'add',
    type: 'info',
    content,
    options,
  });
  if (content == null) return newToast.id;
  notify(newToast);
  return newToast.id;
};
toast.success = (content, options) => {
  const newToast = createToast({
    action: 'add',
    type: 'success',
    content,
    options,
  });
  if (content == null) return newToast.id;
  notify(newToast);
  return newToast.id;
};
toast.warning = (content, options) => {
  const newToast = createToast({
    action: 'add',
    type: 'warning',
    content,
    options,
  });
  if (content == null) return newToast.id;
  notify(newToast);
  return newToast.id;
};
toast.error = (content, options) => {
  const newToast = createToast({
    action: 'add',
    type: 'error',
    content,
    options,
  });
  if (content == null) return newToast.id;
  notify(newToast);
  return newToast.id;
};
toast.loading = (content, options) => {
  const newToast = createToast({
    action: 'add',
    type: 'loading',
    content,
    options: { duration: Infinity, ...options },
  });
  if (content == null) return newToast.id;
  notify(newToast);
  return newToast.id;
};
toast.custom = (content, options) => {
  const newToast = createToast({
    action: 'add',
    type: 'custom',
    content,
    options,
  });
  if (content == null) return newToast.id;
  notify(newToast);
  return newToast.id;
};

toast.update = (id, content, options) => {
  if (id == null) return '';
  if (content == null) return id;
  notify(updateToast({ id: `${id}`, content, options }));
  return id;
};

toast.promise = (async <T, E = unknown>(
  promise: Promise<T>,
  msgs: PromiseToastMsgs<T, E>,
  options: PromiseToastOptions,
) => {
  const id = genId();

  notify(
    createToast({
      action: 'add',
      type: 'loading',
      content: msgs.loading,
      options: { ...options, id, duration: Infinity, swipeToClose: false },
    }),
  );

  try {
    const result = await promise;

    const successContent =
      typeof msgs.success === 'function'
        ? await msgs.success(result)
        : msgs.success;

    toast.update(id, successContent, { ...options, type: 'success' });

    return result;
  } catch (error) {
    const errorContent =
      typeof msgs.error === 'function'
        ? await msgs.error(error as E)
        : msgs.error;

    toast.update(id, errorContent, { ...options, type: 'error' });

    throw error;
  }
}) as PromiseToastFn;

export { toast };
