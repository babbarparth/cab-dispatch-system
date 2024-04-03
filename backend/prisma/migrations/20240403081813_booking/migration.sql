/*
  Warnings:

  - You are about to drop the column `TariffID` on the `Booking` table. All the data in the column will be lost.
  - Added the required column `shortestRoute` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tariffId` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalMinutes` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "tariffId",
ADD COLUMN     "shortestRoute" TEXT NOT NULL,
ADD COLUMN     "tariffId" INTEGER NOT NULL,
ADD COLUMN     "totalMinutes" INTEGER NOT NULL;
