/*
  Warnings:

  - You are about to drop the column `column` on the `Widget` table. All the data in the column will be lost.
  - You are about to drop the column `height` on the `Widget` table. All the data in the column will be lost.
  - You are about to drop the column `row` on the `Widget` table. All the data in the column will be lost.
  - You are about to drop the column `width` on the `Widget` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Widget" DROP COLUMN "column",
DROP COLUMN "height",
DROP COLUMN "row",
DROP COLUMN "width";

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "column" INTEGER NOT NULL,
    "row" INTEGER NOT NULL,
    "widgetId" INTEGER NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Size" (
    "id" SERIAL NOT NULL,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "widgetId" INTEGER NOT NULL,

    CONSTRAINT "Size_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Location_widgetId_key" ON "Location"("widgetId");

-- CreateIndex
CREATE UNIQUE INDEX "Size_widgetId_key" ON "Size"("widgetId");

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_widgetId_fkey" FOREIGN KEY ("widgetId") REFERENCES "Widget"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Size" ADD CONSTRAINT "Size_widgetId_fkey" FOREIGN KEY ("widgetId") REFERENCES "Widget"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
