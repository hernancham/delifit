"use client";

import { loginSchema } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { loginAction } from "@/actions/auth";
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

import { GoogleLogo, FacebookLogo, GithubLogo } from "@/components/logos";
import { SocialButton } from "./SocialButton";

interface LoginFormProps {
  isVerified: boolean;
  OAuthAccountNotLinked: boolean;
}

export const LoginForm = ({
  isVerified,
  OAuthAccountNotLinked,
}: LoginFormProps) => {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    setError(null);
    startTransition(async () => {
      const response = await loginAction(values);
      if (response.error) {
        setError(response.error);
      } else {
        router.push("/dashboard");
      }
    });
  }

  return (
    <div className='max-w-52'>
      <h1 className='mb-5 text-center text-2xl'>Login</h1>
      {isVerified && (
        <p className='text-center text-green-500 mb-5 text-sm'>
          Email verified, you can now login
        </p>
      )}
      {OAuthAccountNotLinked && (
        <p className='text-center text-red-500 mb-5 text-sm'>
          To confirm your identity, sign in with the same account you used
          originally.
        </p>
      )}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-8'
        >
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder='email'
                    type='email'
                    {...field}
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
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder='password'
                    type='password'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {error && <FormMessage>{error}</FormMessage>}
          <Button
            type='submit'
            disabled={isPending}
          >
            Submit
          </Button>
        </form>
      </Form>
      <div className='mt-5 space-y-4'>
        <SocialButton provider='github'>
          <GithubLogo className='mr-2 h-4 w-4' />
          <span>Sign in with Github</span>
        </SocialButton>
        <SocialButton provider='facebook'>
          <FacebookLogo className='mr-2 h-4 w-4' />
          <span>Sign in with Facebook</span>
        </SocialButton>
        <SocialButton provider='google'>
          <GoogleLogo className='mr-2 h-4 w-4' />
          <span>Sign in with Google</span>
        </SocialButton>
      </div>
    </div>
  );
};
