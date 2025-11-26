const tooltipStyles = `
.kitzo-react-tooltip-content-default-style {
  font-family:
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
  background-color: hsl(0, 0%, 15%);
  color: hsl(0, 0%, 95%);
  padding-block: 0.25rem;
  padding-inline: 0.5rem;
  border-radius: 0.325rem;

  @media (prefers-color-scheme: dark) {
    background-color: hsl(0, 0%, 95%);
    color: hsl(0, 0%, 15%);
  }
}

.kitzo-react-tooltip-wrapper {
  --tooltip-transition-delay: calc(var(--delay) * 1ms);
  will-change: transform, opacity;
  transition:
    transform 110ms var(--tooltip-transition-delay),
    opacity 110ms var(--tooltip-transition-delay);
}

.kitzo-react-tooltip-wrapper.top {
  --tooltip-offset: calc(var(--offset) * 1px);

  bottom: calc(var(--tooltip-offset) + 100%);
  left: 50%;
  transform: translateX(-50%) translateY(0) scale(0.8);
  opacity: 0;
  transform-origin: bottom;
}

.kitzo-react-tooltip-wrapper.right {
  --tooltip-offset: calc(var(--offset) * 1px);

  left: calc(var(--tooltip-offset) + 100%);
  top: 50%;
  transform: translateX(0) translateY(-50%) scale(0.8);
  opacity: 0;
  transform-origin: left;
}

.kitzo-react-tooltip-wrapper.bottom {
  --tooltip-offset: calc(var(--offset) * 1px);

  top: calc(var(--tooltip-offset) + 100%);
  left: 50%;
  transform: translateX(-50%) translateY(0) scale(0.8);
  opacity: 0;
  transform-origin: top;
}

.kitzo-react-tooltip-wrapper.left {
  --tooltip-offset: calc(var(--offset) * 1px);

  right: calc(var(--tooltip-offset) + 100%);
  top: 50%;
  transform: translateX(0) translateY(-50%) scale(0.8);
  opacity: 0;
  transform-origin: right;
}

.kitzo-react-tooltip-root:hover {
  .kitzo-react-tooltip-wrapper.top {
    transform: translateX(-50%) translateY(0) scale(1);
    opacity: 1;
  }
  .kitzo-react-tooltip-wrapper.right {
    transform: translateX(0) translateY(-50%) scale(1);
    opacity: 1;
  }
  .kitzo-react-tooltip-wrapper.bottom {
    transform: translateX(-50%) translateY(0) scale(1);
    opacity: 1;
  }
  .kitzo-react-tooltip-wrapper.left {
    transform: translateX(0) translateY(-50%) scale(1);
    opacity: 1;
  }
}
`;

(() => {
  if (!document.getElementById('kitzo-react-tooltip-styles')) {
    const styleTag = document.createElement('style');
    styleTag.id = 'kitzo-react-tooltip-styles';
    styleTag.textContent = tooltipStyles;
    document.head.appendChild(styleTag);
  }
})();

const allowedPositions = ['top', 'right', 'bottom', 'left'];

function getPositionBasedClassName(position) {
  let defaultClass = 'kitzo-react-tooltip-wrapper';
  if (allowedPositions.includes(position)) {
    return defaultClass + ' ' + position;
  } else {
    return defaultClass + ' ' + 'top';
  }
}

function Tooltip({ content = 'Tooltip', tooltipOptions = {}, children }) {
  const { position = 'top', offset = 8, hideOnTouch = true, delay = 0 } = tooltipOptions ?? {};

  const finalOptions = {
    position: typeof position === 'string' ? position.trim().toLowerCase() : 'top',
    offset: !isNaN(Number(offset)) ? Number(offset) : 8,
    delay: !isNaN(Number(delay)) ? Number(delay) : 0,
    hideOnTouch: typeof hideOnTouch === 'boolean' ? hideOnTouch : true,
  };

  const isTouch = window.matchMedia('(pointer: coarse)').matches;
  if (isTouch && finalOptions.hideOnTouch) return children;

  return (
    <div
      style={{
        position: 'relative',
        width: 'fit-content',
        '--offset': Math.max(0, finalOptions.offset),
        '--delay': Math.max(0, finalOptions.delay),
      }}
      className="kitzo-react-tooltip-root"
    >
      {/* User string/component */}
      {children}

      <div
        style={{
          position: 'absolute',
          textWrap: 'nowrap',
          pointerEvents: 'none',
        }}
        tabIndex={-1}
        className={getPositionBasedClassName(finalOptions.position)}
      >
        {typeof content === 'string' || typeof content === 'number' ? (
          <div className="kitzo-react-tooltip-content-default-style">{content}</div>
        ) : (
          <>{content}</>
        )}
      </div>
    </div>
  );
}

export default Tooltip;
