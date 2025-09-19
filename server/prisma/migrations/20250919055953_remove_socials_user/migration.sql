/*
  Warnings:

  - You are about to drop the column `instagram_username` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `telegram_username` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `twitter_username` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."users" DROP COLUMN "instagram_username",
DROP COLUMN "telegram_username",
DROP COLUMN "twitter_username";
