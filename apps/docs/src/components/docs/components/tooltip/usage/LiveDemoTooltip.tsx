import { Button } from '@/ui';
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
    <div className="relative grid rounded-lg border border-neutral-200 p-6 dark:border-neutral-800 dark:bg-neutral-900">
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
          <Button variant="outline">Hover me</Button>
        </Tooltip>
      </div>
    </div>
  );
}
