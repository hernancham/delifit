import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { UserRole } from "@prisma/client";

export const GET = auth(async function GET(request) {
  const session = request.auth;
  console.log(session?.user.rol);
  // ver todos los header de la peticion
  console.log(request.headers);
  const head = JSON.stringify(request.headers);
  console.log(head);
  return NextResponse.json(
    { session: session, headers: request.headers },
    { status: 200 }
  );
});
