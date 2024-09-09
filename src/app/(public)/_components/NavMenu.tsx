"use client";

import Link from "next/link";

interface TypeNavLink {
  path: string;
  label: string;
}

export const NavMenu = ({ navbarLinks }: { navbarLinks: TypeNavLink[] }) => {
  return (
    <nav className='hidden md:ml-6 md:flex items-center'>
      <ul className='flex items-center space-x-4'>
        {navbarLinks.map((link) => (
          <li key={link.path}>
            <Link
              className='rounded-md px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300'
              href={link.path}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
