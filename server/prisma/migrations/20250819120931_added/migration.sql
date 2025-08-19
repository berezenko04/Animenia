/*
  Warnings:

  - Added the required column `release_year` to the `movies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "public"."Genre" ADD VALUE 'PARANORMAL';

-- AlterTable
ALTER TABLE "public"."movies" ADD COLUMN     "release_year" INTEGER NOT NULL;
