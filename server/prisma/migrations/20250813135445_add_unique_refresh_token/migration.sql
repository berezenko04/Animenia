/*
  Warnings:

  - A unique constraint covering the columns `[refresh_token]` on the table `Session` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Session_refresh_token_key" ON "public"."Session"("refresh_token");
