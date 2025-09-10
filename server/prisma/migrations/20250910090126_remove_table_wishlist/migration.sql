/*
  Warnings:

  - You are about to drop the `wish_list` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."wish_list" DROP CONSTRAINT "wish_list_movie_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."wish_list" DROP CONSTRAINT "wish_list_user_id_fkey";

-- AlterTable
ALTER TABLE "public"."users" ALTER COLUMN "avatarUrl" SET DEFAULT 'https://pub-5472145afdde47758f88673dd3608768.r2.dev/default-avatar.webp';

-- DropTable
DROP TABLE "public"."wish_list";
