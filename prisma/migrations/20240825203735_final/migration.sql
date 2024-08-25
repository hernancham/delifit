-- CreateEnum
CREATE TYPE "TipoMedida" AS ENUM ('Paquete', 'Botella', 'Caja', 'Unidad', 'Kilogramo', 'Gramo', 'Litro', 'Mililitro', 'Metro', 'Centimetro', 'Milimetro');

-- CreateEnum
CREATE TYPE "TipoPromocion" AS ENUM ('Combo con descuento', 'DeliBox', 'Oferta especial');

-- CreateEnum
CREATE TYPE "EstadoPedido" AS ENUM ('Procesando', 'Pendiente', 'Aceptado', 'Rechazado', 'Enviado');

-- CreateEnum
CREATE TYPE "UnidadDescuento" AS ENUM ('Porcentaje', 'Valor moneda');

-- CreateEnum
CREATE TYPE "TipoDocumento" AS ENUM ('DNI', 'Pasaporte', 'Carnet de Extranjería', 'Otro');

-- CreateEnum
CREATE TYPE "Dia_semana" AS ENUM ('Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo');

-- CreateEnum
CREATE TYPE "MetodoPago" AS ENUM ('Efectivo', 'Tarjeta bancaria', 'Yape', 'Plin', 'Transferencia bancaria', 'Otro');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('User', 'Mod', 'Admin');

-- CreateTable
CREATE TABLE "categoria_insumo" (
    "id_cat_insumo" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nombre" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "categoria_insumo_pkey" PRIMARY KEY ("id_cat_insumo")
);

-- CreateTable
CREATE TABLE "categoria_producto" (
    "id_cat_producto" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nombre" TEXT NOT NULL,
    "indicacion" TEXT,
    "activo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "categoria_producto_pkey" PRIMARY KEY ("id_cat_producto")
);

-- CreateTable
CREATE TABLE "categoria_promocion" (
    "id_cat_promocion" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nombre" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "categoria_promocion_pkey" PRIMARY KEY ("id_cat_promocion")
);

-- CreateTable
CREATE TABLE "descuento_categoria_producto" (
    "id_descuento_categoria" UUID NOT NULL DEFAULT gen_random_uuid(),
    "valor_descuento" DOUBLE PRECISION NOT NULL,
    "unidad_descuento" "UnidadDescuento" NOT NULL,
    "cantidad_minima_orden" INTEGER NOT NULL DEFAULT 0,
    "fecha_inicio" TIMESTAMPTZ(6) NOT NULL,
    "fecha_fin" TIMESTAMPTZ(6) NOT NULL,
    "id_cat_producto" UUID NOT NULL,

    CONSTRAINT "descuento_categoria_producto_pkey" PRIMARY KEY ("id_descuento_categoria")
);

-- CreateTable
CREATE TABLE "insumo" (
    "id_insumo" UUID NOT NULL DEFAULT gen_random_uuid(),
    "img_url" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "cantidad" DOUBLE PRECISION NOT NULL,
    "medida" "TipoMedida",
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "id_cat_insumo" UUID NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "insumo_pkey" PRIMARY KEY ("id_insumo")
);

-- CreateTable
CREATE TABLE "combo_promocion" (
    "id_combo_promocion" UUID NOT NULL DEFAULT gen_random_uuid(),
    "id_promocion" UUID NOT NULL,
    "nombre_opcion" TEXT,
    "cantidad_incluida" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "combo_promocion_pkey" PRIMARY KEY ("id_combo_promocion")
);

-- CreateTable
CREATE TABLE "elegible" (
    "id_elegible" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nombre" TEXT NOT NULL,
    "id_tipo_elegible" UUID,
    "precio_extra" DOUBLE PRECISION NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6),

    CONSTRAINT "elegible_pkey" PRIMARY KEY ("id_elegible")
);

-- CreateTable
CREATE TABLE "elegible_on_producto" (
    "id_elegible_on_producto" UUID NOT NULL DEFAULT gen_random_uuid(),
    "id_producto" UUID,
    "id_elegible" UUID,

    CONSTRAINT "elegible_on_producto_pkey" PRIMARY KEY ("id_elegible_on_producto")
);

