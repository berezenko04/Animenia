-- CreateIndex
CREATE INDEX "comments_movie_id_idx" ON "public"."comments"("movie_id");

-- CreateIndex
CREATE INDEX "movies_release_year_idx" ON "public"."movies"("release_year");

-- CreateIndex
CREATE INDEX "movies_genres_idx" ON "public"."movies" USING GIN ("genres");

-- CreateIndex
CREATE INDEX "movies_likes_movie_id_idx" ON "public"."movies_likes"("movie_id");

-- CreateIndex
CREATE INDEX "password_resets_user_id_idx" ON "public"."password_resets"("user_id");

-- CreateIndex
CREATE INDEX "screenshots_movie_id_idx" ON "public"."screenshots"("movie_id");

-- CreateIndex
CREATE INDEX "sessions_user_id_idx" ON "public"."sessions"("user_id");
