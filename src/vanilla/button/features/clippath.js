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
  font-family: inherit;
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
      textOption: null,
      clippathSize: '20%',
      smooth: true,
      class: '',
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
        clippathDiv.removeAttribute('style');
        const { textOption, clippathSize, smooth, style } = clippathConfigMap.get(btn);

        const { top, left, width, height } = btn.getBoundingClientRect();
        const cloned = btn.cloneNode(true);
        cloned.className = cloned.className + ` ${clippathConfigMap.get(btn).class}`;
        cloned.removeAttribute('data-kitzo-clippath');
        cloned.setAttribute('data-temp-clippath-el', true);
        Object.assign(cloned.style, {
          backgroundColor: '#01c2b8',
          color: 'white',
          fontFamily: getComputedStyle(btn).fontFamily || 'inherit',
          ...style,
        });

        if (textOption && textOption instanceof Object) {
          const target = cloned.querySelector(textOption.selector);
          if (target && (typeof textOption.value === 'string' || typeof textOption.value === 'number')) {
            target.textContent = textOption.value;
          }
        }

        clippathDiv.style.width = `${width}px`;
        clippathDiv.style.height = `${height}px`;
        clippathDiv.style.translate = `${left}px ${top}px`;
        clippathDiv.style.setProperty('--kitzo-clippath-size', getClippathSize(clippathSize));
        clippathDiv.style.setProperty('--kitzo-clippath-transition', smooth ? 'clip-path 150ms ease-out, opacity 150ms' : 'none');
        clippathDiv.appendChild(cloned);
        requestAnimationFrame(() => {
          clippathDiv.classList.add('show');
        });
      }
    });
    document.addEventListener('mouseout', (e) => {
      const btn = e.target.closest('[data-kitzo-clippath]');
      if (btn) {
        const { smooth } = clippathConfigMap.get(btn);
        clippathDiv.classList.remove('show');
        setTimeout(
          () => {
            clippathDiv.querySelectorAll('[data-temp-clippath-el]').forEach((el) => el.remove());
          },
          smooth ? 150 : 0 || 150
        );
      }
    });

    document.addEventListener('mousemove', (e) => {
      if (!isHovering) return;

      const btn = e.target.closest('[data-kitzo-clippath]');
      if (btn) {
        const { left, top } = btn.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        clippathDiv.style.setProperty('--kitzo-clippath-pos-x', `${x}px`);
        clippathDiv.style.setProperty('--kitzo-clippath-pos-y', `${y}px`);
      }
    });

    isClippathListenersAdded = true;
  }
}
