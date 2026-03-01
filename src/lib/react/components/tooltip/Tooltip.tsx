import React, { type CSSProperties, type ReactNode } from 'react';
import addTooltipStyles from './helpers/addTooltipStyles';
import type { AnimationOptions, TooltipProps } from './types';
import getPositionClass from './helpers/getPositionClass';
import TooltipWrapper from './partials/TooltipWrapper';
import getAnimationProperties from './helpers/getAnimationProperties';

export function Tooltip(props: TooltipProps): ReactNode {
  const {
    content,
    children,
    position = 'top',
    animation = true,
    hidden = false,
    offset = 8,
    smartHover = true,
    hideOnTouch = true,
    dark,
  } = props;

  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
    addTooltipStyles();
  }, []);

  if (!isMounted) return <>{children}</>;

  if (typeof hidden === 'boolean' && hidden) return <>{children}</>;

  if (content == null) {
    return <>{children}</>;
  }

  // define final options
  const finalOptions = {
    offset: !isNaN(Number(offset)) ? Number(offset) : 8,
    smartHover: typeof smartHover === 'boolean' ? smartHover : true,
    hideOnTouch: typeof hideOnTouch === 'boolean' ? hideOnTouch : true,
  };

  // theme & touch
  let prefersDark = false;
  let isTouch = false;

  if (typeof window !== 'undefined') {
    isTouch =
      window.matchMedia('(pointer: coarse)').matches ||
      navigator.maxTouchPoints > 0;

    prefersDark =
      typeof dark === 'boolean'
        ? dark
        : window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  if (isTouch && finalOptions.hideOnTouch) return children;

  // get position class
  const positionClass = getPositionClass(position);

  // Define animations
  const animationEnabled = animation ? true : false;
  const animationObj = animation === true ? {} : animation;
  const finalAnimationProperties = getAnimationProperties(
    animationObj as AnimationOptions,
  );

  return (
    <div
      style={
        {
          position: 'relative',
          inlineSize: 'fit-content',
          '--offset': Math.max(0, finalOptions.offset),
          '--startDuration': Math.max(
            0,
            finalAnimationProperties.startDuration,
          ),
          '--endDuration': Math.max(0, finalAnimationProperties.endDuration),
          '--startDelay': Math.max(0, finalAnimationProperties.startDelay),
          '--endDelay': Math.max(0, finalAnimationProperties.endDelay),
        } as CSSProperties
      }
      className={`kitzo-tooltip-root ${prefersDark ? 'dark tooltip-theme-dark' : ''} ${finalOptions.smartHover ? 'smart-hover' : ''} ${animationEnabled ? 'animate-tooltip' : ''}`}
    >
      {children}

      <TooltipWrapper
        content={content}
        positionClass={positionClass}
        finalOptions={finalOptions}
      />
    </div>
  );
}
