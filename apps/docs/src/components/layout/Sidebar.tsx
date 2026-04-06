'use client';

import routeData from '@/data/routeData';
import useSidebarStore from '@/store/sidebar.store';
import NavLink from '../snippets/NavLink';

export default function Sidebar() {
  const { isOpen, close } = useSidebarStore();

  return (
    <aside
      onClick={close}
      className={`transition-opacity max-md:fixed max-md:top-26.75 max-md:z-30 max-md:h-[calc(100vh-107px)] max-md:w-full max-md:bg-neutral-100/80 md:h-full dark:max-md:bg-neutral-950/80 ${isOpen ? 'max-md:opacity-100' : 'max-md:pointer-events-none max-md:opacity-0'}`}
    >
      <nav
        onClick={(e) => e.stopPropagation()}
        className={`h-full w-60 overflow-y-auto border-r border-neutral-200 bg-white max-md:transition-transform dark:border-neutral-800 dark:bg-neutral-950 ${isOpen ? 'max-md:translate-x-0' : 'max-md:-translate-x-1/1'}`}
      >
        <div className="p-3 md:p-4">
          {routeData.map((route) => (
            <div key={route.slug} className="my-6">
              <NavLink
                onClick={() => {
                  if (isOpen) close();
                }}
                href={`/${route.slug}`}
                className={(isActive) =>
                  `mb-2 block w-fit text-xs tracking-wider uppercase ${isActive ? 'font-bold text-neutral-900 dark:text-neutral-100' : 'font-medium text-neutral-500 dark:text-neutral-400 pointer-fine:hover:text-neutral-700 dark:pointer-fine:hover:text-neutral-300'}`
                }
              >
                {route.label}
              </NavLink>

              <div className="grid gap-2 border-l border-neutral-300 dark:border-neutral-700">
                {route.children?.map((nested) => {
                  const to = `/${route.slug}/${nested.slug}`;
                  return (
                    <NavLink
                      onClick={() => {
                        if (isOpen) close();
                      }}
                      className={(isActive) =>
                        `-ml-px flex h-6.5 w-fit items-center border-l px-3 text-sm tracking-wide transition-all duration-75 ${isActive ? 'border-neutral-800 font-semibold text-neutral-900 dark:border-neutral-200 dark:text-neutral-50' : 'border-neutral-300 text-neutral-600 dark:border-neutral-700 dark:text-neutral-400 pointer-fine:hover:border-neutral-500 pointer-fine:hover:text-neutral-800 dark:pointer-fine:hover:border-neutral-400 dark:pointer-fine:hover:text-neutral-200'}`
                      }
                      key={nested.slug}
                      href={to}
                    >
                      {nested.label}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </aside>
  );
}
