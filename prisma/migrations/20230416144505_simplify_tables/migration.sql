/*
  Warnings:

  - You are about to drop the column `profileId` on the `Widget` table. All the data in the column will be lost.
  - You are about to drop the `Location` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Size` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `column` to the `Widget` table without a default value. This is not possible if the table is not empty.
  - Added the required column `height` to the `Widget` table without a default value. This is not possible if the table is not empty.
  - Added the required column `row` to the `Widget` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Widget` table without a default value. This is not possible if the table is not empty.
  - Added the required column `width` to the `Widget` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_widgetId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- DropForeignKey
ALTER TABLE "Size" DROP CONSTRAINT "Size_widgetId_fkey";

-- DropForeignKey
ALTER TABLE "Widget" DROP CONSTRAINT "Widget_profileId_fkey";

-- AlterTable
ALTER TABLE "Widget" DROP COLUMN "profileId",
ADD COLUMN     "column" INTEGER NOT NULL,
ADD COLUMN     "height" INTEGER NOT NULL,
ADD COLUMN     "row" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD COLUMN     "width" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Location";

-- DropTable
DROP TABLE "Profile";

-- DropTable
DROP TABLE "Size";

-- AddForeignKey
ALTER TABLE "Widget" ADD CONSTRAINT "Widget_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
