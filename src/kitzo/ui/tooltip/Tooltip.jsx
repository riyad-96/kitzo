// import './style.css';
const tooltipStyles = `/* Default styling */
.kitzo-react-tooltip-root {
  --bg-clr: hsl(0, 0%, 15%);
  --text-clr: hsl(0, 0%, 95%);

  @media (prefers-color-scheme: dark) {
    --bg-clr: hsl(0, 0%, 95%);
    --text-clr: hsl(0, 0%, 15%);
  }
}

.kitzo-react-tooltip-content-default-style {
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
.kitzo-react-tooltip-wrapper {
  --tooltip-offset: calc(var(--offset) * 1px + 1px);
}
/* Top */
.kitzo-react-tooltip-wrapper.top {
  bottom: 100%;
  padding-block-end: var(--tooltip-offset);
}
.kitzo-react-tooltip-wrapper.top {
  left: 50%;
  translate: -50% 0;
}
.kitzo-react-tooltip-wrapper.top.start {
  left: 0;
  translate: 0 0;
}
.kitzo-react-tooltip-wrapper.top.end {
  right: 0;
  translate: 0 0;
}

/* Right */
.kitzo-react-tooltip-wrapper.right {
  left: 100%;
  padding-inline-start: var(--tooltip-offset);
}
.kitzo-react-tooltip-wrapper.right {
  top: 50%;
  translate: 0 -50%;
}
.kitzo-react-tooltip-wrapper.right.start {
  top: 0;
  translate: 0 0;
}
.kitzo-react-tooltip-wrapper.right.end {
  top: 100%;
  translate: 0 -100%;
}

/* Bottom */
.kitzo-react-tooltip-wrapper.bottom {
  top: 100%;
  padding-block-start: var(--tooltip-offset);
}
.kitzo-react-tooltip-wrapper.bottom {
  left: 50%;
  translate: -50% 0;
}
.kitzo-react-tooltip-wrapper.bottom.start {
  left: 0;
  translate: 0 0;
}
.kitzo-react-tooltip-wrapper.bottom.end {
  left: 100%;
  translate: -100% 0;
}

/* Left */
.kitzo-react-tooltip-wrapper.left {
  right: 100%;
  padding-inline-end: var(--tooltip-offset);
}
.kitzo-react-tooltip-wrapper.left {
  top: 50%;
  translate: 0 -50%;
}
.kitzo-react-tooltip-wrapper.left.start {
  top: 0;
  translate: 0 0;
}
.kitzo-react-tooltip-wrapper.left.end {
  top: 100%;
  translate: 0 -100%;
}

/* Tooltip transitions */
.kitzo-react-tooltip-root.animate-tooltip {
  --transition-startDuration: calc(var(--startDuration) * 1ms);
  --transition-endDuration: calc(var(--endDuration) * 1ms);
  --transition-startDelay: calc(var(--startDelay) * 1ms);
  --transition-endDelay: calc(var(--endDelay) * 1ms);

  .kitzo-react-tooltip-content {
    transition:
      transform var(--transition-endDuration) var(--transition-endDelay),
      opacity var(--transition-endDuration) var(--transition-endDelay);
  }
}

.kitzo-react-tooltip-content {
  transform: scale(0.8);
  opacity: 0;
}

.kitzo-react-tooltip-content.top {
  transform-origin: bottom;
}
.kitzo-react-tooltip-content.right {
  transform-origin: left;
}
.kitzo-react-tooltip-content.bottom {
  transform-origin: top;
}
.kitzo-react-tooltip-content.left {
  transform-origin: right;
}

.kitzo-react-tooltip-root.animate-tooltip:hover {
  .kitzo-react-tooltip-content {
    transition:
      transform var(--transition-startDuration) var(--transition-startDelay),
      opacity var(--transition-startDuration) var(--transition-startDelay);
  }
}
.kitzo-react-tooltip-root:hover {
  .kitzo-react-tooltip-content {
    transform: scale(1);
    opacity: 1;
  }
}

/* smart hover persistence feature */
.kitzo-react-tooltip-root {
  .kitzo-react-tooltip-wrapper {
    pointer-events: none;
  }
}
.kitzo-react-tooltip-root.smart-hover:hover {
  .kitzo-react-tooltip-wrapper {
    pointer-events: all;
  }
}

/* Arrow */
.kitzo-react-tooltip-content.tooltip-arrow {
  --effective-size: calc(var(--arrow-size, 6) * 1px);
  --effective-color: var(--arrow-color, var(--bg-clr));

  position: relative;
}
.kitzo-react-tooltip-content.tooltip-arrow::before {
  content: '';
  position: absolute;
  z-index: -1;
  border: var(--effective-size) solid transparent;
}
.kitzo-react-tooltip-content.tooltip-arrow.top::before {
  left: 50%;
  translate: -50% 0;
  top: calc(100% - 1px);
  border-top: var(--effective-size) solid var(--effective-color);
}
.kitzo-react-tooltip-content.tooltip-arrow.right::before {
  top: 50%;
  translate: 0 -50%;
  right: calc(100% - 1px);
  border-right: var(--effective-size) solid var(--effective-color);
}
.kitzo-react-tooltip-content.tooltip-arrow.bottom::before {
  left: 50%;
  translate: -50% 0;
  bottom: calc(100% - 1px);
  border-bottom: var(--effective-size) solid var(--effective-color);
}
.kitzo-react-tooltip-content.tooltip-arrow.left::before {
  top: 50%;
  translate: 0 -50%;
  left: calc(100% - 1px);
  border-left: var(--effective-size) solid var(--effective-color);
}`;

