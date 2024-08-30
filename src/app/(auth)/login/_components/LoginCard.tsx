"use client";

import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { SocialButton } from "./SocialButton";
import { GoogleLogo } from "@/components/logos";
import { registerRoute } from "@/auth/routes";
import { LoginForm } from "./LoginForm";
import { DelifitLogo } from "@/components/custom/DelifitLogo";

interface LoginCardProps {
  isVerified: boolean;
  OAuthAccountNotLinked: boolean;
}

export const LoginCard = ({
  isVerified,
  OAuthAccountNotLinked,
}: LoginCardProps) => {
  return (
    <Card className='relative max-w-md shadow-md pt-12'>
      <CardHeader>
        <div className='absolute inset-x-0 -top-14 flex justify-center'>
          <DelifitLogo className='bg-lime-50 shadow-md size-28 rounded-full' />
        </div>
        <CardTitle className='text-3xl font-semibold text-center'>
          Iniciar sesión
        </CardTitle>
        <CardDescription className='text-center text-balance'>
          Bienvenido de nuevo, entra y empieza a disfrutar
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isVerified && (
          <p className='text-center text-green-500 mb-5 text-sm'>
            Email verificado, ahora puedes iniciar sesión
          </p>
        )}
        {OAuthAccountNotLinked && (
          <p className='text-center text-red-500 mb-5 text-sm'>
            Para confirmar tu identidad, inicia sesión con la misma cuenta que
            usaste originalmente.
          </p>
        )}
        <LoginForm />
        <div className='my-4'>
          <SocialButton provider='google'>
            <GoogleLogo className='mr-2 size-4' />
            <span>Inicia sesión con Google</span>
          </SocialButton>
        </div>
      </CardContent>
      <CardFooter>
        <div className=' w-full text-sm text-center'>
          ¿Aún no tienes cuenta?{" "}
          <Link
            href={registerRoute}
            className='underline'
          >
            Registrarse
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};
