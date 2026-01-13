const o = `.kitzo-tooltip-root {
  --bg-clr: hsl(0, 0%, 15%);
  --text-clr: hsl(0, 0%, 95%);

  --transition-startDuration: calc(var(--startDuration) * 1ms);
  --transition-endDuration: calc(var(--endDuration) * 1ms);
  --transition-startDelay: calc(var(--startDelay) * 1ms);
  --transition-endDelay: calc(var(--endDelay) * 1ms);
}

.kitzo-tooltip-root.tooltip-theme-dark {
  --bg-clr: hsl(0, 0%, 95%);
  --text-clr: hsl(0, 0%, 15%);
}

.kitzo-tooltip-content-default-style {
  font-family:
    inherit,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
  font-size: 0.875rem;
  background-color: var(--bg-clr);
  color: var(--text-clr);
  padding-block: 0.25rem;
  padding-inline: 0.5rem;
  border-radius: 0.325rem;
}

/* Tooltip positioning */
.kitzo-tooltip-wrapper {
  --tooltip-offset: calc(var(--offset) * 1px + 1px);
  opacity: 0;
  transition-property: opacity;
  transition-delay: calc(
    var(--transition-endDuration) + var(--transition-endDelay)
  );
}

.kitzo-tooltip-root:hover .kitzo-tooltip-wrapper {
  opacity: 1;
  transition-delay: 0ms;
}

/* Top */
.kitzo-tooltip-wrapper.top {
  bottom: 100%;
  padding-block-end: var(--tooltip-offset);
}
.kitzo-tooltip-wrapper.top {
  left: 50%;
  translate: -50% 0;
}
.kitzo-tooltip-wrapper.top.start {
  left: 0;
  translate: 0 0;
}
.kitzo-tooltip-wrapper.top.end {
  left: auto;
  right: 0;
  translate: 0 0;
}

/* Right */
.kitzo-tooltip-wrapper.right {
  left: 100%;
  padding-inline-start: var(--tooltip-offset);
}
.kitzo-tooltip-wrapper.right {
  top: 50%;
  translate: 0 -50%;
}
.kitzo-tooltip-wrapper.right.start {
  top: 0;
  translate: 0 0;
}
.kitzo-tooltip-wrapper.right.end {
  top: 100%;
  translate: 0 -100%;
}

/* Bottom */
.kitzo-tooltip-wrapper.bottom {
  top: 100%;
  padding-block-start: var(--tooltip-offset);
}
.kitzo-tooltip-wrapper.bottom {
  left: 50%;
  translate: -50% 0;
}
.kitzo-tooltip-wrapper.bottom.start {
  left: 0;
  translate: 0 0;
}
.kitzo-tooltip-wrapper.bottom.end {
  left: 100%;
  translate: -100% 0;
}

/* Left */
.kitzo-tooltip-wrapper.left {
  right: 100%;
  padding-inline-end: var(--tooltip-offset);
}
.kitzo-tooltip-wrapper.left {
  top: 50%;
  translate: 0 -50%;
}
.kitzo-tooltip-wrapper.left.start {
  top: 0;
  translate: 0 0;
}
.kitzo-tooltip-wrapper.left.end {
  top: 100%;
  translate: 0 -100%;
}

/* Tooltip transitions */
.kitzo-tooltip-root.animate-tooltip {
  .kitzo-tooltip-content {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    backface-visibility: hidden;
    contain: layout paint;

    transition:
      transform var(--transition-endDuration) var(--transition-endDelay),
      opacity var(--transition-endDuration) var(--transition-endDelay);
  }
}

.kitzo-tooltip-content {
  transform: scale(0.8);
  opacity: 0;
}

.kitzo-tooltip-content.top {
  transform-origin: bottom;
}
.kitzo-tooltip-content.right {
  transform-origin: left;
}
.kitzo-tooltip-content.bottom {
  transform-origin: top;
}
.kitzo-tooltip-content.left {
  transform-origin: right;
}

.kitzo-tooltip-root.animate-tooltip:hover {
  .kitzo-tooltip-content {
    transition:
      transform var(--transition-startDuration) var(--transition-startDelay),
      opacity var(--transition-startDuration) var(--transition-startDelay);
  }
}
.kitzo-tooltip-root:hover {
  .kitzo-tooltip-content {
    transform: scale(1);
    opacity: 1;
  }
}

/* smart hover persistence feature */
.kitzo-tooltip-root {
  .kitzo-tooltip-wrapper {
    pointer-events: none;
  }
}
.kitzo-tooltip-root.smart-hover:hover {
  .kitzo-tooltip-wrapper {
    pointer-events: all;
  }
}`;
function i() {
  if (!document.getElementById("kitzo-tooltip-styles")) {
    const t = document.createElement("style");
    t.id = "kitzo-tooltip-styles", t.textContent = o, document.head.appendChild(t);
  }
}
export {
  i as default
};
