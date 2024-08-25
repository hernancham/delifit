import { DefaultSession } from "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      rol?: string;
    } & DefaultSession["user"];
  }

  interface User {
    rol?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    rol?: string;
    id?: string;
  }
}
