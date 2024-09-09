import Link from "next/link";
import { auth } from "@/auth";

import { DelifitLogo } from "@/components/custom/DelifitLogo";
import { ThemeToggler } from "@/components/custom/ThemeToggler";
import { OptionsAuth } from "@/components/custom/OptionsAuth";
import { SheetMenu } from "./SheetMenu";
import { NavMenu } from "./NavMenu";

const navbarLinks = [
  { path: "/dashboard", label: "Dashboard" },
  { path: "/admin", label: "Admin" },
  { path: "/sobre-nosotros", label: "Sobre nosotros" },
  { path: "/preguntas-frecuentes", label: "FAQ" },
  { path: "/mi-cuenta", label: "Mi cuenta" },
];

export const Navbar = async () => {
  const session = await auth();
  return (
    <header className='bg-lime-100 dark:bg-gray-800 fixed w-screen z-50'>
      <div className=' mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='relative flex h-16 items-center justify-between'>
          <div className='absolute inset-y-0 left-0 flex items-center md:hidden'>
            <SheetMenu navbarLinks={navbarLinks} />
          </div>
          <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
            <DelifitLogo className='flex-shrink-0 bg-lime-50 rounded-full size-10' />
            <NavMenu navbarLinks={navbarLinks} />
          </div>
          <div className='absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0 gap-2'>
            <ThemeToggler />
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
