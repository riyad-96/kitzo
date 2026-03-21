'use client';

import Toggle from '@/components/snippets/Toggle';
import { positions } from '@/data/componentData/tooltipData';
import { useTooltipStore } from '@/store/components.store/tooltipPage.store';
import LiveDemoTooltip from './usage/LiveDemoTooltip';
import { BaseInput, SelectInput, Slider } from '@/components/snippets/Inputs';
import { type TooltipPosition } from 'kitzo';

export default function ConfigurationSection() {
  const {
    position,
    offset,
    smartHover,
    hideOnTouch,
    isDark,
    isHidden,
    animation,
    setPosition,
    setOffset,
    setSmartHover,
    setHideOnTouch,
    setIsDark,
    setIsHidden,
    setAnimation,
    resetAnimation,
  } = useTooltipStore();

  return (
    <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {/* Controls */}
      <div className="rounded-lg border border-neutral-200 p-6 dark:border-neutral-800">
        <h2 className="mb-6 text-sm font-medium dark:text-neutral-200">
          Configuration
        </h2>
        <div className="space-y-6">
          {/* Position Dropdown */}
          <div className="space-y-2">
            <label
              htmlFor="position-select"
              className="block text-sm text-neutral-700 dark:text-neutral-300"
            >
              Position
            </label>
            <SelectInput
              value={position}
              id="position-select"
              onChange={(e) => setPosition(e.target.value as TooltipPosition)}
            >
              {positions.map((pos) => (
                <SelectInput.option key={pos}>{pos}</SelectInput.option>
              ))}
            </SelectInput>
          </div>

          {/* Offset Slider */}
          <div className="space-y-2">
            <label className="block text-sm text-neutral-700 dark:text-neutral-300">
              Offset: {offset}px
            </label>

            <Slider
              type="range"
              min={0}
              max={32}
              value={offset}
              onChange={(e) => setOffset(Number(e.target.value))}
            />
          </div>

          {/* Toggles */}
          <div>
            <Toggle
              label="Smart Hover"
              checked={smartHover}
              onChange={(checked) => setSmartHover(checked)}
            />
            <Toggle
              label="Hide on Touch"
              checked={hideOnTouch}
              onChange={(checked) => setHideOnTouch(checked)}
            />
            <Toggle
              label="Dark Mode"
              checked={isDark}
              onChange={(checked) => setIsDark(checked)}
            />
            <Toggle
              label="Is Hidden"
              checked={isHidden}
              onChange={(checked) => setIsHidden(checked)}
            />
            <Toggle
              label="Animation"
              checked={animation !== false}
              onChange={(checked) =>
                setAnimation(
                  checked
                    ? {
                        startDuration: 110,
                        endDuration: 110,
                        startDelay: 0,
                        endDelay: 0,
                      }
                    : false,
                )
              }
            />

            {animation && (
              <div className="space-y-4">
                <div className="grid gap-2 border-t border-neutral-200 pt-4 md:grid-cols-2 dark:border-neutral-800">
                  <AnimationInput
                    label="Start duration"
                    value={
                      typeof animation === 'object'
                        ? animation.startDuration
                        : 0
                    }
                    onChange={(value) =>
                      setAnimation(
                        (prev) =>
                          typeof prev === 'object' && {
                            ...prev,
                            startDuration: Number(value),
                          },
                      )
                    }
                  />
                  <AnimationInput
                    label="End duration"
                    value={
                      typeof animation === 'object' ? animation.endDuration : 0
                    }
                    onChange={(value) =>
                      setAnimation(
                        (prev) =>
                          typeof prev === 'object' && {
                            ...prev,
                            endDuration: Number(value),
                          },
                      )
                    }
                  />
                  <AnimationInput
                    label="Start delay"
                    value={
                      typeof animation === 'object' ? animation.startDelay : 0
                    }
                    onChange={(value) =>
                      setAnimation(
                        (prev) =>
                          typeof prev === 'object' && {
                            ...prev,
                            startDelay: Number(value),
                          },
                      )
                    }
                  />
                  <AnimationInput
                    label="End delay"
                    value={
                      typeof animation === 'object' ? animation.endDelay : 0
                    }
                    onChange={(value) =>
                      setAnimation(
                        (prev) =>
                          typeof prev === 'object' && {
                            ...prev,
                            endDelay: Number(value),
                          },
                      )
                    }
                  />
                </div>

                <button
                  onClick={resetAnimation}
                  className="rounded-md border border-neutral-200 px-3 py-1.5 text-xs text-neutral-700 dark:border-neutral-800 dark:text-neutral-300 pointer-fine:hover:bg-neutral-100 dark:pointer-fine:hover:bg-neutral-900"
                >
                  Reset
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <LiveDemoTooltip />
    </section>
  );
}

type AnimationInputProps = {
  label: string;
  onChange: (value: string) => void;
  value?: number;
};

function AnimationInput({ label, onChange, value }: AnimationInputProps) {
  return (
    <div className="grid gap-1">
      <label
        className="pl-0.5 text-sm text-neutral-700 dark:text-neutral-300"
        htmlFor={label.replaceAll(' ', '')}
      >
        {label}
      </label>
      <BaseInput
        id={label.replaceAll(' ', '')}
        type="number"
        step={50}
        min={0}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
