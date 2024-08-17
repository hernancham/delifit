import Link from "next/link";
import { loginAction, logoutAction, registerAction } from "@/actions/auth";

export const Navbar = () => {
  return (
    <header className='bg-white'>
      <div className='mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8'>
        <Link href='/'>
          <span className='sr-only'>Home</span>
          <img
            src='/assets/delifit_logo.svg'
            alt='logo delifit'
            className='h-8'
          />
        </Link>

        <div className='flex flex-1 items-center justify-end md:justify-between'>
          <nav className='hidden md:block'>
            <ul className='flex items-center gap-6 text-sm'>
              <li>
                <Link
                  className='text-gray-500 transition hover:text-gray-500/75'
                  href='/dashboard'
                >
                  Dashboard
                </Link>
              </li>

              <li>
                <Link
                  className='text-gray-500 transition hover:text-gray-500/75'
                  href='/admin'
                >
                  Admin
                </Link>
              </li>

              <li>
                <a
                  className='text-gray-500 transition hover:text-gray-500/75'
                  href='/mi-cuenta'
                >
                  Mi cuenta
                </a>
              </li>
            </ul>
          </nav>

          <div className='flex items-center gap-4'>
            <div className='sm:flex sm:gap-4'>
              <Link
                className='block rounded-md bg-lime-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-lime-700'
                href='/login'
              >
                Login
              </Link>

              <Link
                className='block rounded-md bg-lime-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-lime-700'
                href='/logout'
              >
                Logout
              </Link>

              <Link
                className='hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-lime-600 transition hover:text-lime-600/75 sm:block'
                href='/register'
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
