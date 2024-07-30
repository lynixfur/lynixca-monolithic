export async function GET(request: Request) {
    return Response.json({
        id: "018dc724-85de-75e6-afb6-8e3cf0a5b053",
        name: "Lynix's Partial",
        species: "Freakhound",
        artists: [
            "CabinFemur / Goatfangs",
        ],
        parts: [
            "https://lynix.ca/api/fursuit/paws",
            "https://lynix.ca/api/fursuit/head",
            "https://lynix.ca/api/fursuit/tail"
        ],
        local_ip: null,
        connected: false,
        completed: false,
    });
}