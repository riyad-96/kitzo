import toast from '../triggerToasts';

export let dragStarted = false;

let activeToast: HTMLDivElement | null = null;
let activeToastId: string | number | null = null;

let startX = 0;
let currentX = 0;
let isDragging = false;

let activePointerId: number | null = null;

const DRAG_THRESHOLD = 2;
const CLOSE_THRESHOLD = 65;

// Resistance settings
const RESTRICTED_MAX = 20;
const RESTRICTED_SMOOTHNESS = 100;

// smooth resistance curve
function resisted(dx: number) {
  const sign = Math.sign(dx) || 1;
  const abs = Math.abs(dx);
  const r = RESTRICTED_MAX * (1 - Math.exp(-abs / RESTRICTED_SMOOTHNESS));
  return sign * r;
}

// check if swipe is allowed
function isSwipeAllowed(el: HTMLDivElement | null) {
  if (!el) return false;
  const swipeable = el.dataset.swipeable === 'true';
  return swipeable;
}

// single cleanup source
function endDrag(releasePointer = true) {
  if (!activeToast) return;

  document.body.style.userSelect = 'auto';

  if (releasePointer && activePointerId != null) {
    try {
      activeToast.releasePointerCapture(activePointerId);
    } catch {
      console.error('');
    }
  }

  activeToast.style.setProperty('--swipe-x', '0px');
  activeToast.classList.remove('is-swiping');

  const element = activeToast;

  activeToast = null;
  activeToastId = null;
  activePointerId = null;
  isDragging = false;
  dragStarted = false;
  currentX = 0;

  if (!element.matches(':hover')) {
    const event = new MouseEvent('mouseleave', {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    element.dispatchEvent(event);
  }
}

// pointer down event
function handlePointerDown(e: PointerEvent) {
  const target = e.target as HTMLElement;
  const toastEl = target.closest('.kitzo-toast') as HTMLDivElement | null;
  if (!toastEl) return;

  activeToast = toastEl;
  activeToastId = toastEl.id;

  startX = e.clientX;
  currentX = 0;
  isDragging = true;
  dragStarted = false;
  activePointerId = e.pointerId;
}

// pointer move event
function handlePointerMove(e: PointerEvent) {
  if (!isDragging || !activeToast) return;

  currentX = e.clientX - startX;

  if (!dragStarted && Math.abs(currentX) > DRAG_THRESHOLD) {
    dragStarted = true;
    activeToast.classList.add('is-swiping');

    try {
      activeToast.setPointerCapture(e.pointerId);
      document.body.style.userSelect = 'none';
    } catch {
      console.error('Failed to capture pointer');
    }
  }

  if (!dragStarted) return;

  const allowed = isSwipeAllowed(activeToast);
  const displayX = allowed ? currentX : resisted(currentX);

  activeToast.style.setProperty('--swipe-x', `${displayX}px`);
}

// pointer up event
function handlePointerUp() {
  if (!isDragging || !activeToast || activeToastId == null) {
    endDrag();
    return;
  }

  const allowed = isSwipeAllowed(activeToast);

  if (dragStarted && allowed && Math.abs(currentX) > CLOSE_THRESHOLD) {
    const direction = currentX > 0 ? 1 : -1;
    const exitDistance = Math.abs(currentX) + 220;
    activeToast.style.setProperty('--exit-x', `${direction * exitDistance}px`);
    activeToast.dataset.exit = 'swipe';
    toast.dismiss(activeToastId, activeToast.dataset.toasterId);
  }

  endDrag();
}

// fires when browser cancels the pointer
function handlePointerCancel() {
  endDrag();
}

// safety net: tab switch or window blur
function handleBlur() {
  if (isDragging) endDrag();
}

let attached = false;

export function initSwipeToClose() {
  if (attached) return () => {};
  attached = true;

  document.addEventListener('pointerdown', handlePointerDown);
  document.addEventListener('pointermove', handlePointerMove);
  document.addEventListener('pointerup', handlePointerUp);
  document.addEventListener('pointercancel', handlePointerCancel);
  window.addEventListener('blur', handleBlur);

  return () => {
    endDrag();
    attached = false;
    document.removeEventListener('pointerdown', handlePointerDown);
    document.removeEventListener('pointermove', handlePointerMove);
    document.removeEventListener('pointerup', handlePointerUp);
    document.removeEventListener('pointercancel', handlePointerCancel);
    window.removeEventListener('blur', handleBlur);
  };
}
