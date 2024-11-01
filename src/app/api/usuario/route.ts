import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { UserRole } from "@prisma/client";

export const GET = auth(async function GET(request) {
  try {
    const session = request.auth;
    if (session?.user.rol == UserRole.Admin) {
      const data = await prisma.user.findMany({
        select: {
          id: true,
          image: true,
          email: true,
          name: true,
          rol: true,
          puntos: true,
          direccion: true,
          telefono: true,
          fecha_nacimiento: true,
          tipo_documento: true,
          documento: true,
          activo: true,
          createdAt: true,
          updatedAt: true,
        },
      });

      return NextResponse.json(data, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "No tienes permisos para acceder a esta información" },
        { status: 401 }
      );
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al leer los usuarios:", error.message);
    }
    return new NextResponse("Error al leer los usuarios", { status: 500 });
  }
});
