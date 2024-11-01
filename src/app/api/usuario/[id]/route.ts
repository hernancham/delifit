import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { UserRole } from "@prisma/client";

export const GET = auth(async function GET(request, ctx) {
  try {
    const session = request.auth;
    const { id } = ctx.params as { id: string };
    if (session?.user.rol == UserRole.Admin || session?.user.id == id) {
      const data = await prisma.user.findUnique({
        where: { id: id },
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
      console.error("Error al leer el usuario:", error.message);
    }
    return new NextResponse("Error al leer el usuario", { status: 500 });
  }
});

export const PATCH = auth(async function PATCH(request, ctx) {
  try {
    const session = request.auth;
    const { id } = ctx.params as { id: string };
    const value = await request.json();
    if (session?.user.rol == UserRole.Admin || session?.user.id == id) {
      if (session?.user.rol == UserRole.Admin) {
        const data = await prisma.user.update({
          where: { id: id },
          data: {
            image: value.image,
            name: value.name,
            rol: value.rol,
            puntos: value.puntos,
            direccion: value.direccion,
            telefono: value.telefono,
            fecha_nacimiento: value.fecha_nacimiento,
            tipo_documento: value.tipo_documento,
            documento: value.documento,
          },
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
      }

      const data = await prisma.user.update({
        where: { id: id },
        data: {
          image: value.image,
          name: value.name,
          direccion: value.direccion,
          telefono: value.telefono,
          fecha_nacimiento: value.fecha_nacimiento,
          tipo_documento: value.tipo_documento,
          documento: value.documento,
        },
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
      console.error("Error al actualizar el usuario:", error.message);
    }
    return new NextResponse("Error al actualizar el usuario", { status: 500 });
  }
});

export const DELETE = auth(async function DELETE(request, ctx) {
  try {
    const session = request.auth;
    const { id } = ctx.params as { id: string };
    if (session?.user.rol == UserRole.Admin) {
      await prisma.user.update({
        where: { id: id },
        data: {
          activo: false,
        },
      });
      return new NextResponse("Usuario eliminado", { status: 200 });
    } else {
      return NextResponse.json(
        { message: "No tienes permisos para acceder a esta información" },
        { status: 401 }
      );
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al eliminar el usuario:", error.message);
    }
    return new NextResponse("Error al eliminar el usuario", { status: 500 });
  }
});
