import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { UserRole } from "@prisma/client";

export async function GET(request: Request) {
  try {
    const data = await prisma.categoria_producto.findMany({
      select: {
        id_cat_producto: true,
        nombre: true,
        indicacion: true,
        activo: true,
      },
    });
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      console.error(
        "Error al leer las categorias de productos:",
        error.message
      );
    }
    return new NextResponse("Error al leer las categorias de productos", {
      status: 500,
    });
  }
}

export const POST = auth(async function POST(request) {
  try {
    const value = await request.json();
    const session = request.auth;
    if (session?.user.rol == UserRole.Admin) {
      const data = await prisma.categoria_producto.create({
        data: {
          nombre: value.nombre,
          indicacion: value.indicacion,
        },
        select: {
          id_cat_producto: true,
          nombre: true,
          indicacion: true,
          activo: true,
        },
      });
      return NextResponse.json(data, { status: 200 });
    }
    return NextResponse.json(
      { message: "No tienes permisos para realizar esta acción" },
      { status: 401 }
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al crear la categoria de producto:", error.message);
    }
    return new NextResponse("Error al crear la categoria de producto", {
      status: 500,
    });
  }
});
