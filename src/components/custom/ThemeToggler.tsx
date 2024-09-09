"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun, Monitor } from "lucide-react";

import { cn } from "@/lib/utils";

interface ThemeTogglerProps {
  isDropDown?: boolean;
  className?: string;
}

export const ThemeToggler = ({
  isDropDown = false,
  className,
}: ThemeTogglerProps) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Or a loader, or whatever fallback you prefer
  }

  const Themes = {
    light: theme === "light",
    system: theme === "system",
    dark: theme === "dark",
  };

  if (isDropDown) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className={cn(
              "bg-lime-300 dark:bg-lime-700 rounded-full m-1",
              className
            )}
          >
            {Themes.light && <Sun className='stroke-1 size-4 m-1' />}
            {Themes.system && <Monitor className='stroke-1 size-4 m-1' />}
            {Themes.dark && <Moon className='stroke-1 size-4 m-1' />}
            <span className='sr-only'>Toggle theme</span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuItem
            className='cursor-pointer'
            onClick={() => setTheme("light")}
          >
            Light
          </DropdownMenuItem>
          <DropdownMenuItem
            className='cursor-pointer'
            onClick={() => setTheme("dark")}
          >
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem
            className='cursor-pointer'
            onClick={() => setTheme("system")}
          >
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
  return (
    <div
      className={cn(
        "flex flex-row space-x-1 items-center rounded-full border border-transparent p-1",
        className
      )}
    >
      <button
        onClick={() => setTheme("light")}
        className={
          Themes.light
            ? "bg-lime-300 rounded-full"
            : "hover:bg-lime-200 dark:hover:bg-lime-900 bg-transparent rounded-full"
        }
      >
        <Sun className='stroke-1 size-4 m-1' />
        <span className='sr-only'>Light theme</span>
      </button>
      <button
        onClick={() => setTheme("system")}
        className={
          Themes.system
            ? "bg-lime-300 dark:bg-lime-700 rounded-full"
            : "hover:bg-lime-200 dark:hover:bg-lime-900 bg-transparent rounded-full"
        }
      >
        <Monitor className='stroke-1 size-4 m-1' />
        <span className='sr-only'>System theme</span>
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={
          Themes.dark
            ? "bg-lime-700 rounded-full"
            : " hover:bg-lime-200 dark:hover:bg-lime-900 bg-transparent rounded-full"
        }
      >
        <Moon className='stroke-1 size-4 m-1' />
        <span className='sr-only'>Dark theme</span>
      </button>
    </div>
  );
};
