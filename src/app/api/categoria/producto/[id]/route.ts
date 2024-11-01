import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { UserRole } from "@prisma/client";

export const DELETE = auth(async function DELETE(request, ctx) {
  try {
    const session = request.auth;
    const { id } = ctx.params as { id: string };
    if (session?.user.rol == UserRole.Admin) {
      await prisma.categoria_producto.update({
        where: { id_cat_producto: id },
        data: { activo: false },
      });
      return NextResponse.json(
        { message: "Categoria eliminada" },
        { status: 200 }
      );
    }
    return NextResponse.json(
      { message: "No tienes permisos para realizar esta acción" },
      { status: 401 }
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(
        "Error al eliminar la categoria de producto:",
        error.message
      );
    }
    return new NextResponse("Error al eliminar la categoria de producto", {
      status: 500,
    });
  }
});
