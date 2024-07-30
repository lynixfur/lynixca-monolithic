export async function GET(request: Request) {
    return Response.json({
        paws: [
            {
                id: "018dc723-437f-7578-921b-651b55e4411c",
                parent_fursuit_id: "018dc724-85de-75e6-afb6-8e3cf0a5b053",
                artist: "CabinFemur / Goatfangs",
                nfc_slug: "CUTE.PAW_LEFT",
                enabled: true
            },
            {
                id: "018da2dc-df90-7a9c-b67c-ddc5ee15d5a8",
                parent_fursuit_id: "018dc724-85de-75e6-afb6-8e3cf0a5b053",
                artist: "CabinFemur / Goatfangs",
                nfc_slug: "CUTE.PAW_RIGHT",
                enabled: true
            },
        ]
    });
}