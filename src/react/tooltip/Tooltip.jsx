const tooltipStyles = `
.kitzo-react-tooltip-content-default-style {
  font-family: sans-serif;
  font-size: 0.875rem;
  background-color: hsl(0, 0%, 15%);
  color: hsl(0, 0%, 95%);
  padding-block: 8px;
  padding-inline: 10px;
  border-radius: 0.325rem;

  @media (prefers-color-scheme: dark) {
    background-color: hsl(0, 0%, 95%);
    color: hsl(0, 0%, 15%);
  }
}

.kitzo-react-tooltip-wrapper {
  transition-duration: 120ms, 50ms;
  transition-property: scale opacity;
}

.kitzo-react-tooltip-wrapper.top {
  --tooltip-offset: calc(var(--offset) * 1px);

  bottom: calc(var(--tooltip-offset) + 100%);
  left: 50%;
  translate: -50% 0;
  scale: 0.7;
  opacity: 0;
  transform-origin: bottom;
}

.kitzo-react-tooltip-wrapper.right {
  --tooltip-offset: calc(var(--offset) * 1px);

  left: calc(var(--tooltip-offset) + 100%);
  top: 50%;
  translate: 0 -50%;
  scale: 0.7;
  opacity: 0;
  transform-origin: left;
}

.kitzo-react-tooltip-wrapper.bottom {
  --tooltip-offset: calc(var(--offset) * 1px);

  top: calc(var(--tooltip-offset) + 100%);
  left: 50%;
  translate: -50% 0;
  scale: 0.7;
  opacity: 0;
  transform-origin: top;
}

.kitzo-react-tooltip-wrapper.left {
  --tooltip-offset: calc(var(--offset) * 1px);

  right: calc(var(--tooltip-offset) + 100%);
  top: 50%;
  translate: 0 -50%;
  scale: 0.7;
  opacity: 0;
  transform-origin: right;
}

.kitzo-react-tooltip-root:hover {
  .kitzo-react-tooltip-wrapper.top {
    scale: 1;
    opacity: 1;
  }
  .kitzo-react-tooltip-wrapper.right {
    scale: 1;
    opacity: 1;
  }
  .kitzo-react-tooltip-wrapper.bottom {
    scale: 1;
    opacity: 1;
  }
  .kitzo-react-tooltip-wrapper.left {
    scale: 1;
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

function getPositionBasedClassName(position) {
  let defaultClass = 'kitzo-react-tooltip-wrapper';

  const allowedPositions = ['top', 'right', 'bottom', 'left'];

  if (allowedPositions.includes(position)) {
    return defaultClass + ' ' + position;
  } else {
    return defaultClass + ' ' + 'top';
  }
}

function Tooltip({ content = 'Tooltip', position = '', offset = 8, children }) {
  // sanitize props
  if (typeof position !== 'string') {
    console.warn(`[kitzo/react]: Tooltip position ignored due to invalid data type.`);
    position = 'top';
  }
  if (isNaN(Number(offset))) offset = 8;

  return (
    <div
      style={{
        position: 'relative',
        width: 'fit-content',
        '--offset': Math.max(0, offset),
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
        className={getPositionBasedClassName(position.trim().toLowerCase())}
      >
        {typeof content === 'string' || typeof content === 'number' ? <div className="kitzo-react-tooltip-content-default-style">{content}</div> : <>{content}</>}
      </div>
    </div>
  );
}

export default Tooltip;
