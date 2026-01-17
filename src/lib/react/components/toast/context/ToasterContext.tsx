import { createContext, useContext, type Dispatch, type SetStateAction } from 'react';
import type { Toast, ToasterProps } from '../types';

type ToasterContextType = ToasterProps & {
  setToasts: Dispatch<SetStateAction<Toast[]>>;
  updateOffsets: () => void;
}

export const ToasterContext = createContext<ToasterContextType | null>(null);

export function useToasterContext() {
  const ctx = useContext(ToasterContext);
  if (!ctx) {
    throw new Error('Toast components must be used inside <Toaster />');
  }
  return ctx;
}
