import type { CSSProperties, ReactNode } from 'react';
import addTooltipStyles from './helpers/addTooltipStyles';
import type { AnimationOptions, TooltipProps } from './types';
import getPositionClass from './helpers/getPositionClass';
import TooltipWrapper from './partials/TooltipWrapper';
import getAnimationProperties from './helpers/getAnimationProperties';

const isWindowThemeDark = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches;

export default function Tooltip(props: TooltipProps): ReactNode {
  const {
    content,
    children,
    position = 'top',
    // arrowStyle = {},
    animation = true,
    isHidden = false,
    offset = 8,
    // arrow = false,
    smartHover = true,
    hideOnTouch = true,
  } = props;

  let { isDark } = props;

  if (typeof isHidden === 'boolean' && isHidden) return children;

  if (content == null) {
    return children;
  }

  const finalOptions = {
    offset: !isNaN(Number(offset)) ? Number(offset) : 8,
    // arrow: typeof arrow === 'boolean' ? arrow : false,
    smartHover: typeof smartHover === 'boolean' ? smartHover : true,
    hideOnTouch: typeof hideOnTouch === 'boolean' ? hideOnTouch : true,
  };

  // Hide on touch device
  const isTouch = window.matchMedia('(pointer: coarse)').matches;
  if (isTouch && finalOptions.hideOnTouch) return children;

  const positionClass = getPositionClass(position);

  // Define animations
  const animationEnabled = animation ? true : false;
  const animationObj = animation === true ? {} : animation;
  const finalAnimationProperties = getAnimationProperties(
    animationObj as AnimationOptions,
  );

  // theme
  isDark = typeof isDark === 'boolean' ? isDark : isWindowThemeDark();

  // Add styles once
  addTooltipStyles();

  return (
    <div
      style={
        {
          position: 'relative',
          width: 'fit-content',
          '--offset': Math.max(0, finalOptions.offset),
          '--startDuration': Math.max(
            0,
            finalAnimationProperties.startDuration,
          ),
          '--endDuration': Math.max(0, finalAnimationProperties.endDuration),
          '--startDelay': Math.max(0, finalAnimationProperties.startDelay),
          '--endDelay': Math.max(0, finalAnimationProperties.endDelay),
          // '--arrow-color': arrowStyle?.['--arrow-color'],
          // '--arrow-size': arrowStyle?.['--arrow-size'],
        } as CSSProperties
      }
      className={`kitzo-tooltip-root ${isDark ? 'tooltip-theme-dark' : ''} ${finalOptions.smartHover ? 'smart-hover' : ''} ${animationEnabled ? 'animate-tooltip' : ''}`}
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
