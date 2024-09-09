"use client";

import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetClose,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import { DelifitLogo } from "@/components/custom/DelifitLogo";

interface TypeNavLink {
  path: string;
  label: string;
}

export const SheetMenu = ({ navbarLinks }: { navbarLinks: TypeNavLink[] }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className='bg-lime-300 rounded-lg'>
          <Menu className='size-6 stroke-current m-2' />
        </button>
      </SheetTrigger>
      <SheetContent
        side='left'
        className='bg-lime-50 dark:bg-lime-900 p-8'
      >
        <SheetHeader className='flex justify-between items-center'>
          <DelifitLogo className='bg-lime-100 rounded-full size-24' />
        </SheetHeader>
        <nav className='mt-8 grid gap-8 text-xl font-medium'>
          <ul className='space-y-4'>
            {navbarLinks.map((nl, i) => {
              return (
                <li
                  key={i}
                  className='hover:underline'
                >
                  <SheetClose asChild>
                    <Link
                      href={nl.path}
                      className='text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                    >
                      {nl.label}
                    </Link>
                  </SheetClose>
                </li>
              );
            })}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
