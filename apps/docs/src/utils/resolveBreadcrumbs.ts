import type { RouteDataType } from '@/data/routeData';

export type Breadcrumb = {
  label: string;
  path: string;
};

export function resolveBreadcrumbs(pathname: string, tree: RouteDataType[]) {
  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs: Breadcrumb[] = [];

  let currentLevel = tree;
  let currentPath = '';

  for (const segment of segments) {
    const match = currentLevel.find((node) => node.slug === segment);

    if (!match) break;

    currentPath += `/${segment}`;

    breadcrumbs.push({
      label: match.label!,
      path: currentPath,
    });

    currentLevel = match.children || [];
  }

  return breadcrumbs;
}
