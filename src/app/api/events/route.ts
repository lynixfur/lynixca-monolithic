export async function GET(request: Request) {
    return Response.json({
        events: [
            {
                id: "018da2dc-df90-7a9c-b67c-ddc5ee15d5a8",
                lcm_unique_id: "018da2de-8aa8-7aa4-85a6-f4d0e263be26",
                name: "Furnal Equinox 2024",
                start_date: "2024-03-13T00:00:00.000Z",
                end_date: "2024-03-18T00:00:00.000Z",
                description: "Furnal Equinox is a furry convention in Toronto, ON, Canada.",
                is_furry: true,
                has_started: false,
                is_live: false,
                boop_count: 0,
                nfc_badges: [
                    {
                        "id": "018da2e4-42b8-79d2-9552-75e8bc87fff6",
                        "slug": "CUTE",
                        event_active: true,
                        scan_count: 0,
                        scan_log: []
                    },
                    {
                        "id": "018da2e4-61e6-7e2a-b88b-5fe760a78fbf",
                        "slug": "CUTE_QR",
                        event_active: true,
                        scan_count: 0,
                        scan_log: []
                    }
                ],
                meetup_list: [
                    "Synk"
                ],
                portal: {
                    portal_url: "https://stream.lynix.ca/fe2024-portal",
                    portal_api_token: "furnalequinox",
                    portal_active: false,
                },
                lcm_geolocation_tracking: {
                    active: false,
                    pin_required: true,
                    associated_meetup_event: "018da2e9-3589-7c75-8498-8cc8bc571f45"
                },
                lcm_overlay: {
                    active: false,
                    overlay_url: "https://lynix.ca/overlays/fe2024-overlay",
                    overlay_api_token: "furnalequinox",
                    data: {
                        boop_count: 0,
                        meetup_count: 0
                    }
                },
                memory_vault: {
                    images: [],
                    videos: []
                }
            },
            {
                id: "018da2dd-12ce-748c-a2ff-612e9a8a23de",
                lcm_unique_id: null,
                name: "Furality Umbra",
                start_date: "2024-04-20T00:00:00.000Z",
                end_date: "2024-04-23T00:00:00.000Z",
                description: "Meow.",
                is_furry: true,
                has_started: false,
                is_live: false
            }
        ],
     });
}