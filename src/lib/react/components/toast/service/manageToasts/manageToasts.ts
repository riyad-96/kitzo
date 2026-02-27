import type { Dispatch, SetStateAction } from 'react';
import type { Toast } from '../../types';
import dismissToasts from './dismissToasts';
import addToasts from './addToasts';
import updateToasts from './updateToasts';

export type ManageToastsProps = {
  toast: Toast;
  setToasts: Dispatch<SetStateAction<Toast[]>>;
};

export default function manageToasts({ toast, setToasts }: ManageToastsProps) {
  if(toast.action === 'dismiss') dismissToasts({ toast, setToasts });
  if(toast.action === 'add') addToasts({ toast, setToasts });
  if(toast.action === 'update') updateToasts({ toast, setToasts });
}
