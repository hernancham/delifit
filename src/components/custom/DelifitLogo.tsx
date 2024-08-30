import { cn } from "@/lib/utils";
import Link from "next/link";

interface DelifitLogoProps {
  className?: string;
}

export const DelifitLogo = ({ className }: DelifitLogoProps) => {
  return (
    <Link
      href='/'
      className={cn("flex items-center justify-center size-12", className)}
    >
      <span className='sr-only'>Delifit</span>
      <img
        src='/assets/delifit_logo.svg'
        alt='logo delifit'
        width={20}
        height={20}
        className='size-4/5'
      />
    </Link>
  );
};