-- CreateTable
CREATE TABLE "elegible_producto_combo_pedido" (
    "id_elegible_producto_combo" UUID NOT NULL DEFAULT gen_random_uuid(),
    "id_pedido_combo_producto" UUID,
    "id_producto_tamanio" UUID NOT NULL,
    "id_elegible" UUID,
    "cantidad" INTEGER NOT NULL,
    "precio_extra" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "elegible_producto_combo_pedido_pkey" PRIMARY KEY ("id_elegible_producto_combo")
);

-- CreateTable
CREATE TABLE "elegible_producto_pedido" (
    "id_pedido_elegible" UUID NOT NULL DEFAULT gen_random_uuid(),
    "id_pedido_det_prod" UUID,
    "id_elegible" UUID,
    "cantidad" INTEGER NOT NULL,
    "precio_extra" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "elegible_producto_pedido_pkey" PRIMARY KEY ("id_pedido_elegible")
);

-- CreateTable
CREATE TABLE "pedido" (
    "id_pedido" UUID NOT NULL DEFAULT gen_random_uuid(),
    "id_usuario" UUID,
    "estado_pedido" "EstadoPedido" NOT NULL DEFAULT 'Procesando',
    "fecha_emision" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "metodo_pago" "MetodoPago" NOT NULL,
    "nota" TEXT,
    "impuesto" DOUBLE PRECISION NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6),

    CONSTRAINT "pedido_pkey" PRIMARY KEY ("id_pedido")
);

-- CreateTable
CREATE TABLE "pedido_combo_producto" (
    "id_pedido_combo_producto" UUID NOT NULL DEFAULT gen_random_uuid(),
    "id_pedido_det_promo" UUID NOT NULL,
    "id_combo_promocion" UUID NOT NULL,
    "id_promocion" UUID NOT NULL,
    "id_producto_tamanio" UUID NOT NULL,
    "cantidad" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "pedido_combo_producto_pkey" PRIMARY KEY ("id_pedido_combo_producto")
);

-- CreateTable
CREATE TABLE "pedido_detalle_producto" (
    "id_pedido_det_prod" UUID NOT NULL DEFAULT gen_random_uuid(),
    "id_pedido" UUID,
    "id_producto_tamanio" UUID,
    "cantidad" INTEGER NOT NULL,
    "subtotal" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "pedido_detalle_producto_pkey" PRIMARY KEY ("id_pedido_det_prod")
);

-- CreateTable
CREATE TABLE "pedido_detalle_promocion" (
    "id_pedido_det_promo" UUID NOT NULL DEFAULT gen_random_uuid(),
    "id_pedido" UUID,
    "id_promocion" UUID,
    "cantidad" INTEGER NOT NULL,
    "subtotal" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "pedido_detalle_promocion_pkey" PRIMARY KEY ("id_pedido_det_promo")
);

-- CreateTable
CREATE TABLE "producto_on_combo" (
    "id_producto_on_combo" UUID NOT NULL DEFAULT gen_random_uuid(),
    "id_combo_promocion" UUID NOT NULL,
    "id_producto" UUID NOT NULL,

    CONSTRAINT "producto_on_combo_pkey" PRIMARY KEY ("id_producto_on_combo")
);

-- CreateTable
CREATE TABLE "producto_tipo_elegible" (
    "id_producto_tipo_elegible" UUID NOT NULL DEFAULT gen_random_uuid(),
    "id_producto" UUID,
    "id_tipo_elegible" UUID,
    "cantidad_incluida" INTEGER NOT NULL,

    CONSTRAINT "producto_tipo_elegible_pkey" PRIMARY KEY ("id_producto_tipo_elegible")
);

-- CreateTable
CREATE TABLE "tipo_elegible" (
    "id_tipo_elegible" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nombre" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6),

    CONSTRAINT "tipo_elegible_pkey" PRIMARY KEY ("id_tipo_elegible")
);

-- CreateTable
CREATE TABLE "producto" (
    "id_producto" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "id_cat_producto" UUID,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6),

    CONSTRAINT "producto_pkey" PRIMARY KEY ("id_producto")
);

-- CreateTable
CREATE TABLE "producto_tamanio" (
    "id_producto_tamanio" UUID NOT NULL DEFAULT gen_random_uuid(),
    "id_producto" UUID,
    "tamanio" TEXT NOT NULL,
    "precio_base" DOUBLE PRECISION NOT NULL,
    "precio_puntos" INTEGER,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6),

    CONSTRAINT "producto_tamanio_pkey" PRIMARY KEY ("id_producto_tamanio")
);

