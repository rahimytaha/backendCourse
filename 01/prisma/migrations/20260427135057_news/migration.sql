-- CreateTable
CREATE TABLE "news_like" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "news_id" INTEGER NOT NULL,

    CONSTRAINT "news_like_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "news_dislike" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "news_id" INTEGER NOT NULL,

    CONSTRAINT "news_dislike_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "news_like" ADD CONSTRAINT "news_like_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "news_like" ADD CONSTRAINT "news_like_news_id_fkey" FOREIGN KEY ("news_id") REFERENCES "news"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "news_dislike" ADD CONSTRAINT "news_dislike_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "news_dislike" ADD CONSTRAINT "news_dislike_news_id_fkey" FOREIGN KEY ("news_id") REFERENCES "news"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
