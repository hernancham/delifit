-- CreateEnum
CREATE TYPE "TipoMedida" AS ENUM ('Paquete', 'Botella', 'Caja', 'Unidad', 'Kilogramo', 'Gramo', 'Litro', 'Mililitro', 'Metro', 'Centimetro', 'Milimetro');

-- CreateEnum
CREATE TYPE "TipoPromocion" AS ENUM ('Combo con descuento', 'Oferta especial');

-- CreateEnum
CREATE TYPE "EstadoPedido" AS ENUM ('Procesando', 'Pendiente', 'Aceptado', 'Rechazado', 'Enviado');

-- CreateEnum
CREATE TYPE "UnidadDescuento" AS ENUM ('Porcentaje', 'Valor moneda');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('User', 'Mod', 'Admin');

-- CreateEnum
CREATE TYPE "TipoDocumento" AS ENUM ('DNI', 'Pasaporte', 'Carnet de Extranjería', 'Otro');

-- CreateTable
CREATE TABLE "agregado" (
    "id_agregado" TEXT NOT NULL,
    "img_url" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "agregado_pkey" PRIMARY KEY ("id_agregado")
);

-- CreateTable
CREATE TABLE "agregado_on_categoria" (
    "id_agregado" TEXT NOT NULL,
    "id_cat_producto" TEXT NOT NULL,

    CONSTRAINT "agregado_on_categoria_pkey" PRIMARY KEY ("id_agregado","id_cat_producto")
);

-- CreateTable
CREATE TABLE "categoria_insumo" (
    "id_cat_insumo" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "categoria_insumo_pkey" PRIMARY KEY ("id_cat_insumo")
);

-- CreateTable
CREATE TABLE "categoria_producto" (
    "id_cat_producto" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "indicacion" TEXT,
    "nro_frutas" INTEGER NOT NULL DEFAULT 0,
    "nro_toppings" INTEGER NOT NULL DEFAULT 0,
    "permite_adicionar" BOOLEAN NOT NULL DEFAULT false,
    "activo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "categoria_producto_pkey" PRIMARY KEY ("id_cat_producto")
);

-- CreateTable
CREATE TABLE "categoria_promocion" (
    "id_cat_promocion" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "categoria_promocion_pkey" PRIMARY KEY ("id_cat_promocion")
);

-- CreateTable
CREATE TABLE "descuento_categoria_producto" (
    "id_descuento_categoria" TEXT NOT NULL,
    "valor_descuento" DOUBLE PRECISION NOT NULL,
    "unidad_descuento" "UnidadDescuento" NOT NULL,
    "cantidad_minima_orden" INTEGER NOT NULL DEFAULT 0,
    "fecha_inicio" TIMESTAMP(3) NOT NULL,
    "fecha_fin" TIMESTAMP(3) NOT NULL,
    "id_cat_producto" TEXT NOT NULL,

    CONSTRAINT "descuento_categoria_producto_pkey" PRIMARY KEY ("id_descuento_categoria")
);

-- CreateTable
CREATE TABLE "descuento_producto" (
    "id_descuento" TEXT NOT NULL,
    "valor_descuento" DOUBLE PRECISION NOT NULL,
    "unidad_descuento" "UnidadDescuento" NOT NULL,
    "cantidad_minima_orden" INTEGER NOT NULL DEFAULT 0,
    "fecha_inicio" TIMESTAMP(3) NOT NULL,
    "fecha_fin" TIMESTAMP(3) NOT NULL,
    "id_producto" TEXT NOT NULL,

    CONSTRAINT "descuento_producto_pkey" PRIMARY KEY ("id_descuento")
);

-- CreateTable
CREATE TABLE "insumo" (
    "id_insumo" TEXT NOT NULL,
    "img_url" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "cantidad" DOUBLE PRECISION NOT NULL,
    "medida" "TipoMedida",
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "id_cat_insumo" TEXT NOT NULL,
    "createdat" TIMESTAMP(3) NOT NULL,
    "updatedat" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "insumo_pkey" PRIMARY KEY ("id_insumo")
);

-- CreateTable
CREATE TABLE "lista_producto" (
    "id_pedido" TEXT NOT NULL,
    "id_producto" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "precio_cantidad" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "lista_producto_pkey" PRIMARY KEY ("id_pedido","id_producto")
);

-- CreateTable
CREATE TABLE "lista_promocion" (
    "id_pedido" TEXT NOT NULL,
    "id_promocion" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "precio_cantidad" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "lista_promocion_pkey" PRIMARY KEY ("id_pedido","id_promocion")
);

-- CreateTable
CREATE TABLE "Pedido" (
    "id_pedido" TEXT NOT NULL,
    "subtotal" DOUBLE PRECISION NOT NULL,
    "desc_promocion" DOUBLE PRECISION NOT NULL,
    "desc_puntos" DOUBLE PRECISION,
    "impuesto" DOUBLE PRECISION NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "estado_pedido" "EstadoPedido" NOT NULL DEFAULT 'Procesando',
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,
    "id_usuario" TEXT NOT NULL,

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("id_pedido")
);

-- CreateTable
CREATE TABLE "producto" (
    "id_producto" TEXT NOT NULL,
    "img_url" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "agregados" TEXT[],
    "id_cat_producto" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "producto_pkey" PRIMARY KEY ("id_producto")
);

