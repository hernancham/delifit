"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

interface SocialButtonProps {
  children: React.ReactNode;
  provider: string;
}

export const SocialButton = ({ children, provider }: SocialButtonProps) => {
  const handleClick = async () => {
    await signIn(provider);
  };

  return (
    <Button
      onClick={handleClick}
      className='w-full'
    >
      {children}
    </Button>
  );
};