-- CreateTable
CREATE TABLE "promocion" (
    "id_promocion" UUID NOT NULL DEFAULT gen_random_uuid(),
    "img_url" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "precio_oferta" DOUBLE PRECISION NOT NULL,
    "ahorro" DOUBLE PRECISION,
    "estado_promocion" BOOLEAN NOT NULL DEFAULT false,
    "tipo_promocion" "TipoPromocion" NOT NULL,
    "dias_aplicacion" "Dia_semana"[],
    "fecha_inicio" TIMESTAMPTZ(6) NOT NULL,
    "fecha_fin" TIMESTAMPTZ(6) NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "id_cat_promocion" UUID NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "promocion_pkey" PRIMARY KEY ("id_promocion")
);

-- CreateTable
CREATE TABLE "usuario" (
    "id_usuario" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT,
    "email" TEXT NOT NULL,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "password" TEXT,
    "puntos" INTEGER NOT NULL DEFAULT 0,
    "rol" "UserRole" NOT NULL DEFAULT 'User',
    "telefono" TEXT,
    "fecha_nacimiento" TIMESTAMP(3),
    "direccion" TEXT,
    "documento" TEXT,
    "tipo_documento" "TipoDocumento" NOT NULL DEFAULT 'DNI',
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "cuenta" (
    "user_id" UUID NOT NULL,
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
    "user_id" UUID NOT NULL,
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
CREATE UNIQUE INDEX "unique_elegible_producto" ON "elegible_on_producto"("id_producto", "id_elegible");

-- CreateIndex
CREATE UNIQUE INDEX "unique_pedido_promo_elegible" ON "elegible_producto_combo_pedido"("id_pedido_combo_producto", "id_producto_tamanio", "id_elegible");

-- CreateIndex
CREATE UNIQUE INDEX "unique_pedido_elegible" ON "elegible_producto_pedido"("id_pedido_det_prod", "id_elegible");

-- CreateIndex
CREATE UNIQUE INDEX "unique_pedido_detalle_prod" ON "pedido_detalle_producto"("id_pedido", "id_producto_tamanio");

-- CreateIndex
CREATE UNIQUE INDEX "unique_pedido_detalle_prom" ON "pedido_detalle_promocion"("id_pedido", "id_promocion");

-- CreateIndex
CREATE UNIQUE INDEX "unique_producto_tipo_elegible" ON "producto_tipo_elegible"("id_producto", "id_tipo_elegible");

-- CreateIndex
CREATE UNIQUE INDEX "unique_tamanio_id_producto" ON "producto_tamanio"("tamanio", "id_producto");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "datos_usuario_unicos" ON "usuario"("email", "documento", "telefono");

-- CreateIndex
CREATE UNIQUE INDEX "sesion_session_token_key" ON "sesion"("session_token");

-- CreateIndex
CREATE UNIQUE INDEX "token_verificacion_identifier_key" ON "token_verificacion"("identifier");

-- AddForeignKey
ALTER TABLE "descuento_categoria_producto" ADD CONSTRAINT "descuento_categoria_producto_id_cat_producto_fkey" FOREIGN KEY ("id_cat_producto") REFERENCES "categoria_producto"("id_cat_producto") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "insumo" ADD CONSTRAINT "insumo_id_cat_insumo_fkey" FOREIGN KEY ("id_cat_insumo") REFERENCES "categoria_insumo"("id_cat_insumo") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "combo_promocion" ADD CONSTRAINT "combo_promocion_id_promocion_fkey" FOREIGN KEY ("id_promocion") REFERENCES "promocion"("id_promocion") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "elegible" ADD CONSTRAINT "elegible_id_tipo_elegible_fkey" FOREIGN KEY ("id_tipo_elegible") REFERENCES "tipo_elegible"("id_tipo_elegible") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "elegible_on_producto" ADD CONSTRAINT "elegible_on_producto_id_elegible_fkey" FOREIGN KEY ("id_elegible") REFERENCES "elegible"("id_elegible") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "elegible_on_producto" ADD CONSTRAINT "elegible_on_producto_id_producto_fkey" FOREIGN KEY ("id_producto") REFERENCES "producto"("id_producto") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "elegible_producto_combo_pedido" ADD CONSTRAINT "elegible_producto_combo_pedido_id_elegible_fkey" FOREIGN KEY ("id_elegible") REFERENCES "elegible"("id_elegible") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "elegible_producto_combo_pedido" ADD CONSTRAINT "elegible_producto_combo_pedido_id_pedido_combo_producto_fkey" FOREIGN KEY ("id_pedido_combo_producto") REFERENCES "pedido_combo_producto"("id_pedido_combo_producto") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "elegible_producto_combo_pedido" ADD CONSTRAINT "elegible_producto_combo_pedido_id_producto_tamanio_fkey" FOREIGN KEY ("id_producto_tamanio") REFERENCES "producto_tamanio"("id_producto_tamanio") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "elegible_producto_pedido" ADD CONSTRAINT "elegible_producto_pedido_id_elegible_fkey" FOREIGN KEY ("id_elegible") REFERENCES "elegible"("id_elegible") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "elegible_producto_pedido" ADD CONSTRAINT "elegible_producto_pedido_id_pedido_det_prod_fkey" FOREIGN KEY ("id_pedido_det_prod") REFERENCES "pedido_detalle_producto"("id_pedido_det_prod") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pedido" ADD CONSTRAINT "pedido_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pedido_combo_producto" ADD CONSTRAINT "pedido_combo_producto_id_combo_promocion_fkey" FOREIGN KEY ("id_combo_promocion") REFERENCES "combo_promocion"("id_combo_promocion") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pedido_combo_producto" ADD CONSTRAINT "pedido_combo_producto_id_pedido_det_promo_fkey" FOREIGN KEY ("id_pedido_det_promo") REFERENCES "pedido_detalle_promocion"("id_pedido_det_promo") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pedido_combo_producto" ADD CONSTRAINT "pedido_combo_producto_id_producto_tamanio_fkey" FOREIGN KEY ("id_producto_tamanio") REFERENCES "producto_tamanio"("id_producto_tamanio") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pedido_combo_producto" ADD CONSTRAINT "pedido_combo_producto_id_promocion_fkey" FOREIGN KEY ("id_promocion") REFERENCES "promocion"("id_promocion") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pedido_detalle_producto" ADD CONSTRAINT "pedido_detalle_producto_id_pedido_fkey" FOREIGN KEY ("id_pedido") REFERENCES "pedido"("id_pedido") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pedido_detalle_producto" ADD CONSTRAINT "pedido_detalle_producto_id_producto_tamanio_fkey" FOREIGN KEY ("id_producto_tamanio") REFERENCES "producto_tamanio"("id_producto_tamanio") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pedido_detalle_promocion" ADD CONSTRAINT "pedido_detalle_promocion_id_pedido_fkey" FOREIGN KEY ("id_pedido") REFERENCES "pedido"("id_pedido") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pedido_detalle_promocion" ADD CONSTRAINT "pedido_detalle_promocion_id_promocion_fkey" FOREIGN KEY ("id_promocion") REFERENCES "promocion"("id_promocion") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "producto_on_combo" ADD CONSTRAINT "producto_on_combo_id_combo_promocion_fkey" FOREIGN KEY ("id_combo_promocion") REFERENCES "combo_promocion"("id_combo_promocion") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "producto_on_combo" ADD CONSTRAINT "producto_on_combo_id_producto_fkey" FOREIGN KEY ("id_producto") REFERENCES "producto"("id_producto") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "producto_tipo_elegible" ADD CONSTRAINT "producto_tipo_elegible_id_producto_fkey" FOREIGN KEY ("id_producto") REFERENCES "producto"("id_producto") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "producto_tipo_elegible" ADD CONSTRAINT "producto_tipo_elegible_id_tipo_elegible_fkey" FOREIGN KEY ("id_tipo_elegible") REFERENCES "tipo_elegible"("id_tipo_elegible") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "producto" ADD CONSTRAINT "producto_id_cat_producto_fkey" FOREIGN KEY ("id_cat_producto") REFERENCES "categoria_producto"("id_cat_producto") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "producto_tamanio" ADD CONSTRAINT "producto_tamanio_id_producto_fkey" FOREIGN KEY ("id_producto") REFERENCES "producto"("id_producto") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "promocion" ADD CONSTRAINT "promocion_id_cat_promocion_fkey" FOREIGN KEY ("id_cat_promocion") REFERENCES "categoria_promocion"("id_cat_promocion") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "cuenta" ADD CONSTRAINT "cuenta_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "usuario"("id_usuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sesion" ADD CONSTRAINT "sesion_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "usuario"("id_usuario") ON DELETE CASCADE ON UPDATE CASCADE;
