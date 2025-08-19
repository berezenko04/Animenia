-- CreateEnum
CREATE TYPE "public"."Genre" AS ENUM ('COMEDY', 'ROMANCE', 'FANTASY', 'ADVENTURE', 'ACTION', 'MAGIC', 'SCHOOL_LIFE');

-- AlterTable
ALTER TABLE "public"."Avatar" ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "public"."Session" ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "public"."Movie" (
    "id" UUID NOT NULL,
    "poster_url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "rating" INTEGER NOT NULL DEFAULT 0,
    "trailerUrl" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "genres" "public"."Genre"[],

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Screenshot" (
    "id" UUID NOT NULL,
    "url" TEXT NOT NULL,
    "movie_id" UUID NOT NULL,

    CONSTRAINT "Screenshot_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Screenshot" ADD CONSTRAINT "Screenshot_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "public"."Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
