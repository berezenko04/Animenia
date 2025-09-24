/*
  Warnings:

  - The values [Magic,School life,Paranormal] on the enum `Genre` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."Genre_new" AS ENUM ('Comedy', 'Romance', 'Drama', 'Fantasy', 'Adventure', 'Action', 'Suspense', 'Sci-Fi', 'Mystery', 'Supernatural');
ALTER TABLE "public"."movies" ALTER COLUMN "genres" TYPE "public"."Genre_new"[] USING ("genres"::text::"public"."Genre_new"[]);
ALTER TYPE "public"."Genre" RENAME TO "Genre_old";
ALTER TYPE "public"."Genre_new" RENAME TO "Genre";
DROP TYPE "public"."Genre_old";
COMMIT;
