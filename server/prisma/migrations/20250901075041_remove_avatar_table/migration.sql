/*
  Warnings:

  - You are about to drop the `avatars` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."avatars" DROP CONSTRAINT "avatars_user_id_fkey";

-- AlterTable
ALTER TABLE "public"."users" ADD COLUMN     "avatarUrl" TEXT NOT NULL DEFAULT '/public/assets/default-avatar.png';

-- DropTable
DROP TABLE "public"."avatars";
