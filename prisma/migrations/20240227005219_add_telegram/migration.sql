-- AlterTable
ALTER TABLE "Meetup" ADD COLUMN     "bannerImage" TEXT,
ADD COLUMN     "originalCreator" TEXT NOT NULL DEFAULT 'Lynix',
ADD COLUMN     "tags" TEXT[],
ADD COLUMN     "telegramLink" TEXT;
