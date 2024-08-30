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
import { RegisterForm } from "./RegisterForm";
import { loginRoute } from "@/auth/routes";
import { DelifitLogo } from "@/components/custom/DelifitLogo";

export const RegisterCard = () => {
  return (
    <Card className='relative max-w-md shadow-md pt-12'>
      <div className='absolute inset-x-0 -top-14 flex justify-center'>
        <DelifitLogo className='bg-lime-50 shadow-md size-28 rounded-full' />
      </div>
      <CardHeader>
        <CardTitle className='text-3xl font-semibold text-center'>
          Registrar cuenta
        </CardTitle>
        <CardDescription className='text-center text-balance'>
          Crea una cuenta para empezar a disfrutar de nuestros servicios
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RegisterForm />
      </CardContent>
      <CardFooter>
        <div className='w-full text-sm text-center'>
          ¿Ya tienes una cuenta?{" "}
          <Link
            href={loginRoute}
            className='underline'
          >
            Iniciar sesión
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};
