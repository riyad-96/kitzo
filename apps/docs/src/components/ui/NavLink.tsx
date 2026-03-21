'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLinkProps = {
  href: string;
  className?: ((isActive: boolean) => string) | string;
  onClick?: () => void;
  children?: React.ReactNode;
  end?: boolean;
};

export default function NavLink({
  href,
  className,
  onClick,
  children,
  end = false,
}: NavLinkProps) {
  const pathname = usePathname();

  const isActive =
    href === '/'
      ? pathname === '/'
      : end
        ? pathname === href
        : pathname.startsWith(`${href}/`) || pathname === href;

  const classNames =
    typeof className === 'function' ? className(isActive) : className;

  return (
    <Link
      href={href}
      className={classNames}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </Link>
  );
}
