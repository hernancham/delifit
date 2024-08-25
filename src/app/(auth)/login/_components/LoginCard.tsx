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

interface LoginCardProps {
  isVerified: boolean;
  OAuthAccountNotLinked: boolean;
}

export const LoginCard = ({
  isVerified,
  OAuthAccountNotLinked,
}: LoginCardProps) => {
  return (
    <div className='min-h-screen text-mcd-black lg:grid lg:grid-cols-[3fr_2fr] lg:gap-x-16'>
      <div className='relative hidden lg:flex lg:items-center lg:justify-center'>
        <div className="bg-[url('/media/img1_login.jpg')] bg-center bg-cover w-[90%] h-[80vh] rounded-lg border border-gray-300 overflow-hidden"></div>
      </div>
      <main className='flex items-center justify-center p-8 lg:p-0'>
        <div className='flex flex-col items-center justify-center max-lg:mt-28'>
          <section className='w-full max-w-md'>
            <Card className='w-[400px] shadow-md'>
              <CardHeader>
                <div className="bg-[url('/assets/delifit_logo.svg')] bg-center bg-cover w-20 h-20 mx-auto mb-4"></div>
                <CardTitle className='text-3xl font-semibold text-center'>
                  Iniciar sesión
                </CardTitle>
                <CardDescription className='text-center'>
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
                    Para confirmar tu identidad, inicia sesión con la misma
                    cuenta que usaste originalmente.
                  </p>
                )}
                <LoginForm />
                <div className='my-4'>
                  <SocialButton provider='google'>
                    <GoogleLogo className='mr-2 h-4 w-4' />
                    <span>Inicia sesión con Google</span>
                  </SocialButton>
                </div>
              </CardContent>
              <CardFooter className='flex justify-center'>
                <div className='text-sm text-center'>
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
          </section>
        </div>
      </main>
    </div>
  );
};
