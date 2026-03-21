'use client';

import { SidebarOpenerSvg } from '@/assets/Svgs';
import useSidebarStore from '@/store/sidebar.store';
import PathIndicator from './PathIndicator';

export default function PageNavigationViewBar() {
  const { isOpen, toggle } = useSidebarStore();

  return (
    <div className="sticky top-14.25 z-19 flex h-12.5 items-center border-b border-neutral-200 px-4 md:hidden dark:border-neutral-800">
      <div className="flex items-center gap-6">
        <div className="relative">
          <button
            onClick={toggle}
            className={`absolute -inset-1.25 z-1 rounded-sm ${isOpen ? 'bg-neutral-500/15' : 'pointer-fine:hover:bg-neutral-500/15'}`}
          ></button>
          <span className="pointer-events-none relative z-2">
            <SidebarOpenerSvg />
          </span>
        </div>

        <PathIndicator />
      </div>
    </div>
  );
}
