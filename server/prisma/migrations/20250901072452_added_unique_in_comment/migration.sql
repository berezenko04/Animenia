/*
  Warnings:

  - A unique constraint covering the columns `[movie_id,user_id]` on the table `comments` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "comments_movie_id_user_id_key" ON "public"."comments"("movie_id", "user_id");
