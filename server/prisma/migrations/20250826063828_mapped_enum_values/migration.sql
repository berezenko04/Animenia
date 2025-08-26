/*
  Warnings:

  - The values [COMEDY,ROMANCE,FANTASY,ADVENTURE,ACTION,MAGIC,SCHOOL_LIFE,PARANORMAL] on the enum `Genre` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."Genre_new" AS ENUM ('Comedy', 'Romance', 'Fantasy', 'Adventure', 'Action', 'Magic', 'School life', 'Paranormal');
ALTER TABLE "public"."movies" ALTER COLUMN "genres" TYPE "public"."Genre_new"[] USING ("genres"::text::"public"."Genre_new"[]);
ALTER TYPE "public"."Genre" RENAME TO "Genre_old";
ALTER TYPE "public"."Genre_new" RENAME TO "Genre";
DROP TYPE "public"."Genre_old";
COMMIT;
