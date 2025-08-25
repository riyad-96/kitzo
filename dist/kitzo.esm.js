//! Helper functions
// Get elements from dom
function getButtons(element) {
  if (typeof element === 'string') {
    return document.querySelectorAll(element);
  }
  if (element instanceof Element) {
    return [element];
  }
  if (element instanceof NodeList || element instanceof HTMLCollection) {
    return element;
  }
}

// Add style tags
let tooltipStyleAdded = false;
let rippleStyleAdded = false;
let clippathStyleAdded = false;

function addStyleTag(styles) {
  const style = document.createElement('style');
  style.innerHTML = styles;
  document.head.appendChild(style);
}

function addStyleTagToHtmlHead(type, styles) {
  if (type === 'tooltip' && !tooltipStyleAdded) {
    addStyleTag(styles);
    tooltipStyleAdded = true;
  }
  if (type === 'ripple' && !rippleStyleAdded) {
    addStyleTag(styles);
    rippleStyleAdded = true;
  }
  if (type === 'clippath' && !clippathStyleAdded) {
    addStyleTag(styles);
    clippathStyleAdded = true;
  }
}

//! Copy function
function legecyCopy(docs) {
  try {
    const textarea = document.createElement('textarea');
    textarea.value = docs;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  } catch (error) {
    alert('Couldn’t copy automatically. Please copy manually.');
    console.error(error);
  }
}

async function copyText(docs) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(docs);
    } catch (error) {
      legecyCopy(docs);
      console.error(error);
    }
  } else {
    legecyCopy(docs);
  }
}

const copyConfigMap = new WeakMap();
const allowedEvents = ['click', 'dblclick', 'contextmenu', 'mouseup', 'touchend'];
const attachedEvents = new Set();

function copy(element, config = {}) {
  config = Object.assign(
    {
      doc: '',
      event: 'click',
    },
    config
  );

  const { doc, event } = config;

  if (!element) {
    console.error('A button element/selector is expected');
    return;
  }

  if (!doc) {
    console.error('doc cannot be empty');
    return;
  }

  if (typeof doc !== 'string') {
    console.error('Doc should be in string format');
    return;
  }

  if (typeof event !== 'string') {
    console.error('Only strings are allowed as events');
    return;
  }

  if (!event.trim()) {
    console.error('event cannot be empty');
    return;
  }

  const allButtons = getButtons(element);
  if (!allButtons) {
    console.error('No elements found for kitzoCopy');
    return;
  }

  if (!allowedEvents.includes(event)) {
    console.warn(`[kitzo.copy] "${event}" is not allowed. Defaulting to "click".`);
  }

  const safeEvent = allowedEvents.includes(event) ? event : 'click';

  allButtons.forEach((btn) => {
    btn.setAttribute('data-kitzo-copy', 'true');

    copyConfigMap.set(btn, {
      doc,
      event: safeEvent,
    });
  });

  if (!attachedEvents.has(safeEvent)) {
    document.addEventListener(safeEvent, (e) => {
      const btn = e.target.closest('[data-kitzo-copy]');
      if (!btn) return;

      const { doc, event } = copyConfigMap.get(btn);
      if (event && event === safeEvent) {
        copyText(doc);
      }
    });
    attachedEvents.add(safeEvent);
  }
}

