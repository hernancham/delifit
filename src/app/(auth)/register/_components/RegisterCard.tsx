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

export const RegisterCard = () => {
  return (
    <Card className='max-w-md shadow-md'>
      <CardHeader>
        <Link
          href='/'
          className='flex items-center justify-center mx-auto mb-2 bg-lime-50 rounded-full size-28 '
        >
          <span className='sr-only'>Home</span>
          <img
            src='/assets/delifit_logo.svg'
            alt='logo delifit'
            width={20}
            height={20}
            className='size-4/5'
          />
        </Link>
        <CardTitle className='text-3xl font-semibold text-center'>
          Registrar cuenta
        </CardTitle>
        <CardDescription className='text-center'>
          Crea una cuenta para empezar a disfrutar de nuestros servicios
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RegisterForm />
      </CardContent>
      <CardFooter className='flex justify-center'>
        <div className='text-sm text-center'>
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
