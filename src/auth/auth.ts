import NextAuth from "next-auth";

import { PrismaAdapter } from "@auth/prisma-adapter";

import { apiAuthRoute, logoutRoute, registerRoute, loginRoute } from "./routes";
import { authConfig } from "./auth.config";
import { prisma } from "@/lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET,
  basePath: apiAuthRoute,
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: loginRoute,
    signOut: logoutRoute,
    newUser: registerRoute,
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, //30 days
    updateAge: 24 * 60 * 60, //24 hours
  },
  callbacks: {
    // jwt() se ejecuta cada vez que se crea o actualiza un token JWT.
    // Aquí es donde puedes agregar información adicional al token.
    jwt({ token, user }) {
      if (user) {
        token.rol = user.rol;
        token.id = user.id;
      }
      return token;
    },
    // session() se utiliza para agregar la información del token a la sesión del usuario,
    // lo que hace que esté disponible en el cliente.
    session({ session, token }) {
      if (session.user && token.id) {
        session.user.rol = token.rol;
        session.user.id = token.id;
      }
      return session;
    },
  },
  events: {
    // El evento linkAccount se dispara cuando una cuenta (proveedor OAuth: GitHub, Google, Facebook, etc.)  se vincula a un usuario existente en tu base de datos.
    async linkAccount({ user }) {
      await prisma.user.update({
        where: { id: user.id },
        data: {
          emailVerified: new Date(),
        },
      });
    },
  },
  ...authConfig,
});
