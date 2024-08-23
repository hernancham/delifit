"use client";

import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { GoogleLogo, FacebookLogo, GithubLogo } from "@/components/logos";
import { SocialButton } from "./SocialButton";

import { registerRoute } from "@/auth/routes";
import { LoginForm } from "./LoginForm";

interface LoginCardProps {
  isVerified: boolean;
  OAuthAccountNotLinked: boolean;
}

export const LoginCard = ({
  isVerified,
  OAuthAccountNotLinked,
}: LoginCardProps) => {
  return (
    <Card className='w-[400px] shadow-md'>
      <CardHeader>
        <CardTitle className='text-3xl font-semibold text-center'>
          Iniciar sesión
        </CardTitle>
        <CardDescription>
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
        <Separator className='my-4' />
        <div className='space-y-4'>
          <SocialButton provider='google'>
            <GoogleLogo className='mr-2 h-4 w-4' />
            <span>Inicia sesión con Google</span>
          </SocialButton>
        </div>
      </CardContent>
      <CardFooter>
        <div className='mt-4 text-center text-sm'>
          ¿Aún no tienes cuenta?{" "}
          <Link
            href={registerRoute}
            className='underline'
          >
            registrarse
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};
