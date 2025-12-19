const timeouts = new Map();

const LEAVE_DELAY = 600;
const MIN_VISIBLE = 700;

function clearToastTimers(id) {
  const t = timeouts.get(id);

  if (!t) return;
  clearTimeout(t.leaving);
  clearTimeout(t.left);
  timeouts.delete(id);
}

function getDurations(duration) {
  const d = Number(duration);
  if (!isFinite(d)) return null;

  const visible = Math.max(MIN_VISIBLE, d);

  return {
    leaving: visible,
    left: visible + LEAVE_DELAY,
  };
}

function armToastTimers(toast, setToasts) {
  const durations = getDurations(toast.duration);
  if (!durations) return;

  clearToastTimers(toast.id);

  const leaving = setTimeout(() => {
    setToasts((prev) =>
      prev.map((t) => (t.id === toast.id ? { ...t, status: 'leaving' } : t)),
    );
  }, durations.leaving);

  const left = setTimeout(() => {
    setToasts((prev) => prev.filter((t) => t.id !== toast.id));
    timeouts.delete(toast.id);
  }, durations.left);

  timeouts.set(toast.id, { leaving, left });
}

function manageToasts(toast, setToasts) {
  // dismiss
  if (toast.action === 'dismiss') {
    if (!toast.id) {
      setToasts((prev) => prev.map((t) => ({ ...t, status: 'leaving' })));

      setTimeout(() => {
        setToasts([]);
      }, LEAVE_DELAY);

      timeouts.forEach(({ leaving, left }) => {
        clearTimeout(leaving);
        clearTimeout(left);
      });
      timeouts.clear();
      return;
    }

    clearToastTimers(toast.id);
    setToasts((prev) =>
      prev.map((t) => (t.id === toast.id ? { ...t, status: 'leaving' } : t)),
    );
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== toast.id));
    }, LEAVE_DELAY);
    return;
  }

  // update
  if (toast.action === 'update') {
    setToasts((prev) => {
      const prevToast = prev.find((t) => t.id === toast.id);
      if (!prevToast) return prev;
      if (prevToast.type !== 'custom' && prevToast.type !== 'loading')
        return prev;
      return prev.map((t) =>
        t.id === toast.id ? { ...t, ...toast, status: 'visible' } : t,
      );
    });
    armToastTimers(toast, setToasts);
    return;
  }

  // add
  const enteringToast = { ...toast, status: 'entering' };
  setToasts((prev) => {
    const prevToast = prev.find((t) => t.id === enteringToast.id);
    if (prevToast) return prev;
    return [enteringToast, ...prev];
  });

  requestAnimationFrame(() => {
    setToasts((prev) =>
      prev.map((t) => (t.id === toast.id ? { ...t, status: 'visible' } : t)),
    );
  });

  armToastTimers(enteringToast, setToasts);
}

export default manageToasts;
