"use client";

import { registerSchema } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { registerAction } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { defaultRoute } from "@/auth/routes";

export const RegisterForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    setError(null);
    startTransition(async () => {
      const response = await registerAction(values);
      if (response.error) {
        setError(response.error);
      } else {
        router.push(defaultRoute);
      }
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-3'
      >
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='max-sm:text-lg sm:text-base'>
                Nombres
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={isPending}
                  type='text'
                  placeholder='Ingresa tus nombres'
                  className='dark:border-graphite-deep'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='max-sm:text-lg sm:text-base'>
                Correo electrónico
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={isPending}
                  type='email'
                  placeholder='Ingresa tu correo electrónico'
                  className='dark:border-graphite-deep'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='max-sm:text-lg sm:text-base'>
                Contraseña
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={isPending}
                  type='password'
                  placeholder='Ingresa tu contraseña'
                  className='dark:border-graphite-deep'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='max-sm:text-lg sm:text-base'>
                Confirmar Contraseña
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={isPending}
                  type='confirmPassword'
                  placeholder='Repite tu contraseña'
                  className='dark:border-graphite-deep'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {error && <FormMessage>{error}</FormMessage>}
        <Button
          disabled={isPending}
          type='submit'
          variant='outline'
          className='w-full text-lg'
        >
          Registrar
        </Button>
      </form>
    </Form>
  );
};
