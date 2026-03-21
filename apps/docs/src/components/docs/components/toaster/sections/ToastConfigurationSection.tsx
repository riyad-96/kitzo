'use client';

import CodeBlock from '@/components/code/CodeBlock';
import PreviewButton from '@/components/snippets/PreviewButton';
import Toggle from '@/components/snippets/Toggle';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  Slider,
} from '@/ui';
import {
  useToasterStore,
  type Positions,
} from '@/store/components.store/toasterPage.store';
import { toast } from 'kitzo';

const positions = [
  'top-left',
  'top-center',
  'top-right',
  'bottom-left',
  'bottom-center',
  'bottom-right',
];

type ToastType =
  | 'default'
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'loading';

export default function ConfigurationSection() {
  const {
    position,
    setPosition,
    richColors,
    setRichColors,
    dark,
    setIsDark,
    gap,
    setGap,
    animateTransformOrigin,
    setAnimateTransformOrigin,
    pauseOnHover,
    setPauseOnHover,
    swipeToClose,
    setSwipeToClose,
    edgeOffset,
    setEdgeOffset,
    animateScale,
    setAnimateScale,
    compact,
    setCompact,
  } = useToasterStore();

  return (
    <section className="mb-12">
      <h2 className="mb-6 text-xl font-medium">Global Configuration</h2>
      <div className="gap-4 max-lg:space-y-4 lg:flex">
        <div className="flex-1 space-y-4 rounded-md border border-neutral-200 p-6 dark:border-neutral-800">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="position"
              className="text-sm text-neutral-700 dark:text-neutral-300"
            >
              Position
            </label>

            {/* <SelectInput
              id="position"
              value={position}
              onChange={(e) => setPosition(e.target.value as Positions)}
            >
              {positions.map((pos) => (
                <option key={pos} value={pos}>
                  {pos}
                </option>
              ))}
            </SelectInput> */}

            <Select
              value={position}
              onValueChange={(v) => setPosition(v as Positions)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder={position} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Positions</SelectLabel>
                  {positions.map((pos) => (
                    <SelectItem key={pos} value={pos}>
                      {pos}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Gap */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="gap"
              className="text-sm text-neutral-700 dark:text-neutral-300"
            >
              Gap: {gap}px
            </label>
            <Slider
              id="gap"
              min={0}
              max={32}
              value={[gap]}
              onValueChange={(v) => setGap(v[0])}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="edgeOffset"
              className="text-sm text-neutral-700 dark:text-neutral-300"
            >
              Edge offset: {edgeOffset}px
            </label>
            <Slider
              id="edgeOffset"
              step={1}
              min={0}
              max={32}
              value={[edgeOffset]}
              onValueChange={(v) => setEdgeOffset(v[0])}
            />
          </div>

          <div className="flex flex-col justify-center">
            <Toggle
              label="Dark mode"
              checked={dark}
              onChange={(checked) => setIsDark(checked)}
            />
            <Toggle
              label="Compact mode"
              checked={compact}
              onChange={(checked) => {
                setGap(checked ? 8 : 12);
                setCompact(checked);
              }}
            />
            <Toggle
              label="Rich colors"
              checked={richColors}
              onChange={(checked) => setRichColors(checked)}
            />
            <Toggle
              label="Pause on hover"
              checked={pauseOnHover}
              onChange={(checked) => setPauseOnHover(checked)}
            />
            <Toggle
              label="Swipe to close"
              checked={swipeToClose}
              onChange={(checked) => setSwipeToClose(checked)}
            />
            <Toggle
              label="Animate scale"
              checked={animateScale}
              onChange={(checked) => setAnimateScale(checked)}
            />
            <Toggle
              label="Animate transform origin"
              checked={animateTransformOrigin}
              onChange={(checked) => setAnimateTransformOrigin(checked)}
            />
          </div>
        </div>

        <div className="relative grid flex-1 place-items-center rounded-md border border-neutral-200 bg-neutral-50 max-lg:h-40 dark:border-neutral-800 dark:bg-neutral-900">
          <span className="absolute top-6 left-6 text-sm font-medium">
            Preview
          </span>

          <div className="flex gap-2">
            <PreviewButton
              onClick={() => {
                const types: ToastType[] = [
                  'default',
                  'success',
                  'error',
                  'warning',
                  'info',
                  'loading',
                ];

                toast('Toast message', {
                  position,
                  type: types[Math.floor(Math.random() * types.length)],
                  duration: 3500,
                  animateTransformOrigin,
                });
              }}
            >
              Toast
            </PreviewButton>
            <PreviewButton onClick={() => toast.dismiss()}>
              Dismiss all
            </PreviewButton>
          </div>
        </div>
      </div>
      {/* Position */}

      {/* Code Snippet for Config */}
      <div className="mt-6">
        <CodeBlock
          // className="h-54.5"
          fileName="App.tsx"
          code={`import { Toaster } from 'kitzo';

export default function App() {
  return (
    <div>
      <span>App</span>

      <Toaster 
        position="${position}"
        gap={${gap}}
        edgeOffset={${edgeOffset}}
        dark={${dark}}
        compact={${compact}}
        richColors={${richColors}}
        pauseOnHover={${pauseOnHover}}
        swipeToClose={${swipeToClose}}
        animateScale={${animateScale}}
        animateTransformOrigin={${animateTransformOrigin}}
      />
    </div>
  )
}`}
        />
      </div>
    </section>
  );
}
