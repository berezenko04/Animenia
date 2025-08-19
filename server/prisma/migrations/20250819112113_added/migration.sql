/*
  Warnings:

  - You are about to drop the column `trailerUrl` on the `movies` table. All the data in the column will be lost.
  - Added the required column `trailer_url` to the `movies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."movies" DROP COLUMN "trailerUrl",
ADD COLUMN     "trailer_url" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "public"."movies_likes" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "movie_id" UUID NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "movies_likes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "movies_likes_movie_id_user_id_key" ON "public"."movies_likes"("movie_id", "user_id");

-- AddForeignKey
ALTER TABLE "public"."movies_likes" ADD CONSTRAINT "movies_likes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."movies_likes" ADD CONSTRAINT "movies_likes_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "public"."movies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
