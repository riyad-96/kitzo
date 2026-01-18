import toast from '../triggerToasts';

let activeToast: HTMLDivElement | null = null;
let activeToastId: string | number | null = null;

let startX = 0;
let currentX = 0;
let isDragging = false;
export let dragStarted = false;

let activePointerId: number | null = null;

const DRAG_THRESHOLD = 0;
const CLOSE_THRESHOLD = 90;

// Resistance settings
const RESTRICTED_MAX = 90;
const RESTRICTED_SMOOTHNESS = 120;

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
  const isPromise = el.dataset.isPromise === 'true';
  return swipeable && !isPromise;
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


// Pointer Events
document.addEventListener('pointerdown', (e: PointerEvent) => {
  const target = e.target as HTMLElement;
  const toastEl = target.closest('.kitzo-toast') as HTMLDivElement | null;
  if (!toastEl) return;

  document.body.style.userSelect = 'none';

  activeToast = toastEl;
  activeToastId = toastEl.id;

  startX = e.clientX;
  currentX = 0;
  isDragging = true;
  dragStarted = false;
  activePointerId = e.pointerId;

  try {
    toastEl.setPointerCapture(e.pointerId);
  } catch {
    console.error('');
  }
});

document.addEventListener('pointermove', (e: PointerEvent) => {
  if (!isDragging || !activeToast) return;

  currentX = e.clientX - startX;

  if (!dragStarted && Math.abs(currentX) > DRAG_THRESHOLD) {
    dragStarted = true;
    activeToast.classList.add('is-swiping');
  }

  if (!dragStarted) return;

  const allowed = isSwipeAllowed(activeToast);
  const displayX = allowed ? currentX : resisted(currentX);

  activeToast.style.setProperty('--swipe-x', `${displayX}px`);
});

document.addEventListener('pointerup', () => {
  if (!isDragging || !activeToast || activeToastId == null) {
    endDrag();
    return;
  }

  const allowed = isSwipeAllowed(activeToast);

  if (dragStarted && allowed && Math.abs(currentX) > CLOSE_THRESHOLD) {
    const direction = currentX > 0 ? 1 : -1;
    const exitDistance = window.innerWidth / 2 + 50;
    activeToast.style.setProperty('--exit-x', `${direction * exitDistance}px`);
    activeToast.dataset.exit = 'swipe';
    toast.dismiss(activeToastId);
  }

  endDrag();
});

// fires when browser cancels the pointer
document.addEventListener('pointercancel', () => {
  endDrag();
});

// safety net: tab switch or window blur
window.addEventListener('blur', () => {
  if (isDragging) endDrag();
});
