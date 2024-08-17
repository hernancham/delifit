import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export const { auth: middleware } = NextAuth(authConfig);
export { handlers, signIn, signOut, auth } from "./auth";
