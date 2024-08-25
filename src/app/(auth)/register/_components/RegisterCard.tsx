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
import { JSX } from "react";

export const RegisterCard = () => {
  return (
    <div className='min-h-screen text-mcd-black lg:grid lg:grid-cols-[3fr_2fr] lg:gap-16'>
      {/* Imagen visible solo en pantallas grandes */}
      <div className='relative hidden lg:flex lg:items-center lg:justify-center'>
        <div className="bg-[url('/media/img1_register.jpg')] bg-center bg-cover w-[90%] h-[90vh] rounded-lg border border-gray-300 overflow-hidden"></div>
      </div>

      <main className='flex items-center justify-center p-8 lg:p-0'>
        <div className='flex flex-col items-center justify-center max-lg:mt-28'>
          <section className='w-full max-w-md'>
            <Card className='w-[400px] shadow-md'>
              <CardHeader>
                <div className="bg-[url('/assets/delifit_logo.svg')] bg-center bg-cover w-20 h-20 mx-auto mb-4"></div>
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
          </section>
        </div>
      </main>
    </div>
  );
};
