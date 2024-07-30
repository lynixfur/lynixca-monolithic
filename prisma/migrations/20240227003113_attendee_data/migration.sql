-- CreateTable
CREATE TABLE "Attendee" (
    "id" TEXT NOT NULL,
    "meetupId" TEXT,
    "eventId" TEXT,
    "name" TEXT NOT NULL,
    "avatarUrl" TEXT,
    "preferedMeetupTime" TIMESTAMP(3),

    CONSTRAINT "Attendee_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Attendee" ADD CONSTRAINT "Attendee_meetupId_fkey" FOREIGN KEY ("meetupId") REFERENCES "Meetup"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attendee" ADD CONSTRAINT "Attendee_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;
