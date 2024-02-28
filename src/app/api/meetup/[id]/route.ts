import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function GET(request: Request, { params }: { params: { id: string }}) {
    const meetup = await prisma.meetup.findUnique({
        where: {
            slug: params.id as string
        },
        include: {
            attendees: true
        }
    });

    return Response.json(meetup);
}