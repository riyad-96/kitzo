'use client';

import CodeBlock from '@/components/code/CodeBlock';
import { useTooltipStore } from '@/store/components.store/tooltipPage.store';

export default function TooltipCode() {
  const {
    position,
    offset,
    smartHover,
    hideOnTouch,
    isDark,
    isHidden,
    animation,
  } = useTooltipStore();

  const getAnimationString = () => {
    if (typeof animation === 'boolean') return 'false';

    return `{
    startDuration: ${animation.startDuration},
    endDuration: ${animation.endDuration},
    startDelay: ${animation.startDelay},
    endDelay: ${animation.endDelay},
  }`;
  };

  return (
    <CodeBlock
      fileName="Tooltip.tsx"
      code={`import { Tooltip } from 'kitzo';
    
<Tooltip
  content="Tooltip content"
  position="${position}"
  offset={${offset}}
  smartHover={${smartHover}}
  hideOnTouch={${hideOnTouch}}
  isDark={${isDark}}
  isHidden={${isHidden}}
  animation={${getAnimationString()}}
>
  <button>Hover me</button>
</Tooltip>`}
    />
  );
}
