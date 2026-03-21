export type RouteDataType = {
  label?: string;
  slug?: string;
  children?: RouteDataType[];
};

const routeData: RouteDataType[] = [
  {
    label: 'Getting started',
    slug: 'getting-started',
    children: [
      {
        label: 'Installation',
        slug: 'installation',
      },
    ],
  },
  {
    label: 'Components',
    slug: 'components',
    children: [
      {
        label: 'Toaster',
        slug: 'toaster',
      },
      {
        label: 'Tooltip',
        slug: 'tooltip',
      },
    ],
  },
  {
    label: 'Hooks',
    slug: 'hooks',
    children: [
      {
        label: 'useDebounce',
        slug: 'use-debounce',
      },
      {
        label: 'useDebouncedCallback',
        slug: 'use-debounced-callback',
      },
      {
        label: 'useThrottle',
        slug: 'use-throttle',
      },
      {
        label: 'useLocalStorage',
        slug: 'use-local-storage',
      },
      {
        label: 'useWindowSize',
        slug: 'use-window-size',
      },
      {
        label: 'useCopy',
        slug: 'use-copy',
      },
    ],
  },
  {
    label: 'Functions',
    slug: 'functions',
    children: [
      {
        label: 'copy',
        slug: 'copy',
      },
    ],
  },
];

export default routeData;
