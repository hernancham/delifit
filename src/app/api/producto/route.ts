import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  let data;
  const { searchParams } = new URL(request.url);

  try {
    const activo = searchParams.get("activo");
    if (activo === "true" || activo === "false") {
      data = await prisma.producto.findMany({
        select: {
          id_producto: true,
          img_url: true,
          nombre: true,
          descripcion: true,
          id_cat_producto: true,
          activo: true,
          createdAt: true,
          updatedAt: true,
          categoria_producto: {
            select: {
              nombre: true,
              id_cat_producto: true,
            },
          },
        },
      });
    } else {
      data = await prisma.producto.findMany({
        select: {
          id_producto: true,
          img_url: true,
          nombre: true,
          descripcion: true,
          id_cat_producto: true,
          activo: true,
          createdAt: true,
          updatedAt: true,
          categoria_producto: {
            select: {
              nombre: true,
              id_cat_producto: true,
            },
          },
        },
      });
    }
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al leer los productos:", error.message);
    }
    return new NextResponse("Error al leer los productos", { status: 500 });
  }
}