(() => {
  if (!document.getElementById('kitzo-react-tooltip-styles')) {
    const styleTag = document.createElement('style');
    styleTag.id = 'kitzo-react-tooltip-styles';
    styleTag.textContent = tooltipStyles;
    document.head.appendChild(styleTag);
  }
})();

const allowedPositions = [
  'top-start',
  'top',
  'top-end',
  'right-start',
  'right',
  'right-end',
  'bottom-start',
  'bottom',
  'bottom-end',
  'left-start',
  'left',
  'left-end',
];

function getPositionClass(position = '') {
  const allowedPos = allowedPositions.find((p) => p === position);
  if (!allowedPos) return 'top';

  if (allowedPos.includes('-')) {
    const [dir, state] = allowedPos.split('-');
    return `${dir} ${state}`;
  } else {
    return allowedPos;
  }
}

function getAnimationProperties(animation) {
  const effectiveStartDelay = animation?.startDelay;
  const effectiveEndDelay = animation?.endDelay;
  const effectiveDelay = animation?.delay ?? 0;

  const effectiveStartDuration = animation?.startDuration;
  const effectiveEndDuration = animation?.endDuration;
  const effectiveDuration = animation?.duration ?? 110;

  return {
    startDelay: effectiveStartDelay ?? effectiveDelay,
    endDelay: effectiveEndDelay ?? effectiveDelay,
    startDuration: effectiveStartDuration ?? effectiveDuration,
    endDuration: effectiveEndDuration ?? effectiveDuration,
  };
}

export default function Tooltip({
  content,
  tooltipOptions = {},
  animation = true,
  style = {},
  isHidden = false,
  children,
}) {
  if (typeof isHidden === 'boolean' && isHidden) return children;

  if (typeof content === 'string') {
    if (!content.trim()) throw new Error("kitzo: tooltip 'content' property is required");
  } else if (!content) {
    throw new Error("kitzo: tooltip 'content' property is required");
  }
  // Define options
  const {
    position = 'top',
    offset = 8,
    hideOnTouch = true,
    arrow = false,
    smartHover = true,
  } = tooltipOptions ?? {};

  const finalOptions = {
    position: typeof position === 'string' ? position.trim().toLowerCase() : 'top',
    offset: !isNaN(Number(offset)) ? Number(offset) : 8,
    arrow: typeof arrow === 'boolean' ? arrow : false,
    smartHover: typeof smartHover === 'boolean' ? smartHover : true,
    hideOnTouch: typeof hideOnTouch === 'boolean' ? hideOnTouch : true,
  };

  // Hide on touch device
  const isTouch = window.matchMedia('(pointer: coarse)').matches;
  if (isTouch && finalOptions.hideOnTouch) return children;

  const positionClass = getPositionClass(finalOptions.position);

  // Define animations
  const animationEnabled = animation ? true : false;
  const animationObj = animation === true ? {} : animation;
  const finalAnimationProperties = getAnimationProperties(animationObj);

  return (
    <div
      style={{
        position: 'relative',
        width: 'fit-content',
        '--offset': Math.max(0, finalOptions.offset),
        '--startDuration': Math.max(0, finalAnimationProperties.startDuration),
        '--endDuration': Math.max(0, finalAnimationProperties.endDuration),
        '--startDelay': Math.max(0, finalAnimationProperties.startDelay),
        '--endDelay': Math.max(0, finalAnimationProperties.endDelay),
        '--arrow-color': style?.['--arrow-color'],
        '--arrow-size': style?.['--arrow-size'],
      }}
      className={`kitzo-react-tooltip-root ${finalOptions.smartHover ? 'smart-hover' : ''} ${animationEnabled ? 'animate-tooltip' : ''}`}
    >
      {/* children string or component */}
      {children}

      <div
        style={{
          position: 'absolute',
          whiteSpace: typeof content === 'string' ? 'nowrap' : 'normal',
        }}
        tabIndex={-1}
        className={`kitzo-react-tooltip-wrapper ${positionClass}`}
      >
        <div
          className={`kitzo-react-tooltip-content ${positionClass} ${finalOptions.arrow ? 'tooltip-arrow' : ''}`}
        >
          {typeof content === 'string' || typeof content === 'number' ? (
            <div className="kitzo-react-tooltip-content-default-style">{content}</div>
          ) : (
            <>{content}</>
          )}
        </div>
      </div>
    </div>
  );
}
