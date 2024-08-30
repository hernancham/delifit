import Link from "next/link";
import { auth } from "@/auth";

import { DelifitLogo } from "@/components/custom/DelifitLogo";
import { ThemeToggler } from "@/components/custom/ThemeToggler";
import { OptionsAuth } from "./OptionsAuth";
import { cn } from "@/lib/utils";

const navbarLinks = [
  { path: "/dashboard", label: "Dashboard" },
  { path: "/admin", label: "Admin" },
  { path: "/mi-cuenta", label: "Mi cuenta" },
  { path: "/preguntas-frecuentes", label: "FAQ" },
  { path: "/mi-cuenta", label: "Mi cuenta" },
];

export const Navbar = async () => {
  const session = await auth();
  return (
    <header className='bg-lime-100 dark:bg-gray-800'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='relative flex h-16 items-center justify-between'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            {/* <SheetMenu navbarLinks={navbarLinks} /> */}
          </div>
          <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='flex flex-shrink-0 items-center'>
              <DelifitLogo className='bg-lime-50 rounded-full size-10' />
            </div>
            <div className='hidden sm:ml-6 sm:flex items-center '>
              <nav>
                <ul className='flex items-center space-x-4'>
                  {navbarLinks.map((link) => (
                    <li key={link.path}>
                      <Link
                        className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
                        href={link.path}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-2'>
            <ThemeToggler className='' />
            {session ? (
              <OptionsAuth user={session.user} />
            ) : (
              <Link
                className='block rounded-md bg-lime-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-lime-700'
                href='/login'
              >
                Login
              </Link>
            )}
            {/* <ShopCar /> */}
          </div>
        </div>
      </div>
    </header>
  );
};
