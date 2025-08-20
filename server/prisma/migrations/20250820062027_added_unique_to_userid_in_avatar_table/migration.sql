/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `avatars` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "avatars_user_id_key" ON "public"."avatars"("user_id");
