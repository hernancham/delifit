/*
  Warnings:

  - You are about to drop the column `updateAt` on the `usuario` table. All the data in the column will be lost.
  - Added the required column `img_url` to the `producto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "producto" ADD COLUMN     "img_url" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "producto_tamanio" ADD COLUMN     "img_url" TEXT;

-- AlterTable
ALTER TABLE "usuario" DROP COLUMN "updateAt",
ADD COLUMN     "updatedAt" TIMESTAMPTZ(6) NOT NULL;
