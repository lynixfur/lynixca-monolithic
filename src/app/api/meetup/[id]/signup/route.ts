import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

const prisma = new PrismaClient()

export async function GET(request: NextRequest, { params }: { params: { id: string }}) {
    // Create a new attendee
    const attendee = await prisma.attendee.create({
        data: {
            name: request.nextUrl.searchParams.get('name') as string,
            meetup: {
                connect: {
                    slug: params.id as string
                }
            }
        }
    });



    return Response.json(attendee);
}