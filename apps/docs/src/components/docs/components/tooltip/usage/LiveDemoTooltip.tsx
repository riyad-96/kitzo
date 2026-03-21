import { useTooltipStore } from '@/store/components.store/tooltipPage.store';
import { Tooltip } from 'kitzo';

export default function LiveDemoTooltip() {
  const {
    position,
    offset,
    smartHover,
    hideOnTouch,
    isDark,
    isHidden,
    animation,
  } = useTooltipStore();

  return (
    <div
      className={`relative grid rounded-lg border border-neutral-200 p-6 dark:border-neutral-800 ${isDark ? 'bg-neutral-900 text-neutral-100' : 'bg-neutral-50 text-neutral-950'}`}
    >
      <span className="absolute top-6 left-6 text-sm font-medium">
        Live Demo
      </span>

      <div className="grid place-items-center max-lg:h-40">
        <Tooltip
          content="Tooltip content"
          position={position}
          offset={offset}
          smartHover={smartHover}
          hideOnTouch={hideOnTouch}
          dark={isDark}
          hidden={isHidden}
          animation={animation}
        >
          <button
            className={`rounded-lg border px-3 py-1.75 text-sm ${isDark ? 'border-neutral-700 bg-neutral-800 pointer-fine:hover:border-neutral-600 pointer-fine:hover:bg-neutral-700/50' : 'border-neutral-200 bg-white pointer-fine:hover:border-neutral-300 pointer-fine:hover:bg-neutral-100'}`}
          >
            Hover me
          </button>
        </Tooltip>
      </div>
    </div>
  );
}
