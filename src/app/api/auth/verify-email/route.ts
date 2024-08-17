import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const token = searchParams.get("token");

  if (!token) {
    return new Response("Token not found", { status: 400 });
  }

  // verificar si existe un token en la base de datos
  const verifyToken = await prisma.verificationToken.findFirst({
    where: {
      token,
    },
  });

  if (!verifyToken) {
    return new Response("Token not found", { status: 400 });
  }

  // verificar si el token ya expiró
  if (verifyToken.expires < new Date()) {
    return new Response("Token expired", { status: 400 });
  }

  // verificar si el email ya esta verificado
  const user = await prisma.user.findUnique({
    where: {
      email: verifyToken.identifier,
    },
  });

  if (user?.emailVerified) {
    return new Response("Email already verified", { status: 400 });
  }

  // marcar el email como verificado
  await prisma.user.update({
    where: {
      email: verifyToken.identifier,
    },
    data: {
      emailVerified: new Date(),
    },
  });

  // eliminar el token
  await prisma.verificationToken.delete({
    where: {
      identifier: verifyToken.identifier,
    },
  });

  // return Response.json({ token });
  redirect("/login?verified=true");
}
