import { useEffect, useRef, useState, useCallback } from 'react';
import copyToClipboard from '../functions/copy';

export default function useCopy({ resetDelay = 1500 } = {}) {
  const [status, setStatus] = useState('standby');
  const [error, setError] = useState(null);

  const timeoutRef = useRef(null);
  const isBusyRef = useRef(false);

  const copy = useCallback(
    async (doc) => {
      if (isBusyRef.current) return;

      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      try {
        isBusyRef.current = true;
        setError(null);
        setStatus('copying');

        await copyToClipboard(doc);

        setStatus('copied');
      } catch (err) {
        setError(err);
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
  };
}
