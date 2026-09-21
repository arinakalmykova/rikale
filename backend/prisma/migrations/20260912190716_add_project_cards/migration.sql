/*
  Warnings:

  - You are about to drop the column `image` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "image",
ADD COLUMN     "audienceText" TEXT[],
ADD COLUMN     "colors" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "duration" TEXT,
ADD COLUMN     "goals" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "images" TEXT[],
ADD COLUMN     "price" TEXT,
ADD COLUMN     "prototypeText" TEXT[],
ADD COLUMN     "resultText" TEXT,
ADD COLUMN     "tasks" TEXT[] DEFAULT ARRAY[]::TEXT[];
