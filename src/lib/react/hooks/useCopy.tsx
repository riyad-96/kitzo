import { useEffect, useRef, useState, useCallback } from 'react';
import copyToClipboard from '../../functions/copy/copy';

export type CopyStatus = 'standby' | 'copying' | 'copied' | 'error';

type UseCopyOptions = {
  resetDelay?: number;
};

type UseCopyReturn = {
  copy: (doc: string) => Promise<void>;
  status: CopyStatus;
  error: Error | null;
  isCopying: boolean;
  isCopied: boolean;
  isError: boolean;
  isStandby: boolean;
};

export default function useCopy(options: UseCopyOptions = {}): UseCopyReturn {
  const { resetDelay = 500 } = options;

  const [status, setStatus] = useState<CopyStatus>('standby');
  const [error, setError] = useState<Error | null>(null);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isBusyRef = useRef<boolean>(false);

  const copy = useCallback(
    async (doc: string) => {
      if (isBusyRef.current) return;

      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      try {
        isBusyRef.current = true;
        setError(null);
        setStatus('copying');

        await copyToClipboard(doc);

        setStatus('copied');
      } catch (err) {
        setError(err instanceof Error ? err : new Error(String(err)));
        setStatus('error');
      } finally {
        timeoutRef.current = setTimeout(
          () => {
            isBusyRef.current = false;
            setStatus('standby');
          },
          Math.max(resetDelay, 500),
        );
      }
    },
    [resetDelay],
  );

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return {
    copy,
    status,
    error,
    isCopying: status === 'copying',
    isCopied: status === 'copied',
    isError: status === 'error',
    isStandby: status === 'standby',
  };
}
