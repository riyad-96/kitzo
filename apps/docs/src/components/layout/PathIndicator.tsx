'use client';

import { Fragment, useLayoutEffect, useState } from 'react';
import routeData from '@/data/routeData';
import {
  resolveBreadcrumbs,
  type Breadcrumb,
} from '@/utils/resolve-breadcrumbs';
import { ChevronRight } from 'lucide-react';
import NavLink from '../snippets/NavLink';
import { usePathname } from 'next/navigation';

export default function PathIndicator() {
  const pathname = usePathname();
  const [crumbs, setCrumbs] = useState<Breadcrumb[]>([]);

  useLayoutEffect(() => {
    (() => {
      setCrumbs(resolveBreadcrumbs(pathname, routeData));
    })();
  }, [pathname]);

  return (
    <div className="flex items-center gap-1">
      {crumbs.map((c, i) => (
        <Fragment key={c.path}>
          {i !== 0 && (
            <span key={`nested-sign${i}`}>
              <ChevronRight size="14" />
            </span>
          )}

          <NavLink
            href={c.path}
            end
            className={(isActive) =>
              `text-sm ${isActive ? '' : 'not-hover:text-neutral-600 dark:not-hover:text-neutral-400'}`
            }
          >
            {c.label}
          </NavLink>
        </Fragment>
      ))}
    </div>
  );
}
