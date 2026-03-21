import type { AnimationOptions } from '../types';

export default function getAnimationProperties(animation: AnimationOptions) {
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
