/*
  Warnings:

  - A unique constraint covering the columns `[hash]` on the table `password_resets` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "password_resets_hash_key" ON "public"."password_resets"("hash");