-- CreateTable
CREATE TABLE "producto_on_promocion" (
    "id_promocion" TEXT NOT NULL,
    "id_producto" TEXT NOT NULL,
    "cantidad" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "producto_on_promocion_pkey" PRIMARY KEY ("id_promocion","id_producto")
);

-- CreateTable
CREATE TABLE "producto_tamanio" (
    "id_producto_tamanio" TEXT NOT NULL,
    "id_producto" TEXT NOT NULL,
    "tamanio" TEXT,
    "precio" DOUBLE PRECISION NOT NULL,
    "precio_puntos" INTEGER,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "producto_tamanio_pkey" PRIMARY KEY ("id_producto_tamanio")
);

-- CreateTable
CREATE TABLE "promocion" (
    "id_promocion" TEXT NOT NULL,
    "img_url" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "precio_base" DOUBLE PRECISION NOT NULL,
    "precio_oferta" DOUBLE PRECISION NOT NULL,
    "estado_promocion" BOOLEAN NOT NULL DEFAULT false,
    "tipo_promocion" "TipoPromocion" NOT NULL,
    "dias_aplicacion" TEXT[],
    "fecha_inicio" TIMESTAMP(3) NOT NULL,
    "fecha_fin" TIMESTAMP(3) NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "id_cat_promocion" TEXT NOT NULL,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "promocion_pkey" PRIMARY KEY ("id_promocion")
);

-- CreateTable
CREATE TABLE "usuario" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "email_verified" TIMESTAMP(3),
    "image" TEXT,
    "password" TEXT,
    "puntos" INTEGER NOT NULL DEFAULT 0,
    "role" "Role" NOT NULL DEFAULT 'User',
    "telefono" TEXT,
    "fecha_nacimiento" TIMESTAMP(3),
    "direccion" TEXT,
    "documento" TEXT,
    "tipo_documento" "TipoDocumento" NOT NULL DEFAULT 'DNI',
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cuenta" (
    "user_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "provider_account_id" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cuenta_pkey" PRIMARY KEY ("provider","provider_account_id")
);

-- CreateTable
CREATE TABLE "sesion" (
    "session_token" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "token_verificacion" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "token_verificacion_pkey" PRIMARY KEY ("identifier")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "sesion_session_token_key" ON "sesion"("session_token");

-- CreateIndex
CREATE UNIQUE INDEX "token_verificacion_identifier_key" ON "token_verificacion"("identifier");

-- AddForeignKey
ALTER TABLE "agregado_on_categoria" ADD CONSTRAINT "agregado_on_categoria_id_agregado_fkey" FOREIGN KEY ("id_agregado") REFERENCES "agregado"("id_agregado") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "agregado_on_categoria" ADD CONSTRAINT "agregado_on_categoria_id_cat_producto_fkey" FOREIGN KEY ("id_cat_producto") REFERENCES "categoria_producto"("id_cat_producto") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "descuento_categoria_producto" ADD CONSTRAINT "descuento_categoria_producto_id_cat_producto_fkey" FOREIGN KEY ("id_cat_producto") REFERENCES "categoria_producto"("id_cat_producto") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "descuento_producto" ADD CONSTRAINT "descuento_producto_id_producto_fkey" FOREIGN KEY ("id_producto") REFERENCES "producto"("id_producto") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "insumo" ADD CONSTRAINT "insumo_id_cat_insumo_fkey" FOREIGN KEY ("id_cat_insumo") REFERENCES "categoria_insumo"("id_cat_insumo") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "lista_producto" ADD CONSTRAINT "lista_producto_id_pedido_fkey" FOREIGN KEY ("id_pedido") REFERENCES "Pedido"("id_pedido") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "lista_producto" ADD CONSTRAINT "lista_producto_id_producto_fkey" FOREIGN KEY ("id_producto") REFERENCES "producto"("id_producto") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "lista_promocion" ADD CONSTRAINT "lista_promocion_id_pedido_fkey" FOREIGN KEY ("id_pedido") REFERENCES "Pedido"("id_pedido") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "lista_promocion" ADD CONSTRAINT "lista_promocion_id_promocion_fkey" FOREIGN KEY ("id_promocion") REFERENCES "promocion"("id_promocion") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "producto" ADD CONSTRAINT "producto_id_cat_producto_fkey" FOREIGN KEY ("id_cat_producto") REFERENCES "categoria_producto"("id_cat_producto") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "producto_on_promocion" ADD CONSTRAINT "producto_on_promocion_id_producto_fkey" FOREIGN KEY ("id_producto") REFERENCES "producto"("id_producto") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "producto_on_promocion" ADD CONSTRAINT "producto_on_promocion_id_promocion_fkey" FOREIGN KEY ("id_promocion") REFERENCES "promocion"("id_promocion") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "producto_tamanio" ADD CONSTRAINT "producto_tamanio_id_producto_fkey" FOREIGN KEY ("id_producto") REFERENCES "producto"("id_producto") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "promocion" ADD CONSTRAINT "promocion_id_cat_promocion_fkey" FOREIGN KEY ("id_cat_promocion") REFERENCES "categoria_promocion"("id_cat_promocion") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "cuenta" ADD CONSTRAINT "cuenta_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sesion" ADD CONSTRAINT "sesion_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;
