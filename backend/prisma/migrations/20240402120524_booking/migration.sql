/*
  Warnings:

  - Made the column `TariffID` on table `Booking` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userEmail` on table `Booking` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Booking" ALTER COLUMN "tariffId" SET NOT NULL,
ALTER COLUMN "userEmail" SET NOT NULL;
