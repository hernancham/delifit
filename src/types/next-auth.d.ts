import { DefaultSession } from "next-auth";
import "next-auth/jwt";
import { UserRole } from "@prisma/client";

declare module "next-auth" {
  interface Session {
    user: {
      rol?: UserRole;
    } & DefaultSession["user"];
  }

  interface User {
    rol?: UserRole;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    rol?: UserRole;
    id?: string;
  }
}
