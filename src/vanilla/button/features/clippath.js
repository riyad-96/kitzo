import { addStyleTagToHtmlHead, getButtons } from '../helper';

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
}
[data-kitzo-clippath] * {
  pointer-events: none !important;
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

export default function clippath(element, config = {}) {
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

        const { borderRadius, font, letterSpacing, lineHeight, border, boxSizing, padding, display } = window.getComputedStyle(btn);

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
          display,
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