function debounce(fn, delay = 300) {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

function rippleStyles() {
  return `.kitzo-ripples {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  background-color: var(--ripples-color);
  z-index: 5;
  border-radius: 50%;
  opacity: 1;
  pointer-events: none;
}

.kitzo-ripples.expand {
  animation: expand-ripple var(--ripples-duration) linear forwards;
}

@keyframes expand-ripple {
  0% {
    width: 0;
    height: 0;
    opacity: var(--ripples-opacity);
  }
  100% {
    width: var(--ripples-size);
    height: var(--ripples-size);
    opacity: 0;
  }
}`;
}

//! Ripple effect
let rippleListenerAdded = false;
const rippleConfigMap = new WeakMap();

function ripple(element, config = {}) {
  if (!element) {
    console.error('[kitzo.ripple] A button element/selector is expected');
    return;
  }

  addStyleTagToHtmlHead('ripple', rippleStyles());

  config = Object.assign(
    {
      opacity: 0.5,
      duration: 1,
      color: 'white',
      size: null,
    },
    config
  );

  const allButtons = getButtons(element);
  if (!allButtons) {
    console.error('[kitzo.ripple] No elements found for kitzoRipple');
    return;
  }
  allButtons.forEach((btn) => {
    btn.setAttribute('data-kitzo-ripple', true);
    rippleConfigMap.set(btn, config);
    const { position, overflow } = window.getComputedStyle(btn);
    console.log(position, overflow);
    if (position === 'static') {
      btn.style.position = 'relative';
    }
    if (overflow === 'visible') {
      btn.style.overflow = 'hidden';
    }
  });

  if (!rippleListenerAdded) {
    document.addEventListener('mousedown', (e) => {
      const btn = e.target.closest('[data-kitzo-ripple]');
      if (btn) {
        const { opacity, duration, color, size } = rippleConfigMap.get(btn);
        const span = document.createElement('span');
        span.className = 'kitzo-ripples';
        btn.appendChild(span);

        const { left, top, width } = btn.getBoundingClientRect();
        span.style.left = e.clientX - left + 'px';
        span.style.top = e.clientY - top + 'px';

        btn.style.setProperty('--ripples-opacity', opacity);
        btn.style.setProperty('--ripples-duration', duration + 's');
        btn.style.setProperty('--ripples-size', `${size || width * 2}px`);
        btn.style.setProperty('--ripples-color', color);

        span.classList.add('expand');

        span.addEventListener('animationend', () => span.remove());
      }
    });

    rippleListenerAdded = true;
  }
}

function tooltipStyles() {
  return `:root {
  --tooltip-bg-clr: hsl(0, 0%, 10%);
  --tooltip-text-clr: hsl(0, 0%, 90%);
  }

@media (prefers-color-scheme: dark) {
  :root {
    --tooltip-bg-clr: hsl(0, 0%, 95%);
    --tooltip-text-clr: hsl(0, 0%, 10%);
  }
}

.kitzo-tooltip {
  --tooltip-arrow-clr: var(--tooltip-bg-clr);

  box-sizing: border-box;
  font-family: inherit;
  text-align: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999;

  background-color: var(--tooltip-bg-clr);
  color: var(--tooltip-text-clr);
  padding-block: 0.325rem;
  padding-inline: 0.625rem;
  border-radius: 4px;
  box-shadow: 0 2px 6px hsla(235, 0%, 0%, 0.25);

  opacity: 0 !important;

  transition: opacity 200ms;
  transition-delay: 100ms;
  pointer-events: none;
}

.kitzo-tooltip.show {
  opacity: 1 !important;
}

.kitzo-tooltip-top::before,
.kitzo-tooltip-right::before,
.kitzo-tooltip-bottom::before,
.kitzo-tooltip-left::before {

  content: '';
  position: absolute;
  border: 6px solid;
}

.kitzo-tooltip-top::before {
  top: calc(100% - 1px);
  left: 50%;
  translate: -50% 0;
  border-color: var(--tooltip-arrow-clr) transparent transparent transparent;
}

.kitzo-tooltip-right::before {
  top: 50%;
  right: calc(100% - 1px);
  translate: 0 -50%;
  border-color: transparent var(--tooltip-arrow-clr) transparent transparent;
}

.kitzo-tooltip-bottom::before {
  bottom: calc(100% - 1px);
  left: 50%;
  translate: -50% 0;
  border-color: transparent transparent var(--tooltip-arrow-clr) transparent;
}

.kitzo-tooltip-left::before {
  left: calc(100% - 1px);
  top: 50%;
  translate: 0 -50%;
  border-color: transparent transparent transparent var(--tooltip-arrow-clr);
}`;
}

//! Tooltip
let tooltipDiv;
let tooltipListenerAdded = false;
const tooltipConfigMap = new WeakMap();

function tooltip(element, config = {}) {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  if (!element) {
    console.error('A button element/selector is expected');
    return;
  }

  addStyleTagToHtmlHead('tooltip', tooltipStyles());

  config = Object.assign(
    {
      tooltip: 'Tool tip',
      direction: 'bottom',
      arrow: 'off',
      offset: 10,
      customClass: '',
      style: {},
    },
    config
  );

  const allButtons = getButtons(element);
  if (!allButtons) {
    console.error('[kitzo.tooltip] No elements found for kitzoTooltip');
    return;
  }

  const disAllowedStyles = ['top', 'left', 'right', 'bottom', 'position', 'zIndex', 'opacity', 'transform', 'translate', 'scale', 'rotate', 'perspective'];
  for (const key of disAllowedStyles) {
    if (key in config.style) {
      console.warn(`[kitzo.tooltip] "${key}" style is managed internally and will be ignored.`);
      delete config.style[key];
    }
  }

  allButtons.forEach((btn) => {
    btn.setAttribute('data-kitzo-tooltip', true);
    tooltipConfigMap.set(btn, config);
  });

  if (!tooltipDiv) {
    tooltipDiv = document.createElement('div');
    tooltipDiv.style.opacity = '0';
    document.body.appendChild(tooltipDiv);
  }

  function getPosition(btn, dir, offset) {
    const { width, height, top, left } = btn.getBoundingClientRect();
    let posX;
    let posY;

    if (dir === 'top') {
      posX = left + width / 2 - tooltipDiv.offsetWidth / 2;
      posY = top - tooltipDiv.offsetHeight - offset;
      return { posX, posY };
    }

    if (dir === 'right') {
      posX = left + width + offset;
      posY = top + height / 2 - tooltipDiv.offsetHeight / 2;
      return { posX, posY };
    }

    if (dir === 'bottom') {
      posX = left + width / 2 - tooltipDiv.offsetWidth / 2;
      posY = top + height + offset;
      return { posX, posY };
    }

    if (dir === 'left') {
      posX = left - tooltipDiv.offsetWidth - offset;
      posY = top + height / 2 - tooltipDiv.offsetHeight / 2;
      return { posX, posY };
    }
  }

  if (!tooltipListenerAdded) {
    document.addEventListener('mouseover', (e) => {
      const btn = e.target.closest('[data-kitzo-tooltip]');
      if (btn) {
        const { tooltip, direction, offset, customClass, style, arrow } = tooltipConfigMap.get(btn);

        tooltipDiv.removeAttribute('style');
        Object.assign(tooltipDiv.style, {
          position: 'fixed',
          top: '0px',
          left: '0px',
          zIndex: '999999',
          ...style,
        });

        const isArrowOn = arrow === 'on';
        tooltipDiv.textContent = tooltip;
        tooltipDiv.className = `kitzo-tooltip ${isArrowOn ? `kitzo-tooltip-${direction}` : ''} ${customClass.trim() ? customClass : ''}`;

        if (isArrowOn) {
          const color = getComputedStyle(tooltipDiv).backgroundColor;
          tooltipDiv.style.setProperty('--tooltip-arrow-clr', color);
        }

        const { posX, posY } = getPosition(btn, direction, offset);
        tooltipDiv.style.transform = `translate(${posX}px, ${posY}px)`;

        requestAnimationFrame(() => {
          tooltipDiv.classList.add('show');
        });
      }
    });

    document.addEventListener('mouseout', (e) => {
      const btn = e.target.closest('[data-kitzo-tooltip]');
      if (btn) {
        tooltipDiv.classList.remove('show');
      }
    });

    tooltipListenerAdded = true;
  }
}

function clippathStyles() {
  return `.kitzo-clippath-div {
  position: fixed;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  pointer-events: none;
  opacity: 0;
  clip-path: circle(0 at var(--kitzo-clippath-pos-x) var(--kitzo-clippath-pos-y));
  transition: var(--kitzo-clippath-transition);
}

.kitzo-clippath-div.show {
  opacity: 1;
  clip-path: circle(var(--kitzo-clippath-size) at var(--kitzo-clippath-pos-x) var(--kitzo-clippath-pos-y));
}`;
}

function getClippathSize(size) {
  if (size?.trim?.() === '') {
    return '20%';
  }
  if (typeof size === 'number') {
    if (size < 0) {
      console.warn("[kitzo.clippath] please provide a string value or positive number(px). Default is '20%'");
      return `20%`;
    }
    return `${size}px`;
  }
  if (typeof size === 'string') {
    return `${size}`;
  }
  console.warn("[kitzo.clippath] please provide a string value or positive number(px). Default is '20%'");
  return '20%';
}

const clippathConfigMap = new WeakMap();
let isClippathListenersAdded = false;
let clippathDiv;

function clippath(element, config = {}) {
  if (window.matchMedia('(pointer:coarse)').matches) return;

  if (!element) {
    console.error('[kitzo.clippath] A button element/selector is expected');
    return;
  }

  addStyleTagToHtmlHead('clippath', clippathStyles());

  config = Object.assign(
    {
      text: '',
      clippathSize: '20%',
      smooth: true,
      style: {},
    },
    config
  );

  const allButtons = getButtons(element);
  if (!allButtons) {
    console.error('[kitzo.clippath] No elements found for kitzoTooltip');
    return;
  }

  const disAllowedStyles = ['top', 'left', 'right', 'bottom', 'position', 'opacity', 'transform', 'translate', 'scale', 'rotate', 'perspective'];
  for (const key of disAllowedStyles) {
    if (key in config.style) {
      console.warn(`[kitzo.clippath] "${key}" style is managed internally and will be ignored.`);
      delete config.style[key];
    }
  }

  allButtons.forEach((btn) => {
    btn.setAttribute('data-kitzo-clippath', true);
    clippathConfigMap.set(btn, config);
  });

  if (!clippathDiv) {
    clippathDiv = document.createElement('div');
    clippathDiv.className = 'kitzo-clippath-div';
    document.body.appendChild(clippathDiv);
  }

  if (!isClippathListenersAdded) {
    let isHovering = false;

    document.addEventListener('mouseover', (e) => {
      const btn = e.target.closest('[data-kitzo-clippath]');

      if (btn) {
        isHovering = true;
        const { text, style, clippathSize, smooth } = clippathConfigMap.get(btn);
        const { width, height, top, left } = btn.getBoundingClientRect();

        clippathDiv.removeAttribute('style');

        clippathDiv.style.width = width + 'px';
        clippathDiv.style.height = height + 'px';
        clippathDiv.style.top = top + 'px';
        clippathDiv.style.left = left + 'px';

        if (!text) {
          clippathDiv.innerHTML = btn.innerHTML;
        } else {
          clippathDiv.innerHTML = text;
        }

        clippathDiv.style.setProperty('--kitzo-clippath-transition', smooth ? 'clip-path 150ms ease-out, opacity 150ms' : 'none');
        clippathDiv.style.setProperty('--kitzo-clippath-size', getClippathSize(clippathSize));

        const { borderRadius, font, letterSpacing, lineHeight, border, boxSizing, padding } = window.getComputedStyle(btn);

        Object.assign(clippathDiv.style, {
          backgroundColor: '#01c2b8',
          color: 'white',
          borderRadius,
          font,
          letterSpacing,
          lineHeight,
          border,
          boxSizing,
          padding,
          ...style,
        });

        requestAnimationFrame(() => {
          clippathDiv.classList.add('show');
        });
      }
    });

    document.addEventListener('mouseout', (e) => {
      const btn = e.target.closest('[data-kitzo-clippath]');

      if (btn) {
        clippathDiv.classList.remove('show');
        isHovering = false;
      }
    });

    document.addEventListener('mousemove', (e) => {
      if (!isHovering) return;
      const btn = e.target.closest('[data-kitzo-clippath]');

      if (btn) {
        const { top, left } = btn.getBoundingClientRect();
        const localX = e.clientX - left;
        const localY = e.clientY - top;

        clippathDiv.style.setProperty('--kitzo-clippath-pos-x', `${localX}px`);
        clippathDiv.style.setProperty('--kitzo-clippath-pos-y', `${localY}px`);
      }
    });

    isClippathListenersAdded = true;
  }
}

const kitzo = { copy, debounce, ripple, tooltip, clippath };

export { kitzo as default };
