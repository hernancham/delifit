"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import { User } from "next-auth";
import { useRouter } from "next/navigation";
import { UserRole } from "@prisma/client";

export async function OptionsAuth({ user }: { user: User }) {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className='rounded-full'>
          <Avatar className='size-8'>
            <AvatarImage
              src={user.image ?? "/assets/avatar-placeholder.svg"}
              alt='Avatar'
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        {(user.rol === UserRole.Admin || user.rol === UserRole.Mod) && (
          <DropdownMenuLabel onClick={() => router.push("/dashboard")}>
            Dashboard
          </DropdownMenuLabel>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => router.push("/mi-cuenta")}>
          Mi Cuenta
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => router.push("/logout")}>
          Cerrar Sesión
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
